import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { IChat } from "../../../../interfaces/IChat";
import { IUser } from "../../../../interfaces/IUser";
import api from "../../../../services/api";
import {
  AddMembersContainer,
  Container,
  FooterButtons,
  Modal,
  UserSearchAddContainer,
} from "./styles";

interface IProps {
  user: IUser;
  room: IChat;
  isUpdate?: boolean;
  onSetOpen: any;
}

function AddNewGroup({ user, room, isUpdate = false, onSetOpen }: IProps) {
  const [groupName, setGroupName] = useState<string>("");
  const [memberEmail, setMemberEmail] = useState<string>("");
  const [members, setMembers] = useState<any[]>([]);
  const [membersInit, setMembersInit] = useState<IUser[]>([]);

  useEffect(() => {
    if (!isUpdate) return;

    const req = async () => {
      await api.post(`/chats/getUsersWithChatName`, { room }).then((res) => {
        setGroupName(res.data[0].chatName);
        setMembers(res.data);
        setMembersInit(res.data);
      });
    };

    req();
  }, [isUpdate]);

  function handleApplicateGroupName(e: any) {
    setGroupName(e.target.value);
  }

  async function handleInsertMemberInTheGroup() {
    if (memberEmail === "" || memberEmail === user?.email) {
      setMemberEmail("");
      return;
    }

    const existsUserInTheList = members.includes(
      (user: IUser) => user?.email === memberEmail
    );

    if (existsUserInTheList) {
      setMemberEmail("");
      return;
    }

    await api.post("/users/email", { email: memberEmail }).then((res: any) => {
      const hasEmailAdd = members.find(
        (member: IUser) => member?.email === res.data?.email
      );

      if (hasEmailAdd || !res.data) {
        setMemberEmail("");
        return;
      }

      setMembers((memb: IUser[]) => [...memb, res.data]);
      setMemberEmail("");
    });
  }

  async function handleCreateOrUpdateChat() {
    if (groupName === "") {
      return;
    }

    if (isUpdate) {
      await handleUpdateChat();
      return;
    }

    await handleCreateNewChat();
  }

  async function handleCreateNewChat() {
    let users: IUser[] = members;
    users.push(user);

    const body = {
      name: groupName,
      users,
      isPrivate: false,
    };

    await api.post("/chats", body).then(() => onSetOpen(false));
  }

  async function handleUpdateChat() {
    let insertMembers = [];
    let removeMembers = [];

    for (let member of members) {
      let isMemberSavedInTheChat = membersInit.includes(member);

      if (!isMemberSavedInTheChat) {
        insertMembers.push(member);
      }
    }

    for (let memberInit of membersInit) {
      let isMemberRemoved = !members.includes(memberInit);

      if (isMemberRemoved) {
        removeMembers.push(memberInit);
      }
    }

    const body = {
      name: groupName,
      roomId: room.id,
      insertMembers,
      removeMembers,
    };

    await api.put("/chats", body).then(() => onSetOpen(false));
  }

  function handleRemoveMember(index: number) {
    setMembers((membersState) =>
      membersState.filter((memberState, i) => i !== index)
    );
  }

  return (
    <>
      <Modal>
        <Container>
          <div>
            <h1>Informações do chat</h1>
            <input
              type="text"
              value={groupName}
              placeholder="Nome do grupo"
              onChange={handleApplicateGroupName}
            />
          </div>

          <UserSearchAddContainer>
            <input
              type="email"
              value={memberEmail}
              placeholder="E-mail do membro do grupo"
              onChange={(e) => setMemberEmail(e.target.value)}
              onKeyPress={(event) => {
                event.key === "Enter" && handleInsertMemberInTheGroup();
              }}
            />

            <button
              type="button"
              onClick={() => handleInsertMemberInTheGroup()}
            >
              +
            </button>
          </UserSearchAddContainer>

          <AddMembersContainer>
            {members.map((member, index) => (
              <h5 key={index}>
                {index + 1}. {member?.name}
                <span onClick={() => handleRemoveMember(index)}>
                  <FaTrash />
                </span>
              </h5>
            ))}
          </AddMembersContainer>

          <FooterButtons>
            <button type="button" onClick={() => onSetOpen(false)}>
              Cancelar
            </button>

            <button type="button" onClick={() => handleCreateOrUpdateChat()}>
              Salvar
            </button>
          </FooterButtons>
        </Container>
      </Modal>
    </>
  );
}

export default AddNewGroup;

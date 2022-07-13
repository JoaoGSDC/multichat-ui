import React, { useEffect, useState } from "react";
import { FaUsers } from "react-icons/fa";
import { RiChatSmile3Fill } from "react-icons/ri";
import { MdOutlineAddCircle } from "react-icons/md";
import api from "../../../../services/api";
import {
  Container,
  GroupImg,
  GroupOption,
  LogoContainer,
  NewGroupButton,
  Options,
} from "./styles";
import AddNewGroup from "../AddNewGroup";
import { IUser } from "../../../../interfaces/IUser";
import { IChat } from "../../../../interfaces/IChat";

interface IProps {
  socket: any;
  user: IUser;
  onSetRoom: any;
}

function Groups({ user, socket, onSetRoom }: IProps) {
  const [openAddGroup, setOpenAddGroup] = useState(false);
  const [getChats, setGetChats] = useState(false);

  const [rooms, setRooms] = useState<IChat[]>([]);
  const [room, setRoom] = useState<IChat>({} as IChat);

  useEffect(() => {
    const req = async () => {
      await api.post(`/chats/allByUser`, { user }).then((res) => {
        if (res.data === rooms) return;
        setRooms(res.data);
      });
    };

    req();
  }, [getChats]);

  useEffect(() => {
    const interval = setInterval(() => setGetChats((gc) => !gc), 1500);
    return () => clearInterval(interval);
  }, []);

  function joinRoom(selectedRoom: IChat) {
    setRoom(selectedRoom);
    onSetRoom(selectedRoom);

    if (user && selectedRoom) {
      socket.emit("JOIN_ROOM", selectedRoom.id);
    }
  }

  return (
    <>
      <Container>
        <LogoContainer>
          <h1>
            <RiChatSmile3Fill /> Multi Chat
          </h1>
        </LogoContainer>

        <NewGroupButton type="button" onClick={() => setOpenAddGroup(true)}>
          <MdOutlineAddCircle /> Adicionar novo grupo
        </NewGroupButton>

        <Options>
          {rooms.map((room) => (
            <GroupOption
              key={room.id}
              type="button"
              onClick={() => joinRoom(room)}
            >
              <GroupImg>
                <FaUsers />
              </GroupImg>

              <h3>{room.name}</h3>
            </GroupOption>
          ))}
        </Options>
      </Container>

      {openAddGroup ? (
        <AddNewGroup
          user={user}
          room={room}
          onSetOpen={(value: boolean) => {
            setOpenAddGroup(value);
            setGetChats((getChats) => !getChats);
          }}
        />
      ) : (
        <></>
      )}
    </>
  );
}

export default Groups;

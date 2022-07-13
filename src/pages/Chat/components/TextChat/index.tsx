import React, { useEffect, useState } from "react";
import { MdEmail } from "react-icons/md";
import { BiDotsVerticalRounded } from "react-icons/bi";
import {
  ChatBody,
  ChatFooter,
  ChatHeader,
  ChatRoomOptions,
  Container,
} from "./styles";
import api from "../../../../services/api";
import AddNewGroup from "../AddNewGroup";
import { datetimeToTime } from "../../../../utils/datetimeToTime";
import { IChat } from "../../../../interfaces/IChat";
import { IUser } from "../../../../interfaces/IUser";

interface IMessageList {
  room: string;
  author: string;
  message: string;
  time: string;
}

interface IProps {
  user: IUser;
  socket: any;
  room: IChat;
  onDeleteRoom: any;
}

function TextChat({ user, socket, room, onDeleteRoom }: IProps) {
  const isUpdate = true;

  const [openAddGroup, setOpenAddGroup] = useState(false);
  const [openMenuChatOptions, setOpenMenuChatOptions] = useState(false);

  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState<IMessageList[]>([]);

  useEffect(() => {
    const handleNewMessage = (data: any) =>
      setMessageList((list) => [...list, data]);

    socket.on("CHAT_MESSAGE", handleNewMessage);

    return () => socket.off("CHAT_MESSAGE", handleNewMessage);
  }, [socket, messageList]);

  useEffect(() => {
    const req = async () => {
      await api.get(`/messages/${user.id}&${room.id}`).then(({ data }: any) => {
        data.map((msgs: any) => (msgs.time = datetimeToTime(msgs.time)));
        setMessageList(data);
      });
    };

    req();
  }, [room.id, user.id]);

  useEffect(() => {
    var element = document.getElementById("chatContainer") as HTMLElement;
    element.scrollTop = element.scrollHeight;
  }, [messageList]);

  const handleFormSubmit = async () => {
    if (currentMessage.trim()) {
      const messageData = {
        room: room.id,
        author: user.name,
        message: currentMessage,
        time: datetimeToTime(new Date(Date.now())),
      };

      const data = {
        msg: currentMessage,
        userId: user.id,
        chatId: room.id,
      };

      socket.emit("CHAT_MESSAGE", messageData);
      await api.post("/messages", data);

      setCurrentMessage("");
    }
  };

  async function handleDeleteChat() {
    await api.delete(`/chats/${room.id}`).then(() => onDeleteRoom(true));
  }

  return (
    <>
      <Container>
        <ChatHeader>
          <h2>
            <MdEmail />
            {room.name}
          </h2>

          <h2 onClick={() => setOpenMenuChatOptions((op) => !op)}>
            <BiDotsVerticalRounded />
          </h2>

          {openMenuChatOptions ? (
            <ChatRoomOptions>
              <li
                onClick={() => {
                  setOpenAddGroup(true);
                  setOpenMenuChatOptions(false);
                }}
              >
                Editar chat
              </li>
              <li onClick={() => handleDeleteChat()}>Deletar chat</li>
            </ChatRoomOptions>
          ) : (
            <></>
          )}
        </ChatHeader>

        <ChatBody id="chatContainer">
          {messageList.map((messageContent) => {
            return (
              <div
                key={JSON.stringify(messageContent)}
                className="message"
                id={user.name === messageContent.author ? "you" : "other"}
              >
                <div>
                  <div>
                    <h6 id="author">{messageContent.author ?? "Multi Chat"}</h6>
                    <p>{messageContent.message}</p>
                    <h5 id="time">{messageContent.time}</h5>
                  </div>
                </div>
              </div>
            );
          })}
        </ChatBody>

        <ChatFooter>
          <input
            type="text"
            value={currentMessage}
            placeholder="Mensagem"
            onChange={(event) => {
              setCurrentMessage(event.target.value);
            }}
            onKeyPress={(event) => {
              event.key === "Enter" && handleFormSubmit();
            }}
          />
          <button onClick={handleFormSubmit}>&#9658;</button>
        </ChatFooter>
      </Container>

      {openAddGroup ? (
        <AddNewGroup
          user={user}
          room={room}
          isUpdate={isUpdate}
          onSetOpen={(value: boolean) => {
            setOpenAddGroup(value);
          }}
        />
      ) : (
        <></>
      )}
    </>
  );
}

export default TextChat;

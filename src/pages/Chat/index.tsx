import React, { useEffect, useState } from "react";
import { connect } from "socket.io-client";
import Groups from "./components/Groups";
import { Container, NoChatContainer } from "./styles";
import TextChat from "./components/TextChat";
import { RiChatSmile3Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { IUser } from "../../interfaces/IUser";
import { IChat } from "../../interfaces/IChat";

const socket = connect(String(process.env.REACT_APP_BASE_URL));

function Chat() {
  const navigate = useNavigate();
  const [room, setRoom] = useState<IChat | null>(null);

  const user: IUser = JSON.parse(String(localStorage.getItem("user")));

  useEffect(() => {
    const token = user?.token ?? "";

    if (token === "") {
      navigate("/login");
    }
  }, [navigate, user?.token]);

  return (
    <Container>
      <Groups
        user={user}
        socket={socket}
        onSetRoom={(value: IChat) => setRoom(value)}
      />

      {room ? (
        <TextChat
          socket={socket}
          room={room}
          user={user}
          onDeleteRoom={() => setRoom(null)}
        />
      ) : (
        <>
          <NoChatContainer>
            <h1>
              <RiChatSmile3Fill />
            </h1>
            <h1>BORA BATER UM PAPO?</h1>
          </NoChatContainer>
        </>
      )}
    </Container>
  );
}

export default Chat;

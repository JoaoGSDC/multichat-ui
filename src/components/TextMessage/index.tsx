import React from "react";
import { Container } from "./styles";

interface IProps {
  username: string;
  msg: string;
  isCurrentUserMsg: boolean;
}

function TextMessage({ username, msg, isCurrentUserMsg }: IProps) {
  return (
    <>
      <Container backgroundColor={!isCurrentUserMsg ? "#222c33" : "#225b4b"}>
        <h5>{username}</h5>

        <p>{msg}</p>
      </Container>
    </>
  );
}

export default TextMessage;

import React, { useEffect, useState } from "react";
import { RiChatSmile3Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { IUser } from "../../interfaces/IUser";
import Login from "./components/Login";
import Registration from "./components/Registration";
import { Container, TitleContainer } from "./styles";

function Authentication() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const user: IUser = JSON.parse(String(localStorage.getItem("user")));

  useEffect(() => {
    const token = user?.token ?? "";

    if (token !== "") {
      navigate("/");
    }
  }, [navigate, user?.token]);

  return (
    <Container>
      <TitleContainer>
        <h1>
          <RiChatSmile3Fill /> Multi Chat
        </h1>
        <h3>Seja muito bem vindo ao Multi Chat!</h3>
      </TitleContainer>

      {isLogin ? (
        <>
          <Login onOpenRegistration={setIsLogin} />
        </>
      ) : (
        <>
          <Registration onOpenLogin={setIsLogin} />
        </>
      )}
    </Container>
  );
}

export default Authentication;

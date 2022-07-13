import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { RiChatSmile3Fill } from "react-icons/ri";
import { Button } from "../../../../assets/styles/module/buttons";
import api from "../../../../services/api";
import { ButtonsContainer, FooterButtons, Form } from "../../styles";

interface IProps {
  onOpenRegistration: any;
}

function Login({ onOpenRegistration }: IProps) {
  const navigate = useNavigate();

  const defaultValues = {
    email: "",
    password: "",
  };

  const { register, handleSubmit } = useForm({ defaultValues });

  async function handleSubmitForm(dataValue: any) {
    await api.post("/users/auth", dataValue).then((res: any) => {
      localStorage.setItem("user", JSON.stringify(res.data));
      navigate("/");
    });
  }

  return (
    <>
      <Form onSubmit={handleSubmit((data: any) => handleSubmitForm(data))}>
        <h1>
          <RiChatSmile3Fill />
        </h1>

        <input type="email" placeholder="E-mail" {...register("email")} />
        <input type="password" placeholder="Senha" {...register("password")} />

        <FooterButtons>
          <ButtonsContainer>
            <Button type="submit" backgroundColor="#fbfbfb">
              Entrar
            </Button>

            <Button
              type="button"
              backgroundColor="transparent"
              onClick={() => onOpenRegistration(false)}
            >
              Não tem cadastro? Registre-se agora!
            </Button>
          </ButtonsContainer>
        </FooterButtons>
      </Form>
    </>
  );
}

export default Login;

import React from "react";
import { useForm } from "react-hook-form";
import { RiChatSmile3Fill } from "react-icons/ri";
import { Button } from "../../../../assets/styles/module/buttons";
import api from "../../../../services/api";
import { ButtonsContainer, FooterButtons, Form } from "../../styles";
import { PasswordsContainer } from "./styles";

interface IProps {
  onOpenLogin: any;
}

function Registration({ onOpenLogin }: IProps) {
  const defaultValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const { register, handleSubmit } = useForm({ defaultValues });

  async function handleSubmitForm(dataValue: any) {
    if (dataValue.password !== dataValue.confirmPassword) {
      window.alert("Senhas não estão iguais!");
      return;
    }

    await api.post("/users", dataValue).then(() => onOpenLogin(true));
  }

  return (
    <Form onSubmit={handleSubmit((data: any) => handleSubmitForm(data))}>
      <h1>
        <RiChatSmile3Fill />
      </h1>

      <input type="name" placeholder="Nome" {...register("name")} />
      <input type="email" placeholder="E-mail" {...register("email")} />
      <PasswordsContainer>
        <input type="password" placeholder="Senha" {...register("password")} />
        <input
          type="password"
          placeholder="Confirmar Senha"
          {...register("confirmPassword")}
        />
      </PasswordsContainer>

      <FooterButtons>
        <ButtonsContainer>
          <Button type="submit" backgroundColor="#fbfbfb">
            Salvar
          </Button>

          <Button
            type="button"
            backgroundColor="#ea3f7a"
            onClick={() => onOpenLogin(true)}
          >
            Cancelar
          </Button>
        </ButtonsContainer>
      </FooterButtons>
    </Form>
  );
}

export default Registration;

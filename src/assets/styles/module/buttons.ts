import styled from "styled-components";

export const Button = styled.button.attrs(
  (props: { backgroundColor: string }) => props
)`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 40px;
  min-width: 100px;

  color: #27cfbd;
  background-color: ${(props: any) =>
    props.backgroundColor ? props.backgroundColor : "#2873b6"};
  border-radius: 4px;
  border: none;

  padding: 0px 16px;

  transition: 0.3s;

  &:hover {
    cursor: pointer;
    background-color: ${(props: any) =>
      props.backgroundColor !== "transparent"
        ? "#e9e9e9"
        : props.backgroundColor};

    text-decoration: ${(props: any) =>
      props.backgroundColor === "transparent" ? "underline" : "auto"};
  }
`;

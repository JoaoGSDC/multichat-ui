import styled from "styled-components";

export const Container = styled.div.attrs(
  (props: { backgroundColor: string }) => props
)`
  display: flex;
  background-color: ${(props: any) => props.backgroundColor};
  padding: 8px;
  margin: 8px;
  max-width: 484px;
  border-radius: 4px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);

  h5 {
    color: #53a6fd;
  }
`;

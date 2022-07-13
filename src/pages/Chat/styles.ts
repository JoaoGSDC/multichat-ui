import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100%;
`;

export const NoChatContainer = styled.div`
  flex: 3;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    margin: 0px;
  }

  h1:first-of-type {
    font-size: 6rem;
  }
`;

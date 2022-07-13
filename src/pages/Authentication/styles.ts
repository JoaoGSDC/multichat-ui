import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  height: calc(100% - 32px);
  padding: 16px;
  padding-top: 32px;
  flex-direction: column;

  @media only screen and (min-width: 600px) {
    padding-top: 16px;
    flex-direction: row;
  }
`;

export const TitleContainer = styled.div`
  text-align: center;
  margin: 60px 0px;

  h1 {
    font-size: 3.5rem;
    margin: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #27cfbd;

    svg {
      margin-right: 8px;
    }
  }

  h3 {
    color: #225b4b;
    margin-top: 8px;
    margin: 0px;
  }

  @media only screen and (min-width: 600px) {
    margin: initial;

    h1 {
      font-size: 4rem;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  background-color: #27cfbd;
  padding: 16px;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border-radius: 32px 32px 0px 0px;

  width: 100%;
  height: 100%;

  h1 {
    font-size: 3.5rem;
    margin-top: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fbfbfb;
    margin-bottom: 32px;
  }

  input {
    height: 40px;
    border-radius: 8px;
    border: none;
    margin-bottom: 8px;
    background-color: #fbfbfb;
    color: #313131;
    padding: 0px 16px;
  }

  @media only screen and (min-width: 600px) {
    width: auto;
    height: auto;

    min-width: 400px;
    min-height: 400px;

    border-radius: 8px;

    h1 {
      font-size: 4rem;
    }
  }
`;

export const FooterButtons = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  flex-direction: column;

  button {
    font-weight: 700;
    width: 100%;
  }

  button:last-of-type {
    color: #fbfbfb;
    margin-top: 16px;
  }
`;

export const BottomFields = styled.div`
  margin-top: 104px;
`;

import styled from "styled-components";

export const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;

  left: 0px;
  top: 0px;

  z-index: 10;

  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.5);
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  flex-direction: column;
  background-color: #f9f9f9;
  width: 464px;
  height: 464px;
  border-radius: 8px;
  padding: 32px;

  h1 {
    color: #27cfbd;
  }

  input {
    width: calc(100% - 32px);
    height: 40px;
    border-radius: 8px;
    border: 1px solid #27cfbd;
    margin-bottom: 8px;
    background-color: #fbfbfb;
    color: #313131;
    padding: 0px 16px;
  }

  div {
    width: 100%;
  }
`;

export const UserSearchAddContainer = styled.div`
  display: flex;

  button {
    height: 40px;
    width: 40px;
    margin-left: 8px;
    border-radius: 8px;
    border: none;
    background-color: #27cfcb;
    color: #f9f9f9;
    cursor: pointer;
  }
`;

export const FooterButtons = styled.footer`
  display: flex;
  justify-content: space-between;
  width: 100%;

  button {
    border-radius: 8px;
    height: 40px;
    min-width: 180px;
    border: none;
    background-color: #27cfcb;
    color: #f9f9f9;

    &:first-of-type {
      background-color: transparent;
      border: 1px solid #27cfcb;
      color: #27cfcb;
    }

    &:hover {
      cursor: pointer;
    }
  }
`;

export const AddMembersContainer = styled.div`
  height: 200px;
  max-height: 200px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #cecece;
    border-radius: 16px;
  }

  h5 {
    margin: 16px;
    color: #313131;

    display: flex;
    justify-content: space-between;
  }
`;

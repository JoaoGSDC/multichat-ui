import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  max-width: 448px;
  overflow-x: hidden;

  border-right: 1px solid #cecece;
`;

export const GroupOption = styled.button`
  height: 64px;
  border: none;
  border-bottom: 1px solid #cecece;
  background-color: transparent;

  display: flex;
  align-items: center;
  padding: 0px 16px;

  transition: 0.2s;

  &:hover {
    cursor: pointer;
    background-color: #e7e7e7;
  }
`;

export const GroupImg = styled.div`
  border-radius: 50%;
  background-color: #cecece;
  height: 32px;
  width: 32px;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  color: #f0f2f5;
  font-size: 24px;

  margin-right: 16px;
`;

export const LogoContainer = styled.div`
  margin: 32px 0px;

  h1 {
    font-size: 2.5rem;
    margin: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #27cfbd;

    svg {
      margin-right: 8px;
    }
  }
`;

export const Options = styled.div`
  width: 100%;
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

  button {
    width: 100%;
  }
`;

export const NewGroupButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 60px;
  border: none;
  background-color: #27cfbd;
  font-size: 1.25rem;
  color: #f9f9f9;

  transition: 0.2s;

  svg {
    font-size: 1.5rem;
    margin-right: 8px;
  }

  &:hover {
    cursor: pointer;
    background-color: #24afa0;
  }
`;

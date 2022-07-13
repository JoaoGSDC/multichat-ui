import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
`;

export const ChatHeader = styled.div`
  width: calc(100% - 40px);
  background-color: #f0f2f5;
  padding: 0px 20px;
  display: flex;
  height: 60px;
  justify-content: space-between;

  h2 {
    display: flex;
    align-items: center;
    color: #27cfbd;
    margin: 16px 0px;

    svg {
      margin-right: 8px;
    }

    &:last-of-type {
      cursor: pointer;
      color: #a9a9a9;
    }
  }
`;

export const ChatBody = styled.div`
  max-height: 100%;
  overflow: auto;
  background-color: #eeeae2;
  padding: 0px 80px;
  height: -webkit-fill-available;

  div#you {
    background-color: #dffcd3;
    border-radius: 8px;
    padding: 16px;
    color: #313131;
    margin: 8px 0px;
    width: fit-content;
    overflow-wrap: break-word;

    margin-left: auto;
    margin-right: 0;

    h6 {
      color: #5827cf;
    }
  }

  div#other {
    background-color: #fff;
    border-radius: 8px;
    padding: 16px;
    color: #313131;
    margin: 8px 0px;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    overflow-wrap: break-word;
  }

  h5 {
    margin: 0px;
    text-align: right;
    color: #c7c7c7;
    margin: 0px;
    text-align: right;
    font-weight: 400;
  }

  p {
    margin: 8px 0px;
  }

  h6 {
    margin: 0px;
  }
`;

export const ChatFooter = styled.div`
  width: calc(100% - 40px);
  background-color: #f0f2f5;
  padding: 20px;
  display: flex;

  input {
    width: 100%;
    border-radius: 8px;
    border: 1px solid #cecece;
    height: 40px;
    padding: 0px 16px;
  }

  button {
    font-size: 1.5rem;
    margin-left: 16px;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    border: none;
    color: #57656f;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const ChatRoomOptions = styled.ul`
  list-style: none;

  position: absolute;
  right: 32px;
  top: 28px;
  z-index: 9;
  background-color: #f9f9f9;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0px 0px 4px rgb(0 0 0 / 10%);

  li {
    color: #a9a9a9;
    padding: 8px;
    border-radius: 8px;

    transition: 0.2s;

    &:last-of-type {
      border-top: 1px solid #e9e9e9;
    }

    &:hover {
      background-color: #ededed;
      cursor: pointer;
    }
  }
`;

import styled from "styled-components";

export const MainForm = styled.form`
  background-color: #eee;
  border-radius: 12px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  width: 1200px;
`;

export const InputBox = styled.div`
  label {
    font-size: 16px;
    font-weight: 700;
  }
  input {
    height: 40px;
    width: 200px;
    border: none;
    border-radius: 10px;
    padding: 0px 12px;
    margin-right: 14px;
    margin-left: 8px;
    &:focus {
      outline: none;
    }
  }
`;

export const FormButton = styled.button`
  border: none;
  height: 40px;
  border-radius: 10px;
  background-color: teal;
  width: 140px;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
  margin-right: 18px;
`;

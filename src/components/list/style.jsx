import styled from "styled-components";
import { Link } from "react-router-dom";

export const TodoListBox = styled.div`
  width: 1250px;
  margin: auto;
`;

export const TodoCardBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const TodoCard = styled.div`
  width: 300px;
  border: 4px solid teal;
  min-height: 150px;
  border-radius: 12px;
  padding: 12px 24px 24px 24px;
  margin-left: 30px;
  margin-bottom: 10px;
`;

export const ToDetail = styled(Link)`
  display: flex;
  text-decoration: none;
  justify-content: end;
  margin: 10px;
`;
export const CardFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 12px;
`;
export const TodoBtn = styled.button`
  border: 2px solid ${(props) => props.borderColor};
  height: 40px;
  width: 120px;
  background-color: #fff;
  border-radius: 12px;
  cursor: pointer;
`;

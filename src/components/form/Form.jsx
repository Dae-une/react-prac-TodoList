import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "../../redux/modules/todos";
import { MainForm, InputBox, FormButton } from "./style";

const Form = () => {
  const dispatch = useDispatch();
  const initalState = {
    title: "",
    contents: "",
    done: false,
  };
  const [todo, setTodo] = useState(initalState);

  const onChange = (e) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  };

  const onsubmit = (e) => {
    e.preventDefault();
    const id = Date.now();
    dispatch(addToDo({ ...todo, id }));
    setTodo(initalState);
  };

  return (
    <>
      <MainForm onSubmit={onsubmit}>
        <InputBox>
          <label>제목</label>
          <input
            onChange={onChange}
            type="text"
            name="title"
            value={todo.title}
            required
          />
          <label>내용</label>
          <input
            onChange={onChange}
            type="text"
            name="contents"
            value={todo.contents}
            required
          />
        </InputBox>
        <FormButton>추가하기</FormButton>
      </MainForm>
    </>
  );
};

export default Form;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToDo } from "../../redux/modules/todos";
import "./style.css";

const Form = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state);
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
      <form onSubmit={onsubmit} className="main-form">
        <div className="form-group">
          <label className="form-label">제목</label>
          <input
            onChange={onChange}
            className="form-input"
            type="text"
            name="title"
            value={todo.title}
          />
          <label className="form-label">내용</label>
          <input
            onChange={onChange}
            className="form-input"
            type="text"
            name="contents"
            value={todo.contents}
          />
        </div>
        <button className="form-btn">추가하기</button>
      </form>
    </>
  );
};

export default Form;

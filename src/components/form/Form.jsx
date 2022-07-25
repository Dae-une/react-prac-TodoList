import React, { useCallback, useState, useRef } from "react";
import "./style.css";

const Form = ({ todos, setTodos }) => {
  const initalState = {
    id: "",
    title: "",
    contents: "",
    done: false,
  };
  const [todo, setTodo] = useState(initalState);

  const nextId = useRef(2);
  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setTodo({ ...todo, [name]: value, id: nextId.current });
      nextId.current++;
    },
    [todos]
  );

  const onsubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
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

import React from "react";
import "./style.css";

const Todo = ({ todo, deleteClick, doneClick }) => {
  return (
    <div className="todo-box">
      <div>
        <h2 className="todo-title">{todo.title}</h2>
        <div className="todo-contents">{todo.contents}</div>
      </div>
      <div className="todo-btns">
        <button
          onClick={() => deleteClick(todo.id)}
          className="todo-btn-delete"
        >
          삭제하기
        </button>
        <button onClick={() => doneClick(todo.id)} className="todo-btn-done">
          {todo.done ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
};
export default Todo;

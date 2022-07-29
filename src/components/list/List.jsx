import React from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteToDo, isDone } from "../../redux/modules/todos";
import { Link } from "react-router-dom";

const List = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state);

  const onDelteBtn = (id) => {
    dispatch(deleteToDo(id));
  };
  const toggleDone = (id) => {
    dispatch(isDone(id));
  };
  return (
    <>
      <div>
        <h2>Working..🔥</h2>
        <div>
          {todos.map((todo) => {
            if (todo.done === false)
              return (
                <div key={todo.id}>
                  <Link to={`/detail/${todo.id}`} key={todo.id}>
                    상세보기
                  </Link>
                  <h1>{todo.title}</h1>
                  <h5>{todo.contents}</h5>
                  <button
                    onClick={() => {
                      onDelteBtn(todo.id);
                    }}
                  >
                    삭제하기!
                  </button>
                  <button
                    onClick={() => {
                      toggleDone(todo.id);
                    }}
                  >
                    {todo.done ? "취소" : "완료"}
                  </button>
                </div>
              );
          })}
        </div>
        <h2>Done..!🎉</h2>
        <div>
          {todos.map((todo) => {
            if (todo.done !== false)
              return (
                <div key={todo.id}>
                  <Link to={`/detail/${todo.id}`} key={todo.id}>
                    상세보기
                  </Link>
                  <h1>{todo.title}</h1>
                  <h5>{todo.contents}</h5>
                  <button
                    onClick={() => {
                      onDelteBtn(todo.id);
                    }}
                  >
                    삭제하기!
                  </button>
                  <button
                    onClick={() => {
                      toggleDone(todo.id);
                    }}
                  >
                    {todo.done ? "취소" : "완료"}
                  </button>
                </div>
              );
          })}
        </div>
      </div>
    </>
  );
};

export default List;

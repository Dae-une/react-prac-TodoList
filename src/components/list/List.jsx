import React, { useEffect } from "react";
import { useState } from "react";
import "./style.css";
import Todo from "../todo/Todo";

const List = ({ todos, setTodos }) => {
  const doneClick = (todoId) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          done: !todo.done,
        };
      } else {
        return { ...todo };
      }
    });
    setTodos(newTodos);
  };
  const deleteClick = (todoId) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== todoId;
    });
    setTodos(newTodos);
  };

  useEffect(() => {
    todos.map((todo, i) => {
      todo.id = i + 1;
    });
  }, [setTodos]);

  return (
    <>
      <div>
        <h2>Working..🔥</h2>
        <div>
          {todos.map((todo, i) => {
            return !todo.done
              ? [
                  <Todo
                    deleteClick={deleteClick}
                    doneClick={doneClick}
                    todo={todo}
                    key={todo.id}
                    setTodos={setTodos}
                  />,
                ]
              : null;
          })}
        </div>
        <h2>Done..!🎉</h2>
        <div>
          {todos.map((todo, i) => {
            return !todo.done
              ? null
              : [
                  <Todo
                    deleteClick={deleteClick}
                    doneClick={doneClick}
                    todo={todo}
                    key={todo.id}
                    setTodos={setTodos}
                  />,
                ];
          })}
        </div>
      </div>
    </>
  );
};

export default List;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteToDo, isDone } from "../../redux/modules/todos";
import {
  TodoCard,
  TodoListBox,
  ToDetail,
  TodoCardBox,
  TodoBtn,
  CardFooter,
} from "./style";
import Progress from "./Progress";
const List = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  console.log(todos);

  const onDelteBtn = (id) => {
    dispatch(deleteToDo(id));
  };
  const toggleDone = (id) => {
    dispatch(isDone(id));
  };
  return (
    <>
      <Progress />
      <TodoListBox>
        <h2>Working..🔥</h2>
        <TodoCardBox>
          {todos.map((todo) => {
            if (todo.done === false) {
              return (
                <TodoCard key={todo.id}>
                  <ToDetail to={`/detail/${todo.id}`} key={todo.id}>
                    상세보기
                  </ToDetail>
                  <h1>{todo.title}</h1>
                  <h4>
                    {todo.contents.length > 20
                      ? todo.contents.slice(0, 21) + "..."
                      : todo.contents}
                  </h4>
                  <CardFooter>
                    <TodoBtn
                      borderColor={"red"}
                      onClick={() => {
                        onDelteBtn(todo.id);
                      }}
                    >
                      삭제하기!
                    </TodoBtn>
                    <TodoBtn
                      borderColor={"green"}
                      onClick={() => {
                        toggleDone(todo.id);
                      }}
                    >
                      {todo.done ? "취소" : "완료"}
                    </TodoBtn>
                  </CardFooter>
                </TodoCard>
              );
            } else {
              return null;
            }
          })}
        </TodoCardBox>
        <h2>Done..!🎉</h2>
        <TodoCardBox>
          {todos.map((todo) => {
            if (todo.done !== false) {
              return (
                <TodoCard key={todo.id}>
                  <ToDetail to={`/detail/${todo.id}`} key={todo.id}>
                    상세보기
                  </ToDetail>
                  <h1>{todo.title}</h1>
                  <h4>
                    {todo.contents.length > 20
                      ? todo.contents.slice(0, 21) + "..."
                      : todo.contents}
                  </h4>
                  <CardFooter>
                    <TodoBtn
                      borderColor={"red"}
                      onClick={() => {
                        onDelteBtn(todo.id);
                      }}
                    >
                      삭제하기!
                    </TodoBtn>
                    <TodoBtn
                      borderColor={"green"}
                      onClick={() => {
                        toggleDone(todo.id);
                      }}
                    >
                      {todo.done ? "취소" : "완료"}
                    </TodoBtn>
                  </CardFooter>
                </TodoCard>
              );
            } else {
              return null;
            }
          })}
        </TodoCardBox>
      </TodoListBox>
    </>
  );
};

export default List;

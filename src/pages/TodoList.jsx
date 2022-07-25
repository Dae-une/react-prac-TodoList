import React, { useState } from "react";
import Form from "../components/form/Form";
import Layout from "../components/layout/Layout";
import Header from "../components/header/Header";
import List from "../components/list/List";

const TodoList = () => {
  const init = [
    {
      id: "1",
      title: "리액트 어려워ㅓㅓㅓ",
      contents: "리액트 응어어어어",
      done: false,
    },
  ];
  const [todos, setTodos] = useState(init);
  return (
    <>
      <Layout>
        <Header />
        <Form todos={todos} setTodos={setTodos} />
        <List todos={todos} setTodos={setTodos} />
      </Layout>
    </>
  );
};

export default TodoList;

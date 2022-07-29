import React from "react";
import TodoList from "./pages/TodoList";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Detail from "./pages/detail/Detail";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

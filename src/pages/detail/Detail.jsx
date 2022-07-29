import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getId } from "../../redux/modules/todos";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const todo = useSelector((state) => state);
  console.log(todo);

  useEffect(() => {
    dispatch(getId(id));
  }, []);

  return <div>{todo.id}</div>;
};
export default Detail;

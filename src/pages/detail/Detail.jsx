import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getId } from "../../redux/modules/todos";
import { DetailContainer, DetailHeader, DetailSection } from "./style";
const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getId(id));
  }, []);

  const todo = useSelector((state) => state.todo);
  console.log(todo);

  return (
    <DetailContainer>
      <DetailHeader>
        <div>Created at : {todo?.id}</div>
        <button onClick={() => navigate("/")}>Go back</button>
      </DetailHeader>
      <DetailSection>
        <h1>{todo?.title}</h1>
        <h3>{todo?.contents}</h3>
      </DetailSection>
    </DetailContainer>
  );
};
export default Detail;

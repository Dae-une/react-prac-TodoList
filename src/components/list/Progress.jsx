import react from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Progress = (props) => {
  const bucket_list = useSelector((state) => state.todos);
  console.log(bucket_list);

  let count = 0;
  bucket_list.map((todo, idx) => {
    if (todo.done) {
      count++;
    }
  });

  console.log(count);
  return (
    <ProgressBar>
      <HighLight width={(count / bucket_list.length) * 100 + "%"} />
    </ProgressBar>
  );
};

const ProgressBar = styled.div`
  margin: auto;
  border-radius: 20px;
  border: 1px solid wheat;
  width: 60%;
  height: 30px;
`;
const HighLight = styled.div`
  border-radius: 20px;
  background-color: orange;
  transition: 1s;
  width: ${(props) => props.width};
  height: 30px;
`;

export default Progress;

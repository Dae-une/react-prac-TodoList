import styled from "styled-components";

export const DetailContainer = styled.div`
  border: 2px solid #eee;
  width: 50vw;
  height: 50vh;
  margin: auto;
  margin-top: 120px;
  padding: 50px;
`;

export const DetailHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 80px;
  button {
    border: 2px solid teal;
    height: 40px;
    width: 120px;
    background-color: #fff;
    border-radius: 12px;
    cursor: pointer;
  }
`;

export const DetailSection = styled.div`
  h1 {
    font-size: 60px;
    font-weight: 800;
  }
  h3 {
    font-size: 30px;
    font-weight: 400;
  }
`;

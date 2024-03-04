import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EditPage = () => {
  const navigate = useNavigate();
  const getEditPage = () => {
    navigate("/edit");
  };
  const [inputData, setInputData] = useState({
    comment: "",
    likeCount: 0,
    pw: "",
    sector: "",
    title: "",
    userName: "",
  });
  const handleChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
    // console.log(inputData);
  };
  const handleDelete = (e) => {
    e.preventDefault();
    axios.delete("/board/{:}");
  };
  return (
    <Wrap>
      <Wrapper>
        <Upper>
          <NameInput
            name="userName"
            placeholder="name"
            value={inputData.userName}
            onChange={handleChange}
          />
          <PwInput
            name="pw"
            placeholder="pw"
            value={inputData.pw}
            onChange={handleChange}
          />
          <TitleInput
            name="title"
            placeholder="title"
            value={inputData.title}
            onChange={handleChange}
          />
        </Upper>
        <CommentInput
          name="comment"
          placeholder="comment"
          value={inputData.comment}
          onChange={handleChange}
        />
        <Buttons>
          <Button>수정</Button>
          <Button onClick={handleDelete}>삭제</Button>
        </Buttons>
      </Wrapper>
    </Wrap>
  );
};

export default EditPage;

const Wrap = styled.div`
  width: 100%;
  margin-left: 10%;
  margin-top: 20px;
`;

const Wrapper = styled.div`
  height: 150px;
  width: 80%;
  /* #e5f0e6; */
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #dbdbdb;
  background-color: #f3f3f3;
`;

const Upper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 80%;
  gap: 10px;
  padding: 20px 0 0 0;
  > input {
    border-radius: 5px;
    border: 1px solid #dbdbdb;
    padding: 0 0 0 5px;
  }
`;

const NameInput = styled.input`
  height: 25px;
  width: 30%;
  border: none;
`;

const PwInput = styled.input`
  width: 30%;
  height: 25px;
  border: none;
`;
const TitleInput = styled.input`
  width: 30%;
  height: 25px;
  border: none;
`;
const CommentInput = styled.input`
  width: 80%;
  height: 25px;
  border: none;
  margin: 10px 0 0 0;
  border-radius: 5px;
  border: 1px solid #dbdbdb;
  padding: 0 0 0 5px;
`;
const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
const Button = styled.button`
  background-color: #f3f3f3;
  height: 25px;
  width: 200px;
  margin: 15px 0 0 0;
  color: black;
  border: 1px solid #cdcccc;
  border-radius: 5px;
`;

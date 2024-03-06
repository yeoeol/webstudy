import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import InputBox from "../Components/InputBox";

const EditPage = () => {
  const navigate = useNavigate();
  const { boardNum } = useParams();
  const [edit, setEdit] = useState([]);
  const cardData = async () => {
    const data = await axios.get(`/board/${boardNum}`);
    setEdit(data.data);
  };
  useEffect(() => {
    cardData();
    // console.log("success");
  }, []);
  console.log(edit);

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
  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(`/board/${boardNum}`);
      navigate("/"); // 삭제 후 홈페이지로 이동
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/board/${boardNum}`, inputData);
      navigate("/");
    } catch (error) {
      console.error("Error updating data:", error);
    }
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
          <Button onClick={handleEdit}>수정</Button>
          <Button onClick={handleDelete}>삭제</Button>
        </Buttons>
      </Wrapper>
    </Wrap>
  );
};

export default EditPage;

const Wrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
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

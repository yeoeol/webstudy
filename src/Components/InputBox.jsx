import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import DropDown from "./Dropdown";

const InputBox = () => {
  const [genre, setGenre] = useState("");
  const changeGenre = (genre) => {
    setGenre(genre);
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
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      inputData.comment &&
      inputData.pw &&
      inputData.title &&
      inputData.userName
    ) {
      axios.post("/board", inputData).then((res) => {
        console.log("post success", res.data);
        setInputData({
          comment: "",
          likeCount: 0,
          pw: "",
          sector: "",
          title: "",
          userName: "",
        });
      });
    } else {
      console.error("Please fill in all fields.");
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
            type="password"
            placeholder="pw"
            value={inputData.pw}
            onChange={handleChange}
          />
          <SectorInput
            name="sector"
            placeholder="sector"
            value={inputData.sector}
            onChange={handleChange}
          />
          {/* <DropDown changeGenre={changeGenre} /> */}
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
        <Button onClick={handleSubmit}>글쓰기</Button>
      </Wrapper>
    </Wrap>
  );
};
export default InputBox;

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
const SectorInput = styled.input`
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
const Button = styled.button`
  background-color: #f3f3f3;
  height: 25px;
  width: 200px;
  margin: 15px 0 0 0;
  color: black;
  border: 1px solid #cdcccc;
  border-radius: 5px;
`;

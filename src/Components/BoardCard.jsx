import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import likeImage from "../images/like.png";
import unlikeImage from "../images/unlike.png";

const BoardCard = ({
  boardNum,
  comment,
  likeCount,
  pw,
  sector,
  title,
  userName,
}) => {
  const navigate = useNavigate();
  const getEditPage = () => {
    navigate(`/edit/${boardNum}`);
  };
  const [like, setLike] = useState(likeCount);

  const addCount = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    try {
      await axios.put(`/board/${boardNum}/like`, { like: true });
      setLike(like + 1);
    } catch (error) {
      console.error("Error updating data", error);
    }
  };
  const minusCount = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    try {
      await axios.put(`/board/${boardNum}/like`, { like: false });
      setLike(like - 1);
    } catch (error) {
      console.error("Error updating data", error);
    }
  };
  useEffect(() => {});
  // const checkPw = (e) => {
  //   e.preventDefault();
  //   const pw = prompt("비밀번호를 입력하세요 :" + "");
  //   const data = axios.get(`/board/${boardNum}/check`, { pw: pw });
  //   console.log(data);
  //   if (pw === data.data.data.pw) {
  //     navigate(`/edit/${boardNum}`);
  //   } else {
  //     alert("비밀번호를 잘못 입력하셨습니다");
  //   }
  // };
  // useEffect(() => {
  //   console.log(boardNum);
  // }, []);

  return (
    <Card onClick={getEditPage}>
      <Name>{userName}</Name>
      <Genre>{sector}</Genre>
      <Title>{title}</Title>
      <Review>{comment}</Review>
      <Buttons>
        <button onClick={addCount}>
          <img src={likeImage} height="15px" width="15px" alt="좋아요" />
        </button>
        {like}
        <button onClick={minusCount}>
          <img src={unlikeImage} height="15px" width="15px" alt="싫어요" />
        </button>
      </Buttons>
    </Card>
  );
};

export default BoardCard;

const Name = styled.p`
  margin: auto;
  width: 15%;
`;
const Genre = styled.p`
  margin: auto;
  width: 10%;
`;
const Title = styled.p`
  margin: auto;
  width: 20%;
`;
const Review = styled.p`
  margin: auto;
  width: 50%;
`;
const Buttons = styled.div`
  margin: auto;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
const Card = styled.li`
  margin: auto;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #dbdbdb;
  padding-bottom: 10px;
  padding-top: 10px;
  margin: 0 0 0 0;

  &:hover {
    cursor: pointer;
    background-color: #e8e8e8;
  }
`;

import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const BestBoardCard = ({
  boardNum,
  userName,
  sector,
  title,
  comment,
  like,
}) => {
  const navigate = useNavigate();
  const getEditPage = () => {
    navigate(`/edit/${boardNum}`);
  };
  return (
    <Card onClick={getEditPage}>
      <Title>{title}</Title>
      <Genre>{sector}</Genre>
      <Review>"{comment}"</Review>
      <Name>by. {userName}</Name>
      <Like>좋아요 {like} 회</Like>
    </Card>
  );
};

export default BestBoardCard;

const Name = styled.p`
  margin: 40px auto 0 10px;
`;
const Like = styled.div`
  margin: auto 7px 5px auto;
  font-size: 15px;
`;
const Genre = styled.p`
  margin: 10px auto 0 10px;
  color: gray;
`;
const Title = styled.p`
  font-size: 20px;
  margin: 15px auto 0 10px;
  font-weight: bold;
  color: #004600;
`;
const Review = styled.p`
  margin: 20px auto 0 10px;
`;

const Card = styled.li`
  list-style-type: none;
  background-color: white;
  height: 200px;
  width: 200px;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
`;

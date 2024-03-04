import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const BoardCard = ({ comment, likeCount, pw, sector, title, userName }) => {
  const navigate = useNavigate();
  const getEditPage = () => {
    navigate(`/edit`);
  };
  const [like, setLike] = useState(likeCount);

  const minusCount = () => {
    if (like > 0) {
      setLike((prev) => prev - 1);
    }
  };
  return (
    <Card>
      <Name onClick={getEditPage}>{userName}</Name>
      <Genre onClick={getEditPage}>{sector}</Genre>
      <Title onClick={getEditPage}>{title}</Title>
      <Review onClick={getEditPage}>{comment}</Review>
      <Buttons>
        <button onClick={() => setLike((prev) => prev + 1)}>
          <img src="../images/like" height="15px" width="15px" alt="좋아요" />
        </button>
        {like}
        <button onClick={minusCount}>
          <img src="../images/unlike" height="15px" width="15px" alt="싫어요" />
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
`;

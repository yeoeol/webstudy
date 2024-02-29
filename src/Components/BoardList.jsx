import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
const BoardList = () => {
  const navigate = useNavigate();
  const getEditPage = () => {
    navigate(`/edit`);
  };
  const getBoardList = async () => {
    const data = await axios.get("/board");
    console.log(data);
  };
  useEffect(() => {
    getBoardList();
  }, []);
  return (
    <Wrapper>
      <Header>글 목록</Header>
      <Head>
        <HeadName>이름</HeadName>
        <HeadGenre>분류</HeadGenre>
        <HeadTitle>제목</HeadTitle>
        <HeadReview>한줄평</HeadReview>
      </Head>
      <Virtual></Virtual>
      <ul>
        <BoardCard>
          <Name onClick={getEditPage}>헤르미온느</Name>
          <Genre onClick={getEditPage}>영화</Genre>
          <Title onClick={getEditPage}>해리포터</Title>
          <Review onClick={getEditPage}>재밌다</Review>
          <Buttons>
            <button>
              <img
                src="../images/like"
                height="15px"
                width="15px"
                alt="좋아요"
              />
            </button>
            <button>
              <img
                src="../images/unlike"
                height="15px"
                width="15px"
                alt="싫어요"
              />
            </button>
          </Buttons>
        </BoardCard>
      </ul>
    </Wrapper>
  );
};

export default BoardList;

const Header = styled.h3`
  text-align: center;
`;

const Wrapper = styled.div`
  width: 100%;
  background-color: transparent;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
  > ul {
    width: 80%;
    padding: 0 0 0 0;
    margin: 0 0 0 0;
  }
`;
const Virtual = styled.div`
  width: 80%;
  height: 10px;
  border-bottom: 1px solid #dbdbdb;
`;
const Head = styled.div`
  font-weight: bold;
  width: 80%;
  display: flex;
  flex-direction: row;
  margin: 5px auto 0 auto;
`;
const HeadName = styled.p`
  margin: auto;
  width: 15%;
  margin: 0;
`;
const HeadGenre = styled.p`
  margin: auto;
  width: 10%;
  margin: 0;
`;
const HeadTitle = styled.p`
  margin: auto;
  width: 20%;
  margin: 0;
`;
const HeadReview = styled.p`
  margin: auto;
  width: 50%;
  margin: 0;
`;

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
const BoardCard = styled.li`
  margin: auto;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #dbdbdb;
  padding-bottom: 10px;
  padding-top: 10px;
  margin: 0 0 0 0;
`;

import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const BoardBox = () => {
  const navigate = useNavigate();
  const getEditPage = () => {
    navigate(`/edit`);
  };
  return (
    <Wrapper>
      <Head>
        <HeadName>이름</HeadName>
        <HeadGenre>분류</HeadGenre>
        <HeadTitle>제목</HeadTitle>
        <HeadReview>한줄평</HeadReview>
      </Head>
      <ul>
        <BoardCard onClick={getEditPage}>
          <Name>헤르미온느</Name>
          <Genre>영화</Genre>
          <Title>해리포터</Title>
          <Review>재밌다</Review>
          <Buttons>
            <button>g</button>
            <button>b</button>
          </Buttons>
        </BoardCard>
      </ul>
    </Wrapper>
  );
};

export default BoardBox;

const Wrapper = styled.div`
  width: 100%;
  background-color: aliceblue;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
  > ul {
    width: 80%;
    padding: 0 0 0 0;
  }
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
`;
const BoardCard = styled.li`
  margin: auto;
  list-style-type: none;
  display: flex;
  flex-direction: row;
`;

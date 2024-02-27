import styled from "styled-components";

const BestBoardList = () => {
  return (
    <Wrapper>
      <Header>Top 3</Header>
      <ul>
        <BestBoardCard>
          <Rank>1위</Rank>
          <Title>해리포터와 비밀의 방</Title>
          <Genre>영화</Genre>
          <Review>"good"</Review>
          <Name>From </Name>
        </BestBoardCard>
      </ul>
    </Wrapper>
  );
};

export default BestBoardList;

const Wrapper = styled.div`
  background-color: #e5f0e6;
  height: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  > ul {
    width: 80%;
    padding: 0 0 0 0;
  }
`;
const Header = styled.div`
  margin: 15px auto 0 auto;
  font-weight: bold;
  font-size: 30px;
  height: 40px;
  color: #004600;
`;
const Rank = styled.p`
  padding: 0 0 0 0;
  margin: 5px 0 15px 5px;
`;
const Title = styled.span`
  font-weight: bold;
  margin: 0 auto 5px 5px;
`;
const Genre = styled.span`
  color: #929292;
  margin: 0 0 20px 5px;
`;

const Review = styled.p`
  margin: 0 auto 10px 5px;
`;
const Name = styled.p`
  height: 20%;
  margin-left: 5px;
`;
const BestBoardCard = styled.li`
  list-style-type: none;
  background-color: white;
  height: 200px;
  width: 200px;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
`;

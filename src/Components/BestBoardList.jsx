import styled from "styled-components";

const BestBoardList = () => {
  return (
    <Wrapper>
      <ul>
        <BestBoardCard>
          <Rank>1위</Rank>
          <Title>해리포터와 비밀의 방</Title>
          <Genre>영화</Genre>
          <p>""</p>
          <p>From </p>
        </BestBoardCard>
      </ul>
    </Wrapper>
  );
};

export default BestBoardList;

const Wrapper = styled.div`
  background-color: #e5f0e6;
  height: 260px;
  width: 100%;
  display: flex;
  justify-content: center;
  > ul {
    width: 80%;
  }
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
  margin: 0 0 10px 5px;
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

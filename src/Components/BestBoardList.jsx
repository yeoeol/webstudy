import styled from "styled-components";

const BestBoardList = () => {
  return (
    <Wrapper>
      <ul>
        <BestBoardCard>
          <p>1위</p>
          <span>해리포터와 비밀의 방</span>
          <span>영화</span>
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
  height: 300px;
  width: 100%;
  > ul {
    width: 80%;
  }
`;

const BestBoardCard = styled.li`
  background-color: white;
  height: 200px;
  width: 200px;
  border-radius: 7px;
`;

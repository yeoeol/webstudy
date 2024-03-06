import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import BestBoardCard from "./BestBoardCard";

const BestBoardList = () => {
  const [best, setBest] = useState([]);
  const getBestBoardList = async () => {
    const data = await axios.get("/board/best");
    setBest(data.data.data);
  };
  useEffect(() => {
    getBestBoardList();
  }, []);

  return (
    <Wrapper>
      <Header>Top 3</Header>
      <ul>
        {best.map((post) => (
          <BestBoardCard
            key={post.boardNum}
            boardNum={post.boardNum}
            comment={post.comment}
            sector={post.sector}
            title={post.title}
            userName={post.userName}
            like={post.likeCount}
          />
        ))}
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
    padding: 0 0 0 0;
    display: flex;
    flex-direction: row;
    gap: 40px;
  }
`;
const Header = styled.div`
  margin: 15px auto 0 auto;
  font-weight: bold;
  font-size: 30px;
  height: 40px;
  color: #004600;
`;

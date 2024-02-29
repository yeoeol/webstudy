import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import BoardCard from "./BoardCard";
const BoardList = () => {
  const [boardList, setBoardList] = useState([]);
  const getBoardList = async () => {
    const data = await axios.get("/board");
    console.log(data);
    setBoardList(data.data.data);
  };
  // useEffect(() => {
  //   if (boardList.length > 0) {
  //     console.log(boardList[0].comment);
  //   }
  // }, [boardList]);
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
        {boardList.map((post) => (
          <BoardCard
            key={post.boardNum}
            comment={post.comment}
            likeCount={post.likeCount}
            pw={post.pw}
            sector={post.sector}
            title={post.title}
            userName={post.userName}
          />
        ))}
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

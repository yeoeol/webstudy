import styled from "styled-components";
import InputBox from "../Components/InputBox";
import BoardBox from "../Components/BoardBox";
import BestBoardList from "../Components/BestBoardList";

const MainPage = () => {
  return (
    <>
      <BestBoardList />
      <InputBox />
      <BoardBox />
    </>
  );
};

export default MainPage;

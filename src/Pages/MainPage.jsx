import styled from "styled-components";
import InputBox from "../Components/InputBox";
import BoardList from "../Components/BoardList";
import BestBoardList from "../Components/BestBoardList";

const MainPage = () => {
  return (
    <>
      <BestBoardList />
      <InputBox />
      <BoardList />
    </>
  );
};

export default MainPage;

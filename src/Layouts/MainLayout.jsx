import styled from "styled-components";
import { useNavigate, Outlet } from "react-router-dom";

const MainLayout = () => {
  const navigate = useNavigate();
  const returnMain = () => {
    navigate(`/`);
  };
  return (
    <>
      <Wrapper>
        <Header onClick={returnMain}>
          <h1>Heritage</h1>
        </Header>
        <Main>
          <Outlet />
        </Main>
      </Wrapper>
    </>
  );
};

export default MainLayout;

const Wrapper = styled.div`
  /* height: 100vh; */
  width: 100%;
`;

const Header = styled.div`
  /* display: flex;
  flex-direction: row; */
  height: 70px;
  width: 100%;
  background-color: white;
  > h1 {
    font-size: 40px;
    margin: 0 0 0 40px;
    padding-top: 12px;
    color: #004600;
  }
`;

const Main = styled.div`
  height: calc(100vh - 70px);
  width: 100%;
  /* background-color: antiquewhite; */
`;

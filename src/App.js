import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import MainPage from "./Pages/MainPage";
import EditPage from "./Pages/EditPage";
import GlobalStyle from "./styles/GlobalStyle";
function App() {
  return (
    <>
      <GlobalStyle />
      <RouterComponent />
    </>
  );
}

export default App;

const RouterComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/edit/:boardNum" element={<EditPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

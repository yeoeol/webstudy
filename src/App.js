import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import MainPage from "./Pages/MainPage";
import EditPage from "./Pages/EditPage";
function App() {
  return (
    <>
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
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/edit" element={<EditPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

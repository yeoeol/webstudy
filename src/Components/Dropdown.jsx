import styled from "styled-components";
import { useState } from "react";

const DropDown = ({ changeGenre }) => {
  // console.log("ss");
  const [open, setOpen] = useState(false);
  const onClick = () => {
    setTimeout(() => {
      setOpen(!open);
    }, 200);
  };
  const clickChangeGenre = (genre) => {
    changeGenre(genre);
    // console.log(number);
  };
  const children = [
    { id: 0, genre: "영화" },
    { id: 1, genre: "드라마" },
    { id: 2, genre: "책" },
  ];
  return (
    <DropDownWrap>
      <DropDownButton className="icon-button" onClick={onClick}>
        장르 ▾
      </DropDownButton>
      {open &&
        children.map((item) => (
          <li key={item.id} onClick={() => clickChangeGenre(item.number)}>
            {item.genre}
          </li>
        ))}
    </DropDownWrap>
  );
};

export default DropDown;

const DropDownWrap = styled.div`
  margin: 0 0 0 0;
  > li {
    width: 100px;
    height: 25px;
    border: 1px solid #dbdbdb;
    padding-top: 3px;
    border-radius: 2px;
    text-align: center;
    list-style-type: none;
    color: #686868;
    /* position: absolute; */
    background-color: #f3f3f3;
    font-size: 14px;
    &:hover {
      cursor: pointer;
    }
  }
`;
const DropDownButton = styled.button`
  margin: 0 0 0 0;
  width: 100px;
  height: 25px;
  border: 1px solid #dbdbdb;
  padding: 7px 5px auto 5px;
  border-radius: 2px;
  color: #686868;
  background-color: #f3f3f3;
  text-align: center;
`;

import styled from "styled-components";

const InputBox = () => {
  return (
    <Wrap>
      <Wrapper>
        <Upper>
          <NameInput placeholder="name" />
          <PwInput placeholder="pw" />
          <TitleInput placeholder="title" />
        </Upper>
        <CommentInput placeholder="comment" />
        <Button>글쓰기</Button>
      </Wrapper>
    </Wrap>
  );
};
export default InputBox;

const Wrap = styled.div`
  width: 100%;
  margin-left: 10%;
  margin-top: 20px;
`;

const Wrapper = styled.div`
  height: 150px;
  width: 80%;
  /* #e5f0e6; */
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #dbdbdb;
  background-color: #f3f3f3;
`;

const Upper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 20px 0 0 0;
  > input {
    border-radius: 5px;
    border: 1px solid #dbdbdb;
    padding: 0 0 0 5px;
  }
`;

const NameInput = styled.input`
  height: 25px;
  width: 300px;
  border: none;
`;

const PwInput = styled.input`
  width: 300px;
  height: 25px;
  border: none;
`;
const TitleInput = styled.input`
  width: 300px;
  height: 25px;
  border: none;
`;
const CommentInput = styled.input`
  width: 1000px;
  height: 25px;
  border: none;
  margin: 10px 0 0 0;
  border-radius: 5px;
  border: 1px solid #dbdbdb;
  padding: 0 0 0 5px;
`;
const Button = styled.button`
  background-color: #f3f3f3;
  height: 25px;
  width: 200px;
  margin: 15px 0 0 0;
  color: black;
  border: 1px solid #cdcccc;
  border-radius: 5px;
`;

import styled from 'styled-components';

export const Wrapper = styled.main`
  box-sizing: border-box;
  text-align: center;
  min-height: 60vh;
  width: 40vh;
  margin: auto;
  padding: 20px 20px;
  color: white;
  background-color: white;
  border-radius: 8px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`;

export const ListWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  font-size: calc(10px + 1vmin);
  color: black;
`;

export const InputWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: auto;

  input + button {
    margin-left: 8px;
  }
`;

export const List = styled.ul`
  box-sizing: border-box;
  width: 100%;
  margin: auto;
  padding: 10px;
  list-style: none;
`;

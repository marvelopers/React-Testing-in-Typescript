import React from 'react';
import styled from 'styled-components';

const ToDoInput = ({ value, onChange }: { value: string; onChange: (e: string) => void }) => {
  return <Input placeholder="할 일을 입력해 주세요 :)" value={value} onChange={(e) => onChange(e.target.value)} />;
};

export default ToDoInput;

const Input = styled.input`
  width: 100%;
  padding: 10px 10px;
  border-radius: 8px;
  border: 1px solid #bdbdbd;
  outline: none;
`;

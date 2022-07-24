import React from "react";
import styled from "styled-components";

interface InputProps {
  value: string;
  placeholder?: string;
  onChange: (toDo: string) => void;
}

const Input = ({ value, placeholder, onChange }: InputProps) => (
  <InputBox
    value={value}
    placeholder={placeholder}
    onChange={(e) => onChange(e.target.value)}
  />
);

export default Input;

const InputBox = styled.input`
  width: 100%;
  padding: 10px 10px;
  border-radius: 8px;
  border: 1px solid #bdbdbd;
  outline: none;
`;

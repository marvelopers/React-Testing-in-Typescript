import React from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps {
  text: string;
  backgroundColor?: string;
  hoverColor?: string;
  onClick: () => void;
}

const Button = ({ text, backgroundColor = '#304FFE', hoverColor = '#1E40FF', onClick }: ButtonProps) => {
  return (
    <SingleButton backgroundColor={backgroundColor} hoverColor={hoverColor} onClick={onClick}>
      {text}
    </SingleButton>
  );
};

export default Button;

const SingleButton = styled.button(
  ({ backgroundColor, hoverColor }: { backgroundColor: string; hoverColor: string }) => css`
    padding: 10px 20px;
    background-color: ${backgroundColor};
    border-radius: 8px;
    border: none;
    outline: none;
    text-align: center;

    color: #dbf6fd;
    cursor: pointer;

    :hover {
      background-color: ${hoverColor};
    }
  `,
);

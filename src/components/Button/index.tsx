import React from "react";

interface ButtonProps {
  onClick: () => void;
  text: string;
}

export const Button: React.FC<ButtonProps> = ({text, onClick}) => {
  return (
    <button type="submit" onClick={onClick}>
      {text}
    </button>
  );
};

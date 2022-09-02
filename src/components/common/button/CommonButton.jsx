import React from "react";
import styled from "@emotion/styled";

const Button = styled.button`
  background-color: ${props => props.backgroundColor};
  color: ${props => props.bodyColor} !important;
  width: 80px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  color: white;
`;

const CommonButton = (props) => {
  return (
    <Button backgroundColor={ props.backgroundColor } bodyColor={ props.bodyColor }>
      { props.children }
    </Button>
  );
};

export default CommonButton;
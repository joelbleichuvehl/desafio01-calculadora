import React from "react";
import styled from "styled-components";

const Button = ({ label, onClick }) => {
  return <Container onClick={onClick}>{label}</Container>;
};

export default Button;

const Container = styled.div`
  padding: 20px;
  border: 1px solid #cdcdcd;
  background-color: #00aafc;
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  height: 20px;
  flex: 1;

  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }
`;

import React from "react";
import styled from "styled-components";

const Input = ({ value }) => {
  return (
    <Container>
      <input type="text" disabled value={value} />
    </Container>
  );
};

export default Input;

const Container = styled.div`
  width: 100%;
  height: 75px;
  background-color: #aaffaa;
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    width: 95%;
    height: 95%;
    background-color: #aaffaa;
    border: 0;
    font-size: 44px;
    font-family: "Roboto";
    text-align: end;
  }
`;

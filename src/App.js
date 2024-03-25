import Button from "./components/Button";
import styled from "styled-components";
import Input from "./components/Input";
import { useState } from "react";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [firstNumber, setFirstNumber] = useState(0);
  const [operation, setOperation] = useState("");

  const handleAddNumber = (number) => {
    if (number)
      setCurrentNumber((prev) => `${prev === 0 ? "" : prev}${number}`);
  };

  const handleClear = () => {
    setCurrentNumber(0);
    setFirstNumber(0);
    setOperation("");
  };

  const handleSum = () => {
    if (firstNumber === 0) {
      setFirstNumber(currentNumber);
      setCurrentNumber(0);
      setOperation("+");
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(sum);
      setOperation("");
    }
  };

  const handleSubtraction = () => {
    if (firstNumber === 0) {
      setFirstNumber(currentNumber);
      setCurrentNumber(0);
      setOperation("-");
    } else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(sum);
      setOperation("");
    }
  };

  const handleDivision = () => {
    if (firstNumber === 0) {
      setFirstNumber(currentNumber);
      setCurrentNumber(0);
      setOperation("/");
    } else {
      const sum = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(sum);
      setOperation("");
    }
  };

  const handleMultiply = () => {
    if (firstNumber === 0) {
      setFirstNumber(currentNumber);
      setCurrentNumber(0);
      setOperation("*");
    } else {
      const sum = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(sum);
      setOperation("");
    }
  };

  const handleEquals = () => {
    if (operation) {
      switch (operation) {
        case "+":
          handleSum();
          break;

        case "-":
          handleSubtraction();
          break;

        case "/":
          handleDivision();
          break;

        case "*":
          handleMultiply();
          break;

        default:
          break;
      }
    }
  };
  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="" onClick={() => handleAddNumber()} />
          <Button label="" onClick={() => handleAddNumber()} />
          <Button label="C" onClick={() => handleClear()} />
          <Button label="/" onClick={handleDivision} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber(7)} />
          <Button label="8" onClick={() => handleAddNumber(8)} />
          <Button label="9" onClick={() => handleAddNumber(9)} />
          <Button label="*" onClick={handleMultiply} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber(4)} />
          <Button label="5" onClick={() => handleAddNumber(5)} />
          <Button label="6" onClick={() => handleAddNumber(6)} />
          <Button label="-" onClick={handleSubtraction} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber(1)} />
          <Button label="2" onClick={() => handleAddNumber(2)} />
          <Button label="3" onClick={() => handleAddNumber(3)} />
          <Button label="+" onClick={handleSum} />
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber(0)} />
          <Button label="" onClick={() => handleAddNumber()} />
          <Button label="" onClick={() => handleAddNumber()} />
          <Button label="=" onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #cacaca;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  background-color: #fff;
  width: 60%;
  min-height: 350px;
  padding: 5px;
  border-radius: 10px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Columm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

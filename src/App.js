import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { useState } from 'react';

const StyledBtn = styled.button`
  background-color: skyblue;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: bold;
  margin: 30px;
`;
function App() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="countbox">
          <StyledBtn onClick={handleIncrement}>+</StyledBtn>
          <span>{count} 뭘바꿔야 커밋됨?</span>
          <StyledBtn onClick={handleDecrement}>-</StyledBtn>
        </div>
      </header>
    </div>
  );
}

export default App;

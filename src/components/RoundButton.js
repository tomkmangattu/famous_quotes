// RoundButton.js
import React from 'react';
import styled from 'styled-components';

const RoundButtonWrapper = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #3498db;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  border: none;
  outline: none;
`;

const RoundButton = ({ onClick, children }) => {
  return <RoundButtonWrapper 
  onClick={onClick} 
  style={{
    margin: '10px',
    backgroundColor: 'rgba(255, 255, 255, 0.5)'
  }}>
    {children}
    </RoundButtonWrapper>;
};

export default RoundButton;

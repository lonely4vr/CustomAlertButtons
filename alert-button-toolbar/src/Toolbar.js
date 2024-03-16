import React from 'react';
import './App.css';
import AlertButton from './AlertButton';

const Toolbar = () => {
  return (
    <div>
      <AlertButton message="This is the first alert">Button 1</AlertButton>
      <AlertButton message="This is the second alert">Button 2</AlertButton>
      <AlertButton message="This is the third alert">Button 3</AlertButton>
    </div>
  );
};

export default Toolbar;

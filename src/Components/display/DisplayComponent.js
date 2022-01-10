import React from 'react';
import './DisplayComponent.css';

const DisplayComponent = ({time}) => {
  
  return (
    <div>
      <span className='dispaly'> {new Date(time).toISOString().slice(11,19)}</span>
    </div>
  );
}

export default DisplayComponent;
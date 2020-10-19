import React from 'react';
import './Spinner.css';

export const Spinner = () => {
  return (
    <div className='absolute w-full h-full' style={{ top: '30%', left: '50%' }}>
      <div className='loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64'></div>
      {/* <div className='loader ease-linear rounded-full border-8 border-t-8 border-green-200 h-24 w-24'></div> */}
    </div>
  );
};

export default Spinner;

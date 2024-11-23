import React from 'react';

const ProgressBar = ({ percentage = 50 }) => {
  return (
    <div className='h-3.5 w-full rounded-3xl bg-gray-100'>
      <div
        className='h-3.5 rounded-3xl bg-primary text-center text-xs text-secondary'
        role='progressbar'
        aria-valuenow={percentage}
        aria-valuemin='0'
        aria-valuemax='100'
        style={{ width: `${percentage}%` }}
      >
        {percentage}%
      </div>
    </div>
  );
};

export default ProgressBar;

import React, { useEffect, useState } from 'react';

function Skills() {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => 
      setProgress(prev => prev < 66 ? prev + 1 : 66), 30);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className='min-h-screen bg-[#1b1a1a] pt-[150px] lg:pt-[100px]'>
      <svg className="w-20 h-20" viewBox="0 0 100 100">
        <circle 
          className="stroke-gray-300" 
          strokeWidth="8" 
          fill="none" 
          r="42" 
          cx="50" 
          cy="50"
        />
        <circle 
          className="stroke-blue-500" 
          strokeWidth="8" 
          fill="none" 
          r="42" 
          cx="50" 
          cy="50" 
          style={{
            strokeDasharray: '264',
            strokeDashoffset: 264 - (264 * progress) / 100,
            transform: 'rotate(-90deg)',
            transformOrigin: '50% 50%'
          }}
        />
        <text 
          x="50" 
          y="50" 
          fill="white" 
          className="text-2xl" 
          textAnchor="middle" 
          dy=".3em"
        >
          {progress}%
        </text>
      </svg>
    </div>
  );
}

export default Skills;
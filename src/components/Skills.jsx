import React from 'react';

const SkillProgressBar = ({ name, level, percentage }) => {
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  
  return (
    <div className="flex items-center justify-between p-1 w-full">
      <div className="flex flex-col flex-grow mr-4">
        <span className="text-white text-lg">{name}</span>
        <span className="text-gray-400 text-sm">{level}</span>
      </div>
      <div className="relative w-20 h-16">
        <svg className="w-20 h-16 transform -rotate-90" viewBox="0 0 100 100">
          <circle 
            className="stroke-gray-700" 
            strokeWidth="8" 
            fill="none" 
            r={radius} 
            cx="50" 
            cy="50"
          />
          <circle 
            className="stroke-blue-500 transition-all duration-1000 ease-out"
            strokeWidth="8" 
            fill="none" 
            r={radius} 
            cx="50" 
            cy="50" 
            style={{
              strokeDasharray: circumference,
              strokeDashoffset: circumference - (circumference * percentage) / 100
            }}
          />
          <text 
            x="50" 
            y="50" 
            fill="white" 
            className="text-lg font-medium"
            textAnchor="middle" 
            dy=".3em"
          >
            {percentage}%
          </text>
        </svg>
      </div>
    </div>
  );
};

const SkillSection = ({ title, skills }) => {
  return (
    <div className="w-full lg:w-[45%] bg-[#333] mt-16 rounded-lg p-1">
      <h2 className="text-white text-2xl font-bold mb-6 text-center">{title}</h2>
      <div>
        {skills.map((skill) => (
          <SkillProgressBar
            key={skill.id}
            name={skill.name}
            level={skill.level}
            percentage={skill.precentage}
          />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const programmingSkills = [
    {id:1, name:"Html", level:"Advanced", precentage:95},
    {id:2, name:"Css", level:"Advanced", precentage:90},
    {id:3, name:"Reactjs", level:"Advanced", precentage:90},
    {id:4, name:"Php", level:"Advanced", precentage:85},
    {id:5, name:"Express.js", level:"Proficient", precentage:80},
    {id:6, name:"Node.js", level:"Proficient", precentage:80},
    {id:7, name:"Flutter", level:"intermediate", precentage:70}
  ];
  
  const otherSkills = [
    {id:1, name:"Mongodb", level:"Advanced", precentage:85},
    {id:2, name:"Mysql", level:"Advanced", precentage:90},
    {id:3, name:"Git", level:"Advanced", precentage:85},
    {id:4, name:"Ux/ui design", level:"Advanced", precentage:85},
    {id:5, name:"Creativity", level:"Proficient", precentage:80},
    {id:6, name:"Team work", level:"Proficient", precentage:80},
    {id:7, name:"deployment", level:"Proficient", precentage:80}
  ];

  return (
    <div className="min-h-screen bg-[#1b1a1a] pt-[100px] px-6">
      <div className="max-w-4xl mx-auto flex flex-col lg:flex-row gap-8 justify-center">
        <SkillSection title="Programming Skills" skills={programmingSkills} />
        <SkillSection title="Other Skills" skills={otherSkills} />
      </div>
    </div>
  );
};

export default Skills;
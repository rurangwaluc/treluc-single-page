import React from 'react';

const Project = ({ item }) => {
  return (
   <a href={item.url} target="_blank">
     <div key={item.id} className='box flex flex-col items-center text-center '>
  
       <img  src={item.image} alt='' />

      <div className="content ">
      <p className='capitalize text-accent text-sm '>{item.category}</p>
      <h3 className='text-black p-1'>{item.name}</h3>
      <p className='capitalize  text-sm '>{item.description}</p>
        <div className='btns'>
            <button className='btn'>Buy</button>
            <button className='btn2'>Preview</button>
        </div>
      </div>
      </div>
   </a>
  );
};

export default Project;

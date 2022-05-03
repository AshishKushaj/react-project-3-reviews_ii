import React,{ useState, useEffect } from 'react';
import './App.css';
import Title from './Title';
import Box from './Box';
import data from './data'; 




function App() {

  const {id , name , job , image , text} =data[0];

  return (
   <div >
      
      <div>
        <Title/>
      </div>

     <Box
        name={name}
        job ={job}
        image={image}
        text={text}
     />


   </div>
  );
}

export default App;

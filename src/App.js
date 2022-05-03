import React,{ useState, useEffect } from 'react';
import './App.css';
import Title from './Title';
import Box from './Box';
import './data'; 
import React from 'react';




function App() {

  const {id , name , job , image , text} =data[0];

  return (
   <div >
      
      <div>
        <Title/>
      </div>

     <Box/>
   </div>
  );
}

export default App;

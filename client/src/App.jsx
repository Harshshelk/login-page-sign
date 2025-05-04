import React from 'react';
import Mainsys from './routepage/Mainsys';
import Login from './routepage/Login';
import { Route, Routes } from 'react-router-dom';

const App = () => {

  return (
    <>
     
<Routes>
<Route path='/mainsys' element={<Mainsys/>} /> 
<Route path='/login' element={<Login/>} />  
</Routes>

    </>
  )
};

export default App;


import React, { useState } from 'react';
//import { Spinner } from "./components/Spinner";
import { UseEffect } from "./components/UseEffect";

import './App.css';

function App() {
  const [courses] = useState([
    {
      "get": '---->Janki'
    }
  ])

  return (
    <div className="App">
      <header>
        Header 
        </header>
        <hr></hr>
        {<UseEffect />}
      {/* {<Spinner courses={courses} />} */}
     
    </div>
  );
}


export default App;

import React, { useState } from 'react';
//import { Spinner } from "./components/Spinner";
import { Starter } from "./components/Starter";

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
        {<Starter />}
      {/* {<Spinner courses={courses} />} */}
     
    </div>
  );
}


export default App;

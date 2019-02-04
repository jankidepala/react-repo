import React, { useState } from 'react';
//import { Spinner } from "./components/Spinner";
import { Customhooks } from "./components/Custom_hooks";

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
        {<Customhooks />}
      {/* {<Spinner courses={courses} />} */}
     
    </div>
  );
}


export default App;

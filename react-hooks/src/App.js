import React, { useState } from 'react';
//import { Spinner } from "./components/Spinner";
import { LocalStrorage } from "./components/LocalStrorage";

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
      {<LocalStrorage />}
      {/* {<Spinner courses={courses} />} */}

    </div>
  );
}


export default App;

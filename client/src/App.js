import React from 'react';
import logo from './logo.svg';
import './App.css';
// @flow

/*
** Add 2x/ @flow to any files you want to type check.
** Now can you run npm run flow to ckeck the files for errors. 
*/

function App() {

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>
  );
}

export default App;

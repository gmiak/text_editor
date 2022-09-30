import React from 'react';
// @flow

/*
** Add 2x/ @flow to any files you want to type check.
** Now can you run npm run flow to ckeck the files for errors. 
*/

function Reports() {

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <p>{!data ? "Loading..." : "Here in report "+ data}</p>
      </header>
    </div>
  );
}

export default Reports;

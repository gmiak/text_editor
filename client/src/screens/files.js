import React from 'react';
import { Divider } from 'primereact/divider';
// @flow

/*
** Add 2x/ @flow to any files you want to type check.
** Now can you run npm run flow to ckeck the files for errors. 
*/

function Files() {

  const [docs, setDocs] = React.useState([]);

  React.useEffect(() => {
    fetch("/document")
      .then((res) => res.json())
      .then((data) => setDocs(data));

  }, []);
  
  return (

    <div className='containtBody'>
      {!docs.data ? "Download..." : docs.data.map((document, index) => (
        <><h3>{document.title}</h3>
          <h6>Created: {document.created}</h6>
          <h6>Last update: {document.lasteUpdate}</h6>
          <h6>Text:</h6>
          <p className="text_align"> {document.text}</p>
          {index === docs.data.length - 1 ? <p></p> : <Divider />}
        </>
      ))}
    </div>
  );

}

export default Files;

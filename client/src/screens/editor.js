import React, { useState } from 'react';
import { Editor } from 'primereact/editor';
// @flow

/*
** Add 2x/ @flow to any files you want to type check.
** Now can you run npm run flow to ckeck the files for errors. 
*/


const TextEditor = () => {
  const [text1, setText1] = useState('<div>Hello World!</div><div>PrimeReact <b>Editor</b> Rocks</div><div><br></div>');
  const [text2, setText2] = useState('');

  const renderHeader = () => {
      return (
          <span className="ql-formats">
              <button className="ql-bold" aria-label="Bold"></button>
              <button className="ql-italic" aria-label="Italic"></button>
              <button className="ql-underline" aria-label="Underline"></button>
          </span>
      );
  }

  const header = renderHeader();

  return (
      <div>
        <div className='space'></div>
          <div className="card">
              <Editor headerTemplate={header} style={{ height: '320px' }} value={text2} onTextChange={(e) => setText2(e.htmlValue)} />
          </div>
      </div>
  );
}

export default TextEditor;

import React from 'react';
// @flow

/*
** Add 2x/ @flow to any files you want to type check.
** Now can you run npm run flow to ckeck the files for errors. 
*/

function Home() {

  return (
    <div className="containtBody2">
      <div className="container">
        <div className="row">
          <div className="col"><img src="assets/me.PNG" alt="avatar" width="300" height="300" /></div>
          <div className="col-6">
            <h4>Hi! Welcome to my page for the course Jsramverk!</h4>
            I am Georges Kayembe. I'm from Gothenburg and i'm study Web programming at BTH.
            I have some experience with desktop app using Java - JavaFX - Python & C.
            When it comes to web development, i do stuff like HTML, PHP, SQL, LINUX and BASH.
            I have a passion for programming and I’m currently learning Flutter & Dart, React & TypeScript.
          </div>
          <div className="w-100"></div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-6">
            <h4>What it's about</h4>
            This is a very simple Text Editor created using TypeScript.
            Its purpose is nothing more than to help me practice using TypeScript
            and React together while getting a better understanding of user-text interactions.
          </div>

          <div className="col"><img src="assets/logo.png" alt="avatar" width="300" height="300" /></div>
          <div className="w-100"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;

# text_editor

This is a very simple Text Editor created using TypeScript.
Its purpose is nothing more than to help me practice using TypeScript and React together while getting a better understanding of user-text interactions.

In the server directory, you can run:

### npm run dev
Runs the app in the development mode.
Open http://localhost:1337 to view it in the browser.

### Server

I have separated the server-side in 3 globals layers: Model, Router and Service.
The server's layers main task is to handle request from the client and interacting with the database. It's written in TypeScript and the APIs are build with REST:ful principles. I have used node and express as frameworks for building the backend.

#### Router

GET /document                Gets list of documents
PUT /document                Adds document to database
PUT /document/update/id      Updates document by id
DELETE /document/delete/id   Deletes document by id 

#### Service

The service layer holds functionality for the requests that taking place from the router. To make the service layer as loosely coupled to the router as possible, it has been design towards the interfaces IDocumentService.

### Model

The model layer holds the abstraction of the entity Document:
{
    id: number;
    title: string;
    created: string;
    lasteUpdate: string;
    text: string;
}

### Client

The client-side is globally composed of 5 pages: Home, Create, Update, Files and Report.

- Home: Shows a presentation about myself

- Create: 

Allows the user to create a document.

- Update: 

Allows the user to edit and delete a document. Note that you must click the Save button to load your changes, otherwise you will lose your new data if you leave the editor section.

- Files: Shows all documents and their contents

- Report: Shows the resumes.


import React, { useState } from 'react';
import { Editor } from 'primereact/editor';
import { Button as ButtonPrimereact } from 'primereact/button';
import { DataScroller } from 'primereact/datascroller';
//import { TrixEditor } from 'react-trix';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
// @flow



// Template for add new document
function AddNewDocumentTemplate() {
    const [title, setTitle] = useState("");
    return (
        <div>
            <form onSubmit={async (event) => {
                event.preventDefault();
                addNewDocument(title);
            }}>
                <p>
                    <label htmlFor="title">Title </label><br />
                    <input type="text" className='itemField' id="title" placeholder="Title..." value={title} onChange={(event) => { setTitle(event.target.value) }} /><br />
                </p>
                <p><input type="submit" value="Add" /></p>
            </form>
        </div>
    );
}

// Template for showing document
function documentsTemplate(data) {
    return (
        <div className="product-item">
            <img src="assets/file.png" alt="document_image" />
            <div className="product-detail">
                <div className="product-name">
                    {data.title + " "}
                </div>
                <br />

                <i className="pi pi-calendar product-category-icon"></i><span className="product-category">{data.created}</span>
                <br />
                <i className="pi pi-tag product-category-icon"></i><span className="product-category">{"Text file"}</span>
            </div>

            <div className="product-action">
                <><p><ButtonPrimereact label="Delete" icon="pi pi-trash" onClick={(event) => { this.deleteDocument(data.id) }} /></p><ButtonPrimereact icon="pi pi-pencil" label="Update" onClick={(event) => { this.editModeON(data) }}></ButtonPrimereact></>
            </div>
        </div>
    );
}

async function addNewDocument(title) {
    const response = await fetch("/document/create", {
        method: "POST",
        headers: {"content-type": "application/json",},
        body: JSON.stringify({
            title: title,
            created: new Date().toUTCString(),
            lastUpdate: new Date().toUTCString(),
            text: ""
        }),
    });
    const data = await response.json();
    console.log("Document id: "+ data.id);
}


const TextEditor = () => {
    const [text1, setText1] = useState('<div>Hello World!</div><div>PrimeReact <b>Editor</b> Rocks</div><div><br></div>');
    const [text2, setText2] = useState('');
    const [docs, setDocs] = React.useState([]);

    React.useEffect(() => {
        fetch("/document")
            .then((res) => res.json())
            .then((data) => setDocs(data));

    }, []);

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

        <>
            <div className='containtBody2'>
            <div className='space'>
            </div><div className='panelOne'>
                <h6>New document</h6>
                <AddNewDocumentTemplate />
            </div>

            <div className='panelTwo'>
                <h6>My documents</h6>

                <div className="datascroller-demo">
                    <div className="card">
                        <DataScroller value={docs.data} itemTemplate={documentsTemplate} rows={5} inline scrollHeight="335px" header="Scroll Down to Load More" />
                    </div>
                </div>
            </div>

                <div className='space'></div>

                <h1>Editor</h1>
                <div>
                    <div className="card">
                        <Editor headerTemplate={header} style={{ height: '320px' }} value={text2} onTextChange={(e) => setText2(e.htmlValue)} />
                    </div>
                </div>

            </div></>


    );
}

export default TextEditor;

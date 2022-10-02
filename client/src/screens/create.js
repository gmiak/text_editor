import React, { useState } from 'react';
import { Editor } from 'primereact/editor';
import { Button as ButtonPrimereact } from 'primereact/button';
import Alert from "../components/alert";
// @flow



async function addNewDocument(title, text) {
    const response = await fetch("/document/create", {
        method: "POST",
        headers: { "content-type": "application/json", },
        body: JSON.stringify({
            title: title,
            created: new Date().toUTCString(),
            lastUpdate: new Date().toUTCString(),
            text: text
        }),
    });
    const data = await response.json();
}

function alertResponse() {
    return (
        <div class="alert alert-success" role="alert">
            <h4 class="alert-heading">Well done!</h4>
            <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>

            <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
        </div>
    );
}


const CreateDoc = () => {
    const [text2, setText2] = useState('');
    const [docs, setDocs] = React.useState([]);
    const [title, setTitle] = useState("");
    const [alert, setAlert] = useState(false);


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
                <div className='space'></div>
                <div>
                    <h6>New document</h6>
                    <div>
                        <form>
                            <p>
                                <label htmlFor="title">Title </label><br />
                                <input type="text" className='itemField' id="title" placeholder="Title..." value={title} onChange={(event) => { setTitle(event.target.value) }} /><br />
                            </p>
                        </form>
                    </div>
                </div>

                <h6>Text</h6>
                <div>
                    <div className="card">
                        <Editor headerTemplate={header} style={{ height: '320px' }} value={text2} onTextChange={(e) => setText2(e.htmlValue)} />
                    </div>
                </div>
                <div className='space'></div>
                <ButtonPrimereact label="Add" icon="pi pi-plus" onClick={(event) => { addNewDocument(title, text2); setAlert(true); }} />
                <div className='space'></div>
                {alert ? <div class="alert alert-success" role="alert">
                    <h4 class="alert-heading">Well done!</h4>
                    <p>You have successfully created the document..</p>
                    <p class="mb-0">Go to "Update" if you want to edit the document.</p>
                    <p class="mb-0">Go to "Files" if you want to read the document.</p>
                </div> : <div></div>}

            </div></>


    );
}

export default CreateDoc;

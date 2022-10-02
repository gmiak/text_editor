import React, { useState, Component } from 'react';
import { Editor } from 'primereact/editor';
import { Button as ButtonPrimereact } from 'primereact/button';
import { DataScroller } from 'primereact/datascroller';
//import { TrixEditor } from 'react-trix';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
// @flow


export class UpdateDoc extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text2: "",
            docs: [],
            editMode: false,
            doc: {}
        };
        this.documentsTemplate = this.documentsTemplate.bind(this);
    }

    async componentDidMount() {
        this.refreshDocumentList();

    }

    // Fetchs documents from backend
    async refreshDocumentList() {
        fetch("/document")
            .then((res) => res.json())
            .then((data) => this.setState({ docs: data }));
    }


    renderHeader() {
        return (
            <span className="ql-formats">
                <button className="ql-bold" aria-label="Bold"></button>
                <button className="ql-italic" aria-label="Italic"></button>
                <button className="ql-underline" aria-label="Underline"></button>
            </span>
        );
    }

    editModeOn(data) {
        this.setState({
            editMode: true,
            text2: data.text,
            doc: data
        })
    }

    editModeOff(data) {
        this.setState({
            editMode: false,
            text2: "",
            doc: {}
        })
    }

    // Template for showing document
    documentsTemplate(data) {
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
                    <><p><ButtonPrimereact label="Delete" icon="pi pi-trash" onClick={(event) => { this.deleteDocument(data.id) }} /></p><ButtonPrimereact icon="pi pi-pencil" label="Update" onClick={(event) => { this.editModeOn(data) }}></ButtonPrimereact></>
                </div>
            </div>
        );
    }


    render() {
        const header = this.renderHeader();
        return (
            <>
                <div className='containtBody2'>

                    <div>
                        <h6>My documents</h6>

                        <div className="datascroller-demo">
                            <div className="card">
                                <DataScroller value={this.state.docs.data} itemTemplate={this.documentsTemplate} rows={5} inline scrollHeight="335px" header="Scroll Down to Load More" />
                            </div>
                        </div>
                    </div>

                    <div className='space'></div>

                    <h1>{this.state.editMode ? this.state.doc.title : "Editor"}</h1>

                    <ButtonToolbar aria-label="Toolbar with button groups">
                        <ButtonGroup className="me-2" aria-label="Second group">
                            <Button onClick={async (event) => {
                                event.preventDefault();
                                props.updateDoc(this.state.data.id, this.state.text2)
                            }}>Save</Button> {/*<Button>6</Button> <Button>7</Button>*/}
                        </ButtonGroup>
                    </ButtonToolbar>
                    <div className='space2'></div>
                    <div>
                        <div className="card">
                            <Editor headerTemplate={header} style={{ height: '320px' }} value={this.state.text2} onTextChange={(e) => this.setState({ text2: e.htmlValue })} />
                        </div>
                    </div>

                </div></>

        );
    }
}

export default UpdateDoc;
import React, { Component } from 'react';
import {Modal, Button} from 'react-bootstrap';

class Dialog extends React.Component {
    render() {
        return (
            <Modal
                {...this.props}
                bsSize="small"
                aria-labelledby="contained-modal-title-sm"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-sm">Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <span>Create Board</span>
                    <hr/>
                    <label htmlFor="board"></label>
                    <input id={'board'} type="text" placeholder={'What are you organized?'}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default Dialog;
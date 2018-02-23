import React, { Component } from 'react';
import './App.css';
import Popup from  './Popup';
import 'bootstrap/dist/css/bootstrap.css';

class List extends Component {
    constructor() {
        super();
        this.state = {
            showModal:false
        }
        this.showModal = this.showModal.bind(this);
    }

    showModal() {
        this.setState({
            showModal: !this.state.showModal
        });
    }

    render() {
        let items = this.props.list.map((board, index) => {
            return <div className={'board'} key={index} ><span className={'boardText'} onClick={this.showModal}>Add Board...</span></div>
        })
        return (
            <div>
                <div className={'boardDiv'}>
                    {items}
                </div>
                <ShowPopup show={this.state.showModal} />
            </div>


        )
    }
}

class Button extends Component {
    constructor() {
        super();
        this.click = this.click.bind(this);
    }
    click() {
        this.props.updateBoards(1);
    }
    render() {
        return (
            <button onClick={this.click}>+Add</button>
        )
    }
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boards : [],
            showModal : false
        };
        this.updateBoards = this.updateBoards.bind(this);
        this.show = this.show.bind(this);
    }

    updateBoards(board) {
        let updatedBoards = this.state.boards.concat(board);
        this.setState({boards:updatedBoards});
    }

    show(showModal) {
        this.setState({showModal:showModal})
    }


    render() {
        return (
            <div>
                <Button updateBoards={this.updateBoards} />
                <List list={this.state.boards} show={this.show} />
            </div>
        );
    }
}

export default App;


class ShowPopup extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <Popup modal={this.props.show}/>
        );
    }
}

import React, {Component} from 'react';
import './css/App.css';
import 'semantic-ui-css/semantic.min.css'
import {Button} from 'semantic-ui-react'


class App extends Component {
    constructor() {
        super();

        this.state = {
            count: 0
        };

        // this.handleAdd = this.handleAdd.bind(this);
        // this.handleSub = this.handleSub.bind(this);
    }

    handleAdd = () => {

        this.setState({
            count: this.state.count + 1
        });
    };

    handleSub = () => {

        this.setState({
            count: this.state.count - 1
        });

    };


    render() {
        return (
            <div>
                <Button onClick={this.handleAdd}>اضافه کن!</Button>
                <span style={{padding: '10px'}}>{this.state.count}</span>
                <Button onClick={this.handleSub}>کم کن!</Button>
            </div>
        );
    }
}


export default App;




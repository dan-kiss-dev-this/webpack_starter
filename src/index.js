import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Button from './components/Button';

class App extends Component {
    state = {
        count: 0,
    };

    increment = () => {
        this.setState(state => ({
            count: state.count + 1
        }));
    };



    render() {
        const { count } = this.state;
        return (
            <div>
                <h1>{`The current count is ${count}`}</h1>
                <Button onClick={this.increment} />
            </div>
        )
    }
}

// const App = () =>  (
//     <h1>Hello World 42</h1>
// )

ReactDOM.render(<App />, document.getElementById('app'));
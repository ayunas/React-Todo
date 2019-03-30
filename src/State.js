import React from 'react';

class State extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
        
        
    }
    
    
    handleAddOne() {
        console.log("handleAddOne");
        this.state.count = this.state.count + 1;
        console.log(this.state);
        this.render();
    }
    
    handleMinusOne() {
        console.log("handleMinusOne");
    }
    
    handleReset() {
        console.log("handleReset");
    }
    
    
    
    render() {
        return (
        
            <div>
                <h1>Count: {this.state.count} </h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        
        );
    }
    
}


export default State;
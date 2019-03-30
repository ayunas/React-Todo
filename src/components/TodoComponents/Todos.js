import React from 'react';
import Todo from './Todo';

const obj = {

    name: 'amir',
    getName() {
        return this.name;
    }
}

const getName = obj.getName.bind(obj);
console.log(getName());




class Todos extends React.Component {
    
    constructor() {
        super();   
    }
    
    removeAll() {
        console.log('remove button has been clicked');
        console.log(this.props.todos);
    }
    
    render() {
        console.log(this.props.todos);
        
        return (
            <div>
                <button onClick={this.removeAll.bind(this)}>Remove</button>
                {this.props.todos.map( todo => <Todo todo={todo} key={todo}/>
                )}
            </div>
        );
    }
    
}

export default Todos;


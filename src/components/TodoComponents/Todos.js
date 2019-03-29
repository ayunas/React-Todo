import React from 'react';
import Todo from './Todo';


class Todos extends React.Component {
    
    constructor() {
        super();   
    }
    
    render() {
        console.log(this.props.todos);
        
        return this.props.todos.map( todo => <Todo todo={todo} key={todo}/>);
    }
    
}

export default Todos;


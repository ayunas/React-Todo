import React from 'react';
import Todo from './Todo';


class Todos extends React.Component {
    
    constructor() {
        super();   
    }
    
    render() {
         console.log(this.props);
        return (
        
            <ol>
                {this.props.todos.length}
                <Todo />
            </ol>
            
        );
        
    }
    
}

export default Todos;


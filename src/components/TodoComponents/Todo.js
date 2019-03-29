import React from 'react';

class Todo extends React.Component {
    
    
    render() {
        const todos = this.props.todos;
        return (
            
            todos.map( todo => {
                return <li>{todo}</li>
            })
            
        );
    }
}

export default Todo;
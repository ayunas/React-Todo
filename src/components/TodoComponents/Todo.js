import React from 'react';

class Todo extends React.Component {
    
    render() {
        console.log(this.props);
        return <li>{this.props.todo}</li>
    }
}

export default Todo;
import React from 'react';
// import './Todos.css';

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.addTodo = this.addTodo.bind(this);
    }
    
    addTodo(e) {
        e.preventDefault();
        console.log('addTodo has been clicked');
        const todo = e.target.elements.addtodo.value.trim();
        this.props.handleAddTodo(todo);
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.addTodo}>
                    <input type='text' name='addtodo' />
                    <button>Add Todo</button>        
                </form>
            </div>
                
        );
    }
}

export default AddTodo; 
import React from 'react';
import './Todos.css';

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.addTodo = this.addTodo.bind(this);
    }
    
    addTodo(e) {
        e.preventDefault();
        console.log('addTodo has been clicked');
        // console.log(this.props);
        const todo = e.target.elements.addtodo.value.trim();
        if (todo) {
           this.props.handleAddTodo(todo);
        }
    }
    
    render() {
        return (<form onSubmit={this.addTodo}>
                    <input type='text' name='addtodo' />
                    <button>Add Todo</button>        
                </form>
               );
    }
}

export default AddTodo; 
import React from 'react';
import './Todos.css';

class TodoForm extends React.Component {
    
    
    addTodo(e) {
        e.preventDefault();
        console.log('addTodo has been clicked');
        const todo = e.target.elements.addtodo.value.trim();
        if (todo) {
            alert(todo);
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

export default TodoForm; 
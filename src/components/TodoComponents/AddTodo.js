import React from 'react';
// import './Todos.css';

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.addTodo = this.addTodo.bind(this);
        this.input = React.createRef();
    }
    
    addTodo(e) {
        e.preventDefault();
        console.log('addTodo has been clicked');
        const todo = e.target.elements.addtodo.value.trim();
        this.props.handleAddTodo(todo);
        this.input.current.value = '';
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.addTodo}>
                    <input type='text' name='addtodo' ref={this.input}/>
                    <button>Add Todo</button>        
                </form>
            </div>
                
        );
    }
}

export default AddTodo; 
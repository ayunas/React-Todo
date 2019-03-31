import React from 'react';
import Header from './components/TodoComponents/Header';
import Decide from './components/TodoComponents/Decide';
import Todos from './components/TodoComponents/Todos';
import TodoForm from './components/TodoComponents/TodoForm';
import VisibilityToggle from './components/TodoComponents/VisibilityToggle.js';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: ['item1','item2','item4','item-5']
        }
    }

    
    render() {
        
        const title = 'Indecision To-Do';
        const subtitle = 'Put your life in the hands of a computer'
       
        return (
        <div>
            <Header title={title} subtitle={subtitle} />
            <Decide hasTodos={this.state.todos.length > 0}/>
            <Todos todos={this.state.todos}/>
            <TodoForm />
            <VisibilityToggle />
        </div>
        );
    }
}



export default App;

import React from 'react';
import Header from './components/TodoComponents/Header';
import Decide from './components/TodoComponents/Decide';
import Todos from './components/TodoComponents/Todos';
import TodoForm from './components/TodoComponents/TodoForm';
import VisibilityToggle from './components/TodoComponents/VisibilityToggle.js';


class App extends React.Component {
    
    render() {
        
        const title = 'Indecision To-Do';
        const subtitle = 'Put your life in the hands of a computer'
        const todos = ['item1','item2','item4','item-5','item-6'];

        return (
        <div>
            <Header title={title} subtitle={subtitle} />
            <Decide />
            <Todos todos={todos}/>
            <TodoForm />
            <VisibilityToggle />
        </div>
        );
    }
}



export default App;

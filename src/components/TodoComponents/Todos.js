import React from 'react';
import Todo from './Todo';


class Todos extends React.Component {
    
    constructor() {
        super();
        
        
    }
    
    render() {
        
        return (
        
            <ol>
                Todo Component Below
                <Todo />
                
            </ol>
            
        );
        
    }
    
}

export default Todos;


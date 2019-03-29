import React from 'react';


class Decide extends React.Component {
    
    handleClick() {
        console.log('What should I do has been clicked!');
    }
    
    render() {
//         console.log(this.props);
        
        return (
            <div>
                <button onClick={this.handleClick}>What should I do?</button>
            </div>
        );
    }
}

export default Decide;
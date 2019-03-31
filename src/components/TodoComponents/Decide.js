import React from 'react';


class Decide extends React.Component {
    
    render() {
        return (
            <div>
                <button onClick={this.props.decideTodo} disabled={!this.props.hasTodos}>
                What should I do?
                </button>
            </div>
        );
    }
}

export default Decide;
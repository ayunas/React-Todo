import React from 'react';

class VisibilityToggle extends React.Component {
    
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            // visibility: true
        }
    }
    
    handleToggleVisibility() {
        console.log(this.visibility);
        this.visibility = !this.visibility;
        this.setState( () => {
            return (
                {visibility : !this.visibility}
                )
        })
    }

    render() {
        
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                {this.visibility ? 'hide details' : 'show details'}
                </button>
                {this.visibility && (
                    <div>
                        <p>Hey. These are some details you now can see!</p>
                    </div>
                )}
            </div>
        )
        

    }

}

export default VisibilityToggle;
import React, { Component } from 'react';

class Shelby extends Component {
    render() {
        console.log("Shelby's props: " + this.props.propsVariableThatIAmTellingShelbySheWillHave)
        return (
            <div>
                <p> {this.props.propsVariableThatIAmTellingShelbySheWillHave}</p>
            </div>
        );
    }
}

export default Shelby;
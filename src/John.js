import React, { Component } from 'react';
import Shelby from './Shelby'


class John extends Component {
    render() {
        console.log("Data from Andrew: " + this.props.DataFromAndrew)
        return (
            <div>
                <Shelby propsVariableThatIAmTellingShelbySheWillHave = {this.props.DataFromAndrew}/>
            </div>
        );
    }
}

export default John;
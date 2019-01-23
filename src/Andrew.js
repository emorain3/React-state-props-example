import React, { Component } from 'react';
import John from './John'


class Andrew extends Component {
    state = {
        AndrewsData: "wasssupppp"
    }
    render() {
        console.log("Andrew's Data: " + this.state.AndrewsData)
        return (
            <div>
                <John DataFromAndrew = {this.state.AndrewsData} />
            </div>
        );
    }
}

export default Andrew;
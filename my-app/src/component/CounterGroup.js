import React from 'react';
import Counter from './Counter.js';

class CounterCounterGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = { sum: 0 };
    }

    getSum = (count) => {
        this.setState({ sum: count + this.state.sum })
    }
    list() {
        var list = [];
        for (let i = 0; i < this.props.counterNum; i = i + 1) {
            list.push(<Counter setSum={this.getSum} />);
        }
        return list;
    }

    render() {
        return(
        <div>
            {this.list()}
            <span> sum: {this.state.sum}</span>
        </div>
        )

    }
}

export default CounterCounterGroup;
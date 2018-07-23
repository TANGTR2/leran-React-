import React, { Component } from 'react';

export default class InputContent extends Component {
    constructor(props) {
        super(props);
        this.textValue = React.createRef();
    }

    addItem = () => {
        const inputContext = this.textValue.current.value
        this.props.addHandler(this.props.id,inputContext)
        this.textValue.current.value = ""
    }

    render() {       
        return (
            <div>
                <input className="input-text" type="text" name="ListItem" ref={this.textValue}/>
                <div id="button" onClick={this.addItem}>Add</div>
            </div>
        );
    }
}
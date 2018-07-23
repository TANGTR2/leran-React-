import React, { Component } from 'react';

export default class FilterTodo extends Component {
    changeStatus=(status)=>{
        this.props.changeStatusHandler(status);
}
    render() {
        let status = this.props.allStatus;
        return (
            <div>
                <ul id="filters">
                    <li onClick={()=>this.changeStatus("all") }>
                        <a href="#" data-filter="all" className={status === 'all' ? 'selected' : ''} >ALL</a>
                    </li>
                    <li onClick={()=>this.changeStatus("active")}>
                        <a href="#" data-filter="active" className={status === 'active' ? 'selected' : ''}>Active</a>
                    </li>
                    <li onClick={ ()=>this.changeStatus("complete")}>
                        <a href="#" data-filter="complete" className={status === 'complete' ? 'selected' : ''}>Complete</a>
                    </li>
                </ul>
            </div>
        );
    }
}
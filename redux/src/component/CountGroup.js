import React, { Component } from 'react';
import Count from '../container/CountContainer'

export default class CounterGroup extends Component{

    buildCounterGroup(){
        let group = []
        for(let i=0;i<this.props.num;i++){
            group.push(<Count 
                index={i} 
                key={i}/>)
        }
        return group;
    }

    render(){
        return(
            <div>{this.buildCounterGroup()}</div>
        );
    }
}
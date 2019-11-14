import React, { Component } from 'react'

export default class TodoInput extends Component {
    handleInput=(e)=>{
        if(e.keyCode===13){
            this.props.add(e.target.value);
            e.target.value="";
        }
    }

    render() {
        return (
            <div className="top">
                <input type="text" ref={(inp)=>{this.a=inp}} onKeyDown={this.handleInput} placeholder="在这里添加ToDo"/>
            </div>
        )
    }
}

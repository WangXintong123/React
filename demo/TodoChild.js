import React, { Component } from 'react'

export default class TodoChild extends Component {

    delItem=(index,e)=>{
        this.props.del(index,e);
    }

    changeUl=(index)=>{
        this.props.change(index);
    }

    render() {
        return (
            <div class="conten">
                <h2>待办事项</h2>
                <span className="num">{this.props.a}</span>
                <ul>
                    {
                        this.props.todo.map((item,index)=>{
                            if(this.props.todo[index].done==false){
                                return (
                                <li key={index}><input type="checkbox" onChange={this.changeUl.bind(this,index)}></input>{item.title}----------------<button onClick={this.delItem.bind(this,index)}>删除</button></li>
                                )
                            }
                            
                        })
                    }
                </ul>
                <h2>完成事项 </h2>
                <span className="num">{this.props.b}</span>
                <ul>
                    {
                        this.props.todo.map((item,index)=>{
                            if(this.props.todo[index].done==true){
                                return (
                                <li key={index}><input checked type="checkbox" onChange={this.changeUl.bind(this,index)}></input>{item.title}----------------<button onClick={this.delItem.bind(this,index)}>删除</button></li>
                                )
                            }
                            
                        })
                    }
                </ul>
            </div>
        )
    }
}

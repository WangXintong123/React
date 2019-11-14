import React, { Component } from 'react'
import TodoChild from './TodoChild';
import TodoInput from './TodoInput'
import "./Todo.css"

export default class TodoParent extends Component {
    constructor(){
        super();
        let todo=JSON.parse(localStorage.getItem('todo'));
        if(todo===null){
            this.state={
                todo:[]
            }
        }
        else{
            this.state={
                todo:todo
            }
        }
    }
    addItem=(data)=>{
        var dataObj={
            "title":"",
            "done":false
        }
        dataObj.title=data;
        this.setState({
            todo:[...this.state.todo,dataObj]
        })
    }

    delItem=(index,e)=>{
        let todo=[...this.state.todo];
        todo.splice(index,1);
        this.setState({
            todo
        })
    }

    changeUl=(index)=>{
        var todo=this.state.todo;
        var a=todo[index].done;        
        if(a==true){
            todo[index].done=false
        }
        else{
            todo[index].done=true
        }
        this.setState({
            todo
        })
    }

    render() {
        localStorage.setItem("todo",JSON.stringify(this.state.todo));
        var a=0;
        var b=0;
        this.state.todo.forEach(function(ele){
            if(ele.done==false){
                a++;
            }
            else{
                b++;
            }
        })
        return (
            <div>
                <TodoInput add={this.addItem}/>
                <TodoChild del={this.delItem} todo={this.state.todo} change={this.changeUl} a={a} b={b} />
            </div>
        )
    }
}

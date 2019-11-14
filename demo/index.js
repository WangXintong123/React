import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ShowTime from './ShowTime';
import Todolist from './ToDoList/Todolist'
import Request from './Request.js'
import Parent from './Context/Parent';
import {con} from './Context/Context';
import {con2} from './Context/Context';
import Hoc from './Hoc/Hoc';
import Portal from "./Portal/Portal";
import ParentPortal from "./Portal/ParentPortal"
import TodoList from './Work1/TodoList'
//import * as serviceWorker from './serviceWorker';

//react 技术栈
//jsx语法
//var str="0805";
//babel编译返回一个对象
//var ele=<h1 class="tit">YIBO{str}</h1>
/*var ele=React.createElement('h1',{id:"tit",class:"title"},"YIBO",React.createElement("p",{id:"t"},"0805"));
console.log(ele);
ReactDOM.render(ele, document.getElementById('root'));*/
//自己封装render函数
var obj={
    type:"div",
    props:{
        id:"box",
        class:"box",
        children:['YIBO','0805',
        {
            type:"h1",
            props:{
                id:"tit",
                class:"tit",
                children:['YIBO','0805',]
                
            }
        
        }]
    }
}
function render(obj,container){
    var{type,props}=obj;
    //文档碎片
    var fragment=document.createDocumentFragment();
   var ele=document.createElement(type);
   for(var item in props){
       if(item==="class"){
           ele.className=props[item];
       }
       else if(item==="children"){
           for(var i=0;i<props[item].length;i++){
               //ele.innerHtml+=props.children[i];
               if(typeof props.children[i]==='object'){
                   render(props.children[i],ele)
               }
               else{
                   var txt=document.createTextNode(props.children[i]);
                   ele.appendChild(txt);
               }
               
           }
       }
       else{
         ele[item]=props[item];  
       }
   }
   fragment.appendChild(ele);
   container.appendChild(fragment);
}
//render(obj,document.getElementById('root'))


//页面渲染过程
/**
 * 请求HTML页面、浏览器HTML解析器解析html文件、生成DOM树、
 * link引入css文件、css解析器解析CSS，生成CSS对象模型，CSSOM和DOM tree结合生成一个render tree（渲染树），最后浏览器绘制页面
 */
//页面回流（重排reflow）：DOM结构变化，内容变化，大小、位置、显示的变化
//页面重绘（repaint）：颜色的变化（背景色，字体颜色，边框颜色）

//1、先用变量进行DOM处理，最后一次渲染
/*console.time('time')
var div=document.getElementById('root');
var str='';
for(var i=0;i<1000;i++){

    str+='<p>'+i+'</p>';
}
div.innerHTML=str;
console.timeEnd('time')*/

//2、对于样式的处理,声明一个css类
/*var div=document.getElementById('root');
div.style.width='100px';
div.style.height='100px';
div.style.background='red';
//写css里
div.className='active';*/

//3、offsetLeft、offsetTop、offsetWidth等都会引起回流
/*var wid=div.offsetWidth;
setInterval(()=>{
    wid+=1
    div.style.width=wid+'px';
},100)*/

//4、文档碎片（内存中的一个变量）



/*------------------------------------------------------------------------------------------------------ */

//显示当前系统时间
/*
function time(){
    var ele=<div>
        <p>当前时间是：</p>
        {new Date().toLocaleString()}
    </div>;
    ReactDOM.render(ele,document.querySelector('#root'));
}
time();
setInterval(time,1000);
*/


/*------------------------------------------------------------------------------------------------------- */
/*
function ShowTime(props){
    console.log(props)
    //解构赋值
    return(<Fragment>
        <div>{props.name}</div>
        <div>{new Date().toLocaleString()}</div>
        <div>{props.age}</div>
    </Fragment>) 
}
*/
//类定义组件 ShowTime.js
/*
var num=[1,2,3,4,5];
ReactDOM.render(<ShowTime name='YIBO' age={num}/>,document.getElementById('root'));
*/


/*------------------------------------------------10.12--------------------------------------------------------*/


//组件交互
/**
 * 父组件-->子组件：调用子组件时添加属性，子组件通过props拿到传递的数据
 * 子组件-->父组件：todo文件夹
 */



 /*------------------------------------------------10.15--------------------------------------------------------- */
 //Context
 /**
  * 1、生成Context，可写在一个js文件中，export导出
  * 2、在根组件import Provider，并配合Provider，加上value属性
  * 3、在需要获取的组件import Consumer，配置Consumer
  * Consumer组件里是一个函数，函数的参数是传过来的value值
  */
// let id= 1234;
// ReactDOM.render(
//     <con.Provider value={id}>
//         <div>ddd</div>
//         <con2.Provider value="aaa">
//             <Parent/>
//         </con2.Provider>
        
//     </con.Provider>
//     ,document.getElementById("root")
// );




// ReactDOM.render(<Hoc/>,document.getElementById("root"));







//serviceWorker.unregister();


/*----------------------------------------------10.16----------------------------------------------------------- */

// ReactDOM.render(<ParentPortal/>,document.getElementById("root"));
ReactDOM.render(<TodoList/>,document.getElementById("root"));


import React, { Component } from 'react'
import {Link,NavLink} from 'react-router-dom'

export default class HomeSub extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
        
    }
    componentDidMount(){
        var url='https://cnodejs.org/api/v1/topics?tab=dev&&page='+this.props.match.params.id

        fetch(url).then((res)=>res.json()).then((res)=>{
            this.setState({
                data:res.data
            })
        })
    }
    componentDidUpdate(prevProps,prveState){
        if(prevProps.match.params.id==this.props.match.params.id){
            var url='https://cnodejs.org/api/v1/topics?tab=dev&&page='+this.props.match.params.id
                fetch(url).then((res)=>res.json()).then((res)=>{
                    this.setState({
                        data:res.data
                    })
                })
        }
        
    }
    render() {
        let url=this.props.match.url
        return (
            <div className="homesub">
            {
                this.state.data.map((item,index)=>(
                    <div className="homelist" style={{borderBottom: '1px solid gray',height:40}} key={item.id}>
                        <img style={{float:'left'}} src={item.author.avatar_url}/>
                        <div style={{width:70,float:'left'}}>
                            <span style={{marginLeft:10,fontSize:17,color:'purple'}}>{item.reply_count}</span><span>/</span><span style={{fontSize:12,marginRight:10}}>{item.visit_count}</span>
                        </div>
                        
                        {/* <span style={{background:'#ccc',color:"#hhh",margin:"0 10px"}}>分享</span> */}
                        {/* <a href={"http://localhost:3000/home/topic/"+item.id}>{item.title}</a> */}
                        <Link to={'/home/topic/'+item.id}>{item.title}</Link>
                        <span style={{float:'right',fontSize:12,color:'gary',marginTop:'15px'}}>2天前</span>
                        {/* <div dangerouslySetInnerHTML={{__html:item.content}}></div> */}
                    </div>
                ))
                
            }
                <div className="homebottom">
                    <ul>
                        {
                            [1,2,3,4,5,6,7,8,9,10].map((item)=>(
                                <li key={item}>
                                    <Link style={{fontSize:28}} to={"/home/customer/"+item}>{item}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

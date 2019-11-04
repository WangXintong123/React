import React, { Component } from 'react'
import {Link,Route,NavLink,Redirect} from 'react-router-dom'
import HomeSub from './homesub/all/AllSub'
import Artical from './homesub/Artical'
import AllSub from './homesub/all/AllSub'
import JinghuaSub from './homesub/jinghua/JinghuaSub'
import ShareSub from './homesub/share/ShareSub'
import AqSub from './homesub/aq/AqSub'
import ComeSub from './homesub/come/ComeSub'
import CustomerSub from './homesub/customer/CustomerSub'

export default class Home extends Component {
    render() {
        let url=this.props.match.url
        console.log((url))
        return (
            <div>
                <div className="nav">
                    <NavLink activeStyle={{background:"rgb(126, 216, 67)",color:"white"}} to={`${url}/all`}>全部</NavLink>
                    <NavLink activeStyle={{background:"rgb(126, 216, 67)",color:"white"}} to={`${url}/jinghua`}>精华</NavLink>
                    <NavLink activeStyle={{background:"rgb(126, 216, 67)",color:"white"}} to={`${url}/share`}>分享</NavLink>
                    <NavLink activeStyle={{background:"rgb(126, 216, 67)",color:"white"}} to={`${url}/aq`}>问答</NavLink>
                    <NavLink activeStyle={{background:"rgb(126, 216, 67)",color:"white"}} to={`${url}/come`}>招聘</NavLink>
                    <NavLink activeStyle={{background:"rgb(126, 216, 67)",color:"white"}} to={`${url}/customer`}>客户端测试</NavLink>
                </div>
                <div>
                    <Route path={url} render={()=><Redirect from="/" to="/home/all"/>}/>
                    <Route exact path={`${url}/all`} component={HomeSub}/>
                    <Route exact path={`${url}/jinghua`} component={JinghuaSub}/>
                    <Route exact path={`${url}/share`} component={ShareSub}/>
                    <Route exact path={`${url}/aq`} component={AqSub}/>
                    <Route exact path={`${url}/come`} component={ComeSub}/>
                    <Route exact path={`${url}/customer`} component={CustomerSub}/> 
                    <Route path={"/home/all/:id"} component={AllSub}/>
                    <Route path={"/home/jinghua/:id"} component={JinghuaSub}/>
                    <Route path={"/home/share/:id"} component={ShareSub}/>
                    <Route path={"/home/aq/:id"} component={AqSub}/>
                    <Route path={"/home/come/:id"} component={ComeSub}/>
                    <Route path={"/home/customer/:id"} component={CustomerSub}/>
                    <Route path={url+"/topic/:id"} component={Artical}/>
                </div>
                
            </div>
        )
    }
}

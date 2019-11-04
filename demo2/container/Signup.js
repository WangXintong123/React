import React, { Component } from 'react'
import {NavLink,Link} from 'react-router-dom'

export default class Signup extends Component {
    render() {
        return (
            <div>
                <div className="sign">
                    <div className="stop">
                        <span className="green"><Link to="/home/all/1">主页</Link></span>
                        <span>/</span>
                        <span>登录</span>
                    </div>
                    <div>
                        <form className="form-horizontal" action="/home/all/1" method="post">
                            <div className="control-group">
                                <div className="control">
                                    <label className="control-label" for="name">用户名</label>
                                </div>
                                <div className="controls">
                                    <input className="input-xlarge" id="name" name="name" size="30" type="text"/>
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="control">
                                     <label style={{marginLeft:17}} className="control-label" for="pass">密码</label>
                                </div>
                                <div className="controls">
                                    <input className="input-xlarge" id="pass" name="pass" size="30" type="password"/>
                                </div>
                            </div>
                            <input type="hidden" name="_csrf" value="b3dzVbZ0-zFap4YYAVKjy2U_X5_Kxd_WoOGE"/>

                            <div className="form-actions">
                                <div className="denglu">
                                    <NavLink to="/home">登录</NavLink>
                                </div>
                                <a style={{float:'left',marginTop:23,marginLeft:20,fontSize:18,color:'gray'}} href="/search_pass">忘记密码了?</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

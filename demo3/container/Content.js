import React, { Component } from 'react'

export default class Content extends Component {
    render() {
        return (
            <div>
                {
                    [1,2,3,4,5,6].map(val=>(
                        <div key={val} style={{width:'40%',height:200,float:'left',margin:15}}>
                            <img src={require("../image/images/l"+val+".png")} style={{width:'100%',height:160}}/>
                            <div style={{width:"100%",height:35,backgroundColor:'white',marginTop:-3}}>
                                <img src={require("../image/images/name1.png")} style={{width:30,height:30,borderRadius:'50%',marginTop:-5,marginLeft:6}}/>
                                <div style={{marginLeft:5,marginTop:8,display:'inline'}}>橙色律动{val}</div>
                                <div className="iconfont icon-xin" style={{color:'red',marginTop:8,marginLeft:20,display:'inline'}}></div>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}

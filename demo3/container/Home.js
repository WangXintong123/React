import React, { Component } from 'react'
import { TabBar,Icon,NavBar,Carousel,Grid } from 'antd-mobile';
const src1=require("../image/images/1.png");
const src2=require("../image/images/2.png");
var str=["热门品牌","私人搭配师","选购指南"]
const data = Array.from(new Array(3)).map((_val, i) => ({
    path: `name${i}`,
    text:str[i]
  }));
export default class Home extends Component {
    render() {
        return (
            <div>
                <div style={{zIndex:999,width:"100%"}}>
                    <NavBar
                    style={{backgroundColor:"#3fcccb"}}
                    >住吧家居</NavBar>
                </div>
                
                <Carousel
                    autoplay={false}
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                    dotStyle={{height:5,width:20,borderRadius:0}}
                    dotActiveStyle={{height:5,width:20,borderRadius:0,backgroundColor:'#3fcccb'}}
                    >
                    {[1,2].map(val => (
                        <a
                        key={val}
                        style={{ display: 'inline-block', width: '100%', height:190}}
                        >
                        <img
                            src={src1}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                            // fire window resize event to change height
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: 'auto' });
                            }}
                        />
                        </a>
                    ))}
                </Carousel>
                <div style={{margin:10}}>
                    <Grid data={data}
                    itemStyle={{backgroundColor:'rgb(238, 240, 248)'}}
                    columnNum={3}
                    hasLine={false}
                    renderItem={dataItem => (
                        <div style={{padding:5}}>
                            <img src={require("../image/images/"+dataItem.path+".png")} style={{ width: '100%', height: '100%',marginTop:-15}} alt="" />
                            <div style={{ color: 'white', fontSize: '14px',marginTop:-65}}>
                            <span>{dataItem.text}</span>
                            </div>
                        </div>
                    )}
                    />
                </div>
                <div style={{width:'100%',height:300,backgroundColor:'red'}}>
                    <div style={{backgroundColor:'#fff',width:'100%',height:40,paddingTop:10}}>
                        <div>
                            <span style={{color:'#3fcccb',fontSize:20,fontWeight:'bold',marginRight:20}}>|</span> 
                            <span style={{fontSize:18}}>热门推荐</span> 
                        </div>
                    </div>
                    <img src={src2} style={{width:'100%',height:'100%'}}/>
                    <div style={{color:'#fff',marginTop:-25}}>什么是英伦装修风格 英伦家装  英伦风格装修效果图</div>
                </div>
            </div>
        )
    }
}

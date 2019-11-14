import React, { Component } from 'react'
import { TabBar,Icon,NavBar,Carousel,Grid,Tabs,SearchBar} from 'antd-mobile';
const src3=require("../image/images/3.png")
var str=["桌","床","椅","几","柜","书架","沙发","家居饰品","户外家具","全部分类"]
const data1 = Array.from(new Array(10)).map((_val, i) => ({
    icon: require("../image/images/s1.jpg"),
    text:str[i],
  }));

export default class Shop extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{backgroundColor:"#3fcccb"}}
                    rightContent={[
                        <i className="iconfont icon-gouwuche " style={{ marginRight: '10px',fontSize:20 }} ></i>,
                    ]}
                    >商城</NavBar>
                    <div style={{position:"relative"}}>
                        <Carousel
                            autoplay={false}
                            infinite
                            beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                            afterChange={index => console.log('slide to', index)}
                            dotActiveStyle={{backgroundColor:'#3fcccb'}}
                            >
                            {[1,2,3,4].map(val => (
                                <a
                                key={val}
                                style={{ display: 'inline-block', width: '100%', height:160 }}
                                >
                                <img
                                    src={src3}
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
                        <div style={{backgroundColor:'rgba(0, 0, 0, 0.219)',opacity:0.8,position:"absolute",top:0,width:'100%'}}>
                            <i className="iconfont icon-liebiao" style={{color:'white',fontSize:33,float:'left'}}></i>
                            <div style={{float:'left',width:'90%'}}>
                                <SearchBar
                                placeholder="Search"
                                style={{backgroundColor:'rgba(0, 0, 0, 0.219)'}}
                                onFocus={() => console.log('onFocus')}
                                onBlur={() => console.log('onBlur')}
                                onCancel={() => console.log('onCancel')}
                            />
                            </div>
                            
                        </div>
                    </div>
                    <Grid data={data1}
                    columnNum={5}
                    renderItem={dataItem => (
                        <div style={{ padding: '12.5px'}}>
                        <img src={dataItem.icon} style={{ width:'100%', height: '100%',marginTop:-20 }} alt="" />
                        <div style={{ color: '#888', fontSize: '11px', marginTop:0 }}>
                        <span>{dataItem.text}</span>
                        </div>
                        </div>
                    )}
                    />  
                    <div style={{margin:15,height:180}}>
                        <div style={{width:'47%',float:'left',marginRight:17}}>
                            <div style={{width:'100%',height:110,backgroundColor:'white',textAlign:'center'}}>
                                <img src={require("../image/images/ss1.png")} style={{width:'80%',height:"100%"}}/>
                            </div>
                            <p style={{fontSize:12}}>Too Art Studio欧式风格精...</p>
                            <span style={{fontSize:12}}>￥ 39.95</span>
                        </div>
                        <div style={{width:'47%',float:'left'}}>
                            <div style={{width:'100%',height:110,backgroundColor:'white',textAlign:'center'}}>
                                <img src={require("../image/images/ss2.png")} style={{width:'80%',height:"100%"}}/>
                            </div>
                            <p style={{fontSize:12}}>顺顺工艺欧洲风格塑料外框...</p>
                            <span style={{fontSize:12}}>￥ 39.95</span>
                        </div>
                    </div> 
                    <div style={{backgroundColor:'white',margin:15,textAlign:'center'}}>
                        <img src={require("../image/images/ss3.png")} style={{width:'80%',height:"100%"}}/>
                    </div>
            </div>
        )
    }
}

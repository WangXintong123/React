import React, { Component } from 'react'
import { TabBar,Icon,NavBar,Carousel,Grid,Tabs } from 'antd-mobile';
import Content from "./Content"
const tabs = [
    { title: '推荐', sub: '1' },
    { title: '冬季', sub: '2' },
    { title: '宜家', sub: '3' },
    { title: '小清新', sub: '4' },
    { title: '小户型', sub: '5' },
    { title: '个性色彩', sub: '6' },
    { title: '儿童', sub: '7' }
  ];

export default class Linggan extends Component {
    render() {
        return (
            <div style={{position:'relative'}}>
                <NavBar
                    style={{backgroundColor:"#3fcccb"}}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    ]}
                    >灵感</NavBar>
                    
                        <Tabs tabs={tabs}
                        initialPage={0}
                        tabBarUnderlineStyle={{display:'none'}}
                        tabBarActiveTextColor="#3fcccb"
                        onChange={(tab, index) => { console.log('onChange', index, tab); }}
                        onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                        >
                        <div style={{ backgroundColor: '#fff'}}>
                            <Content/>
                        </div>
                    </Tabs>
                    <div style={{fontSize:20,position:"absolute",right:0,top:55,zIndex:999}}>+</div>     
            </div>
        )
    }
}

import React  from 'react'
import { TabBar } from 'antd-mobile';
import Home from "./Home"
import Linggan from "./Linggan"
import Shop from "./Shop"

export default class AppTab extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        selectedTab: 'blueTab',
      };
    }
    render() {
      return (
        <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#3fcccb"
            barTintColor="white"
          >
            <TabBar.Item
              title="首页"
              key="home"
              icon={<i style={{fontSize:22}} className="iconfont icon-home"></i>}
              selectedIcon={<i style={{color:'#3fcccb',fontSize:22}} className="iconfont icon-home"></i>}
              selected={this.state.selectedTab === 'blueTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'blueTab',
                });
              }}
            >
                <Home/>
            </TabBar.Item>
            <TabBar.Item
              icon={<i style={{fontSize:22}} className="iconfont icon-linggan"></i>}
              selectedIcon={<i style={{color:'#3fcccb',fontSize:22}} className="iconfont icon-linggan"></i>}
              title="灵感"
              key="linggan"
              selected={this.state.selectedTab === 'redTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'redTab',
                });
              }}
            >
              <Linggan/>
            </TabBar.Item>
            <TabBar.Item
              icon={<i style={{fontSize:22}} className="iconfont icon-store_icon"></i>}
              selectedIcon={<i style={{color:'#3fcccb',fontSize:22}} className="iconfont icon-store_icon"></i>}
              title="商城"
              key="shop"
              selected={this.state.selectedTab === 'yellowTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'yellowTab',
                });
              }}
            >
              <Shop/>
            </TabBar.Item>
            <TabBar.Item
              icon={<i style={{fontSize:22}} className="iconfont icon-wode"></i>}
              selectedIcon={<i style={{color:'#3fcccb',fontSize:22}} className="iconfont icon-wode"></i>}
              title="我的"
              key="my"
              selected={this.state.selectedTab === 'greenTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'greenTab',
                });
              }}
            >
              我的
            </TabBar.Item>
          </TabBar>
        </div>
      );
    }
  }
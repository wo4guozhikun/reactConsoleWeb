import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

class Navmenu extends Component {
	state = {
		current: '1',
		openKeys: [],
	}
	handleClick = (e) => {
		console.log('Clicked: ', e);
		this.setState({
			current: e.key
		});
	}
	onOpenChange = (openKeys) => {
		const state = this.state;
		const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1));
		const latestCloseKey = state.openKeys.find(key => !(openKeys.indexOf(key) > -1));

		let nextOpenKeys = [];
		if(latestOpenKey) {
			nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
		}
		if(latestCloseKey) {
			nextOpenKeys = this.getAncestorKeys(latestCloseKey);
		}
		this.setState({
			openKeys: nextOpenKeys
		});
	}
	getAncestorKeys = (key) => {
		const map = {
			sub3: ['sub2'],
		};
		return map[key] || [];
	}
	render() {
		return(
			<Menu
		        mode="inline"
		        openKeys={this.state.openKeys}
		        selectedKeys={[this.state.current]}
		        style={{ width: 201 }}
		        onOpenChange={this.onOpenChange}
		        onClick={this.handleClick}>
		        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>计算任务</span></span>}>
		          <Menu.Item key="1"><Link to="/home/dataCompar">vcf 数据集比较</Link></Menu.Item>
		          <Menu.Item key="2"><Link to="/home/geneticCompar">基因编辑距离对比</Link></Menu.Item>
		          <Menu.Item key="3"><Link to="/home/GWAScount">GWAS 计算</Link></Menu.Item>
		          <Menu.Item key="4"><Link to="/home/cooperComput">协同计算</Link></Menu.Item>
		        </SubMenu>
		        <Menu.Item key="5"><Link to="/home/history"><Icon type="appstore" />历史记录</Link></Menu.Item>
		        <Menu.Item key="6"><Link to="/home/logicManage"><Icon type="setting" />逻辑管理</Link></Menu.Item>
		    </Menu>
		);
	}
}

export default Navmenu;
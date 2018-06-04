import React, {Component} from 'react';
import { Table, Pagination} from 'antd';
import "./logicManage.less";

class logicManage extends Component {
	state = {
		config:{
			bordered: true,
			pagination: false,
		}
	}
	
	onChange = (pageNumber)=>{
		console.log('Page: ', pageNumber);
	}
	    
	render() {
    
		return(
			<div className="mainPage">
				<div className="cooper-content">
					<h2>逻辑管理</h2>
					<Table {...this.state.config} columns={columns} dataSource={data} />
					<br />
					<Pagination showQuickJumper defaultCurrent={2} total={500} onChange={this.onChange} />
				</div>
			</div>
		);
	}
}

const data = [{
	key: '1',
	name: 'John Brown',
	age: 32,
	address: 'New York No. 1 Lake Park',
}, {
	key: '2',
	name: 'Jim Green',
	age: 42,
	address: 'London No. 1 Lake Park',
}, {
	key: '3',
	name: 'Joe Black',
	age: 32,
	address: 'Sidney No. 1 Lake Park',
}];

const columns = [{
	title: '任务编号',
	dataIndex: 'name',
	key: 'name',
	render: text => <a href="#1">{text}</a>,
}, {
	title: '计算逻辑',
	dataIndex: 'age',
	key: 'age',
}, {
	title: '计算目标',
	dataIndex: 'address',
	key: 'address',
}, {
	title: '发起方',
	dataIndex: 'address2',
	key: 'address',
}, {
	title: '发起时间',
	dataIndex: 'address3',
	key: 'address',
}, {
	title: '备注',
	dataIndex: 'address4',
	key: 'address',
}, {
	title: '状态',
	key: 'action',
	render: (text, record) => (
		<span>
    		<a href="#2">Action 一 {record.name}</a>
    	</span>
	),
}];

export default logicManage;
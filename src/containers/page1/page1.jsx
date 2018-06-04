import React, {Component} from 'react';
import { Table, Icon } from 'antd';

const title = () => '表 格 数 据';

class page1 extends Component {
	state = {
		config:{
			bordered: true,
			pagination: false,
			title,
		}
	}

	render() {
		return(
			<div className="mainPage">
		   		<Table {...this.state.config} columns={columns} dataSource={data} />
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
	title: 'Name',
	dataIndex: 'name',
	key: 'name',
	render: text => <a href="#1">{text}</a>,
}, {
	title: 'Age',
	dataIndex: 'age',
	key: 'age',
}, {
	title: 'Address',
	dataIndex: 'address',
	key: 'address',
}, {
	title: 'Action',
	key: 'action',
	render: (text, record) => (
		<span>
    		<a href="#2">Action 一 {record.name}</a>
    		<span className="ant-divider" />
    		<a href="#3">Delete</a>
    		<span className="ant-divider" />
    		<a href="#4" className="ant-dropdown-link">
        	More actions <Icon type="down" />
    		</a>
    	</span>
	),
}];

export default page1;
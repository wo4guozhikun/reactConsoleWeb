import React, {Component} from 'react';
import { Form, Button, Input, Select, Table, Pagination } from 'antd';
import "./history.less";
const FormItem = Form.Item;
const InputGroup = Input.Group;
const Option = Select.Option;

class cooperComput extends Component {
	state = {
		config:{
			bordered: true,
			pagination: false,
		}
	}
	    
	normFile = (e) => {
	    console.log('Upload event:', e);
	    if (Array.isArray(e)) {
	      return e;
	    }
	    return e && e.fileList;
	  }

	onChange = (pageNumber)=>{
		console.log('Page: ', pageNumber);
	}

	handleSubmit = (e) => {
	    e.preventDefault();
	    this.props.form.validateFields((err, values) => {
	      if (!err) {
	        console.log('Received values of form: ', values);
	      }
	    });
	}
  
	render() {
		const { getFieldDecorator } = this.props.form;
    
		return(
			<div className="mainPage">
				<div className="cooper-content">
					<Form onSubmit={this.handleSubmit} layout="inline">
						<h2>历史记录</h2>
						
				        <FormItem label="计算逻辑:">
				          {getFieldDecorator('number', {
				          })(
				            <Input  placeholder="输入数字" />
				          )}
				        </FormItem>		
				        <FormItem label="发起方:">
				          {getFieldDecorator('number', {
				          })(
				            <Input  placeholder="输入数字" />
				          )}
				        </FormItem>		
				        <FormItem label="状态:">
				          {getFieldDecorator('number', {
				          })(
				            <Input  placeholder="输入数字" />
				          )}
				        </FormItem>		
				        
				        <FormItem >
				          {getFieldDecorator('number', {
				          })(
		                    <InputGroup compact>
					          <Select defaultValue="Zhejiang">
					            <Option value="Zhejiang">计算目标</Option>
					            <Option value="Jiangsu"> 备 注 </Option>
					          </Select>
					          <Input style={{ width: '50%' }} defaultValue="Xihu District, Hangzhou" />
					        </InputGroup>
				          )}
				        </FormItem>		
				        
						<FormItem>
				          <Button type="primary" htmlType="submit">搜 索</Button>
				        </FormItem>	
				        
						<FormItem>
				          <Button type="primary" htmlType="submit">批量下载excel</Button>
				        </FormItem>
		        
					</Form>
					<br />
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

const CooperComput = Form.create()(cooperComput);

export default CooperComput;
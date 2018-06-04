import React, {Component} from 'react';
import { Form, Upload, Button, Input, Icon, Checkbox } from 'antd';
import "./GWAScount.less";
const { TextArea } = Input;
const FormItem = Form.Item;
const CheckboxGroup = Checkbox.Group;
	
const options = [
	{ label: 'MAF', value: 'Apple' },
	{ label: '基因型', value: 'Pear' },
	{ label: '显性', value: 'Orange' },
	{ label: '隐性', value: 'Banana' },
];

class geneticCompar extends Component {
	
	normFile = (e) => {
	    console.log('Upload event:', e);
	    if (Array.isArray(e)) {
	    	return e;
	    }
	    return e && e.fileList;
	}
	
	onChange = (checkedValues) => {
		console.log('checked = ', checkedValues);
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

	    const formItemLayout = {
	    	labelCol: {
		        xs: { span: 24 },
		        sm: { span: 4 },
	    	},
	    	wrapperCol: {
		        xs: { span: 24 },
		        sm: { span: 20 },
	    	},
	    };
    
		return(
			<div className="mainPage">
				<div className="genetic-content">
					<Form onSubmit={this.handleSubmit} layout="horizontal">
						<h2>GWAS 计算</h2>
						
						<FormItem
				        	extra="请上传fasta文件，可多选"
				        	className="uploadFile"
				        >
				        	{getFieldDecorator('upload', {
					            valuePropName: 'fileList',
					            getValueFromEvent: this.normFile,
				        	})(
					            <Upload name="logo" beforeUpload={()=> false} listType="picture">
					              <Button>
					                <Icon type="upload" /> 上传文件
					              </Button>
					            </Upload>
				        	)}
				        </FormItem>
		        
				        <FormItem  >
				        	{getFieldDecorator('remark', {
				            	rules: [{ required: true, message: '请输入备注！' }],
				        	})(
				            	<TextArea rows={4} placeholder="备注："/>
				        	)}
				        </FormItem>	
		        
				        <FormItem {...formItemLayout}  label="计算逻辑:">
				        	{getFieldDecorator('number', {
				            	rules: [{ required: true, message: '请输入数字！' }],
				        	})(
				        		<CheckboxGroup options={options} defaultValue={['Pear']} onChange={this.onChange} />
				        	)}
				        </FormItem>
		        		
						<FormItem className="submitBtn">
				        	<Button type="primary" htmlType="submit">发 起 计 算</Button>
				        </FormItem>
		        
					</Form>
				</div>
			</div>
		);
	}
}

const GeneticCompar = Form.create()(geneticCompar);

export default GeneticCompar;
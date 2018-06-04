import React, {Component} from 'react';
import { Form, Upload, Button, Input, Icon} from 'antd';
import "./geneticCompar.less";
const { TextArea } = Input;
const FormItem = Form.Item;

class geneticCompar extends Component {
	
	    
		normFile = (e) => {
	    console.log('Upload event:', e);
	    if (Array.isArray(e)) {
	      return e;
	    }
	    return e && e.fileList;
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
        sm: { span: 2 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 22 },
      },
    };
    
		return(
			<div className="mainPage">
				<div className="genetic-content">
					<Form onSubmit={this.handleSubmit} layout="horizontal">
						<h2>基因编辑距离比对</h2>
						
		        <FormItem {...formItemLayout}  label="TOP:">
		          {getFieldDecorator('number', {
		            rules: [{ required: true, message: '请输入数字！' }],
		          })(
		            <Input  placeholder="输入数字" />
		          )}
		        </FormItem>		
						
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
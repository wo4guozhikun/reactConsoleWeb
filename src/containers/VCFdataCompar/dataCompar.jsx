import React, {Component} from 'react';
import { Upload, message, Button, Input, Icon, Modal} from 'antd';
import "./dataCompar.less";
const { TextArea } = Input;

const props = {
  name: 'file',
  action: '//jsonplaceholder.typicode.com/posts/',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

class dataCompar extends Component {
	state = { visible: false }

	showModal = () => {
	    this.setState({
	    	visible: true,
	    });
	}
	
	handleOk = (e) => {
	    console.log(e);
	    this.setState({
	      	visible: false,
	    });
	}
	
	handleCancel = (e) => {
	    console.log(e);
	    this.setState({
	    	visible: false,
	    });
	}
  
	render() {
		return(
			<div className="mainPage">
				<div className="cpmpar-content">
					<h2>vcf 数据集比较</h2>
					<Upload {...props}>
					    <Button>
					    	<Icon type="upload" />上 传 文 件
					    </Button>
					</Upload>
					<TextArea rows={4} placeholder="备注："/>
					<Button type="primary" onClick={this.showModal}>发 起 计 算</Button>
					<Modal
			        	title="提 示"
			        	visible={this.state.visible}
			        	onOk={this.handleOk}
			        	onCancel={this.handleCancel}
			        	footer={[
			            <Button key="back" onClick={this.handleCancel}>关闭</Button>,
			            <Button key="submit" type="primary" onClick={this.handleOk}>去查看</Button>,
			        	]}	
					>
			        	<p>计算已发起，请查看任务记录</p>
			        </Modal>
				</div>
			</div>
		);
	}
}




export default dataCompar;
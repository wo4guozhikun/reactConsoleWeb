import React, { Component } from 'react';
import "./page2.less"
import { Row, Col, Modal, Button } from 'antd';
import FillboxForm from '../../components/inputForm/inputForm';
import http from "../../services/service";
import "../../mock/mock";

class page2 extends Component {
	
	componentWillMount(){
		console.log(process.env.HOST)
		http.service.login({data:1}).then((res)=>{
			console.log(res)
		}).catch(()=>{
			
		})

	}
	
	render() {
		return(
			<div className="mainPage">
		   		<Row className="mainPage-row">
			    	<Col span={12} className="detail-showbox">
			    		<Showbox />
			    	</Col>
			    	<Col span={12} className="detail-fillbox">
			    		<h3>表单</h3>
			    		<FillboxForm />
			    	</Col>
			    </Row>
			</div>
		);
	}
}

class Showbox extends Component {
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
	render(){
		return (
	      <div>
	        <Button type="primary" onClick={this.showModal}>Open a modal dialog</Button>
	        <Modal title="Basic Modal" visible={this.state.visible}
	          onOk={this.handleOk} onCancel={this.handleCancel}
	        >
	          <p>some contents...</p>
	          <p>some contents...</p>
	          <p>some contents...</p>
	        </Modal>
	      </div>
		)
	}
}


export default page2;
import React, { Component } from 'react';
import { Layout ,Button ,Input ,Icon} from 'antd';
const { Header, Footer, Content } = Layout;

class loginPage extends Component {
	
	login(){
		this.props.history.push('/home/dataCompar')
	}

	render() {
		return(
			<div className="login">
        		<Layout>
			      <Header>
			      	<div className="header-content">头部</div>
			      </Header>
			      <Content>
			      	<div className="login-content">
			      		<LoginBox confirm={this.login.bind(this)} />
			      	</div>
			      </Content>
			      <Footer>
			      	<div className="footer-content">底部</div>
			      </Footer>
		    	</Layout>
    		</div>
		);
	}
}

class LoginBox extends Component {
	constructor(props){
	    super(props)
	    this.state={
	    	account:null,
	    	password:null
	    }
  	}
	
	changeValue(e){
		switch (e.target.name){
			case "account":
				this.setState({
					account:e.target.value
				})
				break;
			case "password":
				this.setState({
					password:e.target.value
				})
				break;
			default:
				break;
		}
	}
	
	resetValue(){
		this.setState({
			account:null,
	    	password:null
		})
	}
	
	render(){
		return (
			<div className="login-pop">
		   		<div className="login-box">
		   			<h2>NEMO安全计算平台</h2>
		   			<Input name="account" value={this.state.account} onChange={this.changeValue.bind(this)} prefix={<Icon type="user" />} size="default" placeholder="账户" className="login-input"/>
		   			<Input name="password" value={this.state.password} onChange={this.changeValue.bind(this)} prefix={<Icon type="lock" />} size="default" placeholder="密码" className="login-input" type="password"/>
		   			<div>
		   				<Button type="primary" onClick={this.resetValue.bind(this)}>重置</Button>
		   				<Button type="primary" onClick={this.props.confirm}>登录</Button>
		   			</div>
		   		</div>
			</div>
		);
	}
}




export default loginPage;
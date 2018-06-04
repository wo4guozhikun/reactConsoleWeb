import React, {Component} from 'react';
import Navmenu from "../../components/Menu/Menu"
import Routers from "../../routes/router"
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;


class homePage extends Component {
	render() {
		return(
			<Layout>
		      <Header>
		      	<div className="header-content"></div>
		      </Header>
		      <Layout className="main-content">
		        <Sider>
		        	<Navmenu />
		        </Sider>
		        <Content className="content-box">
		        	<Routers />
		        </Content>
		      </Layout>
		      <Footer>
		      	<div className="footer-content"></div>
		      </Footer>
		    </Layout>
		);
	}
}

export default homePage;
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import page1 from "../containers/page1/page1"
import page2 from "../containers/page2/page2"

import dataCompar from "../containers/VCFdataCompar/dataCompar"
import geneticCompar from "../containers/geneticCompar/geneticCompar"
import GWAScount from "../containers/GWAScount/GWAScount"
import cooperComput from "../containers/cooperComput/cooperComput"
import histories from "../containers/history/history"
import logicManage from "../containers/logicManage/logicManage"

export default function Routers(){
	return (
		<Switch>
	        <Route path="/home/dataCompar" component={dataCompar} />
	        <Route path="/home/geneticCompar" component={geneticCompar} />
	        <Route path="/home/GWAScount" component={GWAScount} />
	        <Route path="/home/cooperComput" component={cooperComput} />
	        <Route path="/home/history" component={histories} />
	        <Route path="/home/logicManage" component={logicManage} />
	        <Route path="/home/page1" component={page1} />
	        <Route path="/home/page2" component={page2} />
	        <Redirect from="/" to="/home/dataCompar"></Redirect>
	    </Switch>
	);
}

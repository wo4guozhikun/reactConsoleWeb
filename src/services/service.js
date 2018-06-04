import axios from 'axios';
const BASE = "http://192.168.112.178";

// 设置json请求头
axios.defaults.headers.post['Content-Type'] = "application/json;charset=utf-8";
// 允许跨域
axios.defaults.withCredentials = true;

// 请求参数格式化
const encodeParams = (params) => {
	let r = '?',
    p = [];
	for(let key in params) {
		p.push(`${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`);
	}
	return r + p.join('&&');
};

class api{
	constructor(){
		this.service = {
			login:this.post.bind(this,`${BASE}/admin-ws/jugo_api/mpcApp/getList`)
		}
		//拦截
	    this.requestInterceptor();
	    this.responseInterceptor();
	}
	
	get(url, params) {
	    if(params) {
	      url += encodeParams(params);
	    }
	    return axios.get(url).then(res => res.data);
	}	
	
	post(url, data) {
	    typeof data === 'undefined' ? data = {} : '';
	    return axios.post(url, data).then(res => res.data);
	}
	
	// 请求拦截
	requestInterceptor() {
	    axios.interceptors.request.use((config) => {
	    	return config;
	    }, (error) => {
	    	return Promise.reject(error);
	    })
	}

	// 响应拦截
	responseInterceptor() {
	    axios.interceptors.response.use((response) => {	
	    	return response;
	    }, (error) => {
	    	return Promise.reject(error);
	    });
	}
}

export default new api()

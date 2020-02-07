
// import React, { useState } from 'react';
import api, { create } from 'apisauce'
import $ from 'jquery';
// import LoginForm from '../../containers/LoginForm';

// import axios from 'axios';
// import { useAuth } from "../../context/auth";
import { Redirect } from "react-router-dom";
// import Button from '../../containers/Button';
// import NewsItem from '../../containers/NewsItem';
// import Loading from '../../containers/Loading';

//should not goin here, unless it is used to styling
// import $ from "jquery";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'material-icons/css/material-icons.css';
import 'material-icons/iconfont/material-icons.css';
import '../../wwwroot/style.css';
import '../../wwwroot/materialize.css';

//autocomplete
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

// import 'react-bootstrap-typeahead/css/Typeahead.css';
// import {asyncContainer, Typeahead} from 'react-bootstrap-typeahead';
// @import "~/node_modules/material-design-icons/iconfont/material-icons.css";
// import { Form, Button } from 'react-bootstrap';
//should not goin here
function Login(props) {
	const api = create({
		// baseURL: '...',
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json',
			'Access-Control-Allow-Origin':'*'
		},
	});
	const response = api.post('https://www.indohub.co.id/api/TokenAuth/Authenticate', {UserNameOrEmailAddress : "bandunghubapi@api.com",Password:"3}X,U8sbht=[#H", RememberClient:"true"});
	console.log(response);
	// const headers = {
	// 	'Content-Type': 'application/json',
	// 	'Accept' : 'application/json'
	// axios.create( }
	// const Axios = require('axios');
	// // const proxy = require('http-proxy-middleware');
	// const body = {
	// 	UserNameOrEmailAddress: 'bandunghubapi@api.com',
	// 	Password: '3}X,U8sbht=[#H',
	// 	RememberClient: 'true'
	// }
	// const config = Axios.create({
	// 	// baseURL: 'https://www.indohub.co.id/api/',
	// 	timeout: 3000,
	// 	withCredentials: true,
	//     crossdomain: true,
	// 	// contentType: "application/json;charset=utf-8",
	// 	headers: {
	// 		'Content-type': 'application/json',
	// 		'Accept' : 'application/json',
	// 		// 'Access-Control-Allow-Origin': 'http:/localhost:8080',
	// 		// 'Access-Control-Request-Method': 'POST',
	// 		// 'Access-Control-Allow-Credentials': 'true',
	// 		// 'Access-Control-Allow-Origin': '*'
	// 	},
	// 	// data: {
	// 	// 	'UserNameOrEmailAddress': 'bandunghubapi@api.com',
	// 	// 	'Password': '3}X,U8sbht=[#H',
	// 	// 	'RememberClient': 'true'
	// 	// },
	// 	// method: 'POST',
	// 	// responseType: 'json',

	// });
	// let res = Axios.post('https://www.indohub.co.id/api/TokenAuth/Authenticate', body, config);

	// console.log(`Status: ${res.status}`);
	// console.log(`Server: ${res.headers.server}`);
	// console.log(`Date: ${res.headers.date}`);

	// axios.post('https://www.indohub.co.id/api/TokenAuth/Authenticate',
	// 	payload, {
	// 		headers: {
	// 			// "Content-Type": "application/x-www-form-urlencoded",
	// 			"Accept" : "application/json",
	// 			"Access-Control-Allow-Origin": "*",
	// 			"Content-Type": "application/json"
	// 		}
	// 	})
	// 	.then(function (response) {
	// 		console.log('res ' + response);
	// 		// history.push("/");
	// 	})
	// 	.catch(function (error) {
	// 		console.log('err ' + error);
	// 	});
	// };
	// axios(config);
	// config.post('TokenAuth/Authenticate');
	// const response = axios.post('http://demo0725191.mockable.io/post_data', { posted_data: 'example' });
	// console.log('👉 Returned data:', response);
	// let resAx = axios(getToken);
	// axios.post('https://www.indohub.co.id/api/TokenAuth/Authenticate', payload, config).then(res => { console.log("result"+res) } );
	// console.log(config);
	// axios({
	// 	// method: 'POST',
	// 	baseURL: 'https://www.indohub.co.id/api/TokenAuth/Authenticate',
	// 	// data: payload,
	// 	headers: {
	// 		'Content-type': 'application/json',
	// 		// 'Accept' : 'application/json'
	// 	},
	// })
	// .then(res => { console.log("result"+res) });

	// getToken.post('/jobs/' + id + '/reject');
	// console.log(getToken);
	// const getToken = axios.create({}).
	// .then(res => { 
	// 	console.log("success", res);
	// })
	// .catch(err => { 
	// 	console.log("error", err);
	// });
	// const getToken = () => {
	// 	// axios.get('https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc').then(res => { console.log(res)});
	// 	axios.post('https://www.indohub.co.id/api/TokenAuth/Authenticate',
	// 	{
	// 		"UserNameOrEmailAddress" : "bandunghubapi@api.com",
	// 		"Password" : "3}X,U8sbht=[#H",
	// 		"RememberClient" : "true"
	// 	},{
	// 		'Content-Type': 'application/json',
	// 		'Accept' : 'application/json'
	// 	})
	// 	.then(res => { 
	// 		console.log("success", res);
	// 	})
	// 	.catch(err => { 
	// 		console.log("error", err);
	// 	});
	// }
	// axios.post('https://www.indohub.co.id/api/TokenAuth/Authenticate', {
	// 	UserNameOrEmailAddress: 'bandunghubapi@api.com',
	// 	Password: '3}X,U8sbht=[#H',
	// 	RememberClient: 'true'
	//   },{
	// 	method: 'post',
	//   })
	//   .then(function (response) {
	// 	console.log(response);
	//   })
	//   .catch(function (error) {
	// 	console.log(error);
	//   });

	// const logggedIn = () => {
	// 	const config = {
	// 		headers: { Authorization: `Bearer ${token}` }
	// 	};

	// 	// const bodyParameters = {
	// 	//    key: "value"
	// 	// };

	// 	const bodyParameters = {

	// 	}
	// 	axios.post('http://localhost:4000/serverport/add', serverport)
	//     .then(res => console.log(res.data));
	// }
	const animatedComponents = makeAnimated();
	const cityOptions = [
		// { value: 'default', label: 'Pilih Kota' },
		{ value: 'Bandung', label: 'Bandung' },
		{ value: 'Tasik', label: 'Tasik' },
		{ value: 'Cimahi', label: 'Cimahi' },
		{ value: 'Bekasi', label: 'Bekasi' },
		{ value: 'Garut', label: 'Garut' },
		{ value: '', label: 'Super Admin' }
	];
	const someStyle = {
		input: styles => ({ ...styles, margin: '0px', paddingTop: '5%' }),
	};

	// const [selectedOption, setSelectedOption] = useState('');


	// const [isLoggedIn, setLoggedIn] = useState(false);
	// const [isError, setIsError] = useState(false);
	// const [email, setEmail] = useState("");
	// const [password, setPassword] = useState("");
	// const { setAuthTokens } = useAuth();
	// const referer = props.location.state.referer || '/admin';
	// console.log("INI WOY: " + props);
	// function postLogin(){
	// 	// let Bearer = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYmFuZHVuZ2h1YmFwaSIsIkFzcE5ldC5JZGVudGl0eS5TZWN1cml0eVN0YW1wIjoiNTFhYjA2ZjktZGVmNi1iYzQyLTExZDUtMzllZjU1YzYwNWU3IiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiQXBpIiwic3ViIjoiMiIsImp0aSI6ImY2NzY1NzQ0LTM4MDgtNDg2MS04Y2M0LTU1NDFlMzcxNGQ0MSIsImlhdCI6MTU4MDI5MTEyOSwibmJmIjoxNTgwMjkxMTI5LCJleHAiOjE1ODAzNzc1MjksImlzcyI6IkhVQiIsImF1ZCI6IkhVQiJ9.qAXSOOJMRZQQeZ7lhDb9NRz9IA0sOVbC1OkOjvm23eo";
	// 	// const config = {
	// 	// 	headers: { Authorization: `Bearer ${Bearer}` }
	// 	// };

	// 	// const bodyParameters = {
	// 	// 	usernameOrEmailAddress: email,
	// 	// 	PasswordL
	// 	// };
	// 	axios.get('https://jsonplaceholder.typicode.com/users').then(result => {
	// 		console.log(result);
	// 		if (result.status === 200) {
	// 			setAuthTokens(result.data);
	// 			setLoggedIn(true);
	// 			console.log("IF: ");
	// 		} else {
	// 			setIsError(true);
	// 			console.log("ELSE: ");
	// 		}
	// 	}).catch(e => {
	// 		setIsError(true);
	// 		console.log("CATCH: " + e);
	// 	});
	// }
	// if (isLoggedIn) {
	// 	return <Redirect to='/Admin' />;
	// }
	// useEffect( () => {
	// 	// Update the document title using the browser API
	// 	getToken();
	//   }, []);
	// alert(selectedOption.value);
	return (

		// <div className="container">
		// 	<div className="row">
		// 		<div className="col-md-6">
		// 			<form>
		// 				<div className="form-group">
		// 					<label htmlFor="email">Email address</label> 
		// 					<input value={email} onChange={e => {setEmail(e.target.value);} } type="text" className="form-control"/>
		// 				</div>
		// 				<div className="form-group">
		// 					<label htmlFor="password">Password</label>
		// 					<input value={password} onChange={e => {setPassword(e.target.value);} } type="password" className="form-control"/>
		// 				</div>
		// 				<button className="btn btn-success" onClick={postLogin}>Login</button>
		// 			</form>
		// 			{ isError && <p>The username or password provided were incorrect!</p> }
		// 		</div>
		// 		<div className="col-md-6">
		// 			<h1>This is right side col-md-6 bootstrap's styles.</h1>
		// 		</div>
		// 	</div>
		// </div>


		<div className="login-box">
			<div className="logo"><h4>logo goes here</h4></div>
			<div className="tenant-change-box " style={{ position: 'relative', zIndex: '100', marginTop: '5%', marginBottom: '10%' }}>
				{/* tenant-change-box */}
				<div className="card container-fluid" style={{ position: 'relative', zIndex: '100', marginTop: '10%' }} >
					{/* <div className="row"> */}
					{/* <div className="card"> */}
					{/* <h4 className="center">Pilih kota</h4> */}
					<br />
					<Select
						placeholder={<div>Pilih kota...</div>}
						options={cityOptions}
						closeMenuOnSelect={true}
						components={animatedComponents}
						// defaultValue={[cityOptions[0]]}
						// label="Pilih Kota"
						name="pilihKota"
						styles={someStyle}
						// value={ selectedOption }
						theme={theme => ({
							...theme,
							borderRadius: 0,
							colors: {
								...theme.colors,
								primary25: 'hotpink',
								primary: 'black',
							},
						})}
						isLoading={true}
					// onChange={e => this.onOptionChange(selectName.id,e)}
					// onChange={this.onChangeFunc}
					// onChange={ (selectedOption) => setSelectedOption(selectedOption) }
					//   isMulti
					/>
					<br />
					{/* </div> */}
					{/* </div> */}
				</div>
				{/* <Typeahead
					onChange={(selected) => {
						this.setState({selected});
					}}
					options={options}
					selected={this.state.selected}
				/> */}
				{/* <Typeahead
					onChange={(selected) => {
						this.setState({selected});
					}}
					options={[
						{id: 1, city: 'Bandung'},
						{id: 2, city: 'Tasik'},
						{id: 3, city: 'Majalaya'},
						{id: 4, city: 'Cimahi'},
						{id: 5, city: 'Garut'},
						{id: 6, city: 'Sukabumi'},
						{id: 7, city: 'Depok'},
					  ]}
				/> */}
			</div>
			<div className="card">
				<div className="body">
					<form id="LoginForm">
						<input type="hidden" name="returnUrl" value="" />
						<input type="hidden" name="returnUrlHash" />
						<h4 className="text-center">Login</h4>
						<div className="input-group">
							<span className="input-group-addon">
								<i className="material-icons">person</i>
							</span>
							<div className="form-line">
								<input type="text" className="form-control" name="usernameOrEmailAddress" placeholder="Username or email" required autoFocus />
							</div>
						</div>
						<div className="input-group">
							<span className="input-group-addon">
								<i className="material-icons">lock</i>
							</span>
							<div className="form-line">
								<input type="password" className="form-control" name="Password" placeholder="password" />
							</div>
						</div>
						<div className="row">
							<div className="col-xs-8 p-t-5">
								<input type="checkbox" name="RememberMe" id="rememberme" className="filled-in chk-col-pink" value="true" />
								<label htmlFor="rememberme">Remember Me</label>
							</div>
							<div className="col-xs-4">
								<button id="LoginButton" className="btn btn-block bg-pink waves-effect" type="submit">Login</button>
							</div>
						</div>
					</form>
				</div>
			</div>
			<div className="language-switch-area"><h4>i18n goes here</h4></div>
			<div className="row">
				<div className="col-xs-12 text-center">
					<small>© 2020 HUB. <b>Version </b> 3.11.1 [20191213]</small>
				</div>
			</div>
		</div>
	);
}

export default Login;
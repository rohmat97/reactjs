
import React, { useState, useEffect } from 'react';
import api, { create } from 'apisauce'
import $ from 'jquery';
// import LoginForm from '../../containers/LoginForm';

import axios from 'axios';
// import { useAuth } from "../../context/auth";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import { Redirect } from "react-router-dom";
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
	const connect = () => {
		let a = axios.get('http://localhost:4000/getToken').then(res => console.log(res));
		console.log(a);
	}
	// console.log(connect);
	// const a = axios.get('http://localhost:4000/getToken');
	// console.log(a);
	// fetch('localhost:4000/getToken')
	// .then(res => console.log(res))
	// .catch(console.log);
	// const result =  	// axios.get('localhost:4000/getToken')
    // .then(response => {
    //    console.log(response.data);
    // })
    //  .catch(function (error){
    //     console.log(error);	
	// };
	
	
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
	// useEffect(() => {
		
	// });
	return (
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
								<button onClick={connect} id="LoginButton" className="btn btn-block bg-pink waves-effect" type="submit">Login</button>
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
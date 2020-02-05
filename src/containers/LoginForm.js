import React from 'react';
// import { connect } from 'react-redux'
// import { getNews } from '../actions';
// import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

const LoginForm = (user) => (
	// <Form>
	// 			<Form.Group controlId="formBasicEmail">
	// 				<Form.Label>Email address</Form.Label>
	// 				<Form.Control type="email" placeholder="Enter email" />
	// 				<Form.Text className="text-muted">
	// 					We'll never share your email with anyone else.
	// 				</Form.Text>
	// 			</Form.Group>
	// 			<Form.Group controlId="formBasicPassword">
	// 				<Form.Label>Password</Form.Label>
	// 				<Form.Control type="password" placeholder="Password" />
	// 			</Form.Group>
	// 			<Form.Group controlId="formBasicCheckbox">
	// 				<Form.Check type="checkbox" label="Check me out" />
	// 			</Form.Group>
	// 			<Button variant="primary" type="submit">
	// 				Submit
	// 			</Button>
	// </Form>
	<div className="container">
		<div className="row">
			<div className="col-md-6">
				<form>
					<div className="form-group">
						<label htmlFor="email">Email address</label> 
						<input value={user.userName} onChange={e => {setUserName(e.target.value);} } type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
					</div>
					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input value={user.password} onChange={e => {setPassword(e.target.value);} }type="password" className="form-control"  id="password"/>
					</div>
					{/* <div className="form-group">
						<input type="checkbox" className="form-check-input"/>
						<label className="form-check-label"> Check me out</label>
					</div> */}
					{/* <Button >Sign In</Button> */}
					<button className="btn btn-success" onClick={postLogin}>Login</button>
				</form>
			</div>
			<div className="col-md-6">
				<h1>This is right side col-md-6 bootstrap's styles.</h1>
			</div>
		</div>
	</div>
);

export default LoginForm;

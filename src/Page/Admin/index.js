
import React from "react";
// import Charts from '../../containers/Charts';
// import Button from '../../containers/Button';
// import NewsItem from '../../containers/NewsItem';
// import Chart from '../../containers/Chart';

// import { Button } from "../components/AuthForms";
import { useAuth } from "../../context/auth"

//should not goin here, unless it is used to styling
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';
// import { Form, Button } from 'react-bootstrap';
//should not goin here
function Admin() {

  const { setAuthTokens } = useAuth();
  function logOut() {
    setAuthTokens();
  }
  return (
    <div className='col-md-12'>
      <div className='row'>
        <h1>ADMIN PAGE</h1><button onClick={logOut} className='btn btn-primary'>Logout</button>
        {/* <Chart /> */}
      </div>
    </div>
  );
}

export default Admin;
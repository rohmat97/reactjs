const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 4000;
const todoRoutes = express.Router();
const https = require('https');
// const result = '';

app.use(cors());
app.use(bodyParser.json());

app.get('/test', function(req, res){
    res.json('you did it!');
    // console.log("yeay");
});
app.get('/getToken', function(req, res){
    var request=require('request');
    var json = {
        "UserNameOrEmailAddress": "bandunghubapi@api.com",
        "Password": "3}X,U8sbht=[#H",
        "RememberClient": "true"
      };
    var options = {
        url: 'https://www.indohub.co.id/api/TokenAuth/Authenticate',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        json: json
    };
    var result = '';
    request(options, function(err, res, body) {
        if ( res && (res.statusCode === 200 || res.statusCode === 201) && !err) {
            result = res.body;
            console.log("request:");
            console.log(result);
           
        }else{
            console.log(err);
        }
    });
    res.send(result);
    // console.log("result:");
    // console.log(result);
    // res.send(Joblist);
});
// todoRoutes.route('/getToken').get(function(req, res) {
//     Todo.find(function(err, todos) {
//         if (err) {
//             console.log(err);
//         } else {
//             res.json(todos);
//         }
//     });
// });

// app.use('/api', todoRoutes);
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
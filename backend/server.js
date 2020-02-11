const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 4000;
const todoRoutes = express.Router();
const https = require('https');
const request = require('request')
// const result = '';

app.use(cors());
app.use(bodyParser.json());

app.get('/test', function(req, res){
    res.json('you did it!');
    // console.log("yeay");
});
app.get('/getToken', function(req, res){
    // var request=require('request');
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
    const responses = request(options, function(error, response, body) {
        if ( response && (response.statusCode === 200 || response.statusCode === 201) && !error) {
            result = response.body;
            console.log("\n==========GET TOKEN API==========\n");
            console.dir(result);
            res.send(result);
        }else{
            console.log(error);
        }
    }); 
});
// app.get('/getToken', function(req, res){
//     // var request=require('request');
//     var json = {
//         "UserNameOrEmailAddress": "bandunghubapi@api.com",
//         "Password": "3}X,U8sbht=[#H",
//         "RememberClient": "true"
//       };
//     var options = {
//         url: 'https://www.indohub.co.id/api/TokenAuth/Authenticate',
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Accept': 'application/json'
//         },
//         json: json
//     };
//     var result = '';
//     const responses = request(options, function(error, response, body) {
//         if ( response && (response.statusCode === 200 || response.statusCode === 201) && !error) {
//             result = response.body;
//             console.log("\n==========GET TOKEN API==========\n");
//             console.dir(result);
//             res.send(result);
//         }else{
//             console.log(error);
//         }
//     }); 
// });
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
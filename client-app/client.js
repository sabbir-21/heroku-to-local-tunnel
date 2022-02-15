var socketServerUrl = "https://yourapp.herokuapp.com"; //heroku app url
var hostToLive = "http://localhost:port"; //port to be used in server

var socket = require('socket.io-client')(socketServerUrl);
const superagent = require('superagent');
console.log("App Started"); //log after start

socket.on('connect',function(){
    console.log("Connected succesfully");
})
socket.on('disconnect',function(){
    console.log("Connection Lost");
})

socket.on('page-request',function(data){
    var path = data.pathname;
    var method = data.method;
    var params = data.params;

    var localhostUrl = hostToLive + path;

    if(method == "get")executeGet(localhostUrl,params);
    else if(method == "post")executePost(localhostUrl,params);
})

function executeGet(url, params) {
    superagent.get(url)
    .query(params)
    .end((err, response) => {
        if (err) { return console.log(err); }
        socket.emit('page-response', response.text);
    })
}
function executePost(url, params) {
    superagent.post(url)
    .query(params)
    .end((err, response) => {
        if (err) { return console.log(err); }
        socket.emit('page-response', response.text);
    })
}
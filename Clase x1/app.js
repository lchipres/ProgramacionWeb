var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

var response ={
    error:false,
    code:200,
    message:'ok'
}//json para respuesta

//regresa json
app.get('/', function(req,res){
    res.json(response);
});

//regresa un usuario
app.get('/user/:user',function(req,res){
    if(req.params.user>50){
        response.error=false;
        response.message='Found';
        response.code=200;
        res.json(response);

    }else{
        response.error=true;
        response.message='Not found';
        response.code=404;
    }
});

app.listen(port);
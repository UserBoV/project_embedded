var express=require('express');
var app=express();
var router=require('./main')(app);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static('public'));

 var server=app.listen(3000, '127.0.0.2',function(){
    console.log('Server running at http://127.0.0.2:3000/')
    app.use(express.static('public'));
}); 




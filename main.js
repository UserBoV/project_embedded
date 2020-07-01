module.exports=function(app){
    app.get('/user2.html',function(req,res){
        res.render('user2.html')
    });

    app.get('/money.html',function(req,res){
        res.render('money.html')
    });

    app.get('/',function(req,res){
        res.render('main_ex.html')
    });

    app.get('/main_ex.html',function(req,res){
        res.render('main_ex.html')
    });

    app.get('/manager.html',function(req,res){
        res.render('manager.html')
    });

    app.get('/manager_login.html',function(req,res){
        res.render('manager_login.html')
    });

    app.get('/manager_find.html',function(req,res){
        res.render('manager_find.html')
    });

    app.get('/user.html',function(req,res){
        res.render('user.html')
    });

    app.get('/user_login.html',function(req,res){
        res.render('user_login.html')
    });
}

/*

var fs=require('fs');
var http=require('http');

http.createServer(function(request,reponse){
    fs.readFile('main.html', function (error,data){
        reponse.writeHead(200, {'Content-Type':'text/html' });
        reponse.end(data);
    });
}).app.listen(3000,'127.0.0.2',function(){
    console.log("Server running at http://127.0.0.2:3000/");

}); */
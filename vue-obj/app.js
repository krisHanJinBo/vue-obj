var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');
var bodyParser = require('body-parser');
var cors=require('cors');
let mysql = require('mysql');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());
let arrKes=[];
for(var i=0;i<1000;i++){
  arrKes.push('key'+Math.random());
}
app.use(cookieSession({
  name:'sess_id',
  keys:arrKes,
  maxAge:1000*6000
}));

app.use(express.static(path.join(__dirname, 'public')));

//配置cors中间件
app.use(cors({
  "origin": ["http://localhost:8080"],  
  "credentials":true,
  // "origin":  ["http://example1.com", /\.example2\.com$/],
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE", //被允许的提交方式
  "allowedHeaders":['Content-Type','Authorization']//被允许的post方式的请求头
}));

let db = mysql.createPool({ //创建连接池(可以第一保持多个连接开通)
  host:'localhost',
  user:'root',
  password:'root',
  database:'user',
  port:3306
});

app.use('/prolist',require('./routes/prolist')(db));
app.use('/page',require('./routes/page')(db));
app.use('/home',require('./routes/home')(db));
app.use('/banner',require('./routes/banner')(db));
app.use('/login',require('./routes/login')(db));
app.use('/reg',require('./routes/reg')(db));
app.use('/user',require('./routes/user')(db));
app.use('/exit',require('./routes/exit')(db));
app.use('/jia',require('./routes/jia')(db));
app.use('/jian',require('./routes/jian')(db));
app.use('/car',require('./routes/car')(db));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;

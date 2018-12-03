var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mysql = require('mysql');
var SqlString = require('sqlstring');
var app = express();

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'zaq46',
  database: 'employees'
});

connection.connect(function (err) {
  if (err) throw err
  console.log('You are now connected...')
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/get30Rows', (req, res) => {

  connection.query('select * from employees limit 30', function (err, rows, fields) {
    if (err) throw err
    console.log('The solution is: ', rows)
    res.send({ rows: rows });
  })
});

app.get('/api/getTotalCount', (req, res) => {

  connection.query('select count(*) as totalCount from employees', function (err, c, fields) {
    if (err) throw err
    console.log('Total count: ', c[0].totalCount)
    res.send({ totalCount: c[0].totalCount });
  })
});

//employee = [emp_no: '000', birth_date: '00', first_name: 'Winnie', last_name: 'Australia', gender: 'M', hire_date: '000'];
app.get('/api/create', (req, res) => {

  var sql = SqlString.format('insert into employees set emp_no = ?,birth_date = ?,first_name = ?,last_name = ?,gender = ?,hire_date = ?'
    , [req.query.emp_no, req.query.birth_date, req.query.first_name, req.query.last_name, req.query.gender, req.query.hire_date])

  console.log(sql)

  connection.query(sql, function (err, result, fields) {
    if (err) throw err;
    console.log('Created', result);
    res.send({ result: result });
  })
});

//employee = [emp_no: '000', birth_date: '00', first_name: 'Winnie', last_name: 'Australia', gender: 'M', hire_date: '000'];
app.get('/api/update', (req, res) => {

  var sql = SqlString.format('update employees set birth_date = ?,first_name = ?,last_name = ?,gender = ?,hire_date = ? where emp_no = ?',
    [req.query.birth_date, req.query.first_name, req.query.last_name, req.query.gender, req.query.hire_date, req.query.emp_no])
  console.log(sql)
  connection.query(sql,
    req, function (err, result, fields) {
      if (err) throw err
      console.log(result, result)
    })
});

//delete with emp_no
app.get('/api/delete', (req, res) => {
  console.log("req is " + req.query.emp_no)
  connection.query('delete from employees where emp_no =' + req.query.emp_no, function (err, result, fields) {
    if (err) throw err;
    console.log('Deleted', result);
    res.send({ result: result });
  })
});

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next(createError(404));
});


module.exports = app;
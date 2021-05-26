var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
// var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var router = express.Router();
var colors =  require('colors');
var indexRouter = require("./indexRoutes");
var usersRouter = require("./users");


//initialize the app
// var app = express();

//connect to database
mongoose.connect('mongodb+srv://anshal123:atgenx123@albedo.fsemv.mongodb.net/Albedo?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).then( console.log(`DATABASE CONNECTED, SERVER IS UP AND RUNNING  `.cyan.underline.bold),
console.log(`WELCOME TO ALBEDO DEVELOPEMENT SERVER`.yellow.underline));

//initialize the app
var app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));


//import Routes
var indexRouter = require("./indexRoutes");
var usersRouter = require("./users");

// //connect to database
// mongoose.connect("mongodb://localhost:27017/albedo", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
// }).then((console.log(`DATABASE CONNECTED`)));


// app.use(cors());
//Cross origin resource sharing.
app.options('*', cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger("dev"));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// for parsing application/json
// app.use(express.json());
// for parsing application/xwww-
// app.use(bodyParser.urlencoded({ extended: true }));

//mount routes
app.use("/", indexRouter);
app.use("/users", usersRouter);

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error')
});

module.exports = app;

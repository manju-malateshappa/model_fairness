let express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    flash           = require("connect-flash"),
    PORT            = process.env.PORT || 3004,
    expressSanitizer = require("express-sanitizer");


app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(expressSanitizer());

// comment start

// youtube video to watch for hosting a heroku app

// https://www.google.com/search?client=safari&rls=en&q=how+to+host+a+website+using+heroku+app&ie=UTF-8&oe=UTF-8#kpvalbx=_nyaSXoKdILG70PEPr_S6sAQ36


// coomet end

//=========HomePage========
app.get("/",(req,res)=>{
    res.render("homepage");
});


//=========DashBoard============
app.get("/dashboards/1", (req,res) => {
    res.render("dashboards/dashboard1")
});

app.get("/dashboards/2", (req,res) => {
    res.render("dashboards/dashboard2")
});

app.get("/dashboards/3", (req,res) => {
    res.render("dashboards/dashboard3")
});

app.get("/dashboards/4", (req,res) => {
    res.render("dashboards/dashboard4")
});

app.get("/dashboards/5", (req,res) => {
    res.render("dashboards/dashboard5")
});

app.get("/dashboards/6", (req,res) => {
    res.render("dashboards/dashboard6")
});


//=================

app.listen(PORT, process.env.IP, function(){
   console.log(`The team Server has started! on ${PORT}`);
});
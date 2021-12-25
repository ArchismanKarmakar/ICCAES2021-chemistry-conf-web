const port = 3000;
const express = require("express");
const path = require("path");
const app = express();

// app.use(express.static(path.join(__dirname, "static")));
// app.use(express.static('public'))
// app.use(express.static('files'))
//THE DEFAULT FORMAT IS ==>> express.static(*root_dir/--serves-all-content, [*options/sub_dir/--serves-specified_dir-only]);

app.use(express.static(path.join(__dirname, "/src/"))); //THIS ALLOWS TO SEND THE FULL DIRECTORY SO ALL FILES CAN LOAD WITHOUT ERROR  //SERVING STATIC FILES
// app.use(express.static("public"));
app.use(express.static((__dirname)));


//ENDPOINTS
app.get('/', (req,res)=>{
    // res.sendFile((__dirname));


    // res.sendFile(path.join(__dirname,'index.html'));  //CAN ALSO USE THIS
    res.sendFile("/src/home.html");
});

app.get('/start', (req,res)=>{
    // res.sendFile((__dirname));


    // res.sendFile(path.join(__dirname,'index.html'));  //CAN ALSO USE THIS
    res.sendFile(path.join(__dirname,"/src/start.html"));
});

app.get('/preset', (req,res)=>{
    // res.sendFile('signup.html');
    res.sendFile(path.join(__dirname,'/src/The-Presentation.html'));
});

app.get('/about', (req,res)=>{
     // res.sendFile('signup.html');
     res.sendFile(path.join(__dirname,'/src/About.html'));
 });

app.listen((process.env.PORT || port), ()=>{
    console.log(`the server is listening at port ${port}`);

});

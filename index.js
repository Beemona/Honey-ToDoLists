import express from "express";
import bodyParser from "body-parser";
import { ExpressValidator } from "express-validator";



const app = express();
 
app.set("view engine", "ejs");
app.use(express.static('public')); 

const todos = [{
       
        todoTask: "Task 1",
    },
   
];

app.use(express.json());       
app.use(express.urlencoded({extended: true})); 


app.get("/", function (req, res) {
    res.render("index");
});
 


app.get("/casual", function (req, res) {
    res.render("casual.ejs", {
        data: todos,
    });
});



 
app.post("/casual", (req, res) => {
    const inputTodoTask = req.body.todoTask;
 
    todos.push({
        todoTask: inputTodoTask
    });
 
    res.render("casual.ejs", {
        data: todos,
    
    });
});
 
const todosW = [{
       
    todoTaskW: "Task Work",
},

];


app.get("/work", (req, res) => {
    res.render("work.ejs", {
        data: todosW,
    });
  });
  
  app.post("/work", (req, res) => {
    const inputTodoTaskW = req.body.todoTaskW;
 
    todosW.push({
        todoTaskW: inputTodoTaskW
    });
 
    res.render("work.ejs", {
        data: todosW,
    
    });
});

 
app.listen(3000, (req, res) => {
    console.log("App is running on port 3000");
});
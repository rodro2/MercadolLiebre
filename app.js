const express = require("express");

const app = express();

const path = require("path");

app.use(express.static("public"))

const port = process.env.PORT || 3030
app.listen(port, ()=> console.log("server corriendo"));


app.get("/", (req, res) => {
    res.sendFile(path.resolve("./views/index.html"));
});

app.get("/register", (req, res) => {
    res.sendFile(path.resolve("./views/register.html"));
});

app.get("/login", (req, res) => {
    res.sendFile(path.resolve("./views/login.html"));
});


//app.use("/static", express.static(__dirname + "/public"));//

/*boton formulario para volver a inicio
app.post("/login", (req,res)=>{
    res.redirect("/")
}) */
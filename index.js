const express = require("express");
const app = express();

app.use(express.static("./dist/pagina_iglesia"));

app.get("/",(req,res)=>{
    res.sendFile("index.html",{root: "dist/pagina_iglesia"})
});

app.listen(process.env.PORT|| 3050, ()=>{
    console.log("server angular listening on " + process.env.PORT);
});
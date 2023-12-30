const express = require("express");
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'dist/pagina_iglesia')));

app.get("/",(req,res)=>{
    res.sendFile("index.html",{root: "dist/pagina_iglesia"})
});

const PORT = process.env.PORT || 3050;
app.listen(PORT, () => {
    console.log("Servidor Angular escuchando en el puerto " + PORT);
});
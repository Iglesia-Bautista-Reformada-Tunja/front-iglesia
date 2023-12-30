const express = require("express");
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'dist/pagina_iglesia')));

app.get("/", (req, res) => {
    res.sendFile("index.html", { root: path.join(__dirname, "dist/pagina_iglesia") });
});


app.listen(process.env.PORT || 3050, () => {
    console.log("server angular listening on " + process.env.PORT);
});

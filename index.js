const express = require("express");
const app = express();

//middleware objeto json
app.use(express.json());

//middleware en solicitud post
/*  CODIGO  
app.use((req, res, next) => {
  if (req.method === "post" && req.is("applicatiion/json")) {
    next();
  } else {
    res.status(400).send("bad request");
  }
});
*/
// definir ruta post
app.post("/enviardatos", (req, res) => {
  console.log(req.body);
  res.send("datos recibidos");
  res.end();
});

app.listen(8000, () => {
  console.log("servidor iniciando en el puerto 3000");
});

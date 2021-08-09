const express = require("express");
const bodyparser = require("body-parser");
const morgan = require("morgan");


const app = express();
const port = 3000;


app.use(morgan('dev'));
app.use(bodyparser.json());
app.use(require("./routes/routes"));

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

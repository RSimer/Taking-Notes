const express = require('express');
const apiRoute = require('./public/assets/js/routes/apiRoute');
const htmlRoute = require('./public/assets/js/routes/htmlRoute');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static('public'));

app.use("/",htmlRoute);
app.use("/api",apiRoute);




app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
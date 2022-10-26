require('dotenv').config();
const express = require("express");
const path = require("path");
const docs = require("./routes/doc.route.js");

// Import body parser, you should read about this on their git to understand it fully
const parser = require('body-parser');
const urlencodedParser = parser.urlencoded({extended : false});

const PORT = process.env.PORT || 1337;
const app = express();


// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// before your routes
app.use(parser .json());
app.use(urlencodedParser); // This will parse you// before your routes


app.get("/api", (req, res) => {
  const message = [
    {
      1: "Hello my friend, from the server"
    },
    {
      2: "Have a nice day"
    }
  ]
  res.json({ data: message });
});

app.use("/document", docs);

app.use((req, res, next) => {
  const err = new CustomError(404, "Not Found");
  next(err);
});

app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  res.status(err.status || 500).json({
    "errors": [
      {
        "status": err.status,
        "title": err.message,
        "detail": err.message
      }
    ]
  });
});

const server = app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

module.exports = server;
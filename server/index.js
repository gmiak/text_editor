require('dotenv').config();
const express = require("express");
const path = require("path");
const docs = require("./routes/doc.route.js");

const PORT = process.env.PORT || 1337;
const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));


app.get("/api", (req, res) => {
  res.json({ message: "Hello from server, my friend!" });
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

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});
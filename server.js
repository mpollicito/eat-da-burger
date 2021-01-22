const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
// Start the server on the port
app.listen(PORT, () => console.log('Listening on localhost:' + PORT));
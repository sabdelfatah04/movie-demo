const express = require("express");
require("./db/mongoose"); //this ensures mongoos runs and connect to our database
const app = express();
app.listen(3000, () => {
    console.log("Server up on 3000");
});

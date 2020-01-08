const express = require("express");
require("./db/mongoose"); //this ensures mongoos runs and connect to our database
const app = express();
const movieRouter = require("./routers/movies");
app.use(express.json());
app.use(movieRouter);
app.listen(3000, () => {
    console.log("Server up on 3000");
});

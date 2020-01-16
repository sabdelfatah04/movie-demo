const express = require("express");
require("./db/mongoose"); //this ensures mongoos runs and connect to our database
const app = express();
const movieRouter = require("./routers/movies");
const userRouter = require("./routers/users");
app.use(express.json());
app.use(movieRouter);
app.use(userRouter);

app.listen(3000, () => {
    console.log("Server up on 3000");
});



//bcrypt hashing will occur as middlewar durign requests
/* 
const bcyrpt = require("bcryptjs");
const testFunction = async ()=> {
    const password = "siths1234";
    const hashedPassword = await bcyrpt.hash(password, 8);
    console.log(password);
    console.log(hashedPassword);

    const isMatch = await bcyrpt.compare("obeysudo", hashedPassword);
    console.log(isMatch)
};
testFunction(); */

/* const jwt = require("jsonwebtoken");

const testFunction = async () =>{
    const token = jwt.sign({ _id:"5e208ca3f5cd8b1ee47b36d4"}, "sabdelfatah", {
        expiresIn: "7 days"
    });
    console.log(token);
    const data = jwt.verify(token, "sabdelfatah");
    console.log(data);
};
testFunction(); */


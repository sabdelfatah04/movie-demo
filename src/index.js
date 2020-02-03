const express = require("express");
require("./db/mongoose"); //this ensures mongoos runs and connect to our database
const app = express();
const movieRouter = require("./routers/movies");
const userRouter = require("./routers/users");
const reviewRouter = require("./routers/reviews");
app.use(express.json());
app.use(movieRouter);
app.use(userRouter);
app.use(reviewRouter);

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
const Review = require("./models/review");
const User = require("./models/user");

/* const test = async () => {
    const review = await Review.findById("5e3306a54b45a429a80d838a");
    await review.populate("owner").execPopulate();
    console.log(review.owner);
};
test();
 */
/* const main = async () => {
    const user = await User.findById("5e30633733840317d4bdf2c7");
    await user.populate("reviews").execPopulate();
    console.log(user.reviews);
};
main();
 */
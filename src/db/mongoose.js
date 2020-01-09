const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://sarah:sarah1234@cluster0-68jup.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true
});
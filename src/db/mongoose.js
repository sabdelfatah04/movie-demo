const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://sarah:242374791@cluster0-68jup.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true
});
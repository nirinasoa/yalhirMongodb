const express = require("express");
const basicAuth = require('express-basic-auth');
const mongoose = require("mongoose");
const foodRouter = require("./routes/foodRoutes.js");
const artistRouter = require("./routes/artistRoutes.js");
const songRouter = require("./routes/songRoutes.js");
const userRouter = require("./routes/userRoutes.js");
const aboutRouter = require("./routes/aboutRoutes.js");
var cors = require('cors');

const app = express();
app.use(cors());
// const port = process.env.PORT || 3000;
const port = process.env.PORT || 5000;

app.use(express.json());
/*app.use(basicAuth({
  users: { admin: 'yalhirapp001' },
  challenge: true
}));*/
mongoose.connect(
  "mongodb+srv://yael:100038686a@cluster0.ovfgv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex:true
  }
);

app.use(foodRouter);
app.use(artistRouter);
app.use(songRouter);
app.use(userRouter);
app.use(aboutRouter);

app.listen(port, () => {
  console.log("Server is running...");
});

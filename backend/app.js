const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoURI = 'mongodb://localhost:27017/users';
const app = express();
const userRoute = require('./routes/userRoute');
const addProductRoute = require('./routes/addNewProductRoute')
app.use(cors());
app.use(bodyParser.json());
require('./models/dbModels');
app.use(userRoute);
app.use(addProductRoute);
app.use("/uploads", express.static("uploads"));
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

const port = 3001;
app.listen(port, () => console.log(`Server listening on port ${port}`))
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoURI = 'mongodb://localhost:27017/users';
const app = express();
const userRoute = require('./routes/userRoute');
app.use(cors());
app.use(bodyParser.json());
require('./models/User');
app.use(userRoute);
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

const port = 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`))
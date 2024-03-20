const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const mongoURI = 'mongodb://localhost:27017/users';
const app = express();
app.use(cors());
app.use(bodyParser.json());

const userSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
})

const User = mongoose.model('User', userSchema);

app.post('/register', async (req, res) => {
    const { firstname,lastname ,  email, password } = req.body; 
    try {
        const newUser = new User({
            firstname,
            lastname,
            email,
            password
        });

        await newUser.save();

        res.status(201).json({ message: 'User created successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

const port = 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`))
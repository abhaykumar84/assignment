const express = require('express'); // Loading express js module in ram.
const app = express(); // we are creating a express application
const port = 3000; // this is the port we are going to use for run our server

app.use(require('cors')()); // this is for allowing cross origin requests

const mongoose = require('mongoose'); 
const { User } = require('./schema');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connecting to the database
(async () => {
    try {
        // Connecting to the database
        mongoose.connect('mongodb+srv://frenzycoder:pTB0pqiOHMGUUkd4@cluster0.vcwpx.mongodb.net/abhay?retryWrites=true&w=majority'/* Mongodb Url */, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
            // If the connection is successful
            console.log('Connected to MongoDB');
        }).catch((e) => {
            // If the connection is unsuccessful
            console.log('Error connecting to MongoDB');
        });
    } catch (err) {
        // If the connection is unsuccessful
        console.log('Error connecting to MongoDB', err);
    }
})();


app.post('/register', async (req, res) => {
    try {
        // This api requires the following fields in the request body {name, username, email, password}
        // Creating a new user
        let user = await User.create(req.body);
        // Sending the response
        res.status(201).send(user);

    } catch (error) {
        // Sending the error
        res.status(500).send(error);
    }
})

app.post('/login', async (req, res) => {
    try {
        // This api requires the following fields in the request body {username, password}
        let { username, password } = req.body;
        // Finding the user with the given username
        let user = await User.findOne({ username: username, password: password });
        if (user) {
            // If the user is found
            res.status(200).send(user);
        }
        else {
            // If the user is not found
            res.status(404).send('User not found');
        }

    } catch (error) {
        // Sending the error
        res.status(500).send(error);
    }
});





// Listening to the port
app.listen(port, () => {
    // If the server is running successfully
    console.log('server is up and running on port numner ' + port);
})
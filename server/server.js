const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const cors = require('cors');
const db = require('./config/connection');

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




// listen on port 3001
// db connection
db.once('open', () => {
    console.log('Connected to MongoDB!');
app.listen(port, () => console.log(`🌍 Now listening on localhost:${port}`));
});
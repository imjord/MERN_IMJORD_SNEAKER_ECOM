const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const cors = require('cors');
const db = require('./config/connection');

// import routes
const ProductRoutes = require('./routes/ProductRoutes');

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api", ProductRoutes);

// listen on port 3001
// db connection
db.once('open', () => {
    console.log('Connected to MongoDB!');
app.listen(port, () => console.log(`🌍 Now listening on localhost:${port}`));
});
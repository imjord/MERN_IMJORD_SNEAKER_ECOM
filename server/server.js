const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const cors = require('cors');
const db = require('./config/connection');
const publickey = process.env.PUBLIC_KEY;
const payment = require('./routes/Payment');

if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}




// import routes
const ProductRoutes = require('./routes/ProductRoutes');

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api", ProductRoutes);
app.use("/api", payment);
app.use(express.static(path.join(__dirname, '../client/build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
}

);
// listen on port 3001
// db connection
db.once('open', () => {
    console.log('Connected to MongoDB!');
app.listen(port, () => console.log(`🌍 Now listening on localhost:${port}`));
});
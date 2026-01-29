const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth.routes');
const expenceRoutes = require('./routes/expence.routes');   

app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api/auth', authRoutes);
app.use('/api', expenceRoutes); // Changed from '/api/expenses' to '/api'

module.exports = app;
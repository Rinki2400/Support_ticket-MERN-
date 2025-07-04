const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userAuthRoutes = require('./routes/userAuth');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

connectDB();
app.use(cors());
app.use(express.json());
app.use('/api', userAuthRoutes);


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
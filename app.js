const express = require('express');
const bodyParser = require('body-parser');
const calorieRoutes = require('./calorieRoutes');
const cors = require('cors');
const app = express();

// Middleware
app.use(bodyParser.json());
app.get( '/', (req, res) => {
    res.send("Welcome to the Calorie Tracker API");
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: 'http://localhost:5173',credentials:true})); // allow all
// Routes
app.use('/api/calories', calorieRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

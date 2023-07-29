// const express = require('express');
// const connectDB = require('./config/connection');
// const apiRoutes = require('./routes/api');

// const app = express();
// const PORT = 3000;

// // Connect to the database
// connectDB();

// // Middleware
// app.use(express.json());

// // API routes
// app.use('/api', apiRoutes);

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
require("dotenv").config();

// Access environment variables
const PORT = process.env.API_PORT;
const MONGODB_URI = process.env.MONGODB_URI;

module.exports = { PORT, MONGODB_URI };

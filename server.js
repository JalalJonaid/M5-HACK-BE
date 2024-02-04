const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();
const API_KEY = process.env.API_KEY;
const PORT = process.env.PORT || 4321;
const BASE_API_URL = process.env.BASE_API_URL;
app.listen(PORT, () => {
    console.log(`Server launched and listening on port ${PORT}.`)
})

app.use(express.json());
app.use(cors());

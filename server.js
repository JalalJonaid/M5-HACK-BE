const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();
const API_KEY = process.env.API_KEY;
const PORT = process.env.PORT;
const BASE_API_URL = process.env.BASE_API_URL;

app.use(express.json());
app.use(cors());

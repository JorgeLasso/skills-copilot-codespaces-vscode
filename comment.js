//create web server
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');

//connect to database
const db = require('./db');
const { Comment } = db.models;
const { Article } = db.models;

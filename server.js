const http = require('http');
const app = require('./app');
const { connectToDb, createUserSchema, createUserDocument, saveUsertoDb } = require('./db');

const port = process.env.PORT || 3000;
connectToDb();
const server = http.createServer(app);
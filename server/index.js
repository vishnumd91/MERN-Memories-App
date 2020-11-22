// For using import in node, we need to integrate babel packages with node.
// Visit https://medium.com/@pativancarrasco/why-your-es6-syntax-doesnt-work-in-node-js-and-how-to-fix-it-161f0708f1ad

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import postRoutes from './routes/posts.js';

// const express = require('express');

// const cors = require('cors');

// const bodyParser = require('body-parser');

// const mongoose = require('mongoose');

const app = express();

const PORT = process.env.PORT || 5000;

const CONNECTION_URL = 'mongodb+srv://vishnu:vishnu@cluster0.uo9sf.mongodb.net/<dbname>?retryWrites=true&w=majority'

app.use(cors());

app.use(express.json());

// limit condition will be applied mostly in case of image uploads with bigger size
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

app.use('/posts', postRoutes);


mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(app.listen(PORT, () => console.log('Server Running Successfully on PORT:' + PORT)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);

mongoose.connection.once('open', () => {
    console.log('MongoDB Connected Succesfully');
})
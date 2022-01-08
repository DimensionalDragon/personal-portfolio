const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const port = process.env.PORT || 5000;
const {DB_URI} = process.env;

mongoose.connect(DB_URI);
const db = mongoose.connection;
db.on('error', (err) => console.error('[Error]', err));
db.once('open', () => console.log('Connected to database'));

const Project = require('../models/project');

app.use(cors());
app.use(express.static('public'))
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
    try {
        const projects = await Project.find().sort({ _id: -1 }).limit(6);
        res.render('index', {pageTitle: 'DimensionalDragon', projects});
    } catch(err) {
        return res.status(500).json({ok: false, message: err.message});
    }
});

app.get('/projects', (req, res) => {
    res.send('<h1>Projects Page</h1>');
});

app.listen(port, () => console.log(`Server started at port ${port}`));
require('./routes')
const { restoreSessions } = require('./sessions')
const { routes } = require('./routes')
const express = require('express')
const cors = require('cors');
const app = express()
const bodyParser = require('body-parser')
const { maxAttachmentSize } = require('./config')


// Initialize Express app

app.use(cors({
    origin: '*',  // Permite todas as origens
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
}))
app.disable('x-powered-by')

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});

app.use(bodyParser.json({ limit: maxAttachmentSize + 1000000 }))
app.use(bodyParser.urlencoded({ limit: maxAttachmentSize + 1000000, extended: true }))
app.use('/', routes)


restoreSessions()

module.exports = app

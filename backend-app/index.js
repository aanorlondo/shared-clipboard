const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
const { MongoClient } = require('mongodb');

const app = express();
const port = process.env.PORT || 8080;
const route = process.env.BACKEND_ROUTE || 'clipboards';
const endpoint = `/${route}`

// Middleware
app.use(bodyParser.text());

// Database name
const dbName = 'clipboards';

// MongoDB credentials
const username = process.env.MONGO_USERNAME || '';
const password = process.env.MONGO_PASSWORD || '';

// MongoDB Connection URL
const mongoUrl = process.env.MONGO_URL || 'clipboard-mongodb';

// MongoDB Host name
const mongoHost = `mongodb://${username}:${password}@${mongoUrl}`

// MongoDB authentication options
let mongoClientOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

// Save clipboard entry to MongoDB
app.post(endpoint, (req, res) => {
    const content = req.body;
    const entry = {
        id: uuidv4(),
        content,
        timestamp: new Date().toISOString()
    };

    MongoClient.connect(mongoHost, mongoClientOptions, (err, client) => {
        if (err) {
            console.error('Error connecting to MongoDB:', err);
            res.status(500).send('Internal Server Error');
            return;
        }

        const db = client.db(dbName);
        const collection = db.collection('entries');

        collection.insertOne(entry, (err) => {
            if (err) {
                console.error('Error saving entry to MongoDB:', err);
                res.status(500).send('Internal Server Error');
                return;
            }

            res.status(201).send('Entry saved successfully');
        });

        client.close();
    });
});

// Retrieve all clipboard entries from MongoDB
app.get(endpoint, (req, res) => {
    MongoClient.connect(mongoHost, mongoClientOptions, (err, client) => {
        if (err) {
            console.error('Error connecting to MongoDB:', err);
            res.status(500).send('Internal Server Error');
            return;
        }

        const db = client.db(dbName);
        const collection = db.collection('entries');

        collection.find({}).toArray((err, entries) => {
            if (err) {
                console.error('Error retrieving entries from MongoDB:', err);
                res.status(500).send('Internal Server Error');
                return;
            }

            res.json(entries);
        });

        client.close();
    });
});

app.listen(port, () => {
    console.log(`Backend app listening at http://localhost:${port}`);
});
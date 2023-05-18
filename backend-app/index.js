const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const app = express();
const port = process.env.BACKEND_PORT || 8080;
const route = process.env.BACKEND_ROUTE || 'clipboards';
const dbName = process.env.MONGO_DB_NAME || "clipboards"
const mongo_collection = process.env.MONGO_COLLECTION_NAME || 'entries'
const endpoint = `/${route}`

// Middleware
app.use(bodyParser.text());


// Enable CORS
app.use(cors())

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
    console.log(`Received POST Request: ${JSON.stringify(content)}`)
    console.log(`Connecting to Mongo host on: ${mongoHost}`)
    MongoClient.connect(mongoHost, mongoClientOptions, (err, client) => {
        if (err) {
            console.error('Error connecting to MongoDB:', err);
            res.status(500).send('Internal Server Error');
            return;
        }

        console.log(`Connecting to Mongo host on: SUCCESS`)
        const db = client.db(dbName);
        const collection = db.collection(mongo_collection);

        console.log(`Inserting element to DB...`)
        collection.insertOne(entry, (err) => {
            if (err) {
                console.error('Error saving entry to MongoDB:', err);
                res.status(500).send('Internal Server Error');
                return;
            }

            res.status(201).send(`Entry: ${entry} saved successfully`);
        });

        client.close();
    });
});

// Retrieve all clipboard entries from MongoDB
app.get(endpoint, (req, res) => {
    console.log(`Fetching entries with GET request: ${JSON.stringify(req.content)}...`)
    console.log(`Connecting to Mongo host on: ${mongoHost}`)
    MongoClient.connect(mongoHost, mongoClientOptions, (err, client) => {
        if (err) {
            console.error('Error connecting to MongoDB:', err);
            res.status(500).send('Internal Server Error');
            return;
        }

        console.log(`Connecting to Mongo host on: SUCCESS`)
        const db = client.db(dbName);
        const collection = db.collection(mongo_collection);

        console.log(`Reading elements from DB...`)
        collection.find({}).toArray((err, entries) => {
            if (err) {
                console.error('Error retrieving entries from MongoDB:', err);
                res.status(500).send('Internal Server Error');
                return;
            }

            console.log(`Retrieved entries from DB: ${entries}`)
            res.json(entries);
        });

        client.close();
    });
});

app.listen(port, () => {
    console.log(`Backend app listening at http://localhost:${port}`);
});
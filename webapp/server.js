const { MongoClient } = require('mongodb');
const { v4: uuidv4 } = require('uuid');
const express = require('express');
const axios = require('axios')
const https = require('https')
const cors = require('cors');
const path = require('path');
const app = express();

// Middleware
app.use(express.json())

// Enable CORS
app.use(cors())

// Serve front
app.use(express.static(path.join(__dirname, 'dist')));

// Axios and HTTPS (bypass self-signed SSL cert)
const agent = new https.Agent({ rejectUnauthorized: false });
const axiosInstance = axios.create({
    httpsAgent: agent
});

// Backend env vars
const port = process.env.BACKEND_PORT;
const route = process.env.BACKEND_ROUTE;
const endpoint = `/${route}`;

// Auth server env vars
const authServer = process.env.AUTH_SERVER;
const checkUserRoute = `${authServer}/user/check`

// Mongo env vars
const mongoUrl = process.env.MONGO_URL;
const dbName = process.env.MONGO_DB_NAME;
let username = process.env.MONGO_USERNAME;
let password = process.env.MONGO_PASSWORD;

// remove extra chars after decoding creds
username = username.includes('-n ') ? username.replace('-n ', '') : username
password = password.includes('-n ') ? password.replace('-n ', '') : password

const mongo_collection = process.env.MONGO_COLLECTION_NAME;
let mongoHost = `mongodb://${username}:${password}@${mongoUrl}/${dbName}`

// remove line breaks
mongoHost = mongoHost.replace(/\r?\n|\r/g, '')

// MongoDB authentication options
let mongoClientOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

// Serve static files for the "/" route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Save clipboard entry to MongoDB
app.post(endpoint, (req, res) => {
    const content = req.body;
    const entry = {
        id: uuidv4(),
        content,
        timestamp: new Date().toISOString()
    };
    console.log(`Received POST Request: ${JSON.stringify(entry)}`)
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
            client.close();
        });

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
        collection.find({}).sort({ timestamp: -1 }).toArray((err, entries) => {
            if (err) {
                console.error('Error retrieving entries from MongoDB:', err);
                res.status(500).send('Internal Server Error');
                return;
            }

            console.log(`Retrieved entries from DB: ${entries.values}`)
            res.json(entries);
            client.close();
        });

    });
});

// Clear entries from MongoDB
app.delete(endpoint, async (req, res) => {
    console.log('Verifying caller privileges to perform DELETE actions...');
    try {
        const response = await axiosInstance.get(checkUserRoute, {
            headers: {
                Authorization: req.headers.authorization, // Pass the JWT token in the header
            },
        });
        if (response.status === 200) {
            // User has the required privileges, proceed with the deletion
            console.log('User has the required privileges');
        }
        else {
            throw Error('User does not have the required privileges')
        }
    } catch (error) {
        // User does not have the required privileges, send an error response
        console.log('User does not have the required privileges');
        res.status(403).send('Forbidden');
        return;
    }

    console.log('Clearing entries...');
    console.log(`Connecting to Mongo host on: ${mongoHost}`);
    MongoClient.connect(mongoHost, mongoClientOptions, (err, client) => {
        if (err) {
            console.error('Error connecting to MongoDB:', err);
            res.status(500).send('Internal Server Error');
            return;
        }

        console.log(`Connecting to Mongo host on: SUCCESS`);
        const db = client.db(dbName);
        const collection = db.collection(mongo_collection);

        if (Object.keys(req.body).length === 0) {
            // Delete all entries
            console.log(`Removing all entries from DB...`);
            collection.deleteMany({}, (err) => {
                if (err) {
                    console.error('Error clearing entries in MongoDB:', err);
                    res.status(500).send('Internal Server Error');
                    return;
                }

                res.status(204).send('All entries cleared successfully');
                client.close();
            });
        } else {
            // Delete a specific entry based on ID
            const { id } = req.body;
            console.log(`Removing entry with ID ${id} from DB...`);
            collection.deleteOne({ id }, (err) => {
                if (err) {
                    console.error('Error deleting entry in MongoDB:', err);
                    res.status(500).send('Internal Server Error');
                    return;
                }

                res.status(200).send(`Entry with ID ${id} deleted successfully`);
                client.close();
            });
        }
    });
});

app.listen(port, () => {
    console.log(`Backend app listening on port: ${port}`);
    console.log(`MongoDB endpoint: ${mongoUrl}`)
});
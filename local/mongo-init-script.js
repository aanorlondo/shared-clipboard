// Switch to the working database
db = db.getSiblingDB(process.env.MONGO_INITDB_DATABASE);

// Create a new user with root privileges
db.createUser({
    user: process.env.MONGO_INITDB_ROOT_USERNAME,
    pwd: process.env.MONGO_INITDB_ROOT_PASSWORD,
    roles: [{
        role: 'readWrite',
        db: process.env.MONGO_INITDB_DATABASE
    }]
});

// Create base collection
db.createCollection(process.env.MONGO_COLLECTION_NAME);
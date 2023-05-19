// Switch to the working database
print(`Creating database: ${process.env.MONGO_INITDB_DATABASE}`);
db = db.getSiblingDB(process.env.MONGO_INITDB_DATABASE);
print('DONE.');

// Create a new user with root privileges
let mongouser = process.env.MONGO_INITDB_ROOT_USERNAME
mongouser = mongouser.includes('-n ') ? mongouser.replace('-n ', '') : mongouser
let mongopassword = process.env.MONGO_INITDB_ROOT_PASSWORD
mongopassword = mongopassword.includes('-n ') ? mongopassword.replace('-n ', '') : mongopassword

print(`Creating 'readWrite' role and user: ${mongouser}`);
db.createUser({
    user: mongouser,
    pwd: mongopassword,
    roles: [{
        role: 'readWrite',
        db: process.env.MONGO_INITDB_DATABASE
    }]
});
print('DONE.')

// Create base collection
print(`Creating collection: ${process.env.MONGO_COLLECTION_NAME}`);
db.createCollection(process.env.MONGO_COLLECTION_NAME);
print('DONE.')
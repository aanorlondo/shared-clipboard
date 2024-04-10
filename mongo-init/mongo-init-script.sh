set -e

echo "######################## START INIT SCRIPT ###########################"

echo "-- Creating database: $MONGO_INITDB_DATABASE"
mongo <<EOF
use $MONGO_INITDB_DATABASE
EOF
echo "DONE."

echo "-- Creating 'readWrite' role and user: $MONGO_INITDB_ROOT_USERNAME"
mongo <<EOF
use $MONGO_INITDB_DATABASE
db.createUser({
  user: '$MONGO_INITDB_ROOT_USERNAME',
  pwd:  '$MONGO_INITDB_ROOT_PASSWORD',
  roles: ['readWrite']
})
EOF
echo "DONE."

echo "-- Creating collection: $MONGO_COLLECTION_NAME"
mongo <<EOF
use $MONGO_INITDB_DATABASE
db.createCollection('$MONGO_COLLECTION_NAME')
EOF
echo "DONE."

echo "######################## END INIT SCRIPT ###########################"
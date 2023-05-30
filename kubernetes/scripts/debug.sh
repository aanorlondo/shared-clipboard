

# SSH into container
kubectl exec --stdin --tty clipboard-mongodb-deployment-<ADAPT> -- /bin/bash 


# run mongosh
mongosh


# change db
use <DB_NAME>

# list users
db.getUsers();


# login with privileges
mongosh --host localhost --port 27017 --authenticationDatabase clipboards -u username -p
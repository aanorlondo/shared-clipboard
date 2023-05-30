#!/bin/bash


# teardown deployments and services
kubectl delete deployment clipboard-webapp-deployment 
kubectl delete deployment clipboard-mongodb-deployment
kubectl delete service clipboard-webapp-service 
kubectl delete service clipboard-mongodb-service

# restart deployments and services
kubectl apply -f ../services/clipboard-mongodb.yaml
kubectl apply -f ../services/clipboard-webapp.yaml
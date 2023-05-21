#!/bin/bash

kubectl delete configmap clipboard-external-config
kubectl delete secret clipboard-secrets
kubectl delete deployment clipboard-webapp-deployment 
kubectl delete deployment clipboard-mongodb-deployment
kubectl delete service clipboard-webapp-service 
kubectl delete service clipboard-mongodb-service

#!/bin/bash

kubectl delete configmap clipboard-external-config
kubectl delete secret clipboard-secrets
kubectl delete deployment clipboard-app-deployment 
kubectl delete deployment clipboard-gui-deployment
kubectl delete deployment clipboard-mongodb-deployment
kubectl delete service clipboard-app-service 
kubectl delete service clipboard-gui-service
kubectl delete service clipboard-mongodb-service

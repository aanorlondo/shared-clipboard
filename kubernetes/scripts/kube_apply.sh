#!/bin/bash

# Apply Kubernetes configurations
kubectl apply -f ../volumes/mongodb-pvc.yaml
kubectl apply -f ../external-configs/clipboard-external-config.yaml
kubectl apply -f ../secrets/clipboard-secrets.yaml
kubectl apply -f ../services/clipboard-mongodb.yaml
kubectl apply -f ../services/clipboard-webapp.yaml

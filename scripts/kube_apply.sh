#!/bin/bash

# Apply Kubernetes configurations
kubectl apply -f ../kubernetes/external-configs/clipboard-external-config.yaml
kubectl apply -f ../kubernetes//secrets/clipboard-secrets.yaml
kubectl apply -f ../kubernetes//services/clipboard-mongodb.yaml
kubectl apply -f ../kubernetes//services/clipboard-app.yaml
kubectl apply -f ../kubernetes//services/clipboard-gui.yaml

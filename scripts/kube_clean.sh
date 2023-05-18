#!/bin/bash

kubectl delete configmap clipboard-external-config
kubectl delete secret clipboard-secrets
kubectl delete deployment --all
kubectl delete service --all
# Node.js App Deployment on Kubernetes with Minikube

This project demonstrates how to deploy a simple Node.js application on a Kubernetes cluster using **Minikube**.  
It includes a **Deployment** and a **NodePort Service** to expose the application.

---

## Project Structure

- `deployment.yaml` — Kubernetes Deployment file for the Node.js app.
- `service.yaml` — Kubernetes NodePort Service to expose the app.

---

## Prerequisites

- [Docker]
- [Minikube]
- [kubectl]
- Docker Hub account (for pushing images) or use Minikube image load.

---

## Steps to Deploy

### 1. Build and Push the Docker Image

```bash
docker build -t vivek512/nodeapp:latest .
docker push vivek512/nodeapp:latest


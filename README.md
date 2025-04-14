# Node.js App Deployment on Kubernetes with Minikube

This project demonstrates how to deploy a simple Node.js application on a Kubernetes cluster using **Minikube**.  
It includes a **Deployment** and a **NodePort Service** to expose the application.

---

## Project Structure

- `deployment.yaml` — Kubernetes Deployment file for the Node.js app.
- `service.yaml` — Kubernetes NodePort Service to expose the app.

---

## Prerequisites

- [Docker](https://www.docker.com/)
- [Minikube](https://minikube.sigs.k8s.io/docs/)
- [kubectl](https://kubernetes.io/docs/tasks/tools/)
- Docker Hub account (for pushing images) or use Minikube image load.

---

## Steps to Deploy

### 1. Build and Push the Docker Image

```bash
docker build -t vivek512/nodeapp:latest .
docker push vivek512/nodeapp:latest
```

> **Note**: If you want to use the local image without pushing to Docker Hub:
> 
> ```bash
> minikube image load vivek512/nodeapp:latest
> ```

---

### 2. Create Kubernetes Resources

```bash
cd k8s
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
```

Check all created resources:

```bash
kubectl get all
```

---

### 3. Access the Application

Find the Minikube IP:

```bash
minikube ip
```

Access the app in your browser:

```
http://<minikube-ip>:30080
```

Example:

```
http://192.168.49.2:30080
```

Or directly open the service:

```bash
minikube service nodeapp-service
```

---

## Useful Commands

- Get all Kubernetes resources:

  ```bash
  kubectl get all
  ```

- Describe a specific Pod:

  ```bash
  kubectl describe pod <pod-name>
  ```

- Delete the Deployment and Service:

  ```bash
  kubectl delete deployment nodeapp-deployment
  kubectl delete service nodeapp-service
  ```

---

## SnapShots
### 1. minikube status
  ![image](https://github.com/user-attachments/assets/902f6138-fff3-489e-84b7-5291286dc69a)

### 2. docker images
  ![image](https://github.com/user-attachments/assets/98bdb4f8-a9c7-48c1-bdae-5c2fd0f5a20b)

### 3. kuberbetes resources
  ![image](https://github.com/user-attachments/assets/0c5d48e2-a5ed-4c8b-9d70-cfcb82335da0)

### 4. Runnig application
  ![image](https://github.com/user-attachments/assets/ba5fbd0f-5b13-4753-a81c-21cdee45f6ff)

# Frontend Cloud Run project

```
docker build -t fe-cloud-run-example:latest .
docker run -it -p 5000:3000 --name fe-cloud-run-example fe-cloud-run-example:latest
```

test:

```
curl -i localhost:3000
```
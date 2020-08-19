# Frontend Cloud Run project

![{{production deploy}}](https://github.com/trisbee/fe-cloud-run-example/workflows/production/badge.svg)
![{{stage deploy}}](https://github.com/trisbee/fe-cloud-run-example/workflows/stage/badge.svg)

```
docker build -t fe-cloud-run-example:latest .
docker run -it -p 5000:3000 --name fe-cloud-run-example fe-cloud-run-example:latest
```

test:

```
curl -i localhost:3000
```
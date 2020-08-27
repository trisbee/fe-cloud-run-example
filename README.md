# Frontend Cloud Run project

![.github/workflows/stage.yml](https://github.com/trisbee/fe-cloud-run-example/workflows/.github/workflows/stage.yml/badge.svg?branch=stage)

```
docker build -t fe-cloud-run-example:latest .
docker run -it -p 5000:3000 --name fe-cloud-run-example fe-cloud-run-example:latest
```

test:

```
curl -i localhost:3000
```


## Secret variables

Google Cloud Service Account keys are stored globally via [Organization secrets](https://github.com/organizations/trisbee/settings/secrets).

Keys:
- FE_PRODUCTION_GCP_SA_KEY
- FE_STAGE_GCP_SA_KEY

If you have to create new one, you can via [Service Accounts page](https://cloud.google.com/iam/docs/creating-managing-service-account-keys#iam-service-account-keys-create-console).

## Reading list

- [Google Cloud Run Deploy](https://cloud.google.com/sdk/gcloud/reference/run/deploy)
- [Workflow syntax for GitHub Actions](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions)
- [Google Cloud Run](https://cloud.google.com/run)
- [Google Container Registry](https://cloud.google.com/container-registry/docs)
- [Deploy Your Website on Google Cloud Run](https://codelabs.developers.google.com/codelabs/cloud-run-deploy/index.html)
- [Cloud Run IAM Roles](https://cloud.google.com/run/docs/reference/iam/roles)

## Good to know

- Service name may only start with a letter and contain up to 63 lowercase letters, numbers or hyphens
- [How to pick region](https://cloud.google.com/run/docs/locations)

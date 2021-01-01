## Configuring the AWS CLI with Programmatic User
1. In AWS Console, go to IAM, and select "Add User"
2. Create a user and select "Programmatic Access"
3. Select "Next: Permissions", select "Attach existing policies directly" and select "AdministratorAccess"
4. Select "Next: Tags", select "Next: Review", and select "Create user"
5. Copy "Access Key ID" and "Secret Access key"
6. Install [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html)
7. Run "aws configure" in terminal, fill in keys and set region to "us-east-2"

## Store IAM User Access Keys in Repository Secrets
1. Got to repository's "Settings" and select "Secrets"
2. Select "New repository secret" and store secrets named "AWS_ACCESS_KEY_ID" and "AWS_SECRET_ACCESS_KEY"

## Setup Amazon Elastic Container Registry (ECR)
1. Create an ECR repository to store your images
```
aws ecr create-repository --repository-name <name> --region us-east-2
```

## Setup Amazon Elastic Container Service (ECS)
1. Create an ECS task definition, an ECS cluster, an ECS service and Container
   by following this [Getting Started Guide](https://us-east-2.console.aws.amazon.com/ecs/home?region=us-east-2#/firstRun)
   
## Setup Github Workflow: Deploy
1. Correctly configure the following values inside of [deploy.yml](https://github.com/tgwittman/node-docker-ecs/blob/master/.github/workflows/deploy.yml):
   + `aws-region`
   + `ECR_REPOSITORY`
   + `task-definition`
   + `container-name`
   + `service`
   + `cluster`
2. Correctly configure the following values inside of [node-docker-task-definition](https://github.com/tgwittman/node-docker-ecs/blob/master/node-docker-task-definition.json):
   + `executionRoleArn`
   + `name`
   + `image`
   + `family`

## Configuring the AWS CLI
install cli here: https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html
1. In AWS Console, go to IAM, and select "Add User"
2. Create a user and select "Programmatic Access"
3. Select "Next: Permissions", select "Attach existing policies directly" and select "AdministratorAccess"
4. Select "Next: Tags", select "Next: Review", and select "Create user"
5. Copy "Access Key ID" and "Secret Access key"
6. Run "aws configure" in terminal, fill in keys and set region to "us-east-2"

## Store an IAM user access key in GitHub Actions
1. Got to repository's "Settings" and select "Secrets"
2. Select "New repository secret" and store secrets named "AWS_ACCESS_KEY_ID" and "AWS_SECRET_ACCESS_KEY"

## To use .github/workflow/deploy.yml, complete the following set-up steps:
1. Create an ECR repository to store your images
```
aws ecr create-repository --repository-name node-docker --region us-east-2
```
2. Create an ECS task definition, an ECS cluster, an ECS service and Container with the name `node-docker` by 
   following this [Getting Started Guide](https://us-east-2.console.aws.amazon.com/ecs/home?region=us-east-2#/firstRun)

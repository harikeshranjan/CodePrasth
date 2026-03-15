export const awsReferenceContentTable = [
  {
    id: "introduction",
    heading: "Introduction",
    subheadings: [],
  },
  {
    id: "aws-cli-setup",
    heading: "AWS CLI setup",
    subheadings: [
      { id: "install-aws-cli", heading: "Install AWS CLI" },
      { id: "check-aws-cli-version", heading: "Check AWS CLI version" },
      { id: "configure-aws-cli", heading: "Configure AWS CLI" },
      { id: "list-aws-profiles", heading: "List AWS profiles" },
      { id: "switch-aws-profile", heading: "Switch AWS profile" },
    ],
  },
  {
    id: "identity-and-access-management",
    heading: "Identity and Access Management (IAM)",
    subheadings: [
      { id: "create-iam-user", heading: "Create IAM user" },
      { id: "create-iam-role", heading: "Create IAM role" },
      { id: "attach-policy", heading: "Attach policy" },
      { id: "list-iam-users", heading: "List IAM users" },
      { id: "list-iam-roles", heading: "List IAM roles" },
    ],
  },
  {
    id: "s3-storage",
    heading: "S3 storage",
    subheadings: [
      { id: "create-bucket", heading: "Create bucket" },
      { id: "list-buckets", heading: "List buckets" },
      { id: "upload-file", heading: "Upload file" },
      { id: "download-file", heading: "Download file" },
      { id: "delete-file", heading: "Delete file" },
      { id: "sync-folder", heading: "Sync folder" },
    ],
  },
  {
    id: "ec2-compute",
    heading: "EC2 compute",
    subheadings: [
      { id: "list-instances", heading: "List instances" },
      { id: "launch-instance", heading: "Launch instance" },
      { id: "start-instance", heading: "Start instance" },
      { id: "stop-instance", heading: "Stop instance" },
      { id: "terminate-instance", heading: "Terminate instance" },
      { id: "describe-instances", heading: "Describe instances" },
    ],
  },
  {
    id: "networking",
    heading: "Networking",
    subheadings: [
      { id: "list-vpcs", heading: "List VPCs" },
      { id: "create-vpc", heading: "Create VPC" },
      { id: "list-subnets", heading: "List subnets" },
      { id: "create-security-group", heading: "Create security group" },
      { id: "authorize-security-group", heading: "Authorize security group rule" },
    ],
  },
  {
    id: "databases",
    heading: "Databases",
    subheadings: [
      { id: "list-rds-instances", heading: "List RDS instances" },
      { id: "create-rds-instance", heading: "Create RDS instance" },
      { id: "start-rds-instance", heading: "Start RDS instance" },
      { id: "stop-rds-instance", heading: "Stop RDS instance" },
      { id: "delete-rds-instance", heading: "Delete RDS instance" },
    ],
  },
  {
    id: "serverless",
    heading: "Serverless",
    subheadings: [
      { id: "list-lambda-functions", heading: "List Lambda functions" },
      { id: "create-lambda-function", heading: "Create Lambda function" },
      { id: "invoke-lambda", heading: "Invoke Lambda function" },
      { id: "delete-lambda-function", heading: "Delete Lambda function" },
    ],
  },
  {
    id: "containers",
    heading: "Containers",
    subheadings: [
      { id: "list-ecs-clusters", heading: "List ECS clusters" },
      { id: "create-ecs-cluster", heading: "Create ECS cluster" },
      { id: "list-ecs-services", heading: "List ECS services" },
      { id: "update-ecs-service", heading: "Update ECS service" },
    ],
  },
  {
    id: "monitoring-and-logging",
    heading: "Monitoring and logging",
    subheadings: [
      { id: "list-cloudwatch-metrics", heading: "List CloudWatch metrics" },
      { id: "get-metric-statistics", heading: "Get metric statistics" },
      { id: "list-log-groups", heading: "List log groups" },
      { id: "tail-logs", heading: "Tail logs" },
    ],
  },
  {
    id: "helpful-commands",
    heading: "Helpful commands",
    subheadings: [
      { id: "aws-help", heading: "aws help" },
      { id: "service-help", heading: "Service help" },
      { id: "command-help", heading: "Command help" },
      { id: "list-all-services", heading: "List all services" },
    ],
  },
] as const;
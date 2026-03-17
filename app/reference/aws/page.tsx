import CodeBlock from "@/components/code-block";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { BookOpen, Cloud, Info, AlertTriangle } from "lucide-react";

// ── Note / callout ────────────────────────────────────────────────────────────

function Note({
  children,
  title = "Note",
  variant = "info",
}: {
  children: React.ReactNode;
  title?: string;
  variant?: "info" | "warning";
}) {
  const isWarning = variant === "warning";
  return (
    <div
      className={`flex gap-3 px-4 py-3.5 rounded-xl border my-1 ${
        isWarning
          ? "border-amber-200 bg-amber-50/50 dark:border-amber-900 dark:bg-amber-950/30"
          : "border-border bg-muted/30"
      }`}
    >
      {isWarning ? (
        <AlertTriangle
          size={15}
          className="text-amber-500 mt-0.5 shrink-0"
        />
      ) : (
        <Info size={15} className="text-muted-foreground mt-0.5 shrink-0" />
      )}
      <div>
        <p
          className={`text-[12px] font-semibold mb-0.5 ${
            isWarning ? "text-amber-700 dark:text-amber-400" : "text-foreground"
          }`}
        >
          {title}
        </p>
        <p className="text-[13px] text-muted-foreground leading-relaxed">
          {children}
        </p>
      </div>
    </div>
  );
}

// ── Section wrapper ───────────────────────────────────────────────────────────

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20">
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-xl font-bold tracking-tight text-foreground whitespace-nowrap">
          {title}
        </h2>
        <div className="flex-1 h-px bg-border" />
      </div>
      <div className="space-y-8">{children}</div>
    </section>
  );
}

// ── Subheading wrapper ────────────────────────────────────────────────────────

function Sub({
  id,
  title,
  description,
  children,
}: {
  id: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <div id={id} className="scroll-mt-24 space-y-3">
      <div>
        <h3 className="text-[15px] font-semibold text-foreground leading-snug">
          {title}
        </h3>
        {description && (
          <p className="text-[13px] text-muted-foreground mt-1 leading-relaxed">
            {description}
          </p>
        )}
      </div>
      {children}
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function AWSReferencePage() {
  return (
    <main className="pb-24">

      {/* ── Page header ── */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-xl border border-border bg-muted flex items-center justify-center text-base select-none">
            ☁️
          </div>
          <Badge
            variant="secondary"
            className="text-[11px] px-2.5 py-0.5 rounded-md"
          >
            DevOps
          </Badge>
          <Badge
            variant="outline"
            className="text-[11px] px-2.5 py-0.5 rounded-md text-muted-foreground"
          >
            AWS CLI v2
          </Badge>
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-foreground leading-tight mb-3">
          AWS CLI
        </h1>
        <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mb-6">
          A complete command-line reference for Amazon Web Services — covering
          IAM, S3, EC2, networking, databases, serverless, containers, and
          monitoring. Every command is ready to copy and run.
        </p>

        {/* Meta strip */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <BookOpen size={12} />
            <span>11 sections</span>
          </div>
          <Separator orientation="vertical" className="h-3.5" />
          <div className="flex items-center gap-1.5">
            <Cloud size={12} />
            <span>50+ commands</span>
          </div>
          <Separator orientation="vertical" className="h-3.5" />
          <span>AWS CLI v2 · bash</span>
        </div>
      </div>

      <div className="space-y-16">

        {/* ── 1. Introduction ── */}
        <Section id="introduction" title="Introduction">
          <p className="text-[14px] text-muted-foreground leading-relaxed">
            The AWS Command Line Interface (CLI) is a unified tool for managing
            your AWS services from the terminal. With a single install you can
            control multiple AWS services and automate them through scripts —
            replacing most actions you would otherwise perform in the AWS
            Management Console.
          </p>

          <div className="grid sm:grid-cols-3 gap-3 mt-2">
            {[
              {
                name: "Automate everything",
                desc: "Script infrastructure provisioning, deployments, and backups without clicking through the console.",
              },
              {
                name: "Profile-based auth",
                desc: "Manage multiple AWS accounts and regions with named profiles. Switch with a single flag.",
              },
              {
                name: "Output formats",
                desc: "Return results as JSON, YAML, text, or table. Pipe to jq for powerful filtering.",
              },
            ].map((c) => (
              <div
                key={c.name}
                className="flex flex-col gap-1.5 p-4 rounded-xl border border-border bg-background"
              >
                <p className="text-[13px] font-semibold text-foreground">
                  {c.name}
                </p>
                <p className="text-[12px] text-muted-foreground leading-relaxed">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>

          <Note>
            All commands on this page use AWS CLI v2. Run{" "}
            <code className="font-mono text-[12px] bg-muted px-1 py-0.5 rounded">
              aws --version
            </code>{" "}
            to confirm. If you see v1, follow the upgrade guide at{" "}
            <code className="font-mono text-[12px] bg-muted px-1 py-0.5 rounded">
              docs.aws.amazon.com/cli
            </code>
            .
          </Note>
        </Section>

        {/* ── 2. AWS CLI setup ── */}
        <Section id="aws-cli-setup" title="AWS CLI setup">
          <Sub
            id="install-aws-cli"
            title="Install AWS CLI"
            description="Install AWS CLI v2 on your operating system."
          >
            <CodeBlock
              tag="bash"
              title="Install on macOS (Homebrew)"
              lang="bash"
              code={`brew install awscli`}
            />
            <CodeBlock
              tag="bash"
              title="Install on Linux (x86_64)"
              lang="bash"
              code={`curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install`}
            />
            <CodeBlock
              tag="bash"
              title="Install on Windows (PowerShell)"
              lang="bash"
              code={`msiexec.exe /i https://awscli.amazonaws.com/AWSCLIV2.msi`}
            />
          </Sub>

          <Sub
            id="check-aws-cli-version"
            title="Check AWS CLI version"
            description="Verify the installation was successful and confirm the version."
          >
            <CodeBlock
              tag="bash"
              title="Check version"
              lang="bash"
              code={`aws --version
# aws-cli/2.15.10 Python/3.11.6 Darwin/23.2.0 exe/x86_64 prompt/off`}
            />
          </Sub>

          <Sub
            id="configure-aws-cli"
            title="Configure AWS CLI"
            description="Set your Access Key ID, Secret Access Key, region, and output format. Stored in ~/.aws/credentials and ~/.aws/config."
          >
            <CodeBlock
              tag="bash"
              title="Interactive configuration"
              lang="bash"
              code={`aws configure

# AWS Access Key ID [None]: AKIAIOSFODNN7EXAMPLE
# AWS Secret Access Key [None]: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
# Default region name [None]: us-east-1
# Default output format [None]: json`}
            />
            <CodeBlock
              tag="bash"
              title="Configure a named profile"
              lang="bash"
              code={`aws configure --profile production

# Stored as [profile production] in ~/.aws/config
# and [production] in ~/.aws/credentials`}
            />
            <CodeBlock
              tag="bash"
              title="Set individual values without interactive prompt"
              lang="bash"
              code={`aws configure set aws_access_key_id AKIAIOSFODNN7EXAMPLE
aws configure set aws_secret_access_key wJalrXUtnFEMI/K7MDENG
aws configure set default.region us-east-1
aws configure set default.output json`}
            />
          </Sub>

          <Sub
            id="list-aws-profiles"
            title="List AWS profiles"
            description="View all configured profiles on your machine."
          >
            <CodeBlock
              tag="bash"
              title="List profiles"
              lang="bash"
              code={`# List all profile names
aws configure list-profiles

# Show config values for the default profile
aws configure list

# Show config values for a named profile
aws configure list --profile production`}
            />
          </Sub>

          <Sub
            id="switch-aws-profile"
            title="Switch AWS profile"
            description="Use a different profile for a single command or for the entire terminal session."
          >
            <CodeBlock
              tag="bash"
              title="Per-command and session profile switching"
              lang="bash"
              code={`# Use a profile for a single command
aws s3 ls --profile production

# Set for the entire shell session
export AWS_PROFILE=production

# Set region for the session
export AWS_DEFAULT_REGION=eu-west-1

# Verify which identity is active
aws sts get-caller-identity`}
            />
          </Sub>
        </Section>

        {/* ── 3. IAM ── */}
        <Section
          id="identity-and-access-management"
          title="Identity and Access Management (IAM)"
        >
          <p className="text-[13px] text-muted-foreground leading-relaxed -mt-2">
            IAM controls who can do what in your AWS account. Always apply the
            principle of least privilege — grant only the permissions actually
            needed.
          </p>

          <Sub
            id="create-iam-user"
            title="Create IAM user"
            description="Create a new IAM user and generate programmatic access keys."
          >
            <CodeBlock
              tag="bash"
              title="Create user and access keys"
              lang="bash"
              code={`# Create the user
aws iam create-user --user-name alice

# Create access keys for the user
aws iam create-access-key --user-name alice

# Output includes AccessKeyId and SecretAccessKey — save these securely`}
            />
          </Sub>

          <Sub
            id="create-iam-role"
            title="Create IAM role"
            description="Create a role with a trust policy that allows EC2 instances to assume it."
          >
            <CodeBlock
              tag="bash"
              title="Create role with trust policy"
              lang="bash"
              code={`# Create a trust policy document
cat > trust-policy.json << 'EOF'
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": { "Service": "ec2.amazonaws.com" },
      "Action": "sts:AssumeRole"
    }
  ]
}
EOF

# Create the role
aws iam create-role \\
  --role-name MyEC2Role \\
  --assume-role-policy-document file://trust-policy.json`}
            />
          </Sub>

          <Sub
            id="attach-policy"
            title="Attach policy"
            description="Attach an AWS-managed or custom policy to a user, group, or role."
          >
            <CodeBlock
              tag="bash"
              title="Attach managed policy to user and role"
              lang="bash"
              code={`# Attach a managed policy to a user
aws iam attach-user-policy \\
  --user-name alice \\
  --policy-arn arn:aws:iam::aws:policy/AmazonS3ReadOnlyAccess

# Attach a managed policy to a role
aws iam attach-role-policy \\
  --role-name MyEC2Role \\
  --policy-arn arn:aws:iam::aws:policy/AmazonS3FullAccess

# List policies attached to a user
aws iam list-attached-user-policies --user-name alice`}
            />
          </Sub>

          <Sub
            id="list-iam-users"
            title="List IAM users"
            description="View all IAM users in the account."
          >
            <CodeBlock
              tag="bash"
              title="List users"
              lang="bash"
              code={`# List all users
aws iam list-users

# List users with table output for readability
aws iam list-users --output table

# Get details of a specific user
aws iam get-user --user-name alice`}
            />
          </Sub>

          <Sub
            id="list-iam-roles"
            title="List IAM roles"
            description="View all IAM roles and filter by path or name."
          >
            <CodeBlock
              tag="bash"
              title="List roles"
              lang="bash"
              code={`# List all roles
aws iam list-roles

# Filter output with jq — show only role names
aws iam list-roles | jq -r '.Roles[].RoleName'

# Get details of a specific role
aws iam get-role --role-name MyEC2Role`}
            />
          </Sub>

          <Note variant="warning" title="Never use root credentials">
            The AWS root account has unrestricted access to every service.
            Create an IAM user or use IAM Identity Center for daily work, and
            enable MFA on the root account immediately after creating your AWS
            account.
          </Note>
        </Section>

        {/* ── 4. S3 ── */}
        <Section id="s3-storage" title="S3 storage">
          <p className="text-[13px] text-muted-foreground leading-relaxed -mt-2">
            Amazon S3 (Simple Storage Service) stores objects (files) in
            buckets. Bucket names must be globally unique across all AWS
            accounts. The{" "}
            <code className="font-mono text-[12px] bg-muted px-1 py-0.5 rounded">
              aws s3
            </code>{" "}
            commands are high-level wrappers;{" "}
            <code className="font-mono text-[12px] bg-muted px-1 py-0.5 rounded">
              aws s3api
            </code>{" "}
            gives lower-level access.
          </p>

          <Sub
            id="create-bucket"
            title="Create bucket"
            description="Create a new S3 bucket. Bucket names must be globally unique, 3–63 characters, lowercase."
          >
            <CodeBlock
              tag="bash"
              title="Create bucket"
              lang="bash"
              code={`# Create in us-east-1 (no LocationConstraint needed)
aws s3api create-bucket --bucket my-unique-bucket-name

# Create in any other region (LocationConstraint required)
aws s3api create-bucket \\
  --bucket my-unique-bucket-name \\
  --region eu-west-1 \\
  --create-bucket-configuration LocationConstraint=eu-west-1

# Block all public access (recommended default)
aws s3api put-public-access-block \\
  --bucket my-unique-bucket-name \\
  --public-access-block-configuration "BlockPublicAcls=true,IgnorePublicAcls=true,BlockPublicPolicy=true,RestrictPublicBuckets=true"`}
            />
          </Sub>

          <Sub
            id="list-buckets"
            title="List buckets"
            description="View all S3 buckets in your account and list objects within a bucket."
          >
            <CodeBlock
              tag="bash"
              title="List buckets and objects"
              lang="bash"
              code={`# List all buckets
aws s3 ls

# List objects in a bucket (top level)
aws s3 ls s3://my-bucket/

# List all objects recursively
aws s3 ls s3://my-bucket/ --recursive

# List with human-readable sizes
aws s3 ls s3://my-bucket/ --recursive --human-readable --summarize`}
            />
          </Sub>

          <Sub
            id="upload-file"
            title="Upload file"
            description="Copy a local file or directory to an S3 bucket."
          >
            <CodeBlock
              tag="bash"
              title="Upload files to S3"
              lang="bash"
              code={`# Upload a single file
aws s3 cp ./report.pdf s3://my-bucket/reports/report.pdf

# Upload with a specific content type
aws s3 cp ./index.html s3://my-bucket/ \\
  --content-type "text/html"

# Upload an entire directory
aws s3 cp ./dist/ s3://my-bucket/app/ --recursive

# Upload and set public-read ACL (only if ACLs are enabled)
aws s3 cp ./logo.png s3://my-bucket/ --acl public-read`}
            />
          </Sub>

          <Sub
            id="download-file"
            title="Download file"
            description="Copy an object or prefix from S3 to a local path."
          >
            <CodeBlock
              tag="bash"
              title="Download from S3"
              lang="bash"
              code={`# Download a single file
aws s3 cp s3://my-bucket/reports/report.pdf ./report.pdf

# Download an entire prefix (folder)
aws s3 cp s3://my-bucket/app/ ./local-app/ --recursive`}
            />
          </Sub>

          <Sub
            id="delete-file"
            title="Delete file"
            description="Remove objects from a bucket. Deletion is immediate and irreversible unless versioning is enabled."
          >
            <CodeBlock
              tag="bash"
              title="Delete objects"
              lang="bash"
              code={`# Delete a single object
aws s3 rm s3://my-bucket/old-file.txt

# Delete all objects under a prefix
aws s3 rm s3://my-bucket/temp/ --recursive

# Delete a bucket and all its contents
aws s3 rb s3://my-bucket --force`}
            />
            <Note variant="warning" title="Deletion is permanent">
              Unless S3 Versioning is enabled, deleted objects cannot be
              recovered. Enable versioning on buckets that store important data.
            </Note>
          </Sub>

          <Sub
            id="sync-folder"
            title="Sync folder"
            description="Sync a local directory with an S3 prefix — only copies new or changed files."
          >
            <CodeBlock
              tag="bash"
              title="Sync commands"
              lang="bash"
              code={`# Sync local folder → S3 (upload only changed files)
aws s3 sync ./dist/ s3://my-bucket/app/

# Sync S3 → local (download only changed files)
aws s3 sync s3://my-bucket/app/ ./dist/

# Sync and delete files in destination not in source
aws s3 sync ./dist/ s3://my-bucket/app/ --delete

# Dry run — see what would be transferred
aws s3 sync ./dist/ s3://my-bucket/app/ --dryrun

# Exclude specific patterns
aws s3 sync ./dist/ s3://my-bucket/app/ \\
  --exclude "*.map" \\
  --exclude ".DS_Store"`}
            />
          </Sub>
        </Section>

        {/* ── 5. EC2 ── */}
        <Section id="ec2-compute" title="EC2 compute">
          <p className="text-[13px] text-muted-foreground leading-relaxed -mt-2">
            EC2 (Elastic Compute Cloud) provides virtual machines in the cloud.
            Use{" "}
            <code className="font-mono text-[12px] bg-muted px-1 py-0.5 rounded">
              --query
            </code>{" "}
            with JMESPath expressions to filter the verbose describe output down
            to just what you need.
          </p>

          <Sub
            id="list-instances"
            title="List instances"
            description="View running and stopped EC2 instances with their key details."
          >
            <CodeBlock
              tag="bash"
              title="List instances"
              lang="bash"
              code={`# List all instances (full JSON output)
aws ec2 describe-instances

# Compact table of instance ID, type, state, and public IP
aws ec2 describe-instances \\
  --query "Reservations[*].Instances[*].[InstanceId,InstanceType,State.Name,PublicIpAddress]" \\
  --output table

# Filter to only running instances
aws ec2 describe-instances \\
  --filters "Name=instance-state-name,Values=running" \\
  --query "Reservations[*].Instances[*].[InstanceId,PublicIpAddress]" \\
  --output table`}
            />
          </Sub>

          <Sub
            id="launch-instance"
            title="Launch instance"
            description="Start a new EC2 instance with a specified AMI, type, and key pair."
          >
            <CodeBlock
              tag="bash"
              title="Launch EC2 instance"
              lang="bash"
              code={`aws ec2 run-instances \\
  --image-id ami-0c02fb55956c7d316 \\
  --instance-type t2.micro \\
  --key-name my-key-pair \\
  --security-group-ids sg-0123456789abcdef0 \\
  --subnet-id subnet-0123456789abcdef0 \\
  --count 1 \\
  --tag-specifications 'ResourceType=instance,Tags=[{Key=Name,Value=my-server}]'`}
            />
          </Sub>

          <Sub
            id="start-instance"
            title="Start instance"
            description="Start a stopped EC2 instance. The instance must already exist."
          >
            <CodeBlock
              tag="bash"
              title="Start instance"
              lang="bash"
              code={`aws ec2 start-instances --instance-ids i-0abcdef1234567890

# Wait until instance is in running state
aws ec2 wait instance-running --instance-ids i-0abcdef1234567890

echo "Instance is running"`}
            />
          </Sub>

          <Sub
            id="stop-instance"
            title="Stop instance"
            description="Stop a running instance. The instance and its EBS volumes are preserved."
          >
            <CodeBlock
              tag="bash"
              title="Stop instance"
              lang="bash"
              code={`aws ec2 stop-instances --instance-ids i-0abcdef1234567890

# Wait until fully stopped
aws ec2 wait instance-stopped --instance-ids i-0abcdef1234567890

echo "Instance stopped"`}
            />
          </Sub>

          <Sub
            id="terminate-instance"
            title="Terminate instance"
            description="Permanently delete an EC2 instance. EBS root volumes are deleted by default."
          >
            <CodeBlock
              tag="bash"
              title="Terminate instance"
              lang="bash"
              code={`aws ec2 terminate-instances --instance-ids i-0abcdef1234567890`}
            />
            <Note variant="warning" title="Termination is irreversible">
              Terminating an instance deletes the root EBS volume unless you
              explicitly set{" "}
              <code className="font-mono text-[12px] bg-muted px-1 py-0.5 rounded">
                DeleteOnTermination=false
              </code>
              . Confirm the instance ID before running this command.
            </Note>
          </Sub>

          <Sub
            id="describe-instances"
            title="Describe instances"
            description="Fetch detailed metadata about one or more instances — AMI, network config, tags, and more."
          >
            <CodeBlock
              tag="bash"
              title="Describe a specific instance"
              lang="bash"
              code={`# Full details for one instance
aws ec2 describe-instances --instance-ids i-0abcdef1234567890

# Get the public IP of a specific instance
aws ec2 describe-instances \\
  --instance-ids i-0abcdef1234567890 \\
  --query "Reservations[0].Instances[0].PublicIpAddress" \\
  --output text

# Get instances by Name tag
aws ec2 describe-instances \\
  --filters "Name=tag:Name,Values=my-server" \\
  --query "Reservations[*].Instances[*].[InstanceId,State.Name]" \\
  --output table`}
            />
          </Sub>
        </Section>

        {/* ── 6. Networking ── */}
        <Section id="networking" title="Networking">
          <Sub
            id="list-vpcs"
            title="List VPCs"
            description="View all Virtual Private Clouds in your account and region."
          >
            <CodeBlock
              tag="bash"
              title="List VPCs"
              lang="bash"
              code={`# List all VPCs
aws ec2 describe-vpcs

# Compact view — VPC ID, CIDR, and default flag
aws ec2 describe-vpcs \\
  --query "Vpcs[*].[VpcId,CidrBlock,IsDefault]" \\
  --output table`}
            />
          </Sub>

          <Sub
            id="create-vpc"
            title="Create VPC"
            description="Create a new VPC with a CIDR block and enable DNS support."
          >
            <CodeBlock
              tag="bash"
              title="Create VPC"
              lang="bash"
              code={`# Create VPC
VPC_ID=$(aws ec2 create-vpc \\
  --cidr-block 10.0.0.0/16 \\
  --query "Vpc.VpcId" \\
  --output text)

echo "Created VPC: $VPC_ID"

# Enable DNS hostnames (required for EC2 to get public DNS names)
aws ec2 modify-vpc-attribute \\
  --vpc-id $VPC_ID \\
  --enable-dns-hostnames

# Tag the VPC
aws ec2 create-tags \\
  --resources $VPC_ID \\
  --tags Key=Name,Value=my-vpc`}
            />
          </Sub>

          <Sub
            id="list-subnets"
            title="List subnets"
            description="View all subnets and their associated VPCs and availability zones."
          >
            <CodeBlock
              tag="bash"
              title="List subnets"
              lang="bash"
              code={`# List all subnets
aws ec2 describe-subnets \\
  --query "Subnets[*].[SubnetId,VpcId,CidrBlock,AvailabilityZone]" \\
  --output table

# List subnets for a specific VPC
aws ec2 describe-subnets \\
  --filters "Name=vpc-id,Values=vpc-0123456789abcdef0" \\
  --query "Subnets[*].[SubnetId,CidrBlock,AvailabilityZone]" \\
  --output table`}
            />
          </Sub>

          <Sub
            id="create-security-group"
            title="Create security group"
            description="Create a new security group in a VPC. Security groups act as a virtual firewall."
          >
            <CodeBlock
              tag="bash"
              title="Create security group"
              lang="bash"
              code={`SG_ID=$(aws ec2 create-security-group \\
  --group-name my-app-sg \\
  --description "Security group for my application" \\
  --vpc-id vpc-0123456789abcdef0 \\
  --query "GroupId" \\
  --output text)

echo "Created security group: $SG_ID"`}
            />
          </Sub>

          <Sub
            id="authorize-security-group"
            title="Authorize security group rule"
            description="Add inbound or outbound rules to a security group."
          >
            <CodeBlock
              tag="bash"
              title="Authorize inbound rules"
              lang="bash"
              code={`# Allow HTTP (port 80) from anywhere
aws ec2 authorize-security-group-ingress \\
  --group-id sg-0123456789abcdef0 \\
  --protocol tcp \\
  --port 80 \\
  --cidr 0.0.0.0/0

# Allow HTTPS (port 443) from anywhere
aws ec2 authorize-security-group-ingress \\
  --group-id sg-0123456789abcdef0 \\
  --protocol tcp \\
  --port 443 \\
  --cidr 0.0.0.0/0

# Allow SSH (port 22) from your IP only
MY_IP=$(curl -s https://checkip.amazonaws.com)
aws ec2 authorize-security-group-ingress \\
  --group-id sg-0123456789abcdef0 \\
  --protocol tcp \\
  --port 22 \\
  --cidr "$MY_IP/32"`}
            />
          </Sub>
        </Section>

        {/* ── 7. Databases ── */}
        <Section id="databases" title="Databases">
          <p className="text-[13px] text-muted-foreground leading-relaxed -mt-2">
            Amazon RDS (Relational Database Service) manages database instances
            for MySQL, PostgreSQL, MariaDB, Oracle, and SQL Server. RDS handles
            backups, patching, and failover automatically.
          </p>

          <Sub
            id="list-rds-instances"
            title="List RDS instances"
            description="View all RDS instances and their current status."
          >
            <CodeBlock
              tag="bash"
              title="List RDS instances"
              lang="bash"
              code={`# List all DB instances
aws rds describe-db-instances

# Compact view — identifier, engine, class, status, endpoint
aws rds describe-db-instances \\
  --query "DBInstances[*].[DBInstanceIdentifier,Engine,DBInstanceClass,DBInstanceStatus,Endpoint.Address]" \\
  --output table`}
            />
          </Sub>

          <Sub
            id="create-rds-instance"
            title="Create RDS instance"
            description="Provision a new RDS database instance. Creation takes several minutes."
          >
            <CodeBlock
              tag="bash"
              title="Create PostgreSQL RDS instance"
              lang="bash"
              code={`aws rds create-db-instance \\
  --db-instance-identifier my-postgres-db \\
  --db-instance-class db.t3.micro \\
  --engine postgres \\
  --engine-version 15.4 \\
  --master-username admin \\
  --master-user-password MySecurePassword123! \\
  --allocated-storage 20 \\
  --no-publicly-accessible \\
  --vpc-security-group-ids sg-0123456789abcdef0

# Wait until the instance is available (can take 5–10 minutes)
aws rds wait db-instance-available \\
  --db-instance-identifier my-postgres-db`}
            />
          </Sub>

          <Sub
            id="start-rds-instance"
            title="Start RDS instance"
            description="Start a stopped RDS instance. Useful for dev/staging databases that don't run 24/7."
          >
            <CodeBlock
              tag="bash"
              title="Start RDS instance"
              lang="bash"
              code={`aws rds start-db-instance \\
  --db-instance-identifier my-postgres-db

# Wait until available
aws rds wait db-instance-available \\
  --db-instance-identifier my-postgres-db`}
            />
          </Sub>

          <Sub
            id="stop-rds-instance"
            title="Stop RDS instance"
            description="Stop an RDS instance to save costs. Automatically starts again after 7 days."
          >
            <CodeBlock
              tag="bash"
              title="Stop RDS instance"
              lang="bash"
              code={`aws rds stop-db-instance \\
  --db-instance-identifier my-postgres-db

# Wait until stopped
aws rds wait db-instance-stopped \\
  --db-instance-identifier my-postgres-db`}
            />
            <Note>
              RDS automatically restarts a stopped instance after 7 days. If
              you need longer-term savings, take a snapshot and delete the
              instance — you only pay for snapshot storage.
            </Note>
          </Sub>

          <Sub
            id="delete-rds-instance"
            title="Delete RDS instance"
            description="Permanently delete an RDS instance, optionally taking a final snapshot first."
          >
            <CodeBlock
              tag="bash"
              title="Delete RDS instance"
              lang="bash"
              code={`# Delete with a final snapshot (recommended)
aws rds delete-db-instance \\
  --db-instance-identifier my-postgres-db \\
  --final-db-snapshot-identifier my-postgres-db-final-snapshot

# Delete without a final snapshot (faster, but data is gone)
aws rds delete-db-instance \\
  --db-instance-identifier my-postgres-db \\
  --skip-final-snapshot`}
            />
            <Note variant="warning" title="Deletion is permanent">
              Always take a final snapshot unless you are certain the data is no
              longer needed. Deleted RDS instances cannot be recovered without a
              snapshot or automated backup.
            </Note>
          </Sub>
        </Section>

        {/* ── 8. Serverless ── */}
        <Section id="serverless" title="Serverless">
          <p className="text-[13px] text-muted-foreground leading-relaxed -mt-2">
            AWS Lambda runs your code in response to events without provisioning
            servers. You pay only for the compute time consumed — there is no
            charge when your code is not running.
          </p>

          <Sub
            id="list-lambda-functions"
            title="List Lambda functions"
            description="View all Lambda functions in the current region."
          >
            <CodeBlock
              tag="bash"
              title="List Lambda functions"
              lang="bash"
              code={`# List all functions
aws lambda list-functions

# Compact view — name, runtime, last modified
aws lambda list-functions \\
  --query "Functions[*].[FunctionName,Runtime,LastModified]" \\
  --output table`}
            />
          </Sub>

          <Sub
            id="create-lambda-function"
            title="Create Lambda function"
            description="Deploy a new Lambda function from a zip file. The zip must contain your handler."
          >
            <CodeBlock
              tag="bash"
              title="Package and create Lambda function"
              lang="bash"
              code={`# Package your code into a zip
zip function.zip index.js

# Create the function
aws lambda create-function \\
  --function-name my-function \\
  --runtime nodejs20.x \\
  --role arn:aws:iam::123456789012:role/lambda-execution-role \\
  --handler index.handler \\
  --zip-file fileb://function.zip \\
  --timeout 30 \\
  --memory-size 256

# Update function code (after first deploy)
aws lambda update-function-code \\
  --function-name my-function \\
  --zip-file fileb://function.zip`}
            />
          </Sub>

          <Sub
            id="invoke-lambda"
            title="Invoke Lambda function"
            description="Manually trigger a Lambda function and capture its output."
          >
            <CodeBlock
              tag="bash"
              title="Invoke Lambda synchronously"
              lang="bash"
              code={`# Invoke and write response to a file
aws lambda invoke \\
  --function-name my-function \\
  --payload '{"key": "value"}' \\
  --cli-binary-format raw-in-base64-out \\
  response.json

cat response.json

# Invoke asynchronously (no response body)
aws lambda invoke \\
  --function-name my-function \\
  --invocation-type Event \\
  --payload '{}' \\
  --cli-binary-format raw-in-base64-out \\
  /dev/null`}
            />
          </Sub>

          <Sub
            id="delete-lambda-function"
            title="Delete Lambda function"
            description="Permanently remove a Lambda function and its configuration."
          >
            <CodeBlock
              tag="bash"
              title="Delete Lambda function"
              lang="bash"
              code={`aws lambda delete-function --function-name my-function`}
            />
          </Sub>
        </Section>

        {/* ── 9. Containers ── */}
        <Section id="containers" title="Containers">
          <p className="text-[13px] text-muted-foreground leading-relaxed -mt-2">
            Amazon ECS (Elastic Container Service) runs Docker containers at
            scale. A cluster contains services, which maintain a desired number
            of running task instances.
          </p>

          <Sub
            id="list-ecs-clusters"
            title="List ECS clusters"
            description="View all ECS clusters in the current region."
          >
            <CodeBlock
              tag="bash"
              title="List clusters"
              lang="bash"
              code={`# List cluster ARNs
aws ecs list-clusters

# Describe cluster details (pass comma-separated ARNs)
aws ecs describe-clusters \\
  --clusters my-cluster \\
  --query "clusters[*].[clusterName,status,runningTasksCount,activeServicesCount]" \\
  --output table`}
            />
          </Sub>

          <Sub
            id="create-ecs-cluster"
            title="Create ECS cluster"
            description="Create a new ECS cluster. Use FARGATE capacity provider to avoid managing EC2 instances."
          >
            <CodeBlock
              tag="bash"
              title="Create Fargate cluster"
              lang="bash"
              code={`aws ecs create-cluster \\
  --cluster-name my-cluster \\
  --capacity-providers FARGATE FARGATE_SPOT \\
  --default-capacity-provider-strategy \\
      capacityProvider=FARGATE,weight=1 \\
  --tags key=Environment,value=production`}
            />
          </Sub>

          <Sub
            id="list-ecs-services"
            title="List ECS services"
            description="View all services running in a specific cluster."
          >
            <CodeBlock
              tag="bash"
              title="List services in a cluster"
              lang="bash"
              code={`# List service ARNs
aws ecs list-services --cluster my-cluster

# Describe services with status details
aws ecs describe-services \\
  --cluster my-cluster \\
  --services my-service \\
  --query "services[*].[serviceName,status,runningCount,desiredCount]" \\
  --output table`}
            />
          </Sub>

          <Sub
            id="update-ecs-service"
            title="Update ECS service"
            description="Deploy a new task definition or change the desired count of running tasks."
          >
            <CodeBlock
              tag="bash"
              title="Update service — redeploy and scale"
              lang="bash"
              code={`# Force a new deployment (pull latest image)
aws ecs update-service \\
  --cluster my-cluster \\
  --service my-service \\
  --force-new-deployment

# Scale the service to 3 tasks
aws ecs update-service \\
  --cluster my-cluster \\
  --service my-service \\
  --desired-count 3

# Deploy a specific task definition revision
aws ecs update-service \\
  --cluster my-cluster \\
  --service my-service \\
  --task-definition my-task-def:5

# Wait until the service is stable
aws ecs wait services-stable \\
  --cluster my-cluster \\
  --services my-service`}
            />
          </Sub>
        </Section>

        {/* ── 10. Monitoring and logging ── */}
        <Section id="monitoring-and-logging" title="Monitoring and logging">
          <p className="text-[13px] text-muted-foreground leading-relaxed -mt-2">
            CloudWatch collects metrics and logs from AWS services and your own
            applications. Use it to set alarms, build dashboards, and diagnose
            issues.
          </p>

          <Sub
            id="list-cloudwatch-metrics"
            title="List CloudWatch metrics"
            description="View available metrics for a specific AWS namespace."
          >
            <CodeBlock
              tag="bash"
              title="List metrics"
              lang="bash"
              code={`# List all EC2 metrics
aws cloudwatch list-metrics --namespace AWS/EC2

# Filter by metric name
aws cloudwatch list-metrics \\
  --namespace AWS/EC2 \\
  --metric-name CPUUtilization \\
  --query "Metrics[*].[Namespace,MetricName,Dimensions]" \\
  --output table`}
            />
          </Sub>

          <Sub
            id="get-metric-statistics"
            title="Get metric statistics"
            description="Retrieve historical data points for a metric over a time range."
          >
            <CodeBlock
              tag="bash"
              title="Get CPU utilization for an EC2 instance"
              lang="bash"
              code={`aws cloudwatch get-metric-statistics \\
  --namespace AWS/EC2 \\
  --metric-name CPUUtilization \\
  --dimensions Name=InstanceId,Value=i-0abcdef1234567890 \\
  --start-time 2024-01-01T00:00:00Z \\
  --end-time 2024-01-02T00:00:00Z \\
  --period 3600 \\
  --statistics Average \\
  --query "Datapoints[*].[Timestamp,Average]" \\
  --output table`}
            />
          </Sub>

          <Sub
            id="list-log-groups"
            title="List log groups"
            description="View all CloudWatch Logs log groups in your account."
          >
            <CodeBlock
              tag="bash"
              title="List log groups"
              lang="bash"
              code={`# List all log groups
aws logs describe-log-groups \\
  --query "logGroups[*].[logGroupName,retentionInDays]" \\
  --output table

# Filter by prefix
aws logs describe-log-groups \\
  --log-group-name-prefix "/aws/lambda/" \\
  --query "logGroups[*].logGroupName" \\
  --output text`}
            />
          </Sub>

          <Sub
            id="tail-logs"
            title="Tail logs"
            description="Stream the latest log events from a log group in real time."
          >
            <CodeBlock
              tag="bash"
              title="Tail CloudWatch logs"
              lang="bash"
              code={`# Tail a Lambda function's logs in real time (AWS CLI v2)
aws logs tail /aws/lambda/my-function --follow

# Tail with timestamp format
aws logs tail /aws/lambda/my-function \\
  --follow \\
  --format short

# Filter logs by pattern
aws logs tail /aws/lambda/my-function \\
  --follow \\
  --filter-pattern "ERROR"

# Get recent log events without streaming
aws logs get-log-events \\
  --log-group-name /aws/lambda/my-function \\
  --log-stream-name "$(aws logs describe-log-streams \\
      --log-group-name /aws/lambda/my-function \\
      --order-by LastEventTime \\
      --descending \\
      --query 'logStreams[0].logStreamName' \\
      --output text)" \\
  --limit 50`}
            />
          </Sub>
        </Section>

        {/* ── 11. Helpful commands ── */}
        <Section id="helpful-commands" title="Helpful commands">
          <Sub
            id="aws-help"
            title="aws help"
            description="Open the built-in help documentation for the CLI."
          >
            <CodeBlock
              tag="bash"
              title="Top-level help"
              lang="bash"
              code={`# Open top-level help (lists all available services)
aws help

# Scroll with arrow keys, press Q to quit`}
            />
          </Sub>

          <Sub
            id="service-help"
            title="Service help"
            description="List all available commands for a specific AWS service."
          >
            <CodeBlock
              tag="bash"
              title="Service-level help"
              lang="bash"
              code={`# Help for S3
aws s3 help

# Help for EC2
aws ec2 help

# Help for Lambda
aws lambda help`}
            />
          </Sub>

          <Sub
            id="command-help"
            title="Command help"
            description="View all flags and options for a specific command."
          >
            <CodeBlock
              tag="bash"
              title="Command-level help"
              lang="bash"
              code={`# Help for ec2 run-instances
aws ec2 run-instances help

# Help for s3 sync
aws s3 sync help`}
            />
          </Sub>

          <Sub
            id="list-all-services"
            title="List all services"
            description="Useful one-liners for querying your AWS environment at a glance."
          >
            <CodeBlock
              tag="bash"
              title="Handy one-liners"
              lang="bash"
              code={`# Who am I? — confirm active credentials and account
aws sts get-caller-identity

# List all regions
aws ec2 describe-regions --query "Regions[*].RegionName" --output text

# List all availability zones in current region
aws ec2 describe-availability-zones \\
  --query "AvailabilityZones[*].ZoneName" \\
  --output text

# Get current account ID
aws sts get-caller-identity --query Account --output text

# List all services available in CLI (no auth needed)
aws help | grep "^   [a-z]"

# Set output format per-command without changing config
aws ec2 describe-instances --output yaml
aws iam list-users --output text
aws s3 ls --output json`}
            />
            <Note>
              Install{" "}
              <code className="font-mono text-[12px] bg-muted px-1 py-0.5 rounded">
                jq
              </code>{" "}
              alongside the AWS CLI for powerful JSON filtering:{" "}
              <code className="font-mono text-[12px] bg-muted px-1 py-0.5 rounded">
                brew install jq
              </code>
              . Combine it with{" "}
              <code className="font-mono text-[12px] bg-muted px-1 py-0.5 rounded">
                --output json
              </code>{" "}
              to slice and reshape any CLI output exactly how you need it.
            </Note>
          </Sub>
        </Section>

      </div>
    </main>
  );
}
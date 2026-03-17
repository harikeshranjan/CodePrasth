export const gitReferenceContentTable = [
  {
    id: "introduction",
    heading: "Introduction",
    subheadings: [],
  },
  {
    id: "setup-and-configuration",
    heading: "Setup and configuration",
    subheadings: [
      { id: "check-git-version", heading: "Check Git version" },
      { id: "configure-username", heading: "Configure username" },
      { id: "configure-email", heading: "Configure email" },
      { id: "view-configuration", heading: "View configuration" },
      { id: "set-default-branch", heading: "Set default branch" },
    ],
  },
  {
    id: "repository-initialization",
    heading: "Repository initialization",
    subheadings: [
      { id: "git-init", heading: "git init" },
      { id: "git-clone", heading: "git clone" },
    ],
  },
  {
    id: "basic-workflow",
    heading: "Basic workflow",
    subheadings: [
      { id: "git-status", heading: "git status" },
      { id: "git-add", heading: "git add" },
      { id: "git-commit", heading: "git commit" },
    ],
  },
  {
    id: "viewing-history",
    heading: "Viewing history",
    subheadings: [
      { id: "git-log", heading: "git log" },
      { id: "git-diff", heading: "git diff" },
      { id: "git-show", heading: "git show" },
    ],
  },
  {
    id: "branching",
    heading: "Branching",
    subheadings: [
      { id: "git-branch", heading: "git branch" },
      { id: "git-switch", heading: "git switch" },
      { id: "git-checkout", heading: "git checkout" },
      { id: "create-branch", heading: "Create branch" },
      { id: "delete-branch", heading: "Delete branch" },
    ],
  },
  {
    id: "merging",
    heading: "Merging",
    subheadings: [{ id: "git-merge", heading: "git merge" }],
  },
  {
    id: "remote-repositories",
    heading: "Remote repositories",
    subheadings: [
      { id: "git-remote", heading: "git remote" },
      { id: "git-push", heading: "git push" },
      { id: "git-pull", heading: "git pull" },
      { id: "git-fetch", heading: "git fetch" },
    ],
  },
  {
    id: "undoing-changes",
    heading: "Undoing changes",
    subheadings: [
      { id: "git-restore", heading: "git restore" },
      { id: "git-reset", heading: "git reset" },
      { id: "git-revert", heading: "git revert" },
    ],
  },
  {
    id: "stashing",
    heading: "Stashing",
    subheadings: [
      { id: "git-stash", heading: "git stash" },
      { id: "apply-stash", heading: "Apply stash" },
      { id: "delete-stash", heading: "Delete stash" },
    ],
  },
  {
    id: "tags",
    heading: "Tags",
    subheadings: [
      { id: "create-tag", heading: "Create tag" },
      { id: "list-tags", heading: "List tags" },
      { id: "push-tags", heading: "Push tags" },
    ],
  },
  {
    id: "helpful-commands",
    heading: "Helpful commands",
    subheadings: [],
  },
] as const;
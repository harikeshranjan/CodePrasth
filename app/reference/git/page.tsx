"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Copy, Check, BookOpen, GitBranch, Info } from "lucide-react";

// ── Types ─────────────────────────────────────────────────────────────────────

type SnippetProps = {
  title: string;
  id: string;
  description?: string;
  lang: string;
  code: string;
  tags?: string[];
};

type NoteProps = {
  children: React.ReactNode;
  title?: string;
};

// ── Copy button ───────────────────────────────────────────────────────────────

function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-medium text-muted-foreground hover:text-foreground hover:bg-background/60 transition-all duration-150"
    >
      {copied ? (
        <>
          <Check size={12} className="text-emerald-500" />
          <span className="text-emerald-500">Copied</span>
        </>
      ) : (
        <>
          <Copy size={12} />
          Copy
        </>
      )}
    </button>
  );
}

// ── Snippet block ─────────────────────────────────────────────────────────────

function Snippet({ title, id, description, lang, code, tags }: SnippetProps) {
  return (
    <div id={id} className="group scroll-mt-24">
      <div className="flex items-start justify-between gap-3 mb-2">
        <div>
          <h3 className="text-[15px] font-semibold text-foreground leading-snug">
            {title}
          </h3>
          {description && (
            <p className="text-[13px] text-muted-foreground mt-0.5 leading-relaxed">
              {description}
            </p>
          )}
        </div>
        <div className="flex items-center gap-2 shrink-0 mt-0.5">
          {tags?.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-[11px] px-2 py-0.5 rounded-md hidden sm:inline-flex"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Code block */}
      <div className="rounded-xl border border-border bg-muted/40 overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-border">
          <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">
            {lang}
          </span>
          <CopyButton code={code} />
        </div>
        <pre className="px-4 py-4 overflow-x-auto scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
          <code className="text-[12.5px] leading-relaxed text-foreground/80 font-mono whitespace-pre">
            {code}
          </code>
        </pre>
      </div>
    </div>
  );
}

// ── Note / callout ────────────────────────────────────────────────────────────

function Note({ children, title = "Note" }: NoteProps) {
  return (
    <div className="flex gap-3 px-4 py-3.5 rounded-xl border border-border bg-muted/30 my-4">
      <Info size={15} className="text-muted-foreground mt-0.5 shrink-0" />
      <div>
        <p className="text-[12px] font-semibold text-foreground mb-0.5">
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
        <h2 className="text-xl font-bold tracking-tight text-foreground">
          {title}
        </h2>
        <div className="flex-1 h-px bg-border" />
      </div>
      <div className="space-y-8">{children}</div>
    </section>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function GitReferencePage() {
  return (
    <main className="pb-24">

      {/* ── Page header ── */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-xl border border-border bg-muted flex items-center justify-center text-base select-none">
            🌿
          </div>
          <Badge variant="secondary" className="text-[11px] px-2.5 py-0.5 rounded-md">
            DevOps
          </Badge>
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-foreground leading-tight mb-3">
          Git
        </h1>
        <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mb-6">
          A complete reference for Git — from first-time setup to advanced
          branching, history rewriting, and remote workflows. Every command
          includes a ready-to-copy snippet.
        </p>

        {/* Meta strip */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <BookOpen size={12} />
            <span>12 sections</span>
          </div>
          <Separator orientation="vertical" className="h-3.5" />
          <div className="flex items-center gap-1.5">
            <GitBranch size={12} />
            <span>35+ snippets</span>
          </div>
          <Separator orientation="vertical" className="h-3.5" />
          <span>bash / shell</span>
        </div>
      </div>

      <div className="space-y-16">

        {/* ── 1. Introduction ── */}
        <Section id="introduction" title="Introduction">
          <p className="text-[14px] text-muted-foreground leading-relaxed">
            Git is a free and open-source distributed version control system
            designed to handle everything from small to very large projects with
            speed and efficiency. Unlike centralised systems, every developer
            has a full copy of the repository — including its entire history —
            locally on their machine.
          </p>
          <Note title="Version used in this reference">
            All commands are compatible with Git 2.30+. Some flags (e.g.{" "}
            <code className="font-mono text-[12px] bg-muted px-1 py-0.5 rounded">
              git switch
            </code>
            ) were introduced in Git 2.23. Run{" "}
            <code className="font-mono text-[12px] bg-muted px-1 py-0.5 rounded">
              git --version
            </code>{" "}
            to confirm your installed version.
          </Note>
        </Section>

        {/* ── 2. Setup & configuration ── */}
        <Section id="setup-and-configuration" title="Setup and configuration">
          <Snippet
            id="check-git-version"
            title="Check Git version"
            description="Confirm Git is installed and see which version you're running."
            lang="bash"
            code={`git --version
# git version 2.43.0`}
            tags={["setup"]}
          />
          <Snippet
            id="configure-username"
            title="Configure username"
            description="Set the name that will be attached to every commit you make."
            lang="bash"
            code={`# Set globally (all repos on this machine)
git config --global user.name "Your Name"

# Set for current repo only
git config user.name "Your Name"`}
            tags={["config"]}
          />
          <Snippet
            id="configure-email"
            title="Configure email"
            description="Set the email address that appears in your commits."
            lang="bash"
            code={`git config --global user.email "you@example.com"`}
            tags={["config"]}
          />
          <Snippet
            id="view-configuration"
            title="View configuration"
            description="List all active config values and where they're coming from."
            lang="bash"
            code={`# List all settings with their origin file
git config --list --show-origin

# Show a specific value
git config user.email`}
            tags={["config"]}
          />
          <Snippet
            id="set-default-branch"
            title="Set default branch"
            description="Configure the default branch name for new repositories (replaces the old 'master' default)."
            lang="bash"
            code={`git config --global init.defaultBranch main`}
            tags={["config"]}
          />
        </Section>

        {/* ── 3. Repository initialization ── */}
        <Section id="repository-initialization" title="Repository initialization">
          <Snippet
            id="git-init"
            title="git init"
            description="Create a brand-new empty repository in the current directory."
            lang="bash"
            code={`# Init in current directory
git init

# Init with a specific directory name
git init my-project

# Init with explicit default branch name
git init -b main`}
            tags={["init"]}
          />
          <Snippet
            id="git-clone"
            title="git clone"
            description="Download a remote repository and its full history to your machine."
            lang="bash"
            code={`# Clone with HTTPS
git clone https://github.com/user/repo.git

# Clone into a custom directory name
git clone https://github.com/user/repo.git my-folder

# Shallow clone — last N commits only (faster for large repos)
git clone --depth 1 https://github.com/user/repo.git

# Clone a specific branch
git clone -b develop https://github.com/user/repo.git`}
            tags={["clone"]}
          />
          <Note>
            Shallow clones (<code className="font-mono text-[12px] bg-muted px-1 py-0.5 rounded">--depth 1</code>) are great for CI pipelines where you only need the latest snapshot, not the full history.
          </Note>
        </Section>

        {/* ── 4. Basic workflow ── */}
        <Section id="basic-workflow" title="Basic workflow">
          <Snippet
            id="git-status"
            title="git status"
            description="Show the working tree status — which files are staged, unstaged, or untracked."
            lang="bash"
            code={`git status

# Compact output — one line per file
git status -s`}
            tags={["workflow"]}
          />
          <Snippet
            id="git-add"
            title="git add"
            description="Stage changes to be included in the next commit."
            lang="bash"
            code={`# Stage a specific file
git add src/index.ts

# Stage all changes in current directory (tracked + untracked)
git add .

# Stage only tracked files (skip untracked)
git add -u

# Interactively choose which hunks to stage
git add -p`}
            tags={["workflow", "staging"]}
          />
          <Snippet
            id="git-commit"
            title="git commit"
            description="Record staged changes as a new commit in the repository history."
            lang="bash"
            code={`# Commit with a message
git commit -m "feat: add user authentication"

# Stage all tracked files and commit in one step
git commit -am "fix: correct typo in README"

# Amend the last commit (message or staged changes)
git commit --amend --no-edit`}
            tags={["workflow", "commit"]}
          />
          <Note title="Conventional commits">
            Using a prefix like <code className="font-mono text-[12px] bg-muted px-1 py-0.5 rounded">feat:</code>, <code className="font-mono text-[12px] bg-muted px-1 py-0.5 rounded">fix:</code>, or <code className="font-mono text-[12px] bg-muted px-1 py-0.5 rounded">chore:</code> in commit messages follows the Conventional Commits spec and enables automatic changelog generation with tools like semantic-release.
          </Note>
        </Section>

        {/* ── 5. Viewing history ── */}
        <Section id="viewing-history" title="Viewing history">
          <Snippet
            id="git-log"
            title="git log"
            description="Browse the commit history. The oneline and graph variants are most useful day-to-day."
            lang="bash"
            code={`# Default log
git log

# Compact one-line-per-commit
git log --oneline

# Graph view with branch structure
git log --oneline --graph --decorate --all

# Log with diff stats
git log --stat

# Filter by author
git log --author="Alice"

# Filter by date range
git log --after="2024-01-01" --before="2024-06-01"

# Search commit messages
git log --grep="payment"`}
            tags={["history"]}
          />
          <Snippet
            id="git-diff"
            title="git diff"
            description="Show changes between commits, the index, and the working tree."
            lang="bash"
            code={`# Unstaged changes (working tree vs index)
git diff

# Staged changes (index vs last commit)
git diff --staged

# Diff between two commits
git diff abc123 def456

# Diff between two branches
git diff main..feature/login

# Show only filenames that changed
git diff --name-only main..HEAD`}
            tags={["history", "diff"]}
          />
          <Snippet
            id="git-show"
            title="git show"
            description="Display the contents of a commit — its message, author, and full diff."
            lang="bash"
            code={`# Show latest commit
git show

# Show a specific commit
git show abc1234

# Show only the file names changed in a commit
git show --name-only abc1234

# Show a specific file at a commit
git show abc1234:src/index.ts`}
            tags={["history"]}
          />
        </Section>

        {/* ── 6. Branching ── */}
        <Section id="branching" title="Branching">
          <Snippet
            id="git-branch"
            title="git branch"
            description="List, create, rename, or delete branches."
            lang="bash"
            code={`# List local branches
git branch

# List all branches including remotes
git branch -a

# Rename current branch
git branch -m new-name

# List branches with last commit info
git branch -v`}
            tags={["branch"]}
          />
          <Snippet
            id="git-switch"
            title="git switch"
            description="The modern way to change branches (Git 2.23+). Prefer this over git checkout for branch operations."
            lang="bash"
            code={`# Switch to an existing branch
git switch main

# Switch and create if it doesn't exist
git switch -c feature/dark-mode

# Switch back to the previous branch
git switch -`}
            tags={["branch"]}
          />
          <Snippet
            id="git-checkout"
            title="git checkout"
            description="The older multi-purpose command for switching branches and restoring files."
            lang="bash"
            code={`# Switch to a branch
git checkout main

# Create and switch in one step
git checkout -b feature/login

# Restore a file to its state at last commit (discard changes)
git checkout -- src/index.ts`}
            tags={["branch", "legacy"]}
          />
          <Snippet
            id="create-branch"
            title="Create branch"
            description="Create a new branch from the current HEAD or from a specific commit."
            lang="bash"
            code={`# Create from current HEAD
git switch -c feature/payments

# Create from a specific branch
git switch -c hotfix/typo origin/main

# Create from a specific commit hash
git switch -c debug-branch abc1234`}
            tags={["branch"]}
          />
          <Snippet
            id="delete-branch"
            title="Delete branch"
            description="Remove a branch locally and/or from the remote."
            lang="bash"
            code={`# Delete local branch (safe — only if fully merged)
git branch -d feature/login

# Force-delete local branch (even if unmerged)
git branch -D feature/experiment

# Delete remote branch
git push origin --delete feature/login

# Prune remote-tracking references that no longer exist
git remote prune origin`}
            tags={["branch", "cleanup"]}
          />
        </Section>

        {/* ── 7. Merging ── */}
        <Section id="merging" title="Merging">
          <Snippet
            id="git-merge"
            title="git merge"
            description="Integrate changes from one branch into another."
            lang="bash"
            code={`# Merge feature branch into current branch
git merge feature/login

# Merge without fast-forward (always creates a merge commit)
git merge --no-ff feature/login

# Squash all commits into a single commit (then commit manually)
git merge --squash feature/login
git commit -m "feat: add login feature"

# Abort a merge in progress
git merge --abort`}
            tags={["merge"]}
          />
          <Note title="Merge vs rebase">
            Use <code className="font-mono text-[12px] bg-muted px-1 py-0.5 rounded">--no-ff</code> merges when you want to preserve the feature branch boundary in history. Use rebase to get a linear history before merging — especially useful before opening a pull request.
          </Note>
        </Section>

        {/* ── 8. Remote repositories ── */}
        <Section id="remote-repositories" title="Remote repositories">
          <Snippet
            id="git-remote"
            title="git remote"
            description="Manage connections to remote repositories."
            lang="bash"
            code={`# List remotes
git remote -v

# Add a new remote
git remote add origin https://github.com/user/repo.git

# Change the URL of an existing remote
git remote set-url origin https://github.com/user/new-repo.git

# Remove a remote
git remote remove origin`}
            tags={["remote"]}
          />
          <Snippet
            id="git-push"
            title="git push"
            description="Upload local branch commits to the remote repository."
            lang="bash"
            code={`# Push current branch to its upstream
git push

# Push and set upstream tracking in one step
git push -u origin feature/login

# Force push (use with caution — rewrites remote history)
git push --force-with-lease

# Push all local tags to remote
git push --tags`}
            tags={["remote", "push"]}
          />
          <Snippet
            id="git-pull"
            title="git pull"
            description="Fetch from remote and integrate into the current branch."
            lang="bash"
            code={`# Pull with merge (default)
git pull

# Pull with rebase instead of merge
git pull --rebase

# Set rebase as the default pull strategy globally
git config --global pull.rebase true`}
            tags={["remote", "pull"]}
          />
          <Snippet
            id="git-fetch"
            title="git fetch"
            description="Download remote changes without merging them into your working branch."
            lang="bash"
            code={`# Fetch all remotes
git fetch

# Fetch a specific remote
git fetch origin

# Fetch and prune deleted remote branches
git fetch --prune

# Fetch a specific branch
git fetch origin main`}
            tags={["remote", "fetch"]}
          />
          <Note>
            Prefer <code className="font-mono text-[12px] bg-muted px-1 py-0.5 rounded">git fetch</code> + <code className="font-mono text-[12px] bg-muted px-1 py-0.5 rounded">git merge</code> over <code className="font-mono text-[12px] bg-muted px-1 py-0.5 rounded">git pull</code> when you want to review incoming changes before integrating them. Use <code className="font-mono text-[12px] bg-muted px-1 py-0.5 rounded">git log origin/main..HEAD</code> to see what's different.
          </Note>
        </Section>

        {/* ── 9. Undoing changes ── */}
        <Section id="undoing-changes" title="Undoing changes">
          <Snippet
            id="git-restore"
            title="git restore"
            description="Discard changes in the working tree or unstage files (Git 2.23+)."
            lang="bash"
            code={`# Discard unstaged changes in a file
git restore src/index.ts

# Discard all unstaged changes
git restore .

# Unstage a file (remove from index, keep working tree changes)
git restore --staged src/index.ts

# Restore a file to its state at a specific commit
git restore --source=HEAD~2 src/index.ts`}
            tags={["undo"]}
          />
          <Snippet
            id="git-reset"
            title="git reset"
            description="Move HEAD to a previous commit, optionally changing the index and working tree."
            lang="bash"
            code={`# Undo last commit — keep changes staged
git reset --soft HEAD~1

# Undo last commit — unstage changes but keep them in working tree
git reset HEAD~1

# Undo last commit — discard all changes (destructive)
git reset --hard HEAD~1

# Unstage a specific file
git reset HEAD src/index.ts`}
            tags={["undo", "reset"]}
          />
          <Snippet
            id="git-revert"
            title="git revert"
            description="Create a new commit that undoes a previous commit. Safe for shared/public branches."
            lang="bash"
            code={`# Revert the last commit
git revert HEAD

# Revert a specific commit by hash
git revert abc1234

# Revert without auto-committing (stage only)
git revert --no-commit abc1234`}
            tags={["undo", "safe"]}
          />
          <Note title="reset vs revert">
            Use <code className="font-mono text-[12px] bg-muted px-1 py-0.5 rounded">git reset</code> only on commits that haven't been pushed. Once commits are on a shared remote, use <code className="font-mono text-[12px] bg-muted px-1 py-0.5 rounded">git revert</code> — it adds a new commit instead of rewriting history, which is safe for teammates.
          </Note>
        </Section>

        {/* ── 10. Stashing ── */}
        <Section id="stashing" title="Stashing">
          <Snippet
            id="git-stash"
            title="git stash"
            description="Temporarily shelve changes so you can switch context without committing."
            lang="bash"
            code={`# Stash tracked changes
git stash

# Stash with a descriptive message
git stash push -m "WIP: payment form validation"

# Include untracked files in the stash
git stash push -u -m "WIP: new feature"

# List all stashes
git stash list`}
            tags={["stash"]}
          />
          <Snippet
            id="apply-stash"
            title="Apply stash"
            description="Restore stashed changes back to the working tree."
            lang="bash"
            code={`# Apply most recent stash (keep it in the stash list)
git stash apply

# Apply and remove from stash list
git stash pop

# Apply a specific stash by index
git stash apply stash@{2}

# Show what's in a stash before applying
git stash show -p stash@{1}`}
            tags={["stash"]}
          />
          <Snippet
            id="delete-stash"
            title="Delete stash"
            description="Remove stash entries you no longer need."
            lang="bash"
            code={`# Drop a specific stash
git stash drop stash@{0}

# Clear all stashes
git stash clear`}
            tags={["stash", "cleanup"]}
          />
        </Section>

        {/* ── 11. Tags ── */}
        <Section id="tags" title="Tags">
          <Snippet
            id="create-tag"
            title="Create tag"
            description="Mark a specific commit with a version label. Annotated tags are preferred for releases."
            lang="bash"
            code={`# Lightweight tag (just a pointer to a commit)
git tag v1.0.0

# Annotated tag (recommended — stores tagger, date, and message)
git tag -a v1.0.0 -m "Release version 1.0.0"

# Tag a specific commit by hash
git tag -a v1.0.0 abc1234 -m "Release version 1.0.0"`}
            tags={["tags", "release"]}
          />
          <Snippet
            id="list-tags"
            title="List tags"
            description="View all tags in the repository, optionally filtered by pattern."
            lang="bash"
            code={`# List all tags
git tag

# List tags matching a pattern
git tag -l "v1.*"

# Show the commit a tag points to
git show v1.0.0`}
            tags={["tags"]}
          />
          <Snippet
            id="push-tags"
            title="Push tags"
            description="Tags are not pushed automatically — you need to push them explicitly."
            lang="bash"
            code={`# Push a specific tag
git push origin v1.0.0

# Push all local tags
git push --tags

# Delete a remote tag
git push origin --delete v1.0.0-beta`}
            tags={["tags", "remote"]}
          />
        </Section>

        {/* ── 12. Helpful commands ── */}
        <Section id="helpful-commands" title="Helpful commands">
          <Snippet
            id="helpful-blame"
            title="git blame — find who changed a line"
            description="See which commit and author last modified each line of a file."
            lang="bash"
            code={`# Blame an entire file
git blame src/auth.ts

# Blame a specific line range
git blame -L 40,60 src/auth.ts

# Ignore whitespace changes
git blame -w src/auth.ts`}
            tags={["debug"]}
          />
          <Snippet
            id="helpful-bisect"
            title="git bisect — binary search for a bug"
            description="Find the exact commit that introduced a bug using binary search."
            lang="bash"
            code={`# Start bisect session
git bisect start

# Mark current commit as bad
git bisect bad

# Mark a known-good commit
git bisect good v1.0.0

# Git checks out the middle commit — test it, then mark:
git bisect good  # or
git bisect bad

# Finish and return to original HEAD
git bisect reset`}
            tags={["debug"]}
          />
          <Snippet
            id="helpful-cherry-pick"
            title="git cherry-pick — apply a single commit"
            description="Apply the changes from a specific commit onto the current branch."
            lang="bash"
            code={`# Apply a single commit
git cherry-pick abc1234

# Apply a range of commits
git cherry-pick abc1234^..def5678

# Cherry-pick without committing (stage only)
git cherry-pick --no-commit abc1234`}
            tags={["advanced"]}
          />
          <Snippet
            id="helpful-rebase"
            title="git rebase — rewrite history"
            description="Move or combine commits onto a new base. Keep your branch up to date with main without merge commits."
            lang="bash"
            code={`# Rebase current branch onto main
git rebase main

# Interactive rebase — squash, reorder, or reword last N commits
git rebase -i HEAD~4

# Continue after resolving conflicts
git rebase --continue

# Abort and return to original state
git rebase --abort`}
            tags={["advanced", "history"]}
          />
          <Snippet
            id="helpful-reflog"
            title="git reflog — the undo safety net"
            description="View every HEAD movement — your last resort when you think you've lost commits."
            lang="bash"
            code={`# Show reflog
git reflog

# Restore to a previous state from reflog
git reset --hard HEAD@{3}

# Create a branch from a reflog entry (recover lost commits)
git switch -c recovered HEAD@{5}`}
            tags={["recovery", "advanced"]}
          />
          <Note title="Reflog is local only">
            The reflog records every position HEAD has been at — even after resets and rebases. It's only stored locally, not pushed to remotes, and entries expire after 90 days by default.
          </Note>
        </Section>

      </div>
    </main>
  );
}
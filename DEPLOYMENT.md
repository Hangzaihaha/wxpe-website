# WXPE Website Deployment Guide

This project is a Next.js website prepared for deployment on Vercel through GitHub.

## Current Build Status

The project was verified locally with:

```powershell
pnpm build
```

Result: the production build completed successfully.

## Recommended Deployment Path

Use GitHub as the source repository and Vercel as the deployment platform.

Vercel automatically creates deployments from Git pushes. The `main` branch should be used as the production branch.

## Create a GitHub Repository

1. Go to https://github.com/new.
2. Repository name suggestion: `wxpe-website`.
3. Choose either `Public` or `Private`.
4. Do not add a README, `.gitignore`, or license on GitHub because this project already has local files.
5. Click `Create repository`.
6. Copy the repository URL. It will look like one of these:

```text
https://github.com/YOUR_USERNAME/wxpe-website.git
git@github.com:YOUR_USERNAME/wxpe-website.git
```

## Push This Project To GitHub

From this project directory:

```powershell
cd "C:\Users\henry\Documents\Codex\2026-06-25\you-are-a-world-class-web"
git remote add origin https://github.com/YOUR_USERNAME/wxpe-website.git
git branch -M main
git push -u origin main
```

If `origin` already exists, update it:

```powershell
git remote set-url origin https://github.com/YOUR_USERNAME/wxpe-website.git
git push -u origin main
```

## Connect GitHub To Vercel

1. Go to https://vercel.com/new.
2. Sign in with GitHub or connect your GitHub account to Vercel.
3. Import the `wxpe-website` repository.
4. Use these settings:

```text
Framework Preset: Next.js
Root Directory: ./
Install Command: pnpm install
Build Command: pnpm build
Output Directory: leave empty / default
Environment Variables: none required for this prototype
```

5. Click `Deploy`.
6. After the deployment completes, Vercel will show a public URL ending in `.vercel.app`.

Do not connect a custom domain yet.

## Update The Website Later

After the GitHub repository is connected to Vercel:

1. Edit the site locally.
2. Run checks:

```powershell
pnpm lint
pnpm typecheck
pnpm build
```

3. Commit and push:

```powershell
git add .
git commit -m "Update WXPE website"
git push
```

4. Vercel will automatically create a new deployment from the push.

## Why This Removes The Localhost Problem

`localhost` only works on the machine running the dev server. A Vercel deployment creates a public hosted URL that can be opened from any device without starting a local server.

## Useful Official Docs

- Vercel Git deployments: https://vercel.com/docs/git
- GitHub create repository: https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository
- GitHub remote repositories: https://docs.github.com/en/get-started/git-basics/managing-remote-repositories

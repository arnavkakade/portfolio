# Arnav Kakade — Portfolio

Premium interactive portfolio built with **React + TypeScript + Vite**.

## 🚀 Quick Deploy to GitHub Pages

### Step 1: Create the GitHub repo

1. Go to [github.com/new](https://github.com/new)
2. Name it: `portfolio` (or any name you like)
3. Set it to **Public**
4. **Don't** initialize with README (we'll push our own)
5. Click **Create repository**

### Step 2: Push the code with two branches (main + dev)

Open your terminal and run these commands:

```bash
# Navigate into the project folder
cd portfolio

# Initialize git
git init
git add .
git commit -m "feat: initial portfolio setup"

# Create main branch and push
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main

# Create dev branch from main and push
git checkout -b dev
git push -u origin dev

# Switch back to main
git checkout main
```

> **Replace `YOUR_USERNAME`** with your actual GitHub username.

### Step 3: Enable GitHub Pages

1. Go to your repo on GitHub → **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. That's it! The workflow will auto-deploy on every push to `main`

### Step 4: Wait & visit your live site

- The deploy will run automatically (takes ~1-2 minutes)
- Check progress in the **Actions** tab
- Your site will be live at: `https://YOUR_USERNAME.github.io/portfolio/`

---

## 🔀 Branch Workflow

| Branch | Purpose |
|--------|---------|
| `main` | Production — auto-deploys to GitHub Pages |
| `dev`  | Development — work on new features here |

### How to develop:

```bash
# Switch to dev branch
git checkout dev

# Make changes...
# Then commit and push
git add .
git commit -m "feat: add new project"
git push

# When ready to deploy, merge dev → main
git checkout main
git merge dev
git push
# → GitHub Actions will auto-deploy!
```

---

## 🛠 Local Development

```bash
npm install
npm run dev     # starts dev server at http://localhost:5173
npm run build   # production build
npm run preview # preview production build
```

## 📁 Project Structure

```
portfolio/
├── .github/workflows/deploy.yml  ← Auto-deploy on push to main
├── public/
│   └── Arnav_Kakade_Resume.pdf   ← Your resume (downloadable)
├── src/
│   ├── App.tsx                   ← Full portfolio component
│   ├── main.tsx                  ← React entry point
│   └── index.css                 ← Global styles
├── index.html                    ← HTML entry
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## ✏️ How to Update Content

All content is in `src/App.tsx` — edit the data objects at the top:

- **`skills`** → Add/remove/reorder skills and levels
- **`projects`** → Add new project cards
- **`experience`** → Update work timeline
- **`certifications`** → Add new certs
- **`achievements`** → Update metrics

After editing, commit to `dev`, test locally, then merge to `main` to deploy.

## 📄 Update Resume

Replace `public/Arnav_Kakade_Resume.pdf` with your latest resume file (keep the same filename).

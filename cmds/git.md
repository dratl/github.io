# Create a New React App and Push to GitHub

## Create React App (CRA)

Run the following command in your terminal to create a new React app:

```bash
npx create-react-app my-react-app
```

## Create a New Repository on GitHub

1. Go to [GitHub](https://github.com) and create a new repository.

## Push Project Code to GitHub

Navigate to your project directory and run the following commands:

```bash
cd my-react-app
git remote add origin https://github.com/username/my-react-app.git
git branch -M main
git push -u origin main
```

## Creates a new branch.

```bash

git branch new_branch

```

## Used to switch from one branch to another.

```bash

git checkout branch_name

```

## Lists all a Git project’s branches.

```bash

git branch

```

## Add files to stagin area

```bash

git add filename.txt

```

## Commit changes

```bash

git commit -m "Commit message"

```

## Used to join file changes from one branch to another (first change to main branch).

```bash

git merge branch_name

```

## Deletes the branch specified.

```bash

git branch -d branch_name

```

## List remote repositories

```bash

git remote -v

```

## Clone remote repository

```bash

git clone remote_location clone_name

```

## See remote changes

```bash

git fetch

```

## Merge remote changes

```bash

git merge origin/master

```

## Push to remote

```bash

git push origin my_branch_name

```
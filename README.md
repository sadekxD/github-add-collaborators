This project is a Node.js application that interacts with the GitHub API to add collaborators in an organization repo

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/sadekxd/github-add-collaborators.git

2. Install dependencies

   ```bash
   npm install

3. Create a .env file in the root directory of your project and add the following environment variables:
   ```bash
   GITHUB_ACCESS_TOKEN=your_access_token_here
   GITHUB_ORG_NAME=your_org_name_here
   GITHUB_REPO_NAME=your_repo_name_here
   ACCESSLEVEL=your_access_level_here

4. Run the code
   ```bash
   node index.js

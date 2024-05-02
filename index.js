import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

// Set the necessary variables
const ACCESS_TOKEN = process.env.GITHUB_ACCESS_TOKEN;
const ORG_NAME = process.env.GITHUB_ORG_NAME;
const REPO_NAME = process.env.GITHUB_REPO_NAME;
const ACCESS_LEVEL = process.env.ACCESSLEVEL;

// Set the headers with your personal access token
const headers = {
  Authorization: `Bearer ${ACCESS_TOKEN}`,
};

// Set the payload with the desired access level
const payload = {
  permission: ACCESS_LEVEL,
};

// Send the PUT request to add the member
const addCollaborator = async (username) => {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${ORG_NAME}/${REPO_NAME}/collaborators/${username}`,
      {
        method: "PUT",
        headers,
        body: JSON.stringify(payload),
      }
    );
    const data = await response.json();
    console.log("Member added successfully.", data);
  } catch (error) {
    console.error("Failed to add member:", error.response.data.message);
  }
};

(async () => {
  await addCollaborator("<username>");
})();

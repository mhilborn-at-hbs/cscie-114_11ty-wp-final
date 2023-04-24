require('dotenv').config();
const EleventyFetch = require("@11ty/eleventy-fetch");

// Set up constants used in the GitHub action request
const gitHubEndpoint = process.env.GITHUB_ENDPOINT; 
const fetchOptions   = {
    "method":  "POST",
    "body":    '{ "event_type": "wordpress" }',
    "headers": {
        "Accept": "application/vnd.github+json",
        "Authorization": `token ${process.env.GITHUB_AUTHZ}`
    }
}

exports.handler = async (event, context) => {
  let json = {
    endpoint: gitHubEndpoint,
    authz: process.env.GITHUB_AUTHZ    
  };
  
  return {
    statusCode: 200,
    body: JSON.stringify(json)
  };
}
/*
exports.handler = async (event, context) => {
    let json = {};
    try {
        console.log(`Fetching URL: ${gitHubEndpoint}`);
        let response = await fetch(gitHubEndpoint, fetchOptions);
        json         = await response.json();

    } catch (err) {
        console.log("Error in wordpress-deploy.js fetch: " + err);
    };
    
    return {
      statusCode: 200,
      body: JSON.stringify(json)
    };
}

*/
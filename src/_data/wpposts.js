require('dotenv').config();
const EleventyFetch = require("@11ty/eleventy-fetch");

// Define all the constants that we will use in our requests
const wpEndPoint     = process.env.WP_ENDPOINT;
const cacheDuration  = "1d";
const dataType       = "json";
const orderBy        = "date";
const order          = "desc";

// Use the below constants to define fetch options
const eleventyFetchOptions = {
    "duration": cacheDuration,
    "type": dataType,

};

// Query blog posts
module.exports = async function() {

    // Let's construct our query
    let queryParamsObj = new URLSearchParams({
        orderby: orderBy,
        order: order
    });
    let queryParams    = queryParamsObj.toString();
    let url            = `${wpEndPoint}?${queryParams}`;
    let fetchData      = {};
        
    try {
        // Fetch the query, which should be a JSON string
        console.log(`Fetching URL: '${url}'`);
        fetchData = await EleventyFetch(url, eleventyFetchOptions);
        
    } catch (err) {
            console.log("Sadly, an error in Fetch occurred: " + err);
    }
    return fetchData;
};


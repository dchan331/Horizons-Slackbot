const axios = require('axios');
const aiConfig = require('../config/ai');
const api_ai = axios.create({
  baseURL: aiConfig.API_URL_BASE,
  headers: {'Authorization': 'Bearer ' + aiConfig.DEV_ACCESS_TOKEN}
});

function generateQueryString(query, id) {
    return '/query?v=20150910&lang=en&sessionId=' + id + '&query=' + encodeURIComponent(query);
}

function sendQuery(query, id) {
    return api_ai.get(generateQueryString(query, id))
}
    
module.exports = {
    sendQuery
}
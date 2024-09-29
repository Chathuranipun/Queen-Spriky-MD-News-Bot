const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'KFFmgKDB#PfHWRuzJ6v3WMJsI6CTp-cpl1ki5yECz4UEwk4vLoBo', // Enter Your Session ID
    MONGODB: process.env.MONGODB || 'https://cloud.mongodb.com/v2#/org/66f962440886094f0a4ef346/projects',    // Enter Your MongoDB URL
    Owner: process.env.OwnerNumber || '94784760582',    // Enter Your Owner Number
    BotNumber: process.env.BotNumber || '94784760582'    // Enter Your Bot Number
};

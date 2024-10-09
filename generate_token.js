const fs = require('fs');
const readline = require('readline');
const { google } = require('googleapis');

const SCOPES = ['https://www.googleapis.com/auth/gmail.send'];

const credentials = JSON.parse(fs.readFileSync('credentials.json'));
const { client_secret, client_id, redirect_uris } = credentials.installed;
const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getNewToken(oauth2Client, callback) {
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oauth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error retrieving access token', err);
      oauth2Client.setCredentials(token);
      fs.writeFileSync('token.json', JSON.stringify(token));
      console.log('Token stored to token.json');
      callback(oauth2Client);
    });
  });
}

getNewToken(oAuth2Client, () => {
  console.log('Token generated successfully');
  process.exit(0);
});
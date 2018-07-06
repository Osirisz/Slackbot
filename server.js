const { WebClient } = require('@slack/client');

// Go to https://api.slack.com/custom-integrations/legacy-tokens and generate token
const token = "tokennnnn";
const web = new WebClient(token);

//Go to slack and copy link from channel
const conversationId = 'linkkkk';

module.exports = function (result) {
  web.chat.postMessage({
    channel: conversationId,
    "text": "Title this message.",
    "attachments": [
      {
        "color": "#36a64f",
        "title": "title in attacment",
        "text": "Text1\nText2",
      }
    ]
    , username: 'Name bot', icon_url: 'avatar url'
  })
    .then((res) => {
      console.log('Message sent: ', res.ts);
    })
    .catch(console.error);
}

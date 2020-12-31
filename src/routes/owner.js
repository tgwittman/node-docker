const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.status(200).json({
    "login": "tgwittman",
    "id": 47235082,
    "node_id": "MDQ6VXNlcjQ3MjM1MDgy",
    "avatar_url": "https://avatars1.githubusercontent.com/u/47235082?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/tgwittman",
    "html_url": "https://github.com/tgwittman",
    "followers_url": "https://api.github.com/users/tgwittman/followers",
    "following_url": "https://api.github.com/users/tgwittman/following{/other_user}",
    "gists_url": "https://api.github.com/users/tgwittman/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/tgwittman/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/tgwittman/subscriptions",
    "organizations_url": "https://api.github.com/users/tgwittman/orgs",
    "repos_url": "https://api.github.com/users/tgwittman/repos",
    "events_url": "https://api.github.com/users/tgwittman/events{/privacy}",
    "received_events_url": "https://api.github.com/users/tgwittman/received_events",
    "type": "User",
    "site_admin": false
  });
});

module.exports = router;

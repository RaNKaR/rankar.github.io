var frisby = require('frisby');
frisby.create('Twitter API v1 does not work.')
  .get('https://api.twitter.com/1/statuses/user_timeline.json?screen_name=brightbit')
  .expectStatus(410)
  .expectHeaderContains('content-type', 'application/json')
  .inspectBody()
  .toss();
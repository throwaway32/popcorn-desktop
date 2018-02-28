const chromecasts = require('chromecasts')()

chromecasts.update();
chromecasts.on('update', function (player) {
  console.log('Found Chromecast Device Device: %s at %s', player.name, player.host);
})

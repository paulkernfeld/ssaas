var urls = [
  "http://getaddr.bitnodes.io/",
  "http://aworldoftweets.frogdesign.com/",
  "http://www.tweetping.net/",
  "http://hint.fm/wind/",
  "http://map.honeycloud.net/",
  "http://earth.nullschool.net/",
  "http://world.deviantart.com/",
  "http://bostonography.com/bus/",
  "http://www.akamai.com/html/technology/dataviz1.html",
  "http://bitcoinity.org/markets",
  "http://www.listentobitcoin.com/",
  "http://www.google.com/trends/hottrends/visualize?nrow=5&ncol=5",
  "https://map.zkillboard.com/"
];

setTimeout(function() {
  window.location = urls[Math.floor(Math.random() * urls.length)];
}, 1000);


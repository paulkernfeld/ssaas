var urls = [
  "http://getaddr.bitnodes.io/"
  , "http://aworldoftweets.frogdesign.com/"
  , "http://www.tweetping.net/"
  , "http://hint.fm/wind/"
  , "http://earth.nullschool.net/"
  , "http://world.deviantart.com/"
  , "http://bostonography.com/bus/"
  , "http://www.akamai.com/html/technology/dataviz1.html"
  , "http://bitcoinity.org/markets"
  , "http://www.listentobitcoin.com/"
  , "http://www.google.com/trends/hottrends/visualize?nrow=5&ncol=5"
  , "https://map.zkillboard.com/"
  , "http://brandonreiss.com/noweats/"
  , "http://forecast.io/#/f/40.7369,-73.9935"
  , "http://wwwnui.akamai.com/gnet/globe/index.html"
  , "http://www.blitzortung.org/Webpages/index.php?lang=en"
  , "http://www.lightningmaps.org/blitzortung/america/index.php?lang=en"
];

setTimeout(function() {
  window.location = urls[Math.floor(Math.random() * urls.length)];
}, 5000);


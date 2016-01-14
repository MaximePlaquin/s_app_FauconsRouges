/* Portefolio Instafeed */
var feed = new Instafeed({
  clientId: '467ede5a6b9b48ae8e03f4e2582aeeb3',
  limit: 8,
  get: 'tagged',
  sortBy: 'most-liked',
  tagName: 'beer',
  template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /></a>'
});
feed.run();

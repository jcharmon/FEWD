var feed = new Instafeed({
  get: 'user',
  userId: 223499723,
  clientId: "4557797146124a19875aa7159e2810c6",
  accessToken: '19721316.4557797.b809c68a1c184fcb83ce134e1b9f7aae',
  //filter: function(image) {
    //return image.tags.indexOf('TAG_NAME') >= 0;
  //}
});
feed.run();

console.log(feed.filter);

import template from './app.html';

export default {
  template,
  controllerAs: 'app',

  controller: function() {

    this.images = [
      {
        title: 'Gojira',
        url: 'http://images1.westword.com/imager/u/745xauto/7214738/godzilla_fixed.jpg',
        description: 'The King of all monsters. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium, purus nec ornare viverra, velit ipsum elementum orci, a tristique massa metus ut est. Ut tortor ante, consectetur vitae fringilla non, sagittis ut elit. In efficitur a neque a placerat. Sed sit amet gravida ex. Aliquam laoreet purus nisi, nec congue tortor viverra in. Ut in metus et sem auctor semper nec at ex. Aliquam posuere lectus urna, quis cursus quam sagittis sagittis. Mauris luctus nec erat at tempus. Phasellus placerat turpis ornare magna lacinia, egestas euismod ligula pellentesque. Duis pellentesque velit at odio blandit rutrum. Etiam quis ultricies orci, eget facilisis lacus. Quisque blandit sem at ligula accumsan luctus. Nulla dignissim massa eros, ut pellentesque quam bibendum id. Tiam diam augue, placerat a eros vulputate, vehicula convallis lectus. Quisque luctus, nunc quis posuere pellentesque, odio purus elementum eros, sed tempus augue sem sit amet quam. Sed tristique, purus sit amet pretium laoreet, nisl ante malesuada nisl, quis elementum odio lectus eget diam.'
      },
      {
        title: 'Godzilla',
        url: 'http://www.flickeringmyth.com/wp-content/uploads/2016/05/godzilla-film-2014-790x444.jpg',
        description: 'The American king of all monsters. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium, purus nec ornare viverra, velit ipsum elementum orci, a tristique massa metus ut est. Ut tortor ante, consectetur vitae fringilla non, sagittis ut elit. In efficitur a neque a placerat. Sed sit amet gravida ex. Aliquam laoreet purus nisi, nec congue tortor viverra in. Ut in metus et sem auctor semper nec at ex. Aliquam posuere lectus urna, quis cursus quam sagittis sagittis. Mauris luctus nec erat at tempus. Phasellus placerat turpis ornare magna lacinia, egestas euismod ligula pellentesque. Duis pellentesque velit at odio blandit rutrum. Etiam quis ultricies orci, eget facilisis lacus. Quisque blandit sem at ligula accumsan luctus. Nulla dignissim massa eros, ut pellentesque quam bibendum id. Tiam diam augue, placerat a eros vulputate, vehicula convallis lectus. Quisque luctus, nunc quis posuere pellentesque, odio purus elementum eros, sed tempus augue sem sit amet quam. Sed tristique, purus sit amet pretium laoreet, nisl ante malesuada nisl, quis elementum odio lectus eget diam.'
      },
      {
        title: 'Mecha Godzilla',
        url: 'http://images3.static-bluray.com/reviews/9878_5.jpg',
        description: 'The robot king of all monsters. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium, purus nec ornare viverra, velit ipsum elementum orci, a tristique massa metus ut est. Ut tortor ante, consectetur vitae fringilla non, sagittis ut elit. In efficitur a neque a placerat. Sed sit amet gravida ex. Aliquam laoreet purus nisi, nec congue tortor viverra in. Ut in metus et sem auctor semper nec at ex. Aliquam posuere lectus urna, quis cursus quam sagittis sagittis. Mauris luctus nec erat at tempus. Phasellus placerat turpis ornare magna lacinia, egestas euismod ligula pellentesque. Duis pellentesque velit at odio blandit rutrum. Etiam quis ultricies orci, eget facilisis lacus. Quisque blandit sem at ligula accumsan luctus. Nulla dignissim massa eros, ut pellentesque quam bibendum id. Tiam diam augue, placerat a eros vulputate, vehicula convallis lectus. Quisque luctus, nunc quis posuere pellentesque, odio purus elementum eros, sed tempus augue sem sit amet quam. Sed tristique, purus sit amet pretium laoreet, nisl ante malesuada nisl, quis elementum odio lectus eget diam.'
      },
      {
        title: 'Space Godzilla',
        url: 'http://basementrejects.com/wp-content/uploads/2014/03/godzilla-vs-space-godzilla-spacegodzilla-1994-monster-creature-review.jpg',
        description: 'The space king of all monsters. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium, purus nec ornare viverra, velit ipsum elementum orci, a tristique massa metus ut est. Ut tortor ante, consectetur vitae fringilla non, sagittis ut elit. In efficitur a neque a placerat. Sed sit amet gravida ex. Aliquam laoreet purus nisi, nec congue tortor viverra in. Ut in metus et sem auctor semper nec at ex. Aliquam posuere lectus urna, quis cursus quam sagittis sagittis. Mauris luctus nec erat at tempus. Phasellus placerat turpis ornare magna lacinia, egestas euismod ligula pellentesque. Duis pellentesque velit at odio blandit rutrum. Etiam quis ultricies orci, eget facilisis lacus. Quisque blandit sem at ligula accumsan luctus. Nulla dignissim massa eros, ut pellentesque quam bibendum id. Tiam diam augue, placerat a eros vulputate, vehicula convallis lectus. Quisque luctus, nunc quis posuere pellentesque, odio purus elementum eros, sed tempus augue sem sit amet quam. Sed tristique, purus sit amet pretium laoreet, nisl ante malesuada nisl, quis elementum odio lectus eget diam.'
      },
      {
        title: 'Destroyah',
        url: 'http://www.previewsworld.com/catalogimages/STK_IMAGES/STK520001-540000/STK524104.jpg',
        description: 'Pretty tuff and scarry. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium, purus nec ornare viverra, velit ipsum elementum orci, a tristique massa metus ut est. Ut tortor ante, consectetur vitae fringilla non, sagittis ut elit. In efficitur a neque a placerat. Sed sit amet gravida ex. Aliquam laoreet purus nisi, nec congue tortor viverra in. Ut in metus et sem auctor semper nec at ex. Aliquam posuere lectus urna, quis cursus quam sagittis sagittis. Mauris luctus nec erat at tempus. Phasellus placerat turpis ornare magna lacinia, egestas euismod ligula pellentesque. Duis pellentesque velit at odio blandit rutrum. Etiam quis ultricies orci, eget facilisis lacus. Quisque blandit sem at ligula accumsan luctus. Nulla dignissim massa eros, ut pellentesque quam bibendum id. Tiam diam augue, placerat a eros vulputate, vehicula convallis lectus. Quisque luctus, nunc quis posuere pellentesque, odio purus elementum eros, sed tempus augue sem sit amet quam. Sed tristique, purus sit amet pretium laoreet, nisl ante malesuada nisl, quis elementum odio lectus eget diam.'
      },
      {
        title: 'Chainsaw Gigan',
        url: 'http://www.kaijubattle.net/uploads/2/9/5/7/29570123/729181053.jpg',
        description: 'He\'s a ladies man...monster. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium, purus nec ornare viverra, velit ipsum elementum orci, a tristique massa metus ut est. Ut tortor ante, consectetur vitae fringilla non, sagittis ut elit. In efficitur a neque a placerat. Sed sit amet gravida ex. Aliquam laoreet purus nisi, nec congue tortor viverra in. Ut in metus et sem auctor semper nec at ex. Aliquam posuere lectus urna, quis cursus quam sagittis sagittis. Mauris luctus nec erat at tempus. Phasellus placerat turpis ornare magna lacinia, egestas euismod ligula pellentesque. Duis pellentesque velit at odio blandit rutrum. Etiam quis ultricies orci, eget facilisis lacus. Quisque blandit sem at ligula accumsan luctus. Nulla dignissim massa eros, ut pellentesque quam bibendum id. Tiam diam augue, placerat a eros vulputate, vehicula convallis lectus. Quisque luctus, nunc quis posuere pellentesque, odio purus elementum eros, sed tempus augue sem sit amet quam. Sed tristique, purus sit amet pretium laoreet, nisl ante malesuada nisl, quis elementum odio lectus eget diam.'
      },
      {
        title: 'King Ghidora',
        url: 'http://roberthood.net/blog/wp-content/uploads/2008/05/kingg-01.jpg',
        description: 'Three headed golden dragon. Pretty neat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium, purus nec ornare viverra, velit ipsum elementum orci, a tristique massa metus ut est. Ut tortor ante, consectetur vitae fringilla non, sagittis ut elit. In efficitur a neque a placerat. Sed sit amet gravida ex. Aliquam laoreet purus nisi, nec congue tortor viverra in. Ut in metus et sem auctor semper nec at ex. Aliquam posuere lectus urna, quis cursus quam sagittis sagittis. Mauris luctus nec erat at tempus. Phasellus placerat turpis ornare magna lacinia, egestas euismod ligula pellentesque. Duis pellentesque velit at odio blandit rutrum. Etiam quis ultricies orci, eget facilisis lacus. Quisque blandit sem at ligula accumsan luctus. Nulla dignissim massa eros, ut pellentesque quam bibendum id. Tiam diam augue, placerat a eros vulputate, vehicula convallis lectus. Quisque luctus, nunc quis posuere pellentesque, odio purus elementum eros, sed tempus augue sem sit amet quam. Sed tristique, purus sit amet pretium laoreet, nisl ante malesuada nisl, quis elementum odio lectus eget diam.'
      },
    ];
  }
};
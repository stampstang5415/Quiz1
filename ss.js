document.addEventListener('prechange', function(event) {
    document.querySelector('ons-toolbar .center')
      .innerHTML = event.tabItem.getAttribute('label');
  });
  var prev = function() {
    var carousel = document.getElementById('carousel');
    carousel.prev();
  };
  
  var next = function() {
    var carousel = document.getElementById('carousel');
    carousel.next();
  };
  
  ons.ready(function() {
    var carousel = document.addEventListener('postchange', function(event) {
      console.log('Changed to ' + event.activeIndex)
    });
  });
  
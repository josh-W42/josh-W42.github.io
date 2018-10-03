
(function () {

  let data = {

      lazy: [],
      cleanLazy: function() {
          data.lazy = Array.prototype.filter.call(data.lazy, function(l){ return l.getAttribute('data-src');});
      },

  };

  let model = {

      init: function() {
          // The code below is for implementing a 'lazy loading' strategy,
          // a small place holder is over an image as source then, once the
          // page loads it is replaced with the actual picture.
          model.registerListener('load', model.setLazy);
          model.registerListener('load', model.lazyLoad);
          model.registerListener('scroll', model.lazyLoad);

          document.querySelector('#aboutNav').addEventListener( 'click', function () {
            let target = document.querySelector('#intro_greeting');
            model.scrollTo(target);
          });
          document.querySelector('#projectNav').addEventListener( 'click', function () {
            let target = document.querySelector('#showcase_pixel_art');
            model.scrollTo(target);
          });
          document.querySelector('#contactNav').addEventListener( 'click', function () {
            let target = document.querySelector('#contact_info');
            model.scrollTo(target);
          });

      },

      scrollTo: function (target) {
        let scrollTarget;
        let bodyRect = document.body.getBoundingClientRect();
        let sectionRect = target.getBoundingClientRect();
        let offset = sectionRect.top - bodyRect.top;
        scrollTarget = offset;
        $('html, body').animate({ scrollTop: scrollTarget }, 500);
      },

      setLazy: function(){
          data.lazy = document.querySelectorAll('.lazy');
          console.log('Found ' + data.lazy.length + ' lazy images');
      },

      registerListener: function(event, func) {
          if (window.addEventListener) {
              window.addEventListener(event, func)
          } else {
              window.attachEvent('on' + event, func)
          }
      },

      lazyLoad: function() {
          for(var i=0; i < data.lazy.length; i++){
              if(model.isInViewport(data.lazy[i])){
                  if (data.lazy[i].getAttribute('data-src')){
                      data.lazy[i].src = data.lazy[i].getAttribute('data-src');
                      data.lazy[i].removeAttribute('data-src');
                  }
              }
          }
          data.cleanLazy();
      },

      isInViewport: function(el){
          var rect = el.getBoundingClientRect();
          return (
              rect.bottom >= 0 &&
              rect.right >= 0 &&
              rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
              rect.left <= (window.innerWidth || document.documentElement.clientWidth)
          );
      }
  };

  let view = {

    init: function() {
    },

  };

  let connector = {

      init: function() {
        model.init();
        view.init();
      },

  };

  connector.init();
})();

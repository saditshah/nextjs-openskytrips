
// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: 'FuKsVeREwiw',
    playerVars: {
      'playsinline': 1
      
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}



// Image Slider Carousel


    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
      if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        document.getElementById("gTop").style.display = "flex";
      } else {
        document.getElementById("gTop").style.display = "none";
      }
    }

    // When the user clicks on the button, scroll to the top of the document

    function topFunction() {
      //document.body.scrollTop = 0;
      //document.documentElement.scrollTop = 0;
      currentYOffset = self.pageYOffset;
      initYOffset = currentYOffset;

      var intervalId = setInterval(function () {
        currentYOffset -= initYOffset * 0.05;
        document.body.scrollTop = currentYOffset;
        document.documentElement.scrollTop = currentYOffset;

        if (self.pageYOffset == 0) {
          clearInterval(intervalId);
        }
      }, 30);


    }
    /*
    var owlsm = $('.owl-sm');
    var owllg = $('.owl-lg');

    owlsm.owlCarousel({
      items: 3,
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      smartSpeed: 1000,
      dots: false
    });

    owllg.owlCarousel({
      items: 5,
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      smartSpeed: 1000,
      dots: false
    });


    $('.play').on('click', function () {
      owl.trigger('play.owl.autoplay', [1000])
    })
    $('.stop').on('click', function () {
      owl.trigger('stop.owl.autoplay')
    })
*/


    // Image Slider Carousel


    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
      if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        document.getElementById("gTop").style.display = "flex";
      } else {
        document.getElementById("gTop").style.display = "none";
      }
    }

    // When the user clicks on the button, scroll to the top of the document

    function topFunction() {
      //document.body.scrollTop = 0;
      //document.documentElement.scrollTop = 0;
      currentYOffset = self.pageYOffset;
      initYOffset = currentYOffset;

      var intervalId = setInterval(function () {
        currentYOffset -= initYOffset * 0.05;
        document.body.scrollTop = currentYOffset;
        document.documentElement.scrollTop = currentYOffset;

        if (self.pageYOffset == 0) {
          clearInterval(intervalId);
        }
      }, 30);


    }
    /*var owlsm = $('.owl-sm');
    var owllg = $('.owl-lg');

    owlsm.owlCarousel({
      items: 3,
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      smartSpeed: 1000,
      dots: false
    });

    owllg.owlCarousel({
      items: 5,
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      smartSpeed: 1000,
      dots: false
    });


    $('.play').on('click', function () {
      owl.trigger('play.owl.autoplay', [1000])
    })
    $('.stop').on('click', function () {
      owl.trigger('stop.owl.autoplay')
    })*/
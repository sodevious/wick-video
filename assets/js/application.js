$(function() {
    $( "#about" ).tabs({
        event: "mouseover",
        show: { effect: "fade", duration: 400 }
    });
});

$(function() {
    $( "#process" ).tabs({
        event: "mouseover",
        show: { effect: "fade", duration: 400 }
    });
});

$(document).ready(function () {
    $('.rs-carousel').carousel({
        itemsPerTransition: '2',
        pagination: false, 
        insertPrevAction: function () { return $('<a href="#" class="rs-carousel-action rs-carousel-action-prev"><span aria-hidden="true" class="icon-arrow-left"></span></a>').appendTo('.grid-1.arrows.prev'); },
        insertNextAction: function () { return $('<a href="#" class="rs-carousel-action rs-carousel-action-next"><span aria-hidden="true" class="icon-untitled"></span></a>').appendTo('.grid-1.arrows.next'); }

    });
});


// jQuery smooth scrolling from http://css-tricks.com/snippets/jquery/smooth-scrolling/
$(document).ready(function() {
  function filterPath(string) {
  return string
    .replace(/^\//,'')
    .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
    .replace(/\/$/,'');
  }
  var locationPath = filterPath(location.pathname);
  var scrollElem = scrollableElement('html', 'body');
 
  $('a[href*=#]').each(function() {
    var thisPath = filterPath(this.pathname) || locationPath;
    if (  locationPath == thisPath
    && (location.hostname == this.hostname || !this.hostname)
    && this.hash.replace(/#/,'') ) {
      var $target = $(this.hash), target = this.hash;
      if (target) {
        var targetOffset = $target.offset().top;
        $(this).click(function(event) {
          event.preventDefault();
          $(scrollElem).animate({scrollTop: targetOffset}, 400, function() {
            location.hash = target;
          });
        });
      }
    }
  });
 
  // use the first element that is "scrollable"
  function scrollableElement(els) {
    for (var i = 0, argLength = arguments.length; i <argLength; i++) {
      var el = arguments[i],
          $scrollElement = $(el);
      if ($scrollElement.scrollTop()> 0) {
        return el;
      } else {
        $scrollElement.scrollTop(1);
        var isScrollable = $scrollElement.scrollTop()> 0;
        $scrollElement.scrollTop(0);
        if (isScrollable) {
          return el;
        }
      }
    }
    return [];
  }
 
});
$(window).scroll(function () {
  const
  a = $(this).scrollTop(),
  b = 400,
  t = window.pageYOffset;

  $(".parallax").css('transform', 'translate(-' + a / 1.6 + 'px, -' + 1 - a / b + 'px)');

  $(".one").css('bottom', -(t * 0.3) + 'px');
  $(".two").css('bottom', -(t * 0.4) + 'px');
  $(".three").css('bottom', -(t * 0.5) + 'px');
  $(".four").css('bottom', -(t * 0.6) + 'px');
  $(".five").css('bottom', -(t * 0.7) + 'px');
});

$("header").on('mousemove', e => {
  const cx = $(window).width() / 2,
  cy = $(window).height() / 2,
  x = (cx - e.pageX) / cx * 2,
  y = (cy - e.pageY) / cy * 2;
  $(".two").css('transform', `translate(${x}px, ${y}px)`);
  $(".four").css('transform', `translate(-${x}px, ${y}px)`);
  $(".five").css('transform', `translate(${x}px, -${y}px)`);
});

(function () {
  var v = document.getElementsByClassName("youtube-player");
  for (var n = 0; n < v.length; n++) {if (window.CP.shouldStopExecution(0)) break;
    var p = document.createElement("div");
    p.innerHTML = labnolThumb(v[n].dataset.id);
    p.onclick = labnolIframe;
    v[n].appendChild(p);
  }window.CP.exitedLoop(0);
})();

function labnolThumb(id) {
  return '<img class="youtube-thumb" src="//i.ytimg.com/vi/' + id + '/hqdefault.jpg"><div class="play-button"></div>';
}

function labnolIframe() {
  var iframe = document.createElement("iframe");
  iframe.setAttribute("src", "//www.youtube.com/embed/" + this.parentNode.dataset.id + "?autoplay=0&autohide=2&border=0&wmode=opaque&enablejsapi=1&controls=0&showinfo=0");
  iframe.setAttribute("frameborder", "0");
  iframe.setAttribute("id", "youtube-iframe");
  this.parentNode.replaceChild(iframe, this);
}
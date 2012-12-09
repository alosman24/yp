$(function() {
  setTimeout(hideSplash, 1000);
});

function hideSplash() {
  $.mobile.changePage("#index", "fade");
}



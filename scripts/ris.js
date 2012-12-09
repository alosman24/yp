$(function() {
  setTimeout(hideSplash, 3000);
});

function hideSplash() {
  $.mobile.changePage("#index", "fade");
}



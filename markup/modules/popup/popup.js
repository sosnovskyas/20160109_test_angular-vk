$(document).ready(function () {
  PopUpHide();
});

function PopUpShow(image) {
  $('#popup').show();
  $('.popup-image').attr('src', image);

}

function PopUpHide() {
  $('#popup').hide();
}

posicionarMenu();

$(window).scroll(function () {
  posicionarMenu();
});

function posicionarMenu() {
  let altura_del_header = $(".ContenedorCabecera").outerHeight(true);
  let altura_del_menu = $(".menu").outerHeight(true);

  if ($(window).scrollTop() >= altura_del_header) {
    $(".menu").addClass("fixed");
    /* $(".video").css("margin-top", altura_del_menu + "em");*/
  } else {
    $(".menu").removeClass("fixed");
    /*$(".video").css("margin-top", "0");*/
  }
}

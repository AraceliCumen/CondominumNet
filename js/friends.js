// INCIALIZAMOS EL MENU HAMBURGUESA
$(document).ready(function() {
  $('.button-collapse').sideNav();
  $('.foto-user').attr('src', localStorage.photo);
  $('.name').text(localStorage.name);
  $('.email').text(localStorage.email);

  $('.btn-agregar').on('click', function(event) {
  $(this).text($(this).text() == 'Agregar' ? 'Amigos' : 'Agregar')
  });
});

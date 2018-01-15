$(document).ready(function () {

  var $textArea1 = $('#textarea1');
  var $btnPost = $('#btnPost');
  var $board = $('#board');
  var $file = $('#file');
  moment.locale('es');
  var $date = moment().format('lll');
  var img;

//Menu Hamburguesa
  $('.button-collapse').sideNav();

//Cursor automaticamente aparecerá en el textarea
  $textArea1.focus();

//Habillita y dehabilita botón
  $textArea1.on('input', function() {
     if ($textArea1.val() == '') {
        $btnPost.addClass('disabled');
     } else {
        $btnPost.removeClass("disabled");
     }
   });

//funcion postear
  $btnPost.on('click', function() {
    if ($file.val() == ''){
      var $text = $textArea1.val();
      $($board).prepend('<form class=\'col s12\'><div class=\'row second-part\' ><div class=\'col s2\'><img src=\'../assets/images/user.jpg\' class=\'circle responsive-img\'></div><div class=\'col s10\'>'+'<span class="date">'+ $date +'</span><br><p>' + $text + '</p></div></div></form>');
      $textArea1.val('');
      $btnPost.addClass('disabled');
    } else {
      var $text = $textArea1.val();
      $($board).prepend('<form class=\'col s12\'><div class=\'row second-part\' ><div class=\'col s2\'><img src=\'../assets/images/user.jpg\' class=\'circle responsive-img\'></div><div class=\'col s10\'>'+'<span class="date">'+ $date +'</span><br><p>' + $text + '</p><img src="'+ img +'"></div></div></form>');
      $textArea1.val('');
      $btnPost.addClass('disabled');
    }
  });

//Cargar imagenes
  $file.on('change', function(eve) {
    var file = eve.target.files[0];
    var fr = new FileReader();
    fr.onload = function(ev) {
     var img = ev.target.result;
    };
    $btnPost.removeClass("disabled");
    fr.readAsDataURL(file);
  });

});

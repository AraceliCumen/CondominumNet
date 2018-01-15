$(document).ready(function() {
  // INCIALIZAMOS EL MENU HAMBURGUESA
  $('.button-collapse').sideNav();
  // Iniciar modal
  $('#modal-change').modal();


  // Initialize Firebase
  var config = {
    apiKey: 'AIzaSyDazYh5bEK6rNBj1X6VGa1QFuN_wsvUSs4',
    authDomain: 'redsocial-18498.firebaseapp.com',
    databaseURL: 'https://redsocial-18498.firebaseio.com',
    projectId: 'redsocial-18498',
    storageBucket: 'redsocial-18498.appspot.com',
    messagingSenderId: '67249186059'
  };
  // Inicializamos Firebase
  firebase.initializeApp(config);
  // capturamos el boton para subir imagen de perfil
  var $btnProfile = $('#btn-perfil');
  var $imgProfile = $('#img-profile');
  var $nameUser = $('#name-user');
  var $uploader = 0;

  $('.foto-user').attr('src', localStorage.photo);

  // var arrUser = [];
  // $.each(data, function(i, item) {
  //   arrUser.push(i);
  // });
  // console.log(arrUser);
  // console.log(localStorage.mail);
  // console.log(data.users[0].name);
  // if (localStorage.mail === data.users[1].email) {
  //   // $nameUser.text(data.users[i].name);
  //   console.log(data.users[1].name);
  // }
  // for (var i = 0; i++ ; i < data.users.length) {
  //   debugger;
  //   if (localStorage.mail = data.users[i].email) {
  //     // $nameUser.text(data.users[i].name);
  //     console.log(data.users[i].name);
  //   }
  // }

  // para cargar la foto a firebase
  $btnProfile.on('change', function(event) {
    // Obtener el archivo
    var $file = event.target.files[0];
    // creamos una storage ref
    var $storageRef = firebase.storage().ref('profile_photo/' + $file.name);
    $imgProfile.removeAttr('src');
    console.log(event.target.result);
    // subir archivo
    var $task = $storageRef.put($file);
    $task.on('state_changed',
      function progress(snapshot) {
        var $percentage = (snapshot.bytesTransferred / snapshot.totalButes) * 100;
        $uploader = $percentage;
        console.log($uploader);
      },
      function error(err) {
      },
      function complete() {
      });
    $imgProfile.attr('src', event.target.result);
  });
});

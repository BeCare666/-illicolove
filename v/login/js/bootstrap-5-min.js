      const firebaseConfig = {
        apiKey: "AIzaSyCDGjJ1-gLtw0__8Om8OEzbXYNgBPWw1ik",
        authDomain: "illicolove0.firebaseapp.com",
        databaseURL: "https://illicolove0-default-rtdb.firebaseio.com",
        projectId: "illicolove0",
        storageBucket: "illicolove0.appspot.com",
        messagingSenderId: "687063035754",
        appId: "1:687063035754:web:7f03061d8cd5fd0ee9bf13"
      };
firebase.initializeApp(firebaseConfig);
// Créer une référence à la base de données Firebase
const dbRef = firebase.database().ref();

// Obtenez une référence à l'emplacement contenant les données d'utilisateur
const usersRef = dbRef.child("utilisateurs");
//const UserConnectuser = localStorage.getItem("unserconnect");
// Écoute de l'événement "click" sur le bouton de recherche
// Écoute de l'événement "click" sur le bouton de recherche
//const password = document.getElementById('password').value; 
function submitmy(){
  var tableToTakeUserId =[]
  var tableToTakeUserrspon = []
  var tableToTakeUserrsponUp = []
  var TquestionSecure = []
  document.getElementById('preloader').style.display = "block"
// Obtenez l'e-mail et le mot de passe de l'utilisateur
const email = document.getElementById('email').value;

// Utilisez la méthode Firebase once() pour obtenir une copie des données de l'utilisateur à partir de la base de données
// Utilisez la méthode Firebase once() pour obtenir une copie des données de l'utilisateur à partir de la base de données
usersRef.orderByChild("email").equalTo(email).once("value", function(snapshot) {
tableToTakeUserrspon.push(snapshot)
document.getElementById('preloader').style.display = "none"
if (snapshot.exists()) {
  tableToTakeUserrspon[0].forEach(function(userSnapshot){
  var questionSecure = userSnapshot.val().QUESTIONSECUREPASSWORD
  var questionSecureIdUser = userSnapshot.val().userId
  TquestionSecure.push(questionSecure)
  tableToTakeUserId.push(questionSecureIdUser)
  })

document.getElementById('eleementIDCose').style.display = "none"
Swal.fire({
title: TquestionSecure[0],
input: 'text',
inputAttributes: {
  autocapitalize: 'off'
},
showCancelButton: false,
confirmButtonText: i18next.t('IDTRANSLATEFORGET5'),
showLoaderOnConfirm: true,
allowOutsideClick: false,
confirmButtonColor: '#3085d6',
preConfirm: (username) => {
  if (username) {
    //console.log('Username saisi:', username);
    // Faites quelque chose avec la valeur du username ici
    //console.log(tableToTakeUserrspon[0])
    
  } else {
    Swal.showValidationMessage(i18next.t('IDTRANSLATEFORGET6'));
  }
}

}).then((result) => {
if (result.isConfirmed) {
  const username = result.value;
tableToTakeUserrspon[0].forEach(function(userSnapshot){
  if (userSnapshot.val().QUESTIONSECUREPASSWORDRESPONSE === username){
    // var emailAddress = user.email;
    // Envoi de l'e-mail de réinitialisation du mot de passe
    firebase.auth().sendPasswordResetEmail(email)
      .then(function() {
        trackSuccessfulforgetpassword()
        Swal.fire({
          icon: 'success',
          allowOutsideClick: false,
          text: i18next.t('IDTRANSLATEFORGET14WWWW'), 
          //footer: '<a href="login.html">Connectez-vous</a>',
          confirmButtonText: i18next.t('IDTRANSLATEFORGET12'), 
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "forgotpasseword.html"
          } 
        })
        // L'e-mail de réinitialisation du mot de passe a été envoyé avec succès
      })
      .catch(function(error) {
        // Une erreur s'est produite lors de l'envoi de l'e-mail de réinitialisation du mot de passe
        var errorCode = error.code;
        var errorMessage = error.message;
        Swal.fire({
          icon: 'error',
          allowOutsideClick: false,
          text: i18next.t('IDTRANSLATEUSERD26'), 
          //footer: '<a href="login.html">Connectez-vous</a>',
          confirmButtonText: i18next.t('IDTRANSLATEFORGET12'), 
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "forgotpasseword.html"
          } 
        });
      });
}else{
    document.getElementById('preloader').style.display = "none"
    document.getElementById('eleementIDCose').style.display = "none"
    Swal.fire({
        icon: 'error',
        title: 'Ooops...',
        allowOutsideClick: false,
        text: i18next.t('IDTRANSLATEFORGET14'), 
        //footer: '<a href="login.html">Connectez-vous</a>',
        confirmButtonText: i18next.t('IDTRANSLATEFORGET12'), 
      }).then((result) => {
        if (result.isConfirmed) {
          // Exécutez votre fonction ici
          document.getElementById('preloader').style.display = "none"
          document.getElementById('eleementIDCose').style.display = "block"
          // Autres actions à exécuter
        }else{
          document.getElementById('preloader').style.display = "none"
          document.getElementById('eleementIDCose').style.display = "block"
        }
      });
  }
})
}
});

} else {
document.getElementById('eleementIDCose').style.display = "none"
Swal.fire({

        icon: 'error',
        title: 'Ooops...',
        allowOutsideClick: false,
        text: i18next.t('IDTRANSLATEFORGET15'), 
        //footer: '<a href="login.html">Connectez-vous</a>',
        confirmButtonText: i18next.t('IDTRANSLATEFORGET12'), 
      }).then((result) => {
        if (result.isConfirmed) {
          // Exécutez votre fonction ici
          document.getElementById('preloader').style.display = "none"
          document.getElementById('eleementIDCose').style.display = "block"
          // Autres actions à exécuter
        }else{
          document.getElementById('preloader').style.display = "none"
          document.getElementById('eleementIDCose').style.display = "block"
        }
      });
// alert('L\'utilisateur n\'existe pas');
}
});
}
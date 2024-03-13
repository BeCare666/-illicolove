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
    firebase.auth().onAuthStateChanged(function(user) { 
    if(user){
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
    Swal.fire({
    title: i18next.t('IDTRANSLATEFORGET7'),
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
       // console.log('Username saisi:', username);
        document.getElementById('eleementIDCose').style.display = "block"
        // Faites quelque chose avec la valeur du username ici
        //console.log(tableToTakeUserrsponUp[0])
        tableToTakeUserrsponUp.push(username)
        
      } else {
        Swal.showValidationMessage(i18next.t('IDTRANSLATEFORGET8'));
      }
    }
    
  }).then((result) => {
    if (result.isConfirmed) {
      // Référence à la base de données des utilisateurs
      var usersRef = firebase.database().ref("utilisateurs");
      //const UserConnectuser = localStorage.getItem("unserconnect");
      // Mettre à jour l'e-mail de l'utilisateurF
      var updates = {};
      updates["/" + tableToTakeUserId[0] + "/password"] = tableToTakeUserrsponUp[0];
      usersRef.update(updates)
        .then(function() {
          document.getElementById('eleementIDCose').style.display = "none"
          Swal.fire({
          icon: 'success',
          title: i18next.t('IDTRANSLATEFORGET9'),
          allowOutsideClick: false,
          text: i18next.t('IDTRANSLATEFORGET10'),
          footer: '<a href="login.html" id="IDTRANSLATEFORGET11">' + i18next.t('IDTRANSLATEFORGET11') + '</a>',
          confirmButtonText: i18next.t('IDTRANSLATEFORGET12'), 
        }).then((result) => {
          if (result.isConfirmed) {
            // Exécutez votre fonction ici
           window.location.href = "login.html"
            // Autres actions à exécuter
          }
        });
        })
        .catch(function(error) {
          Swal.showValidationMessage(i18next.t('IDTRANSLATEFORGET13'));
          //console.error("Erreur lors de la mise à jour de l'e-mail :", error);
        });
    }
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

    
}else if(user === null) {
window.location.href = "login.html"
}
} );
}


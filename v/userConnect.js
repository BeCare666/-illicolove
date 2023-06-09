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
const UserConnectuser = localStorage.getItem("unserconnect");
 
// function to update
// Mettre à jour l'e-mail de l'utilisateurF
var updates = {};

 // Variable pour stocker l'ID du délai
let inactiveTimeoutId;

// Fonction appelée lorsque l'utilisateur est actif sur la page
function handleUserActive() {
clearTimeout(inactiveTimeoutId); // Réinitialiser le délai
updates["/" + UserConnectuser + "/USERCONNECT"] = true;
updates['/' + UserConnectuser + '/ONLINEDATE'] = "en ligne";
updates['/' + UserConnectuser + '/ONLINEHOURS'] = "en ligne";
usersRef.update(updates)
.then(function() {
}).catch(function(error) {
console.error("Erreur :", error);
});
//console.log("L'utilisateur est actif sur la page");
// Vous pouvez exécuter d'autres actions ou déclencher des événements ici
}

// Fonction appelée lorsque l'utilisateur quitte la page
function handleUserInactive() {
inactiveTimeoutId = setTimeout(function() {
// Créez une nouvelle instance de l'objet Date
const currentDate = new Date();
// Obtenez les différentes composantes de la date
const year = currentDate.getFullYear(); // Année (ex: 2023)
const month = currentDate.getMonth() + 1; // Mois (de 0 à 11, donc on ajoute 1)
const day = currentDate.getDate(); // Jour du mois (de 1 à 31)
const hours = currentDate.getHours().toString().padStart(2, '0'); // Heures (de 00 à 23)
const minutes = currentDate.getMinutes(); // Minutes (de 0 à 59)
//const seconds = currentDate.getSeconds(); // Secondes (de 0 à 59)
var theOnlineDate = `${day}/${month}/${year}`
var theOnlinehours = `${hours}h:${minutes}min`
updates["/" + UserConnectuser + "/USERCONNECT"] = false;
updates['/' + UserConnectuser + '/ONLINEDATE'] = theOnlineDate;
updates['/' + UserConnectuser + '/ONLINEHOURS'] = theOnlinehours;
usersRef.update(updates)
.then(function() {
}).catch(function(error) {
console.error("Erreur :", error);
});
   // console.log("L'utilisateur a quitté la page");
    // Mettre à jour le statut ou effectuer d'autres actions ici
  }, 60000); // Délai de 60 secondes avant de mettre à jour le statut
}

// Appeler la fonction handleUserActive dès le chargement de la page
handleUserActive();

// Ajouter un écouteur d'événement pour détecter lorsque l'utilisateur interagit avec la page
document.addEventListener("visibilitychange", function() {
  if (document.visibilityState !== "visible") {
    handleUserInactive();
  } else {
    handleUserActive();
  }
});

 
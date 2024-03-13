window.onload = function(){
    if (/Mobi|Android/i.test(navigator.userAgent)) { 
  // Code pour appareil mobile
  //document.body.style.fontSize = "16px"; // Modifier la taille de la police pour appareils mobiles
 var wallet =  document.getElementById('wallet-containerId'); 
 var HistoryId =  document.getElementById('historyId');
 var ImgNodata =  document.getElementById('imgNodata');
 var PhistoryId =  document.getElementById('phistoryId');
 var IdTogetwallet = document.getElementById('idTogetwallet');
 wallet.style.height = "100%"
 wallet.style.width = "100%"
 wallet.style.setProperty("font-size", "75px", "important");
 var ComeBackId =  document.getElementById('comeBackId');
 ComeBackId.style.fontSize = "2vh"
 IdTogetwallet.style.fontSize = "2vh"
 //wallet.style.marginTop = "1%"
 //HistoryId.style.marginTop = "46%"
 ImgNodata.style.height = "30vh"
 PhistoryId.style.height = "55vh"
  //document.getElementById('contentSignup').style.marginTop = "5vh"
  } else {
      // Code pour ordinateur de bureau
      var ComeBackId =  document.getElementById('comeBackId');
      var IdTogetwallet = document.getElementById('idTogetwallet');
      ComeBackId.style.fontSize = "2vh"
      IdTogetwallet.style.fontSize = "2vh"
  }
  //star function to comBack
  document.getElementById('comeBackId').addEventListener('click', function(){
    window.location.href = "../../v/profil.html"
  })
  // end function tocomeBack
  // Configuration Firebase
// Créez une nouvelle instance de l'objet Date
const firebaseConfig = {
    apiKey: "AIzaSyCDGjJ1-gLtw0__8Om8OEzbXYNgBPWw1ik",
    authDomain: "illicolove0.firebaseapp.com",
    databaseURL: "https://illicolove0-default-rtdb.firebaseio.com",
    projectId: "illicolove0",
    storageBucket: "illicolove0.appspot.com",
    messagingSenderId: "687063035754",
    appId: "1:687063035754:web:7f03061d8cd5fd0ee9bf13"
  };
  //const UserConnectuser = localStorage.getItem("unserconnect");
  // Initialisation de Firebase
  firebase.initializeApp(firebaseConfig);
  // Récupérer un utilisateur par son ID
  firebase.auth().onAuthStateChanged(function(user) { 
  var userId = user.uid;
  function getUserById(userId) {

    const database = firebase.database();
    const userRef = database.ref(`/utilisateurs/${userId}`);
  
    userRef.once("value")
      .then((snapshot) => {
        const user = snapshot.val();
        if (user) {
          //console.log("Utilisateur récupéré :", user);
          document.getElementById('preloader').style.display = "none"
          var UserCOMMISSON = user.COMMISSION

          var emailUser = user.email
          var fullname = user.fullname

          var Amount = document.getElementById('amount');
          var ImgNodata = document.getElementById('imgNodata');
          var PhistoryId = document.getElementById('phistoryId');
          var IdTogetwallet = document.getElementById('idTogetwallet');
          Amount.innerHTML = `${UserCOMMISSON} FCFA`
          if(UserCOMMISSON == 0){
            IdTogetwallet.disabled = true
          }else{
            IdTogetwallet.disabled = false
          }
          //function to creat the liste p

          const userListP = document.getElementById("phistoryId");
          const userListUl = document.createElement("span");
          //console.log("Utilisateur récupéré :", user);
          var UserGETALLWALLET = user.GETALLWALLET
          //console.log("Utilisateur récupéré :", UserGETALLWALLET);
        // Convertir l'objet d'utilisateurs en un tableau d'objets
        const userArray = Object.entries(UserGETALLWALLET).map(([key, value]) => ({ id: key, ...value }));
        //function to controle the paiement
        if(userArray.length == 0){
            ImgNodata.style.display = "block"
            PhistoryId.style.display = "none"
          }else{
            ImgNodata.style.display = "none"
            PhistoryId.style.display = "block"
          }
        // Trier le tableau en fonction de la valeur du champ "comptValidé"
        userArray.sort((a, b) => {
        // Mettre les comptes validés en bas
        if (a.status && !b.status) {
            return -1;
        }
        // Mettre les comptes non validés en haut
        if (!a.status && b.status) {
            return 1;
        }
        // Garder l'ordre actuel si les deux utilisateurs ont la même valeur pour "comptValidé"
        return 0;
        });
        // Parcourez les données des utilisateurs et ajoutez-les à la liste
        for (const userId in userArray) {
            const usergal = userArray[userId];
            const userLi = document.createElement("p");
            userLi.innerHTML = `${usergal.status ? `<p class="txn-list" style="cursor: pointer !important; border-radius: 5px !important;">
            <strong id="IDTRANSLATEWALLETU"></strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>${usergal.time} 
            </strong><span class="debit-amount" style="color: green !important;">${usergal.gain} FCFA</span></p>`: 
            `<p class="txn-list" style="cursor: pointer !important; border-radius: 5px !important;">
            <strong id="IDTRANSLATEWALLETX"></strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>${usergal.time} 
            </strong><span class="debit-amount" style="color:#FFB6C1 !important;">${usergal.gain} FCFA</span></p>`} `;
            
            userListUl.appendChild(userLi);
           
        }
        // Ajoutez la liste à la balise p
        userListP.appendChild(userListUl);

            //function to get my wallet
            var IdTogetwallet = document.getElementById('idTogetwallet');
            IdTogetwallet.addEventListener('click', function(){
                document.getElementById('preloader').style.display = "block"
                const UserConnectuserId = localStorage.getItem("unserconnect");
                const userRef = database.ref(`/utilisateurs/${UserConnectuserId}`);
                const newData = {
                    COMMISSION: 0
                  };
                  userRef.update(newData, (error) => {
                    if (error) {
                        document.getElementById('preloader').style.display = "none"
                        Swal.fire({
                            icon: 'error',
                            title: i18next.t('IDTRANSLATEWALLET'),
                            text: i18next.t('IDTRANSLATEWALLETM'), 
                            allowOutsideClick: false,
                          }).then((result) => {
                            if (result.isConfirmed){
                                location.reload();
                            }
                         })
                      //console.error("La mise à jour a échoué : " + error);
                    } else {
                    document.getElementById('preloader').style.display = "none"
                    const dateActuelle = new Date();
                    // Obtenez les composantes de la date et de l'heure
                    const jour = dateActuelle.getDate();
                    const mois = dateActuelle.getMonth() + 1; // Les mois commencent à 0, donc ajoutez 1
                    const annee = dateActuelle.getFullYear();
                    const heures = dateActuelle.getHours();
                    const minutes = dateActuelle.getMinutes();
                    // Formatez la date et l'heure
                    const dateFormatee = `${jour}/${mois}/${annee} ${heures}h:${minutes}min`;
                    //console.log(dateFormatee);
                // Function to add a gain with status to the user's gains array
                function addGainToUser(gain, status, time) {
                    const newGain = { gain: gain, status: status, time:time};
                    userRef.child("GETALLWALLET").push(newGain);
                }              
                // Usage
                addGainToUser(UserCOMMISSON, true, dateFormatee); // Add a gain of 100 with "won" status
                //console.log("La mise à jour a réussi !");
                Swal.fire({
                    icon: 'success',
                    title: i18next.t('IDTRANSLATEWALLET1'),
                    text: i18next.t('IDTRANSLATEWALLET2'),
                    allowOutsideClick: false,
                  }).then((result) => {
                    if (result.isConfirmed){
                        location.reload();
                    }
                 })
                 // statr envoi de mail de validation
                 const apiKey = "34F593452254BAB8CACDA4A39FC9C44BFC0D3E63B8842CD369FF37BBE4AC5017DA7917B6E03C3C8EB379F906C80E9DED";
                 const apiUrl = "https://api.elasticemail.com/v2/email/send";
                 
                 // Définir les paramètres de l'e-mail
                 const emailParams = {
                 apiKey: apiKey,
                 subject: "Gain de point",
                 from: emailUser,
                 fromName: "illicolove",
                 to: "validation@illicolove.com",
                 bodyHtml: `
                 <table cellpadding="10" cellspacing="0" style="background-color: #f1f1f1; padding: 20px;">
                 <tr>
                     <td>
                     <h1 style="color: #333;">Salut, illicolove !</h1>
                     <div style="text-align: center;">
                         <img src="https://illicolove.com/assets/img/illicolove-.png" style="max-width: 100%; height: auto; display: inline-block;" />
                     </div>
                     <p style="font-size: 16px; color: #666;">
                     Nous avons le plaisir de vous informer que ${fullname} a récemment retiré ${UserCOMMISSON} de son portefeuille. Nous vous prions de bien vouloir confirmer cette transaction. 
                     </p>
                     <ul>
                         <li><a href="https://illicolove.com/v/profil.html">Vous pouvez visiter son profil.</a></li>
                     </ul>
                     <p style="font-size: 14px; color: #999;">
                         Restez à l'écoute pour recevoir d'autres nouvelles passionnantes !     
                     </p>
                     <p style="font-size: 14px; color: #999;">
                         Cordialement,     
                     </p>
                     <p style="font-size: 14px; color: #999;">
                         L'équipe illicolove.      
                     </p>
                     </td>
                 </tr>
                 </table>
                 `
                 };

                // Effectuer une requête POST vers l'API ElasticEmail
                fetch(apiUrl, {
                method: "POST",
                headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                },
                body: new URLSearchParams(emailParams)
                })
                .then((response) => response.json())
                .then((data) => {
                //console.log(data); // Afficher la réponse de l'API ElasticEmail
                if (data.success) {
                //console.log("E-mail envoyé avec succès.");
                 } else {
                 // console.error("Erreur lors de l'envoi de l'e-mail.");
                 }
                })
                .catch((error) => {
                //console.error("Erreur lors de la requête API :", error);
                });
                // end envoi de mail de validation
                }
                });

            })
            var texteTraduit3W = i18next.t("IDTRANSLATEWALLETU");
            $('[id="IDTRANSLATEWALLETU"]').text(texteTraduit3W);
            var texteTraduit3WX = i18next.t("IDTRANSLATEWALLETX");
            $('[id="IDTRANSLATEWALLETX"]').text(texteTraduit3WX);

            // start function to userconnect

let inactiveTimeoutId;
// Fonction appelée lorsque l'utilisateur est actif sur la page
function handleUserActive() {
  const newDataCwq = {
    USERCONNECT : true,
    ONLINEDATE : "en ligne",
    ONLINEHOURS : "en ligne",
    };
    userRef.update(newDataCwq, (error) => {
      if (error){
        //console.error("Erreur :", error);
      }else{
        // console.log("O")
      }
     })
clearTimeout(inactiveTimeoutId); // Réinitialiser le délai
 
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
 const newDataCwqx = {
  USERCONNECT : false,
  ONLINEDATE : theOnlineDate,
  ONLINEHOURS : theOnlinehours,
  };

  userRef.update(newDataCwqx, (error) => {
    if (error){
      //console.error("Erreur :", error);
    }else{
    //   console.log("N")
    }
   })
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
// end function to userconnect
  } else if(user === null) {
   window.location.href =  "../login/login.html"
  }
      })
      .catch((error) => {
        //console.error("Erreur lors de la récupération de l'utilisateur :", error);
      });
    
  }
  
  // Exemple d'utilisation : Remplacez "ID_DE_L_UTILISATEUR" par l'ID de l'utilisateur que vous souhaitez récupérer.
  getUserById(userId);
  });
 }
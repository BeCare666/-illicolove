window.onload = function(){
    if (/Mobi|Android/i.test(navigator.userAgent)) { 
  // Code pour appareil mobile
  //document.body.style.fontSize = "16px"; // Modifier la taille de la police pour appareils mobiles
 var wallet =  document.getElementById('wallet-containerId'); 
 var HistoryId =  document.getElementById('historyId');
 var ImgNodata =  document.getElementById('imgNodata');
 var PhistoryId =  document.getElementById('phistoryId');
 wallet.style.height = "99%"
 wallet.style.width = "99%"
 //wallet.style.marginTop = "1%"
 HistoryId.style.marginTop = "46%"
 ImgNodata.style.height = "30vh"
 PhistoryId.style.height = "30vh"
  //document.getElementById('contentSignup').style.marginTop = "5vh"
  } else {
      // Code pour ordinateur de bureau
  }
  //star function to comBack
  document.getElementById('comeBackId').addEventListener('click', function(){
    window.location.href = "profil.html"
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
  const UserConnectuser = localStorage.getItem("unserconnect");
  // Initialisation de Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Récupérer un utilisateur par son ID
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
          // Sélectionnez la balise p
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
        //var tableId = []
        // Parcourez les données des utilisateurs et ajoutez-les à la liste
        for (const userId in userArray) {
            const usergal = userArray[userId];
            const userLi = document.createElement("p");
            userLi.innerHTML = `${usergal.status ? `<p class="txn-list" id="${usergal.id}" style="cursor: pointer !important; border-radius: 5px !important;"><strong>En cours</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>${usergal.time} </strong><strong><span class="debit-amount" style="color: green !important;">${usergal.gain} FCFA</span></strong></p>`: `<p class="txn-list" style="border-radius: 5px !important;"><strong >Payé</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>${usergal.time} </strong><span class="debit-amount" style="color:#FFB6C1 !important;"><strong>${usergal.gain} FCFA</span></strong></p>`} `;
            userListUl.appendChild(userLi);
            //console.log(usergal.id)
            if(usergal.status){
                userLi.addEventListener('click', function(){
                    document.getElementById('preloader').style.display = "block" 
                    const dateActuelle = new Date();
                    // Obtenez les composantes de la date et de l'heure
                    const jour = dateActuelle.getDate();
                    const mois = dateActuelle.getMonth() + 1; // Les mois commencent à 0, donc ajoutez 1
                    const annee = dateActuelle.getFullYear();
                    const heures = dateActuelle.getHours();
                    const minutes = dateActuelle.getMinutes();
                    // Formatez la date et l'heure
                    const dateFormatee = `${jour}/${mois}/${annee} ${heures}h:${minutes}min`;
                    //alert(usergal.gain)
                    // Fonction pour mettre à jour un enregistrement d'un utilisateur
                    // Fonction pour mettre à jour l'enregistrement d'un utilisateur avec de nouvelles valeurs pour `time` et `status`
                    function updateGainForUser(userId, gainKey, newStatus, newTime) {
                        // Le chemin complet vers l'enregistrement à mettre à jour
                        const gainPath = `GETALLWALLET/${gainKey}`;
                        
                        // Créez un objet pour les données mises à jour
                        const updatedData = {
                        status: newStatus,
                        time: newTime
                        };
                    
                        // Mettez à jour l'enregistrement sous le chemin spécifié
                        return   userRef.child(gainPath).update(updatedData);
                    }
                    
                    // Usage : Mettez à jour l'enregistrement pour un utilisateur spécifique
                    var userAfiId = usergal.id
                    const UserConnectuser = localStorage.getItem("unserconnect");// Remplacez par l'ID de l'utilisateur
                    const nouveauStatus = false; // Remplacez par le nouveau statut
                    updateGainForUser(UserConnectuser, userAfiId, nouveauStatus, dateFormatee)
                    .then(() => {
                        document.getElementById('preloader').style.display = "none"
                        Swal.fire({
                            icon: 'success',
                            title: 'Félicitations !',
                            text: 'La validation de votre transfert a été effectuée avec succès.',
                            allowOutsideClick: false,
                          }).then((result) => {
                            if (result.isConfirmed){
                                location.reload();
                            }
                         })
                        //alert("Mise à jour réussie !");
                      })
                      .catch(error => {
                        document.getElementById('preloader').style.display = "none"
                        Swal.fire({
                            icon: 'error',
                            title: 'Désolé !',
                            text: 'La validation de votre transfert a échoué. Veuillez réessayer plus tard !',
                            allowOutsideClick: false,
                          }).then((result) => {
                            if (result.isConfirmed){
                                location.reload();
                            }
                         })
                        //alert("Erreur lors de la mise à jour : ");
                      });
                    
                    
                    
                    
                    
                    
                    
                
                })
            }
        }
    
        // Ajoutez la liste à la balise p
        userListP.appendChild(userListUl);
        } else {
         // console.log("Utilisateur introuvable.");
        }
      })
      .catch((error) => {
       // console.error("Erreur lors de la récupération de l'utilisateur :", error);
      });
  }
  
  // Exemple d'utilisation : Remplacez "ID_DE_L_UTILISATEUR" par l'ID de l'utilisateur que vous souhaitez récupérer.
  getUserById(UserConnectuser);
 }
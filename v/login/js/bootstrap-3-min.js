
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
const database = firebase.database();
// Créer une référence à la base de données Firebase
const dbRef = firebase.database().ref();
// get cookies option for user
const UserConnectId = localStorage.getItem("ToacceptCookies");
if(UserConnectId){
var savedUsername = localStorage.getItem("Email");
var savedPassword = localStorage.getItem("Password");
document.getElementById('email').value = savedUsername
document.getElementById('password').value = savedPassword
}
// Obtenez une référence à l'emplacement contenant les données d'utilisateur
const usersRef = dbRef.child("utilisateurs");
// Écoute de l'événement "click" sur le bouton de recherche
// Écoute de l'événement "click" sur le bouton de recherche ToacceptCookies
function submitmy(){
document.getElementById('preloader').style.display = "block"
// Obtenez l'e-mail et le mot de passe de l'utilisateur
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;

firebase.auth().signInWithEmailAndPassword(email, password)
.then((userCredential) => {
      // La connexion a réussi, vous pouvez accéder à l'utilisateur
      var user = userCredential.user;
      var useruid = user.uid;
      if(user.emailVerified){
      // L'utilisateur existe avec l'e-mail et le mot de passe donnés
      document.getElementById('preloader').style.display = "none"
      //const userId = userSnapshot.key;
      document.getElementById('email').value = ""
      document.getElementById('password').value = ""
      
      document.getElementById('contentSignup').style.display = "none" 
      document.getElementById('modalID').style.display = "block"
      var dreamIndemo = document.getElementById("dreamIndemo"); // Remplacez "nom-du-bouton" par l'ID réel de votre bouton
      dreamIndemo.click();
      document.getElementById('iconid').innerHTML = `  <img src="./../formulaire/assets/imageSucess.svg" alt=""></i>`
      document.getElementById('etatalert').innerHTML = `<p id="IDTRANSLATELOGIN11" style="color: black !important;"></p>`
      document.getElementById('smsalert').innerHTML = `<p id="IDTRANSLATELOGIN12" style="color: black !important;"></p> `
      var texteTraduitprofil11 = i18next.t("IDTRANSLATELOGIN11");
      $('[id="IDTRANSLATELOGIN11"]').text(texteTraduitprofil11);

     var texteTraduitprofil12 = i18next.t("IDTRANSLATELOGIN12");
     $('[id="IDTRANSLATELOGIN12"]').text(texteTraduitprofil12);
      localStorage.setItem('unserconnect', useruid)
      localStorage.setItem('unserconnectmail', email)
      // funnction to get cookies options     
      localStorage.setItem("Email", email);
      localStorage.setItem("Password", password);
      trackSuccessfulLogin()
      setTimeout(()=>{
      window.location.href = "./../profil.html"
      },5000)
      }else{
        document.getElementById('preloader').style.display = "none"
        Swal.fire({
       title: "Ooops",
       text: i18next.t('IDTRANSLATEPROFIL45AQVASQMAILX'),
       icon: 'info'
        }).then((result)=>{
        if(result.isConfirmed){
          window.location.href = "login.html"
        }
        })
      }

})
.catch((error) => {
  var errorCode = error.code;
  var errorMessage = error.message;
  if (errorCode === 'auth/user-not-found'){
  console.error('Error:', errorCode, errorMessage);
  document.getElementById('preloader').style.display = "none"
  document.getElementById('email').value = ""
  document.getElementById('password').value = ""

  document.getElementById('contentSignup').style.display = "none" 
  document.getElementById('modalID').style.display = "block"
  var dreamIndemo = document.getElementById("dreamIndemo"); // Remplacez "nom-du-bouton" par l'ID réel de votre bouton
  dreamIndemo.click();
  document.getElementById('iconid').innerHTML = `  <img src="./../formulaire/assets/imageNoSucess.svg" alt=""></i>`
  document.getElementById('etatalert').innerHTML = `<p id="IDTRANSLATELOGIN13" style="color: black !important;"></p>`
  document.getElementById('smsalert').innerHTML = `<p id="IDTRANSLATELOGIN16" style="color: black !important;"></p> `
  var texteTraduitprofil13 = i18next.t("IDTRANSLATELOGIN13");
    $('[id="IDTRANSLATELOGIN13"]').text(texteTraduitprofil13);
    var texteTraduitprofil16 = i18next.t("IDTRANSLATELOGIN16");
    $('[id="IDTRANSLATELOGIN16"]').text(texteTraduitprofil16); 


  setTimeout(()=>{
  document.getElementById('contentSignup').style.display = "block" 
  document.getElementById('modalID').style.display = "none" 
  },5000)
}else if(errorCode === 'auth/wrong-password'){
  document.getElementById('preloader').style.display = "none"
  document.getElementById('email').value = ""
  document.getElementById('password').value = ""

  document.getElementById('contentSignup').style.display = "none" 
  document.getElementById('modalID').style.display = "block"
  var dreamIndemo = document.getElementById("dreamIndemo"); // Remplacez "nom-du-bouton" par l'ID réel de votre bouton
  dreamIndemo.click();
  document.getElementById('iconid').innerHTML = `  <img src="./../formulaire/assets/imageNoSucess.svg" alt=""></i>`
  document.getElementById('etatalert').innerHTML = `<p id="IDTRANSLATELOGIN13" style="color: black !important;"></p>`
  document.getElementById('smsalert').innerHTML = `<p id="IDTRANSLATELOGIN14" style="color: black !important;"></p> `
  var texteTraduitprofil13 = i18next.t("IDTRANSLATELOGIN13");
    $('[id="IDTRANSLATELOGIN13"]').text(texteTraduitprofil13);

    var texteTraduitprofil14 = i18next.t("IDTRANSLATELOGIN14");
    $('[id="IDTRANSLATELOGIN14"]').text(texteTraduitprofil14);

  setTimeout(()=>{
  document.getElementById('contentSignup').style.display = "block" 
  document.getElementById('modalID').style.display = "none" 
  },5000)
}
});  

    var texteTraduitprofil15 = i18next.t("IDTRANSLATELOGIN15");
    $('[id="IDTRANSLATELOGIN15"]').text(texteTraduitprofil15);
 
}

     // start function to sign up with facebook
     const auth = firebase.auth();
     // Définir l'événement de clic sur le bouton
     const loginWithFacebookBtn = document.getElementById('toSignupIDfacebook');
     const toSignupIDgoogle = document.getElementById('toSignupIDgoogle');
      loginWithFacebookBtn.innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;<i class="fab fa-facebook-f" style="
      padding: 8px; background-color: blue !important; color: white; font-size: 20px !important;"></i> FACEBOOK`
      toSignupIDgoogle.innerHTML = `<i class="fab fa-google" style="padding: 5px !important; background: linear-gradient(120deg, #db4437, #f4b400, #0f9d58);
      border-radius: 50%;
      padding: 10px; color: white; font-size: 20px !important;"></i> GOOGLE`
     loginWithFacebookBtn.addEventListener('click', () => {
       // Créer une instance du fournisseur d'authentification Facebook
       const provider = new firebase.auth.FacebookAuthProvider();
 
       // Authentifier avec Facebook
       auth.signInWithPopup(provider)
         .then((result) => {
           // L'utilisateur est connecté avec Facebook
           //console.log('Utilisateur connecté avec Facebook:', result.user);
           var result = result.user
           var useruid = result.uid;
           localStorage.setItem('unserconnect', useruid)
          // localStorage.setItem('unserconnectmail', email)
           // funnction to get cookies options     
           trackSuccessfulLogin()
           setTimeout(()=>{
           window.location.href = "./../profil.html"
           },5000)
         })
         .catch((error) => {
           // Une erreur s'est produite lors de l'authentification
           console.error('Erreur d\'authentification avec Facebook:', error);
         });
     });
     // end function to sign up with facebook
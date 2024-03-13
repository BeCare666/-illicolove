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
 var userID = localStorage.getItem("unserconnect")
 var useremail = localStorage.getItem("unserconnectmail")
  // Référence Firebase contenant les adresses e-mails
  // Écoute de l'événement "click" sur le bouton de recherche
// Obtenir le code du pays à partir des coordonnées géographiques  
var mycountryalphacodeipinfo = localStorage.getItem("alphacodeipinfo") // get in signup.html
var input = document.querySelector("#phone");
var iti = window.intlTelInput(input);
var country = mycountryalphacodeipinfo; // Remplacez par le code du pays détecté
iti.setCountry(country);
if(mycountryalphacodeipinfo){
var selectedCountry = iti.getSelectedCountryData();
var nameofcountry = selectedCountry.name;
var dialCodeofcountry = selectedCountry.dialCode;
var iso2ofcountry = selectedCountry.iso2;
localStorage.setItem('Nameofcountry', nameofcountry);
localStorage.setItem('DialCodeofcountry', dialCodeofcountry);
localStorage.setItem('Iso2ofcountry', iso2ofcountry);
}
 
const inputElementx = document.getElementById("phoneuserID");
const DialCodeofcountryLocal = localStorage.getItem('DialCodeofcountry');
const defaultValue = `+${DialCodeofcountryLocal}`;
// Attribuez la valeur par défaut au champ d'entrée
inputElementx.value = defaultValue;
localStorage.setItem('DefaultValue', defaultValue);
 
  function submitmy(){ 
  //const emailRef = firebase.database().ref('utilisateurs');
    document.getElementById('preloader').style.display = "block"
    var fullname = document.getElementById('name').value
    var username = document.getElementById('username').value
    var phoneuserIDvalue = document.getElementById('phoneuserIDval').value
    const Nameofcountryval = localStorage.getItem('Nameofcountry')
    const DefaultValueval = localStorage.getItem('DefaultValue')
    var numberphoneuser = DefaultValueval + phoneuserIDvalue
    //alert(numberphoneuser)
    // Ajoutez un gestionnaire d'événements pour l'événement "input"

    if(phoneuserIDvalue.trim() === ""){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: i18next.t('IDTRANSLATESIGNUP19PHONE'),
        showConfirmButton: false,
        timer: 1500
       // footer: '<a href="">Why do I have this issue?</a>'
      })
       
    }

    if(/^\d{7,}$/.test(phoneuserIDvalue)){

    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: i18next.t('IDTRANSLATESIGNUP19PHONEX'),
        showConfirmButton: false,
        timer: 1500
       // footer: '<a href="">Why do I have this issue?</a>'
      })
    }

    if(fullname && username && Nameofcountryval && numberphoneuser
    && phoneuserIDvalue !=="" && /^\d{7,}$/.test(phoneuserIDvalue)){
    document.getElementById('preloader').style.display = "none"
      //var userID = username + userId
      // Récupération de l'adresse mail entrée par l'utilisateur
      // Envoi de l'adresse mail à Firebase
      // Créez une nouvelle instance de l'objet Date
      const currentDate = new Date();
      // Obtenez les différentes composantes de la date
      const year = currentDate.getFullYear(); // Année (ex: 2023)
      const month = currentDate.getMonth() + 1; // Mois (de 0 à 11, donc on ajoute 1)
      const day = currentDate.getDate(); // Jour du mois (de 1 à 31)
      const hours = currentDate.getHours(); // Heures (de 0 à 23)
      const minutes = currentDate.getMinutes(); // Minutes (de 0 à 59)
      const seconds = currentDate.getSeconds(); // Secondes (de 0 à 59)

      firebase.database().ref('utilisateurs/' + userID).set({
          userId : userID,
          email: useremail,
          fullname: fullname,
          username : username,
          password : "",
          MAVILLEDERESIDENCE : "",
          MYCOUNTRY :Nameofcountryval,
          MANATIONNALITE : "",
          MONTRAVAILLEOUOCCUPATION : "",
          MASITUATIONMATRIMONIALE : "",
          MONAGE:"",
          MATAILLE:"",
          MONPOIDS:"",
          MONTEINT:"",
          QUESTIONUNIQUE:"",
          COMPTECREDIT: 3,
          COMPTECREDITSATUS: false,
          isDefaultAccount: true,
          isPaidAccount: false,
          MONPAYSDEPUBLICATION:"",
          VALIDERMONCOMPTE:false,
          MONCOMPTESUSPENDU:false,
          ALERTVALIDERMACIP : false,
          COMPTEFACEBOOK:"",
          COMPTEINSATAGRAMME:"",
          MONSEXE:"",
          TELEPHONE:numberphoneuser,
          JEVEUXUNERENCONTRE:"", 
          PIECESDIDENTITE:"",
          MESDEUXPHOTOS:"",
          MESDEUXPHOTO2:"",
          SEXEDEPROFILQUEJECHERCHE:"",
          SONAGEDEPROFILQUEJECHERCHE:"",
          SITUATIONMATRIMONIALEDEPROFILQUEJECHERCHE:"",
          PAYSDERESIDENCEDEPROFILQUEJECHERCHE:"",
          PHYSIQUEDEPROFILQUEJECHERCHE:"",
          VILLEDHABITATIONDEPROFILQUEJECHERCHE:"",
          TRAVAILDEDEPROFILQUEJECHERCHE:"",
          AUTRESPRECISIONSDEPROFILQUEJECHERCHE:"",
          IDREGION : "",
          QUESTIONSECUREPASSWORDSTATUS : false,
          QUESTIONSECUREPASSWORD : "",
          QUESTIONSECUREPASSWORDRESPONSE : "",
          USERCONNECT : false,
          DATETIME : `${day}/${month}/${year}`,
          ONLINEDATE : "",
          ONLINEHOURS : "",
          COMMISSION : "0",
          GETALLWALLET : "",
          STATUSAFILIATE : false,
          TAKEMYIDAFILIAT : "",
          AMOUNTALREDYPAID : "0"
      }).then(() => {
        trackSuccessfulEnd()
        document.getElementById('username').value = ""
        document.getElementById('name').value = ""
        document.getElementById('contentSignup').style.display = "none" 
        document.getElementById('modalID').style.display = "block"
        var dreamIndemo = document.getElementById("dreamIndemo"); // Remplacez "nom-du-bouton" par l'ID réel de votre bouton
        dreamIndemo.click();
        document.getElementById('iconid').innerHTML = `  <img src="./../formulaire/assets/imageSucess.svg" alt=""></i>`
        document.getElementById('etatalert').innerHTML = `<p id="IDTRANSLATESIGNUP16" style="color: black !important;"></p>`
        document.getElementById('smsalert').innerHTML = `<p id="IDTRANSLATESIGNUP17" style="color: black !important;"></p>`
        setTimeout(()=>{
        document.getElementById('contentSignup').style.display = "block" 
        document.getElementById('modalID').style.display = "none"
        //alert("Adresse mail envoyée à Firebase !");
        const IDAFILIATEID = localStorage.getItem("IDAFILIATE"); 
        localStorage.setItem('unserconnect', userID)
       // localStorage.setItem('unserconnectmail', email)
        localStorage.setItem('IDAFILIATEIDXXX', IDAFILIATEID)
        window.location.href = "./../profil.html"
        //window.location.href = "validemail.html"

        },7000)
        var texteTraduitprofil16X = i18next.t("IDTRANSLATESIGNUP16");
        $('[id="IDTRANSLATESIGNUP16"]').text(texteTraduitprofil16X);

        var texteTraduitprofil17X = i18next.t("IDTRANSLATESIGNUP17");
        $('[id="IDTRANSLATESIGNUP17"]').text(texteTraduitprofil17X);
      }).catch((error) => {
        console.log(error)
        Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: i18next.t('IDTRANSLATESIGNUP18'),
        showConfirmButton: false,
        timer: 1500
       // footer: '<a href="">Why do I have this issue?</a>'
      })
          //alert("Erreur lors de l'envoi de l'adresse mail à Firebase :", error);
      });
  }else{
  //alert("les données ne sont pas")
  document.getElementById('preloader').style.display = "none"
 }
}

  var username = document.getElementById('username')
    username.addEventListener('input', function(event) {
      var inputValue = event.target.value;
      
      // Vérifiez si la valeur contient des espaces
      if (inputValue.includes(' ')) {
        // Supprimez les espaces de la valeur
        event.target.value = inputValue.replace(/\s/g, '');
        Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: i18next.t('IDTRANSLATESIGNUP19'),
        showConfirmButton: false,
        timer: 1500
       // footer: '<a href="">Why do I have this issue?</a>'
      })
      }
    });

    {/*//function to control password
    const passwordInput = document.getElementById('password');
    const passwordStrengthIndicator = document.getElementById('password-strength-indicator');

    passwordInput.addEventListener('input', validatePassword);

    function validatePassword() {
      const password = passwordInput.value;
      const passwordStrength = calculatePasswordStrength(password);

      // Afficher la force du mot de passe à l'utilisateur
      passwordStrengthIndicator.textContent = `Force du mot de passe : ${passwordStrength}`;

      // Vérifier si le mot de passe contient des caractères spéciaux
      const containsSpecialChars = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password);

      // Si le mot de passe contient des caractères spéciaux, afficher un message d'erreur
      if (containsSpecialChars) {
        alert('Le mot de passe ne doit pas contenir de caractères spéciaux.');
      } else {
        passwordInput.setCustomValidity('');
      }
    }*/}

    function calculatePasswordStrength(password) {
      // Logique pour calculer la force du mot de passe
      // Vous pouvez utiliser des critères tels que la longueur, la présence de chiffres, de lettres majuscules, de lettres minuscules, etc.
      // Dans cet exemple, nous utilisons simplement la longueur du mot de passe comme indicateur de force
      const passwordLength = password.length;

      if (passwordLength < 8) {
        return 'Faible';
      } else if (passwordLength >= 8 && passwordLength < 12) {
        return 'Moyenne';
      } else {
        return 'Forte';
      }
    }

   {/* const togglePasswordButton = document.getElementById('toggle-password');

    togglePasswordButton.addEventListener('click', togglePasswordVisibility);

    function togglePasswordVisibility() {
      if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        togglePasswordButton.innerText = 'O';
      } else {
        passwordInput.type = 'password';
        togglePasswordButton.innerText = 'X';
      }
    }*/}

      // Fonction de validation
      function validerSaisie(input) {
        const valeurSaisie = input.value;
        const regexLettresAvecEspaces = /^\d+/;
        input.value = input.value.replace(/[^0-9]/g, "")
        if (!regexLettresAvecEspaces.test(valeurSaisie)) { 
        // Effacez la saisie incorrecte
        input.value = input.value.replace(/\D/g, '');
      
        }
        }

        // Obtenez la référence de l'élément input
        const inputElement = document.getElementById("phoneuserIDval");

        // Ajoutez un gestionnaire d'événements oninput pour exécuter la fonction
        inputElement.addEventListener("input", function() {
            validerSaisie(this);
        });

       


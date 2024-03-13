 
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
        // Référence Firebase contenant les adresses e-mails
        // Écoute de l'événement "click" sur le bouton de recherche
        function submitmy(){ 
        //const emailRef = firebase.database().ref('utilisateurs');
          document.getElementById('preloader').style.display = "block"
          //var fullname = document.getElementById('name').value
          //var username = document.getElementById('username').value
          const email = document.getElementById('email').value;
          var password = document.getElementById('password').value
          //var phoneuserIDvalue = document.getElementById('phoneuserIDval').value
          if(email &&  password){
          //L'adresse e-mail n'a pas été trouvée
          // Inscription de l'utilisateur avec Firebase Authentication
          firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
              // L'utilisateur est inscrit avec succès
              const user = userCredential.user;
              const userwId = user.uid;
              localStorage.setItem("wmyuserId", userwId)
              // Envoi de l'e-mail de vérification
              user.sendEmailVerification()
                .then(() => {
                // E-mail de vérification envoyé avec succès
                trackSuccessfulRegistration()
                document.getElementById('preloader').style.display = "none"
                document.getElementById('contentSignup').style.display = "none"
                Swal.fire({
                icon: 'info',
                allowOutsideClick: false,
                confirmButtonText: i18next.t('IDTRANSLATEUSERD33'),
                html : i18next.t('IDTRANSLATEPROFIL45AQVASQMAIL'),
                }).then((result)=>{
                if(result.isConfirmed){
                  window.location.href = "login.html"
                }
                })
                //  window.location.href = "validemail.html"
                  
                })
                .catch((error) => {
                  // Gestion des erreurs lors de l'envoi de l'e-mail de vérification
                  console.error('Erreur lors de l\'envoi de l\'e-mail de vérification :', error);
                });
            })
            .catch((error) => {
              // Gestion des erreurs lors de l'inscription de l'utilisateur
              const errorCode = error.code;
              const errorMessage = error.message;
              //console.error('Erreur lors de l\'inscription de l\'utilisateur :', errorMessage);
              if (errorCode === 'auth/email-already-in-use') {
              // L'adresse e-mail est déjà utilisée par un autre compte
              // alert('Adresse e-mail déjà utilisée par un autre compte.');
              // L'adresse e-mail a été trouvée
              document.getElementById('preloader').style.display = "none"
              document.getElementById('email').value = ""      
              document.getElementById('password').value = ""
      
              document.getElementById('contentSignup').style.display = "none" 
              document.getElementById('modalID').style.display = "block"
              var dreamIndemo = document.getElementById("dreamIndemo"); // Remplacez "nom-du-bouton" par l'ID réel de votre bouton
              dreamIndemo.click();
              document.getElementById('iconid').innerHTML = `  <img src="./../formulaire/assets/imageNoSucess.svg" alt=""></i>`
              document.getElementById('etatalert').innerHTML = `<p id="IDTRANSLATESIGNUP14" style="color: black !important;"></p>`
              document.getElementById('smsalert').innerHTML = `<p id="IDTRANSLATESIGNUP15" style="color: black !important;"></p>`
              setTimeout(()=>{
              document.getElementById('contentSignup').style.display = "block" 
              document.getElementById('modalID').style.display = "none" 
              },5000)
              //alert(`L'adresse e-mail ${email.email} de ${emailKey}a été trouvée dans Firebase !`)
              var texteTraduitprofil14X = i18next.t("IDTRANSLATESIGNUP14");
              $('[id="IDTRANSLATESIGNUP14"]').text(texteTraduitprofil14X);
      
              var texteTraduitprofil15X = i18next.t("IDTRANSLATESIGNUP15");
              $('[id="IDTRANSLATESIGNUP15"]').text(texteTraduitprofil15X);
              } else if(auth/user-not-found) {
                document.getElementById('preloader').style.display = "none"
                Swal.fire({
                  title: "Ooops",
                  text: i18next.t('IDTRANSLATEPROFIL42Q'),
                icon: 'error'
                }).then((result)=>{
                if(result.isConfirmed){
                  window.location.href = "signup.html"
                }
                })
              }
            });
      
        }else{
        //alert("les données ne sont pas")
        document.getElementById('preloader').style.display = "none"
       }
      }
      
      
        var checkbox = document.getElementById("myCheckbox");
        var ToSignupID = document.getElementById("toSignupID");
        var AcceptID = document.getElementById("acceptID");
        var ReadID = document.getElementById("readID");
      
        checkbox.addEventListener("change", function() {
          if (checkbox.checked) {
            ToSignupID.disabled = false;  // Activer le bouton
            AcceptID.style.display = "block "
            ReadID.style.display = "none"
          } else {
            ToSignupID.disabled = true;   // Désactiver le bouton
            AcceptID.style.display = "none"
            ReadID.style.display = "block"
          }
        });
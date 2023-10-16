    //jQuery time
    var current_fs, next_fs, previous_fs; //fieldsets
    var left, opacity, scale; //fieldset properties which we will animate
    var animating; //flag to prevent quick multi-click glitches
    
    $(".next").click(function(){
      if(animating) return false;
      animating = true;
      
      current_fs = $(this).parent();
      next_fs = $(this).parent().next();
      
      //activate next step on progressbar using the index of next_fs
      $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
      
      //show the next fieldset
      next_fs.show(); 
      //hide the current fieldset with style
      current_fs.animate({opacity: 0}, {
        step: function(now, mx) {
          //as the opacity of current_fs reduces to 0 - stored in "now"
          //1. scale current_fs down to 80%
          scale = 1 - (1 - now) * 0.2;
          //2. bring next_fs from the right(50%)
          left = (now * 50)+"%";
          //3. increase opacity of next_fs to 1 as it moves in
          opacity = 1 - now;
          current_fs.css({
            'transform': 'scale('+scale+')',
            'position': 'absolute'
          });
          next_fs.css({'left': left, 'opacity': opacity});
        }, 
        duration: 800, 
        complete: function(){
          current_fs.hide();
          animating = false;
        }, 
        //this comes from the custom easing plugin
        easing: 'easeInOutBack'
      });
    });
    
    $(".previous").click(function(){
      if(animating) return false;
      animating = true;
      
      current_fs = $(this).parent();
      previous_fs = $(this).parent().prev();
      
      //de-activate current step on progressbar
      $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
      
      //show the previous fieldset
      previous_fs.show(); 
      //hide the current fieldset with style
      current_fs.animate({opacity: 0}, {
        step: function(now, mx) {
          //as the opacity of current_fs reduces to 0 - stored in "now"
          //1. scale previous_fs from 80% to 100%
          scale = 0.8 + (1 - now) * 0.2;
          //2. take current_fs to the right(50%) - from 0%
          left = ((1-now) * 50)+"%";
          //3. increase opacity of previous_fs to 1 as it moves in
          opacity = 1 - now;
          current_fs.css({'left': left});
          previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
        }, 
        duration: 800, 
        complete: function(){
          current_fs.hide();
          animating = false;
        }, 
        //this comes from the custom easing plugin
        easing: 'easeInOutBack'
      });
    });
    
    $(".submit").click(function(){
      return false;
    })

    //function to control form
    // for age
    const input = document.getElementById('myprofileidâge'); 
    const errorMessage = document.getElementById('errorMessage');
    const PageId = document.getElementById('PageId');
  
    input.addEventListener('input', function() {
      if (!input.checkValidity()) {
        errorMessage.style.display = 'block';
        PageId.style.display = 'none';
      } else {
        errorMessage.style.display = 'none';
        PageId.style.display = 'block';
      }
    });

        // for age
        const myprofileidtrancheâge = document.getElementById('myprofileidtrancheâge'); 
        const errorSmsyour = document.getElementById('errorSmsyour');
        const Pyhold = document.getElementById('Pyhold');
      
        myprofileidtrancheâge.addEventListener('input', function() {
          if (!myprofileidtrancheâge.checkValidity()) {
            errorSmsyour.style.display = 'block';
            Pyhold.style.display = 'none';
          } else {
            errorSmsyour.style.display = 'none';
            Pyhold.style.display = 'block';
          }
        });

    // for taille
   // var myprofileidtaille = document.getElementById('myprofileidtaille');
   // var errorSmsTaille = document.getElementById('errorSmsTaille');
   // var PtailleId = document.getElementById('PtailleId');
  
   // myprofileidtaille.addEventListener('input', function() {
   //   if (!myprofileidtaille.checkValidity()) {
   //     errorSmsTaille.style.display = 'block';
    //    PtailleId.style.display = 'none';
    //  } else {
    //    errorSmsTaille.style.display = 'none';
    //    PtailleId.style.display = 'block';
    //  }
    //});

        // for pods
       {/* var myprofileidpoids = document.getElementById('myprofileidpoids');
        var errorSmspoids = document.getElementById('errorSmspoids');
        var PpoidsId = document.getElementById('PpoidsId');
      
        myprofileidpoids.addEventListener('input', function() {
          if (!myprofileidpoids.checkValidity()) {
            errorSmspoids.style.display = 'block';
            PpoidsId.style.display = 'none';
          } else {
            errorSmspoids.style.display = 'none';
            PpoidsId.style.display = 'block';
          }
        });*/}
    
      // control for phone
    
    var myprofileidtéléphone = document.getElementById('myprofileidtéléphone');
      var errorSmsphone = document.getElementById('errorSmsphone');
      var PphoneId = document.getElementById('PphoneId');

      myprofileidtéléphone.addEventListener('input', function() {
        var value = myprofileidtéléphone.value;       
        // Vérifier si le premier caractère est "+"
        if (value.length > 0 && value.charAt(0) === '+') {
          errorSmsphone.style.display = 'block'; // Afficher le message d'erreur
          PphoneId.style.display = 'none';
        } else {
          errorSmsphone.style.display = 'none'; // Masquer le message d'erreur
          PphoneId.style.display = 'block';
        }
      });

      //for textarea my preference
      function countCharacters() {
        var textarea = document.getElementById("myprofileidpréférences");
        var TextCounpt = document.getElementById("TextCounpt")
        var  maxLength = parseInt(textarea.getAttribute("maxlength"));
        const currentLength = textarea.value.length;
        const remainingChars = maxLength - currentLength;
        TextCounpt.textContent = remainingChars + " caractères restants";
      }

      const myprofileidpréférences = document.getElementById('myprofileidpréférences');
      const TextCounptsms = document.getElementById('TextCounptsms');
      const TextiD = document.getElementById('TextiD');
    
      myprofileidpréférences.addEventListener('input', function() {
        if (myprofileidpréférences.value.length < 100) {
          //TextCounptsms.style.display = 'block';
          //TextiD.style.display = 'none';
        } else {
          //TextCounptsms.style.display = 'none';
          //TextiD.style.display = 'block';
        }
      });


      
      //for textarea my preference
      function countCharactersy() {
        var textarea = document.getElementById("myprofileidprécisions");
        var TextCounpt = document.getElementById("TextCounpty")
        var  maxLength = parseInt(textarea.getAttribute("maxlength"));
        const currentLength = textarea.value.length;
        const remainingChars = maxLength - currentLength;
        TextCounpt.textContent = remainingChars + " caractères restants";
      }

      const myprofileidprécisions = document.getElementById('myprofileidprécisions');
      const TextCounptsmsy = document.getElementById('TextCounptsmsy');
      const TextiDy = document.getElementById('TextiDy');
    
      myprofileidprécisions.addEventListener('input', function() {
        if (myprofileidprécisions.value.length < 50) {
          //TextCounptsmsy.style.display = 'block';
          TextiDy.style.display = 'none';
        } else {
          TextCounptsmsy.style.display = 'none';
          TextiDy.style.display = 'block';
        }
      });


      var numberVaribleTable = []
      var countries; // Variable globale pour stocker la liste des pays

        $(document).ready(function() {
            // Appel à l'API REST Countries
            $.ajax({
                url: "https://restcountries.com/v2/all",
                type: "GET",
                success: function(response) {
                    countries = response; // Stocker la liste des pays
                    
                    // Parcourir la liste des pays et générer les options du select
                    countries.forEach(function(country) {
                        var option = document.createElement("option");
                        option.value = country.alpha2Code;
                        option.text = country.name + " "+getPhonePrefix(country) ;
                        document.getElementById("countrySelect").appendChild(option);
                        document.getElementById("myprofileidSonpays").appendChild(option);
                        document.getElementById("myprofileidnationèèalité").appendChild(option);
                       
                    });
                },
                error: function(error) {
                    console.log("Une erreur s'est produite lors de l'appel à l'API REST Countries:", error);
                }
            });
        });

        // Fonction pour obtenir le préfixe téléphonique du pays
        function getPhonePrefix(country) {
            var prefixes = country.callingCodes;
            if (prefixes.length > 0) {
                return "+" + prefixes[0];
            }
            return "";
        }

        // Fonction pour soumettre le numéro de téléphone
        var PhoneInput = document.getElementById('myprofileidtéléphone');
        function validatePhoneNumber() {
          var selectedCountryCode = document.getElementById("countrySelect").value;
          var phoneNumber = document.getElementById("myprofileidtéléphone").value;
          var countryCode = getPhonePrefixFromCode(selectedCountryCode);

         
          // Vérifier si un pays est sélectionné et si un numéro de téléphone est saisi
          if (selectedCountryCode && phoneNumber) {
           

            if (phoneNumber.length > 0 && phoneNumber.charAt(0) === '+') {
              alert("no no +")
            } else {
              if (!phoneNumber.startsWith(countryCode)) {  
                // Ajouter automatiquement le préfixe du pays au numéro de téléphone
                var numberVarible = countryCode + phoneNumber
                numberVaribleTable.push(numberVarible)
                //alert(countryCode + phoneNumber)
            }else{
              alert("Mettez simplement le numéro sans le préfixe")
            }
            }
              // Vérifier si le préfixe téléphonique correspond au pays sélectionné
          
          }else{
            Swal.showValidationMessage(i18next.t('IDTRANSLATEFORM108'));
            alert("veuillez selectioner le pays")
          }
      }
      

        // Fonction pour obtenir le préfixe téléphonique à partir du code de pays
        function getPhonePrefixFromCode(code) {
            var selectedCountry = countries.find(function(country) {
                return country.alpha2Code === code;
            });

            if (selectedCountry) {
                var prefixes = selectedCountry.callingCodes;
                if (prefixes.length > 0) {
                    return "+" + prefixes[0];
                }
            }
            
            return "";
        } 


        var tableau = [];
  
        document.getElementById("myprofileidSonpays").addEventListener("change", function() {
            var selectedOptions = Array.from(this.selectedOptions).map(function(option) {
                return option.value;
            });
            tableau.push(selectedOptions);
            console.log(tableau)
            getAllOption()
        });
        
      function getAllOption() {
            var allOptions = tableau.flat().join(', ');
            document.getElementById('getAllOption').value = allOptions;
        };


        //function to delete number of input

        function validerSaisie(input) {
          const valeurSaisie = input.value;
          const regexLettres =  /^[A-Za-z\s]+$/;
    
          if (!regexLettres.test(valeurSaisie)) {
            //alert("ne fait pas ça")
            // Effacez la saisie incorrecte
            input.value = input.value.replace(/[^A-Za-z\s]/g, '');
            Swal.fire({
              position: 'top-end',
              icon: 'error',
              title: i18next.t('IDTRANSLATEFOEMXX'),
              showConfirmButton: false,
              timer: 1800
            })
          } else {
            //alert("fait pas ça")
          }
        }

      
{/***

       // function 
        function takeYourCommission(){

        const IDAFILIATEID = localStorage.getItem("IDAFILIATE");
        if(IDAFILIATEID){
        get(child(dbref, "utilisateurs/" + IDAFILIATEID))
            .then((snapshot) => {
               if (snapshot.exists()) {
                  var COMMISSIONVALUE = snapshot.val().COMMISSION  
                    var addCommission = "1"
                     var myComptaConvertis = parseFloat(COMMISSIONVALUE);
                     var addCommissionConvertis = parseFloat(addCommission)
                     var myCommissionAdd = myComptaConvertis + addCommissionConvertis
                     update(ref(db, "utilisateurs/" + IDAFILIATEID), {
                        COMMISSION : myCommissionAdd
                   }).then(() => {         
                    localStorage.removeItem('IDAFILIATE');
                    setTimeout(()=>{
                    document.getElementById('myFormulaireId').style.display = "block"
                    document.getElementById('modalID').style.display = "none"  
                },10000)

                setTimeout(()=>{
                window.location.replace("./../profil.html");
                }, 10000)
                var texteTraduitprofil1X = i18next.t("IDTRANSLATEFORM109");
                $('[id="IDTRANSLATEFORM109"]').text(texteTraduitprofil1X);  
                var texteTraduitprofil1X0 = i18next.t("IDTRANSLATEFORM110");
                $('[id="IDTRANSLATEFORM110"]').html(texteTraduitprofil1X0); 

                })
                .catch((error) => {
                });  
            } else {
                alert("no data");
            }
            })
            .catch((error) => {
             alert("il y a une ERROR " + error);
            });
            }
          }
***/}
        
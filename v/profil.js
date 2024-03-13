    // functio, to active paiement button
      // function to show buttun
      function validerSaisie(input) {
        const valeurSaisie = input.value;
        const regexChiffres = /^\d+$/;
      
        if (!regexChiffres.test(valeurSaisie)) {
          // Effacez la saisie incorrecte
          input.value = input.value.replace(/\D/g, ''); // Remplace tous les caractères non numériques
        } else {
          var payYourUnitybtn = document.getElementById('payYourUnitybtnd');
          payYourUnitybtn.style.display = "block";
          $("#payYourUnitybtnd").prop("disabled", false);
        }
      }
      $(document).ready(function() {
        // Ajoutez un gestionnaire d'événement de clic à toutes les images avec la classe "clickable-image"
        $(".clickable-image").click(function() {
          // Retirez la classe "clicked" de toutes les images pour réinitialiser les autres cadres
          $(".clickable-image").removeClass("clicked");
          tableTotakePaiement.push(clickedImageId)
          var payYourUnity = document.getElementById('payYourUnity');
          if (!payYourUnity.checkValidity()) {       
          }else {
          $("#payYourUnitybtn").prop("disabled", false);
          $("#payYourUnitybtnd").prop("disabled", false);
           // Ajoutez la classe "clicked" à l'image cliquée pour afficher le cadre rouge
           $(this).addClass("clicked");
         }
         var clickedImageId = $(this).attr("id");
          var fees = "INTOUCH"
          if(clickedImageId===fees){
            var payYourUnitybtn = document.getElementById('payYourUnitybtn');
            payYourUnitybtn.style.display = "block"
            var payYourUnitybtnd = document.getElementById('payYourUnitybtnd');
            payYourUnitybtnd.style.display = "none"
          }else{
            var payYourUnitybtnd = document.getElementById('payYourUnitybtnd');
            payYourUnitybtnd.style.display = "block"
            var payYourUnitybtn = document.getElementById('payYourUnitybtn');
            payYourUnitybtn.style.display = "none"
          }
        });
      });
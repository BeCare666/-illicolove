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
      
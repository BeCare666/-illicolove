   // Fonction d'initialisation
    $(document).ready(function () {
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
       
});


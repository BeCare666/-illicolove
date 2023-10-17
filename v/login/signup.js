// Fonction d'initialisation
$(document).ready(function () {
    var table = []
    // Obtenez la géolocalisation de l'utilisateur
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
 
            // Obtenir le code du pays à partir des coordonnées géographiques
            fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`)
            .then(response => response.json())
            .then(data => {
            var countryCode = data.address.country_code;
            var input = document.querySelector("#phone");
            localStorage.setItem('alphacode', countryCode)
            var mycountry = localStorage.getItem("alphacode")

            var iti = window.intlTelInput(input);
            var country = countryCode; // Remplacez par le code du pays détecté
            iti.setCountry(country);
            if(mycountry){
            var selectedCountry = iti.getSelectedCountryData();
            var selectedCountryCode = selectedCountry.iso2;
            alert(selectedCountryCode)
            localStorage.setItem('Countryselect', countryselect)
            var myCountryselect = localStorage.getItem("Countryselect")        
            }
            if(mycountry != myCountryselect){
                alert("vous ne pouvez pas selectionner autre pas")
            }
            })
            .catch(error => {
            console.error("Erreur lors de la requête de géolocalisation : " + error);
            });

        });

        // Ensuite, réglez le pays sélectionné dans le champ de saisie

    }

});


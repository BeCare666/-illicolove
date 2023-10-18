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

    const DialCodeofcountryLocal = localStorage.getItem('DialCodeofcountry');
    if(!DialCodeofcountryLocal){
    Swal.fire({
        title: i18next.t('IDTRANSLATESIALERT1'),
        text: i18next.t('IDTRANSLATESIALERT2'),
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: i18next.t('IDTRANSLATESIALERT3'),
        cancelButtonText: i18next.t('IDTRANSLATESIALERT4'),
        allowOutsideClick: false,
      }).then((result) => {
        if (result.isConfirmed) {
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
            var nameofcountry = selectedCountry.name;
            var dialCodeofcountry = selectedCountry.dialCode;
            var iso2ofcountry = selectedCountry.iso2;
            localStorage.setItem('Nameofcountry', nameofcountry);
            localStorage.setItem('DialCodeofcountry', dialCodeofcountry);
            localStorage.setItem('Iso2ofcountry', iso2ofcountry);
            }
            const inputElement = document.getElementById("phoneuserID");
            const DialCodeofcountryLocal = localStorage.getItem('DialCodeofcountry');
            const defaultValue = `+${DialCodeofcountryLocal}`;
            // Attribuez la valeur par défaut au champ d'entrée
            inputElement.value = defaultValue;
            localStorage.setItem('DefaultValue', defaultValue); 
            
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: i18next.t('IDTRANSLATESIGNUP19OPTIONSERROR'),
                    showConfirmButton: false,
                    allowOutsideClick: false,
                    //timer: 1500
                   // footer: '<a href="">Why do I have this issue?</a>'
                  })
            });

        });

    }
  
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: i18next.t('IDTRANSLATESIGNUP19OPTIONS'),
                showConfirmButton: true,
                allowOutsideClick: false,
                //timer: 1500
               // footer: '<a href="">Why do I have this issue?</a>'
              }).then((result)=>{
                if(result.isConfirmed){
                window.location.href = "./../../contractaffiliate.html"
                }
              })
        }
        })
}else{
    const inputElement = document.getElementById("phoneuserID");
    const alphacode = localStorage.getItem('alphacode')
    const DefaultValueLocal = localStorage.getItem('DefaultValue')
    var input = document.querySelector("#phone");
    var iti = window.intlTelInput(input);
    var country = alphacode; // Remplacez par le code du pays détecté
    iti.setCountry(country);
    inputElement.value = DefaultValueLocal
}
});


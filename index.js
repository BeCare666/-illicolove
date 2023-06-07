window.onload = function(){
  if (/Mobi|Android/i.test(navigator.userAgent)) {
// Code pour appareil mobile
//document.body.style.fontSize = "16px"; // Modifier la taille de la police pour appareils mobiles
document.getElementById('breathing-image').style.paddingRight = "60px"
document.getElementById('breathing-image').style.paddingTop = "30px"
// document.getElementById('tof1').style.height = "62vh"
document.getElementById('tof2').style.height = "62vh"
document.getElementById('tof3').style.height = "62vh"
document.getElementById('tof4').style.height = "62vh" 
document.getElementById('Mymaps').style.margin ="0"
//document.getElementById('Mymaps').style.marginTop ="0"
} else {
    // Code pour ordinateur de bureau
    document.getElementById('Mymapsq').style.marginTop ="5.5vh"
}
var acceptToUseCookies = localStorage.getItem('ToacceptCookies');

if(!acceptToUseCookies){
  Swal.fire({
    title: 'Accepter les cookies',
    html: '<div class="swal-custom-content">' +
      '<div class="swal-icon-container">' +
      '<i class="fas fa-cookie-bite"></i>' +
      '</div>' +
      '<div class="swal-text-container">' +
      '<p>En continuant à utiliser ce site, vous acceptez l\'utilisation des cookies.</p>' +
      '<p>Ces cookies sont utilisés pour améliorer votre expérience et fournir des fonctionnalités persistantes.</p>' +
      '<p>Visiter notre <a href="politique.html">politique en matière de cookies</a>.</p>' +
      '</div>' +
      '</div>',
    icon: 'info',
    showCancelButton: true,
    confirmButtonText: '<i class="fas fa-check"></i> Tout accepter',
    cancelButtonText: '<i class="fas fa-times"></i> Tout refuser',
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    allowOutsideClick: false,
    showClass: {
      popup: 'swal2-noanimation',
      backdrop: 'swal2-noanimation'
    },
    hideClass: {
      popup: '',
      backdrop: ''
    },
    customClass: {
      actions: 'swal-custom-actions'
    },
    onBeforeOpen: () => {
      const confirmButton = Swal.getConfirmButton();
      confirmButton.style.marginRight = '15vh';
    }
  }).then((result) => {
    if (result.isConfirmed) {
     var acceptToUseCookies = true
      localStorage.setItem('ToacceptCookies', acceptToUseCookies)
      Swal.fire(
        'Cookies acceptés',
        'Vous avez accepté l\'utilisation des cookies.',
        'success'
      );
      // Ajoutez votre code pour gérer l'acceptation des cookies ici
    } else {
      Swal.fire(
        'Cookies refusés',
        'Vous avez refusé l\'utilisation des cookies.',
        'warning'
      );
      // Ajoutez votre code pour gérer le refus des cookies ici
    }
  });
}

}
// function to open detail  
var OpendetailIDILLI = document.getElementById('opendetailIDILLI');
var DetailIDILLI = document.getElementById('detailIDILLI');
OpendetailIDILLI.addEventListener('click', function(){
DetailIDILLI.style.display = "block"
})
    
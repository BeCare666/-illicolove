window.onload = function(){

  const urlParams = new URLSearchParams(window.location.search);
  const UserAffiliateID = urlParams.get('id');
  if(UserAffiliateID){
    
    localStorage.setItem("IDAFILIATE", UserAffiliateID)
    localStorage.setItem("IDAFILIATETWO", UserAffiliateID)
    //alert('Oui')
  }
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
    title: 'Accept Cookies',
    html: '<div class="swal-custom-content">' +
      '<div class="swal-icon-container">' +
      '<i class="fas fa-cookie-bite"></i>' +
      '</div>' +
      '<div class="swal-text-container">' +
      '<strong>Welcome to illicolove!</strong>' +
      '<p>To enhance your experience, we use cookies and collect geolocation data.</p>' +
      '<p>By continuing to browse our site, you consent to the use of these technologies.</p>' +
      '<p>Check our <a href="politique.html">privacy policy</a> for more information and to customiourze y preferences.</p>'+
      '</div>' +
      '</div>',
    icon: 'info',
    showCancelButton: true,
    confirmButtonText: '<i class="fas fa-check"></i> Accept All',
    cancelButtonText: '<i class="fas fa-times"></i> Reject All',
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
        'Cookies accepted',
        'You have accepted the use of cookies.',
        'success'
      );
      // Ajoutez votre code pour gérer l'acceptation des cookies ici
      //setTimeout(()=>{
      //  Swal.fire({
      //    text: `
       //   Chers utilisateurs, nous tenons à vous informer que notre site illicolve.com est toujours en cours de développement. 
       //   Nous vous remercions de votre compréhension et de votre patience pendant cette phase de création.`,
      //    icon: 'info'
      //    });
     // },5000)
    } else {
      Swal.fire(
        'Cookies denied',
        'You have refused the use of cookies.',
        'warning'
      );
      // Ajoutez votre code pour gérer le refus des cookies ici
    }
  });
}

}

// function to open detail  
//var OpendetailIDILLI = document.getElementById('opendetailIDILLI');
//var DetailIDILLI = document.getElementById('detailIDILLI');
//OpendetailIDILLI.addEventListener('click', function(){
//DetailIDILLI.style.display = "block"
//})


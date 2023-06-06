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
}
// function to open detail  
var OpendetailIDILLI = document.getElementById('opendetailIDILLI');
var DetailIDILLI = document.getElementById('detailIDILLI');
OpendetailIDILLI.addEventListener('click', function(){
DetailIDILLI.style.display = "block"
})
    
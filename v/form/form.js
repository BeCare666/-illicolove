$(document).ready(function(){

    var current_fs, next_fs, previous_fs; //fieldsets
    var opacity;
    var current = 1;
    var steps = $("fieldset").length;
    
    setProgressBar(current);
    
    $(".next").click(function(){
    
    current_fs = $(this).parent();
    next_fs = $(this).parent().next();
    
    //Add Class Active
    $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
    
    //show the next fieldset
    next_fs.show();
    //hide the current fieldset with style
    current_fs.animate({opacity: 0}, {
    step: function(now) {
    // for making fielset appear animation
    opacity = 1 - now;
    
    current_fs.css({
    'display': 'none',
    'position': 'relative'
    });
    next_fs.css({'opacity': opacity});
    },
    duration: 500
    });
    setProgressBar(++current);
    });
    
    $(".previous").click(function(){
    
    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev();
    
    //Remove class active
    $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
    
    //show the previous fieldset
    previous_fs.show();
    
    //hide the current fieldset with style
    current_fs.animate({opacity: 0}, {
    step: function(now) {
    // for making fielset appear animation
    opacity = 1 - now;
    
    current_fs.css({
    'display': 'none',
    'position': 'relative'
    });
    previous_fs.css({'opacity': opacity});
    },
    duration: 500
    });
    setProgressBar(--current);
    });
    
    function setProgressBar(curStep){
    var percent = parseFloat(100 / steps) * curStep;
    percent = percent.toFixed();
    $(".progress-bar")
    .css("width",percent+"%")
    }
    
    $(".submit").click(function(){
    return false;
    })
    
    });

    //for textarea the aspect
      function countCharactersy() {
        var textarea = document.getElementById("myprofileidprécisions");  
        var TextCounpt = document.getElementById("TextCounpty")
        var TextiDy = document.getElementById("TextiDy")
        var  maxLength = parseInt(textarea.getAttribute("maxlength"));
        const currentLength = textarea.value.length;
        const remainingChars = maxLength - currentLength;
        TextCounpt.textContent = remainingChars + " caractères restants";
        TextiDy.style.display = "none"
        
      }

     //for textarea my preference
      function countCharacters() {
        var textarea = document.getElementById("myprofileidpréférences");
        var TextCounpt = document.getElementById("TextCounpt")
        var TextCounpt = document.getElementById("TextCounpt")
        var  maxLength = parseInt(textarea.getAttribute("maxlength"));
        const currentLength = textarea.value.length;
        const remainingChars = maxLength - currentLength;
        TextCounpt.textContent =   remainingChars + " caractères restants";
        TextiD.style.display = "none"
      }

    
        //function to delete number of input

{/**
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

**/}
      // Attendez que la page soit chargée

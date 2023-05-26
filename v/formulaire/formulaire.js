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

    //select founction

    {/*$(document).ready(function(){
    
        var multipleCancelButton = new Choices('#choices-multiple-remove-button', {
           removeItemButton: true,
           maxItemCount:5,
           searchResultLimit:5,
           renderChoiceLimit:5
         }); 

         var multipleCancelButton1 = new Choices('#choices-multiple-remove-buttonsexe', {
            removeItemButton: true,
            maxItemCount:5,
            searchResultLimit:5,
            renderChoiceLimit:5
          }); 
          var multipleCancelButton2 = new Choices('#choices-multiple-remove-buttonrencontre', {
            removeItemButton: true,
            maxItemCount:5,
            searchResultLimit:5,
            renderChoiceLimit:5,
          }); 
          var multipleCancelButton3 = new Choices('#choices-multiple-remove-buttonSonsexe', {
            removeItemButton: true,
            maxItemCount:5,
            searchResultLimit:5,
            renderChoiceLimit:5
          }); 
          var multipleCancelButton4 = new Choices('#choices-multiple-remove-buttonmatrimoniale', {
            removeItemButton: true,
            maxItemCount:5,
            searchResultLimit:5,
            renderChoiceLimit:5
          }); 
        
        
    });*/}

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
    var myprofileidtaille = document.getElementById('myprofileidtaille');
    var errorSmsTaille = document.getElementById('errorSmsTaille');
    var PtailleId = document.getElementById('PtailleId');
  
    myprofileidtaille.addEventListener('input', function() {
      if (!myprofileidtaille.checkValidity()) {
        errorSmsTaille.style.display = 'block';
        PtailleId.style.display = 'none';
      } else {
        errorSmsTaille.style.display = 'none';
        PtailleId.style.display = 'block';
      }
    });

        // for pods
        var myprofileidpoids = document.getElementById('myprofileidpoids');
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
        });
    
      // control for phone
    
      var myprofileidtéléphone = document.getElementById('myprofileidtéléphone');
      var errorSmsphone = document.getElementById('errorSmsphone');
      var PphoneId = document.getElementById('PphoneId');

      myprofileidtéléphone.addEventListener('input', function() {
        var value = myprofileidtéléphone.value;       
        // Vérifier si le premier caractère est "+"
        if (value.length > 0 && value.charAt(0) !== '+') {
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
          TextCounptsms.style.display = 'block';
          TextiD.style.display = 'none';
        } else {
          TextCounptsms.style.display = 'none';
          TextiD.style.display = 'block';
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
          TextCounptsmsy.style.display = 'block';
          TextiDy.style.display = 'none';
        } else {
          TextCounptsmsy.style.display = 'none';
          TextiDy.style.display = 'block';
        }
      });
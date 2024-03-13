  
          {/*//function to control password
          const passwordInput = document.getElementById('password');
          const passwordStrengthIndicator = document.getElementById('password-strength-indicator');
      
          passwordInput.addEventListener('input', validatePassword);
      
          function validatePassword() {
            const password = passwordInput.value;
            const passwordStrength = calculatePasswordStrength(password);
      
            // Afficher la force du mot de passe à l'utilisateur
            passwordStrengthIndicator.textContent = `Force du mot de passe : ${passwordStrength}`;
      
            // Vérifier si le mot de passe contient des caractères spéciaux
            const containsSpecialChars = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password);
      
            // Si le mot de passe contient des caractères spéciaux, afficher un message d'erreur
            if (containsSpecialChars) {
              alert('Le mot de passe ne doit pas contenir de caractères spéciaux.');
            } else {
              passwordInput.setCustomValidity('');
            }
          }
      
          function calculatePasswordStrength(password) {
            // Logique pour calculer la force du mot de passe
            // Vous pouvez utiliser des critères tels que la longueur, la présence de chiffres, de lettres majuscules, de lettres minuscules, etc.
            // Dans cet exemple, nous utilisons simplement la longueur du mot de passe comme indicateur de force
            const passwordLength = password.length;
      
            if (passwordLength < 8) {
              return 'Faible';
            } else if (passwordLength >= 8 && passwordLength < 12) {
              return 'Moyenne';
            } else {
              return 'Forte';
            }
          }
         */}
         {/* const togglePasswordButton = document.getElementById('toggle-password');
      
          togglePasswordButton.addEventListener('click', togglePasswordVisibility);
      
          function togglePasswordVisibility() {
            if (passwordInput.type === 'password') {
              passwordInput.type = 'text';
              togglePasswordButton.innerText = 'O';
            } else {
              passwordInput.type = 'password';
              togglePasswordButton.innerText = 'X';
            }
          }*/}

      
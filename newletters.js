function newsletters(){
    document.getElementById("submitFormID").addEventListener('click', function(){
    var EmailNewletters = document.getElementById("emailNewletters").value
        // statr envoi de mail de validation
        const apiKey = "1D5731AF3830C76F1A3295A44D90416F8BED40EFEA13E8767E9593501CA32F1E8EE00960B55ECB2336C7D408A052669D";
        const apiUrl = "https://api.elasticemail.com/v2/email/send";
        
        // Définir les paramètres de l'e-mail
        const emailParams = {
          apiKey: apiKey,
          subject: "Un nouveau abonné Newletters!",
          from: "info@illicolove.com",
          fromName: EmailNewletters,
          to: "illicolove0@gmail.com",
          bodyHtml: `
          <table cellpadding="10" cellspacing="0" style="background-color: #f1f1f1; padding: 20px;">
          <tr>
              <td>
                  <h1 style="color: #333; text-align: center !important;">Un nouveau abonné Newletters!</h1>
                  <p style="font-size: 14px; color: #999;">
                      ${EmailNewletters}
                  </p>
                  <p style="font-size: 14px; color: #999;">
                      Cordialement,
                  </p>
                  <p style="font-size: 14px; color: #999;">
                      ${EmailNewletters}
                  </p>
              </td>
          </tr>
      </table>
    
          `
        };
    
        // Effectuer une requête POST vers l'API ElasticEmail
        fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          body: new URLSearchParams(emailParams)
        })
          .then((response) => response.json())
          .then((data) => {
            //console.log(data); // Afficher la réponse de l'API ElasticEmail
            if (data.success) {
              console.log(`Cher(e) utilisateur,

              Merci de vous être abonné(e) à notre newsletter ! Nous sommes ravis de vous avoir parmi nos abonnés.
              
              À partir de maintenant, vous recevrez régulièrement nos dernières actualités, mises à jour et offres spéciales directement dans votre boîte de réception.
              
              Si vous avez des questions, des commentaires ou si vous avez besoin d'aide, n'hésitez pas à nous contacter. Notre équipe se fera un plaisir de vous assister.
              
              Encore une fois, bienvenue dans notre communauté et merci de votre confiance !
              
              Cordialement,
              
              illicolove`);
            } else {
             // console.error("Erreur lors de l'envoi de l'e-mail.");
            }
          })
          .catch((error) => {
            //console.error("Erreur lors de la requête API :", error);
            alert("pas envoyé")
          });
         // end envoi de mail de validation

    })

}newsletters()
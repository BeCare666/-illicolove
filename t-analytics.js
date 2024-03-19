// Fonction pour déclencher l'événement d'inscription réussie
function trackSuccessfulRegistration() {
    gtag('event', 'inscription', {
      'method': 'formulaire',
      'category': 'utilisateurs',
      'label': 'inscription_réussie'
    });
    console.log("inscription")
 }

 // Fonction pour déclencher l'événement d'inscription réussie
function trackSuccessfulLogin() {
    gtag('event', 'connexion', {
      'method': 'formulaire',
      'category': 'utilisateurs',
      'label': 'connexion_réussie'
    });
    console.log("connexion")
 }

  // Fonction pour déclencher l'événement d'inscription réussie
function trackSuccessfulEnd() {
    gtag('event', 'finalisation', {
      'method': 'formulaire',
      'category': 'utilisateurs',
      'label': 'finalisation_réussie'
    });
    console.log("finalisation")
 }
  // Fonction pour déclencher l'événement d'inscription réussie
  function trackSuccessfulforgetpassword() {
    gtag('event', 'Récupération de mot de passe', {
      'method': 'formulaire',
      'category': 'utilisateurs',
      'label': 'Récupération de mot de passe_réussie'
    });
    console.log("Récupération de mot de passe")
 }
// Fonction pour déclencher l'événement d'inscription réussie
function trackSuccessfulSendForm() {
    gtag('event', 'annonce', {
      'method': 'formulaire',
      'category': 'utilisateurs',
      'label': 'annonce_réussie'
    });
    console.log("annonce")
 }

 // Fonction pour déclencher l'événement d'inscription réussie
function trackSuccessfulbuyUnity() {
    gtag('event', 'achat_unité', {
      'method': 'feexpay',
      'category': 'utilisateurs',
      'label': 'achatunité_réussie'
    });
    console.log("achat_unité")
 }

// Fonction pour déclencher l'événement d'inscription réussie
function trackVisiteAllusers() {
    gtag('event', 'visite de tout les utilisateurs ', {
      'method': 'pages',
      'category': 'utilisateurs',
      'label': 'visite_utilisateurs_réussie'
    });
    console.log("visite de tout les utilisateurs")
 }

 // Fonction pour déclencher l'événement d'inscription réussie
function trackVisiteOneuser() {
    gtag("event', 'visite d'un utilisateur ", {
      'method': 'pages',
      'category': 'utilisateurs',
      'label': "visite d'un utilisateur_réussie"
    });
    console.log("visite d'un utilisateur")
 }
  // Fonction pour déclencher l'événement d'inscription réussie
function visiteSurlapage1() {
  gtag("event', 'visite sur la page 1 ", {
    'method': 'pages',
    'category': 'utilisateurs',
    'label': "visite sur la page 1_réussie"
  });
 console.log("visite sur la page 1") 
}

function sendeCNI() {
  gtag("event', 'Envoie de la pièce d'identité  ", {
    'method': 'pages',
    'category': 'utilisateurs',
    'label': "Envoie de la pièce d'identité_réussie"
  });
 console.log("Envoie de la pièce d'identité") 
}
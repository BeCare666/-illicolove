// Fonction pour déclencher l'événement d'inscription réussie
function trackSuccessfulRegistration() {
    gtag('event', 'inscription', {
      'method': 'formulaire',
      'category': 'utilisateurs',
      'label': 'inscription_réussie'
    });
    alert("inscription")
 }

 // Fonction pour déclencher l'événement d'inscription réussie
function trackSuccessfulLogin() {
    gtag('event', 'connexion', {
      'method': 'formulaire',
      'category': 'utilisateurs',
      'label': 'connexion_réussie'
    });
    alert("connexion")
 }

  // Fonction pour déclencher l'événement d'inscription réussie
function trackSuccessfulEnd() {
    gtag('event', 'finalisation', {
      'method': 'formulaire',
      'category': 'utilisateurs',
      'label': 'finalisation_réussie'
    });
    alert("finalisation")
 }
  // Fonction pour déclencher l'événement d'inscription réussie
  function trackSuccessfulforgetpassword() {
    gtag('event', 'Récupération de mot de passe', {
      'method': 'formulaire',
      'category': 'utilisateurs',
      'label': 'Récupération de mot de passe_réussie'
    });
    alert("Récupération de mot de passe")
 }
// Fonction pour déclencher l'événement d'inscription réussie
function trackSuccessfulSendForm() {
    gtag('event', 'annonce', {
      'method': 'formulaire',
      'category': 'utilisateurs',
      'label': 'annonce_réussie'
    });
    alert("annonce")
 }

 // Fonction pour déclencher l'événement d'inscription réussie
function trackSuccessfulbuyUnity() {
    gtag('event', 'achat_unité', {
      'method': 'feexpay',
      'category': 'utilisateurs',
      'label': 'achatunité_réussie'
    });
    alert("achat_unité")
 }

// Fonction pour déclencher l'événement d'inscription réussie
function trackVisiteAllusers() {
    gtag('event', 'visite de tout les utilisateurs ', {
      'method': 'pages',
      'category': 'utilisateurs',
      'label': 'visite_utilisateurs_réussie'
    });
    alert("visite de tout les utilisateurs")
 }

 // Fonction pour déclencher l'événement d'inscription réussie
function trackVisiteOneuser() {
    gtag("event', 'visite d'un utilisateur ", {
      'method': 'pages',
      'category': 'utilisateurs',
      'label': "visite d'un utilisateur_réussie"
    });
    alert("visite d'un utilisateur")
 }
  // Fonction pour déclencher l'événement d'inscription réussie
function visiteSurlapage1() {
  gtag("event', 'visite sur la page 1 ", {
    'method': 'pages',
    'category': 'utilisateurs',
    'label': "visite sur la page 1_réussie"
  });
 alert("visite sur la page 1")
}
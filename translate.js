$(document).ready(function() {
  // Configuration de i18next pour les différentes langues
  i18next.init({
    lng: localStorage.getItem('selectedLanguage') || 'en',
    debug: true, 
    resources: {
      fr: {
       
        translation : {
          "IDTRANSLATE1": "Accueil",
         // "IDTRANSLATE2": "À propos",
          "IDTRANSLATE3": `Comment ça fonctionne ?`,
          "IDTRANSLATE4": `Termes`,
          "IDTRANSLATE5":"Conditions Générales d’Utilisation",
          "IDTRANSLATE6":"Politique de Confidentialité",
          "IDTRANSLATE6X":"Notre Système d'Affiliation",
          "IDTRANSLATE7":"Contact",
          "IDTRANSLATE8":"S'inscrire",
          "IDTRANSLATE9":"Se connecter",
          "IDTRANSLATECONTACT1":"Contact",
          "IDTRANSLATECONTACT2":"Contactez-nous",
          "IDTRANSLATECONTACT3":"Adresse",
          "IDTRANSLATECONTACT4":'Téléphone',
          "IDTRANSLATECONTACT5":"E-mail", 
          "IDTRANSLATECONTACT6":"Réseaux Sociaux",
          "IDTRANSLATETITLE":"Annonces",
          "IDTRANSLATETITLEFORM":"Formulaire",
          "IDTRANSLATE1INF1":`Votre adresse électronique est collectée et traitée par BAKO FAMILIA & COMPANY pour vous tenir informer de nouvelles fonctionnalités du site illicolove et de ses mises à jour.
          En application de la loi 2017-20 portant code du numérique en République du Bénin, sur la   protection des données à caractère personnel, vous pouvez vous désabonner ou exercer vos droits d’accès, d’opposition, de rectification et de suppression en envoyant un courriel à info@illicolove.com`,
          "IDTRANSLATE10":"illicolove,",
          "IDTRANSLATE11":`Votre plateforme de rencontres, pour lutter contre le célibat et la solitude.`,
          "IDTRANSLATE12":`Nous considérons la solitude involontaire comme un problème humanitaire et nous nous engageons à offrir une solution aux personnes qui en souffrent.`,
          "IDTRANSLATE13":`S'inscrire gratuitement`,
          "IDTRANSLATE13KLM":`Aller sur votre profil`,
         // "IDTRANSLATE14":`À propos de nous`,
         // "IDTRANSLATE15":`Votre plateforme de rencontres en ligne illicolove.com vous est proposée par les Établissements BAKO FAMILIA & COMPANY, une entreprise individuelle(EI) de droit béninois immatriculée au Registre du Commerce et du Crédit Mobilier RCCM RB/COT/08/A4101 ; à l’Identifiant Fiscal Unique (IFU) 3200800938610.`,
      
         // "IDTRANSLATE16":`Elle a pour activités, le Wedding planning (accompagnement dans l’organisation de mariage), le Tourisme-Loisirs, l’organisation de foires et Salons. Elle a été créée en Mai 2008 à Cotonou. `,
         // "IDTRANSLATE17":`Plus de détails`,
          "IDTRANSLATE18":`Nos Objectifs`,
          "IDTRANSLATE19":`Article 16`,
          "IDTRANSLATE20":`Notre Cible`,
      
          "IDTRANSLATE17USER":`Sélection de région`,
          "IDTRANSLATE18USER":`Détails de l'utilisateur`,
          "IDTRANSLATE19USER":`Profil`,
      
          "IDTRANSLATE21":`La mise en service de cette plateforme de rencontres en ligne répond à  nos initiatives de lutte contre le célibat et la solitude.
          Elle matérialise notre action dans la ligne définie par la Déclaration Universelle des
          Droits de l’Homme en son article 16, qui rappelle le droit au mariage pour la femme
          et pour l’homme, et l’importance de la famille qui doit être protégée par la société et
          par l’Etat.`,
         "IDTRANSLATE22":`Nos Valeurs :`,
         "IDTRANSLATE23":`La Fiabilité,`,
         "IDTRANSLATE24":`La Courtoisie et`,
         "IDTRANSLATE25":`La Discrétion.`, 
         "IDTRANSLATE26":` À partir de l'âge nubile, l'homme et la femme, sans aucune restriction quant à la race, la nationalité ou la religion, ont le droit de se marier et de fonder une famille. Ils ont des droits égaux au regard du mariage, durant le mariage et lors de sa dissolution. `,
         "IDTRANSLATE27":` Le mariage ne peut être conclu qu'avec le libre et plein consentement des futurs époux. `,
         "IDTRANSLATE28":` La famille est l'élément naturel et fondamental de la société et a le droit à la protection de la société et de l'État. La solitude, le célibat et l'isolement social constituent un impératif humanitaire qui interpelle les pouvoirs publics, les associations et les entreprises du domaine. La solitude chronique et involontaire constitue un drame individuel vécu en silence par ceux qui en souffrent la plupart du temps. Illicolove.com a vu le jour dans ce contexte, avec la volonté de proposer autrement et simplement des services de rencontres en ligne, en mettant l'accent sur une traque effective des profils fictifs. 
      Bienvenue! `,
         "IDTRANSLATE29":`Nous ciblons uniquement les particuliers :`,
         "IDTRANSLATE30":`Les jeunes âgés de 18 ans au moins.`,
         "IDTRANSLATE31":`Les célibataires involontaires d’âge avancé, les désespéré(es) et déçu(es).`,
         "IDTRANSLATE32":`Les divorcé(es).`,
         "IDTRANSLATE33":`Les Veuf(ves).`,
         "IDTRANSLATE34":`Nos utilisateurs`,
         "IDTRANSLATE35":`Tous nos utilisateurs`,
         "IDTRANSLATE36":`En Afrique`,
         "IDTRANSLATE37":`En Europe`,
         "IDTRANSLATE38":`Autres Pays du Monde`,
        // "IDTRANSLATE39":`Notre équipe`,
        // "IDTRANSLATE40":`Directrice`,
        // "IDTRANSLATE41":`Relectrice, et Responsable marketing`,
        // "IDTRANSLATE42":`Développeur et SEO`,
      
      
         "IDTRANSLATEX1":`Les étapes d'utilisation`,
         "IDTRANSLATEX2":`Voici comment fonctionne illicolove.`,
         "IDTRANSLATEX3":`Inscription`,
         "IDTRANSLATEX4":`Dès votre inscription, illicolove vous offre trois (03) unités d’une valeur de 295 Francs CFA soit 0.43 Euros.
         Une unité coûte 95 Francs CFA soit 0.144 Euros.`,
         "IDTRANSLATEX5":`Connexion`,
         "IDTRANSLATEX6":`Votre connexion sur illicolove vous permet d'accéder à toutes les fonctionnalités et services réservés aux utilisateurs enregistrés.`,
         "IDTRANSLATEX7":`Publier une Annonce`,
         "IDTRANSLATEX8":`En cliquant sur le bouton « Publiez votre annonce », vous pouvez choisir de publier soit sur la page « Afrique », soit sur la page « Europe »; ou sur la page « Autres pays du monde » ; selon votre lieu de résidence. Remplissez simplement le formulaire de recherche qui s’affichera.`,
      
      
      
      
         "toopenPUAID":`suite...`,
         "openPUA":`Nous vous invitons à publier votre annonce sur la page correspondant à votre zone géographique de résidence. Toutefois, vous avez la possibilité de consulter et de prendre contact avec tout profil issu d'une annonce de recherche en dehors de votre zone géographique habituelle.
      Par exemple, si vous habitez en France, veuillez publier votre annonce sur la page "Europe" et vous pouvez également consulter et prendre contact avec des annonces dans les pages "Afrique", "Europe" et "Autres pays du monde".
      Une fois que vous avez rempli et envoyé votre formulaire de recherche, votre annonce apparaîtra dans un délai maximal de 24 heures, si nous jugeons votre profil fiable après relecture et vérifications éventuelles. Il est possible que notre équipe de relecture et de validation vous contacte en privé pour s'assurer de la fiabilité de votre profil. Des précisions sur votre identité, un appel vocal ou vidéo pourraient vous être demandés. Dans cette optique, la validation et l'apparition de votre annonce sur illicolove pourraient excéder 24 heures. La rapidité de la publication de votre annonce dépendra de vous-même.
      Nous écartons systématiquement toute annonce fantaisiste, irréaliste et surtout les faux profils, sans préavis.
      Si vous rencontrez la moindre difficulté pour profiter des services de illicolove.com, nous vous prions de nous écrire à info@illicolove.com.
      `,
          "IDTRANSLATEX9":`Validation de votre compte utilisateur`,
          "IDTRANSLATEX10":`Remplissez le formulaire et cliquez sur « ENVOI ». Nous vérifierons et validerons votre formulaire sous 24h. Vous recevrez un message de confirmation. Si des vérifications supplémentaires sont nécessaires, nous vous en informerons par courriel.`,
          "IDTRANSLATEX11":`Consulter une annonce`,
          "IDTRANSLATEX12":`Le bouton « Consultez les annonces » mène à trois autres boutons :  Afrique  (annonces d’Afrique), Europe (annonces d'Europe) et  Autres pays du monde  (annonces hors Afrique et Europe). Peut-être rencontrerez-vous l'homme ou la femme de votre vie sur illicolove pour seulement 95 francs CFA, soit 0.14 Euros. C'est le coût associé à chaque unité prélevée lorsque vous cliquez sur la case "Pour me contacter" d'un profil qui suscite particulièrement votre intérêt`,
          "IDTRANSLATEX13":`Achat d'unités`,
          "IDTRANSLATEX14":`Vous pouvez recharger votre compte (Mon Plan) à votre convenance, afin de poursuivre vos recherches de rencontres parmi les annonces publiées.             Le compte débit-crédit personnel que vous obtenez dès que vous vous inscrivez vous permet de le recharger selon le moyen de paiement de votre choix. LA DEVISE de facturation sur illicolove est le Franc CFA (XOF).  1 € = 655,957 XOF.`,
          "IDTRANSLATEX15":`Les Questions fréquemment posées.`,
          "IDTRANSLATEX16":` Puis-je faire une belle rencontre sur illicolove ?`,
          "IDTRANSLATEX17":` Oui, à condition de bien remplir le formulaire de recherche en fournissant des informations vraies sur vous.`,
      
      
      
      
          "IDTRANSLATEX18":`Est-ce que votre site de rencontres est payant ?`,
          "IDTRANSLATEX19":` Oui, uniquement pour consulter l’adresse de contact d’un profil qui aura retenu particulièrement votre intérêt.`,
          "IDTRANSLATEX20":`Combien coûte la consultation de l’adresse de contact  d’un profil qui m’attire et m’intéresse ?`,
          "IDTRANSLATEX21":`95 FCFA soit 0.14 Euros.`,
          "IDTRANSLATEX22":` Est-ce que votre site de rencontres est gratuit ?`,
          "IDTRANSLATEX23":`Oui, l’inscription et la publication de votre annonce de recherche amoureuse sont gratuites sur illicolove.`,
          "IDTRANSLATEX24":` Comment publier une annonce de rencontre ?`,
          "IDTRANSLATEX25":`Après votre inscription sur illicolove, cliquez sur le bouton ou l’onglet « PUBLIEZ UNE ANNONCE ». Ensuite sur la page qui va s’afficher, choisissez le nom du             continent qui correspond à votre continent de résidence habituelle. Enfin remplissez             correctement le formulaire de recherche qui va s’afficher puis soumettez.`,
          "IDTRANSLATEX26":` Puis-je résider en Afrique et contacter quelqu’un résidant hors d’Afrique ?`,
          "IDTRANSLATEX27":`Oui !`,
          "IDTRANSLATEX28":`Puis-je résider en Europe et contacter quelqu’un résidant hors d’Europe ?`,
          "IDTRANSLATEX29":`Oui !`,
          "IDTRANSLATEX30":`Puis-je résider en Europe et publier mon annonce de recherche sur les pages « Afrique » et « Autres pays du monde » ?`,
          "IDTRANSLATEX31":`Non ! Publiez votre annonce de recherche uniquement dans la page correspondant à votre continent de résidence.`,
          "IDTRANSLATEX32":` Puis- je recharger mon compte illicolove par mobile money ?`,
          "IDTRANSLATEX33":`Oui !`,
          "IDTRANSLATEX34":` Quel est le prix d’abonnement sur votre site ?`,
          "IDTRANSLATEX35":` Il n’y a pas d’abonnement sur illicolove.`,
          "IDTRANSLATEX36":` Comment puis-je recharger mon compte Crédit-Débit ?`,
          "IDTRANSLATEX37":` Nous mettons à votre disposition un système de paiement sécurisé via plusieurs agrégateurs de paiement. Selon votre préférence, vous avez la possibilité de recharger votre compte soit par carte de crédit, soit par mobile money. Dans votre profil, sur votre tableau de bord personnel, il vous suffit de cliquer sur le bouton vert "RECHARGER MON COMPTE" et de suivre les étapes simplement`,
          "IDTRANSLATEX38":`Dois-je payer pour publier mon annonce de recherche ?`,
          "IDTRANSLATEX39":`Non ! La publication d’une annonce de recherche est gratuite.`,
          "IDTRANSLATEX40":`Dois-je payer pour consulter les annonces ?`,
          "IDTRANSLATEX41":` Non, la consultation des annonces est gratuite. Les frais s'appliquent uniquement lors de l'obtention de l'adresse de contact figurant dans une annonce.`,
          "IDTRANSLATEX42":` Comment fonctionne votre système d’achat d’unités ?`,
          "IDTRANSLATEX43":` Lors de votre inscription, vous recevez automatiquement et gratuitement trois (03) unités de crédit, vous permettant de consulter trois (03) adresses de contacts dans les annonces de votre choix. Chaque unité a une valeur de 95 FCFA, soit 0.14 Euros.
      Une fois que vos unités sont épuisées, vous avez la possibilité d'en acheter en fonction de votre convenance et de votre capacité. La quantité d'unités que vous pouvez acheter varie d'une unité au nombre d'unités que vous désirez.
      `,
          "IDTRANSLATEX44":` Mes unités que j’achète ont-elles une date d’expiration ?`,
          "IDTRANSLATEX45":`Non ! Vos unités sont à durée de validité illimitée.`,
          "IDTRANSLATEX46":`Dois-je m’abonner pour jouir de votre service de rencontres ?`,
      
      
      
      
          "IDTRANSLATEX47":`Sur illicolove, il n’y a aucun abonnement pour jouir de nos services en dehors de l’abonnement au newsletter qui est facultatif.`,
          "IDTRANSLATEX48":`Quelle est la politique de confidentialité sur
          illicolove.com ?`,
          "IDTRANSLATEX49":`Nous accordons une grande importance à la confidentialité de vos informations. Vos données personnelles sont sécurisées et ne sont pas partagées avec des tiers sans votre consentement. Vous pouvez consulter notre politique de confidentialité pour plus  détails`,
          "IDTRANSLATEX50":`ici`,
          "IDTRANSLATEX51":` Où puis-je trouver l'e-mail de validation de mon compte ?`,
          "IDTRANSLATEX52":` Il est possible que l'e-mail de validation de votre compte se trouve dans votre dossier de spams. Les filtres de sécurité des fournisseurs de messagerie peuvent parfois diriger les e-mails de validation vers ces dossiers pour votre protection. Veuillez vérifier votre dossier de spam et assurez-vous de marquer l'e-mail comme "non spam" si vous le trouvez là-bas. Si vous ne parvenez toujours pas à trouver l'e-mail de validation, veuillez contacter notre service d'assistance pour obtenir de l'aide supplémentaire.`,
          "IDTRANSLATETCU1":`Conditions Générales d’Utilisation`,
          "IDTRANSLATETCU2":`Bienvenue sur illicolove.com, une plateforme de rencontres en ligne proposée par BAKO FAMILIA & COMPANY. En utilisant notre site, vous acceptez les termes et conditions décrits ci-dessous.`,
          "IDTRANSLATETCU3":`ARTICLE 1 : Objet`,
          "IDTRANSLATETCU4":`Les présentes « Conditions Générales d’Utilisation » ont pour             objet l’encadrement juridique de l’utilisation du site illicolove.com et de ses services.`,
      
      
      
      
          "IDTRANSLATETCU5":`Ce contrat est conclu entre :`,
          "IDTRANSLATETCU6":`L’Etablissement BAKO FAMILIA & COMPANY propriétaire du site internet, ci-après désigné « l’Éditeur », ET Toute personne physique souhaitant accéder au site et à ses   services, ci-après appelé « l’Utilisateur». Les conditions générales d’utilisation doivent être acceptées  par tout Utilisateur, et son accès au site vaut acceptation de ces conditions.
          Dans les présentes Conditions Générales d’Utilisation, il est convenu que les expressions ou mots suivants, qu’ils soient employés au singulier ou au pluriel, auront la signification suivante :`,
          "IDTRANSLATETCU7":`Annonce de recherche : désigne une publication d’un utilisateur ou visiteur du site, sous forme de texte via notre formulaire, accompagnée ou non  d’une ou de plusieurs photographies représentant son visage.`,
          "IDTRANSLATETCU8":`Services de rencontres amoureuses  : désigne l’accès par l’Utilisateur à l’ensemble des annonces de recherche publiées sur le Site Internet entre autres, les profils, les liens hypertextes, textes, images, vidéos, les contacts ou adresses par le biais du « click to show ».`,
          "IDTRANSLATETCU9":`« Click to show » : «Cliquer pour afficher »  , désigne la fonctionnalité qui permet à tout utilisateur d’afficher l’adresse électronique, le contact téléphonique ou tout autre moyen d’entrer en contact avec un autre utilisateur qui a préalablement  émis une annonce de recherche et renseigné le moyen de son choix de le /la contacter. Cette fonctionnalité qui permet d’obtenir un tel renseignement capital est payante. Son coût est de 95 Francs CFA soit 0,144 Euro environ par clic.`,
         "IDTRANSLATETCU10":`ARTICLE 2 : Mentions légales`,
      
      
      
      
         
         "IDTRANSLATETCU11X":`L’Etablissement BAKO FAMILIA & COMPANY est l’Éditeur du site de rencontres illicolove.com.  Sis au Lot 124  à Agblangandan, elle est une entreprise individuelle de droit béninois. Elle est créée le 29 Mai 2008, immatriculée au Registre du Commerce et du Crédit Mobilier RCCM RB/COT/08/A4101 ; et a pour Identifiant Fiscal Unique (IFU) Numéro : 3200800938610.  Elle est représentée par Gildas Ghislain GANGBAZO.`,
        "IDTRANSLATETCU11":`ARTICLE 3 : Accès aux services`,
        "IDTRANSLATETCU12":`L’Utilisateur du site illicolove.com a accès aux services suivants :`,
        "IDTRANSLATETCU13":`Création d’un compte personnel`,
        "IDTRANSLATETCU14":`Création et publication gratuite de son annonce de recherche
        via notre formulaire à remplir`,
        "IDTRANSLATETCU15":`Consultation des annonces de recherche publiées par les autres utilisateur`,
        "IDTRANSLATETCU16":`L’obtention payante des contacts des profils qui retiennent son intérêt, et présents sur les annonces de recherche, de manière illimitée et à sa convenance (Click to show / Cliquer pour afficher)`,
        "IDTRANSLATETCU17":`Possibilité de contacter l’Editeur pour solliciter une demande de services personnalisés`,
        "IDTRANSLATETCU18":` Tout Utilisateur ayant accès à internet peut accéder gratuitement et depuis n’importe où au site. Les frais supportés par l’Utilisateur pour y accéder (connexion internet, matériel informatique, etc.) ne sont pas à  la charge de l’Éditeur.  Les services cités plus haut ne sont accessibles pour l’Utilisateur que s’il est  membre du site (c’est-à-dire qu’il  est identifié à l’aide de ses identifiants de    connexion) : 
        Le site et ses différents services peuvent être interrompus ou suspendus par l’Éditeur,           notamment à l’occasion d’une maintenance, sans obligation de    préavis ou de justification.`,
        "IDTRANSLATETCU19":`ARTICLE 4 : Responsabilité de l’Utilisateur`,
        "IDTRANSLATETCU20":` L’Utilisateur est responsable des risques liés à l’utilisation de son identifiant de connexion et de son mot de passe.  Le mot de passe de l’Utilisateur doit rester secret. En   cas de divulgation de mot de passe, l’Éditeur décline toute responsabilité. L’Utilisateur assume l’entière responsabilité de l’utilisation qu’il fait des informations et contenus présents sur le site illicolove.com.
        Tout usage du service par l’Utilisateur ayant directement ou indirectement pour conséquence des dommages doit faire l’objet d’une indemnisation au profit du site.
        Le site permet aux utilisateur de publier une annonce de recherche sur le site en remplissant le formulaire “Publier une annonce”.`,
      
      
      
      
      
        "IDTRANSLATETCU21":` L’utilisateur s’engage à fournir des renseignements fiables, proposer des photographies récentes dénuées d’obscénités, écrire dans ses critères de recherche des propos respectueux des autres et de la loi et accepte que sont annonce soit  modérées ou refusées par l’Éditeur, sans obligation de   justification après un refus de sa part de lui fournir des informations complémentaires pour éviter les faux profils.
        En publiant son annonce sur le site, l’Utilisateur cède à  l’Editeur le droit non exclusif et gratuit de représenter, reproduire, adapter,  modifier, diffuser et distribuer son annonce sur les réseaux sociaux, ou directement par un tiers autorisé ; dans le respect de son anonymat ou du mode de confidentialité choisi.
        L’Éditeur s’engage à préserver les anonymats de tout utilisateur en cas de diffusion des annonces sur les réseaux sociaux.`,
        "IDTRANSLATETCU22":`ARTICLE 5 : Responsabilité de l’Éditeur`,
        "IDTRANSLATETCU23":`Tout dysfonctionnement du serveur ou du réseau ne peut engager la responsabilité de l’Éditeur. 
        De même, la responsabilité du site ne peut être engagée en cas de force majeure ou du   fait imprévisible et insurmontable d’un tiers.
        Le site illicolove.com s’engage à mettre en œuvre tous les moyens nécessaires pour garantir la sécurité et la confidentialité des données.
        Toutefois, il n’apporte pas une garantie de sécurité totale. 
        L’Éditeur se réserve la faculté d’une non-garantie de la fiabilité des profils, bien que
        les annonces de recherche diffusées sur le site soient réputées fiables et vérifiées avant la validation de leur publication en back-office par l’équipe de relecture et de validation de l’Editeur.`,
      
      
      
        "IDTRANSLATETCU24":`ARTICLE 6 : Propriété intellectuelle`,
        "IDTRANSLATETCU25":`BAKO FAMILIA & COMPANY est le propriétaire exclusif de tous les droits de propriété intellectuelle portant tant sur la marque, ou la structure que sur le contenu du Site www.illicolove.com. Les contenus du site www.illicolove.com sont destinés à un usage strictement personnel, privé et non collectif, librement pour le contenu  gratuit. Il en est de même pour les fils RSS et les newsletters. En dehors de notre système d’affiliation, toute utilisation dans un cadre professionnel ou commercial ou toute   commercialisation de ce contenu auprès de tiers est interdite, sauf accord exprès de BAKO FAMILIA & COMPANY.`,
        "IDTRANSLATETCU26":`ARTICLE 7 : Données personnelles.`,
        "IDTRANSLATETCU27":`Consultez notre Politique de Confidentialité, données
        personnelles et cookies ici <a href="politique.html"><i class="bi bi-arrow-right-circle"></i></a>`,
        "IDTRANSLATETCU29":`ARTICLE 8 : Liens hypertextes`,
        "IDTRANSLATETCU30":` Les domaines vers lesquels mènent les liens hypertextes présents sur le site n’engagent pas la responsabilité de l’Éditeur BAKO FAMILIA & COMPANY, qui n’a pas de contrôle sur ces liens.  L’Éditeur a mis en place des partenariats avec des fournisseurs de services et peut          proposer à l’Utilisateur des informations concernant d’autres sites et/ou services, par exemple par la mention d’adresses de sites Web, et/ou par la présence de liens hypertextes vers ces sites. Ces liens hypertextes qui redirigeant vers des sites tiers n’ont pas été développés par l’Éditeur et ne lui appartiennent pas. L’Éditeur n’assume par conséquent, aucune responsabilité de ces sites, leur contenu, publicités, produits ou services disponibles sur ou à partir de ces sites. Par ailleurs, la responsabilité de l’Éditeur ne saurait être engagée quant aux informations, opinions et recommandations formulées par ces tiers. `,
      
      
      
        "IDTRANSLATETCU31":`L’Éditeur ne peut être tenu responsable de tout dommages ou          pertes avérés ou allégués, consécutifs ou en relation avec l’utilisation, ou avec le fait d’avoir fait confiance au contenu, à des biens ou des services disponible sur ces services partenaires ou sources externes.  La décision d’activer ces liens relève de la pleine et entière responsabilité de l’Utilisateur.
        L’Éditeur n’est pas responsable de la disponibilité de ces sites et ne peut en contrôler le contenu ni valider la publicité, les produits et autres informations diffusées sur ces sites Internet. Il est possible pour un tiers de créer un lien vers une page du site illicolove.com sans autorisation expresse de l’éditeur.`,
        "IDTRANSLATETCU32":`ARTICLE 9 : Mise en garde Particulière`,
        "IDTRANSLATETCU33": `Dans la vie réelle, tout comme dans la vie virtuelle sur Internet, il est possible de rencontrer des personnes honnêtes, mais également des individus malveillants et des escrocs. Il incombe à chacun d'entre nous d'adopter des comportements sécuritaires, tant dans le monde réel que dans le monde virtuel en ligne. BAKO FAMILIA & COMPANY vous encourage à  :`,
        "IDTRANSLATETCU34":` Ne jamais envoyer de l’argent à un inconnu rencontré
        sur ce site ; et ce sous aucun prétexte.`,
        "IDTRANSLATETCU35":`Ne jamais envoyer de photographies intimes à un contact
        rencontré sur ce site`,
      
      
      
      
        "IDTRANSLATETCU36":`Être sur vos gardes lorsqu’une personne prétend vivre dans
        les environs, mais travaille à l’étranger.`,
        "IDTRANSLATETCU37":` Ne jamais céder sous prétexte d'une situation urgente où un proche serait malade et où votre correspondant virtuel vous demande de l'aider à payer divers frais. En cas de telles situations, nous vous encourageons à signaler le profil de ces escrocs à l'éditeur.`,
        "IDTRANSLATETCU38":` Une relation amoureuse naissante sur illicolove.com ne devrait pas être une source d'ennuis ni impliquer une prise en charge financière de votre part. Soyez donc particulièrement prudent lorsque quelqu'un que vous ne connaissez pas déclare son amour sans avoir pu vous rencontrer. Même après une rencontre physique, prenez le temps nécessaire avant d'engager toute dépense conséquente en numéraire.`,
        "IDTRANSLATETCU39":`Choisir toujours un lieu public pour une première rencontre.`,
        "IDTRANSLATETCU40":`Signaler toujours à un proche vos positions quand vous êtes en compagnie d’une personne inconnue que vous venez de rencontrer fraîchement.`,
        "IDTRANSLATETCU41":`Dénoncer et nous signaler, les tentatives de vente de produits ou de services, les profils qui se révèlent faux malgré nos filtrages après vos échanges en privé, les menaces et intimidations, les propos malsonnants, homophobes, abusifs et offensants, les messages de mineurs, et les demandes d’aides financières ou de  photographies intimes.`,
        "IDTRANSLATETCU42":` Par conséquent, l’Utilisateur reconnaît et accepte sans réserve être pleinement responsable de toute action entreprise faisant suite à la lecture d’une annonce de          rencontre amoureuse et de manière générale à toute information présente sur le Site.La fourniture de ces données ne saurait être assimilée, de quelque façon que ce soit, à un conseil spécifique ou à une aide à la décision. L’Utilisateur est pleinement conscient du caractère aléatoire des rencontres amoureuses aussi bien dans la vie réelle que sur internet.`,
      
        "IDTRANSLATETCU43":` ARTICLE 10 : Suppression des données après 1 an d’inactivité.`,
        "IDTRANSLATETCU44":`Pour des raisons de sécurité, si vous ne vous êtes pas authentifié sur le Site pendant une période d’un an, vous recevrez un e-mail vous invitant à vous connecter dans les plus brefs délais, sans quoi votre profil sera supprimé de  nos bases de données.`,
      
      
      
      
        "IDTRANSLATETCU45":`ARTICLE  11 : Suppression du compte à la demande.`,
        "IDTRANSLATETCU46":`L’Utilisateur a la possibilité de supprimer son Compte à
        tout moment, par simple demande à l’Éditeur ou par le menu de suppression de
        Compte présent dans les paramètres du Compte le cas échéant.`,
        "IDTRANSLATETCU47":`ARTICLE  12 : Suppression du profil en cas de violation des CGU`,
        "IDTRANSLATETCU48":`En cas de violation d’une ou de plusieurs dispositions des CGU ou de tout autre document incorporé aux présentes par référence, l’Éditeur se réserve le droit de mettre fin ou restreindre sans aucun avertissement préalable et à sa seule discrétion, votre usage et accès aux services, à votre compte et à tous les Sites liés.`,
        "IDTRANSLATETCU49":`ARTICLE 13 : Indications en cas de faille de sécurité décelée par l’Éditeur.`,
        "IDTRANSLATETCU50":`Nous nous engageons à mettre en œuvre toutes les mesures         techniques et organisationnelles appropriées afin de garantir un niveau de sécurité adapté au regard des risques d’accès accidentels, non autorisés ou illégaux, de divulgation, d’altération, de perte ou encore de destruction des données personnelles vous concernant.`,
        "IDTRANSLATETCU51":`Dans l’éventualité où nous prendrions connaissance d’un accès illégal aux données personnelles vous concernant stockées sur nos serveurs ou ceux de nos prestataires, ou d’un accès non autorisé ayant pour conséquence la réalisation des risques identifiés ci-dessus, nous nous engageons à :`,
      
      
      
      
      
        "IDTRANSLATETCU52":`Examiner les causes de l’incident et vous en informer
        (public reporting);`,
        "IDTRANSLATETCU53":`Prendre les mesures nécessaires dans la limite du
        raisonnable afin d’amoindrir les effets négatifs et préjudices pouvant résulter
        dudit incident.`,
        "IDTRANSLATETCU54":`ARTICLE 14 : Limitation de la responsabilité`,
        "IDTRANSLATETCU55":`En aucun cas les engagements définis au point ci-dessus
        relatifs à la notification en cas de faille de sécurité ne peuvent être
        assimilés à une quelconque reconnaissance de faute ou de responsabilité quant à
        la survenance de l’incident en question.`,
        "IDTRANSLATETCU56":`ARTICLE 15 : Durée du contrat`,
        "IDTRANSLATETCU57":`La durée du présent contrat est indéterminée. Le contrat
        produit ses effets à l’égard de l’Utilisateur à compter du début de l’utilisation du
        service.`,
        "IDTRANSLATETCU58":`ARTICLE  16 : Droit applicable et juridiction compétente`,
        "IDTRANSLATETCU59":`La langue des présentes CGU est le français et prédominera sur          toutes versions traduites dans une autre langue. Le présent contrat dépend de la législation béninoise, notamment la loi N° 2017-20 du 20 avril 2018 portant Code du Numérique en République du Bénin. Le choix de la loi applicable ne porte pas atteinte à vos droits en tant que         consommateur conformément à la loi applicable de votre lieu de résidence.`,
        "IDTRANSLATETCU60":`Si vous êtes un  consommateur, vous et nous acceptons de se soumettre à la compétence non-exclusive des juridictions béninoises. En cas de litige non résolu à l’amiable entre l’Utilisateur et l’Éditeur, le tribunal de commerce de Cotonou sera compétent pour régler le contentieux.`,
        "IDTRANSLATEPC1":`POLITIQUE DE CONFIDENTIALITE`,
        "IDTRANSLATEPC2":`Mentions légales`,
      
      
      
      
        "IDTRANSLATEPC3":`Les présentes mentions légales et politique de confidentialité disposent et vous éclairent de la
        manière dont BAKO FAMILIA & COMPANY utilise et protège les informations que vous nous
        transmettez, également, lorsque vous utilisez notre site de rencontres amoureuses accessible à
        partir de l’URL : www.illicolove.com.`,
        "IDTRANSLATEPC4":`Nous vous prions de noter que notre politique de confidentialité est susceptible d’être modifiée
        et/ou complétée à tout moment, notamment en vue de se conformer à toute évolution législative, règlementaire, jurisprudentielle ou technologique. Dans un tel cas, la date de sa mise à jour sera indiquée dans la présente politique. Ces modifications engagent l’utilisateur dès leur mise en ligne. 
        Nous vous invitons par conséquent à consulter régulièrement les présentes mentions et politique de confidentialité afin de prendre connaissance de ses éventuelles modifications.`,
        "IDTRANSLATEPC5":` Déclaration à l’Autorité de Protection des Données à caractère Personnel (APDP)`,
        "IDTRANSLATEPC6":`Conformément à la loi n° 2017-20 du 20 avril 2018 portant code du numérique en République du Bénin (Livre 5 ième relatif à la protection des données personnelles et de la vie  privée) le site internet www.illicolove.com a fait l'objet d'une déclaration auprès de l’Autorité de
        Protection des Données à caractère Personnel (apdp.bj) sous le numéro SA-TDP-00601`,
        "IDTRANSLATEPC7":`En tout état de cause, BAKO FAMILIA & COMPANY ne collecte des informations personnelles relatives à l’utilisateur que pour les besoins du service de rencontres amoureuses proposé par son site internet. L’utilisateur fournit ces informations en toute connaissance de cause,  notamment lorsqu’il procède par lui-même à leur saisie.`,
      
      
      
      
      
        "IDTRANSLATEPC8":`Conformément aux dispositions de la loi 2017-20 portant code du numérique en République du Bénin, tout utilisateur dispose d’un droit d’accès, de rectification et  d’opposition aux données personnelles le concernant, en effectuant sa demande écrite et signée,
        accompagnée d’une copie d’une pièce d’identité avec signature du titulaire de la pièce, en
        précisant l’adresse à laquelle la réponse doit être envoyée. Aucune information personnelle d’un utilisateur de notre site internet « www.illicolove.com » n’est publiée, cédée ou vendue sur  un support quelconque ou à des tiers à son insu.`,
        "IDTRANSLATEPC9":`Confidentialité des données`,
        "IDTRANSLATEPC10":`Vos données personnelles sont confidentielles et ne seront en aucun cas communiquées à des tiers. 
        La nature privée de notre service de rencontres amoureuses ne nous permet pas de
        communiquer vos données personnelles (noms, contacts, adresses, etc) à un individu, quel que soit son rang ou sa qualité.`,
        "IDTRANSLATEPC11": `Droit d'accès`,
        "IDTRANSLATEPC12":`En application des dispositions de la loi portant code du numérique en République du Bénin, tout utilisateur de notre site internet www.illicolove.com dispose d’un droit d’accès, de rectification, de modification et de suppression relative aux données qui le concerne individuellement. Ce droit peut être exercé par le titulaire sur demande adressée par voie électronique à l’adresse e-mail suivante : info@illicolove.com. Les informations personnelles collectées ne sont en aucun cas confiées à des tiers.`,
        "IDTRANSLATEPC13":`Droit de rectification`,
      
      
      
      
      
      
        "IDTRANSLATEPC14":`Conformément à la loi portant code du numérique en République du Bénin, tout utilisateur de notre site internet www.illicolove.com peut demander la rectification, la mise à jour, la suppression, le verrouillage ou encore l’effacement des données le concernant, et qui peuvent s’avérer inexactes, erronées, incomplètes, équivoques ou obsolètes.`,
        "IDTRANSLATEPC15":`Durée de conservation.`,
        "IDTRANSLATEPC16":`Vos données personnelles sont conservées par BAKO FAMILIA & COMPANY uniquement pour le temps correspondant à votre besoin de services de rencontres amoureuses. Toutefois, cette  durée de conservation n’excède pas treize (13) mois en cas d'inactivité sur votre compte utilisateur.`,
        "IDTRANSLATEPC17":`Plainte auprès de l’autorité compétente`,
        "IDTRANSLATEPC18":`Si vous considérez que BAKO FAMILIA & COMPANY ne respecte pas ses obligations au regard de vos données personnelles collectées lors de votre visite sur son site internet
        www.illicolove.com, vous pouvez adresser, comme le prescrit la procédure légale, une plainte ou  une demande auprès de l’Autorité de Protection des Données à caractère Personnel(APDP).`,
        "IDTRANSLATEPC19":`Propriété intellectuelle`,
        "IDTRANSLATEPC20":`Tout le contenu du présent site internet, incluant, de façon non limitative, les graphismes, images, textes, vidéos, animations, sons, logos, gifs et icônes ainsi que leur mise en forme sont la   propriété exclusive de BAKO FAMILIA & COMPANY à l'exception des marques, logos ou contenus appartenant à d'autres sociétés partenaires ou auteurs. 
        Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces différents éléments est strictement interdite sans l'accord exprès écrit de BAKO FAMILIA & COMPANY.`,
        "IDTRANSLATEPC21":`Conditions de service`,
        "IDTRANSLATEPC22":` Le site internet www.illicolove.com est proposé en langue française, avec des traductions en  anglais, en espagnol, en allemand, en portugais, en russe, en mandarin(chinois), en arabe, en japonais, en italien et en coréen. Pour un meilleur confort d'utilisation, nous vous recommandons de recourir à des navigateurs compatibles et modernes comme : Chrome, Safari, Firefox.`,
        "IDTRANSLATEPC23":`Informations et suggestions`,
      
      
      
      
      
      
      
        "IDTRANSLATEPC24":`BAKO FAMILIA & COMPANY met en œuvre tous les moyens en sa possession, pour assurer un service de rencontres amoureuses fiable et une mise à jour permanente de son site internet
        www.illicolove.com. Toutefois, des erreurs ou omissions peuvent subvenir. En conséquence, tout utilisateur peut nous envoyer des suggestions ou des informations à : info@illicolove.com et indiquer toutes modifications du site qu'il jugerait pertinentes.`,
        "IDTRANSLATEPC25":`Cookies.`,
        "IDTRANSLATEPC26":`Pour des besoins de performance techniques, de statistiques et d'affichage, le site internet
        www.illicolove.com peut utiliser des cookies. Les cookies sont de petits fichiers textes stockés sur  votre terminal, et qui ne permettent pas l’identification de l’utilisateur, mais qui enregistrent des
        informations relatives à la navigation d’un terminal sur un site internet. Certaines parties de ce
        site ne peuvent être fonctionnelles sans l’acceptation de cookies. Les données ainsi obtenues
        visent à faciliter la navigation ultérieure sur ce site. Les cookies ont également vocation à diverses mesures d’audience et de fréquentation.`,
        "IDTRANSLATEPC27":` Le refus d’installation d’un cookie peut entraîner l’impossibilité d’accéder à certaines fonctionnalités. Tout utilisateur de ce site internet peut toutefois configurer son terminal pour décliner l’installation des cookies, comme indiqué ci-dessous :`,
        "IDTRANSLATEPC28":`Utilisateurs de Safari : Choisissez Safari  Préférences,
        cliquez sur Confidentialité, puis sélectionnez l’option
        relative aux « Cookies et données de site web ». Toujours
        bloquer : Safari ne permet à aucun site web, tiers ni
        annonceur de stocker des cookies et autres données sur
        votre Mac. Cela peut empêcher certains sites web de
        fonctionner correctement.`,
      
      
      
      
      
        "IDTRANSLATEPC29":`Utilisateurs de Safari : Choisissez Safari Préférences,
        cliquez sur Confidentialité, puis sélectionnez l’option
        relative aux « Cookies et données de site web ». Toujours
        bloquer : Safari ne permet à aucun site web, tiers ni
        annonceur de stocker des cookies et autres données sur
        votre Mac. Cela peut empêcher certains sites web de
        fonctionner correctement.`,
        "IDTRANSLATEPC30":`Utilisateurs de Google Chrome : Menu; Paramètres;
        Afficher les paramètres avancés (situé au bas de la page).
        Il faut ensuite cliquer sur le bouton Paramètres de contenu  puis cocher la case Bloquer les cookies et les données de sites tiers, enfin cliquer sur OK pour valider votre choix.`,
        "IDTRANSLATEPC31":`Utilisateurs d’Internet Explorer : Menu  Options Internet 
        Onglet Confidentialité et sur le bouton Avancé pour faire
        apparaitre la fenêtre des Paramètres de confidentialité
        avancés. Cochez ensuite la case Ignorer la gestion
        automatique des cookies, puis sélectionner Refuser dans la colonne Cookies tierces parties.`,
        "IDTRANSLATEPC32":`Utilisateurs de Microsoft Edge : onglet outil / options
        internet. Cliquez sur Confidentialité et choisissez Bloquer
        tous les cookies.`,
      
      
      
      
        "IDTRANSLATEPC33":`Suivant les pratiques en la matière, certains cookies sont
        dispensés du recueil préalable de votre consentement
        dans la mesure où ils sont indispensables au
        fonctionnement de ce site internet. Ils ont pour finalité de
        faciliter la communication par voie électronique. Il s’agit
        notamment des cookies d’identifiant de session,
        d’authentification et de personnalisation de votre interface.
        Ces cookies sont émis et gérés par BAKO FAMILIA &
        COMPANY et sont tous soumis à la présente politique.`,
        "IDTRANSLATEPC34":`Liens hypertextes`,
        "IDTRANSLATEPC35":`Le site internet « www.illicolove.com » peut offrir des liens vers d’autres sites internet ou d’autres ressources disponibles sur Internet. BAKO FAMILIA & COMPANY ne dispose d'aucun moyen pour contrôler les sites en connexion avec son site internet. Par ailleurs, il ne répond pas de la disponibilité de tels sites et sources externes, ni ne la garantit. Il ne peut être tenue pour           responsable de tout dommage, de quelque nature que ce soit, résultant du contenu de ces sites ou sources externes.`,
      
      
      
      
        "IDTRANSLATECONSULTE1":`Afrique`,
        "IDTRANSLATECONSULTE2":`Europe`,
        "IDTRANSLATECONSULTE3":`Autres pays du monde`,
        "IDTRANSLATEPROFIL1": " Compte valide",
        "IDTRANSLATEPROFIL2": " Compte non valide",
        "IDTRANSLATEPROFIL3":`Compte Débit`,
        "IDTRANSLATEPROFIL4":`Compte Débit`,
        "IDTRANSLATEPROFIL5":`Mon Plan`,
        "IDTRANSLATEPROFIL6":`Mon Plan`, 
        "IDTRANSLATEPROFIL7":`Mes données`,
        "myNameIDX":` Supprimer votre compte`,
        "myBtn":` Recharger mon compte`,
        "myBtn2":` Recharger mon compte`,
        "IDTRANSLATEPROFIL9":`Aller à l'accueil`,
        "IDTRANSLATEPROFIL10":`Se déconnecter`,
        "CONSULTEZLESANNONCES":`CONSULTEZ LES ANNONCES`,
        "IDTRANSLATEPROFIL11":`MODIFIEZ VOTRE ANNONCE`, 
        "IDTRANSLATEPROFIL12":`PUBLIEZ UNE ANNONCE`,
       // "IDTRANSLATEPROFIL13":`Vous souhaite la Bienvenue !`,
        "exampleModalLongTitle":`Une unité vaut 95 FCFA, soit 0.144 Euros.`,
        "errorSms":`Vous devez saisir un chiffre.`,
        "SmspayId":`Saisissez ici le nombre d'unités.`,
        "IDTRANSLATEPROFIL14":`Retour`, 
        "payYourUnitybtn":`Valider`,
        "CHOISEYOURPAIEMENT":`Sélectionnez le mode de paiement.`,
        "exampleModalLongTitleX":`Sécurisez votre compte.`,
        "IDTRANSLATEPROFIL15":`Veuillez fournir une réponse que vous n'oublierez jamais. 
        Cette réponse vous sera demandée lors de la récupération de 
        votre compte. Sans cette réponse, votre compte restera inaccessible.`,
        "IDTRANSLATEPROFIL16":` Sélectionnez votre question `,
        "IDTRANSLATEPROFIL17":` Quel est votre mois de naissance ?`,
        "IDTRANSLATEPROFIL18":` Quelle est votre couleur préférée ?`,
        "IDTRANSLATEPROFIL19":`Comment imaginez-vous votre vie quotidienne ?`,
        "IDTRANSLATEPROFIL20":`Qu'est-ce qui est le plus important pour vous ?`,
        "IDTRANSLATEPROFIL21":`Quel est le nom de la personne qui vous inspire ?`,
        "IDTRANSLATEPROFIL22":`Quel est votre pays favoris ?`,
        "IDTRANSLATEPROFIL23":`Quel est votre joueur favoris ?`,
        "IDTRANSLATEPROFIL24":`Quel est votre artiste favoris ?`,
        "IDTRANSLATEPROFIL25":`Quelle est votre réponse ? Juste un mot. Pas d'espace.`,
        
        "submitFormID":`Souscrire`,
        "TOCLOSEMODALID":`Fermer`,   
        "IDTRANSLATEPROFIL26":`Valider`, 
        "IDTRANSLATEPROFIL27":`Réponse de sécurité`,
        "payYourUnity":` Écrire le nombre d'unités `,
        congratulationsTitle: "Félicitation !",
        accountSecureMessage: "Votre compte est sécurisé. Merci !",       
        accountSecureMessageX: "Ne mettez pas d'espace. Merci !",
      
      
        "IDTRANSLATEPROFIL28":`Votre compte de débit est vide. Veuillez acheter des unités pour 
        accéder aux contacts des annonces qui vont vous plaire.`,
        "IDTRANSLATEPROFIL29":` Veuillez épuiser les 3 unités gratuites qui vous ont été offertes. Merci..`,
        "IDTRANSLATEPROFIL30W":`Êtes-vous sûr ?`,
        "IDTRANSLATEPROFIL30":`Vous ne pourrez plus revenir en arrière !`,
        "IDTRANSLATEPROFIL31":`Oui, supprimez-le !`, 
        "IDTRANSLATEPROFIL32":`Êtes-vous sûr ?`,
        "IDTRANSLATEPROFIL33":` Après votre déconnexion, vous avez la possibilité de vous reconnecter.`,
        "IDTRANSLATEPROFIL34":`Oui, déconnecter !`,
        "IDTRANSLATEPROFIL35":`Déconnecté`,
        "IDTRANSLATEPROFIL36":`Vous avez été déconnecté.`,
        "IDTRANSLATEPROFIL37":`Voulez-vous visiter notre page d'accueil ?`,
        "IDTRANSLATEPROFIL38":`Supprimé !`,
        "IDTRANSLATEPROFIL38X":` Succès.`,
        "IDTRANSLATEPROFIL39X":`Votre photo a été mise à jour avec succès.`,
        "IDTRANSLATEPROFIL40X":` Erreur`,
        "IDTRANSLATEPROFIL41X":`Votre photo n’a pas pu être mise à jour.`,
      
        "IDTRANSLATEPROFIL39":` Votre compte a bien été supprimé ! !`,
        "IDTRANSLATEPROFIL40":`Supprimé !`,
        "IDTRANSLATEPROFIL41":`Erreur lors de la suppression de l'utilisateur ! `,
        "IDTRANSLATEPROFIL42":`Il y a une ERREUR`,
        "IDTRANSLATEPROFIL42Q":`Il y a une ERREUR`,
        "IDTRANSLATEPROFIL42QX":`Il y a une ERREUR`,
        "IDTRANSLATEPROFIL43":`Le champs n'est pas bien rempli !`, 
        "IDTRANSLATEPROFIL44":`Quelque chose s'est mal passé !`,
        "IDTRANSLATEPROFIL44IN":`Chers utilisateurs, ce moyen de paiement sera disponible très bientôt. Pour l'instant, veuillez utiliser Feexpay pour effectuer vos transactions. Merci !`,
        "IDTRANSLATEPROFIL45":`Les données ne sont pas mises à jour !`,
        "IDTRANSLATEPROFIL46":` Vous ne disposez d'aucune unité. Merci d'en acheter en accédant à votre profil.`,
        "IDTRANSLATEPROFIL47":`Êtes-vous sûr ?`,
        "IDTRANSLATEPROFIL48":` En effectuant la modification de votre annonce, celle-ci sera soumise à nouveau aux administrateurs pour validation. Ce processus peut prendre jusqu'à 24 heures.`,
      
      
      
      
        "IDTRANSLATEPROFIL49":`Retour`,
        "IDTRANSLATEPROFIL50":`Oui!Changer.`,
        "IDTRANSLATELOGIN1":`Connectez-vous.`,
        "IDTRANSLATELOGIN2":`Email`,
        "IDTRANSLATELOGIN3":`Votre adresse e-mail`,
        "IDTRANSLATELOGIN4":`Mot de passe`,
        "IDTRANSLATELOGIN5":`Votre mot de passe`,
        "IDTRANSLATELOGIN6":`Se souvenir de moi`,
        "IDTRANSLATELOGIN7":`Mot de passe oublié`,
        "IDTRANSLATELOGIN8":`Je n'ai pas un compte.`,
        "IDTRANSLATELOGIN9":`Inscrivez-vous gratuitement`,
        "IDTRANSLATELOGIN10":`Se connecter`,
        "IDTRANSLATELOGIN11":`Succès`,
        "IDTRANSLATELOGIN12":`Vous êtes connecté avec succès !`,
        "IDTRANSLATELOGIN13":`Désolé`,
        "IDTRANSLATELOGIN14":`Mot de passe incorrect !`,
        "IDTRANSLATELOGIN15":`Désolé`,
        "IDTRANSLATELOGIN16":`L'utilisateur n'existe pas avec cet e-mail  !`,
        "IDTRANSLATESIGNUP1":`S'inscrire`,
        "IDTRANSLATESIGNUP2":`Pseudonyme`, 
        "IDTRANSLATESIGNUP3":`Pseudonyme`,
        "IDTRANSLATESIGNUP4":`Nom et Prénoms`, 
        "IDTRANSLATESIGNUP5":`Nom et Prénoms`,
        "IDTRANSLATESIGNUP6":`Email`,
        "IDTRANSLATESIGNUP7":`Votre adresse e-mail`,
        "IDTRANSLATESIGNUP8":`Password`,
        "IDTRANSLATESIGNUP9":`Votre mot de passe`,
        "IDTRANSLATESIGNUP10":`J'ai lu et j'accepte les termes et conditions`,
        "IDTRANSLATESIGNUP11":`Lire et accepter nos  termes et conditions`,
        "IDTRANSLATESIGNUP12":`J'ai déjà un compte.`,
        "IDTRANSLATESIGNUP13":`Connectez-vous`,
        "IDTRANSLATESIGNUP14":`Désolé`,
      
      
      
      
        "IDTRANSLATESIGNUP15":`Un compte est déjà associé à cette adresse e-mail ou ce numéro de téléphone.`,
        "IDTRANSLATESIGNUP16":`Succès`,
        "IDTRANSLATESIGNUP17":`Vous êtes inscrit avec succès !`,
        "IDTRANSLATESIGNUP18":` Erreur lors de l'envoi de l'adresse e-mail à Firebase `, 
        "IDTRANSLATESIGNUP19":`Ne mettez pas d'espace. Merci !`,
        "IDTRANSLATESIGNUP19PHONE":`Veuillez fournir un numéro de téléphone valide.`,
        "IDTRANSLATESIGNUP19PHONEX":`Veuillez fournir un numéro de téléphone valide.`,
        "IDTRANSLATEFORGET1":`Envoyer l'adresse e-mail utilisée lors de votre inscription.`,
        "IDTRANSLATEFORGET2":`E-mail`,
        "IDTRANSLATEFORGET3":`Votre e-mail`,
        "IDTRANSLATEFORGET4":`Envoyer`,
        "IDTRANSLATEFORGET5":`Valider`,
        "IDTRANSLATEFORGET6":`Donner la réponse convenable !`,
        "IDTRANSLATEFORGET7":`Entrer votre nouveau mot de passe !`,
        "IDTRANSLATEFORGET8":`Entrer votre nouveau mot de passe !`, 
        "IDTRANSLATEFORGET9":`Super...`,
        "IDTRANSLATEFORGET10":`Mot de passe mis à jour avec succès !`,
        "IDTRANSLATEFORGET11":`Connectez-vous`,
        "IDTRANSLATEFORGET12":`Ok`,
        "IDTRANSLATEFORGET13":`Erreur lors de la mise à jour de l'e-mail.`,
        "IDTRANSLATEFORGET14":`Ce n'est pas la bonne réponse`,
        "IDTRANSLATEFORGET15":`L'utilisateur n'existe pas.`, 
        "IDTRANSLATEFORM1":`MON PROFIL`,
        "IDTRANSLATEFORM1W":`MON PROFIL`,
        "IDTRANSLATEFORM2":`MON PROFIL`,
        "IDTRANSLATEFORM3":`MON PROFIL`,
        "IDTRANSLATEFORM4":`PROFIL QUE JE CHERCHE`,
        "IDTRANSLATEFORM4W":`PROFIL QUE JE CHERCHE`,
        "IDTRANSLATEFORM5":`PROFIL QUE JE CHERCHE`,
       // "IDTRANSLATEFORM6":`VEUILLEZ REMPLIR LE FORMULAIRE CI-DESSOUS.`,
        "IDTRANSLATEFORM7":`Donnez des informations précises et judicieuses.`,
        "IDTRANSLATEFORM8":`Mon pays de résidence <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM9":`Ma ville de résidence <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM10":`Nom ou Pseudonyme <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM11":`Mon âge <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM9PL":`Ma ville de résidence `,
      
      
      
      
      
        "IDTRANSLATEFORM10X":`Ma ville de résidence`,
        "IDTRANSLATEFORM11X":`Mon âge`,
        "IDTRANSLATEFORM8X":`Mon pays de résidence`,
        "IDTRANSLATEFORM9X":`Mon âge`,
        "IDTRANSLATEFORM12":`Veuillez saisir uniquement des chiffres.<i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM13":`Mon Genre <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM14":`Homme`,
        "IDTRANSLATEFORM15":`Femme`,
        "IDTRANSLATEFORM16":`Transgenre`,
        "IDTRANSLATEFORM17":`Fluide(Genderfluid)`,
        "IDTRANSLATEFORM18":`Intersexe`,
        "IDTRANSLATEFORM19":`Agenre`,
        "IDTRANSLATEFORM20":`Aromantique`,
        "IDTRANSLATEFORM21":`Asexuel.le`,
        "IDTRANSLATEFORM22":`Bisexuel.le`,
        "IDTRANSLATEFORM23":`Cisgenre`,
        "IDTRANSLATEFORM24":`Cisnormativité`,
        "IDTRANSLATEFORM25":`Demiromantique`,
        "IDTRANSLATEFORM26":`Demisexuel.le`,
        "IDTRANSLATEFORM27":`Hétéromantivité`,
        "IDTRANSLATEFORM28":`Iel`,
        "IDTRANSLATEFORM29":`Mégenrer`,
        "IDTRANSLATEFORM30":`Non-binaire`,
        "IDTRANSLATEFORM31":`Pansexuel.le`,
        "IDTRANSLATEFORM32":`Polyamoureux.se`,
        "IDTRANSLATEFORM33":`Queer`,
        "IDTRANSLATEFORM34":`Transgenre`,
        "IDTRANSLATEFORM35":`Transition`,
       // "IDTRANSLATEFORM36":`VEUILLEZ REMPLIR LE FORMULAIRE CI-DESSOUS.`,
        "IDTRANSLATEFORM37":`Donnez des informations précises et judicieuses.`,
        "IDTRANSLATEFORM38":`Ma situation matrimoniale <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM39":`Célibataire`,
        "IDTRANSLATEFORM40":`En couple`,
        "IDTRANSLATEFORM41":`Divorcé(e)`,
        "IDTRANSLATEFORM42":`Veuf(ve)`,
        "IDTRANSLATEFORM43":`Ma nationalité <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM44":`Téléphone <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM45":`Saisissez uniquement votre numéro sans le préfixe du pays<i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM46":`Ma Profession ou mon Occupation <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM47":`Mon Travail`,
       // "IDTRANSLATEFORM48":`VEUILLEZ REMPLIR LE FORMULAIRE CI-DESSOUS.`,
        "IDTRANSLATEFORM49":`Donnez des informations précises et judicieuses.`,
        "IDTRANSLATEFORM50":`Je veux une rencontre <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM51":`Amicale, une compagnie pour briser la solitude`,
        "IDTRANSLATEFORM52":`Durable`,
        "IDTRANSLATEFORM53":`Pouvant aboutir au mariage`,
        "IDTRANSLATEFORM54":`Pièce d'identité`,
        "IDTRANSLATEFORM55":`Photo 1 <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM56":`Photo 2 <i class="fa fa-star required"></i>`,
       // "IDTRANSLATEFORM57":`VEUILLEZ REMPLIR LE FORMULAIRE CI-DESSOUS.`,
        "IDTRANSLATEFORM58":`Donnez des informations précises et judicieuses.`,
        "IDTRANSLATEFORM59":`Son Genre <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM60":`Homme`,
        "IDTRANSLATEFORM61":`Femme`,
        "IDTRANSLATEFORM62":`Transgenre`,
        "IDTRANSLATEFORM63":`Fluide(Genderfluid)`,
        "IDTRANSLATEFORM64":`Intersexe`,
        "IDTRANSLATEFORM65":`Agenre`,
        "IDTRANSLATEFORM66":`Aromantique`,
        "IDTRANSLATEFORM67":`Asexuel.le`,
        "IDTRANSLATEFORM68":`Bisexuel.le`,
      
      
      
      
        "IDTRANSLATEFORM69":`Cisgenre`,
        "IDTRANSLATEFORM70":`Cisnormativité`,
        "IDTRANSLATEFORM71":`Demiromantique`,
        "IDTRANSLATEFORM72":`Demisexuel.le`,
        "IDTRANSLATEFORM73":`Hétéromantivité`,
        "IDTRANSLATEFORM74":`Iel`,
        "IDTRANSLATEFORM75":`Mégenrer`,
        "IDTRANSLATEFORM76":`Non-binaire`,
        "IDTRANSLATEFORM77":`Pansexuel.le`,
        "IDTRANSLATEFORM78":`Polyamoureux.se`,
        "IDTRANSLATEFORM79":`Queer`,
        "IDTRANSLATEFORM80":`Transgenre`,
        "IDTRANSLATEFORM81":`Transition`,
        "IDTRANSLATEFORM82":`Sa tranche d'âge <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM83":`Sa situation matrimoniale <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM84":`Célibataire`,
        "IDTRANSLATEFORM85":`En couple`,
        "IDTRANSLATEFORM86":`Divorcé(e)`,
        "IDTRANSLATEFORM87":`Veuf(ve)`,
        "IDTRANSLATEFORM88":`Son pays de résidence <i class="fa fa-star required" ></i>`,
        "IDTRANSLATEFORM89":`Vous pouvez choisir plusieurs pays. <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM90":`Son pays`,
        "IDTRANSLATEFORM91":`Son pays de résidence`,
      //  "IDTRANSLATEFORM92":`VEUILLEZ REMPLIR LE FORMULAIRE CI-DESSOUS.`,
        "IDTRANSLATEFORM93":`Donnez des informations précises et judicieuses.`,
        "IDTRANSLATEFORM94":`Décrivez l'aspect physique que vous désirez.`,
        "IDTRANSLATEFORM95":`Sa ville d'habitation <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM96":`Sa ville`,
        "IDTRANSLATEFORM97":`Son Travail ou Occupations <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM98":`Son Travail`,
        "IDTRANSLATEFORM99":`Autres précisions.`,
        "IDTRANSLATEFORM100":`Autres précisions`,
        "IDTRANSLATEFORM10w":` Aspects physiques`,
        "IDTRANSLATEFORM101":`Suivant`,
        "IDTRANSLATEFORM102":`Précédent`,
        "IDTRANSLATEFORM103":`Envoyer`,
      
      
      
      
        "IDTRANSLATEFORM104":`<p > Les données à caractère personnel collectées dans le présent formulaire par <strong style="color: #000080;">BAKO FAMILIA & COMPANY</strong> seront exclusivement traitées dans le but de garantir le bon déroulement du service de rencontres amoureuses que vous avez sollicité. Les données à caractère personnel collectées ne sont communiquées à personne sans votre consentement.
        En application des dispositions de la loi 2017-20 portant code du numérique en République du Bénin sur  la protection des données à caractère personnel, le traitement portant sur les données collectées a été déclaré devant l’APDP.</em> </p>
        <hr>
        <p class="mb-0">Conformément à la loi précitée, vous pouvez exercer vos droits d’accès, d’opposition, de rectification et de suppression auprès de <strong style="color: #000080;">BAKO FAMILIA & COMPANY</strong>.
        </em></p>`,
        "IDTRANSLATEFORM105":`Votre image est trop petite. Veuillez sélectionner une image d'au moins 300x300 pixels.`,
        "IDTRANSLATEFORM106":`Une erreur s'est produite lors de l'appel à l'API REST Countries`,
        "IDTRANSLATEFORM107":`Mettez simplement le numéro sans le préfixe`,
        "IDTRANSLATEFORM108":`Veuillez sélectionner le pays.`,
        "IDTRANSLATEFORM109":`Succès`,
        "IDTRANSLATEFORM110":`Votre formulaire est soumis au contrôle pour validation sous 24 heures <i class="fa fa-heart"></i>.`,
        "IDTRANSLATEFORM111":`Désolé`,
        "IDTRANSLATEFORM112":`Tous vos champs ne sont pas remplis.`,
        "IDTRANSLATEUSERD1":`Contactez-moi  <svg xmlns="http://www.w3.org/2000/svg" width="10.444" height="9.7"><defs><clipPath id="a"><path fill="none" d="M0 0h10.444v9.7H0z"/></clipPath></defs><g fill="none" stroke="#2a46cc" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.438" clip-path="url(#a)"><path d="M.719 4.85h8.709M5.594 8.683L9.427 4.85M5.594 1.017L9.427 4.85"/></g></svg>`,
      
      
      
      
      
        "IDTRANSLATEUSERD2":`Pour me contacter`,
        "IDTRANSLATEUSERD3":`<i class="bi bi-alexa" style="font-size: 3vh !important;"></i> Mon Profil `,
        "IDTRANSLATEUSERD4":`Réponses`,
        "IDTRANSLATEUSERD5":`Ma ville de résidence :`,
        "IDTRANSLATEUSERD6":`Mon nom ou pseudonyme:`,
        "IDTRANSLATEUSERD7":`Ma tranche d'âge :`,
        "IDTRANSLATEUSERD8":`Mon genre:`,
        "IDTRANSLATEUSERD9":`Ma situation matrimoniale:`,
        "IDTRANSLATEUSERD10":`Ma nationalité :`,
        "IDTRANSLATEUSERD11":`Mon travail ou occupation:`,
        "IDTRANSLATEUSERD12":`Je veux une rencontre :`,
        "IDTRANSLATEUSERD13":`Mes préférences physiques :`,
        "IDTRANSLATEUSERD14":`Autres précisions :`,
        "IDTRANSLATEUSERD15":`<i class="bi bi-alexa" style="font-size: 3vh !important;"></i> Profil que je cherche`,
        "IDTRANSLATEUSERD16":`Réponses`,
        "IDTRANSLATEUSERD17":`Son genre :`,
        "IDTRANSLATEUSERD18":`Sa tranche d'âge :`,
        "IDTRANSLATEUSERD19":`Sa situation matrimoniale :`,
        "IDTRANSLATEUSERD20":`Son pays de résidence :`,
        "IDTRANSLATEUSERD21":`Sa ville d'habitation :`,
        "IDTRANSLATEUSERD22":`Son travail ou occupation :`,
        "TIDTRANSLATEUSERD23":`En ligne le`,
      
        "IDTRANSLATEUSERD24":`<i class="fas fa-database" style="font-size: 5vh !important; color: #FFB6C1;"></i> Pas de données.`,
        "IDTRANSLATEUSERD25":`Pas de données.`,
        "IDTRANSLATEUSERD26":`Il y a une ERREUR.`,
        "IDTRANSLATEUSERD27":`Votre compte est débité`,
        "IDTRANSLATEUSERD28":`Vos données ne sont pas mises à jour.`,
        "IDTRANSLATEUSERD29":` La possibilité de contacter d'autres utilisateurs ne sera disponible qu'après la publication de votre formulaire de recherche.`,
        "IDTRANSLATEUSERD30":`Voulez-vous  publier votre annonce ?`,
        "IDTRANSLATEUSERD31":` Vos unités sont épuisées. Vous n'avez plus la possibilité de contacter d'autres utilisateurs’.`,
        "IDTRANSLATEUSERD32":` Souhaitez-vous acheter des unités?`,
        "IDTRANSLATEUSERD33":`D'accord`,
        "IDTRANSLATEUSERD34":`Visiter son profil !`,
        "IDTRANSLATEUSERD35":`<i class="bi bi-eye" style="color: white;"></i> Cliquer pour afficher.`,
        "texteIDTRANSLATEUSERD24YX": "en ligne",
        "myNameIDwallet":"Retirez vos commissions.",
        "MYEWALLETID":`<i class="fa fa-align-left"></i>Mon portefeuille`,
        "MYEWALLETID1":"Solde total", 
        "comeBackId":"Retour",
        "idTogetwallet":"Retirer vos gains",
        "HISTORYISMY":"Historique",
        "IDTRANSLATEWALLETU":"En cours",
        "IDTRANSLATEWALLETX":"Payé",
        "IDTRANSLATEWALLET":"Désolé !",
        "IDTRANSLATEWALLETM":"Votre transfert a échoué. Veuillez réessayer plus tard.", 
        "IDTRANSLATEWALLET1":"Félicitations !",
        "IDTRANSLATEWALLET2":"Votre transfert a été effectué avec succès !",
        "TITLEWALLETID": "Portefeuille électronique",
        "IDTRANSLATEFOEMXX": "Veuillez ne saisir que des lettres, les chiffres ne sont pas autorisés dans ce champ.",
        "linkInput": "Copier ici votre lien d'affiliation",
        "TERMINATOR" :"TERMINER",
        "PHOTOID" :"PHOTO",
        "TERMINATORW" :"C'EST FINI",
        "PHOTOIDW" :"PHOTO",
        "STEPS14":"Étape 1 - 4",
        "STEPS23":"Étape 2 - 4",
        "STEPS34":"Étape 3 - 4",
        "STEPS44":"Étape 4 - 4",
        "IDTRANSLATEPROFIL29FILE" :"Souhaitez-vous envoyer cette image ?", 
        "IDTRANSLATEPROFIL29FILE1" :"Retour",
        "IDTRANSLATEPROFIL29FILE2" :"Oui",
        "IDTRANSLATESIGNUP19OPTIONSERROR" :"Une erreur s'est produite lors de la demande de géolocalisation.",
        "IDTRANSLATESIGNUP19OPTIONS" :" Nous regrettons de vous informer que vous ne pouvez pas utiliser nos services tant que votre géolocalisation n'est pas acceptée.",
        "IDTRANSLATESIALERT1" :"information",
        "IDTRANSLATESIALERT2" :"Chers visiteurs, dans le but d'assurer votre sécurité et de lutter contre les fausses annonces, illicolove localise votre pays de résidence.",
        "IDTRANSLATESIALERT3" :"Oui, j'accepte !",
        "IDTRANSLATESIALERT4" :"Refusé",
        "CONTRACTID1":`Contrat d'Affiliation`,
        "CONTRACTID2":`      Entre: illicolove , ci-après dénommé "le site de rencontres",
        et : MOI, ci-après dénommé "l'Affilié(e)".`,
        "CONTRACTID3":`Objet`,
        "CONTRACTID4":`Le présent contrat d'affiliation a pour but de régir la relation entre illicolove et l'Affilié en relation avec le programme d'affiliation du site de rencontres <a href="https://illicolove.com">illicolove.com</a>`,
        "CONTRACTID5":`1. Programme d'Affiliation`,
        "CONTRACTID6":`Illicolove exploite un programme d'affiliation en ligne pour promouvoir ses services de rencontres amoureuses.`,
        "CONTRACTID7":`2. Rôle de l'Affilié`,
        "CONTRACTID8":`L'Affilié s'engage à promouvoir les services du site de rencontres en utilisant des liens d'affiliation uniques fournis par illicolove, ainsi que d'autres moyens promotionnels approuvés par le site.`,
        "CONTRACTID9":`3. Rémunération de l'Affilié`,
        "CONTRACTID10":`3.1. L'Affilié recevra une commission de 100 F CFA pour chaque nouveau membre qui s'inscrit sur le site <a href="https://illicolove.com">illicolove.com</a> via le lien unique d'affiliation de l'Affilié et publie une annonce de recherche amoureuse.`,
        "CONTRACTID11":`3.2. De plus, l'Affilié recevra une commission de 10% sur chaque achat effectué par les membres référés via son lien d'affiliation.`,
        "CONTRACTID11X":`3.3 La commission de 100F CFA ne sera perçu que lorsque le nouveau  membre procède à un achat d'unité supérieur à 100F CFA, afin d'éviter les fraudes à la commission.`,
        "CONTRACTID12":`4. Paiement de la Commission`,
        "CONTRACTID13":`Illicolove versera la commission de l'Affilié sur une base régulière trimestrielle sur demande par mobile money ou par virement bancaire , au choix de l'Affilié. Les frais de reversement sont à la charge de l'Affilié.`,
        "CONTRACTID14":`5. Durée du Contrat`,
        "CONTRACTID15":`Ce contrat d'affiliation entrera en vigueur à la date de son  acceptation par l'Affilié et restera en vigueur jusqu'à ce qu'il soit résilié par l'une ou l'autre des parties, sous réserve d'un préavis écrit de trente (30) jours.`,
        "CONTRACTID16":`6. Résiliation`,
        "CONTRACTID17":`Illicolove ou l'Affilié peut résilier ce contrat à tout moment en fournissant un préavis écrit à l'autre partie. Toute commission non payée sera réglée conformément aux termes de ce contrat.`,
        "CONTRACTID18":`7. Loi Applicable`,
        "CONTRACTID19":`Ce contrat est régi par les lois béninoises et tout litige découlant de ce contrat, à défaut d'être réglé à l'amiable, sera soumis à la juridiction exclusive des tribunaux de Commerce de Cotonou.`,
        "ANNONCEAFFILIATEID" : `        <div class="box--list__items">
        <div class="box--list__item" style="  padding-top: 0 !important; margin-top: 0 !important;">
            <h2 class="box--list__title box--list__titlex" >Gagnez de l'argent en aidant les gens à trouver l'amour sur illicolove !</h2>
            <p class="box--list__description">Vous cherchez une opportunité d'affiliation lucrative ? Rejoignez notre programme d'affiliation unique et augmentez vos revenus 
              en aidant les autres à trouver leur âme sœur. Voici comment ça fonctionne : <br>
              ✅ Recevez 100 F CFA pour chaque nouveau membre qui s'inscrit et qui publie une annonce de recherche amoureuse sur notre site via votre lien d'affiliation. <br>
      
              ✅ En plus, obtenez 10% de commission sur chaque achat effectué par les membres que vous avez référés. Plus ils dépensent, plus vous gagnez !</p>
        </div>
        
        <div class="box--list__item">
            <h2 class="box--list__title box--list__titlex"> Pourquoi choisir notre programme d'affiliation ?</h2>
            <div class="box--list__description">
              ✅ Gagnez de l'argent dès que quelqu'un s'inscrit, et publie son annonce de recherche. <br>
              ✅ Obtenez une commission continue à chaque fois que vos affiliés effectuent un achat sur notre site. <br>
              ✅ Ciblez un public en quête d'amour, une niche passionnante et en croissance constante. <br>
              
            </div>
        </div>
        
        <div class="box--list__item">
            <h2 class="box--list__title"> Rejoignez notre programme</h2>
            <div class="box--list__description">✅  Rejoignez notre programme d'affiliation aujourd'hui et commencez à gagner de l'argent en aidant les gens à trouver l'amour sur illicolove ! 💑
              
             </div>
        </div>
        <div class="box--list__item">
          <h2 class="box--list__title"> Inscrivez-vous.</h2>
          <div class="box--list__description"> 
            ✅ Inscrivez-vous maintenant et augmentez vos revenus : <a href="./v/login/signup.html">inscription</a>
              
            Pour toute question, contactez-nous à info@illicolove.com</div>
      </div>
      </div>`,
          "IDTRANSLATE6WX":`Langues <span> <i class="bi bi-globe2"></i></span> <i class="bi bi-chevron-down"></i> `,
        }

      },
      es: {
        translation : {
          "IDTRANSLATE1": "Inicio",
          "IDTRANSLATE2": " Sobre ",
          "IDTRANSLATE3": `Cómo funciona? `,
          "IDTRANSLATE4": `Términos `, 
          "IDTRANSLATE5":"Condiciones Generales de Uso ",
          "IDTRANSLATE6":" Política de Privacidad ",
          "IDTRANSLATE6X":"Nuestro sistema de afiliados",
          "IDTRANSLATE7":"Contacto",
          "IDTRANSLATE8":" Registrarse ",
          "IDTRANSLATE9":" Conectarse ",
          "IDTRANSLATECONTACT1":"Contacto",
          "IDTRANSLATECONTACT2":" Contáctenos ",
          "IDTRANSLATECONTACT3":" Dirección ",
          "IDTRANSLATECONTACT4":' Teléfono ',
          "IDTRANSLATECONTACT5":"E-mails",
          "IDTRANSLATECONTACT6":" Redes sociales ",
          "IDTRANSLATETITLE":"Anuncios",
          "IDTRANSLATETITLEFORM":"Formulario",
          "IDTRANSLATE1INF1":`Su dirección de correo electrónico es recopilada y procesada por BAKO FAMILIA & COMPANY para mantenerle informado de las nuevas características de la página web o de actualización.
          En aplicación de la ley 2017-20 sobre el código digital en la República de Benín, sobre la protección de los datos de carácter personal, puede darse de baja o ejercer sus derechos de acceso, de oposición, rectificación y supresión enviando un correo electrónico a info@illicolove.com`,

          "IDTRANSLATE10":"illicolove,",
          "IDTRANSLATE11":` Su plataforma de citas, para luchar contra el celibato y la soledad `,
          "IDTRANSLATE12":` Consideramos la soledad involuntaria como un problema humanitario y nos comprometemos a ofrecer una solución a las personas que la padecen.`,
          "IDTRANSLATE13":` Regístrese gratis `,
          "IDTRANSLATE13KLM":`Ir a su perfil`,
          "IDTRANSLATE14":` Sobre nosotros `,
          "IDTRANSLATE15":` Su plataforma de encuentros en línea illicolove.com le es propuesta por los Establecimientos BAKO FAMILIA & COMPANY, una empresa individual(EI) de derecho beninés inscrita en el Registro de Comercio y Crédito Mobiliario RCCM RB/COT/08/A4101; al Identificador Fiscal Único (IFU) 3200800938610.`,
          "IDTRANSLATE16":` Tiene por actividades, el Wedding planning (acompañamiento en la organización de bodas), el Turismo-Ocio, la organización de ferias. Fue creada en mayo de 2008 en Cotonú. `,
          "IDTRANSLATE17":` Más detalles `,
          "IDTRANSLATE18":` Nuestros objetivos `,
          "IDTRANSLATE19":` Artículo 16`,
          "IDTRANSLATE20":` Nuestro objetivo `,
          "IDTRANSLATE17USER":`Selección de región`,
          "IDTRANSLATE18USER":`Detalles del usuario`,
          "IDTRANSLATE19USER":`Perfil`,

          "IDTRANSLATE21":` La puesta en marcha de esta plataforma de citas en línea responde a nuestras iniciativas de lucha contra el celibato y la soledad.
          Materializa nuestra acción en la línea definida por la Declaración Universal de Derechos Humanos en su artículo 16, que recuerda el derecho al matrimonio para la mujer y para el hombre, y la importancia de la familia que debe ser protegida por la sociedad y por el Estado.`,
         "IDTRANSLATE22":` Nuestros valores :`,
         "IDTRANSLATE23":` Fiabilidad,`,
         "IDTRANSLATE24":` La cortesía y `,
         "IDTRANSLATE25":` Discreción.`, 
          "IDTRANSLATE26":` A partir de la edad núbil, el hombre y la mujer, sin ninguna restricción en cuanto a la raza, la nacionalidad o la religión, tienen derecho a casarse y fundar una familia.
         Tienen los mismos derechos con respecto al matrimonio, durante el matrimonio y tras su disolución.`,
         "IDTRANSLATE27":` El matrimonio sólo puede celebrarse con el libre y pleno consentimiento de los futuros cónyuges.`,
         "IDTRANSLATE28":` La familia es el elemento natural y fundamental de la sociedad y tiene derecho a la protección de la sociedad y del Estado.  La soledad, el celibato y el aislamiento social constituyen un imperativo humanitario que interpela a los poderes públicos, las asociaciones y las empresas del sector.  La soledad crónica e involuntaria constituye un drama individual que viven quienes la padecen, la mayoría de las veces en silencio. Illicolove.com nació en este contexto, con la voluntad de proponer de otra manera y simplemente, servicios de citas en línea; con una caza demostrada a los perfiles ficticios. 
        ¡Bienvenida!`,
         "IDTRANSLATE29":` Nuestro objetivo son las personas :`,
         "IDTRANSLATE30":` Jóvenes de 18 años o más.`,
         "IDTRANSLATE31":` Solteros involuntarios de edad avanzada, desesperados y decepcionados.`,
         "IDTRANSLATE32":` Los divorciados.`,
         "IDTRANSLATE33":` viudos, viudas.`,
         "IDTRANSLATE34":` Nuestros usuarios `,
         "IDTRANSLATE35":` Todos nuestros usuarios `,
         "IDTRANSLATE36":` En África `,
         "IDTRANSLATE37":` En Europa `,
         "IDTRANSLATE38":` Otros países del mundo `,
         "IDTRANSLATE39":` Nuestro equipo `,
         "IDTRANSLATE40":` Directora `,
         "IDTRANSLATE41":` Lectora, y responsable de marketing `,
         "IDTRANSLATE42":` Webmaster y SEO `,
         "IDTRANSLATEX1":` Los pasos de uso `,
         "IDTRANSLATEX2":` Así es como funciona illicolove.`,
         "IDTRANSLATEX3":` inscripción `,
         "IDTRANSLATEX4":` Desde su inscripción, illicolove le ofrece tres (03) unidades con un valor de 295 francos CFA, es decir, 0.43 euros.
         Una unidad por valor de 95 francos CFA, es decir, 0.144 euros `,
         "IDTRANSLATEX5":` Conexión `,
         "IDTRANSLATEX6":` Su conexión en illicolove le permite acceder a todas las funcionalidades y servicios reservados a los usuarios registrados. `,
         "IDTRANSLATEX7":` Publicar un anuncio `,
         "IDTRANSLATEX8":` Al hacer clic en el botón «Publicar su anuncio», puede elegir publicar en la página «África», en la página «Europa»; o en la página «Otros países del mundo»; según su lugar de residencia. Simplemente rellene el formulario de búsqueda que aparecerá.`,
         "toopenPUAID":` Más......`,
         "openPUA":`Le invitamos a publicar su anuncio en la página de su zona geográfica de residencia, sin embargo, puede consultar y ponerse en contacto con cualquier perfil de un anuncio de búsqueda fuera de su zona geográfica de residencia.
          Por ejemplo, si usted vive en Francia, debe publicar su anuncio en la página
          «Europa» y puede consultar y ponerse en contacto con anuncios en las páginas «África», «Europa» y «Otros países del mundo»
           Cuando termine de llenar y enviar su formulario de búsqueda, su
           anuncio aparecerá en un plazo máximo de 24 horas, si juzgamos su perfil
           fiable después de la revisión y posibles verificaciones. Nuestro equipo de revisión y validación puede escribirle en privado para asegurarse de la fiabilidad de su perfil. Es posible que se le solicite información sobre su identidad, voz o vídeo. En esta óptica la validación y la aparición de su anuncio en illicolove podrían superar las 24 horas. La celeridad para la publicación de su anuncio dependerá de usted mismo. Descartamos sistemáticamente cualquier anuncio fantasioso, irrealista y sobre todo los falsos perfiles sin previo aviso.
           Si tiene alguna dificultad para disfrutar de los servicios de illicolove.com, por favor escríbanos a info@illicolove.com `,

          "IDTRANSLATEX9":` Validación de su cuenta de usuario `,
          "IDTRANSLATEX10":` Rellene el formulario y haga clic en ENVIAR. Comprobaremos y validaremos su formulario con foto en 24 horas. Recibirá un mensaje de confirmación. Si se requieren verificaciones adicionales, se lo notificaremos por correo electrónico.`,
          "IDTRANSLATEX11":` Consultar un anuncio `,
          "IDTRANSLATEX12":` El botón Ver anuncios lleva a otros tres botones:  África  (anuncios de África), Europa (anuncios de Europa) y Otros países del mundo  (anuncios fuera de África y Europa). Conocer al hombre o mujer de su vida en illicolove le costará tal vez solo 95 francos CFA o 0.14 euros.
          Esto es lo que cuesta cada unidad que se extrae, cuando se hace clic en el
          casilla «Para contactar conmigo» de un perfil que llama especialmente su atención.`,
          "IDTRANSLATEX13":` Adquisición de unidades `,
          "IDTRANSLATEX14":` Usted puede recargar su cuenta a su conveniencia, con el fin de continuar su búsqueda de citas entre los anuncios publicados.             La cuenta personal de débito y crédito que se obtiene tan pronto como se registra le permite recargarlo según el método de pago de su elección. LA DIVISA de facturación en illicolove es el Franco CFA ( XOF).  1 € = 655,957 XOF.`,
          "IDTRANSLATEX15":` Las preguntas más frecuentes.`,
          "IDTRANSLATEX16":` ¿Puedo hacer un buen encuentro en su sitio?`,
          "IDTRANSLATEX17":` Sí, siempre que llene el formulario de búsqueda correctamente y proporcione información verdadera sobre usted.`,




          "IDTRANSLATEX18":` ¿Su sitio de citas es de pago?`,
          "IDTRANSLATEX19":` Sí, solo para consultar la dirección de contacto de un perfil que ha retenido especialmente su interés.`,
          "IDTRANSLATEX20":` ¿Cuánto cuesta consultar la dirección de contacto de un perfil que me atrae y me interesa?`,
          "IDTRANSLATEX21":`95 FCFA, es decir, 0,14 euros.`,
          "IDTRANSLATEX22":` ¿Su sitio de citas es gratuito?`,
          "IDTRANSLATEX23":` Sí, el registro y la publicación de su anuncio de búsqueda de amor son gratuitos en illicolove.`,
          "IDTRANSLATEX24":` ¿Cómo publicar un anuncio de búsqueda de amor?`,
          "IDTRANSLATEX25":` Después de su inscripción en illicolove, haga clic en el botón o pestaña «PUBLIQUE UN ANUNCIO». A continuación, en la página que aparecerá, elija el nombre del continente que corresponde a su continente de residencia habitual. Por último, rellene correctamente el formulario de búsqueda que aparecerá y envíe.`,
          "IDTRANSLATEX26":` ¿Puedo residir en África y contactar con un perfil que resida fuera de África?`,
          "IDTRANSLATEX27":` Sí...`,
          "IDTRANSLATEX28":` ¿Puedo vivir en Europa y contactar con un perfil que vive fuera de Europa?`,
          "IDTRANSLATEX29":` Sí...`,
          "IDTRANSLATEX30":` ¿Puedo residir en Europa y publicar mi anuncio de búsqueda en las páginas «África» y «Otros países del mundo»?`,
          "IDTRANSLATEX31":` ¡No! Publique su anuncio de búsqueda solo en la página correspondiente a su zona de residencia.`,
          "IDTRANSLATEX32":` ¿Puedo pagar unidades por mi teléfono?`,
          "IDTRANSLATEX33":` Sí...`,
          "IDTRANSLATEX34":` ¿Cuál es la tarifa de suscripción en su sitio?`,
          "IDTRANSLATEX35":` No hay ninguna suscripción.`,
          "IDTRANSLATEX36":` ¿Cómo puedo recargar mi cuenta de débito?`,
          "IDTRANSLATEX37":` Le ofrecemos un sistema de pago seguro a través de varios agregadores. Según su conveniencia, cargue su cuenta con tarjeta de crédito o con móvil money.  En su perfil, haga clic en el botón «RECARGAR MI CUENTA» y siga los pasos con facilidad.`,
          "IDTRANSLATEX38":` ¿Tengo que pagar para publicar mi anuncio de búsqueda?`,
          "IDTRANSLATEX39":` ¡No! La publicación de un anuncio de búsqueda es gratuita.`,
          "IDTRANSLATEX40":` ¿Tengo que pagar para ver los anuncios?`,
          "IDTRANSLATEX41":` ¡No! La consulta de los anuncios es gratuita, es la obtención de la dirección de contacto contenida en un anuncio que es de pago.`,
          "IDTRANSLATEX42":` ¿Cómo funciona el sistema de débito?`,
          "IDTRANSLATEX43":` Al registrarse, recibirá automáticamente y de forma gratuita tres (03) unidades de crédito que le permitirán consultar tres (03) direcciones de contacto en los anuncios de su elección. Cada unidad tiene un valor de 95 francos CFA, es decir, 0,14 euros.
          Cuando tus unidades se agoten, puedes comprarlas según tu conveniencia y capacidad. La cantidad de unidades que puede comprar va desde una unidad hasta el número de unidades que desee.`,
          "IDTRANSLATEX44":` ¿Mis unidades que compro tienen fecha de caducidad?`,
          "IDTRANSLATEX45":` ¡No! Sus unidades son ilimitadas.`,
          "IDTRANSLATEX46":` ¿Tengo que suscribirme para disfrutar de su servicio de citas?`,




          "IDTRANSLATEX47":` En illicolove, no hay suscripción para disfrutar de nuestros servicios aparte de la suscripción al boletín informativo que es opcional.`,
          "IDTRANSLATEX48":` ¿Cuál es la política de privacidad en illicolove.com?`,
          "IDTRANSLATEX49":`Valoramos la confidencialidad de su información. Sus datos personales son seguros y no se comparten con terceros sin su consentimiento. Puede consultar nuestra política de privacidad para más detalles`,
          "IDTRANSLATEX50":`aquí`,
          "IDTRANSLATEX51":` ¿Dónde puedo encontrar el correo electrónico de validación de mi cuenta?`,
          "IDTRANSLATEX52":` Es posible que el correo electrónico de validación de su cuenta se encuentre en su carpeta de spam o correo basura. Los filtros de seguridad de los proveedores de correo electrónico a veces pueden dirigir los correos electrónicos de validación a esas carpetas para su protección. Por favor revise su carpeta de spam o correo no deseado y asegúrese de marcar el correo electrónico como "no spam" o  "no basura" si lo encuentra allí. Si todavía no puede encontrar el correo electrónico de validación, póngase en contacto con nuestro servicio de soporte para obtener ayuda adicional.`,
          "IDTRANSLATETCU1":` Condiciones Generales de Uso `,

"IDTRANSLATETCU2":` Bienvenido a illicolove.com, una plataforma de citas en línea ofrecida por BAKO FAMILIA & COMPANY. Al utilizar nuestro sitio, usted acepta los términos y condiciones descritos a continuación.`,
          "IDTRANSLATETCU3":` ARTÍCULO 1: Finalidad `,
          "IDTRANSLATETCU4":` Las presentes «Condiciones Generales de Uso» tienen por objeto el encuadramiento jurídico de la utilización del sitio illicolove.com y de sus servicios.`,




          "IDTRANSLATETCU5":` Este contrato se celebra entre:`,
          "IDTRANSLATETCU6":` El Establecimiento BAKO FAMILIA & COMPANY propietario del sitio web, en lo sucesivo denominado «el Editor», Y Toda persona física que desee acceder al sitio y a sus servicios, en adelante denominada «el Usuario». Las condiciones generales de uso deben ser aceptadas por cualquier Usuario, y su acceso al sitio supone la aceptación de estas condiciones.
          En las presentes Condiciones Generales de Uso, se acuerda que las siguientes expresiones o palabras, tanto si se utilizan en singular como en plural, tendrán el siguiente significado:`,
          "IDTRANSLATETCU7":` Anuncio de búsqueda: es una publicación de un usuario o visitante del sitio, en forma de texto a través de nuestro formulario, acompañada o no de una o varias fotografías que representan su trombina.`,
          "IDTRANSLATETCU8":` Servicios de citas  : significa el acceso del Usuario a todos los anuncios de búsqueda publicados en el Sitio Web, entre otros, perfiles, hipervínculos, textos, imágenes, vídeos, contactos o direcciones a través del «click to show».`,
          "IDTRANSLATETCU9":`«Click to show»: «Haga clic para mostrar »  , se refiere a la funcionalidad que permite a cualquier usuario mostrar la dirección de correo electrónico, el contacto telefónico o cualquier otro medio de ponerse en contacto con otro usuario que previamente haya emitido un anuncio de búsqueda y haya indicado el medio de su elección para ponerse en contacto con el/la. Esta funcionalidad que permite obtener tal información capital es de pago. Su coste es de 95 francos CFA, es decir, 0,144 euros aproximadamente por clic.`,
         "IDTRANSLATETCU10":` ARTÍCULO 2: Aviso legal `,
"IDTRANSLATETCU11X":` El establecimiento BAKO FAMILIA & COMPANY es el Editor del sitio de encuentros illicolove.com.  Con sede en Lot 191 parcela b', en Agbalilamè, es una empresa individual de derecho beninés. Fue creada el 29 de mayo de 2008, inscrita en el Registro de Comercio y Crédito Mobiliario RCCM RB/COT/08/A4101; y tiene por Identificador Fiscal Único (IFU) Número: 3200800938610.  Está representada por Gildas Ghislain GANGBAZO.`,
        "IDTRANSLATETCU11":` ARTÍCULO 3: Acceso a los servicios `,
        "IDTRANSLATETCU12":` El Usuario del sitio illicolove.com tiene acceso a los siguientes servicios:`,
        "IDTRANSLATETCU13":` Creación de una cuenta personal `,
        "IDTRANSLATETCU14":` Creación y publicación gratuita de su anuncio de búsqueda a través de nuestro formulario `,
        "IDTRANSLATETCU15":` Consulta de los anuncios de búsqueda publicados por otros usuarios. `,
        "IDTRANSLATETCU16":` La obtención de contactos de pago de los perfiles que retienen su interés, y presentes en los anuncios de búsqueda, de manera ilimitada y a su conveniencia (Click to show/ Clic para ver)`,
        "IDTRANSLATETCU17":` Posibilidad de contactar al Editor para solicitar servicios personalizados `,
        "IDTRANSLATETCU18":` El Sitio Web propone también a la Usuaria que lo desee, la organización parcial o completa de una ceremonia de matrimonio. Cualquier Usuario.a con acceso a internet puede acceder gratuitamente y desde cualquier lugar del sitio. Los gastos en que incurra el Usuario.trice para acceder a ellos (conexión a internet, material informático, etc.) no correrán a cargo del Editor.  Los servicios mencionados anteriormente solo son accesibles para el Usuario si él/ella es miembro del sitio (es decir, que él/ella es identificado mediante sus credenciales de inicio de sesión): 
El sitio y sus diferentes servicios pueden ser interrumpidos o suspendidos por el Editor,   especialmente con motivo de un mantenimiento, sin obligación de preaviso o de justificación.`,
        "IDTRANSLATETCU19":` ARTÍCULO 4: Responsabilidad del Usuario `,
        "IDTRANSLATETCU20":`El Usuario es responsable de los riesgos relacionados con el uso de su ID de inicio de sesión y contraseña.  La contraseña del Usuario debe permanecer en secreto. En caso de divulgación de la contraseña, el Editor no asume ninguna responsabilidad. El Usuario asume la plena responsabilidad del uso que haga de las informaciones y contenidos presentes en el sitio illicolove.com.
        Cualquier uso del servicio por parte del Usuario que tenga como consecuencia directa o indirecta daños debe ser objeto de una indemnización en beneficio del sitio.
        El sitio permite a los usuarios publicar un anuncio de búsqueda en el sitio rellenando el formulario "Publicar un anuncio"”.`,





        "IDTRANSLATETCU21":` El usuario se compromete a proporcionar información fiable, proponer fotografías recientes sin obscenidades, escribir en sus criterios de búsqueda palabras respetuosas de los demás y de la ley y acepta que se anuncien o rechacen por el Editor, sin obligación de justificar su negativa a facilitar información adicional para evitar falsos perfiles.
        Al publicar su anuncio en el sitio, el Usuario cede al Editor el derecho no exclusivo y gratuito de representar, reproducir, adaptar,  modificar, difundir y distribuir su anuncio en las redes sociales, o directamente por un tercero autorizado; respetando su anonimato o el modo de confidencialidad elegido.
        El Editor se compromete a preservar el anonimato de todo. usuario en caso de difusión de los anuncios en las redes sociales.`,
        "IDTRANSLATETCU22":` ARTÍCULO 5: Responsabilidad del Editor `,
        "IDTRANSLATETCU23":` Cualquier mal funcionamiento del servidor o de la red no puede comprometer la responsabilidad del Editor. 
        Del mismo modo, la responsabilidad del sitio no puede ser comprometida en caso de fuerza mayor o por el hecho imprevisible e insuperable de un tercero.
        El sitio illicolove.com se compromete a poner en práctica todos los medios necesarios para garantizar la seguridad y la confidencialidad de los datos.
        Sin embargo, no ofrece una garantía de seguridad total. 
        El Editor se reserva la facultad de no garantizar la fiabilidad de los perfiles, aunque  los anuncios de búsqueda difundidos en el sitio se consideren fiables y se verifiquen antes de la validación de su publicación en back-office por el equipo de revisión y validación del Editor.`,


        "IDTRANSLATETCU24":` ARTÍCULO 6: Propiedad intelectual `,
"IDTRANSLATETCU25":` BAKO FAMILIA & COMPANY es el propietario exclusivo de todos los derechos de propiedad intelectual sobre la marca, la estructura y el contenido del Sitio www.illicolove.com. Los contenidos del sitio www.illicolove.com están destinados a un uso estrictamente personal, privado y no colectivo, libremente para el contenido gratuito. Lo mismo ocurre con los canales RSS y los boletines informativos. Queda prohibido el uso o la comercialización de dicho contenido en el ámbito profesional o comercial con terceros, a menos que BAKO FAMILIA & COMPANY lo apruebe expresamente.`,
        "IDTRANSLATETCU26":` ARTÍCULO 7: Datos personales.`,
        "IDTRANSLATETCU27":` Consulte nuestra Política de Privacidad, datos personales y cookies aquí <a href="politique.html"><i class="bi bi-arrow-right-circle"></i></a>`,
        "IDTRANSLATETCU29":` ARTÍCULO 8: Hipervínculos `,
        "IDTRANSLATETCU30":` Los dominios a los que conducen los hipervínculos presentes en el sitio no son responsabilidad del Editor BAKO FAMILIA & COMPANY, que no tiene control sobre estos enlaces.  El Editor ha establecido asociaciones con proveedores de servicios y puede ofrecer al Usuario información sobre otros sitios y/o servicios, por ejemplo, indicando direcciones de sitios web y/o la presencia de hipervínculos a dichos sitios. Estos hipervínculos que redirigen a sitios de terceros no han sido desarrollados por el Editor y no le pertenecen. Por lo tanto, el Editor no asume ninguna responsabilidad por estos sitios, su contenido, anuncios, productos o servicios disponibles en o desde estos sitios. Por otra parte, el Editor no será responsable de la información, las opiniones y las recomendaciones formuladas por dichos terceros.`,
 "IDTRANSLATETCU31":` El Editor no se hace responsable de ningún daño o pérdida que se haya demostrado o alegado, sea consecuencia o en relación con el uso, o con la confianza en el contenido, bienes o servicios disponibles en dichos servicios asociados o fuentes externas.  La decisión de activar estos enlaces es totalmente responsabilidad del Usuario.
        El Editor no es responsable de la disponibilidad de estos sitios y no puede controlar su contenido ni validar la publicidad, los productos y otras informaciones difundidas en estos sitios web. Es posible que un tercero cree un enlace a una página del sitio illicolove.com sin el permiso expreso del editor.`,
        "IDTRANSLATETCU32":` ARTÍCULO 9: Advertencia Especial `,
        "IDTRANSLATETCU33":` Tanto en la vida real como en la virtual en Internet, puedes cruzarte con gente honesta, así como con gente malvada y estafadora. 
Nos corresponde a cada uno de nosotros adoptar ciertas actitudes de seguridad en la vida real y, por añadidura, en el mundo virtual en Internet. BAKO FAMILIA & COMPANY le invita a:`,
        "IDTRANSLATETCU34":` Nunca envíe dinero a un desconocido que se encuentre en este sitio, bajo ninguna circunstancia.`,
        "IDTRANSLATETCU35":` Nunca envíe fotografías íntimas a un contacto encontrado en este sitio`,



        "IDTRANSLATETCU36":` Estar en guardia cuando una persona pretende vivir en los alrededores, pero trabaja en el extranjero.`,
        "IDTRANSLATETCU37":` Nunca ceder bajo el pretexto de una situación urgente en la que un familiar está enfermo y su corresponsal virtual le pide que le ayude a pagar diversos gastos. En tal caso, le invitamos a denunciar el perfil de estos estafadores al Editor.`,
        "IDTRANSLATETCU38":` Una relación romántica en ciernes en illicolove.com no puede ser una fuente de problemas y de apoyo financiero. Por lo tanto, ten una gran desconfianza cuando un desconocido te declara su amor sin haber podido encontrarte; e incluso después de un encuentro físico, tómate el tiempo necesario antes de gastar mucho dinero en efectivo.`,
        "IDTRANSLATETCU39":` Elegir siempre un lugar público para una primera reunión.`,
        "IDTRANSLATETCU40":` Informe siempre a un familiar de sus posiciones cuando esté en compañía de una persona desconocida que acaba de conocer recientemente.`,
        "IDTRANSLATETCU41":` Denunciar e informar los intentos de venta de productos o servicios, los perfiles que se revelan falsos a pesar de nuestros filtros después de sus intercambios en privado, las amenazas e intimidaciones, las declaraciones malsonantes, homófobas, abusivas y ofensivas, los mensajes de menores, y las solicitudes de ayuda financiera o de fotos íntimas `,
        "IDTRANSLATETCU42":` Por lo tanto, el Usuario reconoce y acepta sin reservas ser plenamente responsable de cualquier acción emprendida tras la lectura de un anuncio de encuentro amoroso y de manera general a cualquier información presente en el Sitio. El suministro de estos datos no puede asimilarse en modo alguno a un asesoramiento específico o a una ayuda a la decisión. El Usuario es plenamente consciente del carácter aleatorio de los encuentros amorosos tanto en la vida real como en internet. `,
        "IDTRANSLATETCU43":` ARTÍCULO 10: Eliminación de datos después de un año de inactividad.`,
        "IDTRANSLATETCU44":` Por razones de seguridad, si no se ha autenticado en el Sitio durante un período de un año, recibirá un correo electrónico pidiéndole que inicie sesión lo antes posible, de lo contrario su perfil será eliminado de nuestras bases de datos.`,




        "IDTRANSLATETCU45":` ARTÍCULO 11: Supresión de la cuenta a petición.`,
        "IDTRANSLATETCU46":` El Usuario tiene la opción de eliminar su Cuenta en
        en cualquier momento, por simple solicitud al Editor o por el menú de eliminación de  cuenta presente en la configuración de la Cuenta si procede.`,
        "IDTRANSLATETCU47":` ARTÍCULO 12: Supresión de la cuenta en caso de violación de las CGU`,
        "IDTRANSLATETCU48":` En caso de violación de una o más disposiciones de los CGU o de cualquier otro documento incorporado a los presentes por referencia, el Editor se reserva el derecho de poner fin o restringir sin previo aviso y a su sola discreción, su uso y acceso a los servicios, a su cuenta y a todos los Sitios vinculados.`,
        "IDTRANSLATETCU49":` ARTÍCULO 13: Indicaciones en caso de fallo de seguridad detectado por el Editor.`,
        "IDTRANSLATETCU50":` Nos comprometemos a aplicar todas las medidas técnicas y organizativas adecuadas para garantizar un nivel de seguridad adecuado frente a los riesgos de acceso accidental, no autorizado o ilegal, divulgación, alteración, pérdida o destrucción de sus datos personales.`,
        "IDTRANSLATETCU51":` En caso de que tengamos conocimiento de un acceso ilegal a los datos personales sobre usted almacenados en nuestros servidores o en los de nuestros proveedores, o de un acceso no autorizado que dé lugar a la realización de los riesgos identificados anteriormentearriba, nos comprometemos a:`,

        "IDTRANSLATETCU52":` Investigar las causas del incidente e informarle
        ;`,
        "IDTRANSLATETCU53":` Adoptar las medidas necesarias dentro del
        razonable para reducir los efectos negativos y los daños que puedan resultar
        dicho incidente.`,
        "IDTRANSLATETCU54":` ARTÍCULO 14: Limitación de la responsabilidad `,
        "IDTRANSLATETCU55":` En ningún caso los compromisos definidos en el punto anterior relativas a la notificación en caso de fallo de seguridad no podrán          asimilados a cualquier reconocimiento de culpa o de responsabilidad por el hecho en cuestión.`,
        "IDTRANSLATETCU56":` ARTÍCULO 15: Duración del contrato `,
        "IDTRANSLATETCU57":` La duración del presente contrato es indefinida. El contrato produce sus efectos sobre el Usuario.trice desde el inicio de la utilización del servicio.`,
        "IDTRANSLATETCU58":` ARTÍCULO 16: Derecho aplicable y jurisdicción competente `,
        "IDTRANSLATETCU59":` La lengua de las presentes CGU es el francés y prevalecerá sobre todas las versiones traducidas a otra lengua. El presente contrato depende de la legislación beninesa, en particular la Ley N³ 2017-20, de 20 de abril de 2018, sobre el Código Digital en la República de Benín. La elección de la ley aplicable no afectará a sus derechos como consumidor de acuerdo con la ley aplicable de su lugar de residencia.`,
        "IDTRANSLATETCU60":` Si usted es un consumidor, usted y nosotros aceptamos someterse a la jurisdicción no exclusiva de las jurisdicciones beninesas. En caso de litigio no resuelto amistosamente entre el Usuario y el Editor, el Tribunal de Comercio de Cotonú será competente para resolver el contencioso.`,

        "IDTRANSLATEPC1":` POLÍTICA DE CONFIDENCIALIDAD `,
        "IDTRANSLATEPC2":` Menciones legales `,




        "IDTRANSLATEPC3":` Este Aviso Legal y Política de Privacidad le informan sobre cómo BAKO FAMILIA & COMPANY utiliza y protege la información que nos transmite, también, cuando se utiliza nuestro sitio de citas accesible desde la URL: www.illicolove.com.`,
        "IDTRANSLATEPC4":` Le rogamos tenga en cuenta que nuestra política de privacidad puede ser modificada y/o completada en cualquier momento, en particular para ajustarse a cualquier evolución legislativa, reglamentaria, jurisprudencial o tecnológica. En tal caso, la fecha de su actualización se indicará en esta política. Estos cambios comprometen al usuario desde el momento de su puesta en línea. 
        Por lo tanto, le invitamos a consultar regularmente estas Condiciones y Política de Privacidad para conocer sus posibles modificaciones.`,
        "IDTRANSLATEPC5":` Declaración a la Autoridad de Protección de Datos de Carácter Personal (APDP)`,
        "IDTRANSLATEPC6":` De conformidad con la Ley n³ 2017-20, de 20 de abril de 2018, sobre el Código Numérico en la República de Benín (Libro 5º relativo a la protección de los datos personales y de la vida privada) el sitio web www.illicolove.com ha sido objeto de una declaración ante la Autoridad de Protección de Datos de Carácter Personal (apdp.bj) con el número......`,
        "IDTRANSLATEPC7":` En cualquier caso, BAKO FAMILIA & COMPANY solo recopila información personal relativa al usuario para las necesidades del servicio de citas ofrecido por su sitio web. El usuario proporciona esta información con pleno conocimiento de causa, en particular cuando procede por sí mismo a su introducción.`,





        "IDTRANSLATEPC8":` De conformidad con las disposiciones de la Ley 2017-20 sobre el Código Digital en la República de Benín, todo usuario tiene derecho de acceso, rectificación y oposición a los datos personales que le conciernen, mediante solicitud escrita y firmada, acompañada de una copia de un documento de identidad con firma del titular del documento, precisando la dirección a la que debe enviarse la respuesta. Ninguna información personal de un usuario de nuestro sitio web «www.illicolove.com» será publicada, cedida o vendida en cualquier soporte o a terceros sin su conocimiento.`,
        "IDTRANSLATEPC9":` Confidencialidad de los datos `,
        "IDTRANSLATEPC10":` Sus datos personales son confidenciales y no serán comunicados a terceros. 
        La naturaleza privada de nuestro servicio de citas no nos permite comunicar sus datos personales (nombres, contactos, direcciones, etc.) a un individuo, independientemente de su rango o calidad.`,
        "IDTRANSLATEPC11": ` Derecho de acceso `,
        "IDTRANSLATEPC12":` En aplicación de las disposiciones de la Ley relativa al Código Digital en la República de Benin, todo usuario de nuestro sitio web www.illicolove.com tiene derecho de acceso, rectificación, modificación y supresión de los datos que le conciernen individualmente. Este derecho podrá ser ejercido por el titular previa solicitud dirigida por vía electrónica a la siguiente dirección de correo electrónico: info@illicolove.com. La información personal recopilada no se confía en ningún caso a terceros.`,
        "IDTRANSLATEPC13":` Derecho de rectificación `,



        "IDTRANSLATEPC14":` De conformidad con la Ley sobre el Código Digital en la República de Benin, cualquier usuario de nuestro sitio web www.illicolove.com puede solicitar la rectificación, actualización, supresión, bloqueo o supresión de los datos que le conciernen, y que pueden ser inexactos, erróneos, incompletos, equívocos u obsoletos.`,
        "IDTRANSLATEPC15":` Vida útil.`,
        "IDTRANSLATEPC16":`Sus datos personales son conservados por BAKO FAMILIA & COMPANY solo por el tiempo que corresponda a su necesidad de servicios de citas. No obstante, este período de conservación no excederá de trece (13) meses.`,
        "IDTRANSLATEPC17":` Denuncia ante la autoridad competente `,
        "IDTRANSLATEPC18":` Si considera que BAKO FAMILIA & COMPANY no cumple con sus obligaciones en relación con los datos personales recogidos durante su visita a su sitio www.illicolove.com, puede enviar, según lo prescrito por el procedimiento legal, una queja o solicitud a la Autoridad de Protección de Datos (APDP)`,
        "IDTRANSLATEPC19":` Propiedad intelectual `,
        "IDTRANSLATEPC20":` Todo el contenido de esta página web, incluyendo, entre otros, gráficos, imágenes, textos, vídeos, animaciones, sonidos, logotipos, gifs e iconos, así como su formato, son propiedad exclusiva de BAKO FAMILIA & COMPANY con excepción de las marcas, logotipos o contenidos pertenecientes a otras empresas asociadas o autores. 
        Cualquier reproducción, distribución, modificación, adaptación, retransmisión o publicación, incluso parcial, de estos diferentes elementos está estrictamente prohibida sin el consentimiento expreso por escrito de BAKO FAMILIA & COMPANY.`,
        "IDTRANSLATEPC21":` Condiciones de servicio `,
        "IDTRANSLATEPC22":` El sitio web www.illicolove.com está disponible en francés, con traducciones al inglés y al español. Para mayor comodidad de uso, recomendamos utilizar navegadores compatibles y modernos como: Chrome, Safari, Firefox.`,
        "IDTRANSLATEPC23":` Información y sugerencias `,







        "IDTRANSLATEPC24":` BAKO FAMILIA & COMPANY utiliza todos los medios a su alcance para garantizar un servicio fiable de citas y una actualización permanente de su sitio web www.illicolove.com. Sin embargo, los errores u omisiones pueden subvenir. En consecuencia, cualquier usuario puede enviarnos sugerencias o informaciones a: info@illicolove.com e indicar cualquier modificación del sitio que considere pertinente.`,
        "IDTRANSLATEPC25":`Cookies.`,
        "IDTRANSLATEPC26":` Para fines de rendimiento técnico, estadísticas y visualización, el sitio web www.illicolove.com puede utilizar cookies. Las cookies son pequeños archivos de texto almacenados en su dispositivo que no permiten la identificación del usuario, pero que almacenan información relativa a la navegación de un terminal en un sitio web. Algunas partes de este sitio no pueden funcionar sin la aceptación de cookies. Los datos así obtenidos pretenden facilitar la navegación posterior en este sitio. Las cookies también se utilizan para medir la audiencia y la frecuencia. `,
        "IDTRANSLATEPC27":` El rechazo de la instalación de una cookie puede resultar en la imposibilidad de acceder a determinadas funciones. Sin embargo, cualquier usuario de este sitio web puede configurar su terminal para rechazar la instalación de cookies, como se indica a continuación:`,
        "IDTRANSLATEPC28":` Usuarios de Safari: Elija Safari; Preferencias,   haga clic en Privacidad y seleccione la opción «Cookies y datos del sitio web». Bloquear siempre: Safari no permite a ningún sitio web, terceros o anunciantes almacenar cookies y otros datos en su Mac. Esto puede impedir que algunos sitios web funcionen correctamente.`,





        "IDTRANSLATEPC29":`Usuarios de Safari: Elija Preferencias de Safari, haga clic en Confidencialidad y, a continuación, seleccione la opción "Cookies y datos de sitios web". Bloquear siempre: Safari no permite que ningún sitio web, tercero o anunciante almacene cookies y otros datos en tu Mac. Esto puede impedir que algunos sitios web funcionen correctamente.`,
        "IDTRANSLATEPC30":` Usuarios de Google Chrome: Menú; Configuración;   Mostrar configuración avanzada (situado en la parte inferior de la página). A continuación, haga clic en el botón Configuración de contenido y, a continuación, marque la casilla Bloquear cookies y datos de sitios de terceros, finalmente haga clic en Aceptar para validar su elección.`,
        "IDTRANSLATEPC31":` Usuarios de Internet Explorer: Menú Opciones de Internet Ficha Privacidad y en el botón Avanzado para abrir la ventana de Configuración de privacidad avanzada. A continuación, marque la casilla Ignorar la gestión automática de cookies y seleccione Rechazar en la columna Cookies de terceros.`,
        "IDTRANSLATEPC32":` Usuarios de Microsoft Edge: ficha herramienta/ opciones de internet. Haga clic en Privacidad y seleccione Bloquear todas las cookies.`,




        "IDTRANSLATEPC33":` Siguiendo las prácticas en la materia, algunas cookies están exentas de la recogida previa de su consentimiento en la medida en que sean indispensables para el funcionamiento de este sitio web. Su finalidad es facilitar la comunicación electrónica. Esto incluye cookies de inicio de sesión, autenticación y personalización de su interfaz.  Estas cookies son emitidas y gestionadas por BAKO FAMILIA & COMPANY y están sujetas a esta política.`,
        "IDTRANSLATEPC34":` Hipervínculos `,
        "IDTRANSLATEPC35":` El sitio web «www.illicolove.com» puede ofrecer enlaces a otros sitios web u otros recursos disponibles en Internet. BAKO FAMILIA & COMPANY no dispone de ningún medio para controlar los sitios en conexión con su sitio web. Además, no responde ni garantiza la disponibilidad de tales sitios y fuentes externas. No será responsable de ningún daño, de cualquier naturaleza, derivado del contenido de dichos sitios o fuentes externas.`,


        "IDTRANSLATECONSULTE1":` África `,
        "IDTRANSLATECONSULTE2":` Europa `,
        "IDTRANSLATECONSULTE3":` Otros países del mundo `,
        "IDTRANSLATEPROFIL1": " Cuenta válida ",
        "IDTRANSLATEPROFIL2": " Cuenta inválida ",
        "IDTRANSLATEPROFIL3":` Cuenta Débito `,
        "IDTRANSLATEPROFIL4":` Cuenta Débito `,
        "IDTRANSLATEPROFIL5":` Mi plano `,
        "IDTRANSLATEPROFIL6":` Mi plano `, 
        "IDTRANSLATEPROFIL7":` Mi información `,
        "myNameIDX":` Eliminar su cuenta `,
        "myBtn":` Recargar mi cuenta `,
        "myBtn2":` Recargar mi cuenta `,
        "IDTRANSLATEPROFIL9":` Ir a la recepción `,
        "IDTRANSLATEPROFIL10":` Desconectar `,
        "CONSULTEZLESANNONCES":` CONSULTAR LOS ANUNCIOS `,
        "IDTRANSLATEPROFIL11":` EDITE SU ANUNCIO `, 
        "IDTRANSLATEPROFIL12":` PUBLICA UN ANUNCIO `,
        "IDTRANSLATEPROFIL13":`Le da la bienvenida!`,
        "exampleModalLongTitle":` Una unidad vale 95 francos CFA, es decir 0.144 euros.`,
        "errorSms":` Debe introducir un número.`,
        "SmspayId":` Introduzca aquí el número de unidades.`,
        "IDTRANSLATEPROFIL14":` Regreso `,
        "payYourUnitybtn":` Validar `,
        "CHOISEYOURPAIEMENT":`Seleccione el método de pago.`,
        "exampleModalLongTitleX":` Asegura tu cuenta.`,
        "IDTRANSLATEPROFIL15":` Proporcione una respuesta que nunca olvidará. Esta respuesta se le pedirá cuando recupere su cuenta. Sin esta respuesta, su cuenta seguirá siendo inaccesible. `,
        "IDTRANSLATEPROFIL16":` Seleccionar su pregunta `,
        "IDTRANSLATEPROFIL17":` ¿Qué hace especial a una persona?`,
        "IDTRANSLATEPROFIL18":` ¿Qué te hace sentir más amado(a)?`,
        "IDTRANSLATEPROFIL19":` ¿Cómo imaginas tu vida cotidiana?`,
        "IDTRANSLATEPROFIL20":` ¿Qué es más importante para ti?`,
        "IDTRANSLATEPROFIL21":` ¿Cuál es el nombre de la persona que te inspira?`,
        "IDTRANSLATEPROFIL22":` ¿Cuál es tu país favorito?`,
        "IDTRANSLATEPROFIL23":` ¿Cuál es tu jugador favorito?`,
        "IDTRANSLATEPROFIL24":` ¿Cuál es tu artista favorito?`,
        "IDTRANSLATEPROFIL25":` ¿Cuál es su respuesta? Sólo una palabra. Sin espacio.`,
        "submitFormID":`Suscríbase`,
        "TOCLOSEMODALID":`Cerrar`,   
        "IDTRANSLATEPROFIL26":` Validar `, 
        "IDTRANSLATEPROFIL27":` Respuesta de seguridad `,
        "payYourUnity":` Entrar en la unidad `,
        congratulationsTitle: " ¡Enhorabuena!",
        accountSecureMessage: " Su cuenta es segura. ¡Gracias!",       
        accountSecureMessageX: " No ponga espacio. ¡Gracias!",


        "IDTRANSLATEPROFIL28":` Tu cuenta de débito está vacía. Paga unidades para acceder a los contactos de los anuncios que te gusten.`,
        "IDTRANSLATEPROFIL29":` No puede pagar las unidades por el momento. Porque todavía está en su cuenta de débito. ¡Gracias!.`,
        "IDTRANSLATEPROFIL30W":` ¿Está seguro?`,
        "IDTRANSLATEPROFIL30":` ¡No hay vuelta atrás!`,
        "IDTRANSLATEPROFIL31":` ¡Sí, quítenlo de en medio!`, 
        "IDTRANSLATEPROFIL32":` ¿Está seguro?`,
        "IDTRANSLATEPROFIL33":` Después de desconectarse, tiene la opción de volver a conectarse.`,
        "IDTRANSLATEPROFIL34":` ¡Sí, desconectar la conexión!`,
        "IDTRANSLATEPROFIL35":` Desconectado `,
        "IDTRANSLATEPROFIL36":` Usted ha sido desconectado.`,
        "IDTRANSLATEPROFIL37":` ¿Quieres visitar nuestra página de inicio?`,
        "IDTRANSLATEPROFIL38":` Eliminado !`,
        "IDTRANSLATEPROFIL39":` ¡Su cuenta ha sido eliminada con éxito!`,
        "IDTRANSLATEPROFIL40":` Eliminado!`,
        "IDTRANSLATEPROFIL41":` ¡Error al eliminar usuario! `,
        
        "IDTRANSLATEPROFIL38X":` éxito.`,
        "IDTRANSLATEPROFIL39X":`Su foto ha sido actualizada exitosamente.`,
        "IDTRANSLATEPROFIL40X":` error`,
        "IDTRANSLATEPROFIL41X":`La actualización de su foto ha fallado. `,

        "IDTRANSLATEPROFIL42":` Hay un ERROR `,
        "IDTRANSLATEPROFIL42Q":`Hay un ERROR`,
        "IDTRANSLATEPROFIL42QX":`Hay un ERROR`,
        "IDTRANSLATEPROFIL43":` ¡El campo no está bien lleno!`,
        "IDTRANSLATEPROFIL44":` ¡Algo no está bien!`,
        "IDTRANSLATEPROFIL44IN":`Estimados usuarios, deseamos informarles que este método de pago aún no está disponible. Por el momento, les pedimos que utilicen Feexpay para realizar sus transacciones. ¡Gracias!`,
        "IDTRANSLATEPROFIL45":` ¡los datos no se actualizan!`,
        "IDTRANSLATEPROFIL46":` Hola, No tienes más unidad. Recarga. Ve a tu perfil. Gracias!`,
        "IDTRANSLATEPROFIL47":` ¿Está seguro?`,
        "IDTRANSLATEPROFIL48":` Al modificar su anuncio, se volverá a enviar a los administradores para su validación. Este proceso puede durar 24 horas.`,




        "IDTRANSLATEPROFIL49":` Regreso `,
        "IDTRANSLATEPROFIL50":` ¡Sí! Cambiar.`,
        "IDTRANSLATELOGIN1":` Iniciar sesión`,
        "IDTRANSLATELOGIN2":`Email`,
        "IDTRANSLATELOGIN3":` Su correo electrónico `,
        "IDTRANSLATELOGIN4":` Contraseña `,
        "IDTRANSLATELOGIN5":` Su contraseña `,
        "IDTRANSLATELOGIN6":` Recordarme `,
        "IDTRANSLATELOGIN7":` Contraseña olvidada `,
        "IDTRANSLATELOGIN8":` No tengo ninguna cuenta.`,
        "IDTRANSLATELOGIN9":` Regístrate gratis `,
        "IDTRANSLATELOGIN10":` Conectarse `,
        "IDTRANSLATELOGIN11":` Éxito `,
        "IDTRANSLATELOGIN12":` Usted está conectado con éxito!`,
        "IDTRANSLATELOGIN13":` Siento `,
        "IDTRANSLATELOGIN14":` ¡Contraseña incorrecta, por favor!`,
        "IDTRANSLATELOGIN15":` Siento `,
        "IDTRANSLATELOGIN16":`El usuario no existe con este correo electrónico !`,
        "IDTRANSLATESIGNUP1":` Registrarse `,
        "IDTRANSLATESIGNUP2":` Seudónimo `, 
        "IDTRANSLATESIGNUP3":` Seudónimo `,
        "IDTRANSLATESIGNUP4":` Nombre completo `, 
        "IDTRANSLATESIGNUP5":` Nombre completo `,
        "IDTRANSLATESIGNUP6":`Email`,
        "IDTRANSLATESIGNUP7":` Su correo electrónico `,
        "IDTRANSLATESIGNUP8":` Contraseña `,
        "IDTRANSLATESIGNUP9":` Su contraseña `,
        "IDTRANSLATESIGNUP10":` He leído y acepto los términos y condiciones `,
        "IDTRANSLATESIGNUP11":` Leer y aceptar nuestros términos y condiciones `,
        "IDTRANSLATESIGNUP12":` Yo ya tengo una cuenta.`,
        "IDTRANSLATESIGNUP13":` Iniciar sesión `,
        "IDTRANSLATESIGNUP14":` Siento `,




        "IDTRANSLATESIGNUP15":`Una cuenta ya está vinculada a esta dirección de correo electrónico o número de teléfono.`,
        "IDTRANSLATESIGNUP16":` Exitoso `,
        "IDTRANSLATESIGNUP17":` ¡Estás registrado con éxito!`,
        "IDTRANSLATESIGNUP18":` Error al enviar la dirección de correo electrónico a Firebase `,
        "IDTRANSLATESIGNUP19":` No ponga espacio. ¡Gracias!`,
        "IDTRANSLATESIGNUP19PHONE":`Por favor, proporcione un número de teléfono válido.`,
        "IDTRANSLATESIGNUP19PHONEX":`Por favor, proporcione un número de teléfono válido.`,
        "IDTRANSLATEFORGET1":` Enviar la dirección de correo electrónico utilizada al registrarse.`,
        "IDTRANSLATEFORGET2":`Email`,
        "IDTRANSLATEFORGET3":` Su email `,
        "IDTRANSLATEFORGET4":`Enviar `,
        "IDTRANSLATEFORGET5":` Validar `,
        "IDTRANSLATEFORGET6":` ¡Da la respuesta correcta!`,
        "IDTRANSLATEFORGET7":` ¡Introduzca su nueva contraseña!`,
        "IDTRANSLATEFORGET8":`¡Introduzca su nueva contraseña!`, 
        "IDTRANSLATEFORGET9":` Genial...`,
        "IDTRANSLATEFORGET10":` ¡Contraseña actualizada con éxito!`,
        "IDTRANSLATEFORGET11":` Iniciar sesión `,
        "IDTRANSLATEFORGET12":`Ok`,
        "IDTRANSLATEFORGET13":` Error al actualizar el correo electrónico.`,
        "IDTRANSLATEFORGET14":` Esa no es la respuesta correcta `,
        "IDTRANSLATEFORGET15":` El usuario no existe.`, 
        "IDTRANSLATEFORM1":` MI PERFIL `,
        "IDTRANSLATEFORM1W":` MI PERFIL `,
        "IDTRANSLATEFORM2":` MI PERFIL `,
        "IDTRANSLATEFORM3":` MI PERFIL `,
        "IDTRANSLATEFORM4":` PERFIL QUE ESTOY BUSCANDO `,
        "IDTRANSLATEFORM4w":` PERFIL QUE ESTOY BUSCANDO `,
        "IDTRANSLATEFORM5":` PERFIL QUE ESTOY BUSCANDO `,
        "IDTRANSLATEFORM6":` POR FAVOR COMPLETE EL SIGUIENTE FORMULARIO.`,
        "IDTRANSLATEFORM7":` Proporcione información precisa y correcta`,
        "IDTRANSLATEFORM8":` Mi país de residencia <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM9":` Mi ciudad de residencia <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM10":` Nombre o alias <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM11":` Mis años <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM9PL":`Mi ciudad de residencia `,





        "IDTRANSLATEFORM10X":` Mi ciudad de residencia `,
        "IDTRANSLATEFORM11X":` Mis años `,
        "IDTRANSLATEFORM8X":` Mi país de residencia `,
        "IDTRANSLATEFORM9X":` Mis años `,
        "IDTRANSLATEFORM12":` Introduzca sólo los números.<i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM13":` Mi Género <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM14":` Hombre `,
        "IDTRANSLATEFORM15":` Mujer `,
        "IDTRANSLATEFORM16":`Trans`,
        "IDTRANSLATEFORM17":` Género fluido `,
        "IDTRANSLATEFORM18":` Intersexual `,
        "IDTRANSLATEFORM19":`Agenre`,
        "IDTRANSLATEFORM20":` Aromático `,
        "IDTRANSLATEFORM21":` Asexual `,
        "IDTRANSLATEFORM22":` Bisexual`,
        "IDTRANSLATEFORM23":` Cisgénero `,
        "IDTRANSLATEFORM24":` Cisnormatividad `,
        "IDTRANSLATEFORM25":` Demiromántico `,
        "IDTRANSLATEFORM26":` Semisexual`,
        "IDTRANSLATEFORM27":` Heterogeneidad `,
        "IDTRANSLATEFORM28":` IEL `,
        "IDTRANSLATEFORM29":`Mix`,
        "IDTRANSLATEFORM30":` No-binario `,
        "IDTRANSLATEFORM31":` Pansexual `,
        "IDTRANSLATEFORM32":` Poliamorosos`,
        "IDTRANSLATEFORM33":`Queer`,
        "IDTRANSLATEFORM34":`Trans`,
        "IDTRANSLATEFORM35":` Transición `,
        "IDTRANSLATEFORM36":` POR FAVOR COMPLETE EL SIGUIENTE FORMULARIO.`,
        "IDTRANSLATEFORM37":` Proporcione información precisa y correcta`,
        "IDTRANSLATEFORM38":` Mi estado civil <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM39":` Soltero `,
        "IDTRANSLATEFORM40":` En pareja `,
        "IDTRANSLATEFORM41":` Divorciado `,
        "IDTRANSLATEFORM42":` Viudo (da)`,
        "IDTRANSLATEFORM43":` Mi nacionalidad <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM44":` Teléfono <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM45":` Introduzca solo su número sin el prefijo del país <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM46":` Mi profesión o mi ocupación <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM47":` Mi trabajo `,
        "IDTRANSLATEFORM48":` POR FAVOR COMPLETE EL SIGUIENTE FORMULARIO.`,
        "IDTRANSLATEFORM49":` Proporcione información precisa y correcta.`,
        "IDTRANSLATEFORM50":` Quiero un encuentro <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM51":` Amistad, una compañía para romper la soledad `,
        "IDTRANSLATEFORM52":` Sostenible `,
        "IDTRANSLATEFORM53":` Que pueden dar lugar al matrimonio `,
        "IDTRANSLATEFORM54":` Documento de identidad `,
        "IDTRANSLATEFORM55":` Foto 1 <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM56":` Foto 2 <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM57":` POR FAVOR COMPLETE EL SIGUIENTE FORMULARIO.`,
        "IDTRANSLATEFORM58":` Proporcione información precisa y correcta.`,
        "IDTRANSLATEFORM59":` Su Género <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM60":` Hombre `,
        "IDTRANSLATEFORM61":`Mujer`,
        "IDTRANSLATEFORM62":`Trans`,
        "IDTRANSLATEFORM63":` Género fluido `,
        "IDTRANSLATEFORM64":`Intersexual`,
        "IDTRANSLATEFORM65":`Agenre`,
        "IDTRANSLATEFORM66":` Aromático `,
        "IDTRANSLATEFORM67":`Asexual`,
        "IDTRANSLATEFORM68":`Bisexual`,




        "IDTRANSLATEFORM69":` Cisgénero `,
        "IDTRANSLATEFORM70":` Cisnormatividad `,
        "IDTRANSLATEFORM71":` Demiromántico `,
        "IDTRANSLATEFORM72":` Semisexual `,
        "IDTRANSLATEFORM73":` Heterogeneidad `,
        "IDTRANSLATEFORM74":`IEL`,
        "IDTRANSLATEFORM75":`Mix`,
        "IDTRANSLATEFORM76":`No-binaro`,
        "IDTRANSLATEFORM77":`Pansexual`,
        "IDTRANSLATEFORM78":`Poliamorosos`,
        "IDTRANSLATEFORM79":`Queer`,
        "IDTRANSLATEFORM80":`Trans`,
        "IDTRANSLATEFORM81":` Transición `,
        "IDTRANSLATEFORM82":` Su grupo de edad <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM83":` Su estado civil <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM84":` Soltero `,
        "IDTRANSLATEFORM85":` En pareja `,
        "IDTRANSLATEFORM86":` Divorciado (da)`,
        "IDTRANSLATEFORM87":` Viudo (da)`,
        "IDTRANSLATEFORM88":` Su país de residencia <i class="fa fa-star required" ></i>`,
        "IDTRANSLATEFORM89":` Puede seleccionar más de un país <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM90":` Su país `,
        "IDTRANSLATEFORM91":` Su país de residencia `,
        "IDTRANSLATEFORM92":` POR FAVOR COMPLETE EL SIGUIENTE FORMULARIO.`,
        "IDTRANSLATEFORM93":` Proporcione información precisa y correcta`,
        "IDTRANSLATEFORM94":` Describa el aspecto físico que desea.`,
        "IDTRANSLATEFORM95":` Su ciudad de residencia <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM96":` Su ciudad `,
        "IDTRANSLATEFORM97":` Su trabajo u ocupaciones <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM98":` Su trabajo `,
        "IDTRANSLATEFORM99":` Más precisiones.`, 
        "IDTRANSLATEFORM100":` Más precisiones.`,
        "IDTRANSLATEFORM10w":` Aspectos físicos`,
        "IDTRANSLATEFORM101":` Siguiente `,
        "IDTRANSLATEFORM102":` Anterior `,
        "IDTRANSLATEFORM103":` Enviar `,

        "IDTRANSLATEFORM104":`<p > Los datos personales recogidos en este formulario por <strong style="color: #000080;">BAKO FAMILIA & COMPANY</strong> serán tratadas exclusivamente para el buen desarrollo del servicio de encuentros amorosos que usted solicite. Los datos personales recopilados no se comparten con nadie sin su consentimiento.
        En aplicación de las disposiciones de la Ley 2017-20 relativa al Código Numérico en la República de Benin sobre la protección de los datos de carácter personal, el tratamiento de los datos recogidos ha sido declarado ante la APDP.</em> </p>
        <hr>
        <p class="mb-0"> De conformidad con la ley antes mencionada, puede ejercer sus derechos de acceso, oposición, rectificación y supresión ante <strong style="color: #000080;">BAKO FAMILIA & COMPANY</strong>.
        </em></p>`,
        "IDTRANSLATEFORM105":` Su imagen es demasiado pequeña. Seleccione una imagen de al menos 300x300 píxeles.`,
        "IDTRANSLATEFORM106":` Se produjo un error al llamar a la API de REST Countries `,
        "IDTRANSLATEFORM107":` Simplemente ponga el número sin el prefijo `,
        "IDTRANSLATEFORM108":` Por favor, seleccione el país.`,
        "IDTRANSLATEFORM109":` Éxito `,
        "IDTRANSLATEFORM110":` Su formulario se somete a control para validación en 24 horas <i class="fa fa-heart"></i>.`,
        "IDTRANSLATEFORM111":` Siento `,
        "IDTRANSLATEFORM112":` No todos sus campos están llenos.`,
        "IDTRANSLATEUSERD1":` Contáctame`,





        "IDTRANSLATEUSERD2":` Para contactarme `,
        "IDTRANSLATEUSERD3":`<i class="bi bi-alexa" style="font-size: 3vh !important;"></i> Mi Perfil `,
        "IDTRANSLATEUSERD4":` Respuestas `,
        "IDTRANSLATEUSERD5":` Mi ciudad de residencia`,
        "IDTRANSLATEUSERD6":` Mi nombre o seudónimo`,
        "IDTRANSLATEUSERD7":` Mi grupo de edad`,
        "IDTRANSLATEUSERD8":` Mi Género`,
        "IDTRANSLATEUSERD9":` Mi estado civil`,
        "IDTRANSLATEUSERD10":` Mi nacionalidad `,
        "IDTRANSLATEUSERD11":` Mi trabajo u ocupación`,
        "IDTRANSLATEUSERD12":` Quiero un encuentro`,
        "IDTRANSLATEUSERD13":` Mis preferencias físicas `,
        "IDTRANSLATEUSERD14":` Otros detalles`,
        "IDTRANSLATEUSERD15":`<i class="bi bi-alexa" style="font-size: 3vh !important;"></i> Perfil que estoy buscando `,
        "IDTRANSLATEUSERD16":` Respuestas `,
        "IDTRANSLATEUSERD17":` Su Género`,
        "IDTRANSLATEUSERD18":` Su grupo de edad`,
        "IDTRANSLATEUSERD19":` Su situación matrimonial`,
        "IDTRANSLATEUSERD20":` Su país de residencia`,
        "IDTRANSLATEUSERD21":` Su ciudad de residencia `,
        "IDTRANSLATEUSERD22":` Su trabajo u ocupación `,
        "TIDTRANSLATEUSERD23":`online el`,





        "IDTRANSLATEUSERD24":`<i class="fas fa-database" style="font-size: 5vh !important; color: #FFB6C1;"></i> De datos.`,
        "IDTRANSLATEUSERD25":` De datos.`,
        "IDTRANSLATEUSERD26":` Esto es un error.`,
        "IDTRANSLATEUSERD27":` Su cuenta se debita `,
        "IDTRANSLATEUSERD28":` Sus datos no están actualizados.`,
        "IDTRANSLATEUSERD29":` Podrá ponerse en contacto con los demás usuarios en un momento, después de la validación de su perfil de usuario y la publicación de su formulario de búsqueda.`,
        "IDTRANSLATEUSERD30":` ¿Quiere publicar su anuncio?`,
        "IDTRANSLATEUSERD31":` Sus unidades están agotadas. Ya no puede ponerse en contacto con otros usuarios.`,
        "IDTRANSLATEUSERD32":` ¿Quiere pagar las unidades?`,
        "IDTRANSLATEUSERD33":`Ok`,
        "IDTRANSLATEUSERD34":` Ver su perfil `,
        "IDTRANSLATEUSERD35":`<i class="bi bi-eye" style="color: white;"></i> Hacer clic para ver.`,
        "texteIDTRANSLATEUSERD24YX": "en línea",
        "myNameIDwallet":"Retira tus comisiones.",
        "MYEWALLETID":`<i class="fa fa-align-left"></i>Mi monedero electrónico`,
        "MYEWALLETID1":"Saldo total",
        "comeBackId":"Volver",
        "idTogetwallet":"Retirar tus ganancias",
        "HISTORYISMY":"Historia",
        "IDTRANSLATEWALLETU":"En proceso",
        "IDTRANSLATEWALLETX":"Pagado",
        "IDTRANSLATEWALLET":"¡Lo siento!",
        "IDTRANSLATEWALLETM":"Su transferencia ha fallado. Por favor, inténtelo de nuevo más tarde.",
        "IDTRANSLATEWALLET1":"¡Felicidades!",
        "IDTRANSLATEWALLET2":"¡Su transferencia se realizó con éxito!",
        "TITLEWALLETID": "Monedero electrónico",
        "IDTRANSLATEFOEMXX":"Por favor, ingrese solo letras, los números no están permitidos.",
        "linkInput": "Copia aquí tu enlace de afiliación.",
        "TERMINATOR" :"FINALIZAR",
        "PHOTOID" :"FOTO",
        "TERMINATORW" :"SE HA TERMINADO",
        "PHOTOIDW" :"FOTO",
        "STEPS14":"Paso 1 - 4",
        "STEPS23":"Paso 2 - 4",
        "STEPS34":"Paso 3 - 4",
        "STEPS44":"Paso 4 - 4",
        "IDTRANSLATEPROFIL29FILE" :"¿Desea enviar esta foto ?", 
        "IDTRANSLATEPROFIL29FILE1" :"Vuelta", 
        "IDTRANSLATEPROFIL29FILE2" :"Sí",
        "IDTRANSLATESIGNUP19OPTIONSERROR" :"Se produjo un error durante la solicitud de geolocalización.",
        "IDTRANSLATESIGNUP19OPTIONS" :"Lamentamos informarle que no puede utilizar nuestros servicios hasta que su ubicación sea aceptada.",
        "IDTRANSLATESIALERT1" :"Información",
        "IDTRANSLATESIALERT2" :"Estimados visitantes, con el fin de garantizar su seguridad y combatir los anuncios falsos, estamos recuperando su país de ubicación.",
        "IDTRANSLATESIALERT3" :"¡Sí, acepto!",
        "IDTRANSLATESIALERT4" :"Rechazado",
        "CONTRACTID1":`Contrato de Afiliación`,
        "CONTRACTID2":`Entre: illicolove, en adelante referido como "el sitio de citas,"
        y: YO, en adelante referido como "el Afiliado."`,
        "CONTRACTID3":`Propósito`,
        "CONTRACTID4":`Este contrato de afiliación tiene como objetivo regir la relación entre illicolove y el Afiliado en relación con el programa de afiliados del sitio de citas  <a href="https://illicolove.com">illicolove.com</a>.
        `,
        "CONTRACTID5":`1. Programa de Afiliados`,
        "CONTRACTID6":`Illicolove opera un programa de afiliados en línea para promocionar sus servicios de citas románticas.`,
        "CONTRACTID7":`2. Rol del Afiliado`,
        "CONTRACTID8":`El Afiliado se compromete a promocionar los servicios del sitio de citas utilizando enlaces de afiliados únicos proporcionados por illicolove, así como otros métodos promocionales aprobados por el sitio.`,
        "CONTRACTID9":`3. Compensación del Afiliado`,
        "CONTRACTID10":`3.1. El Afiliado recibirá una comisión de 100 F CFA por cada nuevo miembro que se registre en el sitio  <a href="https://illicolove.com">illicolove.com</a> a través del enlace de afiliado único del Afiliado y publique un anuncio de búsqueda de amor.
        `,
        "CONTRACTID11":`3.2. Además, el Afiliado recibirá una comisión del 10% por cada compra realizada por los miembros referidos a través de su enlace de afiliado.`,
        "CONTRACTID11X":`3.3. La comisión de 100 francos CFA solo se cobrará cuando el nuevo miembro realice una compra de unidades que exceda los 100 francos CFA, con el fin de prevenir fraudes.`,
        "CONTRACTID12":`4. Pago de Comisiones`,
        "CONTRACTID13":`Illicolove pagará la comisión del Afiliado de forma regular, mensualmente, previa solicitud, a través de dinero móvil o transferencia bancaria, a elección del Afiliado. Los gastos de transferencia corren a cargo del Afiliado.`,
        "CONTRACTID14":`5. Duración del Acuerdo`,
        "CONTRACTID15":`Este contrato de afiliación entrará en vigor en la fecha de aceptación por parte del Afiliado y permanecerá en vigor hasta que sea terminado por cualquiera de las partes, sujeto a un aviso por escrito de treinta (30) días.`,
        "CONTRACTID16":`6. Terminación`,
        "CONTRACTID17":`Illicolove o el Afiliado pueden dar por terminado este acuerdo en cualquier momento proporcionando un aviso por escrito a la otra parte. Cualquier comisión no pagada se liquidará de acuerdo con los términos de este acuerdo.`,
        "CONTRACTID18":`7. Ley Aplicable*`,
        "CONTRACTID19":`Este acuerdo se rige por las leyes de Benín, y cualquier disputa que surja de este acuerdo, en ausencia de un acuerdo amistoso, estará sujeta a la jurisdicción exclusiva de los Tribunales Comerciales de Cotonú.`,
        "ANNONCEAFFILIATEID":`        <div class="box--list__items">
        <div class="box--list__item" style="  padding-top: 0 !important; margin-top: 0 !important;">
            <h2 class="box--list__title box--list__titlex" >¡Gana dinero ayudando a las personas a encontrar el amor en illicolove! </h2>
            <p class="box--list__description">¿Estás buscando una oportunidad de afiliación lucrativa? Únete a nuestro programa de afiliados único y aumenta tus ingresos ayudando a otros a encontrar a su media naranja. Así es cómo funciona: <br>
              ✅ Recibe 100 francos CFA por cada nuevo miembro que se registre a través de tu enlace de afiliado y publique un anuncio de búsqueda de amor en nuestro sitio web.<br>

              ✅ Además, obtén un 10% de comisión en cada compra realizada por los miembros que hayas referido. ¡Cuanto más gasten, más ganarás!</p>
        </div>
        
        <div class="box--list__item">
            <h2 class="box--list__title box--list__titlex"> ¿Por qué elegir nuestro programa de afiliados?</h2>
            <div class="box--list__description">
              ✅ Gana dinero tan pronto como alguien se registre y publique su anuncio de búsqueda de amor. <br>
              ✅ Obtén comisiones continuas cada vez que tus afiliados realicen una compra en nuestro sitio. <br>
              ✅ Dirígete a un público en busca de amor, un nicho emocionante y en constante crecimiento.<br>
              
            </div>
        </div>
        
        <div class="box--list__item">
            <h2 class="box--list__title"> ¡Únete a nuestro programa</h2>
            <div class="box--list__description">✅  ¡Únete a nuestro programa de afiliados hoy y comienza a ganar dinero ayudando a las personas a encontrar el amor en illicolove! 💑
              
             </div>
        </div>
        <div class="box--list__item">
          <h2 class="box--list__title"> Regístrate</h2>
          <div class="box--list__description"> 
            ✅ egístrate ahora y aumenta tus ingresos : <a href="./v/login/signup.html">Votre lien d'inscription</a>
              
            Para cualquier pregunta, contáctanos en info@illicolove.com</div>
      </div>
    </div>`,
    "IDTRANSLATE6WX":`Idiomas <span> <i class="bi bi-globe2"></i></span> <i class="bi bi-chevron-down"></i> `,
    "SITEID1":`Sitio en Construcción`,
    "SITEID3":`<p style="margin: 20px !important;">
    Estamos trabajando duro para ofrecerte la mejor experiencia posible. ¡Vuelve pronto para descubrir nuestro nuevo sitio web!
</p>
<p>
Gracias por su comprensión y hasta pronto.
</p>`      
  }
      },
      en: {
      
   translation : {
    "IDTRANSLATE1": " Home ",
   // "IDTRANSLATE2": "À propos",
    "IDTRANSLATE3": ` how's that work?`,
    "IDTRANSLATE4": ` Terms `,
    "IDTRANSLATE5":" General Terms of Use ",
    "IDTRANSLATE6":" Privacy Policy ",
    "IDTRANSLATE6X":" Our Affiliate System ",
    "IDTRANSLATE7":"Contact",
    "IDTRANSLATE8":" Sign up ",
    "IDTRANSLATE9":" Connect ",
    "IDTRANSLATECONTACT1":"Contact",
    "IDTRANSLATECONTACT2":" Contact us ",
    "IDTRANSLATECONTACT3":"Address",
    "IDTRANSLATECONTACT4":' Phone ',
    "IDTRANSLATECONTACT5":"E-mail", 
    "IDTRANSLATECONTACT6":" Social Networks ",
    "IDTRANSLATETITLE":" Ads ",
    "IDTRANSLATETITLEFORM":" Form ",
    "IDTRANSLATE1INF1":`Your email address is collected and processed by BAKO FAMILIA & COMPANY to keep you informed of new features of the illicolove website and updates.
    In application of the law 2017-20 on digital code in the Republic of Benin, on the protection of personal data, you can unsubscribe or exercise your rights of access, objection, correction and deletion by sending an email to info@illicolove.com`,
    "IDTRANSLATE10":"illicolove,",
    "IDTRANSLATE11":` Your dating platform, to fight celibacy and loneliness.`,
    "IDTRANSLATE12":` We see involuntary loneliness as a humanitarian problem and are committed to providing a solution for those who suffer from it.`,
    "IDTRANSLATE13":` Sign up for free `,
    "IDTRANSLATE13KLM":` Go to your profile `,
   // "IDTRANSLATE14":`À propos de nous`,
   // "IDTRANSLATE15":`Votre plateforme de rencontres en ligne illicolove.com vous est proposée par les Établissements BAKO FAMILIA & COMPANY, une entreprise individuelle(EI) de droit béninois immatriculée au Registre du Commerce et du Crédit Mobilier RCCM RB/COT/08/A4101 ; à l’Identifiant Fiscal Unique (IFU) 3200800938610.`,

   // "IDTRANSLATE16":`Elle a pour activités, le Wedding planning (accompagnement dans l’organisation de mariage), le Tourisme-Loisirs, l’organisation de foires et Salons. Elle a été créée en Mai 2008 à Cotonou. `,
   // "IDTRANSLATE17":`Plus de détails`,
    "IDTRANSLATE18":` Our goals `,
    "IDTRANSLATE19":` Article 16`,
    "IDTRANSLATE20":` Our target `,

    "IDTRANSLATE17USER":` Region Select `,
    "IDTRANSLATE18USER":` User details `,
    "IDTRANSLATE19USER":`Profile`,

    "IDTRANSLATE21":` The implementation of this online dating platform responds to our initiatives to fight celibacy and loneliness.
    It embodies our action in the line defined by the Universal Declaration of Human Rights in article 16, which recalls the right to marriage for women and men, and the importance of the family that must be protected by society and the State.`,
   "IDTRANSLATE22":` Our values :`,
   "IDTRANSLATE23":` Reliability,`,
   "IDTRANSLATE24":` Courtesy and `,
   "IDTRANSLATE25":` Discretion.`, 
   "IDTRANSLATE26":` From the nubile age, men and women, without any restrictions on race, nationality or religion, have the right to marry and to found a family. They have equal rights with respect to marriage, during the marriage and at its dissolution. `,
   "IDTRANSLATE27":` Marriage can only be concluded with the free and full consent of the future spouses. `,
   "IDTRANSLATE28":` The family is the natural and fundamental element of society and has the right to the protection of society and the state.  
Loneliness, celibacy, social isolation, are a humanitarian imperative that challenges public authorities, associations and businesses in the field.  Chronic and involuntary loneliness is an individual drama experienced by those who suffer from it, mostly in silence. illicolove.com was born in this context, with the desire to offer otherwise and simply, online dating services; with a proven hunt for fictitious profiles. 
Welcome!`,
   "IDTRANSLATE29":` We only target individuals :`,
   "IDTRANSLATE30":` Young people aged 18 and over.`,
   "IDTRANSLATE31":` Elderly involuntary singles, desperate and disappointed.`,
   "IDTRANSLATE32":` The divorced.`,
   "IDTRANSLATE33":` Widowers.`,
   "IDTRANSLATE34":` Our users `,
   "IDTRANSLATE35":` All of our users `,
   "IDTRANSLATE36":` In Africa `,
   "IDTRANSLATE37":` In Europe `,
   "IDTRANSLATE38":` Other countries in the world `,
  // "IDTRANSLATE39":`Notre équipe`,
  // "IDTRANSLATE40":`Directrice`,
  // "IDTRANSLATE41":`Relectrice, et Responsable marketing`,
  // "IDTRANSLATE42":`Développeur et SEO`,


   "IDTRANSLATEX1":` The steps to use `,
   "IDTRANSLATEX2":` Here is how illicolove works.`,
   "IDTRANSLATEX3":` Registration `,
   "IDTRANSLATEX4":` Upon registration, illicolove offers three (03) units worth 295 CFA francs or 0.43 Euros.
   One unit costs 95 CFA francs or 0.144 Euros.`,
   "IDTRANSLATEX5":` Login `,
   "IDTRANSLATEX6":` Your connection on illicolove allows you to access all the features and services reserved for registered users.`,
   "IDTRANSLATEX7":` Post an Ad `,
   "IDTRANSLATEX8":` By clicking on the «Publish your ad» button, you can choose to publish either on the «Africa» page, or on the «Europe» page; or on the «Other countries of the world» page; depending on your place of residence. Simply fill out the search form that will appear.`,




   "toopenPUAID":` more...`,
   "openPUA":`We invite you to publish your ad on the page of your geographical area of residence, however, you can consult and contact any profile of a search ad outside your usual geographical area.
     For example, if you live in France, you must publish your ad on the page «Europe» and can view and contact ads in the pages «Africa», «Europe» and «Other countries of the world»
     When you finish filling out and submitting your search form, your ad will appear within 24 hours at most, if we consider your profile reliable after proofreading and possible checks. It is possible that our proofreading and validation team will write to you in private to reassure itself on the reliability of your profile. You may be asked for details about your identity, a voice or video call. In this context the validation and appearance of your ad on illicolove could exceed 24 hours. The speed of your ad will depend on you. We systematically exclude any ad fanciful, unrealistic and especially fake profiles, without notice.
     If you have any difficulty accessing illicolove.com, please contact us at info@illicolove.com`,
    "IDTRANSLATEX9":` Validation of your user account `,
    "IDTRANSLATEX10":` Fill out the form and click “SEND”. We will verify and validate your form within 24 hours. You will receive a confirmation message. If additional checks are required, we will notify you by email.`,
    "IDTRANSLATEX11":` View an ad `,
    "IDTRANSLATEX12":` The “View Ads” button leads to three other buttons: Africa (Africa Ads), Europe (Europe Ads) and Other World Countries (Ads Outside Africa and Europe). Meeting the man or woman of your life on illicolove will cost you maybe only 95 CFA francs or 0.14 Euros.
    This is what you pay for each unit that is taken from you when you click on the “Contact me” box on a profile that particularly catches your attention.`,
    "IDTRANSLATEX13":` Unit purchase `,
    "IDTRANSLATEX14":` You can reload your account (My Plan) at your convenience, to continue your search for meetings among the published ads. The personal debit-credit account you get as soon as you sign up allows you to top it up using the payment method of your choice. THE billing CURRENCY on illicolove is the CFA Franc (XOF).  1 € = 655,957 XOF.`,
    "IDTRANSLATEX15":` Frequently asked questions.`,
    "IDTRANSLATEX16":` Can I have a nice meeting on illicolove?`,
    "IDTRANSLATEX17":` Yes, as long as you fill in the search form and provide true information about yourself.`,




    "IDTRANSLATEX18":` Is your dating site paying?`,
    "IDTRANSLATEX19":` Yes, only to consult the contact address of a profile that has particularly retained your interest.`,
    "IDTRANSLATEX20":` How much does it cost to consult the contact address of a profile that attracts and interests me?`,
    "IDTRANSLATEX21":`95 FCFA or 0.14 Euros.`,
    "IDTRANSLATEX22":` Is your dating site free?`,
    "IDTRANSLATEX23":` Yes, the registration and publication of your love search ad are free on illicolove.`,
    "IDTRANSLATEX24":` How do I post a meeting ad?`,
    "IDTRANSLATEX25":` After registering on illicolove, click on the button or tab «PUBLISH AN AD». Then on the page that will appear, choose the name of the continent that corresponds to your continent of usual residence. Finally fill in the search form that will be displayed and submit.`,
    "IDTRANSLATEX26":` Can I live in Africa and contact someone living outside Africa?`,
    "IDTRANSLATEX27":`Yes !`,
    "IDTRANSLATEX28":` Can I live in Europe and contact someone living outside Europe?`,
    "IDTRANSLATEX29":`Yes !`,
    "IDTRANSLATEX30":` Can I live in Europe and post my search ad on the Africa and Other World pages?`,
    "IDTRANSLATEX31":` No! Publish your search ad only in the page corresponding to your continent of residence.`,
    "IDTRANSLATEX32":` Can I top up my illicolove account with mobile money?`,
    "IDTRANSLATEX33":` Yes, but according to availability in your country!`,
    "IDTRANSLATEX34":` What is the subscription price on your site?`,
    "IDTRANSLATEX35":` There is no subscription on illicolove.`,
    "IDTRANSLATEX36":` How do I top up my Debit Credit account?`,
    "IDTRANSLATEX37":` We offer a secure payment system by several payment aggregators. Depending on your convenience, recharge your account by credit card or mobile money.  Under your profile on your personal dashboard, click on the green “RELOAD MY ACCOUNT” button and follow the simple steps.`,
    "IDTRANSLATEX38":` Do I have to pay to publish my search ad?`,
    "IDTRANSLATEX39":` No! Publishing a search ad is free.`,
    "IDTRANSLATEX40":` Do I have to pay to view ads?`,
    "IDTRANSLATEX41":` No! Viewing the ads is free, it is getting the contact address contained in an ad that is paid.`,
    "IDTRANSLATEX42":` How does your unit purchase system work?`,
    "IDTRANSLATEX43":` When you register, you automatically receive three (03) free credit units allowing you to consult three (03) contact addresses in the ads of your choice. Each unit has a value of 95 FCFA or 0.14 Euros.
    When your units run out, you can purchase them at your convenience and ability. The amount of units you can buy ranges from one unit to the number of units you desire.`,
    "IDTRANSLATEX44":` Do my purchased units have an expiry date?`,
    "IDTRANSLATEX45":` No! Your units are valid indefinitely.`,
    "IDTRANSLATEX46":` Do I have to subscribe to enjoy your dating service?`,




    "IDTRANSLATEX47":` On illicolove, there is no subscription to enjoy our services apart from the subscription to the newsletter which is optional.`,
    "IDTRANSLATEX48":` What is the privacy policy on illicolove.com?`,
    "IDTRANSLATEX49":`We value the privacy of your information. Your personal data is secure and is not shared with third parties without your consent. You can consult our privacy policy for more details`,
    "IDTRANSLATEX50":` here `,
    "IDTRANSLATEX51":` Where can I find my account validation email?`,
    "IDTRANSLATEX52":` It is possible that your account validation email is in your spam folder. Security filters from email providers can sometimes direct validation emails to these folders for your protection. Please check your spam folder and make sure to mark the email as "no spam" if you find it there. If you are still unable to find the validation email, please contact our support for further assistance.`,
    "IDTRANSLATETCU1":` General Terms of Use `,
    "IDTRANSLATETCU2":` Welcome to illicolove.com, an online dating platform offered by BAKO FAMILIA & COMPANY. By using our site, you agree to the terms and conditions described below.`,
    "IDTRANSLATETCU3":` Article 1: Purpose `,
    "IDTRANSLATETCU4":` The purpose of these «Terms of Use» is the legal framework for the use of illicolove.com and its services.`,




    "IDTRANSLATETCU5":` This contract is concluded between:`,
    "IDTRANSLATETCU6":` The Establishment BAKO FAMILIA & COMPANY owner of the website, hereinafter referred to as «the Publisher», AND Any natural person wishing to access the site and its services, hereinafter called «the User». The general conditions of use must be accepted by any User, and his access to the site constitutes acceptance of these conditions.
    In these Terms of Use, it is agreed that the following expressions or words, whether used in the singular or in the plural, shall have the following meanings:`,
    "IDTRANSLATETCU7":` Search ad: refers to a publication of a user or visitor of the site, in the form of text via our form, accompanied or not by one or more photographs representing his face.`,
    "IDTRANSLATETCU8":` Dating services: refers to the User’s access to all search ads published on the Website, including profiles, hypertext links, texts, images, videos, contacts or addresses through the «click to show».`,
    "IDTRANSLATETCU9":`«Click to show»: «Click to display», refers to the functionality that allows any user to display the email address, telephone contact or any other means of contacting another user who has previously issued a search advertisement and provided the means of his/her choice to contact. This feature which allows to obtain such a capital information is paying. Its cost is 95 CFA francs or 0.144 Euro approximately per click.`,
   "IDTRANSLATETCU10":` ARTICLE 2: Legal notice `,




   
   "IDTRANSLATETCU11X":` BAKO FAMILIA & COMPANY is the publisher of illicolove.com dating site.  Located in Lot 124 in Agblangandan, it is a sole proprietorship under Beninese law. It was created on May 29, 2008, registered in the Trade and Credit Register Furniture RCCM RB/COT/08/A4101; and has for Unique Tax Identifier (IFU) Number: 3200800938610.  She is represented by Gildas Ghislain GANGBAZO.`,
  "IDTRANSLATETCU11":` ARTICLE 3: Access to Services `,
  "IDTRANSLATETCU12":` Users of illicolove.com have access to the following services:`,
  "IDTRANSLATETCU13":` Creating a personal account `,
  "IDTRANSLATETCU14":` Creation and free publication of your search ad via our form to fill `,
  "IDTRANSLATETCU15":` Viewing search ads published by other users `,
  "IDTRANSLATETCU16":` Obtaining paid contacts profiles that retain its interest, and present on search ads, unlimited and at its convenience (Click to show/ Click to display)`,
  "IDTRANSLATETCU17":` Possibility to contact the Publisher to request a request for personalized services `,
  "IDTRANSLATETCU18":` Any User who has access to the Internet can access the site for free and from anywhere. The costs incurred by the User to access it (internet connection, computer equipment, etc.) are not the responsibility of the Publisher.  The services mentioned above are accessible to the User only if he is a member of the site (that is, he is identified using his login credentials): 
  The site and its various services may be interrupted or suspended by the Publisher,   in particular during maintenance, without obligation of notice or justification.`,
  "IDTRANSLATETCU19":` ARTICLE 4: Responsibility of the User `,
  "IDTRANSLATETCU20":` The User is responsible for the risks related to the use of his login and password.  The User’s password must remain secret. In case of password disclosure, the Publisher declines all responsibility. The User assumes full responsibility for the use he makes of the information and contents present on the illicolove.com website.
  Any use of the service by the User that directly or indirectly results in damage must be compensated to the benefit of the site.
  The site allows users to publish a search ad on the site by completing the “Publish an ad” form.`,





  "IDTRANSLATETCU21":` The user undertakes to provide reliable information, propose recent photographs free of obscenities, write in his search criteria remarks respectful of others and the law and accepts that are announced either moderated or refused by the Publisher, without obligation to justify after a refusal on his part to provide him with additional information to avoid false profiles.
  By publishing its advertisement on the site, the User grants the Publisher the non-exclusive and free right to represent, reproduce, adapt, modify, disseminate and distribute its advertisement on social networks, or directly by an authorized third party; in accordance with its anonymity or the chosen method of confidentiality.
  The Publisher undertakes to preserve the anonymity of any user in the event of the dissemination of ads on social networks.`,
  "IDTRANSLATETCU22":` ARTICLE 5: Responsibility of the Publisher `,
  "IDTRANSLATETCU23":` Any malfunction of the server or network cannot engage the responsibility of the Publisher. 
  Similarly, the responsibility of the site cannot be engaged in case of force majeure or unpredictable and insurmountable fact of a third party.
  The illicolove.com website undertakes to implement all necessary means to ensure the security and confidentiality of data.
  However, it does not provide a guarantee of total security. 
  The Publisher reserves the right not to guarantee the reliability of the profiles, although the search ads displayed on the site are considered reliable and verified before the validation of their publication in the back office by the proofreading and validation team of the Publisher.`,



  "IDTRANSLATETCU24":` ARTICLE 6: Intellectual property `,
  "IDTRANSLATETCU25":` BAKO FAMILIA & COMPANY is the exclusive owner of all intellectual property rights relating to the trademark, structure and content of the Site www.illicolove.com. The contents of the website www.illicolove.com are intended for a strictly personal, private and not collective use, freely for free content. The same applies to RSS feeds and newsletters. Outside of our affiliation system, any use in a professional or commercial context or any marketing of this content to third parties is prohibited, except with the express consent of BAKO FAMILIA & COMPANY.`,
  "IDTRANSLATETCU26":` ARTICLE 7: Personal data.`,
  "IDTRANSLATETCU27":` Consult our Privacy Policy, personal data and cookies here <a href=" policy.html"><i class="bi bi-arrow-right-circle"></i></a>`,
  "IDTRANSLATETCU29":` ARTICLE 8: Hyperlinks `,
  "IDTRANSLATETCU30":` The domains to which the hypertext links on the site lead are not the responsibility of the Publisher BAKO FAMILIA & COMPANY, which has no control over these links.  The Publisher has established partnerships with service providers and may offer the User information about other sites and/or services, for example by mentioning website addresses, and/or by the presence of hypertext links to these sites. These hypertext links that redirect to third-party sites have not been developed by the Publisher and do not belong to it. The Publisher therefore assumes no responsibility for these sites, their content, advertisements, products or services available on or from these sites. Furthermore, the Publisher cannot be held liable for the information, opinions and recommendations made by these third parties. `,



  "IDTRANSLATETCU31":` The Publisher shall not be liable for any damage or loss proven or alleged, consequential or in connection with the use, or reliance on the content, goods or services available on these partner services or external sources.  The decision to activate these links is the full responsibility of the User.
  The Publisher is not responsible for the availability of these sites and cannot control the content or validate the advertising, products and other information displayed on these websites. It is possible for a third party to create a link to a page of the site illicolove.com without express permission of the publisher.`,
  "IDTRANSLATETCU32":` ARTICLE 9: Special Warning `,
  "IDTRANSLATETCU33": ` In real life as in the virtual life on the internet, you can cross the path of honest people as well as malicious and scammers. 
  It is up to us individually to adopt certain security attitudes in real life and also in the virtual world on the internet. BAKO FAMILIA & COMPANY invites you to:`,
  "IDTRANSLATETCU34":` Never send money to a stranger met on this site; and under any circumstances.`,
  "IDTRANSLATETCU35":` Never send intimate photographs to a contact met on this site `,




  "IDTRANSLATETCU36":` Be on your guard when someone claims to live in the area but works abroad.`,
  "IDTRANSLATETCU37":` Never give in under the pretext of an urgent situation where a loved one is sick and your virtual correspondent asks you to help him pay various fees. In such a case, we invite you to report the profile of these scammers to the Publisher.`,
  "IDTRANSLATETCU38":` A budding relationship on illicolove.com can’t be a source of trouble and financial support for you. Show great distrust when a stranger declares his love to you without having been able to meet you; and even after a physical encounter, take the necessary time before committing any substantial expenditure in cash.`,
  "IDTRANSLATETCU39":` Always choose a public place for a first meeting.`,
  "IDTRANSLATETCU40":` Always report to a loved one your positions when you are in the company of an unknown person you have just met.`,
  "IDTRANSLATETCU41":` Denounce and report to us, attempts to sell products or services, profiles that prove false despite our filtering after your private exchanges, threats and intimidation, unhealthy, homophobic, abusive and offensive remarks, messages from minors, and applications for financial aid or intimate photographs.`,
  "IDTRANSLATETCU42":` Therefore, the User acknowledges and unreservedly agrees to be fully responsible for any action taken following the reading of an announcement of dating and in general to any information on the Site . The provision of such data shall not be treated in any way as specific advice or decision-making aid. The User is fully aware of the randomness of dating both in real life and on the internet.`,

  "IDTRANSLATETCU43":` ARTICLE 10: Deletion of data after 1 year of inactivity.`,
  "IDTRANSLATETCU44":` For security reasons, if you have not authenticated on the Site for a period of one year, you will receive an email inviting you to login as soon as possible, otherwise your profile will be deleted from our databases.`,




  "IDTRANSLATETCU45":` ARTICLE 11: Deletion of account on request.`,
  "IDTRANSLATETCU46":` The User has the possibility to delete his Account at any time, by simple request to the Publisher or by the Account deletion menu present in the Account settings if applicable.`,
  "IDTRANSLATETCU47":` ARTICLE 12: Deletion of the profile in case of violation of the GCU `,
  "IDTRANSLATETCU48":` In the event of a violation of one or more provisions of the GTU or any other document incorporated herein by reference, the Publisher reserves the right to terminate or restrict without prior notice and in its sole discretion, your use and access to the Services, to your account and to all Linked Sites.`,
  "IDTRANSLATETCU49":` ARTICLE 13: Indications in case of security breach detected by the Publisher.`,
  "IDTRANSLATETCU50":` We undertake to implement all appropriate technical and organizational measures to ensure a level of security appropriate to the risks of accidental, unauthorized or illegal access, disclosure, alteration, loss or destruction of your personal data.`,
  "IDTRANSLATETCU51":` In the event that we become aware of unlawful access to your personal data stored on our servers or those of our service providers, or unauthorized access resulting in the realization of the risks identified belowWe are committed to:`,





  "IDTRANSLATETCU52":` Review and inform yourself of the causes of the incident
  (public reporting);`,
  "IDTRANSLATETCU53":` Take reasonable steps to minimize any adverse effects and harm that may result from the incident.`,
  "IDTRANSLATETCU54":` ARTICLE 14: Limitation of liability `,
  "IDTRANSLATETCU55":` Under no circumstances can the commitments defined in the above point relating to notification in the event of a security breach be considered as any recognition of fault or responsibility for the occurrence of the incident in question.`,
  "IDTRANSLATETCU56":` ARTICLE 15: Duration of the contract `,
  "IDTRANSLATETCU57":` The duration of this contract is indefinite. The contract is effective with regard to the User from the beginning of the use of the service.`,
  "IDTRANSLATETCU58":` ARTICLE 16: Applicable law and jurisdiction `,
  "IDTRANSLATETCU59":` The language of these GTU is French and will prevail over all versions translated into another language. This contract depends on Beninese legislation, including Law No. 2017-20 of 20 April 2018 on the Digital Code in the Republic of Benin. The choice of applicable law does not affect your rights as a consumer in accordance with the applicable law of your place of residence.`,
  "IDTRANSLATETCU60":` If you are a consumer, you and we agree to submit to the non-exclusive jurisdiction of the Beninese courts. In case of unresolved dispute between the User and the Publisher, the commercial court of Cotonou will be competent to settle the dispute.`,
  "IDTRANSLATEPC1":` PRIVACY POLICY `,
  "IDTRANSLATEPC2":` Legal Notice `,




  "IDTRANSLATEPC3":` These legal notices and privacy policy provide and enlighten you in the way BAKO FAMILIA & COMPANY uses and protects the information you transmit to us, also, when you use our dating site accessible from the URL: www.illicolove.com.`,
  "IDTRANSLATEPC4":` Please note that our privacy policy may be modified and/or supplemented at any time, in particular to comply with any legislative, regulatory, jurisprudential or technological changes. In such a case, the date of its update will be indicated in this policy. These changes commit the user as soon as they are online. 
  We therefore invite you to regularly consult these notices and privacy policy in order to be aware of any changes.`,
  "IDTRANSLATEPC5":` Declaration to the Personal Data Protection Authority (APDP)`,
  "IDTRANSLATEPC6":` In accordance with Law No. 2017-20 of 20 April 2018 on digital code in the Republic of Benin (Book 5 th on the protection of personal data and privacy) the website www.illicolove.com has been declared to the Personal Data Protection Authority (apdp.bj) under the number SA-TDP-00601`,
  "IDTRANSLATEPC7":` In any case, BAKO FAMILIA & COMPANY collects personal information about the user only for the purposes of the dating service offered by its website. The user provides this information with full knowledge of the facts, particularly when he or she enters it himself or herself.`,





  "IDTRANSLATEPC8":` In accordance with the provisions of the law 2017-20 on digital code in the Republic of Benin, any user has a right of access, rectification and opposition to personal data concerning him, by making his written and signed request,   accompanied by a copy of a piece of identification signed by the holder of the document, specifying the address to which the answer must be sent. No personal information of a user of our website «www.illicolove.com» is published, transferred or sold on any medium or to third parties without their knowledge.`,
  "IDTRANSLATEPC9":` Data privacy `,
  "IDTRANSLATEPC10":` Your personal data is confidential and will not be communicated to third parties. The private nature of our dating service does not allow us to communicate your personal data (names, contacts, addresses, etc.) to an individual, regardless of his rank or quality.`,
  "IDTRANSLATEPC11": ` Right of access `,
  "IDTRANSLATEPC12":` In application of the provisions of the Digital Code Law in the Republic of Benin, any user of our website www.illicolove.com has a right of access, rectification, modification and deletion relating to the data that concerns him individually. This right may be exercised by the holder upon request sent by e-mail to the following e-mail address: info@illicolove.com. The personal information collected is not entrusted to third parties.`,
  "IDTRANSLATEPC13":` Right to rectification `,






  "IDTRANSLATEPC14":` In accordance with the digital code law in the Republic of Benin, any user of our website www.illicolove.com may request the rectification, update, deletion, locking or erasure of data concerning him, and may be inaccurate, erroneous, incomplete, ambiguous or obsolete.`,
  "IDTRANSLATEPC15":` Shelf life.`,
  "IDTRANSLATEPC16":` Your personal data is kept by BAKO FAMILIA & COMPANY only for the time corresponding to your need for dating services. However, this retention period does not exceed thirteen (13) months in case of inactivity on your user account.`,
  "IDTRANSLATEPC17":` Complaint to the competent authority `,
  "IDTRANSLATEPC18":` If you consider that BAKO FAMILIA & COMPANY does not respect its obligations with regard to your personal data collected during your visit to its website www.illicolove.com, you can address, as prescribed by the legal procedure, a complaint or a request to the Personal Data Protection Authority (APDP).`,
  "IDTRANSLATEPC19":` Intellectual property `,
  "IDTRANSLATEPC20":` All the content of this website, including, but not limited to, graphics, images, texts, videos, animations, sounds, logos, gifs and icons and their formatting are the exclusive property of BAKO FAMILIA & COMPANY with the exception of trademarks, logos or content belonging to other partner companies or authors. 
  Any reproduction, distribution, modification, adaptation, retransmission or publication, even partial, of these various elements is strictly prohibited without the express written consent of BAKO FAMILIA & COMPANY.`,
  "IDTRANSLATEPC21":` Terms of service `,
  "IDTRANSLATEPC22":` The website www.illicolove.com is available in English, Spanish, German, Portuguese, Russian, Mandarin (Chinese), Arabic, Japanese, Italian and Korean. For ease of use, we recommend using compatible and modern browsers such as: Chrome, Safari, Firefox.`,
  "IDTRANSLATEPC23":` Information and suggestions `,







  "IDTRANSLATEPC24":` BAKO FAMILIA & COMPANY implements all the means in its possession, to ensure a reliable dating service and a permanent update of its website www.illicolove.com. However, errors or omissions may occur. As a result, any user may send us suggestions or information at: info@illicolove.com and indicate any changes to the site that they deem relevant.`,
  "IDTRANSLATEPC25":`Cookies.`,
  "IDTRANSLATEPC26":` For technical performance, statistics and display purposes, the website www.illicolove.com may use cookies. Cookies are small text files stored on your terminal, which do not allow the identification of the user, but which record information relating to the navigation of a terminal on a website. Some parts of this site cannot be functional without the acceptance of cookies. The data thus obtained is intended to facilitate subsequent navigation on this site. Cookies are also used for various audience and attendance measures.`,
  "IDTRANSLATEPC27":` Refusing to install a cookie may make it impossible to access certain features. However, any user of this website can configure his terminal to refuse the installation of cookies, as indicated below :`,
  "IDTRANSLATEPC28":` Safari users: Choose Safari Preferences,   click Privacy, then select the “Cookies and website data” option. Always block: Safari does not allow any website, third party or advertiser to store cookies and other data on your Mac. This may prevent some websites from working properly.`,





  "IDTRANSLATEPC29":` Safari users: Choose Safari Preferences,   click Privacy, then select the “Cookies and website data” option. Always block: Safari does not allow any website, third party or advertiser to store cookies and other data on your Mac. This may prevent some websites from working properly.`,
  "IDTRANSLATEPC30":` Google Chrome users: Menu; Settings;   Show advanced settings (located at the bottom of the page).          You must then click on the Content settings button and check the box Block cookies and data from third-party sites, then click on OK to validate your choice.`,
  "IDTRANSLATEPC31":` Internet Explorer users: Internet Options menu Privacy tab and on the Advanced button to bring up the Advanced Privacy Settings window. Then select the Ignore automatic cookie management check box, and then select Refuse in the Third-party cookies column.`,
  "IDTRANSLATEPC32":` Microsoft Edge users: Tool/ Internet options tab. Click Privacy and choose Block all cookies.`,




  "IDTRANSLATEPC33":` Following the relevant practices, some cookies are
  exempt from the prior collection of your consent
  to the extent that they are indispensable to
  operation of this website. Their purpose is to
  facilitate electronic communication. This is
  including session identifier cookies,
  authentication and customization of your interface.
  These cookies are issued and managed by BAKO FAMILIA &
  COMPANY and are all subject to this policy.`,
  "IDTRANSLATEPC34":` hypertext links `,
  "IDTRANSLATEPC35":` The website “www.illicolove.com” may provide links to other websites or resources available on the Internet. BAKO FAMILIA & COMPANY has no means of controlling the sites connected to its website. Furthermore, it is not responsible for or guarantees the availability of such external sites and sources. It cannot be held responsible for any damage, of any nature whatsoever, resulting from the content of these sites or external sources.`,




  "IDTRANSLATECONSULTE1":` Africa `,
  "IDTRANSLATECONSULTE2":`Europe`,
  "IDTRANSLATECONSULTE3":` Other countries of the world `,
  "IDTRANSLATEPROFIL1": " Valid account ",
  "IDTRANSLATEPROFIL2": " Invalid account ",
  "IDTRANSLATEPROFIL3":` Debit account `,
  "IDTRANSLATEPROFIL4":` Debit account `,
  "IDTRANSLATEPROFIL5":`My Plan`,
  "IDTRANSLATEPROFIL6":`My Plan`, 
  "IDTRANSLATEPROFIL7":` My data `,
  "myNameIDX":` Delete your account `,
  "myBtn":` Recharge my account `,
  "myBtn2":` Recharge my account `,
  "IDTRANSLATEPROFIL9":` Go to homepage `,
  "IDTRANSLATEPROFIL10":` Log out `,
  "CONSULTEZLESANNONCES":` CHECK THE ADS `,
  "IDTRANSLATEPROFIL11":` EDIT YOUR AD `, 
  "IDTRANSLATEPROFIL12":` POST AN AD `,
 // "IDTRANSLATEPROFIL13":`Vous souhaite la Bienvenue !`,
  "exampleModalLongTitle":` One unit is worth 95 FCFA, or 0.144 Euros.`,
  "errorSms":` You must enter a number.`,
  "SmspayId":` Enter the number of units here.`,
  "IDTRANSLATEPROFIL14":` Back `, 
  "payYourUnitybtn":` Confirm `,
  "CHOISEYOURPAIEMENT":` Select the payment method.`,
  "exampleModalLongTitleX":` Secure your account.`,
  "IDTRANSLATEPROFIL15":` Please provide an answer that you will never forget.   This answer will be asked when retrieving your account. Without this answer, your account will remain inaccessible.`,
  "IDTRANSLATEPROFIL16":` Select your question `,
  "IDTRANSLATEPROFIL17":` What is your month of birth?`,
  "IDTRANSLATEPROFIL18":` What is your favorite color?`,
  "IDTRANSLATEPROFIL19":` How do you imagine your daily life?`,
  "IDTRANSLATEPROFIL20":` What is most important to you?`,
  "IDTRANSLATEPROFIL21":` What is the name of the person who inspires you?`,
  "IDTRANSLATEPROFIL22":` What is your favourite country?`,
  "IDTRANSLATEPROFIL23":` What is your favorite player?`,
  "IDTRANSLATEPROFIL24":` What is your favorite artist?`,
  "IDTRANSLATEPROFIL25":` What’s your answer? Just a word. No space.`,
  
  "submitFormID":` Subscribe `,
  "TOCLOSEMODALID":` Close `,   
  "IDTRANSLATEPROFIL26":` Confirm `, 
  "IDTRANSLATEPROFIL27":` Security answer `,
  "payYourUnity":` Write the number of units `,
  congratulationsTitle: " Congratulations!",
  accountSecureMessage: " Your account is secure. Thank you!",       
  accountSecureMessageX: " Do not put space. Thank you!",


  "IDTRANSLATEPROFIL28":` Your debit account is empty. Please purchase units to access the contacts of the ads that will please you.`,
  "IDTRANSLATEPROFIL29":` Finish using the 3 free units offered. Thank you.`,
  "IDTRANSLATEPROFIL30W":` Are you sure about that?`,
  "IDTRANSLATEPROFIL30":` You can’t go back!`,
  "IDTRANSLATEPROFIL31":` Yes, delete it!`, 
  "IDTRANSLATEPROFIL32":` Are you sure about that?`,
  "IDTRANSLATEPROFIL33":` After logging out, you have the option to log back in.`,
  "IDTRANSLATEPROFIL34":` Yes, disconnect !`,
  "IDTRANSLATEPROFIL35":` Offline `,
  "IDTRANSLATEPROFIL36":` You have been disconnected.`,
  "IDTRANSLATEPROFIL37":` Would you like to visit our homepage?`,
  "IDTRANSLATEPROFIL38":` Removed!`,
  "IDTRANSLATEPROFIL38X":` Successful.`,
  "IDTRANSLATEPROFIL39X":` Your photo has been successfully updated.`,
  "IDTRANSLATEPROFIL40X":` Mistake `,
  "IDTRANSLATEPROFIL41X":` Your photo could not be updated.`,

  "IDTRANSLATEPROFIL39":` Your account has been deleted! !`,
  "IDTRANSLATEPROFIL40":` Removed!`,
  "IDTRANSLATEPROFIL41":` Error deleting the user! `,
  "IDTRANSLATEPROFIL42":` There is a mistake `,
  "IDTRANSLATEPROFIL42Q": `There is a mistake `,
  "IDTRANSLATEPROFIL42QX":` There is a mistake `,
  "IDTRANSLATEPROFIL43":` The field is not well filled!`, 
  "IDTRANSLATEPROFIL44":` Something has gone wrong!`,
  "IDTRANSLATEPROFIL44IN":` Dear users, this payment method will be available very soon. For now, please use Feexpay to complete your transactions. Thank you!`,
  "IDTRANSLATEPROFIL45":` The data is not updated!`,
  "IDTRANSLATEPROFIL46":` You do not have units. Please purchase units. Go to your profile. Thank you!`,
  "IDTRANSLATEPROFIL47":` You're sure?`,
  "IDTRANSLATEPROFIL48":` By editing your ad, it will be submitted to administrators again for validation. This process can take 24 hours.`,




  "IDTRANSLATEPROFIL49":` Back `,
  "IDTRANSLATEPROFIL50":` Yes! Change.`,
  "IDTRANSLATELOGIN1":` Log in.`,
  "IDTRANSLATELOGIN2":`Email`,
  "IDTRANSLATELOGIN3":` Your email address `,
  "IDTRANSLATELOGIN4":` Password `,
  "IDTRANSLATELOGIN5":` Your password `,
  "IDTRANSLATELOGIN6":` Remember me `,
  "IDTRANSLATELOGIN7":` Password forgotten `,
  "IDTRANSLATELOGIN8":` I don’t have an account.`,
  "IDTRANSLATELOGIN9":` Sign up for free `,
  "IDTRANSLATELOGIN10":` Connect `,
  "IDTRANSLATELOGIN11":` Successful `,
  "IDTRANSLATELOGIN12":` You are successfully connected!`,
  "IDTRANSLATELOGIN13":` Sorry `,
  "IDTRANSLATELOGIN14":` Your password is incorrect!`,
  "IDTRANSLATELOGIN15":` Sorry `,
  "IDTRANSLATELOGIN16":` User does not exist with this email  !`,
  "IDTRANSLATESIGNUP1":` Sign up `,
  "IDTRANSLATESIGNUP2":` Nickname `, 
  "IDTRANSLATESIGNUP3":` Nickname `,
  "IDTRANSLATESIGNUP4":` Full name `, 
  "IDTRANSLATESIGNUP5":` Full name `,
  "IDTRANSLATESIGNUP6":`Email`,
  "IDTRANSLATESIGNUP7":` Your email address `,
  "IDTRANSLATESIGNUP8":`Password`,
  "IDTRANSLATESIGNUP9":` Your password `,
  "IDTRANSLATESIGNUP10":` I have read and accept the terms and conditions `,
  "IDTRANSLATESIGNUP11":` Read and accept our terms and conditions `,
  "IDTRANSLATESIGNUP12":` I already have an account.`,
  "IDTRANSLATESIGNUP13":` Log in `,
  "IDTRANSLATESIGNUP14":` Sorry `,




  "IDTRANSLATESIGNUP15":` An account is already associated with this email address or phone number.`,
  "IDTRANSLATESIGNUP16":` Successful `,
  "IDTRANSLATESIGNUP17":` You have successfully registered!`,
  "IDTRANSLATESIGNUP18":` Error sending email address to Firebase `, 
  "IDTRANSLATESIGNUP19":` Do not put space. Thank you!`,
  "IDTRANSLATESIGNUP19PHONE":` Please provide a valid phone number.`,
  "IDTRANSLATESIGNUP19PHONEX":` Please provide a valid phone number.`,
  "IDTRANSLATEFORGET1":` Send the email address you used to register.`,
  "IDTRANSLATEFORGET2":`E-mail`,
  "IDTRANSLATEFORGET3":`Your e-mail`,
  "IDTRANSLATEFORGET4":`Send`,
  "IDTRANSLATEFORGET5":`Confirm`,
  "IDTRANSLATEFORGET6":` Give the right answer!`,
  "IDTRANSLATEFORGET7":` Enter your new password!`,
  "IDTRANSLATEFORGET8":` Enter your new password!`, 
  "IDTRANSLATEFORGET9":`Super...`,
  "IDTRANSLATEFORGET10":` Password updated successfully!`,
  "IDTRANSLATEFORGET11":` Log in `,
  "IDTRANSLATEFORGET12":`Ok`,
  "IDTRANSLATEFORGET13":` Error updating the email.`,
  "IDTRANSLATEFORGET14":` This is the wrong answer `,
  "IDTRANSLATEFORGET15":` The user does not exist.`, 
  "IDTRANSLATEFORM1":` MY PROFILE `,
  "IDTRANSLATEFORM1W":` MY PROFILE `,
  "IDTRANSLATEFORM2":` MY PROFILE `,
  "IDTRANSLATEFORM3":` MY PROFILE `,
  "IDTRANSLATEFORM4":` PROFILE I’M LOOKING FOR `,
  "IDTRANSLATEFORM4W":` PROFILE I’M LOOKING FOR `,
  "IDTRANSLATEFORM5":` PROFILE I’M LOOKING FOR `,
 // "IDTRANSLATEFORM6":`VEUILLEZ REMPLIR LE FORMULAIRE CI-DESSOUS.`,
  "IDTRANSLATEFORM7":` Provide accurate and insightful information.`,
  "IDTRANSLATEFORM8":` My home country <i class="fa fa-star required"></i>`,
  "IDTRANSLATEFORM9":` My city of residence <i class="fa fa-star required"></i>`,
  "IDTRANSLATEFORM10":` Name or Alias <i class="fa fa-star required"></i>`,
  "IDTRANSLATEFORM11":` My age <i class="fa fa-star required"></i>`,
  "IDTRANSLATEFORM9PL":` My city of residence `,





  "IDTRANSLATEFORM10X":` My city of residence `,
  "IDTRANSLATEFORM11X":` My age `,
  "IDTRANSLATEFORM8X":` My home country `,
  "IDTRANSLATEFORM9X":` My age `,
  "IDTRANSLATEFORM12":` Please enter numbers only.<i class="fa fa-star required"></i>`,
  "IDTRANSLATEFORM13":` My Gender <i class="fa fa-star required"></i>`,
  "IDTRANSLATEFORM14":`Man`,
  "IDTRANSLATEFORM15":`Woman`,
  "IDTRANSLATEFORM16":` Transgender `,
  "IDTRANSLATEFORM17":`Genderfluid`,
  "IDTRANSLATEFORM18":`Intersex`,
  "IDTRANSLATEFORM19":`Agender`,
  "IDTRANSLATEFORM20":`Aromantic`,
  "IDTRANSLATEFORM21":` Asexual `,
  "IDTRANSLATEFORM22":` Bisexual `,
  "IDTRANSLATEFORM23":` Cisgender `,
  "IDTRANSLATEFORM24":` Cisnormativity `,
  "IDTRANSLATEFORM25":` Demiromantic `,
  "IDTRANSLATEFORM26":` Demisexual `,
  "IDTRANSLATEFORM27":` Heteromantivity `,
  "IDTRANSLATEFORM28":` they `,
  "IDTRANSLATEFORM29":`Misgender `,
  "IDTRANSLATEFORM30":` Non-binary `,
  "IDTRANSLATEFORM31":` Pansexual `,
  "IDTRANSLATEFORM32":` Polyamorous `,
  "IDTRANSLATEFORM33":`Queer`,
  "IDTRANSLATEFORM34":`Transgender`,
  "IDTRANSLATEFORM35":`Transition`,
 // "IDTRANSLATEFORM36":`VEUILLEZ REMPLIR LE FORMULAIRE CI-DESSOUS.`,
  "IDTRANSLATEFORM37":` Provide accurate and insightful information.`,
  "IDTRANSLATEFORM38":` My marital situation <i class="fa fa-star required"></i>`,
  "IDTRANSLATEFORM39":` Bachelor `,
  "IDTRANSLATEFORM40":` in a relationship `,
  "IDTRANSLATEFORM41":`Divorced`,
  "IDTRANSLATEFORM42":` Widower/Widow`,
  "IDTRANSLATEFORM43":` My citizenship <i class="fa fa-star required"></i>`,
  "IDTRANSLATEFORM44":` Phone <i class="fa fa-star required"></i>`,
  "IDTRANSLATEFORM45":` Enter only your number without the country prefix <i class="fa fa-star required"></i>`,
  "IDTRANSLATEFORM46":` My Profession or Occupation <i class="fa fa-star required"></i>`,
  "IDTRANSLATEFORM47":` My job `,
 // "IDTRANSLATEFORM48":`VEUILLEZ REMPLIR LE FORMULAIRE CI-DESSOUS.`,
  "IDTRANSLATEFORM49":` Provide accurate and insightful information.`,
  "IDTRANSLATEFORM50":` I want a meeting <i class="fa fa-star required"></i>`,
  "IDTRANSLATEFORM51":` Friendly, a company to break loneliness `,
  "IDTRANSLATEFORM52":` Lasting `,
  "IDTRANSLATEFORM53":` Can lead to marriage `,
  "IDTRANSLATEFORM54":` Proof of identity `,
  "IDTRANSLATEFORM55":`Photo 1 <i class="fa fa-star required"></i>`,
  "IDTRANSLATEFORM56":`Photo 2 <i class="fa fa-star required"></i>`,
 // "IDTRANSLATEFORM57":`VEUILLEZ REMPLIR LE FORMULAIRE CI-DESSOUS.`,
  "IDTRANSLATEFORM58":` Provide accurate and insightful information.`,
  "IDTRANSLATEFORM59":`His/Her Gender <i class="fa fa-star required"></i>`,
  "IDTRANSLATEFORM60":`Man`,
  "IDTRANSLATEFORM61":`Woman`,
  "IDTRANSLATEFORM62":`Transgender`,
  "IDTRANSLATEFORM63":`Genderfluid`,
  "IDTRANSLATEFORM64":`Intersex`,
  "IDTRANSLATEFORM65":`Agender`,
  "IDTRANSLATEFORM66":`Aromantic`,
  "IDTRANSLATEFORM67":`Asexual`,
  "IDTRANSLATEFORM68":`Bisexual`,




  "IDTRANSLATEFORM69":`Cisgender`,
  "IDTRANSLATEFORM70":` Cisnormativity `,
  "IDTRANSLATEFORM71":` Demiromantic `,
  "IDTRANSLATEFORM72":` Demisexual `,
  "IDTRANSLATEFORM73":` Heteromantivity `,
  "IDTRANSLATEFORM74":` they `,
  "IDTRANSLATEFORM75":` Misgender `,
  "IDTRANSLATEFORM76":` Non-binary `,
  "IDTRANSLATEFORM77":` Pansexual `,
  "IDTRANSLATEFORM78":` Polyamorous `,
  "IDTRANSLATEFORM79":`Queer`,
  "IDTRANSLATEFORM80":`Transgender`,
  "IDTRANSLATEFORM81":`Transition`,
  "IDTRANSLATEFORM82":` His/Her age group <i class="fa fa-star required"></i>`,
  "IDTRANSLATEFORM83":` His/Her marital status <i class="fa fa-star required"></i>`,
  "IDTRANSLATEFORM84":` Bachelor `,
  "IDTRANSLATEFORM85":` in a relationship `,
  "IDTRANSLATEFORM86":`Divorced`,
  "IDTRANSLATEFORM87":` Widower/Widow `,
  "IDTRANSLATEFORM88":` His/Her country of residence <i class="fa fa-star required" ></i>`,
  "IDTRANSLATEFORM89":` You can choose several countries. <i class="fa fa-star required"></i>`,
  "IDTRANSLATEFORM90":` His/Her country `,
  "IDTRANSLATEFORM91":` His/Her country of residence `,
//  "IDTRANSLATEFORM92":`VEUILLEZ REMPLIR LE FORMULAIRE CI-DESSOUS.`,
  "IDTRANSLATEFORM93":` Provide accurate and insightful information.`,
  "IDTRANSLATEFORM94":` Describe the physical aspect you desire.`,
  "IDTRANSLATEFORM95":` His/Her hometown <i class="fa fa-star required"></i>`,
  "IDTRANSLATEFORM96":` His/Her city `,
  "IDTRANSLATEFORM97":` His/Her Work or Occupations <i class="fa fa-star required"></i>`,
  "IDTRANSLATEFORM98":` His/Her work `,
  "IDTRANSLATEFORM99":` Other details.`,
  "IDTRANSLATEFORM100":` More information `,
  "IDTRANSLATEFORM10w":` Physical aspects `,
  "IDTRANSLATEFORM101":` Next `,
  "IDTRANSLATEFORM102":` Previous `,
  "IDTRANSLATEFORM103":` Send `,




  "IDTRANSLATEFORM104":`<p > The personal data collected in this form by <strong style="color: #000080;">BAKO FAMILIA & COMPANY</strong> will be treated exclusively in order to guarantee the smooth running of the dating service you have requested. The personal data collected are not communicated to anyone without your consent.
  In application of the provisions of Law 2017-20 on digital code in the Republic of Benin on the protection of personal data, the processing of the collected data was declared before the APDP.</em> </p>
  <hr>
  <p class="mb-0"> In accordance with the aforementioned law, you can exercise your rights of access, opposition, rectification and deletion at <strong style="color: #000080;">BAKO FAMILIA & COMPANY</strong>.
  </em></p>`,
  "IDTRANSLATEFORM105":` Your image is too small. Please select an image of at least 300x300 pixels.`,
  "IDTRANSLATEFORM106":` An error occurred when calling the REST Countries API `,
  "IDTRANSLATEFORM107":` Just put the number without the prefix `,
  "IDTRANSLATEFORM108":` Please select the country.`,
  "IDTRANSLATEFORM109":` Successful `,
  "IDTRANSLATEFORM110":` Your form is subject to verification within 24 hours <i class="fa fa-heart"></i>.`,
  "IDTRANSLATEFORM111":` Sorry `,
  "IDTRANSLATEFORM112":` All your fields are not filled.`,
  "IDTRANSLATEUSERD1":` Contact me  <svg xmlns="http://www.w3.org/2000/svg" width="10.444" height="9.7"><defs><clipPath id="a"><path fill="none" d="M0 0h10.444v9.7H0z"/></clipPath></defs><g fill="none" stroke="#2a46cc" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.438" clip-path="url(#a)"><path d="M.719 4.85h8.709M5.594 8.683L9.427 4.85M5.594 1.017L9.427 4.85"/></g></svg>`,





  "IDTRANSLATEUSERD2":` To contact me `,
  "IDTRANSLATEUSERD3":`<i class="bi bi-alexa" style="font-size: 3vh !important;"></i> My Profile `,
  "IDTRANSLATEUSERD4":` Replies `,
  "IDTRANSLATEUSERD5":` My city of residence :`,
  "IDTRANSLATEUSERD6":` My name or pseudonym:`,
  "IDTRANSLATEUSERD7":` My age group :`,
  "IDTRANSLATEUSERD8":`My gender:`,
  "IDTRANSLATEUSERD9":` My marital situation:`,
  "IDTRANSLATEUSERD10":` My citizenship :`,
  "IDTRANSLATEUSERD11":` My job or occupation:`,
  "IDTRANSLATEUSERD12":` I want a meeting :`,
  "IDTRANSLATEUSERD13":` My physical preferences :`,
  "IDTRANSLATEUSERD14":` Other details :`,
  "IDTRANSLATEUSERD15":`<i class="bi bi-alexa" style="font-size: 3vh !important;"></i> Profile I am looking for `,
  "IDTRANSLATEUSERD16":` Replies `,
  "IDTRANSLATEUSERD17":`His/Her Gender :`,
  "IDTRANSLATEUSERD18":` His/Her age group:`,
  "IDTRANSLATEUSERD19":` His/Her marital status:`,
  "IDTRANSLATEUSERD20":` His/Her country of residence :`,
  "IDTRANSLATEUSERD21":` His/Her hometown:`,
  "IDTRANSLATEUSERD22":` Their job or occupation:`,
  "TIDTRANSLATEUSERD23":` Online the `,

  "IDTRANSLATEUSERD24":`<i class="fas fa-database" style="font-size: 5vh !important; color: #FFB6C1;"></i> No data.`,
  "IDTRANSLATEUSERD25":` No data.`,
  "IDTRANSLATEUSERD26":` There's a mistake.`,
  "IDTRANSLATEUSERD27":` Your account is debited `,
  "IDTRANSLATEUSERD28":` Your data is not updated.`,
  "IDTRANSLATEUSERD29":` You will only be able to contact other users after the publication of your search form.`,
  "IDTRANSLATEUSERD30":` Do you want to publish your ad?`,
  "IDTRANSLATEUSERD31":` Your units are exhausted. You can no longer contact other users’.`,
  "IDTRANSLATEUSERD32":` Do you want to buy units?`,
  "IDTRANSLATEUSERD33":` Agreed `,
  "IDTRANSLATEUSERD34":` Visit his/her profile!`,
  "IDTRANSLATEUSERD35":`<i class="bi bi-eye" style="color: white;"></i> Click to display.`,
  "texteIDTRANSLATEUSERD24YX": " online ",
  "myNameIDwallet":" Withdraw your commissions.",
  "MYEWALLETID":`<i class="fa fa-align-left"></i> My wallet `,
  "MYEWALLETID1":" Total balance ", 
  "comeBackId":" Back ",
  "idTogetwallet":" Withdraw your earnings ",
  "HISTORYISMY":" Historic ",
  "IDTRANSLATEWALLETU":" Ongoing ",
  "IDTRANSLATEWALLETX":" Paid ",
  "IDTRANSLATEWALLET":" Sorry!",
  "IDTRANSLATEWALLETM":" Your transfer failed. Please try again later.", 
  "IDTRANSLATEWALLET1":" Congratulations -",
  "IDTRANSLATEWALLET2":" Your transfer was successful!",
  "TITLEWALLETID": " e-Wallet ",
  "IDTRANSLATEFOEMXX": " Please enter only letters, numbers are not allowed in this field.",
  "linkInput": " Copy your affiliate link here ",
  "TERMINATOR" :" FINISH ",
  "PHOTOID" :"PHOTO",
  "TERMINATORW" :" IT'S OVER ",
  "PHOTOIDW" :"PHOTO",
  "STEPS14":" Step 1 - 4",
  "STEPS23":" Step 2 - 4",
  "STEPS34":" Step 3 - 4",
  "STEPS44":" Step 4 - 4",
  "IDTRANSLATEPROFIL29FILE" :" Would you like to send this image?", 
  "IDTRANSLATEPROFIL29FILE1" :" Back ",
  "IDTRANSLATEPROFIL29FILE2" :" Yes ",
  "IDTRANSLATESIGNUP19OPTIONSERROR" :" An error occurred when requesting geolocation.",
  "IDTRANSLATESIGNUP19OPTIONS" :" We regret to inform you that you cannot use our services until your geolocation is accepted.",
  "IDTRANSLATESIALERT1" :" information ",
  "IDTRANSLATESIALERT2" :" Dear visitors, in order to ensure your safety and fight against fake ads, illicolove locates your country of residence.",
  "IDTRANSLATESIALERT3" :" Yeah, I’ll take it!",
  "IDTRANSLATESIALERT4" :" Refused ",
  "CONTRACTID1":` Affiliation Agreement `,
  "CONTRACTID2":`      Between: illicolove , hereinafter referred to as "the dating site",
  and: ME, hereinafter referred to as "the Affiliate)".`,
  "CONTRACTID3":` Purpose `,
  "CONTRACTID4":` The purpose of this affiliation agreement is to govern the relationship between illicolove and the Affiliate in relation to the affiliate program of the dating site <a href="https://illicolove.com">illicolove.com</a>`,
  "CONTRACTID5":`1. Affiliate Program `,
  "CONTRACTID6":` illicolove operates an online affiliate program to promote its dating services.`,
  "CONTRACTID7":`2. Role of the Affiliate `,
  "CONTRACTID8":` The Affiliate undertakes to promote the services of the dating site using unique affiliate links provided by illicolove, as well as other promotional means approved by the site.`,
  "CONTRACTID9":`3. Remuneration of the Affiliate `,
  "CONTRACTID10":`3.1. The Affiliate will receive a commission of 100 CFA francs for each new member who registers on the site <a href="https://illicolove.com">illicolove.com</a> via the Affiliate’s unique affiliate link and publishes a love search ad.`,
  "CONTRACTID11":`3.2. In addition, the Affiliate will receive a 10% commission on each purchase made by the members referred via its affiliate link.`,
  "CONTRACTID11X":`3.3 The 100F CFA commission will only be collected when the new member purchases a unit greater than 100F CFA, in order to avoid commission fraud.`,
  "CONTRACTID12":`4. Commission Payment `,
  "CONTRACTID13":` illicolove will pay the Affiliate’s commission on a regular quarterly basis on request by mobile money or bank transfer, at the Affiliate’s choice. The Affiliate shall bear the costs of the return.`,
  "CONTRACTID14":`5. Term of Contract `,
  "CONTRACTID15":` This affiliation agreement shall come into force on the date of its acceptance by the Affiliate and shall remain in force until terminated by either party, subject to thirty (30) days written notice.`,
  "CONTRACTID16":`6. Termination `,
  "CONTRACTID17":` illicolove or the Affiliate may terminate this Agreement at any time by providing written notice to the other party. Any unpaid commission will be paid in accordance with the terms of this contract.`,
  "CONTRACTID18":`7. Applicable Law `,
  "CONTRACTID19":` This contract is governed by the laws of Benin and any dispute arising from this contract, failing to be settled amicably, will be subject to the exclusive jurisdiction of the Commercial Courts of Cotonou.`,
  "ANNONCEAFFILIATEID" : `        <div class="box--list__items">
  <div class="box--list__item" style="  padding-top: 0 !important; margin-top: 0 !important;">
      <h2 class="box--list__title box--list__titlex" > Earn money by helping people find love on illicolove!</h2>
      <p class="box--list__description"> Looking for a lucrative affiliate opportunity? Join our unique affiliate program and increase your income by helping others find their soulmate. Here’s how it works: <br>
        ✅ Receive 100 CFA francs for each new member who signs up and publishes a love research ad on our site via your affiliate link. <br>

        ✅ Plus, get 10% commission on every purchase you refer. The more they spend, the more you earn!</p>
  </div>
  
  <div class="box--list__item">
      <h2 class="box--list__title box--list__titlex"> Why choose our affiliate program?</h2>
      <div class="box--list__description">
        ✅ Earn money as soon as someone signs up, and publish their search ad. <br>
        ✅ Get continuous commission every time your affiliates make a purchase on our site. <br>
        ✅ Target an audience in search of love, an exciting and constantly growing niche. <br>
        
      </div>
  </div>
  
  <div class="box--list__item">
      <h2 class="box--list__title"> Join our program </h2>
      <div class="box--list__description">✅  Join our affiliate program today and start earning money by helping people find love on illicolove! 💑
        
       </div>
  </div>
  <div class="box--list__item">
    <h2 class="box--list__title"> Sign up.</h2>
    <div class="box--list__description"> 
      ✅ Register now and increase your income : <a href="./v/login/signup.html">inscription</a>
        
      For any questions, contact us at info@illicolove.com </div>
</div>
</div>`,
    "IDTRANSLATE6WX":` Languages <span> <i class="bi bi-globe2"></i></span> <i class="bi bi-chevron-down"></i> `,
  }

      },
      kr:{
        translation : {
          "IDTRANSLATE1": "홈",
         // "IDTRANSLATE2": "À propos",
          "IDTRANSLATE3": `어떻게 작동합니까?`,
          "IDTRANSLATE4": `약관`,
          "IDTRANSLATE5":"이용 약관",
          "IDTRANSLATE6":"개인정보 보호정책",
          "IDTRANSLATE6X":"우리의 제휴 시스템",
          "IDTRANSLATE7":"연락처",
          "IDTRANSLATE8":"등록",
          "IDTRANSLATE9":"로그인",
          "IDTRANSLATECONTACT1":"연락처",
          "IDTRANSLATECONTACT2":"연락처",
          "IDTRANSLATECONTACT3":"주소",
          "IDTRANSLATECONTACT4":'전화 번호',
          "IDTRANSLATECONTACT5":"이메일", 
          "IDTRANSLATECONTACT6":"소셜 미디어",
          "IDTRANSLATETITLE":"공지 사항",
          "IDTRANSLATETITLEFORM":"양식",
          "IDTRANSLATE1INF1":`귀하의 이메일 주소는 Bako Familia & Company가 귀하에게 사이트의 새로운 기능과 업데이트에 대한 정보를 제공하기 위해 수집 및 처리됩니다.
베냉 공화국의 디지털 코드에 관한 법률 2017-20 적용, 개인 정보 보호에 관한 법률, info@illicolove.com 으로 이메일을 보내 수신 거부 또는 액세스, 이의 제기, 수정 및 삭제의 권리를 행사할 수 있습니다.`,
          "IDTRANSLATE10":"illicolove,",
          "IDTRANSLATE11":`당신의 데이트 플랫폼, 독신과 외로움을 싸울.`,
          "IDTRANSLATE12":`우리는 비자발적 외로움을 인도주의적 문제로 보고 있으며, 그로 고통받는 사람들에게 해결책을 제공하기 위해 최선을 다하고 있습니다.`,
          "IDTRANSLATE13":`무료 등록`,
          "IDTRANSLATE13KLM":`프로필로 이동`,
         // "IDTRANSLATE14":`À propos de nous`,
         // "IDTRANSLATE15":`Votre plateforme de rencontres en ligne illicolove.com vous est proposée par les Établissements BAKO FAMILIA & COMPANY, une entreprise individuelle(EI) de droit béninois immatriculée au Registre du Commerce et du Crédit Mobilier RCCM RB/COT/08/A4101 ; à l’Identifiant Fiscal Unique (IFU) 3200800938610.`,

         // "IDTRANSLATE16":`Elle a pour activités, le Wedding planning (accompagnement dans l’organisation de mariage), le Tourisme-Loisirs, l’organisation de foires et Salons. Elle a été créée en Mai 2008 à Cotonou. `,
         // "IDTRANSLATE17":`Plus de détails`,
          "IDTRANSLATE18":`우리의 목표`,
          "IDTRANSLATE19":`제16조`,
          "IDTRANSLATE20":`우리의 목표`,

          "IDTRANSLATE17USER":`영역 선택`,
          "IDTRANSLATE18USER":`사용자 세부 정보`,
          "IDTRANSLATE19USER":`프로필`,

          "IDTRANSLATE21":`이 온라인 데이트 플랫폼의 구현은 독신과 외로움에 대처하기위한 우리의 이니셔티브에 응답합니다.
그것은 제16조의 세계인권선언에서 정의한 선에서 우리의 행동을 구체화하는데, 이는 여성과 남성의 혼인권과 사회와 국가에 의해 보호되어야 하는 가정의 중요성을 상기시킨다.`,
         "IDTRANSLATE22":`우리의 가치 :`,
         "IDTRANSLATE23":`신뢰성,`,
         "IDTRANSLATE24":`예의와`,
         "IDTRANSLATE25":`재량권.`, 
         "IDTRANSLATE26":` 초년기부터 인종, 국적 또는 종교에 대한 제한없이 남성과 여성은 결혼하고 가족을 창립 할 권리가 있습니다. 그들은 결혼에 관하여, 결혼 기간 동안 그리고 해산에 관하여 동등한 권리를 가진다. `,
         "IDTRANSLATE27":` 결혼은 미래의 배우자의 자유롭고 완전한 동의를 통해서만 성립할 수 있다.`,
         "IDTRANSLATE28":` 가족은 사회의 자연적이고 근본적인 요소이며, 사회와 국가의 보호에 대한 권리를 가진다.
외로움, 독신, 사회적 고립은 현장의 공공 당국, 협회 및 기업에 도전하는 인도주의적 필수 요소입니다. 만성적이고 비자발적인 외로움은 주로 침묵 속에서 고통받는 사람들이 경험하는 개별 드라마입니다. illicolove.com 이 맥락에서 태어났다, 욕망을 제공하는 그렇지 않고 간단하게, 온라인 데이트 서비스; 검증된 사냥에 대한 허구의 프로필.
환영합니다!`,
         "IDTRANSLATE29":`우리는 개인만을 대상으로 :`,
         "IDTRANSLATE30":` 18세 이상의 청년들.`,
         "IDTRANSLATE31":`노인 비자발적 인 싱글, 절망적이고 실망.`,
         "IDTRANSLATE32":`이혼한.`,
         "IDTRANSLATE33":`홀아비.`,
         "IDTRANSLATE34":`당사 사용자`,
         "IDTRANSLATE35":`모든 사용자`,
         "IDTRANSLATE36":`아프리카`,
         "IDTRANSLATE37":`유럽 내`,
         "IDTRANSLATE38":`세계의 다른 국가`,
        // "IDTRANSLATE39":`Notre équipe`,
        // "IDTRANSLATE40":`Directrice`,
        // "IDTRANSLATE41":`Relectrice, et Responsable marketing`,
        // "IDTRANSLATE42":`Développeur et SEO`,


         "IDTRANSLATEX1":`사용 단계`,
         "IDTRANSLATEX2":`이것이 불법이 작동하는 방식입니다.`,
         "IDTRANSLATEX3":`등록`,
         "IDTRANSLATEX4":`등록시, 우리는 295 CFA 프랑 또는 626 원 가치의 3 (03) 단위를 제공합니다.
단가는 95 CFA 프랑 또는 200 원입니다.`,
         "IDTRANSLATEX5":`연결 중`,
         "IDTRANSLATEX6":`당사 웹사이트에 로그인하면 등록된 사용자를 위해 예약된 모든 기능과 서비스에 액세스할 수 있습니다.`,
         "IDTRANSLATEX7":`공고 게시`,
         "IDTRANSLATEX8":` «광고 게시» 버튼을 클릭하면 거주지에 따라 «아프리카» 페이지 또는 «유럽» 페이지 또는 «기타 세계 국가» 페이지에 게시하도록 선택할 수 있습니다. 표시되는 검색 양식을 작성하기만 하면 됩니다.`,




         "toopenPUAID":`자세히...`,
         "openPUA":`우리는 당신이 당신의 거주 지역의 페이지에 광고를 게시하도록 초대하지만, 당신은 상담 하 고 평소 지리적 영역 이외의 검색 광고의 프로필에 연락 할 수 있습니다.
예를 들어, 프랑스에 거주하는 경우 페이지에 광고를 게시해야 합니다.
«Europe» 페이지의 광고를 상담하고 연락 할 수 있습니다.
«아프리카», «유럽» 및 «세계의 다른 국가»
검색 양식을 작성하여 제출하면
귀하의 프로필을 판단하는 경우 24시간 이내에 광고가 표시됩니다.
교정 및 가능한 검사 후에 믿을 수 있는. 우리의 교정 및 검증 팀이 귀하의 프로필의 신뢰성에 대해 안심시키기 위해 개인적으로 귀하에게 편지를 보낼 수 있습니다. 신원, 음성 또는 화상 통화에 대한 세부 정보를 요청받을 수 있습니다. 이를 위해 illicolove.com 광고의 유효성 검사 및 표시는 24시간을 초과할 수 있습니다. 당신의 광고의 속도는 당신에 달려 있을 것입니다. 우리는 체계적으로 어떤 광고 공상, 비현실적 및 특히 가짜 프로필, 예고 없이 제외.
illicolove.com 액세스하는 데 문제가 있는 경우 info@illicolove.com 으로 문의하십시오.`,
          "IDTRANSLATEX9":`사용자 계정의 유효성 검사`,
          "IDTRANSLATEX10":`양식을 작성하고 "보내기"를 클릭하십시오. 24시간 이내에 양식을 확인하고 유효성을 검사합니다. 확인 메시지가 나타납니다. 추가 확인이 필요한 경우 이메일로 알려드립니다.`,
          "IDTRANSLATEX11":`광고 보기`,
          "IDTRANSLATEX12":` “광고 보기” 버튼은 아프리카(아프리카 광고), 유럽(유럽 광고) 및 기타 세계 국가(아프리카 및 유럽 이외 광고)의 세 가지 다른 버튼으로 연결됩니다. illicolove.com 에서 인생의 남자 또는 여자를 만나는 것은 95 CFA 프랑 또는 200 원 만 비용을 지불할 수 있습니다. 이것은 특히 관심을 끄는 프로필의 "Contact Me"상자를 클릭 할 때 취한 각 단위에 대해 지불하는 것입니다.`,
          "IDTRANSLATEX13":`단위 구매`,
          "IDTRANSLATEX14":`원하는 경우 계정(내 플랜)을 다시 로드하여 게시된 광고에서 회의를 계속 검색할 수 있습니다. 가입하자마자 받게 되는 개인 직불-신용 계좌를 통해 선택한 결제 방법으로 충전할 수 있습니다. illicolove.com 의 청구 통화는 CFA 프랑(XOF)입니다. 1 FCFA = 2.13원`,
          "IDTRANSLATEX15":`자주 묻는 질문.`,
          "IDTRANSLATEX16":` illicolove.com 에서 좋은 미팅을 할 수 있습니까?`,
          "IDTRANSLATEX17":` 예, 검색 양식을 작성하고 자신에 대한 진정한 정보를 제공하는 한 가능합니다.`,




          "IDTRANSLATEX18":`당신의 데이팅 사이트는 유료입니까?`,
          "IDTRANSLATEX19":` 예, 특히 관심 있는 프로필의 연락처 정보를 확인하려면 유료입니다.`,
          "IDTRANSLATEX20":`나를 끌어들이고 관심있는 프로필의 연락처 주소를 참조하는 데 드는 비용은 얼마입니까?`,
          "IDTRANSLATEX21":`FCFA 95 또는 200원.`,
          "IDTRANSLATEX22":` 당신의 데이팅 사이트는 무료입니까?`,
          "IDTRANSLATEX23":`예, 등록 및 데이트 광고의 출판은 illicolove.com 에서 무료입니다.`,
          "IDTRANSLATEX24":` 미팅 광고를 어떻게 게시하나요?`,
          "IDTRANSLATEX25":` illicolove.com 등록한 후, “POST an AD(광고 게시)” 버튼 또는 탭을 클릭합니다. 그런 다음 나타나는 페이지에서 평소 거주하는 대륙에 해당하는 대륙의 이름을 선택하십시오. 마지막으로 표시될 검색 양식을 작성하고 제출합니다.`,
          "IDTRANSLATEX26":` 아프리카에 거주하면 아프리카 외부에 거주하는 누군가와 연락할 수 있을까요?`,
          "IDTRANSLATEX27":`예!`,
          "IDTRANSLATEX28":`유럽에 거주하면서 유럽 이외의 지역에 거주하는 사람과 연락할 수 있습니까?`,
          "IDTRANSLATEX29":`예!`,
          "IDTRANSLATEX30":`유럽에 거주하면서 아프리카 및 기타 세계 페이지에 검색 광고를 게시할 수 있습니까?`,
          "IDTRANSLATEX31":`아니요! 거주 대륙에 해당하는 페이지에만 검색 광고를 게시하십시오.`,
          "IDTRANSLATEX32":` illicolove.com 계정에 모바일 화폐를 충전할 수 있습니까?`,
          "IDTRANSLATEX33":`예!`,
          "IDTRANSLATEX34":` 귀사의 웹사이트 구독 가격은 어떻게 되나요?`,
          "IDTRANSLATEX35":` illicolove.com 구독이 없습니다. `,
          "IDTRANSLATEX36":` 직불 크레딧 계좌에 충전하려면 어떻게 해야 합니까?`,
          "IDTRANSLATEX37":`우리는 여러 지불 집계자에 의해 안전한 지불 시스템을 제공합니다. 귀하의 편의에 따라 신용 카드 또는 모바일 화폐로 계정에 충전하십시오. 개인 대시보드의 프로필 아래에서 녹색 "내 계정 다시 로드"버튼을 클릭하고 간단한 단계를 따르십시오.`,
          "IDTRANSLATEX38":`검색 광고를 게시하려면 비용을 지불해야 합니까?`,
          "IDTRANSLATEX39":`아니요! 검색 광고를 게시하는 것은 무료입니다.`,
          "IDTRANSLATEX40":`광고를 보려면 비용을 지불해야 합니까?`,
          "IDTRANSLATEX41":`아니요! 광고를 보는 것은 자유롭다, 지불되는 광고에 포함된 접촉 주소를 얻고 있다.`,
          "IDTRANSLATEX42":` 귀사의 유닛 구매 시스템은 어떻게 작동하나요?`,
          "IDTRANSLATEX43":` 등록하면 자동으로 세(03) 무료 크레딧 단위를 받게 되므로 선택한 광고에서 세(03) 연락처 주소를 참조할 수 있습니다. 각 장치의 값은 95FCFA 또는 200원입니다.
유닛이 소진되면 편리하고 능력있게 구입할 수 있습니다. 구매할 수 있는 단위의 양은 한 단위에서 원하는 단위의 수에 이르기까지 다양합니다.`,
          "IDTRANSLATEX44":` 내가 구매하는 유닛에 유효기간이 있나요?`,
          "IDTRANSLATEX45":`아니요! 귀하의 단위는 무기한으로 유효합니다.`,
          "IDTRANSLATEX46":`당신의 데이트 서비스를 이용하려면 구독해야 하나요?`,




          "IDTRANSLATEX47":` illicolove.com 에서는 뉴스레터 구독을 제외하고 서비스를 즐길 수 있는 구독이 없습니다..`,
          "IDTRANSLATEX48":` illicolove.com 개인 정보 보호 정책은 무엇입니까?`,
          "IDTRANSLATEX49":`우리는 귀하의 정보의 개인 정보를 소중하게 생각합니다. 귀하의 개인 데이터는 안전하며 귀하의 동의 없이 제3자와 공유되지 않습니다. 자세한 내용은 개인정보 보호정책을 참조하십시오.`,
          "IDTRANSLATEX50":`여기`,
          "IDTRANSLATEX51":` 계정 확인 이메일은 어디에서 찾을 수 있습니까?`,
          "IDTRANSLATEX52":` 계정 확인 이메일이 스팸 폴더에 있을 수 있습니다. 이메일 제공업체의 보안 필터가 사용자의 보호를 위해 이러한 폴더로 유효성 검사 이메일을 전달할 수도 있습니다. 스팸 폴더를 확인한 후 "스팸 없음"으로 이메일을 표시하십시오(스팸 없음). 그래도 정품 확인 이메일을 찾을 수 없는 경우 지원 팀에 문의하여 추가 지원을 받으십시오.`,
          "IDTRANSLATETCU1":`이용 약관`,
          "IDTRANSLATETCU2":` illicolove.com, 바코 파밀리아 & 회사에서 제공하는 온라인 데이트 플랫폼에 오신 것을 환영합니다. 당사 사이트를 사용함으로써, 당신은 아래에 설명 된 이용 약관에 동의합니다.`,
          "IDTRANSLATETCU3":`제1조: 목적`,
          "IDTRANSLATETCU4":`본 이용 약관의 목적은 illicolove.com 및 해당 서비스의 사용에 대한 법적 프레임워크입니다.`,




          "IDTRANSLATETCU5":`이 계약은 다음 사이에 체결됩니다.`,
          "IDTRANSLATETCU6":`본 웹사이트의 설립자 Bako Familia 및 회사 소유자, 이하 «출판사» 및 본 사이트와 그 서비스에 접속하고자 하는 모든 자연인, 이하 «사용자» 라고 합니다. 일반 사용 조건은 모든 사용자가 수락해야 하며 사이트에 대한 액세스는 이러한 조건을 수락하는 것으로 간주됩니다.
본 이용 약관에서 단수형이든 복수형이든 관계없이 다음 표현이나 단어는 다음과 같은 의미를 갖는다는 데 동의합니다.`,
          "IDTRANSLATETCU7":`검색 광고: 사이트의 사용자 또는 방문자의 게시물을 지칭합니다, 우리의 양식을 통해 텍스트의 형태로, 그의 얼굴을 나타내는 하나 이상의 사진과 함께 또는 아닙니다.`,
          "IDTRANSLATETCU8":`연애 만남 서비스 : 이용자가 웹사이트에 게시된 검색 광고, 프로필, 하이퍼링크, 텍스트, 이미지, 비디오, 클릭하여 표시하는 등을 포함한 모든 내용에 액세스하는 것을 의미합니다.`,
          "IDTRANSLATETCU9":`«클릭하여 표시»: «클릭하여 표시», 이전에 검색 광고를 발행하고 연락 할 수있는 수단을 제공 한 다른 사용자에게 연락 할 수있는 이메일 주소, 전화 연락처 또는 기타 수단을 표시 할 수있는 기능을 의미합니다. 이러한 자본 정보를 얻을 수 있도록이 기능은 지불하고 있습니다. 비용은 95 CFA 프랑 또는 클릭 당 약 200 원입니다.`,
         "IDTRANSLATETCU10":` 2조: 법적 고지`,




         
         "IDTRANSLATETCU11X":`베넹 Familia & Company"은 illicolove.com의 데이트 사이트의 편집자입니다. 이 회사는 베넹베넹 법으로 설립된 개인 회사로, 2008년 5월 29일에 설립되었으며 상업 및 모바일 크레딧 레지스터 RCCM RB/COT/08/A4101에 등록되었으며 고유 세무 식별 번호(IFU)는 3200800938610입니다. 기다스 기슬레인 강바조(Gildas Ghislain GANGBAZO)에 의해 대표됩니다.`,
        "IDTRANSLATETCU11":`제3조: 서비스에 대한 접근`,
        "IDTRANSLATETCU12":` illicolove.com 사용자는 다음 서비스에 액세스할 수 있습니다.`,
        "IDTRANSLATETCU13":`개인 계정 생성`,
        "IDTRANSLATETCU14":`저희 양식을 작성하여 무료로 검색 광고를 생성 및 게시하기`,
        "IDTRANSLATETCU15":`다른 사용자가 게시한 검색 광고 보기`,
        "IDTRANSLATETCU16":`관심을 가진 프로필의 연락처를 무제한으로 원할 때 유료로 획득하기 (표시하려면 클릭)`,
        "IDTRANSLATETCU17":`퍼블리셔에게 연락하여 맞춤형 서비스 요청을 요청할 수 있습니다. `,
        "IDTRANSLATETCU18":` 인터넷에 액세스할 수 있는 모든 사용자는 어디서나 무료로 사이트에 액세스할 수 있습니다. 사용자가 액세스하기 위해 발생하는 비용(인터넷 연결, 컴퓨터 장비 등)은 게시자의 책임이 아닙니다. 위에 언급된 서비스는 사용자가 사이트의 회원인 경우에만 액세스할 수 있습니다(즉, 로그인 자격 증명을 사용하여 식별됨).
사이트 및 다양한 서비스는 게시자에 의해 중단 또는 일시 중단 될 수 있습니다, 특히 유지 보수 중에, 통지 또는 정당한 이유 없이.`,
        "IDTRANSLATETCU19":`제 4 조 : 사용자의 책임`,
        "IDTRANSLATETCU20":` 사용자는 자신의 로그인 및 비밀번호 사용과 관련된 위험에 대해 책임이 있습니다. 사용자의 암호는 비밀로 유지해야 합니다. 암호가 공개되는 경우 게시자는 모든 책임을 거부합니다. 사용자는 illicolove.com 웹사이트에 있는 정보와 컨텐츠를 사용하는 것에 대해 전적인 책임을 집니다.
직접 또는 간접적으로 손해를 초래하는 사용자의 서비스 사용은 사이트의 이익을 보상해야합니다.
이 사이트에서는 사용자가 "광고 게시" 양식을 작성하여 사이트에 검색 광고를 게시할 수 있습니다..`,





        "IDTRANSLATETCU21":`사용자는 신뢰할 수 있는 정보를 제공하고, 외설이 없는 최신 사진을 제안하며, 다른 사람 및 법률을 존중하는 검색 기준 발언을 작성하고, 게시자가 중재 또는 거절한 내용에 동의합니다. 허위 프로필을 피하기 위해 추가 정보 제공을 거부한 후 정당화 할 의무가 없습니다.
사이트에 광고를 게시함으로써 사용자는 게시자에게 익명성 또는 선택된 기밀 유지 방법에 따라 소셜 네트워크에서 또는 승인된 제3자가 직접 광고를 대표, 복제, 개조, 수정, 전파 및 배포할 수 있는 비독점적이고 자유로운 권리를 부여합니다.
게시자는 소셜 네트워크에 광고가 유포되는 경우 사용자의 익명성을 보존할 것을 약속합니다.`,
        "IDTRANSLATETCU22":`제 5 조 : 출판사의 책임`,
        "IDTRANSLATETCU23":`서버 또는 네트워크의 오작동은 게시자의 책임에 참여할 수 없습니다.
마찬가지로, 제3자의 불가항력이나 예측할 수 없고 극복할 수 없는 사실이 있는 경우에는 사이트의 책임을 관여할 수 없다.
illicolove.com 웹 사이트는 데이터의 보안 및 기밀성을 보장하기 위해 필요한 모든 수단을 구현할 것을 약속합니다.
그러나 완전한 보안을 보장하지는 않습니다.
게시자는 프로필의 신뢰성을 보장하지 않을 권리를 보유하지만, 사이트에 표시된 검색 광고는 게시자의 교정 및 검증 팀에 의해 백오피스에서 게시물의 유효성을 검증하기 전에 신뢰할 수 있고 검증된 것으로 간주됩니다.`,



        "IDTRANSLATETCU24":` 6조: 지적 재산권`,
        "IDTRANSLATETCU25":` BAKO FAMILIA & COMPANY은 www.illicolove.com 사이트의 상표, 구조 및 콘텐츠에 대한 모든 지적 재산권의 독점 소유자입니다. www.illicolove.com 사이트의 콘텐츠는 엄격히 개인용, 비공동 및 무료 사용을 위한 것이며, 무료 콘텐츠에 대한 것도 동일합니다. RSS 피드와 뉴스레터에도 동일한 원칙이 적용됩니다. 당사 제휴 프로그램 외에서의 전문적이거나 상업적인 용도로 이 콘텐츠를 사용하거나 제3자에게 판매하는 것은 당사의 명시적인 동의가 있을 때를 제외하고 금지됩니다.`,
        "IDTRANSLATETCU26":`제 7 조 : 개인 정보`,
        "IDTRANSLATETCU27":`개인 정보 보호 정책, 개인 데이터 및 쿠키를 여기에서 확인하십시오. <a href="politique.html"><i class="bi bi-arrow-right-circle"></i></a>`,
        "IDTRANSLATETCU29":` 8조: 하이퍼링크`,
        "IDTRANSLATETCU30":` 사이트에 포함된 하이퍼링크가 연결하는 도메인은 편집자 BAKO FAMILIA & COMPANY의 책임을 부담하지 않으며, 이 링크를 통제할 수 없습니다. 편집자는 서비스 제공 업체와 파트너십을 맺고 사용자에게 다른 웹사이트 및/또는 서비스와 관련된 정보를 제공할 수 있으며, 웹사이트 주소를 언급하거나 해당 웹사이트로의 하이퍼링크를 제공할 수 있습니다. 이러한 제3자 웹사이트로 연결하는 하이퍼링크는 편집자에 의해 개발되지 않았으며 그 소유권이 없습니다. 따라서 편집자는 이러한 웹사이트, 그들의 콘텐츠, 광고, 제품 또는 해당 웹사이트를 통해 이용 가능한 서비스에 대한 어떠한 책임도 부담하지 않습니다. 게다가, 편집자의 책임은 이러한 제3자가 제공하는 정보, 의견 및 권고사항에 대해서도 적용되지 않습니다`,



        "IDTRANSLATETCU31":`게시자는 이러한 파트너 서비스 또는 외부 소스에서 사용할 수 있는 콘텐츠, 상품 또는 서비스의 사용 또는 의존과 관련하여 입증되거나 주장되거나, 결과적이거나, 주장되는 모든 손해 또는 손실에 대해 책임을 지지 않습니다. 이러한 링크를 활성화하는 결정은 사용자의 전적인 책임입니다.
게시자는 이러한 사이트의 가용성에 대해 책임을지지 않으며 콘텐츠를 제어하거나 이러한 웹 사이트에 표시되는 광고, 제품 및 기타 정보를 확인할 수 없습니다. 제3자가 게시자의 명시적인 허가 없이 illicolove.com 사이트의 페이지에 대한 링크를 만들 수 있습니다.`,
        "IDTRANSLATETCU32":`제9조: 특별 경고`,
        "IDTRANSLATETCU33": `인터넷의 가상 생활에서와 같이 실제 생활에서, 당신은 정직한 사람들의 경로를 건너 수 있습니다 뿐만 아니라 악의적이고 사기꾼.
실제 생활과 인터넷의 가상 세계에서 특정 보안 태도를 채택하는 것은 개인적으로 우리에게 달려 있습니다. Bako Familia & 회사가 여러분을 초대합니다:`,
        "IDTRANSLATETCU34":` 이 사이트에서 만난 낯선 사람에게 돈을 보내지 마십시오; 그리고 어떤 상황에서도.`,
        "IDTRANSLATETCU35":`이 사이트에서 만난 연락처에게 친밀한 사진을 보내지 마십시오. `,




        "IDTRANSLATETCU36":`주변에 살면서 외국에서 일하는 척 하는 사람에게 조심하십시오.`,
        "IDTRANSLATETCU37":` 가상 상대방이 긴급한 상황에서 가족이 병든 척하고 다양한 비용을 지불하도록 도와달라고 요청하는 핑계에 결코 굴복하지 마십시오. 이와 같은 경우, 당사는 이러한 사기꾼의 프로필을 편집자에게 신고하도록 권장합니다.`,
        "IDTRANSLATETCU38":` illicolove.com 의 새로운 관계는 문제 및 재정적 지원의 원천이 될 수 없습니다. 낯선 사람이 당신을 만날 수 없이도 당신에게 사랑을 선언 할 때 큰 불신을 표시하고, 육체적 인 만남 후에도 현금으로 상당한 비용을 지출하기 전에 필요한 시간을 가지십시오.`,
        "IDTRANSLATETCU39":`항상 첫 회의를 위해 공공 장소를 선택하십시오.`,
        "IDTRANSLATETCU40":`당신이 방금 만난 알 수없는 사람의 회사에있을 때 항상 사랑하는 사람에게 당신의 위치를보고하십시오.`,
        "IDTRANSLATETCU41":`제품 또는 서비스 판매 시도, 비공개 대화 후에도 우리의 필터링 후에도 가짜로 드러나는 프로필, 위협 및 협박, 혐오 및 공격적인 언어, 미성년자 메시지, 금전적 도움 또는 음란 사진 요청을 신고하고 알려주십시오`,
        "IDTRANSLATETCU42":` 따라서 사용자는 데이트 발표 및 일반적으로 사이트의 모든 정보를 읽은 후 취해진 조치에 대해 전적으로 책임을 질 것에 동의합니다.이 데이터의 제공은 어떤 식으로든 특정 조언 또는 의사 결정 지원에 동화 될 수 없습니다. 사용자는 실생활과 인터넷 모두에서 데이트의 무작위성을 완전히 알고 있습니다.`,

        "IDTRANSLATETCU43":` 제 10 조 : 1 년 동안 활동하지 않은 경우 데이터 삭제.`,
        "IDTRANSLATETCU44":`보안상의 이유로, 1년 동안 사이트에서 인증을 받지 않은 경우, 가능한 한 빨리 로그인하도록 초대하는 이메일을 받게 되며, 그렇지 않은 경우 귀하의 프로필은 데이터베이스에서 삭제됩니다.`,




        "IDTRANSLATETCU45":`제 11 조 : 요청시 계정의 삭제.`,
        "IDTRANSLATETCU46":`사용자는 게시자에게 간단한 요청이나 계정 설정에 있는 계정 삭제 메뉴를 통해 언제든지 자신의 계정을 삭제할 수 있습니다.`,
        "IDTRANSLATETCU47":`제 12 조 : GCU를 위반하는 경우 프로필 삭제`,
        "IDTRANSLATETCU48":` GTU의 하나 이상의 조항 또는 참조에 의해 여기에 통합 된 다른 문서의 위반이 발생할 경우, 게시자는 사전 통지 없이 단독 재량에 따라 서비스의 사용 및 액세스를 종료하거나 제한할 권리를 보유합니다. 귀하의 계정 및 모든 링크된 사이트에.`,
        "IDTRANSLATETCU49":`제 13 조 : 게시자에 의해 발견 된 보안 위반의 경우 표시.`,
        "IDTRANSLATETCU50":`당사는 귀하의 개인 데이터의 우발적, 무단 또는 불법 액세스, 공개, 변경, 손실 또는 파괴의 위험에 적합한 수준의 보안을 보장하기 위해 모든 적절한 기술적 및 조직적 조치를 이행할 것을 약속합니다.`,
        "IDTRANSLATETCU51":`당사가 당사 서버 또는 당사 서비스 제공업체의 서버에 저장된 귀하의 개인 데이터에 대한 불법적인 접근을 인지하거나, 승인되지 않은 접근으로 인해 아래에 명시된 위험을 실현한 경우 당사는 다음 사항을 준수할 것을 약속합니다.`,





        "IDTRANSLATETCU52":`사고의 원인을 검토하고 자신에게 알립니다.
        (공개 보고);`,
        "IDTRANSLATETCU53":`사고로 인해 발생할 수 있는 부작용과 피해를 최소화하기 위해 합리적인 조치를 취합니다.`,
        "IDTRANSLATETCU54":`제 14 조 : 책임의 제한`,
        "IDTRANSLATETCU55":`어떠한 경우에도 보안 침해 발생 시 통지와 관련하여 상기 사항에 정의된 약속은 해당 사고 발생에 대한 과실 또는 책임을 인정하는 것으로 간주될 수 없습니다.`,
        "IDTRANSLATETCU56":`제 15 조 : 계약 기간`,
        "IDTRANSLATETCU57":`이 계약의 기간은 무기한입니다. 본 계약은 서비스 사용 초기부터 사용자에 대해 유효합니다.`,
        "IDTRANSLATETCU58":`제16조 준거법 및 관할권`,
        "IDTRANSLATETCU59":`이 GTU의 언어는 프랑스어이며 다른 언어로 번역 된 모든 버전에 우선합니다. 이 계약은 베냉 공화국의 디지털 코드에 관한 2018년 4월 20일 법률 No. 2017-20을 포함한 베냉 법률에 따라 달라집니다. 관련 법률의 선택은 거주 지역의 관련 법률에 따른 소비자로서의 권리에 영향을 미치지 않습니다.`,
        "IDTRANSLATETCU60":`귀하가 소비자인 경우 귀하와 당사는 베냉 법원의 비독점적 관할권에 복종하는 데 동의합니다. 사용자와 게시자 간에 해결되지 않은 분쟁이 발생할 경우, Cotonou의 상업 법원은 분쟁을 해결할 수 있습니다.`,
        "IDTRANSLATEPC1":`기밀 유지 정책`,
        "IDTRANSLATEPC2":`법적 고지`,




        "IDTRANSLATEPC3":`이러한 법적 고지 및 개인 정보 보호 정책은 Bako Familia & 회사가 귀하가 우리에게 전송하는 정보를 사용하고 보호하는 방식으로 귀하를 제공하고 계몽합니다. 또한, 귀하가 URL에서 액세스 할 수있는 데이트 사이트를 사용할 때 www.illicolove.com.`,
        "IDTRANSLATEPC4":`당사의 개인 정보 보호 정책은 특히 법률, 규제, 법학 또는 기술적 변화를 준수하기 위해 언제든지 수정 및 / 또는 보완 될 수 있습니다. 이러한 경우 업데이트 날짜는 이 정책에 표시됩니다. 이러한 변경 사항은 사용자가 온라인 상태가 되는 즉시 사용자에게 커밋됩니다.
따라서 변경 사항을 파악하기 위해 이러한 고지 사항 및 개인정보 보호정책을 정기적으로 참조할 것을 권유합니다.`,
        "IDTRANSLATEPC5":` 개인 정보 보호 기관(APDP)에 대한 선언`,
        "IDTRANSLATEPC6":`베냉 공화국의 디지털 코드에 관한 2018년 4월 20일 법률 No. 2017-20 (개인 데이터 및 개인 정보 보호에 관한 제 5 권)에 따라 www.illicolove.com 웹 사이트는 SA-TDP-00601 번호로 개인 데이터 보호 기관 (apdp.bj)에 선언되었습니다.`,
        "IDTRANSLATEPC7":`어쨌든 Bako Familia & Company는 웹 사이트에서 제공하는 데이트 서비스의 목적으로만 사용자에 대한 개인 정보를 수집합니다. 사용자는 특히 자신이 직접 입력할 때 사실에 대한 완전한 지식을 가지고 이 정보를 제공합니다.`,





        "IDTRANSLATEPC8":`베냉 공화국의 디지털 코드에 관한 법률 2017-20 규정에 따라 모든 사용자는 서면 및 서명 된 요청을 함으로써 자신과 관련된 개인 데이터에 액세스, 수정 및 반대 할 권리가 있습니다. 답안을 보내야 하는 주소를 명시한 문서 소지자가 서명한 신분증 사본과 함께 제공됩니다. 당사 웹사이트 사용자의 개인 정보는 «www.illicolove.com» 에 게시되거나, 전송되거나, 어떠한 매체로든 제3자에게 판매되지 않습니다.`,
        "IDTRANSLATEPC9":`데이터 개인 정보 보호`,
        "IDTRANSLATEPC10":`귀하의 개인 데이터는 기밀이며 제 3 자에게 전달되지 않습니다. 우리의 데이트 서비스의 사적인 특성은 우리가 당신의 개인 데이터 (이름, 연락처, 주소 등)를 개인의 순위나 품질에 관계없이 개인에게 전달하는 것을 허용하지 않습니다.`,
        "IDTRANSLATEPC11": `액세스 권한`,
        "IDTRANSLATEPC12":`베냉 공화국의 디지털 코드 법 조항을 적용함에 있어, 당사 웹사이트 www.illicolove.com 사용자는 개인적으로 그와 관련된 데이터에 대한 액세스, 수정, 수정 및 삭제할 권리가 있습니다. 이 권리는 다음 이메일 주소로 전자 메일을 통해 전송된 요청 시 소유자가 행사할 수 있습니다: info@illicolove.com. 수집된 개인 정보는 제3자에게 위탁되지 않습니다.`,
        "IDTRANSLATEPC13":`수정 권리`,






        "IDTRANSLATEPC14":`베냉 공화국의 디지털 코드 법에 따라, 우리의 웹 사이트 www.illicolove.com 사용자는 그와 관련된 데이터의 수정, 업데이트, 삭제, 잠금 또는 삭제를 요청할 수 있으며, 부정확하거나, 잘못되거나, 불완전하거나, 모호하거나, 쓸모 없을 수 있습니다.`,
        "IDTRANSLATEPC15":`유통 기한.`,
        "IDTRANSLATEPC16":`귀하의 개인 데이터는 Bako Familia & 회사가 데이트 서비스에 대한 귀하의 필요성에 해당하는 시간 동안만 보관합니다. 그러나 사용자 계정을 사용하지 않는 경우 이 보존 기간은 13개월을 초과하지 않습니다.`,
        "IDTRANSLATEPC17":`관할 당국에 대한 불만 사항`,
        "IDTRANSLATEPC18":` Bako Familia & Company가 웹 사이트 www.illicolove.com 방문하는 동안 수집된 귀하의 개인 데이터에 대한 의무를 존중하지 않는다고 판단되는 경우 법적 절차에 따라 불만 사항 또는 개인 정보 보호 기관 (APDP)에 대한 요청을 해결할 수 있습니다.`,
        "IDTRANSLATEPC19":`지적 재산`,
        "IDTRANSLATEPC20":`이 웹 사이트의 모든 콘텐츠, 포함, 이에 국한되지, 그래픽, 이미지, 텍스트, 비디오, 애니메이션, 사운드, 로고, GIF 및 아이콘 및 그 형식은 Bako Familia & Company의 독점적 재산입니다. 단, 다른 파트너 회사 또는 저자의 상표, 로고 또는 콘텐츠는 예외입니다.
복제, 배포, 수정, 개작, 재전송 또는 출판 이러한 다양한 요소 중 일부라도 Bako Familia & Company의 명시적인 서면 동의 없이는 엄격히 금지됩니다.`,
        "IDTRANSLATEPC21":`서비스 약관`,
        "IDTRANSLATEPC22":` www.illicolove.com 웹 사이트는 영어, 스페인어, 독일어, 포르투갈어, 러시아어, 북경어(중국어), 아랍어, 일본어, 이탈리아어 및 한국어. 사용 편의성을 위해 Chrome, Safari, Firefox와 같은 호환되는 최신 브라우저를 사용하는 것이 좋습니다.`,
        "IDTRANSLATEPC23":`정보 및 제안`,







        "IDTRANSLATEPC24":` Bako Familia & 회사는 소유의 모든 수단을 구현, 신뢰할 수있는 데이트 서비스와 웹 사이트의 영구적 인 업데이트를 보장하기 위해 www.illicolove.com. 그러나 오류나 누락이 발생할 수 있습니다. 그 결과, 모든 사용자는 다음 주소로 제안 또는 정보를 보내고 관련성이 있다고 판단되는 사이트에 대한 변경 사항을 표시할 수 있습니다. info@illicolove.com`,
        "IDTRANSLATEPC25":`쿠키.`,
        "IDTRANSLATEPC26":`기술적 성능, 통계 및 표시 목적을 위해 www.illicolove.com 웹 사이트는 쿠키를 사용할 수 있습니다. 쿠키는 사용자 터미널에 저장되는 작은 텍스트 파일로, 사용자 식별은 허용하지 않지만 웹 사이트의 터미널 탐색과 관련된 정보를 기록합니다. 이 사이트의 일부 부분은 쿠키의 수락 없이는 작동하지 않습니다. 이렇게 얻은 데이터는 이 사이트에서 후속 탐색을 용이하게 하기 위한 것입니다. 쿠키는 또한 다양한 청중 및 출석 측정에 사용됩니다.`,
        "IDTRANSLATEPC27":` 쿠키 설치를 거부하면 특정 기능에 액세스하지 못할 수 있습니다. 그러나 이 웹사이트의 모든 사용자는 아래에 명시된 바와 같이 쿠키 설치를 거부하도록 단말기를 구성할 수 있습니다.:`,
        "IDTRANSLATEPC28":` Safari 사용자: Safari 환경 설정을 선택하고 개인 정보를 클릭한 다음 "쿠키 및 웹 사이트 데이터"옵션을 선택하십시오. 항상 차단: Safari는 웹 사이트, 타사 또는 광고주가 Mac에 쿠키 및 기타 데이터를 저장하는 것을 허용하지 않습니다. 이로 인해 일부 웹 사이트가 제대로 작동하지 않을 수 있습니다.`,





        "IDTRANSLATEPC29":` Safari 사용자: Safari 환경 설정을 선택하고 개인 정보를 클릭한 다음 "쿠키 및 웹 사이트 데이터"옵션을 선택하십시오. 항상 차단: Safari는 웹 사이트, 타사 또는 광고주가 Mac에 쿠키 및 기타 데이터를 저장하는 것을 허용하지 않습니다. 이로 인해 일부 웹 사이트가 제대로 작동하지 않을 수 있습니다.`,
        "IDTRANSLATEPC30":` Google Chrome 사용자: 메뉴; 설정; 고급 설정 표시(페이지 하단에 위치). 그런 다음 콘텐츠 설정 버튼을 클릭하고 타사 사이트의 쿠키 및 데이터 차단 확인란을 선택한 다음 확인 을 클릭하여 선택 내용을 확인해야 합니다.`,
        "IDTRANSLATEPC31":` Internet Explorer 사용자: 인터넷 옵션 메뉴 개인 정보 탭을 누르고 고급 단추를 누르면 고급 개인 정보 설정 창이 나타납니다. 그런 다음 자동 쿠키 관리 무시 확인란을 선택한 다음 타사 쿠키 열에서 거부 를 선택합니다.`,
        "IDTRANSLATEPC32":` Microsoft Edge 사용자: 도구/인터넷 옵션 탭 개인 정보 보호 를 클릭하고 모든 쿠키 차단 을 선택합니다.`,




        "IDTRANSLATEPC33":`관련 관행에 따라 일부 쿠키는 본 웹 사이트의 운영에 필수적인 범위 내에서 사전 동의 수집에서 면제됩니다. 그들의 목적은 전자 통신을 촉진하는 것입니다. 여기에는 세션 ID, 인증 및 사용자 인터페이스의 사용자 지정을 위한 쿠키가 포함됩니다. 이러한 쿠키는 Bako Familia & Company에서 발행 및 관리하며, 모든 쿠키에는 본 정책이 적용됩니다.`,
        "IDTRANSLATEPC34":`하이퍼링크`,
        "IDTRANSLATEPC35":`웹 사이트 "www.illicolove.com 다른 웹 사이트 또는 인터넷에서 사용할 수있는 리소스에 대한 링크를 제공 할 수 있습니다. Bako Familia & Company는 웹 사이트에 연결된 사이트를 제어 할 수있는 수단이 없습니다. 또한, 그러한 외부 사이트 및 소스의 가용성에 대해 책임을 지거나 보장하지 않습니다. 본 사이트나 외부 소스의 콘텐츠로 인해 발생하는 어떠한 피해에 대해서도 책임을 지지 않습니다.`,




        "IDTRANSLATECONSULTE1":`아프리카`,
        "IDTRANSLATECONSULTE2":`유럽`,
        "IDTRANSLATECONSULTE3":`세계의 다른 국가`,
        "IDTRANSLATEPROFIL1": " 유효한 계정",
        "IDTRANSLATEPROFIL2": "잘못된 계정",
        "IDTRANSLATEPROFIL3":`직불 계좌`,
        "IDTRANSLATEPROFIL4":`직불 계좌`,
        "IDTRANSLATEPROFIL5":`내 플랜`,
        "IDTRANSLATEPROFIL6":`내 플랜`, 
        "IDTRANSLATEPROFIL7":`내 데이터`,
        "myNameIDX":` 계정 삭제`,
        "myBtn":` 내 계정 충전`,
        "myBtn2":` 내 계정 충전`,
        "IDTRANSLATEPROFIL9":`홈으로 이동`,
        "IDTRANSLATEPROFIL10":`연결 해제`,
        "CONSULTEZLESANNONCES":`광고 확인`,
        "IDTRANSLATEPROFIL11":`광고 수정`, 
        "IDTRANSLATEPROFIL12":`광고 게시`,
       // "IDTRANSLATEPROFIL13":`Vous souhaite la Bienvenue !`,
        "exampleModalLongTitle":`하나의 유닛은 95 FCFA 또는 200 원의 가치가 있습니다.`,
        "errorSms":`숫자를 입력해야 합니다.`,
        "SmspayId":`여기에 단위 수를 입력합니다.`,
        "IDTRANSLATEPROFIL14":`돌아가기`, 
        "payYourUnitybtn":`확인`,
        "CHOISEYOURPAIEMENT":`결제 방법을 선택합니다.`,
        "exampleModalLongTitleX":`계정을 보호합니다.`,
        "IDTRANSLATEPROFIL15":`절대 잊지 못할 답변을 부탁드립니다. 계정을 검색할 때 이 답변을 묻는 메시지가 표시됩니다. 이 답변이 없으면 계정에 액세스할 수 없습니다.`,
        "IDTRANSLATEPROFIL16":`질문 선택 `,
        "IDTRANSLATEPROFIL17":` 출생한 달이 언제입니까?`,
        "IDTRANSLATEPROFIL18":` 가장 좋아하는 색은 무엇입니까?`,
        "IDTRANSLATEPROFIL19":`당신의 일상 생활을 어떻게 상상하십니까?`,
        "IDTRANSLATEPROFIL20":`당신에게 가장 중요한 것은 무엇입니까?`,
        "IDTRANSLATEPROFIL21":`당신에게 영감을 주는 사람의 이름은 무엇입니까?`,
        "IDTRANSLATEPROFIL22":`가장 좋아하는 국가는 어디입니까?`,
        "IDTRANSLATEPROFIL23":`가장 좋아하는 선수는 무엇입니까?`,
        "IDTRANSLATEPROFIL24":`가장 좋아하는 아티스트는 무엇입니까?`,
        "IDTRANSLATEPROFIL25":`귀하의 답변은 무엇입니까? 한 마디뿐입니다. 공백 없이`,
        
        "submitFormID":`가입하다`,
        "TOCLOSEMODALID":`닫기`,   
        "IDTRANSLATEPROFIL26":`확인`, 
        "IDTRANSLATEPROFIL27":`보안 대응`,
        "payYourUnity":` 단위 수 기록 `,
        congratulationsTitle: "축하합니다!",
        accountSecureMessage: "귀하의 계정은 안전합니다. 감사합니다!",       
        accountSecureMessageX: "공백을 넣지 마십시오. 감사합니다!",


        "IDTRANSLATEPROFIL28":`당신의 청구 계좌는 비어 있습니다. 마음에 드는 광고 연락처에 액세스하려면 단위를 구입하십시오.`,
        "IDTRANSLATEPROFIL29":` 제공된 3개의 무료 유닛을 사용하여 마무리합니다. 감사합니다.`,
        "IDTRANSLATEPROFIL30W":`확실한가요?`,
        "IDTRANSLATEPROFIL30":`돌아갈 수 없어!`,
        "IDTRANSLATEPROFIL31":`예, 삭제합니다!`, 
        "IDTRANSLATEPROFIL32":`확실한가요?`,
        "IDTRANSLATEPROFIL33":` 로그아웃한 후 다시 로그인할 수 있습니다.`,
        "IDTRANSLATEPROFIL34":`네, 로그아웃하세요!`,
        "IDTRANSLATEPROFIL35":`연결 해제`,
        "IDTRANSLATEPROFIL36":`로그아웃되셨습니다.`,
        "IDTRANSLATEPROFIL37":`저희 홈페이지를 방문하시겠습니까?`,
        "IDTRANSLATEPROFIL38":`삭제`,
        "IDTRANSLATEPROFIL38X":` 성공.`,
        "IDTRANSLATEPROFIL39X":`사진이 성공적으로 업데이트되었습니다`,
        "IDTRANSLATEPROFIL40X":` 착오`,
        "IDTRANSLATEPROFIL41X":`사진을 업데이트할 수 없습니다..`,

        "IDTRANSLATEPROFIL39":` 계정이 삭제되었습니다! !`,
        "IDTRANSLATEPROFIL40":`삭제됨!`,
        "IDTRANSLATEPROFIL41":`사용자를 삭제하는 중 오류가 발생했습니다! `,
        "IDTRANSLATEPROFIL42":`실수가 있습니다. `,
        "IDTRANSLATEPROFIL42Q":`실수가 있습니다. `,
        "IDTRANSLATEPROFIL42QX":`실수가 있습니다. `,
        "IDTRANSLATEPROFIL43":`필드가 제대로 채워지지 않았습니다!`, 
        "IDTRANSLATEPROFIL44":`문제가 발생했습니다!`,
        "IDTRANSLATEPROFIL44IN":`친애하는 사용자, 이 지불 방법은 곧 사용할 수 있습니다. 지금은 Feexpay를 사용하여 거래를 완료하십시오. 감사합니다!`,
        "IDTRANSLATEPROFIL45":`데이터가 업데이트되지 않았습니다!`,
        "IDTRANSLATEPROFIL46":` 유닛이 없습니다. 단위를 구매하십시오. 프로필로 이동합니다. 감사합니다!`,
        "IDTRANSLATEPROFIL47":`확실한가요?`,
        "IDTRANSLATEPROFIL48":` 광고를 편집하면 유효성 확인을 위해 관리자에게 다시 제출됩니다. 이 프로세스는 24시간이 소요될 수 있습니다.`,




        "IDTRANSLATEPROFIL49":`돌아가기`,
        "IDTRANSLATEPROFIL50":`네! 변경.`,
        "IDTRANSLATELOGIN1":`로그인합니다.`,
        "IDTRANSLATELOGIN2":`이메일`,
        "IDTRANSLATELOGIN3":`이메일 주소`,
        "IDTRANSLATELOGIN4":`비밀번호`,
        "IDTRANSLATELOGIN5":`비밀번호`,
        "IDTRANSLATELOGIN6":`기억하기`,
        "IDTRANSLATELOGIN7":`비밀번호 분실`,
        "IDTRANSLATELOGIN8":`계정이 없습니다..`,
        "IDTRANSLATELOGIN9":`무료 등록`,
        "IDTRANSLATELOGIN10":`로그인`,
        "IDTRANSLATELOGIN11":`성공`,
        "IDTRANSLATELOGIN12":`성공적으로 연결되었습니다!`,
        "IDTRANSLATELOGIN13":`죄송합니다. `,
        "IDTRANSLATELOGIN14":`비밀번호가 올바르지 않습니다!`,
        "IDTRANSLATELOGIN15":`죄송합니다. `,
        "IDTRANSLATELOGIN16":`이 이메일에 사용자가 없습니다!`,
        "IDTRANSLATESIGNUP1":`등록`,
        "IDTRANSLATESIGNUP2":`가명`, 
        "IDTRANSLATESIGNUP3":`가명`,
        "IDTRANSLATESIGNUP4":`전체 이름`, 
        "IDTRANSLATESIGNUP5":`전체 이름`,
        "IDTRANSLATESIGNUP6":`이메일`,
        "IDTRANSLATESIGNUP7":`이메일 주소`,
        "IDTRANSLATESIGNUP8":`비밀번호`,
        "IDTRANSLATESIGNUP9":`비밀번호`,
        "IDTRANSLATESIGNUP10":`이용 약관을 읽었으며 이에 동의합니다. `,
        "IDTRANSLATESIGNUP11":`이용 약관을 읽고 동의합니다. `,
        "IDTRANSLATESIGNUP12":`이미 계정이 있습니다.`,
        "IDTRANSLATESIGNUP13":`로그인`,
        "IDTRANSLATESIGNUP14":`죄송합니다. `,




        "IDTRANSLATESIGNUP15":`계정이 이미 이 이메일 주소 또는 전화 번호와 연결되어 있습니다.`,
        "IDTRANSLATESIGNUP16":`성공`,
        "IDTRANSLATESIGNUP17":`성공적으로 등록되었습니다!`,
        "IDTRANSLATESIGNUP18":` Firebase에 이메일 주소를 보내는 동안 오류가 발생했습니다. `, 
        "IDTRANSLATESIGNUP19":`간격을 두지 마세요. 감사합니다!`,
        "IDTRANSLATESIGNUP19PHONE":`올바른 전화 번호를 입력하십시오.`,
        "IDTRANSLATESIGNUP19PHONEX":`올바른 전화 번호를 입력하십시오.`,
        "IDTRANSLATEFORGET1":`등록에 사용한 이메일 주소를 전송합니다.`,
        "IDTRANSLATEFORGET2":`이메일`,
        "IDTRANSLATEFORGET3":`이메일`,
        "IDTRANSLATEFORGET4":`보내기`,
        "IDTRANSLATEFORGET5":`확인`,
        "IDTRANSLATEFORGET6":`올바른 답을 제시하십시오!`,
        "IDTRANSLATEFORGET7":`새 비밀번호를 입력하십시오!`,
        "IDTRANSLATEFORGET8":`새 비밀번호를 입력하십시오!`, 
        "IDTRANSLATEFORGET9":`슈퍼...`,
        "IDTRANSLATEFORGET10":`암호가 업데이트되었습니다!`,
        "IDTRANSLATEFORGET11":`로그인`,
        "IDTRANSLATEFORGET12":`괜찮음`,
        "IDTRANSLATEFORGET13":`이메일을 업데이트하는 동안 오류가 발생했습니다.`,
        "IDTRANSLATEFORGET14":`이것은 잘못된 대답입니다. `,
        "IDTRANSLATEFORGET15":`사용자가 존재하지 않습니다.`, 
        "IDTRANSLATEFORM1":`내 프로필`,
        "IDTRANSLATEFORM1W":`내 프로필`,
        "IDTRANSLATEFORM2":`내 프로필`,
        "IDTRANSLATEFORM3":`내 프로필`,
        "IDTRANSLATEFORM4":`찾고 있는 프로필`,
        "IDTRANSLATEFORM4W":`찾고 있는 프로필`,
        "IDTRANSLATEFORM5":`찾고 있는 프로필`,
       // "IDTRANSLATEFORM6":`VEUILLEZ REMPLIR LE FORMULAIRE CI-DESSOUS.`,
        "IDTRANSLATEFORM7":`정확하고 통찰력 있는 정보를 제공합니다.`,
        "IDTRANSLATEFORM8":`내 거주 국가 <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM9":`내 거주 도시 <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM10":`이름 또는 가명 <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM11":`내 나이 <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM9PL":`내 거주 도시 `,





        "IDTRANSLATEFORM10X":`내 거주 도시`,
        "IDTRANSLATEFORM11X":`내 나이`,
        "IDTRANSLATEFORM8X":`내 거주 국가`,
        "IDTRANSLATEFORM9X":`내 나이`,
        "IDTRANSLATEFORM12":`숫자만 입력하십시오.<i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM13":`나의 성별 <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM14":`남자`,
        "IDTRANSLATEFORM15":`여자`,
        "IDTRANSLATEFORM16":`트랜스젠더`,
        "IDTRANSLATEFORM17":`젠더 플루이드`,
        "IDTRANSLATEFORM18":`인터섹스`,
        "IDTRANSLATEFORM19":`아젠더`,
        "IDTRANSLATEFORM20":`아로맨틱`,
        "IDTRANSLATEFORM21":`무성애자`,
        "IDTRANSLATEFORM22":`양성애자`,
        "IDTRANSLATEFORM23":`시스젠더`,
        "IDTRANSLATEFORM24":`시스노르마티비티`,
        "IDTRANSLATEFORM25":`데미로맨틱`,
        "IDTRANSLATEFORM26":`데미섹슈얼`,
        "IDTRANSLATEFORM27":`이성애로`,
        "IDTRANSLATEFORM28":`그`,
        "IDTRANSLATEFORM29":`잘못된 성별을 부여하다`,
        "IDTRANSLATEFORM30":`논바이너리`,
        "IDTRANSLATEFORM31":`팬섹슈얼`,
        "IDTRANSLATEFORM32":`폴리아모러스`,
        "IDTRANSLATEFORM33":`퀴어`,
        "IDTRANSLATEFORM34":`트랜스젠더`,
        "IDTRANSLATEFORM35":`전환`,
       // "IDTRANSLATEFORM36":`VEUILLEZ REMPLIR LE FORMULAIRE CI-DESSOUS.`,
        "IDTRANSLATEFORM37":`정확하고 통찰력 있는 정보를 제공합니다.`,
        "IDTRANSLATEFORM38":`나의 결혼 상황 <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM39":`싱글`,
        "IDTRANSLATEFORM40":`연인`,
        "IDTRANSLATEFORM41":`이혼한/이혼한 여성`,
        "IDTRANSLATEFORM42":`남편이 돌아가신/아내가 돌아가신`,
        "IDTRANSLATEFORM43":`내 국적 <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM44":`전화 번호 <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM45":`국가 접두사 없이 전화 번호만 입력하십시오. <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM46":`내 직업 또는 직업 <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM47":`내 작업`,
       // "IDTRANSLATEFORM48":`VEUILLEZ REMPLIR LE FORMULAIRE CI-DESSOUS.`,
        "IDTRANSLATEFORM49":`정확하고 통찰력 있는 정보를 제공합니다.`,
        "IDTRANSLATEFORM50":`나는 만남을 원해요 <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM51":`친절한, 외로움을 깰 회사`,
        "IDTRANSLATEFORM52":`내구성`,
        "IDTRANSLATEFORM53":`결혼으로 이어질 수 있습니다. `,
        "IDTRANSLATEFORM54":`식별`,
        "IDTRANSLATEFORM55":`사진 1 <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM56":`사진 2 <i class="fa fa-star required"></i>`,
       // "IDTRANSLATEFORM57":`VEUILLEZ REMPLIR LE FORMULAIRE CI-DESSOUS.`,
        "IDTRANSLATEFORM58":`정확하고 통찰력 있는 정보를 제공합니다.`,
        "IDTRANSLATEFORM59":`그의 성별 <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM60":`남자`,
        "IDTRANSLATEFORM61":`여자`,
        "IDTRANSLATEFORM62":`트랜스젠더`,
        "IDTRANSLATEFORM63":`젠더 플루이드`,
        "IDTRANSLATEFORM64":`인터섹스`,
        "IDTRANSLATEFORM65":`아젠더`,
        "IDTRANSLATEFORM66":`아로맨틱`,
        "IDTRANSLATEFORM67":`무성애자`,
        "IDTRANSLATEFORM68":`양성애자`,




        "IDTRANSLATEFORM69":`시스젠더`,
        "IDTRANSLATEFORM70":`시스노르마티비티`,
        "IDTRANSLATEFORM71":`데미로맨틱`,
        "IDTRANSLATEFORM72":`데미섹슈얼`,
        "IDTRANSLATEFORM73":`이성애로`,
        "IDTRANSLATEFORM74":`그`,
        "IDTRANSLATEFORM75":`잘못된 성별을 부여하다`,
        "IDTRANSLATEFORM76":`논바이너리`,
        "IDTRANSLATEFORM77":`팬섹슈얼`,
        "IDTRANSLATEFORM78":`폴리아모러스`,
        "IDTRANSLATEFORM79":`퀴어`,
        "IDTRANSLATEFORM80":`트랜스젠더`,
        "IDTRANSLATEFORM81":`전환`,
        "IDTRANSLATEFORM82":`그 사람의 나이대 <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM83":`그의 결혼 상태 <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM84":`싱글`,
        "IDTRANSLATEFORM85":` "연인`,
        "IDTRANSLATEFORM86":`이혼한/이혼한 여성`,
        "IDTRANSLATEFORM87":`남편이 돌아가신/아내가 돌아가신`,
        "IDTRANSLATEFORM88":`거주 국가 <i class="fa fa-star required" ></i>`,
        "IDTRANSLATEFORM89":`여러 국가를 선택할 수 있습니다.. <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM90":`그의 나라`,
        "IDTRANSLATEFORM91":`거주 국가`,
      //  "IDTRANSLATEFORM92":`VEUILLEZ REMPLIR LE FORMULAIRE CI-DESSOUS.`,
        "IDTRANSLATEFORM93":`정확하고 통찰력 있는 정보 제공.`,
        "IDTRANSLATEFORM94":`원하는 물리적 측면을 설명하십시오..`,
        "IDTRANSLATEFORM95":`거주 도시<i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM96":`그의 도시`,
        "IDTRANSLATEFORM97":`그의 직업 또는 직업<i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM98":`그의 작품`,
        "IDTRANSLATEFORM99":`기타 세부 정보.`,
        "IDTRANSLATEFORM100":`기타 세부 정보`,
        "IDTRANSLATEFORM10w":` 신체적 측면`,
        "IDTRANSLATEFORM101":`팔로잉`,
        "IDTRANSLATEFORM102":`이전`,
        "IDTRANSLATEFORM103":`보내기`,




        "IDTRANSLATEFORM104":`<p >본 양식에서 수집된 개인정보는으로<strong style="color: #000080;">BAKO FAMILIA & COMPANY</strong> 귀하가 요청한 데이트 서비스의 원활한 운영을 보장하기 위해 독점적으로 취급됩니다. 수집된 개인 데이터는 귀하의 동의 없이 누구에게도 전달되지 않습니다.
개인 정보 보호에 관한 베냉 공화국의 디지털 코드에 관한 법률 2017-20의 규정을 적용함에 있어 수집된 데이터의 처리는 APDP 전에 선언되었다.</em> </p>
        <hr>
        <p class="mb-0">앞서 언급한 법률에 따라 귀하는 액세스, 반대, 정정 및 삭제에 대한 권리를 다음 사이트에서 행사할 수 있습니다. <strong style="color: #000080;">BAKO FAMILIA & COMPANY</strong>.
        </em></p>`,
        "IDTRANSLATEFORM105":`이미지가 너무 작습니다. 300x300 픽셀 이상의 이미지를 선택하십시오.`,
        "IDTRANSLATEFORM106":` API« REST Countries »를 호출하는 동안 오류가 발생했습니다. `,
        "IDTRANSLATEFORM107":`접두사 없이 숫자를 넣기만 하면 됩니다. `,
        "IDTRANSLATEFORM108":`국가를 선택하십시오.`,
        "IDTRANSLATEFORM109":`성공`,
        "IDTRANSLATEFORM110":`귀하의 양식은 24 시간 이내에 확인 될 수 있습니다. <i class="fa fa-heart"></i>.`,
        "IDTRANSLATEFORM111":`죄송합니다. `,
        "IDTRANSLATEFORM112":`모든 필드가 채워지지 않았습니다.`,
        "IDTRANSLATEUSERD1":`저에게 연락하세요  <svg xmlns="http://www.w3.org/2000/svg" width="10.444" height="9.7"><defs><clipPath id="a"><path fill="none" d="M0 0h10.444v9.7H0z"/></clipPath></defs><g fill="none" stroke="#2a46cc" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.438" clip-path="url(#a)"><path d="M.719 4.85h8.709M5.594 8.683L9.427 4.85M5.594 1.017L9.427 4.85"/></g></svg>`,





        "IDTRANSLATEUSERD2":`저에게 연락하세요`,
        "IDTRANSLATEUSERD3":`<i class="bi bi-alexa" style="font-size: 3vh !important;"></i> 내 프로필 `,
        "IDTRANSLATEUSERD4":`답변`,
        "IDTRANSLATEUSERD5":`내 거주 도시 :`,
        "IDTRANSLATEUSERD6":`내 이름 또는 가명:`,
        "IDTRANSLATEUSERD7":`내 연령대 :`,
        "IDTRANSLATEUSERD8":`나의 성별:`,
        "IDTRANSLATEUSERD9":`나의 결혼 상황:`,
        "IDTRANSLATEUSERD10":`내 국적 :`,
        "IDTRANSLATEUSERD11":`내 직업 또는 직업:`,
        "IDTRANSLATEUSERD12":`회의를 원합니다. :`,
        "IDTRANSLATEUSERD13":`내 신체적 선호 사항:`,
        "IDTRANSLATEUSERD14":`기타 세부 정보 :`,
        "IDTRANSLATEUSERD15":`<i class="bi bi-alexa" style="font-size: 3vh !important;"></i> 내가 찾는 프로필`,
        "IDTRANSLATEUSERD16":`답변`,
        "IDTRANSLATEUSERD17":`그의 성별:`,
        "IDTRANSLATEUSERD18":`그의 나이 :`,
        "IDTRANSLATEUSERD19":`그의 결혼 상태 :`,
        "IDTRANSLATEUSERD20":`거주 국가 :`,
        "IDTRANSLATEUSERD21":`그의 거주 도시 :`,
        "IDTRANSLATEUSERD22":`직업 또는 직업 :`,
        "TIDTRANSLATEUSERD23":`온라인`,

        "IDTRANSLATEUSERD24":`<i class="fas fa-database" style="font-size: 5vh !important; color: #FFB6C1;"></i> 데이터 없음.`,
        "IDTRANSLATEUSERD25":`데이터 없음.`,
        "IDTRANSLATEUSERD26":`실수가 있습니다..`,
        "IDTRANSLATEUSERD27":`계좌에서 결제되었습니다. `,
        "IDTRANSLATEUSERD28":`데이터가 업데이트되지 않습니다.`,
        "IDTRANSLATEUSERD29":`검색 양식이 게시된 후에만 다른 사용자에게 연락할 수 있습니다.`,
        "IDTRANSLATEUSERD30":`광고를 게시하시겠습니까?`,
        "IDTRANSLATEUSERD31":`귀하의 잔여 포인트가 부족합니다. 다른 사용자에게 연락할 수 없습니다’.`,
        "IDTRANSLATEUSERD32":`단위를 구매하시겠습니까?`,
        "IDTRANSLATEUSERD33":`좋아`,
        "IDTRANSLATEUSERD34":`그의 프로필을 방문하십시오!`,
        "IDTRANSLATEUSERD35":`<i class="bi bi-eye" style="color: white;"></i> 클릭하여 표시합니다.`,
        "texteIDTRANSLATEUSERD24YX": "온라인",
        "myNameIDwallet":"커미션을 철회하십시오.",
        "MYEWALLETID":`<i class="fa fa-align-left"></i>내 지갑`,
        "MYEWALLETID1":"총 잔액", 
        "comeBackId":"돌아가기",
        "idTogetwallet":"당신의 상금을 철회",
        "HISTORYISMY":"기록",
        "IDTRANSLATEWALLETU":"진행 중",
        "IDTRANSLATEWALLETX":"지불 완료",
        "IDTRANSLATEWALLET":"죄송합니다. !",
        "IDTRANSLATEWALLETM":"전송에 실패했습니다. 나중에 다시 시도하십시오.", 
        "IDTRANSLATEWALLET1":"축하합니다!",
        "IDTRANSLATEWALLET2":"전송에 성공했습니다!",
        "TITLEWALLETID": "전자 지갑",
        "IDTRANSLATEFOEMXX": "문자만 입력하십시오. 이 필드에는 숫자가 허용되지 않습니다.",
        "linkInput": "제휴 링크를 여기에 복사하십시오. ",
        "TERMINATOR" :" 끝",
        "PHOTOID" :" 사진",
        "TERMINATORW" :" 끝났습니다. ",
        "PHOTOIDW" :" 사진",
        "STEPS14":" 1-4단계",
        "STEPS23":" 2-4단계",
        "STEPS34":" 3-4단계",
        "STEPS44":" 4-4단계",
        "IDTRANSLATEPROFIL29FILE" :" 이 이미지를 보내시겠습니까?", 
        "IDTRANSLATEPROFIL29FILE1" :" 돌아가기",
        "IDTRANSLATEPROFIL29FILE2" :" 예",
        "IDTRANSLATESIGNUP19OPTIONSERROR" :" Geolocation을 요청하는 동안 오류가 발생했습니다.",
        "IDTRANSLATESIGNUP19OPTIONS" :" 귀하의 지리적 위치가 승인될 때까지 당사의 서비스를 사용할 수 없음을 알려드리게 되어 유감입니다.",
        "IDTRANSLATESIALERT1" :" 정보",
        "IDTRANSLATESIALERT2" :" 친애하는 방문자, 당신의 안전을 보장 하 고 가짜 광고에 대 한 싸움, illicolove.com 거주 국가를 찾습니다.",
        "IDTRANSLATESIALERT3" :" 예, 동의합니다. !",
        "IDTRANSLATESIALERT4" :" 거부됨",
        "CONTRACTID1":`제휴 계약`,
        "CONTRACTID2":`      사이: illicolove.com , "데이트 사이트",
그리고: 나, "계열사".`,
        "CONTRACTID3":`개체`,
        "CONTRACTID4":`이 제휴 계약의 목적은 데이트 사이트의 제휴 프로그램과 관련하여 illicolove.com 및 제휴사 간의 관계를 관리하는 것입니다. <a href="https://illicolove.com">illicolove.com</a>`,
        "CONTRACTID5":`1. 제휴 프로그램`,
        "CONTRACTID6":` illicolove.com 데이트 서비스를 홍보하기 위해 온라인 제휴 프로그램을 운영합니다.`,
        "CONTRACTID7":`2. 제휴사의 역할`,
        "CONTRACTID8":`제휴사는 illicolove.com 에서 제공하는 고유한 제휴 링크와 사이트에서 승인한 기타 프로모션 수단을 사용하여 데이트 사이트의 서비스를 홍보할 것을 약속합니다.`,
        "CONTRACTID9":`3. 계열사의 보수`,
        "CONTRACTID10":`3.1. 제휴사는 사이트에 등록하는 각 신규 회원에 대해 100 CFA 프랑의 수수료를 받게됩니다. <a href="https://illicolove.com">illicolove.com</a> 제휴사의 고유한 제휴 링크를 통해 연애 관련 광고를 게시합니다.`,
        "CONTRACTID11":`3.2. 또한, 제휴사는 제휴 링크를 통해 추천 된 회원이 구매할 때마다 10 %의 수수료를 받게됩니다.`,
        "CONTRACTID11X":`3.3 100F CFA 수수료는 신규 회원이 100F CFA 이상의 유닛을 구매할 때만 징수되며, 이는 커미션 사기를 방지하기 위한 것입니다.`,
        "CONTRACTID12":`4. 수수료 지불`,
        "CONTRACTID13":` illicolove.com 는 제휴사의 선택에 따라 모바일 송금이나 은행 송금으로 요청할 경우 정기적으로 분기별로 제휴사의 수수료를 지불합니다. 제휴사는 반품 비용을 부담해야 합니다.`,
        "CONTRACTID14":`5. 계약 기간`,
        "CONTRACTID15":`본 제휴 계약은 제휴사가 수락한 날부터 발효되며, 30일 간의 서면 통지를 거쳐 당사자 일방이 해지할 때까지 효력을 유지합니다.`,
        "CONTRACTID16":`6. 종료`,
        "CONTRACTID17":` illicolove.com 또는 제휴사는 상대방에게 서면 통지를 제공함으로써 언제든지 본 계약을 해지할 수 있습니다. 미지급 수수료는 본 계약의 조건에 따라 지급됩니다.`,
        "CONTRACTID18":`7. 준거법`,
        "CONTRACTID19":`본 계약은 베냉 법률의 적용을 받으며, 본 계약에서 발생하는 모든 분쟁은 우호적으로 해결되지 않으면 Cotonou 상업 법원의 전속 관할권에 따릅니다.`,
        "ANNONCEAFFILIATEID" : `        <div class="box--list__items">
        <div class="box--list__item" style="  padding-top: 0 !important; margin-top: 0 !important;">
            <h2 class="box--list__title box--list__titlex" >사람들이 illicolove.com 에서 사랑을 찾을 수 있도록 도움으로써 돈을 벌어!</h2>
            <p class="box--list__설명">수익성있는 제휴 기회를 찾고 계십니까? 우리의 독특한 제휴 프로그램에 가입하고 다른 사람들이 자신의 소울 메이트를 찾을 수 있도록 도움으로써 소득을 증가. 작동 방법은 다음과 같습니다. <br>
              ✅ 가입 및 제휴 링크를 통해 우리의 사이트에 사랑 연구 광고를 게시하는 각 새로운 회원에 대해 100 CFA 프랑 받으십시오. <br>

              ✅ 그리고 제휴사가 추천한 회원이 실시한 각 구매에 대해 10%의 수수료를 받습니다. 그들이 지출하는 금액이 클수록 여러분의 수익도 증가합니다!</p>
        </div>
        
        <div class="box--list__item">
            <h2 class="box--list__title box--list__titlex"> 왜 우리의 제휴 프로그램을 선택?</h2>
            <div class="box--list__설명">
              ✅ 누군가가 가입하고 사랑 찾기 광고를 게시할 때마다 돈을 벌 수 있습니다 <br>
              ✅ 계열사가 우리 사이트에서 구매할 때마다 지속적인 커미션을 받으십시오.<br>
              ✅ 사랑을 찾는 대상 고객층을 타겟팅하세요. 흥미로운 분야이며 지속적으로 성장하고 있는 니치입니다 <br>
              
            </div>
        </div>
        
        <div class="box--list__item">
            <h2 class="box--list__title"> 프로그램 가입</h2>
            <div class="box--list__설명">✅  오늘 우리의 제휴 프로그램에 가입하고 사람들이 illicolove.com 사랑을 찾을 수 있도록 도움으로써 돈을 버는 시작! 💑
              
             </div>
        </div>
        <div class="box--list__item">
          <h2 class="box--list__title"> 가입.</h2>
          <div class="box--list__설명"> 
            ✅ 지금 등록하고 수입을 늘리십시오. : <a href="./v/login/signup.html">가입</a>
              
            궁금한 사항은 info@illicolove.com 으로 문의하십시오. </div>
      </div>
    </div>`,
          "IDTRANSLATE6WX":`언어 <span> <i class="bi bi-globe2"></i></span> <i class="bi bi-chevron-down"></i> `,
        }
      },
      it:{
        translation : {
          "IDTRANSLATE1": " Benvenuto ",
         // "IDTRANSLATE2": "À propos",
          "IDTRANSLATE3": ` Come funziona?`,
          "IDTRANSLATE4": ` Termini `,
          "IDTRANSLATE5":" Condizioni Generali di Utilizzo ",
          "IDTRANSLATE6":" Politica sulla Privacy ",
          "IDTRANSLATE6X":" Il Nostro Sistema di Affiliazione ",
          "IDTRANSLATE7":" Contatto ",
          "IDTRANSLATE8":" Iscriversi ",
          "IDTRANSLATE9":" Connettersi ",
          "IDTRANSLATECONTACT1":" Contatto ",
          "IDTRANSLATECONTACT2":" Contattaci ",
          "IDTRANSLATECONTACT3":" Indirizzo ",
          "IDTRANSLATECONTACT4":' Telefono ',
          "IDTRANSLATECONTACT5":"E-mail", 
          "IDTRANSLATECONTACT6":" Reti Sociali ",
          "IDTRANSLATETITLE":" Annunci ",
          "IDTRANSLATETITLEFORM":" Modulo ",
          "IDTRANSLATE1INF1":`Il tuo indirizzo e-mail viene raccolto ed elaborato da BAKO FAMILIA & COMPANY per informarti delle nuove funzionalità del sito illicolove e dei suoi aggiornamenti.
          In applicazione della legge 2017-20 sul codice digitale nella Repubblica del Benin, sulla protezione dei dati personali, è possibile annullare l'iscrizione o esercitare i diritti di accesso, di opposizione, rettifica e cancellazione inviando un'e-mail a info@illicolove.com`,
          "IDTRANSLATE10":"illicolove,",
          "IDTRANSLATE11":` La tua piattaforma di incontri, per combattere il celibato e la solitudine.`,
          "IDTRANSLATE12":` Consideriamo la solitudine involontaria un problema umanitario e ci impegniamo ad offrire una soluzione alle persone che ne soffrono.`,
          "IDTRANSLATE13":` Iscriversi Gratuitamente `,
          "IDTRANSLATE13KLM":` Vai al tuo profilo `,
         // "IDTRANSLATE14":`À propos de nous`,
         // "IDTRANSLATE15":`Votre plateforme de rencontres en ligne illicolove.com vous est proposée par les Établissements BAKO FAMILIA & COMPANY, une entreprise individuelle(EI) de droit béninois immatriculée au Registre du Commerce et du Crédit Mobilier RCCM RB/COT/08/A4101 ; à l’Identifiant Fiscal Unique (IFU) 3200800938610.`,

         // "IDTRANSLATE16":`Elle a pour activités, le Wedding planning (accompagnement dans l’organisation de mariage), le Tourisme-Loisirs, l’organisation de foires et Salons. Elle a été créée en Mai 2008 à Cotonou. `,
         // "IDTRANSLATE17":`Plus de détails`,
          "IDTRANSLATE18":` i nostri obiettivi `,
          "IDTRANSLATE19":` Articolo 16`,
          "IDTRANSLATE20":` il nostro obiettivo `,

          "IDTRANSLATE17USER":` Selezione di regione `,
          "IDTRANSLATE18USER":` Dettagli dell'utente `,
          "IDTRANSLATE19USER":` Profilo `,

          "IDTRANSLATE21":` La messa in servizio di questa piattaforma di incontri online risponde alle nostre iniziative di lotta contro il celibato e la solitudine.
          Essa concretizza la nostra azione nella linea definita dalla Dichiarazione Universale dei Diritti dell'Uomo nel suo articolo 16, che ricorda il diritto al matrimonio per la donna e per l'uomo, e l'importanza della famiglia che deve essere protetta dalla società e dallo Stato.`,
         "IDTRANSLATE22":` i nostri valori:`,
         "IDTRANSLATE23":` affidabilità,`,
         "IDTRANSLATE24":` cortesia e `,
         "IDTRANSLATE25":` discrezione.`, 
         "IDTRANSLATE26":` A partire dall'età nubile, l'uomo e la donna, senza alcuna restrizione di razza, nazionalità o religione, hanno il diritto di sposarsi e di fondare una famiglia. Essi hanno pari diritti riguardo al matrimonio, durante il matrimonio e al momento della sua dissoluzione. `,
         "IDTRANSLATE27":` Il matrimonio può essere concluso solo con il libero e pieno consenso dei futuri coniugi. `,
         "IDTRANSLATE28":` La famiglia è l'elemento naturale e fondamentale della società e ha diritto alla protezione della società e dello Stato.  
La solitudine, il celibato, l'isolamento sociale costituiscono un imperativo umanitario che interpella i poteri pubblici, le associazioni e le imprese del settore.  La solitudine cronica e involontaria costituisce un dramma individuale che vive chi ne soffre, la maggior parte del tempo, in silenzio. illicolove.com è nata in questo contesto, con la volontà di proporre in modo diverso e semplice servizi di incontri online; con una caccia comprovata ai profili fittizi. 
Benvenuto!`,
         "IDTRANSLATE29":` Ci rivolgiamo solo agli individui:`,
         "IDTRANSLATE30":` Giovani di almeno 18 anni.`,
         "IDTRANSLATE31":` I single involontari di età avanzata, i disperati e i delusi..`,
         "IDTRANSLATE32":` I divorziati.`,
         "IDTRANSLATE33":` I vedovi/ Le vedove.`,
         "IDTRANSLATE34":` Nostri Utenti `,
         "IDTRANSLATE35":` Tutti i nostri utenti `,
         "IDTRANSLATE36":` in Africa `,
         "IDTRANSLATE37":` in Europa `,
         "IDTRANSLATE38":` Altri Paesi del Mondo `,
        // "IDTRANSLATE39":`Notre équipe`,
        // "IDTRANSLATE40":`Directrice`,
        // "IDTRANSLATE41":`Relectrice, et Responsable marketing`,
        // "IDTRANSLATE42":`Développeur et SEO`,


         "IDTRANSLATEX1":` Le fasi di utilizzo `,
         "IDTRANSLATEX2":` Ecco come funziona illicolove.`,
         "IDTRANSLATEX3":` Iscrizione `,
         "IDTRANSLATEX4":` Al momento dell'iscrizione, illicolove vi offre tre (03) unità del valore di 295 franchi CFA o 0.43 euro.
         Una unità costa 95 franchi CFA o 0.144 euro.`,
         "IDTRANSLATEX5":` Connessione `,
         "IDTRANSLATEX6":` L'accesso a illicolove consente di accedere a tutte le funzionalità e ai servizi riservati agli utenti registrati.`,
         "IDTRANSLATEX7":` Pubblicare un Annuncio `,
         "IDTRANSLATEX8":` Cliccando sul pulsante «Pubblica il tuo annuncio», puoi scegliere di pubblicare sia sulla pagina «Africa», sia sulla pagina «Europa»; o sulla pagina «Altri paesi del mondo»; secondo il tuo luogo di residenza. Basta compilare il modulo di ricerca che verrà visualizzato.`,




         "toopenPUAID":` più...`,
         "openPUA":`Ti invitiamo a pubblicare il tuo annuncio sulla pagina della tua area geografica di residenza, tuttavia, puoi visualizzare e contattare qualsiasi profilo di un annuncio di ricerca al di fuori della tua area geografica abituale.
           Ad esempio, se vivi in Francia, devi pubblicare il tuo annuncio sulla pagina
           «Europa» e può consultare e prendere contatto con gli annunci nelle pagine
           «Africa», «Europa» e «Altri paesi del mondo»
           Quando finisci di compilare e inviare il tuo modulo di ricerca, il tuo
           annuncio apparirà entro 24 ore al massimo, se giudichiamo il tuo profilo
           affidabile dopo la revisione ed eventuali verifiche. Il nostro team di revisione e convalida può scriverti privatamente per rassicurarti sull'affidabilità del tuo profilo. Potrebbero essere richiesti dettagli sulla tua identità, una chiamata vocale o video. In quest'ottica, la convalida e la comparsa del tuo annuncio su illicolove potrebbero superare le 24 ore. La velocità per la pubblicazione del tuo annuncio dipenderà da te. Escludiamo sistematicamente qualsiasi annuncio fantasioso, irrealistico e soprattutto falsi profili, senza preavviso.
           Se hai difficoltà a usufruire dei servizi di illicolove.com, scrivici a info@illicolove.com`,
          "IDTRANSLATEX9":` Verifica del tuo account utente `,
          "IDTRANSLATEX10":` Compila il modulo e clicca su «INVIO». Verificheremo e convalideremo il tuo modulo entro 24 ore. Riceverai un messaggio di conferma. Se sono necessarie ulteriori verifiche, ti informeremo via e-mail.`,
          "IDTRANSLATEX11":` Visualizzare un annuncio `,
          "IDTRANSLATEX12":` Il pulsante «Visualizza annunci» porta ad altri tre pulsanti:  Africa  (annunci dall'Africa), Europa (annunci dall'Europa) e Altri paesi del mondo  (annunci fuori Africa ed Europa). Incontrare l'uomo o la donna della vostra vita su illicolove vi costerà forse solo 95 franchi CFA o 0.14 Euro.
          È quello che ti costa ogni unità che ti prelevano, quando clicchi sulla casella «Per contattarmi» di un profilo che attira particolarmente la tua attenzione.`,
          "IDTRANSLATEX13":` Acquisto di unità `,
          "IDTRANSLATEX14":` Puoi ricaricare il tuo account (Il Mio Piano) a tuo piacimento, per continuare le tue ricerche di incontri tra gli annunci pubblicati. Il conto di debito personale che ottieni non appena ti registri ti consente di ricaricarlo in base al metodo di pagamento che preferisci. LA VALUTA di fatturazione su illicolove è il franco CFA (XOF).  1 € = 655,957 XOF.`,
          "IDTRANSLATEX15":` Domande frequenti.`,
          "IDTRANSLATEX16":` Posso avere un buon incontro su illicolove?`,
          "IDTRANSLATEX17":` Sì, a condizione di completare il modulo di ricerca fornendo informazioni reali su di te.`,




          "IDTRANSLATEX18":` Il tuo sito di incontri è a pagamento?`,
          "IDTRANSLATEX19":` Sì, solo per visualizzare l'indirizzo di contatto di un profilo che ha particolarmente interessato.`,
          "IDTRANSLATEX20":` Quanto costa consultare l'indirizzo di contatto di un profilo che mi attrae e mi interessa?`,
          "IDTRANSLATEX21":`95 FCFA o 0.14 Euro.`,
          "IDTRANSLATEX22":` Il tuo sito di incontri è gratuito?`,
          "IDTRANSLATEX23":` Sì, la registrazione e la pubblicazione del tuo annuncio di ricerca amorosa sono gratuite su illicolove.`,
          "IDTRANSLATEX24":` Come pubblicare un annuncio di incontri?`,
          "IDTRANSLATEX25":` Dopo la registrazione su illicolove, clicca sul pulsante o sulla scheda «PUBBLICA UN ANNUNCIO». Quindi, nella pagina che verrà visualizzata, scegli il nome del continente che corrisponde al tuo continente di residenza abituale. Infine compilare correttamente il modulo di ricerca che verrà visualizzato e quindi inviare.`,
          "IDTRANSLATEX26":` Posso risiedere in Africa e contattare qualcuno che vive fuori dall'Africa?`,
          "IDTRANSLATEX27":` Sì!`,
          "IDTRANSLATEX28":` Posso risiedere in Europa e contattare qualcuno che vive fuori dall'Europa?`,
          "IDTRANSLATEX29":` Sì!`,
          "IDTRANSLATEX30":` Posso risiedere in Europa e pubblicare il mio annuncio di ricerca sulle pagine «Africa» e «Altri paesi del mondo»?`,
          "IDTRANSLATEX31":` No! Pubblica il tuo annuncio di ricerca solo nella pagina corrispondente al tuo continente di residenza.`,
          "IDTRANSLATEX32":` Posso ricaricare il mio conto illimitato con mobile money?`,
          "IDTRANSLATEX33":` Sì!`,
          "IDTRANSLATEX34":` Qual è il prezzo di abbonamento sul tuo sito?`,
          "IDTRANSLATEX35":` Non c'è abbonamento su illicolove.`,
          "IDTRANSLATEX36":` Come posso ricaricare il mio conto Credito-Debito?`,
          "IDTRANSLATEX37":` Vi offriamo un sistema di pagamento sicuro attraverso diversi aggregatori di pagamento. A seconda della vostra convenienza, ricaricate il vostro conto con carta di credito o mobile money.  Sotto il tuo profilo sulla tua dashboard personale, fai clic sul pulsante verde  «RICARICA IL MIO ACCOUNT» e segui i passaggi.`,
          "IDTRANSLATEX38":` Devo pagare per pubblicare il mio annuncio di ricerca?`,
          "IDTRANSLATEX39":` No! La pubblicazione di un annuncio di ricerca è gratuita.`,
          "IDTRANSLATEX40":` Devo pagare per visualizzare gli annunci?`,
          "IDTRANSLATEX41":` No! La consultazione degli annunci è gratuita, è l'ottenimento dell'indirizzo di contatto contenuto in un annuncio che è a pagamento.`,
          "IDTRANSLATEX42":` Come funziona il sistema di acquisto delle unità?`,
          "IDTRANSLATEX43":` Al momento della registrazione, ricevi automaticamente e gratuitamente tre (03) unità di credito che ti consentono di visualizzare tre (03) indirizzi di contatti negli annunci di tua scelta. Ogni unità ha un valore di 95 FCFA o 0.14 Euro.
          Quando le tue unità si esauriscono, puoi acquistarle secondo la tua convenienza e capacità. La quantità di unità che puoi acquistare varia da una unità al numero di unità che desideri.`,
          "IDTRANSLATEX44":` Le unità che acquisto hanno una data di scadenza?`,
          "IDTRANSLATEX45":` No! Le tue unità sono a validità illimitata.`,
          "IDTRANSLATEX46":` Devo abbonarmi per usufruire del vostro servizio di incontri?`,




          "IDTRANSLATEX47":` Su illicolove, non ci sono abbonamenti per usufruire dei nostri servizi al di fuori dell'abbonamento alla newsletter che è facoltativo.`,
          "IDTRANSLATEX48":` Qual è la politica sulla privacy su illicolove.com?`,
          "IDTRANSLATEX49":`La privacy dei tuoi dati è molto importante per noi. I tuoi dati personali sono sicuri e non vengono condivisi con terze parti senza il tuo consenso. Puoi consultare la nostra politica sulla privacy per maggiori dettagli`,
          "IDTRANSLATEX50":` qui `,
          "IDTRANSLATEX51":` Dove posso trovare l'email di convalida del mio account?`,
          "IDTRANSLATEX52":` È possibile che l'e-mail di verifica del tuo account si trovi nella cartella spam. I filtri di sicurezza dei provider di posta elettronica possono talvolta indirizzare le e-mail di convalida a queste cartelle per la tua protezione. Controlla la tua cartella spam e assicurati di contrassegnare l'e-mail come "non spam" se la trovi lì. Se ancora non riesci a trovare l'e-mail di convalida, contatta il nostro servizio di assistenza per ulteriore assistenza.`,
          "IDTRANSLATETCU1":` Condizioni Generali di Utilizzo `,
          "IDTRANSLATETCU2":` Benvenuto su illicolove.com, una piattaforma di incontri online offerta da BAKO FAMILIA & COMPANY. Utilizzando il nostro sito, accetti i termini e le condizioni descritte di seguito.`,
          "IDTRANSLATETCU3":` ARTICOLO 1: Oggetto `,
          "IDTRANSLATETCU4":` Le presenti «Condizioni Generali di Utilizzo» hanno per oggetto l'inquadramento giuridico dell'utilizzo del sito illicolove.com e dei suoi servizi.`,




          "IDTRANSLATETCU5":` Tale contratto è concluso tra:`,
          "IDTRANSLATETCU6":` L'Ente BAKO FAMILIA & COMPANY proprietario del sito web, qui di seguito denominato «l'Editore», ET Ogni persona fisica che desidera accedere al sito e ai suoi servizi, qui di seguito denominato «l'Utente». Le condizioni generali di utilizzo devono essere accettate da qualsiasi Utente, e il suo accesso al sito costituisce accettazione di queste condizioni.
          Nelle presenti Condizioni Generali d'Uso, si conviene che le seguenti espressioni o parole, utilizzate singolarmente o al plurale, avranno il seguente significato:`,
          "IDTRANSLATETCU7":` Annuncio di ricerca: indica una pubblicazione di un utente o visitatore del sito, sotto forma di testo tramite il nostro modulo, accompagnata o no da una o più fotografie che rappresentano il suo volto.`,
          "IDTRANSLATETCU8":` Servizi di incontri amorosi  : si riferisce all'accesso da parte dell'Utente a tutti gli annunci di ricerca pubblicati sul Sito Internet, tra gli altri, profili, collegamenti ipertestuali, testi, immagini, video, contatti o indirizzi attraverso il «click to show».`,
          "IDTRANSLATETCU9":`«Click to show»: «Fare clic per visualizzare, indica la funzionalità che consente a qualsiasi utente di visualizzare l'indirizzo e-mail, il contatto telefonico o qualsiasi altro mezzo per mettersi in contatto con un altro utente che ha precedentemente pubblicato un annuncio di ricerca e ha indicato il mezzo di sua scelta per il/contattarlo. Questa funzionalità che permette di ottenere informazioni così importanti è a pagamento. Il suo costo è di 95 franchi CFA o 0,144 euro circa per clic.`,
         "IDTRANSLATETCU10":` ARTICOLO 2: Note legali `,




         
         "IDTRANSLATETCU11X":` BAKO FAMILIA & COMPANY è l'editore del sito di incontri illicolove.com.  Situata nel Lot 124 ad Agblangandan, è un'impresa individuale di diritto del Benin. Viene creata il 29 maggio 2008, iscritta al Registro delle Imprese e del Credito Mobiliari RCCM RB/COT/08/A4101; e a per Identificativo Fiscale Unico (IFU) Numero: 3200800938610.  È rappresentata da Gildas Ghislain GANGBAZO.`,
        "IDTRANSLATETCU11":` ARTICOLO 3: Accesso ai servizi `,
        "IDTRANSLATETCU12":` L'Utente del sito illicolove.com ha accesso ai seguenti servizi:`,
        "IDTRANSLATETCU13":` Creazione di un account personale `,
        "IDTRANSLATETCU14":` Creazione e pubblicazione gratuita del suo annuncio di ricerca tramite il nostro modulo da compilare `,
        "IDTRANSLATETCU15":` Visualizzazione degli annunci di ricerca pubblicati da altri utenti `,
        "IDTRANSLATETCU16":` L'ottenimento a pagamento dei contatti dei profili che trattengono il suo interesse, e presenti sugli annunci di ricerca, in modo illimitato e a suo piacimento (Click to show/ Clicca per visualizzare)`,
        "IDTRANSLATETCU17":` Possibilità di contattare l'Editore per richiedere servizi personalizzati `,
        "IDTRANSLATETCU18":` Ogni Utente con accesso a internet può accedere gratuitamente e da qualsiasi luogo al sito. Le spese sostenute dall'Utente per accedervi (connessione internet, materiale informatico, ecc.) non sono a carico dell'Editore.  I servizi di cui sopra sono accessibili all'Utente solo se è membro del sito (cioè è identificato con le sue credenziali di accesso): 
        Il sito e i suoi vari servizi possono essere interrotti o sospesi dal Publisher, in particolare in occasione di una manutenzione, senza obbligo di preavviso o giustificazione.`,
        "IDTRANSLATETCU19":` ARTICOLO 4: Responsabilità dell'Utente `,
        "IDTRANSLATETCU20":` L'Utente è responsabile dei rischi connessi all'utilizzo del suo login e della sua password.  La password dell'Utente deve rimanere segreta. In caso di divulgazione della password, l'Editore declina ogni responsabilità. L'Utente si assume la piena responsabilità per l'utilizzo delle informazioni e dei contenuti presenti sul sito illicolove.com.
        Qualsiasi utilizzo del servizio da parte dell'Utente che abbia direttamente o indirettamente come conseguenza di danni deve essere oggetto di un risarcimento a favore del sito.
        Il sito consente agli utenti di pubblicare un annuncio di ricerca sul sito compilando il modulo "Pubblica un annuncio".`,





        "IDTRANSLATETCU21":` L'utente si impegna a fornire informazioni affidabili, a proporre fotografie recenti prive di oscenità, a scrivere nei suoi criteri di ricerca affermazioni rispettose delle altre e della legge e accetta che sono annunci moderati o rifiutati dall'Editore, senza obbligo di giustificazione dopo un rifiuto da parte sua di fornire informazioni complementari per evitare falsi profili.
        Pubblicando il suo annuncio sul sito, l'Utente cede all'Editore il diritto non esclusivo e gratuito di rappresentare, riprodurre, adattare,  modificare, diffondere e distribuire il suo annuncio sui social network, o direttamente da un terzo autorizzato; nel rispetto del suo anonimato o del metodo di riservatezza scelto.
        L'Editore si impegna a preservare l'anonimato di qualsiasi utente in caso di pubblicazione degli annunci sui social network.`,
        "IDTRANSLATETCU22":` ARTICOLO 5: Responsabilità dell'Editore `,
        "IDTRANSLATETCU23":` Qualsiasi malfunzionamento del server o della rete non può impegnare la responsabilità dell'Editore. 
        Allo stesso modo, la responsabilità del sito non può essere assunta in caso di forza maggiore o di fatto imprevedibile e insormontabile di terzi.
        Il sito illicolove.com si impegna a mettere in atto tutti i mezzi necessari per garantire la sicurezza e la riservatezza dei dati.
        Tuttavia, non fornisce una garanzia di sicurezza totale. 
        L'Editore si riserva la facoltà di non garantire l'affidabilità dei profili, sebbene gli annunci di ricerca pubblicati sul sito siano considerati affidabili e verificati prima della convalida della loro pubblicazione nel back office da parte del team di correzione e convalida dell'Editore.`,



        "IDTRANSLATETCU24":` ARTICOLO 6: Proprietà intellettuale `,
        "IDTRANSLATETCU25":` BAKO FAMILIA & COMPANY è il proprietario esclusivo di tutti i diritti di proprietà intellettuale relativi al marchio, alla struttura o al contenuto del Sito www.illicolove.com. I contenuti del sito www.illicolove.com sono destinati ad un uso strettamente personale, privato e non collettivo, liberamente per il contenuto gratuito. Lo stesso vale per i feed RSS e le newsletter. Al di fuori del nostro sistema di affiliazione, è vietato l'uso professionale o commerciale o la commercializzazione di tali contenuti a terzi, salvo espresso accordo di BAKO FAMILIA & COMPANY.`,
        "IDTRANSLATETCU26":` ARTICOLO 7: Dati personali.`,
        "IDTRANSLATETCU27":` Leggi la nostra Informativa sulla privacy, i dati personali e i cookie qui <a href="politique.html"><i class="bi bi-arrow-right-circle"></i></a>`,
        "IDTRANSLATETCU29":` ARTICOLO 8: Collegamenti ipertestuali `,
        "IDTRANSLATETCU30":` Le aree a cui rimandano i collegamenti ipertestuali presenti sul sito non impegnano la responsabilità dell'Editore BAKO FAMILIA & COMPANY, che non ha alcun controllo su tali collegamenti.  L'Editore ha instaurato partnership con fornitori di servizi e può offrire all'Utente informazioni riguardanti altri siti e/o servizi, ad esempio tramite l'indicazione di indirizzi di siti Web e/o la presenza di collegamenti ipertestuali verso tali siti. Questi collegamenti ipertestuali che reindirizzano a siti di terze parti non sono stati sviluppati dall'Editore e non sono di sua proprietà. L'Editore non si assume pertanto alcuna responsabilità per tali siti, il loro contenuto, pubblicità, prodotti o servizi disponibili su o da tali siti. Inoltre, l'Editore non può essere ritenuto responsabile delle informazioni, opinioni e raccomandazioni formulate da tali terzi. `,



        "IDTRANSLATETCU31":` L'Editore non può essere ritenuto responsabile per qualsiasi danno o perdita reale o presunta, conseguente o in relazione all'uso, o per aver fatto affidamento sul contenuto, beni o servizi disponibili su tali servizi o fonti esterne.  La decisione di attivare questi link è interamente responsabilità dell'Utente.
        L'Editore non è responsabile della disponibilità di tali siti e non può controllarne il contenuto né convalidare la pubblicità, i prodotti e altre informazioni diffuse su tali siti web. È possibile per una terza parte creare un link a una pagina del sito illicolove.com senza l'espressa autorizzazione dell'editore.`,
        "IDTRANSLATETCU32":` ARTICOLO 9: Avvertenza Particolare `,
        "IDTRANSLATETCU33": ` Nella vita reale come nella vita virtuale su Internet, è possibile attraversare il percorso di persone oneste così come malintenzionati e truffatori. 
        Spetta a noi individualmente adottare certi atteggiamenti di sicurezza nella vita reale e in più nel mondo virtuale su Internet. BAKO FAMILIA & COMPANY vi invita a:`,
        "IDTRANSLATETCU34":` Non inviare mai denaro a uno sconosciuto incontrato su questo sito; e per nessun motivo.`,
        "IDTRANSLATETCU35":` Non inviare mai fotografie intime a un contatto incontrato su questo sito `,




        "IDTRANSLATETCU36":` Stare in guardia quando una persona finge di vivere nei dintorni, ma lavora all'estero.`,
        "IDTRANSLATETCU37":` Non cedere mai con il pretesto di una situazione urgente in cui una persona cara è malata e il tuo corrispondente virtuale ti chiede di aiutarla a pagare varie spese. In tal caso, ti invitiamo a segnalare il profilo di questi truffatori all'Editore.`,
        "IDTRANSLATETCU38":` Una relazione d'amore nascente su illicolove.com non può essere per te fonte di guai e di assistenza finanziaria. Quindi siate diffidenti quando uno sconosciuto vi dichiara il suo amore senza avervi potuto incontrare; e anche dopo un incontro fisico, prendetevi il tempo necessario prima di impegnare ogni spesa conseguente in denaro.`,
        "IDTRANSLATETCU39":` Scegliere sempre un luogo pubblico per un primo incontro.`,
        "IDTRANSLATETCU40":` Segnala sempre a una persona cara le tue posizioni quando sei in compagnia di una persona sconosciuta che hai appena incontrato di recente.`,
        "IDTRANSLATETCU41":` Denunciare e segnalarci, i tentativi di vendita di prodotti o servizi, i profili che si rivelano falsi nonostante i nostri filtri dopo i vostri scambi in privato, le minacce e intimidazioni, i discorsi malevoli, omofobi, abusivi e offensivi, i messaggi dei minori, e le domande di aiuti finanziari o di fotografie intime.`,
        "IDTRANSLATETCU42":` Pertanto, l'Utente riconosce e accetta senza riserve di essere pienamente responsabile di qualsiasi azione intrapresa a seguito della lettura di un annuncio di incontri d'amore e in generale di qualsiasi informazione presente sul Sito.Il conferimento di tali dati può essere assimilata, in qualsiasi modo, ad un consiglio specifico o ad un aiuto alla decisione. L'Utente è pienamente consapevole della casualità degli incontri d'amore sia nella vita reale che su internet.`,

        "IDTRANSLATETCU43":` ARTICOLO 10: Cancellazione dei dati dopo 1 anno di inattività.`,
        "IDTRANSLATETCU44":` Per motivi di sicurezza, se non ti sei autenticato sul Sito per un periodo di un anno, riceverai un'e-mail che ti chiederà di accedere al più presto, altrimenti il tuo profilo verrà rimosso dai nostri database.`,




        "IDTRANSLATETCU45":` ARTICOLO 11: Cancellazione dell'account su richiesta.`,
        "IDTRANSLATETCU46":` L'Utente ha la possibilità di cancellare il proprio Account in qualsiasi momento, tramite semplice richiesta all'Editore o tramite il menu di eliminazione dell'Account presente nelle impostazioni dell'Account, se necessario.`,
        "IDTRANSLATETCU47":` ARTICOLO 12: Cancellazione del profilo in caso di violazione delle CGU `,
        "IDTRANSLATETCU48":` In caso di violazione di una o più disposizioni delle CGU o di qualsiasi altro documento incorporato nelle presenti Condizioni per riferimento, l'Editore si riserva il diritto di terminare o limitare senza alcun preavviso e a sua esclusiva discrezione l'uso e l'accesso ai servizi, al tuo account e a tutti i Siti collegati.`,
        "IDTRANSLATETCU49":` ARTICOLO 13: Indicazioni in caso di violazione della sicurezza rilevata dall'Editore.`,
        "IDTRANSLATETCU50":` Ci impegniamo a mettere in atto tutte le misure tecniche e organizzative appropriate per garantire un livello di sicurezza adeguato rispetto ai rischi di accesso accidentale, non autorizzato o illegale, divulgazione, alterazione, perdita o distruzione dei dati personali dell'utente.`,
        "IDTRANSLATETCU51":` Nel caso in cui dovessimo venire a conoscenza di un accesso illegale ai vostri dati personali memorizzati sui nostri server o su quelli dei nostri fornitori, o di un accesso non autorizzato con conseguente realizzazione dei rischi identificati quisopra, ci impegniamo a:`,





        "IDTRANSLATETCU52":` Esaminare le cause dell'incidente e informarti
        (relazioni pubbliche);`,
        "IDTRANSLATETCU53":` Adottare le misure necessarie entro limiti ragionevoli per ridurre gli effetti negativi e pregiudizievoli che possono derivare dall'incidente.`,
        "IDTRANSLATETCU54":` ARTICOLO 14: Limitazione della responsabilità `,
        "IDTRANSLATETCU55":` In nessun caso gli impegni definiti al punto precedente relativi alla notifica in caso di violazione della sicurezza possono essere assimilati a un qualsiasi riconoscimento di colpa o di responsabilità per il verificarsi dell'incidente in questione.`,
        "IDTRANSLATETCU56":` ARTICOLO 15: Durata del contratto `,
        "IDTRANSLATETCU57":` La durata del presente contratto è indeterminata. Il contratto produce i suoi effetti nei confronti dell'Utente dall'inizio dell'utilizzo del servizio.`,
        "IDTRANSLATETCU58":` ARTICOLO 16: Legge applicabile e foro competente `,
        "IDTRANSLATETCU59":` La lingua delle presenti CGU è il francese e prevarrà su tutte le versioni tradotte in un'altra lingua. Il presente contratto è soggetto alla legislazione del Benin, in particolare la legge N.N. 2017-20 del 20 aprile 2018 recante Codice del Digitale nella Repubblica del Benin. La scelta della legge applicabile non pregiudica i tuoi diritti come consumatore in conformità con la legge applicabile del tuo luogo di residenza.`,
        "IDTRANSLATETCU60":` Se sei un consumatore, tu e noi accettiamo di sottoporsi alla giurisdizione non esclusiva delle giurisdizioni del Benin. In caso di controversia irrisolta tra l'Utente e l'Editore, il tribunale commerciale di Cotonou sarà competente a risolvere il contenzioso.`,
        "IDTRANSLATEPC1":` POLITICA DI RISERVATEZZA `,
        "IDTRANSLATEPC2":` Note Legali `,




        "IDTRANSLATEPC3":` Le presenti note legali e l'Informativa sulla privacy forniscono e chiariscono come BAKO FAMILIA & COMPANY utilizza e protegge le informazioni che ci trasmetti, Inoltre, quando si utilizza il nostro sito di incontri d'amore accessibile dall'URL: www.illicolove.com.`,
        "IDTRANSLATEPC4":` Si prega di notare che la nostra politica sulla privacy può essere modificata e/o integrata in qualsiasi momento, in particolare per conformarsi a qualsiasi evoluzione legislativa, normativa, giurisprudenziale o tecnologica. In tal caso, la data dell'aggiornamento sarà indicata nella presente politica. Tali modifiche sono vincolanti per l'utente fin dalla loro pubblicazione online. 
        Vi invitiamo pertanto a consultare regolarmente le presenti informative e l'informativa sulla privacy al fine di prendere conoscenza delle eventuali modifiche.`,
        "IDTRANSLATEPC5":` Dichiarazione all'Autorità di Protezione dei Dati Personali (APDP)`,
        "IDTRANSLATEPC6":` In conformità con la legge n. 2017-20 del 20 aprile 2018 recante codice digitale nella Repubblica del Benin (Libro quinto relativo alla protezione dei dati personali e della vita privata) il sito www.illicolove.com è stato oggetto di una dichiarazione all'Autorità per la protezione dei dati personali (apdp.bj) con il numero SA-TDP-00601`,
        "IDTRANSLATEPC7":` In ogni caso, BAKO FAMILIA & COMPANY raccoglie informazioni personali relative all'utente solo per le esigenze del servizio di incontri amorosi offerto dal suo sito web. L'utente fornisce queste informazioni con piena cognizione di causa,  in particolare quando procede da solo al loro inserimento.`,





        "IDTRANSLATEPC8":` Conformemente alle disposizioni della legge 2017-20 recante codice del digitale nella Repubblica del Benin, ogni utente dispone di un diritto di accesso, rettifica e opposizione ai dati personali che lo riguardano, effettuando la sua richiesta scritta e firmata, accompagnata da una copia di un documento d'identità con firma del titolare del documento, precisando l'indirizzo al quale deve essere inviata la risposta. Nessuna informazione personale di un utente del nostro sito web «www.illicolove.com» viene pubblicata, ceduta o venduta su qualsiasi supporto o a terzi a sua insaputa.`,
        "IDTRANSLATEPC9":` Riservatezza dei Dati `,
        "IDTRANSLATEPC10":` I tuoi dati personali sono riservati e non saranno in nessun caso comunicati a terzi. La natura privata del nostro servizio di incontri amorosi non ci permette di comunicare i vostri dati personali (nomi, contatti, indirizzi, ecc) a un individuo, indipendentemente dal suo rango o qualità.`,
        "IDTRANSLATEPC11": ` Diritto di Accesso `,
        "IDTRANSLATEPC12":` In applicazione delle disposizioni della legge sul digitale nella Repubblica del Benin, ogni utente del nostro sito www.illicolove.com ha il diritto di accesso, rettifica, modifica e cancellazione dei dati che lo riguardano individualmente. Tale diritto può essere esercitato dal titolare su richiesta inviata per via elettronica al seguente indirizzo e-mail: info@illicolove.com. Le informazioni personali raccolte non sono in alcun modo affidate a terzi.`,
        "IDTRANSLATEPC13":` Diritto di Rettifica `,






        "IDTRANSLATEPC14":` Ai sensi della legge sul codice numerico nella Repubblica del Benin, qualsiasi utente del nostro sito www.illicolove.com può richiedere la rettifica, l'aggiornamento, la cancellazione, il blocco o la cancellazione dei dati che lo riguardano, e che possono essere inesatte, errate, incomplete, ambigue o obsolete.`,
        "IDTRANSLATEPC15":` Durata di Conservazione.`,
        "IDTRANSLATEPC16":` I tuoi dati personali sono conservati da BAKO FAMILIA & COMPANY solo per il tempo corrispondente alla tua necessità di servizi di incontri d'amore. Tuttavia, questo periodo di conservazione non supera tredici (13) mesi in caso di inattività sul tuo account utente.`,
        "IDTRANSLATEPC17":` Reclamo all'autorità competente `,
        "IDTRANSLATEPC18":` Se ritenete che BAKO FAMILIA & COMPANY non rispetti i suoi obblighi in relazione ai vostri dati personali raccolti durante la vostra visita al suo sito www.illicolove.com, potete inviare, come prescritto dalla procedura legale, un reclamo o una richiesta all'Autorità per la protezione dei dati personali (APDP).`,
        "IDTRANSLATEPC19":` Proprietà Intellettuale `,
        "IDTRANSLATEPC20":` Tutti i contenuti di questo sito web, inclusi, a titolo esemplificativo, grafica, immagini, testi, video, animazioni, suoni, loghi, gif e icone e la loro formattazione sono di proprietà esclusiva di BAKO FAMILIA & COMPANY ad eccezione dei marchi, loghi o contenuti appartenenti ad altre società partner o autori. 
        Qualsiasi riproduzione, distribuzione, modifica, adattamento, ritrasmissione o pubblicazione, anche parziale, di questi diversi elementi è severamente vietata senza l'espresso consenso scritto di BAKO FAMILIA & COMPANY.`,
        "IDTRANSLATEPC21":` Condizioni di Servizio `,
        "IDTRANSLATEPC22":` Il sito www.illicolove.com è disponibile in francese, con traduzioni in inglese, spagnolo, tedesco, portoghese, russo, mandarino(cinese), arabo, giapponese, italiano e coreano. Per una maggiore comodità d'uso, ti consigliamo di utilizzare browser compatibili e moderni come: Chrome, Safari, Firefox.`,
        "IDTRANSLATEPC23":` Informazioni e Suggerimenti `,







        "IDTRANSLATEPC24":` BAKO FAMILIA & COMPANY utilizza tutti i mezzi a sua disposizione per garantire un servizio di incontri d'amore affidabile e un aggiornamento permanente del suo sito www.illicolove.com. Tuttavia, errori o omissioni possono portare. Di conseguenza, qualsiasi utente può inviarci suggerimenti o informazioni a: info@illicolove.com e indicare eventuali modifiche al sito che ritiene pertinenti.`,
        "IDTRANSLATEPC25":`Cookies.`,
        "IDTRANSLATEPC26":` Per esigenze tecniche, statistiche e di visualizzazione, il sito www.illicolove.com può utilizzare i cookie. I cookie sono piccoli file di testo che vengono memorizzati sul vostro terminale e che non consentono l'identificazione dell'utente, ma che registrano informazioni relative alla navigazione di un terminale su un sito web. Alcune parti di questo sito non possono essere funzionali senza l'accettazione dei cookie. I dati così ottenuti mirano a facilitare la navigazione ulteriore su questo sito. I cookie sono utilizzati anche per diverse misure di audience e frequenza.`,
        "IDTRANSLATEPC27":` Il rifiuto di installare un cookie può comportare l'impossibilità di accedere ad alcune funzionalità. Ogni utente di questo sito web può tuttavia configurare il proprio terminale per rifiutare l'installazione dei cookie, come indicato di seguito:`,
        "IDTRANSLATEPC28":` Utenti Safari: Scegliere Preferenze Safari, fare clic su Privacy, quindi selezionare l'opzione relativa a «Cookie e dati del sito web». Blocca sempre: Safari non consente a siti web, terze parti o inserzionisti di memorizzare cookie e altri dati sul tuo Mac. Ciò potrebbe impedire ad alcuni siti web di funzionare correttamente.`,





        "IDTRANSLATEPC29":` Utenti Safari: Scegliere Preferenze Safari, fare clic su Privacy, quindi selezionare l'opzione relativa a «Cookie e dati del sito web». Blocca sempre: Safari non consente a siti web, terze parti o inserzionisti di memorizzare cookie e altri dati sul tuo Mac. Ciò potrebbe impedire ad alcuni siti web di funzionare correttamente.`,
        "IDTRANSLATEPC30":` Utenti di Google Chrome: Menu; Impostazioni;   Visualizza impostazioni avanzate (in fondo alla pagina). Quindi fare clic sul pulsante Impostazioni contenuto e selezionare la casella di controllo Blocca cookie e dati di siti di terze parti, infine fare clic su OK per confermare la scelta.`,
        "IDTRANSLATEPC31":` Utenti di Internet Explorer: Menu Opzioni Internet Scheda Privacy e sul pulsante Avanzate per far apparire la finestra delle Impostazioni di privacy avanzate. Quindi selezionare la casella di controllo Ignora gestione automatica dei cookie e selezionare Rifiuta nella colonna Cookie di terze parti.`,
        "IDTRANSLATEPC32":` Utenti Microsoft Edge: scheda Strumenti/ opzioni Internet. Fare clic su Privacy e scegliere Blocca tutti i cookie.`,




        "IDTRANSLATEPC33":` Seguendo le pratiche in materia, alcuni cookie sono
        dispensati dalla preventiva raccolta del consenso
        nella misura in cui sono indispensabili al
        funzionamento di questo sito web. Essi hanno lo scopo di
        facilitare la comunicazione per via elettronica. Si tratta
        compresi i cookie di identificazione di sessione,
        autenticazione e personalizzazione dell'interfaccia.
        Questi cookie sono emessi e gestiti da BAKO FAMILIA &
        COMPANY e sono tutti soggetti a questa politica.`,
        "IDTRANSLATEPC34":` Collegamenti Ipertestuali `,
        "IDTRANSLATEPC35":` Il sito internet «www.illicolove.com» può offrire dei link verso altri siti internet o altre risorse disponibili su Internet. BAKO FAMILIA & COMPANY non dispone di alcun mezzo per controllare i siti collegati al suo sito web. Inoltre, non risponde né garantisce la disponibilità di tali siti e fonti esterne. Non può essere ritenuto responsabile per eventuali danni di qualsiasi tipo derivanti dal contenuto di tali siti o fonti esterne.`,




        "IDTRANSLATECONSULTE1":` Africa `,
        "IDTRANSLATECONSULTE2":` Europa `,
        "IDTRANSLATECONSULTE3":` Altri Paesi del Mondo `,
        "IDTRANSLATEPROFIL1": " Account Valido ",
        "IDTRANSLATEPROFIL2": " Account non Valido ",
        "IDTRANSLATEPROFIL3":` Conto Dare `,
        "IDTRANSLATEPROFIL4":` Conto Dare `,
        "IDTRANSLATEPROFIL5":` Il Mio Piano `,
        "IDTRANSLATEPROFIL6":` Il Mio Piano `, 
        "IDTRANSLATEPROFIL7":` Miei dati `,
        "myNameIDX":` Eliminare il tuo account `,
        "myBtn":` Ricaricare il mio account `,
        "myBtn2":` Ricaricare il mio account `,
        "IDTRANSLATEPROFIL9":` Vai alla home page `,
        "IDTRANSLATEPROFIL10":` Disconnettersi `,
        "CONSULTEZLESANNONCES":` CONSULTA GLI ANNUNCI `,
        "IDTRANSLATEPROFIL11":` MODIFICA IL TUO ANNUNCIO `, 
        "IDTRANSLATEPROFIL12":` PUBBLICARE UN ANNUNCIO `,
       // "IDTRANSLATEPROFIL13":`Vous souhaite la Bienvenue !`,
        "exampleModalLongTitle":` Un'unità vale 95 FCFA, ovvero 0.144 Euro.`,
        "errorSms":` Devi inserire una cifra.`,
        "SmspayId":` Inserisci qui il numero di unità.`,
        "IDTRANSLATEPROFIL14":` Ritorno `, 
        "payYourUnitybtn":` Convalidare `,
        "CHOISEYOURPAIEMENT":` Seleziona il metodo di pagamento.`,
        "exampleModalLongTitleX":` Proteggi il tuo account.`,
        "IDTRANSLATEPROFIL15":` Si prega di fornire una risposta che non dimenticherai mai.   Questa risposta ti verrà richiesta al momento del recupero del tuo account. Senza questa risposta, il tuo account rimarrà inaccessibile.`,
        "IDTRANSLATEPROFIL16":` Seleziona la tua domanda `,
        "IDTRANSLATEPROFIL17":` Qual è il suo mese di nascita?`,
        "IDTRANSLATEPROFIL18":` Qual è il tuo colore preferito?`,
        "IDTRANSLATEPROFIL19":` Come immagini la tua vita quotidiana?`,
        "IDTRANSLATEPROFIL20":` Cosa è più importante per te?`,
        "IDTRANSLATEPROFIL21":` Qual è il nome della persona che ti ispira?`,
        "IDTRANSLATEPROFIL22":` Qual è il tuo paese preferito?`,
        "IDTRANSLATEPROFIL23":` Qual è il tuo giocatore preferito?`,
        "IDTRANSLATEPROFIL24":` Qual è il tuo artista preferito?`,
        "IDTRANSLATEPROFIL25":` Qual è la tua risposta? Solo una parola. Nessuno spazio.`,
        
        "submitFormID":` Sottoscrivere `,
        "TOCLOSEMODALID":` Chiudere `,   
        "IDTRANSLATEPROFIL26":` Convalidare `, 
        "IDTRANSLATEPROFIL27":` Risposta di sicurezza `,
        "payYourUnity":` Scrivi il numero di unità `,
        congratulationsTitle: " Congratulazioni!",
        accountSecureMessage: " Il tuo account è sicuro. Grazie!",       
        accountSecureMessageX: " Non mettere spazio. Grazie!",


        "IDTRANSLATEPROFIL28":` Il tuo conto di addebito è vuoto. Acquista unità per accedere ai contatti degli annunci che ti piaceranno.`,
        "IDTRANSLATEPROFIL29":` Al momento non è possibile acquistare unità. Consumare le 3 unità gratuite offerte prima. Grazie.`,
        "IDTRANSLATEPROFIL30W":` è sicuro?`,
        "IDTRANSLATEPROFIL30":` Non puoi tornare indietro!`,
        "IDTRANSLATEPROFIL31":` Sì, cancellalo e basta!`, 
        "IDTRANSLATEPROFIL32":` è sicuro?`,
        "IDTRANSLATEPROFIL33":` Dopo la disconnessione, hai la possibilità di accedere nuovamente.`,
        "IDTRANSLATEPROFIL34":` Sì, disconnetti`,
        "IDTRANSLATEPROFIL35":` Disconnesso `,
        "IDTRANSLATEPROFIL36":` Non sei più in linea.`,
        "IDTRANSLATEPROFIL37":` Vuoi visitare la nostra home page?`,
        "IDTRANSLATEPROFIL38":` Eliminato!`,
        "IDTRANSLATEPROFIL38X":` Successo.`,
        "IDTRANSLATEPROFIL39X":` La tua foto è stata aggiornata con successo.`,
        "IDTRANSLATEPROFIL40X":` Errore `,
        "IDTRANSLATEPROFIL41X":` La tua foto non può essere aggiornata.`,

        "IDTRANSLATEPROFIL39":` Il tuo account è stato cancellato! !`,
        "IDTRANSLATEPROFIL40":` Eliminato!`,
        "IDTRANSLATEPROFIL41":` Errore durante la rimozione dell'utente! `,
        "IDTRANSLATEPROFIL42":` C'è un errore `,
        "IDTRANSLATEPROFIL42Q": ` C'è un errore `,
        "IDTRANSLATEPROFIL42QX":` C'è un errore `,
        "IDTRANSLATEPROFIL43":` Il campo non è ben riempito!`, 
        "IDTRANSLATEPROFIL44":` Qualcosa è andato storto!`,
        "IDTRANSLATEPROFIL44IN":` Cari utenti, questo metodo di pagamento sarà disponibile molto presto. Per ora, si prega di utilizzare Feexpay per effettuare le transazioni. Grazie!`,
        "IDTRANSLATEPROFIL45":` I dati non sono aggiornati!`,
        "IDTRANSLATEPROFIL46":` Non hai unità. Acquista. Vai al tuo profilo. Grazie!`,
        "IDTRANSLATEPROFIL47":` è sicuro?`,
        "IDTRANSLATEPROFIL48":` Se modifichi l'annuncio, verrà nuovamente inviata agli amministratori per la convalida. Questo processo può richiedere fino a 24 ore.`,




        "IDTRANSLATEPROFIL49":` Ritorno `,
        "IDTRANSLATEPROFIL50":` Sì! Cambiare.`,
        "IDTRANSLATELOGIN1":` Accedi.`,
        "IDTRANSLATELOGIN2":`Email`,
        "IDTRANSLATELOGIN3":` il tuo indirizzo e-mail `,
        "IDTRANSLATELOGIN4":` Password `,
        "IDTRANSLATELOGIN5":` la tua password `,
        "IDTRANSLATELOGIN6":` Ricordarsi di me `,
        "IDTRANSLATELOGIN7":` Password dimenticata `,
        "IDTRANSLATELOGIN8":` Non ho un account.`,
        "IDTRANSLATELOGIN9":` Registrati Gratuitamente `,
        "IDTRANSLATELOGIN10":` Connettersi `,
        "IDTRANSLATELOGIN11":` Successo `,
        "IDTRANSLATELOGIN12":` Sei connesso con successo!`,
        "IDTRANSLATELOGIN13":` Mi dispiace `,
        "IDTRANSLATELOGIN14":` Password non corretta!`,
        "IDTRANSLATELOGIN15":` Mi dispiace `,
        "IDTRANSLATELOGIN16":` L'utente non esiste con questa e-mail  !`,
        "IDTRANSLATESIGNUP1":` Iscriversi `,
        "IDTRANSLATESIGNUP2":` Pseudonimo `, 
        "IDTRANSLATESIGNUP3":` Pseudonimo `,
        "IDTRANSLATESIGNUP4":` Nome completo `, 
        "IDTRANSLATESIGNUP5":` Nome completo `,
        "IDTRANSLATESIGNUP6":`Email`,
        "IDTRANSLATESIGNUP7":` il tuo indirizzo e-mail `,
        "IDTRANSLATESIGNUP8":`Password`,
        "IDTRANSLATESIGNUP9":` la tua password `,
        "IDTRANSLATESIGNUP10":` Ho letto e accetto i termini e le condizioni `,
        "IDTRANSLATESIGNUP11":` Leggere e accettare i nostri termini e condizioni `,
        "IDTRANSLATESIGNUP12":` Ho già un conto.`,
        "IDTRANSLATESIGNUP13":` Accedi `,
        "IDTRANSLATESIGNUP14":` Mi dispiace `,




        "IDTRANSLATESIGNUP15":` Un account è già associato a questo indirizzo e-mail o numero di telefono.`,
        "IDTRANSLATESIGNUP16":` Successo `,
        "IDTRANSLATESIGNUP17":` Sei registrato con successo!`,
        "IDTRANSLATESIGNUP18":` Errore durante l'invio dell'indirizzo e-mail a Firebase `, 
        "IDTRANSLATESIGNUP19":` Non mettere spazi. Grazie!`,
        "IDTRANSLATESIGNUP19PHONE":` Si prega di fornire un numero di telefono valido.`,
        "IDTRANSLATESIGNUP19PHONEX":` Si prega di fornire un numero di telefono valido.`,
        "IDTRANSLATEFORGET1":` Inviare l'indirizzo e-mail utilizzato durante la registrazione.`,
        "IDTRANSLATEFORGET2":`E-mail`,
        "IDTRANSLATEFORGET3":` Tua e-mail `,
        "IDTRANSLATEFORGET4":` Inviare `,
        "IDTRANSLATEFORGET5":` Convalidare `,
        "IDTRANSLATEFORGET6":` Dare la risposta giusta!`,
        "IDTRANSLATEFORGET7":` Inserisci la tua nuova password!`,
        "IDTRANSLATEFORGET8":` Inserisci la tua nuova password!`, 
        "IDTRANSLATEFORGET9":` Fantastico...`,
        "IDTRANSLATEFORGET10":` Password aggiornata con successo!`,
        "IDTRANSLATEFORGET11":` Accedi `,
        "IDTRANSLATEFORGET12":` Va bene `,
        "IDTRANSLATEFORGET13":` Errore durante l'aggiornamento dell'e-mail.`,
        "IDTRANSLATEFORGET14":` Questa non è la risposta giusta `,
        "IDTRANSLATEFORGET15":` L'utente non esiste.`, 
        "IDTRANSLATEFORM1":` IL MIO PROFILO `,
        "IDTRANSLATEFORM1W":` IL MIO PROFILO `,
        "IDTRANSLATEFORM2":` IL MIO PROFILO `,
        "IDTRANSLATEFORM3":` IL MIO PROFILO `,
        "IDTRANSLATEFORM4":` PROFILO CHE STO CERCANDO `,
        "IDTRANSLATEFORM4W":` PROFILO CHE STO CERCANDO `,
        "IDTRANSLATEFORM5":` PROFILO CHE STO CERCANDO `,
       // "IDTRANSLATEFORM6":`VEUILLEZ REMPLIR LE FORMULAIRE CI-DESSOUS.`,
        "IDTRANSLATEFORM7":` Fornire informazioni accurate e sensate.`,
        "IDTRANSLATEFORM8":` Mio paese di residenza <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM9":` La mia città di residenza <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM10":` Nome o Pseudonimo <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM11":` mia età <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM9PL":` La mia città di residenza `,





        "IDTRANSLATEFORM10X":` La mia città di residenza `,
        "IDTRANSLATEFORM11X":` Mia età `,
        "IDTRANSLATEFORM8X":` Mio paese di residenza `,
        "IDTRANSLATEFORM9X":` Mia età `,
        "IDTRANSLATEFORM12":` Inserisci solo i numeri.<i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM13":` il mio Genere <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM14":` Uomo `,
        "IDTRANSLATEFORM15":` Donna `,
        "IDTRANSLATEFORM16":` Transgenere `,
        "IDTRANSLATEFORM17":` Genere Fluido`,
        "IDTRANSLATEFORM18":` Intersex `,
        "IDTRANSLATEFORM19":` Senza Genere `,
        "IDTRANSLATEFORM20":` Aromantico/a `,
        "IDTRANSLATEFORM21":` Asessuale `,
        "IDTRANSLATEFORM22":` Bisessuale `,
        "IDTRANSLATEFORM23":` Cisgenere `,
        "IDTRANSLATEFORM24":` Cisnormatività `,
        "IDTRANSLATEFORM25":` Demiromantico/a `,
        "IDTRANSLATEFORM26":` Demisessuale `,
        "IDTRANSLATEFORM27":` Eteroromanticità `,
        "IDTRANSLATEFORM28":` Essi `,
        "IDTRANSLATEFORM29":` Misdire il genere `,
        "IDTRANSLATEFORM30":` Non-binario `,
        "IDTRANSLATEFORM31":` Panessuale `,
        "IDTRANSLATEFORM32":` Poliamoroso/a `,
        "IDTRANSLATEFORM33":`Queer`,
        "IDTRANSLATEFORM34":` Transgender `,
        "IDTRANSLATEFORM35":` Transizione `,
       // "IDTRANSLATEFORM36":`VEUILLEZ REMPLIR LE FORMULAIRE CI-DESSOUS.`,
        "IDTRANSLATEFORM37":` Fornire informazioni accurate e sensate.`,
        "IDTRANSLATEFORM38":` La mia situazione matrimoniale <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM39":` Scapolo `,
        "IDTRANSLATEFORM40":` In coppia `,
        "IDTRANSLATEFORM41":` Divorziato/Divorziata`,
        "IDTRANSLATEFORM42":` Vedovo/Vedova`,
        "IDTRANSLATEFORM43":` Mia cittadinanza <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM44":` Telefono <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM45":` Inserisci solo il tuo numero senza il prefisso del paese <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM46":` La mia professione o occupazione <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM47":` il mio lavoro `,
       // "IDTRANSLATEFORM48":`VEUILLEZ REMPLIR LE FORMULAIRE CI-DESSOUS.`,
        "IDTRANSLATEFORM49":` Fornisci informazioni precise e pertinenti.`,
        "IDTRANSLATEFORM50":` Voglio un incontro <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM51":` Amichevole, una compagnia per rompere la solitudine `,
        "IDTRANSLATEFORM52":` Sostenibile `,
        "IDTRANSLATEFORM53":` Che può sfociare nel matrimonio `,
        "IDTRANSLATEFORM54":` Documento d'identità `,
        "IDTRANSLATEFORM55":` Foto 1 <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM56":` Foto 2 <i class="fa fa-star required"></i>`,
       // "IDTRANSLATEFORM57":`VEUILLEZ REMPLIR LE FORMULAIRE CI-DESSOUS.`,
        "IDTRANSLATEFORM58":` Fornire informazioni accurate e sensate.`,
        "IDTRANSLATEFORM59":` Suo genere <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM60":` Uomo `,
        "IDTRANSLATEFORM61":`Donna`,
        "IDTRANSLATEFORM62":` Transgenere `,
        "IDTRANSLATEFORM63":` Gender Fluido `,
        "IDTRANSLATEFORM64":`Intersex`,
        "IDTRANSLATEFORM65":` Agender `,
        "IDTRANSLATEFORM66":` Aromantico/a `,
        "IDTRANSLATEFORM67":` Asessuale `,
        "IDTRANSLATEFORM68":` Bisessuale `,




        "IDTRANSLATEFORM69":` Cisgenere `,
        "IDTRANSLATEFORM70":` Cisnormatività `,
        "IDTRANSLATEFORM71":` Demiromantico/a `,
        "IDTRANSLATEFORM72":` Demisessuale `,
        "IDTRANSLATEFORM73":` Eteroromanticità `,
        "IDTRANSLATEFORM74":` Esse `,
        "IDTRANSLATEFORM75":` Sbagliare il Genere `,
        "IDTRANSLATEFORM76":` Non-binario `,
        "IDTRANSLATEFORM77":` Panessuale `,
        "IDTRANSLATEFORM78":` Poliamoroso/a `,
        "IDTRANSLATEFORM79":`Queer`,
        "IDTRANSLATEFORM80":` Transgender `,
        "IDTRANSLATEFORM81":` Transizione `,
        "IDTRANSLATEFORM82":` La sua fascia d'età <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM83":` La sua situazione matrimoniale <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM84":` Scapolo `,
        "IDTRANSLATEFORM85":` In coppia `,
        "IDTRANSLATEFORM86":` Divorziato/Divorziata `,
        "IDTRANSLATEFORM87":` Vedovo/Vedova `,
        "IDTRANSLATEFORM88":` Suo paese di residenza <i class="fa fa-star required" ></i>`,
        "IDTRANSLATEFORM89":` Puoi scegliere diversi paesi. <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM90":` Suo paese `,
        "IDTRANSLATEFORM91":` Suo paese di residenza `,
      //  "IDTRANSLATEFORM92":`VEUILLEZ REMPLIR LE FORMULAIRE CI-DESSOUS.`,
        "IDTRANSLATEFORM93":` Fornire informazioni accurate e sensate.`,
        "IDTRANSLATEFORM94":` Descrivi l'aspetto fisico che desideri.`,
        "IDTRANSLATEFORM95":` La sua città d'abitazione <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM96":` Sua città `,
        "IDTRANSLATEFORM97":` Il suo lavoro o occupazioni <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM98":` Il suo lavoro `,
        "IDTRANSLATEFORM99":` Altre precisazioni.`,
        "IDTRANSLATEFORM100":` Altre precisazioni `,
        "IDTRANSLATEFORM10w":` Aspetti fisici `,
        "IDTRANSLATEFORM101":` Successivo `,
        "IDTRANSLATEFORM102":` Precedente `,
        "IDTRANSLATEFORM103":` Inviare `,




        "IDTRANSLATEFORM104":`<p > I dati personali raccolti in questo modulo da <strong style="color: #000080;">BAKO FAMILIA & COMPANY</strong> saranno trattati esclusivamente allo scopo di garantire il corretto svolgimento del servizio di incontri amorosi da Lei richiesto. I dati personali raccolti non vengono comunicati a nessuno senza il vostro consenso.
        In applicazione delle disposizioni della legge 2017-20 sul codice digitale sulla protezione dei dati personali nella Repubblica del Benin, il trattamento dei dati raccolti è stato dichiarato all'APDP.</em> </p>
        <hr>
        <p class="mb-0"> In conformità con la suddetta legge, è possibile esercitare i diritti di accesso, opposizione, rettifica e cancellazione presso <strong style="color: #000080;">BAKO FAMILIA & COMPANY</strong>.
        </em></p>`,
        "IDTRANSLATEFORM105":` L'immagine è troppo piccola. Selezionare un'immagine di almeno 300x300 pixel.`,
        "IDTRANSLATEFORM106":` Si è verificato un errore durante la chiamata all'API REST Countries `,
        "IDTRANSLATEFORM107":` Basta inserire il numero senza il prefisso `,
        "IDTRANSLATEFORM108":` Si prega di selezionare il paese.`,
        "IDTRANSLATEFORM109":` Successo `,
        "IDTRANSLATEFORM110":` Il modulo viene sottoposto a verifica per la convalida entro 24 ore <i class="fa fa-heart"></i>.`,
        "IDTRANSLATEFORM111":` Mi dispiace `,
        "IDTRANSLATEFORM112":` Non tutti i tuoi campi sono compilati.`,
        "IDTRANSLATEUSERD1":` Contattami  <svg xmlns="http://www.w3.org/2000/svg" width="10.444" height="9.7"><defs><clipPath id="a"><path fill="none" d="M0 0h10.444v9.7H0z"/></clipPath></defs><g fill="none" stroke="#2a46cc" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.438" clip-path="url(#a)"><path d="M.719 4.85h8.709M5.594 8.683L9.427 4.85M5.594 1.017L9.427 4.85"/></g></svg>`,





        "IDTRANSLATEUSERD2":` Per contattarmi `,
        "IDTRANSLATEUSERD3":`<i class="bi bi-alexa" style="font-size: 3vh !important;"></i> Il mio Profilo `,
        "IDTRANSLATEUSERD4":` Risposta `,
        "IDTRANSLATEUSERD5":` La mia città di residenza :`,
        "IDTRANSLATEUSERD6":` Il mio nome o pseudonimo:`,
        "IDTRANSLATEUSERD7":` La mia fascia d'età :`,
        "IDTRANSLATEUSERD8":` Il mio Genere:`,
        "IDTRANSLATEUSERD9":` La mia situazione matrimoniale:`,
        "IDTRANSLATEUSERD10":` Mia cittadinanza :`,
        "IDTRANSLATEUSERD11":` Il mio lavoro o occupazione:`,
        "IDTRANSLATEUSERD12":` Voglio un incontro :`,
        "IDTRANSLATEUSERD13":` Le mie preferenze fisiche :`,
        "IDTRANSLATEUSERD14":` Altre precisazioni :`,
        "IDTRANSLATEUSERD15":`<i class="bi bi-alexa" style="font-size: 3vh !important;"></i> Profilo che sto cercando `,
        "IDTRANSLATEUSERD16":` Risposte `,
        "IDTRANSLATEUSERD17":` Suo genere :`,
        "IDTRANSLATEUSERD18":` La sua fascia d'età :`,
        "IDTRANSLATEUSERD19":` La sua situazione matrimoniale :`,
        "IDTRANSLATEUSERD20":` Suo paese di residenza :`,
        "IDTRANSLATEUSERD21":` La sua città d'abitazione:`,
        "IDTRANSLATEUSERD22":` Il suo lavoro o occupazione:`,
        "TIDTRANSLATEUSERD23":` Online il `,

        "IDTRANSLATEUSERD24":`<i class="fas fa-database" style="font-size: 5vh !important; color: #FFB6C1;"></i> Nessun dato`,
        "IDTRANSLATEUSERD25":` Nessun dato.`,
        "IDTRANSLATEUSERD26":` C'è un errore.`,
        "IDTRANSLATEUSERD27":` Il tuo conto è addebitato `,
        "IDTRANSLATEUSERD28":` I tuoi dati non sono aggiornati.`,
        "IDTRANSLATEUSERD29":` Potrai contattare gli altri utenti solo dopo la pubblicazione del modulo di ricerca.`,
        "IDTRANSLATEUSERD30":` Vuoi pubblicare il tuo annuncio?`,
        "IDTRANSLATEUSERD31":` Le tue unità sono esaurite. Non puoi più contattare altri utenti’.`,
        "IDTRANSLATEUSERD32":` Vuoi comprare delle unità?`,
        "IDTRANSLATEUSERD33":` va bene `,
        "IDTRANSLATEUSERD34":` Visita il suo profilo!`,
        "IDTRANSLATEUSERD35":`<i class="bi bi-eye" style="color: white;"></i> Clicca per vedere.`,
        "texteIDTRANSLATEUSERD24YX": " Online ",
        "myNameIDwallet":" Preleva le commissioni.",
        "MYEWALLETID":`<i class="fa fa-align-left"></i> Il mio portafoglio `,
        "MYEWALLETID1":" Saldo totale ", 
        "comeBackId":" Ritorno ",
        "idTogetwallet":" Ritirare i tuoi guadagni ",
        "HISTORYISMY":" Cronologia ",
        "IDTRANSLATEWALLETU":" In corso ",
        "IDTRANSLATEWALLETX":" Pagato ",
        "IDTRANSLATEWALLET":" Mi dispiace!",
        "IDTRANSLATEWALLETM":" Il trasferimento non è riuscito. Riprova più tardi.", 
        "IDTRANSLATEWALLET1":" Congratulazioni!",
        "IDTRANSLATEWALLET2":" Il trasferimento è stato completato con successo!",
        "TITLEWALLETID": " Portafoglio elettronico ",
        "IDTRANSLATEFOEMXX": " Inserisci solo lettere, i numeri non sono ammessi in questo campo.",
        "linkInput": " Copia qui il tuo link di affiliazione ",
        "TERMINATOR" :" COMPLETARE ",
        "PHOTOID" :" Foto ",
        "TERMINATORW" :" È TUTTO FINITO ",
        "PHOTOIDW" :"FOTO",
        "STEPS14":" Fase 1 - 4",
        "STEPS23":" Fase 2 - 4",
        "STEPS34":" Fase 3 - 4",
        "STEPS44":" Fase 4 - 4",
        "IDTRANSLATEPROFIL29FILE" :" Vuoi inviare questa immagine?", 
        "IDTRANSLATEPROFIL29FILE1" :" Ritorno ",
        "IDTRANSLATEPROFIL29FILE2" :" Sì ",
        "IDTRANSLATESIGNUP19OPTIONSERROR" :" Si è verificato un errore durante la richiesta di geolocalizzazione.",
        "IDTRANSLATESIGNUP19OPTIONS" :" Ci dispiace informarti che non puoi utilizzare i nostri servizi fino a quando la tua geolocalizzazione non viene accettata.",
        "IDTRANSLATESIALERT1" :" informazione ",
        "IDTRANSLATESIALERT2" :" Cari visitatori, al fine di garantire la vostra sicurezza e combattere gli annunci falsi, illicolove individua il vostro paese di residenza.",
        "IDTRANSLATESIALERT3" :" Sì, lo sto facendo!",
        "IDTRANSLATESIALERT4" :" Negato ",
        "CONTRACTID1":` Contratto di Affiliazione `,
        "CONTRACTID2":`      Tra: illicolove , in seguito denominato "il sito di incontri",
        e: ME, qui di seguito denominato "l'Affiliato".`,
        "CONTRACTID3":` Oggetto `,
        "CONTRACTID4":` Il presente contratto di affiliazione ha lo scopo di regolare il rapporto tra illicolova e l'Affiliato in relazione al programma di affiliazione del sito di incontri <a href="https://illicolove.com">illicolove.com</a>`,
        "CONTRACTID5":`1. Programma di Affiliazione `,
        "CONTRACTID6":` Illicolove gestisce un programma di affiliazione online per promuovere i suoi servizi di incontri d'amore.`,
        "CONTRACTID7":`2. Ruolo dell'Affiliato `,
        "CONTRACTID8":` L'Affiliato si impegna a promuovere i servizi del sito di incontri utilizzando link di affiliazione unici forniti da illicolove, nonché altri mezzi promozionali approvati dal sito.`,
        "CONTRACTID9":`3. Remunerazione dell'Affiliato `,
        "CONTRACTID10":`3.1. L'Affiliato riceverà una commissione di 100 F FFS per ogni nuovo membro che si iscrive al sito <a href="https://illicolove.com">illicolove.com</a> tramite il link unico di affiliazione dell'Affiliato e pubblica un annuncio di ricerca amorosa.`,
        "CONTRACTID11":`3.2. Inoltre, l'Affiliato riceverà una commissione del 10% su ogni acquisto effettuato dai membri indirizzati tramite il suo link di affiliazione.`,
        "CONTRACTID11X":`3.3 La commissione di 100F CFA sarà riscossa solo quando il nuovo membro procede ad un acquisto di unità superiore a 100F CFA, al fine di evitare le frodi in commissione.`,
        "CONTRACTID12":`4. Pagamento da parte della Commissione `,
        "CONTRACTID13":` Illicolove verserà la commissione dell'Affiliato su base regolare trimestrale su richiesta tramite mobile money o bonifico bancario , a scelta dell'Affiliato. Le spese di rimborso sono a carico dell'Affiliato.`,
        "CONTRACTID14":`5. Durata del contratto `,
        "CONTRACTID15":` Il presente contratto di affiliazione entrerà in vigore alla data della sua accettazione da parte dell'Affiliato e rimarrà in vigore fino alla risoluzione da parte di una delle parti, con un preavviso scritto di trenta (30) giorni.`,
        "CONTRACTID16":`6. Risoluzione `,
        "CONTRACTID17":` Illicolove o l'Affiliato può rescindere il presente Accordo in qualsiasi momento fornendo preavviso scritto all'altra parte. Eventuali commissioni non pagate saranno pagate in conformità con i termini del presente contratto.`,
        "CONTRACTID18":`7. Legge Applicabile `,
        "CONTRACTID19":` Il presente contratto è disciplinato dalle leggi del Benin e qualsiasi controversia derivante dal presente contratto, se non risolta in via amichevole, sarà soggetta alla giurisdizione esclusiva dei tribunali commerciali di Cotonou.`,
        "ANNONCEAFFILIATEID" : `        <div class="box--list__items">
        <div class="box--list__item" style="  padding-top: 0 !important; margin-top: 0 !important;">
            <h2 class="box--list__title box--list__titlex" > Guadagna denaro aiutando le persone a trovare l'amore su illicolove!</h2>
            <p class="box--list__ descrizione ">Cerchi un'opportunità di affiliazione redditizia? Unisciti al nostro esclusivo programma di affiliazione e aumenta le tue entrate aiutando gli altri a trovare la loro anima gemella. Ecco come funziona : <br>
              ✅ Ricevete 100 F FFS per ogni nuovo membro che si iscrive e che pubblica un annuncio di ricerca amorosa sul nostro sito tramite il vostro link di affiliazione. <br>

              ✅ Inoltre, ottieni il 10% di commissione su ogni acquisto effettuato dai membri che hai inviato. Più spendono, più guadagni!</p>
        </div>
        
        <div class="box--list__item">
            <h2 class="box--list__title box--list__titlex"> Perché scegliere il nostro programma di affiliazione?</h2>
            <div class="box--list__ descrizione ">
              ✅ Guadagna non appena qualcuno si registra, e pubblica il suo annuncio di ricerca. <br>
              ✅ Ottieni una commissione continua ogni volta che i tuoi affiliati effettuano un acquisto sul nostro sito. <br>
              ✅ Raggiungi un pubblico in cerca di amore, una nicchia eccitante e in costante crescita. <br>
              
            </div>
        </div>
        
        <div class="box--list__item">
            <h2 class="box--list__title"> Partecipa al nostro programma </h2>
            <div class="box--list__ descrizione ">✅  Unisciti al nostro programma di affiliazione oggi e inizia a fare soldi aiutando le persone a trovare l'amore su illicolove ! 💑
              
             </div>
        </div>
        <div class="box--list__item">
          <h2 class="box--list__title"> Iscriviti.</h2>
          <div class="box--list__ descrizione "> 
            ✅ Registrati ora e aumenta i tuoi guadagni: <a href="./v/login/signup.html"> iscrizione </a>
              
            Per qualsiasi domanda, contattaci a info@illicolove.com </div>
      </div>
    </div>`,
          "IDTRANSLATE6WX":` Lingue <span> <i class="bi bi-globe2"></i></span> <i class="bi bi-chevron-down"></i> `,
        }

      },
      jp:{
        translation : {
          "IDTRANSLATE1": "ホーム",
         // "IDTRANSLATE2": "À propos",
          "IDTRANSLATE3": `どのように動作しますか？`,
          "IDTRANSLATE4": `規約`,
          "IDTRANSLATE5":"利用規約",
          "IDTRANSLATE6":"プライバシーポリシー",
          "IDTRANSLATE6X":"当社の提携システム",
          "IDTRANSLATE7":"お問い合わせ",
          "IDTRANSLATE8":"登録する",
          "IDTRANSLATE9":"ログインする",
          "IDTRANSLATECONTACT1":"お問い合わせ",
          "IDTRANSLATECONTACT2":"お問い合わせください",
          "IDTRANSLATECONTACT3":"住所",
          "IDTRANSLATECONTACT4":'電話',
          "IDTRANSLATECONTACT5":"電子メール", 
          "IDTRANSLATECONTACT6":"ソーシャルメディア",
          "IDTRANSLATETITLE":"プロフィール",
          "IDTRANSLATETITLEFORM":"フォーム",
          "IDTRANSLATE1INF1":`あなたのメールアドレスはBAKO FAMILIA&COMPANYによって収集および処理され、illicolove Webサイトの新機能と更新について通知されます。
          ベナン共和国のデジタルコードに関する法律2017-20の適用において、個人データの保護に関して、アクセス、異議申し立ての権利の登録を解除または行使することができます, info@illicolove.comにメールを送信して修正および削除`,
          "IDTRANSLATE10":"illicolove,",
          "IDTRANSLATE11":`独身と孤独と戦うためのあなたの出会い系プラットフォーム。`,
          "IDTRANSLATE12":`私たちは不本意な孤独を人道上の問題と見なし、それに苦しむ人々に解決策を提供することを約束します。`,
          "IDTRANSLATE13":`無料で登録`,
          "IDTRANSLATE13KLM":`あなたのプロフィールに移動`,
         // "IDTRANSLATE14":`À propos de nous`,
         // "IDTRANSLATE15":`Votre plateforme de rencontres en ligne illicolove.com vous est proposée par les Établissements BAKO FAMILIA & COMPANY, une entreprise individuelle(EI) de droit béninois immatriculée au Registre du Commerce et du Crédit Mobilier RCCM RB/COT/08/A4101 ; à l’Identifiant Fiscal Unique (IFU) 3200800938610.`,

         // "IDTRANSLATE16":`Elle a pour activités, le Wedding planning (accompagnement dans l’organisation de mariage), le Tourisme-Loisirs, l’organisation de foires et Salons. Elle a été créée en Mai 2008 à Cotonou. `,
         // "IDTRANSLATE17":`Plus de détails`,
          "IDTRANSLATE18":`我々の目標`,
          "IDTRANSLATE19":`第16条`,
          "IDTRANSLATE20":`ターゲット`,

          "IDTRANSLATE17USER":`地域の選択`,
          "IDTRANSLATE18USER":`ユーザーの詳細`,
          "IDTRANSLATE19USER":`プロフィール`,

          "IDTRANSLATE21":`このオンライン出会い系プラットフォームの実装は、独身と孤独と戦うための私たちのイニシアチブに対応しています。
          それは、女性と男性の結婚の権利を想起させる第16条の世界人権宣言で定義された方針で私たちの行動を具体化し, 社会と国家によって保護されなければならない家族の重要性。`,
         "IDTRANSLATE22":`私たちの価値観:`,
         "IDTRANSLATE23":`、信頼性を`,
         "IDTRANSLATE24":`礼儀と`,
         "IDTRANSLATE25":`裁量。`, 
         "IDTRANSLATE26":` 成年に達した男性と女性は、人種、国籍、宗教に関する制約なしに結婚し、家庭を築く権利を有します。結婚、結婚中、および結婚の解消に関して平等の権利を有します。 `,
         "IDTRANSLATE27":` 結婚は、将来の配偶者の自由かつ完全な同意によってのみ成立するものとされます。`,
         "IDTRANSLATE28":` 家族は社会の自然で基本的な要素であり、社会および国家からの保護の権利を有します。  
孤独、独身、社会的孤立は、公共機関、団体、および関連企業にアピールする人道的な要請です。 慢性的で自発的でない孤独は、それに苦しむほとんどの人が沈黙の中で経験する個人的な悲劇です。 illicolove.comはこの文脈で生まれ、オンライン出会いのサービスを異なる方法で提供し、架空のプロフィールに対する確固たる対策をとることを目指しています。ようこそ！`,
         "IDTRANSLATE29":`私たちは個人のみを対象としています:`,
         "IDTRANSLATE30":` 18歳以上の若者。`,
         "IDTRANSLATE31":`年齢を重ねた未婚者、絶望的な人々(男性および女性)、がっかりした人々。`,
         "IDTRANSLATE32":`離婚した人々（男性および女性）`,
         "IDTRANSLATE33":`未亡人と寡夫（男性および女性）`,
         "IDTRANSLATE34":`ユーザー`,
         "IDTRANSLATE35":`すべてのユーザー`,
         "IDTRANSLATE36":`アフリカで`,
         "IDTRANSLATE37":`ヨーロッパで`,
         "IDTRANSLATE38":`世界の他の国々`,
        // "IDTRANSLATE39":`Notre équipe`,
        // "IDTRANSLATE40":`Directrice`,
        // "IDTRANSLATE41":`Relectrice, et Responsable marketing`,
        // "IDTRANSLATE42":`Développeur et SEO`,


         "IDTRANSLATEX1":`使用手順`,
         "IDTRANSLATEX2":` illicoloveのしくみは次のとおりです。`,
         "IDTRANSLATEX3":`登録`,
         "IDTRANSLATEX4":`登録すると、illicoloveは295フランCFA（約72.13円）の価値のあるユニットを3つ提供します。
         1単位は95 CFAフランまたは23.23円です。`,
         "IDTRANSLATEX5":`接続`,
         "IDTRANSLATEX6":` illicoloveに接続すると、登録ユーザー用に予約されているすべての機能とサービスにアクセスできます。`,
         "IDTRANSLATEX7":`広告を掲載する`,
         "IDTRANSLATEX8":`広告を投稿する」ボタンをクリックすると、居住地に応じて「アフリカ」ページ、または「ヨーロッパ」ページ、または「その他の国」ページのいずれかに広告を投稿することができます。表示される検索フォームに必要事項を入力するだけです。`,




         "toopenPUAID":`続き...`,
         "openPUA":`お住まいの地域のページに広告を投稿するようお勧めいたしますが、通常の地域外の検索広告のプロフィールを参照し、問い合わせすることも可能です。たとえば、フランスに住んでいる場合、広告を「ヨーロッパ」ページに投稿し、他のページである「アフリカ」、「ヨーロッパ」、「その他の国」の広告を参照し、問い合わせることができます。
検索フォームの記入と送信が完了すると、お客様の広告は最大24時間以内に表示されます。再審査と必要に応じた確認を行い、お客様のプロフィールが信頼性があると判断した場合、私たちの承認後、お客様に直接連絡いたします。身元情報についての詳細情報、音声またはビデオ通話の要請が行われるかもしれません。このため、広告の承認と表示には24時間以上かかる場合があります。広告の公開スピードはお客様次第です。我々は虚偽の広告、非現実的な広告、そして偽のプロフィールを事前通告なしに徹底的に排除します。
illicolove.comのサービスを利用する上で何か問題がある場合は、info@illicolove.comまでお問い合わせいただければと思います。
`,
          "IDTRANSLATEX9":`ユーザーアカウントの検証`,
          "IDTRANSLATEX10":`フォームに記入し、“ SEND ”をクリックします。24時間以内にフォームを確認および検証します。確認メッセージが届きます。追加のチェックが必要な場合は、メールでお知らせします。`,
          "IDTRANSLATEX11":`広告を表示する`,
          "IDTRANSLATEX12":` “広告を表示”ボタンは、他の3つのボタンにつながります。アフリカ(アフリカ広告)、ヨーロッパ(ヨーロッパ広告)、その他の世界諸国(アフリカおよびヨーロッパ外の広告)。illicoloveであなたの人生の男性または女性に会うことは、おそらく95 CFAフランまたは23.23円の費用がかかります。
          これは、特に注意を引くプロファイルの“ Contact me ”ボックスをクリックしたときに、各ユニットに対して支払う金額です。`,
          "IDTRANSLATEX13":`ユニットの購入`,
          "IDTRANSLATEX14":`アカウント( My Plan )を都合の良いときにリロードして、公開された広告間の会議の検索を続けることができます。サインアップするとすぐに取得する個人のデビットクレジットアカウントでは、選択した支払い方法を使用してアカウントを補充できます。illicoloveの請求通貨はCFAフラン( XOF )です。 1円= 4 XOF。`,
          "IDTRANSLATEX15":`よくある質問。`,
          "IDTRANSLATEX16":` illicoloveで素敵な会議を開くことはできますか?`,
          "IDTRANSLATEX17":` はい、検索フォームに記入し、自分に関する真の情報を提供する限り。`,




          "IDTRANSLATEX18":`あなたの出会い系サイトは支払っていますか?`,
          "IDTRANSLATEX19":` はい、あなたの興味を保持しているプロファイルの連絡先アドレスを参照するためだけに。`,
          "IDTRANSLATEX20":`私に魅力的で興味を持っているプロフィールの連絡先を参照するのはいくらですか？`,
          "IDTRANSLATEX21":`95 FCFAまたは23円。`,
          "IDTRANSLATEX22":` あなたの出会い系サイトは無料ですか?`,
          "IDTRANSLATEX23":`はい、あなたの愛の検索広告の登録と公開はillicoloveで無料です。`,
          "IDTRANSLATEX24":` 会議広告を投稿するにはどうすればよいですか?`,
          "IDTRANSLATEX25":` illicoloveに登録したら、ボタンまたはタブ« PUBLISH AN AD »をクリックします。次に、表示されるページで、通常の居住大陸に対応する大陸の名前を選択します。最後に、表示および送信される検索フォームに記入します。`,
          "IDTRANSLATEX26":` アフリカに住んでいて、アフリカ外に住んでいる人に連絡できますか?`,
          "IDTRANSLATEX27":`はい`,
          "IDTRANSLATEX28":`ヨーロッパに住んでいて、ヨーロッパ外に住んでいる人に連絡できますか?`,
          "IDTRANSLATEX29":`はい`,
          "IDTRANSLATEX30":`私はヨーロッパに住んでいますが、「アフリカ」および「その他の国々」ページに検索広告を投稿できますか？`,
          "IDTRANSLATEX31":`いいえ！ お住まいの大陸に対応するページにのみ検索広告を投稿してください。`,
          "IDTRANSLATEX32":` illicoloveアカウントをモバイルマネーでチャージできますか?`,
          "IDTRANSLATEX33":`はい`,
          "IDTRANSLATEX34":` あなたのサイトのサブスクリプション価格はいくらですか?`,
          "IDTRANSLATEX35":` illicoloveのサブスクリプションはありません。`,
          "IDTRANSLATEX36":` デビットクレジットアカウントを補充するにはどうすればよいですか?`,
          "IDTRANSLATEX37":`複数の決済アグリゲーターによる安全な支払いシステムを提供しています。ご自身の便宜に合わせて、クレジットカードまたはモバイルマネーでアカウントをリチャージできます。個人のダッシュボード上のプロフィールに移動し、緑色の「アカウントをリチャージ」ボタンをクリックし、簡単なステップに従ってください。`,
          "IDTRANSLATEX38":`検索広告を公開するために支払う必要がありますか?`,
          "IDTRANSLATEX39":`いいえ！ 検索広告の投稿は無料です。`,
          "IDTRANSLATEX40":`広告を見るために支払う必要がありますか?`,
          "IDTRANSLATEX41":`いいえ、広告の閲覧は無料です。連絡先情報を入手することが有料です。`,
          "IDTRANSLATEX42":` ユニットの購入方法はどのようになっていますか？`,
          "IDTRANSLATEX43":` 登録時に、お客様は自動的かつ無料で3つのクレジットユニットを受け取り、選択した広告内の3つの連絡先情報を参照できます。各ユニットの価値は95 FCFA、または23.23円です。 ユニットが枯渇すると、お客様の便宜と能力に応じて購入することができます。購入できるユニットの量は1つから希望の数までです。`,
          "IDTRANSLATEX44":` 購入したユニットに有効期限はありますか？`,
          "IDTRANSLATEX45":`いいえ！ お持ちのユニットは期限がありません。`,
          "IDTRANSLATEX46":`私はあなたの出会い系サービスを楽しむために購読しなければなりませんか?`,




          "IDTRANSLATEX47":` illicoloveでは、オプションのニュースレターへのサブスクリプションを除いて、当社のサービスを楽しむためのサブスクリプションはありません。`,
          "IDTRANSLATEX48":` illicolove.comのプライバシーポリシーは何ですか?`,
          "IDTRANSLATEX49":`私たちはあなたの情報のプライバシーを大切にします。お客様の個人データは安全であり、お客様の同意なしに第三者と共有されることはありません。詳細については、プライバシーポリシーを参照してください`,
          "IDTRANSLATEX50":`ここに`,
          "IDTRANSLATEX51":` アカウント検証メールはどこにありますか?`,
          "IDTRANSLATEX52":` アカウント検証メールがスパムフォルダーにある可能性があります。メールプロバイダーのセキュリティフィルターは、検証メールをこれらのフォルダーに直接送信して保護することがあります。スパムフォルダを確認し、メールが「スパムなし」としてマークされていることを確認してください。それでも検証メールが見つからない場合は、サポートにお問い合わせください。`,
          "IDTRANSLATETCU1":`利用条件`,
          "IDTRANSLATETCU2":` BAKO FAMILIA&COMPANYが提供するオンライン出会い系プラットフォームであるillicolove.comへようこそ。当サイトを使用することにより、以下に説明する条件に同意したことになります。`,
          "IDTRANSLATETCU3":`記事1:目的`,
          "IDTRANSLATETCU4":`これらの«利用規約»の目的は、illicolove.comとそのサービスを使用するための法的枠組みです。`,




          "IDTRANSLATETCU5":`この契約は、次の間で締結されます:`,
          "IDTRANSLATETCU6":` BAKO FAMILIA&COMPANYウェブサイトの所有者(以下、«パブリッシャー»と呼びます)、およびウェブサイトとそのサービスへのアクセスを希望する自然人, 以下、«ユーザー»と呼びます。一般的な使用条件はユーザーが受け入れる必要があります。また、サイトへのアクセスはこれらの条件に同意したことになります。
          これらの利用規約では、単数形または複数形で使用されているかどうかにかかわらず、次の表現または単語が次の意味を持つことに同意しています:`,
          "IDTRANSLATETCU7":`検索広告:サイトのユーザーまたは訪問者の、私たちのフォームを介したテキストの形式での、彼の顔を表す1つ以上の写真を伴うか伴わない出版物を指します。`,
          "IDTRANSLATETCU8":`恋愛サービス：ユーザーがウェブサイト上で公開された検索広告、プロフィール、ハイパーリンク、テキスト、画像、ビデオ、および「クリックして表示」を通じた連絡先またはアドレスへのアクセスを指します。`,
          "IDTRANSLATETCU9":`表示するためにクリック」は、事前に検索広告を出した他のユーザーと連絡を取るための選択した方法、電子メールアドレス、電話番号などを表示する機能を指します。この重要な情報を取得できるこの機能は有料です。1回のクリックごとに95フランCFまたは約23円かかります。`,
         "IDTRANSLATETCU10":`記事2:法的通知`,




         
         "IDTRANSLATETCU11X":` BAKO FAMILIA & COMPANY」は、ウェブサイトillicolove.comの発行元です。 この会社はベナンの個人事業で、所在地はAgblangandanのロット124です。 2008年5月29日に設立され、商業および移動可能な貸借権登記簿（RCCM）RB/COT/08/A4101に登録されています。 また、独自の税務識別番号（IFU）「番号：3200800938610」も取得しています。 この会社は Gildas Ghislain GANGBAZO によって代表されています。`,
        "IDTRANSLATETCU11":`記事3:サービスへのアクセス`,
        "IDTRANSLATETCU12":` illicolove.comのユーザーは、次のサービスにアクセスできます:`,
        "IDTRANSLATETCU13":`個人アカウントの作成`,
        "IDTRANSLATETCU14":`フォームを介して検索広告を作成し、無料で公開します`,
        "IDTRANSLATETCU15":`他のユーザーが公開した検索広告の表示`,
        "IDTRANSLATETCU16":`Click to showをクリックして表示することで、自分の都合に合わせて無制限に興味を持つプロフィールの連絡先情報を有料で取得することができます" (「Click to show」をクリックして表示することで、自分の都合に合わせて無制限に興味を持つプロフィールの連絡先情報を有料で取得することができます) `,
        "IDTRANSLATETCU17":`パーソナライズされたサービスのリクエストをリクエストするためにパブリッシャーに連絡する可能性`,
        "IDTRANSLATETCU18":` インターネットにアクセスできるユーザーは、無料でどこからでもサイトにアクセスできます。ユーザーがアクセスするために負担する費用(インターネット接続、コンピューター機器など)は、パブリッシャーの責任ではありません。 上記のサービスは、ユーザーがサイト(のメンバーである場合にのみユーザーがアクセスできます。つまり、ログイン資格情報)を使用して識別されます: 
        サイトとそのさまざまなサービスは、特にメンテナンス中に、通知または正当化の義務なしに、パブリッシャーによって中断または一時停止される場合があります。`,
        "IDTRANSLATETCU19":`第4条:ユーザーの責任`,
        "IDTRANSLATETCU20":` ユーザーは、ログインとパスワードの使用に関連するリスクについて責任を負います。 ユーザーのパスワードは秘密にしておく必要があります。パスワードの開示の場合、パブリッシャーはすべての責任を拒否します。ユーザーは、illicolove.com Webサイトにある情報とコンテンツの使用について全責任を負います。
        直接的または間接的に損害をもたらすユーザーによるサービスの使用は、サイトの利益のために補償されなければなりません。
        このサイトでは、“ Post Ad ”フォームに記入して、ユーザーがサイトに検索広告を投稿できます。`,





        "IDTRANSLATETCU21":` ユーザーは信頼できる情報を提供し、わいせつな写真のない最近の写真を提案することを約束します, 他の人と法律を尊重し、出版社によってモデレートまたは拒否されたことが発表されたことを受け入れ、彼の検索基準に書き込みます, 虚偽のプロファイルを回避するための追加情報を彼に提供することを拒否した後に正当化する義務はありません。
        ユーザーは、サイトに広告を掲載することにより、ソーシャルネットワークで広告を表現、複製、改作、変更、普及、および配布する非独占的かつ自由な権利を出版社に付与します, または承認された第三者によって直接;その匿名性または選択された機密保持方法に従って。
        パブリッシャーは、ソーシャルネットワークに広告が配信された場合、ユーザーの匿名性を維持することを約束します。`,
        "IDTRANSLATETCU22":`第5条:出版社の責任`,
        "IDTRANSLATETCU23":`サーバーまたはネットワークの誤動作は、パブリッシャーの責任を問うことはできません。
        同様に、サイトの責任は、不可抗力または第三者の予測不可能で乗り越えられない事実の場合には関与できません。
        illicolove.com Webサイトは、データのセキュリティと機密性を確保するために必要なすべての手段を実装することを約束します。
        ただし、完全なセキュリティを保証するものではありません。
        出版社は、プロファイルの信頼性を保証しない権利を留保しますが
        サイトで公開されている検索広告は、パブリッシャーの校正および検証チームがバックオフィスで公開を検証する前に、信頼できるものとみなされ、検証されています。`,



        "IDTRANSLATETCU24":`第6条:知的財産`,
        "IDTRANSLATETCU25":` BAKO FAMILIA&COMPANYは、サイトwww.illicolove.comの商標、構造、およびコンテンツに関連するすべての知的財産権の独占所有者です。ウェブサイトwww.illicolove.comの内容は、完全に個人的で、私的ではなく、集団での使用を目的としており、無料でコンテンツを提供しています。RSSフィードとニュースレターにも同じことが当てはまります。当社の提携システムの外では、BAKO FAMILIA&COMPANYの明示的な同意がない限り、専門的または商業的状況での使用、またはこのコンテンツを第三者に販売することは禁止されています。`,
        "IDTRANSLATETCU26":`第7条:個人データ。`,
        "IDTRANSLATETCU27":`「プライバシーポリシー、個人データ、およびクッキーに関する情報はこちらでご確認いただけます」 <a href="politique.html"><i class="bi bi-arrow-right-circle"></i></a>`,
        "IDTRANSLATETCU29":`記事8:ハイパーリンク`,
        "IDTRANSLATETCU30":` サイトのハイパーテキストリンクがリードするドメインは、これらのリンクを制御できないパブリッシャーBAKO FAMILIA&COMPANYの責任ではありません。 パブリッシャーはサービスプロバイダーとのパートナーシップを確立しており、他のサイトやサービスに関するユーザー情報を提供する場合があります/または、これらのサイトへのハイパーテキストリンクの存在によって。サードパーティのサイトにリダイレクトするこれらのハイパーテキストリンクは、パブリッシャーによって開発されておらず、それに属していません。したがって、パブリッシャーは、これらのサイト、それらのコンテンツ、広告、製品、またはこれらのサイトで利用可能なサービスについて責任を負いません。さらに、出版社は、これらの第三者によって行われた情報、意見、および推奨事項について責任を負うことはできません。 `,



        "IDTRANSLATETCU31":`出版社は、結果的または結果的、または使用に関連して、またはコンテンツに依存していることが証明または申し立てられた損害または損失について責任を負わないものとします, これらのパートナーサービスまたは外部ソースで利用可能な商品またはサービス。 これらのリンクをアクティブにする決定は、ユーザーの完全な責任です。
        パブリッシャーはこれらのサイトの可用性について責任を負わず、コンテンツを制御したり、これらのWebサイトに表示される広告、製品、その他の情報を検証したりすることはできません。サードパーティは、パブリッシャーの明示的な許可なしに、サイトillicolove.comのページへのリンクを作成できます。`,
        "IDTRANSLATETCU32":`第9条:特別な警告`,
        "IDTRANSLATETCU33": `インターネット上の仮想生活のように、現実には、正直な人々や悪意のある詐欺師の道を渡ることができます。
        現実の世界やインターネット上の仮想世界でも特定のセキュリティ態度を採用するのは、私たち次第です。BAKO FAMILIA&COMPANYは、次のことを勧めています:`,
        "IDTRANSLATETCU34":` このサイトで出会った見知らぬ人にお金を送らないでください。そしてどんな状況でも。`,
        "IDTRANSLATETCU35":`このサイトで出会った連絡先に親密な写真を送らないでください`,




        "IDTRANSLATETCU36":`誰かがその地域に住んでいると主張しているが海外で働いているときは、警戒してください。`,
        "IDTRANSLATETCU37":` 愛する人が病気で、あなたの仮想特派員が彼に様々な料金を支払うのを手伝うように頼む緊急の状況の口実の下で決して屈服しないでください。このような場合は、これらの詐欺師のプロフィールを出版社に報告してください。`,
        "IDTRANSLATETCU38":` illicolove.comの新興関係は、トラブルや経済的サポートの原因にはなりません。見知らぬ人があなたに会うことができずにあなたに彼の愛を宣言するとき、大きな不信を示してください。そして、肉体的な出会いの後でも, 現金で多額の支出を行う前に、必要な時間をかけてください。`,
        "IDTRANSLATETCU39":`常に最初の会議のために公共の場所を選択してください。`,
        "IDTRANSLATETCU40":`あなたが今会った未知の人と一緒にいるとき、あなたの立場を愛する人に常に報告してください。`,
        "IDTRANSLATETCU41":`製品やサービスの販売試み、プロフィールが私たちのプライバシー保護対策にもかかわらず偽物であること、脅迫、嫌がらせ、不適切な発言、同性愛者差別、虐待、攻撃的な発言、未成年者のメッセージ、金銭的な援助やプライベートな写真の要求を報告してください。`,
        "IDTRANSLATETCU42":` したがって、ユーザーは、デートの発表を読んだ後に取られたすべてのアクション、および一般にサイト上の情報について完全に責任を負うことを認め、遠慮なく同意します。そのようなデータの提供は、特定の助言または意思決定支援として決して扱われてはならない。ユーザーは、実生活とインターネットの両方でのデートのランダム性を十分に認識しています。`,

        "IDTRANSLATETCU43":` 第10条:1年間の非活動後のデータの削除。`,
        "IDTRANSLATETCU44":`セキュリティ上の理由から、サイトで1年間認証されていない場合、できるだけ早くログインするように求めるメールが届きます, それ以外の場合、プロファイルはデータベースから削除されます。`,




        "IDTRANSLATETCU45":`第11条：アカウントの削除要求`,
        "IDTRANSLATETCU46":`ユーザーは、パブリッシャーへの簡単なリクエスト、または該当する場合はアカウント設定にあるアカウント削除メニューによって、いつでもアカウントを削除することができます。`,
        "IDTRANSLATETCU47":`第12条:GCUに違反した場合のプロファイルの削除`,
        "IDTRANSLATETCU48":` CGUに違反する場合、または参照文書のいずれかに違反する場合、運営者は事前の通知なしに、自己の裁量で、サービスへのアクセス、アカウント、および関連するすべてのウェブサイトの使用を終了または制限する権利を留保します。`,
        "IDTRANSLATETCU49":`第13条:発行者がセキュリティ違反を検出した場合の表示。`,
        "IDTRANSLATETCU50":`私たちは、偶発的、不正、または違法なアクセス、開示、変更のリスクに適切なレベルのセキュリティを確保するために、すべての適切な技術的および組織的対策を実施することを約束します, 個人データの損失または破壊。`,
        "IDTRANSLATETCU51":`貴殿の個人データに対する当社のサーバーまたは提供業者のサーバーへの不正なアクセス、または上記のリスクが実現する不正なアクセスの発覚時には、次の取り決めを守ることを約束いたします：`,





        "IDTRANSLATETCU52":`インシデントの原因を確認して通知する(公開レポート);`,
        "IDTRANSLATETCU53":`インシデントから生じる可能性のある悪影響や危害を最小限に抑えるために合理的な措置を講じます。`,
        "IDTRANSLATETCU54":`第14条:責任の制限`,
        "IDTRANSLATETCU55":`いかなる状況においても、セキュリティ違反が発生した場合の通知に関連して上記の点で定義されたコミットメントは、障害の発生または責任の認識と見なすことはできません 問題の事件。`,
        "IDTRANSLATETCU56":`第15条:契約期間`,
        "IDTRANSLATETCU57":`この契約の期間は無期限です。契約は、サービスの使用開始からユーザーに関して有効です。`,
        "IDTRANSLATETCU58":`第16条:適用される法律と管轄`,
        "IDTRANSLATETCU59":`これらのGTUの言語はフランス語であり、別の言語に翻訳されたすべてのバージョンに優先されます。この契約は、ベナン共和国のデジタルコードに関する2018年4月20日の法律No. 2017-20を含む、ベネシアの法律に依存しています。適用法の選択は、居住地の適用法に従って消費者としてのあなたの権利に影響を与えません。`,
        "IDTRANSLATETCU60":`あなたが消費者である場合、あなたと私たちはベネチアの裁判所の非独占的管轄権に従うことに同意します。ユーザーとパブリッシャーの間で未解決の紛争が発生した場合、コトヌーの商業裁判所は紛争を解決する権限があります。`,
        "IDTRANSLATEPC1":`機密保持ポリシー`,
        "IDTRANSLATEPC2":`法的通知`,




        "IDTRANSLATEPC3":`これらの法的通知とプライバシーポリシーは、BAKO FAMILIA&COMPANYがお客様に送信する情報を使用および保護する方法を提供し、啓 ⁇ します, URLからアクセスできる出会い系サイトを使用する場合:www.illicolove.com。`,
        "IDTRANSLATEPC4":`私たちのプライバシーポリシーは、立法、規制、法学、または技術の変更に準拠することを含め、いつでも修正および/または補足される場合があります。このような場合、更新の日付はこのポリシーに示されます。これらの変更は、オンラインになるとすぐにユーザーをコミットします。
        したがって、変更を認識するために、これらの通知とプライバシーポリシーを定期的に参照することをお勧めします。`,
        "IDTRANSLATEPC5":` 個人データ保護機関への宣言( APDP )`,
        "IDTRANSLATEPC6":`ベナン共和国の2017-20号法令（2018年4月20日制定）に従い、www.illicolove.comウェブサイトは個人情報とプライバシーの保護に関する第5部に関連し、個人情報保護機関（apdp.bj）にSA-TDP-00601番号で登録されました。`,
        "IDTRANSLATEPC7":`いずれの場合も、BAKO FAMILIA&COMPANYは、ユーザーの個人情報を、そのWebサイトが提供する出会い系サービスの目的でのみ収集します。ユーザーは、特に自分で入力したときに、事実についての完全な知識をこの情報に提供します。`,





        "IDTRANSLATEPC8":`ベナン共和国のデジタルコードに関する法律2017-20の規定に従い、ユーザーは彼に関する個人データにアクセスし、修正し、反対する権利を有します, 文書の所有者が署名した身分証明書のコピーを添えて、書面および署名された要求を行い、回答を送信する必要があるアドレスを指定します。当社のウェブサイト« www.illicolove.com »のユーザーの個人情報は、知らないうちにメディアまたはサードパーティに公開、転送、または販売されることはありません。`,
        "IDTRANSLATEPC9":`データの機密`,
        "IDTRANSLATEPC10":`お客様の個人データは機密情報であり、第三者に伝達されることはありません。 私たちの出会い系サービスの私的な性質は、ランクや品質に関係なく、個人データ(の名前、連絡先、住所など)を個人に伝えることを許可しません。`,
        "IDTRANSLATEPC11": `アクセス権`,
        "IDTRANSLATEPC12":`ベナン共和国のデジタルコード法の規定の適用において、当社のウェブサイトwww.illicolove.comのユーザーは、アクセス、修正, 彼に関する個別のデータに関連する変更と削除。この権利は、電子メールで次の電子メールアドレスに送信された要求に応じて、所有者が行使することができます:info@illicolove.com。収集された個人情報は第三者に委託されません。`,
        "IDTRANSLATEPC13":`修正の権利`,






        "IDTRANSLATEPC14":`ベナン共和国のデジタルコード法に従い、当社のウェブサイトwww.illicolove.comのユーザーは、彼に関するデータの修正、更新、削除、ロック、または消去を要求できます, そして、不正確、誤っている、不完全、曖昧、または時代遅れである可能性があります。`,
        "IDTRANSLATEPC15":`貯蔵寿命。`,
        "IDTRANSLATEPC16":`お客様の個人データは、デートサービスの必要性に対応する期間のみBAKO FAMILIA&COMPANYによって保持されます。ただし、ユーザーアカウントで非アクティブの場合、この保持期間は13 ( 13 )月を超えません。`,
        "IDTRANSLATEPC17":`所管官庁への苦情`,
        "IDTRANSLATEPC18":` BAKO FAMILIA&COMPANYが、ウェブサイトwww.illicolove.comへのアクセス中に収集された個人データに関する義務を尊重していないと考える場合は、対処できます, 法的手続き、苦情、または個人データ保護局への要求で規定されているとおり( APDP )。`,
        "IDTRANSLATEPC19":`知的財産`,
        "IDTRANSLATEPC20":`グラフィック、画像、テキスト、ビデオ、アニメーション、サウンド、ロゴを含むがこれらに限定されない、このWebサイトのすべてのコンテンツ, gifとアイコン、およびそれらのフォーマットは、他のパートナー企業または著者に属する商標、ロゴ、またはコンテンツを除いて、BAKO FAMILIA&COMPANYの独占的財産です。
        これらのさまざまな要素の複製、配布、変更、改作、再送信、または公開は、部分的であっても、BAKO FAMILIA&COMPANYの書面による明示的な同意なしに固く禁じられています。`,
        "IDTRANSLATEPC21":`利用規約`,
        "IDTRANSLATEPC22":` ウェブサイトwww.illicolove.comは、英語、スペイン語、ドイツ語、ポルトガル語、ロシア語、北京語(中国語)、アラビア語、日本語、イタリア語、韓国語でご利用いただけます。使いやすいように、Chrome、Safari、Firefoxなどの互換性のある最新のブラウザーを使用することをお勧めします。`,
        "IDTRANSLATEPC23":`情報と提案`,







        "IDTRANSLATEPC24":` BAKO FAMILIA&COMPANYは、信頼できる出会い系サービスとWebサイトwww.illicolove.comの永続的な更新を確実にするために、所有するすべての手段を実装しています。ただし、エラーや脱落が発生する場合があります。その結果、ユーザーはinfo@illicolove.comに提案や情報を送信し、関連すると思われるサイトへの変更を示すことができます。`,
        "IDTRANSLATEPC25":`クッキー`,
        "IDTRANSLATEPC26":`技術的なパフォーマンス、統計、表示の目的で、ウェブサイトwww.illicolove.comはCookieを使用する場合があります。Cookieは端末に保存されている小さなテキストファイルであり、ユーザーの識別はできませんが、Webサイトでの端末のナビゲーションに関する情報を記録します。このサイトの一部は、Cookieを受け入れずに機能することはできません。このようにして得られたデータは、このサイトでのその後のナビゲーションを容易にすることを目的としています。クッキーは、さまざまな聴衆や出席者数にも使用されます。`,
        "IDTRANSLATEPC27":` Cookieのインストールを拒否すると、特定の機能にアクセスできなくなる場合があります。ただし、このWebサイトのユーザーは、以下に示すように、Cookieのインストールを拒否するように端末を構成できます:`,
        "IDTRANSLATEPC28":` Safariユーザー:Safariの設定を選択し、[プライバシー]をクリックして、“ CookieおよびWebサイトデータ”オプションを選択します。常にブロック:Safariでは、Webサイト、サードパーティ、または広告主がCookieやその他のデータをMacに保存することはできません。これにより、一部のWebサイトが適切に機能しない場合があります。`,





        "IDTRANSLATEPC29":` Safariユーザー:Safariの設定を選択し、[プライバシー]をクリックして、“ CookieおよびWebサイトデータ”オプションを選択します。常にブロック:Safariでは、Webサイト、サードパーティ、または広告主がCookieやその他のデータをMacに保存することはできません。これにより、一部のWebサイトが適切に機能しない場合があります。`,
        "IDTRANSLATEPC30":` Google Chromeユーザー:メニュー;設定;ページの下部にある詳細設定(を表示します)。         次に、[コンテンツ設定]ボタンをクリックして、[サードパーティのサイトからのCookieとデータをブロック]チェックボックスをオンにし、[OK]をクリックして選択を検証します。`,
        "IDTRANSLATEPC31":` Internet Explorerユーザー:[インターネットオプション]メニューの[プライバシー]タブと[詳細設定]ボタンで[詳細プライバシー設定]ウィンドウを表示します。次に、[自動Cookie管理を無視]チェックボックスをオンにし、[サードパーティのCookie]列で[拒否]を選択します。`,
        "IDTRANSLATEPC32":` Microsoft Edgeユーザー:ツール/インターネットオプションタブ。[プライバシー]をクリックし、[すべてのCookieをブロック]を選択します。`,




        "IDTRANSLATEPC33":`関連する慣行によれば、一部のCookieは、このWebサイトの運用に不可欠である限り、事前の同意の収集が免除されます。彼らの目的は電子通信を促進することです。これらには、セッションID、インターフェイスの認証とカスタマイズのためのCookieが含まれます。これらのCookieはBAKO FAMILIA&COMPANYによって発行および管理され、すべてこのポリシーの対象となります。`,
        "IDTRANSLATEPC34":`ハイパーリンク`,
        "IDTRANSLATEPC35":`ウェブサイト“ www.illicolove.com ”は、インターネットで入手可能な他のウェブサイトまたはリソースへのリンクを提供する場合があります。BAKO FAMILIA&COMPANYには、Webサイトに接続されているサイトを制御する手段がありません。さらに、そのような外部サイトやソースの可用性について責任を負わないか、保証しません。これらのサイトまたは外部ソースのコンテンツに起因する、いかなる性質のいかなる損害についても責任を負うことはできません。`,




        "IDTRANSLATECONSULTE1":`アフリカ`,
        "IDTRANSLATECONSULTE2":`ヨーロッパ`,
        "IDTRANSLATECONSULTE3":`世界の他の国々`,
        "IDTRANSLATEPROFIL1": " 有効なアカウント",
        "IDTRANSLATEPROFIL2": " 無効なアカウント",
        "IDTRANSLATEPROFIL3":`デビットアカウント`,
        "IDTRANSLATEPROFIL4":`デビットアカウント`,
        "IDTRANSLATEPROFIL5":`私のプラン`,
        "IDTRANSLATEPROFIL6":`私のプラン`, 
        "IDTRANSLATEPROFIL7":`私のデータ`,
        "myNameIDX":` アカウトを削除`,
        "myBtn":` アカウントを再チャージ`,
        "myBtn2":` アカウントを再チャージ`,
        "IDTRANSLATEPROFIL9":`ホームに移動`,
        "IDTRANSLATEPROFIL10":`ログアウトする`,
        "CONSULTEZLESANNONCES":`広告を見る`,
        "IDTRANSLATEPROFIL11":`広告を見る`, 
        "IDTRANSLATEPROFIL12":`広告を投稿`,
       // "IDTRANSLATEPROFIL13":`Vous souhaite la Bienvenue !`,
        "exampleModalLongTitle":` 1ユニットは95 FCFA、または23円の価値があります`,
        "errorSms":`番号を入力する必要があります。`,
        "SmspayId":`ここにユニット数を入力します。`,
        "IDTRANSLATEPROFIL14":`戻る`, 
        "payYourUnitybtn":`承認`,
        "CHOISEYOURPAIEMENT":`支払い方法を選択します。`,
        "exampleModalLongTitleX":`アカウントを保護します。`,
        "IDTRANSLATEPROFIL15":`忘れられない答えを出してください。  この回答は、アカウントを取得するときに尋ねられます。この回答がなければ、アカウントにアクセスできません。`,
        "IDTRANSLATEPROFIL16":` 質問を選択してください `,
        "IDTRANSLATEPROFIL17":` あなたの誕生月は何ですか?`,
        "IDTRANSLATEPROFIL18":` お気に入りの色は何ですか?`,
        "IDTRANSLATEPROFIL19":`あなたの日常生活をどう思いますか?`,
        "IDTRANSLATEPROFIL20":`あなたにとって最も重要なことは何ですか?`,
        "IDTRANSLATEPROFIL21":`誰があなたにインスピレーションを与える人の名前は何ですか？`,
        "IDTRANSLATEPROFIL22":`あなたの好きな国は何ですか?`,
        "IDTRANSLATEPROFIL23":`あなたの好きな選手は何ですか?`,
        "IDTRANSLATEPROFIL24":`あなたの好きなアーティストは何ですか?`,
        "IDTRANSLATEPROFIL25":`あなたの答えは何ですか? 一言だけ。スペースなし。`,
        
        "submitFormID":`申し込む`,
        "TOCLOSEMODALID":`閉じる`,   
        "IDTRANSLATEPROFIL26":`承認`, 
        "IDTRANSLATEPROFIL27":`セキュリティ応答`,
        "payYourUnity":` ユニット数を書く `,
        congratulationsTitle: "おめでとう!",
        accountSecureMessage: "アカウントは安全です。ありがとうございました!",       
        accountSecureMessageX: "スペースなし。ありがとうございました!",


        "IDTRANSLATEPROFIL28":`デビットアカウントは空です。お気に入りの広告の連絡先にアクセスするためにユニットを購入してください。`,
        "IDTRANSLATEPROFIL29":`現在、ユニットを購入することはできません。まず、無料で提供されている3つのユニットを使用してください。ありがとう。`,
        "IDTRANSLATEPROFIL30W":`よろしいですか?`,
        "IDTRANSLATEPROFIL30":`もう戻ることはできません！`,
        "IDTRANSLATEPROFIL31":`はい、削除してください!`, 
        "IDTRANSLATEPROFIL32":`よろしいですか?`,
        "IDTRANSLATEPROFIL33":` ログアウトした後、ログインするオプションがあります。`,
        "IDTRANSLATEPROFIL34":`はい、ログアウトします！`,
        "IDTRANSLATEPROFIL35":`オフライン`,
        "IDTRANSLATEPROFIL36":`ログアウトしました。`,
        "IDTRANSLATEPROFIL37":`私たちのホームページにアクセスしますか?`,
        "IDTRANSLATEPROFIL38":`削除されました!`,
        "IDTRANSLATEPROFIL38X":` 成功した。`,
        "IDTRANSLATEPROFIL39X":`写真は正常に更新されました。`,
        "IDTRANSLATEPROFIL40X":` エラー`,
        "IDTRANSLATEPROFIL41X":`写真を更新できませんでした。`,

        "IDTRANSLATEPROFIL39":` あなたのアカウントは正常に削除されました！`,
        "IDTRANSLATEPROFIL40":`削除されました!`,
        "IDTRANSLATEPROFIL41":`ユーザーの削除中にエラーが発生しました! `,
        "IDTRANSLATEPROFIL42":`間違いがあります`,
        "IDTRANSLATEPROFIL42Q":`間違いがあります`,
        "IDTRANSLATEPROFIL42QX":`間違いがあります`,
        "IDTRANSLATEPROFIL43":`フィールドは十分に満たされていません!`, 
        "IDTRANSLATEPROFIL44":`何かがおかしい!`,
        "IDTRANSLATEPROFIL44IN":`親愛なるユーザー、この支払い方法はすぐに利用可能になります。とりあえず、Feexpayを使用してトランザクションを完了してください。ありがとうございました!`,
        "IDTRANSLATEPROFIL45":`データは更新されません!`,
        "IDTRANSLATEPROFIL46":` ユニットがありません。購入してください。プロフィールにアクセスしてください。ありがとう！`,
        "IDTRANSLATEPROFIL47":`よろしいですか?`,
        "IDTRANSLATEPROFIL48":` 広告の編集により、検証のために管理者に再度送信されます。このプロセスには24時間かかります。`,




        "IDTRANSLATEPROFIL49":`戻る`,
        "IDTRANSLATEPROFIL50":`はい! 変化する。`,
        "IDTRANSLATELOGIN1":`ログインします。`,
        "IDTRANSLATELOGIN2":`電子メール`,
        "IDTRANSLATELOGIN3":` Eメールアドレス`,
        "IDTRANSLATELOGIN4":`パスワード`,
        "IDTRANSLATELOGIN5":`あなたのパスワード`,
        "IDTRANSLATELOGIN6":`私を覚えて`,
        "IDTRANSLATELOGIN7":`パスワードを忘れた`,
        "IDTRANSLATELOGIN8":`アカウントがありません。`,
        "IDTRANSLATELOGIN9":`無料で登録`,
        "IDTRANSLATELOGIN10":`接続する`,
        "IDTRANSLATELOGIN11":`成功`,
        "IDTRANSLATELOGIN12":`接続に成功しました!`,
        "IDTRANSLATELOGIN13":`済まない`,
        "IDTRANSLATELOGIN14":`パスワードが正しくありません!`,
        "IDTRANSLATELOGIN15":`済まない`,
        "IDTRANSLATELOGIN16":`そのメールアドレスのユーザーは存在しません！`,
        "IDTRANSLATESIGNUP1":`登録する`,
        "IDTRANSLATESIGNUP2":`ペンネーム`, 
        "IDTRANSLATESIGNUP3":`ペンネーム`,
        "IDTRANSLATESIGNUP4":`フルネーム`, 
        "IDTRANSLATESIGNUP5":`フルネーム`,
        "IDTRANSLATESIGNUP6":`電子メール`,
        "IDTRANSLATESIGNUP7":` Eメールアドレス`,
        "IDTRANSLATESIGNUP8":`パスワード`,
        "IDTRANSLATESIGNUP9":`あなたのパスワード`,
        "IDTRANSLATESIGNUP10":`利用規約を読み、同意しました`,
        "IDTRANSLATESIGNUP11":`契約条件を読んで受け入れる`,
        "IDTRANSLATESIGNUP12":`私はすでにアカウントを持っています。`,
        "IDTRANSLATESIGNUP13":`サインインします`,
        "IDTRANSLATESIGNUP14":`済まない`,




        "IDTRANSLATESIGNUP15":`アカウントはすでにこのメールアドレスまたは電話番号に関連付けられています。`,
        "IDTRANSLATESIGNUP16":`成功`,
        "IDTRANSLATESIGNUP17":`登録に成功しました!`,
        "IDTRANSLATESIGNUP18":` Firebaseにメールアドレスを送信中にエラーが発生しました `, 
        "IDTRANSLATESIGNUP19":`スペースなし。ありがとうございました!`,
        "IDTRANSLATESIGNUP19PHONE":`有効な電話番号を入力してください。`,
        "IDTRANSLATESIGNUP19PHONEX":`有効な電話番号を入力してください。`,
        "IDTRANSLATEFORGET1":`登録に使用したメールアドレスを送信します。`,
        "IDTRANSLATEFORGET2":`電子メール`,
        "IDTRANSLATEFORGET3":`あなたの電子メール`,
        "IDTRANSLATEFORGET4":`送る`,
        "IDTRANSLATEFORGET5":`検証`,
        "IDTRANSLATEFORGET6":`正しい答えを出しなさい!`,
        "IDTRANSLATEFORGET7":`新しいパスワードを入力してください!`,
        "IDTRANSLATEFORGET8":`新しいパスワードを入力してください!`, 
        "IDTRANSLATEFORGET9":`すごい`,
        "IDTRANSLATEFORGET10":`パスワードが正常に更新されました!`,
        "IDTRANSLATEFORGET11":`サインインします`,
        "IDTRANSLATEFORGET12":`いい`,
        "IDTRANSLATEFORGET13":`メールの更新中にエラーが発生しました。`,
        "IDTRANSLATEFORGET14":`これは間違った答えです`,
        "IDTRANSLATEFORGET15":`ユーザーは存在しません。`, 
        "IDTRANSLATEFORM1":` 私のプロフィール `,
        "IDTRANSLATEFORM1W":`私のプロフィール`,
        "IDTRANSLATEFORM2":`私のプロフィール`,
        "IDTRANSLATEFORM3":`私のプロフィール`,
        "IDTRANSLATEFORM4":`私が探しているプロフィール`,
        "IDTRANSLATEFORM4W":`私が探しているプロフィール`,
        "IDTRANSLATEFORM5":`私が探しているプロフィール`,
       // "IDTRANSLATEFORM6":`VEUILLEZ REMPLIR LE FORMULAIRE CI-DESSOUS.`,
        "IDTRANSLATEFORM7":`正確で洞察に満ちた情報を提供します。`,
        "IDTRANSLATEFORM8":`私の居住国 <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM9":`私の居住地 <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM10":`名前または仮名 <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM11":`私の年 <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM9PL":`私の居住地 `,





        "IDTRANSLATEFORM10X":`私の居住地`,
        "IDTRANSLATEFORM11X":`私の年`,
        "IDTRANSLATEFORM8X":`私の居住国`,
        "IDTRANSLATEFORM9X":`私の年`,
        "IDTRANSLATEFORM12":`数字のみ入力してください。<i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM13":`私の性別 <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM14":`男`,
        "IDTRANSLATEFORM15":`妻`,
        "IDTRANSLATEFORM16":`トランスジェンダー`,
        "IDTRANSLATEFORM17":`ジェンダーフルイド`,
        "IDTRANSLATEFORM18":`インターセックス`,
        "IDTRANSLATEFORM19":`アジェンダー`,
        "IDTRANSLATEFORM20":`アロマンティック`,
        "IDTRANSLATEFORM21":`非性的`,
        "IDTRANSLATEFORM22":`バイセクシャル`,
        "IDTRANSLATEFORM23":`シスジェンダー`,
        "IDTRANSLATEFORM24":`シスノルマティビティ`,
        "IDTRANSLATEFORM25":`デミロマンティック`,
        "IDTRANSLATEFORM26":`デミセクシャル`,
        "IDTRANSLATEFORM27":`異性愛性`,
        "IDTRANSLATEFORM28":`Iel`,
        "IDTRANSLATEFORM29":`ジェンダーステレオタイプ`,
        "IDTRANSLATEFORM30":`ノンバイナリー`,
        "IDTRANSLATEFORM31":`パンセクシュアル`,
        "IDTRANSLATEFORM32":`ポリアモラス`,
        "IDTRANSLATEFORM33":`クィア`,
        "IDTRANSLATEFORM34":`トランスジェンダー`,
        "IDTRANSLATEFORM35":`トランジション`,
       // "IDTRANSLATEFORM36":`VEUILLEZ REMPLIR LE FORMULAIRE CI-DESSOUS.`,
        "IDTRANSLATEFORM37":`正確で洞察に満ちた情報を提供します。`,
        "IDTRANSLATEFORM38":` 私の夫婦の状況 <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM39":`独身`,
        "IDTRANSLATEFORM40":`カップルとして`,
        "IDTRANSLATEFORM41":`離婚した/離婚した`,
        "IDTRANSLATEFORM42":`未亡人`,
        "IDTRANSLATEFORM43":`私の国籍 <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM44":`電話 <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM45":`国の接頭辞なしで番号のみを入力してください<i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM46":`仕事 <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM47":`仕事`,
       // "IDTRANSLATEFORM48":`VEUILLEZ REMPLIR LE FORMULAIRE CI-DESSOUS.`,
        "IDTRANSLATEFORM49":`正確で洞察に満ちた情報を提供します。`,
        "IDTRANSLATEFORM50":`出会い希望 <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM51":`フレンドリー、孤独を打破する`,
        "IDTRANSLATEFORM52":`持続可能な`,
        "IDTRANSLATEFORM53":`結婚につながる可能性があります`,
        "IDTRANSLATEFORM54":`身分証明書`,
        "IDTRANSLATEFORM55":`写真1 <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM56":`写真 2 <i class="fa fa-star required"></i>`,
       // "IDTRANSLATEFORM57":`VEUILLEZ REMPLIR LE FORMULAIRE CI-DESSOUS.`,
        "IDTRANSLATEFORM58":`正確で洞察に満ちた情報を提供します。`,
        "IDTRANSLATEFORM59":`彼のタイプ <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM60":`男`,
        "IDTRANSLATEFORM61":`妻`,
        "IDTRANSLATEFORM62":`トランスジェンダー`,
        "IDTRANSLATEFORM63":`ジェンダーフルイド`,
        "IDTRANSLATEFORM64":`インターセックス`,
        "IDTRANSLATEFORM65":`アジェンダー`,
        "IDTRANSLATEFORM66":`アロマンティック`,
        "IDTRANSLATEFORM67":`非性的`,
        "IDTRANSLATEFORM68":`バイセクシャル`,




        "IDTRANSLATEFORM69":`シスジェンダー`,
        "IDTRANSLATEFORM70":`シスノルマティビティ`,
        "IDTRANSLATEFORM71":`デミロマンティック`,
        "IDTRANSLATEFORM72":`デミセクシャル`,
        "IDTRANSLATEFORM73":`異性愛性`,
        "IDTRANSLATEFORM74":`Iel`,
        "IDTRANSLATEFORM75":`ジェンダーステレオタイプ`,
        "IDTRANSLATEFORM76":`ノンバイナリー`,
        "IDTRANSLATEFORM77":`パンセクシュアル`,
        "IDTRANSLATEFORM78":`ポリアモリー`,
        "IDTRANSLATEFORM79":`クィア`,
        "IDTRANSLATEFORM80":`トランスジェンダー`,
        "IDTRANSLATEFORM81":`トランジション`,
        "IDTRANSLATEFORM82":`彼の年齢層<i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM83":`彼の婚 ⁇ 状況<i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM84":`独身`,
        "IDTRANSLATEFORM85":`カップルとして`,
        "IDTRANSLATEFORM86":`離婚した/離婚した`,
        "IDTRANSLATEFORM87":`未亡人`,
        "IDTRANSLATEFORM88":`彼の居住国 <i class="fa fa-star required" ></i>`,
        "IDTRANSLATEFORM89":`いくつかの国を選択できます。 <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM90":`彼の国`,
        "IDTRANSLATEFORM91":`彼の居住国`,
      //  "IDTRANSLATEFORM92":`VEUILLEZ REMPLIR LE FORMULAIRE CI-DESSOUS.`,
        "IDTRANSLATEFORM93":`正確で洞察に満ちた情報を提供します。`,
        "IDTRANSLATEFORM94":`あなたが望む物理的な側面を説明してください。`,
        "IDTRANSLATEFORM95":`居住地の市 <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM96":`彼の街`,
        "IDTRANSLATEFORM97":`彼の仕事 <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM98":`彼の仕事`,
        "IDTRANSLATEFORM99":`その他の詳細.`,
        "IDTRANSLATEFORM100":`その他の詳細`,
        "IDTRANSLATEFORM10w":` 身体的側面`,
        "IDTRANSLATEFORM101":`次`,
        "IDTRANSLATEFORM102":`戻る`,
        "IDTRANSLATEFORM103":`送る`,




        "IDTRANSLATEFORM104":`<p > このフォームによって収集される個人情報について<strong style="color: #000080;">BAKO FAMILIA & COMPANY</strong> あなたが要求した出会い系サービスの円滑な運営を保証するために排他的に扱われます。収集された個人データは、お客様の同意なしに誰にも伝達されません。
        個人データの保護に関するベナン共和国のデジタルコードに関する法律2017-20の規定の適用において、収集されたデータの処理はAPDPの前に宣言されました。</em> </p>
        <hr>
        <p class="mb-0">上記の法律に従って、次のアドレスでアクセス、異議、修正、削除の権利を行使できます: <strong style="color: #000080;">BAKO FAMILIA & COMPANY</strong>.
        </em></p>`,
        "IDTRANSLATEFORM105":`画像が小さすぎます。300x300ピクセル以上の画像を選択してください。`,
        "IDTRANSLATEFORM106":` REST Countries APIを呼び出すときにエラーが発生しました`,
        "IDTRANSLATEFORM107":`プレフィックスなしで番号を配置するだけです`,
        "IDTRANSLATEFORM108":`国を選択してください。`,
        "IDTRANSLATEFORM109":`成功`,
        "IDTRANSLATEFORM110":`フォームは24時間以内に確認されます<i class="fa fa-heart"></i>.`,
        "IDTRANSLATEFORM111":`御免`,
        "IDTRANSLATEFORM112":`すべてのフィールドが入力されていません。`,
        "IDTRANSLATEUSERD1":`私に連絡してください  <svg xmlns="http://www.w3.org/2000/svg" width="10.444" height="9.7"><defs><clipPath id="a"><path fill="none" d="M0 0h10.444v9.7H0z"/></clipPath></defs><g fill="none" stroke="#2a46cc" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.438" clip-path="url(#a)"><path d="M.719 4.85h8.709M5.594 8.683L9.427 4.85M5.594 1.017L9.427 4.85"/></g></svg>`,





        "IDTRANSLATEUSERD2":`私に連絡するために`,
        "IDTRANSLATEUSERD3":`<i class="bi bi-alexa" style="font-size: 3vh !important;"></i> 私のプロフィール`,
        "IDTRANSLATEUSERD4":`答え`,
        "IDTRANSLATEUSERD5":`私の居住地:`,
        "IDTRANSLATEUSERD6":`私の名前または偽名:`,
        "IDTRANSLATEUSERD7":`私の年齢範囲:`,
        "IDTRANSLATEUSERD8":`私の性別:`,
        "IDTRANSLATEUSERD9":`私の夫婦の状況:`,
        "IDTRANSLATEUSERD10":`私の国籍:`,
        "IDTRANSLATEUSERD11":`私の仕事または職業:`,
        "IDTRANSLATEUSERD12":`会議が欲しい:`,
        "IDTRANSLATEUSERD13":`私の物理的な好み:`,
        "IDTRANSLATEUSERD14":`その他の詳細：`,
        "IDTRANSLATEUSERD15":`<i class="bi bi-alexa" style="font-size: 3vh !important;"></i> 探しているプロフィール`,
        "IDTRANSLATEUSERD16":`答え`,
        "IDTRANSLATEUSERD17":`彼女の性別:`,
        "IDTRANSLATEUSERD18":`彼の年齢層：`,
        "IDTRANSLATEUSERD19":`彼女の婚 ⁇ 状況:`,
        "IDTRANSLATEUSERD20":`居住国:`,
        "IDTRANSLATEUSERD21":`彼の居住地：`,
        "IDTRANSLATEUSERD22":`仕事または職業:`,
        "TIDTRANSLATEUSERD23":`オンラインで`,

        "IDTRANSLATEUSERD24":`<i class="fas fa-database" style="font-size: 5vh !important; color: #FFB6C1;"></i> データなし。`,
        "IDTRANSLATEUSERD25":`データなし。.`,
        "IDTRANSLATEUSERD26":`間違いがあります.`,
        "IDTRANSLATEUSERD27":`お客様の口座から引き落とされました`,
        "IDTRANSLATEUSERD28":`データは更新されません。`,
        "IDTRANSLATEUSERD29":`検索フォームの公開後にのみ、他のユーザーに連絡することができます。`,
        "IDTRANSLATEUSERD30":`あなたはあなたの広告を掲載したいですか？`,
        "IDTRANSLATEUSERD31":`ユニットが尽きました。他のユーザーに連絡できません。’.`,
        "IDTRANSLATEUSERD32":`ユニットを購入しますか?`,
        "IDTRANSLATEUSERD33":`大丈夫。`,
        "IDTRANSLATEUSERD34":`彼のプロフィールをご覧ください!`,
        "IDTRANSLATEUSERD35":`<i class="bi bi-eye" style="color: white;"></i> クリックして表示します。`,
        "texteIDTRANSLATEUSERD24YX": "オンライン",
        "myNameIDwallet":"収益を引き出してください。",
        "MYEWALLETID":`<i class="fa fa-align-left"></i>私の財布`,
        "MYEWALLETID1":"総残高", 
        "comeBackId":"戻る",
        "idTogetwallet":"収益を引き出してください。",
        "HISTORYISMY":"履歴",
        "IDTRANSLATEWALLETU":"進行中",
        "IDTRANSLATEWALLETX":"支払済み",
        "IDTRANSLATEWALLET":"ごめんなさい！",
        "IDTRANSLATEWALLETM":"転送に失敗しました。後でもう一度お試しください。", 
        "IDTRANSLATEWALLET1":"おめでとうございます！",
        "IDTRANSLATEWALLET2":"転送が成功しました!",
        "TITLEWALLETID": "電子財布",
        "IDTRANSLATEFOEMXX": "このフィールドには文字のみを入力してください。番号は許可されていません。",
        "linkInput": "ここにアフィリエイトリンクをコピーします",
        "TERMINATOR" :" 終える",
        "PHOTOID" :" 写真",
        "TERMINATORW" :" もう終わり",
        "PHOTOIDW" :" 写真",
        "STEPS14":"ステップ1-4",
        "STEPS23":"ステップ 2 - 4",
        "STEPS34":"ステップ 3 - 4",
        "STEPS44":"ステップ4 - 4",
        "IDTRANSLATEPROFIL29FILE" :" この画像を送信しますか?", 
        "IDTRANSLATEPROFIL29FILE1" :" 戻っ",
        "IDTRANSLATEPROFIL29FILE2" :" そう",
        "IDTRANSLATESIGNUP19OPTIONSERROR" :" 地理位置情報を要求するときにエラーが発生しました。",
        "IDTRANSLATESIGNUP19OPTIONS" :" お知らせいたしますが、地理位置情報が許可されるまで、弊社のサービスをご利用いただけません。",
        "IDTRANSLATESIALERT1" :" 情報",
        "IDTRANSLATESIALERT2" :" 親愛なる訪問者、あなたの安全を確保し、偽の広告と戦うために、illicoloveはあなたの居住国を見つけます。",
        "IDTRANSLATESIALERT3" :" ええ、私はそれを取ります!",
        "IDTRANSLATESIALERT4" :" 拒否した ",
        "CONTRACTID1":`提携契約`,
        "CONTRACTID2":`      間:illicolove、以下「出会い系サイト」と呼ぶ",
        および:ME、以下「アフィリエイト)".`,
        "CONTRACTID3":`オブジェクト`,
        "CONTRACTID4":`この提携契約の目的は、出会い系サイトのアフィリエイトプログラムに関連して、illicoloveとアフィリエイトとの関係を管理することです <a href="https://illicolove.com">illicolove.com</a>`,
        "CONTRACTID5":`1。アフィリエイトプログラム`,
        "CONTRACTID6":` Illicoloveは、出会い系サービスを宣伝するオンラインアフィリエイトプログラムを運営しています。`,
        "CONTRACTID7":`2. アフィリエイトの役割`,
        "CONTRACTID8":`アフィリエイトは、illicoloveが提供する一意のアフィリエイトリンクと、サイトによって承認されたその他のプロモーション手段を使用して、出会い系サイトのサービスを宣伝することを約束します。`,
        "CONTRACTID9":`3。アフィリエイトの報酬`,
        "CONTRACTID10":`3.1。アフィリエイトは、サイトに登録する新しいメンバーごとに100 CFAフランの手数料を受け取ります <a href="https://illicolove.com">illicolove.com</a> アフィリエイトの固有のリンクを使用し、愛の検索広告を投稿します。`,
        "CONTRACTID11":`3.2。さらに、アフィリエイトは、アフィリエイトリンクを介して紹介されたメンバーによる購入ごとに10%の手数料を受け取ります。`,
        "CONTRACTID11X":`3.3 100F CFAコミッションは、コミッション詐欺を回避するために、新しいメンバーが100F CFAを超えるユニットを購入した場合にのみ収集されます。`,
        "CONTRACTID12":`4。委員会の支払い`,
        "CONTRACTID13":` Illicoloveは、アフィリエイトの選択により、モバイルマネーまたは銀行振込による要求に応じて、定期的に四半期ごとにアフィリエイトの手数料を支払います。アフィリエイトは、返品の費用を負担するものとします。`,
        "CONTRACTID14":`5。契約期間`,
        "CONTRACTID15":`この提携契約は、アフィリエイトが承認した日に発効し、30日( 30 )日書面による通知を条件として、いずれかの当事者が終了するまで効力を維持するものとします。`,
        "CONTRACTID16":`6。終了`,
        "CONTRACTID17":` Illicoloveまたはアフィリエイトは、相手方に書面で通知することにより、いつでも本契約を終了することができます。未払いの手数料は、この契約の条件に従って支払われます。`,
        "CONTRACTID18":`7。適用法`,
        "CONTRACTID19":`この契約はベナンの法律に準拠しており、この契約から生じた紛争は友好的に解決できず、コトヌーの商事裁判所の専属管轄権の対象となります。`,
        "ANNONCEAFFILIATEID" : `        <div class="box--list__items">
        <div class="box--list__item" style="  padding-top: 0 !important; margin-top: 0 !important;">
            <h2 class="box--list__title box--list__titlex" >人々がillicoloveで愛を見つけるのを助けることによってお金を稼ぐ!</h2>
            <p class="box--list__記述">有利なアフィリエイトの機会をお探しですか? 私たちのユニークなアフィリエイトプログラムに参加して、他の人がソウルメイトを見つけるのを助けることによってあなたの収入を増やしてください。仕組みは次のとおりです: <br>
              ✅ アフィリエイトリンク経由で当社のサイトに新規会員が登録し、恋愛広告を投稿するごとに100 F CFA を受け取ります。 <br>

              ✅ さらに、紹介したメンバーが行ったすべての購入に対して10％の手数料を受け取ります。彼らが多く支出するほど、収益が増えます！</p>
        </div>
        
        <div class="box--list__item">
            <h2 class="box--list__title box--list__titlex"> なぜアフィリエイトプログラムを選ぶのですか?</h2>
            <div class="box--list__記述">
              ✅ 誰かが登録し、恋愛広告を投稿すると、すぐにお金を稼げます。 <br>
              ✅ アフィリエイトが当サイトで購入するたびに、継続的なコミッションを獲得してください。<br>
              ✅ エキサイティングで絶えず成長しているニッチである愛を求めて聴衆をターゲットにします。 <br>
              
            </div>
        </div>
        
        <div class="box--list__item">
            <h2 class="box--list__title"> プログラムに参加する</h2>
            <div class="box--list__記述">✅  今日私たちのアフィリエイトプログラムに参加して、人々がillicoloveで愛を見つけるのを助けることによってお金を稼ぎ始めてください! 💑
              
             </div>
        </div>
        <div class="box--list__item">
          <h2 class="box--list__title"> 登録しなさい.</h2>
          <div class="box--list__記述"> 
            ✅ 今すぐ登録して収入を増やしてください: <a href="./v/login/signup.html">登録</a>
              
            ご不明な点がございましたら、info @ illicolove.comまでお問い合わせください。</div>
      </div>
    </div>`,
          "IDTRANSLATE6WX":`言語 <span> <i class="bi bi-globe2"></i></span> <i class="bi bi-chevron-down"></i> `,
        }
      },
      cn:{
        translation : {
          "IDTRANSLATE1": "接收",
         // "IDTRANSLATE2": "À propos",
          "IDTRANSLATE3": `它是如何工作的`,
          "IDTRANSLATE4": `条款`,
          "IDTRANSLATE5":"使用条款和条件",
          "IDTRANSLATE6":"保密政策",
          "IDTRANSLATE6X":"我们的联盟系统",
          "IDTRANSLATE7":"接触",
          "IDTRANSLATE8":"登记",
          "IDTRANSLATE9":"登录",
          "IDTRANSLATECONTACT1":"接触",
          "IDTRANSLATECONTACT2":"与我们联系",
          "IDTRANSLATECONTACT3":"地址",
          "IDTRANSLATECONTACT4":' 电话 ',
          "IDTRANSLATECONTACT5":"邮件", 
          "IDTRANSLATECONTACT6":"社交媒体",
          "IDTRANSLATETITLE":"广告",
          "IDTRANSLATETITLEFORM":"表格",
          "IDTRANSLATE1INF1":`您的电子邮件地址由BAKO FAMILIA&COMPANY收集和处理,以便随时了解illicolove网站的新功能及其更新。
根据2017-20年贝宁共和国关于数字代码的法律，在保护个人数据方面，你可以向info@illicolove.com发送电子邮件，取消订阅或行使访问、反对、纠正和删除的权利`,
          "IDTRANSLATE10":"illicolove,",
          "IDTRANSLATE11":`你的会议平台，对抗独身和孤独。`,
          "IDTRANSLATE12":`我们认为，非自愿孤独是一个人道主义问题，并致力于为受苦者提供解决办法。`,
          "IDTRANSLATE13":`免费注册`,
          "IDTRANSLATE13KLM":`转到您的个人资料`,
         // "IDTRANSLATE14":`À propos de nous`,
         // "IDTRANSLATE15":`Votre plateforme de rencontres en ligne illicolove.com vous est proposée par les Établissements BAKO FAMILIA & COMPANY, une entreprise individuelle(EI) de droit béninois immatriculée au Registre du Commerce et du Crédit Mobilier RCCM RB/COT/08/A4101 ; à l’Identifiant Fiscal Unique (IFU) 3200800938610.`,

         // "IDTRANSLATE16":`Elle a pour activités, le Wedding planning (accompagnement dans l’organisation de mariage), le Tourisme-Loisirs, l’organisation de foires et Salons. Elle a été créée en Mai 2008 à Cotonou. `,
         // "IDTRANSLATE17":`Plus de détails`,
          "IDTRANSLATE18":`我们的目标`,
          "IDTRANSLATE19":`第十六条`,
          "IDTRANSLATE20":`我们的目标`,

          "IDTRANSLATE17USER":`地区选择`,
          "IDTRANSLATE18USER":`用户详细信息`,
          "IDTRANSLATE19USER":`概况`,

          "IDTRANSLATE21":`这个在线约会平台的推出是为了响应我们的倡议，以对抗单身和孤独。它在联合国《世界人权宣言》第16条所规定的轨迹中体现出来，该条款提到了妇女和男子的结婚权，以及家庭在社会和国家中应受到保护的重要性。`,
         "IDTRANSLATE22":`我们的价值观 :`,
         "IDTRANSLATE23":`可靠性,`,
         "IDTRANSLATE24":`礼让 和`,
         "IDTRANSLATE25":`酌定.`, 
         "IDTRANSLATE26":` 男女在婚姻成年后，有权结婚、组建家庭，不受种族、国籍或宗教的限制。他们在婚姻、婚姻关系持续期间和婚姻解除时享有平等的权利。 `,
         "IDTRANSLATE27": `婚姻只能在未来的夫妇自由和全面的同意下缔结。 `,
         "IDTRANSLATE28":` 家庭是社会的自然和基本单位，享有社会和国家的保护权。
孤独、独身、社会孤立是人道主义的当务之急，对公共当局、协会和公司提出挑战。慢性和非自愿的孤独感是大多数时候在沉默中遭受痛苦的人们所经历的个体戏剧。illicolove.com是在这种背景下诞生的，希望以不同和简单的方式提供网上约会服务；寻找虚构的个人资料。
欢迎！`,
         "IDTRANSLATE29":`我们只针对个人 :`,
         "IDTRANSLATE30":`年龄在18岁以上的人。`,
         "IDTRANSLATE31":`年龄较大的不自愿单身者，感到绝望和失望的人.`,
         "IDTRANSLATE32":`离婚者.`,
         "IDTRANSLATE33":`鳏夫,寡妇`,
         "IDTRANSLATE34":`我们的用户`,
         "IDTRANSLATE35":`我们所有的用户`,
         "IDTRANSLATE36":`在非洲`,
         "IDTRANSLATE37":`在欧洲`,
         "IDTRANSLATE38":`世界其他国家`,
        // "IDTRANSLATE39":`Notre équipe`,
        // "IDTRANSLATE40":`Directrice`,
        // "IDTRANSLATE41":`Relectrice, et Responsable marketing`,
        // "IDTRANSLATE42":`Développeur et SEO`,


         "IDTRANSLATEX1":`使用的阶段`,
         "IDTRANSLATEX2":`下面是illicolove的工作原理。`,
         "IDTRANSLATEX3":`登记`,
         "IDTRANSLATEX4":`在您注册后，illicolove将为您提供三（03）个单位，价值295法郎CFA，即3.43元。.
         一单位售价95法郎CFA或1.10元。`,
         "IDTRANSLATEX5":`连接`,
         "IDTRANSLATEX6":`您与illicolove的连接允许您访问为注册用户保留的所有功能和服务。`,
         "IDTRANSLATEX7":`发布广告`,
         "IDTRANSLATEX8":`通过点击"发布广告"按钮，可以选择在"非洲"页面或"欧洲"页面上发布；或在"世界其他国家"页面上；取决于你的居住地。只需填写将显示的搜索表即可。`,




         "toopenPUAID":`继续…`,
         "openPUA":`我们邀请您在您居住的地理区域的页面上发布广告,但是,您可以咨询和联系您通常所在地理区域以外的搜索广告的任何概况。
例如,如果您居住在法国,则必须在页面上发布广告
"欧洲"并可咨询和联系页面中的广告
"非洲"、"欧洲"和"世界其他国家"
完成并提交搜索表时,您的
如果我们判断您的个人资料,将在24小时内出现
校对和可能的检查后可靠。我们的校对和验证团队可以私下写信给您,向您保证您的个人资料可靠。可能会要求您就自己的身份进行语音或视频通话。考虑到这一点,广告在illicolove上的验证和外观可能超过24小时。发布广告的及时性将取决于您自己。我们系统地抛弃所有虚构的、不切实际的公告，特别是虚假的简介，而不另行通知。
如果您在访问illicolove.com服务时遇到任何困难,请与我们联系info@illicolove.com`,
          "IDTRANSLATEX9":`验证您的用户帐户`,
          "IDTRANSLATEX10":`填写表格,然后单击"发送"。我们将在24小时内检查和验证您的表格。您将收到确认消息。如果需要额外检查,我们将通过电子邮件通知您。`,
          "IDTRANSLATEX11":`查看广告`,
          "IDTRANSLATEX12":` "查看广告"按钮通向另外三个按钮：非洲（非洲广告）、欧洲（欧洲广告）和世界其他国家（非洲和欧洲广告）。用illicolove与生活中的男人或女人见面，可能只需要95非洲法郎或1.10元。
当你点击
"联系我"的个人资料，特别引起你的注意。`,
          "IDTRANSLATEX13":`购买`,
          "IDTRANSLATEX14":` "您可以根据您的需要充值您的帐户（我的计划），以继续浏览已发布的约会广告。您在注册后获得的个人借记-贷记帐户允许您使用您选择的支付方式进行充值。illicolove的计费货币是CFA法郎（XOF）。1人民币（CNY）= 85.3526 CFA法郎（XOF）。`,
          "IDTRANSLATEX15":`常见问题解答.`,
          "IDTRANSLATEX16":` 我可以在illicolove上进行一次愉快的会面吗?`,
          "IDTRANSLATEX17":` 是的，只要你填写正确的搜索表并提供有关你自己的真实信息。`,




          "IDTRANSLATEX18":`你的交友网站在付钱吗？`,
          "IDTRANSLATEX19":` 是的,只能咨询特别保留您兴趣的配置文件的联系地址。`,
          "IDTRANSLATEX20":`查阅一个吸引我兴趣的个人资料的联系地址需要多少费用？`,
          "IDTRANSLATEX21":`95 FCFA或1.10元。`,
          "IDTRANSLATEX22":` 你的交友网站免费吗？`,
          "IDTRANSLATEX23":`是的，你的爱情搜索广告的注册和发布是免费的。`,
          "IDTRANSLATEX24":` 如何发布约会广告？`,
          "IDTRANSLATEX25":`在illicolove上注册后,单击按钮或选项卡"PUBLISH AN AD"。然后在将要出现的页面上，选择与你惯常居住的大陆对应的大陆名称。最后,填写将出现并提交的搜索表。`,
          "IDTRANSLATEX26":` 能不能在中国居住，联系中国以外的人？`,
          "IDTRANSLATEX27":`好耶`,
          "IDTRANSLATEX28":`我可以在欧洲生活,联系欧洲以外的人吗?`,
          "IDTRANSLATEX29":`好耶`,
          "IDTRANSLATEX30":`能不能在欧洲生活，在"非洲"和"世界其他国家"的网页上发布搜索广告？`,
          "IDTRANSLATEX31":`没有！仅在与您居住的大陆对应的页面中发布搜索广告。`,
          "IDTRANSLATEX32":` 我可以通过手机支付方式充值我的illicolove账户吗？`,
          "IDTRANSLATEX33":`好耶`,
          "IDTRANSLATEX34":` 您的网站订阅价格是多少?`,
          "IDTRANSLATEX35":` illicolove上没有订阅。`,
          "IDTRANSLATEX36":` 我如何充值我的借记-贷记账户？`,
          "IDTRANSLATEX37":`我们为您提供多家支付网关的安全支付系统。根据您的需要，您可以使用信用卡或手机支付来充值您的帐户。在您的个人资料下的个人仪表板上，点击绿色按钮“充值我的帐户”，然后按照简单的步骤操作。`,
          "IDTRANSLATEX38":`我必须付费才能发布我的搜索广告吗?`,
          "IDTRANSLATEX39":`发布搜索广告是免费的`,
          "IDTRANSLATEX40":`我需要付费查看广告吗?`,
          "IDTRANSLATEX41":` 没有！广告的咨询是免费的，付费的是获取广告中包含的联系地址。`,
          "IDTRANSLATEX42":` 你们的单位购买系统是如何运作的？`,
          "IDTRANSLATEX43":` 在注册时，您将自动免费获得三（03）个信用单位，用于查看您选择的广告中的三（03）个联系地址。每个单位价值95法郎CFA，即1.10元。当您的单位用尽时，您可以根据您的需求和能力购买更多单位。您可以购买的单位数量从一个单位到您想要的任意数量不等。`,
          "IDTRANSLATEX44":` 我购买的单位是否有到期日期？`,
          "IDTRANSLATEX45":`您的单位没有有效期限`,
          "IDTRANSLATEX46":`我必须订阅才能享受你的约会服务吗?`,




          "IDTRANSLATEX47":`在illicolove上,除了订阅可选的时事通讯之外,没有其他订阅服务可享受我们的服务。`,
          "IDTRANSLATEX48":` illicolove.com?的隐私政策是什么`,
          "IDTRANSLATEX49":`我们非常重视贵方信息的保密性。您的个人数据是安全的,未经您的同意不会与第三方共享。有关详细信息,请参阅我们的隐私政策`,
          "IDTRANSLATEX50":`在这里`,
          "IDTRANSLATEX51":` 在哪里可以找到我的帐户验证电子邮件?`,
          "IDTRANSLATEX52":`您的帐户验证电子邮件可能在垃圾邮件文件夹中。来自电子邮件提供商的安全过滤器有时会将验证电子邮件直接发送到这些文件夹以保护您。请检查您的垃圾邮件文件夹,如果发现该电子邮件,请确保将其标记为"非垃圾邮件"。如果您仍然找不到验证电子邮件,请联系我们的支持团队以获得进一步的帮助。`,
          "IDTRANSLATETCU1":`使用条款和条件`,
          "IDTRANSLATETCU2":`欢迎来到BAKO FAMILIA&COMPANY提供的在线约会平台illicolove.com。通过使用我们的网站,您同意以下所述的条款和条件。`,
          "IDTRANSLATETCU3":`第1条：目的`,
          "IDTRANSLATETCU4":`这些"一般使用条款和条件"的目的是为使用illicolove.com及其服务提供法律框架。`,




          "IDTRANSLATETCU5":`这项合同是在以下两者之间订立的：`,
          "IDTRANSLATETCU6":`网站的Establishment BAKO FAMILIA&COMPANY所有者，以下简称"发布者"，以及任何希望访问网站及其服务的自然人，以下简称"用户"。一般使用条件必须为任何用户所接受,他们对站点的访问构成对这些条件的接受。
在本使用条款和条件中,商定下列词语或词语,不论以单数或复数形式使用,应具有下列意义：`,
          "IDTRANSLATETCU7":`搜索广告：指网站的用户或访问者以文本形式通过我们的表格发布，并附有或不附有一张或多张代表他面部的照片。`,
          "IDTRANSLATETCU8":`约会服务：指用户通过"点击显示"访问网站上发布的所有搜索广告，包括个人资料、超链接、文本、图像、视频、联系人或地址。`,
          "IDTRANSLATETCU9":`"click to show"是指允许任何用户显示电子邮件地址、电话联系人或与先前发布搜索广告并提供他/她选择联系方式的其他用户联系的任何其他方式的功能。这一功能，让你获得这样的重要信息正在付出代价。其成本约为95非洲金融共同体法郎或1.10元/次点击。`,
         "IDTRANSLATETCU10":`第二条：法律通知`,




         
         "IDTRANSLATETCU11X":` BAKO FAMILIA&COMPANY是illicolove.com交友网站的出版商。位于Agblangandan的Lot 124，是贝宁法律下的独资企业。成立于2008年5月29日，注册于贸易及家具信贷登记册RCCM RB/COT/08/A4101；并具有唯一财政标识符（IFU）号码： 3200800938610。她由Gildas Ghislain GANGBAZO代理。`,
        "IDTRANSLATETCU11":`第三条：获得服务`,
        "IDTRANSLATETCU12":` illicolove.com用户可以访问以下服务：`,
        "IDTRANSLATETCU13":`创建个人帐户`,
        "IDTRANSLATETCU14":`通过我们的表格创建和免费发布您的搜索广告以填写`,
        "IDTRANSLATETCU15":`查看其他用户发布的搜索广告`,
        "IDTRANSLATETCU16":`按需获取感兴趣的个人资料联系方式，这些资料出现在搜索广告上，且无限制（点击显示 / 点击以显示）`,
        "IDTRANSLATETCU17":`联系发布者请求个性化服务的可能性`,
        "IDTRANSLATETCU18":` 任何可以访问Internet的用户都可以从任何地方免费访问该站点。用户访问它所产生的费用（互联网连接、计算机设备等）不由发布者承担。如果用户是站点的成员（即,使用其登录凭据识别他的服务）：用户只能访问上述服务：
网站及其各种服务可能会被发布者中断或暂停,特别是在维护期间,而无需通知或说明理由。`,
        "IDTRANSLATETCU19":`第四条：用户的责任`,
        "IDTRANSLATETCU20":` 用户负责与使用其登录和密码有关的风险。用户的密码必须保持保密。如果密码泄露,发布者将拒绝承担所有责任。用户对使用illicolove.com网站上的信息和内容承担全部责任。
用户直接或间接由于损害而使用该服务，必须为网站的利益获得赔偿。
该网站允许用户通过填写"发布广告"表格在网站上发布搜索广告。`,





        "IDTRANSLATETCU21":` 用户承诺提供可靠的信息，提供没有淫秽内容的最新照片，在其搜索标准中写下尊重他人和法律的文字，并接受出版商的温和或拒绝公告，但在他拒绝向他提供更多信息以避免虚假资料后，他没有任何理由。
通过在网站上发布其公告,用户将非专有和自由的权利分配给发布者,使其能够在社交网络上或直接由授权的第三方表示、复制、改编、修改、分发和分发；根据他的匿名或选择的保密模式。
出版商承诺在社交网络上发布广告时保持任何用户的匿名性。`,
        "IDTRANSLATETCU22":`第五条：出版商的责任`,
        "IDTRANSLATETCU23":`服务器或网络的任何故障都不能由发布者负责。
同样，在不可抗力或第三方不可预见和不可逾越的情况下，该地点不能承担责任。
illicolove.com承诺使用一切必要手段保证数据的安全性和保密性。
但是，它并不能保证全面安全。
Publisher保留不保证配置文件可靠性的权利,尽管网站上的搜索广告被认为是可靠的,并在编辑校对和验证小组在后台验证其发布之前进行了验证。`,



        "IDTRANSLATETCU24":`第六条：知识产权`,
        "IDTRANSLATETCU25":` BAKO FAMILIA&COMPANY是与网站的品牌、结构和内容相关的所有知识产权的独家所有者www.illicolove.com.网站www.illicolove.com的内容完全是供个人使用，私人使用，而不是集体使用，免费提供。RSS提要和新闻通讯也是如此。在我们的附属系统之外,除经BAKO FAMILIA&COMPANY明确同意外,禁止在专业或商业环境中使用或向第三方销售此内容。`,
        "IDTRANSLATETCU26":`第七条：个人资料。`,
        "IDTRANSLATETCU27":`请参阅我们的私隐政策、个人资料和Cookie <a href="politique.html"><i class="bi bi-arrow-right-circle"></i></a>`,
        "IDTRANSLATETCU29":`第八条：超链接`,
        "IDTRANSLATETCU30":` 站点上存在的超文本链接所涉及的域不涉及Publisher BAKO FAMILIA&COMPANY的责任,后者无法控制这些链接。出版商与服务提供者建立了伙伴关系，并可向用户提供有关其他网站和（或）服务的信息，例如提及网站地址和/或提供与这些网站的超文本链接。这些重定向到第三方站点的超链接不是Publisher开发的,也不属于它。因此,Publisher对这些站点、其内容、广告、产品或从这些站点提供的服务不承担任何责任。此外，出版商不能对这些第三方提出的信息、意见和建议承担责任。`,



        "IDTRANSLATETCU31":`对于经证实或指称的任何损害或损失、结果或与使用有关的损害或损失，或信任这些合作伙伴服务或外部来源提供的内容、货物或服务的事实，出版商不承担责任。激活这些链接的决定是用户的全部责任。
Publisher不负责这些网站的可用性,也不能控制内容或验证这些网站上显示的广告、产品和其他信息。第三方可以在未经发布者明确许可的情况下创建指向illicolove.com站点页面的链接。`,
        "IDTRANSLATETCU32":`第9条：特别警告`,
        "IDTRANSLATETCU33": `在现实生活中，就像在网络上的虚拟生活中一样，你可以与诚实的人以及恶意和骗子跨越道路。
在现实生活中和互联网虚拟世界中采取一定的安全态度是我们个人的责任。BAKO FAMILIA&COMPANY邀请您：`,
        "IDTRANSLATETCU34":` 永远不要给在这个网站上遇到的陌生人汇款；在任何情况下。`,
        "IDTRANSLATETCU35":`切勿将亲密照片发送给在本网站上遇到的联系人`,




        "IDTRANSLATETCU36":`当有人声称居住在该地区但在国外工作时，要保持警惕。`,
        "IDTRANSLATETCU37":` 切勿以一个被爱的人生病而你的虚拟朋友要求你帮助他支付各种费用的紧急情况为借口屈服。在这种情况下,我们邀请您向编辑器报告这些骗子的配置文件。`,
        "IDTRANSLATETCU38":` illicolove.com上崭露头角的关系不能成为给你带来麻烦和经济支持的来源。因此，当一个陌生人向你宣布他的爱而又不能与你相遇时，要非常怀疑；即使在一次实际会议之后，也要花必要的时间才能产生大量的现金开支。`,
        "IDTRANSLATETCU39":`总是为第一次会议选择一个公共场所。`,
        "IDTRANSLATETCU40":`当你和一个刚认识的陌生人在一起时，总是向亲戚报告你的职位。`,
        "IDTRANSLATETCU41":`谴责并向我们报告，企图出售产品或服务，尽管我们在你们私下交流后进行过滤，但证明是虚假的个人资料，威胁和恐吓，冒犯、辱骂和辱骂评论，未成年人的信息，以及要求经济援助或亲密照片。`,
        "IDTRANSLATETCU42":` 因此，用户确认并接受在阅读日期公告后采取的任何行动以及一般情况下在Site上提供的任何信息，并无保留地承担全部责任。用户充分意识到现实生活中和互联网上约会的随意性。`,

        "IDTRANSLATETCU43":` 第10条：在闲置一年后删除数据。`,
        "IDTRANSLATETCU44":`出于安全考虑,如果您在一年内未通过站点验证,您将收到一封电子邮件,邀请您尽快登录,否则您的配置文件将从我们的数据库中删除。`,




        "IDTRANSLATETCU45":`第11条：按需删除账户。`,
        "IDTRANSLATETCU46":`用户可以随时删除其帐户,方法是简单地向发布者提出请求,或者在必要时通过帐户设置中的帐户删除菜单。`,
        "IDTRANSLATETCU47":`第12条：违反用户协议将导致个人资料被删除`,
        "IDTRANSLATETCU48":`如果违反本用户协议的一项或多项规定或违反任何其他通过引用纳入本协议的文件，出版商有权在不提前通知的情况下，并仅依其自行裁量权，终止或限制您对服务、您的帐户和所有相关网站的使用和访问。`,
        "IDTRANSLATETCU49":`第13条：出版商发现安全漏洞时的指示。`,
        "IDTRANSLATETCU50":`我们承诺执行所有适当的技术和组织措施,以确保适当的安全级别,以应对意外访问、未经授权或非法、泄露、更改、丢失或销毁您的个人数据的风险。`,
        "IDTRANSLATETCU51":`如果我们意识到您非法访问存储在我们的服务器上或服务提供商的个人数据,或未经授权访问导致实现已确定的风险,我们承诺：`,





        "IDTRANSLATETCU52":`回顾事件原因并告知您
        (公共报告);`,
        "IDTRANSLATETCU53":`采取合理步骤，减轻事件可能造成的任何不利影响和伤害。`,
        "IDTRANSLATETCU54":`第14条：赔偿责任的限制`,
        "IDTRANSLATETCU55":`在任何情况下，上述与发生安全违约时的通知有关的承诺都不能同化为对发生有关事件的过失或责任的任何承认。`,
        "IDTRANSLATETCU56":`第15条：合同期限`,
        "IDTRANSLATETCU57":`这项合同的期限是无限期的。合同从使用服务开始就对用户产生影响。`,
        "IDTRANSLATETCU58":`第16条：适用的法律和管辖权`,
        "IDTRANSLATETCU59":`这些GCU的语言是法语，并将胜过所有翻译成另一种语言的版本。这项合同须遵守贝宁立法，特别是关于贝宁共和国数字代码的2018年4月20日第2017-20号法律。适用法律的选择并不影响你根据居住地适用法律作为消费者的权利。`,
        "IDTRANSLATETCU60":`如果你是消费者，你和我们同意服从贝宁法院的非排他性管辖权。如果用户与出版商之间尚未解决友好争端，科托努商业法院将有权解决争端。`,
        "IDTRANSLATEPC1":`保密政策`,
        "IDTRANSLATEPC2":`法律通知`,




        "IDTRANSLATEPC3":`此法律通知和隐私政策为您提供有关BAKO FAMILIA&COMPANY如何使用和保护您提供给我们的信息的信息,同时,当您使用可从URL： www.illicolove.com.访问的约会网站时,`,
        "IDTRANSLATEPC4":`请注意，我们的隐私政策可以随时修改和/或补充，特别是为了遵守任何立法、法规、判例法或技术发展。在这种情况下，将在本政策中注明更新日期。这些修改在用户在线发布后立即提交。
因此,我们邀请您定期查阅这些通知和隐私政策,以了解任何更改。`,
        "IDTRANSLATEPC5":` 向个人资料保护局申报`,
        "IDTRANSLATEPC6":`根据贝宁共和国2018年4月20日颁布的2017-20号数字法典，涉及个人数据保护和隐私保护的第五册，网站www.illicolove.com已依法向个人数据保护权威机构（apdp.bj）进行了申报，申报号为SA-TDP-00601。`,
        "IDTRANSLATEPC7":`无论如何，BAKO FAMILIA&COMPANY只为其网站提供的约会服务收集与用户有关的个人信息。使用者应在充分了解事实的情况下提供这一信息，特别是当他本人进入时。`,





        "IDTRANSLATEPC8":`根据贝宁共和国《2017-20年数字法典法》的规定， 任何使用者有权查阅、纠正和反对有关他的个人资料， 提出书面和签名请求，并附上文件持有人签署的身份证明副本， 指定回答的地址。未公布我们网站"www.illicolove.com"的用户的个人信息, 在任何媒介或第三方不知情的情况下转让或出售。`,
        "IDTRANSLATEPC9":`遗传隐`,
        "IDTRANSLATEPC10":`你的个人资料是保密的，不会传达给第三方。
我们的约会服务的私人性质不允许我们将你的个人资料（姓名、联系人、地址等）传达给个人，无论他们的级别或质量如何。`,
        "IDTRANSLATEPC11": `有权进入`,
        "IDTRANSLATEPC12":`根据贝宁共和国数字法典的规定，www.illicolove.com网站的所有用户享有访问、更正、修改和删除与其个人相关的数据的权利。用户可以通过电子邮件发送请求，以以下电子邮件地址进行联系：info@illicolove.com。我们不会将收集的个人信息分享给第三方。`,
        "IDTRANSLATEPC13":`整改权`,






        "IDTRANSLATEPC14":`根据贝宁共和国数字法典的规定，www.illicolove.com网站的每位用户均有权要求更正、更新、删除、锁定或清除与其相关的数据，特别是那些可能不准确、错误、不完整、模糊或过时的数据。`,
        "IDTRANSLATEPC15":`保质期.`,
        "IDTRANSLATEPC16":`你的个人资料只由BAKO FAMILIA&COMPANY保存，时间与你对约会服务的需求相对应。但是,如果您的用户帐户处于非活动状态,则此存储时间不会超过13个月。`,
        "IDTRANSLATEPC17":`向主管当局投诉`,
        "IDTRANSLATEPC18":`如果您认为BAKO FAMILIA&COMPANY在访问其网站www.illicolove.com期间未遵守其收集的个人数据义务,您可以按照法律程序向个人数据保护局（APDP）提出投诉或请求。`,
        "IDTRANSLATEPC19":`知识产权`,
        "IDTRANSLATEPC20":`本网站的所有内容,包括图形、图像、文本、视频、动画、声音、徽标、gif和图标及其格式,都是BAKO FAMILIA&COMPANY的专有财产,但属于其他合作伙伴公司或作者的商标、徽标或内容除外。
未经BAKO FAMILIA&COMPANY的明确书面同意，严格禁止复制、分发、修改、改编、转播或出版这些各种内容，甚至是部分内容。`,
        "IDTRANSLATEPC21":`服务条件`,
        "IDTRANSLATEPC22":` www.illicolove.com网站有英文、西班牙文、德文、葡萄牙文、俄文、普通话（中文）、阿拉伯文、日文、意大利文和韩文版本。为了获得更好的使用舒适性,我们建议您使用兼容和现代的浏览器,例如：Chrome、Safari、Firefox。`,
        "IDTRANSLATEPC23":`资料和建议`,







        "IDTRANSLATEPC24":` BAKO FAMILIA&COMPANY实施其拥有的所有手段，以确保可靠的约会服务和网站的永久更新www.illicolove.com.但是,可能会出现错误或遗漏。因此,任何用户都可以在info@illicolove.com向我们发送建议或信息,并指出他们认为相关的站点更改。`,
        "IDTRANSLATEPC25":`曲奇`,
        "IDTRANSLATEPC26":`出于技术性能、统计和显示目的,网站www.illicolove.com可以使用cookie。Cookie是存储在终端上的小文本文件,它不允许识别用户,而是记录有关终端在网站上导航的信息。这个网站的一些部分如果没有接受cookie就无法运作。由此获得的数据旨在便利在此站点上的后续导航。Cookie也被用于各种观众和出席措施。`,
        "IDTRANSLATEPC27":` 拒绝安装cookie可能会使某些功能无法访问。但是，这个网站的任何用户都可以将他的终端配置为拒绝安装cookie如下：`,
        "IDTRANSLATEPC28":` Safari用户：选择Safari首选项,单击"隐私",然后选择与"Cookie and website data"相关的选项。永远都是
屏块：Safari不允许任何网站、第三方或
广告客户将Cookie和其他数据存储在您的Mac.上。这可能会阻止某些网站正常工作。`,





        "IDTRANSLATEPC29":` Safari用户：选择Safari首选项,单击"隐私",然后选择与"Cookie and website data"相关的选项。永远都是
屏块：Safari不允许任何网站、第三方或
广告客户将Cookie和其他数据存储在您的Mac.上。这可能会阻止某些网站正常工作。`,
        "IDTRANSLATEPC30":` Google Chrome用户：菜单；设置显示高级设置（位于页面底部）。然后,您必须单击"内容设置"按钮,然后选中"阻止来自第三方站点的cookie和数据"框,最后单击"确定"以验证您的选择。`,
        "IDTRANSLATEPC31":` Internet Explorer用户："Menu Internet Options Privacy（菜单）"选项卡和"Advanced（高级）"按钮上的"Advanced Privacy Settings（高级然后选中"忽略自动cookie管理"复选框,然后在"第三方Cookie"列中选择"拒绝"。`,
        "IDTRANSLATEPC32":` Microsoft Edge用户：Internet工具/选项选项卡。单击"Privacy（隐私）",然后选择"Block all cookie（`,




        "IDTRANSLATEPC33":`按照这方面的做法,某些Cookie可免于事先征得您的同意,因为它们对于本网站的运行至关重要。它们的目的是促进电子通信。其中包括接口的会话标识符、验证和自定义cookie。这些cookie由BAKO FAMILIA&COMPANY发行和管理，并且都受此政策的约束。`,
        "IDTRANSLATEPC34":`超文本链接`,
        "IDTRANSLATEPC35":` "www.illicolove.com"网站可提供指向其他网站或互联网上其他可用资源的链接。BAKO FAMILIA&COMPANY无法控制连接到其网站的网站。此外，它不对这些外部站点和来源的提供负责或承担责任。它不能对这些网站或外部来源的内容造成的任何损害负责。`,




        "IDTRANSLATECONSULTE1":`非洲`,
        "IDTRANSLATECONSULTE2":`欧洲`,
        "IDTRANSLATECONSULTE3":`世界其他国家`,
        "IDTRANSLATEPROFIL1": "有效帐户 ",
        "IDTRANSLATEPROFIL2": " 帐户无效",
        "IDTRANSLATEPROFIL3":`借方账户`,
        "IDTRANSLATEPROFIL4":`借方账户`,
        "IDTRANSLATEPROFIL5":`我的计划`,
        "IDTRANSLATEPROFIL6":`我的计划`, 
        "IDTRANSLATEPROFIL7":`我的个人数据`,
        "myNameIDX":` 删除您的帐户`,
        "myBtn":` 补足我的账户`,
        "myBtn2":` 补足我的账户`,
        "IDTRANSLATEPROFIL9":`返回主页`,
        "IDTRANSLATEPROFIL10":`退出`,
        "CONSULTEZLESANNONCES":`见出版物`,
        "IDTRANSLATEPROFIL11":`编辑您的出版物`, 
        "IDTRANSLATEPROFIL12":`编写出版物`,
       // "IDTRANSLATEPROFIL13":`Vous souhaite la Bienvenue !`,
        "exampleModalLongTitle":`一台价值95 FCFA，或1.10元.`,
        "errorSms":`必须输入一个数字。`,
        "SmspayId":`在此处输入单位数。`,
        "IDTRANSLATEPROFIL14":`返回`, 
        "payYourUnitybtn":`验证`,
        "CHOISEYOURPAIEMENT":`选择付款方式。`,
        "exampleModalLongTitleX":`保护您的帐户安全。`,
        "IDTRANSLATEPROFIL15":`请提供您永远不会忘记的回复。检索您的帐户时将请求此响应。如果没有此答桉,您的帐户将无法访问。`,
        "IDTRANSLATEPROFIL16":` 选择您的问题 `,
        "IDTRANSLATEPROFIL17":` 你的出生月是什么？`,
        "IDTRANSLATEPROFIL18":` 你最喜欢的颜色是什么?`,
        "IDTRANSLATEPROFIL19":`你怎么想象你的日常生活？`,
        "IDTRANSLATEPROFIL20":`什么对你最重要？`,
        "IDTRANSLATEPROFIL21":`激励你的人叫什么名字？`,
        "IDTRANSLATEPROFIL22":`你最喜欢的国家是什么？`,
        "IDTRANSLATEPROFIL23":`你最喜欢的球员是谁？`,
        "IDTRANSLATEPROFIL24":`你最喜欢的艺术家是谁？`,
        "IDTRANSLATEPROFIL25":`你的回答是什么？只要一个字。没有空间。`,
        
        "submitFormID":`同意`,
        "TOCLOSEMODALID":`关闭`,   
        "IDTRANSLATEPROFIL26":`同意`, 
        "IDTRANSLATEPROFIL27":`安全应对措施`,
        "payYourUnity":` 写单位数 `,
        congratulationsTitle: "恭喜！",
        accountSecureMessage: "您的帐户是安全的。谢谢！",       
        accountSecureMessageX: "不要放置空间。谢谢！",


        "IDTRANSLATEPROFIL28":`您的账户余额不足，请购买更多单位以查看您感兴趣的广告中的联系方式。`,
        "IDTRANSLATEPROFIL29":`您目前无法购买单位。请首先使用您的3个免费单位。谢谢。`,
        "IDTRANSLATEPROFIL30W":`你确定`,
        "IDTRANSLATEPROFIL30":`你不能回去！`,
        "IDTRANSLATEPROFIL31":`是的,删除它!`, 
        "IDTRANSLATEPROFIL32":`你确定`,
        "IDTRANSLATEPROFIL33":` 注销后,您可以选择再次登录。`,
        "IDTRANSLATEPROFIL34":`是的,要断开连接!`,
        "IDTRANSLATEPROFIL35":`离线`,
        "IDTRANSLATEPROFIL36":`您已断开连接。`,
        "IDTRANSLATEPROFIL37":`您想访问我们的主页吗?`,
        "IDTRANSLATEPROFIL38":`已删除!`,
        "IDTRANSLATEPROFIL38X":` 成功。`,
        "IDTRANSLATEPROFIL39X":`您的照片已成功更新。`,
        "IDTRANSLATEPROFIL40X":` 错`,
        "IDTRANSLATEPROFIL41X":`无法更新您的照片。`,

        "IDTRANSLATEPROFIL39":` 您的帐户已被删除!!`,
        "IDTRANSLATEPROFIL40":`已删除!`,
        "IDTRANSLATEPROFIL41":`删除用户时出错! `,
        "IDTRANSLATEPROFIL42":`出现错误`,
        "IDTRANSLATEPROFIL42Q":`出现错误`,
        "IDTRANSLATEPROFIL42QX":`出现错误`,
        "IDTRANSLATEPROFIL43":`字段填写不完整！`, 
        "IDTRANSLATEPROFIL44":`出了点问题！`,
        "IDTRANSLATEPROFIL44IN":`各位用户，这种支付方式很快就可以使用了。现在,请使用Feexpay完成您的交易。谢谢！`,
        "IDTRANSLATEPROFIL45":`数据未更新!`,
        "IDTRANSLATEPROFIL46":` 您不再有任何单位。请购买一些。转到操控板。`,
        "IDTRANSLATEPROFIL47":`你确定`,
        "IDTRANSLATEPROFIL48":` 编辑广告时,它将再次提交给管理员进行验证。此过程可能需要24小时。`,




        "IDTRANSLATEPROFIL49":`返回`,
        "IDTRANSLATEPROFIL50":`是的！变化.`,
        "IDTRANSLATELOGIN1":`登录`,
        "IDTRANSLATELOGIN2":`封邮件`,
        "IDTRANSLATELOGIN3":`您的电子邮件地址`,
        "IDTRANSLATELOGIN4":`密码`,
        "IDTRANSLATELOGIN5":`您的密码`,
        "IDTRANSLATELOGIN6":`记住我`,
        "IDTRANSLATELOGIN7":`遗忘密码`,
        "IDTRANSLATELOGIN8":`我没有帐户。`,
        "IDTRANSLATELOGIN9":`免费注册`,
        "IDTRANSLATELOGIN10":`登录`,
        "IDTRANSLATELOGIN11":`成功`,
        "IDTRANSLATELOGIN12":`您已成功登录!`,
        "IDTRANSLATELOGIN13":`对不起`,
        "IDTRANSLATELOGIN14":`您的密码不正确!`,
        "IDTRANSLATELOGIN15":`对不起`,
        "IDTRANSLATELOGIN16":`此电子邮件不存在用户!`,
        "IDTRANSLATESIGNUP1":`登记`,
        "IDTRANSLATESIGNUP2":`假名`, 
        "IDTRANSLATESIGNUP3":`假名`,
        "IDTRANSLATESIGNUP4":`全名`, 
        "IDTRANSLATESIGNUP5":`全名`,
        "IDTRANSLATESIGNUP6":`封邮件`,
        "IDTRANSLATESIGNUP7":`您的电子邮件地址`,
        "IDTRANSLATESIGNUP8":`密码`,
        "IDTRANSLATESIGNUP9":`密码`,
        "IDTRANSLATESIGNUP10":`我已经阅读并接受了这些条款和条件`,
        "IDTRANSLATESIGNUP11":`阅读并接受我们的条款和条件`,
        "IDTRANSLATESIGNUP12":`我已经有帐户了。`,
        "IDTRANSLATESIGNUP13":`登录`,
        "IDTRANSLATESIGNUP14":`对不起`,




        "IDTRANSLATESIGNUP15":`此电子邮件地址或电话号码已与一个帐户关联。`,
        "IDTRANSLATESIGNUP16":`成功`,
        "IDTRANSLATESIGNUP17":`您已成功注册!`,
        "IDTRANSLATESIGNUP18":` 将电子邮件地址发送到Firebase时出错 `, 
        "IDTRANSLATESIGNUP19":`不要放置空间。谢谢！`,
        "IDTRANSLATESIGNUP19PHONE":`请提供有效的电话号码。`,
        "IDTRANSLATESIGNUP19PHONEX":`请提供有效的电话号码。`,
        "IDTRANSLATEFORGET1":`发送注册时使用的电子邮件地址。`,
        "IDTRANSLATEFORGET2":`电子邮件`,
        "IDTRANSLATEFORGET3":`电子邮件`,
        "IDTRANSLATEFORGET4":`送`,
        "IDTRANSLATEFORGET5":`验证`,
        "IDTRANSLATEFORGET6":`给出正确答桉！`,
        "IDTRANSLATEFORGET7":`输入您的新密码!`,
        "IDTRANSLATEFORGET8":`输入您的新密码!`, 
        "IDTRANSLATEFORGET9":`不错`,
        "IDTRANSLATEFORGET10":`密码已成功更新!`,
        "IDTRANSLATEFORGET11":`登录`,
        "IDTRANSLATEFORGET12":`好吧`,
        "IDTRANSLATEFORGET13":`更新电子邮件时出错。`,
        "IDTRANSLATEFORGET14":`这不是正确的答桉`,
        "IDTRANSLATEFORGET15":`用户不存在。`, 
        "IDTRANSLATEFORM1":`我的个人资料`,
        "IDTRANSLATEFORM1W":`我的个人资料`,
        "IDTRANSLATEFORM2":`我的个人资料`,
        "IDTRANSLATEFORM3":`我的个人资料`,
        "IDTRANSLATEFORM4":`我正在寻找的个人档案`,
        "IDTRANSLATEFORM4W":`我正在寻找的个人档案`,
        "IDTRANSLATEFORM5":`我正在寻找的个人档案`,
       // "IDTRANSLATEFORM6":`VEUILLEZ REMPLIR LE FORMULAIRE CI-DESSOUS.`,
        "IDTRANSLATEFORM7":`给出准确、有洞察力的信息`,
        "IDTRANSLATEFORM8":`我的居住国 <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM9":`我的居住城市 <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM10":`名称或别名 <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM11":`我的年龄 <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM9PL":`我的居住城市 `,





        "IDTRANSLATEFORM10X":`我的居住城市`,
        "IDTRANSLATEFORM11X":`我的年龄`,
        "IDTRANSLATEFORM8X":`我的居住国`,
        "IDTRANSLATEFORM9X":`我的年龄`,
        "IDTRANSLATEFORM12":`请只输入数字.<i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM13":`我的性别 <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM14":`男人`,
        "IDTRANSLATEFORM15":`妇女`,
        "IDTRANSLATEFORM16":`变性者`,
        "IDTRANSLATEFORM17":`性别流动`,
        "IDTRANSLATEFORM18":`双性`,
        "IDTRANSLATEFORM19":` 非性别`,
        "IDTRANSLATEFORM20":`非浪漫`,
        "IDTRANSLATEFORM21":`性冷淡`,
        "IDTRANSLATEFORM22":`双性恋`,
        "IDTRANSLATEFORM23":`顺性别`,
        "IDTRANSLATEFORM24":`顺性别规范`,
        "IDTRANSLATEFORM25":`半恋爱`,
        "IDTRANSLATEFORM26":`半性恋`,
        "IDTRANSLATEFORM27":`异性恋`,
        "IDTRANSLATEFORM28":`他/她`,
        "IDTRANSLATEFORM29":`误性别`,
        "IDTRANSLATEFORM30":`非二元性别`,
        "IDTRANSLATEFORM31":`泛性恋`,
        "IDTRANSLATEFORM32":`多情`,
        "IDTRANSLATEFORM33":`酷儿`,
        "IDTRANSLATEFORM34":`变性者`,
        "IDTRANSLATEFORM35":`性别过渡`,
       // "IDTRANSLATEFORM36":`VEUILLEZ REMPLIR LE FORMULAIRE CI-DESSOUS.`,
        "IDTRANSLATEFORM37":`提供准确而有洞察力的信息。`,
        "IDTRANSLATEFORM38":`我的婚姻状况 <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM39":`单身`,
        "IDTRANSLATEFORM40":`在谈恋爱`,
        "IDTRANSLATEFORM41":`离了婚`,
        "IDTRANSLATEFORM42":`鳏夫/寡妇`,
        "IDTRANSLATEFORM43":`我的国籍 <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM44":`电话 <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM45":`仅输入不带国家/地区前缀的号码<i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM46":`我的职业 <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM47":`我的工作`,
       // "IDTRANSLATEFORM48":`VEUILLEZ REMPLIR LE FORMULAIRE CI-DESSOUS.`,
        "IDTRANSLATEFORM49":`提供准确而有洞察力的信息。`,
        "IDTRANSLATEFORM50":`我想要一次约会 <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM51":`友情，消除孤独的伴侣`,
        "IDTRANSLATEFORM52":` "持久`,
        "IDTRANSLATEFORM53":`能导致婚姻`,
        "IDTRANSLATEFORM54":`身份证`,
        "IDTRANSLATEFORM55":`照片 1 <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM56":`照片 2 <i class="fa fa-star required"></i>`,
       // "IDTRANSLATEFORM57":`VEUILLEZ REMPLIR LE FORMULAIRE CI-DESSOUS.`,
        "IDTRANSLATEFORM58":`提供准确、有洞察力的信息。`,
        "IDTRANSLATEFORM59":`她喜欢的类型 <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM60":`男人`,
        "IDTRANSLATEFORM61":`妇女`,
        "IDTRANSLATEFORM62":`变性者`,
        "IDTRANSLATEFORM63":`性别流动`,
        "IDTRANSLATEFORM64":`双性`,
        "IDTRANSLATEFORM65":` 非性别`,
        "IDTRANSLATEFORM66":`非浪漫`,
        "IDTRANSLATEFORM67":`性冷淡`,
        "IDTRANSLATEFORM68":`双性恋`,




        "IDTRANSLATEFORM69":`顺性别`,
        "IDTRANSLATEFORM70":`顺性别规范`,
        "IDTRANSLATEFORM71":`半恋爱`,
        "IDTRANSLATEFORM72":`半性恋`,
        "IDTRANSLATEFORM73":`异性恋`,
        "IDTRANSLATEFORM74":`他/她`,
        "IDTRANSLATEFORM75":`误性别`,
        "IDTRANSLATEFORM76":`非二元性别`,
        "IDTRANSLATEFORM77":`泛性恋`,
        "IDTRANSLATEFORM78":`多情`,
        "IDTRANSLATEFORM79":`酷儿`,
        "IDTRANSLATEFORM80":`变性者`,
        "IDTRANSLATEFORM81":`性别过渡`,
        "IDTRANSLATEFORM82":`他的年龄组 <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM83":`婚姻状况 <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM84":`单身`,
        "IDTRANSLATEFORM85":`在谈恋爱`,
        "IDTRANSLATEFORM86":`离了婚`,
        "IDTRANSLATEFORM87":`鳏夫/寡妇`,
        "IDTRANSLATEFORM88":`他的居住国 <i class="fa fa-star required" ></i>`,
        "IDTRANSLATEFORM89":`可以选择多个国家。 <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM90":`他的国家`,
        "IDTRANSLATEFORM91":`他的居住国`,
      //  "IDTRANSLATEFORM92":`VEUILLEZ REMPLIR LE FORMULAIRE CI-DESSOUS.`,
        "IDTRANSLATEFORM93":`提供准确而有洞察力的信息。`,
        "IDTRANSLATEFORM94":`描述您想要的物理方面。`,
        "IDTRANSLATEFORM95":`他的住宅镇 <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM96":`他的城市`,
        "IDTRANSLATEFORM97":`他的职业 <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM98":`他的职业`,
        "IDTRANSLATEFORM99":`进一步的细节。`,
        "IDTRANSLATEFORM100":`进一步的细节。`,
        "IDTRANSLATEFORM10w":` 身体特征`,
        "IDTRANSLATEFORM101":`下一个`,
        "IDTRANSLATEFORM102":`上一次`,
        "IDTRANSLATEFORM103":`送`,




        "IDTRANSLATEFORM104":`<p > 本表格所收集的个人资料 <strong style="color: #000080;">BAKO FAMILIA & COMPANY</strong> 将专门处理，以确保你所要求的约会服务的顺利运行。收集到的个人数据未经您同意不会传达给任何人。
根据贝宁共和国关于保护个人数据的《2017-20号数字代码法》的规定，收集到的数据的处理工作已在APDP上宣布。</em> </p>
        <hr>
        <p class="mb-0">根据上述法律，您可以在以下网址行使访问、反对、纠正和删除的权利： <strong style="color: #000080;">BAKO FAMILIA & COMPANY</strong>.
        </em></p>`,
        "IDTRANSLATEFORM105":`你的形象太小了。请选择至少300 x 300像素的图像。`,
        "IDTRANSLATEFORM106":`调用REST国家API时出错`,
        "IDTRANSLATEFORM107":`简单地把没有前缀的数字`,
        "IDTRANSLATEFORM108":`请选择这个国家。`,
        "IDTRANSLATEFORM109":`成功`,
        "IDTRANSLATEFORM110":`您的表格将在24小时内提交验证<i class="fa fa-heart"></i>.`,
        "IDTRANSLATEFORM111":`对不起`,
        "IDTRANSLATEFORM112":`并非所有字段都已填写。`,
        "IDTRANSLATEUSERD1":`联系我  <svg xmlns="http://www.w3.org/2000/svg" width="10.444" height="9.7"><defs><clipPath id="a"><path fill="none" d="M0 0h10.444v9.7H0z"/></clipPath></defs><g fill="none" stroke="#2a46cc" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.438" clip-path="url(#a)"><path d="M.719 4.85h8.709M5.594 8.683L9.427 4.85M5.594 1.017L9.427 4.85"/></g></svg>`,





        "IDTRANSLATEUSERD2":`联系我`,
        "IDTRANSLATEUSERD3":`<i class="bi bi-alexa" style="font-size: 3vh !important;"></i>我的个人资料 `,
        "IDTRANSLATEUSERD4":`答复`,
        "IDTRANSLATEUSERD5":`我的居住城市`,
        "IDTRANSLATEUSERD6":`名称或别名`,
        "IDTRANSLATEUSERD7":`我的年龄范围：`,
        "IDTRANSLATEUSERD8":`我的性别`,
        "IDTRANSLATEUSERD9":`婚姻状况`,
        "IDTRANSLATEUSERD10":`我的国籍`,
        "IDTRANSLATEUSERD11":`我的工作或职业`,
        "IDTRANSLATEUSERD12":`我想要一次约会`,
        "IDTRANSLATEUSERD13":`我的物理偏好:`,
        "IDTRANSLATEUSERD14":`进一步的细节:`,
        "IDTRANSLATEUSERD15":`<i class="bi bi-alexa" style="font-size: 3vh !important;"></i> 我寻找的个人档案`,
        "IDTRANSLATEUSERD16":`答复`,
        "IDTRANSLATEUSERD17":`他的性别 :`,
        "IDTRANSLATEUSERD18":`他的年龄组`,
        "IDTRANSLATEUSERD19":`婚姻状况`,
        "IDTRANSLATEUSERD20":`他的居住国家`,
        "IDTRANSLATEUSERD21":`他的居住城市`,
        "IDTRANSLATEUSERD22":`他的工作或职业 :`,
        "TIDTRANSLATEUSERD23":`在线上`,

        "IDTRANSLATEUSERD24":`<i class="fas fa-database" style="font-size: 5vh !important; color: #FFB6C1;"></i> 没有数据。`,
        "IDTRANSLATEUSERD25":`没有数据。`,
        "IDTRANSLATEUSERD26":`有一个错误。`,
        "IDTRANSLATEUSERD27":`您的帐户已借记`,
        "IDTRANSLATEUSERD28":`您的数据未更新。`,
        "IDTRANSLATEUSERD29":`您只能在搜索表单发布后与其他用户联系。`,
        "IDTRANSLATEUSERD30":` 您要发布一则广告吗？`,
        "IDTRANSLATEUSERD31":`您的点数已用完。您无法再联系其他用户’.`,
        "IDTRANSLATEUSERD32":`您想购买点数吗？`,
        "IDTRANSLATEUSERD33":`好`,
        "IDTRANSLATEUSERD34":`看看他的个人资料！`,
        "IDTRANSLATEUSERD35":`<i class="bi bi-eye" style="color: white;"></i> 点击以显示`,
        "texteIDTRANSLATEUSERD24YX": "在线",
        "myNameIDwallet":"撤回您的佣金。",
        "MYEWALLETID":`<i class="fa fa-align-left"></i>我的钱包`,
        "MYEWALLETID1":"结余总额", 
        "comeBackId":"返回",
        "idTogetwallet":"提取您的收益",
        "HISTORYISMY":"历史",
        "IDTRANSLATEWALLETU":"正在进行",
        "IDTRANSLATEWALLETX":"付了",
        "IDTRANSLATEWALLET":"真抱歉",
        "IDTRANSLATEWALLETM":"您的转会失败。请稍后再试", 
        "IDTRANSLATEWALLET1":"恭喜啊",
        "IDTRANSLATEWALLET2":"您的转帐已成功完成!",
        "TITLEWALLETID": "电子钱包",
        "IDTRANSLATEFOEMXX": "请只输入字母,此栏位中不允许输入数字。",
        "linkInput": "在此复制您的会员链接",
        "TERMINATOR" :" 结束",
        "PHOTOID" :" 照片",
        "TERMINATORW" :" 一切都结束了",
        "PHOTOIDW" :" 照片",
        "STEPS14":"步骤1-4",
        "STEPS23":"步骤2-4",
        "STEPS34":"步骤3 - 4",
        "STEPS44":"步骤 4 - 4",
        "IDTRANSLATEPROFIL29FILE" :" 您要发送此图像吗?", 
        "IDTRANSLATEPROFIL29FILE1" :" 返回",
        "IDTRANSLATEPROFIL29FILE2" :" 啊",
        "IDTRANSLATESIGNUP19OPTIONSERROR" :" 在地理位置请求期间发生错误。",
        "IDTRANSLATESIGNUP19OPTIONS" :" 我们很遗憾地通知您,您不能使用我们的服务,直到您的地理位置被接受.",
        "IDTRANSLATESIALERT1" :" 信息",
        "IDTRANSLATESIALERT2" :"亲爱的访客，为了确保您的安全并打击虚假广告，illicolove 会定位您的居住国家",
        "IDTRANSLATESIALERT3" :" 是的，我接受了！",
        "IDTRANSLATESIALERT4" :" 拒绝",
        "CONTRACTID1":`隶属关系合同`,
        "CONTRACTID2":`      之间：illicolove，以下简称"交友网站"，
*我，以下简称"附属公司".`,
        "CONTRACTID3":`合同目的`,
        "CONTRACTID4":`本联营协议的目的是管理联营公司与联营公司之间在交友网站联营计划方面的关系<a href="https://illicolove.com">illicolove.com</a>`,
        "CONTRACTID5":`1. 联盟计划 `,
        "CONTRACTID6":` Illicolove经营一个在线会员计划来推广其约会服务。`,
        "CONTRACTID7":`2. 联盟会员的角色`,
        "CONTRACTID8":`联盟会员承诺使用illicolove提供的独特联盟链接以及网站批准的其他推广方法来推广该交友网站的服务。`,
        "CONTRACTID9":`3. 联盟会员的报酬`,
        "CONTRACTID10":`3.1. 附属机构将为每个在网站上注册的新成员收取100 F CFA的佣金<a href="https://illicolove.com">illicolove.com</a> 通过联属公司独特的联属链接，发布一个爱情搜索广告。`,
        "CONTRACTID11":`3.2. 此外，联盟会员将会获得其通过联盟链接推荐的会员每次购买产生的10%佣金。`,
        "CONTRACTID11X":`3.3 100 F CFA佣金只会在新成员购买大于100 F CFA的单位时收取，以避免向佣金舞弊。`,
        "CONTRACTID12":`4. 佣金支付`,
        "CONTRACTID13":` Illicolove将根据移动资金或银行转账的要求,根据会员的选择,每季度定期向会员支付佣金。附属公司应承担退货费用。`,
        "CONTRACTID14":`5. 合同期限`,
        "CONTRACTID15":`本隶属关系协议自附属机构接受之日起生效，直至任何一方终止为止，但须有三十（30）天的书面通知。`,
        "CONTRACTID16":`6. 终止`,
        "CONTRACTID17":` Illicolove或联盟可随时通过向另一方提供书面通知终止本协议。任何未付佣金将按照本合同的条款支付。`,
        "CONTRACTID18":`7. 适用法律`,
        "CONTRACTID19":`本合同受贝宁法律管辖，本合同引起的任何争端，如不能友好解决，将由科托努商事法院专属管辖。`,
        "ANNONCEAFFILIATEID" : `        <div class="box--list__items">
        <div class="box--list__item" style="  padding-top: 0 !important; margin-top: 0 !important;">
            <h2 class="box--list__title box--list__titlex" >通过帮助人们在illicolove上找到爱情来赚钱！</h2>
            <p class="box--list__description">寻找利润丰厚的会员机会？加入我们独特的会员计划,增加您的收入
帮助别人找到自己的灵魂伴侣。以下是它的工作方式： <br>
              ✅ 每位注册并通过您的会员链接在我们的网站上发布爱心研究广告的新会员将获得100非洲金融共同体法郎。 <br>

              ✅ 此外，您可以获得您所推荐的会员每次购买所产生的10%佣金。他们花费越多，您赚得越多！</p>
        </div>
        
        <div class="box--list__item">
            <h2 class="box--list__title box--list__titlex"> 为什么选择我们的会员计划?</h2>
            <div class="box--list__描述">
              ✅ 一有人报名就挣钱，发布他们的搜索广告。 <br>
              ✅ 每当您的下线会员在我们的网站上购买单位，您都将获得持续的佣金。<br>
              ✅ 以瞄准寻求爱情的观众为目标，这是一个令人兴奋且持续增长的细分市场。 <br>
              
            </div>
        </div>
        
        <div class="box--list__item">
            <h2 class="box--list__title"> 加入我们的计划</h2>
            <div class="box--list__描述">✅  "今天加入我们的会员计划，开始通过帮助人们在illicolove上找到爱情来赚钱！ 💑
              
             </div>
        </div>
        <div class="box--list__item">
          <h2 class="box--list__title"> 注册</h2>
          <div class="box--list__描述"> 
            ✅ 立即注册并增加收入： <a href="./v/login/signup.html">注册</a>
              
            如有任何问题,请联系我们info@illicolove.com </div>
      </div>
    </div>`,
          "IDTRANSLATE6WX":`语言种类 <span> <i class="bi bi-globe2"></i></span> <i class="bi bi-chevron-down"></i> `,
        }

      },
      ru:{
        
   translation : {
    "IDTRANSLATE1": " Прием ",
   // "IDTRANSLATE2": "À propos",
    "IDTRANSLATE3": ` Как это работает?`,
    "IDTRANSLATE4": ` Условия `,
    "IDTRANSLATE5":" Общие условия использования ",
    "IDTRANSLATE6":" Политика конфиденциальности ",
    "IDTRANSLATE6X":" Наша партнерская система ",
    "IDTRANSLATE7":" Контакт ",
    "IDTRANSLATE8":" Зарегистрироваться ",
    "IDTRANSLATE9":" Подключиться ",
    "IDTRANSLATECONTACT1":" Контакт ",
    "IDTRANSLATECONTACT2":" Свяжитесь с нами ",
    "IDTRANSLATECONTACT3":" Адрес ",
    "IDTRANSLATECONTACT4":' Телефон ',
    "IDTRANSLATECONTACT5":" Электронная почта ", 
    "IDTRANSLATECONTACT6":" Социальных сетях ",
    "IDTRANSLATETITLE":" Объявления ",
    "IDTRANSLATETITLEFORM":" Бланк ",
    "IDTRANSLATE1INF1":`Ваш адрес электронной почты собирается и обрабатывается БАКО FAMILIA & COMPANY, чтобы держать вас в курсе новых возможностей Illicolove сайта и его обновления.
    В соответствии с Законом 2017-20 о цифровом коде в Республике Бенин, о защите персональных данных, вы можете отказаться от подписки или осуществлять свои права доступа, возражения, исправления и удаления, отправив письмо на info@illicolove.com`,
    "IDTRANSLATE10":"illicolove,",
    "IDTRANSLATE11":` Ваша встреча, борьба против безбрачия и одиночества.`,
    "IDTRANSLATE12":` Мы рассматриваем недобровольное одиночество как гуманитарную проблему и полны решимости найти решение для тех, кто страдает.`,
    "IDTRANSLATE13":` Зарегистрироваться бесплатно `,
    "IDTRANSLATE13KLM":` Перейти к вашему профилю `,
   // "IDTRANSLATE14":`À propos de nous`,
   // "IDTRANSLATE15":`Votre plateforme de rencontres en ligne illicolove.com vous est proposée par les Établissements BAKO FAMILIA & COMPANY, une entreprise individuelle(EI) de droit béninois immatriculée au Registre du Commerce et du Crédit Mobilier RCCM RB/COT/08/A4101 ; à l’Identifiant Fiscal Unique (IFU) 3200800938610.`,

   // "IDTRANSLATE16":`Elle a pour activités, le Wedding planning (accompagnement dans l’organisation de mariage), le Tourisme-Loisirs, l’organisation de foires et Salons. Elle a été créée en Mai 2008 à Cotonou. `,
   // "IDTRANSLATE17":`Plus de détails`,
    "IDTRANSLATE18":` Наших целей `,
    "IDTRANSLATE19":` Статья 16`,
    "IDTRANSLATE20":` Наша Цель `,

    "IDTRANSLATE17USER":` Выбор региона `,
    "IDTRANSLATE18USER":` Данные о пользователе `,
    "IDTRANSLATE19USER":` Профиль `,

    "IDTRANSLATE21":` Внедрение этой онлайн-платформы знакомств отвечает нашим инициативам по борьбе с безбрачием и одиночеством.
    Он воплощает наши действия в направлении, определенном во Всеобщей декларации прав человека в ее статье 16, в которой напоминается о праве женщин и мужчин на вступление в брак и о важности семьи, которую должно защищать общество и государство.`,
   "IDTRANSLATE22":` Наши ценности :`,
   "IDTRANSLATE23":` Надежность,`,
   "IDTRANSLATE24":` Вежливость и `,
   "IDTRANSLATE25":` Конфиденциальность.`, 
   "IDTRANSLATE26":` С брачного возраста мужчина и женщина без каких-либо ограничений по признаку расы, национальности или религии имеют право вступать в брак и создавать семью. Они имеют равные права в отношении брака, во время брака и при его расторжении. `,
   "IDTRANSLATE27":` Брак может быть заключен только при свободном и полном согласии будущих супругов. `,
   "IDTRANSLATE28":` Семья является естественным и основополагающим элементом общества и имеет право на защиту общества и государства.  
Одиночество, безбрачие, социальная изоляция представляют собой гуманитарный императив, который бросает вызов государственным органам, ассоциациям и компаниям на местах.  Хроническое и непроизвольное одиночество - это индивидуальная драма, переживаемая теми, кто страдает, большую часть времени, в тишине. illicolove.com родился в этом контексте, с желанием предложить услуги онлайн-знакомств по-другому и просто; с проверенной охотой на вымышленные профили. 
Добро пожаловать!`,
   "IDTRANSLATE29":` Мы нацелены только на людей :`,
   "IDTRANSLATE30":` Молодые люди не моложе 18 лет.`,
   "IDTRANSLATE31":` Непроизвольные холостяки, в отчаянии и разочаровании..`,
   "IDTRANSLATE32":` Разведенные.`,
   "IDTRANSLATE33":` Вдовцов-Вдов.`,
   "IDTRANSLATE34":` Наших Пользователей `,
   "IDTRANSLATE35":` Всех Наших Пользователей `,
   "IDTRANSLATE36":` В Африке `,
   "IDTRANSLATE37":` В Европе `,
   "IDTRANSLATE38":` Других странах мира `,
  // "IDTRANSLATE39":`Notre équipe`,
  // "IDTRANSLATE40":`Directrice`,
  // "IDTRANSLATE41":`Relectrice, et Responsable marketing`,
  // "IDTRANSLATE42":`Développeur et SEO`,


   "IDTRANSLATEX1":` Этапы использования `,
   "IDTRANSLATEX2":` Вот как работает illicolove.`,
   "IDTRANSLATEX3":` Регистрация `,
   "IDTRANSLATEX4":` После регистрации, Illicolove предлагает три (03) единиц стоит 295 франков КФА или 0,43 евро.
   Единица измерения стоит 95 франков КФА или 0,144 евро.`,
   "IDTRANSLATEX5":` Соединение `,
   "IDTRANSLATEX6":` Подключение к Illicolove позволяет получить доступ ко всем функциям и услугам, зарезервированным для зарегистрированных пользователей.`,
   "IDTRANSLATEX7":` Подать объявление `,
   "IDTRANSLATEX8":` Нажав на кнопку «Опубликовать рекламу» вы можете выбрать публикацию либо на странице «Африка», либо на странице «Европа», либо на странице «Другие страны мира», в зависимости от места вашего проживания. Просто заполните форму поиска, которая появится.`,




   "toopenPUAID":` далее...`,
   "openPUA":`Мы приглашаем Вас опубликовать свое объявление на странице вашего географического района проживания, однако, Вы можете проконсультироваться и связаться с любым профилем поиска объявления за пределами вашего обычного географического района.
     Например, если вы живете во Франции, вы должны опубликовать свое объявление на странице
     «Европа» и может консультировать и связываться с рекламой на страницах
     «Африка», «Европа» и «Другие страны мира»
     Когда вы заполните и отправьте вашу форму поиска, ваша
     появится в течение 24 часов, если мы будем судить ваш профиль
     надежная после корректуры и возможных проверок. Наша команда проверки и проверки может написать вам лично, чтобы заверить вас, что ваш профиль является надежным. Вас могут попросить сделать голосовой или видеозвонок о вашей личности. С учетом этого, проверка и появление вашего объявления на Illicolove может превышать 24 часа. Своевременность публикации вашего объявления будет зависеть от вас. Мы систематически отбрасываем все причудливые, нереалистичные объявления и особенно ложные профили, без предупреждения.
     Если у вас возникли какие-либо трудности с доступом к illicolove.com, пожалуйста, свяжитесь с нами по info@illicolove.com`,
    "IDTRANSLATEX9":` Проверка учетной записи пользователя `,
    "IDTRANSLATEX10":` Заполните форму и нажмите на «ОТПРАВИТЬ». Мы проверим и проверим вашу форму в течение 24 часов. Вы получите подтверждение. Если требуется дополнительная проверка, мы сообщим вам по электронной почте.`,
    "IDTRANSLATEX11":` Смотреть объявление `,
    "IDTRANSLATEX12":` Кнопка "Просмотреть объявления" приводит к трем другим кнопкам:  Африка (Африка Объявления), Европа (Европа Объявления) и другие страны мира (Африка и Европа Объявления). Встреча с мужчиной или женщиной вашей жизни на нелколове будет стоить вам, возможно, только 95 франков КФА или 0,14 евро.
    Это то, что вы платите за каждый блок, взятый у вас, когда вы нажимаете на кнопку
    «Связаться со мной» профиля, который особенно привлекает ваше внимание.`,
    "IDTRANSLATEX13":` Приобретение единиц `,
    "IDTRANSLATEX14":` Вы можете пополнить свою учетную запись (Мой план) по своему усмотрению, чтобы продолжить поиск встреч среди опубликованных объявлений. Личный дебетовый счет, который вы получите, как только вы зарегистрируетесь, позволит вам пополнить его, используя выбранный способ оплаты. ВАЛЮТА БИЛЛИНГА на неликколове - франк CFA (XOF).  1 € = 655,957 XOF.`,
    "IDTRANSLATEX15":` Часто задаваемые вопросы.`,
    "IDTRANSLATEX16":` Могу я устроить хорошую встречу по illicolove ?`,
    "IDTRANSLATEX17":` Да, при условии правильного заполнения формы поиска и предоставления достоверной информации о себе.`,




    "IDTRANSLATEX18":` Твой сайт знакомств платит?`,
    "IDTRANSLATEX19":` Да, только чтобы проконсультироваться по контактному адресу профиля, который особенно сохранил ваш интерес.`,
    "IDTRANSLATEX20":` Сколько стоит обращение к контактному адресу профиля, который меня привлекает и интересует?`,
    "IDTRANSLATEX21":`95 FCFA или около 14 рублей или 0,14 евро.`,
    "IDTRANSLATEX22":` Ваш сайт знакомств свободен?`,
    "IDTRANSLATEX23":` Да, регистрация и публикация объявления поиска любви бесплатно на illicolove.`,
    "IDTRANSLATEX24":` Как опубликовать объявление о свиданиях?`,
    "IDTRANSLATEX25":` После регистрации на Illicolove нажмите на кнопку или вкладку «ОПУБЛИКОВАТЬ ОБЪЯВЛЕНИЕ». Затем на появившейся странице выберите название континента, которое соответствует вашему континенту обычного проживания. Наконец, заполните форму поиска, которая появится и представить.`,
    "IDTRANSLATEX26":` Могу ли я жить в Африке и связаться с профилем за пределами Африки?`,
    "IDTRANSLATEX27":` Да!`,
    "IDTRANSLATEX28":` Могу ли я жить в Европе и связаться с профилем за пределами Европы?`,
    "IDTRANSLATEX29":` Да!`,
    "IDTRANSLATEX30":` Могу ли я жить в Европе и публиковать свое поисковое объявление на страницах «Африка» и «Другие страны мира»?`,
    "IDTRANSLATEX31":` Нет! Размещайте свое поисковое объявление только на странице, соответствующей вашему району проживания.`,
    "IDTRANSLATEX32":` Могу ли я пополнить свой неограниченный счет мобильными деньгами?`,
    "IDTRANSLATEX33":` Да!`,
    "IDTRANSLATEX34":` Какова стоимость подписки на вашем сайте?`,
    "IDTRANSLATEX35":` У нас нет подписки.`,
    "IDTRANSLATEX36":` Как пополнить свой счет?`,
    "IDTRANSLATEX37":` Мы предлагаем вам платежную систему, защищенную несколькими платежными агрегаторами. В зависимости от Вашего удобства пополните счет кредитной картой или мобильными деньгами.  Под вашим профилем на вашей персональной приборной панели нажмите зеленую кнопку "ПОПОЛНИТЬ МОЙ СЧЕТ" и просто следуйте инструкциям.`,
    "IDTRANSLATEX38":` Нужно ли мне платить, чтобы опубликовать мою рекламу?`,
    "IDTRANSLATEX39":` Нет! Публикация объявления поиска бесплатна.`,
    "IDTRANSLATEX40":` Нужно ли мне платить за просмотр рекламы?`,
    "IDTRANSLATEX41":` Нет! Консультация по рекламе бесплатна, это получение контактного адреса, содержащегося в рекламе, которая оплачивается.`,
    "IDTRANSLATEX42":` Как работает ваша система закупок единиц?`,
    "IDTRANSLATEX43":` При регистрации Вы автоматически и бесплатно получаете три (03) кредитных единицы, что позволяет Вам просматривать три (03) контактных адреса в рекламе по Вашему выбору. Каждая единица имеет стоимость 95 FCFA или около 14 российских рублей или 0,14 евро.
    Когда ваши подразделения заканчиваются, вы можете купить их по своему усмотрению и мощности. Количество единиц, которое вы можете купить, варьируется от одного до количества единиц по вашему выбору.`,
    "IDTRANSLATEX44":` У моих покупок есть срок годности?`,
    "IDTRANSLATEX45":` Нет! Это для неограниченного срока действия.`,
    "IDTRANSLATEX46":` Должен ли я подписаться, чтобы наслаждаться вашим сервисом знакомств?`,




    "IDTRANSLATEX47":` Подписка на наши услуги отсутствует, кроме подписки на новостную рассылку, которая является факультативной.`,
    "IDTRANSLATEX48":` Какова ваша политика конфиденциальности?`,
    "IDTRANSLATEX49":`Мы придаем большое значение конфиденциальности вашей информации. Ваши персональные данные защищены и не передаются третьим лицам без вашего согласия. Вы можете ознакомиться с нашей политикой конфиденциальности для получения более подробной информации`,
    "IDTRANSLATEX50":` здесь `,
    "IDTRANSLATEX51":` Где я могу найти электронную почту для подтверждения учетной записи?`,
    "IDTRANSLATEX52":` Возможно, что ваша электронная почта для проверки учетной записи находится в папке спама или мусора. Фильтры безопасности от поставщиков электронной почты могут иногда направлять письма с проверкой на эти папки для вашей защиты. Пожалуйста, проверьте свою папку спама или мусора и убедитесь, что отметьте письмо как "без спама" или "без мусора", если вы найдете его там. Если вы все еще не можете найти электронное письмо для проверки, пожалуйста, свяжитесь с нашей службой поддержки для получения дополнительной помощи.`,
    "IDTRANSLATETCU1":` Общие Условия Использования `,
    "IDTRANSLATETCU2":` Добро пожаловать в illicolove.com, онлайн-платформу знакомств, предлагаемую BAKO FAMILIA & COMPANY. Используя наш сайт, вы соглашаетесь с условиями, описанными ниже.`,
    "IDTRANSLATETCU3":` СТАТЬЯ 1: Цель `,
    "IDTRANSLATETCU4":` Целью настоящих «Общих условий использования» является обеспечение правовой основы для использования illicolove.com и его услуг.`,




    "IDTRANSLATETCU5":` Этот договор заключается между:`,
    "IDTRANSLATETCU6":` BAKO FAMILIA & COMPANY владелец сайта, далее именуемого «Издатель», И любое физическое лицо, желающее получить доступ к сайту и его услугам, далее именуемый «Пользователь». Общие условия использования должны быть приняты любым Пользователем, и их доступ к сайту означает согласие с этими условиями.
    В настоящих Условиях использования решено, что следующие выражения или слова, используемые в единственном или множественном числе, имеют следующий смысл:`,
    "IDTRANSLATETCU7":` Поиск объявления: означает публикацию пользователя или посетителя сайта, в текстовой форме через нашу форму, в сопровождении или без одной или нескольких фотографий, представляющих его лицо.`,
    "IDTRANSLATETCU8":` Услуги знакомств: относится к доступу Пользователя ко всем поисковым объявлениям, опубликованным на Сайте, среди прочего, профили, гиперссылки, тексты, изображения, видео, контакты или адреса через «нажмите, чтобы показать».`,
    "IDTRANSLATETCU9":`«Нажмите, чтобы показать»: «Нажмите, чтобы показать», означает функциональность, которая позволяет любому пользователю отображать адрес электронной почты, телефонный контакт или любые другие средства связи с а. он другой пользователь, который ранее выпустил поисковое объявление и заполнил средства по своему выбору, чтобы связаться с ним/с ней. Эта функция, позволяющая получить столь важную информацию, окупается. Его стоимость составляет 95 франков КФА или 14 российских рублей или около 0,144 евро за клик.`,
   "IDTRANSLATETCU10":` Статья 2: Официальное уведомление `,




   
   "IDTRANSLATETCU11X":` BAKO FAMILIA & COMPANY является издателем сайта illicolove.com.  В соответствии с законодательством Бенина, она находится на участке 124 в Агбландане. Он был создан 29 мая 2008 года, зарегистрирован в кредитном регистре торговли и мебели RCCM RB/COT/08/A4101; и имеет для уникального фискального идентификатора (IFU) номер: 3200800938610.  Ее представляет Гилдас Гислайн ГАНГБАЗО.`,
  "IDTRANSLATETCU11":` Статья З: Доступ к услугам `,
  "IDTRANSLATETCU12":` Пользователь illicolove.com имеет доступ к следующим сервисам:`,
  "IDTRANSLATETCU13":` Создание личной учетной записи `,
  "IDTRANSLATETCU14":` Создание и бесплатная публикация Вашего поискового объявления через форму для заполнения `,
  "IDTRANSLATETCU15":` Просмотр объявлений поиска, размещенных другими пользователями `,
  "IDTRANSLATETCU16":`Получение платных контактов из профилей, которые сохраняют интерес, и представить на поиск объявления, неограниченный и по своему усмотрению (Нажмите, чтобы показать/ Нажмите, чтобы отобразить)`,
  "IDTRANSLATETCU17":` Возможность связаться с издателем для запроса персонализированных услуг `,
  "IDTRANSLATETCU18":` Любой Пользователь с доступом к Интернету может получить доступ к сайту бесплатно из любой точки мира. Расходы Пользователя на доступ к нему (подключение к Интернету, компьютерное оборудование и т.д.) не покрываются Издателем.  Сервисы, упомянутые выше, доступны Пользователю только в том случае, если он является членом сайта (то есть он идентифицируется с помощью своих учетных данных): 
  Сайт и его различные услуги могут быть прерваны или приостановлены издателем, в том числе во время обслуживания, без уведомления или обоснования.`,
  "IDTRANSLATETCU19":` СТАТЬЯ 4: Ответственность пользователя `,
  "IDTRANSLATETCU20":` Пользователь несет ответственность за риски, связанные с использованием его логина и пароля.  Пароль Пользователя должен оставаться в секрете. В случае раскрытия пароля, издатель отказывается от всей ответственности. Пользователь несет полную ответственность за использование информации и контента, размещенных на сайте illicolove.com.
  Любое использование услуги Пользователем, прямо или косвенно вследствие ущерба, должен подлежать компенсации в пользу сайта.
  Сайт позволяет пользователям размещать поисковое объявление на сайте, заполнив форму "Разместить объявление".`,





  "IDTRANSLATETCU21":` Пользователь обязуется предоставлять достоверную информацию, предлагать последние фотографии, не имеющие непристойного характера, писать в своих критериях поиска слова уважительного отношения к другим и закону и признает, что объявление является умеренным или отклоняется издателем, без необходимости обоснования отказа с его стороны предоставить ему дополнительную информацию во избежание ложной информации.
  Публикуя свое объявление на сайте, Пользователь предоставляет Издателю неисключительное и свободное право представлять, воспроизводить, адаптировать, изменять, распространять и распространять свое объявление в социальных сетях или непосредственно уполномоченным третьим лицом; в соответствии с его анонимностью или выбранным режимом конфиденциальности.
  Издатель обязуется сохранять анонимность любого пользователя в случае распространения рекламы в социальных сетях.`,
  "IDTRANSLATETCU22":` СТАТЬЯ 5: Ответственность издателя `,
  "IDTRANSLATETCU23":` Любой сбой сервера или сети не может повлечь за собой ответственность издателя. 
  Аналогичным образом, объект не может быть привлечен к ответственности в случае форс-мажора или непредвиденного и непреодолимого факта третьей стороны.
  illicolove.com обязуется использовать все необходимые средства для обеспечения безопасности и конфиденциальности данных.
  Однако она не обеспечивает гарантии полной безопасности. 
  Издатель оставляет за собой право не гарантировать надежность профилей, хотя поисковые объявления, размещенные на сайте, считаются надежными и проверенными перед их публикацией в бэк-офисе группой редактора по обзору и проверке.`,



  "IDTRANSLATETCU24":` Статья 6: Интеллектуальная собственность `,
  "IDTRANSLATETCU25":` BAKO FAMILIA & COMPANY является исключительным владельцем всех прав интеллектуальной собственности, касающихся бренда, структуры и содержания сайта www.illicolove.com. Содержание веб-сайта www.illicolove.com предназначено для строго личного, частного, а не коллективного использования, бесплатно. То же самое касается RSS-лент и информационных бюллетеней. Вне нашей партнерской системы, любое использование в профессиональном или коммерческом контексте или любой маркетинг этого контента третьим лицам запрещено, кроме как с прямого согласия БАКО FAMILIA & COMPANY.`,
  "IDTRANSLATETCU26":` Статья 7: Личные данные.`,
  "IDTRANSLATETCU27":` Ознакомьтесь с нашей политикой конфиденциальности, личные данные и куки здесь <a href="politique.html"><i class="bi bi-arrow-right-circle"></i></a>`,
  "IDTRANSLATETCU29":` СТАТЬЯ 8: Гиперссылки `,
  "IDTRANSLATETCU30":` Домены, на которые гипертекстовые ссылки размещены на сайте, не входят в сферу ответственности издателя БАКО FAMILIA & COMPANY, который не контролирует эти ссылки.  Издатель установил партнерские отношения с поставщиками услуг и может предоставлять Пользователю информацию о других сайтах и/или услугах, например, путем указания адресов веб-сайтов и/или наличия гипертекстовых ссылок на эти сайты. Эти гиперссылки, перенаправляющие на сторонние сайты, не были разработаны издателем и не принадлежат ему. Поэтому издатель не несет ответственности за эти сайты, их содержание, рекламу, продукты или услуги, доступные на этих сайтах или с этих сайтов. Кроме того, издатель не может нести ответственность за информацию, мнения и рекомендации, сделанные этими третьими сторонами. `,



  "IDTRANSLATETCU31":` Издатель не может быть привлечен к ответственности за любой ущерб или убытки, которые были доказаны или заявлены, являются следствием или в связи с использованием, или тот факт, что он доверял содержанию, товарам или услугам, имеющимся в этих партнерских услугах или внешних источниках.  Решение об активации этих ссылок является полной ответственностью Пользователя.
  Издатель не несет ответственности за доступность этих сайтов и не может контролировать содержание или проверять рекламу, продукты и другую информацию, отображаемую на этих веб-сайтах. Третья сторона может создать ссылку на страницу сайта illicolove.comбез специального разрешения издателя.`,
  "IDTRANSLATETCU32":` СТАТЬЯ 9: Специальное предупреждение `,
  "IDTRANSLATETCU33": `В реальной жизни, как и в виртуальной жизни в интернете, можно пересекаться с честными людьми, а также злоумышленниками и мошенниками. 
  Мы должны индивидуально принять определенные подходы к безопасности в реальной жизни и в виртуальном мире в Интернете. BAKO FAMILIA & COMPANY приглашает Вас в :`,
  "IDTRANSLATETCU34":` Никогда не отправляйте деньги незнакомцу, встречному на этом сайте, ни при каких обстоятельствах.`,
  "IDTRANSLATETCU35":` Никогда не отправляйте интимные фотографии для контакта встретились на этом сайте `,




  "IDTRANSLATETCU36":` Будьте начеку, когда кто-то утверждает, что живет в этом районе, но работает за границей.`,
  "IDTRANSLATETCU37":` Никогда не поддавайтесь под предлогом срочной ситуации, когда любимый человек болен и ваш виртуальный корреспондент просит вас помочь ему оплатить различные сборы. В таком случае мы предлагаем вам сообщить о профиле этих мошенников редактору.`,
  "IDTRANSLATETCU38":` Зарождающиеся отношения на illicolove.com не могут быть источником проблем и финансовой поддержки для вас. Поэтому будьте очень подозрительны, когда незнакомец заявляет вам о своей любви, не имея возможности встретиться с вами; и даже после физической встречи, возьмите необходимое время, прежде чем понести какие-либо значительные расходы наличными.`,
  "IDTRANSLATETCU39":` Всегда выбирай общественное место для первой встречи.`,
  "IDTRANSLATETCU40":` Всегда сообщайте о своих позициях родственнику, когда вы находитесь в компании неизвестного человека, которого только что встретили.`,
  "IDTRANSLATETCU41":` Осудить и сообщить нам, попытки продать продукты или услуги, профили, которые оказываются ложными, несмотря на наши фильтрации после ваших обменов в частном, угрозы и запугивания, оскорбительные, оскорбительные и оскорбительные комментарии, сообщения от несовершеннолетних, и просьбы о финансовой помощи или откровенных фотографиях.`,
  "IDTRANSLATETCU42":` Таким образом, Пользователь признает и безоговорочно принимает полную ответственность за любые действия, предпринятые после прочтения объявления о знакомстве и вообще за любую информацию на Сайте. Предоставление этих данных никоим образом нельзя приравнивать к конкретным консультациям или помощи в принятии решений. Пользователь полностью осознает случайный характер знакомств как в реальной жизни, так и в интернете.`,

  "IDTRANSLATETCU43":` Статья 10: Удаление данных после 1 года бездействия.`,
  "IDTRANSLATETCU44":` По соображениям безопасности, если вы не аутентифицировались на Сайте в течение одного года, вы получите электронное письмо с приглашением войти в систему как можно скорее, в противном случае ваш профиль будет удален из наших баз данных.`,




  "IDTRANSLATETCU45":` Статья  11 : Удалить профиль по требованию.`,
  "IDTRANSLATETCU46":` Пользователь имеет возможность удалить свой профиль в любое время, по простому запросу в редактор или через меню удаления профиля в настройках учетной записи, если это необходимо.`,
  "IDTRANSLATETCU47":` Статья 12: Исключение профиля в случае нарушения GCU `,
  "IDTRANSLATETCU48":` В случае нарушения одного или нескольких положений GCU или любого другого документа, содержащегося в настоящем документе, Издатель оставляет за собой право прекратить или ограничить без предварительного предупреждения и по своему собственному усмотрению Ваше использование и доступ к услугам, к вашей учетной записи и всем связанным Сайтам.`,
  "IDTRANSLATETCU49":` Статья 13: Указания в случае нарушения безопасности, выявленные издателем.`,
  "IDTRANSLATETCU50":` Мы обязуемся осуществлять все соответствующие технические и организационные меры для обеспечения уровня безопасности, соответствующего рискам случайного доступа, несанкционированного или незаконного, раскрытия, изменения, потери или уничтожения ваших персональных данных.`,
  "IDTRANSLATETCU51":` Если нам становится известно о незаконном доступе к Вашим персональным данным, хранящимся на наших серверах или серверах наших поставщиков услуг, или о несанкционированном доступе, что приводит к осознанию рисков, выявленных belowabove, мы обязуемся:`,





  "IDTRANSLATETCU52":` Просмотрите причины инцидента и дайте вам знать
  (публичной отчетности);`,
  "IDTRANSLATETCU53":` Принять разумные меры для смягчения любых негативных последствий и ущерба, которые могут возникнуть в результате инцидента.`,
  "IDTRANSLATETCU54":` Статья 14: Ограничение ответственности `,
  "IDTRANSLATETCU55":` Обязательства, определенные в вышеуказанном пункте, касающемся уведомления в случае нарушения обеспечительного права, ни в коем случае не могут приравниваться к признанию вины или ответственности за совершение данного инцидента.`,
  "IDTRANSLATETCU56":` Статья 15: Срок действия договора `,
  "IDTRANSLATETCU57":` Срок действия этого договора бессрочный. Договор имеет свои последствия для Пользователя с самого начала использования услуги.`,
  "IDTRANSLATETCU58":` Статья 16: Применимое право и юрисдикция `,
  "IDTRANSLATETCU59":` Язык этих ОГЦ является французским и будет превалировать над всеми вариантами, переведенными на другой язык. Этот договор регулируется законодательством Бенина, в частности Законом Nº 2017-20 от 20 апреля 2018 г. о Цифровом кодексе Республики Бенин. Выбор применимого права не влияет на ваши права как потребителя в соответствии с применимым законодательством вашего места жительства.`,
  "IDTRANSLATETCU60":` Если Вы являетесь потребителем, Вы и мы согласны подчиниться неисключительной юрисдикции бенинских судов. В случае неурегулированного спора между Пользователем и Издателем, Коммерческий суд Котону будет компетентен урегулировать спор.`,
  "IDTRANSLATEPC1":` ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ `,
  "IDTRANSLATEPC2":` Выходные Данные `,




  "IDTRANSLATEPC3":` Это юридическое уведомление и политика конфиденциальности предоставляет вам информацию о том, как БАКО FAMILIA & COMPANY использует и защищает информацию, которую вы предоставляете нам, также, когда вы используете наш сайт знакомств, доступный из URL: wwww.illicolove.com.`,
  "IDTRANSLATEPC4":` Пожалуйста, обратите внимание, что наша политика конфиденциальности может быть изменена и/или дополнена в любое время, в частности, в соответствии с любым законодательным, нормативным, прецедентным правом или технологическими разработками. В таком случае, дата обновления будет указана в этой политике. Эти изменения зафиксируют пользователя, как только они будут опубликованы онлайн. 
  Поэтому мы приглашаем Вас регулярно ознакомиться с этими уведомлениями и политикой конфиденциальности, чтобы быть в курсе любых изменений.`,
  "IDTRANSLATEPC5":` Заявление в Управление по защите личных данных (УВД)`,
  "IDTRANSLATEPC6":` В соответствии с Законом Nº 2017-20 от 20 апреля 2018 г. о цифровом коде в Республике Бенин (Книга 5 о защите персональных данных и конфиденциальности) сайт www.illicolove.com был объявлен Управлению по защите персональных данных (apdp.bj) под номером SA-TDP-TDP00601`,
  "IDTRANSLATEPC7":` В любом случае, БАКО FAMILIA & COMPANY собирает только личную информацию, касающуюся пользователя, для целей сервиса знакомств, предлагаемого его сайтом. Пользователь предоставляет эту информацию с полным знанием фактов, в частности, когда он сам вводит ее.`,





  "IDTRANSLATEPC8":` В соответствии с положениями Закона о Цифровом кодексе 2017-20 в Республике Бенин любой пользователь имеет право на доступ к касающимся его личным данным, на их исправление и опровержение путем направления письменного и подписанного запроса,          к которому прилагается копия удостоверения личности, подписанного держателем документа, с указанием адреса, по которому должен быть направлен ответ. Никакие персональные данные пользователя нашего сайта «шшш.illicolove.com» не публикуются, не передаются и не продаются на каком-либо носителе или третьим лицам без их ведома.`,
  "IDTRANSLATEPC9":` Конфиденциальности данных `,
  "IDTRANSLATEPC10":` Ваши личные данные являются конфиденциальными и не будут переданы третьим лицам. 
  Конфиденциальный характер нашей службы знакомств не позволяет нам передавать ваши личные данные (имена, контакты, адреса и т.д.) частному лицу, независимо от их ранга или качества.`,
  "IDTRANSLATEPC11": ` Право доступа `,
  "IDTRANSLATEPC12":` В соответствии с положениями Закона о цифровом коде в Республике Бенин любой пользователь нашего веб-сайта www.illicolove.com имеет право на доступ, исправление, изменение и удаление данных, которые его касаются в индивидуальном порядке. Это право может осуществляться держателем по запросу, направленному в электронном виде на следующий адрес электронной почты: info@illicolove.com. Собранные персональные данные никоим образом не передаются третьим лицам.`,
  "IDTRANSLATEPC13":` Право на исправление `,






  "IDTRANSLATEPC14":` В соответствии с Законом о цифровом коде в Республике Бенин любой пользователь нашего веб-сайта www.illicolove.com может потребовать исправления, обновления, удаления, блокирования или удаления касающихся его данных, которые могут быть неточными, ошибочными, неполными, двусмысленными или устаревшими.`,
  "IDTRANSLATEPC15":` Срока годности.`,
  "IDTRANSLATEPC16":` Ваши персональные данные хранятся в БАКО FAMILIA & COMPANY только на время, соответствующее вашим потребностям в услугах знакомств. Однако, этот период хранения не превышает тринадцать (13) месяцев в случае бездействия на учетной записи пользователя.`,
  "IDTRANSLATEPC17":` Жалоба в компетентный орган власти `,
  "IDTRANSLATEPC18":` Если Вы считаете, что БАКО FAMILIA & COMPANY не соблюдает свои обязательства в отношении Ваших персональных данных, собранных во время Вашего посещения веб-сайта www.illicolove.com, Вы можете обратиться по адресу в установленном законом порядке, жалоба или запрос в Управление по защите личных данных (УВД).`,
  "IDTRANSLATEPC19":` Интеллектуальная Собственность `,
  "IDTRANSLATEPC20":` Все содержание данного сайта, включая, без ограничений, графику, изображения, тексты, видео, анимацию, звуки, логотипы, гифы и иконки и их форматирование, являются исключительной собственностью БАКО FAMILIA & COMPANY, за исключением товарных знаков, логотипы или контент, принадлежащие другим компаниям-партнерам или авторам. 
  Любое воспроизведение, распространение, модификация, адаптация, ретрансляция или публикация, даже частичная, этих различных элементов строго запрещены без письменного согласия БАКО FAMILIA & COMPANY.`,
  "IDTRANSLATEPC21":` Условия обслуживания `,
  "IDTRANSLATEPC22":` Сайт www.illicolove.com доступен на английском, испанском, немецком, португальском, русском, китайском (арабском), японском, итальянском и корейском языках. Для лучшего удобства использования мы рекомендуем использовать совместимые и современные браузеры, такие как: Chrome, Safari, Firefox.`,
  "IDTRANSLATEPC23":` Информация и предложения `,







  "IDTRANSLATEPC24":` BAKO FAMILIA & COMPANY реализует все имеющиеся в ее распоряжении средства для обеспечения надежного сервиса знакомств и постоянного обновления своего сайта www.illicolove.com. Однако могут иметь место ошибки или пропуски. В результате, любой пользователь может отправить нам предложения или информацию на info@illicolove.com и указать любые изменения сайта, которые он считает актуальными.`,
  "IDTRANSLATEPC25":` Файлы cookie.`,
  "IDTRANSLATEPC26":` Для целей технической производительности, статистики и отображения веб-сайт www.illicolove.com может использовать файлы cookie. Куки - это небольшие текстовые файлы, хранящиеся на вашем терминале, которые не позволяют идентифицировать пользователя, но записывают информацию о навигации терминала на веб-сайте. Некоторые части этого сайта не могут быть функциональными без принятия cookies. Полученные таким образом данные призваны облегчить последующее судоходство на этом сайте. Cookies также используются для различных аудиторий и посещаемости.`,
  "IDTRANSLATEPC27":` Отказ от установки файлов cookie может привести к невозможности доступа к определенным функциям. Однако любой пользователь этого веб-сайта может настроить свой терминал, чтобы отклонить установку куки, как указано ниже:`,
  "IDTRANSLATEPC28":` Пользователи Safari: Выберите настройки Safari,   нажмите Конфиденциальность, затем выберите опцию, связанную с «Cookies и данными сайта». Всегда блокировать: Safari не позволяет любому веб-сайту, третьей стороне или рекламодателя хранить cookies и другие данные на вашем Mac. Это может помешать работе некоторых сайтов.`,





  "IDTRANSLATEPC29":` Пользователи Safari: Выберите настройки Safari,   нажмите Конфиденциальность, затем выберите опцию, связанную с «Cookies и данными сайта». Всегда блокировать: Safari не позволяет любому веб-сайту, третьей стороне или рекламодателя хранить cookies и другие данные на вашем Mac. Это может помешать работе некоторых сайтов.`,
  "IDTRANSLATEPC30":` пользователи Google Chrome: Меню; Настройки;
  Показывать дополнительные настройки (расположенные внизу страницы).
  Затем вы должны нажать на кнопку Настройки содержимого, а затем установить флажок Блокировать файлы cookie и данные с сторонних сайтов, наконец, нажмите кнопку ОК, чтобы проверить свой выбор.`,
  "IDTRANSLATEPC31":` Пользователи Internet Explorer: Меню Параметры Интернета 
  Вкладка конфиденциальности и на кнопку Дополнительно, чтобы поднять окно Дополнительные настройки конфиденциальности. Затем установите флажок Игнорировать автоматическое управление куки, а затем выберите Склонить в столбце Куки третьих сторон.`,
  "IDTRANSLATEPC32":` Пользователи Microsoft Edge: вкладка Интернет инструмент/параметры. Нажмите Конфиденциальность и выберите Блокировать все файлы cookie.`,




  "IDTRANSLATEPC33":` Следуя практике в этой области, некоторые cookies
  освобождать от предварительного сбора вашего согласия
  в той мере, в какой они необходимы для
  работа этого сайта. Их целью является
  З. Содействие электронной связи
  в частности идентификаторы сеанса Cookies,
  аутентификация и настройка вашего интерфейса.
  Эти файлы cookie выдаются и управляются БАКО FAMILIA & COMPANY и все подчинены этой политике.`,
  "IDTRANSLATEPC34":` Гиперссылки `,
  "IDTRANSLATEPC35":` Веб-сайт "шшш.illicolove.com" может содержать ссылки на другие веб-сайты или другие ресурсы, имеющиеся в Интернете. У BAKO FAMILIA & COMPANY нет средств для управления сайтами, связанными с ее сайтом. Кроме того, она не несет ответственности за наличие таких внешних сайтов и источников. Она не может нести ответственность за любой ущерб, причиненный содержанием этих сайтов или внешними источниками.`,




  "IDTRANSLATECONSULTE1":` Африка `,
  "IDTRANSLATECONSULTE2":` Европа `,
  "IDTRANSLATECONSULTE3":` Других странах мира `,
  "IDTRANSLATEPROFIL1": " Действующей учетной записи ",
  "IDTRANSLATEPROFIL2": " Недействительный счет ",
  "IDTRANSLATEPROFIL3":` Дебетовый счет `,
  "IDTRANSLATEPROFIL4":` Дебетовый счет `,
  "IDTRANSLATEPROFIL5":` Мой план `,
  "IDTRANSLATEPROFIL6":` Мой план `, 
  "IDTRANSLATEPROFIL7":` Мои данные `,
  "myNameIDX":` Удалить свою учетную запись `,
  "myBtn":` Пополнять мой счет `,
  "myBtn2":` Пополнять мой счет `,
  "IDTRANSLATEPROFIL9":` Идти на ресепшн `,
  "IDTRANSLATEPROFIL10":` Отключаться `,
  "CONSULTEZLESANNONCES":` СМОТРЕТЬ ПУБЛИКАЦИИ `,
  "IDTRANSLATEPROFIL11":` РЕДАКТИРОВАТЬ ВАШУ ПУБЛИКАЦИЮ `, 
  "IDTRANSLATEPROFIL12":` НАПИСАТЬ ПУБЛИКАЦИЮ `,
 // "IDTRANSLATEPROFIL13":`Vous souhaite la Bienvenue !`,
  "exampleModalLongTitle":`Стоимость 95 FCFA, 14 российских рублей или 0,144 евроs.`,
  "errorSms":` Вы должны ввести номер.`,
  "SmspayId":` Введите число единиц здесь.`,
  "IDTRANSLATEPROFIL14":` Возвращение `, 
  "payYourUnitybtn":` Подтвердить `,
  "CHOISEYOURPAIEMENT":` Выберите способ оплаты платежа.`,
  "exampleModalLongTitleX":` Защити свой профиль, пожалуйста.`,
  "IDTRANSLATEPROFIL15":` Просьба представить ответ, который вы никогда не забудете.   Этот ответ будет запрошен при получении вашей учетной записи. Без этого ответа ваша учетная запись останется недоступной.`,
  "IDTRANSLATEPROFIL16":` Выбирать вопрос `,
  "IDTRANSLATEPROFIL17":` Какой у тебя месяц рождения?`,
  "IDTRANSLATEPROFIL18":` Какой твой любимый цвет?`,
  "IDTRANSLATEPROFIL19":` Как вы представляете свою повседневную жизнь?`,
  "IDTRANSLATEPROFIL20":` Что для тебя важнее всего?`,
  "IDTRANSLATEPROFIL21":` Как зовут человека, который вдохновляет тебя?`,
  "IDTRANSLATEPROFIL22":` Какая твоя любимая страна?`,
  "IDTRANSLATEPROFIL23":` Кто твой любимый игрок?`,
  "IDTRANSLATEPROFIL24":` Кто твой любимый художник?`,
  "IDTRANSLATEPROFIL25":` Каков ваш ответ? Только слово. Нет места.`,
  
  "submitFormID":` Согласиться `,
  "TOCLOSEMODALID":` Закрыть `,   
  "IDTRANSLATEPROFIL26":` Подтвердить `, 
  "IDTRANSLATEPROFIL27":` Меры безопасности `,
  "payYourUnity":` Написать количество единиц `,
  congratulationsTitle: " Поздравляю!",
  accountSecureMessage: " Ваш счет в безопасности. Спасибо!",       
  accountSecureMessageX: " Не оставляйте места. Спасибо!",


  "IDTRANSLATEPROFIL28":` Ваш дебетовый счет пуст. Пожалуйста, покупайте единицы, чтобы получить доступ к контактам объявлений, которые вам понравятся.`,
  "IDTRANSLATEPROFIL29":` Вы не можете купить единицы в это время. Потребляйте ваши З бесплатных единиц, предлагаемых в первую очередь. Спасибо.`,
  "IDTRANSLATEPROFIL30W":` Вы уверены?`,
  "IDTRANSLATEPROFIL30":` Ты не можешь вернуться!`,
  "IDTRANSLATEPROFIL31":` Да, удалите его, пожалуйста!`, 
  "IDTRANSLATEPROFIL32":` Вы уверены?`,
  "IDTRANSLATEPROFIL33":` После выхода из системы у вас есть возможность войти снова.`,
  "IDTRANSLATEPROFIL34":` Да, чтобы отключить связь!`,
  "IDTRANSLATEPROFIL35":` Отключена `,
  "IDTRANSLATEPROFIL36":` Вы находитесь в автономном режиме.`,
  "IDTRANSLATEPROFIL37":` Хотите посетить нашу домашнюю страницу?`,
  "IDTRANSLATEPROFIL38":` Удаляться!`,
  "IDTRANSLATEPROFIL38X":` Успех.`,
  "IDTRANSLATEPROFIL39X":` Ваше фото было успешно обновлено.`,
  "IDTRANSLATEPROFIL40X":` Ошибка `,
  "IDTRANSLATEPROFIL41X":` Ваше фото не удалось обновить.`,

  "IDTRANSLATEPROFIL39":` Ваша учетная запись была успешно удалена!`,
  "IDTRANSLATEPROFIL40":` Удаляться!`,
  "IDTRANSLATEPROFIL41":` Ошибка при удалении пользователя! `,
  "IDTRANSLATEPROFIL42":` Имеет место ОШИБКА `,
  "IDTRANSLATEPROFIL42Q": `Имеет место ОШИБКА `,
  "IDTRANSLATEPROFIL42QX":` Имеет место ОШИБКА `,
  "IDTRANSLATEPROFIL43":` Поле еще не заполнено!`, 
  "IDTRANSLATEPROFIL44":` Что-то пошло не так!`,
  "IDTRANSLATEPROFIL44IN":` Уважаемые пользователи, этот способ оплаты будет доступен очень скоро. Сейчас, пожалуйста, используйте Feexpay, чтобы завершить свои операции. Спасибо!`,
  "IDTRANSLATEPROFIL45":` Данные не были обновлены!`,
  "IDTRANSLATEPROFIL46":` У вас нет единиц. Пожалуйста, покупайте. Перейдите в свой профиль. Спасибо!`,
  "IDTRANSLATEPROFIL47":` Вы уверены?`,
  "IDTRANSLATEPROFIL48":` При редактировании объявления оно снова будет передано администраторам для проверки. Этот процесс может занять 24 часа.`,




  "IDTRANSLATEPROFIL49":` Возвращение `,
  "IDTRANSLATEPROFIL50":` Да! - Сдача.`,
  "IDTRANSLATELOGIN1":` Авторизуйтесь.`,
  "IDTRANSLATELOGIN2":` Электронная почта `,
  "IDTRANSLATELOGIN3":` Ваш адрес Электронной почты `,
  "IDTRANSLATELOGIN4":` Пароль `,
  "IDTRANSLATELOGIN5":` Свой Пароль `,
  "IDTRANSLATELOGIN6":` Помнить меня `,
  "IDTRANSLATELOGIN7":` Забытый пароль `,
  "IDTRANSLATELOGIN8":` У меня нет счета.`,
  "IDTRANSLATELOGIN9":` Зарегистрируйтесь бесплатно `,
  "IDTRANSLATELOGIN10":` Подключиться `,
  "IDTRANSLATELOGIN11":` Успех `,
  "IDTRANSLATELOGIN12":` Вы успешно вошли в систему!`,
  "IDTRANSLATELOGIN13":` Прости `,
  "IDTRANSLATELOGIN14":` У вас неверный пароль!`,
  "IDTRANSLATELOGIN15":` Прости `,
  "IDTRANSLATELOGIN16":` Пользователь не существует с этим письмом  !`,
  "IDTRANSLATESIGNUP1":` Зарегистрироваться `,
  "IDTRANSLATESIGNUP2":` Псевдоним `, 
  "IDTRANSLATESIGNUP3":` Псевдоним `,
  "IDTRANSLATESIGNUP4":` Имя и Фамилия `, 
  "IDTRANSLATESIGNUP5":` Имя и Фамилия `,
  "IDTRANSLATESIGNUP6":` Электронная почта `,
  "IDTRANSLATESIGNUP7":` Ваш адрес Электронной почты `,
  "IDTRANSLATESIGNUP8":` Пароль `,
  "IDTRANSLATESIGNUP9":` Свой Пароль `,
  "IDTRANSLATESIGNUP10":` Я прочитал и принял условия `,
  "IDTRANSLATESIGNUP11":` Читать и принимать наши условия `,
  "IDTRANSLATESIGNUP12":` У меня уже есть счет.`,
  "IDTRANSLATESIGNUP13":` У меня уже есть счет.`,
  "IDTRANSLATESIGNUP14":` Прости `,




  "IDTRANSLATESIGNUP15":` Учетная запись уже связана с этим адресом электронной почты или номером телефона.`,
  "IDTRANSLATESIGNUP16":` Успех `,
  "IDTRANSLATESIGNUP17":` Вы успешно прошли регистрацию!`,
  "IDTRANSLATESIGNUP18":` Ошибка отправки адреса электронной почты в Firebase `, 
  "IDTRANSLATESIGNUP19":` Не оставляйте места. Спасибо!`,
  "IDTRANSLATESIGNUP19PHONE":` Просьба указать действительный номер телефона.`,
  "IDTRANSLATESIGNUP19PHONEX":` Просьба указать действительный номер телефона.`,
  "IDTRANSLATEFORGET1":` Отправьте адрес электронной почты, который вы использовали при регистрации.`,
  "IDTRANSLATEFORGET2":` Электронная Почта `,
  "IDTRANSLATEFORGET3":` Ваш e-mail `,
  "IDTRANSLATEFORGET4":` Отправить `,
  "IDTRANSLATEFORGET5":` Подтвердить `,
  "IDTRANSLATEFORGET6":` Дай мне правильный ответ!`,
  "IDTRANSLATEFORGET7":` Введите свой новый пароль!`,
  "IDTRANSLATEFORGET8":` Введите свой новый пароль!`, 
  "IDTRANSLATEFORGET9":` Здорово`,
  "IDTRANSLATEFORGET10":` Пароль успешно обновлен!`,
  "IDTRANSLATEFORGET11":` Войдите `,
  "IDTRANSLATEFORGET12":` Ладно `,
  "IDTRANSLATEFORGET13":` Ошибка при обновлении письма.`,
  "IDTRANSLATEFORGET14":` Это не правильный ответ `,
  "IDTRANSLATEFORGET15":` Этот пользователь не существует.`, 
  "IDTRANSLATEFORM1":` МОЕМ ПРОФИЛЕ `,
  "IDTRANSLATEFORM1W":` МОЕМ ПРОФИЛЕ `,
  "IDTRANSLATEFORM2":` МОЕМ ПРОФИЛЕ `,
  "IDTRANSLATEFORM3":` МОЕМ ПРОФИЛЕ `,
  "IDTRANSLATEFORM4":` ПРОФИЛЬ КОТОРЫЙ Я ИЩУ `,
  "IDTRANSLATEFORM4W":` ПРОФИЛЬ КОТОРЫЙ Я ИЩУ `,
  "IDTRANSLATEFORM5":` ПРОФИЛЬ КОТОРЫЙ Я ИЩУ `,
 // "IDTRANSLATEFORM6":`VEUILLEZ REMPLIR LE FORMULAIRE CI-DESSOUS.`,
  "IDTRANSLATEFORM7":` Дайте точную и проницательную информацию.`,
  "IDTRANSLATEFORM8":` Моя страна проживания <i class="fa fa-star required"></i>`,
  "IDTRANSLATEFORM9":` Мой город, где я живу <i class="fa fa-star required"></i>`,
  "IDTRANSLATEFORM10":` Имя или Псевдоним <i class="fa fa-star required"></i>`,
  "IDTRANSLATEFORM11":` Мой возраст <i class="fa fa-star required"></i>`,
  "IDTRANSLATEFORM9PL":` Мой родной город `,





  "IDTRANSLATEFORM10X":` Мой родной город `,
  "IDTRANSLATEFORM11X":` Мой возраст `,
  "IDTRANSLATEFORM8X":` Моя страна проживания `,
  "IDTRANSLATEFORM9X":` Мой возраст `,
  "IDTRANSLATEFORM12":` Пожалуйста, введите только номера.<i class="fa fa-star required"></i>`,
  "IDTRANSLATEFORM13":` Мой тип <i class="fa fa-star required"></i>`,
  "IDTRANSLATEFORM14":` Мужчина `,
  "IDTRANSLATEFORM15":` Женщина `,
  "IDTRANSLATEFORM16":` Трансгендер `,
  "IDTRANSLATEFORM17":` Гендерфлюид`,
  "IDTRANSLATEFORM18":` Интерсекс `,
  "IDTRANSLATEFORM19":` Безгендерный `,
  "IDTRANSLATEFORM20":` Аромантичный `,
  "IDTRANSLATEFORM21":` Асексуал `,
  "IDTRANSLATEFORM22":` Бисексуал `,
  "IDTRANSLATEFORM23":` Цисгендер `,
  "IDTRANSLATEFORM24":` Циснормативность `,
  "IDTRANSLATEFORM25":` Полуромантический `,
  "IDTRANSLATEFORM26":` Полусексуальный `,
  "IDTRANSLATEFORM27":` Гетероромантичность `,
  "IDTRANSLATEFORM28":` они `,
  "IDTRANSLATEFORM29":` Неверно определять по полу `,
  "IDTRANSLATEFORM30":` Небинарный `,
  "IDTRANSLATEFORM31":` Пансексуальный `,
  "IDTRANSLATEFORM32":` Полиаморозный `,
  "IDTRANSLATEFORM33":` Квир `,
  "IDTRANSLATEFORM34":` Трансгендер `,
  "IDTRANSLATEFORM35":` Транзиция `,
 // "IDTRANSLATEFORM36":`VEUILLEZ REMPLIR LE FORMULAIRE CI-DESSOUS.`,
  "IDTRANSLATEFORM37":` Дайте точную и проницательную информацию.`,
  "IDTRANSLATEFORM38":` Мое семейное положение <i class="fa fa-star required"></i>`,
  "IDTRANSLATEFORM39":` Одинокий `,
  "IDTRANSLATEFORM40":` В паре `,
  "IDTRANSLATEFORM41":` Разведенный`,
  "IDTRANSLATEFORM42":` Вдовец /Вдова`,
  "IDTRANSLATEFORM43":` Моя национальность <i class="fa fa-star required"></i>`,
  "IDTRANSLATEFORM44":` Телефон <i class="fa fa-star required"></i>`,
  "IDTRANSLATEFORM45":` Введите только ваш номер без префикса страны <i class="fa fa-star required"></i>`,
  "IDTRANSLATEFORM46":` Моя работа <i class="fa fa-star required"></i>`,
  "IDTRANSLATEFORM47":` Моя работа `,
 // "IDTRANSLATEFORM48":`VEUILLEZ REMPLIR LE FORMULAIRE CI-DESSOUS.`,
  "IDTRANSLATEFORM49":` Дайте точную и проницательную информацию.`,
  "IDTRANSLATEFORM50":` Я хочу встречи <i class="fa fa-star required"></i>`,
  "IDTRANSLATEFORM51":` Амикале, компания, которая разрушит одиночество. `,
  "IDTRANSLATEFORM52":` Устойчивый `,
  "IDTRANSLATEFORM53":` Может привести к браку `,
  "IDTRANSLATEFORM54":` Удостоверение личности `,
  "IDTRANSLATEFORM55":` Фото 1 <i class="fa fa-star required"></i>`,
  "IDTRANSLATEFORM56":` Фото 2 <i class="fa fa-star required"></i>`,
 // "IDTRANSLATEFORM57":`VEUILLEZ REMPLIR LE FORMULAIRE CI-DESSOUS.`,
  "IDTRANSLATEFORM58":` Дайте точную и проницательную информацию.`,
  "IDTRANSLATEFORM59":` Его/Ее Гендер <i class="fa fa-star required"></i>`,
  "IDTRANSLATEFORM60":` Мужчина `,
  "IDTRANSLATEFORM61":` Женщина `,
  "IDTRANSLATEFORM62":` Трансгендер `,
  "IDTRANSLATEFORM63":` Гендерфлюид `,
  "IDTRANSLATEFORM64":` Интерсекс `,
  "IDTRANSLATEFORM65":` Безгендерный `,
  "IDTRANSLATEFORM66":` Аромантичный `,
  "IDTRANSLATEFORM67":` Асексуал `,
  "IDTRANSLATEFORM68":` Бисексуал `,




  "IDTRANSLATEFORM69":` Цисгендер `,
  "IDTRANSLATEFORM70":` Циснормативность `,
  "IDTRANSLATEFORM71":` Полуромантический `,
  "IDTRANSLATEFORM72":` Полусексуальный `,
  "IDTRANSLATEFORM73":` Гетероромантичность `,
  "IDTRANSLATEFORM74":` они `,
  "IDTRANSLATEFORM75":` Неверно определять по полу `,
  "IDTRANSLATEFORM76":` Небинарный `,
  "IDTRANSLATEFORM77":` Пансексуальный `,
  "IDTRANSLATEFORM78":` Полиаморозный `,
  "IDTRANSLATEFORM79":` Квир `,
  "IDTRANSLATEFORM80":` Трансгендер `,
  "IDTRANSLATEFORM81":` Транзиция `,
  "IDTRANSLATEFORM82":` Своей возрастной группе <i class="fa fa-star required"></i>`,
  "IDTRANSLATEFORM83":` Семейного положения <i class="fa fa-star required"></i>`,
  "IDTRANSLATEFORM84":` Одинокий `,
  "IDTRANSLATEFORM85":` В паре `,
  "IDTRANSLATEFORM86":` Разведенный`,
  "IDTRANSLATEFORM87":` Вдовец /Вдова `,
  "IDTRANSLATEFORM88":` Страна его проживания <i class="fa fa-star required" ></i>`,
  "IDTRANSLATEFORM89":` Вы можете выбрать несколько стран. <i class="fa fa-star required"></i>`,
  "IDTRANSLATEFORM90":` Его страна `,
  "IDTRANSLATEFORM91":` Страна его проживания `,
//  "IDTRANSLATEFORM92":`VEUILLEZ REMPLIR LE FORMULAIRE CI-DESSOUS.`,
  "IDTRANSLATEFORM93":` Дайте точную и проницательную информацию.`,
  "IDTRANSLATEFORM94":` Опишите физический аспект, который вы хотите.`,
  "IDTRANSLATEFORM95":` Его/Ее город проживания. <i class="fa fa-star required"></i>`,
  "IDTRANSLATEFORM96":` Его/Ее город. `,
  "IDTRANSLATEFORM97":` Его/Ее работа или занятия <i class="fa fa-star required"></i>`,
  "IDTRANSLATEFORM98":` Его/Ее работа `,
  "IDTRANSLATEFORM99":` Дополнительные сведения.`,
  "IDTRANSLATEFORM100":` Дополнительные сведения.`,
  "IDTRANSLATEFORM10w":` Физические аспекты `,
  "IDTRANSLATEFORM101":` Следующий `,
  "IDTRANSLATEFORM102":` Предыдущий `,
  "IDTRANSLATEFORM103":` Отправить `,




  "IDTRANSLATEFORM104":`<p > Личные данные, собранные в этой форме <strong style="color: #000080;">BAKO FAMILIA & COMPANY</strong> будут обработаны исключительно для обеспечения бесперебойной работы службы знакомств, которую вы просили. Собранные персональные данные не передаются никому без вашего согласия.
  В соответствии с положениями Закона 2017-20 о Цифровом кодексе Республики Бенин о защите персональных данных, обработка собранных данных была объявлена в APDP.</em> </p>
  <hr>
  <p class="mb-0"> В соответствии с вышеупомянутым законом, вы можете осуществлять свои права доступа, оппозиции, исправления и удаления по адресу <strong style="color: #000080;">BAKO FAMILIA & COMPANY</strong>.
  </em></p>`,
  "IDTRANSLATEFORM105":` Ваше изображение слишком мало. Пожалуйста, выберите изображение по крайней мере 300x300 пикселей.`,
  "IDTRANSLATEFORM106":` Ошибка при вызове API стран REST `,
  "IDTRANSLATEFORM107":` Просто введите номер без префикса `,
  "IDTRANSLATEFORM108":` Пожалуйста, выберите страну.`,
  "IDTRANSLATEFORM109":` Успех `,
  "IDTRANSLATEFORM110":` Ваша форма подается на утверждение в течение 24 часов <i class="fa fa-heart"></i>.`,
  "IDTRANSLATEFORM111":` Прости `,
  "IDTRANSLATEFORM112":` Не все ваши поля заполнены.`,
  "IDTRANSLATEUSERD1":` Cвяжитесь со мной  <svg xmlns="http://www.w3.org/2000/svg" width="10.444" height="9.7"><defs><clipPath id="a"><path fill="none" d="M0 0h10.444v9.7H0z"/></clipPath></defs><g fill="none" stroke="#2a46cc" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.438" clip-path="url(#a)"><path d="M.719 4.85h8.709M5.594 8.683L9.427 4.85M5.594 1.017L9.427 4.85"/></g></svg>`,





  "IDTRANSLATEUSERD2":` Для связи со мной `,
  "IDTRANSLATEUSERD3":`<i class="bi bi-alexa" style="font-size: 3vh !important;"></i> Моем профиле `,
  "IDTRANSLATEUSERD4":` Ответы `,
  "IDTRANSLATEUSERD5":` Мой/Моя город проживания :`,
  "IDTRANSLATEUSERD6":` Мое имя или прозвище:`,
  "IDTRANSLATEUSERD7":` Моего возраста :`,
  "IDTRANSLATEUSERD8":` Мой/Моя гендер:`,
  "IDTRANSLATEUSERD9":` Семейное положение:`,
  "IDTRANSLATEUSERD10":` Мой/Моя Национальность :`,
  "IDTRANSLATEUSERD11":` Мой/Моя работа или занятие:`,
  "IDTRANSLATEUSERD12":` Я хочу встречи :`,
  "IDTRANSLATEUSERD13":` Мои физические предпочтения:`,
  "IDTRANSLATEUSERD14":` Дополнительные подробности:`,
  "IDTRANSLATEUSERD15":`<i class="bi bi-alexa" style="font-size: 3vh !important;"></i> Профиль, который я ищу `,
  "IDTRANSLATEUSERD16":` Ответы `,
  "IDTRANSLATEUSERD17":` Его/Ее гендер:`,
  "IDTRANSLATEUSERD18":` Своей возрастной группе :`,
  "IDTRANSLATEUSERD19":` Семейного положения :`,
  "IDTRANSLATEUSERD20":` Страна его проживания:`,
  "IDTRANSLATEUSERD21":` Его/Ее город проживания :`,
  "IDTRANSLATEUSERD22":` Его/Ее работа или занятие. :`,
  "TIDTRANSLATEUSERD23":` Онлайн `,

  "IDTRANSLATEUSERD24":`<i class="fas fa-database" style="font-size: 5vh !important; color: #FFB6C1;"></i> Никаких данных.`,
  "IDTRANSLATEUSERD25":` Никаких данных `,
  "IDTRANSLATEUSERD26":` Имеет место ОШИБКА.`,
  "IDTRANSLATEUSERD27":` С вашего счета списаны средства `,
  "IDTRANSLATEUSERD28":` Ваши данные не обновляются.`,
  "IDTRANSLATEUSERD29":` Вы сможете связаться с другими пользователями только после публикации формы поиска.`,
  "IDTRANSLATEUSERD30":` Вы хотите опубликовать свое объявление?`,
  "IDTRANSLATEUSERD31":` Ваши единицы исчерпаны. Вы не можете больше связываться с другими пользователями’.`,
  "IDTRANSLATEUSERD32":` Вы хотите купить единицы?`,
  "IDTRANSLATEUSERD33":` Ладно `,
  "IDTRANSLATEUSERD34":` Зайдите в его профиль!`,
  "IDTRANSLATEUSERD35":`<i class="bi bi-eye" style="color: white;"></i> Щелкнуть для просмотра.`,
  "texteIDTRANSLATEUSERD24YX": " онлайн ",
  "myNameIDwallet":" Снимите свои комиссии",
  "MYEWALLETID":`<i class="fa fa-align-left"></i> Мой бумажник `,
  "MYEWALLETID1":" Общий остаток ", 
  "comeBackId":" Возвращение ",
  "idTogetwallet":" Вывести свой выигрыш ",
  "HISTORYISMY":" Исторический ",
  "IDTRANSLATEWALLETU":" Текущий ",
  "IDTRANSLATEWALLETX":" Оплачено ",
  "IDTRANSLATEWALLET":" Прости!",
  "IDTRANSLATEWALLETM":" Ваш перевод не удался. Пожалуйста, попробуйте позже.", 
  "IDTRANSLATEWALLET1":" Поздравляю!",
  "IDTRANSLATEWALLET2":" Ваш перевод был успешно завершен!",
  "TITLEWALLETID": " Электронный Кошелек ",
  "IDTRANSLATEFOEMXX": " Пожалуйста, введите только буквы, номера в этом поле не разрешены.",
  "linkInput": " Скопируйте здесь свою партнерскую ссылку ",
  "TERMINATOR" :" ЗАКОНЧИТЬ ",
  "PHOTOID" :" ФОТО ",
  "TERMINATORW" :" ВСЕ КОНЧЕНО ",
  "PHOTOIDW" :" ФОТО ",
  "STEPS14":" Этап 1 - 4",
  "STEPS23":" Этап 2 - 4",
  "STEPS34":" Этап 3 - 4",
  "STEPS44":" Этап 4 - 4",
  "IDTRANSLATEPROFIL29FILE" :" Вы хотите отправить это изображение?", 
  "IDTRANSLATEPROFIL29FILE1" :" Возвращение ",
  "IDTRANSLATEPROFIL29FILE2" :" Да ",
  "IDTRANSLATESIGNUP19OPTIONSERROR" :" Ошибка во время запроса на геолокацию.",
  "IDTRANSLATESIGNUP19OPTIONS" :" Мы с сожалением сообщаем Вам, что Вы не можете воспользоваться нашими услугами, пока не будет принято решение о Вашем географическом местоположении.",
  "IDTRANSLATESIALERT1" :" информация ",
  "IDTRANSLATESIALERT2" :" Дорогие посетители, для обеспечения вашей безопасности и борьбы с фейковыми объявлениями, Illicolove определяет вашу страну проживания",
  "IDTRANSLATESIALERT3" :" Да, я согласен!",
  "IDTRANSLATESIALERT4" :" Отказалась ",
  "CONTRACTID1":` Договор об аффилиации `,
  "CONTRACTID2":`      Между illicolove, в дальнейшем именуемым 'сайтом знакомств', и МНОЙ, в дальнейшем именуемым 'Партнёр(ша)`,
  "CONTRACTID3":` Предмет `,
  "CONTRACTID4":` Цель этого партнерского соглашения заключается в регулировании отношений между Illicolove и Affiliate в связи с партнерской программой сайта знакомств <a href="https://illicolove.com">illicolove.com</a>`,
  "CONTRACTID5":`1. Партнерской программе `,
  "CONTRACTID6":` В illicolove действует партнерская онлайн-программа для продвижения своих услуг знакомств.`,
  "CONTRACTID7":`2. Роль партнера `,
  "CONTRACTID8":` Партнерская компания обязуется рекламировать услуги сайта знакомств, используя уникальные партнерские ссылки, предоставляемые Illicolove, а также другие рекламные средства, одобренные сайтом.`,
  "CONTRACTID9":`3. Вознаграждение партнера `,
  "CONTRACTID10":`3.1. Аффилированный член получит комиссию в размере 100 франков КФА за каждого нового члена, зарегистрировавшегося на сайте <a href="https://illicolove.com">illicolove.com</a> через уникальную партнерскую ссылку и публикует рекламу поиска любви.`,
  "CONTRACTID11":`3.2. Кроме того, Партнер получит 10% комиссионных за каждую покупку, сделанную членами, указанными через его партнерскую ссылку.`,
  "CONTRACTID11X":`3.3 Комиссия 100F CFA будет взиматься только в том случае, если новый член  приобретает единицу, превышающую 100F CFA, во избежание мошенничества комиссии.`,
  "CONTRACTID12":`4. Выплата комиссии `,
  "CONTRACTID13":` Компания Illicolove будет перечислять комиссию Аффилированному лицу регулярно каждый квартал по запросу через мобильный кошелек или банковский перевод, на выбор Аффилированного лица. Расходы по перечислению оплачиваются Аффилированным лицом`,
  "CONTRACTID14":`5. Срока действия договора `,
  "CONTRACTID15":` Настоящее Партнерское Соглашение вступает в силу с даты его принятия Партнерским Партнером и остается в силе до прекращения любой из сторон при условии письменного уведомления за тридцать (30) дней.`,
  "CONTRACTID16":`6. Расторжение `,
  "CONTRACTID17":` illicolove или Affiliate могут прекратить действие настоящего Соглашения в любое время, направив письменное уведомление другой стороне. Любые неоплаченные комиссионные будут урегулированы в соответствии с условиями этого контракта.`,
  "CONTRACTID18":`7. Применимым законодательством `,
  "CONTRACTID19":` Этот договор регулируется бенинским законодательством, и любой спор, вытекающий из этого договора, если он не будет урегулирован мирным путем, будет подпадать под исключительную юрисдикцию коммерческих судов Котону.`,
  "ANNONCEAFFILIATEID" : `        <div class="box--list__items">
  <div class="box--list__item" style="  padding-top: 0 !important; margin-top: 0 !important;">
      <h2 class="box--list__title box--list__titlex" > Зарабатывайте деньги, помогая людям найти любовь на Illicolove!</h2>
      <p class="box--list__description"> Ищете выгодные партнерские возможности? Присоединяйтесь к нашей уникальной партнерской программе и увеличить свой доход, помогая другим найти их родственные души. Вот как это работает: <br>
        ✅ Получите 100 F CFA для каждого нового участника, который подписывается и публикует рекламу поиска любви на нашем сайте через вашу партнерскую ссылку. <br>

        ✅ Плюс, заработать 10% комиссии на каждую покупку, сделанную членами вы ссылаетесь. Чем больше они тратят, тем больше вы зарабатываете!</p>
  </div>
  
  <div class="box--list__item">
      <h2 class="box--list__title box--list__titlex"> Почему выбрать нашу партнерскую программу?</h2>
      <div class="box--list__description">
        ✅ Заработать деньги, как только кто-то зарегистрироваться, и разместить их поиск объявления. <br>
        ✅ Получайте постоянную комиссию каждый раз, когда ваши партнеры делают покупку на нашем сайте. <br>
        ✅ Направьте свое внимание на аудиторию, ищущую любовь, увлекательную и постоянно растущую нишу. <br>
        
      </div>
  </div>
  
  <div class="box--list__item">
      <h2 class="box--list__title"> Присоединяйтесь к нашей программе </h2>
      <div class="box--list__description">✅  Присоединяйтесь к нашей партнерской программе сегодня и начать зарабатывать деньги, помогая людям найти любовь на illicolove! 💑
        
       </div>
  </div>
  <div class="box--list__item">
    <h2 class="box--list__title"> Зарегистрируйтесь.</h2>
    <div class="box--list__description"> 
      ✅ Зарегистрируйтесь сейчас и увеличьте свой доход : <a href="./v/login/signup.html"> регистрация </a>
        
      Если у Вас возникли вопросы, пожалуйста, свяжитесь с нами по адресу info@illicolove.com </div>
</div>
</div>`,
    "IDTRANSLATE6WX":` Языки <span> <i class="bi bi-globe2"></i></span> <i class="bi bi-chevron-down"></i> `,
  }

      },
      pt:{
        translation : {
          "IDTRANSLATE1": " Início ",
         // "IDTRANSLATE2": "À propos",
          "IDTRANSLATE3": ` Como funciona?`,
          "IDTRANSLATE4": ` Termos `,
          "IDTRANSLATE5":" Condições Gerais de Utilização ",
          "IDTRANSLATE6":" Política de Privacidade ",
          "IDTRANSLATE6X":" Nosso Sistema de Afiliação ",
          "IDTRANSLATE7":" Contacto ",
          "IDTRANSLATE8":" Se inscrever ",
          "IDTRANSLATE9":" Se conectar ",
          "IDTRANSLATECONTACT1":" Contacto ",
          "IDTRANSLATECONTACT2":" Contacte-nos ",
          "IDTRANSLATECONTACT3":" Endereço ",
          "IDTRANSLATECONTACT4":' Telefone ',
          "IDTRANSLATECONTACT5":"E-mail", 
          "IDTRANSLATECONTACT6":" Redes Sociais ",
          "IDTRANSLATETITLE":" Anúncios ",
          "IDTRANSLATETITLEFORM":" Formulário ",
          "IDTRANSLATE1INF1":`Seu endereço de e-mail é coletado e processado pela BAKO FAMILIA & COMPANY para mantê-lo informado sobre novos recursos do site illicolove e suas atualizações.
          De acordo com a Lei 2017-20 relativa ao código digital na República do Benim, sobre a proteção dos dados pessoais, pode cancelar a subscrição ou exercer os seus direitos de acesso, oposição, rectificação e supressão, enviando um e-mail para info@illicolove.com`,
          "IDTRANSLATE10":"illicolove,",
          "IDTRANSLATE11":` A sua plataforma de encontros, para combater o celibato e a solidão.`,
          "IDTRANSLATE12":` Vemos a solidão involuntária como um problema humanitário e nos comprometemos a oferecer uma solução para as pessoas que sofrem com ela.`,
          "IDTRANSLATE13":` Se registrar gratuitamente `,
          "IDTRANSLATE13KLM":` Ir para o seu perfil `,
         // "IDTRANSLATE14":`À propos de nous`,
         // "IDTRANSLATE15":`Votre plateforme de rencontres en ligne illicolove.com vous est proposée par les Établissements BAKO FAMILIA & COMPANY, une entreprise individuelle(EI) de droit béninois immatriculée au Registre du Commerce et du Crédit Mobilier RCCM RB/COT/08/A4101 ; à l’Identifiant Fiscal Unique (IFU) 3200800938610.`,

         // "IDTRANSLATE16":`Elle a pour activités, le Wedding planning (accompagnement dans l’organisation de mariage), le Tourisme-Loisirs, l’organisation de foires et Salons. Elle a été créée en Mai 2008 à Cotonou. `,
         // "IDTRANSLATE17":`Plus de détails`,
          "IDTRANSLATE18":` Os nossos objectivos `,
          "IDTRANSLATE19":` Artigo 16.o`,
          "IDTRANSLATE20":` O nosso alvo `,

          "IDTRANSLATE17USER":` Seleção de região `,
          "IDTRANSLATE18USER":` Detalhes do usuário `,
          "IDTRANSLATE19USER":` Perfil `,

          "IDTRANSLATE21":` A colocação em funcionamento desta plataforma de namoro online responde às nossas iniciativas de luta contra o celibato e a solidão.
          Materializa a nossa acção na linha definida pela Declaração Universal dos
          Direitos do Homem no seu artigo 16º, que recorda o direito das mulheres ao casamento
          e para o homem, e a importância da família que deve ser protegida pela sociedade e
          pelo Estado.`,
         "IDTRANSLATE22":` Os nossos valores:`,
         "IDTRANSLATE23":` A confiabilidade,`,
         "IDTRANSLATE24":` Cortesia e`,
         "IDTRANSLATE25":` a Discrição.`, 
         "IDTRANSLATE26":` A partir da idade núbil, o homem e a mulher, sem qualquer restrição quanto à raça, nacionalidade ou religião, têm o direito de se casar e de constituir família. Eles têm direitos iguais em relação ao casamento, durante o casamento e durante a sua dissolução. `,
         "IDTRANSLATE27":` O casamento só pode ser concluído com o livre e pleno consentimento dos futuros cônjuges. `,
         "IDTRANSLATE28":` A família é o elemento natural e fundamental da sociedade e tem direito à proteção da sociedade e do Estado.  
A solidão, o celibato, o isolamento social, constituem um imperativo humanitário que interpela os poderes públicos, as associações e as empresas do domínio.  A solidão crónica e involuntária constitui um drama individual vivido em silêncio por aqueles que dela sofrem a maior parte do tempo. illicolove.com nasceu neste contexto, com a vontade de propor de outra forma e simplesmente, serviços de encontros online; com uma caça comprovada aos perfis fictícios. 
Bem-vindo!`,
         "IDTRANSLATE29":` Nós nos concentramos apenas em indivíduos :`,
         "IDTRANSLATE30":` Jovens com pelo menos 18 anos de idade.`,
         "IDTRANSLATE31":` Solteiros involuntários de idade avançada, desesperados (es) e decepcionados(es).`,
         "IDTRANSLATE32":` Os divorciados.`,
         "IDTRANSLATE33":` Viúvas, viúvos.`,
         "IDTRANSLATE34":` Nossos usuários `,
         "IDTRANSLATE35":` Todos os nossos usuários `,
         "IDTRANSLATE36":` Na África `,
         "IDTRANSLATE37":` Na Europa `,
         "IDTRANSLATE38":` Outros países do mundo `,
        // "IDTRANSLATE39":`Notre équipe`,
        // "IDTRANSLATE40":`Directrice`,
        // "IDTRANSLATE41":`Relectrice, et Responsable marketing`,
        // "IDTRANSLATE42":`Développeur et SEO`,


         "IDTRANSLATEX1":` As etapas de uso `,
         "IDTRANSLATEX2":` Aqui está como funciona illicolove.`,
         "IDTRANSLATEX3":` Inscrição `,
         "IDTRANSLATEX4":` Após a sua inscrição, illicolove oferece-lhe três (03) unidades no valor de 295 francos CFA ou seja 0.43 Euros.
         Uma unidade custa 95 francos CFA ou 0,144 euros.`,
         "IDTRANSLATEX5":` conexão `,
         "IDTRANSLATEX6":` Ao entrar no illicolove, você pode acessar todos os recursos e serviços reservados para usuários registrados.`,
         "IDTRANSLATEX7":` Publicar um anúncio `,
         "IDTRANSLATEX8":` Clicando no botão «Publique o seu anúncio», pode optar por publicar quer na página «África» quer na página «Europa»; ou na página «Outros países do mundo»; consoante o seu local de residência. Basta preencher o formulário de pesquisa que será exibido.`,




         "toopenPUAID":` mais...`,
         "openPUA":`Convidamos você a publicar seu anúncio na página de sua área geográfica de residência, no entanto, você pode visualizar e entrar em contato com qualquer perfil de um anúncio de pesquisa fora de sua área geográfica habitual.
           Por exemplo, se você mora na França, você deve publicar seu anúncio na página
           «Europa» e pode consultar e contactar com anúncios nas páginas
           «África», «Europa» e «Outros países do mundo»
           Quando você terminar de preencher e enviar seu formulário de pesquisa, seu
           anúncio aparecerá no prazo máximo de 24 horas, se julgarmos o seu perfil
           fiável após revisão e eventuais verificações. A nossa equipa de revisão e validação pode escrever-lhe em privado para garantir a fiabilidade do seu perfil. Poderá ser necessário esclarecer a sua identidade, uma chamada de voz ou vídeo. Com isso em mente, a validação e o aparecimento do seu anúncio no illicolove podem exceder 24 horas. A rapidez com que seu anúncio será publicado dependerá de você. Nós sistematicamente descartamos anúncios fantasiosos, irrealistas e, especialmente, perfis falsos, sem aviso prévio.
           Se tiver alguma dificuldade em usufruir dos serviços de illicolove.com, por favor escreva-nos para info@illicolove.com`,
          "IDTRANSLATEX9":` Validação da sua conta de utilizador `,
          "IDTRANSLATEX10":` Preencha o formulário e clique em «ENVIAR». Verificaremos e validaremos o seu formulário no prazo de 24h. Receberá uma mensagem de confirmação. Se forem necessárias verificações adicionais, iremos notificá-lo por e-mail.`,
          "IDTRANSLATEX11":` Consultar um anúncio `,
          "IDTRANSLATEX12":` O botão «Ver anúncios» leva a mais três botões:  África  (anúncios de África), Europa (anúncios da Europa) e Outros países do mundo  (anúncios fora da África e Europa). Conhecer o homem ou a mulher de sua vida em illicolove pode custar-lhe apenas 95 francos CFA ou 0.14 Euros.
          Isso é o que custa cada unidade que você recebe, quando você clica no
          casa «Contactar-me» de um perfil que chama particularmente a sua atenção.`,
          "IDTRANSLATEX13":` Compra de unidades `,
          "IDTRANSLATEX14":` Você pode recarregar sua conta (Meu Plano) a sua conveniência, a fim de continuar suas pesquisas de namoro entre os anúncios publicados.             A conta de débito de crédito pessoal que você recebe assim que se registra permite que você a recarregue de acordo com o método de pagamento de sua escolha. A MOEDA de faturamento no illicolove é o Franco CFA (XOF).  1 € = 655,957 XOF.`,
          "IDTRANSLATEX15":` As perguntas mais frequentes.`,
          "IDTRANSLATEX16":` Posso ter um bom encontro em illicolove?`,
          "IDTRANSLATEX17":` Sim, desde que preencha corretamente o formulário de pesquisa fornecendo informações verdadeiras sobre você.`,




          "IDTRANSLATEX18":` Seu site de namoro é pago?`,
          "IDTRANSLATEX19":` Sim, apenas para consultar o endereço de contacto de um perfil que tenha tido particular interesse para si.`,
          "IDTRANSLATEX20":` Quanto custa a visualização do endereço de contato de um perfil que me atrai e me interessa?`,
          "IDTRANSLATEX21":`95 FCFA ou 0.14 Euros.`,
          "IDTRANSLATEX22":` Seu site de namoro é gratuito?`,
          "IDTRANSLATEX23":` Sim, o registro e a publicação do seu anúncio de pesquisa de amor são gratuitos no illicolove.`,
          "IDTRANSLATEX24":` Como publicar um anúncio de encontro?`,
          "IDTRANSLATEX25":` Depois de se inscrever no illicolove, clique no botão ou na guia «PUBLIQUE UM ANÚNCIO». Em seguida, na página que será exibida, escolha o nome do continente que corresponde ao seu continente de residência habitual. Finalmente preencha corretamente o formulário de pesquisa que será exibido e envie.`,
          "IDTRANSLATEX26":` Posso residir em África e contactar um perfil residente fora de África?`,
          "IDTRANSLATEX27":` Sim!`,
          "IDTRANSLATEX28":` Posso residir na Europa e contactar um perfil residente fora da Europa?`,
          "IDTRANSLATEX29":` Sim!`,
          "IDTRANSLATEX30":` Posso residir na Europa e publicar o meu anúncio de pesquisa nas páginas «África» e «Outros países do mundo»?`,
          "IDTRANSLATEX31":` Não! Publique o seu anúncio de pesquisa apenas na página correspondente à sua área de residência.`,
          "IDTRANSLATEX32":` Posso pagar unidades por celular?`,
          "IDTRANSLATEX33":`Sim !`,
          "IDTRANSLATEX34":` Qual é a taxa de assinatura no seu site?`,
          "IDTRANSLATEX35":` Não há assinatura no illicolove.`,
          "IDTRANSLATEX36":` Como recarregar a minha conta de Crédito?`,
          "IDTRANSLATEX37":` Oferecemos um sistema de pagamento seguro por vários agregadores de pagamento. Para sua conveniência, carregue sua conta com cartão de crédito ou dinheiro móvel.  Abaixo do seu perfil no seu painel pessoal, clique no botão verde  «RECARREGAR MINHA CONTA» e siga os passos simples.`,
          "IDTRANSLATEX38":` Preciso pagar para publicar meu anúncio de pesquisa?`,
          "IDTRANSLATEX39":` Não! A publicação de um anúncio de pesquisa é gratuita.`,
          "IDTRANSLATEX40":` Tenho de pagar para ver os anúncios?`,
          "IDTRANSLATEX41":` Não! A visualização dos anúncios é gratuita, é a obtenção do endereço de contacto contido num anúncio que é pago.`,
          "IDTRANSLATEX42":` Como funciona o sistema de Crédito-Débito?`,
          "IDTRANSLATEX43":` Ao se inscrever, você recebe automaticamente e gratuitamente três (03) unidades de crédito que lhe permitem ver três (03) endereços de contatos em anúncios de sua escolha. Cada unidade tem um valor de 95 FCFA ou seja 0.14 Euros.
          Quando suas unidades se esgotam, você pode comprar de acordo com sua conveniência e capacidade. A quantidade de unidades que você pode comprar vai de uma unidade para o número de unidades que você deseja.`,
          "IDTRANSLATEX44":` As minhas unidades que compro têm uma data de validade?`,
          "IDTRANSLATEX45":` Não! As suas unidades têm validade ilimitada.`,
          "IDTRANSLATEX46":` Preciso me inscrever para desfrutar do seu serviço de encontros?`,




          "IDTRANSLATEX47":` No illicolove, não há nenhuma assinatura para desfrutar de nossos serviços fora da assinatura da newsletter que é opcional.`,
          "IDTRANSLATEX48":` Qual é a política de privacidade no
          illicolove.com?`,
          "IDTRANSLATEX49":`A confidencialidade das suas informações é muito importante para nós. Seus dados pessoais são seguros e não são compartilhados com terceiros sem seu consentimento. Pode consultar a nossa política de privacidade para mais detalhes`,
          "IDTRANSLATEX50":` aqui `,
          "IDTRANSLATEX51":` Onde posso encontrar o e-mail de validação da minha conta?`,
          "IDTRANSLATEX52":` O e-mail de validação da sua conta pode estar na sua pasta de spam ou spam. Os filtros de segurança do provedor de e-mail podem, às vezes, direcionar e-mails de validação para essas pastas para sua proteção. Por favor, verifique sua pasta de spam ou lixo eletrônico e certifique-se de marcar o e-mail como "não spam" ou  "não spam" se você encontrá-lo lá. Se você ainda não conseguir encontrar o e-mail de validação, entre em contato com nosso suporte para obter mais ajuda.`,
          "IDTRANSLATETCU1":` Condições Gerais de Utilização `,
          "IDTRANSLATETCU2":` Bem-vindo ao illicolove.com, uma plataforma de namoro online oferecida pela BAKO FAMILIA & COMPANY. Ao usar nosso site, você concorda com os termos e condições descritos abaixo.`,
          "IDTRANSLATETCU3":` ARTIGO 1º: Assunto `,
          "IDTRANSLATETCU4":`Les présentes « Condições Gerais de Utilização» têm por objecto o enquadramento jurídico da utilização do site illicolove.com e dos seus serviços.`,




          "IDTRANSLATETCU5":` Este contrato é celebrado entre:`,
          "IDTRANSLATETCU6":` O Estabelecimento BAKO FAMILIA & COMPANY proprietário do sítio web, a seguir designado «o Editor», E Qualquer pessoa singular que deseje aceder ao sítio e aos seus serviços, a seguir denominado «o Utilizador». Os Termos e Condições de Utilização devem ser aceites por qualquer Utilizador e o seu acesso ao Site constitui a aceitação destes Termos e Condições.
          Nas presentes Condições Gerais de Utilização, é acordado que as seguintes expressões ou palavras, quer sejam utilizadas no singular ou no plural, terão o seguinte significado:`,
          "IDTRANSLATETCU7":` Anúncio de pesquisa: significa uma publicação de um usuário ou visitante do site, na forma de texto através do nosso formulário, acompanhada ou não de uma ou mais fotografias que representam seu  rosto`,
          "IDTRANSLATETCU8":` Serviços de namoro  : refere-se ao acesso pelo Usuário a todos os anúncios de pesquisa publicados no Site, entre outros, perfis, hiperlinks, textos, imagens, vídeos, contatos ou endereços através do «click to show».`,
          "IDTRANSLATETCU9":`«Click to show»: «Clique para mostrar, designa a funcionalidade que permite a qualquer utilizador visualizar o endereço de e-mail, O contacto telefónico ou qualquer outro meio de entrar em contacto com outro utilizador que tenha emitido previamente um anúncio de pesquisa e indicado o meio de a sua escolha o contactar. Esta funcionalidade que permite obter tal informação capital é paga. O seu custo é de 95 Francos CFA ou seja, cerca de 0,144 Euro por clique.`,
         "IDTRANSLATETCU10":` ARTIGO 2º: Menções legais`,




         
         "IDTRANSLATETCU11X":` O Estabelecimento BAKO FAMILIA & COMPANY é o Editor do site illicolove.com.  Situada no Lote 124 em Agblangandan, é uma empresa individual de direito beninense. Foi criada em 29 de Maio de 2008, matriculada no Registo do Comércio e do Crédito Mobiliário RCCM RB/COT/08/A4101; e tem para Identificador Fiscal Único (IFU) Número: 3200800938610.  É representada por Gildas Ghislain GANGBAZO.`,
        "IDTRANSLATETCU11":` ARTIGO 3º: Acesso aos serviços`,
        "IDTRANSLATETCU12":` O usuário do site illicolove.com tem acesso aos seguintes serviços:`,
        "IDTRANSLATETCU13":` Criação de uma conta pessoal `,
        "IDTRANSLATETCU14":` Criação e publicação gratuita do seu anúncio de pesquisa
        através do nosso formulário a preencher `,
        "IDTRANSLATETCU15":` Visualização de anúncios de pesquisa publicados por outros usuários. `,
        "IDTRANSLATETCU16":` A obtenção paga de contatos de perfis que retêm o seu interesse, e presentes em anúncios de pesquisa, de forma ilimitada e em sua conveniência (Click to show/ Clique para exibir)`,
        "IDTRANSLATETCU17":` Possibilidade de contactar o Editor para solicitar serviços personalizados `,
        "IDTRANSLATETCU18":` Qualquer Utilizador com acesso à internet pode aceder gratuitamente e a partir de qualquer lugar do site. Os custos suportados pelo Utilizador para aceder aos mesmos (ligação à Internet, hardware, etc.) não são da responsabilidade do Editor.  Os serviços acima referidos só são acessíveis ao Utilizador se este for membro do sítio (ou seja, se for identificado com os seus dados de início de sessão): 
        O site e os seus vários serviços podem ser interrompidos ou suspensos pelo Editor,   nomeadamente por ocasião de uma manutenção, sem obrigação de aviso prévio ou justificação.`,
        "IDTRANSLATETCU19":` ARTIGO 4º: Responsabilidade do Utilizador `,
        "IDTRANSLATETCU20":` O Usuário é responsável pelos riscos associados ao uso de seu login e senha.  A senha do Usuário deve permanecer em segredo. Em caso de divulgação de senha, o Editor não assume qualquer responsabilidade. O Usuário assume total responsabilidade pelo uso que faz das informações e conteúdos presentes no site illicolove.com.
        Qualquer utilização do serviço pelo Utilizador que resulte directa ou indirectamente em danos deve ser objecto de uma indemnização a favor do site.
        O site permite que os usuários publiquem um anúncio de pesquisa no site, preenchendo o formulário "Publicar um anúncio".`,





        "IDTRANSLATETCU21":` O utilizador compromete-se a fornecer informações fiáveis, a propor fotografias recentes sem obscenidade, a escrever nos seus critérios de pesquisa palavras respeitosas dos outros e da lei e a aceitar que sejam anunciados com moderação ou recusados pelo Editor, Sem obrigação de fundamentação após recusa da sua parte em fornecer informações suplementares para evitar perfis falsos.
        Ao publicar o seu anúncio no site, o Utilizador cede ao Editor o direito não exclusivo e gratuito de representar, reproduzir, adaptar,  modificar, difundir e distribuir o seu anúncio nas redes sociais, ou directamente por um terceiro autorizado; respeitando o seu anonimato ou o modo de confidencialidade escolhido.
        O Editor compromete-se a preservar o anonimato de todos os usuários. e usuários em caso de exibição de anúncios nas redes sociais.`,
        "IDTRANSLATETCU22":` ARTIGO 5: Responsabilidade do Editor `,
        "IDTRANSLATETCU23":` Qualquer avaria do servidor ou da rede não pode implicar a responsabilidade do Editor. 
        Da mesma forma, a responsabilidade do site não pode ser assumida em caso de força maior ou devido ao fato imprevisível e intransponível de terceiros.
        O site illicolove.com está empenhada em implementar todos os meios necessários para garantir a segurança e privacidade dos dados.
        No entanto, não oferece uma garantia de segurança total. 
        O Editor reserva-se o direito de não garantir a confiabilidade dos perfis, embora
        os anúncios de pesquisa apresentados no site sejam considerados fiáveis e verificados antes da validação da sua publicação no back-office pela equipa de revisão e validação do Editor.`,



        "IDTRANSLATETCU24":` ARTIGO 6: PROPRIEDADE INTELECTUAL `,
        "IDTRANSLATETCU25":` A BAKO FAMILIA & COMPANY é a proprietária exclusiva de todos os direitos de propriedade intelectual sobre a marca, estrutura e conteúdo do Site www.illicolove.com. Os conteúdos do site www.illicolove.com destinam-se a um uso estritamente pessoal, privado e não coletivo, livremente para o conteúdo gratuito. O mesmo vale para feeds RSS e newsletters. Fora do nosso sistema de afiliação, é proibida qualquer utilização profissional ou comercial ou comercialização de tais conteúdos junto de terceiros, salvo acordo expresso da BAKO FAMILIA & COMPANY.`,
        "IDTRANSLATETCU26":` ARTIGO 7: Dados pessoais.`,
        "IDTRANSLATETCU27":` Consulte a nossa Política de Privacidade, dados
        pessoais e cookies aqui <a href="politique.html"><i class="bi bi-arrow-right-circle"></i></a>`,
        "IDTRANSLATETCU29":` ARTIGO 8º: Hiperligações `,
        "IDTRANSLATETCU30":` Os domínios para os quais conduzem as ligações de hipertexto presentes no site não implicam a responsabilidade do Editor BAKO FAMILIA & COMPANY, que não tem controlo sobre estas ligações.  O Editor estabeleceu parcerias com prestadores de serviços e pode oferecer ao Usuário informações sobre outros sites e/ou serviços, por exemplo, mencionando endereços de sites, e/ou pela presença de hiperligações para esses sites.          Esses links de hipertexto que redirecionam para sites de terceiros não foram desenvolvidos pelo Editor e não pertencem a ele. O Editor não assume, portanto, nenhuma responsabilidade por esses sites, seu conteúdo, anúncios, produtos ou serviços disponíveis em ou a partir desses sites. Além disso, o Editor não se responsabiliza pelas informações, opiniões e recomendações formuladas por esses terceiros. `,



        "IDTRANSLATETCU31":` O Editor não pode ser responsabilizado por quaisquer danos ou perdas reais ou alegados, conseqüentes ou relacionados ao uso, ou confiar no conteúdo, bens ou serviços disponíveis nesses serviços parceiros ou fontes externas.  A decisão de ativar esses links é de inteira responsabilidade do Usuário.
        O Editor não é responsável pela disponibilidade desses sites e não pode controlar o conteúdo ou validar a publicidade, produtos e outras informações veiculadas nesses sites. É possível que um terceiro crie um link para uma página do site illicolove.com sem permissão expressa do editor.`,
        "IDTRANSLATETCU32":` ARTIGO 9º: Advertência especial `,
        "IDTRANSLATETCU33": ` Tanto na vida real quanto na vida virtual na internet, você pode cruzar o caminho de pessoas honestas, bem como de pessoas maliciosas e golpistas. 
        Cabe-nos a nós, individualmente, adoptar certas atitudes de segurança na vida real e, por outro lado, no mundo virtual na Internet. A BAKO FAMILIA & COMPANY convida-o a:`,
        "IDTRANSLATETCU34":` Nunca envie dinheiro para um estranho
        neste site, sob nenhuma circunstância.`,
        "IDTRANSLATETCU35":` Nunca envie fotografias íntimas para um contato
        encontrado neste site `,




        "IDTRANSLATETCU36":` Estar em guarda quando uma pessoa afirma viver em
        Os arredores, mas a trabalhar no estrangeiro.`,
        "IDTRANSLATETCU37":` Nunca ceda sob o pretexto de uma situação urgente em que um ente querido está doente e seu correspondente virtual pede-lhe para ajudá-lo a pagar várias taxas. Nesse caso, convidamos você a denunciar o perfil desses golpistas ao Editor.`,
        "IDTRANSLATETCU38":` Uma relação amorosa emergente em illicolove.com não pode ser para você uma fonte de problemas e cuidado financeiro. Portanto, seja muito cauteloso quando um estranho declarar seu amor a você sem poder conhecê-lo; e mesmo depois de um encontro físico, reserve o tempo necessário antes de gastar dinheiro significativo.`,
        "IDTRANSLATETCU39":` Escolha sempre um local público para um primeiro encontro.`,
        "IDTRANSLATETCU40":` Sempre relate suas posições para um amigo quando você está na companhia de uma pessoa desconhecida que você acabou de conhecer.`,
        "IDTRANSLATETCU41":` Denunciar e denunciar-nos, tentativas de venda de produtos ou serviços, perfis que se revelem falsos apesar dos nossos filtros após as suas conversas em privado, ameaças e intimidações, comentários maldosos, homofóbicos, abusivos e ofensivos, mensagens de menores, e os pedidos de ajudas financeiras ou de fotografias explícitas.`,
        "IDTRANSLATETCU42":` Portanto, o Usuário reconhece e aceita, sem reserva, ser plenamente responsável por qualquer ação realizada após a leitura de um anúncio de namoro e, em geral, por qualquer informação presente no Site.O fornecimento de tais dados não pode ser assimilada, de qualquer forma, a um conselho específico ou a um apoio à decisão. O Utilizador está plenamente consciente da aleatoriedade dos encontros amorosos tanto na vida real como na internet.`,

        "IDTRANSLATETCU43":` ARTIGO 10: Eliminação de dados após um ano de inatividade.`,
        "IDTRANSLATETCU44":` Por razões de segurança, se você não se autenticar no Site por um período de um ano, receberá um e-mail solicitando que você faça login o mais rápido possível, caso contrário, seu perfil será excluído de nossos bancos de dados.`,




        "IDTRANSLATETCU45":` ARTIGO 11: Eliminação da conta a pedido.`,
        "IDTRANSLATETCU46":` O Usuário tem a opção de excluir sua Conta em
        a qualquer momento, por simples solicitação ao Editor ou pelo menu de exclusão de
        Conta presente nas configurações da Conta, se houver.`,
        "IDTRANSLATETCU47":` ARTIGO 12: Eliminação da conta em caso de violação das CGU `,
        "IDTRANSLATETCU48":` Em caso de violação de uma ou mais disposições dos TDS ou de qualquer outro documento incorporado nos presentes por referência, o Editor reserva-se o direito de cessar ou restringir sem qualquer aviso prévio e a seu exclusivo critério, o seu uso e acesso aos serviços, à sua conta e a todos os Sites Vinculados.`,
        "IDTRANSLATETCU49":` ARTIGO 13: Indicações em caso de violação de segurança detectada pelo Editor.`,
        "IDTRANSLATETCU50":` Comprometemo-nos a implementar todas as medidas técnicas e organizacionais adequadas para garantir um nível de segurança adequado aos riscos de acesso acidental, não autorizado ou ilegal, divulgação, alteração, perda ou destruição dos seus dados pessoais.`,
        "IDTRANSLATETCU51":` No caso de tomarmos conhecimento de um acesso ilegal aos dados pessoais que lhe dizem respeito armazenados nos nossos servidores ou nos dos nossos prestadores de serviços, ou de um acesso não autorizado que tenha por consequência a realização dos riscos identificados no presenteNo topo, comprometemo-nos a:`,





        "IDTRANSLATETCU52":` Examinar as causas do incidente e notificá-lo        
        (public reporting);`,
        "IDTRANSLATETCU53":` Tomar as medidas necessárias dentro dos limites do razoável, a fim de reduzir os efeitos negativos e prejuízos que possam resultar do referido incidente.`,
        "IDTRANSLATETCU54":` ARTIGO 14: LIMITAÇÃO DE RESPONSABILIDADE `,
        "IDTRANSLATETCU55":` Em caso algum os compromissos definidos no ponto anterior relativos à notificação em caso de violação da segurança podem ser equiparados a qualquer reconhecimento de culpa ou de responsabilidade quanto à ocorrência do incidente em questão.`,
        "IDTRANSLATETCU56":` ARTIGO 15: Duração do contrato `,
        "IDTRANSLATETCU57":` A duração deste contrato é indeterminada. O contrato produz efeitos em relação ao Utilizador a partir do início da utilização do serviço.`,
        "IDTRANSLATETCU58":` ARTIGO 16: LEI APLICÁVEL E JURISDIÇÃO COMPETENTE `,
        "IDTRANSLATETCU59":` A língua dos presentes CGU é o francês e prevalecerá sobre qualquer versão traduzida para outra língua. Este contrato está sujeito à legislação do Benim, incluindo a Lei N° 2017-20, de 20 de abril de 2018, relativa ao Código Digital na República do Benin. A escolha da lei aplicável não afeta seus direitos como consumidor de acordo com a lei aplicável do seu local de residência.`,
        "IDTRANSLATETCU60":` Se você é um consumidor, você e nós concordamos em submeter-se à jurisdição não exclusiva das jurisdições de Benim. Em caso de litígio não resolvido amigavelmente entre o Utilizador e o Editor, o tribunal comercial de Cotonou será competente para resolver o contencioso.`,
        "IDTRANSLATEPC1":` POLÍTICA DE PRIVACIDADE `,
        "IDTRANSLATEPC2":` Aviso legal `,




        "IDTRANSLATEPC3":` Este Aviso Legal e Política de Privacidade detêm e explicam a forma como a BAKO FAMILIA & COMPANY utiliza e protege as informações que nos transmite, também, quando você usa nosso site de namoro acessível a partir da URL: www.illicolove.com.`,
        "IDTRANSLATEPC4":` Por favor, note que a nossa Política de Privacidade pode ser alterada e/ou complementada a qualquer momento, especialmente para cumprir com qualquer evolução legislativa, regulamentar, jurisprudencial ou tecnológica. Nesse caso, a data da sua atualização será indicada na presente política. Estas alterações vinculam o utilizador assim que forem publicadas. 
        Por isso, convidamo-lo a consultar regularmente este aviso e política de privacidade para tomar conhecimento das suas eventuais alterações.`,
        "IDTRANSLATEPC5":` Declaração à Autoridade de Proteção de Dados Pessoais (APDP)`,
        "IDTRANSLATEPC6":` De acordo com a Lei n° 2017-20, de 20 de abril de 2018, que estabelece o código numérico na República do Benin (Quinto Livro sobre a Proteção de Dados Pessoais e Privacidade) o site www.illicolove.com foi declarado à Autoridade de Proteção de Dados Pessoais (apdp.bj) com o número SA-TDP-00601`,
        "IDTRANSLATEPC7":` Em qualquer caso, a BAKO FAMILIA & COMPANY apenas recolhe informações pessoais sobre o utilizador para efeitos do serviço de namoro oferecido pelo seu website. O utilizador fornece estas informações com pleno conhecimento de causa,  nomeadamente quando procede por si próprio à sua introdução.`,





        "IDTRANSLATEPC8":` De acordo com as disposições da Lei 2017-20 que codifica o digital na República do Benim, qualquer usuário tem o direito de acessar, retificar e se opor aos dados pessoais que lhe dizem respeito, fazendo seu pedido por escrito e assinado,  acompanhada de uma cópia de um documento de identidade com assinatura do titular do documento, especificando o endereço para o qual a resposta deve ser enviada. Nenhuma informação pessoal de um usuário do nosso site «www.illicolove.com» é publicada, cedida ou vendida em qualquer meio ou a terceiros sem o seu conhecimento.`,
        "IDTRANSLATEPC9":` Privacidade de dados `,
        "IDTRANSLATEPC10":` Seus dados pessoais são confidenciais e não serão comunicados a terceiros. 
        A natureza privada do nosso serviço de namoro não nos permite comunicar os seus dados pessoais (nomes, contactos, endereços, etc) a um indivíduo, independentemente da sua posição ou qualidade.`,
        "IDTRANSLATEPC11": ` Direito de acesso `,
        "IDTRANSLATEPC12":` De acordo com as disposições da lei que codifica o digital na República do Benim, qualquer usuário do nosso site www.illicolove.com tem o direito de acessar, retificar, modificar e excluir os dados que lhe dizem respeito individualmente. Este direito pode ser exercido pelo titular mediante pedido enviado por correio electrónico para o seguinte endereço de correio electrónico: info@illicolove.com. As informações pessoais coletadas não são confiadas a terceiros.`,
        "IDTRANSLATEPC13":` Direito de retificação `,






        "IDTRANSLATEPC14":` De acordo com a lei que codifica o digital na República do Benim, qualquer usuário do nosso site www.illicolove.com pode solicitar a retificação, atualização, exclusão, bloqueio ou apagamento dos dados que lhe dizem respeito, e que possam revelar-se inexactos, erróneos, incompletos, equívocos ou obsoletos.`,
        "IDTRANSLATEPC15":` Prazo de validade.`,
        "IDTRANSLATEPC16":` Os seus dados pessoais são conservados pela BAKO FAMILIA & COMPANY apenas pelo tempo correspondente à sua necessidade de serviços de namoro. No entanto, esse período de retenção não excede treze (12) meses em caso de inatividade em sua conta de usuário.`,
        "IDTRANSLATEPC17":` Queixa à autoridade competente `,
        "IDTRANSLATEPC18":` Se considera que a BAKO FAMILIA & COMPANY não cumpre as suas obrigações em relação aos seus dados pessoais recolhidos durante a sua visita ao seu website www.illicolove.com, pode dirigir-se, conforme o prescrito no procedimento legal, uma reclamação ou solicitação à Autoridade de Proteção de Dados Pessoais (APDP).`,
        "IDTRANSLATEPC19":` Propriedade intelectual `,
        "IDTRANSLATEPC20":` Todos os conteúdos deste website, incluindo, entre outros, gráficos, imagens, textos, vídeos, animações, sons, logotipos, gifs e ícones, bem como a sua formatação, são propriedade exclusiva da BAKO FAMILIA & COMPANY, com exceção das marcas comerciais, logotipos ou conteúdos pertencentes a outras empresas parceiras ou autores. 
        Qualquer reprodução, distribuição, modificação, adaptação, retransmissão ou publicação, ainda que parcial, destes diferentes elementos é estritamente proibida sem o consentimento expresso por escrito da BAKO FAMILIA & COMPANY.`,
        "IDTRANSLATEPC21":` Termos de serviço `,
        "IDTRANSLATEPC22":` O site www.illicolove.com está disponível em francês, com traduções em inglês, espanhol, alemão, português, russo, mandarim(chinês), árabe, japonês, italiano e coreano. Para uma maior comodidade, recomendamos a utilização de navegadores compatíveis e modernos como: Chrome, Safari, Firefox.`,
        "IDTRANSLATEPC23":` Informações e sugestões `,







        "IDTRANSLATEPC24":` A BAKO FAMILIA & COMPANY utiliza todos os meios ao seu dispor para garantir um serviço de encontros românticos fiável e uma atualização permanente do seu site www.illicolove.com. No entanto, erros ou omissões podem ocorrer. Por conseguinte, qualquer utilizador pode enviar-nos sugestões ou informações para: info@illicolove.com e indicar quaisquer alterações ao site que considere relevantes.`,
        "IDTRANSLATEPC25":`Cookies.`,
        "IDTRANSLATEPC26":` Para fins de desempenho técnico, estatísticas e exibição, o site www.illicolove.com pode usar cookies. Os cookies são pequenos ficheiros de texto armazenados no seu terminal, que não permitem a identificação do utilizador, mas que registam
        informações relativas à navegação de um terminal num sítio web. Algumas partes deste site não podem funcionar sem a aceitação de cookies. Os dados assim obtidos visam facilitar a navegação posterior neste site. Os cookies também se destinam a várias medidas de audiência e de frequência.`,
        "IDTRANSLATEPC27":` Recusar a instalação de um cookie pode resultar na impossibilidade de aceder a determinadas funcionalidades. No entanto, qualquer utilizador deste sítio Web pode configurar o seu terminal para recusar a instalação de cookies, tal como indicado abaixo:`,
        "IDTRANSLATEPC28":` Utilizadores do Safari: Seleccione Safari Preferências,   clique em Privacidade e, em seguida, seleccione a opção «Cookies e dados do site». Sempre bloquear: o Safari não permite que sites, terceiros ou anunciantes armazenem cookies e outros dados no seu Mac. Isso pode impedir que alguns sites funcionem corretamente.`,





        "IDTRANSLATEPC29":` Utilizadores do Safari: Seleccione Safari Preferências,   clique em Privacidade e, em seguida, seleccione a opção «Cookies e dados do site». Sempre bloquear: o Safari não permite que sites, terceiros ou anunciantes armazenem cookies e outros dados no seu Mac. Isso pode impedir que alguns sites funcionem corretamente.`,
        "IDTRANSLATEPC30":` Usuários do Google Chrome: Menu; Configurações;   Exibir configurações avançadas (localizado na parte inferior da página).          Em seguida, clique no botão Configurações de conteúdo e marque a caixa Bloquear cookies e dados de sites de terceiros e, finalmente, clique em OK para confirmar sua escolha.`,
        "IDTRANSLATEPC31":` Usuários do Internet Explorer: Menu Opções da Internet Guia Privacidade e botão Avançado para exibir a janela Configurações Avançadas de Privacidade. Em seguida, marque a caixa de seleção Ignorar gerenciamento automático de cookies e selecione Recusar na coluna Cookies de terceiros.`,
        "IDTRANSLATEPC32":` Usuários do Microsoft Edge: guia ferramenta/ opções da Internet. Clique em Privacidade e escolha Bloquear todos os cookies.`,




        "IDTRANSLATEPC33":` Seguindo as práticas na matéria, alguns cookies são
        dispensados da recolha prévia do seu consentimento
        na medida em que sejam indispensáveis ao
        funcionamento deste sítio web. Têm por finalidade
        facilitar a comunicação por via electrónica. Trata-se
        incluindo cookies de identificador de sessão,
        autenticação e personalização da sua interface.
        Estes cookies são emitidos e geridos pela BAKO FAMILIA &
        EMPRESA e estão todos sujeitos a esta política.`,
        "IDTRANSLATEPC34":` Hiperligações `,
        "IDTRANSLATEPC35":` O sítio Web «www.illicolove.com» pode incluir ligações para outros sítios Web ou outros recursos disponíveis na Internet. A BAKO FAMILIA & COMPANY não dispõe de meios para controlar sites ligados ao seu site. Além disso, não responde nem garante a disponibilidade de tais sites e fontes externas. Ele não será responsável por quaisquer danos, de qualquer tipo, resultantes do conteúdo desses sites ou fontes externas.`,




        "IDTRANSLATECONSULTE1":` África `,
        "IDTRANSLATECONSULTE2":` Europa `,
        "IDTRANSLATECONSULTE3":` Outros países do mundo `,
        "IDTRANSLATEPROFIL1": " Conta válida ",
        "IDTRANSLATEPROFIL2": " Conta inválida ",
        "IDTRANSLATEPROFIL3":` Conta de débito `,
        "IDTRANSLATEPROFIL4":` Conta de débito `,
        "IDTRANSLATEPROFIL5":` O meu plano `,
        "IDTRANSLATEPROFIL6":` O meu plano `, 
        "IDTRANSLATEPROFIL7":` Meus dados `,
        "myNameIDX":` Excluir sua conta `,
        "myBtn":` Recarregar minha conta `,
        "myBtn2":` Recarregar minha conta `,
        "IDTRANSLATEPROFIL9":` Vá para Início. `,
        "IDTRANSLATEPROFIL10":` Se desconectar `,
        "CONSULTEZLESANNONCES":` CONSULTE OS ANÚNCIOS `,
        "IDTRANSLATEPROFIL11":` ALTERE SEU ANÚNCIO `, 
        "IDTRANSLATEPROFIL12":` PUBLIQUE UM ANUNCIO `,
       // "IDTRANSLATEPROFIL13":`Vous souhaite la Bienvenue !`,
        "exampleModalLongTitle":` Uma unidade vale 95 FCFA, ou 0.144 Euros.`,
        "errorSms":` Tem de introduzir um número.`,
        "SmspayId":` Indique aqui o número de unidades.`,
        "IDTRANSLATEPROFIL14":` Regresso `, 
        "payYourUnitybtn":` Validar `,
        "CHOISEYOURPAIEMENT":` Selecione o método de pagamento.`,
        "exampleModalLongTitleX":` Proteja a sua conta.`,
        "IDTRANSLATEPROFIL15":` Por favor, forneça uma resposta que você nunca esquecerá. 
        Esta resposta será solicitada ao recuperar 
        sua conta. Sem essa resposta, sua conta permanecerá inacessível.`,
        "IDTRANSLATEPROFIL16":` Selecione sua pergunta `,
        "IDTRANSLATEPROFIL17":` Qual é o seu mês de nascimento?`,
        "IDTRANSLATEPROFIL18":` Qual é a sua cor favorita?`,
        "IDTRANSLATEPROFIL19":` Como você imagina sua vida diária?`,
        "IDTRANSLATEPROFIL20":` O que é mais importante para você?`,
        "IDTRANSLATEPROFIL21":` Qual é o nome da pessoa que o inspirou?`,
        "IDTRANSLATEPROFIL22":` Qual é o seu país favorito?`,
        "IDTRANSLATEPROFIL23":` Qual é o seu jogador favorito?`,
        "IDTRANSLATEPROFIL24":` Qual é o seu artista favorito?`,
        "IDTRANSLATEPROFIL25":` Qual é a sua resposta? Apenas uma palavra. Sem espaço.`,
        
        "submitFormID":` Subscrever `,
        "TOCLOSEMODALID":` Fechar `,   
        "IDTRANSLATEPROFIL26":` Validar `, 
        "IDTRANSLATEPROFIL27":` Resposta de segurança `,
        "payYourUnity":` Escrever o número de unidades `,
        congratulationsTitle: " Parabéns!",
        accountSecureMessage: " Sua conta é segura. Obrigado!",       
        accountSecureMessageX: " Não coloquem espaço. Obrigado!",


        "IDTRANSLATEPROFIL28":` Sua conta de débito está vazia. Compre unidades para acessar os contatos dos anúncios que você vai gostar.`,
        "IDTRANSLATEPROFIL29":` Você não pode comprar unidades por enquanto. Consuma suas 3 unidades gratuitas oferecidas primeiro. Obrigado.`,
        "IDTRANSLATEPROFIL30W":` Tem a certeza?`,
        "IDTRANSLATEPROFIL30":` Não há como voltar atrás!`,
        "IDTRANSLATEPROFIL31":` Sim!, Remova o`, 
        "IDTRANSLATEPROFIL32":` Tem a certeza?`,
        "IDTRANSLATEPROFIL33":` Depois de se desconectar, você tem a opção de se reconectar.`,
        "IDTRANSLATEPROFIL34":`Sim, desconectar !`,
        "IDTRANSLATEPROFIL35":`Desconectado`,
        "IDTRANSLATEPROFIL36":` Você foi desconectado`,
        "IDTRANSLATEPROFIL37":` Quer visitar a nossa página inicial?`,
        "IDTRANSLATEPROFIL38":` Suprimido!`,
        "IDTRANSLATEPROFIL38X":` Sucesso.`,
        "IDTRANSLATEPROFIL39X":` Sua foto foi atualizada com sucesso.`,
        "IDTRANSLATEPROFIL40X":` Erro `,
        "IDTRANSLATEPROFIL41X":` A actualização da sua fotografia falhou.`,

        "IDTRANSLATEPROFIL39":` Sua conta foi excluída com sucesso!`,
        "IDTRANSLATEPROFIL40":` Removido!`,
        "IDTRANSLATEPROFIL41":` Erro ao remover o usuário! `,
        "IDTRANSLATEPROFIL42":` Há um erro `,
        "IDTRANSLATEPROFIL42Q":` Há um erro `,
        "IDTRANSLATEPROFIL42QX":` Há um erro `,
        "IDTRANSLATEPROFIL43":` O campo não está cheio!`, 
        "IDTRANSLATEPROFIL44":` Alguma coisa correu mal!`,
        "IDTRANSLATEPROFIL44IN":` Caros usuários, este método de pagamento estará disponível em breve. Por favor, por favor, use Feexpay para fazer suas transações. Obrigado!`,
        "IDTRANSLATEPROFIL45":` Os dados não estão atualizados!`,
        "IDTRANSLATEPROFIL46":` Você não tem mais unidades. Por favor, recarregue. Acesse seu perfil. Obrigado!`,
        "IDTRANSLATEPROFIL47":` Tem a certeza?`,
        "IDTRANSLATEPROFIL48":` Ao editar seu anúncio, ele será enviado novamente aos administradores para validação. Esse processo pode levar 24 horas.`,




        "IDTRANSLATEPROFIL49":` Regresso `,
        "IDTRANSLATEPROFIL50":` Sim! Estou a mudar.`,
        "IDTRANSLATELOGIN1":` Conecte-se.`,
        "IDTRANSLATELOGIN2":`Email`,
        "IDTRANSLATELOGIN3":` Seu e-mail `,
        "IDTRANSLATELOGIN4":` Senha `,
        "IDTRANSLATELOGIN5":` Senha `,
        "IDTRANSLATELOGIN6":` Lembrar-se de mim `,
        "IDTRANSLATELOGIN7":` Senha esquecida `,
        "IDTRANSLATELOGIN8":` Não tenho uma conta.`,
        "IDTRANSLATELOGIN9":` Registe-se gratuitamente `,
        "IDTRANSLATELOGIN10":` Conectar `,
        "IDTRANSLATELOGIN11":` Sucesso `,
        "IDTRANSLATELOGIN12":` Você está conectado com sucesso!`,
        "IDTRANSLATELOGIN13":` Desculpe `,
        "IDTRANSLATELOGIN14":` A senha está errada!`,
        "IDTRANSLATELOGIN15":` Desculpe `,
        "IDTRANSLATELOGIN16":` O usuário não existe com este e-mail  !`,
        "IDTRANSLATESIGNUP1":` Inscrever-se `,
        "IDTRANSLATESIGNUP2":` Pseudônimo `, 
        "IDTRANSLATESIGNUP3":` Pseudônimo `,
        "IDTRANSLATESIGNUP4":` Nome completo `, 
        "IDTRANSLATESIGNUP5":` Nome completo `,
        "IDTRANSLATESIGNUP6":`Email`,
        "IDTRANSLATESIGNUP7":` Seu e-mail `,
        "IDTRANSLATESIGNUP8":` Senha `,
        "IDTRANSLATESIGNUP9":` Sua senha `,
        "IDTRANSLATESIGNUP10":` Eu li e aceito os termos e condições `,
        "IDTRANSLATESIGNUP11":` Leia e aceite os nossos termos e condições `,
        "IDTRANSLATESIGNUP12":` Já tenho uma conta.`,
        "IDTRANSLATESIGNUP13":` Conecte-se `,
        "IDTRANSLATESIGNUP14":` Desculpe `,




        "IDTRANSLATESIGNUP15":` Já existe uma conta associada a esse endereço de e-mail ou número de telefone.`,
        "IDTRANSLATESIGNUP16":` Sucesso `,
        "IDTRANSLATESIGNUP17":` Você está registrado com sucesso!`,
        "IDTRANSLATESIGNUP18":` Erro ao enviar o endereço de e-mail para o Firebase `, 
        "IDTRANSLATESIGNUP19":` Não coloquem espaço. Obrigado!`,
        "IDTRANSLATESIGNUP19PHONE":` Forneça um número de telefone válido.`,
        "IDTRANSLATESIGNUP19PHONEX":` Forneça um número de telefone válido.`,
        "IDTRANSLATEFORGET1":` Enviar o endereço de e-mail usado durante o registro.`,
        "IDTRANSLATEFORGET2":`E-mail`,
        "IDTRANSLATEFORGET3":` Seu e-mail `,
        "IDTRANSLATEFORGET4":` Enviar `,
        "IDTRANSLATEFORGET5":` Validar `,
        "IDTRANSLATEFORGET6":` Dar a resposta apropriada!`,
        "IDTRANSLATEFORGET7":` Digite sua nova senha!`,
        "IDTRANSLATEFORGET8":` Digite sua nova senha!`, 
        "IDTRANSLATEFORGET9":` Ótimo...`,
        "IDTRANSLATEFORGET10":` Senha atualizada com sucesso!`,
        "IDTRANSLATEFORGET11":` Conecte-se `,
        "IDTRANSLATEFORGET12":` Está bem `,
        "IDTRANSLATEFORGET13":` Erro ao atualizar o e-mail.`,
        "IDTRANSLATEFORGET14":` Essa não é a resposta certa `,
        "IDTRANSLATEFORGET15":` O usuário não existe.`, 
        "IDTRANSLATEFORM1":` MEU PERFIL `,
        "IDTRANSLATEFORM1W":` MEU PERFIL `,
        "IDTRANSLATEFORM2":` MEU PERFIL `,
        "IDTRANSLATEFORM3":` MEU PERFIL `,
        "IDTRANSLATEFORM4":` PERFIL QUE PROCURO `,
        "IDTRANSLATEFORM4W":` PERFIL QUE PROCURO `,
        "IDTRANSLATEFORM5":` PERFIL QUE PROCURO `,
       // "IDTRANSLATEFORM6":`VEUILLEZ REMPLIR LE FORMULAIRE CI-DESSOUS.`,
        "IDTRANSLATEFORM7":` Forneça informações precisas e inteligentes.`,
        "IDTRANSLATEFORM8":` Meu país de residência <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM9":` Minha cidade de residência <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM10":` Nome ou Apelido <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM11":` Minha idade <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM9PL":` Minha cidade de residência `,





        "IDTRANSLATEFORM10X":` Minha cidade de residência `,
        "IDTRANSLATEFORM11X":` Minha idade `,
        "IDTRANSLATEFORM8X":` Meu país de residência `,
        "IDTRANSLATEFORM9X":` Minha idade `,
        "IDTRANSLATEFORM12":` Introduza apenas os números.<i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM13":` O meu género <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM14":` Homem `,
        "IDTRANSLATEFORM15":` Mulher `,
        "IDTRANSLATEFORM16":` Transgênero `,
        "IDTRANSLATEFORM17":` Fluido (Genderfluid)`,
        "IDTRANSLATEFORM18":` Intersexo `,
        "IDTRANSLATEFORM19":` Agenéro `,
        "IDTRANSLATEFORM20":` Aromático `,
        "IDTRANSLATEFORM21":` Assexual `,
        "IDTRANSLATEFORM22":` Bissexual `,
        "IDTRANSLATEFORM23":` Cisgênero `,
        "IDTRANSLATEFORM24":` Cisnormatividade `,
        "IDTRANSLATEFORM25":` Demiromantico `,
        "IDTRANSLATEFORM26":`Demissexualidade`,
        "IDTRANSLATEFORM27":` Heterogeneidade `,
        "IDTRANSLATEFORM28":`Iel`,
        "IDTRANSLATEFORM29":`Mágender`,
        "IDTRANSLATEFORM30":` Não binário `,
        "IDTRANSLATEFORM31":` Pansexual `,
        "IDTRANSLATEFORM32":` Poliamorosas `,
        "IDTRANSLATEFORM33":`Queerismo`,
        "IDTRANSLATEFORM34":` Transgênero `,
        "IDTRANSLATEFORM35":` Transição `,
       // "IDTRANSLATEFORM36":`VEUILLEZ REMPLIR LE FORMULAIRE CI-DESSOUS.`,
        "IDTRANSLATEFORM37":` Forneça informações precisas e inteligentes.`,
        "IDTRANSLATEFORM38":` A minha situação matrimonial <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM39":` Solteiro `,
        "IDTRANSLATEFORM40":` Em casal `,
        "IDTRANSLATEFORM41":` Divorciado(a)`,
        "IDTRANSLATEFORM42":` Viúvo (va)`,
        "IDTRANSLATEFORM43":` Minha nacionalidade <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM44":` Telefone <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM45":` Introduza apenas o seu número sem o prefixo do país <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM46":` A minha profissão ou ocupação <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM47":` Meu trabalho `,
       // "IDTRANSLATEFORM48":`VEUILLEZ REMPLIR LE FORMULAIRE CI-DESSOUS.`,
        "IDTRANSLATEFORM49":` Forneça informações precisas e inteligentes.`,
        "IDTRANSLATEFORM50":` Eu quero um encontro <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM51":` Amigável, uma companhia para quebrar a solidão `,
        "IDTRANSLATEFORM52":` Durável `,
        "IDTRANSLATEFORM53":` Que possam levar ao casamento `,
        "IDTRANSLATEFORM54":` Documento de identidade `,
        "IDTRANSLATEFORM55":` Foto 1 <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM56":` Foto 2 <i class="fa fa-star required"></i>`,
       // "IDTRANSLATEFORM57":`VEUILLEZ REMPLIR LE FORMULAIRE CI-DESSOUS.`,
        "IDTRANSLATEFORM58":` Forneça informações precisas e inteligentes.`,
        "IDTRANSLATEFORM59":` Seu género <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM60":` Homem `,
        "IDTRANSLATEFORM61":` Mulher `,
        "IDTRANSLATEFORM62":` Transgênero `,
        "IDTRANSLATEFORM63":` Fluido (Genderfluid)`,
        "IDTRANSLATEFORM64":` Intersexo `,
        "IDTRANSLATEFORM65":` Agenéro `,
        "IDTRANSLATEFORM66":` Aromático `,
        "IDTRANSLATEFORM67":` Assexual `,
        "IDTRANSLATEFORM68":` Bissexual `,




        "IDTRANSLATEFORM69":` Cisgênero `,
        "IDTRANSLATEFORM70":` Cisnormatividade `,
        "IDTRANSLATEFORM71":` Demiromantico `,
        "IDTRANSLATEFORM72":` Demissexualidade `,
        "IDTRANSLATEFORM73":` Heterogeneidade `,
        "IDTRANSLATEFORM74":`Iel`,
        "IDTRANSLATEFORM75":` Mágender `,
        "IDTRANSLATEFORM76":` Não binário `,
        "IDTRANSLATEFORM77":` Pansexual `,
        "IDTRANSLATEFORM78":` Poliamorosas `,
        "IDTRANSLATEFORM79":`Queer`,
        "IDTRANSLATEFORM80":` Transgênero `,
        "IDTRANSLATEFORM81":` Transição `,
        "IDTRANSLATEFORM82":` Sua faixa etária <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM83":` Sua situação matrimonial <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM84":` Solteiro `,
        "IDTRANSLATEFORM85":` Em casal `,
        "IDTRANSLATEFORM86":` Divorciado (a)`,
        "IDTRANSLATEFORM87":` Viúvo (va)`,
        "IDTRANSLATEFORM88":` Seu país de residência <i class="fa fa-star required" ></i>`,
        "IDTRANSLATEFORM89":` Você pode escolher vários países. <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM90":` Seu país `,
        "IDTRANSLATEFORM91":` Seu país de residência `,
      //  "IDTRANSLATEFORM92":`VEUILLEZ REMPLIR LE FORMULAIRE CI-DESSOUS.`,
        "IDTRANSLATEFORM93":` Forneça informações precisas e inteligentes.`,
        "IDTRANSLATEFORM94":` Descreva o aspecto físico que você deseja.`,
        "IDTRANSLATEFORM95":` Sua cidade de habitação <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM96":` Sua cidade `,
        "IDTRANSLATEFORM97":` Seu trabalho ou ocupação <i class="fa fa-star required"></i>`,
        "IDTRANSLATEFORM98":` Seu trabalho `,
        "IDTRANSLATEFORM99":` Outras especificações.`,
        "IDTRANSLATEFORM100":` Outras especificações.`,
        "IDTRANSLATEFORM10w":` Aspectos físicos `,
        "IDTRANSLATEFORM101":` Seguinte `,
        "IDTRANSLATEFORM102":` Anterior `,
        "IDTRANSLATEFORM103":` Enviar `,




        "IDTRANSLATEFORM104":`<p > Os dados pessoais recolhidos no presente formulário por <strong style="color: #000080;">BAKO FAMILIA & COMPANY</strong> serão tratados exclusivamente com a finalidade de garantir o bom funcionamento do serviço de encontros românticos que você solicitou. Os dados pessoais recolhidos não são comunicados a ninguém sem o seu consentimento.
        De acordo com as disposições da Lei 2017-20 que estabelece o código numérico na República do Benim sobre a proteção dos dados pessoais, o tratamento dos dados recolhidos foi declarado perante a APDP.</em> </p>
        <hr>
        <p class="mb-0"> De acordo com a lei acima mencionada, você pode exercer seus direitos de acesso, oposição, retificação e exclusão em <strong style="color: #000080;">BAKO FAMILIA & COMPANY</strong>.
        </em></p>`,
        "IDTRANSLATEFORM105":` A sua imagem é demasiado pequena. Seleccione por favor uma imagem com pelo menos 300x300 pixels.`,
        "IDTRANSLATEFORM106":` Ocorreu um erro ao chamar a API REST Countries `,
        "IDTRANSLATEFORM107":` Basta colocar o número sem o prefixo `,
        "IDTRANSLATEFORM108":` Por favor, selecione o país.`,
        "IDTRANSLATEFORM109":` Sucesso `,
        "IDTRANSLATEFORM110":` Seu formulário é submetido à verificação para validação dentro de 24 horas <i class="fa fa-heart"></i>.`,
        "IDTRANSLATEFORM111":` Desculpe `,
        "IDTRANSLATEFORM112":` Nem todos os seus campos estão preenchidos.`,
        "IDTRANSLATEUSERD1":` Contacte-me  <svg xmlns="http://www.w3.org/2000/svg" width="10.444" height="9.7"><defs><clipPath id="a"><path fill="none" d="M0 0h10.444v9.7H0z"/></clipPath></defs><g fill="none" stroke="#2a46cc" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.438" clip-path="url(#a)"><path d="M.719 4.85h8.709M5.594 8.683L9.427 4.85M5.594 1.017L9.427 4.85"/></g></svg>`,





        "IDTRANSLATEUSERD2":` Para me contatar `,
        "IDTRANSLATEUSERD3":`<i class="bi bi-alexa" style="font-size: 3vh !important;"></i> Meu perfil `,
        "IDTRANSLATEUSERD4":` Respostas `,
        "IDTRANSLATEUSERD5":` Minha cidade de residência :`,
        "IDTRANSLATEUSERD6":` O meu nome ou pseudónimo:`,
        "IDTRANSLATEUSERD7":` Minha faixa etária :`,
        "IDTRANSLATEUSERD8":` O meu género:`,
        "IDTRANSLATEUSERD9":` A minha situação matrimonial:`,
        "IDTRANSLATEUSERD10":` Minha nacionalidade :`,
        "IDTRANSLATEUSERD11":` Meu trabalho ou ocupação:`,
        "IDTRANSLATEUSERD12":` Eu quero um encontro :`,
        "IDTRANSLATEUSERD13":` Minhas preferências físicas :`,
        "IDTRANSLATEUSERD14":` Outros esclarecimentos :`,
        "IDTRANSLATEUSERD15":`<i class="bi bi-alexa" style="font-size: 3vh !important;"></i> Perfil que estou procurando `,
        "IDTRANSLATEUSERD16":` Respostas `,
        "IDTRANSLATEUSERD17":` Seu género :`,
        "IDTRANSLATEUSERD18":` Sua faixa etária :`,
        "IDTRANSLATEUSERD19":` Sua situação matrimonial :`,
        "IDTRANSLATEUSERD20":` Seu país de residência :`,
        "IDTRANSLATEUSERD21":` Sua cidade de habitação:`,
        "IDTRANSLATEUSERD22":` Seu trabalho ou ocupação :`,
        "TIDTRANSLATEUSERD23":` Em linha o `,

        "IDTRANSLATEUSERD24":`<i class="fas fa-database" style="font-size: 5vh !important; color: #FFB6C1;"></i> Existem dados.`,
        "IDTRANSLATEUSERD25":` Existem dados.`,
        "IDTRANSLATEUSERD26":` Há um erro.`,
        "IDTRANSLATEUSERD27":` A sua conta é debitada `,
        "IDTRANSLATEUSERD28":` Seus dados não estão atualizados.`,
        "IDTRANSLATEUSERD29":` Você só poderá entrar em contato com outros usuários após a publicação do formulário de pesquisa.`,
        "IDTRANSLATEUSERD30":` Você quer publicar seu anúncio ?`,
        "IDTRANSLATEUSERD31":` Suas unidades estão esgotadas. Você não pode mais entrar em contato com outros usuários’.`,
        "IDTRANSLATEUSERD32":` Você quer comprar unidades?`,
        "IDTRANSLATEUSERD33":` Está bem `,
        "IDTRANSLATEUSERD34":` Visite o seu perfil!`,
        "IDTRANSLATEUSERD35":`<i class="bi bi-eye" style="color: white;"></i> Clique para exibir.`,
        "texteIDTRANSLATEUSERD24YX": " Online ",
        "myNameIDwallet":" Retire as suas comissões.",
        "MYEWALLETID":`<i class="fa fa-align-left"></i> Minha carteira `,
        "MYEWALLETID1":" Saldo total ", 
        "comeBackId":" Regresso ",
        "idTogetwallet":" Retirar seus ganhos ",
        "HISTORYISMY":" Histórico ",
        "IDTRANSLATEWALLETU":" Em curso ",
        "IDTRANSLATEWALLETX":" Pago ",
        "IDTRANSLATEWALLET":" Desculpe!",
        "IDTRANSLATEWALLETM":" A sua transferência falhou. Tente novamente mais tarde.", 
        "IDTRANSLATEWALLET1":" Parabéns!",
        "IDTRANSLATEWALLET2":" Sua transferência foi concluída com sucesso!",
        "TITLEWALLETID": " E-wallet ",
        "IDTRANSLATEFOEMXX": " Por favor, insira apenas letras, os números não são permitidos neste campo.",
        "linkInput": " Copie aqui o seu link de afiliado ",
        "TERMINATOR" :" Terminar ",
        "PHOTOID" :"FOTO",
        "TERMINATORW" :" Acabou ",
        "PHOTOIDW" :"FOTO",
        "STEPS14":" Passo 1 - 4",
        "STEPS23":" Passo 2 - 4",
        "STEPS34":" Passo 3 - 4",
        "STEPS44":" Passo 4 - 4",
        "IDTRANSLATEPROFIL29FILE" :" Gostaria de enviar esta imagem?", 
        "IDTRANSLATEPROFIL29FILE1" :" Regresso ",
        "IDTRANSLATEPROFIL29FILE2" :" Sim ",
        "IDTRANSLATESIGNUP19OPTIONSERROR" :" Ocorreu um erro ao solicitar a geolocalização.",
        "IDTRANSLATESIGNUP19OPTIONS" :" Lamentamos informá-lo de que não pode utilizar os nossos serviços até que a sua localização geográfica seja aceite.",
        "IDTRANSLATESIALERT1" :" Informação ",
        "IDTRANSLATESIALERT2" :" Queridos visitantes, a fim de garantir a sua segurança e combater anúncios falsos, illicolove localiza o seu país de residência.",
        "IDTRANSLATESIALERT3" :" Sim,aceito!",
        "IDTRANSLATESIALERT4" :" Recusado ",
        "CONTRACTID1":` Contrato de afiliação `,
        "CONTRACTID2":`      Entre: illicolove , a seguir denominado "o sítio de encontros",
        e: EU, a seguir denominado(a) "(o) Afiliado(a)".`,
        "CONTRACTID3":` Assunto `,
        "CONTRACTID4":` O presente contrato de afiliação tem por objetivo reger a relação entre illicolove e o Afiliado em relação ao programa de afiliação do site de encontros <a href="https://illicolove.com">illicolove.com</a>`,
        "CONTRACTID5":`1. Programa de afiliados `,
        "CONTRACTID6":` Illicolove opera um programa de afiliados on-line para promover seus serviços de namoro.`,
        "CONTRACTID7":`2. Papel do Afiliado `,
        "CONTRACTID8":` O Afiliado se compromete a promover os serviços do site de namoro usando links de afiliados exclusivos fornecidos pela illicolove, bem como outros meios promocionais aprovados pelo site.`,
        "CONTRACTID9":`3. Remuneração do Afiliado `,
        "CONTRACTID10":`3.1. O Afiliado receberá uma comissão de 100 F CFA por cada novo membro que se inscrever no site <a href="https://illicolove.com">illicolove.com</a> através do link exclusivo de afiliação do Afiliado e publica um anúncio de pesquisa de amor.`,
        "CONTRACTID11":`3.2. Além disso, o Afiliado receberá uma comissão de 10% sobre cada compra feita pelos membros indicados através do seu link de afiliado.`,
        "CONTRACTID11X":`3.3 A comissão de 100F CFA só será cobrada quando o novo membro faz uma compra de unidade superior a 100F CFA, a fim de evitar fraudes na comissão.`,
        "CONTRACTID12":`4. Pagamento da Comissão `,
        "CONTRACTID13":` A illicolove pagará a comissão do Afiliado em uma base trimestral regular, mediante solicitação por celular ou transferência bancária , à escolha do Afiliado. A taxa de reembolso é da responsabilidade do Afiliado.`,
        "CONTRACTID14":`5. Duração do contrato `,
        "CONTRACTID15":` Este Contrato de Afiliação entrará em vigor na data de sua aceitação pelo Afiliado e permanecerá em vigor até que seja rescindido por qualquer uma das partes, sujeito a aviso prévio por escrito de trinta (30) dias.`,
        "CONTRACTID16":`6. Rescisão `,
        "CONTRACTID17":` A illicolove ou o Afiliado pode rescindir este contrato a qualquer momento, fornecendo aviso prévio por escrito à outra parte. Qualquer comissão não paga será paga de acordo com os termos deste contrato.`,
        "CONTRACTID18":`7. Lei aplicável `,
        "CONTRACTID19":` Este contrato é regido pelas leis de Benin e qualquer disputa decorrente deste contrato, se não for resolvida amigavelmente, estará sujeita à jurisdição exclusiva dos tribunais de comércio de Cotonou.`,
        "ANNONCEAFFILIATEID" : `        <div class="box--list__items">
        <div class="box--list__item" style="  padding-top: 0 !important; margin-top: 0 !important;">
            <h2 class="box--list__title box--list__titlex" > Ganhe dinheiro ajudando as pessoas a encontrar o amor em illicolove!</h2>
            <p class="box--list__description">Procurando uma oportunidade lucrativa de afiliação? Junte-se ao nosso programa de afiliados exclusivo e aumente sua receita 
              ajudando os outros a encontrar sua alma gêmea. Veja como funciona : <br>
              ✅ Receba 100 F CFA por cada novo membro que se inscrever e publicar um anúncio de pesquisa de amor em nosso site através do seu link de afiliado. <br>

              ✅ Além disso, obtenha 10% de comissão por cada compra feita pelos membros que você indicou. Quanto mais eles gastam, mais você ganha!</p>
        </div>
        
        <div class="box--list__item">
            <h2 class="box--list__title box--list__titlex"> Porquê escolher o nosso programa de afiliados?</h2>
            <div class="box--list__description">
              ✅ Ganhe dinheiro assim que alguém se inscrever, e publica seu anúncio de pesquisa. <br>
              ✅ Obtenha uma comissão contínua sempre que seus afiliados fizerem uma compra em nosso site. <br>
              ✅ Alcance um público em busca de amor, um nicho emocionante e em constante crescimento. <br>
              
            </div>
        </div>
        
        <div class="box--list__item">
            <h2 class="box--list__title"> Junte-se ao nosso programa </h2>
            <div class="box--list__description">✅  Junte-se ao nosso programa de afiliados hoje e comece a ganhar dinheiro ajudando as pessoas a encontrar o amor em illicolove! 💑
              
             </div>
        </div>
        <div class="box--list__item">
          <h2 class="box--list__title"> Inscreva-se.</h2>
          <div class="box--list__ descrição "> 
            ✅ Registe-se agora e aumente os seus rendimentos: <a href="./v/login/signup.html"> inscrição </a>
              
            Para qualquer dúvida, entre em contato conosco em info@illicolove.com </div>
      </div>
    </div>`,
          "IDTRANSLATE6WX":` Idiomas <span> <i class="bi bi-globe2"></i></span> <i class="bi bi-chevron-down"></i> `,
        }

      },
      de:{
        
   translation : {
    "IDTRANSLATE1": " Startseite ",
   // "IDTRANSLATE2": "À propos",
    "IDTRANSLATE3": ` Wie funktioniert das?`,
    "IDTRANSLATE4": ` Bedingungen `,
    "IDTRANSLATE5":" Nutzungsbedingungen ",
    "IDTRANSLATE6":" Datenschutzrichtlinie ",
    "IDTRANSLATE6X":" Unser Partner-System ",
    "IDTRANSLATE7":" Kontakt ",
    "IDTRANSLATE8":" Registrieren ",
    "IDTRANSLATE9":" Einloggen ",
    "IDTRANSLATECONTACT1":" Kontakt ",
    "IDTRANSLATECONTACT2":" Kontaktieren Sie uns ",
    "IDTRANSLATECONTACT3":"Adresse",
    "IDTRANSLATECONTACT4":' Telefon ',
    "IDTRANSLATECONTACT5":"E-mail", 
    "IDTRANSLATECONTACT6":" Soziale Netzwerke ",
    "IDTRANSLATETITLE":" Persönliche Anzeige ",
    "IDTRANSLATETITLEFORM":" Formular ",
    "IDTRANSLATE1INF1":`Ihr E-Mail-Adresse wird von BAKO FAMILIA & COMPANY erfasst und verarbeitet, um Sie über neue Funktionen der Website illicolove und deren Aktualisierungen auf dem Laufenden zu halten. Gemäß dem Gesetz 2017-20 über den digitalen Code in der Republik Benin zum Schutz personenbezogener Daten können Sie sich abmelden oder Ihr Recht auf Zugriff, Widerspruch, Richtigstellung und Löschung ausüben, indem Sie eine E-Mail an info@illicolove.com senden.`,
    "IDTRANSLATE10":"illicolove,",
    "IDTRANSLATE11":`Ihre Dating-Plattform, um gegen das Alleinsein und die Einsamkeit anzukämpfen.`,
    "IDTRANSLATE12":` Wir betrachten unfreiwillige Einsamkeit als ein humanitäres Problem und verpflichten uns, eine Lösung für diejenigen anzubieten, die darunter leiden.`,
    "IDTRANSLATE13":` Kostenlos registrieren `,
    "IDTRANSLATE13KLM":` Zu Ihrem Profil gehen `,
   // "IDTRANSLATE14":`À propos de nous`,
   // "IDTRANSLATE15":`Votre plateforme de rencontres en ligne illicolove.com vous est proposée par les Établissements BAKO FAMILIA & COMPANY, une entreprise individuelle(EI) de droit béninois immatriculée au Registre du Commerce et du Crédit Mobilier RCCM RB/COT/08/A4101 ; à l’Identifiant Fiscal Unique (IFU) 3200800938610.`,

   // "IDTRANSLATE16":`Elle a pour activités, le Wedding planning (accompagnement dans l’organisation de mariage), le Tourisme-Loisirs, l’organisation de foires et Salons. Elle a été créée en Mai 2008 à Cotonou. `,
   // "IDTRANSLATE17":`Plus de détails`,
    "IDTRANSLATE18":` Unsere Ziele `,
    "IDTRANSLATE19":` Artikel 16`,
    "IDTRANSLATE20":` Unsere Zielgruppe `,

    "IDTRANSLATE17USER":` Auswahl der Region `,
    "IDTRANSLATE18USER":` Benutzerdetails `,
    "IDTRANSLATE19USER":`Profil`,

    "IDTRANSLATE21":` Die Einführung dieser Online-Dating-Plattform entspricht unseren Initiativen zur Bekämpfung von Single-Dasein und Einsamkeit. Sie verkörpert unsere Handlungen im Einklang mit der Allgemeinen Erklärung der Menschenrechte in Artikel 16, der das Recht auf Ehe für Mann und Frau festlegt und die Bedeutung der Familie betont, die von der Gesellschaft und dem Staat geschützt werden sollte.`,
   "IDTRANSLATE22":` Unsere Werte:`,
   "IDTRANSLATE23":` Die Zuverlässigkeit,`,
   "IDTRANSLATE24":` Die Höflichkeit und `,
   "IDTRANSLATE25":` Die Diskretion.`, 
   "IDTRANSLATE26":` Ab dem heiratsfähigen Alter haben Mann und Frau das Recht, zu heiraten und eine Familie zu gründen. Sie haben bei der Eheschließung, während der Ehe und bei deren Auflösung gleiche Rechte. `,
   "IDTRANSLATE27":` Die Ehe darf nur mit freier und voller Einwilligung der künftigen Eheleute geschlossen werden..`,
   "IDTRANSLATE28":` Die Familie ist die natürliche und grundlegende Einheit der Gesellschaft und hat Anspruch auf Schutz durch Gesellschaft und Staat.  

Die Einsamkeit, das Single-Dasein und die soziale Isolation stellen eine humanitäre Dringlichkeit dar, die die öffentliche Hand, Vereine und Unternehmen in diesem Bereich anspricht. Chronische und unfreiwillige Einsamkeit ist ein individuelles Drama, das diejenigen erleben, die darunter leiden, oft im Stillen. Illicolove.com wurde vor diesem Hintergrund ins Leben gerufen, mit dem Ziel, Online-Dating-Dienste anders und unkompliziert anzubieten, und mit nachgewiesener Jagd auf Fake-Profile. 
Herzlich willkommen!`,
   "IDTRANSLATE29":` Wir richten uns ausschließlich an Privatpersonen :`,
   "IDTRANSLATE30":` Junge Menschen ab 18 Jahren.`,
   "IDTRANSLATE31":` Unfreiwillige Alleinstehende im fortgeschrittenen Alter, die Verzweifelten und Enttäuschten.`,
   "IDTRANSLATE32":` Die Geschiedenen.`,
   "IDTRANSLATE33":` Die Witwen und Witwer.`,
   "IDTRANSLATE34":` Unsere Nutzer `,
   "IDTRANSLATE35":` Alle unsere Nutzer `,
   "IDTRANSLATE36":` In Afrika `,
   "IDTRANSLATE37":` In Europa `,
   "IDTRANSLATE38":` Andere Länder der Welt `,
  // "IDTRANSLATE39":`Notre équipe`,
  // "IDTRANSLATE40":`Directrice`,
  // "IDTRANSLATE41":`Relectrice, et Responsable marketing`,
  // "IDTRANSLATE42":`Développeur et SEO`,


   "IDTRANSLATEX1":` Die Verwendungsschritte `,
   "IDTRANSLATEX2":` So funktioniert illicolove.`,
   "IDTRANSLATEX3":` Anmeldung `,
   "IDTRANSLATEX4":` Bereits bei Ihrer Anmeldung bietet illicolove Ihnen drei (03) Einheiten im Wert von 295 CFA-Francs oder 0,43 Euro.
   Eine Einheit kostet 95 CFA-Francs oder 0,144 Euro.`,
   "IDTRANSLATEX5":` Anmeldung `,
   "IDTRANSLATEX6":` Ihre Anmeldung bei illicolove ermöglicht Ihnen den Zugriff auf alle Funktionen und Dienste, die registrierten Benutzern vorbehalten sind.`,
   "IDTRANSLATEX7":` Anzeige veröffentlichen `,
   "IDTRANSLATEX8":` Durch Klicken auf die Schaltfläche 'Ihre Anzeige veröffentlichen' können Sie wählen, ob Sie die Anzeige auf der Seite 'Afrika', 'Europa' oder 'Andere Länder der Welt' veröffentlichen möchten, je nach Ihrem Wohnort. Füllen Sie einfach das angezeigte Suchformular aus.`,




   "toopenPUAID":` Weiter...`,
   "openPUA":`Wir laden Sie ein, Ihre Anzeige auf der Seite Ihres geografischen Wohngebiets zu veröffentlichen. Sie können jedoch Anzeigen in anderen geografischen Gebieten anzeigen und Kontakt aufnehmen. Wenn Sie zum Beispiel in Frankreich leben, sollten Sie Ihre Anzeige auf der Seite "Europa" veröffentlichen und können Anzeigen auf den Seiten "Afrika", "Europa" und "Andere Länder der Welt" anzeigen und kontaktieren. Sobald Sie Ihr Suchformular ausgefüllt und gesendet haben, wird Ihre Anzeige innerhalb von maximal 24 Stunden angezeigt, wenn wir nach einer erneuten Prüfung und eventuellen Überprüfungen Ihr Profil für vertrauenswürdig halten. Unser Prüf- und Validierungsteam könnte Sie in privaten Nachrichten kontaktieren, um die Zuverlässigkeit Ihres Profils sicherzustellen. Zusätzliche Informationen zu Ihrer Identität, ein Anruf oder ein Videoanruf können angefordert werden. In diesem Zusammenhang kann die Validierung und Veröffentlichung Ihrer Anzeige auf illicolove länger als 24 Stunden dauern. Die Geschwindigkeit der Veröffentlichung Ihrer Anzeige hängt von Ihnen ab. Wir lehnen systematisch fantasievolle, unrealistische Anzeigen und vor allem gefälschte Profile ohne Vorankündigung ab. Wenn Sie Schwierigkeiten bei der Nutzung der Dienste von illicolove.com haben, schreiben Sie uns bitte an info@illicolove.com`,

    "IDTRANSLATEX9":` Validierung Ihres Benutzerkontos `,
    "IDTRANSLATEX10":` Füllen Sie das Formular aus und klicken Sie auf 'SENDEN'. Wir werden Ihr Formular innerhalb von 24 Stunden überprüfen und bestätigen. Sie erhalten eine Bestätigungsnachricht. Wenn weitere Überprüfungen erforderlich sind, werden wir Sie per E-Mail benachrichtigen.`,
    "IDTRANSLATEX11":` Anzeige ansehen `,
    "IDTRANSLATEX12":` Der Knopf 'Anzeigen durchsuchen' führt zu drei weiteren Knöpfen: Afrika (Anzeigen aus Afrika), Europa (Anzeigen aus Europa) und Andere Länder der Welt (Anzeigen außerhalb von Afrika und Europa). Jemanden auf illicolove zu treffen und die Liebe Ihres Lebens zu finden, kostet Sie möglicherweise nur 95 CFA-Francs oder 0,14 Euro pro Einheit. Das ist der Preis, den Sie zahlen, wenn Sie auf das Feld 'Um mich zu kontaktieren' in einem Profil klicken, das besonders Ihr Interesse weckt.`,
    "IDTRANSLATEX13":` Einheitenkauf `,
    "IDTRANSLATEX14":` Sie können Ihr Konto (Mein Plan) nach Belieben aufladen, um Ihre Suche nach Dating-Partnern in den veröffentlichten Anzeigen fortzusetzen. Ihr persönliches Debit-Credit-Konto, das Sie erhalten, sobald Sie sich anmelden, ermöglicht es Ihnen, es mit der von Ihnen gewählten Zahlungsmethode aufzuladen. Die Abrechnungswährung auf illicolove ist der CFA-Franc (XOF). 1 € = 655,957 XOF.`,
    "IDTRANSLATEX15":` Die Häufig gestellten Fragen`,
    "IDTRANSLATEX16":` Kann ich auf illicolove eine schöne Begegnung machen?`,
    "IDTRANSLATEX17":` Ja, vorausgesetzt, Sie füllen das Suchformular korrekt aus und geben wahre Informationen über sich selbst an.`,




    "IDTRANSLATEX18":`Ist Ihre Dating-Website kostenpflichtig?`,
    "IDTRANSLATEX19":` Ja, nur um die Kontaktinformationen eines Profils anzuzeigen, das Ihr Interesse besonders geweckt hat.`,
    "IDTRANSLATEX20":` Wie viel kostet es, die Kontaktinformationen eines Profils zu konsultieren, das mich interessiert?`,
    "IDTRANSLATEX21":`95 CFA-Francs oder 0,14 Euro.`,
    "IDTRANSLATEX22":` Ist Ihre Dating-Website kostenlos?`,
    "IDTRANSLATEX23":` Ja, die Anmeldung und die Veröffentlichung Ihrer Anzeige zur Partnersuche sind auf illicolove kostenlos.`,
    "IDTRANSLATEX24":` Wie veröffentliche ich eine Dating-Anzeige?`,
    "IDTRANSLATEX25":` Nach Ihrer Anmeldung auf illicolove klicken Sie auf die Schaltfläche oder das Register 'VERÖFFENTLICHE EINE ANZEIGE'. Wählen Sie auf der dann angezeigten Seite den Namen des Kontinents, der Ihrem üblichen Wohnkontinent entspricht. Füllen Sie dann das Suchformular ordnungsgemäß aus und senden Sie es ab.`,
    "IDTRANSLATEX26":` Kann ich in Afrika leben und ein Profil außerhalb von Afrika kontaktieren?`,
    "IDTRANSLATEX27":` Ja!`,
    "IDTRANSLATEX28":` Kann ich in Europa leben und ein Profil außerhalb von Europa kontaktieren?`,
    "IDTRANSLATEX29":` Ja!`,
    "IDTRANSLATEX30":` Kann ich in Europa leben und meine Suchanzeige auf den Seiten 'Afrika' und 'Andere Länder der Welt' veröffentlichen?`,
    "IDTRANSLATEX31":` Nein! Veröffentlichen Sie Ihre Suchanzeige nur auf der Seite, die Ihrem Wohngebiet entspricht.`,
    "IDTRANSLATEX32":` Kann ich Einheiten mit Mobile Money bezahlen?`,
    "IDTRANSLATEX33":` Ja!`,
    "IDTRANSLATEX34":` Was sind die Abonnementgebühren auf Ihrer Website?`,
    "IDTRANSLATEX35":` Es gibt keine Abonnementgebühren auf illicolove.`,
    "IDTRANSLATEX36":` Wie kann ich mein Debit-Credit-Konto aufladen?`,
    "IDTRANSLATEX37":` Wir bieten Ihnen ein sicheres Zahlungssystem über mehrere Zahlungsanbieter. Je nach Wunsch können Sie Ihr Konto mit einer Kreditkarte oder Mobile Money aufladen. Unter Ihrem Profil in Ihrem persönlichen Dashboard klicken Sie auf die grüne Schaltfläche 'MEIN KONTO AUFLADEN' und folgen Sie den einfachen Schritten.`,
    "IDTRANSLATEX38":` Muss ich bezahlen, um meine Suchanzeige zu veröffentlichen?`,
    "IDTRANSLATEX39":` Nein! Die Veröffentlichung einer Suchanzeige ist kostenlos.`,
    "IDTRANSLATEX40":` Muss ich bezahlen, um Anzeigen anzusehen?`,
    "IDTRANSLATEX41":` Nein! Das Ansehen von Anzeigen ist kostenlos. Die Kosten entstehen, wenn Sie die Kontaktinformationen in einer Anzeige erhalten möchten.`,
    "IDTRANSLATEX42":` Wie funktioniert das Debit-Credit-System?`,
    "IDTRANSLATEX43":` Bei Ihrer Anmeldung erhalten Sie automatisch und kostenlos drei (03) Kredit-Einheiten, mit denen Sie drei (03) Kontaktadressen in Anzeigen Ihrer Wahl anzeigen können. Jede Einheit hat einen Wert von 95 CFA-Francs oder 0,14 Euro.
   Wenn Ihre Einheiten aufgebraucht sind, können Sie je nach Bedarf und Fähigkeit weitere kaufen. Die Menge der Einheiten, die Sie kaufen können, reicht von einer Einheit bis zur gewünschten Anzahl von Einheiten.`,
    "IDTRANSLATEX44":` Haben die Einheiten, die ich kaufe, ein Verfallsdatum?`,
    "IDTRANSLATEX45":` Nein! Ihre Einheiten haben ein unbegrenztes Ablaufdatum.`,
    "IDTRANSLATEX46":` Muss ich mich abonnieren, um Ihren Dating-Service zu nutzen?`,




    "IDTRANSLATEX47":` Auf illicolove gibt es kein Abonnement, um unsere Dienstleistungen in Anspruch zu nehmen, abgesehen von dem optionalen Newsletter-Abonnement.`,
    "IDTRANSLATEX48":` Was ist die Datenschutzrichtlinie auf illicolove.com?`,
    "IDTRANSLATEX49":`Wir legen großen Wert auf die Vertraulichkeit Ihrer Informationen. Ihre persönlichen Daten sind sicher und werden ohne Ihre Zustimmung nicht an Dritte weitergegeben. Sie können unsere Datenschutzrichtlinie für weitere Details einsehen.`,
    "IDTRANSLATEX50":` Hier `,
    "IDTRANSLATEX51":` Wo finde ich die E-Mail zur Bestätigung meines Kontos?`,
    "IDTRANSLATEX52":` Es ist möglich, dass die E-Mail zur Validierung Ihres Kontos in Ihrem Spam- oder Junk-Mail-Ordner liegt. Die Sicherheitsfilter der E-Mail-Anbieter leiten manchmal Validierungs-E-Mails aus Schutzgründen in diese Ordner um. Bitte überprüfen Sie Ihren Spam- oder Junk-Mail-Ordner und stellen Sie sicher, dass Sie die E-Mail als 'Kein Spam' markieren, wenn Sie sie dort finden. Wenn Sie die Validierungsemail immer noch nicht finden können, wenden Sie sich bitte an unseren Support, um weitere Unterstützung zu erhalten.`,
    "IDTRANSLATETCU1":` Nutzungsbedingungen `,
    "IDTRANSLATETCU2":` Willkommen auf illicolove.com, einer Online-Dating-Plattform, die von BAKO FAMILIA & COMPANY angeboten wird. Durch die Nutzung unserer Website stimmen Sie den unten beschriebenen Geschäftsbedingungen zu.`,
    "IDTRANSLATETCU3":` ARTIKEL 1: Zweck `,
    "IDTRANSLATETCU4":` Diese "Allgemeinen Geschäftsbedingungen" regeln die rechtliche Rahmenbedingungen für die Nutzung der Website illicolove.com und ihrer Dienstleistungen.`,




    "IDTRANSLATETCU5":` Dieser Vertrag wird zwischen:`,
    "IDTRANSLATETCU6":` Die Institution BAKO FAMILIA & COMPANY, Eigentümer der Website, im Folgenden als 'der Herausgeber' bezeichnet, UND Jede natürliche Person, die auf die Website und ihre Dienste zugreifen möchte, im Folgenden als 'der Benutzer' bezeichnet. Die Allgemeinen Geschäftsbedingungen müssen von jedem Benutzer akzeptiert werden, und der Zugang zur Website gilt als Annahme dieser Bedingungen.
    In diesen Allgemeinen Geschäftsbedingungen wird vereinbart, dass die folgenden Ausdrücke oder Wörter, ob im Singular oder im Plural verwendet, folgende Bedeutung haben:`,
    "IDTRANSLATETCU7":`Suchanzeige: Bezeichnet eine Veröffentlichung eines Benutzers oder Besuchers der Website in Form von Text über unser Formular, gegebenenfalls begleitet von einem oder mehreren Fotos, die sein Gesicht darstellen..`,
    "IDTRANSLATETCU8":` Online-Dating-Dienste: Bezeichnet den Zugang des Benutzers zu sämtlichen Suchanzeigen, die auf der Website veröffentlicht sind, einschließlich der Profile, Hyperlinks, Texte, Bilder, Videos, Kontakte oder Adressen über die Funktion 'Click to Show'`,
    "IDTRANSLATETCU9":`"'Click to show' oder ' Klicken, um anzuzeigen ': Bezeichnet die Funktion, die es jedem Benutzer ermöglicht, die E-Mail-Adresse, die Telefonnummer oder jeden anderen Kontaktweg eines anderen Benutzers anzuzeigen, der zuvor eine Suchanzeige veröffentlicht hat und die Methode seiner Wahl zur Kontaktaufnahme angegeben hat. Diese Funktion, die so wichtige Informationen liefert, ist kostenpflichtig. Die Kosten betragen 95 CFA-Francs oder etwa 0,144 Euro pro Klick.`,
   "IDTRANSLATETCU10":` ARTIKEL 2: Rechtliche Hinweise `,




   
   "IDTRANSLATETCU11X":` "Die Einrichtung BAKO FAMILIA & COMPANY ist der Herausgeber der Dating-Website illicolove.com. Sie hat ihren Sitz in Lot 124 in Agblangandan und ist ein Einzelunternehmen nach beninischem Recht. Sie wurde am 29. Mai 2008 gegründet, ist im Handels- und Kreditregister RCCM RB/COT/08/A4101 eingetragen und hat die eindeutige Steueridentifikationsnummer (IFU) Nummer: 3200800938610. Sie wird von Gildas Ghislain GANGBAZO vertreten.`,
  "IDTRANSLATETCU11":` ARTIKEL 3: Zugang zu den Diensten `,
  "IDTRANSLATETCU12":` Der Benutzer der Website illicolove.com hat Zugang zu folgenden Diensten :`,
  "IDTRANSLATETCU13":` Erstellung eines persönlichen Kontos `,
  "IDTRANSLATETCU14":` Kostenlose Erstellung und Veröffentlichung einer Suchanzeige über unser auszufüllendes Formular `,
  "IDTRANSLATETCU15":` Anzeigen von Suchanzeigen, die von anderen Benutzern veröffentlicht wurden `,
  "IDTRANSLATETCU16":` Kostenpflichtiger Erhalt der Kontaktdaten von Profilen, die das Interesse des Benutzers wecken und in Suchanzeigen veröffentlicht sind, unbegrenzt und nach Belieben (Click to Show / Klicken, um anzuzeigen)`,
  "IDTRANSLATETCU17":` Möglichkeit, den Herausgeber zu kontaktieren, um eine Anfrage für maßgeschneiderte Dienstleistungen zu stellen `,
  "IDTRANSLATETCU18":` Jeder Internetnutzer kann von überall aus kostenlos auf die Website zugreifen. Die Kosten, die dem Benutzer für den Zugang entstehen (Internetverbindung, Computerhardware usw.), gehen nicht zu Lasten des Herausgebers. Die oben genannten Dienste sind für den Benutzer nur zugänglich, wenn er Mitglied der Website ist (d.h. er ist mit seinen Anmeldeinformationen angemeldet): 
  Die Website und ihre verschiedenen Dienste können vom Herausgeber unter anderem für Wartungsarbeiten ohne Vorankündigung oder Begründung unterbrochen oder ausgesetzt werden.`,
  "IDTRANSLATETCU19":` ARTIKEL 4: Verantwortung des Benutzers `,
  "IDTRANSLATETCU20":` Der Benutzer ist für die Risiken im Zusammenhang mit der Verwendung seiner Anmeldeinformationen und seines Passworts verantwortlich. Das Passwort des Benutzers muss geheim bleiben. Im Falle einer Offenlegung des Passworts lehnt der Herausgeber jegliche Verantwortung ab. Der Benutzer trägt die volle Verantwortung für die Verwendung der Informationen und Inhalte auf der Website illicolove.com.
  Jede Nutzung des Dienstes durch den Benutzer, die direkt oder indirekt zu Schäden führt, muss zu Gunsten der Website entschädigt werden. Die Website ermöglicht es den Benutzern, eine Suchanzeige auf der Website zu veröffentlichen, indem sie das Formular 'Anzeige veröffentlichen' ausfüllen.`,





  "IDTRANSLATETCU21":` Der Benutzer verpflichtet sich, zuverlässige Informationen bereitzustellen, aktuelle Fotos ohne Obszönitäten vorzulegen, in seinen Suchkriterien respektvolle Äußerungen gegenüber anderen und dem Gesetz zu verwenden, und akzeptiert, dass seine Anzeige vom Herausgeber moderiert oder abgelehnt wird, ohne dass dieser verpflichtet ist, dies zu begründen, nachdem der Benutzer die Bereitstellung zusätzlicher Informationen abgelehnt hat, um gefälschte Profile zu vermeiden.
  Durch die Veröffentlichung seiner Anzeige auf der Website überträgt der Benutzer dem Herausgeber das nicht-exklusive und kostenlose Recht, seine Anzeige in sozialen Netzwerken oder direkt von einem autorisierten Dritten darzustellen, zu vervielfältigen, anzupassen, zu ändern, zu verbreiten und zu verteilen, unter Wahrung seiner Anonymität oder des gewählten Datenschutzmodus. Der Herausgeber verpflichtet sich, die Anonymität aller Benutzer zu wahren, wenn die Anzeigen in sozialen Netzwerken verbreitet werden.`,
  "IDTRANSLATETCU22":` ARTIKEL 5: Verantwortung des Herausgebers `,
  "IDTRANSLATETCU23":` Jede Fehlfunktion des Servers oder des Netzwerks kann nicht die Verantwortung des Herausgebers in Anspruch nehmen. Ebenso kann die Verantwortung der Website nicht bei höherer Gewalt oder unvorhersehbaren und unüberwindbaren Handlungen Dritter geltend gemacht werden. Die Website illicolove.com verpflichtet sich, alle erforderlichen Maßnahmen zur Sicherheit und Vertraulichkeit der Daten zu ergreifen. Es wird jedoch keine vollständige Sicherheitsgarantie gegeben. Der Herausgeber behält sich das Recht vor, die Zuverlässigkeit der Profile nicht zu garantieren, obwohl die auf der Website veröffentlichten Suchanzeigen als zuverlässig und vor der Veröffentlichung im Back-Office vom Prüfungs- und Validierungsteam des Herausgebers überprüft wurden.`,



  "IDTRANSLATETCU24":` ARTIKEL 6: Geistiges Eigentum `,
  "IDTRANSLATETCU25":` BAKO FAMILIA & COMPANY ist der alleinige Eigentümer aller geistigen Eigentumsrechte in Bezug auf die Marke, die Struktur sowie den Inhalt der Website www.illicolove.com. Die Inhalte der Website www.illicolove.com sind ausschließlich für den persönlichen, privaten und nicht kollektiven Gebrauch bestimmt, frei für den kostenlosen Inhalt. Dies gilt auch für RSS-Feeds und Newsletter. Jegliche Verwendung im Rahmen einer beruflichen oder kommerziellen Nutzung oder jeglicher Handel mit diesen Inhalten gegenüber Dritten ist ohne ausdrückliche Zustimmung von BAKO FAMILIA & COMPANY untersagt.`,
  "IDTRANSLATETCU26":` ARTIKEL 7: Persönliche Daten.`,
  "IDTRANSLATETCU27":` Lesen Sie unsere Datenschutzrichtlinien, persönlichen Daten und Cookies hier. <a href=" Datenschutzrichtlinie.html"><i class="bi bi-arrow-right-circle"></i></a>`,
  "IDTRANSLATETCU29":` ARTIKEL 8: Hyperlinks `,
  "IDTRANSLATETCU30":` Die auf der Website vorhandenen Hyperlinks führen zu Websites, für die der Herausgeber BAKO FAMILIA & COMPANY keine Verantwortung trägt. Der Herausgeber hat Partnerschaften mit Dienstleistern eingerichtet und kann dem Benutzer Informationen zu anderen Websites und/oder Diensten anbieten, beispielsweise durch die Angabe von Webadressen und/oder durch das Vorhandensein von Hyperlinks zu diesen Websites. Diese Hyperlinks, die auf Websites von Dritten verweisen, wurden nicht vom Herausgeber entwickelt und gehören ihm nicht. Der Herausgeber übernimmt daher keine Verantwortung für diese Websites, deren Inhalt, Werbung, Produkte oder Dienstleistungen, die auf oder von diesen Websites aus verfügbar sind. Darüber hinaus kann der Herausgeber nicht für die von diesen Dritten gemachten Informationen, Meinungen und Empfehlungen verantwortlich gemacht werden. `,



  "IDTRANSLATETCU31":` Der Herausgeber kann nicht für tatsächliche oder behauptete Schäden oder Verluste haftbar gemacht werden, die in Verbindung mit der Nutzung oder dem Vertrauen in den Inhalt, Waren oder Dienstleistungen, die auf diesen Partnerdiensten oder externen Quellen verfügbar sind, entstehen oder entstanden sind. Die Entscheidung, diese Links zu aktivieren, liegt in der vollen Verantwortung des Benutzers. Der Herausgeber ist nicht für die Verfügbarkeit dieser Websites verantwortlich, und er kann den Inhalt, die Werbung, die Produkte und andere Informationen auf diesen Websites nicht kontrollieren oder billigen. Dritte können möglicherweise ohne ausdrückliche Genehmigung des Herausgebers eine Verknüpfung zu einer Seite der Website illicolove.com herstellen.`,
  "IDTRANSLATETCU32":` ARTIKEL 9: Besondere Warnhinweise `,
  "IDTRANSLATETCU33": ` Sowohl im wirklichen Leben als auch im Internet können Sie ehrliche Menschen genauso wie bösartige und betrügerische Personen treffen. Es liegt an uns als Einzelpersonen, bestimmte Sicherheitsmaßnahmen im wirklichen Leben und erst recht in der virtuellen Welt des Internets zu ergreifen. BAKO FAMILIA & COMPANY lädt Sie ein zu:`,
  "IDTRANSLATETCU34":` Geld niemals an eine unbekannte Person senden, die Sie auf dieser Website getroffen haben; und das unter keinen Umständen.`,
  "IDTRANSLATETCU35":` Schicken Sie niemals intime Fotos an einen Kontakt, den Sie auf dieser Website getroffen haben. `,




  "IDTRANSLATETCU36":` Seien Sie vorsichtig, wenn jemand behauptet, in der Nähe zu leben, aber im Ausland arbeitet.`,
  "IDTRANSLATETCU37":` Niemals nachgeben unter dem Vorwand einer dringenden Situation, bei der ein Angehöriger krank ist, und Ihr virtueller Gesprächspartner bittet Sie um Hilfe bei der Begleichung verschiedener Kosten. In einem solchen Fall bitten wir Sie, das Profil dieser Betrüger dem Herausgeber zu melden.`,
  "IDTRANSLATETCU38":`Une relation amoureuse naissante sur illicolove.com ne saurait être pour vous une source d’ennuis et de prise en charge financière. Faites donc preuve d’une grande méfiance lorsqu’un.e inconnu.e vous déclare son amour sans avoir pu vous rencontrer ; et même après une rencontre physique, prenez le temps  nécessaire avant d’engager toute dépense conséquente en numéraire.`,
  "IDTRANSLATETCU39":` Für das erste Treffen wählen Sie immer einen öffentlichen Ort.`,
  "IDTRANSLATETCU40":` Melden Sie immer einem Angehörigen Ihren Standort, wenn Sie sich in Begleitung einer Ihnen gerade erst frisch begegneten Person befinden.`,
  "IDTRANSLATETCU41":` Berichten Sie uns immer über den Versuch des Verkaufs von Produkten oder Dienstleistungen, falsche Profile trotz unserer Filter nach privaten Nachrichtenaustauschen, Bedrohungen und Einschüchterungen, beleidigende, homophobe, missbräuchliche und anstößige Aussagen, Nachrichten von Minderjährigen und Anfragen nach finanzieller Unterstützung oder expliziten Fotos.`,
  "IDTRANSLATETCU42":` Daher erkennt und akzeptiert der Benutzer ohne Vorbehalt, dass er für alle Handlungen verantwortlich ist, die sich aus der Lektüre einer Anzeige für die Partnersuche und im Allgemeinen aus allen auf der Website vorhandenen Informationen ergeben. Die Bereitstellung dieser Daten darf in keiner Weise als spezifischer Rat oder Entscheidungshilfe betrachtet werden. Der Benutzer ist sich vollständig der Zufälligkeit von Liebesbegegnungen bewusst, sowohl im wirklichen Leben als auch im Internet.`,

  "IDTRANSLATETCU43":` ARTIKEL 10: Löschung der Daten nach 1 Jahr Inaktivität.`,
  "IDTRANSLATETCU44":` Ein Jahr Inaktivität: Aus Sicherheitsgründen erhalten Sie nach einem Jahr ohne Anmeldung auf der Website eine E-Mail, in der Sie aufgefordert werden, sich so bald wie möglich anzumelden. Andernfalls wird Ihr Profil aus unserer Datenbank gelöscht.`,




  "IDTRANSLATETCU45":` ARTIKEL 11: Konto löschen auf Anfrage.`,
  "IDTRANSLATETCU46":` Der Benutzer hat jederzeit die Möglichkeit, sein Konto auf einfache Anfrage an den Herausgeber oder über das Kontoeinstellungsmenü gegebenenfalls zu löschen.`,
  "IDTRANSLATETCU47":` ARTIKEL 12: Kontolöschung im Falle eines Verstoßes gegen die Nutzungsbedingungen `,
  "IDTRANSLATETCU48":` Im Falle einer Verletzung einer oder mehrerer Bestimmungen der Nutzungsbedingungen oder eines anderen in diesen Allgemeinen Geschäftsbedingungen oder durch Verweis aufgenommenen Dokuments behält sich der Herausgeber das Recht vor, Ihren Zugang zu den Diensten, Ihrem Konto und allen verknüpften Websites ohne vorherige Ankündigung und nach eigenem Ermessen einzuschränken oder zu beenden.`,
  "IDTRANSLATETCU49":` Article 13: Angaben im Falle einer vom Herausgeber festgestellten Sicherheitslücke.`,
  "IDTRANSLATETCU50":` Wir verpflichten uns, alle geeigneten technischen und organisatorischen Maßnahmen zu ergreifen, um ein angemessenes Sicherheitsniveau hinsichtlich der Risiken für unbeabsichtigten, unbefugten oder illegalen Zugriff, Offenlegung, Veränderung, Verlust oder Zerstörung Ihrer personenbezogenen Daten sicherzustellen.`,
  "IDTRANSLATETCU51":` Im Falle, dass wir von einem unbefugten Zugriff auf Ihre personenbezogenen Daten Kenntnis erlangen, die auf unseren Servern oder denen unserer Dienstleister gespeichert sind, oder von einem unbefugten Zugriff, der zu den oben identifizierten Risiken führt, verpflichten wir uns:`,





  "IDTRANSLATETCU52":` Die Ursachen des Vorfalls überprüfen und Sie darüber informieren (öffentliche Meldung);`,
  "IDTRANSLATETCU53":` Die notwendigen Maßnahmen ergreifen, um die negativen Auswirkungen und Schäden im vernünftigen Rahmen zu minimieren, die aus diesem Vorfall resultieren könnten.`,
  "IDTRANSLATETCU54":` ARTIKEL 14: Haftungsbeschränkung `,
  "IDTRANSLATETCU55":` Unter keinen Umständen dürfen die oben definierten Verpflichtungen in Bezug auf die Benachrichtigung im Falle einer Sicherheitslücke als Anerkennung von Schuld oder Haftung in Bezug auf das betreffende Ereignis angesehen werden.`,
  "IDTRANSLATETCU56":` Artikel 15: Vertragsdauer `,
  "IDTRANSLATETCU57":` Die Laufzeit dieses Vertrages ist unbegrenzt. Der Vertrag tritt in Kraft, sobald der Nutzer den Dienst in Anspruch nimmt.`,
  "IDTRANSLATETCU58":` ARTIKEL 16: Anwendbares Recht und zuständiges Gericht `,
  "IDTRANSLATETCU59":` Die Sprache dieser AGB ist Französisch und hat Vorrang vor allen in andere Sprachen übersetzten Versionen. Dieser Vertrag unterliegt dem Gesetz von Benin, insbesondere dem Gesetz Nr. 2017-20 vom 20. April 2018 über das digitale Recht in der Republik Benin. Die Wahl des anwendbaren Rechts berührt nicht Ihre Rechte als Verbraucher gemäß dem anwendbaren Recht an Ihrem Wohnsitz.`,
  "IDTRANSLATETCU60":` Wenn Sie Verbraucher sind, stimmen Sie und wir der nicht ausschließlichen Zuständigkeit der Gerichte in Benin zu. Im Falle einer außergerichtlichen Streitigkeit zwischen dem Benutzer und dem Herausgeber wird das Handelsgericht von Cotonou zuständig sein, um die Streitigkeit beizulegen.`,
  "IDTRANSLATEPC1":` Datenschutzrichtlinie `,
  "IDTRANSLATEPC2":` Impressum `,




  "IDTRANSLATEPC3":` Dieses Impressum und diese Datenschutzrichtlinien informieren und klären Sie darüber auf, wie BAKO FAMILIA & COMPANY Informationen verwendet und schützt, die Sie uns zur Verfügung stellen, auch wenn Sie unsere Online-Dating-Site unter der URL www.illicolove.com verwenden.`,
  "IDTRANSLATEPC4":` Bitte beachten Sie, dass unsere Datenschutzrichtlinie jederzeit geändert und/oder ergänzt werden kann, insbesondere um sich an Änderungen in Gesetzen, Vorschriften, Rechtsprechung oder Technologie anzupassen. In einem solchen Fall wird das Aktualisierungsdatum in dieser Richtlinie angegeben. Diese Änderungen verpflichten den Benutzer ab dem Zeitpunkt ihrer Veröffentlichung. Wir empfehlen Ihnen daher, diese Informationen und die Datenschutzrichtlinie regelmäßig zu überprüfen, um mögliche Änderungen zur Kenntnis zu nehmen.`,
  "IDTRANSLATEPC5":` Meldung an die Datenschutzbehörde für personenbezogene Daten (APDP)`,
  "IDTRANSLATEPC6":` Im Einklang mit dem Gesetz Nr. 2017-20 vom 20. April 2018 über den digitalen Code in der Republik Benin (Buch 5 über den Schutz personenbezogener Daten und der Privatsphäre) wurde die Website www.illicolove.com bei der Datenschutzbehörde (APDP) unter der Nummer SA-TDP-00601 registriert.`,
  "IDTRANSLATEPC7":` BAKO FAMILIA & COMPANY sammelt in jedem Fall nur personenbezogene Informationen in Bezug auf den Benutzer für die Zwecke des Dating-Dienstes, den seine Website anbietet. Der Benutzer gibt diese Informationen in vollem Wissen um die Sachlage an, insbesondere wenn er sie selbst eingibt.`,





  "IDTRANSLATEPC8":` Gemäß den Bestimmungen des Gesetzes 2017-20 über den digitalen Code in der Republik Benin hat jeder Benutzer das Recht auf Zugang, Berichtigung und Widerspruch gegen personenbezogene Daten, die ihn betreffen, indem er sein schriftliches und unterzeichnetes Anliegen einreicht, begleitet von einer Kopie eines Ausweises mit Unterschrift des Inhabers des Ausweises, und unter Angabe der Adresse, an die die Antwort geschickt werden soll. Keine persönlichen Informationen eines Benutzers unserer Website "www.illicolove.com" werden ohne sein Wissen auf irgendeinem Medium veröffentlicht, übertragen oder an Dritte verkauft.`,
  "IDTRANSLATEPC9":` Datenschutz `,
  "IDTRANSLATEPC10":` Ihre persönlichen Daten sind vertraulich und werden auf keinen Fall an Dritte weitergegeben. Aufgrund des privaten Charakters unseres Online-Dating-Dienstes sind wir nicht berechtigt, Ihre persönlichen Daten (Namen, Kontaktdaten, Adressen usw.) an Dritte weiterzugeben, unabhängig von deren Status oder Position.`,
  "IDTRANSLATEPC11": ` Recht auf Zugang `,
  "IDTRANSLATEPC12":` Unter Beachtung der Bestimmungen des Gesetzes über den digitalen Code in der Republik Benin hat jeder Benutzer unserer Website www.illicolove.com das Recht auf Zugang, Berichtigung, Änderung und Löschung von Daten, die ihn persönlich betreffen. Dieses Recht kann vom Inhaber auf Anfrage über die folgende E-Mail-Adresse info@illicolove.com elektronisch ausgeübt werden. Die gesammelten persönlichen Informationen werden keineswegs Dritten anvertraut.`,
  "IDTRANSLATEPC13":` Recht auf Berichtigung `,






  "IDTRANSLATEPC14":` Gemäß dem Gesetz über den digitalen Code in der Republik Benin kann jeder Benutzer unserer Website www.illicolove.com die Berichtigung, Aktualisierung, Löschung, Sperrung oder Löschung der ihn betreffenden Daten beantragen, die ungenau, fehlerhaft, unvollständig, mehrdeutig oder veraltet sein können.`,
  "IDTRANSLATEPC15":` Aufbewahrungsdauer`,
  "IDTRANSLATEPC16":` Ihre persönlichen Daten werden von BAKO FAMILIA & COMPANY nur für die Dauer aufbewahrt, die Ihrem Bedarf an Dating-Services entspricht. Diese Aufbewahrungsdauer überschreitet jedoch nicht zwölf (12) Monate bei Inaktivität auf Ihrem Benutzerkonto.`,
  "IDTRANSLATEPC17":` Beschwerde bei der zuständigen Behörde `,
  "IDTRANSLATEPC18":` Wenn Sie der Ansicht sind, dass BAKO FAMILIA & COMPANY seine Verpflichtungen in Bezug auf Ihre personenbezogenen Daten, die bei Ihrem Besuch auf seiner Website www.illicolove.com erhoben wurden, nicht einhält, können Sie gemäß dem gesetzlichen Verfahren eine Beschwerde oder eine Anfrage bei der Datenschutzbehörde (APDP) einreichen.`,
  "IDTRANSLATEPC19":` Geistiges Eigentum `,
  "IDTRANSLATEPC20":` Der gesamte Inhalt dieser Website, einschließlich, aber nicht beschränkt auf Grafiken, Bilder, Texte, Videos, Animationen, Geräusche, Logos, GIFs und Icons sowie deren Gestaltung, ist ausschließliches Eigentum von BAKO FAMILIA & COMPANY, mit Ausnahme von Marken, Logos oder Inhalten, die anderen Partnerunternehmen oder Autoren gehören. Jede Vervielfältigung, Verbreitung, Änderung, Anpassung, Übertragung oder Veröffentlichung, auch in Teilen, dieser verschiedenen Elemente ist ohne ausdrückliche schriftliche Zustimmung von BAKO FAMILIA & COMPANY strengstens untersagt.`,
  "IDTRANSLATEPC21":` AGB `,
  "IDTRANSLATEPC22":` Die Website www.illicolove.com wird in französischer Sprache angeboten und bietet Übersetzungen in Englisch, Spanisch, Deutsch, Portugiesisch, Russisch, Mandarin (Chinesisch), Arabisch, Japanisch, Italienisch und Koreanisch. Für besten Nutzungskomfort empfehlen wir die Verwendung moderner und kompatibler Browser wie Chrome, Safari und Firefox.`,
  "IDTRANSLATEPC23":` Informationen und Vorschläge `,







  "IDTRANSLATEPC24":` BAKO FAMILIA & COMPANY setzt alle verfügbaren Mittel ein, um einen zuverlässigen Service für Online-Dating und eine dauerhafte Aktualisierung seiner Website www.illicolove.com sicherzustellen. Dennoch können Fehler oder Auslassungen auftreten. Daher kann uns jeder Benutzer Vorschläge oder Informationen senden an: info@illicolove.com und alle Änderungen an der Website angeben, die er für relevant hält.`,
  "IDTRANSLATEPC25":`Cookies.`,
  "IDTRANSLATEPC26":` Für technische Leistungs-, Statistik- und Anzeigezwecke kann die Website www.illicolove.com Cookies verwenden. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden und die Benutzeridentifikation nicht ermöglichen, aber Informationen über die Navigation eines Endgeräts auf einer Website speichern. Einige Teile dieser Website können ohne die Annahme von Cookies nicht funktionieren. Die so erhaltenen Daten dienen dazu, die spätere Navigation auf dieser Website zu erleichtern. Cookies dienen auch verschiedenen Maßnahmen zur Analyse der Nutzeranzahl und -häufigkeit.`,
  "IDTRANSLATEPC27":` Die Ablehnung der Installation eines Cookies kann zur Unmöglichkeit des Zugriffs auf bestimmte Funktionen führen. Jeder Benutzer dieser Website kann jedoch sein Endgerät so konfigurieren, dass die Installation von Cookies abgelehnt wird, wie unten beschrieben:`,
  "IDTRANSLATEPC28":` Nutzer von Safari: Wählen Sie Safari Einstellungen, klicken Sie auf Datenschutz und wählen Sie dann die Option "Cookies und Website-Daten". Immer blockieren: Safari erlaubt keiner Website, keinem Drittanbieter und keinem Werbetreibenden, Cookies und andere Daten auf Ihrem Mac zu speichern. Dies kann dazu führen, dass einige Websites nicht ordnungsgemäß funktionieren.`,





  "IDTRANSLATEPC29":` Nutzer von Safari: Wählen Sie Safari Einstellungen, klicken Sie auf Datenschutz und wählen Sie dann die Option "Cookies und Website-Daten". Immer blockieren: Safari erlaubt keiner Website, keinem Drittanbieter und keinem Werbetreibenden, Cookies und andere Daten auf Ihrem Mac zu speichern. Dies kann dazu führen, dass einige Websites nicht ordnungsgemäß funktionieren.`,
  "IDTRANSLATEPC30":` Google Chrome-Benutzer: Menü; Einstellungen; Erweiterte Einstellungen anzeigen (unten auf der Seite). Klicken Sie dann auf die Schaltfläche Inhaltseinstellungen und aktivieren Sie das Kontrollkästchen Cookies und Websitedaten von Drittanbietern blockieren. Klicken Sie abschließend auf OK, um Ihre Auswahl zu bestätigen.`,
  "IDTRANSLATEPC31":` Nutzer von Internet Explorer: Klicken Sie auf "Menü", dann auf "Internetoptionen", wechseln Sie zur Registerkarte "Datenschutz" und klicken Sie auf die Schaltfläche "Erweitert", um das Fenster "Erweiterte Datenschutzeinstellungen" anzuzeigen. Aktivieren Sie das Kontrollkästchen "Automatische Cookiebehandlung ignorieren" und wählen Sie dann "Cookies von Drittanbietern blockieren" in der entsprechenden Spalte aus.`,
  "IDTRANSLATEPC32":` Microsoft Edge-Benutzer: Klicken Sie auf die Registerkarte "Extras" oder "Optionen", dann auf "Internetoptionen". Wählen Sie die Registerkarte "Datenschutz" und wählen Sie "Alle Cookies blockieren`,




  "IDTRANSLATEPC33":` Gemäß den üblichen Gepflogenheiten sind einige Cookies von der vorherigen Einwilligung befreit, soweit sie für den Betrieb dieser Website unerlässlich sind. Sie dienen dazu, die elektronische Kommunikation zu erleichtern. Hierbei handelt es sich insbesondere um Sitzungsidentifikations-, Authentifizierungs- und Benutzeroberflächenanpassungs-Cookies. Diese Cookies werden von BAKO FAMILIA & COMPANY herausgegeben und verwaltet und unterliegen alle dieser Richtlinie.`,
  "IDTRANSLATEPC34":` Hyperverknüpfungen `,
  "IDTRANSLATEPC35":` Die Website "www.illicolove.com" kann Links zu anderen Websites oder anderen im Internet verfügbaren Ressourcen bereitstellen. BAKO FAMILIA & COMPANY hat keine Möglichkeit, die mit ihrer Website verknüpften Websites zu kontrollieren. Darüber hinaus übernimmt sie keine Gewähr für die Verfügbarkeit solcher Websites und externen Quellen, noch garantiert sie diese. Sie kann nicht für Schäden jeglicher Art verantwortlich gemacht werden, die sich aus dem Inhalt dieser Websites oder externen Quellen ergeben.`,




  "IDTRANSLATECONSULTE1":` Afrika `,
  "IDTRANSLATECONSULTE2":` Europa `,
  "IDTRANSLATECONSULTE3":` Andere Länder der Welt `,
  "IDTRANSLATEPROFIL1": " Gültiges Konto ",
  "IDTRANSLATEPROFIL2": " Ungültiges Konto ",
  "IDTRANSLATEPROFIL3":` Debitkonto `,
  "IDTRANSLATEPROFIL4":` Debitkonto `,
  "IDTRANSLATEPROFIL5":` Mein Plan. `,
  "IDTRANSLATEPROFIL6":` Mein Plan. `, 
  "IDTRANSLATEPROFIL7":` Meine Daten. `,
  "myNameIDX":` Ihr Konto löschen. `,
  "myBtn":` Mein Benutzerkonto aufladen `,
  "myBtn2":` Mein Benutzerkonto aufladen `,
  "IDTRANSLATEPROFIL9":` Zur Startseite gehen `,
  "IDTRANSLATEPROFIL10":` Sich abmelden `,
  "CONSULTEZLESANNONCES":` ANZEIGEN DURCHSUCHEN `,
  "IDTRANSLATEPROFIL11":` ÄNDERN SIE IHRE ANZEIGE `, 
  "IDTRANSLATEPROFIL12":` ANZEIGE VERÖFFENTLICHEN `,
 // "IDTRANSLATEPROFIL13":`Vous souhaite la Bienvenue !`,
  "exampleModalLongTitle":` Einheit entspricht 95 FCFA, das sind 0,144 Euro.`,
  "errorSms":` Bitte geben Sie eine Zahl oder eine Nummer ein.`,
  "SmspayId":` Geben Sie hier die Anzahl der Einheiten ein.`,
  "IDTRANSLATEPROFIL14":` Zurück `, 
  "payYourUnitybtn":` Bestätigen `,
  "CHOISEYOURPAIEMENT":` Wählen Sie die Zahlungsmethode aus.`,
  "exampleModalLongTitleX":` Sichern Sie Ihr Konto.`,
  "IDTRANSLATEPROFIL15":` Bitte geben Sie eine Antwort ein, die Sie niemals vergessen werden. Diese Antwort wird bei der Wiederherstellung Ihres Kontos abgefragt. Ohne diese Antwort bleibt Ihr Konto unzugänglich.`,
  "IDTRANSLATEPROFIL16":` Wählen Sie Ihre Frage aus. `,
  "IDTRANSLATEPROFIL17":` Welcher Monat ist Ihr Geburtsmonat?`,
  "IDTRANSLATEPROFIL18":` Welche ist Ihre Lieblingsfarbe?`,
  "IDTRANSLATEPROFIL19":` Wie stellen Sie sich Ihren Alltag vor?`,
  "IDTRANSLATEPROFIL20":` Was ist für Sie am wichtigsten?`,
  "IDTRANSLATEPROFIL21":` Wie lautet der Name der Person, die Sie inspiriert?`,
  "IDTRANSLATEPROFIL22":` Was ist Ihr Lieblingsland?`,
  "IDTRANSLATEPROFIL23":` Wer ist Ihr Lieblingsspieler?`,
  "IDTRANSLATEPROFIL24":` Wer ist Ihr Lieblingskünstler?`,
  "IDTRANSLATEPROFIL25":` Was ist Ihre Antwort? Nur ein Wort. Kein Leerzeichen.`,
  
  "submitFormID":` Sich anmelden `,
  "TOCLOSEMODALID":` Schließen `,   
  "IDTRANSLATEPROFIL26":` Bestätigen `, 
  "IDTRANSLATEPROFIL27":` Antwortsicherheit `,
  "payYourUnity":` Die Anzahl der Einheiten eingeben `,
  congratulationsTitle: " Herzlichen Glückwunsch!",
  accountSecureMessage: " Ihr Konto ist sicher. Danke!",       
  accountSecureMessageX: " Kein Leerzeichen. Danke!",


  "IDTRANSLATEPROFIL28":` Ihr Debitkonto ist leer. Bitte kaufen Sie Einheiten, um auf die Kontakte der Anzeigen zugreifen zu können, die Ihnen gefallen.`,
  "IDTRANSLATEPROFIL29":` Sie können derzeit keine Einheiten kaufen. Verbrauchen Sie zuerst Ihre 3 kostenlosen Einheiten. Danke.`,
  "IDTRANSLATEPROFIL30W":` Sind Sie sicher?`,
  "IDTRANSLATEPROFIL30":` Es gibt kein Zurück mehr!`,
  "IDTRANSLATEPROFIL31":` Ja, löschen Sie es!`, 
  "IDTRANSLATEPROFIL32":` Sind Sie sicher?`,
  "IDTRANSLATEPROFIL33":` Nach der Abmeldung haben Sie die Möglichkeit, sich erneut anzumelden.`,
  "IDTRANSLATEPROFIL34":` Ja, abmelden!`,
  "IDTRANSLATEPROFIL35":` Ausgeloggt `,
  "IDTRANSLATEPROFIL36":` Sie wurden abgemeldet.`,
  "IDTRANSLATEPROFIL37":` Möchten Sie unsere Startseite besuchen?`,
  "IDTRANSLATEPROFIL38":` Gelöscht !`,
  "IDTRANSLATEPROFIL38X":` Erfolg.`,
  "IDTRANSLATEPROFIL39X":` Ihr Foto wurde erfolgreich aktualisiert.`,
  "IDTRANSLATEPROFIL40X":` Fehler `,
  "IDTRANSLATEPROFIL41X":` Die Aktualisierung Ihres Fotos ist fehlgeschlagen.`,

  "IDTRANSLATEPROFIL39":` Ihr Konto wurde erfolgreich gelöscht!`,
  "IDTRANSLATEPROFIL40":` Gelöscht!`,
  "IDTRANSLATEPROFIL41":` Fehler beim Löschen des Benutzers! `,
  "IDTRANSLATEPROFIL42":` Es gibt einen FEHLER. `,
  "IDTRANSLATEPROFIL42Q":` Es gibt einen FEHLER. `,
  "IDTRANSLATEPROFIL42QX":` Es gibt einen FEHLER. `,
  "IDTRANSLATEPROFIL43":` Das Feld ist nicht korrekt ausgefüllt. !`, 
  "IDTRANSLATEPROFIL44":` Etwas ist schiefgegangen!`,
  "IDTRANSLATEPROFIL44IN":` Liebe Benutzer, diese Zahlungsmethode wird in Kürze verfügbar sein. Bitte nutzen Sie vorübergehend Feexpay für Ihre Transaktionen. Danke!`,
  "IDTRANSLATEPROFIL45":` Die Daten werden nicht aktualisiert!`,
  "IDTRANSLATEPROFIL46":` Sie haben keine Einheiten mehr. Bitte aufladen. Besuchen Sie Ihr Profil. Danke!`,
  "IDTRANSLATEPROFIL47":` Sind Sie sicher?`,
  "IDTRANSLATEPROFIL48":` Durch die Bearbeitung Ihrer Anzeige wird sie erneut den Administratoren zur Genehmigung vorgelegt. Dieser Prozess kann bis zu 24 Stunden dauern.`,




  "IDTRANSLATEPROFIL49":` Zurück `,
  "IDTRANSLATEPROFIL50":` Ja, ändern.`,
  "IDTRANSLATELOGIN1":` Einloggen`,
  "IDTRANSLATELOGIN2":` E-Mail `,
  "IDTRANSLATELOGIN3":` Ihre E-Mail-Adresse `,
  "IDTRANSLATELOGIN4":` Passwort `,
  "IDTRANSLATELOGIN5":` Ihr Passwort `,
  "IDTRANSLATELOGIN6":` An mich erinnern `,
  "IDTRANSLATELOGIN7":` Passwort vergessen. `,
  "IDTRANSLATELOGIN8":` Ich habe keinen Account`,
  "IDTRANSLATELOGIN9":` Kostenlos registrieren `,
  "IDTRANSLATELOGIN10":` Einloggen `,
  "IDTRANSLATELOGIN11":` Erfolg `,
  "IDTRANSLATELOGIN12":` Sie haben sich erfolgreich angemeldet!`,
  "IDTRANSLATELOGIN13":` Es tut mir leid `,
  "IDTRANSLATELOGIN14":` Passwort ungültig!`,
  "IDTRANSLATELOGIN15":` Es tut mir leid`,
  "IDTRANSLATELOGIN16":` Es existiert kein Benutzer mit dieser E-Mail!`,
  "IDTRANSLATESIGNUP1":` Registrieren `,
  "IDTRANSLATESIGNUP2":` Pseudonym `, 
  "IDTRANSLATESIGNUP3":` Pseudonym `,
  "IDTRANSLATESIGNUP4":` Vor- und Nachname `, 
  "IDTRANSLATESIGNUP5":` Vor- und Nachname `,
  "IDTRANSLATESIGNUP6":`E-mail`,
  "IDTRANSLATESIGNUP7":` Ihre E-Mail-Adresse `,
  "IDTRANSLATESIGNUP8":`Passwort`,
  "IDTRANSLATESIGNUP9":` Ihr Passwort `,
  "IDTRANSLATESIGNUP10":` Ich habe die Geschäftsbedingungen gelesen und akzeptiere sie `,
  "IDTRANSLATESIGNUP11":` Unsere Geschäftsbedingungen lesen und akzeptieren `,
  "IDTRANSLATESIGNUP12":` Ich habe bereits ein Konto`,
  "IDTRANSLATESIGNUP13":` Einloggen `,
  "IDTRANSLATESIGNUP14":` Es tut mir leid. `,




  "IDTRANSLATESIGNUP15":` Ein Konto ist bereits mit dieser E-Mail-Adresse oder dieser Telefonnummer verknüpft.`,
  "IDTRANSLATESIGNUP16":` Erfolg. `,
  "IDTRANSLATESIGNUP17":` Sie haben sich erfolgreich registriert!`,
  "IDTRANSLATESIGNUP18":` Fehler beim Senden der E-Mail-Adresse an Firebase. `, 
  "IDTRANSLATESIGNUP19":` Kein Leerzeichen setzen. Danke!`,
  "IDTRANSLATESIGNUP19PHONE":` Bitte geben Sie eine gültige Telefonnummer ein.`,
  "IDTRANSLATESIGNUP19PHONEX":` Bitte geben Sie eine gültige Telefonnummer ein.`,
  "IDTRANSLATEFORGET1":` Senden Sie die bei Ihrer Anmeldung verwendete E-Mail-Adresse.`,
  "IDTRANSLATEFORGET2":` E-Mail `,
  "IDTRANSLATEFORGET3":` Ihre E-Mail-Adresse `,
  "IDTRANSLATEFORGET4":` Senden `,
  "IDTRANSLATEFORGET5":` Bestätigen `,
  "IDTRANSLATEFORGET6":` Die passende Antwort geben!`,
  "IDTRANSLATEFORGET7":` Geben Sie Ihr neues Passwort ein!`,
  "IDTRANSLATEFORGET8":` Geben Sie Ihr neues Passwort ein!`, 
  "IDTRANSLATEFORGET9":`Super...`,
  "IDTRANSLATEFORGET10":` Passwort erfolgreich aktualisiert!`,
  "IDTRANSLATEFORGET11":` Einloggen `,
  "IDTRANSLATEFORGET12":` Alles klar `,
  "IDTRANSLATEFORGET13":` Fehler bei der Aktualisierung der E-Mail.`,
  "IDTRANSLATEFORGET14":` Das ist nicht die richtige Antwort. `,
  "IDTRANSLATEFORGET15":` Der Benutzer existiert nicht.`, 
  "IDTRANSLATEFORM1":` MEIN PROFIL. `,
  "IDTRANSLATEFORM1W":` MEIN PROFIL. `,
  "IDTRANSLATEFORM2":` MEIN PROFIL. `,
  "IDTRANSLATEFORM3":` MEIN PROFIL `,
  "IDTRANSLATEFORM4":` PROFIL, DAS ICH SUCHE `,
  "IDTRANSLATEFORM4W":` PROFIL, DAS ICH SUCHE `,
  "IDTRANSLATEFORM5":` PROFIL, DAS ICH SUCHE `,
 // "IDTRANSLATEFORM6":`VEUILLEZ REMPLIR LE FORMULAIRE CI-DESSOUS.`,
  "IDTRANSLATEFORM7":` Geben Sie genaue und sinnvolle Informationen.`,
  "IDTRANSLATEFORM8":` Mein Wohnsitzland <i class="fa fa-star required"></i>`,
  "IDTRANSLATEFORM9":` Meine Wohnstadt <i class="fa fa-star required"></i>`,
  "IDTRANSLATEFORM10":` Name oder Pseudonym <i class="fa fa-star required"></i>`,
  "IDTRANSLATEFORM11":` Mein Alter <i class="fa fa-star required"></i>`,
  "IDTRANSLATEFORM9PL":` Meine Wohnstadt `,





  "IDTRANSLATEFORM10X":` Meine Wohnstadt `,
  "IDTRANSLATEFORM11X":` Mein Alter `,
  "IDTRANSLATEFORM8X":` Mein Wohnsitzland `,
  "IDTRANSLATEFORM9X":` Mein Alter `,
  "IDTRANSLATEFORM12":` Bitte geben Sie nur Zahlen ein<i class="fa fa-star required"></i>`,
  "IDTRANSLATEFORM13":` Mein Geschlecht und/oder Geschlechtsidentität <i class="fa fa-star required"></i>`,
  "IDTRANSLATEFORM14":` Mann `,
  "IDTRANSLATEFORM15":` Frau `,
  "IDTRANSLATEFORM16":` Transgender `,
  "IDTRANSLATEFORM17":` Geschlechtsfluid`,
  "IDTRANSLATEFORM18":` Zwischengeschlechtlich. `,
  "IDTRANSLATEFORM19":` Geschlechtsneutral. `,
  "IDTRANSLATEFORM20":` Aromantisch `,
  "IDTRANSLATEFORM21":` Asexuell `,
  "IDTRANSLATEFORM22":` Bisexuell `,
  "IDTRANSLATEFORM23":` Cisgeschlechtlich `,
  "IDTRANSLATEFORM24":` Cisnormativität `,
  "IDTRANSLATEFORM25":` Demiromantisch `,
  "IDTRANSLATEFORM26":` Demisexuell `,
  "IDTRANSLATEFORM27":` Heteroromantik `,
  "IDTRANSLATEFORM28":` er_sie (Iel)`,
  "IDTRANSLATEFORM29":` Fehlgender `,
  "IDTRANSLATEFORM30":` Geschlechtsneutral `,
  "IDTRANSLATEFORM31":` Omnisexuell `,
  "IDTRANSLATEFORM32":` Polyamourös `,
  "IDTRANSLATEFORM33":`Queer`,
  "IDTRANSLATEFORM34":` Transidentität `,
  "IDTRANSLATEFORM35":` Geschlechtsangleichung `,
 // "IDTRANSLATEFORM36":`VEUILLEZ REMPLIR LE FORMULAIRE CI-DESSOUS.`,
  "IDTRANSLATEFORM37":`Donnez des informations précises et judicieuses.`,
  "IDTRANSLATEFORM38":` Mein Familienstand <i class="fa fa-star required"></i>`,
  "IDTRANSLATEFORM39":` Ledig `,
  "IDTRANSLATEFORM40":` In einer Beziehung `,
  "IDTRANSLATEFORM41":` Geschieden`,
  "IDTRANSLATEFORM42":` Witwer/Witwe`,
  "IDTRANSLATEFORM43":` Meine Staatsangehörigkeit <i class="fa fa-star required"></i>`,
  "IDTRANSLATEFORM44":` Telefon <i class="fa fa-star required"></i>`,
  "IDTRANSLATEFORM45":` Geben Sie nur Ihre Nummer ohne Ländervorwahl ein. <i class="fa fa-star required"></i>`,
  "IDTRANSLATEFORM46":` Meine Berufstätigkeit. <i class="fa fa-star required"></i>`,
  "IDTRANSLATEFORM47":` Mein Beruf `,
 // "IDTRANSLATEFORM48":`VEUILLEZ REMPLIR LE FORMULAIRE CI-DESSOUS.`,
  "IDTRANSLATEFORM49":` Geben Sie genaue und sinnvolle Informationen.`,
  "IDTRANSLATEFORM50":` Ich möchte ein Treffen <i class="fa fa-star required"></i>`,
  "IDTRANSLATEFORM51":` Freundschaftlich, ein Gesellschaft gegen die Einsamkeit `,
  "IDTRANSLATEFORM52":` Langfristig `,
  "IDTRANSLATEFORM53":` Eine Beziehung mit Heiratsabsicht. `,
  "IDTRANSLATEFORM54":` Ausweisdokument `,
  "IDTRANSLATEFORM55":` Foto 1 <i class="fa fa-star required"></i>`,
  "IDTRANSLATEFORM56":` Foto 2 <i class="fa fa-star required"></i>`,
 // "IDTRANSLATEFORM57":`VEUILLEZ REMPLIR LE FORMULAIRE CI-DESSOUS.`,
  "IDTRANSLATEFORM58":` Geben Sie genaue und sinnvolle Informationen. `,
  "IDTRANSLATEFORM59":` Sein Geschlecht, einschließlich LGBT+ <i class="fa fa-star required"></i>`,
  "IDTRANSLATEFORM60":` Mann `,
  "IDTRANSLATEFORM61":` Frau `,
  "IDTRANSLATEFORM62":` Transident `,
  "IDTRANSLATEFORM63":` Genderfluid `,
  "IDTRANSLATEFORM64":` Intersexuell `,
  "IDTRANSLATEFORM65":` Agender `,
  "IDTRANSLATEFORM66":` Aromantisch `,
  "IDTRANSLATEFORM67":` Asexuell `,
  "IDTRANSLATEFORM68":` Bisexuell `,




  "IDTRANSLATEFORM69":` Cisgeschlechtlich `,
  "IDTRANSLATEFORM70":` Cisnormativität `,
  "IDTRANSLATEFORM71":` Demiromantisch `,
  "IDTRANSLATEFORM72":` Demisexuell `,
  "IDTRANSLATEFORM73":` Heteroromantik `,
  "IDTRANSLATEFORM74":` sie_er (Iel)`,
  "IDTRANSLATEFORM75":` Fehlgender `,
  "IDTRANSLATEFORM76":` Nicht-binär `,
  "IDTRANSLATEFORM77":` Pansexuell `,
  "IDTRANSLATEFORM78":` Polyamor `,
  "IDTRANSLATEFORM79":`Queer`,
  "IDTRANSLATEFORM80":` Transgender `,
  "IDTRANSLATEFORM81":` Geschlechtsangleichung `,
  "IDTRANSLATEFORM82":` Seine Altersgruppe <i class="fa fa-star required"></i>`,
  "IDTRANSLATEFORM83":` Sein Familienstand <i class="fa fa-star required"></i>`,
  "IDTRANSLATEFORM84":` Ledig `,
  "IDTRANSLATEFORM85":` In einer Beziehung `,
  "IDTRANSLATEFORM86":` Geschieden `,
  "IDTRANSLATEFORM87":` Witwer/Witwe `,
  "IDTRANSLATEFORM88":` Sein Wohnsitzland <i class="fa fa-star required" ></i>`,
  "IDTRANSLATEFORM89":` Sie können mehrere Länder auswählen.. <i class="fa fa-star required"></i>`,
  "IDTRANSLATEFORM90":` Sein Land `,
  "IDTRANSLATEFORM91":` Sein Wohnsitzland `,
//  "IDTRANSLATEFORM92":`VEUILLEZ REMPLIR LE FORMULAIRE CI-DESSOUS.`,
  "IDTRANSLATEFORM93":` Geben Sie genaue und sinnvolle Informationen. `,
  "IDTRANSLATEFORM94":` Beschreiben Sie das gewünschte äußere Erscheinungsbild.`,
  "IDTRANSLATEFORM95":` Seine aktuelle Stadt. <i class="fa fa-star required"></i>`,
  "IDTRANSLATEFORM96":` Seine Stadt `,
  "IDTRANSLATEFORM97":` Seine Arbeit <i class="fa fa-star required"></i>`,
  "IDTRANSLATEFORM98":` Berufe `,
  "IDTRANSLATEFORM99":` Zusätzliche Informationen..`,
  "IDTRANSLATEFORM100":` Zusätzliche Informationen. `,
  "IDTRANSLATEFORM10w":` Körperliche Merkmale `,
  "IDTRANSLATEFORM101":` Weiter `,
  "IDTRANSLATEFORM102":` Vorherige `,
  "IDTRANSLATEFORM103":` Senden `,




  "IDTRANSLATEFORM104":`<p > Die im vorliegenden Formular erfassten personenbezogenen Daten durch <strong style="color: #000080;">BAKO FAMILIA & COMPANY</strong> Werden ausschließlich verarbeitet, um einen reibungslosen Ablauf des von Ihnen angeforderten Dienstes für Liebesbegegnungen zu gewährleisten. Die erfassten personenbezogenen Daten werden ohne Ihre Zustimmung an niemanden weitergegeben.
  In Anwendung der Bestimmungen des Gesetzes 2017-20 über den digitalen Code in der Republik Benin zum Schutz personenbezogener Daten wurde die Verarbeitung der erhobenen Daten bei der APDP angemeldet..</em> </p>
  <hr>
  <p class="mb-0"> Gemäß dem genannten Gesetz können Sie Ihre Rechte auf Zugang, Widerspruch, Berichtigung und Löschung bei <strong style="color: #000080;">BAKO FAMILIA & COMPANY</strong>.
  </em></p>`,
  "IDTRANSLATEFORM105":` "Ihr Bild ist zu klein. Bitte wählen Sie ein Bild mit mindestens 300x300 Pixeln aus.`,
  "IDTRANSLATEFORM106":` Ein Fehler ist bei der Anfrage an die REST Countries API aufgetreten. `,
  "IDTRANSLATEFORM107":` Geben Sie einfach die Nummer ohne das Präfix ein. `,
  "IDTRANSLATEFORM108":` Bitte wählen Sie das Land aus.`,
  "IDTRANSLATEFORM109":` Erfolg `,
  "IDTRANSLATEFORM110":` Ihr Formular wird zur Überprüfung und Validierung innerhalb von 24 Stunden eingereicht. <i class="fa fa-heart"></i>.`,
  "IDTRANSLATEFORM111":` Es tut mir leid `,
  "IDTRANSLATEFORM112":` Nicht alle Ihre Felder sind ausgefüllt..`,
  "IDTRANSLATEUSERD1":` Kontaktieren Sie mich.  <svg xmlns="http://www.w3.org/2000/svg" width="10.444" height="9.7"><defs><clipPath id="a"><path fill="none" d="M0 0h10.444v9.7H0z"/></clipPath></defs><g fill="none" stroke="#2a46cc" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.438" clip-path="url(#a)"><path d="M.719 4.85h8.709M5.594 8.683L9.427 4.85M5.594 1.017L9.427 4.85"/></g></svg>`,





  "IDTRANSLATEUSERD2":` Um mich zu kontaktieren. `,
  "IDTRANSLATEUSERD3":`<i class="bi bi-alexa" style="font-size: 3vh !important;"></i> Mein Profil `,
  "IDTRANSLATEUSERD4":` Antworten `,
  "IDTRANSLATEUSERD5":` Meine Wohnstadt :`,
  "IDTRANSLATEUSERD6":` Mein Name oder Pseudonym:`,
  "IDTRANSLATEUSERD7":` Meine Altersgruppe :`,
  "IDTRANSLATEUSERD8":` Mein Geschlecht:`,
  "IDTRANSLATEUSERD9":` Mein Familienstand:`,
  "IDTRANSLATEUSERD10":` Meine Staatsangehörigkeit :`,
  "IDTRANSLATEUSERD11":` Mein Beruf:`,
  "IDTRANSLATEUSERD12":` Ich möchte ein Treffen :`,
  "IDTRANSLATEUSERD13":` Meine körperlichen Vorlieben :`,
  "IDTRANSLATEUSERD14":` Weitere Angaben :`,
  "IDTRANSLATEUSERD15":`<i class="bi bi-alexa" style="font-size: 3vh !important;"></i> Profil, das ich suche `,
  "IDTRANSLATEUSERD16":` Antworten `,
  "IDTRANSLATEUSERD17":` Ihr Geschlecht :`,
  "IDTRANSLATEUSERD18":` Seine Altersgruppe :`,
  "IDTRANSLATEUSERD19":` Seine eheliche Situation :`,
  "IDTRANSLATEUSERD20":` Das Land des Wohnsitzes :`,
  "IDTRANSLATEUSERD21":` Seine Stadt der Wohnung :`,
  "IDTRANSLATEUSERD22":` Seine Arbeit oder Beschäftigung :`,
  "TIDTRANSLATEUSERD23":` online den `,

  "IDTRANSLATEUSERD24":`<i class="fas fa-database" style="font-size: 5vh !important; color: #FFB6C1;"></i> keine Daten.`,
  "IDTRANSLATEUSERD25":` keine Daten.`,
  "IDTRANSLATEUSERD26":` Es gibt einen FEHLER.`,
  "IDTRANSLATEUSERD27":` Ihr Konto wird belastet `,
  "IDTRANSLATEUSERD28":` Ihre Daten werden nicht aktualisiert.`,
  "IDTRANSLATEUSERD29":` Sie können andere Benutzer erst kontaktieren, nachdem Sie Ihr Suchformular veröffentlicht haben.`,
  "IDTRANSLATEUSERD30":` Möchten Sie Ihre Anzeige veröffentlichen?`,
  "IDTRANSLATEUSERD31":` Ihre Einheiten sind erschöpft. Sie können keine anderen Benutzer mehr kontaktieren’.`,
  "IDTRANSLATEUSERD32":` Möchten Sie Einheiten kaufen?`,
  "IDTRANSLATEUSERD33":` Okay `,
  "IDTRANSLATEUSERD34":` Besuchen Sie ihr Profil!`,
  "IDTRANSLATEUSERD35":`<i class="bi bi-eye" style="color: white;"></i> Klicken, um anzuzeigen.`,
  "texteIDTRANSLATEUSERD24YX": " online ",
  "myNameIDwallet":" Ziehen Sie Ihre Provisionen zurück.",
  "MYEWALLETID":`<i class="fa fa-align-left"></i> mein Portemonnaie `,
  "MYEWALLETID1":" Gesamtsaldo ", 
  "comeBackId":" Zurück ",
  "idTogetwallet":" Ihre Gewinne abheben ",
  "HISTORYISMY":" Historisch ",
  "IDTRANSLATEWALLETU":" Wird gerade ",
  "IDTRANSLATEWALLETX":" Bezahlt ",
  "IDTRANSLATEWALLET":" Entschuldigung!",
  "IDTRANSLATEWALLETM":" Ihre Übertragung ist fehlgeschlagen. Bitte versuchen Sie es später erneut.", 
  "IDTRANSLATEWALLET1":" Herzlichen Glückwunsch -",
  "IDTRANSLATEWALLET2":" Ihr Transfer wurde erfolgreich abgeschlossen!",
  "TITLEWALLETID": " E-Wallet ",
  "IDTRANSLATEFOEMXX": " Bitte geben Sie nur Buchstaben ein, Zahlen sind in diesem Feld nicht zulässig.",
  "linkInput": " Kopieren Sie hier Ihren Affiliate-Link ",
  "TERMINATOR" :" ABSCHLIEßEN ",
  "PHOTOID" :" FOTO ",
  "TERMINATORW" :" ES IST VORBEI ",
  "PHOTOIDW" :" FOTO ",
  "STEPS14":" Schritt 1 - 4",
  "STEPS23":" Schritt 2 - 4",
  "STEPS34":" Schritt 3 - 4",
  "STEPS44":" Schritt 4 - 4",
  "IDTRANSLATEPROFIL29FILE" :" Möchten Sie dieses Bild senden?", 
  "IDTRANSLATEPROFIL29FILE1" :" Zurück ",
  "IDTRANSLATEPROFIL29FILE2" :" ja ",
  "IDTRANSLATESIGNUP19OPTIONSERROR" :" Bei der Anfrage nach Geolokalisierung ist ein Fehler aufgetreten.",
  "IDTRANSLATESIGNUP19OPTIONS" :" Wir bedauern, Ihnen mitteilen zu müssen, dass Sie unsere Dienste nicht nutzen können, bis Ihr Standort akzeptiert wird.",
  "IDTRANSLATESIALERT1" :"information",
  "IDTRANSLATESIALERT2" :"Chers visiteurs, dans le but d'assurer votre sécurité et de lutter contre les fausses annonces, illicolove localise votre pays de résidence.",
  "IDTRANSLATESIALERT3" :" Ja, ich nehme an!",
  "IDTRANSLATESIALERT4" :" Abgelehnt ",
  "CONTRACTID1":` Partnervertrag `,
  "CONTRACTID2":`      Zwischen: illicolove , nachstehend "Dating-Site" genannt,
  und: ICH, im Folgenden "der Affiliate(e)".`,
  "CONTRACTID3":` Gegenstand `,
  "CONTRACTID4":` Dieser Partnervertrag dient der Regelung der Beziehung zwischen Illicolove und dem Partner im Zusammenhang mit dem Partnerprogramm der Dating-Website <a href="https://illicolove.com">illicolove.com</a>`,
  "CONTRACTID5":`1. Affiliate-Programm `,
  "CONTRACTID6":` Illicolove betreibt ein Online-Partnerprogramm, um seine Dating-Dienste zu bewerben.`,
  "CONTRACTID7":`2. Die Rolle des Mitglieds `,
  "CONTRACTID8":` Der Affiliate verpflichtet sich, die Dienste der Dating-Website über einzigartige Affiliate-Links von illicolove sowie über andere von der Website genehmigte Werbemittel zu bewerben.`,
  "CONTRACTID9":`3. Die Vergütung des Mitglieds `,
  "CONTRACTID10":`3.1. Der Affiliate erhält eine Provision von 100 CFA F für jedes neue Mitglied, das sich auf der Website registriert <a href="https://illicolove.com">illicolove.com</a> über den einzigartigen Affiliate-Link des Affiliates und veröffentlicht eine Liebessuchanzeige.`,
  "CONTRACTID11":`3.2. Darüber hinaus erhält der Affiliate eine Provision von 10% auf jeden Kauf, den Mitglieder über seinen Affiliate-Link tätigen.`,
  "CONTRACTID11X":`3.3 Die Provision von 100F CFA wird nur erhoben, wenn das neue Mitglied einen Einheitenkauf über 100F CFA tätigt, um Kommissionsbetrug zu vermeiden.`,
  "CONTRACTID12":`4. Zahlung durch die Kommission `,
  "CONTRACTID13":` Illicolove zahlt die Provision des Affiliates regelmäßig vierteljährlich auf Anfrage per Mobile Money oder Banküberweisung nach Wahl des Affiliates. Die Kosten für die Rückerstattung trägt der Affiliate.`,
  "CONTRACTID14":`5. Vertragslaufzeit `,
  "CONTRACTID15":` Dieser Mitgliedschaftsvertrag tritt am Tag seiner Annahme durch den Partner in Kraft und bleibt bis zur Kündigung durch eine der Parteien mit einer schriftlichen Frist von dreißig (30) Tagen in Kraft.`,
  "CONTRACTID16":`6. Kündigung `,
  "CONTRACTID17":` Illicolove oder das Mitglied kann diesen Vertrag jederzeit durch schriftliche Mitteilung an die andere Partei kündigen. Alle nicht gezahlten Provisionen werden gemäß den Bedingungen dieses Vertrags bezahlt.`,
  "CONTRACTID18":`7. Geltendem Recht `,
  "CONTRACTID19":` Dieser Vertrag unterliegt den beninischen Gesetzen und alle Streitigkeiten, die sich aus diesem Vertrag ergeben, unterliegen, wenn sie nicht gütlich beigelegt werden, der ausschließlichen Zuständigkeit der Handelsgerichte von Cotonou.`,
  "ANNONCEAFFILIATEID" : `        <div class="box--list__items">
  <div class="box--list__item" style="  padding-top: 0 !important; margin-top: 0 !important;">
      <h2 class="box--list__title box--list__titlex" > Verdienen Sie Geld, indem Sie Menschen helfen, Liebe auf Illicolove zu finden!</h2>
      <p class="box--list__description"> Sind Sie auf der Suche nach einer lukrativen Affiliate-Möglichkeit? Treten Sie unserem einzigartigen Affiliate-Programm bei und steigern Sie Ihr Einkommen 
        Anderen helfen, ihren Seelenverwandten zu finden. So funktioniert es: <br>
        ✅ Erhalten Sie 100 CFA für jedes neue Mitglied, das sich registriert und eine Liebessuchanzeige auf unserer Website über Ihren Affiliate-Link veröffentlicht. <br>

        ✅ Zusätzlich erhalten Sie 10% Provision auf jeden Einkauf, den Ihre Mitglieder getätigt haben. Je mehr sie ausgeben, desto mehr verdienen Sie!</p>
  </div>
  
  <div class="box--list__item">
      <h2 class="box--list__title box--list__titlex"> Warum unser Partnerprogramm wählen?</h2>
      <div class="box--list__description">
        ✅ Verdienen Sie Geld, sobald sich jemand registriert und seine Suchanzeige veröffentlicht. <br>
        ✅ Erhalten Sie eine kontinuierliche Provision, wenn Ihre Affiliates einen Kauf auf unserer Website tätigen. <br>
        ✅ Richten Sie sich an ein Publikum, das nach Liebe sucht, eine aufregende und ständig wachsende Nische. <br>
        
      </div>
  </div>
  
  <div class="box--list__item">
      <h2 class="box--list__title"> Nehmen Sie an unserem Programm </h2>
      <div class="box--list__description">✅  Nehmen Sie noch heute an unserem Partnerprogramm teil und verdienen Sie Geld, indem Sie Menschen helfen, Liebe auf illicolove zu finden! 💑
        
       </div>
  </div>
  <div class="box--list__item">
    <h2 class="box--list__title"> Registrieren.</h2>
    <div class="box--list__description"> 
      ✅ Jetzt anmelden und Einkommen steigern: <a href="./v/login/signup.html">inscription</a>
        
      Bei Fragen kontaktieren Sie uns unter info@illicolove.com </div>
</div>
</div>`,
    "IDTRANSLATE6WX":` Sprachen <span> <i class="bi bi-globe2"></i></span> <i class="bi bi-chevron-down"></i> `,
  }

      },
      ar:{
        
   translation : {
    "IDTRANSLATE1": "استقبال",

   // "IDTRANSLATE2": "À propos",

    "IDTRANSLATE3": `كيف يعمل؟`,

    "IDTRANSLATE4": `شروط`,

    "IDTRANSLATE5":"شروط الاستخدام",

    "IDTRANSLATE6":"سياسة الخصوصية",


    "IDTRANSLATE6X":"نظام الانتساب لدينا",

    "IDTRANSLATE7":"اتصال",

    "IDTRANSLATE8":"التسجيل",

    "IDTRANSLATE9":"تسجيل الدخول",

    "IDTRANSLATECONTACT1":"اتصال",

    "IDTRANSLATECONTACT2":"اتصل بنا",

    "IDTRANSLATECONTACT3":"عنوان",

    "IDTRANSLATECONTACT4":'هاتف',

    "IDTRANSLATECONTACT5":"البريد الإلكتروني",

    "IDTRANSLATECONTACT6":"الشبكات الاجتماعية",

    "IDTRANSLATETITLE":"إعلانات",

    "IDTRANSLATETITLEFORM":"استمارة",

    "IDTRANSLATE1INF1":`يتم جمع عنوان بريدك الإلكتروني ومعالجته بواسطة BAKO FAMILIA&COMPANY لإبقائك على اطلاع بالميزات الجديدة لموقع الويب 
والتحديثات illicolove.
تطبيقًا للقانون 2017-20 بشأن الكود الرقمي في جمهورية بنين، بشأن حماية البيانات الشخصية، يمكنك إلغاء الاشتراك أو ممارسة حقوقك في الوصول والاعتراض والتصحيح والحذف عن طريق إرسال بريد إلكتروني إلى 
info@illicolove.com`,

    "IDTRANSLATE10":"illicolove,",

    "IDTRANSLATE11":`منصة المواعدة الخاصة بك، لمحاربة العزوبة والوحدة.`,

    "IDTRANSLATE12":`إننا نرى الوحدة اللاإرادية مشكلة إنسانية ونلتزم بتوفير حل لمن يعانون منها.`,

    "IDTRANSLATE13":`التسجيل مجانا`,

    "IDTRANSLATE13KLM":`اذهب إلى ملفك الشخصي`,

   // "IDTRANSLATE14":`À propos de nous`,
   // "IDTRANSLATE15":`Votre plateforme de rencontres en ligne illicolove.com vous est 

    "IDTRANSLATE18":`أهدافنا`,

    "IDTRANSLATE19":`المادة 16`,

    "IDTRANSLATE20":`هدفنا`,

    "IDTRANSLATE17USER":`اختيار المنطقة`,

    "IDTRANSLATE18USER":`تفاصيل المستخدم`,

    "IDTRANSLATE19USER":`ملف تعريف`,

    "IDTRANSLATE21":`يستجيب تنفيذ منصة المواعدة عبر الإنترنت هذه لمبادراتنا لمحاربة العزوبة والوحدة.
وهو يجسد عملنا على النحو الذي حدده الإعلان العالمي لحقوق الإنسان في المادة 16، التي تذكر بحق المرأة والرجل في الزواج، وأهمية الأسرة التي يجب أن يحميها المجتمع والدولة.`,

   "IDTRANSLATE22":`قيمنا`,

   "IDTRANSLATE23":`موثوقيه`,

   "IDTRANSLATE24":`المجاملة و`,

   "IDTRANSLATE25":`التكتم.`,

   "IDTRANSLATE26":` ويحق للرجل والمرأة، منذ سن الزواج، دون أي قيود على العرق أو الجنسية أو الدين، الزواج وتأسيس أسرة. ولهما حقوق متساوية فيما يتعلق بالزواج وأثناء الزواج وعند 
فسخه.`,

   "IDTRANSLATE27":` لا يمكن عقد الزواج إلا بالموافقة الحرة والكاملة من الزوجين المقبلين`,

   "IDTRANSLATE28":` الأسرة هي العنصر الطبيعي والأساسي في المجتمع ولها الحق في حماية المجتمع والدولة. الوحدة والعزوبة والعزلة الاجتماعية تشكل ضرورة إنسانية تستدعي تدخل السلطات 
العامة والجمعيات والشركات في هذا المجال. الوحدة الزمنية والغير طوعية تشكل مأساة فردية تعيشها أولئك الذين يعانون منها معظم الوقت بصمت. رأى موقع illicolove.com النور في هذا السياق، برغبة في تقديم خدمات للمواعدة 
عبر الإنترنت بشكل مختلف وبسيط؛ مع التركيز على مكافحة الحسابات الوهمية. مرحبًا!`,

   "IDTRANSLATE29":`نحن نستهدف الأفراد فقط `,

   "IDTRANSLATE30":`الشباب الذين تبلغ أعمارهم 18 سنة فأكثر`,

   "IDTRANSLATE31":`العزاب المسنون اللاإراديون، اليائسون وخيبة الأمل`,

   "IDTRANSLATE32":`المطلقين`,

   "IDTRANSLATE33":`الأرامل`,

   "IDTRANSLATE34":`مستخدم`,

   "IDTRANSLATE35":`جميع مستخدمينا`,

   "IDTRANSLATE36":`في أفريقيا`,

   "IDTRANSLATE37":`في أوروبا`,

   "IDTRANSLATE38":`البلدان الأخرى في العالم`,

  // "IDTRANSLATE39":`Notre équipe`,
  // "IDTRANSLATE40":`Directrice`,
  // "IDTRANSLATE41":`Relectrice, et Responsable marketing`,
  // "IDTRANSLATE42":`Développeur et SEO`,


   "IDTRANSLATEX1":`مراحل الاستخدام`,

   "IDTRANSLATEX2":`إليك كيفية عمل illicolove`,

   "IDTRANSLATEX3":`تسجيل`,

   "IDTRANSLATEX4":`بمجرد تسجيلك، يقدم لك موقع illicolove ثلاث (03) وحدات بقيمة 295 فرنك CFA، وهو ما يعادل 1.78 ريال. تكلفة وحدة واحدة هي 95 فرنك 
CFA، أي ما يعادل 0.57 ريال.
`,

   "IDTRANSLATEX5":`اتصال`,

   "IDTRANSLATEX6":`يتيح لك اتصالك على illicolove الوصول إلى جميع الميزات والخدمات المخصصة للمستخدمين المسجلين.`,

   "IDTRANSLATEX7":`نشر إعلان`,

   "IDTRANSLATEX8":`من خلال النقر على زر «انشر إعلانك»، يمكنك اختيار النشر إما على صفحة «إفريقيا» أو على صفحة «أوروبا» ؛ أو في صفحة «بلدان العالم الأخرى» ؛ حسب 
مكان إقامتك ما عليك سوى ملء نموذج البحث الذي سيظهر.`,




   "toopenPUAID":`أكثر...`,

   "openPUA":`ندعوك لنشر إعلانك على صفحة المنطقة الخاصة بك
الموقع الجغرافي للإقامة، ومع ذلك، يمكنك عرض أي ملف تعريف لإعلان بحث خارج منطقتك الجغرافية المعتادة والاتصال به. على سبيل المثال، إذا كنت تعيش في فرنسا، فيجب عليك نشر إعلانك على صفحة «أوروبا» ويمكنك التشاور والاتصال 
بالإعلانات في صفحات «إفريقيا» و «أوروبا» و «دول العالم الأخرى»
عند الانتهاء من ملء وإرسال نموذج البحث الخاص بك، سيظهر إعلانك في غضون 24 ساعة على الأكثر، إذا اعتبرنا ملفك الشخصي موثوقًا به بعد التدقيق والتحقق المحتمل. من الممكن أن يكتب إليك فريق القراءة والتحقق الخاص بنا على انفراد لطمأنة 
نفسه بشأن موثوقية ملفك الشخصي. قد يُطلب منك تفاصيل حول هويتك أو مكالمة صوتية أو فيديو. مع وضع ذلك في الاعتبار التحقق من صحة ومظهر إعلانك على illicolove
قد تتجاوز 24 ساعة. سيعتمد عليك توقيت نشر إعلانك. نحن نستبعد بشكل منهجي أي إعلان خيالي وغير واقعي وخاصة الملفات الشخصية المزيفة، دون سابق إنذار. إذا واجهت أي صعوبة في الاستمتاع بخدمات
illicolove.com، يرجى الاتصال بنا على info@illicolove.com`,

    "IDTRANSLATEX9":`التحقق من صحة حساب المستخدم الخاص بك`,

    "IDTRANSLATEX10":`املأ النموذج وانقر على «إرسال». نحن
سوف تتحقق من صحة النموذج الخاص بك في غضون 24 ساعة. سوف تتلقى رسالة تأكيد.
إذا كانت هناك حاجة إلى فحوصات إضافية، فسنقوم بإخطارك عبر البريد الإلكتروني.`,

    "IDTRANSLATEX11":`شاهد إعلانًا`,

    "IDTRANSLATEX12":`زر "استعرض الإعلانات" يؤدي إلى ثلاثة أزرار أخرى: أفريقيا (إعلانات من أفريقيا)، أوروبا (إعلانات من أوروبا)، وباقي دول العالم (إعلانات خارج أفريقيا وأوروبا). قد 
يكلفك لقاء رجل أو امرأة على illicolove فقط 95 فرنك CFA، أي ما يعادل 0.57 ريال. هذا هو ما يكلفك كل وحدة عندما تنقر على خانة "للتواصل معي" في ملف شخصي يلفت انتباهك بشكل خاص.`,

    "IDTRANSLATEX13":`شراء وحدات`,

    "IDTRANSLATEX14":`يمكنك شحن حسابك (خطتي) حسب رغبتك، لمتابعة بحثك عن اللقاءات فيما بين الإعلانات المنشورة. الحساب الشخصي الخاص بك يمنح لك القدرة على إعادة شحنه باستخدام 
وسيلة الدفع التي تختارها منذ تسجيلك. عملة الفوترة على illicolove هي الفرنك الإفريقي (XOF). 1 ريال = 165.55 XOF.`,

    "IDTRANSLATEX15":`أسئلة متكررة.`,

    "IDTRANSLATEX16":` هل يمكنني عقد اجتماع لطيف حول illicolove ؟`,

    "IDTRANSLATEX17":` نعم، طالما أنك تملأ نموذج البحث وتقدم معلومات حقيقية عن نفسك.`,




    "IDTRANSLATEX18":`هل موقع المواعدة الخاص بكم مدفوع؟" `,

    "IDTRANSLATEX19":` نعم، مدفوع فقط لرؤية معلومات الاتصال في ملف شخصي الذي قد لفت اهتمامك بشكل خاص`,

    "IDTRANSLATEX20":`كم يكلف الرجوع إلى عنوان الاتصال لملف تعريف يجذبني ويثير اهتمامي ؟`,

    "IDTRANSLATEX21":`95 فرنك أفريقي أو 0.57 ريال.`,

    "IDTRANSLATEX22":` هل موقع المواعدة مجاني ؟`,

    "IDTRANSLATEX23":`نعم، تسجيل ونشر إعلان بحث الحب الخاص بك مجاني على illicolove.`,

    "IDTRANSLATEX24":` كيف يمكنني نشر إعلان الاجتماع ؟`,

    "IDTRANSLATEX25":`بعد التسجيل على illicolove، انقر فوق الزر أو علامة التبويب "انشر AN Ad'. ثم على الصفحة التي ستظهر، اختر اسم القارة التي تتوافق مع 
قارة إقامتك المعتادة. أخيرًا املأ نموذج البحث الذي سيتم عرضه وإرساله.`,

    "IDTRANSLATEX26":` هل يمكنني العيش في إفريقيا والاتصال بشخص يعيش خارج إفريقيا ؟`,

    "IDTRANSLATEX27":`أأجل!`,

    "IDTRANSLATEX28":`هل يمكنني العيش في أوروبا والاتصال بشخص يعيش خارج أوروبا ؟`,

    "IDTRANSLATEX29":`أأجل!`,

    "IDTRANSLATEX30":`هل يمكنني العيش في أوروبا ونشر إعلان البحث الخاص بي على صفحات إفريقيا والعالم الآخر ؟`,

    "IDTRANSLATEX31":`انشر إعلان بحثك فقط في الصفحة المخصصة لقارتك أو قارة إقامتك`,

    "IDTRANSLATEX32":` هل يمكنني زيادة حساب illicolove الخاص بي بأموال الهاتف المحمول ؟`,

    "IDTRANSLATEX33":`نعم`,

    "IDTRANSLATEX34":` ما هو سعر الاشتراك على موقعك ؟`,

    "IDTRANSLATEX35":` لا يوجد اشتراك على illicolove.`,

    "IDTRANSLATEX36":` كيف يمكنني تعبئة حساب ائتمان الخصم الخاص بي ؟`,

    "IDTRANSLATEX37":`نحن نقدم لك نظام دفع آمن من خلال عدة مجمعي دفع. حسب اختيارك، يمكنك شحن حسابك باستخدام بطاقة الائتمان أو خدمات الدفع عبر الهاتف المحمول. تحت ملفك الشخصي 
على لوحة التحكم الخاصة بك، انقر على الزر الأخضر "شحن حسابي" واتبع الخطوات ببساطة.`,

    "IDTRANSLATEX38":`هل يجب أن أدفع لنشر إعلان البحث الخاص بي ؟`,

    "IDTRANSLATEX39":`لا! نشر إعلان بحث مجاني.`,

    "IDTRANSLATEX40":`هل يجب أن أدفع مقابل عرض الإعلانات ؟`,

    "IDTRANSLATEX41":`رؤية الإعلانات مجانية، ولكن الحصول على معلومات الاتصال الموجودة في الإعلان هو مدفوع`,

    "IDTRANSLATEX42":` كيف يعمل نظام شراء وحدتك ؟`,

    "IDTRANSLATEX43":` عندما تقوم بالتسجيل، فإنك تتلقى تلقائيًا و
ثلاث (03) وحدات ائتمان مجانية تسمح لك بمشاهدة ثلاثة (03) عناوين اتصال في الإعلانات التي تختارها. تبلغ قيمة كل وحدة 95 فرنكا أو 0.57 ريال.
عندما تنفد وحداتك، يمكنك شرائها حسب راحتك وقدرتك. تتراوح كمية الوحدات التي يمكنك شراؤها من وحدة واحدة إلى
عدد الوحدات التي تريدها.`,

    "IDTRANSLATEX44":` هل وحداتي المشتراة لها تاريخ انتهاء ؟`,

    "IDTRANSLATEX45":`لا! وحداتك صالحة إلى أجل غير مسمى.`,

    "IDTRANSLATEX46":`هل يجب علي أن أشترك للاستفادة من خدمتك للمواعدة؟`,




    "IDTRANSLATEX47":`على illicolove، لا يوجد اشتراك للاستمتاع بخدماتنا باستثناء الاشتراك في النشرة الإخبارية وهو أمر اختياري.`,

    "IDTRANSLATEX48":`ما هي سياسة الخصوصية على موقع illicolove.com`,

    "IDTRANSLATEX49":`نولي أهمية كبيرة لخصوصية معلوماتك. بياناتك الشخصية مؤمنة ولا تتم مشاركتها مع أطراف ثالثة بدون موافقتك. يمكنك الاطلاع على سياسة الخصوصية الخاصة بنا لمزيد 
من التفاصيل`,
    "IDTRANSLATEX50":`هنا`,

    "IDTRANSLATEX51":` أين يمكنني العثور على البريد الإلكتروني للتحقق من صحة حسابي ؟`,

    "IDTRANSLATEX52":` من الممكن أن يكون بريد التحقق من حسابك في مجلد البريد الغير هام. قد تقوم أنظمة الأمان في مزودي خدمة البريد الإلكتروني بتوجيه رسائل التحقق إلى هذه المجلدات من 
أجل حمايتك. يرجى التحقق من مجلد البريد الغير هام والتأكد من وضع علامة "ليس هامًا" على البريد الإلكتروني إذا وجدته هناك. إذا لم تكن قادرًا على العثور على بريد التحقق بعد ذلك، يرجى الاتصال بخدمة العملاء لدينا للحصول على المزيد من 
المساعدة.`,

    "IDTRANSLATETCU1":`شروط الاستخدام العامة`,

    "IDTRANSLATETCU2":`مرحبًا بكم في illicolove.com، وهي منصة مواعدة عبر الإنترنت تقدمها BAKO FAMILIA&COMPANY. باستخدام موقعنا، 
فإنك توافق على الشروط والأحكام الموضحة أدناه.`,

    "IDTRANSLATETCU3":`المادة 1: الغرض`,

    "IDTRANSLATETCU4":`والغرض من هذه «شروط الاستخدام» هو الإطار القانوني لاستخدام illicolove.com وخدماتها.`,




    "IDTRANSLATETCU5":`يبرم هذا العقد بين:`,

    "IDTRANSLATETCU6":`BAKO FAMILIA & COMPANY، المالك للموقع على شبكة الإنترنت، والمعروف فيما يلي بـ "الناشر"، وأي شخص طبيعي يرغب في الوصول إلى 
الموقع وخدماته، والمشار إليه فيما يلي بـ "المستخدم". يجب أن يقبل جميع المستخدمين الشروط العامة للاستخدام، ويتعنى على المستخدمين الموافقة على هذه الشروط من خلال وصولهم إلى الموقع.

في هذه الشروط العامة للاستخدام، يتم الاتفاق على أن التعبيرات أو الكلمات التالية، سواء تم استخدامها في الصيغة المفردة أو الجمع، ستكون لها المعنى التالي:`,

    "IDTRANSLATETCU7":`إعلان البحث: يشير إلى نشر مستخدم أو زائر للموقع، في شكل نص عبر نموذجنا، مصحوبًا أو غير مصحوب بواحدة أو أكثر من الصور التي تمثل وجهه.`,

    "IDTRANSLATETCU8":`خدمات المواعدة: تشير إلى الوصول بواسطة
المستخدم لجميع إعلانات البحث المنشورة على الموقع، بما في ذلك الملفات الشخصية أو روابط النص التشعبي أو النصوص أو الصور أو مقاطع الفيديو أو جهات الاتصال أو العناوين من خلال «النقر للعرض».`,

    "IDTRANSLATETCU9":`«انقر لإظهار»: «انقر للعرض»، يشير إلى الوظيفة التي تسمح لأي مستخدم بعرض عنوان البريد الإلكتروني، جهة الاتصال
هاتف أو أي وسيلة أخرى للاتصال بمستخدم آخر سبق له أن أصدر إعلانا للبحث ووفر الوسيلة التي اختارها للاتصال به. هذه الميزة، التي تجعل من الممكن الحصول على مثل هذه المعلومات الهامة، يتم دفع ثمنها.
تكلفتها 95 فرنك أفريقي أو 0.57 ريال لكل نقرة.`,

   "IDTRANSLATETCU10":`المادة 2: الإشعار القانوني`,




   
   "IDTRANSLATETCU11X":`BAKO FAMILIA & COMPANY" هو الناشر لموقع المواعدة illicolove.com. يقع مكتبها في العنوان Lot 
124 في Agblangandan، وهي شركة فردية بنينية. تأسست في 29 مايو 2008، ومسجلة في السجل التجاري وسجل الأموال المتنقلة تحت الرقم RCCM RB/COT/08/A4101. ولها رقم هوية 
ضريبية فريد (IFU) رقم: 3200800938610. وهي ممثلة بواسطة "جيلداس غيسلين جانغبازو.`,

  "IDTRANSLATETCU11":`المادة 3: الحصول على الخدمات`,

  "IDTRANSLATETCU12":`مستخدم موقع illicolove.com له الوصول إلى الخدمات التالية`,

  "IDTRANSLATETCU13":`إنشاء حساب شخصي`,

  "IDTRANSLATETCU14":`إنشاء إعلان البحث الخاص بك ونشره مجانًا عبر نموذجنا لملئه`,

  "IDTRANSLATETCU15":`عرض إعلانات البحث التي ينشرها مستخدمون آخرون`,

  "IDTRANSLATETCU16":`الحصول المدفوع على جهات الاتصال للملفات الشخصية التي تثير اهتمامه، والمتاحة في إعلانات البحث بشكل غير محدود وحسب رغبته (انقر للعرض)`,

  "IDTRANSLATETCU17":`إمكانية الاتصال بالناشر لطلب طلب خدمات شخصية`,

  "IDTRANSLATETCU18":` يمكن لأي مستخدم لديه إمكانية الوصول إلى الإنترنت الوصول إلى الموقع مجانًا ومن أي مكان. والتكاليف التي يتكبدها المستخدم للوصول إليها (الاتصال بالإنترنت، ومعدات 
الحاسوب، وما إلى ذلك) ليست من مسؤولية الناشر. لا يمكن للمستخدم الوصول إلى الخدمات المذكورة أعلاه إلا إذا كان عضوًا في الموقع (أي تم التعرف عليه باستخدام وثائق تفويضه لتسجيل الدخول): يجوز للناشر قطع الموقع وخدماته المختلفة أو تعليقها، 
لا سيما أثناء الصيانة، دون أي التزام بالإشعار أو التبرير.`,

  "IDTRANSLATETCU19":`المادة 4: مسؤولية المستعمل`,

  "IDTRANSLATETCU20":` المستخدم مسؤول عن المخاطر المتعلقة باستخدام تسجيل الدخول وكلمة السر الخاصة به. يجب أن تظل كلمة مرور المستخدم سرية. في حالة الكشف عن كلمة السر، يرفض 
الناشر جميع المسؤولية. يتحمل المستخدم المسؤولية الكاملة عن استخدامه للمعلومات والمحتويات الموجودة على الموقع الشبكي illicolove.com.
يجب تعويض أي استخدام للخدمة من قبل المستخدم يؤدي بشكل مباشر أو غير مباشر إلى ضرر لصالح الموقع.
يسمح الموقع للمستخدمين بنشر إعلان بحث على الموقع عن طريق ملء نموذج "Post Ad'.`,






  "IDTRANSLATETCU21":` يتعهد المستخدم بتقديم معلومات موثوقة، واقتراح صور فوتوغرافية حديثة خالية من الكلمات البذيئة، وكتابة ملاحظات في معايير البحث الخاصة به تحترم الآخرين والقانون 
ويقبل ما يعلن عنه الناشر أو يرفضه، دون التزام بتبرير رفضه تزويده بمعلومات إضافية لتجنب الملفات الزائفة.
ويمنح المستخدم الناشر، بنشره إعلانه على الموقع، الحق غير الحصري والحر في تمثيل إعلانه على الشبكات الاجتماعية أو إنتاجه وتكييفه وتعديله ونشره وتوزيعه مباشرة من طرف ثالث مرخص له ؛ وفقا لعدم الكشف عن هويته أو طريقة السرية 
المختارة.
يتعهد الناشر بالحفاظ على عدم الكشف عن هوية أي مستخدم في حالة نشر الإعلانات على الشبكات الاجتماعية.`,

  "IDTRANSLATETCU22":`المادة 5: مسؤولية الناشر`,

  "IDTRANSLATETCU23":`لا يمكن لأي عطل في الخادم أو الشبكة أن يتحمل مسؤولية الناشر.
وبالمثل، لا يمكن إشراك مسؤولية الموقع في حالة وجود قوة قاهرة أو واقعة لا يمكن التنبؤ بها ولا يمكن التغلب عليها من جانب طرف ثالث.
ويتعهد الموقع الشبكي illicolove.com بتنفيذ جميع الوسائل اللازمة لضمان أمن البيانات وسريتها.
ومع ذلك، فإنه لا يوفر ضمانًا للأمن الكامل.
يحتفظ الناشر بالحق في عدم ضمان موثوقية الملفات الشخصية، على الرغم من أن إعلانات البحث المعروضة على الموقع تعتبر موثوقة ويتم التحقق منها قبل التحقق من صحتها في المكتب الخلفي من قبل فريق التدقيق والتحقق من صحة المحرر.`,



  "IDTRANSLATETCU24":`المادة 6: الملكية الفكرية`,

  "IDTRANSLATETCU25":`BAKO FAMILIA&COMPANY هي المالك الحصري لجميع حقوق الملكية الفكرية المتعلقة بالعلامة التجارية لهيكل ومحتوى الموقع 
www.illicolove.com. محتويات www.illicolove.com الموقع مخصصة للاستخدام الشخصي والخاص تمامًا وليس الجماعي، بحرية للمحتوى المجاني. الأمر نفسه ينطبق على خلاصات RSS 
والرسائل الإخبارية. خارج نظام الانتماء لدينا، يُحظر أي استخدام في سياق مهني أو تجاري أو أي تسويق لهذا المحتوى لأطراف ثالثة، إلا بموافقة صريحة من BAKO FAMILIA&COMPANY.`,

  "IDTRANSLATETCU26":`المادة 7: البيانات الشخصية.`,

  "IDTRANSLATETCU27":`راجع سياسة الخصوصية والبيانات الشخصية وملفات تعريف الارتباط هنا <a href="politique.html"><i 
class="bi bi-arrow-right-circle"></i></a>`,

  "IDTRANSLATETCU29":`المادة 8: الروابط التشعبية`,

  "IDTRANSLATETCU30":` المجالات التي ترتبط بها النص التشعبي على الموقع ليست من مسؤولية الناشر BAKO FAMILIA&COMPANY، الذي ليس لديه سيطرة على هذه 
الروابط. وقد أقام الناشر شراكات مع مقدمي الخدمات ويمكنه أن يقدم للمستخدم معلومات عن المواقع و/أو الخدمات الأخرى، على سبيل المثال عن طريق ذكر عناوين المواقع و/أو عن طريق وجود وصلات النص التشعبي إلى هذه المواقع. روابط النص 
التشعبي هذه التي تعيد التوجيه إلى مواقع الطرف الثالث لم يتم تطويرها من قبل الناشر ولا تنتمي إليها. ولذلك لا يتحمل الناشر أي مسؤولية عن هذه المواقع أو محتواها أو إعلاناتها أو منتجاتها أو خدماتها المتاحة في هذه المواقع أو منها. علاوة على ذلك، لا 
يمكن تحميل الناشر المسؤولية عن المعلومات والآراء والتوصيات التي تقدمها هذه الأطراف الثالثة.`,



  "IDTRANSLATETCU31":`ولا يكون الناشر مسؤولا عن أي ضرر أو خسارة يثبت أو يدعى وقوعها، أو تترتب على ذلك أو تتصل بالاستخدام، أو عن الاعتماد على المحتوى أو السلع أو الخدمات المتاحة 
على هذه الخدمات الشريكة أو المصادر الخارجية. قرار تفعيل هذه الروابط هو المسؤولية الكاملة للمستخدم.
الناشر ليس مسؤولاً عن توفر هذه المواقع ولا يمكنه التحكم في المحتوى أو التحقق من صحة الإعلانات والمنتجات والمعلومات الأخرى المعروضة على هذه المواقع. من الممكن لطرف ثالث إنشاء رابط إلى صفحة من الموقع 
illicolove.com دون إذن صريح من الناشر.`,

  "IDTRANSLATETCU32":`المادة 9: تحذير خاص`,

  "IDTRANSLATETCU33": `في الحياة الواقعية كما هو الحال في الحياة الافتراضية على الإنترنت، يمكنك عبور طريق الأشخاص الصادقين وكذلك الخبيثين والمحتالين. الأمر متروك لنا بشكل فردي 
لتبني مواقف أمنية معينة في الحياة الواقعية وأيضًا في العالم الافتراضي على الإنترنت. تدعوك BAKO FAMILIA&COMPANY إلى:`,

  "IDTRANSLATETCU34":` لا ترسل المال إلى شخص غريب التقى في هذا الموقع ؛ وفي أي ظرف من الظروف.`,

  "IDTRANSLATETCU35":`لا ترسل أبدًا صورًا حميمة إلى جهة اتصال التقى بها على هذا الموقع.`,




  "IDTRANSLATETCU36":`كن على أهبة الاستعداد عندما يدعي شخص ما أنه يعيش في المنطقة ولكنه يعمل في الخارج.`,

  "IDTRANSLATETCU37":` لا تستسلم أبدًا تحت مبرر حالة طارئة حيث يكون أحد أقاربك مريضًا ويُطلب منك مساعدته في دفع تكاليف متنوعة من قبل مراسلك الافتراضي. في مثل هذه الحالة، ندعوكم 
للإبلاغ عن ملف هؤلاء النصابين إلى الناشر.`,

  "IDTRANSLATETCU38":` لا يمكن أن تكون العلاقة الناشئة في illicolove.com مصدرًا للمشاكل والدعم المالي لك. أظهر عدم ثقة كبير عندما يعلن شخص غريب حبه لك دون 
أن يتمكن من مقابلتك ؛ وحتى بعد المواجهة المادية، خذ الوقت اللازم قبل الالتزام بأي نفقات كبيرة نقدًا.`,

  "IDTRANSLATETCU39":`اختر دائمًا مكانًا عامًا للاجتماع الأول.`,

  "IDTRANSLATETCU40":`قم دائمًا بإخبار أحد أقاربك بمكان وجودك عندما تكون بصحبة شخص غير معروف الهوية الذي اجتمعت به مؤخرًا.`,

  "IDTRANSLATETCU41":`الإبلاغ والتبليغ لنا عن محاولات بيع منتجات أو خدمات، والملفات الشخصية الزائفة حتى بعد تنقيتها بعد محادثاتك الخاصة، والتهديدات والترهيب، والكلام الخادش للحياء، 
والكراهية، والإساءة والإهانة، ورسائل قاصرين، والطلبات المالية أو طلبات الصور الخاصة`,

  "IDTRANSLATETCU42":` لذلك، يعترف المستخدم ويوافق بلا تحفظ على تحمل المسؤولية الكاملة عن أي إجراء يتم اتخاذه بعد قراءة إعلان المواعدة وأي معلومات بشكل عام عن الموقع. لا يمكن 
استيعاب توفير هذه البيانات، بأي شكل من الأشكال، لمشورة محددة أو دعم قرار محدد. يدرك المستخدم تمامًا عشوائية المواعدة في الحياة الواقعية وعلى الإنترنت.`,

  "IDTRANSLATETCU43":` المادة 10: حذف البيانات بعد 1 سنة من الخمول.`,

  "IDTRANSLATETCU44":`لأسباب أمنية، إذا لم تكن قد صادقت على الموقع لمدة عام واحد، فستتلقى بريدًا إلكترونيًا يدعوك إلى تسجيل الدخول في أقرب وقت ممكن، وإلا سيتم حذف ملفك الشخصي من 
قواعد بياناتنا.`,




  "IDTRANSLATETCU45":`المادة 11: حذف الحساب عند الطلب.`,

  "IDTRANSLATETCU46":`وللمستخدم إمكانية حذف حسابه في أي وقت، أو عن طريق طلب بسيط إلى الناشر أو عن طريق قائمة حذف الحساب الموجودة في إعدادات الحساب عند الاقتضاء.`,

  "IDTRANSLATETCU47":`المادة 12: حذف الملف الشخصي في حالة انتهاك شروط الاستخدام`,

  "IDTRANSLATETCU48":`في حالة انتهاك حكم أو أكثر من أحكام GTU أو أي وثيقة أخرى مدرجة هنا بالرجوع، يحتفظ الناشر بالحق في الإنهاء أو التقييد دون إشعار مسبق ووفقًا لتقديره الوحيد، 
واستخدامك وإمكانية الوصول إلى الخدمات، إلى حسابك وجميع المواقع المرتبطة.`,

  "IDTRANSLATETCU49":`المادة 13: المؤشرات في حالة الخرق الأمني الذي اكتشفه الناشر.`,

  "IDTRANSLATETCU50":`نتعهد بتنفيذ جميع التدابير التقنية والتنظيمية المناسبة لضمان مستوى من الأمن مناسب لمخاطر الوصول العرضي أو غير المصرح به أو غير القانوني إلى بياناتكم الشخصية أو 
الكشف عنها أو تعديلها أو فقدانها أو إتلافها.`,

  "IDTRANSLATETCU51":`في حالة علمنا بالوصول غير القانوني إلى بياناتك الشخصية المخزنة على خوادمنا أو تلك الخاصة بمزودي الخدمة لدينا، أو الوصول غير المصرح به مما يؤدي إلى تحقيق 
المخاطر المحددة أدناه نحن ملتزمون بما يلي:`,





  "IDTRANSLATETCU52":`الفاحص للأسباب المتعلقة بالمخبر (الإبلاغ العام) ؛`,

  "IDTRANSLATETCU53":`اتخاذ خطوات معقولة لتقليل أي آثار ضارة أو ضرر قد ينجم عن الحادث.`,

  "IDTRANSLATETCU54":`المادة 14: تحديد المسؤولية`,

  "IDTRANSLATETCU55":`ولا يمكن بأي حال من الأحوال اعتبار الالتزامات المحددة في النقطة المذكورة أعلاه والمتعلقة بالإخطار في حالة حدوث خرق أمني أي اعتراف بالخطأ أو المسؤولية عن وقوع 
الحادث المعني.`,

  "IDTRANSLATETCU56":`المادة 15: مدة العقد`,

  "IDTRANSLATETCU57":`مدة هذا العقد إلى أجل غير مسمى. يكون العقد ساري المفعول فيما يتعلق بالمستخدم منذ بداية استخدام الخدمة.`,

  "IDTRANSLATETCU58":`المادة 16: القانون المنطبق والاختصاص`,

  "IDTRANSLATETCU59":`لغة GTU هذه هي الفرنسية وستسود على جميع النسخ المترجمة إلى لغة أخرى. يعتمد هذا العقد على التشريعات البنينية، بما في ذلك القانون رقم 2017-20 
المؤرخ 20 أبريل 2018 بشأن القانون الرقمي في جمهورية بنين. لا يؤثر اختيار القانون المنطبق على حقوقك كمستهلك وفقًا للقانون المنطبق لمكان إقامتك.`,

  "IDTRANSLATETCU60":`إذا كنت مستهلكًا، فإننا نتفق أنت ونوافق على الخضوع للولاية القضائية غير الحصرية لمحاكم بنن. في حالة وجود نزاع لم يتم حله بين المستخدم والناشر، ستكون المحكمة 
التجارية في كوتونو مختصة بتسوية النزاع.`,

  "IDTRANSLATEPC1":`رابعاً - سياسة السرية`,

  "IDTRANSLATEPC2":`الإشعارات القانونية`,




  "IDTRANSLATEPC3":`توفر لك هذه الإشعارات القانونية وسياسة الخصوصية وتنورك بالطريقة التي تستخدم بها BAKO FAMILIA&COMPANY وتحمي المعلومات التي ترسلها 
إلينا، أيضًا عند استخدام موقع المواعدة الخاص بنا الذي يمكن الوصول إليه من عنوان URL: www.illicolove.com.`,

  "IDTRANSLATEPC4":`يرجى ملاحظة أن سياسة الخصوصية لدينا هي
يمكن تعديلها و/أو استكمالها في أي وقت، ولا سيما بغية الامتثال لأي تطورات تشريعية أو تنظيمية أو فقهية أو تكنولوجية. في مثل هذه الحالة، سيتم تحديد تاريخ تحديثها في هذه السياسة. تلزم هذه التغييرات المستخدم بمجرد اتصاله بالإنترنت. لذلك ندعوك 
إلى الاطلاع بانتظام على هذه الإشعارات وسياسة الخصوصية من أجل أن تكون على دراية بأي تغييرات.`,

  "IDTRANSLATEPC5":` الإعلان المقدم إلى هيئة حماية البيانات الشخصية(APDP)`,

  "IDTRANSLATEPC6":`بموجب القانون رقم 2017-20 المؤرخ 20 أبريل 2018 الخاص بالشيفرة الرقمية في جمهورية بنين (الكتاب الخامس المتعلق بحماية البيانات الشخصية 
والخصوصية)، تم تقديم إشعار بموقع الويب www.illicolove.com إلى هيئة حماية البيانات الشخصية (apdp.bj) تحت الرقم SA-TDP-00601.`,

  "IDTRANSLATEPC7":`على أي حال، تجمع BAKO FAMILIA&COMPANY معلومات شخصية عن المستخدم فقط لأغراض خدمة المواعدة التي يوفرها موقعها على الإنترنت. يقدم 
المستخدم هذه المعلومات مع المعرفة الكاملة بالحقائق، لا سيما عندما يدخلها بنفسه.`,





  "IDTRANSLATEPC8":`وفقا لأحكام القانون 2017-20 بشأن الرموز الرقمية في جمهورية بنن، لأي مستخدم الحق في الوصول إلى البيانات الشخصية المتعلقة به وتصحيحها ومعارضتها، بتقديم 
طلبه المكتوب والموقع، مشفوعا بنسخة من بطاقة هوية موقعة من حامل الوثيقة، تحديد العنوان الذي يجب أن يكون الجواب عليه محكومًا به. لا يتم نشر أي معلومات شخصية لمستخدم موقعنا على الإنترنت 
«www.illicolove.com»، نقل أو بيع على أي وسيلة أو إلى أطراف ثالثة دون علمهم.`,

  "IDTRANSLATEPC9":`خصوصية بيانات`,

  "IDTRANSLATEPC10":`بياناتك الشخصية سرية ولن يتم إرسالها إلى أطراف ثالثة. لا تسمح لنا الطبيعة الخاصة لخدمة المواعدة الخاصة بنا بإيصال بياناتك الشخصية (الأسماء وجهات الاتصال 
والعناوين وما إلى ذلك) إلى الفرد، بغض النظر عن رتبته أو جودته.`,

  "IDTRANSLATEPC11": `الحق في الحصول`,

  "IDTRANSLATEPC12":`وتطبيقا لأحكام قانون المدونة الرقمية في جمهورية بنن، يحق لأي مستخدم لموقعنا الشبكي www.illicolove.com الوصول إلى البيانات التي تخصه 
فرادى وتصحيحها وتعديلها وحذفها. ويجوز للحائز ممارسة هذا الحق بناء على طلب يرسل بالبريد الإلكتروني إلى عنوان البريد الإلكتروني التالي: info@illicolove.com. ولا يعهد بالمعلومات الشخصية التي يتم جمعها 
إلى أطراف ثالثة.`,

  "IDTRANSLATEPC13":`الحق في تصحيح`,






  "IDTRANSLATEPC14":`بموجب قانون الشيفرة الرقمية في جمهورية بنين، يمكن لأي مستخدم لموقع الويب الخاص بنا www.illicolove.com طلب تصحيح أو تحديث أو حذف 
أو قفل أو حذف البيانات الخاصة به، والتي قد تكون غير دقيقة أو خاطئة أو ناقصة أو غامضة أو قديمة`,

  "IDTRANSLATEPC15":`مدة الصلاحية.`,

  "IDTRANSLATEPC16":`يتم الاحتفاظ ببياناتك الشخصية بواسطة BAKO FAMILIA&COMPANY فقط للوقت الذي يتوافق مع حاجتك إلى خدمات المواعدة. ومع ذلك، لا تتجاوز 
فترة الاحتفاظ هذه ثلاثة عشر (13) شهرًا في حالة عدم النشاط في حساب المستخدم الخاص بك.`,

  "IDTRANSLATEPC17":`الشكوى المقدمة إلى السلطة المختصة`,

  "IDTRANSLATEPC18":`إذا كنت تعتبر أن BAKO FAMILIA&COMPANY لا تحترم التزاماتها فيما يتعلق ببياناتك الشخصية التي تم جمعها أثناء زيارتك لموقعها على الإنترنت
www.illicolove.com الإنترنت، يمكنك إرسال شكوى أو طلب إلى هيئة حماية البيانات الشخصية (APDP)، وفقًا للإجراءات القانونية.`,

  "IDTRANSLATEPC19":`ملكية فكرية`,

  "IDTRANSLATEPC20":`جميع محتويات موقع الويب الحالي، بما في ذلك ولكن لا يقتصر على الرسومات، الصور، النصوص، مقاطع الفيديو، الرسوم المتحركة، الأصوات، الشعارات، الصور المتحركة 
والرموز مع تصميمها، هي ملكية حصرية لشركة باكو فاميليا وشركاؤها، باستثناء العلامات التجارية والشعارات والمحتويات التي تنتمي إلى شركات شريكة أخرى أو مؤلفين آخرين`,

  "IDTRANSLATEPC21":`شروط الخدمة`,

  "IDTRANSLATEPC22":` موقع الويب www.illicolove.com متاح باللغة الفرنسية مع ترجمات إلى الإنجليزية والإسبانية والألمانية والبرتغالية والروسية والصينية (
الماندرين) والعربية واليابانية والإيطالية والكورية. لضمان أفضل راحة في الاستخدام، نوصي باستخدام متصفحات متوافقة وحديثة مثل Chrome وSafari وFirefox.`,

  "IDTRANSLATEPC23":`المعلومات والمقترحات`,







  "IDTRANSLATEPC24":`تنفذ BAKO FAMILIA&COMPANY جميع الوسائل الموجودة بحوزتها، لضمان خدمة مواعدة موثوقة وتحديث دائم لموقعها على الإنترنت 
www.illicolove.com. ومع ذلك، قد تحدث أخطاء أو إغفالات. نتيجة لذلك، يمكن لأي مستخدم إرسال اقتراحات أو معلومات إلينا على: info@illicolove.com والإشارة إلى أي تغييرات في 
الموقع يعتبرها ذات صلة.`,

  "IDTRANSLATEPC25":`الكوكيز.`,

  "IDTRANSLATEPC26":`لأغراض الأداء التقني والإحصائيات وعرض المحتوى، يمكن أن يستخدم موقع الويب www.illicolove.com ملفات تعريف الارتباط (الكوكيز). 
ملفات تعريف الارتباط هي ملفات نصية صغيرة تُخزن على الجهاز الخاص بك ولا تسمح بتحديد هوية المستخدم، ولكنها تسجل معلومات تتعلق بتصفح الجهاز على موقع الويب. قد تكون بعض أجزاء من هذا الموقع غير قابلة للعمل بشكل صحيح دون قبول 
ملفات تعريف الارتباط. البيانات التي يتم الحصول عليها بهذه الطريقة تهدف إلى تسهيل التصفح في المرات اللاحقة على هذا الموقع. تُستخدم ملفات تعريف الارتباط أيضًا لأغراض قياس الجمهور وتحليل التردد`,

  "IDTRANSLATEPC27":` قد يجعل رفض تثبيت ملف تعريف الارتباط من المستحيل الوصول إلى ميزات معينة. ومع ذلك، يجوز لأي مستخدم لموقع الويب هذا تكوين محطته لرفض تركيب ملفات تعريف 
الارتباط، على النحو المبين أدناه:`,

  "IDTRANSLATEPC28":`مستخدمو Safari: اختر تفضيلات Safari، وانقر فوق الخصوصية، ثم حدد خيار «ملفات تعريف الارتباط وبيانات موقع الويب». حظر دائمًا: لا 
يسمح Safari لأي موقع ويب أو طرف ثالث أو معلن بتخزين ملفات تعريف الارتباط والبيانات الأخرى على جهاز Mac. قد يمنع هذا بعض مواقع الويب من العمل بشكل صحيح.`,





  "IDTRANSLATEPC29":`مستخدمو Safari: اختر تفضيلات Safari، وانقر فوق الخصوصية، ثم حدد خيار «ملفات تعريف الارتباط وبيانات موقع الويب». حظر دائمًا: لا 
يسمح Safari لأي موقع ويب أو طرف ثالث أو معلن بتخزين ملفات تعريف الارتباط والبيانات الأخرى على جهاز Mac. قد يمنع هذا بعض مواقع الويب من العمل بشكل صحيح.`,

  "IDTRANSLATEPC30":`مستخدمو Google Chrome: قائمة ؛ الإعدادات أظهر إعدادات متقدمة (تقع في أسفل الصفحة). يجب عليك بعد ذلك النقر فوق زر إعدادات المحتوى ثم وضع 
علامة على ملفات تعريف الارتباط والبيانات Block Block من مواقع الجهات الخارجية، وانقر أخيرًا على OK للتحقق من صحة ملفك
الاختيار.`,

  "IDTRANSLATEPC31":`مستخدمو Internet Explorer: قائمة خيارات الإنترنت علامة تبويب الخصوصية وعلى الزر المتقدم لإحضار نافذة إعدادات الخصوصية المتقدمة. 
ثم حدد مربع اختبار إدارة ملفات تعريف الارتباط التلقائية، ثم حدد Refuse في عمود ملفات تعريف الارتباط من طرف ثالث.`,

  "IDTRANSLATEPC32":`مستخدمو Microsoft Edge: علامة تبويب خيارات الأداة/الإنترنت. انقر فوق الخصوصية واختر حظر جميع ملفات تعريف الارتباط.`,




  "IDTRANSLATEPC33":`وفقًا للممارسات في هذا الشأن، يتم تخصيص بعض ملفات تعريف الارتباط من استلام موافقتك المسبقة، فيما يتعلق بالحالات التي تعتبر ضرورية لتشغيل هذا الموقع على النحو 
المناسب. تهدف هذه الملفات إلى تسهيل التواصل الإلكتروني، وتشمل بشكل خاص ملفات تعريف الارتباط لجلسة الهوية والمصادقة وتخصيص واجهتك. يتم إصدار وإدارة هذه الملفات تعريف الارتباط بواسطة باكو فاميليا وشركاؤها وتخضع جميعها 
لسياسة الخصوصية الحالية.`,

  "IDTRANSLATEPC34":`ارتباطات تشعبية`,

  "IDTRANSLATEPC35":`ويمكن للموقع الشبكي «www.illicolove.com» أن يوفر وصلات لمواقع أو موارد أخرى متاحة على شبكة الإنترنت. لا تملك BAKO 
FAMILIA&COMPANY أي وسيلة للتحكم في المواقع المتصلة بموقعها على الإنترنت. وعلاوة على ذلك، فهي ليست مسؤولة عن هذه المواقع والمصادر الخارجية أو تضمن توافرها. ولا يمكن تحميلها المسؤولية عن أي ضرر، مهما كان 
طبيعته، ناجم عن محتوى هذه المواقع أو المصادر الخارجية.`,




  "IDTRANSLATECONSULTE1":`أفريقيا`,


  "IDTRANSLATECONSULTE2":`أوروبا`,

  "IDTRANSLATECONSULTE3":`البلدان الأخرى في العالم`,

  "IDTRANSLATEPROFIL1": " حساب صحيح",

  "IDTRANSLATEPROFIL2": " حساب غير صالح",

  "IDTRANSLATEPROFIL3":`حساب السحب`,

  "IDTRANSLATEPROFIL4":`حساب السحب`,

  "IDTRANSLATEPROFIL5":`خطتي`,

  "IDTRANSLATEPROFIL6":`خطتي`,

  "IDTRANSLATEPROFIL7":`بيانات`,

  "myNameIDX":` حذف حسابك`,

  "myBtn":` قم بتعبئة حسابي`,


  "myBtn2":` قم بتعبئة حسابي`,

  "IDTRANSLATEPROFIL9":`الانتقال إلى الصفحة الرئيسية`,

  "IDTRANSLATEPROFIL10":`تسجيل الخروج`,

  "CONSULTEZLESANNONCES":`عرض الإعلانات`,

  "IDTRANSLATEPROFIL11":`عدل إعلانك`, 

  "IDTRANSLATEPROFIL12":`نشر إعلان`,

 // "IDTRANSLATEPROFIL13":`Vous souhaite la Bienvenue !`,

  "exampleModalLongTitle":`وحدة واحدة تُكلف 95 فرنك إفريقي، أي 0.58 ريال`,

  "errorSms":`يجب عليك إدخال رقم.`,

  "SmspayId":`أدخل عدد الوحدات هنا.`,

  "IDTRANSLATEPROFIL14":`عودة`,


  "payYourUnitybtn":`تأكيد`,

  "CHOISEYOURPAIEMENT":`اختر طريقة الدفع.`,

  "exampleModalLongTitleX":`تأمين حسابك.`,

  "IDTRANSLATEPROFIL15":`يرجى تقديم إجابة لن تنساها أبدًا. سيتم سؤال هذه الإجابة عند استرداد حسابك. بدون هذه الإجابة، سيظل الوصول إلى حسابك متعذرًا.`,

  "IDTRANSLATEPROFIL16":` حدد سؤالك `,

  "IDTRANSLATEPROFIL17":` ما هو شهر ميلادك ؟`,

  "IDTRANSLATEPROFIL18":` ما هو لونك المفضل ؟`,

  "IDTRANSLATEPROFIL19":`كيف تتخيلون حياتكم اليومية؟`,

  "IDTRANSLATEPROFIL20":`ما هو الأهم بالنسبة لك ؟`,

  "IDTRANSLATEPROFIL21":`ما هو اسم الشخص الذي يلهمك ؟`,

  "IDTRANSLATEPROFIL22":`ما هو بلدك المفضل ؟`,

  "IDTRANSLATEPROFIL23":`ما هو اللاعب المفضل لديك ؟`,

  "IDTRANSLATEPROFIL24":`ما هو الفنان المفضل لديك ؟`,

  "IDTRANSLATEPROFIL25":`ما هو جوابك ؟ مجرد كلمة واحدة. لا مساحة.`,
  
  "submitFormID":`الموافقة`,

  "TOCLOSEMODALID":`غلق`,  

  "IDTRANSLATEPROFIL26":`تأكيد`, 

  "IDTRANSLATEPROFIL27":`الاستجابة الأمنية`,

  "payYourUnity":` اكتب عدد الوحدات `,

  congratulationsTitle: "تهانينا!",

  accountSecureMessage: "حسابك آمن. شكرا لك",

  accountSecureMessageX: "لا تضع مساحة. شكرا لك",


  "IDTRANSLATEPROFIL28":`حسابك فارغ. الرجاء شراء وحدات`,

  "IDTRANSLATEPROFIL29":`لا يمكنك شراء وحدات في الوقت الحالي. الرجاء استهلاك 3 وحدات مجانية مقدمة أولاً. شكرًا`,

  "IDTRANSLATEPROFIL30W":`هل أنت واثق؟`,

  "IDTRANSLATEPROFIL30":`لن تتمكن من العودة إلى الوراء!`,

  "IDTRANSLATEPROFIL31":`نعم، احذفه!`, 

  "IDTRANSLATEPROFIL32":` هل أنت متأكد؟`,

  "IDTRANSLATEPROFIL33":` بعد تسجيل الخروج، لديك الفرصة لإعادة الاتصال`,

  "IDTRANSLATEPROFIL34":`نعم، قم بالخروج!`,

  "IDTRANSLATEPROFIL35":`مُسجل الخروج`,

  "IDTRANSLATEPROFIL36":`لقد تم تسجيل خروجك.`,

  "IDTRANSLATEPROFIL37":`هل تود زيارة صفحتنا الرئيسية ؟`,

  "IDTRANSLATEPROFIL38":`حذف!`,

  "IDTRANSLATEPROFIL38X":` نجاح.`,

  "IDTRANSLATEPROFIL39X":`تم تحديث صورتك بنجاح.`,

  "IDTRANSLATEPROFIL40X":` خطأ`,

  "IDTRANSLATEPROFIL41X":`لا يمكن تحديث صورتك.`,

  "IDTRANSLATEPROFIL39":` تم حذف حسابك!!`,

  "IDTRANSLATEPROFIL40":`حذف!`,

  "IDTRANSLATEPROFIL41":`خطأ حذف المستخدم! `,

  "IDTRANSLATEPROFIL42":`هناك خطأ`,

  "IDTRANSLATEPROFIL42Q":`هناك خطأ`,

  "IDTRANSLATEPROFIL42QX":`هناك خطأ`,

  "IDTRANSLATEPROFIL43":`الحقل ليس مملوء بشكل صحيح!`, 

  "IDTRANSLATEPROFIL44":`لقد حدث خطأ ما!`,

  "IDTRANSLATEPROFIL44IN":`أعزائي المستخدمين، طريقة الدفع هذه ستكون متاحة قريبًا جدًا. في الوقت الحالي، يرجى استخدام Feexpay لإكمال معاملاتك. شكرا لك`,

  "IDTRANSLATEPROFIL45":`البيانات غير محدثة!`,

  "IDTRANSLATEPROFIL46":` ليس لديك وحدات. الرجاء شراء الوحدات. اذهب إلى ملفك الشخصي. شكرا لك`,

  "IDTRANSLATEPROFIL47":` هل أنت متأكد؟`,

  "IDTRANSLATEPROFIL48":` من خلال تحرير إعلانك، سيتم تقديمه إلى «illicolove» مرة أخرى للتحقق من صحته. يمكن أن تستغرق هذه العملية 24 ساعة.`,




  "IDTRANSLATEPROFIL49":`عودة`,

  "IDTRANSLATEPROFIL50":`نعم! التغيير.`,

  "IDTRANSLATELOGIN1":`قم بتسجيل الدخول`,

  "IDTRANSLATELOGIN2":`بريدك الإلكتروني`,

  "IDTRANSLATELOGIN3":`عنوان بريدك الإلكتروني`,

  "IDTRANSLATELOGIN4":`كلمة مرور`,

  "IDTRANSLATELOGIN5":`كلمة السر الخاصة بك`,

  "IDTRANSLATELOGIN6":`تذكرني`,

  "IDTRANSLATELOGIN7":`نسيت كلمة المرور`,

  "IDTRANSLATELOGIN8":`ليس لدي حساب`,

  "IDTRANSLATELOGIN9":`سجل مجانا`,

  "IDTRANSLATELOGIN10":`تسجيل الدخول`,

  "IDTRANSLATELOGIN11":`نجاح`,

  "IDTRANSLATELOGIN12":`أنت متصل بنجاح!`,

  "IDTRANSLATELOGIN13":`آسف`,

  "IDTRANSLATELOGIN14":`كلمة السر خاطئة`,

  "IDTRANSLATELOGIN15":`آسف`,

  "IDTRANSLATELOGIN16":`المستخدم غير موجود مع هذا البريد الإلكتروني!`,

  "IDTRANSLATESIGNUP1":`التسجيل`,

  "IDTRANSLATESIGNUP2":`اسم مستعار`,

  "IDTRANSLATESIGNUP3":`اسم مستعار`,

  "IDTRANSLATESIGNUP4":`الاسم الكامل`,

  "IDTRANSLATESIGNUP5":`الاسم الكامل`,

  "IDTRANSLATESIGNUP6":`بريدك الإلكتروني`,

  "IDTRANSLATESIGNUP7":`عنوان بريدك الإلكتروني`,

  "IDTRANSLATESIGNUP8":`كلمة مرور`,

  "IDTRANSLATESIGNUP9":`كلمة السر الخاصة بك`,

  "IDTRANSLATESIGNUP10":`لقد قرأت ووافقت على الشروط والأحكام`,

  "IDTRANSLATESIGNUP11":`اقرأ وتقبل أحكامنا وشروطنا`,

  "IDTRANSLATESIGNUP12":`لدي حساب بالفعل.`,

  "IDTRANSLATESIGNUP13":`قم بتسجيل الدخول`,

  "IDTRANSLATESIGNUP14":`آسف`,





  "IDTRANSLATESIGNUP15":`يرتبط الحساب بالفعل بعنوان البريد الإلكتروني أو رقم الهاتف هذا.`,

  "IDTRANSLATESIGNUP16":`نجاح`,

  "IDTRANSLATESIGNUP17":`لقد سجلت بنجاح!`,

  "IDTRANSLATESIGNUP18":` خطأ أثناء إرسال عنوان البريد الإلكتروني إلى Firebase `,

  "IDTRANSLATESIGNUP19":`لا تضع مساحة. شكرا لك`,

  "IDTRANSLATESIGNUP19PHONE":`يرجى تقديم رقم هاتف صالح.`,

  "IDTRANSLATESIGNUP19PHONEX":`يرجى تقديم رقم هاتف صالح.`,

  "IDTRANSLATEFORGET1":`أرسل عنوان البريد الإلكتروني الذي استخدمته للتسجيل.`,


  "IDTRANSLATEFORGET2":`بريدك الإلكتروني`,

  "IDTRANSLATEFORGET3":`بريدك الإلكتروني`,

  "IDTRANSLATEFORGET4":`أرسل`,

  "IDTRANSLATEFORGET5":`تأكيد`,

  "IDTRANSLATEFORGET6":`أعط الجواب الصحيح!`,

  "IDTRANSLATEFORGET7":`أدخل كلمة السر الجديدة!`,

  "IDTRANSLATEFORGET8":`أدخل كلمة السر الجديدة!`, 

  "IDTRANSLATEFORGET9":`رائع...`,

  "IDTRANSLATEFORGET10":`تم تحديث كلمة المرور بنجاح!`,

  "IDTRANSLATEFORGET11":`قم بتسجيل الدخول`,

  "IDTRANSLATEFORGET12":`حسن`,

  "IDTRANSLATEFORGET13":`خطأ في تحديث البريد الإلكتروني.`,

  "IDTRANSLATEFORGET14":`هذه هي الإجابة الخاطئة`,

  "IDTRANSLATEFORGET15":`المستخدم غير موجود.`, 

  "IDTRANSLATEFORM1":`ملفي الشخصي`,

  "IDTRANSLATEFORM1W":`ملفي الشخصي`,

  "IDTRANSLATEFORM2":`ملفي الشخصي`,

  "IDTRANSLATEFORM3":`ملفي الشخصي`,

  "IDTRANSLATEFORM4":`الملف الشخصي الذي أبحث عنه`,

  "IDTRANSLATEFORM4W":`الملف الشخصي الذي أبحث عنه`,

  "IDTRANSLATEFORM5":`الملف الشخصي الذي أبحث عنه`,


 // "IDTRANSLATEFORM6":`VEUILLEZ REMPLIR LE FORMULAIRE CI-DESSOUS.`,

  "IDTRANSLATEFORM7":`توفير معلومات دقيقة وثاقبة.`,

  "IDTRANSLATEFORM8":`بلد إقامتي <i class="fa fa-star required"></i>`,

  "IDTRANSLATEFORM9":`مدينة إقامتي <i class="fa fa-star required"></i>`,

  "IDTRANSLATEFORM10":`الاسم أو الاسم المستعار <i class="fa fa-star required"></i>`,

  "IDTRANSLATEFORM11":`عمري <i class="fa fa-star required"></i>`,

  "IDTRANSLATEFORM9PL":`مدينة إقامتي `,





  "IDTRANSLATEFORM10X":`مدينة إقامتي`,

  "IDTRANSLATEFORM11X":`عمري`,

  "IDTRANSLATEFORM8X":`بلد إقامتي`,

  "IDTRANSLATEFORM9X":`عمري`,

  "IDTRANSLATEFORM12":`الرجاء إدخال الأرقام فقط.<i class="fa fa-star required"></i>`,
  "IDTRANSLATEFORM13":`جنسي <i class="fa fa-star required"></i>`,

  "IDTRANSLATEFORM14":`رجل`,

  "IDTRANSLATEFORM15":`امرأة`,

  "IDTRANSLATEFORM16":`متحول جنسيا`,

  "IDTRANSLATEFORM17":`الجندر فلويد`,

  "IDTRANSLATEFORM18":`دودجنسيت`,

  "IDTRANSLATEFORM19":`لا جنس`,

  "IDTRANSLATEFORM20":`غير رومانسي`,

  "IDTRANSLATEFORM21":`غير جنسي`,

  "IDTRANSLATEFORM22":`ثنائي الجنس`,

  "IDTRANSLATEFORM23":`سيسجنس`,

  "IDTRANSLATEFORM24":`التسليم للتقليد الجنسي المُطابق للجنس المولود به`,

  "IDTRANSLATEFORM25":`شخص يشعر بالمشاعر الرومانسية بعد تطوير علاقة عاطفية عميقة`,

  "IDTRANSLATEFORM26":`شخص لا يشعر بالجذب الجنسي إلا بعد تطوير علاقة عاطفية عميقة`,

  "IDTRANSLATEFORM27":`إحساس رومانسي نحو الجنس الآخر`,

  "IDTRANSLATEFORM28":`هم/هن`,

  "IDTRANSLATEFORM29":`تصنيف الشخص بطريقة غير صحيحة بناءً على النمط الاجتماعي للجنس`,

  "IDTRANSLATEFORM30":`غير ثنائي الجنس`,

  "IDTRANSLATEFORM31":`مستعد للجنسية المتعددة`,

  "IDTRANSLATEFORM32":`شخص متعدد العلاقات العاطفية`,

  "IDTRANSLATEFORM33":`شخص غير محدد الجنس`,

  "IDTRANSLATEFORM34":`شخص متحول جنسياً`,

  "IDTRANSLATEFORM35":`الانتقال`,

 // "IDTRANSLATEFORM36":`VEUILLEZ REMPLIR LE FORMULAIRE CI-DESSOUS.`,

  "IDTRANSLATEFORM37":`توفير معلومات دقيقة وثاقبة.`,

  "IDTRANSLATEFORM38":`حالتي الزوجية <i class="fa fa-star required"></i>`,

  "IDTRANSLATEFORM39":`أعزب`,

  "IDTRANSLATEFORM40":`في علاقة`,

  "IDTRANSLATEFORM41":`الطلاق`,

  "IDTRANSLATEFORM42":`أرمل`,

  "IDTRANSLATEFORM43":`جنسيتي <i class="fa fa-star required"></i>`,

  "IDTRANSLATEFORM44":`هاتف <i class="fa fa-star required"></i>`,

  "IDTRANSLATEFORM45":`أدخل رقمك فقط بدون بادئة البلد<i class="fa fa-star required"></i>`,

  "IDTRANSLATEFORM46":`مهنتي<i class="fa fa-star required"></i>`,

  "IDTRANSLATEFORM47":`مهنتي`,

 // "IDTRANSLATEFORM48":`VEUILLEZ REMPLIR LE FORMULAIRE CI-DESSOUS.`,

  "IDTRANSLATEFORM49":`توفير معلومات دقيقة وثاقبة.`,

  "IDTRANSLATEFORM50":`أريد إجتماع <i class="fa fa-star required"></i>`,

  "IDTRANSLATEFORM51":`صديقة، تكون رفقة لكسر العزلة`,

  "IDTRANSLATEFORM52":`مستدامة`,
 
  "IDTRANSLATEFORM53":`يمكن أن يؤدي إلى الزواج`,


  "IDTRANSLATEFORM54":`بطاقة هوية`,

  "IDTRANSLATEFORM55":`صورة 1 <i class="fa fa-star required"></i>`,

  "IDTRANSLATEFORM56":`صورة 2 <i class="fa fa-star required"></i>`,

 // "IDTRANSLATEFORM57":`VEUILLEZ REMPLIR LE FORMULAIRE CI-DESSOUS.`,

  "IDTRANSLATEFORM58":`توفير معلومات دقيقة وثاقبة.`,

  "IDTRANSLATEFORM59":`نوع <i class="fa fa-star required"></i>`,

  "IDTRANSLATEFORM60":`رجل`,

  "IDTRANSLATEFORM61":`امرأة`,

  "IDTRANSLATEFORM62":`متحول جنسيا`,

  "IDTRANSLATEFORM63":`الجندر فلويد`,

  "IDTRANSLATEFORM64":`دودجنس`,

  "IDTRANSLATEFORM65":`بلا جنس`,

  "IDTRANSLATEFORM66":`غير رومانسي`,

  "IDTRANSLATEFORM67":`غير جنسي`,

  "IDTRANSLATEFORM68":`ثنائي الجنس`,


  "IDTRANSLATEFORM69":`سيسجنس`,

  "IDTRANSLATEFORM70":`التسليم للتقليد الجنسي المُطابق للجنس المولود به`,

  "IDTRANSLATEFORM71":`شخص يشعر بالمشاعر الرومانسية بعد تطوير علاقة عاطفية عميقة.`,

  "IDTRANSLATEFORM72":`شخص لا يشعر بالجذب الجنسي إلا بعد تطوير علاقة عاطفية عميقة`,

  "IDTRANSLATEFORM73":`إحساس رومانسي نحو الجنس الآخر`,

  "IDTRANSLATEFORM74":`هم/هن`,

  "IDTRANSLATEFORM75":`تصنيف الشخص بطريقة غير صحيحة بناءً على النمط الاجتماعي للجنس`,

  "IDTRANSLATEFORM76":`غير ثنائي الجنس`,

  "IDTRANSLATEFORM77":`مستعد للجنسية المتعددة`,

  "IDTRANSLATEFORM78":`شخص يمارس الحب المتعدد`,

  "IDTRANSLATEFORM79":`شخص يتجاوز النمطيات الجنسية التقليدية`,

  "IDTRANSLATEFORM80":`شخص متغير الجنس`,

  "IDTRANSLATEFORM81":`تحول`,

  "IDTRANSLATEFORM82":`فئته العمرية <i class="fa fa-star required"></i>`,

  "IDTRANSLATEFORM83":`حالته الزوجية <i class="fa fa-star required"></i>`,

  "IDTRANSLATEFORM84":`أعزب`,

  "IDTRANSLATEFORM85":`على علاقة`,

  "IDTRANSLATEFORM86":`الطلاق`,

  "IDTRANSLATEFORM87":`أرمل`,

  "IDTRANSLATEFORM88":`بلد إقامته <i class="fa fa-star required" ></i>`,

  "IDTRANSLATEFORM89":`يمكنك اختيار عدة دول. <i class="fa fa-star required"></i>`,
  "IDTRANSLATEFORM90":`بلاده`,

  "IDTRANSLATEFORM91":`بلد إقامته`,

//  "IDTRANSLATEFORM92":`VEUILLEZ REMPLIR LE FORMULAIRE CI-DESSOUS.`,

  "IDTRANSLATEFORM93":`توفير معلومات دقيقة وثاقبة.`,

  "IDTRANSLATEFORM94":`وصف الجانب المادي الذي تريده.`,

  "IDTRANSLATEFORM95":`مدينته/مدينة إقامته <i class="fa fa-star required"></i>`,

  "IDTRANSLATEFORM96":`مدينتها`,

  "IDTRANSLATEFORM97":`عمل <i class="fa fa-star required"></i>`,

  "IDTRANSLATEFORM98":`عمل`,

  "IDTRANSLATEFORM99":`مزيد من التفاصيل.`,

  "IDTRANSLATEFORM100":`مزيد من التفاصيل.`,

  "IDTRANSLATEFORM10w":` الجوانب المادية`,

  "IDTRANSLATEFORM101":`تال`,

  "IDTRANSLATEFORM102":`سابقة`,

  "IDTRANSLATEFORM103":`أرسل`,

  
  "IDTRANSLATEFORM104":`<p > البيانات الشخصية التي تم جمعها في هذا الاستمارة بواسطة <strong style="color: #000080;">BAKO 
FAMILIA & COMPANY</strong> سيتم معالجة البيانات الشخصية المجمعة في هذا النموذج حصرًا بهدف ضمان سلامة خدمة اللقاءات العاطفية التي طلبتها. لن يتم الكشف عن البيانات الشخصية لأي شخص بدون 
موافقتك. وتنفيذًا لأحكام قانون الرقمي رقم 2017-20 في جمهورية بنين بشأن حماية البيانات الشخصية، تم تسجيل معالجة البيانات المجمعة أمام الهيئة الوطنية لحماية البيانات الشخصية (APDP).</em> </p>
  <hr>
  <p class="mb-0">وفقًا للقانون المذكور أعلاه، يمكنك ممارسة حقوقك في الوصول والمعارضة والتصحيح والحذف على العنوان التالي: <strong style="color: 
#000080;">BAKO FAMILIA & COMPANY</strong>.
  </em></p>`,

  "IDTRANSLATEFORM105":`صورتك صغيرة جدا. يرجى تحديد صورة 300 × 300 بكسل على الأقل.`,

  "IDTRANSLATEFORM106":`حدث خطأ عند الاتصال بـ REST Countries API`,

  "IDTRANSLATEFORM107":`ضع الرقم بدون البادئة`,

  "IDTRANSLATEFORM108":`الرجاء تحديد البلد.`,

  "IDTRANSLATEFORM109":`نجاح`,

  "IDTRANSLATEFORM110":`يخضع نموذجك للتحقق في غضون 24 ساعة <i class="fa fa-heart"></i>.`
,
  "IDTRANSLATEFORM111":`آسف`,

  "IDTRANSLATEFORM112":`كل حقولك لم تملأ.`,

  "IDTRANSLATEUSERD1":`اتصل بي  <svg xmlns="http://www.w3.org/2000/svg" width="10.444" 
height="9.7"><defs><clipPath id="a"><path fill="none" d="M0 
0h10.444v9.7H0z"/></clipPath></defs><g fill="none" stroke="#2a46cc" stroke-linecap="round" 
stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.438" clip-path="url(#a)"><path 
d="M.719 4.85h8.709M5.594 8.683L9.427 4.85M5.594 1.017L9.427 4.85"/></g></svg>`,





  "IDTRANSLATEUSERD2":`للاتصال بي`,

  "IDTRANSLATEUSERD3":`<i class="bi bi-alexa" style="font-size: 3vh !important;"></i> ملفي 
الشخصي `,

  "IDTRANSLATEUSERD4":`ردود`,

  "IDTRANSLATEUSERD5":`مدينة سكني:`,

  "IDTRANSLATEUSERD6":`اسمي أو اسمي المستعار:`,

  "IDTRANSLATEUSERD7":`فئتي العمرية:`,

  "IDTRANSLATEUSERD8":`نوعي المفضل:`,

  "IDTRANSLATEUSERD9":`حالتي الزوجية:`,

  "IDTRANSLATEUSERD10":`جنسيتي:`,

  "IDTRANSLATEUSERD11":`وظيفتي:`,

  "IDTRANSLATEUSERD12":`أريد إجتماع`,

  "IDTRANSLATEUSERD13":`تفضيلاتي الجسدية:`,

  "IDTRANSLATEUSERD14":`تفاصيل أخرى:`,

  "IDTRANSLATEUSERD15":`<i class="bi bi-alexa" style="font-size: 3vh !important;"></i> 
الملف الشخصي الذي أبحث عنه`,

  "IDTRANSLATEUSERD16":`ردود`,

  "IDTRANSLATEUSERD17":`نوع :`,

  "IDTRANSLATEUSERD18":`الفئة العمرية:`,

  "IDTRANSLATEUSERD19":`حالتها الاجتماعية:`,

  "IDTRANSLATEUSERD20":`بلد الإقامة`,

  "IDTRANSLATEUSERD21":`مدينته السكنية`,

  "IDTRANSLATEUSERD22":`عمله أو وظيفته`,

  "TIDTRANSLATEUSERD23":`على الإنترنت في`,

  "IDTRANSLATEUSERD24":`<i class="fas fa-database" style="font-size: 5vh !important; 
color: #FFB6C1;"></i> لا توجد بيانات`,

  "IDTRANSLATEUSERD25":`لا توجد بيانات`,

  "IDTRANSLATEUSERD26":`هناك خطأ.`,

  "IDTRANSLATEUSERD27":`حسابك مدين`,

  "IDTRANSLATEUSERD28":`لم يتم تحديث بياناتك.`,

  "IDTRANSLATEUSERD29":`لن تتمكن من الاتصال بالمستخدمين الآخرين إلا بعد نشر نموذج البحث الخاص بك.`,

  "IDTRANSLATEUSERD30":`هل تريد نشر إعلانك ؟`,

  "IDTRANSLATEUSERD31":`لقد استنفدت وحداتك. لم يعد بإمكانك الاتصال بالمستخدمين الآخرين.`,

  "IDTRANSLATEUSERD32":`هل تريد شراء وحدات ؟`,

  "IDTRANSLATEUSERD33":`اتفقنا`,

  "IDTRANSLATEUSERD34":`قم بزيارة ملفه الشخصي!`,

  "IDTRANSLATEUSERD35":`<i class="bi bi-eye" style="color: white;"></i> انقر للعرض.`,

  "texteIDTRANSLATEUSERD24YX": "عبر الإنترنت",

  "myNameIDwallet":"سحب عمولاتك.",

  "MYEWALLETID":`<i class="fa fa-align-left"></i>محفظتي`,

  "MYEWALLETID1":"الرصيد الإجمالي", 

  "comeBackId":"عودة",

  "idTogetwallet":"سحب أرباحك",

  "HISTORYISMY":"تاريخية",

  "IDTRANSLATEWALLETU":"جارية",

  "IDTRANSLATEWALLETX":"دفع",

  "IDTRANSLATEWALLET":"أنا آسف -",

  "IDTRANSLATEWALLETM":"فشل نقلك. الرجاء معاودة المحاولة في وقت لاحق",

  "IDTRANSLATEWALLET1":"تهانينا!",

  "IDTRANSLATEWALLET2":"لقد كان نقلك ناجحاً",

  "TITLEWALLETID": "المحفظة الإلكترونية",

  "IDTRANSLATEFOEMXX": "يرجى إدخال الحروف فقط، والأرقام غير مسموح بها في هذا المجال.",

  "linkInput": "نسخ الرابط التابع الخاص بك هنا",

  "TERMINATOR" :"انتهى",

  "PHOTOID" :"صورة",

  "TERMINATORW" :"انتهى الأمر",

  "PHOTOIDW" :"صورة",

  "STEPS14":"الخطوة 1-4",

  "STEPS23":"الخطوة 2 - 4",

  "STEPS34":"الخطوة 3 - 4",

  "STEPS44":"الخطوة 4 - 4",

  "IDTRANSLATEPROFIL29FILE" :"هل ترغب في إرسال هذه الصورة ؟", 

  "IDTRANSLATEPROFIL29FILE1" :"عودة",

  "IDTRANSLATEPROFIL29FILE2" :"نعم",

  "IDTRANSLATESIGNUP19OPTIONSERROR" :"حدث خطأ عند الطلبتحديد الموقع الجغرافي.",

  "IDTRANSLATESIGNUP19OPTIONS" :" نأسف لإبلاغك أنه لا يمكنك استخدام خدماتنا حتى يتم قبول تحديد موقعك الجغرافي.",

  "IDTRANSLATESIALERT1" :"معلومة",

  "IDTRANSLATESIALERT2" :"أعزائي الزوار، من أجل ضمان سلامتك ومحاربة الإعلانات المزيفة، يحدد illicolove بلد إقامتك.",

  "IDTRANSLATESIALERT3" :"نعم، أقبل!",

  "IDTRANSLATESIALERT4" :"رفض",

  "CONTRACTID1":`اتفاقية الانتساب`,

  "CONTRACTID2":`      بين: illicolove، يشار إليه فيما يلي باسم «موقع التأريخ»، و: أنا ، يشار إليه فيما بعد باسم «المنتسب»".`,

  "CONTRACTID3":`الغرض`,

  "CONTRACTID4":`الغرض من اتفاق الانتساب هذا هو تنظيم العلاقة بين illicolove والشركة التابعة فيما يتعلق بالبرنامج المنتسب لموقع المواعدة<a 
href="https://illicolove.com">illicolove.com</a>`,

  "CONTRACTID5":`1. البرنامج التابع`,

  "CONTRACTID6":`تدير Illicolove برنامجًا تابعًا عبر الإنترنت للترويج لخدمات المواعدة الخاصة بها.`,

  "CONTRACTID7":`2. مهمة الشريك`,

  "CONTRACTID8":`تتعهد الشركة المنتسبة بالترويج لخدمات موقع المواعدة باستخدام روابط فرعية فريدة مقدمة من illicolove، بالإضافة إلى وسائل ترويجية أخرى معتمدة من قبل 
الموقع.`,

  "CONTRACTID9":`3. أجر الشركة المنتسبة`,

  "CONTRACTID10":`3.1. ستتلقى الشركة التابعة عمولة قدرها 100 فرنك أفريقي لكل عضو جديد يسجل في الموقع<ahref="https://illicolove.com">illicolove.com</a> عبر رابط الانتساب الفريد للشركة التابعة وتنشر إعلان بحث عن الحب.`,

  "CONTRACTID11":`3.2. بالإضافة إلى ذلك، ستتلقى الشركة التابعة عمولة بنسبة 10٪ على كل عملية شراء يقوم بها الأعضاء المحالين عبر الرابط التابع لها.`,

  "CONTRACTID11X":`3.3 سيتم استلام عمولة 100 فرنك سي إف إيه فقط عندما يقوم العضو الجديد بشراء وحدة تزيد عن 100 فرنك سي إف إيه، وذلك لتجنب الاحتيال فيما يتعلق 
بالعمولة."`,

  "CONTRACTID12":`4. مدفوعات العمولة`,

  "CONTRACTID13":`إيليكولوف ستسد العمولة المرتبطة بالشريك بانتظام ربع سنوي عند الطلب عبر الدفع المحمول أو التحويل المصرفي، وفقًا لاختيار الشريك. تُكاليف الإرسال تقع على عاتق الشريك`,

  "CONTRACTID14":`5. مدة العقد`,

  "CONTRACTID15":`سيدخل عقد الانتساب هذا حيز التنفيذ في تاريخ انعقاده
ويظل ساري المفعول حتى ينهيه أي من الطرفين، رهنا بإشعار خطي مدته ثلاثون (30) يوما.`,

  "CONTRACTID16":`6. إنهاء الخدمة`,

  "CONTRACTID17":`يجوز لشركة Illicolove أو الشركة المنتسبة إنهاء هذا الاتفاق في أي وقت بتقديم إشعار خطي إلى الطرف الآخر. تُدفع أي عمولة غير مدفوعة وفقًا لشروط هذا 
العقد.`,

  "CONTRACTID18":`7. القانون المنطبق`,

  "CONTRACTID19":`ويخضع هذا العقد لقوانين بنن، ويخضع أي نزاع ينشأ عن هذا العقد، إذا لم تتم تسويته وديا، للاختصاص الحصري لمحكمة كوتونو التجارية.`,

  "ANNONCEAFFILIATEID" : `        <div class="box--list__items">
  <div class="box--list__item" style="  padding-top: 0 !important; margin-top: 0 !
important;">
      <h2 class="box--list__title box--list__titlex" >كسب المال من خلال مساعدة الناس على العثور على الحب على 
illicolove!</h2>
      <p class="box--list__description">هل تبحث عن فرصة انتساب مربحة ؟ انضم إلى برنامج الشركة التابعة الفريد الخاص بنا وزد دخلك من خلال مساعدة 
الآخرين في العثور على توأم روحهم. إليك كيفية عملها: <br>
        ✅ احصل على 100 فرنك أفريقي لكل عضو جديد يقوم بالتسجيل ونشر إعلان بحث عن الحب على موقعنا عبر رابط الشركة التابعة لك. <br>

        ✅ بالإضافة إلى ذلك، احصل على عمولة بنسبة 10٪ على كل عملية شراء تحيل إليها. كلما أنفقوا أكثر، كلما كسبت أكثر!</p>
  </div>
  
  <div class="box--list__item">
      <h2 class="box--list__title box--list__titlex"> لماذا تختار البرنامج التابع لنا ؟</h2>
      <div class="box--list__description">
        ✅ كسب المال بمجرد تسجيل شخص ما ونشر إعلان البحث الخاص به.<br>
        ✅ احصل على عمولة مستمرة في كل مرة تقوم فيها الشركات التابعة لك بعملية شراء على موقعنا. <br>
        ✅ استهدف جمهورًا يبحث عن الحب، مكانة مثيرة ومتنامية باستمرار.<br>
        
      </div>
  </div>
  
  <div class="box--list__item">
      <h2 class="box--list__title"> انضم إلى برنامجنا</h2>
      <div class="box--list__description">✅  انضم إلى البرنامج التابع لنا اليوم وابدأ في كسب المال من خلال مساعدة الناس على العثور على الحب على 
illicolove! 💑
        
       </div>
  </div>
  <div class="box--list__item">
    <h2 class="box--list__title"> قم بالتسجيل.</h2>
    <div class="box--list__description"> 
      ✅ قم بالتسجيل الآن ورفع إيراداتك: <a href="./v/login/signup.html">تسجيل</a>
        
      لأي أسئلة، اتصل بنا على info@illicolove.com</div>
</div>
</div>`,
    "IDTRANSLATE6WX":`اللغات <span> <i class="bi bi-globe2"></i></span> <i class="bi bi-
chevron-down"></i> `,
  }

      }
    }
  }, function(err, t) {
    // Traduire le contenu de la page après initialisation de i18next
    translatePage();
  });

  // Fonction pour traduire le contenu de la page
  function translatePage() {
    $("#IDTRANSLATE1").text(i18next.t("IDTRANSLATE1"));
    $("#IDTRANSLATE2").text(i18next.t("IDTRANSLATE2"));
    $("#IDTRANSLATE3").text(i18next.t("IDTRANSLATE3"));
    $("#IDTRANSLATE4").text(i18next.t("IDTRANSLATE4"));
    $("#IDTRANSLATE5").text(i18next.t("IDTRANSLATE5"));
    $("#IDTRANSLATE6").text(i18next.t("IDTRANSLATE6")); 
    $("#IDTRANSLATE6X").text(i18next.t("IDTRANSLATE6X"));
    $("#IDTRANSLATE6XV").text(i18next.t("IDTRANSLATE6X"));
    $("#IDTRANSLATE7").text(i18next.t("IDTRANSLATE7"));
    $("#IDTRANSLATE2KTI").text(i18next.t("IDTRANSLATE7"));
    $("#IDTRANSLATE8").text(i18next.t("IDTRANSLATE8"));
    $("#IDTRANSLATE9").text(i18next.t("IDTRANSLATE9"));

    $("#IDTRANSLATE1K").text(i18next.t("IDTRANSLATE1"));
    $("#IDTRANSLATE2K").text(i18next.t("IDTRANSLATE2"));
    $("#IDTRANSLATE3K").text(i18next.t("IDTRANSLATE3"));
    $("#IDTRANSLATE4K").text(i18next.t("IDTRANSLATE4"));
    $("#IDTRANSLATE5K").text(i18next.t("IDTRANSLATE5"));
    $("#IDTRANSLATE6K").text(i18next.t("IDTRANSLATE6"));
    $("#IDTRANSLATE7K").text(i18next.t("IDTRANSLATE7"));
    $("#IDTRANSLATE8K").text(i18next.t("IDTRANSLATE8"));
    $("#IDTRANSLATE9K").text(i18next.t("IDTRANSLATE9"));

    $("#IDTRANSLATE10").text(i18next.t("IDTRANSLATE10"));
    $("#IDTRANSLATE11").text(i18next.t("IDTRANSLATE11"));
    $("#IDTRANSLATE12").text(i18next.t("IDTRANSLATE12")); 
    $("#IDTRANSLATE13KLM").text(i18next.t("IDTRANSLATE13KLM"));
    $("#IDTRANSLATE13").text(i18next.t("IDTRANSLATE13"));
    $("#IDTRANSLATE14").text(i18next.t("IDTRANSLATE14"));
    $("#IDTRANSLATETITLE").text(i18next.t("IDTRANSLATETITLE")); 
    $("#IDTRANSLATETITLEFORM").text(i18next.t("IDTRANSLATETITLEFORM")); 
    $("#IDTRANSLATE15").text(i18next.t("IDTRANSLATE15"));
    $("#IDTRANSLATE16").text(i18next.t("IDTRANSLATE16"));
    $("#IDTRANSLATE17").text(i18next.t("IDTRANSLATE17"));
    $("#IDTRANSLATE18").text(i18next.t("IDTRANSLATE18"));
    $("#IDTRANSLATE19").text(i18next.t("IDTRANSLATE19"));
    $("#IDTRANSLATE20").text(i18next.t("IDTRANSLATE20"));
    $("#IDTRANSLATE21").text(i18next.t("IDTRANSLATE21"));
    $("#IDTRANSLATE22").text(i18next.t("IDTRANSLATE22"));
    $("#IDTRANSLATE23").text(i18next.t("IDTRANSLATE23"));

    $("#IDTRANSLATE17USER").text(i18next.t("IDTRANSLATE17USER"));
    $("#IDTRANSLATE18USER").text(i18next.t("IDTRANSLATE18USER"));
    $("#IDTRANSLATE19USER").text(i18next.t("IDTRANSLATE19USER"));


    $("#IDTRANSLATE24").text(i18next.t("IDTRANSLATE24"));
    $("#IDTRANSLATE25").text(i18next.t("IDTRANSLATE25"));
    $("#IDTRANSLATE26").text(i18next.t("IDTRANSLATE26"));
    $("#IDTRANSLATE27").text(i18next.t("IDTRANSLATE27"));
    $("#IDTRANSLATE28").text(i18next.t("IDTRANSLATE28"));
    $("#IDTRANSLATE29").text(i18next.t("IDTRANSLATE29"));
    $("#IDTRANSLATE30").text(i18next.t("IDTRANSLATE30"));
    $("#IDTRANSLATE31").text(i18next.t("IDTRANSLATE31"));
    $("#IDTRANSLATE32").text(i18next.t("IDTRANSLATE32"));
    $("#IDTRANSLATE33").text(i18next.t("IDTRANSLATE33"));
    $("#IDTRANSLATE34").text(i18next.t("IDTRANSLATE34"));
    $("#IDTRANSLATE35").text(i18next.t("IDTRANSLATE35"));
    $("#IDTRANSLATE36").text(i18next.t("IDTRANSLATE36"));
    $("#IDTRANSLATE37").text(i18next.t("IDTRANSLATE37"));
    $("#IDTRANSLATE38").text(i18next.t("IDTRANSLATE38"));
    $("#IDTRANSLATE39").text(i18next.t("IDTRANSLATE39"));
    $("#IDTRANSLATE40").text(i18next.t("IDTRANSLATE40"));
    $("#IDTRANSLATE41").text(i18next.t("IDTRANSLATE41"));
    $("#IDTRANSLATE42").text(i18next.t("IDTRANSLATE42"));
    $("#IDTRANSLATECONTACT1").text(i18next.t("IDTRANSLATECONTACT1"));
    $("#IDTRANSLATECONTACT2").text(i18next.t("IDTRANSLATECONTACT2"));
    $("#IDTRANSLATECONTACT3").text(i18next.t("IDTRANSLATECONTACT3"));
    $("#IDTRANSLATECONTACT4").text(i18next.t("IDTRANSLATECONTACT4"));
    $("#IDTRANSLATECONTACT5").text(i18next.t("IDTRANSLATECONTACT5"));
    $("#IDTRANSLATECONTACT6").text(i18next.t("IDTRANSLATECONTACT6"));
    $("#IDTRANSLATE1INF1").text(i18next.t("IDTRANSLATE1INF1"));
    $("#IDTRANSLATE1INF2").text(i18next.t("IDTRANSLATE1INF2"));
    // comment ça marche ?
    $("#IDTRANSLATEX1").text(i18next.t("IDTRANSLATEX1"));
    $("#IDTRANSLATEX2").text(i18next.t("IDTRANSLATEX2"));
    $("#IDTRANSLATEX3").text(i18next.t("IDTRANSLATEX3"));
    $("#IDTRANSLATEX4").text(i18next.t("IDTRANSLATEX4"));
    $("#IDTRANSLATEX5").text(i18next.t("IDTRANSLATEX5"));
    $("#IDTRANSLATEX6").text(i18next.t("IDTRANSLATEX6"));
    $("#IDTRANSLATEX7").text(i18next.t("IDTRANSLATEX7")); 
    $("#IDTRANSLATEX8").text(i18next.t("IDTRANSLATEX8")); 
    $("#TOCLOSEMODALID").text(i18next.t("TOCLOSEMODALID")); 
    $("#toopenPUAID").text(i18next.t("toopenPUAID"));
    $("#openPUA").text(i18next.t("openPUA"));
    $("#IDTRANSLATEX9").text(i18next.t("IDTRANSLATEX9"));
    $("#IDTRANSLATEX10").text(i18next.t("IDTRANSLATEX10"));
    $("#IDTRANSLATEX11").text(i18next.t("IDTRANSLATEX11"));
    $("#IDTRANSLATEX12").text(i18next.t("IDTRANSLATEX12"));
    $("#IDTRANSLATEX13").text(i18next.t("IDTRANSLATEX13"));
    $("#IDTRANSLATEX14").text(i18next.t("IDTRANSLATEX14"));
    // F.A.Q
    $("#IDTRANSLATEX15").text(i18next.t("IDTRANSLATEX15"));
    $("#IDTRANSLATEX16").text(i18next.t("IDTRANSLATEX16"));
    $("#IDTRANSLATEX17").text(i18next.t("IDTRANSLATEX17"));
    $("#IDTRANSLATEX18").text(i18next.t("IDTRANSLATEX18"));
    $("#IDTRANSLATEX19").text(i18next.t("IDTRANSLATEX19"));
    $("#IDTRANSLATEX20").text(i18next.t("IDTRANSLATEX20"));
    $("#IDTRANSLATEX21").text(i18next.t("IDTRANSLATEX21"));
    $("#IDTRANSLATEX22").text(i18next.t("IDTRANSLATEX22"));
    $("#IDTRANSLATEX23").text(i18next.t("IDTRANSLATEX23"));
    $("#IDTRANSLATEX24").text(i18next.t("IDTRANSLATEX24"));
    $("#IDTRANSLATEX25").text(i18next.t("IDTRANSLATEX25"));
    $("#IDTRANSLATEX26").text(i18next.t("IDTRANSLATEX26"));
    $("#IDTRANSLATEX27").text(i18next.t("IDTRANSLATEX27"));
    $("#IDTRANSLATEX28").text(i18next.t("IDTRANSLATEX28"));
    $("#IDTRANSLATEX29").text(i18next.t("IDTRANSLATEX29"));
    $("#IDTRANSLATEX30").text(i18next.t("IDTRANSLATEX30"));
    $("#IDTRANSLATEX31").text(i18next.t("IDTRANSLATEX31"));
    $("#IDTRANSLATEX32").text(i18next.t("IDTRANSLATEX32"));
    $("#IDTRANSLATEX33").text(i18next.t("IDTRANSLATEX33"));
    $("#IDTRANSLATEX34").text(i18next.t("IDTRANSLATEX34"));
    $("#IDTRANSLATEX35").text(i18next.t("IDTRANSLATEX35"));
    $("#IDTRANSLATEX36").text(i18next.t("IDTRANSLATEX36"));
    $("#IDTRANSLATEX37").text(i18next.t("IDTRANSLATEX37"));
    $("#IDTRANSLATEX38").text(i18next.t("IDTRANSLATEX38"));
    $("#IDTRANSLATEX39").text(i18next.t("IDTRANSLATEX39"));
    $("#IDTRANSLATEX40").text(i18next.t("IDTRANSLATEX40"));
    $("#IDTRANSLATEX41").text(i18next.t("IDTRANSLATEX41"));
    $("#IDTRANSLATEX42").text(i18next.t("IDTRANSLATEX42"));
    $("#IDTRANSLATEX43").text(i18next.t("IDTRANSLATEX43"));
    $("#IDTRANSLATEX44").text(i18next.t("IDTRANSLATEX44"));
    $("#IDTRANSLATEX45").text(i18next.t("IDTRANSLATEX45"));
    $("#IDTRANSLATEX46").text(i18next.t("IDTRANSLATEX46"));
    $("#IDTRANSLATEX47").text(i18next.t("IDTRANSLATEX47"));
    $("#IDTRANSLATEX48").text(i18next.t("IDTRANSLATEX48"));
    $("#IDTRANSLATEX49").text(i18next.t("IDTRANSLATEX49"));
    $("#IDTRANSLATEX50").text(i18next.t("IDTRANSLATEX50"));
    $("#IDTRANSLATEX51").text(i18next.t("IDTRANSLATEX51"));
    $("#IDTRANSLATEX52").text(i18next.t("IDTRANSLATEX52"));
    // TERMES TE CONDITIONS
    $("#IDTRANSLATETCU1").text(i18next.t("IDTRANSLATETCU1"));
    $("#IDTRANSLATETCU2").text(i18next.t("IDTRANSLATETCU2"));
    $("#IDTRANSLATETCU3").text(i18next.t("IDTRANSLATETCU3"));
    $("#IDTRANSLATETCU4").text(i18next.t("IDTRANSLATETCU4"));
    $("#IDTRANSLATETCU5").text(i18next.t("IDTRANSLATETCU5"));
    $("#IDTRANSLATETCU6").text(i18next.t("IDTRANSLATETCU6"));
    $("#IDTRANSLATETCU7").text(i18next.t("IDTRANSLATETCU7"));
    $("#IDTRANSLATETCU8").text(i18next.t("IDTRANSLATETCU8"));
    $("#IDTRANSLATETCU9").text(i18next.t("IDTRANSLATETCU9"));
    $("#IDTRANSLATETCU10").text(i18next.t("IDTRANSLATETCU10")); 
    $("#IDTRANSLATETCU11").text(i18next.t("IDTRANSLATETCU11"));
    $("#IDTRANSLATETCU11X").text(i18next.t("IDTRANSLATETCU11X"));
    $("#IDTRANSLATETCU12").text(i18next.t("IDTRANSLATETCU12"));
    $("#IDTRANSLATETCU13").text(i18next.t("IDTRANSLATETCU13"));
    $("#IDTRANSLATETCU14").text(i18next.t("IDTRANSLATETCU14"));
    $("#IDTRANSLATETCU15").text(i18next.t("IDTRANSLATETCU15"));
    $("#IDTRANSLATETCU16").text(i18next.t("IDTRANSLATETCU16"));
    $("#IDTRANSLATETCU17").text(i18next.t("IDTRANSLATETCU17"));
    $("#IDTRANSLATETCU18").text(i18next.t("IDTRANSLATETCU18"));
    $("#IDTRANSLATETCU19").text(i18next.t("IDTRANSLATETCU19"));
    $("#IDTRANSLATETCU20").text(i18next.t("IDTRANSLATETCU20"));
    $("#IDTRANSLATETCU21").text(i18next.t("IDTRANSLATETCU21"));
    $("#IDTRANSLATETCU22").text(i18next.t("IDTRANSLATETCU22"));
    $("#IDTRANSLATETCU23").text(i18next.t("IDTRANSLATETCU23"));
    $("#IDTRANSLATETCU24").text(i18next.t("IDTRANSLATETCU24"));
    $("#IDTRANSLATETCU25").text(i18next.t("IDTRANSLATETCU25"));
    $("#IDTRANSLATETCU26").text(i18next.t("IDTRANSLATETCU26"));
    $("#IDTRANSLATETCU27").html(i18next.t("IDTRANSLATETCU27"));
    $("#IDTRANSLATETCU28").text(i18next.t("IDTRANSLATETCU28"));
    $("#IDTRANSLATETCU29").text(i18next.t("IDTRANSLATETCU29"));
    $("#IDTRANSLATETCU30").text(i18next.t("IDTRANSLATETCU30"));
    $("#IDTRANSLATETCU31").text(i18next.t("IDTRANSLATETCU31"));
    $("#IDTRANSLATETCU32").text(i18next.t("IDTRANSLATETCU32"));
    $("#IDTRANSLATETCU33").text(i18next.t("IDTRANSLATETCU33"));
    $("#IDTRANSLATETCU34").text(i18next.t("IDTRANSLATETCU34"));
    $("#IDTRANSLATETCU35").text(i18next.t("IDTRANSLATETCU35"));
    $("#IDTRANSLATETCU36").text(i18next.t("IDTRANSLATETCU36"));
    $("#IDTRANSLATETCU37").text(i18next.t("IDTRANSLATETCU37"));
    $("#IDTRANSLATETCU38").text(i18next.t("IDTRANSLATETCU38"));
    $("#IDTRANSLATETCU39").text(i18next.t("IDTRANSLATETCU39"));
    $("#IDTRANSLATETCU40").text(i18next.t("IDTRANSLATETCU40"));
    $("#IDTRANSLATETCU41").text(i18next.t("IDTRANSLATETCU41"));
    $("#IDTRANSLATETCU42").text(i18next.t("IDTRANSLATETCU42"));
    $("#IDTRANSLATETCU43").text(i18next.t("IDTRANSLATETCU43"));
    $("#IDTRANSLATETCU44").text(i18next.t("IDTRANSLATETCU44"));
    $("#IDTRANSLATETCU45").text(i18next.t("IDTRANSLATETCU45"));
    $("#IDTRANSLATETCU46").text(i18next.t("IDTRANSLATETCU46"));
    $("#IDTRANSLATETCU47").text(i18next.t("IDTRANSLATETCU47"));
    $("#IDTRANSLATETCU48").text(i18next.t("IDTRANSLATETCU48"));
    $("#IDTRANSLATETCU49").text(i18next.t("IDTRANSLATETCU49"));
    $("#IDTRANSLATETCU50").text(i18next.t("IDTRANSLATETCU50"));
    $("#IDTRANSLATETCU51").text(i18next.t("IDTRANSLATETCU51"));
    $("#IDTRANSLATETCU52").text(i18next.t("IDTRANSLATETCU52"));
    $("#IDTRANSLATETCU53").text(i18next.t("IDTRANSLATETCU53"));
    $("#IDTRANSLATETCU54").text(i18next.t("IDTRANSLATETCU54"));
    $("#IDTRANSLATETCU55").text(i18next.t("IDTRANSLATETCU55"));
    $("#IDTRANSLATETCU56").text(i18next.t("IDTRANSLATETCU56"));
    $("#IDTRANSLATETCU57").text(i18next.t("IDTRANSLATETCU57"));
    $("#IDTRANSLATETCU58").text(i18next.t("IDTRANSLATETCU58"));
    $("#IDTRANSLATETCU59").text(i18next.t("IDTRANSLATETCU59"));
    $("#IDTRANSLATETCU60").text(i18next.t("IDTRANSLATETCU60"));
    // POLITIQUE DE CONFIDENTIALIT2
    $("#IDTRANSLATEPC1").text(i18next.t("IDTRANSLATEPC1"));
    $("#IDTRANSLATEPC2").text(i18next.t("IDTRANSLATEPC2"));
    $("#IDTRANSLATEPC3").text(i18next.t("IDTRANSLATEPC3"));
    $("#IDTRANSLATEPC4").text(i18next.t("IDTRANSLATEPC4"));
    $("#IDTRANSLATEPC5").text(i18next.t("IDTRANSLATEPC5"));
    $("#IDTRANSLATEPC6").text(i18next.t("IDTRANSLATEPC6"));
    $("#IDTRANSLATEPC7").text(i18next.t("IDTRANSLATEPC7"));
    $("#IDTRANSLATEPC8").text(i18next.t("IDTRANSLATEPC8"));
    $("#IDTRANSLATEPC9").text(i18next.t("IDTRANSLATEPC9"));
    $("#IDTRANSLATEPC10").text(i18next.t("IDTRANSLATEPC10")); 
    $("#IDTRANSLATEPC11").text(i18next.t("IDTRANSLATEPC11"));
    $("#IDTRANSLATEPC11X").text(i18next.t("IDTRANSLATEPC11X"));
    $("#IDTRANSLATEPC12").text(i18next.t("IDTRANSLATEPC12"));
    $("#IDTRANSLATEPC13").text(i18next.t("IDTRANSLATEPC13"));
    $("#IDTRANSLATEPC14").text(i18next.t("IDTRANSLATEPC14"));
    $("#IDTRANSLATEPC15").text(i18next.t("IDTRANSLATEPC15"));
    $("#IDTRANSLATEPC16").text(i18next.t("IDTRANSLATEPC16"));
    $("#IDTRANSLATEPC17").text(i18next.t("IDTRANSLATEPC17"));
    $("#IDTRANSLATEPC18").text(i18next.t("IDTRANSLATEPC18"));
    $("#IDTRANSLATEPC19").text(i18next.t("IDTRANSLATEPC19"));
    $("#IDTRANSLATEPC20").text(i18next.t("IDTRANSLATEPC20"));
    $("#IDTRANSLATEPC21").text(i18next.t("IDTRANSLATEPC21"));
    $("#IDTRANSLATEPC22").text(i18next.t("IDTRANSLATEPC22"));
    $("#IDTRANSLATEPC23").text(i18next.t("IDTRANSLATEPC23"));
    $("#IDTRANSLATEPC24").text(i18next.t("IDTRANSLATEPC24"));
    $("#IDTRANSLATEPC25").text(i18next.t("IDTRANSLATEPC25"));
    $("#IDTRANSLATEPC26").text(i18next.t("IDTRANSLATEPC26"));
    $("#IDTRANSLATEPC27").text(i18next.t("IDTRANSLATEPC27"));
    $("#IDTRANSLATEPC28").text(i18next.t("IDTRANSLATEPC28"));
    $("#IDTRANSLATEPC29").text(i18next.t("IDTRANSLATEPC29"));
    $("#IDTRANSLATEPC30").text(i18next.t("IDTRANSLATEPC30"));
    $("#IDTRANSLATEPC31").text(i18next.t("IDTRANSLATEPC31"));
    $("#IDTRANSLATEPC32").text(i18next.t("IDTRANSLATEPC32"));
    $("#IDTRANSLATEPC33").text(i18next.t("IDTRANSLATEPC33"));
    $("#IDTRANSLATEPC34").text(i18next.t("IDTRANSLATEPC34"));
    $("#IDTRANSLATEPC35").text(i18next.t("IDTRANSLATEPC35"));
    // CONSULTE PAGE
    $("#IDTRANSLATECONSULTE1").text(i18next.t("IDTRANSLATECONSULTE1"));
    $("#IDTRANSLATECONSULTE2").text(i18next.t("IDTRANSLATECONSULTE2"));
    $("#IDTRANSLATECONSULTE3").text(i18next.t("IDTRANSLATECONSULTE3"));
    // PROFIL PAGE
    $("#IDTRANSLATEPROFIL1").text(i18next.t("IDTRANSLATEPROFIL1"));
    $("#IDTRANSLATEPROFIL2").text(i18next.t("IDTRANSLATEPROFIL2"));
    $("#IDTRANSLATEPROFIL3").text(i18next.t("IDTRANSLATEPROFIL3"));
    $("#IDTRANSLATEPROFIL4").text(i18next.t("IDTRANSLATEPROFIL4"));
    $("#IDTRANSLATEPROFIL5").text(i18next.t("IDTRANSLATEPROFIL5"));
    $("#IDTRANSLATEPROFIL6").text(i18next.t("IDTRANSLATEPROFIL6"));
    $("#IDTRANSLATEPROFIL7").text(i18next.t("IDTRANSLATEPROFIL7"));
    $("#myNameIDX").text(i18next.t("myNameIDX")); 
    $("#myBtn").text(i18next.t("myBtn"));
    $("#myBtn2").text(i18next.t("myBtn2"));
    $("#CONSULTEZLESANNONCES").text(i18next.t("CONSULTEZLESANNONCES"));
    $("#IDTRANSLATEPROFIL9").text(i18next.t("IDTRANSLATEPROFIL9"));
    $("#IDTRANSLATEPROFIL10").text(i18next.t("IDTRANSLATEPROFIL10")); 
    $("#IDTRANSLATEPROFIL11").text(i18next.t("IDTRANSLATEPROFIL11"));
    $("#IDTRANSLATEPROFIL11X").text(i18next.t("IDTRANSLATEPROFIL11X"));
    $("#IDTRANSLATEPROFIL12").text(i18next.t("IDTRANSLATEPROFIL12")); 
    $("#IDTRANSLATEPROFIL13").text(i18next.t("IDTRANSLATEPROFIL13")); 
    $("#exampleModalLongTitle").text(i18next.t("exampleModalLongTitle"));
    $("#exampleModalLongTitleX").text(i18next.t("exampleModalLongTitleX")); 
    $("#errorSms").text(i18next.t("errorSms")); 
    $("#SmspayId").text(i18next.t("SmspayId"));
    $("#payYourUnitybtn").text(i18next.t("payYourUnitybtn")); 
    $("#payYourUnitybtnd").text(i18next.t("payYourUnitybtn"));
    $("#CHOISEYOURPAIEMENT").text(i18next.t("CHOISEYOURPAIEMENT"));
    $("#IDTRANSLATEPROFIL14").text(i18next.t("IDTRANSLATEPROFIL14"));
    $("#IDTRANSLATEPROFIL15").text(i18next.t("IDTRANSLATEPROFIL15"));
    $("#IDTRANSLATEPROFIL16").text(i18next.t("IDTRANSLATEPROFIL16"));
    $("#IDTRANSLATEPROFIL17").text(i18next.t("IDTRANSLATEPROFIL17"));
    $("#IDTRANSLATEPROFIL18").text(i18next.t("IDTRANSLATEPROFIL18"));
    $("#IDTRANSLATEPROFIL19").text(i18next.t("IDTRANSLATEPROFIL19"));
    $("#IDTRANSLATEPROFIL20").text(i18next.t("IDTRANSLATEPROFIL20"));
    $("#IDTRANSLATEPROFIL21").text(i18next.t("IDTRANSLATEPROFIL21"));
    $("#IDTRANSLATEPROFIL22").text(i18next.t("IDTRANSLATEPROFIL22"));
    $("#IDTRANSLATEPROFIL23").text(i18next.t("IDTRANSLATEPROFIL23"));
    $("#IDTRANSLATEPROFIL24").text(i18next.t("IDTRANSLATEPROFIL24"));  
    $("#exampleFormControlInput1").attr("placeholder", i18next.t("IDTRANSLATEPROFIL27"));
    $("#payYourUnity").attr("placeholder", i18next.t("payYourUnity"));
    $("#IDTRANSLATEPROFIL17").val(i18next.t("IDTRANSLATEPROFIL17"));
    $("#IDTRANSLATEPROFIL18").val(i18next.t("IDTRANSLATEPROFIL18"));
    $("#IDTRANSLATEPROFIL19").val(i18next.t("IDTRANSLATEPROFIL19"));
    $("#IDTRANSLATEPROFIL20").val(i18next.t("IDTRANSLATEPROFIL20"));
    $("#IDTRANSLATEPROFIL21").val(i18next.t("IDTRANSLATEPROFIL21"));
    $("#IDTRANSLATEPROFIL22").val(i18next.t("IDTRANSLATEPROFIL22"));
    $("#IDTRANSLATEPROFIL23").val(i18next.t("IDTRANSLATEPROFIL23"));
    $("#IDTRANSLATEPROFIL24").val(i18next.t("IDTRANSLATEPROFIL24")); 
    $("#IDTRANSLATEPROFIL25").val(i18next.t("IDTRANSLATEPROFIL25"));
    $("#submitFormID").val(i18next.t("submitFormID"));
    $("#IDTRANSLATEPROFIL25").text(i18next.t("IDTRANSLATEPROFIL25")); 
    $("#btnSecureAccount").text(i18next.t("IDTRANSLATEPROFIL26")); 
    $("#IDTRANSLATEPROFIL28").text(i18next.t("IDTRANSLATEPROFIL28"));
    $("#IDTRANSLATEPROFIL29").text(i18next.t("IDTRANSLATEPROFIL29"));
    $("#IDTRANSLATEPROFIL30").text(i18next.t("IDTRANSLATEPROFIL30"));
    $("#IDTRANSLATEPROFIL30W").text(i18next.t("IDTRANSLATEPROFIL30W"));
    $("#IDTRANSLATEPROFIL31").text(i18next.t("IDTRANSLATEPROFIL31"));
    $("#IDTRANSLATEPROFIL32").text(i18next.t("IDTRANSLATEPROFIL32"));
    $("#IDTRANSLATEPROFIL33").text(i18next.t("IDTRANSLATEPROFIL33"));
    $("#IDTRANSLATEPROFIL34").text(i18next.t("IDTRANSLATEPROFIL34"));
    $("#IDTRANSLATEPROFIL35").text(i18next.t("IDTRANSLATEPROFIL35"));
    $("#IDTRANSLATEPROFIL36").text(i18next.t("IDTRANSLATEPROFIL36"));
    $("#IDTRANSLATEPROFIL37").text(i18next.t("IDTRANSLATEPROFIL37"));
    $("#IDTRANSLATEPROFIL38").text(i18next.t("IDTRANSLATEPROFIL38"));
    $("#IDTRANSLATEPROFIL39").text(i18next.t("IDTRANSLATEPROFIL39"));
    $("#IDTRANSLATEPROFIL40").text(i18next.t("IDTRANSLATEPROFIL40"));
    $("#IDTRANSLATEPROFIL41").text(i18next.t("IDTRANSLATEPROFIL41"));

    $("#IDTRANSLATEPROFIL38X").text(i18next.t("IDTRANSLATEPROFIL38X"));
    $("#IDTRANSLATEPROFIL39X").text(i18next.t("IDTRANSLATEPROFIL39X"));
    $("#IDTRANSLATEPROFIL40X").text(i18next.t("IDTRANSLATEPROFIL40X"));
    $("#IDTRANSLATEPROFIL41X").text(i18next.t("IDTRANSLATEPROFIL41X"));

    $("#IDTRANSLATEPROFIL42").text(i18next.t("IDTRANSLATEPROFIL42"));
    $("#IDTRANSLATEPROFIL42Q").text(i18next.t("IDTRANSLATEPROFIL42Q"));
    $("#IDTRANSLATEPROFIL42QX").text(i18next.t("IDTRANSLATEPROFIL42QX"));
    $("#IDTRANSLATEPROFIL43").text(i18next.t("IDTRANSLATEPROFIL43"));
    $("#IDTRANSLATEPROFIL44").text(i18next.t("IDTRANSLATEPROFIL44"));
    $("#IDTRANSLATEPROFIL44IN").text(i18next.t("IDTRANSLATEPROFIL44IN"));
    $("#IDTRANSLATEPROFIL45").text(i18next.t("IDTRANSLATEPROFIL45"));
    $("#IDTRANSLATEFORM112").text(i18next.t("IDTRANSLATEFORM112"));
    $("#IDTRANSLATEPROFIL46").text(i18next.t("IDTRANSLATEPROFIL46"));
    $("#IDTRANSLATEPROFIL47").text(i18next.t("IDTRANSLATEPROFIL47"));
    $("#IDTRANSLATEPROFIL48").text(i18next.t("IDTRANSLATEPROFIL48"));
    $("#IDTRANSLATEPROFIL49").text(i18next.t("IDTRANSLATEPROFIL49"));
    $("#IDTRANSLATEPROFIL50").text(i18next.t("IDTRANSLATEPROFIL50"));
    $("#IDTRANSLATEPROFIL51").text(i18next.t("IDTRANSLATEPROFIL51"));
    //LOGIN PAGE
    $("#IDTRANSLATELOGIN1").text(i18next.t("IDTRANSLATELOGIN1"));
    $("#IDTRANSLATELOGIN2").text(i18next.t("IDTRANSLATELOGIN2"));
    $("#email").attr("placeholder", i18next.t("IDTRANSLATELOGIN3"));
    $("#IDTRANSLATELOGIN4").text(i18next.t("IDTRANSLATELOGIN4"));
    $("#password").attr("placeholder", i18next.t("IDTRANSLATELOGIN5"));
    $("#IDTRANSLATELOGIN6").text(i18next.t("IDTRANSLATELOGIN6"));
    $("#IDTRANSLATELOGIN7").text(i18next.t("IDTRANSLATELOGIN7"));
    $("#IDTRANSLATELOGIN8").text(i18next.t("IDTRANSLATELOGIN8"));
    $("#IDTRANSLATELOGIN9").text(i18next.t("IDTRANSLATELOGIN9"));
    $("#IDTRANSLATELOGIN10").val(i18next.t("IDTRANSLATELOGIN10"));
    $("#IDTRANSLATELOGIN11").text(i18next.t("IDTRANSLATELOGIN11"));
    $("#IDTRANSLATELOGIN12").text(i18next.t("IDTRANSLATELOGIN12"));
    $("#IDTRANSLATELOGIN13").text(i18next.t("IDTRANSLATELOGIN13"));
    $("#IDTRANSLATELOGIN14").text(i18next.t("IDTRANSLATELOGIN14"));
    $("#IDTRANSLATELOGIN15").text(i18next.t("IDTRANSLATELOGIN15"));
    $("#IDTRANSLATELOGIN16").text(i18next.t("IDTRANSLATELOGIN16")); 
     //SIGN UP PAGE
    $("#IDTRANSLATESIGNUP1").text(i18next.t("IDTRANSLATESIGNUP1"));
    $("#toSignupID").val(i18next.t("IDTRANSLATESIGNUP1"));
    $("#IDTRANSLATESIGNUP2").text(i18next.t("IDTRANSLATESIGNUP2"));
    $("#username").attr("placeholder", i18next.t("IDTRANSLATESIGNUP3"));
    $("#IDTRANSLATESIGNUP4").text(i18next.t("IDTRANSLATESIGNUP4"));
    $("#name").attr("placeholder", i18next.t("IDTRANSLATESIGNUP5"));
    $("#IDTRANSLATESIGNUP6").text(i18next.t("IDTRANSLATESIGNUP6"));
    $("#email").attr("placeholder", i18next.t("IDTRANSLATESIGNUP7"));
    $("#IDTRANSLATESIGNUP8").text(i18next.t("IDTRANSLATESIGNUP8"));
    $("#password").attr("placeholder", i18next.t("IDTRANSLATESIGNUP9"));
    $("#IDTRANSLATESIGNUP10").text(i18next.t("IDTRANSLATESIGNUP10")); 
    $("#IDTRANSLATESIGNUP11").text(i18next.t("IDTRANSLATESIGNUP11"));
    $("#IDTRANSLATESIGNUP11X").text(i18next.t("IDTRANSLATESIGNUP11X"));
    $("#IDTRANSLATESIGNUP12").text(i18next.t("IDTRANSLATESIGNUP12"));
    $("#IDTRANSLATESIGNUP13").text(i18next.t("IDTRANSLATESIGNUP13"));
    $("#IDTRANSLATESIGNUP14").text(i18next.t("IDTRANSLATESIGNUP14"));
    $("#IDTRANSLATESIGNUP15").text(i18next.t("IDTRANSLATESIGNUP15"));
    $("#IDTRANSLATESIGNUP16").text(i18next.t("IDTRANSLATESIGNUP16"));
    $("#IDTRANSLATESIGNUP17").text(i18next.t("IDTRANSLATESIGNUP17"));
    $("#IDTRANSLATESIGNUP18").text(i18next.t("IDTRANSLATESIGNUP18"));
    $("#IDTRANSLATESIGNUP19").text(i18next.t("IDTRANSLATESIGNUP19"));
    $("#IDTRANSLATESIGNUP19PHONE").text(i18next.t("IDTRANSLATESIGNUP19PHONE"));
    $("#IDTRANSLATESIGNUP19PHONEX").text(i18next.t("IDTRANSLATESIGNUP19PHONEX"));
    //FORGET PAGE
    $("#IDTRANSLATEFORGET1").text(i18next.t("IDTRANSLATEFORGET1"));
    $("#IDTRANSLATEFORGET2").text(i18next.t("IDTRANSLATEFORGET2"));
    $("#email").attr("placeholder", i18next.t("IDTRANSLATEFORGET3"));
    $("#IDTRANSLATEFORGET4").val(i18next.t("IDTRANSLATEFORGET4"));
    $("#IDTRANSLATEFORGET5").text(i18next.t("IDTRANSLATEFORGET5"));
    $("#IDTRANSLATEFORGET6").text(i18next.t("IDTRANSLATEFORGET6"));
    $("#IDTRANSLATEFORGET7").text(i18next.t("IDTRANSLATEFORGET7"));
    $("#IDTRANSLATEFORGET8").text(i18next.t("IDTRANSLATEFORGET8"));
    $("#IDTRANSLATEFORGET9").text(i18next.t("IDTRANSLATEFORGET9"));
    $("#IDTRANSLATEFORGET10").text(i18next.t("IDTRANSLATEFORGET10")); 
    $("#IDTRANSLATEFORGET11").text(i18next.t("IDTRANSLATEFORGET11"));
    $("#IDTRANSLATEFORGET11X").text(i18next.t("IDTRANSLATEFORGET11X"));
    $("#IDTRANSLATEFORGET12").text(i18next.t("IDTRANSLATEFORGET12"));
    $("#IDTRANSLATEFORGET13").text(i18next.t("IDTRANSLATEFORGET13"));
    $("#IDTRANSLATEFORGET14").text(i18next.t("IDTRANSLATEFORGET14"));
    $("#IDTRANSLATEFORGET15").text(i18next.t("IDTRANSLATEFORGET15"));
    $("#IDTRANSLATEFORGET16").text(i18next.t("IDTRANSLATEFORGET16"));
    $("#IDTRANSLATEFORGET17").text(i18next.t("IDTRANSLATEFORGET17"));
    $("#IDTRANSLATEFORGET18").text(i18next.t("IDTRANSLATEFORGET18"));
    $("#IDTRANSLATEFORGET19").text(i18next.t("IDTRANSLATEFORGET19"));
    $("#IDTRANSLATEFORGET20").text(i18next.t("IDTRANSLATEFORGET20"));
    $("#IDTRANSLATEFORGET21").text(i18next.t("IDTRANSLATEFORGET21"));
    $("#IDTRANSLATEFORGET22").text(i18next.t("IDTRANSLATEFORGET22"));
    $("#IDTRANSLATEFORGET23").text(i18next.t("IDTRANSLATEFORGET23"));
    $("#IDTRANSLATEFORGET24").text(i18next.t("IDTRANSLATEFORGET24"));
    $("#IDTRANSLATEFORGET25").text(i18next.t("IDTRANSLATEFORGET25"));
    $("#IDTRANSLATEFORGET26").text(i18next.t("IDTRANSLATEFORGET26"));
    $("#IDTRANSLATEFORGET27").text(i18next.t("IDTRANSLATEFORGET27"));
    $("#IDTRANSLATEFORGET28").text(i18next.t("IDTRANSLATEFORGET28"));
    //FORM PAGE
    $("#IDTRANSLATEFORM1").text(i18next.t("IDTRANSLATEFORM1"));
    $("#IDTRANSLATEFORM1W").text(i18next.t("IDTRANSLATEFORM1W"));
    $("#IDTRANSLATEFORM2").text(i18next.t("IDTRANSLATEFORM2"));
    $("#IDTRANSLATEFORM3").text(i18next.t("IDTRANSLATEFORM3"));
    $("#IDTRANSLATEFORM4").text(i18next.t("IDTRANSLATEFORM4"));
    $("#IDTRANSLATEFORM4W").text(i18next.t("IDTRANSLATEFORM4W"));
    $("#IDTRANSLATEFORM5").text(i18next.t("IDTRANSLATEFORM5"));
    $("#IDTRANSLATEFORM6").text(i18next.t("IDTRANSLATEFORM6"));
    $("#IDTRANSLATEFORM7").text(i18next.t("IDTRANSLATEFORM7"));
    $("#IDTRANSLATEFORM8").html(i18next.t("IDTRANSLATEFORM8")); 
    $("#IDTRANSLATEFORM9").html(i18next.t("IDTRANSLATEFORM9"));
    $("#myprofileidMaVille").attr("placeholder", i18next.t("IDTRANSLATEFORM9PL"));
    $("#IDTRANSLATEFORM10").html(i18next.t("IDTRANSLATEFORM10"));
    $("#myprofileidPrénoms").attr("placeholder", i18next.t("IDTRANSLATEFORM10X"));
    $("#PageId").html(i18next.t("IDTRANSLATEFORM11"));
    $("#myprofileidâge").attr("placeholder", i18next.t("IDTRANSLATEFORM11X"));
    $("#errorMessage").html(i18next.t("IDTRANSLATEFORM12"));
    $("#IDTRANSLATEFORM13").html(i18next.t("IDTRANSLATEFORM13"));

    $("#IDTRANSLATEFORM14").text(i18next.t("IDTRANSLATEFORM14"));
    $("#IDTRANSLATEFORM14").val(i18next.t("IDTRANSLATEFORM14"));
    $("#IDTRANSLATEFORM15").text(i18next.t("IDTRANSLATEFORM15"));
    $("#IDTRANSLATEFORM15").val(i18next.t("IDTRANSLATEFORM15"));
    $("#IDTRANSLATEFORM16").text(i18next.t("IDTRANSLATEFORM16"));
    $("#IDTRANSLATEFORM16").val(i18next.t("IDTRANSLATEFORM16"));
    $("#IDTRANSLATEFORM17").text(i18next.t("IDTRANSLATEFORM17"));
    $("#IDTRANSLATEFORM17").val(i18next.t("IDTRANSLATEFORM17"));
    $("#IDTRANSLATEFORM18").text(i18next.t("IDTRANSLATEFORM18"));
    $("#IDTRANSLATEFORM18").val(i18next.t("IDTRANSLATEFORM18"));
    $("#IDTRANSLATEFORM19").text(i18next.t("IDTRANSLATEFORM19"));
    $("#IDTRANSLATEFORM19").val(i18next.t("IDTRANSLATEFORM19"));
    $("#IDTRANSLATEFORM20").text(i18next.t("IDTRANSLATEFORM20"));
    $("#IDTRANSLATEFORM20").val(i18next.t("IDTRANSLATEFORM20"));
    $("#IDTRANSLATEFORM21").text(i18next.t("IDTRANSLATEFORM21"));
    $("#IDTRANSLATEFORM21").val(i18next.t("IDTRANSLATEFORM21"));
    $("#IDTRANSLATEFORM22").text(i18next.t("IDTRANSLATEFORM22"));
    $("#IDTRANSLATEFORM22").val(i18next.t("IDTRANSLATEFORM22"));
    $("#IDTRANSLATEFORM23").text(i18next.t("IDTRANSLATEFORM23"));
    $("#IDTRANSLATEFORM23").val(i18next.t("IDTRANSLATEFORM23"));
    $("#IDTRANSLATEFORM24").text(i18next.t("IDTRANSLATEFORM24"));
    $("#IDTRANSLATEFORM24").val(i18next.t("IDTRANSLATEFORM24"));
    $("#IDTRANSLATEFORM25").text(i18next.t("IDTRANSLATEFORM25"));
    $("#IDTRANSLATEFORM25").val(i18next.t("IDTRANSLATEFORM25"));
    $("#IDTRANSLATEFORM26").text(i18next.t("IDTRANSLATEFORM26"));
    $("#IDTRANSLATEFORM26").val(i18next.t("IDTRANSLATEFORM26"));
    $("#IDTRANSLATEFORM27").text(i18next.t("IDTRANSLATEFORM27"));
    $("#IDTRANSLATEFORM27").val(i18next.t("IDTRANSLATEFORM27"));
    $("#IDTRANSLATEFORM28").text(i18next.t("IDTRANSLATEFORM28"));
    $("#IDTRANSLATEFORM28").val(i18next.t("IDTRANSLATEFORM28"));
    $("#IDTRANSLATEFORM29").text(i18next.t("IDTRANSLATEFORM29"));
    $("#IDTRANSLATEFORM29").val(i18next.t("IDTRANSLATEFORM29"));
    $("#IDTRANSLATEFORM30").text(i18next.t("IDTRANSLATEFORM30"));
    $("#IDTRANSLATEFORM30").val(i18next.t("IDTRANSLATEFORM30"));
    $("#IDTRANSLATEFORM31").text(i18next.t("IDTRANSLATEFORM31"));
    $("#IDTRANSLATEFORM31").val(i18next.t("IDTRANSLATEFORM31"));
    $("#IDTRANSLATEFORM32").text(i18next.t("IDTRANSLATEFORM32"));
    $("#IDTRANSLATEFORM32").val(i18next.t("IDTRANSLATEFORM32"));
    $("#IDTRANSLATEFORM33").text(i18next.t("IDTRANSLATEFORM33"));
    $("#IDTRANSLATEFORM33").val(i18next.t("IDTRANSLATEFORM33"));
    $("#IDTRANSLATEFORM34").text(i18next.t("IDTRANSLATEFORM34"));
    $("#IDTRANSLATEFORM34").val(i18next.t("IDTRANSLATEFORM34"));
    $("#IDTRANSLATEFORM35").text(i18next.t("IDTRANSLATEFORM35"));
    $("#IDTRANSLATEFORM35").val(i18next.t("IDTRANSLATEFORM35"));
    $("#IDTRANSLATEFORM36").text(i18next.t("IDTRANSLATEFORM36"));
    $("#IDTRANSLATEFORM37").text(i18next.t("IDTRANSLATEFORM37"));
    $("#IDTRANSLATEFORM38").html(i18next.t("IDTRANSLATEFORM38"));
    $("#IDTRANSLATEFORM39").text(i18next.t("IDTRANSLATEFORM39"));
    $("#IDTRANSLATEFORM40").text(i18next.t("IDTRANSLATEFORM40"));
    $("#IDTRANSLATEFORM41").text(i18next.t("IDTRANSLATEFORM41"));
    $("#IDTRANSLATEFORM42").text(i18next.t("IDTRANSLATEFORM42"));
    $("#IDTRANSLATEFORM43").html(i18next.t("IDTRANSLATEFORM43"));
    $("#PphoneId").html(i18next.t("IDTRANSLATEFORM44"));
    $("#errorSmsphone").html(i18next.t("IDTRANSLATEFORM45"));
    $("#IDTRANSLATEFORM46").html(i18next.t("IDTRANSLATEFORM46"));
    $("#myprofileidtravail").attr("placeholder", i18next.t("IDTRANSLATEFORM47"));
    $("#IDTRANSLATEFORM48").text(i18next.t("IDTRANSLATEFORM48"));
    $("#IDTRANSLATEFORM49").text(i18next.t("IDTRANSLATEFORM49"));
    $("#IDTRANSLATEFORM50").html(i18next.t("IDTRANSLATEFORM50"));
    $("#IDTRANSLATEFORM51").text(i18next.t("IDTRANSLATEFORM51"));
    $("#IDTRANSLATEFORM52").text(i18next.t("IDTRANSLATEFORM52"));
    $("#IDTRANSLATEFORM53").text(i18next.t("IDTRANSLATEFORM53"));
    $("#IDTRANSLATEFORM54").text(i18next.t("IDTRANSLATEFORM54"));
    $("#IDTRANSLATEFORM55").html(i18next.t("IDTRANSLATEFORM55"));
    $("#IDTRANSLATEFORM56").html(i18next.t("IDTRANSLATEFORM56"));
    $("#IDTRANSLATEFORM57").text(i18next.t("IDTRANSLATEFORM57"));
    $("#IDTRANSLATEFORM58").text(i18next.t("IDTRANSLATEFORM58"));
    $("#IDTRANSLATEFORM59").html(i18next.t("IDTRANSLATEFORM59"));
    $("#IDTRANSLATEFORM60").text(i18next.t("IDTRANSLATEFORM60"));
    $("#IDTRANSLATEFORM61").text(i18next.t("IDTRANSLATEFORM61"));
    $("#IDTRANSLATEFORM62").text(i18next.t("IDTRANSLATEFORM62"));
    $("#IDTRANSLATEFORM63").text(i18next.t("IDTRANSLATEFORM63"));
    $("#IDTRANSLATEFORM64").text(i18next.t("IDTRANSLATEFORM64"));
    $("#IDTRANSLATEFORM65").text(i18next.t("IDTRANSLATEFORM65"));
    $("#IDTRANSLATEFORM66").text(i18next.t("IDTRANSLATEFORM66"));
    $("#IDTRANSLATEFORM67").text(i18next.t("IDTRANSLATEFORM67"));
    $("#IDTRANSLATEFORM68").text(i18next.t("IDTRANSLATEFORM68"));
    $("#IDTRANSLATEFORM69").text(i18next.t("IDTRANSLATEFORM69"));
    $("#IDTRANSLATEFORM70").text(i18next.t("IDTRANSLATEFORM70"));
    $("#IDTRANSLATEFORM71").text(i18next.t("IDTRANSLATEFORM71"));
    $("#IDTRANSLATEFORM72").text(i18next.t("IDTRANSLATEFORM72"));
    $("#IDTRANSLATEFORM73").text(i18next.t("IDTRANSLATEFORM73"));
    $("#IDTRANSLATEFORM74").text(i18next.t("IDTRANSLATEFORM74"));
    $("#IDTRANSLATEFORM75").text(i18next.t("IDTRANSLATEFORM75"));
    $("#IDTRANSLATEFORM76").text(i18next.t("IDTRANSLATEFORM76"));
    $("#IDTRANSLATEFORM77").text(i18next.t("IDTRANSLATEFORM77"));
    $("#IDTRANSLATEFORM78").text(i18next.t("IDTRANSLATEFORM78"));
    $("#IDTRANSLATEFORM79").text(i18next.t("IDTRANSLATEFORM79"));
    $("#IDTRANSLATEFORM80").text(i18next.t("IDTRANSLATEFORM80"));
    $("#IDTRANSLATEFORM81").text(i18next.t("IDTRANSLATEFORM81"));
    $("#Pyhold").html(i18next.t("IDTRANSLATEFORM82"));
    $("#IDTRANSLATEFORM83").html(i18next.t("IDTRANSLATEFORM83"));
    $("#IDTRANSLATEFORM84").text(i18next.t("IDTRANSLATEFORM84"));
    $("#IDTRANSLATEFORM85").text(i18next.t("IDTRANSLATEFORM85"));
    $("#IDTRANSLATEFORM86").text(i18next.t("IDTRANSLATEFORM86"));
    $("#IDTRANSLATEFORM87").text(i18next.t("IDTRANSLATEFORM87"));
    $("#hecountries").html(i18next.t("IDTRANSLATEFORM88"));
    $("#IDTRANSLATEFORM89").html(i18next.t("IDTRANSLATEFORM89"));
    $("#myprofileidSonpays").attr("placeholder", i18next.t("IDTRANSLATEFORM90"));
    $("#getAllOption").attr("placeholder", i18next.t("IDTRANSLATEFORM91"));
    $("#IDTRANSLATEFORM92").text(i18next.t("IDTRANSLATEFORM92"));
    $("#IDTRANSLATEFORM93").text(i18next.t("IDTRANSLATEFORM93"));
    $("#TextiD").text(i18next.t("IDTRANSLATEFORM94"));
    $("#IDTRANSLATEFORM95").html(i18next.t("IDTRANSLATEFORM95"));
    $("#myprofileidSavilleID").attr("placeholder", i18next.t("IDTRANSLATEFORM96"));
    $("#IDTRANSLATEFORM97").html(i18next.t("IDTRANSLATEFORM97"));
    $("#myprofileidoccupations").attr("placeholder", i18next.t("IDTRANSLATEFORM98"));
    $("#TextiDy").text(i18next.t("IDTRANSLATEFORM99"));
    $("#myprofileidprécisions").attr("placeholder", i18next.t("IDTRANSLATEFORM100"));
    $("#myprofileidpréférences").attr("placeholder", i18next.t("IDTRANSLATEFORM10w"));
    $("#linkInput").attr("placeholder", i18next.t("linkInput"));
    $("#IDnext").val(i18next.t("IDTRANSLATEFORM101"));
    $("#firstPre").val(i18next.t("IDTRANSLATEFORM102"));
    $("#firstNext").val(i18next.t("IDTRANSLATEFORM101"));
    $("#secondtPre").val(i18next.t("IDTRANSLATEFORM102"));
    $("#secondNext").val(i18next.t("IDTRANSLATEFORM101"));
    $("#treetPre").val(i18next.t("IDTRANSLATEFORM102"));
    $("#IDsuivant").val(i18next.t("IDTRANSLATEFORM101"));
    $("#IDprevious").val(i18next.t("IDTRANSLATEFORM102"));
    $("#sunmitannonceid").val(i18next.t("IDTRANSLATEFORM103"));
    $("#IdAlertSms").html(i18next.t("IDTRANSLATEFORM104"));
    $("#IDTRANSLATEFORM105").text(i18next.t("IDTRANSLATEFORM105"));
    // USERDETAILS PAGE
    $("#IDTRANSLATEUSERD1").html(i18next.t("IDTRANSLATEUSERD1"));
    $("#IDTRANSLATEUSERD2").text(i18next.t("IDTRANSLATEUSERD2"));
    $("#IDTRANSLATEUSERD3").html(i18next.t("IDTRANSLATEUSERD3"));
    $("#IDTRANSLATEUSERD4").text(i18next.t("IDTRANSLATEUSERD4"));
    $("#IDTRANSLATEUSERD5").text(i18next.t("IDTRANSLATEUSERD5"));
    $("#IDTRANSLATEUSERD6").text(i18next.t("IDTRANSLATEUSERD6"));
    $("#IDTRANSLATEUSERD7").text(i18next.t("IDTRANSLATEUSERD7"));
    $("#IDTRANSLATEUSERD8").text(i18next.t("IDTRANSLATEUSERD8"));
    $("#IDTRANSLATEUSERD9").text(i18next.t("IDTRANSLATEUSERD9"));
    $("#IDTRANSLATEUSERD10").text(i18next.t("IDTRANSLATEUSERD10")); 
    $("#IDTRANSLATEUSERD11").text(i18next.t("IDTRANSLATEUSERD11"));
    $("#IDTRANSLATEUSERD12").text(i18next.t("IDTRANSLATEUSERD12"));
    $("#IDTRANSLATEUSERD13").text(i18next.t("IDTRANSLATEUSERD13"));
    $("#IDTRANSLATEUSERD14").text(i18next.t("IDTRANSLATEUSERD14"));
    $("#IDTRANSLATEUSERD15").html(i18next.t("IDTRANSLATEUSERD15"));
    $("#IDTRANSLATEUSERD16").text(i18next.t("IDTRANSLATEUSERD16"));
    $("#IDTRANSLATEUSERD17").text(i18next.t("IDTRANSLATEUSERD17"));
    $("#IDTRANSLATEUSERD18").text(i18next.t("IDTRANSLATEUSERD18"));
    $("#IDTRANSLATEUSERD19").text(i18next.t("IDTRANSLATEUSERD19"));
    $("#IDTRANSLATEUSERD20").text(i18next.t("IDTRANSLATEUSERD20"));
    $("#IDTRANSLATEUSERD21").text(i18next.t("IDTRANSLATEUSERD21")); 
    $("#IDTRANSLATEUSERD22").text(i18next.t("IDTRANSLATEUSERD22"));
    $("#IDTRANSLATEUSERD24").text(i18next.t("IDTRANSLATEUSERD24"));
    $("#IDTRANSLATEUSERD25").text(i18next.t("IDTRANSLATEUSERD25"));
    $("#IDTRANSLATEUSERD26").text(i18next.t("IDTRANSLATEUSERD26"));
    $("#IDTRANSLATEUSERD27").text(i18next.t("IDTRANSLATEUSERD27"));
    $("#IDTRANSLATEUSERD28").text(i18next.t("IDTRANSLATEUSERD28"));
    $("#IDTRANSLATEUSERD29").text(i18next.t("IDTRANSLATEUSERD29"));
    $("#IDTRANSLATEUSERD30").text(i18next.t("IDTRANSLATEUSERD30"));
    $("#IDTRANSLATEUSERD31").text(i18next.t("IDTRANSLATEUSERD31"));
    $("#IDTRANSLATEUSERD32").text(i18next.t("IDTRANSLATEUSERD32"));
    $("#IDTRANSLATEUSERD33").text(i18next.t("IDTRANSLATEUSERD33"));
    $("#etatalert").text(i18next.t("IDTRANSLATEUSERD34"));
    $("#IDTRANSLATEUSERD35").html(i18next.t("IDTRANSLATEUSERD35"));
    $("#IDTRANSLATEUSERD36").text(i18next.t("IDTRANSLATEUSERD36"));
    $("#IDTRANSLATEUSERD37").text(i18next.t("IDTRANSLATEUSERD37"));
    $("#IDTRANSLATEUSERD38").text(i18next.t("IDTRANSLATEUSERD38"));
    $("#IDTRANSLATEUSERD39").text(i18next.t("IDTRANSLATEUSERD39"));
    $("#IDTRANSLATEUSERD40").text(i18next.t("IDTRANSLATEUSERD40"));
    $("#IDTRANSLATEUSERD41").text(i18next.t("IDTRANSLATEUSERD41"));
    $("#IDTRANSLATEUSERD42").text(i18next.t("IDTRANSLATEUSERD42"));
    $("#IDTRANSLATEUSERD43").text(i18next.t("IDTRANSLATEUSERD43"));
    $("#IDTRANSLATEUSERD44").text(i18next.t("IDTRANSLATEUSERD44"));
    $("#IDTRANSLATEUSERD45").text(i18next.t("IDTRANSLATEUSERD45"));
    $("#IDTRANSLATEUSERD46").text(i18next.t("IDTRANSLATEUSERD46"));
    $("#IDTRANSLATEUSERD47").text(i18next.t("IDTRANSLATEUSERD47"));
    $("#IDTRANSLATEUSERD48").text(i18next.t("IDTRANSLATEUSERD48"));
    $("#IDTRANSLATEUSERD49").text(i18next.t("IDTRANSLATEUSERD49"));
    $("#IDTRANSLATEUSERD50").text(i18next.t("IDTRANSLATEUSERD50"));
    $("#IDTRANSLATEUSERD51").text(i18next.t("IDTRANSLATEUSERD51"));
    $("#IDTRANSLATEUSERD52").text(i18next.t("IDTRANSLATEUSERD52"));
    $("#IDTRANSLATEUSERD53").text(i18next.t("IDTRANSLATEUSERD53"));
    $("#IDTRANSLATEUSERD54").text(i18next.t("IDTRANSLATEUSERD54"));
    $("#IDTRANSLATEUSERD55").text(i18next.t("IDTRANSLATEUSERD55"));
    $("#IDTRANSLATEUSERD56").text(i18next.t("IDTRANSLATEUSERD56"));
    $("#IDTRANSLATEUSERD57").text(i18next.t("IDTRANSLATEUSERD57"));
    $("#IDTRANSLATEUSERD58").text(i18next.t("IDTRANSLATEUSERD58"));
    $("#IDTRANSLATEUSERD59").text(i18next.t("IDTRANSLATEUSERD59"));
    $("#IDTRANSLATEUSERD60").text(i18next.t("IDTRANSLATEUSERD60"));
    $("#IDTRANSLATEFORM109").text(i18next.t("IDTRANSLATEFORM109"));
    $("#IDTRANSLATEFORM110").html(i18next.t("IDTRANSLATEFORM110"));
    $("#IDTRANSLATEPROFIL29FILE").html(i18next.t("IDTRANSLATEPROFIL29FILE"));
    $("#IDTRANSLATEPROFIL29FILE1").html(i18next.t("IDTRANSLATEPROFIL29FILE1")); 
    $("#IDTRANSLATEPROFIL29FILE2").html(i18next.t("IDTRANSLATEPROFIL29FILE2"));
    $("#IDTRANSLATESIGNUP19OPTIONSERROR").html(i18next.t("IDTRANSLATESIGNUP19OPTIONSERROR"));
    $("#IDTRANSLATESIGNUP19OPTIONS").html(i18next.t("IDTRANSLATESIGNUP19OPTIONS"));
    $("#myNameIDwallet").text(i18next.t("myNameIDwallet"));
    $("#MYEWALLETID").html(i18next.t("MYEWALLETID"));
    $("#MYEWALLETID1").text(i18next.t("MYEWALLETID1"));
    $("#comeBackId").text(i18next.t("comeBackId"));
    $("#idTogetwallet").text(i18next.t("idTogetwallet"));
    $("#HISTORYISMY").text(i18next.t("HISTORYISMY"));
    $("#IDTRANSLATEWALLETU").text(i18next.t("IDTRANSLATEWALLETU"));
    $("#IDTRANSLATEWALLETX").text(i18next.t("IDTRANSLATEWALLETX")); 
    $("#IDTRANSLATEWALLET").text(i18next.t("IDTRANSLATEWALLET"));
    $("#IDTRANSLATEWALLETM").text(i18next.t("IDTRANSLATEWALLETM"));
    $("#IDTRANSLATEWALLET1").text(i18next.t("IDTRANSLATEWALLET1"));
    $("#IDTRANSLATEWALLET2").text(i18next.t("IDTRANSLATEWALLET2"));
    $("#TITLEWALLETID").text(i18next.t("TITLEWALLETID")); 
    $("#IDTRANSLATEFOEMXX").text(i18next.t("IDTRANSLATEFOEMXX"));
    $("#PHOTOID").text(i18next.t("PHOTOID"));
    $("#TERMINATOR").text(i18next.t("TERMINATOR"));
    $("#PHOTOIDW").text(i18next.t("PHOTOIDW")); 
    $("#TERMINATORW").text(i18next.t("TERMINATORW"));

    $("#IDTRANSLATESIALERT1").text(i18next.t("IDTRANSLATESIALERT1"));
    $("#IDTRANSLATESIALERT2").text(i18next.t("IDTRANSLATESIALERT2"));
    $("#IDTRANSLATESIALERT3").text(i18next.t("IDTRANSLATESIALERT3"));
    $("#IDTRANSLATESIALERT4").text(i18next.t("IDTRANSLATESIALERT4"));

    $("#CONTRACTID1X").text(i18next.t("CONTRACTID1"));
    $("#IDTRANSLATE6W").text(i18next.t("CONTRACTID1"));
    $("#IDTRANSLATE6WX").html(i18next.t("IDTRANSLATE6WX"));
    $("#CONTRACTID1").text(i18next.t("CONTRACTID1"));
    $("#CONTRACTID2").text(i18next.t("CONTRACTID2"));
    $("#CONTRACTID3").text(i18next.t("CONTRACTID3"));
    $("#CONTRACTID4").html(i18next.t("CONTRACTID4"));
    $("#CONTRACTID5").text(i18next.t("CONTRACTID5"));
    $("#CONTRACTID6").text(i18next.t("CONTRACTID6"));
    $("#CONTRACTID7").text(i18next.t("CONTRACTID7"));
    $("#CONTRACTID8").text(i18next.t("CONTRACTID8"));
    $("#CONTRACTID9").text(i18next.t("CONTRACTID9"));
    $("#CONTRACTID10").html(i18next.t("CONTRACTID10"));
    $("#CONTRACTID11").text(i18next.t("CONTRACTID11"));
    $("#CONTRACTID11X").text(i18next.t("CONTRACTID11X"));
    $("#CONTRACTID12").text(i18next.t("CONTRACTID12"));
    $("#CONTRACTID13").text(i18next.t("CONTRACTID13"));
    $("#CONTRACTID14").text(i18next.t("CONTRACTID14"));
    $("#CONTRACTID15").text(i18next.t("CONTRACTID15"));
    $("#CONTRACTID16").text(i18next.t("CONTRACTID16"));
    $("#CONTRACTID17").text(i18next.t("CONTRACTID17"));
    $("#CONTRACTID18").text(i18next.t("CONTRACTID18"));
    $("#CONTRACTID19").text(i18next.t("CONTRACTID19"));
    $("#ANNONCEAFFILIATEID").html(i18next.t("ANNONCEAFFILIATEID"));

    $("#STEPS14").text(i18next.t("STEPS14"));
    $("#STEPS23").text(i18next.t("STEPS23"));
    $("#STEPS34").text(i18next.t("STEPS34"));
    $("#STEPS44").text(i18next.t("STEPS44"));
    $("#SITEID1").text(i18next.t("SITEID1"));
    $("#SITEID2").text(i18next.t("SITEID1"));
    $("#SITEID3").html(i18next.t("SITEID3"));
    $("#TITLEIDPAIEID").html(i18next.t("TITLEIDPAIEID"));
    $("#TITLEIDPAIEID").html(i18next.t("TITLEIDPAIEID"));
    $("#phoneuserIDval").attr("placeholder", i18next.t("phoneuserIDval"));
    
}
  // Récupérer la langue sélectionnée à partir du stockage local
  var selectedLanguage = localStorage.getItem('selectedLanguage');

  if (selectedLanguage) {
    // Changer la langue selon la valeur récupérée
    $("#language-select").val(selectedLanguage);
    i18next.changeLanguage(selectedLanguage);
  }

  // Écouteur d'événement pour changer la langue
  $("#language-select li").on("click", function() {
  var selectedLanguage = $(this).find("img").attr("alt");
  // Enregistrer la langue sélectionnée dans le stockage local
  localStorage.setItem('selectedLanguage', selectedLanguage);
  $('#language-select').hide();
  location.reload();
  // Changer la langue avec i18next
  i18next.changeLanguage(selectedLanguage, function(err, t) {
  if (err) return console.error(err);
  translatePage();
});
});
});
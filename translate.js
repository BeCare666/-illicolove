$(document).ready(function() {
    // Configuration de i18next pour les différentes langues
    i18next.init({
      lng: localStorage.getItem('selectedLanguage') || 'en',
      debug: true, 
      resources: {
        fr: {
          translation : {
            "IDTRANSLATE1": "Accueil",
            "IDTRANSLATE2": "À propos",
            "IDTRANSLATE3": `Comment ça fonctionne ?`,
            "IDTRANSLATE4": `Termes`,
            "IDTRANSLATE5":"Conditions Générales d’Utilisation",
            "IDTRANSLATE6":"Politique de Confidentialité",
            "IDTRANSLATE6X":"Notre système d'affiliation",
            "IDTRANSLATE7":"Contact",
            "IDTRANSLATE8":"S'inscrire",
            "IDTRANSLATE9":"Se connecter",
            "IDTRANSLATECONTACT1":"Contact",
            "IDTRANSLATECONTACT2":"Contactez-nous",
            "IDTRANSLATECONTACT3":"Adresse",
            "IDTRANSLATECONTACT4":'Téléphone',
            "IDTRANSLATECONTACT5":"E-mails", 
            "IDTRANSLATECONTACT6":"Réseaux sociaux",
            "IDTRANSLATETITLE":"Trouvez votre âme sœur",
            "IDTRANSLATETITLEFORM":"Formulaire",
            "IDTRANSLATE1INF1":`Votre adresse électronique est collectée et traitée par BAKO FAMILIA & COMPANY pour vous tenir informer de nouvelles fonctionnalités du site illicolove ou des mises à jour.
            En application de la loi 2017-20 portant code du numérique en République du Bénin, sur la   protection des données à caractère personnel, vous pouvez vous désabonner ou exercer vos droits d’accès, d’opposition, de rectification et de suppression en envoyant un mail à info@illicolove.com`,
            "IDTRANSLATE10":"illicolove,",
            "IDTRANSLATE11":`votre plateforme de rencontres, pour lutter contre le célibat et la solitude.`,
            "IDTRANSLATE12":`Nous considérons la solitude involontaire comme un problème humanitaire et nous nous engageons à offrir une solution aux personnes qui en souffrent.`,
            "IDTRANSLATE13":`S'inscrire gratuitement`,
            "IDTRANSLATE13KLM":`Aller sur votre profil`,
            "IDTRANSLATE14":`À propos de nous`,
            "IDTRANSLATE15":`Votre plateforme de rencontres en ligne illicolove.com vous est proposée par les Établissements BAKO FAMILIA & COMPANY, une entreprise individuelle(EI) de droit béninois immatriculée au Registre du Commerce et du Crédit Mobilier RCCM RB/COT/08/A4101 ; à l’Identifiant Fiscal Unique (IFU) 3200800938610.`,

            "IDTRANSLATE16":`Elle a pour activités, le Wedding planning (accompagnement dans l’organisation de mariage), le Tourisme-Loisirs, l’organisation de foires et Salons. Elle a été créée en Mai 2008 à Cotonou. `,
            "IDTRANSLATE17":`Plus de détails`,
            "IDTRANSLATE18":`Nos objectifs`,
            "IDTRANSLATE19":`Article 16`,
            "IDTRANSLATE20":`Notre cible`,

            "IDTRANSLATE17USER":`Sélection de région`,
            "IDTRANSLATE18USER":`Détails de l'utilisateur`,
            "IDTRANSLATE19USER":`Profil`,

            "IDTRANSLATE21":`La mise en service de cette plateforme de rencontres en ligne répond à  nos initiatives de lutte contre le célibat et la solitude.
            Elle matérialise notre action dans la ligne définie par la Déclaration Universelle des
            Droits de l’Homme en son article 16, qui rappelle le droit au mariage pour la femme
            et pour l’homme, et l’importance de la famille qui doit être protégée par la société et
            par l’Etat.`,
           "IDTRANSLATE22":`Nos valeurs :`,
           "IDTRANSLATE23":`La fiabilité,`,
           "IDTRANSLATE24":`La courtoisie et`,
           "IDTRANSLATE25":`La discrétion.`, 
           "IDTRANSLATE26":`À partir de l’âge nubile, l’homme et la femme, sans aucune restriction quant à la race, la nationalité ou la religion, ont le droit de se marier et de fonder une famille.
           Ils ont des droits égaux au regard du mariage, durant le mariage et lors de sa            dissolution.`,
           "IDTRANSLATE27":`Le mariage ne peut être conclu qu’avec le libre et plein consentement des futurs époux.`,
           "IDTRANSLATE28":`La famille est l’élément naturel et fondamental de la société et a droit à la protection de la société et de l’Etat.  La solitude, le célibat, l’isolement social, constituent un impératif humanitaire qui interpelle les pouvoirs publics, les associations et les entreprises du domaine.  La solitude chronique et involontaire constitue un drame individuel que vivent ceux qui en souffrent, la plupart du temps, en silence. Illicolove.com a vu le jour dans ce contexte, avec la volonté de proposer autrement et simplement, des services de rencontres en ligne ; avec une chasse avérée aux profils  fictifs. Bienvenue !`,
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
           "IDTRANSLATE39":`Notre équipe`,
           "IDTRANSLATE40":`Directrice`,
           "IDTRANSLATE41":`Relectrice, et Responsable marketing`,
           "IDTRANSLATE42":`Développeur et SEO`,


           "IDTRANSLATEX1":`Les étapes d'utilisation`,
           "IDTRANSLATEX2":`Voici comment fonctionne illicolove.`,
           "IDTRANSLATEX3":`Inscription`,
           "IDTRANSLATEX4":`Dès votre inscription, illicolove vous offre trois (03) unités d’une valeur de 295 Francs CFA soit 0.43 Euros.
           Une unité valant 95 Francs CFA soit 0.144 Euros.`,
           "IDTRANSLATEX5":`Connexion`,
           "IDTRANSLATEX6":`Votre connexion sur illicolove vous permet d'accéder à toutes les fonctionnalités et services réservés aux utilisateur.trices enregistrés.`,
           "IDTRANSLATEX7":`Publier une Annonce`,
           "IDTRANSLATEX8":`En cliquant sur le bouton « Publiez votre annonce », vous pouvez choisir de publier soit sur la page « Afrique », soit sur la page « Europe »; ou sur la page « Autres pays du monde » ; selon votre lieu de résidence. Remplissez simplement le formulaire de recherche qui s’affichera.`,




           "toopenPUAID":`suite...`,
           "openPUA":`Nous vous invitons  à publier votre annonce sur la page de votre zone géographique de résidence, toutefois, vous pouvez consulter et prendre contact avec tout profil d’une annonce de recherche en dehors de votre zone géographique de résidence.
             Par exemple, si vous habitez en France, vous devez publier votre annonce sur la page
             « Europe » et pouvez consulter et prendre contact avec des annonces dans les pages
             « Afrique », « Europe » et « Autres pays du monde »
             Lorsque vous finissez de remplir et d’envoyer votre formulaire de recherche, votre
             annonce apparaitra dans un délai de 24heures au plus, si nous jugeons votre profil
             fiable après relecture et vérifications éventuelles. Il se peut que notre équipe de relecture et validation vous écrive en privée afin de se rassurer sur la fiabilité de votre profil. Des précisions sur votre identité, un appel vocal ou vidéo pourraient vous être demandés. Dans cette optique la validation et l’apparition de votre annonce sur illicolove pourraient excéder 24heures. La célérité pour la publication de votre annonce dépendra de vous-même. Nous écartons systématiquement toute annonce fantaisiste, irréaliste et surtout les faux profils  sans préavis.
             Si vous rencontrez une quelconque difficulté pour jouir des services de illicolove.com, nous vous prions de nous écrire à info@illicolove.com`,
            "IDTRANSLATEX9":`Validation de votre compte utilisateur`,
            "IDTRANSLATEX10":`Remplissez le formulaire et cliquez sur ENVOI. Nous vérifierons et validerons votre formulaire avec photo sous 24h. Vous recevrez un message de confirmation. Si des vérifications supplémentaires sont nécessaires, nous vous en informerons par e-mail.`,
            "IDTRANSLATEX11":`Consulter une annonce`,
            "IDTRANSLATEX12":`Le bouton Consultez les annonces mène à trois autres boutons :  Afrique  (annonces d’Afrique), Europe (annonces d'Europe) et  Autres pays du monde  (annonces hors Afrique et Europe). Rencontrer l’homme ou la femme de votre vie sur illicolove va vous coûter peut-être uniquement 95 francs CFA soit 0.14 Euros.
            C’est ce que vous coûte chaque unité qu’on vous prélève, lorsque vous cliquez sur la
            case « Pour me contacter » d’un profil qui retient particulièrement votre attention.`,
            "IDTRANSLATEX13":`Achat d'unités`,
            "IDTRANSLATEX14":`Vous pouvez recharger votre compte à votre convenance, afin de poursuivre vos recherches de rencontres parmi les annonces publiées.             Le compte débit-crédit personnel que vous obtenez dès que vous vous inscrivez vous permet de le recharger selon le moyen de paiement de votre choix. LA DEVISE de facturation sur illicolove  est le Franc CFA ( XOF).  1 € = 655,957 XOF.`,
            "IDTRANSLATEX15":`Les Questions fréquemment posées.`,
            "IDTRANSLATEX16":` Puis-je faire une belle rencontre sur votre site ?`,
            "IDTRANSLATEX17":` Oui, à condition de bien remplir le formulaire de recherche en fournissant des informations vraies sur vous.`,




            "IDTRANSLATEX18":`Est-ce que votre site de rencontres est payant ?`,
            "IDTRANSLATEX19":` Oui, uniquement pour consulter l’adresse de contact d’un profil qui aura retenu particulièrement votre intérêt.`,
            "IDTRANSLATEX20":`Combien coûte la consultation de l’adresse de contact  d’un profil qui m’attire et m’intéresse ?`,
            "IDTRANSLATEX21":`95 FCFA soit 0.14 Euros.`,
            "IDTRANSLATEX22":` Est-ce que votre site de rencontres est gratuit ?`,
            "IDTRANSLATEX23":`Oui, l’inscription et la publication de votre annonce de recherche amoureuse sont gratuites sur illicolove.`,
            "IDTRANSLATEX24":` Comment publier une annonce de rencontre ?`,
            "IDTRANSLATEX25":`Après votre inscription sur illicolove, cliquez sur le bouton ou l’onglet « PUBLIEZ UNE ANNONCE ». Ensuite sur la page qui va s’afficher, choisissez le nom du             continent qui correspond à votre continent de résidence habituelle. Enfin remplissez             correctement le formulaire de recherche qui va s’afficher puis soumettez.`,
            "IDTRANSLATEX26":` Puis-je résider en Afrique et contacter un profil résidant hors d’Afrique ?`,
            "IDTRANSLATEX27":`Oui !`,
            "IDTRANSLATEX28":`Puis-je résider en Europe et contacter un profil résidant hors d’Europe ?`,
            "IDTRANSLATEX29":`Oui !`,
            "IDTRANSLATEX30":`Puis-je résider en Europe et publier mon annonce de recherche sur les pages « Afrique » et « Autres pays du monde » ?`,
            "IDTRANSLATEX31":`Non ! Publiez votre annonce de recherche uniquement dans la page correspondant à votre zone de résidence.`,
            "IDTRANSLATEX32":`Puis- je payer des unités par mobile money ?`,
            "IDTRANSLATEX33":`Oui !`,
            "IDTRANSLATEX34":` Quel est le tarif d’abonnement sur votre site ?`,
            "IDTRANSLATEX35":` Il n’y a pas d’abonnement sur illicolove.`,
            "IDTRANSLATEX36":` Comment puis-je recharger mon compte Crédit-Débit ?`,
            "IDTRANSLATEX37":`Nous vous offrons un système de paiement sécurisé par plusieurs agrégateurs. Selon votre convenance, rechargez votre compte             par carte de crédit ou par mobile money.  Sous votre profil, cliquez sur le bouton « JE RECHARGE MON COMPTE » et suivez les étapes simplement.`,
            "IDTRANSLATEX38":`Dois-je payer pour publier mon annonce de recherche ?`,
            "IDTRANSLATEX39":`Non ! La publication d’une annonce de recherche est gratuite.`,
            "IDTRANSLATEX40":`Dois-je payer pour consulter les annonces ?`,
            "IDTRANSLATEX41":`Non ! La consultation des annonces est gratuite, c’est l’obtention de l’adresse de contact contenu dans une annonce qui est payante.`,
            "IDTRANSLATEX42":`Comment fonctionne le système de Crédit-Débit ?`,
            "IDTRANSLATEX43":` Lors de votre inscription, vous recevez automatiquement et gratuitement trois (03) unités de crédit vous permettant de consulter trois (03) adresses de contacts dans les annonces de votre choix. Chaque unité a une valeur de 95 FCFA soit 0.14 Euros.
            Lorsque vos unités s’épuisent, il vous est loisible d’en acheter selon votre convenance et  votre capacité. La quantité d’unités que vous pouvez acheter va d’une unité au nombre d’unités que vous désirez.`,
            "IDTRANSLATEX44":` Mes unités que j’achète ont-elles une date d’expiration ?`,
            "IDTRANSLATEX45":`Non ! Vos unités sont à durée illimitée.`,
            "IDTRANSLATEX46":`Dois-je m’abonner pour jouir de votre service de rencontres ?`,




            "IDTRANSLATEX47":`Sur illicolove, il n’y a aucun abonnement pour jouir de nos services en dehors de l’abonnement au newsletter qui est facultatif.`,
            "IDTRANSLATEX48":`Quelle est la politique de confidentialité sur
            illicolove.com ?`,
            "IDTRANSLATEX49":`Nous accordons une grande importance à la confidentialité de vos informations. Vos données personnelles sont sécurisées et ne sont pas partagées avec des tiers sans votre consentement. Vous pouvez consulter  notre politique de confidentialité pour plus  détails`,
            "IDTRANSLATEX50":`ici`,
            "IDTRANSLATEX51":` Où puis-je trouver l'e-mail de validation de mon compte ?`,
            "IDTRANSLATEX52":`Il est possible que l'e-mail de validation de votre compte se trouve dans votre dossier de spam  ou de courrier indésirable. Les filtres de sécurité des fournisseurs de messagerie peuvent parfois  diriger les e-mails de validation vers ces dossiers pour votre protection. Veuillez vérifier votre  dossier de spam ou de courrier indésirable et assurez-vous de marquer l'e-mail comme "non spam" ou  "non indésirable" si vous le trouvez là-bas. Si vous ne parvenez toujours pas à trouver l'e-mail de validation, veuillez contacter notre service d'assistance pour obtenir de l'aide supplémentaire.`,
            "IDTRANSLATETCU1":`Conditions Générales d’Utilisation`,
            "IDTRANSLATETCU2":`Bienvenue sur illicolove.com, une plateforme de rencontres en ligne proposée par BAKO FAMILIA & COMPANY. En utilisant notre site, vous acceptez les termes et conditions décrits ci-dessous.`,
            "IDTRANSLATETCU3":`ARTICLE 1 : Objet`,
            "IDTRANSLATETCU4":`Les présentes « Conditions Générales d’Utilisation » ont pour             objet l’encadrement juridique de l’utilisation du site illicolove.com et de ses services.`,




            "IDTRANSLATETCU5":`Ce contrat est conclu entre :`,
            "IDTRANSLATETCU6":`L’Etablissement BAKO FAMILIA & COMPANY propriétaire du site internet, ci-après désigné « l’Éditeur », ET Toute personne physique souhaitant accéder au site et à ses   services, ci-après appelé « l’Utilisateur.trice ». Les conditions générales d’utilisation doivent être acceptées  par tout Utilisateur.trice, et son accès au site vaut acceptation de ces conditions.
            Dans les présentes Conditions Générales d’Utilisation, il est convenu que les expressions ou mots suivants, qu’ils soient employés au singulier ou au pluriel, auront la signification suivante :`,
            "IDTRANSLATETCU7":`Annonce de recherche : désigne une publication d’un utilisateur.trice ou visiteur.euse du site, sous forme de texte via notre formulaire, accompagnée ou non  d’une ou de plusieurs photographies représentant sa trombine.`,
            "IDTRANSLATETCU8":`Services de rencontres amoureuses  : désigne l’accès par l’Utilisateur.trice à l’ensemble des annonces de recherche publiées sur le Site Internet entre autres, les profils, les liens hypertextes, textes, images, vidéos, les contacts ou adresses par le biais du « click to show ».`,
            "IDTRANSLATETCU9":`« Click to show » : « Cliquer pour afficher  , désigne la fonctionnalité qui permet à tout utilisateur.trice d’afficher l’adresse électronique, le contact téléphonique ou tout autre moyen d’entrer en contact avec un.e autre utilisateur.trice qui a préalablement  émis une annonce de recherche et renseigné le moyen de son choix de le /la contacter. Cette fonctionnalité qui permet d’obtenir un tel renseignement capital est payante. Son coût est de 95 Francs CFA soit 0,144 Euro environ par clic.`,
           "IDTRANSLATETCU10":`ARTICLE 2 : Mentions légales`,




           
           "IDTRANSLATETCU11X":`L’établissement BAKO FAMILIA & COMPANY est l’Éditeur du site de rencontres illicolove.com.  Sis au Lot 191 parcelle b’, à Agbalilamè, elle est une entreprise individuelle de droit béninois. Elle est créée le 29 Mai 2008, immatriculée au Registre du Commerce et du Crédit Mobilier RCCM RB/COT/08/A4101 ; et a pour Identifiant Fiscal Unique (IFU) Numéro : 3200800938610.  Elle est représentée par Gildas Ghislain GANGBAZO.`,
          "IDTRANSLATETCU11":`ARTICLE 3 : accès aux services`,
          "IDTRANSLATETCU12":`L’Utilisateur.trice du site illicolove.com a accès aux services suivants :`,
          "IDTRANSLATETCU13":`Création d’un compte personnel`,
          "IDTRANSLATETCU14":`Création et publication gratuite de son annonce de recherche
          via notre formulaire à remplir`,
          "IDTRANSLATETCU15":`Consultation des annonces de recherche publiées par les autres utilisateur.trices`,
          "IDTRANSLATETCU16":`L’obtention payante des contacts des profils qui retiennent son intérêt, et présents sur les annonces de recherche, de manière illimitée et à sa convenance (Click to show / Cliquer pour afficher)`,
          "IDTRANSLATETCU17":`Possibilité de contacter l’Editeur pour solliciter une demande de services personnalisés`,
          "IDTRANSLATETCU18":`Le Site Internet propose aussi à l’Utilisateur.trice qui le désire, l’organisation partielle  ou complète d’une cérémonie de mariage. Tout Utilisateur.trice ayant accès à internet peut accéder gratuitement et depuis n’importe où au site. Les frais supportés par l’Utilisateur.trice pour y accéder (connexion internet, matériel informatique, etc.) ne sont pas à  la charge de l’Éditeur.  Les services cités plus haut ne sont accessibles pour l’Utilisateur.trice que s’il/elle est  membre du site (c’est-à-dire qu’il /elle est identifié.e à l’aide de ses identifiants de    connexion) : 
          Le site et ses différents services peuvent être interrompus ou suspendus par l’Éditeur,           notamment à l’occasion d’une maintenance, sans obligation de    préavis ou de justification.`,
          "IDTRANSLATETCU19":`ARTICLE 4 : Responsabilité de l’Utilisateur.trice`,
          "IDTRANSLATETCU20":`L’Utilisateur.trice est responsable des risques liés à l’utilisation de son identifiant de connexion et de son mot de passe.  Le mot de passe de l’Utilisateur.trice doit rester secret. En   cas de divulgation de mot de passe, l’Éditeur décline toute responsabilité. L’Utilisateur.trice assume l’entière responsabilité de l’utilisation qu’il fait des informations et contenus présents sur le site illicolove.com.
          Tout usage du service par l’Utilisateur.trice ayant directement ou indirectement pour conséquence des dommages doit faire l’objet d’une indemnisation au profit du site.
          Le site permet aux utilisateur.trices de publier une annonce de recherche sur le site en remplissant le formulaire “Publier une annonce”.`,





          "IDTRANSLATETCU21":`L’utilisateur.trice s’engage à fournir des renseignements fiables, proposer des photographies récentes dénuées d’obscénités, écrire dans ses critères de recherche des propos respectueux des autres et de la loi et accepte que sont annonce soit  modérées ou refusées par l’Éditeur, sans obligation de   justification après un refus de sa part de lui fournir des informations complémentaires pour éviter les faux profils.
          En publiant son annonce sur le site, l’Utilisateur.trice cède à  l’Editeur le droit non exclusif et gratuit de représenter, reproduire, adapter,  modifier, diffuser et distribuer son annonce sur les réseaux sociaux, ou directement par un tiers autorisé ; dans le respect de son anonymat ou du mode de confidentialité choisi.
          L’Éditeur s’engage à préserver les anonymats de tout.e utilisateur.trice en cas de diffusion des annonces sur les réseaux sociaux.`,
          "IDTRANSLATETCU22":`ARTICLE 5 : Responsabilité de l’Éditeur`,
          "IDTRANSLATETCU23":`Tout dysfonctionnement du serveur ou du réseau ne peut engager la responsabilité de l’Éditeur. 
          De même, la responsabilité du site ne peut être engagée en cas de force majeure ou du   fait imprévisible et insurmontable d’un tiers.
          Le site illicolove.com s’engage à mettre en œuvre tous les moyens nécessaires pour garantir la sécurité et la confidentialité des données.
          Toutefois, il n’apporte pas une garantie de sécurité totale. 
          L’Éditeur se réserve la faculté d’une non-garantie de la fiabilité des profils, bien que
          les annonces de recherche diffusées sur le site soient réputées fiables et vérifiées avant la validation de leur publication en back-office par l’équipe de relecture et de validation de l’Editeur.`,



          "IDTRANSLATETCU24":`ARTICLE 6 : Propriété intellectuelle`,
          "IDTRANSLATETCU25":`BAKO FAMILIA & COMPANY est le propriétaire exclusif de tous les droits de propriété intellectuelle portant tant sur la marque, ou la structure que sur le contenu du Site www.illicolove.com. Les contenus du site www.illicolove.com sont destinés à un usage strictement personnel, privé et non collectif, librement pour le contenu  gratuit. Il en est de même pour les fils RSS et les newsletters. Toute utilisation dans un cadre professionnel ou commercial ou toute   commercialisation de ce contenu auprès de tiers est interdite, sauf accord exprès de BAKO FAMILIA & COMPANY.`,
          "IDTRANSLATETCU26":`ARTICLE 7 : Données personnelles.`,
          "IDTRANSLATETCU27":`Consultez notre Politique de Confidentialité, données
          personnelles et cookies ici <a href="politique.html"><i class="bi bi-arrow-right-circle"></i></a>`,
          "IDTRANSLATETCU29":`ARTICLE 8 : Liens hypertextes`,
          "IDTRANSLATETCU30":`Les domaines vers lesquels mènent les liens hypertextes présents sur le site n’engagent pas la responsabilité de l’Éditeur BAKO FAMILIA & COMPANY, qui n’a pas de contrôle sur ces liens.  L’Éditeur a mis en place des partenariats avec des fournisseurs de services et peut          proposer à l’Utilisateur.trice des informations concernant d’autres sites et/ou services, par exemple par la mention d’adresses de sites Web, et/ou par la présence de liens hypertextes vers ces sites.          Ces liens hypertextes qui redirigeant vers des sites tiers n’ont pas été développés par l’Éditeur et ne lui appartiennent pas. L’Éditeur n’assume par conséquent, aucune responsabilité de ces sites, leur contenu, publicités, produits ou services disponibles sur ou à partir de ces sites. Par ailleurs, la responsabilité de l’Éditeur ne saurait être engagée quant aux informations, opinions et recommandations formulées par ces tiers. `,



          "IDTRANSLATETCU31":`L’Éditeur ne peut être tenu responsable de tout dommages ou          pertes avérés ou allégués, consécutifs ou en relation avec l’utilisation, ou avec le fait d’avoir fait confiance au contenu, à des biens ou des services disponible sur ces services partenaires ou sources externes.  La décision d’activer ces liens relève de la pleine et entière responsabilité de l’Utilisateur.
          L’Éditeur n’est pas responsable de la disponibilité de ces sites et ne peut en contrôler le contenu ni valider la publicité, les produits et autres informations diffusées sur ces sites Internet. Il est possible pour un tiers de créer un lien vers une page du site illicolove.com sans autorisation expresse de l’éditeur.`,
          "IDTRANSLATETCU32":`ARTICLE 9 : Mise en garde Particulière`,
          "IDTRANSLATETCU33": `Dans la vie réelle comme dans la vie virtuelle sur internet, vous pouvez croiser le chemin de personnes honnêtes tout comme de personnes  malveillantes et escrocs. 
          Il nous revient de façon individuelle d’adopter certaines attitudes de sécurité dans la vie réelle et par surcroit dans le monde virtuel sur internet. BAKO FAMILIA & COMPANY vous invite à :`,
          "IDTRANSLATETCU34":`Ne jamais envoyer de l’argent à un.e inconnu.e rencontré.e
          sur ce site ; et ce sous aucun prétexte.`,
          "IDTRANSLATETCU35":`Ne jamais envoyer de photographies intimes à un contact
          rencontré sur ce site`,




          "IDTRANSLATETCU36":`Être sur vos gardes lorsqu’une personne prétend vivre dans
          les environs, mais travaille à l’étranger.`,
          "IDTRANSLATETCU37":`Ne jamais céder sous le prétexte d’une situation urgente où  un proche est malade et votre correspondant.e virtuel.le vous demande de l’aider à payer divers frais. Dans un cas pareil, nous vous invitons à signaler le profil de ces escrocs à l’Editeur.`,
          "IDTRANSLATETCU38":`Une relation amoureuse naissante sur illicolove.com ne saurait être pour vous une source d’ennuis et de prise en charge financière. Faites donc preuve d’une grande méfiance lorsqu’un.e inconnu.e vous déclare son amour sans avoir pu vous rencontrer ; et même après une rencontre physique, prenez le temps  nécessaire avant d’engager toute dépense conséquente en numéraire.`,
          "IDTRANSLATETCU39":`Choisir toujours un lieu public pour une première rencontre.`,
          "IDTRANSLATETCU40":`Signaler toujours à un proche vos positions quand vous êtes en compagnie d’une personne inconnue que vous venez de rencontrer fraîchement.`,
          "IDTRANSLATETCU41":`Dénoncer et nous signaler, les tentatives de vente de produits ou de services, les profils qui se révèlent faux malgré nos filtrages après vos échanges en privé, les menaces et intimidations, les propos malsonnants, homophobes, abusifs et offensants, les messages de mineurs, et les demandes d’aides financières ou de  photographies explicites.`,
          "IDTRANSLATETCU42":`Par conséquent, l’Utilisateur.trice reconnaît et accepte sans réserve être pleinement responsable de toute action entreprise faisant suite à la lecture d’une annonce de          rencontre amoureuse et de manière générale à toute information présente sur le Site.La fourniture de ces données ne saurait être assimilée, de quelque façon que ce soit, à un conseil spécifique ou à une aide à la décision. L’Utilisateur.trice est pleinement conscient.e du caractère aléatoire des rencontres amoureuses aussi bien dans la vie réelle que sur internet.`,

          "IDTRANSLATETCU43":` ARTICLE 10 : Suppression des données après 1 an d’inactivité.`,
          "IDTRANSLATETCU44":`Pour des raisons de sécurité, si vous ne vous êtes pas authentifié sur le Site pendant une période d’un an, vous recevrez un e-mail vous invitant à vous connecter dans les plus brefs délais, sans quoi votre profil sera supprimé de  nos bases de données.`,




          "IDTRANSLATETCU45":`ARTICLE  11 : Suppression du compte à la demande.`,
          "IDTRANSLATETCU46":`L’Utilisateur.trice a la possibilité de supprimer son Compte à
          tout moment, par simple demande à l’Éditeur ou par le menu de suppression de
          Compte présent dans les paramètres du Compte le cas échéant.`,
          "IDTRANSLATETCU47":`ARTICLE  12 : Suppression du compte en cas de violation des CGU`,
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
          produit ses effets à l’égard de l’Utilisateur.trice à compter du début de l’utilisation du
          service.`,
          "IDTRANSLATETCU58":`ARTICLE  16 : Droit applicable et juridiction compétente`,
          "IDTRANSLATETCU59":`La langue des présentes CGU est le français et prédominera sur          toutes versions traduites dans une autre langue. Le présent contrat dépend de la législation béninoise, notamment la loi N° 2017-20 du 20 avril 2018 portant Code du Numérique en République du Bénin. Le choix de la loi applicable ne porte pas atteinte à vos droits en tant que         consommateur conformément à la loi applicable de votre lieu de résidence.`,
          "IDTRANSLATETCU60":`Si vous êtes un.e consommateur.trice, vous et nous acceptons de se soumettre à la compétence non-exclusive des juridictions béninoises. En cas de litige non résolu à l’amiable entre l’Utilisateur.trice et l’Éditeur, le tribunal de commerce de Cotonou sera compétent pour régler le contentieux.`,
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
          Protection des Données à caractère Personnel (apdp.bj) sous le numéro…………`,
          "IDTRANSLATEPC7":`En tout état de cause, BAKO FAMILIA & COMPANY ne collecte des informations personnelles relatives à l’utilisateur.trice que pour les besoins du service de rencontres amoureuses proposé par son site internet. L’utilisateur.trice fournit ces informations en toute connaissance de cause,  notamment lorsqu’il procède par lui-même à leur saisie.`,





          "IDTRANSLATEPC8":`Conformément aux dispositions de la loi 2017-20 portant code du numérique en République du Bénin, tout utilisateur.trice dispose d’un droit d’accès, de rectification et  d’opposition aux données personnelles le concernant, en effectuant sa demande écrite et signée,
          accompagnée d’une copie d’une pièce d’identité avec signature du titulaire de la pièce, en
          précisant l’adresse à laquelle la réponse doit être envoyée. Aucune information personnelle d’un utilisateur.trice de notre site internet « www.illicolove.com » n’est publiée, cédée ou vendue sur  un support quelconque ou à des tiers à son insu.`,
          "IDTRANSLATEPC9":`Confidentialité des données`,
          "IDTRANSLATEPC10":`Vos données personnelles sont confidentielles et ne seront en aucun cas communiquées à des tiers. 
          La nature privée de notre service de rencontres amoureuses ne nous permet pas de
          communiquer vos données personnelles (noms, contacts, adresses, etc) à un individu, quel que soit son rang ou sa qualité.`,
          "IDTRANSLATEPC11": `Droit d'accès`,
          "IDTRANSLATEPC12":`En application des dispositions de la loi portant code du numérique en République du Bénin, tout utilisateur de notre site internet www.illicolove.com dispose d’un droit d’accès, de rectification, de modification et de suppression relative aux données qui le concerne individuellement. Ce droit peut être exercé par le titulaire sur demande adressée par voie électronique à l’adresse e-mail suivante : info@illicolove.com. Les informations personnelles collectées ne sont en aucun cas confiées à des tiers.`,
          "IDTRANSLATEPC13":`Droit de rectification`,






          "IDTRANSLATEPC14":`Conformément à la loi portant code du numérique en République du Bénin, tout utilisateur de notre site internet www.illicolove.com peut demander la rectification, la mise à jour, la suppression, le verrouillage ou encore l’effacement des données le concernant, et qui peuvent s’avérer inexactes, erronées, incomplètes, équivoques ou obsolètes.`,
          "IDTRANSLATEPC15":`Durée de conservation.`,
          "IDTRANSLATEPC16":`Vos données personnelles sont conservées par BAKO FAMILIA & COMPANY uniquement pour le temps correspondant à votre besoin de services de rencontres amoureuses. Toutefois, cette  durée de conservation n’excède pas treize (12) mois.`,
          "IDTRANSLATEPC17":`Plainte auprès de l’autorité compétente`,
          "IDTRANSLATEPC18":`Si vous considérez que BAKO FAMILIA & COMPANY ne respecte pas ses obligations au regard de vos données personnelles collectées lors de votre visite sur son site internet
          www.illicolove.com, vous pouvez adresser, comme le prescrit la procédure légale, une plainte ou  une demande auprès de l’Autorité de Protection des Données à caractère Personnel(APDP).`,
          "IDTRANSLATEPC19":`Propriété intellectuelle`,
          "IDTRANSLATEPC20":`Tout le contenu du présent site internet, incluant, de façon non limitative, les graphismes, images, textes, vidéos, animations, sons, logos, gifs et icônes ainsi que leur mise en forme sont la   propriété exclusive de BAKO FAMILIA & COMPANY à l'exception des marques, logos ou contenus appartenant à d'autres sociétés partenaires ou auteurs. 
          Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces différents éléments est strictement interdite sans l'accord exprès écrit de BAKO FAMILIA & COMPANY.`,
          "IDTRANSLATEPC21":`Conditions de service`,
          "IDTRANSLATEPC22":`Le site internet www.illicolove.com est proposé en langue française, avec des traductions en anglais et en espagnol. Pour un meilleur confort d'utilisation, nous vous recommandons de recourir à des navigateurs compatibles et modernes comme : Chrome, Safari, Firefox.`,
          "IDTRANSLATEPC23":`Informations et suggestions`,







          "IDTRANSLATEPC24":`BAKO FAMILIA & COMPANY met en œuvre tous les moyens en sa possession, pour assurer un service de rencontres amoureuses fiable et une mise à jour permanente de son site internet
          www.illicolove.com. Toutefois, des erreurs ou omissions peuvent subvenir. En conséquence, tout utilisateur.trice peut nous envoyer des suggestions ou des informations à : info@illicolove.com et indiquer toutes modifications du site qu'il jugerait pertinentes.`,
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
          Onglet Confidentialité et sur le bouton Avancé pour faite
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
          "IDTRANSLATEPROFIL13":`Vous souhaite la Bienvenue !`,
          "exampleModalLongTitle":`Une unité vaut 95 FCFA, soit 0.144 Euros.`,
          "errorSms":`Vous devez saisir un nombre.`,
          "SmspayId":`Saisissez ici le nombre d'unités.`,
          "IDTRANSLATEPROFIL14":`Retour`, 
          "payYourUnitybtn":`Valider`,
          "CHOISEYOURPAIEMENT":`Sélectionnez le mode de paiement.`,
          "exampleModalLongTitleX":`Sécurisez votre compte.`,
          "IDTRANSLATEPROFIL15":`Veuillez fournir une réponse que vous n'oublierez jamais. 
          Cette réponse vous sera demandée lors de la récupération de 
          votre compte. Sans cette réponse, votre compte restera inaccessible.`,
          "IDTRANSLATEPROFIL16":`Selectionner votre question`,
          "IDTRANSLATEPROFIL17":`Qu'est-ce qui rend une personne spéciale ?`,
          "IDTRANSLATEPROFIL18":`Qu'est-ce qui vous fait sentir le plus aimé(e)s ?`,
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
          "IDTRANSLATEPROFIL27":`reponse de sécurité`,
          "payYourUnity":`Entrer l'unité`,
          congratulationsTitle: "Félicitation !",
          accountSecureMessage: "Votre compte est sécurisé. Merci !",       
          accountSecureMessageX: "Ne mettez pas d'espace. Merci !",


          "IDTRANSLATEPROFIL28":`Votre compte de débit est vide. Veuillez payer des unités pour 
          accéder aux contacts des annonces qui vont vous plaire.`,
          "IDTRANSLATEPROFIL29":`Vous ne pouvez pas payer les unités pour l'instant. 
          Car vous êtes encore sur votre compte Débit. Merci.`,
          "IDTRANSLATEPROFIL30W":`Êtes-vous sûr ?`,
          "IDTRANSLATEPROFIL30":`Vous ne pourrez plus revenir en arrière !`,
          "IDTRANSLATEPROFIL31":`Oui, supprimez-le !`, 
          "IDTRANSLATEPROFIL32":`Êtes-vous sûr ?`,
          "IDTRANSLATEPROFIL33":`Après vous être déconnecté, vous avez la possibilité de vous reconnecter.`,
          "IDTRANSLATEPROFIL34":`Oui, déconnecter !`,
          "IDTRANSLATEPROFIL35":`Déconnecté`,
          "IDTRANSLATEPROFIL36":`Vous avez été déconnecté.`,
          "IDTRANSLATEPROFIL37":`Voulez-vous visiter notre page d'accueil ?`,
          "IDTRANSLATEPROFIL38":`Supprimé !`,
          "IDTRANSLATEPROFIL38X":` succès.`,
          "IDTRANSLATEPROFIL39X":`Votre photo a été mise à jour avec succès.`,
          "IDTRANSLATEPROFIL40X":` erreur`,
          "IDTRANSLATEPROFIL41X":`La mise à jour de votre photo a échoué.`,

          "IDTRANSLATEPROFIL39":`Votre compte a été supprimé avec succès !`,
          "IDTRANSLATEPROFIL40":`Supprimé !`,
          "IDTRANSLATEPROFIL41":`Erreur lors de la suppression de l'utilisateur ! `,
          "IDTRANSLATEPROFIL42":`il y a une ERROR`,
          "IDTRANSLATEPROFIL42Q":`il y a une ERROR`,
          "IDTRANSLATEPROFIL42QX":`il y a une ERROR`,
          "IDTRANSLATEPROFIL43":`Le champs n'est pas bien rempli !`, 
          "IDTRANSLATEPROFIL44":`Quelque chose s'est mal passé !`,
          "IDTRANSLATEPROFIL44IN":`Chers utilisateurs, nous souhaitons vous informer que ce moyen de paiement n'est pas encore disponible. Pour l'instant, veuillez utiliser Feexpay pour effectuer vos transactions. Merci !`,
          "IDTRANSLATEPROFIL45":`Les données ne sont pas mises à jour !`,
          "IDTRANSLATEPROFIL46":` Salut, Vous n'avez plus d'unités. Veuillez recharger. Rendez-vous  sur votre profil. Merci!`,
          "IDTRANSLATEPROFIL47":`Êtes-vous sûr ?`,
          "IDTRANSLATEPROFIL48":` En procédant à la modification de votre annonce, elle sera à nouveau soumise  aux administrateurs pour sa validation. Ce processus peut durer 24h.`,




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




          "IDTRANSLATESIGNUP15":`Vous avez déjà un compte avec cette adresse email !`,
          "IDTRANSLATESIGNUP16":`succès`,
          "IDTRANSLATESIGNUP17":`Vous êtes inscrit avec succès !`,
          "IDTRANSLATESIGNUP18":`Erreur lors de l'envoi de l'adresse mail à Firebase`, 
          "IDTRANSLATESIGNUP19":`Ne mettez pas d'espace. Merci !`,
          "IDTRANSLATESIGNUP19PHONE":`Veuillez fournir un numéro de téléphone valide.`,
          "IDTRANSLATESIGNUP19PHONEX":`Veuillez fournir un numéro de téléphone valide.`,
          "IDTRANSLATEFORGET1":`Envoyer l'adresse e-mail utilisée lors de votre inscription.`,
          "IDTRANSLATEFORGET2":`Email`,
          "IDTRANSLATEFORGET3":`Votre email`,
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
          "IDTRANSLATEFORM6":`VEUILLEZ REMPLIR LE FORMULAIRE CI-DESSOUS.`,
          "IDTRANSLATEFORM7":`Donnez des informations précises et judicieuses.`,
          "IDTRANSLATEFORM8":`Mon pays de résidence <i class="fa fa-star required"></i>`,
          "IDTRANSLATEFORM9":`Ma Ville de résidence <i class="fa fa-star required"></i>`,
          "IDTRANSLATEFORM10":`Nom ou Pseudonyme <i class="fa fa-star required"></i>`,
          "IDTRANSLATEFORM11":`Mon âge <i class="fa fa-star required"></i>`,
          "IDTRANSLATEFORM9PL":`Ma Ville de résidence `,





          "IDTRANSLATEFORM10X":`Ma Ville de résidence`,
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
          "IDTRANSLATEFORM36":`VEUILLEZ REMPLIR LE FORMULAIRE CI-DESSOUS.`,
          "IDTRANSLATEFORM37":`Donnez des informations précises et judicieuses.`,
          "IDTRANSLATEFORM38":`Ma situation matrimoniale <i class="fa fa-star required"></i>`,
          "IDTRANSLATEFORM39":`Célibataire`,
          "IDTRANSLATEFORM40":`En couple`,
          "IDTRANSLATEFORM41":`Divorcé(e)`,
          "IDTRANSLATEFORM42":`Veuf(ve)`,
          "IDTRANSLATEFORM43":`Ma nationalité <i class="fa fa-star required"></i>`,
          "IDTRANSLATEFORM44":`Téléphone <i class="fa fa-star required"></i>`,
          "IDTRANSLATEFORM45":`Saisissez uniquement votre numéro sans le préfixe du pays<i class="fa fa-star required"></i>`,
          "IDTRANSLATEFORM46":`Ma profession ou mon occupation <i class="fa fa-star required"></i>`,
          "IDTRANSLATEFORM47":`Mon travail`,
          "IDTRANSLATEFORM48":`VEUILLEZ REMPLIR LE FORMULAIRE CI-DESSOUS.`,
          "IDTRANSLATEFORM49":`Donnez des informations précises et judicieuses.`,
          "IDTRANSLATEFORM50":`Je veux une rencontre <i class="fa fa-star required"></i>`,
          "IDTRANSLATEFORM51":`Amicale, une compagnie pour briser la solitude`,
          "IDTRANSLATEFORM52":`Durable`,
          "IDTRANSLATEFORM53":`Pouvant aboutir au mariage`,
          "IDTRANSLATEFORM54":`Pièce d'identité`,
          "IDTRANSLATEFORM55":`Photo 1 <i class="fa fa-star required"></i>`,
          "IDTRANSLATEFORM56":`Photo 2 <i class="fa fa-star required"></i>`,
          "IDTRANSLATEFORM57":`VEUILLEZ REMPLIR LE FORMULAIRE CI-DESSOUS.`,
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
          "IDTRANSLATEFORM89":`Vous pouvez sélectionner plusieurs pays. <i class="fa fa-star required"></i>`,
          "IDTRANSLATEFORM90":`Son pays`,
          "IDTRANSLATEFORM91":`Son pays de résidence`,
          "IDTRANSLATEFORM92":`VEUILLEZ REMPLIR LE FORMULAIRE CI-DESSOUS.`,
          "IDTRANSLATEFORM93":`Donnez des informations précises et judicieuses.`,
          "IDTRANSLATEFORM94":`Décrivez l'aspect physique que vous désirez.`,
          "IDTRANSLATEFORM95":`Sa ville d'habitation <i class="fa fa-star required"></i>`,
          "IDTRANSLATEFORM96":`Sa ville`,
          "IDTRANSLATEFORM97":`Son travail ou occupations <i class="fa fa-star required"></i>`,
          "IDTRANSLATEFORM98":`Son travail`,
          "IDTRANSLATEFORM99":`Autres précisions.`,
          "IDTRANSLATEFORM100":`Autres précisions`,
          "IDTRANSLATEFORM10w":` Aspects physiques`,
          "IDTRANSLATEFORM101":`Suivant`,
          "IDTRANSLATEFORM102":`précédent`,
          "IDTRANSLATEFORM103":`Envoyer`,




          "IDTRANSLATEFORM104":`<p > Les données à caractère personnel collectées dans le présent formulaire par <strong style="color: #000080;">BAKO FAMILIA & COMPANY</strong> seront traitées exclusivement à des fins du bon déroulement du service de rencontres amoureuses que vous sollicitez. Les données à caractère personnel collectées ne sont communiquées à personne sans votre consentement.
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
          "IDTRANSLATEUSERD5":`Ma Ville de résidence :`,
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
          "IDTRANSLATEUSERD29":`Vous pourrez contacter les autres utilisateurs dans un instant, après la validation de votre profil utilisateur et la publication de votre formulaire de recherche.`,
          "IDTRANSLATEUSERD30":`Voulez-vous  publier votre annonce ?`,
          "IDTRANSLATEUSERD31":`Vos unités sont épuisées. Vous ne pouvez plus contacter d’autres utilisateurs’.`,
          "IDTRANSLATEUSERD32":`Voulez-vous  acheter des unités ?`,
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
          "TERMINATORW" :"TERMINER",
          "PHOTOIDW" :"PHOTO",
          "STEPS14":"Étape 1 - 4",
          "STEPS23":"Étape 2 - 4",
          "STEPS34":"Étape 3 - 4",
          "STEPS44":"Étape 4 - 4",
          "IDTRANSLATEPROFIL29FILE" :"Souhaitez-vous envoyer cette image ?", 
          "IDTRANSLATEPROFIL29FILE1" :"Retour",
          "IDTRANSLATEPROFIL29FILE2" :"Oui",
          "IDTRANSLATESIGNUP19OPTIONSERROR" :"Une erreur s'est produite lors de la demande de géolocalisation.",
          "IDTRANSLATESIGNUP19OPTIONS" :"Nous regrettons de vous informer que vous ne pouvez pas utiliser nos services tant que votre position n'est pas acceptée.",
          "IDTRANSLATESIALERT1" :"information",
          "IDTRANSLATESIALERT2" :"Chers visiteurs, dans le but d'assurer votre sécurité et de lutter contre les fausses annonces, nous récupérons votre position.",
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
          "CONTRACTID12":`4. Paiement de la Commission`,
          "CONTRACTID13":`Illicolove versera la commission de l'Affilié sur une base régulière mensuelle sur demande par mobile money ou par virement bancaire , au choix de l'Affilié. Les frais de reversement sont à la charge de l'Affilié.`,
          "CONTRACTID14":`5. Durée du Contrat`,
          "CONTRACTID15":`Ce contrat d'affiliation entrera en vigueur à la date de son  acceptation par l'Affilié et restera en vigueur jusqu'à ce qu'il soit résilié par l'une ou l'autre des parties, sous réserve d'un préavis écrit de trente (30) jours.`,
          "CONTRACTID16":`6. Résiliation`,
          "CONTRACTID17":`Illicolove ou l'Affilié peut résilier ce contrat à tout moment en fournissant un préavis écrit à l'autre partie. Toute commission non payée sera réglée conformément aux termes de ce contrat.`,
          "CONTRACTID18":`7. Loi Applicable`,
          "CONTRACTID19":`Ce contrat est régi par les lois béninoises et tout litige découlant de ce contrat, à défaut d'être réglé à l'amiable, sera soumis à la juridiction exclusive des tribunaux de Commerce de Cotonou.`,
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
            "IDTRANSLATETITLE":"Find your soul mate",
            "IDTRANSLATETITLEFORM":"Form",
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




          "IDTRANSLATESIGNUP15":`¡Ya tienes una cuenta con esta dirección de correo electrónico!`,
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
          "TERMINATORW" :"FINALIZAR",
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
          "IDTRANSLATESIALERT2" :"Estimados visitantes, con el fin de garantizar su seguridad y combatir los anuncios falsos, estamos recuperando su ubicación.",
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
          "CONTRACTID12":`4. Pago de Comisiones`,
          "CONTRACTID13":`Illicolove pagará la comisión del Afiliado de forma regular, mensualmente, previa solicitud, a través de dinero móvil o transferencia bancaria, a elección del Afiliado. Los gastos de transferencia corren a cargo del Afiliado.`,
          "CONTRACTID14":`5. Duración del Acuerdo`,
          "CONTRACTID15":`Este contrato de afiliación entrará en vigor en la fecha de aceptación por parte del Afiliado y permanecerá en vigor hasta que sea terminado por cualquiera de las partes, sujeto a un aviso por escrito de treinta (30) días.`,
          "CONTRACTID16":`6. Terminación`,
          "CONTRACTID17":`Illicolove o el Afiliado pueden dar por terminado este acuerdo en cualquier momento proporcionando un aviso por escrito a la otra parte. Cualquier comisión no pagada se liquidará de acuerdo con los términos de este acuerdo.`,
          "CONTRACTID18":`7. Ley Aplicable*`,
          "CONTRACTID19":`Este acuerdo se rige por las leyes de Benín, y cualquier disputa que surja de este acuerdo, en ausencia de un acuerdo amistoso, estará sujeta a la jurisdicción exclusiva de los Tribunales Comerciales de Cotonú.`,
          
          }
        },
        en: {
        translation : {
          "IDTRANSLATE1": 'Home',
"IDTRANSLATE2": " About ",
"IDTRANSLATE3": ` How does that work?`,
 "IDTRANSLATE4": `Terms `,
"IDTRANSLATE5":" General Terms of Use ",
"IDTRANSLATE6":" Privacy Policy ",
"IDTRANSLATE6X":"Our affiliate system",
"IDTRANSLATE7":"Contact",
"IDTRANSLATE8":"Sign up ",
"IDTRANSLATE9":" Connect ",
"IDTRANSLATECONTACT1":"Contact",
"IDTRANSLATECONTACT2":" Contact us ",
"IDTRANSLATECONTACT3":" Address ",
"IDTRANSLATECONTACT4":' Phone ',
"IDTRANSLATECONTACT5":"E-mails",
"IDTRANSLATECONTACT6":" Social networks ",
"IDTRANSLATETITLE":"Encuentre a su alma gemela",
"IDTRANSLATETITLEFORM":"Formulario",
"IDTRANSLATE1INF1":`Your email address is collected and processed by BAKO FAMILIA & COMPANY to keep you informed of new features of the illicolove site or update.
            In application of the law 2017-20 on the protection of personal data, you can unsubscribe or exercise your rights of access, opposition, rectification and deletion by sending an email to info@illicolove.com`,

"IDTRANSLATE10":"illicolove,",
"IDTRANSLATE11":` Your dating platform, to fight against celibacy and loneliness.`,
"IDTRANSLATE12":` We see involuntary loneliness as a humanitarian problem and we are committed to providing a solution for those suffering from it.`,
 "IDTRANSLATE13":` Sign up for free `,
 "IDTRANSLATE13KLM":`Go to your profile`,
  "IDTRANSLATE14":` About us `,
  "IDTRANSLATE15":` Your illicolove.com online dating platform is offered by Establishments BAKO FAMILIA & COMPANY, a sole proprietorship under Beninese law registered in the Trade and Personal Property Credit Register RCCM RB/COT/08/A4101; to the Unique Tax Identifier (IFU) 3200800938610.`,
            "IDTRANSLATE16":` It has for activities, the Wedding planning, the Tourism-Leisure, the organization of fairs. It was created in May 2008 in Cotonou. `,
            "IDTRANSLATE17":` More details `,
            "IDTRANSLATE18":` Our goals `,
            "IDTRANSLATE19":`Article 16`,
"IDTRANSLATE20":` Our target `,
"IDTRANSLATE17USER":`Region selection`,
"IDTRANSLATE18USER":`User details`,
"IDTRANSLATE19USER":`Profile`,
 "IDTRANSLATE21":` The launch of this online dating platform responds to our initiatives to fight against celibacy and loneliness.
            It materializes our action in the line defined by the Universal Declaration of Human Rights in its article 16, which recalls the right to marriage for women and men, and the importance of the family which must be protected by society and by the State.`,
           "IDTRANSLATE22":` Our values :`,
           "IDTRANSLATE23":` Reliability,`,
           "IDTRANSLATE24":` Courtesy and `,
           "IDTRANSLATE25":` Discretion.`, 
"IDTRANSLATE26":` From the age of marriage, men and women, without any restriction as to race, nationality or religion, have the right to marry and to found a family.
           They have equal rights with respect to marriage, during marriage and at the time of its dissolution.`,
           "IDTRANSLATE27":` The marriage can only be concluded with the free and full consent of the future spouses.`,
           "IDTRANSLATE28":` The family is the natural and fundamental element of society and has the right to the protection of the State.  Loneliness, celibacy, social isolation are a humanitarian imperative that challenges public authorities, associations and businesses in the field.  Chronic and involuntary loneliness is an individual tragedy experienced by those who suffer most of the time in silence. Illicolove.com was born in this context, with the desire to offer other and simple online dating services; with a proven hunt for fictional profiles. 
Welcome!`,
           "IDTRANSLATE29":` We only target individuals :`,
           "IDTRANSLATE30":` Young people aged 18 and over `,
           "IDTRANSLATE31":` Older involuntary bachelors, desperate and disappointed.`,
           "IDTRANSLATE32":` The divorced.`,
           "IDTRANSLATE33":` widows, widowers`,
           "IDTRANSLATE34":` Our users `,
           "IDTRANSLATE35":` All of our users `,
           "IDTRANSLATE36":` In Africa `,
           "IDTRANSLATE37":` In Europe `,
           "IDTRANSLATE38":` Other countries in the world `,
           "IDTRANSLATE39":` Our team `,
           "IDTRANSLATE40":` Manager `,
           "IDTRANSLATE41":` Proofreader and marketing manager `,
           "IDTRANSLATE42":` Developer and SEO `,
           "IDTRANSLATEX1":` The steps to use `,
           "IDTRANSLATEX2":` Here’s how illicolove works.`,
           "IDTRANSLATEX3":`Inscription`,
           "IDTRANSLATEX4":` Upon registration, illicolove offers you three (03) units worth 295 CFA francs or 0.43 Euros.
           A unit worth 95 CFA francs or 0.144 Euros.`,
           "IDTRANSLATEX5":` Connection `,
           "IDTRANSLATEX6":` Your connection on illicolove allows you to access all features and services reserved for registered users..`,
           "IDTRANSLATEX7":` Post an ad `,
           "IDTRANSLATEX8":` By clicking on the “Publish your ad” button, you can choose to publish either on the “Africa” page, the “Europe” page, or the “Other Countries of the World” page, depending on where you live. Simply complete the search form that will appear.`,



           "toopenPUAID":` more......`,
           "openPUA":`We invite you to post your ad on the page of your geographic area of residence, however, you can view and contact any profile of a search ad outside your geographic area of residence.
             For example, if you live in France, you must post your ad in 
             «Europe» and can consult and contact with ads in the pages
             “Africa”, “Europe” and “Other countries of the world”
             When you complete and submit your research form, your
             announcement will appear within 24 hours at most, if we judge your profile
             reliable after proofreading and possible checks. Our proofreading and validation team may write to you privately to reassure you of the reliability of your profile. Details about your identity, a voice or video call may be requested. With this in mind, the validation and appearance of your ad on illicolove could exceed 24 hours. The timeliness of your ad will depend on you. We systematically rule out any fanciful, unrealistic and especially false profiles without notice.
             If you have any issues with illicolove.com, please contact us at info@illicolove.com`,

"IDTRANSLATEX9":` Validation of your user account `,
            "IDTRANSLATEX10":` Fill out the form and click on SEND. We will check and validate your form with photo within 24h. You will receive a confirmation message. If additional checks are required, we will notify you by e-mail.`,
            "IDTRANSLATEX11":` View ads `,
            "IDTRANSLATEX12":` The View Ads button leads to three other buttons:  Africa  (Africa ads), Europe (Europe ads) and Other Countries of the World  (Outside Africa and Europe ads). Meeting the man or woman of your life on illicolove may cost you only 95 CFA francs or 0.14 Euros.
            This is what you pay for each unit that is taken from you, when you click on the “Contact me” box in a profile that is particularly important to you.`,
            "IDTRANSLATEX13":` Buy Units  `,
            "IDTRANSLATEX14":` You can reload your account at your convenience, in order to continue your dating searches among the published ads.             The personal debit-credit account you get as soon as you sign up allows you to top it up according to the payment method of your choice. THE BILLING CURRENCY on illicolove is the CFA Franc ( XOF).  €1 = 655.957 XOF.`,
            "IDTRANSLATEX15":` Frequently asked questions.`,
            "IDTRANSLATEX16":` Can I make a nice meeting on your site?`,
            "IDTRANSLATEX17":` Yes, as long as you fill in the search form with true information about you.`,




            "IDTRANSLATEX18":` Does your dating site pay?`,
            "IDTRANSLATEX19":` Yes, only to check the contact address of a profile that particularly interested you.`,
            "IDTRANSLATEX20":` How much does it cost to consult the contact address of a profile that attracts and interests me?`,
            "IDTRANSLATEX21":`95 FCFA or 0.14 Euros.`,
            "IDTRANSLATEX22":` Is your dating site free?`,
            "IDTRANSLATEX23":` Yes, registration and publication of your love search ad are free on illicolove.`,
            "IDTRANSLATEX24":` How to publish a meeting ad?`,
            "IDTRANSLATEX25":` After you sign up for illicolove, click on the “POST AD” button or tab. Then on the page that will appear, choose the name of the continent that corresponds to your continent of usual residence. Finally, fill out the search form correctly and submit it.`,
            "IDTRANSLATEX26":` Can I reside in Africa and contact a profile residing outside Africa?`,
            "IDTRANSLATEX27":` yes!`,
            "IDTRANSLATEX28":` Can I live in Europe and contact a profile living outside Europe?`,
            "IDTRANSLATEX29":`Yes !`,
            "IDTRANSLATEX30":` Can I reside in Europe and post my research ad on the “Africa” and “Other Countries of the World” pages?`,
            "IDTRANSLATEX31":` No! Post your search ad only on the page corresponding to your area of residence.`,
            "IDTRANSLATEX32":` Can I pay units by mobile money? ?`,
            "IDTRANSLATEX33":` Yes!`,
            "IDTRANSLATEX34":` What is the subscription rate on your site?`,
            "IDTRANSLATEX35":` There is no subscription.`,
            "IDTRANSLATEX36":` How do I reload my Debit Credit account?`,
            "IDTRANSLATEX37":` We offer you a secure payment system through multiple aggregators. Depending on your convenience, reload your account by credit card or mobile money.  Under your profile, click on the “CHARGE MY ACCOUNT” button and follow the steps simply.`,
            "IDTRANSLATEX38":` Do I have to pay to publish my research ad?`,
            "IDTRANSLATEX39":` No! The publication of a search ad is free.`,
            "IDTRANSLATEX40":` Do I have to pay to view ads?`,
            "IDTRANSLATEX41":` No! The consultation of the ads is free, it is the obtaining of the contact address contained in an ad that is paying.`,
            "IDTRANSLATEX42":` How does the Debit System work?`,
            "IDTRANSLATEX43":` When you register, you automatically receive three (03) credit units free of charge allowing you to consult three (03) contact addresses in the ads of your choice. Each unit has a value of 95 FCFA or 0.14 Euros.
            When your units run out, you are free to purchase them at your convenience and capacity. The amount of units you can purchase ranges from one unit to the number of units you want.`,
            "IDTRANSLATEX44":` Do my units I buy have an expiry date?`,
            "IDTRANSLATEX45":` No! Your units are unlimited.`,
            "IDTRANSLATEX46":` Do I need to subscribe to enjoy your dating service?`,




            "IDTRANSLATEX47":` On illicolove, there is no subscription to enjoy our services apart from the newsletter subscription which is optional.`,
            "IDTRANSLATEX48":` What is the privacy policy on illicolove.com?`,
            "IDTRANSLATEX49":`We attach great importance to the confidentiality of your information. Your personal data is secure and not shared with third parties without your consent. You can consult our privacy policy for more details`,
            "IDTRANSLATEX50":`Here`,
            "IDTRANSLATEX51":` Where can I find my account validation email?`,
            "IDTRANSLATEX52":` It is possible that your account validation email is in your spam or spam folder. Security filters from email providers can sometimes direct validation emails to these folders for your protection. Please check your spam or junk mail folder and make sure to mark the email as "no spam" or "not unwanted" if you find it there. If you are still unable to find the validation email, please contact our support for further assistance.`,
            "IDTRANSLATETCU1":` General Use Conditions `,
"IDTRANSLATETCU2":` Welcome to illicolove.com, an online dating platform offered by BAKO FAMILIA & COMPANY. By using our site, you agree to the terms and conditions described below.`,
            "IDTRANSLATETCU3":` Article 1: Purpose `,
            "IDTRANSLATETCU4":` The purpose of these "General Conditions of Use" is to provide legal framework for the use of illicolove.com and its services.`,




            "IDTRANSLATETCU5":` This contract is concluded between:`,
            "IDTRANSLATETCU6":` The BAKO FAMILIA & COMPANY Institution, owner of the website, hereinafter referred to as the «Editor», 
AND 
Any natural person wishing to access the site and its services, hereinafter called the «User». The general conditions of use must be accepted by any User, and its access to the site constitutes acceptance of these conditions.
            In these General Conditions of Use, it is agreed that the following expressions or words, whether used in the singular or plural, will have the following meanings:`,
            "IDTRANSLATETCU7":` Search ad: means a publication of a user or visitor of the site, in text form via our form, accompanied or not by one or more photographs representing his face.`,
            "IDTRANSLATETCU8":` Dating services: refers to the User’s access to all search advertisements published on the Website, including profiles, hyperlinks, texts, images, videos, contacts or addresses through the “click to show”.`,
            "IDTRANSLATETCU9":`“Click to show” means the functionality that allows any user to display the email address, the telephone contact or any other means of getting in touch with another user who has previously issued a search ad and filled in the means of his/her choice to contact. This feature that allows to obtain such a capital information is paying. Its cost is 95 CFA francs or 0.144 Euro per click.`,
           "IDTRANSLATETCU10":` ARTICLE 2: Legal notices `,
"IDTRANSLATETCU11X":` BAKO FAMILIA & COMPANY is the Editor of the illicolove.com dating website.  Located at Lot 191 b', in Agbalilamè, it is a sole proprietorship in Benin. It was created on 29 May 2008, registered in the Trade and Personal Property Credit Register RCCM RB/COT/08/A4101; and has for Unique Tax Identifier (IFU) Number: 3200800938610.  It's represented by Gildas Ghislain GANGBAZO.`,
          "IDTRANSLATETCU11":` ARTICLE 3: Access to services `,
          "IDTRANSLATETCU12": `The User of illicolove.com has access to the following services:`,
          "IDTRANSLATETCU13":` Creating a Personal Account `,
          "IDTRANSLATETCU14":` Creation and free publication of his search ad via our form to fill in `,
          "IDTRANSLATETCU15":` Consultation of search advertisements published by other users. `,
          "IDTRANSLATETCU16":` Obtaining paid contacts profiles that retain its interest, and present on search ads, unlimited and at its convenience (Click to show/ Click to display)`,
          "IDTRANSLATETCU17":` Possibility to contact the Editor to request personalized services `,
          "IDTRANSLATETCU18":` The Website also offers to the User who wishes, the partial or complete organization of a wedding ceremony. Any User with internet access can access the site for free and from anywhere. The costs incurred by the User to access them (internet connection, computer equipment, etc.) are not the responsibility of the Editor.  The services mentioned above are accessible to the User only if he/she is a member of the site (that is, he/she is identified using his/her login credentials): 
The site and its various services may be interrupted or suspended by the Editor, particularly during maintenance, without notice or justification.`,
          "IDTRANSLATETCU19":` ARTICLE 4: Responsibility of the User `,
          "IDTRANSLATETCU20":`The User is responsible for the risks related to the use of his login and password.  The password of the User must remain secret. In case of password disclosure, the Editor declines all responsibility. The User assumes full responsibility for the use he makes of the information and content on the illicolove.com website.
          Any use of the Service by the User which has as a consequence directly or indirectly damages must be the subject of compensation for the benefit of the site.
          The site allows users to publish a search ad on the site by completing the “Publish an Ad” form.”.`,





          "IDTRANSLATETCU21":` The user undertakes to provide reliable information, offer recent photographs without obscenities, write in its search criteria respectful of others and the law and accepts that the advertisement is moderated or refused by the Editor, without obligation to give reasons after a refusal on his part to provide him with additional information to avoid false profiles.
          By publishing its ad on the site, the User assigns to the Editor the non-exclusive and free right to represent, reproduce, adapt, modify, and distribute its ad on social networks, or directly by an authorised third party; in accordance with his anonymity or the chosen mode of confidentiality.
          The Editor undertakes to preserve the anonymity of all users in the event that advertisements are broadcast on social networks.`,
          "IDTRANSLATETCU22":` ARTICLE 5: Responsibility of the Editor `,
          "IDTRANSLATETCU23":` Any malfunction of the server or the network cannot bind the Editor. 
          Similarly, the responsibility of the site cannot be incurred in case of force majeure or the unpredictable and insurmountable fact of a third party.
          The website illicolove.com undertakes to implement all the necessary means to guarantee the security and confidentiality of the data.
          However, it does not guarantee total security. 
          The Editor reserves the right to guarantee the reliability of the profiles, although the search ads posted on the site are deemed reliable and verified before validation of their back-up publication office by the proofreading and validation team of the Editor.`,



          "IDTRANSLATETCU24":` ARTICLE 6: Intellectual Property `,
          "IDTRANSLATETCU25":` BAKO FAMILIA & COMPANY is the exclusive owner of all intellectual property rights relating to the trademark, structure and content of the Site www.illicolove.com. The contents of the website www.illicolove.com are intended for a strictly personal, private and not collective use, freely for free content. The same applies to RSS feeds and newsletters. Any professional or commercial use or marketing of this content to third parties is prohibited, unless expressly agreed by BAKO FAMILIA & COMPANY.`,
          "IDTRANSLATETCU26":` ARTICLE 7: Personal data.`,
          "IDTRANSLATETCU27":` Consult our Privacy Policy, personal data and cookies here <a href="politique.html"><i class="bi bi-arrow-right-circle"></i></a>`,
          "IDTRANSLATETCU29":` ARTICLE 8: Hyperlinks `,
          "IDTRANSLATETCU30":` The domains to which the hypertext links on the site lead are not the responsibility of the BAKO FAMILIA & COMPANY Editor, who has no control over these links.  The Editor has established partnerships with service providers and may provide the User with information about other sites and/or services, for example by mentioning website addresses, and/or by hyperlinking to those sites. These hyperlinks that redirect to third-party sites have not been developed by the Editor and do not belong to it. The Editor therefore assumes no responsibility for these sites, their content, advertisements, products or services available on or from these sites. Furthermore, the Editor cannot be held liable for the information, opinions and recommendations made by these third parties.`,
          "IDTRANSLATETCU31":` The Editor shall not be liable for any damage or loss proven or alleged, consequential or in connection with the use, or trust in the content, goods or services available on these partner services or external sources.  The decision to activate these links is the full responsibility of the User.
          The Editor is not responsible for the availability of these sites and cannot control their content or validate the advertising, products and other information posted on these websites. It is possible for a third party to link to a page on illicolove.com without express permission from the Editor.`,
          "IDTRANSLATETCU32":` ARTICLE 9: Special Warning `,
          "IDTRANSLATETCU33":` In real life as in virtual life on the internet, you can cross paths with honest people as well as malicious people and scammers. 
          It is up to us individually to adopt certain attitudes of security in real life and moreover in the virtual world on the internet. BAKO FAMILIA & COMPANY invites you to:`,
          "IDTRANSLATETCU34":` Never send money to a stranger you met on this site; under no circumstances.`,
          "IDTRANSLATETCU35":` Never send intimate photographs to a contact met on this site`,




          "IDTRANSLATETCU36":` Be on your guard when someone claims to live in the area but works abroad.`,
          "IDTRANSLATETCU37":` Never give in under the pretext of an urgent situation where a loved one is sick and your virtual correspondent asks you to help him pay various fees. In such a case, we invite you to report the profile of these scammers to the Editor.`,
          "IDTRANSLATETCU38":` An emerging love relationship on illicolove.com cannot be a source of trouble and financial support for you. Therefore show great distrust when a stranger declares his love to you without having been able to meet you; and even after a physical encounter, take the necessary time before incurring any substantial expenditure in cash.`,
          "IDTRANSLATETCU39":` Always choose a public place for a first meeting.`,
          "IDTRANSLATETCU40":` Always report to a relative your positions when you are in the company of an unknown person you have just met. `,
          "IDTRANSLATETCU41":` Report and tell us, attempts to sell products or services, profiles that prove false despite our filtering after your private exchanges, threats and intimidations, abusive, homophobic, abusive and offensive comments, messages from minors, and requests for financial assistance or explicit photographs.`,
          "IDTRANSLATETCU42":` Consequently, the User acknowledges and accepts without reservation to be fully responsible for any action undertaken following the reading of a dating ad and generally to any information present on the Site. The provision of such data cannot be equated in any way with specific advice or decision support. The User is fully aware of the randomness of romantic encounters both in real life and on the internet.`,

"IDTRANSLATETCU43":` ARTICLE 10: Deletion of data after 1 year of inactivity.`,
          "IDTRANSLATETCU44":` For security reasons, if you have not authenticated on the Site for a period of one year, you will receive an email inviting you to log in as soon as possible, otherwise your profile will be deleted from our databases.`,




          "IDTRANSLATETCU45":` ARTICLE 11: Account deletion upon request.`,
          "IDTRANSLATETCU46":` The User has the option to delete his Account at
          any time, by simple request to the Editor or by the
          Account present in Account settings where applicable.`,
          "IDTRANSLATETCU47":` ARTICLE 12: Deletion of the account in case of violation of the UGC`,
          "IDTRANSLATETCU48":` In case of violation of one or more provisions of the UGC or of any other document incorporated herein by reference, the Editor reserves the right to terminate or restrict without any prior warning and in its sole discretion, your use and access to the Services, to your account and all linked Sites.`,
          "IDTRANSLATETCU49":` ARTICLE 13: Indications in the event of a security breach detected by the Editor.`,
          "IDTRANSLATETCU50": `We undertake to implement all appropriate technical and organisational measures in order to guarantee an appropriate level of security in view of the risks of accidental, unauthorized or illegal access, disclosure, alteration, loss or destruction of your personal data.`,
          "IDTRANSLATETCU51":` In the event that we become aware of illegal access to your personal data stored on our servers or those of our service providers, or of unauthorized access resulting in the realization of the risks identified above on it, we commit to:`,





          "IDTRANSLATETCU52":` Review and inform yourself of the causes of the incident (public report);`,
          "IDTRANSLATETCU53":` Take the necessary measures within the
          reasonable to lessen the adverse effects and harms that may result
          from that incident.`,
          "IDTRANSLATETCU54":` ARTICLE 14: Limitation of Liability `,
          "IDTRANSLATETCU55":` Under no circumstances shall the commitments set out in the above paragraph
          in the event of a security breach cannot be
          any recognition of fault or responsibility in relation to
          the occurrence of the incident in question.`,
          "IDTRANSLATETCU56":` ARTICLE 15: Duration of the contract `,
          "IDTRANSLATETCU57":` The duration of this contract is indefinite. The contract effect on the User from the beginning of the use of the service.`,
          "IDTRANSLATETCU58":` ARTICLE 16: Applicable law and jurisdiction `,
          "IDTRANSLATETCU59":` The language of these CGU is French and will predominate over all versions translated into another language. This contract depends on Benin legislation, in particular Law No. 2017-20 of 20 April 2018 on the Digital Code in the Republic of Benin. The choice of applicable law does not affect your rights as a consumer in accordance with the applicable law of your place of residence.`,
          "IDTRANSLATETCU60":` If you are a consumer, you and we agree to submit to the non-exclusive jurisdiction of Benin jurisdictions. In the event of an amicable dispute between the User and the Editor, the Cotonou Commercial Court will be competent to settle the dispute.`,
          "IDTRANSLATEPC1":` Privacy policy `,

          "IDTRANSLATEPC2":` Legal notice `,




          "IDTRANSLATEPC3":` These Legal Notices and Privacy Policy provide and enlighten you on how BAKO FAMILIA & COMPANY uses and protects the information you send us, Also, when you use our dating site available from the URL: www.illicolove.com.`,
          "IDTRANSLATEPC4":` Please note that our Privacy Policy may be amended and/or supplemented at any time, including with a view to complying with any legislative, regulatory, legal or technological developments. In such a case, the date of its update will be indicated in this policy. These modifications bind the user as soon as they are put online. 
          We therefore invite you to regularly consult these notices and privacy policy in order to be aware of any changes.`,
          "IDTRANSLATEPC5":` Declaration to the Data Protection Authority (APDP)`,
          "IDTRANSLATEPC6":` In accordance with Law no. 2017-20 of 20 April 2018 on the Digital Code in the Republic of Benin (5th Book on the Protection of Personal Data and Privacy) the website www.illicolove.com has been the subject of a declaration to the Personal Data Protection Authority (apdp.bj) under number…………`,
          "IDTRANSLATEPC7":` In any case, BAKO FAMILIA & COMPANY only collects personal information about the user for the purposes of the dating service offered by its website. The user shall provide this information with full knowledge of the facts, in particular when he himself enters it.`,





          "IDTRANSLATEPC8":` In accordance with the provisions of the Digital Code Law 2017-20 in the Republic of Benin, all users have a right of access, rectification and opposition to their personal data by making their written and signed request, accompanied by a copy of an identification document with the signature of the holder of the document, specifying the address to which the reply must be sent. No personal information of any user of our website "www.illicolove.com" is published, transferred or sold on any medium or to third parties without their knowledge.`,
          "IDTRANSLATEPC9":` Data privacy `,
          "IDTRANSLATEPC10":` Your personal data is confidential and will not be disclosed to third parties. 
          The private nature of our dating service does not allow us to communicate your personal data (names, contacts, addresses, etc.) to an individual, regardless of rank or quality.`,
          "IDTRANSLATEPC11": ` Right to access `,
          "IDTRANSLATEPC12":` In accordance with the provisions of the Digital Code Act in the Republic of Benin, all users of our website www.illicolove.com have the right to access, rectify, modify and delete data that concerns them individually. This right may be exercised by the holder upon request sent electronically to the following e-mail address: info@illicolove.com. Personal information collected is not entrusted to third parties.`,
          "IDTRANSLATEPC13":` Right to rectify `,






          "IDTRANSLATEPC14":` In accordance with the Digital Code Law in the Republic of Benin, any user of our website www.illicolove.com may request the rectification, updating, deletion, locking or erasure of the data concerning him, and may be inaccurate, incorrect, incomplete, equivocal or obsolete.`,
          "IDTRANSLATEPC15":` Shelf-life..`,
          "IDTRANSLATEPC16": `Your personal data is kept by BAKO FAMILIA & COMPANY only for the time corresponding to your need for dating services. However, this shelf life does not exceed thirteen (13) months.`,
          "IDTRANSLATEPC17":` Complaint to the competent authority `,
          "IDTRANSLATEPC18":` If you consider that BAKO FAMILIA & COMPANY does not respect its obligations with regard to your personal data collected during your visit to its website www.illicolove.com, you can address, as prescribed by the legal procedure, a complaint or request to the Data Protection Authority (APDP).`,
          "IDTRANSLATEPC19":` Intellectual property `,
          "IDTRANSLATEPC20":` All the content of this website, including, without limitation, graphics, images, texts, videos, animations, sounds, logos, gifs and icons as well as their formatting are the exclusive property of BAKO FAMILIA & COMPANY with the exception of trademarks, logos or content belonging to other partner companies or authors. 
          Any reproduction, distribution, modification, adaptation, retransmission or publication, even partial, of these various elements is strictly prohibited without the express written consent of BAKO FAMILIA & COMPANY.`,
          "IDTRANSLATEPC21":` Terms of service `,
          "IDTRANSLATEPC22":` The website www.illicolove.com is available in French, with translations into English and Spanish. For greater ease of use, we recommend using compatible and modern browsers like: Chrome, Safari, Firefox.`,
          "IDTRANSLATEPC23":` Information and suggestions `,







          "IDTRANSLATEPC24":` BAKO FAMILIA & COMPANY implements all means in its possession, to ensure a reliable dating service and a permanent update of its website www.illicolove.com. However, errors or omissions may occur. As a result, any user can send us suggestions or information to: info@illicolove.com and indicate any changes to the site they deem relevant.`,
          "IDTRANSLATEPC25":`Cookies.`,
          "IDTRANSLATEPC26":` For technical performance, statistics and display purposes, the website www.illicolove.com may use cookies. Cookies are small text files stored on your device, which do not allow the identification of the user, but which record information related to the navigation of a terminal on a website. Some parts of this site cannot function without the acceptance of cookies. The data thus obtained are intended to facilitate further navigation on this site. Cookies are also used for various audience and attendance measures.`,
          "IDTRANSLATEPC27":` Refusing to install a cookie may make it impossible to access certain features. Any user of this website can however configure his terminal to decline the installation of cookies, as indicated below:`,
          "IDTRANSLATEPC28":` Safari users: Choose Safari; Preferences,   click Privacy, then select “Cookies and website data”. Always block: Safari does not allow any website, third party or advertiser to store cookies and other data on your Mac. This may prevent some websites from functioning properly.`,





          "IDTRANSLATEPC29":`Safari users: Choose Safari Preferences, click on Privacy, then select the "Cookies and website data" option. Always block: Safari does not allow any website, third party or advertiser to store cookies and other data on your Mac. This may prevent certain websites from functioning properly.`,
          "IDTRANSLATEPC30":` Google Chrome users: Menu; Settings;
          Display advanced settings (located at the bottom of the page).
          You must then click on the Content Settings button and check the Block cookies and third-party site data box, then click OK to confirm your choice.`,
          "IDTRANSLATEPC31":` Internet Explorer users: Menu Internet Options Privacy tab and on the Advanced button to display the Advanced Privacy Settings window. Then select the Ignore automatic cookie management check box and then select Decline in the Third party cookies column.`,
          "IDTRANSLATEPC32":` Microsoft Edge users: tool tab/ internet options. Click Privacy and choose Block all cookies.`,




          "IDTRANSLATEPC33":` In accordance with the relevant practices, certain cookies are exempt from the prior collection of your consent insofar as they are essential for the functioning of this website. Their purpose is to facilitate electronic communication. These include session identifier, authentication and customization cookies for your interface.  These cookies are issued and managed by BAKO FAMILIA & COMPANY and are all subject to this policy.`,
          "IDTRANSLATEPC34":` Hyperlinks `,
          "IDTRANSLATEPC35":` The website www.illicolove.com may offer links to other websites or other resources available on the Internet. BAKO FAMILIA & COMPANY has no means to control the sites connected to its website. Moreover, it does not answer for the availability of such sites and external sources, nor does it guarantee it. It cannot be held responsible for any damage of any kind resulting from the content of these sites or external sources.`,

          "IDTRANSLATECONSULTE1":` Africa `,
          "IDTRANSLATECONSULTE2":`Europe`,
          "IDTRANSLATECONSULTE3":` Other countries in the world `,
          "IDTRANSLATEPROFIL1": " Valid account ",
          "IDTRANSLATEPROFIL2": " Invalid Account ",
          "IDTRANSLATEPROFIL3":` Debit account `,
          "IDTRANSLATEPROFIL4":` Debit account `,
          "IDTRANSLATEPROFIL5":` My plan `,
          "IDTRANSLATEPROFIL6":` My plan `, 
          "IDTRANSLATEPROFIL7":` My data `,
          "myNameIDX":` Delete your account `,
          "myBtn":` Recharge my account `,
          "myBtn2":` Recharge my account `,
          "IDTRANSLATEPROFIL9":` Go to Homepage`,
          "IDTRANSLATEPROFIL10":` Log out `,
          "CONSULTEZLESANNONCES":` CHECK ADS `,
          "IDTRANSLATEPROFIL11":` EDIT YOUR AD `, 
          "IDTRANSLATEPROFIL12":` POST AN AD `,
          "IDTRANSLATEPROFIL13":` Welcome!`,
          "exampleModalLongTitle":` One unit is worth 95 FCFA, or 0.144 Euros.`,
          "errorSms":` You must enter a number.`,
          "SmspayId":` Enter the number of units here.`,
          "IDTRANSLATEPROFIL14":` Back `,
          "payYourUnitybtn":` Confirm `,
          "CHOISEYOURPAIEMENT":`Choose the payment method.`,
          "exampleModalLongTitleX":` Secure your account.`,
          "IDTRANSLATEPROFIL15":` Please provide an answer that you will never forget, which will be requested when you retrieve your account. Without this answer, your account will remain inaccessible. `,
          "IDTRANSLATEPROFIL16":` Select your question `,
          "IDTRANSLATEPROFIL17":` What makes a person special?`,
          "IDTRANSLATEPROFIL18":` What makes you feel most loved?`,
          "IDTRANSLATEPROFIL19":` How do you imagine your daily life?`,
          "IDTRANSLATEPROFIL20":` What’s more important to you?`,
          "IDTRANSLATEPROFIL21":` What is the name of the person who inspires you?`,
          "IDTRANSLATEPROFIL22":` What’s your favorite country?`,
          "IDTRANSLATEPROFIL23":` Who’s your favorite player?`,
          "IDTRANSLATEPROFIL24":` Who’s your favorite artist?`,
          "IDTRANSLATEPROFIL25":` What is your answer? Just one word. No space.`,
          "submitFormID":`Subscribe`,
          "TOCLOSEMODALID":`Close`,  
          "IDTRANSLATEPROFIL26":` Confirm `, 
          "IDTRANSLATEPROFIL27":` Safety answering `,
          "payYourUnity":` Enter the unit  `,
          congratulationsTitle: " Congratulations!",
          accountSecureMessage: " Your account is secure. Thank you!",       
          accountSecureMessageX: " Do not put any space. Thank you!",


          "IDTRANSLATEPROFIL28":` Your debit account is empty. Please pay units to access contacts ads that will interest you.`,
          "IDTRANSLATEPROFIL29":` You cannot pay for the units at this time as you are still on your Debit account. Thank you! `,
          "IDTRANSLATEPROFIL30W":` You're sure?`,
          "IDTRANSLATEPROFIL30":` You can’t go back!`,
          "IDTRANSLATEPROFIL31":` Yes, delete it!`, 
          "IDTRANSLATEPROFIL32":` You're sure? ?`,
          "IDTRANSLATEPROFIL33":` After logging out, you have the option to log back in.`,
          "IDTRANSLATEPROFIL34":`Yes, log out !`,
          "IDTRANSLATEPROFIL35":` Offline `,
          "IDTRANSLATEPROFIL36":` You’ve been disconnected.`,
          "IDTRANSLATEPROFIL37":` Would you like to visit our homepage?`,
          "IDTRANSLATEPROFIL38":` Deleted!`,

          "IDTRANSLATEPROFIL38X":` success.`,
          "IDTRANSLATEPROFIL39X":`Your photo has been successfully updated.`,
          "IDTRANSLATEPROFIL40X":` error`,
          "IDTRANSLATEPROFIL41X":`The update of your photo has failed. `,

          "IDTRANSLATEPROFIL39":` Your account has been successfully deleted!`,
          "IDTRANSLATEPROFIL40":` Removed!`,
          "IDTRANSLATEPROFIL41":` Error while deleting user! `,
          "IDTRANSLATEPROFIL42":` There is an ERROR `,
          "IDTRANSLATEPROFIL42Q":`There is an ERROR`,
          "IDTRANSLATEPROFIL42QX":`There is an ERROR`,
          "IDTRANSLATEPROFIL43":` The field is not well filled!`,
          "IDTRANSLATEPROFIL44":` Something is not right!`,
          "IDTRANSLATEPROFIL44IN":`Dear users, we would like to inform you that this payment method is not yet available. Please use Feexpay for now to carry out your transactions. Thank you!`,
          "IDTRANSLATEPROFIL45":` Data is not updated!`,
          "IDTRANSLATEPROFIL46":` Hi, You no longer have a unit. Please reload. Go to your profile. Thank you `,
          "IDTRANSLATEPROFIL47":` You're sure?`,
          "IDTRANSLATEPROFIL48":` By modifying your ad, it will be submitted again to the administrators for validation. This process may take 24 hours.`,




          "IDTRANSLATEPROFIL49":` Back `,
          "IDTRANSLATEPROFIL50":` Yes! Change.`,
          "IDTRANSLATELOGIN1":` Log in.`,
          "IDTRANSLATELOGIN2":`Email`,
          "IDTRANSLATELOGIN3":` Your email address `,
          "IDTRANSLATELOGIN4":` Password `,
          "IDTRANSLATELOGIN5":` Your password `,
          "IDTRANSLATELOGIN6":` Remember me `,
          "IDTRANSLATELOGIN7":` Forgotten password `,
          "IDTRANSLATELOGIN8":` I have no account `,
          "IDTRANSLATELOGIN9":` Sign up for free `,
          "IDTRANSLATELOGIN10":` Connect `,
          "IDTRANSLATELOGIN11":` Success `,
          "IDTRANSLATELOGIN12":` You are successfully logged in!`,
          "IDTRANSLATELOGIN13":` Sorry `,
          "IDTRANSLATELOGIN14":` Incorrect password !`,
          "IDTRANSLATELOGIN15":`Sorry`,
          "IDTRANSLATELOGIN16":` The user does not exist with this email!`,
          "IDTRANSLATESIGNUP1":` Sign up `,
          "IDTRANSLATESIGNUP2":` Nickname `, 
          "IDTRANSLATESIGNUP3":` Nickname `,
          "IDTRANSLATESIGNUP4":` Full name `, 
          "IDTRANSLATESIGNUP5":` Full name `,
          "IDTRANSLATESIGNUP6":`Email`,
          "IDTRANSLATESIGNUP7":` Your email address `,
          "IDTRANSLATESIGNUP8":`Password`,
          "IDTRANSLATESIGNUP9":`Your password`,
          "IDTRANSLATESIGNUP10":` I’ve read and agree to the terms and conditions `,
          "IDTRANSLATESIGNUP11":` Read and accept our terms and conditions `,
          "IDTRANSLATESIGNUP12":` I already have an account `,
          "IDTRANSLATESIGNUP13":` Log in `,
          "IDTRANSLATESIGNUP14":`Sorry`,




          "IDTRANSLATESIGNUP15":`You already have an account with this email address! `,
          "IDTRANSLATESIGNUP16":` Successful `,
          "IDTRANSLATESIGNUP17":` You are successfully registered!`,
          "IDTRANSLATESIGNUP18":` Error sending email address to Firebase `,
          "IDTRANSLATESIGNUP19":` Do not put any space. Thank you!`,
          "IDTRANSLATESIGNUP19PHONE":`Please provide a valid phone number.`,
          "IDTRANSLATESIGNUP19PHONEX":`Please provide a valid phone number.`,
          "IDTRANSLATEFORGET1":` Send the email address used when registering.`,
          "IDTRANSLATEFORGET2":`Email`,
          "IDTRANSLATEFORGET3":`Your email`,
          "IDTRANSLATEFORGET4":`Send`,
          "IDTRANSLATEFORGET5":` Confirm `,
          "IDTRANSLATEFORGET6":` Give the right answer!`,
          "IDTRANSLATEFORGET7":` Enter your new password!`,
          "IDTRANSLATEFORGET8":` Enter your new password!`, 
          "IDTRANSLATEFORGET9":`Super...`,
          "IDTRANSLATEFORGET10":` Password updated successfully!`,
          "IDTRANSLATEFORGET11":` Log in `,
          "IDTRANSLATEFORGET12":`Ok`,
          "IDTRANSLATEFORGET13":` Error while updating email.`,
          "IDTRANSLATEFORGET14":` This is not the correct answer `,
          "IDTRANSLATEFORGET15":` The user does not exist.`, 
          "IDTRANSLATEFORM1":` MY PROFILE `,
          "IDTRANSLATEFORM1W":` MY PROFILE `,
          "IDTRANSLATEFORM2":` MY PROFILE `,
          "IDTRANSLATEFORM3":` MY PROFILE `,
          "IDTRANSLATEFORM4":` PROFILE I’M LOOKING FOR `,
          "IDTRANSLATEFORM4W":` PROFILE I’M LOOKING FOR `,
          "IDTRANSLATEFORM5":` PROFILE I’M LOOKING FOR `,
          "IDTRANSLATEFORM6":` PLEASE FILL OUT THE FORM BELOW.`,
          "IDTRANSLATEFORM7":` PROVIDE ACCURATE AND INSIGHTFUL INFORMATION.`,
          "IDTRANSLATEFORM8":` My home country <i class="fa fa-star required"></i>`,
          "IDTRANSLATEFORM9":` My home town <i class="fa fa-star required"></i>`,
          "IDTRANSLATEFORM10":` Name or pseudonym <i class="fa fa-star required"></i>`,
          "IDTRANSLATEFORM11":` My age <i class="fa fa-star required"></i>`,
          "IDTRANSLATEFORM9PL":`My home town `,





          "IDTRANSLATEFORM10X":`My home town`,
          "IDTRANSLATEFORM11X":`My age`,
          "IDTRANSLATEFORM8X":`My home country`,
          "IDTRANSLATEFORM9X":`My age`,
          "IDTRANSLATEFORM12":` Please enter only numbers.<i class="fa fa-star required"></i>`,
          "IDTRANSLATEFORM13":` My Gender <i class="fa fa-star required"></i>`,
          "IDTRANSLATEFORM14":` Man `,
          "IDTRANSLATEFORM15":` Woman `,
          "IDTRANSLATEFORM16":`Trans`,
          "IDTRANSLATEFORM17":`Genderfluid`,
          "IDTRANSLATEFORM18":`Intersex`,
          "IDTRANSLATEFORM19":` Agender `,
          "IDTRANSLATEFORM20":` Aromantic `,
          "IDTRANSLATEFORM21":` Asexual `,
          "IDTRANSLATEFORM22":` Bisexual `,
          "IDTRANSLATEFORM23":` Cisgender `,
          "IDTRANSLATEFORM24":` Cisnormativity `,
          "IDTRANSLATEFORM25":` Semi-romantic `,
          "IDTRANSLATEFORM26":` Semi-sexual `,
          "IDTRANSLATEFORM27":` Heteromantivity `,
          "IDTRANSLATEFORM28":` IEL `,
          "IDTRANSLATEFORM29":` Mix `,
          "IDTRANSLATEFORM30":` Non-binary `,
          "IDTRANSLATEFORM31":` Pansexual`,
          "IDTRANSLATEFORM32":` Polyamorous `,
          "IDTRANSLATEFORM33":`Queer`,
          "IDTRANSLATEFORM34":`Trans`,
          "IDTRANSLATEFORM35":`Transition`,
          "IDTRANSLATEFORM36":` PLEASE FILL OUT THE FORM BELOW.`,
          "IDTRANSLATEFORM37":` Provide accurate and insightful information.`,
          "IDTRANSLATEFORM38":` My marital status <i class="fa fa-star required"></i>`,
          "IDTRANSLATEFORM39":` Bachelor `,
          "IDTRANSLATEFORM40":` In a relationship `,
          "IDTRANSLATEFORM41":` Divorced `,
          "IDTRANSLATEFORM42":` widow (wer)`,
          "IDTRANSLATEFORM43":` My citizenship <i class="fa fa-star required"></i>`,
          "IDTRANSLATEFORM44":` Phone <i class="fa fa-star required"></i>`,
          "IDTRANSLATEFORM45":` Enter only your number without the country prefix <i class="fa fa-star required"></i>`,
          "IDTRANSLATEFORM46":` My profession or occupation <i class="fa fa-star required"></i>`,
          "IDTRANSLATEFORM47":` My job `,
          "IDTRANSLATEFORM48":` PLEASE COMPLETE THE FORM BELOW.`,
          "IDTRANSLATEFORM49":` Provide accurate and insightful information.`,
          "IDTRANSLATEFORM50":` I want a meeting <i class="fa fa-star required"></i>`,
          "IDTRANSLATEFORM51":` Friendship, a company to break loneliness `,
          "IDTRANSLATEFORM52":` Sustainable `,
          "IDTRANSLATEFORM53":` Marriage-inducing `,
          "IDTRANSLATEFORM54":` Proof of identity `,
          "IDTRANSLATEFORM55":`Photo 1 <i class="fa fa-star required"></i>`,
          "IDTRANSLATEFORM56":`Photo 2 <i class="fa fa-star required"></i>`,
          "IDTRANSLATEFORM57":` PLEASE COMPLETE THE FORM BELOW.`,
          "IDTRANSLATEFORM58":` Provide accurate and insightful information.`,
          "IDTRANSLATEFORM59":`His/Her Gender <i class="fa fa-star required"></i>`,
          "IDTRANSLATEFORM60":`Man`,
          "IDTRANSLATEFORM61":`Woman`,
          "IDTRANSLATEFORM62":`Trans`,
          "IDTRANSLATEFORM63":`Genderfluid`,
          "IDTRANSLATEFORM64":`Intersex`,
          "IDTRANSLATEFORM65":`Agender`,
          "IDTRANSLATEFORM66":`Aromantic`,
          "IDTRANSLATEFORM67":`Asexual`,
          "IDTRANSLATEFORM68":`Bisexual`,




          "IDTRANSLATEFORM69":`Cisgender`,
          "IDTRANSLATEFORM70":` Cisnormativity `,
          "IDTRANSLATEFORM71":`Semi-romantic`,
          "IDTRANSLATEFORM72":`Semi-sexual`,
          "IDTRANSLATEFORM73":` Heteromantivity `,
          "IDTRANSLATEFORM74":`IEL`,
          "IDTRANSLATEFORM75":`Mix`,
          "IDTRANSLATEFORM76":`Non-binary`,
          "IDTRANSLATEFORM77":`Pansexual`,
          "IDTRANSLATEFORM78":` Polyamorous `,
          "IDTRANSLATEFORM79":`Queer`,
          "IDTRANSLATEFORM80":`Trans`,
          "IDTRANSLATEFORM81":`Transition`,
          "IDTRANSLATEFORM82":` His/Her age group <i class="fa fa-star required"></i>`,
          "IDTRANSLATEFORM83":` His/Her marital status <i class="fa fa-star required"></i>`,
          "IDTRANSLATEFORM84":` Bachelor `,
          "IDTRANSLATEFORM85":` In a relationship `,
          "IDTRANSLATEFORM86":` Divorced `,
          "IDTRANSLATEFORM87":` widow (wer)`,
          "IDTRANSLATEFORM88":` His/Her country of residence <i class="fa fa-star required" ></i>`,
          "IDTRANSLATEFORM89":` You can select multiple countries <i class="fa fa-star required"></i>`,
          "IDTRANSLATEFORM90":` His/Her country `,
          "IDTRANSLATEFORM91":` His/Her country of residence `,
          "IDTRANSLATEFORM92":` PLEASE COMPLETE THE FORM BELOW.`,
          "IDTRANSLATEFORM93":` Provide accurate and insightful information.`,
          "IDTRANSLATEFORM94":` Describe the physical aspect you want.`,
          "IDTRANSLATEFORM95":` His/Her hometown <i class="fa fa-star required"></i>`,
          "IDTRANSLATEFORM96":` His/Her town `,
          "IDTRANSLATEFORM97":` Work or occupation <i class="fa fa-star required"></i>`,
          "IDTRANSLATEFORM98":` His/Her work `,
          "IDTRANSLATEFORM99":` More details.`,
          "IDTRANSLATEFORM100":` More details.`,
          "IDTRANSLATEFORM10w":` Physical aspects`,
          "IDTRANSLATEFORM101":` Next `,
          "IDTRANSLATEFORM102":` Previous `,
          "IDTRANSLATEFORM103":` Send `,


          "IDTRANSLATEFORM104":`<p > Personal data collected in this form by <strong style="color: #000080;">BAKO FAMILIA & COMPANY</strong> will be treated exclusively for the purposes of the smooth running of the dating service that you request. The personal data collected is not communicated to anyone without your consent. 
          Pursuant to the provisions of Law 2017-20 on the Digital Code in the Republic of Benin on the Protection of Personal Data, the processing of the collected data was declared before to APDP.</em> </p>
          <hr>
          <p class="mb-0"> In accordance with the aforementioned law, you can exercise your rights of access, opposition, rectification and deletion with <strong style="color: #000080;">BAKO FAMILIA & COMPANY</strong>.
          </em></p>`,
          "IDTRANSLATEFORM105":` Your image is too small. Please select an image of at least 300x300 pixels.`,
          "IDTRANSLATEFORM106":` Error occurred when calling REST Countries API `,
          "IDTRANSLATEFORM107":` Just put the number without the prefix `,
          "IDTRANSLATEFORM108":` Please select the country.`,
          "IDTRANSLATEFORM109":` Successful `,
          "IDTRANSLATEFORM110":` Your form is submitted for validation within 24 hours <i class="fa fa-heart"></i>.`,
          "IDTRANSLATEFORM111":` Sorry `,
          "IDTRANSLATEFORM112":` Not all of your fields are filled.`,
          "IDTRANSLATEUSERD1":` Contact me`,





          "IDTRANSLATEUSERD2":` To contact me `,
          "IDTRANSLATEUSERD3":`<i class="bi bi-alexa" style="font-size: 3vh !important;"></i> My Profile `,
          "IDTRANSLATEUSERD4":` Answers `,
          "IDTRANSLATEUSERD5":` My hometown`,
          "IDTRANSLATEUSERD6":` My name or pseudonym`,
          "IDTRANSLATEUSERD7":` My age group`,
          "IDTRANSLATEUSERD8":`My Gender`,
          "IDTRANSLATEUSERD9":` My marital status`,
          "IDTRANSLATEUSERD10":` My citizenship `,
          "IDTRANSLATEUSERD11":` My work or occupation`,
          "IDTRANSLATEUSERD12":` I want a dating`,
          "IDTRANSLATEUSERD13":` My physical preferences `,
          "IDTRANSLATEUSERD14":` Other details`,
          "IDTRANSLATEUSERD15":`<i class="bi bi-alexa" style="font-size: 3vh !important;"></i> Profile I’m looking for `,
          "IDTRANSLATEUSERD16":` Answers `,
          "IDTRANSLATEUSERD17":` Gender`,
          "IDTRANSLATEUSERD18":` Her/His age group`,
          "IDTRANSLATEUSERD19":` Her/His marital status`,
          "IDTRANSLATEUSERD20":` Her/His country of residence`,
          "IDTRANSLATEUSERD21":` Her/His hometown `,
          "IDTRANSLATEUSERD22":` Her/His work or occupation:`,
          "TIDTRANSLATEUSERD23":`online the`,





          "IDTRANSLATEUSERD24":`<i class="fas fa-database" style="font-size: 5vh !important; color: #FFB6C1;"></i> No data.`,
          "IDTRANSLATEUSERD25":` No data.`,
          "IDTRANSLATEUSERD26":` There is an error.`,
          "IDTRANSLATEUSERD27":` Your account is debited `,
          "IDTRANSLATEUSERD28":` Your data is not updated.`,
          "IDTRANSLATEUSERD29":` You can contact other users in a moment, after validating your user profile and publishing your search form.`,
          "IDTRANSLATEUSERD30":` Do you want to post your ad?`,
          "IDTRANSLATEUSERD31":` Your units are sold out. You can no longer contact other users.`,
          "IDTRANSLATEUSERD32":` Do you want to pay units?`,
          "IDTRANSLATEUSERD33":`Okay`,
          "IDTRANSLATEUSERD34":` Visit the profile!`,
          "IDTRANSLATEUSERD35":`<i class="bi bi-eye" style="color: white;"></i> Click to display.`,
          "texteIDTRANSLATEUSERD24YX": "online",
          "myNameIDwallet":"Withdraw your commissions.",
          "MYEWALLETID":`<i class="fa fa-align-left"></i>My E-wallet`,
          "MYEWALLETID1":"Total Balance",
          "comeBackId":"Return",
          "idTogetwallet":"Withdraw your earnings",
          "HISTORYISMY":"History",
          "IDTRANSLATEWALLETU":"In progress",
          "IDTRANSLATEWALLETX":"Paid",
          "IDTRANSLATEWALLET":"Sorry!",
          "IDTRANSLATEWALLETM":"Your transfer has failed. Please try again later.",
          "IDTRANSLATEWALLET1":"Congratulations!",
          "IDTRANSLATEWALLET2":"Your transfer was successful!",
          "TITLEWALLETID": "E-wallet",
          "IDTRANSLATEFOEMXX":"Please enter only letters, numbers are not allowed.",
          "linkInput": "Copy your affiliate link here.",
          "TERMINATOR" :"FINISH",
          "PHOTOID" :"PHOTO",
          "TERMINATORW" :"FINISH",
          "PHOTOIDW" :"PHOTO",
          "STEPS14":"Step   1 - 4",
          "STEPS23":"Step   2 - 4",
          "STEPS34":"Step   3 - 4",
          "STEPS44":"Step   4 - 4",
          "IDTRANSLATEPROFIL29FILE" :"Do you want to send this photo ?",
          "IDTRANSLATEPROFIL29FILE1" :"Return", 
          "IDTRANSLATEPROFIL29FILE2" :"Yes",
          "IDTRANSLATESIGNUP19OPTIONSERROR" :"An error occurred during the geolocation request.",
          "IDTRANSLATESIGNUP19OPTIONS" :"We regret to inform you that you cannot use our services until your location is accepted.",
          "IDTRANSLATESIALERT1" :"Información",
          "IDTRANSLATESIALERT2" :"Estimados visitantes, con el fin de garantizar su seguridad y combatir los anuncios falsos, estamos recuperando su ubicación.",
          "IDTRANSLATESIALERT3" :"¡Sí, acepto!",

          "IDTRANSLATESIALERT4" :"Rechazado",

          "CONTRACTID1":`Affiliate Agreement`,
          "CONTRACTID2":`
          Between: illicolove, hereinafter referred to as "the dating site,"
          and: ME, hereinafter referred to as "the Affiliate."`,
          "CONTRACTID3":`Purpose`,
          "CONTRACTID4":` This affiliate agreement is intended to govern the relationship between illicolove and the Affiliate in connection with the affiliate program of the  <a href="https://illicolove.com">illicolove.com</a> dating site.`,
          "CONTRACTID5":`1. Affiliate Program`,
          "CONTRACTID6":`Illicolove operates an online affiliate program to promote its romantic dating services.`,
          "CONTRACTID7":`2. Affiliate's Role`,
          "CONTRACTID8":`The Affiliate agrees to promote the dating site's services using unique affiliate links provided by illicolove, as well as other promotional methods approved by the site.`,
          "CONTRACTID9":`3. Affiliate Compensation`,
          "CONTRACTID10":`3.1. The Affiliate will receive a commission of 100 F CFA for each new member who registers on the  <a href="https://illicolove.com">illicolove.com</a> site through the Affiliate's unique affiliate link and posts a love-seeking advertisement.`,
          "CONTRACTID11":`3.2. Additionally, the Affiliate will receive a 10% commission on each purchase made by referred members through their affiliate link.`,
          "CONTRACTID12":`4. Commission Payment`,
          "CONTRACTID13":`Illicolove will pay the Affiliate's commission on a regular monthly basis upon request through mobile money or bank transfer, at the Affiliate's choice. Transfer fees are the responsibility of the Affiliate.`,
          "CONTRACTID14":`5. Duration of the Agreement`,
          "CONTRACTID15":`This affiliate agreement shall come into effect on the date of acceptance by the Affiliate and shall remain in effect until terminated by either party, subject to written notice of thirty (30) days.`,
          "CONTRACTID16":`6. Termination`,
          "CONTRACTID17":`Illicolove or the Affiliate may terminate this agreement at any time by providing written notice to the other party. Any unpaid commissions will be settled in accordance with the terms of this agreement.`,
          "CONTRACTID18":`7. Applicable Law`,
          "CONTRACTID19":`This agreement is governed by the laws of Benin, and any dispute arising from this agreement, in the absence of an amicable settlement, shall be subject to the exclusive jurisdiction of the Commercial Courts of Cotonou.`,

          "IDTRANSLATESIALERT1" :"information",
          "IDTRANSLATESIALERT2" :"Dear visitors, for security reasons and to prevent false advertisements, we are retrieving your location.",
          "IDTRANSLATESIALERT3" :"Yes, I accept!",
          "IDTRANSLATESIALERT4" :"Denied",

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
      $("#IDTRANSLATE7").text(i18next.t("IDTRANSLATE7"));
      $("#IDTRANSLATE7").text(i18next.t("IDTRANSLATE2KTI"));
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
      $("#hecountriesId").html(i18next.t("IDTRANSLATEFORM89"));
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
      $("#CONTRACTID12").text(i18next.t("CONTRACTID12"));
      $("#CONTRACTID13").text(i18next.t("CONTRACTID13"));
      $("#CONTRACTID14").text(i18next.t("CONTRACTID14"));
      $("#CONTRACTID15").text(i18next.t("CONTRACTID15"));
      $("#CONTRACTID16").text(i18next.t("CONTRACTID16"));
      $("#CONTRACTID17").text(i18next.t("CONTRACTID17"));
      $("#CONTRACTID18").text(i18next.t("CONTRACTID18"));
      $("#CONTRACTID19").text(i18next.t("CONTRACTID19"));

      $("#STEPS14").text(i18next.t("STEPS14"));
      $("#STEPS23").text(i18next.t("STEPS23"));
      $("#STEPS34").text(i18next.t("STEPS34"));
      $("#STEPS44").text(i18next.t("STEPS44"));
      
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
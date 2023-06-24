$(document).ready(function() {
    // Configuration de i18next pour les différentes langues
    i18next.init({
      lng: localStorage.getItem('selectedLanguage') || 'fr',
      debug: true, 
      resources: {
        fr: {
          translation: {
            "IDTRANSLATE1": "Accueil",
            "IDTRANSLATE2": "À propos",
            "IDTRANSLATE3": `Comment ça fonctionne ?`,
            "IDTRANSLATE4": `Termes`,
            "IDTRANSLATE5":"Conditions Générales d’Utilisation",
            "IDTRANSLATE6":"Politique de Confidentialité",
            "IDTRANSLATE7":"Contact",
            "IDTRANSLATE8":"S'inscrire",
            "IDTRANSLATE9":"Se connecter",
            "IDTRANSLATECONTACT1":"Contact",
            "IDTRANSLATECONTACT2":"Contactez-nous",
            "IDTRANSLATECONTACT3":"Adresse",
            "IDTRANSLATECONTACT4":'Téléphone',
            "IDTRANSLATECONTACT5":"E-mails",
            "IDTRANSLATECONTACT6":"Réseaux sociaux",
            "IDTRANSLATE1INF1":`Votre adresse électronique est collectée et traitée par BAKO FAMILIA & COMPANY pour vous tenir informer de nouvelles fonctionnalités du site illicolove ou de mise à jour.
            En application de la loi 2017-20 portant code du numérique en République du Bénin, sur la protection des
            données à caractère personnel, vous pouvez vous désabonner ou exercer vos droits d’accès, d’opposition,
            de rectification et de suppression en envoyant un mail au info@illicolove.com`,
            "IDTRANSLATE10":"illicolove,",
            "IDTRANSLATE11":`votre plateforme de rencontres, pour lutter contre le célibat et
            la solitude.`,
            "IDTRANSLATE12":`Nous considérons la solitude involontaire comme un problème humanitaire et nous
            nous engageons à offrir une solution aux personnes qui en souffrent.`,
            "IDTRANSLATE13":`À propos`,
            "IDTRANSLATE14":`À propos de nous`,
            "IDTRANSLATE15":`Votre plateforme de rencontres en ligne illicolove.com vous est proposée par les
            Établissements BAKO FAMILIA &amp; COMPANY, une entreprise individuelle(EI) de
            droit béninois immatriculée au Registre du Commerce et du Crédit Mobilier RCCM
            RB/COT/08/A4101 ; à l’Identifiant Fiscal Unique (IFU) 3200800938610.`,
            "IDTRANSLATE16":`Elle a pour activités, le Wedding planning (accompagnement dans l’organisation de
            mariage), le Tourisme-Loisirs, l’organisation de foires et Salons. Elle a été créée en
            Mai 2008 à Cotonou. `,
            "IDTRANSLATE17":`Plus de détails`,
            "IDTRANSLATE18":`Nos objectifs`,
            "IDTRANSLATE19":`Article 16`,




            "IDTRANSLATE20":`Notre cible`,
            "IDTRANSLATE21":`La mise en service de cette plateforme de rencontres en ligne répond à nos initiatives de lutte contre le célibat et la solitude.
            Elle matérialise notre action dans la ligne définie par la Déclaration Universelle des
            Droits de l’Homme en son article 16, qui rappelle le droit au mariage pour la femme
            et pour l’homme, et l’importance de la famille qui doit être protégée par la société et
            par l’Etat.`,
           "IDTRANSLATE22":`Nos valeurs :`,
           "IDTRANSLATE23":`La fiabilité,`,
           "IDTRANSLATE24":`La courtoisie et`,
           "IDTRANSLATE25":`La discrétion.`, 
           "IDTRANSLATE26":`À partir de l’âge nubile, l’homme et la femme, sans aucune restriction quant à la
           race, la nationalité ou la religion, ont le droit de se marier et de fonder une famille.
           Ils ont des droits égaux au regard du mariage, durant le mariage et lors de sa
           dissolution.`,
           "IDTRANSLATE27":`Le mariage ne peut être conclu qu’avec le libre et plein consentement des futurs
           époux.`,
           "IDTRANSLATE28":`La famille est l’élément naturel et fondamental de la société et a droit à la
           protection de la société et de l’Etat.
           
           La solitude, le célibat, l’isolement social, constituent un impératif humanitaire qui
           interpelle les pouvoirs publics, les associations et les entreprises du domaine.
           La solitude chronique et involontaire constitue un drame individuel que vivent ceux
           qui en souffrent, la plupart du temps, en silence.
           Illicolove.com a vu le jour dans ce contexte, avec la volonté de proposer autrement et
           simplement, des services de rencontres en ligne ; avec une chasse avérée aux profils
           fictifs.
           Bienvenue !`,
           "IDTRANSLATE29":`Nous ciblons uniquement les particuliers :`,
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
           "IDTRANSLATEX4":`Dès votre inscription, illicolove vous offre trois (03) unités d’une valeur de 295 Francs
           CFA soit 0.43 Euros.
           Une unité valant 95 Francs CFA soit 0.144 Euros.`,
           "IDTRANSLATEX5":`Connexion`,
           "IDTRANSLATEX6":`Votre connexion sur illicolove vous permet d&#39;accéder à toutes les fonctionnalités et
           services réservés aux utilisateur.trices enregistrés.`,
           "IDTRANSLATEX7":`Publier une Annonce`,
           "IDTRANSLATEX8":`En cliquant sur le bouton &quot;Publiez votre annonce&quot;, vous pouvez choisir de publier soit
           sur la page &quot;Afrique&quot;, soit sur la page &quot;Europe&quot; ou sur la page &quot;Autres pays du
           monde&quot; ; selon votre lieu de résidence. Remplissez simplement le formulaire de
           recherche qui s’affichera.`,




           "toopenPUAID":`suite...`,
           "openPUA":`Nous vous invitons 
           à publier votre annonce sur la page de
             votre zone géographique de résidence, toutefois, vous pouvez consulter et prendre
             contact avec tout profil d’une annonce de recherche en dehors de votre zone
             géographique de résidence.
             Par exemple, si vous habitez en France, vous devez publier votre annonce sur la page
             « Europe » et pouvez consulter et prendre contact avec des annonces dans les pages
             « Afrique », « Europe » et « Autres pays du monde »
             Lorsque vous finissez de remplir et d’envoyer votre formulaire de recherche, votre
             annonce apparaitra dans un délai de 24heures au plus, si nous jugeons votre profil
             fiable après relecture et vérifications éventuelles.
             Il se peut que notre équipe de relecture et validation vous écrive en privée afin de se
             rassurer sur la fiabilité de votre profil. Des précisions sur votre identité, un appel
             vocal ou vidéo pourraient vous être demandés. Dans cette optique la validation et
             l’apparition de votre annonce sur illicolove pourraient excéder 24heures. La célérité
             pour la publication de votre annonce dépendra de vous-même. Nous écartons
             systématiquement toute annonce fantaisiste, irréaliste et surtout les faux profils ;
             sans préavis.
             Si vous rencontrez une quelconque difficulté pour jouir des services de illicolove.com,
             nous vous prions de nous écrire à info@illicolove.com`,
            "IDTRANSLATEX9":`Validation de votre compte utilisateur`,
            "IDTRANSLATEX10":`Remplissez le formulaire et cliquez sur &quot;ENVOI&quot;. Nous vérifierons et validerons votre
            formulaire avec photo sous 24h. Vous recevrez un message de confirmation. Si des
            vérifications supplémentaires sont nécessaires, nous vous en informerons par e-mail.`,
            "IDTRANSLATEX11":`Consulter une annonce`,
            "IDTRANSLATEX12":`Le bouton &quot;Consultez les annonces&quot; mène à trois autres boutons : &quot;Afrique&quot;
            (annonces d&#39;Afrique), &quot;Europe&quot; (annonces d&#39;Europe) et &quot;Autres pays du monde&quot;
            (annonces hors Afrique et Europe).
            Rencontrer l’homme ou la femme de votre vie sur illicolove va vous coûter peut-être
            uniquement 95 francs CFA soit 0.14 Euros.
            C’est ce que vous coûte chaque unité qu’on vous prélève, lorsque vous cliquez sur la
            case « Pour me contacter » d’un profil qui retient particulièrement votre attention.`,
            "IDTRANSLATEX13":`Achat d'unités`,
            "IDTRANSLATEX14":`Vous pouvez recharger votre compte à votre convenance, afin de poursuivre vos
            recherches de rencontres parmi les annonces publiées.
            Le compte débit-crédit personnel que vous obtenez dès que vous vous inscrivez
            vous permet de le recharger selon le moyen de paiement de votre choix. LA DEVISE de facturation sur illicolove 
            est le Franc CFA ( XOF).  1 € = 655,957 XOF.`,
            "IDTRANSLATEX15":`Les Questions fréquemment posées.`,
            "IDTRANSLATEX16":` Puis-je faire une belle rencontre sur votre site ?`,
            "IDTRANSLATEX17":` Oui, à condition de bien remplir le formulaire de recherche en fournissant des
            informations vraies sur vous.`,




            "IDTRANSLATEX18":`Est-ce que votre site de rencontres est payant ?`,
            "IDTRANSLATEX19":` Oui, uniquement pour consulter l’adresse de contact d’un profil qui aura retenu
            particulièrement votre intérêt.`,
            "IDTRANSLATEX20":`Combien coûte la consultation de l’adresse de contact
            d’un profil qui m’attire et m’intéresse ?`,
            "IDTRANSLATEX21":`95 FCFA soit 0.14 Euros.`,
            "IDTRANSLATEX22":` Est-ce que votre site de rencontres est gratuit ?`,
            "IDTRANSLATEX23":`Oui, l’inscription et la publication de votre annonce de recherche amoureuse sont
            gratuites sur illicolove.`,
            "IDTRANSLATEX24":` Comment publier une annonce de rencontre ?`,
            "IDTRANSLATEX25":`Après votre inscription sur illicolove, cliquez sur le bouton ou l’onglet « PUBLIEZ
            UNE ANNONCE ». Ensuite sur la page qui va s’afficher, choisissez le nom du
            continent qui correspond à votre continent de résidence habituelle. Enfin remplissez
            correctement le formulaire de recherche qui va s’afficher puis soumettez.`,
            "IDTRANSLATEX26":` Puis-je résider en Afrique et contacter un profil résidant
            hors d’Afrique ?`,
            "IDTRANSLATEX27":`Oui !`,
            "IDTRANSLATEX28":`Puis-je résider en Europe et contacter un profil résidant
            hors d’Europe ?`,
            "IDTRANSLATEX29":`Oui !`,
            "IDTRANSLATEX30":`Puis-je résider en Europe et publier mon annonce de
            recherche sur les pages « Afrique » et « Autres pays du
            monde » ?`,
            "IDTRANSLATEX31":`Non ! Publiez votre annonce de recherche uniquement dans la page correspondant à
            votre zone de résidence.`,
            "IDTRANSLATEX32":`Puis- je payer des unités par mobile money ?`,
            "IDTRANSLATEX33":`Oui !`,
            "IDTRANSLATEX34":` Quel est le tarif d’abonnement sur votre site ?`,
            "IDTRANSLATEX35":` Il n’y a pas d’abonnement sur illicolove.`,
            "IDTRANSLATEX36":` Comment puis-je recharger mon compte Crédit-Débit ?`,
            "IDTRANSLATEX37":`Nous vous offrons un système de paiement sécurisé par KKiaPay qui est notre
            agrégateur de paiement partenaire. Selon votre convenance, rechargez votre compte
            par carte de crédit ou par mobile money.
            Sous votre profil, cliquez sur le bouton « JE RECHARGE MON COMPTE » et suivez
            les étapes simplement.`,
            "IDTRANSLATEX38":`Dois-je payer pour publier mon annonce de recherche ?`,
            "IDTRANSLATEX39":`Non ! La publication d’une annonce de recherche est gratuite.`,
            "IDTRANSLATEX40":`Dois-je payer pour consulter les annonces ?`,
            "IDTRANSLATEX41":`Non ! La consultation des annonces est gratuite, c’est l’obtention de l’adresse de
            contact contenu dans une annonce qui est payante.`,
            "IDTRANSLATEX42":`Comment fonctionne le système de Crédit-Débit ?`,
            "IDTRANSLATEX43":` Lors de votre inscription, vous recevez automatiquement et gratuitement trois (03) unités
            de crédit vous permettant de consulter trois (03) adresses de contacts dans les
            annonces de votre choix. Chaque unité a une valeur de 95 FCFA soit 0.14 Euros.
            Lorsque vos unités s’épuisent, il vous est loisible d’en acheter selon votre convenance et
            votre capacité. La quantité d’unités que vous pouvez acheter va d’une unité au nombre
            d’unités que vous désirez.`,
            "IDTRANSLATEX44":` Mes unités que j’achète ont-elles une date d’expiration ?`,
            "IDTRANSLATEX45":`Non ! Vos unités sont à durée illimitée.`,
            "IDTRANSLATEX46":`Dois-je m’abonner pour jouir de votre service de
            rencontres ?`,




            "IDTRANSLATEX47":`Sur illicolove, il n’y a aucun abonnement pour jouir de nos services en dehors de
            l’abonnement au newsletter qui est facultatif.`,
            "IDTRANSLATEX48":`Quelle est la politique de confidentialité sur
            illicolove.com ?`,
            "IDTRANSLATEX49":`Nous accordons une grande importance à la confidentialité de vos informations. Vos
            données personnelles sont sécurisées et ne sont pas partagées avec des tiers sans
            votre consentement. Vous pouvez consulter  notre politique de confidentialité pour plus
            de détails`,
            "IDTRANSLATEX50":`ici`,
            "IDTRANSLATEX51":` Où puis-je trouver l'e-mail de validation de mon compte ?`,
            "IDTRANSLATEX52":`Il est possible que l'e-mail de validation de votre compte se trouve dans votre dossier de spam 
            ou de courrier indésirable. Les filtres de sécurité des fournisseurs de messagerie peuvent parfois 
            diriger les e-mails de validation vers ces dossiers pour votre protection. Veuillez vérifier votre 
            dossier de spam ou de courrier indésirable et assurez-vous de marquer l'e-mail comme "non spam" ou 
            "non indésirable" si vous le trouvez là-bas. Si vous ne parvenez toujours pas à trouver l'e-mail de
            validation, 
            veuillez contacter notre service d'assistance pour obtenir de l'aide supplémentaire.`,
            "IDTRANSLATETCU1":`Conditions Générales d’Utilisation`,
            "IDTRANSLATETCU2":`Bienvenue sur illicolove.com, une plateforme de rencontres en ligne
            proposée par BAKO FAMILIA &amp; COMPANY. En utilisant notre site,
            vous acceptez les termes et conditions décrits ci-dessous.`,
            "IDTRANSLATETCU3":`ARTICLE 1 : Objet`,
            "IDTRANSLATETCU4":`Les présentes « Conditions Générales d’Utilisation » ont pour
            objet l’encadrement juridique de l’utilisation du site
            illicolove.com et de ses services.`,




            "IDTRANSLATETCU5":`Ce contrat est conclu entre :`,
            "IDTRANSLATETCU6":`L’Etablissement BAKO FAMILIA &amp; COMPANY propriétaire du site
            internet, ci-après désigné « l’Éditeur », ET Toute personne physique souhaitant accéder au site et à ses
            services, ci-après appelé « l’Utilisateur.trice ».
            Les conditions générales d’utilisation doivent être acceptées
            par tout Utilisateur.trice, et son accès au site vaut
            acceptation de ces conditions.
            Dans les présentes Conditions Générales d’Utilisation, il est convenu que les
            expressions ou mots suivants, qu’ils soient employés au singulier ou au pluriel,
            auront la signification suivante :`,
            "IDTRANSLATETCU7":`Annonce de recherche : désigne une publication d’un utilisateur.trice ou
            visiteur.euse du site, sous forme de texte via notre formulaire, accompagnée ou non
            d’une ou de plusieurs photographies représentant sa trombine.`,
            "IDTRANSLATETCU8":`Services de rencontres amoureuses  : désigne l’accès par l’Utilisateur.trice à
            l’ensemble des annonces de recherche publiées sur le Site Internet entre autres, les
            profils, les liens hypertextes, textes, images, vidéos, les contacts ou adresses par le
            biais du « click to show ».`,
            "IDTRANSLATETCU9":`« Click to show » : « Cliquer pour afficher  , désigne la fonctionnalité qui permet à
            tout utilisateur.trice d’afficher l’adresse électronique, le contact téléphonique ou tout
            autre moyen d’entrer en contact avec un.e autre utilisateur.trice qui a préalablement
            émis une annonce de recherche et renseigné le moyen de son choix de le /la
            contacter. Cette fonctionnalité qui permet d’obtenir un tel renseignement capital est
            payante. Son coût est de 95 Francs CFA soit 0,144 Euro environ par clic.`,
           "IDTRANSLATETCU10":`ARTICLE 2 : Mentions légales`,




           
           "IDTRANSLATETCU11X":`L’établissement BAKO FAMILIA &amp; COMPANY est l’Éditeur du
           site de rencontres illicolove.com. 
          Sis au Lot 191 parcelle b’, à Agbalilamè, elle est une
           entreprise individuelle de droit béninois. Elle est créée le 29
           Mai 2008, immatriculée au Registre du Commerce et du Crédit
           Mobilier RCCM RB/COT/08/A4101 ; et a pour Identifiant Fiscal
           Unique (IFU) Numéro : 3200800938610. 
          Elle est représentée par Gildas Ghislain GANGBAZO.`,
          "IDTRANSLATETCU11":`ARTICLE 3 : accès aux services`,
          "IDTRANSLATETCU12":`L’Utilisateur.trice du site illicolove.com a accès aux services suivants :`,
          "IDTRANSLATETCU13":`Création d’un compte personnel`,
          "IDTRANSLATETCU14":`Création et publication gratuite de son annonce de recherche
          via notre formulaire à remplir`,
          "IDTRANSLATETCU15":`Consultation des annonces de recherche publiées par les
          autres utilisateur.trices`,
          "IDTRANSLATETCU16":`L’obtention payante des contacts des profils qui retiennent
          son intérêt, et présents sur les annonces de recherche, de
          manière illimitée et à sa convenance (Click to show / Cliquer
          pour afficher)`,
          "IDTRANSLATETCU17":`Possibilité de contacter l’Editeur pour solliciter une
          demande de services personnalisés`,
          "IDTRANSLATETCU18":`Le Site Internet propose aussi à l’Utilisateur.trice qui le
          désire, l’organisation partielle
          ou complète d’une cérémonie de mariage.
          Tout Utilisateur.trice ayant accès à internet peut accéder
          gratuitement et depuis
          n’importe où au site. Les frais supportés par
          l’Utilisateur.trice pour y accéder
          (connexion internet, matériel informatique, etc.) ne sont pas à
          la charge de l’Éditeur.
          Les services cités plus haut ne sont accessibles pour
          l’Utilisateur.trice que s’il/elle est
          membre du site (c’est-à-dire qu’il /elle est identifié.e à
          l’aide de ses identifiants de
          connexion) :
          Le site et ses différents services peuvent être interrompus ou
          suspendus par l’Éditeur,
          notamment à l’occasion d’une maintenance, sans obligation de
          préavis ou de
          justification.`,
          "IDTRANSLATETCU19":`ARTICLE 4 : Responsabilité de l’Utilisateur.trice`,
          "IDTRANSLATETCU20":`L’Utilisateur.trice est responsable des risques liés à
          l’utilisation de son identifiant de
          connexion et de son mot de passe.

          Le mot de passe de l’Utilisateur.trice doit rester secret. En
          cas de divulgation de mot
          de passe, l’Éditeur décline toute responsabilité.
          L’Utilisateur.trice assume l’entière responsabilité de
          l’utilisation qu’il fait des
          informations et contenus présents sur le site illicolove.com.
          Tout usage du service par l’Utilisateur.trice ayant directement
          ou indirectement pour
          conséquence des dommages doit faire l’objet d’une indemnisation
          au profit du site.
          Le site permet aux utilisateur.trices de publier une annonce de
          recherche sur le site
          en remplissant le formulaire “Publier une annonce”.`,





          "IDTRANSLATETCU21":`L’utilisateur.trice s’engage à fournir des renseignements
          fiables, proposer des
          photographies récentes dénuées d’obscénités, écrire dans ses
          critères de recherche
          des propos respectueux des autres et de la loi et accepte que
          sont annonce soit
          modérées ou refusées par l’Éditeur, sans obligation de
          justification après un refus de
          sa part de lui fournir des informations complémentaires pour
          éviter les faux profils.
          En publiant son annonce sur le site, l’Utilisateur.trice cède à
          l’Editeur le droit non
          exclusif et gratuit de représenter, reproduire, adapter,
          modifier, diffuser et distribuer
          son annonce sur les réseaux sociaux, ou directement par un tiers
          autorisé ; dans le
          respect de son anonymat ou du mode de confidentialité choisi.
          L’Éditeur s’engage à préserver les anonymats de tout.e
          utilisateur.trice en cas de
          diffusion des annonces sur les réseaux sociaux.`,
          "IDTRANSLATETCU22":`ARTICLE 5 : Responsabilité de l’Éditeur`,
          "IDTRANSLATETCU23":`Tout dysfonctionnement du serveur ou du réseau ne peut engager
          la responsabilité de l’Éditeur. 
          De même, la responsabilité du site ne peut être engagée en cas
          de force majeure ou du
          fait imprévisible et insurmontable d’un tiers.
          Le site illicolove.com s’engage à mettre en œuvre tous les
          moyens nécessaires pour
          garantir la sécurité et la confidentialité des données.
          Toutefois, il n’apporte pas une
          garantie de sécurité totale. 
          L’Éditeur se réserve la faculté d’une non-garantie de la
          fiabilité des profils, bien que
          les annonces de recherche diffusées sur le site soient réputées
          fiables et vérifiées
          avant la validation de leur publication en back-office par
          l’équipe de relecture et de
          validation de l’Editeur.`,



          "IDTRANSLATETCU24":`ARTICLE 6 : Propriété intellectuelle`,
          "IDTRANSLATETCU25":`BAKO FAMILIA &amp; COMPANY est le propriétaire exclusif de tous les droits de
          propriété intellectuelle portant tant sur la marque, ou la
          structure que sur le contenu
          du Site www.illicolove.com 
          Les contenus du site www.illicolove.com sont destinés à un
          usage strictement
          personnel, privé et non collectif, librement pour le contenu
          gratuit. Il en est de même
          pour les fils RSS et les newsletters.
          Toute utilisation dans un cadre professionnel ou commercial ou
          toute
          commercialisation de ce contenu auprès de tiers est interdite,
          sauf accord exprès de
          BAKO FAMILIA &amp; COMPANY.`,
          "IDTRANSLATETCU26":`ARTICLE 7 : Données personnelles.`,
          "IDTRANSLATETCU27":`Consultez notre Politique de Confidentialité, données
          personnelles et cookies.`,
          "IDTRANSLATETCU28":`ici`,
          "IDTRANSLATETCU29":`ARTICLE 8 : Liens hypertextes`,
          "IDTRANSLATETCU30":`Les domaines vers lesquels mènent les liens hypertextes présents sur le site
          n’engagent pas la responsabilité de l’Éditeur BAKO FAMILIA &amp;
          COMPANY, qui n’a
          pas de contrôle sur ces liens. 
          L’Éditeur a mis en place des partenariats avec des fournisseurs
          de services et peut
          proposer à l’Utilisateur.trice des informations concernant
          d’autres sites et/ou
          services, par exemple par la mention d’adresses de sites Web,
          et/ou par la présence
          de liens hypertextes vers ces sites. 
          Ces liens hypertextes qui redirigeant vers des sites tiers
          n’ont pas été développés par
          L’Éditeur et ne lui appartiennent pas. L’Éditeur n’assume par
          conséquent, aucune
          responsabilité de ces sites, leur contenu, publicités, produits
          ou services disponibles
          sur ou à partir de ces sites. Par ailleurs, la responsabilité de
          L’Éditeur ne saurait être
          engagée quant aux informations, opinions et recommandations
          formulées par ces
          tiers.`,



          "IDTRANSLATETCU31":`L’Éditeur ne peut être tenu responsable de tout dommages ou
          pertes avérés ou
          allégués, consécutifs ou en relation avec l’utilisation, ou avec
          le fait d’avoir fait
          confiance au contenu, à des biens ou des services disponibles
          sur ces services
          partenaires ou sources externes.       
          La décision d’activer ces liens relève de la pleine et entière
          responsabilité de
          l’Utilisateur.trice.
          L’Éditeur n’est pas responsable de la disponibilité de ces sites
          et ne peut en contrôler
          le contenu ni valider la publicité, les produits et autres
          informations diffusées sur ces
          sites Internet. 
          Il est possible pour un tiers de créer un lien vers une page du
          site illicolove.com sans
          autorisation expresse de l’éditeur.`,
          "IDTRANSLATETCU32":` ARTICLE 9 : Mise en garde Particulière`,
          "IDTRANSLATETCU33":`Dans la vie réelle comme dans la vie virtuelle sur internet, vous pouvez croiser le
          chemin de personnes honnêtes tout comme de personnes
          malveillantes et escrocs. 
          Il nous revient de façon individuelle d’adopter certaines
          attitudes de sécurité dans la
          vie réelle et par surcroit dans le monde virtuel sur internet.
          BAKO FAMILIA &amp; COMPANY vous invite à :`,
          "IDTRANSLATETCU34":`Ne jamais envoyer de l’argent à un.e inconnu.e rencontré.e
          sur ce site ; et ce sous aucun prétexte.`,
          "IDTRANSLATETCU35":`Ne jamais envoyer de photographies intimes à un contact
          rencontré sur ce site`,




          "IDTRANSLATETCU36":`Être sur vos gardes lorsqu’une personne prétend vivre dans
          les environs, mais travaille à l’étranger.`,
          "IDTRANSLATETCU37":`Ne jamais céder sous le prétexte d’une situation urgente où  un proche est
          malade et votre correspondant.e virtuel.le vous demande de
          l’aider à payer
          divers frais. Dans un cas pareil, nous vous invitons à
          signaler le profil de ces
          escrocs à l’Editeur.`,
          "IDTRANSLATETCU38":`Une relation amoureuse naissante sur illicolove.com ne
          saurait être pour vous
          une source d’ennuis et de prise en charge financière. Faites
          donc preuve d’une
          grande méfiance lorsqu’un.e inconnu.e vous déclare son amour
          sans avoir pu
          vous rencontrer ; et même après une rencontre physique, prenez
          le temps
          nécessaire avant d’engager toute dépense conséquente en
          numéraire.`,
          "IDTRANSLATETCU39":`Choisir toujours un lieu public pour une première rencontre.`,
          "IDTRANSLATETCU40":`Signaler toujours à un proche vos positions quand vous êtes
          en compagnie d’une personne inconnue que vous venez de rencontrer
          fraîchement.`,
          "IDTRANSLATETCU41":`Dénoncer et nous signaler, les tentatives de vente de
          produits ou de services,
          les profils qui se révèlent faux malgré nos filtrages après
          vos échanges en privé,
          les menaces et intimidations, les propos malsonnants,
          homophobes, abusifs et
          offensants, les messages de mineurs, et les demandes d’aides
          financières ou de
          photographies explicites.`,
          "IDTRANSLATETCU42":`Par conséquent, l’Utilisateur.trice reconnaît et accepte sans
          réserve être pleinement
          responsable de toute action entreprise faisant suite à la
          lecture d’une annonce de
          rencontre amoureuse et de manière générale à toute information
          présente sur le Site.
          La fourniture de ces données ne saurait être assimilée, de
          quelque façon que ce soit, à
          un conseil spécifique ou à une aide à la décision.
          L’Utilisateur.trice est pleinement conscient.e du caractère
          aléatoire des rencontres
          amoureuses aussi bien dans la vie réelle que sur internet.`,
          "IDTRANSLATETCU43":` ARTICLE 10 : Suppression des données après 1 an d’inactivité.`,
          "IDTRANSLATETCU44":`Pour des raisons de sécurité, si vous ne vous êtes pas
          authentifié sur le Site
          pendant une période d’un an, vous recevrez un e-mail vous
          invitant à vous
          connecter dans les plus brefs délais, sans quoi votre profil
          sera supprimé de
          nos bases de données.`,




          "IDTRANSLATETCU45":`ARTICLE  11 : Suppression du compte à la demande.`,
          "IDTRANSLATETCU46":`L’Utilisateur.trice a la possibilité de supprimer son Compte à
          tout moment, par
          simple demande à l’Éditeur ou par le menu de suppression de
          Compte présent
          dans les paramètres du Compte le cas échéant.`,
          "IDTRANSLATETCU47":`ARTICLE  12 : Suppression du compte en cas de violation des CGU`,
          "IDTRANSLATETCU48":`En cas de violation d’une ou de plusieurs dispositions des CGU
          ou de tout
          autre document incorporé aux présentes par référence, l’Éditeur
          se réserve le
          droit de mettre fin ou restreindre sans aucun avertissement
          préalable et à sa
          seule discrétion, votre usage et accès aux services, à votre
          compte et à tous
          les Sites liés.`,
          "IDTRANSLATETCU49":`ARTICLE 13 : Indications en cas de faille de sécurité décelée par l’Éditeur.`,
          "IDTRANSLATETCU50":`Nous nous engageons à mettre en œuvre toutes les mesures
          techniques et
          organisationnelles appropriées afin de garantir un niveau de
          sécurité adapté
          au regard des risques d’accès accidentels, non autorisés ou
          illégaux, de
          divulgation, d’altération, de perte ou encore de destruction des
          données
          personnelles vous concernant.`,
          "IDTRANSLATETCU51":`Dans l’éventualité où nous prendrions
          connaissance d’un accès illégal aux données personnelles vous
          concernant
          stockées sur nos serveurs ou ceux de nos prestataires, ou d’un
          accès non
          autorisé ayant pour conséquence la réalisation des risques
          identifiés ci-
          dessus, nous nous engageons à :`,





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
          "IDTRANSLATETCU59":`La langue des présentes CGU est le français et prédominera sur
          toutes versions traduites dans une autre langue.
          Le présent contrat dépend de la législation béninoise, notamment
          la loi N° 2017-20 du 20 avril 2018 portant Code du Numérique en République du
          Bénin. Le choix de la
          loi applicable ne porte pas atteinte à vos droits en tant que
          consommateur conformément à la loi applicable de votre lieu de résidence.`,
          "IDTRANSLATETCU60":`Si vous êtes un.e consommateur.trice, vous et nous acceptons de se soumettre à la
          compétence non-exclusive des juridictions béninoises.
          En cas de litige non résolu à l’amiable entre
          l’Utilisateur.trice et l’Éditeur, le tribunal
          de commerce de Cotonou sera compétent pour régler le
          contentieux.`,
          "IDTRANSLATEPC1":`POLITIQUE DE CONFIDENTIALITE`,
          "IDTRANSLATEPC2":`Mentions légales`,




          "IDTRANSLATEPC3":`Les présentes mentions légales et politique de confidentialité disposent et vous éclairent de la
          manière dont BAKO FAMILIA &amp; COMPANY utilise et protège les informations que vous nous
          transmettez, également, lorsque vous utilisez notre site de rencontres amoureuses accessible à
          partir de l’URL : www.illicolove.com.`,
          "IDTRANSLATEPC4":`Nous vous prions de noter que notre politique de confidentialité est susceptible d’être modifiée
          et/ou complétée à tout moment, notamment en vue de se conformer à toute évolution législative,
          règlementaire, jurisprudentielle ou technologique. Dans un tel cas, la date de sa mise à jour sera
          indiquée dans la présente politique. Ces modifications engagent l’utilisateur dès leur mise en
          ligne. 
          Nous vous invitons par conséquent à consulter régulièrement les présentes mentions et politique
          de confidentialité afin de prendre connaissance de ses éventuelles modifications.`,
          "IDTRANSLATEPC5":` Déclaration à l’Autorité de Protection des Données à caractère Personnel (APDP)`,
          "IDTRANSLATEPC6":`Conformément à la loi n° 2017-20 du 20 avril 2018 portant code du numérique en République du
          Bénin (Livre 5 ième relatif à la protection des données personnelles et de la vie
          privée) le site internet www.illicolove.com a fait l'objet d'une déclaration auprès de l’Autorité de
          Protection des Données à caractère Personnel (apdp.bj) sous le numéro…………`,
          "IDTRANSLATEPC7":`En tout état de cause, BAKO FAMILIA & COMPANY ne collecte des informations personnelles
          relatives à l’utilisateur.trice que pour les besoins du service de rencontres amoureuses proposé
          par son site internet. L’utilisateur.trice fournit ces informations en toute connaissance de cause,
          notamment lorsqu’il procède par lui-même à leur saisie.`,





          "IDTRANSLATEPC8":`Conformément aux dispositions de la loi 2017-20 portant code du numérique en
          République du Bénin, tout utilisateur.trice dispose d’un droit d’accès, de rectification et
          d’opposition aux données personnelles le concernant, en effectuant sa demande écrite et signée,
          accompagnée d’une copie d’une pièce d’identité avec signature du titulaire de la pièce, en
          précisant l’adresse à laquelle la réponse doit être envoyée. Aucune information personnelle d’un
          utilisateur.trice de notre site internet « www.illicolove.com » n’est publiée, cédée ou vendue sur
          un support quelconque ou à des tiers à son insu.`,
          "IDTRANSLATEPC9":`Confidentialité des données`,
          "IDTRANSLATEPC10":`Vos données personnelles sont confidentielles et ne seront en aucun cas
          communiquées à des tiers. 
          La nature privée de notre service de rencontres amoureuses ne nous permet pas de
          communiquer vos données personnelles (noms, contacts, adresses, etc) à un individu, quel que
          soit son rang ou sa qualité.`,
          "IDTRANSLATEPC11": `Droit d'accès`,
          "IDTRANSLATEPC12":`En application des dispositions de la loi portant code du numérique en République du Bénin, tout utilisateur
          de notre site internet www.illicolove.com dispose d’un droit d’accès, de rectification, de modification et de
          suppression relative aux données qui le concerne individuellement. Ce droit peut être exercé par le
          titulaire sur demande adressée par voie électronique à l’adresse e-mail suivante : info@illicolove.com. Les
          informations personnelles collectées ne sont en aucun cas confiées à des tiers.`,
          "IDTRANSLATEPC13":`Droit de rectification`,






          "IDTRANSLATEPC14":`Conformément à la loi portant code du numérique en République du Bénin, tout utilisateur de
          notre site internet www.illicolove.com peut demander la rectification, la mise à jour, la
          suppression, le verrouillage ou encore l’effacement des données le concernant, et qui peuvent
          s’avérer inexactes, erronées, incomplètes, équivoques ou obsolètes.`,
          "IDTRANSLATEPC15":`Durée de conservation.`,
          "IDTRANSLATEPC16":`Vos données personnelles sont conservées par BAKO FAMILIA &amp; COMPANY uniquement pour
          le temps correspondant à votre besoin de services de rencontres amoureuses. Toutefois, cette
          durée de conservation n’excède pas treize (12) mois.`,
          "IDTRANSLATEPC17":`Plainte auprès de l’autorité compétente`,
          "IDTRANSLATEPC18":`Si vous considérez que BAKO FAMILIA & COMPANY ne respecte pas ses obligations au regard
          de vos données personnelles collectées lors de votre visite sur son site internet
          www.illicolove.com, vous pouvez adresser, comme le prescrit la procédure légale, une plainte ou
          une demande auprès de l’Autorité de Protection des Données à caractère Personnel(APDP).`,
          "IDTRANSLATEPC19":`Propriété intellectuelle`,
          "IDTRANSLATEPC20":`Tout le contenu du présent site internet, incluant, de façon non limitative, les graphismes, images,
          textes, vidéos, animations, sons, logos, gifs et icônes ainsi que leur mise en forme sont la
          propriété exclusive de BAKO FAMILIA & COMPANY à l'exception des marques, logos ou
          contenus appartenant à d'autres sociétés partenaires ou auteurs. 
          Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même
          partielle, de ces différents éléments est strictement interdite sans l'accord exprès écrit de BAKO
          FAMILIA & COMPANY.`,
          "IDTRANSLATEPC21":`Conditions de service`,
          "IDTRANSLATEPC22":`Le site internet www.illicolove.com est proposé en langue française, avec des traductions en
          anglais et en espagnol. Pour un meilleur confort d'utilisation, nous vous recommandons de
          recourir à des navigateurs compatibles et modernes comme : Chrome, Safari, Firefox.`,
          "IDTRANSLATEPC23":`Informations et suggestions`,







          "IDTRANSLATEPC24":`BAKO FAMILIA & COMPANY met en œuvre tous les moyens en sa possession, pour assurer un
          service de rencontres amoureuses fiable et une mise à jour permanente de son site internet
          www.illicolove.com. Toutefois, des erreurs ou omissions peuvent subvenir. En conséquence, tout utilisateur.trice peut nous envoyer des suggestions ou des informations à : info@illicolove.com et
          indiquer toutes modifications du site qu'il jugerait pertinentes.`,
          "IDTRANSLATEPC25":`Cookies.`,
          "IDTRANSLATEPC26":`Pour des besoins de performance techniques, de statistiques et d'affichage, le site internet
          www.illicolove.com peut utiliser des cookies. Les cookies sont de petits fichiers textes stockés sur
          votre terminal, et qui ne permettent pas l’identification de l’utilisateur, mais qui enregistrent des
          informations relatives à la navigation d’un terminal sur un site internet. Certaines parties de ce
          site ne peuvent être fonctionnelles sans l’acceptation de cookies. Les données ainsi obtenues
          visent à faciliter la navigation ultérieure sur ce site. Les cookies ont également vocation à
          permettre diverses mesures d’audience et de fréquentation.`,
          "IDTRANSLATEPC27":` Le refus d’installation d’un cookie peut entraîner l’impossibilité d’accéder à certaines
          fonctionnalités. Tout utilisateur de ce site internet peut toutefois configurer son terminal pour
          décliner l’installation des cookies, comme indiqué ci-dessous :`,
          "IDTRANSLATEPC28":`Utilisateurs de Safari : Choisissez Safari &gt; Préférences,
          cliquez sur Confidentialité, puis sélectionnez l’option
          relative aux « Cookies et données de site web ». Toujours
          bloquer : Safari ne permet à aucun site web, tiers ni
          annonceur de stocker des cookies et autres données sur
          votre Mac. Cela peut empêcher certains sites web de
          fonctionner correctement.`,





          "IDTRANSLATEPC29":`Utilisateurs de Safari : Choisissez Safari &gt; Préférences,
          cliquez sur Confidentialité, puis sélectionnez l’option
          relative aux « Cookies et données de site web ». Toujours
          bloquer : Safari ne permet à aucun site web, tiers ni
          annonceur de stocker des cookies et autres données sur
          votre Mac. Cela peut empêcher certains sites web de
          fonctionner correctement.`,
          "IDTRANSLATEPC30":`Utilisateurs de Google Chrome : Menu &gt; Paramètres &gt;
          Afficher les paramètres avancés (situé au bas de la page).
          Il faut ensuite cliquer sur le bouton Paramètres de contenu
          puis cocher la case Bloquer les cookies et les données de
          sites tiers, enfin cliquer sur OK pour valider votre choix.`,
          "IDTRANSLATEPC31":`Utilisateurs d’Internet Explorer : Menu  Options Internet 
          Onglet Confidentialité et sur le bouton Avancé pour faite
          apparaitre la fenêtre des Paramètres de confidentialité
          avancés. Cochez ensuite la case Ignorer la gestion
          automatique des cookies, puis sélectionner Refuser
          dans la colonne Cookies tierces parties.`,
          "IDTRANSLATEPC32":`Utilisateurs de Microsoft Edge : onglet outil / options
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
          "IDTRANSLATEPC35":`Le site internet « www.illicolove.com » peut offrir des liens vers d’autres sites internet ou d’autres
          ressources disponibles sur Internet. BAKO FAMILIA & COMPANY ne dispose d'aucun moyen
          pour contrôler les sites en connexion avec son site internet. Par ailleurs, il ne répond pas de la
          disponibilité de tels sites et sources externes, ni ne la garantit. Il ne peut être tenue pour
          responsable de tout dommage, de quelque nature que ce soit, résultant du contenu de ces sites
          ou sources externes.`,




          "IDTRANSLATECONSULTE1":`Afrique`,
          "IDTRANSLATECONSULTE2":`Europe`,
          "IDTRANSLATECONSULTE3":`Autres pays du monde`,
          "IDTRANSLATEPROFIL1": "Compte valide",
          "IDTRANSLATEPROFIL2": "Compte non valide",
          "IDTRANSLATEPROFIL3":`Compte Débit`,
          "IDTRANSLATEPROFIL4":`Compte Débit`,
          "IDTRANSLATEPROFIL5":`Mon Plan`,
          "IDTRANSLATEPROFIL6":`Mon Plan`, 
          "IDTRANSLATEPROFIL7":`Mes données`,
          "myNameIDX":` Supprimer votre compte`,
          "myBtn":` Recharger mon compte`,
          "IDTRANSLATEPROFIL9":`Aller à l'accueil`,
          "IDTRANSLATEPROFIL10":`Se déconnecter`,
          "CONSULTEZLESANNONCES":`CONSULTEZ LES ANNONCES`,
          "IDTRANSLATEPROFIL11":`MODIFIEZ VOTRE ANNONCE`, 
          "IDTRANSLATEPROFIL12":`PUBLIEZ UNE ANNONCE`,
          "IDTRANSLATEPROFIL13":`Vous souhaite la Bienvenue !`,
          "exampleModalLongTitle":`Une unité vaut 95 FCFA, soit 0.144 Euros.`,
          "errorSms":`Vous devez saisir un nombre.`,
          "SmspayId":`Saisisez ici le nombre d'unité.`,
          "IDTRANSLATEPROFIL14":`Retour`,
          "payYourUnitybtn":`Valider`,
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
          "IDTRANSLATEPROFIL25":`Quelle est votre reponse ? Juste un mot. Pas d'espace.`,
          "IDTRANSLATEPROFIL26":`Valider`, 
          "IDTRANSLATEPROFIL27":`reponse de sécurité`,
          "payYourUnity":`Entrer l'unité  `,
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
          "IDTRANSLATEPROFIL34":`Oui, déconnecté !`,
          "IDTRANSLATEPROFIL35":`Déconnecté`,
          "IDTRANSLATEPROFIL36":`Vous avez été déconnecté.`,
          "IDTRANSLATEPROFIL37":`Vous voulez visiter notre page d'accueil ?`,
          "IDTRANSLATEPROFIL38":`Supprimé !`,
          "IDTRANSLATEPROFIL39":`Votre compte a été supprimé avec succès !`,
          "IDTRANSLATEPROFIL40":`Supprimé !`,
          "IDTRANSLATEPROFIL41":`Erreur lors de la suppression de l'utilisateur ! `,
          "IDTRANSLATEPROFIL42":`il y a une ERROR`,
          "IDTRANSLATEPROFIL43":`Le champs n'est pas bien rempli !`,
          "IDTRANSLATEPROFIL44":`Quelque chose s'est mal passé !`,
          "IDTRANSLATEPROFIL45":`les données ne sont pas mise à jour !`,
          "IDTRANSLATEPROFIL46":`Salut, Nous vous informons que vous ne disposer plus d'unité sur 
          votre compte. Veuillez le recharger ou rendez-vous 
          sur votre profil. Merci !`,
          "IDTRANSLATEPROFIL47":`Êtes-vous sûr ?`,
          "IDTRANSLATEPROFIL48":`Nous constatons que vous avez déjà une publication 
          en cours. En procédant avec cette action, votre ancienne 
          annonce sera modifiée et désactivée. Votre nouvelle annonce 
          sera soumise aux administrateurs d'illicolove pour validation,
           ce processus prendra jusqu'à 24 heures. Nous vous remercions 
           pour votre compréhension.`,




          "IDTRANSLATEPROFIL49":`Retour`,
          "IDTRANSLATEPROFIL50":`Oui, Changé`,
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
          "IDTRANSLATELOGIN14":`Le mot de passe est incorrect !`,
          "IDTRANSLATELOGIN15":`Désolé`,
          "IDTRANSLATELOGIN16":`L'utilisateur n'existe pas avec l'e-mail donné !`,
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




          "IDTRANSLATESIGNUP15":`Vous avez déjà un compte avec cet adresse email !`,
          "IDTRANSLATESIGNUP16":`succès`,
          "IDTRANSLATESIGNUP17":`Vous êtes inscrit avec succès !`,
          "IDTRANSLATESIGNUP18":`Erreur lors de l'envoi de l'adresse mail à Firebase`,
          "IDTRANSLATESIGNUP19":`Ne mettez pas d'espace. Merci !`,
          "IDTRANSLATEFORGET1":`Envoyer l'adresse e-mail utilisée lors de votre inscription.`,
          "IDTRANSLATEFORGET2":`Email`,
          "IDTRANSLATEFORGET3":`ton-email@gmail.com`,
          "IDTRANSLATEFORGET4":`Envoyer`,
          "IDTRANSLATEFORGET5":`Valider`,
          "IDTRANSLATEFORGET6":`Donner la réponse convénable !`,
          "IDTRANSLATEFORGET7":`Entrer votre nouveau mot de passe !`,
          "IDTRANSLATEFORGET8":`Entrer votre nouveau mot de passe !`, 
          "IDTRANSLATEFORGET9":`Super...`,
          "IDTRANSLATEFORGET10":`Mot de passe mis à jour avec succès !`,
          "IDTRANSLATEFORGET11":`Connectez-vous`,
          "IDTRANSLATEFORGET12":`Ok`,
          "IDTRANSLATEFORGET13":`Erreur lors de la mise à jour de l'e-mail.`,
          "IDTRANSLATEFORGET14":`Ce n'est pas la bonne réponses`,
          "IDTRANSLATEFORGET15":`L'utilisateur n'existe pas.`, 
          "IDTRANSLATEFORM1":`MON PROFIL`,
          "IDTRANSLATEFORM2":`MON PROFIL`,
          "IDTRANSLATEFORM3":`MON PROFIL`,
          "IDTRANSLATEFORM4":`PROFIL QUE JE CHERCHE`,
          "IDTRANSLATEFORM5":`PROFIL QUE JE CHERCHE`,
          "IDTRANSLATEFORM6":`VEUILLEZ REMPLIR LE FORMULAIRE CI-DESSOUS.`,
          "IDTRANSLATEFORM7":`Donnez des informations précises et judicieuses.`,
          "IDTRANSLATEFORM8":`Mon pays de résidence <i class="fa fa-star required"></i>`,
          "IDTRANSLATEFORM9":`Ma Ville de résidence <i class="fa fa-star required"></i>`,
          "IDTRANSLATEFORM10":`Nom ou Pseudonyme <i class="fa fa-star required"></i>`,
          "IDTRANSLATEFORM11":`Mon âge <i class="fa fa-star required"></i>`,





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
          "IDTRANSLATEFORM45":`Saisiz uniquement votre numéro sans le préfixe du pays<i class="fa fa-star required"></i>`,
          "IDTRANSLATEFORM46":`Mon travail ou occupation <i class="fa fa-star required"></i>`,
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
          "IDTRANSLATEFORM89":`vous pouvez selectionner plusieurs pays. <i class="fa fa-star required"></i>`,
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
          "IDTRANSLATEFORM101":`Suivant`,
          "IDTRANSLATEFORM102":`précédent`,
          "IDTRANSLATEFORM103":`Envoyer`,




          "IDTRANSLATEFORM104":`<p ><em> Les données à caractère personnel collectées dans le présent formulaire par <strong style="color: #000080;">BAKO FAMILIA & COMPANY</strong> seront traitées exclusivement à des fins du bon déroulement du service de rencontres
          amoureuses que vous sollicitez.
          Les données à caractère personnel collectées ne sont communiquées à personne sans votre consentement.
          En application des dispositions de la loi 2017-20 portant code du numérique en République du Bénin sur
          la protection des données à caractère personnel, le traitement portant sur les données collectées a été
          déclaré devant l’APDP.</em>
          </p>
          <hr>
          <p class="mb-0"><em>Conformément à la loi précitée, vous pouvez exercer vos droits d’accès, d’opposition, de rectification et
          de suppression auprès de <strong style="color: #000080;">BAKO FAMILIA & COMPANY</strong>.
          </em></p>`,
          "IDTRANSLATEFORM105":`Votre image est trop pétite. Veuillez sélectionner une image d'au moins 300x300 pixels.`,
          "IDTRANSLATEFORM106":`Une erreur s'est produite lors de l'appel à l'API REST Countries`,
          "IDTRANSLATEFORM107":`Mettez simplement le numéro sans le préfixe`,
          "IDTRANSLATEFORM108":`veuillez selectioner le pays`,
          "IDTRANSLATEFORM109":`Succès`,
          "IDTRANSLATEFORM110":`Votre formulaire est soumis au contrôle pour validation sous 24 heures <i class="fa fa-heart"></i>.`,
          "IDTRANSLATEFORM111":`Désolé`,
          "IDTRANSLATEFORM112":`Tout vos champs ne sont pas rempli.`,
          "IDTRANSLATEUSERD1":`Mes coordonnées :`,





          "IDTRANSLATEUSERD2":`Pour me contacter`,
          "IDTRANSLATEUSERD3":`Mon Profil`,
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
          "IDTRANSLATEUSERD15":`Profil que je cherche`,
          "IDTRANSLATEUSERD16":`Réponses`,
          "IDTRANSLATEUSERD17":`Son genre :`,
          "IDTRANSLATEUSERD18":`Sa tranche d'âge :`,
          "IDTRANSLATEUSERD19":`Sa situation matrimoniale :`,
          "IDTRANSLATEUSERD20":`Son pays de résidence :`,
          "IDTRANSLATEUSERD21":`Sa ville d'habitation :`,
          "IDTRANSLATEUSERD22":`Son travail ou occupation :`,
          "IDTRANSLATEUSERD23":`En ligne le`,
          "IDTRANSLATEUSERD23VG":`<div class="status-indicator" style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; background-color: green;"></div> en ligne`,





          "IDTRANSLATEUSERD24":`<i class="fas fa-database" style="font-size: 5vh !important; color: #FFB6C1;"></i> Pas de données.`,
          "IDTRANSLATEUSERD25":`Pas de données.`,
          "IDTRANSLATEUSERD26":`il y a une ERREUR.`,
          "IDTRANSLATEUSERD27":`Votre compte est débité`,
          "IDTRANSLATEUSERD28":`les données ne sont pas mise à jour.`,
          "IDTRANSLATEUSERD29":`Vous ne pouvez pas contacter les utilisateurs. 
          Car vous n'avez pas encore un compte validé.`,
          "IDTRANSLATEUSERD30":`Voulez vous  publier votre annonce ?`,
          "IDTRANSLATEUSERD31":`Vous ne pouvez pas contacter les utilisateurs. 
          Car vous ne disposez pas d'unité.`,
          "IDTRANSLATEUSERD32":`Voulez vous  payer des unités ?`,
          "IDTRANSLATEUSERD33":`D'accord`,
          "IDTRANSLATEUSERD34":`Visiter son profil !`,
          "IDTRANSLATEUSERD35":`<i class="bi bi-eye" style="color: white;"></i> Cliquer pour afficher.`,
          }
        },
        es: {
          translation: {
            "IDTRANSLATE1": "Inicio",
            "IDTRANSLATE2": "Acerca de",
            "IDTRANSLATE3": `¿Cómo funciona?`,
            "IDTRANSLATE4": `Términos`,
            "IDTRANSLATE5":"Condiciones Generales de Uso",
            "IDTRANSLATE6":"Política de Privacidad",
            "IDTRANSLATE7":"Contacto",
            "IDTRANSLATE8":"Registrarse",
            "IDTRANSLATE9":"Conectar",
            "IDTRANSLATECONTACT1":"Contacto",
            "IDTRANSLATECONTACT2":"Contáctenos",
            "IDTRANSLATECONTACT3":"Dirección",
            "IDTRANSLATECONTACT4":'Teléfono',
            "IDTRANSLATECONTACT5":"Correos electrónicos",
            "IDTRANSLATECONTACT6":"Redes sociales",
            "IDTRANSLATE1INF1":`BAKO FAMILIA & COMPANY recopila y procesa su dirección de correo electrónico para mantenerlo informado sobre las nuevas funciones o actualizaciones del sitio de illicolove .
            De conformidad con la Ley 2017-20 sobre el código digital en la República de Benin, sobre la protección de
                        datos personales , puede darse de baja o ejercer sus derechos de acceso, oposición,
                        rectificación y supresión enviando un correo electrónico a info@illicolove.com`,
            "IDTRANSLATE10":"amor amoroso",
            "IDTRANSLATE11":`tu plataforma de citas, para luchar contra el celibato y
                        soledad.` ,
            "IDTRANSLATE12":`Vemos la soledad involuntaria como un problema humanitario y
                        nos comprometemos a ofrecer una solución a las personas que la padecen.`,
            "IDTRANSLATE13":`Acerca de`,
            "IDTRANSLATE14":`Acerca de nosotros`,
            "IDTRANSLATE15":`Su plataforma de citas en línea illicolove.com es presentada por
            BAKO FAMILIA Establecimientos & amp ; EMPRESA, una Empresa Unipersonal (IE) de
                        Derecho beninés inscrito en el Registro de Comercio y Crédito RCCM
            RB/COT/08/A4101; al Identificador Único Fiscal (IFU) 3200800938610.`,
            "IDTRANSLATE16":`Sus actividades incluyen Wedding planning (acompañamiento en la organización de
                        matrimonio ), Turismo-Ocio, organización de ferias y exposiciones. fue creado en
            Mayo de 2008 en Cotonú. `,
            "IDTRANSLATE17":`Más detalles`,
            "IDTRANSLATE18":`Nuestros objetivos`,
            "IDTRANSLATE19":`Elemento 16`,
            
            
            
            "IDTRANSLATE20":`Nuestro objetivo`,
            "IDTRANSLATE21": `La puesta en marcha de esta plataforma de citas online responde a nuestras iniciativas de lucha contra el celibato y la soledad.
            Materializa nuestra acción en la línea definida por la Declaración Universal de
            Derechos Humanos en su artículo 16, que recuerda el derecho al matrimonio de las mujeres
                        y para el hombre, y la importancia de la familia que debe ser protegida por la sociedad y
                        por el Estado.`,
            "IDTRANSLATE22":`Nuestros valores:`,
            "IDTRANSLATE23":`Confiabilidad,`,
            "IDTRANSLATE24":`Cortesía y`,
            "IDTRANSLATE25":`Discreción.`,
            "IDTRANSLATE26":`A partir de la edad núbil, el hombre y la mujer, sin restricción alguna en cuanto a la
                       raza , nacionalidad o religión, tienen derecho a casarse y fundar una familia.
            Tienen iguales derechos con respecto al matrimonio, durante el matrimonio y durante su
                       disolución .`,
            "IDTRANSLATE27":`El matrimonio solo puede celebrarse con el libre y pleno consentimiento del futuro
                       esposo.` ,
            "IDTRANSLATE28":`La familia es la unidad natural y fundamental de la sociedad y tiene derecho a
                       protección de la sociedad y del estado.
                       
            La soledad, el celibato, el aislamiento social, constituyen un imperativo humanitario que
                       llamamientos a las administraciones públicas, asociaciones y empresas del sector.
            La soledad crónica e involuntaria es un drama individual vivido por aquellos
                       que la padecen, la mayor parte del tiempo, en silencio.
            Illicolove.com nace en este contexto, con la voluntad de ofrecer de forma diferente y
                       simplemente , servicios de citas en línea; con una búsqueda probada de perfiles
                       ficticio _
            ¡Bienvenido!`,
            "IDTRANSLATE29":`Solo apuntamos a individuos:`,
            "IDTRANSLATE30":`Jóvenes de 18 años o más.`,
            "IDTRANSLATE31":`Los viejos célibes involuntarios, los desesperados y desilusionados.`,
            "IDTRANSLATE32":`Los divorciados.`,
            "IDTRANSLATE33":`Los viudos( ves ).`,
            "IDTRANSLATE34":`Nuestros usuarios`,
            "IDTRANSLATE35":`Todos nuestros usuarios`,
            "IDTRANSLATE36":`En África`,
            "IDTRANSLATE37":`En Europa`,
            "IDTRANSLATE38":`Otros países del mundo`,
            "IDTRANSLATE39":`Nuestro equipo`,
            "IDTRANSLATE40":`Director`,
            "IDTRANSLATE41":`Revisor y director de marketing`,
            "IDTRANSLATE42": `Desarrollador y SEO`,
            
            "IDTRANSLATEX1":`Pasos de uso`,
            "IDTRANSLATEX2":`Así es como funciona illicolove.` ,
            "IDTRANSLATEX3":`Registro`,
            "IDTRANSLATEX4":`Tan pronto como te registres, illicolove te ofrece tres (03) unidades por valor de 295 francos
            CFA o 0,43 euros.
            Una unidad por valor de 95 francos CFA o 0,144 euros.`,
            "IDTRANSLATEX5":`Conexión`,
            "IDTRANSLATEX6":`Tu conexión a illicolove te da acceso a todas las características y
                       servicios reservados para usuarios registrados.` ,
            "IDTRANSLATEX7":`Publicar anuncio`,
            "IDTRANSLATEX8": `Al hacer clic en el botón "Publicar su anuncio" , puede elegir publicar cualquiera
            en la página & quot;África&quot ;, o en la página & quot;Europa&quot ; o en la página & quot;Otros países del
                       mundo&quot ; ; dependiendo de dónde vivas. Simplemente complete el formulario
                       búsqueda que se mostrará.`,
            
            
            
            " para abrirPUAID ":`continuación...`,
            " openPUA ":`Te invitamos
                       para publicar su anuncio en la página de
                         tu zona geográfica de residencia, no obstante, puedes consultar y tomar
                         contacto con cualquier perfil de un anuncio de búsqueda fuera de su área
                         zona geográfica de residencia.
            Por ejemplo, si vives en Francia, debes publicar tu anuncio en la página
            "Europa" y puede consultar y contactar anuncios en las páginas
            “África”, “Europa” y “Otros países del mundo”
            Cuando termine de llenar y enviar su formulario de búsqueda, su
                         el anuncio aparecerá dentro de las 24 horas como máximo, si consideramos su perfil
                         confiable después de la revisión y cualquier verificación.
            Nuestro equipo de revisión y validación puede escribirle en privado para
                         tranquilizar sobre la fiabilidad de su perfil. Detalles de su identidad, una llamada
                         Es posible que se requiera voz o video. Con esto en mente, la validación y
                         la aparición de su anuncio en illicolove podría exceder las 24 horas. La velocidad
                         para la publicación de su anuncio dependerá de usted mismo. descartamos
                         sistemáticamente cualquier anuncio fantasioso, poco realista y especialmente perfiles falsos;
                         sin previo aviso
            Si encuentra alguna dificultad para disfrutar de los servicios de illicolove.com ,
                         por favor escríbanos a info@illicolove.com`,
            "IDTRANSLATEX9":`Validación de su cuenta de usuario`,
            "IDTRANSLATEX10":`Complete el formulario y haga clic en " ENVIAR" . Verificaremos y validaremos su
                        formulario con foto dentro de las 24 horas. Recibirás un mensaje de confirmación. Si
                        son necesarios controles adicionales , se lo notificaremos por correo electrónico.`,
            "IDTRANSLATEX11":`Consultar un anuncio`,
            "IDTRANSLATEX12": `El mensaje & quot;Comprobar anuncios &quot ; lleva a tres botones más: & quot;África&quot ;
            ( anuncios de África), & quot;Europa&quot ; (anuncios de Europa) y & quot;Otros países del mundo&quot ;
            ( anuncios fuera de África y Europa).
            Conocer al hombre o la mujer de tu vida en illicolove te puede costar
                        solo 95 francos CFA o 0,14 euros.
            Esto es lo que te cuesta cada unidad que te quitan, cuando haces clic en el
                        casilla "Para contactarme" de un perfil que te llame especialmente la atención.`,
            "IDTRANSLATEX13":`Compra de unidades`,
            "IDTRANSLATEX14":`Puedes recargar tu cuenta a tu conveniencia, para continuar con tu
                        búsquedas de citas entre los anuncios publicados.
            La cuenta personal de débito-crédito que obtienes tan pronto como te registras
                        le permite recargarlo utilizando el método de pago de su elección. LA MONEDA de facturación en illicolove 
            es el franco CFA (XOF ). 1 € = 655.957 XOF.`,
            "IDTRANSLATEX15":`Preguntas frecuentes.`,
            "IDTRANSLATEX16":` ¿Puedo conocer a alguien agradable en su sitio?`,
            "IDTRANSLATEX17":` Sí, siempre que complete el formulario de búsqueda correctamente proporcionando
                        información verdadera sobre usted.`,
            
            
            
            "IDTRANSLATEX18":`¿Tu sitio de citas paga?`,
            "IDTRANSLATEX19":` Sí, solo para consultar la dirección de contacto de un perfil que ha conservado
                        particularmente su interés.`,
            "IDTRANSLATEX20":`¿Cuánto cuesta consultar la dirección de contacto?
                        un perfil que me atraiga y me interese?`,
            "IDTRANSLATEX21":`95 FCFA o 0,14 euros.`,
            "IDTRANSLATEX22":` ¿Tu sitio de citas es gratuito?`,
            "IDTRANSLATEX23":`Sí, el registro y publicación de su anuncio de búsqueda de amor es
                        gratis en illicolove .`,
            "IDTRANSLATEX24":` ¿Cómo publicar un anuncio de citas?`,
            "IDTRANSLATEX25":`Después de registrarse en illicolove , haga clic en el botón o pestaña "PUBLICAR
            ANUNCIOS ". Luego, en la página que se mostrará, elija el nombre del
                        continente que corresponda a su continente de residencia habitual. finalmente llenar
                        correctamente el formulario de búsqueda que aparecerá luego de enviar.`,
            "IDTRANSLATEX26":` ¿Puedo residir en África y contactar con un perfil de residente?
                        fuera de África?`,
            "IDTRANSLATEX27":`¡Sí!`,
            "IDTRANSLATEX28":`¿Puedo residir en Europa y contactar con un perfil de residente?
                        fuera de Europa?`,
            "IDTRANSLATEX29":`¡Sí!`,
            "IDTRANSLATEX30":`¿Puedo residir en Europa y publicar mi
                        búsqueda en “África” y “Otros países del
                        mundo ”?`,
            "IDTRANSLATEX31":`¡No! Publique su anuncio de búsqueda solo en la página correspondiente a
                        su zona de residencia.`,
            "IDTRANSLATEX32":`¿Puedo pagar unidades con dinero móvil?`,
            "IDTRANSLATEX33":`¡Sí!`,
            "IDTRANSLATEX34":` ¿Cuál es el precio de suscripción en su sitio?`,
            "IDTRANSLATEX35":` No hay suscripción en illicolove.` ,
            "IDTRANSLATEX36":` ¿Cómo puedo recargar mi cuenta de Crédito-Débito?`,
            "IDTRANSLATEX37":`Le ofrecemos un sistema de pago seguro por KKiaPay que es nuestro
                        agregador de pagos de socios . A su conveniencia, recargue su cuenta
                        con tarjeta de crédito o dinero móvil.
            Debajo de tu perfil, haz clic en el botón “RECARGO MI CUENTA” y sigue
                        los pasos simplemente.`,
            "IDTRANSLATEX38":`¿Tengo que pagar para publicar mi anuncio de búsqueda?`,
            "IDTRANSLATEX39":`¡No! La publicación de un anuncio de búsqueda es gratuita.`,
            "IDTRANSLATEX40":`¿Tengo que pagar para ver anuncios?`,
            "IDTRANSLATEX41":`¡No! La consulta de los anuncios es gratuita, es obtener la dirección de
                        contacto contenido en un anuncio pagado.`,
            "IDTRANSLATEX42":`¿Cómo funciona el sistema de Crédito-Débito?`,
            "IDTRANSLATEX43":` Al registrarse, automáticamente recibe tres (03) unidades sin cargo
                        crédito permitiéndole consultar tres (03) direcciones de contacto en el
                        anuncios de su elección. Cada unidad tiene un valor de 95 FCFA o 0,14 Euros.
            Cuando se agoten tus unidades, puedes comprar más a tu conveniencia y
                        tu habilidad La cantidad de unidades que puedes comprar va desde una unidad hasta el número
                        número de unidades que desea.`,
            "IDTRANSLATEX44":` ¿Mis unidades que compro tienen fecha de caducidad?`,
            "IDTRANSLATEX45":`¡No! Tus unidades son de duración ilimitada.`,
            "IDTRANSLATEX46":`¿Necesito suscribirme para disfrutar de tu
                        encuentros ?`,
            
            
            
            "IDTRANSLATEX47":`En illicolove , no hay suscripción para disfrutar de nuestros servicios fuera de
                        suscripción a la newsletter que es opcional.`,
            "IDTRANSLATEX48":`¿Cuál es la política de privacidad sobre
            illicolove.com ?`,
            "IDTRANSLATEX49":`Nos tomamos muy en serio la privacidad de su información. Su
                        Los datos personales están seguros y no se comparten con terceros sin
                        tu consentimiento Puedes consultar nuestra política de privacidad para más
                        detalles` ,
            "IDTRANSLATEX50":`aquí`,
            "IDTRANSLATEX51":` ¿Dónde puedo encontrar el correo electrónico de validación de mi cuenta?`,
            "IDTRANSLATEX52":`El correo electrónico de validación de su cuenta puede estar en su carpeta de correo no deseado
                        o correo no deseado. Los filtros de seguridad del proveedor de correo electrónico a veces pueden
                        Dirija los correos electrónicos de validación a estas carpetas para su protección. Por favor, compruebe su
                        carpeta de spam o basura y asegúrese de marcar el correo electrónico como "no spam" o
            "no basura" si lo encuentra allí. Si aún no puede encontrar la dirección de correo electrónico de
                        confirmación ,
                        póngase en contacto con nuestro servicio de asistencia para obtener más ayuda.`,
            "IDTRANSLATETCU1":`Términos generales de uso`,
            "IDTRANSLATETCU2":`Bienvenido a illicolove.com, una plataforma de citas en línea
                        ofrecido por BAKO FAMILIA & amp ; COMPAÑÍA. Al usar nuestro sitio,
                        usted acepta los términos y condiciones que se describen a continuación.`,
            "IDTRANSLATETCU3":`ARTÍCULO 1: Objeto`,
            "IDTRANSLATETCU4":`Estas "Condiciones Generales de Uso" tienen por objeto
                        propósito el marco legal para el uso del sitio
            illicolove.com y sus servicios.`,
            
            
            
            "IDTRANSLATETCU5":`Este contrato se celebra entre:`,
            "IDTRANSLATETCU6":`El establecimiento BAKO FAMILIA & amp ; EMPRESA propietaria del sitio
                        Internet , en lo sucesivo denominado "el Editor", Y cualquier persona física que desee acceder al sitio y a su
                        servicios , en adelante denominado como "el Usuario ".
            Se deben aceptar los términos de servicio
                        por cualquier Usuario , y su acceso al sitio vale
                        aceptación de estas condiciones.
            En estas Condiciones Generales de Uso, se acuerda que el
                        siguientes expresiones o palabras, ya sea que se usen en singular o plural,
                        tendrá el siguiente significado:`,
            "IDTRANSLATETCU7":`Anuncio de investigación: se refiere a una publicación de un usuario o
                        visitante del sitio, en forma de texto a través de nuestro formulario, acompañado o no
                        una o más fotografías que representen su rostro.`,
            "IDTRANSLATETCU8":`Servicios de Citas Románticas : significa el acceso del Usuario a
                        todos los anuncios de búsqueda publicados en el Sitio Web, entre otros, la
                        perfiles , enlaces de hipertexto, textos, imágenes, videos, contactos o direcciones por parte del
                        a través del "clic para mostrar".`,
            "IDTRANSLATETCU9":`“Haga clic para mostrar”: “Haga clic para mostrar, se refiere a la funcionalidad que permite
                        todo usuario para mostrar la dirección de correo electrónico, contacto telefónico o cualquier
                        otra forma de ponerse en contacto con otro usuario que previamente
                        emitió un anuncio de búsqueda y rellenó los medios de su elección de
                        contacto _ Esta funcionalidad que hace posible obtener información tan vital es
                        pagando _ Su coste es de 95 francos CFA o aproximadamente 0,144 euros por clic.`,
            "IDTRANSLATETCU10":`ARTÍCULO 2: Aviso Legal`,
            
            
            
                       
            "IDTRANSLATETCU11X":`El establecimiento BAKO FAMILIA & amp ; EMPRESA es el editor de la
                       sitio de citas illicolove.com .
            Ubicado en el Lote 191 parcela b', en Agbalilamè , es un
                       propiedad única bajo la ley beninesa. Fue creado el 29
            Mayo de 2008, inscrito en el Registro Mercantil y de Crédito
            Mobiliario RCCM RB/COT/08/A4101; y tiene identificación fiscal
            Número único (IFU): 3200800938610.
            Está representada por Gildas Ghislain GANGBAZO.`,
            "IDTRANSLATETCU11":`ARTÍCULO 3: acceso a los servicios`,
            "IDTRANSLATETCU12":`El Usuario del sitio illicolove.com tiene acceso a los siguientes servicios:`,
            "IDTRANSLATETCU13":`Crear una cuenta personal`,
            "IDTRANSLATETCU14":`Creación y publicación gratuita de su anuncio de búsqueda
            a través de nuestro formulario para completar,`,
            "IDTRANSLATETCU15":`Consultando anuncios de búsqueda publicados por
                      otros usuarios `,
            "IDTRANSLATETCU16":`La obtención abonada de los contactos de los perfiles que retiene
                      su interés y presente en los anuncios de búsqueda,
                      forma ilimitada y a su conveniencia (Click para mostrar / Click
                      para mostrar)`,
            "IDTRANSLATETCU17":`Posibilidad de contactar con el Editor para solicitar una
                      solicitud de servicios personalizados,`,
            "IDTRANSLATETCU18":`El Sitio Web también ofrece al Usuario que
                      deseos , la organización parcial
                      o completar con una ceremonia de boda.
            Cualquier Usuario con acceso a internet puede acceder
                      gratis y desde
                      en cualquier parte del sitio. Los gastos a cargo de
                      el Usuario para acceder a ella
            ( conexión a internet , equipos informáticos, etc.) no están en
                      responsabilidad del Editor .
            Los servicios mencionados anteriormente solo son accesibles para
                      el Usuario sólo si es
                      miembro del sitio (es decir, él / ella se identifica con
                      utilizando sus credenciales
                      conexión ):
            El sitio y sus diversos servicios pueden ser interrumpidos o
                      suspendido por el Editor,
                      en particular con motivo del mantenimiento, sin obligación de
                      aviso o
                      justificación .`,
            "IDTRANSLATETCU19":`ARTÍCULO 4: Responsabilidad del Usuario` ,
            "IDTRANSLATETCU20":`El Usuario es responsable de los riesgos relacionados con
                      el uso de su identificador
                      inicio de sesión y contraseña.
            
            contraseña del Usuario debe permanecer en secreto. En
                      caso de divulgación de palabras
                      contraseña , el Editor declina toda responsabilidad.
            El Usuario asume toda la responsabilidad por
                      su uso de
                      información y contenido presente en el sitio web illicolove.com.
            Cualquier uso del servicio por parte del Usuario teniendo directamente
                      o indirectamente por
                      consecuencia del daño debe ser indemnizado
                      en beneficio del sitio.
            El sitio permite a los usuarios publicar un anuncio de
                      buscar en el sitio
                      completando el formulario "Publicar un anuncio",`,
            
            
            
            
            "IDTRANSLATETCU21":`El usuario acepta proporcionar información
                      confiable , oferta
                      fotografías recientes desprovistas de obscenidades, escribe en su
                      criterios de búsqueda
                      observaciones respetuosas de los demás y de la ley y acepta que
                      son anuncios tampoco
                      moderado o rechazado por el Editor, sin obligación de
                      justificación después de una negativa a
                      su parte para proporcionarle información adicional para
                      evitar perfiles falsos.
            Al publicar su anuncio en el sitio, el Usuario cede a
                      el Editor el derecho de no
                      exclusiva y libre de representar, reproducir, adaptar,
                      editar , transmitir y distribuir
                      su anuncio en redes sociales, o directamente por un tercero
                      autorizado ; en el
                      el respeto a su anonimato o al modo de confidencialidad elegido.
            El Editor se compromete a preservar el anonimato de todos.
                      usuario en caso de
                      distribución de anuncios en redes sociales.`,
            "IDTRANSLATETCU22":`ARTÍCULO 5: Responsabilidad del Editor`,
            "IDTRANSLATETCU23":`Cualquier mal funcionamiento del servidor o de la red no puede participar
                      responsabilidad del Editor.
            Del mismo modo, el sitio no se hace responsable en caso de
                      fuerza mayor o
                      acto imprevisible e insuperable de un tercero.
            El sitio web illicolove.com se compromete a implementar todas
                      recursos necesarios para
                      garantizar la seguridad y confidencialidad de los datos.
            Sin embargo, no trae un
                      garantia total de seguridad .
            El Editor se reserva la opción de no garantizar la
                      fiabilidad del perfil , aunque
                      los anuncios de búsqueda que se muestran en el sitio se consideran
                      confiable y verificado
                      antes de la validación de su publicación en el back office por
                      el equipo de revisión y
                      Validación del editor.` ,
            
            
            "IDTRANSLATETCU24":`ARTÍCULO 6: Propiedad Intelectual`,
            "IDTRANSLATETCU25":`BAKO FAMILIA & amp ; LA EMPRESA es propietaria exclusiva de todos los derechos de
                      propiedad intelectual relativa tanto a la marca, como a la
                      estructura que contenido
                      del Sitio Web www.illicolove.com
            Los contenidos del sitio www.illicolove.com están destinados a una
                      usar estrictamente
                      personal , privada y no colectiva, libremente por su contenido
                      gratis _ Es lo mismo
                      para canales RSS y boletines.
            Cualquier uso en un contexto profesional o comercial o
                      toda
                      se prohíbe la comercialización de este contenido a terceros,
                      excepto con el consentimiento expreso de
            FAMILIA BAKO & amp ; EMPRESA.`,
            "IDTRANSLATETCU26":`ARTÍCULO 7: Datos personales.`,
            "IDTRANSLATETCU27":`Consulta nuestra Política de Privacidad, datos
                      y galletas.` ,
            "IDTRANSLATETCU28":`aquí`,
            "IDTRANSLATETCU29":`ARTÍCULO 8: Enlaces de hipertexto`,
            "IDTRANSLATETCU30":`Los dominios a los que conducen los enlaces de hipertexto presentes en el sitio
                      no comprometan la responsabilidad de la Editorial BAKO FAMILIA & amp ;
            EMPRESA, que no tiene
                      ningún control sobre estos enlaces.
            El Editor ha establecido alianzas con proveedores.
                      de servicios y puede
                      proporcionar al Usuario información relativa a
                      otros sitios y/o
                      servicios , por ejemplo, mencionando direcciones de sitios web,
                      y/o por la presencia
                      enlaces de hipertexto a estos sitios.
            Estos enlaces de hipertexto que redirigen a sitios de terceros
                      no fueron desarrollados por
            La Editorial y no pertenecen a ella. El Editor no asume
                      por lo tanto , no
                      responsabilidad por estos sitios, su contenido, publicidad, productos
                      o servicios disponibles
                      en o desde estos sitios. Además, la responsabilidad de
            El editor no puede ser
                      comprometidos con la información, opiniones y recomendaciones
                      formulado por estos
                      tercero .`,
            
            
            "IDTRANSLATETCU31":`El editor no se hace responsable de ningún daño o
                      pérdidas comprobadas o
                      alegado , que surja de o en conexión con el uso, o con
                      el hecho de haber hecho
                      confianza en el contenido, bienes o servicios disponibles
                      en estos servicios
                      socios o fuentes externas.
            La decisión de activar estos enlaces es totalmente suya.
                      responsabilidad de
                      el usuario _
            El Editor no es responsable de la disponibilidad de estos sitios.
                      y no puedo controlar
                      contenido o validar publicidad, productos y otros
                      información difundida sobre estos
                      sitios web
            Es posible que un tercero cree un enlace a una página del
                      sitio web illicolove.com sin
                      autorización expresa del editor.`,
            "IDTRANSLATETCU32":` ARTÍCULO 9: Advertencia Especial`,
            "IDTRANSLATETCU33":`En la vida real como en la vida virtual en Internet, puedes encontrarte con el
                      camino de la gente honesta así como de la gente
                      maliciosos y estafadores.
            Depende de nosotros individualmente adoptar ciertas
                      actitudes de seguridad en el
            vida real y además en el mundo virtual en internet.
            FAMILIA BAKO & amp ; EMPRESA le invita a:`,
            "IDTRANSLATETCU34":`Nunca envíes dinero a un . desconocida reunió
                      en este sitio; y esto bajo ningún pretexto.`,
            "IDTRANSLATETCU35":`Nunca envíes fotografías íntimas a un contacto
                      encontrado en este sitio,`,
            
            
            
            "IDTRANSLATETCU36":`Ten cuidado cuando alguien afirme vivir en
                      los alrededores, pero trabaja en el extranjero.`,
            "IDTRANSLATETCU37": `Nunca te rindas con el pretexto de una situación urgente en la que se encuentra un ser querido
                      paciente y su corresponsal virtual.le te pide que
                      ayúdalo a pagar
                      varias tarifas. En tal caso, le invitamos a
                      reportar el perfil de estos
                      estafadores en el editor.`,
            "IDTRANSLATETCU38":`Una relación romántica en ciernes en illicolove.com no
                      podría ser para ti
                      una fuente de problemas y carga financiera. Hecho
                      por lo tanto prueba de un
                      gran desconfianza cuando un unknown.e te declara su amor
                      sin haber podido
                      vosotras conocer ; e incluso después de un encuentro físico, tomar
                      tiempo _
                      necesario antes de incurrir en cualquier gasto sustancial en
                      efectivo .`,
            "IDTRANSLATETCU39":`Elige siempre un lugar público para la primera reunión.`,
            "IDTRANSLATETCU40":`Siempre informa tus posiciones a un ser querido cuando estés
                      en compañía de un extraño que acabas de conocer
                      recién .`,
            "IDTRANSLATETCU41":`Denuncia e informa, intentos de venta
                      productos o servicios,
                      perfiles que resultan ser falsos a pesar de nuestro filtrado después
                      sus discusiones en privado,
                      amenazas e intimidaciones, comentarios calumniosos,
                      homófobo , abusivo y
                      mensajes ofensivos , mensajes de menores y solicitudes de ayuda
                      financiera o
                      fotografías explícitas.` ,
            "IDTRANSLATETCU42":`Por tanto, el Usuario reconoce y acepta sin
                      reservar para estar completamente
                      responsable de cualquier acción tomada como resultado de la
                      leyendo un anuncio
                      citas y en general a cualquier informacion
                      presentes en el Sitio.
            El suministro de estos datos no puede ser asimilado,
                      de cualquier manera, a
                      asesoramiento específico o apoyo a la toma de decisiones.
            El Usuario es plenamente consciente del carácter
                      encuentros aleatorios
                      enamorado tanto en la vida real como en internet.`,
            "IDTRANSLATETCU43":` ARTÍCULO 10: Eliminación de datos después de 1 año de inactividad.`,
            "IDTRANSLATETCU44":`Por razones de seguridad, si no ha
                      autenticado en el Sitio
                      durante un período de un año, recibirá un correo electrónico
                      invitándote _
                      conéctese lo antes posible, de lo contrario su perfil
                      será eliminado de
                      nuestras bases de datos.`,
            
            
            
            "IDTRANSLATETCU45":`ARTÍCULO 11: Eliminación de la cuenta a pedido.`,
            "IDTRANSLATETCU46":`El Usuario tiene la posibilidad de eliminar su Cuenta en
                      en cualquier momento, por
                      simple petición al Editor o por el menú de borrado de
            Cuenta presente
                      en la configuración de la cuenta, si corresponde.`,
            "IDTRANSLATETCU47":`ARTÍCULO 12: Eliminación de la cuenta en caso de violación de los TOS`,
            "IDTRANSLATETCU48":`En caso de violación de una o más disposiciones de los T&C
                      o todo
                      otro documento incorporado aquí por referencia, el Editor
                      se reserva el
                      derecho a rescindir o restringir sin previo aviso
                      anterior y a su
                      sola discreción, su uso y acceso a los Servicios, a su
                      cuenta y a todos
                      los Sitios Enlazados.`,
            "IDTRANSLATETCU49":`ARTÍCULO 13: Indicaciones en caso de violación de seguridad detectada por el Editor.`,
            "IDTRANSLATETCU50":`Nos comprometemos a implementar todas las medidas
                      técnicas y
                      medidas organizativas apropiadas para garantizar un nivel de
                      seguridad adecuada
                      con respecto a los riesgos de accidentes, no autorizados o
                      ilegal , de
                      divulgación , alteración, pérdida o destrucción de
                      datos
                      información personal sobre usted.`,
            "IDTRANSLATETCU51":`En caso de que tomemos
                      conocimiento del acceso ilegal a sus datos personales
                      re
                      almacenados en nuestros servidores o en los de nuestros proveedores de servicios, o de un
                      acceso no
                      autorizadas que dan lugar a la realización de los riesgos
                      identificado a continuación
                      arriba , nos comprometemos a:`,
            
            
            
            
            "IDTRANSLATETCU52":`Examina las causas del incidente y te notifica
            ( público informes );`,
            "IDTRANSLATETCU53":`Tomar las medidas necesarias dentro de los límites de la
                      razonable a fin de atenuar los efectos negativos y los perjuicios que puedan derivarse
                      dicho incidente.`,
            "IDTRANSLATETCU54":`ARTÍCULO 14: Limitación de responsabilidad`,
            "IDTRANSLATETCU55":`En ningún caso los compromisos definidos en el punto anterior
                      relativas a la notificación en caso de una brecha de seguridad no puede ser
                      asimilado a cualquier reconocimiento de culpa o responsabilidad por
                      la ocurrencia del incidente en cuestión.`,
            "IDTRANSLATETCU56":`ARTÍCULO 15: Duración del contrato`,
            "IDTRANSLATETCU57":`La duración de este contrato es indefinida. El contrato
                      produce sus efectos respecto del Usuario desde el inicio de la utilización del
                      servicio.` ,
            "IDTRANSLATETCU58":`ARTÍCULO 16: Ley aplicable y jurisdicción competente`,
            "IDTRANSLATETCU59":`El idioma de estos T&C es el francés y prevalecerá sobre
                      todas las versiones traducidas a otro idioma.
            Este contrato depende de la legislación beninesa, en particular
                      Ley N° 2017-20 de 20 de abril de 2018 sobre el Código Digital en la República de
            Benigno. La elección de
                      la ley aplicable no afecta sus derechos como
                      consumidor de conformidad con la legislación aplicable de su lugar de residencia.».`,
            "IDTRANSLATETCU60":`Si eres un consumidor , usted y nosotros acordamos acatar las
                      jurisdicción no exclusiva de los tribunales de Benín.
            En caso de controversia no resuelta amistosamente entre
                      el Usuario y el Editor, el tribunal
                      de Comercio de Cotonou será competente para resolver las
                      litigio.` ,
            "IDTRANSLATEPC1":`POLÍTICA DE PRIVACIDAD`,
            "IDTRANSLATEPC2":`Aviso legal`,
            
            
            
            "IDTRANSLATEPC3":`El presente aviso legal y política de privacidad le proporciona e informa de la
                      forma en que BAKO FAMILIA & amp ; EMPRESA utiliza y protege la información que nos proporciona
                      también transmite cuando utiliza nuestro sitio de citas accesible en
                      de la URL: www.illicolove.com.`,
            "IDTRANSLATEPC4":`Tenga en cuenta que nuestra política de privacidad está sujeta a cambios
                      y/o complementado en cualquier momento, en particular con el fin de cumplir con los desarrollos legislativos,
                      normativa , jurisprudencial o tecnológica. En tal caso, la fecha de su actualización será
                      indicado en esta póliza. Estas modificaciones comprometen al usuario tan pronto como se implementan.
                      línea _
            Por lo tanto, lo invitamos a consultar regularmente estos términos y política.
                      de confidencialidad para estar al corriente de cualquier modificación.`,
            "IDTRANSLATEPC5":` Declaración a la Autoridad de Protección de Datos Personales (APDP)`,
            "IDTRANSLATEPC6":`De conformidad con la Ley N° 2017-20 de 20 de abril de 2018 sobre el código digital en la República de
            Benin (Libro 5 relativo a la protección de datos personales y vida
                      privado ) el sitio web www.illicolove.com ha sido declarado a la Autoridad de
            Protección de Datos Personales (apdp.bj) con el número …………`,
            "IDTRANSLATEPC7":`En cualquier caso, BAKO FAMILIA & COMPANY no recopila información personal
                      relacionados con el usuario solo para las necesidades del servicio de citas propuesto
                      a través de su sitio web. El usuario proporciona esta información a sabiendas,
                      en particular cuando proceda a entrar en ellos él mismo.».`,
            
            
            
            
            "IDTRANSLATEPC8":`De conformidad con lo dispuesto en la Ley 2017-20 sobre el código digital en
            República de Benin, cualquier usuario tiene derecho de acceso, rectificación y
                      oposición a los datos personales que le conciernen, mediante su solicitud por escrito y firmada,
                      acompañada de una copia de un documento de identidad con la firma del titular del documento, en
                      especificando la dirección a la que debe enviarse la respuesta. Ninguna información personal de un
                      usuario de nuestro sitio web "www.illicolove.com" no se publica, transfiere o vende en
                      cualquier medio o a terceros sin su conocimiento.`,
            "IDTRANSLATEPC9":`Privacidad de datos`,
            "IDTRANSLATEPC10":`Sus datos personales son confidenciales y no serán
                      comunicado a terceros.
            La naturaleza privada de nuestro servicio de citas no nos permite
                      comunicar sus datos personales (nombres, contactos, direcciones, etc. ) a un individuo, independientemente de
                      ya sea su rango o su calidad.`,
            "IDTRANSLATEPC11": `Derecho de acceso`,
            "IDTRANSLATEPC12":`En aplicación de las disposiciones de la ley sobre el código digital en la República de Benin, cualquier usuario
                      de nuestro sitio web www.illicolove.com tiene derecho de acceso, rectificación, modificación y
                      supresión relativa a los datos que le conciernen individualmente. Este derecho puede ser ejercido por el
                      titular previa solicitud enviada electrónicamente a la siguiente dirección de correo electrónico: info@illicolove.com. EL
                      la información personal recopilada no se confía de ninguna manera a terceros.`,
            "IDTRANSLATEPC13":`Derecho de rectificación`,
            
            
            
            
            
            "IDTRANSLATEPC14":`De conformidad con la ley sobre el código digital en la República de Benin, cualquier usuario de
                      nuestro sitio web www.illicolove.com podrá solicitar su rectificación, actualización,
                      supresión , bloqueo o borrado de los datos que le conciernen, y que pueden
                      resulte ser inexacto, erróneo, incompleto, ambiguo u obsoleto.».`,
            "IDTRANSLATEPC15":`Período de retención.`,
            "IDTRANSLATEPC16":`Sus datos personales son conservados por BAKO FAMILIA & amp ; EMPRESA solo para
                      el tiempo correspondiente a su necesidad de servicios de citas. Sin embargo, esto
                      el período de conservación no exceda de trece (12) meses.».`,
            "IDTRANSLATEPC17": `Denuncia ante la autoridad competente`,
            "IDTRANSLATEPC18":`Si considera que BAKO FAMILIA & COMPANY no cumple con sus obligaciones en relación con
                      de sus datos personales recopilados durante su visita a su sitio web
            www.illicolove.com, podrá dirigir, en los términos previstos por el procedimiento legal, una queja o
                      una solicitud a la Autoridad de Protección de Datos Personales (APDP).`,
            "IDTRANSLATEPC19":`Propiedad Intelectual`,
            "IDTRANSLATEPC20": `Todo el contenido de este sitio web, incluidos, entre otros, gráficos, imágenes,
                      textos , videos, animaciones, sonidos, logos, gifs e íconos así como su formato son los
                      propiedad exclusiva de BAKO FAMILIA & COMPANY a excepción de las marcas, logotipos o
                      contenidos pertenecientes a otras empresas colaboradoras o autores.
            Cualquier reproducción, distribución, modificación, adaptación, retransmisión o publicación, incluso
                      parcial , de estos diferentes elementos está terminantemente prohibido sin el consentimiento expreso por escrito de BAKO
            FAMILIA Y EMPRESA.`,
            "IDTRANSLATEPC21":`Términos de servicio`,
            "IDTRANSLATEPC22":`El sitio web www.illicolove.com se ofrece en francés, con traducciones al
                      ingles y español Para una mayor comodidad de uso, le recomendamos que
                      use navegadores compatibles y modernos como: Chrome, Safari, Firefox.`,
            "IDTRANSLATEPC23":`Información y sugerencias`,
            
            
            
            
            
            
            "IDTRANSLATEPC24":`BAKO FAMILIA & COMPANY implementa todos los medios a su alcance, para asegurar una
                      servicio de citas confiable y una actualización permanente de su sitio web
            www.illicolove.com. Sin embargo, pueden ocurrir errores u omisiones. En consecuencia, cualquier usuario puede enviarnos sugerencias o información a: info@illicolove.com y
                      indicar cualquier modificación al sitio que considere pertinente.`,
            "IDTRANSLATEPC25":`Cookies.`,
            "IDTRANSLATEPC26":`Para fines de rendimiento técnico, estadísticas y visualización, el sitio web
            www.illicolove.com puede utilizar cookies. Las cookies son pequeños archivos de texto almacenados en
                      su terminal, y que no permiten la identificación del usuario, pero que registran
                      información relativa a la navegación de un terminal en un sitio web. Algunas partes de este
                      El sitio no puede ser funcional sin la aceptación de cookies. Los datos así obtenidos
            tienen por finalidad facilitar la navegación posterior en este sitio. Las cookies también están destinadas a
                      habilite varias métricas de audiencia y asistencia.`,
            "IDTRANSLATEPC27":` La negativa a instalar una cookie puede tener como consecuencia la imposibilidad de acceder a determinadas
                      caracteristicas _ No obstante, cualquier usuario de este sitio web puede configurar su terminal para
                      rechazar la instalación de cookies, tal y como se indica a continuación:`,
            "IDTRANSLATEPC28":`Usuarios de Safari: seleccione Safari &gt; preferencias,
                      haga clic en Privacidad, luego seleccione la opción
                      relativa a “Cookies y datos de sitios web”. Siempre
                      Bloquear : Safari no permite que ningún sitio web, de terceros o
                      anunciante para almacenar cookies y otros datos en
                      tu mac Esto puede evitar que algunos sitios web
                      funcione correctamente.`,
            
            
            
            
            "IDTRANSLATEPC29":`Usuarios de Safari: seleccione Safari &gt; preferencias,
                      haga clic en Privacidad, luego seleccione la opción
                      relativa a “Cookies y datos de sitios web”. Siempre
                      Bloquear : Safari no permite que ningún sitio web, de terceros o
                      anunciante para almacenar cookies y otros datos en
                      tu mac Esto puede evitar que algunos sitios web
                      funcione correctamente.`,
            "IDTRANSLATEPC30":`Usuarios de Google Chrome: Menú &gt; Ajustes >
            Mostrar configuración avanzada (ubicado en la parte inferior de la página).
            Luego haga clic en el botón Configuración de contenido
                      luego marque la casilla Bloquear cookies y datos personales
                      sitios de terceros , finalmente haga clic en Aceptar para confirmar su elección.`,
            "IDTRANSLATEPC31":`Usuarios de Internet Explorer: Menú de opciones de Internet
            pestaña Confidencialidad y en el botón Avanzado para hacer
                      abrir la ventana Configuración de privacidad
                      avanzado _ Luego marque la casilla Anular administración.
                      cookies automáticas , luego seleccione Rechazar
                      en la columna Cookies de terceros.`,
            "IDTRANSLATEPC32":`Usuarios de Microsoft Edge : pestaña herramienta/opciones
                      internet _ Haga clic en Privacidad y elija Bloquear
                      todas las cookies.`,
            
            
            
            "IDTRANSLATEPC33":`Siguiendo las prácticas actuales, algunas cookies son
                      exenta de la recogida previa de su consentimiento
                      en la medida en que sean esenciales para
                      funcionamiento de este sitio web. Su propósito es
                      facilitar la comunicación electrónica. El se agita
                      incluidas las cookies de ID de sesión,
                      autenticación y personalización de su interfaz.
            Estas cookies son emitidas y gestionadas por BAKO FAMILIA &
            COMPAÑÍA y están todos sujetos a esta política.`,
            "IDTRANSLATEPC34":`Enlaces de hipertexto`,
            "IDTRANSLATEPC35":`El sitio web "www.illicolove.com" puede ofrecer enlaces a otros sitios web u otros
                      recursos disponibles en Internet. BAKO FAMILIA & COMPANY no tiene medios
                      para controlar los sitios en relación con su sitio web. Además, no responde por la
                      disponibilidad de tales sitios y fuentes externas, ni lo garantiza. No se puede tomar por
                      responsable de cualquier daño, de cualquier naturaleza, que resulte del contenido de estos sitios
                      o fuentes externas.`,
            
            
            
            "IDTRANSLATECONSULTE1":`África`,
            "IDTRANSLATECONSULTE2":`Europa`,
            "IDTRANSLATECONSULTE3":`Otros países del mundo`,
            "IDTRANSLATEPROFIL1": "Cuenta válida",
            "IDTRANSLATEPROFIL2": "Cuenta inválida",
            "IDTRANSLATEPROFIL3":`Cuenta de débito`,
            "IDTRANSLATEPROFIL4":`Cuenta de débito`,
            "IDTRANSLATEPROFIL5":`Mi Plan`,
            "IDTRANSLATEPROFIL6":`Mi Plan`,
            "IDTRANSLATEPROFIL7":`Mis datos`,
            "myNameIDX": `Borrar su cuenta`,
            "myBtn": `Recargar mi cuenta`,
            "IDTRANSLATEPROFIL9": `Ir a inicio`,  
            "IDTRANSLATEPROFIL10":`Cerrar sesión`,
            "CONSULTEZLESANNONCES": `CONSULTA LOS ANUNCIOS`,
            "IDTRANSLATEPROFIL11":`EDITA TU ANUNCIO`,
            "IDTRANSLATEPROFIL12":`PUBLICAR ANUNCIO`,
            "IDTRANSLATEPROFIL13":`¡Bienvenido!`,
            "exampleModalLongTitle":`Una unidad vale 95 FCFA, o 0,144 euros.`,
            "errorSms":`Debes ingresar un número.`,
            "SmspayId":` Ingrese el número de unidad aquí.`,
            "IDTRANSLATEPROFIL14":`Volver`,
            "payYourUnitybtn":`Validar`,
            "exampleModalLongTitleX":`Asegure su cuenta.`,
            "IDTRANSLATEPROFIL15":`Proporcione una respuesta que nunca olvidará.
            Se le pedirá esta respuesta cuando recupere tu cuenta Sin esta respuesta, su cuenta permanecerá inaccesible.`,
            "IDTRANSLATEPROFIL16":`Seleccione su pregunta`,
            "IDTRANSLATEPROFIL17":`¿Qué hace especial a una persona?`,
            "IDTRANSLATEPROFIL18":`¿Qué te hace sentir más querido?`,
            "IDTRANSLATEPROFIL19":`¿Cómo imaginas tu vida diaria?`,
            "IDTRANSLATEPROFIL20":`¿Qué es lo más importante para ti?`,
            "IDTRANSLATEPROFIL21":`¿Cuál es el nombre de la persona que te inspira?`,
            "IDTRANSLATEPROFIL22":`¿Cuál es tu país favorito?`,
            "IDTRANSLATEPROFIL23":`¿Quién es tu jugador favorito?`,
            "IDTRANSLATEPROFIL24":`¿Quién es tu artista favorito?`,
            "IDTRANSLATEPROFIL25":`¿Cuál es su respuesta ? Solo una palabra. Sin espacio.`,
            "IDTRANSLATEPROFIL26":`Validar`,
            "IDTRANSLATEPROFIL27":`respuesta de seguridad`,
            "payYourUnity": `Ingrese la unidad`,
            felicitacionesTitulo : "¡Felicitaciones!",
            accountSecureMessage : "Su cuenta es segura. ¡Gracias!",
            accountSecureMessageX : "No pongas un espacio. ¡Gracias!",
            
            "IDTRANSLATEPROFIL28":`Su cuenta de débito está vacía. Por favor pague unidades por
                      accede a los contactos de los anuncios que te van a gustar.`,
            "IDTRANSLATEPROFIL29":`No puedes pagar por unidades en este momento.
            Porque todavía estás en tu cuenta de Débito. Gracias.`,
            "IDTRANSLATEPROFIL30W":`¿Estás seguro?`,
            "IDTRANSLATEPROFIL30":`¡No puedes volver!`,
            "IDTRANSLATEPROFIL31":`¡Sí, bórralo!`,
            "IDTRANSLATEPROFIL32":`¿Estás seguro?`,
            "IDTRANSLATEPROFIL33":`Después de cerrar sesión, tiene la opción de volver a iniciar sesión.`,
            "IDTRANSLATEPROFIL34":`¡Sí, desconectado!`,
            "IDTRANSLATEPROFIL35":`Desconectado`,
            "IDTRANSLATEPROFIL36":`Has sido desconectado.`,
            "IDTRANSLATEPROFIL37":`¿Quieres visitar nuestra página de inicio?`,
            "IDTRANSLATEPROFIL38":`¡Eliminado!`,
            "IDTRANSLATEPROFIL39":`¡Su cuenta ha sido eliminada con éxito!`,
            "IDTRANSLATEPROFIL40":`¡Eliminado!`,
            "IDTRANSLATEPROFIL41":`¡Error al eliminar el usuario! `,
            "IDTRANSLATEPROFIL42":`hay un ERROR`,
            "IDTRANSLATEPROFIL43":`¡El campo no está correctamente rellenado!`,
            "IDTRANSLATEPROFIL44":`¡Algo salió mal!`,
            "IDTRANSLATEPROFIL45":`¡los datos no están actualizados!`,
            "IDTRANSLATEPROFIL46":`Hola, le informamos que ya no tiene una unidad en
            tu cuenta Por favor recárguelo o vaya
            en tu perfil ¡Gracias!`,
            "IDTRANSLATEPROFIL47":`¿Estás seguro?`,
            "IDTRANSLATEPROFIL48":`Vemos que ya tienes una publicación
                      en progreso Al continuar con esta acción, su antiguo
                      anuncio será modificado y desactivado. tu nuevo anuncio
                      se enviará a los administradores de illicolove para su validación,
                       este proceso tomará hasta 24 horas. Gracias
                       para su comprensión.`,
            
            
            
            "IDTRANSLATEPROFIL49":`Volver`,
            "IDTRANSLATEPROFIL50":`Sí, cambiado`,
            "IDTRANSLATELOGIN1":`Iniciar sesión.`,
            "IDTRANSLATELOGIN2":`Correo electrónico`,
            "IDTRANSLATELOGIN3":`Su dirección de correo electrónico`,
            "IDTRANSLATELOGIN4":`Contraseña`,
            "IDTRANSLATELOGIN5":`Tu contraseña`,
            "IDTRANSLATELOGIN6":`Recuérdame`,
            "IDTRANSLATELOGIN7": `Olvidé mi contraseña`,
            "IDTRANSLATELOGIN8":`No tengo cuenta.`,
            "IDTRANSLATELOGIN9":`Registrarse gratis`,
            "IDTRANSLATELOGIN10":`Iniciar sesión`,
            "IDTRANSLATELOGIN11":`Éxito`,
            "IDTRANSLATELOGIN12":`¡Ha iniciado sesión correctamente!`,
            "IDTRANSLATELOGIN13":`Lo siento`,
            "IDTRANSLATELOGIN14":`¡La contraseña es incorrecta!`,
            "IDTRANSLATELOGIN15":`Lo siento`,
            "IDTRANSLATELOGIN16":`¡El usuario no existe con el correo electrónico dado!`,
            "IDTRANSLATESIGNUP1":`Registrarse`,
            "IDTRANSLATESIGNUP2":`Pseudónimo`,
            "IDTRANSLATESIGNUP3":`Seudónimo`,
            "IDTRANSLATESIGNUP4":`Nombre y Nombres`,
            "IDTRANSLATESIGNUP5":`Nombre y Nombre`,
            "IDTRANSLATESIGNUP6":`Correo electrónico`,
            "IDTRANSLATESIGNUP7":`Su dirección de correo electrónico`,
            "IDTRANSLATESIGNUP8":`Contraseña`,
            "IDTRANSLATESIGNUP9":`Tu contraseña`,
            "IDTRANSLATESIGNUP10":`He leído y acepto los términos y condiciones`,
            "IDTRANSLATESIGNUP11":`Leer y aceptar nuestros términos y condiciones`,
            "IDTRANSLATESIGNUP12":`Ya tengo una cuenta.`,
            "IDTRANSLATESIGNUP13":`Iniciar sesión`,
            "IDTRANSLATESIGNUP14":`Lo siento`,
            
            
            
            "IDTRANSLATESIGNUP15":`¡Ya tienes una cuenta con esta dirección de correo electrónico!`,
            "IDTRANSLATESIGNUP16":`éxito`,
            "IDTRANSLATESIGNUP17":`¡Estás registrado correctamente!`,
            "IDTRANSLATESIGNUP18":`Error al enviar la dirección de correo electrónico a Firebase` ,
            "IDTRANSLATESIGNUP19":`No pongas un espacio. ¡Gracias!`,
            "IDTRANSLATEFORGET1":`Envíe la dirección de correo electrónico utilizada durante el registro.`,
            "IDTRANSLATEFORGET2":`Correo electrónico`,
            "IDTRANSLATEFORGET3":`tu-correo@gmail.com`,
            "IDTRANSLATEFORGET4":`Enviar`,
            "IDTRANSLATEFORGET5":`Validar`,
            
            "IDTRANSLATEFORGET7":`¡Introduce tu nueva contraseña!`,
            "IDTRANSLATEFORGET8":`¡Introduce tu nueva contraseña!`,
            "IDTRANSLATEFORGET9":`Genial...`,
            "IDTRANSLATEFORGET10":`¡Contraseña actualizada correctamente!`,
            "IDTRANSLATEFORGET11":`Iniciar sesión`,
            "IDTRANSLATEFORGET12":`OK`,
            "IDTRANSLATEFORGET13":`Error al actualizar el correo electrónico.`,
            "IDTRANSLATEFORGET14":`Esta no es la respuesta correcta` ,
            "IDTRANSLATEFORGET15":`El usuario no existe.`,
            "IDTRANSLATEFORM1":`MI PERFIL`,
            "IDTRANSLATEFORM2":`MI PERFIL`,
            "IDTRANSLATEFORM3":`MI PERFIL`,
            "IDTRANSLATEFORM4":`PERFIL QUE ESTOY BUSCANDO`,
            "IDTRANSLATEFORM5":`PERFIL QUE ESTOY BUSCANDO`,
            "IDTRANSLATEFORM6":`POR FAVOR RELLENE EL FORMULARIO A CONTINUACIÓN.`,
            "IDTRANSLATEFORM7":`Proporciona información precisa y sólida.`,
            "IDTRANSLATEFORM8":`Mi país de residencia <i class="fa fa-star required "></i>`,
            "IDTRANSLATEFORM9":`Mi ciudad natal <i class="fa fa-star required"></i>`,
            "IDTRANSLATEFORM10":`Nombre o seudónimo <i class="fa fa-star required"></i>`,
            "IDTRANSLATEFORM11":`Mi edad <i class="fa fa-star required"></i>`,
            
            
            
            
            "IDTRANSLATEFORM10X":`Mi ciudad natal`,
            "IDTRANSLATEFORM11X":`Mi edad`,
            "IDTRANSLATEFORM8X": `Mi país de residencia`,
            "IDTRANSLATEFORM9X":`Mi edad`,
            "IDTRANSLATEFORM12":`Ingrese solo números .< i class="fa fa-star requerida "></i>`,
            "IDTRANSLATEFORM13":`Mi género <i class="fa fa-star required"></i>`,
            "IDTRANSLATEFORM14":`Hombre`,
            "IDTRANSLATEFORM15":`Mujer`,
            "IDTRANSLATEFORM16":`Transgénero`,
            "IDTRANSLATEFORM17":`Fluido( Género fluido )`,
            "IDTRANSLATEFORM18":`Intersexual`,
            "IDTRANSLATEFORM19":`Agénero`,
            "IDTRANSLATEFORM20":`Aromántico`,
            "IDTRANSLATEFORM21":`Asexual.el`,
            "IDTRANSLATEFORM22":`Bisexual.el`,
            "IDTRANSLATEFORM23":`Cisgénero`,
            "IDTRANSLATEFORM24":`Cisnormatividad`,
            "IDTRANSLATEFORM25":`Demiromántico`,
            "IDTRANSLATEFORM26":`Demisexual.la`,
            "IDTRANSLATEFORM27":`Heteromantividad`,
            "IDTRANSLATEFORM28":`Iel`,
            "IDTRANSLATEFORM29":`Malgénero`,
            "IDTRANSLATEFORM30":`No binario`,
            "IDTRANSLATEFORM31":`Pansexual.el`,
            "IDTRANSLATEFORM32":`Polyamorous.se`,
            "IDTRANSLATEFORM33":`Queer`,
            "IDTRANSLATEFORM34":`Transgénero`,
            "IDTRANSLATEFORM35":`Transición`,
            "IDTRANSLATEFORM36":`POR FAVOR RELLENE EL FORMULARIO A CONTINUACIÓN.`,
            "IDTRANSLATEFORM37":`Proporciona información precisa y sólida.`,
            "IDTRANSLATEFORM38":`Mi estado civil <i class="fa fa-star required"></i>`,
            "IDTRANSLATEFORM39":`Único`,
            "IDTRANSLATEFORM40":`En pareja`,
            "IDTRANSLATEFORM41":`Divorciado`,
            "IDTRANSLATEFORM42":` Viudo( a )`,
            "IDTRANSLATEFORM43":`Mi nacionalidad <i class="fa fa-star required "></i>`,
            "IDTRANSLATEFORM44":`Teléfono <i class="fa fa-star required"></i>`,
            "IDTRANSLATEFORM45":`Ingrese solo su número sin el prefijo del país<i class="fa fa-star required "></i>`,
            "IDTRANSLATEFORM46":`Mi trabajo u ocupación <i class="fa fa-star required "></i>`,
            "IDTRANSLATEFORM47":`Mi trabajo`,
            "IDTRANSLATEFORM48":`POR FAVOR RELLENE EL FORMULARIO A CONTINUACIÓN.`,
            "IDTRANSLATEFORM49":`Proporciona información precisa y sólida.`,
            "IDTRANSLATEFORM50":`Quiero una reunión <i class="fa fa-star required "></i>`,
            "IDTRANSLATEFORM51":`Friendly, una compañía para romper la soledad`,
            "IDTRANSLATEFORM52":`Durable`,
            "IDTRANSLATEFORM53":`Puede conducir al matrimonio`,
            "IDTRANSLATEFORM54":`Documento de identidad`,
            "IDTRANSLATEFORM55":`Foto 1 <i class="fa fa-star required"></i>`,
            "IDTRANSLATEFORM56":`Foto 2 <i class="fa fa-star required"></i>`,
            "IDTRANSLATEFORM57":`POR FAVOR RELLENE EL FORMULARIO A CONTINUACIÓN.`,
            "IDTRANSLATEFORM58":`Proporciona información precisa y sólida.`,
            "IDTRANSLATEFORM59":`Género de sonido <i class="fa fa-star required"></i>`,
            "IDTRANSLATEFORM60":`Hombre`,
            "IDTRANSLATEFORM61":`Mujer`,
            "IDTRANSLATEFORM62":`Transgénero`,
            "IDTRANSLATEFORM63":`Fluido( Género fluido )`,
            "IDTRANSLATEFORM64":`Intersexual`,
            "IDTRANSLATEFORM65":`Agénero`,
            "IDTRANSLATEFORM66":`Aromántico`,
            "IDTRANSLATEFORM67":`Asexual.el`,
            "IDTRANSLATEFORM68":`Bisexual.el`,
            
            
            
            "IDTRANSLATEFORM69":`Cisgénero`,
            "IDTRANSLATEFORM70":`Cisnormatividad`,
            "IDTRANSLATEFORM71":`Demirromántico`,
            "IDTRANSLATEFORM72":`Demisexual.la`,
            "IDTRANSLATEFORM73":`Heteromantividad`,
            "IDTRANSLATEFORM74":`Iel`,
            "IDTRANSLATEFORM75":`Malgénero`,
            "IDTRANSLATEFORM76":`No binario`,
            "IDTRANSLATEFORM77":`Pansexual.el`,
            "IDTRANSLATEFORM78":`Polyamorous.se`,
            "IDTRANSLATEFORM79":`Queer`,
            "IDTRANSLATEFORM80":`Transgénero`,
            "IDTRANSLATEFORM81":`Transición`,
            "IDTRANSLATEFORM82":`Su franja de edad <i class="fa fa-star required"></i>`,
            "IDTRANSLATEFORM83":`Su situación marital <i class="fa fa-star required "></i>`,
            "IDTRANSLATEFORM84":`Único`,
            "IDTRANSLATEFORM85":`En pareja`,
            "IDTRANSLATEFORM86":`Divorciado(a)`,
            "IDTRANSLATEFORM87":` Veuf( ve )`,
            "IDTRANSLATEFORM88":`Su país de residencia <i class="fa fa-star required " ></i>`,
            "IDTRANSLATEFORM89":`puede seleccionar varios países. <i class="fa fa-star required"></i>`,
            "IDTRANSLATEFORM90":`Su país`,
            "IDTRANSLATEFORM91": `Su país de residencia`,
            "IDTRANSLATEFORM92":`POR FAVOR RELLENE EL FORMULARIO A CONTINUACIÓN.`,
            "IDTRANSLATEFORM93":`Proporciona información precisa y sólida.`,
            "IDTRANSLATEFORM94":`Describe la apariencia física que deseas.`,
            "IDTRANSLATEFORM95":`Su ciudad de residencia <i class="fa fa-star required "></i>`,
            "IDTRANSLATEFORM96":`Su ciudad`,
            "IDTRANSLATEFORM97":`Su trabajo u ocupaciones <i class="fa fa-star required "></i>`,
            "IDTRANSLATEFORM98":`Su obra`,
            "IDTRANSLATEFORM99":`Detalles adicionales.`,
            "IDTRANSLATEFORM100":`Detalles adicionales`,
            "IDTRANSLATEFORM101":`Siguiente`,
            "IDTRANSLATEFORM102":`anterior`,
            "IDTRANSLATEFORM103":`Enviar`,
            
            
            
            "IDTRANSLATEFORM104":`<p><em> Los datos personales recogidos en este formulario por <strong style=" color : #000080;">BAKO FAMILIA & COMPANY</strong> serán tratados exclusivamente con la finalidad de la buena datación proceso de servicio
                      amantes que solicitas.
            Los datos personales recogidos no se comunican a nadie sin su consentimiento.
            En aplicación de las disposiciones de la Ley 2017-20 sobre el código digital en la República de Benin el
                      la protección de datos de carácter personal, el tratamiento de los datos recogidos ha sido
            declarado ante la APDP .</em>
            </p>
            <hr>
            <p class="mb-0"><em>De conformidad con la citada ley, puede ejercer sus derechos de acceso, oposición, rectificación y
                      eliminación de <strong style=" color : #000080;">BAKO FAMILIA & COMPANY</strong>.
            </em> </p> `,
            "IDTRANSLATEFORM105":`Tu imagen es demasiado pequeña . Seleccione una imagen de al menos 300x300 píxeles.`,
            "IDTRANSLATEFORM106":`Ocurrió un error al llamar a la API REST de países`,
            "IDTRANSLATEFORM107":`Solo pon el número sin el prefijo`,
            "IDTRANSLATEFORM108":`por favor seleccione el país`,
            "IDTRANSLATEFORM109":`Éxito`,
            "IDTRANSLATEFORM110":`Su formulario se enviará para su validación dentro de las 24 horas <i class="fa fa- heart "></i>.`,
            "IDTRANSLATEFORM111":`Lo siento`,
            "IDTRANSLATEFORM112":`No todos los campos están completos.`,
            "IDTRANSLATEUSERD1":`Mis datos:`,
            
            
            
            
            "IDTRANSLATEUSERD2":`Para contactarme`,
            "IDTRANSLATEUSERD3":`Mi perfil`,
            "IDTRANSLATEUSERD4":`Respuestas`,
            "IDTRANSLATEUSERD5":`Mi ciudad natal:`,
            "IDTRANSLATEUSERD6":`Mi nombre o apodo:`,
            "IDTRANSLATEUSERD7":`Mi rango de edad:`,
            "IDTRANSLATEUSERD8":`Mi género:`,
            "IDTRANSLATEUSERD9":`Mi estado civil:`,
            "IDTRANSLATEUSERD10":`Mi nacionalidad:`,
            "IDTRANSLATEUSERD11":`Mi trabajo u ocupación:`,
            "IDTRANSLATEUSERD12":`Quiero una reunión:`,
            "IDTRANSLATEUSERD13":`Mis preferencias físicas:`,
            "IDTRANSLATEUSERD14":`Detalles adicionales:`,
            "IDTRANSLATEUSERD15":`Perfil que estoy buscando`,
            "IDTRANSLATEUSERD16":`Respuestas`,
            "IDTRANSLATEUSERD17":`Su género:`,
            "IDTRANSLATEUSERD18":`Su rango de edad:`,
            "IDTRANSLATEUSERD19":`Su estado civil:`,
            "IDTRANSLATEUSERD20":`Su país de residencia:`,
            "IDTRANSLATEUSERD21":`Su ciudad de residencia:`,
            "IDTRANSLATEUSERD22":`Su trabajo u ocupación:`,
            "IDTRANSLATEUSERD23":`En línea el`,
            "IDTRANSLATEUSERD23VG":`<div class="status-indicator" style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; background-color: green;"></div> En línea`,
            
            
            
            
            "IDTRANSLATEUSERD24":`<i class="fas fa-database" style="font-size: 5vh !important; color: #FFB6C1;"></i> Sin datos.`,
            "IDTRANSLATEUSERD25":`Sin datos.`,
            "IDTRANSLATEUSERD26":`hay un ERROR.`,
            "IDTRANSLATEUSERD27":`Su cuenta está debitada`,
            "IDTRANSLATEUSERD28":`los datos no están actualizados.`,
            "IDTRANSLATEUSERD29":`No puedes contactar a los usuarios.
            Porque aún no tienes una cuenta validada.`,
            "IDTRANSLATEUSERD30":`¿ Quieres publicar tu anuncio?`,
            "IDTRANSLATEUSERD31":`No puedes contactar a los usuarios.
            Porque no tienes unidad.`,
            "IDTRANSLATEUSERD32":`¿ Quieres pagar unidades?`,
            "IDTRANSLATEUSERD33":`OK`,
            "IDTRANSLATEUSERD34":`¡Visita su perfil!`,
            "IDTRANSLATEUSERD35":`<i class="bi bi- eye " style=" color : white;"></i> Haga clic para mostrar.`,
            
            
          }
        },
        en: {
          translation: {
            "IDTRANSLATE1": "Home",
            "IDTRANSLATE2": "About",
            "IDTRANSLATE3": `How does it work?`,
            "IDTRANSLATE4": `Terms`,
            "IDTRANSLATE5":"General Conditions of Use",
            "IDTRANSLATE6":"Privacy Policy",
            "IDTRANSLATE7":"Contact",
            "IDTRANSLATE8":"Register",
            "IDTRANSLATE9":"Connect",
            "IDTRANSLATECONTACT1":"Contact",
            "IDTRANSLATECONTACT2":"Contact Us",
            "IDTRANSLATECONTACT3":"Address",
            "IDTRANSLATECONTACT4":'Phone',
            "IDTRANSLATECONTACT5":"Emails",
            "IDTRANSLATECONTACT6":"Social networks",
            "IDTRANSLATE1INF1":`Your email address is collected and processed by BAKO FAMILIA & COMPANY to keep you informed of new features of the illicolove site or updates.
            Pursuant to Law 2017-20 on the digital code in the Republic of Benin, on the protection of
                        personal data , you can unsubscribe or exercise your rights of access, opposition,
                        rectification and deletion by sending an email to info@illicolove.com`,
            "IDTRANSLATE10":"illicolove,",
            "IDTRANSLATE11":`your dating platform, to fight against celibacy and
                        loneliness.` ,
            "IDTRANSLATE12":`We view involuntary loneliness as a humanitarian issue and we
                        we are committed to offering a solution to people who suffer from it.`,
            "IDTRANSLATE13":`About`,
            "IDTRANSLATE14":`About Us`,
            "IDTRANSLATE15":`Your online dating platform illicolove.com is brought to you by
            BAKO FAMILIA Establishments & amp ; COMPANY, a Sole Proprietorship (IE) of
                        Beninese law registered in the Trade and Credit Register RCCM
            RB/COT/08/A4101; to the Unique Tax Identifier (IFU) 3200800938610.`,
            "IDTRANSLATE16":`Its activities include Wedding planning (accompaniment in the organization of
                        marriage ), Tourism-Leisure, the organization of fairs and exhibitions. It was created in
            May 2008 in Cotonou. `,
            "IDTRANSLATE17":`More details`,
            "IDTRANSLATE18":`Our goals`,
            "IDTRANSLATE19":`Item 16`,
            
            
            
            "IDTRANSLATE20":`Our target`,
            "IDTRANSLATE21": `The commissioning of this online dating platform responds to our initiatives to fight against celibacy and loneliness.
            It materializes our action in the line defined by the Universal Declaration of
            Human Rights in its article 16, which recalls the right to marriage for women
                        and for man, and the importance of the family which must be protected by society and
                        by the State.`,
            "IDTRANSLATE22":`Our values:`,
            "IDTRANSLATE23":`Reliability,`,
            "IDTRANSLATE24":`Courtesy and`,
            "IDTRANSLATE25":`Discretion.`,
            "IDTRANSLATE26":`From marriageable age, the man and the woman, without any restriction as to the
                       race , nationality or religion, have the right to marry and found a family.
            They have equal rights with regard to marriage, during marriage and during its
                       dissolution .`,
            "IDTRANSLATE27":`Marriage can only be concluded with the free and full consent of the future
                       husband.` ,
            "IDTRANSLATE28":`The family is the natural and fundamental unit of society and has the right to
                       protection of society and the state.
                       
            Loneliness, celibacy, social isolation, constitute a humanitarian imperative which
                       appeals to public authorities, associations and companies in the field.
            Chronic and involuntary loneliness is an individual drama experienced by those
                       who suffer from it, most of the time, in silence.
            Illicolove.com was born in this context, with the desire to offer differently and
                       simply , online dating services; with a proven hunt for profiles
                       fictitious .
            Welcome!`,
            "IDTRANSLATE29":`We only target individuals:`,
            "IDTRANSLATE30":`Young people aged 18 or over.`,
            "IDTRANSLATE31":`The involuntary old celibates, the desperate and disappointed.`,
            "IDTRANSLATE32":`The divorced.`,
            "IDTRANSLATE33":`The Widowed( ves ).`,
            "IDTRANSLATE34":`Our users`,
            "IDTRANSLATE35":`All our users`,
            "IDTRANSLATE36":`In Africa`,
            "IDTRANSLATE37":`In Europe`,
            "IDTRANSLATE38":`Other Countries of the World`,
            "IDTRANSLATE39":`Our team`,
            "IDTRANSLATE40":`Director`,
            "IDTRANSLATE41":`Proofreader, and Marketing Manager`,
            "IDTRANSLATE42": `Developer and SEO`,
            
            "IDTRANSLATEX1":`Steps of use`,
            "IDTRANSLATEX2":`This is how illicolove works.` ,
            "IDTRANSLATEX3":`Registration`,
            "IDTRANSLATEX4":`As soon as you register, illicolove offers you three (03) units worth 295 Francs
            CFA or 0.43 Euros.
            A unit worth 95 CFA Francs or 0.144 Euros.`,
            "IDTRANSLATEX5":`Connection`,
            "IDTRANSLATEX6":`Your connection to illicolove gives you access to all the features and
                       services reserved for registered users.` ,
            "IDTRANSLATEX7":`Post Announcement`,
            "IDTRANSLATEX8": `By clicking on the "Publish your ad" button , you can choose to publish either
            on the & quot;Africa&quot ; page, or on the & quot;Europe&quot ; or on the page & quot;Other countries of the
                       world&quot ; ; depending on where you live. Simply fill out the form
                       search that will be displayed.`,
            
            
            
            "toopenPUAID":`continued...`,
            "openPUA":`We invite you
                       to publish your advertisement on the page of
                         your geographical area of residence, however, you can consult and take
                         contact with any profile of a search ad outside your area
                         geographical area of residence.
            For example, if you live in France, you must publish your advertisement on the page
            "Europe" and can consult and contact advertisements in the pages
            “Africa”, “Europe” and “Other countries of the world”
            When you finish filling out and submitting your search form, your
                         ad will appear within 24 hours at most, if we deem your profile
                         reliable after proofreading and any verifications.
            Our proofreading and validation team may write to you privately in order to
                         reassure on the reliability of your profile. Details of your identity, a call
                         voice or video may be required. With this in mind, the validation and
                         the appearance of your advertisement on illicolove could exceed 24 hours. The speed
                         for the publication of your advertisement will depend on yourself. We discard
                         systematically any fanciful, unrealistic ad and especially fake profiles;
                         without notice.
            If you encounter any difficulty in enjoying the services of illicolove.com ,
                         please write to us at info@illicolove.com`,
            "IDTRANSLATEX9":`Validation of your user account`,
            "IDTRANSLATEX10":`Fill in the form and click " SEND" . We will verify and validate your
                        form with photo within 24 hours. You will receive a confirmation message. If
                        additional checks are necessary, we will notify you by e-mail.`,
            "IDTRANSLATEX11":`Consult an announcement`,
            "IDTRANSLATEX12": `The & quot;Check Ads &quot ; leads to three more buttons: & quot;Africa&quot ;
            ( ads from Africa), & quot;Europe&quot ; (ads from Europe) and & quot;Other countries of the world&quot ;
            ( announcements outside Africa and Europe).
            Meeting the man or the woman of your life on illicolove may cost you
                        only 95 CFA francs or 0.14 Euros.
            This is what it costs you for each unit taken from you, when you click on the
                        box "To contact me" of a profile that particularly catches your attention.`,
            "IDTRANSLATEX13":`Purchase of units`,
            "IDTRANSLATEX14":`You can recharge your account at your convenience, in order to continue your
                        dating searches among published ads.
            The personal debit-credit account you get as soon as you sign up
                        allows you to recharge it using the payment method of your choice. THE CURRENCY of invoicing on illicolove 
            is the CFA Franc ( XOF ). 1 € = 655.957 XOF.`,
            "IDTRANSLATEX15":`Frequently Asked Questions.`,
            "IDTRANSLATEX16":` Can I meet someone nice on your site?`,
            "IDTRANSLATEX17":` Yes, provided you complete the search form properly by providing
                        true information about you.`,
            
            
            
            "IDTRANSLATEX18":`Does your dating site pay?`,
            "IDTRANSLATEX19":` Yes, only to consult the contact address of a profile that has retained
                        particularly your interest.`,
            "IDTRANSLATEX20":`How much does it cost to consult the contact address
                        a profile that attracts me and interests me?`,
            "IDTRANSLATEX21":`95 FCFA or 0.14 Euros.`,
            "IDTRANSLATEX22":` Is your dating site free?`,
            "IDTRANSLATEX23":`Yes, the registration and publication of your love search ad is
                        free on illicolove .`,
            "IDTRANSLATEX24":` How to post a dating ad?`,
            "IDTRANSLATEX25":`After registering on illicolove , click on the button or tab "PUBLISH
            AN ANNOUNCEMENT ". Then on the page that will be displayed, choose the name of the
                        continent that corresponds to your continent of usual residence. Finally fill
                        correctly the search form that will appear then submit.`,
            "IDTRANSLATEX26":` Can I reside in Africa and contact a resident profile
                        out of Africa?`,
            "IDTRANSLATEX27":`Yes!`,
            "IDTRANSLATEX28":`Can I reside in Europe and contact a resident profile
                        outside Europe?`,
            "IDTRANSLATEX29":`Yes!`,
            "IDTRANSLATEX30":`Can I reside in Europe and publish my
                        search on the “Africa” and “Other countries of the
                        world ”?`,
            "IDTRANSLATEX31":`No! Publish your search ad only in the page corresponding to
                        your area of residence.`,
            "IDTRANSLATEX32":`Can I pay for units by mobile money?`,
            "IDTRANSLATEX33":`Yes!`,
            "IDTRANSLATEX34":` What is the subscription price on your site?`,
            "IDTRANSLATEX35":` There is no subscription on illicolove.` ,
            "IDTRANSLATEX36":` How can I top up my Credit-Debit account?`,
            "IDTRANSLATEX37":`We offer you a secure payment system by KKiaPay which is our
                        partner payment aggregator . At your convenience, recharge your account
                        by credit card or mobile money.
            Under your profile, click on the button “I RECHARGE MY ACCOUNT” and follow
                        the steps simply.`,
            "IDTRANSLATEX38":`Do I have to pay to publish my wanted ad?`,
            "IDTRANSLATEX39":`No! The publication of a search announcement is free.`,
            "IDTRANSLATEX40":`Do I have to pay to view ads?`,
            "IDTRANSLATEX41":`No! The consultation of the advertisements is free, it is obtaining the address of
                        contact contained in an advertisement which is paid for.`,
            "IDTRANSLATEX42":`How does the Credit-Debit system work?`,
            "IDTRANSLATEX43":` When you register, you automatically receive three (03) units free of charge
                        credit allowing you to consult three (03) contact addresses in the
                        advertisements of your choice. Each unit has a value of 95 FCFA or 0.14 Euros.
            When your units run out, you can buy more at your convenience and
                        your ability. The quantity of units you can buy ranges from one unit to the number
                        number of units you want.`,
            "IDTRANSLATEX44":` Do my units I buy have an expiration date?`,
            "IDTRANSLATEX45":`No! Your units are for unlimited duration.`,
            "IDTRANSLATEX46":`Do I need to subscribe to enjoy your
                        encounters ?`,
            
            
            
            "IDTRANSLATEX47":`On illicolove , there is no subscription to enjoy our services outside of
                        subscription to the newsletter which is optional.`,
            "IDTRANSLATEX48":`What is the privacy policy on
            illicolove.com ?`,
            "IDTRANSLATEX49":`We take the privacy of your information very seriously. Your
                        personal data is secure and is not shared with third parties without
                        your consent. You can consult our privacy policy for more
                        details` ,
            "IDTRANSLATEX50":`here`,
            "IDTRANSLATEX51":` Where can I find my account validation email?`,
            "IDTRANSLATEX52":`Your account validation email may be in your spam folder
                        or spam. Email provider security filters can sometimes
                        Direct validation emails to these folders for your protection. Please check your
                        spam or junk folder and make sure to mark the email as "not spam" or
            " not junk" if you find it there. If you still cannot find the e-mail address of
                        confirmation ,
                        please contact our helpdesk for further assistance.`,
            "IDTRANSLATETCU1":`General Terms of Use`,
            "IDTRANSLATETCU2":`Welcome to illicolove.com, an online dating platform
                        offered by BAKO FAMILIA & amp ; COMPANY. By using our site,
                        you agree to the terms and conditions described below.`,
            "IDTRANSLATETCU3":`ARTICLE 1: Object`,
            "IDTRANSLATETCU4":`These "General Conditions of Use" are intended to
                        purpose the legal framework for the use of the site
            illicolove.com and its services.`,
            
            
            
            "IDTRANSLATETCU5":`This contract is concluded between:`,
            "IDTRANSLATETCU6":`The BAKO FAMILIA Establishment & amp ; COMPANY owner of the site
                        internet , hereinafter referred to as "the Publisher", AND Any natural person wishing to access the site and its
                        services , hereinafter referred to as "the User ".
            Terms of Service must be accepted
                        by any User , and their access to the site is worth
                        acceptance of these conditions.
            In these General Conditions of Use, it is agreed that the
                        following expressions or words, whether used in the singular or plural,
                        will have the following meaning:`,
            "IDTRANSLATETCU7":`Research announcement: refers to a publication by a user or
                        visitor to the site, in text form via our form, accompanied or not
                        one or more photographs representing his face.`,
            "IDTRANSLATETCU8":`Romantic Dating Services : means the User's access to
                        all of the search advertisements published on the Website, among others, the
                        profiles , hypertext links, texts, images, videos, contacts or addresses by the
                        through the "click to show".`,
            "IDTRANSLATETCU9":`“Click to show”: “Click to show, refers to the functionality that allows
                        All user to display the e-mail address, telephone contact or any
                        another way to get in touch with another user who has previously
                        issued a search announcement and filled in the means of his/her choice of
                        contact . This functionality which makes it possible to obtain such vital information is
                        paying . Its cost is 95 CFA Francs or approximately 0.144 Euro per click.`,
            "IDTRANSLATETCU10":`ARTICLE 2: Legal Notice`,
            
            
            
                       
            "IDTRANSLATETCU11X":`The establishment BAKO FAMILIA & amp ; COMPANY is the Publisher of the
                       illicolove.com dating site .
            Located in Lot 191 parcel b', in Agbalilamè , it is a
                       sole proprietorship under Beninese law. It was created on the 29th
            May 2008, registered in the Trade and Credit Register
            RCCM furniture RB/COT/08/A4101; and has Tax ID
            Single (IFU) Number: 3200800938610.
            She is represented by Gildas Ghislain GANGBAZO.`,
            "IDTRANSLATETCU11":`ARTICLE 3: access to services`,
            "IDTRANSLATETCU12":`The User of the illicolove.com site has access to the following services:`,
            "IDTRANSLATETCU13":`Create a personal account`,
            "IDTRANSLATETCU14":`Free creation and publication of your search ad
            via our form to fill out,`,
            "IDTRANSLATETCU15":`Consulting search announcements published by
                      others users `,
            "IDTRANSLATETCU16":`The paid obtaining of the contacts of the profiles that retain
                      their interest, and present on search ads,
                      unlimited way and at their convenience (Click to show / Click
                      to display)`,
            "IDTRANSLATETCU17":`Possibility to contact the Publisher to request a
                      request for personalized services,`,
            "IDTRANSLATETCU18":`The Website also offers the User who
                      desires , the partial organization
                      or complete with a wedding ceremony.
            Any User with internet access can access
                      for free and from
                      anywhere on the site. The costs borne by
                      the User to access it
            ( internet connection , computer equipment, etc.) are not at
                      the Editor's responsibility.
            The services mentioned above are only accessible for
                      the User only if he/she is
                      member of the site (i.e. he/she is identified with
                      using their credentials
                      connection ):
            The site and its various services may be interrupted or
                      suspended by the Publisher,
                      in particular on the occasion of maintenance, without obligation to
                      notice or
                      justification .`,
            "IDTRANSLATETCU19":`ARTICLE 4: Responsibility of the User` ,
            "IDTRANSLATETCU20":`The User is responsible for the risks related to
                      the use of his identifier
                      login and password.
            
            User 's password must remain secret. In
                      word disclosure case
                      password , the Publisher declines all responsibility.
            The User assumes full responsibility for
                      his use of
                      information and content present on the illicolove.com website.
            Any use of the service by the User having directly
                      or indirectly for
                      consequence of the damage must be compensated
                      for the benefit of the site.
            The site allows users to post an announcement of
                      search on the site
                      by completing the “Publish an ad” form,`,
            
            
            
            
                    "IDTRANSLATETCU21":`The user agrees to provide information
                      reliable , offer
                      recent photographs devoid of obscenities, write in his
                      search criteria
                      remarks respectful of others and of the law and accepts that
                      are ad either
                      moderated or refused by the Publisher, without obligation to
                      justification after a refusal to
                      his part to provide him with additional information to
                      avoid fake profiles.
                     By publishing his advertisement on the site, the User yields to
                      the Publisher the right not
                      exclusive and free to represent, reproduce, adapt,
                      edit , broadcast and distribute
                      its announcement on social networks, or directly by a third party
                      authorized ; in the
                      respect for their anonymity or the mode of confidentiality chosen.
            The Publisher undertakes to preserve the anonymity of all.
                      user in case of
                      distribution of ads on social networks.`,
            "IDTRANSLATETCU22":`ARTICLE 5: Responsibility of the Publisher`,
            "IDTRANSLATETCU23":`Any malfunction of the server or the network cannot engage
                      responsibility of the Publisher.
            Similarly, the site cannot be held liable in the event of
                      force majeure or
                      unforeseeable and insurmountable act of a third party.
            The illicolove.com website undertakes to implement all
                      resources needed to
                      guarantee data security and confidentiality.
            However, it does not bring a
                      total security guarantee .
            The Publisher reserves the option of a non-guarantee of the
                      profile reliability , although
                      the search advertisements displayed on the site are deemed
                      reliable and verified
                      before validation of their publication in the back office by
                      the proofreading team and
                      Editor validation.` ,
            
            
            "IDTRANSLATETCU24":`ARTICLE 6: Intellectual Property`,
            "IDTRANSLATETCU25":`BAKO FAMILIA & amp ; COMPANY is the exclusive owner of all rights to
                      intellectual property relating to both the brand, or the
                      structure than content
                      of the Website www.illicolove.com
            The contents of the site www.illicolove.com are intended for a
                      use strictly
                      personal , private and non-collective, freely for content
                      free . It is the same
                      for RSS feeds and newsletters.
            Any use in a professional or commercial context or
                      all
                      marketing of this content to third parties is prohibited,
                      except with the express consent of
            BAKO FAMILY & amp ; COMPANY.`,
            "IDTRANSLATETCU26":`ARTICLE 7: Personal data.`,
            "IDTRANSLATETCU27":`Consult our Privacy Policy, data
                      and cookies.` ,
            "IDTRANSLATETCU28":`here`,
            "IDTRANSLATETCU29":`ARTICLE 8: Hypertext links`,
            "IDTRANSLATETCU30":`The domains to which the hypertext links present on the site lead
                      do not engage the responsibility of the Publisher BAKO FAMILIA & amp ;
            COMPANY, which has no
                      no control over these links.
            The Publisher has set up partnerships with suppliers
                      of services and can
                      provide the User with information concerning
                      other sites and/or
                      services , for example by mentioning website addresses,
                      and/or by the presence
                      hypertext links to these sites.
            These hypertext links that redirect to third-party sites
                      were not developed by
            The Publisher and do not belong to it. The Publisher does not assume
                      therefore , no
                      responsibility for these sites, their content, advertising, products
                      or services available
                      on or from these sites. Furthermore, the responsibility of
            The Editor cannot be
                      committed to information, opinions and recommendations
                      formulated by these
                      third .`,
            
            
            "IDTRANSLATETCU31":`The Publisher cannot be held responsible for any damage or
                      proven losses or
                      alleged , arising out of or in connection with the use, or with
                      the fact of having done
                      reliance on content, goods or services available
                      on these services
                      external partners or sources.
            The decision to activate these links is entirely yours.
                      responsibility for
                      the User .
            The Publisher is not responsible for the availability of these sites
                      and can't control
                      content or validate advertising, products and other
                      information disseminated on these
                      websites .
            It is possible for a third party to create a link to a page of the
                      illicolove.com website without
                      express permission of the publisher.`,
            "IDTRANSLATETCU32":` ARTICLE 9: Special Warning`,
            "IDTRANSLATETCU33":`In real life as in virtual life on the internet, you can come across the
                      path of honest people as well as people
                      malicious and scammers.
            It is up to us individually to adopt certain
                      safety attitudes in the
            real life and moreover in the virtual world on the internet.
            BAKO FAMILY & amp ; COMPANY invites you to:`,
            "IDTRANSLATETCU34":`Never send money to a . unknown met
                      on this site; and this under no pretext.`,
            "IDTRANSLATETCU35":`Never send intimate photographs to a contact
                      encountered on this site,`,
            
            
            
            "IDTRANSLATETCU36":`Be on your guard when someone claims to live in
                      the surrounding area, but works abroad.`,
            "IDTRANSLATETCU37": `Never give in under the pretext of an urgent situation where a loved one is
                      patient and your correspondent virtual.le asks you to
                      help him pay
                      various fees. In such a case, we invite you to
                      report the profile of these
                      scammers at the Publisher.`,
            "IDTRANSLATETCU38":`A budding romantic relationship on illicolove.com does not
                      could be for you
                      a source of trouble and financial burden. Done
                      therefore proof of a
                      great mistrust when a unknown.e declares his love for you
                      without having been able
                      YOU meet ; and even after a physical encounter, take
                      time _
                      necessary before incurring any substantial expenditure in
                      cash .`,
            "IDTRANSLATETCU39":`Always choose a public place for a first meeting.`,
            "IDTRANSLATETCU40":`Always report your positions to a loved one when you are
                      in the company of a stranger you just met
                      freshly .`,
            "IDTRANSLATETCU41":`Denounce and report to us, attempts to sell
                      products or services,
                      profiles that turn out to be fake despite our filtering after
                      your discussions in private,
                      threats and intimidation, slanderous remarks,
                      homophobic , abusive and
                      offensive messages , messages from minors, and requests for help
                      financial or
                      explicit photographs.` ,
            "IDTRANSLATETCU42":`Therefore, the User acknowledges and accepts without
                      reserve to be fully
                      responsible for any action taken as a result of the
                      reading an announcement
                      dating and in general to any information
                      present on the Site.
            The provision of these data cannot be assimilated,
                      any way, to
                      specific advice or decision support.
            The User is fully aware of the character
                      random encounters
                      in love both in real life and on the internet.`,
            "IDTRANSLATETCU43":` ARTICLE 10: Deletion of data after 1 year of inactivity.`,
            "IDTRANSLATETCU44":`For security reasons, if you have not
                      authenticated on the Site
                      for a period of one year, you will receive an e-mail
                      inviting you
                      connect as soon as possible, otherwise your profile
                      will be removed from
                      our databases.`,
            
            
            
            "IDTRANSLATETCU45":`ARTICLE 11: Deletion of the account on request.`,
            "IDTRANSLATETCU46":`The User has the possibility of deleting his Account at
                      any time, by
                      simple request to the Editor or by the menu of deletion of
            Account present
                      in the Account settings if applicable.`,
            "IDTRANSLATETCU47":`ARTICLE 12: Deletion of the account in the event of violation of the TOS`,
            "IDTRANSLATETCU48":`In case of violation of one or more provisions of the T&Cs
                      or everything
                      other document incorporated herein by reference, the Publisher
                      reserves the
                      right to terminate or restrict without warning
                      prior and to its
                      sole discretion, your use of and access to the Services, at your
                      account and to all
                      the Linked Sites.`,
            "IDTRANSLATETCU49":`ARTICLE 13: Indications in the event of a security breach detected by the Publisher.`,
            "IDTRANSLATETCU50":`We are committed to implementing all measures
                      techniques and
                      appropriate organizational measures to guarantee a level of
                      suitable security
                      with regard to the risks of accidental, unauthorized or
                      illegal , of
                      disclosure , alteration, loss or destruction of
                      data
                      personal information about you.`,
            "IDTRANSLATETCU51":`In the event that we take
                      knowledge of illegal access to your personal data
                      re
                      stored on our servers or those of our service providers, or of a
                      access no
                      authorized resulting in the realization of the risks
                      identified below
                      above , we are committed to:`,
            
            
            
            
            "IDTRANSLATETCU52":`Examine the causes of the incident and notify you
            ( public reporting );`,
            "IDTRANSLATETCU53":`Take the necessary measures within the limits of the
                      reasonable in order to lessen the negative effects and damages that may result
                      said incident.`,
            "IDTRANSLATETCU54":`ARTICLE 14: Limitation of liability`,
            "IDTRANSLATETCU55":`Under no circumstances the commitments defined in the point above
                      relating to notification in the event of a security breach cannot be
                      assimilated to any acknowledgment of fault or liability for
                      the occurrence of the incident in question.`,
            "IDTRANSLATETCU56":`ARTICLE 15: Duration of the contract`,
            "IDTRANSLATETCU57":`The duration of this contract is indefinite. The contract
                      produces its effects with regard to the User from the start of the use of the
                      service.` ,
            "IDTRANSLATETCU58":`ARTICLE 16: Applicable law and competent jurisdiction`,
            "IDTRANSLATETCU59":`The language of these T&Cs is French and will prevail over
                      all versions translated into another language.
            This contract depends on Beninese legislation, in particular
                      Law No. 2017-20 of April 20, 2018 on the Digital Code in the Republic of
            Benign. The choice of
                      applicable law does not affect your rights as
                      consumer in accordance with the applicable law of your place of residence.`,
            "IDTRANSLATETCU60":`If you are a consumer , you and we agree to abide by the
                      non-exclusive jurisdiction of Benin courts.
            In the event of a dispute not resolved amicably between
                      the User and the Publisher, the court
                      of Commerce of Cotonou will be competent to settle the
                      litigation.` ,
            "IDTRANSLATEPC1":`PRIVACY POLICY`,
            "IDTRANSLATEPC2":`Legal Notice`,
            
            
            
            "IDTRANSLATEPC3":`This legal notice and privacy policy provides and informs you of the
                      way in which BAKO FAMILIA & amp ; COMPANY uses and protects the information you give us
                      also transmit when you use our dating site accessible at
                      from the URL: www.illicolove.com.`,
            "IDTRANSLATEPC4":`Please note that our privacy policy is subject to change
                      and/or supplemented at any time, in particular with a view to complying with any legislative developments,
                      regulatory , jurisprudential or technological. In such a case, the date of its update will be
                      indicated in this policy. These modifications commit the user as soon as they are implemented.
                      line .
            We therefore invite you to regularly consult these terms and policy.
                      of confidentiality in order to be aware of any modifications.`,
            "IDTRANSLATEPC5":` Declaration to the Personal Data Protection Authority (APDP)`,
            "IDTRANSLATEPC6":`In accordance with Law No. 2017-20 of April 20, 2018 on the digital code in the Republic of
            Benin (Book 5 relating to the protection of personal data and life
                      private ) the website www.illicolove.com has been declared to the Authority of
            Protection of Personal Data (apdp.bj) under the number …………`,
            "IDTRANSLATEPC7":`In any case, BAKO FAMILIA & COMPANY does not collect personal information
                      relating to the user only for the needs of the proposed dating service
                      through its website. The user provides this information knowingly,
                      in particular when he proceeds to enter them himself.`,
            
            
            
            
            "IDTRANSLATEPC8":`In accordance with the provisions of Law 2017-20 on the digital code in
            Republic of Benin, any user has a right of access, rectification and
                      opposition to personal data concerning him, by making his written and signed request,
                      accompanied by a copy of an identity document with the signature of the holder of the document, in
                      specifying the address to which the response should be sent. No personal information of a
                      user of our website "www.illicolove.com" is not published, transferred or sold on
                      any medium or to third parties without their knowledge.`,
            "IDTRANSLATEPC9":`Data Privacy`,
            "IDTRANSLATEPC10":`Your personal data is confidential and will not be
                      communicated to third parties.
            The private nature of our dating service does not allow us to
                      communicate your personal data (names, contacts, addresses, etc. ) to an individual, regardless of
                      either his rank or his quality.`,
            "IDTRANSLATEPC11": `Access right`,
            "IDTRANSLATEPC12":`In application of the provisions of the law on the digital code in the Republic of Benin, any user
                      of our website www.illicolove.com has a right of access, rectification, modification and
                      deletion relating to data that concerns him individually. This right can be exercised by the
                      holder on request sent electronically to the following e-mail address: info@illicolove.com. THE
                      personal information collected is in no way entrusted to third parties.`,
            "IDTRANSLATEPC13":`Right of rectification`,
            
            
            
            
            
            "IDTRANSLATEPC14":`In accordance with the law on the digital code in the Republic of Benin, any user of
                      our website www.illicolove.com may request rectification, updating,
                      deletion , blocking or erasure of data concerning him, and which may
                      prove to be inaccurate, erroneous, incomplete, ambiguous or obsolete.`,
            "IDTRANSLATEPC15":`Retention period.`,
            "IDTRANSLATEPC16":`Your personal data is kept by BAKO FAMILIA & amp ; COMPANY only for
                      the time corresponding to your need for dating services. However, this
                      retention period does not exceed thirteen (12) months.`,
            "IDTRANSLATEPC17": `Complaint to the competent authority`,
            "IDTRANSLATEPC18":`If you consider that BAKO FAMILIA & COMPANY does not comply with its obligations with regard to
                      of your personal data collected during your visit to its website
            www.illicolove.com, you can address, as prescribed by legal procedure, a complaint or
                      a request to the Personal Data Protection Authority (APDP).`,
            "IDTRANSLATEPC19":`Intellectual Property`,
            "IDTRANSLATEPC20":`All content of this website, including but not limited to graphics, images,
                      texts , videos, animations, sounds, logos, gifs and icons as well as their formatting are the
                      exclusive property of BAKO FAMILIA & COMPANY with the exception of trademarks, logos or
                      content belonging to other partner companies or authors.
            Any reproduction, distribution, modification, adaptation, retransmission or publication, even
                      partial , of these different elements is strictly prohibited without the express written consent of BAKO
            FAMILY & COMPANY.`,
            "IDTRANSLATEPC21":`Terms of Service`,
            "IDTRANSLATEPC22":`The website www.illicolove.com is offered in French, with translations into
                      English and Spanish. For better comfort of use, we recommend that you
                      use compatible and modern browsers such as: Chrome, Safari, Firefox.`,
            "IDTRANSLATEPC23":`Information and suggestions`,
            
            
            
            
            
            
            "IDTRANSLATEPC24":`BAKO FAMILIA & COMPANY implements all the means in its possession, to ensure a
                      reliable dating service and a permanent update of its website
            www.illicolove.com. However, errors or omissions may occur. Consequently, any user can send us suggestions or information to: info@illicolove.com and
                      indicate any modifications to the site that he deems relevant.`,
            "IDTRANSLATEPC25":`Cookies.`,
            "IDTRANSLATEPC26":`For technical performance, statistics and display purposes, the website
            www.illicolove.com may use cookies. Cookies are small text files stored on
                      your terminal, and which do not allow the identification of the user, but which record
                      information relating to the navigation of a terminal on a website. Some parts of this
                      site cannot be functional without the acceptance of cookies. The data thus obtained
            are intended to facilitate subsequent navigation on this site. Cookies are also intended to
                      enable various audience and attendance metrics.`,
            "IDTRANSLATEPC27":` The refusal to install a cookie may result in the impossibility of accessing certain
                      features . However, any user of this website can configure their terminal to
                      decline the installation of cookies, as indicated below:`,
            "IDTRANSLATEPC28":`Safari users: Choose Safari &gt; Preferences,
                      click on Privacy, then select the option
                      relating to “Cookies and website data”. Always
                      Block : Safari does not allow any website, third-party, or
                      advertiser to store cookies and other data on
                      your Mac. This may prevent some websites from
                      work properly.`,
            
            
            
            
            "IDTRANSLATEPC29":`Safari users: Choose Safari &gt; Preferences,
                      click on Privacy, then select the option
                      relating to “Cookies and website data”. Always
                      Block : Safari does not allow any website, third-party, or
                      advertiser to store cookies and other data on
                      your Mac. This may prevent some websites from
                      work properly.`,
            "IDTRANSLATEPC30":`Google Chrome users: Menu &gt; Settings >
            Show advanced settings (located at the bottom of the page).
            Then click on the Content Settings button
                      then check the box Block cookies and personal data
                      third-party sites , finally click on OK to confirm your choice.`,
            "IDTRANSLATEPC31":`Internet Explorer Users: Internet Options Menu
            Confidentiality tab and on the Advanced button to make
                      pop up the Privacy Settings window
                      advanced . Then check the Override management box.
                      automatic cookies, then select Reject
                      in the Third-Party Cookies column.`,
            "IDTRANSLATEPC32":`Microsoft Edge users : tool/options tab
                      internet . Click on Privacy and choose Block
                      all cookies.`,
            
            
            
            "IDTRANSLATEPC33":`Following current practices, some cookies are
                      exempt from the prior collection of your consent
                      insofar as they are essential to
                      operation of this website. Their purpose is to
                      facilitate electronic communication. It's about
                      including session ID cookies,
                      authentication and personalization of your interface.
            These cookies are issued and managed by BAKO FAMILIA &
            COMPANY and are all subject to this policy.`,
            "IDTRANSLATEPC34":`Hypertext links`,
            "IDTRANSLATEPC35":`The "www.illicolove.com" website may offer links to other websites or other
                      resources available on the Internet. BAKO FAMILIA & COMPANY has no means
                      to control the sites in connection with its website. Moreover, he does not answer for the
                      availability of such sites and external sources, nor does it guarantee it. It cannot be taken for
                      responsible for any damage, of any nature whatsoever, resulting from the content of these sites
                      or external sources.`,
            
            
            
            "IDTRANSLATECONSULTE1":`Africa`,
            "IDTRANSLATECONSULTE2":`Europe`,
            "IDTRANSLATECONSULTE3":`Other countries in the world`,
            "IDTRANSLATEPROFIL1": "Valid account",
            "IDTRANSLATEPROFIL2": "Invalid account",
            "IDTRANSLATEPROFIL3":`Debit Account`,
            "IDTRANSLATEPROFIL4":`Debit Account`,
            "IDTRANSLATEPROFIL5":`My Plan`,
            "IDTRANSLATEPROFIL6":`My Plan`,
            "IDTRANSLATEPROFIL7":`My data`,
            "myNameIDX": `Delete your account`,
            "myBtn": `Recharge my account`,
            "IDTRANSLATEPROFIL9": `Go to home`,
            "IDTRANSLATEPROFIL10":`Logout`,
            "CONSULTEZLESANNONCES": `CHECK THE ADS`,
            "IDTRANSLATEPROFIL11":`EDIT YOUR ADVERT`,
            "IDTRANSLATEPROFIL12":`POST AN AD`,
            "IDTRANSLATEPROFIL13":`Welcome to you!`,
            "exampleModalLongTitle":`One unit is worth 95 FCFA, or 0.144 Euros.`,
            "errorSms":`You must enter a number.`,
            "SmspayId":` Enter the unit number here.`,
            "IDTRANSLATEPROFIL14":`Return`,
            "payYourUnitybtn":`Validate`,
            " exampleModalLongTitleX ":`Secure your account.`,
            "IDTRANSLATEPROFIL15":`Please provide an answer you will never forget.
            You will be prompted for this response when retrieving
                      your account. Without this response, your account will remain inaccessible.`,
            "IDTRANSLATEPROFIL16":`Select your question`,
            "IDTRANSLATEPROFIL17":`What makes a person special?`,
            "IDTRANSLATEPROFIL18":`What makes you feel most loved?`,
            "IDTRANSLATEPROFIL19":`How do you imagine your daily life?`,
            "IDTRANSLATEPROFIL20":`What is most important to you?`,
            "IDTRANSLATEPROFIL21":`What is the name of the person who inspires you?`,
            "IDTRANSLATEPROFIL22":`What is your favorite country?`,
            "IDTRANSLATEPROFIL23":`Who is your favorite player?`,
            "IDTRANSLATEPROFIL24":`Who is your favorite artist?`,
            "IDTRANSLATEPROFIL25":`What is your answer ? Only one word. No space.`,
            "IDTRANSLATEPROFIL26":`Validate`,
            "IDTRANSLATEPROFIL27":`security response`,
            "payYourUnity": `Enter the unit `,
            congratulationsTitle : "Congratulations!",
            accountSecureMessage : "Your account is secure. Thank you!",
            accountSecureMessageX : "Do not put a space. Thanks!",
            
            "IDTRANSLATEPROFIL28":`Your debit account is empty. Please pay units for
                      access the contacts of the ads that you will like.`,
            "IDTRANSLATEPROFIL29":`You cannot pay for units at this time.
            Because you are still on your Debit account. Thanks.`,
            "IDTRANSLATEPROFIL30W":`Are you sure?`,
            "IDTRANSLATEPROFIL30":`You can't go back!`,
            "IDTRANSLATEPROFIL31":`Yes, delete it!`,
            "IDTRANSLATEPROFIL32":`Are you sure?`,
            "IDTRANSLATEPROFIL33":`After logging out, you have the option to log in again.`,
            "IDTRANSLATEPROFIL34":`Yes, disconnected!`,
            "IDTRANSLATEPROFIL35":`Disconnected`,
            "IDTRANSLATEPROFIL36":`You have been disconnected.`,
            "IDTRANSLATEPROFIL37":`Want to visit our homepage?`,
            "IDTRANSLATEPROFIL38":`Deleted!`,
            "IDTRANSLATEPROFIL39":`Your account has been successfully deleted!`,
            "IDTRANSLATEPROFIL40":`Deleted!`,
            "IDTRANSLATEPROFIL41":`Error deleting user! `,
            "IDTRANSLATEPROFIL42":`there is an ERROR`,
            "IDTRANSLATEPROFIL43":`The field is not correctly filled!`,
            "IDTRANSLATEPROFIL44":`Something went wrong!`,
            "IDTRANSLATEPROFIL45":`data is not updated!`,
            "IDTRANSLATEPROFIL46":`Hi, We inform you that you no longer have a unit on
                      your account. Please recharge it or go
                      on your profile. Thank you!`,
            "IDTRANSLATEPROFIL47":`Are you sure?`,
            "IDTRANSLATEPROFIL48":`We see that you already have a post
                      in progress. By proceeding with this action, your old
                      announcement will be modified and deactivated. Your new ad
                      will be submitted to the illicolove administrators for validation,
                       this process will take up to 24 hours. We thank you
                       for your understanding.`,
            
            
            
            "IDTRANSLATEPROFIL49":`Return`,
            "IDTRANSLATEPROFIL50":`Yes, Changed`,
            "IDTRANSLATELOGIN1":`Log in.`,
            "IDTRANSLATELOGIN2":`Email`,
            "IDTRANSLATELOGIN3":`Your email address`,
            "IDTRANSLATELOGIN4":`Password`,
            "IDTRANSLATELOGIN5":`Your password`,
            "IDTRANSLATELOGIN6":`Remember me`,
            "IDTRANSLATELOGIN7": `Forgot password`,
            "IDTRANSLATELOGIN8":`I don't have an account.`,
            "IDTRANSLATELOGIN9":`Register for free`,
            "IDTRANSLATELOGIN10":`Login`,
            "IDTRANSLATELOGIN11":`Success`,
            "IDTRANSLATELOGIN12":`You are successfully logged in!`,
            "IDTRANSLATELOGIN13":`Sorry`,
            "IDTRANSLATELOGIN14":`The password is incorrect!`,
            "IDTRANSLATELOGIN15":`Sorry`,
            "IDTRANSLATELOGIN16":`User does not exist with given email!`,
            "IDTRANSLATESIGNUP1":`Sign Up`,
            "IDTRANSLATESIGNUP2":`Pseudonym`,
            "IDTRANSLATESIGNUP3":`Pseudonym`,
            "IDTRANSLATESIGNUP4":`Name and First Names`,
            "IDTRANSLATESIGNUP5":`Name and First name`,
            "IDTRANSLATESIGNUP6":`Email`,
            "IDTRANSLATESIGNUP7":`Your email address`,
            "IDTRANSLATESIGNUP8":`Password`,
            "IDTRANSLATESIGNUP9":`Your password`,
            "IDTRANSLATESIGNUP10":`I have read and accept the terms and conditions`,
            "IDTRANSLATESIGNUP11":`Read and accept our terms and conditions`,
            "IDTRANSLATESIGNUP12":`I already have an account.`,
            "IDTRANSLATESIGNUP13":`Sign in`,
            "IDTRANSLATESIGNUP14":`Sorry`,
            
            
            
            "IDTRANSLATESIGNUP15":`You already have an account with this email address!`,
            "IDTRANSLATESIGNUP16":`success`,
            "IDTRANSLATESIGNUP17":`You are successfully registered!`,
            "IDTRANSLATESIGNUP18":`Error sending email address to Firebase` ,
            "IDTRANSLATESIGNUP19":`Do not put a space. Thank you!`,
            "IDTRANSLATEFORGET1":`Send the email address used during registration.`,
            "IDTRANSLATEFORGET2":`Email`,
            "IDTRANSLATEFORGET3":`your-email@gmail.com`,
            "IDTRANSLATEFORGET4":`Send`,
            "IDTRANSLATEFORGET5":`Validate`,
           
            "IDTRANSLATEFORGET7":`Enter your new password!`,
            "IDTRANSLATEFORGET8":`Enter your new password!`,
            "IDTRANSLATEFORGET9":`Great...`,
            "IDTRANSLATEFORGET10":`Password updated successfully!`,
            "IDTRANSLATEFORGET11":`Log in`,
            "IDTRANSLATEFORGET12":`OK`,
            "IDTRANSLATEFORGET13":`Error updating email.`,
            "IDTRANSLATEFORGET14":`This is not the correct answer` ,
            "IDTRANSLATEFORGET15":`User does not exist.`,
            "IDTRANSLATEFORM1":`MY PROFILE`,
            "IDTRANSLATEFORM2":`MY PROFILE`,
            "IDTRANSLATEFORM3":`MY PROFILE`,
            "IDTRANSLATEFORM4":`PROFILE I'M LOOKING FOR`,
            "IDTRANSLATEFORM5":`PROFILE I'M LOOKING FOR`,
            "IDTRANSLATEFORM6":`PLEASE FILL IN THE FORM BELOW.`,
            "IDTRANSLATEFORM7":`Provide accurate and sound information.`,
            "IDTRANSLATEFORM8":`My country of residence <i class="fa fa-star required "></i>`,
            "IDTRANSLATEFORM9":`My Home City <i class="fa fa-star required "></i>`,
            "IDTRANSLATEFORM10":`Name or Pseudonym <i class="fa fa-star required "></i>`,
            "IDTRANSLATEFORM11":`My age <i class="fa fa-star required "></i>`,
            
            
            
            
            "IDTRANSLATEFORM10X":`My Home City`,
            "IDTRANSLATEFORM11X":`My age`,
            "IDTRANSLATEFORM8X": `My country of residence`,
            "IDTRANSLATEFORM9X":`My age`,
            "IDTRANSLATEFORM12":`Please enter numbers only .< i class="fa fa-star required "></i>`,
            "IDTRANSLATEFORM13":`My Genre <i class="fa fa-star required "></i>`,
            "IDTRANSLATEFORM14":`Man`,
            "IDTRANSLATEFORM15":`Female`,
            "IDTRANSLATEFORM16":`Transgender`,
            "IDTRANSLATEFORM17":`Fluid( Genderfluid )`,
            "IDTRANSLATEFORM18":`Intersex`,
            "IDTRANSLATEFORM19":`Agender`,
            "IDTRANSLATEFORM20":`Aromantic`,
            "IDTRANSLATEFORM21":`Asexual.the`,
            "IDTRANSLATEFORM22":`Bisexual.the`,
            "IDTRANSLATEFORM23":`Cisgender`,
            "IDTRANSLATEFORM24":`Cisnormativity`,
            "IDTRANSLATEFORM25":`Demiromantic`,
            "IDTRANSLATEFORM26":`Demisexual.the`,
            "IDTRANSLATEFORM27":`Heteromantivity`,
            "IDTRANSLATEFORM28":`Iel`,
            "IDTRANSLATEFORM29":`Misgender`,
            "IDTRANSLATEFORM30":`Non-binary`,
            "IDTRANSLATEFORM31":`Pansexual.the`,
            "IDTRANSLATEFORM32":`Polyamorous.se`,
            "IDTRANSLATEFORM33":`Queer`,
            "IDTRANSLATEFORM34":`Transgender`,
            "IDTRANSLATEFORM35":`Transition`,
            "IDTRANSLATEFORM36":`PLEASE FILL IN THE FORM BELOW.`,
            "IDTRANSLATEFORM37":`Provide accurate and sound information.`,
            "IDTRANSLATEFORM38":`My marital status <i class="fa fa-star required "></i>`,
            "IDTRANSLATEFORM39":`Single`,
            "IDTRANSLATEFORM40":`As a couple`,
            "IDTRANSLATEFORM41":`Divorced`,
            "IDTRANSLATEFORM42":` Widowed( ve )`,
            "IDTRANSLATEFORM43":`My nationality <i class="fa fa-star required "></i>`,
            "IDTRANSLATEFORM44":`Phone <i class="fa fa-star required "></i>`,
            "IDTRANSLATEFORM45":`Enter only your number without the country prefix<i class="fa fa-star required "></i>`,
            "IDTRANSLATEFORM46":`My job or occupation <i class="fa fa-star required "></i>`,
            "IDTRANSLATEFORM47":`My job`,
            "IDTRANSLATEFORM48":`PLEASE FILL IN THE FORM BELOW.`,
            "IDTRANSLATEFORM49":`Provide accurate and sound information.`,
            "IDTRANSLATEFORM50":`I want a meeting <i class="fa fa-star required "></i>`,
            "IDTRANSLATEFORM51":`Friendly, a company to break loneliness`,
            "IDTRANSLATEFORM52":`Durable`,
            "IDTRANSLATEFORM53":`May lead to marriage`,
            "IDTRANSLATEFORM54":`ID`,
            "IDTRANSLATEFORM55":`Photo 1 <i class="fa fa-star required "></i>`,
            "IDTRANSLATEFORM56":`Photo 2 <i class="fa fa-star required "></i>`,
            "IDTRANSLATEFORM57":`PLEASE FILL IN THE FORM BELOW.`,
            "IDTRANSLATEFORM58":`Provide accurate and sound information.`,
            "IDTRANSLATEFORM59":`Sound Genre <i class="fa fa-star required "></i>`,
            "IDTRANSLATEFORM60":`Man`,
            "IDTRANSLATEFORM61":`Female`,
            "IDTRANSLATEFORM62":`Transgender`,
            "IDTRANSLATEFORM63":`Fluid( Genderfluid )`,
            "IDTRANSLATEFORM64":`Intersex`,
            "IDTRANSLATEFORM65":`Agender`,
            "IDTRANSLATEFORM66":`Aromantic`,
            "IDTRANSLATEFORM67":`Asexual.the`,
            "IDTRANSLATEFORM68":`Bisexual.the`,
            
            
            
            "IDTRANSLATEFORM69":`Cisgender`,
            "IDTRANSLATEFORM70":`Cisnormativity`,
            "IDTRANSLATEFORM71":`Demiromantic`,
            "IDTRANSLATEFORM72":`Demisexual.the`,
            "IDTRANSLATEFORM73":`Heteromantivity`,
            "IDTRANSLATEFORM74":`Iel`,
            "IDTRANSLATEFORM75":`Misgender`,
            "IDTRANSLATEFORM76":`Non-binary`,
            "IDTRANSLATEFORM77":`Pansexual.the`,
            "IDTRANSLATEFORM78":`Polyamory.se`,
            "IDTRANSLATEFORM79":`Queer`,
            "IDTRANSLATEFORM80":`Transgender`,
            "IDTRANSLATEFORM81":`Transition`,
            "IDTRANSLATEFORM82":`His age slice <i class="fa fa-star required "></i>`,
            "IDTRANSLATEFORM83":`Your marital situation <i class="fa fa-star required "></i>`,
            "IDTRANSLATEFORM84":`Single`,
            "IDTRANSLATEFORM85":`In a couple`,
            "IDTRANSLATEFORM86":`Divorced(ed)`,
            "IDTRANSLATEFORM87":` Veuf( ve )`,
            "IDTRANSLATEFORM88":`His country of residence <i class="fa fa-star required " ></i>`,
            "IDTRANSLATEFORM89":`you can select multiple countries. <i class="fa fa-star required "></i>`,
            "IDTRANSLATEFORM90":`His country`,
            "IDTRANSLATEFORM91": `His country of residence`,
            "IDTRANSLATEFORM92":`PLEASE FILL IN THE FORM BELOW.`,
            "IDTRANSLATEFORM93":`Provide accurate and sound information.`,
            "IDTRANSLATEFORM94":`Describe the physical appearance you desire.`,
            "IDTRANSLATEFORM95":`Her city of residence <i class="fa fa-star required "></i>`,
            "IDTRANSLATEFORM96":`His city`,
            "IDTRANSLATEFORM97":`His work or occupations <i class="fa fa-star required "></i>`,
            "IDTRANSLATEFORM98":`His work`,
            "IDTRANSLATEFORM99":`Additional details.`,
            "IDTRANSLATEFORM100":`Additional details`,
            "IDTRANSLATEFORM101":`Next`,
            "IDTRANSLATEFORM102":`previous`,
            "IDTRANSLATEFORM103":`Send`,
            
            
            
            "IDTRANSLATEFORM104":`<p >< em > The personal data collected in this form by < strong style=" color : #000080;">BAKO FAMILIA & COMPANY</ strong > will be processed exclusively for the purposes of the good dating service process
                      lovers you solicit.
            The personal data collected is not communicated to anyone without your consent.
            In application of the provisions of Law 2017-20 on the digital code in the Republic of Benin on
                      the protection of personal data, the processing of the data collected has been
            declared before the APDP .< / em >
            </p>
            < hr >
            <p class="mb-0">< em >In accordance with the aforementioned law, you can exercise your rights of access, opposition, rectification and
                      removal from < strong style=" color : #000080;">BAKO FAMILIA & COMPANY</ strong >.
            </em> </p> `,
            "IDTRANSLATEFORM105":`Your image is too small . Please select an image of at least 300x300 pixels.`,
            "IDTRANSLATEFORM106":`An error occurred while calling the Countries REST API`,
            "IDTRANSLATEFORM107":`Just put the number without the prefix`,
            "IDTRANSLATEFORM108":`please select the country`,
            "IDTRANSLATEFORM109":`Success`,
            "IDTRANSLATEFORM110":`Your form will be submitted for validation within 24 hours <i class="fa fa- heart "></i>.`,
            "IDTRANSLATEFORM111":`Sorry`,
            "IDTRANSLATEFORM112":`Not all of your fields are filled in.`,
            "IDTRANSLATEUSERD1":`My details:`,
            
            
            
            
            "IDTRANSLATEUSERD2":`To contact me`,
            "IDTRANSLATEUSERD3":`My Profile`,
            "IDTRANSLATEUSERD4":`Answers`,
            "IDTRANSLATEUSERD5":`My Home City:`,
            "IDTRANSLATEUSERD6":`My name or nickname:`,
            "IDTRANSLATEUSERD7":`My age range:`,
            "IDTRANSLATEUSERD8":`My gender:`,
            "IDTRANSLATEUSERD9":`My marital status:`,
            "IDTRANSLATEUSERD10":`My nationality:`,
            "IDTRANSLATEUSERD11":`My job or occupation:`,
            "IDTRANSLATEUSERD12":`I want a meeting:`,
            "IDTRANSLATEUSERD13":`My physical preferences:`,
            "IDTRANSLATEUSERD14":`Additional details:`,
            "IDTRANSLATEUSERD15":`Profile I'm looking for`,
            "IDTRANSLATEUSERD16":`Answers`,
            "IDTRANSLATEUSERD17":`Its gender:`,
            "IDTRANSLATEUSERD18":`His age range:`,
            "IDTRANSLATEUSERD19":`His marital status:`,
            "IDTRANSLATEUSERD20":`His country of residence:`,
            "IDTRANSLATEUSERD21":`Her city of residence:`,
            "IDTRANSLATEUSERD22":`His job or occupation:`,
            "IDTRANSLATEUSERD23":`Online on`,
            "IDTRANSLATEUSERD23VG":`<div class="status-indicator" style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; background-color: green;"></div> Online`,
            
            
            
            
            "IDTRANSLATEUSERD24":`<i class="fas fa-database" style="font-size: 5vh !important; color: #FFB6C1;"></i> No data.`,
            "IDTRANSLATEUSERD25":`No data.`,
            "IDTRANSLATEUSERD26":`there is an ERROR.`,
            "IDTRANSLATEUSERD27":`Your account is debited`,
            "IDTRANSLATEUSERD28":`data is not updated.`,
            "IDTRANSLATEUSERD29":`You cannot contact users.
            Because you do not yet have a validated account.`,
            "IDTRANSLATEUSERD30":` Do you want to publish your ad?`,
            "IDTRANSLATEUSERD31":`You cannot contact users.
            Because you do not have a unit.`,
            "IDTRANSLATEUSERD32":` Do you want to pay units?`,
            "IDTRANSLATEUSERD33":`OK`,
            "IDTRANSLATEUSERD34":`Visit his profile!`,
            "IDTRANSLATEUSERD35":`<i class="bi bi- eye " style=" color : white;"></i> Click to display.`,
            
            
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
      $("#IDTRANSLATE7").text(i18next.t("IDTRANSLATE7"));
      $("#IDTRANSLATE8").text(i18next.t("IDTRANSLATE8"));
      $("#IDTRANSLATE9").text(i18next.t("IDTRANSLATE9"));
      $("#IDTRANSLATE10").text(i18next.t("IDTRANSLATE10"));
      $("#IDTRANSLATE11").text(i18next.t("IDTRANSLATE11"));
      $("#IDTRANSLATE12").text(i18next.t("IDTRANSLATE12"));
      $("#IDTRANSLATE13").text(i18next.t("IDTRANSLATE13"));
      $("#IDTRANSLATE14").text(i18next.t("IDTRANSLATE14"));
      $("#IDTRANSLATE15").text(i18next.t("IDTRANSLATE15"));
      $("#IDTRANSLATE16").text(i18next.t("IDTRANSLATE16"));
      $("#IDTRANSLATE17").text(i18next.t("IDTRANSLATE17"));
      $("#IDTRANSLATE18").text(i18next.t("IDTRANSLATE18"));
      $("#IDTRANSLATE19").text(i18next.t("IDTRANSLATE19"));
      $("#IDTRANSLATE20").text(i18next.t("IDTRANSLATE20"));
      $("#IDTRANSLATE21").text(i18next.t("IDTRANSLATE21"));
      $("#IDTRANSLATE22").text(i18next.t("IDTRANSLATE22"));
      $("#IDTRANSLATE23").text(i18next.t("IDTRANSLATE23"));
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
      $("#IDTRANSLATETCU27").text(i18next.t("IDTRANSLATETCU27"));
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
      $("#IDTRANSLATEPROFIL42").text(i18next.t("IDTRANSLATEPROFIL42"));
      $("#IDTRANSLATEPROFIL43").text(i18next.t("IDTRANSLATEPROFIL43"));
      $("#IDTRANSLATEPROFIL44").text(i18next.t("IDTRANSLATEPROFIL44"));
      $("#IDTRANSLATEPROFIL45").text(i18next.t("IDTRANSLATEPROFIL45"));
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
      $("#IDTRANSLATEFORM2").text(i18next.t("IDTRANSLATEFORM2"));
      $("#IDTRANSLATEFORM3").text(i18next.t("IDTRANSLATEFORM3"));
      $("#IDTRANSLATEFORM4").text(i18next.t("IDTRANSLATEFORM4"));
      $("#IDTRANSLATEFORM5").text(i18next.t("IDTRANSLATEFORM5"));
      $("#IDTRANSLATEFORM6").text(i18next.t("IDTRANSLATEFORM6"));
      $("#IDTRANSLATEFORM7").text(i18next.t("IDTRANSLATEFORM7"));
      $("#IDTRANSLATEFORM8").html(i18next.t("IDTRANSLATEFORM8")); 
      $("#IDTRANSLATEFORM9").html(i18next.t("IDTRANSLATEFORM9"));
      $("#myprofileidMaVille").attr("placeholder", i18next.t("IDTRANSLATEFORM9X"));
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
      $("#IDTRANSLATEUSERD1").text(i18next.t("IDTRANSLATEUSERD1"));
      $("#IDTRANSLATEUSERD2").text(i18next.t("IDTRANSLATEUSERD2"));
      $("#IDTRANSLATEUSERD3").text(i18next.t("IDTRANSLATEUSERD3"));
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
      $("#IDTRANSLATEUSERD15").text(i18next.t("IDTRANSLATEUSERD15"));
      $("#IDTRANSLATEUSERD16").text(i18next.t("IDTRANSLATEUSERD16"));
      $("#IDTRANSLATEUSERD17").text(i18next.t("IDTRANSLATEUSERD17"));
      $("#IDTRANSLATEUSERD18").text(i18next.t("IDTRANSLATEUSERD18"));
      $("#IDTRANSLATEUSERD19").text(i18next.t("IDTRANSLATEUSERD19"));
      $("#IDTRANSLATEUSERD20").text(i18next.t("IDTRANSLATEUSERD20"));
      $("#IDTRANSLATEUSERD21").text(i18next.t("IDTRANSLATEUSERD21"));
      $("#IDTRANSLATEUSERD22").text(i18next.t("IDTRANSLATEUSERD22")); 
      $("#IDTRANSLATEUSERD23").text(i18next.t("IDTRANSLATEUSERD23"));
      $("#IDTRANSLATEUSERD23VG").html(i18next.t("IDTRANSLATEUSERD23VG"));
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
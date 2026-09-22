/**
 * ============================================================
 *  CONFIGURATION — Célébration du Dharma 2026
 * ============================================================
 *
 *  Ce fichier centralise TOUTES les données de l'événement.
 *  Les scripts de lettres (.docx) importent ce fichier.
 *
 *  ➤  Pour modifier un nom, un horaire, un lien :
 *     éditez directement ci-dessous.
 *
 *  ➤  Pour supprimer une séance :
 *     supprimez la ligne correspondante dans le tableau.
 *
 *  ➤  Pour ajouter une séance :
 *     ajoutez un objet { heure: '…', titre: '…' } au jour voulu.
 *
 * ============================================================
 */

const CONFIG = {

  // ──────────────────────────────────────────────
  //  ÉVÉNEMENT
  // ──────────────────────────────────────────────
  event: {
    nom:       'Célébration du Dharma 2026',
    sousTitre: 'Changer son esprit, changer sa vie',
    nomEN:     'Dharma Celebration 2026',
    sousTitreEN: 'Change Your Mind, Change Your Life',
    lieu:      'Centre de Méditation Kadampa France',
    adresse:   'Château de Segrais, 72220 Saint-Mars-d\'Outillé',
    dates:     '27–30 novembre 2026',
    datesEN:   '27–30 November 2026',
  },

  // ──────────────────────────────────────────────
  //  ENSEIGNANT
  // ──────────────────────────────────────────────
  enseignant: {
    nom:   'Guèn Kelsang Eupamé',
    titre: 'Directeur spirituel national de la tradition Kadampa en France',
  },

  // ──────────────────────────────────────────────
  //  EMPLOI DU TEMPS
  //  ➤ Supprimer / ajouter / modifier librement
  // ──────────────────────────────────────────────
  programme: [
    {
      jour:   'Vendredi 27 novembre',
      jourEN: 'Friday 27 November',
      seances: [
        { heure: 'À partir de 13h30', titre: 'Ouverture du bureau des inscriptions',         titreEN: 'Registration desk opens' },
        { heure: '18h00–19h00',       titre: 'Dîner',                                        titreEN: 'Dinner' },
        { heure: '20h00–21h30',       titre: 'Introduction avec Guèn Kelsang Eupamé',        titreEN: 'Introduction with Gen Kelsang Eupamé' },
      ],
    },
    {
      jour:   'Samedi 28 novembre',
      jourEN: 'Saturday 28 November',
      seances: [
        { heure: '09h00–09h50', titre: 'Méditation',                                              titreEN: 'Meditation' },
        { heure: '11h00–13h00', titre: 'Transmission des bénédictions de Tara Verte',              titreEN: 'Green Tara Blessing Empowerment' },
        { heure: '13h15–14h15', titre: 'Déjeuner',                                                titreEN: 'Lunch' },
        { heure: '16h30–18h00', titre: 'Enseignement',                                            titreEN: 'Teaching' },
        { heure: '18h15–19h15', titre: 'Dîner',                                                   titreEN: 'Dinner' },
        { heure: '20h15–21h15', titre: 'Joyau qui exauce les souhaits avec offrandes de nourriture', titreEN: 'Wishfulfilling Jewel with Tsog Offering' },
      ],
    },
    {
      jour:   'Dimanche 29 novembre',
      jourEN: 'Sunday 29 November',
      seances: [
        { heure: '09h00–10h00', titre: 'Méditation',                                              titreEN: 'Meditation' },
        { heure: '11h00–12h30', titre: 'Enseignement',                                            titreEN: 'Teaching' },
        { heure: '12h45–13h45', titre: 'Déjeuner',                                                titreEN: 'Lunch' },
        { heure: '16h30–18h00', titre: 'Enseignement',                                            titreEN: 'Teaching' },
        { heure: '18h15–19h15', titre: 'Dîner',                                                   titreEN: 'Dinner' },
        { heure: '20h15–21h15', titre: 'Joyau qui exauce les souhaits avec offrandes de nourriture', titreEN: 'Wishfulfilling Jewel with Tsog Offering' },
      ],
    },
    {
      jour:   'Lundi 30 novembre',
      jourEN: 'Monday 30 November',
      seances: [
        { heure: '09h00–10h00', titre: 'Méditation',               titreEN: 'Meditation' },
        { heure: '11h00–12h30', titre: 'Enseignement',             titreEN: 'Teaching' },
        { heure: '12h45–13h45', titre: 'Déjeuner',                 titreEN: 'Lunch' },
        { heure: '14h00–17h00', titre: 'Entraide – Démontage',     titreEN: 'Helping out – Dismantling' },
      ],
    },
  ],

  // ──────────────────────────────────────────────
  //  DATES CLÉS
  // ──────────────────────────────────────────────
  dates: {
    ouvertureInscriptions:     'mardi 8 septembre 2026 à 13h',
    ouvertureStreaming:         'mardi 22 septembre 2026 à 13h',
    dateLimitePaiement:        '13 novembre 2026',
    dateLimiteNavettes:        '24 novembre 2026',
    arriveeBenevolat:          'mercredi 25 novembre au plus tard à 9h',
    jourArrivee:               'vendredi 27 novembre',
    jourDepart:                'lundi 30 novembre',
  },

  // ──────────────────────────────────────────────
  //  NAVETTES
  // ──────────────────────────────────────────────
  navettes: {
    prix:          '5 €',
    allerJour:     'vendredi 27 novembre',
    allerHoraires: '12h30–19h15',
    retourJour:    'lundi 30 novembre',
    retourHoraires:'13h–18h30',
    gare:          'Gare d\'Ecommoy',
    contact:       '02 43 87 71 02',
  },

  // ──────────────────────────────────────────────
  //  LIENS
  //  ➤ Remplacer les '' vides par vos URLs
  // ──────────────────────────────────────────────
  liens: {
    pageDediee:       'https://kadampafrance.org/enseignement/celebration-du-dharma-2026/',
    commentVenir:     'https://kadampafrance.org/comment-venir/',
    termesConditions: 'https://legacy.kadampabookings.org/#/fr/event/1961/terms',
    formulaireNavette:'https://docs.google.com/forms/d/e/1FAIpQLSfjjBKyAddHCxA2P7bgsUo3m-VJbIs4_83zyFrZd6gDe3Pncg/viewform',
    formulaireBenevolat: 'https://docs.google.com/forms/d/1TomwWgG6WmjBVTycU3uhT6Pb31xYQpARFe0Y_GD8ZQQ/viewform',
    appMobile:        '',  // ← à compléter quand l'app sera prête
  },

  // ──────────────────────────────────────────────
  //  CONTACTS
  // ──────────────────────────────────────────────
  contacts: {
    inscriptions: 'inscriptions-festival@kadampafrance.org',
    benevolat:    'benevolat-festival@kadampafrance.org',
    taxiLocal:    'Taxi Fouqueray — 02 43 42 73 68 (fermé le dimanche), ~20 € CMK ↔ gare d\'Ecommoy',
  },

  // ──────────────────────────────────────────────
  //  SIGNATURE DES LETTRES
  // ──────────────────────────────────────────────
  signature: {
    fr: 'L\'équipe des inscriptions\nCentre de Méditation Kadampa France',
    en: 'The Registration Team\nKadampa Meditation Centre France',
  },

  // ──────────────────────────────────────────────
  //  STYLE C — Charte graphique des lettres
  // ──────────────────────────────────────────────
  style: {
    ORANGE:       'EB570F',
    TEAL:         '22594E',
    GREY_TEXT:    '4A4A4A',
    GREY_LIGHT:   '999999',
    BODY_FONT:    'Calibri',
    HEADING_FONT: 'Georgia',
    sizes: {
      centreName:  25,   // "CENTRE DE MÉDITATION KADAMPA FRANCE"
      eventName:   30,   // "Célébration du Dharma 2026"
      eventDates:  28,   // "27–30 novembre"
      mainTitle:   32,   // Titre de la lettre
      subTitle:    20,   // Sous-titre
      body:        21,   // Texte courant
      stepNumber:  28,   // Numéros d'étapes (Style C)
      stepTitle:   22,   // Titres d'étapes
      links:       22,   // Liens hypertexte
      signature:   21,   // Signature
      footer:      18,   // Pied de page
    },
  },

  // ──────────────────────────────────────────────
  //  STYLE KBS (T&C) — Sans couleurs, police uniforme
  // ──────────────────────────────────────────────
  styleKBS: {
    FONT:  'Calibri',
    SIZE:  21,
    COLOR: '000000',
  },
};

module.exports = CONFIG;

/**
 * Configuration Firebase — Célébration du Dharma 2026
 */

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyCPcfGJ421wIcvwcy2_NxSrDeb4SzC2J3A",
  authDomain: "cd2026-liens.firebaseapp.com",
  projectId: "cd2026-liens",
  storageBucket: "cd2026-liens.firebasestorage.app",
  messagingSenderId: "470606676624",
  appId: "1:470606676624:web:b30814e409372320578e15"
};

// Mot de passe admin (changez-le !)
const ADMIN_PASSWORD = "cd2026admin";

// Email de contact
const CONTACT_EMAIL = "inscriptions-festival@kadampafrance.org";

// Nom de l'expéditeur pour les emails
const SENDER_NAME = "Célébration du Dharma 2026";

// URL de base du site (à remplir après activation de GitHub Pages)
// Exemple : https://votre-pseudo.github.io/cd2026-liens/
const SITE_BASE_URL = "https://kmcfrance.github.io/cd2026-liens/";

// ============================================================
// Configuration EmailJS — Envoi d'emails depuis la page admin
// ============================================================
// 1. Créez un compte sur https://www.emailjs.com (gratuit, 200 emails/mois)
// 2. Ajoutez un "Email Service" (Gmail) → notez le Service ID
// 3. Créez un "Email Template" avec le modèle fourni → notez le Template ID
// 4. Copiez votre Public Key depuis Account > API Keys
const EMAILJS_CONFIG = {
  publicKey: "AVNL_-PrO4NqU5RU6",      // Account > API Keys > Public Key
  serviceId: "service_8cjeogb",          // Email Services > votre service
  templateId: "template_6u839yv"        // Email Templates > votre template
};

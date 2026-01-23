# 📖 Documentation - Reveal Beauty

## Table des matières

1. [Présentation du projet](#présentation-du-projet)
2. [Technologies utilisées](#technologies-utilisées)
3. [Structure du projet](#structure-du-projet)
4. [Installation et démarrage](#installation-et-démarrage)
5. [Architecture des composants](#architecture-des-composants)
6. [Système de styles](#système-de-styles)
7. [Pages du site](#pages-du-site)
8. [Guide de mise à jour](#guide-de-mise-à-jour)
9. [Déploiement](#déploiement)

---

## Présentation du projet

**Reveal Beauty** est un site vitrine élégant pour une marque de mode féminine basée à Dakar, Sénégal.

### Informations de contact
- 📍 **Adresse** : Dakar, Sénégal
- 📞 **Téléphone** : +221 77 499 9961
- ✉️ **Email** : Massouki.aude@gmail.com

### Objectifs du site
- Présenter la marque et ses valeurs
- Montrer les modèles/collections
- Permettre le contact avec les clients potentiels

---

## Technologies utilisées

| Technologie | Version | Description |
|-------------|---------|-------------|
| React | 19.x | Bibliothèque UI |
| TypeScript | 5.9.x | Typage statique |
| Vite | 7.x | Bundler et serveur de dev |
| React Router | 7.x | Navigation SPA |

### Commandes principales

```bash
# Installation des dépendances
yarn install

# Démarrer le serveur de développement
yarn dev

# Construire pour la production
yarn build

# Prévisualiser la version de production
yarn preview
```

---

## Structure du projet

```
REVEAL BEAUTY/
├── public/                  # Fichiers statiques
├── src/
│   ├── assets/             # Images et ressources
│   ├── components/         # Composants réutilisables
│   │   ├── Header.tsx      # Navigation principale
│   │   ├── Header.css
│   │   ├── Footer.tsx      # Pied de page
│   │   └── Footer.css
│   ├── pages/              # Pages du site
│   │   ├── Accueil.tsx     # Page d'accueil
│   │   ├── Accueil.css
│   │   ├── APropos.tsx     # Page À propos
│   │   ├── APropos.css
│   │   ├── Modeles.tsx     # Page des modèles
│   │   ├── Modeles.css
│   │   ├── Contact.tsx     # Page de contact
│   │   └── Contact.css
│   ├── App.tsx             # Composant racine + Routes
│   ├── App.css             # Styles globaux de l'app
│   ├── index.css           # Styles de base + Variables CSS
│   └── main.tsx            # Point d'entrée
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## Installation et démarrage

### Prérequis
- Node.js 18+ installé
- Yarn ou npm

### Installation

```bash
# Cloner ou télécharger le projet
cd "REVEAL BEAUTY"

# Installer les dépendances
yarn install

# Démarrer en mode développement
yarn dev
```

Le site sera accessible sur `http://localhost:5173/`

---

## Architecture des composants

### Header (`src/components/Header.tsx`)

Navigation principale avec menu hamburger responsive.

```tsx
// États
const [isMenuOpen, setIsMenuOpen] = useState(false);  // Contrôle du menu mobile

// Fonctions
toggleMenu()   // Ouvre/ferme le menu
closeMenu()    // Ferme le menu
getActivePage() // Retourne le nom de la page active
```

**Fonctionnalités :**
- Menu desktop horizontal
- Menu mobile dropdown
- Affichage de la page active sur mobile
- Fermeture automatique au clic sur un lien

### Footer (`src/components/Footer.tsx`)

Pied de page avec 3 colonnes :
1. Logo et tagline
2. Liens de navigation
3. Informations de contact

---

## Système de styles

### Variables CSS (`src/index.css`)

```css
:root {
  /* Couleurs principales */
  --color-cream: #fffdfA;        /* Fond principal */
  --color-nude: #f5ebe0;         /* Fond secondaire */
  --color-rose-powder: #f2e6df;  /* Rose poudré */
  --color-rose-gold: #b79680;    /* Rose gold (boutons actifs) */
  --color-silver: #d4d4d4;       /* Argent */
  --color-brown: #8b674f;        /* Marron principal (texte) */
  --color-brown-light: #a58c78;  /* Marron clair (texte secondaire) */
}
```

### Typographies

| Usage | Police | Poids |
|-------|--------|-------|
| Titres | Cormorant Garamond | 500-700 |
| Texte | Poppins | 300-600 |

### Classes de boutons (`src/App.css`)

```css
.btn              /* Style de base */
.btn-primary      /* Bouton rose gold */
.btn-secondary    /* Bouton transparent avec bordure */
```

### Breakpoints responsive

| Breakpoint | Description |
|------------|-------------|
| > 1024px | Desktop |
| 768px - 1024px | Tablette |
| 480px - 768px | Mobile |
| < 480px | Petit mobile |

---

## Pages du site

### 1. Accueil (`/`)

**Fichiers :** `src/pages/Accueil.tsx` + `Accueil.css`

**Sections :**
- Hero avec titre et boutons CTA
- Section introduction
- Grille des valeurs (3 cartes)
- Citation inspirante
- Section CTA finale

### 2. À propos (`/a-propos`)

**Fichiers :** `src/pages/APropos.tsx` + `APropos.css`

**Sections :**
- Hero
- "Qui nous sommes" (texte + image)
- "Notre vision" (texte + image inversé)
- Grille des engagements (3 cartes)
- Citation finale

### 3. Modèles (`/modeles`)

**Fichiers :** `src/pages/Modeles.tsx` + `Modeles.css`

**Sections :**
- Hero
- Grille des modèles (cartes avec images)
- Section "Et plus encore..."
- Citation philosophie

**Structure d'un modèle :**
```tsx
interface Model {
  id: number;
  name: string;           // Ex: "Lasfora"
  image: string;          // URL de l'image
  description: string;    // Description courte
  longDescription: string; // Description détaillée
}
```

### 4. Contact (`/contact`)

**Fichiers :** `src/pages/Contact.tsx` + `Contact.css`

**Sections :**
- Hero
- Grille contact : Infos + Formulaire
- Citation finale

**Formulaire :**
- Champs : Nom, Email, Message
- Validation basique HTML5
- Message de succès après envoi

---

## Guide de mise à jour

### Modifier les informations de contact

**Fichier :** `src/components/Footer.tsx`
```tsx
<p>📍 Dakar, Sénégal</p>
<p>📞 +221 77 499 9961</p>
<p>✉️ Massouki.aude@gmail.com</p>
```

**Fichier :** `src/pages/Contact.tsx`
```tsx
<span>Dakar, Sénégal</span>
<a href="tel:+221774999961">+221 77 499 9961</a>
<a href="mailto:Massouki.aude@gmail.com">Massouki.aude@gmail.com</a>
```

### Ajouter un nouveau modèle

**Fichier :** `src/pages/Modeles.tsx`

Ajouter dans le tableau `models` :
```tsx
{
  id: 4,  // Incrémenter l'ID
  name: "Nouveau Modèle",
  image: "URL_DE_L_IMAGE",
  description: "Description courte",
  longDescription: "Description longue détaillée..."
}
```

### Modifier les couleurs

**Fichier :** `src/index.css`

Modifier les variables CSS dans `:root` :
```css
--color-rose-gold: #NOUVELLE_COULEUR;
```

### Ajouter une nouvelle page

1. **Créer les fichiers :**
   - `src/pages/NouvellePage.tsx`
   - `src/pages/NouvellePage.css`

2. **Ajouter la route dans `App.tsx` :**
```tsx
import NouvellePage from './pages/NouvellePage';

// Dans les Routes :
<Route path="/nouvelle-page" element={<NouvellePage />} />
```

3. **Ajouter le lien dans le Header :**
```tsx
// Dans Header.tsx, ajouter un NavLink
<NavLink to="/nouvelle-page" ...>Nouvelle Page</NavLink>
```

4. **Mettre à jour `getActivePage()` :**
```tsx
case '/nouvelle-page': return 'Nouvelle Page';
```

### Modifier les textes

| Élément | Fichier |
|---------|---------|
| Textes d'accueil | `src/pages/Accueil.tsx` |
| Textes À propos | `src/pages/APropos.tsx` |
| Descriptions modèles | `src/pages/Modeles.tsx` |
| Textes contact | `src/pages/Contact.tsx` |

### Remplacer les images

Les images actuelles utilisent Unsplash. Pour utiliser vos propres images :

1. **Ajouter l'image dans `src/assets/`**
2. **Importer et utiliser :**
```tsx
import monImage from '../assets/mon-image.jpg';

// Utilisation
<img src={monImage} alt="Description" />
```

Ou pour les backgrounds CSS :
```css
background-image: url('../assets/mon-image.jpg');
```

---

## Déploiement

### Build de production

```bash
yarn build
```

Génère un dossier `dist/` avec les fichiers optimisés.

### Plateformes recommandées

| Plateforme | Difficulté | Gratuit |
|------------|------------|---------|
| Vercel | ⭐ Facile | ✅ Oui |
| Netlify | ⭐ Facile | ✅ Oui |
| GitHub Pages | ⭐⭐ Moyen | ✅ Oui |
| Hébergeur classique | ⭐⭐ Moyen | ❌ Payant |

### Déploiement sur Vercel (recommandé)

1. Créer un compte sur [vercel.com](https://vercel.com)
2. Connecter votre repository GitHub
3. Vercel détecte automatiquement Vite
4. Cliquer sur "Deploy"

### Déploiement sur Netlify

1. Créer un compte sur [netlify.com](https://netlify.com)
2. Glisser-déposer le dossier `dist/`
3. Ou connecter votre repository GitHub

### Configuration pour SPA (Single Page Application)

Pour que les routes fonctionnent correctement, créer un fichier `public/_redirects` :
```
/*    /index.html   200
```

Ou pour Vercel, créer `vercel.json` :
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

---

## Maintenance

### Mettre à jour les dépendances

```bash
# Voir les dépendances obsolètes
yarn outdated

# Mettre à jour
yarn upgrade
```

### Vérifier les erreurs TypeScript

```bash
yarn build
```

### Bonnes pratiques

1. **Toujours tester en mobile** avant de déployer
2. **Optimiser les images** (max 200KB par image)
3. **Vérifier les liens** après chaque modification
4. **Sauvegarder régulièrement** (Git recommandé)

---

## Support

Pour toute question technique concernant ce site :
- Vérifier cette documentation
- Consulter la documentation React : [react.dev](https://react.dev)
- Consulter la documentation Vite : [vitejs.dev](https://vitejs.dev)

---

*Documentation créée le 23 janvier 2026*
*Version 1.0*

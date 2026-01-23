# 🚀 Déploiement sur GitHub Pages - Reveal Beauty

Ce guide explique comment déployer le site Reveal Beauty sur GitHub Pages.

---

## 📋 Prérequis

- ✅ Compte GitHub
- ✅ Git installé sur votre machine
- ✅ Node.js et Yarn installés
- ✅ Repository GitHub créé (déjà fait : `origin/master`)

---

## 🛠️ Étape 1 : Configuration du projet

### 1.1 Installer le package gh-pages

```bash
yarn add -D gh-pages
```

### 1.2 Configurer Vite pour GitHub Pages

Modifier le fichier `vite.config.ts` :

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: '/NOM_DU_REPO/',  // Remplacer par le nom de votre repository
})
```

**Exemple :** Si votre repo s'appelle `reveal-beauty`, mettre :
```typescript
base: '/reveal-beauty/',
```

**⚠️ Important :** Si vous utilisez un domaine personnalisé ou GitHub Pages à la racine (`username.github.io`), utilisez :
```typescript
base: '/',
```

### 1.3 Ajouter les scripts de déploiement

Dans `package.json`, ajouter ces scripts :

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "predeploy": "yarn build",
    "deploy": "gh-pages -d dist"
  }
}
```

---

## 🔧 Étape 2 : Configuration pour React Router (SPA)

GitHub Pages ne gère pas nativement les routes côté client. Il faut créer un fichier `404.html` qui redirige vers `index.html`.

### 2.1 Créer le fichier de redirection

Créer `public/404.html` :

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <title>Reveal Beauty</title>
    <script type="text/javascript">
      // Redirection SPA pour GitHub Pages
      var pathSegmentsToKeep = 1; // 1 pour /repo-name/, 0 pour username.github.io
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
        l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
        (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
        l.hash
      );
    </script>
  </head>
  <body>
    Redirection en cours...
  </body>
</html>
```

### 2.2 Modifier index.html

Ajouter ce script dans `index.html` juste après `<head>` :

```html
<head>
  <meta charset="UTF-8" />
  <!-- Script de redirection SPA GitHub Pages -->
  <script type="text/javascript">
    (function(l) {
      if (l.search[1] === '/' ) {
        var decoded = l.search.slice(1).split('&').map(function(s) { 
          return s.replace(/~and~/g, '&')
        }).join('?');
        window.history.replaceState(null, null,
          l.pathname.slice(0, -1) + decoded + l.hash
        );
      }
    }(window.location))
  </script>
  <!-- Reste du head... -->
</head>
```

---

## 🚀 Étape 3 : Déployer

### 3.1 Build et déploiement

```bash
# S'assurer que tout est commité
git add .
git commit -m "Configuration GitHub Pages"
git push origin master

# Déployer sur GitHub Pages
yarn deploy
```

Cette commande va :
1. Builder le projet (`yarn build`)
2. Créer/mettre à jour la branche `gh-pages`
3. Pousser les fichiers vers GitHub

### 3.2 Activer GitHub Pages

1. Aller sur votre repository GitHub
2. Cliquer sur **Settings** (⚙️)
3. Dans le menu gauche, cliquer sur **Pages**
4. Dans **Source**, sélectionner :
   - Branch : `gh-pages`
   - Folder : `/ (root)`
5. Cliquer sur **Save**

### 3.3 Accéder au site

Après quelques minutes, votre site sera disponible à :

```
https://VOTRE_USERNAME.github.io/NOM_DU_REPO/
```

---

## 🔄 Mises à jour futures

Pour chaque mise à jour du site :

```bash
# 1. Faire vos modifications

# 2. Commiter les changements
git add .
git commit -m "Description des changements"
git push origin master

# 3. Redéployer
yarn deploy
```

---

## 🌐 Domaine personnalisé (optionnel)

### Configurer un domaine personnalisé

1. **Créer le fichier CNAME**

   Créer `public/CNAME` (sans extension) :
   ```
   www.votredomaine.com
   ```

2. **Configurer les DNS de votre domaine**

   Ajouter ces enregistrements DNS :
   
   | Type | Nom | Valeur |
   |------|-----|--------|
   | A | @ | 185.199.108.153 |
   | A | @ | 185.199.109.153 |
   | A | @ | 185.199.110.153 |
   | A | @ | 185.199.111.153 |
   | CNAME | www | VOTRE_USERNAME.github.io |

3. **Activer HTTPS**
   
   Dans Settings > Pages, cocher "Enforce HTTPS"

4. **Modifier vite.config.ts**
   ```typescript
   base: '/',  // Plus besoin du nom du repo
   ```

---

## 🐛 Résolution des problèmes

### Page blanche après déploiement

**Cause :** Le `base` dans `vite.config.ts` est incorrect.

**Solution :** Vérifier que le nom du repo est correct et correspond exactement (sensible à la casse).

### Erreur 404 sur les routes

**Cause :** GitHub Pages ne gère pas les routes SPA.

**Solution :** Vérifier que les fichiers `404.html` et le script dans `index.html` sont bien configurés.

### Les images ne s'affichent pas

**Cause :** Chemins relatifs incorrects.

**Solution :** Utiliser des imports ES6 pour les images :
```tsx
import monImage from './assets/image.jpg';
<img src={monImage} />
```

### CSS/JS non chargés

**Cause :** Mauvais chemin de base.

**Solution :** Vérifier la configuration `base` dans `vite.config.ts`.

---

## 📁 Fichiers de configuration finaux

### vite.config.ts
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: '/NOM_DU_REPO/',
})
```

### package.json (scripts)
```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "predeploy": "yarn build",
    "deploy": "gh-pages -d dist"
  }
}
```

### Structure des fichiers publics
```
public/
├── 404.html      # Redirection SPA
├── CNAME         # (optionnel) Domaine personnalisé
└── ...
```

---

## ✅ Checklist de déploiement

- [ ] `gh-pages` installé
- [ ] `base` configuré dans `vite.config.ts`
- [ ] Scripts `predeploy` et `deploy` ajoutés
- [ ] `public/404.html` créé
- [ ] Script de redirection ajouté dans `index.html`
- [ ] Tout commité et pushé sur `master`
- [ ] `yarn deploy` exécuté
- [ ] GitHub Pages activé (branche `gh-pages`)
- [ ] Site accessible et fonctionnel

---

## 🔗 Liens utiles

- [Documentation Vite - Static Deploy](https://vitejs.dev/guide/static-deploy.html#github-pages)
- [Documentation GitHub Pages](https://docs.github.com/en/pages)
- [gh-pages npm package](https://www.npmjs.com/package/gh-pages)

---

*Guide créé le 23 janvier 2026*

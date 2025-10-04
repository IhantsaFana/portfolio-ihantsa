# 🐛 Guide de Débogage

## 📋 Tests à Effectuer

### 1. **Effacer Complètement le Cache**
```bash
# Dans la console du navigateur (F12)
localStorage.clear()
sessionStorage.clear()
location.reload()
```

### 2. **Tester en Mode Incognito**
- Ouvrir une fenêtre privée/incognito
- Aller sur http://localhost:5173
- Observer les logs dans la console

### 3. **Vérifier les Logs Console**
Ouvrez la console (F12) et cherchez ces messages :

#### Logs de Langue :
```
🌍 Langue du navigateur détectée: fr → Redirection vers: fr
🔄 LanguageSync - URL lang: fr i18n lang: en
🔄 Changement de langue: en → fr
```

#### Logs de Thème :
```
🎨 ThemeProvider init - savedTheme: null systemPrefersDark: true initialTheme: dark
🎨 Applying theme: dark
🎨 Theme applied, classList: dark
```

## 🔍 Diagnostic des Problèmes

### Problème 1 : Route vs Langue
**Symptôme** : URL `/en` mais contenu français

**Causes possibles** :
1. Cache localStorage avec ancienne langue
2. i18next se charge avant le router
3. Conflit entre détection automatique et URL

**Solutions** :
1. Effacer localStorage : `localStorage.clear()`
2. Vérifier l'ordre des logs dans la console
3. Tester en mode incognito

### Problème 2 : Dark Mode
**Symptôme** : Toggle sur dark mais affichage light

**Causes possibles** :
1. Script dans index.html ne s'exécute pas
2. CSS Tailwind pas chargé correctement
3. Conflit entre script initial et React

**Solutions** :
1. Vérifier que `<html class="dark">` est présent dans l'inspecteur
2. Vérifier que les classes Tailwind `dark:` fonctionnent
3. Tester le toggle manuellement

## 🧪 Tests Manuels

### Test 1 : Langue
1. Aller sur http://localhost:5173
2. Observer l'URL finale
3. Vérifier le contenu affiché
4. Changer de langue avec les boutons
5. Naviguer entre les pages

### Test 2 : Thème
1. Ouvrir l'inspecteur (F12)
2. Regarder `<html class="...">` 
3. Vérifier si `dark` est présent
4. Tester le toggle
5. Naviguer entre les pages

### Test 3 : Navigation
1. Aller sur `/fr/about`
2. Vérifier que l'URL reste `/fr/about`
3. Vérifier que le contenu est en français
4. Vérifier que le thème est conservé

## 📝 Informations à Fournir

Si les problèmes persistent, fournissez :

1. **Langue de votre navigateur** : 
   - Dans la console : `navigator.language`

2. **Préférence système dark mode** :
   - Dans la console : `window.matchMedia('(prefers-color-scheme: dark)').matches`

3. **Contenu localStorage** :
   - Dans la console : `localStorage`

4. **Logs console** lors du chargement initial

5. **URL actuelle** quand le problème se produit

6. **Classes HTML** :
   - Dans la console : `document.documentElement.className`

## 🔧 Corrections Rapides

### Si la langue ne fonctionne pas :
```javascript
// Dans la console
localStorage.removeItem('i18nextLng')
location.reload()
```

### Si le dark mode ne fonctionne pas :
```javascript
// Dans la console
localStorage.removeItem('theme')
document.documentElement.classList.add('dark')
```

### Reset complet :
```javascript
// Dans la console
localStorage.clear()
sessionStorage.clear()
location.reload()
```

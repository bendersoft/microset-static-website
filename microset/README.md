# Microset

## Description
Microset est une application web développée en React avec Vite. Elle présente la société Microset et ses services dans le domaine de la surveillance et du pilotage industriel.

## Stack Technique
- **Frontend** : React avec Vite
- **Styling** : TailwindCSS
- **Langage** : TypeScript
- **Linter & Formatage** : Biome

## Installation & Lancement
### Prérequis
- Node.js (v18+ recommandé)
- pnpm (ou npm/yarn selon la préférence)

### Installation des dépendances
```sh
pnpm install
```

### Lancer le projet en mode développement
```sh
pnpm dev
```
Le projet sera accessible sur [http://localhost:5173](http://localhost:5173).

### Construire le projet pour la production
```sh
pnpm build
```

### Servir le projet en production
```sh
pnpm preview
```

## Linter & Formatage avec Biome
```sh
npx @biomejs/biome check --write ./src
```

## Fonctionnalités principales
- Page d'accueil avec présentation de la société
- Pages de contenu spécifique
- Pages de mentions légales et contacts

## Auteur
Développé par Elsa
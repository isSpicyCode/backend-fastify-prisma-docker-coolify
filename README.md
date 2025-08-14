<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# README

Ce dépôt sert de **proof of concept** pour tester plusieurs outils d’infrastructure et de déploiement :

- Backend : Fastify + Prisma (Node.js)
- Base de données : Supabase self-hosted (PostgreSQL, Auth, Realtime)
- Orchestration locale : Docker Compose
- Déploiement et CI/CD : Coolify (Self-Hosted ou Cloud)


## Usage rapide

1. Cloner le dépôt

```bash
git clone <URL_DU_REPO>
cd mon-backend-stack
```

2. Démarrer en local avec Docker Compose

```bash
docker compose up -d
```

3. Accéder aux services
    - API Fastify : http://localhost:3000
    - Supabase Studio : http://localhost:3001
4. Tester les endpoints

```bash
curl http://localhost:3000/
```

5. Arrêter la stack

```bash
docker compose down
```


## Déploiement

Pour tester le déploiement automatique sur Coolify :

- Pousser la branche `main` sur GitHub/GitLab
- Connecter le dépôt dans Coolify (Docker Compose)
- Configurer les variables d’environnement (DB URL, clés JWT/Supabase)
- Cliquer sur **Deploy** dans l’interface Coolify

Le déploiement générera automatiquement des URLs publiques et gérera SSL, monitoring et rollbacks.

***

> Cette configuration minimaliste te permet de **tester rapidement** Docker Compose, Supabase self-hosted, Fastify/Prisma et Coolify en moins de 10 minutes.


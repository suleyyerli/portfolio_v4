# Projet de Réseau Social de Gestion de Posts

## Introduction

Mon application est un réseau social innovant conçu pour permettre aux utilisateurs de partager leurs dilemmes, questions, ou choix difficiles avec la communauté. Les utilisateurs peuvent créer des posts décrivant leur situation, et la communauté peut réagir en proposant des solutions ou des suggestions. Chaque proposition peut être votée, permettant ainsi de mettre en avant les meilleures idées.

L'application est encore en développement, avec plusieurs fonctionnalités prévues pour améliorer l'expérience utilisateur. Parmi celles-ci, un onglet administrateur pour gérer les utilisateurs et les posts, ainsi qu'un système de défilement pour afficher les posts les plus populaires en termes de propositions et de réactions.

## Technologies Utilisées

### Next.js

Next.js est un framework basé sur React qui permet de créer des applications web performantes et optimisées pour le SEO. Il facilite la gestion des routes, des états et des composants, tout en offrant une structure de projet claire et modulaire.

### React

React est une bibliothèque JavaScript pour la création d'interfaces utilisateur. Il est utilisé pour construire les composants réactifs de l'application, permettant une mise à jour automatique de l'interface utilisateur en réponse aux changements de données.

### ShadcnUI

ShadcnUI est une collection de composants UI préconstruits et stylisés pour React. Il permet de créer rapidement des interfaces utilisateur cohérentes et esthétiques, en utilisant des composants réutilisables et personnalisables.

### Prisma

Prisma est un ORM (Object-Relational Mapping) moderne qui simplifie l'interaction avec la base de données. Il permet de définir des modèles de données et de générer des requêtes SQL de manière intuitive et sécurisée.

### SQLite

SQLite est une base de données relationnelle légère et intégrée. Elle est utilisée pour stocker les données de l'application, telles que les utilisateurs, les posts, les propositions et les votes. SQLite est idéale pour les applications de petite à moyenne échelle en raison de sa simplicité et de sa performance.

### Tailwind CSS

Tailwind CSS est un framework de style CSS utilitaire qui permet de créer des interfaces utilisateur rapidement et de manière cohérente. Il offre une grande flexibilité et une personnalisation fine des styles.

### La Stack

<img src ="img/stacklogo.png" alt="La Stack">

## Établir la Problématique

### Problématique

Comment permettre aux utilisateurs de partager leurs dilemmes ou questions et recevoir des propositions de la part de la communauté de manière efficace et intuitive ?

## Cahier des Charges

### Fonctionnalités

1. **Inscription et Connexion des Utilisateurs**

   - Les utilisateurs doivent pouvoir s'inscrire et se connecter à l'application via un formulaire dédié. Ce formulaire doit être simple et intuitif, demandant des informations de base telles que le nom d'utilisateur et le mot de passe.

2. **Création de Posts**

   - Une fois connectés, les utilisateurs peuvent créer des posts en fournissant un titre et une description. Cette fonctionnalité doit être accessible via un bouton clairement visible sur la page d'accueil ou la page des posts.

3. **Affichage des Posts**

   - Tous les posts créés par les utilisateurs sont affichés sur une page dédiée. Les posts doivent être triés par date de création, du plus récent au plus ancien, pour que les utilisateurs puissent facilement voir les nouvelles publications.

4. **Détail d'un Post**

   - En cliquant sur un post, les utilisateurs peuvent voir les détails du post, y compris les propositions faites par la communauté et les votes associés à chaque proposition.

5. **Propositions et Votes**

   - Les utilisateurs peuvent proposer des solutions ou des suggestions pour un post. Chaque proposition peut être votée par les autres utilisateurs, permettant ainsi de mettre en avant les meilleures idées.

6. **Gestion des Utilisateurs et des Posts (Admin)**

   - Un onglet administrateur permettra de gérer les utilisateurs et les posts de l'application. Les administrateurs pourront supprimer des posts inappropriés et gérer les comptes utilisateurs.

7. **Défilement des Posts Populaires**

   - Un système de défilement affichera les posts ayant reçu le plus de propositions et de réactions. Cela permettra de mettre en avant les discussions les plus actives et intéressantes.

### Diagramme de Cas d'Utilisation

- Cas d'utilisation pour l'utilisateur:
  <img src ="img/casUser.png" alt="Diagramme de Cas d'Utilisation">

- Cas d'utilisation pour l'administrateur:
  <img src ="img/casAdmin.png" alt="Diagramme de Cas d'Utilisation">

#### Catégories/Types d'Utilisateurs

1. **Utilisateur**

   - Inscription
   - Connexion
   - Création de posts
   - Consultation des posts
   - Proposition de solutions
   - Vote pour les propositions

2. **Administrateur**

   - Gestion des utilisateurs
   - Gestion des posts
   - Consultation des statistiques des posts

## Charte Graphique et UI Kit

### Charte Graphique

1. **Couleurs Principales**

   - **Couleur de fond** : #1a202c (gris foncé)
   - **Couleur de texte** : #e2e8f0 (gris clair)
   - **Couleur des cartes** : rgba(255, 255, 255, 0.05) (blanc très transparent)
   - **Couleur des bordures** : rgba(255, 255, 255, 0.2) (blanc quasi invisible)
   - **Couleur des boutons** : violet/noir

2. **Typographie**

   - **Police principale** : sans-serif
   - **Taille des titres** : 4xl pour les titres principaux, 2xl pour les sous-titres
   - **Taille du texte** : sm pour le texte normal

3. **Structure du Style**

   - **Global**
     - Utilisation de Tailwind CSS pour une gestion centralisée des styles.
     - Couleurs et typographies définies dans le fichier de configuration Tailwind.
   - **Composants**
     - Les composants sont stylisés de manière cohérente avec des classes utilitaires Tailwind.
     - Les cartes, boutons, et formulaires ont des styles spécifiques pour assurer une expérience utilisateur harmonieuse.
   - **Réactivité**
     - L'application est conçue pour être responsive, avec des styles adaptés pour les différentes tailles d'écran.
     - Utilisation de flexbox et de grilles pour une mise en page flexible et adaptable.

### UI Kit

1. **Boutons**

   - Boutons primaires et secondaires avec différentes couleurs et styles pour les actions principales et secondaires.
   - Boutons avec des icônes pour une meilleure compréhension des actions.

   <img src="img/Bouton1.png" alt="Boutons">
   <img src="img/Bouton2.png" alt="Boutons">

2. **Affichage des Posts**

   - Cartes pour afficher les posts et les propositions, avec des bordures et des ombres légères pour une meilleure lisibilité.
   - Utilisation de padding et de marges pour espacer les éléments de manière harmonieuse.

   <img src="img/PostCard.png" alt="Post">

3. **Navigation**

   - Barre de navigation avec des liens vers les différentes sections de l'application, stylisée pour être claire et accessible.
   - Indicateurs visuels pour montrer la page active et faciliter la navigation.

   <img src="img/Header.png" alt="Navigation">

## Wireframe

<div style="background-color: #f0f8ff; padding: 10px; border-radius: 5px;">
Mon application est composée de la manière suivante, une div contient toute l'application et à l'intérieur de cette div, il y a une barre de navigation, un espace pour les posts et en dessous un footer.
Voici le wireframe de la structure global de mon application.
Squelette de l'application:
</div>

<img src="img/Wireframe.png" alt="Wireframe">

## Planification de la Réalisation

<img src="img/planification.png" alt="Planification">

## Dictionnaire de Données

<img src="img/schemaDB.png" alt="Dictionnaire de Données">

### Modèle PRISMA:

```js
datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id            String          @id @default(cuid())
  name          String?
  email         String?         @unique
  emailVerified DateTime?
  image         String?
  role          String         @default("user")
  accounts      Account[]
  sessions      Session[]

  Authenticator Authenticator[]
  posts         Post[]          @relation("UserPosts")
  propositions  Proposition[]
  votes         Vote[]

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

}

model Account {
  id                String  @id @default(cuid())
  userId            String
  type              String
  provider          String
  providerAccountId String
  refresh_token     String?
  access_token      String?
  expires_at        Int?
  token_type        String?
  scope             String?
  id_token          String?
  session_state     String?

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([provider, providerAccountId])

}

model Session {
  id           String   @id @default(cuid())
  sessionToken String   @unique
  userId       String
  expires      DateTime
  user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model VerificationToken {
  identifier String
  token      String
  expires    DateTime

  @@unique([identifier, token])
}


model Authenticator {
  credentialID         String  @unique
  userId               String
  providerAccountId    String
  credentialPublicKey  String
  counter              Int
  credentialDeviceType String
  credentialBackedUp   Boolean
  transports           String?

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@id([userId, credentialID])
}

model Post {
  id        Int      @id @default(autoincrement())
  title     String
  content   String?
  tag       String
  createdAt DateTime @default(now())
  userId    String
  user      User     @relation("UserPosts", fields: [userId], references: [id])
  proposition Proposition[]
}

model Proposition {
  id        Int      @id @default(autoincrement())
  content   String
  createdAt DateTime @default(now())
  userId    String
  user      User     @relation(fields: [userId], references: [id])
  post      Post     @relation(fields: [postId], references: [id])
  postId    Int
  likes     Int      @default(0)
  dislikes  Int      @default(0)
  votes     Vote[]

  @@unique([postId, content])
}

model Vote {
  id             Int         @id @default(autoincrement())
  userId         String
  propositionId  Int
  type           String
  user           User        @relation(fields: [userId], references: [id])
  proposition    Proposition @relation(fields: [propositionId], references: [id])

  @@unique([userId, propositionId])
}
```

## Quelques documentation techniques sur le projet.

### Composant ou Serveur ?

1. **Les composants serveur de mon application**

- app/posts/page.tsx

2. **Les composants client de mon application**

- app/creation/page.tsx
- app/profile/page.tsx
- app/profile/page.tsx
- app/posts/[id]/page.tsx
- app/admin/page.tsx

### Documentation sur les Composants Serveur et Client dans Next.js

#### Introduction

Next.js est un framework React qui permet de créer des applications web performantes en utilisant des composants serveur et client. Comprendre quand et comment utiliser ces composants est essentiel pour optimiser votre application.

#### Composants Serveur

##### Qu'est-ce qu'un Composant Serveur ?

Un composant serveur est rendu côté serveur avant d'être envoyé au client. Cela signifie que toutes les données nécessaires sont préchargées, ce qui améliore le temps de chargement initial et le SEO.

##### Avantages des Composants Serveur

- **Rendu Initial Rapide** : Les pages sont prêtes à l'emploi dès qu'elles atteignent le client.
- **SEO Amélioré** : Les moteurs de recherche peuvent indexer le contenu plus facilement.
- **Sécurité** : Les données sensibles ne sont pas exposées dans le code JavaScript côté client.

##### Quand Utiliser un Composant Serveur ?

- Pour les pages qui nécessitent un rendu initial rapide.
- Pour les données statiques ou peu changeantes.
- Pour améliorer le SEO.

#### Composants Client

##### Qu'est-ce qu'un Composant Client ?

Un composant client est rendu côté client et est idéal pour les interactions utilisateur et la gestion de l'état local.

##### Avantages des Composants Client

- **Interactivité** : Permet des interactions dynamiques avec l'utilisateur.
- **Gestion de l'État** : Utilisation des hooks React comme `useState` et `useEffect`.
- **Données Dynamiques** : Idéal pour les données qui changent fréquemment.

##### Quand Utiliser un Composant Client ?

- Pour les formulaires et les interactions utilisateur.
- Pour les données qui changent fréquemment.
- Pour gérer l'état local.

### Ajout features Admin

#### 1. Mise à jour de la base de données

```sql
ALTER TABLE users ADD COLUMN role ENUM('admin', 'user') DEFAULT 'user';
```

Pour UPDATE le premier utilisateur en tant qu'admin :

```js
UPDATE users SET role = 'admin' WHERE email = 'admin@example.com';
```

En prisma :
Ajout de la ligne dans le fichier `schema.prisma` :

```js
role      String   @default("user")
```

Pour le UPDATE :

Effectuez la commande `npx prisma studio` ceux qui permet de modifié directement dans la bdd.

#### 2. Création des API

1. api/admin/route.ts
   Ce fichier gère les requêtes pour les opérations d'administration.

2. api/admin/setAdmin/route.ts
   Permet à un admin de mettre à jour le rôle d'un utilisateur.

3. api/admin/checkAdmin/route.ts
   Permet de vérifier si l'utilisateur est admin.
   Donc peut acceder au dashboard admin.

#### 3. Création de la page admin

app/admin/page.tsx

1. Appel de l'api checkamdin qui verifie si déja l'utilisateur peux accèder à la page ou non.
2. Appel de l'api admin/route.ts qui affiche toutes les données les posts/users.
3. Affichage des différents fonctiannalités.

### Ajout de la feature de like et dislike

#### 1. Mettre à jour le modèle Prisma Proposition

Ajout des champs likes et dislikes dans le modèle Proposition

```js
model Proposition {
  likes     Int      @default(0)
  dislikes  Int      @default(0)
}
```

sql

```sql
ALTER TABLE Proposition ADD COLUMN likes INT DEFAULT 0;
ALTER TABLE Proposition ADD COLUMN dislikes INT DEFAULT 0;
```

#### 2. Créer l'API pour gérer les "likes" et "dislikes"

app/api/propositions/like/route.ts

Cette API gère les interactions de "like" et "dislike" sur les propositions.

Détails :
Méthode : POST
Endpoint : /api/propositions/like
Paramètres d'entrée :
propositionId : Identifiant de la proposition.
action : "like" ou "dislike".
Fonctionnement :

1. Validation : Vérifie si l'action est valide.
   Mise à jour : Incrémente le compteur de "likes" ou de "dislikes" dans la base de données.
   Réponse : Renvoie la proposition mise à jour ou un message d'erreur en cas d'échec.
   Cette API permet aux utilisateurs d'exprimer leur opinion sur les propositions et d'améliorer l'engagement dans l'application.

```ts
import { NextResponse } from "next/server";
import { prisma } from "@/src/lib/prisma";

export async function POST(req: Request) {
  try {
    const { propositionId, action } = await req.json();

    if (action !== "like" && action !== "dislike") {
      return NextResponse.json({ message: "Invalid action" }, { status: 400 });
    }

    const updateData =
      action === "like"
        ? { likes: { increment: 1 } }
        : { dislikes: { increment: 1 } };

    const updatedProposition = await prisma.proposition.update({
      where: { id: propositionId },
      data: updateData,
    });

    return NextResponse.json(updatedProposition, { status: 200 });
  } catch (error) {
    console.error("Failed to update proposition:", error);
    return NextResponse.json(
      { message: "Failed to update proposition" },
      { status: 500 }
    );
  }
}
```

#### 3. Mettre à jour le composant PropositionCard

app/components/PropositionCard.tsx

fetch les données de la proposition via l'API.

```tsx
const handleLikeDislike = async (action: "like" | "dislike") => {
  try {
    await fetch("/api/propositions/like", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ propositionId, action }),
    });
  } catch (error) {
    console.error("Failed to update likes/dislikes:", error);
  }
};
```

Ajout des fonctions handleLikeDislike pour gérer les interactions "like" et "dislike".

```tsx
const handleLikeDislike = (action: "like" | "dislike") => {
  // Logique pour gérer les interactions "like" et "dislike"
};
```

Ajout des boutons "like" et "dislike" dans le composant PropositionCard.

```tsx
<Button onClick={() => handleLikeDislike("like")}>Like ({likes})</Button>
<Button onClick={() => handleLikeDislike("dislike")}>Dislike ({dislikes})</Button>
```

### Ajout de la possibilité de proposer des solutions aux posts

#### Objectifs

- Ajouter une table Proposition / liaison avec Post et User
- Créer un API pour créer une proposition
- Créer un composant pour créer une proposition
- Ajouter la route pour l'affichage des propositions d'un post (avec post/[id]/page.tsx)(Routing NextJS)
- Utiliser le composant PropositionForm dans la page post/[id]
- Afficher le post en question dans la page post/[id]
- Afficher les propositions d'un post dans la page post/[id] en dessous du post en question

#### BACKEND

1. Ajouter une table Proposition / liaison avec Post et User

- Création d'une table "Proposition" avec les champs :

  - id
  - content
  - postId (relation avec Post)
  - userId (relation avec User)

```js
model Proposition {
  id        Int      @id @default(autoincrement())
  content   String
  createdAt DateTime @default(now())
  userId    String
  user      User     @relation(fields: [userId], references: [id])

  post   Post  @relation(fields: [postId], references: [id])
  postId Int
  vote    Vote[]

  @@unique([postId, content])
}

```

- **La relation avec le user** permet de récupérer les informations du user qui a créé la proposition.(Afficher son avatar)
- **La relation avec le post** permet de récupérer les informations du post en question. Qui a plusieurs avantages :

  - **Organisation des données** : On peut récupérer toutes les propositions d'un post en une requête.
  - **Intégrité des données** : On ne peut pas créer une proposition pour un post qui n'existe pas.(réduit le risque de données orphelines)
  - **Afficher le post en question** : On peut afficher le post en question dans la page post/[id]. Donc plus besoin de refaire une requête pour récupérer le post en question.

  - **Application plus facile à maintenir**

#### 2. Création d'un API pour créer une proposition

app/api/propositions/route.ts

```js
// POST: Créer une proposition

import { NextResponse } from "next/server";
import { prisma } from "@/src/lib/prisma";
import { auth } from "@/src/lib/auth";

export async function POST(req: Request) {
  try {
    const { content } = await req.json();
    const session = await auth();
    const userId = session?.user?.id;
    if (!userId) {
      return NextResponse.json(
        { message: "User not authenticated" },
        { status: 401 }
      );
    }
    const creeProposition = await prisma.proposition.create({
      data: {
        content,
        user: { connect: { id: userId } },
      },
    });
    return NextResponse.json(creeProposition, { status: 201 });
  } catch (error) {
    console.error("Failed to create proposition:", error);
    return NextResponse.json(
      { message: "Failed to create proposition" },
      { status: 500 }
    );
  }
}
```

J'ai simplement repris l'API de création de post et je l'ai modifié.

#### 3. Création de l'api pour récupérer les propositions d'un post

app/api/propositions/route.ts

```js
// GET: Récupérer toutes les propositions
export async function GET() {
  try {
    const propositions = await prisma.proposition.findMany({
      orderBy: { createdAt: "desc" },
      include: { user: { select: { image: true } } },
    });
    return NextResponse.json(propositions, { status: 200 });
  } catch (error) {
    console.error("Failed to fetch propositions:", error);
    return NextResponse.json(
      { message: "Failed to fetch propositions" },
      { status: 500 }
    );
  }
}
```

## Liason avec le FRONT

### 1. Création d'un composant pour créer une proposition

- components/PropositionForm.tsx
  Je me suis inspiré du composant PostForm.tsx que j'avais déjà créé.
  Pour l'adapter à la création d'une proposition.

### 2. Création du composant PropositionCard.tsx

En reprenant le composant "PostCard.tsx" mais en affichant uniquement l'avatar du user et le content.

### 3. Ajouter la route pour l'affichage des propositions d'un post (avec post/[id]/page.tsx)(Routing NextJS)

- app/post/[id]/page.tsx
  Qui permet le dynamic routing NextJS.

- Importez le formulaire de création de proposition dans la page post/[id]
- Affichez le post en question dans la page post/[id]
  En utilisant le composant PostCard.tsx
- Affichez les propositions d'un post dans la page post/[id] en dessous du post en question
  En utilisant le composant PropositionCard.tsx

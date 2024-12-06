# Guide Framer Motion avec Next.js

## Installation

```bash
npm install framer-motion
```

## Composants principaux

### 1. motion

Le composant de base pour les animations :

```tsx
import { motion } from 'framer-motion'

// Animation simple
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
/>

// Animation avec transition personnalisée
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, ease: "easeOut" }}
/>
```

### 2. AnimatePresence

Pour les animations de montage/démontage :

```tsx
import { AnimatePresence, motion } from "framer-motion";

<AnimatePresence mode="wait">
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  />
</AnimatePresence>;
```

## Propriétés communes

### 1. Propriétés d'animation

- `initial`: État initial
- `animate`: État final
- `exit`: État de sortie
- `transition`: Configuration de la transition

### 2. Types de transitions

```tsx
// Transition simple
transition={{ duration: 0.3 }}

// Transition avec courbe d'accélération
transition={{
  duration: 0.3,
  ease: [0.25, 0.1, 0.25, 1.0]
}}

// Transition avec ressort
transition={{
  type: "spring",
  stiffness: 100,
  damping: 10
}}
```

## Exemples d'utilisation

### 1. Animation au survol

```tsx
<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} />
```

### 2. Animation de page (Next.js)

```tsx
// app/template.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function Template({ children }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{
          duration: 0.3,
          ease: [0.25, 0.1, 0.25, 1.0],
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
```

### 3. Animation de liste

```tsx
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

function List() {
  return (
    <motion.ul variants={container} initial="hidden" animate="show">
      {items.map((item) => (
        <motion.li key={item} variants={item}>
          {item}
        </motion.li>
      ))}
    </motion.ul>
  );
}
```

## Astuces

### 1. Performance

- Utilisez `layout` pour les animations de mise en page automatiques
- Préférez `transform` à des propriétés comme `width` ou `height`
- Utilisez `willChange` pour les animations complexes

### 2. Accessibilité

- Ajoutez `reducedMotion` pour respecter les préférences utilisateur

```tsx
const { reducedMotion } = useReducedMotion();

const transition = {
  duration: reducedMotion ? 0 : 0.3,
};
```

### 3. Animations conditionnelles

```tsx
<motion.div
  animate={isOpen ? "open" : "closed"}
  variants={{
    open: { opacity: 1, height: "auto" },
    closed: { opacity: 0, height: 0 },
  }}
/>
```

## Ressources utiles

- [Documentation officielle](https://www.framer.com/motion/)
- [Exemples Framer Motion](https://www.framer.com/motion/examples/)
- [Guide des animations Next.js](https://nextjs.org/docs/app/building-your-application/routing/route-handlers#streaming)

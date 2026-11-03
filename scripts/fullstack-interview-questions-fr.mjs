export const fullstackInterviewFrench = [
  {
    question: 'Quelle est la différence entre == et equals() en Java ?',
    options: {
      a: 'Les deux comparent toujours le contenu des objets.',
      b: '== compare les références pour les objets, tandis que equals() compare leur égalité logique si elle est correctement redéfinie.',
      c: 'equals() compare les adresses mémoire.',
      d: '== appelle automatiquement equals().',
    },
    explanation:
      '== vérifie si deux références pointent vers le même objet. equals() permet de comparer le contenu ou l’identité logique selon son implémentation.',
  },
  {
    question: 'Que signifie le principe DRY ?',
    options: {
      a: 'Don’t Repeat Yourself.',
      b: 'Do Repeat Yourself.',
      c: 'Don’t Reuse Yourself.',
      d: 'Develop Reusable Yearly.',
    },
    explanation: 'Éviter la duplication de logique ou de connaissances dans le code.',
  },
  {
    question: 'Quel principe correspond à KISS ?',
    options: {
      a: 'Keep Interfaces Small and Secure.',
      b: 'Keep It Simple, Stupid.',
      c: 'Keep Implementation Strict and Safe.',
      d: 'Keep Inheritance Simple and Short.',
    },
    explanation: 'Privilégier les solutions simples plutôt que les complexités inutiles.',
  },
  {
    question: 'Que signifie YAGNI ?',
    options: {
      a: 'You Are Going To Need It.',
      b: 'You Aren’t Gonna Need It.',
      c: 'Your Application Gets New Interfaces.',
      d: 'You Always Generate New Instances.',
    },
    explanation: 'Ne pas développer une fonctionnalité tant qu’elle n’est pas réellement nécessaire.',
  },
  {
    question: 'Quelle est la différence entre une classe abstraite et une interface ?',
    options: {
      a: 'Une interface peut posséder des constructeurs.',
      b: 'Une classe abstraite ne peut contenir que des méthodes abstraites.',
      c: 'Une classe peut étendre une seule classe abstraite, mais implémenter plusieurs interfaces.',
      d: 'Une interface ne peut jamais contenir de méthodes avec implémentation.',
    },
    explanation:
      'Java autorise l’héritage simple de classes et l’implémentation multiple d’interfaces. Une classe abstraite peut contenir des attributs, constructeurs et méthodes concrètes.',
  },
  {
    question:
      'Une classe implémente deux interfaces contenant chacune une méthode default de même signature. Que se passe-t-il ?',
    options: {
      a: 'Java choisit automatiquement la première interface.',
      b: 'Java choisit automatiquement la dernière interface.',
      c: 'Une erreur de compilation si la classe ne redéfinit pas la méthode.',
      d: 'La méthode des deux interfaces est exécutée automatiquement.',
    },
    explanation:
      'Il faut résoudre explicitement le conflit, par exemple en redéfinissant la méthode et en appelant A.super.maMethode() et/ou B.super.maMethode().',
  },
  {
    question:
      'Quelle annotation permet de sélectionner explicitement un bean Spring lorsqu’il existe plusieurs implémentations ?',
    options: {
      a: '@Primary',
      b: '@Qualifier',
      c: '@Component',
      d: '@Autowired',
    },
    explanation:
      '@Qualifier permet de préciser le bean à injecter. @Primary désigne le bean privilégié par défaut.',
  },
  {
    question: 'Que signifie IoC (Inversion of Control) ?',
    options: {
      a: 'La classe crée elle-même toutes ses dépendances.',
      b: 'Le contrôle de création et de gestion des objets est confié au conteneur Spring.',
      c: 'Spring supprime les dépendances entre les classes.',
      d: 'Les objets sont obligatoirement statiques.',
    },
    explanation:
      'Le framework prend en charge la création, la configuration et le cycle de vie des beans.',
  },
  {
    question: 'Quels sont les principaux types d’injection de dépendances avec Spring ?',
    options: {
      a: 'Constructor, Setter et Field Injection.',
      b: 'Static, Dynamic et Runtime Injection.',
      c: 'Public, Private et Protected Injection.',
      d: 'Singleton, Prototype et Request Injection.',
    },
    explanation:
      'L’injection par constructeur est généralement recommandée, notamment pour rendre les dépendances obligatoires et faciliter les tests.',
  },
  {
    question: 'Quelle affirmation correspond au principe SOLID ?',
    options: {
      a: 'Une classe doit obligatoirement avoir une seule méthode.',
      b: 'Une classe doit avoir une seule responsabilité principale.',
      c: 'Toutes les classes doivent hériter d’une classe abstraite.',
      d: 'Les interfaces doivent contenir toutes les implémentations.',
    },
    explanation:
      'C’est le principe SRP (Single Responsibility Principle). SOLID regroupe cinq principes de conception orientée objet.',
  },
  {
    question: 'Qu’est-ce que le problème N+1 avec JPA/Hibernate ?',
    options: {
      a: 'Une requête SQL exécutée une seule fois.',
      b: 'Une requête principale suivie de N requêtes supplémentaires pour récupérer les relations.',
      c: 'Une erreur de connexion à la base de données.',
      d: 'Un problème de transaction distribuée.',
    },
    explanation:
      'Par exemple, on récupère 100 commandes avec une requête, puis Hibernate exécute 100 requêtes supplémentaires pour récupérer leurs clients. Solutions possibles : JOIN FETCH, @EntityGraph, projection DTO, batch fetching.',
  },
  {
    question: 'Que fait l’annotation @Transactional ?',
    options: {
      a: 'Elle garantit automatiquement une transaction distribuée.',
      b: 'Elle permet d’exécuter une méthode dans un contexte transactionnel.',
      c: 'Elle accélère toutes les requêtes SQL.',
      d: 'Elle empêche toutes les exceptions.',
    },
    explanation:
      'Spring ouvre, valide ou annule une transaction selon le résultat de l’exécution et les règles de rollback. Par défaut, rollback sur RuntimeException et Error, mais pas sur toutes les exceptions checked.',
  },
  {
    question: 'Quel est le rôle principal de Spring Data JPA ?',
    options: {
      a: 'Remplacer Hibernate obligatoirement.',
      b: 'Simplifier l’accès aux données avec des repositories et des abstractions.',
      c: 'Remplacer le serveur SQL.',
      d: 'Gérer uniquement les transactions.',
    },
    explanation:
      'Spring Data JPA permet de créer des repositories avec des méthodes telles que findByEmail() ou findAll() sans écrire systématiquement les requêtes.',
  },
  {
    question: 'Quelle affirmation concernant les classes sealed introduites en Java 17 est correcte ?',
    options: {
      a: 'Elles interdisent toute forme d’héritage.',
      b: 'Elles permettent de contrôler les classes autorisées à les étendre ou les interfaces autorisées à les implémenter.',
      c: 'Elles remplacent les interfaces.',
      d: 'Elles sont obligatoirement abstraites.',
    },
    explanation:
      'Une classe sealed liste les sous-types autorisés. Ces sous-classes doivent respecter les règles final, sealed ou non-sealed.',
  },
  {
    question:
      'Pourquoi utiliser une sealed interface plutôt qu’un enum pour représenter des statuts ?',
    options: {
      a: 'Parce qu’une interface sealed consomme moins de mémoire.',
      b: 'Parce qu’elle permet de représenter des variantes ayant chacune des données et comportements différents.',
      c: 'Parce qu’un enum ne peut pas avoir de méthodes.',
      d: 'Parce qu’une interface sealed permet l’héritage multiple des classes.',
    },
    explanation:
      'Un enum convient très bien pour des valeurs simples. Une sealed interface est intéressante lorsque chaque statut représente un type métier différent avec ses propres données.',
  },
  {
    question: `Quel est le comportement de @Transactional dans le cas suivant ?

@Transactional
public void process() {
    try {
        operation();
    } catch (RuntimeException e) {
        log.error("Erreur", e);
    }
}`,
    options: {
      a: 'La transaction est obligatoirement annulée.',
      b: 'La transaction peut être validée malgré l’erreur capturée.',
      c: 'Spring annule toujours la transaction lorsqu’une exception est levée, même capturée.',
      d: 'Le code ne compile pas.',
    },
    explanation:
      'Si l’exception est interceptée et ne marque pas la transaction comme rollback-only, Spring peut valider la transaction.',
  },
  {
    question: 'Quel code HTTP correspond normalement à la création réussie d’une ressource ?',
    options: {
      a: '200 OK',
      b: '201 Created',
      c: '204 No Content',
      d: '301 Moved Permanently',
    },
    explanation: '201 Created est particulièrement adapté à une création réussie via POST.',
  },
  {
    question: 'Que signifie le code HTTP 404 ?',
    options: {
      a: 'Une erreur serveur.',
      b: 'Une ressource introuvable.',
      c: 'Un conflit de données.',
      d: 'Une authentification refusée.',
    },
    explanation: '404 Not Found signifie que la ressource demandée n’existe pas ou n’est pas disponible à cette URI.',
  },
  {
    question: 'Dans quel cas utilise-t-on généralement le code HTTP 409 ?',
    options: {
      a: 'Lorsque l’utilisateur n’est pas authentifié.',
      b: 'Lorsque la ressource demandée n’existe pas.',
      c: 'Lorsqu’une requête entre en conflit avec l’état actuel de la ressource.',
      d: 'Lorsqu’une requête est exécutée avec succès.',
    },
    explanation:
      'Exemple : tentative de création d’un utilisateur avec un email déjà utilisé, lorsque cette situation constitue un conflit métier.',
  },
  {
    question:
      'Quel code HTTP correspond à une requête réussie sans contenu dans la réponse ?',
    options: {
      a: '201',
      b: '204',
      c: '409',
      d: '500',
    },
    explanation:
      '204 signifie que la requête a réussi sans corps de réponse. GET retourne généralement 200 avec un contenu ou 404 si la ressource est introuvable.',
  },
  {
    question: 'Quelle est la différence entre == et === en JavaScript ?',
    options: {
      a: 'Aucune différence.',
      b: '== compare avec conversion de type éventuelle, tandis que === compare sans conversion implicite.',
      c: '=== compare uniquement les références.',
      d: '== est plus strict que ===.',
    },
    explanation: '5 == "5" vaut true, tandis que 5 === "5" vaut false.',
  },
  {
    question: 'Quelle affirmation concernant var, let et const est correcte ?',
    options: {
      a: 'var possède une portée de bloc.',
      b: 'let et const possèdent une portée de bloc.',
      c: 'const empêche toute modification des propriétés d’un objet.',
      d: 'var ne peut pas être redéclaré.',
    },
    explanation:
      'var est limité à la fonction ou à la portée globale. let et const sont limités au bloc. const interdit la réaffectation, pas la mutation d’un objet.',
  },
  {
    question: 'Quel est le rôle de l’Event Loop en JavaScript ?',
    options: {
      a: 'Exécuter toutes les opérations simultanément sur plusieurs threads JavaScript.',
      b: 'Gérer l’exécution des callbacks et des tâches asynchrones.',
      c: 'Remplacer les Promises.',
      d: 'Bloquer le thread principal pendant les requêtes HTTP.',
    },
    explanation:
      'L’Event Loop coordonne la Call Stack, les microtasks (Promises) et les macrotasks (timers, événements, etc.).',
  },
  {
    question: 'Quelle est la différence entre any, unknown et never en TypeScript ?',
    options: {
      a: 'Ils ont exactement le même comportement.',
      b: 'any désactive les vérifications, unknown impose une vérification avant utilisation, never représente une valeur qui ne peut jamais exister.',
      c: 'unknown est identique à never.',
      d: 'never accepte tous les types.',
    },
    explanation:
      'any : liberté maximale, sécurité minimale. unknown : type inconnu, nécessite un contrôle. never : absence de valeur possible, notamment pour les fonctions qui ne retournent jamais.',
  },
  {
    question: 'Quelle est la différence entre INNER JOIN et LEFT JOIN ?',
    options: {
      a: 'Ils produisent toujours les mêmes résultats.',
      b: 'INNER JOIN retourne les correspondances, LEFT JOIN conserve toutes les lignes de la table gauche.',
      c: 'LEFT JOIN retourne uniquement les lignes sans correspondance.',
      d: 'INNER JOIN conserve toutes les lignes de la table gauche.',
    },
    explanation:
      'Avec LEFT JOIN, les colonnes de la table droite valent NULL lorsqu’aucune correspondance n’existe.',
  },
  {
    question: 'Quelle est la différence entre WHERE et HAVING ?',
    options: {
      a: 'WHERE filtre après GROUP BY, HAVING avant.',
      b: 'WHERE filtre les lignes avant l’agrégation, HAVING filtre les groupes après l’agrégation.',
      c: 'Les deux sont identiques.',
      d: 'HAVING fonctionne uniquement avec ORDER BY.',
    },
    explanation:
      'Exemple : WHERE active = true filtre les lignes d’abord ; HAVING COUNT(*) > 5 filtre les groupes après GROUP BY.',
  },
  {
    question: 'Quelle est la différence entre Git Merge et Git Rebase ?',
    options: {
      a: 'Merge supprime les commits, Rebase les conserve.',
      b: 'Merge intègre une branche en préservant généralement l’historique des branches ; Rebase rejoue les commits sur une nouvelle base.',
      c: 'Les deux sont strictement identiques.',
      d: 'Rebase fusionne obligatoirement deux branches sans conflit.',
    },
    explanation:
      'Merge conserve la topologie de l’historique, tandis que Rebase permet souvent d’obtenir un historique linéaire. Attention : éviter de rebaser des commits déjà partagés sans coordination.',
  },
  {
    question: 'Comment fusionner les 6 derniers commits en un seul commit ?',
    options: {
      a: 'git merge HEAD~6',
      b: 'git rebase -i HEAD~6',
      c: 'git reset --hard HEAD~6',
      d: 'git pull --squash',
    },
    explanation:
      'git rebase -i HEAD~6 ouvre l’éditeur : conserver pick pour le premier commit et remplacer les cinq suivants par squash ou s pour regrouper les six commits en un seul.',
  },
  {
    question: 'Quelle est la différence entre map() et flatMap() ?',
    options: {
      a: 'map() filtre les éléments, flatMap() les trie.',
      b: 'map() transforme chaque élément, flatMap() transforme et aplatit les résultats.',
      c: 'Ils sont identiques.',
      d: 'flatMap() fonctionne uniquement avec les listes d’entiers.',
    },
    explanation:
      'Par exemple, List.of(List.of("Ali","Sara"), List.of("Amine","Yassine")).stream().flatMap(List::stream) produit une seule liste contenant les quatre noms.',
  },
  {
    question: 'Comment une HashMap retrouve-t-elle une valeur à partir d’une clé ?',
    options: {
      a: 'Elle parcourt toujours toutes les entrées.',
      b: 'Elle utilise le hashCode() pour déterminer un bucket, puis equals() pour identifier la clé correspondante.',
      c: 'Elle utilise uniquement equals().',
      d: 'Elle utilise uniquement la position de l’objet en mémoire.',
    },
    explanation:
      'HashMap utilise le hash de la clé pour localiser un bucket, puis compare les clés en cas de collision.',
  },
  {
    question:
      'Quelle est la différence entre une opération intermédiaire et une opération terminale dans un Stream Java ?',
    options: {
      a: 'Une opération intermédiaire déclenche immédiatement le traitement.',
      b: 'Une opération terminale retourne toujours un Stream.',
      c: 'Une opération intermédiaire retourne généralement un Stream et une opération terminale déclenche l’exécution du pipeline.',
      d: 'Il n’y a aucune différence.',
    },
    explanation:
      'Intermédiaires : filter(), map(), sorted(). Terminales : collect(), toList(), count(), forEach().',
  },
  {
    question: 'Quel est l’avantage principal d’un record en Java 17 ?',
    options: {
      a: 'Il permet de créer des classes abstraites.',
      b: 'Il simplifie la création de classes principalement destinées à transporter des données.',
      c: 'Il permet l’héritage multiple.',
      d: 'Il remplace toutes les classes Lombok.',
    },
    explanation:
      'public record User(Long id, String name) {} : Java génère automatiquement le constructeur canonique, les accesseurs, equals(), hashCode() et toString().',
  },
  {
    question: 'Quelle est la différence entre Record et Lombok ?',
    options: {
      a: 'Lombok est une fonctionnalité native du langage Java.',
      b: 'Record est une fonctionnalité du langage Java, tandis que Lombok utilise notamment des annotations et du traitement de compilation pour générer du code.',
      c: 'Record permet l’héritage de plusieurs classes.',
      d: 'Lombok remplace obligatoirement les records.',
    },
    explanation:
      'Record est particulièrement adapté aux objets de données immuables superficiellement. Lombok peut générer du code pour différentes catégories de classes.',
  },
  {
    question: 'Quel est l’objectif principal des Virtual Threads introduits en Java 21 ?',
    options: {
      a: 'Augmenter automatiquement la fréquence du processeur.',
      b: 'Faciliter la gestion d’un grand nombre de tâches concurrentes, notamment bloquantes, avec un coût réduit par rapport aux threads classiques.',
      c: 'Remplacer les threads par des processus système.',
      d: 'Accélérer automatiquement les calculs CPU intensifs.',
    },
    explanation:
      'Les Virtual Threads permettent de gérer efficacement un grand nombre de tâches concurrentes, notamment des opérations I/O bloquantes. Ils ne rendent pas automatiquement les traitements CPU plus rapides.',
  },
  {
    question: 'Quel est le rôle principal d’Apache Kafka ?',
    options: {
      a: 'Remplacer une base de données relationnelle.',
      b: 'Fournir une plateforme distribuée de streaming d’événements.',
      c: 'Gérer les dépendances Maven.',
      d: 'Remplacer Spring Security.',
    },
    explanation:
      'Kafka permet de publier, stocker et consommer des événements de manière distribuée.',
  },
  {
    question: 'Dans Kafka, à quoi sert un Consumer Group ?',
    options: {
      a: 'À supprimer automatiquement les messages consommés.',
      b: 'À répartir la consommation des partitions entre plusieurs consommateurs d’un même groupe.',
      c: 'À fusionner plusieurs topics.',
      d: 'À empêcher plusieurs applications de lire un topic.',
    },
    explanation:
      'Dans un même groupe, une partition est attribuée à un seul consommateur à la fois. Plusieurs groupes peuvent lire indépendamment le même topic.',
  },
  {
    question: 'Quel est le principal objectif de l’architecture hexagonale ?',
    options: {
      a: 'Supprimer les bases de données.',
      b: 'Isoler le domaine métier des infrastructures et des technologies externes.',
      c: 'Remplacer les microservices.',
      d: 'Mettre toute la logique métier dans les contrôleurs REST.',
    },
    explanation: 'Elle repose sur le domaine au centre, des ports et des adaptateurs autour.',
  },
  {
    question: 'Dans une architecture hexagonale, comment tester le domaine métier ?',
    options: {
      a: 'Obligatoirement avec une base de données réelle.',
      b: 'Avec des tests unitaires indépendants des infrastructures, en testant directement les objets et règles métier.',
      c: 'Uniquement avec des tests Selenium.',
      d: 'En démarrant obligatoirement toute l’application Spring Boot.',
    },
    explanation:
      'Le domaine doit être testable indépendamment de Spring, JPA, Kafka ou des API externes.',
  },
  {
    question: 'Comment détecter une faille de sécurité dans une dépendance Java ?',
    options: {
      a: 'Uniquement en analysant les logs applicatifs.',
      b: 'En utilisant des outils SCA comme OWASP Dependency-Check, Snyk ou GitLab Dependency Scanning.',
      c: 'En supprimant toutes les dépendances Maven.',
      d: 'En utilisant uniquement JUnit.',
    },
    explanation:
      'Ces outils analysent les dépendances et leurs versions afin d’identifier les vulnérabilités connues (CVE). Il faut également maintenir les dépendances et analyser les alertes.',
  },
  {
    question: 'Quelle est la bonne représentation de la pyramide des tests ?',
    options: {
      a: 'Beaucoup de tests E2E, peu de tests unitaires.',
      b: 'Beaucoup de tests unitaires, moins de tests d’intégration et encore moins de tests E2E.',
      c: 'Uniquement des tests d’intégration.',
      d: 'Tous les types de tests doivent être en quantité égale.',
    },
    explanation:
      'Tests unitaires : rapides, nombreux, isolés. Tests d’intégration : interactions entre composants. Tests E2E : parcours complets, plus coûteux et généralement moins nombreux.',
  },
];

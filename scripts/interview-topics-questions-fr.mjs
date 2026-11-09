export const interviewTopicsFrench = [
  {
    question:
      'Pourquoi Java est-il souvent décrit comme indépendant de la plateforme, et quel est le rôle de la JVM et du JRE ?',
    options: {
      a: 'Les fichiers source .java s’exécutent nativement sur chaque CPU ; la JVM n’est qu’un outil d’empaquetage',
      b: 'javac produit du bytecode exécutable par toute JVM compatible ; le JRE est l’environnement d’exécution qui fournit une JVM et les bibliothèques standard',
      c: 'Le JRE compile Java en code machine à la construction, donc aucune JVM n’est nécessaire à l’exécution',
      d: 'L’indépendance de plateforme signifie qu’un seul binaire tourne sur chaque OS sans machine virtuelle',
    },
    explanation:
      '« Write once, run anywhere » repose sur le bytecode plus une JVM par plateforme. Le JRE regroupe historiquement la JVM et les bibliothèques pour exécuter les programmes ; le JDK ajoute des outils comme le compilateur.',
  },
  {
    question: 'De quoi un ClassLoader est-il responsable ?',
    options: {
      a: 'Allouer la mémoire du tas pour chaque nouvelle instance d’objet',
      b: 'Trouver, charger et définir le bytecode des classes pour que la JVM puisse créer des objets Class',
      c: 'Compiler les fichiers source .java au démarrage de l’application',
      d: 'Planifier les threads sur les cœurs CPU',
    },
    explanation:
      'Les ClassLoaders localisent les ressources de classes ou de modules, lisent le bytecode et définissent les classes. L’instanciation, le GC et l’ordonnancement des threads sont d’autres responsabilités de la JVM.',
  },
  {
    question: 'Quelle est la distinction habituelle entre ClassNotFoundException et NoClassDefFoundError ?',
    options: {
      a: 'Ce sont des alias ; les deux sont des exceptions checked levées uniquement par Class.forName',
      b: 'ClassNotFoundException est levée quand le code charge explicitement une classe introuvable ; NoClassDefFoundError signifie qu’une classe présente à la compilation ne peut pas être chargée à l’exécution',
      c: 'NoClassDefFoundError est checked et doit être déclarée ; ClassNotFoundException est une Error',
      d: 'ClassNotFoundException ne survient que pour des types primitifs manquants',
    },
    explanation:
      'Les chargements réflexifs explicites lèvent ClassNotFoundException. NoClassDefFoundError apparaît typiquement quand la JVM a besoin d’une classe compilée avec succès mais absente ou en échec d’initialisation à l’exécution.',
  },
  {
    question: 'Concernant le String pool et intern(), quelle affirmation est correcte ?',
    options: {
      a: 'Chaque new String("x") renvoie toujours la même instance poolée que le littéral "x"',
      b: 'Les littéraux String sont internés ; intern() renvoie l’instance canonique du pool pour une séquence de caractères égale',
      c: 'intern() alloue toujours une toute nouvelle String sur le tas et ne réutilise jamais le contenu poolé',
      d: 'Le String pool stocke des char[] mutables partagés entre toutes les chaînes sans copie',
    },
    explanation:
      'Les littéraux et constantes de compilation sont internés. Appeler intern() sur une String construite renvoie l’instance poolée égale (ou en ajoute une). new String(...) crée un objet distinct sauf internement.',
  },
  {
    question: 'Que signifie l’encapsulation en POO ?',
    options: {
      a: 'Rendre chaque champ public pour que les appelants lisent et écrivent l’état directement',
      b: 'Regrouper l’état avec les opérations qui l’utilisent et restreindre l’accès externe direct aux détails internes',
      c: 'Permettre à une classe d’étendre plusieurs classes concrètes',
      d: 'Convertir chaque méthode en utilitaire static',
    },
    explanation:
      'L’encapsulation cache la représentation derrière une interface contrôlée (souvent champs private et méthodes public), ce qui protège les invariants et permet de faire évoluer l’implémentation en sécurité.',
  },
  {
    question: 'Que signifie implémenter java.io.Serializable ?',
    options: {
      a: 'La classe peut être écrite via ObjectOutputStream grâce au mécanisme de sérialisation Java (interface marqueur)',
      b: 'La classe doit redéfinir les méthodes abstraites serialize() et deserialize()',
      c: 'Les instances sont automatiquement persistées dans une base relationnelle',
      d: 'La classe devient immuable et thread-safe',
    },
    explanation:
      'Serializable est une interface marqueur qui active la sérialisation Java par défaut. Cela n’implique ni persistance JPA, ni immuabilité, ni méthodes serialize obligatoires.',
  },
  {
    question:
      'Quelle affirmation sur les classes nested et top-level static, final ou private est correcte ?',
    options: {
      a: 'Une classe top-level peut être private ou static comme un champ',
      b: 'Une classe top-level peut être final ; les classes nested peuvent être static ou private ; une classe top-level ne peut pas être private ni static',
      c: 'Aucune classe en Java ne peut jamais être déclarée final',
      d: 'Seules les interfaces peuvent être static ; les classes jamais',
    },
    explanation:
      'Les classes top-level sont public ou package-private et peuvent être final/abstract/sealed, mais pas private ni static. Les classes nested (membres) peuvent être static et private.',
  },
  {
    question: 'Quelle est la superclasse de toutes les exceptions et erreurs en Java ?',
    options: {
      a: 'Exception',
      b: 'RuntimeException',
      c: 'Throwable',
      d: 'Error',
    },
    explanation:
      'Throwable est la racine. Exception et Error étendent Throwable ; RuntimeException étend Exception.',
  },
  {
    question: 'En quoi Error et Exception diffèrent-elles dans leur intention ?',
    options: {
      a: 'Error représente des défaillances JVM/système graves rarement récupérées dans le code applicatif ; Exception représente des conditions que l’application peut attraper et traiter',
      b: 'Error est checked et Exception est toujours unchecked',
      c: 'Exception est uniquement pour les IO ; Error uniquement pour NullPointerException',
      d: 'Elles sont identiques ; les noms sont des synonymes historiques',
    },
    explanation:
      'Les Error (OutOfMemoryError, StackOverflowError, …) signalent des situations anormales rarement gérées. Les Exception modélisent des échecs récupérables ou attendus ; certaines sont checked, d’autres non.',
  },
  {
    question: 'Quelle affirmation sur les exceptions checked vs unchecked est correcte ?',
    options: {
      a: 'Toutes les sous-classes de Throwable doivent apparaître dans une clause throws',
      b: 'Les exceptions checked (hors RuntimeException/Error) doivent être attrapées ou déclarées ; RuntimeException et Error sont unchecked',
      c: 'Seule Error est checked ; Exception est toujours unchecked',
      d: 'Les exceptions checked ne sont vérifiées que par le JIT à l’exécution',
    },
    explanation:
      'Le compilateur impose la gestion des exceptions checked. RuntimeException, Error et leurs sous-classes sont unchecked.',
  },
  {
    question: 'Que signifie la propagation des exceptions ?',
    options: {
      a: 'La JVM duplique automatiquement chaque exception sur chaque thread',
      b: 'Si une méthode n’attrape pas une exception levée, elle se termine et l’exception continue vers l’appelant jusqu’à être attrapée ou jusqu’à la fin du thread',
      c: 'Les exceptions sont converties en codes de retour avant de quitter une méthode',
      d: 'La propagation ne s’applique qu’aux checked ; les unchecked s’arrêtent immédiatement',
    },
    explanation:
      'Les throwables non gérés déroulent la pile d’appels. finally/try-with-resources s’exécutent pendant ce déroulement. Les unchecked se propagent de la même façon.',
  },
  {
    question: 'Qu’est-ce que l’autoboxing en Java ?',
    options: {
      a: 'La conversion automatique entre primitives et leurs wrappers, par ex. int ↔ Integer',
      b: 'L’empaquetage automatique de plusieurs classes dans un JAR à la compilation',
      c: 'La conversion des tableaux en ArrayList sans appel d’API',
      d: 'L’inlining des méthodes virtuelles en appels static',
    },
    explanation:
      'Le compilateur insère des conversions valueOf/xxxValue entre primitives et wrappers. Attention au unboxing de null (NPE) et aux surprises d’identité avec le cache d’Integer.',
  },
  {
    question: 'Quel ensemble résume le mieux les fonctionnalités majeures de Java 8 ?',
    options: {
      a: 'Exceptions checked, méthodes synchronized et AWT uniquement',
      b: 'Lambdas, interfaces fonctionnelles, Streams API, et méthodes default/static sur les interfaces',
      c: 'Records, sealed classes et pattern matching pour switch uniquement',
      d: 'Modules (JPMS) et var pour les variables locales uniquement',
    },
    explanation:
      'Java 8 a introduit les lambdas, java.util.function, les Streams et les méthodes default/static d’interface. Records/sealed/pattern matching et les modules sont venus plus tard.',
  },
  {
    question: 'Pourquoi une interface Java ne peut-elle pas déclarer de constructeur ?',
    options: {
      a: 'Les interfaces peuvent être instanciées directement, donc les constructeurs seraient redondants',
      b: 'Les interfaces ne sont pas des types instanciables avec un état d’instance initialisé via constructeurs ; la construction appartient aux classes',
      c: 'Les constructeurs ne sont autorisés que sur les enums, jamais sur les classes ou interfaces',
      d: 'La JVM interdit tout membre de type méthode sur les interfaces',
    },
    explanation:
      'Les interfaces définissent des contrats (et depuis Java 8 des méthodes default/static/private) mais ne sont pas construites comme des classes. Les classes d’implémentation fournissent les constructeurs.',
  },
  {
    question:
      'Pour parcourir un ArrayList de taille n, comment se comparent typiquement une boucle for indexée classique et un for-each ?',
    options: {
      a: 'for-each est toujours asymptotiquement plus lent car il copie d’abord la liste',
      b: 'Les deux sont en O(n) ; for-each utilise l’iterator (ou un parcours de tableau), tandis qu’une boucle indexée utilise get(i)—les perfs sont souvent proches pour ArrayList, avec des micro-différences selon le JIT et le motif d’accès',
      c: 'Les boucles indexées sont interdites sur ArrayList ; seul for-each compile',
      d: 'for-each s’exécute en O(1) quelle que soit la taille de la liste',
    },
    explanation:
      'Les deux visitent chaque élément une fois. Préférez la clarté sauf si un profilage montre un hotspot ; une modification structurelle pendant for-each risque toujours ConcurrentModificationException.',
  },
  {
    question:
      'Vous devez faire imprimer 1,2,3,4,5 dans cet ordre par cinq threads. Quelle approche est appropriée ?',
    options: {
      a: 'Démarrer cinq threads sans coordination ; l’ordonnanceur garantit l’ordre numérique',
      b: 'Coordonner avec wait/notify, locks, sémaphores ou un executor mono-thread pour que chaque impression n’ait lieu qu’après le tour précédent',
      c: 'Marquer chaque méthode run() synchronized ; cela seul force un ordre numérique global entre threads',
      d: 'Utiliser des compteurs volatile int sans attente ; la visibilité seule ordonne les impressions',
    },
    explanation:
      'L’ordre de démarrage des threads ne définit pas l’ordre d’exécution. Le séquencement exige un passage de témoin explicite (conditions, sémaphores, Phaser, files, ou exécution série).',
  },
  {
    question: 'En quoi volatile et AtomicInteger diffèrent-ils ?',
    options: {
      a: 'volatile assure la visibilité des lectures/écritures du champ ; AtomicInteger offre aussi des mises à jour composées atomiques comme incrementAndGet',
      b: 'volatile rend ++i atomique pour les champs int',
      c: 'AtomicInteger n’améliore que la lisibilité ; il a les mêmes garanties qu’un int simple',
      d: 'Les variables volatile ne peuvent pas être lues par d’autres threads',
    },
    explanation:
      'volatile assure visibilité et ordre pour des lectures/écritures individuelles, pas l’atomicité read-modify-write. Les atomics utilisent CAS pour les mises à jour composées.',
  },
  {
    question: 'Quand le pattern Builder est-il un bon choix ?',
    options: {
      a: 'Quand un objet a de nombreux paramètres de construction optionnels et que l’on veut un assemblage lisible et progressif (souvent avec immuabilité)',
      b: 'Quand on a besoin d’exactement une instance d’une classe pour toute la JVM',
      c: 'Quand deux interfaces doivent être adaptées l’une à l’autre',
      d: 'Quand on a seulement besoin d’itérer une collection',
    },
    explanation:
      'Builder remplace les constructeurs télescopiques par une API fluide qui peut valider et produire un objet complet (Lombok @Builder, StringBuilder, et de nombreux builders métier).',
  },
  {
    question: 'Quelle préoccupation d’implémentation Singleton est la plus juste en Java ?',
    options: {
      a: 'Un champ public static non final est toujours initialisé paresseusement et thread-safe sans autre soin',
      b: 'Les singletons lazy naïfs peuvent courir des courses ; les singletons enum ou static-holder / formes correctement synchronisées évitent les instances dupliquées',
      c: 'Les singletons sont fournis automatiquement par la JVM pour chaque classe',
      d: 'Implémenter Cloneable est requis pour un Singleton correct',
    },
    explanation:
      'Le double-checked locking nécessite volatile ; les singletons enum et les holders à initialisation à la demande sont des approches sûres courantes. Les beans Spring « singleton » par scope sont un autre mécanisme.',
  },
  {
    question: 'Quelle est l’idée centrale du pattern Factory ?',
    options: {
      a: 'Les appelants créent les classes concrètes avec new partout pour maximiser le couplage',
      b: 'La création d’objets est déléguée à une méthode/classe qui renvoie des produits (souvent derrière une interface) pour que les appelants dépendent d’abstractions',
      c: 'Chaque objet doit être cloné depuis un prototype stocké dans une Map',
      d: 'Tous les constructeurs doivent être public et sans argument',
    },
    explanation:
      'Les simple factory methods, Factory Method et Abstract Factory encapsulent la création pour que les types de produits puissent varier sans réécrire les clients.',
  },
  {
    question: 'Pourquoi les équipes utilisent-elles les design patterns ?',
    options: {
      a: 'Ils fournissent un vocabulaire partagé et des structures éprouvées pour des problèmes de conception récurrents, améliorant communication et maintenabilité s’ils sont appliqués avec discernement',
      b: 'Ils remplacent le besoin de tests et de revue de code',
      c: 'Chaque classe doit implémenter exactement un pattern GoF sinon elle ne compile pas',
      d: 'Les patterns garantissent à eux seuls des performances runtime optimales',
    },
    explanation:
      'Les patterns documentent des compromis pour des problèmes courants. Les surutiliser ajoute du cérémonial ; les sous-utiliser laisse des conceptions ad hoc difficiles à discuter.',
  },
  {
    question: 'Qu’est-ce que Spring Boot et pourquoi est-il largement utilisé ?',
    options: {
      a: 'Une JVM de remplacement qui exécute du XML Spring sans bytecode',
      b: 'Une boîte à outils opinionnée sur Spring qui auto-configure les applications, embarque des serveurs et réduit le boilerplate pour livrer plus vite des apps de production',
      c: 'Un moteur de base de données livré dans spring-boot-starter-web',
      d: 'Un framework UI qui interdit l’injection de dépendances',
    },
    explanation:
      'Boot applique l’auto-configuration, les starters et des défauts Actuator tout en utilisant le conteneur Spring. On peut surcharger les conventions au besoin.',
  },
  {
    question: 'En quoi @Component et @Bean diffèrent-ils typiquement ?',
    options: {
      a: '@Component marque une classe pour le component scanning ; @Bean déclare un objet produit par une méthode dans une classe @Configuration',
      b: '@Bean est uniquement pour les controllers ; @Component uniquement pour les repositories',
      c: 'Ce sont des annotations identiques avec des noms différents',
      d: '@Component désactive l’injection de dépendances pour ce type',
    },
    explanation:
      'Les stéréotypes (@Component/@Service/…) enregistrent la classe annotée. Les méthodes @Bean créent et configurent des instances (souvent de types tiers) en configuration Java.',
  },
  {
    question: 'À quoi sert @Qualifier lors de l’injection ?',
    options: {
      a: 'Choisir un bean précis lorsque plusieurs candidats partagent le même type',
      b: 'Marquer un bean comme lazy-initialized exclusivement',
      c: 'Désactiver Spring Security pour une méthode',
      d: 'Déclarer un nouveau fichier de property source',
    },
    explanation:
      'Quand plusieurs beans implémentent la même interface, @Qualifier (ou @Primary) lève l’ambiguïté sur la dépendance à injecter.',
  },
  {
    question: 'Quelle est la différence entre @Controller et @RestController ?',
    options: {
      a: '@RestController est @Controller plus @ResponseBody sur chaque handler, renvoyant des données (souvent JSON) plutôt qu’un nom de vue par défaut',
      b: '@Controller ne peut renvoyer que du JSON ; @RestController ne renvoie que des vues HTML',
      c: 'Ils se comportent de façon identique dans toutes les versions de Spring',
      d: '@RestController désactive les mappings HTTP',
    },
    explanation:
      '@Controller est le stéréotype des contrôleurs MVC (souvent avec view resolvers). @RestController compose @Controller et @ResponseBody pour les API REST.',
  },
  {
    question: 'En Mockito, en quoi @Mock et @InjectMocks diffèrent-ils ?',
    options: {
      a: '@Mock crée un collaborateur mock ; @InjectMocks crée la classe sous test et y injecte les mocks',
      b: '@InjectMocks crée les mocks ; @Mock crée le vrai système sous test',
      c: 'Les deux annotations démarrent un contexte Spring Boot complet',
      d: '@Mock est requis pour JUnit 5 ; @InjectMocks ne fonctionne qu’avec TestNG',
    },
    explanation:
      'Utilisez @Mock/@MockBean pour les dépendances et @InjectMocks (ou une construction manuelle) pour l’unité sous test. @MockBean de Spring est une idée voisine mais liée au conteneur.',
  },
  {
    question:
      'Dans une app Spring avec contrôle d’accès basé sur les rôles, quelle affirmation est la plus juste ?',
    options: {
      a: 'L’authentification établit l’identité ; l’autorisation (rôles/authorities) décide si cette identité peut effectuer une action',
      b: 'Avoir un rôle quelconque accorde automatiquement chaque méthode HTTP sur chaque URL',
      c: 'Le contrôle par rôles remplace le besoin de HTTPS et de hachage de mots de passe',
      d: 'L’autorisation a toujours lieu avant l’authentification dans les filtres Spring Security',
    },
    explanation:
      'On authentifie d’abord, puis on autorise avec des rôles/permissions sur les méthodes ou les règles HTTP. La sécurité du transport et le stockage des identifiants restent des sujets séparés.',
  },
  {
    question: 'Quelles interfaces sont centrales aux repositories Spring Data JPA ?',
    options: {
      a: 'JdbcTemplate et NamedParameterJdbcTemplate uniquement',
      b: 'Repository / CrudRepository / JpaRepository (et variantes de pagination) qui exposent le CRUD et la dérivation de requêtes',
      c: 'Uniquement EntityManagerFactoryBean sans abstraction repository',
      d: 'Servlet et Filter comme API de persistance',
    },
    explanation:
      'Spring Data définit des marqueurs Repository ; CrudRepository et JpaRepository ajoutent CRUD, pagination et opérations JPA. Les implémentations sont générées à l’exécution.',
  },
  {
    question: 'Comment les exceptions sont-elles couramment gérées dans les controllers Spring MVC/Web ?',
    options: {
      a: 'Uniquement en laissant Tomcat afficher une stack trace brute sans support Spring',
      b: 'Avec @ExceptionHandler, @ControllerAdvice, et des mappings de type ProblemDetail/ResponseEntityExceptionHandler vers des réponses HTTP',
      c: 'En renvoyant null depuis chaque méthode de controller',
      d: 'Les exceptions dans les controllers sont impossibles car Spring enveloppe tous les retours en Optional',
    },
    explanation:
      'Des méthodes @ExceptionHandler locales ou un @ControllerAdvice global mappent les exceptions vers des codes de statut et des corps de façon cohérente.',
  },
  {
    question:
      'Que contrôle la propagation @Transactional de Spring (par ex. REQUIRED vs REQUIRES_NEW) ?',
    options: {
      a: 'Si une méthode appelée rejoint une transaction existante, la suspend et en démarre une nouvelle, ou s’exécute hors transaction',
      b: 'Quel dialecte SQL Hibernate génère pour les SELECT',
      c: 'Le code de statut HTTP renvoyé par les controllers REST',
      d: 'L’ordre des BeanPostProcessors pendant le refresh du contexte',
    },
    explanation:
      'REQUIRED rejoint ou crée une transaction ; REQUIRES_NEW démarre toujours une transaction indépendante (en suspendant l’externe). D’autres niveaux couvrent supports, mandatory, never, not supported, nested.',
  },
  {
    question: 'Quel est le rôle de application.properties (ou application.yml) ?',
    options: {
      a: 'Stocker la configuration externalisée (ports, datasources, feature flags) que Boot lie dans l’Environment',
      b: 'Remplacer le besoin d’une méthode main',
      c: 'Compiler les sources Java dans le dossier resources',
      d: 'Définir exclusivement des templates HTML',
    },
    explanation:
      'Boot charge ces fichiers (plus profils et variables d’environnement) dans l’Environment pour @Value, @ConfigurationProperties et l’auto-configuration.',
  },
  {
    question: 'Comment Spring Data JPA / Hibernate génèrent-ils typiquement le SQL ?',
    options: {
      a: 'Ils ne génèrent jamais de SQL ; les développeurs doivent écrire chaque instruction à la main',
      b: 'L’ORM mappe les opérations et requêtes d’entités (JPQL/Criteria/noms de méthodes) vers du SQL via un dialecte pour la base cible',
      c: 'Le SQL est généré uniquement par le vérifieur JVM avant le chargement des classes',
      d: 'Hibernate envoie du bytecode Java à la base au lieu de SQL',
    },
    explanation:
      'Persist/merge/flush et les API de requête sont traduits en SQL. On peut encore utiliser des requêtes natives ; show_sql / les logs aident à inspecter la sortie.',
  },
  {
    question:
      'Dans une app Spring MVC en couches typique, quelles sont les responsabilités de Controller, Service et Repository ?',
    options: {
      a: 'Controller gère le HTTP ; Service porte la logique métier ; Repository (ou DAO) accède à la persistance',
      b: 'Controller parle à la base ; Repository rend le HTML ; Service se contente de logger',
      c: 'Les trois couches doivent exécuter des requêtes SQL identiques',
      d: 'Repository doit dépendre de Controller pour charger les entités',
    },
    explanation:
      'Séparer web, domaine et persistance clarifie les tests et les évolutions. Les controllers restent fins ; les services orchestrent les règles ; les repositories abstrait le stockage.',
  },
  {
    question:
      'Quelle affirmation sur la pagination et les contraintes d’unicité avec JPA/Hibernate est correcte ?',
    options: {
      a: 'La pagination Pageable/LIMIT-OFFSET page les résultats ; les contraintes unique (@Column(unique)/@UniqueConstraint) imposent l’unicité dans le schéma',
      b: 'Les contraintes unique remplacent le besoin de clés primaires',
      c: 'La pagination ne peut se faire qu’en chargeant toutes les lignes en mémoire puis en faisant un subList',
      d: 'Hibernate ignore les contraintes unique et ne crée jamais d’index DB pour elles',
    },
    explanation:
      'Pageable de Spring Data s’intègre aux méthodes de requête. Les contraintes d’unicité appartiennent à la base ; l’ORM peut les émettre à la génération de schéma, mais les BDD de production doivent garder l’intégrité.',
  },
  {
    question: 'Comment fonctionne HashMap en interne, à haut niveau ?',
    options: {
      a: 'Il stocke les entrées dans un arbre équilibré indexé uniquement par temps d’insertion',
      b: 'Il hache les clés dans des buckets (tableau de nœuds/arbres) ; equals résout les collisions dans un bucket, avec redimensionnement selon le load factor',
      c: 'Il utilise uniquement une recherche linéaire sur une ArrayList d’entrées',
      d: 'Il exige que les clés implémentent Comparable sinon l’insertion échoue',
    },
    explanation:
      'hashCode sélectionne un bucket ; equals trouve la clé correspondante. Les gros buckets en collision peuvent être treeifiés. Une clé null est autorisée une fois dans HashMap.',
  },
  {
    question: 'En quoi HashMap, Hashtable et ConcurrentHashMap diffèrent-ils ?',
    options: {
      a: 'HashMap n’est pas synchronisé et autorise une clé null ; Hashtable est legacy synchronisé et refuse les null ; ConcurrentHashMap est concurrent sans verrouiller toute la map à chaque accès',
      b: 'Les trois sont identiques ; les noms ne sont que du marketing',
      c: 'Seul Hashtable autorise les clés null ; HashMap les interdit',
      d: 'ConcurrentHashMap ne peut plus être mis à jour après construction',
    },
    explanation:
      'Préférez HashMap en usage mono-thread, ConcurrentHashMap pour les maps concurrentes, et évitez le nouveau code Hashtable.',
  },
  {
    question: 'Quand choisir List, Set ou Map ?',
    options: {
      a: 'List : séquence ordonnée (doublons OK) ; Set : éléments uniques ; Map : associations clé → valeur',
      b: 'Set remplace Map pour tous les cas clé/valeur',
      c: 'Map interdit toujours les valeurs en double',
      d: 'List ne préserve jamais l’ordre de rencontre',
    },
    explanation:
      'Choisissez l’abstraction qui correspond aux accès : index/ordre (List), unicité (Set) ou recherche par clé (Map).',
  },
  {
    question: 'Qu’est-ce qui caractérise LinkedList dans java.util ?',
    options: {
      a: 'Une liste doublement chaînée implémentant List et Deque ; bonne pour des insertions fréquentes aux extrémités, accès indexé aléatoire moins bon qu’ArrayList',
      b: 'Un tableau redimensionnable comme ArrayList avec un accès indexé O(1) toujours plus rapide que les tableaux',
      c: 'Une map concurrente de clés string',
      d: 'Un ensemble trié d’éléments uniques',
    },
    explanation:
      'LinkedList brille comme deque. Pour la plupart des listes à accès aléatoire, ArrayList est préférable.',
  },
  {
    question: 'Que définit l’interface Comparable ?',
    options: {
      a: 'Un ordre naturel via compareTo, utilisé par les collections triées et Arrays/Collections.sort',
      b: 'L’égalité uniquement ; elle remplace equals et hashCode',
      c: 'Une façon de cloner profondément des objets',
      d: 'L’itération thread-safe de toute Collection',
    },
    explanation:
      'Comparable est l’ordre naturel du type. Comparator fournit des ordres externes. La cohérence avec equals est recommandée pour les sets/maps triés.',
  },
  {
    question: 'Quelle affirmation sur hashCode est correcte ?',
    options: {
      a: 'hashCode doit être cohérent avec equals : des objets égaux doivent avoir le même hash code ; des objets inégaux devraient idéalement se répartir dans les buckets',
      b: 'hashCode doit être unique pour chaque objet de la JVM',
      c: 'Changer hashCode après avoir inséré un objet comme clé HashMap est toujours sûr',
      d: 'hashCode n’est utilisé que par TreeMap',
    },
    explanation:
      'Les collections basées sur le hachage s’appuient sur le contrat equals/hashCode. Des clés mutables dont les champs entrent dans hashCode peuvent « disparaître » de la map.',
  },
  {
    question: 'À quoi sert l’interface Iterable ?',
    options: {
      a: 'Elle expose iterator() (et forEach) pour qu’un type puisse être utilisé dans la boucle for améliorée',
      b: 'Elle marque une classe comme sérialisable en JSON uniquement',
      c: 'Elle impose le support de get(int) en accès aléatoire',
      d: 'Elle remplace Collection et interdit les iterators',
    },
    explanation:
      'for (T t : iterable) se désucre en usage d’iterator. Collection étend Iterable ; des types personnalisés peuvent aussi l’implémenter.',
  },
  {
    question: 'À quoi sert principalement l’API Streams ?',
    options: {
      a: 'Remplacer InputStream/OutputStream pour tous les IO fichiers',
      b: 'Déclarer des opérations en masse sur des séquences d’éléments avec des opérations intermédiaires et terminales (filter/map/collect, …)',
      c: 'Gérer exclusivement les connexions JDBC',
      d: 'Démarrer des processus système',
    },
    explanation:
      'java.util.stream permet des pipelines de style fonctionnel sur collections, tableaux, générateurs et lignes IO—distinct des flux java.io.',
  },
  {
    question: 'En quoi les opérations intermédiaires et terminales d’un Stream diffèrent-elles ?',
    options: {
      a: 'Les ops intermédiaires (map/filter/…) sont lazy et renvoient un stream ; une op terminale (collect/forEach/…) déclenche l’exécution et produit un résultat ou un effet de bord',
      b: 'Les ops terminales sont lazy ; les intermédiaires s’exécutent toujours immédiatement à l’écriture',
      c: 'Il n’y a aucune différence ; les deux mutent toujours la collection source',
      d: 'Les ops intermédiaires doivent être le dernier appel d’un pipeline',
    },
    explanation:
      'Les pipelines fusionnent et s’exécutent quand une opération terminale commence. Après une op terminale, le stream est consommé.',
  },
  {
    question: 'Quelle est la différence entre map et flatMap sur un Stream ?',
    options: {
      a: 'map applique une fonction 1-pour-1 ; flatMap mappe chaque élément vers un stream (ou optional) et aplatit les résultats en un seul stream',
      b: 'flatMap ne fonctionne que sur les streams primitifs ; map uniquement sur les objets',
      c: 'map aplatit les listes imbriquées ; flatMap ne change jamais la structure',
      d: 'Ce sont des synonymes introduits pour la lisibilité',
    },
    explanation:
      'Utilisez flatMap pour éviter Stream<Stream<T>> (ou pour dérouler Optional). map garde un élément de sortie par entrée.',
  },
  {
    question: 'Streams séquentiels vs parallèles — quelle affirmation est correcte ?',
    options: {
      a: 'parallel() peut utiliser le ForkJoinPool commun ; la correction exige des splits sûrs/réductions associatives, et le parallèle n’est pas toujours plus rapide',
      b: 'Les streams parallèles surpassent toujours les séquentiels pour toute charge',
      c: 'Les streams séquentiels sont illégaux après Java 8',
      d: 'parallel() garantit un ordre de rencontre identique au séquentiel pour chaque opération y compris forEach',
    },
    explanation:
      'Le parallélisme aide les charges CPU-bound, splittables et volumineuses avec des ops indépendantes. Le surcoût et la contention peuvent ralentir les petits pipelines ; préférez le séquentiel par défaut.',
  },
  {
    question: 'Qu’est-ce qu’une interface fonctionnelle, et peut-elle déclarer des méthodes default ou static ?',
    options: {
      a: 'Une interface avec exactement une méthode abstraite ; elle peut aussi avoir des méthodes default et static',
      b: 'Toute interface avec au moins cinq méthodes abstraites',
      c: 'Une classe annotée uniquement avec @Override',
      d: 'Une interface qui interdit entièrement les méthodes default et static',
    },
    explanation:
      '@FunctionalInterface documente le contrat SAM utilisé par les lambdas. Les helpers default/static ne comptent pas dans la unique méthode abstraite.',
  },
  {
    question: 'Lesquels des suivants sont des exemples classiques d’interfaces fonctionnelles ?',
    options: {
      a: 'Runnable, Callable et Comparator (chacune avec une unique méthode abstraite ciblée par les lambdas)',
      b: 'Serializable, Cloneable et RandomAccess uniquement',
      c: 'List, Set et Map',
      d: 'Object, Class et System',
    },
    explanation:
      'Runnable/Callable/Comparator précèdent java.util.function mais sont des types SAM. Les interfaces marqueurs comme Serializable ne sont pas des interfaces fonctionnelles.',
  },
];

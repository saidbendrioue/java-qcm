export const fullstackInterviewFrench = [
  {
    question: 'Quelle est la différence entre == et equals() pour les types référence en Java ?',
    options: {
      a: '== compare le contenu champ par champ ; equals() compare toujours l’identité des objets',
      b: '== compare l’identité des références ; equals() compare l’égalité logique s’il est redéfini, sinon il utilise aussi l’identité',
      c: '== et equals() sont des alias ; le compilateur réécrit == en equals()',
      d: 'equals() compare l’identité ; == compare les valeurs de hashCode()',
    },
    explanation:
      'Pour les références, == teste si les deux côtés pointent vers le même objet. Object.equals utilise l’identité par défaut ; les sous-classes peuvent le redéfinir pour une égalité de valeur.',
  },
  {
    question:
      'Trois services dupliquent la même validation de format d’email. Appliquer DRY correctement signifie en général quelle approche ?',
    options: {
      a: 'Laisser les trois copies pour que chaque équipe fasse évoluer la validation sans coordination',
      b: 'Extraire une règle de validation partagée (fonction, validator ou politique) et la réutiliser partout où la même règle s’applique',
      c: 'Fusionner les trois services en une seule classe pour rendre la duplication impossible',
      d: 'Générer la validation par réflexion à l’exécution pour que le code source ne répète jamais la règle',
    },
    explanation:
      'DRY vise la connaissance dupliquée. Les règles partagées appartiennent à un seul endroit. Fusionner des services ou utiliser la réflexion pour elle-même n’est pas l’objectif de DRY.',
  },
  {
    question:
      'Une fonctionnalité peut être livrée avec une méthode de service simple, ou avec un framework de plugins, trois stratégies et un DSL « pour plus tard ». KISS favorise quel choix ?',
    options: {
      a: 'Livrer d’abord le framework de plugins pour que les variantes futures ne coûtent rien',
      b: 'Préférer la méthode de service simple jusqu’à ce que de vrais besoins justifient plus de structure',
      c: 'Toujours introduire le DSL car les fichiers de configuration sont plus simples que le code',
      d: 'Dupliquer la logique dans chaque appelant pour qu’il n’y ait pas d’abstraction partagée à mal comprendre',
    },
    explanation:
      'KISS privilégie la solution la plus simple qui fonctionne. L’extensibilité spéculative ajoute souvent un coût avant tout besoin réel.',
  },
  {
    question:
      'Le produit demande des formats d’export « peut-être plus tard ». YAGNI suggère quelle stratégie d’implémentation maintenant ?',
    options: {
      a: 'Implémenter tous les formats imaginés derrière des classes strategy inutilisées',
      b: 'Construire uniquement les formats requis aujourd’hui ; ajouter les autres quand un besoin concret arrive',
      c: 'Créer des abstract factories pour tous les formats mais laisser les corps de méthodes vides',
      d: 'Coder CSV en dur uniquement et interdire définitivement tout point d’extension futur',
    },
    explanation:
      'YAGNI signifie ne pas construire de fonctionnalités spéculatives. Garder le design assez ouvert pour étendre plus tard, sans payer des formats inutilisés maintenant.',
  },
  {
    question:
      'Quelle affirmation contraste correctement une classe abstraite et une interface en Java moderne ?',
    options: {
      a: 'Une interface peut déclarer des constructeurs et des champs d’instance comme une classe',
      b: 'Une classe abstraite peut contenir de l’état et des constructeurs ; une classe n’étend qu’au plus une classe mais peut implémenter plusieurs interfaces',
      c: 'Les interfaces ne peuvent pas déclarer de méthodes default ou static depuis Java 8',
      d: 'Une classe peut étendre plusieurs classes abstraites si chacune est package-private',
    },
    explanation:
      'L’héritage simple de classes demeure. Les interfaces peuvent avoir des méthodes default/static/private, mais pas de champs d’instance ni de constructeurs au sens des classes.',
  },
  {
    question:
      'La classe C implémente les interfaces A et B qui déclarent toutes deux default void run(). Que faut-il pour que C compile ?',
    options: {
      a: 'Le compilateur choisit le default de A car A est listé en premier dans implements',
      b: 'C doit redéfinir run() et peut appeler A.super.run() et/ou B.super.run()',
      c: 'Les deux defaults s’exécutent dans l’ordre de déclaration sauf si C est final',
      d: 'C compile seulement si l’un des defaults est marqué abstract',
    },
    explanation:
      'Des defaults en conflit rendent C abstrait tant qu’elle ne fournit pas une redéfinition qui résout explicitement le conflit.',
  },
  {
    question:
      'Deux beans implémentent PaymentGateway. Vous avez besoin de CardGateway dans un constructeur et de WalletGateway dans un autre. Quelle approche est correcte ?',
    options: {
      a: 'Marquer les deux beans @Primary pour que Spring injecte les deux implémentations dans chaque constructeur',
      b: 'Utiliser @Qualifier (ou des annotations qualifier équivalentes) sur les points d’injection qui nécessitent un bean précis',
      c: 'Remplacer @Autowired par @Inject ; l’ambiguïté de type disparaît alors automatiquement',
      d: 'Annoter uniquement le champ avec @Component ; les constructeurs ne peuvent pas choisir parmi les candidats',
    },
    explanation:
      '@Qualifier lève l’ambiguïté par nom de bean ou qualifier personnalisé. @Primary choisit un défaut quand aucun qualifier n’est présent, pas une sélection distincte de deux beans.',
  },
  {
    question: 'Dans Spring, l’Inversion of Control signifie principalement lequel des points suivants ?',
    options: {
      a: 'Les méthodes métier ne doivent jamais appeler d’autres classes ; seul le conteneur peut invoquer du code',
      b: 'La création, le câblage et le cycle de vie des objets sont délégués au conteneur plutôt qu’à des new ad hoc dans les collaborateurs',
      c: 'Toutes les dépendances deviennent des champs static afin qu’il n’existe plus de graphe d’objets',
      d: 'Les exceptions checked sont converties en unchecked par la JVM',
    },
    explanation:
      'L’IoC inverse qui construit et câble les collaborateurs. Le code applicatif appelle toujours ses collaborateurs ; il ne construit pas tout le graphe lui-même.',
  },
  {
    question:
      'Quelle affirmation sur les styles d’injection de dépendances Spring est exacte pour des services de production ?',
    options: {
      a: 'L’injection par constructeur, setter et champ est supportée ; l’injection par constructeur est préférée pour les dépendances obligatoires',
      b: 'Seule l’injection par champ est supportée avec Spring Boot 3',
      c: 'L’injection par setter est obligatoire pour les singletons ; les constructeurs ne marchent que pour les prototypes',
      d: 'Les styles d’injection sont la même chose que les scopes de beans (singleton, prototype, request)',
    },
    explanation:
      'Style d’injection et scope sont orthogonaux. L’injection par constructeur rend les dépendances obligatoires immuables et testables.',
  },
  {
    question:
      'Un ReportService charge des données, génère un PDF et envoie un email. Quelle observation SOLID est la plus juste ?',
    options: {
      a: 'Il viole SRP car il mélange plusieurs raisons de changer : accès aux données, rendu et livraison',
      b: 'Il satisfait SRP car il n’a qu’une seule méthode publique',
      c: 'SOLID interdit les services de plus de 50 lignes, quelles les responsabilités',
      d: 'Il viole LSP car il n’étend pas une classe abstraite',
    },
    explanation:
      'SRP porte sur les raisons de changer, pas sur le nombre de méthodes. Rendu PDF et transport email changent souvent pour des causes différentes des requêtes de rapport.',
  },
  {
    question:
      'Vous chargez 50 entités Order, puis touchez order.getCustomer() en boucle et voyez 51 selects SQL. Que se passe-t-il ?',
    options: {
      a: 'Hibernate batch-insère les clients ; les selects supplémentaires sont des rollbacks',
      b: 'Un fetch N+1 : une requête pour les commandes, puis une requête par association customer lazy',
      c: 'L’invalidation du second-level cache émet toujours un select par id d’entité',
      d: 'JOIN FETCH a été appliqué, donc Hibernate doit re-sélectionner chaque association pour vérifier la cohérence',
    },
    explanation:
      'N+1 classique. Atténuer avec JOIN FETCH, @EntityGraph, projections DTO ou batch fetching.',
  },
  {
    question:
      'Déclarer @Transactional sur une méthode publique gérée par Spring active principalement quoi ?',
    options: {
      a: 'Une transaction XA distribuée sur chaque DataSource du classpath',
      b: 'Une frontière transactionnelle : début autour de l’appel, puis commit ou rollback selon le résultat et les règles de rollback',
      c: 'Une réécriture automatique des requêtes qui retire tous les verrous SQL',
      d: 'La suppression de toute exception levée par le corps de méthode',
    },
    explanation:
      'Les transactions déclaratives encapsulent la méthode via un proxy/advisor. Le rollback par défaut concerne RuntimeException et Error, pas toute exception checked, et XA n’est pas automatique.',
  },
  {
    question: 'Que fournit principalement Spring Data JPA ?',
    options: {
      a: 'Un remplacement obligatoire d’Hibernate qui interdit EntityManager',
      b: 'Des abstractions de repositories et la dérivation de requêtes (et des requêtes custom) au-dessus d’un provider JPA',
      c: 'Un moteur SQL embarqué livré dans spring-data-jpa.jar',
      d: 'Uniquement la démarcation transactionnelle ; les repositories doivent rester du JDBC écrit à la main',
    },
    explanation:
      'Spring Data JPA s’appuie sur JPA (souvent Hibernate). Il réduit le boilerplate avec des méthodes comme findByEmail, tout en permettant @Query et EntityManager.',
  },
  {
    question: 'Quelle affirmation sur les types sealed (Java 17+) est correcte ?',
    options: {
      a: 'sealed interdit entièrement l’héritage ; aucun sous-type ne peut exister',
      b: 'Un type sealed liste les sous-types autorisés ; chacun doit être final, sealed ou non-sealed',
      c: 'Seules les interfaces peuvent être sealed ; les classes non',
      d: 'Les sous-types autorisés peuvent vivre dans n’importe quel module sans être nommés dans permits',
    },
    explanation:
      'Le sealing restreint la hiérarchie à un ensemble explicite de sous-types avec une extensibilité contrôlée.',
  },
  {
    question:
      'Quand une sealed interface est-elle un meilleur modèle qu’un enum pour des « résultats de paiement » ?',
    options: {
      a: 'Quand chaque résultat est un simple label sans payload distinct',
      b: 'Quand les variantes ont besoin de champs et comportements différents (par ex. CardSuccess(authCode) vs Failed(reason))',
      c: 'Quand vous avez besoin d’héritage multiple de parents concrets',
      d: 'Quand les enums ont l’interdiction de déclarer des méthodes',
    },
    explanation:
      'Les enums excellent pour des labels fixes. Les hiérarchies sealed modélisent des variantes algébriques avec un état différent. Les enums peuvent avoir des méthodes ; ce n’est pas le critère décisif.',
  },
  {
    question: `Une méthode de service est annotée @Transactional et contient :

try {
    operation();
} catch (RuntimeException e) {
    log.error("Erreur", e);
}

Si operation() lève une RuntimeException qui est capturée, que se passe-t-il typiquement pour la transaction ?`,
    options: {
      a: 'Spring marque toujours rollback-only dès qu’une RuntimeException est construite',
      b: 'La transaction peut être validée car l’exception ne sort jamais de la frontière du proxy',
      c: 'Le conteneur doit faire un rollback ; capturer des exceptions dans @Transactional est une erreur de compilation',
      d: 'Hibernate ignore les transactions Spring et commit toujours après chaque instruction',
    },
    explanation:
      'Les règles de rollback par défaut réagissent aux exceptions qui se propagent hors de la méthode transactionnelle. Avaler l’exception sans setRollbackOnly() conduit souvent à un commit d’un travail partiel.',
  },
  {
    question:
      'Un POST crée avec succès un User et renvoie sa représentation. Quel statut est le défaut le plus approprié ?',
    options: {
      a: '200 OK — la création ne doit jamais utiliser un autre statut',
      b: '201 Created — éventuellement avec un header Location vers la nouvelle ressource',
      c: '204 No Content — les corps sont interdits après POST',
      d: '202 Accepted — tout POST réussi est asynchrone par définition',
    },
    explanation:
      '201 Created est le statut standard de création de ressource. 200 est parfois vu en pratique mais moins précis ; 202 signifie accepté pour un traitement ultérieur.',
  },
  {
    question:
      'Un client appelle GET /orders/42 et la commande n’existe pas. Quel statut l’API devrait-elle renvoyer ?',
    options: {
      a: '400 Bad Request, car tout id manquant est une syntaxe de requête invalide',
      b: '404 Not Found, car la ressource cible est absente',
      c: '409 Conflict, car une donnée manquante signifie toujours un conflit d’état',
      d: '401 Unauthorized, car un id inconnu implique une authentification échouée',
    },
    explanation:
      '404 signifie que le serveur ne trouve pas de représentation courante pour la ressource cible.',
  },
  {
    question:
      'POST /users échoue car l’email existe déjà et l’unicité est une règle métier. Quel statut convient le mieux ?',
    options: {
      a: '401 Unauthorized',
      b: '404 Not Found',
      c: '409 Conflict (ou parfois 422), signalant un conflit avec l’état courant / la validation',
      d: '204 No Content',
    },
    explanation:
      'Les clés uniques en doublon sont un conflit avec l’état existant. Certaines équipes utilisent 422 pour la validation sémantique ; 409 est le code de conflit classique.',
  },
  {
    question: 'Quelle affirmation sur 204 No Content est correcte dans les API REST ?',
    options: {
      a: '204 signifie que la ressource a été créée et doit inclure un corps',
      b: '204 signifie un succès avec un corps intentionnellement vide, souvent après DELETE ou une mise à jour sans contenu à renvoyer',
      c: '204 est interchangeable avec 404 pour les ressources manquantes',
      d: '204 est réservé aux défis d’authentification échoués',
    },
    explanation:
      '204 est un succès sans payload. Préférer 200 quand on renvoie un corps ; préférer 404 quand la ressource manque.',
  },
  {
    question: 'En JavaScript, en quoi == et === diffèrent-ils ?',
    options: {
      a: 'Ils sont identiques ; les moteurs traitent === comme un alias plus rapide de ==',
      b: '== peut convertir les types ; === exige le même type et la même valeur (avec les caveats habituels NaN/Object)',
      c: '=== compare uniquement l’identité des objets ; == ne le fait jamais',
      d: '== est plus strict car il compare aussi les prototypes',
    },
    explanation:
      '5 == "5" est true après coercition ; 5 === "5" est false.',
  },
  {
    question: 'Quelle affirmation concernant var, let et const est correcte ?',
    options: {
      a: 'var a une portée de bloc ; let et const ont une portée de fonction',
      b: 'let et const ont une portée de bloc ; var a une portée de fonction (ou globale) et peut être redéclaré dans la même portée',
      c: 'const fige profondément les propriétés d’objet, comme Object.freeze sur chaque valeur imbriquée',
      d: 'les liaisons let peuvent être redéclarées dans le même bloc ; const non',
    },
    explanation:
      'const empêche la réaffectation de la liaison, pas l’immutabilité profonde. let/const ne peuvent pas être redéclarés dans le même bloc.',
  },
  {
    question: 'Que fait principalement l’event loop JavaScript ?',
    options: {
      a: 'Créer un thread OS par Promise pour que les callbacks s’exécutent toujours en parallèle',
      b: 'Ordonnancer le travail entre la call stack, la file de microtasks et la file de macrotasks selon le modèle de concurrence du runtime JS',
      c: 'Remplacer les Promises par des callbacks en réécrivant le source à l’analyse',
      d: 'Bloquer le thread principal jusqu’à l’arrivée de chaque réponse HTTP',
    },
    explanation:
      'Les runtimes JS sont largement mono-threadés pour l’exécution JS. L’event loop draine microtasks et macrotasks quand la pile est vide.',
  },
  {
    question: 'Comment choisir entre any, unknown et never en TypeScript ?',
    options: {
      a: 'Préférer any pour toutes les données externes ; unknown et never sont des alias dépréciés',
      b: 'any désactive les vérifications ; unknown force un affinage avant usage ; never signifie qu’aucune valeur n’est possible',
      c: 'unknown est assignable à tous les types sans contrôle ; never est le top type',
      d: 'never est le type par défaut des résultats de JSON.parse',
    },
    explanation:
      'unknown est le pendant typé de any. never apparaît dans les contrôles exhaustifs et les fonctions qui ne retournent pas.',
  },
  {
    question: 'En quoi INNER JOIN et LEFT JOIN diffèrent-ils ?',
    options: {
      a: 'Ils sont identiques si des index existent sur les deux clés de jointure',
      b: 'INNER JOIN ne garde que les paires correspondantes ; LEFT JOIN conserve toutes les lignes de gauche et complète les colonnes de droite avec NULL si non jointes',
      c: 'LEFT JOIN ne renvoie que les lignes de gauche non jointes (anti-join)',
      d: 'INNER JOIN conserve toujours toutes les lignes de gauche, y compris les non-correspondances',
    },
    explanation:
      'Un anti-join nécessite LEFT JOIN … WHERE right.key IS NULL. Un LEFT JOIN simple inclut les lignes jointes et non jointes.',
  },
  {
    question: 'Quand utiliser WHERE versus HAVING ?',
    options: {
      a: 'WHERE filtre les groupes après agrégation ; HAVING filtre les lignes avant GROUP BY',
      b: 'WHERE filtre les lignes avant agrégation ; HAVING filtre les groupes après agrégation (par ex. sur COUNT(*))',
      c: 'Ce sont des synonymes ; les optimiseurs réécrivent toujours l’un en l’autre',
      d: 'HAVING n’est valide qu’avec ORDER BY et LIMIT',
    },
    explanation:
      'Les agrégats dans HAVING portent sur des groupes. Filtrer des lignes individuelles appartient à WHERE avant GROUP BY.',
  },
  {
    question: 'En quoi merge et rebase diffèrent-ils pour intégrer une branche feature ?',
    options: {
      a: 'Merge supprime les commits feature ; rebase les conserve uniquement comme blobs',
      b: 'Merge crée en général un commit de merge préservant la topologie ; rebase rejoue les commits sur une nouvelle base pour un historique linéaire',
      c: 'Ils produisent des graphes de commits et des SHA-1 identiques',
      d: 'Rebase ne peut pas entrer en conflit ; merge le peut toujours',
    },
    explanation:
      'Les deux peuvent entrer en conflit. Rebase réécrit les commits (nouveaux SHA), donc rebaser un historique publié demande de la coordination.',
  },
  {
    question:
      'Vous voulez un seul commit à la place des six derniers commits locaux sur une branche privée. Quelle commande est l’approche habituelle ?',
    options: {
      a: 'git merge --squash HEAD~6 en restant sur le même tip de branche',
      b: 'git rebase -i HEAD~6, puis squash/fix des cinq commits plus récents dans le plus ancien',
      c: 'git reset --hard HEAD~6, qui préserve automatiquement les changements du working tree',
      d: 'git pull --rebase=false --squash origin/main sans toucher l’historique local',
    },
    explanation:
      'Le rebase interactif est l’outil standard pour squasher des commits locaux récents. reset --hard jette commits et working tree.',
  },
  {
    question: 'Quelle est la différence pratique entre map et flatMap sur un Stream ?',
    options: {
      a: 'map aplatit les streams imbriqués ; flatMap ne transforme qu’en 1:1',
      b: 'map applique une fonction 1:1 ; flatMap mappe vers des streams/collections et les concatène en un seul stream',
      c: 'Ils ne diffèrent que pour les streams parallèles ; en séquentiel ils sont identiques',
      d: 'flatMap est une opération terminale ; map est intermédiaire',
    },
    explanation:
      'flatMap permet d’aplatir Stream<Stream<T>> ou Stream<List<T>> en Stream<T>. map et flatMap sont tous deux intermédiaires.',
  },
  {
    question: 'Comment HashMap localise-t-elle une entrée pour une clé ?',
    options: {
      a: 'Elle fait une recherche dichotomique sur un tableau trié de clés via compareTo uniquement',
      b: 'Elle répartit le hashCode de la clé dans un index de bucket, puis trouve l’entrée avec equals (arbres pour les longues chaînes de collisions)',
      c: 'Elle utilise exclusivement System.identityHashCode et n’appelle jamais equals',
      d: 'Elle stocke les entrées dans l’ordre d’insertion et scanne depuis le début à chaque fois',
    },
    explanation:
      'Le hashing sélectionne un bucket ; equals résout les collisions. Depuis Java 8, les longs bins peuvent devenir des arbres.',
  },
  {
    question:
      'Quelle affirmation sur les opérations intermédiaires vs terminales d’un Stream est correcte ?',
    options: {
      a: 'Les ops intermédiaires sont eager ; les ops terminales renvoient un autre Stream',
      b: 'filter et sorted sont intermédiaires et lazy ; collect et count sont terminales et déclenchent l’exécution',
      c: 'forEach est intermédiaire afin de pouvoir continuer le pipeline ensuite',
      d: 'Un stream peut être réutilisé après qu’une opération terminale s’est terminée avec succès',
    },
    explanation:
      'Les pipelines sont lazy jusqu’à une opération terminale. Ensuite le stream est consommé et non réutilisable.',
  },
  {
    question: 'Que apportent principalement les records Java ?',
    options: {
      a: 'Des JavaBeans mutables avec des setters générés pour chaque composant',
      b: 'Des porteurs de données concis, nominalement immuables, avec constructeur canonique, accesseurs, equals, hashCode et toString',
      c: 'L’héritage multiple d’état depuis plusieurs records parents',
      d: 'Un remplacement qui rend toute annotation Lombok illégale',
    },
    explanation:
      'Les records sont superficiellement immuables par conception. Lombok reste utile pour d’autres patterns.',
  },
  {
    question: 'En quoi les records diffèrent-ils des classes générées par Lombok ?',
    options: {
      a: 'Lombok fait partie de la spécification Java SE ; les records sont une bibliothèque tierce',
      b: 'Les records sont une fonctionnalité du langage aux sémantiques fixes ; Lombok est de la génération à la compilation qui peut cibler de nombreuses formes de classes',
      c: 'Les records permettent d’étendre n’importe quelle classe concrète ; Lombok interdit l’héritage',
      d: 'Lombok @Value et les records produisent un bytecode et des contraintes identiques',
    },
    explanation:
      'Les records contraignent le modèle (classe final, état dans les composants). Lombok est un outillage plus large et optionnel.',
  },
  {
    question: 'Quel problème les virtual threads (Java 21) adressent-ils principalement ?',
    options: {
      a: 'Rendre le calcul CPU automatiquement plusieurs fois plus rapide',
      b: 'Supporter un très grand nombre de tâches concurrentes bloquantes avec un coût de thread bien inférieur aux platform threads',
      c: 'Remplacer le scheduler OS par un processus user-mode pur par requête',
      d: 'Éliminer le besoin de verrous, car les virtual threads ne peuvent pas entrer en course',
    },
    explanation:
      'Les virtual threads excellent pour la concurrence I/O bloquante. Le travail CPU-bound a toujours besoin de cœurs ; l’état mutable partagé nécessite toujours de la synchronisation.',
  },
  {
    question: 'À quoi Apache Kafka est-il principalement conçu ?',
    options: {
      a: 'Servir de système d’enregistrement qui remplace les bases relationnelles OLTP',
      b: 'Un journal publish/subscribe durable et distribué pour le streaming d’événements à haut débit',
      c: 'Compiler et résoudre les arbres de dépendances Maven',
      d: 'Servir de passerelle API HTTP et de terminaison TLS',
    },
    explanation:
      'Kafka est une plateforme de streaming d’événements : produire, conserver et consommer des records. Elle complète les bases plutôt que de remplacer tous les cas OLTP.',
  },
  {
    question: 'Que fournit un consumer group Kafka ?',
    options: {
      a: 'La suppression automatique de chaque record dès qu’un consommateur le lit',
      b: 'Des consommateurs concurrents qui se partagent les partitions d’un topic afin qu’une partition soit traitée par au plus un membre du groupe à la fois',
      c: 'Un moyen de fusionner des topics sans rapport en une seule partition physique',
      d: 'Une exclusion mutuelle pour qu’une seule application de l’entreprise puisse s’abonner à un topic',
    },
    explanation:
      'Scaler dans un groupe partitionne le travail. Des groupes indépendants maintiennent des offsets séparés et peuvent tous lire le même topic.',
  },
  {
    question: 'Quel est l’objectif principal de l’architecture hexagonale ?',
    options: {
      a: 'Éliminer la persistance ; les objets domaine ne doivent vivre qu’en mémoire',
      b: 'Garder la logique domaine indépendante des frameworks, de l’UI et de l’infrastructure via ports et adaptateurs',
      c: 'Imposer les microservices ; un monolithe modulaire ne peut pas être hexagonal',
      d: 'Placer toutes les règles dans les contrôleurs pour que les adaptateurs restent vides',
    },
    explanation:
      'L’hexagone isole le domaine. Les adaptateurs implémentent les ports HTTP, DB, messaging, etc., sans posséder les règles métier.',
  },
  {
    question: 'Comment la logique domaine devrait-elle être testée dans une organisation hexagonale ?',
    options: {
      a: 'Uniquement via la vraie base de données et le broker de messages',
      b: 'Avec des tests unitaires rapides sur les types/services domaine, en utilisant des fakes ou adaptateurs in-memory aux ports',
      c: 'Uniquement avec des outils E2E navigateur comme Selenium',
      d: 'Uniquement en démarrant toute l’application Spring Boot pour chaque assertion',
    },
    explanation:
      'L’indépendance vis-à-vis de l’infrastructure est le but : les tests domaine ne devraient pas exiger Spring, JPA ou Kafka.',
  },
  {
    question:
      'Comment les équipes découvrent-elles typiquement des vulnérabilités connues dans les dépendances Maven/Gradle ?',
    options: {
      a: 'En cherchant la chaîne CVE dans les logs applicatifs',
      b: 'Avec des outils SCA (OWASP Dependency-Check, Snyk, scanning GitHub/GitLab) plus des mises à niveau rapides',
      c: 'En supprimant le bloc dependencyManagement pour laisser flotter les versions',
      d: 'En n’écrivant que des tests JUnit ; un test qui échoue implique une CVE',
    },
    explanation:
      'L’analyse de composition logicielle croise les coordonnées/versions de dépendances avec des bases CVE.',
  },
  {
    question: 'Quelle forme correspond à la pyramide de tests classique ?',
    options: {
      a: 'Surtout des tests E2E, avec peu de tests unitaires car les unités mentent',
      b: 'Beaucoup de tests unitaires rapides, moins de tests d’intégration, et relativement peu de tests E2E',
      c: 'Uniquement des tests d’intégration ; unitaires et E2E sont obsolètes',
      d: 'Des quantités égales d’unitaires, d’intégration et d’E2E pour l’équilibre',
    },
    explanation:
      'Les tests unitaires donnent un feedback rapide. Intégration et E2E capturent des échecs plus larges mais coûtent plus, donc restent moins nombreux.',
  },
  {
    question:
      'Spring Boot met spring.jpa.open-in-view à true par défaut. Quel inconvénient fréquent à laisser OSIV activé ?',
    options: {
      a: 'Cela désactive le second-level cache pour toute la JVM',
      b: 'Le contexte de persistance reste ouvert pendant toute la requête web, ce qui peut masquer LazyInitializationException, favoriser le N+1 pendant le rendu et retenir plus longtemps les connexions DB',
      c: 'Cela force chaque méthode de repository à s’exécuter sans transaction',
      d: 'Cela remplace Hibernate par JDBC pour toutes les requêtes',
    },
    explanation:
      'OSIV lie un EntityManager au thread de requête jusqu’au rendu de la vue. Préférer des stratégies de fetch/DTO explicites et souvent open-in-view=false pour les API.',
  },
  {
    question:
      'Une méthode @Transactional lève une Exception checked (sans rollbackFor). Quel est le résultat par défaut ?',
    options: {
      a: 'Spring fait toujours un rollback sur toute sous-classe d’Exception',
      b: 'Par défaut Spring commit pour les exceptions checked sauf si rollbackFor les inclut',
      c: 'Les exceptions checked ne peuvent pas sortir d’une méthode @Transactional ; elles deviennent des Errors',
      d: 'Le transaction manager convertit automatiquement l’exception en marqueur de commit',
    },
    explanation:
      'Les règles de rollback par défaut ciblent RuntimeException et Error. Déclarer rollbackFor = Exception.class quand les échecs checked doivent annuler le travail.',
  },
  {
    question:
      'Depuis Spring Boot 2.6, les références circulaires sont interdites par défaut. Quelle est la correction préférée ?',
    options: {
      a: 'Mettre spring.main.allow-circular-references=true de façon permanente comme solution de design',
      b: 'Casser le cycle : extraire un troisième bean, utiliser des events, ou repenser la direction de dépendance ; traiter @Lazy seulement comme pont temporaire',
      c: 'Remplacer l’injection par constructeur par l’injection par champ pour rendre les cycles impossibles',
      d: 'Annoter les deux beans @Prototype pour que chaque création casse le cycle',
    },
    explanation:
      'allow-circular-references restaure des early references risquées et ne corrige pas les cycles constructeur. Redesigner le graphe.',
  },
  {
    question:
      'Pourquoi des méthodes @Bean sur une classe @Configuration peuvent-elles s’appeler entre elles et garder une sémantique singleton renforcée, contrairement aux classes @Component ordinaires ?',
    options: {
      a: '@Component interdit entièrement les méthodes @Bean',
      b: 'Les classes @Configuration « full » sont renforcées par CGLIB donc les appels @Bean entre elles passent par le conteneur ; le mode lite @Component/@Bean n’intercepte pas ces appels de la même façon',
      c: '@Configuration crée toujours des beans prototype quand les méthodes s’appellent',
      d: 'Il n’y a aucune différence ; les deux modes proxifient les self-calls @Bean de façon identique',
    },
    explanation:
      'C’est la distinction full vs lite @Bean. Appeler des méthodes @Bean sur la même instance @Component peut créer des instances dupliquées non gérées.',
  },
  {
    question:
      'Une entité a @Version long version. Deux transactions lisent version=3 et flushent toutes deux une update. Que se passe-t-il typiquement ?',
    options: {
      a: 'Les deux commits réussissent ; le dernier writer gagne silencieusement sans erreur',
      b: 'Le second commit échoue avec un échec de verrouillage optimiste (par ex. OptimisticLockException)',
      c: 'Hibernate fusionne automatiquement champ par champ via un diff à trois voies',
      d: '@Version n’affecte que le DDL ; il est ignoré à l’exécution',
    },
    explanation:
      'Le verrouillage optimiste compare la colonne version sur UPDATE. Une discordance signifie qu’une autre transaction a commité en premier.',
  },
  {
    question:
      'Dans un contexte de persistance ouvert, vous modifiez un champ d’une entité managed et committez sans appeler save. Que se passe-t-il en général ?',
    options: {
      a: 'Rien ; JPA exige un merge/save explicite pour chaque changement',
      b: 'Le dirty checking détecte le changement et flush une UPDATE avant le commit',
      c: 'Le changement n’est écrit que si l’entité est annotée @Dirty',
      d: 'Hibernate planifie un DELETE car les champs non gérés sont considérés comme retirés',
    },
    explanation:
      'Les entités managed sont suivies. Au flush/commit, l’état dirty est synchronisé sans save explicite dans les flux Spring Data typiques.',
  },
  {
    question:
      'Pourquoi implémenter equals/hashCode uniquement sur un @Id généré est-il souvent problématique pour des entités dans des Set avant persist ?',
    options: {
      a: 'Parce que HashSet interdit les éléments null et les ids sont toujours null',
      b: 'Parce que l’id est null puis assigné, ce qui change hashCode et casse les contrats Set/Map pour la même instance',
      c: 'Parce que JPA exige que equals utilise uniquement ==',
      d: 'Parce que les bases rejettent les entités dont equals utilise des clés métier',
    },
    explanation:
      'Une identité mutable casse les invariants des collections. Préférer une clé métier stable ou des stratégies d’id soigneuses.',
  },
  {
    question: 'En quoi Stream.toList() diffère-t-il de collect(Collectors.toList()) ?',
    options: {
      a: 'Ils sont spécifiés pour renvoyer toujours exactement le même type d’ArrayList mutable',
      b: 'Stream.toList() renvoie une List non modifiable ; Collectors.toList() ne garantit pas l’unmodifiabilité',
      c: 'Collectors.toList() est terminale ; Stream.toList() est intermédiaire',
      d: 'Stream.toList() n’existe que pour les streams parallèles',
    },
    explanation:
      'Depuis Java 16, toList() produit une liste non modifiable. Utiliser Collectors.toCollection(ArrayList::new) pour une liste mutable.',
  },
  {
    question: 'Quel est l’usage principal recommandé d’Optional ?',
    options: {
      a: 'Comme champs sur chaque entité JPA pour éliminer null au niveau base',
      b: 'Comme type de retour pour des méthodes qui peuvent intentionnellement n’avoir aucune valeur',
      c: 'Comme type de chaque paramètre de méthode pour forcer les appelants à wrapper les arguments',
      d: 'Comme remplacement des exceptions dans tous les cas d’échec',
    },
    explanation:
      'Optional communique des valeurs de retour absentes. L’utiliser pour champs/paramètres ou comme canal d’erreur général est largement déconseillé.',
  },
  {
    question:
      'Vous devez tester uniquement des contrôleurs MVC avec MockMvc, sans charger tout le contexte applicatif. Quelle slice convient le mieux ?',
    options: {
      a: '@SpringBootTest(webEnvironment = DEFINED_PORT) exclusivement',
      b: '@WebMvcTest pour le(s) contrôleur(s) sous test',
      c: '@DataJpaTest, qui démarre aussi DispatcherServlet',
      d: '@JsonTest, qui démarre Tomcat et les filtres de sécurité',
    },
    explanation:
      '@WebMvcTest charge une slice MVC. @SpringBootTest est plus large ; @DataJpaTest se concentre sur JPA ; @JsonTest sur le mapping JSON.',
  },
  {
    question:
      'Quelle est une différence clé entre un Servlet Filter et un Spring MVC HandlerInterceptor ?',
    options: {
      a: 'Les filtres ne s’exécutent qu’après le contrôleur ; les interceptors seulement avant le rendu de vue',
      b: 'Les filtres encapsulent le pipeline request/response servlet ; les interceptors s’accrochent à l’exécution du handler Spring MVC avec accès aux métadonnées HandlerMethod',
      c: 'Les interceptors ne voient pas les headers HTTP ; les filtres ne voient pas le corps de requête',
      d: 'Ce sont des API identiques avec deux noms pour des raisons historiques',
    },
    explanation:
      'Les filtres sont des préoccupations du conteneur servlet. Les interceptors sont spécifiques à Spring MVC autour du handling des contrôleurs.',
  },
  {
    question: 'Quelle affirmation sur PUT vs PATCH est la plus exacte ?',
    options: {
      a: 'PUT doit toujours créer ; PATCH doit toujours supprimer',
      b: 'PUT remplace typiquement la représentation de la ressource cible ; PATCH applique une modification partielle',
      c: 'PATCH est non idempotent par définition ; PUT n’est jamais idempotent',
      d: 'REST interdit PATCH ; seuls SOAP utilise des mises à jour partielles',
    },
    explanation:
      'PUT est en général un remplacement complet idempotent. PATCH est partiel ; l’idempotence dépend de la sémantique du patch.',
  },
  {
    question:
      'Avec une consommation at-least-once par défaut, un consommateur plante après traitement mais avant commit des offsets. Que peut-il se passer au redémarrage ?',
    options: {
      a: 'Ces records sont garantis à ne plus jamais être vus',
      b: 'Certains records peuvent être traités à nouveau, donc les handlers doivent être idempotents ou dédupliquer',
      c: 'Kafka supprime le topic pour préserver exactly-once sans configuration',
      d: 'Les offsets ne reculent que si le producteur a utilisé acks=0',
    },
    explanation:
      'At-least-once implique une possible redélivrance. Exactly-once exige une configuration transactionnelle/idempotente supplémentaire.',
  },
  {
    question: 'Comment activer le profil Spring prod pour une app Boot ?',
    options: {
      a: 'Uniquement en renommant application.properties en prod.properties',
      b: 'Via spring.profiles.active (propriété, env ou CLI), qui charge la config spécifique comme application-prod.yml',
      c: 'En plaçant @Profile("prod") sur main() sans aucun réglage externe',
      d: 'Les profils sont des classifiers Maven et ne peuvent pas changer à l’exécution',
    },
    explanation:
      'spring.profiles.active sélectionne les profils actifs. @Profile conditionne des beans ; il ne choisit pas à lui seul l’environnement.',
  },
  {
    question:
      'Pourquoi publier un Spring ApplicationEvent plutôt qu’appeler directement un autre service ?',
    options: {
      a: 'Les events remplacent les frontières transactionnelles et désactivent les rollbacks',
      b: 'Pour découpler les modules : les publishers dépendent d’un type d’événement, pas de services subscribers concrets',
      c: 'Les events sont le seul moyen d’appeler des méthodes @Transactional',
      d: 'Les listeners s’exécutent toujours dans un nouveau processus JVM par défaut',
    },
    explanation:
      'Les events domaine/application réduisent le couplage direct. La phase transactionnelle et les listeners async sont configurables.',
  },
  {
    question:
      'Une requête filtre WHERE status = \'ACTIVE\' et status n’a que deux valeurs à ~50/50. Pourquoi un index sur status seul peut-il peu aider ?',
    options: {
      a: 'Les index ne fonctionnent jamais avec des prédicats d’égalité',
      b: 'Faible sélectivité : l’optimiseur peut préférer un scan séquentiel quand chaque valeur matche une grande fraction des lignes',
      c: 'Les colonnes string ne peuvent pas être indexées dans les bases SQL',
      d: 'Les index accélèrent seulement les écritures ; ils n’affectent jamais les lectures',
    },
    explanation:
      'La sélectivité compte. Des index composites alignés sur filtre+tri/cover sont souvent plus utiles qu’une seule colonne peu discriminante.',
  },
  {
    question:
      'Après if (obj instanceof String s) { … }, que fournit le pattern matching for instanceof ?',
    options: {
      a: 'Une conversion automatique de obj en String sans contrôle de type à l’exécution',
      b: 'Une variable de liaison s déjà affinée en String dans la branche true',
      c: 'Une erreur de compilation sauf si s est déclarée plus tôt dans la méthode',
      d: 'Une comparaison equals() implicite contre chaque String du constant pool',
    },
    explanation:
      'Le pattern matching combine le test instanceof avec une liaison scopée, ce qui évite un cast séparé.',
  },
  {
    question:
      'Pendant une itération for-each sur un ArrayList, un autre thread (ou le même via list.remove) modifie structurellement la liste. Quel résultat est fréquent ?',
    options: {
      a: 'L’iterator saute silencieusement jusqu’à la fin sans erreur',
      b: 'Une ConcurrentModificationException de l’iterator fail-fast (détection best-effort)',
      c: 'La JVM fige la liste définitivement',
      d: 'ArrayList bascule automatiquement vers CopyOnWriteArrayList',
    },
    explanation:
      'Les iterators fail-fast détectent une modification structurelle concurrente et lèvent CME.',
  },
  {
    question:
      'Pourquoi rebaser des commits déjà poussés sur une branche partagée est-il risqué ?',
    options: {
      a: 'Rebase supprime la configuration du dépôt distant',
      b: 'Cela réécrit les SHA des commits, donc les historiques des collègues divergent et un force-push peut écraser le travail d’autrui sans coordination',
      c: 'Git refuse de rebaser tout commit qui touche plus d’un fichier',
      d: 'Les commits rebasés perdent définitivement l’identité de l’auteur',
    },
    explanation:
      'Réécrire l’historique change les identifiants. Préférer rebase sur branches privées ; coordonner avant un force-push partagé.',
  },
  {
    question: 'Qu’est-ce qu’une requête preflight CORS ?',
    options: {
      a: 'Un POST avec Content-Type application/json qui saute toujours OPTIONS',
      b: 'Une requête OPTIONS envoyée par le navigateur pour savoir si un appel cross-origin avec méthode/headers donnés est autorisé',
      c: 'Un handshake d’upgrade WebSocket imposé par REST',
      d: 'Un health check serveur-à-serveur sans rapport avec les navigateurs',
    },
    explanation:
      'Les navigateurs font un preflight pour les requêtes cross-origin « non simples ». Les serveurs répondent avec des headers Access-Control-*.',
  },
  {
    question:
      'Des objets imbriqués dans un @RequestBody ont besoin de Bean Validation. Que faut-il pour la validation en cascade ?',
    options: {
      a: 'Seulement @Valid sur le paramètre contrôleur ; les champs imbriqués sont toujours validés',
      b: 'Annoter la propriété imbriquée avec @Valid (et des contraintes sur les champs imbriqués) pour que la validation cascade',
      c: 'Utiliser @Validated uniquement sur les interfaces repository',
      d: 'Bean Validation ignore les objets Java imbriqués par spécification',
    },
    explanation:
      'La cascade exige @Valid sur l’association. Les contraintes du type imbriqué seules ne sont pas visitées sans cela.',
  },
  {
    question:
      'Un virtual thread exécute du code qui entre dans un bloc synchronized puis bloque sur de l’I/O à l’intérieur. Quelle préoccupation apparaît ?',
    options: {
      a: 'Les virtual threads interdisent synchronized entièrement à la compilation',
      b: 'Le virtual thread peut pinner son carrier platform thread, limitant la scalabilité sous pinning intense',
      c: 'Le pinning fait terminer l’I/O instantanément sur un autre cœur',
      d: 'synchronized est promu automatiquement en ReentrantLock sur les virtual threads',
    },
    explanation:
      'Le pinning réduit le bénéfice des virtual threads. Préférer les locks java.util.concurrent quand on tient un verrou pendant des appels bloquants.',
  },
  {
    question:
      'La méthode @Transactional de Service A appelle this.helper() où helper est @Transactional(propagation = REQUIRES_NEW) sur la même classe. Que se passe-t-il avec le setup proxy par défaut ?',
    options: {
      a: 'Une nouvelle transaction démarre toujours car l’annotation est présente sur helper',
      b: 'La self-invocation contourne le proxy, donc REQUIRES_NEW ne s’applique pas sauf appel via un autre bean/proxy Spring',
      c: 'Spring suspend la transaction externe seulement si helper est private',
      d: 'REQUIRES_NEW est illégal sur les méthodes ; il ne peut annoter que des classes',
    },
    explanation:
      'L’AOP Spring basée sur proxy n’intercepte pas this.helper(). Déplacer helper vers un autre bean ou injecter un self-proxy.',
  },
  {
    question: 'Quelle différence entre HashMap et ConcurrentHashMap est correcte ?',
    options: {
      a: 'Les deux autorisent les clés null ; seule ConcurrentHashMap autorise les valeurs null',
      b: 'HashMap n’est pas thread-safe et autorise une clé null ; ConcurrentHashMap est concurrente et interdit clés/valeurs null',
      c: 'ConcurrentHashMap verrouille toute la map pour chaque get, comme Hashtable',
      d: 'HashMap est sûre pour des writers concurrents sans sync externe',
    },
    explanation:
      'ConcurrentHashMap utilise une concurrence fine et interdit les nulls pour éviter l’ambiguïté sous gets concurrents.',
  },
  {
    question: 'Que compose @SpringBootApplication, en pratique ?',
    options: {
      a: 'Seulement @Configuration — le component scanning doit toujours être déclaré séparément',
      b: '@SpringBootConfiguration, @EnableAutoConfiguration et @ComponentScan (avec défauts depuis le package de la classe annotée)',
      c: '@RestController et @EnableWebMvc uniquement',
      d: '@EntityScan et @EnableJms exclusivement',
    },
    explanation:
      '@SpringBootApplication est une annotation composée qui configure configuration, auto-configuration et component scanning pour les apps Boot typiques.',
  },
  {
    question:
      'Dans une codebase senior, quelle est une bonne raison de préférer @DataJpaTest à @SpringBootTest pour des tests de repositories ?',
    options: {
      a: '@DataJpaTest démarre toute la stack HTTP donc les contrôleurs sont toujours couverts',
      b: 'Elle charge une slice JPA (entités, repositories, DataSource) plus rapide et plus ciblée que tout le contexte applicatif',
      c: '@DataJpaTest désactive les transactions pour que chaque test commit définitivement',
      d: '@SpringBootTest ne peut pas accéder à une base par conception',
    },
    explanation:
      'Les slice tests gardent un feedback rapide. @DataJpaTest rollback par défaut et ne charge pas toute la stack web.',
  },
  {
    question:
      'Dans l’architecture hexagonale, où devraient vivre les détails de mapping SQL/JPA ?',
    options: {
      a: 'Dans les entités domaine comme seul modèle de persistance',
      b: 'Dans un adaptateur de persistance outbound qui implémente un port domaine, en gardant le domaine libre d’annotations JPA lorsque c’est la règle de l’équipe',
      c: 'Uniquement dans les contrôleurs comme méthodes @Query',
      d: 'L’architecture hexagonale interdit les bases, donc nulle part',
    },
    explanation:
      'Les ports définissent ce dont le domaine a besoin ; les adaptateurs implémentent le comment avec JPA/SQL.',
  },
  {
    question:
      'Un scan SCA signale une CVE dans une dépendance transitive. Quel est le chemin de remédiation habituel ?',
    options: {
      a: 'Ignorer les CVE transitives car seules les dépendances directes comptent',
      b: 'Upgrader/remplacer le composant affecté (ou overrider la version transitive quand c’est sûr), vérifier la compatibilité et redéployer',
      c: 'Supprimer le lockfile pour que la CI arrête d’échouer',
      d: 'Marquer la CVE comme corrigée en renommant seulement l’artifactId dans la documentation',
    },
    explanation:
      'Les vulnérabilités transitives sont quand même livrées dans le classpath runtime. Préférer upgrader la bibliothèque dépendante.',
  },
  {
    question:
      'Dans un appel HTTP client Angular, vous subscribe et mettez à jour l’état du composant. Quelle affirmation sur Observables vs Promises est correcte ?',
    options: {
      a: 'Les Observables sont toujours eager comme les Promises même avant subscribe',
      b: 'Beaucoup d’Observables sont lazy jusqu’au subscribe et peuvent émettre plusieurs valeurs ; les Promises sont eager et se résolvent une seule fois',
      c: 'Les Promises peuvent être annulées nativement avec unsubscribe',
      d: 'Angular interdit les Promises ; seuls les Observables existent en TypeScript',
    },
    explanation:
      'HttpClient renvoie des Observables froids qui s’exécutent au subscribe et peuvent être annulés via unsubscribe/async pipe. Les Promises démarrent immédiatement et se résolvent une fois.',
  },
];

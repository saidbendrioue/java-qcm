export const springTrainingFrench = [
  {
    question: 'Quel est le point d’entrée d’une application Spring Boot ?',
    options: {
      a: 'init()',
      b: 'main()',
      c: 'start()',
      d: 'SpringApplication()',
    },
    explanation:
      'Une application Spring Boot est un processus Java normal. La JVM démarre sur main(), qui appelle en général SpringApplication.run pour démarrer le contexte.',
  },
  {
    question: 'Quelles sources de configuration Spring Boot charge-t-il notamment ?',
    options: {
      a: 'Uniquement application.properties',
      b: 'application.yml, application.properties, variables d’environnement et arguments de lancement',
      c: 'Uniquement les arguments de lancement',
      d: 'Uniquement les variables d’environnement',
    },
    explanation:
      'Boot construit un Environment à partir de plusieurs sources : application.properties / application.yml (classpath ou externes), variables d’environnement et arguments de ligne de commande, entre autres.',
  },
  {
    question: 'Qu’est-ce que l’ApplicationContext ?',
    options: {
      a: 'Le serveur HTTP embarqué',
      b: 'Le conteneur qui gère les beans Spring',
      c: 'Le fichier de configuration principal',
      d: 'Le gestionnaire de transactions uniquement',
    },
    explanation:
      'ApplicationContext est le conteneur de beans Spring. Il crée les beans, injecte les dépendances, publie des événements et porte la configuration de l’application.',
  },
  {
    question: 'Que permettent notamment le component scanning et l’auto-configuration ?',
    options: {
      a: 'D’identifier les composants et de configurer les infrastructures nécessaires',
      b: 'De compiler automatiquement le code Java',
      c: 'De remplacer la JVM',
      d: 'De supprimer les dépendances entre beans',
    },
    explanation:
      'Le component scanning enregistre les types annotés comme @Service. L’auto-configuration ajoute des beans d’infrastructure lorsque les conditions correspondent, par exemple un DataSource si un driver est présent.',
  },
  {
    question: 'Parmi ces annotations, lesquelles correspondent à des composants Spring ?',
    options: {
      a: '@Service, @Repository, @RestController',
      b: '@Entity, @Table, @Column',
      c: '@Test, @BeforeEach, @AfterEach',
      d: '@Override, @Deprecated, @SuppressWarnings',
    },
    explanation:
      '@Service, @Repository et @RestController sont des stéréotypes Spring découverts par le component scanning. @Entity et ses voisines sont du mapping JPA ; les autres sont des annotations JUnit ou du langage Java.',
  },
  {
    question: 'Que se passe-t-il lors de l’initialisation des beans ?',
    options: {
      a: 'Spring supprime les dépendances',
      b: 'Spring résout les dépendances et injecte les objets nécessaires',
      c: 'Spring démarre obligatoirement Tomcat',
      d: 'Spring compile les classes',
    },
    explanation:
      'Lors du refresh du contexte, Spring crée les beans et injecte leurs collaborateurs via constructeurs, setters ou champs. Un serveur embarqué ne démarre que pour une application web.',
  },
  {
    question:
      'Pour une application web classique, que signifie « l’application devient opérationnelle » ?',
    options: {
      a: 'Le serveur embarqué accepte les requêtes HTTP',
      b: 'La JVM s’arrête',
      c: 'Le main() est recompilé',
      d: 'Les beans sont supprimés',
    },
    explanation:
      'Une fois le contexte prêt et le conteneur embarqué (Tomcat, Jetty ou Undertow) à l’écoute, l’application web peut servir le trafic HTTP.',
  },
  {
    question: 'Quel est l’ordre correct des grandes étapes du démarrage ?',
    options: {
      a: 'Contexte → JVM → beans → environnement → application opérationnelle',
      b: 'JVM/main → SpringApplication → environnement → contexte → détection/configuration des beans → initialisation des beans → application opérationnelle',
      c: 'Environnement → JVM → contexte → serveur HTTP → beans',
      d: 'Beans → contexte → JVM → environnement → SpringApplication',
    },
    explanation:
      'La JVM entre dans main, SpringApplication prépare l’Environment, crée et rafraîchit l’ApplicationContext, découvre et configure les beans, les initialise, puis l’application devient prête.',
  },
  {
    question: 'Quand Spring Boot publie-t-il les événements indiquant que l’application est prête ?',
    options: {
      a: 'Avant le démarrage de la JVM',
      b: 'Après que l’application est devenue opérationnelle',
      c: 'Pendant la compilation',
      d: 'Avant la création du contexte Spring',
    },
    explanation:
      'Des événements comme ApplicationReadyEvent sont publiés une fois le démarrage terminé et l’application prête à traiter les requêtes ou à exécuter ApplicationRunner / CommandLineRunner.',
  },
  {
    question: 'Quels sont les deux principaux types de fonctionnement d’un Step Spring Batch ?',
    options: {
      a: 'EAGER et LAZY',
      b: 'Chunk-oriented et Tasklet',
      c: 'Reader et Writer',
      d: 'Skip et Retry',
    },
    explanation:
      'Un Step est soit chunk-oriented (lecture–traitement–écriture par chunks), soit un Tasklet qui exécute une unité de travail. Skip et retry sont des politiques d’erreur, pas des styles de Step.',
  },
  {
    question: 'Quels sont les trois composants du fonctionnement Chunk-oriented ?',
    options: {
      a: 'Reader, Processor, Writer',
      b: 'Listener, Job, Step',
      c: 'Mock, InjectMocks, Spy',
      d: 'EAGER, LAZY, JOIN FETCH',
    },
    explanation:
      'Un step chunk-oriented utilise un ItemReader, un ItemProcessor optionnel et un ItemWriter. Les éléments sont regroupés en chunks commités ensemble.',
  },
  {
    question: 'Que fait un Tasklet ?',
    options: {
      a: 'Il lit, transforme et écrit des chunks',
      b: 'Il exécute une tâche',
      c: 'Il démarre Tomcat',
      d: 'Il configure Hibernate',
    },
    explanation:
      'Un Tasklet est un Step qui exécute un travail unique, par exemple nettoyer un répertoire ou appeler une procédure stockée, au lieu de traiter des items par chunks.',
  },
  {
    question:
      'Par défaut, si une exception non gérée fait échouer un chunk, que se passe-t-il généralement ?',
    options: {
      a: 'La transaction est généralement annulée et le Step passe à l’état FAILED',
      b: 'Le chunk est automatiquement ignoré',
      c: 'Le Job continue toujours sans échec',
      d: 'Spring Batch redémarre la JVM',
    },
    explanation:
      'Sans skip ni retry configurés pour cet échec, la transaction du chunk est annulée et l’exécution du Step passe en FAILED, ce qui fait généralement échouer le Job.',
  },
  {
    question: 'Si aucune logique ne permet de poursuivre, que devient le Job ?',
    options: {
      a: 'Il reste toujours COMPLETED',
      b: 'Il échoue à son tour',
      c: 'Il est supprimé',
      d: 'Il passe en mode Tasklet',
    },
    explanation:
      'Quand un Step échoue et qu’aucune voie de reprise ne reste, l’exécution du Job échoue au lieu de se terminer avec succès.',
  },
  {
    question:
      'Un rollback signifie-t-il nécessairement que les 500 commandes seront relues exactement de la même manière ?',
    options: {
      a: 'Oui, toujours',
      b: 'Non, cela dépend du type d’erreur, de la configuration et du comportement du reader',
      c: 'Oui, uniquement avec Tasklet',
      d: 'Non, car Spring Batch ne fait jamais de rollback',
    },
    explanation:
      'Le rollback annule la transaction du chunk, mais la reprise et la relecture dépendent du skip/retry, de l’intervalle de commit et du caractère restartable du ItemReader.',
  },
  {
    question: 'À quoi sert le mécanisme skip ?',
    options: {
      a: 'À ignorer un élément en erreur et poursuivre le traitement des autres',
      b: 'À redémarrer la JVM',
      c: 'À charger les relations Hibernate',
      d: 'À créer un mock Mockito',
    },
    explanation:
      'Le skip permet au Step d’écarter les items qui lèvent des exceptions configurées et de continuer, jusqu’à une limite de skip.',
  },
  {
    question: 'À quoi sert le mécanisme retry ?',
    options: {
      a: 'À réessayer un traitement potentiellement temporaire',
      b: 'À supprimer définitivement un élément',
      c: 'À créer un ApplicationContext',
      d: 'À ignorer tous les chunks',
    },
    explanation:
      'Le retry retente une opération qui peut réussir plus tard, par exemple après un deadlock bref ou un timeout distant.',
  },
  {
    question: 'Quels sont des exemples d’erreurs adaptées à un retry ?',
    options: {
      a: 'Donnée métier définitivement invalide',
      b: 'Timeout, deadlock en base de données, indisponibilité momentanée d’un service distant',
      c: 'Erreur de compilation Java',
      d: 'Annotation @Mock absente',
    },
    explanation:
      'Le retry aide pour les échecs transitoires. Une erreur de validation permanente doit plutôt être skippée ou faire échouer le step.',
  },
  {
    question:
      'Où Spring Batch conserve-t-il les métadonnées d’exécution pour permettre un restart ?',
    options: {
      a: 'Dans le JobRepository',
      b: 'Dans application.yml uniquement',
      c: 'Dans la JVM',
      d: 'Dans le serveur Tomcat',
    },
    explanation:
      'Le JobRepository persiste l’état d’exécution des Jobs et Steps pour qu’un run échoué puisse reprendre au dernier point commité.',
  },
  {
    question: 'Quelles informations le JobRepository conserve-t-il notamment ?',
    options: {
      a: 'État du Job et des Steps, compteurs et informations de reprise',
      b: 'Uniquement les logs HTTP',
      c: 'Uniquement le code source',
      d: 'Uniquement les mocks Mockito',
    },
    explanation:
      'Les métadonnées Batch incluent le statut d’exécution, les compteurs de lecture/écriture/skip et les positions nécessaires pour reprendre un Step.',
  },
  {
    question: 'Quel listener permet d’identifier les éléments effectivement ignorés ?',
    options: {
      a: 'ItemReadListener',
      b: 'SkipListener',
      c: 'ChunkListener',
      d: 'ItemWriteListener',
    },
    explanation:
      'Les callbacks SkipListener s’exécutent lorsqu’un item est ignoré en lecture, traitement ou écriture : c’est l’endroit pour les journaliser ou les compter.',
  },
  {
    question:
      'Quel listener permet de réagir aux événements du chunk, notamment à une erreur ?',
    options: {
      a: 'ChunkListener',
      b: 'SkipListener',
      c: 'ItemProcessListener',
      d: 'ItemReadListener',
    },
    explanation:
      'ChunkListener est notifié avant et après un chunk, et après une erreur de chunk, ce qui est utile pour surveiller le travail par intervalle de commit.',
  },
  {
    question: 'Quels sont les mécanismes de gestion des erreurs cités pour Spring Batch ?',
    options: {
      a: 'skip',
      b: 'retry',
      c: 'restart',
      d: 'Les listeners',
    },
    explanation:
      'Spring Batch peut ignorer des items, retenter des échecs transitoires, redémarrer grâce aux métadonnées du JobRepository, et observer les échecs via des listeners.',
  },
  {
    question:
      'Si une exception est levée par toto.save(), que se passe-t-il généralement ?',
    options: {
      a: 'L’exécution de la méthode s’arrête et la transaction est généralement annulée',
      b: 'La méthode continue et unAutreAppel() s’exécute toujours',
      c: 'Spring ignore l’exception',
      d: 'La JVM redémarre',
    },
    explanation:
      'Une exception non capturée quitte immédiatement la méthode, donc les instructions suivantes ne s’exécutent pas. Pour une RuntimeException ou une Error, l’interceptor transactionnel annule en général la transaction.',
  },
  {
    question: 'Comment imposer un rollback même sur une exception vérifiée ?',
    options: {
      a: '@Transactional(rollbackFor = Exception.class)',
      b: '@Transactional(skip = Exception.class)',
      c: '@Async(Exception.class)',
      d: '@Mock(Exception.class)',
    },
    explanation:
      'Par défaut, les exceptions vérifiées ne provoquent pas de rollback. rollbackFor liste les types qui doivent annuler la transaction, par exemple Exception.class.',
  },
  {
    question:
      'Dans un appel asynchrone classique avec @Async, une exception dans la méthode asynchrone provoque-t-elle automatiquement le rollback de la transaction du thread principal ?',
    options: {
      a: 'Oui, toujours',
      b: 'Non, elle ne remonte pas automatiquement dans la méthode appelante',
      c: 'Oui, si l’exception est une RuntimeException',
      d: 'Oui, si la méthode est private',
    },
    explanation:
      '@Async s’exécute sur un autre thread. Une exception là-bas n’entre pas automatiquement dans la pile de l’appelant ni n’annule sa transaction, sauf si l’appelant observe un Future et réagit.',
  },
  {
    question:
      'Si la méthode asynchrone retourne un Future ou un CompletableFuture, que peut faire l’appelant ?',
    options: {
      a: 'Récupérer le résultat et observer l’erreur',
      b: 'Rien, l’erreur est toujours perdue',
      c: 'Forcer un rollback de la JVM',
      d: 'Désactiver Spring Batch',
    },
    explanation:
      'Appeler get() sur un Future (ou joindre un CompletableFuture) fait remonter l’échec asynchrone à l’appelant, qui peut alors le traiter.',
  },
  {
    question:
      'Pourquoi @Transactional sur une méthode private appelée depuis la même classe ne fonctionne-t-il pas comme prévu ?',
    options: {
      a: 'Parce que la méthode est private et que l’appel est interne à la même classe',
      b: 'Parce que @Transactional ne fonctionne qu’avec @Mock',
      c: 'Parce que Spring Batch l’interdit',
      d: 'Parce que la méthode retourne void',
    },
    explanation:
      'L’AOP Spring basée sur proxy intercepte les appels qui passent par le proxy du bean. Une auto-invocation, surtout vers une méthode private, n’entre jamais dans ce proxy, donc aucun advice transactionnel ne s’applique.',
  },
  {
    question:
      'Dans le code donné, si toto.save() lève une exception, quelles affirmations sont correctes ?',
    options: {
      a: 'unAutreAppel() n’est pas exécuté',
      b: 'L’exception remonte vers l’appelant',
      c: 'Spring ne déclenche pas de rollback via l’annotation de methode2()',
      d: 'Spring active toujours l’interceptor transactionnel malgré l’appel interne',
    },
    explanation:
      'L’exception arrête la méthode et remonte, donc les appels suivants ne s’exécutent pas. Comme l’appel n’est pas passé par le proxy, l’interceptor @Transactional de cette méthode interne ne démarre ni n’annule de transaction à lui seul.',
  },
  {
    question: 'Quelle est la solution classique pour corriger le problème de self-invocation ?',
    options: {
      a: 'Placer la méthode transactionnelle dans un autre bean Spring',
      b: 'Mettre la méthode en private',
      c: 'Utiliser @Mock',
      d: 'Utiliser un for-each',
    },
    explanation:
      'Appeler un autre bean passe par son proxy, donc l’advice transactionnel s’applique. Rendre la méthode private aggrave le problème.',
  },
  {
    question:
      'Une transaction démarrée par un appelant extérieur peut-elle englober l’exécution de la méthode ?',
    options: {
      a: 'Oui, cela est possible',
      b: 'Non, jamais',
      c: 'Uniquement avec @Async',
      d: 'Uniquement avec JOIN FETCH',
    },
    explanation:
      'Avec la propagation REQUIRED par défaut, un appel transactionnel extérieur joint ou démarre une transaction qui couvre les appels imbriqués passant par des proxies.',
  },
  {
    question: 'Qu’est-ce qu’un test unitaire (TU) ?',
    options: {
      a: 'Un test qui vérifie une unité de code de manière isolée',
      b: 'Un test qui utilise obligatoirement une base de données réelle',
      c: 'Un test qui démarre toujours Tomcat',
      d: 'Un test qui vérifie uniquement le déploiement',
    },
    explanation:
      'Un test unitaire se concentre sur une classe ou une méthode et remplace en général les collaborateurs par des doubles de test, sans démarrer tout le système.',
  },
  {
    question: 'Qu’est-ce qu’un test d’intégration (TI) ?',
    options: {
      a: 'Un test qui vérifie que plusieurs composants fonctionnent ensemble',
      b: 'Un test qui teste uniquement une méthode privée',
      c: 'Un test qui remplace tous les composants par des mocks',
      d: 'Un test qui ne peut jamais utiliser Spring',
    },
    explanation:
      'Les tests d’intégration exercent la collaboration entre de vrais composants, souvent avec Spring, une base ou une couche HTTP.',
  },
  {
    question: 'Quelles caractéristiques correspondent généralement à un TU ?',
    options: {
      a: 'Exécution rapide et dépendances externes souvent simulées avec Mockito',
      b: 'Exécution lente et base de données réelle obligatoire',
      c: 'Serveur HTTP réel obligatoire',
      d: 'Contexte Spring complet obligatoire',
    },
    explanation:
      'Les tests unitaires restent rapides en mockant les collaborateurs. Charger Spring ou une base en fait des tests d’intégration plus lourds.',
  },
  {
    question: 'Quelles caractéristiques correspondent généralement à un TI ?',
    options: {
      a: 'Exécution plus lente, contexte Spring réel ou base de données ou serveur HTTP possibles',
      b: 'Exécution toujours instantanée',
      c: 'Aucune dépendance externe',
      d: 'Interdiction d’utiliser Spring Boot',
    },
    explanation:
      'Les tests d’intégration démarrent souvent des slices ou le contexte Spring complet et peuvent parler à de vraies infrastructures, donc ils sont plus lents.',
  },
  {
    question: 'Que fait @Mock ?',
    options: {
      a: 'Crée un objet simulé',
      b: 'Crée l’objet à tester et injecte les mocks',
      c: 'Démarre Spring Boot',
      d: 'Charge une relation Hibernate',
    },
    explanation:
      '@Mock demande à Mockito de créer un double de test pour une dépendance. Il ne construit pas la classe sous test.',
  },
  {
    question: 'Que fait @InjectMocks ?',
    options: {
      a: 'Crée l’objet à tester et lui injecte les mocks compatibles',
      b: 'Crée un faux repository uniquement',
      c: 'Supprime les dépendances',
      d: 'Lance un Job Spring Batch',
    },
    explanation:
      '@InjectMocks instancie la classe sous test et tente d’y injecter les champs annotés @Mock (ou @Spy).',
  },
  {
    question: 'Que permet when(clientRepository.findById(1L)).thenReturn(...) ?',
    options: {
      a: 'Définir le comportement d’un mock',
      b: 'Démarrer l’ApplicationContext',
      c: 'Configurer un JOIN FETCH',
      d: 'Créer un ChunkListener',
    },
    explanation:
      'Stubber avec when(...).thenReturn(...) indique à Mockito ce qu’un mock doit renvoyer lorsque cette méthode est appelée avec des arguments correspondants.',
  },
  {
    question: 'Avec quelle extension Mockito utilise-t-on souvent @Mock et @InjectMocks ?',
    options: {
      a: '@ExtendWith(MockitoExtension.class)',
      b: '@SpringBootApplication',
      c: '@Transactional(rollbackFor = Exception.class)',
      d: '@Async',
    },
    explanation:
      'MockitoExtension initialise les champs @Mock et @InjectMocks pour les tests JUnit 5 sans démarrer Spring.',
  },
  {
    question: `Quel est le problème du code suivant ?

for (String s : maListe) {
    if (maListe.contains(s)) {
        maListe.remove(s);
    }
}`,
    options: {
      a: 'On modifie la liste avec remove() pendant que le for-each la parcourt, ce qui peut provoquer une ConcurrentModificationException',
      b: 'contains() ne compile pas',
      c: 'ArrayList ne peut pas contenir de String',
      d: 'for-each ne fonctionne pas avec les listes',
    },
    explanation:
      'Le for-each utilise un Iterator en coulisse. Modifier structurellement la liste via maListe.remove pendant cette itération fait détecter une concurrent modification.',
  },
  {
    question: 'Quelles solutions sont adaptées pour supprimer des éléments pendant un parcours ?',
    options: {
      a: 'removeIf()',
      b: 'removeAll()',
      c: 'Un Iterator avec sa méthode remove()',
      d: 'Modifier la liste directement dans un for-each',
    },
    explanation:
      'removeIf, removeAll et Iterator.remove sont conçus pour des mises à jour structurelles sûres. Appeler List.remove dans un for-each ne l’est pas.',
  },
  {
    question: 'Que signifie EAGER pour une association Hibernate ?',
    options: {
      a: 'La relation doit être chargée lorsque l’entité est récupérée, même si la manière dépend de la requête et du contexte Hibernate',
      b: 'La relation n’est jamais chargée',
      c: 'La relation est chargée uniquement après la fermeture de la session',
      d: 'La relation est ignorée',
    },
    explanation:
      'FetchType.EAGER signifie que le provider doit rendre l’association disponible au chargement de l’entité. Hibernate peut utiliser une jointure, un select séparé ou une autre stratégie selon la requête.',
  },
  {
    question: 'Que permet JOIN FETCH dans un repository ?',
    options: {
      a: 'Charger une relation dans la même requête SQL',
      b: 'Créer un mock Mockito',
      c: 'Démarrer Spring Boot',
      d: 'Ignorer une exception Spring Batch',
    },
    explanation:
      'JOIN FETCH demande à JPQL/HQL de charger l’association dans la même requête, ce qui aide à éviter LazyInitializationException et les selects N+1.',
  },
  {
    question: `Dans la requête suivante, quelle relation est chargée ?

@Query("""
    SELECT c
    FROM Client c
    LEFT JOIN FETCH c.commandes
    WHERE c.id = :id
""")`,
    options: {
      a: 'La relation c.commandes est chargée dans la même requête',
      b: 'La relation c.commandes est ignorée',
      c: 'La relation c.commandes est chargée uniquement en LAZY',
      d: 'La requête ne compile pas',
    },
    explanation:
      'LEFT JOIN FETCH c.commandes demande à Hibernate de charger la collection commandes avec Client dans cette requête.',
  },
];

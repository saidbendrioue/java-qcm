// Original Hibernate questions for the Java QCM.

const guide = 'Hibernate ORM User Guide';

export const hibernateQuestions = [
  {
    category: 'Hibernate',
    difficulty: 'easy',
    question: 'What is Hibernate?',
    options: [
      { id: 'a', text: 'A Java EE application server' },
      { id: 'b', text: 'An ORM framework for Java' },
      { id: 'c', text: 'A web template engine' },
      { id: 'd', text: 'A build tool' },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Hibernate is an object-relational mapping (ORM) framework that links Java objects to tables in a relational database.',
    reference: `${guide} — Architecture`,
  },
  {
    category: 'Hibernate',
    difficulty: 'easy',
    question: 'What does the acronym ORM stand for?',
    options: [
      { id: 'a', text: 'Object Resource Manager' },
      { id: 'b', text: 'Online Relational Model' },
      { id: 'c', text: 'Object-Relational Mapping' },
      { id: 'd', text: 'Object Runtime Mapping' },
    ],
    correctOptionIds: ['c'],
    explanation:
      'ORM means Object-Relational Mapping: the correspondence between the object model and the relational model.',
    reference: `${guide} — Architecture`,
  },
  {
    category: 'Hibernate',
    difficulty: 'easy',
    type: 'multiple',
    question: 'Which of these are advantages of Hibernate compared with raw JDBC?',
    options: [
      { id: 'a', text: 'Less repetitive JDBC code' },
      { id: 'b', text: 'Automatic mapping between objects and tables' },
      { id: 'c', text: 'It removes any need to know SQL and the relational model' },
      { id: 'd', text: 'Built-in features (cache, lazy loading, dirty checking)' },
    ],
    correctOptionIds: ['a', 'b', 'd'],
    explanation:
      'Hibernate reduces repetitive code and provides a cache, lazy loading, and dirty checking. It does not remove the need to understand SQL or the relational model.',
    reference: `${guide} — Architecture`,
  },
  {
    category: 'Hibernate',
    difficulty: 'easy',
    type: 'truefalse',
    question: 'Hibernate is an implementation of the JPA specification.',
    options: [
      { id: 'a', text: 'True' },
      { id: 'b', text: 'False' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'JPA is the specification and Hibernate is its most widely used implementation. Hibernate also offers native APIs in addition to JPA.',
    reference: `${guide} — Architecture`,
  },
  {
    category: 'Hibernate',
    difficulty: 'easy',
    question:
      'Which file classically holds the main Hibernate configuration (connection, dialect, mappings)?',
    options: [
      { id: 'a', text: 'persistence.json' },
      { id: 'b', text: 'hibernate.cfg.xml' },
      { id: 'c', text: 'session.properties' },
      { id: 'd', text: 'orm.config' },
    ],
    correctOptionIds: ['b'],
    explanation:
      'hibernate.cfg.xml is the historical file. hibernate.properties, or persistence.xml on the JPA side, can also be used.',
    reference: `${guide} — Bootstrap`,
  },
  {
    category: 'Hibernate',
    difficulty: 'easy',
    question: 'Which annotation declares that a class is a persistent entity?',
    options: [
      { id: 'a', text: '@Table' },
      { id: 'b', text: '@Persistent' },
      { id: 'c', text: '@Entity' },
      { id: 'd', text: '@Mapped' },
    ],
    correctOptionIds: ['c'],
    explanation:
      '@Entity (package jakarta.persistence, formerly javax.persistence) marks the class as an entity managed by Hibernate.',
    reference: `${guide} — Domain Model`,
  },
  {
    category: 'Hibernate',
    difficulty: 'easy',
    type: 'truefalse',
    question: 'A SessionFactory is thread-safe and is generally created only once per application.',
    options: [
      { id: 'a', text: 'True' },
      { id: 'b', text: 'False' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'The SessionFactory is a heavy, immutable, thread-safe object. It is created at startup and shared.',
    reference: `${guide} — Bootstrap`,
  },
  {
    category: 'Hibernate',
    difficulty: 'easy',
    type: 'truefalse',
    question: 'A Hibernate Session is thread-safe and can be shared across several threads.',
    options: [
      { id: 'a', text: 'True' },
      { id: 'b', text: 'False' },
    ],
    correctOptionIds: ['b'],
    explanation:
      'The Session is lightweight and is not thread-safe. Use one per unit of work or per thread.',
    reference: `${guide} — Persistence Context`,
  },
  {
    category: 'Hibernate',
    difficulty: 'easy',
    question: 'What is the role of the SessionFactory?',
    options: [
      { id: 'a', text: 'A lightweight object created for every request' },
      { id: 'b', text: 'A Session factory that is expensive to create and shared across the application' },
      { id: 'c', text: 'It represents a transaction' },
      { id: 'd', text: 'It represents a table row' },
    ],
    correctOptionIds: ['b'],
    explanation:
      'The SessionFactory builds Session instances from the configuration. It also holds the second-level cache.',
    reference: `${guide} — Bootstrap`,
  },
  {
    category: 'Hibernate',
    difficulty: 'easy',
    question: 'What is HQL?',
    options: [
      { id: 'a', text: 'An object-oriented query language that works with entities and their properties' },
      { id: 'b', text: 'An SQL dialect reserved for creating tables' },
      { id: 'c', text: 'A mapping file format' },
      { id: 'd', text: 'A network protocol to the database' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'HQL looks like SQL but is written against class and property names. Hibernate then translates it to SQL.',
    reference: `${guide} — HQL and JPQL`,
  },
  {
    category: 'Hibernate',
    difficulty: 'easy',
    question: 'Which property prints the SQL generated by Hibernate?',
    options: [
      { id: 'a', text: 'hibernate.print_queries' },
      { id: 'b', text: 'hibernate.show_sql' },
      { id: 'c', text: 'hibernate.log_all' },
      { id: 'd', text: 'hibernate.debug_sql' },
    ],
    correctOptionIds: ['b'],
    explanation:
      'hibernate.show_sql=true prints the SQL, and hibernate.format_sql indents it. In production, configuring the org.hibernate.SQL logger is preferable.',
    reference: `${guide} — Logging`,
  },
  {
    category: 'Hibernate',
    difficulty: 'easy',
    type: 'truefalse',
    question: 'Lazy loading means associated data is loaded only when it is accessed for the first time.',
    options: [
      { id: 'a', text: 'True' },
      { id: 'b', text: 'False' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Hibernate replaces the association with a proxy or a special collection. The SQL query runs on the first access.',
    reference: `${guide} — Fetching`,
  },
  {
    category: 'Hibernate',
    difficulty: 'easy',
    question: 'What is the Criteria API for?',
    options: [
      { id: 'a', text: 'Building queries programmatically, with type checks' },
      { id: 'b', text: 'Configuring the second-level cache' },
      { id: 'c', text: 'Managing transactions' },
      { id: 'd', text: 'Generating the database schema' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'The Criteria API avoids HQL strings and lets you build queries dynamically with compile-time checks.',
    reference: `${guide} — Criteria`,
  },
  {
    category: 'Hibernate',
    difficulty: 'medium',
    question: 'What does session.get() return when no entity matches the identifier?',
    options: [
      { id: 'a', text: 'An ObjectNotFoundException' },
      { id: 'b', text: 'null' },
      { id: 'c', text: 'An empty proxy' },
      { id: 'd', text: 'An entity with default values' },
    ],
    correctOptionIds: ['b'],
    explanation: 'get() runs the query immediately and returns null when the row does not exist.',
    reference: `${guide} — Loading entities`,
  },
  {
    category: 'Hibernate',
    difficulty: 'medium',
    question: 'What does session.load() do?',
    options: [
      { id: 'a', text: 'An immediate SELECT, and it returns null when the entity is missing' },
      {
        id: 'b',
        text: 'It returns a proxy without an immediate query, and accessing it throws if the row does not exist',
      },
      { id: 'c', text: 'It loads every entity in the table' },
      { id: 'd', text: 'It deletes the entity' },
    ],
    correctOptionIds: ['b'],
    explanation: 'load() returns a lazy reference. In recent versions, getReference() replaces it.',
    reference: `${guide} — Loading entities`,
  },
  {
    category: 'Hibernate',
    difficulty: 'medium',
    question: 'What is the typical cause of a LazyInitializationException?',
    options: [
      { id: 'a', text: 'The entity has no @Id' },
      { id: 'b', text: 'A lazy association is read after the Session is closed' },
      { id: 'c', text: 'Two transactions modify the same row' },
      { id: 'd', text: 'The HQL query is malformed' },
    ],
    correctOptionIds: ['b'],
    explanation:
      'The proxy can no longer load its data once the Session is closed. JOIN FETCH, an EntityGraph, or keeping the session open for as long as needed addresses this.',
    reference: `${guide} — Fetching`,
  },
  {
    category: 'Hibernate',
    difficulty: 'medium',
    question: 'What is the default fetch type of a @OneToMany association?',
    options: [
      { id: 'a', text: 'EAGER' },
      { id: 'b', text: 'LAZY' },
      { id: 'c', text: 'SUBSELECT' },
      { id: 'd', text: 'JOIN' },
    ],
    correctOptionIds: ['b'],
    explanation:
      'According to JPA, @OneToMany and @ManyToMany are LAZY by default, whereas @ManyToOne and @OneToOne are EAGER.',
    reference: 'Jakarta Persistence — FetchType',
  },
  {
    category: 'Hibernate',
    difficulty: 'medium',
    type: 'multiple',
    question: 'Which associations are EAGER by default according to JPA?',
    options: [
      { id: 'a', text: '@OneToOne' },
      { id: 'b', text: '@ManyToOne' },
      { id: 'c', text: '@OneToMany' },
      { id: 'd', text: '@ManyToMany' },
    ],
    correctOptionIds: ['a', 'b'],
    explanation:
      'To-one associations are EAGER by default, and collections are LAZY. It is often advisable to switch the former to LAZY.',
    reference: 'Jakarta Persistence — FetchType',
  },
  {
    category: 'Hibernate',
    difficulty: 'medium',
    type: 'multiple',
    question: 'Which of the following are entity lifecycle states?',
    options: [
      { id: 'a', text: 'Transient' },
      { id: 'b', text: 'Persistent' },
      { id: 'c', text: 'Detached' },
      { id: 'd', text: 'Suspended' },
    ],
    correctOptionIds: ['a', 'b', 'c'],
    explanation: 'The states are transient, persistent (managed), detached, and removed. "Suspended" does not exist.',
    reference: `${guide} — Persistence Context`,
  },
  {
    category: 'Hibernate',
    difficulty: 'medium',
    question: 'Which method moves a transient instance to the persistent state?',
    options: [
      { id: 'a', text: 'evict()' },
      { id: 'b', text: 'persist()' },
      { id: 'c', text: 'detach()' },
      { id: 'd', text: 'clear()' },
    ],
    correctOptionIds: ['b'],
    explanation: 'persist() makes the entity managed by the persistence context. The INSERT is issued at flush.',
    reference: `${guide} — Persisting entities`,
  },
  {
    category: 'Hibernate',
    difficulty: 'medium',
    question: 'What does session.evict(entity) do?',
    options: [
      { id: 'a', text: 'Deletes the row in the database' },
      { id: 'b', text: 'Removes the entity from the persistence context (it becomes detached)' },
      { id: 'c', text: 'Reloads the entity from the database' },
      { id: 'd', text: 'Locks the entity' },
    ],
    correctOptionIds: ['b'],
    explanation:
      'evict() (detach() in JPA) removes the entity from the first-level cache without touching the database.',
    reference: `${guide} — Persistence Context`,
  },
  {
    category: 'Hibernate',
    difficulty: 'medium',
    question: 'What does session.flush() do?',
    options: [
      { id: 'a', text: 'Commits the transaction and closes the session' },
      {
        id: 'b',
        text: 'Synchronizes the persistence context with the database (runs the pending SQL) without a commit',
      },
      { id: 'c', text: 'Clears the second-level cache' },
      { id: 'd', text: 'Removes entities from memory' },
    ],
    correctOptionIds: ['b'],
    explanation:
      'flush() sends the pending INSERT, UPDATE, and DELETE statements. The transaction is committed only by commit.',
    reference: `${guide} — Flushing`,
  },
  {
    category: 'Hibernate',
    difficulty: 'medium',
    question: 'What is the main difference between save() (native API) and persist() (JPA)?',
    options: [
      { id: 'a', text: 'There is no difference' },
      { id: 'b', text: 'save() returns the identifier, persist() returns void' },
      { id: 'c', text: 'persist() returns the identifier, save() returns void' },
      { id: 'd', text: 'save() works only on detached entities' },
    ],
    correctOptionIds: ['b'],
    explanation:
      'save() returns the identifier and may force the INSERT immediately depending on the generation strategy. persist() follows the JPA standard, and save() is deprecated in recent versions.',
    reference: `${guide} — Persisting entities`,
  },
  {
    category: 'Hibernate',
    difficulty: 'medium',
    question: 'What does merge() do?',
    options: [
      { id: 'a', text: 'Merges two tables' },
      { id: 'b', text: 'Copies the state of a detached instance into a persistent instance and returns the latter' },
      { id: 'c', text: 'Merges two sessions' },
      { id: 'd', text: 'Removes duplicates' },
    ],
    correctOptionIds: ['b'],
    explanation:
      'merge() does not reattach the object that was passed in. It returns the managed instance, which should be used afterwards.',
    reference: `${guide} — Merging detached entities`,
  },
  {
    category: 'Hibernate',
    difficulty: 'medium',
    type: 'truefalse',
    question:
      'Unlike update(), merge() can throw a NonUniqueObjectException when another instance with the same identifier is already in the session.',
    options: [
      { id: 'a', text: 'True' },
      { id: 'b', text: 'False' },
    ],
    correctOptionIds: ['b'],
    explanation:
      'It is update() or saveOrUpdate() that throw this exception, because they reattach the object as-is. merge() copies the state into the instance that is already present.',
    reference: `${guide} — Merging detached entities`,
  },
  {
    category: 'Hibernate',
    difficulty: 'medium',
    question: 'What is the scope of the first-level cache?',
    options: [
      { id: 'a', text: 'The SessionFactory' },
      { id: 'b', text: 'The whole JVM' },
      { id: 'c', text: 'The Session' },
      { id: 'd', text: 'The cluster' },
    ],
    correctOptionIds: ['c'],
    explanation:
      'The first-level cache is bound to the Session (or the EntityManager). It is always active and cannot be disabled.',
    reference: `${guide} — Caching`,
  },
  {
    category: 'Hibernate',
    difficulty: 'medium',
    question: 'What is true of the second-level cache?',
    options: [
      { id: 'a', text: 'It is active by default and bound to a Session' },
      {
        id: 'b',
        text: 'It is optional, shared at the SessionFactory level, and requires a provider (for example Ehcache or Caffeine)',
      },
      { id: 'c', text: 'It replaces the first-level cache' },
      { id: 'd', text: 'It stores only query results' },
    ],
    correctOptionIds: ['b'],
    explanation: 'It is configured explicitly and chosen entity by entity. It is shared by every session.',
    reference: `${guide} — Caching`,
  },
  {
    category: 'Hibernate',
    difficulty: 'hard',
    question: 'What does the query cache mainly store?',
    options: [
      { id: 'a', text: 'Complete entities' },
      {
        id: 'b',
        text: 'The identifiers of the results (the entities come from the second-level cache or the database)',
      },
      { id: 'c', text: 'Only the generated SQL' },
      { id: 'd', text: 'In-flight transactions' },
    ],
    correctOptionIds: ['b'],
    explanation:
      'The query cache keeps the list of identifiers for a query and its parameters. It is of little use without a second-level cache, and it is invalidated whenever the affected table changes.',
    reference: `${guide} — Caching`,
  },
  {
    category: 'Hibernate',
    difficulty: 'medium',
    question: 'Which JPA method runs native SQL through the EntityManager?',
    options: [
      { id: 'a', text: 'createQuery' },
      { id: 'b', text: 'createNativeQuery' },
      { id: 'c', text: 'createCriteria' },
      { id: 'd', text: 'createSQLPlan' },
    ],
    correctOptionIds: ['b'],
    explanation:
      'createNativeQuery() runs raw SQL. In the native API, the historical equivalent is createSQLQuery().',
    reference: `${guide} — Native SQL`,
  },
  {
    category: 'Hibernate',
    difficulty: 'medium',
    question: 'What is the main benefit of @NamedQuery?',
    options: [
      { id: 'a', text: 'It always runs native SQL' },
      { id: 'b', text: 'The query is declared once, checked at startup, and reusable by its name' },
      { id: 'c', text: 'It automatically caches the result' },
      { id: 'd', text: 'It forbids parameters' },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Named queries are validated at startup, which catches errors early, and they can be prepared once.',
    reference: 'Jakarta Persistence — Named queries',
  },
  {
    category: 'Hibernate',
    difficulty: 'medium',
    question: 'What is the "N+1 selects" problem?',
    options: [
      { id: 'a', text: 'One main query followed by N extra queries to load the association of each result' },
      { id: 'b', text: 'N transactions for a single commit' },
      { id: 'c', text: 'N sessions open at the same time' },
      { id: 'd', text: 'N missing indexes' },
    ],
    correctOptionIds: ['a'],
    explanation: 'Typically, N parents are loaded, then each parent triggers a SELECT for its lazy collection.',
    reference: `${guide} — Fetching`,
  },
  {
    category: 'Hibernate',
    difficulty: 'hard',
    type: 'multiple',
    question: 'Which techniques reduce the N+1 problem?',
    options: [
      { id: 'a', text: 'JOIN FETCH in the query' },
      { id: 'b', text: '@EntityGraph' },
      { id: 'c', text: 'Making every association EAGER' },
      { id: 'd', text: '@BatchSize (batch fetching)' },
    ],
    correctOptionIds: ['a', 'b', 'd'],
    explanation:
      'A fetch join, entity graphs, and batch fetching reduce the number of queries. Making everything EAGER often makes the problem worse.',
    reference: `${guide} — Fetching`,
  },
  {
    category: 'Hibernate',
    difficulty: 'medium',
    question: 'Which of these strategies does not exist in InheritanceType?',
    options: [
      { id: 'a', text: 'SINGLE_TABLE' },
      { id: 'b', text: 'JOINED' },
      { id: 'c', text: 'TABLE_PER_CLASS' },
      { id: 'd', text: 'TABLE_PER_PACKAGE' },
    ],
    correctOptionIds: ['d'],
    explanation: 'The three JPA strategies are SINGLE_TABLE, JOINED, and TABLE_PER_CLASS.',
    reference: 'Jakarta Persistence — Inheritance',
  },
  {
    category: 'Hibernate',
    difficulty: 'hard',
    question: 'What is the main drawback of the SINGLE_TABLE strategy?',
    options: [
      { id: 'a', text: 'Every read requires a join' },
      { id: 'b', text: 'Columns that belong to subclasses must be nullable' },
      { id: 'c', text: 'Polymorphic queries are impossible' },
      { id: 'd', text: 'It creates one table per subclass' },
    ],
    correctOptionIds: ['b'],
    explanation:
      'The whole hierarchy shares one table with a discriminator column. A subclass column is therefore NULL for the other types, which limits NOT NULL constraints.',
    reference: 'Jakarta Persistence — Inheritance',
  },
  {
    category: 'Hibernate',
    difficulty: 'medium',
    question: 'Which of these values exists in GenerationType?',
    options: [
      { id: 'a', text: 'COUNTER' },
      { id: 'b', text: 'IDENTITY' },
      { id: 'c', text: 'RANDOM' },
      { id: 'd', text: 'INCREMENT' },
    ],
    correctOptionIds: ['b'],
    explanation: 'JPA provides AUTO, IDENTITY, SEQUENCE, TABLE, and, since JPA 3.1, UUID.',
    reference: 'Jakarta Persistence — Generated values',
  },
  {
    category: 'Hibernate',
    difficulty: 'hard',
    question: 'Why does GenerationType.IDENTITY cause problems for batch inserts?',
    options: [
      { id: 'a', text: 'It generates duplicate identifiers' },
      {
        id: 'b',
        text: 'Hibernate must run the INSERT immediately to learn the identifier, which disables insert batching',
      },
      { id: 'c', text: 'It is incompatible with transactions' },
      { id: 'd', text: 'It forces EAGER loading' },
    ],
    correctOptionIds: ['b'],
    explanation: 'With a SEQUENCE, Hibernate can reserve identifiers ahead of time and group the INSERT statements.',
    reference: `${guide} — Batching`,
  },
  {
    category: 'Hibernate',
    difficulty: 'medium',
    type: 'truefalse',
    question: 'An @Embeddable class has its own table and its own identity.',
    options: [
      { id: 'a', text: 'True' },
      { id: 'b', text: 'False' },
    ],
    correctOptionIds: ['b'],
    explanation:
      'An embedded component has no identity of its own. Its columns are stored in the table of the entity that contains it.',
    reference: `${guide} — Embeddables`,
  },
  {
    category: 'Hibernate',
    difficulty: 'medium',
    question: 'What is the mappedBy attribute for in a bidirectional association?',
    options: [
      { id: 'a', text: 'Naming the join table' },
      {
        id: 'b',
        text: 'Indicating that the association is managed by the other side (the owner); the current side is the inverse',
      },
      { id: 'c', text: 'Defining the cascade strategy' },
      { id: 'd', text: 'Enabling lazy loading' },
    ],
    correctOptionIds: ['b'],
    explanation:
      'The owning side holds the foreign key. The mappedBy side is not used when writing to the database.',
    reference: `${guide} — Associations`,
  },
  {
    category: 'Hibernate',
    difficulty: 'medium',
    question: 'What does CascadeType.REMOVE do?',
    options: [
      { id: 'a', text: 'Deletes the parent entity when a child is deleted' },
      { id: 'b', text: 'Propagates deletion of the parent to the associated entities' },
      { id: 'c', text: 'Detaches the associated entities' },
      { id: 'd', text: 'Prevents any deletion' },
    ],
    correctOptionIds: ['b'],
    explanation:
      'When the parent is deleted, the associated entities are deleted too. Use it carefully on shared associations.',
    reference: 'Jakarta Persistence — CascadeType',
  },
  {
    category: 'Hibernate',
    difficulty: 'hard',
    question: 'What does orphanRemoval = true do on a @OneToMany collection?',
    options: [
      { id: 'a', text: 'It deletes, in the database, children removed from the parent collection' },
      { id: 'b', text: 'It deletes parents that no longer have children' },
      { id: 'c', text: 'It disables cascades' },
      { id: 'd', text: 'It clears the second-level cache' },
    ],
    correctOptionIds: ['a'],
    explanation: 'An orphaned child, meaning one removed from the collection, is deleted at flush.',
    reference: 'Jakarta Persistence — Orphan removal',
  },
  {
    category: 'Hibernate',
    difficulty: 'medium',
    question: 'What does the @Version annotation set up?',
    options: [
      { id: 'a', text: 'Schema versioning' },
      { id: 'b', text: 'Optimistic locking through a version column' },
      { id: 'c', text: 'Pessimistic locking' },
      { id: 'd', text: 'Database migrations' },
    ],
    correctOptionIds: ['b'],
    explanation:
      'On every UPDATE, Hibernate checks and increments the version. A stale version raises an exception.',
    reference: `${guide} — Locking`,
  },
  {
    category: 'Hibernate',
    difficulty: 'medium',
    question: 'Which exception signals an optimistic lock conflict?',
    options: [
      { id: 'a', text: 'LazyInitializationException' },
      { id: 'b', text: 'OptimisticLockException (StaleObjectStateException on native Hibernate)' },
      { id: 'c', text: 'NonUniqueResultException' },
      { id: 'd', text: 'TransientObjectException' },
    ],
    correctOptionIds: ['b'],
    explanation:
      'It is thrown when the version in the database no longer matches the one read by the transaction.',
    reference: `${guide} — Locking`,
  },
  {
    category: 'Hibernate',
    difficulty: 'hard',
    question: 'What does LockModeType.PESSIMISTIC_WRITE generally produce?',
    options: [
      { id: 'a', text: 'A version column' },
      { id: 'b', text: 'A database lock, typically SELECT ... FOR UPDATE' },
      { id: 'c', text: 'A cache invalidation' },
      { id: 'd', text: 'A read-only entity' },
    ],
    correctOptionIds: ['b'],
    explanation:
      'The pessimistic lock is taken by the database, and the exact behavior depends on the DBMS and the dialect.',
    reference: `${guide} — Locking`,
  },
  {
    category: 'Hibernate',
    difficulty: 'medium',
    question: 'What is dirty checking?',
    options: [
      { id: 'a', text: 'Cleaning the cache' },
      {
        id: 'b',
        text: 'Automatic detection of changes to persistent entities, and generation of the UPDATE statements at flush',
      },
      { id: 'c', text: 'Validation of entered data' },
      { id: 'd', text: 'Detection of slow queries' },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Hibernate compares the current state of managed entities with their snapshot. No update() call is required inside a transaction.',
    reference: `${guide} — Flushing`,
  },
  {
    category: 'Hibernate',
    difficulty: 'medium',
    question:
      'Which hibernate.hbm2ddl.auto value drops and recreates the schema at startup, at the risk of losing data?',
    options: [
      { id: 'a', text: 'validate' },
      { id: 'b', text: 'update' },
      { id: 'c', text: 'create' },
      { id: 'd', text: 'none' },
    ],
    correctOptionIds: ['c'],
    explanation:
      'create drops and recreates the schema, and create-drop also drops it on shutdown. In production, prefer validate or none together with a migration tool such as Flyway or Liquibase.',
    reference: `${guide} — Schema generation`,
  },
  {
    category: 'Hibernate',
    difficulty: 'medium',
    question: 'What is the Hibernate dialect for?',
    options: [
      { id: 'a', text: 'Choosing the language of error messages' },
      { id: 'b', text: 'Adapting the generated SQL to the target DBMS' },
      { id: 'c', text: 'Defining the log format' },
      { id: 'd', text: 'Selecting the connection pool' },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Types, pagination, and functions vary from one DBMS to another. Recent versions can often detect the dialect automatically.',
    reference: `${guide} — Dialects`,
  },
  {
    category: 'Hibernate',
    difficulty: 'medium',
    type: 'truefalse',
    question: "Hibernate's built-in connection pool is recommended in production.",
    options: [
      { id: 'a', text: 'True' },
      { id: 'b', text: 'False' },
    ],
    correctOptionIds: ['b'],
    explanation:
      'The built-in pool is rudimentary. In production, use HikariCP, c3p0, or the application server pool.',
    reference: `${guide} — Connection pooling`,
  },
  {
    category: 'Hibernate',
    difficulty: 'hard',
    type: 'multiple',
    question: 'Which rules must an entity class follow?',
    options: [
      { id: 'a', text: 'Have a no-argument constructor (public or protected)' },
      { id: 'b', text: 'Not be final' },
      { id: 'c', text: 'Have an identifier (@Id)' },
      { id: 'd', text: 'Always implement Serializable' },
    ],
    correctOptionIds: ['a', 'b', 'c'],
    explanation:
      'The no-argument constructor and not being final allow Hibernate to create proxies for lazy loading. Serializable is required only in some cases, for example for composite keys.',
    reference: `${guide} — Entity classes`,
  },
  {
    category: 'Hibernate',
    difficulty: 'hard',
    question: 'What is the recommended practice for equals() and hashCode() on an entity?',
    options: [
      { id: 'a', text: 'Rely only on the generated id, without handling the null case before persist' },
      { id: 'b', text: 'Rely on a stable, immutable business key (or on the id, with care)' },
      { id: 'c', text: 'Include every lazy collection' },
      { id: 'd', text: 'Never override them, even for a Set' },
    ],
    correctOptionIds: ['b'],
    explanation:
      'A generated id is null before insert, which breaks Set and Map. A stable business key, or a careful id-based implementation, avoids that trap.',
    reference: `${guide} — Entity classes`,
  },
  {
    category: 'Hibernate',
    difficulty: 'hard',
    question: 'What is a StatelessSession?',
    options: [
      { id: 'a', text: 'A session without a transaction' },
      {
        id: 'b',
        text: 'A session without a persistence context (no first-level cache, no dirty checking, and no cascade), suited to bulk processing',
      },
      { id: 'c', text: 'A read-only session only' },
      { id: 'd', text: 'A session shared across threads' },
    ],
    correctOptionIds: ['b'],
    explanation:
      'It talks to the database directly, with less memory overhead. It suits large imports and exports.',
    reference: `${guide} — StatelessSession`,
  },
];

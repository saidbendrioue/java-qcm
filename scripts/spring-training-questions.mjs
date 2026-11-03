// Spring Boot / Batch / transactions / tests / Mockito / collections / Hibernate
// training set. Skips items already covered by the bank (SpringApplication.run,
// default @Transactional rollback types, Iterator.remove, EAGER/LAZY definitions).

const springRef = 'Spring Framework Reference Documentation';
const bootRef = 'Spring Boot Reference Documentation';
const batchRef = 'Spring Batch Reference Documentation';
const hibernateRef = 'Hibernate ORM User Guide';
const jls = 'Java Language Specification';

export const springTrainingQuestions = [
  {
    category: 'Spring Boot',
    difficulty: 'easy',
    question: 'What is the entry point of a Spring Boot application?',
    options: [
      { id: 'a', text: 'init()' },
      { id: 'b', text: 'main()' },
      { id: 'c', text: 'start()' },
      { id: 'd', text: 'SpringApplication()' },
    ],
    correctOptionIds: ['b'],
    explanation:
      'A Spring Boot application is a normal Java process. The JVM starts at main(), which typically calls SpringApplication.run to bootstrap the context.',
    reference: `${bootRef} — Using Spring Boot`,
  },
  {
    category: 'Spring Boot',
    difficulty: 'medium',
    question: 'Which configuration sources does Spring Boot load in particular?',
    options: [
      { id: 'a', text: 'Only application.properties' },
      {
        id: 'b',
        text: 'application.yml, application.properties, environment variables, and launch arguments',
      },
      { id: 'c', text: 'Only launch arguments' },
      { id: 'd', text: 'Only environment variables' },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Boot builds an Environment from several sources: classpath and external application.properties / application.yml, OS environment variables, and command-line arguments, among others.',
    reference: `${bootRef} — Externalized Configuration`,
  },
  {
    category: 'Spring',
    difficulty: 'easy',
    question: 'What is the ApplicationContext?',
    options: [
      { id: 'a', text: 'The embedded HTTP server' },
      { id: 'b', text: 'The container that manages Spring beans' },
      { id: 'c', text: 'The main configuration file' },
      { id: 'd', text: 'The transaction manager only' },
    ],
    correctOptionIds: ['b'],
    explanation:
      'ApplicationContext is Spring’s bean container. It creates beans, injects dependencies, publishes events, and holds the application configuration.',
    reference: `${springRef} — The IoC Container`,
  },
  {
    category: 'Spring Boot',
    difficulty: 'medium',
    question: 'What do component scanning and auto-configuration enable in particular?',
    options: [
      {
        id: 'a',
        text: 'Finding components and configuring the required infrastructure',
      },
      { id: 'b', text: 'Compiling Java code automatically' },
      { id: 'c', text: 'Replacing the JVM' },
      { id: 'd', text: 'Removing dependencies between beans' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Component scanning registers annotated types such as @Service. Auto-configuration adds infrastructure beans when conditions match, for example a DataSource when a driver is on the classpath.',
    reference: `${bootRef} — Auto-configuration`,
  },
  {
    category: 'Spring',
    difficulty: 'easy',
    question: 'Which of these annotations mark Spring components?',
    options: [
      { id: 'a', text: '@Service, @Repository, @RestController' },
      { id: 'b', text: '@Entity, @Table, @Column' },
      { id: 'c', text: '@Test, @BeforeEach, @AfterEach' },
      { id: 'd', text: '@Override, @Deprecated, @SuppressWarnings' },
    ],
    correctOptionIds: ['a'],
    explanation:
      '@Service, @Repository, and @RestController are Spring stereotypes discovered by component scanning. @Entity and friends are JPA mappings; the others are JUnit or Java language annotations.',
    reference: `${springRef} — Stereotype Annotations`,
  },
  {
    category: 'Spring',
    difficulty: 'easy',
    question: 'What happens during bean initialization?',
    options: [
      { id: 'a', text: 'Spring removes dependencies' },
      {
        id: 'b',
        text: 'Spring resolves dependencies and injects the required objects',
      },
      { id: 'c', text: 'Spring always starts Tomcat' },
      { id: 'd', text: 'Spring compiles classes' },
    ],
    correctOptionIds: ['b'],
    explanation:
      'When the context refreshes, Spring creates beans and injects their collaborators according to constructors, setters, or fields. An embedded server starts only for a web application.',
    reference: `${springRef} — Dependency Injection`,
  },
  {
    category: 'Spring Boot',
    difficulty: 'easy',
    question:
      'For a classic web application, what does it mean that the application has become operational?',
    options: [
      { id: 'a', text: 'The embedded server accepts HTTP requests' },
      { id: 'b', text: 'The JVM stops' },
      { id: 'c', text: 'main() is recompiled' },
      { id: 'd', text: 'Beans are deleted' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Once the context is ready and the embedded container (Tomcat, Jetty, or Undertow) is listening, the web application can serve HTTP traffic.',
    reference: `${bootRef} — Embedded Web Servers`,
  },
  {
    category: 'Spring Boot',
    difficulty: 'hard',
    question: 'What is the correct order of the main startup steps?',
    options: [
      {
        id: 'a',
        text: 'Context → JVM → beans → environment → application operational',
      },
      {
        id: 'b',
        text: 'JVM/main → SpringApplication → environment → context → bean detection/configuration → bean initialization → application operational',
      },
      {
        id: 'c',
        text: 'Environment → JVM → context → HTTP server → beans',
      },
      {
        id: 'd',
        text: 'Beans → context → JVM → environment → SpringApplication',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'The JVM enters main, SpringApplication prepares the Environment, creates and refreshes the ApplicationContext, discovers and configures beans, initializes them, then the application becomes ready to serve work.',
    reference: `${bootRef} — SpringApplication`,
  },
  {
    category: 'Spring Boot',
    difficulty: 'medium',
    question: 'When does Spring Boot publish events that indicate the application is ready?',
    options: [
      { id: 'a', text: 'Before the JVM starts' },
      { id: 'b', text: 'After the application has become operational' },
      { id: 'c', text: 'During compilation' },
      { id: 'd', text: 'Before the Spring context is created' },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Events such as ApplicationReadyEvent are published once startup has finished and the application is ready to handle requests or run ApplicationRunner / CommandLineRunner callbacks.',
    reference: `${bootRef} — Application Events and Listeners`,
  },
  {
    category: 'Spring',
    difficulty: 'medium',
    question: 'What are the two main operating styles of a Spring Batch Step?',
    options: [
      { id: 'a', text: 'EAGER and LAZY' },
      { id: 'b', text: 'Chunk-oriented and Tasklet' },
      { id: 'c', text: 'Reader and Writer' },
      { id: 'd', text: 'Skip and Retry' },
    ],
    correctOptionIds: ['b'],
    explanation:
      'A Step is either chunk-oriented (read–process–write in chunks) or a Tasklet that runs a single unit of work. Skip and retry are error policies, not Step styles.',
    reference: `${batchRef} — Configuring a Step`,
  },
  {
    category: 'Spring',
    difficulty: 'easy',
    question: 'What are the three components of chunk-oriented processing?',
    options: [
      { id: 'a', text: 'Reader, Processor, Writer' },
      { id: 'b', text: 'Listener, Job, Step' },
      { id: 'c', text: 'Mock, InjectMocks, Spy' },
      { id: 'd', text: 'EAGER, LAZY, JOIN FETCH' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'A chunk-oriented step uses an ItemReader, an optional ItemProcessor, and an ItemWriter. Items are grouped into chunks that commit together.',
    reference: `${batchRef} — Chunk-oriented Processing`,
  },
  {
    category: 'Spring',
    difficulty: 'easy',
    question: 'What does a Tasklet do?',
    options: [
      { id: 'a', text: 'It reads, transforms, and writes chunks' },
      { id: 'b', text: 'It executes a task' },
      { id: 'c', text: 'It starts Tomcat' },
      { id: 'd', text: 'It configures Hibernate' },
    ],
    correctOptionIds: ['b'],
    explanation:
      'A Tasklet is a Step that runs one piece of work, such as cleaning a directory or calling a stored procedure, instead of processing items in chunks.',
    reference: `${batchRef} — TaskletStep`,
  },
  {
    category: 'Spring',
    difficulty: 'medium',
    question:
      'By default, if an unhandled exception fails a chunk, what usually happens?',
    options: [
      {
        id: 'a',
        text: 'The transaction is usually rolled back and the Step goes to FAILED',
      },
      { id: 'b', text: 'The chunk is automatically skipped' },
      { id: 'c', text: 'The Job always continues without failing' },
      { id: 'd', text: 'Spring Batch restarts the JVM' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Without skip or retry configured for that failure, the chunk transaction rolls back and the Step execution ends in FAILED, which typically fails the Job as well.',
    reference: `${batchRef} — Configuring Skip Logic`,
  },
  {
    category: 'Spring',
    difficulty: 'easy',
    question: 'If nothing allows processing to continue, what happens to the Job?',
    options: [
      { id: 'a', text: 'It always stays COMPLETED' },
      { id: 'b', text: 'It fails in turn' },
      { id: 'c', text: 'It is deleted' },
      { id: 'd', text: 'It switches to Tasklet mode' },
    ],
    correctOptionIds: ['b'],
    explanation:
      'When a Step fails and no recovery path remains, the Job execution fails instead of completing successfully.',
    reference: `${batchRef} — JobRepository`,
  },
  {
    category: 'Spring',
    difficulty: 'hard',
    question:
      'Does a rollback necessarily mean that 500 orders will be read again in exactly the same way?',
    options: [
      { id: 'a', text: 'Yes, always' },
      {
        id: 'b',
        text: 'No: it depends on the error type, the configuration, and the reader behavior',
      },
      { id: 'c', text: 'Yes, only with a Tasklet' },
      { id: 'd', text: 'No, because Spring Batch never rolls back' },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Rollback undoes the chunk transaction, but restart and re-read behavior depend on skip/retry settings, commit interval, and whether the ItemReader is restartable and positioned correctly.',
    reference: `${batchRef} — Restart and Controlling Step Execution`,
  },
  {
    category: 'Spring',
    difficulty: 'easy',
    question: 'What is the skip mechanism for?',
    options: [
      {
        id: 'a',
        text: 'Ignoring a failing item and continuing with the others',
      },
      { id: 'b', text: 'Restarting the JVM' },
      { id: 'c', text: 'Loading Hibernate associations' },
      { id: 'd', text: 'Creating a Mockito mock' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Skip lets the Step discard items that raise configured exceptions and keep processing the rest, up to a configured skip limit.',
    reference: `${batchRef} — Configuring Skip Logic`,
  },
  {
    category: 'Spring',
    difficulty: 'easy',
    question: 'What is the retry mechanism for?',
    options: [
      { id: 'a', text: 'Retrying a potentially temporary failure' },
      { id: 'b', text: 'Permanently deleting an item' },
      { id: 'c', text: 'Creating an ApplicationContext' },
      { id: 'd', text: 'Ignoring every chunk' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Retry re-attempts an operation that may succeed later, for example after a short database deadlock or remote timeout.',
    reference: `${batchRef} — Retry`,
  },
  {
    category: 'Spring',
    difficulty: 'medium',
    question: 'Which are examples of errors suited to a retry?',
    options: [
      { id: 'a', text: 'Permanently invalid business data' },
      {
        id: 'b',
        text: 'Timeout, database deadlock, temporary unavailability of a remote service',
      },
      { id: 'c', text: 'Java compilation error' },
      { id: 'd', text: 'Missing @Mock annotation' },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Retry helps with transient failures. Permanent validation errors should usually be skipped or failed, not retried endlessly.',
    reference: `${batchRef} — Retry`,
  },
  {
    category: 'Spring',
    difficulty: 'medium',
    question: 'Where does Spring Batch store execution metadata to allow a restart?',
    options: [
      { id: 'a', text: 'In the JobRepository' },
      { id: 'b', text: 'Only in application.yml' },
      { id: 'c', text: 'In the JVM' },
      { id: 'd', text: 'In the Tomcat server' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'The JobRepository persists Job and Step execution state so a failed run can restart from the last committed point instead of repeating finished work.',
    reference: `${batchRef} — JobRepository`,
  },
  {
    category: 'Spring',
    difficulty: 'medium',
    question: 'Which information does the JobRepository keep in particular?',
    options: [
      {
        id: 'a',
        text: 'Job and Step status, counters, and restart information',
      },
      { id: 'b', text: 'Only HTTP logs' },
      { id: 'c', text: 'Only source code' },
      { id: 'd', text: 'Only Mockito mocks' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Batch metadata includes execution status, read/write/skip counts, and positions needed to resume a Step after a failure.',
    reference: `${batchRef} — Meta-Data Schema`,
  },
  {
    category: 'Spring',
    difficulty: 'medium',
    question: 'Which listener identifies items that were actually skipped?',
    options: [
      { id: 'a', text: 'ItemReadListener' },
      { id: 'b', text: 'SkipListener' },
      { id: 'c', text: 'ChunkListener' },
      { id: 'd', text: 'ItemWriteListener' },
    ],
    correctOptionIds: ['b'],
    explanation:
      'SkipListener callbacks run when an item is skipped on read, process, or write, which is the place to log or count those items.',
    reference: `${batchRef} — SkipListener`,
  },
  {
    category: 'Spring',
    difficulty: 'medium',
    question: 'Which listener reacts to chunk events, including an error?',
    options: [
      { id: 'a', text: 'ChunkListener' },
      { id: 'b', text: 'SkipListener' },
      { id: 'c', text: 'ItemProcessListener' },
      { id: 'd', text: 'ItemReadListener' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'ChunkListener is notified before and after a chunk, and after a chunk error, which is useful for monitoring commit-interval work.',
    reference: `${batchRef} — ChunkListener`,
  },
  {
    category: 'Spring',
    difficulty: 'medium',
    type: 'multiple',
    question: 'Which error-handling mechanisms are cited for Spring Batch?',
    options: [
      { id: 'a', text: 'skip' },
      { id: 'b', text: 'retry' },
      { id: 'c', text: 'restart' },
      { id: 'd', text: 'listeners' },
    ],
    correctOptionIds: ['a', 'b', 'c', 'd'],
    explanation:
      'Spring Batch can skip bad items, retry transient failures, restart from JobRepository metadata, and observe failures through listeners.',
    reference: `${batchRef} — Configuring a Step`,
  },
  {
    category: 'Spring',
    difficulty: 'medium',
    question:
      'If an exception is thrown by toto.save() inside a transactional method, what usually happens?',
    options: [
      {
        id: 'a',
        text: 'Method execution stops and the transaction is usually rolled back',
      },
      {
        id: 'b',
        text: 'The method continues and unAutreAppel() always runs',
      },
      { id: 'c', text: 'Spring ignores the exception' },
      { id: 'd', text: 'The JVM restarts' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'An uncaught exception leaves the method immediately, so later statements do not run. For a RuntimeException or Error, the transactional interceptor rolls back by default.',
    reference: `${springRef} — Declarative Transaction Management`,
  },
  {
    category: 'Spring',
    difficulty: 'medium',
    question: 'How do you force a rollback even for a checked exception?',
    options: [
      { id: 'a', text: '@Transactional(rollbackFor = Exception.class)' },
      { id: 'b', text: '@Transactional(skip = Exception.class)' },
      { id: 'c', text: '@Async(Exception.class)' },
      { id: 'd', text: '@Mock(Exception.class)' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'By default checked exceptions do not roll back. rollbackFor lists exception types that must trigger a rollback, for example Exception.class.',
    reference: `${springRef} — @Transactional settings`,
  },
  {
    category: 'Spring',
    difficulty: 'hard',
    question:
      'In a classic @Async call, does an exception in the asynchronous method automatically roll back the calling thread’s transaction?',
    options: [
      { id: 'a', text: 'Yes, always' },
      {
        id: 'b',
        text: 'No: it does not automatically propagate into the calling method',
      },
      { id: 'c', text: 'Yes, if the exception is a RuntimeException' },
      { id: 'd', text: 'Yes, if the method is private' },
    ],
    correctOptionIds: ['b'],
    explanation:
      '@Async runs on another thread. An exception there does not automatically enter the caller’s call stack or undo the caller’s transaction unless the caller observes a Future and reacts explicitly.',
    reference: `${springRef} — Annotation-driven Asynchronous Methods`,
  },
  {
    category: 'Spring',
    difficulty: 'medium',
    question:
      'If the asynchronous method returns a Future or CompletableFuture, what can the caller do?',
    options: [
      { id: 'a', text: 'Retrieve the result and observe the error' },
      { id: 'b', text: 'Nothing: the error is always lost' },
      { id: 'c', text: 'Force a JVM rollback' },
      { id: 'd', text: 'Disable Spring Batch' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Calling get() on a Future (or joining a CompletableFuture) surfaces the async failure to the caller, which can then handle it.',
    reference: `${springRef} — Annotation-driven Asynchronous Methods`,
  },
  {
    category: 'Spring',
    difficulty: 'hard',
    question:
      'Why does @Transactional on a private method called from the same class not work as expected?',
    options: [
      {
        id: 'a',
        text: 'Because the method is private and the call stays inside the same class',
      },
      { id: 'b', text: 'Because @Transactional works only with @Mock' },
      { id: 'c', text: 'Because Spring Batch forbids it' },
      { id: 'd', text: 'Because the method returns void' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Proxy-based Spring AOP intercepts calls that go through the bean proxy. A self-invocation, especially to a private method, never enters that proxy, so no transactional advice runs.',
    reference: `${springRef} — Understanding AOP Proxies`,
  },
  {
    category: 'Spring',
    difficulty: 'hard',
    type: 'multiple',
    question:
      'In a self-invocation of a @Transactional method, if toto.save() throws, which statements are correct?',
    options: [
      { id: 'a', text: 'unAutreAppel() is not executed' },
      { id: 'b', text: 'The exception propagates to the caller' },
      {
        id: 'c',
        text: 'Spring does not trigger a rollback through that method’s annotation',
      },
      {
        id: 'd',
        text: 'Spring always activates the transactional interceptor despite the internal call',
      },
    ],
    correctOptionIds: ['a', 'b', 'c'],
    explanation:
      'The exception stops the method and bubbles up, so later calls do not run. Because the call never passed the proxy, the @Transactional interceptor on that internal method does not start or roll back a transaction by itself.',
    reference: `${springRef} — Understanding AOP Proxies`,
  },
  {
    category: 'Spring',
    difficulty: 'medium',
    question: 'What is the classic fix for the self-invocation problem?',
    options: [
      { id: 'a', text: 'Move the transactional method into another Spring bean' },
      { id: 'b', text: 'Make the method private' },
      { id: 'c', text: 'Use @Mock' },
      { id: 'd', text: 'Use a for-each loop' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Calling another bean goes through that bean’s proxy, so transactional advice applies. Making the method private makes the problem worse.',
    reference: `${springRef} — Understanding AOP Proxies`,
  },
  {
    category: 'Spring',
    difficulty: 'medium',
    question:
      'Can a transaction started by an outside caller encompass the execution of the method?',
    options: [
      { id: 'a', text: 'Yes, that is possible' },
      { id: 'b', text: 'No, never' },
      { id: 'c', text: 'Only with @Async' },
      { id: 'd', text: 'Only with JOIN FETCH' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'With the default REQUIRED propagation, an outer transactional call joins or starts a transaction that covers nested bean calls that go through proxies.',
    reference: `${springRef} — Transaction propagation`,
  },
  {
    category: 'Spring',
    difficulty: 'easy',
    question: 'What is a unit test (TU)?',
    options: [
      { id: 'a', text: 'A test that verifies one unit of code in isolation' },
      { id: 'b', text: 'A test that must use a real database' },
      { id: 'c', text: 'A test that always starts Tomcat' },
      { id: 'd', text: 'A test that only verifies deployment' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'A unit test focuses on one class or method and usually replaces neighbors with test doubles instead of booting the full system.',
    reference: 'JUnit User Guide — Overview',
  },
  {
    category: 'Spring',
    difficulty: 'easy',
    question: 'What is an integration test (TI)?',
    options: [
      {
        id: 'a',
        text: 'A test that verifies that several components work together',
      },
      { id: 'b', text: 'A test that only tests a private method' },
      { id: 'c', text: 'A test that replaces every component with mocks' },
      { id: 'd', text: 'A test that can never use Spring' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Integration tests exercise collaboration between real components, often with Spring, a database, or an HTTP layer.',
    reference: `${springRef} — Integration Testing`,
  },
  {
    category: 'Spring',
    difficulty: 'easy',
    question: 'Which characteristics generally match a unit test?',
    options: [
      {
        id: 'a',
        text: 'Fast execution and external dependencies often simulated with Mockito',
      },
      { id: 'b', text: 'Slow execution and a mandatory real database' },
      { id: 'c', text: 'A mandatory real HTTP server' },
      { id: 'd', text: 'A mandatory full Spring context' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Unit tests stay fast by mocking collaborators. Loading Spring or a database turns them into heavier integration tests.',
    reference: 'JUnit User Guide — Overview',
  },
  {
    category: 'Spring',
    difficulty: 'easy',
    question: 'Which characteristics generally match an integration test?',
    options: [
      {
        id: 'a',
        text: 'Slower execution; a real Spring context, database, or HTTP server may be used',
      },
      { id: 'b', text: 'Always instantaneous execution' },
      { id: 'c', text: 'No external dependency' },
      { id: 'd', text: 'Spring Boot is forbidden' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Integration tests often boot slices or the full Spring context and may talk to real infrastructure, so they take longer than pure unit tests.',
    reference: `${springRef} — Integration Testing`,
  },
  {
    category: 'Spring',
    difficulty: 'easy',
    question: 'What does @Mock do?',
    options: [
      { id: 'a', text: 'Creates a simulated object' },
      { id: 'b', text: 'Creates the object under test and injects mocks' },
      { id: 'c', text: 'Starts Spring Boot' },
      { id: 'd', text: 'Loads a Hibernate association' },
    ],
    correctOptionIds: ['a'],
    explanation:
      '@Mock asks Mockito to create a test double for a dependency. It does not construct the class under test.',
    reference: 'Mockito documentation — Annotating mocks',
  },
  {
    category: 'Spring',
    difficulty: 'easy',
    question: 'What does @InjectMocks do?',
    options: [
      {
        id: 'a',
        text: 'Creates the object under test and injects compatible mocks into it',
      },
      { id: 'b', text: 'Creates only a fake repository' },
      { id: 'c', text: 'Removes dependencies' },
      { id: 'd', text: 'Starts a Spring Batch Job' },
    ],
    correctOptionIds: ['a'],
    explanation:
      '@InjectMocks instantiates the class under test and tries to inject fields annotated with @Mock (or @Spy) into it.',
    reference: 'Mockito documentation — Annotating mocks',
  },
  {
    category: 'Spring',
    difficulty: 'easy',
    question: 'What does when(clientRepository.findById(1L)).thenReturn(...) allow?',
    options: [
      { id: 'a', text: 'Defining a mock’s behavior' },
      { id: 'b', text: 'Starting the ApplicationContext' },
      { id: 'c', text: 'Configuring a JOIN FETCH' },
      { id: 'd', text: 'Creating a ChunkListener' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'stubbing with when(...).thenReturn(...) tells Mockito what a mock should return when that method is called with matching arguments.',
    reference: 'Mockito documentation — Stubbing',
  },
  {
    category: 'Spring',
    difficulty: 'easy',
    question: 'Which extension is often used with @Mock and @InjectMocks?',
    options: [
      { id: 'a', text: '@ExtendWith(MockitoExtension.class)' },
      { id: 'b', text: '@SpringBootApplication' },
      { id: 'c', text: '@Transactional(rollbackFor = Exception.class)' },
      { id: 'd', text: '@Async' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'MockitoExtension initializes @Mock and @InjectMocks fields for JUnit 5 tests without starting Spring.',
    reference: 'Mockito documentation — JUnit Jupiter extension',
  },
  {
    category: 'Collections',
    difficulty: 'medium',
    question: `What is wrong with the following code?

for (String s : maListe) {
    if (maListe.contains(s)) {
        maListe.remove(s);
    }
}`,
    options: [
      {
        id: 'a',
        text: 'The list is modified with remove() while a for-each iterates it, which can throw ConcurrentModificationException',
      },
      { id: 'b', text: 'contains() does not compile' },
      { id: 'c', text: 'ArrayList cannot hold String values' },
      { id: 'd', text: 'for-each does not work with lists' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Enhanced for uses an Iterator under the hood. Structurally changing the list through maListe.remove during that iteration makes the iterator detect a concurrent modification.',
    reference: 'Java SE API — java.util.ConcurrentModificationException',
  },
  {
    category: 'Collections',
    difficulty: 'medium',
    type: 'multiple',
    question: 'Which solutions are suitable for removing elements while traversing?',
    options: [
      { id: 'a', text: 'removeIf()' },
      { id: 'b', text: 'removeAll()' },
      { id: 'c', text: 'An Iterator with its remove() method' },
      { id: 'd', text: 'Modifying the list directly inside a for-each' },
    ],
    correctOptionIds: ['a', 'b', 'c'],
    explanation:
      'removeIf, removeAll, and Iterator.remove are designed for safe structural updates. Calling List.remove inside a for-each is not.',
    reference: 'Java SE API — java.util.Collection',
  },
  {
    category: 'Hibernate',
    difficulty: 'medium',
    question: 'What does EAGER mean for a Hibernate association?',
    options: [
      {
        id: 'a',
        text: 'The association must be loaded when the entity is retrieved, though the exact SQL still depends on the query and Hibernate context',
      },
      { id: 'b', text: 'The association is never loaded' },
      {
        id: 'c',
        text: 'The association is loaded only after the session is closed',
      },
      { id: 'd', text: 'The association is ignored' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'FetchType.EAGER means the persistence provider must make the association available when the entity is loaded. Hibernate may use a join, a separate select, or another strategy depending on the query.',
    reference: `${hibernateRef} — Fetching`,
  },
  {
    category: 'Hibernate',
    difficulty: 'medium',
    question: 'What does JOIN FETCH allow in a repository query?',
    options: [
      { id: 'a', text: 'Loading an association in the same SQL query' },
      { id: 'b', text: 'Creating a Mockito mock' },
      { id: 'c', text: 'Starting Spring Boot' },
      { id: 'd', text: 'Ignoring a Spring Batch exception' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'JOIN FETCH tells JPQL/HQL to fetch the association in the same query, which helps avoid LazyInitializationException and N+1 selects.',
    reference: `${hibernateRef} — The fetch join`,
  },
  {
    category: 'Hibernate',
    difficulty: 'medium',
    question: `In the following query, which association is loaded?

@Query("""
    SELECT c
    FROM Client c
    LEFT JOIN FETCH c.commandes
    WHERE c.id = :id
""")`,
    options: [
      {
        id: 'a',
        text: 'The c.commandes association is loaded in the same query',
      },
      { id: 'b', text: 'The c.commandes association is ignored' },
      {
        id: 'c',
        text: 'The c.commandes association is loaded only as LAZY later',
      },
      { id: 'd', text: 'The query does not compile' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'LEFT JOIN FETCH c.commandes instructs Hibernate to fetch the commandes collection together with Client in that query.',
    reference: `${hibernateRef} — The fetch join`,
  },
];

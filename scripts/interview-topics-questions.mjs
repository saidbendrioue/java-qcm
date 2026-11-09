// Classic Java / Spring Boot interview topics (JVM, OOP, exceptions, concurrency,
// patterns, Spring, collections, streams, functional interfaces).
// Distractors are intentional misconceptions, not joke answers.

const jls = 'Java Language Specification';
const jvms = 'Java Virtual Machine Specification';
const springRef = 'Spring Framework Reference Documentation';
const bootRef = 'Spring Boot Reference Documentation';
const jpaRef = 'Jakarta Persistence Specification / Hibernate ORM User Guide';
const collectionsDoc = 'Java SE API — java.util';
const streamsDoc = 'Java SE API — java.util.stream';
const concurrencyDoc = 'Java Concurrency in Practice / java.util.concurrent';
const mockitoDoc = 'Mockito documentation';

export const interviewTopicsQuestions = [
  {
    category: 'JVM',
    difficulty: 'easy',
    question:
      'Why is Java often described as platform-independent, and how do the JVM and JRE relate to that claim?',
    options: [
      {
        id: 'a',
        text: 'Source .java files run natively on every CPU; the JVM is only a packaging tool',
      },
      {
        id: 'b',
        text: 'javac produces bytecode that any compatible JVM can execute; the JRE is the runtime that ships a JVM and standard libraries',
      },
      {
        id: 'c',
        text: 'The JRE compiles Java to machine code at build time, so no JVM is needed at runtime',
      },
      {
        id: 'd',
        text: 'Platform independence means one binary works on every OS without any virtual machine',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Write once, run anywhere relies on bytecode plus a JVM per platform. The JRE historically bundled the JVM and class libraries needed to run programs; the JDK adds tools such as the compiler.',
    reference: `${jvms} — Introduction; Java SE documentation — JRE/JDK`,
  },
  {
    category: 'JVM',
    difficulty: 'medium',
    question: 'What is a ClassLoader responsible for?',
    options: [
      {
        id: 'a',
        text: 'Allocating heap memory for every new object instance',
      },
      {
        id: 'b',
        text: 'Finding, loading, and defining class bytecode so the JVM can create Class objects',
      },
      {
        id: 'c',
        text: 'Compiling .java source files during application startup',
      },
      {
        id: 'd',
        text: 'Scheduling threads onto CPU cores',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'ClassLoaders locate class or module resources, read bytecode, and define classes. Instantiation, GC, and thread scheduling are separate JVM responsibilities.',
    reference: `${jvms} — Loading, Linking, and Initializing (§5)`,
  },
  {
    category: 'JVM',
    difficulty: 'medium',
    question: 'What is the usual distinction between ClassNotFoundException and NoClassDefFoundError?',
    options: [
      {
        id: 'a',
        text: 'They are aliases; both are checked exceptions thrown by Class.forName only',
      },
      {
        id: 'b',
        text: 'ClassNotFoundException is thrown when code explicitly loads a class that cannot be found; NoClassDefFoundError means a class that was present at compile time cannot be loaded at runtime',
      },
      {
        id: 'c',
        text: 'NoClassDefFoundError is checked and must be declared; ClassNotFoundException is an Error',
      },
      {
        id: 'd',
        text: 'ClassNotFoundException only occurs for missing primitive types',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Explicit reflective/load calls raise ClassNotFoundException. NoClassDefFoundError typically appears when the JVM needs a class that compiled successfully but is missing or failed to initialize at runtime.',
    reference: `${jls} / Java SE API — ClassNotFoundException and NoClassDefFoundError`,
  },
  {
    category: 'Types and OOP',
    difficulty: 'medium',
    question:
      'Regarding the String pool and intern(), which statement is correct?',
    options: [
      {
        id: 'a',
        text: 'Every new String("x") always returns the same pooled instance as the literal "x"',
      },
      {
        id: 'b',
        text: 'String literals are interned; intern() returns the canonical pooled instance for an equal character sequence',
      },
      {
        id: 'c',
        text: 'intern() always allocates a brand-new heap String and never reuses pooled content',
      },
      {
        id: 'd',
        text: 'The String pool stores mutable char[] shared across all strings without copying',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Literals and compile-time constants are interned. Calling intern() on a constructed String yields the pooled equal instance (or adds one). new String(...) creates a distinct object unless interned.',
    reference: `${jls} — String Literals (§3.10.5) and String.intern`,
  },
  {
    category: 'Types and OOP',
    difficulty: 'easy',
    question: 'What does encapsulation mean in OOP?',
    options: [
      {
        id: 'a',
        text: 'Making every field public so callers can read and write state directly',
      },
      {
        id: 'b',
        text: 'Bundling state with the operations that use it and restricting direct external access to internals',
      },
      {
        id: 'c',
        text: 'Allowing a class to extend multiple concrete classes',
      },
      {
        id: 'd',
        text: 'Converting every method into a static utility',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Encapsulation hides representation behind a controlled interface (often private fields and public methods), which protects invariants and lets the implementation change safely.',
    reference: 'Object-oriented design — encapsulation',
  },
  {
    category: 'Types and OOP',
    difficulty: 'medium',
    question: 'What does implementing java.io.Serializable indicate?',
    options: [
      {
        id: 'a',
        text: 'The class can be written to an ObjectOutputStream using Java’s serialization mechanism (marker interface)',
      },
      {
        id: 'b',
        text: 'The class must override serialize() and deserialize() abstract methods',
      },
      {
        id: 'c',
        text: 'Instances are automatically persisted to a relational database',
      },
      {
        id: 'd',
        text: 'The class becomes immutable and thread-safe',
      },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Serializable is a marker interface enabling default Java object serialization. It does not imply JPA persistence, immutability, or required serialize methods.',
    reference: 'Java SE API — java.io.Serializable',
  },
  {
    category: 'Types and OOP',
    difficulty: 'medium',
    question:
      'Which statement about nested and top-level classes being static, final, or private is correct?',
    options: [
      {
        id: 'a',
        text: 'A top-level class may be private or static like a field',
      },
      {
        id: 'b',
        text: 'A top-level class may be final; nested classes may be static or private; a top-level class cannot be private or static',
      },
      {
        id: 'c',
        text: 'No class in Java may ever be declared final',
      },
      {
        id: 'd',
        text: 'Only interfaces may be static; classes never can',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Top-level classes are public or package-private and may be final/abstract/sealed, but not private or static. Nested (member) classes can be static and can use private.',
    reference: `${jls} — Class Modifiers (§8.1.1) and Nested Classes (§8.5)`,
  },
  {
    category: 'Exceptions',
    difficulty: 'easy',
    question: 'What is the superclass of all exceptions and errors in Java?',
    options: [
      { id: 'a', text: 'Exception' },
      { id: 'b', text: 'RuntimeException' },
      { id: 'c', text: 'Throwable' },
      { id: 'd', text: 'Error' },
    ],
    correctOptionIds: ['c'],
    explanation:
      'Throwable is the root. Exception and Error both extend Throwable; RuntimeException extends Exception.',
    reference: `${jls} — The Throwable Class Hierarchy`,
  },
  {
    category: 'Exceptions',
    difficulty: 'easy',
    question: 'How do Error and Exception differ in intent?',
    options: [
      {
        id: 'a',
        text: 'Error represents serious JVM/system failures usually not recovered from in application code; Exception represents conditions applications may catch and handle',
      },
      {
        id: 'b',
        text: 'Error is checked and Exception is always unchecked',
      },
      {
        id: 'c',
        text: 'Exception is only for IO; Error is only for NullPointerException',
      },
      {
        id: 'd',
        text: 'They are identical; the names are historical synonyms',
      },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Errors (OutOfMemoryError, StackOverflowError, …) signal abnormal conditions applications rarely handle. Exceptions model recoverable or expected failure modes; some are checked, some are not.',
    reference: `${jls} — Exceptions (§11)`,
  },
  {
    category: 'Exceptions',
    difficulty: 'medium',
    question: 'Which statement about checked vs unchecked exceptions is correct?',
    options: [
      {
        id: 'a',
        text: 'All subclasses of Throwable must appear in a throws clause',
      },
      {
        id: 'b',
        text: 'Checked exceptions (excluding RuntimeException/Error) must be caught or declared; RuntimeException and Error are unchecked',
      },
      {
        id: 'c',
        text: 'Only Error is checked; Exception is always unchecked',
      },
      {
        id: 'd',
        text: 'Checked exceptions are verified only by the JIT at runtime',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'The compiler enforces handling of checked exceptions. RuntimeException, Error, and their subclasses are unchecked.',
    reference: `${jls} — Compile-Time Checking of Exceptions (§11.2)`,
  },
  {
    category: 'Exceptions',
    difficulty: 'medium',
    question: 'What does exception propagation mean?',
    options: [
      {
        id: 'a',
        text: 'The JVM duplicates every exception onto every thread automatically',
      },
      {
        id: 'b',
        text: 'If a method does not catch a thrown exception, it exits and the exception continues to the caller up the stack until caught or the thread terminates',
      },
      {
        id: 'c',
        text: 'Exceptions are converted into return codes before leaving a method',
      },
      {
        id: 'd',
        text: 'Propagation only applies to checked exceptions; unchecked ones stop immediately',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Unhandled throwables unwind the call stack. finally/try-with-resources still run during unwinding. Unchecked exceptions propagate the same way.',
    reference: `${jls} — Exception Handling and abrupt completion`,
  },
  {
    category: 'Types and OOP',
    difficulty: 'medium',
    question: 'What is autoboxing in Java?',
    options: [
      {
        id: 'a',
        text: 'Automatic conversion between primitives and their wrapper types, e.g. int ↔ Integer',
      },
      {
        id: 'b',
        text: 'Automatic packing of several classes into a JAR at compile time',
      },
      {
        id: 'c',
        text: 'Converting arrays into ArrayList without an API call',
      },
      {
        id: 'd',
        text: 'Inlining virtual methods into static calls',
      },
    ],
    correctOptionIds: ['a'],
    explanation:
      'The compiler inserts valueOf/xxxValue conversions between primitives and wrappers. Beware of null unboxing (NPE) and identity surprises with cached Integer values.',
    reference: `${jls} — Boxing Conversion (§5.1.7)`,
  },
  {
    category: 'Modern Java',
    difficulty: 'easy',
    question: 'Which set best summarizes major Java 8 language/API features?',
    options: [
      {
        id: 'a',
        text: 'Checked exceptions, synchronized methods, and AWT only',
      },
      {
        id: 'b',
        text: 'Lambdas, functional interfaces, Streams API, and default/static methods on interfaces',
      },
      {
        id: 'c',
        text: 'Records, sealed classes, and pattern matching for switch only',
      },
      {
        id: 'd',
        text: 'Modules (JPMS) and var for local variables only',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Java 8 introduced lambdas, java.util.function, Streams, and interface default/static methods. Records/sealed/pattern matching and modules arrived in later releases.',
    reference: 'Java SE 8 documentation — Lambda Expressions and Streams',
  },
  {
    category: 'Types and OOP',
    difficulty: 'medium',
    question: 'Why can a Java interface not declare a constructor?',
    options: [
      {
        id: 'a',
        text: 'Interfaces can be instantiated directly, so constructors would be redundant',
      },
      {
        id: 'b',
        text: 'Interfaces are not instantiable types with instance state initialized via constructors; construction belongs to classes',
      },
      {
        id: 'c',
        text: 'Constructors are only allowed on enums, never on classes or interfaces',
      },
      {
        id: 'd',
        text: 'The JVM forbids any method-like member on interfaces',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Interfaces define contracts (and since Java 8, default/static/private methods) but are not constructed like classes. Implementing classes provide constructors.',
    reference: `${jls} — Interface Declarations (§9)`,
  },
  {
    category: 'Collections',
    difficulty: 'medium',
    question:
      'For iterating an ArrayList of size n, how do a classic indexed for-loop and an enhanced for-each typically compare?',
    options: [
      {
        id: 'a',
        text: 'for-each is always asymptotically slower because it copies the list first',
      },
      {
        id: 'b',
        text: 'Both are O(n); for-each uses the iterator (or array walk), while an index loop uses get(i)—performance is usually similar for ArrayList, with micro-differences depending on JIT and access pattern',
      },
      {
        id: 'c',
        text: 'Indexed loops are forbidden on ArrayList; only for-each compiles',
      },
      {
        id: 'd',
        text: 'for-each runs in O(1) regardless of list size',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Both visit each element once. Prefer clarity unless profiling shows a hotspot; structural modification during for-each still risks ConcurrentModificationException.',
    reference: `${collectionsDoc} — ArrayList and Iterator`,
  },
  {
    category: 'Concurrency',
    difficulty: 'hard',
    question:
      'You need five threads to print 1,2,3,4,5 in that order. Which approach is appropriate?',
    options: [
      {
        id: 'a',
        text: 'Start five threads with no coordination; the scheduler guarantees numeric order',
      },
      {
        id: 'b',
        text: 'Coordinate with wait/notify, locks, semaphores, or a single-thread executor so each print happens only after the previous turn',
      },
      {
        id: 'c',
        text: 'Mark each run() method synchronized; that alone forces global numeric order across threads',
      },
      {
        id: 'd',
        text: 'Use volatile int counters without any waiting; visibility alone orders the prints',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Thread start order does not define execution order. Sequencing needs explicit hand-off (conditions, semaphores, Phaser, queues, or serial execution).',
    reference: concurrencyDoc,
  },
  {
    category: 'Concurrency',
    difficulty: 'medium',
    question: 'How do volatile and AtomicInteger differ?',
    options: [
      {
        id: 'a',
        text: 'volatile provides atomic read/write visibility for the field; AtomicInteger also offers atomic compound updates such as incrementAndGet',
      },
      {
        id: 'b',
        text: 'volatile makes ++i atomic for int fields',
      },
      {
        id: 'c',
        text: 'AtomicInteger only improves readability; it has the same concurrency guarantees as a plain int',
      },
      {
        id: 'd',
        text: 'volatile variables cannot be read by other threads',
      },
    ],
    correctOptionIds: ['a'],
    explanation:
      'volatile ensures visibility and ordering for individual reads/writes but not atomic read-modify-write. Atomcis use CAS for compound updates.',
    reference: `${jls} — volatile (§8.3.1.4); java.util.concurrent.atomic`,
  },
  {
    category: 'Design Principles',
    difficulty: 'medium',
    question: 'When is the Builder pattern a good fit?',
    options: [
      {
        id: 'a',
        text: 'When an object has many optional construction parameters and you want readable, stepwise assembly (often with immutability)',
      },
      {
        id: 'b',
        text: 'When you need exactly one instance of a class for the whole JVM',
      },
      {
        id: 'c',
        text: 'When two interfaces must be adapted to each other',
      },
      {
        id: 'd',
        text: 'When you only need to iterate a collection',
      },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Builder replaces telescoping constructors with a fluent API that can validate and produce a complete object (Lombok @Builder, StringBuilder, and many domain builders).',
    reference: 'Gang of Four — Builder; Effective Java — Builder pattern',
  },
  {
    category: 'Design Principles',
    difficulty: 'medium',
    question: 'Which Singleton implementation concern is most accurate for Java?',
    options: [
      {
        id: 'a',
        text: 'A public static non-final field is always lazily initialized and thread-safe without further care',
      },
      {
        id: 'b',
        text: 'Naive lazy singletons can race; enum singletons or static-holder / correctly synchronized forms avoid duplicate instances',
      },
      {
        id: 'c',
        text: 'Singletons are provided automatically by the JVM for every class',
      },
      {
        id: 'd',
        text: 'Implementing Cloneable is required for a correct Singleton',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Double-checked locking needs volatile; enum singletons and initialization-on-demand holders are common safe approaches. Spring beans are often container-managed “singletons” by scope, which is a different mechanism.',
    reference: 'Effective Java — Enforce the singleton property; Java Language Specification',
  },
  {
    category: 'Design Principles',
    difficulty: 'easy',
    question: 'What is the core idea of the Factory pattern?',
    options: [
      {
        id: 'a',
        text: 'Callers create concrete classes with new everywhere to maximize coupling',
      },
      {
        id: 'b',
        text: 'Object creation is delegated to a method/class that returns products (often behind an interface) so callers depend on abstractions',
      },
      {
        id: 'c',
        text: 'Every object must be cloned from a prototype stored in a Map',
      },
      {
        id: 'd',
        text: 'All constructors must be public and take zero arguments',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Simple factory methods, Factory Method, and Abstract Factory all encapsulate creation so product types can vary without rewriting clients.',
    reference: 'Gang of Four — Factory Method / Abstract Factory',
  },
  {
    category: 'Design Principles',
    difficulty: 'easy',
    question: 'Why do teams use design patterns?',
    options: [
      {
        id: 'a',
        text: 'They provide shared vocabulary and proven structures for recurring design problems, improving communication and maintainability when applied judiciously',
      },
      {
        id: 'b',
        text: 'They replace the need for tests and code review',
      },
      {
        id: 'c',
        text: 'Every class must implement exactly one GoF pattern or it will not compile',
      },
      {
        id: 'd',
        text: 'Patterns guarantee optimal runtime performance by themselves',
      },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Patterns document trade-offs for common problems. Overusing them adds ceremony; underusing them can leave ad-hoc designs hard to discuss.',
    reference: 'Gang of Four — Design Patterns introduction',
  },
  {
    category: 'Spring Boot',
    difficulty: 'easy',
    question: 'What is Spring Boot and why is it widely used?',
    options: [
      {
        id: 'a',
        text: 'A replacement JVM that executes Spring XML without bytecode',
      },
      {
        id: 'b',
        text: 'An opinionated toolkit on Spring that auto-configures applications, embeds servers, and reduces boilerplate so teams ship production apps faster',
      },
      {
        id: 'c',
        text: 'A database engine shipped inside spring-boot-starter-web',
      },
      {
        id: 'd',
        text: 'A UI framework that forbids dependency injection',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Boot applies auto-configuration, starters, and actuator defaults while still using the Spring container. You can override conventions when needed.',
    reference: `${bootRef} — Spring Boot Introduction`,
  },
  {
    category: 'Spring',
    difficulty: 'medium',
    question: 'How do @Component and @Bean typically differ?',
    options: [
      {
        id: 'a',
        text: '@Component marks a class for component scanning; @Bean declares a method-produced object inside a @Configuration class',
      },
      {
        id: 'b',
        text: '@Bean is only for controllers; @Component is only for repositories',
      },
      {
        id: 'c',
        text: 'They are identical annotations with different names',
      },
      {
        id: 'd',
        text: '@Component disables dependency injection for that type',
      },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Stereotypes (@Component/@Service/…) register the annotated class. @Bean methods create and configure instances (often of third-party types) in Java config.',
    reference: `${springRef} — Bean definition and annotation-based configuration`,
  },
  {
    category: 'Spring',
    difficulty: 'medium',
    question: 'What is @Qualifier used for during injection?',
    options: [
      {
        id: 'a',
        text: 'To pick a specific bean when multiple candidates share the same type',
      },
      {
        id: 'b',
        text: 'To mark a bean as lazy-initialized exclusively',
      },
      {
        id: 'c',
        text: 'To disable Spring Security for one method',
      },
      {
        id: 'd',
        text: 'To declare a new property source file',
      },
    ],
    correctOptionIds: ['a'],
    explanation:
      'When several beans implement the same interface, @Qualifier (or @Primary) disambiguates which dependency to inject.',
    reference: `${springRef} — Fine-tuning annotation-based autowiring with qualifiers`,
  },
  {
    category: 'Spring',
    difficulty: 'easy',
    question: 'What is the difference between @Controller and @RestController?',
    options: [
      {
        id: 'a',
        text: '@RestController is @Controller plus @ResponseBody on every handler, returning data (often JSON) rather than a view name by default',
      },
      {
        id: 'b',
        text: '@Controller can only return JSON; @RestController only returns HTML views',
      },
      {
        id: 'c',
        text: 'They behave identically in all Spring versions',
      },
      {
        id: 'd',
        text: '@RestController disables HTTP mappings',
      },
    ],
    correctOptionIds: ['a'],
    explanation:
      '@Controller is the stereotype for MVC controllers (often paired with view resolvers). @RestController composes @Controller and @ResponseBody for REST APIs.',
    reference: `${springRef} — @RestController`,
  },
  {
    category: 'Testing',
    difficulty: 'medium',
    question: 'In Mockito, how do @Mock and @InjectMocks differ?',
    options: [
      {
        id: 'a',
        text: '@Mock creates a mock collaborator; @InjectMocks creates the class under test and injects mocks into it',
      },
      {
        id: 'b',
        text: '@InjectMocks creates mocks; @Mock creates the real system under test',
      },
      {
        id: 'c',
        text: 'Both annotations start a full Spring Boot context',
      },
      {
        id: 'd',
        text: '@Mock is required for JUnit 5; @InjectMocks only works with TestNG',
      },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Use @Mock/@MockBean for dependencies and @InjectMocks (or manual construction) for the unit under test. Spring’s @MockBean is a related but container-aware idea.',
    reference: mockitoDoc,
  },
  {
    category: 'Security',
    difficulty: 'medium',
    question:
      'In a Spring app with role-based access, which statement is most accurate?',
    options: [
      {
        id: 'a',
        text: 'Authentication establishes identity; authorization (e.g. roles/authorities) decides whether that identity may perform an action',
      },
      {
        id: 'b',
        text: 'Having any role automatically grants every HTTP method on every URL',
      },
      {
        id: 'c',
        text: 'Role-based access replaces the need for HTTPS and password hashing',
      },
      {
        id: 'd',
        text: 'Authorization always happens before authentication in Spring Security filters',
      },
    ],
    correctOptionIds: ['a'],
    explanation:
      'You authenticate first, then authorize with roles/permissions on methods or HTTP security rules. Transport security and credential storage remain separate concerns.',
    reference: 'Spring Security Reference — Authentication and Authorization',
  },
  {
    category: 'Spring',
    difficulty: 'medium',
    question: 'Which interfaces are central to Spring Data JPA repositories?',
    options: [
      {
        id: 'a',
        text: 'JdbcTemplate and NamedParameterJdbcTemplate only',
      },
      {
        id: 'b',
        text: 'Repository / CrudRepository / JpaRepository (and paging variants) that expose CRUD and query derivation',
      },
      {
        id: 'c',
        text: 'Only EntityManagerFactoryBean with no repository abstraction',
      },
      {
        id: 'd',
        text: 'Servlet and Filter as the persistence API',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Spring Data defines Repository markers; CrudRepository and JpaRepository add CRUD, paging, and JPA-specific operations. Implementations are generated at runtime.',
    reference: 'Spring Data JPA — Repository interfaces',
  },
  {
    category: 'Spring',
    difficulty: 'medium',
    question: 'How are exceptions commonly handled in Spring MVC/Web controllers?',
    options: [
      {
        id: 'a',
        text: 'Only by letting Tomcat render a raw stack trace with no Spring support',
      },
      {
        id: 'b',
        text: 'With @ExceptionHandler, @ControllerAdvice, and ProblemDetail/ResponseEntityExceptionHandler-style mappings to HTTP responses',
      },
      {
        id: 'c',
        text: 'By returning null from every controller method',
      },
      {
        id: 'd',
        text: 'Exceptions in controllers are impossible because Spring wraps all returns as Optional',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Local @ExceptionHandler methods or global @ControllerAdvice map exceptions to status codes and bodies consistently across controllers.',
    reference: `${springRef} — Exception handling in Spring MVC`,
  },
  {
    category: 'Spring',
    difficulty: 'hard',
    question:
      'What does Spring @Transactional propagation (e.g. REQUIRED vs REQUIRES_NEW) control?',
    options: [
      {
        id: 'a',
        text: 'Whether a called method joins an existing transaction, suspends it and starts a new one, or runs non-transactionally',
      },
      {
        id: 'b',
        text: 'Which SQL dialect Hibernate generates for SELECT statements',
      },
      {
        id: 'c',
        text: 'The HTTP status code returned by REST controllers',
      },
      {
        id: 'd',
        text: 'The order of BeanPostProcessors during context refresh',
      },
    ],
    correctOptionIds: ['a'],
    explanation:
      'REQUIRED joins or creates a transaction; REQUIRES_NEW always starts a nested independent transaction (suspending the outer). Other levels cover supports, mandatory, never, not supported, nested.',
    reference: `${springRef} — Transaction propagation`,
  },
  {
    category: 'Spring Boot',
    difficulty: 'easy',
    question: 'What is the purpose of application.properties (or application.yml)?',
    options: [
      {
        id: 'a',
        text: 'To store externalized configuration such as ports, datasources, and feature flags that Boot binds into the Environment',
      },
      {
        id: 'b',
        text: 'To replace the need for a main method',
      },
      {
        id: 'c',
        text: 'To compile Java sources inside the resources folder',
      },
      {
        id: 'd',
        text: 'To define HTML templates exclusively',
      },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Boot loads these files (plus profiles and env vars) into the Environment for @Value, @ConfigurationProperties, and auto-configuration.',
    reference: `${bootRef} — Externalized Configuration`,
  },
  {
    category: 'Hibernate',
    difficulty: 'medium',
    question: 'How do Spring Data JPA / Hibernate typically generate SQL?',
    options: [
      {
        id: 'a',
        text: 'They never generate SQL; developers must write every statement by hand',
      },
      {
        id: 'b',
        text: 'The ORM maps entity operations and queries (JPQL/Criteria/method names) to SQL via a dialect for the target database',
      },
      {
        id: 'c',
        text: 'SQL is generated only by the JVM verifier before class loading',
      },
      {
        id: 'd',
        text: 'Hibernate sends Java bytecode to the database instead of SQL',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Persist/merge/flush and query APIs are translated to SQL. You can still use native queries when needed; show_sql / logging helps inspect output.',
    reference: jpaRef,
  },
  {
    category: 'Spring',
    difficulty: 'easy',
    question:
      'In a typical Spring MVC layered app, what are Controller, Service, and Repository responsibilities?',
    options: [
      {
        id: 'a',
        text: 'Controller handles HTTP; Service holds business logic; Repository (or DAO) accesses persistence',
      },
      {
        id: 'b',
        text: 'Controller talks to the database; Repository renders HTML; Service only logs',
      },
      {
        id: 'c',
        text: 'All three layers must perform identical SQL queries',
      },
      {
        id: 'd',
        text: 'Repository must depend on Controller to load entities',
      },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Keeping web, domain, and persistence concerns separated clarifies testing and change. Controllers should stay thin; services orchestrate rules; repositories abstract storage.',
    reference: `${springRef} — Classic Spring web layering`,
  },
  {
    category: 'Hibernate',
    difficulty: 'medium',
    question:
      'Which statement about pagination and unique constraints with JPA/Hibernate is correct?',
    options: [
      {
        id: 'a',
        text: 'Pageable/LIMIT-OFFSET style pagination pages result sets; unique constraints (@Column(unique)/@UniqueConstraint) enforce uniqueness in the schema',
      },
      {
        id: 'b',
        text: 'Unique constraints replace the need for primary keys',
      },
      {
        id: 'c',
        text: 'Pagination can only be done by loading all rows into memory then subListing',
      },
      {
        id: 'd',
        text: 'Hibernate ignores unique constraints and never creates DB indexes for them',
      },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Spring Data’s Pageable integrates with query methods. Unique constraints belong in the database; the ORM can emit them on schema generation but production DBs should still own integrity.',
    reference: `${jpaRef}; Spring Data — Pagination`,
  },
  {
    category: 'Collections',
    difficulty: 'medium',
    question: 'How does HashMap work internally at a high level?',
    options: [
      {
        id: 'a',
        text: 'It stores entries in a balanced tree keyed only by insertion time',
      },
      {
        id: 'b',
        text: 'It hashes keys into buckets (array of nodes/trees); equals resolves collisions within a bucket, resizing as the load factor grows',
      },
      {
        id: 'c',
        text: 'It uses only linear search over an ArrayList of entries',
      },
      {
        id: 'd',
        text: 'It requires keys to implement Comparable or insertion fails',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'hashCode selects a bucket; equals finds the matching key. Large colliding buckets may treeify. Null keys are allowed once in HashMap.',
    reference: `${collectionsDoc} — HashMap`,
  },
  {
    category: 'Collections',
    difficulty: 'medium',
    question: 'How do HashMap, Hashtable, and ConcurrentHashMap differ?',
    options: [
      {
        id: 'a',
        text: 'HashMap is unsynchronized and allows one null key; Hashtable is legacy synchronized and rejects nulls; ConcurrentHashMap is concurrent without locking the whole map for every access',
      },
      {
        id: 'b',
        text: 'All three are identical; the names are marketing only',
      },
      {
        id: 'c',
        text: 'Only Hashtable allows null keys; HashMap forbids them',
      },
      {
        id: 'd',
        text: 'ConcurrentHashMap cannot be updated after construction',
      },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Prefer HashMap in single-threaded use, ConcurrentHashMap for concurrent maps, and avoid new Hashtable code.',
    reference: `${collectionsDoc} — HashMap, Hashtable, ConcurrentHashMap`,
  },
  {
    category: 'Collections',
    difficulty: 'easy',
    question: 'When should you choose List, Set, or Map?',
    options: [
      {
        id: 'a',
        text: 'List: ordered sequence (duplicates OK); Set: unique elements; Map: key-to-value associations',
      },
      {
        id: 'b',
        text: 'Set replaces Map for all key/value use cases',
      },
      {
        id: 'c',
        text: 'Map forbids duplicate values always',
      },
      {
        id: 'd',
        text: 'List never preserves encounter order',
      },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Pick the abstraction that matches access patterns: index/order (List), uniqueness (Set), or lookup by key (Map).',
    reference: `${collectionsDoc} — Collection interfaces`,
  },
  {
    category: 'Collections',
    difficulty: 'easy',
    question: 'What characterizes LinkedList in java.util?',
    options: [
      {
        id: 'a',
        text: 'A doubly-linked list implementing List and Deque; good for frequent end insertions, poorer random index access than ArrayList',
      },
      {
        id: 'b',
        text: 'A resizable array like ArrayList with O(1) index access always faster than arrays',
      },
      {
        id: 'c',
        text: 'A concurrent map of string keys',
      },
      {
        id: 'd',
        text: 'A sorted set of unique elements',
      },
    ],
    correctOptionIds: ['a'],
    explanation:
      'LinkedList shines as a deque. For most random-access lists, ArrayList is preferred.',
    reference: `${collectionsDoc} — LinkedList`,
  },
  {
    category: 'Collections',
    difficulty: 'medium',
    question: 'What does the Comparable interface define?',
    options: [
      {
        id: 'a',
        text: 'A natural order via compareTo, used by sorted collections and Arrays/Collections.sort',
      },
      {
        id: 'b',
        text: 'Equality only; it replaces equals and hashCode',
      },
      {
        id: 'c',
        text: 'A way to clone objects deeply',
      },
      {
        id: 'd',
        text: 'Thread-safe iteration of any Collection',
      },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Comparable is the type’s natural order. Comparator supplies external orders. Consistency with equals is recommended for sorted sets/maps.',
    reference: `${collectionsDoc} — Comparable`,
  },
  {
    category: 'equals and hashCode',
    difficulty: 'medium',
    question: 'Which statement about hashCode is correct?',
    options: [
      {
        id: 'a',
        text: 'hashCode must be consistent with equals: equal objects need equal hash codes; unequal objects should ideally distribute across buckets',
      },
      {
        id: 'b',
        text: 'hashCode must be unique for every object in the JVM',
      },
      {
        id: 'c',
        text: 'Changing hashCode after inserting an object as a HashMap key is always safe',
      },
      {
        id: 'd',
        text: 'hashCode is only used by TreeMap',
      },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Hash-based collections rely on the equals/hashCode contract. Mutable keys that change fields used in hashCode can become “lost” in the map.',
    reference: `${jls} / Object.hashCode contract; Effective Java`,
  },
  {
    category: 'Collections',
    difficulty: 'easy',
    question: 'What is the Iterable interface for?',
    options: [
      {
        id: 'a',
        text: 'It exposes iterator() (and forEach) so a type can be used in the enhanced for-loop',
      },
      {
        id: 'b',
        text: 'It marks a class as serializable to JSON only',
      },
      {
        id: 'c',
        text: 'It forces random-access get(int) support',
      },
      {
        id: 'd',
        text: 'It replaces Collection and forbids iterators',
      },
    ],
    correctOptionIds: ['a'],
    explanation:
      'for (T t : iterable) desugars to iterator usage. Collection extends Iterable; custom types can implement it too.',
    reference: `${collectionsDoc} — Iterable`,
  },
  {
    category: 'Streams',
    difficulty: 'easy',
    question: 'What is the Streams API primarily for?',
    options: [
      {
        id: 'a',
        text: 'Replacing InputStream/OutputStream for all file IO',
      },
      {
        id: 'b',
        text: 'Declaring bulk operations on sequences of elements with intermediate and terminal operations (filter/map/collect, …)',
      },
      {
        id: 'c',
        text: 'Managing JDBC connections exclusively',
      },
      {
        id: 'd',
        text: 'Starting operating-system processes',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'java.util.stream supports functional-style pipelines over collections, arrays, generators, and IO lines—separate from java.io streams.',
    reference: streamsDoc,
  },
  {
    category: 'Streams',
    difficulty: 'medium',
    question: 'How do intermediate and terminal stream operations differ?',
    options: [
      {
        id: 'a',
        text: 'Intermediate ops (map/filter/…) are lazy and return a stream; a terminal op (collect/forEach/…) triggers execution and produces a result or side effect',
      },
      {
        id: 'b',
        text: 'Terminal ops are lazy; intermediate ops always run immediately when written',
      },
      {
        id: 'c',
        text: 'There is no difference; both always mutate the source collection',
      },
      {
        id: 'd',
        text: 'Intermediate ops must be the last call in a pipeline',
      },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Pipelines fuse and run when a terminal operation begins. After a terminal op, the stream is consumed.',
    reference: streamsDoc,
  },
  {
    category: 'Streams',
    difficulty: 'medium',
    question: 'What is the difference between map and flatMap on a Stream?',
    options: [
      {
        id: 'a',
        text: 'map applies a 1-to-1 function; flatMap maps each element to a stream (or optional) and flattens the results into one stream',
      },
      {
        id: 'b',
        text: 'flatMap only works on primitive streams; map only works on objects',
      },
      {
        id: 'c',
        text: 'map flattens nested lists; flatMap never changes structure',
      },
      {
        id: 'd',
        text: 'They are synonyms introduced for readability',
      },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Use flatMap to avoid Stream<Stream<T>> (or to unwrap Optional). map keeps one output element per input.',
    reference: streamsDoc,
  },
  {
    category: 'Streams',
    difficulty: 'medium',
    question: 'Sequential vs parallel streams — which statement is correct?',
    options: [
      {
        id: 'a',
        text: 'parallel() may use the common ForkJoinPool; correctness needs safe splits/associative reductions, and parallel is not always faster',
      },
      {
        id: 'b',
        text: 'parallel streams always outperform sequential ones for every workload',
      },
      {
        id: 'c',
        text: 'Sequential streams are illegal after Java 8',
      },
      {
        id: 'd',
        text: 'parallel() guarantees encounter order identical to sequential for every operation including forEach',
      },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Parallelism helps CPU-bound, splittable, large workloads with independent ops. Overhead and contention can make small pipelines slower; prefer sequential by default.',
    reference: streamsDoc,
  },
  {
    category: 'Modern Java',
    difficulty: 'medium',
    question: 'What is a functional interface, and may it declare default or static methods?',
    options: [
      {
        id: 'a',
        text: 'An interface with exactly one abstract method; it may also have default and static methods',
      },
      {
        id: 'b',
        text: 'Any interface with at least five abstract methods',
      },
      {
        id: 'c',
        text: 'A class annotated with @Override only',
      },
      {
        id: 'd',
        text: 'An interface that forbids default and static methods entirely',
      },
    ],
    correctOptionIds: ['a'],
    explanation:
      '@FunctionalInterface documents the SAM contract used by lambdas. Default/static helpers do not count toward the single abstract method.',
    reference: `${jls} — Functional Interfaces; java.util.function`,
  },
  {
    category: 'Modern Java',
    difficulty: 'easy',
    question:
      'Which of the following are classic examples of functional interfaces?',
    options: [
      {
        id: 'a',
        text: 'Runnable, Callable, and Comparator (each with a single abstract method targeting lambdas)',
      },
      {
        id: 'b',
        text: 'Serializable, Cloneable, and RandomAccess only',
      },
      {
        id: 'c',
        text: 'List, Set, and Map',
      },
      {
        id: 'd',
        text: 'Object, Class, and System',
      },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Runnable/Callable/Comparator predate java.util.function but are SAM types. Marker interfaces like Serializable are not functional interfaces.',
    reference: 'Java SE API — Runnable, Callable, Comparator',
  },
];

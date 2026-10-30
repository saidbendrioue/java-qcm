// Original questions for Spring Security, integration, messaging, and related projects.

export const springPlatformQuestions = [
  {
    category: 'Spring',
    difficulty: 'easy',
    question: 'What does Spring Security add to an application?',
    options: [
      { id: 'a', text: 'A filter chain that can authenticate the caller and authorize HTTP routes and methods' },
      { id: 'b', text: 'A CSS library' },
      { id: 'c', text: 'Replacement TLS certificates and nothing else' },
      { id: 'd', text: 'An annotation that encrypts the JVM heap' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Spring Security is a filter-based security framework. It establishes the caller and then decides whether that caller may reach a path or invoke a method.',
    reference: 'Spring Security docs — Servlet security',
  },
  {
    category: 'Spring',
    difficulty: 'easy',
    question: 'How do authentication and authorization differ?',
    options: [
      { id: 'a', text: 'Authentication establishes who the caller is; authorization decides what that identity may do' },
      { id: 'b', text: 'They are the same check' },
      { id: 'c', text: 'Authorization runs before any identity exists, and authentication is only a log line' },
      { id: 'd', text: 'Authentication is a database index' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'A login or token check authenticates. Rules such as "this role may POST /orders" authorize. A request can be authenticated and still be forbidden.',
    reference: 'Spring Security docs — Authentication and authorization',
  },
  {
    category: 'Spring',
    difficulty: 'medium',
    question: 'How do you configure HTTP security in Spring Security 6?',
    options: [
      { id: 'a', text: 'Declare a SecurityFilterChain bean and define the request rules on it' },
      { id: 'b', text: 'Extend WebSecurityConfigurerAdapter, which Security 6 still requires' },
      { id: 'c', text: 'Put a password attribute on every @RestController' },
      { id: 'd', text: 'Set the context path to /secure and add no other rules' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'The current style is a SecurityFilterChain @Bean that receives HttpSecurity. WebSecurityConfigurerAdapter was removed in Spring Security 6, so new applications do not extend it.',
    reference: 'Spring Security docs — SecurityFilterChain',
  },
  {
    category: 'Spring',
    difficulty: 'medium',
    question: 'What is a Principal in Spring Security?',
    options: [
      { id: 'a', text: 'The authenticated caller. Authentication extends Principal and is stored in the SecurityContext' },
      { id: 'b', text: 'The JPA @Id annotation' },
      { id: 'c', text: 'The first constructor parameter of every bean' },
      { id: 'd', text: 'The Maven parent POM' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'After authentication, the SecurityContext holds an Authentication. That object is a Principal. Its getPrincipal() value is often a UserDetails instance or the username.',
    reference: 'Spring Security docs — SecurityContext',
  },
  {
    category: 'Spring',
    difficulty: 'medium',
    question: 'Which setup matches a typical token-based REST API?',
    options: [
      { id: 'a', text: 'Stateless sessions, with each request authenticated by a bearer token or basic credentials' },
      { id: 'b', text: 'permitAll on every exchange, and the password stored in a cookie named admin' },
      { id: 'c', text: 'A SecurityContext populated once at build time from a static initializer' },
      { id: 'd', text: 'REST routes cannot be protected' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'A token API usually sets the session policy to stateless so the server does not create an HTTP session. Each call presents its own credentials. Browser form apps are different: they keep a session and CSRF protection.',
    reference: 'Spring Security docs — Session management',
  },
  {
    category: 'Spring',
    difficulty: 'medium',
    question: 'What does @PreAuthorize do?',
    options: [
      { id: 'a', text: 'Runs an authorization expression before the method when method security is enabled' },
      { id: 'b', text: 'Maps an HTTP path' },
      { id: 'c', text: 'Encrypts the return value' },
      { id: 'd', text: 'Replaces authentication' },
    ],
    correctOptionIds: ['a'],
    explanation:
      '@PreAuthorize is method security. The expression, such as hasRole("ADMIN"), must pass before the method runs. Enable it with @EnableMethodSecurity. Like other proxy advice, a self-call does not trigger it.',
    reference: 'Spring Security docs — Method security',
  },
  {
    category: 'Spring',
    difficulty: 'medium',
    type: 'truefalse',
    question: 'WebSecurityConfigurerAdapter is the recommended base class for HTTP security configuration in Spring Security 6.',
    options: [
      { id: 'a', text: 'True' },
      { id: 'b', text: 'False' },
    ],
    correctOptionIds: ['b'],
    explanation:
      'The adapter is gone in Spring Security 6. Configure a SecurityFilterChain bean instead. Spring Boot 3 applications use that Security 6 model.',
    reference: 'Spring Security docs — Migrate to SecurityFilterChain',
  },
  {
    category: 'Spring',
    difficulty: 'hard',
    question: 'When does Spring Security CSRF protection apply by default on the servlet stack?',
    options: [
      { id: 'a', text: 'To state-changing requests, so a browser client must send the expected CSRF token' },
      { id: 'b', text: 'To GET requests only, and POST is ignored' },
      { id: 'c', text: 'It is always disabled, including for browser form logins' },
      { id: 'd', text: 'It is a database constraint and does not involve HTTP' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'CSRF protection is on by default. Safe methods such as GET, HEAD, OPTIONS, and TRACE are not checked. A cookie-based browser app should keep it. A stateless bearer-token API often disables it because the browser does not attach that credential automatically.',
    reference: 'Spring Security docs — CSRF',
  },
  {
    category: 'Spring',
    difficulty: 'easy',
    question: 'How is Spring commonly used to build microservices?',
    options: [
      { id: 'a', text: 'Each service is a Spring Boot process, and Spring Cloud adds discovery, config, a gateway, and resilience helpers' },
      { id: 'b', text: 'Every service must share one ApplicationContext in one process' },
      { id: 'c', text: 'Spring can start only one jar on a machine' },
      { id: 'd', text: 'A microservice must be an EJB' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'A microservice is a separately deployed application. Spring Boot packages that application. Spring Cloud projects address the distributed problems around it. The services do not share one in-process context.',
    reference: 'Spring Cloud docs — Overview',
  },
  {
    category: 'Spring',
    difficulty: 'medium',
    type: 'multiple',
    question: 'Which of these belong to the usual Spring Cloud toolkit?',
    options: [
      { id: 'a', text: 'Service discovery' },
      { id: 'b', text: 'Centralized configuration' },
      { id: 'c', text: 'An API gateway' },
      { id: 'd', text: 'JdbcTemplate' },
    ],
    correctOptionIds: ['a', 'b', 'c'],
    explanation:
      'Spring Cloud covers distributed-system concerns such as discovery, config, gateway routing, and circuit breakers. JdbcTemplate is core Spring JDBC, not a Cloud project.',
    reference: 'Spring Cloud docs — Features',
  },
  {
    category: 'Spring',
    difficulty: 'easy',
    type: 'truefalse',
    question: 'Eureka is a service registry: instances register themselves, and clients look up other instances by service name.',
    options: [
      { id: 'a', text: 'True' },
      { id: 'b', text: 'False' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'A Eureka server stores registrations. Clients register on startup and query the registry to find collaborators. It is not a database, a web server, or a password encoder.',
    reference: 'Spring Cloud Netflix docs — Eureka',
  },
  {
    category: 'Spring',
    difficulty: 'medium',
    question: 'How does client-side load balancing work with Spring Cloud?',
    options: [
      { id: 'a', text: 'Spring Cloud LoadBalancer chooses an instance after the client resolves a service name' },
      { id: 'b', text: 'The browser picks a random pod, and discovery is not used' },
      { id: 'c', text: 'Netflix Ribbon is required, and Spring Cloud LoadBalancer cannot replace it' },
      { id: 'd', text: 'JdbcTemplate balances SQL queries across HTTP services' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'A @LoadBalanced RestClient, RestTemplate, or WebClient can use a service name instead of one host. Spring Cloud LoadBalancer selects an instance. Ribbon is the older client.',
    reference: 'Spring Cloud docs — Spring Cloud LoadBalancer',
  },
  {
    category: 'Spring',
    difficulty: 'medium',
    question: 'What is Spring Cloud Config used for?',
    options: [
      { id: 'a', text: 'Serving externalized configuration, often from Git, so services do not bake every environment setting into the jar' },
      { id: 'b', text: 'Replacing application.properties with a format Boot cannot read' },
      { id: 'c', text: 'The CSRF filter' },
      { id: 'd', text: 'Storing HTTP sessions inside a controller field' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'The config server exposes properties from a backend such as a Git repository. Clients import that config at startup. Local application.properties still works; the server is for shared, environment-specific config.',
    reference: 'Spring Cloud Config docs',
  },
  {
    category: 'Spring',
    difficulty: 'medium',
    question: 'What does a circuit breaker do when a downstream service is failing?',
    options: [
      { id: 'a', text: 'After repeated failures it opens and further calls fail fast or run a fallback until a trial call is allowed' },
      { id: 'b', text: 'It retries forever on the request thread' },
      { id: 'c', text: 'It is a SQL isolation level' },
      { id: 'd', text: 'It shuts down the JVM when one bean fails to start' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Closed means calls go through. Open means calls are rejected quickly so threads are not stuck on a dead dependency. Half-open lets a trial through. Spring Cloud Circuit Breaker commonly delegates to Resilience4j.',
    reference: 'Spring Cloud Circuit Breaker docs',
  },
  {
    category: 'Spring',
    difficulty: 'medium',
    question: 'What is Spring Cloud Gateway?',
    options: [
      { id: 'a', text: 'A reactive edge application that routes requests with predicates and filters' },
      { id: 'b', text: 'A JPA repository base class' },
      { id: 'c', text: 'A replacement that removes DispatcherServlet from every service and bans WebFlux' },
      { id: 'd', text: 'Another name for the Eureka server' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'The gateway is its own Spring WebFlux process at the edge. Routes match predicates such as a path and can rewrite, authenticate, or limit requests. It is not the service registry.',
    reference: 'Spring Cloud Gateway docs',
  },
  {
    category: 'Spring',
    difficulty: 'easy',
    question: 'How does Spring support reactive programming?',
    options: [
      { id: 'a', text: 'WebFlux and Project Reactor types, Mono and Flux, represent asynchronous publishers and subscribers' },
      { id: 'b', text: 'By making every method synchronized' },
      { id: 'c', text: 'By polling a database in a tight loop' },
      { id: 'd', text: 'Only with a blocking servlet thread and RestTemplate' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Reactive streams push data when the subscriber is ready. Spring WebFlux is the reactive web stack and uses Reactor. Spring MVC remains the servlet stack.',
    reference: 'Spring Framework docs — WebFlux',
  },
  {
    category: 'Spring',
    difficulty: 'medium',
    question: 'What is Spring WebFlux?',
    options: [
      { id: 'a', text: 'The reactive web stack, which can run on Netty, with controllers that return Mono or Flux' },
      { id: 'b', text: 'A release that deleted Spring MVC from the framework' },
      { id: 'c', text: 'An XML parser' },
      { id: 'd', text: 'A batch job definition' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'WebFlux is an alternative to Spring MVC, not a removal of it. spring-boot-starter-webflux uses Netty by default. Annotated controllers and functional RouterFunction routes are both supported.',
    reference: 'Spring Framework docs — WebFlux overview',
  },
  {
    category: 'Spring',
    difficulty: 'medium',
    type: 'truefalse',
    question: 'In reactive streams, backpressure means the subscriber tells the publisher how many items it can accept.',
    options: [
      { id: 'a', text: 'True' },
      { id: 'b', text: 'False' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'The subscriber requests a number of items. A well-behaved publisher does not emit more than that demand. A larger thread pool with an unbounded queue is not backpressure.',
    reference: 'Reactive Streams specification — Subscription.request',
  },
  {
    category: 'Spring',
    difficulty: 'hard',
    question: 'How do you keep a WebFlux endpoint non-blocking?',
    options: [
      { id: 'a', text: 'Return Mono or Flux and call downstream services with WebClient, without blocking the event-loop thread' },
      { id: 'b', text: 'Call block() on the Netty event loop for every downstream request' },
      { id: 'c', text: 'Use RestTemplate inside the WebFlux controller as the recommended client' },
      { id: 'd', text: 'Return a view name from a functional route and read a JDBC ResultSet on the event loop' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'The event loop should not wait on blocking IO. WebClient returns a publisher. block(), RestTemplate, and JDBC on that thread stall every other request sharing the loop.',
    reference: 'Spring Framework docs — WebClient',
  },
  {
    category: 'Spring',
    difficulty: 'medium',
    question: 'When should a test avoid loading a Spring ApplicationContext?',
    options: [
      { id: 'a', text: 'When the test targets one class and can pass its collaborators as mocks' },
      { id: 'b', text: 'Never. Every test must boot the full application and a real database' },
      { id: 'c', text: 'Unit tests are not allowed to call methods' },
      { id: 'd', text: '@SpringBootTest is required to construct one object with new' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'A unit test constructs the class under test and mocks neighbors. Load a slice such as @WebMvcTest, or the full @SpringBootTest context, only when the behavior depends on Spring.',
    reference: 'Spring Framework docs — Testing',
  },
  {
    category: 'Spring',
    difficulty: 'easy',
    type: 'truefalse',
    question: 'The Spring TestContext framework can cache an ApplicationContext and reuse it for tests that share the same configuration.',
    options: [
      { id: 'a', text: 'True' },
      { id: 'b', text: 'False' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Starting a context is expensive, so the TestContext framework caches it. Tests can receive injected beans. A context is rebuilt when its configuration changes or a test dirties it.',
    reference: 'Spring Framework docs — TestContext framework',
  },
  {
    category: 'Spring',
    difficulty: 'medium',
    question: 'How do you replace one bean with a Mockito mock in a Spring test context?',
    options: [
      { id: 'a', text: 'Declare @MockitoBean on the test field. The older annotation for the same job is @MockBean' },
      { id: 'b', text: 'Call new Mock() inside a static initializer of the production class' },
      { id: 'c', text: 'Mockito cannot be registered in a Spring test context' },
      { id: 'd', text: 'Delete the class from the production jar before the test' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'The test annotation adds a mock bean that takes the place of the real one in that test context. @MockBean did this and is deprecated in favor of @MockitoBean in current Spring Boot 3 tests.',
    reference: 'Spring Boot docs — @MockitoBean',
  },
  {
    category: 'Spring',
    difficulty: 'medium',
    question: 'How does Spring support internationalization?',
    options: [
      { id: 'a', text: 'A MessageSource resolves codes from locale-specific bundles such as messages_fr.properties' },
      { id: 'b', text: 'Each language must be a separate Java string literal inside every controller' },
      { id: 'c', text: 'Spring cannot load resource bundles' },
      { id: 'd', text: 'The locale is fixed at build time and the request cannot influence it' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'MessageSource.getMessage looks up a code for a Locale. A LocaleResolver such as AcceptHeaderLocaleResolver chooses the locale from the request. Basename messages loads messages.properties and messages_fr.properties.',
    reference: 'Spring Framework docs — MessageSource',
  },
  {
    category: 'Spring',
    difficulty: 'medium',
    type: 'truefalse',
    question: 'In @Value, ${server.port} is a property placeholder and #{2 + 2} is a Spring expression.',
    options: [
      { id: 'a', text: 'True' },
      { id: 'b', text: 'False' },
    ],
    correctOptionIds: ['a'],
    explanation:
      '${...} resolves configuration properties. #{...} is the Spring Expression Language and can call beans and evaluate expressions. They are not the same syntax.',
    reference: 'Spring Framework docs — Spring Expression Language',
  },
  {
    category: 'Spring',
    difficulty: 'medium',
    question: 'How do you run a method on a schedule in Spring?',
    options: [
      { id: 'a', text: 'Add @EnableScheduling and annotate a bean method with @Scheduled' },
      { id: 'b', text: 'Annotate a method of an object that was created only with new' },
      { id: 'c', text: 'Treat fixedDelay and fixedRate as identical' },
      { id: 'd', text: 'Scheduling starts only when a Quartz database is present' },
    ],
    correctOptionIds: ['a'],
    explanation:
      '@EnableScheduling turns the feature on. @Scheduled accepts cron, fixedRate, or fixedDelay. fixedDelay waits from the end of the previous run; fixedRate is measured from the start. The method must be on a Spring bean. Quartz is optional.',
    reference: 'Spring Framework docs — Task execution and scheduling',
  },
  {
    category: 'Spring',
    difficulty: 'medium',
    question: 'When do you choose @Bean instead of @Component?',
    options: [
      { id: 'a', text: '@Bean registers the object a method returns, which is how you supply a library type you cannot annotate' },
      { id: 'b', text: 'The two annotations mean the same thing on a method' },
      { id: 'c', text: 'A @Bean method is illegal inside a @Configuration class' },
      { id: 'd', text: '@Component is not allowed on classes' },
    ],
    correctOptionIds: ['a'],
    explanation:
      '@Component marks your class for scanning. @Bean is a factory method. Inside a @Configuration class, calls between @Bean methods return the container singleton rather than running the method again.',
    reference: 'Spring Framework docs — @Bean and @Component',
  },
  {
    category: 'Spring',
    difficulty: 'hard',
    question: 'What is true of @Autowired and @Inject on a Spring bean that has one constructor?',
    options: [
      { id: 'a', text: 'Spring uses that constructor even when neither annotation is present. @Autowired is Spring-specific; @Inject is the Jakarta annotation' },
      { id: 'b', text: 'The context fails to start unless @Autowired is on that only constructor' },
      { id: 'c', text: '@Inject disables constructor injection' },
      { id: 'd', text: 'Only @Inject is recognized, and @Autowired does nothing' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Since Spring 4.3 a single constructor is used automatically. @Autowired can set required to false. @Inject has no required attribute and needs the Jakarta Inject API. Both inject the same way when they are present.',
    reference: 'Spring Framework docs — @Autowired',
  },
  {
    category: 'Spring',
    difficulty: 'medium',
    type: 'multiple',
    question: 'Which practices fit a typical Spring application?',
    options: [
      { id: 'a', text: 'Constructor injection for required collaborators' },
      { id: 'b', text: 'Transaction boundaries on the service layer' },
      { id: 'c', text: 'Field injection as the required default' },
      { id: 'd', text: 'Passwords committed in source code' },
    ],
    correctOptionIds: ['a', 'b'],
    explanation:
      'Constructor injection makes dependencies explicit and final. Transactions belong on the service use case, not on every controller or repository call. Field injection hides dependencies, and secrets do not belong in source.',
    reference: 'Spring Framework docs — Constructor injection',
  },
  {
    category: 'Spring',
    difficulty: 'medium',
    question: 'How should a web application handle exceptions that controllers can raise?',
    options: [
      { id: 'a', text: 'Map them in one place with @ControllerAdvice and @ExceptionHandler, and return a clear HTTP status' },
      { id: 'b', text: 'Catch Exception in every controller method and return null' },
      { id: 'c', text: 'Use the raw stack trace as the public API' },
      { id: 'd', text: '@ExceptionHandler methods work only when they are private' },
    ],
    correctOptionIds: ['a'],
    explanation:
      '@ControllerAdvice applies @ExceptionHandler methods across controllers. Spring 6 can build a ProblemDetail body for that response. Returning null skips a real status and hides the failure.',
    reference: 'Spring Framework docs — Controller advice',
  },
  {
    category: 'Spring',
    difficulty: 'medium',
    question: 'How should Spring Security store and check a password?',
    options: [
      { id: 'a', text: 'Store a one-way hash from a PasswordEncoder such as BCrypt, and compare with matches' },
      { id: 'b', text: 'Store the password with reversible encryption and decrypt it to compare' },
      { id: 'c', text: 'Use NoOpPasswordEncoder in production' },
      { id: 'd', text: 'Put the raw password in an unsigned token payload' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'PasswordEncoder.encode produces the stored hash. matches compares a presented password with that hash. BCrypt is a common choice. DelegatingPasswordEncoder can select an algorithm from an id prefix. NoOpPasswordEncoder stores plaintext and is not for production.',
    reference: 'Spring Security docs — PasswordEncoder',
  },
  {
    category: 'Spring',
    difficulty: 'medium',
    question: 'Which change actually helps a Spring web application that is slow because of the database?',
    options: [
      { id: 'a', text: 'Paginate queries, avoid N+1 selects, and use a pool such as HikariCP' },
      { id: 'b', text: 'Create a new DataSource on every repository call' },
      { id: 'c', text: 'Eagerly load every association on every request' },
      { id: 'd', text: 'Turn off the connection pool' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Most of that latency is query shape and connection management. Pagination and fetch plans cut the data transferred. A pool reuses connections. Spring Boot uses HikariCP by default when a JDBC starter is present.',
    reference: 'Spring Boot docs — DataSource and HikariCP',
  },
  {
    category: 'Spring',
    difficulty: 'easy',
    question: 'When is Aspect-Oriented Programming a good fit in Spring?',
    options: [
      { id: 'a', text: 'For a cross-cutting policy such as transactions, security, or metrics' },
      { id: 'b', text: 'For every business if statement the caller needs to read' },
      { id: 'c', text: 'Never for transactions' },
      { id: 'd', text: 'As a replacement for constructors' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'AOP pays off when the same policy wraps many methods. Business decisions belong in the method body where a reader can see them. Spring already uses AOP for @Transactional.',
    reference: 'Spring Framework docs — AOP with Spring',
  },
  {
    category: 'Spring',
    difficulty: 'medium',
    question: 'What is Spring Integration for?',
    options: [
      { id: 'a', text: 'Message-driven flows that connect application code and external systems through channels and endpoints' },
      { id: 'b', text: 'Styling HTML' },
      { id: 'c', text: 'The same job as a finite Spring Batch job, under another name' },
      { id: 'd', text: 'A Git client' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Spring Integration implements enterprise integration patterns. Messages move through channels. Endpoints connect those channels to code or to adapters such as HTTP, files, or a broker.',
    reference: 'Spring Integration docs — Overview',
  },
  {
    category: 'Spring',
    difficulty: 'medium',
    question: 'What are the main pieces of a Spring Batch job?',
    options: [
      { id: 'a', text: 'A job of steps that read, process, and write items, with a job repository that records runs so they can restart' },
      { id: 'b', text: 'A browser session store' },
      { id: 'c', text: 'An HTTP toolkit with no persistence of job state' },
      { id: 'd', text: 'A replacement for message channels that cannot commit' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'A Job contains Steps. A chunk-oriented step uses an ItemReader, an ItemProcessor, and an ItemWriter. The JobRepository stores the execution so a failed job can restart instead of repeating committed chunks.',
    reference: 'Spring Batch docs — Domain and chunk processing',
  },
  {
    category: 'Spring',
    difficulty: 'medium',
    question: 'How do Spring Integration and Spring Batch differ?',
    options: [
      { id: 'a', text: 'Integration connects ongoing message flows; Batch runs finite jobs over large sets of items and can restart them' },
      { id: 'b', text: 'They are two names for the same library' },
      { id: 'c', text: 'Batch is only for WebSocket chat, and Integration cannot use a channel' },
      { id: 'd', text: 'Integration is a cron expression, and Batch is a CSS file' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Use Integration when systems exchange messages over time. Use Batch when a bounded data set must be processed reliably, in chunks, with restart metadata.',
    reference: 'Spring Integration docs and Spring Batch docs — purpose',
  },
  {
    category: 'Spring',
    difficulty: 'medium',
    question: 'What is an endpoint in Spring Integration?',
    options: [
      { id: 'a', text: 'The component that connects a message channel to application code or to an external adapter' },
      { id: 'b', text: 'Only a REST path, because Integration has no channels' },
      { id: 'c', text: 'A JPA @Id' },
      { id: 'd', text: 'The actuator management port' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Channels carry messages. An endpoint, such as a service activator or a channel adapter, consumes or produces those messages and connects the flow to code or to another system.',
    reference: 'Spring Integration docs — Message endpoints',
  },
  {
    category: 'Spring',
    difficulty: 'medium',
    type: 'truefalse',
    question: 'In a chunk-oriented Spring Batch step, one transaction covers the chunk that is written, which can contain more than one item.',
    options: [
      { id: 'a', text: 'True' },
      { id: 'b', text: 'False' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'The step reads and processes items until the chunk size is reached, writes that chunk, and commits. The chunk size is the commit interval. It is not a separate transaction per item unless the chunk size is 1.',
    reference: 'Spring Batch docs — Chunk-oriented processing',
  },
  {
    category: 'Spring',
    difficulty: 'medium',
    question: 'What is Spring Cloud Data Flow for?',
    options: [
      { id: 'a', text: 'Composing and launching data pipelines made of Spring Boot applications, as streams or tasks' },
      { id: 'b', text: 'Replacing the garbage collector' },
      { id: 'c', text: 'Replacing Spring MVC inside a single controller' },
      { id: 'd', text: 'An annotation placed on a JPA repository' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Data Flow orchestrates Boot apps. A stream is a long-running pipeline. A task is a finite process. It is a server you deploy, not a language feature inside one class.',
    reference: 'Spring Cloud Data Flow docs — Introduction',
  },
  {
    category: 'Spring',
    difficulty: 'hard',
    question: 'How do you add a custom processor to a Spring Cloud Data Flow stream?',
    options: [
      { id: 'a', text: 'Deploy a Boot application that supplies the processing function, then place that app between a source and a sink in the stream definition' },
      { id: 'b', text: 'Add a stored procedure and no application' },
      { id: 'c', text: 'Register an HTML filter' },
      { id: 'd', text: 'Mount an empty Docker volume and no code' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Stream apps are Boot applications. In the functional model a Function bean transforms the payload. Data Flow launches the registered apps and binds them through a broker.',
    reference: 'Spring Cloud Data Flow docs — Stream applications',
  },
  {
    category: 'Spring',
    difficulty: 'medium',
    question: 'How does a Spring Cloud Data Flow stream move data between applications?',
    options: [
      { id: 'a', text: 'The stream definition wires apps such as source, processor, and sink, and a binder moves messages between them' },
      { id: 'b', text: 'A single java.util.stream.Stream call inside one method, with no deployed apps' },
      { id: 'c', text: 'A database view' },
      { id: 'd', text: 'One request-scoped bean' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Each stage is a separate process. Spring Cloud Stream binders, commonly Kafka or RabbitMQ, carry the messages from one app to the next.',
    reference: 'Spring Cloud Data Flow docs — Streams',
  },
  {
    category: 'Spring',
    difficulty: 'medium',
    type: 'multiple',
    question: 'Which templates does Spring provide for talking to a message broker?',
    options: [
      { id: 'a', text: 'JmsTemplate' },
      { id: 'b', text: 'RabbitTemplate' },
      { id: 'c', text: 'KafkaTemplate' },
      { id: 'd', text: 'EntityManager, as the broker client API' },
    ],
    correctOptionIds: ['a', 'b', 'c'],
    explanation:
      'JmsTemplate sends JMS messages, RabbitTemplate sends AMQP, and KafkaTemplate sends Kafka records. EntityManager is JPA, not a broker client. Listener annotations consume on the other side.',
    reference: 'Spring Framework docs — JMS, AMQP, and Spring for Apache Kafka',
  },
  {
    category: 'Spring',
    difficulty: 'easy',
    question: 'What does Spring add on top of the Java Message Service?',
    options: [
      { id: 'a', text: 'JmsTemplate for sending and @JmsListener for consuming, using a ConnectionFactory' },
      { id: 'b', text: 'A JSON schema language' },
      { id: 'c', text: 'The JDBC API under a new name' },
      { id: 'd', text: 'A web scope named jms' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'JMS is the API for queues and topics. Spring supplies the template and the listener container so application code does not manage connections and sessions by hand. A queue is point-to-point; a topic is publish-subscribe.',
    reference: 'Spring Framework docs — JMS',
  },
  {
    category: 'Spring',
    difficulty: 'easy',
    type: 'truefalse',
    question: '@KafkaListener marks a bean method that consumes records from the declared Kafka topics.',
    options: [
      { id: 'a', text: 'True' },
      { id: 'b', text: 'False' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'The annotation registers a listener on those topics. The method receives the payload or the consumer record. Sending is a different API, KafkaTemplate. Spring Boot enables the Kafka listener infrastructure when the Kafka starter is present.',
    reference: 'Spring for Apache Kafka docs — @KafkaListener',
  },
  {
    category: 'Spring',
    difficulty: 'medium',
    question: 'How do you send and receive AMQP messages with Spring?',
    options: [
      { id: 'a', text: 'RabbitTemplate sends, and @RabbitListener consumes from a queue bound to an exchange' },
      { id: 'b', text: 'AMQP is the cache annotation' },
      { id: 'c', text: 'RabbitTemplate executes SQL' },
      { id: 'd', text: '@RabbitListener handles browser form posts' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'AMQP in Spring projects usually means RabbitMQ. The template converts and sends a message to an exchange. A listener method receives from a queue. Bindings decide which messages reach that queue.',
    reference: 'Spring AMQP docs — RabbitTemplate and @RabbitListener',
  },
  {
    category: 'Spring',
    difficulty: 'easy',
    question: 'What does Spring Kafka provide?',
    options: [
      { id: 'a', text: 'KafkaTemplate and listener containers, pulled in by Boot with spring-boot-starter-kafka' },
      { id: 'b', text: 'A Kafka broker written as XML' },
      { id: 'c', text: 'A client that can talk only to RabbitMQ' },
      { id: 'd', text: 'An in-memory list that replaces the Kafka cluster' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Spring for Apache Kafka is a client library. It does not replace the broker. The Boot starter auto-configures the producer factory, consumer factory, and KafkaTemplate from spring.kafka properties.',
    reference: 'Spring Boot docs — Apache Kafka',
  },
  {
    category: 'Spring',
    difficulty: 'hard',
    question: 'How can Spring Kafka group several sends into one transaction?',
    options: [
      { id: 'a', text: 'Enable a transactional producer with a transaction-id prefix so those sends commit or abort together' },
      { id: 'b', text: 'KafkaTemplate cannot participate in a transaction' },
      { id: 'c', text: 'A JPA @Transactional annotation is enough, with no transactional producer settings' },
      { id: 'd', text: 'acks=0 turns on Kafka transactions' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'spring.kafka.producer.transaction-id-prefix makes the producer transactional. KafkaTemplate can then run the sends in one Kafka transaction. acks controls acknowledgment, not transactions. A JPA transaction does not by itself commit Kafka sends.',
    reference: 'Spring for Apache Kafka docs — Transactions',
  },
  {
    category: 'Spring',
    difficulty: 'easy',
    question: 'What is KafkaTemplate used for?',
    options: [
      { id: 'a', text: 'Sending records. send returns a future for the producer result' },
      { id: 'b', text: 'Declaring a listener method' },
      { id: 'c', text: 'Implementing a JPA repository' },
      { id: 'd', text: 'Storing consumer offsets in a controller field by default' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'KafkaTemplate is the high-level producer API. In current Spring Kafka, send returns a CompletableFuture. Consumption belongs on @KafkaListener, and offsets are committed by the listener container.',
    reference: 'Spring for Apache Kafka docs — KafkaTemplate',
  },
  {
    category: 'Spring',
    difficulty: 'easy',
    question: 'How do you turn on method-result caching in Spring?',
    options: [
      { id: 'a', text: 'Add @EnableCaching, provide a CacheManager, and mark methods with the cache annotations' },
      { id: 'b', text: 'A static HashMap in a controller is the Spring cache abstraction' },
      { id: 'c', text: 'Caching requires AOP to be disabled' },
      { id: 'd', text: '@Cacheable is applied to private methods called through this' },
    ],
    correctOptionIds: ['a'],
    explanation:
      '@EnableCaching installs the cache advice. A CacheManager picks the store, such as a concurrent map, Caffeine, or Redis. The advice is a proxy, so private methods and self-calls are not cached.',
    reference: 'Spring Framework docs — Cache abstraction',
  },
  {
    category: 'Spring',
    difficulty: 'medium',
    question: 'What does the Spring cache abstraction give you?',
    options: [
      { id: 'a', text: 'Cache and CacheManager interfaces so the same annotations can target different providers' },
      { id: 'b', text: 'Business methods that must call one vendor API directly' },
      { id: 'c', text: 'HTTP-header caching only, with no method cache' },
      { id: 'd', text: 'A replacement for the database' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Application code uses annotations and the Spring cache API. The provider sits behind CacheManager. Swapping a concurrent map for Redis does not require rewriting the service method.',
    reference: 'Spring Framework docs — Cache abstraction',
  },
  {
    category: 'Spring',
    difficulty: 'hard',
    type: 'multiple',
    question: 'Which annotations belong to the Spring cache abstraction?',
    options: [
      { id: 'a', text: '@Cacheable, which returns a stored value and skips the method on a hit' },
      { id: 'b', text: '@CachePut, which always runs the method and updates the cache' },
      { id: 'c', text: '@CacheEvict, which removes entries' },
      { id: 'd', text: '@RequestMapping, which caches a controller by default' },
    ],
    correctOptionIds: ['a', 'b', 'c'],
    explanation:
      '@Cacheable is the read-through cache. @CachePut does not skip the method. @CacheEvict deletes one key or, with allEntries, the cache. @RequestMapping is an MVC mapping and does not cache the method result.',
    reference: 'Spring Framework docs — Declarative annotation-based caching',
  },
  {
    category: 'Spring',
    difficulty: 'medium',
    question: 'How does Spring support a GraphQL API?',
    options: [
      { id: 'a', text: 'Spring for GraphQL maps a schema to handler methods, and spring-boot-starter-graphql sets that up' },
      { id: 'b', text: 'By returning a String from @GetMapping with no schema' },
      { id: 'c', text: 'Spring has no GraphQL support' },
      { id: 'd', text: 'By subclassing DispatcherServlet and parsing SQL' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'You write a schema, often under src/main/resources/graphql, and map fields with annotations such as @QueryMapping. The Boot starter exposes the HTTP endpoint and wires the GraphQL engine.',
    reference: 'Spring for GraphQL docs — Getting started',
  },
  {
    category: 'Spring',
    difficulty: 'medium',
    type: 'multiple',
    question: 'Which are real advantages of GraphQL compared with a typical REST design?',
    options: [
      { id: 'a', text: 'The client can ask for the fields it needs' },
      { id: 'b', text: 'Many query shapes can share one HTTP endpoint' },
      { id: 'c', text: 'Authorization is unnecessary' },
      { id: 'd', text: 'A schema is optional and responses need no defined types' },
    ],
    correctOptionIds: ['a', 'b'],
    explanation:
      'The client names the fields, which avoids over-fetching, and the endpoint stays stable while queries differ. GraphQL still needs a schema and still needs authorization. HTTP caching is harder than with cacheable REST GET routes, and nested fields need care to avoid N+1 queries.',
    reference: 'Spring for GraphQL docs — Overview',
  },
];

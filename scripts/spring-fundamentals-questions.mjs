// Original questions. Wording and answers follow the Spring Framework 6 docs, not a third-party catalog.

export const springFundamentalsQuestions = [
  {
    category: 'Spring',
    difficulty: 'easy',
    question: 'What does the Spring Framework core give an application?',
    options: [
      { id: 'a', text: 'A container that creates objects and wires their dependencies, plus support for concerns such as transactions and web MVC' },
      { id: 'b', text: 'A replacement for the Java Virtual Machine' },
      { id: 'c', text: 'A relational database that stores every bean' },
      { id: 'd', text: 'A browser runtime for Java classes' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Spring is a framework on top of Java. Its core container manages beans and dependencies. Other projects add web, data, security, and similar capabilities, but they do not replace the JVM or the database.',
    reference: 'Spring Framework docs — Overview',
  },
  {
    category: 'Spring',
    difficulty: 'easy',
    question: 'Which setup starts a small Spring application without Spring Boot?',
    options: [
      { id: 'a', text: 'A @Configuration class that declares beans, passed to a new AnnotationConfigApplicationContext' },
      { id: 'b', text: 'A main method that only calls new on each service and never creates a context' },
      { id: 'c', text: 'An empty persistence.xml file and no context' },
      { id: 'd', text: 'A module-info.java file with no bean definitions' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'AnnotationConfigApplicationContext reads the Java configuration class, refreshes the container, and creates the declared singletons. Objects built only with new are outside that container, so Spring does not inject their dependencies.',
    reference: 'Spring Framework docs — Java-based container configuration',
  },
  {
    category: 'Spring',
    difficulty: 'easy',
    question: 'What is Inversion of Control in Spring?',
    options: [
      { id: 'a', text: 'The container creates collaborators and supplies them, instead of each class constructing the concrete objects it uses' },
      { id: 'b', text: 'Each class calls new on the concrete classes it needs' },
      { id: 'c', text: 'The compiler rejects constructors' },
      { id: 'd', text: 'Beans are loaded only through ServiceLoader, and the Spring container is not involved' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Control of object creation moves from application code to the container. Dependency injection is how Spring does that: the container passes collaborators in, usually through the constructor.',
    reference: 'Spring Framework docs — The IoC container',
  },
  {
    category: 'Spring',
    difficulty: 'medium',
    question: 'How does an ApplicationContext differ from a plain BeanFactory?',
    options: [
      { id: 'a', text: 'It adds events, message sources, and resource loading, and it creates singleton beans when the context refreshes' },
      { id: 'b', text: 'It is only a map of strings and cannot create beans' },
      { id: 'c', text: 'It replaces the garbage collector' },
      { id: 'd', text: 'It compiles Java source files' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'BeanFactory is the basic registry. ApplicationContext extends it and eagerly instantiates non-lazy singletons on refresh. It also publishes application events and can resolve messages and resources.',
    reference: 'Spring Framework docs — BeanFactory or ApplicationContext',
  },
  {
    category: 'Spring',
    difficulty: 'easy',
    type: 'multiple',
    question: 'Which injection styles does Spring support?',
    options: [
      { id: 'a', text: 'Constructor injection' },
      { id: 'b', text: 'Setter injection' },
      { id: 'c', text: 'Field injection' },
      { id: 'd', text: 'Injection only through a public static void main parameter' },
    ],
    correctOptionIds: ['a', 'b', 'c'],
    explanation:
      'Spring can inject through a constructor, a setter, or a field. Constructor injection is the usual choice because the dependency is required and the field can be final. A main parameter is not an injection style.',
    reference: 'Spring Framework docs — Dependencies and configuration',
  },
  {
    category: 'Spring',
    difficulty: 'medium',
    type: 'multiple',
    question: 'Which of these are built-in Spring bean scopes?',
    options: [
      { id: 'a', text: 'singleton' },
      { id: 'b', text: 'prototype' },
      { id: 'c', text: 'request' },
      { id: 'd', text: 'refresh' },
    ],
    correctOptionIds: ['a', 'b', 'c'],
    explanation:
      'singleton is the default: one instance per container. prototype creates an instance each time the container supplies the bean. request, session, application, and websocket are web scopes. refresh is not a scope. A prototype injected once into a singleton is not created again on later calls unless the singleton looks it up each time.',
    reference: 'Spring Framework docs — Bean scopes',
  },
  {
    category: 'Spring',
    difficulty: 'medium',
    question: 'How do you register an instance of a library class whose source you cannot annotate?',
    options: [
      { id: 'a', text: 'Return it from a @Bean method in a @Configuration class' },
      { id: 'b', text: 'Add @Component to the third-party source file' },
      { id: 'c', text: 'Call new in a controller and expect Spring to inject that local variable' },
      { id: 'd', text: 'List the class name in a properties file with no bean definition' },
    ],
    correctOptionIds: ['a'],
    explanation:
      '@Component works when component scanning can see your class. A type you do not own is registered by a @Bean method, which returns the instance the container should manage. A local new expression is not a bean definition.',
    reference: 'Spring Framework docs — @Bean',
  },
  {
    category: 'Spring',
    difficulty: 'easy',
    type: 'truefalse',
    question: 'The Spring core container creates beans, injects their dependencies, and manages their lifecycle.',
    options: [
      { id: 'a', text: 'True' },
      { id: 'b', text: 'False' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'That is the job of the IoC container. It instantiates configured beans, wires collaborators, calls lifecycle callbacks, and closes them when the context closes.',
    reference: 'Spring Framework docs — Container overview',
  },
  {
    category: 'Spring',
    difficulty: 'easy',
    question: 'What do a Spring XML file and a @Configuration class have in common?',
    options: [
      { id: 'a', text: 'Both can declare the beans the container should manage' },
      { id: 'b', text: 'Both are executed by the browser' },
      { id: 'c', text: 'Both replace javac' },
      { id: 'd', text: 'The context starts only when the file is named beans.xml' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'XML and Java configuration are two ways to describe beans. The file or class name is yours to choose. The context loads the resource or class you pass it, not a single mandatory filename.',
    reference: 'Spring Framework docs — Configuration metadata',
  },
  {
    category: 'Spring',
    difficulty: 'medium',
    question: 'What does new AnnotationConfigApplicationContext(AppConfig.class) do?',
    options: [
      { id: 'a', text: 'Creates and refreshes a context from that Java configuration class' },
      { id: 'b', text: 'Starts an embedded Tomcat with no further configuration' },
      { id: 'c', text: 'Reads only YAML files' },
      { id: 'd', text: 'Registers every class on the classpath, annotated or not' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'The constructor registers AppConfig and refreshes the context, which creates the beans that configuration defines. It does not by itself start a web server, and component scanning registers only the types you tell it to scan.',
    reference: 'Spring Framework docs — AnnotationConfigApplicationContext',
  },
  {
    category: 'Spring',
    difficulty: 'easy',
    question: 'What is aspect-oriented programming used for in an application?',
    options: [
      { id: 'a', text: 'Applying behavior such as transactions or logging around many methods without copying that behavior into each method' },
      { id: 'b', text: 'Replacing classes with database tables' },
      { id: 'c', text: 'Defining a SQL dialect' },
      { id: 'd', text: 'The same mechanism as extends' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'AOP modularizes cross-cutting behavior. Spring applies that behavior with proxies around bean methods, so the business method stays focused on its own job.',
    reference: 'Spring Framework docs — AOP concepts',
  },
  {
    category: 'Spring',
    difficulty: 'medium',
    question: 'How does proxy-based Spring AOP apply advice?',
    options: [
      { id: 'a', text: 'It wraps Spring beans and intercepts method calls that come through the proxy, using a JDK proxy or CGLIB' },
      { id: 'b', text: 'It rewrites every .java file on disk before javac runs' },
      { id: 'c', text: 'It advises objects that were created with new and never registered as beans' },
      { id: 'd', text: 'It can only print logs and cannot implement transactions' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Spring AOP is proxy-based and applies to Spring beans. Calls that go through the proxy can be advised. Objects created with new, and private or self-invoked methods, are not intercepted by that proxy. @Transactional is itself implemented with this mechanism.',
    reference: 'Spring Framework docs — Spring AOP proxies',
  },
  {
    category: 'Spring',
    difficulty: 'easy',
    question: 'In Spring AOP, what is the difference between a pointcut and an advice?',
    options: [
      { id: 'a', text: 'A pointcut selects join points; an advice is the action that runs at those join points' },
      { id: 'b', text: 'They are two names for a bean scope' },
      { id: 'c', text: 'A pointcut is the HTTP response body' },
      { id: 'd', text: 'An advice is the database username' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'The pointcut is the predicate, for example "execution of methods on @Service beans". The advice is the before, after, or around logic that runs when the predicate matches.',
    reference: 'Spring Framework docs — Declaring a pointcut and advice',
  },
  {
    category: 'Spring',
    difficulty: 'medium',
    question: 'What is a join point in Spring AOP?',
    options: [
      { id: 'a', text: 'A method execution on a Spring bean, which is the point Spring AOP can advise' },
      { id: 'b', text: 'A row in a SQL table' },
      { id: 'c', text: 'The TCP port of the web server' },
      { id: 'd', text: 'A field write, which Spring AOP proxies advise by default' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'A join point is a point in execution where advice could run. Spring AOP join points are method executions. Field access is an AspectJ join point, not one that Spring AOP proxies advise.',
    reference: 'Spring Framework docs — Spring AOP capabilities and goals',
  },
  {
    category: 'Spring',
    difficulty: 'easy',
    type: 'truefalse',
    question: 'A cross-cutting concern is behavior that appears across otherwise unrelated parts of an application, which is the kind of behavior Spring AOP is meant to apply.',
    options: [
      { id: 'a', text: 'True' },
      { id: 'b', text: 'False' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'A concern is a responsibility of the application. A cross-cutting concern, such as security or transactions, shows up in many modules. AOP exists so that behavior is written once and applied at matching join points.',
    reference: 'Spring Framework docs — AOP concepts',
  },
  {
    category: 'Spring',
    difficulty: 'medium',
    type: 'multiple',
    question: 'Which of these are advice kinds in Spring AOP?',
    options: [
      { id: 'a', text: 'Before' },
      { id: 'b', text: 'After returning' },
      { id: 'c', text: 'Around' },
      { id: 'd', text: 'On compilation of every JDK class' },
    ],
    correctOptionIds: ['a', 'b', 'c'],
    explanation:
      'Spring AOP advice can run before a method, after it returns, after it throws, after it finishes either way, or around the call. It does not hook compilation of the JDK.',
    reference: 'Spring Framework docs — Declaring advice',
  },
  {
    category: 'Spring',
    difficulty: 'medium',
    question: 'What do you need in a non-Boot application so that an @Aspect is applied?',
    options: [
      { id: 'a', text: '@EnableAspectJAutoProxy, and the aspect class registered as a bean' },
      { id: 'b', text: '@EnableWebMvc by itself' },
      { id: 'c', text: 'server.port set to 80' },
      { id: 'd', text: 'The aspect class implementing Runnable' },
    ],
    correctOptionIds: ['a'],
    explanation:
      '@EnableAspectJAutoProxy turns on proxy-based AOP. The @Aspect class must still be a bean so Spring can find its advice. The name refers to the AspectJ annotations; it does not by itself mean compile-time weaving.',
    reference: 'Spring Framework docs — @EnableAspectJAutoProxy',
  },
  {
    category: 'Spring',
    difficulty: 'easy',
    question: 'What does the @Aspect annotation mark?',
    options: [
      { id: 'a', text: 'A class that holds pointcuts and advice' },
      { id: 'b', text: 'A JPA entity' },
      { id: 'c', text: 'A request mapping' },
      { id: 'd', text: 'A bean that must not be registered in the context' },
    ],
    correctOptionIds: ['a'],
    explanation:
      '@Aspect marks the class that contains advice. Spring AOP still needs that class to be a bean. It is not a persistence or web-mapping annotation.',
    reference: 'Spring Framework docs — @Aspect',
  },
  {
    category: 'Spring',
    difficulty: 'hard',
    question: 'Why does a public method on a Spring bean fail to run its @Transactional advice when it calls a second transactional method with this.other()?',
    options: [
      { id: 'a', text: 'The call stays inside the target object and never enters the proxy that applies the advice' },
      { id: 'b', text: 'Spring ignores @Transactional on public methods' },
      { id: 'c', text: 'this.other() always starts a new transaction of propagation REQUIRES_NEW' },
      { id: 'd', text: 'Proxies advise only private methods' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'The proxy sits in front of the bean. External callers hit the proxy. A self-call uses the raw instance, so the second @Transactional is not applied. Move the called method to another bean, or inject the proxied self, if the second transaction boundary matters.',
    reference: 'Spring Framework docs — Understanding AOP proxies',
  },
  {
    category: 'Spring',
    difficulty: 'easy',
    question: 'How does Spring sit between application code and a database?',
    options: [
      { id: 'a', text: 'It provides templates, exception translation, and transaction demarcation on top of JDBC or an ORM' },
      { id: 'b', text: 'It replaces the database server' },
      { id: 'c', text: 'It allows queries only as stored procedures' },
      { id: 'd', text: 'It opens a new database for each bean' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Spring does not implement the database. It integrates JDBC and ORMs, translates vendor exceptions, and can bind a transaction to a thread while a service method runs.',
    reference: 'Spring Framework docs — Data access',
  },
  {
    category: 'Spring',
    difficulty: 'medium',
    question: 'What is DataAccessException?',
    options: [
      { id: 'a', text: 'The root of an unchecked hierarchy Spring uses so callers are not forced to declare vendor checked exceptions such as SQLException' },
      { id: 'b', text: 'A checked exception that every repository method must declare' },
      { id: 'c', text: 'The exception thrown when a bean is missing' },
      { id: 'd', text: 'An HTTP 404 status type' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'JdbcTemplate and the ORM integration translate persistence failures into DataAccessException subclasses. Those exceptions are unchecked, so repository methods do not have to declare SQLException.',
    reference: 'Spring Framework docs — DataAccessException',
  },
  {
    category: 'Spring',
    difficulty: 'easy',
    type: 'truefalse',
    question: 'JdbcTemplate holds the repeated JDBC workflow, including resource cleanup and exception translation, while the caller supplies the SQL and the mapping.',
    options: [
      { id: 'a', text: 'True' },
      { id: 'b', text: 'False' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'That is the template pattern in Spring JDBC. The template gets a connection, runs the statement, maps results through a callback such as RowMapper, translates SQLException, and releases resources.',
    reference: 'Spring Framework docs — JdbcTemplate',
  },
  {
    category: 'Spring',
    difficulty: 'easy',
    question: 'How do you run a query with JdbcTemplate?',
    options: [
      { id: 'a', text: 'Inject a JdbcTemplate built on a DataSource and call a method such as query or update' },
      { id: 'b', text: 'Build a new DriverManager connection inside every JdbcTemplate method yourself' },
      { id: 'c', text: 'Call it from a static initializer before any DataSource exists' },
      { id: 'd', text: 'Use it with no DataSource' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'JdbcTemplate needs a DataSource. After that it is safe to share. query and update take the SQL, bind parameters, and return mapped results or the update count.',
    reference: 'Spring Framework docs — JdbcTemplate',
  },
  {
    category: 'Spring',
    difficulty: 'hard',
    type: 'multiple',
    question: 'On which thrown types does @Transactional roll back by default?',
    options: [
      { id: 'a', text: 'RuntimeException' },
      { id: 'b', text: 'Error' },
      { id: 'c', text: 'A checked Exception, with no rollbackFor attribute' },
      { id: 'd', text: 'A normal return from the method' },
    ],
    correctOptionIds: ['a', 'b'],
    explanation:
      'The default rule rolls back on runtime exceptions and errors, and commits when a checked exception leaves the method. rollbackFor changes that. A self-call that never enters the transactional proxy does not start this rule at all.',
    reference: 'Spring Framework docs — @Transactional rollback rules',
  },
  {
    category: 'Spring',
    difficulty: 'medium',
    question: 'How does Spring support ORM frameworks such as Hibernate and JPA?',
    options: [
      { id: 'a', text: 'It can share one transaction manager with the ORM and, through Spring Data, implement repository interfaces' },
      { id: 'b', text: 'It forbids Hibernate' },
      { id: 'c', text: 'ORM in Spring means the controller writes SQL strings only' },
      { id: 'd', text: 'An EntityManager cannot participate in a Spring transaction' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Spring configures the EntityManager factory and binds the persistence context to the transaction it manages. Spring Data JPA then implements repository interfaces on top of that.',
    reference: 'Spring Framework docs — ORM integration',
  },
  {
    category: 'Spring',
    difficulty: 'medium',
    type: 'multiple',
    question: 'Which types are part of typical Spring JDBC use?',
    options: [
      { id: 'a', text: 'DataSource' },
      { id: 'b', text: 'JdbcTemplate' },
      { id: 'c', text: 'RowMapper' },
      { id: 'd', text: 'HttpSession' },
    ],
    correctOptionIds: ['a', 'b', 'c'],
    explanation:
      'The pool is a DataSource, JdbcTemplate runs the SQL, and RowMapper turns each row into an object. HttpSession is a web API, not a JDBC type. NamedParameterJdbcTemplate is the variant that binds :name parameters.',
    reference: 'Spring Framework docs — JDBC core classes',
  },
  {
    category: 'Spring',
    difficulty: 'easy',
    question: 'What is Spring MVC?',
    options: [
      { id: 'a', text: 'A web framework that uses DispatcherServlet as the front controller and controller beans to handle requests' },
      { id: 'b', text: 'A Swing toolkit' },
      { id: 'c', text: 'A replacement for the HTTP protocol' },
      { id: 'd', text: 'An object-relational mapper' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Spring MVC implements the model-view-controller style for HTTP. DispatcherServlet receives the request and delegates to a mapped controller method.',
    reference: 'Spring Framework docs — Spring Web MVC',
  },
  {
    category: 'Spring',
    difficulty: 'medium',
    question: 'Which sequence matches a Spring MVC request?',
    options: [
      { id: 'a', text: 'A handler mapping finds the controller method, then a view is resolved or a message converter writes the body' },
      { id: 'b', text: 'The browser calls a repository and skips the servlet' },
      { id: 'c', text: 'The server calls main for every HTTP request' },
      { id: 'd', text: 'A batch job reads the HTTP body before any servlet runs' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'DispatcherServlet asks a HandlerMapping for the method, a HandlerAdapter invokes it, then either a ViewResolver renders a view or an HttpMessageConverter writes a @ResponseBody result.',
    reference: 'Spring Framework docs — Processing requests',
  },
  {
    category: 'Spring',
    difficulty: 'easy',
    question: 'What do @Controller and @RequestMapping do?',
    options: [
      { id: 'a', text: '@Controller marks a web controller bean; @RequestMapping maps a path and HTTP details to a handler method' },
      { id: 'b', text: '@Controller opens a database transaction by itself' },
      { id: 'c', text: '@RequestMapping sets the server port' },
      { id: 'd', text: 'Both annotations are valid only on interfaces' },
    ],
    correctOptionIds: ['a'],
    explanation:
      '@Controller is a stereotype Spring MVC detects. @RequestMapping, and composed annotations such as @GetMapping, bind the method to a request. A mapping on the class is a path prefix.',
    reference: 'Spring Framework docs — @Controller and @RequestMapping',
  },
  {
    category: 'Spring',
    difficulty: 'easy',
    type: 'truefalse',
    question: 'DispatcherServlet is the front controller that receives the HTTP request and delegates to handler mappings.',
    options: [
      { id: 'a', text: 'True' },
      { id: 'b', text: 'False' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'It is the entry servlet of Spring MVC. It does not run SQL and it does not replace Spring Security. Filters in the servlet container run before it sees the request.',
    reference: 'Spring Framework docs — DispatcherServlet',
  },
  {
    category: 'Spring',
    difficulty: 'easy',
    question: 'How does a controller method receive a web request?',
    options: [
      { id: 'a', text: 'The mapping annotation selects the method, and arguments such as @PathVariable or @RequestBody carry the input' },
      { id: 'b', text: 'The method polls System.in' },
      { id: 'c', text: 'The controller constructor opens a ServerSocket' },
      { id: 'd', text: '@Scheduled invokes the method for every HTTP call' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Spring MVC converts the request into method arguments. @PathVariable reads the URI, @RequestParam reads a query or form field, and @RequestBody reads the converted body.',
    reference: 'Spring Framework docs — Handler methods',
  },
  {
    category: 'Spring',
    difficulty: 'medium',
    question: 'Where do servlet filters sit relative to a controller in a Spring MVC application?',
    options: [
      { id: 'a', text: 'Filters run first, then DispatcherServlet dispatches to the controller, then a view or a message converter completes the response' },
      { id: 'b', text: 'The controller runs before the socket is accepted' },
      { id: 'c', text: 'The view resolver runs before the request arrives' },
      { id: 'd', text: 'The repository chooses the controller' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'The servlet container applies filters, then the servlet. DispatcherServlet then runs the MVC pipeline. HandlerInterceptor hooks are inside that servlet, not a replacement for filters.',
    reference: 'Spring Framework docs — DispatcherServlet request lifecycle',
  },
  {
    category: 'Spring',
    difficulty: 'medium',
    question: 'How do you validate a @RequestBody in Spring MVC?',
    options: [
      { id: 'a', text: 'Add Jakarta Bean Validation constraints and @Valid so a failure raises MethodArgumentNotValidException' },
      { id: 'b', text: 'Validation runs only when the Java field is named valid' },
      { id: 'c', text: '@Valid never fails a request' },
      { id: 'd', text: 'Bean Validation removes the need for a controller' },
    ],
    correctOptionIds: ['a'],
    explanation:
      '@Valid or @Validated triggers the validator on that argument. For a @RequestBody, a failure becomes MethodArgumentNotValidException, which you can map to HTTP 400. A BindingResult parameter placed immediately after the argument handles the errors locally instead. The validator implementation, such as Hibernate Validator, must be on the classpath.',
    reference: 'Spring Framework docs — Validation',
  },
  {
    category: 'Spring',
    difficulty: 'medium',
    question: 'How does @RestController differ from @Controller?',
    options: [
      { id: 'a', text: '@RestController includes @ResponseBody, so the return value is the response body rather than a view name' },
      { id: 'b', text: '@RestController methods can return only void' },
      { id: 'c', text: '@Controller methods cannot be annotated with @ResponseBody' },
      { id: 'd', text: 'The two annotations differ only by package and behave the same' },
    ],
    correctOptionIds: ['a'],
    explanation:
      '@RestController is @Controller plus @ResponseBody. A String returned from a @RestController method is written as the body. The same String from a plain @Controller method is treated as a view name unless that method has @ResponseBody.',
    reference: 'Spring Framework docs — @RestController',
  },
];

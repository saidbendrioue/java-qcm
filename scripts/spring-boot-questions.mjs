// Original Spring Boot questions for the Java QCM.

export const springBootQuestions = [
  {
    category: 'Spring Boot',
    difficulty: 'easy',
    type: 'multiple',
    question: 'Which of these does Spring Boot provide?',
    options: [
      { id: 'a', text: 'Auto-configuration based on the classpath' },
      { id: 'b', text: 'Starters that bring a curated set of dependencies' },
      { id: 'c', text: 'An embedded web server for web applications' },
      { id: 'd', text: 'A bytecode format that replaces the JVM' },
    ],
    correctOptionIds: ['a', 'b', 'c'],
    explanation:
      'Boot is an opinionated layer on Spring. It configures beans you would otherwise write by hand, packs common dependencies as starters, and can run Tomcat inside the process. It still runs on a normal JVM.',
    reference: 'Spring Boot docs — Introducing Spring Boot',
  },
  {
    category: 'Spring Boot',
    difficulty: 'easy',
    question: 'What starts a Spring Boot application?',
    options: [
      { id: 'a', text: 'A class annotated with @SpringBootApplication whose main method calls SpringApplication.run' },
      { id: 'b', text: 'Only an XML file named boot.xml, with no main method' },
      { id: 'c', text: 'Extending WebSecurityConfigurerAdapter' },
      { id: 'd', text: 'A persistence.xml file and no application class' },
    ],
    correctOptionIds: ['a'],
    explanation:
      '@SpringBootApplication combines @Configuration, @EnableAutoConfiguration, and @ComponentScan. SpringApplication.run builds the environment, refreshes the context, and, for a web app, starts the embedded server.',
    reference: 'Spring Boot docs — Application class',
  },
  {
    category: 'Spring Boot',
    difficulty: 'medium',
    question: 'How does Spring Boot auto-configuration choose beans?',
    options: [
      { id: 'a', text: 'Auto-configuration classes apply when their conditions match, such as a class being present and a user bean of that type being absent' },
      { id: 'b', text: 'It generates a Java source file for every database table' },
      { id: 'c', text: 'It refuses to start if the application declares any @Bean' },
      { id: 'd', text: 'It runs only when spring.autoconfigure.exclude is set to *' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Boot loads auto-configuration classes listed in its imports file. Conditions such as @ConditionalOnClass and @ConditionalOnMissingBean decide what to register. A bean you declare yourself typically backs off the matching auto-configuration.',
    reference: 'Spring Boot docs — Auto-configuration',
  },
  {
    category: 'Spring Boot',
    difficulty: 'easy',
    question: 'What is a Spring Boot starter?',
    options: [
      { id: 'a', text: 'A dependency descriptor that pulls the libraries needed for one feature' },
      { id: 'b', text: 'The main class of the application' },
      { id: 'c', text: 'A running thread pool inside the JVM' },
      { id: 'd', text: 'An actuator endpoint' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Adding spring-boot-starter-web, for example, brings Spring MVC, Jackson, and an embedded Tomcat at versions the Boot BOM manages. The starter itself is mostly a build descriptor, not your application code.',
    reference: 'Spring Boot docs — Starters',
  },
  {
    category: 'Spring Boot',
    difficulty: 'medium',
    question: 'How does Spring Boot help with data access?',
    options: [
      { id: 'a', text: 'A data starter plus connection properties can auto-configure a DataSource and, with the JPA starter, an EntityManager' },
      { id: 'b', text: 'Boot cannot use JDBC' },
      { id: 'c', text: 'You must write a DataSource implementation to use the in-memory H2 starter' },
      { id: 'd', text: 'spring.datasource.url is ignored' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'spring-boot-starter-jdbc configures a pooled DataSource from spring.datasource properties and creates a JdbcTemplate. The JPA starter also configures the EntityManager factory. H2 on the classpath can be used as an embedded database when you choose that setup.',
    reference: 'Spring Boot docs — Data access',
  },
  {
    category: 'Spring Boot',
    difficulty: 'easy',
    type: 'truefalse',
    question: 'spring-boot-starter-web embeds a servlet container and starts it from the application main method, so a separate Tomcat installation is not required.',
    options: [
      { id: 'a', text: 'True' },
      { id: 'b', text: 'False' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'The starter embeds Tomcat by default. SpringApplication starts that server. You can switch the container or package a WAR for an external server, but the default web app is an executable jar.',
    reference: 'Spring Boot docs — Embedded web servers',
  },
  {
    category: 'Spring Boot',
    difficulty: 'medium',
    question: 'What does SpringApplication.run do?',
    options: [
      { id: 'a', text: 'Prepares the environment, creates and refreshes the application context, and calls runners' },
      { id: 'b', text: 'Asserts a JUnit expectation' },
      { id: 'c', text: 'Prints a banner and then exits before creating a context' },
      { id: 'd', text: 'Compiles the project with javac' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'SpringApplication is the Boot bootstrap. It deduces the application type, loads application properties, refreshes the context, starts an embedded server when the app is a web app, and then runs ApplicationRunner and CommandLineRunner beans.',
    reference: 'Spring Boot docs — SpringApplication',
  },
  {
    category: 'Spring Boot',
    difficulty: 'easy',
    type: 'multiple',
    question: 'Which files can hold Spring Boot configuration properties on the classpath?',
    options: [
      { id: 'a', text: 'application.properties' },
      { id: 'b', text: 'application.yml' },
      { id: 'c', text: 'pom.xml as the only source of server.port' },
      { id: 'd', text: 'web.xml, which Boot requires for every property' },
    ],
    correctOptionIds: ['a', 'b'],
    explanation:
      'Boot loads application.properties and application.yml from the classpath and from external config locations. pom.xml manages dependencies, and Boot does not require web.xml. Profile files such as application-prod.properties are added when that profile is active.',
    reference: 'Spring Boot docs — Externalized configuration',
  },
  {
    category: 'Spring Boot',
    difficulty: 'easy',
    question: 'What does @SpringBootTest load?',
    options: [
      { id: 'a', text: 'A full Spring Boot application context for an integration test' },
      { id: 'b', text: 'No context, and it only constructs one class with new' },
      { id: 'c', text: 'Assertions, so the test does not need a test method' },
      { id: 'd', text: 'The production process on the public port, and it cannot use a mock web environment' },
    ],
    correctOptionIds: ['a'],
    explanation:
      '@SpringBootTest starts the Boot context. webEnvironment can be MOCK, RANDOM_PORT, DEFINED_PORT, or NONE. It is heavier than a slice such as @WebMvcTest, which loads only the web layer.',
    reference: 'Spring Boot docs — @SpringBootTest',
  },
  {
    category: 'Spring Boot',
    difficulty: 'easy',
    question: 'What is Spring Boot Actuator for?',
    options: [
      { id: 'a', text: 'Operational endpoints such as health and metrics for a running application' },
      { id: 'b', text: 'A UI theme' },
      { id: 'c', text: 'The embedded database engine' },
      { id: 'd', text: 'A replacement for Spring Security' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Actuator exposes operational information over HTTP or JMX. Metrics go through Micrometer. It does not secure the application by itself; Spring Security does that.',
    reference: 'Spring Boot docs — Actuator',
  },
  {
    category: 'Spring Boot',
    difficulty: 'medium',
    question: 'How do you record a custom application metric that Actuator can expose?',
    options: [
      { id: 'a', text: 'Register it on a MeterRegistry, for example by incrementing a counter, then read it from the metrics endpoint' },
      { id: 'b', text: 'Print to System.out, which Actuator scrapes as a metric' },
      { id: 'c', text: 'Add a JSP page named metrics.jsp' },
      { id: 'd', text: 'Subclass DispatcherServlet and store the count in a field' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Micrometer is the metrics facade Boot uses. Inject MeterRegistry and update a counter, timer, or gauge. The actuator metrics endpoint then lists that meter. Logging a line does not create a meter.',
    reference: 'Spring Boot docs — Metrics',
  },
  {
    category: 'Spring Boot',
    difficulty: 'hard',
    type: 'multiple',
    question: 'Which Actuator endpoints can leak secrets or process memory and should not be exposed on the public internet?',
    options: [
      { id: 'a', text: 'env' },
      { id: 'b', text: 'heapdump' },
      { id: 'c', text: 'A health probe used by the orchestrator' },
      { id: 'd', text: 'An info endpoint limited to the application name' },
    ],
    correctOptionIds: ['a', 'b'],
    explanation:
      'env can show configuration, including credentials, and heapdump captures memory. Expose only what you need, protect actuator routes with Spring Security, and leave health available for probes. A minimal info body is not in the same risk class as a heap dump.',
    reference: 'Spring Boot docs — Securing actuator endpoints',
  },
  {
    category: 'Spring Boot',
    difficulty: 'medium',
    question: 'Which points matter when a Spring Boot service runs in a container?',
    options: [
      { id: 'a', text: 'Externalize configuration, let the JVM honor the container memory limit, and use health probes for liveness and readiness' },
      { id: 'b', text: 'Bake passwords into the image and ignore the container memory limit' },
      { id: 'c', text: 'A container cannot run an executable Boot jar' },
      { id: 'd', text: 'Actuator health cannot be used as a probe' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Pass configuration with the environment, for example SPRING_PROFILES_ACTIVE, instead of baking secrets into the image. Current JDKs observe container memory limits. Actuator liveness and readiness probes tell the orchestrator when to restart or send traffic.',
    reference: 'Spring Boot docs — Containers and probes',
  },
  {
    category: 'Spring Boot',
    difficulty: 'medium',
    type: 'truefalse',
    question: 'When the prod profile is active, a key in application-prod.properties overrides the same key in application.properties.',
    options: [
      { id: 'a', text: 'True' },
      { id: 'b', text: 'False' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Profile-specific files are more specific than the base file. Activate the profile with spring.profiles.active or SPRING_PROFILES_ACTIVE. @Profile beans are registered only when their profile is active. External config can still override both files.',
    reference: 'Spring Boot docs — Profiles',
  },
];

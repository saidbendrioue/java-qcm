// Fullstack senior interview QCM: Java, Spring, REST, JS/TS, SQL, Git, architecture.

const jls = 'Java Language Specification';
const springRef = 'Spring Framework Reference Documentation';
const bootRef = 'Spring Boot Reference Documentation';
const jpaRef = 'Jakarta Persistence Specification / Hibernate ORM User Guide';
const mdn = 'MDN Web Docs';
const tsHandbook = 'TypeScript Handbook';
const sqlStd = 'SQL standard — JOIN and GROUP BY';
const gitDoc = 'Git Documentation';
const kafkaDoc = 'Apache Kafka Documentation';
const owasp = 'OWASP Dependency-Check / Software Composition Analysis';

export const fullstackInterviewQuestions = [
  {
    category: 'Types and OOP',
    difficulty: 'easy',
    question: 'What is the difference between == and equals() in Java?',
    options: [
      { id: 'a', text: 'Both always compare object contents' },
      {
        id: 'b',
        text: '== compares references for objects, while equals() compares logical equality when correctly overridden',
      },
      { id: 'c', text: 'equals() compares memory addresses' },
      { id: 'd', text: '== automatically calls equals()' },
    ],
    correctOptionIds: ['b'],
    explanation:
      '== checks whether two references point to the same object. equals() compares content or logical identity according to its implementation.',
    reference: `${jls} — Reference Equality Operators (§15.21.3) and Object.equals`,
  },
  {
    category: 'Design Principles',
    difficulty: 'easy',
    question: 'What does the DRY principle mean?',
    options: [
      { id: 'a', text: "Don't Repeat Yourself" },
      { id: 'b', text: 'Do Repeat Yourself' },
      { id: 'c', text: "Don't Reuse Yourself" },
      { id: 'd', text: 'Develop Reusable Yearly' },
    ],
    correctOptionIds: ['a'],
    explanation: 'Avoid duplicating logic or knowledge in the codebase.',
    reference: 'The Pragmatic Programmer — DRY',
  },
  {
    category: 'Design Principles',
    difficulty: 'easy',
    question: 'Which principle does KISS correspond to?',
    options: [
      { id: 'a', text: 'Keep Interfaces Small and Secure' },
      { id: 'b', text: 'Keep It Simple, Stupid' },
      { id: 'c', text: 'Keep Implementation Strict and Safe' },
      { id: 'd', text: 'Keep Inheritance Simple and Short' },
    ],
    correctOptionIds: ['b'],
    explanation: 'Prefer simple solutions over unnecessary complexity.',
    reference: 'Software engineering — KISS principle',
  },
  {
    category: 'Design Principles',
    difficulty: 'easy',
    question: 'What does YAGNI mean?',
    options: [
      { id: 'a', text: 'You Are Going To Need It' },
      { id: 'b', text: "You Aren't Gonna Need It" },
      { id: 'c', text: 'Your Application Gets New Interfaces' },
      { id: 'd', text: 'You Always Generate New Instances' },
    ],
    correctOptionIds: ['b'],
    explanation: 'Do not build a feature until it is actually needed.',
    reference: 'Extreme Programming — YAGNI',
  },
  {
    category: 'Types and OOP',
    difficulty: 'medium',
    question: 'What is the difference between an abstract class and an interface?',
    options: [
      { id: 'a', text: 'An interface may have constructors' },
      { id: 'b', text: 'An abstract class may contain only abstract methods' },
      {
        id: 'c',
        text: 'A class may extend only one abstract class, but implement several interfaces',
      },
      { id: 'd', text: 'An interface can never contain methods with an implementation' },
    ],
    correctOptionIds: ['c'],
    explanation:
      'Java allows single class inheritance and multiple interface implementation. An abstract class may hold fields, constructors, and concrete methods.',
    reference: `${jls} — Classes (§8) and Interfaces (§9)`,
  },
  {
    category: 'Types and OOP',
    difficulty: 'hard',
    question:
      'A class implements two interfaces that each declare a default method with the same signature. What happens?',
    options: [
      { id: 'a', text: 'Java automatically picks the first interface' },
      { id: 'b', text: 'Java automatically picks the last interface' },
      {
        id: 'c',
        text: 'A compilation error occurs if the class does not override the method',
      },
      { id: 'd', text: 'Both interface methods run automatically' },
    ],
    correctOptionIds: ['c'],
    explanation:
      'The conflict must be resolved explicitly, for example by overriding and calling A.super.method() and/or B.super.method().',
    reference: `${jls} — Inheritance of default methods (§9.4.1)`,
  },
  {
    category: 'Spring',
    difficulty: 'medium',
    question:
      'Which annotation explicitly selects one Spring bean when several implementations exist?',
    options: [
      { id: 'a', text: '@Primary' },
      { id: 'b', text: '@Qualifier' },
      { id: 'c', text: '@Component' },
      { id: 'd', text: '@Autowired' },
    ],
    correctOptionIds: ['b'],
    explanation:
      '@Qualifier names the bean to inject. @Primary marks the default preferred bean when no qualifier is given.',
    reference: `${springRef} — Qualifier and Primary`,
  },
  {
    category: 'Spring',
    difficulty: 'medium',
    question: 'What does IoC (Inversion of Control) mean?',
    options: [
      { id: 'a', text: 'The class creates all of its own dependencies' },
      {
        id: 'b',
        text: 'Creation and management of objects is delegated to the Spring container',
      },
      { id: 'c', text: 'Spring removes every dependency between classes' },
      { id: 'd', text: 'Objects must be static' },
    ],
    correctOptionIds: ['b'],
    explanation:
      'The framework handles creation, configuration, and the lifecycle of beans.',
    reference: `${springRef} — The IoC Container`,
  },
  {
    category: 'Spring',
    difficulty: 'medium',
    question: 'What are the main dependency injection styles in Spring?',
    options: [
      { id: 'a', text: 'Constructor, Setter, and Field injection' },
      { id: 'b', text: 'Static, Dynamic, and Runtime injection' },
      { id: 'c', text: 'Public, Private, and Protected injection' },
      { id: 'd', text: 'Singleton, Prototype, and Request injection' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Constructor injection is generally preferred: required dependencies are explicit and easier to test.',
    reference: `${springRef} — Dependency Injection`,
  },
  {
    category: 'Design Principles',
    difficulty: 'medium',
    question: 'Which statement matches a SOLID principle?',
    options: [
      { id: 'a', text: 'A class must have exactly one method' },
      { id: 'b', text: 'A class should have a single main responsibility' },
      { id: 'c', text: 'Every class must extend an abstract class' },
      { id: 'd', text: 'Interfaces must contain every implementation' },
    ],
    correctOptionIds: ['b'],
    explanation:
      'That is the Single Responsibility Principle (SRP). SOLID groups five object-oriented design principles.',
    reference: 'Robert C. Martin — SOLID principles',
  },
  {
    category: 'Hibernate',
    difficulty: 'hard',
    question: 'What is the N+1 problem with JPA/Hibernate?',
    options: [
      { id: 'a', text: 'A SQL query that runs only once' },
      {
        id: 'b',
        text: 'One main query followed by N extra queries to load relations',
      },
      { id: 'c', text: 'A database connection error' },
      { id: 'd', text: 'A distributed transaction failure' },
    ],
    correctOptionIds: ['b'],
    explanation:
      'For example, loading 100 orders in one query, then Hibernate runs 100 more queries for their customers. Mitigations include JOIN FETCH, @EntityGraph, DTO projections, and batch fetching.',
    reference: `${jpaRef} — Fetching strategies and N+1`,
  },
  {
    category: 'Spring',
    difficulty: 'medium',
    question: 'What does the @Transactional annotation do?',
    options: [
      { id: 'a', text: 'It automatically guarantees a distributed transaction' },
      {
        id: 'b',
        text: 'It runs a method inside a transactional context',
      },
      { id: 'c', text: 'It speeds up every SQL query' },
      { id: 'd', text: 'It prevents every exception' },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Spring opens, commits, or rolls back a transaction based on the outcome and rollback rules. By default, rollback applies to RuntimeException and Error, not to every checked exception.',
    reference: `${springRef} — Declarative transaction management`,
  },
  {
    category: 'Spring Boot',
    difficulty: 'medium',
    question: 'What is the main role of Spring Data JPA?',
    options: [
      { id: 'a', text: 'To replace Hibernate mandatorily' },
      {
        id: 'b',
        text: 'To simplify data access with repositories and abstractions',
      },
      { id: 'c', text: 'To replace the SQL server' },
      { id: 'd', text: 'To manage only transactions' },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Spring Data JPA lets you declare repositories with methods such as findByEmail() or findAll() without writing every query by hand.',
    reference: 'Spring Data JPA Reference Documentation',
  },
  {
    category: 'Modern Java',
    difficulty: 'medium',
    question: 'Which statement about sealed classes introduced in Java 17 is correct?',
    options: [
      { id: 'a', text: 'They forbid every form of inheritance' },
      {
        id: 'b',
        text: 'They let you control which classes may extend them or which interfaces may implement them',
      },
      { id: 'c', text: 'They replace interfaces' },
      { id: 'd', text: 'They must be abstract' },
    ],
    correctOptionIds: ['b'],
    explanation:
      'A sealed type lists permitted subtypes. Those subtypes must be final, sealed, or non-sealed.',
    reference: `${jls} — Sealed Classes (§8.1.1.2)`,
  },
  {
    category: 'Modern Java',
    difficulty: 'hard',
    question:
      'Why use a sealed interface rather than an enum to represent statuses?',
    options: [
      { id: 'a', text: 'Because a sealed interface uses less memory' },
      {
        id: 'b',
        text: 'Because it can model variants that each carry different data and behavior',
      },
      { id: 'c', text: 'Because an enum cannot have methods' },
      {
        id: 'd',
        text: 'Because a sealed interface allows multiple class inheritance',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'An enum fits simple value sets. A sealed interface is useful when each status is a distinct domain type with its own fields and behavior.',
    reference: `${jls} — Sealed Interfaces and Enums`,
  },
  {
    category: 'Spring',
    difficulty: 'hard',
    question: `What is the @Transactional behavior in this case?

@Transactional
public void process() {
    try {
        operation();
    } catch (RuntimeException e) {
        log.error("Error", e);
    }
}`,
    options: [
      { id: 'a', text: 'The transaction is always rolled back' },
      {
        id: 'b',
        text: 'The transaction may still commit despite the caught error',
      },
      {
        id: 'c',
        text: 'Spring always rolls back when an exception is thrown, even if it is caught',
      },
      { id: 'd', text: 'The code does not compile' },
    ],
    correctOptionIds: ['b'],
    explanation:
      'If the exception is caught and the transaction is not marked rollback-only, Spring may commit.',
    reference: `${springRef} — @Transactional rollback rules`,
  },
  {
    category: 'HTTP and REST',
    difficulty: 'easy',
    question: 'Which HTTP status normally means a resource was created successfully?',
    options: [
      { id: 'a', text: '200 OK' },
      { id: 'b', text: '201 Created' },
      { id: 'c', text: '204 No Content' },
      { id: 'd', text: '301 Moved Permanently' },
    ],
    correctOptionIds: ['b'],
    explanation: '201 Created fits a successful creation, typically via POST.',
    reference: 'RFC 9110 — HTTP Semantics',
  },
  {
    category: 'HTTP and REST',
    difficulty: 'easy',
    question: 'What does HTTP status 404 mean?',
    options: [
      { id: 'a', text: 'A server error' },
      { id: 'b', text: 'A resource was not found' },
      { id: 'c', text: 'A data conflict' },
      { id: 'd', text: 'Authentication was refused' },
    ],
    correctOptionIds: ['b'],
    explanation: '404 Not Found means the target resource does not exist or is not available at that URI.',
    reference: 'RFC 9110 — 404 Not Found',
  },
  {
    category: 'HTTP and REST',
    difficulty: 'medium',
    question: 'When is HTTP status 409 typically used?',
    options: [
      { id: 'a', text: 'When the user is not authenticated' },
      { id: 'b', text: 'When the requested resource does not exist' },
      {
        id: 'c',
        text: 'When a request conflicts with the current state of the resource',
      },
      { id: 'd', text: 'When a request completes successfully' },
    ],
    correctOptionIds: ['c'],
    explanation:
      'Example: creating a user with an email that already exists, when that situation is treated as a business conflict.',
    reference: 'RFC 9110 — 409 Conflict',
  },
  {
    category: 'HTTP and REST',
    difficulty: 'medium',
    question:
      'Which HTTP status corresponds to a successful request with no response body?',
    options: [
      { id: 'a', text: '201' },
      { id: 'b', text: '204' },
      { id: 'c', text: '409' },
      { id: 'd', text: '500' },
    ],
    correctOptionIds: ['b'],
    explanation:
      '204 No Content means success without a response body. A successful GET usually returns 200 with content, or 404 if the resource is missing.',
    reference: 'RFC 9110 — 204 No Content',
  },
  {
    category: 'JavaScript and TypeScript',
    difficulty: 'easy',
    question: 'What is the difference between == and === in JavaScript?',
    options: [
      { id: 'a', text: 'There is no difference' },
      {
        id: 'b',
        text: '== may coerce types, while === compares without implicit conversion',
      },
      { id: 'c', text: '=== compares only references' },
      { id: 'd', text: '== is stricter than ===' },
    ],
    correctOptionIds: ['b'],
    explanation: '5 == "5" is true, while 5 === "5" is false.',
    reference: `${mdn} — Equality comparisons`,
  },
  {
    category: 'JavaScript and TypeScript',
    difficulty: 'medium',
    question: 'Which statement about var, let, and const is correct?',
    options: [
      { id: 'a', text: 'var has block scope' },
      { id: 'b', text: 'let and const have block scope' },
      {
        id: 'c',
        text: 'const prevents any mutation of an object’s properties',
      },
      { id: 'd', text: 'var cannot be redeclared' },
    ],
    correctOptionIds: ['b'],
    explanation:
      'var is function-scoped or global. let and const are block-scoped. const forbids reassignment, not mutation of object properties.',
    reference: `${mdn} — let, const, and var`,
  },
  {
    category: 'JavaScript and TypeScript',
    difficulty: 'medium',
    question: 'What is the role of the Event Loop in JavaScript?',
    options: [
      {
        id: 'a',
        text: 'Run every operation simultaneously on several JavaScript threads',
      },
      {
        id: 'b',
        text: 'Coordinate execution of callbacks and asynchronous tasks',
      },
      { id: 'c', text: 'Replace Promises' },
      {
        id: 'd',
        text: 'Block the main thread during HTTP requests',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'The Event Loop coordinates the call stack, microtasks (Promises), and macrotasks (timers, events, and similar).',
    reference: `${mdn} — Event loop and concurrency model`,
  },
  {
    category: 'JavaScript and TypeScript',
    difficulty: 'hard',
    question: 'What is the difference between any, unknown, and never in TypeScript?',
    options: [
      { id: 'a', text: 'They behave exactly the same' },
      {
        id: 'b',
        text: 'any disables checks, unknown requires a check before use, never represents a value that can never exist',
      },
      { id: 'c', text: 'unknown is identical to never' },
      { id: 'd', text: 'never accepts every type' },
    ],
    correctOptionIds: ['b'],
    explanation:
      'any maximizes freedom and minimizes safety. unknown is an unknown type that needs narrowing. never means no value is possible, for example in functions that never return.',
    reference: `${tsHandbook} — any, unknown, and never`,
  },
  {
    category: 'SQL',
    difficulty: 'medium',
    question: 'What is the difference between INNER JOIN and LEFT JOIN?',
    options: [
      { id: 'a', text: 'They always produce the same results' },
      {
        id: 'b',
        text: 'INNER JOIN returns matching rows; LEFT JOIN keeps every row from the left table',
      },
      { id: 'c', text: 'LEFT JOIN returns only unmatched rows' },
      {
        id: 'd',
        text: 'INNER JOIN keeps every row from the left table',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'With LEFT JOIN, columns from the right table are NULL when no match exists.',
    reference: sqlStd,
  },
  {
    category: 'SQL',
    difficulty: 'medium',
    question: 'What is the difference between WHERE and HAVING?',
    options: [
      { id: 'a', text: 'WHERE filters after GROUP BY; HAVING filters before' },
      {
        id: 'b',
        text: 'WHERE filters rows before aggregation; HAVING filters groups after aggregation',
      },
      { id: 'c', text: 'They are identical' },
      { id: 'd', text: 'HAVING works only with ORDER BY' },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Example: WHERE active = true filters rows first; HAVING COUNT(*) > 5 filters departments after GROUP BY.',
    reference: sqlStd,
  },
  {
    category: 'Git',
    difficulty: 'medium',
    question: 'What is the difference between Git merge and Git rebase?',
    options: [
      { id: 'a', text: 'Merge deletes commits; rebase keeps them' },
      {
        id: 'b',
        text: 'Merge integrates a branch while generally preserving branch history; rebase replays commits onto a new base',
      },
      { id: 'c', text: 'They are strictly identical' },
      {
        id: 'd',
        text: 'Rebase always merges two branches without conflicts',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Merge preserves history topology; rebase often produces a linear history. Avoid rebasing commits already shared without coordination.',
    reference: `${gitDoc} — git-merge and git-rebase`,
  },
  {
    category: 'Git',
    difficulty: 'hard',
    question: 'How do you squash the last 6 commits into one commit?',
    options: [
      { id: 'a', text: 'git merge HEAD~6' },
      { id: 'b', text: 'git rebase -i HEAD~6' },
      { id: 'c', text: 'git reset --hard HEAD~6' },
      { id: 'd', text: 'git pull --squash' },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Interactive rebase opens an editor: keep pick on the first commit and change the next five to squash (or s) to combine all six.',
    reference: `${gitDoc} — Interactive rebase`,
  },
  {
    category: 'Streams',
    difficulty: 'medium',
    question: 'What is the difference between map() and flatMap()?',
    options: [
      { id: 'a', text: 'map() filters elements; flatMap() sorts them' },
      {
        id: 'b',
        text: 'map() transforms each element; flatMap() transforms and flattens the results',
      },
      { id: 'c', text: 'They are identical' },
      {
        id: 'd',
        text: 'flatMap() works only with lists of integers',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Streaming List.of(List.of("Ali","Sara"), List.of("Amine","Yassine")).flatMap(List::stream) yields one list of four names.',
    reference: 'java.util.stream.Stream — map and flatMap',
  },
  {
    category: 'Collections',
    difficulty: 'medium',
    question: 'How does a HashMap find a value from a key?',
    options: [
      { id: 'a', text: 'It always scans every entry' },
      {
        id: 'b',
        text: 'It uses hashCode() to choose a bucket, then equals() to identify the matching key',
      },
      { id: 'c', text: 'It uses equals() only' },
      {
        id: 'd',
        text: 'It uses only the object’s memory address',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'HashMap locates a bucket from the key hash, then compares keys when collisions occur.',
    reference: 'java.util.HashMap',
  },
  {
    category: 'Streams',
    difficulty: 'medium',
    question:
      'What is the difference between an intermediate and a terminal operation on a Java Stream?',
    options: [
      {
        id: 'a',
        text: 'An intermediate operation immediately triggers processing',
      },
      { id: 'b', text: 'A terminal operation always returns a Stream' },
      {
        id: 'c',
        text: 'An intermediate operation usually returns a Stream; a terminal operation triggers pipeline execution',
      },
      { id: 'd', text: 'There is no difference' },
    ],
    correctOptionIds: ['c'],
    explanation:
      'Intermediate examples: filter(), map(), sorted(). Terminal examples: collect(), toList(), count(), forEach().',
    reference: 'java.util.stream package summary',
  },
  {
    category: 'Modern Java',
    difficulty: 'medium',
    question: 'What is the main advantage of a record in Java 17?',
    options: [
      { id: 'a', text: 'It creates abstract classes' },
      {
        id: 'b',
        text: 'It simplifies classes mainly intended to carry data',
      },
      { id: 'c', text: 'It enables multiple inheritance' },
      { id: 'd', text: 'It replaces every Lombok class' },
    ],
    correctOptionIds: ['b'],
    explanation:
      'public record User(Long id, String name) {} gets a canonical constructor, accessors, equals(), hashCode(), and toString() generated by the language.',
    reference: `${jls} — Record Classes (§8.10)`,
  },
  {
    category: 'Modern Java',
    difficulty: 'medium',
    question: 'What is the difference between a record and Lombok?',
    options: [
      { id: 'a', text: 'Lombok is a native Java language feature' },
      {
        id: 'b',
        text: 'A record is a Java language feature; Lombok mainly uses annotations and compile-time processing to generate code',
      },
      { id: 'c', text: 'A record allows inheritance from several classes' },
      { id: 'd', text: 'Lombok mandatorily replaces records' },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Records suit shallowly immutable data carriers. Lombok can generate code for several kinds of classes.',
    reference: `${jls} — Record Classes; Project Lombok documentation`,
  },
  {
    category: 'Concurrency',
    difficulty: 'hard',
    question: 'What is the main goal of virtual threads introduced in Java 21?',
    options: [
      { id: 'a', text: 'Automatically raise CPU frequency' },
      {
        id: 'b',
        text: 'Make it easier to run many concurrent tasks, especially blocking ones, at a lower cost than platform threads',
      },
      { id: 'c', text: 'Replace threads with OS processes' },
      {
        id: 'd',
        text: 'Automatically speed up CPU-bound computations',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Virtual threads scale well for many concurrent tasks, especially blocking I/O. They do not automatically make CPU-heavy work faster.',
    reference: 'JEP 444 — Virtual Threads',
  },
  {
    category: 'Kafka',
    difficulty: 'medium',
    question: 'What is the main role of Apache Kafka?',
    options: [
      { id: 'a', text: 'Replace a relational database' },
      {
        id: 'b',
        text: 'Provide a distributed event-streaming platform',
      },
      { id: 'c', text: 'Manage Maven dependencies' },
      { id: 'd', text: 'Replace Spring Security' },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Kafka lets you publish, store, and consume events in a distributed way.',
    reference: `${kafkaDoc} — Introduction`,
  },
  {
    category: 'Kafka',
    difficulty: 'medium',
    question: 'In Kafka, what is a consumer group for?',
    options: [
      { id: 'a', text: 'Automatically deleting consumed messages' },
      {
        id: 'b',
        text: 'Sharing partition consumption among several consumers in the same group',
      },
      { id: 'c', text: 'Merging several topics' },
      {
        id: 'd',
        text: 'Preventing several applications from reading a topic',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Within one group, a partition is assigned to only one consumer at a time. Separate groups can read the same topic independently.',
    reference: `${kafkaDoc} — Consumers and consumer groups`,
  },
  {
    category: 'Architecture',
    difficulty: 'medium',
    question: 'What is the main goal of hexagonal architecture?',
    options: [
      { id: 'a', text: 'Remove databases' },
      {
        id: 'b',
        text: 'Isolate the domain from infrastructure and external technologies',
      },
      { id: 'c', text: 'Replace microservices' },
      {
        id: 'd',
        text: 'Put all business logic in REST controllers',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'The domain sits at the center, with ports and adapters around it.',
    reference: 'Alistair Cockburn — Hexagonal Architecture',
  },
  {
    category: 'Architecture',
    difficulty: 'medium',
    question: 'In hexagonal architecture, how do you test the domain?',
    options: [
      { id: 'a', text: 'Only with a real database' },
      {
        id: 'b',
        text: 'With unit tests independent of infrastructure, exercising domain objects and rules directly',
      },
      { id: 'c', text: 'Only with Selenium tests' },
      {
        id: 'd',
        text: 'By always starting the full Spring Boot application',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'The domain should be testable without Spring, JPA, Kafka, or external APIs.',
    reference: 'Alistair Cockburn — Hexagonal Architecture',
  },
  {
    category: 'Security',
    difficulty: 'medium',
    question: 'How do you detect a security flaw in a Java dependency?',
    options: [
      { id: 'a', text: 'Only by reading application logs' },
      {
        id: 'b',
        text: 'By using SCA tools such as OWASP Dependency-Check, Snyk, or GitLab Dependency Scanning',
      },
      { id: 'c', text: 'By deleting every Maven dependency' },
      { id: 'd', text: 'By using JUnit only' },
    ],
    correctOptionIds: ['b'],
    explanation:
      'These tools analyze dependency versions for known vulnerabilities (CVEs). Keep dependencies updated and review the alerts.',
    reference: owasp,
  },
  {
    category: 'Testing',
    difficulty: 'medium',
    question: 'Which representation matches the testing pyramid?',
    options: [
      { id: 'a', text: 'Many E2E tests, few unit tests' },
      {
        id: 'b',
        text: 'Many unit tests, fewer integration tests, and even fewer E2E tests',
      },
      { id: 'c', text: 'Only integration tests' },
      {
        id: 'd',
        text: 'Equal numbers of every kind of test',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Unit tests are fast, numerous, and isolated. Integration tests check component collaboration. E2E tests cover full journeys and are costlier, so they are usually fewer.',
    reference: 'Mike Cohn — Test Pyramid',
  },
];

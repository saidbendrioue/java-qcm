// Fullstack senior interview QCM: Java, Spring, REST, JS/TS, SQL, Git, architecture.
// Distractors are intentional misconceptions, not joke/impossible answers.

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
    question: 'What is the difference between == and equals() for reference types in Java?',
    options: [
      {
        id: 'a',
        text: '== compares field-by-field content; equals() always compares object identity',
      },
      {
        id: 'b',
        text: '== compares reference identity; equals() compares logical equality when overridden, otherwise it also uses identity',
      },
      {
        id: 'c',
        text: '== and equals() are aliases; the compiler rewrites == into equals()',
      },
      {
        id: 'd',
        text: 'equals() compares identity; == compares hashCode() values',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'For references, == tests whether both sides point to the same object. Object.equals defaults to identity; subclasses may override it for value equality. Autoboxed primitives are a separate case for ==.',
    reference: `${jls} — Reference Equality Operators (§15.21.3) and Object.equals`,
  },
  {
    category: 'Design Principles',
    difficulty: 'medium',
    question:
      'Three services copy the same email-format validation. Applying DRY correctly usually means which approach?',
    options: [
      {
        id: 'a',
        text: 'Leave the three copies so each team can evolve validation independently without coordination',
      },
      {
        id: 'b',
        text: 'Extract one shared validation rule (function, validator, or policy) and reuse it where the same rule applies',
      },
      {
        id: 'c',
        text: 'Merge the three services into a single class so duplication becomes impossible',
      },
      {
        id: 'd',
        text: 'Generate the validation with reflection at runtime so source code never repeats the rule',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'DRY targets duplicated knowledge. Shared rules belong in one place. Blind merging of services or reflection for its own sake is not what DRY asks for.',
    reference: 'The Pragmatic Programmer — DRY',
  },
  {
    category: 'Design Principles',
    difficulty: 'medium',
    question:
      'A feature can be delivered with a straightforward service method, or with a plugin framework, three strategies, and a custom DSL “for later”. KISS favors which choice?',
    options: [
      {
        id: 'a',
        text: 'Ship the plugin framework first so future variants cost nothing',
      },
      {
        id: 'b',
        text: 'Prefer the simple service method until real requirements justify more structure',
      },
      {
        id: 'c',
        text: 'Always introduce the DSL because configuration files are simpler than code',
      },
      {
        id: 'd',
        text: 'Duplicate the logic in every caller so there is no shared abstraction to misunderstand',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'KISS prefers the simplest solution that works. Speculative extensibility often adds cost before any need appears.',
    reference: 'Software engineering — KISS principle',
  },
  {
    category: 'Design Principles',
    difficulty: 'medium',
    question:
      'Product asks for “maybe later” export formats. YAGNI suggests which implementation strategy now?',
    options: [
      {
        id: 'a',
        text: 'Implement every imagined export format behind unused strategy classes',
      },
      {
        id: 'b',
        text: 'Build only the formats required today; add others when a concrete need arrives',
      },
      {
        id: 'c',
        text: 'Create abstract factories for all formats but leave method bodies empty',
      },
      {
        id: 'd',
        text: 'Hard-code CSV only and forbid any future extension points forever',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'YAGNI means do not build speculative features. Keep the design open enough to extend later, without paying for unused formats now.',
    reference: 'Extreme Programming — YAGNI',
  },
  {
    category: 'Types and OOP',
    difficulty: 'medium',
    question: 'Which statement correctly contrasts an abstract class and an interface in modern Java?',
    options: [
      {
        id: 'a',
        text: 'An interface may declare constructors and instance fields like a class',
      },
      {
        id: 'b',
        text: 'An abstract class can hold state and constructors; a class extends at most one class but may implement many interfaces',
      },
      {
        id: 'c',
        text: 'Interfaces cannot declare default or static methods since Java 8',
      },
      {
        id: 'd',
        text: 'A class may extend several abstract classes if each is package-private',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Single class inheritance remains. Interfaces may have default/static/private methods but not instance fields or constructors in the class sense.',
    reference: `${jls} — Classes (§8) and Interfaces (§9)`,
  },
  {
    category: 'Types and OOP',
    difficulty: 'hard',
    question:
      'Class C implements interfaces A and B that both declare default void run(). What must be true for C to compile?',
    options: [
      {
        id: 'a',
        text: 'The compiler picks A’s default because A is listed first in implements',
      },
      {
        id: 'b',
        text: 'C must override run() and may call A.super.run() and/or B.super.run()',
      },
      {
        id: 'c',
        text: 'Both defaults run in declaration order unless C is final',
      },
      {
        id: 'd',
        text: 'C compiles only if one of the defaults is marked abstract',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Conflicting defaults make C abstract unless it provides an override that resolves the conflict explicitly.',
    reference: `${jls} — Inheritance of default methods (§9.4.1)`,
  },
  {
    category: 'Spring',
    difficulty: 'medium',
    question:
      'Two beans implement PaymentGateway. You need CardGateway in one constructor and WalletGateway in another. Which approach is correct?',
    options: [
      {
        id: 'a',
        text: 'Mark both beans @Primary so Spring injects both implementations into every constructor',
      },
      {
        id: 'b',
        text: 'Use @Qualifier (or equivalent qualifier annotations) on the injection points that need a specific bean',
      },
      {
        id: 'c',
        text: 'Replace @Autowired with @Inject; type ambiguity then disappears automatically',
      },
      {
        id: 'd',
        text: 'Annotate only the field with @Component; constructors cannot select among candidates',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      '@Qualifier disambiguates by bean name or custom qualifier. @Primary chooses a default when no qualifier is present, not per-injection selection of two different beans.',
    reference: `${springRef} — Qualifier and Primary`,
  },
  {
    category: 'Spring',
    difficulty: 'medium',
    question: 'In Spring, Inversion of Control primarily means which of the following?',
    options: [
      {
        id: 'a',
        text: 'Business methods must never call other classes; only the container may invoke code',
      },
      {
        id: 'b',
        text: 'Object creation, wiring, and lifecycle are delegated to the container instead of ad-hoc new in collaborators',
      },
      {
        id: 'c',
        text: 'All dependencies become static fields so no object graph exists',
      },
      {
        id: 'd',
        text: 'Checked exceptions are converted into unchecked ones by the JVM',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'IoC inverts who constructs and wires collaborators. Application code still calls collaborators; it does not construct the whole graph itself.',
    reference: `${springRef} — The IoC Container`,
  },
  {
    category: 'Spring',
    difficulty: 'medium',
    question:
      'Which statement about Spring dependency injection styles is accurate for production services?',
    options: [
      {
        id: 'a',
        text: 'Constructor, setter, and field injection are all supported; constructor injection is preferred for required dependencies',
      },
      {
        id: 'b',
        text: 'Only field injection is supported when using Spring Boot 3',
      },
      {
        id: 'c',
        text: 'Setter injection is required for singleton beans; constructors work only for prototypes',
      },
      {
        id: 'd',
        text: 'Injection styles are the same thing as bean scopes (singleton, prototype, request)',
      },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Injection style and scope are orthogonal. Constructor injection makes required deps immutable and testable; field injection hides them and complicates tests.',
    reference: `${springRef} — Dependency Injection`,
  },
  {
    category: 'Design Principles',
    difficulty: 'medium',
    question:
      'A ReportService loads data, renders PDF, and sends email. Which SOLID observation is most accurate?',
    options: [
      {
        id: 'a',
        text: 'It violates SRP because it mixes several reasons to change: data access, rendering, and delivery',
      },
      {
        id: 'b',
        text: 'It satisfies SRP because it has only one public method',
      },
      {
        id: 'c',
        text: 'SOLID forbids services larger than 50 lines, regardless of responsibilities',
      },
      {
        id: 'd',
        text: 'It violates LSP because it does not extend an abstract class',
      },
    ],
    correctOptionIds: ['a'],
    explanation:
      'SRP is about reasons to change, not method count. PDF rendering and email transport usually change for different causes than report queries.',
    reference: 'Robert C. Martin — SOLID principles',
  },
  {
    category: 'Hibernate',
    difficulty: 'hard',
    question:
      'You load 50 Order entities, then touch order.getCustomer() in a loop and see 51 SQL selects. What is happening?',
    options: [
      {
        id: 'a',
        text: 'Hibernate batch-inserts customers; the extra selects are rollbacks',
      },
      {
        id: 'b',
        text: 'An N+1 fetch: one query for orders, then one query per lazy customer association',
      },
      {
        id: 'c',
        text: 'Second-level cache invalidation always issues one select per entity id',
      },
      {
        id: 'd',
        text: 'JOIN FETCH was applied, so Hibernate must re-select each association to verify consistency',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Classic N+1. Mitigate with JOIN FETCH, @EntityGraph, DTO projections, or batch fetching — not by “verifying” after JOIN FETCH.',
    reference: `${jpaRef} — Fetching strategies and N+1`,
  },
  {
    category: 'Spring',
    difficulty: 'medium',
    question: 'What does declaring @Transactional on a Spring-managed public method primarily enable?',
    options: [
      {
        id: 'a',
        text: 'A distributed XA transaction across every DataSource on the classpath',
      },
      {
        id: 'b',
        text: 'A transactional boundary: begin around the call, then commit or roll back according to the outcome and rollback rules',
      },
      {
        id: 'c',
        text: 'Automatic query rewriting that removes all locks from SQL',
      },
      {
        id: 'd',
        text: 'Suppression of every exception thrown by the method body',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Declarative transactions wrap the method via a proxy/advisor. Default rollback is for RuntimeException and Error, not for every checked exception, and XA is not automatic.',
    reference: `${springRef} — Declarative transaction management`,
  },
  {
    category: 'Spring Boot',
    difficulty: 'medium',
    question: 'What does Spring Data JPA primarily provide?',
    options: [
      {
        id: 'a',
        text: 'A mandatory replacement for Hibernate that forbids EntityManager',
      },
      {
        id: 'b',
        text: 'Repository abstractions and query derivation (and custom queries) on top of a JPA provider',
      },
      {
        id: 'c',
        text: 'An embedded SQL database engine shipped inside spring-data-jpa.jar',
      },
      {
        id: 'd',
        text: 'Only transaction demarcation; repositories must still be handwritten JDBC',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Spring Data JPA sits on JPA (often Hibernate). It reduces boilerplate with repositories such as findByEmail, while still allowing @Query and EntityManager when needed.',
    reference: 'Spring Data JPA Reference Documentation',
  },
  {
    category: 'Modern Java',
    difficulty: 'medium',
    question: 'Which statement about sealed types (Java 17+) is correct?',
    options: [
      {
        id: 'a',
        text: 'sealed forbids inheritance entirely; no subtype may exist',
      },
      {
        id: 'b',
        text: 'A sealed type lists permitted subtypes; each must be final, sealed, or non-sealed',
      },
      {
        id: 'c',
        text: 'Only interfaces may be sealed; classes cannot',
      },
      {
        id: 'd',
        text: 'Permitted subtypes may live in any module without being named in permits',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Sealing restricts the hierarchy to an explicit set of subtypes with controlled extensibility.',
    reference: `${jls} — Sealed Classes (§8.1.1.2)`,
  },
  {
    category: 'Modern Java',
    difficulty: 'hard',
    question:
      'When is a sealed interface a better model than an enum for “payment outcomes”?',
    options: [
      {
        id: 'a',
        text: 'When every outcome is a simple label with no distinct payload',
      },
      {
        id: 'b',
        text: 'When variants need different fields and behavior (for example CardSuccess(authCode) vs Failed(reason))',
      },
      {
        id: 'c',
        text: 'When you need multiple class inheritance of concrete parents',
      },
      {
        id: 'd',
        text: 'When enums are forbidden from declaring methods',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Enums excel at fixed labels. Sealed hierarchies model algebraic variants with different state. Enums can have methods; that is not the deciding factor.',
    reference: `${jls} — Sealed Interfaces and Enums`,
  },
  {
    category: 'Spring',
    difficulty: 'hard',
    question: `A service method is annotated @Transactional and contains:

try {
    operation();
} catch (RuntimeException e) {
    log.error("Error", e);
}

If operation() throws a RuntimeException that is caught, what typically happens to the transaction?`,
    options: [
      {
        id: 'a',
        text: 'Spring always marks rollback-only as soon as any RuntimeException is constructed',
      },
      {
        id: 'b',
        text: 'The transaction may commit because the exception never escapes the proxy boundary',
      },
      {
        id: 'c',
        text: 'The container must roll back; catching exceptions inside @Transactional is a compile error',
      },
      {
        id: 'd',
        text: 'Hibernate ignores Spring transactions and always commits after each statement',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Default rollback advice reacts to exceptions that propagate out of the transactional method. Swallowing the exception without setRollbackOnly() often leads to a commit of a partial unit of work.',
    reference: `${springRef} — @Transactional rollback rules`,
  },
  {
    category: 'HTTP and REST',
    difficulty: 'easy',
    question:
      'A POST successfully creates a User and returns its representation. Which status is the most appropriate default?',
    options: [
      {
        id: 'a',
        text: '200 OK — creation must never use another status',
      },
      {
        id: 'b',
        text: '201 Created — optionally with a Location header to the new resource',
      },
      {
        id: 'c',
        text: '204 No Content — bodies are forbidden after POST',
      },
      {
        id: 'd',
        text: '202 Accepted — every successful POST is asynchronous by definition',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      '201 Created is the standard success status for resource creation. 200 is sometimes used in the wild but is less precise; 202 means accepted for later processing.',
    reference: 'RFC 9110 — HTTP Semantics',
  },
  {
    category: 'HTTP and REST',
    difficulty: 'easy',
    question:
      'A client calls GET /orders/42 and the order does not exist. Which status should the API return?',
    options: [
      {
        id: 'a',
        text: '400 Bad Request, because any missing id is an invalid request syntax',
      },
      {
        id: 'b',
        text: '404 Not Found, because the target resource is absent',
      },
      {
        id: 'c',
        text: '409 Conflict, because missing data always means a state conflict',
      },
      {
        id: 'd',
        text: '401 Unauthorized, because unknown ids imply failed authentication',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      '404 means the server cannot find a current representation for the target resource. 401/403 are authz issues; 409 is conflict with current state.',
    reference: 'RFC 9110 — 404 Not Found',
  },
  {
    category: 'HTTP and REST',
    difficulty: 'medium',
    question:
      'POST /users fails because email already exists and uniqueness is a business rule. Which status fits best?',
    options: [
      {
        id: 'a',
        text: '401 Unauthorized',
      },
      {
        id: 'b',
        text: '404 Not Found',
      },
      {
        id: 'c',
        text: '409 Conflict (or sometimes 422), signaling the request conflicts with current state / validation',
      },
      {
        id: 'd',
        text: '204 No Content',
      },
    ],
    correctOptionIds: ['c'],
    explanation:
      'Duplicate unique keys are a conflict with existing state. Teams sometimes use 422 for semantic validation; 409 is the classic conflict code. 401/404/204 do not describe this case.',
    reference: 'RFC 9110 — 409 Conflict',
  },
  {
    category: 'HTTP and REST',
    difficulty: 'medium',
    question:
      'Which statement about 204 No Content is correct in REST APIs?',
    options: [
      {
        id: 'a',
        text: '204 means the resource was created and must include a body',
      },
      {
        id: 'b',
        text: '204 means success with an intentionally empty body, often after DELETE or an update with nothing to return',
      },
      {
        id: 'c',
        text: '204 is interchangeable with 404 for missing resources',
      },
      {
        id: 'd',
        text: '204 is reserved for failed authentication challenges',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      '204 is success without a payload. Prefer 200 when returning a body; prefer 404 when the resource is missing.',
    reference: 'RFC 9110 — 204 No Content',
  },
  {
    category: 'JavaScript and TypeScript',
    difficulty: 'easy',
    question: 'In JavaScript, how do == and === differ?',
    options: [
      {
        id: 'a',
        text: 'They are identical; engines treat === as a faster alias of ==',
      },
      {
        id: 'b',
        text: '== may coerce types; === requires the same type and value (with the usual NaN/Object caveats)',
      },
      {
        id: 'c',
        text: '=== compares only object identity; == never does',
      },
      {
        id: 'd',
        text: '== is stricter because it also compares prototypes',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      '5 == "5" is true after coercion; 5 === "5" is false. For objects, both compare identity, but === still rejects cross-type matches.',
    reference: `${mdn} — Equality comparisons`,
  },
  {
    category: 'JavaScript and TypeScript',
    difficulty: 'medium',
    question: 'Which statement about var, let, and const is correct?',
    options: [
      {
        id: 'a',
        text: 'var is block-scoped; let and const are function-scoped',
      },
      {
        id: 'b',
        text: 'let and const are block-scoped; var is function-scoped (or global) and can be redeclared in the same scope',
      },
      {
        id: 'c',
        text: 'const freezes object properties deeply, like Object.freeze on every nested value',
      },
      {
        id: 'd',
        text: 'let bindings may be redeclared in the same block; const may not',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'const prevents reassignment of the binding, not deep immutability. let/const cannot be redeclared in the same block; var can within a function scope.',
    reference: `${mdn} — let, const, and var`,
  },
  {
    category: 'JavaScript and TypeScript',
    difficulty: 'medium',
    question: 'What does the JavaScript event loop primarily do?',
    options: [
      {
        id: 'a',
        text: 'Spawn an OS thread per Promise so callbacks always run in parallel',
      },
      {
        id: 'b',
        text: 'Schedule work between the call stack, microtask queue, and macrotask queue on the JS runtime’s concurrency model',
      },
      {
        id: 'c',
        text: 'Replace Promises with callbacks by rewriting source at parse time',
      },
      {
        id: 'd',
        text: 'Block the main thread until every HTTP response arrives',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'JS runtimes are largely single-threaded for JS execution. The event loop drains microtasks (Promises) and macrotasks (timers, I/O callbacks) when the stack is clear.',
    reference: `${mdn} — Event loop and concurrency model`,
  },
  {
    category: 'JavaScript and TypeScript',
    difficulty: 'hard',
    question: 'How should you choose among any, unknown, and never in TypeScript?',
    options: [
      {
        id: 'a',
        text: 'Prefer any for all external data; unknown and never are deprecated aliases',
      },
      {
        id: 'b',
        text: 'any opts out of checking; unknown forces narrowing before use; never means no value is possible',
      },
      {
        id: 'c',
        text: 'unknown is assignable to every type without checks; never is the top type',
      },
      {
        id: 'd',
        text: 'never is the default type for JSON.parse results',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'unknown is the type-safe counterpart of any. never appears in exhaustive checks and non-returning functions. Prefer unknown over any for untrusted input.',
    reference: `${tsHandbook} — any, unknown, and never`,
  },
  {
    category: 'SQL',
    difficulty: 'medium',
    question: 'How do INNER JOIN and LEFT JOIN differ?',
    options: [
      {
        id: 'a',
        text: 'They are identical if indexes exist on both join keys',
      },
      {
        id: 'b',
        text: 'INNER JOIN keeps only matching pairs; LEFT JOIN keeps all left rows and pads right columns with NULL when unmatched',
      },
      {
        id: 'c',
        text: 'LEFT JOIN returns only the unmatched left rows (anti-join)',
      },
      {
        id: 'd',
        text: 'INNER JOIN always preserves every left row, including non-matches',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Anti-join needs LEFT JOIN … WHERE right.key IS NULL. Plain LEFT JOIN includes both matched and unmatched left rows.',
    reference: sqlStd,
  },
  {
    category: 'SQL',
    difficulty: 'medium',
    question: 'When do you use WHERE versus HAVING?',
    options: [
      {
        id: 'a',
        text: 'WHERE filters groups after aggregation; HAVING filters rows before GROUP BY',
      },
      {
        id: 'b',
        text: 'WHERE filters rows before aggregation; HAVING filters groups after aggregation (for example on COUNT(*))',
      },
      {
        id: 'c',
        text: 'They are synonyms; optimizers rewrite one into the other always',
      },
      {
        id: 'd',
        text: 'HAVING is valid only together with ORDER BY and LIMIT',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Aggregates in HAVING refer to groups. Filtering individual rows belongs in WHERE before GROUP BY.',
    reference: sqlStd,
  },
  {
    category: 'Git',
    difficulty: 'medium',
    question: 'How do merge and rebase differ when integrating a feature branch?',
    options: [
      {
        id: 'a',
        text: 'Merge deletes feature commits; rebase keeps them as blobs only',
      },
      {
        id: 'b',
        text: 'Merge usually creates a merge commit preserving branch topology; rebase replays commits onto a new base for a linear history',
      },
      {
        id: 'c',
        text: 'They produce identical commit graphs and SHA-1s',
      },
      {
        id: 'd',
        text: 'Rebase cannot conflict; merge always can',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Both can conflict. Rebase rewrites commits (new SHAs), so rebasing published history needs coordination.',
    reference: `${gitDoc} — git-merge and git-rebase`,
  },
  {
    category: 'Git',
    difficulty: 'hard',
    question:
      'You want one commit instead of the last six local commits on a private branch. Which command is the usual approach?',
    options: [
      {
        id: 'a',
        text: 'git merge --squash HEAD~6 while staying on the same branch tip',
      },
      {
        id: 'b',
        text: 'git rebase -i HEAD~6, then squash/fix the five newer commits into the oldest',
      },
      {
        id: 'c',
        text: 'git reset --hard HEAD~6, which preserves the working tree changes automatically',
      },
      {
        id: 'd',
        text: 'git pull --rebase=false --squash origin/main without touching local history',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Interactive rebase is the standard squash tool for recent local commits. reset --hard discards commits and working tree; merge --squash is for merging another branch.',
    reference: `${gitDoc} — Interactive rebase`,
  },
  {
    category: 'Streams',
    difficulty: 'medium',
    question: 'What is the practical difference between map and flatMap on a Stream?',
    options: [
      {
        id: 'a',
        text: 'map flattens nested streams; flatMap only transforms 1:1',
      },
      {
        id: 'b',
        text: 'map applies a 1:1 function; flatMap maps to streams/collections and concatenates them into one stream',
      },
      {
        id: 'c',
        text: 'They differ only for parallel streams; sequentially they are identical',
      },
      {
        id: 'd',
        text: 'flatMap is a terminal operation; map is intermediate',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'flatMap is the way to flatten Stream<Stream<T>> or Stream<List<T>> into Stream<T>. Both map and flatMap are intermediate.',
    reference: 'java.util.stream.Stream — map and flatMap',
  },
  {
    category: 'Collections',
    difficulty: 'medium',
    question: 'How does HashMap locate an entry for a key?',
    options: [
      {
        id: 'a',
        text: 'It binary-searches a sorted array of keys using compareTo only',
      },
      {
        id: 'b',
        text: 'It spreads the key’s hashCode into a bucket index, then finds the entry with equals (treeifying long collision chains)',
      },
      {
        id: 'c',
        text: 'It uses System.identityHashCode exclusively and never calls equals',
      },
      {
        id: 'd',
        text: 'It stores entries in insertion order and scans from the head each time',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Hashing selects a bucket; equals resolves collisions. Since Java 8, long bins can become trees. LinkedHashMap adds order; HashMap itself does not scan linearly by default.',
    reference: 'java.util.HashMap',
  },
  {
    category: 'Streams',
    difficulty: 'medium',
    question:
      'Which statement about intermediate vs terminal Stream operations is correct?',
    options: [
      {
        id: 'a',
        text: 'Intermediate ops are eager; terminal ops return another Stream',
      },
      {
        id: 'b',
        text: 'filter and sorted are intermediate and lazy; collect and count are terminal and trigger execution',
      },
      {
        id: 'c',
        text: 'forEach is intermediate so you can continue the pipeline afterward',
      },
      {
        id: 'd',
        text: 'A stream may be reused after a terminal operation completes successfully',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Pipelines are lazy until a terminal operation. After that, the stream is consumed and not reusable.',
    reference: 'java.util.stream package summary',
  },
  {
    category: 'Modern Java',
    difficulty: 'medium',
    question: 'What do Java records primarily give you?',
    options: [
      {
        id: 'a',
        text: 'Mutable JavaBeans with generated setters for every component',
      },
      {
        id: 'b',
        text: 'Concise, nominally immutable data carriers with canonical constructor, accessors, equals, hashCode, and toString',
      },
      {
        id: 'c',
        text: 'Multiple inheritance of state from several parent records',
      },
      {
        id: 'd',
        text: 'A drop-in replacement that makes every Lombok annotation illegal',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Records are shallowly immutable by design. Lombok remains useful for other patterns; records do not provide class-style multiple inheritance.',
    reference: `${jls} — Record Classes (§8.10)`,
  },
  {
    category: 'Modern Java',
    difficulty: 'medium',
    question: 'How do records differ from Lombok-generated classes?',
    options: [
      {
        id: 'a',
        text: 'Lombok is part of the Java SE specification; records are a third-party library',
      },
      {
        id: 'b',
        text: 'Records are a language feature with fixed semantics; Lombok is compile-time codegen that can target many class shapes',
      },
      {
        id: 'c',
        text: 'Records allow extending any concrete class; Lombok forbids inheritance',
      },
      {
        id: 'd',
        text: 'Lombok @Value and records produce identical bytecode and identical constraints',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Records constrain the model (final class, state in components). Lombok is broader and optional tooling, not a language feature.',
    reference: `${jls} — Record Classes; Project Lombok documentation`,
  },
  {
    category: 'Concurrency',
    difficulty: 'hard',
    question: 'What problem do virtual threads (Java 21) primarily address?',
    options: [
      {
        id: 'a',
        text: 'Making CPU-bound number crunching automatically several times faster',
      },
      {
        id: 'b',
        text: 'Supporting huge numbers of concurrent blocking tasks with much cheaper thread footprint than platform threads',
      },
      {
        id: 'c',
        text: 'Replacing the OS scheduler with a pure user-mode process per request',
      },
      {
        id: 'd',
        text: 'Eliminating the need for locks, because virtual threads cannot race',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Virtual threads shine for blocking I/O concurrency. CPU-bound work still needs cores; shared mutability still needs synchronization.',
    reference: 'JEP 444 — Virtual Threads',
  },
  {
    category: 'Kafka',
    difficulty: 'medium',
    question: 'What is Apache Kafka primarily designed for?',
    options: [
      {
        id: 'a',
        text: 'Acting as the system of record that replaces OLTP relational databases',
      },
      {
        id: 'b',
        text: 'Durable, distributed publish/subscribe log for high-throughput event streaming',
      },
      {
        id: 'c',
        text: 'Compiling and resolving Maven dependency trees',
      },
      {
        id: 'd',
        text: 'Serving as an HTTP API gateway and TLS terminator',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Kafka is an event streaming platform: produce, retain, and consume records. It complements databases rather than replacing every OLTP use case.',
    reference: `${kafkaDoc} — Introduction`,
  },
  {
    category: 'Kafka',
    difficulty: 'medium',
    question: 'What does a Kafka consumer group provide?',
    options: [
      {
        id: 'a',
        text: 'Automatic deletion of each record as soon as any consumer reads it',
      },
      {
        id: 'b',
        text: 'Competing consumers that share topic partitions so each partition is processed by at most one group member at a time',
      },
      {
        id: 'c',
        text: 'A way to merge unrelated topics into one physical partition',
      },
      {
        id: 'd',
        text: 'Mutual exclusion so only one application in the company may subscribe to a topic',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Scaling within a group partitions work. Independent groups maintain separate offsets and can all read the same topic.',
    reference: `${kafkaDoc} — Consumers and consumer groups`,
  },
  {
    category: 'Architecture',
    difficulty: 'medium',
    question: 'What is the main goal of hexagonal architecture?',
    options: [
      {
        id: 'a',
        text: 'Eliminate persistence; domain objects must live only in memory',
      },
      {
        id: 'b',
        text: 'Keep domain logic independent of frameworks, UI, and infrastructure via ports and adapters',
      },
      {
        id: 'c',
        text: 'Mandate microservices; a modular monolith cannot be hexagonal',
      },
      {
        id: 'd',
        text: 'Place all rules in controllers so adapters stay empty',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'The hexagon isolates the domain. Adapters implement ports for HTTP, DB, messaging, etc., without owning business rules.',
    reference: 'Alistair Cockburn — Hexagonal Architecture',
  },
  {
    category: 'Architecture',
    difficulty: 'medium',
    question:
      'How should domain logic be tested in a hexagonal layout?',
    options: [
      {
        id: 'a',
        text: 'Only through the real database and message broker',
      },
      {
        id: 'b',
        text: 'With fast unit tests on domain types/services, using fakes or in-memory adapters at the ports',
      },
      {
        id: 'c',
        text: 'Only with browser E2E tools such as Selenium',
      },
      {
        id: 'd',
        text: 'Only by booting the full Spring Boot application for every assertion',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Independence from infrastructure is the point: domain tests should not require Spring, JPA, or Kafka. Broad integration tests still have a place higher in the pyramid.',
    reference: 'Alistair Cockburn — Hexagonal Architecture',
  },
  {
    category: 'Security',
    difficulty: 'medium',
    question:
      'How do teams typically discover known vulnerabilities in Maven/Gradle dependencies?',
    options: [
      {
        id: 'a',
        text: 'By grepping application logs for the string CVE',
      },
      {
        id: 'b',
        text: 'With SCA tooling (OWASP Dependency-Check, Snyk, GitHub/GitLab dependency scanning) plus timely upgrades',
      },
      {
        id: 'c',
        text: 'By removing the dependencyManagement block so versions float freely',
      },
      {
        id: 'd',
        text: 'By writing only JUnit tests; failing tests imply a CVE',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Software composition analysis matches dependency coordinates/versions to CVE databases. Tests do not replace that inventory.',
    reference: owasp,
  },
  {
    category: 'Testing',
    difficulty: 'medium',
    question: 'Which shape matches the classic test pyramid?',
    options: [
      {
        id: 'a',
        text: 'Mostly E2E tests, with few unit tests because units lie',
      },
      {
        id: 'b',
        text: 'Many fast unit tests, fewer integration tests, and relatively few E2E tests',
      },
      {
        id: 'c',
        text: 'Only integration tests; unit and E2E are obsolete',
      },
      {
        id: 'd',
        text: 'Equal counts of unit, integration, and E2E for balance',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Unit tests give fast feedback. Integration and E2E catch broader failures but cost more, so they stay fewer.',
    reference: 'Mike Cohn — Test Pyramid',
  },

  // --- Additional senior FAQ-style questions ---
  {
    category: 'Spring Boot',
    difficulty: 'hard',
    question:
      'Spring Boot defaults spring.jpa.open-in-view to true. What is a common downside of leaving OSIV enabled?',
    options: [
      {
        id: 'a',
        text: 'It disables the second-level cache for the whole JVM',
      },
      {
        id: 'b',
        text: 'The persistence context stays open for the whole web request, which can hide LazyInitializationException, encourage N+1 during view rendering, and hold DB connections longer',
      },
      {
        id: 'c',
        text: 'It forces every repository method to run without a transaction',
      },
      {
        id: 'd',
        text: 'It replaces Hibernate with JDBC for all queries',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'OSIV binds an EntityManager to the request thread through view rendering. Prefer explicit fetch strategies/DTOs and often set open-in-view=false for APIs.',
    reference: `${bootRef} — spring.jpa.open-in-view`,
  },
  {
    category: 'Spring',
    difficulty: 'hard',
    question:
      'A @Transactional method throws a checked Exception (not annotated with rollbackFor). What is the default outcome?',
    options: [
      {
        id: 'a',
        text: 'Spring always rolls back on any Exception subclass',
      },
      {
        id: 'b',
        text: 'By default Spring commits for checked exceptions unless rollbackFor includes them',
      },
      {
        id: 'c',
        text: 'Checked exceptions cannot leave a @Transactional method; they become Errors',
      },
      {
        id: 'd',
        text: 'The transaction manager converts the exception into a commit marker automatically',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Default rollback rules target RuntimeException and Error. Declare rollbackFor = Exception.class (or specific types) when checked failures must undo work.',
    reference: `${springRef} — Rolling back`,
  },
  {
    category: 'Spring Boot',
    difficulty: 'hard',
    question:
      'Since Spring Boot 2.6, circular references are disallowed by default. What is the preferred fix?',
    options: [
      {
        id: 'a',
        text: 'Set spring.main.allow-circular-references=true permanently as the design solution',
      },
      {
        id: 'b',
        text: 'Break the cycle: extract a third bean, use events, or rethink the dependency direction; treat @Lazy only as a temporary bridge',
      },
      {
        id: 'c',
        text: 'Replace constructor injection with field injection so cycles become impossible',
      },
      {
        id: 'd',
        text: 'Annotate both beans @Prototype so each creation breaks the cycle',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'allow-circular-references restores risky early references and does not fix constructor cycles. Redesign the graph; @Lazy postpones failure modes.',
    reference: `${bootRef} — Circular references`,
  },
  {
    category: 'Spring',
    difficulty: 'hard',
    question:
      'Why can @Bean methods on a @Configuration class call each other and still receive enhanced singleton semantics, unlike plain @Component classes?',
    options: [
      {
        id: 'a',
        text: '@Component forbids @Bean methods entirely',
      },
      {
        id: 'b',
        text: 'Full @Configuration classes are CGLIB-enhanced so inter-bean @Bean calls go through the container; @Component/@Bean lite mode does not intercept those calls the same way',
      },
      {
        id: 'c',
        text: '@Configuration always creates prototype beans when methods call each other',
      },
      {
        id: 'd',
        text: 'There is no difference; both modes proxy @Bean self-calls identically',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'This is the full vs lite @Bean mode distinction. Calling @Bean methods on the same @Component instance can create duplicate unmanaged instances.',
    reference: `${springRef} — @Bean lite mode vs @Configuration`,
  },
  {
    category: 'Hibernate',
    difficulty: 'hard',
    question:
      'An entity has @Version long version. Two transactions read version=3 and both flush an update. What typically happens?',
    options: [
      {
        id: 'a',
        text: 'Both commits succeed; last writer silently wins without error',
      },
      {
        id: 'b',
        text: 'The second commit fails with an optimistic locking failure (for example OptimisticLockException)',
      },
      {
        id: 'c',
        text: 'Hibernate automatically merges field-by-field using three-way diff',
      },
      {
        id: 'd',
        text: '@Version only affects DDL; it is ignored at runtime',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Optimistic locking compares the version column on UPDATE. A mismatch means another transaction committed first.',
    reference: `${jpaRef} — Optimistic locking / @Version`,
  },
  {
    category: 'Hibernate',
    difficulty: 'medium',
    question:
      'Inside an open persistence context, you change a managed entity’s field and commit without calling save. What usually happens?',
    options: [
      {
        id: 'a',
        text: 'Nothing; JPA requires an explicit merge/save for every change',
      },
      {
        id: 'b',
        text: 'Dirty checking detects the change and flushes an UPDATE before commit',
      },
      {
        id: 'c',
        text: 'The change is written only if the entity is annotated @Dirty',
      },
      {
        id: 'd',
        text: 'Hibernate schedules a DELETE because unmanaged fields are considered removed',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Managed entities are tracked. At flush/commit, dirty state is synchronized without an explicit save in typical Spring Data flows that return managed instances.',
    reference: `${jpaRef} — Flush and dirty checking`,
  },
  {
    category: 'Hibernate',
    difficulty: 'hard',
    question:
      'Why is implementing equals/hashCode solely on a generated @Id often problematic for entities in sets before persist?',
    options: [
      {
        id: 'a',
        text: 'Because HashSet forbids null elements and ids are always null',
      },
      {
        id: 'b',
        text: 'Because the id is null then assigned, changing hashCode and breaking Set/Map contracts for the same instance',
      },
      {
        id: 'c',
        text: 'Because JPA requires equals to use == only',
      },
      {
        id: 'd',
        text: 'Because databases reject entities whose equals uses business keys',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Mutable identity breaks collection invariants. Prefer a stable business key or careful id strategies discussed in Hibernate guidance.',
    reference: `${jpaRef} — Equals and hashCode`,
  },
  {
    category: 'Streams',
    difficulty: 'medium',
    question: 'How does Stream.toList() differ from collect(Collectors.toList())?',
    options: [
      {
        id: 'a',
        text: 'They are specified to return the exact same mutable ArrayList instance type always',
      },
      {
        id: 'b',
        text: 'Stream.toList() returns an unmodifiable List; Collectors.toList() makes no unmodifiable guarantee',
      },
      {
        id: 'c',
        text: 'Collectors.toList() is terminal; Stream.toList() is intermediate',
      },
      {
        id: 'd',
        text: 'Stream.toList() exists only for parallel streams',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Since Java 16, toList() yields an unmodifiable list. Use Collectors.toCollection(ArrayList::new) when you need a mutable list.',
    reference: 'java.util.stream.Stream.toList / Collectors.toList',
  },
  {
    category: 'Types and OOP',
    difficulty: 'medium',
    question: 'What is the recommended primary use of Optional?',
    options: [
      {
        id: 'a',
        text: 'As fields on every JPA entity to eliminate null at the database layer',
      },
      {
        id: 'b',
        text: 'As a return type for methods that may intentionally have no value',
      },
      {
        id: 'c',
        text: 'As the type of every method parameter to force callers to wrap arguments',
      },
      {
        id: 'd',
        text: 'As a replacement for exceptions in all failure cases',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Optional communicates absent return values. Using it for fields/parameters or as a general error channel is widely discouraged.',
    reference: 'Java API — java.util.Optional',
  },
  {
    category: 'Spring Boot',
    difficulty: 'medium',
    question:
      'You need to test only MVC controllers with MockMvc, without loading the full application context. Which slice fits best?',
    options: [
      {
        id: 'a',
        text: '@SpringBootTest(webEnvironment = DEFINED_PORT) exclusively',
      },
      {
        id: 'b',
        text: '@WebMvcTest for the controller(s) under test',
      },
      {
        id: 'c',
        text: '@DataJpaTest, which also starts DispatcherServlet',
      },
      {
        id: 'd',
        text: '@JsonTest, which boots Tomcat and security filters',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      '@WebMvcTest loads a MVC slice. @SpringBootTest is broader; @DataJpaTest focuses on JPA; @JsonTest focuses on JSON mapping.',
    reference: `${bootRef} — @WebMvcTest`,
  },
  {
    category: 'Spring',
    difficulty: 'medium',
    question:
      'What is a key difference between a Servlet Filter and a Spring MVC HandlerInterceptor?',
    options: [
      {
        id: 'a',
        text: 'Filters only run after the controller; interceptors only run before view rendering',
      },
      {
        id: 'b',
        text: 'Filters wrap the servlet request/response pipeline; interceptors hook into Spring MVC handler execution with access to HandlerMethod metadata',
      },
      {
        id: 'c',
        text: 'Interceptors cannot see HTTP headers; filters cannot see the request body',
      },
      {
        id: 'd',
        text: 'They are identical APIs with two names for historical reasons',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Filters are servlet-container concerns (encoding, security chain). Interceptors are Spring MVC-specific around controller handling.',
    reference: `${springRef} — Filters vs interceptors`,
  },
  {
    category: 'HTTP and REST',
    difficulty: 'medium',
    question: 'Which statement about PUT vs PATCH is most accurate?',
    options: [
      {
        id: 'a',
        text: 'PUT must always create; PATCH must always delete',
      },
      {
        id: 'b',
        text: 'PUT typically replaces the target resource representation; PATCH applies a partial modification',
      },
      {
        id: 'c',
        text: 'PATCH is non-idempotent by definition; PUT is never idempotent',
      },
      {
        id: 'd',
        text: 'REST forbids PATCH; only SOAP uses partial updates',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'PUT is usually idempotent full replacement. PATCH is partial; idempotency depends on the patch semantics.',
    reference: 'RFC 9110 / RFC 5789 — PUT and PATCH',
  },
  {
    category: 'Kafka',
    difficulty: 'hard',
    question:
      'With default at-least-once consumption, a consumer crashes after processing but before committing offsets. What can happen after restart?',
    options: [
      {
        id: 'a',
        text: 'Those records are guaranteed never to be seen again',
      },
      {
        id: 'b',
        text: 'Some records may be processed again, so handlers should be idempotent or deduplicate',
      },
      {
        id: 'c',
        text: 'Kafka deletes the topic to preserve exactly-once without configuration',
      },
      {
        id: 'd',
        text: 'Offsets rewind only if the producer used acks=0',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'At-least-once means redelivery is possible. Exactly-once needs additional transactional/idempotent setup and careful design.',
    reference: `${kafkaDoc} — Delivery semantics`,
  },
  {
    category: 'Spring Boot',
    difficulty: 'medium',
    question: 'How do you activate the prod Spring profile for a Boot app?',
    options: [
      {
        id: 'a',
        text: 'Only by renaming application.properties to prod.properties',
      },
      {
        id: 'b',
        text: 'Via spring.profiles.active (property, env, or CLI), which loads profile-specific config such as application-prod.yml',
      },
      {
        id: 'c',
        text: 'By placing @Profile("prod") on main() without any external setting',
      },
      {
        id: 'd',
        text: 'Profiles are Maven packaging classifiers and cannot change at runtime',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'spring.profiles.active selects active profiles. @Profile conditions beans; it does not by itself choose the environment.',
    reference: `${bootRef} — Profiles`,
  },
  {
    category: 'Spring',
    difficulty: 'medium',
    question:
      'Why publish a Spring ApplicationEvent instead of calling another service directly?',
    options: [
      {
        id: 'a',
        text: 'Events replace transactional boundaries and disable rollbacks',
      },
      {
        id: 'b',
        text: 'To decouple modules: publishers depend on an event type, not on concrete subscriber services',
      },
      {
        id: 'c',
        text: 'Events are the only way to call @Transactional methods',
      },
      {
        id: 'd',
        text: 'Listeners always run in a new JVM process by default',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Domain/application events reduce direct coupling. Transaction phase and async listeners are configurable; they are not magical distributed messaging by default.',
    reference: `${springRef} — Application events`,
  },
  {
    category: 'SQL',
    difficulty: 'hard',
    question:
      'A query filters WHERE status = \'ACTIVE\' and status has only two values with ~50/50 distribution. Why might an index on status alone help little?',
    options: [
      {
        id: 'a',
        text: 'Indexes never work with equality predicates',
      },
      {
        id: 'b',
        text: 'Low selectivity: the optimizer may prefer a sequential scan when each value matches a large fraction of rows',
      },
      {
        id: 'c',
        text: 'String columns cannot be indexed in SQL databases',
      },
      {
        id: 'd',
        text: 'Indexes speed writes only; they never affect reads',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Selectivity matters. Composite indexes matching filter+sort/cover columns are often more useful than a low-cardinality single column.',
    reference: 'Database indexing — selectivity',
  },
  {
    category: 'Modern Java',
    difficulty: 'medium',
    question:
      'After if (obj instanceof String s) { … }, what does pattern matching for instanceof provide?',
    options: [
      {
        id: 'a',
        text: 'Automatic conversion of obj to String without a runtime type check',
      },
      {
        id: 'b',
        text: 'A binding variable s already narrowed to String inside the true branch',
      },
      {
        id: 'c',
        text: 'A compile error unless s is declared earlier in the method',
      },
      {
        id: 'd',
        text: 'An implicit equals() comparison against every String in the constant pool',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Pattern matching combines the instanceof test with a scoped binding, removing a separate cast.',
    reference: `${jls} — Pattern matching for instanceof`,
  },
  {
    category: 'Collections',
    difficulty: 'medium',
    question:
      'While iterating an ArrayList with a for-each loop, another thread (or the same thread via list.remove) structurally modifies it. What is a common result?',
    options: [
      {
        id: 'a',
        text: 'The iterator silently skips to the end without error',
      },
      {
        id: 'b',
        text: 'A ConcurrentModificationException from the fail-fast iterator (best-effort detection)',
      },
      {
        id: 'c',
        text: 'The JVM freezes the list permanently',
      },
      {
        id: 'd',
        text: 'ArrayList switches to CopyOnWriteArrayList automatically',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Fail-fast iterators detect concurrent structural modification and throw CME. Use Iterator.remove, CopyOnWrite, or proper synchronization when needed.',
    reference: 'java.util.ArrayList — Fail-fast iterators',
  },
  {
    category: 'Git',
    difficulty: 'hard',
    question:
      'Why is rebasing commits that were already pushed to a shared branch risky?',
    options: [
      {
        id: 'a',
        text: 'Rebase deletes the remote repository configuration',
      },
      {
        id: 'b',
        text: 'It rewrites commit SHAs, so teammates’ histories diverge and force-pushes can discard others’ work without coordination',
      },
      {
        id: 'c',
        text: 'Git refuses to rebase any commit that touches more than one file',
      },
      {
        id: 'd',
        text: 'Rebased commits lose their author identity permanently',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'History rewriting changes identifiers. Prefer rebase on private branches; coordinate carefully before force-pushing shared ones.',
    reference: `${gitDoc} — Recovering from upstream rebase`,
  },
  {
    category: 'HTTP and REST',
    difficulty: 'medium',
    question: 'What is a CORS preflight request?',
    options: [
      {
        id: 'a',
        text: 'A POST with Content-Type application/json that always skips OPTIONS',
      },
      {
        id: 'b',
        text: 'An OPTIONS request the browser sends to ask whether a cross-origin call with given method/headers is allowed',
      },
      {
        id: 'c',
        text: 'A WebSocket upgrade handshake mandated by REST',
      },
      {
        id: 'd',
        text: 'A server-to-server health check unrelated to browsers',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Browsers preflight “non-simple” cross-origin requests. Servers answer with Access-Control-* headers.',
    reference: `${mdn} — CORS preflight`,
  },
  {
    category: 'Spring Boot',
    difficulty: 'medium',
    question:
      'Nested objects in a @RequestBody need Bean Validation. What is required for cascade validation?',
    options: [
      {
        id: 'a',
        text: 'Only @Valid on the controller parameter; nested fields are always validated',
      },
      {
        id: 'b',
        text: 'Annotate the nested property with @Valid (and constraints on nested fields) so validation cascades',
      },
      {
        id: 'c',
        text: 'Use @Validated only on repository interfaces',
      },
      {
        id: 'd',
        text: 'Bean Validation ignores nested Java objects by specification',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Cascading requires @Valid on the association. Constraints on the nested type alone are not visited without it.',
    reference: 'Jakarta Bean Validation — Object graphs / @Valid',
  },
  {
    category: 'Concurrency',
    difficulty: 'hard',
    question:
      'A virtual thread runs code that enters a synchronized block and then blocks on I/O inside it. What concern arises?',
    options: [
      {
        id: 'a',
        text: 'Virtual threads forbid synchronized entirely at compile time',
      },
      {
        id: 'b',
        text: 'The virtual thread may pin its carrier platform thread, limiting scalability under heavy pinning',
      },
      {
        id: 'c',
        text: 'Pinning makes the I/O complete instantly on another core',
      },
      {
        id: 'd',
        text: 'synchronized is upgraded to a ReentrantLock automatically on virtual threads',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Pinning reduces the benefit of virtual threads. Prefer java.util.concurrent locks when holding a lock across blocking calls, and keep critical sections short.',
    reference: 'JEP 444 — Virtual Threads (pinning)',
  },
  {
    category: 'Spring',
    difficulty: 'hard',
    question:
      'Service A’s @Transactional method calls this.helper() where helper is @Transactional(propagation = REQUIRES_NEW) on the same class. What happens with the default proxy setup?',
    options: [
      {
        id: 'a',
        text: 'A new transaction always starts because the annotation is present on helper',
      },
      {
        id: 'b',
        text: 'Self-invocation bypasses the proxy, so REQUIRES_NEW does not apply unless called through another Spring bean/proxy',
      },
      {
        id: 'c',
        text: 'Spring suspends the outer transaction only when helper is private',
      },
      {
        id: 'd',
        text: 'REQUIRES_NEW is illegal on methods; it may only annotate classes',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Proxy-based Spring AOP does not intercept this.helper(). Move helper to another bean or inject a self proxy. (Training bank also covers this trap; included here as a classic FAQ.)',
    reference: `${springRef} — Understanding the Spring Framework’s declarative transaction implementation`,
  },
  {
    category: 'Collections',
    difficulty: 'medium',
    question:
      'Which difference between HashMap and ConcurrentHashMap is correct?',
    options: [
      {
        id: 'a',
        text: 'Both allow null keys; only ConcurrentHashMap allows null values',
      },
      {
        id: 'b',
        text: 'HashMap is not thread-safe and allows one null key; ConcurrentHashMap is concurrent and disallows null keys/values',
      },
      {
        id: 'c',
        text: 'ConcurrentHashMap locks the entire map for every get, like Hashtable',
      },
      {
        id: 'd',
        text: 'HashMap is safe for concurrent writers without external sync',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'ConcurrentHashMap uses fine-grained concurrency and forbids nulls to avoid ambiguity under concurrent gets. It does not behave like a fully locked Hashtable for reads.',
    reference: 'java.util.concurrent.ConcurrentHashMap',
  },
  {
    category: 'Spring Boot',
    difficulty: 'medium',
    question:
      'What does @SpringBootApplication compose, in practice?',
    options: [
      {
        id: 'a',
        text: 'Only @Configuration — component scanning must be declared separately always',
      },
      {
        id: 'b',
        text: '@SpringBootConfiguration, @EnableAutoConfiguration, and @ComponentScan (with defaults from the annotated class package)',
      },
      {
        id: 'c',
        text: '@RestController and @EnableWebMvc only',
      },
      {
        id: 'd',
        text: '@EntityScan and @EnableJms exclusively',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      '@SpringBootApplication is a composed annotation that sets up configuration, auto-configuration, and component scanning for typical Boot apps.',
    reference: `${bootRef} — Using the @SpringBootApplication annotation`,
  },
  {
    category: 'Testing',
    difficulty: 'medium',
    question:
      'In a senior codebase, what is a sound reason to prefer @DataJpaTest over @SpringBootTest for repository tests?',
    options: [
      {
        id: 'a',
        text: '@DataJpaTest starts the full HTTP stack so controllers are always covered',
      },
      {
        id: 'b',
        text: 'It loads a JPA test slice (entities, repositories, DataSource) that is faster and more focused than the whole application context',
      },
      {
        id: 'c',
        text: '@DataJpaTest disables transactions so each test commits permanently',
      },
      {
        id: 'd',
        text: '@SpringBootTest cannot access a database by design',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Slice tests keep feedback fast. @DataJpaTest rolls back by default and does not load the full web stack.',
    reference: `${bootRef} — @DataJpaTest`,
  },
  {
    category: 'Architecture',
    difficulty: 'hard',
    question:
      'In hexagonal architecture, where should SQL/JPA mapping details live?',
    options: [
      {
        id: 'a',
        text: 'Inside domain entities as the only persistence model',
      },
      {
        id: 'b',
        text: 'In an outbound persistence adapter that implements a domain port, keeping the domain free of JPA annotations when that is the team’s rule',
      },
      {
        id: 'c',
        text: 'Only in controllers as @Query methods',
      },
      {
        id: 'd',
        text: 'Hexagonal architecture forbids databases, so nowhere',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Ports define what the domain needs; adapters implement how with JPA/SQL. Some teams still use JPA on domain types as a pragmatic compromise — the pure hexagon keeps infrastructure out.',
    reference: 'Alistair Cockburn — Hexagonal Architecture',
  },
  {
    category: 'Security',
    difficulty: 'medium',
    question:
      'An SCA scan reports a CVE in a transitive dependency. What is the usual remediation path?',
    options: [
      {
        id: 'a',
        text: 'Ignore transitive CVEs because only direct dependencies matter',
      },
      {
        id: 'b',
        text: 'Upgrade/replace the affected component (or override the transitive version when safe), verify compatibility, and redeploy',
      },
      {
        id: 'c',
        text: 'Delete the lockfile so CI stops failing',
      },
      {
        id: 'd',
        text: 'Mark the CVE as fixed by renaming the artifactId in documentation only',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Transitive vulnerabilities still ship in the runtime classpath. Prefer upgrading the dependent library; version overrides are a controlled last resort.',
    reference: owasp,
  },
  {
    category: 'JavaScript and TypeScript',
    difficulty: 'hard',
    question:
      'In an Angular HTTP client call, you subscribe and update component state. Which statement about Observables vs Promises is correct?',
    options: [
      {
        id: 'a',
        text: 'Observables are always eager like Promises even before subscribe',
      },
      {
        id: 'b',
        text: 'Many Observables are lazy until subscribed and can emit multiple values; Promises are eager and settle once',
      },
      {
        id: 'c',
        text: 'Promises can be cancelled with unsubscribe natively',
      },
      {
        id: 'd',
        text: 'Angular forbids Promises; only Observables exist in TypeScript',
      },
    ],
    correctOptionIds: ['b'],
    explanation:
      'HttpClient returns cold Observables that run on subscribe and can be cancelled via unsubscribe/async pipe. Promises start immediately and resolve once.',
    reference: 'RxJS / Angular HttpClient documentation',
  },
];

// Java FAQ output/compile questions adapted for the QCM bank.

const jls = 'Java Language Specification';

export const javaFaqQuestions = [
  {
    category: 'Types and OOP',
    difficulty: 'easy',
    question:
      'Two classes in the same package: Test declares protected int fields x and y with no explicit initialization, and Main prints t.x and t.y for a new Test(). What is printed?',
    options: [
      { id: 'a', text: '0 0' },
      { id: 'b', text: 'null null' },
      { id: 'c', text: 'The program does not compile because protected fields are inaccessible' },
      { id: 'd', text: 'The program throws NullPointerException' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'A protected member is visible to other classes in the same package, so Main can read the fields. Uninitialized integral instance fields receive the default value 0.',
    reference: `${jls} — Access Control (§6.6) and Initial Values of Variables (§4.12.5)`,
  },
  {
    category: 'Types and OOP',
    difficulty: 'easy',
    question:
      'What happens when a for loop uses the integer literal 1 as its condition, as in for (int i = 0; 1; i++)?',
    options: [
      { id: 'a', text: 'The program does not compile' },
      { id: 'b', text: 'The loop body runs once then exits' },
      { id: 'c', text: 'The loop runs forever' },
      { id: 'd', text: 'The loop never runs' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Unlike C and C++, Java requires a boolean expression where a boolean is expected. An int such as 1 is not a valid loop condition, so the code fails to compile. Writing true instead would compile.',
    reference: `${jls} — The for Statement (§14.14.1) and Boolean Expressions`,
  },
  {
    category: 'Types and OOP',
    difficulty: 'easy',
    question:
      'A class declares a non-static instance method fun() and calls fun() directly from public static void main. What happens?',
    options: [
      { id: 'a', text: 'The program does not compile' },
      { id: 'b', text: 'fun runs and returns normally' },
      { id: 'c', text: 'The call throws NullPointerException' },
      { id: 'd', text: 'The call throws IllegalAccessError' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'A static method has no receiver instance. Calling an instance method without an object reference is a compile-time error. Making fun static would allow the call.',
    reference: `${jls} — Method Invocation Expressions (§15.12)`,
  },
  {
    category: 'Types and OOP',
    difficulty: 'medium',
    question: 'Which statement about a static local variable declared inside a Java method is correct?',
    options: [
      { id: 'a', text: 'Java does not allow static local variables; the declaration does not compile' },
      { id: 'b', text: 'It is initialized once and retains its value across calls, as in C++' },
      { id: 'c', text: 'It is allowed only inside static methods' },
      { id: 'd', text: 'It is allowed and is shared by every instance of the class' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Unlike C++, Java forbids the static modifier on a local variable. A static field must be declared as a class member, not inside a method body.',
    reference: `${jls} — Local Variable Declarations (§14.4)`,
  },
  {
    category: 'Types and OOP',
    difficulty: 'medium',
    question:
      'Class Point declares only a constructor Point(int x, int y). Another class in the same package executes new Point(). What happens?',
    options: [
      { id: 'a', text: 'The program does not compile because no no-argument constructor exists' },
      { id: 'b', text: 'A Point is created with x and y equal to 0' },
      { id: 'c', text: 'A Point is created with x and y equal to null' },
      { id: 'd', text: 'The call throws InstantiationException' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'When a class declares any constructor, the compiler does not provide a default no-argument constructor. new Point() therefore fails to compile even though protected fields would be accessible in the same package.',
    reference: `${jls} — Default Constructor (§8.8.9)`,
  },
  {
    category: 'Types and OOP',
    difficulty: 'medium',
    question:
      'A superclass method is protected. A subclass overrides it and declares the override with package-private (default) access. What happens?',
    options: [
      { id: 'a', text: 'The program does not compile' },
      { id: 'b', text: 'The subclass method runs when invoked on a subclass instance' },
      { id: 'c', text: 'The superclass method always runs' },
      { id: 'd', text: 'The override is ignored at runtime' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'An overriding method must not reduce accessibility. Package-private is more restrictive than protected, so the override is rejected at compile time. Widening access, for example to public, is allowed.',
    reference: `${jls} — Requirements in Overriding and Hiding (§8.4.8.3)`,
  },
  {
    category: 'Types and OOP',
    difficulty: 'medium',
    question:
      'Two overloads exist: gfg(String) and gfg(Object). What does gfg(null) print?',
    options: [
      { id: 'a', text: 'String' },
      { id: 'b', text: 'Object' },
      { id: 'c', text: 'The call does not compile' },
      { id: 'd', text: 'The call throws NullPointerException' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'For overload resolution, the compiler chooses the most specific applicable method. String is a more specific type than Object, so gfg(String) is selected for a null argument.',
    reference: `${jls} — Choose the Most Specific Method (§15.12.2.5)`,
  },
  {
    category: 'Types and OOP',
    difficulty: 'hard',
    question:
      'Three overloads exist: gfg(String), gfg(Object), and gfg(Integer). What happens when the program calls gfg(null)?',
    options: [
      { id: 'a', text: 'The call does not compile because String and Integer are equally specific' },
      { id: 'b', text: 'gfg(String) runs' },
      { id: 'c', text: 'gfg(Integer) runs' },
      { id: 'd', text: 'gfg(Object) runs' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'String and Integer are both more specific than Object, but neither is more specific than the other. The null argument therefore makes the invocation ambiguous and the code fails to compile.',
    reference: `${jls} — Choose the Most Specific Method (§15.12.2.5)`,
  },
  {
    category: 'Immutability',
    difficulty: 'medium',
    question:
      'Given String s1 = "abc"; String s2 = s1; then s1 += "d"; what does System.out.println(s1 + " " + s2 + " " + (s1 == s2)) print?',
    options: [
      { id: 'a', text: 'abcd abc false' },
      { id: 'b', text: 'abcd abcd true' },
      { id: 'c', text: 'abcd abc true' },
      { id: 'd', text: 'abc abc false' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'String is immutable. s1 += "d" creates a new String "abcd" and reassigns s1, while s2 still refers to "abc". The two references therefore differ, so == is false.',
    reference: `${jls} — String Concatenation Operator + (§15.18.1) and The class String`,
  },
  {
    category: 'Immutability',
    difficulty: 'medium',
    question:
      'Given StringBuffer sb1 = new StringBuffer("abc"); StringBuffer sb2 = sb1; then sb1.append("d"); what does printing sb1, sb2, and (sb1 == sb2) show?',
    options: [
      { id: 'a', text: 'abcd abcd true' },
      { id: 'b', text: 'abcd abc false' },
      { id: 'c', text: 'abcd abc true' },
      { id: 'd', text: 'abc abc true' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'StringBuffer is mutable. append changes the shared buffer in place, and sb1 and sb2 still refer to the same object, so both print abcd and == is true.',
    reference: 'Java SE API — java.lang.StringBuffer',
  },
  {
    category: 'Types and OOP',
    difficulty: 'easy',
    question:
      'First, Second, and Third each have a no-argument constructor that prints "a", "b", and "c" respectively. Second extends First and Third extends Second. What is printed when new Third() runs?',
    options: [
      { id: 'a', text: 'a then b then c' },
      { id: 'b', text: 'c then b then a' },
      { id: 'c', text: 'Only c' },
      { id: 'd', text: 'Only a' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Before a constructor body runs, it invokes a superclass constructor. Creating Third therefore runs First\'s constructor, then Second\'s, then Third\'s, printing a, b, and c in that order.',
    reference: `${jls} — Constructor Body (§8.8.7)`,
  },
  {
    category: 'Types and OOP',
    difficulty: 'hard',
    question:
      'First has int i = 10 and a constructor First(int j) that prints i then sets this.i = j * 10. Second extends First, calls super(j), prints i, then sets this.i = j * 20. What does new Second(20) followed by printing n.i produce?',
    options: [
      { id: 'a', text: '10 then 200 then 400' },
      { id: 'b', text: '10 then 20 then 400' },
      { id: 'c', text: '0 then 200 then 400' },
      { id: 'd', text: '10 then 200 then 200' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Second inherits i. First\'s constructor first prints the field initializer value 10, then sets i to 200. Second then prints 200 and sets i to 400, which is what the caller prints last.',
    reference: `${jls} — Creation of New Class Instances (§12.5)`,
  },
  {
    category: 'Concurrency',
    difficulty: 'medium',
    question:
      'A Thread subclass is started with start(), then stop() is called, then start() is called again on the same instance. What happens?',
    options: [
      { id: 'a', text: 'A runtime IllegalThreadStateException is thrown' },
      { id: 'b', text: 'The thread runs its run method a second time' },
      { id: 'c', text: 'The second start call is ignored' },
      { id: 'd', text: 'The program does not compile because stop is removed' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'A Thread instance may be started only once. Calling start again, even after stop, throws IllegalThreadStateException. stop itself is deprecated and unsafe, but the second start is what fails here.',
    reference: 'Java SE API — java.lang.Thread.start()',
  },
  {
    category: 'equals and hashCode',
    difficulty: 'easy',
    question:
      'String s1 = new String("tulasi"); String s2 = new String("tulasi"); What does if (s1 == s2) print when the branches print "Equal" or "Not equal"?',
    options: [
      { id: 'a', text: 'Not equal' },
      { id: 'b', text: 'Equal' },
      { id: 'c', text: 'The comparison does not compile' },
      { id: 'd', text: 'The comparison throws NullPointerException' },
    ],
    correctOptionIds: ['a'],
    explanation:
      '== compares object identity. Each new String(...) allocates a distinct object, so the references differ and the program prints Not equal. s1.equals(s2) would compare character content and print Equal.',
    reference: `${jls} — Reference Equality Operators (§15.21.3)`,
  },
  {
    category: 'Types and OOP',
    difficulty: 'easy',
    question:
      'A superclass declares final public int calc(int a, int b). A subclass declares public int calc(int a, int b) with a different body. What happens?',
    options: [
      { id: 'a', text: 'The program does not compile' },
      { id: 'b', text: 'The subclass method overrides the superclass method' },
      { id: 'c', text: 'The subclass method hides the superclass method' },
      { id: 'd', text: 'Both methods coexist and the call is ambiguous' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'A final instance method cannot be overridden. Declaring the same instance signature in a subclass is a compile-time error.',
    reference: `${jls} — final Methods (§8.4.3.3)`,
  },
  {
    category: 'Types and OOP',
    difficulty: 'medium',
    question:
      'After Integer a = 128, b = 128; Integer c = 100, d = 100; what do a == b and c == d evaluate to?',
    options: [
      { id: 'a', text: 'false then true' },
      { id: 'b', text: 'true then true' },
      { id: 'c', text: 'false then false' },
      { id: 'd', text: 'true then false' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Autoboxing reuses cached Integer instances for values from -128 through 127. 100 is in that range so c and d may share one object and == is true. 128 is outside the required cache range, so a == b is false.',
    reference: `${jls} — Boxing Conversion (§5.1.7)`,
  },
];

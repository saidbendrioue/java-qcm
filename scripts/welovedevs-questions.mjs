export const welovedevsQuestions = [
  {
    category: 'JVM',
    difficulty: 'easy',
    question:
      'Which statement writes the characters welovedev to standard output and then ends the line?',
    options: [
      { id: 'a', text: 'System.out.println("welovedev");' },
      { id: 'b', text: 'System.out.print("welovedev");' },
      { id: 'c', text: 'console.log("welovedev");' },
      { id: 'd', text: 'System.writeLine("welovedev");' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'System.out is the standard output stream. println writes the text and then a line separator. print writes the same characters without ending the line. console.log is JavaScript, and System has no writeLine method.',
    reference: 'java.io.PrintStream.println',
  },
  {
    category: 'Types and OOP',
    difficulty: 'hard',
    question: `How many times is the condition (a++ < 15) evaluated?

int a = 3;
while (a++ < 15) {
    if ((a++ % 5) == 0)
        break;
}`,
    options: [
      { id: 'a', text: '4' },
      { id: 'b', text: '3' },
      { id: 'c', text: '5' },
      { id: 'd', text: '6' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'The condition runs four times, with a equal to 3, 5, 7, and 9 before each post-increment. Each test is true. The body then increments a again, and the fourth body sees 10, so 10 % 5 == 0 and break leaves the loop. break does not evaluate the condition once more.',
    reference: 'Java Language Specification — while Statement (§14.12) and Postfix Increment (§15.14.2)',
  },
  {
    category: 'Types and OOP',
    difficulty: 'easy',
    question: 'Which package name follows the usual Java naming convention?',
    options: [
      { id: 'a', text: 'com.company.model' },
      { id: 'b', text: 'Com.Company.Model' },
      { id: 'c', text: 'com-company-model' },
      { id: 'd', text: 'COM_COMPANY_MODEL' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'A package name is a sequence of identifiers separated by dots. The convention is all lowercase, often starting with a reversed domain name, so com.company.model is the usual form. Hyphens are not allowed in an identifier, and a single uppercase name is not a nested package.',
    reference: 'Java Language Specification — Package Names (§6.1) and Naming Conventions (§6.1)',
  },
  {
    category: 'Types and OOP',
    difficulty: 'medium',
    question: 'Which statement distinguishes an interface from an abstract class?',
    options: [
      {
        id: 'a',
        text: 'A class extends one class and may implement several interfaces. An abstract class may declare constructors and instance fields. An interface cannot declare a constructor or an instance field',
      },
      { id: 'b', text: 'A class may extend several abstract classes and only one interface' },
      { id: 'c', text: 'An interface is created with new, and an abstract class cannot contain a concrete method' },
      { id: 'd', text: 'An abstract class cannot declare a constructor, while an interface can' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'A class has one direct superclass and may implement any number of interfaces. An abstract class can hold instance state and is initialized through a constructor, even though it cannot be instantiated with new. Interface fields are constants, and an interface has no constructor. An interface may still provide default and static methods.',
    reference: 'Java Language Specification — Superclasses and Subclasses (§8.1.4) and Interfaces (§9)',
  },
  {
    category: 'JVM',
    difficulty: 'medium',
    type: 'truefalse',
    question: 'Serialization of an object can be customized by implementing Externalizable.',
    options: [
      { id: 'a', text: 'True' },
      { id: 'b', text: 'False' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Externalizable extends Serializable. The class implements writeExternal and readExternal and then controls the bytes it stores and restores, instead of relying only on the default field serialization.',
    reference: 'java.io.Externalizable',
  },
  {
    category: 'Concurrency',
    difficulty: 'hard',
    question: 'What is a monitor in Java?',
    options: [
      {
        id: 'a',
        text: 'The intrinsic lock of an object. synchronized uses it so one thread at a time executes the guarded code',
      },
      { id: 'b', text: 'A background thread that prints every method call' },
      { id: 'c', text: 'The garbage collector' },
      { id: 'd', text: 'A launcher flag that sets the maximum heap size' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Every object has one intrinsic lock, also called its monitor. Entering a synchronized method or block acquires that lock and leaving it releases the lock. Other threads that need the same monitor wait. The garbage collector and the heap size are unrelated.',
    reference: 'Java Language Specification — synchronized Methods (§8.4.3.6) and The synchronized Statement (§14.19)',
  },
  {
    category: 'JVM',
    difficulty: 'hard',
    question:
      'How many Integer instances does the required cache keep reachable, for the values that boxing must reuse?',
    options: [
      { id: 'a', text: '256, one for each int from -128 through 127' },
      { id: 'b', text: '128, one for each int from 0 through 127' },
      { id: 'c', text: '127, one for each int from -127 through -1' },
      { id: 'd', text: 'One shared instance for every int value' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Boxing must return the same Integer for every value from -128 through 127 inclusive. That range contains 256 values, and the cache keeps those instances reachable, so they are not collected while the cache exists. 128 is outside the required range.',
    reference: 'Java Language Specification — Boxing Conversion (§5.1.7)',
  },
  {
    category: 'Exceptions',
    difficulty: 'hard',
    question:
      'ObjectOutputStream.writeObject is called with an instance whose class does not implement Serializable. What is thrown?',
    options: [
      { id: 'a', text: 'NotSerializableException' },
      { id: 'b', text: 'A compile error, because the call is rejected before it can run' },
      { id: 'c', text: 'NullPointerException, and the stream writes nothing' },
      { id: 'd', text: 'The object is replaced by null and no exception is thrown' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'writeObject checks the run-time class. If that class is not serializable, it throws NotSerializableException, whose detail message is the class name. The compiler does not reject the call, because the parameter type is Object.',
    reference: 'java.io.ObjectOutputStream.writeObject and java.io.NotSerializableException',
  },
  {
    category: 'Types and OOP',
    difficulty: 'medium',
    question:
      'Class Customer is in package com.company.model. One of its methods has no access modifier. Where can other code call that method?',
    options: [
      { id: 'a', text: 'From classes in package com.company.model' },
      { id: 'b', text: 'From every class in every package' },
      { id: 'c', text: 'Only from subclasses, including subclasses in other packages' },
      { id: 'd', text: 'Only from code in the same source file' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'A member with no access modifier is package-private. It is visible to the declaring class and to other classes in com.company.model. It is not public, and it is not visible to a subclass that lives in another package. protected would add subclasses. Same-file visibility is not a Java access level.',
    reference: 'Java Language Specification — Access Control (§6.6)',
  },
  {
    category: 'Types and OOP',
    difficulty: 'hard',
    question:
      'Which design pattern applies an operation to the elements of a tree while the client does not implement the traversal?',
    options: [
      { id: 'a', text: 'Visitor' },
      { id: 'b', text: 'Singleton' },
      { id: 'c', text: 'Factory Method' },
      { id: 'd', text: 'Adapter' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'A visitor declares an operation for each kind of node. The tree accepts the visitor and walks its children, so the client supplies the operation without writing the traversal. Singleton limits instances, Factory Method creates objects, and Adapter changes one interface into another.',
    reference: 'Gamma, Helm, Johnson, Vlissides — Design Patterns, Visitor',
  },
  {
    category: 'Collections',
    difficulty: 'easy',
    question: 'Which call adds an element at the end of an ArrayList?',
    options: [
      { id: 'a', text: 'list.add(element)' },
      { id: 'b', text: 'list.push(element)' },
      { id: 'c', text: 'list.insert(element)' },
      { id: 'd', text: 'list.append(element)' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'List.add(E) appends the element and returns true. ArrayList implements that method. push, insert, and append are not methods of List or ArrayList.',
    reference: 'java.util.ArrayList.add',
  },
  {
    category: 'JVM',
    difficulty: 'easy',
    question: 'What is the classpath for?',
    options: [
      {
        id: 'a',
        text: 'It lists the locations where the JVM and the tools look for user classes and resources',
      },
      { id: 'b', text: 'It sets the maximum size of the heap' },
      { id: 'c', text: 'It names the method that the launcher calls' },
      { id: 'd', text: 'It is the folder where .java files must be saved' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'The classpath is a search path of directories and jars. The launcher and the compiler use it to load application classes and resources. The heap limit is -Xmx, and the entry point is the main method. Source files are not required to live on the classpath.',
    reference: 'java launcher — classpath',
  },
  {
    category: 'Types and OOP',
    difficulty: 'easy',
    question: 'Where is @Override placed, and what does the compiler do with it?',
    options: [
      {
        id: 'a',
        text: 'Immediately before a method that is meant to override another method. The compiler rejects the method if no overridable method has a matching signature',
      },
      { id: 'b', text: 'After the method body, as a comment the compiler ignores' },
      { id: 'c', text: 'Only on a class, where it makes every method final' },
      { id: 'd', text: 'Only on a static method, where it enables overriding' },
    ],
    correctOptionIds: ['a'],
    explanation:
      '@Override is a method annotation. It tells the compiler that the method must override a superclass method or implement an interface method. A wrong name or parameter list then fails compilation instead of declaring a new method. Static methods are hidden, not overridden.',
    reference: 'java.lang.Override',
  },
];

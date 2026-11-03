export const javaFaqFrench = [
  {
    question:
      'Deux classes dans le même paquet : Test déclare des champs int protected x et y sans initialisation explicite, et Main affiche t.x et t.y pour un new Test(). Qu’est-ce qui est affiché ?',
    options: {
      a: '0 0',
      b: 'null null',
      c: 'Le programme ne compile pas car les champs protected sont inaccessibles',
      d: 'Le programme lève une NullPointerException',
    },
    explanation:
      'Un membre protected est visible des autres classes du même paquet, donc Main peut lire les champs. Les champs d’instance entiers non initialisés reçoivent la valeur par défaut 0.',
  },
  {
    question:
      'Que se passe-t-il lorsqu’une boucle for utilise le littéral entier 1 comme condition, comme dans for (int i = 0; 1; i++) ?',
    options: {
      a: 'Le programme ne compile pas',
      b: 'Le corps de la boucle s’exécute une fois puis sort',
      c: 'La boucle tourne indéfiniment',
      d: 'La boucle ne s’exécute jamais',
    },
    explanation:
      'Contrairement à C et C++, Java exige une expression booléenne là où un booléen est attendu. Un int comme 1 n’est pas une condition de boucle valide, donc le code ne compile pas. Écrire true à la place compilerait.',
  },
  {
    question:
      'Une classe déclare une méthode d’instance non statique fun() et appelle fun() directement depuis public static void main. Que se passe-t-il ?',
    options: {
      a: 'Le programme ne compile pas',
      b: 'fun s’exécute et se termine normalement',
      c: 'L’appel lève une NullPointerException',
      d: 'L’appel lève une IllegalAccessError',
    },
    explanation:
      'Une méthode static n’a pas d’instance réceptrice. Appeler une méthode d’instance sans référence d’objet est une erreur de compilation. Rendre fun static permettrait l’appel.',
  },
  {
    question:
      'Quelle affirmation sur une variable locale static déclarée à l’intérieur d’une méthode Java est correcte ?',
    options: {
      a: 'Java n’autorise pas les variables locales static ; la déclaration ne compile pas',
      b: 'Elle est initialisée une fois et conserve sa valeur entre les appels, comme en C++',
      c: 'Elle n’est autorisée que dans les méthodes static',
      d: 'Elle est autorisée et partagée par chaque instance de la classe',
    },
    explanation:
      'Contrairement à C++, Java interdit le modificateur static sur une variable locale. Un champ static doit être déclaré comme membre de classe, pas dans le corps d’une méthode.',
  },
  {
    question:
      'La classe Point ne déclare qu’un constructeur Point(int x, int y). Une autre classe du même paquet exécute new Point(). Que se passe-t-il ?',
    options: {
      a: 'Le programme ne compile pas car aucun constructeur sans argument n’existe',
      b: 'Un Point est créé avec x et y égaux à 0',
      c: 'Un Point est créé avec x et y égaux à null',
      d: 'L’appel lève une InstantiationException',
    },
    explanation:
      'Lorsqu’une classe déclare un constructeur, le compilateur ne fournit pas de constructeur par défaut sans argument. new Point() ne compile donc pas, même si les champs protected seraient accessibles dans le même paquet.',
  },
  {
    question:
      'Une méthode de superclasse est protected. Une sous-classe la redéfinit et déclare la redéfinition avec un accès package-private (par défaut). Que se passe-t-il ?',
    options: {
      a: 'Le programme ne compile pas',
      b: 'La méthode de la sous-classe s’exécute lorsqu’elle est appelée sur une instance de sous-classe',
      c: 'La méthode de la superclasse s’exécute toujours',
      d: 'La redéfinition est ignorée à l’exécution',
    },
    explanation:
      'Une méthode qui redéfinit ne doit pas réduire l’accessibilité. Package-private est plus restrictif que protected, donc la redéfinition est rejetée à la compilation. Élargir l’accès, par exemple en public, est autorisé.',
  },
  {
    question:
      'Deux surcharges existent : gfg(String) et gfg(Object). Que affiche gfg(null) ?',
    options: {
      a: 'String',
      b: 'Object',
      c: 'L’appel ne compile pas',
      d: 'L’appel lève une NullPointerException',
    },
    explanation:
      'Pour la résolution de surcharge, le compilateur choisit la méthode applicable la plus spécifique. String est un type plus spécifique que Object, donc gfg(String) est sélectionnée pour un argument null.',
  },
  {
    question:
      'Trois surcharges existent : gfg(String), gfg(Object) et gfg(Integer). Que se passe-t-il lorsque le programme appelle gfg(null) ?',
    options: {
      a: 'L’appel ne compile pas car String et Integer sont aussi spécifiques l’un que l’autre',
      b: 'gfg(String) s’exécute',
      c: 'gfg(Integer) s’exécute',
      d: 'gfg(Object) s’exécute',
    },
    explanation:
      'String et Integer sont tous deux plus spécifiques que Object, mais aucun n’est plus spécifique que l’autre. L’argument null rend donc l’invocation ambiguë et le code ne compile pas.',
  },
  {
    question:
      'Étant donné String s1 = "abc"; String s2 = s1; puis s1 += "d"; qu’affiche System.out.println(s1 + " " + s2 + " " + (s1 == s2)) ?',
    options: {
      a: 'abcd abc false',
      b: 'abcd abcd true',
      c: 'abcd abc true',
      d: 'abc abc false',
    },
    explanation:
      'String est immuable. s1 += "d" crée une nouvelle String "abcd" et réaffecte s1, tandis que s2 pointe encore vers "abc". Les deux références diffèrent donc, et == vaut false.',
  },
  {
    question:
      'Étant donné StringBuffer sb1 = new StringBuffer("abc"); StringBuffer sb2 = sb1; puis sb1.append("d"); qu’affichent sb1, sb2 et (sb1 == sb2) ?',
    options: {
      a: 'abcd abcd true',
      b: 'abcd abc false',
      c: 'abcd abc true',
      d: 'abc abc true',
    },
    explanation:
      'StringBuffer est mutable. append modifie le tampon partagé sur place, et sb1 et sb2 désignent toujours le même objet, donc les deux affichent abcd et == vaut true.',
  },
  {
    question:
      'First, Second et Third ont chacune un constructeur sans argument qui affiche respectivement "a", "b" et "c". Second étend First et Third étend Second. Qu’est-ce qui est affiché lorsque new Third() s’exécute ?',
    options: {
      a: 'a puis b puis c',
      b: 'c puis b puis a',
      c: 'Seulement c',
      d: 'Seulement a',
    },
    explanation:
      'Avant d’exécuter le corps d’un constructeur, celui-ci invoque un constructeur de superclasse. Créer Third exécute donc le constructeur de First, puis celui de Second, puis celui de Third, affichant a, b et c dans cet ordre.',
  },
  {
    question:
      'First a int i = 10 et un constructeur First(int j) qui affiche i puis affecte this.i = j * 10. Second étend First, appelle super(j), affiche i, puis affecte this.i = j * 20. Que produit new Second(20) suivi de l’affichage de n.i ?',
    options: {
      a: '10 puis 200 puis 400',
      b: '10 puis 20 puis 400',
      c: '0 puis 200 puis 400',
      d: '10 puis 200 puis 200',
    },
    explanation:
      'Second hérite de i. Le constructeur de First affiche d’abord la valeur d’initialiseur de champ 10, puis met i à 200. Second affiche ensuite 200 et met i à 400, valeur que l’appelant affiche en dernier.',
  },
  {
    question:
      'Une sous-classe de Thread est démarrée avec start(), puis stop() est appelé, puis start() est rappelé sur la même instance. Que se passe-t-il ?',
    options: {
      a: 'Une IllegalThreadStateException est levée à l’exécution',
      b: 'Le thread exécute sa méthode run une seconde fois',
      c: 'Le second appel à start est ignoré',
      d: 'Le programme ne compile pas car stop a été retiré',
    },
    explanation:
      'Une instance de Thread ne peut être démarrée qu’une seule fois. Rappeler start, même après stop, lève IllegalThreadStateException. stop est lui-même déprécié et dangereux, mais c’est le second start qui échoue ici.',
  },
  {
    question:
      'String s1 = new String("tulasi"); String s2 = new String("tulasi"); Qu’affiche if (s1 == s2) lorsque les branches affichent "Equal" ou "Not equal" ?',
    options: {
      a: 'Not equal',
      b: 'Equal',
      c: 'La comparaison ne compile pas',
      d: 'La comparaison lève une NullPointerException',
    },
    explanation:
      '== compare l’identité des objets. Chaque new String(...) alloue un objet distinct, donc les références diffèrent et le programme affiche Not equal. s1.equals(s2) comparerait le contenu des caractères et afficherait Equal.',
  },
  {
    question:
      'Une superclasse déclare final public int calc(int a, int b). Une sous-classe déclare public int calc(int a, int b) avec un corps différent. Que se passe-t-il ?',
    options: {
      a: 'Le programme ne compile pas',
      b: 'La méthode de la sous-classe redéfinit celle de la superclasse',
      c: 'La méthode de la sous-classe masque celle de la superclasse',
      d: 'Les deux méthodes coexistent et l’appel est ambigu',
    },
    explanation:
      'Une méthode d’instance final ne peut pas être redéfinie. Déclarer la même signature d’instance dans une sous-classe est une erreur de compilation.',
  },
  {
    question:
      'Après Integer a = 128, b = 128; Integer c = 100, d = 100; que valent a == b et c == d ?',
    options: {
      a: 'false puis true',
      b: 'true puis true',
      c: 'false puis false',
      d: 'true puis false',
    },
    explanation:
      'Le boxing réutilise des instances Integer mises en cache pour les valeurs de -128 à 127. 100 est dans cette plage, donc c et d peuvent partager un même objet et == vaut true. 128 est hors de la plage de cache exigée, donc a == b vaut false.',
  },
];

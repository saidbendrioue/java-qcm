export const welovedevsFrench = [
  {
    question:
      'Quelle instruction écrit les caractères welovedev sur la sortie standard, puis termine la ligne ?',
    options: {
      a: 'System.out.println("welovedev");',
      b: 'System.out.print("welovedev");',
      c: 'console.log("welovedev");',
      d: 'System.writeLine("welovedev");',
    },
    explanation:
      'System.out est le flux de sortie standard. println écrit le texte, puis un séparateur de ligne. print écrit les mêmes caractères sans terminer la ligne. console.log appartient à JavaScript, et System n’a pas de méthode writeLine.',
  },
  {
    question: `Combien de fois la condition (a++ < 15) est-elle évaluée ?

int a = 3;
while (a++ < 15) {
    if ((a++ % 5) == 0)
        break;
}`,
    options: {
      a: '4',
      b: '3',
      c: '5',
      d: '6',
    },
    explanation:
      'La condition s’exécute quatre fois, avec a égal à 3, 5, 7 puis 9 avant chaque post-incrémentation. Chaque test est vrai. Le corps incrémente ensuite a une seconde fois, et le quatrième corps voit 10 : 10 % 5 == 0, donc break quitte la boucle. break n’évalue pas la condition une fois de plus.',
  },
  {
    question: 'Quel nom de paquet suit la convention habituelle en Java ?',
    options: {
      a: 'com.company.model',
      b: 'Com.Company.Model',
      c: 'com-company-model',
      d: 'COM_COMPANY_MODEL',
    },
    explanation:
      'Un nom de paquet est une suite d’identifiants séparés par des points. La convention est le tout en minuscules, souvent à partir d’un nom de domaine inversé : com.company.model est la forme habituelle. Un tiret n’est pas autorisé dans un identifiant, et un seul nom en majuscules n’est pas un paquet imbriqué.',
  },
  {
    question: 'Quelle affirmation distingue une interface d’une classe abstraite ?',
    options: {
      a: 'Une classe étend une seule classe et peut implémenter plusieurs interfaces. Une classe abstraite peut déclarer des constructeurs et des champs d’instance. Une interface ne peut déclarer ni constructeur ni champ d’instance',
      b: 'Une classe peut étendre plusieurs classes abstraites et une seule interface',
      c: 'Une interface se crée avec new, et une classe abstraite ne peut pas contenir de méthode concrète',
      d: 'Une classe abstraite ne peut pas déclarer de constructeur, alors qu’une interface le peut',
    },
    explanation:
      'Une classe a une seule superclasse directe et peut implémenter autant d’interfaces qu’elle veut. Une classe abstraite peut porter un état d’instance et s’initialise par un constructeur, même si new ne peut pas l’instancier. Les champs d’une interface sont des constantes, et une interface n’a pas de constructeur. Elle peut toutefois fournir des méthodes par défaut et statiques.',
  },
  {
    question: 'La sérialisation d’un objet peut être personnalisée en implémentant Externalizable.',
    options: {
      a: 'Vrai',
      b: 'Faux',
    },
    explanation:
      'Externalizable étend Serializable. La classe implémente writeExternal et readExternal, puis contrôle les octets qu’elle enregistre et restaure, au lieu de s’en remettre seulement à la sérialisation par défaut des champs.',
  },
  {
    question: 'Qu’est-ce qu’un moniteur en Java ?',
    options: {
      a: 'Le verrou intrinsèque d’un objet. synchronized l’utilise pour qu’un seul thread à la fois exécute le code protégé',
      b: 'Un thread d’arrière-plan qui affiche chaque appel de méthode',
      c: 'Le ramasse-miettes',
      d: 'Une option du lanceur qui fixe la taille maximale du tas',
    },
    explanation:
      'Chaque objet possède un verrou intrinsèque, aussi appelé son moniteur. Entrer dans une méthode ou un bloc synchronized acquiert ce verrou, et en sortir le relâche. Les autres threads qui ont besoin du même moniteur attendent. Le ramasse-miettes et la taille du tas n’ont pas de rapport.',
  },
  {
    question:
      'Combien d’instances de Integer le cache exigé garde-t-il accessibles, pour les valeurs que le boxing doit réutiliser ?',
    options: {
      a: '256, une pour chaque int de -128 à 127 inclus',
      b: '128, une pour chaque int de 0 à 127',
      c: '127, une pour chaque int de -127 à -1',
      d: 'Une seule instance partagée pour chaque valeur int',
    },
    explanation:
      'Le boxing doit renvoyer le même Integer pour chaque valeur de -128 à 127 inclus. Cette plage contient 256 valeurs, et le cache garde ces instances accessibles : elles ne sont pas récupérées tant que le cache existe. 128 est en dehors de la plage exigée.',
  },
  {
    question:
      'ObjectOutputStream.writeObject est appelé avec une instance dont la classe n’implémente pas Serializable. Qu’est-ce qui est levé ?',
    options: {
      a: 'NotSerializableException',
      b: 'Une erreur de compilation, car l’appel est rejeté avant de pouvoir s’exécuter',
      c: 'NullPointerException, et le flux n’écrit rien',
      d: 'L’objet est remplacé par null et aucune exception n’est levée',
    },
    explanation:
      'writeObject examine la classe à l’exécution. Si cette classe n’est pas sérialisable, il lève NotSerializableException, dont le message de détail est le nom de la classe. Le compilateur ne rejette pas l’appel, car le type du paramètre est Object.',
  },
  {
    question:
      'La classe Customer est dans le paquet com.company.model. L’une de ses méthodes n’a pas de modificateur d’accès. D’où le reste du code peut-il appeler cette méthode ?',
    options: {
      a: 'Depuis les classes du paquet com.company.model',
      b: 'Depuis toutes les classes de tous les paquets',
      c: 'Seulement depuis les sous-classes, y compris celles d’autres paquets',
      d: 'Seulement depuis le code du même fichier source',
    },
    explanation:
      'Un membre sans modificateur d’accès est package-private. Il est visible pour la classe qui le déclare et pour les autres classes de com.company.model. Il n’est pas public, et il n’est pas visible pour une sous-classe qui vit dans un autre paquet. protected ajouterait les sous-classes. La visibilité limitée au fichier n’est pas un niveau d’accès Java.',
  },
  {
    question:
      'Quel patron de conception applique une opération aux éléments d’un arbre sans que le client écrive le parcours ?',
    options: {
      a: 'Visitor',
      b: 'Singleton',
      c: 'Factory Method',
      d: 'Adapter',
    },
    explanation:
      'Un visiteur déclare une opération pour chaque sorte de nœud. L’arbre accepte le visiteur et parcourt ses enfants : le client fournit l’opération sans écrire le parcours. Singleton limite le nombre d’instances, Factory Method crée des objets, et Adapter transforme une interface en une autre.',
  },
  {
    question: 'Quel appel ajoute un élément à la fin d’une ArrayList ?',
    options: {
      a: 'list.add(element)',
      b: 'list.push(element)',
      c: 'list.insert(element)',
      d: 'list.append(element)',
    },
    explanation:
      'List.add(E) ajoute l’élément à la fin et renvoie true. ArrayList implémente cette méthode. push, insert et append ne sont pas des méthodes de List ni d’ArrayList.',
  },
  {
    question: 'À quoi sert le classpath ?',
    options: {
      a: 'Il liste les emplacements où la JVM et les outils cherchent les classes et les ressources de l’application',
      b: 'Il fixe la taille maximale du tas',
      c: 'Il nomme la méthode que le lanceur appelle',
      d: 'C’est le dossier dans lequel les fichiers .java doivent être enregistrés',
    },
    explanation:
      'Le classpath est un chemin de recherche composé de répertoires et de jars. Le lanceur et le compilateur s’en servent pour charger les classes et les ressources de l’application. La limite du tas est -Xmx, et le point d’entrée est la méthode main. Les sources n’ont pas à se trouver sur le classpath.',
  },
  {
    question: 'Où place-t-on @Override, et que fait le compilateur avec cette annotation ?',
    options: {
      a: 'Juste avant une méthode qui doit en redéfinir une autre. Le compilateur rejette la méthode si aucune méthode redéfinissable n’a une signature correspondante',
      b: 'Après le corps de la méthode, comme un commentaire que le compilateur ignore',
      c: 'Seulement sur une classe, où elle rend toutes les méthodes final',
      d: 'Seulement sur une méthode statique, où elle autorise la redéfinition',
    },
    explanation:
      '@Override est une annotation de méthode. Elle indique au compilateur que la méthode doit redéfinir une méthode de la superclasse ou implémenter une méthode d’interface. Un mauvais nom ou une mauvaise liste de paramètres fait alors échouer la compilation, au lieu de déclarer une nouvelle méthode. Les méthodes statiques sont masquées, pas redéfinies.',
  },
];

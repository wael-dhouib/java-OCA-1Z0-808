window.EXAM_DATA = [
  {
    "id": "1.926",
    "topic": "Working with Methods - Overloading",
    "question": "Consider the following class...\nclass TestClass{\nvoid probe(Object x) { System.out.println(\"In Object\"); } //3\nvoid probe(Number x) { System.out.println(\"In Number\"); } //2\nvoid probe(Integer x) { System.out.println(\"In Integer\"); } //2\nvoid probe(Long x) { System.out.println(\"In Long\"); } //4\npublic static void main(String[] args){\ndouble a = 10;\nnew TestClass().probe(a);\n}\n}\nWhat will be printed?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "In Number"
      },
      {
        "label": "B",
        "text": "In Object"
      },
      {
        "label": "C",
        "text": "In Long"
      },
      {
        "label": "D",
        "text": "In Integer"
      },
      {
        "label": "E",
        "text": "It will not compile."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Here, we have four overloaded probe methods but there is no probe method that takes a double parameter.\nHowever, a double will be boxed into a Double and class Double extends Number. Therefore, a Double can be\npassed to the method that takes Number. A Double can also be passed to a method that takes Object, but Number is\nmore specific than Object therefore probe(Number ) will be called.\nWe advise you to run this program and try out various combinations. The exam has questions on this pattern."
  },
  {
    "id": "2.826",
    "topic": "Handling Exceptions",
    "question": "What will be the output when the following program is run?\npackage exceptions;\npublic class TestClass {\npublic static void main(String[] args) {\ntry{\ndoTest();\n}\ncatch(MyException me){\nSystem.out.println(me);\n}\n}\nstatic void doTest() throws MyException{\nint[] array = new int[10];\narray[10] = 1000;\ndoAnotherTest();\n}\nstatic void doAnotherTest() throws MyException{\nthrow new MyException(\"Exception from doAnotherTest\");\n}\n}\nclass MyException extends Exception {\npublic MyException(String msg){\nsuper(msg);\n}\n}\n(Assume that there is no error in the line numbers given in the options.)",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "Exception in thread \"main\" java.lang.ArrayIndexOutOfBoundsException: 10\nat exceptions.TestClass.doTest(TestClass.java:14)\nat exceptions.TestClass.main(TestClass.java:5)"
      },
      {
        "label": "B",
        "text": "Error in thread \"main\" java.lang.ArrayIndexOutOfBoundsException"
      },
      {
        "label": "C",
        "text": "exceptions.MyException: Exception from doAnotherTest"
      },
      {
        "label": "D",
        "text": "exceptions.MyException: Exception from doAnotherTest\nat exceptions.TestClass.doAnotherTest(TestClass.java:29)\nat exceptions.TestClass.doTest(TestClass.java:25)\nat exceptions.TestClass.main(TestClass.java:14)"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Note that there are a few questions in the exam that test your knowledge about how exception messages are\nprinted.\nWhen you use System.out.println(exception), a stack trace is not printed. Just the name of the exception class\n\nand the message is printed.\nWhen you use exception.printStackTrace(), a complete chain of the names of the methods called, along with\nthe line numbers, is printed. It contains the names of the methods in the chain of method calls that led to the place\nwhere the exception was created going back up to the point where the thread, in which the exception was created,\nwas started."
  },
  {
    "id": "2.827",
    "topic": "Handling Exceptions",
    "question": "What will be the output when the following program is run?\npackage exceptions;\npublic class TestClass{\npublic static void main(String[] args) {\ntry{\nhello();\n}\ncatch(MyException me){\nSystem.out.println(me);\n}\n}\nstatic void hello() throws MyException{\nint[] dear = new int[7];\ndear[0] = 747;\nfoo();\n}\nstatic void foo() throws MyException{\nthrow new MyException(\"Exception from foo\");\n}\n}\nclass MyException extends Exception {\npublic MyException(String msg){\nsuper(msg);\n}\n}\n(Assume that line numbers printed in the messages given below are correct.)",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "Exception in thread \"main\" java.lang.ArrayIndexOutOfBoundsException: 10\nat exceptions.TestClass.doTest(TestClass.java:24)\nat exceptions.TestClass.main(TestClass.java:14)"
      },
      {
        "label": "B",
        "text": "Error in thread \"main\" java.lang.ArrayIndexOutOfBoundsException"
      },
      {
        "label": "C",
        "text": "exceptions.MyException: Exception from foo"
      },
      {
        "label": "D",
        "text": "exceptions.MyException: Exception from foo\nat exceptions.TestClass.foo(TestClass.java:29)\nat exceptions.TestClass.hello(TestClass.java:25)\nat exceptions.TestClass.main(TestClass.java:14)"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Note that there are a few questions in the exam that test your knowledge about how exception messages are\nprinted.\nWhen you use System.out.println(exception), a stack trace is not printed. Just the name of the exception class\nand the message is printed.\nWhen you use exception.printStackTrace(), a complete chain of the names of the methods called, along with\n\nthe line numbers, is printed. It contains the names of the methods in the chain of method calls that led to the place\nwhere the exception was created going back up to the point where the thread, in which the exception was created,\nwas started."
  },
  {
    "id": "2.828",
    "topic": "Java Basics",
    "question": "Consider the following code appearing in a file named TestClass.java:\nclass Test{ } // 1\npublic class TestClass {\npublic int main(String[] args) { // 2\ndouble x=10, double y; // 3\nSystem.out.println[]; // 4\nfor(int k =0; k<x; k++){ } //5\nreturn 0;\n}\n}\nWhich of the lines are invalid?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "// 1 and // 4"
      },
      {
        "label": "B",
        "text": "// 3 and // 4"
      },
      {
        "label": "C",
        "text": "// 2 and // 4"
      },
      {
        "label": "D",
        "text": "// 2 and // 3"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "// 1 is valid because it is a valid code that declares a class.\n// 2 is a valid declaration of a method named main. Although, it is not a correct declaration for the standard main\nmethod that can be used to execute the class, but it is a valid method nevertheless.\n// 3 is invalid syntax. It can be written as either double x=10; double y; or double x=10, y;\nNote that even though x is a double and 10 is an int, it is valid because 10 will automatically be converted to a\ndouble. The reverse would not be valid i.e. int x = 10.0; will be invalid.\nYou need a cast for that: int x = (int) 10.0;\n//4 is invalid because println is not a class name. So you cannot create an array of it. println is a method. So it\nshould be written as System.out.println();\n//5 is a valid declaration of a for loop."
  },
  {
    "id": "2.829",
    "topic": "Working with Methods",
    "question": "What will the following program print when compiled and run:\npublic class TestClass {\npublic static void main(String[] args) {\nsomeMethod();\n}\nstatic void someMethod(Object parameter) {\nSystem.out.println(\"Value is \"+parameter);\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It will not compile."
      },
      {
        "label": "B",
        "text": "Value is null"
      },
      {
        "label": "C",
        "text": "Value is"
      },
      {
        "label": "D",
        "text": "It will throw a NullPointerException at run time."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": ""
  },
  {
    "id": "2.830",
    "topic": "Working with Methods",
    "question": "Consider the following method :\npublic void myMethod(int m, Object p, double d){\n... valid code here\n}\nAssuming that there is no other method with the same name, which of the following options are correct regarding\nthe above method?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "If this method is called with two parameters, the value of d in the method will be 0.0."
      },
      {
        "label": "B",
        "text": "If this method is called with one parameter, the value of p and d in the method will be null and 0.0 respectively."
      },
      {
        "label": "C",
        "text": "If this method is called with one parameter, the call will throw a NullPointerException."
      },
      {
        "label": "D",
        "text": "If this method is called with one parameter, the call will throw a NullPointerException only if the code in the method tries to access p."
      },
      {
        "label": "E",
        "text": "If this method is called with two parameters, the code will not compile."
      }
    ],
    "correctAnswers": [
      "E"
    ],
    "explanation": "To call myMethod(int m, Object p, double d), you must pass exactly three parameters. If you try to pass less\n(or more) number of parameters, the code will not compile. Note that method parameters are not assigned default\nvalues.\nIt is possible to declare a method that can take variable number of parameters. For example:\npublic static void someMethod(Object... params){\nSystem.out.println(params.length);\n}\nYou can call this method by passing any number of parameters. In this case, calling someMethod() without any\nparameter will print 0. i.e. the length of params array will be 0. params will NOT be null."
  },
  {
    "id": "2.831",
    "topic": "Working with Methods",
    "question": "What will the following program print when run?\npublic class ChangeTest {\nprivate int myValue = 0;\npublic void showOne(int myValue){\nmyValue = myValue;\nSystem.out.println(this.myValue);\n}\npublic void showTwo(int myValue){\nthis.myValue = myValue;\nSystem.out.println(this.myValue);\n}\npublic static void main(String[] args) {\nChangeTest ct = new ChangeTest();\nct.showOne(100);\nct.showTwo(200);\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "0 followed by 100."
      },
      {
        "label": "B",
        "text": "100 followed by 100."
      },
      {
        "label": "C",
        "text": "0 followed by 200."
      },
      {
        "label": "D",
        "text": "100 followed by 200."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "There are a couple of important concepts in this question:\n1. Within an instance method, you can access the current object of the same class using 'this'. Therefore, when\nyou access this.myValue, you are accessing the instance member myValue of the ChangeTest instance.\n2. Within the showOne() method, there are two variables accessible with the same name myValue. If you declare a\nlocal variable (or a method parameter) with the same name as the instance field name, the local variable \"shadows\"\nthe member field. One is the method parameter and another is the member field of ChangeTest object. Ideally, you\nshould be able to access the member field in the method directly by using the name of the member (in this\nexample, myValue). However, because of shadowing, when you use myValue, it refers to the local variable instead\nof the instance field.\nTherefore, when you do : myValue = myValue; you are actually assigning the value contained in method\nparameter myValue to itself. You are not changing the member field myValue. Hence, when you do\nSystem.out.println(this.myValue); in the next line, it prints 0.\nNow, in showTwo(), you are assigning the value contained in myValue (i.e. 200) to this.myValue, which is the\ninstance member. Therefore, in the next line, when you print this.myValue, it prints 200."
  },
  {
    "id": "2.832",
    "topic": "Working with Methods",
    "question": "What will the following program print when run?\npublic class ChangeTest {\nprivate int myValue = 0;\npublic void showOne(int myValue){\nmyValue = myValue;\n}\npublic void showTwo(int myValue){\nthis.myValue = myValue;\n}\npublic static void main(String[] args) {\nChangeTest ct = new ChangeTest();\nct.showOne(100);\nSystem.out.println(ct.myValue);\nct.showTwo(200);\nSystem.out.println(ct.myValue);\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "0 followed by 100."
      },
      {
        "label": "B",
        "text": "100 followed by 100."
      },
      {
        "label": "C",
        "text": "0 followed by 200."
      },
      {
        "label": "D",
        "text": "100 followed by 200."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "There are a couple of important concepts in this question:\n1. Within an instance method, you can access the current object of the same class using 'this'. Therefore, when\nyou access this.myValue, you are accessing the instance member myValue of the ChangeTest instance.\n2. If you declare a local variable (or a method parameter) with the same name as the instance field name, the local\nvariable \"shadows\" the member field. Ideally, you should be able to access the member field in the method directly\nby using the name of the member (in this example, myValue). However, because of shadowing, when you use\nmyValue, it refers to the local variable instead of the instance field.\nWithin the showOne() method, there are two variables accessible with the same name myValue. One is the method\nparameter and another is the member field of ChangeTest object. Ideally, you should be able to access the member\nfield in the method directly by using the name myValue but in this case, the method parameter shadows the\nmember field because it has the same name. So when you use myValue, you are actually using the method\nparameter instead of the member field.\nTherefore, when you do : myValue = myValue; you are actually assigning the value contained in method\nparameter myValue to itself. You are not changing the member field myValue. Hence, when you do\nSystem.out.println(ct); in the next line, it prints 0.\nNow, in showTwo(), you are assigning the value contained in myValue (i.e. 200) to this.myValue, which is the\ninstance member. Therefore, in the next line, when you print ct.myValue, it prints 200."
  },
  {
    "id": "2.833",
    "topic": "Working with Methods",
    "question": "What will the following program print when run?\npublic class ChangeTest {\nprivate int myValue = 0;\npublic void showOne(int myValue){\nmyValue = myValue;\n}\npublic void showTwo(int myValue){\nthis.myValue = myValue;\n}\npublic static void main(String[] args) {\nChangeTest ct = new ChangeTest();\nct.showTwo(200);\nSystem.out.println(ct.myValue);\nct.showOne(100);\nSystem.out.println(ct.myValue);\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "0 followed by 100."
      },
      {
        "label": "B",
        "text": "100 followed by 100."
      },
      {
        "label": "C",
        "text": "0 followed by 200."
      },
      {
        "label": "D",
        "text": "100 followed by 200."
      },
      {
        "label": "E",
        "text": "200 followed by 200."
      },
      {
        "label": "F",
        "text": "200 followed by 100"
      }
    ],
    "correctAnswers": [
      "E"
    ],
    "explanation": "There are a couple of important concepts in this question:\n1. Within an instance method, you can access the current object of the same class using 'this'. Therefore, when\nyou access this.myValue, you are accessing the instance member myValue of the ChangeTest instance.\n2. If you declare a local variable (or a method parameter) with the same name as the instance field name, the local\nvariable \"shadows\" the member field. Ideally, you should be able to access the member field in the method directly\nby using the name of the member (in this example, myValue). However, because of shadowing, when you use\nmyValue, it refers to the local variable instead of the instance field.\nIn showTwo method, there are two variables accessible with the same name myValue. One is the method parameter\nand another is the member field of ChangeTest object. Ideally, you should be able to access the member field in\nthe method directly by using the name myValue but in this case, the method parameter shadows the member field\nbecause it has the same name. So by doing this.myValue, you are changing the instance variable myValue by\nassigning it the value contained in local variable myValue, which is 200. So in the next line when you print\nct.myValue, it prints 200.\nNow, in the showOne method also, there are two variables accessible with the same name myValue. One is the\nmethod parameter and another is the member field of ChangeTest object. So when you use myValue, you are\nactually using the method parameter instead of the member field.\nTherefore, when you do : myValue = myValue; you are actually assigning the value contained in method\n\nparameter myValue to itself. You are not changing the member field myValue. Hence, when you do\nSystem.out.println(ct.myValue); in the next line, it still prints 200."
  },
  {
    "id": "2.834",
    "topic": "Handling Exceptions",
    "question": "Consider the following\npublic class TestClass {\npublic static void main(String[] args) {\nTestClass tc = new TestClass();\ntc.myMethod();\n}\npublic void myMethod() {\nyourMethod();\n}\npublic void yourMethod() {\nthrow new Exception();\n}\n}\nWhat changes can be done to make the above code compile?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "Change declaration of main to :\npublic static void main(String[] args) throws Exception"
      },
      {
        "label": "B",
        "text": "Change declaration of myMethod to\npublic void myMethod throws Exception"
      },
      {
        "label": "C",
        "text": "Change declaration of yourMethod to\npublic void yourMethod throws Exception"
      },
      {
        "label": "D",
        "text": "Change declaration of main and yourMethod to :\npublic static void main(String[] args) throws Exception and\npublic void yourMethod throws Exception"
      },
      {
        "label": "E",
        "text": "Change declaration of all the three method to include throws Exception."
      }
    ],
    "correctAnswers": [
      "E"
    ],
    "explanation": "java.lang.Exception is a checked Exception. Which means, the method that throws this exception must declare\nit in the throws clause. Hence, yourMethod must declare throws Exception in its throws clause.\nNow, since the call to yourMethod in myMethod can also potentially throw an exception, myMethod must also\ndeclare it in its throws clause. By the same logic, main method should also declare it in its throws clause.\nAnother alternative is to catch this exception in myMethod:\npublic void myMethod(){\ntry{\nyourMethod();\n}\ncatch(Exception e){ // since you are catching the exception thrown by yourMethod, there is\nno need to declare it in the throws clause of myMethod.\ne.printStackTrace();\n}\n}\nFurther, since a call to myMethod cannot throw Exception anymore, main method does not need to declare it either.\nYet another alternative is to catch the exception in the main method:\npublic static void main(String[] args) {\n\nTestClass tc = new TestClass();\ntry{\ntc.myMethod();\n}\ncatch(Exception e){ // since you are catching the exception thrown by myMethod, there is\nno need to declare it in the throws clause of main.\ne.printStackTrace();\n}\n}\npublic void myMethod() throws Exception{ //Notice the throws clause here.\nyourMethod();\n}"
  },
  {
    "id": "2.835",
    "topic": "Working with Java Data Types",
    "question": "Which of the following can be valid declarations of an integer variable?",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "global int x = 10;"
      },
      {
        "label": "B",
        "text": "final int x = 10;"
      },
      {
        "label": "C",
        "text": "public Int x = 10;"
      },
      {
        "label": "D",
        "text": "Int x = 10;"
      },
      {
        "label": "E",
        "text": "static int x = 10;"
      }
    ],
    "correctAnswers": [
      "B",
      "E"
    ],
    "explanation": ""
  },
  {
    "id": "2.836",
    "topic": "Working with Inheritance",
    "question": "Which of the following statements are correct?",
    "selectCount": 3,
    "options": [
      {
        "label": "A",
        "text": "An abstract class can be extended by an abstract or a concrete class."
      },
      {
        "label": "B",
        "text": "A concrete class can be extended by an abstract or a concrete class."
      },
      {
        "label": "C",
        "text": "An interface can be extended by another interface."
      },
      {
        "label": "D",
        "text": "An interface can be extended by an abstract class."
      },
      {
        "label": "E",
        "text": "An interface can be extended by a concrete class."
      },
      {
        "label": "F",
        "text": "An abstract class cannot implement an interface."
      }
    ],
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "explanation": ""
  },
  {
    "id": "2.837",
    "topic": "Working with Inheritance - instanceof",
    "question": "Consider the following code:\ninterface Flyer{ }\nclass Bird implements Flyer { }\nclass Eagle extends Bird { }\nclass Bat { }\npublic class TestClass {\npublic static void main(String[] args) {\nFlyer f = new Eagle();\nEagle e = new Eagle();\nBat b = new Bat();\nif(f instanceof Bird) System.out.println(\"f is a Bird\");\nif(e instanceof Flyer) System.out.println(\"e is a Flyer\");\nif(b instanceof Flyer) System.out.println(\"b is a Flyer\");\n}\n}\nWhat will be printed when the above code is compiled and run?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It will not compile."
      },
      {
        "label": "B",
        "text": "It will throw an exception when run."
      },
      {
        "label": "C",
        "text": "f is a Bird\ne is a Flyer"
      },
      {
        "label": "D",
        "text": "f is a Bird"
      },
      {
        "label": "E",
        "text": "e is a Flyer"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Note that there is no compilation issue with b instanceof Flyer because Flyer is an interface and it is possible\nfor b to point to an object of a class that is a sub class of Bat and also implements Flyer. So the compiler doesn't\ncomplain. If you make Bat class as final, b instanceof Flyer will not compile because the compiler knows that it\nis not possible for b to point to an object of a class that implements Flyer."
  },
  {
    "id": "2.839",
    "topic": "Working with Inheritance",
    "question": "How can you fix the following code to make it compile:\nimport java.io.*;\nclass Great {\npublic void doStuff() throws FileNotFoundException{\n}\n}\nclass Amazing extends Great {\npublic void doStuff() throws IOException, IllegalArgumentException{\n}\n}\npublic class TestClass {\npublic static void main(String[] args) throws IOException{\nGreat g = new Amazing();\ng.doStuff();\n}\n}\nAssume that changes suggested in a option are to be applied independent of other options.",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "Change doStuff in Amazing to throw only IllegalArgumentException."
      },
      {
        "label": "B",
        "text": "Change doStuff in Great to throw FileNotFoundException and IllegalArgumentException."
      },
      {
        "label": "C",
        "text": "Change doStuff in Amazing to throw only IOException."
      },
      {
        "label": "D",
        "text": "Change doStuff in Great to throw only IOException instead of FileNotFoundException."
      },
      {
        "label": "E",
        "text": "Replace g.doStuff() to ((Amazing) g).doStuff()."
      }
    ],
    "correctAnswers": [
      "A",
      "D"
    ],
    "explanation": "The rule is that an overriding method cannot throw an exception that is a super class of the exception thrown by\nthe overridden method.\nNow, FileNotFoundException is a subclass of IOException. Therefore, Amazing's doStuff() cannot throw\nIOException if the base class's doStuff throws only FileNotFoundException.\nThink of it this way:\nFileNotFoundException fne = new IOException(); // Will this work? No, because an IOException is\nNOT a FileNotFoundException.\nIOException ioe = new FileNotFoundException(); // Will this work? Yes, because a\nFileNotFoundException is an IOException.\nTherefore, overriding method must not throw an exception that cannot be assigned to a variable whose class is the\nclass of the overridden method's exception."
  },
  {
    "id": "2.840",
    "topic": "Java Basics",
    "question": "What will be the output of the following program when it is compiled and run with the command line:\njava TestClass 1 2 3\npublic class TestClass {\npublic static void main(String[] args) {\nSystem.out.println(\"Values : \"+args[0]+args[1]);\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "Values : java TestClass"
      },
      {
        "label": "B",
        "text": "Values : TestClass 1"
      },
      {
        "label": "C",
        "text": "Values : 12"
      },
      {
        "label": "D",
        "text": "Values : 23"
      },
      {
        "label": "E",
        "text": "Values : 3"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "In Java, command line arguments are passed into the program using the String[] parameter to the main method.\nThe String array contains actual parameters and does not include java and the name of the class.\nTherefore, in this case, args will point to an array of Strings with 3 elements - \"1\", \"2\", and \"3\". The program prints\nout only args[0] and args[1], which are 1 and 2."
  },
  {
    "id": "2.841",
    "topic": "Handling Exceptions",
    "question": "You have a method that currently does not handle any exception thrown from the code contained in its method\nbody. You are now changing this method to call another method that throws IOException.\nWhat changes, independent of each other, can you make to your method so that it will compile?",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "Set the exception to null and don't rethrow it."
      },
      {
        "label": "B",
        "text": "Declare IOException in the throws clause of your method."
      },
      {
        "label": "C",
        "text": "Wrap the call to another method within a try-catch block that catches RuntimeException."
      },
      {
        "label": "D",
        "text": "Wrap the call to another method within a try-catch block that catches Exception."
      }
    ],
    "correctAnswers": [
      "B",
      "D"
    ],
    "explanation": ""
  },
  {
    "id": "2.842",
    "topic": "Handling Exceptions",
    "question": "A new Java programmer has written the following method that takes an array of integers and sums up all the\nintegers that are less than 100.\npublic void processArray(int[] values){\nint sum = 0;\nint i = 0;\ntry{\nwhile(values[i]<100){\nsum = sum +values[i];\ni++;\n}\n}\ncatch(Exception e){ }\nSystem.out.println(\"sum = \"+sum);\n}\nWhich of the following are best practices to improve this code?",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "Use ArrayIndexOutOfBoundsException for the catch argument."
      },
      {
        "label": "B",
        "text": "Use ArrayIndexOutOfBoundsException for the catch argument and add code in the catch block to log or print\nthe exception."
      },
      {
        "label": "C",
        "text": "Add code in the catch block to handle the exception."
      },
      {
        "label": "D",
        "text": "Use flow control to terminate the loop."
      }
    ],
    "correctAnswers": [
      "B",
      "D"
    ],
    "explanation": ""
  },
  {
    "id": "2.843",
    "topic": "Creating and Using Arrays",
    "question": "Given the following declaration:\nint[][] twoD = { { 1, 2, 3} , { 4, 5, 6, 7}, { 8, 9, 10 } };\nWhat will the following lines of code print?\nSystem.out.println(twoD[1].length);\nSystem.out.println(twoD[2].getClass().isArray());\nSystem.out.println(twoD[1][2]);",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "4\ntrue\n6"
      },
      {
        "label": "B",
        "text": "3\ntrue\n3"
      },
      {
        "label": "C",
        "text": "3\nfalse\n3"
      },
      {
        "label": "D",
        "text": "4\nfalse\n6"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "In Java, array numbering starts from 0. So in this case, twoD is an array containing 3 other arrays.\ntwoD[0] is { 1, 2, 3} , twoD[1] is { 4, 5, 6, 7}, and twoD[2] is { 8, 9, 10 }.\nThus, twoD[1].length is 4 and twoD[1][2] is the third element in { 4, 5, 6, 7}, which is 6.\nIn Java, arrays are just like regular Objects and arrays of different types have different class names. For example,\nthe class name of an int[] is [I and the class name for int[][] is [[I.\nFor array classes, the isArray() method of a Class returns true. For example, twoD.getClass().isArray() will\nreturn true.\nThere are a few questions in the exam that require you to know about this."
  },
  {
    "id": "2.844",
    "topic": "Java Basics - OO Concepts",
    "question": "Consider the following code:\nimport java.util.ArrayList;\npublic class Student{\nArrayList<Integer> scores;\nprivate double average;\npublic ArrayList<Integer> getScores(){ return scores; }\npublic double getAverage(){ return average; }\nprivate void computeAverage(){\n//valid code to compute average\naverage =//update average value\n}\npublic Student(){\ncomputeAverage();\n}\n}\nWhat can be done to improve the encapsulation of this class?",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "Make the class private."
      },
      {
        "label": "B",
        "text": "Make the scores instance field private."
      },
      {
        "label": "C",
        "text": "Make getScores() protected."
      },
      {
        "label": "D",
        "text": "Make computeAverage() public."
      },
      {
        "label": "E",
        "text": "Change getScores to return a copy of the scores list:\npublic ArrayList<Integer> getScores(){\nreturn new ArrayList(scores);\n}"
      }
    ],
    "correctAnswers": [
      "B",
      "E"
    ],
    "explanation": ""
  },
  {
    "id": "2.845",
    "topic": "Java Basics",
    "question": "The options below contain the complete contents of a file.\nWhich of these options can be run with the following command line once compiled?\njava main",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "//in file main.java\nclass main {\npublic void main(String[] args) {\nSystem.out.println(\"hello\");\n}\n}"
      },
      {
        "label": "B",
        "text": "//in file main.java\npublic static void main(String[] args) {\nSystem.out.println(\"hello\");\n}"
      },
      {
        "label": "C",
        "text": "//in file main.java\npublic class anotherone{\n}\nclass main {\npublic static void main(String[] args) {\nSystem.out.println(\"hello\");\n}\n}"
      },
      {
        "label": "D",
        "text": "//in file main.java\nclass anothermain{\npublic static void main(String[] args) {\nSystem.out.println(\"hello2\");\n}\n}\nclass main {\npublic final static void main(String[] args) {\nSystem.out.println(\"hello\");\n}\n}"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Observe that the given code does not follow the standard Java naming convention. The class names should start\nwith a capital letter.\nThere are questions in the exam that contain similar non-conventional and confusing names and that is why we\nhave kept a few questions like that in this question bank."
  },
  {
    "id": "2.846",
    "topic": "Handling Exceptions",
    "question": "Consider the following code:\npublic class TestClass {\npublic static void doStuff() throws Exception{\nSystem.out.println(\"Doing stuff...\");\nif(Math.random()>0.4){\nthrow new Exception(\"Too high!\");\n}\nSystem.out.println(\"Done stuff.\");\n}\npublic static void main(String[] args) throws Exception {\ndoStuff();\nSystem.out.println(\"Over\");\n}\n}\nWhich of the following are possible outputs when the above program is compiled and run?\n(Assume that Math.random() returns a double between 0.0 and 1.0 not including 1.0.\nFurther assume that there is no mistake in the line numbers printed in the output shown in the options.)",
    "selectCount": 2,
    "options": [],
    "correctAnswers": [
      "A",
      "C"
    ],
    "explanation": "There are only two possibilities:\n1. If Math.random() generates a number more than 0.4, the if part will throw an exception. In this case, the remain\ncode of doStuff will not be called and main() will receive an exception due to the call to doStuff. Since\ndoStuff() is not within a try/catch block, the exception will propagate up and the remaining code in main() will\nnot be executed either.\nSince the exception is not caught anywhere in the code, it will finally reach the JVM's thread that has called the\nmain method. This thread catches the exception and prints out the stack trace.\n2. If Math.random() generates a number not more than 0.4, if part will not be executed and \"Done stuff.\" will be\nprinted. After the call returns in main(), \"Over\" will be printed as well."
  },
  {
    "id": "2.847",
    "topic": "Using Loop Constructs",
    "question": "What will the following code print when compiled and run:\npublic class TestClass {\npublic static void main(String[] args){\nint k = 2;\nwhile(--k){\nSystem.out.println(k);\n}\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "1"
      },
      {
        "label": "B",
        "text": "1\n0"
      },
      {
        "label": "C",
        "text": "2\n1"
      },
      {
        "label": "D",
        "text": "2\n1\n0"
      },
      {
        "label": "E",
        "text": "It will keeping printing numbers in an infinite loop."
      },
      {
        "label": "F",
        "text": "It will not compile."
      }
    ],
    "correctAnswers": [
      "F"
    ],
    "explanation": ""
  },
  {
    "id": "2.848",
    "topic": "Using Loop Constructs",
    "question": "What will the following code print when compiled and run:\npublic class TestClass {\npublic static void main(String[] args){\nint k = 2;\ndo{\nSystem.out.println(k);\n}while(--k>0);\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "1"
      },
      {
        "label": "B",
        "text": "1\n0"
      },
      {
        "label": "C",
        "text": "2\n1"
      },
      {
        "label": "D",
        "text": "2\n1\n0"
      },
      {
        "label": "E",
        "text": "It will keeping printing numbers in an infinite loop."
      },
      {
        "label": "F",
        "text": "It will not compile."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": ""
  },
  {
    "id": "2.849",
    "topic": "Using Loop Constructs",
    "question": "What will the following code print when run?\npublic class TestClass {\npublic static void main(String[] args) throws Exception {\nString[] sa = {\"a\", \"b\", \"c\"};\nfor(String s : sa){\nif(\"b\".equals(s)) continue;\nSystem.out.println(s);\nif(\"b\".equals(s)) break;\nSystem.out.println(s+\" again\");\n}\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "a\na again\nc\nc again"
      },
      {
        "label": "B",
        "text": "a\na again\nb"
      },
      {
        "label": "C",
        "text": "a\na again\nb\nb again"
      },
      {
        "label": "D",
        "text": "c\nc again"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "To determine the output you have to run through the loop one iteration at a time in your mind:\nIteration 1: s is \"a\". It is not equal to \"b\" so, it will print \"a\", and then \"a again\".\nIteration 2: s is \"b\". It is equal to \"b\", so the first if will execute \"continue\", which mean the rest of the code in the\nloop will not be executed (thus b and b again will not be printed), and the next iteration will start. Note that the\nsecond if is not executed at all because of the continue in the first if.\nIteration 3: s is \"c\", both the if conditions are not satisfied. So \"c\" and \"c again\" will be printed."
  },
  {
    "id": "2.850",
    "topic": "Working with Java API - ArrayList",
    "question": "Identify the correct statements about ArrayList?",
    "selectCount": 3,
    "options": [
      {
        "label": "A",
        "text": "ArrayList extends java.util.AbstractList.\nArrayList is a subclass of AbstractList."
      },
      {
        "label": "B",
        "text": "It allows you to access its elements in random order."
      },
      {
        "label": "C",
        "text": "You must specify the class of objects you want to store in ArrayList when you declare an ArrayList variable."
      },
      {
        "label": "D",
        "text": "ArrayList does not implement RandomAccess."
      },
      {
        "label": "E",
        "text": "You can sort its elements using Collections.sort() method."
      }
    ],
    "correctAnswers": [
      "A",
      "B",
      "E"
    ],
    "explanation": ""
  },
  {
    "id": "2.851",
    "topic": "Working with Java API - ArrayList",
    "question": "Identify the correct statements about ArrayList?",
    "selectCount": 3,
    "options": [
      {
        "label": "A",
        "text": "Standard JDK provides no subclasses of ArrayList."
      },
      {
        "label": "B",
        "text": "You cannot store primitives in an ArrayList."
      },
      {
        "label": "C",
        "text": "It allows constant time access to all its elements."
      },
      {
        "label": "D",
        "text": "ArrayList cannot resize dynamically if you add more number of elements than its initial capacity."
      },
      {
        "label": "E",
        "text": "An ArrayList is backed by an array."
      }
    ],
    "correctAnswers": [
      "B",
      "C",
      "E"
    ],
    "explanation": "ArrayList is a subclass of AbstractList.\njava.lang.Object\n- java.util.AbstractCollection<E>\n- java.util.AbstractList<E>\n- java.util.ArrayList<E>\nAll Implemented Interfaces:\nSerializable, Cloneable, Iterable<E>, Collection<E>, List<E>, RandomAccess\nDirect Known Subclasses:\nAttributeList, RoleList, RoleUnresolvedList"
  },
  {
    "id": "2.852",
    "topic": "Working with Java API - String, StringBuilder",
    "question": "What will the following code print?\nSystem.out.println(\"12345\".charAt(6));",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "5"
      },
      {
        "label": "B",
        "text": "null"
      },
      {
        "label": "C",
        "text": "-1"
      },
      {
        "label": "D",
        "text": "It will throw an ArrayIndexOutOfBoundsException."
      },
      {
        "label": "E",
        "text": "It will throw a StringOutOfBoundsException."
      },
      {
        "label": "F",
        "text": "It will throw an IndexOutOfBoundsException"
      }
    ],
    "correctAnswers": [
      "F"
    ],
    "explanation": "Since indexing starts with 0, the maximum value that you can pass to charAt is length-1.\nAs per the API documentation for charAt, it throws IndexOutOfBoundsException if you pass an invalid value\n(that is, if the index argument is negative or not less than the length of this string).\nBoth - ArrayIndexOutOfBoundsException and StringIndexOutOfBoundsException, extend\nIndexOutOfBoundsException and although in practice, the charAt method throws\nStringIndexOutOfBoundsException, it is not a valid option because the implementation is free to throw some\nother exception as long as it is an IndexOutOfBoundsException.\n(There are questions on the exam on this aspect.)"
  },
  {
    "id": "2.853",
    "topic": "Using Operators and Decision Constructs",
    "question": "Which line in the following code will cause the compilation to fail?\npublic class TestClass {\npublic static void main(String[] args) throws Exception {\nwork(); //LINE 10\nint j = j1; //LINE 11\nint j1 = (double) x; //LINE 12\n}\npublic static void work() throws Exception{\nSystem.out.println(x); //LINE 15\n}\nstatic double x; //19\n}",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "Line 10"
      },
      {
        "label": "B",
        "text": "Line 11"
      },
      {
        "label": "C",
        "text": "Line 12"
      },
      {
        "label": "D",
        "text": "Line 15"
      },
      {
        "label": "E",
        "text": "Line 19"
      }
    ],
    "correctAnswers": [
      "B",
      "C"
    ],
    "explanation": ""
  },
  {
    "id": "2.854",
    "topic": "Working with Inheritance",
    "question": "What will be printed when the following code is compiled and run?\nclass A {\npublic int getCode(){ return 2;}\n}\nclass AA extends A {\npublic long getCode(){ return 3;}\n}\npublic class TestClass {\npublic static void main(String[] args) throws Exception {\nA a = new A();\nA aa = new AA();\nSystem.out.println(a.getCode()+\" \"+aa.getCode());\n}\npublic int getCode() {\nreturn 1;\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "2 3"
      },
      {
        "label": "B",
        "text": "2 2"
      },
      {
        "label": "C",
        "text": "It will throw an exception at run time."
      },
      {
        "label": "D",
        "text": "The code will not compile."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": ""
  },
  {
    "id": "2.855",
    "topic": "Working with Methods - Overloading",
    "question": "What will be printed when the following code is compiled and run?\npublic class LoadTest{\npublic static void main(String[] args) throws Exception {\nLoadTest t = new LoadTest();\nint i = t.getLoad();\ndouble d = t.getLoad();\nSystem.out.println( i + d );\n}\npublic int getLoad() {\nreturn 1;\n}\npublic double getLoad(){\nreturn 3.0;\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "13.0"
      },
      {
        "label": "B",
        "text": "4.0"
      },
      {
        "label": "C",
        "text": "4"
      },
      {
        "label": "D",
        "text": "The code will not compile."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": ""
  },
  {
    "id": "2.856",
    "topic": "Working with Methods",
    "question": "Consider the following code:\npublic class MyClass {\nprotected int value = 10;\n}\nWhich of the following statements are correct regarding the field value?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It cannot be accessed from any other class."
      },
      {
        "label": "B",
        "text": "It can be read but cannot be modified from any other class."
      },
      {
        "label": "C",
        "text": "It can be modified but only from a subclass of MyClass."
      },
      {
        "label": "D",
        "text": "It can be read and modified from any class within the same package or from any subclass of MyClass."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": ""
  },
  {
    "id": "2.857",
    "topic": "Using Operators and Decision Constructs",
    "question": "Consider the following code:\npublic class TestClass {\n//define tester method here\npublic static void main(String[] args) throws Exception {\nTestClass tc = new TestClass();\nwhile(tc.tester()){\nSystem.out.println(\"running...\");\n}\n}\n}\nWhich of the following options would be a valid implementation of tester() method?",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "public boolean tester(){\nreturn false;\n}"
      },
      {
        "label": "B",
        "text": "public Boolean tester(){\nreturn false;\n}"
      },
      {
        "label": "C",
        "text": "public tester(){\nreturn false;\n}"
      },
      {
        "label": "D",
        "text": "public int tester(){\nreturn 0;\n}"
      },
      {
        "label": "E",
        "text": "public String tester(){\nreturn \"false\";\n}"
      }
    ],
    "correctAnswers": [
      "A",
      "B"
    ],
    "explanation": ""
  },
  {
    "id": "2.858",
    "topic": "Constructors",
    "question": "Which of the following are true about the \"default\" constructor?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It is provided by the compiler only if the class and any of its super classes do not define a constructor."
      },
      {
        "label": "B",
        "text": "It takes no arguments."
      },
      {
        "label": "C",
        "text": "A default constructor is used to return a default value."
      },
      {
        "label": "D",
        "text": "To define a default constructor, you must use the default keyword."
      },
      {
        "label": "E",
        "text": "It is always public."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "The default constructor is provided by the compiler only when a class does not define ANY constructor explicitly.\nFor example,\npublic class A{\npublic A() //This constructor is automatically inserted by the compiler because there is no ot\n{\nsuper(); //Note that it calls the super class's default no-args constructor.\n}\n}\npublic class A{\n//Compiler will not generate any constructor because the programmer has defined a constructor.\npublic A(int i){\n//do something\n}\n}"
  },
  {
    "id": "2.859",
    "topic": "Using Operators and Decision Constructs",
    "question": "What will the following code print when run?\npublic class TestClass {\npublic void switchString(String input){\nswitch(input){\ncase \"a\" : System.out.println( \"apple\" );\ncase \"b\" : System.out.println( \"bat\" );\nbreak;\ncase \"c\" : System.out.println( \"cat\" );\ndefault : System.out.println( \"none\" );\n}\n}\npublic static void main(String[] args) throws Exception {\nTestClass tc = new TestClass();\ntc.switchString(\"c\");\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "apple\ncat\nnone"
      },
      {
        "label": "B",
        "text": "apple\ncat"
      },
      {
        "label": "C",
        "text": "cat\nnone"
      },
      {
        "label": "D",
        "text": "cat"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "In the JDK 7 release, you can use a String object in the expression of a switch statement:\npublic String getTypeOfDayWithSwitchStatement(String dayOfWeekArg) {\nString typeOfDay;\nswitch (dayOfWeekArg) {\ncase \"Monday\":\ntypeOfDay = \"Start of work week\";\nbreak;\ncase \"Tuesday\":\ncase \"Wednesday\":\ncase \"Thursday\":\ntypeOfDay = \"Midweek\";\nbreak;\ncase \"Friday\":\ntypeOfDay = \"End of work week\";\nbreak;\ncase \"Saturday\":\ncase \"Sunday\":\ntypeOfDay = \"Weekend\";\nbreak;\ndefault:\nthrow new IllegalArgumentException(\"Invalid day of the week: \" + dayOfWeekArg);\n}\nreturn typeOfDay;\n}\n\nThe switch statement compares the String object in its expression with the expressions associated with each case\nlabel as if it were using the String.equals method; consequently, the comparison of String objects in switch\nstatements is case sensitive. The Java compiler generates generally more efficient bytecode from switch statements\nthat use String objects than from chained if-then-else statements."
  },
  {
    "id": "2.860",
    "topic": "Using Operators and Decision Constructs",
    "question": "What will the following code print when run?\npublic class TestClass {\npublic void switchString(String input){\nswitch(input){\ncase \"a\" : System.out.println( \"apple\" );\ncase \"b\" : System.out.println( \"bat\" );\nbreak;\ncase \"B\" : System.out.println( \"big bat\" );\ndefault : System.out.println( \"none\" );\n}\n}\npublic static void main(String[] args) throws Exception {\nTestClass tc = new TestClass();\ntc.switchString(\"B\");\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "bat\nbig bat"
      },
      {
        "label": "B",
        "text": "big bat\nnone"
      },
      {
        "label": "C",
        "text": "big bat"
      },
      {
        "label": "D",
        "text": "bat"
      },
      {
        "label": "E",
        "text": "The code will not compile."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "As of JDK 7 release, you can use a String object in the expression of a switch statement:\npublic String getTypeOfDayWithSwitchStatement(String dayOfWeekArg) {\nString typeOfDay;\nswitch (dayOfWeekArg) {\ncase \"Monday\":\ntypeOfDay = \"Start of work week\";\nbreak;\ncase \"Tuesday\":\ncase \"Wednesday\":\ncase \"Thursday\":\ntypeOfDay = \"Midweek\";\nbreak;\ncase \"Friday\":\ntypeOfDay = \"End of work week\";\nbreak;\ncase \"Saturday\":\ncase \"Sunday\":\ntypeOfDay = \"Weekend\";\nbreak;\ndefault:\nthrow new IllegalArgumentException(\"Invalid day of the week: \" + dayOfWeekArg);\n}\n\nreturn typeOfDay;\n}\nThe switch statement compares the String object in its expression with the expressions associated with each case\nlabel as if it were using the String.equals method; consequently, the comparison of String objects in switch\nstatements is case sensitive. The Java compiler generates generally more efficient bytecode from switch statements\nthat use String objects than from chained if-then-else statements."
  },
  {
    "id": "2.861",
    "topic": "Working with Java API - String, StringBuilder",
    "question": "You want to find out whether two strings are equal or not, in terms of the actual characters within the strings.\nWhat is the best way to do this?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "use String's equals method."
      },
      {
        "label": "B",
        "text": "use String's equalsIgnoreCase method."
      },
      {
        "label": "C",
        "text": "Use == operator."
      },
      {
        "label": "D",
        "text": "Use String's match method."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": ""
  },
  {
    "id": "2.862",
    "topic": "Working with Methods",
    "question": "Consider the following code appearing in the same file:\nclass Data {\nint x = 0, y = 0;\npublic Data(int x, int y){\nthis.x = x; this.y = y;\n}\n}\npublic class TestClass {\npublic static void main(String[] args) throws Exception {\nData d = new Data(1, 1);\n//add code here\n}\n}\nWhich of the following options when applied individually will change the Data object currently referred to by the\nvariable d to contain 2, 2 as values for its data fields?",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "Add the following two statements:\nd.x = 2;\nd.y = 2;"
      },
      {
        "label": "B",
        "text": "Add the following statement:\nd = new Data(2, 2);"
      },
      {
        "label": "C",
        "text": "Add the following two statements:\nd.x += 1;\nd.y += 1;"
      },
      {
        "label": "D",
        "text": "Add the following statement:\nd = d + 1;"
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "explanation": ""
  },
  {
    "id": "2.863",
    "topic": "Working with Methods",
    "question": "Consider the following code appearing in the same file:\nclass Data {\nprivate int x = 0, y = 0;\npublic Data(int x, int y){\nthis.x = x; this.y = y;\n}\n}\npublic class TestClass {\npublic static void main(String[] args) throws Exception {\nData d = new Data(1, 1);\n//add code here\n}\n}\nWhich of the following options when applied individually will change the Data object currently referred to by the\nvariable d to contain 2, 2 as values for its data fields?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "Add the following two statements :\nd.x = 2;\nd.y = 2;"
      },
      {
        "label": "B",
        "text": "Add the following statement:\nd = new Data(2, 2);"
      },
      {
        "label": "C",
        "text": "Add the following two statements:\nd.x += 1;\nd.y += 1;"
      },
      {
        "label": "D",
        "text": "Add the following method to Data class:\npublic void setValues(int x, int y){\nthis.x.setInt(x); this.y.setInt(y);\n}\nThen add the following statement:\nd.setValues(2, 2);"
      },
      {
        "label": "E",
        "text": "Add the following method to Data class:\npublic void setValues(int x, int y){\nthis.x = x; this.y = y;\n}\nThen add the following statement:\nd.setValues(2, 2);"
      }
    ],
    "correctAnswers": [
      "E"
    ],
    "explanation": ""
  },
  {
    "id": "2.864",
    "topic": "Handling Exceptions",
    "question": "Java Exceptions is a mechanism ..",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "for dealing with unexpected user inputs."
      },
      {
        "label": "B",
        "text": "that you can use to determine what to do when something unexpected happens."
      },
      {
        "label": "C",
        "text": "for logging unexpected behavior."
      },
      {
        "label": "D",
        "text": "to ensure that the program runs even if something unexpected happens.\nWhile it is possible to keep the program \"running\", in case of an exception, that is not what exceptions\nmechanism is meant for. Exceptions provide the means to separate the details of what to do when something"
      },
      {
        "label": "E",
        "text": "that the VM uses to exit the program when something unexpected happens."
      }
    ],
    "correctAnswers": [
      "B",
      "C"
    ],
    "explanation": "The actual exam contains several questions on exceptions that contain vague statements. It is not possible to\ndetermine what exactly is meant by a particular option and so our answers are based on our interpretation of the\noptions. To answer such questions, we recommend you to go through the following trail that explains the\nexceptions from Oracle's perspective:\nhttp://docs.oracle.com/javase/tutorial/essential/exceptions/"
  },
  {
    "id": "2.865",
    "topic": "Working with Java Data Types",
    "question": "What will the following program print when compiled and run?\nclass Data {\nprivate int x = 0;\nprivate String y = \"Y\";\npublic Data(int k){\nthis.x = k;\n}\npublic Data(String k){\nthis.y = k;\n}\npublic void showMe(){\nSystem.out.println(x+y);\n}\n}\npublic class TestClass {\npublic static void main(String[] args) throws Exception {\nnew Data(10).showMe();\nnew Data(\"Z\").showMe();\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "0Z\n10Y"
      },
      {
        "label": "B",
        "text": "10Y\n0Z"
      },
      {
        "label": "C",
        "text": "It will not compile."
      },
      {
        "label": "D",
        "text": "It will throw an exception at run time."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Note that + operator is overloaded for String. So if you have a String as any operand for +, a new combined String\nwill be created by concatenating the values of both the operands. Therefore, x+y will result in a String that\nconcatenates integer x and String y."
  },
  {
    "id": "2.866",
    "topic": "Handling Exceptions",
    "question": "What can be the type of a catch argument ?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "Any class that extends java.lang.Exception"
      },
      {
        "label": "B",
        "text": "Any class that extends java.lang.Exception except any class that extends java.lang.RuntimeException"
      },
      {
        "label": "C",
        "text": "Any class that is-a Throwable."
      },
      {
        "label": "D",
        "text": "Any Object"
      },
      {
        "label": "E",
        "text": "Any class that extends Error"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "You must remember the hierarchy of exception classes:\nThe base class of all exceptions is java.lang.Throwable. java.lang.Error and java.lang.Exception are the\nonly two subclasses of Throwable.\nError is used by the JVM to throw exception that have nothing to do with the program code as such but occur\nbecause of environment. For example, OutOfMemoryError. It indicates serious problems that a reasonable\napplication should not try to catch. Most such errors are abnormal conditions. Error and its subclasses are regarded\nas unchecked exceptions for the purposes of compile-time checking of exceptions.\nException is used by the programmer as well as the JVM when it encounters exceptional situation in the program.\nException and its subclasses (except RuntimeException) are called Checked Exceptions. Checked exceptions need\nto be declared in a method or constructor's throws clause if they can be thrown by the execution of the method or\nconstructor and propagate outside the method or constructor boundary. For example, java.io.IOException.\nRuntimeException extends Exception, which is used to report exceptional situations that cannot be predetermined\nat compile time. For example, IndexOutOfBoundsException or NullPointerException. RuntimeException and\nits subclasses are unchecked exceptions. Unchecked exceptions do not need to be declared in a method or\nconstructor's throws clause."
  },
  {
    "id": "2.867",
    "topic": "Java Basics",
    "question": "Which of the following keywords may occur multiple times in a Java source file?",
    "selectCount": 4,
    "options": [
      {
        "label": "A",
        "text": "import"
      },
      {
        "label": "B",
        "text": "class"
      },
      {
        "label": "C",
        "text": "private"
      },
      {
        "label": "D",
        "text": "package"
      },
      {
        "label": "E",
        "text": "public"
      }
    ],
    "correctAnswers": [
      "A",
      "B",
      "C",
      "E"
    ],
    "explanation": ""
  },
  {
    "id": "2.868",
    "topic": "Working with Java API - String, StringBuilder",
    "question": "How can you initialize a StringBuilder to have a capacity of at least 100 characters?",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "StringBuilder sb = new StringBuilder(100);"
      },
      {
        "label": "B",
        "text": "StringBuilder sb = StringBuilder.getInstance(100);"
      },
      {
        "label": "C",
        "text": "StringBuilder sb = new StringBuilder();\nsb.setCapacity(100);"
      },
      {
        "label": "D",
        "text": "StringBuilder sb = new StringBuilder();\nsb.ensureCapacity(100);"
      }
    ],
    "correctAnswers": [
      "A",
      "D"
    ],
    "explanation": "Observe that the question says \"at least 100 characters\". In the exam, you may get a question that says \"100\ncharacters\", in that case, ensureCapacity() may not be a valid option."
  },
  {
    "id": "2.869",
    "topic": "Using Loop Constructs",
    "question": "Which of the following are true about the enhanced for loop?",
    "selectCount": 3,
    "options": [
      {
        "label": "A",
        "text": "It can iterate over an array or a Collection but not a Map."
      },
      {
        "label": "B",
        "text": "Using an enhanced for loop prevents the code from going into an infinite loop."
      },
      {
        "label": "C",
        "text": "Using an enhanced for loop on an array may cause infinite loop."
      },
      {
        "label": "D",
        "text": "An enhanced for loop can iterate over a Map."
      },
      {
        "label": "E",
        "text": "You cannot find out the number of the current iteration while iterating."
      }
    ],
    "correctAnswers": [
      "A",
      "B",
      "E"
    ],
    "explanation": ""
  },
  {
    "id": "2.870",
    "topic": "Working with Java API - ArrayList",
    "question": "What will the following code print when compiled and run?\nimport java.util.*;\npublic class TestClass {\npublic static void main(String[] args) throws Exception {\nArrayList<String> al = new ArrayList<String>();\nal.add(\"111\");\nal.add(\"222\");\nSystem.out.println(al.get(al.size()));\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It will not compile."
      },
      {
        "label": "B",
        "text": "It will throw a NullPointerException at run time."
      },
      {
        "label": "C",
        "text": "It will throw an IndexOutOfBoundsException at run time."
      },
      {
        "label": "D",
        "text": "222"
      },
      {
        "label": "E",
        "text": "null"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": ""
  },
  {
    "id": "2.871",
    "topic": "Working with Java API - ArrayList",
    "question": "What will the following code print when compiled and run?\nimport java.util.*;\npublic class TestClass {\npublic static void main(String[] args) throws Exception {\nList al = new ArrayList(); //1\nal.add(111); //2\nSystem.out.println(al.get(al.size())); //3\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It will not compile."
      },
      {
        "label": "B",
        "text": "It will throw an exception at run time because of line //1"
      },
      {
        "label": "C",
        "text": "It will throw an exception at run time because of line //2"
      },
      {
        "label": "D",
        "text": "It will throw an exception at run time because of line //3"
      },
      {
        "label": "E",
        "text": "null."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": ""
  },
  {
    "id": "2.872",
    "topic": "Working with Inheritance",
    "question": "Consider the following classes:\nclass A {\npublic int getCode(){ return 2;}\n}\nclass AA extends A {\npublic void doStuff() {\n}\n}\nGiven the following two declarations, which of the options will compile?\nA a = null;\nAA aa = null;",
    "selectCount": 4,
    "options": [
      {
        "label": "A",
        "text": "a = (AA)aa;"
      },
      {
        "label": "B",
        "text": "a = new AA();"
      },
      {
        "label": "C",
        "text": "aa = new A();"
      },
      {
        "label": "D",
        "text": "aa = (AA) a;"
      },
      {
        "label": "E",
        "text": "aa = a;"
      },
      {
        "label": "F",
        "text": "((AA)a).doStuff();\nOnce you cast a to AA, you can call methods defined in AA. Of course, if a does not point to an object of\nclass AA at runtime, a ClassCastException will be thrown."
      }
    ],
    "correctAnswers": [
      "A",
      "B",
      "D",
      "F"
    ],
    "explanation": ""
  },
  {
    "id": "2.873",
    "topic": "Working with Java API - ArrayList",
    "question": "Which of the following are benefits of ArrayList over an array?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "You do not have to worry about the size of the ArrayList while appending elements."
      },
      {
        "label": "B",
        "text": "It consumes less memory space."
      },
      {
        "label": "C",
        "text": "You do not have to worry about thread safety."
      },
      {
        "label": "D",
        "text": "It allows you to write type safe code."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Some candidates have reported getting a similar question with ambiguous options such as \"An ArrayList\nimplements Collection API\". It is anybody's guess as to what is the correct answer."
  },
  {
    "id": "2.874",
    "topic": "Working with Java API - ArrayList",
    "question": "Which of the following are benefits of an array over an ArrayList ?",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "It consumes less memory."
      },
      {
        "label": "B",
        "text": "Accessing an element in an array is faster than in ArrayList."
      },
      {
        "label": "C",
        "text": "You do not have to worry about thread safety."
      },
      {
        "label": "D",
        "text": "It implements Collection interface and can thus be passed wherever a Collection is required."
      }
    ],
    "correctAnswers": [
      "A",
      "B"
    ],
    "explanation": "An ArrayList resized dynamically at run time as per the situation. An array cannot be resized once created. This\nreduces the amount of boiler plate code that is required to do the same task using an array.\nSome candidates have reported getting a similar question with ambiguous options such as \"An ArrayList\nimplements Collection API\". It is anybody's guess as to what is the correct answer."
  },
  {
    "id": "2.875",
    "topic": "Working with Methods",
    "question": "What will the following code print when compiled and run:\nclass Data {\nint intVal = 0;\nString strVal = \"default\";\npublic Data(int k){\nthis.intVal = k;\n}\n}\npublic class TestClass {\npublic static void main(String[] args) throws Exception {\nData d1 = new Data(10);\nd1.strVal = \"D1\";\nData d2 = d1;\nd2.intVal = 20;\nSystem.out.println(\"d2 val = \"+d2.strVal);\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "d2 val ="
      },
      {
        "label": "B",
        "text": "d2 val = default"
      },
      {
        "label": "C",
        "text": "d2 val = D1"
      },
      {
        "label": "D",
        "text": "Exception at run time."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "This is quite straight forward question. You are creating only one Data object. You are setting its strVal field to\n\"D1\". Next, you declare another Data variable d2 and assign to it the same Data object.\nThus, when you access strVal using d2, you will get D1.\nThe \"throws Exception\" part is not required and is there just to confuse you."
  },
  {
    "id": "2.876",
    "topic": "Java Basics - OO Concepts",
    "question": "Consider the following two classes (in the same package but defined in different source files):\npublic class Square {\ndouble side = 0;\ndouble area;\npublic Square(double length){ this.side = length; }\npublic double getSide() { return side; }\npublic void setSide(double side) { this.side = side; }\ndouble getArea() { return area; }\n}\npublic class TestClass {\npublic static void main(String[] args) throws Exception {\nSquare sq = new Square(10.0);\nsq.area = sq.getSide()*sq.getSide();\nSystem.out.println(sq.getArea());\n}\n}\nYou are assigned the task of refactoring the Square class to make it better in terms of encapsulation. What changes\nwill you make to this class?",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "Make setSide() method private."
      },
      {
        "label": "B",
        "text": "Make getArea() method private."
      },
      {
        "label": "C",
        "text": "Make side and area fields private."
      },
      {
        "label": "D",
        "text": "Make the side field private and remove the area field."
      },
      {
        "label": "E",
        "text": "Change getArea method to:\npublic double getArea(){ return side*side; }"
      },
      {
        "label": "F",
        "text": "Add a setArea() method."
      }
    ],
    "correctAnswers": [
      "D",
      "E"
    ],
    "explanation": "There can be multiple ways to accomplish this. The exam asks you questions on the similar pattern.\nThe key is that your data variable should be private and the functionality that is to be exposed outside should be\npublic. Further, your setter methods should be coded such that they don't leave the data members inconsistent with\neach other."
  },
  {
    "id": "2.877",
    "topic": "Java Basics - OO Concepts",
    "question": "Consider the following two classes (in the same package but defined in different source files):\npublic class Square {\ndouble side = 0;\ndouble area;\npublic Square(double length){ this.side = length; }\npublic double getSide() { return side; }\npublic void setSide(double side) { this.side = side; }\ndouble getArea() { return area; }\n}\npublic class TestClass {\npublic static void main(String[] args) throws Exception {\nSquare sq = new Square(10.0);\nsq.area = sq.getSide()*sq.getSide();\nSystem.out.println(sq.getArea());\n}\n}\nYou are assigned the task of refactoring the Square class to make it better in terms of encapsulation. What changes\nwill you make to this class?",
    "selectCount": 4,
    "options": [
      {
        "label": "A",
        "text": "Add a calculateArea method:\nprivate void calculateArea(){\nthis.area = this.side*this.side;\n}"
      },
      {
        "label": "B",
        "text": "Make side and area fields private."
      },
      {
        "label": "C",
        "text": "Change setSide method to:\npublic void setSide(double d){\nthis.side = d;\ncalculateArea();\n}"
      },
      {
        "label": "D",
        "text": "Make the getArea method public."
      },
      {
        "label": "E",
        "text": "Add a setArea() method:\npublic void setArea(double d){ area = d; }"
      }
    ],
    "correctAnswers": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "There can be multiple ways to accomplish this. The exam asks you questions on the similar pattern.\nThe key is that your data variable should be private and the functionality that is to be exposed outside should be\npublic. Further, your setter methods should be coded such that they don't leave the data members inconsistent with\neach other."
  },
  {
    "id": "2.880",
    "topic": "Handling Exceptions",
    "question": "Which of the following are standard Java exception classes?",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "java.io.FileNotFoundException"
      },
      {
        "label": "B",
        "text": "java.io.InputException"
      },
      {
        "label": "C",
        "text": "java.lang.CPUError"
      },
      {
        "label": "D",
        "text": "java.lang.MemoryException"
      },
      {
        "label": "E",
        "text": "java.lang.SecurityException"
      }
    ],
    "correctAnswers": [
      "A",
      "E"
    ],
    "explanation": ""
  },
  {
    "id": "2.881",
    "topic": "Handling Exceptions",
    "question": "Java's Exception mechanism helps in which of the following ways?",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "It allows creation of new exceptions that are custom to a particular application domain."
      },
      {
        "label": "B",
        "text": "It improves code because error handling code is clearly separated from the main program logic."
      },
      {
        "label": "C",
        "text": "It enhances the security of the application by reporting errors in the logs."
      },
      {
        "label": "D",
        "text": "It improves the code because the exception is handled right at the place where it occurred."
      },
      {
        "label": "E",
        "text": "It provides a vast set of standard exceptions that covers all possible exceptions."
      }
    ],
    "correctAnswers": [
      "A",
      "B"
    ],
    "explanation": ""
  },
  {
    "id": "2.882",
    "topic": "Using Operators and Decision Constructs",
    "question": "What will the following program print when run without any command line argument?\npublic class TestClass {\npublic static void main(String[] args) {\nboolean hasParams = (args == null ? false : true);\nif(hasParams){\nSystem.out.println(\"has params\");\n}{\nSystem.out.println(\"no params\");\n}\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "has params"
      },
      {
        "label": "B",
        "text": "has params\nno params"
      },
      {
        "label": "C",
        "text": "no params"
      },
      {
        "label": "D",
        "text": "It will not compile."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Remember that the args array is never null. If the program is run without any arguments, args points to a String\narray of length 0. Therefore, hasParams will be true and it will print \"has params\".\nSince there is no else, the subsequent code block will also be executed and it will print \"no params\". Note that it is\nnot syntactically wrong to have section of code wrapped in { }."
  },
  {
    "id": "2.883",
    "topic": "Working with Java Data Types - Garbage Collection",
    "question": "When is the Object created at line //1 eligible for garbage collection?\npublic class TestClass{\npublic Object getObject(){\nObject obj = new String(\"aaaaa\"); //1\nObject objArr[] = new Object[1]; //2\nobjArr[0] = obj; //3\nobj = null; //4\nobjArr[0] = null;//5\nreturn obj; //6\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "Just after line 2."
      },
      {
        "label": "B",
        "text": "Just after line 3."
      },
      {
        "label": "C",
        "text": "Just after line 4."
      },
      {
        "label": "D",
        "text": "Just after line 5."
      },
      {
        "label": "E",
        "text": "Just after line 6."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "The official exam objectives now explicitly mention Garbage collection. All you need to know is:\n1. An object can be made eligible for garbage collection by making sure there are no references pointing to that\nobject.\n2. You cannot directly invoke the garbage collector. You can suggest the JVM to perform garbage collection by\ncalling System.gc();\nAfter line 3, both, obj and objArr[0] are pointing to the same String object.\nAfter line 4, obj points to null but objArr[0] is still pointing to the String object.\nAfter line 5, objArr[0] also starts pointing to null so there is no reference left that is pointing to the String object.\nSo it is now available for Garbage collection."
  },
  {
    "id": "2.884",
    "topic": "Working with Java Data Types - Garbage Collection",
    "question": "Consider the following code snippet:\npublic class Test{\nvoid test(){\nMyClass obj = new MyClass();\nobj.name = \"jack\";\n// 1 insert code here\n}\n}\n//In MyClass.java\npublic class MyClass{\nint value;\nString name;\n}\nWhat can be inserted at // 1, which will make the object referred to by obj eligible for garbage collection?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "obj.destroy();"
      },
      {
        "label": "B",
        "text": "Runtime.getRuntime().gc();"
      },
      {
        "label": "C",
        "text": "obj = null;"
      },
      {
        "label": "D",
        "text": "obj.finalize()"
      },
      {
        "label": "E",
        "text": "obj.name = null; as well as obj = null;"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "The official exam objectives now explicitly mention Garbage collection. All you need to know is:\n1. An object can be made eligible for garbage collection by making sure there are no references pointing to that\nobject.\n2. You cannot directly invoke the garbage collector. You can suggest the JVM to perform garbage collection by\ncalling System.gc();\nNothing can ensure that an object will definitely be destroyed by the garbage collector. You can at most make an\nobject eligible for GC by making sure that there are no references to it."
  },
  {
    "id": "2.885",
    "topic": "Working with Inheritance",
    "question": "Given:\n//Insert code here\npublic abstract void draw();\n}\n//Insert code here\npublic void draw(){ System.out.println(\"in draw...\"); }\n}\nWhich of the following lines of code can be used to complete the above code?",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "class Shape {\nand\nclass Circle extends Shape {"
      },
      {
        "label": "B",
        "text": "public class Shape {\nand\nclass Circle extends Shape {"
      },
      {
        "label": "C",
        "text": "abstract Shape {\n}\nand\npublic class Circle extends Shape {"
      },
      {
        "label": "D",
        "text": "public abstract class Shape {\nand\nclass Circle extends Shape {"
      },
      {
        "label": "E",
        "text": "public abstract class Shape {\nand\nclass Circle implements Shape {"
      },
      {
        "label": "F",
        "text": "public interface Shape {\nand\nclass Circle implements Shape {"
      }
    ],
    "correctAnswers": [
      "D",
      "F"
    ],
    "explanation": ""
  },
  {
    "id": "2.886",
    "topic": "Working with Methods",
    "question": "Given:\nclass StaticTest{\nvoid m1(){\nStaticTest.m2(); // 1\nm4(); // 2\nStaticTest.m3(); // 3\n}\nstatic void m2(){ } // 4\nvoid m3(){\nm1(); // 5\nm2(); // 6\nStaticTest.m1(); // 7\n}\nstatic void m4(){ }\n}\nWhich of the lines will fail to compile?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "1"
      },
      {
        "label": "B",
        "text": "2"
      },
      {
        "label": "C",
        "text": "3"
      },
      {
        "label": "D",
        "text": "4"
      },
      {
        "label": "E",
        "text": "5"
      },
      {
        "label": "F",
        "text": "6"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "To call an instance method you need a reference that points to the object on which you want to call that method.\nNow, within an instance method a reference named \"this\" pointing to the current object is always available. So to\ncall another instance method from within an instance method, you can either use the this reference explicitly (for\nexample, you may call this.m3() from within m1) , or leave out the this reference altogether (for example, you can\ndirectly call m3() from within m1()) because the compiler automatically adds the \"this.\" part implicitly. The\n\"this\" variable is available only within an instance method and not in static methods because static methods are\nnot invoked within the context of an object of that class.\nYou can call a static method of a class from either a static or an instance method of the same class . No object\nreference is required. You can call it by using the name of the class or you can omit that as well. To call a static\nmethod of another class, you must use the name of the other class, for example OtherClass.staticMethod();\nAt //3, you are trying to call an instance method from another instance method. Therefore, you need to either\nspecify an object reference or you can rely on this if you omit it. However, you cannot do StaticTest.m3() because\nStaticTest is not a valid reference that points to an object of class StaticTest.\nSame thing happens at //7."
  },
  {
    "id": "2.887",
    "topic": "Working with Methods - Overloading",
    "question": "Given:\nclass OverloadingTest{\nvoid m1(int x){\nSystem.out.println(\"m1 int\");\n}\nvoid m1(double x){\nSystem.out.println(\"m1 double\");\n}\nvoid m1(String x){\nSystem.out.println(\"m1 String\");\n}\n}\npublic class TestClass {\npublic static void main(String[] args) throws Exception {\nOverloadingTest ot = new OverloadingTest();\not.m1(1.0);\n}\n}\nWhat will be the output?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It will fail to compile."
      },
      {
        "label": "B",
        "text": "m1 int"
      },
      {
        "label": "C",
        "text": "m1 double"
      },
      {
        "label": "D",
        "text": "m1 String"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Here, m1() is overloading for three different argument types. So when you call ot.m1(1.0), the one with argument\nof type double will be invoked."
  },
  {
    "id": "2.888",
    "topic": "Working with Inheritance",
    "question": "What will the following code print when run?\nclass A {\n}\nclass AA extends A {\n}\npublic class TestClass {\npublic static void main(String[] args) throws Exception {\nA a = new A();\nAA aa = new AA();\na = aa;\nSystem.out.println(\"a = \"+a.getClass());\nSystem.out.println(\"aa = \"+aa.getClass());\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It will not compile."
      },
      {
        "label": "B",
        "text": "It will throw ClassCastException at runtime."
      },
      {
        "label": "C",
        "text": "a = class AA\naa = class AA"
      },
      {
        "label": "D",
        "text": "a = class A\naa = class AA"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "getClass is a public instance method in Object class. That means it is polymorphic. In other words, this method is\nbound at run time and so it returns the name of the class of the actual object to which the reference points.\nHere, at run time, both - a and aa, point to an object of class AA. So both will print AA."
  },
  {
    "id": "2.889",
    "topic": "Working with Methods",
    "question": "What will the following code print when run?\nclass A{\nString value = \"test\";\nA(String val){\nthis.value = val;\n}\n}\npublic class TestClass {\npublic static void main(String[] args) throws Exception {\nnew A(\"new test\").print();\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "test"
      },
      {
        "label": "B",
        "text": "new test"
      },
      {
        "label": "C",
        "text": "It will not compile."
      },
      {
        "label": "D",
        "text": "It will throw an exception at run time."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": ""
  },
  {
    "id": "2.890",
    "topic": "Working with Java Data Types",
    "question": "Given:\nclass Square {\nprivate double side = 0;\nString color;\npublic Square(double length){\nthis.side = length;\n}\npublic double getSide() { return side; }\npublic void setSide(double side) { this.side = side; }\n}\npublic class TestClass {\npublic static void main(String[] args) throws Exception {\nSquare mysq = new Square(10);\nmysq.color = \"red\";\n//set mysq's side to 20\n}\n}\nWhich of the following statements will set the side of Square object referred by mysq to 20?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "mysq.side = 20;"
      },
      {
        "label": "B",
        "text": "mysq = new Square(20);"
      },
      {
        "label": "C",
        "text": "mysq.setSide(20);"
      },
      {
        "label": "D",
        "text": "side = 20;"
      },
      {
        "label": "E",
        "text": "Square.mysq.side = 20;"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": ""
  },
  {
    "id": "2.891",
    "topic": "Using Loop Constructs",
    "question": "What can you do to make the following code compile?\npublic class TestClass {\npublic static void main(String[] args) {\nint[] values = { 10, 20, 30 };\nfor( /* put code here */ ){\n}\n}\n}",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "int k : values"
      },
      {
        "label": "B",
        "text": "int k in values"
      },
      {
        "label": "C",
        "text": "int k; k<0; k++"
      },
      {
        "label": "D",
        "text": ";;"
      },
      {
        "label": "E",
        "text": "; k<values.length;k++"
      }
    ],
    "correctAnswers": [
      "A",
      "D"
    ],
    "explanation": ""
  },
  {
    "id": "2.892",
    "topic": "Working with Java Data Types",
    "question": "Which of the following are valid classes?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "public class ImaginaryNumber extends Number {\n//implementation for abstract methods of the base class\n}"
      },
      {
        "label": "B",
        "text": "public class ThreeWayBoolean extends Boolean {\n//implementation for abstract methods of the base class\n}"
      },
      {
        "label": "C",
        "text": "public class NewSystem extends System {\n//implementation for abstract methods of the base class\n}"
      },
      {
        "label": "D",
        "text": "public class ReverseString extends String {\n//implementation for abstract methods of the base class\n}"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "String, StringBuilder, and StringBuffer - all are final classes.\n1. Remember that wrapper classes for primitives (java.lang.Boolean, java.lang.Integer, java.lang.Long,\njava.lang.Short etc.) are also final and so they cannot be extended.\n2. java.lang.Number, however, is not final. Integer, Long, Double etc. extend Number.\n3. java.lang.System is final as well."
  },
  {
    "id": "2.894",
    "topic": "Java Basics",
    "question": "The following are the complete contents of TestClass.java file. Which packages are automatically imported?\nclass TestClass{\npublic static void main(String[] args){\nSystem.out.println(\"hello\");\n}\n}",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "java.util"
      },
      {
        "label": "B",
        "text": "System"
      },
      {
        "label": "C",
        "text": "java.lang"
      },
      {
        "label": "D",
        "text": "java.io"
      },
      {
        "label": "E",
        "text": "String"
      },
      {
        "label": "F",
        "text": "The package with no name."
      }
    ],
    "correctAnswers": [
      "C",
      "F"
    ],
    "explanation": ""
  },
  {
    "id": "2.895",
    "topic": "Handling Exceptions",
    "question": "What two changes can you do, independent of each other, to make the following code compile:\n//assume appropriate imports\nclass PortConnector {\npublic PortConnector(int port) {\nif (Math.random() > 0.5) {\nthrow new IOException();\n}\nthrow new RuntimeException();\n}\n}\npublic class TestClass {\npublic static void main(String[] args) {\ntry {\nPortConnector pc = new PortConnector(10);\n} catch (RuntimeException re) {\nre.printStackTrace();\n}\n}\n}",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "add throws IOException to the main method."
      },
      {
        "label": "B",
        "text": "add throws IOException to PortConnector constructor."
      },
      {
        "label": "C",
        "text": "add throws IOException to the main method as well as to PortConnector constructor."
      },
      {
        "label": "D",
        "text": "Change RuntimeException to java.io.IOException."
      },
      {
        "label": "E",
        "text": "add throws Exception to PortConnector constructor and change catch(RuntimeException re) to catch(Exception re) in the main method."
      }
    ],
    "correctAnswers": [
      "C",
      "E"
    ],
    "explanation": "IOException is a checked exception and since the PortConnector constructor throws IOException, this exception\n(or its superclass) must be present in the throws clause of the constructor.\nNow, the main method has two options, either catch IOException (or whatever exception PortConnector throws) in\nits catch block (i.e. option 5) or put that exception in its throws clause (i.e. option 3)."
  },
  {
    "id": "2.896",
    "topic": "Constructors",
    "question": "Which of the following classes have a default constructor?\nclass A{ }\nclass B { B(){ } }\nclass C{ C(String s){ } }",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "A"
      },
      {
        "label": "B",
        "text": "A and B"
      },
      {
        "label": "C",
        "text": "B"
      },
      {
        "label": "D",
        "text": "C"
      },
      {
        "label": "E",
        "text": "B and C"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "There is only one rule regarding the \"default\" constructor:\nThe Java compiler automatically adds a constructor that takes no argument and has the same access as the class, if\nand only if the programmer does not define ANY constructor in the class.\nIn this case, the programmer has not defined any constructor for class A, hence it will have the default constructor.\nFor class B, the programmer has defined a constructor that is exactly same as the default constructor that would\nhave been provided automatically. It is a matter of interpretation whether it can be called a default constructor or\nnot.\nBased on Java Language Specification section 8.8.9, quoted below, our interpretation is that class B will not get a\ndefault constructor:\n(http://docs.oracle.com/javase/specs/jls/se7/html/jls-8.html )\n8.8.9 Default Constructor\nIf a class contains no constructor declarations, then a default constructor with no formal parameters and no throws\nclause is implicitly declared.\nIf the class being declared is the primordial class Object, then the default constructor has an empty body.\nOtherwise, the default constructor simply invokes the superclass constructor with no arguments.\nIt is a compile-time error if a default constructor is implicitly declared but the superclass does not have an\naccessible constructor (6.6) that takes no arguments and has no throws clause.\nIt follows that if the nullary constructor of the superclass has a throws clause, then a compile-time error will occur."
  },
  {
    "id": "2.897",
    "topic": "Creating and Using Arrays",
    "question": "Given the following code :\npublic class TestClass {\nint[][] matrix = new int[2][3];\nint a[] = {1, 2, 3};\nint b[] = {4, 5, 6};\npublic int compute(int x, int y){\n//1 : Insert Line of Code here\n}\npublic void loadMatrix(){\nfor(int x=0; x<matrix.length; x++){\nfor(int y=0; y<matrix[x].length; y++){\n//2: Insert Line of Code here\n}\n}\n}\n}\nWhat can be inserted at //1 and //2?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "return a(x)*b(y);\nand\nmatrix(x, y) = compute(x, y);"
      },
      {
        "label": "B",
        "text": "return a[x]*b[y];\nand\nmatrix[x, y] = compute(x, y);"
      },
      {
        "label": "C",
        "text": "return a[x]*b[y];\nand\nmatrix[x][y] = compute(x, y);"
      },
      {
        "label": "D",
        "text": "return a(x)*b(y);\nand\nmatrix(x)(y) = compute(x, y);"
      },
      {
        "label": "E",
        "text": "return a[x]*b[y];\nand\nmatrix[[x][y]] = compute(x, y);"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "The correct syntax to access any element within an array is to use the square brackets - [ ]. Thus, to access the\nfirst element in an array, you would use array[0].\nFor a multi dimensional array, to reach an individual item, you need to specify index for each dimension. For\nexample, since matrix is a two dimensional array, matrix is an array of array and matrix[0] will give you the first\narray of the arrays. matrix[0][0] will give you the first element of the first array of the arrays."
  },
  {
    "id": "2.898",
    "topic": "Working with Java Data Types",
    "question": "Given:\npublic class Employee{\nString name;\npublic Employee(){\n}\n}\nWhich of the following lines creates an Employee instance?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "Employee e;"
      },
      {
        "label": "B",
        "text": "Employee e = new Employee();"
      },
      {
        "label": "C",
        "text": "Employee e = Employee.new();"
      },
      {
        "label": "D",
        "text": "Employee e = Employee();"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": ""
  },
  {
    "id": "2.899",
    "topic": "Working with Inheritance",
    "question": "Given:\ninterface I { }\nclass A implements I{\npublic String toString(){ return \"in a\"; }\n}\nclass B extends A{\npublic String toString(){ return \"in b\"; }\n}\npublic class TestClass {\npublic static void main(String[] args) {\nB b = new B();\nA a = b;\nI i = a;\nSystem.out.println(i);\nSystem.out.println((B)a);\nSystem.out.println(b);\n}\n}\nWhat will be printed when the above code is compiled and run?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "in i\nin a\nin b"
      },
      {
        "label": "B",
        "text": "I\nA\nin b"
      },
      {
        "label": "C",
        "text": "in a\nin a\nin b"
      },
      {
        "label": "D",
        "text": "in a\nin b\nin b"
      },
      {
        "label": "E",
        "text": "in b\nin b\nin b"
      }
    ],
    "correctAnswers": [
      "E"
    ],
    "explanation": "If you answered this question incorrectly, you need to understand the concept of polymorphism. We suggest you to\ngo through any book to understand it thoroughly because there are several questions in the exam on similar pattern.\nIn a nutshell, polymorphism means that it is always the class of the object (and not the class of the reference\n\nvariable that a variable points to) that determines which method will be called at run time. The concept of\npolymorphism doesn't apply to private methods or static methods because these methods are never inherited."
  },
  {
    "id": "2.900",
    "topic": "Working with Inheritance",
    "question": "What, if anything, is wrong with the following code?\ninterface T1{\n}\ninterface T2{\nint VALUE = 10;\nvoid m1();\n}\ninterface T3 extends T1, T2{\npublic void m1();\npublic void m1(int x);\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "T3 cannot implement both T1 and T2 because it leads to ambiguity."
      },
      {
        "label": "B",
        "text": "There is nothing wrong with the code."
      },
      {
        "label": "C",
        "text": "The code will work fine only if VALUE is removed from T2 interface."
      },
      {
        "label": "D",
        "text": "The code will work fine only if m1() is removed from either T2 and T3."
      },
      {
        "label": "E",
        "text": "None of the above."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Having ambiguous fields or methods does not cause any problem by itself but referring to such fields or methods\nin an ambiguous way will cause a compile time error.\nT3.m1() is also fine because even though m1() is declared in T2 as well as T3 , the definition to both resolves\nunambiguously to only one m1(). Explicit cast is not required for calling the method m1() : ( ( T2) t).m1();\nm1(int x) is valid because it is a totally independent method declared by T3."
  },
  {
    "id": "2.901",
    "topic": "Java Basics - OO Concepts",
    "question": "Given:\npublic class Triangle{\npublic int base;\npublic int height;\npublic double area;\npublic Triangle(int base, int height){\nthis.base = base; this.height = height;\nupdateArea();\n}\nvoid updateArea(){\narea = base*height/2;\n}\npublic void setBase(int b){ base = b; updateArea(); }\npublic void setHeight(int h){ height = h; updateArea(); }\n}\nThe above class needs to protect an invariant on the \"area\" field. Which three members must have the public\naccess modifiers removed to ensure that the invariant is maintained?",
    "selectCount": 3,
    "options": [
      {
        "label": "A",
        "text": "the base field"
      },
      {
        "label": "B",
        "text": "the height field"
      },
      {
        "label": "C",
        "text": "the area field"
      },
      {
        "label": "D",
        "text": "the Triangle constructor"
      },
      {
        "label": "E",
        "text": "the setBase method"
      },
      {
        "label": "F",
        "text": "the setHeight method"
      }
    ],
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "explanation": "An invariant means a certain condition that constrains the state stored in the object. For example, in this case the\nvalue of the area field of the Triangle must always be consistent with its base and height fields. Thus, it should\nnever have a value that is different from base*height/2.\nIf you allow other classes to directly change the value of base, height, or area, using direct field access, the area\nfield may not contain the correct area thereby breaking the invariant.\nTo prevent this inconsistency from happening, you need to prohibit changing the instance fields directly and\ninstead permit the changes only through the setter method because these methods call the updateArea method and\nkeep the area and base and height consistent."
  },
  {
    "id": "2.902",
    "topic": "Java Basics",
    "question": "Given:\nclass Triangle{\npublic int base;\npublic int height;\npublic double area = 0;\npublic Triangle(int pBase, int pHeight){\nthis.base = pBase; this.height = pHeight;\nupdateArea();\n}\npublic void updateArea(){\ndouble a = base*height/2;\narea = a;\n}\npublic void setBase(int b){ base = b; updateArea(); }\npublic void setHeight(int h){ height = h; updateArea(); }\n}\nWhich variables are not accessible from anywhere within given class code except from the scope in which they are\ndeclared?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "base, height, area"
      },
      {
        "label": "B",
        "text": "area, b, h"
      },
      {
        "label": "C",
        "text": "base, height"
      },
      {
        "label": "D",
        "text": "b, h, a"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "\"class level\" means static fields and they can be accessed from anywhere (i.e. static as well as non-static methods)\nin the class (and from outside the class depending on their accessibility).\n\"instance level\" means the instance fields and they can be accessed only from instance methods in the class."
  },
  {
    "id": "2.903",
    "topic": "Working with Inheritance",
    "question": "A java source file contains the following code:\ninterface I {\nint getI(int a, int b);\n}\ninterface J{\nint getJ(int a, int b, int c);\n}\nabstract class MyIJ implements J , I { }\nclass MyI{\nint getI(int x, int y){ return x+y; }\n}\ninterface K extends J{\nint getJ(int a, int b, int c, int d);\n}\nIdentify the correct statements:",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It will fail to compile because of MyIJ."
      },
      {
        "label": "B",
        "text": "It will fail to compile because of MyIJ and K"
      },
      {
        "label": "C",
        "text": "It will fail to compile because of K."
      },
      {
        "label": "D",
        "text": "It will fail to compile because of MyI and K"
      },
      {
        "label": "E",
        "text": "It will fail to compile because of MyIJ, K, and MyI"
      },
      {
        "label": "F",
        "text": "It will compile without any error."
      }
    ],
    "correctAnswers": [
      "F"
    ],
    "explanation": ""
  },
  {
    "id": "2.904",
    "topic": "Working with Methods",
    "question": "Given:\nclass Triangle{\npublic int base;\npublic int height;\nprivate static double ANGLE;\npublic static double getAngle();\npublic static void Main(String[] args) {\nSystem.out.println(getAngle());\n}\n}\nIdentify the correct statements:",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It will not compile because it does not implement setAngle method."
      },
      {
        "label": "B",
        "text": "It will not compile because ANGLE cannot be private."
      },
      {
        "label": "C",
        "text": "It will not compile because getAngle() has no body."
      },
      {
        "label": "D",
        "text": "It will not compile because ANGLE field is not initialized."
      },
      {
        "label": "E",
        "text": "It will not compile because of the name of the method Main instead of main.\nA class can have a method named Main. Although, since it is not same as main, it will not be considered the\nstandard main method that the JVM can invoke when the program is executed."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": ""
  },
  {
    "id": "2.905",
    "topic": "Working with Inheritance",
    "question": "Given the following line of code:\nList students = new ArrayList();\nIdentify the correct statement:",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "The reference type is List and the object type is ArrayList."
      },
      {
        "label": "B",
        "text": "The reference type is ArrayList and the object type is ArrayList."
      },
      {
        "label": "C",
        "text": "The reference type is ArrayList and the object type is List."
      },
      {
        "label": "D",
        "text": "The reference type is List and the object type is List."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": ""
  },
  {
    "id": "2.906",
    "topic": "Working with Methods",
    "question": "Given:\nclass Triangle{\npublic int base;\npublic int height;\nprivate final double ANGLE;\npublic void setAngle(double a){ ANGLE = a; }\npublic static void main(String[] args) {\nTriangle t = new Triangle();\nt.setAngle(90);\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "the value of ANGLE will not be set to 90 by the setAngle method."
      },
      {
        "label": "B",
        "text": "An exception will be thrown at run time."
      },
      {
        "label": "C",
        "text": "The code will work as expected setting the value of ANGLE to 90."
      },
      {
        "label": "D",
        "text": "The code will not compile."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "The given code has two problems:\n1. If you declare a field to be final, it must be explicitly initialized by the time the creation of an object of the\nclass is complete. So you can either initialize it immediately:\nprivate final double ANGLE = 0;\nor you can initialize it in the constructor or an instance block.\n2. Since ANGLE is final, you can't change its value once it is set. Therefore the setAngle method will also not\ncompile."
  },
  {
    "id": "2.907",
    "topic": "Working with Inheritance",
    "question": "Consider the following code appearing in Eagle.java\nclass Bird {\nprivate Bird(){ }\n}\nclass Eagle extends Bird {\npublic String name;\npublic Eagle(String name){\nthis.name = name;\n}\npublic static void main(String[] args) {\nSystem.out.println(new Eagle(\"Bald Eagle\").name);\n}\n}\nWhat can be done to make this code compile?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "Nothing, it will compile as it is."
      },
      {
        "label": "B",
        "text": "Make Eagle class declaration public:\npublic class Eagle { ... }"
      },
      {
        "label": "C",
        "text": "Make the Eagle constructor private:\nprivate Eagle(String name){ ... }"
      },
      {
        "label": "D",
        "text": "Make Bird constructor public:\npublic Bird() { ... }"
      },
      {
        "label": "E",
        "text": "Insert super(); as the first line in Eagle constructor:\npublic Eagle(String name){\nsuper();\nthis.name = name;\n}"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Since the constructor of Bird is private, the subclass cannot access it and therefore, it needs to be made public.\nprotected or default access is also valid."
  },
  {
    "id": "2.908",
    "topic": "Using Operators and Decision Constructs",
    "question": "What will the following code print when run?\npublic class TestClass {\npublic static void main(String[] args) throws Exception {\nboolean flag = true;\nswitch (flag){\ncase true : System.out.println(\"true\");\ndefault: System.out.println(\"false\");\n}\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It will not compile."
      },
      {
        "label": "B",
        "text": "false"
      },
      {
        "label": "C",
        "text": "true\nfalse"
      },
      {
        "label": "D",
        "text": "Exception at run time."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Here are the rules for a switch statement:\n1. Only String, byte, char, short, int, (and their wrapper classes Byte, Character, Short, and Integer), and enums can\nbe used as types of a switch variable. (String is allowed only since Java 7).\n2. The case constants must be assignable to the switch variable. For example, if your switch variable is of class\nString, your case labels must use Strings as well.\n3. The switch variable must be big enough to hold all the case constants. For example, if the switch variable is of\ntype char, then none of the case constants can be greater than 65535 because a char's range is from 0 to 65535.\n4. All case labels should be COMPILE TIME CONSTANTS.\n5. No two of the case constant expressions associated with a switch statement may have the same value.\n6. At most one default label may be associated with the same switch statement."
  },
  {
    "id": "2.909",
    "topic": "Working with Java Data Types",
    "question": "Which of the following declarations is/are valid:\n1. bool b = null;\n2. boolean b = 1;\n3. boolean b = true|false;\n4 bool b = (10<11);\n5. boolean b = true||false;",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "1 and 4"
      },
      {
        "label": "B",
        "text": "2, 3, and 5"
      },
      {
        "label": "C",
        "text": "2 and 3"
      },
      {
        "label": "D",
        "text": "3 and 5"
      },
      {
        "label": "E",
        "text": "5"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "bool is an invalid keyword. Therefore, 1 and 4 can't be right. (Although 1 could be right if bool were a user\ndefined class but as per Java coding conventions, a class name should start with a capital letter.)\nboolean b = 1; is wrong because you can only assign true or false to a boolean variable. 1 is an integral value\nit cannot be converted to boolean. Also note that boolean b = null; would be invalid as well because null is not\na true or false value. A primitive (whether it is a boolean or an int or a double), can never be assigned null.\nboolean b = true|false; and boolean b = true||false; are both valid and the difference between true|false\nand true||false is not material in this case. However, there is a lot of difference between | (and &) and || (and &&) as\nexplained below:\n|| and && perform short circuit evaluation, while & and | do not. Which means, if you use the || and && forms,\nJava will not bother to evaluate the right-hand operand if the result of the expression can be known by just\nevaluating the left hand operand.\nConsider the following example.\nBoolean b = true;\nif(b || foo.timeConsumingCall()) {\n//entered here without calling timeConsumingCall()\n}\nAnother example:\nString s = null;\nif(s != null && s.isEmpty()) //No NullPointerException because string.isEmpty() is not called.\n//If you use & instead of && , s.isEmpty will be called and a NullPointerException will be\nthrown.{\n...\n}"
  },
  {
    "id": "2.910",
    "topic": "Working with Inheritance",
    "question": "Consider the following code:\ninterface Flyer{ String getName(); }\nclass Bird implements Flyer{\npublic String name;\npublic Bird(String name){\nthis.name = name;\n}\npublic String getName(){ return name; }\n}\nclass Eagle extends Bird {\npublic Eagle(String name){\nsuper(name);\n}\n}\npublic class TestClass {\npublic static void main(String[] args) throws Exception {\nFlyer f = new Eagle(\"American Bald Eagle\");\n//PRINT NAME HERE\n}\n}\nWhich of the following lines of code will print the name of the Eagle object?",
    "selectCount": 3,
    "options": [
      {
        "label": "A",
        "text": "System.out.println(f.name);"
      },
      {
        "label": "B",
        "text": "System.out.println(f.getName());"
      },
      {
        "label": "C",
        "text": "System.out.println(((Eagle)f).name);"
      },
      {
        "label": "D",
        "text": "System.out.println(((Bird)f).getName());"
      },
      {
        "label": "E",
        "text": "System.out.println(Eagle.name);"
      },
      {
        "label": "F",
        "text": "System.out.println(Eagle.getName(f));"
      }
    ],
    "correctAnswers": [
      "B",
      "C",
      "D"
    ],
    "explanation": "While accessing a method or variable, the compiler will only allow you to access a method or variable that is\nvisible through the class of the reference.\nWhen you try to use f.name, the class of the reference f is Flyer and Flyer has no field named \"name\", thus, it will\nnot compile. But when you cast f to Bird (or Eagle), the compiler sees that the class Bird (or Eagle, because\nEagle inherits from Bird) does have a field named \"name\" so ((Eagle)f).name or ((Bird)f).name will work\nfine.\nf.getName() will work because Flyer does have a getName() method."
  },
  {
    "id": "2.911",
    "topic": "Working with Java API - ArrayList",
    "question": "Given the complete contents of TestClass.java file:\npackage x;\npublic class TestClass {\nArrayList<String> al;\npublic void init(){\nal = new ArrayList<>();\nal.add(\"Name 1\");\nal.add(\"Name 2\");\n}\npublic static void main(String[] args) throws Exception {\nTestClass tc = new TestClass();\ntc.init();\nSystem.out.println(\"Size = \"+tc.al.size());\n}\n}\nWhich import statement should be added to make it compile?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "import java.lang.*;"
      },
      {
        "label": "B",
        "text": "import java.lang.ArrayList;"
      },
      {
        "label": "C",
        "text": "import java.util.ArrayList;"
      },
      {
        "label": "D",
        "text": "import java.collections.ArrayList;"
      },
      {
        "label": "E",
        "text": "No import is necessary."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Only java.lang package and the package in which the current class exists are automatically imported.\nClass ArrayList is in java.util package, which is not imported automatically.\nNote that classes in the default package (i.e. the package with no name) cannot be imported by classes in other (i.e.\nnon default) packages. This is why you should not use the default package for creating classes."
  },
  {
    "id": "2.912",
    "topic": "Working with Methods",
    "question": "Which of the following methods does not return any value?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "public doStuff() throws FileNotFoundException, IllegalArgumentException{\n//valid code not shown\n}"
      },
      {
        "label": "B",
        "text": "public null doStuff() throws FileNotFoundException, IllegalArgumentException{\n//valid code not shown\n}"
      },
      {
        "label": "C",
        "text": "public doStuff() {\n//valid code not shown\n}"
      },
      {
        "label": "D",
        "text": "public void doStuff() throws FileNotFoundException, IllegalArgumentException{\n//valid code not shown\n}"
      },
      {
        "label": "E",
        "text": "private doStuff() {\n//valid code not shown\n}"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": ""
  },
  {
    "id": "2.913",
    "topic": "Creating and Using Arrays",
    "question": "Which of the following statements about an array are correct?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "An array can dynamically grow in size."
      },
      {
        "label": "B",
        "text": "Arrays can be created only for primitive types."
      },
      {
        "label": "C",
        "text": "Every array has a built in property named 'size' which tells you the number of elements in the array.\nIt is named length and not size. ArrayList has a method named size() that returns the number of\nelements in the ArrayList.\nString[] sa = { \"a\", \"b\" };\nint k = sa.length; //k will be assigned a value of 2.\nArrayList al = new ArrayList();\nint k = al.size(); //k will be assigned a value of 0."
      },
      {
        "label": "D",
        "text": "Every array has an implicit method named 'length' which tells you the number of elements in the array."
      },
      {
        "label": "E",
        "text": "Element indexing starts at 0."
      }
    ],
    "correctAnswers": [
      "E"
    ],
    "explanation": ""
  },
  {
    "id": "2.914",
    "topic": "Using Loop Constructs",
    "question": "Consider the following code:\npublic static void main(String[] args) {\nint[] values = { 10, 30, 50 };\nfor( int val : values ){\nint x = 0;\nwhile(x<values.length){\nSystem.out.println(x+\" \"+val);\nx++;\n}\n}\n}\nHow many times is 2 printed out in the output?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "0"
      },
      {
        "label": "B",
        "text": "1"
      },
      {
        "label": "C",
        "text": "2"
      },
      {
        "label": "D",
        "text": "3"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "This is a simple while loop nested inside a for loop. The for loop loops three times - once for each value in values\narray.\nSince, values.length is 3, x is incremented two times for each for loop iteration before the condition\nx<values.length returns false.\nTherefore, it prints:\n0 10\n1 10\n2 10\n0 30\n1 30\n2 30\n0 50\n1 50\n2 50"
  },
  {
    "id": "2.915",
    "topic": "Java Basics",
    "question": "Given the following contents of two java source files:\npackage util.log4j;\npublic class Logger {\npublic void log(String msg){\nSystem.out.println(msg);\n}\n}\nand\npackage util;\npublic class TestClass {\npublic static void main(String[] args) throws Exception {\nLogger logger = new Logger();\nlogger.log(\"hello\");\n}\n}\nWhat changes, when made independently, will enable the code to compile and run?",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "Replace Logger logger = new Logger(); with:\nlog4j.Logger logger = new log4j.Logger();"
      },
      {
        "label": "B",
        "text": "Replace package util.log4j; with\npackage util;"
      },
      {
        "label": "C",
        "text": "Replace Logger logger = new Logger(); with:\nutil.log4j.Logger logger = new util.log4j.Logger();"
      },
      {
        "label": "D",
        "text": "Remove package util.log4j; from Logger."
      },
      {
        "label": "E",
        "text": "Add import log4j; to TestClass."
      }
    ],
    "correctAnswers": [
      "B",
      "C"
    ],
    "explanation": ""
  },
  {
    "id": "2.916",
    "topic": "Using Loop Constructs",
    "question": "Consider the following code written by a new developer:\nwhile(true){\n//additional valid code\nif(isDone()) break;\n}\nWhat can be done to make this code more readable?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "Use a for loop"
      },
      {
        "label": "B",
        "text": "Use the enhanced for loop"
      },
      {
        "label": "C",
        "text": "use do-while instead of while."
      },
      {
        "label": "D",
        "text": "Use continue instead of break."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": ""
  },
  {
    "id": "2.917",
    "topic": "Working with Java Data Types",
    "question": "Given:\npublic class Square {\nprivate double side = 0; // LINE 2\npublic static void main(String[] args) { // LINE 4\nSquare sq = new Square(); // LINE 5\nside = 10; // LINE 6\n}\n}\nWhat can be done to make this code compile and run?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "replace // LINE 2 with:\nprivate int side = 0;"
      },
      {
        "label": "B",
        "text": "replace // LINE 2 with:\npublic int side = 0;"
      },
      {
        "label": "C",
        "text": "replace // LINE 5 with:\ndouble sq = new Square();"
      },
      {
        "label": "D",
        "text": "replace // LINE 6 with:\nsq.side = 10;"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": ""
  },
  {
    "id": "2.918",
    "topic": "Using Operators and Decision Constructs",
    "question": "Given:\nint a = 1 + 2 + 3 * 4;\nint b = 2 * 3 + 4;\nint total = a + b;\nWhat will be the value of total?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "34"
      },
      {
        "label": "B",
        "text": "38"
      },
      {
        "label": "C",
        "text": "29"
      },
      {
        "label": "D",
        "text": "25"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "You may get a few very simple questions about operator preference. Simple school math trick of BODMAS can be\nused to evaluate the expressions.\nB Brackets first\nO Orders (i.e. Powers and Square Roots, etc.)\nDM Division and Multiplication (left-to-right)\nAS Addition and Subtraction (left-to-right)"
  },
  {
    "id": "2.919",
    "topic": "Working with Java Data Types - Garbage Collection",
    "question": "After which line will the object created at line XXX be eligible for garbage collection?\npublic Object getObject(Object a) //0\n{\nObject b = new Object(); //XXX\nObject c, d = new Object(); //1\nc = b; //2\nb = a = null; //3\nreturn c; //4\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "//2"
      },
      {
        "label": "B",
        "text": "//3"
      },
      {
        "label": "C",
        "text": "//4"
      },
      {
        "label": "D",
        "text": "Never in this method."
      },
      {
        "label": "E",
        "text": "Cannot be determined."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Note that at line 2, c is assigned the reference of b. i.e. c starts pointing to the object created at //XXX. So even if\nat //3 b and a are set to null, the object is not without any reference.\nAlso, at //4 c is being returned. So the object referred to by c cannot be garbage collected in this method!"
  },
  {
    "id": "2.920",
    "topic": "Working with Java Data Types - Garbage Collection",
    "question": "Which is the earliest line in the following code after which the object created on line // 1 can be garbage collected,\nassuming no compiler optimizations are done?\npublic class NewClass{\nprivate Object o;\nvoid doSomething(Object s){ o = s; }\npublic static void main(String args[]){\nObject obj = new Object(); // 1\nNewClass tc = new NewClass(); //2\ntc.doSomething(obj); //3\nobj = new Object(); //4\nobj = null; //5\ntc.doSomething(obj); //6\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "Line 1"
      },
      {
        "label": "B",
        "text": "Line 2"
      },
      {
        "label": "C",
        "text": "Line 3"
      },
      {
        "label": "D",
        "text": "Line 4"
      },
      {
        "label": "E",
        "text": "Line 5"
      },
      {
        "label": "F",
        "text": "Line 6"
      }
    ],
    "correctAnswers": [
      "F"
    ],
    "explanation": "The official exam objectives now explicitly mention Garbage collection. All you need to know is:\n1. An object can be made eligible for garbage collection by making sure there are no references pointing to that\nobject.\n2. You cannot directly invoke the garbage collector. You can suggest the JVM to perform garbage collection by\ncalling System.gc();"
  },
  {
    "id": "2.921",
    "topic": "Working with Java Data Types - Garbage Collection",
    "question": "Consider the following code:\nclass MyClass { }\npublic class TestClass{\nMyClass getMyClassObject(){\nMyClass mc = new MyClass(); //1\nreturn mc; //2\n}\npublic static void main(String[] args){\nTestClass tc = new TestClass(); //3\nMyClass x = tc.getMyClassObject(); //4\nSystem.out.println(\"got myclass object\"); //5\nx = new MyClass(); //6\nSystem.out.println(\"done\"); //7\n}\n}\nAfter what line the MyClass object created at line 1 will be eligible for garbage collection?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "2"
      },
      {
        "label": "B",
        "text": "5"
      },
      {
        "label": "C",
        "text": "6"
      },
      {
        "label": "D",
        "text": "7"
      },
      {
        "label": "E",
        "text": "Never till the program ends."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "The official exam objectives now explicitly mention Garbage collection. All you need to know is:\n1. An object can be made eligible for garbage collection by making sure there are no references pointing to that\nobject.\n2. You cannot directly invoke the garbage collector. You can suggest the JVM to perform garbage collection by\ncalling System.gc();"
  },
  {
    "id": "2.922",
    "topic": "Working with Java Data Types - Garbage Collection",
    "question": "In the following code, after which statement (earliest), the object originally held in s, may be garbage collected ?\n1. public class TestClass{\n2. public static void main (String args[]){\n3. Student s = new Student(\"Vaishali\", \"930012\");\n4. s.grade();\n5. System.out.println(s.getName());\n6. s = null;\n7. s = new Student(\"Vaishali\", \"930012\");\n8. s.grade();\n9. System.out.println(s.getName());\n10 s = null;\n}\n}\npublic class Student{\nprivate String name, rollNumber;\npublic Student(String name, String rollNumber) {\nthis.name = name;\nthis.rollNumber = rollNumber;\n}\n//valid setter and getter for name and rollNumber follow\npublic void grade() {\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It will not be Garbage Collected till the end of the program."
      },
      {
        "label": "B",
        "text": "Line 5"
      },
      {
        "label": "C",
        "text": "Line 6"
      },
      {
        "label": "D",
        "text": "Line 7"
      },
      {
        "label": "E",
        "text": "Line 10"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "In this case, since there is only one reference to Student object, as soon as it is set to null, the object held by the\nreference is eligible for GC, here it is done at line 6.\nNote that although an object is created at line 7 with same parameters, it is a different object and it will be eligible\nfor GC after line 10."
  },
  {
    "id": "2.923",
    "topic": "Working with Java Data Types - Garbage Collection",
    "question": "Given the following code:\nclass M { }\nclass N{\nprivate M m = new M();\npublic void makeItNull(M pM){\npM = null;\n}\npublic void makeThisNull(){\nmakeItNull(m);\n}\npublic static void main(String[] args){\nN n = new N();\nn.makeThisNull();\n}\n}\nWhich of the following statements are correct?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "There are no instances of M to be garbage collected till the program ends."
      },
      {
        "label": "B",
        "text": "A call to n.makeThisNull() marks the private instance of M for garbage collection."
      },
      {
        "label": "C",
        "text": "Setting pM = null; in makeItNull(), marks the private instance of M for garbage collection."
      },
      {
        "label": "D",
        "text": "private members of a class become eligible for garbage collection only when the instance of the class itself becomes eligible for garbage collection."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "The official exam objectives now explicitly mention Garbage collection. All you need to know is:\n1. An object can be made eligible for garbage collection by making sure there are no references pointing to that\nobject.\n2. You cannot directly invoke the garbage collector. You can suggest the JVM to perform garbage collection by\ncalling System.gc();"
  },
  {
    "id": "2.924",
    "topic": "Working with Methods - Overloading",
    "question": "Consider the following class...\nclass TestClass{\nvoid probe(Integer x) { System.out.println(\"In Integer\"); } //2\nvoid probe(Object x) { System.out.println(\"In Object\"); } //3\nvoid probe(Long x) { System.out.println(\"In Long\"); } //4\npublic static void main(String[] args){\nString a = \"hello\";\nnew TestClass().probe(a);\n}\n}\nWhat will be printed?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "In Integer"
      },
      {
        "label": "B",
        "text": "In Object"
      },
      {
        "label": "C",
        "text": "In Long"
      },
      {
        "label": "D",
        "text": "It will not compile"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Here, we have three overloaded probe methods but there is no probe method that takes a String parameter. The\nonly one that is able to accept a String is the one that takes Object as a parameter. So that method will be called.\nA String cannot be assigned to a variable of class Integer or Long variable, but it can be assigned to a variable of\nclass Object."
  },
  {
    "id": "2.925",
    "topic": "Working with Java Data Types",
    "question": "Given:\nimport java.util.*;\npublic class TestClass {\npublic static void main(String[] args) throws Exception {\nArrayList<Double> al = new ArrayList<>();\n//INSERT CODE HERE\n}\n}\nWhat can be inserted in the above code so that it can compile without any error?",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "al.add(111);"
      },
      {
        "label": "B",
        "text": "System.out.println(al.indexOf(1.0));"
      },
      {
        "label": "C",
        "text": "System.out.println(al.contains(\"string\"));"
      },
      {
        "label": "D",
        "text": "Double d = al.get(al.length);"
      }
    ],
    "correctAnswers": [
      "B",
      "C"
    ],
    "explanation": "Note that al is declared as ArrayList<Double>, therefore the add method is typed to accept only a Double."
  },
  {
    "id": "2.927",
    "topic": "Using Operators and Decision Constructs",
    "question": "What will the following code print ?\nclass Test{\npublic static void main(String[] args){\nint k = 1;\nint[] a = { 1 };\nk += (k = 4) * (k + 2);\na[0] += (a[0] = 4) * (a[0] + 2);\nSystem.out.println( k + \" , \" + a[0]);\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It will not compile."
      },
      {
        "label": "B",
        "text": "4 , 4"
      },
      {
        "label": "C",
        "text": "25 , 25"
      },
      {
        "label": "D",
        "text": "13 , 13"
      },
      {
        "label": "E",
        "text": "None of the above."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "The value 1 of k is saved by the compound assignment operator += before its right-hand operand (k = 4) * (k +\n2) is evaluated. Evaluation of this right-hand operand then assigns 4 to k, calculates the value 6 for k + 2, and then\nmultiplies 4 by 6 to get 24. This is added to the saved value 1 to get 25, which is then stored into k by the +=\noperator. An identical analysis applies to the case that uses a[0].\nk += (k = 4) * (k + 2);\na[0] += (a[0] = 4) * (a[0] + 2);\nk = k + (k = 4) * (k + 2);\na[0] = a[0] + (a[0] = 4) * (a[0] + 2);"
  },
  {
    "id": "2.928",
    "topic": "Java Basics",
    "question": "Given the following set of member declarations, which of the following is true?\nint a; // (1)\nstatic int a; // (2)\nint f( ) { return a; } // (3)\nstatic int f( ) { return a; } // (4)",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "Declarations (1) and (3) cannot occur in the same class definition."
      },
      {
        "label": "B",
        "text": "Declarations (2) and (4) cannot occur in the same class definition."
      },
      {
        "label": "C",
        "text": "Declarations (1) and (4) cannot occur in the same class definition."
      },
      {
        "label": "D",
        "text": "Declarations (2) and (3) cannot occur in the same class definition."
      },
      {
        "label": "E",
        "text": "Declarations (1) and (2) cannot occur in the same class definition.\nvariable names must be different."
      }
    ],
    "correctAnswers": [
      "C",
      "E"
    ],
    "explanation": "Local variables can have same name as member variables. The local variables will simply shadow the member\nvariables with the same names.\nDeclaration (4) defines a static method that tries to access a variable named 'a' which is not locally declared.\nSince the method is static, this access will only be valid if variable 'a' is declared static within the class. Therefore\ndeclarations (1) and (4) cannot occur in the same definition."
  },
  {
    "id": "2.929",
    "topic": "Using Operators and Decision Constructs",
    "question": "Consider the following lines of code:\nboolean greenLight = true;\nboolean pedestrian = false;\nboolean rightTurn = true;\nboolean otherLane = false;\nYou can go ahead only if the following expression evaluates to 'true' :\n(( (rightTurn && !pedestrian || otherLane) || ( ? && !pedestrian && greenLight ) ) == true )\nWhat variables can you put in place of '?' so that you can go ahead?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "rightTurn"
      },
      {
        "label": "B",
        "text": "otherLane"
      },
      {
        "label": "C",
        "text": "Any variable would do."
      },
      {
        "label": "D",
        "text": "None of the variable would allow to go."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Observe that (rightTurn && !pedestrian || otherLane) is true, therefore ( ? && !pedestrian &&\ngreenLight ) does not matter.\n|| and && are short circuit operators. So, if the first part of the expression ( i.e. part before || ) is true ( or false for\n&& ) the other part is not evaluated at all.\nNote that this is not true for | and &. In that case, the whole expression will be evaluated even if the value of the\nexpression can be known by just evaluating first part."
  },
  {
    "id": "2.930",
    "topic": "Working with Inheritance - instanceof",
    "question": "Expression (s instanceof java.util.Date) will return false if 's' is declared as a variable of class\njava.lang.String.",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "True"
      },
      {
        "label": "B",
        "text": "False"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "It will not even compile because the compiler knows that 's' (which is declared as of class String) can NEVER\nrefer to an object of class java.util.Date. So, it will not accept this code.\nHad 's' been declared as a variable of type Object, this code would have compiled because compiler sees that at\nrun time it is possible for s to refer to an object of class Date."
  },
  {
    "id": "2.931",
    "topic": "Working with Inheritance",
    "question": "Consider the following classes :\nclass A{\npublic static void sM1() { System.out.println(\"In base static\"); }\n}\nclass B extends A{\nLine 1 : // public static void sM1() { System.out.println(\"In sub static\"); }\nLine 2 : // public void sM1() { System.out.println(\"In sub non-static\"); }\n}\nWhich of the following statements are true?",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "class B will not compile if line 1 is uncommented.\nstatic method sM1() can be shadowed by a static method sM1() in the subclass."
      },
      {
        "label": "B",
        "text": "class B will not compile if line 2 is uncommented."
      },
      {
        "label": "C",
        "text": "class B will not compile if line 1 and 2 are both uncommented."
      },
      {
        "label": "D",
        "text": "Only the second option is correct."
      },
      {
        "label": "E",
        "text": "Only the third option is correct."
      }
    ],
    "correctAnswers": [
      "B",
      "C"
    ],
    "explanation": "Another concept (although not related to this question but about static methods) is that static methods are never\noverridden. They are HIDDEN or SHADOWED just like static or non-static fields. For example,\nclass A{\nint i = 10;\npublic static void m1(){ }\npublic void m2() { }\n}\nclass B extends A{\nint i = 20;\npublic static void m1() { }\npublic void m2() { }\n}\nHere, UNLIKE m2, m1() of B does not override m1() of A, it just shadows it, as proven by the following code:\nA a = new B();\nSystem.out.println(a.i) //will print 10 instead of 20\na.m1(); //will call A's m1\na.m2(); //will call B's m2 as m2() is not static and so overrides A's m2()"
  },
  {
    "id": "2.932",
    "topic": "Using Operators and Decision Constructs",
    "question": "Which of the following statements are true?",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "The modulus operator % can only be used with integer operands.\nIt can be used on floating points operands also. For example, 5.5 % 3 = 2.5"
      },
      {
        "label": "B",
        "text": "& can have integral as well as boolean operands."
      },
      {
        "label": "C",
        "text": "The arithmetic operators *, / and % have the same level of precedence."
      },
      {
        "label": "D",
        "text": "&& can have integer as well as boolean operands.\n!, && and || operate only on booleans."
      },
      {
        "label": "E",
        "text": "~ can have integer as well as boolean operands.\n~ Operates only on integral types"
      }
    ],
    "correctAnswers": [
      "B",
      "C"
    ],
    "explanation": "Note :\nintegral types means byte, short, int, long, and char\nAs per Section 4.1 of JLS 8 -\nThe integral types are byte, short, int, and long, whose values are 8-bit, 16-bit, 32-bit and 64-bit signed two's-\ncomplement integers, respectively, and char, whose\nvalues are 16-bit unsigned integers representing UTF-16 code units."
  },
  {
    "id": "2.933",
    "topic": "Java Basics",
    "question": "Which of the given options can be successfully inserted at line 1....\n//line 1\npublic class A{\n}",
    "selectCount": 3,
    "options": [
      {
        "label": "A",
        "text": "import java.lang.*;"
      },
      {
        "label": "B",
        "text": "package p.util;"
      },
      {
        "label": "C",
        "text": "public class MyClass{ }"
      },
      {
        "label": "D",
        "text": "abstract class MyClass{ }"
      }
    ],
    "correctAnswers": [
      "A",
      "B",
      "D"
    ],
    "explanation": "To make a class abstract, you only need to mark it abstract as shown in Option 4. You don't necessarily need to put\nan abstract method in a class."
  },
  {
    "id": "2.935",
    "topic": "Working with Java API - String, StringBuilder",
    "question": "Consider the following class...\nclass TestClass{\nint i;\npublic TestClass(int i) { this.i = i; }\npublic String toString(){\nif(i == 0) return null;\nelse return \"\"+i;\n}\npublic static void main(String[ ] args){\nTestClass t1 = new TestClass(0);\nTestClass t2 = new TestClass(2);\nSystem.out.println(t2);\nSystem.out.println(\"\"+t1);\n}\n}\nWhat will be the output when the above program is run?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It will throw NullPointerException when run."
      },
      {
        "label": "B",
        "text": "It will not compile."
      },
      {
        "label": "C",
        "text": "It will print 2 and then will throw NullPointerException."
      },
      {
        "label": "D",
        "text": "It will print 2 and null."
      },
      {
        "label": "E",
        "text": "None of the above."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "The method print()/println() of PrintStream takes an Object and prints out a String that is returned by calling\nString.valueOf(object), which in turn calls toString() on that object. Note that as toString() is defined in\nObject class, all objects in java have this method. So it prints 2 first.\nThe second object's toString() returns null, so it prints \"null\". There is no NullPointerException because no\nmethod is called on null.\nNow, the other feature of print/println methods is that if they get null as input parameter, they print \"null\".\nThey do not try to call toString() on null.\nSo, if you have, Object o = null; System.out.println(o); will print null and will not throw a\nNullPointerException."
  },
  {
    "id": "2.937",
    "topic": "Working with Java Data Types",
    "question": "Given the following class, which statements can be inserted at line 1 without causing the code to fail compilation?\npublic class TestClass{\nint a;\nint b = 0;\nstatic int c;\npublic void m(){\nint d;\nint e = 0;\n// Line 1\n}\n}",
    "selectCount": 4,
    "options": [
      {
        "label": "A",
        "text": "a++;"
      },
      {
        "label": "B",
        "text": "b++;"
      },
      {
        "label": "C",
        "text": "c++;"
      },
      {
        "label": "D",
        "text": "d++;"
      },
      {
        "label": "E",
        "text": "e++;"
      }
    ],
    "correctAnswers": [
      "A",
      "B",
      "C",
      "E"
    ],
    "explanation": "All the instance or static variables are given a default values if they are not explicitly initialized. All numeric\nvariable are given a value of zero or equivalent to zero (i.e. 0 for integral types and 0.0 for double/float). Booleans\nare initialized to false and objects are initialized to null.\nNote that local (aka automatic) variables, such as the variables d and e in the code given here, are not initialized\nautomatically. They have to be initialized explicitly. However, it is ok to leave them uninitialized if you don't use\nthem anywhere in the code (as is the case with the variable d)."
  },
  {
    "id": "2.938",
    "topic": "Creating and Using Arrays",
    "question": "What will the following program print?\nclass Test{\npublic static void main(String[] args){\nint i = 4;\nint ia[][][] = new int[i][i = 3][i];\nSystem.out.println( ia.length + \", \" + ia[0].length+\", \"+ ia[0][0].length);\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It will not compile."
      },
      {
        "label": "B",
        "text": "3, 4, 3"
      },
      {
        "label": "C",
        "text": "3, 3, 3"
      },
      {
        "label": "D",
        "text": "4, 3, 4"
      },
      {
        "label": "E",
        "text": "4, 3, 3"
      }
    ],
    "correctAnswers": [
      "E"
    ],
    "explanation": "In an array creation expression, there may be one or more dimension expressions, each within brackets. Each\ndimension expression is fully evaluated before any part of any dimension expression to its right. The first\ndimension is calculated as 4 before the second dimension expression sets 'i' to 3.\nNote that if evaluation of a dimension expression completes abruptly, no part of any dimension expression to its\nright will appear to have been evaluated."
  },
  {
    "id": "2.939",
    "topic": "Working with Methods - Overloading",
    "question": "Which of the following are true regarding overloading of a method?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "An overloading method must have a different parameter list and same return type as that of the overloaded\nmethod.\nThere is no restriction on the return type. If the parameters are different then the methods are totally different\n(other than the name) so their return types can be anything."
      },
      {
        "label": "B",
        "text": "If there is another method with the same name but with a different number of arguments in a class then that method can be called overloaded."
      },
      {
        "label": "C",
        "text": "If there is another method with the same name and same number and type of arguments but with a different\nreturn type in a class then that method can be called as overloaded."
      },
      {
        "label": "D",
        "text": "An overloaded method means a method with the same name and same number and type of arguments exists in the super class and sub class."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": ""
  },
  {
    "id": "2.940",
    "topic": "Working with Methods",
    "question": "Which of the statements regarding the following code are correct?\npublic class TestClass{\nstatic int a;\nint b;\npublic TestClass(){\nint c;\nc = a;\na++;\nb += c;\n}\npublic static void main(String args[]) { new TestClass(); }\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "The code will fail to compile because the constructor is trying to access static members."
      },
      {
        "label": "B",
        "text": "The code will fail to compile because the constructor is trying to use static member variable a before it has been initialized."
      },
      {
        "label": "C",
        "text": "The code will fail to compile because the constructor is trying to use member variable b before it has been initialized."
      },
      {
        "label": "D",
        "text": "The code will fail to compile because the constructor is trying to use local variable c before it has been initialized."
      },
      {
        "label": "E",
        "text": "The code will compile and run without any problem."
      }
    ],
    "correctAnswers": [
      "E"
    ],
    "explanation": "All the instance or static variables are given a default values if not explicitly initialized. All numeric variable are\ngiven a value of zero or equivalent to zero (i.e. 0.0 for double or float ).\nbooleans are initialized to false and objects references are initialized to null."
  },
  {
    "id": "2.941",
    "topic": "Working with Java API - String, StringBuilder",
    "question": "What will the following code print?\nString abc = \"\";\nabc.concat(\"abc\");\nabc.concat(\"def\");\nSystem.out.print(abc);",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "abc"
      },
      {
        "label": "B",
        "text": "abcdef"
      },
      {
        "label": "C",
        "text": "def"
      },
      {
        "label": "D",
        "text": "It will print empty string (or in other words, nothing)."
      },
      {
        "label": "E",
        "text": "It will not compile because there is no concat() method in String class."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Strings are immutable so doing abc.concat(\"abc\") will create a new string \"abc\" but will not affect the original\nstring \"\"."
  },
  {
    "id": "2.942",
    "topic": "Working with Java API - ArrayList",
    "question": "Consider the following code to count objects and save the most recent object ...\nint i = 0 ;\nObject prevObject ;\npublic void saveObject(List e ){\nprevObject = e ;\ni++ ;\n}\nWhich of the following calls will work without throwing an exception?",
    "selectCount": 3,
    "options": [
      {
        "label": "A",
        "text": "saveObject( new ArrayList() );"
      },
      {
        "label": "B",
        "text": "Collection c = new ArrayList(); saveObject( c );"
      },
      {
        "label": "C",
        "text": "List l = new ArrayList(); saveObject(l);"
      },
      {
        "label": "D",
        "text": "saveObject(null);"
      },
      {
        "label": "E",
        "text": "saveObject(0); //The argument is the number zero and not the letter o"
      }
    ],
    "correctAnswers": [
      "A",
      "C",
      "D"
    ],
    "explanation": ""
  },
  {
    "id": "2.944",
    "topic": "Working with Java Data Types",
    "question": "Which of the following are valid code snippets appearing in a method:",
    "selectCount": 3,
    "options": [
      {
        "label": "A",
        "text": "int a = b = c = 100;"
      },
      {
        "label": "B",
        "text": "int a, b, c; a = b = c = 100;"
      },
      {
        "label": "C",
        "text": "int a, b, c=100;"
      },
      {
        "label": "D",
        "text": "int a=100, b, c;"
      },
      {
        "label": "E",
        "text": "int a= 100 = b = c;"
      }
    ],
    "correctAnswers": [
      "B",
      "C",
      "D"
    ],
    "explanation": "Java does not allow chained initialization in declaration so option 1 and 5 are not valid."
  },
  {
    "id": "2.945",
    "topic": "Working with Inheritance",
    "question": "Which of the following statements are true?",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "Private methods cannot be overridden in subclasses."
      },
      {
        "label": "B",
        "text": "A subclass can override any method in a non-final superclass.\nOnly the methods that are not declared to be final can be overridden. Further, private methods are not"
      },
      {
        "label": "C",
        "text": "An overriding method can declare that it throws a wider spectrum of checked exceptions than the method it is\noverriding."
      },
      {
        "label": "D",
        "text": "The parameter list of an overriding method must be a subset of the parameter list of the method that it is\noverriding.\nAn overriding method (the method that is trying to override the base class’s method) must have the same\nparameters."
      },
      {
        "label": "E",
        "text": "The overriding method may opt not to declare any throws clause even if the original method has a throws\nclause.\nNo exception (i.e. an empty set of exceptions) is a valid subset of the set of exceptions thrown by the original"
      }
    ],
    "correctAnswers": [
      "A",
      "E"
    ],
    "explanation": "A method can be overridden by defining a method with the same signature(i.e. name and parameter list) and return\ntype as the method in a superclass. The return type can also be a subclass of the original method's return type.\nOnly methods that are accessible can be overridden. A private method cannot, therefore, be overridden in\nsubclasses, but the subclasses are allowed to define a new method with exactly the same signature.\nA final method cannot be overridden.\nAn overriding method cannot exhibit behavior that contradicts the declaration of the original method. An\noverriding method therefore cannot return a different type (except a subtype) or throw a wider spectrum of\nexceptions than the original method in the superclass. This, of course, applies only to checked exceptions because\nunchecked exceptions are not required to be declared at all.\nA subclass may have a static method with the same signature as a static method in the base class but it is not called\noverriding. It is called hiding because the concept of polymorphism doesn't apply to static members."
  },
  {
    "id": "2.946",
    "topic": "Creating and Using Arrays",
    "question": "What will be the result of attempting to compile and run the following class?\npublic class TestClass{\npublic static void main(String args[ ] ){\nint i = 1;\nint[] iArr = {1};\nincr(i) ;\nincr(iArr) ;\nSystem.out.println( \"i = \" + i + \" iArr[0] = \" + iArr [ 0 ] ) ;\n}\npublic static void incr(int n ) { n++ ; }\npublic static void incr(int[ ] n ) { n [ 0 ]++ ; }\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "The code will print i = 1 iArr[0] = 1"
      },
      {
        "label": "B",
        "text": "The code will print i = 1 iArr[0] = 2"
      },
      {
        "label": "C",
        "text": "The code will print i = 2 iArr[0] = 1"
      },
      {
        "label": "D",
        "text": "The code will print i = 2 iArr[0] = 2"
      },
      {
        "label": "E",
        "text": "The code will not compile."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Arrays are proper objects (i.e. iArr instanceof Object returns true) and Object references are passed by value\n(so effectively, it seems as though objects are being passed by reference).\nSo the value of reference of iArr is passed to the method incr(int[] i); This method changes the actual value\nof the int element at 0."
  },
  {
    "id": "2.947",
    "topic": "Constructors",
    "question": "Which line contains a valid constructor in the following class definition?\npublic class TestClass{\nint i, j;\npublic TestClass getInstance() { return new TestClass(); } //1\npublic void TestClass(int x, int y) { i = x; j = y; } //2\npublic TestClass TestClass() { return new TestClass(); } //3\npublic ~TestClass() { } //4\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "Line 1"
      },
      {
        "label": "B",
        "text": "Line 2"
      },
      {
        "label": "C",
        "text": "Line 3"
      },
      {
        "label": "D",
        "text": "Line 4"
      },
      {
        "label": "E",
        "text": "None of the above."
      }
    ],
    "correctAnswers": [
      "E"
    ],
    "explanation": ""
  },
  {
    "id": "2.948",
    "topic": "Using Operators and Decision Constructs",
    "question": "Which statements about the output of the following programs are true?\npublic class TestClass{\npublic static void main(String args[ ] ){\nint i = 0 ;\nboolean bool1 = true;\nboolean bool2 = false;\nboolean bool = false;\nbool = (bool2 & method1(\"1\")); //1\nbool = (bool2 && method1(\"2\")); //2\nbool = (bool1 | method1(\"3\")); //3\nbool = (bool1 || method1(\"4\")); //4\n}\npublic static boolean method1(String str){\nSystem.out.println(str);\nreturn true;\n}\n}",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "1 will be the part of the output."
      },
      {
        "label": "B",
        "text": "2 will be the part of the output."
      },
      {
        "label": "C",
        "text": "3 will be the part of the output."
      },
      {
        "label": "D",
        "text": "4 will be the part of the output."
      },
      {
        "label": "E",
        "text": "None of the above"
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "explanation": "& and | do not short circuit the expression. The value of all the expressions ( 1 through 4) can be determined just\nby looking at the first part.\n&& and || do not evaluate the rest of the expression if the result of the whole expression can be known by just\nevaluating the left operand, so method1() is not called for 2 and 4."
  },
  {
    "id": "2.949",
    "topic": "Using Operators and Decision Constructs",
    "question": "What is the result of executing the following fragment of code:\nboolean b1 = false;\nboolean b2 = false;\nif (b2 != b1 = !b2){\nSystem.out.println(\"true\");\n}\nelse{\nSystem.out.println(\"false\");\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "Compile time error."
      },
      {
        "label": "B",
        "text": "It will print true."
      },
      {
        "label": "C",
        "text": "It will print false."
      },
      {
        "label": "D",
        "text": "Runtime error."
      },
      {
        "label": "E",
        "text": "It will print nothing."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Note that boolean operators have more precedence than =. (In fact, = has least precedence of all operators.)\nso, in (b2 != b1 = !b2) first b2 != b1 is evaluated which returns a value 'false'. So the expression becomes false =\n!b2. And this is illegal because false is a value and not a variable!\nHad it been something like (b2 = b1 != b2) then it is valid because it will boil down to : b2 = false.\nBecause all an if() needs is a boolean, now b1 != b2 returns false which is a boolean and as b2 = false is an\nexpression and every expression has a return value (which is actually the Left Hand Side of the expression). Here,\nit returns false, which is again a boolean.\nNote that return value of expression : i = 10 , where i is an int, is 10 (an int)."
  },
  {
    "id": "2.950",
    "topic": "Handling Exceptions",
    "question": "Consider the following method -\npublic float parseFloat( String s ){\nfloat f = 0.0f;\ntry{\nf = Float.valueOf( s ).floatValue();\nreturn f ;\n}\ncatch(NumberFormatException nfe){\nf = Float.NaN ;\nreturn f;\n}\nfinally{\nf = 10.0f;\nreturn f;\n}\n}\nWhat will it return if the method is called with the input \"0.0\" ?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It will not compile."
      },
      {
        "label": "B",
        "text": "It will return 10.0"
      },
      {
        "label": "C",
        "text": "It will return Float.Nan"
      },
      {
        "label": "D",
        "text": "It will return 0.0"
      },
      {
        "label": "E",
        "text": "None of the above."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "finally block will always execute (except when there is a System.exit() in try or catch). And inside the finally\nblock, it is setting f to 10.0. So no matter what the input is, this method will always return 10.0."
  },
  {
    "id": "2.951",
    "topic": "Working with Inheritance",
    "question": "Consider the following program...\nclass Super { }\nclass Sub extends Super { }\npublic class TestClass{\npublic static void main(String[] args){\nSuper s1 = new Super(); //1\nSub s2 = new Sub(); //2\ns1 = (Super) s2; //3\n}\n}\nWhich of the following statements are correct?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It will compile and run without any problems."
      },
      {
        "label": "B",
        "text": "It will compile but WILL throw ClassCastException at runtime."
      },
      {
        "label": "C",
        "text": "It will compile but MAY throw ClassCastException at runtime."
      },
      {
        "label": "D",
        "text": "It will not compile."
      },
      {
        "label": "E",
        "text": "None of the above."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Note that s2 is a variable of class Sub, which is a subclass of Super. s1 is a variable of class Super. A subclass can\nALWAYS be assigned to a super class variable without any cast. It will always compile and run without any\nexception.\nFor example, a Dog \"IS A\" Animal, so you don't need to cast it.\nBut an Animal may not always be a Dog. So you need to cast it to make it compile and during the runtime the\nactual object referenced by animal should be a Dog otherwise it will throw a ClassCastException."
  },
  {
    "id": "2.952",
    "topic": "Working with Inheritance",
    "question": "Which of the following lines of code that, when inserted at line 1, will make the overriding method in SubClass\ninvoke the overridden method in BaseClass on the current object with the same parameter.\nclass BaseClass{\npublic void print(String s) { System.out.println(\"BaseClass :\"+s); }\n}\nclass SubClass extends BaseClass{\npublic void print(String s){\nSystem.out.println(\"SubClass :\"+s);\n// Line 1\n}\npublic static void main(String args[]){\nSubClass sc = new SubClass();\nsc.print(\"location\");\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "this.print(s);"
      },
      {
        "label": "B",
        "text": "super.print(s);"
      },
      {
        "label": "C",
        "text": "print(s);"
      },
      {
        "label": "D",
        "text": "BaseClass.print(s);"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": ""
  },
  {
    "id": "2.953",
    "topic": "Using Operators and Decision Constructs",
    "question": "Which of the following are also known as \"short circuiting logical operators\"?",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "&"
      },
      {
        "label": "B",
        "text": "||"
      },
      {
        "label": "C",
        "text": "&&"
      },
      {
        "label": "D",
        "text": "|"
      },
      {
        "label": "E",
        "text": "^"
      }
    ],
    "correctAnswers": [
      "B",
      "C"
    ],
    "explanation": "|| and && are called short circuiting operators because if, while evaluating a logical expression, at any stage, the\nvalue of the whole expression can be determined without evaluating the rest of the expression, then the remaining\nsub-expressions are not evaluated.\nConsider this:\nboolean bool = true; int k = 10;\nif( bool == false && ( (k = 3) == 5 ) ) { .....}\nSystem.out.println(k); // this will print 10.\nBecause the value of the whole expression can be determined just by looking at bool == false.\nSo k = 3 is never executed. The big expression was short circuited by &&.\nHad the expression been if( bool == false & ( (k = 3) == 5 ) ) { .....} /* notice single &\ninstead of && */\nthen it would have printed 3 because k = 3 will be executed. Even though the value of the expression is known\nimmediately after evaluating bool == false, the rest of the expression is still evaluated. Thus, & is not a short\ncircuiting operator.\nSame thing happens with || and | as well."
  },
  {
    "id": "2.954",
    "topic": "Handling Exceptions",
    "question": "What class of objects can be declared by the throws clause?",
    "selectCount": 3,
    "options": [
      {
        "label": "A",
        "text": "Exception"
      },
      {
        "label": "B",
        "text": "Error"
      },
      {
        "label": "C",
        "text": "Event"
      },
      {
        "label": "D",
        "text": "Object"
      },
      {
        "label": "E",
        "text": "RuntimeException"
      }
    ],
    "correctAnswers": [
      "A",
      "B",
      "E"
    ],
    "explanation": "You can declare anything that is a Throwable or a subclass of Throwable, in the throws clause."
  },
  {
    "id": "2.955",
    "topic": "Java Basics",
    "question": "An instance member ...",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "can be a variable, a constant or a method."
      },
      {
        "label": "B",
        "text": "is a variable or a constant."
      },
      {
        "label": "C",
        "text": "belongs to the class."
      },
      {
        "label": "D",
        "text": "belongs to an instance of the class."
      },
      {
        "label": "E",
        "text": "is same as a local variable."
      }
    ],
    "correctAnswers": [
      "A",
      "D"
    ],
    "explanation": "An instance member belongs to a single instance, not the class as a whole. An instance member is a member\nvariable or a member method that belongs to a specific object instance. All non-static members are instance\nmembers."
  },
  {
    "id": "2.956",
    "topic": "Working with Java API - String, StringBuilder",
    "question": "Consider the following class...\nclass MyString extends String{\nMyString(){ super(); }\n}\nThe above code will not compile.",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "True"
      },
      {
        "label": "B",
        "text": "False"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "This will not compile because String is a final class and final classes cannot be extended.\nThere are questions on this aspect in the exam and so you should remember that StringBuffer and\nStringBuilder are also final. All Primitive wrappers are also final (i.e. Boolean, Integer, Byte etc).\njava.lang.System is also final."
  },
  {
    "id": "2.957",
    "topic": "Working with Methods",
    "question": "What will the following program print?\npublic class TestClass{\nstatic int someInt = 10;\npublic static void changeIt(int a){\na = 20;\n}\npublic static void main(String[] args){\nchangeIt(someInt);\nSystem.out.println(someInt);\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "10"
      },
      {
        "label": "B",
        "text": "20"
      },
      {
        "label": "C",
        "text": "It will not compile."
      },
      {
        "label": "D",
        "text": "It will throw an exception at runtime."
      },
      {
        "label": "E",
        "text": "None of the above."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "In case of primitives such as an int, it is the value of the primitive that is passed. For example, in this question,\nwhen you pass someInt to changeIt method, you are actually passing the value 10 to the method, which is then\nassigned to method variable 'a'. In the method, you assign 20 to 'a'. However, this does not change the value\ncontained in someInt. someInt still contains 10. Therefore, 10 is printed.\nTheoretically, java supports Pass by Value for everything ( i.e. primitives as well as Objects).\n. Primitives are always passed by value.\n. Object \"references\" are passed by value. So it looks like the object is passed by reference but actually it is the\nvalue of the reference that is passed.\nAn example:\nObject o1 = new Object(); //Let us say, the object is stored at memory location 15000.\n//Since o1 actually stores the address of the memory location where the object is\nstored, it contains 15000.\nNow, when you call someMethod(o1); the value 15000 is passed to the method.\nInside the method someMethod():\nsomeMethod( Object localVar) {\n/*localVar now contains 15000, which means it also points to the same memory\nlocation where the object is stored.\nTherefore, when you call a method on localVar, it will be executed on the same\nobject.\nHowever, when you change the value of localVar itself, for example if you do\nlocalVar=null,\nit then starts pointing to a different memory location. But the original variable o1\nstill\ncontains 15000 so it still points to the same object. */\n}\n\nIf you need even more detailed explanation, please check http://www.javaranch.com/campfire/StoryPassBy.jsp"
  },
  {
    "id": "2.958",
    "topic": "Working with Java Data Types",
    "question": "Consider the following code:\npublic class Conversion{\npublic static void main(String[] args){\nint i = 1234567890;\nfloat f = i;\nSystem.out.println(i - (int)f);\n}\n}\nWhat will it print when run?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It will print 0."
      },
      {
        "label": "B",
        "text": "It will not print 0."
      },
      {
        "label": "C",
        "text": "It will not compile."
      },
      {
        "label": "D",
        "text": "It will throw an exception at runtime."
      },
      {
        "label": "E",
        "text": "None of the above."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Actually it prints -46. This is because the information was lost during the conversion from type int to type float as\nvalues of type float are not precise to nine significant digits.\nNote: You are not required to know the number of significant digits that can be stored by a float for the exam.\nHowever, it is good to know about loss of precision while using float and double."
  },
  {
    "id": "2.959",
    "topic": "Handling Exceptions",
    "question": "What will the following class print ?\nclass Test{\npublic static void main(String[] args){\nint[][] a = { { 00, 01 }, { 10, 11 } };\nint i = 99;\ntry {\na[val()][i = 1]++;\n} catch (Exception e) {\nSystem.out.println( i+\", \"+a[1][1]);\n}\n}\nstatic int val() throws Exception {\nthrow new Exception(\"unimplemented\");\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "99 , 11"
      },
      {
        "label": "B",
        "text": "1 , 11"
      },
      {
        "label": "C",
        "text": "1 and an unknown value."
      },
      {
        "label": "D",
        "text": "99 and an unknown value."
      },
      {
        "label": "E",
        "text": "It will throw an exception at Run time."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "If evaluation of a dimension expression completes abruptly, no part of any dimension expression to its right will\nappear to have been evaluated.\nThus, while evaluating a[val()][i=1]++, val() throws an exception and i=1 will not be executed. Therefore, i\nremains 99 and a[1][1] will print 11."
  },
  {
    "id": "2.960",
    "topic": "Using Loop Constructs",
    "question": "What will the following code print when compiled and run?\nclass Test{\npublic static void main(String args[]){\nint c = 0;\nA: for(int i = 0; i < 2; i++){\nB: for(int j = 0; j < 2; j++){\nC: for(int k = 0; k < 3; k++){\nc++;\nif(k>j) break;\n}\n}\n}\nSystem.out.println(c);\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "7"
      },
      {
        "label": "B",
        "text": "8"
      },
      {
        "label": "C",
        "text": "9"
      },
      {
        "label": "D",
        "text": "10"
      },
      {
        "label": "E",
        "text": "11"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "The point to note here is that a break without any label breaks the innermost outer loop. So in this case, whenever\nk>j, the C loop breaks.\nYou should run the program and follow it step by step to understand how it progresses."
  },
  {
    "id": "2.961",
    "topic": "Working with Inheritance",
    "question": "Which one of these is a proper definition of a class Car that cannot be sub-classed?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "class Car { }"
      },
      {
        "label": "B",
        "text": "abstract class Car { }"
      },
      {
        "label": "C",
        "text": "native class Car { }"
      },
      {
        "label": "D",
        "text": "static class Car { }"
      },
      {
        "label": "E",
        "text": "final class Car { }\nfinal keyword prevents a class from being subclassed and a method from being overridden."
      }
    ],
    "correctAnswers": [
      "E"
    ],
    "explanation": "A class can be extended unless it is declared final.\nAn inner class can be declared static and still be extended. Notice the distinction. For classes, final means it cannot\nbe extended, while for methods, final means it cannot be overridden in a subclass.\nThe native keyword can only be used on methods, not on classes and instance variables."
  },
  {
    "id": "2.962",
    "topic": "Working with Methods - Overloading",
    "question": "Consider the following method...\npublic int setVar(int a, int b, float c) { ...}\nWhich of the following methods correctly overload the above method?",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "public int setVar(int a, float b, int c){\nreturn (int)(a + b + c);\n}"
      },
      {
        "label": "B",
        "text": "public int setVar(int a, float b, int c){\nreturn this(a, c, b);\n}"
      },
      {
        "label": "C",
        "text": "public int setVar(int x, int y, float z){\nreturn x+y;\n}"
      },
      {
        "label": "D",
        "text": "public float setVar(int a, int b, float c){\nreturn c*a;\n}"
      },
      {
        "label": "E",
        "text": "public float setVar(int a){\nreturn a;\n}"
      }
    ],
    "correctAnswers": [
      "A",
      "E"
    ],
    "explanation": "A method is said to be overloaded when the other method's name is same and parameters ( either the number or\ntheir order) are different.\nOption 2 is not valid Because of the line: return this(a, c, b); This is the syntax of calling a constructor and\nnot a method. It should have been: return this.setVar(a, c, b);"
  },
  {
    "id": "2.963",
    "topic": "Using Loop Constructs",
    "question": "Consider the following code snippet:\nfor(int i=INT1; i<INT2; i++){\nSystem.out.println(i);\n}\nINT1 and INT2 can be any two integers.\nWhich of the following will produce the same result?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "for(int i=INT1; i<INT2; System.out.println(++i));"
      },
      {
        "label": "B",
        "text": "for(int i=INT1; i++<INT2; System.out.println(i));"
      },
      {
        "label": "C",
        "text": "int i=INT1; while(i++<INT2) { System.out.println(i); }"
      },
      {
        "label": "D",
        "text": "int i=INT1; do { System.out.println(i); }while(i++<INT2);"
      },
      {
        "label": "E",
        "text": "None of these."
      }
    ],
    "correctAnswers": [
      "E"
    ],
    "explanation": "In such a question it is best to take a sample data such as INT1=1 and INT2=3 and execute the loops mentally.\nEliminate the wrong options. In this case, the original loop will print:\n=====ORIGINAL ====\n1\n2\nOutputs of all the options are given above (Ignoring the line breaks).\nThus, none of them is same as the original."
  },
  {
    "id": "2.964",
    "topic": "Handling Exceptions",
    "question": "What letters, and in what order, will be printed when the following program is compiled and run?\npublic class FinallyTest{\npublic static void main(String args[]) throws Exception{\ntry{\nm1();\nSystem.out.println(\"A\");\n}\nfinally{\nSystem.out.println(\"B\");\n}\nSystem.out.println(\"C\");\n}\npublic static void m1() throws Exception { throw new Exception(); }\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It will print C and B, in that order."
      },
      {
        "label": "B",
        "text": "It will print A and B, in that order."
      },
      {
        "label": "C",
        "text": "It will print B and throw Exception."
      },
      {
        "label": "D",
        "text": "It will print A, B and C in that order."
      },
      {
        "label": "E",
        "text": "Compile time error."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "An exception is thrown in method m1() so println(\"A\") will not be executed.\nAs there is no catch block, the exception will not be handled and the main() method will throw the exception to\nthe caller. Therefore, println(\"C\"); will also not be executed.\n'finally' block is always executed (even if there is a return in try but not if there is System.exit() ) so\nprintln(\"B\") is executed."
  },
  {
    "id": "2.965",
    "topic": "Using Operators and Decision Constructs",
    "question": "Consider the following program:\npublic class TestClass{\npublic static void main(String[] args) { calculate(2); }\npublic static void calculate(int x){\nString val;\nswitch(x){\ncase 2:\ndefault:\nval = \"def\";\n}\nSystem.out.println(val);\n}\n}\nWhat will happen if you try to compile and run the program?",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "It will not compile saying that variable val may not have been initialized.."
      },
      {
        "label": "B",
        "text": "It will compile and print def"
      },
      {
        "label": "C",
        "text": "As such it will not compile but it will compile if calculate(2); is replaced by calculate(3);"
      },
      {
        "label": "D",
        "text": "It will compile for any int values in calculate(...);"
      }
    ],
    "correctAnswers": [
      "B",
      "D"
    ],
    "explanation": "When you try to access a local variable, the compiler makes sure that it is initialized in all the cases. If it finds that\nthere is a case in which it may not be initialized then it flags an error. For example:\nint i;\nif( somecondition) i = 20;\nint k = i;\nHere, if some condition returns false, then i remains uninitialized hence the compiler flags an error.\nIn the given question:\nAs there is no break after case 2, val will always be initialized in the switch block. So it will compile and run\nfine.\nNote that it will not compile if break is placed after case 2 because the compiler will figure out that in certain\ncases val may be left uninitialized."
  },
  {
    "id": "2.966",
    "topic": "Working with Methods",
    "question": "Select the correct order of restrictiveness for access modifiers...\n(First one should be least restrictive)",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "public < protected < package (i.e. no modifier) < private"
      },
      {
        "label": "B",
        "text": "public < package (i.e. no modifier) < protected < private"
      },
      {
        "label": "C",
        "text": "public < protected < private < package (i.e. no modifier)"
      },
      {
        "label": "D",
        "text": "protected < package (i.e. no modifier) < private < public"
      },
      {
        "label": "E",
        "text": "depends on the implementation of the class or method."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Members with default accessibility are only accessible within the class itself and from classes in the same package.\nProtected members are in addition accessible from subclasses. Members with private accessibility are only\naccessible\nwithin the class itself."
  },
  {
    "id": "2.967",
    "topic": "Handling Exceptions",
    "question": "What will the following code print when compiled and run?\nabstract class Calculator{\nabstract void calculate();\npublic static void main(String[] args){\nSystem.out.println(\"calculating\");\nCalculator x = null;\nx.calculate();\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It will not compile."
      },
      {
        "label": "B",
        "text": "It will not print anything and will throw NullPointerException"
      },
      {
        "label": "C",
        "text": "It will print calculating and then throw NullPointerException.\nAfter printing, when it tries to call calculate() on x, it will throw NullPointerException since x is null."
      },
      {
        "label": "D",
        "text": "It will print calculating and will throw NoSuchMethodError"
      },
      {
        "label": "E",
        "text": "It will print calculating and will throw MethodNotImplementedException"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": ""
  },
  {
    "id": "2.968",
    "topic": "Working with Java API - String, StringBuilder",
    "question": "Which of these expressions will obtain the substring \"456\" from a string defined by String str = \"01234567\"?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "str.substring(4, 7)"
      },
      {
        "label": "B",
        "text": "str.substring(4)"
      },
      {
        "label": "C",
        "text": "str.substring(3, 6)\nIt will return \"345\"."
      },
      {
        "label": "D",
        "text": "str.substring(4, 6)\nIt will return \"45\"."
      },
      {
        "label": "E",
        "text": "str.substring(4, 3)"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Read this carefully:\npublic String substring(int beginIndex, int endIndex)\nReturns a new string that is a substring of this string. The substring begins at the specified beginIndex and\nextends to the character at index endIndex - 1. Thus the length of the substring is endIndex-beginIndex.\n\"hamburger\".substring(4, 8) returns \"urge\"\n\"smiles\".substring(1, 5) returns \"mile\"\n\"unhappy\".substring(2) returns \"happy\"\n\"Harbison\".substring(3) returns \"bison\"\n\"emptiness\".substring(9) returns \"\" (an empty string)"
  },
  {
    "id": "2.969",
    "topic": "Creating and Using Arrays",
    "question": "Which of these array declarations and initializations are NOT legal?",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "int[ ] i[ ] = { { 1, 2 }, { 1 }, { }, { 1, 2, 3 } } ;"
      },
      {
        "label": "B",
        "text": "int i[ ] = new int[2] {1, 2} ;"
      },
      {
        "label": "C",
        "text": "int i[ ][ ] = new int[ ][ ] { {1, 2, 3}, {4, 5, 6} } ;"
      },
      {
        "label": "D",
        "text": "int i[ ][ ] = { { 1, 2 }, new int[ 2 ] } ;"
      },
      {
        "label": "E",
        "text": "int i[4] = { 1, 2, 3, 4 } ;"
      }
    ],
    "correctAnswers": [
      "B",
      "E"
    ],
    "explanation": "If you explicitly specify the members then you can't give the size. So option 2 is wrong.\nThe size of the array is never given during the declaration of an array reference. So option 5 is wrong.\nThe size of an array is always associated with the array instance, not the array reference."
  },
  {
    "id": "2.970",
    "topic": "Working with Inheritance",
    "question": "Consider the following classes...\nclass Car{\npublic int gearRatio = 8;\npublic String accelerate() { return \"Accelerate : Car\"; }\n}\nclass SportsCar extends Car{\npublic int gearRatio = 9;\npublic String accelerate() { return \"Accelerate : SportsCar\"; }\npublic static void main(String[] args){\nCar c = new SportsCar();\nSystem.out.println( c.gearRatio+\" \"+c.accelerate() );\n}\n}\nWhat will be printed when SportsCar is run?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "8 Accelerate : Car"
      },
      {
        "label": "B",
        "text": "9 Accelerate : Car"
      },
      {
        "label": "C",
        "text": "8 Accelerate : SportsCar"
      },
      {
        "label": "D",
        "text": "9 Accelerate : SportsCar"
      },
      {
        "label": "E",
        "text": "None of the above."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "The concept is : variables are hidden and methods are overridden.\nMethod to be executed depends on the class of the actual object the variable is referencing to. Here, c refers to\nobject of class SportsCar so SportsCar's accelerate() is selected."
  },
  {
    "id": "2.971",
    "topic": "Creating and Using Arrays",
    "question": "What will be the result of trying to compile and execute the following program?\npublic class TestClass{\npublic static void main(String args[] ){\nint i = 0 ;\nint[] iA = {10, 20} ;\niA[i] = i = 30 ;\nSystem.out.println(\"\"+ iA[ 0 ] + \" \" + iA[ 1 ] + \" \"+i) ;\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It will throw ArrayIndexOutOfBoundsException at Runtime."
      },
      {
        "label": "B",
        "text": "Compile time Error."
      },
      {
        "label": "C",
        "text": "It will print 10 20 30"
      },
      {
        "label": "D",
        "text": "It will print 30 20 30"
      },
      {
        "label": "E",
        "text": "It will print 0 20 30"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "The statement iA[i] = i = 30 ; will be processed as follows:\niA[i] = i = 30; => iA[0] = i = 30 ; => i = 30; iA[0] = i ; => iA[0] = 30 ;\nHere is what JLS says on this:\n1 Evaluate Left-Hand Operand First\n2 Evaluate Operands before Operation\n3 Evaluation Respects Parentheses and Precedence\n4 Argument Lists are Evaluated Left-to-Right\nFor Arrays: First, the dimension expressions are evaluated, left-to-right. If any of the expression evaluations\ncompletes abruptly, the expressions to the right of it are not evaluated."
  },
  {
    "id": "2.972",
    "topic": "Working with Java Data Types",
    "question": "Consider the following program :\nclass Test{\npublic static void main(String[] args){\nshort s = 10; // 1\nchar c = s; // 2\ns = c; // 3\n}\n}\nIdentify the correct statements.",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "Line 3 is not valid."
      },
      {
        "label": "B",
        "text": "Line 2 is not valid."
      },
      {
        "label": "C",
        "text": "It will compile because both short and char can hold 10."
      },
      {
        "label": "D",
        "text": "None of the lines 1, 2 and 3 is valid."
      }
    ],
    "correctAnswers": [
      "A",
      "B"
    ],
    "explanation": "Not all short values are valid char values, and neither are all char values valid short values, therefore compiler\ncomplains for both the lines 2 and 3. They will require an explicit cast."
  },
  {
    "id": "2.973",
    "topic": "Using Operators and Decision Constructs",
    "question": "Which operators will always evaluate all the operands?",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "&&"
      },
      {
        "label": "B",
        "text": "|"
      },
      {
        "label": "C",
        "text": "||"
      },
      {
        "label": "D",
        "text": "? :"
      },
      {
        "label": "E",
        "text": "%"
      }
    ],
    "correctAnswers": [
      "B",
      "E"
    ],
    "explanation": "|| and && are also known as short circuit operators since they do not evaluate the rest of the expression if the\nvalue of the expression can be determined by just evaluating part of the expression for example ( true || (bool\n= false)) will not assign false to bool because the value of the expression can be told just by seeing the first\npart i.e. true. But ( true | (bool = false)) will assign false to bool."
  },
  {
    "id": "2.974",
    "topic": "Working with Methods",
    "question": "What will be the contents of s1 and s2 at the time of the println statement in the main method of the following\nprogram?\nimport java.util.*;\npublic class TestClass{\npublic static void main(String args[]){\nStack s1 = new Stack ();\nStack s2 = new Stack ();\nprocessStacks (s1,s2);\nSystem.out.println (s1 + \" \"+ s2);\n}\npublic static void processStacks(Stack x1, Stack x2){\nx1.push (new Integer (\"100\")); //assume that the method push adds the passed object to the\nx2 = x1;\n}\n}\nNote:[] is used in the options below to denote each element of the Stack.",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "[100] [100]"
      },
      {
        "label": "B",
        "text": "[100] []"
      },
      {
        "label": "C",
        "text": "[] [100]"
      },
      {
        "label": "D",
        "text": "[] []"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": ". Primitives are always passed by value.\n. Object \"references\" are passed by value. So it looks like the object is passed by reference but actually it is the\nvalue of the reference that is passed.\nAn example:\nObject o1 = new Object(); //Let us say, the object is stored at memory location 15000.\n//Since o1 actually stores the address of the memory location where the object is\nstored, it contains 15000.\nNow, when you call someMethod(o1); the value 15000 is passed to the method.\nInside the method someMethod():\nsomeMethod( Object localVar) {\n/*localVar now contains 15000, which means it also points to the same memory\nlocation where the object is stored.\nTherefore, when you call a method on localVar, it will be executed on the same\nobject.\nHowever, when you change the value of localVar itself, for example if you do\nlocalVar=null,\nit then starts pointing to a different memory location. But the original variable o1\nstill\ncontains 15000 so it still points to the same object. */\n}\nIf you need even more detailed explanation, please check http://www.javaranch.com/campfire/StoryPassBy.jsp\nThis is what happens in this question.\nYou created two objects in main method:\n\ns1 ------------> [ EMPTY ] STACK 1 OBJECT\ns1 actually contains 15000 (say)\ns2 ------------> [ EMPTY ] STACK 2 OBJECT\ns2 actually contains 25000 (say)\ninside the method processStacks() :\nStep 1:\ns1 ----> [ EMPTY ] STACK 1 OBJECT <----x1 Local variable\ns1 and x1 both contain 15000 (say)\ns2 ----> [ EMPTY ] STACK 2 OBJECT <----x2 Local variable\ns2 and x2 both contain 25000 (say)\nStep 2;\ns1 -----> [ 100 ] STACK 1 OBJECT <----x1 Local variable\nBecause x1 is referring to the same memory location.\ns2 -----> [ EMPTY ] STACK 2 OBJECT <---x2 Local variable\nStep 3: After doing x2 = x1\ns1 ---> [ 100 ] STACK 1 OBJECT <---- x1 and x2 Local variables\ns1 and x1 both contain 15000 (say) and x2 now also contains 15000.\ns2 ------------> [ EMPTY ] STACK 2 OBJECT\nBut s2 still contains 25000.\nNote that it is the local variable x2 that is pointing to the same object as x1, which is s1 stack object. The original\ns2 (of the main method) is still pointing to the same object which is empty.\nSo when you come back to the main method, you print s1 (which has now 100) and s2 (which is still empty)."
  },
  {
    "id": "2.975",
    "topic": "Working with Java Data Types",
    "question": "In which of these variable declarations, will the variable remain uninitialized unless explicitly initialized?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "Declaration of an instance variable of type int."
      },
      {
        "label": "B",
        "text": "Declaration of a static class variable of type float."
      },
      {
        "label": "C",
        "text": "Declaration of a local variable of type float."
      },
      {
        "label": "D",
        "text": "Declaration of a static class variable of class Object"
      },
      {
        "label": "E",
        "text": "Declaration of an instance variable of class Object."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "We have to explicitly initialize local variables otherwise they remain uninitialized and it will be a compile time\nerror if such variables are accessed without getting initialized first.\nInstance variables and static variables receive a default value if not explicitly initialized. All primitive types get a\ndefaults value equivalent to 0, that is, int to 0 and float to 0.0f and so on and boolean to false.\nThe type/class of a variable does not affect whether a variable is initialized or not."
  },
  {
    "id": "2.976",
    "topic": "Java Basics",
    "question": "Consider the following two java files:\n//in file SM.java\npackage x.y;\npublic class SM{\npublic static void foo(){ };\n}\n//in file TestClass.java\n//insert import statement here //1\npublic class TestClass{\npublic static void main(String[] args){\nfoo();\n}\n}\nWhat should be inserted at //1 so that TestClass will compile and run?",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "import static x.y.*;"
      },
      {
        "label": "B",
        "text": "import static x.y.SM;\nx.y.SM means you are trying to import class SM that belongs to package x.y. A class cannot be imported\nstatically."
      },
      {
        "label": "C",
        "text": "import static x.y.SM.foo;"
      },
      {
        "label": "D",
        "text": "import static x.y.SM.foo();"
      },
      {
        "label": "E",
        "text": "import static x.y.SM.*;"
      }
    ],
    "correctAnswers": [
      "C",
      "E"
    ],
    "explanation": ""
  },
  {
    "id": "2.977",
    "topic": "Using Operators and Decision Constructs",
    "question": "What is the result of executing the following fragment of code:\nboolean b1 = false;\nboolean b2 = false;\nif (b2 = b1 != b2){\nSystem.out.println(\"true\");\n} else{\nSystem.out.println(\"false\");\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "Compile time error."
      },
      {
        "label": "B",
        "text": "It will print true;"
      },
      {
        "label": "C",
        "text": "It will print false;"
      },
      {
        "label": "D",
        "text": "Runtime error."
      },
      {
        "label": "E",
        "text": "It will print nothing."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "All an if() needs is a boolean. Now, b1 != b2 returns false which is a boolean and so the expression becomes\nb2 = false. It returns false which is again a boolean. So there is no error and it prints false.\nRemember that every expression has a return value (which is actually the Left Hand Side of the expression). For\nexample, The value of the expressing i = 10 , is 10 (an int)."
  },
  {
    "id": "2.978",
    "topic": "Working with Methods",
    "question": "Given the following definition of class, which member variables are accessible from OUTSIDE the package\ncom.enthu.qb?\npackage com.enthu.qb;\npublic class TestClass{\nint i;\npublic int j;\nprotected int k;\nprivate int l;\n}",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "Member variable i."
      },
      {
        "label": "B",
        "text": "Member variable j."
      },
      {
        "label": "C",
        "text": "Member variable k."
      },
      {
        "label": "D",
        "text": "Member variable k, but only for subclasses."
      },
      {
        "label": "E",
        "text": "Member variable l."
      }
    ],
    "correctAnswers": [
      "B",
      "D"
    ],
    "explanation": "public > protected > package (i.e. no modifier) > private\nwhere public is least restrictive and private is most restrictive.\nRemember:\nprotected is less restrictive than package access. So a method(or field) declared as protected will be accessible\nfrom a subclass even if the subclass is not in the same package.\nThe same is not true for package access.\nA top level class can only have either public or no access modifier but a method or field can have all the four.\nNote that static, final, native and synchronized are not considered as access modifiers."
  },
  {
    "id": "2.979",
    "topic": "Handling Exceptions",
    "question": "What will be the output when the following code is compiled and run?\n//in file Test.java\nclass E1 extends Exception{ }\nclass E2 extends E1 { }\nclass Test{\npublic static void main(String[] args){\ntry{\nthrow new E2();\n}\ncatch(E1 e){\nSystem.out.println(\"E1\");\n}\ncatch(Exception e){\nSystem.out.println(\"E\");\n}\nfinally{\nSystem.out.println(\"Finally\");\n}\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It will not compile."
      },
      {
        "label": "B",
        "text": "It will print E1 and Finally."
      },
      {
        "label": "C",
        "text": "It will print E1, E and Finally."
      },
      {
        "label": "D",
        "text": "It will print E and Finally."
      },
      {
        "label": "E",
        "text": "It will print Finally."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Since E2 is a sub class of E1, catch(E1 e) will be able to catch exceptions of class E2. Therefore, E1 is printed.\nOnce the exception is caught the rest of the catch blocks at the same level (that is the ones associated with the\nsame try block) are ignored. So E is not printed. finally is always executed (except in case of System.exit()), so\nFinally is also printed."
  },
  {
    "id": "2.980",
    "topic": "Working with Inheritance - instanceof",
    "question": "Given the following class definitions, the expression\n(obj instanceof A) && ! (obj instanceof C) && ! (obj instanceof D)\ncorrectly identifies whether the object referred to by obj was created by instantiating class B rather than classes A,\nC and D?\nclass A {}\nclass B extends A {}\nclass C extends B {}\nclass D extends C {}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "True"
      },
      {
        "label": "B",
        "text": "False"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "The given expression will not be able to distinguish between an object of class A and an object of class B. It will\nreturn true in both the cases. Also, The last part !(obj instanceof D) of the given expression is redundant\nbecause anything which is not instance of C cannot be an instanceof D either!\nCorrect expression would be (obj instanceof B) && ! (obj instanceof C). This will return true only if obj\npoints to an object of class B and not of A, C, or D."
  },
  {
    "id": "2.982",
    "topic": "Working with Java Data Types",
    "question": "Given the following class, which of the given blocks can be inserted at line 1 without errors?\npublic class InitClass{\nprivate static int loop = 15 ;\nstatic final int INTERVAL = 10 ;\nboolean flag ;\n//line 1\n}",
    "selectCount": 4,
    "options": [
      {
        "label": "A",
        "text": "static {System.out.println(\"Static\"); }"
      },
      {
        "label": "B",
        "text": "static { loop = 1; }"
      },
      {
        "label": "C",
        "text": "static { loop += INTERVAL; }"
      },
      {
        "label": "D",
        "text": "static { INTERVAL = 10; }"
      },
      {
        "label": "E",
        "text": "{ flag = true; loop = 0; }"
      }
    ],
    "correctAnswers": [
      "A",
      "B",
      "C",
      "E"
    ],
    "explanation": ""
  },
  {
    "id": "2.983",
    "topic": "Working with Inheritance",
    "question": "Consider the following classes:\nclass A implements Runnable{ ...}\nclass B extends A implements Observer { ...}\n(Assume that Observer has no relation to Runnable.)\nand the declarations :\nA a = new A() ;\nB b = new B();\nWhich of the following Java code fragments will compile and execute without throwing exceptions?",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "Object o = a; Runnable r = o;"
      },
      {
        "label": "B",
        "text": "Object o = a; Runnable r = (Runnable) o;"
      },
      {
        "label": "C",
        "text": "Object o = a; Observer ob = (Observer) o ;"
      },
      {
        "label": "D",
        "text": "Object o = b; Observer o2 = o;"
      },
      {
        "label": "E",
        "text": "Object o = b; Runnable r = (Runnable) b;"
      }
    ],
    "correctAnswers": [
      "B",
      "E"
    ],
    "explanation": "Although you know that o will refer to an object that is a Runnable at runtime, the compiler doesn't know about it.\nThat is why, you have to do: Runnable r = (Runnable) o;\nYou can assign a subclass object reference to superclass reference without a cast but to assign a super class object\nreference to a subclass (or interface) reference you need an explicit cast as in option 2."
  },
  {
    "id": "2.984",
    "topic": "Handling Exceptions",
    "question": "Following is a supposedly robust method to parse an input for a float :\npublic float parseFloat(String s){\nfloat f = 0.0f;\ntry{\nf = Float.valueOf(s).floatValue();\nreturn f ;\n}\ncatch(NumberFormatException nfe){\nSystem.out.println(\"Invalid input \" + s);\nf = Float.NaN ;\nreturn f;\n}\nfinally { System.out.println(\"finally\"); }\nreturn f ;\n}\nWhich of the following statements about the above method is/are true?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "If input is 0.1 then it will return 0.1 and print finally."
      },
      {
        "label": "B",
        "text": "If input is 0x.1 then it will return Float.NaN and print Invalid input 0x.1 and finally."
      },
      {
        "label": "C",
        "text": "If input is 1 then it will return 1.0 and print finally."
      },
      {
        "label": "D",
        "text": "If input is 0x1 then it will return 0.0 and print Invalid input 0x1 and finally."
      },
      {
        "label": "E",
        "text": "The code will not compile."
      }
    ],
    "correctAnswers": [
      "E"
    ],
    "explanation": ""
  },
  {
    "id": "2.985",
    "topic": "Working with Java Data Types",
    "question": "Which of the following declarations are valid?",
    "selectCount": 3,
    "options": [
      {
        "label": "A",
        "text": "float f1 = 1.0;"
      },
      {
        "label": "B",
        "text": "float f = 43e1;"
      },
      {
        "label": "C",
        "text": "float f = -1;"
      },
      {
        "label": "D",
        "text": "float f = 0x0123;"
      },
      {
        "label": "E",
        "text": "float f = 4;"
      }
    ],
    "correctAnswers": [
      "C",
      "D",
      "E"
    ],
    "explanation": "Although the values in the option 1 and 2 are compile time constants and the values i.e. 1.0 and 43e1 can fit into a\nfloat, implicit narrowing does not happen because implicit narrowing is permitted only among byte, char, short,\nand int."
  },
  {
    "id": "2.986",
    "topic": "Using Operators and Decision Constructs",
    "question": "The following method will compile and run without any problems.\npublic void switchTest(byte x){\nswitch(x){\ncase 'b': // 1\ndefault : // 2\ncase -2: // 3\ncase 80: // 4\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "True"
      },
      {
        "label": "B",
        "text": "False"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "The following types can be used as a switch variable:\nbyte, char, short, int, String, and enums. Wrapper classes Byte, Character, Short, and Integer are allowed\nas well. Note that long, float, double, and boolean are not allowed.\nAll the case constants should be assignable to the switch variable type. i.e. had there been a case label of 128 ( case\n128 : //some code ), it would not have compiled. Because the range of a byte is from -128 to 127 and so 128 is not\nassignable to 'x'.\nThe integral value of 'b' is 98, which is less than 127 so Line //1 is fine.\nNote: Although it is not required for the exam to know the integral values of characters, it is good to know that all\nEnglish letters (upper case as well as lower case) as well as 0-9 are below 127 and so are assignable to byte."
  },
  {
    "id": "2.987",
    "topic": "Creating and Using Arrays",
    "question": "What will be the result of attempting to run the following program?\npublic class StringArrayTest{\npublic static void main(String args[]){\nString[][][] arr ={{ { \"a\", \"b\" , \"c\"}, { \"d\", \"e\", null } },{ {\"x\"}, null },{{\"y\"}},{ {\n\"z\",\"p\"}, {} }\n};\nSystem.out.println(arr[0][1][2]);\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It will throw NullPointerBoundsException."
      },
      {
        "label": "B",
        "text": "It will throw ArrayIndexOutOfBoundsException."
      },
      {
        "label": "C",
        "text": "It will print null."
      },
      {
        "label": "D",
        "text": "It will run without any error but will print nothing."
      },
      {
        "label": "E",
        "text": "None of the above."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "arr[0][1][2] => [0] = { { \"a\", \"b\" , \"c\"}, { \"d\", \"e\", null } }, [1] = { \"d\", \"e\", null } and [2] = null.\nSo it will print null."
  },
  {
    "id": "2.988",
    "topic": "Working with Java API - String, StringBuilder",
    "question": "What will the following code print?\npublic class Test{\npublic static void stringTest(String s){\ns.replace('h', 's');\n}\npublic static void stringBuilderTest(StringBuilder s){\ns.append(\"o\");\n}\npublic static void main(String[] args){\nString s = \"hell\";\nStringBuilder sb = new StringBuilder(\"well\");\nstringTest(s);\nstringBuilderTest(sb);\nSystem.out.println(s + sb);\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "sellwello"
      },
      {
        "label": "B",
        "text": "hellwello"
      },
      {
        "label": "C",
        "text": "hellwell"
      },
      {
        "label": "D",
        "text": "sellwell"
      },
      {
        "label": "E",
        "text": "None of these."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "A String is immutable while a StringBuilder is not. So in stringTest(), \"hell\".replace('h', 's') will produce\na new String \"sell\" but will not affect the original String that was passed to the method.\nHowever, the append() method of StringBuilder appends to the original String object. So, \"well\" becomes\n\"wello\"."
  },
  {
    "id": "2.989",
    "topic": "Working with Java API - String, StringBuilder",
    "question": "Consider the following code:\npublic class Logger{\nprivate StringBuilder sb = new StringBuilder();\npublic void logMsg(String location, String message){\nsb.append(location);\nsb.append(\"-\");\nsb.append(message);\n}\npublic void dumpLog(){\nSystem.out.println(sb.toString());\n//Empty the contents of sb here\n}\n}\nWhich of the following options will empty the contents of the StringBuilder referred to by variable sb in method\ndumpLog()?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "sb.delete(0, sb.length());"
      },
      {
        "label": "B",
        "text": "sb.clear();"
      },
      {
        "label": "C",
        "text": "sb.empty();"
      },
      {
        "label": "D",
        "text": "sb.removeAll();"
      },
      {
        "label": "E",
        "text": "sb.deleteAll();"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "public StringBuilder delete(int start, int end)\nRemoves the characters in a substring of this sequence. The substring begins at the specified start and extends to\nthe character at index end - 1 or to the end of the sequence if no such character exists. If start is equal to end, no\nchanges are made.\nParameters:\nstart - The beginning index, inclusive.\nend - The ending index, exclusive.\nReturns:\nThis object.\nThrows:\nStringIndexOutOfBoundsException - if start is negative, greater than length(), or greater than end."
  },
  {
    "id": "2.990",
    "topic": "Working with Methods - Overloading",
    "question": "Consider the following classes...\nclass Teacher{\nvoid teach(String student){\n/* lots of code */\n}\n}\nclass Prof extends Teacher{\n//1\n}\nWhich of the following methods can be inserted at line //1 ?",
    "selectCount": 4,
    "options": [
      {
        "label": "A",
        "text": "public void teach() throws Exception"
      },
      {
        "label": "B",
        "text": "private void teach(int i) throws Exception"
      },
      {
        "label": "C",
        "text": "protected void teach(String s)"
      },
      {
        "label": "D",
        "text": "public final void teach(String s)"
      },
      {
        "label": "E",
        "text": "public abstract void teach(String s)"
      }
    ],
    "correctAnswers": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "Note that 'protected' is less restrictive than default 'no modifier'. So choice 3 is valid.\n\"public abstract void teach(String s)\" would have been valid if class Prof had been declared abstract."
  },
  {
    "id": "2.991",
    "topic": "Using Operators and Decision Constructs",
    "question": "What can be the return type of method getSwitch so that this program compiles and runs without any problems?\npublic class TestClass{\npublic static XXX getSwitch(int x){\nreturn x - 20/x + x*x;\n}\npublic static void main(String args[]){\nswitch( getSwitch(10) ){\ncase 1 :\ncase 2 :\ncase 3 :\ndefault : break;\n}\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "int"
      },
      {
        "label": "B",
        "text": "float"
      },
      {
        "label": "C",
        "text": "long"
      },
      {
        "label": "D",
        "text": "double"
      },
      {
        "label": "E",
        "text": "char"
      },
      {
        "label": "F",
        "text": "byte"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "If you just consider the method getSwitch, any of int long float or double will do. But the return value is used in\nthe switch statement later on. A switch condition cannot accept float, long, double, or boolean. So only int is\nvalid.\nThe return type cannot be byte, short, or char because the expression x - 20/x + x*x; returns an int."
  },
  {
    "id": "2.992",
    "topic": "Java Basics",
    "question": "Given the following program, which statement is true?\nclass SomeClass{\npublic static void main( String args[ ] ){\nif (args.length == 0 ){\nSystem.out.println(\"no arguments\") ;\n}\nelse{\nSystem.out.println( args.length + \" arguments\") ;\n}\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "The program will fail to compile."
      },
      {
        "label": "B",
        "text": "The program will throw a NullPointerException when run with zero arguments."
      },
      {
        "label": "C",
        "text": "The program will print no arguments when called with zero arguments and 1 arguments when called with one\nargument.\nThe word java and class name are not a part of the argument list."
      },
      {
        "label": "D",
        "text": "The program will print no arguments and 2 arguments when called with zero and one arguments."
      },
      {
        "label": "E",
        "text": "The program will print no arguments and 3 arguments when called with zero and one arguments."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "When the program is called with no arguments, the args array will be of length zero. Unlike in C/C++, args[0] is\nnot the name of the program or class. This is because the name of the class is always the same as defined in the\njava file. So there is no need for passing its name as an argument to main method."
  },
  {
    "id": "2.993",
    "topic": "Working with Inheritance",
    "question": "Which is the first line that will cause compilation to fail in the following program?\n// Filename: A.java\nclass A{\npublic static void main(String args[]){\nA a = new A();\nB b = new B();\na = b; // 1\nb = a; // 2\na = (B) b; // 3\nb = (B) a; // 4\n}\n}\nclass B extends A { }",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "At Line 1."
      },
      {
        "label": "B",
        "text": "At Line 2."
      },
      {
        "label": "C",
        "text": "At Line 3."
      },
      {
        "label": "D",
        "text": "At Line 4."
      },
      {
        "label": "E",
        "text": "None of the above."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Casting a base class to a subclass as in : b = (B) a; is also called as narrowing (as you are trying to narrow the\nbase class object to a more specific class object) and needs explicit cast.\nCasting a sub class to a base class as in: A a = b; is also called as widening and does not need any casting.\nFor example, consider two classes: Automobile and Car, where Car extends Automobile\nNow, Automobile a = new Car(); is valid because a car is definitely an Automobile. So it does not need an\nexplicit cast.\nBut, Car c = a; is not valid because 'a' is an Automobile and it may be a Car, a Truck, or a MotorCycle, so the\nprogrammer has to explicitly let the compiler know that at runtime 'a' will point to an object of class Car.\nTherefore, the programmer must use an explicit cast:\nCar c = (Car) a;"
  },
  {
    "id": "2.994",
    "topic": "Working with Java Data Types",
    "question": "Assume that a, b, and c refer to instances of primitive wrapper classes. Which of the following statements are\ncorrect?",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "a.equals(a) will always return true."
      },
      {
        "label": "B",
        "text": "b.equals(c) may return false even if c.equals(b) returns true."
      },
      {
        "label": "C",
        "text": "a.equals(b) returns same as a == b."
      },
      {
        "label": "D",
        "text": "a.equals(b) throws an exception if they refer to instances of different classes."
      },
      {
        "label": "E",
        "text": "a.equals(b) returns false if they refer to instances of different classes."
      }
    ],
    "correctAnswers": [
      "A",
      "E"
    ],
    "explanation": "Equals method of a primitive wrapper class ( e.g. java.lang.Integer, Double, Float etc) are\n1. symmetric => a.equals(b) returns same as b.equals(a)\n2. transitive => if a.equals(b) and b.equals(c) return true, then a.equals(c) returns true.\n3. reflexive => a.equals(a) return true.\nFor example, the following code for the equals method on Integer explains how it works:\npublic boolean equals(Object obj) {\nif (obj instanceof Integer) {\nreturn value == ((Integer)obj).intValue();\n}\nreturn false;\n}"
  },
  {
    "id": "2.996",
    "topic": "Working with Inheritance",
    "question": "Consider the following program:\nclass Game {\npublic void play() throws Exception {\nSystem.out.println(\"Playing...\");\n}\n}\nclass Soccer extends Game {\npublic void play(String ball) {\nSystem.out.println(\"Playing Soccer with \"+ball);\n}\n}\npublic class TestClass {\npublic static void main(String[] args) throws Exception {\nGame g = new Soccer();\n// 1\nSoccer s = (Soccer) g;\n// 2\n}\n}\nWhich of the given options can be inserted at //1 and //2?",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "It will not compile as it is."
      },
      {
        "label": "B",
        "text": "It will throw an Exception at runtime if it is run as it is."
      },
      {
        "label": "C",
        "text": "g.play(); at //1 and s.play(\"cosco\"); at //2"
      },
      {
        "label": "D",
        "text": "g.play(); at //1 and s.play(); at //2"
      },
      {
        "label": "E",
        "text": "g.play(\"cosco\"); at //1 and s.play(\"cosco\"); at //2"
      }
    ],
    "correctAnswers": [
      "C",
      "D"
    ],
    "explanation": ""
  },
  {
    "id": "2.997",
    "topic": "Java Basics - OO Concepts",
    "question": "Consider the following class written by a novice programmer.\nclass Elliptical{\npublic int radiusA, radiusB;\npublic int sum = 100;\npublic void setRadius(int r){\nif(r>99) throw new IllegalArgumentException();\nradiusA = r;\nradiusB = sum - radiusA;\n}\n}\nAfter some time, the requirements changed and the programmer now wants to make sure that radiusB is always\n(200 - radiusA) instead of (100 - radiusA) without breaking existing code that other people have written. Which of\nthe following will accomplish his goal?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "Make sum = 200;"
      },
      {
        "label": "B",
        "text": "Make sum = 200 and make it private."
      },
      {
        "label": "C",
        "text": "Make sum = 200 and make all fields (radiusA, radiusB, and sum) private."
      },
      {
        "label": "D",
        "text": "Write another method setRadius2(int r) and set radiusB accordingly in this method."
      },
      {
        "label": "E",
        "text": "His goal cannot be accomplished."
      },
      {
        "label": "F",
        "text": "This class will not compile."
      }
    ],
    "correctAnswers": [
      "E"
    ],
    "explanation": "setRadius method makes sure that radiusB is set to sum - radiusA. So changing sum to 200 should do it. However,\nnote that radiusA, radiusB, and sum are public which means that any other class can access these fields directly\nwithout going through the setRadius method. So there is no way to make sure that the value of radiusB is correctly\nset at all times. If you make them private now, other classes that are accessing the fields directly will break.\nThe class should have been coded with proper encapsulation of the fields in the first place."
  },
  {
    "id": "2.998",
    "topic": "Working with Inheritance",
    "question": "What will the following program print when compiled and run?\nclass Game{\npublic void play() throws Exception{\nSystem.out.println(\"Playing...\");\n}\n}\npublic class Soccer extends Game{\npublic void play(){\nSystem.out.println(\"Playing Soccer...\");\n}\npublic static void main(String[] args){\nGame g = new Soccer();\ng.play();\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It will not compile."
      },
      {
        "label": "B",
        "text": "It will throw an Exception at runtime."
      },
      {
        "label": "C",
        "text": "Playing Soccer..."
      },
      {
        "label": "D",
        "text": "Playing..."
      },
      {
        "label": "E",
        "text": "None of these."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Observe that play() in Game declares Exception in its throws clause. Further, class Soccer overrides the play()\nmethod without any throws clause. This is valid because a list of no exception is a valid subset of a list of\nexceptions thrown by the superclass method.\nNow, even though the actual object referred to by 'g' is of class Soccer, the class of the variable g is of class Game.\nTherefore, at compile time, compiler assumes that g.play() might throw an exception, because Game's play method\ndeclares it, and thus expects this call to be either wrapped in a try-catch or the main method to have a throws\nclause for the main() method."
  },
  {
    "id": "2.999",
    "topic": "Working with Java API - String, StringBuilder",
    "question": "Which of the following method calls can be applied to a String object?",
    "selectCount": 3,
    "options": [
      {
        "label": "A",
        "text": "equals(Object)"
      },
      {
        "label": "B",
        "text": "equalsIgnoreCase(String)"
      },
      {
        "label": "C",
        "text": "prune()"
      },
      {
        "label": "D",
        "text": "append()"
      },
      {
        "label": "E",
        "text": "intern()"
      }
    ],
    "correctAnswers": [
      "A",
      "B",
      "E"
    ],
    "explanation": "public String intern()\nReturns a canonical representation for the string object.\nA pool of strings, initially empty, is maintained privately by the class String.\nWhen the intern method is invoked, if the pool already contains a string equal to this String object as determined\nby the equals(Object) method, then the string from the pool is returned. Otherwise, this String object is added to\nthe pool and a reference to this String object is returned.\nIt follows that for any two strings s and t, s.intern() == t.intern() is true if and only if s.equals(t) is true.\nAll literal strings and string-valued constant expressions are interned. String literals are defined in 3.10.5 of the\nJava Language Specification\nReturns:\na string that has the same contents as this string, but is guaranteed to be from a pool of unique strings."
  },
  {
    "id": "2.1000",
    "topic": "Handling Exceptions",
    "question": "What will the following code print when run?\npublic class Test {\nstatic String s = \"\";\npublic static void m0(int a, int b) {\ns += a;\nm2();\nm1(b);\n}\npublic static void m1(int i) {\ns += i;\n}\npublic static void m2() {\nthrow new NullPointerException(\"aa\");\n}\npublic static void m() {\nm0(1, 2);\nm1(3);\n}\npublic static void main(String args[]) {\ntry {\nm();\n} catch (Exception e) {\n}\nSystem.out.println(s);\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "1"
      },
      {
        "label": "B",
        "text": "12"
      },
      {
        "label": "C",
        "text": "123"
      },
      {
        "label": "D",
        "text": "2"
      },
      {
        "label": "E",
        "text": "It will throw exception at runtime."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Try to follow the control flow:\n1. m() calls m0(1, 2).\n2. m0(1, 2) first executes s += 1 (so s is now 1) and then calls m2().\n3. Now, m2() throws an exception which is not caught by m2() so it is propagated back to m0(1, 2). Since, within\nm0 method, the call to m2() is not wrapped in a try catch block, this exception further propagates up to m(). ( The\nnext line in m0(1, 2), which is m1(2), is not executed ).\n4. Again, m() also does not have the try catch block so the same exception is further propagated up to the main()\nmethod. (The next line in m(), which is a call to m1(3) is not called).\n4. In main method, the call to m() is wrapped in a try catch block and so the exception is handled here.\n5. Finally, s stays as \"1\".\nThe point to note here is that if you do not catch an exception, it is propagated up the stack of method calls until it\n\nis handled. If nobody handles it, the JVM handles that exception and kills the thread. If that thread is the only user\nthread running, the program ends."
  },
  {
    "id": "2.1001",
    "topic": "Working with Methods",
    "question": "Consider the following class:\npublic class Test{\npublic int id;\n}\nWhich of the following is the correct way to make the variable 'id' read only for any other class?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "Make 'id' private."
      },
      {
        "label": "B",
        "text": "Make 'id' private and provide a public method getId() which will return its value."
      },
      {
        "label": "C",
        "text": "Make 'id' static and provide a public static method getId() which will return its value."
      },
      {
        "label": "D",
        "text": "Make id 'protected'"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "This is a standard way of providing read only access to internal variables."
  },
  {
    "id": "2.1002",
    "topic": "Working with Inheritance",
    "question": "Given the following definitions and reference declarations:\ninterface I1 { }\ninterface I2 { }\nclass C1 implements I1 { }\nclass C2 implements I2 { }\nclass C3 extends C1 implements I2 { }\nC1 o1;\nC2 o2;\nC3 o3;\nWhich of these statements are legal?",
    "selectCount": 3,
    "options": [
      {
        "label": "A",
        "text": "class C4 extends C3 implements I1, I2 { }"
      },
      {
        "label": "B",
        "text": "o3 = o1;"
      },
      {
        "label": "C",
        "text": "o3 = o2;"
      },
      {
        "label": "D",
        "text": "I1 i1 = o3; I2 i2 = (I2) i1;"
      },
      {
        "label": "E",
        "text": "I1 b = o3;"
      }
    ],
    "correctAnswers": [
      "A",
      "D",
      "E"
    ],
    "explanation": ""
  },
  {
    "id": "2.1003",
    "topic": "Working with Inheritance",
    "question": "Given the following code, which statements are true?\ninterface Automobile { String describe(); }\nclass FourWheeler implements Automobile{\nString name;\npublic String describe(){ return \" 4 Wheeler \" + name; }\n}\nclass TwoWheeler extends FourWheeler{\nString name;\npublic String describe(){ return \" 2 Wheeler \" + name; }\n}",
    "selectCount": 3,
    "options": [
      {
        "label": "A",
        "text": "An instance of TwoWheeler is also an instance of FourWheeler."
      },
      {
        "label": "B",
        "text": "An instance of TwoWheeler is a valid instance of Automobile."
      },
      {
        "label": "C",
        "text": "The use of inheritance is not justified here because a TwoWheeler is not really a FourWheeler in the real world."
      },
      {
        "label": "D",
        "text": "The code will compile only if name is removed from TwoWheeler."
      },
      {
        "label": "E",
        "text": "The code will fail to compile."
      }
    ],
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "explanation": "The use of inheritance in this code is not justifiable, since conceptually, a TwoWheeler is-not-a FourWheeler."
  },
  {
    "id": "2.1004",
    "topic": "Java Basics",
    "question": "Which of these statements concerning the use of modifiers are true?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "By default (i.e. no modifier) the member is only accessible to classes in the same package and subclasses of the\nclass."
      },
      {
        "label": "B",
        "text": "You cannot specify visibility of local variables."
      },
      {
        "label": "C",
        "text": "Local variable always have default accessibility.\nA local variable (aka automatic variable) means a variable declared in a method. They don't have any"
      },
      {
        "label": "D",
        "text": "Local variables can be declared as private."
      },
      {
        "label": "E",
        "text": "Local variables can only be declared as public."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "You cannot apply any modifier except final to a local variable. i.e. you cannot make them transient, volatile, static,\npublic, and private.\nBut you can apply access modifiers (public private and protected) and final, transient, volatile, static to instance\nvariables.\nYou cannot apply native and synchronized to any kind of variable."
  },
  {
    "id": "2.1005",
    "topic": "Handling Exceptions",
    "question": "Consider the following code:\nclass A {\npublic void doA(int k) throws Exception { // 0\nfor(int i=0; i< 10; i++) {\nif(i == k) throw new Exception(\"Index of k is \"+i); // 1\n}\n}\npublic void doB(boolean f) { // 2\nif(f) {\ndoA(15); // 3\n}\nelse return;\n}\npublic static void main(String[] args) { // 4\nA a = new A();\na.doB(args.length>0); // 5\n}\n}\nWhich of the following statements are correct?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "This will compile and run without any errors or exception."
      },
      {
        "label": "B",
        "text": "This will compile if throws Exception is added at line //2"
      },
      {
        "label": "C",
        "text": "This will compile if throws Exception is added at line //4"
      },
      {
        "label": "D",
        "text": "This will compile if throws Exception is added at line //2 as well as //4"
      },
      {
        "label": "E",
        "text": "This will compile if line marked // 1 is enclosed in a try - catch block."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Any checked exceptions must either be handled using a try block or the method that generates the exception must\ndeclare that it throws that exception.\nIn this case, doA() declares that it throws Exception. doB() is calling doA but it is not handling the exception\ngenerated by doA(). So, it must declare that it throws Exception. Now, the main() method is calling doB(), which\ngenerates an exception (due to a call to doA()). Therefore, main() must also either wrap the call to doB() in a try\nblock or declare it in its throws clause.\nThe main(String[] args) method is the last point in your program where any unhandled checked exception can\nbubble up to. After that the exception is thrown to the JVM and the JVM kills the thread."
  },
  {
    "id": "2.1006",
    "topic": "Handling Exceptions",
    "question": "What will be the result of compiling and running the following program ?\nclass NewException extends Exception {}\nclass AnotherException extends Exception {}\npublic class ExceptionTest{\npublic static void main(String [] args) throws Exception{\ntry{\nm2();\n}\nfinally{ m3(); }\n}\npublic static void m2() throws NewException{ throw new NewException(); }\npublic static void m3() throws AnotherException{ throw new AnotherException(); }\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It will compile but will throw AnotherException when run."
      },
      {
        "label": "B",
        "text": "It will compile but will throw NewException when run."
      },
      {
        "label": "C",
        "text": "It will compile and run without throwing any exceptions."
      },
      {
        "label": "D",
        "text": "It will not compile."
      },
      {
        "label": "E",
        "text": "None of the above."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "m2() throws NewException, which is not caught anywhere. But before exiting out of the main method, finally must\nbe executed. Since finally throw AnotherException (due to a call to m3() ), the NewException thrown in the try\nblock ( due to call to m2() ) is ignored and AnotherException is thrown from the main method."
  },
  {
    "id": "2.1007",
    "topic": "Java Basics",
    "question": "How can you declare a method someMethod() such that an instance of the class is not needed to access it and all\nthe members of the same package have access to it.",
    "selectCount": 3,
    "options": [
      {
        "label": "A",
        "text": "public static void someMethod()"
      },
      {
        "label": "B",
        "text": "static void someMethod()"
      },
      {
        "label": "C",
        "text": "protected static void someMethod()"
      },
      {
        "label": "D",
        "text": "void someMethod()"
      },
      {
        "label": "E",
        "text": "protected void someMethod()"
      },
      {
        "label": "F",
        "text": "public abstract static void someMethod()"
      }
    ],
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "explanation": "Since the question says, \"...an instance of the class is not needed...\", the method has to be static.\nAlso, as the question does not say that other packages should not have access to the method so public or protected\nis also correct."
  },
  {
    "id": "2.1008",
    "topic": "Working with Methods - Overloading",
    "question": "Given the following pairs of method declarations, which of the statements are true?\n1.\nvoid perform_work(int time){ }\nint perform_work(int time, int speed){ return time*speed ;}\n2.\nvoid perform_work(int time){ }\nint perform_work(int speed){return speed ;}\n3.\nvoid perform_work(int time){ }\nvoid Perform_work(int time){ }",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "The first pair of methods will compile correctly and overload the method 'perform_work'."
      },
      {
        "label": "B",
        "text": "The second pair of methods will compile correctly and overload the method 'perform_work'."
      },
      {
        "label": "C",
        "text": "The third pair of methods will compile correctly and overload the method 'perform_work'."
      },
      {
        "label": "D",
        "text": "The second pair of methods will not compile correctly."
      },
      {
        "label": "E",
        "text": "The third pair of methods will not compile correctly."
      }
    ],
    "correctAnswers": [
      "A",
      "D"
    ],
    "explanation": "Overloading of a method occurs when the name of more than one methods is exactly same but the parameter lists\nare different.\nThe first and the third pairs of methods will compile correctly as they follow the above stated rule.\nThe second pair of methods will not compile correctly, since their method signatures are same and the compiler\ncannot differentiate between the two methods as it does not look for return type. Also, only name and input\nparameters are the part of method declaration . Names of the parameters don't matter.\nBoth methods in the first pair are named perform_work but have different parameter list so they overload this\nmethod name i.e. perform_work.\nThe method named 'perform_work' is distinct from the method named 'Perform_work', as identifiers in Java are\ncase-sensitive."
  },
  {
    "id": "2.1009",
    "topic": "Working with Inheritance",
    "question": "Consider the following code:\nclass Super { static String ID = \"QBANK\"; }\nclass Sub extends Super{\nstatic { System.out.print(\"In Sub\"); }\n}\npublic class Test{\npublic static void main(String[] args){\nSystem.out.println(Sub.ID);\n}\n}\nWhat will be the output when class Test is run?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It will print In Sub and QBANK."
      },
      {
        "label": "B",
        "text": "It will print QBANK."
      },
      {
        "label": "C",
        "text": "Depends on the implementation of JVM."
      },
      {
        "label": "D",
        "text": "It will not even compile."
      },
      {
        "label": "E",
        "text": "None of the above."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "As per Section 12.4.1 given here: http://docs.oracle.com/javase/specs/jls/se7/html/jls-12.html\nA class or interface type T will be initialized immediately before the first occurrence of any one of the following:\nT is a class and an instance of T is created.\nT is a class and a static method declared by T is invoked.\nA static field declared by T is assigned.\nA static field declared by T is used and the field is not a constant variable (§4.12.4).\nT is a top level class (§7.6), and an assert statement (§14.10) lexically nested within T (§8.1.3) is executed.\nA reference to a static field (§8.3.1.1) causes initialization of only the class or interface that actually declares it,\neven though it might be referred to through the name of a subclass, a subinterface, or a class that implements an\ninterface.\nInvocation of certain reflective methods in class Class and in package java.lang.reflect also causes class or\ninterface initialization.\nA class or interface will not be initialized under any other circumstance."
  },
  {
    "id": "2.1010",
    "topic": "Using Loop Constructs",
    "question": "What will the following program print?\npublic class TestClass{\npublic static void main(String[] args){\nfor : for(int i = 0; i< 10; i++){\nfor (int j = 0; j< 10; j++){\nif ( i+ j > 10 ) break for;\n}\nSystem.out.println( \"hello\");\n}\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It will print hello 6 times."
      },
      {
        "label": "B",
        "text": "It will not compile."
      },
      {
        "label": "C",
        "text": "It will print hello 2 times."
      },
      {
        "label": "D",
        "text": "It will print hello 5 times."
      },
      {
        "label": "E",
        "text": "It will print hello 4 times."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Note that for is a keyword and so cannot be used as a label. But you can use any other identifier as a label.\nFor example, The following code is valid even though String is a class name and String is also used as an\nidentifier!\nString String = \"\"; //This is valid.\nString : for(int i = 0; i< 10; i++) //This is valid too!\n{\nfor (int j = 0; j< 10; j++){\nif ( i+ j > 10 ) break String;\n}\nSystem.out.println( \"hello\");\n}\nIt will print hello 2 times."
  },
  {
    "id": "2.1011",
    "topic": "Working with Methods - Overloading",
    "question": "Consider the following code:\npublic class TestClass{\npublic void method(Object o){\nSystem.out.println(\"Object Version\");\n}\npublic void method(java.io.FileNotFoundException s){\nSystem.out.println(\"java.io.FileNotFoundException Version\");\n}\npublic void method(java.io.IOException s){\nSystem.out.println(\"IOException Version\");\n}\npublic static void main(String args[]){\nTestClass tc = new TestClass();\ntc.method(null);\n}\n}\nWhat would be the output when the above program is compiled and run? (Assume that FileNotFoundException is\na subclass of IOException, which in turn is a subclass of Exception)",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It will print Object Version"
      },
      {
        "label": "B",
        "text": "It will print java.io.IOException Version"
      },
      {
        "label": "C",
        "text": "It will print java.io.FileNotFoundException Version"
      },
      {
        "label": "D",
        "text": "It will not compile."
      },
      {
        "label": "E",
        "text": "It will throw an exception at runtime."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "The reason is quite simple, the most specific method depending upon the argument is called. Here, null can be\npassed to all the 3 methods but FileNotFoundException class is the subclass of IOException which in turn is the\nsubclass of Object. So, FileNotFoundException class is the most specific class. So, this method is called.\nHad there been two most specific methods, it would not even compile as the compiler will not be able to determine\nwhich method to call. For example:\npublic class TestClass{\npublic void method(Object o){\nSystem.out.println(\"Object Version\");\n}\npublic void method(String s){\nSystem.out.println(\"String Version\");\n}\npublic void method(StringBuffer s){\nSystem.out.println(\"StringBuffer Version\");\n}\npublic static void main(String args[]){\nTestClass tc = new TestClass();\ntc.method(null);\n}\n}\nHere, null can be passed as both StringBuffer and String and none is more specific than the other. So, it will\nnot compile."
  },
  {
    "id": "2.1012",
    "topic": "Constructors",
    "question": "Which lines contain a valid constructor in the following code?\npublic class TestClass{\npublic TestClass(int a, int b) { } // 1\npublic void TestClass(int a) { } // 2\npublic TestClass(String s); // 3\nprivate TestClass(String s, int a) { } //4\npublic TestClass(String s1, String s2) { }; //5\n}",
    "selectCount": 3,
    "options": [
      {
        "label": "A",
        "text": "Line // 1"
      },
      {
        "label": "B",
        "text": "Line // 2"
      },
      {
        "label": "C",
        "text": "Line // 3"
      },
      {
        "label": "D",
        "text": "Line // 4"
      },
      {
        "label": "E",
        "text": "Line // 5"
      }
    ],
    "correctAnswers": [
      "A",
      "D",
      "E"
    ],
    "explanation": "It is interesting to note that public void TestClass(int a) {} // 2 will actually compile. It is not a\nconstructor, but compiler considers it as a valid method!"
  },
  {
    "id": "2.1013",
    "topic": "Using Loop Constructs",
    "question": "Using a break in a while loop causes the loop to break the current iteration and start the next iteration of the loop.",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "True"
      },
      {
        "label": "B",
        "text": "False"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "The break statement is to break out of any loop completely. So the current iteration and any other remaining\niterations of the loop will not execute.\nControl is transferred to the first statement after the loop."
  },
  {
    "id": "2.1014",
    "topic": "Using Operators and Decision Constructs",
    "question": "What will the following program print?\npublic class TestClass{\npublic static void main(String[] args){\nObject obj1 = new Object();\nObject obj2 = obj1;\nif( obj1.equals(obj2) ) System.out.println(\"true\");\nelse System.out.println(\"false\");\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "true"
      },
      {
        "label": "B",
        "text": "false"
      },
      {
        "label": "C",
        "text": "It will not compile."
      },
      {
        "label": "D",
        "text": "It will compile but throw an exception at run time."
      },
      {
        "label": "E",
        "text": "None of the above."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Object class's equals() method just checks whether the two references are pointing to the same location or not. In\nthis case they really are pointing to the same location because of obj2 = obj1; so it returns true."
  },
  {
    "id": "2.1015",
    "topic": "Working with Inheritance",
    "question": "Which statement regarding the following code is correct?\nclass A{\npublic int i = 10;\nprivate int j = 20;\n}\nclass B extends A{\nprivate int i = 30; //1\npublic int k = 40;\n}\nclass C extends B{\n}\npublic class TestClass{\npublic static void main(String args[]){\nC c = new C();\nSystem.out.println(c.i); //2\nSystem.out.println(c.j); //3\nSystem.out.println(c.k);\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "The code will print 10 and 40 if //3 is commented."
      },
      {
        "label": "B",
        "text": "The code will print 40 if //2 and //3 are commented."
      },
      {
        "label": "C",
        "text": "The code will not compile because of //1."
      },
      {
        "label": "D",
        "text": "The code will compile if the line marked //2 is commented out."
      },
      {
        "label": "E",
        "text": "None of these."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "You cannot access c.i because i is private in B. But you can access ( (A)c).i because i is public in A.\nRemember that member variables are hidden and not overridden. So, B's i hides A's i and since B's i is private, you\ncan't access A's i unless you cast the reference to A.\nYou cannot access c.j because j is private in A."
  },
  {
    "id": "2.1016",
    "topic": "Using Loop Constructs",
    "question": "What will the following code snippet print?\nint count = 0, sum = 0;\ndo{\nif(count % 3 == 0) continue;\nsum+=count;\n}\nwhile(count++ < 11);\nSystem.out.println(sum);",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "49"
      },
      {
        "label": "B",
        "text": "48"
      },
      {
        "label": "C",
        "text": "37"
      },
      {
        "label": "D",
        "text": "36"
      },
      {
        "label": "E",
        "text": "38"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "1. The while condition uses post increment operator, which means count is first compared with 11 (and based on\nthis comparison a decision is made whether to execute the loop again or not) and then incremented. So when count\nis 10, the condition 10<11 is true (that means the loop needs to be executed again) and count is incremented to 11.\n2. When count is completely divisible by 3, (i.e. when count is 0, 3, 6, 9) sum+=count; is not executed.\nThus, the result is the summation of:\n1 2 4 5 7 8 10 11"
  },
  {
    "id": "2.1019",
    "topic": "Working with Inheritance",
    "question": "You are modeling a class hierarchy for living things. You have a class LivingThing which has an abstract method\nreproduce().\nNow, you want to have 2 concrete subclasses of LivingThing - Plant and Animal. Both do reproduce but the\nmechanisms are different. What would you do?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "Overload the reproduce method in Plant and Animal classes"
      },
      {
        "label": "B",
        "text": "Overload the reproduce method in LivingThing class."
      },
      {
        "label": "C",
        "text": "Override the reproduce method in Plant and Animal classes"
      },
      {
        "label": "D",
        "text": "Either overload or override reproduce in Plant and Animal classes, it depends on the preference of the designer."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "This kind of scenario where the subclass HAS the behavior of the base class but implements it in a different way is\ncalled as overriding. Here, both Plant and Animal reproduce, so they have the behavior of the base class but they\ndo it differently, so you have to override the base class method in their code. Inheritance is always involved in\noverriding.\nOverloading is quite different, when you want to do similar (not same) things but the inputs are different then you\noverload a method. For example, you may have two add methods:\nadd(int i1, int i2) and add(ComplexNo c1, ComplexNo c2). Here both are doing similar things (that is why\nboth are named as add) but inputs are different. Both are two entirely different methods and there is no inheritance\ninvolved."
  },
  {
    "id": "2.1020",
    "topic": "Java Basics",
    "question": "What does the zeroth element of the string array passed to the standard main method contain?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "The name of the class."
      },
      {
        "label": "B",
        "text": "The string \"java\"."
      },
      {
        "label": "C",
        "text": "The number of arguments."
      },
      {
        "label": "D",
        "text": "The first argument of the argument list, if present."
      },
      {
        "label": "E",
        "text": "None of the above."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Note that if no argument is passed to the program, the args parameter is NOT null but a non-null array of Strings of\nlength zero."
  },
  {
    "id": "2.1021",
    "topic": "Working with Java API - String, StringBuilder",
    "question": "What will be the result of attempting to compile and run the following program?\npublic class TestClass{\npublic static void main(String args[ ] ){\nString s = \"hello\";\nStringBuilder sb = new StringBuilder( \"hello\" );\nsb.reverse();\ns.reverse();\nif( s == sb.toString() ) System.out.println( \"Equal\" );\nelse System.out.println( \"Not Equal\" );\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "Compilation error."
      },
      {
        "label": "B",
        "text": "It will print 'Equal'."
      },
      {
        "label": "C",
        "text": "It will print 'Not Equal'."
      },
      {
        "label": "D",
        "text": "Runtime error."
      },
      {
        "label": "E",
        "text": "None of the above."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": ""
  },
  {
    "id": "2.1022",
    "topic": "Working with Java API - String, StringBuilder",
    "question": "What will be the output of the following program (excluding the quotes)?\npublic class SubstringTest{\npublic static void main(String args[]){\nString String = \"string isa string\";\nSystem.out.println(String.substring(3, 6));\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It will not compile."
      },
      {
        "label": "B",
        "text": "\"ing is\""
      },
      {
        "label": "C",
        "text": "\"ing isa\""
      },
      {
        "label": "D",
        "text": "\"ing \" (There is a space after g)"
      },
      {
        "label": "E",
        "text": "None of the above."
      }
    ],
    "correctAnswers": [
      "E"
    ],
    "explanation": "Remember, indexing always starts from 0.\n\"hamburger\".substring(4, 8) returns \"urge\"\n\"smiles\".substring(1, 5) returns \"mile\"\nParameters:\nbeginIndex - the beginning index, inclusive.\nendIndex - the ending index, exclusive.\nReturns:\nthe specified substring.\nThrows:\nIndexOutOfBoundsException - if the beginIndex is negative, or endIndex is larger than the length of this String\nobject, or beginIndex is larger than endIndex."
  },
  {
    "id": "2.1024",
    "topic": "Using Loop Constructs",
    "question": "Given the following code fragment, which of the following lines would be a part of the output?\nouter:\nfor ( int i = 0 ; i<3 ; i++ ){\nfor ( int j = 0 ; j<2 ; j++ ){\nif ( i == j ){\ncontinue outer;\n}\nSystem.out.println( \"i=\" + i + \" , j=\" + j );\n}\n}",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "i = 1, j = 0"
      },
      {
        "label": "B",
        "text": "i = 0, j = 1"
      },
      {
        "label": "C",
        "text": "i = 1, j = 2"
      },
      {
        "label": "D",
        "text": "i = 2, j = 1"
      },
      {
        "label": "E",
        "text": "i = 2, j = 2"
      }
    ],
    "correctAnswers": [
      "A",
      "D"
    ],
    "explanation": "The given code prints:\ni=1, j=0\ni=2, j=0\ni=2, j=1\nThe variable i iterates through the values 0, 1 and 2 in the outer loop, while j varies from 0 to 1 in the inner loop.\nIf the values of i and j are equal, the continue statement is executed and printing is skipped and next iteration of\nouter 'for' loop starts."
  },
  {
    "id": "2.1025",
    "topic": "Handling Exceptions",
    "question": "Identify correct constructs.",
    "selectCount": 1,
    "options": [],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Note that a try with resources block may or may not to have any catch or finally block at all. However, try with\nresources is not in scope for this exam."
  },
  {
    "id": "2.1026",
    "topic": "Handling Exceptions",
    "question": "Given the class\n// Filename: Test.java\npublic class Test{\npublic static void main(String args[]){\nfor(int i = 0; i< args.length; i++){\nSystem.out.print(\" \"+args[i]);\n}\n}\n}\nNow consider the following 3 options for running the program:\na: java Test\nb: java Test param1\nc: java Test param1 param2\nWhich of the following statements are true?",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "The program will throw java.lang.ArrayIndexOutOfBoundsException on option a."
      },
      {
        "label": "B",
        "text": "The program will throw java.lang.NullPointerException on option a."
      },
      {
        "label": "C",
        "text": "The program will print Test param1 on option b."
      },
      {
        "label": "D",
        "text": "It will print param1 param2 on option c."
      },
      {
        "label": "E",
        "text": "It will not print anything on option a."
      }
    ],
    "correctAnswers": [
      "D",
      "E"
    ],
    "explanation": "It will not throw NullPointerException because args[] is never null. If no argument is given (as in option a)\nthen the length of args is 0."
  },
  {
    "id": "2.1027",
    "topic": "Working with Java Data Types",
    "question": "What will the following code print when run?\npublic class TestClass{\npublic static Integer wiggler(Integer x){\nInteger y = x + 10;\nx++;\nSystem.out.println(x);\nreturn y;\n}\npublic static void main(String[] args){\nInteger dataWrapper = new Integer(5);\nInteger value = wiggler(dataWrapper);\nSystem.out.println(dataWrapper+value);\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "5 and 20"
      },
      {
        "label": "B",
        "text": "6 and 515"
      },
      {
        "label": "C",
        "text": "6 and 20"
      },
      {
        "label": "D",
        "text": "6 and 615"
      },
      {
        "label": "E",
        "text": "It will not compile."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "1. Wrapper objects are always immutable. Therefore, when dataWrapper is passed into wiggler() method, it is\nnever changed even when x++; is executed. However, x, which was pointing to the same object as dataWrapper, is\nassigned a new Integer object (different from dataWrapper) containing 6.\n2. If both the operands of the + operator are numeric, it adds the two operands. Here, the two operands are Integer\n5 and Integer 15, so it unboxes them, adds them, and prints 20."
  },
  {
    "id": "2.1029",
    "topic": "Creating and Using Arrays",
    "question": "The following class will print 'index = 2' when compiled and run.\nclass Test{\npublic static int[ ] getArray() { return null; }\npublic static void main(String[] args){\nint index = 1;\ntry{\ngetArray()[index=2]++;\n}\ncatch (Exception e){ } //empty catch\nSystem.out.println(\"index = \" + index);\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "True"
      },
      {
        "label": "B",
        "text": "False"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "If the array reference expression produces null instead of a reference to an array, then a NullPointerException is\nthrown at runtime, but only after all parts of the array reference expression have been evaluated and only if these\nevaluations completed normally.\nThis means, first index = 2 will be executed, which assigns 2 to index. After that null[2] is executed, which throws\na NullPointerException. But this exception is caught by the catch block, which prints nothing. So it seems like\nNullPointerException is not thrown but it actually is.\nIn other words, the embedded assignment of 2 to index occurs before the check for array reference produced by\ngetArray().\nIn an array access, the expression to the left of the brackets appears to be fully evaluated before any part of the\nexpression within the brackets is evaluated. Note that if evaluation of the expression to the left of the brackets\ncompletes abruptly, no part of the expression within the brackets will appear to have been evaluated."
  },
  {
    "id": "2.1032",
    "topic": "Using Loop Constructs",
    "question": "What will the following code print?\npublic class BreakTest{\npublic static void main(String[] args){\nint i = 0, j = 5;\nlab1 : for( ; ; i++){\nfor( ; ; --j) if( i >j ) break lab1;\n}\nSystem.out.println(\" i = \"+i+\", j = \"+j);\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "i = 1, j = -1"
      },
      {
        "label": "B",
        "text": "i = 1, j = 4"
      },
      {
        "label": "C",
        "text": "i = 0, j = 4"
      },
      {
        "label": "D",
        "text": "i = 0, j = -1"
      },
      {
        "label": "E",
        "text": "It will not compile."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "The values of i and j in the inner most for loop change as follows:\ni = 0 j = 5\ni = 0 j = 4\ni = 0 j = 3\ni = 0 j = 2\ni = 0 j = 1\ni = 0 j = 0\ni = 0 j = -1\nTherefore, the final println prints i = 0, j = -1"
  },
  {
    "id": "2.1033",
    "topic": "Handling Exceptions",
    "question": "A try statement must always have a ............. associated with it.",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "catch"
      },
      {
        "label": "B",
        "text": "throws"
      },
      {
        "label": "C",
        "text": "finally"
      },
      {
        "label": "D",
        "text": "catch, finally or both"
      },
      {
        "label": "E",
        "text": "throw"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "A try without resources must have either a catch or a finally. It may have both as well.\nThus, the following constructs are valid:\n1.\ntry{\n}\ncatch(Exception e){ } // no finally\n2.\ntry{\n}\nfinally{ } // no catch\n3.\ntry{\n}\ncatch(Exception e){ }\nfinally{ }\n4. A catch can catch multiple exceptions:\ntry{\n}\ncatch(Exception1|Exception2|Exception3 e){ }\nNote: try with resources (which is not on this exam) may omit catch as well as finally blocks."
  },
  {
    "id": "2.1035",
    "topic": "Working with Inheritance",
    "question": "Which of the following statements are true?",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "The extends keyword is used to specify inheritance."
      },
      {
        "label": "B",
        "text": "subclass of a non-abstract class cannot be declared abstract."
      },
      {
        "label": "C",
        "text": "subclass of an abstract class can be declared abstract."
      },
      {
        "label": "D",
        "text": "subclass of a final class cannot be abstract."
      },
      {
        "label": "E",
        "text": "A class, in which all the members are declared private, cannot be declared public."
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "explanation": "The extends clause is used to specify that a class extends another class and thereby inherits all non-private\ninstance members of that class.\nA subclass can be declared abstract regardless of whether the superclass was declared abstract. A class cannot be\ndeclared abstract and final at the same time. This restriction makes sense because abstract classes need to be\nsubclassed to be useful and final forbids subclasses.\nThe visibility of the class is not limited by the visibility of its members. A class with all the members declared\nprivate can still be declared public or a class having all public members may be declared private."
  },
  {
    "id": "2.1036",
    "topic": "Creating and Using Arrays",
    "question": "Consider the following class...\nclass Test{\npublic static void main(String[ ] args){\nint[] a = { 1, 2, 3, 4 };\nint[] b = { 2, 3, 1, 0 };\nSystem.out.println( a [ (a = b)[3] ] );\n}\n}\nWhat will it print when compiled and run ?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It will not compile."
      },
      {
        "label": "B",
        "text": "It will throw ArrayIndexOutOfBoundsException when run."
      },
      {
        "label": "C",
        "text": "It will print 1."
      },
      {
        "label": "D",
        "text": "It will print 3."
      },
      {
        "label": "E",
        "text": "It will print 4"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "In an array access, the expression to the left of the brackets appears to be fully evaluated before any part of the\nexpression within the brackets is evaluated.\nIn the expression a[(a=b)[3]], the expression a is fully evaluated before the expression (a=b)[3]; this means that\nthe original value of a is fetched and remembered while the expression (a=b)[3] is evaluated. This array\nreferenced by the original value of a is then subscripted by a value that is element 3 of another array (possibly the\nsame array) that was referenced by b and is now also referenced by a. So, it is actually a[0] = 1.\nNote that if evaluation of the expression to the left of the brackets completes abruptly, no part of the expression\nwithin the brackets will appear to have been evaluated."
  },
  {
    "id": "2.1037",
    "topic": "Working with Inheritance",
    "question": "What will the following code print when compiled and run?\nclass Base{\nvoid methodA(){\nSystem.out.println(\"base - MethodA\");\n}\n}\nclass Sub extends Base{\npublic void methodA(){\nSystem.out.println(\"sub - MethodA\");\n}\npublic void methodB(){\nSystem.out.println(\"sub - MethodB\");\n}\npublic static void main(String args[]){\nBase b=new Sub(); //1\nb.methodA(); //2\nb.methodB(); //3\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "sub - MethodA and sub - MethodB"
      },
      {
        "label": "B",
        "text": "base - MethodA and sub - MethodB"
      },
      {
        "label": "C",
        "text": "Compile time error at //1"
      },
      {
        "label": "D",
        "text": "Compile time error at //2"
      },
      {
        "label": "E",
        "text": "Compile time error at //3"
      }
    ],
    "correctAnswers": [
      "E"
    ],
    "explanation": "The point to understand here is, b is declared to be a reference of class Base and methodB() is not defined in Base.\nSo the compiler cannot accept the statement b.methodB() because it only verifies the validity of a call by looking\nat the declared class of the reference.\nFor example, the compiler is able to verify that b.methodA() is a valid call because class Base has method\nmethodA. But it does not \"bind\" the call. Call binding is done at runtime by the jvm and the jvm looks for the actual\nclass of object referenced by the variable before invoking the method."
  },
  {
    "id": "2.1038",
    "topic": "Using Operators and Decision Constructs",
    "question": "What will be the output of the following program?\npublic class TestClass{\npublic static void main(String args[ ] ){\nint i = 0 ;\nboolean bool1 = true ;\nboolean bool2 = false;\nboolean bool = false;\nbool = ( bool2 & method1(i++) ); //1\nbool = ( bool2 && method1(i++) ); //2\nbool = ( bool1 | method1(i++) ); //3\nbool = ( bool1 || method1(i++) ); //4\nSystem.out.println(i);\n}\npublic static boolean method1(int i){\nreturn i>0 ? true : false;\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It will print 1."
      },
      {
        "label": "B",
        "text": "It will print 2."
      },
      {
        "label": "C",
        "text": "It will print 3."
      },
      {
        "label": "D",
        "text": "It will print 4."
      },
      {
        "label": "E",
        "text": "It will print 0."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "& and | do not short circuit the expression but && and || do.\nAs the value of all the expressions ( 1 through 4) can be determined just by looking at the first part, && and || do\nnot evaluate the rest of the expression, so method1() is not called for 2 and 4.\nHence the value of i is incremented only twice."
  },
  {
    "id": "2.1039",
    "topic": "Using Operators and Decision Constructs",
    "question": "What will the following method return if called with an argument of 7?\npublic int transformNumber(int n){\nint radix = 2;\nint output = 0;\noutput += radix*n;\nradix = output/radix;\nif(output<14){\nreturn output;\n}\nelse{\noutput = output*radix/2;\nreturn output;\n}\nelse {\nreturn output/2;\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "7"
      },
      {
        "label": "B",
        "text": "14"
      },
      {
        "label": "C",
        "text": "49"
      },
      {
        "label": "D",
        "text": "Compilation fails."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": ""
  },
  {
    "id": "2.1040",
    "topic": "Using Operators and Decision Constructs",
    "question": "What will the following class print ?\nclass InitTest{\npublic static void main(String[] args){\nint a = 10;\nint b = 20;\na += (a = 4);\nb = b + (b = 5);\nSystem.out.println(a+ \", \"+b);\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It will print 8, 25"
      },
      {
        "label": "B",
        "text": "It will print 4, 5"
      },
      {
        "label": "C",
        "text": "It will print 14, 5"
      },
      {
        "label": "D",
        "text": "It will print 4, 25"
      },
      {
        "label": "E",
        "text": "It will print 14, 25"
      }
    ],
    "correctAnswers": [
      "E"
    ],
    "explanation": "a += (a =4) is same as a = a + (a=4).\nFirst, a's value of 10 is kept aside and (a=4) is evaluated. The statement (a=4) assigns 4 to a and the whole\nstatement returns the value 4. Thus, 10 and 4 are added and assigned back to a.\nSame logic applies to b = b + (b = 5); as well."
  },
  {
    "id": "2.1041",
    "topic": "Working with Java Data Types",
    "question": "Which of the following is not a primitive data value in Java?",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "\"x\""
      },
      {
        "label": "B",
        "text": "'x'"
      },
      {
        "label": "C",
        "text": "10.2F"
      },
      {
        "label": "D",
        "text": "Object"
      },
      {
        "label": "E",
        "text": "false"
      }
    ],
    "correctAnswers": [
      "A",
      "D"
    ],
    "explanation": "Java has only the following primitive data types:\nboolean, byte, short, char, int, long, float and double."
  },
  {
    "id": "2.1042",
    "topic": "Using Loop Constructs",
    "question": "Consider the following method which is called with an argument of 7:\npublic void method1(int i){\nint j = (i*30 - 2)/100;\nPOINT1 : for(;j<10; j++){\nboolean flag = false;\nwhile(!flag){\nif(Math.random()>0.5) break POINT1;\n}\n}\nwhile(j>0){\nSystem.out.println(j--);\nif(j == 4) break POINT1;\n}\n}\nWhat will it print?\n(Assume that Math.random() return a double between 0.0 and 1.0, not including 1.0)",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It will print 1 and 2"
      },
      {
        "label": "B",
        "text": "It will print 1 to N where N is a random number."
      },
      {
        "label": "C",
        "text": "It will not compile."
      },
      {
        "label": "D",
        "text": "It will throw an exception at runtime."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": ""
  },
  {
    "id": "2.1044",
    "topic": "Using Loop Constructs",
    "question": "What will be the output if you run the following program?\npublic class TestClass{\npublic static void main(String args[]){\nint i;\nint j;\nfor (i = 0, j = 0 ; j < 1 ; ++j , i++){\nSystem.out.println( i + \" \" + j );\n}\nSystem.out.println( i + \" \" + j );\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "0 0 will be printed twice."
      },
      {
        "label": "B",
        "text": "1 1 will be printed once."
      },
      {
        "label": "C",
        "text": "0 1 will be printed followed by 1 2."
      },
      {
        "label": "D",
        "text": "0 0 will be printed followed by 1 1."
      },
      {
        "label": "E",
        "text": "It will print 0 0 and then 0 1."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "j will be less than 1 for only the first iteration. So, first it will print 0, 0. Next, i and j are incremented.\nBecause j is not less than 1 at the start of the loop, the condition fails and it comes out of the loop. Finally, it will\nprint 1,1."
  },
  {
    "id": "2.1045",
    "topic": "Using Operators and Decision Constructs",
    "question": "Which line, if any, will give a compile time error ?\nvoid test(byte x){\nswitch(x){\ncase 'a': // 1\ncase 256: // 2\ncase 0: // 3\ndefault : // 4\ncase 80: // 5\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "Line 1 as 'a' is not compatible with byte."
      },
      {
        "label": "B",
        "text": "Line 2 as 256 cannot fit into a byte."
      },
      {
        "label": "C",
        "text": "No compile time error but a run time error at line 2."
      },
      {
        "label": "D",
        "text": "Line 4 as the default label must be the last label in the switch statement."
      },
      {
        "label": "E",
        "text": "There is nothing wrong with the code."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Every case constant expression in a switch block must be assignable to the type of switch expression. Meaning :\nbyte by = 10;\nswitch(by){\ncase 300 : //some code;\ncase 56 : //some code;\n}\nThis will not compile as 300 is not assignable to 'by ' which can only hold values from -128 to 127. This gives\ncompile time error as the compiler detects it while compiling. The use of break keyword is not mandatory, and\nwithout it the control will simply fall through the labels of the switch statement."
  },
  {
    "id": "2.1046",
    "topic": "Handling Exceptions",
    "question": "What will be the output of the following program:\npublic class TestClass{\npublic static void main(String args[]){\ntry{\nm1();\n}catch(IndexOutOfBoundsException e){\nSystem.out.println(\"1\");\nthrow new NullPointerException();\n}catch(NullPointerException e){\nSystem.out.println(\"2\");\nreturn;\n}catch (Exception e) {\nSystem.out.println(\"3\");\n}finally{\nSystem.out.println(\"4\");\n}\nSystem.out.println(\"END\");\n}\nstatic void m1(){\nSystem.out.println(\"m1 Starts\");\nthrow new IndexOutOfBoundsException( \"Big Bang \" );\n}\n}",
    "selectCount": 3,
    "options": [
      {
        "label": "A",
        "text": "The program will print m1 Starts."
      },
      {
        "label": "B",
        "text": "The program will print m1 Starts, 1 and 4, in that order."
      },
      {
        "label": "C",
        "text": "The program will print m1 Starts, 1 and 2, in that order."
      },
      {
        "label": "D",
        "text": "The program will print m1 Starts, 1, 2 and 4 in that order."
      },
      {
        "label": "E",
        "text": "END will not be printed."
      }
    ],
    "correctAnswers": [
      "A",
      "B",
      "E"
    ],
    "explanation": "The IndexOutOfBoundsException is handled by the first catch block. Inside this block, a new\nNullPointerException is thrown. As this exception is not thrown inside the try block, it will not be caught by any\nof the remaining catch blocks. It will actually be sent to the caller of the main() method after the finally block is\nexecuted. (Hence '4' in the output.)\nThe code that prints END is never reached, since the NullPointerException remains uncaught after the execution\nof the finally block.\nAt the end a stack trace for the NullPointerException will be printed."
  },
  {
    "id": "2.1047",
    "topic": "Working with Inheritance",
    "question": "An overriding method must have a same parameter list and the same return type as that of the overridden method.",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "True"
      },
      {
        "label": "B",
        "text": "False"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "This would have been true prior to Java 1.5. But from Java 1.5, an overriding method is allowed to change the\nreturn type to any subclass of the original return type, also known as covariant return type. This does not apply to\nprimitives, in which case, the return type of the overriding method must match exactly to the return type of the\noverridden method."
  },
  {
    "id": "2.1048",
    "topic": "Handling Exceptions",
    "question": "What will be the result of attempting to compile and run the following program?\npublic class TestClass{\npublic static void main(String args[]){\ntry{\nRuntimeException re = null;\nthrow re;\n}\ncatch(Exception e){\nSystem.out.println(e);\n}\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "The code will fail to compile, since RuntimeException cannot be caught by catching an Exception.\nRuntimeException can be caught by catch(Exception e) statement because RuntimeException is a\nsubclass of Exception."
      },
      {
        "label": "B",
        "text": "The program will fail to compile, since re is null."
      },
      {
        "label": "C",
        "text": "The program will compile without error and will print java.lang.RuntimeException when run."
      },
      {
        "label": "D",
        "text": "The program will compile without error and will print java.lang.NullPointerException when run."
      },
      {
        "label": "E",
        "text": "The program will compile without error and will run and print null."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "The try block generates NullPointerException which will be caught by the catch block."
  },
  {
    "id": "2.1049",
    "topic": "Working with Inheritance",
    "question": "Consider that you are writing a set of classes related to a new Data Transmission Protocol and have created your\nown exception hierarchy derived from java.lang.Exception as follows:\nenthu.trans.ChannelException\n+-- enthu.trans.DataFloodingException,\nenthu.trans.FrameCollisionException\nYou have a TransSocket class that has the following method:\nlong connect(String ipAddr) throws ChannelException\nNow, you also want to write another \"AdvancedTransSocket\" class, derived from \"TransSocket\" which overrides\nthe above mentioned method. Which of the following are valid declaration of the overriding method?",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "int connect(String ipAddr) throws DataFloodingException"
      },
      {
        "label": "B",
        "text": "int connect(String ipAddr) throws ChannelException"
      },
      {
        "label": "C",
        "text": "long connect(String ipAddr) throws FrameCollisionException"
      },
      {
        "label": "D",
        "text": "long connect(String ipAddr) throws Exception"
      },
      {
        "label": "E",
        "text": "long connect(String str)"
      }
    ],
    "correctAnswers": [
      "C",
      "E"
    ],
    "explanation": "There are 2 important concepts involved here:\n1. The overriding method must have same return type in case of primitives (a subclass is allowed in case of\nclasses) (Therefore, the choices returning int are not valid.) and the parameter list must be the same (The name of\nthe parameter does not matter, just the Type is important).\n2. The overriding method can throw a subset of the exception or subclass of the exceptions thrown by the\noverridden class. Having no throws clause is also valid since an empty set is a valid subset."
  },
  {
    "id": "2.1050",
    "topic": "Using Loop Constructs",
    "question": "What will be the result of attempting to compile and run the following program?\nclass TestClass{\npublic static void main(String args[]){\nint i = 0;\nfor (i=1 ; i<5 ; i++) continue; //(1)\nfor (i=0 ; ; i++) break; //(2)\nfor ( ; i<5?false:true ; ); //(3)\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "The code will compile without error and will terminate without problems when run."
      },
      {
        "label": "B",
        "text": "The code will fail to compile, since the continue can't be used this way."
      },
      {
        "label": "C",
        "text": "The code will fail to compile, since the break can't be used this way."
      },
      {
        "label": "D",
        "text": "The code will fail to compile, since the for statement in line 2 is invalid."
      },
      {
        "label": "E",
        "text": "The code will compile without error but will never terminate."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "A continue statement can occur in and only in a for, while or do-while loop. A continue statement means: Forget\nabout the rest of the statements in the loop and start the next iteration.\nSo,\nfor (i=1 ; i<5 ; i++) continue; just increments the value of i up to 5 because of i++.\nfor (i=0 ; ; i++) break; iterates only once because of the break so the value of i becomes 0.\nfor ( ; i<5?false:true ; ); never iterates because i is less than 5 (it is 0 because of //2) and the\ncondition expression is false!\nAt the end of the code, the value of i is 0."
  },
  {
    "id": "2.1051",
    "topic": "Using Operators and Decision Constructs",
    "question": "Assuming that a valid integer will be passed in the command line as first argument, which statements regarding the\nfollowing code are correct?\npublic class TestClass{\npublic static void main(String args[]){\nint x = Integer.parseInt(args[0]);\nswitch(x){\ncase x < 5 : System.out.println(\"BIG\"); break;\ncase x > 5 : System.out.println(\"SMALL\");\ndefault : System.out.println(\"CORRECT\"); break;\n}\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "BIG will never be followed by SMALL."
      },
      {
        "label": "B",
        "text": "SMALL will never follow anything else."
      },
      {
        "label": "C",
        "text": "SMALL will always be followed by CORRECT."
      },
      {
        "label": "D",
        "text": "It will not compile."
      },
      {
        "label": "E",
        "text": "It will throw an exception at runtime."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "It will say the following when compiled:\nTestClass.java: incompatible types\nfound : boolean\nrequired: int\ncase x < 5 : System.out.println(\"BIG\"); break;\nTestClass.java: incompatible types\nfound : boolean\nrequired: int\ncase x > 5 : System.out.println(\"SMALL\");\nThis is because the type of the case labels must be consistent with the type of the switch condition. Here, switch\ncondition is an int, so the case label values must be assignable to the switch condition variable. The expression x<5\nis of type boolean, which cannot be assigned it x (since it is an int).\nFurther, the expression in a switch statement must be of the type char, byte, short, int, Character, Byte, Short,\nInteger, String, or an enum. It cannot be a boolean. This is another reason the given code will not compile.\nFurther more, the expression in case must generate a constant value. Here, the value of the expression x<5 is not\nconstant. It is variable. So it is invalid."
  },
  {
    "id": "2.1053",
    "topic": "Working with Methods",
    "question": "Compared to public, protected and private accessibility, default accessibility is....",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "Less restrictive than public"
      },
      {
        "label": "B",
        "text": "More restrictive than public, but less restrictive than protected."
      },
      {
        "label": "C",
        "text": "More restrictive than protected, but less restrictive than private."
      },
      {
        "label": "D",
        "text": "More restrictive than private.\nprivate is most restrictive."
      },
      {
        "label": "E",
        "text": "Less restrictive than protected from within a package, and more restrictive than protected from outside a\npackage."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "The correct order :\npublic < protected < package (or default) < private\n(here, public is least restrictive and private is most restrictive.)"
  },
  {
    "id": "2.1054",
    "topic": "Working with Java API - String, StringBuilder",
    "question": "What will be written to the standard output when the following program is run?\npublic class TrimTest{\npublic static void main(String args[]){\nString blank = \" \"; // one space\nString line = blank + \"hello\" + blank + blank;\nline.concat(\"world\");\nString newLine = line.trim();\nSystem.out.println((int)(line.length() + newLine.length()));\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "25"
      },
      {
        "label": "B",
        "text": "24"
      },
      {
        "label": "C",
        "text": "23"
      },
      {
        "label": "D",
        "text": "22"
      },
      {
        "label": "E",
        "text": "None of the above."
      }
    ],
    "correctAnswers": [
      "E"
    ],
    "explanation": "Note that line.concat(\"world\") does not change line itself. It creates a new String object containing \"\nhello world\" but it is lost because there is no reference to it.\nSimilarly, calling trim() does not change the object itself.\nSo the answer is 8 + 5 = 13 !"
  },
  {
    "id": "2.1056",
    "topic": "Working with Inheritance",
    "question": "Which one of these is a proper definition of a class TestClass that cannot be sub-classed?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "final class TestClass { }"
      },
      {
        "label": "B",
        "text": "abstract class TestClass { }"
      },
      {
        "label": "C",
        "text": "native class TestClass { }"
      },
      {
        "label": "D",
        "text": "static class TestClass { }"
      },
      {
        "label": "E",
        "text": "private class TestClass { }"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "A final class cannot be subclassed.\nAlthough declaring a method static usually implies that it is also final, this is not true for classes. An inner class\ncan be declared static and still be extended.\nNote that for classes, final means it cannot be extended, while for methods, final means it cannot be overridden in\na subclass.\nThe native keyword can only be used on methods, not on classes and or variables."
  },
  {
    "id": "2.1057",
    "topic": "Using Loop Constructs",
    "question": "What will the following code print?\nvoid crazyLoop(){\nint c = 0;\nJACK: while (c < 8){\nJILL: System.out.println(c);\nif (c > 3) break JILL; else c++;\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It will not compile."
      },
      {
        "label": "B",
        "text": "It will throw an exception at runtime."
      },
      {
        "label": "C",
        "text": "It will print numbers from 0 to 8"
      },
      {
        "label": "D",
        "text": "It will print numbers from 0 to 3"
      },
      {
        "label": "E",
        "text": "It will print numbers from 0 to 4"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": ""
  },
  {
    "id": "2.1059",
    "topic": "Using Loop Constructs",
    "question": "Identify valid for constructs...\nAssume that Math.random() returns a double between 0.0 and 1.0 (not including 1.0).",
    "selectCount": 3,
    "options": [
      {
        "label": "A",
        "text": "for(;Math.random()<0.5;){\nSystem.out.println(\"true\");\n}"
      },
      {
        "label": "B",
        "text": "for(;;Math.random()<0.5){\nSystem.out.println(\"true\");\n}"
      },
      {
        "label": "C",
        "text": "for(;;Math.random()){\nSystem.out.println(\"true\");\n}"
      },
      {
        "label": "D",
        "text": "for(;;){\nMath.random()<.05? break : continue;\n}"
      },
      {
        "label": "E",
        "text": "for(;;){\nif(Math.random()<.05) break;\n}"
      }
    ],
    "correctAnswers": [
      "A",
      "C",
      "E"
    ],
    "explanation": "The three parts of a for loop are independent of each other. However, there are certain rules for each part. Please go\nthrough section 14.14.1 of JLS to understand it fully."
  },
  {
    "id": "2.1060",
    "topic": "Using Loop Constructs",
    "question": "Identify the valid for loop constructs assuming the following declarations:\nObject o = null;\nCollection c = //valid collection object.\nint[][] ia = //valid array",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "for(o : c){ }"
      },
      {
        "label": "B",
        "text": "for(final Object o2 :c){ }"
      },
      {
        "label": "C",
        "text": "for(int i : ia) { }"
      },
      {
        "label": "D",
        "text": "for(Iterator it : c.iterator()){ }"
      },
      {
        "label": "E",
        "text": "for(int i : ia[0]){ }"
      }
    ],
    "correctAnswers": [
      "B",
      "E"
    ],
    "explanation": ""
  },
  {
    "id": "2.1061",
    "topic": "Working with Java Data Types",
    "question": "What will be the result of attempting to compile and run the following class?\npublic class TestClass{\npublic static void main(String args[ ] ){\nint i, j, k;\ni = j = k = 9;\nSystem.out.println(i);\n}\n}",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "The code will not compile because unlike in c++, operator '=' cannot be chained i.e. a = b = c = d is invalid."
      },
      {
        "label": "B",
        "text": "The code will not compile as 'j' is being used before getting initialized."
      },
      {
        "label": "C",
        "text": "The code will compile correctly and will display '9' when run."
      },
      {
        "label": "D",
        "text": "The code will not compile as 'j' and 'i' are being used before getting initialized."
      },
      {
        "label": "E",
        "text": "All the variables will get a value of 9."
      }
    ],
    "correctAnswers": [
      "C",
      "E"
    ],
    "explanation": "Every expression has a value, in this case the value of the expression is the value that is assigned to the right hand\nside of the equation.\nk has a value of 9 which is assigned to j and then to i.\nAnother implication of this is :\nboolean b = false;\nif( b = true) { System.out.println(\"TRUE\");}\nThe above code is valid and will print TRUE. Because b = true has a boolean value, which is what an if\nstatement expects.\nNote that if( i = 5) { ... } is not valid because the value of the expression i = 5 is an int (5) and not a\nboolean."
  },
  {
    "id": "2.1062",
    "topic": "Working with Java Data Types",
    "question": "The following code snippet will print 4.\nint i1 = 1, i2 = 2, i3 = 3;\nint i4 = i1 + (i2=i3 );\nSystem.out.println(i4);",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "True"
      },
      {
        "label": "B",
        "text": "False"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "First the value of i1 is evaluated (i.e. 1). Now, i2 is assigned the value of i3 i.e. i2 becomes 3. Finally i4 gets 1 +3\ni.e. 4."
  },
  {
    "id": "2.1063",
    "topic": "Java Basics",
    "question": "Consider the directory structure shown in Image 1 that displays available folders and classes and the code given\nbelow:\nclass StockQuote{\nStock stock;\npublic StockQuote(Stock s) {\n}\npublic void store() throws IOException{\nUtil.store(stock);\n}\npublic double computePrice(){\nreturn Helper.getPricer(stock).price();\n}\n}\nAssuming that the code uses valid method calls, what statements MUST be added to the above class?",
    "selectCount": 4,
    "options": [
      {
        "label": "A",
        "text": "package com.enthu.rad.*;"
      },
      {
        "label": "B",
        "text": "import com.enthu.*;"
      },
      {
        "label": "C",
        "text": "package com.enthu.rad;"
      },
      {
        "label": "D",
        "text": "import com.*;"
      },
      {
        "label": "E",
        "text": "import java.io.*;"
      },
      {
        "label": "F",
        "text": "It is not required to import java.io.* or import java.io.IOException because java.io package is imported automatically."
      }
    ],
    "correctAnswers": [
      "B",
      "C",
      "D",
      "E"
    ],
    "explanation": ""
  },
  {
    "id": "2.1064",
    "topic": "Working with Inheritance",
    "question": "Consider this code:\ninterface X1{ }\ninterface X2{ }\nclass A { }\nclass B extends A implements X1{ }\nclass C extends B implements X2{\nD d = new D();\n}\nclass D { }\nWhich of the following statements are true?",
    "selectCount": 3,
    "options": [
      {
        "label": "A",
        "text": "D is-a B."
      },
      {
        "label": "B",
        "text": "B has-a D.\nC has-a D."
      },
      {
        "label": "C",
        "text": "C is-a A"
      },
      {
        "label": "D",
        "text": "C is-a X1"
      },
      {
        "label": "E",
        "text": "C is-a X2"
      }
    ],
    "correctAnswers": [
      "C",
      "D",
      "E"
    ],
    "explanation": "Consider this code:\nclass C extends B implements X2{\nD d = new D();\n}\nNow, Inheritance defines an is-a relation , so C is-a B because C extends B. This actually means that C can be used\nin all the places where B is used. C can substitute for B anywhere because C is-a B. As all objects have Object as\ntheir super class, every object 'is-a' Object.\nSince C implements X2, it is sometimes said that C 'is-like-a' X2. That is, although C is not an X2 but for all\npurposes C is like an X2. The distinction between is-a and is-like-a is not important for the exam. For the purpose\nof the exam, is-like-a is same as is-a. Therefore, C is-a X2 as well.\nAggregation defines a has-a relation. Here, D is a member object in C. In other words, D is contained within C. It\nis therefore said that C 'has-a' D.\nAll Java objects have the class Object as the ultimate superclass, and so Object is always at the root of any\ninheritance hierarchy."
  },
  {
    "id": "2.1065",
    "topic": "Using Operators and Decision Constructs",
    "question": "What will the following code print?\nboolean flag = true;\nif(flag = false){\nSystem.out.println(\"1\");\n}else if(flag){\nSystem.out.println(\"2\");\n}else if(!flag){\nSystem.out.println(\"3\");\n}else System.out.println(\"4\");",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "1"
      },
      {
        "label": "B",
        "text": "2"
      },
      {
        "label": "C",
        "text": "3"
      },
      {
        "label": "D",
        "text": "4"
      },
      {
        "label": "E",
        "text": "Compilation error."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "At the beginning, flag is true. In the first if, we do flag = false. Notice that it is not flag == false. It is a single =,\nwhich assigns false to flag. Thus, flag becomes false and the condition becomes false therefore 1 is not printed. In\nthe first 'else if', again since flag is false, 2 is not printed. In second 'else if', !flag implies !false, which is true, so 3\nis printed. Finally, since an else-if condition has been satisfied, the last else is not executed."
  },
  {
    "id": "2.1066",
    "topic": "Java Basics",
    "question": "Consider the following directory structure shown in Image 1 that displays available folders and classes and the\ncode given below.\nclass StockQuote{\nStock stock;\npublic StockQuote(Stock s) {\n}\npublic double computePrice(){\nreturn Helper.getPricer(stock).price();\n}\n}\nAssuming that the code uses valid method calls, what statements must be added to the above class?",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "import com.enthu.*;"
      },
      {
        "label": "B",
        "text": "import com.*.*;"
      },
      {
        "label": "C",
        "text": "import *.*.*;"
      },
      {
        "label": "D",
        "text": "import com.*;"
      },
      {
        "label": "E",
        "text": "import com.enthu.rad.*;"
      },
      {
        "label": "F",
        "text": "import all;"
      }
    ],
    "correctAnswers": [
      "D",
      "E"
    ],
    "explanation": "Since the given class does not have any package declaration, it belongs to the default package and therefore it must\nimport com.Helper and com.enthu.rad.Stock classes."
  },
  {
    "id": "2.1068",
    "topic": "Creating and Using Arrays",
    "question": "Which of the following statements are valid ?",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "String[ ] sa = new String[3]{ \"a\", \"b\", \"c\"};"
      },
      {
        "label": "B",
        "text": "String sa[ ] = { \"a \", \" b\", \"c\"};"
      },
      {
        "label": "C",
        "text": "String sa = new String[ ]{\"a\", \"b\", \"c\"};"
      },
      {
        "label": "D",
        "text": "String sa[ ] = new String[ ]{\"a\", \"b\", \"c\"};"
      },
      {
        "label": "E",
        "text": "String sa[ ] = new String[ ] {\"a\" \"b\" \"c\"};"
      }
    ],
    "correctAnswers": [
      "B",
      "D"
    ],
    "explanation": ""
  },
  {
    "id": "2.1069",
    "topic": "Java Basics",
    "question": "Which method declarations will enable a class to be run as a standalone program?",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "static void main(String args[ ])"
      },
      {
        "label": "B",
        "text": "public void static main(String args[ ])"
      },
      {
        "label": "C",
        "text": "public static main(String[ ] argv)"
      },
      {
        "label": "D",
        "text": "final public static void main(String [ ] array)"
      },
      {
        "label": "E",
        "text": "public static void main(String args[ ])"
      }
    ],
    "correctAnswers": [
      "D",
      "E"
    ],
    "explanation": "If you run the following program by changing the accessibility from public to private and protected, it may\nwork on some versions of Java.\nHowever, for the purpose of Java Certification exam, it should be assumed that for the JVM to execute a class\nusing the standard main method, the accessibility of the main method must be public.\npackage test;\npublic class TestClass{\nprivate static void main(String args[]){\nSystem.out.println(\"hello\");\n}\n}"
  },
  {
    "id": "2.1070",
    "topic": "Using Operators and Decision Constructs",
    "question": "What is the result of executing the following fragment of code:\nboolean b1 = false;\nint i1 = 2;\nint i2 = 3;\nif (b1 = i1 == i2){\nSystem.out.println(\"true\");\n} else{\nSystem.out.println(\"false\");\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "Compile time error."
      },
      {
        "label": "B",
        "text": "It will print true"
      },
      {
        "label": "C",
        "text": "It will print false"
      },
      {
        "label": "D",
        "text": "Runtime error."
      },
      {
        "label": "E",
        "text": "It will print nothing."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "The expression b1 = i1 == i2 will be evaluated as b1 = (i1 == i2) because == has higher precedence than =.\nFurther, all an if statement needs is a boolean. Now i1 == i2 returns false which is a boolean and since b1 =\nfalse is an expression and every expression has a return value (which is actually the Left Hand Side of the\nexpression), it returns false which is again a boolean. Therefore, in this case, the else condition will be executed."
  },
  {
    "id": "2.1071",
    "topic": "Using Operators and Decision Constructs",
    "question": "What will be the output of the following code snippet?\nint a = 1;\nint[] ia = new int[10];\nint b = ia[a];\nint c = b + a;\nSystem.out.println(b = c);",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "0"
      },
      {
        "label": "B",
        "text": "1"
      },
      {
        "label": "C",
        "text": "2"
      },
      {
        "label": "D",
        "text": "true"
      },
      {
        "label": "E",
        "text": "false"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "1. All the elements of an array of primitives are automatically initialized by default values, which is 0 for numeric\ntypes and false for boolean.\nTherefore, ia[1] is 0.\n2. = is not same as ==. The statement b = c assigns c (whose value is 1) to b. which is then printed."
  },
  {
    "id": "2.1072",
    "topic": "Working with Inheritance",
    "question": "What, if anything, is wrong with the following code?\n//Filename: TestClass.java\nclass TestClass implements T1, T2{\npublic void m1(){}\n}\ninterface T1{\nint VALUE = 1;\nvoid m1();\n}\ninterface T2{\nint VALUE = 2;\nvoid m1();\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "TestClass cannot implement them both because it leads to ambiguity."
      },
      {
        "label": "B",
        "text": "There is nothing wrong with the code."
      },
      {
        "label": "C",
        "text": "The code will work fine only if VALUE is removed from one of the interfaces."
      },
      {
        "label": "D",
        "text": "The code will work fine only if m1() is removed from one of the interfaces."
      },
      {
        "label": "E",
        "text": "None of the above."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Having ambiguous fields or methods does not cause any problems by itself but referring to such fields/methods in\nan ambiguous way will cause a compile time error. So you cannot call : System.out.println(VALUE); because it\nwill be ambiguous (there are two VALUE definitions). But the following lines are valid :\nTestClass tc = new TestClass();\nSystem.out.println(( ( T1) tc).VALUE);\nHowever, explicit cast is not required for calling the method m1() : ( ( T2) tc).m1();\ntc.m1() is also fine because even though m1() is declared in both the interfaces, the definition to both resolves\nunambiguously to only one m1(), which is defined in TestClass."
  },
  {
    "id": "2.1073",
    "topic": "Working with Java Data Types",
    "question": "Which line(s) of code in the following program will cause a compilation error?\npublic class TestClass{\nstatic int value = 0; //1\npublic static void main(String args[]) //2\n{\nint 2ndArgument = Integer.parseInt(args[2]); //3\nif( true == 2 > 10 ) //4\n{\nvalue = -10;\n}\nelse{\nvalue = 2ndArgument;\n}\nfor( ; value>0; value--) System.out.println(\"A\"); //5\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "1"
      },
      {
        "label": "B",
        "text": "2"
      },
      {
        "label": "C",
        "text": "3"
      },
      {
        "label": "D",
        "text": "4"
      },
      {
        "label": "E",
        "text": "5"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": ""
  },
  {
    "id": "2.1074",
    "topic": "Working with Methods - Overloading",
    "question": "Consider the following class definition:\npublic class TestClass{\npublic static void main(String[] args){ new TestClass().sayHello(); } //1\npublic static void sayHello(){ System.out.println(\"Static Hello World\"); } //2\npublic void sayHello() { System.out.println(\"Hello World \"); } //3\n}\nWhat will be the result of compiling and running the class?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It will print Hello World."
      },
      {
        "label": "B",
        "text": "It will print Static Hello World."
      },
      {
        "label": "C",
        "text": "Compilation error at line 2."
      },
      {
        "label": "D",
        "text": "Compilation error at line 3."
      },
      {
        "label": "E",
        "text": "Runtime Error."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "You cannot have two methods with the same signature (name and parameter types) in one class.\nAlso, even if you put one sayHello() method in other class which is a subclass of this class, it won't compile\nbecause you cannot override/hide a static method with a non static method and vice versa."
  },
  {
    "id": "2.1075",
    "topic": "Constructors",
    "question": "Given the following source code, which of the lines that are commented out may be reinserted without introducing\nerrors?\nabstract class Bang{\n//abstract void f(); //(0)\nfinal void g(){}\n//final void h(){} //(1)\nprotected static int i;\nprivate int j;\n}\nfinal class BigBang extends Bang{\n//BigBang(int n) { m = n; } //(2)\npublic static void main(String args[]){\nBang mc = new BigBang();\n}\nvoid h(){}\n//void k(){ i++; } //(3)\n//void l(){ j++; } //(4)\nint m;\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "final void h( ) { } //(1)"
      },
      {
        "label": "B",
        "text": "BigBang(int n) { m = n; } //(2)"
      },
      {
        "label": "C",
        "text": "void k( ) { i++; } //(3)"
      },
      {
        "label": "D",
        "text": "void l( ) { j++; } //(4)"
      },
      {
        "label": "E",
        "text": "abstract void f( ) ; //(0)"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Default constructor (having no arguments) is automatically created only if the class does not define any\nconstructors. So as soon as //2 is inserted the default constructor will not be created."
  },
  {
    "id": "2.1076",
    "topic": "Creating and Using Arrays",
    "question": "What would be the result of compiling and running the following program?\nclass SomeClass{\npublic static void main(String args[]){\nint size = 10;\nint[] arr = new int[size];\nfor (int i = 0 ; i < size ; ++i) System.out.println(arr[i]);\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "The code will fail to compile, because the int[] array declaration is incorrect."
      },
      {
        "label": "B",
        "text": "The program will compile, but will throw an IndexArrayOutOfBoundsException when run."
      },
      {
        "label": "C",
        "text": "The program will compile and run without error, and will print nothing."
      },
      {
        "label": "D",
        "text": "The program will compile and run without error and will print null ten times."
      },
      {
        "label": "E",
        "text": "The program will compile and run without error and will print 0 ten times.\nIt correctly will declare and initialize an array of length 10 containing int values initialized to have 0."
      }
    ],
    "correctAnswers": [
      "E"
    ],
    "explanation": "Elements of Arrays of primitive types are initialized to their default value ( i.e. 0 for integral types, 0.0 for\nfloat/double and false for boolean)\nElements of Arrays of non-primitive types are initialized to null."
  },
  {
    "id": "2.1077",
    "topic": "Working with Java Data Types",
    "question": "What will the following program print?\npublic class TestClass{\nstatic boolean b;\nstatic int[] ia = new int[1];\nstatic char ch;\nstatic boolean[] ba = new boolean[1];\npublic static void main(String args[]) throws Exception{\nboolean x = false;\nif( b ){\nx = ( ch == ia[ch]);\n}\nelse x = ( ba[ch] = b );\nSystem.out.println(x+\" \"+ba[ch]);\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "true true"
      },
      {
        "label": "B",
        "text": "true false"
      },
      {
        "label": "C",
        "text": "false true"
      },
      {
        "label": "D",
        "text": "false false"
      },
      {
        "label": "E",
        "text": "It will not compile."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "This question tests your knowledge on the default values of uninitialized primitives and object references.\nbooleans are initialized to false, numeric types to 0 and object references to null. Elements of arrays are\ninitialized to the default values of their types. So, elements of a boolean array are initialized to false. int, char,\nfloat to 0 and Objects to null.\nIn this case, b is false. So the else part of if(b) is executed.\nch is a numeric type so its value is 0. ba[0] = false assigns false to ba[0] and returns false which is assigned\nto x.\nFinally, x and ba[0] are printed as false false."
  },
  {
    "id": "2.1078",
    "topic": "Using Operators and Decision Constructs",
    "question": "The following code snippet will print true.\nString str1 = \"one\";\nString str2 = \"two\";\nSystem.out.println( str1.equals(str1=str2) );",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "True"
      },
      {
        "label": "B",
        "text": "False"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "First the value of 'str1' is evaluated (i.e. one). Now, before the method is called, the operands are evaluated, so str1\nbecomes \"two\". so \"one\".equals(\"two\") is false."
  },
  {
    "id": "2.1079",
    "topic": "Java Basics",
    "question": "Consider the following two classes defined in two .java files.\n//in file /root/com/foo/X.java\npackage com.foo;\npublic class X{\npublic static int LOGICID = 10;\npublic void apply(int i){\nSystem.out.println(\"applied\");\n}\n}\n//in file /root/com/bar/Y.java\npackage com.bar;\n//1 <== INSERT STATEMENT(s) HERE\npublic class Y{\npublic static void main(String[] args){\nSystem.out.println(X.LOGICID);\n}\n}\nWhat should be inserted at //1 so that Y.java can compile without any error?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "import static X;"
      },
      {
        "label": "B",
        "text": "import static com.foo.*;"
      },
      {
        "label": "C",
        "text": "import static com.foo.X.*;"
      },
      {
        "label": "D",
        "text": "import com.foo.*;"
      },
      {
        "label": "E",
        "text": "import com.foo.X.LOGICID;"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": ""
  },
  {
    "id": "2.1080",
    "topic": "Java Basics",
    "question": "Which of the following are valid declarations of the standard main method?",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "static void main(String args[ ]) { }"
      },
      {
        "label": "B",
        "text": "public static int main(String args[ ]) {}"
      },
      {
        "label": "C",
        "text": "public static void main (String args) { }"
      },
      {
        "label": "D",
        "text": "final static public void main (String[ ] arguments ) { }"
      },
      {
        "label": "E",
        "text": "public static void main (String[ ] args) { }"
      }
    ],
    "correctAnswers": [
      "D",
      "E"
    ],
    "explanation": "A valid declaration of \"the\" main() method must be public and static, should return void, and should take a single\narray of Strings as a parameter.\nThe order of the static and public keywords is irrelevant. But the return type should always come just before the\nmethod name.\nApplying final to the method does not change the method signature.\nIn some versions of JDK, even a private or protected main() method works from command line. However, for the\npurpose of Java Certification exam, it should be assumed that for the JVM to execute a class using the standard\nmain method, the accessibility of the main method must be public."
  },
  {
    "id": "2.1081",
    "topic": "Using Operators and Decision Constructs",
    "question": "Which of the following code snippets will print exactly 10?\n1. Object t = new Integer(106);\nint k = ((Integer) t).intValue()/10;\nSystem.out.println(k);\n2. System.out.println(100/9.9);\n3. System.out.println(100/10.0);\n4. System.out.println(100/10);\n5. System.out.println(3 + 100/10*2-13);",
    "selectCount": 3,
    "options": [
      {
        "label": "A",
        "text": "1"
      },
      {
        "label": "B",
        "text": "2"
      },
      {
        "label": "C",
        "text": "3"
      },
      {
        "label": "D",
        "text": "4"
      },
      {
        "label": "E",
        "text": "5"
      }
    ],
    "correctAnswers": [
      "A",
      "D",
      "E"
    ],
    "explanation": "1. int k = ((Integer) t).intValue()/10;\nSince both the operands of / are ints, it is a integer division. This means the resulting value is truncated (and not\nrounded). Therefore, the above statement will print 10 and not 11.\n5. 3 + 100/10*2-13 will be parsed as: 3 + (100/10)*2-13. This is because the precedence of / and * is same (and\nis higher than + and -) and since the expression is evaluated from left to right, the operands are grouped on first\ncome first served basis. [This is not the right terminology but you will be able to answer the questions if you\nremember this rule.]"
  },
  {
    "id": "2.1082",
    "topic": "Using Operators and Decision Constructs",
    "question": "What will be the output when the following class is compiled and run?\nclass ScopeTest{\nstatic int x = 5;\npublic static void main(String[] args){\nint x = ( x=3 ) * 4; // 1\nSystem.out.println(x);\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It will not compile because line //1 cannot be parsed correctly."
      },
      {
        "label": "B",
        "text": "It will not compile because x is used before initialization."
      },
      {
        "label": "C",
        "text": "It will not compile because there is an ambiguous reference to x."
      },
      {
        "label": "D",
        "text": "It will print 12."
      },
      {
        "label": "E",
        "text": "It will print 3 ."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "x is first initialized by x = 3, then the value of this expression (i.e. \"x = 3\"), which is 3, is multiplied by 4 and is\nagain assigned to x. So it prints 12."
  },
  {
    "id": "2.1083",
    "topic": "Using Loop Constructs",
    "question": "What will the following program print?\nclass LoopTest{\npublic static void main(String args[]) {\nint counter = 0;\nouter:\nfor (int i = 0; i < 3; i++) {\nmiddle:\nfor (int j = 0; j < 3; j++) {\ninner:\nfor (int k = 0; k < 3; k++) {\nif (k - j > 0) {\nbreak middle;\n}\ncounter++;\n}\n}\n}\nSystem.out.println(counter);\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "2"
      },
      {
        "label": "B",
        "text": "3"
      },
      {
        "label": "C",
        "text": "6"
      },
      {
        "label": "D",
        "text": "7"
      },
      {
        "label": "E",
        "text": "9"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "To understand how this loop works let us put some extra print statements in the innermost loop:\nSystem.out.println(\"i=\"+i+\" j=\"+j+\" k=\"+k);\nif(k-j>0){\nSystem.out.println(\"breaking middle \"+j);\nbreak middle;\n}\ncounter++;\nThis is what it prints:\ni=0 j=0 k=0\ni=0 j=0 k=1\nbreaking middle 0\ni=1 j=0 k=0\ni=1 j=0 k=1\nbreaking middle 0\ni=2 j=0 k=0\ni=2 j=0 k=1\nbreaking middle 0\n3\nThe key is that the middle loop is broken as soon as k-j becomes > 0. This happens on every second iteration of\ninner loop when k is 1 and j is 0. Now, when middle is broken inner cannot continue. So the next iteration of outer\nstarts."
  },
  {
    "id": "2.1084",
    "topic": "Using Operators and Decision Constructs",
    "question": "Which of the following are valid operators in Java?",
    "selectCount": 4,
    "options": [
      {
        "label": "A",
        "text": "!"
      },
      {
        "label": "B",
        "text": "~"
      },
      {
        "label": "C",
        "text": "&\nbitwise AND"
      },
      {
        "label": "D",
        "text": "%=\nsimilar to += or /="
      },
      {
        "label": "E",
        "text": "$"
      }
    ],
    "correctAnswers": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": ""
  },
  {
    "id": "2.1085",
    "topic": "Java Basics",
    "question": "Consider the following two classes defined in two java source files.\n//in file /root/com/foo/X.java\npackage com.foo;\npublic class X{\npublic static int LOGICID = 10;\npublic void apply(int i){\nSystem.out.println(\"applied\");\n}\n}\n//in file /root/com/bar/Y.java\npackage com.bar;\n//1 <== INSERT STATEMENT(s) HERE\npublic class Y{\npublic static void main(String[] args){\nX x = new X();\nx.apply(LOGICID);\n}\n}\nWhat should be inserted at //1 so that Y.java can compile without any error?",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "import static X;"
      },
      {
        "label": "B",
        "text": "import static com.foo.*;"
      },
      {
        "label": "C",
        "text": "import static com.foo.X.*;"
      },
      {
        "label": "D",
        "text": "import com.foo.*;"
      },
      {
        "label": "E",
        "text": "import com.foo.X.LOGICID;"
      }
    ],
    "correctAnswers": [
      "C",
      "D"
    ],
    "explanation": ""
  },
  {
    "id": "2.1086",
    "topic": "Working with Inheritance",
    "question": "What will be the result of compiling and running the following code?\nclass Base{\npublic Object getValue(){ return new Object(); } //1\n}\nclass Base2 extends Base{\npublic String getValue(){ return \"hello\"; } //2\n}\npublic class TestClass{\npublic static void main(String[] args){\nBase b = new Base2();\nSystem.out.println(b.getValue()); //3\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It will print the hash code of the object."
      },
      {
        "label": "B",
        "text": "It will print hello."
      },
      {
        "label": "C",
        "text": "Compile time error at //1."
      },
      {
        "label": "D",
        "text": "Compile time error at //2."
      },
      {
        "label": "E",
        "text": "Compile time error at //3."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Observe that at run time b points to an object of class Base2. Further, Base2 overrides getValue(). Therefore,\nBase2's getValue() will be invoked and it will return hello."
  },
  {
    "id": "2.1087",
    "topic": "Working with Inheritance - instanceof",
    "question": "Which of the given lines can be inserted at //1 of the following program ?\npublic class TestClass{\npublic static void main(String[] args){\nshort s = 9;\n//1\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "Short k = new Short(9); System.out.println(k instanceof Short);"
      },
      {
        "label": "B",
        "text": "System.out.println(s instanceof Short);"
      },
      {
        "label": "C",
        "text": "Short k = 9; System.out.println( k instanceof s);"
      },
      {
        "label": "D",
        "text": "int i = 9; System.out.println(s == i);"
      },
      {
        "label": "E",
        "text": "Boolean b = s instanceof Number;"
      },
      {
        "label": "F",
        "text": "Short k = 9; Integer i = 9; System.out.println(k == i);"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": ""
  },
  {
    "id": "2.1088",
    "topic": "Using Operators and Decision Constructs",
    "question": "Consider:\no1 and o2 denote two object references to two different objects of the same class.\nWhich of the following statements are true?",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "o1.equals(o2) will always be false."
      },
      {
        "label": "B",
        "text": "o1.hashCode() == o2.hashCode() will always be false.\nhashCode() can be overridden and so the given statements is not true."
      },
      {
        "label": "C",
        "text": "o1 == o2 will always be false."
      },
      {
        "label": "D",
        "text": "Nothing can be said about o1.equals(o2) regarding what it will return based on the given information."
      },
      {
        "label": "E",
        "text": "Nothing can be said about o1 == o2."
      }
    ],
    "correctAnswers": [
      "C",
      "D"
    ],
    "explanation": "Note that both equals() and hashCode() methods can be overridden by the programmer so you can't say anything\nabout what they will return without looking at the code."
  },
  {
    "id": "2.1090",
    "topic": "Using Loop Constructs",
    "question": "What is the effect of compiling and running the code shown in exhibit?\npublic class TestClass{\npublic static void main (String args []){\nint sum = 0;\nfor (int i = 0, j = 10; sum > 20; ++i, --j) // 1\n{\nsum = sum+ i + j;\n}\nSystem.out.println(\"Sum = \" + sum);\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "Compile time error at line 1."
      },
      {
        "label": "B",
        "text": "It will print Sum = 0"
      },
      {
        "label": "C",
        "text": "It will print Sum = 20"
      },
      {
        "label": "D",
        "text": "Runtime error."
      },
      {
        "label": "E",
        "text": "None of the above."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Read the questions carefully. This is very important. Some questions are easy but you need to read them carefully."
  },
  {
    "id": "2.1092",
    "topic": "Working with Methods",
    "question": "What will the following class print when compiled and run?\nclass Holder{\nint value = 1;\nHolder link;\npublic Holder(int val){ this.value = val; }\npublic static void main(String[] args){\nfinal Holder a = new Holder(5);\nHolder b = new Holder(10);\na.link = b;\nb.link = setIt(a, b);\nSystem.out.println(a.link.value+\" \"+b.link.value);\n}\npublic static Holder setIt(final Holder x, final Holder y){\nx.link = y.link;\nreturn x;\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It will not compile because 'a' is final."
      },
      {
        "label": "B",
        "text": "It will not compile because method setIt() cannot change x.link."
      },
      {
        "label": "C",
        "text": "It will print 5, 10."
      },
      {
        "label": "D",
        "text": "It will print 10, 10."
      },
      {
        "label": "E",
        "text": "It will throw an exception when run.\nWhen method setIt() executes, x.link = y.link, x.link becomes null because y.link is null so a.link.value\nthrows NullPointerException."
      }
    ],
    "correctAnswers": [
      "E"
    ],
    "explanation": ""
  },
  {
    "id": "2.1093",
    "topic": "Handling Exceptions",
    "question": "Which statements regarding the following code are correct ?\nclass Base{\nvoid method1() throws java.io.IOException, NullPointerException{\nsomeMethod(\"arguments\");\n// some I/O operations\n}\nint someMethod(String str){\nif(str == null) throw new NullPointerException();\nelse return str.length();\n}\n}\npublic class NewBase extends Base{\nvoid method1(){\nsomeMethod(\"args\");\n}\n}",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "method1 in class NewBase does not need to specify any exceptions."
      },
      {
        "label": "B",
        "text": "The code will not compile because RuntimeExceptions cannot be specified in the throws clause."
      },
      {
        "label": "C",
        "text": "method1 in class NewBase must at least specify IOException in its throws clause."
      },
      {
        "label": "D",
        "text": "method1 in class NewBase must at least specify NullPointerException in its throws clause."
      },
      {
        "label": "E",
        "text": "There is no problem with the code."
      }
    ],
    "correctAnswers": [
      "A",
      "E"
    ],
    "explanation": "Overriding method only needs to specify a subset of the list of exception classes the overridden method can throw.\nA set of no classes is a valid subset of that list.\nRemember that NullPointerException is a subclass of RuntimeException, while IOException is a subclass of\nException."
  },
  {
    "id": "2.1094",
    "topic": "Handling Exceptions",
    "question": "What will the following program print when run?\npublic class TestClass{\npublic static void main(String[] args){\ntry{\nSystem.exit(0);\n}\nfinally{\nSystem.out.println(\"finally is always executed!\");\n}\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It will print \"finally is always executed!\""
      },
      {
        "label": "B",
        "text": "It will not compile as there is no catch block."
      },
      {
        "label": "C",
        "text": "It will not print anything."
      },
      {
        "label": "D",
        "text": "An exception will be thrown"
      },
      {
        "label": "E",
        "text": "None of the above."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "finally is always executed (even if you throw an exception in try or catch) but this is the exception to the rule.\nWhen you call System.exit(...); The JVM exits so there is no way to execute the finally block."
  },
  {
    "id": "2.1095",
    "topic": "Working with Inheritance",
    "question": "What will be the result of compiling and running the following code?\nclass Base{\npublic short getValue(){ return 1; } //1\n}\nclass Base2 extends Base{\npublic byte getValue(){ return 2; } //2\n}\npublic class TestClass{\npublic static void main(String[] args){\nBase b = new Base2();\nSystem.out.println(b.getValue()); //3\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It will print 1"
      },
      {
        "label": "B",
        "text": "It will print 2."
      },
      {
        "label": "C",
        "text": "Compile time error at //1"
      },
      {
        "label": "D",
        "text": "Compile time error at //2"
      },
      {
        "label": "E",
        "text": "Compile time error at //3"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "In case of overriding, the return type of the overriding method must match exactly to the return type of the\noverridden method if the return type is a primitive.\n(In case of objects, the return type of the overriding method may be a subclass of the return type of the overridden\nmethod.)"
  },
  {
    "id": "2.1096",
    "topic": "Using Operators and Decision Constructs",
    "question": "For what command line arguments will the following program print true?\nclass TestClass{\npublic static void main(String[] args){\nInteger i = Integer.parseInt(args[0]);\nInteger j = i;\ni--;\ni++;\nSystem.out.println((i==j));\n}\n}",
    "selectCount": 3,
    "options": [
      {
        "label": "A",
        "text": "0"
      },
      {
        "label": "B",
        "text": "-1"
      },
      {
        "label": "C",
        "text": "127"
      },
      {
        "label": "D",
        "text": "-256"
      },
      {
        "label": "E",
        "text": "256"
      },
      {
        "label": "F",
        "text": "For all the values between 0 and 255 (both included)."
      }
    ],
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "explanation": "All the wrapper objects are immutable. When you do i++, what actually happens is something like this:\ni = Integer.valueOf( i.intValue() + 1); As you can see, a different Integer object is assigned back to i.\nHowever, to save on memory, Java 'reuses' all the wrapper objects whose values fall in the following ranges:\nAll Boolean values (true and false)\nAll Byte values\nAll Character values from \\u0000 to \\u007f (i.e. 0 to 127 in decimal)\nAll Short and Integer values from -128 to 127\nSo == will always return true when their primitive values are the same and belong to the above list of values.\nOnce catch, however, is that when you create a primitive wrapper using the new keyword, a new object is created\nand a cached object, even if available, is not used. For example:\nInteger i = 10; //Wrapper created without using the new keyword and is, therefore, cached.\nInteger j = 10; //Cached object is reused. No new object created.\nInteger k = new Integer(10); //New object is created. Cached object is not reused.\nThis implies that i == j is true but i == k is false.\nNote that the following will not compile though:\nByte b = 1; Integer i = 1;\nb == i; //Invalid because both operands are of different class."
  },
  {
    "id": "2.1097",
    "topic": "Handling Exceptions",
    "question": "What will be the output of the following program?\nclass TestClass{\npublic static void main(String[] args) throws Exception{\ntry{\namethod();\nSystem.out.println(\"try \");\n}\ncatch(Exception e){\nSystem.out.print(\"catch \");\n}\nfinally {\nSystem.out.print(\"finally \");\n}\nSystem.out.print(\"out \");\n}\npublic static void amethod(){ }\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "try finally"
      },
      {
        "label": "B",
        "text": "try finally out"
      },
      {
        "label": "C",
        "text": "try out"
      },
      {
        "label": "D",
        "text": "catch finally out"
      },
      {
        "label": "E",
        "text": "It will not compile because amethod() does not throw any exception."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Since the method amethod() does not throw any exception, try is printed and the control goes to finally which\nprints finally. After that out is printed."
  },
  {
    "id": "2.1098",
    "topic": "Constructors",
    "question": "What will be the result of attempting to compile the following program?\npublic class TestClass{\nlong l1;\npublic void TestClass(long pLong) { l1 = pLong ; } //(1)\npublic static void main(String args[]){\nTestClass a, b ;\na = new TestClass(); //(2)\nb = new TestClass(5); //(3)\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "A compilation error will be encountered at (1), since constructors should not specify a return value."
      },
      {
        "label": "B",
        "text": "A compilation error will be encountered at (2), since the class does not have a default constructor."
      },
      {
        "label": "C",
        "text": "A compilation error will be encountered at (3)."
      },
      {
        "label": "D",
        "text": "The program will compile correctly."
      },
      {
        "label": "E",
        "text": "It will not compile because parameter type of the constructor is different than the type of value passed to it.\nIf (1) was a valid constructor 'int' would be promoted to long at the time of passing."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "The declaration at (1) declares a method, not a constructor because it has a return value. The method happens to\nhave the same name as the class, but that is ok.\nThe class has an implicit default constructor since the class contains no constructor declarations. This allows the\ninstantiation at (2) to work."
  },
  {
    "id": "2.1099",
    "topic": "Using Loop Constructs",
    "question": "What will be the result of attempting to compile and run the following program?\npublic class TestClass{\npublic static void main(String args[]){\nint x = 0;\nlabelA: for (int i=10; i<0; i--){\nint j = 0;\nlabelB:\nwhile (j < 10){\nif (j > i) break labelB;\nif (i == j){\nx++;\ncontinue labelA;\n}\nj++;\n}\nx--;\n}\nSystem.out.println(x);\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It will not compile."
      },
      {
        "label": "B",
        "text": "It will go in infinite loop when run."
      },
      {
        "label": "C",
        "text": "The program will write 10 to the standard output."
      },
      {
        "label": "D",
        "text": "The program will write 0 to the standard output."
      },
      {
        "label": "E",
        "text": "None of the above."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "This is just a simple code that is meant to confuse you.\nNotice the for statement: for(int i=10; i<0; i--). i is being initialized to 10 and the test is i<0, which is false.\nTherefore, the control will never get inside the for loop, none of the weird code will be executed, and x will remain\n0, which is what is printed."
  },
  {
    "id": "2.1100",
    "topic": "Working with Methods - Overloading",
    "question": "Consider the following class:\nclass TestClass{\nvoid probe(int... x) { System.out.println(\"In ...\"); } //1\nvoid probe(Integer x) { System.out.println(\"In Integer\"); } //2\nvoid probe(long x) { System.out.println(\"In long\"); } //3\nvoid probe(Long x) { System.out.println(\"In LONG\"); } //4\npublic static void main(String[] args){\nInteger a = 4; new TestClass().probe(a); //5\nint b = 4; new TestClass().probe(b); //6\n}\n}\nWhat will it print when compiled and run?",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "In Integer and In long"
      },
      {
        "label": "B",
        "text": "In ... and In LONG, if //2 and //3 are commented out."
      },
      {
        "label": "C",
        "text": "In Integer and In ..., if //4 is commented out."
      },
      {
        "label": "D",
        "text": "It will not compile, if //1, //2, and //3 are commented out."
      },
      {
        "label": "E",
        "text": "In LONG and In long, if //1 and //2 are commented out."
      }
    ],
    "correctAnswers": [
      "A",
      "D"
    ],
    "explanation": "To answer this type of questions, you need to know the following rules:\n1. The compiler always tries to choose the most specific method available with least number of modifications to\nthe arguments.\n2. Java designers have decided that old code should work exactly as it used to work before boxing-unboxing\nfunctionality became available.\n3. Widening is preferred to boxing/unboxing (because of rule 2), which in turn, is preferred over var-args.\nThus,\n1.\nprobe(Integer) will be bound to probe(Integer) (exact match). If that is not available, it will be bound to\nprobe(long), and then with probe(int...) in that order of preference.\nprobe(long) is preferred over probe(int...) because unboxing an Integer gives an int and in pre 1.5 code\nprobe(long) is compatible with an int (Rule 2).\nIt is never bound to probe(Long ) because Integer and Long are different object types and there is no IS-A\nrelation between them. (This holds true for any two wrapper classes).\nIt could, however, be bound to probe(Object ) (if it existed), because Integer IS-A Object.\n2.\nprobe(int) is bound to probe(long) (because of Rule 2) , then to probe(Integer ) because boxing an int qives\nyou an Integer, which matches exactly to probe(Integer), and then to probe(int...).\n\nIt is never bound to probe(Long ) because int is not compatible with Long.\nWe advise you to run this program and try out various combinations. The exam has questions on this pattern but\nthey are not this tough. If you have a basic understanding, you should be ok."
  },
  {
    "id": "2.1101",
    "topic": "Working with Inheritance",
    "question": "Consider the following code:\nclass Base{\nprivate float f = 1.0f;\nvoid setF(float f1){ this.f = f1; }\n}\nclass Base2 extends Base{\nprivate float f = 2.0f;\n//1\n}\nWhich of the following options is/are valid example(s) of overriding?",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "protected void setF(float f1){ this.f = 2*f1; }"
      },
      {
        "label": "B",
        "text": "public void setF(double f1){ this.f = (float) 2*f1; }"
      },
      {
        "label": "C",
        "text": "public void setF(float f1){ this.f = 2*f1; }\npublic is less restrictive than default, so it is valid."
      },
      {
        "label": "D",
        "text": "private void setF(float f1){ this.f = 2*f1; }\nprivate is more restrictive than default, so it is NOT valid."
      },
      {
        "label": "E",
        "text": "float setF(float f1){ this.f = 2*f1; return f;}\nreturn types must match."
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "explanation": "An overriding method can be made less restrictive than the overridden method. The restrictiveness of access\nmodifiers is as follows:\nprivate>default>protected>public (where private is most restrictive and public is least restrictive).\nNote that there is no modifier named default. The absence of any access modifiers implies default access."
  },
  {
    "id": "2.1102",
    "topic": "Constructors",
    "question": "Under what situations does a class get a default constructor?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "All classes in Java get a default constructor."
      },
      {
        "label": "B",
        "text": "You have to define at least one constructor to get the default constructor.\nA default (no args one) will be given if the class doesn't define any."
      },
      {
        "label": "C",
        "text": "If the class does not define any constructors explicitly."
      },
      {
        "label": "D",
        "text": "All classes get default constructor from Object class.\nConstructors are NEVER inherited."
      },
      {
        "label": "E",
        "text": "None of the above."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": ""
  },
  {
    "id": "2.1103",
    "topic": "Using Operators and Decision Constructs",
    "question": "What will be printed by the following code if it is run with command line: java TestClass -0.50 ?\npublic class TestClass{\npublic static double getSwitch(String str){\nreturn Double.parseDouble(str.substring(1, str.length()-1) );\n}\npublic static void main(String args []){\nswitch(getSwitch(args[0])){\ncase 0.0 : System.out.println(\"Hello\");\ncase 1.0 : System.out.println(\"World\"); break;\ndefault : System.out.println(\"Good Bye\");\n}\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "Hello"
      },
      {
        "label": "B",
        "text": "World"
      },
      {
        "label": "C",
        "text": "Hello World"
      },
      {
        "label": "D",
        "text": "Hello World Good Bye"
      },
      {
        "label": "E",
        "text": "None of the above."
      }
    ],
    "correctAnswers": [
      "E"
    ],
    "explanation": "Observe that the method getSwitch() has been declared to return a double. Its return value is being used in the\nswitch statement. Therefore, the program will not even compile because double/float/long/boolean cannot be used\nin a switch statement."
  },
  {
    "id": "2.1104",
    "topic": "Working with Java Data Types",
    "question": "Consider the following lines of code:\nInteger i = new Integer(42);\nLong ln = new Long(42);\nDouble d = new Double(42.0);\nWhich of the following options are valid?",
    "selectCount": 3,
    "options": [
      {
        "label": "A",
        "text": "i == ln;"
      },
      {
        "label": "B",
        "text": "ln == d;"
      },
      {
        "label": "C",
        "text": "i.equals(d);"
      },
      {
        "label": "D",
        "text": "d.equals(ln);"
      },
      {
        "label": "E",
        "text": "ln.equals(42);"
      }
    ],
    "correctAnswers": [
      "C",
      "D",
      "E"
    ],
    "explanation": "The concept to understand here is as follows -\nIf the compiler can figure out that something can NEVER happen, then it flags an error. In this question, the\ncompiler knows that ln, i or d can never point to the same object in any case because they are references to\ndifferent classes of objects that have no relation ( superclass/subclass ) between themselves."
  },
  {
    "id": "2.1105",
    "topic": "Using Operators and Decision Constructs",
    "question": "Consider the following method...\npublic void ifTest(boolean flag){\nif (flag) //1\nif (flag) //2\nSystem.out.println(\"True False\");\nelse // 3\nSystem.out.println(\"True True\");\nelse // 4\nSystem.out.println(\"False False\");\n}\nWhich of the following statements are correct ?",
    "selectCount": 3,
    "options": [
      {
        "label": "A",
        "text": "If run with an argument of 'false', it will print 'False False'"
      },
      {
        "label": "B",
        "text": "If run with an argument of 'false', it will print 'True True'"
      },
      {
        "label": "C",
        "text": "If run with an argument of 'true', it will print 'True False'"
      },
      {
        "label": "D",
        "text": "It will never print 'True True'"
      },
      {
        "label": "E",
        "text": "It will not compile."
      }
    ],
    "correctAnswers": [
      "A",
      "C",
      "D"
    ],
    "explanation": "Note that if and else do not cascade. They are like opening and closing braces.\nif (flag) //1\nif (flag) //2\nSystem.out.println(\"True False\");\nelse // 3 This closes //2\nSystem.out.println(\"True True\");\nelse // 4 This closes //1\nSystem.out.println(\"False False\");\nSo, else at //3 is associated with if at //2 and else at //4 is associated with if at //1"
  },
  {
    "id": "2.1106",
    "topic": "Creating and Using Arrays",
    "question": "Is it possible to create arrays of length zero?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "Yes, you can create arrays of any type with length zero."
      },
      {
        "label": "B",
        "text": "Yes, but only for primitive datatypes."
      },
      {
        "label": "C",
        "text": "Yes, but only for arrays of object references."
      },
      {
        "label": "D",
        "text": "Yes, and it is same as a null Array."
      },
      {
        "label": "E",
        "text": "No, arrays of length zero do not exist in Java."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Example: When a Java program is run without any program arguments, the String[] args argument to main()\ngets an array of length Zero."
  },
  {
    "id": "2.1107",
    "topic": "Java Basics - OO Concepts",
    "question": "Which of the following are correct about \"encapsulation\"?",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "Encapsulation is same as polymorphism."
      },
      {
        "label": "B",
        "text": "It helps make sure that clients have no accidental dependence on the choice of representation"
      },
      {
        "label": "C",
        "text": "It helps avoiding name clashes as internal variables are not visible outside."
      },
      {
        "label": "D",
        "text": "Encapsulation makes sure that messages are sent to the right object at run time."
      },
      {
        "label": "E",
        "text": "Encapsulation helps you inherit the properties of another class."
      }
    ],
    "correctAnswers": [
      "B",
      "C"
    ],
    "explanation": "Encapsulation is the technique used to package the information in such a way as to hide what should be hidden,\nand make visible what is intended to be visible. In simple terms, encapsulation generally means making the data\nvariables private and providing public accessors."
  },
  {
    "id": "2.1108",
    "topic": "Using Operators and Decision Constructs",
    "question": "What will the following program print?\nclass Test{\npublic static void main(String args[]){\nint k = 9, s = 5;\nswitch(k){\ndefault :\nif( k == 10) { s = s*2; }\nelse{\ns = s+4;\nbreak;\n}\ncase 7 : s = s+3;\n}\nSystem.out.println(s);\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "5"
      },
      {
        "label": "B",
        "text": "9"
      },
      {
        "label": "C",
        "text": "12"
      },
      {
        "label": "D",
        "text": "It will not compile."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": ""
  },
  {
    "id": "2.1109",
    "topic": "Working with Java API - String, StringBuilder",
    "question": "Which of the following statements are true?",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "method length() of String class is a final method."
      },
      {
        "label": "B",
        "text": "You can make mutable subclasses of the String class.\nBoth - String and StringBuilder are final classes. So is StringBuffer."
      },
      {
        "label": "C",
        "text": "StringBuilder extends String.\nStringBuilder extends Object"
      },
      {
        "label": "D",
        "text": "StringBuilder is a final class."
      },
      {
        "label": "E",
        "text": "String class is not final."
      }
    ],
    "correctAnswers": [
      "A",
      "D"
    ],
    "explanation": ""
  },
  {
    "id": "2.1110",
    "topic": "Java Basics",
    "question": "Which of these statements are true?",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "A static method can call other non-static methods in the same class by using the 'this' keyword."
      },
      {
        "label": "B",
        "text": "A class may contain both static and non-static variables and both static and non-static methods."
      },
      {
        "label": "C",
        "text": "Each object of a class has its own copy of each non-static member variable."
      },
      {
        "label": "D",
        "text": "Instance methods may access local variables of static methods."
      },
      {
        "label": "E",
        "text": "All methods in a class are implicitly passed a 'this' parameter when called.\nAll non-static/instance methods in a class are implicitly passed a 'this' parameter when called."
      }
    ],
    "correctAnswers": [
      "B",
      "C"
    ],
    "explanation": "'this' is assigned a reference to the current object automatically by the JVM. Thus, within an instance method foo,\ncalling this.foo(); is same as calling foo();\nSince there is no current object available for a static method, 'this' reference is not available in static methods and\ntherefore it can only be used within instance methods. For the same reason, static methods cannot access non static\nfields or methods of that class directly i.e. without a reference to an instance of that class.\nNote : you can't reassign 'this' like this:\nthis = new Object();"
  },
  {
    "id": "2.1111",
    "topic": "Using Operators and Decision Constructs",
    "question": "What is the result of executing the following fragment of code:\nboolean b1 = false;\nboolean b2 = false;\nif (b2 = b1 == false){\nSystem.out.println(\"true\");\n} else{\nSystem.out.println(\"false\");\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "Compile time error."
      },
      {
        "label": "B",
        "text": "It will print true"
      },
      {
        "label": "C",
        "text": "It will print false"
      },
      {
        "label": "D",
        "text": "Runtime error."
      },
      {
        "label": "E",
        "text": "It will print nothing."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "All that if() needs is a boolean, now b1 == false returns true, which is a boolean and since b2 = true is an\nexpression and every expression has a return value (which is the Left Hand Side of the expression), it returns true,\nwhich is again a boolean.\nFYI: the return value of expression i = 10; is 10 (an int)."
  },
  {
    "id": "2.1112",
    "topic": "Handling Exceptions",
    "question": "What will be the result of compiling and running the following program ?\nclass NewException extends Exception {}\nclass AnotherException extends Exception {}\npublic class ExceptionTest{\npublic static void main(String[] args) throws Exception{\ntry{\nm2();\n}\nfinally{\nm3();\n}\ncatch (NewException e){}\n}\npublic static void m2() throws NewException { throw new NewException(); }\npublic static void m3() throws AnotherException{ throw new AnotherException(); }\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It will compile but will throw AnotherException when run."
      },
      {
        "label": "B",
        "text": "It will compile but will throw NewException when run."
      },
      {
        "label": "C",
        "text": "It will compile and run without throwing any exceptions."
      },
      {
        "label": "D",
        "text": "It will not compile."
      },
      {
        "label": "E",
        "text": "None of the above."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Syntax of try/catch/finally is:\ntry{\n}\ncatch(Exception1 e) {... }\ncatch(Exception2 e) {... }\n...\ncatch(ExceptionN e) {... }\nfinally { ... }\nWith a try, either a catch and or finally or both can occur.\nA try MUST be followed by at least one catch or finally. (Unless it is a try with resources statement, which is not\nin scope for this exam.)\nIn Java 7, you can collapse the catch blocks into a single one:\ntry {\n...\n}\ncatch (SQLException | IOException | RuntimeException e) {\n//In this block, the class of the actual exception object will be whatever exception is thrown\nat runtime.\n//But the class of the reference e will be the closest common super class of all the\nexceptions in the catch block.\n\n//In this case, it will be java.lang.Exception because that is the most specific class that is\na super class for all the three exceptions.\ne.printStackTrace();\n}"
  },
  {
    "id": "2.1113",
    "topic": "Working with Inheritance",
    "question": "Which of the following is a legal return type of a method overriding the given method:\npublic Object myMethod() {...}\n(Select the best option.)",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "Object"
      },
      {
        "label": "B",
        "text": "String"
      },
      {
        "label": "C",
        "text": "Return type can be any class since all objects can be cast to Object."
      },
      {
        "label": "D",
        "text": "void"
      },
      {
        "label": "E",
        "text": "None of the above."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Version 1.5 onwards, Java allows covariant return types, which means that an overriding method can have its\nreturn type as any subclass of the return type of the overridden method.\nHere, since the return type of the original method is Object, the overriding method can return any object type\nbecause all classes in Java ultimately extend from Object.\nNote that covariant return types is not applicable to primitives. So for example, if the overridden method returns\nint, the overriding method's return type must also be int. It cannot be short or long. It cannot even be Integer."
  },
  {
    "id": "2.1114",
    "topic": "Using Loop Constructs",
    "question": "What will the following code print?\npublic class TestClass{\nint x = 5;\nint getX(){ return x; }\npublic static void main(String args[]) throws Exception{\nTestClass tc = new TestClass();\ntc.looper();\nSystem.out.println(tc.x);\n}\npublic void looper(){\nint x = 0;\nwhile( (x = getX()) != 0 ){\nfor(int m = 10; m>=0; m--){\nx = m;\n}\n}\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It will not compile."
      },
      {
        "label": "B",
        "text": "It will throw an exception at runtime."
      },
      {
        "label": "C",
        "text": "It will print 0."
      },
      {
        "label": "D",
        "text": "It will print 5."
      },
      {
        "label": "E",
        "text": "None of these."
      }
    ],
    "correctAnswers": [
      "E"
    ],
    "explanation": "Note that looper() declares an automatic variable x, which shadows the instance variable x. So when x = m; is\nexecuted, it is the local variable x that is changed not the instance field x. So getX() never returns 0. If you remove\nint x = 0; from looper(), it will print 0 and end."
  },
  {
    "id": "2.1115",
    "topic": "Creating and Using Arrays",
    "question": "Consider the following program...\nclass ArrayTest{\npublic static void main(String[] args){\nint ia[][] = { {1, 2}, null };\nfor (int i = 0; i < 2; i++)\nfor (int j = 0; j < 2; j++)\nSystem.out.println(ia[i][j]);\n}\n}\nWhich of the following statements are true?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It will not compile."
      },
      {
        "label": "B",
        "text": "It will throw an ArrayIndexOutOfBoundsException at Runtime."
      },
      {
        "label": "C",
        "text": "It will throw a NullPointerException at Runtime."
      },
      {
        "label": "D",
        "text": "It will compile and run without throwing any exceptions."
      },
      {
        "label": "E",
        "text": "None of the above."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "It will throw a NullPointerException for ia[1][0] because ia[1] is null.\nNote that null is not same as having less number of elements in an array than expected.\nIf you try to access ia[2][0], it would have thrown ArrayIndexOutOfBoundsException because the length of ia\nis only 2 and so ia[2] tries to access an element out of that range. ia[2] is not null, it simply does not exist."
  },
  {
    "id": "2.1116",
    "topic": "Constructors",
    "question": "Which of the following are true about the \"default\" constructor?",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "It is provided by the compiler only if the class does not define any constructor."
      },
      {
        "label": "B",
        "text": "It initializes the instance members of the class."
      },
      {
        "label": "C",
        "text": "It calls the no-args constructor of the super class."
      },
      {
        "label": "D",
        "text": "It initializes instance as well as class fields of the class."
      },
      {
        "label": "E",
        "text": "It is provided by the compiler if the class does not define a 'no-args' constructor."
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "explanation": "The default constructor is provided by the compiler only when a class does not define ANY constructor explicitly.\nFor example,\npublic class A{\npublic A() //This constructor is automatically inserted by the compiler because there is no ot\n{\nsuper(); //Note that it calls the super class' default no-args constructor.\n}\n}\npublic class A{\n//Compiler will not generate any constructor because the programmer has defined a constructor.\npublic A(int i){\n//do something\n}\n}"
  },
  {
    "id": "2.1117",
    "topic": "Working with Inheritance",
    "question": "Given the following classes, what will be the output of compiling and running the class Truck?\nclass Automobile{\npublic void drive() { System.out.println(\"Automobile: drive\"); }\n}\npublic class Truck extends Automobile{\npublic void drive() { System.out.println(\"Truck: drive\"); }\npublic static void main (String args [ ]){\nAutomobile a = new Automobile();\nTruck t = new Truck();\na.drive(); //1\nt.drive(); //2\na = t; //3\na.drive(); //4\n}\n}\n//End of Code",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "Compiler error at line 3."
      },
      {
        "label": "B",
        "text": "Runtime error at line 3."
      },
      {
        "label": "C",
        "text": "It will print:\nAutomobile: drive\nTruck: drive\nAutomobile: drive\nin that order."
      },
      {
        "label": "D",
        "text": "It will print:\nAutomobile: drive\nTruck: drive\nTruck: drive\nin that order."
      },
      {
        "label": "E",
        "text": "It will print:\nAutomobile: drive\nAutomobile: drive\nAutomobile: drive\nin that order."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Since Truck is a subclass of Automobile, a = t will be valid at compile time as well at runtime. But a cast is\nneeded to make t = (Truck) a; work. This will be ok at compile time but if at run time 'a' does not refer to an\nobject of class Truck, a ClassCastException will be thrown. Now, method to be executed is decided at run time\nand it depends on the actual class of object referred to by the variable. Here, at line 4, variable a refers to an object\nof class Truck. So Truck's drive() will be called which prints Truck: drive. This is polymorphism in action!"
  },
  {
    "id": "2.1118",
    "topic": "Working with Java Data Types",
    "question": "Which of the changes given in options can be done (independent of each other) to let the following code compile\nand run without errors when its generateReport method is called?\nclass SomeClass{\nString s1 = \"green mile\"; // 0\npublic void generateReport( int n ){\nString local; // 1\nif( n > 0 ) local = \"good\"; //2\nSystem.out.println( s1+\" = \" + local ); //3\n}\n}",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "Insert after line 2 : else local = \"bad\";"
      },
      {
        "label": "B",
        "text": "Insert after line 2 : if(n <= 0) local = \"bad\";"
      },
      {
        "label": "C",
        "text": "Move line 1 and place it after line 0."
      },
      {
        "label": "D",
        "text": "change line 1 to : final String local = \"rocky\";"
      },
      {
        "label": "E",
        "text": "The program already is without any errors."
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "explanation": "The problem is that local is declared inside a method is therefore local to that method. It is called a local variable\n(also known as automatic variable) and it cannot be used before initialized. Further, it will not be initialized unless\nyou initialize it explicitly because local variables are not initialized by the JVM on its own. The compiler spots the\nusage of such uninitialized variables and ends with an error message.\n1. Making it a member variable (choice \"Move line 1 and place it after line 0.\") will initialize it to null.\n2. Putting an else part (choice \"Insert after line 2 : else local = \"bad\";\") will ensure that it is initialized to either\n'good' or 'bad'. So this also works.\nChoice \"Insert after line 2 : if(n <= 0) local = \"bad\";\" doesn't work because the second 'if' will actually be\nanother statement and is not considered as a part of first 'if'. So, compiler doesn't realize that 'local' will be\ninitialized even though it does get initialized."
  },
  {
    "id": "2.1119",
    "topic": "Using Operators and Decision Constructs",
    "question": "Given:\npublic class Switcher{\npublic static void main(String[] args){\nswitch(Integer.parseInt(args[1])) //1\n{\ncase 0 :\nboolean b = false;\nbreak;\ncase 1 :\nb = true; //2\nbreak;\n}\nif(b) System.out.println(args[2]);\n}\n}\nWhat will the above program print if compiled and run using the following command line:\njava Switcher 1 2 3",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It will print 1"
      },
      {
        "label": "B",
        "text": "It will print 2"
      },
      {
        "label": "C",
        "text": "It will print 3"
      },
      {
        "label": "D",
        "text": "It will not print anything."
      },
      {
        "label": "E",
        "text": "It will not compile because of //1."
      },
      {
        "label": "F",
        "text": "It will not compile because of //2."
      }
    ],
    "correctAnswers": [],
    "explanation": ""
  },
  {
    "id": "2.1120",
    "topic": "Using Loop Constructs",
    "question": "What will the following program snippet print?\nint i=0, j=11;\ndo{\nif(i > j) { break; }\nj--;\n}while( ++i < 5);\nSystem.out.println(i+\" \"+j);",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "5 5"
      },
      {
        "label": "B",
        "text": "5 6"
      },
      {
        "label": "C",
        "text": "6 6"
      },
      {
        "label": "D",
        "text": "6 5"
      },
      {
        "label": "E",
        "text": "4 5"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "++i < 5 means, increment the value of i and then compare with 5.\nNow, Try to work out the values of i and j at every iteration.\nTo start with, i=0 and j=11. At the time of evaluation of the while condition, i and j are as follows:\n1. j = 10 and i=1 (loop will continue because i<5) (Remember that comparison will happen AFTER increment i\nbecause it is ++i and not i++.\n2. j = 9 and i=2 (loop will continue because i<5).\n3. j = 8 and i=3 (loop will continue because i<5).\n4. j = 7 and i=4 (loop will continue because i<5).\n5. j = 6 and i=5 (loop will NOT continue because i not <5).\nSo it will print 5 6. (It is print i first and then j)."
  },
  {
    "id": "2.1121",
    "topic": "Using Loop Constructs",
    "question": "What will the following code print?\nvoid crazyLoop(){\nint c = 0;\nJACK: while (c < 8){\nJILL: System.out.println(c);\nif (c > 3) break JACK; else c++;\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It will not compile."
      },
      {
        "label": "B",
        "text": "It will throw an exception at runtime."
      },
      {
        "label": "C",
        "text": "It will print numbers from 0 to 8"
      },
      {
        "label": "D",
        "text": "It will print numbers from 0 to 3"
      },
      {
        "label": "E",
        "text": "It will print numbers from 0 to 4"
      }
    ],
    "correctAnswers": [
      "E"
    ],
    "explanation": "This is a straight forward loop that contains a labelled break statement. A labelled break breaks out of the loop that\nis marked with the given label. Therefore, a labelled break is used to break out from deeply nested loops to the\nouter loops. Here, there is only one nested loop so the break; and break JACK; are same, but consider the\nfollowing code:\npublic static void crazyLoop(){\nint c = 0;\nJACK: while (c < 8){\nJILL: System.out.println(\"c = \"+c);\nfor(int k = 0; k<c; k++){\nSystem.out.println(\" k = \"+k+\" c = \"+c);\nif (c > 3) break JACK;\n}\nc++;\n}\n}\nThis code prints:\nc = 0\nc = 1\nk = 0 c = 1\nc = 2\nk = 0 c = 2\nk = 1 c = 2\nc = 3\nk = 0 c = 3\nk = 1 c = 3\nk = 2 c = 3\nc = 4\nk = 0 c = 4\nAs you can see, in this case, break JACK; will break out from the outer most loop (the while loop). If break JACK;\nis replaced by break; it will print:\nc = 0\nc = 1\nk = 0 c = 1\nc = 2\nk = 0 c = 2\n\nk = 1 c = 2\nc = 3\nk = 0 c = 3\nk = 1 c = 3\nk = 2 c = 3\nc = 4\nk = 0 c = 4\nc = 5\nk = 0 c = 5\nc = 6\nk = 0 c = 6\nc = 7\nk = 0 c = 7\nThis shows that a break without a label only breaks out of the current loop."
  },
  {
    "id": "2.1123",
    "topic": "Working with Inheritance",
    "question": "Consider the contents of following two files:\n//In file A.java\npackage a;\npublic class A{\nA(){ }\npublic void print(){ System.out.println(\"A\"); }\n}\n//In file B.java\npackage b;\nimport a.*;\npublic class B extends A{\nB(){ }\npublic void print(){ System.out.println(\"B\"); }\npublic static void main(String[] args){\nnew B();\n}\n}\nWhat will be printed when you try to compile and run class B?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It will print A."
      },
      {
        "label": "B",
        "text": "It will print B."
      },
      {
        "label": "C",
        "text": "It will not compile."
      },
      {
        "label": "D",
        "text": "It will compile but will not run."
      },
      {
        "label": "E",
        "text": "None of the above."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Note that there is no modifier for A's constructor. So it has default access. This means only classes in package a\ncan use it. Also note that class B is in a different package and is extending from A. In B's constructor the compiler\nwill automatically add super() as the first line. But since A() is not accessible in B, this code will not compile."
  },
  {
    "id": "2.1124",
    "topic": "Creating and Using Arrays",
    "question": "Given the following declaration, select the correct way to get the number of elements in the array, assuming that\nthe array has been initialized.\nint[] intArr;",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "intArr[ ].length( )"
      },
      {
        "label": "B",
        "text": "intArr.length( )"
      },
      {
        "label": "C",
        "text": "intArr.length"
      },
      {
        "label": "D",
        "text": "intArr[ ].size( )"
      },
      {
        "label": "E",
        "text": "intArr.size( )"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "FYI, All types of arrays are objects. i.e. intArr instanceof Object is true."
  },
  {
    "id": "2.1126",
    "topic": "Working with Java Data Types",
    "question": "Given:\nString mStr = \"123\";\nlong m = // 1\nWhich of the following options when put at //1 will assign 123 to m?",
    "selectCount": 3,
    "options": [
      {
        "label": "A",
        "text": "new Long(mStr);"
      },
      {
        "label": "B",
        "text": "Long.parseLong(mStr);"
      },
      {
        "label": "C",
        "text": "Long.longValue(mStr);"
      },
      {
        "label": "D",
        "text": "(new Long()).parseLong(mStr);"
      },
      {
        "label": "E",
        "text": "Long.valueOf(mStr).longValue();"
      }
    ],
    "correctAnswers": [
      "A",
      "B",
      "E"
    ],
    "explanation": ""
  },
  {
    "id": "2.1127",
    "topic": "Working with Inheritance",
    "question": "Consider the following class and interface definitions (in separate files):\npublic class Sample implements IInt{\npublic static void main(String[] args){\nSample s = new Sample(); //1\nint j = s.thevalue; //2\nint k = IInt.thevalue; //3\nint l = thevalue; //4\n}\n}\npublic interface IInt{\nint thevalue = 0;\n}\nWhat will happen when the above code is compiled and run?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It will give an error at compile time at line //1."
      },
      {
        "label": "B",
        "text": "It will give an error at compile time at line //2."
      },
      {
        "label": "C",
        "text": "It will give an error at compile time at line //3"
      },
      {
        "label": "D",
        "text": "It will give an error at compile time at line //4."
      },
      {
        "label": "E",
        "text": "It will compile and run without any problem."
      }
    ],
    "correctAnswers": [
      "E"
    ],
    "explanation": "As a rule, fields defined in an interface are public, static, and final. The methods are public.\nHere, the interface IInt defines thevalue and thus any class that implements this interface gets this field.\nTherefore, it can be accessed using s.thevalue or just thevalue inside the class. Also, since it is static, it can also\nbe accessed using IInt.thevalue or Sample.thevalue."
  },
  {
    "id": "2.1128",
    "topic": "Using Operators and Decision Constructs",
    "question": "What will the following code print?\nint i = 0;\nint j = 1;\nif( (i++ == 0) & (j++ == 2) ){\ni = 12;\n}\nSystem.out.println(i+\" \"+j);",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "1 2"
      },
      {
        "label": "B",
        "text": "2 3"
      },
      {
        "label": "C",
        "text": "12 2"
      },
      {
        "label": "D",
        "text": "12 1"
      },
      {
        "label": "E",
        "text": "It will not compile."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "This question is based on 2 concepts:\n1. i = ++j; is not same as i = j++;\nIn the case of i = ++j, j is first incremented and then compared with i. While in the case of i = j++;, j is first\ncompared with i and then incremented.\n2. The | and & operators, when applied to boolean operands, ensure that both the sides are evaluated. This is\nopposed to || and && operators, which do not evaluate the Right Hand Side operand if the result can be known by\njust evaluating the Left Hand Side.\nNow, let us see the values of i and j at each step:\nint i = 0;\nint j = 1;\nif( (i++ == 0) & (j++ == 2) ) //compare i with 0 and increment i => returns true and i\nbecomes 1. Evaluate next condition:\n//compare j with 2 and increment j => return false and j becomes 2.\n//true & false returns false so i= 12 is not executed.{\ni = 12;\n}\nSystem.out.println(i+\" \"+j)); //print 1 and 2"
  },
  {
    "id": "2.1129",
    "topic": "Working with Inheritance",
    "question": "Consider the following class:\npublic class PortConnector{\npublic PortConnector(int port) throws IOException{\n...lot of valid code.\n}\n...other valid code.\n}\nYou want to write another class CleanConnector that extends from PortConnector. Which of the following\nstatements should hold true for CleanConnector class?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It is not possible to define CleanConnector that does not throw IOException at instantiation."
      },
      {
        "label": "B",
        "text": "PortConnector class itself is not valid because you cannot throw any exception from a constructor."
      },
      {
        "label": "C",
        "text": "CleanConnector's constructor cannot throw any exception other than IOException.\nIt can throw any exception but it must also throw IOException (or its super class). So the following is valid:\nclass CleanConnector extends PortConnector {\npublic CleanConnector(int port) throws IOException, FileNotFoundException,\nSomeOtherCheckedException {\nsuper(port);\n}\n}"
      },
      {
        "label": "D",
        "text": "CleanConnector's constructor cannot throw any exception other than subclass of IOException.\nAs described above, it can throw any exception but it must throw IOException (or its superclass) as well."
      },
      {
        "label": "E",
        "text": "CleanConnector's constructor cannot throw any exception other than superclass of IOException.\nAs described above, it can throw any exception but it must throw IOException (or its superclass) as well."
      },
      {
        "label": "F",
        "text": "None of these."
      }
    ],
    "correctAnswers": [
      "F"
    ],
    "explanation": "As PortConnector has only one constructor, there is only one way to instantiate it. Now, to instantiate any\nsubclass of PortConnector, the subclass's constructor should call super(int). But that throws IOException. And\nso this exception (or its super class) must be defined in the throws clause of subclass's constructor. Note that you\ncannot do something like:\npublic CleanConnector(){\ntry{ super(); }catch(Exception e){} //WRONG : call to super must be first statement in\nconstructor\n}\nRemember: Constructor must declare all the checked exceptions declared in the base constructor (or the super\nclasses of the checked exceptions). They may add other exceptions as well. This behavior is exactly opposite from\nthat of methods. The overriding method cannot throw any checked exception other than what the overridden\nmethod throws. It may throw subclasses of those exceptions as well."
  },
  {
    "id": "2.1130",
    "topic": "Working with Inheritance",
    "question": "You want to invoke the overridden method (the method in the base class) from the overriding method (the method\nin the derived class) named m().\nWhich of the following constructs which will let you do that?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "super.m();"
      },
      {
        "label": "B",
        "text": "super.this();"
      },
      {
        "label": "C",
        "text": "base.m();"
      },
      {
        "label": "D",
        "text": "parent.m();"
      },
      {
        "label": "E",
        "text": "super();"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Note that calling super(); means you are trying to call the super class's constructor. But you can't call the super\nclass's constructor (or its own constructor) from a method (because by the time a method gets to run, the object has\nalready been constructed), therefore calling super(); from a method is not valid.\nsuper(); can only be the first statement of a constructor."
  },
  {
    "id": "2.1131",
    "topic": "Working with Methods",
    "question": "What would be the result of attempting to compile and run the following program?\nclass TestClass{\nstatic TestClass ref;\nString[] arguments;\npublic static void main(String args[]){\nref = new TestClass();\nref.func(args);\n}\npublic void func(String[] args){\nref.arguments = args;\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "The program will fail to compile, since the static method main is trying to call the non-static method func."
      },
      {
        "label": "B",
        "text": "The program will fail to compile, since the non-static method func cannot access the static member variable\nref.\nNon static methods can access static as well as non static methods of a class."
      },
      {
        "label": "C",
        "text": "The program will fail to compile, since the argument args passed to the static method main cannot be passed on to the non-static method func."
      },
      {
        "label": "D",
        "text": "The program will fail to compile, since method func is trying to assign to the non-static member variable\n'arguments' through the static member variable ref."
      },
      {
        "label": "E",
        "text": "The program will compile and run successfully."
      }
    ],
    "correctAnswers": [
      "E"
    ],
    "explanation": ""
  },
  {
    "id": "2.1133",
    "topic": "Handling Exceptions",
    "question": "Objects of which of the following classes can be thrown using a throw statement?",
    "selectCount": 3,
    "options": [
      {
        "label": "A",
        "text": "Event"
      },
      {
        "label": "B",
        "text": "Object"
      },
      {
        "label": "C",
        "text": "Throwable"
      },
      {
        "label": "D",
        "text": "Exception"
      },
      {
        "label": "E",
        "text": "RuntimeException"
      }
    ],
    "correctAnswers": [
      "C",
      "D",
      "E"
    ],
    "explanation": "You can only throw a Throwable using a throws clause. Exception and Error are two main subclasses of\nThrowable."
  },
  {
    "id": "2.1134",
    "topic": "Working with Java Data Types",
    "question": "Which of the following are valid at line 1?\npublic class X{\n//line 1: insert code here.\n}",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "String s;"
      },
      {
        "label": "B",
        "text": "String s = 'asdf';"
      },
      {
        "label": "C",
        "text": "String s = 'a';"
      },
      {
        "label": "D",
        "text": "String s = this.toString();"
      },
      {
        "label": "E",
        "text": "String s = asdf;"
      }
    ],
    "correctAnswers": [
      "A",
      "D"
    ],
    "explanation": ""
  },
  {
    "id": "2.1135",
    "topic": "Working with Inheritance",
    "question": "Which of the following statements is/are true?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "Subclasses must define all the abstract methods that the superclass defines."
      },
      {
        "label": "B",
        "text": "A class implementing an interface must define all the methods of that interface.\nNot if the class is defined abstract. Further, Java 8 allows an interface to have default and static methods,\nwhich need not be implemented by a non-abstract class that says it implements that interface."
      },
      {
        "label": "C",
        "text": "A class cannot override the super class's constructor."
      },
      {
        "label": "D",
        "text": "It is possible for two classes to be the superclass of each other."
      },
      {
        "label": "E",
        "text": "An interface can implement multiple interfaces."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": ""
  },
  {
    "id": "2.1136",
    "topic": "Working with Inheritance - instanceof",
    "question": "Which of the given statements are correct about the following code?\n//Filename: TestClass.java\nclass TestClass{\npublic static void main(String[] args){\nA a = new A();\nB b = new B();\n};\n}\nclass A implements T1, T2{}\nclass B extends A implements T1{}\ninterface T1 { }\ninterface T2 { }",
    "selectCount": 4,
    "options": [
      {
        "label": "A",
        "text": "(a instanceof T1) will return true."
      },
      {
        "label": "B",
        "text": "(a instanceof T2) will return true."
      },
      {
        "label": "C",
        "text": "(b instanceof T1) will return true."
      },
      {
        "label": "D",
        "text": "(b instanceof T2) will return true."
      },
      {
        "label": "E",
        "text": "(b instanceof A) will return false."
      }
    ],
    "correctAnswers": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "Since A implements both T1 and T2, 1 and 2 are correct.\nb instanceof A will return true as B is a subclass of A. Note that it is 'A' and not 'a'.\n( b instanceof a ) will not compile."
  },
  {
    "id": "2.1137",
    "topic": "Creating and Using Arrays",
    "question": "What will the following code snippet print?\nint index = 1;\nString[] strArr = new String[5];\nString myStr = strArr[index];\nSystem.out.println(myStr);",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "nothing"
      },
      {
        "label": "B",
        "text": "null"
      },
      {
        "label": "C",
        "text": "It will throw ArrayIndexOutOfBounds at runtime."
      },
      {
        "label": "D",
        "text": "It will print some junk value."
      },
      {
        "label": "E",
        "text": "None of the above."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "When you create an array of Objects ( here, Strings) all the elements are initialized to null. So in the line 3, null is\nassigned to myStr.\nNote that. empty string is \"\" ( String str = \"\"; ) and is not same as null."
  },
  {
    "id": "2.1138",
    "topic": "Working with Inheritance",
    "question": "What will the following program print when run?\nclass Super{\npublic String toString(){\nreturn \"4\";\n}\n}\npublic class SubClass extends Super{\npublic String toString(){\nreturn super.toString()+\"3\";\n}\npublic static void main(String[] args){\nSystem.out.println( new SubClass() );\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "43"
      },
      {
        "label": "B",
        "text": "7"
      },
      {
        "label": "C",
        "text": "It will not compile."
      },
      {
        "label": "D",
        "text": "It will throw an exception at runtime."
      },
      {
        "label": "E",
        "text": "None of the above."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "This is quite simple, toString() is called on the Object of class SubClass. Subclass's toString() calls super\nclass's toString() which returns String 4 (not an integer 4!). It then appends \"3\" to it.\nSo the final value is \"43\"."
  },
  {
    "id": "2.1140",
    "topic": "Working with Inheritance",
    "question": "Which of the following are valid declarations in a class?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "abstract int absMethod(int param) throws Exception;"
      },
      {
        "label": "B",
        "text": "abstract native int absMethod(int param) throws Exception;"
      },
      {
        "label": "C",
        "text": "float native getVariance() throws Exception;"
      },
      {
        "label": "D",
        "text": "abstract private int absMethod(int param) throws Exception;\nprivate method cannot be abstract. A private method is not inherited so how can a subclass implement"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": ""
  },
  {
    "id": "2.1142",
    "topic": "Java Basics",
    "question": "Which of the given options should be inserted at line 1 so that the following code can compile without any errors?\npackage objective1;\n// 1\npublic class StaticImports{\npublic StaticImports(){\nout.println(MAX_VALUE);\n}\n}",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "import static java.lang.Integer.*;"
      },
      {
        "label": "B",
        "text": "static import java.lang.System.out;"
      },
      {
        "label": "C",
        "text": "static import Integer.MAX_VALUE;"
      },
      {
        "label": "D",
        "text": "import static java.lang.System.*;"
      },
      {
        "label": "E",
        "text": "static import java.lang.System.*;"
      }
    ],
    "correctAnswers": [
      "A",
      "D"
    ],
    "explanation": "The order of keywords for a static import must be \"import static ... \".\nYou can either import all the static members using import static java.lang.Integer.* or one specific member\nusing import static java.lang.Integer.MAX_VALUE;\nYou must specify the full package name of the class that you are importing (just like the regular import statement).\nSo, import static Integer.*; is wrong."
  },
  {
    "id": "2.1143",
    "topic": "Working with Inheritance",
    "question": "Which of the given statements are correct for a method that overrides the following method:\npublic Set getSet(int a) {...}",
    "selectCount": 3,
    "options": [
      {
        "label": "A",
        "text": "Its return type must be declared as Set."
      },
      {
        "label": "B",
        "text": "It may return HashSet.\n(Assume that HashSet implements Set)"
      },
      {
        "label": "C",
        "text": "It can declare any Exception in throws clause"
      },
      {
        "label": "D",
        "text": "It can declare any RuntimeException in throws clause.\nA method can throw any RuntimeException (such as a NullPointerException) even without declaring it in its\nthrows clause."
      },
      {
        "label": "E",
        "text": "It can be abstract."
      }
    ],
    "correctAnswers": [
      "B",
      "D",
      "E"
    ],
    "explanation": "To override a method in the subclass, the overriding method (i.e. the one in the subclass) MUST HAVE:\n.same name\n.same return type in case of primitives (a subclass is allowed for classes, this is also known as covariant return\ntypes).\n.same type and order of parameters\n.it may throw only those exceptions that are declared in the throws clause of the superclass's method or exceptions\nthat are subclasses of the declared exceptions. It may also choose NOT to throw any exception.\nThe names of the parameter types do not matter. For example, void methodX(int i) is same as void methodX(int\nk)"
  },
  {
    "id": "2.1144",
    "topic": "Working with Inheritance",
    "question": "Consider the following interface definition:\npublic interface ConstTest{\npublic int A = 1; //1\nint B = 1; //2\nstatic int C = 1; //3\nfinal int D = 1; //4\npublic static int E = 1; //5\npublic final int F = 1; //6\nstatic final int G = 1; //7\npublic static final int H = 1; //8\n}\nWhich line(s) will cause a compilation error?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "1"
      },
      {
        "label": "B",
        "text": "2"
      },
      {
        "label": "C",
        "text": "3"
      },
      {
        "label": "D",
        "text": "4"
      },
      {
        "label": "E",
        "text": "5"
      },
      {
        "label": "F",
        "text": "6"
      }
    ],
    "correctAnswers": [],
    "explanation": ""
  },
  {
    "id": "2.1145",
    "topic": "Working with Inheritance",
    "question": "Assume the following declarations:\nclass A{ }\nclass B extends A{ }\nclass C extends B{ }\nclass X{\nB getB(){ return new B(); }\n}\nclass Y extends X{\n//method declaration here\n}\nWhich of the following methods can be inserted in class Y?",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "public C getB(){ return new B(); }"
      },
      {
        "label": "B",
        "text": "protected B getB(){ return new C(); }"
      },
      {
        "label": "C",
        "text": "C getB(){ return new C(); }"
      },
      {
        "label": "D",
        "text": "A getB(){ return new A(); }"
      }
    ],
    "correctAnswers": [
      "B",
      "C"
    ],
    "explanation": ""
  },
  {
    "id": "2.1146",
    "topic": "Working with Java Data Types",
    "question": "What will the following program print?\npublic class TestClass{\npublic static void main(String[] args){\nunsigned byte b = 0;\nb--;\nSystem.out.println(b);\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "0"
      },
      {
        "label": "B",
        "text": "-1"
      },
      {
        "label": "C",
        "text": "255"
      },
      {
        "label": "D",
        "text": "-128"
      },
      {
        "label": "E",
        "text": "It will not compile."
      }
    ],
    "correctAnswers": [
      "E"
    ],
    "explanation": "There no unsigned keyword in java! A char can be used as an unsigned integer."
  },
  {
    "id": "2.1147",
    "topic": "Working with Inheritance",
    "question": "Given the following code, which statements are true?\nclass A{\nint i;\n}\nclass B extends A{\nint j;\n}",
    "selectCount": 3,
    "options": [
      {
        "label": "A",
        "text": "Class B extends class A."
      },
      {
        "label": "B",
        "text": "Class B is the superclass of class A."
      },
      {
        "label": "C",
        "text": "Class A inherits from class B.\nB inherits from A"
      },
      {
        "label": "D",
        "text": "Class B is a subclass of class A."
      },
      {
        "label": "E",
        "text": "Objects of class B will always have a member variable named i ."
      }
    ],
    "correctAnswers": [
      "A",
      "D",
      "E"
    ],
    "explanation": "Here are a few good words from the Java Language Specification:\nMembers of a class that are declared private are not inherited by subclasses of that class. Only members of a class\nthat are declared protected or public are inherited by subclasses declared in a package other than the one in which\nthe class is declared.\nConstructors and static initializers are not members and therefore are not inherited."
  },
  {
    "id": "2.1148",
    "topic": "Handling Exceptions",
    "question": "What will the following code print?\npublic class Test{\npublic int luckyNumber(int seed){\nif(seed > 10) return seed%10;\nint x = 0;\ntry{\nif(seed%2 == 0) throw new Exception(\"No Even no.\");\nelse return x;\n}\ncatch(Exception e){\nreturn 3;\n}\nfinally{\nreturn 7;\n}\n}\npublic static void main(String args[]){\nint amount = 100, seed = 6;\nswitch( new Test().luckyNumber(6) ){\ncase 3: amount = amount * 2;\ncase 7: amount = amount * 2;\ncase 6: amount = amount + amount;\ndefault :\n}\nSystem.out.println(amount);\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It will not compile."
      },
      {
        "label": "B",
        "text": "It will throw an exception at runtime."
      },
      {
        "label": "C",
        "text": "800"
      },
      {
        "label": "D",
        "text": "200"
      },
      {
        "label": "E",
        "text": "400"
      }
    ],
    "correctAnswers": [
      "E"
    ],
    "explanation": "When you pass 6 to luckyNumber(), if(seed%2 == 0) throw new Exception(\"No Even no.\"); is executed and\nthe exception is caught by the catch block where it tries to return 3; But as there is a finally associated with the\ntry/catch block, it is executed before anything is returned. Now, as finally has return 7;, this value supersedes 3.\nIn fact, this method will always return 7 if seed <= 10.\nNow, in the switch there is no break statement. So both -\ncase 7: amount = amount * 2;\nand\ncase 6: amount = amount + amount;\nare executed. so the final amount becomes 400."
  },
  {
    "id": "2.1149",
    "topic": "Working with Inheritance",
    "question": "Given the following class definitions :\ninterface MyIface{};\nclass A {};\nclass B extends A implements MyIface{};\nclass C implements MyIface{};\nand the following object instantiations:\nA a = new A();\nB b = new B();\nC c = new C();\nWhich of the following assignments are legal at compile time?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "b = c;"
      },
      {
        "label": "B",
        "text": "c = b;"
      },
      {
        "label": "C",
        "text": "MyIface i = c;"
      },
      {
        "label": "D",
        "text": "c = (C) b;"
      },
      {
        "label": "E",
        "text": "b = a;"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "The statements c = b and b = c are illegal, since neither of the classes C and B is a subclass of the other. Even\nthough a cast is provided, the statement c = (C) b is illegal because the object referred to by b cannot ever be of\ntype C."
  },
  {
    "id": "2.1150",
    "topic": "Working with Inheritance",
    "question": "Which of the following are valid declarations inside an interface independent of each other?",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "void compute();"
      },
      {
        "label": "B",
        "text": "public void compute();"
      },
      {
        "label": "C",
        "text": "public final void compute();"
      },
      {
        "label": "D",
        "text": "static void compute();"
      },
      {
        "label": "E",
        "text": "protected void compute();"
      }
    ],
    "correctAnswers": [
      "A",
      "B"
    ],
    "explanation": ""
  },
  {
    "id": "2.1151",
    "topic": "Working with Java Data Types",
    "question": "Given that TestClass is a class, how many objects and reference variables are created by the following code?\nTestClass t1, t2, t3, t4;\nt1 = t2 = new TestClass();\nt3 = new TestClass();",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "2 objects, 3 references."
      },
      {
        "label": "B",
        "text": "2 objects, 4 references."
      },
      {
        "label": "C",
        "text": "3 objects, 2 references."
      },
      {
        "label": "D",
        "text": "2 objects, 2 references."
      },
      {
        "label": "E",
        "text": "None of the above."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "A declared reference variable exists regardless of whether a reference value (i.e. an object) has been assigned to it\nor not."
  },
  {
    "id": "2.1152",
    "topic": "Working with Java API - String, StringBuilder",
    "question": "Which of these expressions will return true?",
    "selectCount": 4,
    "options": [
      {
        "label": "A",
        "text": "\"hello world\".equals(\"hello world\")"
      },
      {
        "label": "B",
        "text": "\"HELLO world\".equalsIgnoreCase(\"hello world\")"
      },
      {
        "label": "C",
        "text": "\"hello\".concat(\" world\").trim().equals(\"hello world\")"
      },
      {
        "label": "D",
        "text": "\"hello world\".compareTo(\"Hello world\") < 0"
      },
      {
        "label": "E",
        "text": "\"Hello world\".toLowerCase( ).equals(\"hello world\")"
      }
    ],
    "correctAnswers": [
      "A",
      "B",
      "C",
      "E"
    ],
    "explanation": "compareTo() does a lexicographical (like a dictionary) comparison. It stops at the first place where the strings have\ndifferent letters.\nIf left hand side is bigger, it returns a positive number otherwise it returns a negative number. The value is equal to\nthe difference of their unicode values.\nIf there is no difference then it returns zero. In this case, it will return ( 'h' - 'H') which is 32."
  },
  {
    "id": "2.1153",
    "topic": "Working with Java Data Types",
    "question": "What will the following program print?\npublic class TestClass{\nstatic String str;\npublic static void main(String[] args){\nSystem.out.println(str);\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It will not compile."
      },
      {
        "label": "B",
        "text": "It will compile but throw an exception at runtime."
      },
      {
        "label": "C",
        "text": "It will print 'null' (without quotes)."
      },
      {
        "label": "D",
        "text": "It will print nothing."
      },
      {
        "label": "E",
        "text": "None of the above."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "All member fields (static and non-static) are initialized to their default values. Objects are initialized to null (String\nis also an object), numeric types to 0 (or 0.0 ) and boolean to false."
  },
  {
    "id": "2.1154",
    "topic": "Working with Inheritance",
    "question": "Consider the following code:\nclass A{\npublic XXX m1(int a){\nreturn a*10/4-30;\n}\n}\nclass A2 extends A{\npublic YYY m1(int a){\nreturn a*10/4.0;\n}\n}\nWhat can be substituted for XXX and YYY so that it can compile without any problems?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "int, int"
      },
      {
        "label": "B",
        "text": "int, double"
      },
      {
        "label": "C",
        "text": "double, double"
      },
      {
        "label": "D",
        "text": "double, int"
      },
      {
        "label": "E",
        "text": "Nothing, they are simply not compatible."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Note that when a method returns objects (as opposed to primitives, like in this question), the principle of covariant\nreturns applies. Meaning, the overriding method is allowed to return a subclass of the return type defined in the\noverridden method. Thus, if a base class's method is: public A m(); then a subclass is free to override it with:\npublic A1 m(); if A1 extends A."
  },
  {
    "id": "2.1155",
    "topic": "Working with Java API - String, StringBuilder",
    "question": "Which line will print the string \"MUM\"?\npublic class TestClass{\npublic static void main(String args []){\nString s = \"MINIMUM\";\nSystem.out.println(s.substring(4, 7)); //1\nSystem.out.println(s.substring(5)); //2\nSystem.out.println(s.substring(s.indexOf('I', 3))); //3\nSystem.out.println(s.substring(s.indexOf('I', 4))); //4\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "1"
      },
      {
        "label": "B",
        "text": "2"
      },
      {
        "label": "C",
        "text": "3"
      },
      {
        "label": "D",
        "text": "4"
      },
      {
        "label": "E",
        "text": "None of these."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "You should know how substring and indexOf methods of String class work.\nString substring(int beginIndex)\nReturns a new string that is a substring of this string.\nString substring(int beginIndex, int endIndex)\nReturns a new string that is a substring of this string.\nint indexOf(int ch)\nReturns the index within this string of the first occurrence of the specified character.\nint indexOf(int ch, int fromIndex)\nReturns the index within this string of the first occurrence of the specified character, starting the search at\nthe specified index.\nint indexOf(String str)\nReturns the index within this string of the first occurrence of the specified substring.\nint indexOf(String str, int fromIndex)\nReturns the index within this string of the first occurrence of the specified substring, starting at the specified\nindex."
  },
  {
    "id": "2.1156",
    "topic": "Using Operators and Decision Constructs",
    "question": "What will the following class print when executed?\nclass Test{\nstatic boolean a;\nstatic boolean b;\nstatic boolean c;\npublic static void main (String[] args){\nboolean bool = (a = true) || (b = true) && (c = true);\nSystem.out.print(a + \", \" + b + \", \" + c);\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "true, false, true"
      },
      {
        "label": "B",
        "text": "true, true, false"
      },
      {
        "label": "C",
        "text": "true, false, false"
      },
      {
        "label": "D",
        "text": "true, true, true"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Java parses the expression from left to right. Once it realizes that the left operand of a conditional \"or\" operator has\nevaluated to true, it does not even try to evaluate the right side expression."
  },
  {
    "id": "2.1157",
    "topic": "Using Operators and Decision Constructs",
    "question": "What will be the result of attempting to compile and run the following code?\nclass SwitchTest{\npublic static void main(String args[]){\nfor ( int i = 0 ; i < 3 ; i++){\nboolean flag = false;\nswitch (i){\nflag = true;\n}\nif ( flag ) System.out.println( i );\n}\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It will print 0, 1 and 2."
      },
      {
        "label": "B",
        "text": "It will not print anything."
      },
      {
        "label": "C",
        "text": "Compilation error."
      },
      {
        "label": "D",
        "text": "Runtime error."
      },
      {
        "label": "E",
        "text": "None of the above."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "You cannot have unlabeled block of code inside a switch block. Any code block must succeed a case label (or\ndefault label). Since there is no case statement in this switch block, there is no way the line flag = true; can be\nreached! Therefore, it will not compile."
  },
  {
    "id": "2.1158",
    "topic": "Working with Methods",
    "question": "What will the following program print?\npublic class InitTest{\npublic InitTest(){\ns1 = sM1(\"1\");\n}\nstatic String s1 = sM1(\"a\");\nString s3 = sM1(\"2\");{\ns1 = sM1(\"3\");\n}\nstatic{\ns1 = sM1(\"b\");\n}\nstatic String s2 = sM1(\"c\");\nString s4 = sM1(\"4\");\npublic static void main(String args[]){\nInitTest it = new InitTest();\n}\nprivate static String sM1(String s){\nSystem.out.println(s); return s;\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "The program will not compile."
      },
      {
        "label": "B",
        "text": "It will print : a b c 2 3 4 1"
      },
      {
        "label": "C",
        "text": "It will print : 2 3 4 1 a b c"
      },
      {
        "label": "D",
        "text": "It will print : 1 a 2 3 b c 4"
      },
      {
        "label": "E",
        "text": "It will print : 1 a b c 2 3 4"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "First, static statements/blocks are called IN THE ORDER they are defined.\nNext, instance initializer statements/blocks are called IN THE ORDER they are defined.\nFinally, the constructor is called. So, it prints a b c 2 3 4 1."
  },
  {
    "id": "2.1159",
    "topic": "Working with Java Data Types",
    "question": "What happens when you try to compile and run the following class...\npublic class TestClass{\npublic static void main(String[] args) throws Exception{\nint a = Integer.MIN_VALUE;\nint b = -a;\nSystem.out.println( a+ \" \"+b);\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It throws an OverFlowException."
      },
      {
        "label": "B",
        "text": "It will print two same negative numbers."
      },
      {
        "label": "C",
        "text": "It will print two different negative numbers."
      },
      {
        "label": "D",
        "text": "It will print one negative and one positive number of same magnitude."
      },
      {
        "label": "E",
        "text": "It will print one negative and one positive number of different magnitude."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "It prints: -2147483648 -2147483648\nThis happens because negative integers are stored in 2's complement form (complement the bits and add 1). For\nexample:\nInteger 1 in binary is 00000000 00000000 00000000 00000001 (32 bits)\nSo -1 in binary would be (complement the bits for 1 and add 1) :\nStep 1 (complement the bits of 1): 11111111 11111111 11111111 11111110\nStep 2 (add 1 to step 1): 11111111 11111111 11111111 11111111.\nNow, let's see what happens in this question:\na = Integer.MIN_VALUE = 10000000 00000000 00000000 00000000\nTo get -a, apply the above two steps:\nStep 1 (complement the bits): 011111111 11111111 11111111 11111111\nStep 2 (add 1) : 10000000 00000000 00000000 00000000\nSo you got the exact same value that you started with!\n(Note that you can see the binary form of an integer using Integer.toBinaryString(i) method.)"
  },
  {
    "id": "2.1160",
    "topic": "Java Basics - OO Concepts",
    "question": "Given that OurClass is a MyClass and OurClass has a YourClass object.\nWhich of the following options are correct?\n(Assume that OurClass, MyClass, and YourClass are valid java classes.)",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "MyClass contains a reference to OurClass"
      },
      {
        "label": "B",
        "text": "OurClass contains a reference to MyClass"
      },
      {
        "label": "C",
        "text": "MyClass contains a reference to YourClass"
      },
      {
        "label": "D",
        "text": "OurClass contains a reference to YourClass"
      },
      {
        "label": "E",
        "text": "OurClass inherits from MyClass"
      }
    ],
    "correctAnswers": [
      "D",
      "E"
    ],
    "explanation": "Visualize the hierarchy like this:\nOurClass is a MyClass => OurClass extends (or inherits from) MyClass. Thus, option 5 is correct.\nOurClass has a YourClass => OurClass refers to (or contains a reference to ) YourClass object. Thus, option 4 is\ncorrect."
  },
  {
    "id": "2.1161",
    "topic": "Working with Inheritance",
    "question": "What will be printed when the following program is compiled and run?\nclass Super{\npublic int getNumber( int a){\nreturn 2;\n}\n}\npublic class SubClass extends Super{\npublic int getNumber( int a, char ch){\nreturn 4;\n}\npublic static void main(String[] args){\nSystem.out.println( new SubClass().getNumber(4) );\n}\n}\nWhat will be printed?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "4"
      },
      {
        "label": "B",
        "text": "2"
      },
      {
        "label": "C",
        "text": "It will not compile."
      },
      {
        "label": "D",
        "text": "It will throw an exception at runtime."
      },
      {
        "label": "E",
        "text": "None of the above."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Note that the parameters of SubClass's getNumber are different than Super's getNumber. So it is not overriding it.\nSo the super class's getNumber() will be called which returns 2."
  },
  {
    "id": "2.1164",
    "topic": "Using Operators and Decision Constructs",
    "question": "Which of the following statements will compile without any error?",
    "selectCount": 4,
    "options": [
      {
        "label": "A",
        "text": "System.out.println(\"a\"+'b'+63);"
      },
      {
        "label": "B",
        "text": "System.out.println(\"a\"+63);"
      },
      {
        "label": "C",
        "text": "System.out.println('b'+new Integer(63));"
      },
      {
        "label": "D",
        "text": "String s = 'b'+63+\"a\";"
      },
      {
        "label": "E",
        "text": "String s = 63 + new Integer(10);"
      }
    ],
    "correctAnswers": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "+ is overloaded such that if any one of its two operands is a String then it will convert the other operand to a String\nand create a new string by concatenating the two.\nTherefore, in 63+\"a\" and \"a\"+63, 63 is converted to \"63\" and 'b' +\"a\" and \"a\"+'b', 'b' is converted to \"b\".\nNote that in 'b'+ 63 , 'b' is promoted to an int i.e. 98 giving 161."
  },
  {
    "id": "2.1167",
    "topic": "Handling Exceptions",
    "question": "Given that SomeException is a checked exception, consider the following code:\n//in file A.java\npublic class A{\nprotected void m() throws SomeException{}\n}\n//in file B.java\npublic class B extends A{\npublic void m(){ }\n}\n//in file TestClass.java\npublic class TestClass{\npublic static void main(String[] args){\n//insert code here. //1\n}\n}\nWhich of the following options can be inserted at //1 without resulting in any compilation or runtime errors?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "B b = new A();\nb.m();"
      },
      {
        "label": "B",
        "text": "A a = new B();\na.m();"
      },
      {
        "label": "C",
        "text": "A a = new B();\n( ( B) a ).m();"
      },
      {
        "label": "D",
        "text": "Object o = new B();\no.m();"
      },
      {
        "label": "E",
        "text": "None of these."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": ""
  },
  {
    "id": "2.1168",
    "topic": "Working with Inheritance - instanceof",
    "question": "Consider the following class hierarchy:\nA\n|\nB1, B2\n|\nC1, C2\n(B1 and B2 are subclasses of A and C1, C2 are subclasses of B1) Which of the following statements are correct?\nAssume that objectOfA, objectOfC1, etc. are objects of classes A and C1 respectively.",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "objectOfC2 instanceof B2 will return true."
      },
      {
        "label": "B",
        "text": "objectOfC1 instanceof B1 will return true."
      },
      {
        "label": "C",
        "text": "objectOfA instanceof B1 will return true."
      },
      {
        "label": "D",
        "text": "C1 c1 = objectOfA; is a valid statement."
      },
      {
        "label": "E",
        "text": "B1 b1 = objectOfB2; is a valid statement."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": ""
  },
  {
    "id": "2.1169",
    "topic": "Constructors",
    "question": "Which of the following can be used as a constructor for the class given below?\npublic class TestClass{\n// lots of irrelevant code\n}\n(... in the options means irrelevant code that is not shown here.)",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "public void TestClass() {...}"
      },
      {
        "label": "B",
        "text": "public TestClass() {...}"
      },
      {
        "label": "C",
        "text": "public static TestClass() {...}"
      },
      {
        "label": "D",
        "text": "public final TestClass() {...}"
      },
      {
        "label": "E",
        "text": "public TestClass(int x) { ...}"
      }
    ],
    "correctAnswers": [
      "B",
      "E"
    ],
    "explanation": "You can use only one of public protected and private.\nUnlike methods, a constructor cannot be abstract, static, final, native, or synchronized. A constructor is not\ninherited, so there is no need to declare it final and an abstract constructor could never be implemented. A\nconstructor is always invoked with respect to an object, so it makes no sense for a constructor to be static. There is\nno practical need for a constructor to be synchronized, because it would lock the object under construction, which\nis normally not made available to other threads until all constructors for the object have completed their work. The\nlack of native constructors is an arbitrary language design choice that makes it easy for an implementation of the\nJava Virtual Machine to verify that superclass constructors are always properly invoked during object creation."
  },
  {
    "id": "2.1170",
    "topic": "Java Basics",
    "question": "Consider the classes shown below:\nclass A{\npublic A() { }\npublic A(int i) { System.out.println(i ); }\n}\nclass B{\nstatic A s1 = new A(1);\nA a = new A(2);\npublic static void main(String[] args){\nB b = new B();\nA a = new A(3);\n}\nstatic A s2 = new A(4);\n}\nWhich is the correct sequence of the digits that will be printed when B is run?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "1 ,2 ,3 4."
      },
      {
        "label": "B",
        "text": "1 ,4, 2 ,3"
      },
      {
        "label": "C",
        "text": "3, 1, 2, 4"
      },
      {
        "label": "D",
        "text": "2, 1, 4, 3"
      },
      {
        "label": "E",
        "text": "2, 3, 1, 4"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "The order of initialization of a class is:\n1. All static constants, variables and blocks.(Among themselves the order is the order in which they appear in the\ncode.)\n2. All non static constants, variables and blocks.(Among themselves the order is the order in which they appear in\nthe code.)\n3. Constructor."
  },
  {
    "id": "2.1171",
    "topic": "Working with Inheritance",
    "question": "Consider the following variable declaration within the definition of an interface:\nint i = 10;\nWhich of the following declarations defined in a non-abstract class, is equivalent to the above?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "public static int i = 10;"
      },
      {
        "label": "B",
        "text": "public final int i = 10;"
      },
      {
        "label": "C",
        "text": "public static final int i = 10;"
      },
      {
        "label": "D",
        "text": "public int i = 10;"
      },
      {
        "label": "E",
        "text": "final int i = 10;"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Fields in an interface are implicitly public, static and final. Although you can put these words in the interface\ndefinition but it is not a good practice to do so."
  },
  {
    "id": "2.1172",
    "topic": "Handling Exceptions",
    "question": "Considering the following program, which of the options are true?\npublic class FinallyTest{\npublic static void main(String args[]){\ntry{\nif (args.length == 0) return;\nelse throw new Exception(\"Some Exception\");\n}\ncatch(Exception e){\nSystem.out.println(\"Exception in Main\");\n}\nfinally{\nSystem.out.println(\"The end\");\n}\n}\n}",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "If run with no arguments, the program will only print 'The end'."
      },
      {
        "label": "B",
        "text": "If run with one argument, the program will only print 'The end'."
      },
      {
        "label": "C",
        "text": "If run with one argument, the program will print 'Exception in Main' and 'The end'."
      },
      {
        "label": "D",
        "text": "If run with one argument, the program will only print 'Exception in Main'."
      },
      {
        "label": "E",
        "text": "If run with no arguments, the program will not print anything."
      },
      {
        "label": "F",
        "text": "If run with no arguments, the program will generate a stack trace on the console."
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "explanation": "There are two points to understand here:\n1. Even if the program is executed without any arguments, the 'args' is NOT NULL. In such case it will be\ninitialized to an array of Strings containing zero elements.\n2. The finally block is always executed, no matter how control leaves the try block. Only if, in a try or catch block,\nSystem.exit() is called then finally will not be executed."
  },
  {
    "id": "2.1173",
    "topic": "Using Operators and Decision Constructs",
    "question": "Consider the following class :\npublic class Test{\npublic static void main(String[] args){\nif (args[0].equals(\"open\"))\nif (args[1].equals(\"someone\"))\nSystem.out.println(\"Hello!\");\nelse System.out.println(\"Go away \"+ args[1]);\n}\n}\nWhich of the following statements are true if the above program is run with the command line :\njava Test closed",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It will throw ArrayIndexOutOfBoundsException at runtime."
      },
      {
        "label": "B",
        "text": "It will end without exceptions and will print nothing."
      },
      {
        "label": "C",
        "text": "It will print Go away"
      },
      {
        "label": "D",
        "text": "It will print Go away and then will throw ArrayIndexOutOfBoundsException."
      },
      {
        "label": "E",
        "text": "None of the above."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "As in C and C++, the Java if statement suffers from the so-called \"dangling else problem,\" The problem is that\nboth the outer if statement and the inner if statement might conceivably own the else clause.\nIn this example, one might be tempted to assume that the programmer intended the else clause to belong to the\nouter if statement.\nThe Java language, like C and C++ and many languages before them, arbitrarily decree that an else clause belongs\nto the innermost if so as the first if() condition fails (args[0] not being \"open\") there is no else associated to\nexecute. So, the program does nothing. The else actually is associated with the second if. So had the command line\nbeen :\njava Test open, it would have executed the second if and thrown ArrayIndexOutOfBoundsException.\nIf the command line had been:\njava Test open xyz, it would execute the else part(which is associated with the second if) and would have\nprinted \"Go away xyz\"."
  },
  {
    "id": "2.1174",
    "topic": "Working with Java API - String, StringBuilder",
    "question": "What will the following program print?\npublic class TestClass{\nstatic String str = \"Hello World\";\npublic static void changeIt(String s){\ns = \"Good bye world\";\n}\npublic static void main(String[] args){\nchangeIt(str);\nSystem.out.println(str);\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "\"Hello World\""
      },
      {
        "label": "B",
        "text": "\"Good bye world\""
      },
      {
        "label": "C",
        "text": "It will not compile."
      },
      {
        "label": "D",
        "text": "It will throw an exception at runtime."
      },
      {
        "label": "E",
        "text": "None of the above."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Theoretically, java supports Pass by Value for everything ( i.e. primitives as well as Objects).\n. Primitives are always passed by value.\n. Object \"references\" are passed by value. So it looks like the object is passed by reference but actually it is the\nvalue of the reference that is passed.\nAn example:\nObject o1 = new Object(); //Let us say, the object is stored at memory location 15000.\n//Since o1 actually stores the address of the memory location where the object is\nstored, it contains 15000.\nNow, when you call someMethod(o1); the value 15000 is passed to the method.\nInside the method someMethod():\nsomeMethod( Object localVar) {\n/*localVar now contains 15000, which means it also points to the same memory\nlocation where the object is stored.\nTherefore, when you call a method on localVar, it will be executed on the same\nobject.\nHowever, when you change the value of localVar itself, for example if you do\nlocalVar=null,\nit then starts pointing to a different memory location. But the original variable o1\nstill\ncontains 15000 so it still points to the same object. */\n}\nThis is what happens in the this question.\nIn the method changeIt(...) you are giving a new value to the local variable but the original reference remains the\nsame.\nIf you need even more detailed explanation, please check http://www.javaranch.com/campfire/StoryPassBy.jsp"
  },
  {
    "id": "2.1175",
    "topic": "Working with Java API - String, StringBuilder",
    "question": "Which of the following statements will evaluate to true?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "\"String\".replace('g','G') == \"String\".replace('g','G')"
      },
      {
        "label": "B",
        "text": "\"String\".replace('g','g') == new String(\"String\").replace('g','g')"
      },
      {
        "label": "C",
        "text": "\"String\".replace('g','G')==\"StrinG\"\nreplace creates a new string object."
      },
      {
        "label": "D",
        "text": "\"String\".replace('g','g')==\"String\""
      },
      {
        "label": "E",
        "text": "None of these."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "There are 2 points to remember:\n1. replace() method creates a new String object.\n2. replace() method returns the same String object if both the parameters are same, i.e. if there is no change."
  },
  {
    "id": "2.1176",
    "topic": "Using Operators and Decision Constructs",
    "question": "Which code fragments will print the last argument given on the command line to the standard output, and exit\nwithout any output or exception stack trace if no arguments are given?\n1.\npublic static void main(String args[ ]){\nif (args.length != 0) System.out.println(args[args.length-1]);\n}\n2.\npublic static void main(String args[ ]){\ntry { System.out.println(args[args.length-1]); }\ncatch (ArrayIndexOutOfBoundsException e) { }\n}\n3.\npublic static void main(String args[ ]){\nint i = args.length;\nif (i != 0) System.out.println(args[i-1]);\n}\n4.\npublic static void main(String args[ ]){\nint i = args.length-1;\nif (i > 0) System.out.println(args[i]);\n}\n5.\npublic static void main(String args[ ]){\ntry { System.out.println(args[args.length-1]); }\ncatch (NullPointerException e) {}\n}",
    "selectCount": 3,
    "options": [
      {
        "label": "A",
        "text": "1"
      },
      {
        "label": "B",
        "text": "2"
      },
      {
        "label": "C",
        "text": "3"
      },
      {
        "label": "D",
        "text": "4"
      },
      {
        "label": "E",
        "text": "5"
      }
    ],
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "explanation": "If no argument is given, a String array of length Zero is received in the main method. So, there is no\nNullPointerException on accessing args even if no argument is given.\nIndexing in java starts from zero. So the last element will be at args.length-1."
  },
  {
    "id": "2.1177",
    "topic": "Working with Inheritance - instanceof",
    "question": "Which of the following statements are true?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "For any non-null reference o1, the expression (o1 instanceof o1) will always yield true."
      },
      {
        "label": "B",
        "text": "For any non-null reference o1, the expression (o1 instanceof Object) will always yield true."
      },
      {
        "label": "C",
        "text": "For any non-null reference o1, the expression (o1 instanceof o1) will always yield false."
      },
      {
        "label": "D",
        "text": "For any non-null reference o1, the expression (o1 instanceof Object) may yield false."
      },
      {
        "label": "E",
        "text": "None of the above."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "You should understand here that instanceof operator returns true even if the Right Hand Side is a super class.\nFor example,\nclass Animal {}\nclass Dog extends Animal { }\nDog d = new Dog();\nNow, d instanceof Animal will be true because even though d is actually an instance of Dog, since Dog is a\nsubclass of Animal, Dog IS-A Animal."
  },
  {
    "id": "2.1178",
    "topic": "Working with Inheritance",
    "question": "Which of the following class definitions is/are legal definition(s) of a class that cannot be instantiated?\nclass Automobile{\nabstract void honk(); //(1)\n}\nabstract class Automobile{\nvoid honk(); //(2)\n}\nabstract class Automobile{\nvoid honk(){}; //(3)\n}\nabstract class Automobile{\nabstract void honk(){} //(4)\n}\nabstract class Automobile{\nabstract void honk(); //(5)\n}",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "1"
      },
      {
        "label": "B",
        "text": "2"
      },
      {
        "label": "C",
        "text": "3"
      },
      {
        "label": "D",
        "text": "4"
      },
      {
        "label": "E",
        "text": "5"
      }
    ],
    "correctAnswers": [
      "C",
      "E"
    ],
    "explanation": "Here are some points to remember:\nA class is uninstantiable if the class is declared abstract.\nIf a method has been declared as abstract, it cannot provide an implementation (i.e. it cannot have a method body\n) and the class containing that method must be declared abstract).\nIf a method is not declared abstract, it must provide a method body (the class can be abstract but not\nnecessarily so).\nIf any method in a class is declared abstract, then the whole class must be declared abstract.\nAn class can still be made abstract even if it has no abstract method."
  },
  {
    "id": "2.1179",
    "topic": "Using Operators and Decision Constructs",
    "question": "The following code snippet will print 'true'.\nshort s = Short.MAX_VALUE;\nchar c = s;\nSystem.out.println( c == Short.MAX_VALUE);",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "True"
      },
      {
        "label": "B",
        "text": "False"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "This will not compile because a short VARIABLE can NEVER be assigned to a char without explicit casting. A\nshort CONSTANT can be assigned to a char only if the value fits into a char.\nshort s = 1; byte b = s; => this will also not compile because although value is small enough to be held by a byte\nbut the Right Hand Side i.e. s is a variable and not a constant.\nfinal short s = 1; byte b = s; => This is fine because s is a constant and the value fits into a byte.\nfinal short s = 200; byte b = s; => This is invalid because although s is a constant but the value does not fit into a\nbyte.\nImplicit narrowing occurs only for byte, char, short, and int. Remember that it does not occur for long, float, or\ndouble. So, this will not compile: int i = 129L;"
  },
  {
    "id": "2.1180",
    "topic": "Using Operators and Decision Constructs",
    "question": "The following code snippet will not compile:\nint i = 10;\nSystem.out.println( i<20 ? out1() : out2() );\nAssume that out1 and out2 methods have the following signatures: public void out1(); and public void\nout2();",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "True"
      },
      {
        "label": "B",
        "text": "False"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Note that it is not permitted for either the second or the third operand expression of the ? operator to be an\ninvocation of a void method.\nIf one of the operands is of type byte and the other is of type short, then the type of the conditional expression is\nshort.\nIf one of the operands is of type T where T is byte, short, or char, and the other operand is a constant expression\nof type int whose value is representable in type T, then the type of the conditional expression is T.\nOtherwise, binary numeric promotion (5.6.2) is applied to the operand types, and the type of the conditional\nexpression is the promoted type of the second and third operands.\nIf one of the second and third operands is of the null type and the type of the other is a reference type, then the\ntype of the conditional expression is that reference type.\nIf the second and third operands are of different reference types, then it must be possible to convert one of the\ntypes to the other type (call this latter type T) by assignment conversion (5.2); the type of the conditional\nexpression is T. It is a compile-time error if neither type is assignment compatible with the other type."
  },
  {
    "id": "2.1181",
    "topic": "Working with Inheritance",
    "question": "What would be the result of attempting to compile and run the following code?\n// Filename: TestClass.java\npublic class TestClass{\npublic static void main(String args[]){\nB c = new C();\nSystem.out.println(c.max(10, 20));\n}\n}\nclass A{\nint max(int x, int y) { if (x>y) return x; else return y; }\n}\nclass B extends A{\nint max(int x, int y) { return 2 * super.max(x, y) ; }\n}\nclass C extends B{\nint max(int x, int y) { return super.max( 2*x, 2*y); }\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "The code will fail to compile."
      },
      {
        "label": "B",
        "text": "Runtime error."
      },
      {
        "label": "C",
        "text": "The code will compile without errors and will print 80 when run."
      },
      {
        "label": "D",
        "text": "The code will compile without errors and will print 40 when run."
      },
      {
        "label": "E",
        "text": "The code will compile without errors and will print 20 when run."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "When the program is run, the main() method will call the max() method in C with parameters 10 and 20 because\nthe actual object referenced by 'c' is of class C. This method will call the max() method in B with the parameters\n20 and 40. The max() method in B will in turn call the max() method in A with the parameters 20 and 40. The\nmax() method in A will return 40 to the max() method in B. The max() method in B will return 80 to the max()\nmethod in C. And finally the max() of C will return 80 in main() which will be printed out."
  },
  {
    "id": "2.1182",
    "topic": "Using Operators and Decision Constructs",
    "question": "What will be the output of the following class:\npublic class TestClass{\npublic void testRefs(String str, StringBuilder sb){\nstr = str + sb.toString();\nsb.append(str);\nstr = null;\nsb = null;\n}\npublic static void main(String[] args){\nString s = \"aaa\";\nStringBuilder sb = new StringBuilder(\"bbb\");\nnew TestClass().testRefs(s, sb);\nSystem.out.println(\"s=\"+s+\" sb=\"+sb);\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "s=aaa sb=bbb"
      },
      {
        "label": "B",
        "text": "s=null sb=null"
      },
      {
        "label": "C",
        "text": "s=aaa sb=null"
      },
      {
        "label": "D",
        "text": "s=null sb=bbbaaa"
      },
      {
        "label": "E",
        "text": "s=aaa sb=bbbaaabbb"
      }
    ],
    "correctAnswers": [
      "E"
    ],
    "explanation": "Always remember that Strings are immutable, you cannot change them. In this case, s refers to \"aaa\", and no\nmatter what testRefs() method does, the variable s of main() will keep pointing to the same string \"aaa\".\nStringBuilder on the other hand, is mutable. So, initially sb is pointing to a StringBuilder object containing\n\"bbb\". Its reference is passed to the testRefs() method. In that method, we change the local variable str to point\nto a new string \"aaa\"+\"bbb\" = \"aaabbb\". Then we append this to sb. Therefore sb now contains \"bbbaaabbb\".\nSetting the local reference str and sb (in method testRefs()) to null, does not affect the variables s and sb of\nthe main() method."
  },
  {
    "id": "2.1183",
    "topic": "Using Operators and Decision Constructs",
    "question": "Given the following LOCs:\nint rate = 10;\nXXX amount = 1 - rate/100*1 - rate/100;\nWhat can XXX be?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "only int or long"
      },
      {
        "label": "B",
        "text": "only long or double"
      },
      {
        "label": "C",
        "text": "only double"
      },
      {
        "label": "D",
        "text": "double or float"
      },
      {
        "label": "E",
        "text": "long or double but not int or float."
      },
      {
        "label": "F",
        "text": "int, long, float or double"
      }
    ],
    "correctAnswers": [
      "F"
    ],
    "explanation": "Note that none of the terms in the expression 1 - rate/100*1 - rate/100; is double or float. They are all ints.\nSo the result of the expression will be an int.\nSince an int can be assigned to a variable of type int, long, float or double, amount can be int, long, float or double."
  },
  {
    "id": "2.1185",
    "topic": "Working with Java API - String, StringBuilder",
    "question": "What will the following code print?\nString s = \"blooper\";\nStringBuilder sb = new StringBuilder(s);\nsb.append(s.substring(4)).delete(3, 5);\nSystem.out.println(sb);",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "blorbloo"
      },
      {
        "label": "B",
        "text": "bloper"
      },
      {
        "label": "C",
        "text": "bloerper"
      },
      {
        "label": "D",
        "text": "blooperper"
      },
      {
        "label": "E",
        "text": "bloo"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Please read the following description of substring method of String and delete method of StringBuilder:\npublic String substring(int beginIndex)\nReturns a new string that is a substring of this string. The substring begins with the character at the specified\nindex and extends to the end of this string.\nExamples:\n\"unhappy\".substring(2) returns \"happy\"\n\"Harbison\".substring(3) returns \"bison\"\n\"emptiness\".substring(9) returns \"\" (an empty string)\npublic StringBuilder delete(int start, int end)\nRemoves the characters in a substring of this sequence. The substring begins at the specified start and extends to\nthe character at index end - 1 or to the end of the sequence if no such character exists. If start is equal to end, no\nchanges are made."
  },
  {
    "id": "2.1186",
    "topic": "Working with Java API - String, StringBuilder",
    "question": "What will the following code print when compiled and run?\npublic class TestClass {\npublic static void main(String[] args) {\nString s = \"blooper\";\nStringBuilder sb = new StringBuilder(s);\ns.append(\"whopper\");\nsb.append(\"shopper\");\nSystem.out.println(s);\nSystem.out.println(sb);\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "blooper and bloopershopper"
      },
      {
        "label": "B",
        "text": "blooperwhopper and bloopershopper"
      },
      {
        "label": "C",
        "text": "blooper and blooperwhoppershopper"
      },
      {
        "label": "D",
        "text": "It will not compile."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": ""
  },
  {
    "id": "2.1187",
    "topic": "Working with Java API - String, StringBuilder",
    "question": "Which of the following methods can be called on a String object?",
    "selectCount": 3,
    "options": [
      {
        "label": "A",
        "text": "substring(int i)"
      },
      {
        "label": "B",
        "text": "substring(int i, int j)"
      },
      {
        "label": "C",
        "text": "substring(int i, int j, int k)"
      },
      {
        "label": "D",
        "text": "equals(Object o)"
      }
    ],
    "correctAnswers": [
      "A",
      "B",
      "D"
    ],
    "explanation": ""
  },
  {
    "id": "2.1188",
    "topic": "Working with Methods",
    "question": "What should be the return type of the following method?\npublic RETURNTYPE methodX( byte by){\ndouble d = 10.0;\nreturn (long) by/d*3;\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "int"
      },
      {
        "label": "B",
        "text": "long"
      },
      {
        "label": "C",
        "text": "double"
      },
      {
        "label": "D",
        "text": "float"
      },
      {
        "label": "E",
        "text": "byte"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Note that the cast (long) applies to 'by' not to the whole expression.\n( (long) by ) / d * 3;\nNow, division operation on long gives you a double. So the return type should be double."
  },
  {
    "id": "2.1189",
    "topic": "Working with Java Data Types",
    "question": "Which of the following statements are acceptable?",
    "selectCount": 4,
    "options": [
      {
        "label": "A",
        "text": "Object o = new java.io.File(\"a.txt\");"
      },
      {
        "label": "B",
        "text": "Boolean bool = false;"
      },
      {
        "label": "C",
        "text": "char ch = 10;"
      },
      {
        "label": "D",
        "text": "Thread t = new Runnable();"
      },
      {
        "label": "E",
        "text": "Runnable r = new Thread();"
      }
    ],
    "correctAnswers": [
      "A",
      "B",
      "C",
      "E"
    ],
    "explanation": ""
  },
  {
    "id": "2.1190",
    "topic": "Using Operators and Decision Constructs",
    "question": "What will the following code snippet print?\nObject t = new Integer(107);\nint k = (Integer) t.intValue()/9;\nSystem.out.println(k);",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "11"
      },
      {
        "label": "B",
        "text": "12"
      },
      {
        "label": "C",
        "text": "It will not compile."
      },
      {
        "label": "D",
        "text": "It will throw an exception at runtime."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Compiler will complain that the method intValue() is not available in Object. This is because the . operator has\nmore precedence than the cast operator. So you have to write it like this:\nint k = ((Integer) t).intValue()/9;\nNow, since both the operands of / are ints, it is an integer division. This means the resulting value is truncated (and\nnot rounded). Therefore, the above statement will print 11 and not 12."
  },
  {
    "id": "2.1191",
    "topic": "Creating and Using Arrays",
    "question": "Which of the following code fragments will successfully initialize a two-dimensional array of chars named cA\nwith a size such that cA[2][3] refers to a valid element?\n1.\nchar[][] cA = { { 'a', 'b', 'c' }, { 'a', 'b', 'c' } };\n2.\nchar cA[][] = new char[3][];\nfor (int i=0; i<cA.length; i++) cA[i] = new char[4];\n3.\nchar cA[][] = { new char[ ]{ 'a', 'b', 'c' } , new char[ ]{ 'a', 'b', 'c' } };\n4\nchar cA[3][2] = new char[][] { { 'a', 'b', 'c' }, { 'a', 'b', 'c' } };\n5.\nchar[][] cA = { \"1234\", \"1234\", \"1234\" };",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "1, 3"
      },
      {
        "label": "B",
        "text": "4, 5"
      },
      {
        "label": "C",
        "text": "2, 3"
      },
      {
        "label": "D",
        "text": "1, 2, 3"
      },
      {
        "label": "E",
        "text": "2"
      }
    ],
    "correctAnswers": [
      "E"
    ],
    "explanation": "1 and 3 declare a two dimensional array alright but they create the array of size 2, 3. And cA[2][3] means we need\nan array of\nsize 3, 4 because the numbering starts from 0.\n4 : You cannot put array size information on left hand side of equals sign.\n5 : This is a one dimensional array and that too of strings. Note that a java String is not equivalent to 1 dimensional\narray of chars.\nThis leaves us with only one choice 2."
  },
  {
    "id": "2.1192",
    "topic": "Working with Java API - String, StringBuilder",
    "question": "What will be the output of the following lines ?\nSystem.out.println(\"\" +5 + 6); //1\nSystem.out.println(5 + \"\" +6); // 2\nSystem.out.println(5 + 6 +\"\"); // 3\nSystem.out.println(5 + 6); // 4",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "56\n56\n11\n11"
      },
      {
        "label": "B",
        "text": "11\n56\n11\n11"
      },
      {
        "label": "C",
        "text": "56\n56\n56\n11"
      },
      {
        "label": "D",
        "text": "56\n56\n56\n56"
      },
      {
        "label": "E",
        "text": "56\n56\n11\n56"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "In line 1, \"\" + 5 + 6 => \"5\"+6 => \"56\"\nIn line 2, 5 + \"\" +6 => \"5\"+6 => \"56\"\nIn line 3, 5 + 6 +\"\" => 11+\"\" => \"11\"\nIn line 4, 5 + 6 => 11 => \"11\""
  },
  {
    "id": "2.1193",
    "topic": "Using Loop Constructs",
    "question": "Which of these statements are valid when occurring by themselves in a method?",
    "selectCount": 3,
    "options": [
      {
        "label": "A",
        "text": "while ( ) break ;"
      },
      {
        "label": "B",
        "text": "do { break ; } while (true) ;"
      },
      {
        "label": "C",
        "text": "if (true) { break ; } (When not inside a switch block or a loop)"
      },
      {
        "label": "D",
        "text": "switch (1) { default : break; }\nYou can use a constant in switch(...);"
      },
      {
        "label": "E",
        "text": "for ( ; true ; ) break ;"
      }
    ],
    "correctAnswers": [
      "B",
      "D",
      "E"
    ],
    "explanation": "It is not possible to break out of an if statement. But if the if statement is placed within a switch statement or a loop\nconstruct, the usage of break in option 3 would be valid."
  },
  {
    "id": "2.1194",
    "topic": "Using Operators and Decision Constructs",
    "question": "Consider the following lines of code:\nSystem.out.println(null + true); //1\nSystem.out.println(true + null); //2\nSystem.out.println(null + null); //3\nWhich of the following statements are correct?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "None of the 3 lines will compile."
      },
      {
        "label": "B",
        "text": "All the 3 lines will compile and print nulltrue, truenull and nullnull respectively."
      },
      {
        "label": "C",
        "text": "Line 1 and 2 won't compile but line 3 will print nullnull."
      },
      {
        "label": "D",
        "text": "Line 3 won't compile but line 1 and 2 will print nulltrue and truenull respectively."
      },
      {
        "label": "E",
        "text": "None of the above."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Note that none of the parameters is a String so conversion to String will not happen. The following are the error\nmessages given by the compiler.\nC:\\works\\nbtestproject\\src\\TestClass.java:46: operator + cannot be applied to <nulltype>,boolean\nSystem.out.println(null + true); //1\nC:\\works\\nbtestproject\\src\\TestClass.java:46: reference to println is ambiguous, both method println(char[]) in\njava.io.PrintStream and method println(java.lang.String) in java.io.PrintStream match\nSystem.out.println(null + true); //1\nC:\\works\\nbtestproject\\src\\TestClass.java:47: operator + cannot be applied to boolean,<nulltype>\nSystem.out.println(true + null); //2\nC:\\works\\nbtestproject\\src\\TestClass.java:47: reference to println is ambiguous, both method println(char[]) in\njava.io.PrintStream and method println(java.lang.String) in java.io.PrintStream match\nSystem.out.println(true + null); //2\nC:\\works\\nbtestproject\\src\\TestClass.java:48: operator + cannot be applied to <nulltype>,<nulltype>\nSystem.out.println(null + null); //3\nC:\\works\\nbtestproject\\src\\TestClass.java:48: reference to println is ambiguous, both method println(char[]) in\njava.io.PrintStream and method println(java.lang.String) in java.io.PrintStream match\nSystem.out.println(null + null); //3\n6 errors\nIf one operand expression is of type String, then string conversion is performed on the other operand to produce a\nString at run time. The result is a reference to a newly created String object that is the concatenation of the two\nStrings. The characters of the left-hand operand precede the characters of the right-hand operand in the newly\ncreated string.\nAny type may be converted to type String by string conversion.\nA value x of primitive type T is first converted to a reference value as if by giving it as an argument to an\nappropriate class instance creation expression e.g. if T is boolean, then use new Boolean(x) .\ntoString() is defined by the primordial class Object; many classes override it, notably Boolean, Character, Integer,\nLong, Float, Double, and String.\nNote that had there been a method like String getString() { return null; }, println( getString() + true ) etc. would\nhave compiled fine and would have printed \"nulltrue\"."
  },
  {
    "id": "2.1195",
    "topic": "Working with Inheritance - instanceof",
    "question": "Which letters will be printed when the following program is run?\npublic class TestClass{\npublic static void main(String args[]){\nB b = new C();\nA a = b;\nif (a instanceof A) System.out.println(\"A\");\nif (a instanceof B) System.out.println(\"B\");\nif (a instanceof C) System.out.println(\"C\");\nif (a instanceof D) System.out.println(\"D\");\n}\n}\nclass A { }\nclass B extends A { }\nclass C extends B { }\nclass D extends C { }",
    "selectCount": 3,
    "options": [
      {
        "label": "A",
        "text": "A will be printed."
      },
      {
        "label": "B",
        "text": "B will be printed."
      },
      {
        "label": "C",
        "text": "C will be printed."
      },
      {
        "label": "D",
        "text": "D will be printed."
      }
    ],
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "explanation": "The program will print A, B and C when run. The object denoted by reference a is of type C. The object is also an\ninstance of A and B, since C is a subclass of B and B is a subclass of A. The object is not an instance of D."
  },
  {
    "id": "2.1196",
    "topic": "Using Operators and Decision Constructs",
    "question": "Consider the following code snippet:\nXXXX m ;\n//other code\nswitch( m ){\ncase 32 : System.out.println(\"32\"); break;\ncase 64 : System.out.println(\"64\"); break;\ncase 128 : System.out.println(\"128\"); break;\n}\nWhat type can 'm' be of so that the above code compiles and runs as expected ?",
    "selectCount": 3,
    "options": [
      {
        "label": "A",
        "text": "int m;"
      },
      {
        "label": "B",
        "text": "long m;"
      },
      {
        "label": "C",
        "text": "char m;"
      },
      {
        "label": "D",
        "text": "byte m;"
      },
      {
        "label": "E",
        "text": "short m;"
      }
    ],
    "correctAnswers": [
      "A",
      "C",
      "E"
    ],
    "explanation": "Here are the rules for a switch statement:\n1. Only String, byte, char, short, int, (and their wrapper classes Byte, Character, Short, and Integer), and enums can\nbe used as types of a switch variable. (String is allowed only since Java 7).\n2. The case constants must be assignable to the switch variable. For example, if your switch variable is of class\nString, your case labels must use Strings as well.\n3. The switch variable must be big enough to hold all the case constants. For example, if the switch variable is of\ntype char, then none of the case constants can be greater than 65535 because a char's range is from 0 to 65535.\n4. All case labels should be COMPILE TIME CONSTANTS.\n5. No two of the case constant expressions associated with a switch statement may have the same value.\n6. At most one default label may be associated with the same switch statement."
  },
  {
    "id": "2.1198",
    "topic": "Working with Inheritance",
    "question": "What will be the output of the following program ?\nclass CorbaComponent{\nString ior;\nCorbaComponent(){ startUp(\"IOR\"); }\nvoid startUp(String s){ ior = s; }\nvoid print(){ System.out.println(ior); }\n}\nclass OrderManager extends CorbaComponent{\nOrderManager(){ }\nvoid startUp(String s){ ior = getIORFromURL(s); }\nString getIORFromURL(String s){ return \"URL://\"+s; }\n}\npublic class Application{\npublic static void main(String args[]){ start(new OrderManager()); }\nstatic void start(CorbaComponent cc){ cc.print(); }\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It will throw an exception at run time."
      },
      {
        "label": "B",
        "text": "It will print IOR"
      },
      {
        "label": "C",
        "text": "It will print URL://IOR"
      },
      {
        "label": "D",
        "text": "It will not compile."
      },
      {
        "label": "E",
        "text": "None of the above."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Observer that method startUp(String s) of CorbaComponent is overridden by the subclass OrderManager.\nWhen an object of class OrderManager is constructed, the default no args constructor of CorbaComponent is called.\nThis constructor calls the startUp(String s) with \"IOR\" as parameter. Now, there are two eligible methods\nwhich can be called - CorbaComponent's startUp and OrderManager's startUp.\nThe method selection is done on the basis of the actual class of the object (which is OrderManager here). So\nOrderManager's startUp is called, which sets the ior variable to URL://IOR.\nUnlike instance method selection, variable (and static method) selection is done on the basis of declared class of\nthe variable and not on the actual class of object that it is referring to."
  },
  {
    "id": "2.1199",
    "topic": "Working with Java Data Types",
    "question": "Given:\npublic class TestClass{\npublic static int getSwitch(String str){\nreturn (int) Math.round( Double.parseDouble(str.substring(1, str.length()-1)) );\n}\npublic static void main(String args []){\nswitch(getSwitch(args[0])){\ncase 0 : System.out.print(\"Hello \");\ncase 1 : System.out.print(\"World\"); break;\ndefault : System.out.print(\"Good Bye\");\n}\n}\n}\nWhat will be printed by the above code if it is run with command line:\njava TestClass --0.50\n(There are two minuses before 0.)",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "Hello"
      },
      {
        "label": "B",
        "text": "World"
      },
      {
        "label": "C",
        "text": "Hello World"
      },
      {
        "label": "D",
        "text": "Hello World Good Bye"
      },
      {
        "label": "E",
        "text": "Good Bye"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "str.substring(1, str.length()-1) => \"--0.50\".substring(1, (6-1) ) => -0.5\nMath.round(-0.5) = 0.0\nso getSwitch(...) returns 0 if passed an argument of \"--0.50\".\nNow, there is no \"break\" in case 0 of switch. so the control falls through to the next case ( i.e. case 1) after printing\nHello. At case 1, it prints World. And since there is a break. default is not executed.\nObserve that rounding is a standard mathematical procedure where the number that lies exactly between two\nnumbers always rounds up to the higher one. So .5 rounds to 1 and -.5 rounds to 0."
  },
  {
    "id": "2.1200",
    "topic": "Handling Exceptions",
    "question": "What can be done to get the following code to compile and run? (Assume that the options are independent of each\nother.)\npublic float parseFloat( String s ){\nfloat f = 0.0f; // 1\ntry{\nf = Float.valueOf( s ).floatValue(); // 2\nreturn f ; // 3\n}\ncatch(NumberFormatException nfe){\nf = Float.NaN ; // 4\nreturn f; // 5\n}\nfinally {\nreturn f; // 6\n}\nreturn f ; // 7\n}",
    "selectCount": 4,
    "options": [
      {
        "label": "A",
        "text": "Remove line 3, 6"
      },
      {
        "label": "B",
        "text": "Remove line 5"
      },
      {
        "label": "C",
        "text": "Remove line 5, 6"
      },
      {
        "label": "D",
        "text": "Remove line 7"
      },
      {
        "label": "E",
        "text": "Remove line 3, 7"
      }
    ],
    "correctAnswers": [
      "A",
      "C",
      "D",
      "E"
    ],
    "explanation": "Basically, an unreachable statement causes a compilation error (There is one exception: if(false) { ... } is\nvalid.). As such, line 7 is unreachable because of the return statement in finally. This is because finally is always\nexecuted and there it returns a value, so there is no way line 7 can be executed!\nWhen you remove the lines suggested by the options, all the lines of code are executed in one case or another. For\nexample, in option 1, if you comment line 3 and 6, Line 7 will be executed if no exception is thrown in the try\nblock.\nWe suggest you to try working out other scenarios yourself in a similar manner."
  },
  {
    "id": "2.1201",
    "topic": "Working with Inheritance",
    "question": "Consider the following interface definition:\ninterface Bozo{\nint type = 0;\npublic void jump();\n}\nNow consider the following class:\npublic class Type1Bozo implements Bozo{\npublic Type1Bozo(){\ntype = 1;\n}\npublic void jump(){\nSystem.out.println(\"jumping...\"+type);\n}\npublic static void main(String[] args){\nBozo b = new Type1Bozo();\nb.jump();\n}\n}\nWhat will the program print when compiled and run?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "jumping...0"
      },
      {
        "label": "B",
        "text": "jumping...1"
      },
      {
        "label": "C",
        "text": "This program will not compile."
      },
      {
        "label": "D",
        "text": "It will throw an exception at runtime."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Fields defined in an interface are ALWAYS considered as public, static, and final. Even if you don't explicitly\ndefine them as such. In fact, you cannot even declare a field to be private or protected in an interface. Therefore,\nyou cannot assign any value to 'type' outside the interface definition."
  },
  {
    "id": "2.1202",
    "topic": "Creating and Using Arrays",
    "question": "What would be the result of trying to compile and run the following program?\npublic class Test{\nint[] ia = new int[1];\nObject oA[] = new Object[1];\nboolean bool;\npublic static void main(String args[]){\nTest test = new Test();\nSystem.out.println(test.ia[0] + \" \" + test.oA[0]+\" \"+test.bool);\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "The program will fail to compile, because of uninitialized variable 'bool'."
      },
      {
        "label": "B",
        "text": "The program will throw a java.lang.NullPointerException when run.\nNo reason for this at all."
      },
      {
        "label": "C",
        "text": "The program will print \"0 null false\"."
      },
      {
        "label": "D",
        "text": "The program will print \"0 null true\"."
      },
      {
        "label": "E",
        "text": "The program will print null and false but will print junk value for ia[0]."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Following are the default values that instance variables are initialized with if not initialized explicitly:\ntypes (byte, short, char, int, long, float, double) to 0 ( or 0.0 ).\nAll Object types to null.\nboolean to false."
  },
  {
    "id": "2.1203",
    "topic": "Working with Inheritance",
    "question": "A method with no access modifier can be overridden by a method marked protected (assuming that it is not final).",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "True"
      },
      {
        "label": "B",
        "text": "False"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "An Overriding method is allowed to make the overridden method more accessible, and since protected is more\naccessible than default (package), this is allowed. Note that protected access will allow access to the subclass even\nif the subclass is in a different package but package access will not."
  },
  {
    "id": "2.1204",
    "topic": "Working with Java Data Types",
    "question": "What will be the result of attempting to compile and run the following program?\npublic class TestClass{\npublic static void main(String args[ ] ){\nObject a, b, c ;\na = new String(\"A\");\nb = new String(\"B\");\nc = a;\na = b;\nSystem.out.println(\"\"+c);\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "The program will print java.lang.String@XXX, where XXX is the memory location of the object a."
      },
      {
        "label": "B",
        "text": "The program will print A"
      },
      {
        "label": "C",
        "text": "The program will print B"
      },
      {
        "label": "D",
        "text": "The program will not compile because the type of a, b, and c is Object."
      },
      {
        "label": "E",
        "text": "The program will print java.lang.String@XXX, where XXX is the hash code of the object a."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "The variables a, b and c contain references to actual objects. Assigning to a reference only changes the reference\nvalue, and not the object pointed to by the reference. So, when c = a is executed c starts pointing to the string\nobject containing A. and when a = b is executed, a starts pointing to the string object containing B but the object\ncontaining A still remains same and c still points to it. So the program prints A and not B.\nThe Object class's toString generates a string using: getClass().getName() + '@' +\nInteger.toHexString(hashCode())\nBut in this case, String class overrides the toString() method that returns just the actual string value."
  },
  {
    "id": "2.1206",
    "topic": "Working with Inheritance - instanceof",
    "question": "If a.equals(b) returns true, b instanceof ClassOfA must always be true.\n(Assume that ClassOfA is the name of the class of the variable a.)",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "True"
      },
      {
        "label": "B",
        "text": "False"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "This may not always be correct because equals() method can be overridden. By default, it tests reference\nassignment, but any subclass of Object is free to redefine equals() as it deems fit. So, it is possible that an equals\nmethod may return true even if the class of the passed object has no relation to this object."
  },
  {
    "id": "2.1207",
    "topic": "Creating and Using Arrays",
    "question": "Which of the following are valid code fragments:",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "new Object[]{ \"aaa\", new Object(), new ArrayList(), 10};"
      },
      {
        "label": "B",
        "text": "new Object[]{ \"aaa\", new Object(), new ArrayList(), {} };"
      },
      {
        "label": "C",
        "text": "new Object[]{ \"aaa\", new Object(), new ArrayList(), new String[]{\"\"} };"
      },
      {
        "label": "D",
        "text": "new Object[1]{ new Object() };"
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "explanation": "1. An array of objects can store Objects of any class.\n2. Primitives (i.e. int, byte, char, short, boolean, long, double, and float) are NOT objects.\n3. An array (of primitives as well as of objects) is an Object."
  },
  {
    "id": "2.1208",
    "topic": "Working with Inheritance",
    "question": "Given the following class definition:\nclass A{\nprotected int i;\nA(int i) { this.i = i; }\n}\n// 1 : Insert code here\nWhich of the following would be a valid class that can be inserted at //1 ?",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "class B {}"
      },
      {
        "label": "B",
        "text": "class B extends A {}"
      },
      {
        "label": "C",
        "text": "class B extends A { B() { System.out.println(\"i = \" + i); } }"
      },
      {
        "label": "D",
        "text": "class B { B() {} }"
      }
    ],
    "correctAnswers": [
      "A",
      "D"
    ],
    "explanation": "Notice that class A does not define a no-argument constructor. Also note that the class B does not define a\nconstructor. Thus, class B relies on the default constructor B(). Class B's default constructor looks like this:\nB() {} //It is not public because class B is not public\nHowever, Constructors implicitly (if an explicit call to the superclass's constructor is not present) call their\nsuperclass's constructor super(). So, class B's default constructor actually looks like this:\nB(){\nsuper();\n}\nNow, since class A does not define a no-argument constructor the above code will not compile. However, class B\nwould be correct if changed to:\nclass B extends A{\nB(){\nsuper(1); // pass it any integer\n}\n// or\nB(int number){\nsuper(number);\n}\n}\nYou could also add a no-argument constructor to class A and leave class B as is."
  },
  {
    "id": "2.1209",
    "topic": "Working with Inheritance",
    "question": "Which statements concerning the following code are true?\nclass A{\npublic A() {} // A1\npublic A(String s) { this(); System.out.println(\"A :\"+s); } // A2\n}\nclass B extends A{\npublic int B(String s) { System.out.println(\"B :\"+s); return 0; } // B1\n}\nclass C extends B{\nprivate C(){ super(); } // C1\npublic C(String s){ this(); System.out.println(\"C :\"+s); } // C2\npublic C(int i){} // C3\n}",
    "selectCount": 4,
    "options": [
      {
        "label": "A",
        "text": "At least one of the constructors of each class is called as a result of constructing an object of class C."
      },
      {
        "label": "B",
        "text": "Constructor at //A2 will never be called in creation of an object of class C."
      },
      {
        "label": "C",
        "text": "Class C can be instantiated only in two ways by users of this class."
      },
      {
        "label": "D",
        "text": "//B1 will never be called in creation of objects of class A, B, or C."
      },
      {
        "label": "E",
        "text": "The code will not compile."
      }
    ],
    "correctAnswers": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": ""
  },
  {
    "id": "2.1210",
    "topic": "Handling Exceptions",
    "question": "Consider the following code snippet:\nvoid m1() throws Exception{\ntry{\n// line1\n}\ncatch (IOException e){\nthrow new SQLException();\n}\ncatch(SQLException e){\nthrow new InstantiationException();\n}\nfinally{\nthrow new CloneNotSupportedException(); // this is not a RuntimeException.\n}\n}\nWhich of the following statements are true?",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "If IOException gets thrown at line1, then the whole method will end up throwing SQLException."
      },
      {
        "label": "B",
        "text": "If IOException gets thrown at line1, then the whole method will end up throwing CloneNotSupportedException."
      },
      {
        "label": "C",
        "text": "If IOException gets thrown at line1, then the whole method will end up throwing InstantiationException."
      },
      {
        "label": "D",
        "text": "If no exception is thrown at line1, then the whole method will end up throwing CloneNotSupportedException."
      },
      {
        "label": "E",
        "text": "If SQLException gets thrown at line1, then the whole method will end up throwing InstantiationException."
      }
    ],
    "correctAnswers": [
      "B",
      "D"
    ],
    "explanation": "The fundamental concepts at play here are:\n1. The Exception that is thrown the last, is the Exception that is thrown by the method to the caller.\nSo, when no exception or any exception is thrown at line 1, the control goes to finally or some catch block. Now,\neven if the catch blocks throws some exception, the control goes to finally. The finally block throws\nCloneNotSupportedException, so the method ends up throwing CloneNotSupportedException. Other exceptions\nthrown by the code prior to this point are lost.\n2. Exception thrown by a catch cannot be caught by the following catch blocks at the same level. So, if\nIOException is thrown at line 1, the control goes to first catch which throws SQLException. Now, although there is\na catch for SQLException, it won't catch the exception because it is at the same level. So, the control goes to the\nfinally and same process as explained above continues. Any exceptions thrown before this exception are lost."
  },
  {
    "id": "2.1211",
    "topic": "Handling Exceptions",
    "question": "What will be the result of attempting to compile and run the following program?\npublic class TestClass{\npublic static void main(String args[]){\nException e = null;\nthrow e;\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "The code will fail to compile."
      },
      {
        "label": "B",
        "text": "The program will fail to compile, since it cannot throw a null."
      },
      {
        "label": "C",
        "text": "The program will compile without error and will throw an Exception when run."
      },
      {
        "label": "D",
        "text": "The program will compile without error and will throw java.lang.NullPointerException when run"
      },
      {
        "label": "E",
        "text": "The program will compile without error and will run and terminate without any output."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "You are throwing an exception and there is no try or catch block, or a throws clause. So it will not compile.\nIf you either put a try catch block or declare a throws clause for the method then it will throw a\nNullPointerException at run time because e is null.\nA method that throws a 'checked' exception i.e. an exception that is not a subclass of Error or RuntimeException,\neither must declare it in throws clause or put the code that throws the exception in a try/catch block."
  },
  {
    "id": "2.1212",
    "topic": "Using Operators and Decision Constructs",
    "question": "Which of the following expressions will evaluate to true if preceded by the following code?\nString a = \"java\";\nchar[] b = { 'j', 'a', 'v', 'a' };\nString c = new String(b);\nString d = a;",
    "selectCount": 3,
    "options": [
      {
        "label": "A",
        "text": "(a == d)"
      },
      {
        "label": "B",
        "text": "(b == d)"
      },
      {
        "label": "C",
        "text": "(a == \"java\")"
      },
      {
        "label": "D",
        "text": "a.equals(c)"
      }
    ],
    "correctAnswers": [
      "A",
      "C",
      "D"
    ],
    "explanation": ""
  },
  {
    "id": "2.1213",
    "topic": "Java Basics - OO Concepts",
    "question": "When a class whose members should be accessible only to members of that class is coded such a way that its\nmembers are accessible to other classes as well, this is called ...",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "strong coupling"
      },
      {
        "label": "B",
        "text": "weak coupling"
      },
      {
        "label": "C",
        "text": "strong typing"
      },
      {
        "label": "D",
        "text": "weak encapsulation"
      },
      {
        "label": "E",
        "text": "weak polymorphism"
      },
      {
        "label": "F",
        "text": "high cohesion"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "When a class is properly encapsulated, only the members that are part of its public API are publicly accessible to\nother classes. Rest is all private."
  },
  {
    "id": "2.1214",
    "topic": "Java Basics",
    "question": "Consider the following program:\npublic class TestClass{\npublic static void main(String[] args){\nString tom = args[0];\nString dick = args[1];\nString harry = args[2];\n}\n}\nWhat will be the value of 'harry' if the program is run from the command line:\njava TestClass 111 222 333",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "111"
      },
      {
        "label": "B",
        "text": "222"
      },
      {
        "label": "C",
        "text": "333"
      },
      {
        "label": "D",
        "text": "It will throw an ArrayIndexOutOfBoundsException"
      },
      {
        "label": "E",
        "text": "None of the above."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "java and classname are not part of the args array. So tom gets \"111\", dick gets \"222\" and harry gets \"333\"."
  },
  {
    "id": "2.1215",
    "topic": "Working with Inheritance",
    "question": "Consider the following classes :\nclass A{\npublic void mA(){ };\n}\nclass B extends A {\npublic void mA(){ }\npublic void mB() { }\n}\nclass C extends B {\npublic void mC(){ }\n}\nand the following declarations:\nA x = new B(); B y = new B(); B z = new C();\nWhich of the following calls are virtual calls?",
    "selectCount": 3,
    "options": [
      {
        "label": "A",
        "text": "x.mA();"
      },
      {
        "label": "B",
        "text": "x.mB();"
      },
      {
        "label": "C",
        "text": "y.mA();"
      },
      {
        "label": "D",
        "text": "z.mC();"
      },
      {
        "label": "E",
        "text": "z.mB();"
      }
    ],
    "correctAnswers": [
      "A",
      "C",
      "E"
    ],
    "explanation": "A virtual call means that the call is bound to a method at run time and not at compile time.\nIn Java, all non-private and non-final instance method calls are virtual. This is important because, at run time, a\nreference variable may point to an instance of a subclass of the class of the reference. The compiler doesn't have\nthe knowledge of the class of the actual object being referred to by the reference variable. If the subclass overrides\nthe method, the call becomes polymorphic because now there are two versions of the method that can be invoked\n(the base class version and the subclass version). Therefore, the compiler is unable to bind the call to the method of\na specific class. Only the JVM has the necessary information to bind the call. The JVM knows the class of the\nactual object and it binds the call to the method of that class. This behavior is called polymorphism.\nThus, in Java, all non-private and non-final instance method calls are potentially polymorphic because there could\nbe multiple versions of the method eligible to be invoked.\nIn this case, x.mB() is invalid call. It will not even compile because the class of x is A, which does not contain\nmethod mB(). Even though the object referred to by x is of class B which does contain mB(). z.mC() is invalid for\nthe same reason."
  },
  {
    "id": "2.1216",
    "topic": "Constructors",
    "question": "Which of these statements are true?",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "All classes must explicitly define a constructor."
      },
      {
        "label": "B",
        "text": "A constructor can be declared private."
      },
      {
        "label": "C",
        "text": "A constructor can declare a return value."
      },
      {
        "label": "D",
        "text": "A constructor must initialize all the member variables of a class."
      },
      {
        "label": "E",
        "text": "A constructor can access the non-static members of a class."
      }
    ],
    "correctAnswers": [
      "B",
      "E"
    ],
    "explanation": "Constructors need not initialize *all* the member variables of the class. A non-final member(i.e. an instance)\nvariable will be assigned a default value if not explicitly initialized."
  },
  {
    "id": "2.1217",
    "topic": "Working with Inheritance",
    "question": "Consider the following classes in one file named A.java...\nabstract class A{\nprotected int m1(){ return 0; }\n}\nclass B extends A{\nint m1(){ return 1; }\n}\nWhich of the following statements are correct...",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "The code will not compile as you cannot have more than 1 class in 1 file."
      },
      {
        "label": "B",
        "text": "The code will not compile because class B does not override the method m1() correctly."
      },
      {
        "label": "C",
        "text": "The code will not compile as A is an abstract class."
      },
      {
        "label": "D",
        "text": "The code will not compile as A does not have any abstract method."
      },
      {
        "label": "E",
        "text": "The code will compile fine."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "The concept here is that an overriding method cannot make the overridden method more private.\nThe access hierarchy in increasing levels of accessibility is:\nprivate->'no modifier'->protected->public ( public is accessible to all and private is accessible to none except\nitself.)\nHere, class B has no modifier for m1() so it is trying to reduce the accessibility of protected to default.\n'protected' means the method will be accessible to all the classes in the same package and all the subclasses (even\nif the subclass is in a different package).\nNo modifier (which is the default level) means the method will be accessible only to all the classes in the same\npackage. (i.e. not even to the subclass if the subclass is in a different package.)"
  },
  {
    "id": "2.1219",
    "topic": "Working with Inheritance",
    "question": "What will be the output of compiling and running the following program:\nclass TestClass implements I1, I2{\npublic void m1() { System.out.println(\"Hello\"); }\npublic static void main(String[] args){\nTestClass tc = new TestClass();\n( (I1) tc).m1();\n}\n}\ninterface I1{\nint VALUE = 1;\nvoid m1();\n}\ninterface I2{\nint VALUE = 2;\nvoid m1();\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It will print Hello."
      },
      {
        "label": "B",
        "text": "There is no way to access any VALUE in TestClass."
      },
      {
        "label": "C",
        "text": "The code will work fine only if VALUE is removed from one of the interfaces."
      },
      {
        "label": "D",
        "text": "It will not compile."
      },
      {
        "label": "E",
        "text": "None of the above."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Having ambiguous fields does not cause any problems but referring to such fields in an ambiguous way will cause\na compile time error. So you cannot call : System.out.println(VALUE) as it will be ambiguous.\nas there is no ambiguity in referring the field:\nTestClass tc = new TestClass();\nSystem.out.println(( ( I1) tc).VALUE);\nSo, any of the VALUE fields can be accessed by casting."
  },
  {
    "id": "2.1220",
    "topic": "Working with Inheritance",
    "question": "Given the following classes and declarations, which of these statements about //1 and //2 are true?\nclass A{\nprivate int i = 10;\npublic void f(){}\npublic void g(){}\n}\nclass B extends A{\npublic int i = 20;\npublic void g(){}\n}\npublic class C{\nA a = new A();//1\nA b = new B();//2\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "System.out.println(b.i); will print 10."
      },
      {
        "label": "B",
        "text": "The statement b.f( ); will give compile time error."
      },
      {
        "label": "C",
        "text": "System.out.println(b.i); will print 20"
      },
      {
        "label": "D",
        "text": "All the above are correct."
      },
      {
        "label": "E",
        "text": "None of the above statements is correct."
      }
    ],
    "correctAnswers": [
      "E"
    ],
    "explanation": "Remember that variables and static methods are not overridden and so access to variables and static methods is\ndetermined at compile time based on the type of the variable (instead of type of the object referred to by the\nvariable, as is the case with instance methods.)\nIn the given code, if you declare b to be of type B i.e. B b = new B();, you can access b.i."
  },
  {
    "id": "2.1221",
    "topic": "Working with Java Data Types",
    "question": "Which of the following is illegal ?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "char c = 320;"
      },
      {
        "label": "B",
        "text": "float f = 320;"
      },
      {
        "label": "C",
        "text": "double d = 320;"
      },
      {
        "label": "D",
        "text": "byte b = 320;"
      },
      {
        "label": "E",
        "text": "float f = 22.0f/7.0f;"
      },
      {
        "label": "F",
        "text": "None of the above is illegal."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": ""
  },
  {
    "id": "2.1222",
    "topic": "Working with Inheritance",
    "question": "Consider the following class hierarchy\nclass A{\npublic void m1() { }\n}\nclass B extends A{\npublic void m1() { }\n}\nclass C extends B{\npublic void m1(){\n/* //1\n... lot of code.\n*/\n}\n}",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "You cannot access class A's m1() from class C for the same object ( i.e. this)."
      },
      {
        "label": "B",
        "text": "You can access class B's m1() using super.m1() from class C."
      },
      {
        "label": "C",
        "text": "You can access class A's m1() using ( (A) this ).m1() from class C."
      },
      {
        "label": "D",
        "text": "You can access class A's m1() using super.super.m1() from class C."
      }
    ],
    "correctAnswers": [
      "A",
      "B"
    ],
    "explanation": "super.super is an invalid construct. So, there is no way you can access m1() of A from C."
  },
  {
    "id": "2.1223",
    "topic": "Handling Exceptions",
    "question": "Consider the following hierarchy of Exception classes :\njava.lang.RuntimeException\n+-------- IndexOutOfBoundsException\n+---------ArrayIndexOutOfBoundsException, StringIndexOutOfBoundsException\nWhich of the following statements are correct for a method that can throw ArrayIndexOutOfBounds as well as\nStringIndexOutOfBounds Exceptions but does not have try catch blocks to catch the same?",
    "selectCount": 3,
    "options": [
      {
        "label": "A",
        "text": "The method calling this method will either have to catch these 2 exceptions or declare them in its throws clause."
      },
      {
        "label": "B",
        "text": "It is ok if it declares just throws ArrayIndexOutOfBoundsException"
      },
      {
        "label": "C",
        "text": "It must declare throws ArrayIndexOutOfBoundsException, StringIndexOutOfBoundsException"
      },
      {
        "label": "D",
        "text": "It is ok if it declares just throws IndexOutOfBoundsException"
      },
      {
        "label": "E",
        "text": "It does not need to declare any throws clause."
      }
    ],
    "correctAnswers": [
      "B",
      "D",
      "E"
    ],
    "explanation": "Note that both the exceptions are RuntimeExceptions so there is no need to catch these. But it is ok even if the\nmethod declares them explicitly."
  },
  {
    "id": "2.1224",
    "topic": "Using Loop Constructs",
    "question": "Consider the following code for the main() method:\npublic static void main(String[] args) throws Exception{\nint i = 1, j = 10;\ndo {\nif (i++ > --j) continue;\n} while (i < 5);\nSystem.out.println(\"i=\" + i + \" j=\" + j);\n}\nWhat will be the output when the above code is executed?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "i=6 j=6"
      },
      {
        "label": "B",
        "text": "i=5 j=6"
      },
      {
        "label": "C",
        "text": "i=5 j=5"
      },
      {
        "label": "D",
        "text": "i=6 j=5"
      },
      {
        "label": "E",
        "text": "None of these."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "To understand the flow, let us put a print statement in the code:\nint i = 1, j = 10;\nint k =1;\ndo {\nSystem.out.println(\"Iteration \"+k+\": i=\" + i + \" j=\" + j);\nk++;\nif (i++ > --j) continue;\n} while (i < 5);\nSystem.out.println(\"i=\" + i + \" j=\" + j);\nIt generates the following output:\nIteration 1: i=1 j=10\nIteration 2: i=2 j=9\nIteration 3: i=3 j=8\nIteration 4: i=4 j=7\ni=5 j=6\nIn the iteration 1, the if comparison goes like this:\nif (1++ > --10 ) continue; => if( 1 > 9 ) . The values of i and j after the if statement are 2 and 9\nIn the iteration 2, the if comparison goes like this:\nif (2++ > --9 ) continue; => if( 2 > 8 ) . The values of i and j after the if statement are 3 and 8\nIn the iteration 3, the if comparison goes like this:\nif (3++ > --8 ) continue; => if( 3 > 7 ) . The values of i and j after the if statement are 4 and 7\nIn the iteration 4, the if comparison goes like this:\nif (4++ > --7 ) continue; => if( 4 > 6 ) . The values of i and j after the if statement are 5 and 6\nNow, i is not < 5 so the while(i<5) check fails and the loop terminates. So the final values are 5 and 6."
  },
  {
    "id": "2.1225",
    "topic": "Working with Java API - String, StringBuilder",
    "question": "Which of these statements concerning the charAt() method of the String class are true?",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "The charAt( ) method can take a char value as an argument."
      },
      {
        "label": "B",
        "text": "The charAt( ) method returns a Character object.\nIt returns char."
      },
      {
        "label": "C",
        "text": "The expression char ch = \"12345\".charAt(3) will assign 3 to ch."
      },
      {
        "label": "D",
        "text": "The expression char ch = str.charAt(str.length()) where str is \"12345\", will assign 3 to ch.\nIt will throw IndexOutOfBoundsException as str.length() is 5 and there is no str.charAt(5);"
      },
      {
        "label": "E",
        "text": "The index of the first character is 0."
      },
      {
        "label": "F",
        "text": "It throws StringIndexOutOfBoundsException if passed a value higher than or equal to the length of the string\n(or less than 0)."
      }
    ],
    "correctAnswers": [
      "A",
      "E"
    ],
    "explanation": "Since indexing starts with 0, the maximum value that you can pass to charAt is length-1.\nAs per the API documentation for charAt, it throws IndexOutOfBoundsException if you pass an invalid value.\nBoth - ArrayIndexOutOfBoundsException and StringIndexOutOfBoundsException, extend\nIndexOutOfBoundsException and although in practice, the charAt method throws\nStringIndexOutOfBoundsException, it is not a valid option because the implementation is free to throw some\nother exception as long as it is an IndexOutOfBoundsException. There are questions in the exam on this aspect."
  },
  {
    "id": "2.1227",
    "topic": "Using Loop Constructs",
    "question": "Given the following code, which of these statements are true?\nclass TestClass{\npublic static void main(String args[]){\nint k = 0;\nint m = 0;\nfor ( int i = 0; i <= 3; i++){\nk++;\nif ( i == 2){\n// line 1\n}\nm++;\n}\nSystem.out.println( k + \", \" + m );\n}\n}",
    "selectCount": 3,
    "options": [
      {
        "label": "A",
        "text": "It will print 3, 2 when line 1 is replaced by break;"
      },
      {
        "label": "B",
        "text": "It will print 3, 2 when line 1 is replaced by continue."
      },
      {
        "label": "C",
        "text": "It will print 4, 3 when line 1 is replaced by continue."
      },
      {
        "label": "D",
        "text": "It will print 4, 4 when line 1 is replaced by i = m++;"
      },
      {
        "label": "E",
        "text": "It will print 3, 3 when line 1 is replaced by i = 4;"
      }
    ],
    "correctAnswers": [
      "A",
      "C",
      "E"
    ],
    "explanation": "This is a simple loop. All you need to do is execute each statement in your head. For example, if line 1 is replaced\nby break:\n1. k=0, m=0\n2. iteration 1: i=0\n2.1 k = 1\n2.2 i == 2 is false\n2.3 m = 1\n3. iteration 2: i = 1\n3.1 k=2\n3.2 i==2 is false\n3.3 m = 2\n4. iteration 3: i = 2\n4.1 k=3\n4.2 i==2 is true\n4.3 break\n5. print 3, 2"
  },
  {
    "id": "2.1228",
    "topic": "Working with Methods",
    "question": "What will be the result of attempting to compile and run the following class?\npublic class InitTest{\nstatic String s1 = sM1(\"a\");{\ns1 = sM1(\"b\");\n}\nstatic{\ns1 = sM1(\"c\");\n}\npublic static void main(String args[]){\nInitTest it = new InitTest();\n}\nprivate static String sM1(String s){\nSystem.out.println(s); return s;\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "The program will fail to compile."
      },
      {
        "label": "B",
        "text": "The program will compile without error and will print a, c and b in that order when run."
      },
      {
        "label": "C",
        "text": "The program will compile without error and will print a, b and c in that order when run."
      },
      {
        "label": "D",
        "text": "The program will compile without error and will print c, a and b in that order when run."
      },
      {
        "label": "E",
        "text": "The program will compile without error and will print b, c and a in that order when run."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "First, static statements/blocks are called IN THE ORDER they are defined. (Hence, a and c will be printed.)\nNext, instance initializer statements/blocks are called IN THE ORDER they are defined. Finally, the constructor is\ncalled. So, then it prints b."
  },
  {
    "id": "2.1229",
    "topic": "Creating and Using Arrays",
    "question": "Which of these array declarations and instantiations are legal?",
    "selectCount": 4,
    "options": [
      {
        "label": "A",
        "text": "int[ ] a[ ] = new int [5][4] ;"
      },
      {
        "label": "B",
        "text": "int a[ ][ ] = new int [5][4] ;"
      },
      {
        "label": "C",
        "text": "int a[ ][ ] = new int [ ][4] ;"
      },
      {
        "label": "D",
        "text": "int[ ] a[ ] = new int[4][ ] ;"
      },
      {
        "label": "E",
        "text": "int[ ][ ] a = new int[5][4] ;"
      }
    ],
    "correctAnswers": [
      "A",
      "B",
      "D",
      "E"
    ],
    "explanation": "The [] notation can be placed both before and after the variable name in an array declaration.\nint[] ia, ba; // here ia and ba both are int arrays.\nint ia[], ba; //here only ia is int array and ba is an int.\nMultidimensional arrays are created by creating arrays that can contain references to other arrays ."
  },
  {
    "id": "2.1230",
    "topic": "Java Basics",
    "question": "What will the following code print when run?\npublic class TestClass{\npublic static long main(String[] args){\nSystem.out.println(\"Hello\");\nreturn 10L;\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "Hello"
      },
      {
        "label": "B",
        "text": "It will not print anything."
      },
      {
        "label": "C",
        "text": "It will not compile"
      },
      {
        "label": "D",
        "text": "It will throw an Error at runtime."
      },
      {
        "label": "E",
        "text": "None of the above."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "When the program is run, the JVM looks for a method named main() which takes an array of Strings as input and\nreturns nothing (i.e. the return type is void).\nBut in this case, it doesn't find such a method ( the given main() method is returning long!) so it throws a\njava.lang.NoSuchMethodError.\nNote that java.lang.Error does not extend Exception class. It extends java.lang.Throwable and so it can be\n\"thrown\"."
  },
  {
    "id": "2.1231",
    "topic": "Working with Inheritance",
    "question": "Given the following interface definition, which definitions are valid?\ninterface I1{\nvoid setValue(String s);\nString getValue();\n}",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "class A extends I1{\nString s;\nvoid setValue(String val) { s = val; }\nString getValue() { return s; }\n}"
      },
      {
        "label": "B",
        "text": "interface I2 extends I1{\nvoid analyse();\n}"
      },
      {
        "label": "C",
        "text": "abstract class B implements I1{\nint getValue(int i) { return 0; }\n}"
      },
      {
        "label": "D",
        "text": "interface I3 implements I1{\nvoid perform_work();\n}"
      }
    ],
    "correctAnswers": [
      "B",
      "C"
    ],
    "explanation": "The getValue(int i) method of class B in option c, is different than the method defined in the interface because\ntheir parameters are different. Therefore, this class does not actually implement the method of the interface and\nthat is why it needs to be declared abstract. Further, they have \"default\" access whereas the interface methods are\nalways public."
  },
  {
    "id": "2.1232",
    "topic": "Java Basics",
    "question": "Which of the following lines can be inserted at line 1 to make the program run?\n//line 1\npublic class TestClass{\npublic static void main(String[] args){\nPrintWriter pw = new PrintWriter(System.out);\nOutputStreamWriter osw = new OutputStreamWriter( System.out );\npw.print(\"hello\");\n}\n}\nAssume that PrintWriter and OutputStreamWriter are valid classes in java.io package.",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "import java.lang.*;"
      },
      {
        "label": "B",
        "text": "import java.io.*;"
      },
      {
        "label": "C",
        "text": "import java.io.OutputStreamWriter;"
      },
      {
        "label": "D",
        "text": "include java.io.*;"
      },
      {
        "label": "E",
        "text": "include java.lang.System;"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": ""
  },
  {
    "id": "2.1233",
    "topic": "Using Loop Constructs",
    "question": "What will the following program print?\nclass Test{\npublic static void main(String args[]){\nint c = 0;\nboolean flag = true;\nfor(int i = 0; i < 3; i++){\nwhile(flag){\nc++;\nif(i>c || c>5) flag = false;\n}\n}\nSystem.out.println(c);\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "3"
      },
      {
        "label": "B",
        "text": "4"
      },
      {
        "label": "C",
        "text": "5"
      },
      {
        "label": "D",
        "text": "6"
      },
      {
        "label": "E",
        "text": "7"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "In the first iteration of for loop, the while loop keeps running till c becomes 6. Now, for all next for loop iteration,\nthe while loop never runs as the flag is false. So final value of c is 6."
  },
  {
    "id": "2.1234",
    "topic": "Working with Inheritance",
    "question": "Consider the following code:\npublic abstract class TestClass{\npublic abstract void m1();\npublic abstract void m2(){\nSystem.out.println(\"hello\");\n}\n}\nWhich of the following corrections can be applied to the above code (independently) so that it compiles without\nany error?",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "Replace the method body of m2() with a ; (semi-colon)."
      },
      {
        "label": "B",
        "text": "Replace the ; at the end of m1() with a method body."
      },
      {
        "label": "C",
        "text": "Remove abstract from m2()."
      },
      {
        "label": "D",
        "text": "Remove abstract from the class declaration."
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "explanation": ""
  },
  {
    "id": "2.1235",
    "topic": "Handling Exceptions",
    "question": "A Java programmer is developing a desktop application. Which of the following exceptions would be appropriate\nfor him to throw explicitly from his code?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "NullPointerException"
      },
      {
        "label": "B",
        "text": "ClassCastException"
      },
      {
        "label": "C",
        "text": "ArrayIndexOutOfBoundsException"
      },
      {
        "label": "D",
        "text": "Exception"
      },
      {
        "label": "E",
        "text": "NoClassDefFoundError"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Observe that all the exceptions given in the options other than Exception and NoClassDefFoundError are\nRuntimeExceptions. These are usually thrown implicitly. A programmer should not throw these exceptions\nexplicitly. java.lang.Exception and its subclasses (except RuntimeException) should be used by the\nprogrammer to reflect known exceptional situations, while RuntimeExceptions are used to reflect unforseen or\nunrecoverable exceptional situations.\nNote: There is no hard and fast rule that says RuntimeExceptions (such as the ones mentioned in this\nquestions) must not be thrown explicitly. It is ok to throw these exceptions explicitly in certain situations. For\nexample, framework/library classes such as Struts, Spring, and Hibernate, and standard JDK classes throw these\nexceptions explicitly. But for the purpose of the exam, it is a good way to determine if a given application should\nbe thrown explicitly by the programmer or not."
  },
  {
    "id": "2.1236",
    "topic": "Handling Exceptions",
    "question": "What will the following program print?\npublic class TestClass{\npublic static void main(String[] args){\nint x = 1;\nint y = 0;\nif( x/y ) System.out.println(\"Good\");\nelse System.out.println(\"Bad\");\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "Good"
      },
      {
        "label": "B",
        "text": "Bad"
      },
      {
        "label": "C",
        "text": "Exception at runtime saying division by Zero."
      },
      {
        "label": "D",
        "text": "It will not compile."
      },
      {
        "label": "E",
        "text": "None of the above."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": ""
  },
  {
    "id": "2.1238",
    "topic": "Using Operators and Decision Constructs",
    "question": "What will the following code print when run without any arguments ...\npublic class TestClass {\npublic static int m1(int i){\nreturn ++i;\n}\npublic static void main(String[] args) {\nint k = m1(args.length);\nk += 3 + ++k;\nSystem.out.println(k);\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It will throw ArrayIndexOutOfBoundsException."
      },
      {
        "label": "B",
        "text": "It will throw NullPointerException."
      },
      {
        "label": "C",
        "text": "6"
      },
      {
        "label": "D",
        "text": "5"
      },
      {
        "label": "E",
        "text": "7"
      },
      {
        "label": "F",
        "text": "2"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "When the program is run without any arguments, args gets assigned a string array of size 0. So\nNullPointerException or ArrayIndexOutOfBoundsException are out of question. Thus, the first call becomes :\nint k = m1(0);\nFollow through the code like this:\n1. Method m1() uses pre-increment operation. Therefore, first i is incremented and then the new value of i is\nreturned.\n2. Thus, k gets the value of 1.\n3. Expand the += operator as:\nk = k + 3 + ++k;\nThis becomes (remember that k = 1 at this point):\nk = 1 + 3 + (++k) i.e.\nk = 1 + 3 + 2; (at this point value of k is 2 because of ++k). But the value of Right Hand Side has not yet been\nassigned to k.\nk = 6; 6 is assigned to k thereby overwriting the value of 2.\nTherefore, the final value of k is 6."
  },
  {
    "id": "2.1239",
    "topic": "Using Operators and Decision Constructs",
    "question": "What letters will be printed by this program?\npublic class ForSwitch{\npublic static void main(String args[]){\nchar i;\nLOOP: for (i=0;i<5;i++){\nswitch(i++){\ncase '0': System.out.println(\"A\");\ncase 1: System.out.println(\"B\"); break LOOP;\ncase 2: System.out.println(\"C\"); break;\ncase 3: System.out.println(\"D\"); break;\ncase 4: System.out.println(\"E\");\ncase 'E' : System.out.println(\"F\");\n}\n}\n}\n}",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "A"
      },
      {
        "label": "B",
        "text": "B"
      },
      {
        "label": "C",
        "text": "C"
      },
      {
        "label": "D",
        "text": "D"
      },
      {
        "label": "E",
        "text": "F"
      }
    ],
    "correctAnswers": [
      "C",
      "E"
    ],
    "explanation": "1. Defining i as char doesn't mean that it can only hold characters (a, b, c etc). It is an integral data type which can\ntake any +ive integer value from 0 to 2^16 -1.\n2. Integer 0 or 1, 2 etc. is not same as char '0', '1' or '2' etc.\nso when i is equal to 0, nothing gets printed and i is incremented to 1 (due to i++ in the switch).\ni is then incremented again by the for loop for next iteration. so i becomes 2.\nwhen i = 2, \"C\" is printed and i is incremented to 3 (due to i++ in the switch) and then i is incremented to 4 by the\nfor loop so i becomes 4.\nwhen i = 4, \"E\" is printed and since there is no break, it falls through to case 'E' and \"F\" is printed.\ni is incremented to 5 (due to i++ in the switch) and then it is again incremented to 6 by the for loop. Since i < 5 is\nnow false, the for loop ends."
  },
  {
    "id": "2.1240",
    "topic": "Using Operators and Decision Constructs",
    "question": "Given:\nbyte b = 1;\nchar c = 1;\nshort s = 1;\nint i = 1;\nwhich of the following expressions are valid?",
    "selectCount": 3,
    "options": [
      {
        "label": "A",
        "text": "s = b * b ;"
      },
      {
        "label": "B",
        "text": "i = b + b ;"
      },
      {
        "label": "C",
        "text": "s *= b ;"
      },
      {
        "label": "D",
        "text": "c = c + b ;"
      },
      {
        "label": "E",
        "text": "s += i ;"
      }
    ],
    "correctAnswers": [
      "B",
      "C",
      "E"
    ],
    "explanation": "Remember these rules for primitive types:\n1. Anything bigger than an int can NEVER be assigned to an int or anything smaller than int ( byte, char, or short)\nwithout explicit cast.\n2. CONSTANT values up to int can be assigned (without cast) to variables of lesser size ( for example, short to\nbyte) if the value is representable by the variable.( that is, if it fits into the size of the variable).\n3. operands of mathematical operators are ALWAYS promoted to AT LEAST int. (i.e. for byte * byte both bytes\nwill be first promoted to int.) and the return value will be AT LEAST int.\n4. Compound assignment operators ( +=, *= etc) have strange ways so read this carefully:\nA compound assignment expression of the form E1 op= E2 is equivalent to E1 = (T)((E1) op (E2)), where T is\nthe type of E1, except that E1 is evaluated only once.\nNote that the implied cast to type T may be either an identity conversion or a narrowing primitive conversion.\nFor example, the following code is correct:\nshort x = 3;\nx += 4.6;\nand results in x having the value 7 because it is equivalent to:\nshort x = 3;\nx = (short)(x + 4.6);"
  },
  {
    "id": "2.1241",
    "topic": "Working with Inheritance - instanceof",
    "question": "Consider :\nclass A {}\nclass B extends A {}\nclass C extends B {}\nWhich of these boolean expressions correctly identifies when an object 'o' actually refers to an object of class B\nand not of C?",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "(o instanceof B) && (!(o instanceof A))"
      },
      {
        "label": "B",
        "text": "!((o instanceof A) || (o instanceof B))"
      },
      {
        "label": "C",
        "text": "(o instanceof B) && (!(o instanceof C))"
      },
      {
        "label": "D",
        "text": "! ( !(o instanceof B) || (o instanceof C))"
      },
      {
        "label": "E",
        "text": "(o instanceof B) && !((o instanceof A) || (o instanceof C))"
      }
    ],
    "correctAnswers": [
      "C",
      "D"
    ],
    "explanation": "The expression (o instanceof B) will return true if the object referred to by o is of type B or a subtype of B.\nThe expression (! (o instanceof C)) will return true unless the object referred to by o is of type C or a\nsubtype of C. Thus, the expression (o instanceof B) && (!(o instanceof C)) will only return true if the\nobject is of type B or a subtype of B that is not C or a subtype of C.\nGiven objects of classes A, B and C, this expression will only return true for objects of class B."
  },
  {
    "id": "2.1242",
    "topic": "Working with Java Data Types",
    "question": "Given:\npublic class TestClass{\npublic static void main(String[] args){\nint i = Integer.parseInt(args[1]);\nSystem.out.println(args[i]);\n}\n}\nWhat will happen when you compile and run the above program using the following command line:\njava TestClass 1 2",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It will print 1"
      },
      {
        "label": "B",
        "text": "It will print 2"
      },
      {
        "label": "C",
        "text": "It will print some junk value."
      },
      {
        "label": "D",
        "text": "It will throw ArrayIndexOutOfBoundsException."
      },
      {
        "label": "E",
        "text": "It will throw NumberFormatException"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "1. Arrays are indexed from 0.\n2. In java, the name of the class is not the first element of args.\nSo, when the command line is : java TestClass 1 2, args[0] is 1 and args[1] is 2.\nWhen you try to access args[2], It will throw an ArrayIndexOutOfBoundsException because the array length is\nonly 2 so args[2] is out of bounds."
  },
  {
    "id": "2.1243",
    "topic": "Working with Java Data Types",
    "question": "Which of the following are correct ways to initialize the static variables MAX and CLASS_GUID ?\nclass Widget{\nstatic int MAX; //1\nstatic final String CLASS_GUID; // 2\nWidget(){\n//3\n}\nWidget(int k){\n//4\n}\n}",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "Modify lines //1 and //2 as : static int MAX = 111; static final String CLASS_GUID = \"XYZ123\";"
      },
      {
        "label": "B",
        "text": "Add the following line just after //2 : static { MAX = 111; CLASS_GUID = \"XYZ123\"; }"
      },
      {
        "label": "C",
        "text": "Add the following line just before //1 : { MAX = 111; CLASS_GUID = \"XYZ123\"; }"
      },
      {
        "label": "D",
        "text": "Add the following line at //3 as well as //4 : MAX = 111; CLASS_GUID = \"XYZ123\";"
      },
      {
        "label": "E",
        "text": "Only option 3 is valid."
      }
    ],
    "correctAnswers": [
      "A",
      "B"
    ],
    "explanation": "The rules are:\n1. static variables can be left without being explicitly initialized. (They will get default values).\n2. final variables must be explicitly initialized.\nNow, here CLASS_GUID is a 'static final' variable and not just final or static. As static fields can be accessed even\nwithout creating an instance of the class, it is entirely possible that this field can be accessed before even a single\ninstance is created. In this case, no constructor or non-static initializer had ever been called. And so, the field (as it\nis final and so must be initialized explicitly) remains uninitialized. This causes the compiler to complain.\nHad CLASS_GUID been just a final variable, option 4 would work but as it is also static, it cannot wait till the\nconstructor executes to be initialized."
  },
  {
    "id": "2.1244",
    "topic": "Creating and Using Arrays",
    "question": "Given the following program, which statements are true?\n// Filename: TestClass.java\npublic class TestClass{\npublic static void main(String args[]){\nA[] a, a1;\nB[] b;\na = new A[10]; a1 = a;\nb = new B[20];\na = b; // 1\nb = (B[]) a; // 2\nb = (B[]) a1; // 3\n}\n}\nclass A { }\nclass B extends A { }",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "Compile time error at line 3."
      },
      {
        "label": "B",
        "text": "The program will throw a java.lang.ClassCastException at the line labelled 2 when run."
      },
      {
        "label": "C",
        "text": "The program will throw a java.lang.ClassCastException at the line labelled 3 when run."
      },
      {
        "label": "D",
        "text": "The program will compile and run if the (B[ ] ) cast in the line 2 and the whole line 3 is removed."
      },
      {
        "label": "E",
        "text": "The cast at line 2 is needed."
      }
    ],
    "correctAnswers": [
      "C",
      "E"
    ],
    "explanation": "The line //1 will be allowed during compilation, since assignment is done from a subclass reference to a superclass\nreference.\nThe cast in line //2 is needed because a superclass reference is assigned to a subclass reference variable. And this\nworks at runtime because the object referenced to by a is actually of an array of B.\nNow, the cast at line //3 tells the compiler not to worry, that I'm a good programmer and I know what I am doing\nand the object referenced by the super class reference (a1) will actually be of class B at run time. So there is no\ncompile time error. But at run time, this fails because the actual object is not an array of B but is an array of A."
  },
  {
    "id": "2.1245",
    "topic": "Using Loop Constructs",
    "question": "Consider the following class :\nclass Test{\npublic static void main(String[] args){\nfor (int i = 0; i < 10; i++) System.out.print(i + \" \"); //1\nfor (int i = 10; i > 0; i--) System.out.print(i + \" \"); //2\nint i = 20; //3\nSystem.out.print(i + \" \"); //4\n}\n}\nWhich of the following statements are true?",
    "selectCount": 4,
    "options": [
      {
        "label": "A",
        "text": "As such, the class will compile and print \"20 \" (without quotes) at the end of its output."
      },
      {
        "label": "B",
        "text": "It will not compile if line 3 is removed."
      },
      {
        "label": "C",
        "text": "It will not compile if line 3 is removed and placed before line 1."
      },
      {
        "label": "D",
        "text": "It will not compile if line 4 is removed and placed before line 3."
      },
      {
        "label": "E",
        "text": "Only Option 2, 3, and 4 are correct."
      }
    ],
    "correctAnswers": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "The scope of a local variable declared in 'for' statement is the rest of the 'for' statement, including its own\ninitializer. So, when line 3 is placed before line 1, there is a redeclaration of i in the first for() which is not legal.\nAs such, the scope of i's declared in for() is just within the 'for' blocks. So placing line 4 before line 3 will not work\nsince 'i' is not in scope there."
  },
  {
    "id": "2.1246",
    "topic": "Working with Java API - String, StringBuilder",
    "question": "What will the following statement return?\n\" hello java guru \".trim();",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "The line of code will not compile."
      },
      {
        "label": "B",
        "text": "\"hellojavaguru\""
      },
      {
        "label": "C",
        "text": "\"hello java guru\""
      },
      {
        "label": "D",
        "text": "\"hello java guru \""
      },
      {
        "label": "E",
        "text": "None of the above"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": ""
  },
  {
    "id": "2.1247",
    "topic": "Working with Java Data Types",
    "question": "Which of these assignments are valid?",
    "selectCount": 3,
    "options": [
      {
        "label": "A",
        "text": "short s = 12 ;"
      },
      {
        "label": "B",
        "text": "long g = 012 ;"
      },
      {
        "label": "C",
        "text": "int i = (int) false;"
      },
      {
        "label": "D",
        "text": "float f = -123;"
      },
      {
        "label": "E",
        "text": "float d = 0 * 1.5;"
      }
    ],
    "correctAnswers": [
      "A",
      "B",
      "D"
    ],
    "explanation": "Note that\nfloat d = 0 * 1.5f; and float d = 0 * (float)1.5 ; are OK\nA narrowing primitive conversion may be used if all of the following conditions are satisfied:\n1. The expression is a constant expression of type int.\n2. The type of the variable is byte, short, or char.\n3. The value of the expression (which is known at compile time, because it is a constant expression) is\nrepresentable in the type of the variable.\nNote that narrowing conversion does not apply to long or double. So, char ch = 30L; will fail even though 30 is\nrepresentable in char."
  },
  {
    "id": "2.1248",
    "topic": "Working with Java API - String, StringBuilder",
    "question": "Which of these are valid expressions to create a string of value \"hello world\" ?",
    "selectCount": 3,
    "options": [
      {
        "label": "A",
        "text": "\" hello world\".trim()"
      },
      {
        "label": "B",
        "text": "(\"hello\" + new String(\"world\"))"
      },
      {
        "label": "C",
        "text": "\"hello\".concat(\" world\")"
      },
      {
        "label": "D",
        "text": "new StringBuilder(\"world\").insert(0, \"hello \").toString();"
      },
      {
        "label": "E",
        "text": "new StringBuilder(\"world\").append(0, \"hello \").toString();"
      },
      {
        "label": "F",
        "text": "new StringBuilder(\"world\").append(\"hello \", 0 , 6).toString();"
      }
    ],
    "correctAnswers": [
      "A",
      "C",
      "D"
    ],
    "explanation": "All the expressions are legal. String literals are String objects and can be used just like any other object."
  },
  {
    "id": "2.1249",
    "topic": "Java Basics",
    "question": "Consider the following class:\npublic class ArgsPrinter{\npublic static void main(String args){\nfor(int i=0; i<3; i++){\nSystem.out.print(args+\" \");\n}\n}\n}\nWhat will be printed when the above class is run using the following command line:\njava ArgsPrinter 1 2 3 4",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "1 2 3"
      },
      {
        "label": "B",
        "text": "ArgsPrinter 1 2"
      },
      {
        "label": "C",
        "text": "java ArgsPrinter 1 2"
      },
      {
        "label": "D",
        "text": "1 1 1"
      },
      {
        "label": "E",
        "text": "None of these."
      }
    ],
    "correctAnswers": [
      "E"
    ],
    "explanation": "To run a class from the command line, you need a main(String[] ) method that takes an array of Strings array\nnot just a String. Therefore, an exception will be thrown at runtime saying no main(String[] ) method found.\nNote that String[] and String... are equivalent and so parameter type of String... is also valid for main\nmethod. When you use String... the compiler allows you to pass any number of String arguments to that\nmethod but internally, compiler converts String... to String[]. It also wraps the arguments into a String[] and\ninvokes the String[] method. The JVM has no idea about String.... It sees only String[]."
  },
  {
    "id": "2.1250",
    "topic": "Working with Inheritance",
    "question": "Which statements, when inserted in the code below, will cause an exception at run time?\nclass B {}\nclass B1 extends B {}\nclass B2 extends B {}\npublic class ExtendsTest{\npublic static void main(String args[]){\nB b = new B();\nB1 b1 = new B1();\nB2 b2 = new B2();\n// insert statement here\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "b = b1;"
      },
      {
        "label": "B",
        "text": "b2 = b;"
      },
      {
        "label": "C",
        "text": "b1 = (B1) b;"
      },
      {
        "label": "D",
        "text": "b2 = (B2) b1;"
      },
      {
        "label": "E",
        "text": "b1 = (B) b1;"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": ""
  },
  {
    "id": "2.1251",
    "topic": "Working with Java Data Types",
    "question": "What will be the result of attempting to compile and run the following code?\npublic class InitClass{\npublic static void main(String args[ ] ){\nInitClass obj = new InitClass(5);\n}\nint m;\nstatic int i1 = 5;\nstatic int i2 ;\nint j = 100;\nint x;\npublic InitClass(int m){\nSystem.out.println(i1 + \" \" + i2 + \" \" + x + \" \" + j + \" \" + m);\n}\n{ j = 30; i2 = 40; } // Instance Initializer\nstatic { i1++; } // Static Initializer\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "The code will fail to compile since the instance initializer tries to assign a value to a static member."
      },
      {
        "label": "B",
        "text": "The code will fail to compile since the member variable x will be uninitialized when it is used."
      },
      {
        "label": "C",
        "text": "The code will compile without error and will print 6 40 0 30 5 when run."
      },
      {
        "label": "D",
        "text": "The code will compile without error and will print 5, 0, 0, 100, 5 when run."
      },
      {
        "label": "E",
        "text": "The code will compile without error and will print 5, 40, 0, 30, 0 when run."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "The value 5 is passed to the constructor to the local (automatic) variable m. So the instance variable m is\nshadowed. Before the body of the constructor is executed, the instance initializer is executed and assigns values 30\nand 40 to variables j and i2, respectively. A class is loaded when it is first used. For example,\nclass A1{\nstatic int i = 10;\nstatic { System.out.println(\"A1 Loaded \"); }\n}\npublic class A{\nstatic { System.out.println(\"A Loaded \"); }\npublic static void main(String[] args){\nSystem.out.println(\" A should have been loaded\");\nA1 a1 = null;\nSystem.out.println(\" A1 should not have been loaded\");\nSystem.out.println(a1.i);\n}\n}\nWhen you run it you get the output:\nA Loaded\nA should have been loaded\nA1 should not have been loaded\nA1 Loaded\n10\nNow, A should be loaded first as you are using its main method. Even though you are doing A1 a1 = null; A1\nwill not be loaded as it is not yet used (so the JVM figures out that it does not need to load it yet.) When you do\na1.i, you are using A1, so before you use it, it must be loaded. That's when A1 is loaded. Finally 10 is printed."
  },
  {
    "id": "2.1252",
    "topic": "Working with Methods",
    "question": "What will be the output when the following program is run?\npublic class TestClass{\nchar c;\npublic void m1(){\nchar[ ] cA = { 'a' , 'b'};\nm2(c, cA);\nSystem.out.println( ( (int)c) + \",\" + cA[1] );\n}\npublic void m2(char c, char[ ] cA){\nc = 'b';\ncA[1] = cA[0] = 'm';\n}\npublic static void main(String args[]){\nnew TestClass().m1();\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "Compile time error."
      },
      {
        "label": "B",
        "text": ",m"
      },
      {
        "label": "C",
        "text": "0,m"
      },
      {
        "label": "D",
        "text": "b,b"
      },
      {
        "label": "E",
        "text": "b,m"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Note that Arrays are Objects (i.e. cA instanceof Object is true) so are effectively passed by reference. So in\nm1() the change in cA[1] done by m2() is reflected everywhere the array is used.\nc is a primitive type and is passed by value. In method m2() the passed parameter c is different than instance\nvariable 'c' as local variable hides the instance variable. So instance member 'c' keeps its default (i.e. 0) value."
  },
  {
    "id": "2.1253",
    "topic": "Working with Inheritance",
    "question": "Where, in a constructor, can you place a call to a super class's constructor ?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "Anywhere in the constructor's body."
      },
      {
        "label": "B",
        "text": "As the first statement in the constructor."
      },
      {
        "label": "C",
        "text": "Only as the first statement and it can be called just like any other method call i.e. ClassName( ... )."
      },
      {
        "label": "D",
        "text": "You can't call super class's constructor in a base class as constructors are not inherited."
      },
      {
        "label": "E",
        "text": "None of the above."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "A constructor of a class is meant to initialize the instance of that class. It is an opportunity for the programmer to\nmake the instance ready for use by others. Therefore, when you create an object of a class using the new keyword,\nthe JVM invokes that class's constructor as per the supplied arguments. It is so important that if you don't have any\nthing that you want to do to the instance and decide to not write a constructor, the compiler automatically creates\none constructor for that class.\nRemember that an instance of a class is also an instance of its super class. Therefore, the fields of its super class\nneed to be initialized as well. Now, observe that a sub class is always aware of its super class and so it can make\nuse of the fields of its super class (depending on accessibility) but a super class has no knowledge of its subclasses.\nTherefore, the fields defined by the super class must be initialized before the fields of the subclass can be\ninitialized because a subclass constructor may utilize the fields of the super class. This means that a super class\nconstructor must execute before a sub class constructor. This logic applies to all the super classes in the chain right\nup to java.lang.Object class, since Object class is the root class of all objects. Obviously then, the Object class's\nconstructor must be the first one to execute.\nThe compiler ensures this order of execution of constructors by checking that each constructor of a class first calls\neither a constructor of its super class or another constructor of the same class. If a constructor of a class doesn't\nexplicitly do that (i.e. it neither calls super class's constructor nor calls another one of its own constructors as the\nfirst thing), the compiler automatically inserts a call to the default no-args constructor of the super class. This is\nsame as writing super(); as the first statement in the constructor of the class.\nNow, what if the super class doesn't have a no-args constructor? Obviously, the automatic call to super(); inserted\nby the compiler will fail and therefore, the sub class code will fail to compile."
  },
  {
    "id": "2.1254",
    "topic": "Handling Exceptions",
    "question": "What will the following code print when run?\npublic class Test{\nstatic String j = \"\";\npublic static void method( int i){\ntry{\nif(i == 2){\nthrow new Exception();\n}\nj += \"1\";\n}\ncatch (Exception e){\nj += \"2\";\nreturn;\n}\nfinally{\nj += \"3\";\n}\nj += \"4\";\n}\npublic static void main(String args[]){\nmethod(1);\nmethod(2);\nSystem.out.println(j);\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "13432"
      },
      {
        "label": "B",
        "text": "13423"
      },
      {
        "label": "C",
        "text": "14324"
      },
      {
        "label": "D",
        "text": "12434"
      },
      {
        "label": "E",
        "text": "12342"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Try to follow the flow of control :\n1. in method(1) : i is not 2 so, j gets \"1\" then finally is executed which makes j = \"13\" and then the last statement (j\n+=4) is executed which makes j = \"134\".\n2. in method(2) : i is 2, so it goes in the if block which throws an exception. So none of the statements of try block\nare executed and control goes to catch which makes j = \"1342\", then finally makes j = \"13423\" and the control is\nreturned. Note that the last statement ( j+=4) is not executed as there was an exception thrown in the try block,\nwhich cause the control to go to the catch block, which in turn has a return."
  },
  {
    "id": "2.1255",
    "topic": "Handling Exceptions",
    "question": "What will be the result of attempting to compile and run the following program?\nclass TestClass{\npublic static void main(String args[]){\nint i = 0;\nloop : // 1\n{\nSystem.out.println(\"Loop Lable line\");\ntry{\nfor ( ; true ; i++ ){\nif( i >5) break loop; // 2\n}\n}\ncatch(Exception e){\nSystem.out.println(\"Exception in loop.\");\n}\nfinally{\nSystem.out.println(\"In Finally\"); // 3\n}\n}\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "Compilation error at line 1 as this is an invalid syntax for defining a label."
      },
      {
        "label": "B",
        "text": "Compilation error at line 2 as 'loop' is not visible here."
      },
      {
        "label": "C",
        "text": "No compilation error and line 3 will be executed."
      },
      {
        "label": "D",
        "text": "No compilation error and line 3 will NOT be executed."
      },
      {
        "label": "E",
        "text": "Only the line with the label loop will be printed."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "A break without a label breaks the current loop (i.e. no iterations any more) and a break with a label tries to pass\nthe control to the given label.\n'Tries to' means that if the break is in a try block and the try block has a finally clause associated with it then it will\nbe executed."
  },
  {
    "id": "2.1256",
    "topic": "Working with Inheritance",
    "question": "Which of these statements are true?",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "A super( <appropriate list of arguments> ) or this( <appropriate list of arguments> ) call must always be provided explicitly as the first statement in the body of the constructor."
      },
      {
        "label": "B",
        "text": "If a subclass does not have any declared constructors, the implicit default constructor of the subclass will have a\ncall to super( )."
      },
      {
        "label": "C",
        "text": "If neither super( ) or this( ) is declared as the first statement of the body of a constructor, then this( ) will implicitly be inserted as the first statement."
      },
      {
        "label": "D",
        "text": "super(<appropriate list of arguments>) can only be called in the first line of the constructor but this(<appropriate list of arguments>) can be called from anywhere."
      },
      {
        "label": "E",
        "text": "You can either call super(<appropriate list of arguments>) or this(<appropriate list of\narguments>) but not both from a constructor."
      }
    ],
    "correctAnswers": [
      "B",
      "E"
    ],
    "explanation": "Note that calling super(); will not always work because if the super class has defined a constructor with\narguments and has not defined a no args constructor then no args constructor will not be provided by the compiler.\nIt is provided only to the class that does not define ANY constructor explicitly."
  },
  {
    "id": "2.1257",
    "topic": "Using Operators and Decision Constructs",
    "question": "Which of the following statements concerning the switch construct are true?",
    "selectCount": 3,
    "options": [
      {
        "label": "A",
        "text": "A character literal can be used as a value for a case label."
      },
      {
        "label": "B",
        "text": "A 'long' cannot be used as a switch variable."
      },
      {
        "label": "C",
        "text": "An empty switch block is a valid construct."
      },
      {
        "label": "D",
        "text": "A switch block must have a default label."
      },
      {
        "label": "E",
        "text": "If present, the default label must be the last of all the labels."
      }
    ],
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "explanation": "Here are the rules for a switch statement:\n1. Only String, byte, char, short, int, (and their wrapper classes Byte, Character, Short, and Integer), and enums can\nbe used as types of a switch variable. (String is allowed only since Java 7).\n2. The case constants must be assignable to the switch variable. For example, if your switch variable is of class\nString, your case labels must use Strings as well.\n3. The switch variable must be big enough to hold all the case constants. For example, if the switch variable is of\ntype char, then none of the case constants can be greater than 65535 because a char's range is from 0 to 65535.\n4. All case labels should be COMPILE TIME CONSTANTS.\n5. No two of the case constant expressions associated with a switch statement may have the same value.\n6. At most one default label may be associated with the same switch statement."
  },
  {
    "id": "2.1258",
    "topic": "Using Operators and Decision Constructs",
    "question": "Consider the following code:\nclass Test{\npublic static void main(String[] args){\nfor (int i = 0; i < args.length; i++) System.out.print(i == 0 ? args[i] : \" \" + args[i]);\n}\n}\nWhat will be the output when it is run using the following command:\njava Test good bye friend!",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "good bye friend!"
      },
      {
        "label": "B",
        "text": "good good good"
      },
      {
        "label": "C",
        "text": "goodgoodgood"
      },
      {
        "label": "D",
        "text": "good bye"
      },
      {
        "label": "E",
        "text": "None of the above."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "The arguments passed on the command line can be accessed using the args array. The first argument (i.e. good) is\nstored in args[0], second argument (i.e. bye) is stored in args[1] and so on.\nHere, we are passing 3 arguments. Therefore, args.length is 3 and the for loop will run 3 times. For the first\niteration, i is 0 and so the first operand of the ternary operator (?) will be returned, which is args[i]. For the next\ntwo iterations, \" \"+args[i] will be returned. Hence, the program will print three strings: \"good\", \" bye\", and \"\nfriend!\" on the same line.\nNote that unlike in C++, program name is not the first parameter in the argument list. Java does not need to know\nthe program name because the .class file name and the java class name are always same (for a public class). So the\njava code always knows the program name it is running in. So there is no need to pass the program name as the\nfirst parameter of the argument list. In C/C++, the binary file name may be anything so the code does not know\nwhat binary file it is going to end up in. That's why the program name is also sent (automatically) in parameter list."
  },
  {
    "id": "2.1259",
    "topic": "Working with Java Data Types",
    "question": "Note: Although Wrapper classes are not explicitly mentioned in the exam objectives, we have seen some\ncandidates get questions on this aspect of Wrapper classes.\nWhat will be the output of the following program?\npublic class EqualTest{\npublic static void main(String args[]){\nInteger i = new Integer(1) ;\nLong m = new Long(1);\nif( i.equals(m)) System.out.println(\"equal\"); // 1\nelse System.out.println(\"not equal\");\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "equal"
      },
      {
        "label": "B",
        "text": "not equal"
      },
      {
        "label": "C",
        "text": "Compile time error at //1"
      },
      {
        "label": "D",
        "text": "Runtime error at //1"
      },
      {
        "label": "E",
        "text": "None of the above."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Signature of equals method is : boolean equals(Object o); So it can take any object.\nThe equals methods of all wrapper classes first check if the two object are of same class or not. If not, they\nimmediately return false. Hence it will print not equal."
  },
  {
    "id": "2.1260",
    "topic": "Handling Exceptions",
    "question": "What will be the output of the following class.\nclass Test{\npublic static void main(String[] args){\nint j = 1;\ntry{\nint i = doIt() / (j = 2);\n} catch (Exception e){\nSystem.out.println(\" j = \" + j);\n}\n}\npublic static int doIt() throws Exception { throw new Exception(\"FORGET IT\"); }\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It will print j = 1;"
      },
      {
        "label": "B",
        "text": "It will print j = 2;"
      },
      {
        "label": "C",
        "text": "The value of j cannot be determined."
      },
      {
        "label": "D",
        "text": "It will not compile."
      },
      {
        "label": "E",
        "text": "None of the above."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "If evaluation of the left-hand operand of a binary operator completes abruptly, no part of the right-hand operand\nappears to have been evaluated.\nSo, as doIt() throws exception, j = 2 never gets executed."
  },
  {
    "id": "2.1261",
    "topic": "Working with Inheritance",
    "question": "Consider the following code:\npublic class SubClass extends SuperClass{\nint i, j, k;\npublic SubClass( int m, int n ) { i = m ; j = m ; } //1\npublic SubClass( int m ) { super(m ); } //2\n}\nWhich of the following constructors MUST exist in SuperClass for SubClass to compile correctly?",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "It is ok even if no explicit constructor is defined in SuperClass."
      },
      {
        "label": "B",
        "text": "public SuperClass(int a, int b)"
      },
      {
        "label": "C",
        "text": "public SuperClass(int a)"
      },
      {
        "label": "D",
        "text": "public SuperClass()"
      },
      {
        "label": "E",
        "text": "only public SuperClass(int a) is required."
      }
    ],
    "correctAnswers": [
      "C",
      "D"
    ],
    "explanation": ""
  },
  {
    "id": "2.1262",
    "topic": "Creating and Using Arrays",
    "question": "Consider the following code snippet ...\nboolean[] b1 = new boolean[2];\nboolean[] b2 = {true , false};\nSystem.out.println( \"\" + (b1[0] == b2[0]) + \", \"+ (b1[1] == b2[1]) );\nWhat will it print ?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It will not compile."
      },
      {
        "label": "B",
        "text": "It will throw ArrayIndexOutOfBoundsError at Runtime."
      },
      {
        "label": "C",
        "text": "false, true"
      },
      {
        "label": "D",
        "text": "true, false"
      },
      {
        "label": "E",
        "text": "It will print false, false."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Note that whenever you create an array all of its elements are automatically given defaults values. Numeric types\nare initialized to 0, objects are initialized to null, and booleans to false.\nSo if you have, float[ ] f = new float[3]; f[0], f[1] and f[2] will all be 0.0.\nif you have Object[ ] o = new String[3]; o[0], o[1] and o[2] will all be null.\nIn this case, b1[0] and b1[1] are false.\nwhereas b2[0] and b2[1] are true and false.\nSo the answer is false and true."
  },
  {
    "id": "2.1264",
    "topic": "Working with Java API - ArrayList",
    "question": "What sequence of characters will the following program print?\nimport java.util.* ;\npublic class ListTest{\npublic static void main(String args[]){\nList s1 = new ArrayList( );\ns1.add(\"a\");\ns1.add(\"b\");\ns1.add(1, \"c\");\nList s2 = new ArrayList( s1.subList(1, 1) );\ns1.addAll(s2);\nSystem.out.println(s1);\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "The sequence a, b, c is printed."
      },
      {
        "label": "B",
        "text": "The sequence a, b, c, b is printed."
      },
      {
        "label": "C",
        "text": "The sequence a, c, b, c is printed."
      },
      {
        "label": "D",
        "text": "The sequence a, c, b is printed."
      },
      {
        "label": "E",
        "text": "None of the above."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "First, \"a\" and \"b\" are appended to an empty list. Next, \"c\" is added between \"a\" and \"b\".\nThen a new list s2 is created using the sublist view allowing access to elements from index 1 to index 1(exclusive)\n(i.e. no elements ).\nNow, s2 is added to s1.\nSo s1 remains :a, c, b"
  },
  {
    "id": "2.1265",
    "topic": "Using Loop Constructs",
    "question": "What will the following program print?\nclass Test{\npublic static void main(String args[]){\nint i=0, j=0;\nX1: for(i = 0; i < 3; i++){\nX2: for(j = 3; j > 0; j--){\nif(i < j) continue X1;\nelse break X2;\n}\n}\nSystem.out.println(i+\" \"+j);\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "0 3"
      },
      {
        "label": "B",
        "text": "0 2"
      },
      {
        "label": "C",
        "text": "3 0"
      },
      {
        "label": "D",
        "text": "3 3"
      },
      {
        "label": "E",
        "text": "2 2"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "The statement: if(i < j) continue X1; else break X2; only makes sure that the inner loop does not iterate\nmore than once. i.e. for each iteration of i, j only takes the value of 3 and then the j loop terminates, either because\nof continue X1; or because of break X2;.\nNow, the point to remember here is that when the loop for(i = 0; i < 3; i++) ends, the value of i is 3 and not\n2.\nSimilarly, if there were no statement inside inner loop, the value of j after the end of the loop would have been 0\nand not 1."
  },
  {
    "id": "2.1266",
    "topic": "Using Operators and Decision Constructs",
    "question": "Which of the following statements are true?",
    "selectCount": 3,
    "options": [
      {
        "label": "A",
        "text": "The condition expression in an if statement can contain method calls."
      },
      {
        "label": "B",
        "text": "If a and b are of type boolean, the expression (a = b) can be used as the condition expression of an if statement."
      },
      {
        "label": "C",
        "text": "An if statement can have either an 'if' clause or an 'else' clause."
      },
      {
        "label": "D",
        "text": "The statement : if (false) ; else ; is illegal."
      },
      {
        "label": "E",
        "text": "Only expressions which evaluate to a boolean value can be used as the condition in an if statement."
      }
    ],
    "correctAnswers": [
      "A",
      "B",
      "E"
    ],
    "explanation": "The expression (a = b) does not compare the variables a and b, but rather assigns the value of b to the variable a.\nThe result of the expression is the value being assigned. Since a and b are boolean variables, the value returned by\nthe expression is also boolean. This allows the expressions to be used as the condition for an if-statement.\nif-clause and the else-clause can have empty statements. Empty statement ( i.e. just ; ) is a valid statement.\nBut this is illegal :\nif (true) else;\nbecause the if part doesn't contain any valid statement. ( A statement cannot start with an else!)\nSo, the following is valid.\nif(true) if(false);\nbecause if(false); is a valid statement."
  },
  {
    "id": "2.1267",
    "topic": "Using Operators and Decision Constructs",
    "question": "Which of the following implementations of a max() method will correctly return the largest value?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "int max(int x, int y){\nreturn( if(x > y){ x; } else{ y; } );\n}"
      },
      {
        "label": "B",
        "text": "int max(int x, int y){\nreturn( if(x > y){ return x; } else{ return y; } );\n}"
      },
      {
        "label": "C",
        "text": "int max(int x, int y){\nswitch(x < y){\ncase true:\nreturn y;\ndefault :\nreturn x;\n};\n}"
      },
      {
        "label": "D",
        "text": "int max(int x, int y){\nif (x > y) return x;\nreturn y;\n}"
      },
      {
        "label": "E",
        "text": "None of the above."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": ""
  },
  {
    "id": "2.1268",
    "topic": "Using Loop Constructs",
    "question": "Which of these for statements are valid?\n1. for (int i=5; i=0; i--) { }\n2. int j=5;\nfor(int i=0, j+=5; i<j ; i++) { j--; }\n3. int i, j;\nfor (j=10; i<j; j--) { i += 2; }\n4. int i=10;\nfor ( ; i>0 ; i--) { }\n5. for (int i=0, j=10; i<j; i++, --j) {;}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "1, 2"
      },
      {
        "label": "B",
        "text": "3, 4"
      },
      {
        "label": "C",
        "text": "1, 5"
      },
      {
        "label": "D",
        "text": "4, 5"
      },
      {
        "label": "E",
        "text": "5"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "No 1.\nuses '=' instead of '==' for condition which is invalid. The loop condition must be of type boolean.\nNo 2.\nuses 'j +=5'. Now, this statement is preceded by 'int i=0,' and that means we are trying to declare variable j. But it is\nalready declared before the for loop. If we remove the int in the initialization part and declare i before the loop\nthen it will work. But if we remove the statement int j = 5; it will not work because compiler will try to do j = j+5\nand you can't use the variable before it is initialized. Although the compiler gives a message 'Invalid declaration'\nfor j += 5, it really means the above mentioned thing.\nNo 3. i is uninitialized.\nNo 4. is valid. It contains empty initialization part.\nNo 5.\nThis is perfectly valid. You can have any number of comma separated statements in initialization and\nincrementation part. The condition part must contain a single expression that returns a boolean.\nAll a for loop needs is two semi colons :-\nfor( ; ; ) {} This is a valid for loop that never ends. A more concise form for the same is : for( ; ; );"
  },
  {
    "id": "2.1269",
    "topic": "Using Operators and Decision Constructs",
    "question": "Which of the following will not give any error at compile time and run time?",
    "selectCount": 4,
    "options": [
      {
        "label": "A",
        "text": "if (8 == 81) {}"
      },
      {
        "label": "B",
        "text": "if (x = 3) {} // assume that x is an int"
      },
      {
        "label": "C",
        "text": "if (true) {}"
      },
      {
        "label": "D",
        "text": "if (bool = false) {} //assume that bool is declared as a boolean"
      },
      {
        "label": "E",
        "text": "if (x == 10 ? true:false) { } // assume that x is an int"
      }
    ],
    "correctAnswers": [
      "A",
      "C",
      "D",
      "E"
    ],
    "explanation": "All an if(...) needs is a boolean.\nx = 3 is not valid because the return value of this expression is 3 which is not a boolean."
  },
  {
    "id": "2.1270",
    "topic": "Using Loop Constructs",
    "question": "What will be the result of attempting to compile and run the following program?\nclass TestClass{\npublic static void main(String args[]){\nboolean b = false;\nint i = 1;\ndo{\ni++ ;\n} while (b = !b);\nSystem.out.println( i );\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "The code will fail to compile, 'while' has an invalid condition expression."
      },
      {
        "label": "B",
        "text": "It will compile but will throw an exception at runtime."
      },
      {
        "label": "C",
        "text": "It will print 3."
      },
      {
        "label": "D",
        "text": "It will go in an infinite loop."
      },
      {
        "label": "E",
        "text": "It will print 1."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Unlike the 'while(){}' loop, the 'do {} while()' loop executes at least once because the condition is checked after\nthe iteration."
  },
  {
    "id": "2.1271",
    "topic": "Using Operators and Decision Constructs",
    "question": "What will be the result of attempting to compile and run the following code?\npublic class PromotionTest{\npublic static void main(String args[]){\nint i = 5;\nfloat f = 5.5f;\ndouble d = 3.8;\nchar c = 'a';\nif (i == f) c++;\nif (((int) (f + d)) == ((int) f + (int) d)) c += 2;\nSystem.out.println(c);\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "The code will fail to compile."
      },
      {
        "label": "B",
        "text": "It will print d."
      },
      {
        "label": "C",
        "text": "It will print c."
      },
      {
        "label": "D",
        "text": "It will print b"
      },
      {
        "label": "E",
        "text": "It will print a."
      }
    ],
    "correctAnswers": [
      "E"
    ],
    "explanation": "In the case of i == f, value of i will be promoted to a float i.e. 5.0, and so it returns false.\n(int)f+(int)d = (int)5.5 + (int) 3.8 => 5 + 3 = 8\n(int)(f + d) => (int) (5.5 + 3.8) => (int)(9.3) => 9, so this also return false.\nSo, c is not incremented at all. Hence c remains 'a'."
  },
  {
    "id": "2.1272",
    "topic": "Working with Java Data Types",
    "question": "Which of these are NOT legal declarations within a class?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "static int sa ;"
      },
      {
        "label": "B",
        "text": "final Object[ ] objArr = { null } ;"
      },
      {
        "label": "C",
        "text": "abstract int t ;"
      },
      {
        "label": "D",
        "text": "abstract void format( ) ;"
      },
      {
        "label": "E",
        "text": "final static private double PI = 3.14159265358979323846 ;"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "static and final are valid modifiers for both member field and method declarations within a class.\ntransient and volatile modifiers are only valid for member field declarations.\nabstract and native are only valid for member methods.\nNote: a class declaration can have only final, abstract and public as modifiers, unless it is a nested class, in\nwhich case, it can be declared private or protected as well.\nWithin a method, a local variable may be declared as final."
  },
  {
    "id": "2.1273",
    "topic": "Working with Inheritance",
    "question": "What will be the result of attempting to compile and run the following program?\npublic class TestClass{\npublic static void main(String args[ ] ){\nA o1 = new C( );\nB o2 = (B) o1;\nSystem.out.println(o1.m1( ) );\nSystem.out.println(o2.i );\n}\n}\nclass A { int i = 10; int m1( ) { return i; } }\nclass B extends A { int i = 20; int m1() { return i; } }\nclass C extends B { int i = 30; int m1() { return i; } }",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "The program will fail to compile."
      },
      {
        "label": "B",
        "text": "Class cast exception at runtime."
      },
      {
        "label": "C",
        "text": "It will print 30, 20."
      },
      {
        "label": "D",
        "text": "It will print 30, 30."
      },
      {
        "label": "E",
        "text": "It will print 20, 20."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Remember : variables are SHADOWED and methods are OVERRIDDEN.\nWhich variable will be used depends on the class that the variable is declared of.\nWhich method will be used depends on the actual class of the object that is referenced by the variable.\nSo, in line o1.m1(), the actual class of the object is C, so C's m1() will be used. So it returns 30.\nIn line o2.i, o2 is declared to be of class B, so B's i is used. So it returns 20."
  },
  {
    "id": "2.1274",
    "topic": "Working with Java API - String, StringBuilder",
    "question": "What will be the result of attempting to compile and run the following code?\nclass TestClass{\npublic static void main(String args[] ){\nString str1 = \"str1\";\nString str2 = \"str2\";\nSystem.out.println( str1.concat(str2) );\nSystem.out.println(str1);\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "The code will fail to compile."
      },
      {
        "label": "B",
        "text": "The program will print str1 and str1."
      },
      {
        "label": "C",
        "text": "The program will print str1 and str1str2"
      },
      {
        "label": "D",
        "text": "The program will print str1str2 and str1"
      },
      {
        "label": "E",
        "text": "The program will print str1str2 and str1str2."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Note that String objects are immutable. No matter what operation you do, the original object will remain the same\nand a new object will be returned. Here, the statement str1.concat(str2) creates a new String object which is printed\nbut its reference is lost after the printing."
  },
  {
    "id": "2.1275",
    "topic": "Working with Methods",
    "question": "How can you declare 'i' so that it is not visible outside the package test.\npackage test;\npublic class Test{\nXXX int i;\n/* irrelevant code */\n}",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "private"
      },
      {
        "label": "B",
        "text": "public"
      },
      {
        "label": "C",
        "text": "protected"
      },
      {
        "label": "D",
        "text": "No access modifier"
      },
      {
        "label": "E",
        "text": "friend"
      }
    ],
    "correctAnswers": [
      "A",
      "D"
    ],
    "explanation": ""
  },
  {
    "id": "2.1276",
    "topic": "Handling Exceptions",
    "question": "What is wrong with the following code?\nclass MyException extends Exception {}\npublic class TestClass{\npublic static void main(String[] args){\nTestClass tc = new TestClass();\ntry{\ntc.m1();\n}\ncatch (MyException e){\ntc.m1();\n}\nfinally{\ntc.m2();\n}\n}\npublic void m1() throws MyException{\nthrow new MyException();\n}\npublic void m2() throws RuntimeException{\nthrow new NullPointerException();\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It will not compile because you cannot throw an exception in finally block."
      },
      {
        "label": "B",
        "text": "It will not compile because you cannot throw an exception in catch block."
      },
      {
        "label": "C",
        "text": "It will not compile because NullPointerException cannot be created this way."
      },
      {
        "label": "D",
        "text": "It will not compile because of unhandled exception."
      },
      {
        "label": "E",
        "text": "It will compile but will throw an exception when run."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "The catch block is throwing a checked exception (i.e. non-RuntimeException) which must be handled by either a\ntry catch block or declared in the throws clause of the enclosing method.\nNote that finally is also throwing an exception here, but it is a RuntimeException so there is no need to handle it or\ndeclare it in the throws clause."
  },
  {
    "id": "2.1277",
    "topic": "Using Operators and Decision Constructs",
    "question": "Which of the following statements are true?",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "System.out.println(1 + 2 + \"3\"); would print 33."
      },
      {
        "label": "B",
        "text": "System.out.println(\"1\" + 2 + 3); would print 15."
      },
      {
        "label": "C",
        "text": "System.out.println(4 + 1.0f); would print 5.0"
      },
      {
        "label": "D",
        "text": "System.out.println(5/4); would print 1.25"
      },
      {
        "label": "E",
        "text": "System.out.println('a' + 1 ); would print b."
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "explanation": "All operands of type byte, char or short are promoted AT LEAST to an int before performing mathematical\noperations. If one of the operands is larger than an int then the other one is promoted to the same type.\nNote that System.out.println((float)5/4); will print 1.25. If you remove the explicit cast (float), it will print\n1."
  },
  {
    "id": "2.1278",
    "topic": "Using Operators and Decision Constructs",
    "question": "Which of the following four constructs are valid?\n1.\nswitch(5)\n{\ndefault :\n}\n2.\nswitch(5)\n{\ndefault : break;\n}\n3.\nswitch(8);\n4.\nint x = 0;\nswitch(x){\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "1, 3"
      },
      {
        "label": "B",
        "text": "1, 2, 3"
      },
      {
        "label": "C",
        "text": "3, 4"
      },
      {
        "label": "D",
        "text": "1, 2, 4"
      },
      {
        "label": "E",
        "text": "All are valid."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Here are the rules for a switch statement:\n1. Only String, byte, char, short, int, (and their wrapper classes Byte, Character, Short, and Integer), and enums can\nbe used as types of a switch variable. (String is allowed only since Java 7).\n2. The case constants must be assignable to the switch variable. For example, if your switch variable is of class\nString, your case labels must use Strings as well.\n3. The switch variable must be big enough to hold all the case constants. For example, if the switch variable is of\ntype char, then none of the case constants can be greater than 65535 because a char's range is from 0 to 65535.\n4. All case labels should be COMPILE TIME CONSTANTS.\n5. No two of the case constant expressions associated with a switch statement may have the same value.\n6. At most one default label may be associated with the same switch statement."
  },
  {
    "id": "2.1279",
    "topic": "Using Loop Constructs",
    "question": "Which of the following code snippets will compile without any errors?\n(Assume that the statement int x = 0; exists prior to the statements below.)",
    "selectCount": 3,
    "options": [
      {
        "label": "A",
        "text": "while (false) { x=3; }"
      },
      {
        "label": "B",
        "text": "if (false) { x=3; }"
      },
      {
        "label": "C",
        "text": "do{ x = 3; } while(false);"
      },
      {
        "label": "D",
        "text": "for( int i = 0; i< 0; i++) x = 3;"
      }
    ],
    "correctAnswers": [
      "B",
      "C",
      "D"
    ],
    "explanation": "while (false) { x=3; } is a compile-time error because the statement x=3; is not reachable;\nSimilarly, for( int i = 0; false; i++) x = 3; is also a compile time error because x= 3 is unreachable.\nIn if(false){ x=3; }, although the body of the condition is unreachable, this is not an error because the JLS\nexplicitly defines this as an exception to the rule. It allows this construct to support optimizations through the\nconditional compilation. For example,\nif(DEBUG){ System.out.println(\"beginning task 1\"); }\nHere, the DEBUG variable can be set to false in the code while generating the production version of the class file,\nwhich will allow the compiler to optimize the code by removing the whole if statement entirely from the class file."
  },
  {
    "id": "2.1280",
    "topic": "Using Loop Constructs",
    "question": "In the following code what will be the output if 0 (integer value zero) is passed to loopTest()?\npublic class TestClass{\npublic void loopTest(int x){\nloop: for (int i = 1; i < 5; i++){\nfor (int j = 1; j < 5; j++){\nSystem.out.println(i);\nif (x == 0) { continue loop; }\nSystem.out.println(j);\n}\n}\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "The program will not compile."
      },
      {
        "label": "B",
        "text": "It will print 1 2 3 4"
      },
      {
        "label": "C",
        "text": "It will print 1 1 2 3 4"
      },
      {
        "label": "D",
        "text": "It will print 1 1 2 2 3 3 4 4"
      },
      {
        "label": "E",
        "text": "Produces no output"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "When x is 0, the statement continue loop; is executed. Note that loop: is for the outer loop. So, only one iteration\n(that too not full) is performed for the inner loop.\nSo, the inner loop prints the value of i only once and then next iteration of outer loop starts. 'j' is never printed. So,\nit prints 1 2 3 4."
  },
  {
    "id": "2.1281",
    "topic": "Using Loop Constructs",
    "question": "Which of the following statements regarding 'break' and 'continue' are true?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "break without a label, can occur only in a switch, while, do, or for statement."
      },
      {
        "label": "B",
        "text": "continue without a label, can occur only in a switch, while, do, or for statement."
      },
      {
        "label": "C",
        "text": "break can never occur without a label."
      },
      {
        "label": "D",
        "text": "continue can never occur WITH a label."
      },
      {
        "label": "E",
        "text": "None of the above."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "A break statement with no label attempts to transfer control to the innermost enclosing switch, while, do, or for\nstatement; this statement, which is called the break target, then immediately completes normally. If no switch,\nwhile, do, or for statement encloses the break statement, a compile-time error occurs.\nA break statement with label Identifier attempts to transfer control to the enclosing labeled statement that has the\nsame Identifier as its label; this statement, which is called the break target, then immediately completes normally.\nIn this case, the break target need not be a while, do, for, or switch statement.\nA continue statement with no label attempts to transfer control to the innermost enclosing while, do, or for\nstatement; this statement, which is called the continue target, then immediately ends the current iteration and\nbegins a new one. If no while, do, or for statement encloses the continue statement, a compile-time error occurs.\nA continue statement with label Identifier attempts to transfer control to the enclosing labelled statement that has\nthe same Identifier as its label; that statement, which is called the continue target, then immediately ends the\ncurrent iteration and begins a new one. The continue target must be a while, do, or for statement or a compile-time\nerror occurs. If no labelled statement with Identifier as its label contains the continue statement, a compile-time\nerror occurs."
  },
  {
    "id": "2.1282",
    "topic": "Using Operators and Decision Constructs",
    "question": "What, if anything, is wrong with the following code?\nvoid test(int x){\nswitch(x){\ncase 1:\ncase 2:\ncase 0:\ndefault :\ncase 4:\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "Data Type of 'x' is not valid to be used as an expression for the switch clause."
      },
      {
        "label": "B",
        "text": "The case label 0 must precede case label 1."
      },
      {
        "label": "C",
        "text": "Each case section must end with a break keyword."
      },
      {
        "label": "D",
        "text": "The default label must be the last label in the switch statement."
      },
      {
        "label": "E",
        "text": "There is nothing wrong with the code."
      }
    ],
    "correctAnswers": [
      "E"
    ],
    "explanation": "Here are the rules for a switch statement:\n1. Only String, byte, char, short, int, (and their wrapper classes Byte, Character, Short, and Integer), and enums can\nbe used as types of a switch variable. (String is allowed only since Java 7).\n2. The case constants must be assignable to the switch variable. For example, if your switch variable is of class\nString, your case labels must use Strings as well.\n3. The switch variable must be big enough to hold all the case constants. For example, if the switch variable is of\ntype char, then none of the case constants can be greater than 65535 because a char's range is from 0 to 65535.\n4. All case labels should be COMPILE TIME CONSTANTS.\n5. No two of the case constant expressions associated with a switch statement may have the same value.\n6. At most one default label may be associated with the same switch statement."
  },
  {
    "id": "2.1283",
    "topic": "Working with Methods",
    "question": "What is the correct declaration for an abstract method 'add' in a class that is accessible to any class, takes no\narguments and returns nothing?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "public void add();"
      },
      {
        "label": "B",
        "text": "abstract add();"
      },
      {
        "label": "C",
        "text": "abstract null add();"
      },
      {
        "label": "D",
        "text": "abstract public void add(){ }"
      },
      {
        "label": "E",
        "text": "abstract public void add() throws Exception;"
      }
    ],
    "correctAnswers": [
      "E"
    ],
    "explanation": ""
  },
  {
    "id": "2.1284",
    "topic": "Working with Java API - String, StringBuilder",
    "question": "What will the following class print when run?\npublic class Sample{\npublic static void main(String[] args) {\nString s1 = new String(\"java\");\nStringBuilder s2 = new StringBuilder(\"java\");\nreplaceString(s1);\nreplaceStringBuilder(s2);\nSystem.out.println(s1 + s2);\n}\nstatic void replaceString(String s) {\ns = s.replace('j', 'l');\n}\nstatic void replaceStringBuilder(StringBuilder s) {\ns.append(\"c\");\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "javajava"
      },
      {
        "label": "B",
        "text": "lavajava"
      },
      {
        "label": "C",
        "text": "javajavac"
      },
      {
        "label": "D",
        "text": "lavajavac"
      },
      {
        "label": "E",
        "text": "None of these."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "String is immutable while StringBuilder is not. So no matter what you do in replaceString() method, the original\nString that was passed to it will not change. On the other hand, StringBuilder methods, such as replace or append,\nchange the StringBuilder itself. So, 'c' is appended to java in replaceStringBuilder() method."
  },
  {
    "id": "2.1285",
    "topic": "Working with Java API - String, StringBuilder",
    "question": "Which of the following operators can be used in conjunction with a String object?",
    "selectCount": 3,
    "options": [
      {
        "label": "A",
        "text": "+"
      },
      {
        "label": "B",
        "text": "++"
      },
      {
        "label": "C",
        "text": "+="
      },
      {
        "label": "D",
        "text": "."
      },
      {
        "label": "E",
        "text": "*"
      }
    ],
    "correctAnswers": [
      "A",
      "C",
      "D"
    ],
    "explanation": "Only + is overloaded for String. a+=x is actually converted to a = a + x. so it is valid for Strings. dot (.) operator\naccesses members of the String object. There is only one member variable though:\nCASE_INSENSITIVE_ORDER. It is of type Comparator (which is an interface)."
  },
  {
    "id": "2.1286",
    "topic": "Creating and Using Arrays",
    "question": "Consider the following array definitions:\nint[] array1, array2[];\nint[][] array3;\nint[] array4[], array5[];\nWhich of the following are valid statements?",
    "selectCount": 3,
    "options": [
      {
        "label": "A",
        "text": "array2 = array3;"
      },
      {
        "label": "B",
        "text": "array2 = array4;"
      },
      {
        "label": "C",
        "text": "array1 = array2;"
      },
      {
        "label": "D",
        "text": "array4 = array1;"
      },
      {
        "label": "E",
        "text": "array5 = array3;"
      }
    ],
    "correctAnswers": [
      "A",
      "B",
      "E"
    ],
    "explanation": "There is a subtle difference between: int[] i; and int i[]; although in both the cases, i is an array of integers.\nThe difference is if you declare multiple variables in the same statement such as: int[] i, j; and int i[], j;, j\nis not of the same type in the two cases.\nIn the first case, j is an array of integers while in the second case, j is just an integer.\nTherefore, in this question:\narray1 is an array of int\narray2, array3, array4, and array5 are arrays of int arrays\nTherefore, option 1, 2 and 5 are valid."
  },
  {
    "id": "2.1287",
    "topic": "Working with Inheritance",
    "question": "Consider the following class hierarchy shown in the image. (B1 and B2 are subclasses of A and C1, C2 are\nsubclasses of B1)\nAssume that method public void m1(){ ... } is defined in all of these classes EXCEPT B1 and C1.\nAssume that \"objectOfXX\" means a variable that points to an object of class XX. So, objectOfC1 means a\nreference variable that is pointing to an object of class C1.\nWhich of the following statements are correct?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "objectOfC1.m1(); will cause a compilation error."
      },
      {
        "label": "B",
        "text": "objectOfC2.m1(); will cause A's m1() to be called."
      },
      {
        "label": "C",
        "text": "objectOfC1.m1(); will cause A's m1() to be called."
      },
      {
        "label": "D",
        "text": "objectOfB1.m1(); will cause an exception at runtime."
      },
      {
        "label": "E",
        "text": "objectOfB2.m1(); will cause an exception at runtime."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": ""
  },
  {
    "id": "2.1290",
    "topic": "Using Operators and Decision Constructs",
    "question": "Consider the following method:\nstatic int mx(int s){\nfor(int i=0; i<3; i++){\ns = s + i;\n}\nreturn s;\n}\nand the following code snippet:\nint s = 5;\ns += s + mx(s) + ++s;\nSystem.out.println(s);\nWhat will it print?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "21"
      },
      {
        "label": "B",
        "text": "22"
      },
      {
        "label": "C",
        "text": "23"
      },
      {
        "label": "D",
        "text": "24"
      },
      {
        "label": "E",
        "text": "25"
      },
      {
        "label": "F",
        "text": "26"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": ""
  },
  {
    "id": "2.1291",
    "topic": "Working with Inheritance",
    "question": "What will be the result of attempting to compile and run class B?\nclass A{\nfinal int fi = 10;\n}\npublic class B extends A{\nint fi = 15;\npublic static void main(String[] args){\nB b = new B();\nb.fi = 20;\nSystem.out.println(b.fi);\nSystem.out.println( ( (A) b ).fi );\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It will not compile."
      },
      {
        "label": "B",
        "text": "It will print 10 and then 10"
      },
      {
        "label": "C",
        "text": "It will print 20 and then 20"
      },
      {
        "label": "D",
        "text": "It will print 10 and then 20"
      },
      {
        "label": "E",
        "text": "It will print 20 and then 10"
      }
    ],
    "correctAnswers": [
      "E"
    ],
    "explanation": "Note that a final variable can be shadowed. Here, although fi in A is final, it is shadowed by fi of B. So b.fi =\n20; is valid since B's fi is not final."
  },
  {
    "id": "2.1293",
    "topic": "Working with Methods",
    "question": "Which of the following correctly defines a method named stringProcessor that can be called by other programmers\nas follows: stringProcessor(str1) or stringProcessor(str1, str2) or stringProcessor(str1, str2,\nstr3), where str1, str2, and str3 are references to Strings.",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "public void stringProcessor(...String){\n}"
      },
      {
        "label": "B",
        "text": "public void stringProcessor(String... strs){\n}"
      },
      {
        "label": "C",
        "text": "public void stringProcessor(String[] strs){\n}"
      },
      {
        "label": "D",
        "text": "public void stringProcessor(String a, String b, String c){\n}"
      },
      {
        "label": "E",
        "text": "Three separate methods need to be written."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "To allow a method to take variable arguments of a type, you must use the ... syntax: methodName( <type>...\nvariableName);\nRemember that there can be only one vararg argument in a method. Further, the vararg argument must be the last\nargument.\nSo this is invalid: stringProcessor( String... variableName, int age);\nbut this is valid: stringProcessor(int age, String... variableName);\nThough not important for this exam, it is good to know that within the method, the vararg argument is treated like\nan array:\npublic void stringProcessor(String... names){\nfor (String n : names) {\nSystem.out.println(\"Hello \" + n);\n}\n}"
  },
  {
    "id": "2.1294",
    "topic": "Working with Methods",
    "question": "What will the code shown below print when run?\nclass Wrapper{\nint w = 10;\n}\npublic class TestClass{\nstatic Wrapper changeWrapper(Wrapper w){\nw = new Wrapper();\nw.w += 9;\nreturn w;\n}\npublic static void main(String[] args){\nWrapper w = new Wrapper();\nw.w = 20;\nchangeWrapper(w);\nw.w += 30;\nSystem.out.println(w.w);\nw = changeWrapper(w);\nSystem.out.println(w.w);\n}\n}",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "9"
      },
      {
        "label": "B",
        "text": "19"
      },
      {
        "label": "C",
        "text": "30"
      },
      {
        "label": "D",
        "text": "20"
      },
      {
        "label": "E",
        "text": "29"
      },
      {
        "label": "F",
        "text": "50"
      }
    ],
    "correctAnswers": [
      "B",
      "F"
    ],
    "explanation": "Remember that when you pass an object in a method, only its reference is passed by value. So when\nchangeWrapper() does w = new Wrapper(); and then w.w +=9; it does not affect the original wrapper object that\nwas passed to this method. Therefore, it prints 50.\nCalling w = changeWrapper(w); replaces the original Wrapper object with the one created in the\nchangeWrapper(w); method. Therefore, in the second print statement, it prints 19."
  },
  {
    "id": "2.1295",
    "topic": "Working with Inheritance - instanceof",
    "question": "Given the following class definitions and declaration:\nclass A {}\nclass B extends A {}\nclass C extends B {}\nclass D extends C {}\nD d = new D();\nthe expression (d instanceof A) will return true.",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "True"
      },
      {
        "label": "B",
        "text": "False"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "D extends C, which extends B, which extends A. This means, D is-a C, C is-a B, and B is-a A. Therefore, D is-a A.\nHence, d instanceof A will return true."
  },
  {
    "id": "2.1296",
    "topic": "Creating and Using Arrays",
    "question": "What will the following program print?\npublic class TestClass{\npublic static void main(String[] args){\nString str = \"111\";\nboolean[] bA = new boolean[1];\nif( bA[0] ) str = \"222\";\nSystem.out.println(str);\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "111"
      },
      {
        "label": "B",
        "text": "222"
      },
      {
        "label": "C",
        "text": "It will not compile as bA[0] is uninitialized."
      },
      {
        "label": "D",
        "text": "It will throw an exception at runtime."
      },
      {
        "label": "E",
        "text": "None of the above."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "All the arrays are initialized to contain the default values of their type. This means,\nint[] iA = new int[10]; will contain 10 integers with a value of 0.\nObject[] oA = new Object[10]; will contain 10 object references pointing to null.\nboolean[] bA = new boolean[10] will contain 10 booleans of value false.\nSo, as bA[0] is false, the if condition fails and str remains 111."
  },
  {
    "id": "2.1299",
    "topic": "Using Loop Constructs",
    "question": "What will the following program print?\nclass Test{\npublic static void main(String args[]){\nint var = 20, i=0;\ndo{\nwhile(true){\nif( i++ > var) break;\n}\n}while(i<var--);\nSystem.out.println(var);\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "19"
      },
      {
        "label": "B",
        "text": "20"
      },
      {
        "label": "C",
        "text": "21"
      },
      {
        "label": "D",
        "text": "22"
      },
      {
        "label": "E",
        "text": "It will enter an infinite loop."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "When the first iteration of outer do-while loop starts, var is 20. Now, the inner loop executes till i becomes 21.\nNow, the condition for outer do-while is checked, while( 22 < 20 ), [i is 22 because of the last i++>var check],\nthereby making var 19. And as the condition is false, the outer loop also ends.\nSo, 19 is printed."
  },
  {
    "id": "2.1300",
    "topic": "Working with Inheritance",
    "question": "An abstract method cannot be overridden.",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "True"
      },
      {
        "label": "B",
        "text": "False"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Abstract methods are meant to be overridden in the subclass. Abstract methods describe a behavior but do not\nimplement it. So the subclasses have to override it to actually implement the behavior. A subclass may chose not to\noverride it, in which case, the subclass will have to be abstract too."
  },
  {
    "id": "2.1301",
    "topic": "Handling Exceptions",
    "question": "What is wrong with the following code written in a single file named TestClass.java?\nclass SomeThrowable extends Throwable { }\nclass MyThrowable extends SomeThrowable { }\npublic class TestClass{\npublic static void main(String args[]) throws SomeThrowable{\ntry{\nm1();\n}catch(SomeThrowable e){\nthrow e;\n}finally{\nSystem.out.println(\"Done\");\n}\n}\npublic static void m1() throws MyThrowable{\nthrow new MyThrowable();\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "The main declares that it throws SomeThrowable but throws MyThrowable."
      },
      {
        "label": "B",
        "text": "You cannot have more than 2 classes in one file."
      },
      {
        "label": "C",
        "text": "The catch block in the main method must declare that it catches MyThrowable rather than SomeThrowable."
      },
      {
        "label": "D",
        "text": "There is nothing wrong with the code and Done will be printed."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": ""
  },
  {
    "id": "2.1302",
    "topic": "Working with Java API - String, StringBuilder",
    "question": "What will be the result of attempting to compile and run the following program?\npublic class TestClass{\npublic static void main(String args[ ] ){\nStringBuilder sb = new StringBuilder(\"12345678\");\nsb.setLength(5);\nsb.setLength(10);\nSystem.out.println(sb.length());\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It will print 5."
      },
      {
        "label": "B",
        "text": "It will print 10."
      },
      {
        "label": "C",
        "text": "It will print 8."
      },
      {
        "label": "D",
        "text": "Compilation error."
      },
      {
        "label": "E",
        "text": "None of the above."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "If you do System.out.println(sb); it will indeed print \"12345 \" (without quotes) but the length will be 10.\nFrom javadocs:\npublic void setLength(int newLength)\nSets the length of the character sequence. The sequence is changed to a new character sequence whose length is\nspecified by the argument. For every nonnegative index k less than newLength, the character at index k in the new\ncharacter sequence is the same as the character at index k in the old sequence if k is less than the length of the old\ncharacter sequence; otherwise, it is the null character '\\u0000'. In other words, if the newLength argument is less\nthan the current length, the length is changed to the specified length.\nIf the newLength argument is greater than or equal to the current length, sufficient null characters ('\\u0000') are\nappended so that length becomes the newLength argument.\nThe newLength argument must be greater than or equal to 0.\nParameters:\nnewLength - the new length\nThrows:\nIndexOutOfBoundsException - if the newLength argument is negative."
  },
  {
    "id": "2.1303",
    "topic": "Working with Java API - String, StringBuilder",
    "question": "Consider following classes:\n//In File Other.java\npackage other;\npublic class Other { public static String hello = \"Hello\"; }\n//In File Test.java\npackage testPackage;\nimport other.*;\nclass Test{\npublic static void main(String[] args){\nString hello = \"Hello\", lo = \"lo\";\nSystem.out.print((testPackage.Other.hello == hello) + \" \"); //line 1\nSystem.out.print((other.Other.hello == hello) + \" \"); //line 2\nSystem.out.print((hello == (\"Hel\"+\"lo\")) + \" \"); //line 3\nSystem.out.print((hello == (\"Hel\"+lo)) + \" \"); //line 4\nSystem.out.println(hello == (\"Hel\"+lo).intern()); //line 5\n}\n}\nclass Other { static String hello = \"Hello\"; }\nWhat will be the output of running class Test?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "false false true false true"
      },
      {
        "label": "B",
        "text": "false true true false true"
      },
      {
        "label": "C",
        "text": "true true true true true"
      },
      {
        "label": "D",
        "text": "true true true false true"
      },
      {
        "label": "E",
        "text": "None of the above."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "These are the six facts on Strings:\n1. Literal strings within the same class in the same package represent references to the same String object.\n2. Literal strings within different classes in the same package represent references to the same String object.\n3. Literal strings within different classes in different packages likewise represent references to the same String\nobject.\n4. Strings computed by constant expressions are computed at compile time and then treated as if they were literals.\n5. Strings computed at run time are newly created and therefore are distinct. (So line 4 prints false.)\n6. The result of explicitly interning a computed string is the same string as any pre-existing literal string with the\nsame contents. (So line 5 prints true.)\nWe advise you to read section 3.10.5 String Literals in Java Language Specification."
  },
  {
    "id": "2.1304",
    "topic": "Working with Java API - String, StringBuilder",
    "question": "Which of these are not part of the StringBuilder class?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "trim( )"
      },
      {
        "label": "B",
        "text": "ensureCapacity(int )"
      },
      {
        "label": "C",
        "text": "append(boolean)"
      },
      {
        "label": "D",
        "text": "reverse( )"
      },
      {
        "label": "E",
        "text": "setLength(int)"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": ""
  },
  {
    "id": "2.1305",
    "topic": "Handling Exceptions",
    "question": "Which of these statements are true?",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "If a RuntimeException is not caught, the method will terminate and normal execution of the thread will resume."
      },
      {
        "label": "B",
        "text": "An overriding method must declare that it throws the same exception classes as the method it overrides."
      },
      {
        "label": "C",
        "text": "The main method of a program can declare that it throws checked exceptions."
      },
      {
        "label": "D",
        "text": "A method declaring that it throws a certain exception class may throw instances of any subclass of that\nexception class."
      },
      {
        "label": "E",
        "text": "finally blocks are executed if and only if an exception gets thrown while inside the corresponding try block."
      }
    ],
    "correctAnswers": [
      "C",
      "D"
    ],
    "explanation": "Normal execution will not resume if an exception is uncaught by a method. The exception will propagate up the\nmethod invocation stack until some method handles it. If no one handles it then the exception will be handled by\nthe JVM and the JVM will terminated that thread.\nAn overriding method only needs to declare that it can throw a subset of the exceptions the overridden method can\nthrow. Having no throws clause in the overriding method is OK."
  },
  {
    "id": "2.1306",
    "topic": "Working with Inheritance",
    "question": "Which of these statements concerning interfaces are true?",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "An interface may extend an interface."
      },
      {
        "label": "B",
        "text": "An interface may extend a class and may implement an interface."
      },
      {
        "label": "C",
        "text": "A class can implement an interface and extend a class."
      },
      {
        "label": "D",
        "text": "A class can extend an interface and can implement a class."
      },
      {
        "label": "E",
        "text": "An interface can only be implemented and cannot be extended."
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "explanation": "The keyword implements is used when a class inherits method prototypes from an interface. The keyword extends\nis used when an interface inherits from another interface, or a class inherits from another class."
  },
  {
    "id": "2.1307",
    "topic": "Creating and Using Arrays",
    "question": "Given:\ndouble daaa[][][] = new double[3][][];\ndouble d = 100.0;\ndouble[][] daa = new double[1][1];\nWhich of the following will not cause any problem at compile time or runtime?",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "daaa[0] = d;"
      },
      {
        "label": "B",
        "text": "daaa[0] = daa;"
      },
      {
        "label": "C",
        "text": "daaa[0] = daa[0];"
      },
      {
        "label": "D",
        "text": "daa[1][1] = d;"
      },
      {
        "label": "E",
        "text": "daa = daaa[0];"
      }
    ],
    "correctAnswers": [
      "B",
      "E"
    ],
    "explanation": ""
  },
  {
    "id": "2.1308",
    "topic": "Working with Inheritance",
    "question": "What is the result of compiling and running the following code ?\npublic class TestClass{\nstatic int si = 10;\npublic static void main (String args[]){\nnew TestClass();\n}\npublic TestClass(){\nSystem.out.println(this);\n}\npublic String toString(){\nreturn \"TestClass.si = \"+this.si;\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "The class will not compile because you cannot override toString() method."
      },
      {
        "label": "B",
        "text": "The class will not compile as si being static, this.si is not a valid statement."
      },
      {
        "label": "C",
        "text": "It will print TestClass@nnnnnnnn, where nnnnnnnn is the hash code of the TestClass object referred to by 'this'."
      },
      {
        "label": "D",
        "text": "It will print TestClass.si = 10"
      },
      {
        "label": "E",
        "text": "None of the above."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "The toString method for class Object returns a String consisting of the name of the class of which the object is an\ninstance, the at-sign character '@', and the unsigned hexadecimal representation of the hash code of the object. In\nother words, this method returns a string equal to the value of:\ngetClass().getName() + '@' + Integer.toHexString(hashCode())"
  },
  {
    "id": "2.1309",
    "topic": "Working with Inheritance",
    "question": "What can be inserted at //1 and //2 in the code below so that it can compile without errors:\nclass Doll{\nString name;\nDoll(String nm){\nthis.name = nm;\n}\n}\nclass Barbie extends Doll{\nBarbie(){\n//1\n}\nBarbie(String nm){\n//2\n}\n}\npublic class TestClass {\npublic static void main(String[] args) {\nBarbie b = new Barbie(\"mydoll\");\n}\n}",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "this(\"unknown\"); at 1 and super(nm); at 2"
      },
      {
        "label": "B",
        "text": "super(\"unknown\"); at 1 and super(nm); at 2"
      },
      {
        "label": "C",
        "text": "super(); at 1 and super(nm); at 2"
      },
      {
        "label": "D",
        "text": "super(); at 1 and Doll(nm); at 2"
      },
      {
        "label": "E",
        "text": "super(\"unknown\"); at 1 and this(nm); at 2"
      },
      {
        "label": "F",
        "text": "Doll(); at 1 and Doll(nm); at 2"
      }
    ],
    "correctAnswers": [
      "A",
      "B"
    ],
    "explanation": "Since the super class Doll explicitly defines a constructor, compiler will not provide the default no-args\nconstructor. Therefore, each of Barbie's constructors must directly or indirectly call Doll's string argument\nconstructor, otherwise it will not compile.\nAlthough not relevant for this question, it is interesting to know that super(name); at //1 or //2, would not be valid\nbecause name is defined in the superclass and so it cannot be used by a subclass until super class's constructor has\nexecuted. For the same reason, this(name); cannot be used either."
  },
  {
    "id": "2.1310",
    "topic": "Using Operators and Decision Constructs",
    "question": "Consider the following method...\npublic static void ifTest(boolean flag){\nif (flag) //1\nif (flag) //2\nif (flag) //3\nSystem.out.println(\"False True\");\nelse //4\nSystem.out.println(\"True False\");\nelse //5\nSystem.out.println(\"True True\");\nelse //6\nSystem.out.println(\"False False\");\n}\nWhich of the following statements are correct ?",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "If run with an argument of 'false', it will print 'False False'"
      },
      {
        "label": "B",
        "text": "If run with an argument of 'false', it will print 'True True'"
      },
      {
        "label": "C",
        "text": "If run with an argument of 'true', it will print 'True False'"
      },
      {
        "label": "D",
        "text": "It will never print 'True True'"
      },
      {
        "label": "E",
        "text": "It will not compile."
      }
    ],
    "correctAnswers": [
      "A",
      "D"
    ],
    "explanation": "Look at it like this:\nif (flag) //1\n{\nif (flag) // 2\n{\nif (flag) //3\n{\nSystem.out.println(\"False True\");\n}\nelse //4\n{\nSystem.out.println(\"True False\");\n}\n}\nelse //5\n{\nSystem.out.println(\"True True\");\n}\n}\nelse //6\n{\nSystem.out.println(\"False False\");\n}\nNote that if and else do not cascade. They are like opening an closing brackets. So, else at //4 is associated with if\nat //3 and else at //5 is associated with if at //2"
  },
  {
    "id": "2.1311",
    "topic": "Handling Exceptions",
    "question": "Which exact exception class will the following class throw when compiled and run?\nclass Test{\npublic static void main(String[] args) throws Exception{\nint[] a = null;\nint i = a [ m1() ];\n}\npublic static int m1() throws Exception{\nthrow new Exception(\"Some Exception\");\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "NullPointerException"
      },
      {
        "label": "B",
        "text": "ArrayIndexOutOfBoundsException"
      },
      {
        "label": "C",
        "text": "Exception"
      },
      {
        "label": "D",
        "text": "RuntimeException"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "A NullPointerException never occurs because the index expression must be completely evaluated before any\npart of the indexing operation occurs, and that includes the check as to whether the value of the left-hand operand\nis null.\nIf the array reference expression produces null instead of a reference to an array, then a NullPointerException is\nthrown at runtime, but only after all parts of the array reference expression have been evaluated and only if these\nevaluations completed normally.\nIn an array access, the expression to the left of the brackets appears to be fully evaluated before any part of the\nexpression within the brackets is evaluated.\nNote that if evaluation of the expression to the left of the brackets completes abruptly, no part of the expression\nwithin the brackets will appear to have been evaluated.\nHere, m1() is called first, which throws Exception and so a is never accessed and NullPointerException is never\nthrown."
  },
  {
    "id": "2.1312",
    "topic": "Working with Methods",
    "question": "Which of the following code fragments are valid method declarations?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "void method1{ }"
      },
      {
        "label": "B",
        "text": "void method2( ) { }"
      },
      {
        "label": "C",
        "text": "void method3(void){ }"
      },
      {
        "label": "D",
        "text": "method4{ }"
      },
      {
        "label": "E",
        "text": "method5(void){ }"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "A valid method declaration MUST specify a return type, all other things are optional."
  },
  {
    "id": "2.1313",
    "topic": "Using Operators and Decision Constructs",
    "question": "What is the result of executing the following code when the value of i is 5:\nswitch (i){\ndefault:\ncase 1:\nSystem.out.println(1);\ncase 0:\nSystem.out.println(0);\ncase 2:\nSystem.out.println(2);\nbreak;\ncase 3:\nSystem.out.println(3);\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It will print 1 0 2"
      },
      {
        "label": "B",
        "text": "It will print 1 0 2 3"
      },
      {
        "label": "C",
        "text": "It will print 1 0"
      },
      {
        "label": "D",
        "text": "It will print 1"
      },
      {
        "label": "E",
        "text": "Nothing will be printed."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Here are the rules:\nThe type of the switch expression must be String, char, byte, short, or int (and their wrapper classes), or an enum\nor a compile-time error occurs.\nAll of the following must be true, or a compile-time error will result:\n1. Every case constant expression associated with a switch statement must be assignable (5.2) to the type of the\nswitch Expression.\n2. No two of the case constant expressions associated with a switch statement may have the same value.\n3. At most one default label may be associated with the same switch statement.\nBasically it looks for a matching case or if no match is found it goes to default. (If default is also not found it does\nnothing)\nThen it executes the statements till it reaches a break or end of the switch statement.\nHere, it goes to default and executes till it reaches first break. So it prints 1 0 2.\nNote that the switch statement compares the String object in its expression with the expressions associated with\neach case label as if it were using the String.equals method; consequently, the comparison of String objects in\nswitch statements is case sensitive. The Java compiler generates generally more efficient bytecode from switch\nstatements that use String objects than from chained if-then-else statements."
  },
  {
    "id": "2.1314",
    "topic": "Working with Java Data Types",
    "question": "Which statements concerning conversion are true?",
    "selectCount": 4,
    "options": [
      {
        "label": "A",
        "text": "Conversion from char to long does not need a cast."
      },
      {
        "label": "B",
        "text": "Conversion from byte to short does not need a cast."
      },
      {
        "label": "C",
        "text": "Conversion from short to char needs a cast."
      },
      {
        "label": "D",
        "text": "Conversion from int to float needs a cast."
      },
      {
        "label": "E",
        "text": "Conversion from byte, char or short to int, long or float does not need a cast."
      }
    ],
    "correctAnswers": [
      "A",
      "B",
      "C",
      "E"
    ],
    "explanation": "Think of it as transferring contents of one bucket into another. You can always transfer the contents of a smaller\nbucket to a bigger one. But the opposite is not always possible. You can transfer the contents of the bigger bucket\ninto the smaller bucket only if the actual content in the bigger bucket can fit into the smaller one. Otherwise, it will\nspill.\nIt is the same with integral types as well. byte is smaller than short or int. So you can assign a byte to an int (or an\nint to a float, or a float to a double) without any cast. But for the reverse you need to assure the compiler that the\nactual contents in my int will be smaller than a byte so let me assign this int to a byte. This is achieved by the cast.\nint i = 10;\nbyte b = 20;\nb = i;//will not compile because byte is smaller than int\nb = (byte) i; //OK\nFurther, if you have a final variable and its value fits into a smaller type, then you can assign it without a cast\nbecause compiler already knows its value and realizes that it can fit into the smaller type. This is called implicit\nnarrowing and is allowed between byte, int, char, and, short but not for long, float, and double.\nfinal int k = 10;\nb = k; //Okay because k is final and 10 fits into a byte\nfinal float f = 10.0;//will not compile because 10.0 is a double even though the value 10.0 fits\ninto a float\ni = f;//will not compile."
  },
  {
    "id": "2.1316",
    "topic": "Creating and Using Arrays",
    "question": "Which of the following statements will correctly create and initialize an array of Strings to non null elements?",
    "selectCount": 4,
    "options": [
      {
        "label": "A",
        "text": "String[] sA = new String[1] { \"aaa\"};"
      },
      {
        "label": "B",
        "text": "String[] sA = new String[] { \"aaa\"};"
      },
      {
        "label": "C",
        "text": "String[] sA = new String[1] ; sA[0] = \"aaa\";"
      },
      {
        "label": "D",
        "text": "String[] sA = {new String( \"aaa\")};"
      },
      {
        "label": "E",
        "text": "String[] sA = { \"aaa\"};"
      }
    ],
    "correctAnswers": [
      "B",
      "C",
      "D",
      "E"
    ],
    "explanation": ""
  },
  {
    "id": "2.1317",
    "topic": "Using Operators and Decision Constructs",
    "question": "Which of the following are NOT valid operators in Java?",
    "selectCount": 4,
    "options": [
      {
        "label": "A",
        "text": "sizeof"
      },
      {
        "label": "B",
        "text": "<<<"
      },
      {
        "label": "C",
        "text": "instanceof"
      },
      {
        "label": "D",
        "text": "mod"
      },
      {
        "label": "E",
        "text": "equals"
      }
    ],
    "correctAnswers": [
      "A",
      "B",
      "D",
      "E"
    ],
    "explanation": ""
  },
  {
    "id": "2.1319",
    "topic": "Working with Java Data Types",
    "question": "Given the following code snippet:\nint rate = 10;\nint t = 5;\nXXX amount = 1000.0;\nfor(int i=0; i<t; i++){\namount = amount*(1 - rate/100);\n}\nWhat can XXX be?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "int"
      },
      {
        "label": "B",
        "text": "long"
      },
      {
        "label": "C",
        "text": "only double"
      },
      {
        "label": "D",
        "text": "double or float"
      },
      {
        "label": "E",
        "text": "float"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "There is no need for analyzing the whole code. XXX amount = 1000.0; will be valid only if XXX is double.\nNote that the options do not include wrapper classes. Otherwise, Double is also valid because of auto boxing."
  },
  {
    "id": "2.1320",
    "topic": "Working with Inheritance",
    "question": "What will the following code print when compiled and run?\nclass ABCD{\nint x = 10;\nstatic int y = 20;\n}\nclass MNOP extends ABCD{\nint x = 30;\nstatic int y = 40;\n}\npublic class TestClass {\npublic static void main(String[] args) {\nSystem.out.println(new MNOP().x+\", \"+new MNOP().y);\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "10, 40"
      },
      {
        "label": "B",
        "text": "30, 20"
      },
      {
        "label": "C",
        "text": "10, 20"
      },
      {
        "label": "D",
        "text": "30, 40"
      },
      {
        "label": "E",
        "text": "20, 30"
      },
      {
        "label": "F",
        "text": "Compilation error."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Access to static and instance fields and static methods depends on the class of reference variable and not the actual\nobject to which the variable points to. Observe that this is opposite of what happens in the case of instance\nmethods. In case of instance methods the method of the actual class of the object is called.\nTherefore, in case of System.out.println(new MNOP().x); the reference is of type MNOP and so MNOP's x will\nbe accessed.\nHad it been like this:\nABCD a = new MNOP();\nSystem.out.println(a.x);\nSystem.out.println(a.y);\nABCD's x and y would have been accessed because a is of type ABCD even though the actual object is of type\nMNOP."
  },
  {
    "id": "2.1321",
    "topic": "Java Basics",
    "question": "Consider the following class :\npublic class Parser{\npublic static void main( String[] args){\ntry{\nint i = 0;\ni = Integer.parseInt( args[0] );\n}\ncatch(NumberFormatException e){\nSystem.out.println(\"Problem in \" + i );\n}\n}\n}\nWhat will happen if it is run with the following command line:\njava Parser one",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It will print Problem in 0"
      },
      {
        "label": "B",
        "text": "It will throw an exception and end without printing anything."
      },
      {
        "label": "C",
        "text": "It will not even compile."
      },
      {
        "label": "D",
        "text": "It will not print anything if the argument is '1' instead of 'one'."
      },
      {
        "label": "E",
        "text": "None of the above."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": ""
  },
  {
    "id": "2.1322",
    "topic": "Java Basics - OO Concepts",
    "question": "What is meant by \"encapsulation\" ?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "There is no way to access member variable."
      },
      {
        "label": "B",
        "text": "There are no member variables."
      },
      {
        "label": "C",
        "text": "Member fields are declared private and public accessor/mutator methods are provided to access and change their values if needed."
      },
      {
        "label": "D",
        "text": "Data fields are declared public and accessor methods are provided to access and change their values."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Encapsulation is one of the 4 fundamentals of OOP (Object Oriented Programming).\nEncapsulation means that the internal representation of an object is generally hidden from view outside of the\nobject's definition. Typically, only the object's own methods can directly inspect or manipulate its fields. Some\nlanguages like Smalltalk and Ruby only allow access via object methods, but most others (e.g. C++ or Java) offer\nthe programmer a degree of control over what is hidden, typically via keywords like public and private.\nHiding the internals of the object protects its integrity by preventing users from setting the internal data of the\ncomponent into an invalid or inconsistent state. A benefit of encapsulation is that it can reduce system complexity,\nand thus increases robustness, by allowing the developer to limit the interdependencies between software\ncomponents."
  },
  {
    "id": "2.1323",
    "topic": "Handling Exceptions",
    "question": "What is the result of compiling and running this code?\nclass MyException extends Throwable{}\nclass MyException1 extends MyException{}\nclass MyException2 extends MyException{}\nclass MyException3 extends MyException2{}\npublic class ExceptionTest{\nvoid myMethod() throws MyException{\nthrow new MyException3();\n}\npublic static void main(String[] args){\nExceptionTest et = new ExceptionTest();\ntry{\net.myMethod();\n}\ncatch(MyException me){\nSystem.out.println(\"MyException thrown\");\n}\ncatch(MyException3 me3){\nSystem.out.println(\"MyException3 thrown\");\n}\nfinally{\nSystem.out.println(\" Done\");\n}\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "MyException thrown"
      },
      {
        "label": "B",
        "text": "MyException3 thrown"
      },
      {
        "label": "C",
        "text": "MyException thrown Done"
      },
      {
        "label": "D",
        "text": "MyException3 thrown Done"
      },
      {
        "label": "E",
        "text": "It fails to compile"
      }
    ],
    "correctAnswers": [
      "E"
    ],
    "explanation": "You can have multiple catch blocks to catch different kinds of exceptions, including exceptions that are subclasses\nof other exceptions. However, the catch clause for more specific exceptions (i.e. a SubClassException) should\ncome before the catch clause for more general exceptions ( i.e. a SuperClassException). Failure to do so results in\na compiler error as the more specific exception is unreachable.\nIn this case, catch for MyException3 cannot follow catch for MyException because if MyException3 is thrown, it\nwill be caught by the catch clause for MyException. And so, there is no way the catch clause for MyException3 can\never execute. And so it becomes an unreachable statement."
  },
  {
    "id": "2.1324",
    "topic": "Using Operators and Decision Constructs",
    "question": "What will happen when the following program is compiled and run?\npublic class SM{\npublic String checkIt(String s){\nif(s.length() == 0 || s == null){\nreturn \"EMPTY\";\n}\nelse return \"NOT EMPTY\";\n}\npublic static void main(String[] args){\nSM a = new SM();\nSystem.out.println(a.checkIt(null));\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It will print EMPTY."
      },
      {
        "label": "B",
        "text": "It will print NOT EMPTY."
      },
      {
        "label": "C",
        "text": "It will throw NullPointerException."
      },
      {
        "label": "D",
        "text": "It will print EMPTY if || is replaced with |."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": ""
  },
  {
    "id": "2.1325",
    "topic": "Using Operators and Decision Constructs",
    "question": "What will be the result of attempting to compile and run the following class?\npublic class IfTest{\npublic static void main(String args[]){\nif (true)\nif (false)\nSystem.out.println(\"True False\");\nelse\nSystem.out.println(\"True True\");\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "The code will fail to compile because the syntax of the if statement is not correct."
      },
      {
        "label": "B",
        "text": "The code will fail to compile because the values in the condition bracket are invalid."
      },
      {
        "label": "C",
        "text": "The code will compile correctly and will not display anything."
      },
      {
        "label": "D",
        "text": "The code will compile correctly and will display True True."
      },
      {
        "label": "E",
        "text": "The code will compile correctly but will display True False"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "This code can be rewritten as follows:\npublic class IfTest{\npublic static void main(String args[]) {\nif (true) {\nif (false) {\nSystem.out.println(\"True False\");\n} else {\nSystem.out.println(\"True True\");\n}\n}\n}\n}\nNotice how the last \"else\" is associated with the last \"if\" and not the first \"if\". Now, the first if condition returns\ntrue so the next 'if' will be executed. In the second 'if' the condition returns false so the else part will be evaluated\nwhich prints 'True True'."
  },
  {
    "id": "2.1326",
    "topic": "Creating and Using Arrays",
    "question": "What will happen when the following code is compiled and run?\nclass AX{\nstatic int[] x = new int[0];\nstatic{\nx[0] = 10;\n}\npublic static void main(String[] args){\nAX ax = new AX();\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It will throw NullPointerException at runtime."
      },
      {
        "label": "B",
        "text": "It will throw ArrayIndexOutOfBoundsException at runtime."
      },
      {
        "label": "C",
        "text": "It will throw ExceptionInInitializerError at runtime."
      },
      {
        "label": "D",
        "text": "It will not compile."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Even though the line x[0] = 10; will throw java.lang.ArrayIndexOutOfBoundsException, JVM will wrap it and\nrethrow java.lang.ExceptionInInitializerError."
  },
  {
    "id": "2.1327",
    "topic": "Using Loop Constructs",
    "question": "What will be the output when the following program is run?\npublic class TestClass{\npublic static void main(String args[]){\nint i;\nint j;\nfor (i = 0, j = 0; j < i; ++j, i++){\nSystem.out.println(i + \" \" + j);\n}\nSystem.out.println(i + \" \" + j);\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "0 0 will be printed twice."
      },
      {
        "label": "B",
        "text": "0 0 will be printed once."
      },
      {
        "label": "C",
        "text": "It will keep on printing 0 0"
      },
      {
        "label": "D",
        "text": "It will not compile."
      },
      {
        "label": "E",
        "text": "It will print 0 0 and then 0 1."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "++j and i++ do not matter in this case.\nThe loop will not execute even once since j is not less than i at the start of the loop so the condition fails and the\nprogram will print 0 0 just once."
  },
  {
    "id": "2.1328",
    "topic": "Working with Inheritance",
    "question": "Consider the following classes :\ninterface I{\n}\nclass A implements I{\n}\nclass B extends A {\n}\nclass C extends B{\n}\nAnd the following declarations:\nA a = new A();\nB b = new B();\nIdentify options that will compile and run without error.",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "a = (B)(I)b;"
      },
      {
        "label": "B",
        "text": "b = (B)(I) a;"
      },
      {
        "label": "C",
        "text": "a = (I) b;"
      },
      {
        "label": "D",
        "text": "I i = (C) a;"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": ""
  },
  {
    "id": "2.1329",
    "topic": "Working with Inheritance",
    "question": "Which of the following method definitions will prevent overriding of that method?",
    "selectCount": 4,
    "options": [
      {
        "label": "A",
        "text": "public final void m1()"
      },
      {
        "label": "B",
        "text": "public static void m1()"
      },
      {
        "label": "C",
        "text": "public static final void m1()"
      },
      {
        "label": "D",
        "text": "public abstract void m1()"
      },
      {
        "label": "E",
        "text": "private void m1()"
      }
    ],
    "correctAnswers": [
      "A",
      "B",
      "C",
      "E"
    ],
    "explanation": ""
  },
  {
    "id": "2.1330",
    "topic": "Working with Methods",
    "question": "Which of the following access control keywords can be used to enable all the subclasses to access a method\ndefined in the base class?",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "public"
      },
      {
        "label": "B",
        "text": "private"
      },
      {
        "label": "C",
        "text": "protected"
      },
      {
        "label": "D",
        "text": "No keyword is needed."
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "explanation": ""
  },
  {
    "id": "2.1331",
    "topic": "Working with Java Data Types",
    "question": "Note: This question may be considered too advanced for this exam.\nWhich statements can be inserted at line 1 in the following code to make the program write x on the standard\noutput when run?\npublic class AccessTest{\nString a = \"x\";\nstatic char b = 'x';\nString c = \"x\";\nclass Inner{\nString a = \"y\";\nString get(){\nString c = \"temp\";\n// Line 1\nreturn c;\n}\n}\nAccessTest() {\nSystem.out.println( new Inner().get() );\n}\npublic static void main(String args[]) { new AccessTest(); }\n}",
    "selectCount": 3,
    "options": [
      {
        "label": "A",
        "text": "c = c;"
      },
      {
        "label": "B",
        "text": "c = this.a;"
      },
      {
        "label": "C",
        "text": "c = \"\"+AccessTest.b;"
      },
      {
        "label": "D",
        "text": "c = AccessTest.this.a;"
      },
      {
        "label": "E",
        "text": "c = \"\"+b;"
      }
    ],
    "correctAnswers": [
      "C",
      "D",
      "E"
    ],
    "explanation": ""
  },
  {
    "id": "2.1332",
    "topic": "Working with Java Data Types",
    "question": "What happens when you try to compile and run the following program?\npublic class CastTest{\npublic static void main(String args[ ] ){\nbyte b = -128 ;\nint i = b ;\nb = (byte) i;\nSystem.out.println(i+\" \"+b);\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "The compiler will refuse to compile it because i and b are of different types cannot be assigned to each other."
      },
      {
        "label": "B",
        "text": "The program will compile and will print -128 and -128 when run."
      },
      {
        "label": "C",
        "text": "The compiler will refuse to compile it because -128 is outside the legal range of values for a byte."
      },
      {
        "label": "D",
        "text": "The program will compile and will print 128 and -128 when run ."
      },
      {
        "label": "E",
        "text": "The program will compile and will print 255 and -128 when run ."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "byte and int both hold signed values. So when b is assigned to i, the sign is preserved."
  },
  {
    "id": "2.1334",
    "topic": "Working with Inheritance",
    "question": "What will the following program print when run?\n// Filename: TestClass.java\npublic class TestClass{\npublic static void main(String args[] ){ A b = new B(\"good bye\"); }\n}\nclass A{\nA() { this(\"hello\", \" world\"); }\nA(String s) { System.out.println(s); }\nA(String s1, String s2){ this(s1 + s2); }\n}\nclass B extends A{\nB(){ super(\"good bye\"); };\nB(String s){ super(s, \" world\"); }\nB(String s1, String s2){ this(s1 + s2 + \" ! \"); }\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It will print \"good bye\"."
      },
      {
        "label": "B",
        "text": "It will print \"hello world\"."
      },
      {
        "label": "C",
        "text": "It will print \"good bye world\"."
      },
      {
        "label": "D",
        "text": "It will print \"good bye\" followed by \"hello world\"."
      },
      {
        "label": "E",
        "text": "It will print \"hello world\" followed by \"good bye\"."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "new B(\"good bye\"); will call class B's one args constructor which in turn calls super(s, \" world\"); (i.e. class\nA's two args constructor) which in turn calls this(s1 + s2); (i.e. class A's one arg constructor with parameter\n\"good bye world\") which prints it."
  },
  {
    "id": "2.1335",
    "topic": "Using Operators and Decision Constructs",
    "question": "Consider the code shown below:\npublic class TestClass{\npublic static int switchTest(int k){\nint j = 1;\nswitch(k){\ncase 1: j++;\ncase 2: j++;\ncase 3: j++;\ncase 4: j++;\ncase 5: j++;\ndefault : j++;\n}\nreturn j + k;\n}\npublic static void main(String[] args){\nSystem.out.println( switchTest(4) );\n}\n}\nWhat will it print when compiled and run?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "5"
      },
      {
        "label": "B",
        "text": "6"
      },
      {
        "label": "C",
        "text": "7"
      },
      {
        "label": "D",
        "text": "8"
      },
      {
        "label": "E",
        "text": "9"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "The control in the case falls through till reaches the break statement.\nHere, switch(4) will take the control to case 4:.\nNow since there is no break statement, all the statements till the end will be executed. So j will be incremented 3\ntime making it 4. finally 4 + 4 i.e. 8 will be returned."
  },
  {
    "id": "2.1336",
    "topic": "Working with Java API - String, StringBuilder",
    "question": "Which of these methods are not a part of the String class?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "trim"
      },
      {
        "label": "B",
        "text": "length"
      },
      {
        "label": "C",
        "text": "concat"
      },
      {
        "label": "D",
        "text": "hashCode"
      },
      {
        "label": "E",
        "text": "reverse"
      }
    ],
    "correctAnswers": [
      "E"
    ],
    "explanation": ""
  },
  {
    "id": "2.1337",
    "topic": "Working with Inheritance",
    "question": "Consider the following code:\nclass A{\nA() { print(); }\nvoid print() { System.out.println(\"A\"); }\n}\nclass B extends A{\nint i = 4;\npublic static void main(String[] args){\nA a = new B();\na.print();\n}\nvoid print() { System.out.println(i); }\n}\nWhat will be the output when class B is run ?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It will print A, 4."
      },
      {
        "label": "B",
        "text": "It will print A, A"
      },
      {
        "label": "C",
        "text": "It will print 0, 4"
      },
      {
        "label": "D",
        "text": "It will print 4, 4"
      },
      {
        "label": "E",
        "text": "None of the above."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Note that method print() is overridden in class B. Due to polymorphism, the method to be executed is selected\ndepending on the class of the actual object.\nHere, when an object of class B is created, first A's constructor is called, which in turn calls print(). Now, since\nthe class of actual object is B, B's print() is selected. At this point of time, variable i has not been initialized\n(because we are still initializing A at this point), so its default value i.e. 0 is printed.\nThis happens because the method print() is non-private, hence polymorphic.\nFinally, 4 is printed."
  },
  {
    "id": "2.1338",
    "topic": "Java Basics",
    "question": "What is the correct parameter specification for the standard main method?",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "void"
      },
      {
        "label": "B",
        "text": "String[ ] args"
      },
      {
        "label": "C",
        "text": "Strings args[ ]"
      },
      {
        "label": "D",
        "text": "String args"
      },
      {
        "label": "E",
        "text": "String args[ ]"
      }
    ],
    "correctAnswers": [
      "B",
      "E"
    ],
    "explanation": "There is a no difference for args whether it is defined as String[] args or String args[]. However, there is an\nimportant difference in the way it is defined as illustrated by the following:\n1. String[] sa1, sa2;\nHere, both - sa1 and sa2 are String arrays.\n2. String sa1[], sa2;\nHere, only sa1 is a String array. sa2 is just a String."
  },
  {
    "id": "2.1339",
    "topic": "Using Operators and Decision Constructs",
    "question": "What will the following code print?\nint i = 1;\nint j = i++;\nif( (i==++j) | (i++ == j) ){\ni+=j;\n}\nSystem.out.println(i);",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "3"
      },
      {
        "label": "B",
        "text": "4"
      },
      {
        "label": "C",
        "text": "5"
      },
      {
        "label": "D",
        "text": "2"
      },
      {
        "label": "E",
        "text": "It will not compile."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "This question is based on 2 concepts:\n1. i == ++j is not same as i == j++;\nIn the case of i == ++j, j is first incremented and then compared with i. While in the case of i == j++;, j is first\ncompared with i and then incremented.\n2. The | operator, when applied for boolean operands, ensures that both the sides are evaluated. This is opposed to ||\nwhich does not evaluate the Right Hand Side if the result can be known by just evaluating the Left Hand Side.\nNow, let us see the values of i and j at each step:\nint i = 1;\nint j = i++; // j is assigned 1 and i is incremented to 2\nif( (i==++j) | (i++ == j) ) // increment j (so j becomes 2) and compare with i => return\ntrue.\n//since it is |, evaluate next condition: compare i with 2 and increment i => i becomes\n3.{\ni+=j; //i = 3+2 = 5\n}\nSystem.out.println(i); //prints 5"
  },
  {
    "id": "2.1340",
    "topic": "Working with Methods - Overloading",
    "question": "Given the following code, which method declarations can be inserted at line 1 without any problems?\npublic class OverloadTest{\npublic int sum(int i1, int i2) { return i1 + i2; }\n// 1\n}",
    "selectCount": 3,
    "options": [
      {
        "label": "A",
        "text": "public int sum(int a, int b) { return a + b; }"
      },
      {
        "label": "B",
        "text": "public int sum(long i1, long i2) { return (int) i1; }"
      },
      {
        "label": "C",
        "text": "public int sum(int i1, long i2) { return (int) i2; }"
      },
      {
        "label": "D",
        "text": "public long sum(long i1, int i2) { return i1 + i2; }"
      },
      {
        "label": "E",
        "text": "public long sum(int i1, int i2) { return i1 + i2; }"
      }
    ],
    "correctAnswers": [
      "B",
      "C",
      "D"
    ],
    "explanation": "The rule is that you cannot have methods that create ambiguity for the compiler in a class. It is illegal for a class to\nhave two methods having same name and having same type of input parameters in the same order.\nName of the input variables and return type of the method are not looked into.\n1. Option 1 is wrong because, then both the methods will be same (as their method name and the class/type and\norder of the input parameters will be same). So this amounts to duplicate method which is not allowed.\nAs mentioned, name of the input parameters does not matter. Only the type of parameters and their order matters.\n2. 2 is valid because the type of input parameters are different. So this is a different method and does not amount to\nduplication.\n3 and 4 are valid for the same reason\n5 is not valid because it leads to duplicate method(as their method name and the class/type and order of the input\nparameters will be same). Note that as mentioned in the comments, return type does not matter."
  },
  {
    "id": "2.1341",
    "topic": "Java Basics",
    "question": "What will be result of attempting to compile this class?\nimport java.util.*;\npackage test;\npublic class TestClass{\npublic OtherClass oc = new OtherClass();\n}\nclass OtherClass{\nint value;\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "The class will fail to compile, since the class OtherClass is used before it is defined."
      },
      {
        "label": "B",
        "text": "There is no problem with the code."
      },
      {
        "label": "C",
        "text": "The class will fail to compile, since the class OtherClass must be defined in a file called OtherClass.java"
      },
      {
        "label": "D",
        "text": "The class will fail to compile ."
      },
      {
        "label": "E",
        "text": "None of the above."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "The order is:\npackage statement.\nimport statements\nclass/ interface definitions.\nImportant point to note here is YOU MUST READ THE QUESTIONS VERY CAREFULLY."
  },
  {
    "id": "2.1342",
    "topic": "Using Operators and Decision Constructs",
    "question": "Consider that str is a local variable of class java.lang.String.\nWhich of the following lines of code may throw a NullPointerException in certain situations?\nOr a tougher version of the question could be :\nWhich of the following lines of code are not an example of robust design ?",
    "selectCount": 3,
    "options": [
      {
        "label": "A",
        "text": "if ( (str != null) | ( i == str.length() ) )"
      },
      {
        "label": "B",
        "text": "if ( (str == null) | ( i == str.length() ) )"
      },
      {
        "label": "C",
        "text": "if ( (str != null) || (i == str.length() ) )"
      },
      {
        "label": "D",
        "text": "if ( (str == null) || (i == str.length() ) )"
      }
    ],
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "explanation": "The concept is : || and && are short circuiting operation i.e. if the value of the expression can be known by just\nseeing the first part then the remaining part is not evaluated while | and & will always let all the parts evaluates.\nLet's break this down in two cases:\n1. Say str = null;\nfor a, the first part is false and str.length() throws NullPointerException because str is null.\nfor b, the first part of it is true but it will still evaluate the second part and as str is null, str.length() throws\nNullPointerException. Had it been || instead of |, the second part would not have been evaluated and no exception\nwould have been thrown.\nfor c, the first part of it is false and it will also evaluate the second part which will throw a NullPointerException as\nstr is null.\nfor d, the first part is true, so the second part is not evaluated.\n2. Say, str = \"somestring\"; //i.e. str is not null.\nfor a, the first part is true, so is the second part. No exception is thrown. Note that second part will still be\nevaluated although by looking at the first part itself we can tell that the whole expression will return true.\nfor b, the first part is false, and the second part is also true. No exception is thrown.\nfor c, first part is true, so second part is not evaluated at all. No exception is thrown.\n\nfor d, first part is false, so it will evaluate second part. No exception is thrown as str is not null.\nIt would be nice if you try to run the following program to understand the concept :\n(Uncomment only one of the commented lines one by one).\npublic class TestClass {\npublic static void main(String[] args) {\nint i = 0;\nString s = \"\";\n//s = null;\nif ((s != null) | ( i==s.length())) {}\nSystem.out.println(\"A\");\n//s = null;\nif ((s == null) | ( i==s.length())) {}\nSystem.out.println(\"B\");\n//s = null;\nif ((s != null) || (i==s.length())) {}\nSystem.out.println(\"C\");\ns = null;\nif ((s == null) || (i==s.length())) {}\nSystem.out.println(\"D\");\n}\n}"
  },
  {
    "id": "2.1343",
    "topic": "Working with Methods",
    "question": "Consider the following class...\nclass TestClass{\nint x;\npublic static void main(String[] args){\n// lot of code.\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "By declaring x as static, main can access this.x"
      },
      {
        "label": "B",
        "text": "By declaring x as public, main can access this.x"
      },
      {
        "label": "C",
        "text": "By declaring x as protected, main can access this.x"
      },
      {
        "label": "D",
        "text": "main cannot access this.x as it is declared now."
      },
      {
        "label": "E",
        "text": "By declaring x as private, main can access this.x"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "It is not possible to access x from main without making it static. Because main is a static method and only static\nmembers are accessible from static methods. There is no 'this' available in main so none of the this.x are valid."
  },
  {
    "id": "2.1345",
    "topic": "Handling Exceptions",
    "question": "Assume that a method named 'method1' contains code which may raise a non-runtime (checked) Exception.\nWhat is/are the possible way(s) to declare this method so that it indicates that it expects the caller to handle that\nexception?",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "public void method1() throws Throwable"
      },
      {
        "label": "B",
        "text": "public void method1() throw Exception"
      },
      {
        "label": "C",
        "text": "public void method1() throw new Exception"
      },
      {
        "label": "D",
        "text": "public void method1() throws Exception"
      },
      {
        "label": "E",
        "text": "public void method1()"
      }
    ],
    "correctAnswers": [
      "A",
      "D"
    ],
    "explanation": ""
  },
  {
    "id": "2.1346",
    "topic": "Working with Java Data Types",
    "question": "Which of the following statements can be inserted at // 1 to make the code compile without errors?\npublic class InitTest{\nstatic int si = 10;\nint i;\nfinal boolean bool;\n// 1\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "instance { bool = true; }"
      },
      {
        "label": "B",
        "text": "InitTest() { si += 10; }"
      },
      {
        "label": "C",
        "text": "{ si = 5; i = bool ? 1000 : 2000;}"
      },
      {
        "label": "D",
        "text": "{ i = 1000; }"
      },
      {
        "label": "E",
        "text": "{ bool = (si > 5); i = 1000; }"
      }
    ],
    "correctAnswers": [
      "E"
    ],
    "explanation": "A final variable must be initialized when an instance is constructed, or else the code will not compile. This can be\ndone either in an instance initializer or in EVERY constructor.\nThe keyword static is used to signify that a block is static initializer. If nothing is there before starting curly brace\nthen it is an instance initializer."
  },
  {
    "id": "2.1347",
    "topic": "Handling Exceptions",
    "question": "Consider the following code...\nclass MyException extends Exception {}\npublic class TestClass{\npublic void myMethod() throws XXXX{\nthrow new MyException();\n}\n}\nWhat can replace XXXX?",
    "selectCount": 3,
    "options": [
      {
        "label": "A",
        "text": "MyException"
      },
      {
        "label": "B",
        "text": "Exception"
      },
      {
        "label": "C",
        "text": "No throws clause is necessary"
      },
      {
        "label": "D",
        "text": "Throwable"
      },
      {
        "label": "E",
        "text": "RuntimeException"
      }
    ],
    "correctAnswers": [
      "A",
      "B",
      "D"
    ],
    "explanation": "You can use Throwable as well as Exception as both of them are super classes of MyException.\nRuntimeException (and its subclasses such as NullPointerException and ArrayIndexOutOfBoundsException) is\nnot a checked exception. So it cannot cover for MyException which is a checked exception.\nYou cannot use Error as well because it is not in the hierarchy of MyException, which is Object <- Throwable <-\nException <- MyException."
  },
  {
    "id": "2.1348",
    "topic": "Handling Exceptions",
    "question": "Which digits and in what order will be printed when the following program is run?\npublic class TestClass{\npublic static void main(String args[]){\nint k = 0;\ntry{\nint i = 5/k;\n}\ncatch (ArithmeticException e){\nSystem.out.println(\"1\");\n}\ncatch (RuntimeException e){\nSystem.out.println(\"2\");\nreturn ;\n}\ncatch (Exception e){\nSystem.out.println(\"3\");\n}\nfinally{\nSystem.out.println(\"4\");\n}\nSystem.out.println(\"5\");\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "The program will print 5."
      },
      {
        "label": "B",
        "text": "The program will print 1 and 4, in that order."
      },
      {
        "label": "C",
        "text": "The program will print 1, 2 and 4, in that order."
      },
      {
        "label": "D",
        "text": "The program will print 1, 4 and 5, in that order."
      },
      {
        "label": "E",
        "text": "The program will print 1,2, 4 and 5, in that order."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Division by 0 throws a java.lang.ArithmeticException, which is a RuntimeException. This is caught by the\nfirst catch clause because it is the first block that can handle ArithmeticException. This prints 1. Now, as the\nexception is already handled, control goes to finally which prints 4 and then the try/catch/finally ends and 5 is\nprinted.\nRemember : finally is always executed even if try or catch return; (Except when there is System.exit() in try or\ncatch.)"
  },
  {
    "id": "2.1349",
    "topic": "Constructors",
    "question": "Given a class named Test, which of these would be valid definitions for a constructor for the class?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "Test(Test b) { }"
      },
      {
        "label": "B",
        "text": "Test Test( ) { }"
      },
      {
        "label": "C",
        "text": "private final Test( ) { }"
      },
      {
        "label": "D",
        "text": "void Test( ) { }"
      },
      {
        "label": "E",
        "text": "public static void Test(String args[ ] ) { }"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": ""
  },
  {
    "id": "2.1350",
    "topic": "Handling Exceptions",
    "question": "What will the following code snippet print:\nFloat f = null;\ntry{\nf = Float.valueOf(\"12.3\");\nString s = f.toString();\nint i = Integer.parseInt(s);\nSystem.out.println(\"i = \"+i);\n}\ncatch(Exception e){\nSystem.out.println(\"trouble : \"+f);\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "12"
      },
      {
        "label": "B",
        "text": "13"
      },
      {
        "label": "C",
        "text": "trouble : null"
      },
      {
        "label": "D",
        "text": "trouble : 12.3"
      },
      {
        "label": "E",
        "text": "trouble : 0.0"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "f = Float.valueOf(\"12.3\"); executes without any problem.\nint i = Integer.parseInt(s); throws a NumberFormatException because 12.3 is not an integer.\nThus, the catch block prints trouble : 12.3"
  },
  {
    "id": "2.1351",
    "topic": "Working with Java API - String, StringBuilder",
    "question": "Which of the following methods modify the object on which they are called?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "setValue(int, String) of java.lang.String class."
      },
      {
        "label": "B",
        "text": "The substring(int) method of the java.lang.String class"
      },
      {
        "label": "C",
        "text": "The replace() method of the java.lang.String class."
      },
      {
        "label": "D",
        "text": "The reverse() method of the StringBuilder class."
      },
      {
        "label": "E",
        "text": "None of these."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": ""
  },
  {
    "id": "2.1352",
    "topic": "Using Loop Constructs",
    "question": "Using a continue in a while loop causes the loop to break the current iteration and start the next iteration of the\nloop.",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "True"
      },
      {
        "label": "B",
        "text": "False"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "A continue causes the next iteration of the loop to start without executing the remaining statements in the loop."
  },
  {
    "id": "2.1353",
    "topic": "Using Operators and Decision Constructs",
    "question": "Which of the lines will cause a compile time error in the following program?\npublic class MyClass{\npublic static void main(String args[]){\nchar c;\nint i;\nc = 'a';//1\ni = c; //2\ni++; //3\nc = i; //4\nc++; //5\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "line 1"
      },
      {
        "label": "B",
        "text": "line 2"
      },
      {
        "label": "C",
        "text": "line 3"
      },
      {
        "label": "D",
        "text": "line 4"
      },
      {
        "label": "E",
        "text": "line 5"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "1. A char value can ALWAYS be assigned to an int variable, since the int type is wider than the char type. So line 2\nis valid.\n2. Line 4 will not compile because it is trying to assign an int to a char. Although the value of i can be held by the\nchar but since 'i' is not a constant but a variable, implicit narrowing will not occur.\nHere is the rule given in JLS:\nA narrowing primitive conversion may be used if all of the following conditions are satisfied:\nThe expression is a constant expression of type int.\nThe type of the variable is byte, short, or char.\nThe value of the expression (which is known at compile time, because it is a constant expression) is representable\nin the type of the variable.\nNote that narrowing conversion does not apply to long or double.\nso, char ch = 30L; will fail although 30 is representable by a char."
  },
  {
    "id": "2.1354",
    "topic": "Creating and Using Arrays",
    "question": "Which of the following correctly declare a variable which can hold an array of 10 integers?",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "int[ ] iA"
      },
      {
        "label": "B",
        "text": "int[10] iA"
      },
      {
        "label": "C",
        "text": "int iA[ ]"
      },
      {
        "label": "D",
        "text": "Object[ ] iA"
      },
      {
        "label": "E",
        "text": "Object[10] iA"
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "explanation": "Note that an array of integers IS an Object :\nObject obj = new int[]{ 1, 2, 3 }; // is valid.\nBut it is not an array of objects.\nObject[] o = new int[10]; // is not valid.\nDifference between the placement of square brackets:\nint[] i, j; //here i and j are both array of integers.\nint i[], j; //here only i is an array of integers. j is just an integer."
  },
  {
    "id": "2.1355",
    "topic": "Constructors",
    "question": "Given the following code, which of the constructors shown in the options can be added to class B without causing\na compilation to fail?\nclass A{\nint i;\npublic A(int x) { this.i = x; }\n}\nclass B extends A{\nint j;\npublic B(int x, int y) { super(x); this.j = y; }\n}",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "B( ) { }"
      },
      {
        "label": "B",
        "text": "B(int y ) { j = y; }"
      },
      {
        "label": "C",
        "text": "B(int y ) { super(y*2 ); j = y; }"
      },
      {
        "label": "D",
        "text": "B(int y ) { i = y; j = y*2; }"
      },
      {
        "label": "E",
        "text": "B(int z ) { this(z, z); }"
      }
    ],
    "correctAnswers": [
      "C",
      "E"
    ],
    "explanation": "1. Remember that an instance of a class is also an instance of its parent class. Therefore, as a part of constructing\nan instance of a subclass, the JVM has to initialize those parts of the instance that are inherited from the super class\nas well. Further, the parts inherited from the super class need to be initialized first because the subclass may\ndepend on them. Since it is the job of a constructor to initialize an instance, a constructor of the super class has to\nbe invoked before the constructor of the subclass can proceed. The compiler ensures that at least one constructor of\nthe super class is invoked if you do not explicitly call a super class's constructor by adding super(); (i.e. a call to\nthe no-args constructor) as the first line of the sub class constructor. It automatically adds this call IF and ONLY IF\nthe subclass's constructor does not explicitly call any of the super class's constructor in the first line of its code.\nNow, if the super class ( here, A ) does not have a no-args constructor, the call super(); will fail. Hence, choices\nB( ) { }, B(int y ) { j = y; } and B(int y ) { i = y; j = y*2; } are not valid and choice B(int y ) {\nsuper(y*2 ); j = y; } is valid because it explicitly calls super( int ), which is available in A.\n2. Instead of calling a super class's constructor using super(<args>), you can also call another constructor of the\nsub class in the first line (as given in choice B(int z ) { this(z, z); } ). Here, this(int, int) is called in the\nfirst line, which, in turn, calls super(int). So the super class A is correctly instantiated before the sub class B\nbegins initialization."
  },
  {
    "id": "2.1356",
    "topic": "Using Loop Constructs",
    "question": "How many times will the line marked //1 be called in the following code?\nint x = 10;\ndo{\nx--;\nSystem.out.println(x); // 1\n}while(x<10);",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "0"
      },
      {
        "label": "B",
        "text": "1"
      },
      {
        "label": "C",
        "text": "9"
      },
      {
        "label": "D",
        "text": "10"
      },
      {
        "label": "E",
        "text": "None of these."
      }
    ],
    "correctAnswers": [
      "E"
    ],
    "explanation": "A do-while loop is always executed at least once. So in the first iteration, x is decremented and becomes 9. Now\nthe while condition is tested, which returns true because 9 is less than 10. So the loop is executed again with x = 9.\nIn the loop, x is decremented to 8 and the condition is tested again, which again returns true because 8 is less than\n10.\nAs you can see, x keeps on decreasing by one in each iteration and every time the condition x<10 returns true.\nHowever, after x reaches -2147483648, which is its MIN_VALUE, it cannot decrease any further and at this time\nwhen x-- is executed, the value rolls over to 2147483647, which is Integer.MAX_VALUE. At this time, the\ncondition x<10 fails and the loop terminates."
  },
  {
    "id": "2.1357",
    "topic": "Using Operators and Decision Constructs",
    "question": "Which of these combinations of switch expression types and case label value types are legal within a switch\nstatement?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "switch expression of type int and case label value of type char."
      },
      {
        "label": "B",
        "text": "switch expression of type float and case label value of type int."
      },
      {
        "label": "C",
        "text": "switch expression of type byte and case label value of type float."
      },
      {
        "label": "D",
        "text": "switch expression of type char and case label value of type byte."
      },
      {
        "label": "E",
        "text": "switch expression of type boolean and case label value of type boolean."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "You should remember the following rules for a switch statement:\n1. Only String, byte, char, short, int, and enum values can be used as types of a switch variable. (String is allowed\nsince Java 7.) Wrapper classes Byte, Character, Short, and Integer are allowed as well.\n2. The case constants must be assignable to the switch variable. For example, if your switch variable is of class\nString, your case labels must use Strings as well.\n3. The switch variable must be big enough to hold all the case constants. For example, if the switch variable is of\ntype char, then none of the case constants can be greater than 65535 because a char's range is from 0 to 65535.\nSimilarly, the following will not compile because 300 cannot be assigned to 'by', which can only hold values from\n-128 to 127.\nbyte by = 10;\nswitch(by){\ncase 200 : //some code;\ncase 300 : //some code;\n}\n4. All case labels should be COMPILE TIME CONSTANTS.\n5. No two of the case constant expressions associated with a switch statement may have the same value.\n6. At most one default label may be associated with the same switch statement."
  },
  {
    "id": "2.1358",
    "topic": "Handling Exceptions",
    "question": "What will the following program print when run using the command line: java TestClass\npublic class TestClass {\npublic static void methodX() throws Exception {\nthrow new AssertionError();\n}\npublic static void main(String[] args) {\ntry{\nmethodX();\n}\ncatch(Exception e) {\nSystem.out.println(\"EXCEPTION\");\n}\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It will throw AssertionError out of the main method."
      },
      {
        "label": "B",
        "text": "It will print EXCEPTION."
      },
      {
        "label": "C",
        "text": "It will not compile because of the throws clause in methodX()."
      },
      {
        "label": "D",
        "text": "It will end without printing anything because assertions are disabled by default."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": ""
  },
  {
    "id": "2.1359",
    "topic": "Working with Inheritance",
    "question": "Consider :\nclass A { public void perform_work(){} }\nclass B extends A { public void perform_work(){} }\nclass C extends B { public void perform_work(){} }\nHow can you let perform_work() method of A to be called from an instance method in C?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "( (A) this ).perform_work( );"
      },
      {
        "label": "B",
        "text": "super.perform_work( );"
      },
      {
        "label": "C",
        "text": "super.super.perform_work( );"
      },
      {
        "label": "D",
        "text": "this.super.perform_work( );"
      },
      {
        "label": "E",
        "text": "It is not possible."
      }
    ],
    "correctAnswers": [
      "E"
    ],
    "explanation": "The method in C needs to call a method in a superclass two levels up. But super is a keyword and not an attribute\nso super.super.perform_work( ) strategy will not work. There is no way to go more than one level up for\nmethods.\nRemember that this problem doesn't occur for instance variables because variable are never overridden. They are\nshadowed. So to access any of the super class's variable, you can unshadow it using a cast. For example, ((A)\nc).data; This will give you the data variable defined in A even if it is shadowed in B as well as in C."
  },
  {
    "id": "2.1360",
    "topic": "Java Basics",
    "question": "Given the following code, which statements can be placed at the indicated position without causing compile and\nrun time errors?\npublic class Test{\nint i1;\nstatic int i2;\npublic void method1(){\nint i;\n// ... insert statements here\n}\n}",
    "selectCount": 3,
    "options": [
      {
        "label": "A",
        "text": "i = this.i1;"
      },
      {
        "label": "B",
        "text": "i = this.i2;"
      },
      {
        "label": "C",
        "text": "this = new Test( );"
      },
      {
        "label": "D",
        "text": "this.i = 4;"
      },
      {
        "label": "E",
        "text": "this.i1 = i2;"
      }
    ],
    "correctAnswers": [
      "A",
      "B",
      "E"
    ],
    "explanation": ""
  },
  {
    "id": "2.1361",
    "topic": "Using Operators and Decision Constructs",
    "question": "The following program will print\njava.lang.ArithmeticException: / by zero\nclass Test{\npublic static void main(String[] args){\nint d = 0;\ntry{\nint i = 1 / (d* doIt());\n} catch (Exception e){\nSystem.out.println(e);\n}\n}\npublic static int doIt() throws Exception{\nthrow new Exception(\"Forget It\");\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "True"
      },
      {
        "label": "B",
        "text": "False"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "It will print Forget It because before the division can take place doIt() will throw an exception."
  },
  {
    "id": "2.1362",
    "topic": "Working with Methods",
    "question": "Which of the following statements are true?",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "private keyword can never be applied to a class."
      },
      {
        "label": "B",
        "text": "synchronized keyword can never be applied to a class."
      },
      {
        "label": "C",
        "text": "synchronized keyword may be applied to a non-primitive variable."
      },
      {
        "label": "D",
        "text": "final keyword can never be applied to a class."
      },
      {
        "label": "E",
        "text": "A final variable can be hidden in a subclass."
      }
    ],
    "correctAnswers": [
      "B",
      "E"
    ],
    "explanation": "final keyword when applied to a class means the class cannot be subclassed, when applied to a method means the\nmethod cannot be overridden (it can be overloaded though) and when applied to a variable means that the variable\nis a constant."
  },
  {
    "id": "2.1363",
    "topic": "Working with Java API - String, StringBuilder",
    "question": "In Java, Strings are immutable. A direct implication of this is...",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "you cannot call methods like \"1234\".replace('1', '9'); and expect to change the original String."
      },
      {
        "label": "B",
        "text": "you cannot change a String object, once it is created."
      },
      {
        "label": "C",
        "text": "you can change a String object only by the means of its methods."
      },
      {
        "label": "D",
        "text": "you cannot extend String class."
      },
      {
        "label": "E",
        "text": "you cannot compare String objects."
      }
    ],
    "correctAnswers": [
      "A",
      "B"
    ],
    "explanation": ""
  },
  {
    "id": "2.1364",
    "topic": "Java Basics",
    "question": "Given the following class, which of these are valid ways of referring to the class from outside of the package\ncom.enthu?\npackage com.enthu;\npublic class Base{\n// lot of code...\n}",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "Base"
      },
      {
        "label": "B",
        "text": "By importing the package com.* and referring to the class as enthu.Base"
      },
      {
        "label": "C",
        "text": "importing com.* is illegal."
      },
      {
        "label": "D",
        "text": "By importing com.enthu.* and referring to the class as Base."
      },
      {
        "label": "E",
        "text": "By referring to the class as com.enthu.Base."
      }
    ],
    "correctAnswers": [
      "D",
      "E"
    ],
    "explanation": "A class or interface can be referred to by using its fully qualified name or its simple name.\nUsing the fully qualified name will always work, but to use the simple name either the class must be in the same\npackage or it has to be imported.\nBy importing com.enthu.* all the classes from the package will be imported and can be referred to using simple\nnames.\nImporting com.* will not import the subpackage enthu. It will only import the classes in package com."
  },
  {
    "id": "2.1365",
    "topic": "Handling Exceptions",
    "question": "Which of the following standard java exception classes extend java.lang.RuntimeException?",
    "selectCount": 4,
    "options": [
      {
        "label": "A",
        "text": "java.lang.SecurityException"
      },
      {
        "label": "B",
        "text": "java.lang.ClassCastException"
      },
      {
        "label": "C",
        "text": "java.lang.NullPointerException"
      },
      {
        "label": "D",
        "text": "java.lang.CloneNotSupportedException"
      },
      {
        "label": "E",
        "text": "java.lang.IndexOutOfBoundsException"
      }
    ],
    "correctAnswers": [
      "A",
      "B",
      "C",
      "E"
    ],
    "explanation": "The other two exceptions you should know about are:\nIllegalArgumentException extends RuntimeException: If a parameter passed to a method is not valid. Usually\nthrown by the application.\nIllegalStateException extends RuntimeException: Signals that a method has been invoked at an illegal or\ninappropriate time. In other words, the Java environment or Java application is not in an appropriate state for the\nrequested operation. Usually thrown by the application."
  },
  {
    "id": "2.1366",
    "topic": "Using Loop Constructs",
    "question": "What will the following code print when compiled and run:\npublic class TestClass {\npublic static void main(String[] args){\nwhile(int k = 5; k<7){\nSystem.out.println(k++);\n}\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "5\n6"
      },
      {
        "label": "B",
        "text": "5\n6\n7"
      },
      {
        "label": "C",
        "text": "It will keep printing 5."
      },
      {
        "label": "D",
        "text": "It will not compile."
      },
      {
        "label": "E",
        "text": "It will throw an exception at run time."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": ""
  },
  {
    "id": "2.1369",
    "topic": "Using Operators and Decision Constructs",
    "question": "Given the following declarations, identify which statements will return true:\nInteger i1 = 1;\nInteger i2 = new Integer(1);\nint i3 = 1;\nByte b1 = 1;\nLong g1 = 1L;",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "i1 == i2"
      },
      {
        "label": "B",
        "text": "i1 == i3"
      },
      {
        "label": "C",
        "text": "i1 == b1"
      },
      {
        "label": "D",
        "text": "i1.equals(i2)"
      },
      {
        "label": "E",
        "text": "i1.equals(g1)"
      },
      {
        "label": "F",
        "text": "i1.equals(b1)"
      }
    ],
    "correctAnswers": [
      "B",
      "D"
    ],
    "explanation": ""
  },
  {
    "id": "2.1370",
    "topic": "Working with Methods - Overloading",
    "question": "What will the following code print when run?\nclass Baap {\npublic int h = 4;\npublic int getH() {\nSystem.out.println(\"Baap \" + h);\nreturn h;\n}\n}\npublic class Beta extends Baap {\npublic int h = 44;\npublic int getH() {\nSystem.out.println(\"Beta \" + h);\nreturn h;\n}\npublic static void main(String[] args) {\nBaap b = new Beta();\nSystem.out.println(b.h + \" \" + b.getH());\nBeta bb = (Beta) b;\nSystem.out.println(bb.h + \" \" + bb.getH());\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "Beta 44\n4 44\nBaap 44\n44 44"
      },
      {
        "label": "B",
        "text": "Baap 44\n4 44\nBeta 44\n44 44"
      },
      {
        "label": "C",
        "text": "Beta 44\n4 44\nBeta 44\n4 44"
      },
      {
        "label": "D",
        "text": "Beta 44\n4 44\nBeta 44\n44 44"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Always remember: Methods are overridden and variables are shadowed.\nHere, b refers to an object of class Beta so b.getH() will always call the overridden (subclass's method). However,\nthe type of reference of b is Baap. so b.h will always refer to Baap's h.\nFurther, inside Beta's getH(), Beta's h will be accessed instead of Baap's h because you are accessing this.h ('this'\nis implicit) and the type of this is Beta."
  },
  {
    "id": "2.1371",
    "topic": "Working with Java Data Types",
    "question": "Given the following declarations:\nint a = 5, b = 7, k = 0;\nInteger m = null;\nand the following statements:\nk = new Integer(a) + new Integer(b); //1\nk = new Integer(a) + b; //2\nk = a + new Integer(b); //3\nm = new Integer(a) + new Integer(b); //4\nExecuted independent of each other, what will be the value of k (for //1, //2, and //3) and m (for //4) after execution\nof each of these statements?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "12\nwill not compile\nwill not compile\n12"
      },
      {
        "label": "B",
        "text": "will not compile\nwill not compile\nwill not compile\n12"
      },
      {
        "label": "C",
        "text": "12\n12\n12\n12"
      },
      {
        "label": "D",
        "text": "will not compile\nwill not compile\nwill not compile\nwill not compile"
      },
      {
        "label": "E",
        "text": "12\n12\n12\nwill not compile"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "In all of these statements, auto-unboxing of integers will occur. For the last statement, after unboxing a and b, the\nvalue 12 will be boxed into an Integer object."
  },
  {
    "id": "2.1372",
    "topic": "Handling Exceptions",
    "question": "Identify the exceptions that will be received when the following code snippets are executed.\n1. int factorial(int n){\nif(n==1) return 1;\nelse return n*factorial(n-1);\n}\nAssume that it is called with a very large integer.\n2. void printMe(Object[] oa){\nfor(int i=0; i<=oa.length; i++)\nSystem.out.println(oa[i]);\n}\nAssume that it is called as such: printMe(null);\n3. Object m1(){\nreturn new Object();\n}\nvoid m2(){\nString s = (String) m1();\n}\nAssume that method m2 is invoked.",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "ClassCastException\nArrayIndexOutOfBoundsException\nStackOverflowError"
      },
      {
        "label": "B",
        "text": "ClassCastException\nArrayIndexOutOfBoundsException\nSecurityException"
      },
      {
        "label": "C",
        "text": "No Exception Will Be Thrown\nSecurityException\nWill Not Compile"
      },
      {
        "label": "D",
        "text": "StackOverflowError\nNullPointerException\nNo Exception Will Be Thrown"
      },
      {
        "label": "E",
        "text": "StackOverflowError\nArrayIndexOutOfBoundsException\nClassCastException"
      },
      {
        "label": "F",
        "text": "StackOverflowError\nNullPointerException\nNo Exception Will Be Thrown"
      }
    ],
    "correctAnswers": [],
    "explanation": "Please read ExceptionClassSummary document in the \"Study References\" section."
  },
  {
    "id": "2.1373",
    "topic": "Working with Methods - Overloading",
    "question": "Complete the following code by filling the two blanks -\nclass XXX{\npublic void m() throws Exception{\nthrow new Exception();\n}\n}\nclass YYY extends XXX{\npublic void m(){ }\npublic static void main(String[] args) {\n________ obj = new ______();\nobj.m();\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "XXX XXX"
      },
      {
        "label": "B",
        "text": "XXX YYY"
      },
      {
        "label": "C",
        "text": "YYY XXX"
      },
      {
        "label": "D",
        "text": "YYY YYY"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "This question is based on two concepts -\n1. The overriding method may choose to have no throws clause even if the overridden method has a throws\nclause. Thus, the method m in YYY is valid.\n2. Whether a call needs to be wrapped in a try/catch or whether the enclosing method requires a throws clause\ndepends on the class of the reference and not the class of the actual object. This is because it is the compiler that\nchecks whether a call needs to have exception handling and the compiler knows only about the declared class of a\nvariable. It doesn't know about the actual object referred to by that variable (which is known only to JVM at run\ntime).\nHere, if you define obj of type XXX, the call obj.m() will have to be wrapped into a try/catch because main()\ndoesn't have a throws clause. But if you define obj of class YYY, there is no need of try catch because YYY's m()\ndoes not throw an exception.\nNow, if the declared class of obj is YYY, you cannot assign it an object of class XXX because XXX is a superclass of\nYYY. So the only option left is to do:\nYYY obj = new YYY();"
  },
  {
    "id": "2.1374",
    "topic": "Working with Java Data Types",
    "question": "Given that the bit pattern for the amount $20,000 is 100111000100000, which of the following is/are valid\ndeclarations of an int variable that contains this value?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "int b = (binary)100111000100000;"
      },
      {
        "label": "B",
        "text": "int b = 01001110_00100000;"
      },
      {
        "label": "C",
        "text": "int b = 0b01001110_00100000;"
      },
      {
        "label": "D",
        "text": "int b = b1001110_00100000;"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Beginning with Java 7, you can include underscores in between the digits. This helps in writing long numbers. For\nexample, if you want to write 1 million, you can write: 1_000_000, which is easier to interpret for humans than\n1000000.\nNote that you cannot start or end a value with an underscore though. Thus, 100_ or _100 would be invalid values.\n_100 would actually be a valid variable name!\nYou may use underscore for all kinds of numbers including long, double, float, binary, as well as hex. For\nexample, the following are all valid numbers -\nint hex = 0xCAFE_BABE;\nfloat f = 9898_7878.333_333f;\nint bin = 0b1111_0000_1100_1100;"
  },
  {
    "id": "2.1375",
    "topic": "Working with Java Data Types",
    "question": "Identify the valid code fragments when occurring by themselves within a method.",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "long y = 123_456_L;"
      },
      {
        "label": "B",
        "text": "long z = _123_456L;"
      },
      {
        "label": "C",
        "text": "float f1 = 123_.345_667F;"
      },
      {
        "label": "D",
        "text": "float f2 = 123_345_667F;"
      },
      {
        "label": "E",
        "text": "None of the above declarations are valid."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "You may use underscore for all kinds of numbers including long, double, float, binary, as well as hex. For\nexample, the following are all valid numbers -\nint hex = 0xCAFE_BABE;\nfloat f = 9898_7878.333_333f;\nint bin = 0b1111_0000_1100_1100;"
  },
  {
    "id": "2.1376",
    "topic": "Working with Java Data Types",
    "question": "Which of the following is/are valid double values for 10 million? (A million has 6 zeros)",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "double d = 10,000,000.0;"
      },
      {
        "label": "B",
        "text": "double d = 10-000-000;"
      },
      {
        "label": "C",
        "text": "double d = 10_000_000;"
      },
      {
        "label": "D",
        "text": "double d = 10 000 000;"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Beginning with Java 7, you can include underscores in between the digits. This helps in writing long numbers. For\nexample, if you want to write 1 million, you can write: 1_000_000, which is easier than 1000000 for humans to\ninterpret.\nNote that you cannot start or end a value with an underscore though. Thus, 100_ or _100 are invalid values. _100 is\nactually a valid variable name!\nYou may use underscore for all kinds of numbers including long, double, float, binary, as well as hex. For\nexample, the following are all valid numbers -\nint hex = 0xCAFE_BABE;\nfloat f = 9898_7878.333_333f;\nint bin = 0b1111_0000_1100_1100;"
  },
  {
    "id": "2.1377",
    "topic": "Working with Java Data Types",
    "question": "Given the following code:\npublic class TestClass {\npublic static void main(String[] args) {\n//INSERT CODE HERE\nSystem.out.println(x);\n}\n}\nWhat can be inserted in the above code so that it will compile and run without any problem?",
    "selectCount": 3,
    "options": [
      {
        "label": "A",
        "text": "double x = 0xb10_000;"
      },
      {
        "label": "B",
        "text": "float x = 0b10_000;"
      },
      {
        "label": "C",
        "text": "float x = 0b20_000;"
      },
      {
        "label": "D",
        "text": "float x = 0b10_000f;"
      },
      {
        "label": "E",
        "text": "long x = 0b10000L;"
      },
      {
        "label": "F",
        "text": "double d = 0b10_000D;"
      }
    ],
    "correctAnswers": [
      "A",
      "B",
      "E"
    ],
    "explanation": "The real exam contains a few questions that test you on how to write numbers in binary. You might want to go\nthrough Section 3.10.1 and 3.10.2 of Java Language Specification to understand how this works."
  },
  {
    "id": "2.1378",
    "topic": "Working with Java Data Types",
    "question": "What will the following code print?\npublic class TestClass {\npublic static void main(String[] args) {\nint x = 1____3; //1\nlong y = 1_3; //2\nfloat z = 3.234_567f; //3\nSystem.out.println(x+\" \"+y+\" \"+z);\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "Compilation error at //1"
      },
      {
        "label": "B",
        "text": "Compilation error at //2"
      },
      {
        "label": "C",
        "text": "Compilation error at //3"
      },
      {
        "label": "D",
        "text": "Compilation error at //1 and //3"
      },
      {
        "label": "E",
        "text": "10003 103 3.234567"
      },
      {
        "label": "F",
        "text": "13 13 3.234567"
      }
    ],
    "correctAnswers": [
      "F"
    ],
    "explanation": "You may use underscore for all kinds of numbers including long, double, float, binary, as well as hex. For\nexample, the following are all valid numbers -\nint hex = 0xCAFE_BABE;\nfloat f = 9898_7878.333_333f;\nint bin = 0b1111_0000_1100_1100;"
  },
  {
    "id": "2.1379",
    "topic": "Working with Java Data Types",
    "question": "What will the following code print?\nint value = 1,000,000; //1\nswitch(value){\ncase 1_000_000 : System.out.println(\"A million 1\"); //2\nbreak;\ncase 1000000 : System.out.println(\"A million 2\"); //3\nbreak;\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "A million 1"
      },
      {
        "label": "B",
        "text": "A million 2"
      },
      {
        "label": "C",
        "text": "Compilation error because of //1"
      },
      {
        "label": "D",
        "text": "Compilation error because of //2"
      },
      {
        "label": "E",
        "text": "Compilation error because of //3"
      },
      {
        "label": "F",
        "text": "Compilation error because of //1 and //3"
      }
    ],
    "correctAnswers": [
      "F"
    ],
    "explanation": "1. You may use underscores (but not commas) to format a number for better code readability. So //1 is invalid.\n2. Adding underscores doesn't actually change the number. The compiler ignores the underscores. So 1_000_000\nand 1000000 are actually same and you cannot have two case blocks with the same value. Therefore, the second\ncase at //3 is invalid.\nYou may use underscore for all kinds of numbers including long, double, float, binary, as well as hex. For\nexample, the following are all valid numbers -\nint hex = 0xCAFE_BABE;\nfloat f = 9898_7878.333_333f;\nint bin = 0b1111_0000_1100_1100;"
  },
  {
    "id": "2.1380",
    "topic": "Creating and Using Arrays",
    "question": "Which of the following is/are valid instantiations and initializations of a multi dimensional array?",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "int[][] array2D = new int[][] { { 0, 1, 2, 4} {5, 6}};"
      },
      {
        "label": "B",
        "text": "int[][][] array3D = {{0, 1}, {2, 3}, {4, 5}};"
      },
      {
        "label": "C",
        "text": "int[] array2D[] = new int [2] [2];\narray2D[0] [0] = 1;\narray2D[0] [1] = 2;\narray2D[1] [0] = 3;"
      },
      {
        "label": "D",
        "text": "int[][] array2D = new int[][]{0, 1};"
      },
      {
        "label": "E",
        "text": "int[] arr = {1, 2};\nint[][] arr2 = {arr, {1, 2}, arr};\nint[][][] arr3 = {arr2};"
      }
    ],
    "correctAnswers": [
      "C",
      "E"
    ],
    "explanation": ""
  },
  {
    "id": "2.1381",
    "topic": "Creating and Using Arrays",
    "question": "What will the following code print when compiled and run?\nint [] [] array = {{0}, {0, 1}, {0, 1, 2}, {0, 1, 2, 3}, {0, 1, 2, 3, 4}};\nint[] arr1 = array[4];\nSystem.out.println (arr1[4][1]);\nSystem.out.println (array[4][1]);",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "1\n1"
      },
      {
        "label": "B",
        "text": "1\n4"
      },
      {
        "label": "C",
        "text": "4\n1"
      },
      {
        "label": "D",
        "text": "It will not compile."
      },
      {
        "label": "E",
        "text": "It will throw ArrayIndexOutOfBoundsException at run time."
      },
      {
        "label": "F",
        "text": "It will throw IllegalArgumentException at run time."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": ""
  },
  {
    "id": "2.1384",
    "topic": "Creating and Using Arrays",
    "question": "Consider the following code:\npublic class ArrayTest {\nstatic int[][] table = new int[2][3];\npublic static void init() {\nfor (int x = 0; x < table.length; x++) {\nfor (int y = 0; y < table[x].length; y++) {\n//insert code to initialize\n}\n}\n}\npublic static void multiply() {\nfor (int x = 0; x < table.length; x++) {\nfor (int y = 0; y < table[x].length; y++) {\n//insert code to multiply\n}\n}\n}\n}\nWhich of the following options can be used in the code above so that the init method initializes each table element\nto the sum of its row and column number and the multiply method just multiplies the element value by 2?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "table[x, y] = x+y;\nand\ntable[x, y] = table[x, y]*2;"
      },
      {
        "label": "B",
        "text": "table[x][y] = x+y;\nand\ntable[x][y] = table[x][y]*2;"
      },
      {
        "label": "C",
        "text": "table[[x] [y]] = x+y;\nand\ntable[[x] [y]] = table[[x] [y]]*2;"
      },
      {
        "label": "D",
        "text": "table(x, y) = x+y;\nand\ntable(x, y) = table(x, y)*2;"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": ""
  },
  {
    "id": "2.1385",
    "topic": "Handling Exceptions",
    "question": "What will the following code print when compiled and run?\n(Assume that MySpecialException is an unchecked exception.)\n1. public class ExceptionTest {\n2. public static void main(String[] args) {\n3. try {\n4. doSomething();\n5. } catch (MySpecialException e) {\n6. System.out.println(e);\n7. }\n8. }\n9.\n10. static void doSomething() {\n11. int[] array = new int[4];\n12. array[4] = 4;\n13. doSomethingElse();\n14. }\n15.\n16. static void doSomethingElse() {\n17. throw new MySpecialException(\"Sorry, can't do something else\");\n18. }\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It will not compile."
      },
      {
        "label": "B",
        "text": "Exception in thread \"main\" java.lang.ArrayIndexOutOfBoundsException: 4\nat ExceptionTest.doSomething(ExceptionTest.java:12)\nat ExceptionTest.main(ExceptionTest.java:4)"
      },
      {
        "label": "C",
        "text": "Exception in thread \"main\" MySpecialException: 4\nat ExceptionTest.doSomethingElse(ExceptionTest.java:17)\nat ExceptionTest.doSomething(ExceptionTest.java:12)\nat ExceptionTest.main(ExceptionTest.java:4)"
      },
      {
        "label": "D",
        "text": "Exception in thread \"main\" MySpecialException: Sorry, can't do something else\nat ExceptionTest.doSomethingElse(ExceptionTest.java:17)\nat ExceptionTest.doSomething(ExceptionTest.java:12)\nat ExceptionTest.main(ExceptionTest.java:4)"
      },
      {
        "label": "E",
        "text": "Exception in thread \"main\" MySpecialException: Sorry, can't do something else\nat ExceptionTest.doSomethingElse(ExceptionTest.java:17)\nat ExceptionTest.doSomething(ExceptionTest.java:13)\nat ExceptionTest.main(ExceptionTest.java:4)"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Since the length of array is only 4, you can't do array[4], because that would access the 5th element. Hence, an\nArrayIndexOutOfBoundsException will be thrown at line 12. Line 13 will not even be executed.\nSince the exception is not caught anywhere, it will be thrown out to the JVM, which will print the stack trace of\nthe exception."
  },
  {
    "id": "2.1386",
    "topic": "Using Loop Constructs",
    "question": "What can be inserted in the following code so that it will print exactly 2345 when compiled and run?\npublic class FlowTest {\nstatic int[] data = {1, 2, 3, 4, 5};\npublic static void main(String[] args) {\nfor (int i : data) {\nif (i < 2) {\n//insert code1 here\n}\nSystem.out.print(i);\nif (i == 3) {\n//insert code2 here\n}\n}\n}\n}",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "break;\nand\n//nothing is required"
      },
      {
        "label": "B",
        "text": "continue;\nand\n//nothing is required"
      },
      {
        "label": "C",
        "text": "continue;\nand\ncontinue;"
      },
      {
        "label": "D",
        "text": "break;\nand\ncontinue;"
      },
      {
        "label": "E",
        "text": "break;\nand\nbreak;"
      }
    ],
    "correctAnswers": [
      "B",
      "C"
    ],
    "explanation": "This is a very simple loop to follow if you know what break and continue do.\nbreak breaks the nearest outer loop. Once a break is encountered, no further iterations of that loop will execute.\ncontinue simply starts the next iteration of the loop. Once a continue is encountered, rest of the statements within\nthat loop are ignored (not executed ) and the next iteration is started."
  },
  {
    "id": "2.1387",
    "topic": "Creating and Using Arrays",
    "question": "Identify correct statements about a two dimensional array.",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It is like a rectangular matrix where number of rows and number of columns may be different but each row or"
      },
      {
        "label": "B",
        "text": "It is like a square matrix where number of rows and number of columns are same and each row or each column\nhave the same number of elements."
      },
      {
        "label": "C",
        "text": "The number of rows and columns must be specified at the time it is declared."
      },
      {
        "label": "D",
        "text": "It is basically an array of arrays."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Unlike some other languages, multi dimensional arrays in Java are not like matrices. They are just arrays of arrays.\nFor example, if you have a two dimensional array then each element of this array is a one dimensional array. Each\nsuch array element is independent and therefore can be of different lengths (but not of different type)."
  },
  {
    "id": "2.1388",
    "topic": "Using Loop Constructs",
    "question": "Consider the following code:\nString[] dataList = {\"x\", \"y\", \"z\"};\nfor (String dataElement : dataList) {\nint innerCounter = 0;\nwhile (innerCounter < dataList.length) {\nSystem.out.println(dataElement + \", \" + innerCounter);\ninnerCounter++;\n}\n}\nHow many times will the output contain 2?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "0"
      },
      {
        "label": "B",
        "text": "1"
      },
      {
        "label": "C",
        "text": "2"
      },
      {
        "label": "D",
        "text": "3"
      },
      {
        "label": "E",
        "text": "4"
      },
      {
        "label": "F",
        "text": "It will fail to compile."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "The while loop runs three times for each element in the dataList. So it will print 2 three times. Here is the complete\noutput:\nx, 0\nx, 1\nx, 2\ny, 0\ny, 1\ny, 2\nz, 0\nz, 1\nz, 2"
  },
  {
    "id": "2.1390",
    "topic": "Working with Inheritance",
    "question": "What can be inserted in the code below so that it will print UP UP UP?\npublic class Speak {\npublic static void main(String[] args) {\nSpeak s = new GoodSpeak();\nINSERT CODE HERE\n}\n}\nclass GoodSpeak extends Speak implements Tone{\npublic void up(){\nSystem.out.println(\"UP UP UP\");\n}\n}\ninterface Tone{\nvoid up();\n}",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "((Tone)s).up();"
      },
      {
        "label": "B",
        "text": "s.up();"
      },
      {
        "label": "C",
        "text": "((GoodSpeak)s).up();"
      },
      {
        "label": "D",
        "text": "(GoodSpeak)s.up();"
      },
      {
        "label": "E",
        "text": "(Tone)(GoodSpeak)s.up();"
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "explanation": ""
  },
  {
    "id": "2.1391",
    "topic": "Using Loop Constructs",
    "question": "Given:\npackage loops;\npublic class JustLooping {\nprivate int j;\nvoid showJ(){\nwhile(j<=5){\nfor(int j=1; j <= 5;){\nSystem.out.print(j+\" \");\nj++;\n}\nj++;\n}\n}\npublic static void main(String[] args) {\nnew JustLooping().showJ();\n}\n}\nWhat is the result?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It will not compile."
      },
      {
        "label": "B",
        "text": "It will print 1 2 3 4 5 five times."
      },
      {
        "label": "C",
        "text": "It will print 1 3 5 five times."
      },
      {
        "label": "D",
        "text": "It will print 1 2 3 4 5 once."
      },
      {
        "label": "E",
        "text": "It will print 1 2 3 4 5 six times."
      }
    ],
    "correctAnswers": [
      "E"
    ],
    "explanation": "The point to note here is that the j in for loop is different from the instance member j. Therefore, j++ occuring in\nthe for loop doesn't affect the while loop. The for loop prints 1 2 3 4 5.\nThe while loop runs for the values 0 to 5 i.e. 6 iterations. Thus, 1 2 3 4 5 is printed 6 times. Note that after the end\nof the while loop the value of j is 6."
  },
  {
    "id": "2.1392",
    "topic": "Working with Java API - String, StringBuilder",
    "question": "Given:\npackage strings;\npublic class StringFromChar {\npublic static void main(String[] args) {\nString myStr = \"good\";\nchar[] myCharArr = {'g', 'o', 'o', 'd' };\nString newStr = null;\nfor(char ch : myCharArr){\nnewStr = newStr + ch;\n}\nSystem.out.println((newStr == myStr)+ \" \" + (newStr.equals(myStr)));\n}\n}\nWhat will it print when compiled and run?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "true true"
      },
      {
        "label": "B",
        "text": "true false"
      },
      {
        "label": "C",
        "text": "false true"
      },
      {
        "label": "D",
        "text": "false false"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Since newStr is null at the beginning, the first iteration of the loop assigns \"nullg\" to newStr. Therefore, at the\nend of the loop, myStr is actually \"nullgood\".\nHad newStr been defined as String newStr = \"\"; then the program would have printed false for newStr ==\nmyStr because both the references are pointing to two different objects, and true for newStr.equals(myStr)\nbecause both the objects contain the exact same String."
  },
  {
    "id": "2.1393",
    "topic": "Working with Java API - String, StringBuilder",
    "question": "Given:\npackage strings;\npublic class StringFromChar {\npublic static void main(String[] args) {\nString myStr = \"good\";\nchar[] myCharArr = {'g', 'o', 'o', 'd' };\nString newStr = \"\";\nfor(char ch : myCharArr){\nnewStr = newStr + ch;\n}\nboolean b1 = newStr == myStr;\nboolean b2 = newStr.equals(myStr);\nSystem.out.println(b1+ \" \" + b2);\n}\n}\nWhat will it print when compiled and run?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "true true"
      },
      {
        "label": "B",
        "text": "true false"
      },
      {
        "label": "C",
        "text": "false true"
      },
      {
        "label": "D",
        "text": "false false"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "In every iteration of the loop, a new String object is created by appending the character to the existing String\nobject. This new String object is assigned back to newStr. At the end of the loop, myStr is \"good\", which is why\nnewStr.equals(myStr) prints true. Since, newStr points to a different String object than the one pointed to by\nmyStr, newStr == myStr evaluates to false.\nHad newStr been defined as String newStr = null;, the program would have printed false for newStr ==\nmyStr because both the references are pointing to two different objects, and false for newStr.equals(myStr)\nbecause newStr would then contain \"nullgood\"."
  },
  {
    "id": "2.1394",
    "topic": "Using Loop Constructs",
    "question": "Given:\npublic class SimpleLoop {\npublic static void main(String[] args) {\nint i=0, j=10;\nwhile (i<=j) {\ni++;\nj--;\n}\nSystem.out.println(i+\" \"+j);\n}\n}\nWhat is the result?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "6 4"
      },
      {
        "label": "B",
        "text": "6 5"
      },
      {
        "label": "C",
        "text": "6 6"
      },
      {
        "label": "D",
        "text": "5 3"
      },
      {
        "label": "E",
        "text": "5 4"
      },
      {
        "label": "F",
        "text": "5 5"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "In such type of questions, you will need to work out the values of the loop variables for every iteration (unless you\ncan recognize the pattern) on your worksheet.\nBeginning i=0, j=10\nIteration 1: i<=j is true, i becomes 1 and j becomes 9\nIteration 2: i<=j is true, i becomes 2 and j becomes 8\nIteration 3: i<=j is true, i becomes 3 and j becomes 7\nIteration 4: i<=j is true, i becomes 4 and j becomes 6\nIteration 5: i<=j is true, i becomes 5 and j becomes 5\nIteration 6: i<=j is true, i becomes 6 and j becomes 4\nIteration 7: i<=j is false so the while loop is not entered.\nPrint 6 and 4."
  },
  {
    "id": "2.1395",
    "topic": "Using Loop Constructs",
    "question": "Given:\npublic class SimpleLoop {\npublic static void main(String[] args) {\nint i=0, j=10;\nint count = 0;\nwhile (i<j) {\ni++;\nj--;\ncount++;\n}\nSystem.out.println(i+\" \"+j+\" \"+count);\n}\n}\nWhat is the result?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "6 4 5"
      },
      {
        "label": "B",
        "text": "6 5 5"
      },
      {
        "label": "C",
        "text": "6 5 6"
      },
      {
        "label": "D",
        "text": "6 4 6"
      },
      {
        "label": "E",
        "text": "5 5 5"
      }
    ],
    "correctAnswers": [
      "E"
    ],
    "explanation": "In such type of questions, you will need to work out the values of the loop variables for every iteration (unless you\ncan recognize the pattern) on your worksheet.\nBeginning i=0, j=10, count = 0\nIteration 1: i<j is true, i becomes 1, j becomes 9, count becomes 1\nIteration 2: i<j is true, i becomes 2, j becomes 8, count becomes 2\nIteration 3: i<j is true, i becomes 3, j becomes 7, count becomes 3\nIteration 4: i<j is true, i becomes 4, j becomes 6, count becomes 4\nIteration 5: i<j is true, i becomes 5, j becomes 5, count becomes 5\nIteration 6: i<j is false so the while loop is not entered.\nPrint 5 5 5."
  },
  {
    "id": "2.1396",
    "topic": "Creating and Using Arrays",
    "question": "What is the result of compiling and running the following program?\npublic class Learner {\npublic static void main(String[] args) {\nString[] dataArr = new String[4];\ndataArr[1] = \"Bill\";\ndataArr[2] = \"Steve\";\ndataArr[3] = \"Larry\";\ntry{\nfor(String data : dataArr){\nSystem.out.print(data+\" \");\n}\n}catch(Exception e){\nSystem.out.println(e.getClass());\n}\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "Bill Steve Larry null"
      },
      {
        "label": "B",
        "text": "Bill Steve Larry class java.lang.NullPointerException"
      },
      {
        "label": "C",
        "text": "class java.lang.Exception Bill Steve Larry"
      },
      {
        "label": "D",
        "text": "Bill Steve Larry class java.lang.Exception"
      },
      {
        "label": "E",
        "text": "null Bill Steve Larry"
      }
    ],
    "correctAnswers": [
      "E"
    ],
    "explanation": "Array indexing starts with 0. The first element therefore is at dataArr[0], which is not set in this code. It is\ninitialized by default to null. Hence, the code prints null Bill Steve Larry."
  },
  {
    "id": "2.1397",
    "topic": "Using Operators and Decision Constructs",
    "question": "Given:\npublic class CrazyMath {\npublic static void main(String[] args) {\nint x = 10, y = 20;\nint dx, dy;\ntry{\ndx = x % 5;\ndy = y/dx;\n}catch(ArithmeticException ae){\nSystem.out.println(\"Caught AE\");\ndx = 2;\ndy = y/dx;\n}\nx = x/dx;\ny = y/dy;\nSystem.out.println(dx+\" \"+dy);\nSystem.out.println(x+\" \"+y);\n}\n}\nWhat is the output?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "Caught AE\n2 10\n5 5"
      },
      {
        "label": "B",
        "text": "Caught AE\n2 10\n5 2"
      },
      {
        "label": "C",
        "text": "2 10\n5 2"
      },
      {
        "label": "D",
        "text": "It will not compile."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "% is the modulus operator. It returns the remainder of a division. Thus, dx = x%5 assigns 0 to dx because 5 divides\n10 perfectly (no remainder).\ny/dx therefore throws an ArithmeticException because of division by 0, which is caught by the catch block.\nIn the catch block, \"Caught AE\" is printed\" and then dx is set to 2 and dy becomes 20/2 i.e.10\nx = x/dx => x becomes 10/2 i.e. 5 and y = y/dy => becomes 20/10 i.e. 2"
  },
  {
    "id": "2.1398",
    "topic": "Creating and Using Arrays",
    "question": "Given:\npublic class FunWithArgs {\npublic static void main(String[][] args) {\nSystem.out.println(args[0][1]);\n}\npublic static void main(String[] args) {\nFunWithArgs fwa = new FunWithArgs();\nString[][] newargs = {args};\nfwa.main(newargs);\n}\n}\nThe above program is compiled with the command line:\njavac FunWithArgs.java\nand then run with:\njava FunWithArgs a b c\nWhat will be the output?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It will not compile."
      },
      {
        "label": "B",
        "text": "It will throw ArrayIndexOutOfBoundsException at run time."
      },
      {
        "label": "C",
        "text": "It will print b"
      },
      {
        "label": "D",
        "text": "It will print null"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "There is no problem with the code. The main method is just overloaded.\nWhen it is run, the main method with String[] will be called. This method then calls the main with String[][]\nwith an argument { {\"a\", \"b\", \"c\"} }\nThus, args[0][1] refers to \"b\", which is what is printed."
  },
  {
    "id": "2.1399",
    "topic": "Working with Inheritance",
    "question": "What will the following code print when compiled and run?\nimport java.util.*;\npublic class ClassnameTest {\npublic static void main(String[] args) {\nList<String> list = new ArrayList<>();\nStringBuilder sb = new StringBuilder(\"mrx\");\nString s = sb.toString();\nlist.add(s);\nSystem.out.println(s.getClass());\nSystem.out.println(list.getClass());\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "class java.lang.String\nclass java.util.List"
      },
      {
        "label": "B",
        "text": "class java.lang.String\nclass java.util.Collection"
      },
      {
        "label": "C",
        "text": "class java.lang.String\nclass java.util.ArrayList"
      },
      {
        "label": "D",
        "text": "class java.lang.Object\nclass java.util.ArrayList"
      },
      {
        "label": "E",
        "text": "class java.lang.Object\nclass java.util.List"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "The getClass method always returns the Class object for the actual object on which the method is called\nirrespective of the type of the reference. Since s refers to an object of class String, s.getClass returns Class\nobject for String and similarly list.getClass returns Class object for ArrayList."
  },
  {
    "id": "2.1400",
    "topic": "Creating and Using Arrays",
    "question": "Given:\npublic class TableTest {\nstatic String[][] table;\npublic static void main(String[] args) {\nString[] x = { \"Mon\", \"Tue\", \"Wed\", \"Thu\", \"Fri\", \"Sat\", \"Sun\" };\nString[] y1 = { \"1\", \"2\", \"3\", \"4\", \"5\" };\nString[] y2 = { \"a\", \"b\", \"c\" };\ntable = new String[3][];\ntable[0] = x;\ntable[1] = y1;\ntable[2] = y2;\n//INSERT CODE HERE\n}\n}\nWhat can be inserted in the above code to make it print Sun5c?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "for(String[] row : table){\nSystem.out.print(row[row.length]);\n}"
      },
      {
        "label": "B",
        "text": "int i = 0;\nfor(String[] col : table){\ni++;\nif(i==col.length){\nSystem.out.print(table[col.length][i]);\n}\n}"
      },
      {
        "label": "C",
        "text": "for(String[] row : table){\nSystem.out.print(row[row.length-1]);\n}"
      },
      {
        "label": "D",
        "text": "for(int i=0; i<table.length-1; i++){\nint j = table[i].length-1;\nSystem.out.print(table[i][j]);\n}"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": ""
  },
  {
    "id": "2.1401",
    "topic": "Using Operators and Decision Constructs",
    "question": "Given:\nint expr1 = 3 + 5 * 9 - 7;\nint expr2 = 3 + (5 * 9) - 7;\nint expr3 = 3 + 5 * (9 - 7);\nint expr4 = (3 + 5) * 9 - 7;\nWhich of the above variables will have the value 45?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "expr1"
      },
      {
        "label": "B",
        "text": "expr2"
      },
      {
        "label": "C",
        "text": "expr3"
      },
      {
        "label": "D",
        "text": "expr4"
      },
      {
        "label": "E",
        "text": "None of them."
      }
    ],
    "correctAnswers": [
      "E"
    ],
    "explanation": "Their values are 41 41 13 and 65.\nYou may find similar questions in the exam where you have to find the expression that returns the highest or lower\nvalue. In such cases, you will need to evaluate each expression."
  },
  {
    "id": "2.1402",
    "topic": "Using Operators and Decision Constructs",
    "question": "What will the following program print when run?\npublic class Operators{\npublic static int operators(){\nint x1 = -4;\nint x2 = x1--;\nint x3 = ++x2;\nif(x2 > x3){\n--x3;\n}else{\nx1++;\n}\nreturn x1 + x2 + x3;\n}\npublic static void main(String[] args) {\nSystem.out.println(operators());\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "-9"
      },
      {
        "label": "B",
        "text": "-10"
      },
      {
        "label": "C",
        "text": "-11"
      },
      {
        "label": "D",
        "text": "-12"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "You will need to work out the values of the variables at each line on your worksheet to answer such questions.\nx1 is -4\nx2 is (x1)-- => x2 is first assigned the value of x1 i.e. -4 and then x1 in decremented by 1 to become -5\nx3 is ++(x2) => x2 becomes -3 first and then its value i.e. -3 is assigned to x3\nx2>x3 is false so x1++ => x1 becomes -4\ntherefore -4 + -3 + -3 => -10."
  },
  {
    "id": "2.1403",
    "topic": "Working with Inheritance",
    "question": "Given:\n//in file Movable.java\npackage p1;\npublic interface Movable {\nint location = 0;\nvoid move(int by);\npublic void moveBack(int by);\n}\n//in file Donkey.java\npackage p2;\nimport p1.Movable;\npublic class Donkey implements Movable{\nint location = 200;\npublic void move(int by) {\nlocation = location+by;\n}\npublic void moveBack(int by) {\nlocation = location-by;\n}\n}\n//in file TestClass.java\npackage px;\nimport p1.Movable;\nimport p2.Donkey;\npublic class TestClass {\npublic static void main(String[] args) {\nMovable m = new Donkey();\nm.move(10);\nm.moveBack(20);\nSystem.out.println(m.location);\n}\n}\nIdentify the correct statement(s).",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "Donkey.java will not compile."
      },
      {
        "label": "B",
        "text": "TestClass.java will not compile."
      },
      {
        "label": "C",
        "text": "Movable.java will not compile."
      },
      {
        "label": "D",
        "text": "It will print 190 when TestClass is run."
      },
      {
        "label": "E",
        "text": "It will print 0 when TestClass is run."
      }
    ],
    "correctAnswers": [
      "E"
    ],
    "explanation": "There is no problem with the code. All variables in an interface are implicitly public, static, and final. All methods\nin an interface are public. There is no need to define them so explicitly. Therefore, the location variable in\nMovable is public and static and the move() method is public.\nNow, when you call m.move(10) and m.moveBack(20), the instance member location of Donkey is updated to 190\nbecause the reference m refers to a Donkey at run time and so move and moveBack methods of Donkey are invoked\nat runtime. However, when you print m.location, it is the Movable's location (which is never updated) that is\nprinted."
  },
  {
    "id": "2.1404",
    "topic": "Creating and Using Arrays",
    "question": "Consider the following code:\n//INSERT CODE HERE\na[0][0] = 1;\na[0][1] = 2;\na[1][0] = 3;\na[1][1] = 4;\na[1][2] = 5;\na[1][3] = 6;\nWhat can be inserted independently in the above code so that it will compile and run without any error or\nexception?",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "int[][] a = new int[2][];"
      },
      {
        "label": "B",
        "text": "int[][] a = new int[2][4];"
      },
      {
        "label": "C",
        "text": "int[][] a = new int[4][2];"
      },
      {
        "label": "D",
        "text": "int[][] a = new int[2][];\na[0] = new int[2];\na[1] = new int[4];"
      },
      {
        "label": "E",
        "text": "int[][] a = new int[4][];\na[0] = new int[2];\na[1] = new int[2];"
      }
    ],
    "correctAnswers": [
      "B",
      "D"
    ],
    "explanation": ""
  },
  {
    "id": "2.1405",
    "topic": "Working with Java Data Types",
    "question": "How many objects have been created by the time the main method reaches its end in the following code?\npublic class Noobs {\npublic Noobs(){\ntry{\nthrow new MyException();\n}catch(Exception e){\n}\n}\npublic static void main(String[] args) {\nNoobs a = new Noobs();\nNoobs b = new Noobs();\nNoobs c = a;\n}\n}\nclass MyException extends Exception{\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "2"
      },
      {
        "label": "B",
        "text": "3"
      },
      {
        "label": "C",
        "text": "4"
      },
      {
        "label": "D",
        "text": "5"
      },
      {
        "label": "E",
        "text": "6"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "When a Noobs object is created, a MyException object is also created. Therefore a total of 4 objects are created.\nThe line Noobs c = a; just assigns an existing Noobs object to c. No new object is created.\nNote: Some candidates have reported getting a similar question.\nThe question is ambiguous because two Class objects (one for Noobs and one for MyException) are also created.\nIf you consider those, then the answer would be 6. Further, several Thread objects are also created (although not\ndirectly by this code.) Since this is out of scope for the exam, it is best to ignore these kind of objects and consider\nonly the objects created directly by the code."
  },
  {
    "id": "2.1406",
    "topic": "Working with Methods - Overloading",
    "question": "What will the following code print when run?\npublic class Noobs {\npublic void m(int a){\nSystem.out.println(\"In int \");\n}\npublic void m(char c){\nSystem.out.println(\"In char \");\n}\npublic static void main(String[] args) {\nNoobs n = new Noobs();\nint a = 'a';\nchar c = 6;\nn.m(a);\nn.m(c);\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "In int\nIn char"
      },
      {
        "label": "B",
        "text": "In char\nIn int"
      },
      {
        "label": "C",
        "text": "In int\nIn int"
      },
      {
        "label": "D",
        "text": "In char\nIn char"
      },
      {
        "label": "E",
        "text": "It will not compile."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "It looks confusing but it is a simple question. Remember that whenever two methods are applicable for a method\ncall, the one that is most specific to the argument is chosen.\nIn case of m(a), a is an int, which cannot be passed as a char (because an int cannot fit into a char). Therefore,\nonly m(int) is applicable.\nIn case of m(c), c is a char, which can be passed as an int as well as a char. Therefore, both the methods are\napplicable. However, m(char) is most specific therefore that is chosen over m(int)."
  },
  {
    "id": "2.1407",
    "topic": "Working with Java API - ArrayList",
    "question": "What will the following code print when compiled and run?\nimport java.util.*;\npublic class TestClass {\npublic static void main(String[] args) throws Exception {\nList list = new ArrayList();\nlist.add(\"val1\"); //1\nlist.add(2, \"val2\"); //2\nlist.add(1, \"val3\"); //3\nSystem.out.println(list);\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It will not compile."
      },
      {
        "label": "B",
        "text": "It will throw an exception at run time because of line //1"
      },
      {
        "label": "C",
        "text": "It will throw an exception at run time because of line //2"
      },
      {
        "label": "D",
        "text": "It will throw an exception at run time because of line //3"
      },
      {
        "label": "E",
        "text": "null"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": ""
  },
  {
    "id": "2.1408",
    "topic": "Using Operators and Decision Constructs",
    "question": "What will the following lines of code print?\nSystem.out.println(1 + 5 < 3 + 7);\nSystem.out.println( (2 + 2) >= 2 + 3);",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "They will not compile."
      },
      {
        "label": "B",
        "text": "1false10\nfalse"
      },
      {
        "label": "C",
        "text": "true\nfalse"
      },
      {
        "label": "D",
        "text": "false\nfalse"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Comparison operators have lower precedence than mathematical operators. Therefore, 1 + 5 < 3 + 7 is evaluated as\n(1 + 5) < (3 + 7) i.e. 6<10, which prints true.\nSimilarly, (2 + 2) >= 2 + 3 is evaluated as (2 + 2) >= (2 + 3) i.e. 4>=5, which prints false.\nIf you have an expression, 2 + (2 >= 2) + 3, it would be tempting to answer 2true3, but actually, it would not\ncompile because it would resolve to 2 + true + 3 and + operator is not overloaded for anything except String. Here,\nneither of the operands of + operator is a String."
  },
  {
    "id": "2.1409",
    "topic": "Working with Java Data Types",
    "question": "What will the following code print?\npublic class Test{\npublic static void testInts(Integer obj, int var){\nobj = var++;\nobj++;\n}\npublic static void main(String[] args) {\nInteger val1 = new Integer(5);\nint val2 = 9;\ntestInts(val1++, ++val2);\nSystem.out.println(val1+\" \"+val2);\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "10 9"
      },
      {
        "label": "B",
        "text": "10 10"
      },
      {
        "label": "C",
        "text": "6 9"
      },
      {
        "label": "D",
        "text": "6 10"
      },
      {
        "label": "E",
        "text": "5 11"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "There are multiple concepts at play here:\n1. All the wrapper objects are immutable. So when you do obj++, what actually happens is something like this:\nobj = new Integer( obj.intValue() + 1);\n2.val1++ uses post-increment operator, which implies that you note down the current value of val1, increment it,\nand then pass the original noted down value to the method testInts. Thus, the reference value of Integer 5 is passed\nto testInts. But val1 is set to point to a new Integer object containing 6.\n++val2 uses pre-increment operator, which implies that you first increment val2 and then pass the incremented\nvalue. Therefore, val2 is incremented to 10 and then 10 is passed to the method testInts.\n3. Java uses pass by value semantics in method calls. In case of primitive variables, their values are passed, while\nin case of Objects, their reference values are passed. Thus, when you assign a different object to reference variable\nin a method, the original reference variable that was passed from the calling method still points to the same object\nthat it pointed to before the call.\nIn this question, therefore, val1 in main still points to 6 after the call to testInts returns."
  },
  {
    "id": "2.1410",
    "topic": "Working with Java Data Types",
    "question": "What can be added to the following Person class so that it is properly encapsulated and the code prints 29?\nclass Person{\n//Insert code here\n}\npublic class Employee extends Person{\npublic static void main(String[] args) {\nEmployee e = new Employee();\ne.setAge(29);\nSystem.out.println(e.getAge());\n}\n}",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "private int age;\npublic int getAge() {\nreturn age;\n}\npublic void setAge(int age) {\nthis.age = age;\n}"
      },
      {
        "label": "B",
        "text": "protected int age;\npublic int getAge() {\nreturn age;\n}\npublic void setAge(int age) {\nthis.age = age;\n}"
      },
      {
        "label": "C",
        "text": "int age;\npublic int getAge() {\nreturn age;\n}\npublic void setAge(int age) {\nthis.age = age;\n}"
      },
      {
        "label": "D",
        "text": "private int age;\nprivate int getAge() {\nreturn age;\n}\nprivate void setAge(int age) {\nthis.age = age;\n}"
      },
      {
        "label": "E",
        "text": "private int age;\npublic int getAge() {\nreturn age;\n}\nprotected void setAge(int age) {\nthis.age = age;\n}"
      }
    ],
    "correctAnswers": [
      "A",
      "E"
    ],
    "explanation": "This is a ambiguous question because it doesn't give all the information. It really depends on the business logic of\nthe class and the whole application whether the accessor methods (and specially the setter) should be public or\nprotected or even private. The field should be private.\nExpect such questions in the exam."
  },
  {
    "id": "2.1411",
    "topic": "Using Loop Constructs",
    "question": "What will the following code print when compiled and run?\npublic class DaysTest{\nstatic String[] days = {\"monday\", \"tuesday\", \"wednesday\", \"thursday\", \"friday\", \"saturday\",\n\"sunday\" };\npublic static void main(String[] args) {\nint index = 0;\nfor(String day : days){\nif(index == 3){\nbreak;\n}else {\ncontinue;\n}\nindex++;\nif(days[index].length()>3){\ndays[index] = day.substring(0,3);\n}\n}\nSystem.out.println(days[index]);\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "wed"
      },
      {
        "label": "B",
        "text": "thu"
      },
      {
        "label": "C",
        "text": "fri"
      },
      {
        "label": "D",
        "text": "It will not compile."
      },
      {
        "label": "E",
        "text": "It will throw an exception at run time."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Notice the statement :\nif(index == 3){\nbreak;\n}else {\ncontinue;\n}\nIn no situation can the control go beyond this statement in the for loop. Therefore, rest of the statements in the for\nloop are unreachable and so the code will not compile."
  },
  {
    "id": "2.1412",
    "topic": "Handling Exceptions",
    "question": "Checked exceptions are meant for...",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "exceptional conditions external to an application that a well written application should anticipate and from\nwhich it can recover."
      },
      {
        "label": "B",
        "text": "exceptional conditions external to the program that a well written program cannot anticipate but should recover\nfrom."
      },
      {
        "label": "C",
        "text": "exceptional conditions from which recovery is difficult or impossible.\nErrors are meant for this purpose."
      },
      {
        "label": "D",
        "text": "exceptional situations internal to an application that the application can anticipate but cannot recover from."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "There are multiple view points regarding checked and and unchecked exceptions. As per the official Java tutorial (\nhttp://docs.oracle.com/javase/tutorial/essential/exceptions/runtime.html ) : If a client can reasonably be expected\nto recover from an exception, make it a checked exception. If a client cannot do anything to recover from the\nexception, make it an unchecked exception.\nHere, the client basically means the caller of a method.\nAnother way to look at exceptions is to see the cause of the exception in terms of whether it is internal or external\nto the program's code. For example, an incorrectly written code may try to access a reference pointing to null, or it\nmay try to access an array beyond its length. These are internal sources of exception. Here, using runtime\nexceptions is appropriate because ideally these problems should be identified while testing and should not occur\nwhen the program is ready for deployment.\nOn the other hand, a program interacting with files may not be able to do its job at all if a file is not available but it\nshould anticipate this situation. This is an external source of an exception and has nothing to do with a program's\ncode as such. It is therefore appropriate to use a checked exception here."
  },
  {
    "id": "2.1413",
    "topic": "Using Loop Constructs",
    "question": "What will the following code print when compiled and run?\npublic class TestClass{\npublic static void main(String[] args){\nint[] arr = { 1, 2, 3, 4, 5, 6 };\nint counter = 0;\nfor (int value : arr) {\nif (counter >= 5) {\nbreak;\n} else {\ncontinue;\n}\nif (value > 4) {\narr[counter] = value + 1;\n}\ncounter++;\n}\nSystem.out.println(arr[counter]);\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It will not compile."
      },
      {
        "label": "B",
        "text": "It will throw an exception at run time."
      },
      {
        "label": "C",
        "text": "5"
      },
      {
        "label": "D",
        "text": "6"
      },
      {
        "label": "E",
        "text": "7"
      },
      {
        "label": "F",
        "text": "8"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": ""
  },
  {
    "id": "2.1414",
    "topic": "Working with Java Data Types",
    "question": "Which of the following statements will print true when executed?",
    "selectCount": 3,
    "options": [
      {
        "label": "A",
        "text": "System.out.println(Boolean.parseBoolean(\"true\"));"
      },
      {
        "label": "B",
        "text": "System.out.println(new Boolean(null));"
      },
      {
        "label": "C",
        "text": "System.out.println(new Boolean());"
      },
      {
        "label": "D",
        "text": "System.out.println(new Boolean(\"true\"));"
      },
      {
        "label": "E",
        "text": "System.out.println(new Boolean(\"trUE\"));"
      }
    ],
    "correctAnswers": [
      "A",
      "D",
      "E"
    ],
    "explanation": "You need to remember the following points about Boolean:\n1. Boolean class has two constructors - Boolean(String) and Boolean(boolean)\nThe String constructor allocates a Boolean object representing the value true if the string argument is not null and\nis equal, ignoring case, to the string \"true\". Otherwise, allocate a Boolean object representing the value false.\nExamples: new Boolean(\"True\") produces a Boolean object that represents true. new Boolean(\"yes\") produces\na Boolean object that represents false.\nThe boolean constructor is self explanatory.\n2. Boolean class has two static helper methods for creating booleans - parseBoolean and valueOf.\nBoolean.parseBoolean(String ) method returns a primitive boolean and not a Boolean object (Note - Same is\nwith the case with other parseXXX methods such as Integer.parseInt - they return primitives and not objects).\nThe boolean returned represents the value true if the string argument is not null and is equal, ignoring case, to the\nstring \"true\".\nBoolean.valueOf(String ) and its overloaded Boolean.valueOf(boolean ) version, on the other hand, work\nsimilarly but return a reference to either Boolean.TRUE or Boolean.FALSE wrapper objects. Observe that they dont\ncreate a new Boolean object but just return the static constants TRUE or FALSE defined in Boolean class.\n3. When you use the equality operator ( == ) with booleans, if exactly one of the operands is a Boolean wrapper, it\nis first unboxed into a boolean primitive and then the two are compared (JLS 15.21.2). If both are Boolean\nwrappers, then their references are compared just like in the case of other objects. Thus, new Boolean(\"true\") ==\nnew Boolean(\"true\") is false, but new Boolean(\"true\") == Boolean.parseBoolean(\"true\") is true."
  },
  {
    "id": "2.1415",
    "topic": "Working with Java Data Types",
    "question": "Which of the following comparisons will yield false?",
    "selectCount": 3,
    "options": [
      {
        "label": "A",
        "text": "Boolean.parseBoolean(\"true\") == true"
      },
      {
        "label": "B",
        "text": "Boolean.parseBoolean(\"TrUe\") == new Boolean(null);"
      },
      {
        "label": "C",
        "text": "new Boolean(\"TrUe\") == new Boolean(true);"
      },
      {
        "label": "D",
        "text": "new Boolean() == false;"
      },
      {
        "label": "E",
        "text": "new Boolean(\"true\") == Boolean.TRUE"
      },
      {
        "label": "F",
        "text": "new Boolean(\"no\") == false;"
      }
    ],
    "correctAnswers": [
      "B",
      "C",
      "E"
    ],
    "explanation": "You need to remember the following points about Boolean:\n1. Boolean class has two constructors - Boolean(String) and Boolean(boolean)\nThe String constructor allocates a Boolean object representing the value true if the string argument is not null and\nis equal, ignoring case, to the string \"true\". Otherwise, allocate a Boolean object representing the value false.\nExamples: new Boolean(\"True\") produces a Boolean object that represents true. new Boolean(\"yes\") produces\na Boolean object that represents false.\nThe boolean constructor is self explanatory.\n2. Boolean class has two static helper methods for creating booleans - parseBoolean and valueOf.\nBoolean.parseBoolean(String ) method returns a primitive boolean and not a Boolean object (Note - Same is\nwith the case with other parseXXX methods such as Integer.parseInt - they return primitives and not objects).\nThe boolean returned represents the value true if the string argument is not null and is equal, ignoring case, to the\nstring \"true\".\nBoolean.valueOf(String ) and its overloaded Boolean.valueOf(boolean ) version, on the other hand, work\nsimilarly but return a reference to either Boolean.TRUE or Boolean.FALSE wrapper objects. Observe that they dont\ncreate a new Boolean object but just return the static constants TRUE or FALSE defined in Boolean class.\n3. When you use the equality operator ( == ) with booleans, if exactly one of the operands is a Boolean wrapper, it\nis first unboxed into a boolean primitive and then the two are compared (JLS 15.21.2). If both are Boolean\nwrappers, then their references are compared just like in the case of other objects. Thus, new Boolean(\"true\") ==\nnew Boolean(\"true\") is false, but new Boolean(\"true\") == Boolean.parseBoolean(\"true\") is true."
  },
  {
    "id": "2.1416",
    "topic": "Working with Java Data Types",
    "question": "Which of the following options will yield a Boolean wrapper object containing the value true?",
    "selectCount": 3,
    "options": [
      {
        "label": "A",
        "text": "Boolean.parseBoolean(\" true \")"
      },
      {
        "label": "B",
        "text": "Boolean.parseBoolean(\"true\")"
      },
      {
        "label": "C",
        "text": "Boolean.valueOf(true)"
      },
      {
        "label": "D",
        "text": "Boolean.valueOf(\"trUE\")"
      },
      {
        "label": "E",
        "text": "Boolean.TRUE"
      }
    ],
    "correctAnswers": [
      "C",
      "D",
      "E"
    ],
    "explanation": "You need to remember the following points about Boolean:\n1. Boolean class has two constructors - Boolean(String) and Boolean(boolean)\nThe String constructor allocates a Boolean object representing the value true if the string argument is not null and\nis equal, ignoring case, to the string \"true\". Otherwise, allocate a Boolean object representing the value false.\nExamples: new Boolean(\"True\") produces a Boolean object that represents true. new Boolean(\"yes\") produces\na Boolean object that represents false.\nThe boolean constructor is self explanatory.\n2. Boolean class has two static helper methods for creating booleans - parseBoolean and valueOf.\nBoolean.parseBoolean(String ) method returns a primitive boolean and not a Boolean object (Note - Same is\nwith the case with other parseXXX methods such as Integer.parseInt - they return primitives and not objects).\nThe boolean returned represents the value true if the string argument is not null and is equal, ignoring case, to the\nstring \"true\".\nBoolean.valueOf(String ) and its overloaded Boolean.valueOf(boolean ) version, on the other hand, work\nsimilarly but return a reference to either Boolean.TRUE or Boolean.FALSE wrapper objects. Observe that they dont\ncreate a new Boolean object but just return the static constants TRUE or FALSE defined in Boolean class.\n3. When you use the equality operator ( == ) with booleans, if exactly one of the operands is a Boolean wrapper, it\nis first unboxed into a boolean primitive and then the two are compared (JLS 15.21.2). If both are Boolean\nwrappers, then their references are compared just like in the case of other objects. Thus, new Boolean(\"true\") ==\nnew Boolean(\"true\") is false, but new Boolean(\"true\") == Boolean.parseBoolean(\"true\") is true."
  },
  {
    "id": "2.1417",
    "topic": "Working with Java Data Types",
    "question": "Identify the valid members of Boolean class.",
    "selectCount": 3,
    "options": [
      {
        "label": "A",
        "text": "parseBoolean(String )"
      },
      {
        "label": "B",
        "text": "valueOf(boolean )"
      },
      {
        "label": "C",
        "text": "parseBoolean(boolean )"
      },
      {
        "label": "D",
        "text": "FALSE"
      },
      {
        "label": "E",
        "text": "Boolean(Boolean )"
      }
    ],
    "correctAnswers": [
      "A",
      "B",
      "D"
    ],
    "explanation": "You need to remember the following points about Boolean:\n1. Boolean class has two constructors - Boolean(String) and Boolean(boolean)\nThe String constructor allocates a Boolean object representing the value true if the string argument is not null and\nis equal, ignoring case, to the string \"true\". Otherwise, allocate a Boolean object representing the value false.\nExamples: new Boolean(\"True\") produces a Boolean object that represents true. new Boolean(\"yes\") produces\na Boolean object that represents false.\nThe boolean constructor is self explanatory.\n2. Boolean class has two static helper methods for creating booleans - parseBoolean and valueOf.\nBoolean.parseBoolean(String ) method returns a primitive boolean and not a Boolean object (Note - Same is\nwith the case with other parseXXX methods such as Integer.parseInt - they return primitives and not objects).\nThe boolean returned represents the value true if the string argument is not null and is equal, ignoring case, to the\nstring \"true\".\nBoolean.valueOf(String ) and its overloaded Boolean.valueOf(boolean ) version, on the other hand, work\nsimilarly but return a reference to either Boolean.TRUE or Boolean.FALSE wrapper objects. Observe that they dont\ncreate a new Boolean object but just return the static constants TRUE or FALSE defined in Boolean class.\n3. When you use the equality operator ( == ) with booleans, if exactly one of the operands is a Boolean wrapper, it\nis first unboxed into a boolean primitive and then the two are compared (JLS 15.21.2). If both are Boolean\nwrappers, then their references are compared just like in the case of other objects. Thus, new Boolean(\"true\") ==\nnew Boolean(\"true\") is false, but new Boolean(\"true\") == Boolean.parseBoolean(\"true\") is true."
  },
  {
    "id": "2.1418",
    "topic": "Using Operators and Decision Constructs",
    "question": "Consider the following code snippet:\n//INSERT LINE OF CODE HERE\nswitch( condition ){\ncase 1 : System.out.println(\"1\"); break;\ncase 2 : System.out.println(\"2\"); break;\ncase 3 : System.out.println(\"3\"); break;\n}\nWhat type can be inserted in the code above so that the above code compiles and runs as expected ?",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "int condition;"
      },
      {
        "label": "B",
        "text": "long condition = 2;"
      },
      {
        "label": "C",
        "text": "Integer condition = new Integer(\"1\");"
      },
      {
        "label": "D",
        "text": "String condition = \"1\";"
      },
      {
        "label": "E",
        "text": "short condition = new Short(1);"
      },
      {
        "label": "F",
        "text": "Byte condition = 1;"
      }
    ],
    "correctAnswers": [
      "C",
      "F"
    ],
    "explanation": "Here are the rules for a switch statement:\n1. Only String, byte, char, short, int, (and their wrapper classes Byte, Character, Short, and Integer), and enums can\nbe used as types of a switch variable. (String is allowed only since Java 7).\n2. The case constants must be assignable to the switch variable. For example, if your switch variable is of class\nString, your case labels must use Strings as well.\n3. The switch variable must be big enough to hold all the case constants. For example, if the switch variable is of\ntype char, then none of the case constants can be greater than 65535 because a char's range is from 0 to 65535.\n4. All case labels should be COMPILE TIME CONSTANTS.\n5. No two of the case constant expressions associated with a switch statement may have the same value.\n6. At most one default label may be associated with the same switch statement."
  },
  {
    "id": "2.1419",
    "topic": "Java Basics - OO Concepts",
    "question": "Encapsulation ensures that ...",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "classes are able to inherit functionality from other classes."
      },
      {
        "label": "B",
        "text": "classes expose only certain fields and methods to other classes for access."
      },
      {
        "label": "C",
        "text": "classes designate certain methods to be abstract and let them be implemented by subclasses."
      },
      {
        "label": "D",
        "text": "a method that takes a class X object as a parameter can be passed an object of a subclass of X."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": ""
  },
  {
    "id": "2.1420",
    "topic": "Using Loop Constructs",
    "question": "What will the following code print when compiled and run?\nint[][] ab = { {1, 2, 3}, {4, 5} };\nfor(int i=0; i<ab.length; i++){\nfor(int j=0; j<ab[i].length; j++){\nSystem.out.print(ab[i][j]+\" \");\nif(ab[i][j] == 2){\nbreak;\n}\n}\ncontinue;\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "1 2 3 4 5"
      },
      {
        "label": "B",
        "text": "1 2"
      },
      {
        "label": "C",
        "text": "1 3 4 5"
      },
      {
        "label": "D",
        "text": "1 2 4 5"
      },
      {
        "label": "E",
        "text": "2 3 5"
      },
      {
        "label": "F",
        "text": "It will not compile."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "For answering such questions, it is best to use a pen and a paper and start executing the code line by line.\nThe i of the outer loop runs from 0 to < ab.length, which is 2. i.e. i will be 0 and then 1.\nThe j of the inner loop runs from 0 to < ab[i].length, which is 3 for the first iteration of the outer for loop and 2 for\nthe second iteration of the outer for loop.\nThus, for the first iteration of the outer for loop - the inner for loop prints ab[0][0] i.e. 1 , ab[0][1] i.e. 2 and then\nsince the if condition is satisfied, the inner loop ends and thesecond iteration of the outer for loop begins.\nFor the second iteration of the outer for loop - the inner for loop prints ab[1][0] i.e. 4 , ab[1][1] i.e. 5.\nThe continue statement in this case is redundant because there is no statement left to execute after continue in the\nfor loop anyway."
  },
  {
    "id": "2.1421",
    "topic": "Working with Java Data Types",
    "question": "What will the following code print when compiled and run?\npublic class Discounter {\nstatic double percent; //1\nint offset = 10, base= 50; //2\npublic static double calc(double value) {\nint coupon, offset, base; //3\nif(percent <10){ //4\ncoupon = 15;\noffset = 20;\nbase = 10;\n}\nreturn coupon*offset*base*value/100; //5\n}\npublic static void main(String[] args) {\nSystem.out.println(calc(100));\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "3000"
      },
      {
        "label": "B",
        "text": "3000.0"
      },
      {
        "label": "C",
        "text": "compilation error at //3"
      },
      {
        "label": "D",
        "text": "compilation error at //4"
      },
      {
        "label": "E",
        "text": "compilation error at //5"
      },
      {
        "label": "F",
        "text": "Exception at run time."
      }
    ],
    "correctAnswers": [
      "E"
    ],
    "explanation": "Remember that static and instance variables are automatically assigned a value even if you don't initialize them\nexplicitly but local variables must be initialized explicitly before they are used.\nNow, observe that the calc method declares local variables coupon, offset, and base but does not assign them\na value. Even though at run time, we know that since percent is 0 and is thus < 10, a value will be assigned to\nthese variables, the compiler doesn't know this because the compiler doesn't take values of \"variables\" into\nconsideration while determining the flow of control. It only considers the values of compile time constants.\nTherefore, as far as the compiler is concerned, coupon, offset, and base may remain uninitialized before they\nare used.\nHaving uninitialized variables itself is not a problem. So there is no compilation error at //3. However, using them\nbefore they are initialized is a problem and therefore the compiler flags an error at //5.\nHad percent been defined as final ( static final double percent = 0; ), the code would work and print\n3000.0."
  },
  {
    "id": "2.1422",
    "topic": "Working with Java API - String, StringBuilder",
    "question": "What will the following code print when compiled and run?\nclass StringWrapper {\nprivate String theVal;\npublic StringWrapper(String str){ this.theVal = str; }\n}\npublic class Tester{\npublic static void main(String[] args) {\nStringWrapper sw = new StringWrapper(\"How are you?\");\nStringBuilder sb = new StringBuilder(\"How are you?\");\nSystem.out.println(\"Hello, \"+sw);\nSystem.out.println(\"Hello, \"+sb);\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "Hello, How are you?\nHello, How are you?"
      },
      {
        "label": "B",
        "text": "Hello, StringWrapper@<hashcode>\nHello, How are you?"
      },
      {
        "label": "C",
        "text": "Hello, How are you?\nHello, StringBuilder@<hashcode>"
      },
      {
        "label": "D",
        "text": "Hello, How are you?"
      },
      {
        "label": "E",
        "text": "Hello, StringWrapper@<hashcode>"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "1. When one of the operands of the + operator is a String and other is an object (other than String), toString\nmethod is called on the other operand and then both the Strings are concatenated to produce the result of the\noperation.\n2. Object class contains an implementation of toString that returns the name of the class (including the package\nname) and the hash code of the object in the format <classname>@<hashcode>. For example,\nSystem.out.println(\"Hello, \"+new Object()); will print Hello, java.lang.Object@3cd1a2f1, where\n3cd1a2f1 is the hash code of the object.\n3. StringBuilder class provides its own implementation of toString method, which returns the String value of\nits contents.\nIn this question, StringWrapper class does not implement toString method and so Object class's version is used."
  },
  {
    "id": "2.1423",
    "topic": "Java Basics",
    "question": "What will the following code print when compiled and run?\npublic class Paper {\npublic String title;\npublic int id;\npublic Paper(String title, int id){\nthis.title = title;\nthis.id = id;\n}\npublic static void main(String[] args) {\nPaper[] papers = {\nnew Paper(\"T1\", 1),\nnew Paper(\"T2\", 2),\nnew Paper(\"T3\", 3)\n};\nSystem.out.println(papers);\nSystem.out.println(papers[1]);\nSystem.out.println(papers[1].id);\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "papers\nPaper\n2"
      },
      {
        "label": "B",
        "text": "papers\nT2,2\n2"
      },
      {
        "label": "C",
        "text": "[LPaper;@<hashcode>\nPaper\n2"
      },
      {
        "label": "D",
        "text": "[LPaper;@<hashcode>\nPaper@<hashcode>\n2"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "You may find a few simple questions in the exam that expect you to know what is printed when you pass an array\nto System.out.print/println. All you need to know is that when the class (or the superclass) of an object does not\noverride the toString method, Object class's toString is used, which prints the name of the class + @ sign + hash\ncode of the object.\nNow, in case of an array, the name of the class is a little complicated. The details (given here:\nhttp://docs.oracle.com/javase/8/docs/api/java/lang/Class.html#getName-- ) are:\nThe internal form of the name consists of the name of the element type preceded by one or more '[' characters\nrepresenting the depth of the array nesting. The encoding of element type names is as follows:\nElement Type Encoding\nboolean Z\nbyte B\nchar C\nclass or interface Lclassname; <-- Observe the character L here\ndouble D\nfloat F\nint I\nlong J\nshort S\n\nFor example, the name of one dimensional byte array is [B. Therefore, if you pass it to print/println method,\n[B@<hashcode> will be printed.\nThe name of two dimensional byte array is [[B. Therefore, if you pass it to print/println method, [[B@<hashcode>\nwill be printed.\nThus, in this question, the first println statement will print [LPaper;@<hashcode> and the second println will print\nPaper@<hashcode>, both followed by a new line, of course."
  },
  {
    "id": "2.1424",
    "topic": "Working with Java API - String, StringBuilder",
    "question": "What will the following code print when compiled and run?\npublic class TestClass{\npublic static void main(String[] args) {\nSystem.out.println(getMsg((char)10));\n}\npublic static String getMsg(char x){\nString msg = \"Input value must be \";\nmsg = msg.concat(\"smaller than X\");\nmsg.replace('X', x);\nString rest = \" and larger than 0\";\nmsg.concat(rest);\nreturn msg;\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "Input value must be smaller than X and larger than 0"
      },
      {
        "label": "B",
        "text": "Input value must be smaller than 10 and larger than 0"
      },
      {
        "label": "C",
        "text": "Input value must be smaller than X"
      },
      {
        "label": "D",
        "text": "Input value must be smaller than 10"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Remember that a String once created cannot be changed. Therefore, when you call replace or concat methods on a\nString, a new String object is created. The old String remains as it is.\nHere, the first call to concat returns a new String object containing \"Input value must be smaller than X\"\nand it is assigned back to msg. The original String referred to by msg is now lost (i.e. there is no reference to it\nanymore).\nThe first call to replace also creates a new String object but it is not assigned to any reference and is therefore lost\nand msg keeps pointing to the same String object. The same thing happens to the second call to concat. It create a\nnew String object but it is not assigned back to msg, therefore, msg keeps pointing to the same object i.e. \"Input\nvalue must be smaller than X\""
  },
  {
    "id": "2.1425",
    "topic": "Working with Methods",
    "question": "What will the following code print when compiled and run?\npublic class Test{\nstatic int a = 0;\nint b = 5;\npublic void foo(){\nwhile(b>0){\nb--;\na++;\n}\n}\npublic static void main(String[] args) {\nTest p1 = new Test();\np1.foo();\nTest p2 = new Test();\np2.foo();\nSystem.out.println(p1.a+\" \"+p2.a);\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "0 10"
      },
      {
        "label": "B",
        "text": "10 10"
      },
      {
        "label": "C",
        "text": "10 0"
      },
      {
        "label": "D",
        "text": "5 5"
      },
      {
        "label": "E",
        "text": "0 5"
      },
      {
        "label": "F",
        "text": "5 0"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "The field a is static and there will be only one copy of a no matter how many instances of Test you create. Changes\nmade to it by one instance will be reflected in the other instance as well.\nBut field b is an instance field. Each instance of Test will get its on copy of b.\nTherefore, when you call p1.foo() and then p2.foo(), the same field a is incremented 5 times twice and so it will\nprint 10 10."
  },
  {
    "id": "2.1426",
    "topic": "Working with Java API - Time and Date",
    "question": "Which of the following are true regarding the new Date-Time API of Java 8?",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "It uses the calendar system defined in ISO-8601 as the default calendar."
      },
      {
        "label": "B",
        "text": "Most of the actual date related classes in the Date-Time API such as LocalDate, LocalTime, and LocalDateTime\nare immutable."
      },
      {
        "label": "C",
        "text": "LocalDateTime include time zone information but LocalDate does not."
      },
      {
        "label": "D",
        "text": "To create a LocalDate or a LocalDateTime object, you can use one of their several constructors."
      }
    ],
    "correctAnswers": [
      "A",
      "B"
    ],
    "explanation": ""
  },
  {
    "id": "2.1427",
    "topic": "Working with Java API - Time and Date",
    "question": "Which of the following classes should you use to represent just a date without any time or zone information?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "java.util.Date"
      },
      {
        "label": "B",
        "text": "java.sql.Date"
      },
      {
        "label": "C",
        "text": "java.time.Date"
      },
      {
        "label": "D",
        "text": "java.time.LocalDate"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Java 8 introduces a new package java.time to deal with dates. The old classes such as java.util.Date are not\nrecommended anymore.\nBriefly:\njava.time Package: This is the base package of new Java Date Time API. All the commonly used classes such as\nLocalDate, LocalTime, LocalDateTime, Instant, Period, Duration are part of this package. All of these classes are\nimmutable and thread safe.\njava.time.format Package: This package contains classes used for formatting and parsing date time objects such as\njava.time.format.DateTimeFormatter.\n(The following two are not important for the exam.)\njava.time.zone Package: This package contains classes for supporting different time zones and their rules.\njava.time.chrono Package: This package defines generic APIs for non ISO calendar systems. We can extend\nAbstractChronology class to create our own calendar system.\njava.time.temporal Package: This package contains temporal objects and we can use it for find out specific date or\ntime related to date/time object. For example, we can use these to find out the first or last day of the month. You\ncan identify these methods easily because they always have format “withXXX”."
  },
  {
    "id": "2.1428",
    "topic": "Working with Java API - Time and Date",
    "question": "Which of the following are valid ways to create a LocalDateTime?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "java.time.LocalDate.parse(\"2015-01-02\");"
      },
      {
        "label": "B",
        "text": "java.time.LocalDateTime.parse(\"2015-01-02\");"
      },
      {
        "label": "C",
        "text": "java.time.LocalDateTime.of(2015, 10, 1, 10, 10);"
      },
      {
        "label": "D",
        "text": "java.time.LocalDateTime.of(2015, \"January\", 1, 10, 10);"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": ""
  },
  {
    "id": "2.1429",
    "topic": "Working with Java API - Time and Date",
    "question": "What will the following lines of code print\njava.time.LocalDate dt = java.time.LocalDate.parse(\"2015-01-\n01\").minusMonths(1).minusDays(1).plusYears(1);\nSystem.out.println(dt);",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "Compilation error."
      },
      {
        "label": "B",
        "text": "Exception at run time."
      },
      {
        "label": "C",
        "text": "2015-12-31"
      },
      {
        "label": "D",
        "text": "2015-11-30"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Observe that most of the methods of LocalDate (as well as LocalTime and LocalDateTime) return an object of the\nsame class. This allows you to chain the calls as done in this question. However, these methods return a new\nobject. They don't modify the object on which the method is called."
  },
  {
    "id": "2.1430",
    "topic": "Working with Java API - Time and Date",
    "question": "You want to print the date that represents upcoming tuesday from now even if the current day is a tuesday. Which\nof the following lines of code accomplishe(s) this?",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "System.out.println(LocalDate.now().with(TemporalAdjusters.next(DayOfWeek.TUESDAY)));"
      },
      {
        "label": "B",
        "text": "System.out.println(LocalDate.now().with(TemporalAdjusters.nextOrSame(DayOfWeek.TUESDAY)));"
      },
      {
        "label": "C",
        "text": "System.out.println(new LocalDate().with(TemporalAdjusters.next(DayOfWeek.TUESDAY)));"
      },
      {
        "label": "D",
        "text": "System.out.println(new LocalDate().adjust(TemporalAdjusters.next(DayOfWeek.TUESDAY)));"
      },
      {
        "label": "E",
        "text": "System.out.println(TemporalAdjusters.next(DayOfWeek.TUESDAY).adjustInto(LocalDate.now()));"
      }
    ],
    "correctAnswers": [
      "A",
      "E"
    ],
    "explanation": "The JavaDoc description of java.time.temporal.TemporalAdjusters is very helpful:\nAdjusters are a key tool for modifying temporal objects. They exist to externalize the process of adjustment,\npermitting different approaches, as per the strategy design pattern. Examples might be an adjuster that sets the date\navoiding weekends, or one that sets the date to the last day of the month.\nThere are two equivalent ways of using a TemporalAdjuster. The first is to invoke the method on the interface\ndirectly. The second is to use Temporal.with(TemporalAdjuster):\n// these two lines are equivalent, but the second approach is recommended\ntemporal = thisAdjuster.adjustInto(temporal);\ntemporal = temporal.with(thisAdjuster);\nIt is recommended to use the second approach, with(TemporalAdjuster), as it is a lot clearer to read in code.\nThis class contains a standard set of adjusters, available as static methods. These include:\nfinding the first or last day of the month\nfinding the first day of next month\nfinding the first or last day of the year\nfinding the first day of next year\nfinding the first or last day-of-week within a month, such as \"first Wednesday in June\"\nfinding the next or previous day-of-week, such as \"next Thursday\""
  },
  {
    "id": "2.1431",
    "topic": "Working with Java API - Time and Date",
    "question": "Given the following line of code:\nLocalDateTime dt = LocalDateTime.parse(\"2015-01-02T17:13:50\");\nWhich of the following lines will return the date string in ISO 8601 format?",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "dt.format(java.time.format.DateTimeFormatter.DATE_TIME);"
      },
      {
        "label": "B",
        "text": "dt.format(java.time.format.DateTimeFormatter.ISO_DATE_TIME);"
      },
      {
        "label": "C",
        "text": "dt.format(java.time.format.DateTimeFormatter.LOCAL_DATE_TIME);"
      },
      {
        "label": "D",
        "text": "dt.toString();"
      }
    ],
    "correctAnswers": [
      "B",
      "D"
    ],
    "explanation": ""
  },
  {
    "id": "2.1432",
    "topic": "Working with Java API - Time and Date",
    "question": "What will the following line of code print?\nSystem.out.println(LocalDate.of(2015, Month.JANUARY,\n01).format(DateTimeFormatter.ISO_DATE_TIME));",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "01 Jan 2015"
      },
      {
        "label": "B",
        "text": "01 January 2015 00:00:00"
      },
      {
        "label": "C",
        "text": "2015-01-01"
      },
      {
        "label": "D",
        "text": "2015-01-01T00:00:00"
      },
      {
        "label": "E",
        "text": "Exception at run time."
      }
    ],
    "correctAnswers": [
      "E"
    ],
    "explanation": ""
  },
  {
    "id": "2.1433",
    "topic": "Working with Java API - Time and Date",
    "question": "What will the following code print when compiled and run?\nimport java.time.*;\nimport java.time.format.*;\npublic class DateTest{\npublic static void main(String[] args){ //1\nLocalDateTime greatDay = LocalDateTime.parse(\"2015-01-01\");//2\nString greatDayStr = greatDay.format(DateTimeFormatter.ISO_DATE_TIME); //3\nSystem.out.println(greatDayStr);//4\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "//1 will not compile because of lack of throws clause."
      },
      {
        "label": "B",
        "text": "//2 will not compile because of invalid date string."
      },
      {
        "label": "C",
        "text": "//2 will throw an exception at run time."
      },
      {
        "label": "D",
        "text": "It will print 2015-01-01T00:00:00"
      },
      {
        "label": "E",
        "text": "It will print null."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": ""
  },
  {
    "id": "2.1434",
    "topic": "Working with Java API - Time and Date",
    "question": "Given the following code:\npublic String getDateString(LocalDateTime ldt){\nreturn DateTimeFormatter.ISO_ZONED_DATE_TIME.format(ldt);\n}\nWhich of the following statements are correct?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "The code will compile but will always throw a DateTimeException (or its subclass) at run time."
      },
      {
        "label": "B",
        "text": "DateTimeException must either be caught or declared in the throws clause of this method."
      },
      {
        "label": "C",
        "text": "The method parameter type must be changed from LocalDateTime to ZonedDateTime for it to compile."
      },
      {
        "label": "D",
        "text": "It will return the date string as per the default time zone of the system on which it is run."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": ""
  },
  {
    "id": "2.1435",
    "topic": "Working with Java API - Time and Date",
    "question": "Identify the correct statements.",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "LocalDate, LocalTime, and LocalDateTime extend Date."
      },
      {
        "label": "B",
        "text": "LocalDate, LocalTime, and LocalDateTime implement TemporalAccessor."
      },
      {
        "label": "C",
        "text": "Both - LocalDate and LocalTime extend LocalDateTime, which extends java.util.Date."
      },
      {
        "label": "D",
        "text": "LocalDate, LocalTime, and LocalDateTime implement TemporalAccessor and extend java.util.Date."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Here are some points that you should keep in mind about the new Date/Time classes introduced in Java 8 -\n1. They are in package java.time and they have no relation at all to the old java.util.Date and java.sql.Date.\n2. java.time.TemporalAccessor is the base interface that is implemented by LocalDate, LocalTime, and\nLocalDateTime concrete classes. This interface defines read-only access to temporal objects, such as a date, time,\noffset or some combination of these, which are represented by the interface TemporalField.\n3. LocalDate, LocalTime, and LocalDateTime classes do not have any parent/child relationship among\nthemselves. As their names imply, LocalDate contains just the date information and no time information,\nLocalTime contains only time and no date, while LocalDateTime contains date as well as time. None of them\ncontains zone information. For that, you can use ZonedDateTime.\nThese classes are immutable and have no public constructors. You create objects of these classes using their static\nfactory methods such as of(...) and from(TemporalAccessor ). For example,\nLocalDate ld = LocalDate.of(2015, Month.JANUARY, 1); or LocalDate ld =\nLocalDate.from(anotherDate); or LocalDateTime ldt = LocalDateTime.of(2015, Month.JANUARY, 1, 21,\n10); //9.10 PM\nSince you can't modify them once created, if you want to create new object with some changes to the original, you\ncan use the instance method named with(...). For example,\nLocalDate sunday = ld.with(java.time.temporal.TemporalAdjusters.next(DayOfWeek.SUNDAY));\n4. Formatting of date objects into String and parsing of Strings into date objects is done by\njava.time.format.DateTimeFormatter class. This class provides public static references to readymade\nDateTimeFormatter objects through the fields named ISO_DATE, ISO_LOCAL_DATE,\nISO_LOCAL_DATE_TIME, etc. For example -\nLocalDate d1 = LocalDate.parse(\"2015-01-01\", DateTimeFormatter.ISO_LOCAL_DATE);\nThe parameter type and return type of the methods of DateTimeFormatter class is the base interface\nTemporalAccessor instead of concrete classes such as LocalDate or LocalDateTime. So you shouldn't directly cast\nthe returned values to concrete classes like this -\nLocalDate d2 = (LocalDate) DateTimeFormatter.ISO_LOCAL_DATE.parse(\"2015-01-01\"); //will\ncompile but may or may not throw a ClassCastException at runtime.\nYou should do like this -\nLocalDate d2 = LocalDate.from(DateTimeFormatter.ISO_LOCAL_DATE.parse(\"2015-01-01\"));\n5. Besides dates, java.time package also provides Period and Duration classes. Period is used for quantity or\namount of time in terms of years, months and days, while Duration is used for quantity or amount of time in terms\nof hour, minute, and seconds.\nDurations and periods differ in their treatment of daylight savings time when added to ZonedDateTime. A\n\nDuration will add an exact number of seconds, thus a duration of one day is always exactly 24 hours. By contrast,\na Period will add a conceptual day, trying to maintain the local time.\nFor example, consider adding a period of one day and a duration of one day to 18:00 on the evening before a\ndaylight savings gap. The Period will add the conceptual day and result in a ZonedDateTime at 18:00 the\nfollowing day. By contrast, the Duration will add exactly 24 hours, resulting in a ZonedDateTime at 19:00 the\nfollowing day (assuming a one hour DST gap)."
  },
  {
    "id": "2.1436",
    "topic": "Java Basics",
    "question": "You have written some Java code in MyFirstClass.java file. Which of the following commands will you use to\ncompile and run it.\n(Assume that the code has no package declaration.)",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "javac MyFirstClass.java\njavar MyFirstClass"
      },
      {
        "label": "B",
        "text": "javap MyFirstClass.java\njavar MyFirstClass.java"
      },
      {
        "label": "C",
        "text": "java MyFirstClass.java\njava MyFirstClass.class"
      },
      {
        "label": "D",
        "text": "javac MyFirstClass.java\njavar MyFirstClass.java"
      },
      {
        "label": "E",
        "text": "javac MyFirstClass.java\njava MyFirstClass"
      }
    ],
    "correctAnswers": [
      "E"
    ],
    "explanation": "Remember that java code must be written in a file with .java extension. If you have a public class in the code, the\nname of the file must be same as the name of that public class.\nCompilation and execution of a Java program is two step process. You first need to compile a java file using a Java\ncompiler. Oracle's JDK comes with a compiler. It is contained in the executable file named javac. You will find it\nin <jdk installation folder>/bin.\njavac compiles the source code and generates bytecode in a new file with the same name as the source file but with\nextension .class. By default, the class file in generated in the same folder but javac is capable of placing it in a\ndifferent folder if you use the -d flag. [This is just FYI and not required for the exam. -d is a very important and\nuseful flag and we recommend that you read about it even if it is not required for the exam.]\nIn second step, the Java virtual machine (JVM), aka Java interpreter is invoked to execute the .class file. Oracle's\nJVM is contained in the executable file named java. It is also present in the same bin folder of JDK installation. It\ntakes the fully qualified name (i.e. name including package) of the class file without extension as a argument."
  },
  {
    "id": "2.1437",
    "topic": "Java Basics",
    "question": "Given the following code -\npublic class MyFirstClass{\npublic static void main(String[] args){\nSystem.out.println(args[1]);\n}\n}\nWhich of the following commands will compile and then print \"hello\"?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "javac MyFirstClass\njava MyFirstClass hello hello"
      },
      {
        "label": "B",
        "text": "javac MyFirstClass.java\njava MyFirstClass hello hello"
      },
      {
        "label": "C",
        "text": "javac MyFirstClass\njava MyFirstClass hello"
      },
      {
        "label": "D",
        "text": "javac MyFirstClass.java\njava MyFirstClass hello"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": ""
  },
  {
    "id": "2.1438",
    "topic": "Java Basics",
    "question": "What will the following code print when compiled and run?\npublic class ATest {\nString global = \"111\";\npublic int parse(String arg){\nint value = 0;\ntry{\nString global = arg;\nvalue = Integer.parseInt(global);\n}\ncatch(Exception e){\nSystem.out.println(e.getClass());\n}\nSystem.out.print(global+\" \"+value+\" \");\nreturn value;\n}\npublic static void main(String[] args) {\nATest ct = new ATest();\nSystem.out.print(ct.parse(\"333\"));\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "111 333 333"
      },
      {
        "label": "B",
        "text": "333 333 333"
      },
      {
        "label": "C",
        "text": "java.lang.NumberFormatException"
      },
      {
        "label": "D",
        "text": "java.lang.Exception"
      },
      {
        "label": "E",
        "text": "Compilation fails."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Observe that a new local variable named global is defined within a try block. It is accessible only within the try\nblock. It also shadows the instance field of the same name global within the try block. It is this variable that is used\nin parseInt. Therefore, value is set to 333.\nHowever, when you print global in parse method, the global defined in the try block is out of scope and the\ninstance field named global is used. Therefore, it prints 111.\nThere is no exception because 333 can be parsed into an int. If you pass a string that cannot be parsed into an int to\nthe parseInt method, it will throw a java.lang.NumberFormatException."
  },
  {
    "id": "2.1439",
    "topic": "Working with Methods",
    "question": "Given:\n//In file AccessTest.java\npackage a;\npublic class AccessTest {\nint a;\nprivate int b;\nprotected void c(){ }\npublic int d(){ return 0; }\n}\n//In file AccessTester.java\npackage b;\nimport a.AccessTest;\npublic class AccessTester extends AccessTest{\npublic static void main(String[] args) {\nAccessTest ref = new AccessTest();\n}\n}\nIdenfity the correct statements -",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "Only c() and d() can be accessed by ref."
      },
      {
        "label": "B",
        "text": "b, c(), as well as d(), can be accessed by ref."
      },
      {
        "label": "C",
        "text": "Only d() can be accessed by ref."
      },
      {
        "label": "D",
        "text": "Only a and d() can be accessed by ref."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "The wording of this question is a bit vague because it is not clear what is meant by \"can be accessed by\". Expect\nsuch wording in the real exam as well. Our guess is that it means what variables of class AccessTest can be\naccessed using the reference named ref.\nSince a public member is always accessible to every one, ref.d() is definitely correct. private is only accessible\nwithin that class, therefore, b cannot be accessed from anywhere outside of class AccessTest. A default (aka\npackage protected) member is accessible only from members of the same package. Since AccessTester is in a\ndifferent package a cannot be accessed from AccessTester either.\nNow, the question is only about the method c(). A protected member is inherited by a subclass and it is therefore\naccessible in the subclass. However, In the words of Java Language Specification, protected members of a class\nare accessible outside the package only in subclasses of that class, and only when they are fields of objects that are\nbeing implemented by the code that is accessing them.\nBasically, it implies that a protected member is accessible in the subclass only using a reference whose declared\ntype is of the same subclass (or its subclass.).\nIn this case, the declared type of ref is AccessTest, which is not of the same type as the class from which you are\ntrying to access c(). Therefore, you cannot do ref.c() in AccessTester. If you had AccessTester ref = new\nAccessTester(); you could do ref.c() because now the declared type of ref (i.e. AcessTester) is the same\nsubclass from which you are trying to access c(). It will work even if the declared type of the reference is a child\nof the subclass. For example, the following would be valid as well.\nSubAccessTester ref = new SubAccessTester();\nref.c(); //this is valid\nWhere SubAccessTester is a subclass of AccessTester -\nclass SubAccessTester extends AccessTester{ }"
  },
  {
    "id": "2.1440",
    "topic": "Using Operators and Decision Constructs",
    "question": "Given:\npublic static boolean getBool(){\nreturn true;\n}\npublic static String getString(){\nreturn \"true\";\n}\npublic static void main(String args[]){\nswitch( getBool() ){\ncase true :\nSystem.out.println(\"true\");\nbreak;\ndefault :\nSystem.out.println(\"none\");\nbreak;\n}\n}\nWhat changes can be done so that it will print only true?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "No change is necessary."
      },
      {
        "label": "B",
        "text": "Call getString instead of getBool in the switch."
      },
      {
        "label": "C",
        "text": "Call getString instead of getBool in the switch and also change the case label from true to \"true\"."
      },
      {
        "label": "D",
        "text": "Remove the default section of the switch block."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": ""
  },
  {
    "id": "2.1441",
    "topic": "Using Operators and Decision Constructs",
    "question": "You are writing a piece of code that determines tax rate on a given grossIncome. The tax rate is to be computed as\nfollows -\nIf grossIncome is less than or equals to 18000, taxRate is 0.\nIf grossIncome is more than 18000 but less than or equal to 36000, taxRate is 10%\nIf grossIncome is more than 36000, taxRate is 20%.\nWhich of following code fragments do it correctly?",
    "selectCount": 3,
    "options": [
      {
        "label": "A",
        "text": "double taxRate = grossIncome<=18000 ? 0 : (grossIncome<=36000) ? .1 : .2;"
      },
      {
        "label": "B",
        "text": "double taxRate = .2;\ntaxRate = grossIncome<=18000?0:.1;\ntaxRate = grossIncome<=36000?.1:.2;"
      },
      {
        "label": "C",
        "text": "double taxRate = 0;\nif(grossIncome>36000) taxRate = .20;\nif(grossIncome>18000 && grossIncome<=36000) taxRate = .10;"
      },
      {
        "label": "D",
        "text": "double taxRate = .2;\nif(grossIncome>36000) {\ntaxRate = .2;\n}else taxRate = 0;\nif(grossIncome>18000 ) {\ntaxRate = .1;\n}"
      },
      {
        "label": "E",
        "text": "double taxRate = 0;\ntaxRate = grossIncome>18000?grossIncome<=36000?.1:.2:0;"
      }
    ],
    "correctAnswers": [
      "A",
      "C",
      "E"
    ],
    "explanation": "This question is assigned a rating of tough only because it is a bit time consuming to check each option. Otherwise,\nit is quite easy to figure out what each option is doing. You may expect such questions in the exam."
  },
  {
    "id": "2.1442",
    "topic": "Constructors",
    "question": "What will the following code print when compiled and run?\nclass X{\npublic X(){\nSystem.out.println(\"In X\");\n}\n}\nclass Y extends X{\npublic Y(){\nsuper();\nSystem.out.println(\"In Y\");\n}\n}\nclass Z extends Y{\npublic Z(){\nSystem.out.println(\"In Z\");\n}\n}\npublic class Test {\npublic static void main(String[] args) {\nY y = new Z();\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It will not compile."
      },
      {
        "label": "B",
        "text": "In X\nIn Y\nIn Z"
      },
      {
        "label": "C",
        "text": "In Z\nIn Y\nIn X"
      },
      {
        "label": "D",
        "text": "In Y\nIn X\nIn Z"
      },
      {
        "label": "E",
        "text": "In Z\nIn X\nIn Y"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "There is no problem with the code.\nRemember that before the fields of a subclass can be initialized by a constructor, the fields of superclass have to be\ninitialized. Therefore, a super class constructor must first execute before a subclass constructor can execute. This\norder of invocation of constructors goes up the chain up from the subclass that is being created up to the top most\nsuper class, which is java.lang.Object.\nThe explicit call to super(); in class Y is not required because the compiler puts a call to super(); anyway if you\ndon't explicitly call either any super class constructor using super(...) or another constructor of the same class\nusing this(...) first ( \"...\" refers to appropriate arguments as required for a given constructor).\nThe declared type of a variable is immaterial here. Only the actual class of object that is being instantiated is\n\nimportant. Therefore, if you instantiate class Z, Z's constructor will be invoked, but internally, that constructor will\nfirst invoke Y's constructor before executing the rest of Z's constructor. Similarly, Y's constructor will first invoke\nX's constructor before executing the rest of Y's constructor. Finally, X's constructor will first invoke Objects's\nconstructor before executing the rest of X's constructor. Object class's constructor doesn't print anything so no\noutput is generated because of that. But once that is finished, the remaining code of X constructor's is executed,\nwhich prints \"In X\", then the control goes back to Y's constructor, which prints, \"In Y\". Finally, the control goes\nback to Z's constructor, which prints, \"In Z\"."
  },
  {
    "id": "2.1443",
    "topic": "Creating and Using Arrays",
    "question": "What will the following code print when compiled and run?\npublic class OrderTest {\npublic void initData(String[] arr){\nint ind = 0;\nfor(String str : arr){\nstr.concat(str+\" \"+ind);\nind++;\n}\n}\npublic void printData(String[] arr){\nfor(String str : arr){\nSystem.out.println(str);\n}\n}\npublic static void main(String[] args) {\nOrderTest ot = new OrderTest();\nString[] arr = new String[2];\not.initData(arr);\not.printData(arr);\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "null 0\nnull 1"
      },
      {
        "label": "B",
        "text": "0\n1"
      },
      {
        "label": "C",
        "text": "0\n1\n(There is a space before 0 and 1)"
      },
      {
        "label": "D",
        "text": "null\nnull"
      },
      {
        "label": "E",
        "text": "It will throw a RuntimeException at run time."
      }
    ],
    "correctAnswers": [
      "E"
    ],
    "explanation": ""
  },
  {
    "id": "2.1444",
    "topic": "Working with Java API - String, StringBuilder",
    "question": "Assuming that the following method will always be called with a phone number in the format ddd-ddd-dddd\n(where d stands for a digit), what can be inserted at //1 so that it will return a String containing the same number\nexcept its last four digits will be masked with xxxx?\npublic static String hidePhone(String fullPhoneNumber){\n//1 Insert code here\n}",
    "selectCount": 3,
    "options": [
      {
        "label": "A",
        "text": "return new StringBuilder(fullPhoneNumber).substring(0, 8)+\"xxxx\";"
      },
      {
        "label": "B",
        "text": "return new StringBuilder(fullPhoneNumber).replace(8, 12, \"xxxx\").toString();"
      },
      {
        "label": "C",
        "text": "return new StringBuilder(fullPhoneNumber).append(\"xxxx\", 8, 12).toString();"
      },
      {
        "label": "D",
        "text": "return new StringBuilder(\"xxxx\").append(fullPhoneNumber, 0, 8).toString();"
      },
      {
        "label": "E",
        "text": "return new StringBuilder(\"xxxx\").insert(0, fullPhoneNumber, 0, 8).toString();"
      }
    ],
    "correctAnswers": [
      "A",
      "B",
      "E"
    ],
    "explanation": "This is a simple question if you know how the various methods of StringBuilder operate. You need to go through\nthe JavaDoc API descriptions of the methods used in this question. This is important for the exam. The following\nare the details for your convenience -\n--------------------------\npublic StringBuilder append(CharSequence s, int start, int end)\nAppends a subsequence of the specified CharSequence to this sequence.\nCharacters of the argument s, starting at index start, are appended, in order, to the contents of this sequence up to\nthe (exclusive) index end. The length of this sequence is increased by the value of end - start.\nLet n be the length of this character sequence just prior to execution of the append method. Then the character at\nindex k in this character sequence becomes equal to the character at index k in this sequence, if k is less than n;\notherwise, it is equal to the character at index k+start-n in the argument s.\nIf s is null, then this method appends characters as if the s parameter was a sequence containing the four characters\n\"null\".\nParameters:\ns - the sequence to append. start - the starting index of the subsequence to be appended. end - the end index of the\nsubsequence to be appended.\nReturns:\na reference to this object.\nThrows:\nIndexOutOfBoundsException - if start is negative, or start is greater than end or end is greater than s.length()\n--------------------------\npublic StringBuilder insert(int dstOffset, CharSequence s, int start, int end)\nInserts a subsequence of the specified CharSequence into this sequence.\nThe subsequence of the argument s specified by start and end are inserted, in order, into this sequence at the\nspecified destination offset, moving up any characters originally above that position. The length of this sequence is\n\nincreased by end - start.\nThe character at index k in this sequence becomes equal to:\nthe character at index k in this sequence, if k is less than dstOffset\nthe character at index k+start-dstOffset in the argument s, if k is greater than or equal to dstOffset but is less than\ndstOffset+end-start\nthe character at index k-(end-start) in this sequence, if k is greater than or equal to dstOffset+end-start\nThe dstOffset argument must be greater than or equal to 0, and less than or equal to the length of this sequence.\nThe start argument must be nonnegative, and not greater than end.\nThe end argument must be greater than or equal to start, and less than or equal to the length of s.\nIf s is null, then this method inserts characters as if the s parameter was a sequence containing the four characters\n\"null\".\nParameters:\ndstOffset - the offset in this sequence. s - the sequence to be inserted. start - the starting index of the subsequence\nto be inserted. end - the end index of the subsequence to be inserted.\nReturns:\na reference to this object.\nThrows:\nIndexOutOfBoundsException - if dstOffset is negative or greater\n--------------------------\npublic StringBuilder replace(int start, int end, String str)\nReplaces the characters in a substring of this sequence with characters in the specified String. The substring begins\nat the specified start and extends to the character at index end - 1 or to the end of the sequence if no such character\nexists. First the characters in the substring are removed and then the specified String is inserted at start. (This\nsequence will be lengthened to accommodate the specified String if necessary.)\nParameters:\nstart - The beginning index, inclusive. end - The ending index, exclusive. str - String that will replace previous\ncontents.\nReturns:\nThis object.\nThrows:\nStringIndexOutOfBoundsException - if start is negative, greater than length(), or greater than end.\n--------------------------\npublic String substring(int start, int end)\nReturns a new String that contains a subsequence of characters currently contained in this sequence. The substring\nbegins at the specified start and extends to the character at index end - 1.\nParameters:\nstart - The beginning index, inclusive. end - The ending index, exclusive.\nReturns:\nThe new string.\nThrows:\nStringIndexOutOfBoundsException - if start or end are negative or greater than length(), or start is greater than\nend."
  },
  {
    "id": "2.1445",
    "topic": "Working with Java API - String, StringBuilder",
    "question": "Assuming that the following method will always be called with a phone number in the format ddd-ddd-dddd\n(where d stands for a digit), what can be inserted at //1 so that it will return a String containing \"xxx-xxx-\"+dddd,\nwhere dddd represents the same four digits in the original number?\npublic static String hidePhone(String fullPhoneNumber){\n//1 Insert code here\n}",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "String mask = \"xxx-xxx-\";\nmask.append(fullPhoneNumber.substring(8));\nreturn mask;"
      },
      {
        "label": "B",
        "text": "return new StringBuilder(\"xxx-xxx-\")+fullPhoneNumber.substring(8);"
      },
      {
        "label": "C",
        "text": "return new StringBuilder(fullPhoneNumber).replace(0, 7, \"xxx-xxx-\").toString();"
      },
      {
        "label": "D",
        "text": "return \"xxx-xxx-\"+fullPhoneNumber.substring(8, 12);"
      }
    ],
    "correctAnswers": [
      "B",
      "D"
    ],
    "explanation": "This is a simple question if you know how the various methods of StringBuilder operate. You need to go through\nthe JavaDoc API descriptions of the methods used in this question. This is important for the exam. The following\nare the details for your convenience -\n--------------------------\npublic StringBuilder append(CharSequence s, int start, int end)\nAppends a subsequence of the specified CharSequence to this sequence.\nCharacters of the argument s, starting at index start, are appended, in order, to the contents of this sequence up to\nthe (exclusive) index end. The length of this sequence is increased by the value of end - start.\nLet n be the length of this character sequence just prior to execution of the append method. Then the character at\nindex k in this character sequence becomes equal to the character at index k in this sequence, if k is less than n;\notherwise, it is equal to the character at index k+start-n in the argument s.\nIf s is null, then this method appends characters as if the s parameter was a sequence containing the four characters\n\"null\".\nParameters:\ns - the sequence to append. start - the starting index of the subsequence to be appended. end - the end index of the\nsubsequence to be appended.\nReturns:\na reference to this object.\n\nThrows:\nIndexOutOfBoundsException - if start is negative, or start is greater than end or end is greater than s.length()\n--------------------------\npublic StringBuilder insert(int dstOffset, CharSequence s, int start, int end)\nInserts a subsequence of the specified CharSequence into this sequence.\nThe subsequence of the argument s specified by start and end are inserted, in order, into this sequence at the\nspecified destination offset, moving up any characters originally above that position. The length of this sequence is\nincreased by end - start.\nThe character at index k in this sequence becomes equal to:\nthe character at index k in this sequence, if k is less than dstOffset\nthe character at index k+start-dstOffset in the argument s, if k is greater than or equal to dstOffset but is less than\ndstOffset+end-start\nthe character at index k-(end-start) in this sequence, if k is greater than or equal to dstOffset+end-start\nThe dstOffset argument must be greater than or equal to 0, and less than or equal to the length of this sequence.\nThe start argument must be nonnegative, and not greater than end.\nThe end argument must be greater than or equal to start, and less than or equal to the length of s.\nIf s is null, then this method inserts characters as if the s parameter was a sequence containing the four characters\n\"null\".\nParameters:\ndstOffset - the offset in this sequence. s - the sequence to be inserted. start - the starting index of the subsequence\nto be inserted. end - the end index of the subsequence to be inserted.\nReturns:\na reference to this object.\nThrows:\nIndexOutOfBoundsException - if dstOffset is negative or greater\n--------------------------\npublic StringBuilder replace(int start, int end, String str)\nReplaces the characters in a substring of this sequence with characters in the specified String. The substring begins\nat the specified start and extends to the character at index end - 1 or to the end of the sequence if no such character\nexists. First the characters in the substring are removed and then the specified String is inserted at start. (This\nsequence will be lengthened to accommodate the specified String if necessary.)\nParameters:\nstart - The beginning index, inclusive. end - The ending index, exclusive. str - String that will replace previous\ncontents.\nReturns:\nThis object.\nThrows:\nStringIndexOutOfBoundsException - if start is negative, greater than length(), or greater than end.\n--------------------------\npublic String substring(int start, int end)\nReturns a new String that contains a subsequence of characters currently contained in this sequence. The substring\nbegins at the specified start and extends to the character at index end - 1.\nParameters:\n\nstart - The beginning index, inclusive. end - The ending index, exclusive.\nReturns:\nThe new string.\nThrows:\nStringIndexOutOfBoundsException - if start or end are negative or greater than length(), or start is greater than\nend."
  },
  {
    "id": "2.1446",
    "topic": "Using Operators and Decision Constructs",
    "question": "Given:\nStringBuilder sb = new StringBuilder(\"asdf\");\nWhich of the following code fragments will print true?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "String str1 = sb.toString();\nString str2 = sb.toString();\nSystem.out.println(str1 == str2);"
      },
      {
        "label": "B",
        "text": "String str1 = sb.toString();\nString str2 = str1;\nSystem.out.println(str1 == str2);"
      },
      {
        "label": "C",
        "text": "String str1 = sb.toString();\nSystem.out.println(str1 == sb);"
      },
      {
        "label": "D",
        "text": "System.out.println(sb == new StringBuilder(sb));"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": ""
  },
  {
    "id": "2.1447",
    "topic": "Java Basics - OO Concepts",
    "question": "You are writing a class named Bandwidth for an internet service provider that keeps track of number of bytes\nconsumed by a user. The following code illustrates the expected usage of this class -\nclass User{\nBandwidth bw = new Bandwidth();\npublic void consume(int bytesUsed){\nbw.addUsage(bytesUsed);\n}\n... other irrelevant code\n}\nclass Bandwidth{\nprivate int totalUsage;\nprivate double totalBill;\nprivate double costPerByte;\n//add your code here\n...other irrelevant code\n}\nYour goal is to implement a method addUsage (and other methods, if required) in Bandwidth class such that all the\nbandwidth used by a User is reflected by the totalUsage field and totalBill is always equal to\ntotalUsage*costPerByte. Further, that a User should not be able to tamper with the totalBill value and is also\nnot able to reduce it.\nWhich of the following implementation(s) accomplishes the above?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "public void addUsage(int bytesUsed){\nif(bytesUsed>0){\ntotalUsage = totalUsage + bytesUsed;\ntotalBill = totalBill + bytesUsed*costPerByte;\n}\n}"
      },
      {
        "label": "B",
        "text": "protected void addUsage(int bytesUsed){\ntotalUsage += bytesUsed;\ntotalBill = totalBill + bytesUsed*costPerByte;\n}"
      },
      {
        "label": "C",
        "text": "private void addUsage(int bytesUsed){\nif(bytesUsed>0){\ntotalUsage = totalUsage + bytesUsed;\ntotalBill = totalUsage*costPerByte;\n}\n}"
      },
      {
        "label": "D",
        "text": "public void addUsage(int bytesUsed){\nif(bytesUsed>0){\ntotalUsage = totalUsage + bytesUsed;\n}\n}\npublic void updateTotalBill(){\ntotalBill = totalUsage*costPerByte;\n}"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": ""
  },
  {
    "id": "2.1448",
    "topic": "Java Basics - OO Concepts",
    "question": "Which of the following are features of Java?\n(Some candidates have reported a similar question being asked with a slightly different (and ambiguous) wording -\nWhich of the following are objected oriented features of Java?",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "Object is the root class of all the classes."
      },
      {
        "label": "B",
        "text": "Objects cannot be reused."
      },
      {
        "label": "C",
        "text": "Objects can share behavior with other objects."
      },
      {
        "label": "D",
        "text": "Everything in Java is an Object."
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "explanation": ""
  },
  {
    "id": "2.1449",
    "topic": "Java Basics - OO Concepts",
    "question": "Which of the following are features of Java?\nSome candidates have reported a similar question being asked with a slightly different (and ambiguous) wording:\nWhich of the following are objected oriented features of Java?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "Every class must have a main method so that it can be tested individually from command line."
      },
      {
        "label": "B",
        "text": "Every class belongs to a package."
      },
      {
        "label": "C",
        "text": "A package must have more than one class."
      },
      {
        "label": "D",
        "text": "A class may inherit from another class."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": ""
  },
  {
    "id": "2.1450",
    "topic": "Java Basics - OO Concepts",
    "question": "Which of the following is correct about Java byte code?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It can run on any OS and chip architecture."
      },
      {
        "label": "B",
        "text": "It can run on any OS and chip architecture if there is a JRE available for that OS and chip architecture."
      },
      {
        "label": "C",
        "text": "It can run only any OS and chip architecture if that platform has a JRE built for it and the Java code was compiled ON that platform."
      },
      {
        "label": "D",
        "text": "It can run only any OS and chip architecture if that platform has a JRE built for it and the Java code was compiled FOR that platform."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Java byte code is basically just a set of instructions that are intepreted by a virtual machine and is independent of\nthe actual machine and OS i.e. the platform. JRE (Java Runtime Environment) is the virtual machine that interprets\nthe given byte code and converts it into the acutal platform understandable instructions. Therefore, all you need to\nrun the byte code is the virtual machine (JRE) for that specific platform on which you want to run it.\nSince the byte code itself is platform independent, you can compile your java code on any platform because no\nmatter where you compile your code, the same byte code will be produced. Therefore, you don't need a java\ncompiler for a particular platform. You just need the JRE for that platform. Oracle provides JRE for several\nplatforms inluding Windows and Unix."
  },
  {
    "id": "2.1451",
    "topic": "Working with Java Data Types",
    "question": "Given:\npublic class Bandwidth{\npublic int available = 0;\npublic int getAvailable(){\nreturn available;\n}\npublic Bandwidth(int quota){\nthis.available = quota;\n}\npublic void addMore(int more){\navailable += more;\n}\n}\nand another piece of code from another class:\nBandwidth bw = new Bandwidth(100);\n//INSERT CODE HERE\nSystem.out.println(bw.getAvailable());\nWhat can be inserted in the code above so that it will print 0?",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "bw(0);"
      },
      {
        "label": "B",
        "text": "bw.available = 0;"
      },
      {
        "label": "C",
        "text": "bw.setAvailable(0);"
      },
      {
        "label": "D",
        "text": "bw = new Bandwidth();"
      },
      {
        "label": "E",
        "text": "bw.addMore(-bw.getAvailable());"
      },
      {
        "label": "F",
        "text": "--bw.available;"
      }
    ],
    "correctAnswers": [
      "B",
      "E"
    ],
    "explanation": ""
  },
  {
    "id": "2.1452",
    "topic": "Java Basics",
    "question": "Following options show the complete code listings of a file. Which of these will compile?",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "//In file A.java\nimport java.io.*;\npackage x;\npublic class A{\n}"
      },
      {
        "label": "B",
        "text": "//In file B.java\nimport java.io.*;\nclass A{\npublic static void main() throws IOException{ }\n}"
      },
      {
        "label": "C",
        "text": "//In file A.java\npublic class A{\nint a;\npublic void m1(){\nprivate int b = 0;\na = b;\n}\n}"
      },
      {
        "label": "D",
        "text": "//In file A.java\npublic class A{\npublic static void main(String[] args){\nSystem.out.println(new A().main);\n}\nint main;\n}"
      },
      {
        "label": "E",
        "text": "Only one of the above options is correct."
      }
    ],
    "correctAnswers": [
      "B",
      "D"
    ],
    "explanation": ""
  },
  {
    "id": "2.1453",
    "topic": "Working with Java API - Time and Date",
    "question": "Given:\nLocalDate d1 = LocalDate.parse(\"2015-02-05\", DateTimeFormatter.ISO_DATE);\nLocalDate d2 = LocalDate.of(2015, 2, 5);\nLocalDate d3 = LocalDate.now();\nSystem.out.println(d1);\nSystem.out.println(d2);\nSystem.out.println(d3);\nAssuming that the current date on the system is 5th Feb, 2015, which of the following will be a part of the output?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "5th Feb, 2015"
      },
      {
        "label": "B",
        "text": "2015-02-05T00:00:00"
      },
      {
        "label": "C",
        "text": "02/05/2015"
      },
      {
        "label": "D",
        "text": "05/02/2015"
      },
      {
        "label": "E",
        "text": "java.time.format.DateTimeParseException"
      },
      {
        "label": "F",
        "text": "None of the above."
      }
    ],
    "correctAnswers": [
      "F"
    ],
    "explanation": "All the three printlns will produce 2015-02-05."
  },
  {
    "id": "2.1454",
    "topic": "Using Loop Constructs",
    "question": "You have been given an array of objects and you need to process this array as follows -\n1. Call a method on each object from first to last one by one.\n2. Call a method on each object from last to first one by one.\n3. Call a method on only those objects at even index (0, 2, 4, 6, etc.)\nWhich of the following are correct?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "Enhanced for loops can be used for all the three tasks."
      },
      {
        "label": "B",
        "text": "Enhanced for loop can be used for only the first task. For the rest, standard for loops can be used."
      },
      {
        "label": "C",
        "text": "Standard for loops can be used for tasks 1 and 2 but not 3."
      },
      {
        "label": "D",
        "text": "All the tasks can be performed either by using only standard for loops or by using only enhanced for loops."
      },
      {
        "label": "E",
        "text": "Neither standard for loops nor enhanced for loops can be used for all three tasks."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "The enhanced for loop is tailor made for processing each element of a collection (or an array) in order. Most\nimportantly, it does not give you an iterating variable that you can manipulate and that makes it impossible to\nchange the order or to skip an element. Therefore, tasks 2 and 3 cannot be done by an enhanced for loop.\nThe standard for loop is very flexible. It can do pretty much anything. Here is how you can do task 2 and 3 using a\nstandard for loop -\n//processing in reverse\nfor(int i=arr.length-1; i>=0; i--){\narr[i].m1();\n}\n//processing alternate\nfor(int i=0; i<arr.length; i=i+2){\narr[i].m1();\n}"
  },
  {
    "id": "2.1455",
    "topic": "Using Operators and Decision Constructs",
    "question": "What will the following code print?\nint x = 1;\nint y = 2;\nint z = x++;\nint a = --y;\nint b = z--;\nb += ++z;\nint answ = x>a?y>b?y:b:x>z?x:z;\nSystem.out.println(answ);",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "0"
      },
      {
        "label": "B",
        "text": "1"
      },
      {
        "label": "C",
        "text": "2"
      },
      {
        "label": "D",
        "text": "-1"
      },
      {
        "label": "E",
        "text": "-2"
      },
      {
        "label": "F",
        "text": "3"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "This is a simple but frustratingly time consuming question. Expect such questions in the exam.\nFor such questions, it is best to keep track of each variable on the notepad after executing each line of code.\nThe final values of the variables are as follows -\nx=2 y=1 z=1 a=1 b=2\nThe expression x>a?y>b?y:b:x>z?x:z; should be grouped as -\nx > a ? (y>b ? y : b) : (x>z ? x : z);\nIt will, therefore, assign 2 to answ."
  },
  {
    "id": "2.1456",
    "topic": "Java Basics - OO Concepts",
    "question": "Which of the following are benefits of polymorphism?",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "It makes the code more reusable."
      },
      {
        "label": "B",
        "text": "It makes the code more efficient."
      },
      {
        "label": "C",
        "text": "It protects the code by preventing extension."
      },
      {
        "label": "D",
        "text": "It makes the code more dynamic."
      }
    ],
    "correctAnswers": [
      "A",
      "D"
    ],
    "explanation": ""
  },
  {
    "id": "2.1457",
    "topic": "Working with Java API - ArrayList",
    "question": "Given:\nabstract class Vehicle{ }\ninterface Drivable{ }\nclass Car extends Vehicle implements Drivable{ }\nclass SUV extends Car { }\nWhich of the following options will fail to compile?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "ArrayList<Vehicle> al1 = new ArrayList<>();\nal1.add(new SUV());"
      },
      {
        "label": "B",
        "text": "ArrayList<Drivable> al2 = new ArrayList<>();\nal2.add(new Car());"
      },
      {
        "label": "C",
        "text": "ArrayList<Drivable> al3 = new ArrayList<>();\nal3.add(new SUV());"
      },
      {
        "label": "D",
        "text": "ArrayList<SUV> al4 = new ArrayList<>();\nal4.add(new Car());"
      },
      {
        "label": "E",
        "text": "ArrayList<Vehicle> al5 = new ArrayList<>();\nal5.add(new Car());"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Although generics are not included in this exam, some candidates have reported getting similar questions that\nincidently touch generic syntax but are not really about generics.\nThis question is based on your understand of is-a relationship. When class A extends or implements B directly or\nindirectly, you can say that A is-a B. Here, Car directly extends Vehicle and directly implements Drivable.\nTherefore, a Car is-a Vehicle and a Car is-a Drivable.\nSimilarly, an SUV is-a Car and since Car is-a Vehicle and is-a Drivable, SUV is also a Vehicle and a Drivable.\nNow, the rule is that if you have a container that is meant to contain A, then you can add anything that is-a A to\nthat container. For example, if you have ArrayList<Car>, you can add a SUV to it because an SUV is-a Car. But if\nyou have ArrayList<SUV>, you cannot add a Car to it because a Car is not an SUV."
  },
  {
    "id": "2.1458",
    "topic": "Working with Java API - ArrayList",
    "question": "Given:\nabstract class Vehicle{ }\ninterface Drivable{ }\nclass Car extends Vehicle implements Drivable{ }\nclass SUV extends Car { }\nWhich of the following options will compile?",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "ArrayList<Vehicle> al1 = new ArrayList<>();\nSUV s = al1.get(0);"
      },
      {
        "label": "B",
        "text": "ArrayList<Drivable> al2 = new ArrayList<>();\nCar c1 = al2.get(0);"
      },
      {
        "label": "C",
        "text": "ArrayList<SUV> al3 = new ArrayList<>();\nDrivable d1 = al3.get(0);"
      },
      {
        "label": "D",
        "text": "ArrayList<SUV> al4 = new ArrayList<>();\nCar c2 = al4.get(0);"
      },
      {
        "label": "E",
        "text": "ArrayList<Vehicle> al5 = new ArrayList<>();\nDrivable d2 = al5.get(0);"
      }
    ],
    "correctAnswers": [
      "C",
      "D"
    ],
    "explanation": "Although generics are not included in this exam, some candidates have reported getting similar questions that\nincidently touch generic syntax but are not really about generics.\nThis question is based on your understand of is-a relationship. When class A extends or implements B directly or\nindirectly, you can say that A is-a B. Here, Car directly extends Vehicle and directly implements Drivable.\nTherefore, a Car is-a Vehicle and a Car is-a Drivable.\nSimilarly, an SUV is-a Car and since Car is-a Vehicle and is-a Drivable, SUV is also a Vehicle and a Drivable.\nNow, the rule is that if you have a container that is known to contain A, then the elements that you take out from it\nare only known to be of type A. For example, if you have an ArrayList of Cars (ArrayList<Car>) and if you take\nout an element from it, you know for sure that it will be a Car. It could be also be an SUV but you are not sure\nabout that. Therefore, you cannot assign that element to a variable of type SUV without a cast. But since a Car is-a\nVehicle, you can assign that element to a variable of type Vehicle."
  },
  {
    "id": "2.1459",
    "topic": "Java Basics - OO Concepts",
    "question": "You are asked to develop an application for a car rental company. As a part of that, you are given the following\nrequirements -\n1. Implement three classes - Car, SUV, and MiniVan, where the Car class is the super class of SUV as well as\nMiniVan.\n2. Implement method int getDailyRate() that returns the daily price of the car.\n3. Implement method void printDetails() that prints the details of the car.\nWhich of the following definition of Car class adds a valid layer of abstraction to the class hierachy?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "public abstract class Car{\npublic abstract int getDailyRate();\npublic void printDetails(){\n// code for printing details goes here\n}\n}"
      },
      {
        "label": "B",
        "text": "public abstract class Car{\npublic int getDailyRate();\npublic void printDetails();\n}"
      },
      {
        "label": "C",
        "text": "public abstract class Car{\npublic abstract int getDailyRate();\npublic abstract void printDetails();\n}"
      },
      {
        "label": "D",
        "text": "public abstract class Car{\npublic abstract int getDailyRate();\npublic abstract void printDetails(){\n// code for printing details goes here\n}\n}"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "The problem statement is very ambiguous and there are multiple valid implementations. You will need to draw\nclues from the options and select the best option by eliminating options that are obviously wrong. Expect such\nquestions in the exam."
  },
  {
    "id": "2.1460",
    "topic": "Working with Methods - Overloading",
    "question": "Consider the following class...\npublic class ParamTest {\npublic static void printSum(int a, int b){\nSystem.out.println(\"In int \"+(a+b));\n}\npublic static void printSum(Integer a, Integer b){\nSystem.out.println(\"In Integer \"+(a+b));\n}\npublic static void printSum(double a, double b){\nSystem.out.println(\"In double \"+(a+b));\n}\npublic static void main(String[] args) {\nprintSum(1, 2);\n}\n}\nWhat will be printed?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "In int 3"
      },
      {
        "label": "B",
        "text": "In Integer 3"
      },
      {
        "label": "C",
        "text": "In double 3.0"
      },
      {
        "label": "D",
        "text": "In double 3"
      },
      {
        "label": "E",
        "text": "It will not compile."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "The call to printSum(1, 2) will be bound to printSum(int, int) because 1 and 2 are ints, which are exact\nmatch to int, int.\nNote that if printSum(int, int) method were not there in the code, printSum(double, double) would have\nbeen invoked instead of printSum(Integer, Integer) because widening is preferred over boxing/unboxing.\nWe advise you to run this program and try out various combinations. The exam has questions on this pattern."
  },
  {
    "id": "2.1461",
    "topic": "Working with Methods - Overloading",
    "question": "Consider the following class...\npublic class ParamTest {\npublic static void printSum(double a, double b){\nSystem.out.println(\"In double \"+(a+b));\n}\npublic static void printSum(float a, float b){\nSystem.out.println(\"In float \"+(a+b));\n}\npublic static void main(String[] args) {\nprintSum(1.0, 2.0);\n}\n}\nWhat will be printed?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "In float 3"
      },
      {
        "label": "B",
        "text": "In float 3.0"
      },
      {
        "label": "C",
        "text": "In double 3.0"
      },
      {
        "label": "D",
        "text": "In double 3"
      },
      {
        "label": "E",
        "text": "It will not compile."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "The call to printSum(1.0, 2.0) will be bound to printSum(double, double ) because 1.0 and 2.0 are double,\nwhich are exact match to double, double.\nNote that if you call printSum(1, 2) , printSum(float, float) would have been invoked instead of\nprintSum(double, double) because a float is closer than a double to an int.\nWe advise you to run this program and try out various combinations. The exam has questions on this pattern."
  },
  {
    "id": "2.1462",
    "topic": "Working with Java API - ArrayList",
    "question": "What will the following code print?\nList s1 = new ArrayList( );\ns1.add(\"a\");\ns1.add(\"b\");\ns1.add(\"c\");\ns1.add(\"a\");\nSystem.out.println(s1.remove(\"a\")+\" \"+s1.remove(\"x\"));",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "1 0"
      },
      {
        "label": "B",
        "text": "2 -1"
      },
      {
        "label": "C",
        "text": "2 0"
      },
      {
        "label": "D",
        "text": "1 -1"
      },
      {
        "label": "E",
        "text": "true false"
      }
    ],
    "correctAnswers": [
      "E"
    ],
    "explanation": "ArrayList's remove(Object ) method returns a boolean. It returns true if the element is found in the list and false\notherwise. The JavaDoc API description of this method is important for the exam -\npublic boolean remove(Object o)\nRemoves the first occurrence of the specified element from this list, if it is present (optional operation). If this list\ndoes not contain the element, it is unchanged. More formally, removes the element with the lowest index i such\nthat (o==null ? get(i)==null : o.equals(get(i))) (if such an element exists). Returns true if this list contained the\nspecified element (or equivalently, if this list changed as a result of the call).\nObserve that it does not remove all occurences of the element. It removes just the first one. In this case, only the\nfirst \"a\" will be removed."
  },
  {
    "id": "2.1463",
    "topic": "Working with Java API - ArrayList",
    "question": "What will the following code print?\nList s1 = new ArrayList( );\ns1.add(\"a\");\ns1.add(\"b\");\ns1.add(\"c\");\ns1.add(\"a\");\nif(s1.remove(\"a\")){\nif(s1.remove(\"a\")){\ns1.remove(\"b\");\n}else{\ns1.remove(\"c\");\n}\n}\nSystem.out.println(s1);",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "[b]"
      },
      {
        "label": "B",
        "text": "[c]"
      },
      {
        "label": "C",
        "text": "[b, c, a]"
      },
      {
        "label": "D",
        "text": "[a, b, c, a]"
      },
      {
        "label": "E",
        "text": "Exception at runtime"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "ArrayList's remove(Object ) method removes the first occurence of the given element and returns true if found.\nIt does not remove all occurences of the element. In this case, the first call to s1.remove(\"a\"); will remove only\nthe first \"a\" and return true, the second call to remove(\"a\") will remove the second \"a\" and return true. Finally,\nthe call to remove(\"b\") will remove \"b\". Therefore, only \"c\" will be left in the list.\nThe JavaDoc API description of this method is important for the exam -\npublic boolean remove(Object o)\nRemoves the first occurrence of the specified element from this list, if it is present (optional operation). If this list\ndoes not contain the element, it is unchanged. More formally, removes the element with the lowest index i such\nthat (o==null ? get(i)==null : o.equals(get(i))) (if such an element exists). Returns true if this list contained the\nspecified element (or equivalently, if this list changed as a result of the call)."
  },
  {
    "id": "2.1464",
    "topic": "Using Operators and Decision Constructs",
    "question": "Given:\npublic class LoopTest {\nint k = 5;\npublic boolean checkIt(int k){\nreturn k-->0?true:false;\n}\npublic void printThem(){\nwhile(checkIt(k)){\nSystem.out.print(k);\n}\n}\npublic static void main(String[] args) {\nnew LoopTest().printThem();\n}\n}\nWhat changes should be made so that the program will print 54321?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "No change is necessary."
      },
      {
        "label": "B",
        "text": "Replace System.out.print(k); with System.out.print(k--);"
      },
      {
        "label": "C",
        "text": "Replace System.out.print(k); with System.out.print(--k);"
      },
      {
        "label": "D",
        "text": "Replace while(checkIt(k)) with while(checkIt(--k))."
      },
      {
        "label": "E",
        "text": "Replace return k-->0?true:false; with return this.k-->0?true:false;"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Observe that the method parameter k in checkIt shadows the instance variable k. Therefore, any changes made to\nk in checkIt will not affect the instance variable k. For checkIt method to access the instance variable k, you need\nto do this.k.\nk-->0 means, first compare the value of k with 0, and then reduce it by 1. (As opposed to --k>0, which means,\nfirst reduce the value of k by 1 and then compare with 0).\nIn the printThem method, k refers to the instance variable. You need to reduce it by 1 after each iteration.\nTherefore, System.out.print(k--); will do."
  },
  {
    "id": "2.1465",
    "topic": "Working with Java API - ArrayList",
    "question": "What will the following code snippet print?\nList s1 = new ArrayList( );\ntry{\nwhile(true){\ns1.add(\"sdfa\");\n}\n}catch(RuntimeException e){\ne.printStackTrace();\n}\nSystem.out.println(s1.size());",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It will not compile."
      },
      {
        "label": "B",
        "text": "It will print a RuntimeException stack trace from the catch clause."
      },
      {
        "label": "C",
        "text": "It will throw an error at runtime that will not be caught by the catch block."
      },
      {
        "label": "D",
        "text": "It will print a stack trace from the catch clause and a number depending on the memory available in the system."
      },
      {
        "label": "E",
        "text": "It will only print a number depending on the memory available in the system."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": ""
  },
  {
    "id": "2.1466",
    "topic": "Lambda Expressions",
    "question": "Which of the following statements are correct regarding a functional interface?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It has exactly one method and it must be abstract."
      },
      {
        "label": "B",
        "text": "It has exactly one method and it may or may not be abstract."
      },
      {
        "label": "C",
        "text": "It must have exactly one abstract method and may have other default or static methods."
      },
      {
        "label": "D",
        "text": "It must have exactly one static method and may have other default or abstract methods."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "A functional interface is an interface that contains exactly one abstract method. It may contain zero or more default\nmethods and/or static methods. Because a functional interface contains exactly one abstract method, you can omit\nthe name of that method when you implement it using a lambda expression. For example, consider the following\ninterface -\ninterface Predicate<T> {\nboolean test(T t);\n}\nThe purpose of this interface is to provide a method that operates on an object of class T and return a boolean.\nYou could have a method that takes an instance of class that implements this interface defined like this -\npublic void printImportantData(ArrayList<Data> dataList, Predicate<Data> p){\nfor(Data d: dataList){\nif(p.test(d)) System.out.println(d);\n}\n}\nwhere Data class could be as simple as public class Data{ public int value; }\nNow, you can call the above method as follows:\nprintImportantData(al, (Data d)->{ return d.value>1; } );\nNotice the lack of method name here. This is possible because the interface has only one abstract method so the\ncompiler can figure out the name. This can be shortened to:\nprintImportantData(al, (Data d)->d.value>1);\nNotice the lack of curly brackets, the return keywordm, and the semicolon. This is possible because the method\nreturns a boolean and the expression d.value>1 also returns a boolean. The compiler is therefore able to figure\nout that the value of this expression is to be returned from the method. This can be shortened even more to:\nprintImportantData(al, d->d.value>1);\nNotice that there is no declaration of d! The compiler can figure out all information it needs because the interface\nhas only one abstract method and that method has only one parameter. So you don't need to write all those things\nin your code.\nCompare the above approach to the old style using an inner class that does the same thing -\nprintImportantData(al, new Predicate<Data>(){\npublic boolean test(Data d){\nreturn d.value>1;\n} } );\nThe Predicate interface described above can be used anywhere there is a need to \"do something with an object and\n\nreturn a boolean\" and is actually provided by the standard java library in java.util.function package. This package\nprovides a few other useful functional interfaces.\nPredicate<T> Represents a predicate (boolean-valued function) of one argument of type T.\nConsumer<T> Represents an operation that accepts a single input argument of type T and returns no result.\nFunction<T,R> Represents a function that accepts one argument of type T and produces a result of type R\nSupplier<T> Represents a supplier of results of type T.\nFor the exam, you only need to be aware of Predicate.\nPlease see http://docs.oracle.com/javase/tutorial/java/javaOO/lambdaexpressions.html for learning Lambda\nexpressions in Java."
  },
  {
    "id": "2.1467",
    "topic": "Lambda Expressions",
    "question": "Given :\n//In Data.java\npublic class Data{\nint value;\nData(int value){\nthis.value = value;\n}\n}\nand the following code fragments:\npublic void printUsefulData(ArrayList<Data> dataList, Predicate<Data> p){\nfor(Data d: dataList){\nif(p.test(d)) System.out.println(d.value);\n}\n}\n....\nArrayList<Data> al = new ArrayList<Data>();\nal.add(new Data(1));al.add(new Data(2));al.add(new Data(3));\n//INSERT METHOD CALL HERE\nWhich of the following options can be inserted above so that it will print 3?",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "printUsefulData(al, (Data d)-> { return d.value>2; } );"
      },
      {
        "label": "B",
        "text": "printUsefulData(al, d-> d.value>2 );"
      },
      {
        "label": "C",
        "text": "printUsefulData(al, (d)-> return d.value>2; );"
      },
      {
        "label": "D",
        "text": "printUsefulData(al, Data d-> d.value>2 );"
      },
      {
        "label": "E",
        "text": "printUsefulData(al, d -> d.value>2; );"
      }
    ],
    "correctAnswers": [
      "A",
      "B"
    ],
    "explanation": "There is a simple trick to identify invalid lambda constructs. When you write a lambda expression for a functional\ninterface, you are essentially providing an implementation of the method declared in that interface but in a very\nconcise manner. Therefore, the lambda expression code that you write must contain all the pieces of the regular\nmethod code except the ones that the compiler can easily figure out on its own such as the parameter types, return\n\nkeyword, and brackets. So, in a lambda expression, just check that all the information is there and that the\nexpression follows the basic syntax -\n(parameter list) OR single_variable_without_type -> { regular lines of code } OR\njust_an_expression_without_semicolon\nFor a complete discussion on this topic please see this short tutorial - http://enthuware.com/index.php/home/115"
  },
  {
    "id": "2.1468",
    "topic": "Lambda Expressions",
    "question": "Given :\ninterface Process{\npublic void process(int a, int b);\n}\npublic class Data{\nint value;\nData(int value){\nthis.value = value;\n}\n}\nand the following code fragments:\npublic void processList(ArrayList<Data> dataList, Process p){\nfor(Data d: dataList){\np.process(d.value, d.value);\n}\n}\n....\nArrayList<Data> al = new ArrayList<Data>();\nal.add(new Data(1));al.add(new Data(2));al.add(new Data(3));\n//INSERT METHOD CALL HERE\nWhich of the following options can be inserted above so that it will print 1 4 9?",
    "selectCount": 3,
    "options": [
      {
        "label": "A",
        "text": "processList(al, a, b->System.out.println(a*b));"
      },
      {
        "label": "B",
        "text": "processList(al, (int a, int b)->System.out.println(a*b) );"
      },
      {
        "label": "C",
        "text": "processList(al, (int a, int b)->System.out.println(a*b); );"
      },
      {
        "label": "D",
        "text": "processList(al, (a, b)->System.out.println(a*b));"
      },
      {
        "label": "E",
        "text": "processList(al, (a, b) ->{ System.out.println(a*b); } );"
      }
    ],
    "correctAnswers": [
      "B",
      "D",
      "E"
    ],
    "explanation": "There is a simple trick to identify invalid lambda constructs. When you write a lambda expression for a functional\ninterface, you are essentially providing an implementation of the method declared in that interface but in a very\nconcise manner. Therefore, the lambda expression code that you write must contain all the pieces of the regular\nmethod code except the ones that the compiler can easily figure out on its own such as the parameter types, return\nkeyword, and brackets. So, in a lambda expression, just check that all the information is there and that the\nexpression follows the basic syntax -\n(parameter list) OR single_variable_without_type -> { regular lines of code } OR\njust_an_expression_without_semicolon\nFor a complete discussion on this topic please see this short tutorial - http://enthuware.com/index.php/home/115"
  },
  {
    "id": "2.1469",
    "topic": "Lambda Expressions",
    "question": "Given :\n//In Data.java\npublic class Data{\nint value;\nData(int value){\nthis.value = value;\n}\npublic String toString(){ return \"\"+value; }\n}\nand the following code fragments:\npublic void filterData(ArrayList<Data> dataList, Predicate<Data> p){\nIterator<Data> i = dataList.iterator();\nwhile(i.hasNext()){\nif(p.test(i.next())){\ni.remove();\n}\n}\n}\n....\nData d = new Data(1); al.add(d);\nd = new Data(2); al.add(d);\nd = new Data(3); al.add(d);\n//INSERT METHOD CALL HERE\nSystem.out.println(al);\nWhich of the following options can be inserted above so that it will print [1, 3]?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "filterData(al, d -> d.value%2 == 0 );"
      },
      {
        "label": "B",
        "text": "filterData(al, (Data x) -> x.value%2 == 0 );"
      },
      {
        "label": "C",
        "text": "filterData(al, (Data y) -> y.value%2 );"
      },
      {
        "label": "D",
        "text": "filterData(al, d -> return d.value%2 );"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "There is a simple trick to identify invalid lambda constructs. When you write a lambda expression for a functional\ninterface, you are essentially providing an implementation of the method declared in that interface but in a very\nconcise manner. Therefore, the lambda expression code that you write must contain all the pieces of the regular\nmethod code except the ones that the compiler can easily figure out on its own such as the parameter types, return\nkeyword, and brackets. So, in a lambda expression, just check that all the information is there and that the\nexpression follows the basic syntax -\n(parameter list) OR single_variable_without_type -> { regular lines of code } OR\njust_an_expression_without_semicolon\nFor a complete discussion on this topic please see this short tutorial - http://enthuware.com/index.php/home/115"
  },
  {
    "id": "2.1470",
    "topic": "Lambda Expressions",
    "question": "Which of the following are correct about java.util.function.Predicate?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It is an interface that has only one method with the signature -\npublic void test(T t);"
      },
      {
        "label": "B",
        "text": "It is an interface that has only one method with the signature -\npublic boolean test(T t);"
      },
      {
        "label": "C",
        "text": "It is an abstract class that has only one abstract method with the signature -\npublic abstract void test(T t);"
      },
      {
        "label": "D",
        "text": "It is an abstract class that has only one abstract method with the signature -\npublic abstract boolean test(T t);"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "java.util.function.Predicate is one of the several functional interfaces that have been added to Java 8. This\ninterface has exactly one abstract method named test, which takes any object as input and returns a boolean. This\ncomes in very handy when you have a collection of objects and you want to go through each object of that\ncollection and see if that object satisfies some criteria. For example, you may have a collection of Employee\nobjects and, in one place of your application, you want to remove all such employees whose age is below 50, while\nin other place, you want to remove all such employees whose salary is above 100,000. In both the cases, you want\nto go through your collection of employees, and check each Employee object to determine if it fits the criteria.\nThis can be implemented by writing an interface named CheckEmployee and having a method check(Employee )\nwhich would return true if the passed object satisfies the criteria. The following code fragments illustrate how it\ncan be done -\n//define the interface for creating criteria\ninterface CheckEmployee {\nboolean check(Employee e );\n}\n...\n//write a method that filters Employees based on given criteria.\npublic void filterEmployees(ArrayList<Employee> dataList, CheckEmployee p){\nIterator<Employee> i = dataList.iterator();\nwhile(i.hasNext()){\nif(p.check(i.next())){\ni.remove();\n}\n}\n}\n...\n//create a specific criteria by defining a class that implements CheckEmployee\nclass MyCheckEmployee implements CheckEmployee{\npublic boolean check(Employee e){\nreturn e.getSalary()>100000;\n}\n};\n...\n//use the filter method with the specific criteria to filter the collection.\nfilterEmployees(employeeList, new MyCheckEmployee());\nThis is a very common requirement across applications. The purpose of Predicate interface (and other standard\nfunctional interfaces) is to eliminate the need for every application to write a customized interface. For example,\n\nyou can do the same thing with the Predicate interface as follows -\npublic void filterEmployees(ArrayList<Employee> dataList, Predicate<Employee> p){\nIterator<Employee> i = dataList.iterator();\nwhile(i.hasNext()){\nif(p.test(i.next())){\ni.remove();\n}\n}\n}\n...\n// Instead of defining a MyPredicate class (like we did with MyCheckEmployee), we could also\ndefine and instantiate an anonymous inner class to reduce code clutter\nPredicate<Employee> p = new Predicate<Employee>(){\npublic boolean test(Employee e){\nreturn e.getSalary()>100000;\n}\n};\n...\nfilterEmployees(employeeList, p);\nNote that both the interfaces (CheckEmployee and Predicate) can be used with lambda expressions in exactly the\nsame way. Instead of creating an anonymous inner class that implements the CheckEmployee or Predicate\ninterface, you could just do -\nfilterEmployees(employeeList, e->e.getSalary()>100000);\nThe benefit with Predicate is that you don't have to write it. It is already there in the standard java library."
  },
  {
    "id": "2.1471",
    "topic": "Lambda Expressions",
    "question": "Which of the following lambda expressions can be used to invoke a method that accepts a\njava.util.function.Predicate as an argument?",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "x -> System.out.println(x)"
      },
      {
        "label": "B",
        "text": "x -> System.out.println(x);"
      },
      {
        "label": "C",
        "text": "x -> x == null"
      },
      {
        "label": "D",
        "text": "() -> true"
      },
      {
        "label": "E",
        "text": "x->true"
      }
    ],
    "correctAnswers": [
      "C",
      "E"
    ],
    "explanation": ""
  },
  {
    "id": "2.1472",
    "topic": "Lambda Expressions",
    "question": "What will the following code print when run?\nimport java.util.function.Predicate;\nclass Employee{\nint age; //1\n}\npublic class TestClass{\npublic static boolean validateEmployee(Employee e, Predicate<Employee> p){\nreturn p.test(e);\n}\npublic static void main(String[] args) {\nEmployee e = new Employee(); //2\nSystem.out.println(validateEmployee(e, e->e.age<10000)); //3\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It will fail to compile at line marked //1"
      },
      {
        "label": "B",
        "text": "It will fail to compile at line marked //2"
      },
      {
        "label": "C",
        "text": "It will fail to compile at line marked //3"
      },
      {
        "label": "D",
        "text": "It will compile fine and print true when run."
      },
      {
        "label": "E",
        "text": "It will compile fine and print false when run."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": ""
  },
  {
    "id": "2.1473",
    "topic": "Lambda Expressions",
    "question": "What can be inserted in the code below so that it will print true when run?\npublic class TestClass{\npublic static boolean checkList(List list, Predicate<List> p){\nreturn p.test(list);\n}\npublic static void main(String[] args) {\nboolean b = //WRITE CODE HERE\nSystem.out.println(b);\n}\n}",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "checkList(new ArrayList(), al -> al.isEmpty());"
      },
      {
        "label": "B",
        "text": "checkList(new ArrayList(), ArrayList al -> al.isEmpty());"
      },
      {
        "label": "C",
        "text": "checkList(new ArrayList(), al -> return al.size() == 0);"
      },
      {
        "label": "D",
        "text": "checkList(new ArrayList(), al -> al.add(\"hello\"));"
      },
      {
        "label": "E",
        "text": "checkList(new ArrayList(), (ArrayList al) -> al.isEmpty());"
      }
    ],
    "correctAnswers": [
      "A",
      "D"
    ],
    "explanation": ""
  },
  {
    "id": "2.1474",
    "topic": "Lambda Expressions",
    "question": "Given:\nimport java.util.*;\nclass Data{\nint value;\npublic Data(int x){ this.value = x; }\npublic String toString(){ return \"\"+value; }\n}\nclass MyFilter {\npublic boolean test(Data d){\nreturn d.value == 0;\n}\n}\npublic class TestClass{\npublic static void filterData(ArrayList<Data> dataList, MyFilter f){\nIterator<Data> i = dataList.iterator();\nwhile(i.hasNext()){\nif(f.test(i.next())){\ni.remove();\n}\n}\n}\npublic static void main(String[] args) {\nArrayList<Data> al = new ArrayList<Data>();\nData d = new Data(1); al.add(d);\nd = new Data(2); al.add(d);\nd = new Data(0); al.add(d);\nfilterData(al, new MyFilter()); //1\nSystem.out.println(al);\n}\n}\nHow can you use a lambda expression to achieve the same result?",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "Replace the line at //1 with:\nfilterData(al, x -> x.value==0);"
      },
      {
        "label": "B",
        "text": "Add implements java.util.function.Predicate to MyFilter definition and replace the line at //1 with:\nfilterData(al, x -> x.value==0);"
      },
      {
        "label": "C",
        "text": "Add implements java.util.function.Predicate<Data> to MyFilter definition and replace the line at //1 with:\nfilterData(al, x -> x.value==0);"
      },
      {
        "label": "D",
        "text": "Remove MyFilter class altogether."
      },
      {
        "label": "E",
        "text": "Remove MyFilter class altogether."
      }
    ],
    "correctAnswers": [
      "E"
    ],
    "explanation": ""
  },
  {
    "id": "2.1475",
    "topic": "Lambda Expressions",
    "question": "Given:\ninterface Runner {\npublic void run();\n}\nWhich of the following is/are valid lambda expression(s) that capture(s) the above interface?",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "-> System.out.println(\"running...\");"
      },
      {
        "label": "B",
        "text": "void -> System.out.println(\"running...\")"
      },
      {
        "label": "C",
        "text": "() -> System.out.println(\"running...\")"
      },
      {
        "label": "D",
        "text": "() -> { System.out.println(\"running...\"); return; }"
      },
      {
        "label": "E",
        "text": "(void) -> System.out.println(\"running...\")"
      },
      {
        "label": "F",
        "text": "-> System.out.println(\"running...\")"
      }
    ],
    "correctAnswers": [
      "C",
      "D"
    ],
    "explanation": "Runner is a valid functional interface because it has exactly one abstract method.\nSince this method does not take any parameter, the parameter list part of the lambda expression must be ().\nFurther, since it does not return anything, the body part should ideally be such that it does not return anything\neither. Thus, you can either use a method call that returns void or some code enclosed within { and } that does not\nreturn anything. In this case, however, since there is only one interface with one method, it is ok even if the body\nof the lambda expression returns a value as illustrated by the following code:\ninterface Runner {\npublic void run();\n}\npublic class TestClass {\npublic static void main(String[] args) {\nrun(() -> voidMethod()); //will invoke run(Runner ) method.\nrun(() -> intMethod());//will also invoke run(Runner ) method.\n}\npublic static void run(Runner x) {\nx.run();\n}\npublic static void voidMethod() {\nSystem.out.println(\"voidMethod\");\n}\npublic static int intMethod() {\nSystem.out.println(\"intMethod\");\nreturn 0;\n}\n}\nThe return type of the lambda expression's body becomes important in the following code though:\ninterface Runner {\npublic void run();\n}\ninterface Runner2 {\npublic int run();\n}\n\npublic class TestClass {\npublic static void main(String[] args) {\nrun(() -> voidMethod()); //will invoke run(Runner ) method.\nrun(() -> intMethod()); //will not invoke run(Runner ) method.\n}\npublic static void run(Runner x) {\nSystem.out.println(\"In runner\");\nx.run();\n}\npublic static void run(Runner2 x) {\nSystem.out.println(\"In runner2\");\nx.run();\n}\npublic static void voidMethod() {\nSystem.out.println(\"voidMethod\");\n}\npublic static int intMethod() {\nSystem.out.println(\"intMethod\");\nreturn 0;\n}\n}"
  },
  {
    "id": "2.1476",
    "topic": "Working with Inheritance",
    "question": "Which of the following are valid declarations inside an interface independent of each other?",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "default void compute();"
      },
      {
        "label": "B",
        "text": "public void compute();"
      },
      {
        "label": "C",
        "text": "static void compute(){\nSystem.out.println(\"computing...\");\n}"
      },
      {
        "label": "D",
        "text": "static void compute();"
      },
      {
        "label": "E",
        "text": "default static void compute(){\nSystem.out.println(\"computing...\");\n};"
      }
    ],
    "correctAnswers": [
      "B",
      "C"
    ],
    "explanation": ""
  },
  {
    "id": "2.1477",
    "topic": "Working with Inheritance",
    "question": "Which statements about the following code are correct?\ninterface House{\npublic default String getAddress(){\nreturn \"101 Main Str\";\n}\n}\ninterface Bungalow extends House{\npublic default String getAddress(){\nreturn \"101 Smart Str\";\n}\n}\nclass MyHouse implements Bungalow, House{\n}\npublic class TestClass {\npublic static void main(String[] args) {\nHouse ci = new MyHouse(); //1\nSystem.out.println(ci.getAddress()); //2\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "Code for interface House will cause compilation to fail."
      },
      {
        "label": "B",
        "text": "Code for interface Bungalow will cause compilation to fail."
      },
      {
        "label": "C",
        "text": "Code for class MyHouse will cause compilation to fail."
      },
      {
        "label": "D",
        "text": "Line at //1 will cause compilation to fail."
      },
      {
        "label": "E",
        "text": "Line at //2 will cause compilation to fail."
      },
      {
        "label": "F",
        "text": "The code will compile successfully."
      }
    ],
    "correctAnswers": [
      "F"
    ],
    "explanation": "There is no problem with the code. It is perfectly valid for a subinterface to override a default method of the base\ninterface. A class that implements an interface can also override a default method.\nIt is valid for MyHouse to say that it implements Bungalow as well as House even though House is redundant\nbecause Bungalow is a House anyway.\nIt will actually print 101 Smart str."
  },
  {
    "id": "2.1478",
    "topic": "Working with Inheritance",
    "question": "Which statements about the following code contained in BankAccount.java are correct?\ninterface Account{\npublic default String getId(){\nreturn \"0000\";\n}\n}\ninterface PremiumAccount extends Account{\npublic String getId();\n}\npublic class BankAccount implements PremiumAccount{\npublic static void main(String[] args) {\nAccount acct = new BankAccount();\nSystem.out.println(acct.getId());\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It will print 0000 when run."
      },
      {
        "label": "B",
        "text": "It will compile if class BankAccount provides an implementation for getId method."
      },
      {
        "label": "C",
        "text": "It will not compile unless interface PremiumAccount is marked abstract."
      },
      {
        "label": "D",
        "text": "It will compile if getId method in PremiumAccount is replaced with:\npublic String getId(){ super.getId(); }"
      },
      {
        "label": "E",
        "text": "It will compile if getId method in PremiumAccount is replaced with:\npublic default String getId(){ super.getId(); }"
      },
      {
        "label": "F",
        "text": "It will compile if getId method in PremiumAccount is replaced with:\npublic default String getId(){ super(); }"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": ""
  },
  {
    "id": "2.1479",
    "topic": "Working with Inheritance",
    "question": "Which of these statements about interfaces are true?",
    "selectCount": 3,
    "options": [
      {
        "label": "A",
        "text": "Interfaces are always abstract."
      },
      {
        "label": "B",
        "text": "An interface can have static methods.\nJava 8 allows interfaces to have static methods as well as default methods."
      },
      {
        "label": "C",
        "text": "All methods in an interface are abstract although you need not declare them to be so."
      },
      {
        "label": "D",
        "text": "Fields of an interface may be declared as transient or volatile but not synchronized."
      },
      {
        "label": "E",
        "text": "Interfaces cannot be final."
      },
      {
        "label": "F",
        "text": "In Java 8, interfaces allow multiple implementation inheritance through default methods."
      }
    ],
    "correctAnswers": [
      "A",
      "B",
      "E"
    ],
    "explanation": ""
  },
  {
    "id": "2.1480",
    "topic": "Working with Inheritance",
    "question": "Identify correct statements about the following code -\ninterface Drink{\ndefault double getAlcoholPercent(){\nreturn 0.0;\n}\nstatic double computeAlcoholPercent(){\nreturn 0.0;\n}\n}\ninterface ColdDrink extends Drink{\nString getName();\n}\nclass CrazyDrink implements ColdDrink{\n// INSERT CODE HERE\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "CrazyDrink must either implement getName or be marked abstract."
      },
      {
        "label": "B",
        "text": "CrazyDrink must either implement getName as well as computeAlcoholPercent or be marked abstract."
      },
      {
        "label": "C",
        "text": "CrazyDrink must either implement getName as well as getAlcoholPercent or be marked abstract."
      },
      {
        "label": "D",
        "text": "CrazyDrink must either implement getName or be marked abstract. Further, computeAlcoholPercent must be removed from Drink."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": ""
  },
  {
    "id": "2.1481",
    "topic": "Working with Inheritance",
    "question": "Given:\ninterface Account{\npublic default String getId(){\nreturn \"0000\";\n}\n}\ninterface PremiumAccount extends Account{\n//INSERT CODE HERE\n}\nWhich of the following options can be inserted in PremiumAccount independent of each other?",
    "selectCount": 2,
    "options": [
      {
        "label": "A",
        "text": "static String getId(){\nreturn \"1111\";\n}"
      },
      {
        "label": "B",
        "text": "String getId();"
      },
      {
        "label": "C",
        "text": "default String getId(){\nreturn \"1111\";\n};"
      },
      {
        "label": "D",
        "text": "abstract static String getName();"
      },
      {
        "label": "E",
        "text": "static String getName();"
      },
      {
        "label": "F",
        "text": "default String getName();"
      }
    ],
    "correctAnswers": [
      "B",
      "C"
    ],
    "explanation": ""
  },
  {
    "id": "2.1482",
    "topic": "Working with Inheritance",
    "question": "What will the following code print when compiled and run?\nclass Baap{\npublic int h = 4;\npublic int getH(){\nSystem.out.println(\"Baap \"+h); return h;\n}\n}\npublic class Beta extends Baap{\npublic int h = 44;\npublic int getH(){\nSystem.out.println(\"Beta \"+h); return h;\n}\npublic static void main(String[] args) {\nBaap b = new Beta();\nSystem.out.println(b.h+\" \"+b.getH());\nBeta bb = (Beta) b;\nSystem.out.println(bb.h+\" \"+bb.getH());\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "Baap 44\n4 44\nBeta 44\n44 44"
      },
      {
        "label": "B",
        "text": "Beta 44\n4 44\nBaap 44\n44 44"
      },
      {
        "label": "C",
        "text": "Beta 44\n4 44\nBeta 44\n44 44"
      },
      {
        "label": "D",
        "text": "4 44\nBeta 44\n44 44\nBeta 44"
      },
      {
        "label": "E",
        "text": "44 44\nBeta 44\n4 44\nBeta 44"
      },
      {
        "label": "F",
        "text": "4 44\nBeta 44\n4 44\nBeta 44"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Always remember: Instance methods are overridden and variables are hidden. Which method is invoked depends\non the class of the actual object, while which field is accessed depends on the class of the variable.\nHere, b refers to an object of class Beta so b.getH() will always call the overridden (subclass's method). However,\nthe type of reference of b is Baap. so b.h will always refer to Baap's h. Further, inside Beta's getH(), Beta's h will\n\nbe accessed instead of Baap's h because you are accessing this.h ('this' is implicit) and the type of this is Beta.\nThe class of bb, on the other hand, is Beta. Thus, bb.h will always refer to Beta's h."
  },
  {
    "id": "2.1483",
    "topic": "Working with Methods - Overloading",
    "question": "What should be placed in the two blanks so that the following code will compile without errors:\nclass XXX{\npublic void m() {\nthrow new RuntimeException();\n}\n}\nclass YYY extends XXX{\npublic void m() throws Exception{\nthrow new Exception();\n}\n}\npublic class TestClass {\npublic static void main(String[] args) {\n______ obj = new ______();\nobj.m();\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "XXX and YYY"
      },
      {
        "label": "B",
        "text": "XXX and XXX"
      },
      {
        "label": "C",
        "text": "YYY and YYY"
      },
      {
        "label": "D",
        "text": "YYY and XXX"
      },
      {
        "label": "E",
        "text": "None of the options will make the code compile."
      }
    ],
    "correctAnswers": [
      "E"
    ],
    "explanation": ""
  },
  {
    "id": "2.1484",
    "topic": "Working with Java API - Time and Date",
    "question": "Given that Daylight Savings Time ends on Nov 1 at 2 AM in US/Eastern time zone, what will the following code\nprint -\nLocalDateTime ld = LocalDateTime.of(2015, Month.OCTOBER, 31, 10, 0);\nZonedDateTime date = ZonedDateTime.of(ld, ZoneId.of(\"US/Eastern\"));\ndate = date.plus(Duration.ofDays(1));\nSystem.out.println(date);\ndate = ZonedDateTime.of(ld, ZoneId.of(\"US/Eastern\"));\ndate = date.plus(Period.ofDays(1));\nSystem.out.println(date);\nNote: This question refers to ZonedDateTime and Duration, which are not explicitly mentioned in the objectives.\nHowever, a few candidates have reported getting a similar question and so we have included it in this question\nbank.",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "2015-11-01T09:00-05:00[US/Eastern]\n2015-11-01T09:00-05:00[US/Eastern]"
      },
      {
        "label": "B",
        "text": "2015-11-01T09:00-05:00[US/Eastern]\n2015-11-01T10:00-05:00[US/Eastern]"
      },
      {
        "label": "C",
        "text": "2015-11-01T10:00-05:00[US/Eastern]\n2015-11-01T09:00-05:00[US/Eastern]"
      },
      {
        "label": "D",
        "text": "2015-11-01T10:00-05:00[US/Eastern]\n2015-11-01T10:00-05:00[US/Eastern]"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Important thing to remember here is that Period is used to manipulate dates in terms of days, months, and years,\nwhile Duration is used to manipulate dates in terms of hours, minutes, and seconds. Therefore, Period doesn't mess\nwith the time component of the date while Duration may changed the time component if the date is close to the\nDST boundary.\nDurations and periods differ in their treatment of daylight savings time when added to ZonedDateTime. A\nDuration will add an exact number of seconds, thus a duration of one day is always exactly 24 hours. By contrast,\na Period will add a conceptual day, trying to maintain the local time.\nFor example, consider adding a period of one day and a duration of one day to 18:00 on the evening before a\ndaylight savings gap. The Period will add the conceptual day and result in a ZonedDateTime at 18:00 the\nfollowing day. By contrast, the Duration will add exactly 24 hours, resulting in a ZonedDateTime at 19:00 the\nfollowing day (assuming a one hour DST gap)."
  },
  {
    "id": "2.1485",
    "topic": "Working with Java API - Time and Date",
    "question": "Which of the following options correctly add 1 month and 1 day to a given LocalDate -\npublic LocalDate process(LocalDate ld){\n//INSERT CODE HERE\nreturn ld2;\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "LocalDate ld2 = ld.plus(Period.ofMonths(1).ofDays(1));"
      },
      {
        "label": "B",
        "text": "LocalDate ld2 = ld.plus(new Period(0, 1, 1));"
      },
      {
        "label": "C",
        "text": "LocalDate ld2 = ld.plus(new Period(31)).plus(new Period(1));"
      },
      {
        "label": "D",
        "text": "LocalDate ld2 = ld.plus(Period.of(0, 1, 1));"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": ""
  },
  {
    "id": "3.1486",
    "topic": "Working with Methods",
    "question": "What will happen on running the following program?\npublic class DatabaseWrapper\n{\nstatic String url = \"jdbc://derby://localhost:1527//mydb\";\nstatic DatabaseWrapper getDatabase()\n{\nSystem.out.println(\"Getting DB\");\nreturn null;\n}\npublic static void main(String[ ] args)\n{\nSystem.out.println( getDatabase().url );\n}\n}",
    "selectCount": 1,
    "options": [
      {
        "label": "A",
        "text": "It will print Getting DB and jdbc://derby://localhost:1527//mydb without throwing an exception."
      },
      {
        "label": "B",
        "text": "It will throw a NullpointerException at Runtime."
      },
      {
        "label": "C",
        "text": "It will print jdbc://derby://localhost:1527//mydb but will NOT print Getting DB."
      },
      {
        "label": "D",
        "text": "It will print Getting DB and then throw a NullPointerException."
      },
      {
        "label": "E",
        "text": "It will print nothing."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "This question demonstrates that a null reference may be used to access a class (static) variable without causing an\nexception .\nNote the method signature. It returns a reference to an object of class DatabaseWrapper. Thus,\ngetDatabase().url means we are accessing url field of the object returned by the method. Now, since the class\nof the object returned by the method is DatabaseWrapper and the field url is a static field of the class, the compiler\ncreates the instruction for the JVM to access this field directly using the class reference instead of the object\nreference returned by the method at runtime. Thus, the JVM does not need to depend on the actual object returned\nby the method at run time to access url. So even if the method returns null at run time, it doesn't matter because\nthe JVM doesn't even access the reference returned by the method."
  }
];

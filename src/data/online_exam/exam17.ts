// src/data/online_exam/exam17.ts
import { Question } from "../questions";

export const exam17Questions: Question[] = [
  {
    id: "prog-1",
    question: "Which of the following best defines an algorithm?",
    options: ["A pictorial representation of program flow", "A step-by-step procedure to solve a problem in finite time", "A symbolic representation of database entities", "A high-level programming language"],
    correct: 1,
    explanation: "An algorithm is a finite sequence of unambiguous, well-defined instructions to solve a specific problem."
  },
  {
    id: "prog-2",
    question: "What is the main purpose of using a flowchart in program logic design?",
    options: ["To illustrate program logic and decision paths visually", "To compile program instructions directly", "To replace computer memory", "To execute program binaries"],
    correct: 0,
    explanation: "Flowcharts graphically illustrate the flow of control, making complex algorithms easy to understand and debug."
  },
  {
    id: "prog-3",
    question: "Which of the following is NOT a characteristic of a good algorithm?",
    options: ["Finiteness", "Definiteness", "Generality", "Ambiguity"],
    correct: 3,
    explanation: "Algorithms must be completely unambiguous; ambiguity leads to undefined program behavior."
  },
  {
    id: "prog-4",
    question: "In a flowchart, which geometric symbol represents a decision or branching step?",
    options: ["Rectangle", "Parallelogram", "Diamond (Rhombus)", "Oval"],
    correct: 2,
    explanation: "A diamond shape represents a decision/conditional test with multiple exit paths (e.g. Yes/No or True/False)."
  },
  {
    id: "prog-5",
    question: "Which of the following is an advantage of pseudocode over flowcharts?",
    options: ["Can be easily translated into real programming language syntax", "Can be directly executed by hardware", "Requires specialized drawing software", "Takes more space than graphical diagrams"],
    correct: 0,
    explanation: "Pseudocode uses structured English-like statements, making it simple to map directly into high-level code."
  },
  {
    id: "prog-6",
    question: "What does the 'finiteness' property of an algorithm mean?",
    options: ["The algorithm must terminate after a finite number of steps", "The algorithm must produce multiple outputs", "The code must be written in C language", "The algorithm must use limited variables"],
    correct: 0,
    explanation: "Finiteness guarantees that for all valid inputs, the algorithm terminates within a finite duration."
  },
  {
    id: "prog-7",
    question: "Who is recognized as the creator of the C programming language?",
    options: ["James Gosling", "Dennis Ritchie", "Bjarne Stroustrup", "Tim Berners-Lee"],
    correct: 1,
    explanation: "Dennis Ritchie developed the C programming language in 1972 at Bell Telephone Laboratories."
  },
  {
    id: "prog-8",
    question: "What is the size of an 'int' data type on standard 32-bit/64-bit GCC compilers in bytes?",
    options: ["1 byte", "2 bytes", "4 bytes", "8 bytes"],
    correct: 2,
    explanation: "On standard modern 32-bit and 64-bit platforms, an integer occupies 4 bytes (32 bits) of memory."
  },
  {
    id: "prog-9",
    question: "Which format specifier is used in printf() to print a floating-point number in C?",
    options: ["%d", "%c", "%f", "%s"],
    correct: 2,
    explanation: "%f is used for standard float values, while %lf is used for double precision floating-point numbers."
  },
  {
    id: "prog-10",
    question: "Which loop in C is guaranteed to execute its body at least once?",
    options: ["for loop", "while loop", "do-while loop", "nested loop"],
    correct: 2,
    explanation: "The do-while loop evaluates its exit condition at the bottom, guaranteeing at least one execution."
  },
  {
    id: "prog-11",
    question: "What does the operator '&&' represent in C?",
    options: ["Bitwise AND", "Logical AND", "Address operator", "Pointer dereference"],
    correct: 1,
    explanation: "&& evaluates logical AND between boolean expressions, whereas & performs bitwise AND or gets memory address."
  },
  {
    id: "prog-12",
    question: "Which keyword is used in C to prevent a variable from being modified?",
    options: ["static", "volatile", "const", "register"],
    correct: 2,
    explanation: "The 'const' qualifier makes a variable read-only after its initial declaration."
  },
  {
    id: "prog-13",
    question: "In C, what is the value stored in an uninitialized local automatic variable?",
    options: ["Zero", "NULL", "Garbage value", "One"],
    correct: 2,
    explanation: "Automatic local variables are allocated on the stack and contain indeterminate garbage values until explicitly initialized."
  },
  {
    id: "prog-14",
    question: "Which standard header file in C provides functions for dynamic memory allocation like malloc() and free()?",
    options: ["<stdio.h>", "<stdlib.h>", "<string.h>", "<math.h>"],
    correct: 1,
    explanation: "<stdlib.h> contains declarations for malloc(), calloc(), realloc(), free(), and process control functions."
  },
  {
    id: "prog-15",
    question: "What does a pointer variable store in C?",
    options: ["The value of another variable", "The memory address of another variable", "The size of a function", "A character string"],
    correct: 1,
    explanation: "A pointer is a variable whose value is the memory address of another variable."
  },
  {
    id: "prog-16",
    question: "What is the return type of the malloc() function in C?",
    options: ["int*", "char*", "void*", "null"],
    correct: 2,
    explanation: "malloc() returns a generic void pointer (void*) which can be cast to any data type pointer."
  },
  {
    id: "prog-17",
    question: "Which symbol is used for the indirection / dereference operator in C pointers?",
    options: ["&", "*", "->", "."],
    correct: 1,
    explanation: "The asterisk (*) dereferences a pointer to access or modify the value stored at the pointed memory location."
  },
  {
    id: "prog-18",
    question: "In C, strings are terminated by which special character?",
    options: ["'\\0' (Null character)", "'\\n' (Newline)", "'\\t' (Tab)", "' ' (Space)"],
    correct: 0,
    explanation: "In C, strings are null-terminated character arrays ending with the byte '\\0' (ASCII 0)."
  },
  {
    id: "prog-19",
    question: "Which string function in <string.h> is used to determine the length of a string?",
    options: ["strrev()", "strcpy()", "strlen()", "strcmp()"],
    correct: 2,
    explanation: "strlen() calculates the number of characters in a string excluding the terminating null byte."
  },
  {
    id: "prog-20",
    question: "What is the key difference between a struct and a union in C?",
    options: ["Structs allocate separate memory for each member; unions share the same memory location", "Structs can hold functions, unions cannot", "Unions are larger in size than structs", "Structs cannot contain pointers"],
    correct: 0,
    explanation: "In a union, all members share the same memory region, and its size equals the size of its largest member."
  },
  {
    id: "prog-21",
    question: "Which parameter passing mechanism in C allows a function to modify the caller's actual variable value?",
    options: ["Pass by value", "Pass by reference (using pointers)", "Pass by constant", "Pass by register"],
    correct: 1,
    explanation: "Passing pointer addresses allows a function to directly mutate the caller's variables in memory."
  },
  {
    id: "prog-22",
    question: "What is recursion in computer programming?",
    options: ["A loop that never terminates", "A function calling itself directly or indirectly", "A compiler error", "Converting code to machine language"],
    correct: 1,
    explanation: "Recursion is a programming technique where a function solves a problem by calling smaller instances of itself with a base condition."
  },
  {
    id: "prog-23",
    question: "Which file access mode in fopen() opens an existing file for appending new data at the end?",
    options: ["\"r\"", "\"w\"", "\"a\"", "\"r+\""],
    correct: 2,
    explanation: "\"a\" mode opens a file for writing, preserving existing content and appending all new data at the end."
  },
  {
    id: "prog-24",
    question: "What does the preprocessor directive '#define PI 3.14159' do?",
    options: ["Creates a runtime variable", "Replaces all occurrences of PI with 3.14159 before compilation", "Allocates memory dynamically", "Declares an integer"],
    correct: 1,
    explanation: "#define creates a macro that performs text substitution throughout the source code prior to compilation."
  },
  {
    id: "prog-25",
    question: "Which data structure follows the First-In, First-Out (FIFO) principle?",
    options: ["Stack", "Queue", "Tree", "Graph"],
    correct: 1,
    explanation: "A Queue processes elements in the order they arrived (FIFO: First-In, First-Out)."
  },
  {
    id: "prog-26",
    question: "What is the time complexity of searching an element in a balanced Binary Search Tree (BST)?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    correct: 1,
    explanation: "Searching in a balanced BST halves the search space at each step, yielding O(log n) average and worst-case time complexity."
  },
  {
    id: "prog-27",
    question: "Which sorting algorithm has the best average-case time complexity among the following?",
    options: ["Bubble Sort", "Insertion Sort", "Merge Sort", "Selection Sort"],
    correct: 2,
    explanation: "Merge Sort guarantees O(n log n) time complexity in all cases (worst, average, and best)."
  },
  {
    id: "prog-28",
    question: "In Object-Oriented Programming, what is Encapsulation?",
    options: ["Hiding internal implementation details and bundling data with methods", "Creating multiple copies of a class", "Writing code in multiple files", "Compiling code into machine language"],
    correct: 0,
    explanation: "Encapsulation binds data and functions together into a single class unit, preventing direct external access to internal state."
  },
  {
    id: "prog-29",
    question: "Which access specifier in C++ allows member variables to be accessible only within the class and its derived classes?",
    options: ["public", "private", "protected", "friend"],
    correct: 2,
    explanation: "'protected' members are inaccessible outside the class hierarchy but accessible to derived child classes."
  },
  {
    id: "prog-30",
    question: "What is function overloading in C++?",
    options: ["Two or more functions sharing the same name with different parameter lists", "A function that runs out of stack memory", "A function defined inside another function", "Overwriting base class methods"],
    correct: 0,
    explanation: "Function overloading allows multiple functions in the same scope to have the same name provided their signatures differ."
  },
  {
    id: "prog-31",
    question: "Which operator cannot be overloaded in C++?",
    options: ["+", "==", "Scope Resolution Operator (::)", "[]"],
    correct: 2,
    explanation: "C++ forbids overloading the scope resolution operator (::), dot member operator (.), and sizeof operator."
  },
  {
    id: "prog-32",
    question: "Which type of inheritance occurs when a derived class inherits from two or more base classes?",
    options: ["Single Inheritance", "Multilevel Inheritance", "Multiple Inheritance", "Hierarchical Inheritance"],
    correct: 2,
    explanation: "Multiple inheritance is when a child class inherits properties and methods from more than one direct parent class."
  },
  {
    id: "prog-33",
    question: "What is an abstract class in C++?",
    options: ["A class with no member functions", "A class containing at least one pure virtual function (= 0)", "A class that cannot have derived classes", "A class without a constructor"],
    correct: 1,
    explanation: "An abstract class has at least one pure virtual function and cannot be instantiated directly."
  },
  {
    id: "prog-34",
    question: "In relational algebra, which operator selects rows that satisfy a given predicate?",
    options: ["Projection (π)", "Selection (σ)", "Cartesian Product (×)", "Join (⨝)"],
    correct: 1,
    explanation: "Selection (σ) filters tuples/rows from a relation that satisfy a specified condition."
  },
  {
    id: "prog-35",
    question: "Which SQL clause is used to filter groups of records created by the GROUP BY clause?",
    options: ["WHERE", "HAVING", "ORDER BY", "DISTINCT"],
    correct: 1,
    explanation: "HAVING filters aggregated groups after GROUP BY, whereas WHERE filters individual rows before grouping."
  },
  {
    id: "prog-36",
    question: "What does ACID stand for in database transaction management?",
    options: ["Atomicity, Consistency, Isolation, Durability", "Accuracy, Control, Integration, Design", "Access, Concurrency, Indexing, Data", "Automated, Centralized, Isolated, Distributed"],
    correct: 0,
    explanation: "ACID properties ensure reliable processing of database transactions."
  },
  {
    id: "prog-37",
    question: "Which normal form deals with removing transitive functional dependencies?",
    options: ["1NF", "2NF", "3NF", "BCNF"],
    correct: 2,
    explanation: "Third Normal Form (3NF) requires a table to be in 2NF with no non-prime attribute transitively dependent on the primary key."
  },
  {
    id: "prog-38",
    question: "In computer networks, what is the default subnet mask for a standard Class B network?",
    options: ["255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.255.255"],
    correct: 1,
    explanation: "Class B networks use 16 bits for network ID and 16 bits for host ID, giving subnet mask 255.255.0.0."
  },
  {
    id: "prog-39",
    question: "Which transport layer protocol provides connectionless, best-effort data delivery?",
    options: ["TCP", "UDP", "FTP", "BGP"],
    correct: 1,
    explanation: "UDP (User Datagram Protocol) is lightweight, connectionless, and does not guarantee packet delivery order."
  },
  {
    id: "prog-40",
    question: "Which layer of the OSI model handles data compression, encryption, and syntax conversion?",
    options: ["Application Layer", "Presentation Layer", "Session Layer", "Transport Layer"],
    correct: 1,
    explanation: "The Presentation Layer (Layer 6) formats, encrypts, and compresses data for the application layer."
  },
  {
    id: "prog-41",
    question: "What is the maximum data rate of standard CAT6 Ethernet cable over 55 meters?",
    options: ["100 Mbps", "1 Gbps", "10 Gbps", "100 Gbps"],
    correct: 2,
    explanation: "CAT6 cabling supports 10 Gbps (10GBASE-T) throughput up to 55 meters and 1 Gbps up to 100 meters."
  },
  {
    id: "prog-42",
    question: "Which cyber attack floods a web server with illegitimate requests to exhaust its bandwidth and resources?",
    options: ["Man-in-the-Middle (MitM)", "Distributed Denial of Service (DDoS)", "SQL Injection", "Brute Force"],
    correct: 1,
    explanation: "A DDoS attack utilizes distributed botnets to overwhelm a target server, rendering it unavailable to genuine users."
  },
  {
    id: "prog-43",
    question: "What is the default port number used by Secure Shell (SSH)?",
    options: ["21", "22", "23", "25"],
    correct: 1,
    explanation: "SSH uses TCP port 22 for encrypted remote terminal management."
  },
  {
    id: "prog-44",
    question: "Which process state transition in an Operating System happens when a running process issues an I/O request?",
    options: ["Running to Ready", "Running to Blocked / Waiting", "Blocked to Ready", "Ready to Running"],
    correct: 1,
    explanation: "When a process requests an I/O operation, the OS moves it to the Blocked/Waiting state until the I/O completes."
  },
  {
    id: "prog-45",
    question: "What is a Deadlock in operating systems?",
    options: ["A computer running out of battery", "A situation where two or more processes are permanently blocked waiting for resources held by each other", "A hard drive failure", "A corrupted system registry"],
    correct: 1,
    explanation: "A deadlock occurs when a set of processes are blocked because each is holding a resource and waiting for another resource."
  },
  {
    id: "prog-46",
    question: "Which page replacement algorithm replaces the page that has not been used for the longest period of time?",
    options: ["FIFO (First In First Out)", "LRU (Least Recently Used)", "Optimal Page Replacement", "LFU (Least Frequently Used)"],
    correct: 1,
    explanation: "LRU tracks page accesses and discards the page that has remained untouched for the longest time."
  },
  {
    id: "prog-47",
    question: "What does the command 'chmod 755 filename' do in Unix/Linux?",
    options: ["Gives read, write, execute to owner, and read/execute to group & others", "Deletes the file permanently", "Encrypts the file with AES-256", "Restricts access to root only"],
    correct: 0,
    explanation: "755 gives rwx (7) to owner, r-x (5) to group, and r-x (5) to other users."
  },
  {
    id: "prog-48",
    question: "In HTML5, which semantic tag is used to contain standalone, self-contained content like blog posts or news stories?",
    options: ["<div>", "<section>", "<article>", "<aside>"],
    correct: 2,
    explanation: "The <article> element represents a self-contained composition intended for independent syndication."
  },
  {
    id: "prog-49",
    question: "In CSS, what is the default value of the 'position' property?",
    options: ["relative", "absolute", "static", "fixed"],
    correct: 2,
    explanation: "All HTML elements have 'position: static' by default and follow normal document flow."
  },
  {
    id: "prog-50",
    question: "Which JavaScript keyword declares a block-scoped variable that cannot be reassigned?",
    options: ["var", "let", "const", "static"],
    correct: 2,
    explanation: "const creates a block-scoped, immutable variable binding in modern JavaScript (ES6+)."
  }
];

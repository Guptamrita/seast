// src/data/online_exam/exam16.ts
import { Question } from "../questions";

export const exam16Questions: Question[] = [
  {
    id: "cdsc-1",
    question: "Which type of computer is designed to perform a specific task only?",
    options: ["General purpose computer", "Special purpose computer", "Microcomputer", "Supercomputer"],
    correct: 1,
    explanation: "Special purpose computers are custom-built to handle a single dedicated task, such as weather forecasting or embedded vehicle control."
  },
  {
    id: "cdsc-2",
    question: "The main components of a computer system include:",
    options: ["Input, Output, CPU, Memory", "Printer, Mouse, CPU", "Keyboard, Monitor, RAM", "Software, Printer, CPU"],
    correct: 0,
    explanation: "A complete computer system architecture consists of Input units, Output units, Central Processing Unit (CPU), and Memory storage."
  },
  {
    id: "cdsc-3",
    question: "The Control Unit (CU) in the CPU is responsible for:",
    options: ["Performing arithmetic calculations", "Storing data permanently", "Displaying output", "Controlling and coordinating computer operations"],
    correct: 3,
    explanation: "The Control Unit directs the operation of the processor and coordinates all activities of the computer system."
  },
  {
    id: "cdsc-4",
    question: "The software designed to control and manage the basic operations of computer hardware is known as:",
    options: ["User Application", "Application software", "System software", "Utility software"],
    correct: 2,
    explanation: "System software (such as the Operating System) manages computer hardware, system resources, and provides a platform for application software."
  },
  {
    id: "cdsc-5",
    question: "Which of the following does one nibble represent?",
    options: ["2 bits", "4 bits", "6 bits", "8 bits"],
    correct: 1,
    explanation: "A nibble is a four-bit aggregation, or half of an 8-bit octet/byte."
  },
  {
    id: "cdsc-6",
    question: "Which device is used for non-volatile, long-term data storage?",
    options: ["RAM", "Cache", "Register", "Flash memory"],
    correct: 3,
    explanation: "Flash memory is non-volatile solid-state storage that retains data even when power is turned off."
  },
  {
    id: "cdsc-7",
    question: "Which of the following is volatile memory?",
    options: ["Flash memory", "Optical drive", "Paper tape", "RAM"],
    correct: 3,
    explanation: "Random Access Memory (RAM) loses its stored data immediately when power is disconnected."
  },
  {
    id: "cdsc-8",
    question: "Which of the following is a hardcopy output device?",
    options: ["Keyboard", "Monitor", "Plotter", "Microphone"],
    correct: 2,
    explanation: "A plotter is a hardcopy output device used to print vector graphics and architectural drawings on paper."
  },
  {
    id: "cdsc-9",
    question: "Which function is the mandatory entry point of every C program?",
    options: ["main()", "init()", "start()", "#include"],
    correct: 0,
    explanation: "Execution of every standard C program starts from the main() function."
  },
  {
    id: "cdsc-10",
    question: "Which of the following provides a pictorial representation of a problem-solving logic?",
    options: ["Algorithm", "Flowchart", "Pseudocode", "Data Flow Diagram"],
    correct: 1,
    explanation: "A flowchart is a diagrammatic/pictorial representation of the step-by-step logic of an algorithm."
  },
  {
    id: "cdsc-11",
    question: "In C++ and OOP, runtime polymorphism is primarily achieved by:",
    options: ["Virtual functions", "Arrays", "Constructors", "Operators"],
    correct: 0,
    explanation: "Virtual functions with dynamic binding enable runtime polymorphism in Object-Oriented Programming."
  },
  {
    id: "cdsc-12",
    question: "Which data structure is needed to convert infix mathematical expressions to postfix notation?",
    options: ["Tree", "Queue", "Stack", "Graph"],
    correct: 2,
    explanation: "A Stack (LIFO data structure) is used in Shunting-yard algorithm to convert infix expressions to postfix (RPN)."
  },
  {
    id: "cdsc-13",
    question: "Which of the following is NOT a type of constructor in C++?",
    options: ["Default constructor", "Parameterized constructor", "Copy constructor", "Friend constructor"],
    correct: 3,
    explanation: "Friend functions exist in C++, but there is no such concept as a 'Friend constructor'."
  },
  {
    id: "cdsc-14",
    question: "Which feature of OOP promotes code reusability?",
    options: ["Polymorphism", "Abstraction", "Inheritance", "Encapsulation"],
    correct: 2,
    explanation: "Inheritance allows a child class to inherit features of a parent class, facilitating code reusability."
  },
  {
    id: "cdsc-15",
    question: "In HTML, which tag defines a row in a table?",
    options: ["<td> and </td>", "<cr> and </cr>", "<th> and </th>", "<tr> and </tr>"],
    correct: 3,
    explanation: "The <tr> tag defines a table row in HTML5."
  },
  {
    id: "cdsc-16",
    question: "The base address of a page table in physical memory is held by:",
    options: ["Stack pointer", "Page Table Base Register (PTBR)", "Page register", "Program Counter"],
    correct: 1,
    explanation: "The Page Table Base Register (PTBR) in the CPU points directly to the active page table in physical memory."
  },
  {
    id: "cdsc-17",
    question: "Moving an idle or suspended process from main memory to disk is called:",
    options: ["Scheduling", "Swapping", "Spooling", "Caching"],
    correct: 1,
    explanation: "Swapping is a memory management scheme in which a process is temporarily moved out of RAM into secondary backing store."
  },
  {
    id: "cdsc-18",
    question: "In preemptive priority scheduling, when a higher priority process arrives at the ready queue:",
    options: ["It preempts the currently running lower priority process", "It waits for all processes to finish", "It becomes a parent process", "It is rejected"],
    correct: 0,
    explanation: "In preemptive priority scheduling, the CPU is allocated immediately to the highest priority ready process."
  },
  {
    id: "cdsc-19",
    question: "Virtual memory allows the operating system to:",
    options: ["Use disk storage space as an extension of RAM", "Increase CPU clock speed", "Compress hard drive files", "Speed up monitor refresh rate"],
    correct: 0,
    explanation: "Virtual memory creates an illusion of a very large memory space by swapping pages between RAM and hard disk swap space."
  },
  {
    id: "cdsc-20",
    question: "Thrashing occurs in an operating system when:",
    options: ["The CPU is 100% busy doing calculations", "Processes spend more time paging than executing instructions", "Hard drive gets disconnected", "Cache memory overflows"],
    correct: 1,
    explanation: "Thrashing is a state where the system spends almost all its time swapping pages in and out of memory rather than doing useful work."
  },
  {
    id: "cdsc-21",
    question: "The primary objective of database normalization is to:",
    options: ["Decrease SQL performance", "Eliminate data anomalies and minimize redundancy", "Increase file size", "Convert tables to flat files"],
    correct: 1,
    explanation: "Normalization organizes database tables to eliminate insertion, update, and deletion anomalies while minimizing redundant data."
  },
  {
    id: "cdsc-22",
    question: "The number of entity sets participating in a database relationship is known as:",
    options: ["Degree of relationship", "Cardinality", "Participation constraint", "Modality"],
    correct: 0,
    explanation: "The degree of a relationship refers to the number of entity types that participate in that relationship (e.g. Unary, Binary, Ternary)."
  },
  {
    id: "cdsc-23",
    question: "Which database structure is created to speed up data retrieval operations on a table?",
    options: ["View", "Index (B-Tree/Hash)", "Constraint", "Trigger"],
    correct: 1,
    explanation: "An index provides fast random access to table rows based on indexed column values without scanning the entire table."
  },
  {
    id: "cdsc-24",
    question: "Which database design phase decides file organization, indexing, and storage allocation?",
    options: ["Conceptual design", "Logical design", "Physical design", "Requirement specification"],
    correct: 2,
    explanation: "Physical database design describes the implementation of database on secondary storage media."
  },
  {
    id: "cdsc-25",
    question: "Which SQL command is used to modify the structure of an existing table (e.g., adding a column)?",
    options: ["SELECT", "UPDATE", "DELETE", "ALTER TABLE"],
    correct: 3,
    explanation: "ALTER TABLE is a Data Definition Language (DDL) command used to add, modify, or drop columns in a table."
  },
  {
    id: "cdsc-26",
    question: "What does OLAP stand for in data warehousing?",
    options: ["Online Aggregate Processing", "Online Assessment Processing", "Online Analysis Processing", "Online Analytical Processing"],
    correct: 3,
    explanation: "OLAP stands for Online Analytical Processing, designed for fast multi-dimensional analytical queries."
  },
  {
    id: "cdsc-27",
    question: "Which information system primarily supports strategic, long-range decision-making by executive management?",
    options: ["Transaction Processing System (TPS)", "Management Information System (MIS)", "Decision Support System (DSS) / Executive Support System", "Office Automation System (OAS)"],
    correct: 2,
    explanation: "Decision Support Systems (DSS) and Executive Support Systems (ESS) assist top management in strategic and unstructured decision-making."
  },
  {
    id: "cdsc-28",
    question: "Which document in SDLC formally describes all functional and non-functional requirements of a system?",
    options: ["Source Code repository", "Hardware architecture map", "Software Requirements Specification (SRS)", "User testing log"],
    correct: 2,
    explanation: "The SRS (Software Requirements Specification) document acts as a contract between client and developers detailing all requirements."
  },
  {
    id: "cdsc-29",
    question: "Buying and selling of products and services electronically over the Internet is known as:",
    options: ["E-business", "E-commerce", "E-governance", "Supply Chain Planning"],
    correct: 1,
    explanation: "E-commerce (Electronic Commerce) specifically refers to commercial transactions conducted over computer networks."
  },
  {
    id: "cdsc-30",
    question: "Which fraudulent technique uses deceptive emails or fake websites to steal sensitive banking credentials?",
    options: ["Logic Bomb", "Virus", "Phishing", "Worm"],
    correct: 2,
    explanation: "Phishing is a social engineering cyber attack designed to deceive users into revealing passwords, credit card numbers, or PINs."
  },
  {
    id: "cdsc-31",
    question: "Which network topology connects each device directly to a central hub/switch?",
    options: ["Bus Topology", "Star Topology", "Ring Topology", "Mesh Topology"],
    correct: 1,
    explanation: "In a Star topology, if a single cable or computer fails, the rest of the network continues to operate smoothly."
  },
  {
    id: "cdsc-32",
    question: "Which IPv4 address class provides 24 bits for network and 8 bits for host (maximum 254 hosts per network)?",
    options: ["Class A", "Class B", "Class D", "Class C"],
    correct: 3,
    explanation: "Class C IPv4 addresses use default subnet mask 255.255.255.0 (/24), leaving 8 bits (2^8 - 2 = 254) for usable hosts."
  },
  {
    id: "cdsc-33",
    question: "In the 7-layer OSI reference model, which layer interacts directly with end-user software applications?",
    options: ["Application Layer", "Session Layer", "Physical Layer", "Presentation Layer"],
    correct: 0,
    explanation: "The Application Layer (Layer 7) provides network services (HTTP, SMTP, FTP, DNS) directly to user applications."
  },
  {
    id: "cdsc-34",
    question: "Which protocol resolves an IPv4 address into a Physical Hardware MAC address?",
    options: ["HTTP", "DNS", "TCP", "ARP (Address Resolution Protocol)"],
    correct: 3,
    explanation: "ARP (Address Resolution Protocol) maps a known 32-bit IP address to a 48-bit physical MAC address on a local link."
  },
  {
    id: "cdsc-35",
    question: "In Class A IPv4 addressing, how many bits are allocated for the Network ID?",
    options: ["8 bits", "16 bits", "24 bits", "32 bits"],
    correct: 0,
    explanation: "Class A IP addresses use 8 bits for network ID and 24 bits for host IDs (format: N.H.H.H)."
  },
  {
    id: "cdsc-36",
    question: "Which type of firewall is specifically designed to inspect and protect HTTP/HTTPS application payloads?",
    options: ["Packet filtering firewall", "Stateful inspection firewall", "Web Application Firewall (WAF)", "Circuit-level gateway"],
    correct: 2,
    explanation: "A Web Application Firewall (WAF) inspects Layer 7 web traffic to prevent SQL injection, cross-site scripting (XSS), and CSRF attacks."
  },
  {
    id: "cdsc-37",
    question: "Under the Information and Communication Technology (ICT) Policy of Nepal, which policy was formally issued in 2072 BS?",
    options: ["ICT Policy 2057", "ICT Policy 2068", "ICT Policy 2072", "IT Policy 2078"],
    correct: 2,
    explanation: "The National ICT Policy of Nepal was promulgated in 2072 BS to foster digital governance and economic transformation."
  },
  {
    id: "cdsc-38",
    question: "Traditional Nepali font 'Preeti' is based on which character encoding format?",
    options: ["Unicode Standard", "Binary encoding", "Standard ASCII / Custom Font Glyph Map", "UTF-16"],
    correct: 2,
    explanation: "Preeti is a legacy 8-bit ASCII-based font where English key characters map to Nepali glyphs, unlike universal UTF-8 Nepali Unicode."
  },
  {
    id: "cdsc-39",
    question: "In MS Excel, what is the intersection of a row and a column called?",
    options: ["Grid", "Cell", "Block", "Table"],
    correct: 1,
    explanation: "A cell is the basic storage box formed by the intersection of a vertical column and a horizontal row in Excel."
  },
  {
    id: "cdsc-40",
    question: "What is the maximum number of characters allowed in a single MS Word document file name?",
    options: ["128", "255", "512", "1024"],
    correct: 1,
    explanation: "Standard Windows file systems and MS Word support up to 255 characters for a file name."
  },
  {
    id: "cdsc-41",
    question: "Which keyboard shortcut in MS Word creates a hanging indent?",
    options: ["Ctrl + T", "Ctrl + M", "Ctrl + H", "Ctrl + I"],
    correct: 0,
    explanation: "Ctrl + T creates a hanging indent where the second and subsequent lines of a paragraph are indented."
  },
  {
    id: "cdsc-42",
    question: "Which utility is used to defragment and consolidate fragmented files on a mechanical HDD?",
    options: ["Disk Cleanup", "Disk Defragmenter", "ScanDisk", "Chkdsk"],
    correct: 1,
    explanation: "Disk Defragmenter reorganizes fragmented data on a hard disk drive so files occupy contiguous storage sectors."
  },
  {
    id: "cdsc-43",
    question: "What is the decimal equivalent of the binary number (11010)₂?",
    options: ["24", "26", "28", "30"],
    correct: 1,
    explanation: "(11010)₂ = (1×16) + (1×8) + (0×4) + (1×2) + (0×1) = 16 + 8 + 2 = 26."
  },
  {
    id: "cdsc-44",
    question: "Which register holds the address of the next instruction to be fetched from memory?",
    options: ["Memory Address Register (MAR)", "Instruction Register (IR)", "Program Counter (PC)", "Accumulator (ACC)"],
    correct: 2,
    explanation: "The Program Counter (PC) stores the memory address of the next instruction in sequence to be executed."
  },
  {
    id: "cdsc-45",
    question: "In DBMS, a candidate key that is not selected as the primary key is called a:",
    options: ["Foreign Key", "Alternate Key", "Composite Key", "Super Key"],
    correct: 1,
    explanation: "Any candidate key not chosen to be the primary key of a relation is known as an Alternate Key."
  },
  {
    id: "cdsc-46",
    question: "What is the default port number used by Secure HyperText Transfer Protocol (HTTPS)?",
    options: ["21", "25", "80", "443"],
    correct: 3,
    explanation: "HTTPS communicates securely over TCP port 443 with TLS/SSL encryption, whereas plain HTTP uses port 80."
  },
  {
    id: "cdsc-47",
    question: "Which command in MS-DOS displays the directory tree structure of a disk drive?",
    options: ["DIR", "TREE", "PATH", "CHKDSK"],
    correct: 1,
    explanation: "The TREE command graphically displays the folder structure of a specified drive or path in DOS/Windows Command Prompt."
  },
  {
    id: "cdsc-48",
    question: "In cyber law, the Electronic Transaction Act (ETA) of Nepal was enacted in which Bikram Sambat year?",
    options: ["2058 BS", "2061 BS", "2063 BS", "2072 BS"],
    correct: 2,
    explanation: "The Electronic Transaction Act, 2063 (2008 AD) legally authenticates digital signatures and penalizes cyber crimes in Nepal."
  },
  {
    id: "cdsc-49",
    question: "Which of the following is an example of an asymmetric public-key cryptography algorithm?",
    options: ["AES (Advanced Encryption Standard)", "DES (Data Encryption Standard)", "RSA (Rivest-Shamir-Adleman)", "Blowfish"],
    correct: 2,
    explanation: "RSA is an asymmetric encryption algorithm that uses a pair of public and private keys for secure communication."
  },
  {
    id: "cdsc-50",
    question: "Which protocol is utilized by network administrators to automatically assign IP addresses to client workstations?",
    options: ["DNS", "DHCP (Dynamic Host Configuration Protocol)", "SNMP", "SMTP"],
    correct: 1,
    explanation: "DHCP dynamically allocates IP addresses, subnet masks, and default gateways to devices on a network."
  }
];

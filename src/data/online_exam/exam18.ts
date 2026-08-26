// src/data/online_exam/exam18.ts
import { Question } from "../questions";

export const exam18Questions: Question[] = [
  {
    id: "noc-1",
    question: "Which office application feature is used to send customized letters to multiple recipients simultaneously?",
    options: ["Mail Merge", "Macro", "Cross Reference", "Index & Tables"],
    correct: 0,
    explanation: "Mail Merge in MS Word merges a main document with a recipient data source to generate personalized mass letters."
  },
  {
    id: "noc-2",
    question: "In MS Excel, what is the keyboard shortcut to automatically insert the current system date?",
    options: ["Ctrl + ;", "Ctrl + Shift + ;", "Alt + Shift + D", "Ctrl + D"],
    correct: 0,
    explanation: "Ctrl + ; inserts the current static date, while Ctrl + Shift + ; inserts the current time."
  },
  {
    id: "noc-3",
    question: "Which chart type in MS Excel is best suited for showing proportional parts of a single whole data series?",
    options: ["Bar Chart", "Line Chart", "Pie Chart", "Scatter Plot"],
    correct: 2,
    explanation: "Pie charts visually represent proportional percentage shares summing to 100%."
  },
  {
    id: "noc-4",
    question: "What is the function of an Uninterruptible Power Supply (UPS) in a computer laboratory or server room?",
    options: ["Cooling the CPU", "Providing instant battery backup during power outages and surge protection", "Increasing internet speed", "Scanning for viruses"],
    correct: 1,
    explanation: "A UPS supplies emergency backup electrical power and protects sensitive hardware from voltage spikes and blackouts."
  },
  {
    id: "noc-5",
    question: "In relational databases, which constraint guarantees that no duplicate values can be entered into a column?",
    options: ["NOT NULL", "UNIQUE", "CHECK", "DEFAULT"],
    correct: 1,
    explanation: "The UNIQUE constraint ensures all values in a column or group of columns are distinct across the table."
  },
  {
    id: "noc-6",
    question: "Which of the following is an example of an open-source relational database management system?",
    options: ["Oracle Database", "Microsoft SQL Server", "PostgreSQL", "IBM DB2"],
    correct: 2,
    explanation: "PostgreSQL and MySQL are powerful, open-source object-relational database management systems."
  },
  {
    id: "noc-7",
    question: "Which key combination switches between open applications in Microsoft Windows?",
    options: ["Alt + Tab", "Ctrl + Tab", "Shift + Tab", "Windows + Tab"],
    correct: 0,
    explanation: "Alt + Tab switches between active application windows quickly."
  },
  {
    id: "noc-8",
    question: "Which type of optical storage medium has the largest single-layer standard storage capacity?",
    options: ["CD-ROM (700 MB)", "DVD-ROM (4.7 GB)", "Blu-ray Disc (25 GB)", "Floppy Disk (1.44 MB)"],
    correct: 2,
    explanation: "A standard single-layer Blu-ray Disc holds 25 GB using a 405nm blue-violet laser."
  },
  {
    id: "noc-9",
    question: "What is the primary role of the DNS (Domain Name System) on the Internet?",
    options: ["Encrypting email communications", "Translating human-readable domain names (e.g. psc.gov.np) into IP addresses", "Allocating RAM to processes", "Routing physical cables"],
    correct: 1,
    explanation: "DNS acts as the phonebook of the Internet, resolving domain names into numerical IP addresses."
  },
  {
    id: "noc-10",
    question: "In MS PowerPoint, which view is specifically designed to rearrange and reorder slides easily?",
    options: ["Slide Show View", "Slide Sorter View", "Reading View", "Notes Page View"],
    correct: 1,
    explanation: "Slide Sorter view presents thumbnail representations of all slides, making reordering and transition setup effortless."
  },
  {
    id: "noc-11",
    question: "Which network device operates at the Data Link Layer (Layer 2) and forwards frames based on MAC addresses?",
    options: ["Hub", "Switch", "Router", "Repeater"],
    correct: 1,
    explanation: "A Layer 2 Switch maintains a MAC address table to forward incoming frames directly to the intended destination port."
  },
  {
    id: "noc-12",
    question: "What is the full form of RAID in computer storage architecture?",
    options: ["Redundant Array of Independent Disks", "Rapid Access Integrated Drive", "Random Array of Internal Disks", "Realtime Automated Interface Drive"],
    correct: 0,
    explanation: "RAID combines multiple physical disk drive components into one logical unit for data redundancy and performance improvement."
  },
  {
    id: "noc-13",
    question: "Which command in Windows Command Prompt tests network connectivity and round-trip latency to a remote server?",
    options: ["ipconfig", "ping", "tracert", "netstat"],
    correct: 1,
    explanation: "The ping command sends ICMP Echo Request packets to test remote host reachability and round-trip time."
  },
  {
    id: "noc-14",
    question: "In MS Word, which feature automatically corrects commonly misspelled words as you type?",
    options: ["AutoCorrect", "AutoText", "Spell Check", "WordArt"],
    correct: 0,
    explanation: "AutoCorrect automatically fixes typos, grammatical errors, and capitalization issues in real time."
  },
  {
    id: "noc-15",
    question: "What is the decimal value of the hexadecimal number (2F)₁₆?",
    options: ["45", "47", "49", "51"],
    correct: 1,
    explanation: "(2F)₁₆ = (2 × 16) + (15 × 1) = 32 + 15 = 47."
  },
  {
    id: "noc-16",
    question: "Which software distribution license allows users to view, modify, and redistribute the original source code freely?",
    options: ["Freeware", "Shareware", "Open Source Software (GPL/MIT)", "Proprietary Commercial"],
    correct: 2,
    explanation: "Open Source Software gives users the freedom to inspect, alter, and enhance the underlying source code."
  },
  {
    id: "noc-17",
    question: "In MS Excel, what is the error code displayed when a formula divides a number by zero?",
    options: ["#N/A", "#VALUE!", "#DIV/0!", "#NAME?"],
    correct: 2,
    explanation: "#DIV/0! occurs when a formula attempts division by zero or by an empty cell."
  },
  {
    id: "noc-18",
    question: "Which protocol is standard for sending outgoing emails across the Internet?",
    options: ["POP3", "IMAP", "SMTP (Simple Mail Transfer Protocol)", "SNMP"],
    correct: 2,
    explanation: "SMTP (port 25 / 587) is the push protocol used to send outgoing email messages."
  },
  {
    id: "noc-19",
    question: "In cybersecurity, what is Two-Factor Authentication (2FA)?",
    options: ["Using two different passwords", "Requiring two separate verification credentials (e.g. password + OTP code)", "Logging in from two computers", "Creating two user accounts"],
    correct: 1,
    explanation: "2FA adds an extra layer of security requiring two distinct authentication factors (something you know + something you have)."
  },
  {
    id: "noc-20",
    question: "What is the function of the CMOS battery on a computer motherboard?",
    options: ["Powers the CPU cooling fan", "Maintains system time, date, and BIOS firmware settings when main power is off", "Boosts RAM capacity", "Protects monitor against glare"],
    correct: 1,
    explanation: "The CMOS battery powers the real-time clock (RTC) and CMOS memory holding BIOS configuration settings."
  },
  {
    id: "noc-21",
    question: "Which SQL clause is used to sort query result sets in descending order?",
    options: ["SORT BY DESC", "ORDER BY column DESC", "GROUP BY DESC", "ARRANGE DESC"],
    correct: 1,
    explanation: "ORDER BY column_name DESC sorts the returned records in descending alphabetical or numerical order."
  },
  {
    id: "noc-22",
    question: "Which of the following is a Classless Inter-Domain Routing (CIDR) notation for a subnet with 256 total IP addresses?",
    options: ["/8", "/16", "/24", "/30"],
    correct: 2,
    explanation: "/24 provides 32 - 24 = 8 host bits, which equals 2^8 = 256 total addresses (254 usable hosts)."
  },
  {
    id: "noc-23",
    question: "In MS Word, which shortcut key centers the selected paragraph?",
    options: ["Ctrl + C", "Ctrl + E", "Ctrl + J", "Ctrl + R"],
    correct: 1,
    explanation: "Ctrl + E aligns text to the center (Ctrl + L is left, Ctrl + R is right, Ctrl + J is justify)."
  },
  {
    id: "noc-24",
    question: "Which type of malware disguises itself as legitimate software to trick users into installing it?",
    options: ["Trojan Horse", "Spyware", "Ransomware", "Adware"],
    correct: 0,
    explanation: "A Trojan Horse masquerades as a benign utility or game to deliver malicious payloads inside the system."
  },
  {
    id: "noc-25",
    question: "In Nepal, which governmental department is primarily tasked with formulating e-Governance and IT standards?",
    options: ["Department of Information Technology (DoIT)", "Nepal Telecom", "Nepal Rastra Bank", "Public Service Commission"],
    correct: 0,
    explanation: "The Department of Information Technology (DoIT) under MoCIT oversees national IT policies and e-governance implementation."
  },
  {
    id: "noc-26",
    question: "What is the main advantage of Solid State Drives (SSD) over traditional Hard Disk Drives (HDD)?",
    options: ["Higher storage capacity per dollar", "Significantly faster read/write access speeds and no moving mechanical parts", "Magnetic recording capability", "Requires manual defragmentation"],
    correct: 1,
    explanation: "SSDs utilize NAND flash memory chips, providing ultra-low latency, fast throughput, and high shock resistance."
  },
  {
    id: "noc-27",
    question: "In MS Excel, which symbol is mandatory at the beginning of every mathematical formula?",
    options: ["#", "=", "@", "+"],
    correct: 1,
    explanation: "Every Excel formula must start with an equals sign (=) so Excel recognizes it as an executable calculation."
  },
  {
    id: "noc-28",
    question: "Which network topology requires a terminating resistor at both ends of the main backbone cable?",
    options: ["Bus Topology", "Star Topology", "Ring Topology", "Tree Topology"],
    correct: 0,
    explanation: "Linear Bus topology requires 50-ohm terminators at both ends of the coaxial cable to absorb signals and prevent reflection."
  },
  {
    id: "noc-29",
    question: "In database design, the Foreign Key in a child table references which key in the parent table?",
    options: ["Primary Key or Unique Key", "Candidate Key only", "Secondary Index", "Surrogate Key only"],
    correct: 0,
    explanation: "A foreign key establishes referential integrity by pointing to the Primary Key (or Unique key) of the referenced table."
  },
  {
    id: "noc-30",
    question: "Which of the following describes Cloud Computing Software as a Service (SaaS)?",
    options: ["Delivering complete on-demand applications over the web (e.g. Gmail, Microsoft 365)", "Renting raw virtual servers", "Providing database management engines only", "Selling physical fiber optics"],
    correct: 0,
    explanation: "SaaS provides ready-to-use software applications accessible via web browsers without requiring local installation."
  },
  {
    id: "noc-31",
    question: "What is the purpose of the 'Freeze Panes' feature in Microsoft Excel?",
    options: ["Locks cells from being edited", "Keeps header rows and columns visible while scrolling through large sheets", "Encrypts the workbook", "Freezes computer screen"],
    correct: 1,
    explanation: "Freeze Panes locks specified rows or columns in place so they remain visible when navigating large datasets."
  },
  {
    id: "noc-32",
    question: "Which transmission medium transmits data signals as pulses of light through thin glass strands?",
    options: ["Unshielded Twisted Pair (UTP)", "Shielded Twisted Pair (STP)", "Coaxial Cable", "Fiber Optic Cable"],
    correct: 3,
    explanation: "Fiber optic cables carry optical signals with immense bandwidth, low attenuation, and immunity to electromagnetic interference."
  },
  {
    id: "noc-33",
    question: "What is the function of the BIOS (Basic Input/Output System) during computer startup (boot)?",
    options: ["Executes POST (Power-On Self-Test) and loads the OS bootstrap loader into RAM", "Deletes temporary cookies", "Renders desktop wallpaper", "Monitors internet connection"],
    correct: 0,
    explanation: "BIOS tests hardware components during POST, initializes hardware parameters, and hands control over to the OS bootloader."
  },
  {
    id: "noc-34",
    question: "In MS Access, which field data type is best suited for storing monetary prices and salaries?",
    options: ["Number", "Text", "Currency", "AutoNumber"],
    correct: 2,
    explanation: "The Currency data type stores financial figures with fixed-point accuracy to eliminate floating-point rounding errors."
  },
  {
    id: "noc-35",
    question: "Which protocol is used to transfer files securely between a local computer and a remote web server over SSH?",
    options: ["FTP", "SFTP (SSH File Transfer Protocol)", "HTTP", "Telnet"],
    correct: 1,
    explanation: "SFTP operates over an encrypted SSH channel to secure file transfers and credential authentication."
  },
  {
    id: "noc-36",
    question: "What is the shortcut key in Windows to lock your workstation screen immediately?",
    options: ["Windows Key + L", "Ctrl + Alt + L", "Alt + L", "Windows Key + D"],
    correct: 0,
    explanation: "Windows Key + L locks the active user session immediately without closing open applications."
  },
  {
    id: "noc-37",
    question: "Which of the following is an example of an input device that reads hand-drawn pencil marks on examination sheets?",
    options: ["Optical Character Reader (OCR)", "Optical Mark Reader (OMR)", "Magnetic Ink Character Reader (MICR)", "Barcode Scanner"],
    correct: 1,
    explanation: "OMR technology detects presence or absence of marks on pre-printed paper forms (commonly used in Loksewa exams)."
  },
  {
    id: "noc-38",
    question: "In MS Word, what does the shortcut key 'Ctrl + Shift + >' do?",
    options: ["Decreases font size", "Increases font size", "Changes font color", "Inserts arrow symbol"],
    correct: 1,
    explanation: "Ctrl + Shift + > increases the selected text's font size to the next point on the font menu."
  },
  {
    id: "noc-39",
    question: "Which IP address range is reserved for private Local Area Networks (LAN) under Class C?",
    options: ["10.0.0.0 – 10.255.255.255", "172.16.0.0 – 172.31.255.255", "192.168.0.0 – 192.168.255.255", "127.0.0.0 – 127.255.255.255"],
    correct: 2,
    explanation: "192.168.0.0/16 is the standard RFC 1918 Class C private address space utilized in home and office routers."
  },
  {
    id: "noc-40",
    question: "What does the 'GOTO' statement do in high-level programming languages?",
    options: ["Defines a function", "Unconditionally transfers program control to a labeled statement", "Terminates the program", "Allocates memory"],
    correct: 1,
    explanation: "GOTO performs an unconditional jump to a specified label within the current function."
  },
  {
    id: "noc-41",
    question: "Which component coordinates bus arbitration and communication between CPU, RAM, and high-speed PCIe graphics cards?",
    options: ["Northbridge / Memory Controller Hub", "Southbridge / PCH", "CMOS", "BIOS ROM"],
    correct: 0,
    explanation: "The Northbridge (or integrated CPU memory controller) manages high-speed traffic between the CPU, system RAM, and PCIe bus."
  },
  {
    id: "noc-42",
    question: "In MS PowerPoint, which key starts the presentation slide show from the very first slide?",
    options: ["F2", "F5", "Shift + F5", "F7"],
    correct: 1,
    explanation: "F5 begins the slideshow from slide 1, whereas Shift + F5 starts the show from the currently active slide."
  },
  {
    id: "noc-43",
    question: "Which cybersecurity practice involves verifying that data has not been altered or tampered with in transit?",
    options: ["Confidentiality", "Data Integrity", "Availability", "Non-repudiation"],
    correct: 1,
    explanation: "Data Integrity ensures that information remains accurate, authentic, and unmodified during transmission and storage."
  },
  {
    id: "noc-44",
    question: "What is the maximum addressable RAM on a 32-bit operating system without physical address extension?",
    options: ["2 GB", "4 GB", "8 GB", "16 GB"],
    correct: 1,
    explanation: "A 32-bit address bus can address 2^32 bytes = 4,294,967,296 bytes = 4 GB of memory."
  },
  {
    id: "noc-45",
    question: "In MS Excel, which function counts cells containing numbers within a range?",
    options: ["=COUNT()", "=COUNTA()", "=COUNTBLANK()", "=COUNTIF()"],
    correct: 0,
    explanation: "=COUNT() counts cells with numeric values only, while =COUNTA() counts all non-empty cells."
  },
  {
    id: "noc-46",
    question: "Which layer of the TCP/IP model corresponds to both Layer 1 and Layer 2 of the OSI reference model?",
    options: ["Application Layer", "Transport Layer", "Network Access / Link Layer", "Internet Layer"],
    correct: 2,
    explanation: "The Network Access (Link) layer in TCP/IP encompasses the Physical and Data Link layers of the OSI model."
  },
  {
    id: "noc-47",
    question: "What is a 'Macro' in Microsoft Office applications?",
    options: ["A computer virus", "A recorded series of commands and keystrokes in VBA to automate repetitive tasks", "A font style", "A document template"],
    correct: 1,
    explanation: "A Macro records actions and executes Visual Basic for Applications (VBA) code to automate routine procedures."
  },
  {
    id: "noc-48",
    question: "Which utility in Windows checks system disk health and fixes file system errors?",
    options: ["CHKDSK", "DEFRAG", "MSCONFIG", "TASKMGR"],
    correct: 0,
    explanation: "CHKDSK (Check Disk) verifies file system integrity and scans storage volumes for bad sectors."
  },
  {
    id: "noc-49",
    question: "Under the Electronic Transaction Act (ETA) 2063 of Nepal, who is appointed by the Government to supervise and register Certifying Authorities (CA)?",
    options: ["Controller of Certifying Authorities", "Attorney General", "IT Minister", "Governor of NRB"],
    correct: 0,
    explanation: "The Controller is appointed under Section 13 of the ETA 2063 to license and regulate digital signature Certifying Authorities in Nepal."
  },
  {
    id: "noc-50",
    question: "What is the primary function of a Default Gateway in a local computer's network configuration?",
    options: ["Resolves domain names", "Acts as the exit router interface to forward packets outside the local subnet", "Supplies power to Ethernet switches", "Blocks incoming spam emails"],
    correct: 1,
    explanation: "The Default Gateway is the routing node that device packets must pass through to reach hosts on outside networks or the Internet."
  }
];

// src/data/typingTexts.ts

export interface TypingItem {
  id: number;
  title: string;
  category: "english" | "nepali" | "code" | "exam";
  difficulty: "easy" | "medium" | "hard";
  text: string;
}

export const englishTypingData: TypingItem[] = [
  { id: 1, title: "Quick Fox Classic", category: "english", difficulty: "easy", text: "The quick brown fox jumps over the lazy dog near the river bank." },
  { id: 2, title: "Computer Operator Role", category: "english", difficulty: "easy", text: "Computer operators must type accurately and quickly for government competitive examinations." },
  { id: 3, title: "Nepal Geography", category: "english", difficulty: "easy", text: "Nepal is a beautiful mountainous country located between India and China in South Asia." },
  { id: 4, title: "Information Revolution", category: "english", difficulty: "easy", text: "Information technology has transformed the way we work, communicate, and collaborate every day." },
  { id: 5, title: "Public Service Commission", category: "english", difficulty: "easy", text: "The Public Service Commission conducts fair examinations for selecting civil service candidates." },
  { id: 6, title: "Database Systems", category: "english", difficulty: "easy", text: "Database management systems help organize, store, index, and retrieve data efficiently." },
  { id: 7, title: "Cybersecurity Basics", category: "english", difficulty: "easy", text: "Cybersecurity is essential to protect digital assets and national databases from malicious attacks." },
  { id: 8, title: "Operating System Functions", category: "english", difficulty: "easy", text: "Operating systems manage computer hardware, memory allocations, and software resources effectively." },
  { id: 9, title: "Central Processing Unit", category: "english", difficulty: "medium", text: "The Central Processing Unit is the primary brain of the computer that executes software instructions." },
  { id: 10, title: "Random Access Memory", category: "english", difficulty: "medium", text: "Random access memory provides fast read and write access to store active application programs temporarily." },
  { id: 11, title: "Cloud Computing", category: "english", difficulty: "medium", text: "Cloud computing enables on-demand network access to a shared pool of configurable computing resources." },
  { id: 12, title: "Software Development Life Cycle", category: "english", difficulty: "medium", text: "The software development life cycle consists of planning, analysis, design, implementation, and testing." },
  { id: 13, title: "Computer Networks", category: "english", difficulty: "medium", text: "A computer network is a set of interconnected computers sharing files, resources, and peripherals." },
  { id: 14, title: "Spreadsheet Analytics", category: "english", difficulty: "medium", text: "Spreadsheet formulas and pivot tables allow data analysts to summarize complex financial information." },
  { id: 15, title: "Word Processing Efficiency", category: "english", difficulty: "medium", text: "Effective word processing requires mastery over layout formatting, styles, mail merge, and keyboard shortcuts." },
  { id: 16, title: "Local Area Network", category: "english", difficulty: "medium", text: "Local Area Networks connect computers within a limited geographical area such as a school or office." },
  { id: 17, title: "Electronic Governance", category: "english", difficulty: "medium", text: "Electronic governance uses information technology to deliver government services to citizens efficiently." },
  { id: 18, title: "Artificial Intelligence", category: "english", difficulty: "medium", text: "Artificial intelligence simulates human intelligence processes through machine learning and neural networks." },
  { id: 19, title: "Digital Signature Authority", category: "english", difficulty: "medium", text: "A digital signature guarantees the authenticity, integrity, and non-repudiation of electronic documents." },
  { id: 20, title: "Data Communication Protocols", category: "english", difficulty: "medium", text: "Transmission Control Protocol ensures reliable, ordered, and error-checked delivery of data packets." },
  { id: 21, title: "Open Source Revolution", category: "english", difficulty: "medium", text: "Open source software allows developers across the globe to inspect, modify, and enhance source code freely." },
  { id: 22, title: "Optical Storage Technology", category: "english", difficulty: "medium", text: "Optical discs use laser beams to read and write digital bits from reflective surface tracks." },
  { id: 23, title: "Computer Virus Prevention", category: "english", difficulty: "medium", text: "Antivirus utilities scan memory and storage drives regularly to neutralize malware before infection." },
  { id: 24, title: "Input and Output Peripherals", category: "english", difficulty: "medium", text: "Keyboards, scanners, and mice serve as primary input peripherals while monitors and printers produce output." },
  { id: 25, title: "Cache Memory Architecture", category: "english", difficulty: "hard", text: "Cache memory operates at extremely high clock speeds to bridge the speed disparity between CPU and main memory." },
  { id: 26, title: "Relational Database Normalization", category: "english", difficulty: "hard", text: "Normalization decomposes redundant tables into structured relations to eliminate insertion, update, and deletion anomalies." },
  { id: 27, title: "Firewall Security Layers", category: "english", difficulty: "hard", text: "Next-generation firewalls inspect packet headers, state tables, and application-layer payloads to prevent intrusions." },
  { id: 28, title: "Virtual Private Networks", category: "english", difficulty: "hard", text: "Virtual Private Networks encrypt internet traffic through secure tunnels to protect privacy on public networks." },
  { id: 29, title: "Microprocessor Evolution", category: "english", difficulty: "hard", text: "From the early Intel 4004 to modern multi-core processors, semiconductor advancements have revolutionized digital computation." },
  { id: 30, title: "System Administration Duty", category: "english", difficulty: "hard", text: "System administrators must maintain server uptime, configure user permissions, perform routine backups, and patch vulnerabilities." },
  { id: 31, title: "Internet Protocol Version Six", category: "english", difficulty: "hard", text: "IPv6 uses 128-bit hexadecimal addressing to provide an astronomical number of unique network endpoints worldwide." },
  { id: 32, title: "Electronic Transactions Act", category: "english", difficulty: "hard", text: "The legal framework for electronic transactions criminalizes unauthorized access, data alteration, and cyber fraud." },
  { id: 33, title: "Subnetting and Routing", category: "english", difficulty: "hard", text: "Subnetting divides large network address blocks into smaller subnets to conserve IP addresses and optimize traffic." },
  { id: 34, title: "Object-Oriented Design", category: "english", difficulty: "hard", text: "Object-oriented programming bundles state and behaviors into modular classes using encapsulation, inheritance, and polymorphism." },
  { id: 35, title: "Client-Server Architecture", category: "english", difficulty: "hard", text: "Client workstations send requests over network sockets to central servers which process data and return responses." },
  { id: 36, title: "Solid State Drive Reliability", category: "english", difficulty: "hard", text: "NAND flash drives utilize wear-leveling algorithms and TRIM commands to maintain high throughput and endurance." },
  { id: 37, title: "Office Automation Tools", category: "english", difficulty: "medium", text: "Modern offices rely on integrated productivity suites to prepare reports, crunch numerical tables, and design slides." },
  { id: 38, title: "Nepal IT Horizon", category: "english", difficulty: "medium", text: "The IT sector in Nepal offers tremendous opportunities for software export, freelancing, and digital transformation." },
  { id: 39, title: "Algorithm Efficiency", category: "english", difficulty: "hard", text: "Algorithm efficiency is evaluated through asymptotic notation representing worst-case, average-case, and best-case time complexity." },
  { id: 40, title: "Data Integrity Protocols", category: "english", difficulty: "hard", text: "Cryptographic hash functions produce fixed-length digests to detect any accidental or deliberate modification of stored files." },
  { id: 41, title: "Administrative Letter Drafting", category: "english", difficulty: "medium", text: "Official correspondence must be concise, grammatically correct, and formatted according to established civil service conventions." },
  { id: 42, title: "Hardware Troubleshooting", category: "english", difficulty: "medium", text: "Systematic troubleshooting begins with verifying power connections, listening to motherboard beep codes, and testing RAM modules." },
  { id: 43, title: "Typing Mastery Standard", category: "english", difficulty: "medium", text: "Consistent touch typing practice trains muscle memory, enabling operators to type above forty words per minute effortlessly." },
  { id: 44, title: "Digital Nepal Framework", category: "english", difficulty: "hard", text: "The Digital Nepal Framework identifies digital foundation, agriculture, health, education, energy, tourism, and finance initiatives." },
  { id: 45, title: "Backup and Disaster Recovery", category: "english", difficulty: "hard", text: "Implementing offsite automated backups ensures that critical administrative records can be restored after system catastrophes." },
  { id: 46, title: "Operating System Kernel", category: "english", difficulty: "hard", text: "The kernel resides in protected memory space to manage CPU interrupts, device drivers, and context switching between tasks." },
  { id: 47, title: "Public Record Management", category: "english", difficulty: "medium", text: "Digitizing paper archives into searchable PDF documents accelerates public inquiry resolution and archival preservation." },
  { id: 48, title: "Software Version Control", category: "english", difficulty: "medium", text: "Distributed version control systems track every line of code change, facilitating team collaboration and rollback capabilities." },
  { id: 49, title: "Ergonomics and Posture", category: "english", difficulty: "easy", text: "Proper chair height, wrist support, and eye-level screen positioning prevent fatigue during long typing sessions." },
  { id: 50, title: "Speed and Accuracy Challenge", category: "english", difficulty: "hard", text: "Excellence in data entry demands unwavering focus to eliminate typographical errors while maintaining brisk keyboard rhythm." },
];

export const nepaliTypingData: TypingItem[] = [
  { id: 101, title: "नेपाल परिचय", category: "nepali", difficulty: "easy", text: "नेपाल एक सुन्दर शान्त र प्राकृतिक स्रोतले सम्पन्न देश हो जुन दक्षिण एसियामा अवस्थित छ।" },
  { id: 102, title: "लोकसेवा आयोग", category: "nepali", difficulty: "easy", text: "लोकसेवा आयोगले निजामती सेवाका विभिन्न पदहरूको लागि निष्पक्ष प्रतियोगितात्मक परीक्षा सञ्चालन गर्दछ।" },
  { id: 103, title: "कम्प्युटरको महत्त्व", category: "nepali", difficulty: "easy", text: "कम्प्युटरले हाम्रो दैनिक जीवन कार्यालय व्यवस्थापन र सार्वजनिक सेवा प्रवाहलाई धेरै सहज र प्रभावकारी बनाएको छ।" },
  { id: 104, title: "सूचना प्रविधि विकास", category: "nepali", difficulty: "easy", text: "सूचना तथा सञ्चार प्रविधिको तीव्र विकासले नेपालको सार्वजनिक प्रशासन र सुशासन प्रणालीमा ठूलो सुधार ल्याएको छ।" },
  { id: 105, title: "सुशासनको अवधारणा", category: "nepali", difficulty: "easy", text: "सुशासन भनेको पारदर्शी जवाफदेही जनमुखी र भ्रष्टाचारमुक्त सरकारी व्यवस्थापनको समष्टिगत रूप हो।" },
  { id: 106, title: "नागरिक बडापत्र", category: "nepali", difficulty: "medium", text: "प्रत्येक सरकारी कार्यालयले नागरिकलाई दिइने सेवा दस्तुर र लाग्ने समय स्पष्ट उल्लेख गरी नागरिक बडापत्र राख्नुपर्दछ।" },
  { id: 107, title: "विद्युतीय कारोबार ऐन", category: "nepali", difficulty: "medium", text: "विद्युतीय कारोबार ऐन २०६३ ले डिजिटल हस्ताक्षरलाई कानुनी मान्यता दिई साइबर अपराध नियन्त्रणमा सहयोग पुर्याएको छ।" },
  { id: 108, title: "नेपालको संविधान", category: "nepali", difficulty: "medium", text: "नेपालको संविधानले सम्पूर्ण नागरिकहरूलाई समानता स्वतन्त्रता र मौलिक हकको प्रत्याभूति गरेको छ।" },
  { id: 109, title: "कम्प्युटर अपरेटर दायित्व", category: "nepali", difficulty: "medium", text: "कम्प्युटर अपरेटरले सरकारी तथ्याङ्क सुरक्षित राख्ने द्रुत गतिमा टाइप गर्ने र सफ्टवेयर सञ्चालन गर्ने जिम्मेवारी बहन गर्दछ।" },
  { id: 110, title: "डिजिटल नेपाल फ्रेमवर्क", category: "nepali", difficulty: "medium", text: "डिजिटल नेपाल फ्रेमवर्कले कृषि शिक्षा स्वास्थ्य पर्यटन र ऊर्जा क्षेत्रमा सूचना प्रविधिको अधिकतम उपयोग गर्ने लक्ष्य लिएको छ।" },
  { id: 111, title: "कार्यालय सञ्चालन", category: "nepali", difficulty: "medium", text: "कार्यालयमा चिठीपत्र दर्ता चलानी टिप्पणी लेखन र फाइल व्यवस्थापन नियमित रूपमा गर्नुपर्ने आधारभूत कार्यहरू हुन्।" },
  { id: 112, title: "इन्टरनेट र सञ्चार", category: "nepali", difficulty: "medium", text: "इन्टरनेटको माध्यमबाट संसारभरका सूचनाहरू केही सेकेन्डमै आदानप्रदान गर्न सकिने भएको छ।" },
  { id: 113, title: "सार्वजनिक खरिद ऐन", category: "nepali", difficulty: "medium", text: "सार्वजनिक खरिद ऐन २०६३ ले सरकारी खरिद प्रक्रियामा प्रतिस्पर्धा पारदर्शिता र मितव्ययिता कायम गर्न मद्दत गर्दछ।" },
  { id: 114, title: "सूचनाको हक", category: "nepali", difficulty: "medium", text: "सूचनाको हक सम्बन्धी ऐन २०६४ ले सार्वजनिक निकायमा रहेका सूचना माग्ने र पाउने अधिकार प्रत्येक नागरिकलाई दिएको छ।" },
  { id: 115, title: "डाटा सुरक्षा र ब्याकअप", category: "nepali", difficulty: "hard", text: "महत्वपूर्ण सरकारी अभिलेख नष्ट हुनबाट जोगाउन नियमित अन्तरालमा बाह्य हार्डडिस्क र क्लाउडमा सुरक्षित ब्याकअप लिनुपर्दछ।" },
  { id: 116, title: "साइबर सुरक्षा चुनौती", category: "nepali", difficulty: "hard", text: "अनाधिकृत पहुँच भाइरस आक्रमण र फिसिङबाट बच्नका लागि बलियो पासवर्ड र फायरवालको प्रयोग अनिवार्य मानिन्छ।" },
  { id: 117, title: "विद्युतीय शासन अभ्यास", category: "nepali", difficulty: "hard", text: "नागरिक एप र सरकारी पोर्टलहरूको विस्तारले सरकारी कार्यालयमा लाइन बस्नुपर्ने झन्झटलाई धेरै हदसम्म कम गरेको छ।" },
  { id: 118, title: "सफ्टवेयर विकास प्रणाली", category: "nepali", difficulty: "hard", text: "कुनै पनि नयाँ सफ्टवेयर बनाउँदा आवश्यकता विश्लेषण डिजाइन कोडिङ परीक्षण र मर्मतसम्भारको चरण पार गर्नुपर्दछ।" },
  { id: 119, title: "निजामती सेवा मूल्य", category: "nepali", difficulty: "hard", text: "निजामती कर्मचारीले निष्पक्षता व्यावसायिकता इमान्दारी र उच्च नैतिक आचरण प्रदर्शन गरी राष्ट्रसेवा गर्नुपर्दछ।" },
  { id: 120, title: "टाइपिङ दक्षता परीक्षा", category: "nepali", difficulty: "hard", text: "कम्प्युटर अपरेटर पदको प्रयोगात्मक परीक्षामा नेपाली युनिकोड तथा प्रिती फन्टमा शुद्ध र तीव्र टाइपिङ क्षमता परीक्षण गरिन्छ।" },
  { id: 121, title: "पर्यावरण र प्रविधि", category: "nepali", difficulty: "medium", text: "कागजको प्रयोग घटाएर डिजिटल माध्यम अपनाउनाले वनजङ्गल संरक्षण र वातावरण सन्तुलनमा सकारात्मक योगदान पुग्छ।" },
  { id: 122, title: "स्थानिय तह प्रविधि", category: "nepali", difficulty: "medium", text: "नेपालका स्थानीय तहहरूले घटना दर्ता राजस्व संकलन र सिफारिस पत्रहरू अनलाइन प्रणालीबाट वितरण गर्न थालेका छन्।" },
  { id: 123, title: "मेमोरी र प्रोसेसिङ", category: "nepali", difficulty: "hard", text: "सेन्ट्रल प्रोसेसिङ युनिटले दिएको निर्देशन अनुसार तथ्याङ्क प्रशोधन गरी मनिटर वा प्रिन्टरमार्फत नतिजा देखाउँछ।" },
  { id: 124, title: "नेटवर्क टपोलोजी", category: "nepali", difficulty: "hard", text: "स्टार टपोलोजीमा केन्द्रीय हब वा स्विचको सहायताले सबै कम्प्युटरहरूलाई एक आपसमा जोडेर सञ्चार गराइन्छ।" },
  { id: 125, title: "अन्तिम परीक्षा अभ्यास", category: "nepali", difficulty: "hard", text: "दैनिक अभ्यास र शुद्धतामा ध्यान दिएर टाइपिङ गर्दा लोकसेवाको प्रयोगात्मक परीक्षामा उत्कृष्ट अंक हासिल गर्न सकिन्छ।" }
];

export const codeTypingData: TypingItem[] = [
  {
    id: 201,
    title: "C: Hello World",
    category: "code",
    difficulty: "easy",
    text: `#include <stdio.h>

int main() {
    printf("Hello, Loksewa Computer Operator!\\n");
    return 0;
}`
  },
  {
    id: 202,
    title: "C: For Loop Array Sum",
    category: "code",
    difficulty: "medium",
    text: `int sum = 0;
for (int i = 0; i < 10; i++) {
    sum += arr[i];
}
printf("Total Sum = %d\\n", sum);`
  },
  {
    id: 203,
    title: "SQL: Select Query",
    category: "code",
    difficulty: "easy",
    text: `SELECT user_id, full_name, email 
FROM exam_attempts 
WHERE score >= 60 
ORDER BY score DESC;`
  },
  {
    id: 204,
    title: "HTML: Semantic Card",
    category: "code",
    difficulty: "easy",
    text: `<div class="card p-4 rounded-xl shadow">
    <h2 class="text-xl font-bold">Loksewa Exam</h2>
    <p>Prepare for Computer Operator.</p>
</div>`
  },
  {
    id: 205,
    title: "JavaScript: Arrow Function",
    category: "code",
    difficulty: "easy",
    text: `const calculateMarks = (correct, wrong) => {
    const penalty = wrong * 0.4;
    return (correct * 2) - penalty;
};`
  },
  {
    id: 206,
    title: "C: Swap Two Numbers with Pointers",
    category: "code",
    difficulty: "medium",
    text: `void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}`
  },
  {
    id: 207,
    title: "SQL: Create Table Constraints",
    category: "code",
    difficulty: "medium",
    text: `CREATE TABLE students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    score DECIMAL(5,2) DEFAULT 0.00
);`
  },
  {
    id: 208,
    title: "Python: Factorial Recursion",
    category: "code",
    difficulty: "medium",
    text: `def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)`
  },
  {
    id: 209,
    title: "C: Linear Search Algorithm",
    category: "code",
    difficulty: "medium",
    text: `int search(int arr[], int n, int key) {
    for (int i = 0; i < n; i++) {
        if (arr[i] == key) return i;
    }
    return -1;
}`
  },
  {
    id: 210,
    title: "CSS: Flexbox Centering",
    category: "code",
    difficulty: "easy",
    text: `.container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}`
  },
  {
    id: 211,
    title: "JavaScript: Map and Filter",
    category: "code",
    difficulty: "medium",
    text: `const passed = scores
    .filter(s => s.percentage >= 40)
    .map(s => ({ ...s, status: "Pass" }));`
  },
  {
    id: 212,
    title: "C: Dynamic Memory Allocation",
    category: "code",
    difficulty: "hard",
    text: `int *ptr = (int*) malloc(n * sizeof(int));
if (ptr == NULL) {
    printf("Memory Allocation Failed\\n");
    exit(1);
}
free(ptr);`
  },
  {
    id: 213,
    title: "SQL: Inner Join with Group By",
    category: "code",
    difficulty: "hard",
    text: `SELECT d.dept_name, COUNT(e.id) AS total_emp
FROM departments d
INNER JOIN employees e ON d.id = e.dept_id
GROUP BY d.dept_name
HAVING COUNT(e.id) > 5;`
  },
  {
    id: 214,
    title: "C++: Simple Class and Object",
    category: "code",
    difficulty: "medium",
    text: `class Rectangle {
public:
    int width, height;
    int getArea() { return width * height; }
};`
  },
  {
    id: 215,
    title: "JavaScript: Async Await Fetch",
    category: "code",
    difficulty: "hard",
    text: `async function loadData(url) {
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    } catch (err) {
        console.error(err);
    }
}`
  }
];

export const examParagraphsData: TypingItem[] = [
  {
    id: 301,
    title: "Loksewa Exam Set 1 (Standard 5-Min Test)",
    category: "exam",
    difficulty: "hard",
    text: "The Civil Service in Nepal plays a pivotal role in policy implementation, public service delivery, and national development. As digital governance expands, computer operators must maintain absolute accuracy when drafting administrative memos, maintaining official websites, and processing citizen records. Mastery of keyboard ergonomics, error recognition, and sustained typing cadence ensures high performance in public examinations."
  },
  {
    id: 302,
    title: "Loksewa Exam Set 2 (IT Legislation)",
    category: "exam",
    difficulty: "hard",
    text: "The Electronic Transactions Act 2063 provides legal sanctity to digital records, digital signatures, and automated electronic transactions in Nepal. Cyber security measures including stateful firewalls, data encryption, regular off-site backups, and strict user access controls are vital for safeguarding confidential state information from unauthorized tampering and ransomware attacks."
  },
  {
    id: 303,
    title: "Loksewa Exam Set 3 (Hardware & Networking)",
    category: "exam",
    difficulty: "hard",
    text: "Modern computer networks rely on structured cabling, high-speed switches, and dynamic routing protocols to maintain uninterrupted communication. The central processing unit coordinates peripheral devices through control buses and direct memory access channels, ensuring efficient throughput across institutional database servers and client terminals."
  },
  {
    id: 304,
    title: "नेपाली प्रयोगात्मक परीक्षा सेट १",
    category: "exam",
    difficulty: "hard",
    text: "सार्वजनिक प्रशासनलाई जनउत्तरदायी, पारदर्शी र प्रभावकारी बनाउन सूचना प्रविधिको प्रयोग अपरिहार्य भएको छ। सरकारी कामकाजमा नेपाली युनिकोडको प्रयोगले विद्युतीय अभिलेख व्यवस्थापनलाई सर्वसुलभ बनाएको छ। कम्प्युटर अपरेटरले शुद्ध र द्रुत गतिमा सरकारी पत्र, टिप्पणी र निर्णयहरू टाइप गरी कार्यालयको कार्यसम्पादनलाई समयमै सम्पन्न गर्नुपर्दछ।"
  }
];

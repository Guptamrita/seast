// src/data/typingTexts.ts

export interface TypingItem {
  id: number;
  title: string;
  category: "english" | "nepali" | "code" | "exam";
  source?: "Loksewa PSC" | "NOC" | "NEB" | "TU" | "Banking" | "Code";
  difficulty: "easy" | "medium" | "hard";
  text: string;
}

export const englishTypingData: TypingItem[] = [
  // Loksewa PSC Official Exam Tests
  { id: 1, title: "Loksewa PSC: Computer Operator Role", source: "Loksewa PSC", category: "english", difficulty: "easy", text: "Computer operators must type accurately and quickly for government competitive examinations in Nepal." },
  { id: 2, title: "Loksewa PSC: Public Service Commission", source: "Loksewa PSC", category: "english", difficulty: "easy", text: "The Public Service Commission conducts fair and transparent examinations for selecting civil service candidates." },
  { id: 3, title: "Loksewa PSC: Quick Fox Standard", source: "Loksewa PSC", category: "english", difficulty: "easy", text: "The quick brown fox jumps over the lazy dog near the peaceful river bank in Kathmandu valley." },
  { id: 4, title: "Loksewa PSC: Civil Service Values", source: "Loksewa PSC", category: "english", difficulty: "medium", text: "Civil servants must maintain honesty, impartiality, accountability, and professional dedication in public administration." },
  { id: 5, title: "Loksewa PSC: Administrative Drafting", source: "Loksewa PSC", category: "english", difficulty: "medium", text: "Official letters and administrative orders must be drafted concisely with accurate grammatical structure and clear instructions." },
  { id: 6, title: "Loksewa PSC: Electronic Governance", source: "Loksewa PSC", category: "english", difficulty: "medium", text: "Electronic governance delivers public services to citizens with speed, transparency, efficiency, and cost effectiveness." },
  { id: 7, title: "Loksewa PSC: Good Governance Act", source: "Loksewa PSC", category: "english", difficulty: "hard", text: "The Good Governance Act emphasizes citizen participation, rule of law, timely service delivery, and zero tolerance for corruption." },
  { id: 8, title: "Loksewa PSC: Digital Nepal Framework", source: "Loksewa PSC", category: "english", difficulty: "hard", text: "The Digital Nepal Framework focuses on developing digital infrastructure, digital literacy, digital payments, and e-governance." },

  // Nepal Oil Corporation (NOC) Official Exam Tests
  { id: 9, title: "NOC Exam 2082: Petroleum Supply Chain", source: "NOC", category: "english", difficulty: "medium", text: "Nepal Oil Corporation manages the import, storage, distribution, and pricing of petroleum products across the nation." },
  { id: 10, title: "NOC Exam 2081: Inventory Automation", source: "NOC", category: "english", difficulty: "medium", text: "Automated fuel tracking and database monitoring systems ensure accurate inventory control at all regional depots." },
  { id: 11, title: "NOC Exam 2079: Quality Control Standards", source: "NOC", category: "english", difficulty: "hard", text: "Maintaining rigorous quality inspection protocols for aviation fuel and diesel guarantees safety and environmental compliance." },
  { id: 12, title: "NOC Exam 2077: Billing & ERP Systems", source: "NOC", category: "english", difficulty: "hard", text: "Enterprise Resource Planning software synchronizes financial transactions, tanker dispatch logs, and retail dealer accounts." },
  { id: 13, title: "NOC Exam 2075: Safety and Emergency Plan", source: "NOC", category: "english", difficulty: "hard", text: "Comprehensive safety audits, fire suppression systems, and hazard prevention guidelines protect high-risk petroleum terminals." },
  { id: 14, title: "NOC Exam 2073: Corporate Administration", source: "NOC", category: "english", difficulty: "medium", text: "Public corporation employees are governed by official service administration regulations and strict codes of ethical conduct." },

  // National Examination Board (NEB) Official Exam Tests
  { id: 15, title: "NEB Exam 2081: Grade 12 Results Processing", source: "NEB", category: "english", difficulty: "medium", text: "National Examination Board utilizes high-capacity data processing servers to compile and verify grade point averages accurately." },
  { id: 16, title: "NEB Exam 2080: Computer Assistant Duty", source: "NEB", category: "english", difficulty: "easy", text: "Computer assistants at the examination board enter student registration records, exam centers, and subject codes." },
  { id: 17, title: "NEB Exam 2079: OMR Sheet Scanning", source: "NEB", category: "english", difficulty: "medium", text: "Optical Mark Recognition scanners process thousands of answer sheets per hour with high optical accuracy and verification." },
  { id: 18, title: "NEB Exam 2078: Certificate Verification", source: "NEB", category: "english", difficulty: "hard", text: "Digitized academic records enable rapid online certificate verification, preventing academic credential forgery." },

  // Tribhuvan University (TU) Service Commission Exam Tests
  { id: 19, title: "TU IT Assistant 2082: Campus Networking", source: "TU", category: "english", difficulty: "medium", text: "Tribhuvan University connects constituent campuses and central libraries through optical fiber internet and intranet links." },
  { id: 20, title: "TU IT Assistant 2081: Research Repository", source: "TU", category: "english", difficulty: "hard", text: "Digital research repositories allow academic scholars to archive theses, peer-reviewed journals, and scientific manuscripts." },
  { id: 21, title: "TU IT Assistant 2080: Server Virtualization", source: "TU", category: "english", difficulty: "hard", text: "Virtual machines and cloud clusters optimize server hardware utilization, reducing operating costs and downtime." },

  // Banking & Financial Institutions (NRB / RBB / NBL)
  { id: 22, title: "Banking IT: Core Banking Software", source: "Banking", category: "english", difficulty: "medium", text: "Core Banking Systems process financial ledgers, automated teller transactions, and real-time electronic fund transfers." },
  { id: 23, title: "Banking IT: KYC Verification", source: "Banking", category: "english", difficulty: "medium", text: "Know Your Customer guidelines require secure storage and identity verification of customer citizenship and biometric records." },
  { id: 24, title: "Banking IT: RTGS and Clearing", source: "Banking", category: "english", difficulty: "hard", text: "Real Time Gross Settlement handles high-value interbank payments with instantaneous continuous settlement." },
  { id: 25, title: "Banking IT: Cyber Threat Defense", source: "Banking", category: "english", difficulty: "hard", text: "Multi-factor authentication, endpoint encryption, and security operations centers guard financial networks against ransomware." },

  // Computer Fundamentals & Technical Passages
  { id: 26, title: "Tech: Central Processing Unit", source: "Loksewa PSC", category: "english", difficulty: "easy", text: "The CPU consists of Arithmetic Logic Unit, Control Unit, and high-speed internal registers for execution." },
  { id: 27, title: "Tech: Cache Memory Architecture", source: "Loksewa PSC", category: "english", difficulty: "medium", text: "Cache memory operates at static RAM speeds to minimize latency when CPU requests recurring instructions." },
  { id: 28, title: "Tech: Relational Database Normalization", source: "Loksewa PSC", category: "english", difficulty: "hard", text: "Normalization systematically reduces data redundancy by ensuring that all non-key columns depend only on primary keys." },
  { id: 29, title: "Tech: Operating System Scheduling", source: "Loksewa PSC", category: "english", difficulty: "medium", text: "Preemptive round robin scheduling allocates fixed CPU time slices to maintain balanced interactive responsiveness." },
  { id: 30, title: "Tech: Virtual Memory & Paging", source: "Loksewa PSC", category: "english", difficulty: "hard", text: "Virtual memory maps logical pages to physical frames, swapping inactive pages to disk backing store dynamically." },
  { id: 31, title: "Tech: Network OSI 7-Layer Model", source: "Loksewa PSC", category: "english", difficulty: "medium", text: "The seven OSI layers structure network communication from physical electrical pulses to high-level application protocols." },
  { id: 32, title: "Tech: Subnetting & IPv4 Routing", source: "Loksewa PSC", category: "english", difficulty: "hard", text: "Subnet masks separate network addresses from host identifiers to partition wide area networks into logical subnets." },
  { id: 33, title: "Tech: Electronic Transaction Act 2063", source: "Loksewa PSC", category: "english", difficulty: "hard", text: "The Electronic Transaction Act provides legal validity to digital contracts, electronic records, and digital signature certificates." },
  { id: 34, title: "Tech: Symmetric & Asymmetric Encryption", source: "Loksewa PSC", category: "english", difficulty: "hard", text: "Symmetric algorithms use a single secret key, while asymmetric systems use public and private mathematical key pairs." },
  { id: 35, title: "Tech: Spreadsheet Functions & Pivot Tables", source: "Loksewa PSC", category: "english", difficulty: "medium", text: "Lookup formulas, conditional aggregations, and pivot tables empower operators to analyze complex financial datasets quickly." },
  { id: 36, title: "Tech: Mail Merge & Word Styles", source: "Loksewa PSC", category: "english", difficulty: "medium", text: "Mail merge connects structured recipient spreadsheets with master document templates to generate bulk customized letters." },
  { id: 37, title: "Tech: Computer Peripherals & Ports", source: "Loksewa PSC", category: "english", difficulty: "easy", text: "Universal Serial Bus ports connect printers, optical mice, keyboards, and flash drives for rapid plug-and-play communication." },
  { id: 38, title: "Tech: Solid State Drive Technology", source: "Loksewa PSC", category: "english", difficulty: "medium", text: "NAND flash storage provides silent operation, extreme shock tolerance, and rapid boot speeds compared to magnetic disks." },
  { id: 39, title: "Tech: System Backup & Archiving", source: "Loksewa PSC", category: "english", difficulty: "medium", text: "Regular automated full and differential backups safeguard administrative records against disk corruption and hardware loss." },
  { id: 40, title: "Tech: Ergonomics & Typing Posture", source: "Loksewa PSC", category: "english", difficulty: "easy", text: "Sitting upright with level wrists and relaxed shoulders prevents physical strain during intensive typing examinations." },
  { id: 41, title: "Tech: Internet Protocol Security", source: "Loksewa PSC", category: "english", difficulty: "hard", text: "IPsec establishes encrypted and authenticated communication channels between remote enterprise branch offices over the internet." },
  { id: 42, title: "Tech: Client-Server Architecture", source: "Loksewa PSC", category: "english", difficulty: "medium", text: "Workstations send SQL query requests across the local network to database servers which process and return results." },
  { id: 43, title: "Tech: Optical Character Recognition", source: "Loksewa PSC", category: "english", difficulty: "medium", text: "OCR software converts scanned bitmap images of typewritten documents into editable and searchable text files." },
  { id: 44, title: "Tech: BIOS Firmware & Booting", source: "Loksewa PSC", category: "english", difficulty: "medium", text: "Basic Input Output System performs power-on self-tests before transferring hardware control to the operating system bootloader." },
  { id: 45, title: "Tech: Artificial Intelligence Horizon", source: "Loksewa PSC", category: "english", difficulty: "medium", text: "Machine learning algorithms parse vast volumes of training data to detect intricate patterns and automate decisions." },
  { id: 46, title: "Tech: Cloud SaaS Solutions", source: "Loksewa PSC", category: "english", difficulty: "medium", text: "Software as a Service delivers enterprise productivity applications over web browsers without requiring local server setup." },
  { id: 47, title: "Tech: Local Area Network Topologies", source: "Loksewa PSC", category: "english", difficulty: "easy", text: "Star topologies connect all peripheral devices to a central switch, preventing single cable failures from dropping the network." },
  { id: 48, title: "Tech: Database Transaction ACID Properties", source: "Loksewa PSC", category: "english", difficulty: "hard", text: "Atomicity, Consistency, Isolation, and Durability guarantee reliable execution of concurrent database transactions." },
  { id: 49, title: "Tech: Malware Threats & Defense", source: "Loksewa PSC", category: "english", difficulty: "medium", text: "Trojans, worms, and spyware compromise data privacy unless filtered by active firewalls and updated antivirus software." },
  { id: 50, title: "Tech: High-Speed Typing Standard", source: "Loksewa PSC", category: "english", difficulty: "hard", text: "Maintaining rapid typing cadence above forty words per minute with ninety-five percent accuracy secures top rank in exams." }
];

export const nepaliTypingData: TypingItem[] = [
  // Loksewa PSC Official Exam Tests (नेपाली)
  { id: 101, title: "लोकसेवा: कम्प्युटर अपरेटरको दायित्व", source: "Loksewa PSC", category: "nepali", difficulty: "easy", text: "कम्प्युटर अपरेटरले सरकारी कार्यालयका महत्त्वपूर्ण तथ्याङ्क सुरक्षित राख्ने र द्रुत गतिमा टाइप गर्ने जिम्मेवारी बहन गर्दछ।" },
  { id: 102, title: "लोकसेवा: लोकसेवा आयोगको निष्पक्षता", source: "Loksewa PSC", category: "nepali", difficulty: "easy", text: "लोकसेवा आयोगले निजामती सेवाका विभिन्न पदहरूको लागि स्वच्छ, निष्पक्ष र मर्यादित प्रतियोगितात्मक परीक्षा सञ्चालन गर्दछ।" },
  { id: 103, title: "लोकसेवा: सुशासन र जनउत्तरदायित्व", source: "Loksewa PSC", category: "nepali", difficulty: "medium", text: "सुशासन भनेको पारदर्शी, जवाफदेही, जनमुखी, कानुनको शासन र भ्रष्टाचारमुक्त सरकारी कार्यप्रणालीको समष्टिगत रूप हो।" },
  { id: 104, title: "लोकसेवा: नागरिक बडापत्रको व्यवस्था", source: "Loksewa PSC", category: "nepali", difficulty: "medium", text: "प्रत्येक सार्वजनिक कार्यालयले नागरिकलाई दिने सेवाको विवरण, लाग्ने समय, दस्तुर र जिम्मेवार अधिकृत खुलाई बडापत्र राख्नुपर्छ।" },
  { id: 105, title: "लोकसेवा: टिप्पणी र निर्णय लेखन", source: "Loksewa PSC", category: "nepali", difficulty: "hard", text: "प्रशासनिक निर्णय प्रक्रियामा टिप्पणी लेखन गर्दा विषयको पृष्ठभूमि, कानुनी आधार, विकल्प र स्पष्ट राय प्रस्तुत गर्नुपर्दछ।" },
  { id: 106, title: "लोकसेवा: विद्युतीय कारोबार ऐन २०६३", source: "Loksewa PSC", category: "nepali", difficulty: "hard", text: "विद्युतीय कारोबार ऐन २०६३ ले डिजिटल हस्ताक्षरलाई कानुनी मान्यता दिई कम्प्युटर तथा इन्टरनेटजन्य अपराध नियन्त्रणमा मद्दत पुर्याएको छ।" },
  { id: 107, title: "लोकसेवा: नेपालको संविधान र मौलिक हक", source: "Loksewa PSC", category: "nepali", difficulty: "medium", text: "नेपालको संविधानले सम्पूर्ण नागरिकहरूलाई समानता, स्वतन्त्रता, सूचनाको हक र न्यायसम्बन्धी मौलिक हकको प्रत्याभूति गरेको छ।" },
  { id: 108, title: "लोकसेवा: सूचनाको हक सम्बन्धी ऐन २०६४", source: "Loksewa PSC", category: "nepali", difficulty: "medium", text: "सूचनाको हक सम्बन्धी ऐन २०६४ अनुसार नागरिकले सार्वजनिक निकायमा रहेका सार्वजनिक महत्वका सूचना माग्ने र पाउने अधिकार राख्दछन्।" },

  // Nepal Oil Corporation (NOC) Official Exam Tests (नेपाली)
  { id: 109, title: "NOC Exam 2082: पेट्रोलियम आपूर्ति व्यवस्थापन", source: "NOC", category: "nepali", difficulty: "medium", text: "नेपाल आयल निगमले देशभर पेट्रोलियम पदार्थको निर्वाध आयात, ढुवानी, भण्डारण तथा न्यायोचित वितरणको व्यवस्था मिलाउँछ।" },
  { id: 110, title: "NOC Exam 2081: डिपो तथा इन्भेन्टरी नियन्त्रण", source: "NOC", category: "nepali", difficulty: "medium", text: "पेट्रोलियम डिपोहरूमा इन्धनको मौज्दात, तापक्रम, घनत्व र लोड-अनलोडको स्वचालित कम्प्युटर अभिलेख दुरुस्त राखिन्छ।" },
  { id: 111, title: "NOC Exam 2079: गुणस्तर मापदण्ड र प्रयोगशाला", source: "NOC", category: "nepali", difficulty: "hard", text: "हवाई इन्धन र डिजेलको गुणस्तर परीक्षण गरी अन्तर्राष्ट्रिय मापदण्ड अनुसारको पेट्रोलियम आपूर्ति सुनिश्चित गरिन्छ।" },
  { id: 112, title: "NOC Exam 2077: कर्मचारी प्रशासन र आचरण", source: "NOC", category: "nepali", difficulty: "hard", text: "निगमका कर्मचारीहरूले सेवा विनियमावली अनुसार व्यावसायिक इमान्दारी, अनुशासन, र उच्च कार्यदक्षता प्रदर्शन गर्नुपर्दछ।" },
  { id: 113, title: "NOC Exam 2075: आगलागी नियन्त्रण तथा सुरक्षा", source: "NOC", category: "nepali", difficulty: "hard", text: "इन्धन भण्डारण गृहहरूमा अत्याधुनिक अग्नि नियन्त्रक उपकरण र सुरक्षा सतर्कता प्रणाली चौबीसै घण्टा तयारी अवस्थामा राखिन्छ।" },
  { id: 114, title: "NOC Exam 2073: लेखा तथा वित्तीय प्रणाली", source: "NOC", category: "nepali", difficulty: "medium", text: "दैनिक बिक्री, डिलर भुक्तानी र भन्सार महसुलको स्वचालित सफ्टवेयरमार्फत वित्तीय लेखापरीक्षण सम्पन्न गरिन्छ।" },

  // National Examination Board (NEB) Official Exam Tests (नेपाली)
  { id: 115, title: "NEB Exam 2081: परीक्षाफल तयारी र प्रमाणीकरण", source: "NEB", category: "nepali", difficulty: "medium", text: "राष्ट्रिय परीक्षा बोर्डले कक्षा बाह्रको परीक्षाफल तयार गर्दा विषयगत प्राप्ताङ्क र जीपीए शुद्धताको विशेष परीक्षण गर्दछ।" },
  { id: 116, title: "NEB Exam 2080: उत्तरपुस्तिका कोडिङ प्रणाली", source: "NEB", category: "nepali", difficulty: "easy", text: "परीक्षाको गोपनीयता कायम राख्न उत्तरपुस्तिकाहरूमा स्वचालित बारकोड र सांकेतिक नम्बर प्रविष्ट गरिन्छ।" },
  { id: 117, title: "NEB Exam 2079: शैक्षिक प्रमाणपत्र अनलाइन सेवा", source: "NEB", category: "nepali", difficulty: "medium", text: "विद्यार्थीहरूले ट्रान्सक्रिप्ट र चारित्रिक प्रमाणपत्रको आवेदन अनलाइन प्रणालीबाटै दिन सक्ने व्यवस्था मिलाइएको छ।" },
  { id: 118, title: "NEB Exam 2078: परीक्षा केन्द्र व्यवस्थापन", source: "NEB", category: "nepali", difficulty: "hard", text: "देशभरका परीक्षा केन्द्रहरूमा प्रश्नपत्र ढुवानी र परीक्षा सञ्चालनको अनुगमन गर्न डिजिटल प्रणाली प्रयोग गरिन्छ।" },

  // Tribhuvan University (TU) Service Commission Tests (नेपाली)
  { id: 119, title: "TU IT Assistant 2082: त्रिवि सूचना प्रविधि सञ्जाल", source: "TU", category: "nepali", difficulty: "medium", text: "त्रिभुवन विश्वविद्यालयले केन्द्रीय कार्यालय र आङ्गिक क्याम्पसहरूलाई उच्च गतिको अप्टिकल फाइबर नेटवर्कबाट जोडेको छ।" },
  { id: 120, title: "TU IT Assistant 2081: डिजिटल पुस्तकालय सेवा", source: "TU", category: "nepali", difficulty: "hard", text: "केन्द्रीय पुस्तकालयको ई-रिसोर्स प्रणालीमार्फत लाखौं शोधपत्र, पुस्तक र अनुसन्धान जर्नलहरू अनलाइन अध्ययन गर्न सकिन्छ।" },
  { id: 121, title: "TU IT Assistant 2080: परीक्षा नियन्त्रण अभिलेख", source: "TU", category: "nepali", difficulty: "hard", text: "विद्यार्थी दर्ता, परीक्षा आवेदन र नतिजा प्रकाशनको सम्पूर्ण तथ्याङ्क केन्द्रीय सर्भरमा सुरक्षित भण्डारण गरिन्छ।" },

  // Banking & Financial Sector Tests (नेपाली)
  { id: 122, title: "बैंकिङ IT: कोर बैंकिङ सफ्टवेयर प्रणाली", source: "Banking", category: "nepali", difficulty: "medium", text: "बैंक तथा वित्तीय संस्थाहरूले ग्राहकको निक्षेप, कर्जा र रकमान्तर कारोबारलाई कोर बैंकिङ प्रणालीबाट व्यवस्थापन गर्दछन्।" },
  { id: 123, title: "बैंकिङ IT: मोबाइल तथा इन्टरनेट बैंकिङ", source: "Banking", category: "nepali", difficulty: "medium", text: "क्युआर कोड र मोबाइल एपमार्फत हुने डिजिटल भुक्तानीले नगदरहित अर्थतन्त्रको विकासमा महत्त्वपूर्ण योगदान पुर्याएको छ।" },
  { id: 124, title: "बैंकिङ IT: वित्तीय डाटा सुरक्षा तथा ब्याकअप", source: "Banking", category: "nepali", difficulty: "hard", text: "वित्तीय कारोबारको संवेदनशीलतालाई ध्यानमा राखी विपद् व्यवस्थापन केन्द्रमा वास्तविक समयमा डाटा प्रतिकृति सुरक्षित गरिन्छ।" },
  { id: 125, title: "बैंकिङ IT: एन्टि-मनी लाउन्डरिङ प्रणाली", source: "Banking", category: "nepali", difficulty: "hard", text: "शंकास्पद वित्तीय कारोबारहरूको पहिचान गर्न स्वचालित निगरानी सफ्टवेयर र सम्पत्ति शुद्धीकरण निवारण ऐन कार्यान्वयन गरिन्छ।" },

  // Provincial PSC & Office Administration Paragraphs (नेपाली)
  { id: 126, title: "प्रदेश लोकसेवा: कोशी प्रदेश प्रशासन", source: "Loksewa PSC", category: "nepali", difficulty: "medium", text: "प्रदेश सरकारका मन्त्रालयहरूले स्थानीय तहसँग समन्वय गरी विकास निर्माण र सार्वजनिक सेवा प्रवाहलाई चुस्त बनाउँछन्।" },
  { id: 127, title: "प्रदेश लोकसेवा: मधेश प्रदेश सूचना केन्द्र", source: "Loksewa PSC", category: "nepali", difficulty: "medium", text: "सूचना प्रविधिको उपयोग गरी किसानहरूलाई मौसम, बाली र बजार मूल्य सम्बन्धी जानकारी मोबाइल एसएमएसबाट प्रदान गरिन्छ।" },
  { id: 128, title: "प्रदेश लोकसेवा: बागमती प्रदेश ई-गभर्नेन्स", source: "Loksewa PSC", category: "nepali", difficulty: "hard", text: "सरकारी कागजातहरूलाई डिजिटल ढाँचामा रूपान्तरण गरी दर्ता, चलानी र अभिलेख व्यवस्थापन पूर्ण स्वचालित बनाइएको छ।" },
  { id: 129, title: "प्रदेश लोकसेवा: गण्डकी प्रदेश पर्यटन पोर्टल", source: "Loksewa PSC", category: "nepali", difficulty: "medium", text: "पर्यटकीय पदमार्ग, होटल र सुरक्षा सम्बन्धी डिजिटल सूचना पोर्टलले विदेशी तथा आन्तरिक पर्यटकलाई सहजीकरण गर्दछ।" },
  { id: 130, title: "प्रदेश लोकसेवा: लुम्बिनी प्रदेश योजना व्यवस्थापन", source: "Loksewa PSC", category: "nepali", difficulty: "hard", text: "प्रदेश योजना आयोगले वार्षिक बजेट र आयोजनाहरूको प्रगति विवरण अनलाइन अनुगमन प्रणालीमार्फत समीक्षा गर्दछ।" },
  { id: 131, title: "प्रदेश लोकसेवा: कर्णाली प्रदेश डिजिटल सञ्जाल", source: "Loksewa PSC", category: "nepali", difficulty: "hard", text: "दुर्गम हिमाली जिल्लाहरूमा स्याटेलाइट र माइक्रोवेभ लिङ्कमार्फत टेलिमेडिसिन र अनलाइन शिक्षा सेवा विस्तार गरिँदैछ।" },
  { id: 132, title: "प्रदेश लोकसेवा: सुदूरपश्चिम प्रदेश जनसेवा", source: "Loksewa PSC", category: "nepali", difficulty: "medium", text: "सरकारी सेवा लिन नागरिकले झन्झट बेहोर्न नपरोस् भनी एकद्वार सेवा केन्द्र र डिजिटल टोकन प्रणाली लागू गरिएको छ।" },
  { id: 133, title: "कार्यालय पत्राचार: दर्ता चलानी प्रक्रिया", source: "Loksewa PSC", category: "nepali", difficulty: "easy", text: "कार्यालयमा प्राप्त भएका पत्रहरू दर्ता किताबमा चढाउने र पठाइने पत्रहरूमा चलानी नम्बर राख्ने कार्य नियमित गरिन्छ।" },
  { id: 134, title: "कार्यालय पत्राचार: सूचना तथा प्रेस विज्ञप्ति", source: "Loksewa PSC", category: "nepali", difficulty: "medium", text: "सार्वजनिक हितका निर्णयहरू आम नागरिकसम्म पुर्याउन आधिकारिक सूचना तथा प्रेस विज्ञप्ति प्रकाशित गरिन्छ।" },
  { id: 135, title: "कार्यालय पत्राचार: परिपत्र र आदेश", source: "Loksewa PSC", category: "nepali", difficulty: "medium", text: "माथिल्लो निकायबाट मातहतका कार्यालयहरूलाई नीतिगत निर्देशन कार्यान्वयन गर्न परिपत्र जारी गरिन्छ।" },
  { id: 136, title: "प्रविधिक ज्ञान: कम्प्युटर मेमोरी वर्गीकरण", source: "Loksewa PSC", category: "nepali", difficulty: "easy", text: "र्याम अस्थायी मेमोरी हो जसले कम्प्युटर चालु हुँदा मात्र डाटा राख्दछ भने रोम स्थायी प्रकृतिको हुन्छ।" },
  { id: 137, title: "प्रविधिक ज्ञान: अपरेटिङ सिस्टमको भूमिका", source: "Loksewa PSC", category: "nepali", difficulty: "medium", text: "अपरेटिङ सिस्टमले कम्प्युटरको हार्डवेयर, मेमोरी, प्रोसेस र अन्य एप्लिकेसन सफ्टवेयरहरू बीच समन्वय गर्दछ।" },
  { id: 138, title: "प्रविधिक ज्ञान: नेटवर्क सुरक्षा र फायरवाल", source: "Loksewa PSC", category: "nepali", difficulty: "hard", text: "नेटवर्कमा अनाधिकृत घुसपैठ रोक्न र हानिकारक डाटा प्याकेटहरू छान्न फायरवाल सुरक्षा पर्खालको रूपमा काम गर्दछ।" },
  { id: 139, title: "प्रविधिक ज्ञान: वर्ड प्रोसेसिङ र सर्टकट", source: "Loksewa PSC", category: "nepali", difficulty: "easy", text: "वर्डमा कपी गर्न कन्ट्रोल सी, पेस्ट गर्न कन्ट्रोल भी र सेभ गर्न कन्ट्रोल एस सर्टकट कि प्रयोग गरिन्छ।" },
  { id: 140, title: "प्रविधिक ज्ञान: स्प्रेडसिट सूत्र र विश्लेषण", source: "Loksewa PSC", category: "nepali", difficulty: "medium", text: "एक्सेलमा गणितीय गणना गर्न बराबर चिन्हबाट सुरु हुने सूत्रहरू जस्तै सम, एभरेज र काउन्ट प्रयोग गरिन्छ।" },
  { id: 141, title: "प्रविधिक ज्ञान: डाटाबेस र नर्मलाइजेसन", source: "Loksewa PSC", category: "nepali", difficulty: "hard", text: "डाटाबेसमा अनावश्यक दोहोरोपन हटाउन र तथ्याङ्कको शुद्धता कायम राख्न नर्मलाइजेसन सिद्धान्त अपनाइन्छ।" },
  { id: 142, title: "प्रविधिक ज्ञान: युनिकोड र प्रिती फन्ट", source: "Loksewa PSC", category: "nepali", difficulty: "medium", text: "युनिकोडले संसारका सबै भाषाहरूलाई साझा डिजिटल कोड प्रदान गर्दछ जसले नेपाली अक्षरहरू जुनसुकै यन्त्रमा पढ्न सकिन्छ।" },
  { id: 143, title: "प्रविधिक ज्ञान: क्लाउड कम्प्युटिङ फाइदा", source: "Loksewa PSC", category: "nepali", difficulty: "medium", text: "इन्टरनेटको माध्यमबाट जुनसुकै स्थानबाट आफ्नो फाइल तथा सफ्टवेयर चलाउन सकिने प्रविधि नै क्लाउड कम्प्युटिङ हो।" },
  { id: 144, title: "प्रविधिक ज्ञान: साइबर अपराध सचेतना", source: "Loksewa PSC", category: "nepali", difficulty: "hard", text: "अपरिचित लिङ्क नखोल्ने, बलियो पासवर्ड राख्ने र नियमित सुरक्षा अपडेट गर्नाले साइबर आक्रमणबाट जोगिन सकिन्छ।" },
  { id: 145, title: "प्रविधिक ज्ञान: अप्टिकल फाइबर प्रविधि", source: "Loksewa PSC", category: "nepali", difficulty: "medium", text: "काँचको मसिनो रेसाबाट प्रकाशको गतिमा डाटा प्रसारण गरिने हुनाले अप्टिकल फाइबर अत्यधिक भरपर्दो मानिन्छ।" },
  { id: 146, title: "प्रविधिक ज्ञान: सफ्टवेयर परीक्षण चरण", source: "Loksewa PSC", category: "nepali", difficulty: "hard", text: "सफ्टवेयर प्रयोगमा ल्याउनु अगाडि सम्भावित त्रुटिहरू पत्ता लगाई समाधान गर्न युनिट र इन्टिग्रेसन परीक्षण गरिन्छ।" },
  { id: 147, title: "प्रविधिक ज्ञान: प्रिन्टर र स्क्यानर उपयोग", source: "Loksewa PSC", category: "nepali", difficulty: "easy", text: "कागजातहरूलाई डिजिटल रूप दिन स्क्यानर प्रयोग गरिन्छ भने डिजिटल फाइललाई कागजमा छाप्न प्रिन्टर प्रयोग हुन्छ।" },
  { id: 148, title: "प्रविधिक ज्ञान: डिजिटल हस्ताक्षरको महत्व", source: "Loksewa PSC", category: "nepali", difficulty: "hard", text: "विद्युतीय कागजातमा गरिएको डिजिटल हस्ताक्षरले पठाउने व्यक्तिको पहिचान र कागजातको आधिकारिकता प्रमाणित गर्दछ।" },
  { id: 149, title: "प्रविधिक ज्ञान: नागरिक एप सुविधा", source: "Loksewa PSC", category: "nepali", difficulty: "medium", text: "नागरिक एपबाट नागरिकता, राहदानी, प्यान, सवारी चालक अनुमतिपत्र र शैक्षिक विवरणहरू एकै ठाउँबाट हेर्न सकिन्छ।" },
  { id: 150, title: "प्रविधिक ज्ञान: टाइपिङ गति र शुद्धता", source: "Loksewa PSC", category: "nepali", difficulty: "hard", text: "दैनिक निरन्तर अभ्यास र ध्यान केन्द्रित गरेर नेपाली तथा अंग्रेजी दुवै भाषामा उच्च गति हासिल गर्न सकिन्छ।" }
];

export const codeTypingData: TypingItem[] = [
  {
    id: 201,
    title: "C: Hello World Program",
    source: "Code",
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
    title: "C: Array Sum with For Loop",
    source: "Code",
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
    title: "SQL: Select High Performers",
    source: "Code",
    category: "code",
    difficulty: "easy",
    text: `SELECT user_id, full_name, email 
FROM exam_attempts 
WHERE score >= 60 
ORDER BY score DESC;`
  },
  {
    id: 204,
    title: "HTML: Semantic Card Component",
    source: "Code",
    category: "code",
    difficulty: "easy",
    text: `<div class="card p-4 rounded-xl shadow">
    <h2 class="text-xl font-bold">Loksewa Exam</h2>
    <p>Prepare for Computer Operator.</p>
</div>`
  },
  {
    id: 205,
    title: "JavaScript: Calculate Marks with Penalty",
    source: "Code",
    category: "code",
    difficulty: "easy",
    text: `const calculateMarks = (correct, wrong) => {
    const penalty = wrong * 0.4;
    return (correct * 2) - penalty;
};`
  },
  {
    id: 206,
    title: "C: Pointer Variable Swap",
    source: "Code",
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
    source: "Code",
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
    title: "Python: Recursive Factorial",
    source: "Code",
    category: "code",
    difficulty: "medium",
    text: `def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)`
  },
  {
    id: 209,
    title: "C: Linear Search Implementation",
    source: "Code",
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
    title: "CSS: Centering Container",
    source: "Code",
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
    title: "JavaScript: Map and Filter Arrays",
    source: "Code",
    category: "code",
    difficulty: "medium",
    text: `const passed = scores
    .filter(s => s.percentage >= 40)
    .map(s => ({ ...s, status: "Pass" }));`
  },
  {
    id: 212,
    title: "C: Dynamic Memory Allocation",
    source: "Code",
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
    title: "SQL: Join with Having Clause",
    source: "Code",
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
    title: "C++: OOP Class and Method",
    source: "Code",
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
    title: "JavaScript: Async API Request",
    source: "Code",
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
  },
  {
    id: 216,
    title: "C: File Operations in Write Mode",
    source: "Code",
    category: "code",
    difficulty: "hard",
    text: `FILE *fp = fopen("result.txt", "w");
if (fp != NULL) {
    fprintf(fp, "Score: %d\\n", score);
    fclose(fp);
}`
  },
  {
    id: 217,
    title: "SQL: Update Record with Condition",
    source: "Code",
    category: "code",
    difficulty: "easy",
    text: `UPDATE user_roles 
SET role = 'admin' 
WHERE user_id = 'usr_102' AND is_active = 1;`
  },
  {
    id: 218,
    title: "Python: List Comprehension Filter",
    source: "Code",
    category: "code",
    difficulty: "easy",
    text: `even_squares = [x**2 for x in range(1, 20) if x % 2 == 0]`
  },
  {
    id: 219,
    title: "C++: Template Function",
    source: "Code",
    category: "code",
    difficulty: "hard",
    text: `template <typename T>
T findMax(T a, T b) {
    return (a > b) ? a : b;
}`
  },
  {
    id: 220,
    title: "Java: Main Class Syntax",
    source: "Code",
    category: "code",
    difficulty: "medium",
    text: `public class Main {
    public static void main(String[] args) {
        System.out.println("Loksewa Nepal IT Exam");
    }
}`
  }
];

export const examParagraphsData: TypingItem[] = [
  {
    id: 301,
    title: "Loksewa Federal 5-Min Exam Test (Civil Service)",
    source: "Loksewa PSC",
    category: "exam",
    difficulty: "hard",
    text: "The Civil Service in Nepal plays a pivotal role in policy implementation, public service delivery, and national development. As digital governance expands, computer operators must maintain absolute accuracy when drafting administrative memos, maintaining official websites, and processing citizen records. Mastery of keyboard ergonomics, error recognition, and sustained typing cadence ensures high performance in public examinations."
  },
  {
    id: 302,
    title: "NOC 2082 Practical Exam Set (English)",
    source: "NOC",
    category: "exam",
    difficulty: "hard",
    text: "Nepal Oil Corporation operates nationwide petroleum import, storage facilities, and fuel distribution infrastructure. Digital monitoring software installed across regional terminals verifies fuel volume, inventory levels, pipeline throughput, and tanker dispatches. Reliable data entry speeds and meticulous adherence to accounting standards ensure unhindered national petroleum distribution."
  },
  {
    id: 303,
    title: "NEB Computer Assistant 2081 Exam (English)",
    source: "NEB",
    category: "exam",
    difficulty: "hard",
    text: "The National Examination Board oversees curriculum assessments, standardized board examinations, and academic credential certifications across all provinces of Nepal. Efficient computer operators are responsible for processing student registrations, managing optical mark reader grading scanners, and publishing reliable results without typographical discrepancies."
  },
  {
    id: 304,
    title: "TU IT Assistant 2082 Practical Test (English)",
    source: "TU",
    category: "exam",
    difficulty: "hard",
    text: "Tribhuvan University coordinates decentralized campus networks, centralized database systems, and institutional digital libraries. Technical assistants manage user authorization protocols, deploy operating system patches, troubleshoot local area network anomalies, and maintain high server availability for faculties and researchers."
  },
  {
    id: 305,
    title: "Banking IT Assistant Practical Exam (English)",
    source: "Banking",
    category: "exam",
    difficulty: "hard",
    text: "Commercial banks and financial institutions in Nepal enforce stringent cybersecurity measures to protect digital payment gateways, mobile banking applications, and clearing house transactions. Accurate typing and rapid document drafting are vital competencies for operators managing sensitive banking ledgers and audit records."
  },
  {
    id: 306,
    title: "CDSC Senior Computer Operator Exam Set (English)",
    source: "Loksewa PSC",
    category: "exam",
    difficulty: "hard",
    text: "CDS and Clearing Limited provides depository, clearing, and electronic settlement services for securities traded on the Nepal Stock Exchange. Robust server infrastructure, real-time database transactions, and cryptographic verification protocols guarantee complete transparency and investor security throughout trading cycles."
  },
  {
    id: 307,
    title: "लोकसेवा संघीय ५ मिनेट प्रयोगात्मक परीक्षा सेट (नेपाली)",
    source: "Loksewa PSC",
    category: "exam",
    difficulty: "hard",
    text: "सार्वजनिक प्रशासनलाई जनउत्तरदायी, पारदर्शी र प्रभावकारी बनाउन सूचना प्रविधिको प्रयोग अपरिहार्य भएको छ। सरकारी कामकाजमा नेपाली युनिकोडको प्रयोगले विद्युतीय अभिलेख व्यवस्थापनलाई सर्वसुलभ बनाएको छ। कम्प्युटर अपरेटरले शुद्ध र द्रुत गतिमा सरकारी पत्र, टिप्पणी र निर्णयहरू टाइप गरी कार्यालयको कार्यसम्पादनलाई समयमै सम्पन्न गर्नुपर्दछ।"
  },
  {
    id: 308,
    title: "नेपाल आयल निगम प्रयोगात्मक परीक्षा सेट (नेपाली)",
    source: "NOC",
    category: "exam",
    difficulty: "hard",
    text: "नेपाल आयल निगमले देशको आर्थिक विकास र जनजीवन सहज बनाउन पेट्रोलियम पदार्थको आपूर्ति प्रणालीलाई व्यवस्थित, भरपर्दो र पारदर्शी बनाएको छ। डिपोहरूमा इन्धनको स्वचालित मौज्दात नियन्त्रण, गुणस्तर परीक्षण, र ट्याङ्कर चलानी कार्य कम्प्युटर सफ्टवेयरबाट गरिन्छ। यस कार्यमा दक्ष कम्प्युटर अपरेटरको भूमिका अत्यन्त महत्त्वपूर्ण रहन्छ।"
  },
  {
    id: 309,
    title: "राष्ट्रिय परीक्षा बोर्ड प्रयोगात्मक परीक्षा सेट (नेपाली)",
    source: "NEB",
    category: "exam",
    difficulty: "hard",
    text: "माध्यमिक शिक्षा परीक्षा तथा कक्षा बाह्रको वार्षिक परीक्षा सञ्चालन र परीक्षाफल प्रकाशन राष्ट्रिय परीक्षा बोर्डको प्रमुख जिम्मेवारी हो। लाखौं विद्यार्थीहरूको प्राप्ताङ्क प्रविष्टि, रुजु र नतिजा प्रमाणीकरण कम्प्युटर प्रणालीबाट गरिन्छ। कम्प्युटर सहायकले कुनै पनि त्रुटि नहुने गरी द्रुत गतिमा काम गर्नुपर्दछ।"
  },
  {
    id: 310,
    title: "त्रिवि सेवा आयोग प्रयोगात्मक परीक्षा सेट (नेपाली)",
    source: "TU",
    category: "exam",
    difficulty: "hard",
    text: "त्रिभुवन विश्वविद्यालय अन्तर्गतका विभिन्न अध्ययन संस्थान, संकाय र अनुसन्धान केन्द्रहरूमा सूचना प्रविधिको विस्तार द्रुत गतिमा भइरहेको छ। प्राविधिक सहायकले क्याम्पसको कम्प्युटर प्रयोगशाला, डिजिटल अभिलेख, र परीक्षा सम्बन्धी सम्पूर्ण कार्यहरूमा आवश्यक प्राविधिक सहयोग उपलब्ध गराउँछ।"
  }
];

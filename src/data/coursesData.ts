export interface CourseItem {
  id: string;
  number: number;
  title: string;
  desc: string;
  category: string;
  subjectId: string;
  iconBg: string;
  cardBg: string;
  topics: string[];
  // Google Drive preview/embed link or standard share link
  driveEmbedUrl?: string;
  driveViewUrl?: string;
  allowDownload?: boolean;
  copyrightNotice?: string;
}

// Helper to convert standard Google Drive share links into embeddable preview URLs
export function formatGoogleDriveEmbedUrl(url?: string): string {
  if (!url) return "";
  
  // Already in preview format
  if (url.includes("/preview")) return url;
  
  // Standard Google Drive file URL: drive.google.com/file/d/FILE_ID/view...
  const fileIdMatch = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (fileIdMatch && fileIdMatch[1]) {
    return `https://drive.google.com/file/d/${fileIdMatch[1]}/preview`;
  }
  
  // Open with ID: drive.google.com/open?id=FILE_ID
  const idMatch = url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (idMatch && idMatch[1]) {
    return `https://drive.google.com/file/d/${idMatch[1]}/preview`;
  }
  
  // Direct web PDF link fallback with Google Docs viewer
  if (url.endsWith(".pdf") || url.includes(".pdf?")) {
    return `https://docs.google.com/viewer?url=${encodeURIComponent(url)}&embedded=true`;
  }
  
  return url;
}

// 12 Courses catalog with default Google Drive PDF placeholders ready for the user's PDF links
export const coursesData: CourseItem[] = [
  {
    id: "computer-fundamental",
    number: 1,
    title: "Computer Fundamental",
    desc: "Hardware, Generation, CPU, Memory & Architecture",
    category: "Core Computing",
    subjectId: "computer-fundamentals",
    iconBg: "bg-[#0284c7]",
    cardBg: "bg-[#f0f7ff] hover:bg-[#e0f2fe] border-[#bae6fd]/60 text-slate-900",
    topics: [
      "History & Classification of Computers",
      "CPU, ALU, Registers & Bus Architecture",
      "Primary (RAM, ROM) & Secondary Storage",
      "Input / Output Peripherals",
      "Number Systems (Binary, Octal, Hex) & Logic Gates",
    ],
    // Google Drive PDF: View only (Download disabled, Protected with Copyright)
    driveEmbedUrl: "https://drive.google.com/file/d/1t9gvNZ4Q1Qfo4cDMzDYaKvc2VZzvmfhF/preview",
    allowDownload: false,
    copyrightNotice: "© Copyright Study Hub. All Rights Reserved.",
  },
  {
    id: "networking",
    number: 2,
    title: "Networking",
    desc: "LAN, WAN, OSI Model, TCP/IP & Network Protocols",
    category: "Infrastructure",
    subjectId: "networking",
    iconBg: "bg-[#6366f1]",
    cardBg: "bg-[#eef2ff] hover:bg-[#e0e7ff] border-[#c7d2fe]/60 text-slate-900",
    topics: [
      "Network Topologies (Star, Mesh, Bus, Ring)",
      "OSI 7 Layers & TCP/IP Model Comparison",
      "Transmission Media (Twisted Pair, Coaxial, Fiber Optics)",
      "IP Addressing (IPv4 Classes, Subnetting, IPv6)",
      "Standard Ports & Protocols (DNS, DHCP, HTTP, SSH, FTP)",
    ],
    driveEmbedUrl: "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs/preview",
    driveViewUrl: "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs/view",
  },
  {
    id: "operating-system",
    number: 3,
    title: "Operating System",
    desc: "Windows, Linux, Kernel, Process & File Systems",
    category: "Systems",
    subjectId: "operating-system",
    iconBg: "bg-[#10b981]",
    cardBg: "bg-[#f0fdf4] hover:bg-[#dcfce7] border-[#bbf7d0]/60 text-slate-900",
    topics: [
      "Kernel Functions & Process Management",
      "CPU Scheduling Algorithms (FCFS, SJF, Round Robin)",
      "Memory Management, Paging & Virtual Memory",
      "File Systems (NTFS, FAT32, ext4)",
      "Windows Administration & Basic Linux Commands",
    ],
    driveEmbedUrl: "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs/preview",
    driveViewUrl: "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs/view",
  },
  {
    id: "html",
    number: 4,
    title: "HTML",
    desc: "HTML5 Structure, Semantic Tags, Forms & Web Markup",
    category: "Web Development",
    subjectId: "web-design",
    iconBg: "bg-[#ea580c]",
    cardBg: "bg-[#fff7ed] hover:bg-[#ffedd5] border-[#fed7aa]/60 text-slate-900",
    topics: [
      "HTML5 Document Structure & DOCTYPE",
      "Semantic Tags (header, nav, section, article, footer)",
      "Forms, Form Controls & Input Types",
      "Tables, Lists, Hyperlinks & Anchors",
      "Audio, Video, Canvas & Media Embedding",
    ],
    driveEmbedUrl: "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs/preview",
    driveViewUrl: "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs/view",
  },
  {
    id: "css",
    number: 5,
    title: "CSS",
    desc: "Styling, Flexbox, CSS Grid & Responsive Layouts",
    category: "Web Development",
    subjectId: "web-design",
    iconBg: "bg-[#06b6d4]",
    cardBg: "bg-[#ecfeff] hover:bg-[#cffafe] border-[#a5f3fc]/60 text-slate-900",
    topics: [
      "CSS Selectors, Cascade & Specificity Rules",
      "Box Model (Content, Padding, Border, Margin)",
      "Flexbox Axis, Alignment & Responsive Layouts",
      "CSS Grid Template Columns & Areas",
      "Media Queries & Mobile-First Responsive Design",
    ],
    driveEmbedUrl: "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs/preview",
    driveViewUrl: "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs/view",
  },
  {
    id: "ms-excel",
    number: 6,
    title: "MS Excel",
    desc: "Formulas, Functions, Pivot Tables & Data Analysis",
    category: "Office Suite",
    subjectId: "spreadsheet",
    iconBg: "bg-[#16a34a]",
    cardBg: "bg-[#f0fdf4] hover:bg-[#dcfce7] border-[#bbf7d0]/60 text-slate-900",
    topics: [
      "Cell Addressing (Relative, Absolute, Mixed $A$1)",
      "Essential Formulas (SUM, AVERAGE, COUNT, IF, COUNTIF)",
      "Lookup Formulas (VLOOKUP, HLOOKUP, INDEX-MATCH)",
      "Pivot Tables, Slicers & Chart Visualizations",
      "Data Validation, Conditional Formatting & Macros",
    ],
    driveEmbedUrl: "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs/preview",
    driveViewUrl: "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs/view",
  },
  {
    id: "ms-word",
    number: 7,
    title: "MS Word",
    desc: "Word Processing, Formatting, Mail Merge & Macros",
    category: "Office Suite",
    subjectId: "word-processor",
    iconBg: "bg-[#2563eb]",
    cardBg: "bg-[#eff6ff] hover:bg-[#dbeafe] border-[#bfdbfe]/60 text-slate-900",
    topics: [
      "Font, Paragraph & Page Layout Formatting",
      "Tables, Columns, Headers & Footers",
      "Mail Merge (Step-by-step recipients data source)",
      "Table of Contents, Captions & Citations",
      "Track Changes, Comments & Document Security",
    ],
    driveEmbedUrl: "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs/preview",
    driveViewUrl: "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs/view",
  },
  {
    id: "ms-powerpoint",
    number: 8,
    title: "MS PowerPoint",
    desc: "Slide Master, Custom Animations, Transitions & Audio",
    category: "Office Suite",
    subjectId: "presentation",
    iconBg: "bg-[#dc2626]",
    cardBg: "bg-[#fef2f2] hover:bg-[#fee2e2] border-[#fecaca]/60 text-slate-900",
    topics: [
      "Slide Master Creation & Hierarchy",
      "Transitions vs Custom Animations & Timing",
      "SmartArt, Shapes, Charts & Multimedia",
      "Slide Show Settings & Presenter Tools",
      "Exporting Presentations to PDF & Video",
    ],
    driveEmbedUrl: "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs/preview",
    driveViewUrl: "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs/view",
  },
  {
    id: "ms-access",
    number: 9,
    title: "MS Access",
    desc: "Database Design, Relational Tables, Forms & Reports",
    category: "Database",
    subjectId: "dbms",
    iconBg: "bg-[#a855f7]",
    cardBg: "bg-[#faf5ff] hover:bg-[#f3e8ff] border-[#e9d5ff]/60 text-slate-900",
    topics: [
      "Database Concepts, Tables & Data Types",
      "Primary Keys, Foreign Keys & Referential Integrity",
      "Query Design Wizard & Parameter Queries",
      "Form Design & Input Controls",
      "Report Generation, Grouping & Calculations",
    ],
    driveEmbedUrl: "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs/preview",
    driveViewUrl: "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs/view",
  },
  {
    id: "sql",
    number: 10,
    title: "SQL",
    desc: "DDL, DML, DQL Queries, Joins, Indexing & Views",
    category: "Database",
    subjectId: "dbms",
    iconBg: "bg-[#d97706]",
    cardBg: "bg-[#fffbeb] hover:bg-[#fef3c7] border-[#fde68a]/60 text-slate-900",
    topics: [
      "DDL: CREATE, ALTER, DROP, TRUNCATE TABLE",
      "DML: INSERT INTO, UPDATE, DELETE FROM",
      "DQL: SELECT, WHERE, GROUP BY, HAVING, ORDER BY",
      "Joins: INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN",
      "Subqueries, Views, Constraints & Indexes",
    ],
    driveEmbedUrl: "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs/preview",
    driveViewUrl: "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs/view",
  },
  {
    id: "programming",
    number: 11,
    title: "Programming",
    desc: "C Programming, Control Flow, Functions & Algorithms",
    category: "Coding & Logic",
    subjectId: "computer-fundamentals",
    iconBg: "bg-[#8b5cf6]",
    cardBg: "bg-[#f5f3ff] hover:bg-[#ede9fe] border-[#ddd6fe]/60 text-slate-900",
    topics: [
      "C Fundamentals, Variables, Data Types & Constants",
      "Decision Making: if-else, switch-case statements",
      "Loops: for, while, do-while loops & nested iterations",
      "Functions, Parameters, Return Types & Recursion",
      "Arrays, Pointers, Structures & Basic File Handling",
    ],
    driveEmbedUrl: "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs/preview",
    driveViewUrl: "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs/view",
  },
  {
    id: "project",
    number: 12,
    title: "Project",
    desc: "Real-world Applications, Web Solutions & Case Studies",
    category: "Practical",
    subjectId: "portfolio",
    iconBg: "bg-[#db2777]",
    cardBg: "bg-[#fdf2f8] hover:bg-[#fce7f3] border-[#fbcfe8]/60 text-slate-900",
    topics: [
      "Problem Definition & System Requirements Analysis",
      "Database Schema Design & ER Diagrams",
      "Frontend User Interface & User Experience",
      "Testing, Debugging & Quality Assurance",
      "Project Documentation & Practical Viva Preparation",
    ],
    driveEmbedUrl: "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs/preview",
    driveViewUrl: "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs/view",
  },
];

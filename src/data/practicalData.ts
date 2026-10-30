export interface PracticalSubject {
  id: string;
  title: string;
  nepaliTitle: string;
  marks: number;
  timeLimit?: string;
  iconBg: string;
  cardBg: string;
  iconName: "keyboard" | "fileText" | "fileSpreadsheet" | "presentation" | "database" | "globe";
  description: string;
}

export interface PracticalSet {
  id: string;
  setNumber: number;
  title: string;
  level: "4th" | "5th";
  totalMarks: number;
  timeMins: number;
  tasks: {
    subject: string;
    marks: number;
    instructions: string[];
    sampleTextOrData?: string;
  }[];
}

export const level4Subjects: PracticalSubject[] = [
  {
    id: "l4-nepali-typing",
    title: "Devnagari Typing",
    nepaliTitle: "नेपाली टाइपिङ (प्रिती/युनिकोड)",
    marks: 5,
    timeLimit: "5 Minutes",
    iconBg: "bg-[#c026d3]",
    cardBg: "bg-[#faf5ff] hover:bg-[#f3e8ff] border-[#e9d5ff]/60 text-slate-900",
    iconName: "keyboard",
    description: "५ मिनेटमा शुद्ध र छिटो टाइपिङ (न्यूनतम १५ शब्द प्रति मिनेट)",
  },
  {
    id: "l4-english-typing",
    title: "English Typing",
    nepaliTitle: "अङ्ग्रेजी टाइपिङ",
    marks: 5,
    timeLimit: "5 Minutes",
    iconBg: "bg-[#06b6d4]",
    cardBg: "bg-[#ecfeff] hover:bg-[#cffafe] border-[#a5f3fc]/60 text-slate-900",
    iconName: "keyboard",
    description: "5 minutes speed & accuracy test (Minimum 20 WPM for pass)",
  },
  {
    id: "l4-ms-word",
    title: "MS Word",
    nepaliTitle: "वर्ड प्रोसेसिङ (MS Word)",
    marks: 15,
    timeLimit: "12 Minutes",
    iconBg: "bg-[#0284c7]",
    cardBg: "bg-[#f0f7ff] hover:bg-[#e0f2fe] border-[#bae6fd]/60 text-slate-900",
    iconName: "fileText",
    description: "Table formatting, Header/Footer, Mail Merge, Page Layout & Styles",
  },
  {
    id: "l4-ms-excel",
    title: "MS Excel",
    nepaliTitle: "स्प्रेडसिट (MS Excel)",
    marks: 15,
    timeLimit: "15 Minutes",
    iconBg: "bg-[#10b981]",
    cardBg: "bg-[#f0fdf4] hover:bg-[#dcfce7] border-[#bbf7d0]/60 text-slate-900",
    iconName: "fileSpreadsheet",
    description: "Formulas (SUM, AVERAGE, IF, VLOOKUP), Charting & Formatting",
  },
  {
    id: "l4-ms-powerpoint",
    title: "MS PowerPoint",
    nepaliTitle: "प्रस्तुतीकरण (MS PowerPoint)",
    marks: 10,
    timeLimit: "8 Minutes",
    iconBg: "bg-[#ea580c]",
    cardBg: "bg-[#fff7ed] hover:bg-[#ffedd5] border-[#fed7aa]/60 text-slate-900",
    iconName: "presentation",
    description: "Slide Master, Animation, Transitions & Presentation Layout",
  },
];

export const level5Subjects: PracticalSubject[] = [
  {
    id: "l5-nepali-typing",
    title: "Devnagari Typing",
    nepaliTitle: "नेपाली टाइपिङ (प्रिती/युनिकोड)",
    marks: 5,
    timeLimit: "5 Minutes",
    iconBg: "bg-[#c026d3]",
    cardBg: "bg-[#faf5ff] hover:bg-[#f3e8ff] border-[#e9d5ff]/60 text-slate-900",
    iconName: "keyboard",
    description: "५ मिनेटमा शुद्ध र छिटो टाइपिङ (५ अङ्क)",
  },
  {
    id: "l5-english-typing",
    title: "English Typing",
    nepaliTitle: "अङ्ग्रेजी टाइपिङ",
    marks: 5,
    timeLimit: "5 Minutes",
    iconBg: "bg-[#06b6d4]",
    cardBg: "bg-[#ecfeff] hover:bg-[#cffafe] border-[#a5f3fc]/60 text-slate-900",
    iconName: "keyboard",
    description: "5 minutes professional speed typing (5 Marks)",
  },
  {
    id: "l5-ms-word",
    title: "MS Word",
    nepaliTitle: "वर्ड प्रोसेसिङ (MS Word)",
    marks: 12,
    timeLimit: "10 Minutes",
    iconBg: "bg-[#0284c7]",
    cardBg: "bg-[#f0f7ff] hover:bg-[#e0f2fe] border-[#bae6fd]/60 text-slate-900",
    iconName: "fileText",
    description: "Advanced Document Structuring, Columns, Watermark & Mail Merge",
  },
  {
    id: "l5-ms-excel",
    title: "MS Excel",
    nepaliTitle: "स्प्रेडसिट (MS Excel)",
    marks: 12,
    timeLimit: "12 Minutes",
    iconBg: "bg-[#10b981]",
    cardBg: "bg-[#f0fdf4] hover:bg-[#dcfce7] border-[#bbf7d0]/60 text-slate-900",
    iconName: "fileSpreadsheet",
    description: "Nested IF, VLOOKUP, Pivot Tables, Data Validation & Charts",
  },
  {
    id: "l5-ms-access",
    title: "MS Access",
    nepaliTitle: "डेटाबेस (MS Access)",
    marks: 10,
    timeLimit: "8 Minutes",
    iconBg: "bg-[#8b5cf6]",
    cardBg: "bg-[#f5f3ff] hover:bg-[#ede9fe] border-[#ddd6fe]/60 text-slate-900",
    iconName: "database",
    description: "Tables, Primary Key, Query Design, Forms & Reports with Grouping",
  },
  {
    id: "l5-web-ppt",
    title: "PowerPoint & HTML",
    nepaliTitle: "वेब डिजाइन र MS PowerPoint",
    marks: 6,
    timeLimit: "5 Minutes",
    iconBg: "bg-[#ea580c]",
    cardBg: "bg-[#fff7ed] hover:bg-[#ffedd5] border-[#fed7aa]/60 text-slate-900",
    iconName: "globe",
    description: "HTML Tags, Forms, Tables & Custom PowerPoint Master Slides",
  },
];

export const practicalSetsData: PracticalSet[] = [
  // ── 4th Level Practical Sets ─────────────────────────────────────────
  {
    id: "set-4th-01",
    setNumber: 1,
    title: "4th Level Practical Model Set 01",
    level: "4th",
    totalMarks: 50,
    timeMins: 45,
    tasks: [
      {
        subject: "1. Devnagari & English Typing",
        marks: 10,
        instructions: [
          "Type the provided Devnagari text in Preeti/Unicode font within 5 minutes (5 Marks).",
          "Type the provided English paragraph within 5 minutes (5 Marks).",
          "Minimum typing speed: Nepali 15 wpm, English 20 wpm.",
        ],
        sampleTextOrData: "नेपालको सार्वजनिक प्रशासनमा सूचना प्रविधिको प्रयोग द्रुत गतिमा बढ्दै गएको छ । सरकारी सेवा प्रवाहलाई छिटो, छरितो र पारदर्शी बनाउन ई-गभर्नेन्स अनिवार्य आवश्यकता बनेको छ ।",
      },
      {
        subject: "2. MS Word Processing",
        marks: 15,
        instructions: [
          "Type a 2-paragraph document and format: Font Arial 12pt, 1.5 line spacing, Justified alignment.",
          "Insert a 4-column, 5-row table showing Employee details (SN, Name, Post, Salary) and center-align headers.",
          "Apply 1.5pt solid blue border around the table and alternate row background shading.",
          "Insert a Header with text 'Loksewa Practical 2082' (right-aligned) and Footer with 'Page X of Y'.",
          "Add a Diagonal Watermark with text 'CONFIDENTIAL'.",
        ],
      },
      {
        subject: "3. MS Excel Spreadsheet",
        marks: 15,
        instructions: [
          "Create a Student Marks Ledger with columns: Roll No, Name, Computer, Math, English, Science, Total, Percentage, Result.",
          "Calculate 'Total' using =SUM() function and 'Percentage' = Total/4.",
          "Calculate 'Result' using =IF() function: If Percentage >= 40 then 'PASS' else 'FAIL'.",
          "Apply conditional formatting: Highlight percentages below 40 in light red fill with dark red text.",
          "Generate a 2D Clustered Column Chart comparing Total Marks of all students.",
        ],
      },
      {
        subject: "4. MS PowerPoint Presentation",
        marks: 10,
        instructions: [
          "Create 3 slides with Title 'Information Technology in Nepal'.",
          "Slide 1: Title and Subtitle with your Roll Number.",
          "Slide 2: Bulleted list with 4 points on ICT advantages.",
          "Slide 3: Insert a SmartArt Hierarchy diagram depicting IT organizational structure.",
          "Apply 'Fade' slide transition and 'Wipe' animation on bullet points.",
        ],
      },
    ],
  },
  {
    id: "set-4th-02",
    setNumber: 2,
    title: "4th Level Practical Model Set 02",
    level: "4th",
    totalMarks: 50,
    timeMins: 45,
    tasks: [
      {
        subject: "1. Devnagari & English Typing",
        marks: 10,
        instructions: [
          "Complete 5-minute Nepali typing test on computer.",
          "Complete 5-minute English typing test on computer.",
        ],
      },
      {
        subject: "2. MS Word",
        marks: 15,
        instructions: [
          "Create a 3-column newspaper style article layout with Drop Cap on the first letter (3 lines drop).",
          "Set Left Margin to 1.25 inches and Right Margin to 1.0 inch.",
          "Use Mail Merge to generate appointment letters for 5 candidates from an Excel data source.",
        ],
      },
      {
        subject: "3. MS Excel",
        marks: 15,
        instructions: [
          "Prepare a Monthly Employee Salary Sheet (Basic, Dearness Allowance 10%, Gross, Provident Fund 10%, CIT 5%, Net Salary).",
          "Find Maximum, Minimum, and Average Net Salary using standard formulas.",
          "Sort the data in descending order by Net Salary.",
        ],
      },
      {
        subject: "4. MS PowerPoint",
        marks: 10,
        instructions: [
          "Design a 3-slide presentation on 'Cyber Safety Guidelines'.",
          "Insert a table with 3 columns in Slide 2 comparing Safe vs Unsafe online behaviors.",
          "Set automated slide transition with 5 seconds delay.",
        ],
      },
    ],
  },
  {
    id: "set-4th-03",
    setNumber: 3,
    title: "4th Level Practical Model Set 03",
    level: "4th",
    totalMarks: 50,
    timeMins: 45,
    tasks: [
      {
        subject: "1. Typing Test",
        marks: 10,
        instructions: ["Nepali Typing (5 min, 5 marks)", "English Typing (5 min, 5 marks)"],
      },
      {
        subject: "2. MS Word",
        marks: 15,
        instructions: [
          "Create an official memo format with Logo placeholder, Reference Number, and Date.",
          "Insert a 5x4 table with merged header cells.",
          "Format bulleted list with custom checkmark bullets.",
        ],
      },
      {
        subject: "3. MS Excel",
        marks: 15,
        instructions: [
          "Prepare Sales Report: Item, Unit Price, Quantity Sold, Total Sales, 13% VAT, Grand Total.",
          "Use VLOOKUP to find Item Price by Item Code.",
          "Create a Pie Chart representing percentage sales contribution of each item.",
        ],
      },
      {
        subject: "4. MS PowerPoint",
        marks: 10,
        instructions: [
          "Create a 4-slide presentation on 'Local Government Digital Services'.",
          "Apply Slide Master to put 'Amrita Gupta - PSC' logo on all slides.",
        ],
      },
    ],
  },

  // ── 5th Level Practical Sets ─────────────────────────────────────────
  {
    id: "set-5th-01",
    setNumber: 1,
    title: "5th Level Practical Model Set 01",
    level: "5th",
    totalMarks: 50,
    timeMins: 45,
    tasks: [
      {
        subject: "1. Devnagari & English Typing",
        marks: 10,
        instructions: [
          "Nepali Typing speed & accuracy (5 min / 5 marks).",
          "English Typing speed & accuracy (5 min / 5 marks).",
        ],
      },
      {
        subject: "2. MS Word Processing",
        marks: 12,
        instructions: [
          "Format multi-level numbered list (1, 1.1, 1.1.1, 1.2) with customized tab stops.",
          "Insert a 5x5 matrix table, apply formula =SUM(ABOVE) on total row.",
          "Configure Mail Merge with conditional IF...THEN...ELSE field: If Marks >= 50 'Congratulations' else 'Needs Improvement'.",
          "Set Gutter margin 0.5 inches for book binding layout.",
        ],
      },
      {
        subject: "3. MS Excel Spreadsheet",
        marks: 12,
        instructions: [
          "Create a Tax Deduction Sheet with Nested IF formula based on Nepal Inland Revenue Tax Slabs.",
          "Use VLOOKUP function to retrieve designation and grade amount from master table.",
          "Create a Pivot Table grouping expenses by Category and Month.",
          "Add Data Validation to restrict Age entry between 18 and 60.",
        ],
      },
      {
        subject: "4. MS Access Database",
        marks: 10,
        instructions: [
          "Create a Table `tbl_Citizens` with fields: CitizenID (Primary Key, AutoNumber), FullName (Text, 50), DOB (Date/Time), District (Text), Phone (Text).",
          "Apply Validation Rule on Phone field to accept exactly 10 digits.",
          "Create a Select Query to show citizens from 'Kathmandu' or 'Lalitpur' born after 2050 BS.",
          "Design an Entry Form with Command Buttons for 'Save' and 'Close'.",
        ],
      },
      {
        subject: "5. MS PowerPoint & Web Design (HTML)",
        marks: 6,
        instructions: [
          "Write clean HTML5 code for a table with colspan, rowspan, and custom background color.",
          "Include a form in HTML with Text input, Radio buttons for Gender, and a Submit button.",
          "Or create 3 PowerPoint slides with custom slide master and action button hyperlinks.",
        ],
      },
    ],
  },
  {
    id: "set-5th-02",
    setNumber: 2,
    title: "5th Level Practical Model Set 02",
    level: "5th",
    totalMarks: 50,
    timeMins: 45,
    tasks: [
      {
        subject: "1. Typing Test",
        marks: 10,
        instructions: ["Nepali Typing (5 min, 5 marks)", "English Typing (5 min, 5 marks)"],
      },
      {
        subject: "2. MS Word",
        marks: 12,
        instructions: [
          "Format a 3-page report with Different First Page Header/Footer.",
          "Apply 2-column layout with vertical line between columns on page 2.",
          "Generate an automatic Table of Contents using Heading 1, Heading 2 styles.",
        ],
      },
      {
        subject: "3. MS Excel",
        marks: 12,
        instructions: [
          "Use PMT function to calculate monthly loan installment (Loan: 500,000, Rate: 10%, Term: 5 years).",
          "Use COUNTIF and SUMIF functions to analyze branch revenue.",
          "Build a Combo Chart (Clustered Column + Line Chart on secondary axis).",
        ],
      },
      {
        subject: "4. MS Access",
        marks: 10,
        instructions: [
          "Create two related tables: `tbl_Department` (DeptID PK, DeptName) and `tbl_Staff` (StaffID PK, Name, DeptID FK, Salary).",
          "Enforce Referential Integrity between DeptID in both tables.",
          "Build a Parameter Query that prompts user for [Enter Department Name] and displays staff list.",
        ],
      },
      {
        subject: "5. HTML & PowerPoint",
        marks: 6,
        instructions: [
          "Write HTML code for an ordered list with Roman numerals and an unordered list with square bullets.",
          "Insert an image in HTML with alt attribute and width 300px.",
        ],
      },
    ],
  },
  {
    id: "set-5th-03",
    setNumber: 3,
    title: "5th Level Practical Model Set 03",
    level: "5th",
    totalMarks: 50,
    timeMins: 45,
    tasks: [
      {
        subject: "1. Typing Test",
        marks: 10,
        instructions: ["Nepali Typing (5 min, 5 marks)", "English Typing (5 min, 5 marks)"],
      },
      {
        subject: "2. MS Word",
        marks: 12,
        instructions: [
          "Create an official government certificate design with ornate page border.",
          "Use WordArt / shapes with drop shadow for Title.",
          "Configure Mail Merge with certificate recipient names.",
        ],
      },
      {
        subject: "3. MS Excel",
        marks: 12,
        instructions: [
          "Apply advanced formatting: Custom number format `\"NPR \"#,##0.00`.",
          "Use INDEX and MATCH combination for dynamic lookup.",
          "Create a Goal Seek scenario to find required sales for achieving target profit.",
        ],
      },
      {
        subject: "4. MS Access",
        marks: 10,
        instructions: [
          "Design a Report grouped by Department with summary calculations (Sum of Salary, Count of Staff).",
          "Create an Update Query to increase salary by 10% for staff in IT department.",
        ],
      },
      {
        subject: "5. HTML Web Design",
        marks: 6,
        instructions: [
          "Write HTML5 code for a navigation bar with 4 hyperlink anchors: Home, About, Syllabus, Contact.",
          "Add internal CSS styling for blue background and white text.",
        ],
      },
    ],
  },
];

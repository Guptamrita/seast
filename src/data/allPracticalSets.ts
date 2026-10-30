export interface PracticalSetData {
  id: string;
  level: "4th" | "5th";
  setNumber: number;
  title: string;
  nepaliTyping: {
    title: string;
    paragraphs: string[];
  };
  englishTyping: {
    title: string;
    paragraphs: string[];
  };
  wordTasks: {
    title: string;
    tasks: string[];
    table?: {
      headers: string[];
      rows: (string | number)[][];
    };
    specialLetterSnippet?: string;
    specialElement?: "cycle-diagram" | "pyramid-equation" | null;
  };
  excelTasks: {
    title: string;
    table?: {
      headers: string[];
      rows: (string | number)[][];
    };
    instructions: string[];
    rules?: string[];
  };
  powerPointTasks: {
    title: string;
    tasks: string[];
    table?: {
      headers: string[];
      rows: (string | number)[][];
    };
  };
  accessTasks: {
    title: string;
    table?: {
      headers: string[];
      rows: (string | number)[][];
    };
    secondTableTitle?: string;
    secondTable?: {
      headers: string[];
      rows: (string | number)[][];
    };
    tasks: string[];
  };
  htmlTasks?: {
    title: string;
    tasks?: string[];
    table?: {
      headers: string[];
      rows: (string | number)[][];
    };
    nestedList?: {
      category: string;
      items: string[];
    }[];
    formFields?: string[];
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// 4th LEVEL PRACTICAL SETS (Sets 1 to 10)
// ─────────────────────────────────────────────────────────────────────────────
export const level4PracticalSets: PracticalSetData[] = [
  // ── 4th Level Set 1 ──────────────────────────────────────────────────
  {
    id: "l4-1",
    level: "4th",
    setNumber: 1,
    title: "Practical-set 1",
    nepaliTyping: {
      title: "१. नेपाली टाइपिंग",
      paragraphs: [
        "गाउँको बिहान निकै रमाइलो र शान्त हुन्छ। रातभरि परेको शीतले घाँसका पातहरू चम्किरहेका हुन्छन्। पूर्व दिशाबाट सूर्य उदाउन थालेपछि आकाशमा सुनौलो प्रकाश फैलिन्छ। चराचुरुङ्गीहरू रुखका हाँगामा बसेर मीठो आवाज निकाल्न थाल्छन्। किसानहरू आफ्नो दैनिक कामका लागि खेतबारीतिर जान्छन्। कसैले गाईवस्तुलाई घाँस खुवाउँछन् भने कसैले घरको आँगन सफा गर्छन्। गाउँका साना बालबालिका विद्यालय जानका लागि किताब र झोला तयार पार्छन्।",
        "गाउँमा मानिसहरू एकअर्कासँग मिलेर बस्छन्। कसैको घरमा विवाह, पूजा वा अन्य कार्यक्रम हुँदा छिमेकीहरू सहयोग गर्न पुग्छन्। खेतमा धान, मकै, गहुँ र विभिन्न प्रकारका तरकारी लगाइन्छ। वर्षायाममा हरियालीले गाउँको वातावरण अझ सुन्दर बनाउँछ। खोलाको पानी, चिसो हावा र चराहरूको आवाजले मानिसको मन प्रसन्न बनाउँछ। सहरको व्यस्त जीवनभन्दा गाउँको जीवन सरल र प्राकृतिक हुन्छ। यद्यपि गाउँमा स्वास्थ्य, शिक्षा र यातायातका केही समस्या हुन सक्छन्। गाउँको विकासका लागि राम्रो सडक, विद्यालय, अस्पताल र सञ्चार सुविधाको आवश्यकता पर्दछ। गाउँका मानिसहरूले आधुनिक प्रविधिको प्रयोग गर्दै आफ्नो परम्परा पनि जोगाउनुपर्छ। प्रकृतिसँग नजिक रहेर मेहनत गर्ने मानिसहरूले जीवनको वास्तविक आनन्द अनुभव गर्न सक्छन्।",
      ],
    },
    englishTyping: {
      title: "2. English typing",
      paragraphs: [
        `Everyone has dreams, but turning those dreams into reality requires determination, discipline, and hard work. Some people want to become teachers, doctors, engineers, programmers, or successful business owners. Others hope to travel the world, support their families, or serve their communities. Whatever the goal may be, the first step is to believe that progress is possible. However, believing in a dream is not enough; people must also take practical steps toward achieving it. A student who wants to improve English should read regularly, learn new vocabulary, and practise writing. Someone who wishes to become a programmer must study programming languages, solve problems, and build useful projects. The journey may include mistakes, disappointments, and unexpected difficulties. "I will try again!" is a powerful sentence when life becomes challenging. Failure is not necessarily the end of the journey; it can be an opportunity to learn, improve, and begin again.`,
        `For instance, a beginner learning computer programming may encounter errors every day. Instead of becoming discouraged, the learner should identify each mistake, understand its cause, and correct it patiently. Small achievements—such as completing one lesson, solving one problem, or finishing a project—build confidence over time. It is also important to choose supportive friends and learn from experienced people. Comparing our progress with someone else's can create unnecessary pressure; everyone develops at a different pace. Remember these words: success rarely happens overnight. Stay focused, remain curious, and celebrate your progress, even when it seems small. Your future is shaped not only by your dreams, but also by the actions you take today!`,
      ],
    },
    wordTasks: {
      title: "3. Perform the following tasks in MS Word:",
      tasks: [
        "Copy the paragraph into a new document and give it a suitable title, center-align the title and apply a reflection text effect.",
        "Apply Small Caps to “programming”.",
        "Insert a clipart and apply the Tight text-wrapping option.",
        "Divide the 2nd paragraph of the text into two columns and add a line between.",
        "Insert a bookmark named discouraged at the word “discouraged” and create a hyperlink to that bookmark.",
        "Insert a table with 4 columns and 4 rows for Place, Distance, Transport, and Time.",
        "Insert a header containing “Travel Diary” and a footer containing automatic page numbers.",
      ],
    },
    excelTasks: {
      title: "4. Perform the following tasks in Excel.",
      table: {
        headers: ["S.N.", "Employee Name", "Department", "Performance Score"],
        rows: [
          [1, "Raj", "HR", "25%"],
          [2, "Meena", "Accounts", "45%"],
          [3, "Sagar", "IT", "68%"],
          [4, "Priti", "Sales", "82%"],
          [5, "Aman", "HR", "95%"],
          [6, "Rina", "IT", "57%"],
          [7, "Keshav", "Sales", "74%"],
        ],
      },
      instructions: [
        "Use VLOOKUP to assign performance ratings:",
        "1. 0% to below 30%: Poor",
        "2. 30% to below 50%: Average",
        "3. 50% to below 70%: Good",
        "4. 70% to below 85%: Very Good",
        "5. 85% to 100%: Excellent",
      ],
    },
    powerPointTasks: {
      title: "5. Perform the following tasks in PowerPoint.",
      tasks: [
        "Create a presentation of 3 slides on the topic “Operating System.” Include your Definition, uses, types, and examples.",
        "Apply a suitable theme, insert a picture, and add slide transitions.",
      ],
    },
    accessTasks: {
      title: "6. Perform the following tasks in MS Access",
      table: {
        headers: ["Field Name", "Data Type"],
        rows: [
          ["RollNo", "Number (Primary Key)"],
          ["StudentName", "Short Text"],
          ["Address", "Short Text"],
          ["Gender", "Short Text"],
          ["Marks", "Number"],
        ],
      },
      tasks: [
        "1. Create a table named Student.",
        "2. Enter records of 5 students.",
        "3. Create a query to display students who scored more than 60 marks.",
        "4. Create a form to enter student records.",
      ],
    },
  },

  // ── 4th Level Set 2 ──────────────────────────────────────────────────
  {
    id: "l4-2",
    level: "4th",
    setNumber: 2,
    title: "Practical-set 2",
    nepaliTyping: {
      title: "1. नेपाली टाइपिंग",
      paragraphs: [
        "एक गाउँमा रमेश नाम गरेको एउटा केटा बस्थ्यो। उसको परिवार आर्थिक रूपमा कमजोर थियो। उसका बुबा खेतीपाती गर्थे र आमा घरको काम गर्नुका साथै पशुपालन गर्थिन्। रमेशलाई पढाइमा निकै रुचि थियो। ऊ हरेक दिन बिहान सबेरै उठेर घरको काममा आमाबुबालाई सहयोग गर्थ्यो। त्यसपछि विद्यालय जान्थ्यो र ध्यान दिएर पढ्थ्यो। विद्यालयबाट फर्किएपछि ऊ साथीहरूसँग खेल्नुभन्दा पहिले आफ्नो गृहकार्य पूरा गर्थ्यो।",
        "गाउँमा पुस्तकालय नभएकाले रमेशलाई अतिरिक्त किताब पढ्न कठिन हुन्थ्यो। तर उसले आफ्नो समस्यालाई कमजोरी बन्न दिएन। ऊ शिक्षकसँग नयाँ किताब माग्थ्यो र साथीहरूसँग भएका पुस्तकहरू साटेर पढ्थ्यो। परीक्षाको समयमा उसले नियमित अभ्यास गर्‍यो र नबुझेका प्रश्नहरू शिक्षकलाई सोध्यो। केही साथीहरूले उसको मेहनत देखेर हाँस्ने गर्थे, तर रमेशले आफ्नो लक्ष्यबाट ध्यान हटाएन।",
        "वार्षिक परीक्षाको नतिजा प्रकाशित हुँदा रमेश विद्यालयमै पहिलो भयो। शिक्षकहरूले उसको प्रशंसा गरे र परिवार पनि खुसी भयो। उसले छात्रवृत्ति प्राप्त गर्‍यो र उच्च शिक्षा हासिल गर्ने अवसर पायो। धेरै वर्षको मेहनतपछि रमेश सफल व्यक्ति बन्यो। उसले आफ्नो गाउँमा विद्यालय र पुस्तकालय स्थापना गर्न सहयोग गर्‍यो।",
        "रमेशको कथाले हामीलाई सफलता प्राप्त गर्न निरन्तर मेहनत, धैर्य र आत्मविश्वास आवश्यक हुन्छ भन्ने शिक्षा दिन्छ। कठिन परिस्थितिमा पनि लक्ष्यप्रति इमानदार रहने मानिसले एक दिन अवश्य प्रगति गर्न सक्छ। सफलता रातारात प्राप्त हुँदैन, त्यसका लागि समय, अनुशासन र निरन्तर प्रयास चाहिन्छ।",
      ],
    },
    englishTyping: {
      title: "2. English Typing",
      paragraphs: [
        `Dark clouds covered the sky, and the wind began to blow strongly. Within minutes, heavy rain was falling on the streets, making the roads slippery and difficult to cross. People hurried toward nearby shops, bus stops, and buildings to find shelter. A young man named Bikash stood beneath a tree, holding a paper bag filled with groceries. He had planned to reach home before the rain started, but the weather had changed unexpectedly. Suddenly, a loud clap of thunder echoed across the neighbourhood—what a frightening sound! Bikash looked toward the main road and noticed an elderly woman struggling to cross it. Vehicles were moving slowly, and water was flowing along the roadside.`,
        `Without hesitation, he approached her and offered his arm. "Please walk slowly; the road is dangerous," he said. Together, they crossed the street and reached a nearby shelter. The woman thanked him warmly and asked, "Why did you help a stranger when you were also trying to get home?" Bikash replied, "Because kindness should not depend on whether we know someone." They waited for several minutes while the rain continued to fall. During their conversation, Bikash learned that the woman lived nearby and was returning from the market. Eventually, the rain became lighter, and the evening grew peaceful again. Before leaving, the woman thanked him once more and wished him a safe journey. On his way home, Bikash felt happy despite getting wet. He understood that helping others did not always require money, special skills, or a great deal of time. Sometimes, a little patience and kindness are enough to make someone's difficult day much better.`,
      ],
    },
    wordTasks: {
      title: "3. Perform the following tasks in word:",
      tasks: [
        "Save the document as IT_Practical.docx.",
        "Set the paper size to A4.",
        "Set the page margins to 1 inch on all sides.",
        "Add a suitable title and format the title using Heading 1 style.",
        "Make the first paragraph justified.",
        "Apply a 4-line Drop Cap to the first paragraph.",
        "Set the page background color to light yellow.",
        "Insert a page number at the bottom of the page.",
        "Insert the current date in the header.",
        "Count the words in the document and take a screenshot of the Word Count window.",
      ],
    },
    excelTasks: {
      title: "4. Perform the following tasks in Excel.",
      table: {
        headers: ["Subject", "Marks"],
        rows: [
          ["English", 65],
          ["Mathematics", 72],
          ["Computer", 80],
          ["Account", 68],
          ["Economics", 55],
          ["Total", "=SUM(B2:B6)"],
          ["Percentage", "=total/500*100"],
        ],
      },
      instructions: [
        "1. Calculate the total marks and percentage.",
        "2. Use Goal Seek to find the marks required in Economics to achieve an overall percentage of 75%.",
        "3. Find the marks required in Mathematics to achieve a total of 400 marks, keeping all other subject marks unchanged.",
        "4. Save the worksheet as Student_Result.xlsx.",
      ],
    },
    powerPointTasks: {
      title: "5. Perform the following tasks in PowerPoint.",
      tasks: [
        "Create a presentation of 3 slides on “Computer and Its Uses.” Include a title slide, uses of computers, and advantages.",
        "Insert SmartArt or a suitable shape and apply animations to the text.",
      ],
    },
    accessTasks: {
      title: "6. Perform the following tasks in MS Access.",
      table: {
        headers: ["Field Name", "Data Type"],
        rows: [
          ["EmpID", "AutoNumber (Primary Key)"],
          ["EmpName", "Short Text"],
          ["Department", "Short Text"],
          ["Salary", "Currency"],
          ["JoinDate", "Date/Time"],
        ],
      },
      tasks: [
        "1. Create a table named Employee with these fields:",
        "2. Enter details of 5 employees.",
        "3. Create a query to display employees whose salary is greater than Rs.30,000.",
        "4. Create a report showing all employee records.",
      ],
    },
  },

  // ── 4th Level Set 3 ──────────────────────────────────────────────────
  {
    id: "l4-3",
    level: "4th",
    setNumber: 3,
    title: "Practical-set 3",
    nepaliTyping: {
      title: "1. नेपाली टाइपिंग",
      paragraphs: [
        "शिक्षा मानिसको जीवनमा अत्यन्त महत्त्वपूर्ण हुन्छ। शिक्षाले हामीलाई पढ्न, लेख्न र सही निर्णय लिन सिकाउँछ। यसले मानिसको सोचाइ फराकिलो बनाउनुका साथै समाजमा सम्मानपूर्वक जीवन बिताउन सहयोग गर्छ। शिक्षित व्यक्तिले आफ्नो अधिकार र कर्तव्य बुझ्न सक्छ। उसले विभिन्न समस्या समाधान गर्न तर्क, ज्ञान र अनुभवको प्रयोग गर्न जान्दछ। शिक्षा केवल विद्यालयमा किताब पढ्नु मात्र होइन, जीवनका हरेक अनुभवबाट नयाँ कुरा सिक्नु पनि हो।",
        "विद्यालयले बालबालिकालाई ज्ञान, अनुशासन र सहयोगको भावना सिकाउँछ। शिक्षकहरूले विद्यार्थीलाई सही बाटो देखाउँछन् र उनीहरूको प्रतिभा विकास गर्न मद्दत गर्छन्। घरपरिवारले पनि बालबालिकाको शिक्षामा महत्त्वपूर्ण भूमिका खेल्छ। अभिभावकले आफ्ना छोराछोरीलाई नियमित अध्ययन गर्न प्रोत्साहन दिनुपर्छ। आर्थिक अवस्था कमजोर भएका बालबालिकाले पनि गुणस्तरीय शिक्षा प्राप्त गर्न सक्ने वातावरण बनाउनुपर्छ।",
        "शिक्षाले बेरोजगारी कम गर्न, गरिबी घटाउन र देशको विकास गर्न सहयोग पुर्‍याउँछ। शिक्षित नागरिकले समाजमा रहेका अन्धविश्वास, भेदभाव र अन्यायविरुद्ध आवाज उठाउन सक्छन्। त्यसैले प्रत्येक बालबालिकाले समान रूपमा शिक्षा प्राप्त गर्न पाउनुपर्छ। ज्ञान, सीप र असल व्यवहारको संयोजनले मानिसलाई योग्य नागरिक बनाउँछ। शिक्षामा गरिएको लगानी भविष्यको उज्यालो निर्माण गर्ने महत्त्वपूर्ण आधार हो।",
      ],
    },
    englishTyping: {
      title: "2. English Typing",
      paragraphs: [
        `The final examination was only two weeks away, and Nisha had several subjects to revise. At first, she felt nervous because the syllabus seemed enormous. She had to study mathematics, English, science, computer studies, and social studies. Whenever she opened her textbooks, she worried about how much work remained. One evening, her older brother noticed her frustration and offered some advice. "Do not panic—divide the work into smaller tasks!" he suggested. Nisha prepared a timetable that included specific study periods, short breaks, and time for revision. Every morning, she reviewed difficult topics; every evening, she solved practice questions and checked her answers. She also created summary notes containing important definitions, formulas, and examples. Whenever she made a mistake, she recorded it in a notebook so that she could review it later.`,
        `One day, she discovered that she had misunderstood an important mathematical formula. "How could I forget this?" she exclaimed. Instead of giving up, she asked her teacher for help and practised similar problems until she understood the concept. She also reduced unnecessary mobile phone use and made sure she slept for enough hours each night. Her parents encouraged her to remain calm and maintain a healthy routine. By examination day, Nisha felt much more confident. She read every question carefully, managed her time, and checked her answers before submitting the paper. After the examination, she realized that preparation had made the experience less frightening. She learned that success depends not only on intelligence but also on planning, patience, discipline, and consistent effort.`,
      ],
    },
    wordTasks: {
      title: "3. Perform the following task in word.",
      tasks: [
        "Copy the entire document onto a new page.",
        "Give the second paragraph a hanging indent of 0.5 inch.",
        "Add suitable heading and apply Heading 1 style to the title.",
        "Change the font to Times New Roman, size 12.",
        "Set line spacing to 1.5.",
        "Insert a page break before the second copy.",
        "Add a border around the page.",
        "Insert a table of contents at the beginning of the document.",
        "Set the page orientation to Landscape.",
        "Use Print Preview to check the final layout.",
      ],
    },
    excelTasks: {
      title: "4. Perform the following tasks in Excel.",
      table: {
        headers: ["S.N.", "Product", "Price (Rs.)", "Qty", "Amount", "Discount", "Net Amount"],
        rows: [
          [1, "Keyboard", "900", 3, "", "", ""],
          [2, "Mouse", "500", 5, "", "", ""],
          [3, "Monitor", "12,000", 2, "", "", ""],
          [4, "Printer", "8,500", 1, "", "", ""],
          [5, "Headphone", "1,200", 4, "", "", ""],
        ],
      },
      instructions: [
        "Perform the following tasks:",
        "1. Calculate Amount = Price × Quantity.",
        "2. Give a 10% discount if the product is Monitor and the amount is greater than Rs. 20,000.",
        "3. Give an 5% discount if the product is Printer and the amount is greater than Rs. 8,000.",
        "4. Calculate Net Amount after discount.",
        "5. Create a bar chart showing Product and Quantity.",
      ],
    },
    powerPointTasks: {
      title: "5. Perform the following tasks in PowerPoint.",
      tasks: [
        "Create a presentation of 3 slides explaining MS Word, MS Excel, and MS PowerPoint.",
        "Insert icons or pictures, apply animations, and add footer with your name.",
      ],
    },
    accessTasks: {
      title: "6. Perform the following tasks in MS Access.",
      tasks: [
        "Task 1: Create a table named Books with fields BookID, BookName, Author, Price, and Category.",
        "Task 2: Enter details of 5 books.",
        "Task 3: Create a query to display books belonging to the category \"Computer\".",
        "Task 4: Sort the books by price in descending order.",
      ],
    },
  },

  // ── 4th Level Set 4 ──────────────────────────────────────────────────
  {
    id: "l4-4",
    level: "4th",
    setNumber: 4,
    title: "Practical-set 4",
    nepaliTyping: {
      title: "1. प्रविधि र आधुनिक जीवन",
      paragraphs: [
        "विज्ञान र प्रविधिले मानिसको जीवनशैलीमा ठूलो परिवर्तन ल्याएको छ। पहिले एउटा ठाउँबाट अर्को ठाउँमा समाचार पुर्‍याउन धेरै समय लाग्थ्यो। अहिले मोबाइल फोन र इन्टरनेटको माध्यमबाट केही सेकेन्डमै संसारको जुनसुकै ठाउँमा रहेका मानिससँग सम्पर्क गर्न सकिन्छ। कम्प्युटरले कार्यालयका काम, तथ्याङ्क व्यवस्थापन र सूचना आदानप्रदानलाई सहज बनाएको छ। आधुनिक प्रविधिको प्रयोगले मानिसको समय र मेहनत दुवै बचाउन मद्दत गर्छ।",
        "शिक्षाको क्षेत्रमा पनि प्रविधिको महत्त्व बढ्दै गएको छ। विद्यार्थीहरूले अनलाइन कक्षा लिन, डिजिटल पुस्तक पढ्न र अभ्यासका प्रश्नहरू समाधान गर्न सक्छन्। शिक्षकहरूले प्रस्तुति, भिडियो र विभिन्न शैक्षिक सामग्री प्रयोग गरेर पाठलाई रोचक बनाउन सक्छन्। कार्यालयमा कर्मचारीहरूले पत्र लेख्न, हिसाब राख्न र प्रतिवेदन तयार गर्न कम्प्युटर प्रयोग गर्छन्। स्वास्थ्य क्षेत्रमा आधुनिक उपकरणले रोग पहिचान र उपचारमा सहयोग पुर्‍याउँछन्।",
        "तर प्रविधिको अत्यधिक प्रयोगले केही समस्या पनि निम्त्याउन सक्छ। मोबाइलमा धेरै समय बिताउँदा पढाइ, निन्द्रा र पारिवारिक सम्बन्धमा असर पर्न सक्छ। इन्टरनेटमा गलत सूचना, ठगी र व्यक्तिगत विवरण चोरी हुने जोखिम पनि हुन्छ। त्यसैले प्रविधि प्रयोग गर्दा सावधानी अपनाउनु आवश्यक छ। बलियो पासवर्ड राख्ने, अपरिचित लिङ्क नखोल्ने र व्यक्तिगत जानकारी जथाभावी साझा नगर्ने बानी बसाल्नुपर्छ।",
        "प्रविधि आफैँमा राम्रो वा नराम्रो हुँदैन; यसको प्रभाव प्रयोग गर्ने व्यक्तिमा निर्भर हुन्छ। सही उद्देश्यका लागि यसको उपयोग गरेमा नयाँ अवसर सिर्जना गर्न सकिन्छ। आधुनिक संसारमा सफल हुन डिजिटल सीप, सिर्जनात्मक सोच र निरन्तर सिक्ने बानी आवश्यक छन्। प्रविधिलाई आफ्नो सहयोगी बनाएर जीवनलाई सुरक्षित, सरल र उत्पादनशील बनाउन सकिन्छ।",
      ],
    },
    englishTyping: {
      title: "2. English Typing",
      paragraphs: [
        `Every morning, Suman opened his small shop at exactly 6:00 a.m. The shop stood beside a busy road and sold groceries, stationery, snacks, and household items. Although the business was small, Suman treated every customer with kindness and respect. He arranged the products neatly, checked their prices, and kept the shop clean. One rainy afternoon, a woman came to buy rice, sugar, cooking oil, and a few other items. After paying for her purchases, she accidentally left her purse on the counter.`,
        `Suman noticed it immediately and called after her, "Excuse me! You have forgotten something!" The woman turned around and looked surprised. Suman simply smiled and returned to arranging the shelves. He did not expect a reward because he believed that honesty was part of his responsibility. Gradually, his reputation spread throughout the neighbourhood. People trusted him because he never cheated anyone, sold damaged products knowingly, or charged unfair prices. Customers often recommended his shop to their friends and relatives. As the business grew, Suman began selling additional products and employed a young assistant.`,
        `He taught the assistant three important rules: treat customers politely, maintain accurate records, and always tell the truth. Years later, his little shop became a successful business. Suman understood that success did not depend only on profit; it also depended on trust, service, and good character. His story demonstrated that small acts of honesty can create lasting benefits.`,
      ],
    },
    wordTasks: {
      title: "3. Perform the following tasks in word:",
      tasks: [
        "Set the paper size to A4 and margins to 1 inch.",
        "Apply a 3-line Drop Cap to the first paragraph.",
        "Apply a first-line indent of 0.5 inch to the second paragraph.",
        "Change the “recommended” to uppercase.",
        "Add a title and apply title Heading style to the title.",
        "Insert a table of contents at the top.",
        "Insert a watermark containing the text Public Service Commission",
        "Insert a footer containing date and page number.",
        "Insert the following diagram:",
      ],
      specialElement: "cycle-diagram",
    },
    excelTasks: {
      title: "4. Perform the following tasks in Excel.",
      table: {
        headers: ["Particulars", "Value"],
        rows: [
          ["Selling Price per Unit", "2,500"],
          ["Cost per Unit", "1,600"],
          ["Units Sold", "500"],
          ["Total Revenue", "Formula"],
          ["Total Cost", "Formula"],
          ["Profit", "Formula"],
        ],
      },
      instructions: [
        "1. Calculate total revenue, total cost, and profit.",
        "2. Create three scenarios using Scenario Manager to compare profit:",
      ],
    },
    powerPointTasks: {
      title: "5. Perform the following tasks in PowerPoint.",
      tasks: [
        "Create 3 slides on “Student Academic Performance.”",
        "Insert a table showing 3 students and their marks then add a chart based on the marks.",
      ],
      table: {
        headers: ["S.N.", "Student Name", "English", "Mathematics", "Computer"],
        rows: [
          [1, "Ram", 75, 85, 90],
          [2, "Sita", 88, 78, 95],
          [3, "Hari", 65, 70, 80],
        ],
      },
    },
    accessTasks: {
      title: "6. Perform the following tasks in MS Access",
      tasks: [
        "1. Create a table named Product with fields ProductID, ProductName, Quantity, and Price.",
        "2. Enter details of 5 products.",
        "3. Create a query to display products with a quantity less than 10.",
        "4. Create a calculated field in a query named TotalAmount using the formula: TotalAmount: [Quantity]*[Price]",
      ],
    },
  },

  // ── 4th Level Set 5 ──────────────────────────────────────────────────
  {
    id: "l4-5",
    level: "4th",
    setNumber: 5,
    title: "Practical-set 5",
    nepaliTyping: {
      title: "1. नेपाली टाइपिंग",
      paragraphs: [
        "नेपाल प्राकृतिक सुन्दरताले भरिएको देश हो। यहाँ अग्ला हिमाल, हरिया पहाड, फराकिला तराईका मैदान, स्वच्छ नदी र सुन्दर तालहरू छन्। विश्वको सर्वोच्च शिखर सगरमाथा नेपालमै अवस्थित छ। हिमालको सेतो हिउँ, पहाडको हरियाली र तराईका उर्वर खेतहरूले नेपालको प्राकृतिक विविधता देखाउँछन्। यहाँको भौगोलिक बनावटले विभिन्न प्रकारका वनस्पति, जनावर र चराचुरुङ्गीलाई बासस्थान प्रदान गरेको छ।",
        "नेपालका विभिन्न स्थानमा पर्यटकहरू प्रकृतिको आनन्द लिन आउँछन्। पोखराका तालहरू, चितवनका वन, लुम्बिनीको शान्त वातावरण र हिमाली क्षेत्रका पदमार्गहरू पर्यटकका लागि आकर्षणका केन्द्र हुन्। पदयात्रा, पर्वतारोहण, वन्यजन्तु अवलोकन र सांस्कृतिक भ्रमणले पर्यटन व्यवसायलाई सहयोग पुर्‍याउँछन्। पर्यटनबाट स्थानीय मानिसहरूले रोजगारी र आम्दानी प्राप्त गर्न सक्छन्।",
        "प्राकृतिक सम्पदा हाम्रो अमूल्य धन हो। तर वन विनाश, प्रदूषण, अव्यवस्थित निर्माण र फोहोरका कारण वातावरणमा नकारात्मक असर परिरहेको छ। नदीमा फोहोर फाल्नु, वनमा आगो लगाउनु र जथाभावी रूख काट्नुले प्रकृतिको सन्तुलन बिगार्न सक्छ। जलवायु परिवर्तनका कारण हिमालको हिउँ, पानीका स्रोत र कृषि प्रणालीमा समेत प्रभाव पर्न सक्छ।",
        "प्रकृतिको संरक्षण गर्नु सरकारको मात्र जिम्मेवारी होइन। प्रत्येक नागरिकले आफ्नो घर, विद्यालय र समुदाय सफा राख्नुपर्छ। रूख रोप्ने, पानी बचाउने, प्लास्टिकको प्रयोग घटाउने र वन्यजन्तुको संरक्षण गर्ने काममा सबै सहभागी हुनुपर्छ। प्राकृतिक सुन्दरता जोगाउन सकेमा भावी पुस्ताले पनि यसको आनन्द लिन पाउनेछन्। स्वच्छ वातावरण स्वस्थ जीवनको आधार हो।",
      ],
    },
    englishTyping: {
      title: "2. English Typing",
      paragraphs: [
        `Technology has changed the way people communicate, study, travel, and work. In the past, sending a message to someone living far away could take several days; today, a text message or email can arrive within seconds. Students can attend online classes, download educational materials, and practise new skills using computers or smartphones. Businesses use digital tools to manage records, communicate with customers, and improve productivity. Hospitals use modern equipment to examine patients, while banks provide online services that allow customers to transfer money without visiting a branch. These developments have made many everyday activities faster and more convenient. However, technology also has disadvantages. Excessive screen time may affect sleep, concentration, and physical activity. Some people share personal information online without understanding the risks—this can create serious problems! Cybercriminals may use fake messages, suspicious links, or fraudulent websites to steal information. Therefore, users should create strong passwords, enable security features, and avoid sharing confidential details with strangers. Parents and teachers should also help children develop responsible digital habits. "Use technology as a tool, not as a replacement for real life," my teacher often says. It is important to spend time outdoors, exercise regularly, and maintain meaningful relationships with family and friends. Technology is neither completely good nor completely bad; its impact depends on how people use it.`,
      ],
    },
    wordTasks: {
      title: "3. Perform the following tasks in word.",
      tasks: [
        "1. Insert the following pyramid chart.",
        "2. Insert the following equation: x = (-b ± √(b² - 4ac)) / 2a",
        "3. Insert the following symbol with system date and Time: ® ™ © 10/30/2026 11:48 AM",
        "4. Insert the following list with custom bullets.",
      ],
      specialElement: "pyramid-equation",
    },
    excelTasks: {
      title: "4. Perform the following tasks in Excel.",
      table: {
        headers: ["Product", "2025 Sales", "2026 sales"],
        rows: [
          ["Laptop", "150,000", "120,000"],
          ["Desktop", "100,000", "150,000"],
          ["Printer", "45,000", "80,000"],
          ["Keyboard", "20,000", "60,000"],
        ],
      },
      instructions: [
        "1. Create a worksheet named Consolidated Report.",
        "2. Use Data → Consolidate to calculate total sales of each product across all three branches.",
        "3. Use the Sum function.",
        "4. Link the consolidated data to the source data.",
        "5. Format the final report as a professional sales summary.",
      ],
    },
    powerPointTasks: {
      title: "5. Perform the following tasks in PowerPoint.",
      tasks: [
        "1. Create 3 slides on “My Small Business.”",
        "2. Insert your business logo, use a suitable theme, and add a hyperlink to your business website.",
      ],
    },
    accessTasks: {
      title: "6. Perform the following tasks in MS Access",
      tasks: [
        "1. Create a table named ExamResult with fields RollNo, StudentName, Marks, and ExamDate.",
        "2. Set RollNo as the Primary Key.",
        "3. Set a validation rule for Marks so that only values from 0 to 100 are accepted.",
        "4. Set StudentName as a Required field and save the table.",
      ],
    },
  },

  // ── 4th Level Set 6 ──────────────────────────────────────────────────
  {
    id: "l4-6",
    level: "4th",
    setNumber: 6,
    title: "Practical-set 6",
    nepaliTyping: {
      title: "1. नेपाली टाइपिंग",
      paragraphs: [
        "समय मानिसको जीवनमा सबैभन्दा मूल्यवान् सम्पत्तिमध्ये एक हो। हराएको पैसा फेरि कमाउन सकिन्छ, तर बितिसकेको समय फर्काउन सकिँदैन। त्यसैले समयको महत्त्व बुझेर प्रत्येक काम उचित समयमा गर्नु आवश्यक छ। विद्यार्थी, कर्मचारी, व्यवसायी र किसान सबैका लागि समय व्यवस्थापन उपयोगी हुन्छ। विद्यार्थीले दैनिक अध्ययनको तालिका बनाउनुपर्छ। कुन समयमा पढ्ने, गृहकार्य गर्ने, खेल्ने र आराम गर्ने भन्ने कुरा पहिल्यै निर्धारण गर्दा काम व्यवस्थित हुन्छ। परीक्षाको अन्तिम समयमा मात्र पढ्ने बानीले तनाव बढाउन सक्छ। त्यसैले प्रत्येक दिन थोरै भए पनि नियमित अभ्यास गर्नु राम्रो हुन्छ। कम्प्युटरमा टाइपिंग सिक्ने व्यक्तिले पनि दैनिक अभ्यासका लागि निश्चित समय छुट्याउनुपर्छ।",
        "समयको सदुपयोग गर्नु भनेको दिनभरि काम मात्र गरिरहनु होइन। पर्याप्त आराम, मनोरञ्जन र परिवारसँग बिताउने समय पनि आवश्यक हुन्छ। शरीर र मन स्वस्थ राख्न काम र विश्रामबीच सन्तुलन हुनुपर्छ। अनावश्यक रूपमा सामाजिक सञ्जाल चलाउने वा उद्देश्यविना समय बिताउने बानीलाई नियन्त्रण गर्नुपर्छ।",
        "कुनै काम सुरु गर्नुअघि त्यसको प्राथमिकता निर्धारण गर्नु उपयोगी हुन्छ। महत्त्वपूर्ण काम पहिले पूरा गर्दा अन्य कामका लागि समय व्यवस्थापन गर्न सजिलो हुन्छ। दैनिक कामको सूची बनाउने र पूरा भएका काममा चिह्न लगाउने बानीले आत्मविश्वास बढाउँछ। साना उपलब्धिहरूले ठूलो लक्ष्यतर्फ अघि बढ्न प्रेरणा दिन्छन्।",
        "समयको सही उपयोग गर्ने व्यक्तिले आफ्नो सीप विकास गर्न, नयाँ ज्ञान प्राप्त गर्न र जीवनमा प्रगति गर्न सक्छ। त्यसैले आज गर्न सकिने काम भोलिका लागि अनावश्यक रूपमा सार्नु हुँदैन। प्रत्येक दिनलाई नयाँ अवसरका रूपमा लिएर सकारात्मक काममा समय खर्च गर्नुपर्छ।",
      ],
    },
    englishTyping: {
      title: "2. English Typing",
      paragraphs: [
        `One afternoon, a young boy named Arjun found a wallet near the entrance of a shopping centre. He picked it up and noticed that it contained money, several bank cards, and a small identity card. His friend looked at the wallet and said, "Nobody saw you pick it up; you could keep the money!" Arjun immediately shook his head. "That would be wrong. Someone must be worried about losing it," he replied. Instead of keeping the wallet, he walked toward the security office and explained where he had found it. The security guard checked the identity card and contacted the owner. After a few minutes, an elderly man arrived, looking extremely anxious. When the guard returned his wallet, the man exclaimed, "Thank goodness! I thought I had lost everything!" He checked the contents and confirmed that nothing was missing. The man offered Arjun a reward, but the boy politely refused. "I did not return it for money; I simply wanted to do the right thing," he explained. The elderly man smiled and said, "Your honesty is worth more than gold." Before leaving, he thanked Arjun and praised his good character. Later that evening, Arjun told his parents what had happened. They were proud of their son and encouraged him to continue making responsible decisions. His father explained that honesty builds trust, strengthens relationships, and creates a good reputation. Sometimes, doing the right thing may seem difficult, especially when nobody is watching.`,
        `However, true character is revealed by the choices we make in private. Arjun learned that honesty brings something more valuable than money—it brings peace of mind and self-respect.`,
      ],
    },
    wordTasks: {
      title: "3. Perform the following tasks in MS Word.",
      tasks: [
        "Copy the contents of question No. 2 and save the document as Q01.docx.",
        "Insert a header with the text Modern Technology on the first page and Its Benefits on the second page. Use a section break to separate the pages.",
        "Convert the second paragraph into three columns and add a line between the columns.",
        "Set the spacing after the first paragraph to 1.5 cm and the spacing before the third paragraph to 2 cm.",
        "Apply the Heading 1 style to the main heading and give the heading a suitable title.",
        "Insert a suitable picture and add the caption as Figure 1.",
      ],
    },
    excelTasks: {
      title: "4. Perform the following tasks in Excel.",
      table: {
        headers: ["Employee", "Department", "Salary"],
        rows: [
          ["Ram", "HR", "30,000"],
          ["Sita", "IT", "45,000"],
          ["Hari", "HR", "32,000"],
          ["Gita", "Finance", "38,000"],
          ["Shyam", "IT", "50,000"],
          ["Mina", "Finance", "40,000"],
          ["Raju", "HR", "35,000"],
        ],
      },
      instructions: [
        "1. Sort the data by Department.",
        "2. Use Data → Subtotal to calculate total salary for each department.",
        "3. Replace the Sum function with Average to calculate average salary by department.",
        "4. Use the outline controls to display only department totals.",
        "5. Remove the subtotals after completing the exercise.",
      ],
    },
    powerPointTasks: {
      title: "5. Perform the following tasks in PowerPoint.",
      tasks: [
        "Create a presentation of 3 slides on “Importance of Computers.”",
        "Using Slide Master, add your name in the footer and apply the same background-colour and font style to all slides.",
      ],
    },
    accessTasks: {
      title: "6. Perform the following tasks in MS access",
      tasks: [
        "1. Create a table named Staff with fields StaffID, StaffName, Department, and Salary.",
        "2. Enter 5 staff records.",
        "3. Create a query to display only staff members working in the \"HR\" department.",
      ],
    },
  },

  // ── 4th Level Set 7 ──────────────────────────────────────────────────
  {
    id: "l4-7",
    level: "4th",
    setNumber: 7,
    title: "Practical-set 7",
    nepaliTyping: {
      title: "1. नेपाली टाइपिंग",
      paragraphs: [
        "मानिस सामाजिक प्राणी हो र उसलाई जीवनमा साथ दिने साथीहरूको आवश्यकता पर्छ। असल साथीले सुखमा खुसी बाँड्छ र दुःखमा साथ दिन्छ। साथीहरूसँग बिताएको समयले जीवनलाई रमाइलो बनाउनुका साथै नयाँ कुरा सिक्ने अवसर पनि प्रदान गर्छ। विद्यालय, कलेज, कार्यालय र समुदायमा मानिसहरूले विभिन्न व्यक्तिसँग मित्रता गाँस्छन्। तर असल मित्रता बनाउन विश्वास, इमानदारी र आपसी सम्मान आवश्यक हुन्छ।",
        "एउटा असल साथीले गल्ती गर्दा सही सुझाव दिन्छ। उसले साथीको कमजोरीको मजाक उडाउनुभन्दा सुधार गर्न प्रोत्साहन गर्छ। पढाइमा समस्या पर्दा साथीहरूले एकअर्कालाई विषय बुझाउन र अभ्यास गर्न सहयोग गर्न सक्छन्। खेलकुद, सिर्जनात्मक काम र समूह परियोजनामा पनि साथीहरूको सहकार्य महत्त्वपूर्ण हुन्छ। मिलेर काम गर्दा नयाँ विचारहरू जन्मिन्छन् र कठिन काम पनि सजिलो हुन्छ।",
        "तर सबै मित्रता सधैँ लाभदायक हुँदैनन्। गलत संगतले नराम्रो बानी सिकाउन सक्छ। अरूलाई धोका दिने, झूट बोल्ने वा अनुचित काम गर्न दबाब दिने व्यक्तिबाट सावधान रहनुपर्छ। राम्रो साथी छान्दा उसको व्यवहार, सोचाइ र अरूप्रतिको सम्मानलाई ध्यान दिनुपर्छ। मित्रतामा आफ्नो विचार व्यक्त गर्ने स्वतन्त्रता पनि हुनुपर्छ।",
        "साथीबीच कहिलेकाहीँ असमझदारी उत्पन्न हुन सक्छ। यस्तो अवस्थामा रिसाएर सम्बन्ध तोड्नुभन्दा शान्त भएर कुरा गर्नु राम्रो हुन्छ। साँचो मित्रता उमेर, दूरी वा आर्थिक अवस्थाले मात्र निर्धारण गर्दैन। एकअर्काको भावना बुझ्ने र कठिन समयमा सहयोग गर्ने मानिस नै असल साथी हुन्। त्यसैले हामीले साथीहरूको सम्मान गर्नुपर्छ र उनीहरूसँग इमानदार व्यवहार गर्नुपर्छ। असल मित्रता जीवनको सुन्दर उपहार हो।",
      ],
    },
    englishTyping: {
      title: "2. English typing",
      paragraphs: [
        `Maya planned a short trip to visit her aunt, who lived in a peaceful village near the mountains. She packed her clothes, a notebook, some snacks, and a water bottle the previous evening. Her bus was scheduled to leave at 7:30 a.m., so she woke up early and reached the station on time. Unfortunately, the bus arrived almost forty minutes late. "Oh no! Will I reach the village before sunset?" she wondered. Finally, the passengers boarded the bus, and the journey began. Outside the window, green fields, small houses, flowing rivers, and distant hills created a beautiful scene.`,
        `Maya enjoyed watching farmers working in their fields and children playing beside the road. Suddenly, the driver stopped the bus and announced, "There is a fallen tree ahead; we must wait until the road is cleared." Some passengers became impatient, while others stepped outside to enjoy the fresh air. Maya took out her notebook and began writing about the journey. She described the weather, the landscape, and the conversations she had heard inside the bus. After approximately an hour, workers cleared the road, and the journey continued.`,
        `Although Maya arrived later than expected, her aunt welcomed her with a warm smile and a delicious meal. During dinner, Maya shared the story of her unusual journey. Everyone laughed when she described the impatient passengers and the enormous tree blocking the road. She realized that travel was not only about reaching a destination; it was also about discovering new places and creating unforgettable memories. Sometimes, unexpected delays make the best stories!`,
      ],
    },
    wordTasks: {
      title: "3. Perform the following tasks in MS Word.",
      tasks: [
        "Apply a page border using a box style and choose a suitable border color.",
        "Apply a bottom border to the first paragraph and light-blue shading to the second paragraph.",
        "Turn on Track Changes, delete the word “landscape” wherever it appears, and display the deletion in balloons.",
        "Insert a page break before the third paragraph and add a footer containing the text Environmental Awareness.",
        "Insert a suitable picture and add the caption Figure 1.",
        "Change the document's page orientation to Landscape.",
      ],
    },
    excelTasks: {
      title: "4. Perform the following tasks in Excel:",
      table: {
        headers: ["Roll No.", "Student Name", "English", "Maths", "Science", "Computer"],
        rows: [
          [1, "Ram", 76, 85, 68, 90],
          [2, "Sita", 88, 92, 79, 95],
          [3, "Hari", 45, 38, 56, 62],
          [4, "Gita", 65, 72, 81, 75],
          [5, "Rohan", 32, 41, 29, 55],
        ],
      },
      instructions: [
        "1. Calculate the total marks obtained by each student.",
        "2. Calculate the percentage, assuming each subject carries 100 marks.",
        "3. Display PASS if every subject mark is at least 40; otherwise display fail.",
        "4. Calculate the division using these rules:",
        "   • 80% and above: Distinction",
        "   • 60% and above: First Division",
        "   • 45% and above: Second Division",
        "   • 40% and above: Third Division",
        "   • Below 40%: Fail",
        "5. Apply conditional formatting to highlight failed students in red.",
        "6. Sort students by percentage in descending order.",
      ],
    },
    powerPointTasks: {
      title: "5. Perform the following tasks in PowerPoint",
      tasks: [
        "Create a presentation of 3 slides on “Computer Fundamentals.”",
        "Insert Next Slide, Previous Slide, Home, and End action buttons and configure them to navigate between slides during the slide show.",
      ],
    },
    accessTasks: {
      title: "6. Perform the following tasks in MS Access.",
      table: {
        headers: ["DeptID (Primary Key)", "DeptName"],
        rows: [
          [1, "HR"],
          [2, "IT"],
          [3, "Accounts"],
        ],
      },
      secondTableTitle: "Employee table",
      secondTable: {
        headers: ["EmpID (Primary Key)", "EmpName", "DeptID"],
        rows: [
          [101, "Ram", 1],
          [102, "Sita", 2],
          [103, "Hari", 1],
          [104, "Gita", 3],
        ],
      },
      tasks: [
        "Task 1: Create two tables Department table and Employee table.",
        "1. Create a one-to-many relationship between the two tables using DeptID.",
        "2. Enable referential integrity.",
        "3. Create a query displaying employee names and their department names.",
      ],
    },
  },

  // ── 4th Level Set 8 ──────────────────────────────────────────────────
  {
    id: "l4-8",
    level: "4th",
    setNumber: 8,
    title: "Practical-set 8",
    nepaliTyping: {
      title: "1. नेपाली टाइपिंग",
      paragraphs: [
        "पुस्तक मानिसको ज्ञान र अनुभव बढाउने महत्त्वपूर्ण माध्यम हो। पुस्तक पढेर हामी नयाँ विषयबारे जानकारी प्राप्त गर्न सक्छौँ र संसारलाई फरक दृष्टिकोणबाट बुझ्न सक्छौँ। कथा, उपन्यास, जीवनी, इतिहास, विज्ञान र यात्रा विवरणजस्ता विभिन्न विधाका पुस्तकहरूले फरक किसिमको ज्ञान दिन्छन्। नियमित पढ्ने बानीले भाषिक क्षमता, कल्पनाशक्ति र सोच्ने क्षमताको विकास गर्छ।",
        "बालबालिकालाई सानै उमेरदेखि पुस्तक पढ्ने वातावरण दिनुपर्छ। अभिभावकले घरमा किताब राख्ने र छोराछोरीसँग कथा पढ्ने बानी बसाल्न सक्छन्। विद्यालयमा पुस्तक पढ्ने बानीले शब्दभण्डार बढाउँछ। नयाँ शब्दको अर्थ खोज्ने र त्यसलाई वाक्यमा प्रयोग गर्ने अभ्यासले लेखन क्षमता सुधार गर्छ। नेपाली भाषामा राम्रोसँग लेख्न चाहने व्यक्तिले विभिन्न लेखकका कथा, निबन्ध र लेख पढ्न सक्छ। त्यसैगरी अंग्रेजी भाषा सिक्ने व्यक्तिले आफ्नो स्तरअनुसारका पुस्तक रोज्न सक्छ। नियमित अभ्यासले भाषाको प्रयोगमा आत्मविश्वास बढाउँछ।",
        "पुस्तकले हामीलाई अरू मानिसका अनुभवबाट सिक्ने अवसर दिन्छ। सफल व्यक्तिहरूको जीवनी पढ्दा मेहनत र धैर्यको महत्त्व बुझ्न सकिन्छ। इतिहासका पुस्तकले विगतका घटनाबाट शिक्षा दिन्छन् भने विज्ञानका पुस्तकले नयाँ आविष्कारबारे जानकारी गराउँछन्। त्यसैले दैनिक केही समय पुस्तक पढ्न छुट्याउनु जीवनभर लाभदायक हुने बानी हो।",
      ],
    },
    englishTyping: {
      title: "2. English typing",
      paragraphs: [
        `Time is one of the most valuable resources in human life. Money can be earned again, and lost objects can sometimes be recovered; however, a wasted moment never returns. Successful students and professionals understand this simple truth. They prepare daily schedules, set realistic goals, and complete important tasks on time.`,
        `For example, a student who studies for two hours every day may perform better than someone who studies for ten hours only before an examination. "Do not wait for the perfect moment—start with what you have!" is useful advice for anyone who wants to improve.`,
        `Good time management begins with identifying priorities. Difficult and important tasks should receive attention before less important activities. It is also necessary to avoid unnecessary distractions, such as excessive social media use, television, and mobile games. Of course, taking breaks is equally important; continuous work can cause tiredness and reduce concentration. A balanced routine should include study, exercise, meals, sleep, and recreation. Students can maintain a notebook or digital calendar to record deadlines, assignments, and examination dates. At the end of each day, they should review their achievements and prepare a plan for tomorrow. Sometimes, unexpected events may interrupt a schedule, but there is no need to panic! A flexible plan is better than a perfect plan that cannot be followed. Remember these three rules: plan carefully, act consistently, and review your progress. Time management is not about being busy every minute—it is about using each minute wisely.`,
      ],
    },
    wordTasks: {
      title: "3. Perform the following tasks in MS word.",
      tasks: [
        "Apply appropriate heading styles and insert an automatic table of contents.",
        "Insert a bookmark named SecurityTips at the beginning of the third paragraph.",
        "Insert a hyperlink on the words “excessive” that jumps to the bookmark.",
        "Insert a page break before the third paragraph and change that page to Landscape using section breaks.",
        "Insert a picture with the caption Figure 1.",
        "Add a header and footer, then insert page numbers.",
      ],
    },
    excelTasks: {
      title: "4. Perform the following tasks in Excel.",
      table: {
        headers: ["Emp ID", "Employee Name", "Basic Salary", "Allowance", "Overtime", "Deduction"],
        rows: [
          ["E01", "Ram", "25000", "3000", "2000", "1500"],
          ["E02", "Sita", "30000", "4000", "1500", "2000"],
          ["E03", "Hari", "22000", "2500", "1000", "1000"],
          ["E04", "Gita", "35000", "5000", "3000", "2500"],
          ["E05", "Mina", "28000", "3500", "1800", "1200"],
        ],
      },
      instructions: [
        "1. Calculate gross salary = Basic Salary + Allowance + Overtime.",
        "2. Calculate net salary = Gross Salary − Deduction.",
        "3. Calculate the average net salary.",
        "4. Find the maximum and minimum net salary.",
        "5. Calculate total salary paid to all employees.",
        "6. Use conditional formatting to highlight employees earning more than Rs. 35,000 net.",
        "7. Sort employees by net salary from highest to lowest.",
      ],
    },
    powerPointTasks: {
      title: "5. Perform the following tasks in PowerPoint.",
      tasks: [
        "Create a presentation of 5 slides on “Tourism in Nepal.”",
        "Create a Custom Slide Show named Tourism Highlights that displays only slides 1, 3, and 5.",
      ],
    },
    accessTasks: {
      title: "6. Perform the following tasks in MS Access.",
      tasks: [
        "1. Create a table named Customer with fields CustomerID, CustomerName, Address, and Phone.",
        "2. Enter 5 customer records.",
        "3. Create a form using the Form Wizard.",
        "4. Apply a suitable title and formatting to the form.",
      ],
    },
  },

  // ── 4th Level Set 9 ──────────────────────────────────────────────────
  {
    id: "l4-9",
    level: "4th",
    setNumber: 9,
    title: "Practical-set 9",
    nepaliTyping: {
      title: "1. नेपाली टाइपिंग",
      paragraphs: [
        "आत्मनिर्भर हुनु भनेको आफ्नो आवश्यकता पूरा गर्न सक्ने क्षमता विकास गर्नु हो। आत्मनिर्भर व्यक्तिले आफ्नो जिम्मेवारी बुझ्छ र समस्या पर्दा समाधान खोज्ने प्रयास गर्छ। आत्मनिर्भर बन्नका लागि ज्ञान, सीप, मेहनत र आत्मविश्वास आवश्यक हुन्छ। मानिसले आफ्नो रुचि र क्षमताअनुसार नयाँ कुरा सिक्दै गएमा जीवनमा विभिन्न अवसर प्राप्त गर्न सक्छ।",
        "विद्यार्थी जीवनदेखि नै आत्मनिर्भर बन्ने बानी विकास गर्न सकिन्छ। आफ्नो गृहकार्य आफैँ गर्ने, समयको व्यवस्थापन गर्ने र दैनिक काममा जिम्मेवार बन्ने अभ्यास उपयोगी हुन्छ। कुनै विषय बुझ्न कठिन भएमा पहिले आफैँ प्रयास गर्नुपर्छ र आवश्यक पर्दा शिक्षक वा साथीको सहयोग लिनुपर्छ। यसरी सिक्दा समस्या समाधान गर्ने क्षमता बढ्छ।",
        "आजको समयमा कम्प्युटर र डिजिटल सीपले आत्मनिर्भर बन्न सहयोग पुर्‍याउँछन्। टाइपिंग, दस्तावेज तयार गर्ने, स्प्रेडसिट प्रयोग गर्ने र वेबसाइट बनाउने जस्ता सीप सिकेर विभिन्न काम गर्न सकिन्छ। आफ्नो ज्ञान र अनुभवका आधारमा व्यक्तिगत परियोजना तयार गर्न पनि सकिन्छ। निरन्तर अभ्यास र नयाँ प्रविधिबारे जानकारी लिने बानीले सीपलाई समयअनुसार उपयोगी बनाइराख्छ।",
        "आर्थिक आत्मनिर्भरता प्राप्त गर्न आम्दानी र खर्चको हिसाब राख्ने, अनावश्यक खर्च घटाउने र भविष्यका लागि बचत गर्ने बानी उपयोगी हुन्छ। त्यसैगरी इमानदारी र अनुशासनले मानिसको व्यक्तित्व बलियो बनाउँछन्। आत्मनिर्भर व्यक्तिले आफ्नो विकाससँगै परिवार र समाजको हितमा पनि योगदान दिन सक्छ। त्यसैले नयाँ सीप सिक्ने, मेहनत गर्ने र आफ्नो क्षमतामा विश्वास राख्ने बानी बसाल्नुपर्छ।",
      ],
    },
    englishTyping: {
      title: "2. English typing",
      paragraphs: [
        `Last Monday, our teacher took us to the computer lab for practical training. Every student was assigned a computer, a keyboard, a mouse, and a notebook. Before beginning the lesson, our teacher explained the importance of proper sitting posture and correct finger placement. "Today, we will learn how to type accurately and use common keyboard shortcuts," she announced. First, we practised typing a short paragraph without looking at the keyboard. Some students made several mistakes, while others typed surprisingly quickly. Our teacher reminded us, "Do not worry about speed at first; accuracy is more important!" Next, we learned useful shortcuts: Ctrl+C (copy), Ctrl+V (paste), Ctrl+S (save), and Ctrl+P (print). We also practised creating folders, renaming files, and saving documents in the correct location. One student accidentally deleted his entire paragraph—what a disaster! Fortunately, he recovered the text by using the Undo command. After that, we opened a word-processing program and typed a short letter. We used capital letters, commas, quotation marks, brackets, and other punctuation symbols. At the end of the class, everyone saved their work in a folder named "Typing Practice." Our teacher checked each document and suggested ways to improve our performance. Before leaving, she said, "Remember, regular practice creates confidence." The lesson was both interesting and practical; we learned skills that would help us in examinations, office work, and everyday computer use.`,
      ],
    },
    wordTasks: {
      title: "3. Perform the following task in MS Word.",
      tasks: [
        "1. Create a table with the following data and save it as table.docx.",
        "2. Apply a suitable table style and shade the header row.",
        "3. Design a result letter using the following template text:",
        "4. Use Mail Merge to generate a separate result letter for each student.",
        "5. Add the school name in the header and page number in the footer.",
        "6. Save the merged letters as ResultLetters.docx.",
      ],
      table: {
        headers: ["Student Name", "Roll No.", "Address", "Result"],
        rows: [
          ["Ramesh Yadav", "101", "Birgunj", "Pass"],
          ["Sushma Thapa", "102", "Kathmandu", "Pass"],
          ["Bikash Shah", "103", "Janakpur", "Fail"],
          ["Pooja Karki", "104", "Pokhara", "Pass"],
        ],
      },
      specialLetterSnippet: `Dear [Student Name],\nWe are pleased to inform you that your examination result is [Result]. Your roll number is [Roll No.], and your registered address is [Address].`,
    },
    excelTasks: {
      title: "4. Perform the following tasks in Excel.",
      table: {
        headers: ["Emp ID", "Name", "Basic Salary", "Overtime Hours", "Bonus %", "Deduction"],
        rows: [
          ["101", "Raj", "25000", "10", "10%", "2000"],
          ["102", "Sita", "30000", "8", "15%", "2500"],
          ["103", "Hari", "22000", "12", "8%", "1500"],
          ["104", "Gita", "28000", "6", "12%", "1800"],
          ["105", "Mina", "35000", "15", "20%", "3000"],
        ],
      },
      instructions: [
        "1. Overtime rate = Rs. 200 per hour.",
        "2. Bonus = Basic Salary × Bonus Percentage.",
        "3. Gross Earnings = Basic Salary + Overtime Pay + Bonus.",
        "4. Net Earnings = Gross Earnings − Deduction.",
      ],
    },
    powerPointTasks: {
      title: "5. Perform the following tasks in PowerPoint",
      tasks: [
        "Create a presentation of 3 slides on “Uses of the Internet.”",
        "Insert a hyperlink on the text “Visit Google” that opens https://www.google.com.",
      ],
    },
    accessTasks: {
      title: "6. Perform the following tasks in MS Access.",
      tasks: [
        "1. Create a table named StudentMarks with fields RollNo, StudentName, English, Maths, and Computer.",
        "2. Enter records of 5 students.",
        "3. Create a query with these calculated fields:",
        "   a. Total: [English]+[Maths]+[Computer]",
        "   b. Percentage: ([English]+[Maths]+[Computer])/3",
        "4. Create a form for entering student marks.",
      ],
    },
  },

  // ── 4th Level Set 10 ─────────────────────────────────────────────────
  {
    id: "l4-10",
    level: "4th",
    setNumber: 10,
    title: "Practical-set 10",
    nepaliTyping: {
      title: "1. नेपाली टाइपिंग",
      paragraphs: [
        "वातावरणले पृथ्वीमा रहेका मानिस, जनावर, वनस्पति र अन्य जीवलाई जीवनका लागि आवश्यक आधार प्रदान गर्छ। हामीले सास फेर्ने हावा, पिउने पानी, खानेकुरा र बस्ने ठाउँ सबै वातावरणसँग सम्बन्धित छन्। वातावरण स्वच्छ भएमा मानिसको स्वास्थ्य राम्रो रहन्छ र प्रकृतिको सन्तुलन कायम हुन्छ। तर मानव गतिविधिका कारण आज धेरै स्थानमा प्रदूषण र प्राकृतिक स्रोतको क्षय बढिरहेको छ।",
        "सवारीसाधनबाट निस्कने धुवाँ, उद्योगबाट आउने फोहोर र प्लास्टिकको जथाभावी प्रयोगले वातावरणमा नकारात्मक असर पार्छ। नदी र खोलामा फोहोर फाल्दा पानी दूषित हुन्छ। वन विनाशका कारण जनावरको बासस्थान नष्ट हुन सक्छ र माटोको क्षय बढ्न सक्छ। यस्ता समस्याले मानव जीवनसँगै प्राकृतिक प्रणालीलाई पनि जोखिममा पार्छन्।",
        "वातावरण संरक्षणका लागि साना प्रयासहरू पनि महत्त्वपूर्ण हुन्छन्। घर र विद्यालय वरिपरि सफाइ राख्ने, फोहोरलाई छुट्याएर व्यवस्थापन गर्ने र आवश्यक नभएको बत्ती बन्द गर्ने बानी उपयोगी हुन्छ।",
        "वातावरण संरक्षण कुनै एक दिनको काम होइन। यो निरन्तर गर्नुपर्ने साझा जिम्मेवारी हो। प्रकृतिलाई नोक्सान पुर्‍याउने गतिविधि कम गर्दै स्रोतसाधनको विवेकपूर्ण उपयोग गर्नुपर्छ। हामीले आज वातावरण जोगाउन सकेमा भोलिका पुस्ताले स्वच्छ हावा, सफा पानी र हरियालीले भरिएको पृथ्वी पाउनेछन्। स्वस्थ भविष्य निर्माण गर्न प्रकृतिप्रति जिम्मेवार हुनु आवश्यक छ।",
      ],
    },
    englishTyping: {
      title: "2. English Typing",
      paragraphs: [
        `It was a cold winter morning when Rahul found a small envelope near his front door. The envelope was old, yellow, and slightly damaged. On the front, someone had written, "Open this letter only when you are alone!" Rahul looked around carefully, but nobody was there. He picked up the envelope, entered his room, and slowly opened it. Inside, he discovered a handwritten message that said, "Your grandfather left something valuable beneath the old tree." Rahul was surprised because his grandfather had passed away many years ago. What could the message mean? He remembered that his grandfather had always enjoyed telling mysterious stories about hidden treasures. Without wasting any time, Rahul grabbed a flashlight, put on his shoes, and hurried toward the garden. Beneath a large mango tree, he noticed a small wooden box covered with dry leaves. He carefully removed the leaves and opened the box. Inside, there were several old photographs, a golden watch, and a folded piece of paper. The paper contained another message: "The greatest treasure is not gold, but the memories we share." Rahul smiled as he examined the photographs. They reminded him of the wonderful moments he had spent with his grandfather. Although he had expected to discover something expensive, he realized that family memories were far more valuable.`,
      ],
    },
    wordTasks: {
      title: "3. Perform the following tasks in MS Word.",
      tasks: [
        "1. Copy the above passage into a new Word document.",
        "2. Give the document a suitable title and apply Bold, 16pt font size, center alignment.",
        "3. Select the first paragraph and set its character Scale to 150%.",
        "4. Set the paragraph indentation to 1 inch inside and 1 inch outside using Mirror Indents.",
        "5. Select the second paragraph and set its character Scale to 200%.",
      ],
    },
    excelTasks: {
      title: "4. Perform the following tasks in Excel.",
      table: {
        headers: ["Employee", "Monthly Salary", "Annual Allowance", "Bonus %", "Tax Rate"],
        rows: [
          ["Ram", 25000, 12000, "10%", "5%"],
          ["Sita", 35000, 18000, "15%", "10%"],
          ["Hari", 30000, 15000, "8%", "5%"],
          ["Gita", 40000, 24000, "20%", "10%"],
          ["Mina", 28000, 12000, "12%", "5%"],
        ],
      },
      instructions: [
        "Perform the following tasks:",
        "1. Calculate annual salary.",
        "2. Calculate annual bonus.",
        "3. Calculate gross annual income.",
        "4. Calculate annual tax.",
        "5. Calculate net annual income.",
        "6. Calculate the average net annual income.",
        "7. Use a bar chart to compare employees' net annual income.",
      ],
      rules: [
        "Annual Salary = Monthly Salary × 12.",
        "Annual Bonus = Annual Salary × Bonus Percentage.",
        "Gross Annual Income = Annual Salary + Annual Allowance + Annual Bonus.",
        "Tax = Gross Annual Income × Tax Rate.",
        "Net Annual Income = Gross Annual Income − Tax.",
      ],
    },
    powerPointTasks: {
      title: "5. Perform the following tasks in PowerPoint.",
      tasks: [
        "1. Make a photo album and give loop effect to the photo album.",
        "2. Apply suitable animation and transition.",
      ],
    },
    accessTasks: {
      title: "6. Perform the following tasks in MS Access",
      table: {
        headers: ["Field Name", "Data Type"],
        rows: [
          ["RollNo", "Number (Primary Key)"],
          ["StudentName", "Short Text"],
          ["Address", "Short Text"],
          ["Gender", "Short Text"],
          ["Marks", "Number"],
        ],
      },
      tasks: [
        "1. Create a table named Student.",
        "2. Enter records of 5 students.",
        "3. Create a query to display students who scored more than 60 marks.",
        "4. Create a form to enter student records.",
      ],
    },
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// 5th LEVEL PRACTICAL SETS (Sets 1 to 5)
// ─────────────────────────────────────────────────────────────────────────────
export const level5PracticalSets: PracticalSetData[] = [
  // ── 5th Level Set 1 ──────────────────────────────────────────────────
  {
    id: "l5-1",
    level: "5th",
    setNumber: 1,
    title: "Practical-set 1",
    nepaliTyping: {
      title: "१. नेपाली टाइपिंग",
      paragraphs: [
        "गाउँको बिहान निकै रमाइलो र शान्त हुन्छ। रातभरि परेको शीतले घाँसका पातहरू चम्किरहेका हुन्छन्। पूर्व दिशाबाट सूर्य उदाउन थालेपछि आकाशमा सुनौलो प्रकाश फैलिन्छ। चराचुरुङ्गीहरू रुखका हाँगामा बसेर मीठो आवाज निकाल्न थाल्छन्। किसानहरू आफ्नो दैनिक कामका लागि खेतबारीतिर जान्छन्। कसैले गाईवस्तुलाई घाँस खुवाउँछन् भने कसैले घरको आँगन सफा गर्छन्। गाउँका साना बालबालिका विद्यालय जानका लागि किताब र झोला तयार पार्छन्।",
        "गाउँमा मानिसहरू एकअर्कासँग मिलेर बस्छन्। कसैको घरमा विवाह, पूजा वा अन्य कार्यक्रम हुँदा छिमेकीहरू सहयोग गर्न पुग्छन्। खेतमा धान, मकै, गहुँ र विभिन्न प्रकारका तरकारी लगाइन्छ। वर्षायाममा हरियालीले गाउँको वातावरण अझ सुन्दर बनाउँछ। खोलाको पानी, चिसो हावा र चराहरूको आवाजले मानिसको मन प्रसन्न बनाउँछ। सहरको व्यस्त जीवनभन्दा गाउँको जीवन सरल र प्राकृतिक हुन्छ। यद्यपि गाउँमा स्वास्थ्य, शिक्षा र यातायातका केही समस्या हुन सक्छन्। गाउँको विकासका लागि राम्रो सडक, विद्यालय, अस्पताल र सञ्चार सुविधाको आवश्यकता पर्दछ। गाउँका मानिसहरूले आधुनिक प्रविधिको प्रयोग गर्दै आफ्नो परम्परा पनि जोगाउनुपर्छ। प्रकृतिसँग नजिक रहेर मेहनत गर्ने मानिसहरूले जीवनको वास्तविक आनन्द अनुभव गर्न सक्छन्।",
      ],
    },
    englishTyping: {
      title: "2. English typing",
      paragraphs: [
        `Everyone has dreams, but turning those dreams into reality requires determination, discipline, and hard work. Some people want to become teachers, doctors, engineers, programmers, or successful business owners. Others hope to travel the world, support their families, or serve their communities. Whatever the goal may be, the first step is to believe that progress is possible. However, believing in a dream is not enough; people must also take practical steps toward achieving it. A student who wants to improve English should read regularly, learn new vocabulary, and practise writing. Someone who wishes to become a programmer must study programming languages, solve problems, and build useful projects. The journey may include mistakes, disappointments, and unexpected difficulties. "I will try again!" is a powerful sentence when life becomes challenging. Failure is not necessarily the end of the journey; it can be an opportunity to learn, improve, and begin again.`,
        `For instance, a beginner learning computer programming may encounter errors every day. Instead of becoming discouraged, the learner should identify each mistake, understand its cause, and correct it patiently. Small achievements—such as completing one lesson, solving one problem, or finishing a project—build confidence over time. It is also important to choose supportive friends and learn from experienced people. Comparing our progress with someone else's can create unnecessary pressure; everyone develops at a different pace. Remember these words: success rarely happens overnight. Stay focused, remain curious, and celebrate your progress, even when it seems small. Your future is shaped not only by your dreams, but also by the actions you take today!`,
      ],
    },
    wordTasks: {
      title: "3. Perform the following tasks in MS Word:",
      tasks: [
        "Copy the paragraph into a new document and give it a suitable title, center-align the title and apply a reflection text effect.",
        "Apply Small Caps to “programming”.",
        "Insert a clipart and apply the Tight text-wrapping option.",
        "Divide the 2nd paragraph of the text into two columns and add a line between.",
        "Insert a bookmark named discouraged at the word “discouraged” and create a hyperlink to that bookmark.",
        "Insert a table with 4 columns and 4 rows for Place, Distance, Transport, and Time.",
        "Insert a header containing “Travel Diary” and a footer containing automatic page numbers.",
      ],
    },
    excelTasks: {
      title: "4. Perform the following tasks in Excel.",
      table: {
        headers: ["S.N.", "Employee Name", "Department", "Performance Score"],
        rows: [
          [1, "Raj", "HR", "25%"],
          [2, "Meena", "Accounts", "45%"],
          [3, "Sagar", "IT", "68%"],
          [4, "Priti", "Sales", "82%"],
          [5, "Aman", "HR", "95%"],
          [6, "Rina", "IT", "57%"],
          [7, "Keshav", "Sales", "74%"],
        ],
      },
      instructions: [
        "Use VLOOKUP to assign performance ratings:",
        "1. 0% to below 30%: Poor",
        "2. 30% to below 50%: Average",
        "3. 50% to below 70%: Good",
        "4. 70% to below 85%: Very Good",
        "5. 85% to 100%: Excellent",
      ],
    },
    powerPointTasks: {
      title: "5. Perform the following tasks in PowerPoint.",
      tasks: [
        "Create a presentation of 3 slides on the topic “Operating System.” Include your Definition, uses, types, and examples.",
        "Apply a suitable theme, insert a picture, and add slide transitions.",
      ],
    },
    accessTasks: {
      title: "6. Perform the following tasks in MS Access",
      table: {
        headers: ["Field Name", "Data Type"],
        rows: [
          ["RollNo", "Number (Primary Key)"],
          ["StudentName", "Short Text"],
          ["Address", "Short Text"],
          ["Gender", "Short Text"],
          ["Marks", "Number"],
        ],
      },
      tasks: [
        "1. Create a table named Student.",
        "2. Enter records of 5 students.",
        "3. Create a query to display students who scored more than 60 marks.",
        "4. Create a form to enter student records.",
      ],
    },
    htmlTasks: {
      title: "7. Perform the following tasks in HTML",
      table: {
        headers: ["Roll No.", "Name", "Address", "Marks"],
        rows: [
          [1, "Ram", "Kathmandu", 85],
          [2, "Sita", "Pokhara", 90],
          [3, "Hari", "Biratnagar", 75],
          [4, "Gita", "Janakpur", 80],
        ],
      },
      tasks: [
        "1. Create the above table in HTML:",
        "2. Add a hyperlink named Visit Google that opens https://www.google.com.",
      ],
    },
  },

  // ── 5th Level Set 2 ──────────────────────────────────────────────────
  {
    id: "l5-2",
    level: "5th",
    setNumber: 2,
    title: "Practical-set 2",
    nepaliTyping: {
      title: "1. नेपाली टाइपिंग",
      paragraphs: [
        "एक गाउँमा रमेश नाम गरेको एउटा केटा बस्थ्यो। उसको परिवार आर्थिक रूपमा कमजोर थियो। उसका बुबा खेतीपाती गर्थे र आमा घरको काम गर्नुका साथै पशुपालन गर्थिन्। रमेशलाई पढाइमा निकै रुचि थियो। ऊ हरेक दिन बिहान सबेरै उठेर घरको काममा आमाबुबालाई सहयोग गर्थ्यो। त्यसपछि विद्यालय जान्थ्यो र ध्यान दिएर पढ्थ्यो। विद्यालयबाट फर्किएपछि ऊ साथीहरूसँग खेल्नुभन्दा पहिले आफ्नो गृहकार्य पूरा गर्थ्यो।",
        "गाउँमा पुस्तकालय नभएकाले रमेशलाई अतिरिक्त किताब पढ्न कठिन हुन्थ्यो। तर उसले आफ्नो समस्यालाई कमजोरी बन्न दिएन। ऊ शिक्षकसँग नयाँ किताब माग्थ्यो र साथीहरूसँग भएका पुस्तकहरू साटेर पढ्थ्यो। परीक्षाको समयमा उसले नियमित अभ्यास गर्‍यो र नबुझेका प्रश्नहरू शिक्षकलाई सोध्यो। केही साथीहरूले उसको मेहनत देखेर हाँस्ने गर्थे, तर रमेशले आफ्नो लक्ष्यबाट ध्यान हटाएन।",
        "वार्षिक परीक्षाको नतिजा प्रकाशित हुँदा रमेश विद्यालयमै पहिलो भयो। शिक्षकहरूले उसको प्रशंसा गरे र परिवार पनि खुसी भयो। उसले छात्रवृत्ति प्राप्त गर्‍यो र उच्च शिक्षा हासिल गर्ने अवसर पायो। धेरै वर्षको मेहनतपछि रमेश सफल व्यक्ति बन्यो। उसले आफ्नो गाउँमा विद्यालय र पुस्तकालय स्थापना गर्न सहयोग गर्‍यो।",
        "रमेशको कथाले हामीलाई सफलता प्राप्त गर्न निरन्तर मेहनत, धैर्य र आत्मविश्वास आवश्यक हुन्छ भन्ने शिक्षा दिन्छ। कठिन परिस्थितिमा पनि लक्ष्यप्रति इमानदार रहने मानिसले एक दिन अवश्य प्रगति गर्न सक्छ। सफलता रातारात प्राप्त हुँदैन, त्यसका लागि समय, अनुशासन र निरन्तर प्रयास चाहिन्छ।",
      ],
    },
    englishTyping: {
      title: "2. English Typing",
      paragraphs: [
        `Dark clouds covered the sky, and the wind began to blow strongly. Within minutes, heavy rain was falling on the streets, making the roads slippery and difficult to cross. People hurried toward nearby shops, bus stops, and buildings to find shelter. A young man named Bikash stood beneath a tree, holding a paper bag filled with groceries. He had planned to reach home before the rain started, but the weather had changed unexpectedly. Suddenly, a loud clap of thunder echoed across the neighbourhood—what a frightening sound! Bikash looked toward the main road and noticed an elderly woman struggling to cross it. Vehicles were moving slowly, and water was flowing along the roadside.`,
        `Without hesitation, he approached her and offered his arm. "Please walk slowly; the road is dangerous," he said. Together, they crossed the street and reached a nearby shelter. The woman thanked him warmly and asked, "Why did you help a stranger when you were also trying to get home?" Bikash replied, "Because kindness should not depend on whether we know someone." They waited for several minutes while the rain continued to fall. During their conversation, Bikash learned that the woman lived nearby and was returning from the market. Eventually, the rain became lighter, and the evening grew peaceful again. Before leaving, the woman thanked him once more and wished him a safe journey. On his way home, Bikash felt happy despite getting wet. He understood that helping others did not always require money, special skills, or a great deal of time. Sometimes, a little patience and kindness are enough to make someone's difficult day much better.`,
      ],
    },
    wordTasks: {
      title: "3. Perform the following tasks in word:",
      tasks: [
        "Save the document as IT_Practical.docx.",
        "Set the paper size to A4.",
        "Set the page margins to 1 inch on all sides.",
        "Add a suitable title and format the title using Heading 1 style.",
        "Make the first paragraph justified.",
        "Apply a 4-line Drop Cap to the first paragraph.",
        "Set the page background color to light yellow.",
        "Insert a page number at the bottom of the page.",
        "Insert the current date in the header.",
        "Count the words in the document and take a screenshot of the Word Count window.",
      ],
    },
    excelTasks: {
      title: "4. Perform the following tasks in Excel.",
      table: {
        headers: ["Subject", "Marks"],
        rows: [
          ["English", 65],
          ["Mathematics", 72],
          ["Computer", 80],
          ["Account", 68],
          ["Economics", 55],
          ["Total", "=SUM(B2:B6)"],
          ["Percentage", "=total/500*100"],
        ],
      },
      instructions: [
        "1. Calculate the total marks and percentage.",
        "2. Use Goal Seek to find the marks required in Economics to achieve an overall percentage of 75%.",
        "3. Find the marks required in Mathematics to achieve a total of 400 marks, keeping all other subject marks unchanged.",
        "4. Save the worksheet as Student_Result.xlsx.",
      ],
    },
    powerPointTasks: {
      title: "5. Perform the following tasks in PowerPoint.",
      tasks: [
        "Create a presentation of 3 slides on “Computer and Its Uses.” Include a title slide, uses of computers, and advantages.",
        "Insert SmartArt or a suitable shape and apply animations to the text.",
      ],
    },
    accessTasks: {
      title: "6. Perform the following tasks in MS Access.",
      table: {
        headers: ["Field Name", "Data Type"],
        rows: [
          ["EmpID", "AutoNumber (Primary Key)"],
          ["EmpName", "Short Text"],
          ["Department", "Short Text"],
          ["Salary", "Currency"],
          ["JoinDate", "Date/Time"],
        ],
      },
      tasks: [
        "1. Create a table named Employee with these fields:",
        "2. Enter details of 5 employees.",
        "3. Create a query to display employees whose salary is greater than Rs.30,000.",
        "4. Create a report showing all employee records.",
      ],
    },
    htmlTasks: {
      title: "7. Perform the following tasks in HTML.",
      nestedList: [
        {
          category: "I. Computer",
          items: ["a. Hardware", "b. Software"],
        },
        {
          category: "II. System software",
          items: ["a. utility software", "b. programming language"],
        },
      ],
    },
  },

  // ── 5th Level Set 3 ──────────────────────────────────────────────────
  {
    id: "l5-3",
    level: "5th",
    setNumber: 3,
    title: "Practical-set 3",
    nepaliTyping: {
      title: "1. नेपाली टाइपिंग",
      paragraphs: [
        "शिक्षा मानिसको जीवनमा अत्यन्त महत्त्वपूर्ण हुन्छ। शिक्षाले हामीलाई पढ्न, लेख्न र सही निर्णय लिन सिकाउँछ। यसले मानिसको सोचाइ फराकिलो बनाउनुका साथै समाजमा सम्मानपूर्वक जीवन बिताउन सहयोग गर्छ। शिक्षित व्यक्तिले आफ्नो अधिकार र कर्तव्य बुझ्न सक्छ। उसले विभिन्न समस्या समाधान गर्न तर्क, ज्ञान र अनुभवको प्रयोग गर्न जान्दछ। शिक्षा केवल विद्यालयमा किताब पढ्नु मात्र होइन, जीवनका हरेक अनुभवबाट नयाँ कुरा सिक्नु पनि हो।",
        "विद्यालयले बालबालिकालाई ज्ञान, अनुशासन र सहयोगको भावना सिकाउँछ। शिक्षकहरूले विद्यार्थीलाई सही बाटो देखाउँछन् र उनीहरूको प्रतिभा विकास गर्न मद्दत गर्छन्। घरपरिवारले पनि बालबालिकाको शिक्षामा महत्त्वपूर्ण भूमिका खेल्छ। अभिभावकले आफ्ना छोराछोरीलाई नियमित अध्ययन गर्न प्रोत्साहन दिनुपर्छ। आर्थिक अवस्था कमजोर भएका बालबालिकाले पनि गुणस्तरीय शिक्षा प्राप्त गर्न सक्ने वातावरण बनाउनुपर्छ।",
        "शिक्षाले बेरोजगारी कम गर्न, गरिबी घटाउन र देशको विकास गर्न सहयोग पुर्‍याउँछ। शिक्षित नागरिकले समाजमा रहेका अन्धविश्वास, भेदभाव र अन्यायविरुद्ध आवाज उठाउन सक्छन्। त्यसैले प्रत्येक बालबालिकाले समान रूपमा शिक्षा प्राप्त गर्न पाउनुपर्छ। ज्ञान, सीप र असल व्यवहारको संयोजनले मानिसलाई योग्य नागरिक बनाउँछ। शिक्षामा गरिएको लगानी भविष्यको उज्यालो निर्माण गर्ने महत्त्वपूर्ण आधार हो।",
      ],
    },
    englishTyping: {
      title: "2. English Typing",
      paragraphs: [
        `The final examination was only two weeks away, and Nisha had several subjects to revise. At first, she felt nervous because the syllabus seemed enormous. She had to study mathematics, English, science, computer studies, and social studies. Whenever she opened her textbooks, she worried about how much work remained. One evening, her older brother noticed her frustration and offered some advice. "Do not panic—divide the work into smaller tasks!" he suggested. Nisha prepared a timetable that included specific study periods, short breaks, and time for revision. Every morning, she reviewed difficult topics; every evening, she solved practice questions and checked her answers. She also created summary notes containing important definitions, formulas, and examples. Whenever she made a mistake, she recorded it in a notebook so that she could review it later.`,
        `One day, she discovered that she had misunderstood an important mathematical formula. "How could I forget this?" she exclaimed. Instead of giving up, she asked her teacher for help and practised similar problems until she understood the concept. She also reduced unnecessary mobile phone use and made sure she slept for enough hours each night. Her parents encouraged her to remain calm and maintain a healthy routine. By examination day, Nisha felt much more confident. She read every question carefully, managed her time, and checked her answers before submitting the paper. After the examination, she realized that preparation had made the experience less frightening. She learned that success depends not only on intelligence but also on planning, patience, discipline, and consistent effort.`,
      ],
    },
    wordTasks: {
      title: "3. Perform the following task in word.",
      tasks: [
        "Copy the entire document onto a new page.",
        "Give the second paragraph a hanging indent of 0.5 inch.",
        "Add suitable heading and apply Heading 1 style to the title.",
        "Change the font to Times New Roman, size 12.",
        "Set line spacing to 1.5.",
        "Insert a page break before the second copy.",
        "Add a border around the page.",
        "Insert a table of contents at the beginning of the document.",
        "Set the page orientation to Landscape.",
        "Use Print Preview to check the final layout.",
      ],
    },
    excelTasks: {
      title: "4. Perform the following tasks in Excel.",
      table: {
        headers: ["S.N.", "Product", "Price (Rs.)", "Qty", "Amount", "Discount", "Net Amount"],
        rows: [
          [1, "Keyboard", "900", 3, "", "", ""],
          [2, "Mouse", "500", 5, "", "", ""],
          [3, "Monitor", "12,000", 2, "", "", ""],
          [4, "Printer", "8,500", 1, "", "", ""],
          [5, "Headphone", "1,200", 4, "", "", ""],
        ],
      },
      instructions: [
        "Perform the following tasks:",
        "1. Calculate Amount = Price × Quantity.",
        "2. Give a 10% discount if the product is Monitor and the amount is greater than Rs. 20,000.",
        "3. Give an 5% discount if the product is Printer and the amount is greater than Rs. 8,000.",
        "4. Calculate Net Amount after discount.",
        "5. Create a bar chart showing Product and Quantity.",
      ],
    },
    powerPointTasks: {
      title: "5. Perform the following tasks in PowerPoint.",
      tasks: [
        "Create a presentation of 3 slides explaining MS Word, MS Excel, and MS PowerPoint.",
        "Insert icons or pictures, apply animations, and add footer with your name.",
      ],
    },
    accessTasks: {
      title: "6. Perform the following tasks in MS Access.",
      tasks: [
        "Task 1: Create a table named Books with fields BookID, BookName, Author, Price, and Category.",
        "Task 2: Enter details of 5 books.",
        "Task 3: Create a query to display books belonging to the category \"Computer\".",
        "Task 4: Sort the books by price in descending order.",
      ],
    },
    htmlTasks: {
      title: "7. Perform the following tasks in HTML.",
      tasks: [
        "1. Insert an image named office.jpg into the webpage and set its width to 300 pixels and height to 200 pixels.",
        "2. Create a hyperlink named to the image that opens https://www.facebook.com.",
      ],
    },
  },

  // ── 5th Level Set 4 ──────────────────────────────────────────────────
  {
    id: "l5-4",
    level: "5th",
    setNumber: 4,
    title: "Practical-set 4",
    nepaliTyping: {
      title: "1. प्रविधि र आधुनिक जीवन",
      paragraphs: [
        "विज्ञान र प्रविधिले मानिसको जीवनशैलीमा ठूलो परिवर्तन ल्याएको छ। पहिले एउटा ठाउँबाट अर्को ठाउँमा समाचार पुर्‍याउन धेरै समय लाग्थ्यो। अहिले मोबाइल फोन र इन्टरनेटको माध्यमबाट केही सेकेन्डमै संसारको जुनसुकै ठाउँमा रहेका मानिससँग सम्पर्क गर्न सकिन्छ। कम्प्युटरले कार्यालयका काम, तथ्याङ्क व्यवस्थापन र सूचना आदानप्रदानलाई सहज बनाएको छ। आधुनिक प्रविधिको प्रयोगले मानिसको समय र मेहनत दुवै बचाउन मद्दत गर्छ।",
        "शिक्षाको क्षेत्रमा पनि प्रविधिको महत्त्व बढ्दै गएको छ। विद्यार्थीहरूले अनलाइन कक्षा लिन, डिजिटल पुस्तक पढ्न र अभ्यासका प्रश्नहरू समाधान गर्न सक्छन्। शिक्षकहरूले प्रस्तुति, भिडियो र विभिन्न शैक्षिक सामग्री प्रयोग गरेर पाठलाई रोचक बनाउन सक्छन्। कार्यालयमा कर्मचारीहरूले पत्र लेख्न, हिसाब राख्न र प्रतिवेदन तयार गर्न कम्प्युटर प्रयोग गर्छन्। स्वास्थ्य क्षेत्रमा आधुनिक उपकरणले रोग पहिचान र उपचारमा सहयोग पुर्‍याउँछन्।",
        "तर प्रविधिको अत्यधिक प्रयोगले केही समस्या पनि निम्त्याउन सक्छ। मोबाइलमा धेरै समय बिताउँदा पढाइ, निन्द्रा र पारिवारिक सम्बन्धमा असर पर्न सक्छ। इन्टरनेटमा गलत सूचना, ठगी र व्यक्तिगत विवरण चोरी हुने जोखिम पनि हुन्छ। त्यसैले प्रविधि प्रयोग गर्दा सावधानी अपनाउनु आवश्यक छ। बलियो पासवर्ड राख्ने, अपरिचित लिङ्क नखोल्ने र व्यक्तिगत जानकारी जथाभावी साझा नगर्ने बानी बसाल्नुपर्छ।",
        "प्रविधि आफैँमा राम्रो वा नराम्रो हुँदैन; यसको प्रभाव प्रयोग गर्ने व्यक्तिमा निर्भर हुन्छ। सही उद्देश्यका लागि यसको उपयोग गरेमा नयाँ अवसर सिर्जना गर्न सकिन्छ। आधुनिक संसारमा सफल हुन डिजिटल सीप, सिर्जनात्मक सोच र निरन्तर सिक्ने बानी आवश्यक छन्। प्रविधिलाई आफ्नो सहयोगी बनाएर जीवनलाई सुरक्षित, सरल र उत्पादनशील बनाउन सकिन्छ।",
      ],
    },
    englishTyping: {
      title: "2. English Typing",
      paragraphs: [
        `Every morning, Suman opened his small shop at exactly 6:00 a.m. The shop stood beside a busy road and sold groceries, stationery, snacks, and household items. Although the business was small, Suman treated every customer with kindness and respect. He arranged the products neatly, checked their prices, and kept the shop clean. One rainy afternoon, a woman came to buy rice, sugar, cooking oil, and a few other items. After paying for her purchases, she accidentally left her purse on the counter.`,
        `Suman noticed it immediately and called after her, "Excuse me! You have forgotten something!" The woman turned around and looked surprised. Suman simply smiled and returned to arranging the shelves. He did not expect a reward because he believed that honesty was part of his responsibility. Gradually, his reputation spread throughout the neighbourhood. People trusted him because he never cheated anyone, sold damaged products knowingly, or charged unfair prices. Customers often recommended his shop to their friends and relatives. As the business grew, Suman began selling additional products and employed a young assistant.`,
        `He taught the assistant three important rules: treat customers politely, maintain accurate records, and always tell the truth. Years later, his little shop became a successful business. Suman understood that success did not depend only on profit; it also depended on trust, service, and good character. His story demonstrated that small acts of honesty can create lasting benefits.`,
      ],
    },
    wordTasks: {
      title: "3. Perform the following tasks in word:",
      tasks: [
        "Set the paper size to A4 and margins to 1 inch.",
        "Apply a 3-line Drop Cap to the first paragraph.",
        "Apply a first-line indent of 0.5 inch to the second paragraph.",
        "Change the “recommended” to uppercase.",
        "Add a title and apply title Heading style to the title.",
        "Insert a table of contents at the top.",
        "Insert a watermark containing the text Public Service Commission",
        "Insert a footer containing date and page number.",
        "Insert the following diagram:",
      ],
      specialElement: "cycle-diagram",
    },
    excelTasks: {
      title: "4. Perform the following tasks in Excel.",
      table: {
        headers: ["Particulars", "Value"],
        rows: [
          ["Selling Price per Unit", "2,500"],
          ["Cost per Unit", "1,600"],
          ["Units Sold", "500"],
          ["Total Revenue", "Formula"],
          ["Total Cost", "Formula"],
          ["Profit", "Formula"],
        ],
      },
      instructions: [
        "1. Calculate total revenue, total cost, and profit.",
        "2. Create three scenarios using Scenario Manager to compare profit:",
      ],
    },
    powerPointTasks: {
      title: "5. Perform the following tasks in PowerPoint.",
      tasks: [
        "Create 3 slides on “Student Academic Performance.”",
        "Insert a table showing 3 students and their marks then add a chart based on the marks.",
      ],
      table: {
        headers: ["S.N.", "Student Name", "English", "Mathematics", "Computer"],
        rows: [
          [1, "Ram", 75, 85, 90],
          [2, "Sita", 88, 78, 95],
          [3, "Hari", 65, 70, 80],
        ],
      },
    },
    accessTasks: {
      title: "6. Perform the following tasks in MS Access",
      tasks: [
        "1. Create a table named Product with fields ProductID, ProductName, Quantity, and Price.",
        "2. Enter details of 5 products.",
        "3. Create a query to display products with a quantity less than 10.",
        "4. Create a calculated field in a query named TotalAmount using the formula: TotalAmount: [Quantity]*[Price]",
      ],
    },
    htmlTasks: {
      title: "7. Perform the following tasks in html",
      tasks: [
        "1. Create an HTML form with the following fields:",
      ],
      formFields: [
        "Name",
        "Address",
        "Gender (Male/Female)",
        "Course (HTML, CSS, JavaScript)",
        "Email",
        "Password",
        "Remarks (Text area)",
        "Submit and Reset buttons",
      ],
    },
  },

  // ── 5th Level Set 5 ──────────────────────────────────────────────────
  {
    id: "l5-5",
    level: "5th",
    setNumber: 5,
    title: "Practical-set 5",
    nepaliTyping: {
      title: "1. नेपाली टाइपिंग",
      paragraphs: [
        "नेपाल प्राकृतिक सुन्दरताले भरिएको देश हो। यहाँ अग्ला हिमाल, हरिया पहाड, फराकिला तराईका मैदान, स्वच्छ नदी र सुन्दर तालहरू छन्। विश्वको सर्वोच्च शिखर सगरमाथा नेपालमै अवस्थित छ। हिमालको सेतो हिउँ, पहाडको हरियाली र तराईका उर्वर खेतहरूले नेपालको प्राकृतिक विविधता देखाउँछन्। यहाँको भौगोलिक बनावटले विभिन्न प्रकारका वनस्पति, जनावर र चराचुरुङ्गीलाई बासस्थान प्रदान गरेको छ।",
        "नेपालका विभिन्न स्थानमा पर्यटकहरू प्रकृतिको आनन्द लिन आउँछन्। पोखराका तालहरू, चितवनका वन, लुम्बिनीको शान्त वातावरण र हिमाली क्षेत्रका पदमार्गहरू पर्यटकका लागि आकर्षणका केन्द्र हुन्। पदयात्रा, पर्वतारोहण, वन्यजन्तु अवलोकन र सांस्कृतिक भ्रमणले पर्यटन व्यवसायलाई सहयोग पुर्‍याउँछन्। पर्यटनबाट स्थानीय मानिसहरूले रोजगारी र आम्दानी प्राप्त गर्न सक्छन्।",
        "प्राकृतिक सम्पदा हाम्रो अमूल्य धन हो। तर वन विनाश, प्रदूषण, अव्यवस्थित निर्माण र फोहोरका कारण वातावरणमा नकारात्मक असर परिरहेको छ। नदीमा फोहोर फाल्नु, वनमा आगो लगाउनु र जथाभावी रूख काट्नुले प्रकृतिको सन्तुलन बिगार्न सक्छ। जलवायु परिवर्तनका कारण हिमालको हिउँ, पानीका स्रोत र कृषि प्रणालीमा समेत प्रभाव पर्न सक्छ।",
        "प्रकृतिको संरक्षण गर्नु सरकारको मात्र जिम्मेवारी होइन। प्रत्येक नागरिकले आफ्नो घर, विद्यालय र समुदाय सफा राख्नुपर्छ। रूख रोप्ने, पानी बचाउने, प्लास्टिकको प्रयोग घटाउने र वन्यजन्तुको संरक्षण गर्ने काममा सबै सहभागी हुनुपर्छ। प्राकृतिक सुन्दरता जोगाउन सकेमा भावी पुस्ताले पनि यसको आनन्द लिन पाउनेछन्। स्वच्छ वातावरण स्वस्थ जीवनको आधार हो।",
      ],
    },
    englishTyping: {
      title: "2. English Typing",
      paragraphs: [
        `Technology has changed the way people communicate, study, travel, and work. In the past, sending a message to someone living far away could take several days; today, a text message or email can arrive within seconds. Students can attend online classes, download educational materials, and practise new skills using computers or smartphones. Businesses use digital tools to manage records, communicate with customers, and improve productivity. Hospitals use modern equipment to examine patients, while banks provide online services that allow customers to transfer money without visiting a branch. These developments have made many everyday activities faster and more convenient. However, technology also has disadvantages. Excessive screen time may affect sleep, concentration, and physical activity. Some people share personal information online without understanding the risks—this can create serious problems! Cybercriminals may use fake messages, suspicious links, or fraudulent websites to steal information. Therefore, users should create strong passwords, enable security features, and avoid sharing confidential details with strangers. Parents and teachers should also help children develop responsible digital habits. "Use technology as a tool, not as a replacement for real life," my teacher often says. It is important to spend time outdoors, exercise regularly, and maintain meaningful relationships with family and friends. Technology is neither completely good nor completely bad; its impact depends on how people use it.`,
      ],
    },
    wordTasks: {
      title: "3. Perform the following tasks in word.",
      tasks: [
        "1. Insert the following pyramid chart.",
        "2. Insert the following equation: x = (-b ± √(b² - 4ac)) / 2a",
        "3. Insert the following symbol with system date and Time: ® ™ © 10/30/2026 11:48 AM",
        "4. Insert the following list with custom bullets.",
      ],
      specialElement: "pyramid-equation",
    },
    excelTasks: {
      title: "4. Perform the following tasks in Excel.",
      table: {
        headers: ["Product", "2025 Sales", "2026 sales"],
        rows: [
          ["Laptop", "150,000", "120,000"],
          ["Desktop", "100,000", "150,000"],
          ["Printer", "45,000", "80,000"],
          ["Keyboard", "20,000", "60,000"],
        ],
      },
      instructions: [
        "1. Create a worksheet named Consolidated Report.",
        "2. Use Data → Consolidate to calculate total sales of each product across all three branches.",
        "3. Use the Sum function.",
        "4. Link the consolidated data to the source data.",
        "5. Format the final report as a professional sales summary.",
      ],
    },
    powerPointTasks: {
      title: "5. Perform the following tasks in PowerPoint.",
      tasks: [
        "1. Create 3 slides on “My Small Business.”",
        "2. Insert your business logo, use a suitable theme, and add a hyperlink to your business website.",
      ],
    },
    accessTasks: {
      title: "6. Perform the following tasks in MS Access",
      tasks: [
        "1. Create a table named ExamResult with fields RollNo, StudentName, Marks, and ExamDate.",
        "2. Set RollNo as the Primary Key.",
        "3. Set a validation rule for Marks so that only values from 0 to 100 are accepted.",
        "4. Set StudentName as a Required field and save the table.",
      ],
    },
    htmlTasks: {
      title: "7. Perform the following tasks in HTML",
      tasks: [
        "1. Create a webpage with the heading h1 Welcome to My Website.",
        "2. Insert a horizontal line below the heading.",
        "3. Write a paragraph about your college.",
        "4. Make the use of italic, bold and underlined text using html tag respectively.",
      ],
    },
  },
];

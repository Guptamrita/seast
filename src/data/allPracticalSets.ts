export interface PracticalSetData {
  id: string;
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
    specialElement?: "cycle-diagram" | "pyramid-equation" | null;
  };
  excelTasks: {
    title: string;
    table?: {
      headers: string[];
      rows: (string | number)[][];
    };
    instructions: string[];
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
    tasks: string[];
  };
}

export const practicalSetsCatalog: PracticalSetData[] = [
  // ── SET 1 ────────────────────────────────────────────────────────────
  {
    id: "1",
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
        "Create a table named Student.",
        "Enter records of 5 students.",
        "Create a query to display students who scored more than 60 marks.",
        "Create a form to enter student records.",
      ],
    },
  },

  // ── SET 2 ────────────────────────────────────────────────────────────
  {
    id: "2",
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
        "Create a table named Employee with these fields:",
        "Enter details of 5 employees.",
        "Create a query to display employees whose salary is greater than Rs.30,000.",
        "Create a report showing all employee records.",
      ],
    },
  },

  // ── SET 3 ────────────────────────────────────────────────────────────
  {
    id: "3",
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

  // ── SET 4 ────────────────────────────────────────────────────────────
  {
    id: "4",
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

  // ── SET 5 ────────────────────────────────────────────────────────────
  {
    id: "5",
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

  // ── SET 6 ────────────────────────────────────────────────────────────
  {
    id: "6",
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
];

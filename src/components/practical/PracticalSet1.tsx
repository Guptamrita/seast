import { useState } from "react";
import { Copy, Check, Printer, ArrowLeft, Keyboard, Download } from "lucide-react";
import { Link } from "react-router-dom";

interface PracticalSet1Props {
  onBack: () => void;
}

export default function PracticalSet1({ onBack }: PracticalSet1Props) {
  const [copied, setCopied] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyAll = () => {
    const fullText = `Practical-set 1

१. नेपाली टाइपिंग

गाउँको बिहान निकै रमाइलो र शान्त हुन्छ। रातभरि परेको शीतले घाँसका पातहरू चम्किरहेका हुन्छन्। पूर्व दिशाबाट सूर्य उदाउन थालेपछि आकाशमा सुनौलो प्रकाश फैलिन्छ। चराचुरुङ्गीहरू रुखका हाँगामा बसेर मीठो आवाज निकाल्न थाल्छन्। किसानहरू आफ्नो दैनिक कामका लागि खेतबारीतिर जान्छन्। कसैले गाईवस्तुलाई घाँस खुवाउँछन् भने कसैले घरको आँगन सफा गर्छन्। गाउँका साना बालबालिका विद्यालय जानका लागि किताब र झोला तयार पार्छन्।

गाउँमा मानिसहरू एकअर्कासँग मिलेर बस्छन्। कसैको घरमा विवाह, पूजा वा अन्य कार्यक्रम हुँदा छिमेकीहरू सहयोग गर्न पुग्छन्। खेतमा धान, मकै, गहुँ र विभिन्न प्रकारका तरकारी लगाइन्छ। वर्षायाममा हरियालीले गाउँको वातावरण अझ सुन्दर बनाउँछ। खोलाको पानी, चिसो हावा र चराहरूको आवाजले मानिसको मन प्रसन्न बनाउँछ। सहरको व्यस्त जीवनभन्दा गाउँको जीवन सरल र प्राकृतिक हुन्छ। यद्यपि गाउँमा स्वास्थ्य, शिक्षा र यातायातका केही समस्या हुन सक्छन्। गाउँको विकासका लागि राम्रो सडक, विद्यालय, अस्पताल र सञ्चार सुविधाको आवश्यकता पर्दछ। गाउँका मानिसहरूले आधुनिक प्रविधिको प्रयोग गर्दै आफ्नो परम्परा पनि जोगाउनुपर्छ। प्रकृतिसँग नजिक रहेर मेहनत गर्ने मानिसहरूले जीवनको वास्तविक आनन्द अनुभव गर्न सक्छन्।

2. English typing

Everyone has dreams, but turning those dreams into reality requires determination, discipline, and hard work. Some people want to become teachers, doctors, engineers, programmers, or successful business owners. Others hope to travel the world, support their families, or serve their communities. Whatever the goal may be, the first step is to believe that progress is possible. However, believing in a dream is not enough; people must also take practical steps toward achieving it. A student who wants to improve English should read regularly, learn new vocabulary, and practise writing. Someone who wishes to become a programmer must study programming languages, solve problems, and build useful projects. The journey may include mistakes, disappointments, and unexpected difficulties. "I will try again!" is a powerful sentence when life becomes challenging. Failure is not necessarily the end of the journey; it can be an opportunity to learn, improve, and begin again.

For instance, a beginner learning computer programming may encounter errors every day. Instead of becoming discouraged, the learner should identify each mistake, understand its cause, and correct it patiently. Small achievements—such as completing one lesson, solving one problem, or finishing a project—build confidence over time. It is also important to choose supportive friends and learn from experienced people. Comparing our progress with someone else's can create unnecessary pressure; everyone develops at a different pace. Remember these words: success rarely happens overnight. Stay focused, remain curious, and celebrate your progress, even when it seems small. Your future is shaped not only by your dreams, but also by the actions you take today!

3. Perform the following tasks in MS Word:
1. Copy the paragraph into a new document and give it a suitable title, center-align the title and apply a reflection text effect.
2. Apply Small Caps to “programming”.
3. Insert a clipart and apply the Tight text-wrapping option.
4. Divide the 2nd paragraph of the text into two columns and add a line between.
5. Insert a bookmark named discouraged at the word “discouraged” and create a hyperlink to that bookmark.
6. Insert a table with 4 columns and 4 rows for Place, Distance, Transport, and Time.
7. Insert a header containing “Travel Diary” and a footer containing automatic page numbers.

4. Perform the following tasks in Excel.
S.N. | Employee Name | Department | Performance Score
1 | Raj | HR | 25%
2 | Meena | Accounts | 45%
3 | Sagar | IT | 68%
4 | Priti | Sales | 82%
5 | Aman | HR | 95%
6 | Rina | IT | 57%
7 | Keshav | Sales | 74%

Use VLOOKUP to assign performance ratings:
1. 0% to below 30%: Poor
2. 30% to below 50%: Average
3. 50% to below 70%: Good
4. 70% to below 85%: Very Good
5. 85% to 100%: Excellent

5. Perform the following tasks in PowerPoint.
1. Create a presentation of 3 slides on the topic “Operating System.” Include your Definition, uses, types, and examples.
2. Apply a suitable theme, insert a picture, and add slide transitions.

6. Perform the following tasks in MS Access
Field Name | Data Type
RollNo | Number (Primary Key)
StudentName | Short Text
Address | Short Text
Gender | Short Text
Marks | Number

1. Create a table named Student.
2. Enter records of 5 students.
3. Create a query to display students who scored more than 60 marks.
4. Create a form to enter student records.`;

    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Action Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs print:hidden">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-700 hover:text-[#0284c7] bg-slate-100 hover:bg-slate-200 px-3.5 py-2 rounded-xl transition"
        >
          <ArrowLeft size={16} /> Back to Sets
        </button>

        <div className="flex items-center gap-2 flex-wrap">
          <Link
            to="/typing"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-purple-600 hover:bg-purple-700 px-3.5 py-2 rounded-xl transition shadow-xs"
          >
            <Keyboard size={14} /> Practice on Typing Master
          </Link>

          <button
            onClick={handleCopyAll}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 px-3.5 py-2 rounded-xl transition border border-slate-200"
          >
            {copied ? (
              <>
                <Check size={14} className="text-emerald-600" />
                <span className="text-emerald-600">Copied!</span>
              </>
            ) : (
              <>
                <Copy size={14} />
                <span>Copy Questions</span>
              </>
            )}
          </button>

          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#0284c7] hover:bg-[#0369a1] px-3.5 py-2 rounded-xl transition shadow-xs"
          >
            <Printer size={14} /> Print PDF View
          </button>
        </div>
      </div>

      {/* ── Document Page (Authentic PDF Representation) ─────────────── */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-12 max-w-4xl mx-auto relative overflow-hidden font-sans text-slate-900 leading-relaxed print:border-none print:shadow-none print:p-0">
        
        {/* Subtle Watermark matching the PDF */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.06] rotate-[-35deg] text-slate-900 text-6xl sm:text-8xl font-black">
          samrita collections
        </div>

        <div className="relative z-10 space-y-10">
          
          {/* Document Title (Underlined blue like PDF) */}
          <div className="text-center pt-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#2563eb] border-b-2 border-[#2563eb] inline-block pb-1 tracking-tight">
              Practical-set 1
            </h1>
          </div>

          {/* ── 1. Nepali Typing ─────────────────────────────────────── */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              १. नेपाली टाइपिंग
            </h2>

            <div className="text-slate-800 text-justify space-y-4 text-base sm:text-[17px] leading-[1.85] font-normal">
              <p>
                गाउँको बिहान निकै रमाइलो र शान्त हुन्छ। रातभरि परेको शीतले घाँसका पातहरू चम्किरहेका हुन्छन्। पूर्व दिशाबाट सूर्य उदाउन थालेपछि आकाशमा सुनौलो प्रकाश फैलिन्छ। चराचुरुङ्गीहरू रुखका हाँगामा बसेर मीठो आवाज निकाल्न थाल्छन्। किसानहरू आफ्नो दैनिक कामका लागि खेतबारीतिर जान्छन्। कसैले गाईवस्तुलाई घाँस खुवाउँछन् भने कसैले घरको आँगन सफा गर्छन्। गाउँका साना बालबालिका विद्यालय जानका लागि किताब र झोला तयार पार्छन्।
              </p>

              <p>
                गाउँमा मानिसहरू एकअर्कासँग मिलेर बस्छन्। कसैको घरमा विवाह, पूजा वा अन्य कार्यक्रम हुँदा छिमेकीहरू सहयोग गर्न पुग्छन्। खेतमा धान, मकै, गहुँ र विभिन्न प्रकारका तरकारी लगाइन्छ। वर्षायाममा हरियालीले गाउँको वातावरण अझ सुन्दर बनाउँछ। खोलाको पानी, चिसो हावा र चराहरूको आवाजले मानिसको मन प्रसन्न बनाउँछ। सहरको व्यस्त जीवनभन्दा गाउँको जीवन सरल र प्राकृतिक हुन्छ। यद्यपि गाउँमा स्वास्थ्य, शिक्षा र यातायातका केही समस्या हुन सक्छन्। गाउँको विकासका लागि राम्रो सडक, विद्यालय, अस्पताल र सञ्चार सुविधाको आवश्यकता पर्दछ। गाउँका मानिसहरूले आधुनिक प्रविधिको प्रयोग गर्दै आफ्नो परम्परा पनि जोगाउनुपर्छ। प्रकृतिसँग नजिक रहेर मेहनत गर्ने मानिसहरूले जीवनको वास्तविक आनन्द अनुभव गर्न सक्छन्।
              </p>
            </div>
          </section>

          {/* ── 2. English Typing ────────────────────────────────────── */}
          <section className="space-y-4 pt-4 border-t border-slate-100">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              2. English typing
            </h2>

            <div className="text-slate-800 text-justify space-y-4 text-base sm:text-[16px] leading-[1.8] font-normal">
              <p>
                Everyone has dreams, but turning those dreams into reality requires determination, discipline, and hard work. Some people want to become teachers, doctors, engineers, programmers, or successful business owners. Others hope to travel the world, support their families, or serve their communities. Whatever the goal may be, the first step is to believe that progress is possible. However, believing in a dream is not enough; people must also take practical steps toward achieving it. A student who wants to improve English should read regularly, learn new vocabulary, and practise writing. Someone who wishes to become a programmer must study programming languages, solve problems, and build useful projects. The journey may include mistakes, disappointments, and unexpected difficulties. &ldquo;I will try again!&rdquo; is a powerful sentence when life becomes challenging. Failure is not necessarily the end of the journey; it can be an opportunity to learn, improve, and begin again.
              </p>

              <p>
                For instance, a beginner learning computer programming may encounter errors every day. Instead of becoming discouraged, the learner should identify each mistake, understand its cause, and correct it patiently. Small achievements—such as completing one lesson, solving one problem, or finishing a project—build confidence over time. It is also important to choose supportive friends and learn from experienced people. Comparing our progress with someone else's can create unnecessary pressure; everyone develops at a different pace. Remember these words: success rarely happens overnight. Stay focused, remain curious, and celebrate your progress, even when it seems small. Your future is shaped not only by your dreams, but also by the actions you take today!
              </p>
            </div>
          </section>

          {/* ── 3. MS Word Tasks ─────────────────────────────────────── */}
          <section className="space-y-3 pt-4 border-t border-slate-100">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              3. Perform the following tasks in MS Word:
            </h2>

            <ol className="list-decimal list-outside pl-6 space-y-2 text-base text-slate-800 font-medium">
              <li>
                Copy the paragraph into a new document and give it a suitable title, center-align the title and apply a reflection text effect.
              </li>
              <li>
                Apply Small Caps to &ldquo;programming&rdquo;.
              </li>
              <li>
                Insert a clipart and apply the Tight text-wrapping option.
              </li>
              <li>
                Divide the 2nd paragraph of the text into two columns and add a line between.
              </li>
              <li>
                Insert a bookmark named discouraged at the word &ldquo;discouraged&rdquo; and create a hyperlink to that bookmark.
              </li>
              <li>
                Insert a table with 4 columns and 4 rows for Place, Distance, Transport, and Time.
              </li>
              <li>
                Insert a header containing &ldquo;Travel Diary&rdquo; and a footer containing automatic page numbers.
              </li>
            </ol>
          </section>

          {/* ── 4. MS Excel Tasks ────────────────────────────────────── */}
          <section className="space-y-4 pt-4 border-t border-slate-100">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              4. Perform the following tasks in Excel.
            </h2>

            {/* Table matching the PDF */}
            <div className="overflow-x-auto my-3">
              <table className="w-full border-collapse border border-slate-400 text-sm text-left">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-400 font-bold">
                    <th className="border border-slate-400 px-3 py-2 text-center w-16">S.N.</th>
                    <th className="border border-slate-400 px-4 py-2">Employee Name</th>
                    <th className="border border-slate-400 px-4 py-2">Department</th>
                    <th className="border border-slate-400 px-4 py-2 text-right">Performance Score</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { sn: 1, name: "Raj", dept: "HR", score: "25%" },
                    { sn: 2, name: "Meena", dept: "Accounts", score: "45%" },
                    { sn: 3, name: "Sagar", dept: "IT", score: "68%" },
                    { sn: 4, name: "Priti", dept: "Sales", score: "82%" },
                    { sn: 5, name: "Aman", dept: "HR", score: "95%" },
                    { sn: 6, name: "Rina", dept: "IT", score: "57%" },
                    { sn: 7, name: "Keshav", dept: "Sales", score: "74%" },
                  ].map((row) => (
                    <tr key={row.sn} className="hover:bg-slate-50/60">
                      <td className="border border-slate-400 px-3 py-1.5 text-center font-medium">{row.sn}</td>
                      <td className="border border-slate-400 px-4 py-1.5 font-medium">{row.name}</td>
                      <td className="border border-slate-400 px-4 py-1.5">{row.dept}</td>
                      <td className="border border-slate-400 px-4 py-1.5 text-right font-medium">{row.score}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="space-y-2 pt-2">
              <p className="font-bold text-slate-900 text-base">
                Use VLOOKUP to assign performance ratings:
              </p>
              <ol className="list-decimal list-outside pl-6 space-y-1 text-sm sm:text-base text-slate-800">
                <li>0% to below 30%: Poor</li>
                <li>30% to below 50%: Average</li>
                <li>50% to below 70%: Good</li>
                <li>70% to below 85%: Very Good</li>
                <li>85% to 100%: Excellent</li>
              </ol>
            </div>
          </section>

          {/* ── 5. PowerPoint Tasks ──────────────────────────────────── */}
          <section className="space-y-3 pt-4 border-t border-slate-100">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              5. Perform the following tasks in PowerPoint.
            </h2>

            <ol className="list-decimal list-outside pl-6 space-y-2 text-base text-slate-800 font-medium">
              <li>
                Create a presentation of 3 slides on the topic &ldquo;Operating System.&rdquo; Include your Definition, uses, types, and examples.
              </li>
              <li>
                Apply a suitable theme, insert a picture, and add slide transitions.
              </li>
            </ol>
          </section>

          {/* ── 6. MS Access Tasks ───────────────────────────────────── */}
          <section className="space-y-4 pt-4 border-t border-slate-100">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              6. Perform the following tasks in MS Access
            </h2>

            {/* Field table matching PDF */}
            <div className="overflow-x-auto my-3 max-w-md">
              <table className="w-full border-collapse border border-slate-400 text-sm text-left">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-400 font-bold">
                    <th className="border border-slate-400 px-4 py-2">Field Name</th>
                    <th className="border border-slate-400 px-4 py-2">Data Type</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { field: "RollNo", type: "Number (Primary Key)" },
                    { field: "StudentName", type: "Short Text" },
                    { field: "Address", type: "Short Text" },
                    { field: "Gender", type: "Short Text" },
                    { field: "Marks", type: "Number" },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50/60">
                      <td className="border border-slate-400 px-4 py-1.5 font-medium">{row.field}</td>
                      <td className="border border-slate-400 px-4 py-1.5">{row.type}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <ol className="list-decimal list-outside pl-6 space-y-2 text-base text-slate-800 font-medium pt-1">
              <li>Create a table named Student.</li>
              <li>Enter records of 5 students.</li>
              <li>Create a query to display students who scored more than 60 marks.</li>
              <li>Create a form to enter student records.</li>
            </ol>
          </section>

        </div>
      </div>
    </div>
  );
}

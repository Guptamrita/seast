import { Link } from "react-router-dom";

const OnlineExam = () => {
  // Create exam data for 18 exams (English names + 2082 Updated Papers)
  const exams = [
    { id: 16, number: "16", name: "16th Exam", titleNp: "CDSC Senior Computer Operator Exam 2082", questions: 50, time: 45, marks: 100, color: "from-amber-500 to-rose-500", bgColor: "bg-gradient-to-br from-amber-50 to-rose-50", badge: "NEW 2082" },
    { id: 17, number: "17", name: "17th Exam", titleNp: "C Programming, Algorithms & Logic 2082", questions: 50, time: 45, marks: 100, color: "from-blue-600 to-indigo-600", bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50", badge: "NEW 2082" },
    { id: 18, number: "18", name: "18th Exam", titleNp: "NOC & TU Technical Assistant IT Exam", questions: 50, time: 45, marks: 100, color: "from-emerald-500 to-teal-500", bgColor: "bg-gradient-to-br from-emerald-50 to-teal-50", badge: "NEW 2082" },
    { id: 1, number: "1", name: "1st Exam", titleNp: "Operator Sample Exam 2082", questions: 50, time: 45, marks: 100, color: "from-blue-500 to-cyan-500", bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50" },
    { id: 2, number: "2", name: "2nd Exam", titleNp: "Operator Sample Exam 2082", questions: 50, time: 45, marks: 100, color: "from-indigo-500 to-purple-500", bgColor: "bg-gradient-to-br from-indigo-50 to-purple-50" },
    { id: 3, number: "3", name: "3rd Exam", titleNp: "Operator Sample Exam 2082", questions: 30, time: 45, marks: 60, color: "from-purple-500 to-pink-500", bgColor: "bg-gradient-to-br from-purple-50 to-pink-50" },
    { id: 4, number: "4", name: "4th Exam", titleNp: "Operator Sample Exam 2082", questions: 50, time: 45, marks: 100, color: "from-pink-500 to-rose-500", bgColor: "bg-gradient-to-br from-pink-50 to-rose-50" },
    { id: 5, number: "5", name: "5th Exam", titleNp: "Operator Sample Exam 2082", questions: 50, time: 45, marks: 100, color: "from-red-500 to-orange-500", bgColor: "bg-gradient-to-br from-red-50 to-orange-50" },
    { id: 6, number: "6", name: "6th Exam", titleNp: "Operator Sample Exam 2082", questions: 50, time: 45, marks: 100, color: "from-orange-500 to-amber-500", bgColor: "bg-gradient-to-br from-orange-50 to-amber-50" },
    { id: 7, number: "7", name: "7th Exam", titleNp: "Operator Sample Exam 2082", questions: 50, time: 45, marks: 100, color: "from-amber-500 to-yellow-500", bgColor: "bg-gradient-to-br from-amber-50 to-yellow-50" },
    { id: 8, number: "8", name: "8th Exam", titleNp: "Operator Sample Exam 2082", questions: 50, time: 45, marks: 100, color: "from-yellow-500 to-lime-500", bgColor: "bg-gradient-to-br from-yellow-50 to-lime-50" },
    { id: 9, number: "9", name: "9th Exam", titleNp: "Operator Sample Exam 2082", questions: 50, time: 45, marks: 100, color: "from-lime-500 to-green-500", bgColor: "bg-gradient-to-br from-lime-50 to-green-50" },
    { id: 10, number: "10", name: "10th Exam", titleNp: "Operator Sample Exam 2082", questions: 50, time: 45, marks: 100, color: "from-green-500 to-emerald-500", bgColor: "bg-gradient-to-br from-green-50 to-emerald-50" },
    { id: 11, number: "11", name: "11th Exam", titleNp: "Operator Sample Exam 2082", questions: 50, time: 45, marks: 100, color: "from-emerald-500 to-teal-500", bgColor: "bg-gradient-to-br from-emerald-50 to-teal-50" },
    { id: 12, number: "12", name: "12th Exam", titleNp: "Operator Sample Exam 2082", questions: 50, time: 45, marks: 100, color: "from-teal-500 to-cyan-500", bgColor: "bg-gradient-to-br from-teal-50 to-cyan-50" },
    { id: 13, number: "13", name: "13th Exam", titleNp: "Operator Sample Exam 2082", questions: 50, time: 45, marks: 100, color: "from-cyan-500 to-sky-500", bgColor: "bg-gradient-to-br from-cyan-50 to-sky-50" },
    { id: 14, number: "14", name: "14th Exam", titleNp: "Operator Sample Exam 2082", questions: 50, time: 45, marks: 100, color: "from-sky-500 to-blue-500", bgColor: "bg-gradient-to-br from-sky-50 to-blue-50" },
    { id: 15, number: "15", name: "15th Exam", titleNp: "Operator Sample Exam 2082", questions: 50, time: 45, marks: 100, color: "from-blue-500 to-indigo-500", bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50" },
  ];

  // Quiz data for 4 quizzes
  const quizzes = [
    { id: 1, number: "1", name: "1st Quiz", titleNp: "Public Management Quiz", questions: 25, time: 15, marks: 25, color: "from-orange-500 to-red-500", bgColor: "bg-gradient-to-br from-orange-50 to-red-50" },
    { id: 2, number: "2", name: "2nd Quiz", titleNp: "Public Management Quiz", questions: 25, time: 15, marks: 25, color: "from-red-500 to-rose-500", bgColor: "bg-gradient-to-br from-red-50 to-rose-50" },
    { id: 3, number: "3", name: "3rd Quiz", titleNp: "Public Management Quiz", questions: 25, time: 15, marks: 25, color: "from-rose-500 to-pink-500", bgColor: "bg-gradient-to-br from-rose-50 to-pink-50" },
    { id: 4, number: "4", name: "4th Quiz", titleNp: "Public Management Quiz", questions: 25, time: 15, marks: 25, color: "from-pink-500 to-purple-500", bgColor: "bg-gradient-to-br from-pink-50 to-purple-50" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">📝 Online Mock Exams 2081/2082</h1>
          <p className="text-gray-500">Real exam simulations with 20% negative marking and instant rank assessment.</p>
        </div>

        {/* Operator Sample Exam Section */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-4 mb-6 shadow-lg flex items-center justify-between">
            <h2 className="text-xl md:text-2xl font-bold text-white">📋 Operator Full Mock Exams ({exams.length} Sets)</h2>
            <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">50 Qs / 45 Mins</span>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {exams.map((exam) => (
              <div
                key={exam.id}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-200/80 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between p-4 pb-2">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${exam.color} flex items-center justify-center text-white font-bold text-xl shadow-md group-hover:scale-105 transition`}>
                        {exam.number}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 text-base">{exam.name}</h3>
                        <p className="text-gray-500 text-xs line-clamp-1">{exam.titleNp}</p>
                      </div>
                    </div>
                    {exam.badge && (
                      <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-md bg-rose-500 text-white uppercase animate-pulse">
                        {exam.badge}
                      </span>
                    )}
                  </div>
                  
                  <div className="px-4 py-2">
                    <div className="bg-slate-50 rounded-xl p-3 space-y-1.5 text-xs text-slate-600">
                      <div className="flex justify-between">
                        <span>📝 Questions:</span>
                        <span className="font-bold text-slate-800">{exam.questions}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>⏱️ Time:</span>
                        <span className="font-bold text-slate-800">{exam.time} minutes</span>
                      </div>
                      <div className="flex justify-between">
                        <span>🏆 Total Marks:</span>
                        <span className="font-bold text-slate-800">{exam.marks}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 pt-2">
                  <Link
                    to={`/quiz/online-exam/exam-${exam.id}`}
                    className="block w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center py-2.5 rounded-xl font-bold hover:shadow-md transition-all"
                  >
                    🚀 Start Exam
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Public Management Quiz Section - 4 Quizzes */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-4 mb-6 shadow-lg flex items-center justify-between">
            <h2 className="text-xl md:text-2xl font-bold text-white">🎯 Public Management Quizzes</h2>
            <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">25 Qs / 15 Mins</span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {quizzes.map((quiz) => (
              <div
                key={quiz.id}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-200/80 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 p-4">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${quiz.color} flex items-center justify-center text-white font-bold text-xl shadow-md group-hover:scale-105 transition`}>
                      {quiz.number}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 text-base">{quiz.name}</h3>
                      <p className="text-gray-500 text-xs">{quiz.titleNp}</p>
                    </div>
                  </div>

                  <div className="px-4 py-2">
                    <div className="bg-slate-50 rounded-xl p-3 space-y-1.5 text-xs text-slate-600">
                      <div className="flex justify-between">
                        <span>📝 Questions:</span>
                        <span className="font-bold text-slate-800">{quiz.questions}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>⏱️ Time:</span>
                        <span className="font-bold text-slate-800">{quiz.time} minutes</span>
                      </div>
                      <div className="flex justify-between">
                        <span>🏆 Total Marks:</span>
                        <span className="font-bold text-slate-800">{quiz.marks}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 pt-2">
                  <Link
                    to={`/quiz/online-exam/quiz-${quiz.id}`}
                    className="block w-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-center py-2.5 rounded-xl font-bold hover:shadow-md transition-all"
                  >
                    🚀 Start Quiz
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default OnlineExam;

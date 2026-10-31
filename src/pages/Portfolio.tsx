import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail, MapPin, Linkedin, Download, Briefcase,
  GraduationCap, Award, CheckCircle2, Code2, Monitor,
  Send, Globe, Laptop, ArrowRight, Star
} from "lucide-react";
import { toast } from "sonner";
import amritaPhoto from "@/assets/amrita-photo.jpg";
import SEO from "@/components/SEO";

export default function Portfolio() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      toast.success("Thank you! Your message has been sent successfully.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 py-8 px-4 sm:px-6 lg:px-8">
      <SEO
        title="Amrita Gupta — Frontend Developer & Computer Operator Portfolio"
        description="Official developer portfolio of Amrita Gupta: IT Support Executive, Computer Operator, Frontend Web Designer, and creator of PSC Study Hub portal."
        canonical="https://amritagupta.com.np/portfolio"
      />

      <div className="max-w-6xl mx-auto space-y-14">
        
        {/* ── 1. Hero Section (Aligned with Homepage Spotlight) ── */}
        <motion.section 
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-[#0c2854] border border-blue-900/60 p-6 sm:p-10 lg:p-12 text-white shadow-sm overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
          
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-sky-200 text-xs font-semibold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for IT & Frontend Opportunities
              </div>

              <div className="space-y-2">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
                  Amrita <span className="text-[#facc15]">Gupta</span>
                </h1>
                <p className="text-lg sm:text-xl font-semibold text-sky-300">
                  IT Support Executive & Frontend Web Designer
                </p>
              </div>

              <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-2xl font-medium">
                Qualified with a Diploma in Computer Engineering with hands-on industry experience.
                Experienced in IT support, front desk operations, hardware/software troubleshooting, and building responsive, user-centric web applications.
              </p>

              {/* Quick Specs Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs text-slate-200">
                <div className="flex items-center gap-1.5 bg-white/10 border border-white/20 px-3 py-1.5 rounded-xl">
                  <MapPin className="w-3.5 h-3.5 text-rose-300" />
                  Bara, Nepal (Province-2)
                </div>
                <div className="flex items-center gap-1.5 bg-white/10 border border-white/20 px-3 py-1.5 rounded-xl">
                  <GraduationCap className="w-3.5 h-3.5 text-sky-300" />
                  Diploma in Computer Engineering (GPA: 3.6 / 4.0)
                </div>
                <div className="flex items-center gap-1.5 bg-white/10 border border-white/20 px-3 py-1.5 rounded-xl">
                  <Briefcase className="w-3.5 h-3.5 text-emerald-300" />
                  1+ Years Work Experience
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
                <a
                  href="/amrita-gupta-cv.pdf"
                  download="Amrita_Gupta_CV.pdf"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold text-sm shadow transition"
                >
                  <Download className="w-4 h-4" /> Download CV (PDF)
                </a>
                <a
                  href="https://www.linkedin.com/in/amrita-gupta/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition"
                >
                  <Linkedin className="w-4 h-4 text-sky-300" /> LinkedIn Profile
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition"
                >
                  <Mail className="w-4 h-4 text-amber-300" /> Get in Touch
                </a>
              </div>
            </div>

            {/* Right Profile Photo */}
            <div className="relative group flex-shrink-0">
              <div className="relative w-56 h-68 sm:w-64 sm:h-80 md:w-72 md:h-88 rounded-2xl overflow-hidden border-4 border-white/20 shadow-xl bg-slate-900">
                <img
                  src={amritaPhoto}
                  alt="Amrita Gupta"
                  className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c2854]/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-center bg-[#072147]/90 backdrop-blur-md rounded-xl py-1.5 px-2 border border-white/20">
                  <p className="text-xs font-bold text-white">Amrita Gupta</p>
                  <p className="text-[11px] text-sky-300 font-medium">IT Professional & Web Designer</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ── 2. Summary & Key Highlights ── */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            whileHover={{ y: -3 }}
            className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition space-y-3"
          >
            <div className="w-11 h-11 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0284c7]">
              <Monitor className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#0c2854]">IT Support & Operations</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              1 year of solid hands-on experience in technical troubleshooting, client assistance, hardware & software management, and front desk operations at BAY20.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -3 }}
            className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition space-y-3"
          >
            <div className="w-11 h-11 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
              <Code2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#0c2854]">Frontend Web Design</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              6-month On-the-Job Training at Tezash Tech Pvt. Ltd. focusing on responsive layouts, modern HTML5, CSS3, JavaScript, CodeIgniter, and UI/UX design.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -3 }}
            className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition space-y-3"
          >
            <div className="w-11 h-11 rounded-full bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#0c2854]">Academic Excellence</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              Diploma in Computer Engineering with high academic ranking (3.6 / 4.0 cumulative GPA, 3.85 in Grade 11), certified in Web Design & Visual Programming.
            </p>
          </motion.div>
        </section>

        {/* ── 3. Skills Matrix ── */}
        <section className="space-y-6">
          <div className="text-center space-y-1.5">
            <h2 className="text-2xl sm:text-3xl font-black text-[#0c2854] tracking-tight">
              Skills & Proficiencies
            </h2>
            <p className="text-slate-500 text-sm max-w-xl mx-auto font-medium">
              A comprehensive toolkit of technical capabilities, office management expertise, and interpersonal strengths.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Tech Skills */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-[#0284c7] font-bold text-base border-b border-slate-100 pb-3">
                <Laptop className="w-4 h-4" /> Technical & Web Skills
              </div>
              <ul className="space-y-2.5 text-sm text-slate-700">
                {[
                  { name: "HTML & HTML5", level: "Expert" },
                  { name: "CSS & CSS3 (Flexbox/Grid)", level: "Expert" },
                  { name: "JavaScript & Basics of React", level: "Skilled" },
                  { name: "Web Development & UI/UX", level: "Proficient" },
                  { name: "CodeIgniter Framework", level: "Intermediate" },
                  { name: "C++ & Java Programming Basics", level: "Intermediate" },
                ].map((skill, idx) => (
                  <li key={idx} className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0284c7] flex-shrink-0" />
                      <span className="font-medium">{skill.name}</span>
                    </span>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-100">
                      {skill.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* IT & Office Operations */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-indigo-600 font-bold text-base border-b border-slate-100 pb-3">
                <Monitor className="w-4 h-4" /> IT Support & Productivity
              </div>
              <ul className="space-y-2.5 text-sm text-slate-700">
                {[
                  { name: "English Typing", level: "Expert" },
                  { name: "Nepali Typing", level: "Expert" },
                  { name: "MS Office (Excel, Word, PPT)", level: "Expert" },
                  { name: "Hardware & Software Troubleshooting", level: "Advanced" },
                  { name: "Email & Front Desk Management", level: "Advanced" },
                  { name: "Tools: Canva, Photopea, VS-Code", level: "Skilled" },
                ].map((skill, idx) => (
                  <li key={idx} className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 flex-shrink-0" />
                      <span className="font-medium">{skill.name}</span>
                    </span>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-100">
                      {skill.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Soft Skills & Languages */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-emerald-600 font-bold text-base border-b border-slate-100 pb-3">
                <Globe className="w-4 h-4" /> Soft Skills & Languages
              </div>
              
              <div className="space-y-2">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Professional Attributes</p>
                <div className="flex flex-wrap gap-1.5">
                  {["Teamwork", "Fast Learning", "Time Management", "Leadership", "Effective Communication", "Critical Thinking"].map((item) => (
                    <span key={item} className="text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md border border-slate-200 font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-100">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Languages Known</p>
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="bg-slate-50 p-2 rounded-lg border border-slate-200">
                    <p className="font-bold text-slate-800">English</p>
                    <p className="text-emerald-600 font-bold text-[10px]">Fluent</p>
                  </div>
                  <div className="bg-slate-50 p-2 rounded-lg border border-slate-200">
                    <p className="font-bold text-slate-800">Nepali</p>
                    <p className="text-emerald-600 font-bold text-[10px]">Fluent</p>
                  </div>
                  <div className="bg-slate-50 p-2 rounded-lg border border-slate-200">
                    <p className="font-bold text-slate-800">Hindi</p>
                    <p className="text-emerald-600 font-bold text-[10px]">Fluent</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. Work Experience & Education Timeline ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Experience */}
          <div className="space-y-5">
            <div className="flex items-center gap-2.5 text-xl font-bold text-[#0c2854]">
              <Briefcase className="w-5 h-5 text-[#0284c7]" />
              Work Experience
            </div>

            <div className="space-y-4 border-l-2 border-slate-200 pl-6 ml-2">
              <div className="relative">
                <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#0284c7] ring-4 ring-[#f8fafc]" />
                <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="text-base font-bold text-[#0c2854]">IT Support & Frontdesk Executive</h4>
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                      Jan 2024 – Feb 2025
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-slate-700">BAY20</p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    Worked as an IT Support and Front Desk Executive, providing technical assistance, managing system-related issues, troubleshooting hardware & software problems, supporting daily IT operations, and maintaining professional communication with staff and visitors.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-indigo-500 ring-4 ring-[#f8fafc]" />
                <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="text-base font-bold text-[#0c2854]">Frontend Designer (Intern / OJT)</h4>
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100">
                      Apr 2023 – Dec 2023
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-slate-700">Tezash Tech Pvt. Ltd.</p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    Completed a 6-month specialized On-the-Job Training (OJT). Assisted in designing and developing responsive web interfaces, creating user-friendly layouts, enhancing visual graphics, and implementing frontend features with HTML, CSS, and JavaScript.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-5">
            <div className="flex items-center gap-2.5 text-xl font-bold text-[#0c2854]">
              <GraduationCap className="w-5 h-5 text-emerald-600" />
              Education & Honors
            </div>

            <div className="space-y-4 border-l-2 border-slate-200 pl-6 ml-2">
              <div className="relative">
                <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-emerald-500 ring-4 ring-[#f8fafc]" />
                <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="text-base font-bold text-[#0c2854]">Diploma in Computer Engineering</h4>
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
                      Apr 2019 – Mar 2023
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-slate-700">Shree Durga Higher Secondary Model School</p>
                  <p className="text-xs text-slate-500">National Examination Board (NEB), Nepal | Kalaiya-7, Bara</p>
                  <div className="flex items-center gap-2.5 pt-1 text-xs">
                    <span className="px-2.5 py-0.5 rounded bg-emerald-50 text-emerald-700 font-bold border border-emerald-100">
                      Cumulative GPA: 3.6 / 4.0
                    </span>
                    <span className="px-2.5 py-0.5 rounded bg-slate-100 text-slate-700 font-medium border border-slate-200">
                      Grade 11: 3.85 GPA
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-amber-500 ring-4 ring-[#f8fafc]" />
                <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-bold text-[#0c2854]">Certifications & Accolades</h4>
                    <Award className="w-4 h-4 text-amber-500" />
                  </div>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600 font-medium">
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Certificate of Appreciation:</strong> Awarded by MD & General Manager of Tezash Tech Pvt. Ltd. for exceptional dedication during 6-month OJT training.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. Contact Section ── */}
        <section 
          id="contact"
          className="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-10 shadow-sm"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left Contact Info */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-black text-[#0c2854]">Let's Connect</h2>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  Interested in collaborating, hiring for IT support, frontend web design, or discussing opportunities? Feel free to reach out directly.
                </p>
              </div>

              <div className="space-y-3">
                <a 
                  href="mailto:amritagupta950@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:bg-blue-50/50 hover:border-blue-200 transition group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0284c7] group-hover:scale-105 transition">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Email Address</p>
                    <p className="text-sm font-bold text-slate-800">amritagupta950@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Location</p>
                    <p className="text-sm font-bold text-slate-800">Bara, Nepal (Province-2)</p>
                  </div>
                </div>

                <a 
                  href="https://www.linkedin.com/in/amrita-gupta/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:bg-blue-50/50 hover:border-blue-200 transition group"
                >
                  <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 group-hover:scale-105 transition">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">LinkedIn</p>
                    <p className="text-sm font-bold text-slate-800">linkedin.com/in/amrita-gupta</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="bg-slate-50/80 rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4">
              <h3 className="text-lg font-bold text-[#0c2854] flex items-center gap-2">
                <Send className="w-4 h-4 text-[#0284c7]" /> Send a Direct Message
              </h3>

              <form onSubmit={handleContactSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0284c7] transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. john@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0284c7] transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Job Opportunity / Collaboration"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0284c7] transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Message</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0284c7] transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full py-3 rounded-full bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold text-sm shadow transition flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSending ? "Sending..." : "Send Message"}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

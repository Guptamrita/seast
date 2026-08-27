import { useState } from "react";
import { motion } from "framer-motion";
import {
  User, Mail, Phone, MapPin, Linkedin, Download, Briefcase,
  GraduationCap, Award, CheckCircle2, Code2, Monitor,
  Send, Sparkles, Globe, Laptop, FileText, ArrowRight, Star
} from "lucide-react";
import { toast } from "sonner";
import amritaPhoto from "@/assets/amrita-photo.jpg";
import amritaPhotoPortrait from "@/assets/amrita-photo-portrait.jpg";

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
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-500 selection:text-white py-8 px-4 sm:px-6 lg:px-8">
      <SEO
        title="Amrita Gupta — Frontend Developer & Computer Operator Portfolio"
        description="Official developer portfolio of Amrita Gupta: IT Support Executive, Computer Operator, Frontend Web Designer, and creator of Samrita Collection portal."
        canonical="https://amritagupta.com.np/portfolio"
      />
      {/* Background ambient glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-blue-600/15 blur-[140px] rounded-full" />
        <div className="absolute top-1/3 -left-40 w-[500px] h-[400px] bg-indigo-600/10 blur-[130px] rounded-full" />
        <div className="absolute bottom-20 -right-40 w-[600px] h-[500px] bg-sky-500/10 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* ── 1. Hero Section ── */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-gradient-to-b from-slate-900/90 to-slate-900/40 border border-slate-800/80 p-6 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-xl overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
          
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for IT & Frontend Opportunities
              </div>

              <div className="space-y-2">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                  Amrita <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-sky-400">Gupta</span>
                </h1>
                <p className="text-lg sm:text-xl font-medium text-blue-400/90">
                  IT Support Executive & Frontend Web Designer
                </p>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                Qualified with a Diploma in Computer Engineering with hands-on industry experience.
                Experienced in IT support, front desk operations, hardware/software troubleshooting, and building responsive, user-centric web applications.
              </p>

              {/* Quick Specs Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs text-slate-300">
                <div className="flex items-center gap-1.5 bg-slate-800/70 border border-slate-700/60 px-3 py-1.5 rounded-lg">
                  <MapPin className="w-3.5 h-3.5 text-rose-400" />
                  Bara, Nepal (Province-2)
                </div>
                <div className="flex items-center gap-1.5 bg-slate-800/70 border border-slate-700/60 px-3 py-1.5 rounded-lg">
                  <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
                  Diploma in Computer Engineering (GPA: 3.6 / 4.0)
                </div>
                <div className="flex items-center gap-1.5 bg-slate-800/70 border border-slate-700/60 px-3 py-1.5 rounded-lg">
                  <Briefcase className="w-3.5 h-3.5 text-emerald-400" />
                  1+ Years Work Experience
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href="/amrita-gupta-cv.pdf"
                  download="Amrita_Gupta_CV.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Download className="w-4 h-4" /> Download CV (PDF)
                </a>
                <a
                  href="https://www.linkedin.com/in/amrita-gupta/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm border border-slate-700 transition-all transform hover:-translate-y-0.5"
                >
                  <Linkedin className="w-4 h-4 text-sky-400" /> LinkedIn Profile
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 text-slate-300 hover:text-white font-medium text-sm border border-slate-700/60 transition-all"
                >
                  <Mail className="w-4 h-4 text-amber-400" /> Get in Touch
                </a>
              </div>
            </div>

            {/* Right Profile Photo */}
            <div className="relative group flex-shrink-0">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500" />
              <div className="relative w-56 h-68 sm:w-64 sm:h-80 md:w-72 md:h-88 rounded-2xl overflow-hidden border-2 border-slate-700/80 shadow-2xl bg-slate-900">
                <img
                  src={amritaPhoto}
                  alt="Amrita Gupta"
                  className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-center bg-slate-900/80 backdrop-blur-md rounded-xl py-1.5 px-2 border border-white/10">
                  <p className="text-xs font-semibold text-white">Amrita Gupta</p>
                  <p className="text-[11px] text-blue-300">IT Professional & Web Designer</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>


        {/* ── 2. Summary & Key Highlights ── */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            whileHover={{ y: -4 }}
            className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm space-y-3"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <Monitor className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">IT Support & Operations</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              1 year of solid hands-on experience in technical troubleshooting, client assistance, hardware & software management, and front desk operations at BAY20.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -4 }}
            className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm space-y-3"
          >
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
              <Code2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Frontend Web Design</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              6-month On-the-Job Training at Tezash Tech Pvt. Ltd. focusing on responsive layouts, modern HTML5, CSS3, JavaScript, CodeIgniter, and UI/UX design.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -4 }}
            className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm space-y-3"
          >
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Academic Excellence</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Diploma in Computer Engineering with high academic ranking (3.6 / 4.0 cumulative GPA, 3.85 in Grade 11), certified in Web Design & Visual Programming.
            </p>
          </motion.div>
        </section>


        {/* ── 3. Skills Matrix ── */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Skills & Proficiencies
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">
              A comprehensive toolkit of technical capabilities, office management expertise, and interpersonal strengths.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Tech Skills */}
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-blue-400 font-semibold text-base border-b border-slate-800 pb-3">
                <Laptop className="w-4 h-4" /> Technical & Web Skills
              </div>
              <ul className="space-y-2.5 text-sm text-slate-300">
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
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                      {skill.name}
                    </span>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">
                      {skill.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* IT & Office Operations */}
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-indigo-400 font-semibold text-base border-b border-slate-800 pb-3">
                <Monitor className="w-4 h-4" /> IT Support & Productivity
              </div>
              <ul className="space-y-2.5 text-sm text-slate-300">
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
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
                      {skill.name}
                    </span>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                      {skill.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Soft Skills & Languages */}
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold text-base border-b border-slate-800 pb-3">
                <Globe className="w-4 h-4" /> Soft Skills & Languages
              </div>
              
              <div className="space-y-2">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Professional Attributes</p>
                <div className="flex flex-wrap gap-1.5">
                  {["Teamwork", "Fast Learning", "Time Management", "Leadership", "Effective Communication", "Critical Thinking"].map((item) => (
                    <span key={item} className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md border border-slate-700">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-800">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Languages Known</p>
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="bg-slate-800/80 p-2 rounded-lg border border-slate-700">
                    <p className="font-semibold text-white">English</p>
                    <p className="text-emerald-400 text-[10px]">Fluent</p>
                  </div>
                  <div className="bg-slate-800/80 p-2 rounded-lg border border-slate-700">
                    <p className="font-semibold text-white">Nepali</p>
                    <p className="text-emerald-400 text-[10px]">Fluent</p>
                  </div>
                  <div className="bg-slate-800/80 p-2 rounded-lg border border-slate-700">
                    <p className="font-semibold text-white">Hindi</p>
                    <p className="text-emerald-400 text-[10px]">Fluent</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* ── 4. Work Experience & Education Timeline ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Experience */}
          <div className="space-y-6">
            <div className="flex items-center gap-2.5 text-xl font-bold text-white">
              <Briefcase className="w-5 h-5 text-blue-400" />
              Work Experience
            </div>

            <div className="space-y-6 border-l-2 border-slate-800 pl-6 ml-2">
              {/* Job 1 */}
              <div className="relative group">
                <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-blue-500 ring-4 ring-slate-950" />
                <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="text-base font-bold text-white">IT Support & Frontdesk Executive</h4>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">
                      Jan 2024 – Feb 2025
                    </span>
                  </div>
                  <p className="text-sm font-medium text-slate-300">BAY20</p>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    Worked as an IT Support and Front Desk Executive, providing technical assistance, managing system-related issues, troubleshooting hardware & software problems, supporting daily IT operations, and maintaining professional communication with staff and visitors.
                  </p>
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {["MS-Excel", "MS-Word", "MS-PowerPoint", "IT Troubleshooting", "Frontdesk Operations"].map((t) => (
                      <span key={t} className="text-[11px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded border border-slate-700">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Job 2 */}
              <div className="relative group">
                <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-indigo-500 ring-4 ring-slate-950" />
                <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="text-base font-bold text-white">Frontend Designer (Intern / OJT)</h4>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                      Apr 2023 – Dec 2023
                    </span>
                  </div>
                  <p className="text-sm font-medium text-slate-300">Tezash Tech Pvt. Ltd.</p>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    Completed a 6-month specialized On-the-Job Training (OJT). Assisted in designing and developing responsive web interfaces, creating user-friendly layouts, enhancing visual graphics, and implementing frontend features with HTML, CSS, and JavaScript.
                  </p>
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {["HTML", "CSS", "JavaScript", "CodeIgniter", "Canva", "Photopea", "VS-Code"].map((t) => (
                      <span key={t} className="text-[11px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded border border-slate-700">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-6">
            <div className="flex items-center gap-2.5 text-xl font-bold text-white">
              <GraduationCap className="w-5 h-5 text-emerald-400" />
              Education & Honors
            </div>

            <div className="space-y-6 border-l-2 border-slate-800 pl-6 ml-2">
              {/* Education 1 */}
              <div className="relative group">
                <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-emerald-500 ring-4 ring-slate-950" />
                <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="text-base font-bold text-white">Diploma in Computer Engineering</h4>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                      Apr 2019 – Mar 2023
                    </span>
                  </div>
                  <p className="text-sm font-medium text-slate-300">Shree Durga Higher Secondary Model School</p>
                  <p className="text-xs text-slate-400">National Examination Board (NEB), Nepal | Kalaiya-7, Bara</p>
                  <div className="flex items-center gap-3 pt-1 text-xs">
                    <span className="px-2.5 py-1 rounded bg-slate-800 text-emerald-400 font-bold border border-emerald-500/20">
                      Cumulative GPA: 3.6 / 4.0
                    </span>
                    <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      Grade 11: 3.85 GPA
                    </span>
                  </div>
                </div>
              </div>

              {/* Certificate & Achievements */}
              <div className="relative group">
                <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-amber-500 ring-4 ring-slate-950" />
                <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-bold text-white">Certifications & Accolades</h4>
                    <Award className="w-4 h-4 text-amber-400" />
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Certificate of Appreciation:</strong> Official token of appreciation from Managing Director & General Manager of Tezash Tech Pvt. Ltd. for exceptional dedication during 6-month OJT training.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Academic Excellence Recognition:</strong> Consistently recognized for high academic performance maintaining GPA up to 3.85/4.0 in Computer Engineering.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* ── 5. Contact Section ── */}
        <motion.section 
          id="contact"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-gradient-to-b from-slate-900/90 to-slate-900/50 border border-slate-800 p-6 sm:p-10 shadow-xl backdrop-blur-md"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left Contact Info */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold text-white">Let's Connect</h2>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Interested in collaborating, hiring for IT support, frontend web design, or discussing opportunities? Feel free to reach out directly.
                </p>
              </div>

              <div className="space-y-4">
                <a 
                  href="tel:+9779820642395"
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 hover:bg-slate-800 hover:border-slate-600 transition group"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Phone</p>
                    <p className="text-sm font-semibold text-white">+977 9820642395</p>
                  </div>
                </a>

                <a 
                  href="mailto:sahilsarda45669@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 hover:bg-slate-800 hover:border-slate-600 transition group"
                >
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Email Address</p>
                    <p className="text-sm font-semibold text-white">sahilsarda45669@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Location</p>
                    <p className="text-sm font-semibold text-white">Bara, Nepal (Province-2)</p>
                  </div>
                </div>

                <a 
                  href="https://www.linkedin.com/in/amrita-gupta/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 hover:bg-slate-800 hover:border-slate-600 transition group"
                >
                  <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:scale-110 transition">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">LinkedIn</p>
                    <p className="text-sm font-semibold text-white">linkedin.com/in/amrita-gupta</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Send className="w-4 h-4 text-blue-400" /> Send a Direct Message
              </h3>

              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. john@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Job Opportunity / Collaboration"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Message</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSending ? "Sending..." : "Send Message"}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  );
}

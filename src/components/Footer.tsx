import { Link } from "react-router-dom";
import { Heart, ExternalLink, Code2, Sparkles } from "lucide-react";
import logoImg from "@/assets/logo.png";

const footerLinks = [
  { name: "PSC Nepal", url: "https://psc.gov.np" },
  { name: "MoCIT", url: "https://mocit.gov.np" },
  { name: "NITC", url: "https://nitc.gov.np" },
  { name: "DoIT", url: "https://doit.gov.np" },
  { name: "NTA", url: "https://nta.gov.np" },
];

const Footer = () => (
  <footer className="mt-16 border-t border-border bg-card/60 backdrop-blur-md">
    <div className="container mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-border/60">
        
        {/* Brand & Developer Info */}
        <div className="flex items-center gap-3.5">
          <img
            src={logoImg}
            alt="Samrita Collection Logo"
            className="w-11 h-11 rounded-2xl object-cover shadow-md ring-2 ring-blue-500/20"
          />
          <div>
            <div className="flex items-center gap-2">
              <p className="font-heading font-extrabold text-foreground text-base tracking-tight">Samrita Collection</p>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                Official
              </span>
            </div>
            <p className="text-xs text-muted-foreground mt-0.5">
              Loksewa Computer Operator, IT Officer & Practical Exam Suite
            </p>
          </div>
        </div>

        {/* Developer Badge */}
        <div className="flex items-center gap-3 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 border border-blue-500/20 px-4 py-2 rounded-2xl">
          <Code2 size={16} className="text-blue-500" />
          <div className="text-xs">
            <span className="text-muted-foreground font-medium">Developed by </span>
            <Link to="/portfolio" className="font-extrabold text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1">
              Amrita Gupta <Sparkles size={12} className="text-amber-500" />
            </Link>
          </div>
        </div>

        {/* Quick Gov Links */}
        <div className="flex flex-wrap items-center gap-1.5">
          <Link
            to="/portfolio"
            className="flex items-center gap-1 text-xs text-blue-500 dark:text-blue-400 hover:text-blue-600 font-bold transition-colors px-3 py-1.5 rounded-xl bg-blue-500/10 border border-blue-500/20 hover:bg-blue-500/20"
          >
            👤 Developer Portfolio
          </Link>
          {footerLinks.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors px-3 py-1.5 rounded-xl hover:bg-muted font-medium"
            >
              {link.name} <ExternalLink size={10} />
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Copyright & Credit */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 text-xs text-muted-foreground">
        <p className="flex items-center gap-1 font-medium">
          © 2026 Samrita Collection — Designed & Developed with <Heart size={12} className="text-red-500 fill-red-500 inline" /> by <strong className="text-foreground font-bold">Amrita Gupta</strong>
        </p>
        <p className="text-muted-foreground/80 text-[11px]">
          Dedicated for Computer Operator & IT Aspirants in Nepal 🇳🇵
        </p>
      </div>
    </div>

    {/* Gradient Accent Bar */}
    <div className="h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500" />
  </footer>
);

export default Footer;

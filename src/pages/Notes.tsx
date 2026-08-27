import { useState, useEffect } from "react";
import { useIsAdmin } from "@/hooks/useIsAdmin";
import { useAuth } from "@/hooks/useAuth";
import { Lock, Shield, BookOpen, Sparkles, Search, Tag, Calendar, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

interface Note {
  id: string;
  title: string;
  content: string;
  category: string;
  createdAt: string;
}

const defaultNotes: Note[] = [
  {
    id: "n-1",
    title: "🔐 Cyber Security & IT Policies (Loksewa & Banking)",
    content: "• CIA Triad: Confidentiality (secrecy), Integrity (accuracy/unaltered), Availability (accessible when needed).\n• Electronic Transaction Act, 2063 BS: Enacted to authenticate digital signatures, regulate Certifying Authorities (CA), and criminalize cyber hacking/phishing.\n• National ICT Policy, 2072 BS: Aims for Digital Nepal, e-Governance, broadband connectivity across all local levels, and ICT human resource development.\n• Firewalls: Packet Filtering (Layer 3/4), Stateful Inspection, and Web Application Firewall (WAF - Layer 7 protection against SQLi & XSS).\n• Malwares: Virus (needs host), Worm (self-replicating over network), Trojan (disguised benign program), Ransomware (encrypts files for ransom), Phishing (credential theft via spoofing).\n• Cryptography: Symmetric (single shared key e.g. AES, DES) vs Asymmetric (Public/Private key pair e.g. RSA, ECC).\n• Digital Signature: Created with Sender's Private Key, verified using Sender's Public Key. Ensures authenticity, integrity, and non-repudiation.",
    category: "Legislation",
    createdAt: new Date().toISOString()
  },
  {
    id: "n-2",
    title: "🗄️ Database Management System (DBMS) & Data Warehousing",
    content: "• Relational Model: Relations = Tables, Tuples = Rows, Attributes = Columns, Cardinality = Number of rows, Degree = Number of columns.\n• Keys: Primary Key (Unique + Not Null), Candidate Key (potential primary key), Alternate Key (candidate key not chosen as primary), Foreign Key (references primary key of parent table for referential integrity).\n• Normalization Rules:\n  - 1NF: Atomic values (no multi-valued/repeating groups).\n  - 2NF: In 1NF + No partial dependency (all non-key attributes fully dependent on candidate key).\n  - 3NF: In 2NF + No transitive dependency (non-key attributes do not determine other non-key attributes).\n  - BCNF: In 3NF + Every determinant X in X -> Y is a super key.\n• Data Warehouse & OLAP:\n  - OLTP: Online Transaction Processing (day-to-day operations, normalized, fast writes).\n  - OLAP: Online Analytical Processing (historical multi-dimensional analysis, star/snowflake schema, fast reads).\n• SQL Categories: DDL (CREATE, ALTER, DROP, TRUNCATE), DML (SELECT, INSERT, UPDATE, DELETE), DCL (GRANT, REVOKE), TCL (COMMIT, ROLLBACK, SAVEPOINT).",
    category: "Computer",
    createdAt: new Date().toISOString()
  },
  {
    id: "n-3",
    title: "💻 Operating Systems & Memory Architecture",
    content: "• OS Functions: Process Management, Memory Management, File System, I/O Device Management, Security & Protection.\n• Process Scheduling:\n  - Preemptive: Round Robin (time quantum), Preemptive Priority, SRTF (Shortest Remaining Time First).\n  - Non-Preemptive: FCFS (First Come First Served), SJF (Shortest Job First), Non-Preemptive Priority.\n• Memory Management:\n  - Paging: Divides physical memory into fixed-size 'Frames' and logical memory into 'Pages' to avoid external fragmentation. (PTBR = Page Table Base Register).\n  - Segmentation: Divides memory into variable-sized logical segments.\n  - Virtual Memory: Simulates larger RAM using secondary storage swap space.\n  - Thrashing: Excessive page swapping where CPU spends more time paging than executing instructions.\n• Information Systems Architecture: TPS (Operational transactions) -> MIS (Tactical managerial reports) -> DSS / ESS (Strategic executive decision support).",
    category: "OS",
    createdAt: new Date().toISOString()
  },
  {
    id: "n-4",
    title: "🌐 Communication & Computer Networks (OSI & TCP/IP)",
    content: "• OSI 7-Layer Model:\n  1. Physical (Bits, Cables, Hub, Repeater)\n  2. Data Link (Frames, MAC Address, Switch, Bridge, ARP)\n  3. Network (Packets, IP Address, Router, Subnetting, ICMP)\n  4. Transport (Segments, TCP/UDP, Port numbers, Flow/Error control)\n  5. Session (Dialog control, token management)\n  6. Presentation (Encryption, Compression, Data format conversion)\n  7. Application (User interface, HTTP/HTTPS, FTP, SMTP, DNS, DHCP, Telnet, SSH)\n• Important Port Numbers: HTTP (80), HTTPS (443), SSH (22), Telnet (23), SMTP (25), DNS (53), DHCP (67/68), FTP (20/21), POP3 (110), IMAP (143).\n• IP Addressing Classes:\n  - Class A: 1.0.0.0 – 126.255.255.255 (/8, Default Mask 255.0.0.0, 16M hosts)\n  - Class B: 128.0.0.0 – 191.255.255.255 (/16, Default Mask 255.255.0.0, 65k hosts)\n  - Class C: 192.0.0.0 – 223.255.255.255 (/24, Default Mask 255.255.255.0, 254 hosts)\n  - Class D: 224.0.0.0 – 239.255.255.255 (Multicasting)\n  - Class E: 240.0.0.0 – 255.255.255.255 (Experimental/Research)\n  - Loopback IP: 127.0.0.1 (localhost).",
    category: "Networking",
    createdAt: new Date().toISOString()
  },
  {
    id: "n-5",
    title: "⚡ Computer Architecture & Digital Fundamentals",
    content: "• CPU Components: ALU (Arithmetic & Logic Unit), CU (Control Unit), Internal Registers (PC, MAR, MDR, IR, ACC).\n• Memory Hierarchy: CPU Registers (Fastest) > Cache L1/L2/L3 (SRAM) > Main Memory (DRAM) > SSD (NAND Flash) > HDD (Magnetic) > Optical/Tape.\n• Number Conversions:\n  - Binary (Base 2), Octal (Base 8), Decimal (Base 10), Hexadecimal (Base 16).\n  - 1 Byte = 8 bits, 1 Nibble = 4 bits, 1 Word = 16/32/64 bits depending on architecture.\n  - 1 KB = 1024 Bytes, 1 MB = 1024 KB, 1 GB = 1024 MB, 1 TB = 1024 GB.\n• Instruction Execution Cycle: Fetch (from memory via PC) -> Decode (by Control Unit) -> Execute (by ALU/registers) -> Store result.",
    category: "Computer",
    createdAt: new Date().toISOString()
  },
  {
    id: "n-6",
    title: "📊 MS Office & Word/Excel Master Guide",
    content: "• Essential Shortcuts:\n  - Ctrl + C (Copy), Ctrl + V (Paste), Ctrl + X (Cut), Ctrl + Z (Undo), Ctrl + Y (Redo)\n  - Ctrl + S (Save), Ctrl + P (Print), Ctrl + A (Select All), Ctrl + F (Find), Ctrl + H (Replace)\n  - Ctrl + E (Center Align), Ctrl + J (Justify), Ctrl + L (Left Align), Ctrl + R (Right Align)\n  - Ctrl + T (Hanging Indent), Ctrl + M (Left Indent), Ctrl + D (Font Dialog / Duplicate)\n  - F5 (Slide Show / Go To), F7 (Spelling & Grammar), Shift + F7 (Thesaurus), F12 (Save As)\n  - Ctrl + ; (Insert Date in Excel), Ctrl + Shift + ; (Insert Time in Excel)\n• Excel Formulas:\n  - =VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])\n  - =INDEX(array, row_num, [col_num]) & =MATCH(lookup_value, lookup_array, [match_type])\n  - =IF(logical_test, value_if_true, value_if_false)\n  - =COUNTIF(range, criteria) & =SUMIF(range, criteria, [sum_range])\n  - =CONCATENATE(text1, text2) or text1 & text2",
    category: "Excel",
    createdAt: new Date().toISOString()
  },
  {
    id: "n-7",
    title: "🏛️ Public Enterprises & NOC / Government Rules Summary",
    content: "• Nepal Oil Corporation (NOC) & Public Sector IT Guidelines:\n  - Code of conduct, departmental disciplinary actions, and leave rules for public corporation staff.\n  - Public Procurement Act (PPA) 2063: Provisions for electronic government procurement (e-GP), tendering, and technical bid evaluations.\n  - Civil Service Act & Good Governance Act provisions on transparency, public citizen charter (नागरिक बडापत्र), and right to information (सूचनाको हक २०६४).",
    category: "General",
    createdAt: new Date().toISOString()
  }
];

const Notes = () => {
  const { user } = useAuth();
  const isAdmin = useIsAdmin();
  const [notes, setNotes] = useState<Note[]>(() => {
    const saved = localStorage.getItem("loksewa-notes");
    return saved ? JSON.parse(saved) : defaultNotes;
  });
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [editing, setEditing] = useState<Note | null>(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Computer");
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("loksewa-notes", JSON.stringify(notes));
  }, [notes]);

  const saveNote = () => {
    if (!title.trim()) return;
    if (editing) {
      setNotes(notes.map((n) => (n.id === editing.id ? { ...n, title, content, category } : n)));
    } else {
      setNotes([
        { id: "note_" + Date.now().toString(), title, content, category, createdAt: new Date().toISOString() },
        ...notes,
      ]);
    }
    setTitle("");
    setContent("");
    setCategory("Computer");
    setEditing(null);
  };

  const deleteNote = (id: string) => setNotes(notes.filter((n) => n.id !== id));

  const editNote = (note: Note) => {
    setEditing(note);
    setTitle(note.title);
    setContent(note.content);
    setCategory(note.category);
  };

  const categories = ["All", "Legislation", "Computer", "Networking", "OS", "Excel", "Shortcuts", "General"];

  const filtered = notes.filter((n) => {
    const matchesSearch =
      n.title.toLowerCase().includes(search.toLowerCase()) ||
      n.content.toLowerCase().includes(search.toLowerCase()) ||
      n.category.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === "All" || n.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl animate-fade-in">
      <SEO
        title="Loksewa Computer Operator Study Notes & Revision Capsules"
        description="High-yield study notes, cyber security laws, OS architectures, DBMS normalization rules, networking models, and shortcut capsules for Loksewa Computer Operator exams."
        canonical="https://amritagupta.com.np/notes"
      />
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold mb-2">
            <BookOpen size={14} /> Comprehensive Loksewa Study Materials
          </div>
          <h1 className="text-3xl font-heading font-extrabold text-slate-900 dark:text-white">
            📒 Computer Operator Notes & Revision Capsules
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            Subject-wise high-yield exam notes, shortcuts, acts, algorithms, and technical summaries.
          </p>
        </div>

        {isAdmin && (
          <span className="text-xs bg-amber-100 text-amber-800 dark:bg-amber-950/40 dark:text-amber-300 border border-amber-300/40 px-3 py-1.5 rounded-full font-bold flex items-center gap-1.5">
            <Shield size={14} /> Admin Mode Enabled
          </span>
        )}
      </div>

      {/* Admin Editor */}
      {isAdmin && (
        <div className="bg-card rounded-3xl shadow-lg p-6 mb-8 border-2 border-amber-400/40">
          <h2 className="font-heading font-bold text-lg mb-4 flex items-center gap-2 text-slate-900 dark:text-white">
            <Sparkles className="text-amber-500" size={18} />
            {editing ? "✏️ Edit Study Note" : "➕ Create New Study Note"}
          </h2>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Note Title (e.g. Operating System Paging & Virtual Memory)..."
            className="w-full p-3.5 rounded-2xl border bg-background mb-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write markdown or bulleted notes here..."
            className="w-full p-3.5 rounded-2xl border bg-background mb-3 text-sm resize-none h-40 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex gap-3 flex-wrap items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-500">Category:</span>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="p-2.5 rounded-xl border bg-background text-sm font-medium"
              >
                {categories
                  .filter((c) => c !== "All")
                  .map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
              </select>
            </div>
            <div className="flex gap-2">
              <button
                onClick={saveNote}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2.5 rounded-xl font-bold hover:shadow-lg transition"
              >
                {editing ? "Update Note" : "Publish Note"}
              </button>
              {editing && (
                <button
                  onClick={() => {
                    setEditing(null);
                    setTitle("");
                    setContent("");
                  }}
                  className="bg-muted px-4 py-2.5 rounded-xl text-sm font-semibold"
                >
                  Cancel
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Category Pills & Search */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "bg-card border border-border text-slate-600 dark:text-slate-300 hover:bg-muted"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-72">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search notes..."
            className="w-full pl-10 pr-4 py-2 rounded-xl border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Notes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((note) => (
          <div
            key={note.id}
            className="bg-card rounded-3xl p-6 border border-border/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-3 mb-3">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold">
                  <Tag size={12} /> {note.category}
                </span>
                <span className="text-[11px] text-slate-400 flex items-center gap-1">
                  <Calendar size={12} /> {new Date(note.createdAt).toLocaleDateString()}
                </span>
              </div>

              <h2 className="text-lg font-heading font-bold text-slate-900 dark:text-white mb-3">
                {note.title}
              </h2>

              <div className="text-sm text-slate-700 dark:text-slate-300 whitespace-pre-line leading-relaxed font-mono text-xs bg-slate-50 dark:bg-slate-900/60 p-4 rounded-2xl border border-slate-100 dark:border-slate-800/80">
                {note.content}
              </div>
            </div>

            {isAdmin && (
              <div className="flex justify-end gap-2 mt-4 pt-3 border-t border-border">
                <button
                  onClick={() => editNote(note)}
                  className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline px-2 py-1"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteNote(note.id)}
                  className="text-xs font-semibold text-rose-600 hover:underline px-2 py-1"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 bg-card rounded-3xl border border-border">
          <p className="text-slate-400 text-sm">No notes found matching your search.</p>
        </div>
      )}
    </div>
  );
};

export default Notes;

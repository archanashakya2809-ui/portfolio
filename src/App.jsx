import { useState, useEffect } from 'react';
import {
  Github, Linkedin, Mail, Phone, MapPin, FileText, Shield, Cpu, Layers, Database,
  Terminal, Check, Copy, X, ArrowRight, ChevronRight, GraduationCap, Briefcase,
  Eye, Image as ImageIcon, Menu, Printer, Sparkles,
} from 'lucide-react';
import HeroConstellationCanvas from './components/HeroConstellationCanvas.jsx';
import {
  EMAIL, PHONE, GITHUB_URL, LINKEDIN_URL,
  PROJECTS_DATA, EXPERIENCE_DATA, SKILL_CATEGORIES, NAV_LINKS,
} from './data/portfolio.js';

const card = 'rounded-2xl bg-slate-900/70 backdrop-blur-md border border-slate-800';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [activeSkillFilter, setActiveSkillFilter] = useState('All');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = EMAIL;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
        setIsResumeOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const filteredSkillCategories =
    activeSkillFilter === 'All'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.id === activeSkillFilter);

  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-100 selection:bg-sky-500/30 selection:text-sky-200 font-sans antialiased">
      {copiedEmail && (
        <div
          role="status"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-xl bg-slate-900/95 border border-sky-500/40 text-slate-100 shadow-2xl shadow-sky-950/50 backdrop-blur-md animate-fade-in"
        >
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-sky-500/20 text-sky-400">
            <Check className="w-3.5 h-3.5" />
          </span>
          <span className="text-sm font-medium">Copied {EMAIL} to clipboard</span>
        </div>
      )}

      <header className="sticky top-0 z-40 bg-[#0B1120]/80 backdrop-blur-md border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#about" className="flex items-center gap-2.5 group focus:outline-none">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-sky-400/20 to-indigo-500/20 border border-sky-400/30 flex items-center justify-center font-mono text-sm font-bold text-sky-400 group-hover:border-sky-400/60 transition-colors">
              AS
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-slate-100">Archana Shakya</span>
              <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">Full Stack · AI &amp; Automation</span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6" aria-label="Primary Navigation">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-slate-300 hover:text-sky-400 transition-colors font-medium">
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => setIsResumeOpen(true)}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium bg-sky-500/10 text-sky-300 border border-sky-400/30 hover:bg-sky-500/20 hover:border-sky-400/50 transition-all cursor-pointer"
            >
              <FileText className="w-4 h-4 text-sky-400" />
              <span>Resume</span>
            </button>
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={() => setIsResumeOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium bg-sky-500/15 text-sky-300 border border-sky-400/30"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/70 border border-slate-800"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-b border-slate-800 px-4 py-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-800/80 hover:text-sky-400"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="about" className="relative overflow-hidden border-b border-slate-800/70">
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[420px] rounded-full bg-gradient-to-r from-sky-500/10 via-indigo-500/10 to-transparent blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <HeroConstellationCanvas />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-sky-400/30 backdrop-blur-md mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400" />
              </span>
              <span className="text-xs sm:text-sm font-mono text-sky-300">
                Open to Full Stack, Backend &amp; AI Automation Roles
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
              Archana Shakya
            </h1>
            <p className="mt-3 text-lg sm:text-2xl font-medium bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
              Software Developer · Full Stack · AI &amp; Automation
            </p>

            <div className="mt-3 flex items-center gap-2 text-sm text-slate-400">
              <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Chennai, Tamil Nadu, India</span>
            </div>

            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed">
              Full stack developer building end-to-end web applications with{' '}
              <span className="text-slate-100 font-medium">Python (Flask, FastAPI)</span>,{' '}
              <span className="text-slate-100 font-medium">PostgreSQL</span>, HTML, CSS, and{' '}
              <span className="text-slate-100 font-medium">React</span>. Specialized in automation
              tools that replace repetitive manual workflows—including{' '}
              <span className="text-sky-300 font-medium">ML-assisted PDF/UA accessibility pipelines</span>
              —and secure multi-tenant architectures with{' '}
              <span className="text-indigo-300 font-medium">RBAC and PostgreSQL Row-Level Security</span>.
            </p>

            <div className="mt-7 flex flex-wrap gap-2.5">
              {[
                { icon: GraduationCap, label: 'B.E. Cyber Security (8.7 CGPA)' },
                { icon: Shield, label: 'PostgreSQL RBAC & RLS' },
                { icon: Cpu, label: 'PDF/UA & ML Pipelines' },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900/75 border border-slate-800 backdrop-blur-md text-xs sm:text-sm font-mono text-slate-200"
                >
                  <Icon className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span>{label}</span>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-3.5">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-400 hover:to-indigo-400 text-slate-950 font-semibold text-sm shadow-lg shadow-sky-500/20 transition-all"
              >
                <span>View Case Studies</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={() => setIsResumeOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800/90 text-slate-100 border border-slate-700 hover:border-sky-400/50 font-medium text-sm backdrop-blur-md transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4 text-sky-400" />
                <span>View Printable Resume</span>
              </button>

              <div className="flex items-center gap-2 sm:ml-2">
                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile"
                  className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-sky-400/50 text-slate-300 hover:text-sky-400 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile"
                  className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-sky-400/50 text-slate-300 hover:text-sky-400 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copy Email Address"
                  title={`Copy ${EMAIL}`}
                  className="inline-flex items-center gap-2 px-3.5 py-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-sky-400/50 text-slate-300 hover:text-sky-400 text-xs font-mono transition-colors cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-300">Copied</span>
                    </>
                  ) : (
                    <>
                      <Mail className="w-4 h-4 text-sky-400" />
                      <span className="hidden sm:inline">Copy Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-16 sm:py-24 border-b border-slate-800/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-sky-400 mb-2">
                <Layers className="w-4 h-4" />
                <span>Featured Engineering Case Studies</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Production Systems &amp; AI Pipelines
              </h2>
            </div>
            <p className="text-sm text-slate-400 max-w-md">
              Inspect the multi-stage backend workflows, security policies, and ML document
              processing pipelines behind each build.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {PROJECTS_DATA.map((project) => (
              <article
                key={project.id}
                className={`${card} flex flex-col justify-between hover:border-sky-500/40 transition-all duration-300 p-6 shadow-xl shadow-slate-950/40`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono border ${project.badgeColor}`}>
                      {project.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white leading-snug">{project.title}</h3>
                  <p className="mt-2.5 text-sm text-slate-300 leading-relaxed">{project.summary}</p>

                  <div className="mt-5 rounded-xl border border-dashed border-slate-700/90 bg-slate-950/60 p-4 flex flex-col items-center justify-center text-center min-h-[108px]">
                    <ImageIcon className="w-5 h-5 text-slate-500 mb-1.5" />
                    <span className="text-xs font-mono text-slate-400">{project.mediaPlaceholderLabel}</span>
                  </div>

                  <ul className="mt-5 space-y-2.5">
                    {project.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        <ChevronRight className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded bg-slate-950/90 border border-slate-800 text-[11px] font-mono text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-sky-500/10 hover:bg-sky-500/20 text-sky-300 border border-sky-400/30 hover:border-sky-400/60 text-sm font-medium transition-all cursor-pointer"
                  >
                    <Eye className="w-4 h-4 text-sky-400" />
                    <span>Inspect System Architecture</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-16 sm:py-24 border-b border-slate-800/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-indigo-400 mb-2">
              <Briefcase className="w-4 h-4" />
              <span>Career Progression</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Professional Experience</h2>
          </div>

          <div className="relative pl-6 sm:pl-8 border-l border-slate-800 space-y-8">
            {EXPERIENCE_DATA.map((exp) => (
              <div key={exp.period} className="relative">
                <span
                  className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full border-2 ${
                    exp.current ? 'bg-sky-400 border-slate-950 ring-4 ring-sky-400/20' : 'bg-slate-800 border-indigo-400'
                  }`}
                />
                <div className={`${card} p-6`}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white">{exp.role}</h3>
                      <p className="text-sm font-medium text-sky-300">
                        {exp.company} · <span className="text-slate-400">{exp.location}</span>
                      </p>
                    </div>
                    <span className="inline-flex items-center self-start sm:self-center px-3 py-1 rounded-full bg-slate-950/90 border border-slate-800 text-xs font-mono text-slate-300">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {exp.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-16 sm:py-24 border-b border-slate-800/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-sky-400 mb-2">
                <Terminal className="w-4 h-4" />
                <span>Technical Capabilities</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Categorized Tech Stack</h2>
            </div>

            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Skill Categories">
              {['All', ...SKILL_CATEGORIES.map((c) => c.id)].map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveSkillFilter(category)}
                  className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-mono transition-all cursor-pointer ${
                    activeSkillFilter === category
                      ? 'bg-sky-500 text-slate-950 font-semibold shadow-md shadow-sky-500/20'
                      : 'bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredSkillCategories.map(({ id, label, icon: Icon, skills }) => (
              <div key={id} className={`${card} p-6`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-400/25 flex items-center justify-center text-indigo-400">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-white">{label}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span key={skill} className="px-3 py-1.5 rounded-lg bg-slate-950/90 border border-slate-800/90 hover:border-sky-400/40 text-xs sm:text-sm font-mono text-slate-200 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION & CONTACT */}
      <footer id="contact" className="py-16 sm:py-20 bg-slate-950/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            <div className={`${card} p-6 sm:p-8 flex flex-col justify-between`}>
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-indigo-400 mb-3">
                  <GraduationCap className="w-4 h-4" />
                  <span>Education</span>
                </div>
                <h3 className="text-xl font-bold text-white">B.E., Cyber Security</h3>
                <p className="mt-1.5 text-sm sm:text-base text-slate-300">
                  Vinayaka Mission&apos;s Research Foundation (AVIT College)
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">Academic Standing</span>
                <span className="px-3 py-1 rounded-md bg-sky-500/10 border border-sky-400/30 text-xs font-mono font-semibold text-sky-300">
                  CGPA: 8.7
                </span>
              </div>
            </div>

            <div className={`${card} p-6 sm:p-8 flex flex-col justify-between`}>
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-sky-400 mb-3">
                  <Sparkles className="w-4 h-4" />
                  <span>Direct Contact</span>
                </div>
                <h3 className="text-xl font-bold text-white">Let&apos;s Build Secure, Automated Systems</h3>
                <p className="mt-1.5 text-sm text-slate-300">
                  Available for full-stack, Python backend, and AI/document automation roles.
                </p>

                <div className="mt-5 space-y-2.5 text-sm">
                  <div className="flex items-center gap-2.5 text-slate-300">
                    <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>Chennai, Tamil Nadu, India</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-slate-300">
                    <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                    <a href={`tel:${PHONE.replace(/\s/g, '')}`} className="hover:text-sky-400 transition-colors">{PHONE}</a>
                  </div>
                  <div className="flex flex-wrap items-center gap-2.5 text-slate-300">
                    <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                    <a href={`mailto:${EMAIL}`} className="font-mono text-xs sm:text-sm hover:text-sky-400 transition-colors">{EMAIL}</a>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-xs font-mono text-sky-300 transition-colors cursor-pointer"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-3">
                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-950 border border-slate-800 hover:border-sky-400/50 text-xs font-mono text-slate-200 hover:text-sky-300 transition-colors">
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-950 border border-slate-800 hover:border-sky-400/50 text-xs font-mono text-slate-200 hover:text-sky-300 transition-colors">
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800/70 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
            <span>© {new Date().getFullYear()} Archana Shakya · Built with React &amp; Tailwind CSS</span>
            <span>Python · FastAPI · PostgreSQL · React</span>
          </div>
        </div>
      </footer>

      {/* ARCHITECTURE MODAL */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm overflow-y-auto"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="arch-modal-title"
        >
          <div
            className="relative w-full max-w-3xl rounded-2xl bg-[#0F172A] border border-slate-700/80 shadow-2xl p-6 sm:p-8 my-auto max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 pb-5 border-b border-slate-800">
              <div>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-mono border mb-2 ${selectedProject.badgeColor}`}>
                  {selectedProject.status}
                </span>
                <h3 id="arch-modal-title" className="text-xl sm:text-2xl font-bold text-white">{selectedProject.title}</h3>
                <p className="text-xs sm:text-sm font-mono text-sky-400 mt-1">{selectedProject.architecture.subtitle}</p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl bg-slate-900/90 border border-slate-800 p-4">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Engineering Challenge</span>
                <p className="mt-1.5 text-sm text-slate-200 leading-relaxed">{selectedProject.architecture.problem}</p>
              </div>
              <div className="rounded-xl bg-slate-900/90 border border-sky-500/25 p-4">
                <span className="text-xs font-mono uppercase tracking-wider text-sky-400">Architectural Solution</span>
                <p className="mt-1.5 text-sm text-slate-200 leading-relaxed">{selectedProject.architecture.solution}</p>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-indigo-400 mb-4">
                <Database className="w-4 h-4" />
                <span>System Pipeline &amp; Data Flow</span>
              </div>
              <div className="space-y-3">
                {selectedProject.architecture.stages.map((stage, idx, all) => (
                  <div key={stage.step} className="relative">
                    <div className="rounded-xl bg-slate-900/95 border border-slate-800 hover:border-sky-500/40 p-4 transition-colors">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div className="flex items-center gap-3">
                          <span className="px-2 py-0.5 rounded bg-sky-500/15 border border-sky-400/30 text-xs font-mono font-bold text-sky-300">
                            STAGE {stage.step}
                          </span>
                          <h4 className="text-sm sm:text-base font-semibold text-white">{stage.title}</h4>
                        </div>
                        <span className="text-xs font-mono text-indigo-300 bg-indigo-500/10 px-2.5 py-0.5 rounded border border-indigo-400/20 self-start sm:self-auto">
                          {stage.tech}
                        </span>
                      </div>
                      <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">{stage.detail}</p>
                    </div>
                    {idx < all.length - 1 && (
                      <div className="flex justify-center my-1" aria-hidden="true">
                        <div className="w-0.5 h-3 bg-gradient-to-b from-sky-400/60 to-indigo-400/60" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-400">
                    {tag}
                  </span>
                ))}
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-sm font-medium text-white transition-colors cursor-pointer"
              >
                Close Architecture View
              </button>
            </div>
          </div>
        </div>
      )}

      {/* RESUME MODAL */}
      {isResumeOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm overflow-y-auto"
          onClick={() => setIsResumeOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="resume-modal-title"
        >
          <div
            className="relative w-full max-w-3xl rounded-2xl bg-white text-slate-900 shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 bg-slate-900 text-white border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <FileText className="w-4 h-4 text-sky-400" />
                <span id="resume-modal-title" className="text-sm font-semibold">Archana Shakya — Resume Summary</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-semibold transition-colors cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print / Save PDF</span>
                </button>
                <button
                  type="button"
                  onClick={() => setIsResumeOpen(false)}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close Resume Preview"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="p-6 sm:p-10 overflow-y-auto space-y-5 text-sm leading-relaxed">
              <div className="border-b-2 border-slate-900 pb-3">
                <h2 className="text-2xl font-extrabold uppercase tracking-tight text-slate-900">Archana Shakya</h2>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-800 mt-0.5">
                  Software Developer · Full Stack · AI &amp; Automation
                </p>
                <p className="text-xs text-slate-700 mt-1.5">
                  Chennai, India | {PHONE} | {EMAIL} |{' '}
                  <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="underline">linkedin.com/in/archana-shakya</a>{' '}
                  |{' '}
                  <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="underline">github.com/archanashakya2809-ui</a>
                </p>
              </div>

              <div>
                <h3 className="text-xs font-extrabold uppercase tracking-wider border-b border-slate-400 pb-1 mb-2">Summary</h3>
                <p className="text-xs text-slate-800 leading-relaxed">
                  Full stack developer who builds end-to-end web applications with Python (Flask,
                  FastAPI), PostgreSQL, HTML, CSS and React, with Python as my preferred language
                  for backend and automation work. Experienced in building automation tools that
                  replace repetitive manual workflows, including an ML-assisted PDF accessibility
                  pipeline at Hudsmer, and in designing secure systems with role-based access
                  control and row-level security. B.E. Cyber Security graduate (CGPA 8.7) with a
                  strong interest in security, seeking full stack and automation roles.
                </p>
              </div>

              <div>
                <h3 className="text-xs font-extrabold uppercase tracking-wider border-b border-slate-400 pb-1 mb-2">Professional Experience</h3>
                <div className="space-y-3">
                  {EXPERIENCE_DATA.map((exp) => (
                    <div key={exp.period}>
                      <div className="flex justify-between items-baseline font-bold text-xs text-slate-900">
                        <span>{exp.role}, {exp.company} — {exp.location}</span>
                        <span>{exp.period}</span>
                      </div>
                      <ul className="list-disc pl-5 mt-1 space-y-0.5 text-xs text-slate-800">
                        {exp.bullets.map((b) => <li key={b}>{b}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-extrabold uppercase tracking-wider border-b border-slate-400 pb-1 mb-2">Key Projects</h3>
                <div className="space-y-2.5">
                  {PROJECTS_DATA.map((proj) => (
                    <div key={proj.id}>
                      <div className="font-bold text-xs text-slate-900">
                        {proj.title} — {proj.tags.slice(0, 4).join(', ')}
                      </div>
                      <ul className="list-disc pl-5 mt-0.5 space-y-0.5 text-xs text-slate-800">
                        {proj.bullets.map((b) => <li key={b}>{b}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-extrabold uppercase tracking-wider border-b border-slate-400 pb-1 mb-2">Education</h3>
                <div className="flex justify-between items-baseline text-xs font-bold text-slate-900">
                  <span>B.E., Cyber Security — Vinayaka Mission&apos;s Research Foundation (AVIT College)</span>
                  <span>CGPA 8.7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

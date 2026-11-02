import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import GradientASCII from './components/GradientASCII';
import AvatarOrbit3D from './components/AvatarOrbit3D';
import LogoLoop from './components/LogoLoop';
import SpaceShooter from './components/SpaceShooter';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiJavascript,
  SiPython,
  SiGithub,
  SiFastapi,
  SiDjango,
  SiMongodb,
  SiKotlin,
  SiUnity,
  SiOpengl,
  SiGooglecloud,
  SiLinux,
  SiGo,
  SiRedis,
  SiWebassembly,
} from 'react-icons/si';
import {
  personalInfo,
  experienceData,
  researchData,
  educationData,
  awardsData,
  skillsData,
  collaboratorsData,
  projects,
} from './portfolioData';
import { Button, Badge } from '@astryxdesign/core';
import { Card } from '@astryxdesign/core/Card';
import { useAppTheme } from './context/ThemeContext';
import {
  GraduationCap,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  X,
  ArrowUpRight,
  ArrowRight,
  Award,
  FileText,
  Mail,
  Phone,
  MapPin,
  Download,
  HeartHandshake,
  ShieldCheck,
  Layers,
  Cpu,
  Play,
  ChevronLeft,
  ChevronRight,
  Image as ImageIcon,
} from 'lucide-react';

// Tech logos for the infinite LogoLoop ticker
const techLogos = [
  { node: <SiGo />, title: 'Go (Golang)', href: 'https://go.dev', hoverColor: '#00add8' },
  { node: <SiPython />, title: 'Python', href: 'https://www.python.org', hoverColor: '#3776ab' },
  { node: <SiPostgresql />, title: 'PostgreSQL', href: 'https://www.postgresql.org', hoverColor: '#4169e1' },
  { node: <SiRedis />, title: 'Redis', href: 'https://redis.io', hoverColor: '#dc382d' },
  { node: <SiWebassembly />, title: 'WebAssembly', href: 'https://webassembly.org', hoverColor: '#654ff0' },
  { node: <SiFastapi />, title: 'FastAPI', href: 'https://fastapi.tiangolo.com', hoverColor: '#05998b' },
  { node: <SiReact />, title: 'React 19', href: 'https://react.dev', hoverColor: '#61dafb' },
  { node: <SiNextdotjs />, title: 'Next.js', href: 'https://nextjs.org', hoverColor: '#60a5fa' },
  { node: <SiTypescript />, title: 'TypeScript', href: 'https://www.typescriptlang.org', hoverColor: '#3178c6' },
  { node: <SiJavascript />, title: 'JavaScript', href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', hoverColor: '#f7df1e' },
  { node: <SiTailwindcss />, title: 'Tailwind CSS', href: 'https://tailwindcss.com', hoverColor: '#38bdf8' },
  { node: <SiDocker />, title: 'Docker', href: 'https://www.docker.com', hoverColor: '#2496ed' },
  { node: <SiKotlin />, title: 'Kotlin', href: 'https://kotlinlang.org', hoverColor: '#7f52ff' },
  { node: <SiUnity />, title: 'Unity Engine', href: 'https://unity.com', hoverColor: '#ffffff' },
  { node: <SiDjango />, title: 'Django', href: 'https://www.djangoproject.com', hoverColor: '#092e20' },
  { node: <SiMongodb />, title: 'MongoDB', href: 'https://www.mongodb.com', hoverColor: '#47a248' },
  { node: <SiGooglecloud />, title: 'GCP', href: 'https://cloud.google.com', hoverColor: '#4285f4' },
  { node: <SiGit />, title: 'Git', href: 'https://git-scm.com', hoverColor: '#f05032' },
  { node: <SiLinux />, title: 'Linux', href: 'https://www.kernel.org', hoverColor: '#fcc624' },
  { node: <SiOpengl />, title: 'OpenGL', href: 'https://www.opengl.org', hoverColor: '#5586a4' },
];

const projectTints = [
  '!bg-gradient-to-br !from-sky-50/70 !to-blue-50/40 dark:!from-sky-950/25 dark:!to-blue-950/20 !border-sky-200/70 dark:!border-sky-900/40 hover:!border-sky-400/60 dark:hover:!border-sky-600/60',
  '!bg-gradient-to-br !from-purple-50/70 !to-fuchsia-50/40 dark:!from-purple-950/25 dark:!to-fuchsia-950/20 !border-purple-200/70 dark:!border-purple-900/40 hover:!border-purple-400/60 dark:hover:!border-purple-600/60',
  '!bg-gradient-to-br !from-amber-50/70 !to-orange-50/40 dark:!from-amber-950/25 dark:!to-orange-950/20 !border-amber-200/70 dark:!border-amber-900/40 hover:!border-amber-400/60 dark:hover:!border-amber-600/60',
  '!bg-gradient-to-br !from-emerald-50/70 !to-teal-50/40 dark:!from-emerald-950/25 dark:!to-teal-950/20 !border-emerald-200/70 dark:!border-emerald-900/40 hover:!border-emerald-400/60 dark:hover:!border-emerald-600/60',
];

function App() {
  const { isDark } = useAppTheme();
  const [isStuck, setIsStuck] = useState(false);
  const [nameProgress, setNameProgress] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const [activeMediaType, setActiveMediaType] = useState('image'); // 'image' | 'video'
  const [projectCategory, setProjectCategory] = useState('All');
  const sentinelRef = useRef(null);

  // Prevent background scrolling while modal is open without jumping to top
  useEffect(() => {
    if (selectedProject) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          setSelectedProject(null);
        }
      };
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = prevOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [selectedProject]);

  // Filter projects by category
  const filteredProjects =
    projectCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === projectCategory);

  const categories = ['All', 'Backend & Systems', 'Full-Stack & Web', 'Mobile & Android', 'Graphics & Game Dev'];

  // Sentinel scroll tracking for navbar
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (sentinelRef.current) {
            const rect = sentinelRef.current.getBoundingClientRect();
            const stuck = rect.top <= 0;
            setIsStuck(stuck);

            if (!stuck) {
              setNameProgress(0);
            } else {
              const scrollDistance = 220;
              const scrolledPast = -rect.top;
              const progress = Math.min(1, Math.max(0, scrolledPast / scrollDistance));
              setNameProgress(progress);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Open inspection modal safely
  const openProjectModal = (proj) => {
    setSelectedProject(proj);
    setActiveGalleryIndex(0);
    setActiveMediaType('image');
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors duration-200">
      {/* ========================================================================
          1. HERO VIEWPORT
          Fills viewport height with Gradient ASCII interactive canvas and 3D Avatar
          ======================================================================== */}
      <section className="min-h-[calc(100vh-8rem)] relative flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-8 overflow-hidden">
        {/* Background Gradient ASCII canvas effect */}
        <div className="absolute inset-0 z-0 pointer-events-auto opacity-35 dark:opacity-55">
          <GradientASCII
            colors={
              isDark
                ? ['#1e3fd8', '#38bdf8', '#818cf8', '#c084fc']
                : ['#2563eb', '#60a5fa', '#93c5fd', '#bfdbfe']
            }
            shape="horizon"
            characters=" =+xX0S8#@"
            cellSize={18}
            density={0.65}
            lightMode={!isDark}
            mouseInteraction={true}
            clickEffect="wave"
          />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-5 max-w-4xl mx-auto">
          {/* Central 3D Interactive Floating Avatar */}
          <AvatarOrbit3D />


          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-pixel tracking-wide text-neutral-900 dark:text-neutral-50">
            {personalInfo.fullName}
          </h1>

          {/* Subtitle / Bio summary */}
          {/* <p className="text-sm sm:text-base md:text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl leading-relaxed">
            {personalInfo.summary}
          </p> */}

          {/* Action CTAs */}
          {/* <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={personalInfo.cvUrl}
              download="CV___Remote.pdf"
              target="_blank"
              rel="noreferrer"
              className="no-underline"
            >
              <Button
                label="Download CV (PDF)"
                variant="primary"
                size="md"
                iconStart={<Download className="w-4 h-4" />}
              />
            </a>
            <a href="#projects" className="no-underline">
              <Button
                label="Explore Projects"
                variant="secondary"
                size="md"
                iconEnd={<ArrowRight className="w-4 h-4" />}
              />
            </a>
            <a href="#contact" className="no-underline">
              <Button
                label="Contact Me"
                variant="ghost"
                size="md"
                iconStart={<Mail className="w-4 h-4" />}
              />
            </a>
          </div> */}

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 pt-4 w-full max-w-2xl">
            {personalInfo.stats.map((stat, i) => (
              <div
                key={i}
                className="p-3 rounded-2xl bg-white/70 dark:bg-neutral-900/70 border border-neutral-200/60 dark:border-neutral-800/60 backdrop-blur-sm shadow-2xs"
              >
                <div className="text-xl sm:text-2xl font-pixel text-blue-600 dark:text-blue-400">
                  {stat.value}
                </div>
                <div className="text-[11px] sm:text-xs text-neutral-500 dark:text-neutral-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================
          2. SENTINEL & STICKY NAVBAR
          Sits at the bottom of the hero screen and sticks to the top upon scroll
          ======================================================================== */}
      <div ref={sentinelRef} className="h-0 w-full pointer-events-none" />
      <Navbar isStuck={isStuck} nameProgress={nameProgress} />

      {/* ========================================================================
          3. MAIN SCROLLABLE CONTENT SECTIONS
          ======================================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

        {/* ----------------------------------------------------------------------
            SECTION 1: ABOUT ME & ENGINEERING PHILOSOPHY
            ---------------------------------------------------------------------- */}
        <section
          id="about"
          className="scroll-mt-24 rounded-[2.5rem] bg-gradient-to-b from-white via-neutral-50/80 to-neutral-100/90 dark:from-neutral-900 dark:via-neutral-900/90 dark:to-neutral-950 border border-neutral-200/80 dark:border-neutral-800/80 p-6 sm:p-10 lg:p-12 shadow-sm space-y-12 relative overflow-hidden"
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-200/60 dark:border-neutral-800/60 pb-6">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <Badge label="About Me" variant="neutral" />
                <Badge label="Philosophy" variant="info" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-pixel tracking-wide">
                Biography & Principles
              </h2>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 dark:bg-blue-950/40 border border-blue-200/70 dark:border-blue-900/60 text-blue-700 dark:text-blue-300 text-xs font-semibold shadow-xs w-fit">
              <Sparkles className="w-3.5 h-3.5 text-blue-500" />
              <span>Crafted with React 19 • Tailwind CSS • Astryx UI</span>
            </div>
          </div>

          {/* Profile Overview Card + Visual Identity Avatars */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Bio & Contact Details */}
            <div className="lg:col-span-2 space-y-6">
              <h3 className="text-2xl font-pixel tracking-wide text-neutral-900 dark:text-neutral-100">
                Introduction
              </h3>
              <p className="text-neutral-700 dark:text-neutral-300 text-base leading-relaxed">
                I am a <strong>Software Engineer</strong> and <strong>Data Analyst</strong> with around 4 years of experience building production-grade APIs, high-throughput data pipelines, and automated workflow solutions. Combining a solid computer science background with hands-on expertise in artificial intelligence, backend web systems, and data analytics, I specialize in translating complex real-world challenges into reliable, high-performance software.
              </p>
              <p className="text-neutral-700 dark:text-neutral-300 text-base leading-relaxed">
                Currently, I serve as an <strong>Operations Analyst, Growth Operations</strong> at <strong>Commure Bangladesh (Augmedix)</strong> in Dhaka, contributing to revenue benchmarking operations, automated reporting workflows, and clinical AI quality control.
              </p>

              {/* Fast Facts Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-neutral-100/70 dark:bg-neutral-800/50 border border-neutral-200/60 dark:border-neutral-800/60 space-y-1">
                  <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 font-semibold uppercase tracking-wider">
                    <MapPin className="w-3.5 h-3.5 text-blue-500" />
                    <span>Location</span>
                  </div>
                  <div className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                    {personalInfo.location}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-neutral-100/70 dark:bg-neutral-800/50 border border-neutral-200/60 dark:border-neutral-800/60 space-y-1">
                  <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 font-semibold uppercase tracking-wider">
                    <Mail className="w-3.5 h-3.5 text-blue-500" />
                    <span>Direct Email</span>
                  </div>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline block truncate"
                  >
                    {personalInfo.email}
                  </a>
                </div>

                <div className="p-4 rounded-2xl bg-neutral-100/70 dark:bg-neutral-800/50 border border-neutral-200/60 dark:border-neutral-800/60 space-y-1">
                  <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 font-semibold uppercase tracking-wider">
                    <Phone className="w-3.5 h-3.5 text-blue-500" />
                    <span>Phone / Mobile</span>
                  </div>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {personalInfo.phone}
                  </a>
                </div>

                <div className="p-4 rounded-2xl bg-neutral-100/70 dark:bg-neutral-800/50 border border-neutral-200/60 dark:border-neutral-800/60 space-y-1">
                  <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 font-semibold uppercase tracking-wider">
                    <FileText className="w-3.5 h-3.5 text-blue-500" />
                    <span>Official Resume</span>
                  </div>
                  <a
                    href={personalInfo.cvUrl}
                    download="CV___Remote.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                  >
                    <span>Download CV PDF</span>
                    <Download className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Executive Portrait (Clean real portrait, no stylized cartoons) */}
            <div className="space-y-3">
              <div className="rounded-3xl overflow-hidden border border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-100 dark:bg-neutral-900 shadow-sm relative group aspect-[4/5] max-w-sm mx-auto">
                <img
                  src={personalInfo.avatars.portrait}
                  alt="Ahmed Awsaf"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="font-pixel text-sm text-white tracking-wide">
                    {personalInfo.fullName}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/20 text-emerald-300 backdrop-blur-md border border-emerald-400/30">
                    {personalInfo.preferredName}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Engineering Philosophy Cards */}
          <div className="space-y-4 pt-4 border-t border-neutral-200/60 dark:border-neutral-800/60">
            <h3 className="text-xl sm:text-2xl font-pixel tracking-wide">
              Engineering Mission & Values
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {personalInfo.philosophy.map((item, idx) => {
                const icons = {
                  HeartHandshake: <HeartHandshake className="w-5 h-5 text-rose-500" />,
                  ShieldCheck: <ShieldCheck className="w-5 h-5 text-blue-500" />,
                  Layers: <Layers className="w-5 h-5 text-indigo-500" />,
                  Cpu: <Cpu className="w-5 h-5 text-emerald-500" />,
                };
                return (
                  <Card
                    key={idx}
                    variant="default"
                    className={`!rounded-3xl ${projectTints[idx % projectTints.length]} !p-6 shadow-xs flex flex-col justify-between space-y-4`}
                  >
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-2xl bg-white/80 dark:bg-neutral-900/80 flex items-center justify-center shadow-2xs">
                        {icons[item.icon] || <Sparkles className="w-5 h-5 text-blue-500" />}
                      </div>
                      <h4 className="text-base font-pixel tracking-wide text-neutral-900 dark:text-neutral-100">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>



        {/* ----------------------------------------------------------------------
            SECTION 2: WORK EXPERIENCE
            ---------------------------------------------------------------------- */}
        <section
          id="experience"
          className="scroll-mt-24 rounded-[2.5rem] bg-gradient-to-b from-white via-neutral-50/80 to-neutral-100/90 dark:from-neutral-900 dark:via-neutral-900/90 dark:to-neutral-950 border border-neutral-200/80 dark:border-neutral-800/80 p-6 sm:p-10 lg:p-12 shadow-sm space-y-10 relative overflow-hidden"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-200/60 dark:border-neutral-800/60 pb-6">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <Badge label="Career" variant="neutral" />
                <Badge label="4+ Years" variant="success" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-pixel tracking-wide">
                Professional Experience
              </h2>
            </div>
            <span className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">
              Health-tech AI, legal-tech platforms, ERP systems & private networks
            </span>
          </div>

          {/* Experience Timeline Cards */}
          <div className="space-y-6">
            {experienceData.map((job, idx) => (
              <Card
                key={job.id}
                variant="default"
                className={`!rounded-3xl ${projectTints[idx % projectTints.length]} !p-6 sm:!p-8 shadow-xs space-y-5 transition-all`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-200/60 dark:border-neutral-800/60 pb-4">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl sm:text-2xl font-pixel tracking-wide text-neutral-900 dark:text-neutral-100">
                        {job.role}
                      </h3>
                      <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                        @ {job.company}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-neutral-500 dark:text-neutral-400">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                        {job.location}
                      </span>
                      <span>•</span>
                      <span>{job.domain}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/80 dark:bg-neutral-900/80 border border-neutral-200/60 dark:border-neutral-800/60 text-neutral-700 dark:text-neutral-300 shadow-2xs whitespace-nowrap">
                      {job.period}
                    </span>
                    {job.website && (
                      <a
                        href={job.website}
                        target="_blank"
                        rel="noreferrer"
                        className="no-underline"
                      >
                        <Button
                          label="Website"
                          variant="ghost"
                          size="sm"
                          iconEnd={<ExternalLink className="w-3 h-3" />}
                        />
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  {job.description}
                </p>

                {/* Key Achievements Bullet points */}
                <div className="space-y-2.5">
                  <h4 className="text-xs font-pixel tracking-wider uppercase text-neutral-500 dark:text-neutral-400">
                    Key Accomplishments & Impact
                  </h4>
                  <ul className="space-y-2">
                    {job.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-neutral-200/40 dark:border-neutral-800/40">
                  <span className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 mr-1">
                    Technologies:
                  </span>
                  {job.techStack.map((tech) => (
                    <Badge key={tech} label={tech} variant="neutral" />
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* ----------------------------------------------------------------------
            SECTION 3: COMPLETE PROJECTS SHOWCASE (ALL 9 PROJECTS)
            ---------------------------------------------------------------------- */}
        <section
          id="projects"
          className="scroll-mt-24 rounded-[2.5rem] bg-gradient-to-b from-white via-neutral-50/80 to-neutral-100/90 dark:from-neutral-900 dark:via-neutral-900/90 dark:to-neutral-950 border border-neutral-200/80 dark:border-neutral-800/80 p-6 sm:p-10 lg:p-12 shadow-sm space-y-8 relative overflow-hidden"
        >
          {/* Header */}
          <div className="space-y-6 border-b border-neutral-200/60 dark:border-neutral-800/60 pb-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Badge label="Projects Catalog" variant="neutral" />
                <Badge label={`${projects.length} Completed`} variant="info" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-pixel tracking-wide">
                Featured Works & Engineering
              </h2>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-2xl">
                Click any project card to inspect screenshots, video demos, and full technical architecture.
              </p>
            </div>

            {/* Category Filter Chips Bar */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {categories.map((cat) => {
                const count = cat === 'All' ? projects.length : projects.filter((p) => p.category === cat).length;
                const isActive = projectCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setProjectCategory(cat)}
                    className={`group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 shadow-sm ring-1 ring-neutral-900/10 dark:ring-white/20'
                        : 'bg-neutral-100/90 dark:bg-neutral-800/80 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-200/70 dark:hover:bg-neutral-700/70 border border-neutral-200/70 dark:border-neutral-700/60'
                    }`}
                  >
                    <span>{cat}</span>
                    <span
                      className={`px-1.5 py-0.5 rounded-md text-[10px] font-mono font-semibold transition-colors ${
                        isActive
                          ? 'bg-white/20 text-white dark:bg-neutral-950/20 dark:text-neutral-950'
                          : 'bg-neutral-200/80 dark:bg-neutral-700/70 text-neutral-500 dark:text-neutral-400 group-hover:bg-neutral-300/80 dark:group-hover:bg-neutral-600/80'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((proj, idx) => (
              <Card
                key={proj.id}
                onClick={() => openProjectModal(proj)}
                variant="default"
                className={`group !rounded-3xl ${projectTints[idx % projectTints.length]} overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer !p-0`}
              >
                <div>
                  {/* Project Image Header */}
                  <div className="relative aspect-video w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />

                    {/* Logo & Category Badges */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      {proj.logo && (
                        <div className="w-8 h-8 rounded-full bg-white p-1 border border-white/60 shadow-md overflow-hidden flex items-center justify-center flex-shrink-0">
                          <img src={proj.logo} alt="" className="w-full h-full object-contain" />
                        </div>
                      )}
                      <Badge label={proj.category} variant="info" />
                    </div>

                    <div className="absolute top-4 right-4">
                      <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-black/60 backdrop-blur-md text-white border border-white/20">
                        {proj.year}
                      </span>
                    </div>

                    {proj.recognition && (
                      <div className="absolute bottom-3 left-3 right-3">
                        <span className="inline-block px-2.5 py-1 rounded-lg text-xs font-semibold bg-blue-600/90 text-white backdrop-blur-md border border-blue-400/40 truncate max-w-full">
                          {proj.recognition}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-7 space-y-3">
                    <h3 className="text-xl sm:text-2xl font-pixel tracking-wide group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex items-center justify-between">
                      <span>{proj.title}</span>
                      <ArrowUpRight className="w-5 h-5 text-neutral-400 group-hover:text-blue-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2 leading-relaxed">
                      {proj.tagline}
                    </p>
                  </div>
                </div>

                {/* Tech Stack & Action Footer */}
                <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-neutral-200/40 dark:border-neutral-800/40">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.techStack.slice(0, 3).map((t) => (
                      <Badge key={t} label={t} variant="neutral" />
                    ))}
                    {proj.techStack.length > 3 && (
                      <span className="text-xs text-neutral-500 dark:text-neutral-400 self-center font-medium">
                        +{proj.techStack.length - 3} more
                      </span>
                    )}
                  </div>
                  <Button
                    label="Inspect Details"
                    variant="secondary"
                    size="sm"
                    iconEnd={<ArrowRight className="w-3.5 h-3.5" />}
                    onClick={(e) => {
                      e.stopPropagation();
                      openProjectModal(proj);
                    }}
                  />
                </div>
              </Card>
            ))}
          </div>

          {/* Revamped Interactive Project Inspection Modal (No scroll-to-top!) */}
          {selectedProject && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-neutral-950/80 backdrop-blur-md transition-opacity duration-300"
              onClick={() => setSelectedProject(null)}
              role="dialog"
              aria-modal="true"
            >
              <div
                className="relative w-full max-w-5xl max-h-[92vh] flex flex-col bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 rounded-[2rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header Bar */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200/70 dark:border-neutral-800/70 bg-neutral-50/80 dark:bg-neutral-900/90 backdrop-blur-sm z-20 flex-shrink-0">
                  <div className="flex items-center gap-3 min-w-0">
                    {selectedProject.logo && (
                      <div className="w-10 h-10 rounded-full bg-white p-1.5 border border-neutral-200/80 shadow-sm overflow-hidden flex items-center justify-center flex-shrink-0">
                        <img
                          src={selectedProject.logo}
                          alt=""
                          className="w-full h-full object-contain"
                        />
                      </div>
                    )}
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg sm:text-xl font-pixel tracking-wide text-neutral-900 dark:text-neutral-100 truncate">
                          {selectedProject.title}
                        </h3>
                        <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-neutral-200/70 dark:bg-neutral-800/80 text-neutral-700 dark:text-neutral-300">
                          {selectedProject.year}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
                        <span>{selectedProject.category}</span>
                        <span>•</span>
                        <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                          {selectedProject.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0">
                    {selectedProject.links?.demo && (
                      <a
                        href={selectedProject.links.demo}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="hidden sm:inline-block no-underline"
                      >
                        <Button
                          label="Live Demo"
                          variant="primary"
                          size="sm"
                          iconEnd={<ExternalLink className="w-3.5 h-3.5" />}
                        />
                      </a>
                    )}
                    {selectedProject.links?.github && (
                      <a
                        href={selectedProject.links.github}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="hidden sm:inline-block no-underline"
                      >
                        <Button
                          label="GitHub"
                          variant="secondary"
                          size="sm"
                          iconStart={<SiGithub className="w-3.5 h-3.5" />}
                        />
                      </a>
                    )}

                    {/* Circular Close Button with ESC Pill */}
                    <button
                      type="button"
                      onClick={() => setSelectedProject(null)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-600 dark:text-neutral-300 transition-colors cursor-pointer text-xs font-semibold"
                      aria-label="Close inspection modal"
                      title="Press Escape to close"
                    >
                      <span className="hidden sm:inline-block text-[10px] text-neutral-400 font-mono">ESC</span>
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Scrollable Modal Content */}
                <div className="overflow-y-auto p-6 sm:p-8 space-y-8 flex-1">
                  {/* Media Showcase */}
                  <div className="space-y-3">
                    {/* Media Type Switcher Tabs (if video demo is available) */}
                    {selectedProject.video && (
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setActiveMediaType('image')}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${activeMediaType === 'image'
                            ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 shadow-xs'
                            : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                            }`}
                        >
                          <ImageIcon className="w-3.5 h-3.5" />
                          <span>Screenshots Gallery ({selectedProject.gallery?.length || 1})</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setActiveMediaType('video')}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${activeMediaType === 'video'
                            ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 shadow-xs'
                            : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                            }`}
                        >
                          <Play className="w-3.5 h-3.5 text-blue-500" />
                          <span>Video Demo</span>
                        </button>
                      </div>
                    )}

                    {/* Main Media Viewport */}
                    <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-200/60 dark:border-neutral-800/60 shadow-inner flex items-center justify-center group">
                      {activeMediaType === 'video' && selectedProject.video ? (
                        <video
                          controls
                          autoPlay
                          src={selectedProject.video}
                          className="w-full h-full object-contain bg-black"
                        />
                      ) : (
                        <>
                          <img
                            src={
                              selectedProject.gallery && selectedProject.gallery.length > 0
                                ? selectedProject.gallery[activeGalleryIndex]
                                : selectedProject.image
                            }
                            alt={selectedProject.title}
                            className="w-full h-full object-contain transition-transform duration-300"
                          />

                          {/* Prev / Next buttons for multi-image galleries */}
                          {selectedProject.gallery && selectedProject.gallery.length > 1 && (
                            <>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setActiveGalleryIndex((prev) =>
                                    prev === 0 ? selectedProject.gallery.length - 1 : prev - 1
                                  );
                                }}
                                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all opacity-80 group-hover:opacity-100 cursor-pointer"
                                aria-label="Previous screenshot"
                              >
                                <ChevronLeft className="w-5 h-5" />
                              </button>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setActiveGalleryIndex((prev) =>
                                    (prev + 1) % selectedProject.gallery.length
                                  );
                                }}
                                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all opacity-80 group-hover:opacity-100 cursor-pointer"
                                aria-label="Next screenshot"
                              >
                                <ChevronRight className="w-5 h-5" />
                              </button>

                              {/* Index counter badge */}
                              <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full text-xs font-mono font-semibold bg-black/70 backdrop-blur-md text-white border border-white/20">
                                {activeGalleryIndex + 1} / {selectedProject.gallery.length}
                              </div>
                            </>
                          )}
                        </>
                      )}
                    </div>

                    {/* Thumbnail gallery strip */}
                    {activeMediaType === 'image' &&
                      selectedProject.gallery &&
                      selectedProject.gallery.length > 1 && (
                        <div className="flex items-center gap-2.5 overflow-x-auto pb-1 pt-1">
                          {selectedProject.gallery.map((img, gIdx) => (
                            <button
                              key={gIdx}
                              type="button"
                              onClick={() => setActiveGalleryIndex(gIdx)}
                              className={`relative w-20 h-14 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all cursor-pointer ${activeGalleryIndex === gIdx
                                ? 'border-blue-500 scale-105 shadow-md shadow-blue-500/20'
                                : 'border-transparent opacity-60 hover:opacity-100'
                                }`}
                            >
                              <img src={img} alt="" className="w-full h-full object-cover" />
                            </button>
                          ))}
                        </div>
                      )}
                  </div>

                  {/* Recognition ribbon if present */}
                  {selectedProject.recognition && (
                    <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center gap-3">
                      <span className="text-xl">🏆</span>
                      <div className="text-xs sm:text-sm font-semibold text-amber-700 dark:text-amber-300">
                        {selectedProject.recognition}
                      </div>
                    </div>
                  )}

                  {/* 2-Column Responsive Overview & Metadata */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left: Overview & Key Highlights (2 Cols) */}
                    <div className="lg:col-span-2 space-y-6">
                      <div className="space-y-2">
                        <h4 className="text-xs font-pixel tracking-wider uppercase text-neutral-400">
                          About this Project
                        </h4>
                        <p className="text-base sm:text-lg font-medium text-neutral-900 dark:text-neutral-100 leading-snug">
                          {selectedProject.tagline}
                        </p>
                        <p className="text-sm sm:text-base leading-relaxed text-neutral-700 dark:text-neutral-300 pt-1">
                          {selectedProject.description}
                        </p>
                      </div>

                      {/* Technical Highlights with Checkmarks */}
                      {selectedProject.highlights && (
                        <div className="space-y-3 pt-2">
                          <h4 className="text-xs font-pixel tracking-wider uppercase text-neutral-400">
                            Key Technical Feats & Architecture
                          </h4>
                          <ul className="space-y-2.5">
                            {selectedProject.highlights.map((h, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-3 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed p-3 rounded-2xl bg-neutral-100/70 dark:bg-neutral-800/40 border border-neutral-200/50 dark:border-neutral-800/50"
                              >
                                <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Right: Tech Stack & Teammates (1 Col) */}
                    <div className="space-y-6 p-6 rounded-3xl bg-neutral-100/70 dark:bg-neutral-800/40 border border-neutral-200/60 dark:border-neutral-800/60 h-fit">
                      {/* Tech Stack */}
                      <div className="space-y-3">
                        <h4 className="text-xs font-pixel tracking-wider uppercase text-neutral-400">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {selectedProject.techStack.map((tech) => (
                            <Badge key={tech} label={tech} variant="neutral" />
                          ))}
                        </div>
                      </div>

                      {/* Collaborators */}
                      {selectedProject.collaborators && (
                        <div className="space-y-2 border-t border-neutral-200/60 dark:border-neutral-800/60 pt-4">
                          <h4 className="text-xs font-pixel tracking-wider uppercase text-neutral-400">
                            Team & Collaborators
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {selectedProject.collaborators.map((c, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 rounded-full text-xs font-medium bg-white/80 dark:bg-neutral-900/80 text-neutral-700 dark:text-neutral-300 border border-neutral-200/50 dark:border-neutral-800/50"
                              >
                                {c}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* External Links */}
                      <div className="space-y-2 border-t border-neutral-200/60 dark:border-neutral-800/60 pt-4">
                        <h4 className="text-xs font-pixel tracking-wider uppercase text-neutral-400">
                          Project Links
                        </h4>
                        <div className="flex flex-col gap-2">
                          {selectedProject.links?.demo && (
                            <a
                              href={selectedProject.links.demo}
                              target="_blank"
                              rel="noreferrer noopener"
                              className="no-underline w-full"
                            >
                              <Button
                                label="Open Live Application"
                                variant="primary"
                                className="w-full justify-center"
                                iconEnd={<ExternalLink className="w-3.5 h-3.5" />}
                              />
                            </a>
                          )}
                          {selectedProject.links?.github && (
                            <a
                              href={selectedProject.links.github}
                              target="_blank"
                              rel="noreferrer noopener"
                              className="no-underline w-full"
                            >
                              <Button
                                label="View Source Code"
                                variant="secondary"
                                className="w-full justify-center"
                                iconStart={<SiGithub className="w-3.5 h-3.5" />}
                              />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Bar */}
                <div className="flex items-center justify-between px-6 py-4 border-t border-neutral-200/70 dark:border-neutral-800/70 bg-neutral-50/80 dark:bg-neutral-900/90 backdrop-blur-sm flex-shrink-0">
                  <span className="text-xs text-neutral-500 dark:text-neutral-400">
                    Press <kbd className="px-1.5 py-0.5 rounded bg-neutral-200 dark:bg-neutral-800 font-mono text-[10px]">ESC</kbd> or click outside to close
                  </span>
                  <Button
                    label="Close"
                    variant="ghost"
                    onClick={() => setSelectedProject(null)}
                  />
                </div>
              </div>
            </div>
          )}
        </section>

        {/* ----------------------------------------------------------------------
            SECTION 4: ACADEMIC RESEARCH & CAPSTONE THESIS
            ---------------------------------------------------------------------- */}
        <section
          id="research"
          className="scroll-mt-24 rounded-[2.5rem] bg-gradient-to-b from-white via-neutral-50/80 to-neutral-100/90 dark:from-neutral-900 dark:via-neutral-900/90 dark:to-neutral-950 border border-neutral-200/80 dark:border-neutral-800/80 p-6 sm:p-10 lg:p-12 shadow-sm space-y-10 relative overflow-hidden"
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-200/60 dark:border-neutral-800/60 pb-6">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <Badge label="Academic Publication" variant="neutral" />
                <Badge label="BRAC University 2025" variant="info" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-pixel tracking-wide">
                Research & Thesis
              </h2>
            </div>
            <a
              href={researchData.handleUrl}
              target="_blank"
              rel="noreferrer"
              className="no-underline"
            >
              <Button
                label="View in Institutional Repository"
                variant="primary"
                size="sm"
                iconEnd={<ExternalLink className="w-3.5 h-3.5" />}
              />
            </a>
          </div>

          {/* Research Architecture Hero Graphic */}
          <div className="rounded-3xl overflow-hidden border border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-950 p-2 sm:p-4 shadow-sm space-y-3">
            <div className="aspect-[21/9] w-full rounded-2xl overflow-hidden bg-neutral-900 flex items-center justify-center">
              <img
                src={researchData.image}
                alt="Digital Twin Architecture Diagram"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="px-3 pb-2 text-xs text-neutral-400 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span>Figure 1: Full-Pipeline Digital Twin Simulation Architecture for Dhaka Traffic Flow</span>
              <span className="font-mono text-neutral-500">Handle URI: {researchData.handleUrl}</span>
            </div>
          </div>

          {/* Paper Details & Abstract */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 space-y-5">
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-pixel tracking-wide text-neutral-900 dark:text-neutral-100">
                  {researchData.title}
                </h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 font-mono">
                  {researchData.citation}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-pixel tracking-wider uppercase text-neutral-500 dark:text-neutral-400">
                  Abstract & Executive Summary
                </h4>
                <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  {researchData.abstract}
                </p>
              </div>

              {/* 3-Tier System Architecture */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-pixel tracking-wider uppercase text-neutral-500 dark:text-neutral-400">
                  Methodology & Architectural Layers
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {researchData.architecture.map((arch, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-2xl bg-white/70 dark:bg-neutral-900/60 border border-neutral-200/60 dark:border-neutral-800/60 space-y-2"
                    >
                      <div className="text-xs font-pixel text-blue-600 dark:text-blue-400">
                        {arch.step}
                      </div>
                      <div className="text-[11px] font-semibold text-neutral-500 dark:text-neutral-400">
                        {arch.tech}
                      </div>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        {arch.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Research Meta Column */}
            <div className="space-y-6 p-6 rounded-3xl bg-neutral-100/70 dark:bg-neutral-800/40 border border-neutral-200/60 dark:border-neutral-800/60">
              <div className="space-y-3">
                <h4 className="text-xs font-pixel tracking-wider uppercase text-neutral-500 dark:text-neutral-400">
                  Key Findings & Value
                </h4>
                <ul className="space-y-2 text-xs text-neutral-700 dark:text-neutral-300">
                  {researchData.keyContributions.map((contrib, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span>{contrib}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2 border-t border-neutral-200/60 dark:border-neutral-800/60 pt-4">
                <h4 className="text-xs font-pixel tracking-wider uppercase text-neutral-500 dark:text-neutral-400">
                  Research Co-Authors
                </h4>
                <div className="flex flex-col space-y-1 text-xs text-neutral-700 dark:text-neutral-300">
                  {researchData.coAuthors.map((author, i) => (
                    <span key={i}>• {author}</span>
                  ))}
                </div>
              </div>

              <div className="space-y-2 border-t border-neutral-200/60 dark:border-neutral-800/60 pt-4">
                <h4 className="text-xs font-pixel tracking-wider uppercase text-neutral-500 dark:text-neutral-400">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {researchData.techStack.map((tech) => (
                    <Badge key={tech} label={tech} variant="neutral" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------------------------
            SECTION 5: EDUCATION & AWARDS / HONORS
            ---------------------------------------------------------------------- */}
        <section
          id="education"
          className="scroll-mt-24 rounded-[2.5rem] bg-gradient-to-b from-white via-neutral-50/80 to-neutral-100/90 dark:from-neutral-900 dark:via-neutral-900/90 dark:to-neutral-950 border border-neutral-200/80 dark:border-neutral-800/80 p-6 sm:p-10 lg:p-12 shadow-sm space-y-10 relative overflow-hidden"
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-200/60 dark:border-neutral-800/60 pb-6">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <Badge label="Academics" variant="neutral" />
                <Badge label="Honors" variant="warning" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-pixel tracking-wide">
                Education & Accolades
              </h2>
            </div>
            <span className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">
              Academic honors, batch valedictorian awards & hackathon victories
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Column 1: Academic Degrees */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-xs font-pixel tracking-wider uppercase text-neutral-500 dark:text-neutral-400">
                <GraduationCap className="w-4 h-4 text-indigo-500" />
                <span>Academic Degrees</span>
              </div>

              <div className="space-y-5">
                {educationData.map((edu, idx) => (
                  <Card
                    key={idx}
                    variant="default"
                    className={`!rounded-3xl ${projectTints[idx % projectTints.length]} !p-6 shadow-xs space-y-4`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-200/60 dark:border-neutral-800/60 pb-3">
                      <div>
                        <h3 className="text-lg font-pixel tracking-wide text-neutral-900 dark:text-neutral-100">
                          {edu.degree}
                        </h3>
                        <div className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                          {edu.institution} • {edu.location}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                          {edu.honor}
                        </span>
                        <span className="text-xs font-mono font-bold text-neutral-800 dark:text-neutral-200">
                          {edu.cgpa}
                        </span>
                      </div>
                    </div>

                    <div className="text-xs text-neutral-500 dark:text-neutral-400">
                      Duration: {edu.period}
                    </div>

                    <ul className="space-y-1.5 text-xs text-neutral-700 dark:text-neutral-300">
                      {edu.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>
            </div>

            {/* Column 2: Honors & Awards */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-xs font-pixel tracking-wider uppercase text-neutral-500 dark:text-neutral-400">
                <Award className="w-4 h-4 text-amber-500" />
                <span>Awards & Distinctions</span>
              </div>

              <div className="space-y-4">
                {awardsData.map((award, aIdx) => (
                  <div
                    key={aIdx}
                    className="p-5 rounded-2xl bg-white/70 dark:bg-neutral-900/60 border border-neutral-200/60 dark:border-neutral-800/60 shadow-2xs space-y-2 hover:border-amber-400/50 transition-colors"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-amber-500 font-bold text-sm">🏆</span>
                        <h4 className="text-sm sm:text-base font-pixel tracking-wide text-neutral-900 dark:text-neutral-100">
                          {award.title}
                        </h4>
                      </div>
                      <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-amber-500/15 text-amber-700 dark:text-amber-300">
                        {award.year}
                      </span>
                    </div>

                    <div className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                      {award.issuer} • <span className="italic">{award.category}</span>
                    </div>

                    <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed pt-1">
                      {award.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------------------------
            SECTION 6: TECHNICAL SKILLS & MATRIX
            ---------------------------------------------------------------------- */}
        <section
          id="skills"
          className="scroll-mt-24 rounded-[2.5rem] bg-gradient-to-b from-white via-neutral-50/80 to-neutral-100/90 dark:from-neutral-900 dark:via-neutral-900/90 dark:to-neutral-950 border border-neutral-200/80 dark:border-neutral-800/80 p-6 sm:p-10 lg:p-12 shadow-sm space-y-10 relative overflow-hidden"
        >
          {/* Header */}
          <div className="space-y-1.5 border-b border-neutral-200/60 dark:border-neutral-800/60 pb-6">
            <div className="flex items-center gap-2">
              <Badge label="Tech Matrix" variant="neutral" />
              <Badge label="Ecosystem" variant="info" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-pixel tracking-wide">
              Skills & Technical Capabilities
            </h2>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Languages, frameworks, database architectures, and developer tooling mastered across production systems.
            </p>
          </div>

          {/* Infinite Animated Stack Loop */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-neutral-950/60 border border-neutral-200/70 dark:border-neutral-800/70 shadow-xs space-y-6 overflow-hidden">
            <div className="flex items-center justify-between text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider px-2">
              <span>Interactive Ecosystem Ticker</span>
              <span className="hidden sm:inline-block text-[11px] font-normal normal-case text-neutral-400 dark:text-neutral-500">
                Hover to focus • Drag to fling
              </span>
            </div>

            <div className="py-2">
              <LogoLoop
                logos={techLogos}
                speed={75}
                direction="left"
                logoHeight={38}
                gap={48}
                hoverSpeed={0}
                scaleOnHover={true}
                fadeOut={true}
                fadeOutWidth={0.14}
                labels="hover"
                draggable={true}
                ariaLabel="Primary technology loop"
              />
            </div>
          </div>

          {/* Categorized Skills Grids */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Programming Languages Matrix */}
            <Card
              variant="default"
              className="!p-6 !rounded-3xl !bg-sky-50/60 dark:!bg-sky-950/20 !border-sky-200/70 dark:!border-sky-900/40 space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-pixel tracking-wider uppercase text-sky-700 dark:text-sky-300">
                  Programming Languages
                </span>
                <Badge label="Core" variant="neutral" />
              </div>
              <div className="space-y-3">
                {skillsData.languages.map((lang) => (
                  <div key={lang.name} className="space-y-1">
                    <div className="flex items-center justify-between text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                      <span>{lang.name}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-sky-200/60 dark:bg-sky-900/60 text-sky-800 dark:text-sky-200">
                        {lang.level}
                      </span>
                    </div>
                    <p className="text-[11px] text-neutral-500 dark:text-neutral-400 leading-tight">
                      {lang.useCase}
                    </p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Frameworks & Libraries */}
            <Card
              variant="default"
              className="!p-6 !rounded-3xl !bg-indigo-50/60 dark:!bg-indigo-950/20 !border-indigo-200/70 dark:!border-indigo-900/40 space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-pixel tracking-wider uppercase text-indigo-700 dark:text-indigo-300">
                  Frameworks & Engines
                </span>
                <Badge label="Full-Stack" variant="neutral" />
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {skillsData.frameworks.map((f) => (
                  <div
                    key={f.name}
                    className="p-2.5 rounded-xl bg-white/80 dark:bg-neutral-900/80 border border-indigo-200/60 dark:border-indigo-900/40 text-xs font-medium text-neutral-800 dark:text-neutral-200 shadow-2xs"
                  >
                    <div className="font-semibold">{f.name}</div>
                    <div className="text-[10px] text-indigo-500">{f.category}</div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Databases & Storage */}
            <Card
              variant="default"
              className="!p-6 !rounded-3xl !bg-purple-50/60 dark:!bg-purple-950/20 !border-purple-200/70 dark:!border-purple-900/40 space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-pixel tracking-wider uppercase text-purple-700 dark:text-purple-300">
                  Databases & Cloud Storage
                </span>
                <Badge label="Data" variant="neutral" />
              </div>
              <div className="space-y-3">
                {skillsData.databases.map((db) => (
                  <div key={db.name} className="space-y-0.5">
                    <div className="text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                      {db.name}
                    </div>
                    <p className="text-[11px] text-neutral-500 dark:text-neutral-400 leading-tight">
                      {db.desc}
                    </p>
                  </div>
                ))}
              </div>
            </Card>

            {/* DevOps, Tools & Systems */}
            <div className="lg:col-span-3 p-6 rounded-3xl bg-neutral-100/70 dark:bg-neutral-900/60 border border-neutral-200/60 dark:border-neutral-800/60 space-y-3">
              <span className="text-xs font-pixel tracking-wider uppercase text-neutral-600 dark:text-neutral-400">
                DevOps, Machine Learning & Automation Tooling
              </span>
              <div className="flex flex-wrap gap-2">
                {skillsData.toolsAndDevOps.map((tool) => (
                  <Badge key={tool} label={tool} variant="neutral" />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------------------------
            SECTION 7: COLLABORATORS & TEAMMATES
            ---------------------------------------------------------------------- */}
        <section
          id="collaborators"
          className="scroll-mt-24 rounded-[2.5rem] bg-gradient-to-b from-white via-neutral-50/80 to-neutral-100/90 dark:from-neutral-900 dark:via-neutral-900/90 dark:to-neutral-950 border border-neutral-200/80 dark:border-neutral-800/80 p-6 sm:p-10 lg:p-12 shadow-sm space-y-8 relative overflow-hidden"
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-200/60 dark:border-neutral-800/60 pb-6">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <Badge label="Network" variant="neutral" />
                <Badge label="Community" variant="info" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-pixel tracking-wide">
                Collaborators & Teammates
              </h2>
            </div>
            <span className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">
              Hackathon teammates and project partners
            </span>
          </div>

          {/* Collaborators Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {collaboratorsData.map((collab) => (
              <div
                key={collab.id}
                className="p-5 rounded-2xl bg-white/70 dark:bg-neutral-900/60 border border-neutral-200/60 dark:border-neutral-800/60 shadow-2xs space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-neutral-900 dark:text-neutral-100">
                      {collab.name}
                    </h4>
                    {collab.github && (
                      <a
                        href={collab.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
                      >
                        <SiGithub className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                  <div className="space-y-1">
                    <span className="text-[11px] font-semibold text-neutral-500 dark:text-neutral-400 block">
                      Collaborated on:
                    </span>
                    <ul className="text-xs text-neutral-600 dark:text-neutral-300 space-y-1">
                      {collab.projects.map((p, pIdx) => (
                        <li key={pIdx}>• {p}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ----------------------------------------------------------------------
            MINI GAME: SPACE SHOOTER INTERLUDE
            ---------------------------------------------------------------------- */}
        <section id="arcade" className="scroll-mt-24 rounded-[2.5rem] bg-neutral-900/40 dark:bg-neutral-950/60 border border-neutral-800/80 p-6 sm:p-8 shadow-sm space-y-4 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Badge label="Arcade" variant="neutral" />
              <h2 className="text-2xl sm:text-3xl font-pixel tracking-wide text-neutral-100">
                Space Break
              </h2>
            </div>
          </div>
          <SpaceShooter />
        </section>

        {/* ----------------------------------------------------------------------
            SECTION 8: CONTACT & FOOTER
            ---------------------------------------------------------------------- */}
        <section
          id="contact"
          className="scroll-mt-24 rounded-[2.5rem] bg-gradient-to-b from-neutral-900 via-neutral-950 to-black text-white p-8 sm:p-12 lg:p-16 shadow-xl space-y-12 relative overflow-hidden"
        >
          {/* Subtle Ambient glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-neutral-200 text-xs font-semibold backdrop-blur-md border border-white/20">
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              <span>Get in Touch</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-pixel tracking-wide text-white">
              Let's Build Something Exceptional Together
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              Whether you have an upcoming software project, need high-throughput data automation, want to collaborate on healthcare AI quality, or simply want to connect—I'd love to hear from you.
            </p>
          </div>

          {/* Contact Methods Cards */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 transition-all text-center space-y-2 no-underline group"
            >
              <Mail className="w-6 h-6 text-blue-400 mx-auto group-hover:scale-110 transition-transform" />
              <div className="text-xs text-neutral-400">Email Me</div>
              <div className="text-xs font-medium text-white truncate">{personalInfo.email}</div>
            </a>

            <a
              href={`tel:${personalInfo.phone}`}
              className="p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 transition-all text-center space-y-2 no-underline group"
            >
              <Phone className="w-6 h-6 text-emerald-400 mx-auto group-hover:scale-110 transition-transform" />
              <div className="text-xs text-neutral-400">Call / WhatsApp</div>
              <div className="text-xs font-medium text-white">{personalInfo.phone}</div>
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 transition-all text-center space-y-2 no-underline group"
            >
              <SiGithub className="w-6 h-6 text-purple-400 mx-auto group-hover:scale-110 transition-transform" />
              <div className="text-xs text-neutral-400">GitHub Profile</div>
              <div className="text-xs font-medium text-white">github.com/AhmedAwsaf</div>
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 transition-all text-center space-y-2 no-underline group"
            >
              <ExternalLink className="w-6 h-6 text-sky-400 mx-auto group-hover:scale-110 transition-transform" />
              <div className="text-xs text-neutral-400">LinkedIn Profile</div>
              <div className="text-xs font-medium text-white">linkedin.com/in/awsaf-ahmed</div>
            </a>
          </div>

          {/* CV Direct Download Banner */}
          <div className="relative z-10 max-w-xl mx-auto p-4 rounded-2xl bg-white/10 border border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-left">
              <FileText className="w-6 h-6 text-blue-400 flex-shrink-0" />
              <div>
                <div className="text-xs font-semibold text-white">Curriculum Vitae (PDF)</div>
                <div className="text-[11px] text-neutral-300">Complete record of professional history & research</div>
              </div>
            </div>
            <a
              href={personalInfo.cvUrl}
              download="CV___Remote.pdf"
              target="_blank"
              rel="noreferrer"
              className="no-underline w-full sm:w-auto"
            >
              <Button
                label="Download PDF"
                variant="primary"
                size="sm"
                iconEnd={<Download className="w-3.5 h-3.5" />}
              />
            </a>
          </div>

          {/* Footer Bottom Bar */}
          <div className="relative z-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
            <div>
              © {new Date().getFullYear()} Ahmed Awsaf. All rights reserved.
            </div>
            {/* <div className="flex items-center gap-2">
              <span>All content configured dynamically in</span>
              <code className="text-neutral-200 bg-white/10 px-2 py-0.5 rounded font-mono text-[11px]">
                src/portfolioData.js
              </code>
            </div> */}
          </div>
        </section>

      </div>
    </div>
  );
}

export default App;

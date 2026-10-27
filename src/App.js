import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import GradientASCII from './components/GradientASCII';
import AvatarOrbit3D from './components/AvatarOrbit3D';
import LogoLoop from './components/LogoLoop';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiGraphql,
  SiFigma,
  SiJavascript,
  SiPython,
} from 'react-icons/si';
import { projects } from './projectsInfo';
import { Button, Badge, Dialog } from '@astryxdesign/core';
import { Card } from '@astryxdesign/core/Card';
import { useAppTheme } from './context/ThemeContext';
import {
  GraduationCap,
  FlaskConical,
  User,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  X,
  ArrowUpRight,
  ArrowRight,
} from 'lucide-react';
import { SiGithub } from 'react-icons/si';

const techLogos = [
  { node: <SiReact />, title: 'React 19', href: 'https://react.dev', hoverColor: '#61dafb' },
  { node: <SiNextdotjs />, title: 'Next.js', href: 'https://nextjs.org', hoverColor: '#60a5fa' },
  { node: <SiTypescript />, title: 'TypeScript', href: 'https://www.typescriptlang.org', hoverColor: '#3178c6' },
  { node: <SiJavascript />, title: 'JavaScript', href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', hoverColor: '#f7df1e' },
  { node: <SiTailwindcss />, title: 'Tailwind CSS', href: 'https://tailwindcss.com', hoverColor: '#38bdf8' },
  { node: <SiNodedotjs />, title: 'Node.js', href: 'https://nodejs.org', hoverColor: '#5fa04e' },
  { node: <SiPostgresql />, title: 'PostgreSQL', href: 'https://www.postgresql.org', hoverColor: '#4169e1' },
  { node: <SiDocker />, title: 'Docker', href: 'https://www.docker.com', hoverColor: '#2496ed' },
  { node: <SiGit />, title: 'Git', href: 'https://git-scm.com', hoverColor: '#f05032' },
  { node: <SiGraphql />, title: 'GraphQL', href: 'https://graphql.org', hoverColor: '#e10098' },
  { node: <SiPython />, title: 'Python', href: 'https://www.python.org', hoverColor: '#3776ab' },
  { node: <SiFigma />, title: 'Figma', href: 'https://www.figma.com', hoverColor: '#f24e1e' },
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
  const sentinelRef = useRef(null);

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
              // Reveal slowly over 220px of scroll distance past the sticky threshold
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

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors duration-200">
      {/* 
        ========================================================================
        1. HERO VIEWPORT
        Fills the viewport height so the navbar sits at the bottom when starting.
        ========================================================================
      */}
      <section className="min-h-[calc(100vh-5.5rem)] relative flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-8 overflow-hidden">
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

        <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-4">
          <AvatarOrbit3D />

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-pixel tracking-wide">
            Ahmed Awsaf
          </h1>
        </div>
      </section>

      {/* 
        ========================================================================
        2. SENTINEL & STICKY NAVBAR
        Sits right at the bottom of the initial screen.
        Moves up on scroll, sticks to top, fills full width, and reveals name!
        ========================================================================
      */}
      <div ref={sentinelRef} className="h-0 w-full pointer-events-none" />
      <Navbar isStuck={isStuck} nameProgress={nameProgress} />

      {/* 
        ========================================================================
        3. NEXT CONTENTS (Scrollable sections underneath the sticky navbar)
        ========================================================================
      */}
      {/* 
        ========================================================================
        3. NEXT CONTENTS (Scrollable Material 3 rounded card sections)
        ========================================================================
      */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* ========================================================================
            SECTION 1: ABOUT ME, EDUCATION, RESEARCH & MY STACK
            Material 3 rounded card container with solid colors & slight gradients
            ======================================================================== */}
        <section
          id="about"
          className="scroll-mt-24 rounded-[2.5rem] bg-gradient-to-b from-white via-neutral-50/80 to-neutral-100/90 dark:from-neutral-900 dark:via-neutral-900/90 dark:to-neutral-950 border border-neutral-200/80 dark:border-neutral-800/80 p-6 sm:p-10 lg:p-12 shadow-sm space-y-12 relative overflow-hidden"
        >
          {/* Header & Portfolio Tech Note */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-200/60 dark:border-neutral-800/60 pb-6">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <Badge label="Overview" variant="neutral" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-pixel tracking-wide">
                About, Research & Stack
              </h2>
            </div>

            {/* Note that portfolio is made with React, Tailwind, and Astryx UI */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 dark:bg-blue-950/40 border border-blue-200/70 dark:border-blue-900/60 text-blue-700 dark:text-blue-300 text-xs font-semibold shadow-xs w-fit">
              <Sparkles className="w-3.5 h-3.5 text-blue-500" />
              <span>Crafted with React 19 • Tailwind CSS • Astryx UI</span>
            </div>
          </div>

          {/* 3-Column Material 3 Cards: About Me, Education, Research */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Card 1: About Me */}
            <Card
              variant="default"
              className="!rounded-3xl !bg-sky-50/60 hover:!bg-sky-50/80 dark:!bg-sky-950/20 dark:hover:!bg-sky-950/35 !border-sky-200/70 dark:!border-sky-900/40 p-6 sm:p-7 shadow-xs flex flex-col justify-between space-y-5 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="w-11 h-11 rounded-2xl bg-sky-100/80 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-pixel tracking-wide text-sky-950 dark:text-sky-100">About Me</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2 leading-relaxed">
                    I am a software engineer focused on developing accessible, responsive user interfaces and robust scalable backend services. I love bridging design fidelity with engineering precision.
                  </p>
                </div>
              </div>
              <div className="space-y-2 pt-3 border-t border-sky-200/60 dark:border-sky-900/40 text-xs text-neutral-600 dark:text-neutral-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-500" />
                  <span>Systems thinking & clean architecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-500" />
                  <span>Pixel-perfect responsive design systems</span>
                </div>
              </div>
            </Card>

            {/* Card 2: Education */}
            <Card
              variant="default"
              className="!rounded-3xl !bg-indigo-50/60 hover:!bg-indigo-50/80 dark:!bg-indigo-950/20 dark:hover:!bg-indigo-950/35 !border-indigo-200/70 dark:!border-indigo-900/40 p-6 sm:p-7 shadow-xs flex flex-col justify-between space-y-5 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="w-11 h-11 rounded-2xl bg-indigo-100/80 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-pixel tracking-wide text-indigo-950 dark:text-indigo-100">Education</h3>
                  <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mt-2">
                    B.Sc. in Computer Science & Engineering
                  </p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 leading-relaxed">
                    Focus on Distributed Systems, Advanced Data Structures, Human-Computer Interaction, and Modern Database Architectures.
                  </p>
                </div>
              </div>
              <div className="space-y-2 pt-3 border-t border-indigo-200/60 dark:border-indigo-900/40 text-xs text-neutral-600 dark:text-neutral-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500" />
                  <span>Core: Algorithms, OS, Networks & DB Systems</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500" />
                  <span>Dean's Honor List & Academic Excellence</span>
                </div>
              </div>
            </Card>

            {/* Card 3: Research */}
            <Card
              variant="default"
              className="!rounded-3xl !bg-emerald-50/60 hover:!bg-emerald-50/80 dark:!bg-emerald-950/20 dark:hover:!bg-emerald-950/35 !border-emerald-200/70 dark:!border-emerald-900/40 p-6 sm:p-7 shadow-xs flex flex-col justify-between space-y-5 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="w-11 h-11 rounded-2xl bg-emerald-100/80 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <FlaskConical className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-pixel tracking-wide text-emerald-950 dark:text-emerald-100">Research & Exploration</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2 leading-relaxed">
                    Investigating real-time WebGL shader rendering, high-dimensional embedding visualization, and linearizable state consensus in decentralized data nodes.
                  </p>
                </div>
              </div>
              <div className="space-y-2 pt-3 border-t border-emerald-200/60 dark:border-emerald-900/40 text-xs text-neutral-600 dark:text-neutral-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>GPU-accelerated vector canvas engines</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Latency-resilient collaborative algorithms</span>
                </div>
              </div>
            </Card>
          </div>

          {/* My Stack (Infinite Stack Viewer) */}
          <div className="space-y-6 pt-4 border-t border-neutral-200/60 dark:border-neutral-800/60">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-2xl sm:text-3xl font-pixel tracking-wide">My Stack</h3>
                {/* <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Continuous infinite loop of languages, frameworks, cloud tools, and libraries.
                </p> */}
              </div>
              {/* <span className="text-xs font-semibold px-3 py-1 rounded-full bg-neutral-200/70 dark:bg-neutral-800/70 text-neutral-600 dark:text-neutral-300 w-fit">
                Infinite Stack Viewer
              </span> */}
            </div>

            {/* Infinite Stack Viewer */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-neutral-950/60 border border-neutral-200/70 dark:border-neutral-800/70 shadow-xs space-y-6 overflow-hidden">
              <div className="flex items-center justify-between text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider px-2">
                <span>Technologies & Ecosystem</span>
                <span className="hidden sm:inline-block text-[11px] font-normal normal-case text-neutral-400 dark:text-neutral-500">
                  Hover to focus • Drag to fling
                </span>
              </div>

              {/* LogoLoop Forward */}
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

              {/* LogoLoop Reverse */}
              {/* <div className="py-2 border-t border-neutral-200/40 dark:border-neutral-800/40">
                <LogoLoop
                  logos={[...techLogos].reverse()}
                  speed={60}
                  direction="right"
                  logoHeight={36}
                  gap={48}
                  hoverSpeed={0}
                  scaleOnHover={true}
                  fadeOut={true}
                  fadeOutWidth={0.14}
                  labels="hover"
                  draggable={true}
                  ariaLabel="Secondary technology loop"
                />
              </div> */}
            </div>

            {/* Quick Categorized Stack Badges */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <Card
                variant="default"
                className="!p-4 !rounded-2xl !bg-sky-50/60 hover:!bg-sky-50/80 dark:!bg-sky-950/20 dark:hover:!bg-sky-950/35 !border-sky-200/60 dark:!border-sky-900/40 space-y-2 transition-colors"
              >
                <span className="text-xs font-pixel tracking-wide uppercase text-sky-700 dark:text-sky-300">Frontend Engineering</span>
                <div className="flex flex-wrap gap-1.5">
                  {['React 19', 'TypeScript', 'Next.js', 'Astryx UI', 'Tailwind CSS'].map((t) => (
                    <Badge key={t} label={t} variant="neutral" />
                  ))}
                </div>
              </Card>

              <Card
                variant="default"
                className="!p-4 !rounded-2xl !bg-indigo-50/60 hover:!bg-indigo-50/80 dark:!bg-indigo-950/20 dark:hover:!bg-indigo-950/35 !border-indigo-200/60 dark:!border-indigo-900/40 space-y-2 transition-colors"
              >
                <span className="text-xs font-pixel tracking-wide uppercase text-indigo-700 dark:text-indigo-300">Backend & Cloud</span>
                <div className="flex flex-wrap gap-1.5">
                  {['Node.js', 'Python', 'PostgreSQL', 'FastAPI', 'REST & GraphQL'].map((t) => (
                    <Badge key={t} label={t} variant="neutral" />
                  ))}
                </div>
              </Card>

              <Card
                variant="default"
                className="!p-4 !rounded-2xl !bg-purple-50/60 hover:!bg-purple-50/80 dark:!bg-purple-950/20 dark:hover:!bg-purple-950/35 !border-purple-200/60 dark:!border-purple-900/40 space-y-2 transition-colors"
              >
                <span className="text-xs font-pixel tracking-wide uppercase text-purple-700 dark:text-purple-300">Tooling & Systems</span>
                <div className="flex flex-wrap gap-1.5">
                  {['Docker', 'Git & GitHub', 'Figma', 'Linux', 'WebGL'].map((t) => (
                    <Badge key={t} label={t} variant="neutral" />
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* ========================================================================
            SECTION 2: MY PROJECTS
            Material 3 rounded card container with solid colors & slight gradients
            Clickable cards showing details with Astryx components
            ======================================================================== */}
        <section
          id="projects"
          className="scroll-mt-24 rounded-[2.5rem] bg-gradient-to-b from-white via-neutral-50/80 to-neutral-100/90 dark:from-neutral-900 dark:via-neutral-900/90 dark:to-neutral-950 border border-neutral-200/80 dark:border-neutral-800/80 p-6 sm:p-10 lg:p-12 shadow-sm space-y-8 relative overflow-hidden"
        >
          <div className="space-y-1.5 border-b border-neutral-200/60 dark:border-neutral-800/60 pb-6">
            <div className="flex items-center gap-2">
              <Badge label="Works" variant="neutral" />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h2 className="text-3xl sm:text-4xl font-pixel tracking-wide">
                My Projects
              </h2>
              <span className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">
                Click any project card to inspect details • Configured in projectsInfo.js
              </span>
            </div>
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((proj, idx) => (
              <Card
                key={proj.id}
                onClick={() => setSelectedProject(proj)}
                variant="default"
                className={`group !rounded-3xl ${projectTints[idx % projectTints.length]} overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer !p-0`}
              >
                <div>
                  {/* Project Image */}
                  <div className="relative aspect-video w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge label={proj.category} variant="info" />
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-black/60 backdrop-blur-md text-white border border-white/20">
                        {proj.year}
                      </span>
                    </div>
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
                    label="Details"
                    variant="secondary"
                    size="sm"
                    iconEnd={<ArrowRight className="w-3.5 h-3.5" />}
                  />
                </div>
              </Card>
            ))}
          </div>

          {/* Astryx Dialog / Detail Modal for Selected Project */}
          {selectedProject && (
            <Dialog
              isOpen={!!selectedProject}
              onOpenChange={(open) => {
                if (!open) setSelectedProject(null);
              }}
              width={760}
              variant="standard"
              className="rounded-3xl overflow-hidden p-0 border border-neutral-200 dark:border-neutral-800 shadow-2xl"
            >
              <div className="relative max-h-[85vh] overflow-y-auto bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 p-6 sm:p-8 space-y-6">
                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-5 right-5 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all z-20 cursor-pointer"
                  aria-label="Close dialog"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Hero Image */}
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/60 dark:border-neutral-800/60 shadow-sm">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge label={selectedProject.category} variant="info" />
                    <Badge label={selectedProject.status} variant="success" />
                  </div>
                </div>

                {/* Title & Tagline */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl sm:text-3xl font-pixel tracking-wide">
                      {selectedProject.title}
                    </h3>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300">
                      {selectedProject.year}
                    </span>
                  </div>
                  <p className="text-base text-neutral-600 dark:text-neutral-400 font-medium">
                    {selectedProject.tagline}
                  </p>
                </div>

                {/* Full Description */}
                <div className="space-y-3 border-t border-neutral-200/60 dark:border-neutral-800/60 pt-4">
                  <h4 className="text-sm font-pixel tracking-wide text-neutral-500 dark:text-neutral-400">
                    Project Overview
                  </h4>
                  <p className="text-sm sm:text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Technical Highlights */}
                {selectedProject.highlights && (
                  <div className="space-y-3 border-t border-neutral-200/60 dark:border-neutral-800/60 pt-4">
                    <h4 className="text-sm font-pixel tracking-wide text-neutral-500 dark:text-neutral-400">
                      Technical Highlights & Engineering Impact
                    </h4>
                    <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                      {selectedProject.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies Used */}
                <div className="space-y-3 border-t border-neutral-200/60 dark:border-neutral-800/60 pt-4">
                  <h4 className="text-sm font-pixel tracking-wide text-neutral-500 dark:text-neutral-400">
                    Technologies & Libraries
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <Badge key={tech} label={tech} variant="neutral" />
                    ))}
                  </div>
                </div>

                {/* Links / Action Buttons */}
                <div className="flex flex-wrap items-center justify-end gap-3 pt-6 border-t border-neutral-200/60 dark:border-neutral-800/60">
                  {selectedProject.links?.github && (
                    <a
                      href={selectedProject.links.github}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="no-underline"
                    >
                      <Button
                        label="GitHub Source"
                        variant="secondary"
                        iconStart={<SiGithub className="w-4 h-4" />}
                      />
                    </a>
                  )}
                  {selectedProject.links?.demo && (
                    <a
                      href={selectedProject.links.demo}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="no-underline"
                    >
                      <Button
                        label="Live Demo"
                        variant="primary"
                        iconEnd={<ExternalLink className="w-4 h-4" />}
                      />
                    </a>
                  )}
                  <Button
                    label="Close"
                    variant="ghost"
                    onClick={() => setSelectedProject(null)}
                  />
                </div>
              </div>
            </Dialog>
          )}
        </section>
      </div>
    </div>
  );
}

export default App;


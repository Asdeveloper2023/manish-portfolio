'use client'

import { useEffect, useState } from 'react'
import { ArrowDownRight, ArrowLeft, ArrowRight, ArrowUpRight, Code2, ExternalLink, Fingerprint, LockKeyhole, Mail, Moon, Radar, ShieldCheck, Sun, Terminal } from 'lucide-react'

const projects = [
  {
    number: '01', name: 'Digital Evidence Management System', short: 'DEMS', type: 'DIGITAL FORENSICS',
    description: 'A secure evidence workspace built to organise digital files while preserving a reliable chain of custody.',
    details: ['Python', 'Flask', 'MongoDB', 'SHA-256'], icon: Fingerprint, tone: 'mint',
    url: 'https://evidencechain.onrender.com', repo: 'https://github.com/Asdeveloper2023/Digital-Evidence-Management-System', linkLabel: 'OPEN LIVE PROJECT',
  },
  {
    number: '02', name: 'PhishGuard', short: 'PHISHGUARD', type: 'SECURITY PROJECT',
    description: 'A security project from my GitHub. Visit the repository for its source code, setup, and project details.',
    details: ['Security', 'GitHub project'], icon: ShieldCheck, tone: 'lilac',
    url: 'https://github.com/Asdeveloper2023/PhishGuard', repo: 'https://github.com/Asdeveloper2023/PhishGuard', linkLabel: 'VIEW REPOSITORY',
  },
  {
    number: '03', name: 'Secure Pass Analyzer', short: 'SECURE PASS', type: 'ANDROID · PERSONAL PROJECT',
    description: 'An Android password-strength tool that checks common security signals live and generates stronger alternatives.',
    details: ['Java', 'Android Studio', 'Password security'], icon: LockKeyhole, tone: 'peach',
    url: 'https://github.com/Asdeveloper2023/Secure-Pass-Analyzer', repo: 'https://github.com/Asdeveloper2023/Secure-Pass-Analyzer', linkLabel: 'VIEW REPOSITORY',
  },
  {
    number: '04', name: 'Sentinel OS', short: 'SENTINEL OS', type: 'SIEM · SECURITY MONITORING',
    description: 'A modern SIEM dashboard for security monitoring, alerts, events, asset management, and reporting.',
    details: ['TypeScript', 'SIEM', 'Security reporting'], icon: Radar, tone: 'blue',
    url: 'https://semi-dashboard-lilac.vercel.app', repo: 'https://github.com/Asdeveloper2023/sentinel-os-siem-dashboard', linkLabel: 'OPEN LIVE PROJECT',
  },
  {
    number: '05', name: 'ViroScan', short: 'VIROSCAN', type: 'MALWARE & THREAT DETECTION',
    description: 'A web platform for scanning URLs and files for threats, with scan history and an admin review panel.',
    details: ['Python', 'Flask', 'VirusTotal API', 'JavaScript'], icon: Radar, tone: 'rose',
    url: 'https://viroscan-project.vercel.app', repo: 'https://github.com/Asdeveloper2023/viroscan-project', linkLabel: 'OPEN LIVE PROJECT',
  },
]

const skills = ['Python', 'Java', 'JavaScript', 'C', 'Flask', 'React', 'HTML & CSS', 'MongoDB', 'MySQL', 'REST APIs', 'JWT', 'Git & GitHub', 'Wireshark', 'Nmap', 'Metasploit', 'Digital forensics']

export function Portfolio() {
  const [activeProject, setActiveProject] = useState(0)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [paused, setPaused] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const step = (direction: number) => setActiveProject((current) => (current + direction + projects.length) % projects.length)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = () => setReduceMotion(media.matches)
    updatePreference()
    media.addEventListener('change', updatePreference)
    return () => media.removeEventListener('change', updatePreference)
  }, [])

  useEffect(() => {
    if (paused || reduceMotion) return
    const timer = window.setInterval(() => setActiveProject((current) => (current + 1) % projects.length), 5200)
    return () => window.clearInterval(timer)
  }, [paused, reduceMotion])

  return (
    <main className={`portfolio ${theme === 'dark' ? 'dark-mode' : 'light-mode'}`}>
      <header className="topbar wrap">
        <a className="wordmark" href="#home" aria-label="Manish Kushwaha home"><span className="mark">MK</span><span>MANISH KUSHWAHA<span className="wordmark-sub">CYBERSECURITY · SOFTWARE</span></span></a>
        <nav aria-label="Main navigation"><a href="#work">Projects</a><a href="#about">About</a><a href="#contact" className="nav-contact">Let&apos;s talk <ArrowUpRight size={14} /></a><button className="theme-toggle" type="button" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`} title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>{theme === 'light' ? <Moon size={15} /> : <Sun size={15} />}<span>{theme === 'light' ? 'DARK' : 'LIGHT'}</span></button></nav>
      </header>

      <section className="hero wrap" id="home">
        <div className="hero-copy">
          <p className="eyebrow reveal"><span className="status-dot" /> OPEN TO OPPORTUNITIES <span className="eyebrow-line" /></p>
          <h1 className="reveal delay-1">Curious mind.<br /><span className="serif">Secure</span> by design.</h1>
          <div className="hero-bottom reveal delay-2"><p className="intro">I&apos;m Manish — a cybersecurity and software developer creating practical tools for a safer digital world. I like working where thoughtful software meets real security problems.</p><a href="#work" className="round-link" aria-label="Explore projects"><ArrowDownRight size={22} /></a></div>
          <div className="hero-highlights"><span><i /> DIGITAL FORENSICS</span><span><i /> SECURE SOFTWARE</span><span><i /> ALWAYS LEARNING</span></div>
        </div>
        <div className="hero-art" aria-label="Portrait of Manish with an animated security visualization"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" /><div className="core"><img className="profile-portrait" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-29%20at%2020.21.21_d7799f17-ZAXDcOHPalBdu97p33OQvRvndyN9KF.jpg" alt="Manish Kushwaha wearing a navy suit" /></div><span className="art-label label-top">THREAT ANALYSIS <i /></span><span className="art-label label-bottom"><i /> TRUST, VERIFIED</span><span className="art-cross cross-a">+</span><span className="art-cross cross-b">+</span><div className="art-caption"><Terminal size={14} /><span>BUILDING WITH PURPOSE</span><span className="caption-line" /></div></div>
        <div className="hero-meta"><span>INDIA</span><span>M.SC. IT · CYBERSECURITY & DIGITAL FORENSICS</span><span>SCROLL TO EXPLORE ↓</span></div>
      </section>

      <section className="work-section wrap" id="work">
        <div className="section-heading"><div><p className="eyebrow">01 / SELECTED WORK</p><h2>Made to solve.<br /><span className="serif">Built to explore.</span></h2></div><p className="section-note">Five projects from my GitHub — from digital evidence and threat detection to security dashboards. Choose a card to visit its live project or source repository.</p></div>
        <div className="carousel-shell" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setPaused(false) }} onTouchStart={(event) => setTouchStart(event.touches[0]?.clientX ?? null)} onTouchEnd={(event) => { if (touchStart === null) return; const delta = touchStart - (event.changedTouches[0]?.clientX ?? touchStart); if (Math.abs(delta) > 45) { event.preventDefault(); step(delta > 0 ? 1 : -1) } setTouchStart(null) }} onKeyDown={(event) => { if (event.key === 'ArrowRight') step(1); if (event.key === 'ArrowLeft') step(-1) }} tabIndex={0} role="region" aria-roledescription="carousel" aria-label="Selected projects">
          <div className="carousel-stage">{projects.map((project, index) => {
            const offset = (index - activeProject + projects.length) % projects.length
            const position = offset > Math.floor(projects.length / 2) ? offset - projects.length : offset
            const Icon = project.icon
            return <a className={`project-card ${project.tone} ${position === 0 ? 'is-active' : ''}`} key={project.number} href={project.url} target="_blank" rel="noreferrer" aria-label={`${project.name} — ${project.linkLabel.toLowerCase()}`} aria-current={position === 0 ? 'true' : undefined} tabIndex={position === 0 ? 0 : -1} style={{ '--carousel-position': position, zIndex: position === 0 ? 100 : 1 } as React.CSSProperties}>
              <div className="project-art"><div className="art-grid" /><div className="art-ring ring-one" /><div className="art-ring ring-two" /><div className="art-ring ring-three" /><div className="project-monogram"><Icon size={32} strokeWidth={1.2} /><span>{project.short}</span></div><span className="art-index">PROJECT / {project.number}</span></div>
              <div className="project-card-content"><div className="project-top"><span className="project-number">{project.number} / 05</span><span className="project-type">{project.type}</span></div><h3>{project.name}</h3><p className="project-description">{project.description}</p><div className="tags">{project.details.map((detail) => <span key={detail}>{detail}</span>)}</div><div className="project-cta"><span>{project.linkLabel}</span><span className="arrow-circle"><ArrowUpRight size={17} /></span></div></div>
            </a>
          })}</div>
          <div className="carousel-controls"><button type="button" className="carousel-arrow" onClick={() => step(-1)} aria-label="Previous project"><ArrowLeft size={17} /></button><div className="carousel-dots" role="group" aria-label="Choose a project">{projects.map((project, index) => <button type="button" key={project.number} className={`carousel-dot ${index === activeProject ? 'selected' : ''}`} onClick={() => setActiveProject(index)} aria-label={`Show project ${index + 1}: ${project.name}`} aria-pressed={index === activeProject} />)}</div><span className="carousel-count">0{activeProject + 1} <span>/</span> 0{projects.length}</span><button type="button" className="carousel-arrow" onClick={() => step(1)} aria-label="Next project"><ArrowRight size={17} /></button></div>
          <p className="carousel-hint">DRAG OR USE THE ARROWS TO EXPLORE</p>
        </div>
      </section>

      <section className="about-section" id="about"><div className="wrap about-grid"><div className="about-title"><p className="eyebrow">02 / A LITTLE ABOUT ME</p><h2>Always learning.<br /><span className="serif">Always building.</span></h2><p className="about-copy">I completed a BCA in Computer Applications with Cyber Security and am pursuing an M.Sc. in IT focused on Cyber Security & Digital Forensics at Parul University. I enjoy turning complex problems into clear, useful software — especially projects that make security easier to understand and trust.</p><a className="text-link" href="https://github.com/Asdeveloper2023" target="_blank" rel="noreferrer">Explore my GitHub <ArrowUpRight size={15} /></a></div><div className="about-details"><div className="education-card"><span className="detail-label">EDUCATION</span><div className="education-entry"><span className="edu-year">2027 · PURSUING</span><h3>M.Sc. Information Technology</h3><p>Cyber Security & Digital Forensics<br />Parul University</p></div><div className="education-entry"><span className="edu-year">2025</span><h3>BCA · Computer Applications</h3><p>Specialisation in Cyber Security<br />Tilak Maharashtra Vidyapeeth</p></div><div className="course-note"><span className="status-dot" /> IIT Bombay · Programming Using Python</div></div><div className="skills-card"><span className="detail-label">TOOLS IN MY TOOLKIT</span><div className="skill-cloud">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div></div></div></section>

      <footer id="contact"><div className="wrap contact-banner"><p>HAVE A PROJECT IN MIND?</p><a href="https://mail.google.com/mail/?view=cm&fs=1&to=kushwahamanish5524%40gmail.com" target="_blank" rel="noopener noreferrer">Let&apos;s talk <ArrowUpRight size={18} /></a></div><div className="wrap footer-inner"><div className="footer-main"><p className="eyebrow">03 / WHAT&apos;S NEXT?</p><h2>Let&apos;s build<br /><span className="serif">something useful.</span></h2><a href="https://mail.google.com/mail/?view=cm&fs=1&to=kushwahamanish5524%40gmail.com" target="_blank" rel="noopener noreferrer" className="email-link">kushwahamanish5524@gmail.com <ArrowUpRight size={19} /></a></div><div className="footer-side"><p>Currently looking for an opportunity to grow, contribute, and build with a thoughtful team. I&apos;m always happy to connect and talk about technology, security, or a good idea.</p><div className="social-links"><a href="https://mail.google.com/mail/?view=cm&fs=1&to=kushwahamanish5524%40gmail.com" target="_blank" rel="noopener noreferrer"><Mail size={16} /> Email <ArrowUpRight size={14} /></a><a href="https://github.com/Asdeveloper2023" target="_blank" rel="noreferrer"><Code2 size={16} /> GitHub <ArrowUpRight size={14} /></a><a href="https://www.linkedin.com/in/manishkushwaha5524/" target="_blank" rel="noreferrer"><ExternalLink size={16} /> LinkedIn <ArrowUpRight size={14} /></a></div></div></div><div className="wrap footer-bottom"><span>© {new Date().getFullYear()} MANISH KUSHWAHA</span><span>MADE WITH CURIOSITY <span className="footer-star">✳</span></span></div></footer>
    </main>
  )
}

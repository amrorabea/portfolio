import React, { useEffect, useState } from 'react'

// ---- Data ----
const personalInfo = {
  name: "Amro Rabea",
  title: "AI & Data Science Engineer",
  email: "amroalsafy@gmail.com",
  linkedin: "https://www.linkedin.com/in/amro-rabea/",
  github: "https://github.com/amrorabea/",
  location: "Cairo, Egypt",
  phone: "+20-103-358-8509"
}

const skills = {
  "Programming": ["Python", "C/C++", "JavaScript", "SQL"],
  "AI/ML": ["PyTorch", "TensorFlow", "Scikit-learn"],
  "Computer Vision": ["OpenCV", "YOLO", "MediaPipe"],
  "MLOps": ["FastAPI", "Docker", "Redis", "Celery"],
  "Data": ["Pandas", "NumPy", "Tableau", "Power BI"],
  "NLP": ["LangChain", "RAG", "OpenAI API"]
}

const education = {
  degree: "B.S. Computer Science",
  institution: "Modern Academy",
  gpa: "3.34",
  period: "2022 - 2026"
}

const experience = [
  {
    title: "AI & Data Science Fellow",
    company: "Digital Egypt Pioneers Initiative",
    period: "Nov 2024 - May 2025",
    points: [
      "Improved model accuracy by 6-12% and reduced latency by 30%",
      "Reduced exploratory data analysis time by 25%"
    ]
  },
  {
    title: "Prompt Engineer",
    company: "Scale AI",
    period: "Sep 2024 - Nov 2024",
    points: [
      "Engineered 100+ prompts for frontier LLMs",
      "Reduced manual review time by 40% through automation"
    ]
  },
  {
    title: "ML Specialist Intern",
    company: "Prodigy Infotech",
    period: "Feb 2024 - Apr 2024",
    points: [
      "Boosted gesture recognition from 82% to 95%",
      "Improved food classification from 78% to 91%"
    ]
  }
]

const projects = [
  {
    title: "Autonomous Driving & V2V Communication",
    period: "Sep 2024 - Present",
    description: "Lane-keeping system with vehicle-to-vehicle communication for cooperative driving.",
    impact: "92% accuracy • 10 Hz broadcast • 35% collision risk reduction",
    tech: ["Deep Learning", "OpenCV", "Python", "V2V Protocol"]
  },
  {
    title: "Intelligent Surveillance System",
    period: "Jan 2025 - Jul 2025",
    description: "Real-time video search and object tracking platform.",
    impact: "40% faster processing • Real-time detection with YOLOv8",
    tech: ["YOLOv8", "BLIP", "FastAPI", "Celery", "Redis"]
  },
  {
    title: "Genetic Cancer Prediction Platform",
    period: "Dec 2024 - Jan 2025",
    description: "ML diagnostic tool with RAG-powered chatbot for patient education.",
    impact: "94% prediction accuracy • End-to-end deployment",
    tech: ["CNN", "FastAPI", "React", "RAG", "TensorFlow"]
  }
]

const achievements = [
  "2nd Place - ECPC 2024",
  "Codeforces Pupil (1000+ problems)"
]

// ---- CSS Injection ----
const insertCSS = () => {
  const id = 'portfolio-css'
  if (document.getElementById(id)) return
  const css = `
    :root {
      --bg: #0a0a0f;
      --surface: #13151f;
      --text: #e4e8f0;
      --muted: #94a3b8;
      --accent: #6366f1;
      --accent-dim: #4f46e5;
      --border: rgba(255,255,255,0.08);
    }
    
    * { box-sizing: border-box; margin: 0; padding: 0; }
    
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: var(--bg);
      color: var(--text);
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
    }
    
    .container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 0 32px;
    }
    
    /* Navigation */
    .nav {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 100;
      background: rgba(10, 10, 15, 0.85);
      backdrop-filter: blur(16px);
      border-bottom: 1px solid var(--border);
      transition: all 0.3s ease;
      opacity: 0;
      transform: translateY(-100%);
    }
    
    .nav.visible {
      opacity: 1;
      transform: translateY(0);
    }
    
    .nav-content {
      max-width: 1100px;
      margin: 0 auto;
      padding: 18px 32px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .nav-brand {
      font-weight: 600;
      font-size: 17px;
      letter-spacing: -0.3px;
    }
    
    .nav-links {
      display: flex;
      gap: 4px;
      align-items: center;
    }
    
    .nav-link {
      padding: 8px 16px;
      border-radius: 6px;
      font-size: 14px;
      font-weight: 500;
      color: var(--muted);
      cursor: pointer;
      transition: all 0.2s;
      border: none;
      background: transparent;
    }
    
    .nav-link:hover {
      color: var(--text);
      background: rgba(255,255,255,0.04);
    }
    
    .nav-link.active {
      color: var(--accent);
      background: rgba(99, 102, 241, 0.1);
    }
    
    .btn-primary {
      background: var(--accent);
      color: white;
      padding: 8px 18px;
      border-radius: 6px;
      font-weight: 600;
      font-size: 14px;
      border: none;
      cursor: pointer;
      transition: all 0.2s;
      margin-left: 8px;
    }
    
    .btn-primary:hover {
      background: var(--accent-dim);
    }
    
    /* Hero Section */
    .hero {
      min-height: 85vh;
      display: flex;
      align-items: center;
      padding: 140px 0 100px;
    }
    
    .hero-content {
      max-width: 680px;
    }
    
    .hero-greeting {
      font-size: 16px;
      color: var(--accent);
      font-weight: 600;
      margin-bottom: 16px;
    }
    
    .hero-title {
      font-size: 48px;
      font-weight: 700;
      line-height: 1.15;
      margin-bottom: 20px;
      letter-spacing: -1.2px;
    }
    
    .hero-description {
      font-size: 18px;
      color: var(--muted);
      margin-bottom: 32px;
      line-height: 1.7;
    }
    
    .hero-actions {
      display: flex;
      gap: 14px;
      flex-wrap: wrap;
    }
    
    .btn {
      padding: 12px 26px;
      border-radius: 8px;
      font-weight: 600;
      font-size: 15px;
      cursor: pointer;
      transition: all 0.2s;
      border: none;
      text-decoration: none;
      display: inline-block;
    }
    
    .btn-accent {
      background: var(--accent);
      color: white;
    }
    
    .btn-accent:hover {
      background: var(--accent-dim);
    }
    
    .btn-outline {
      background: transparent;
      border: 1.5px solid var(--border);
      color: var(--text);
    }
    
    .btn-outline:hover {
      border-color: rgba(99, 102, 241, 0.4);
      background: rgba(99, 102, 241, 0.05);
    }
    
    /* Section */
    section {
      padding: 80px 0;
    }
    
    .section-header {
      margin-bottom: 44px;
    }
    
    .section-title {
      font-size: 32px;
      font-weight: 700;
      margin-bottom: 8px;
      letter-spacing: -0.8px;
    }
    
    .section-subtitle {
      font-size: 16px;
      color: var(--muted);
    }
    
    /* Cards */
    .card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 28px;
    }
    
    /* Projects */
    .projects-grid {
      display: grid;
      gap: 24px;
    }
    
    .project-header {
      display: flex;
      justify-content: space-between;
      align-items: start;
      margin-bottom: 12px;
      gap: 20px;
    }
    
    .project-title {
      font-size: 20px;
      font-weight: 700;
      letter-spacing: -0.3px;
    }
    
    .project-period {
      font-size: 13px;
      color: var(--muted);
      white-space: nowrap;
      font-weight: 500;
    }
    
    .project-description {
      color: var(--muted);
      margin-bottom: 12px;
      font-size: 15px;
      line-height: 1.6;
    }
    
    .project-impact {
      color: var(--text);
      font-size: 14px;
      font-weight: 600;
      margin-bottom: 18px;
      padding: 10px 14px;
      background: rgba(99, 102, 241, 0.06);
      border-radius: 6px;
      border: 1px solid rgba(99, 102, 241, 0.15);
    }
    
    .tech-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    
    .tech-tag {
      padding: 5px 11px;
      background: rgba(99, 102, 241, 0.08);
      border: 1px solid rgba(99, 102, 241, 0.2);
      border-radius: 5px;
      font-size: 12px;
      font-weight: 600;
      color: var(--accent);
    }
    
    /* Experience */
    .experience-grid {
      display: grid;
      gap: 20px;
    }
    
    .experience-header {
      margin-bottom: 12px;
    }
    
    .experience-title {
      font-size: 18px;
      font-weight: 700;
      margin-bottom: 4px;
      letter-spacing: -0.3px;
    }
    
    .experience-company {
      color: var(--accent);
      font-weight: 600;
      margin-bottom: 2px;
      font-size: 15px;
    }
    
    .points {
      list-style: none;
      margin-top: 10px;
    }
    
    .points li {
      padding-left: 18px;
      position: relative;
      color: var(--muted);
      margin-bottom: 6px;
      font-size: 14px;
    }
    
    .points li:before {
      content: "•";
      position: absolute;
      left: 0;
      color: var(--accent);
      font-weight: bold;
      font-size: 16px;
    }
    
    /* Skills */
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 20px;
    }
    
    .skill-category {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 10px;
      padding: 22px;
    }
    
    .skill-category-title {
      font-size: 14px;
      font-weight: 700;
      margin-bottom: 14px;
      color: var(--text);
    }
    
    .skill-items {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    
    .skill-item {
      padding: 6px 12px;
      background: rgba(255,255,255,0.03);
      border: 1px solid var(--border);
      border-radius: 6px;
      font-size: 13px;
      color: var(--text);
      font-weight: 500;
    }
    
    /* About Grid */
    .about-grid {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 36px;
      align-items: start;
    }
    
    .about-text {
      font-size: 16px;
      color: var(--muted);
      line-height: 1.7;
    }
    
    .info-card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 10px;
      padding: 24px;
    }
    
    .info-section {
      margin-bottom: 24px;
    }
    
    .info-section:last-child {
      margin-bottom: 0;
    }
    
    .info-label {
      font-size: 12px;
      font-weight: 700;
      color: var(--accent);
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 10px;
    }
    
    .info-value {
      font-size: 15px;
      color: var(--text);
      line-height: 1.6;
    }
    
    .achievement-item {
      padding: 12px 14px;
      background: rgba(99, 102, 241, 0.06);
      border: 1px solid rgba(99, 102, 241, 0.15);
      border-radius: 8px;
      margin-bottom: 8px;
      font-size: 14px;
      font-weight: 600;
    }
    
    /* Contact */
    .contact-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 18px;
      margin-top: 36px;
    }
    
    .contact-item {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 10px;
      padding: 22px;
      text-decoration: none;
      display: block;
      transition: border-color 0.2s;
    }
    
    .contact-item:hover {
      border-color: rgba(99, 102, 241, 0.4);
    }
    
    .contact-label {
      font-size: 12px;
      color: var(--muted);
      margin-bottom: 6px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    
    .contact-value {
      font-size: 15px;
      font-weight: 600;
      color: var(--text);
      word-break: break-all;
    }
    
    /* Footer */
    .footer {
      padding: 60px 0;
      text-align: center;
      color: var(--muted);
      font-size: 15px;
    }
    
    .footer-heart {
      color: #ef4444;
      display: inline-block;
      animation: heartbeat 1.5s ease infinite;
    }
    
    @keyframes heartbeat {
      0%, 100% { transform: scale(1); }
      10%, 30% { transform: scale(1.1); }
      20%, 40% { transform: scale(1); }
    }
    
    /* Responsive */
    @media (max-width: 768px) {
      .container { padding: 0 20px; }
      .hero { padding: 120px 0 80px; }
      .hero-title { font-size: 36px; }
      .hero-description { font-size: 16px; }
      .section-title { font-size: 26px; }
      .about-grid { grid-template-columns: 1fr; }
      .nav-links { gap: 2px; }
      .nav-link { padding: 6px 10px; font-size: 13px; }
      .btn-primary { padding: 6px 14px; font-size: 13px; }
    }
  `
  const style = document.createElement('style')
  style.id = id
  style.innerHTML = css
  document.head.appendChild(style)
}

// ---- Components ----
const Navbar = ({ visible, activeSection, onNavigate }) => {
  const sections = ['about', 'projects', 'experience', 'skills', 'contact']
  
  return (
    <nav className={`nav ${visible ? 'visible' : ''}`}>
      <div className="nav-content">
        <div className="nav-brand">{personalInfo.name}</div>
        <div className="nav-links">
          {sections.map(section => (
            <button
              key={section}
              className={`nav-link ${activeSection === section ? 'active' : ''}`}
              onClick={() => onNavigate(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
          <a 
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  )
}

const Hero = ({ onNavigate }) => (
  <section className="hero">
    <div className="container">
      <div className="hero-content">
        <div className="hero-greeting">Hi, I'm Amro</div>
        <h1 className="hero-title">
          AI Engineer building Computer Vision and ML solutions
        </h1>
        <p className="hero-description">
          I develop production-ready machine learning systems with focus on computer vision, 
          NLP, and scalable deployments. Currently working on autonomous driving and surveillance systems.
        </p>
        <div className="hero-actions">
          <button className="btn btn-accent" onClick={() => onNavigate('projects')}>
            View Projects
          </button>
          <a 
            href={`mailto:${personalInfo.email}`}
            className="btn btn-outline"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  </section>
)

const About = () => (
  <section id="about">
    <div className="container">
      <div className="section-header">
        <h2 className="section-title">About</h2>
      </div>
      <div className="about-grid">
        <div>
          <p className="about-text">
            AI & Data Science Engineer with experience in computer vision, NLP, and LLMs. 
            I specialize in end-to-end ML projects—from preprocessing to deployment—with 
            measurable improvements in accuracy and efficiency. Background in competitive 
            programming helps me bridge research and engineering.
          </p>
        </div>
        <div className="info-card">
          <div className="info-section">
            <div className="info-label">Education</div>
            <div className="info-value">
              <strong>{education.degree}</strong><br />
              {education.institution}<br />
              GPA: {education.gpa}<br />
              <span style={{ color: 'var(--muted)', fontSize: 13 }}>{education.period}</span>
            </div>
          </div>
          <div className="info-section">
            <div className="info-label">Achievements</div>
            {achievements.map((achievement, i) => (
              <div key={i} className="achievement-item">
                {achievement}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
)

const Projects = () => (
  <section id="projects">
    <div className="container">
      <div className="section-header">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Selected work with measurable impact</p>
      </div>
      <div className="projects-grid">
        {projects.map((project, i) => (
          <div key={i} className="card">
            <div className="project-header">
              <h3 className="project-title">{project.title}</h3>
              <div className="project-period">{project.period}</div>
            </div>
            <p className="project-description">{project.description}</p>
            <div className="project-impact">{project.impact}</div>
            <div className="tech-tags">
              {project.tech.map((tech, k) => (
                <span key={k} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

const Experience = () => (
  <section id="experience">
    <div className="container">
      <div className="section-header">
        <h2 className="section-title">Experience</h2>
      </div>
      <div className="experience-grid">
        {experience.map((exp, i) => (
          <div key={i} className="card">
            <div className="experience-header">
              <h3 className="experience-title">{exp.title}</h3>
              <div className="experience-company">{exp.company}</div>
              <div className="project-period">{exp.period}</div>
            </div>
            <ul className="points">
              {exp.points.map((point, j) => (
                <li key={j}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
)

const Skills = () => (
  <section id="skills">
    <div className="container">
      <div className="section-header">
        <h2 className="section-title">Skills</h2>
      </div>
      <div className="skills-grid">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="skill-category">
            <div className="skill-category-title">{category}</div>
            <div className="skill-items">
              {items.map((skill, i) => (
                <div key={i} className="skill-item">{skill}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

const Contact = () => (
  <section id="contact">
    <div className="container">
      <div className="section-header">
        <h2 className="section-title">Let's Connect</h2>
        <p className="section-subtitle">Open to new opportunities and collaborations</p>
      </div>
      <div className="contact-grid">
        <a href={`mailto:${personalInfo.email}`} className="contact-item">
          <div className="contact-label">Email</div>
          <div className="contact-value">{personalInfo.email}</div>
        </a>
        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="contact-item">
          <div className="contact-label">LinkedIn</div>
          <div className="contact-value">linkedin.com/in/amro-rabea</div>
        </a>
        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="contact-item">
          <div className="contact-label">GitHub</div>
          <div className="contact-value">github.com/amrorabea</div>
        </a>
        <div className="contact-item">
          <div className="contact-label">Location</div>
          <div className="contact-value">{personalInfo.location}</div>
        </div>
      </div>
    </div>
  </section>
)

// ---- Main App ----
export default function App() {
  const [activeSection, setActiveSection] = useState('about')
  const [showNav, setShowNav] = useState(false)

  useEffect(() => {
    insertCSS()

    const handleScroll = () => {
      setShowNav(window.scrollY > 300)
      
      const sections = ['about', 'projects', 'experience', 'skills', 'contact']
      const scrollPos = window.scrollY + 150
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div>
      <Navbar visible={showNav} activeSection={activeSection} onNavigate={scrollToSection} />
      <main>
        <Hero onNavigate={scrollToSection} />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container">
          Built with <span className="footer-heart">♥</span> by {personalInfo.name}
        </div>
      </footer>
    </div>
  )
}
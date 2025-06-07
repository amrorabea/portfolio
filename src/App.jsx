import { useState, useEffect } from 'react'
import './App.css'

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
  programming: ["Python", "C/C++", "Java", "JavaScript", "SQL", "MongoDB"],
  frameworks: ["TensorFlow", "LangChain", "OpenCV", "React", "FastAPI"],
  tools: ["PowerBI", "Tableau", "Scikit-learn", "GitHub", "MediaPipe", "VS Code"],
  concepts: ["Machine Learning", "Deep Learning", "Computer Vision", "RAG", "NLP", "LLMs", "Data Analysis"]
}

const education = [
  {
    degree: "Bachelor of Computer Science",
    institution: "Modern Academy",
    gpa: "3.34 / 4.0"
  }
]

const experience = [
  {
    title: "AI & Data Science Fellow",
    company: "Digital Egypt Pioneers Initiative",
    period: "Nov 2024 - May 2025",
    description: "Hands-on work in ML, computer vision, TensorFlow, clustering, and model deployment. Selected among top national upskilling candidates."
  },
  {
    title: "Prompt Engineer",
    company: "Scale AI",
    period: "Sep 2024 - Nov 2024",
    description: "Refined prompts to boost code generation quality, resolved LLM logic limitations."
  },
  {
    title: "Machine Learning Specialist Intern",
    company: "Prodigy Infotech",
    period: "Feb 2024 - Apr 2024",
    description: "Improved gesture recognition and food image classification models."
  }
]

const projects = [
  {
    title: "Genetic Cancer Prediction Platform",
    description: "Built an AI system to predict cancer from gene expressions and tissue images with 94% accuracy. Includes a RAG-powered chatbot for medical insights.",
    technologies: ["CNN", "FastAPI", "React", "RAG", "Python", "TensorFlow"]
  },
  {
    title: "Financial Time Series Forecasting",
    description: "LSTM-based stock price prediction model with 87% directional accuracy. Features real-time data processing and risk analysis.",
    technologies: ["LSTM", "TensorFlow", "Python", "Pandas", "NumPy"]
  },
  {
    title: "Fake News Detector (NLP)",
    description: "Advanced NLP system that classifies news articles with 95% accuracy using transformer models and ensemble techniques.",
    technologies: ["Python", "NLTK", "Scikit-learn", "Transformers", "BERT"]
  },
  {
    title: "ASL Translator",
    description: "Real-time American Sign Language translator using CNN and MediaPipe with Flutter mobile app and speech synthesis.",
    technologies: ["CNN", "MediaPipe", "OpenCV", "Flutter", "TensorFlow"]
  }
]

const certifications = [
  "Stanford Machine Learning Specialization",
  "Machine Learning - Udemy",
  "Deep Learning - Udemy", 
  "Artificial Intelligence A-Z - Udemy"
]

const awards = [
  {
    title: "2nd Place - ECPC University Round",
    details: "Competitive Programming Championship (2024)"
  },
  {
    title: "53rd Overall - ECPC",
    details: "Egyptian Collegiate Programming Contest (2024)"
  },
  {
    title: "Codeforces Pupil",
    details: "Competitive Programming Platform"
  },
  {
    title: "Problem Solving Achievement",
    details: "Solved 1000+ problems on Codeforces"
  }
]

const volunteering = {
  role: "Problem Solving Instructor",
  org: "ICPC Modern Academy (MACPC)",
  period: "Sep 2023 - Present",
  details: "Mentored students in competitive programming for ICPC using C++."
}

function App() {
  const [activeSection, setActiveSection] = useState('about')
  const [showStickyNav, setShowStickyNav] = useState(false)

  useEffect(() => {
    let ticking = false
    let lastActiveSection = 'about'
    let debounceTimeout = null

    // Debounced function to update active section
    const updateActiveSection = (newSection) => {
      if (debounceTimeout) {
        clearTimeout(debounceTimeout)
      }
      
      debounceTimeout = setTimeout(() => {
        if (newSection !== lastActiveSection) {
          setActiveSection(newSection)
          lastActiveSection = newSection
        }
      }, 100) // 100ms debounce to prevent rapid changes
    }

    // Scroll listener for sticky navbar and active section tracking
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Handle sticky navbar
          const heroSection = document.querySelector('.hero-section')
          if (heroSection) {
            const heroHeight = heroSection.offsetHeight
            const scrollY = window.scrollY
            setShowStickyNav(scrollY > heroHeight - 100)
          }

          // Improved active section detection
          const sections = document.querySelectorAll('section[id]')
          const scrollPosition = window.scrollY + 200 // Fixed offset
          let newActiveSection = 'about' // Default fallback

          // Find the best matching section by checking from top to bottom
          for (let i = 0; i < sections.length; i++) {
            const section = sections[i]
            const sectionTop = section.offsetTop
            const sectionId = section.getAttribute('id')

            // Check if we're in this section's range with generous buffer
            const buffer = 100
            if (scrollPosition >= sectionTop - buffer) {
              newActiveSection = sectionId
            }
          }

          updateActiveSection(newActiveSection)
          ticking = false
        })
        ticking = true
      }
    }

    // Throttled scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true })

    // Initial call to set active section on load
    setTimeout(handleScroll, 100)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (debounceTimeout) {
        clearTimeout(debounceTimeout)
      }
    }
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 80 // Better offset for visual spacing
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
      
      // Temporarily set active section for immediate visual feedback
      // The scroll handler will take over once scrolling completes
      setActiveSection(sectionId)
    }
  }

  const quickStats = [
  ]

  return (
    <div className="app">
      {/* Sticky Navigation Bar */}
      <nav className={`sticky-navbar ${showStickyNav ? 'visible' : ''}`}>
        <div className="sticky-nav-content">
          <div className="sticky-nav-brand">
            <span className="brand-name">Amro Rabea</span>
          </div>
          <div className="sticky-nav-buttons">
            {["about", "experience", "projects", "skills", "education", "awards", "contact"].map(section => (
              <button 
                key={section} 
                className={`sticky-nav-btn ${activeSection === section ? 'active' : ''}`}
                onClick={() => scrollToSection(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Floating Particles */}
      <div className="floating-particles">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className="particle" 
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <main className="main">
        <div className="container">
          {/* Compact Hero Section */}
          <section className="hero-section">
            <div className="hero-content">
              <div className="profile-avatar">
                <img src="/photo.jpg" alt={personalInfo.name} className="avatar-img" />
              </div>
              <h1 className="hero-name">{personalInfo.name}</h1>
              <p className="hero-title">{personalInfo.title}</p>
              <p className="hero-location">{personalInfo.location}</p>
            </div>
            
            {/* Embedded Navigation */}
            <nav className="embedded-navigation">
              {["about", "experience", "projects", "skills", "education", "awards", "contact"].map(section => (
                <button 
                  key={section} 
                  className={`nav-btn ${activeSection === section ? 'active' : ''}`}
                  onClick={() => scrollToSection(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </nav>
          </section>

          {/* About Section */}
          <section id="about" className="section">
            <h2 className="section-title">About Me</h2>
            <div className="about-content">
              <p className="about-text">
                AI & Data Science Engineer with extensive experience in machine learning, large language models, 
                retrieval-augmented generation, and computer vision. Passionate about deploying real-world AI solutions 
                and mentoring the next generation of developers. Fluent in English and Arabic with a strong background 
                in competitive programming and problem-solving.
              </p>
              <div className="quick-stats">
                {quickStats.map((stat, index) => (
                  <div key={index} className="stat">
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="section">
            <h2 className="section-title">Experience</h2>
            <div className="timeline">
              {experience.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h3 className="timeline-title">{item.title}</h3>
                    <div className="timeline-company">{item.company}</div>
                    <div className="timeline-period">{item.period}</div>
                    <p className="timeline-description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="section">
            <h2 className="section-title">Featured Projects</h2>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <div key={index} className="project-card">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="section">
            <h2 className="section-title">Skills & Expertise</h2>
            <div className="skills-grid">
              {Object.entries(skills).map(([category, items], index) => (
                <div key={index} className="skill-category">
                  <h3 className="skill-category-title">
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </h3>
                  <div className="skill-tags">
                    {items.map((item, itemIndex) => (
                      <span key={itemIndex} className="skill-tag">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="certifications">
              <h3 className="certifications-title">Certifications</h3>
              <ul className="certifications-list">
                {certifications.map((cert, index) => (
                  <li key={index} className="certification-item">{cert}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* Education Section */}
          <section id="education" className="section">
            <h2 className="section-title">Education</h2>
            <div className="education-content">
              {education.map((edu, index) => (
                <div key={index} className="education-item">
                  <h3 className="education-degree">{edu.degree}</h3>
                  <div className="education-institution">{edu.institution}</div>
                  <div className="education-period">2022 - 2026</div>
                  <div className="education-gpa">GPA: {edu.gpa}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Awards Section */}
          <section id="awards" className="section">
            <h2 className="section-title">Awards & Volunteering</h2>
            
            <div className="awards-grid">
              {awards.map((award, index) => (
                <div key={index} className="award-item">
                  <h3 className="award-title">{award.title}</h3>
                  <p className="award-details">{award.details}</p>
                </div>
              ))}
            </div>

            <div className="timeline" style={{ marginTop: '40px' }}>
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3 className="timeline-title">{volunteering.role}</h3>
                  <div className="timeline-company">{volunteering.org}</div>
                  <div className="timeline-period">{volunteering.period}</div>
                  <p className="timeline-description">{volunteering.details}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="section">
            <h2 className="section-title">Let's Connect</h2>
            <div className="contact-content">
              <p className="contact-text">
                I'm always open to discussing new opportunities, innovative projects, 
                or just having a chat about AI and technology. Feel free to reach out!
              </p>
              <div className="contact-links">
                <a href={`mailto:${personalInfo.email}`} className="contact-link">
                  <span className="contact-icon">✉️</span>
                  {personalInfo.email}
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
                  <span className="contact-icon">🔗</span>
                  LinkedIn Profile
                </a>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="contact-link">
                  <span className="contact-icon">💻</span>
                  GitHub Profile
                </a>
                <div className="contact-link">
                  <span className="contact-icon">📞</span>
                  {personalInfo.phone}
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default App

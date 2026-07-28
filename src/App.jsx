import React, { useEffect, useState } from 'react';

import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Cloud,
  Code2,
  Database,
  GithubIcon,
  GraduationCap,
  Linkedin,
  MapPin,
  Menu,
  Server,
  Smartphone,
  Users,
  X,
} from 'lucide-react';

import {
  certifications,
  education,
  experience,
  projects,
  skills,
} from './data';

const baseUrl = import.meta.env.BASE_URL;

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'What I Offer', href: '#what-i-offer' },
];

const services = [
  {
    title: 'Full Stack Development',
    description:
      'Designing and developing scalable web applications with modern frontend and backend technologies.',
    icon: <Code2 size={28} />,
    technologies: ['React', 'Next.js', 'Node.js', 'Django', 'Laravel'],
  },
  {
    title: 'Frontend Engineering',
    description:
      'Creating responsive, accessible and high-performance user interfaces for web applications.',
    icon: <Smartphone size={28} />,
    technologies: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    title: 'Backend and REST APIs',
    description:
      'Building secure APIs, authentication systems, business logic and reliable backend architectures.',
    icon: <Server size={28} />,
    technologies: ['Node.js', 'Django', 'Laravel', 'REST API', 'OpenAPI'],
  },
  {
    title: 'Database Solutions',
    description:
      'Designing, integrating and optimizing relational databases for performance, security and scalability.',
    icon: <Database size={28} />,
    technologies: ['PostgreSQL', 'MySQL', 'Database Design', 'Optimization'],
  },
  {
    title: 'Cloud Deployment',
    description:
      'Deploying and maintaining applications using cloud platforms, containers and modern delivery workflows.',
    icon: <Cloud size={28} />,
    technologies: ['AWS', 'Google Cloud', 'Docker', 'CI/CD'],
  },
  {
    title: 'AI and Data Analytics',
    description:
      'Developing AI-enabled solutions, Python automation and business dashboards that provide actionable insights.',
    icon: <Users size={28} />,
    technologies: ['Python', 'AI', 'Machine Learning', 'Power BI'],
  },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="container navbar">
        <a className="logo" href="#home" onClick={closeMenu}>
          <span className="logo-symbol">LL</span>
          <span className="logo-name">Linsa Lison</span>
        </a>

        <nav className={`navigation ${menuOpen ? 'navigation-open' : ''}`}>
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="hero-decoration hero-decoration-one" />
      <div className="hero-decoration hero-decoration-two" />

      <div className="container hero-layout">
        <div className="hero-content">
          <div className="availability">
            <span className="availability-dot" />
            Available for software engineering opportunities
          </div>

          <p className="eyebrow">Full Stack Software Engineer</p>

          <h1>
            Hi, I’m <span>Linsa Lison</span>
          </h1>

          <p className="hero-description">
            I build scalable web applications, REST APIs, cloud solutions,
            data-driven platforms and automated business workflows that create
            measurable operational value.
          </p>

          <div className="hero-technologies">
            <span>React</span>
            <span>Node.js</span>
            <span>Django</span>
            <span>PostgreSQL</span>
            <span>AWS</span>
          </div>

          <div className="hero-actions">
            <a className="primary-button" href="#projects">
              View my work
              <ArrowRight size={18} />
            </a>

            <a className="secondary-button" href="#what-i-offer">
              What I offer
              <BriefcaseBusiness size={18} />
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
            >
              <GithubIcon size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/linsa-lison-43a5a2376"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="hero-image-area">
          <div className="portrait-circle">
            <div className="portrait-glow" />

            <img
              className="portrait"
              src={`${baseUrl}profile.png`}
              alt="Linsa Lison, Full Stack Software Engineer"
            />
          </div>

          <div className="floating-card floating-card-code">
            <Code2 size={20} />
            <span>Clean code</span>
          </div>

          <div className="floating-card floating-card-cloud">
            <Cloud size={20} />
            <span>Cloud ready</span>
          </div>
        </div>
      </div>

      <div className="container statistics">
        <div className="statistic">
          <BriefcaseBusiness />
          <div>
            <strong>4+</strong>
            <span>Years of experience</span>
          </div>
        </div>

        <div className="statistic">
          <Code2 />
          <div>
            <strong>Full Stack</strong>
            <span>Frontend and backend</span>
          </div>
        </div>

        <div className="statistic">
          <Users />
          <div>
            <strong>Enterprise</strong>
            <span>Business solutions</span>
          </div>
        </div>

        <div className="statistic">
          <Cloud />
          <div>
            <strong>AWS & GCP</strong>
            <span>Cloud platforms</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <p>{eyebrow}</p>
      <h2>{title}</h2>
      {description && <span>{description}</span>}
    </div>
  );
}

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <SectionHeading
          eyebrow="About me"
          title="Engineering reliable digital solutions"
          description="Combining software development, data analytics and cloud technologies to solve real business problems."
        />

        <div className="about-grid">
          <div className="about-content card">
            <h3>Professional profile</h3>

            <p>
              I am a Full Stack Software Engineer with more than four years of
              experience designing, developing, deploying and maintaining
              enterprise web and mobile applications.
            </p>

            <p>
              I work across the complete software development lifecycle,
              including requirements analysis, user-interface development, API
              integration, database design, testing, cloud deployment and
              production support.
            </p>

            <p>
              My additional experience in data science, artificial intelligence,
              Power BI and Python automation allows me to build applications
              that provide both reliable functionality and valuable business
              insights.
            </p>

            <a className="text-link" href="#what-i-offer">
              Explore my capabilities
              <ArrowRight size={17} />
            </a>
          </div>

          <div className="about-details">
            <article className="detail-card">
              <GraduationCap />
              <div>
                <h3>Advanced education</h3>
                <p>MCA and Master in Data Science</p>
              </div>
            </article>

            <article className="detail-card">
              <MapPin />
              <div>
                <h3>Rome, Italy</h3>
                <p>Available for remote, on-site and hybrid roles</p>
              </div>
            </article>

            <article className="detail-card">
              <Smartphone />
              <div>
                <h3>Web and mobile</h3>
                <p>Enterprise web, Android and iOS applications</p>
              </div>
            </article>

            <article className="detail-card">
              <Cloud />
              <div>
                <h3>Cloud development</h3>
                <p>AWS, Google Cloud and Docker</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const groups = ['Frontend', 'Backend', 'Database', 'Cloud'];
  const [activeGroup, setActiveGroup] = useState('Frontend');

  const filteredSkills = skills.filter(
    (skill) => skill.group === activeGroup,
  );

  const iconForGroup = {
    Frontend: <Code2 size={18} />,
    Backend: <Server size={18} />,
    Database: <Database size={18} />,
    Cloud: <Cloud size={18} />,
  };

  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <SectionHeading
          eyebrow="Technical skills"
          title="Technologies I work with"
          description="A modern full-stack toolkit for building secure, scalable and maintainable applications."
        />

        <div className="skill-tabs" role="tablist">
          {groups.map((group) => (
            <button
              key={group}
              type="button"
              className={activeGroup === group ? 'active' : ''}
              onClick={() => setActiveGroup(group)}
            >
              {iconForGroup[group]}
              {group}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {filteredSkills.map((skill) => (
            <article className="skill-card" key={skill.name}>
              <div className="skill-symbol">{skill.short}</div>
              <h3>{skill.name}</h3>
              <p>{skill.group}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectVisual({ project }) {
  if (project.imageClass === 'school-project') {
    return (
      <div className={`project-visual ${project.imageClass}`}>
        <div className="mock-sidebar">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="mock-content">
          <div className="mock-title" />

          <div className="mock-stat-row">
            <span />
            <span />
            <span />
          </div>

          <div className="mock-chart">
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
        </div>
      </div>
    );
  }

  if (project.imageClass === 'movie-project') {
    return (
      <div className={`project-visual ${project.imageClass}`}>
        <div className="movie-header" />

        <div className="movie-grid">
          <span>AI</span>
          <span>ML</span>
          <span>API</span>
          <span>UX</span>
          <span>DB</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`project-visual ${project.imageClass}`}>
      <div className="analytics-sidebar" />

      <div className="analytics-main">
        <div className="analytics-chart">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="analytics-panels">
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <SectionHeading
          eyebrow="Featured work"
          title="Projects and case studies"
          description="Selected solutions combining frontend engineering, backend services, databases, AI and analytics."
        />

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.id}>
              <ProjectVisual project={project} />

              <div className="project-content">
                <p className="project-type">{project.type}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-stack">
                  {project.stack.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                {project.sourceUrl && (
                  <div className="project-links">
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Source code
                      <GithubIcon size={16} />
                    </a>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        <SectionHeading
          eyebrow="Professional journey"
          title="Experience and education"
          description="Developing enterprise applications and continuously expanding technical and analytical expertise."
        />

        <div className="career-grid">
          <div>
            <h3 className="career-column-heading">
              <BriefcaseBusiness size={21} />
              Experience
            </h3>

            <div className="timeline">
              {experience.map((item) => (
                <article className="timeline-item" key={item.role}>
                  <span className="timeline-dot" />

                  <p className="timeline-period">{item.period}</p>
                  <h3>{item.role}</h3>

                  <h4>
                    {item.company} · {item.location}
                  </h4>

                  <ul>
                    {item.points.map((point) => (
                      <li key={point}>
                        <CheckCircle2 size={16} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          <div>
            <h3 className="career-column-heading">
              <GraduationCap size={21} />
              Education
            </h3>

            <div className="education-list">
              {education.map((item) => (
                <article
                  className="education-card"
                  key={`${item.qualification}-${item.year}`}
                >
                  <div className="education-icon">
                    <GraduationCap />
                  </div>

                  <div>
                    <span>{item.year}</span>
                    <h3>{item.qualification}</h3>
                    <p>{item.institution}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="certification-card">
              <h3>Certifications</h3>

              <ul>
                {certifications.map((certification) => (
                  <li key={certification}>
                    <CheckCircle2 size={16} />
                    <span>{certification}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatIOffer() {
  return (
    <section className="section offer-section" id="what-i-offer">
      <div className="container">
        <SectionHeading
          eyebrow="What I offer"
          title="Building modern software solutions"
          description="Technical services and capabilities focused on creating secure, scalable and maintainable digital products."
        />

        <div className="offer-grid">
          {services.map((service) => (
            <article className="offer-card" key={service.title}>
              <div className="offer-icon">{service.icon}</div>

              <h3>{service.title}</h3>
              <p>{service.description}</p>

              <div className="offer-technologies">
                {service.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="offer-action">
          <div>
            <p className="eyebrow">Selected solutions</p>
            <h3>See how these capabilities are applied in real projects.</h3>
          </div>

          <a className="primary-button" href="#projects">
            Explore projects
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <a className="logo" href="#home">
          <span className="logo-symbol">LL</span>
          <span className="logo-name">Linsa Lison</span>
        </a>

        <p>
          © {new Date().getFullYear()} Linsa Lison. Built with React and Vite.
        </p>

        <div className="footer-links">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
          >
            <GithubIcon size={19} />
          </a>

          <a
            href="https://www.linkedin.com/in/linsa-lison-43a5a2376"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
          >
            <Linkedin size={19} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <WhatIOffer />
      </main>

      <Footer />
    </>
  );
}

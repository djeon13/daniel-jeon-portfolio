import {
  ArrowDownRight,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  X,
} from "lucide-react";
import {
  siReact,
  siTypescript,
  siJavascript,
  siNodedotjs,
  siGraphql,
  siPostgresql,
  siPrisma,
  siGit,
} from "simple-icons";
import { useState } from "react";

const projects = [
  {
    number: "01",
    title: "Whiskey Finder",
    type: "Independent project",
    description:
      "A whiskey recommendation app developed for my current bartending role, helping customers navigate a 250-bottle collection and recommend selections based on flavor preferences, price range, and country of origin.",
    detail: "Weighted matching · 60% flavor / 25% price / 15% country",
    stack: ["React", "TypeScript", "JSON", "Recommendation logic"],
    href: "https://github.com/djeon13/whiskey-finder",
    liveUrl: "https://djeon13.github.io/whiskey-finder/",
    visual: "whiskey",
  },
  {
    number: "02",
    title: "Synth Tree",
    type: "Synthesis Workshop · Externship",
    description:
      "Contributed to a full-stack learning platform, working across learner progress features and connected frontend and backend systems.",
    detail: "Full-stack development · GraphQL and database workflows",
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "GraphQL",
      "Prisma",
      "PostgreSQL",
    ],
    href: "https://github.com/tripleten-externships/synth-tree",
    visual: "tree",
  },
  {
    number: "03",
    title: "Code Archaeologist",
    type: "In development",
    description:
      "An exploration of tools that help developers understand an unfamiliar codebase by mapping its structure and relationships.",
    detail: "Developer tooling · Codebase exploration",
    stack: ["TypeScript", "Node.js", "Static analysis"],
    href: "https://github.com/djeon13",
    visual: "code",
  },
];

const skills = [
  "React",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "GraphQL",
  "PostgreSQL",
  "Prisma",
  "Git",
];

const skillIcons: Record<string, string> = {
  React: siReact.path,
  TypeScript: siTypescript.path,
  JavaScript: siJavascript.path,
  "Node.js": siNodedotjs.path,
  GraphQL: siGraphql.path,
  PostgreSQL: siPostgresql.path,
  Prisma: siPrisma.path,
  Git: siGit.path,
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Daniel Jeon, home">
          DJ<span>.</span>
        </a>
        <button
          className="menu-toggle"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav
          className={menuOpen ? "nav-links is-open" : "nav-links"}
          aria-label="Main navigation"
        >
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>
          <a href="#experience" onClick={closeMenu}>
            Experience
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Let’s connect <ArrowRight size={15} />
          </a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <h1>Daniel Jeon</h1>
          <p className="hero-role">Software Developer</p>
          <p className="hero-description">
            I'm a developer building my skills in full-stack web development
            with React, TypeScript, and Node.js. I enjoy learning new
            technologies, solving problems, and turning ideas into practical
            applications.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              View my projects <ArrowRight size={16} />
            </a>

            <a className="text-link" href="#about">
              About me <ArrowDownRight size={16} />
            </a>

            <a
              className="button button-secondary"
              href="/Daniel_Jeon_Resume_Software_Engineer.pdf"
              target="_blank"
              rel="noreferrer"
            >
              View Resume ↗
            </a>
          </div>
          <div className="hero-meta">
            <span>
              <MapPin size={14} /> Los Angeles, California
            </span>
            <span className="meta-divider" />
            <span>Full-stack web development</span>
          </div>
        </div>

        <aside
          className="portrait-column"
          aria-label="Profile and technical focus"
        >
          <div className="portrait-frame">
            <img
              src="/daniel_headshot.png"
              alt="Professional headshot of Daniel Jeon"
              onError={(event) => {
                event.currentTarget.style.display = "none";
                const fallback = event.currentTarget
                  .nextElementSibling as HTMLElement | null;
                if (fallback) fallback.style.display = "flex";
              }}
            />
            <div className="portrait-placeholder">
              <span className="placeholder-initials">DJ</span>
              <span className="placeholder-label">ADD YOUR HEADSHOT</span>
              <span className="placeholder-hint">
                public/daniel_headshot.png
              </span>
            </div>
          </div>
        </aside>
      </section>

      <section className="stack-strip" aria-label="Technology stack">
        <div className="stack-title">
          <span className="gold-line" />
          Technical skills
        </div>
        <div className="stack-list">
          {skills.map((skill) => (
            <span className="skill-pill" key={skill}>
              {skillIcons[skill] && (
                <svg
                  className="skill-icon"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d={skillIcons[skill]} />
                </svg>
              )}
              <span className="skill-name">{skill}</span>
            </span>
          ))}
        </div>
      </section>

      <section className="about section-shell" id="about">
        <div className="section-kicker">
          <span>01</span>
          <span className="kicker-line" />
          <span>About me</span>
        </div>
        <div className="about-content">
          <h2>
            My path into
            <br />
            <em>software development.</em>
          </h2>
          <div className="about-copy">
            <p>
              Working as a bartender taught me to think quickly, manage
              competing priorities, and keep operations running smoothly under
              pressure. From coordinating orders and anticipating needs to
              controlling bar flow during peak service, I learned to
              troubleshoot problems in real time, communicate clearly, and adapt
              when conditions changed.
            </p>
            <p>
              I bring that same approach to software engineering. Through
              independent projects and my externship at Synthesis Workshop, I've
              gained hands-on experience building full-stack applications with
              React, TypeScript, Node.js, APIs, and databases. I'm continuing to
              develop my engineering skills through practical problem-solving,
              debugging, and building software that works reliably.
            </p>
            <a className="text-link" href="#experience">
              More about my experience <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>

      <section className="projects section-shell" id="projects">
        <div className="section-heading">
          <div>
            <div className="section-kicker">
              <span>02</span>
              <span className="kicker-line" />
              <span>Selected projects</span>
            </div>
            <h2>Projects</h2>
          </div>
          <p>A selection of projects I’ve built or am actively developing.</p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project-row" key={project.number}>
              <div className={`project-visual ${project.visual}`}>
                <div className="visual-topline">
                  <span>PROJECT / {project.number}</span>
                  <span>DJ—DEV</span>
                </div>
                {project.visual === "whiskey" && (
                  <div className="whiskey-art">
                    <div className="bottle bottle-one" />
                    <div className="bottle bottle-two" />
                    <div className="bottle bottle-three" />
                    <span>W / F</span>
                  </div>
                )}
                {project.visual === "tree" && (
                  <div className="tree-art">
                    <span className="tree-node n1" />
                    <span className="tree-node n2" />
                    <span className="tree-node n3" />
                    <span className="tree-node n4" />
                    <span className="tree-node n5" />
                    <i className="edge e1" />
                    <i className="edge e2" />
                    <i className="edge e3" />
                    <i className="edge e4" />
                  </div>
                )}
                {project.visual === "code" && (
                  <div className="code-art">
                    <span>01&nbsp; const project = {"{"}</span>
                    <span>02&nbsp;&nbsp; structure: "map",</span>
                    <span>03&nbsp;&nbsp; relationships: true,</span>
                    <span>04&nbsp;&nbsp; insights: analyze(codebase)</span>
                    <span>05&nbsp; {"}"}</span>
                    <b>CODE / EXPLORER</b>
                  </div>
                )}
              </div>
              <div className="project-details">
                <div className="project-type">
                  {project.type}
                  <span>{project.number}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p className="project-detail-line">{project.detail}</p>
                <div className="project-tags">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    className="project-link"
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.visual === "code"
                      ? "View GitHub profile"
                      : "View project on GitHub"}{" "}
                    <ArrowRight size={15} />
                  </a>

                  {project.title === "Whiskey Finder" && project.liveUrl && (
                    <a
                      className="project-link project-live-link"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live ↗
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="experience section-shell" id="experience">
        <div className="section-kicker">
          <span>03</span>
          <span className="kicker-line" />
          <span>Experience</span>
        </div>
        <div className="experience-grid">
          <div>
            <h2>
              Experience &amp;
              <br />
              <em>development.</em>
            </h2>
            <p className="experience-intro">
              Learning through collaboration and building practical
              applications.
            </p>
          </div>
          <div className="experience-items">
            <article className="experience-item">
              <div className="experience-date">2026 · Externship</div>
              <div>
                <h3>Synthesis Workshop</h3>
                <p>Software Engineering Extern</p>
                <p className="experience-description">
                  Contributed to a full-stack learning application built with
                  React, TypeScript, Node.js, GraphQL, Prisma, and PostgreSQL.
                  Implemented GraphQL queries and mutations for learner
                  progress, connected API operations to database records, and
                  worked on node completion tracking and quiz-based progress
                  updates.
                </p>
              </div>
            </article>
            <article className="experience-item">
              <div className="experience-date">Ongoing</div>
              <div>
                <h3>Independent Development</h3>
                <p>Personal projects</p>
                <p className="experience-description">
                  Building full-stack applications that combine interactive
                  React interfaces with data-driven backend logic. Developed
                  Whiskey Finder, a TypeScript application that ranks whiskey
                  recommendations using weighted flavor, price, and country
                  preferences. Currently developing Code Archaeologist, a tool
                  designed to help developers understand unfamiliar codebases.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="contact section-shell" id="contact">
        <div className="section-kicker">
          <span>04</span>
          <span className="kicker-line" />
          <span>Contact</span>
        </div>
        <div className="contact-content">
          <div>
            <h2>Let’s connect</h2>
            <p>
              I’m looking for junior software engineering opportunities and ways
              to contribute to a collaborative team.
            </p>
          </div>
          <div className="contact-actions">
            <a
              className="button button-primary"
              href="mailto:djeon13@gmail.com"
            >
              <Mail size={16} /> Email me <ArrowRight size={15} />
            </a>
            <a
              href="https://github.com/djeon13"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={17} /> GitHub <ArrowRight size={14} />
            </a>
            <a
              href="https://www.linkedin.com/in/da-in-jeon"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={17} /> LinkedIn <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <a className="brand" href="#home">
          DJ<span>.</span>
        </a>
        <span>Daniel Jeon · Software Developer</span>
        <a href="#home">Back to top ↑</a>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </main>
  );
}

export default App;

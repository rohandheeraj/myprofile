import React, { useState, useEffect } from 'react';
import { 
  GraduationCap, 
  Briefcase, 
  FileText, 
  Mail, 
  Github, 
  Linkedin, 
  MapPin, 
  ExternalLink, 
  Award, 
  BookOpen, 
  Brain, 
  Send,
  Code,
  Globe,
  Phone,
  Cpu,
  Layers,
  Sparkles,
  ArrowRight
} from 'lucide-react';

// Profile Data from Rohan's CV
const profileInfo = {
  name: "Rohan Dheeraj",
  role: "Mechatronics Engineer",
  institution: "Manipal Academy of Higher Education, Dubai",
  location: "Dubai, UAE",
  email: "rohandhruv@outlook.com",
  phone: "+971585585873",
  linkedin: "https://www.linkedin.com/in/rohandheeraj/",
  github: "https://github.com/rohandheeraj", // Placeholder, user will add
  cvLink: "/docs/rohan_cv.pdf",
  bio: "A passionate Mechatronics Engineering student at Manipal Dubai with a strong foundation in robotics, automation, and hardware integration. Known for hands-on project experience, including a 1st place win at IROS 2024 and active roles in international competitions like MATE ROV and ERC.",
  subBio: "Proficient in tools like ROS, Python, and Fusion 360, and skilled in both design and prototyping. I thrive in collaborative environments where innovative problem-solving and rapid iteration are key, and I'm driven by a deep curiosity for building intelligent machines that make a real-world impact."
};

const skillsData = {
  software: ["Python", "ROS", "MATLAB", "AutoCAD", "Fusion 360", "Solidworks"],
  hardware: ["Arduino", "Motor Drivers", "Soldering", "PCB Prototyping", "Multimeter & Oscilloscope Usage", "Rapid Prototyping"],
  other: ["Teamwork", "Technical Documentation", "Project Management", "Problem Solving", "Public Speaking"]
};

const projects = [
  {
    id: 1,
    title: "IROS 2024 – 1st Place Winner",
    date: "2024",
    description: "Developed a fully autonomous robotic system; led mechanical integration and sensor fusion. Our team secured 1st place globally at the prestigious IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS).",
    image: "/img/iros_winning.jpg",
    badge: "1st Place Winner",
    category: "Competition",
    tags: ["Autonomous Systems", "Sensor Fusion", "Mechanical Integration", "ROS", "Python"]
  },
  {
    id: 2,
    title: "Emirates Robotics Competition (ERC)",
    date: "2025",
    description: "Designed and tested a mobile robotic platform with advanced drive systems and color detection. Implemented color sensor feedback and high-torque motor configurations to achieve autonomous target navigation.",
    image: "/img/erc_robot.jpg",
    badge: "Featured Project",
    category: "Competition",
    tags: ["Mobile Robotics", "Drive Systems", "Color Detection", "Prototyping"]
  },
  {
    id: 3,
    title: "Fighter Robot \"Kuro\" – Team Akira",
    date: "2025",
    description: "Constructed a battle-ready robot for competitive combat robotics; handled mechanical design and chassis assembly. Placed 3rd in the competition held in Malta by IEEE, demonstrating robust durability and defensive design.",
    image: "/img/kuro_robot.jpg",
    badge: "3rd Place Winner",
    category: "Competition",
    tags: ["Combat Robotics", "Mechanical Design", "Chassis Assembly", "IEEE", "Solidworks"]
  },
  {
    id: 4,
    title: "Gripper Project – Dubai Future Labs",
    date: "2025",
    description: "Building an intelligent robotic gripper capable of object recognition and manipulation. Integrated visual feedback and force-sensing resistors to allow adaptive gripping of various shapes and weights.",
    image: null,
    badge: "Ongoing Research",
    category: "Research",
    tags: ["Computer Vision", "Adaptive Gripping", "Object Recognition", "Fusion 360"]
  },
  {
    id: 5,
    title: "MATE ROV 2025 – USA",
    date: "2025",
    description: "Engineering an underwater ROV (Remotely Operated Vehicle) with focus on control systems and buoyancy optimization for deep-water simulation testing.",
    image: null,
    badge: "In Progress",
    category: "Competition",
    tags: ["Underwater Robotics", "Control Systems", "Buoyancy Control", "MATLAB"]
  },
  {
    id: 6,
    title: "Mubadala Competition 2025",
    date: "2025",
    description: "Supported prototyping, hardware testing, and technical documentation efforts as a core mechatronics support team member.",
    image: null,
    badge: "Support Team",
    category: "Research",
    tags: ["Prototyping", "Testing", "Technical Writing"]
  }
];

const educationData = [
  {
    id: 1,
    degree: "Mechatronics Engineering",
    institution: "Manipal Academy of Higher Education",
    date: "2022 - 2026",
    description: "Undergraduate degree focusing on robotics, control systems, and mechanical-electrical integration."
  },
  {
    id: 2,
    degree: "High School",
    institution: "ASPAM Indian International School",
    date: "2020 - 2022",
    description: "Completed secondary education with focused studies in Mathematics, Physics, and Chemistry."
  },
  {
    id: 3,
    degree: "Middle School",
    institution: "Leaders Private School",
    date: "2008 - 2020",
    description: "Primary and early secondary education."
  }
];

const languages = ["English", "Hindi", "Malayalam"];

export default function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [projectFilter, setProjectFilter] = useState('All');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [imgError, setImgError] = useState(false);

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 5000);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const filteredProjects = projectFilter === 'All'
    ? projects
    : projects.filter(p => p.category === projectFilter);

  return (
    <div className="app-container">
      {/* Sticky Left Sidebar Navigation on Desktop / Sticky Top Header on Mobile */}
      <aside className="sidebar">
        <div className="sidebar-profile">
          <div className="sidebar-avatar-container">
            {!imgError ? (
              <img 
                src="/img/profile.jpg" 
                alt={profileInfo.name} 
                className="sidebar-avatar" 
                onError={() => setImgError(true)} 
              />
            ) : (
              <div className="sidebar-avatar-fallback">RD</div>
            )}
          </div>
          <div>
            <h2 className="sidebar-name" style={{ margin: 0, padding: 0 }}>{profileInfo.name}</h2>
            <div className="sidebar-title">{profileInfo.role}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--text-muted)', fontSize: '0.75rem', marginTop: '0.25rem' }}>
              <MapPin size={12} />
              {profileInfo.location}
            </div>
          </div>
        </div>

        <nav className="sidebar-nav">
          <a 
            href="#about" 
            className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
            onClick={() => setActiveSection('about')}
          >
            About
          </a>
          <a 
            href="#skills" 
            className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
            onClick={() => setActiveSection('skills')}
          >
            Skills
          </a>
          <a 
            href="#projects" 
            className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveSection('projects')}
          >
            Projects
          </a>
          <a 
            href="#education" 
            className={`nav-link ${activeSection === 'education' ? 'active' : ''}`}
            onClick={() => setActiveSection('education')}
          >
            Education
          </a>
          <a 
            href="#contact" 
            className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
            onClick={() => setActiveSection('contact')}
          >
            Contact
          </a>
        </nav>

        <div className="sidebar-footer">
          © {new Date().getFullYear()} {profileInfo.name}
          <div style={{ marginTop: '0.25rem' }}>Hosted on Vercel</div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="main-content">
        
        {/* About/Hero Section */}
        <section id="about">
          <div className="hero-content">
            <span className="hero-tag">Portfolio website</span>
            <h1>{profileInfo.name}</h1>
            <h3 style={{ color: 'var(--accent-light)', fontWeight: 500, fontSize: '1.3rem', marginTop: '-0.25rem' }}>
              {profileInfo.role} @ {profileInfo.institution}
            </h3>
            <p className="hero-bio">{profileInfo.bio}</p>
            <p className="hero-bio" style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>{profileInfo.subBio}</p>
            
            <div className="hero-actions">
              <a href={profileInfo.cvLink} className="btn btn-primary">
                <FileText size={18} />
                Download CV
              </a>
              <a href={profileInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                <Linkedin size={18} />
                LinkedIn
              </a>
              <a href={`mailto:${profileInfo.email}`} className="btn btn-secondary">
                <Mail size={18} />
                Email Me
              </a>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <h2>
            <Cpu size={24} style={{ color: 'var(--accent-light)' }} />
            Skills & Expertise
          </h2>
          <div className="skills-container">
            <div className="skills-card">
              <h3>
                <Code size={18} />
                Software Skills
              </h3>
              <div className="skills-tags">
                {skillsData.software.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>

            <div className="skills-card">
              <h3>
                <Cpu size={18} />
                Hardware Skills
              </h3>
              <div className="skills-tags">
                {skillsData.hardware.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>

            <div className="skills-card">
              <h3>
                <Layers size={18} />
                Professional & Other
              </h3>
              <div className="skills-tags">
                {skillsData.other.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <h2>
            <Sparkles size={24} style={{ color: 'var(--accent-light)' }} />
            Featured Projects
          </h2>
          
          <div className="pub-filters">
            {['All', 'Competition', 'Research'].map((filter) => (
              <button 
                key={filter} 
                className={`filter-btn ${projectFilter === filter ? 'active' : ''}`}
                onClick={() => setProjectFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card">
                {project.image ? (
                  <div className="project-image-wrapper">
                    <img src={project.image} alt={project.title} className="project-image" />
                    {project.badge && <span className="project-badge">{project.badge}</span>}
                  </div>
                ) : (
                  <div className="project-image-wrapper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, var(--bg-tertiary) 0%, var(--bg-secondary) 100%)' }}>
                    <Cpu size={48} style={{ color: 'var(--border-color-hover)' }} />
                    {project.badge && <span className="project-badge">{project.badge}</span>}
                  </div>
                )}
                
                <div className="project-content">
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <span className="project-date">{project.date}</span>
                  </div>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="project-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education">
          <h2>
            <GraduationCap size={24} style={{ color: 'var(--accent-light)' }} />
            Education Timeline
          </h2>
          <div className="timeline">
            {educationData.map((item) => (
              <div key={item.id} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-meta">
                  <div className="timeline-title">{item.degree}</div>
                  <span className="timeline-date">{item.date}</span>
                </div>
                <div className="timeline-org">{item.institution}</div>
                <p className="timeline-desc" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{item.description}</p>
              </div>
            ))}
          </div>
          
          <h3 style={{ marginTop: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Globe size={18} style={{ color: 'var(--accent-light)' }} />
            Languages
          </h3>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            {languages.map((lang, idx) => (
              <span key={idx} className="skill-tag" style={{ background: 'var(--bg-secondary)' }}>{lang}</span>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <h2>
            <Mail size={24} style={{ color: 'var(--accent-light)' }} />
            Get in touch
          </h2>
          <div className="contact-container">
            <div className="contact-info">
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                Interested in collaboration, competitive robotics, or seeking a mechatronics engineer? Drop me a message or connect through my networks.
              </p>
              
              <div className="contact-item">
                <div className="contact-icon-wrapper">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="contact-text-label">Email</div>
                  <div className="contact-text-value">
                    <a href={`mailto:${profileInfo.email}`}>{profileInfo.email}</a>
                  </div>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-wrapper">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="contact-text-label">Phone</div>
                  <div className="contact-text-value">
                    <a href={`tel:${profileInfo.phone}`}>{profileInfo.phone}</a>
                  </div>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-wrapper">
                  <Linkedin size={20} />
                </div>
                <div>
                  <div className="contact-text-label">LinkedIn</div>
                  <div className="contact-text-value">
                    <a href={profileInfo.linkedin} target="_blank" rel="noopener noreferrer">
                      linkedin.com/in/rohandheeraj
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="form-input" 
                  placeholder="Your Name" 
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="form-input" 
                  placeholder="your.email@example.com" 
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="4" 
                  className="form-input" 
                  placeholder="Tell me about your project..." 
                  style={{ resize: 'vertical' }}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </div>
              
              <button type="submit" className="btn btn-primary" style={{ width: 'max-content' }}>
                <Send size={16} />
                {formSubmitted ? 'Message Sent!' : 'Send Message'}
              </button>

              {formSubmitted && (
                <div style={{ color: 'var(--success)', fontSize: '0.85rem', fontWeight: 500, marginTop: '0.5rem' }}>
                  Thank you! Your message has been sent successfully (simulated).
                </div>
              )}
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer-text">
          Designed for Rohan Dheeraj. Fully responsive mechatronics engineering profile.
        </footer>
      </main>
    </div>
  );
}

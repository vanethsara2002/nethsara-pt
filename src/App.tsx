import { useState, useEffect } from 'react';
import { Moon, Sun, Mail, Phone, Github, Twitter, Code2, Microscope, Zap, ChevronDown, CheckCircle, Clock, Lightbulb, Download, Send, AlertCircle, BookOpen, Briefcase } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

type Theme = 'light' | 'dark';
type ProjectTab = 'blockchain' | 'biomedical';
type SkillCategory = 'biomedical' | 'blockchain' | 'tools';

interface BlockchainProject {
  title: string;
  description: string;
  focus: string;
  technologies: string[];
  status: 'Completed' | 'Ongoing' | 'Planned';
  insights: string;
}

interface BiomedicalProject {
  title: string;
  description: string;
  focus: string;
  methods: string[];
  status: 'Completed' | 'Ongoing' | 'Planned';
  findings: string;
}

interface TimelineItem {
  year: string;
  title: string;
  organization: string;
  description: string;
  type: 'education' | 'experience';
}

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL || '',
  import.meta.env.VITE_SUPABASE_ANON_KEY || ''
);

function App() {
  const [theme, setTheme] = useState<Theme>('light');
  const [projectTab, setProjectTab] = useState<ProjectTab>('blockchain');
  const [isVisible, setIsVisible] = useState(false);
  const [visibleSections, setVisibleSections] = useState<{[key: string]: boolean}>({});
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formMessage, setFormMessage] = useState('');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleSections(prev => ({
            ...prev,
            [entry.target.id]: true
          }));
        }
      });
    }, observerOptions);

    document.querySelectorAll('[data-observe]').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');

    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone || null,
            subject: formData.subject,
            message: formData.message
          }
        ]);

      if (error) throw error;

      setFormStatus('success');
      setFormMessage('Message sent successfully! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 5000);
    } catch (err) {
      setFormStatus('error');
      setFormMessage('Failed to send message. Please try again.');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  const blockchainProjects: BlockchainProject[] = [
    {
      title: 'Ethereum Testnet Protocol Testing',
      description: 'Extensive testing and validation of Ethereum protocol changes, including Shanghai upgrade features and EIP implementations.',
      focus: 'Protocol Testing & Validation',
      technologies: ['Ethereum', 'Solidity', 'Hardhat', 'Git'],
      status: 'Ongoing',
      insights: 'Identified and reported 3 critical issues affecting consensus mechanisms; contributed detailed feedback on gas optimization improvements'
    },
    {
      title: 'Polygon Network Validator Participation',
      description: 'Active validator node participation in Polygon testnet, contributing to network security through stake and block validation.',
      focus: 'Network Validation & Decentralization',
      technologies: ['Polygon', 'Node.js', 'Docker', 'Consensus Algorithms'],
      status: 'Ongoing',
      insights: 'Maintained 99.8% uptime; developed monitoring dashboards for real-time network health analysis'
    },
    {
      title: 'Web3 Ecosystem Research Documentation',
      description: 'Comprehensive analysis and documentation of emerging Web3 protocols, with focus on decentralized architectures and trust models.',
      focus: 'Ecosystem Research & Architecture',
      technologies: ['Web3.js', 'Research Tools', 'GitHub', 'Technical Writing'],
      status: 'Ongoing',
      insights: 'Published 5 technical reports on cross-chain interoperability challenges and proposed solutions'
    },
    {
      title: 'Smart Contract Audit & Bug Reporting',
      description: 'Systematic security analysis and bug identification in various blockchain protocols and DeFi applications.',
      focus: 'Security & Protocol Feedback',
      technologies: ['Solidity', 'Static Analysis', 'Security Frameworks', 'Formal Verification'],
      status: 'Completed',
      insights: 'Successfully reported 8 vulnerabilities; 2 accepted and fixed by core development teams'
    }
  ];

  const biomedicalProjects: BiomedicalProject[] = [
    {
      title: 'Biomedical Signal Processing Research',
      description: 'Research into advanced signal processing techniques for ECG, EEG, and other physiological signals with focus on artifact removal.',
      focus: 'Diagnostic Data Analysis',
      methods: ['MATLAB', 'Signal Processing', 'Statistical Analysis', 'Clinical Data'],
      status: 'Ongoing',
      findings: 'Developed algorithm improving SNR by 34%; potential application in wearable medical devices'
    },
    {
      title: 'Medical Device Data Integrity Study',
      description: 'Investigation of blockchain-inspired approaches to ensure data integrity and traceability in medical device logs.',
      focus: 'Data Security & Compliance',
      methods: ['Data Science', 'Cryptography', 'Medical Standards', 'Case Studies'],
      status: 'Ongoing',
      findings: 'Framework validated with 15 medical device manufacturers; meets FDA transparency requirements'
    },
    {
      title: 'Laboratory Automation Protocol Optimization',
      description: 'Development of optimized protocols for biomedical laboratory equipment with emphasis on reproducibility and standardization.',
      focus: 'Laboratory Methods & Standards',
      methods: ['Quality Control', 'SOPs Development', 'ISO Standards', 'Equipment Calibration'],
      status: 'Completed',
      findings: 'Reduced sample processing time by 28%; improved reproducibility to 99.2% consistency'
    },
    {
      title: 'Blockchain for Medical Research Reproducibility (Planned)',
      description: 'Proposed research into using blockchain technology for creating immutable research documentation and ensuring reproducibility in clinical trials.',
      focus: 'Research Integrity & Transparency',
      methods: ['Blockchain', 'Research Methodology', 'Clinical Data Management', 'Smart Contracts'],
      status: 'Planned',
      findings: 'Literature review complete; protocol development phase planned for postgraduate studies'
    }
  ];

  const skills = {
    biomedical: [
      { name: 'Medical Instrumentation', description: 'Device design, calibration, and troubleshooting' },
      { name: 'Laboratory Methods', description: 'Sample preparation, protocols, and quality assurance' },
      { name: 'Biomedical Data Analysis', description: 'Signal processing and statistical interpretation' }
    ],
    blockchain: [
      { name: 'Testnet Participation', description: 'Protocol testing and validation on multiple networks' },
      { name: 'Network Validation', description: 'Node operation and block validation' },
      { name: 'Protocol Feedback', description: 'Bug reporting and architecture analysis' }
    ],
    tools: [
      { name: 'Git & GitHub', description: 'Version control and collaborative development' },
      { name: 'Linux & Command Line', description: 'System administration and development' },
      { name: 'Technical Documentation', description: 'Research writing and protocol documentation' }
    ]
  };

  const timeline: TimelineItem[] = [
    {
      year: '2022',
      title: 'BHSc (Hons) in Biomedical Technology',
      organization: 'Gampaha Wickramarachchi University of Indigenous Medicine',
      description: 'Pursuing honors degree with focus on medical instrumentation and diagnostics. GPA: 3.8/4.0',
      type: 'education'
    },
    {
      year: '2023',
      title: 'Blockchain Ecosystem Research Begins',
      organization: 'Self-Directed Learning & Testnet Participation',
      description: 'Started exploring blockchain technology and became active testnet validator and protocol researcher',
      type: 'experience'
    },
    {
      year: '2024',
      title: 'Biomedical Technology Intern',
      organization: 'General Hospital & Research Center',
      description: 'Intern at leading healthcare facility working on medical device maintenance and biomedical research projects',
      type: 'experience'
    },
    {
      year: '2024',
      title: 'Active Blockchain Contributor',
      organization: 'Multiple Ethereum & Polygon Testnets',
      description: 'Validator node operator and protocol researcher contributing to decentralized network security',
      type: 'experience'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-500">

      {/* Navigation & Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="fixed top-6 right-6 z-50 p-3 bg-white dark:bg-slate-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Toggle theme"
      >
        {theme === 'light' ? (
          <Moon className="w-6 h-6 text-slate-700" />
        ) : (
          <Sun className="w-6 h-6 text-yellow-400" />
        )}
      </button>

      {/* Hero Section */}
      <section className={`min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8 inline-block animate-fade-in">
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full animate-pulse-slow"></div>
              <div className="absolute inset-2 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center text-6xl sm:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                VN
              </div>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4 animate-slide-up">
            Vihanga Nethsara
          </h1>

          <div className="space-y-3 mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <p className="text-xl sm:text-2xl text-blue-600 dark:text-blue-400 font-semibold">
              Biomedical Technology Undergraduate | Blockchain Ecosystem Contributor
            </p>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 font-medium">
              Exploring the intersection of biomedical research and decentralized technology
            </p>
          </div>

          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed px-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Dedicated researcher bridging healthcare innovation with blockchain ecosystems. Currently advancing biomedical technology expertise while actively contributing to decentralized network protocols and Web3 research.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <a
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Code2 className="w-5 h-5" />
              View Research & Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-blue-600 dark:border-blue-400"
            >
              Contact Me
            </a>
          </div>

          <div className="animate-bounce">
            <ChevronDown className="w-6 h-6 text-slate-400 dark:text-slate-500 mx-auto" />
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" data-observe className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-3xl sm:text-4xl font-bold text-center text-slate-900 dark:text-white mb-4 transition-all duration-1000 ${visibleSections['about'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            About Me
          </h2>
          <p className="text-center text-slate-600 dark:text-slate-400 mb-12 text-lg">
            Academic background, research interests, and ecosystem involvement
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div data-observe id="about-biomedical" className={`bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-slate-700 dark:to-slate-600 rounded-xl p-8 shadow-lg transition-all duration-500 ${visibleSections['about-biomedical'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Microscope className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Biomedical Research</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Pursuing BHSc (Hons) in Biomedical Technology at GWIM with 3.8/4.0 GPA. Research focus on medical instrumentation, diagnostic technologies, and biomedical signal processing.
              </p>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /> Medical device design & testing</li>
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /> Diagnostic instrumentation</li>
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /> Laboratory protocol optimization</li>
              </ul>
            </div>

            <div data-observe id="about-blockchain" className={`bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-700 dark:to-slate-600 rounded-xl p-8 shadow-lg transition-all duration-500 ${visibleSections['about-blockchain'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Zap className="w-12 h-12 text-purple-600 dark:text-purple-400 mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Blockchain Ecosystems</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Active participant in Ethereum and Polygon testnets. Contributing to protocol research, network validation, and Web3 ecosystem development. Focused on decentralized architectures.
              </p>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /> Testnet validator & researcher</li>
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /> Protocol testing & feedback</li>
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /> Web3 ecosystem contributor</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href="/cv.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300"
            >
              <Download className="w-5 h-5" />
              Download CV
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" data-observe className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className={`text-3xl sm:text-4xl font-bold text-center text-slate-900 dark:text-white mb-12 transition-all duration-1000 ${visibleSections['skills'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Skills & Knowledge Areas
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                data-observe
                id={`skill-${category}`}
                className={`bg-white dark:bg-slate-700 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 ${visibleSections[`skill-${category}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 capitalize">
                  {category === 'biomedical' ? 'Biomedical Research' : category === 'blockchain' ? 'Blockchain Ecosystems' : 'Tools & Methods'}
                </h3>
                <div className="space-y-4">
                  {items.map((skill) => (
                    <div key={skill.name}>
                      <p className="font-semibold text-slate-900 dark:text-white mb-1">{skill.name}</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" data-observe className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-3xl sm:text-4xl font-bold text-center text-slate-900 dark:text-white mb-4 transition-all duration-1000 ${visibleSections['projects'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Research & Projects
          </h2>
          <p className="text-center text-slate-600 dark:text-slate-400 mb-12 text-lg">
            Spanning biomedical technology and blockchain ecosystems
          </p>

          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setProjectTab('blockchain')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                projectTab === 'blockchain'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300'
              }`}
            >
              Blockchain Ecosystems
            </button>
            <button
              onClick={() => setProjectTab('biomedical')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                projectTab === 'biomedical'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300'
              }`}
            >
              Biomedical Research
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projectTab === 'blockchain' ? (
              blockchainProjects.map((project, index) => (
                <div
                  key={index}
                  data-observe
                  id={`bc-proj-${index}`}
                  className={`bg-white dark:bg-slate-700 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-l-4 border-blue-500 ${visibleSections[`bc-proj-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white flex-1">{project.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ml-2 ${
                      project.status === 'Completed' ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300' :
                      project.status === 'Ongoing' ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300' :
                      'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-3">{project.focus}</p>
                  <p className="text-slate-700 dark:text-slate-300 mb-4">{project.description}</p>

                  <div className="mb-4">
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase mb-2">Technologies</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                    <p className="text-sm font-semibold text-blue-700 dark:text-blue-400 mb-1">Key Insights</p>
                    <p className="text-sm text-slate-700 dark:text-slate-300">{project.insights}</p>
                  </div>
                </div>
              ))
            ) : (
              biomedicalProjects.map((project, index) => (
                <div
                  key={index}
                  data-observe
                  id={`bm-proj-${index}`}
                  className={`bg-white dark:bg-slate-700 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-l-4 border-cyan-500 ${visibleSections[`bm-proj-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white flex-1">{project.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ml-2 ${
                      project.status === 'Completed' ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300' :
                      project.status === 'Ongoing' ? 'bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300' :
                      'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  <p className="text-sm text-cyan-600 dark:text-cyan-400 font-semibold mb-3">{project.focus}</p>
                  <p className="text-slate-700 dark:text-slate-300 mb-4">{project.description}</p>

                  <div className="mb-4">
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase mb-2">Methods</p>
                    <div className="flex flex-wrap gap-2">
                      {project.methods.map((method) => (
                        <span key={method} className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300 rounded-full text-xs">
                          {method}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-cyan-50 dark:bg-cyan-900/20 rounded-lg p-4">
                    <p className="text-sm font-semibold text-cyan-700 dark:text-cyan-400 mb-1">Findings</p>
                    <p className="text-sm text-slate-700 dark:text-slate-300">{project.findings}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Education & Experience Timeline */}
      <section id="timeline" data-observe className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-3xl sm:text-4xl font-bold text-center text-slate-900 dark:text-white mb-12 transition-all duration-1000 ${visibleSections['timeline'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Education & Experience
          </h2>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div
                key={index}
                data-observe
                id={`timeline-${index}`}
                className={`flex gap-8 transition-all duration-500 ${visibleSections[`timeline-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                    item.type === 'education'
                      ? 'bg-blue-500 text-white'
                      : 'bg-purple-500 text-white'
                  }`}>
                    {item.type === 'education' ? <BookOpen className="w-6 h-6" /> : <Briefcase className="w-6 h-6" />}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-1 h-20 bg-gradient-to-b from-blue-500 to-purple-500"></div>
                  )}
                </div>

                <div className="flex-1 pt-2">
                  <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">{item.year}</p>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{item.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 font-semibold mb-2">{item.organization}</p>
                  <p className="text-slate-700 dark:text-slate-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Vision Section */}
      <section id="vision" data-observe className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-3xl sm:text-4xl font-bold text-center text-slate-900 dark:text-white mb-4 transition-all duration-1000 ${visibleSections['vision'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Research Vision
          </h2>
          <p className="text-center text-slate-600 dark:text-slate-400 mb-12 text-lg">
            The intersection of biomedical research and blockchain technology
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div data-observe id="vision-1" className={`bg-white dark:bg-slate-700 rounded-xl p-8 shadow-lg transition-all duration-500 ${visibleSections['vision-1'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Lightbulb className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Data Transparency in Research</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Blockchain can revolutionize biomedical research by creating immutable, transparent records of experimental data. This ensures reproducibility and builds trust in scientific findings.
              </p>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                <li className="flex gap-2"><Zap className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" /> Immutable research logs</li>
                <li className="flex gap-2"><Zap className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" /> Timestamped experiments</li>
                <li className="flex gap-2"><Zap className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" /> Decentralized verification</li>
              </ul>
            </div>

            <div data-observe id="vision-2" className={`bg-white dark:bg-slate-700 rounded-xl p-8 shadow-lg transition-all duration-500 ${visibleSections['vision-2'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Code2 className="w-12 h-12 text-purple-600 dark:text-purple-400 mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Smart Contracts for Data Integrity</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Smart contracts can enforce data integrity protocols, automate compliance checks, and create transparent audit trails for medical devices and clinical trials.
              </p>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                <li className="flex gap-2"><Zap className="w-4 h-4 text-purple-500 flex-shrink-0 mt-0.5" /> Automated compliance</li>
                <li className="flex gap-2"><Zap className="w-4 h-4 text-purple-500 flex-shrink-0 mt-0.5" /> Protocol validation</li>
                <li className="flex gap-2"><Zap className="w-4 h-4 text-purple-500 flex-shrink-0 mt-0.5" /> Transparent auditing</li>
              </ul>
            </div>
          </div>

          <div data-observe id="vision-future" className={`mt-8 bg-white dark:bg-slate-700 rounded-xl p-8 shadow-lg transition-all duration-500 ${visibleSections['vision-future'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Long-Term Research Goals</h3>
            <p className="text-slate-700 dark:text-slate-300 mb-6">
              My vision is to develop innovative frameworks that integrate blockchain technology into biomedical research workflows. This includes:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                <p className="font-semibold text-slate-900 dark:text-white mb-2">Postgraduate Research</p>
                <p className="text-sm text-slate-700 dark:text-slate-300">Pursue Master's focusing on blockchain applications in healthcare</p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                <p className="font-semibold text-slate-900 dark:text-white mb-2">Protocol Development</p>
                <p className="text-sm text-slate-700 dark:text-slate-300">Design blockchain protocols specifically for medical data</p>
              </div>
              <div className="bg-pink-50 dark:bg-pink-900/20 rounded-lg p-4">
                <p className="font-semibold text-slate-900 dark:text-white mb-2">Innovation Leadership</p>
                <p className="text-sm text-slate-700 dark:text-slate-300">Lead research initiatives bridging both ecosystems</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" data-observe className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto">
          <h2 className={`text-3xl sm:text-4xl font-bold text-center text-slate-900 dark:text-white mb-12 transition-all duration-1000 ${visibleSections['contact'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Get In Touch
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <a href="tel:0788522243" className="flex items-center gap-4 bg-white dark:bg-slate-700 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group">
              <Phone className="w-8 h-8 text-green-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-semibold">Phone</p>
                <p className="text-lg font-bold text-slate-900 dark:text-white">0788522243</p>
              </div>
            </a>

            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-white dark:bg-slate-700 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group">
              <Github className="w-8 h-8 text-slate-900 dark:text-white flex-shrink-0 group-hover:scale-110 transition-transform" />
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-semibold">GitHub</p>
                <p className="text-sm font-bold text-slate-900 dark:text-white">View Projects</p>
              </div>
            </a>

            <a href="https://x.com/vnnethsara2002" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-white dark:bg-slate-700 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group">
              <Twitter className="w-8 h-8 text-blue-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-semibold">Twitter/X</p>
                <p className="text-sm font-bold text-slate-900 dark:text-white">@vnnethsara2002</p>
              </div>
            </a>
          </div>

          <div data-observe id="contact-form" className={`bg-white dark:bg-slate-700 rounded-xl p-8 shadow-lg transition-all duration-500 ${visibleSections['contact-form'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Send Me a Message</h3>

            {formStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/20 border border-green-400 rounded-lg flex gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                <p className="text-green-700 dark:text-green-300">{formMessage}</p>
              </div>
            )}

            {formStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/20 border border-red-400 rounded-lg flex gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0" />
                <p className="text-red-700 dark:text-red-300">{formMessage}</p>
              </div>
            )}

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
                className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-600 text-slate-900 dark:text-white rounded-lg placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
                className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-600 text-slate-900 dark:text-white rounded-lg placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                placeholder="Phone (Optional)"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-600 text-slate-900 dark:text-white rounded-lg placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                required
                className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-600 text-slate-900 dark:text-white rounded-lg placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
                rows={5}
                className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-600 text-slate-900 dark:text-white rounded-lg placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                disabled={formStatus === 'loading'}
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {formStatus === 'loading' ? (
                  <>
                    <Clock className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-slate-600 dark:text-slate-400">
            © 2025 Vihanga Nethsara. All rights reserved.
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-500 mt-2">
            Biomedical Technology | Blockchain Research | Healthcare Innovation
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

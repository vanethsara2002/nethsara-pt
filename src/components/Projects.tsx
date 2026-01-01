import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ExternalLink, X, Calendar, Award } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  duration: string;
  outcome: string;
  challenges: string;
  color: string;
}

export function Projects() {
  const { ref, isVisible } = useScrollAnimation();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'ECG Signal Analysis System',
      description:
        'Developed a comprehensive ECG signal processing and analysis system for cardiac monitoring and arrhythmia detection using digital signal processing techniques.',
      technologies: ['Python', 'Signal Processing', 'Machine Learning', 'Medical Instrumentation'],
      duration: '4 months',
      outcome: 'Successfully achieved 92% accuracy in arrhythmia detection with real-time processing capabilities.',
      challenges:
        'Overcame noise filtering challenges and implemented adaptive algorithms for different patient conditions.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      title: 'Medical Equipment Inventory Management',
      description:
        'Created a digital inventory management system for hospital biomedical equipment tracking, maintenance scheduling, and compliance documentation.',
      technologies: ['Database Design', 'Web Development', 'QR Systems', 'Asset Management'],
      duration: '3 months',
      outcome: 'Reduced equipment downtime by 35% and improved maintenance compliance to 98%.',
      challenges:
        'Integrated legacy systems with modern technology and trained staff on new digital workflows.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      id: 3,
      title: 'Indigenous Medicine Database',
      description:
        'Built a comprehensive digital database documenting traditional Sri Lankan medicinal plants with scientific validation and biomedical applications.',
      technologies: ['Research', 'Data Collection', 'Documentation', 'Cross-referencing'],
      duration: '6 months',
      outcome: 'Cataloged 200+ medicinal plants with verified biomedical properties and traditional uses.',
      challenges:
        'Bridged traditional knowledge with modern scientific validation and created standardized documentation protocols.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 4,
      title: 'Blood Pressure Monitoring Device',
      description:
        'Designed and prototyped an affordable, portable blood pressure monitoring device with mobile connectivity for remote patient monitoring.',
      technologies: ['Arduino', 'Sensor Integration', 'IoT', 'Mobile App Development'],
      duration: '5 months',
      outcome: 'Created a functional prototype 60% more affordable than commercial alternatives.',
      challenges:
        'Ensured medical-grade accuracy while maintaining low cost and developed reliable wireless connectivity.',
      color: 'from-red-500 to-orange-500',
    },
    {
      id: 5,
      title: 'Laboratory Quality Control System',
      description:
        'Implemented a comprehensive quality control and quality assurance system for clinical laboratory processes with automated documentation.',
      technologies: ['Quality Management', 'Process Automation', 'Compliance', 'Data Analytics'],
      duration: '4 months',
      outcome: 'Achieved ISO 15189 compliance standards and reduced quality incidents by 45%.',
      challenges:
        'Standardized diverse laboratory procedures and created automated error detection systems.',
      color: 'from-yellow-500 to-amber-500',
    },
    {
      id: 6,
      title: 'Patient Data Analytics Dashboard',
      description:
        'Developed an interactive dashboard for visualizing patient diagnostic data trends and supporting clinical decision-making processes.',
      technologies: ['Data Visualization', 'Statistical Analysis', 'Dashboard Design', 'Healthcare IT'],
      duration: '3 months',
      outcome: 'Improved diagnostic pattern recognition and reduced report generation time by 50%.',
      challenges:
        'Ensured HIPAA compliance while creating intuitive visualizations for diverse medical data types.',
      color: 'from-indigo-500 to-blue-500',
    },
  ];

  return (
    <section
      ref={ref}
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <div
          className={`max-w-6xl mx-auto transform transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Projects Portfolio
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
                style={{
                  transitionDelay: `${index * 100}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                }}
              >
                <div className="h-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className={`h-48 bg-gradient-to-br ${project.color} p-8 flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                    <h3 className="text-2xl font-bold text-white text-center relative z-10">
                      {project.title}
                    </h3>
                    <div className="absolute top-4 right-4 bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                      <ExternalLink className="w-5 h-5 text-gray-800" />
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-sm rounded-full">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{project.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`h-32 bg-gradient-to-br ${selectedProject.color} relative`}>
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-white dark:bg-gray-800 rounded-full hover:scale-110 transition-transform duration-300"
              >
                <X className="w-6 h-6 text-gray-800 dark:text-gray-200" />
              </button>
            </div>
            <div className="p-8">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {selectedProject.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="mb-6">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Outcomes & Impact
                  </h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {selectedProject.outcome}
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Challenges Overcome
                </h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {selectedProject.challenges}
                </p>
              </div>

              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                <Calendar className="w-5 h-5" />
                <span className="font-semibold">Duration: {selectedProject.duration}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

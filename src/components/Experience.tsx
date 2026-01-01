import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Briefcase, Calendar, CheckCircle } from 'lucide-react';

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  location: string;
  duration: string;
  type: 'work' | 'internship' | 'volunteer';
  responsibilities: string[];
  achievements: string[];
}

export function Experience() {
  const { ref, isVisible } = useScrollAnimation();

  const experiences: ExperienceItem[] = [
    {
      id: 1,
      title: 'Biomedical Technology Intern',
      company: 'Colombo General Hospital',
      location: 'Colombo, Sri Lanka',
      duration: 'Jan 2025 - Present',
      type: 'internship',
      responsibilities: [
        'Assist in maintenance and calibration of medical diagnostic equipment',
        'Support clinical laboratory operations and quality control procedures',
        'Document equipment performance and maintenance records',
        'Collaborate with medical staff on equipment troubleshooting',
      ],
      achievements: [
        'Reduced equipment calibration time by 25% through optimized procedures',
        'Successfully maintained 100% uptime for critical care monitoring systems',
        'Trained 15+ staff members on proper equipment handling protocols',
      ],
    },
    {
      id: 2,
      title: 'Research Assistant',
      company: 'University Indigenous Medicine Research Center',
      location: 'Gampaha, Sri Lanka',
      duration: 'Aug 2024 - Dec 2024',
      type: 'work',
      responsibilities: [
        'Conducted research on indigenous medicinal plants and biomedical applications',
        'Performed laboratory analysis and documentation of plant properties',
        'Assisted in clinical trials and data collection for research studies',
        'Prepared research presentations and academic publications',
      ],
      achievements: [
        'Co-authored 2 research papers on indigenous medicine integration',
        'Identified 30+ medicinal plants with verified therapeutic properties',
        'Presented findings at National Biomedical Technology Conference',
      ],
    },
    {
      id: 3,
      title: 'Medical Equipment Volunteer',
      company: 'Rural Health Initiative',
      location: 'Various Rural Areas, Sri Lanka',
      duration: 'Mar 2024 - Jul 2024',
      type: 'volunteer',
      responsibilities: [
        'Provided basic medical equipment maintenance in rural healthcare centers',
        'Conducted health education programs on medical technology awareness',
        'Assisted in setting up temporary diagnostic facilities',
        'Trained local healthcare workers on equipment operation',
      ],
      achievements: [
        'Serviced medical equipment in 20+ rural healthcare facilities',
        'Improved equipment functionality rate by 40% in underserved areas',
        'Provided training to 50+ rural healthcare workers',
      ],
    },
    {
      id: 4,
      title: 'Laboratory Assistant',
      company: 'University Clinical Skills Laboratory',
      location: 'Gampaha, Sri Lanka',
      duration: 'Jan 2024 - Feb 2024',
      type: 'work',
      responsibilities: [
        'Managed laboratory inventory and equipment maintenance',
        'Prepared laboratory setups for student practical sessions',
        'Assisted students with laboratory techniques and procedures',
        'Maintained laboratory safety and biosafety protocols',
      ],
      achievements: [
        'Implemented new inventory system reducing supply waste by 30%',
        'Achieved zero safety incidents during tenure',
        'Mentored 100+ students in proper laboratory techniques',
      ],
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'work':
        return 'bg-blue-600';
      case 'internship':
        return 'bg-green-600';
      case 'volunteer':
        return 'bg-purple-600';
      default:
        return 'bg-gray-600';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'work':
        return 'Professional';
      case 'internship':
        return 'Internship';
      case 'volunteer':
        return 'Volunteer';
      default:
        return '';
    }
  };

  return (
    <section
      ref={ref}
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <div
          className={`max-w-6xl mx-auto transform transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-900"></div>

            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`mb-12 flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
                style={{
                  transitionDelay: `${index * 200}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                }}
              >
                <div className="flex-1">
                  <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-3 ${getTypeColor(exp.type)} rounded-lg`}>
                          <Briefcase className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                            {exp.title}
                          </h3>
                          <p className="text-blue-600 dark:text-blue-400 font-semibold">
                            {exp.company}
                          </p>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">
                            {exp.location}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{exp.duration}</span>
                      </div>
                      <span
                        className={`px-3 py-1 ${getTypeColor(
                          exp.type
                        )} text-white text-sm rounded-full`}
                      >
                        {getTypeLabel(exp.type)}
                      </span>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-gray-600 dark:text-gray-400"
                          >
                            <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-gray-600 dark:text-gray-400"
                          >
                            <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="hidden md:flex items-center justify-center w-12">
                  <div className="w-6 h-6 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>
                </div>

                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

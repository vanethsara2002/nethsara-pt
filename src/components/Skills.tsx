import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Microscope, Code, Users, Activity } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  color: string;
  skills: Skill[];
}

export function Skills() {
  const { ref, isVisible } = useScrollAnimation();
  const [activeTab, setActiveTab] = useState('biomedical');

  const categories: SkillCategory[] = [
    {
      id: 'biomedical',
      title: 'Biomedical Skills',
      icon: <Microscope className="w-6 h-6" />,
      color: 'blue',
      skills: [
        { name: 'Medical Imaging Technology', level: 90 },
        { name: 'Diagnostic Instrumentation', level: 85 },
        { name: 'Laboratory Techniques', level: 88 },
        { name: 'Patient Monitoring Systems', level: 82 },
        { name: 'Biosafety Protocols', level: 92 },
      ],
    },
    {
      id: 'technical',
      title: 'Technical Skills',
      icon: <Code className="w-6 h-6" />,
      color: 'green',
      skills: [
        { name: 'Healthcare IT Systems', level: 80 },
        { name: 'Data Analysis & Visualization', level: 85 },
        { name: 'Python Programming', level: 75 },
        { name: 'Medical Database Management', level: 78 },
        { name: 'Research Methodology', level: 88 },
      ],
    },
    {
      id: 'soft',
      title: 'Soft Skills',
      icon: <Users className="w-6 h-6" />,
      color: 'purple',
      skills: [
        { name: 'Problem Solving', level: 92 },
        { name: 'Team Leadership', level: 88 },
        { name: 'Technical Communication', level: 90 },
        { name: 'Critical Thinking', level: 89 },
        { name: 'Time Management', level: 85 },
      ],
    },
    {
      id: 'clinical',
      title: 'Clinical Skills',
      icon: <Activity className="w-6 h-6" />,
      color: 'red',
      skills: [
        { name: 'Patient Care Support', level: 87 },
        { name: 'Medical Equipment Maintenance', level: 84 },
        { name: 'Quality Assurance', level: 86 },
        { name: 'Clinical Documentation', level: 83 },
        { name: 'Infection Control', level: 91 },
      ],
    },
  ];

  const activeCategory = categories.find((cat) => cat.id === activeTab) || categories[0];

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { bg: string; text: string; border: string; progress: string } } = {
      blue: {
        bg: 'bg-blue-100 dark:bg-blue-900',
        text: 'text-blue-600 dark:text-blue-400',
        border: 'border-blue-600',
        progress: 'bg-blue-600',
      },
      green: {
        bg: 'bg-green-100 dark:bg-green-900',
        text: 'text-green-600 dark:text-green-400',
        border: 'border-green-600',
        progress: 'bg-green-600',
      },
      purple: {
        bg: 'bg-purple-100 dark:bg-purple-900',
        text: 'text-purple-600 dark:text-purple-400',
        border: 'border-purple-600',
        progress: 'bg-purple-600',
      },
      red: {
        bg: 'bg-red-100 dark:bg-red-900',
        text: 'text-red-600 dark:text-red-400',
        border: 'border-red-600',
        progress: 'bg-red-600',
      },
    };
    return colors[color];
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
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => {
                const colors = getColorClasses(category.color);
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveTab(category.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
                      activeTab === category.id
                        ? `${colors.bg} ${colors.text} border-2 ${colors.border} shadow-lg`
                        : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-2 border-transparent hover:border-gray-300 dark:hover:border-gray-600 shadow'
                    }`}
                  >
                    {category.icon}
                    <span>{category.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="space-y-6">
              {activeCategory.skills.map((skill, index) => {
                const colors = getColorClasses(activeCategory.color);
                return (
                  <div
                    key={skill.name}
                    className="transform transition-all duration-500"
                    style={{
                      transitionDelay: `${index * 100}ms`,
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                    }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                        {skill.name}
                      </span>
                      <span className={`text-sm font-bold ${colors.text}`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${colors.progress} rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 100}ms`,
                        }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { 
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs,
  SiNodedotjs, SiExpress, SiMysql, SiMongodb,
  SiDocker, SiGit, SiGithub, SiPython, SiCplusplus
} from 'react-icons/si';
import { BiMessageSquareDetail } from 'react-icons/bi';

interface SkillIconProps {
  name: string;
  className?: string;
}

export const SkillIcon: React.FC<SkillIconProps> = ({ name, className = '' }) => {
  const iconMap: Record<string, React.ComponentType> = {
    'HTML': SiHtml5,
    'CSS': SiCss3,
    'JavaScript': SiJavascript,
    'TypeScript': SiTypescript,
    'React': SiReact,
    'Next.js': SiNextdotjs,
    'Node.js': SiNodedotjs,
    'Express.js': SiExpress,
    'MySQL': SiMysql,
    'MongoDB': SiMongodb,
    'Docker': SiDocker,
    'Git': SiGit,
    'GitHub': SiGithub,
    'Python': SiPython,
     'C++': SiCplusplus,
    // 'Golang': SiGOLANG,
  };

  const Icon = iconMap[name];
  
  if (!Icon) {
    return null;
  }

  return <Icon className={className} />;
};

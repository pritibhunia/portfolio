import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/SkillSet.module.css';

const skills = [
  { name: 'Azure', logo: '/logos/azure.png' },
  { name: 'AWS', logo: '/logos/aws.jpeg' },
  { name: 'DevOps', logo: '/logos/devops.png' },
  { name: 'Git', logo: '/logos/git.png' },
  { name: 'Terraform', logo: '/logos/terraform.jpeg' },
  { name: 'YAML', logo: '/logos/yaml.png' },
  { name: 'Shell Scripting', logo: '/logos/shell.png' },
  { name: 'ASP.NET Core', logo: '/logos/dotnet.png' },
  { name: 'C#', logo: '/logos/csharp.png' },
  { name: 'PowerShell', logo: '/logos/powershell.jpeg' },
  { name: 'Python', logo: '/logos/python.png' },
  { name: 'CSS', logo: '/logos/css.jpeg' },
  { name: 'HTML', logo: '/logos/html.jpeg' },
  { name: 'JavaScript', logo: '/logos/javascript.png' },
  { name: 'ReactJs', logo: '/logos/react.jpeg' },
  { name: 'Java', logo: '/logos/java.png' },
  { name: 'SQL', logo: '/logos/sql.jpeg' },
  { name: 'Machine Learning', logo: '/logos/ml.png' },
  { name: 'Docker', logo: '/logos/docker.jpeg' },
  { name: 'Kubernetes', logo: '/logos/kubernetes.jpeg' },
];

type SkillSetProps = {
  className?: string;
};

const SkillSet: React.FC<SkillSetProps> = (props) => {
  return (
    <div className={`${styles.skillSetSection} ${props.className}`}>
      <div className={styles.skillContent}>
        <div className={styles.skillDesc}>
          <h1 className="ani-slideIn-up mb-5">ABOUT ME</h1>
          <h5 className="ani-slideIn-up mb-4" style={{ animationDelay: '0.4s', color: '#74cacf' }}>
            SOFTWARE ENGINEER - DESIGN & DEVELOPMENT, SIEMENS HEALTHINEERS | WERKSTUDENTIN
          </h5>
          <p className="ani-slideIn-up" style={{ animationDelay: '0.8s' }}>
            I am a software developer currently working on developing a digital imaging healthcare platform product using cutting-edge technologies like Edge Computing, Cloud Computing, and Containerization technology. As far as the tech stack is concerned, ASP.NET Core, C#, and Shell Scripting have been used for development.
          </p>
        </div>
        <div className={styles.skillSet}>
          {skills.map((skill) => (
            <div key={skill.name} className={styles.skillItem}>
              <img src={skill.logo} alt={skill.name} className={styles.skillLogo} />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

SkillSet.propTypes = {
  className: PropTypes.string,
};

export default SkillSet;
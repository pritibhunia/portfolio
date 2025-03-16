import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/SkillSet.module.css';
import { FaAws, FaDocker, FaGit, FaHtml5, FaJava, FaJs, FaPython, FaReact } from 'react-icons/fa';
import { SiKubernetes, SiCss3, SiDotnet, SiPandas, SiPytorch, SiScikitlearn, SiShell, SiSqlite, SiStreamlit, SiTerraform, SiYaml } from 'react-icons/si';
import { GiArtificialIntelligence } from 'react-icons/gi';
import { VscAzure, VscAzureDevops, VscTerminalPowershell } from "react-icons/vsc";
import { TbBrandCSharp } from "react-icons/tb";

const skills = [
  { name: 'Azure', icon: <VscAzure className={styles.skillIcon} style={{ color: '#0078D4' }} /> },
  { name: 'AWS', icon: <FaAws className={styles.skillIcon} style={{ color: '#FF9900' }} /> },
  { name: 'DevOps', icon: <VscAzureDevops className={styles.skillIcon} style={{ color: '#0078D4' }} /> },
  { name: 'Git', icon: <FaGit className={styles.skillIcon} style={{ color: '#F05032' }} /> },
  { name: 'Terraform', icon: <SiTerraform className={styles.skillIcon} style={{ color: '#623CE4' }} /> },
  { name: 'YAML', icon: <SiYaml className={styles.skillIcon} style={{ color: '#FFFFFF' }} /> },
  { name: 'Shell Scripting', icon: <SiShell className={styles.skillIcon} style={{ color: '#FFD500' }} /> },
  { name: 'ASP.NET Core', icon: <SiDotnet className={styles.skillIcon} style={{ color: '#512BD4' }} /> },
  { name: 'C#', icon: <TbBrandCSharp className={styles.skillIcon} style={{ color: '#239120' }} /> },
  { name: 'PowerShell', icon: <VscTerminalPowershell className={styles.skillIcon} style={{ color: '#FFFFFF' }} /> },
  { name: 'Python', icon: <FaPython className={styles.skillIcon} style={{ color: '#3776AB' }} /> },
  { name: 'CSS', icon: <SiCss3 className={styles.skillIcon} style={{ color: '#1572B6' }} /> },
  { name: 'HTML', icon: <FaHtml5 className={styles.skillIcon} style={{ color: '#E34F26' }} /> },
  { name: 'JavaScript', icon: <FaJs className={styles.skillIcon} style={{ color: '#F7DF1E' }} /> },
  { name: 'ReactJs', icon: <FaReact className={styles.skillIcon} style={{ color: '#61DAFB' }} /> },
  { name: 'Java', icon: <FaJava className={styles.skillIcon} style={{ color: '#007396' }} /> },
  { name: 'SQL', icon: <SiSqlite className={styles.skillIcon} style={{ color: '#003B57' }} /> },
  { name: 'Machine Learning', icon: <GiArtificialIntelligence className={styles.skillIcon} style={{ color: '#FF6F00' }} /> },
  { name: 'Docker', icon: <FaDocker className={styles.skillIcon} style={{ color: '#2496ED' }} /> },
  { name: 'Kubernetes', icon: <SiKubernetes className={styles.skillIcon} style={{ color: '#326CE5' }} /> },
  { name: 'PyTorch', icon: <SiPytorch className={styles.skillIcon} style={{ color: '#EE4C2C' }} /> },
  { name: 'Scikit-learn', icon: <SiScikitlearn className={styles.skillIcon} style={{ color: '#F7931E' }} /> },
  { name: 'Optuna', icon: <GiArtificialIntelligence className={styles.skillIcon} style={{ color: '#FF6F00' }} /> }, // No specific icon for Optuna, using AI icon
  { name: 'Streamlit', icon: <SiStreamlit className={styles.skillIcon} style={{ color: '#FF4B4B' }} /> },
  { name: 'Pandas', icon: <SiPandas className={styles.skillIcon} style={{ color: '#FFFFFF' }} /> },
];

type SkillSetProps = {
  className?: string;
};

const SkillSet: React.FC<SkillSetProps> = (props) => {
  return (
    <div className={`${styles.skillSetSection} ${props.className}`}>
      <div className={styles.skillContent}>
        <div className={styles.skillDesc}>
          <h1 className={`${styles.skillHeading} ani-slideIn-up mb-5`}>Skills and Technologies</h1>
        </div>
        <div className={styles.skillSet}>
          {skills.map((skill) => (
            <div key={skill.name} className={styles.skillItem}>
              <div className={styles.skillLogo}>{skill.icon}</div>
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
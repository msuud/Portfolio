import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import ResumeViewer from '../components/ResumeViewer';
import { FaDownload, FaFilePdf, FaEye } from 'react-icons/fa';

const ResumeContainer = styled.section`
  min-height: 100vh;
  padding: 6rem 2rem 4rem;
  background: transparent;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 700;
  color: var(--text-primary);
  text-align: center;
  margin-bottom: 1rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: var(--gradient-primary);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const SectionSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: var(--text-secondary);
  text-align: center;
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const ResumeContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ResumePreview = styled.div`
  background: var(--bg-secondary);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 3rem;
  border: 1px solid var(--border-primary);
  box-shadow: var(--shadow-primary);
  transform-style: preserve-3d;
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-10px) rotateX(5deg) rotateY(5deg) translateZ(20px);
    box-shadow: var(--shadow-primary);
    border-color: var(--border-secondary);
  }
`;

const ResumeIcon = styled.div`
  font-size: 4rem;
  color: var(--accent-primary);
  margin-bottom: 2rem;
`;

const ResumeTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--text-primary);
  margin-bottom: 1rem;
  font-weight: 600;
`;

const ResumeDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const ActionButton = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: var(--gradient-primary);
  color: white;
  text-decoration: none;
  border-radius: 10px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-primary);

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-primary);
  }
`;

const SkillsSection = styled.div`
  background: var(--bg-secondary);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 3rem;
  border: 1px solid var(--border-primary);
  box-shadow: var(--shadow-primary);
  transform-style: preserve-3d;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px) rotateX(5deg) rotateY(5deg) translateZ(20px);
    box-shadow: var(--shadow-primary);
    border-color: var(--border-secondary);
  }
`;

const SkillsTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--text-primary);
  margin-bottom: 2rem;
  font-weight: 600;
`;

const SkillsGrid = styled.div`
  display: grid;
  gap: 1.5rem;
`;

const SkillCategory = styled.div`
  h4 {
    color: var(--accent-primary);
    margin-bottom: 0.5rem;
    font-weight: 600;
  }
`;

const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const SkillTag = styled.span`
  background: rgba(99, 102, 241, 0.1);
  color: var(--accent-primary);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid var(--border-primary);
`;



const Resume = () => {
  const skills = {
    "Frontend": ["React", "Vue.js", "Angular", "TypeScript", "HTML5", "CSS3", "Sass", "Tailwind CSS"],
    "Backend": ["Node.js", "Python", "Java", "Express.js", "Django", "FastAPI", "Spring Boot"],
    "Database": ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch"],
    "Cloud & DevOps": ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Jenkins"],
    "Mobile": ["React Native", "Flutter", "iOS", "Android"],
    "Tools": ["Git", "VS Code", "Figma", "Postman", "Jira", "Confluence"]
  };

  return (
    <ResumeContainer>
      <ContentWrapper>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Resume & Skills
        </SectionTitle>
        
        <SectionSubtitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Download my resume and explore my technical expertise
        </SectionSubtitle>



        <ResumeViewer />
      </ContentWrapper>
    </ResumeContainer>
  );
};

export default Resume;

import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import TypewriterTextComponent from '../components/TypewriterText';
import { FaGithub, FaLinkedin, FaCode, FaDatabase, FaCloud, FaFlask } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";

// --- Unchanged Components ---
const HomeContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
  gap: 3rem; /* Adjusted gap */

  @media (max-width: 768px) {
    gap: 2rem;
    text-align: center;
  }
`;

const TextContent = styled.div`
  z-index: 2;
  text-align: center;
  max-width: 800px;
`;

const Greeting = styled(motion.div)`
  font-size: 1.2rem;
  color: var(--accent-primary);
  margin-bottom: 1rem;
  font-weight: 500;
`;

const NameContainer = styled.div`
  margin-bottom: 1rem;
  text-align: center;
`;

const Title = styled(motion.h2)`
  font-size: 1.5rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  font-weight: 400;
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 3rem;
  justify-content: center;
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--gradient-primary);
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-primary);
  cursor: pointer;

  &:hover {
    transform: translateY(-5px) scale(1.1);
    box-shadow: var(--shadow-secondary);
    background: var(--gradient-secondary);
  }
`;

const SkillsSection = styled(motion.div)`
  margin-top: 2rem;
  width: 100%;
`;

const SkillsTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--accent-primary);
  margin-bottom: 2rem;
  font-weight: 600;
`;

// --- MODIFIED: New skills layout without boxes ---
const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Creates a two-column layout */
  gap: 2.5rem;
  text-align: left;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Single column on smaller screens */
    text-align: center;
  }
`;

// --- NEW: Container for each skill category ---
const SkillCategory = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

// --- NEW: Styling for the icon ---
const SkillIcon = styled.div`
  font-size: 2rem;
  color: var(--accent-primary);
`;

// --- NEW: Wrapper for the text content ---
const SkillInfo = styled.div``;

const SkillName = styled.h4`
  font-size: 1.2rem;
  color: var(--text-primary);
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const SkillDescription = styled.p`
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.5;
`;


const Home = () => {
  const typewriterTexts = ["Urva Dave"];

  const skills = [
    {
      icon: <FaCode />,
      name: "Languages & Frontend",
      description: "Proficient in C++ and Web Development, with skills in Javascript, React.js, HTML5 & CSS3." // [cite: 9, 11]
    },
    {
      icon: <FaDatabase />,
      name: "Backend & Databases",
      description: "Experienced with Node.js, Express.js, REST APIs, and databases like MongoDB and Firebase." // [cite: 11]
    },
    {
      icon: <FaCloud />,
      name: "Cloud & Tools",
      description: "Familiar with Google Cloud Platform, Git, GitHub, and cloud computing principles." // [cite: 11]
    },
    {
      icon: <FaFlask />,
      name: "Machine Learning",
      description: "Knowledge of Python and ML concepts, with published research in the field." // [cite: 11, 37]
    }
  ];

  return (
    <HomeContainer>
      <ContentWrapper>
        <TextContent>
          {/* Greeting, Name, Title, and SocialLinks remain the same */}
          <Greeting initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            Hello, I'm
          </Greeting>
          
          <NameContainer initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <TypewriterTextComponent texts={typewriterTexts} typingSpeed={150} deletingSpeed={75} pauseTime={2000} />
          </NameContainer>
          
          <Title initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
          Full Stack Developer | Open Source Contributor | IEEE Published Researcher | National Hackathon Finalist
          </Title>
          
          <SocialLinks initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
            <SocialLink href="https://github.com/msuud" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/urvadave/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </SocialLink>
            <SocialLink href="https://leetcode.com/u/urvadave0204/" target="_blank" rel="noopener noreferrer">
              <SiLeetcode />
            </SocialLink>
          </SocialLinks>
        </TextContent>
        
        <SkillsSection initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}>
          <SkillsTitle>Core Competencies</SkillsTitle>
          <SkillsGrid>
            {skills.map((skill, index) => (
              <SkillCategory 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.15 }}
              >
                <SkillIcon>{skill.icon}</SkillIcon>
                <SkillInfo>
                  <SkillName>{skill.name}</SkillName>
                  <SkillDescription>{skill.description}</SkillDescription>
                </SkillInfo>
              </SkillCategory>
            ))}
          </SkillsGrid>
        </SkillsSection>
      </ContentWrapper>
    </HomeContainer>
  );
};

export default Home;
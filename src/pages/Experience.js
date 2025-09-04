import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

import { FaBriefcase, FaCode, FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt, FaShoppingCart, FaTasks, FaCloudSun, FaChartBar, FaChevronDown } from 'react-icons/fa';

// --- STYLED COMPONENTS (with modifications) ---

const ExperienceContainer = styled.section`
  min-height: 100vh;
  padding: 6rem 2rem 4rem;
  background: transparent;
`;

const ContentWrapper = styled.div`
  max-width: 1000px;
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

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  background: #000000; 
  backdrop-filter: blur(20px);
  border-radius: 50px;
  padding: 0.5rem;
  border: 1px solid var(--border-primary);
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
`;

const Tab = styled(motion.button)`
  flex: 1;
  padding: 1rem 2rem;
  border: none;
  background: ${props => props.active ? 'var(--gradient-primary)' : 'transparent'};
  color: ${props => props.active ? 'white' : 'var(--text-secondary)'};
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;

  &:hover {
    color: ${props => props.active ? 'white' : 'var(--accent-primary)'};
  }
`;

const ContentArea = styled.div`
  min-height: 400px;
`;

const AccordionContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const AccordionItem = styled.div`
  background: #000000; /* Solid black */
  backdrop-filter: blur(20px); /* Keep if you want the blur effect on the black */
  border-radius: 20px;
  border: 1px solid var(--border-primary);
  box-shadow: none;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: var(--shadow-hover, 0 8px 30px rgba(0, 0, 0, 0.2));
    border-color: var(--border-secondary, #6366F1);
  }
`;

const AccordionHeader = styled(motion.header)`
  padding: 1.5rem 2rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AccordionTitleGroup = styled.div``;

const AccordionTitle = styled.h3`
  font-size: 1.3rem;
  color: var(--text-primary);
  font-weight: 600;
  margin: 0;
`;

const AccordionSubtitle = styled.h4`
  font-size: 1rem;
  color: var(--accent-primary);
  font-weight: 500;
  margin: 0.25rem 0 0;
`;

const AccordionContent = styled(motion.section)`
  padding: 0 2rem 2rem 2rem;
`;

const ChevronIcon = styled(motion.div)`
  font-size: 1.5rem;
  color: var(--text-secondary);
`;

const Description = styled.p`
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 1.5rem;
  border-top: 1px solid var(--border-primary);
  padding-top: 1.5rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  background: var(--gradient-primary);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const MetaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
  border-top: 1px solid var(--border-primary);
  padding-top: 1.5rem;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--text-secondary);
  font-size: 0.9rem;
`;

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--accent-primary);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  margin-top: 1.5rem;
  border-top: 1px solid var(--border-primary);
  padding-top: 1.5rem;
  width: 100%;

  &:hover {
    color: var(--accent-secondary);
    transform: translateX(5px);
  }
`;

// --- MAIN COMPONENT ---

const Experience = () => {
  const [activeTab, setActiveTab] = useState('experience');
  const [expandedIndex, setExpandedIndex] = useState(0); // Default first item to be open

  const experiences = [
    {
      title: "Open Source Contributor",
      company: "GirlScript Summer of Code 2025",
      duration: "July 2025 - Present", // [cite: 15]
      location: "Remote", // [cite: 15]
      description: "Contributing to multiple open-source repositories, solving over 50 issues and merging 38+ pull requests. Collaborated with a global community of mentors and developers and earned two Pull Shark Badges on GitHub.",
      techStack: ["Git", "GitHub", "Open Source", "Collaboration"]
    },
    {
      title: "Web Developer Intern",
      company: "MaMo TechnoLabs LLP",
      duration: "May 2024 - June 2024", // [cite: 19]
      location: "Vadodara, Gujarat", // [cite: 19]
      description: "Gained hands-on experience in full-stack web development. Built a complete responsive web project that applied concepts of both frontend and backend integration.",
      techStack: ["Web Development", "Frontend", "Backend", "Project Management"]
    },
  ];

  const projects = [
    {
      title: "MaatriCare: AI-Powered Maternal Health Support",
      description: "Built a maternal health platform providing prenatal and postnatal guidance. Enabled SMS-based AI replies using the Gemini API for users without internet, and included features like symptom triage and pregnancy tracking.",
      techStack: ["React.js", "Node.js", "Firebase", "Gemini API"], // [cite: 26]
      link: "https://github.com/msuud/MaatriCare" // <-- UPDATE THIS LINK
    },
    {
      title: "ContestBuzz: Competitive Programming Notifier",
      description: "Integrated the Clist.by API to fetch real-time contest data from 5 major coding platforms. Implemented an email reminder feature using SendGrid to ensure users never miss a contest.",
      techStack: ["React.js", "Node.js", "Firebase", "SendGrid API", "Clist.by API"], // [cite: 32]
      link: "https://github.com/msuud/ContestBuzz" // <-- UPDATE THIS LINK
    },
    {
      title: "OIPulse ActiveStrike Data Fetcher",
      description: "Developed a Python-based automation tool to periodically fetch active strike open interest (OI) data from OIPulse’s live options analysis page. Automated API fetching, filtering, and saving structured data into daily CSV files every 5 minutes, ensuring accuracy and eliminating manual entry for real-time monitoring.",
      techStack: ["Python", "Selenium", "Requests", "Pandas", "ChromeDriver", "PyInstaller"],
      link: "https://github.com/msuud/OIPulse-ActiveStrike-Data-Fetcher" // <-- UPDATE THIS LINK
    }
  ];

  const currentList = activeTab === 'experience' ? experiences : projects;

  return (
    <ExperienceContainer id="experience">
      <ContentWrapper>
        <SectionTitle>Experience & Projects</SectionTitle>
        <SectionSubtitle>My professional journey and notable projects</SectionSubtitle>

        <TabContainer>
          <Tab active={activeTab === 'experience'} onClick={() => { setActiveTab('experience'); setExpandedIndex(0); }}>
            <FaBriefcase style={{ marginRight: '0.5rem' }} /> Experience
          </Tab>
          <Tab active={activeTab === 'projects'} onClick={() => { setActiveTab('projects'); setExpandedIndex(0); }}>
            <FaCode style={{ marginRight: '0.5rem' }} /> Projects
          </Tab>
        </TabContainer>

        <ContentArea>
          <AnimatePresence mode="wait">
            <AccordionContainer
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {currentList.map((item, index) => (
                <AccordionItem key={index}>
                  <AccordionHeader onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}>
                    <AccordionTitleGroup>
                      <AccordionTitle>{item.title}</AccordionTitle>
                      {item.company && <AccordionSubtitle>{item.company}</AccordionSubtitle>}
                    </AccordionTitleGroup>
                    <ChevronIcon animate={{ rotate: expandedIndex === index ? 180 : 0 }}>
                      <FaChevronDown />
                    </ChevronIcon>
                  </AccordionHeader>
                  <AnimatePresence initial={false}>
                    {expandedIndex === index && (
                      <AccordionContent
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                      >
                        <Description>{item.description}</Description>
                        <TechStack>
                          {item.techStack.map((tech) => <TechTag key={tech}>{tech}</TechTag>)}
                        </TechStack>
                        
                        {activeTab === 'experience' ? (
                          <MetaGrid>
                            <MetaItem><FaCalendarAlt />{item.duration}</MetaItem>
                            <MetaItem><FaMapMarkerAlt />{item.location}</MetaItem>
                          </MetaGrid>
                        ) : (
                          <ProjectLink href={item.link} target="_blank" rel="noopener noreferrer">
                            View Project <FaExternalLinkAlt />
                          </ProjectLink>
                        )}

                      </AccordionContent>
                    )}
                  </AnimatePresence>
                </AccordionItem>
              ))}
            </AccordionContainer>
          </AnimatePresence>
        </ContentArea>
      </ContentWrapper>
    </ExperienceContainer>
  );
};

export default Experience;
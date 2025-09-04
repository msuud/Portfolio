import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import { FaFlask, FaMicroscope, FaBook, FaAward } from 'react-icons/fa';

const ResearchContainer = styled.section`
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

const ResearchGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); /* Slightly adjusted min width */
  gap: 2.5rem; /* Increased gap for visual separation without boxes */
  padding: 1rem; /* Add some padding if needed for overall spacing */
`;

// IMPORTANT: ResearchCard styling has been removed or minimalized to act as a wrapper
const ResearchItem = styled(motion.div)`
  /* Removed background, border, and box-shadow */
  padding: 1.5rem; /* Maintain padding for content spacing */
  border-radius: 15px; /* Keep a subtle border radius if preferred */
  transition: all 0.3s ease;
  text-align: center; /* Center content for a cleaner look */
  
  /* Optional: Add a subtle highlight on hover without a full box */
  &:hover {
    background: rgba(var(--accent-rgb), 0.05); /* Very subtle highlight */
    transform: translateY(-5px); /* Gentle lift effect */
  }

  /* Ensure text is still readable against the background */
  color: var(--text-primary); /* Explicitly set text color */
`;

const ResearchIcon = styled.div`
  font-size: 3.5rem; /* Slightly larger icon */
  color: var(--accent-primary);
  margin-bottom: 1rem;
  display: flex; /* Use flex to center the icon */
  justify-content: center;
`;

const ResearchTitle = styled.h3`
  font-size: 1.4rem; /* Slightly larger title */
  color: var(--text-primary);
  margin-bottom: 0.75rem; /* Adjusted margin */
  font-weight: 600;
`;

const ResearchDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 0; /* Removed bottom margin */
`;


const Research = () => {
  const researchAreas = [
    {
      icon: <FaBook />,
      title: "Emotion Detection in Text (IEEE)",
      description: "Published a research paper with IEEE on using a fine-tuned BERT model for detecting emotions in text-based communication."
    },
    {
      icon: <FaFlask />,
      title: "Fertilizer Recommendation (Springer)",
      description: "Co-authored and published a paper with Springer Nature on optimized machine learning models for recommending fertilizers."
    },
  ];

  return (
    <ResearchContainer id="research">
      <ContentWrapper>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Research & Publications
        </SectionTitle>
        
        <SectionSubtitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Exploring the frontiers of technology and innovation
        </SectionSubtitle>

        <ResearchGrid>
          {researchAreas.map((research, index) => (
            <ResearchItem
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }} /* Slightly reduced scale on hover for less prominent effect */
            >
              <ResearchIcon>{research.icon}</ResearchIcon>
              <ResearchTitle>{research.title}</ResearchTitle>
              <ResearchDescription>{research.description}</ResearchDescription>
            </ResearchItem>
          ))}
        </ResearchGrid>
      </ContentWrapper>
    </ResearchContainer>
  );
};

export default Research;
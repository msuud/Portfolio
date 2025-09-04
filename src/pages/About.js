import React from 'react';
import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';
import { FaUser, FaLightbulb, FaHeart } from 'react-icons/fa';

// --- KEYFRAMES ---
const twinkle = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 1;
    box-shadow: 0 0 8px 3px rgba(167, 139, 250, 0.5);
  }
  50% {
    transform: scale(1.2);
    opacity: 0.7;
    box-shadow: 0 0 12px 5px rgba(167, 139, 250, 0.3);
  }
`;

// --- STYLED COMPONENTS (Only TimelineItem is changed) ---

const AboutContainer = styled.section`
  min-height: 100vh;
  padding: 6rem 2rem 4rem;
  background: transparent;
  overflow-x: hidden;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
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

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: var(--text-secondary);
  text-align: center;
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const TimelineContainer = styled.div`
  position: relative;
  max-width: 900px;
  margin: 0 auto;

  &::after {
    content: '';
    position: absolute;
    width: 4px;
    background: var(--gradient-primary);
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -2px;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    &::after {
      left: 30px;
    }
  }
`;

// --- MODIFIED SECTION ---
const TimelineItem = styled(motion.div)`
  padding: 10px 40px;
  position: relative;
  width: 50%;

  &:nth-child(odd) {
    left: 0;
    padding-right: 60px;
    text-align: right;
  }

  &:nth-child(even) {
    left: 50%;
    padding-left: 60px;
    text-align: left;
  }

  /* This is the dot on the timeline */
  &::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    right: -14px;
    /* FIX: Using hardcoded, vibrant colors as fallbacks */
    background-color: var(--indigo-500,rgb(145, 212, 252)); /* Vibrant Indigo */
    border: 4px solid var(--purple-400,rgb(19, 108, 135)); /* Lighter Purple */
    top: 25px;
    border-radius: 50%;
    z-index: 2; /* Increased z-index to ensure it's on top of the line */
    /* FIX: Added a box-shadow to the animation for a "glow" effect */
    animation: ${twinkle} 2.5s infinite ease-in-out; 
  }

  &:nth-child(even)::after {
    left: -14px;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
    text-align: left;

    &:nth-child(odd), &:nth-child(even) {
      left: 0;
    }

    &::after {
      left: 20px;
    }
  }
`;
// --- END MODIFIED SECTION ---


const TimelineContent = styled.div`
  padding: 1rem 2rem;
  background: var(--bg-secondary);
  backdrop-filter: blur(20px);
  position: relative;
  border-radius: 12px;
  border: 1px solid var(--border-primary);
  box-shadow: var(--shadow-primary);
  transition: transform 0.3s ease-in-out;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:hover {
    transform: translateY(-5px);
  }
`;

const TimelineTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  ${TimelineItem}:nth-child(even) & {
    flex-direction: row-reverse;
  }

  @media (max-width: 768px) {
    ${TimelineItem}:nth-child(even) & {
      flex-direction: row;
    }
  }
`;

const AboutParagraph = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-secondary);
`;

const aboutData = [
  {
    icon: <FaUser />,
    title: "Who I Am",
    text: "I am a final-year Computer Engineering student at Charusat University, passionate about transforming ideas into impactful technology solutions. With strong foundations in programming and full-stack development, I actively apply my skills in both academic and professional settings."
  },
  {
    icon: <FaLightbulb />,
    title: "My Work",
    text: "I have contributed extensively to the open-source community through GirlScript Summer of Code 2025, with 38+ merged pull requests and 50+ issues resolved. My research journey includes two published papers—one with IEEE on emotion detection using BERT, and another with Springer Nature (ICT4SD 2025) on machine learning models for fertilizer recommendation."
  },
  {
    icon: <FaHeart />,
    title: "Beyond Code",
    text: "I actively participate in hackathons and competitive events, achieving recognition such as Top 100 at CMR Hackfest 2.0 and shortlisting in the top 5000 teams in the BuildWithIndia Hackathon. I was also shortlisted in hackathons by Flipkart, Meesho, and Adobe India. On the problem-solving side, I have solved 250+ questions on LeetCode and hold a 2★ rating on CodeChef."
  }
];

const About = () => {
  return (
    <AboutContainer id="about">
      <ContentWrapper>
        <SectionTitle>About Me</SectionTitle>
        <SectionSubtitle>My journey, my mission, and my passions.</SectionSubtitle>
        <TimelineContainer>
          {aboutData.map((item, index) => (
            <TimelineItem
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <TimelineContent>
                <TimelineTitle>
                  {item.icon}
                  {item.title}
                </TimelineTitle>
                <AboutParagraph>
                  {item.text}
                </AboutParagraph>
              </TimelineContent>
            </TimelineItem>
          ))}
        </TimelineContainer>
      </ContentWrapper>
    </AboutContainer>
  );
};

export default About;
import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import { FaTrophy, FaMedal, FaCertificate, FaStar, FaAward } from 'react-icons/fa';

const AchievementsContainer = styled.section`
  min-height: 100vh;
  padding: 6rem 2rem 4rem;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%);
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

const AchievementsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const AchievementCard = styled(motion.div)`
  background: var(--bg-secondary);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid var(--border-primary);
  box-shadow: var(--shadow-primary);
  transition: all 0.3s ease;
  transform-style: preserve-3d;
  text-align: center;

  &:hover {
    transform: translateY(-10px) rotateX(5deg) rotateY(5deg) translateZ(20px);
    box-shadow: var(--shadow-secondary);
    border-color: var(--border-secondary);
  }
`;

const AchievementIcon = styled.div`
  font-size: 3rem;
  color: var(--accent-primary);
  margin-bottom: 1rem;
`;

const AchievementTitle = styled.h3`
  font-size: 1.3rem;
  color: var(--text-primary);
  margin-bottom: 1rem;
  font-weight: 600;
`;

const AchievementDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;



const Achievements = () => {
  const achievements = [
    {
      icon: <FaTrophy />,
      title: "CMR Hackfest 2.0 Finalist",
      description: "Selected among the top 100 teams from over 1500 in a national-level hackathon organized by CMR College Of Engineering & Technology."
    },
    {
      icon: <FaMedal />,
      title: "BuildWithIndia Hackathon Finalist",
      description: "Placed among the top 5000 teams out of 25,000 participants."
    },
    {
      icon: <FaCertificate />,
      title: "Python Certified Programmer",
      description: "Awarded the PCEP - Certified Entry-Level Python Programmer certification by the OpenEDG Python Institute (Issued Nov 2024)."
    },
    {
      icon: <FaStar />,
      title: "Top Performer in DSA",
      description: "Earned the Top Performer Badge in the Coding Ninjas Data Structures & Algorithms with Java course."
    },
    {
      icon: <FaAward />,
      title: "Reliance Scholarship Test Achiever",
      description: "Ranked among the top 5000 students in India for Reliance Scholarship Test."
    }
  ];

  return (
    <AchievementsContainer>
      <ContentWrapper>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Achievements & Awards
        </SectionTitle>
        
        <SectionSubtitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Recognition for excellence and innovation
        </SectionSubtitle>



        <AchievementsGrid>
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <AchievementIcon>{achievement.icon}</AchievementIcon>
              <AchievementTitle>{achievement.title}</AchievementTitle>
              <AchievementDescription>{achievement.description}</AchievementDescription>
            </AchievementCard>
          ))}
        </AchievementsGrid>
      </ContentWrapper>
    </AchievementsContainer>
  );
};

export default Achievements;

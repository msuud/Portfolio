import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const ContactContainer = styled.section`
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
  margin-bottom: 5rem;
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

const ContactInfo = styled.div`
  background: var(--bg-secondary);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 3rem;
  border: 1px solid var(--border-primary);
  box-shadow: var(--shadow-primary);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-secondary);
    border-color: var(--border-secondary);
  }
`;

const ContactItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1rem;
  border-radius: 10px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(99, 102, 241, 0.1);
    transform: translateX(10px);
  }
`;

const ContactIcon = styled.div`
  font-size: 1.5rem;
  color: var(--accent-primary);
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(99, 102, 241, 0.1);
  border-radius: 50%;
`;

const ContactText = styled.div`
  h3 {
    color: var(--text-primary);
    margin-bottom: 0.5rem;
    font-weight: 600;
  }
  p {
    color: var(--text-secondary);
    margin: 0;
  }
`;

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <ContentWrapper>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </SectionTitle>

        <ContactInfo>
          <ContactItem
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <ContactIcon>
              <FaEnvelope />
            </ContactIcon>
            <ContactText>
              <h3>Email</h3>
              <p>urvadave0204@gmail.com</p>
            </ContactText>
          </ContactItem>

          <ContactItem
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <ContactIcon>
              <FaPhone />
            </ContactIcon>
            <ContactText>
              <h3>Phone</h3>
              <p>+91 6353172764</p>
            </ContactText>
          </ContactItem>

          <ContactItem
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <ContactIcon>
              <FaMapMarkerAlt />
            </ContactIcon>
            <ContactText>
              <h3>Location</h3>
              <p>Vadodara, Gujarat, India</p>
            </ContactText>
          </ContactItem>
        </ContactInfo>
      </ContentWrapper>
    </ContactContainer>
  );
};

export default Contact;

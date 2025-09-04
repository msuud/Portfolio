import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";

const FooterContainer = styled.footer`
  padding: 1rem;
  background: transparent;
  margin-top: 2rem;
  /* MODIFIED: Added a top border for separation */
  border-top: 1px solid var(--border-primary);
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  /* MODIFIED: Reduced the gap to better suit smaller icons */
  gap: 1.2rem;
`;

const SocialIcon = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  /* MODIFIED: Made the logos smaller */
  font-size: 1.2rem;
  color: var(--text-secondary);
  transition: all 0.3s ease;

  &:hover {
    color: var(--accent-primary);
    transform: translateY(-3px);
  }
`;

const CopyrightText = styled.p`
  color: var(--text-muted);
  font-size: 0.9rem;
  margin: 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <CopyrightText>
          &copy; {new Date().getFullYear()} Urva Dave. All Rights Reserved.
        </CopyrightText>
        <SocialLinks>
          <SocialIcon
            href="https://www.linkedin.com/in/urvadave/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </SocialIcon>
          <SocialIcon
            href="https://github.com/msuud"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="GitHub"
          >
            <FaGithub />
          </SocialIcon>
          <SocialIcon
            href="https://wa.me/916353172764"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </SocialIcon>
          <SocialIcon
            href="https://leetcode.com/u/urvadave0204/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="WhatsApp"
          >
            <SiLeetcode />
          </SocialIcon>
        </SocialLinks>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
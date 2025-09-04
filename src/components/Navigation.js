import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavContainer = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(10, 10, 10, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border-primary);
  /* This padding creates the space from the edge of the screen */
  padding: 1rem 2rem; 
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
  display: flex;
  /* This property pushes the logo to the far left and links to the far right */
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--accent-primary);
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--accent-secondary);
  }
`;

const NavLinks = styled(motion.ul)`
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(10, 10, 10, 0.98);
    backdrop-filter: blur(20px);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(-100%)'};
    transition: transform 0.3s ease;
  }
`;

const NavLink = styled(motion.li)`
  a {
    color: var(--text-secondary);
    text-decoration: none;
    font-weight: 500;
    position: relative;
    transition: all 0.3s ease;
    padding: 0.5rem 1rem;
    border-radius: 8px;

    &:hover {
      color: var(--accent-primary);
      transform: translateY(-2px);
    }

    &.active {
      color: var(--accent-primary);
      background: rgba(99, 102, 241, 0.1);
      transform: translateY(-2px);
    }
  }
`;

const MobileMenuButton = styled(motion.button)`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--accent-primary);
  cursor: pointer;
  z-index: 1001;

  @media (max-width: 768px) {
    display: block;
  }
`;

const CloseButton = styled(motion.button)`
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: none;
  border: none;
  font-size: 2rem;
  color: var(--accent-primary);
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Research', path: '/research' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Resume', path: '/resume' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <NavContainer
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        background: scrolled 
          ? 'rgba(10, 10, 10, 0.98)' 
          : 'rgba(10, 10, 10, 0.95)'
      }}
    >
      <NavContent>
        <Logo
          to="/"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Urva Dave
        </Logo>

        <NavLinks isOpen={isOpen}>
          <CloseButton
            onClick={() => setIsOpen(false)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaTimes />
          </CloseButton>
          
          {navItems.map((item, index) => (
            <NavLink
              key={item.path}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Link
                to={item.path}
                className={location.pathname === item.path ? 'active' : ''}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            </NavLink>
          ))}
        </NavLinks>

        <MobileMenuButton
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
           {isOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>
      </NavContent>
    </NavContainer>
  );
};

export default Navigation;
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const TypewriterContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const TypewriterText = styled.span`
  font-size: 3rem;
  font-weight: 700;
  color: var(--text-primary);
  position: relative;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Cursor = styled.span`
  display: inline-block;
  width: 3px;
  height: 1em;
  background: var(--accent-primary);
  margin-left: 2px;
  animation: blink 1s infinite;
  
  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }
`;

const Underline = styled.div`
  position: absolute;
  bottom: -5px;
  left: 0;
  height: 3px;
  background: var(--gradient-primary);
  border-radius: 2px;
  transition: width 0.3s ease;
  width: ${props => props.width}%;
`;

const TypewriterTextComponent = ({ 
  texts, 
  typingSpeed = 100, 
  deletingSpeed = 50, 
  pauseTime = 2000 
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isPaused) {
        setIsPaused(false);
        setIsDeleting(true);
        return;
      }

      const fullText = texts[currentTextIndex];
      
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        
        if (currentText === fullText) {
          setIsPaused(true);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, isPaused, currentTextIndex, texts, typingSpeed, deletingSpeed]);

  const currentFullText = texts[currentTextIndex];
  const underlineWidth = (currentText.length / currentFullText.length) * 100;

  return (
    <TypewriterContainer>
      <TypewriterText>
        {currentText}
        <Cursor />
      </TypewriterText>
      <Underline width={underlineWidth} />
    </TypewriterContainer>
  );
};

export default TypewriterTextComponent;

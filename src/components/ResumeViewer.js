import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaDownload, FaSearch, FaList, FaEllipsisV, FaMinus, FaPlus } from 'react-icons/fa';

const ResumeViewerContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  background: var(--bg-secondary);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  border: 1px solid var(--border-primary);
  box-shadow: var(--shadow-primary);
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-secondary);
  }
`;

const Toolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  background: var(--bg-tertiary);
  border-bottom: 1px solid var(--border-primary);
`;

const ToolbarLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ToolbarCenter = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ToolbarRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ToolbarButton = styled(motion.button)`
  background: none;
  border: none;
  color: var(--text-secondary);
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    color: var(--accent-primary);
    background: rgba(255, 107, 107, 0.1);
    transform: translateY(-2px);
  }
`;

const ZoomControls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--bg-secondary);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  border: 1px solid var(--border-primary);
`;

const ZoomButton = styled(motion.button)`
  background: none;
  border: none;
  color: var(--text-secondary);
  cursor: pointer;
  padding: 0.3rem;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    color: var(--accent-primary);
    background: rgba(255, 107, 107, 0.1);
  }
`;

const PageInfo = styled.div`
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin: 0 1rem;
`;

const PDFEmbedContainer = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background: var(--bg-tertiary);
`;

const StyledIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

const ButtonWrapper = styled.div`
  text-align: center;
  margin-top: 2.5rem;
`;

const DownloadButton = styled(motion.a)`
  background: var(--gradient-primary);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem; 
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex; 
  align-items: center;
  gap: 0.4rem;
  margin: 0; 
  transition: all 0.3s ease;
  box-shadow: var(--shadow-primary);
  text-decoration: none;

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-secondary);
  }
`;

const ResumeViewer = () => {
  const [zoom, setZoom] = useState(100);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 1;

  const resumePdfPath = "/Urva_Dave___resume.pdf";

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 10, 200));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 10, 50));
  };

  return (
    <>
      <ResumeViewerContainer>
        {/* Your custom toolbar remains, allowing you to build your own controls later if needed */}
        <Toolbar>
          <ToolbarLeft>
            <ToolbarButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <FaList />
            </ToolbarButton>
            <ToolbarButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <FaEllipsisV />
            </ToolbarButton>
          </ToolbarLeft>

          <ToolbarCenter>
            <ZoomControls>
              <ZoomButton onClick={handleZoomOut} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <FaMinus />
              </ZoomButton>
              <PageInfo>{currentPage} of {totalPages}</PageInfo>
              <ZoomButton onClick={handleZoomIn} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <FaPlus />
              </ZoomButton>
            </ZoomControls>
          </ToolbarCenter>

          <ToolbarRight>
            <ToolbarButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <FaSearch />
            </ToolbarButton>
            <ToolbarButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <FaEllipsisV />
            </ToolbarButton>
          </ToolbarRight>
        </Toolbar>

        <PDFEmbedContainer>
          {/* MODIFIED: Appended #toolbar=0 to the URL to hide the default PDF toolbar */}
          <StyledIframe src={`${resumePdfPath}#toolbar=0`} title="My Resume" />
        </PDFEmbedContainer>
      </ResumeViewerContainer>

      <ButtonWrapper>
        <DownloadButton
          href={resumePdfPath}
          download="Urva_Dave_Resume.pdf"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaDownload />
          Download Resume
        </DownloadButton>
      </ButtonWrapper>
    </>
  );
};

export default ResumeViewer;
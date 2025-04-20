import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Styled components
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  padding: 20px;
  text-align: center;
`;

const Content = styled(motion.div)`
  max-width: 700px;
  margin: 0 auto;
`;

const ErrorCode = styled(motion.h1)`
  font-size: 8rem;
  font-weight: 700;
  color: var(--secondary-color);
  margin: 0;
  line-height: 1;
  
  @media (max-width: 576px) {
    font-size: 6rem;
  }
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 20px;
  
  @media (max-width: 576px) {
    font-size: 1.8rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  margin-bottom: 40px;
  color: var(--text-light-color);
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 20px;
  justify-content: center;
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const PrimaryButton = styled(motion.div)`
  display: inline-block;
`;

const PrimaryButtonLink = styled(Link)`
  display: inline-block;
  padding: 14px 30px;
  background-color: var(--secondary-color);
  color: white;
  text-decoration: none;
  font-weight: 600;
  border-radius: var(--border-radius);
  transition: all var(--transition-normal);
  
  &:hover {
    background-color: var(--accent-color);
    transform: translateY(-3px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  }
`;

const SecondaryButton = styled(motion.div)`
  display: inline-block;
`;

const SecondaryButtonLink = styled(Link)`
  display: inline-block;
  padding: 12px 28px;
  background-color: transparent;
  color: var(--text-color);
  text-decoration: none;
  font-weight: 600;
  border: 2px solid var(--border-color);
  border-radius: var(--border-radius);
  transition: all var(--transition-normal);
  
  &:hover {
    border-color: var(--secondary-color);
    color: var(--secondary-color);
    transform: translateY(-3px);
  }
`;

const Illustration = styled(motion.div)`
  margin-bottom: 40px;
  max-width: 400px;
  
  img {
    width: 100%;
    height: auto;
  }
`;

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100
    }
  }
};

const Error404Page: React.FC = () => {
  return (
    <PageContainer>
      <Content
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <Illustration variants={itemVariants}>
          {/* You can replace this with an actual 404 illustration */}
          <svg width="100%" height="auto" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
            <circle cx="400" cy="300" r="150" fill="#f3f4f6" />
            <text x="400" y="350" fontSize="180" fontWeight="bold" textAnchor="middle" fill="var(--secondary-color)">404</text>
            <path d="M300,450 C350,520 450,520 500,450" stroke="#333" strokeWidth="8" fill="transparent" strokeLinecap="round" />
            <circle cx="320" cy="250" r="20" fill="#333" />
            <circle cx="480" cy="250" r="20" fill="#333" />
          </svg>
        </Illustration>
        
        <ErrorCode variants={itemVariants}>404</ErrorCode>
        <Title variants={itemVariants}>Page Not Found</Title>
        <Description variants={itemVariants}>
          Oops! The page you are looking for might have been removed, had its name changed,
          or is temporarily unavailable.
        </Description>
        
        <ButtonGroup variants={itemVariants}>
          <PrimaryButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <PrimaryButtonLink to="/">Back to Home</PrimaryButtonLink>
          </PrimaryButton>
          <SecondaryButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <SecondaryButtonLink to="/contact">Contact Support</SecondaryButtonLink>
          </SecondaryButton>
        </ButtonGroup>
      </Content>
    </PageContainer>
  );
};

export default Error404Page;
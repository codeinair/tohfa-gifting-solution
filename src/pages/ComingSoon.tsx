import React, { useState, useEffect } from 'react';
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
  background-color: var(--background-alt-color);
  padding: 20px;
  text-align: center;
`;

const Logo = styled(Link)`
  font-size: 24px;
  font-weight: 700;
  text-decoration: none;
  color: var(--text-color);
  margin-bottom: 60px;
  display: inline-block;
`;

const Content = styled(motion.div)`
  max-width: 700px;
  margin: 0 auto;
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  margin-bottom: 20px;
  
  span {
    color: var(--secondary-color);
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  margin-bottom: 40px;
  color: var(--text-light-color);
`;

const CountdownContainer = styled(motion.div)`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-bottom: 50px;
  
  @media (max-width: 576px) {
    gap: 10px;
  }
`;

const CountdownItem = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: var(--border-radius);
  min-width: 100px;
  box-shadow: var(--box-shadow);
  
  .number {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--secondary-color);
    margin-bottom: 5px;
  }
  
  .label {
    font-size: 0.9rem;
    color: var(--text-light-color);
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  @media (max-width: 576px) {
    min-width: 70px;
    padding: 15px;
    
    .number {
      font-size: 1.8rem;
    }
    
    .label {
      font-size: 0.7rem;
    }
  }
`;

const SubscribeForm = styled(motion.form)`
  display: flex;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const EmailInput = styled.input`
  flex: 1;
  padding: 15px;
  border: 2px solid transparent;
  border-radius: var(--border-radius) 0 0 var(--border-radius);
  font-size: 16px;
  transition: border-color var(--transition-normal);
  
  &:focus {
    outline: none;
    border-color: var(--secondary-color);
  }
  
  @media (max-width: 576px) {
    border-radius: var(--border-radius);
  }
`;

const SubscribeButton = styled.button`
  background-color: var(--secondary-color);
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 0 var(--border-radius) var(--border-radius) 0;
  font-weight: 600;
  cursor: pointer;
  transition: background-color var(--transition-normal);
  
  &:hover {
    background-color: var(--accent-color);
  }
  
  @media (max-width: 576px) {
    border-radius: var(--border-radius);
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 15px;
  margin-top: 50px;
  justify-content: center;
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: var(--text-color);
  box-shadow: var(--box-shadow);
  transition: all var(--transition-normal);
  
  &:hover {
    background-color: var(--secondary-color);
    color: white;
    transform: translateY(-3px);
  }
`;

const BackToHome = styled(Link)`
  margin-top: 60px;
  color: var(--text-color);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: color var(--transition-normal);
  
  &:hover {
    color: var(--secondary-color);
  }
  
  svg {
    transition: transform var(--transition-normal);
  }
  
  &:hover svg {
    transform: translateX(-3px);
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

const ComingSoonPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  // Set launch date (future date)
  const launchDate = new Date('June 1, 2025 00:00:00').getTime();
  
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;
      
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      setCountdown({ days, hours, minutes, seconds });
      
      if (distance < 0) {
        clearInterval(interval);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);
    
    return () => clearInterval(interval);
  }, [launchDate]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the subscription
    alert(`Thanks for subscribing with ${email}! We'll notify you when we launch.`);
    setEmail('');
  };
  
  return (
    <PageContainer>
      <Logo to="/">MediaFoundry</Logo>
      
      <Content
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <Title variants={itemVariants}>
          Something <span>Amazing</span> is Coming Soon
        </Title>
        <Description variants={itemVariants}>
          We're working hard to bring you our new product line. Sign up for our newsletter to be the first to know when we launch.
        </Description>
        
        <CountdownContainer variants={itemVariants}>
          <CountdownItem>
            <div className="number">{countdown.days}</div>
            <div className="label">Days</div>
          </CountdownItem>
          <CountdownItem>
            <div className="number">{countdown.hours}</div>
            <div className="label">Hours</div>
          </CountdownItem>
          <CountdownItem>
            <div className="number">{countdown.minutes}</div>
            <div className="label">Minutes</div>
          </CountdownItem>
          <CountdownItem>
            <div className="number">{countdown.seconds}</div>
            <div className="label">Seconds</div>
          </CountdownItem>
        </CountdownContainer>
        
        <SubscribeForm 
          variants={itemVariants}
          onSubmit={handleSubmit}
        >
          <EmailInput 
            type="email" 
            placeholder="Enter your email address" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <SubscribeButton type="submit">Notify Me</SubscribeButton>
        </SubscribeForm>
        
        <SocialLinks variants={itemVariants}>
          <SocialLink href="#" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </SocialLink>
          <SocialLink href="#" aria-label="Twitter">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
            </svg>
          </SocialLink>
          <SocialLink href="#" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </SocialLink>
          <SocialLink href="#" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </SocialLink>
        </SocialLinks>
        
        <BackToHome to="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Home
        </BackToHome>
      </Content>
    </PageContainer>
  );
};

export default ComingSoonPage;
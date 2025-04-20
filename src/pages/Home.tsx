import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

// Animation variants for staggered animations
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
  hidden: { y: 50, opacity: 0 },
  show: { 
    y: 0, 
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100
    }
  }
};

// Styled components
const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 80vh;
  padding: 40px;
  background-color: var(--background-alt-color);
`;

const HeroContent = styled(motion.div)`
  max-width: 600px;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 4.5rem;
  margin-bottom: 1.5rem;
  
  span {
    color: var(--secondary-color);
  }
`;

const HeroDescription = styled(motion.p)`
  font-size: 1.2rem;
  color: var(--text-light-color);
  margin-bottom: 2rem;
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 20px;
  margin-bottom: 2rem;
`;

const HeroImage = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: center;
  
  img {
    max-width: 100%;
    height: auto;
  }
`;

const FeaturesSection = styled.section`
  padding: 100px 40px;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 60px;
`;

const FeaturesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 40px;
`;

const FeatureCard = styled(motion.div)`
  padding: 30px;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  transition: transform var(--transition-normal);
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const FeatureIcon = styled.div`
  width: 60px;
  height: 60px;
  background-color: var(--secondary-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const FeatureTitle = styled.h3`
  margin-bottom: 15px;
`;

const HomePage: React.FC = () => {
  return (
    <MainLayout>
      <HeroSection>
        <HeroContent
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <HeroTitle variants={itemVariants}>
            Exquisite <span>Gift Hampers</span> for Every Occasion
          </HeroTitle>
          <HeroDescription variants={itemVariants}>
            Premium gifting solutions tailored to your unique needs. From corporate gifts to personal celebrations, 
            we design thoughtful hampers that create lasting impressions.
          </HeroDescription>
          <ButtonGroup variants={itemVariants}>
            <Link to="/shop" className="btn">Browse Hampers</Link>
            <Link to="/services" className="btn btn-outline">Our Services</Link>
          </ButtonGroup>
        </HeroContent>
        <HeroImage
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img src="/placeholder-hero.jpg" alt="Tohfa Gift Hampers" />
        </HeroImage>
      </HeroSection>

      <FeaturesSection>
        <SectionTitle>Why Choose Our Gifting Solutions</SectionTitle>
        <FeaturesGrid
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <FeatureCard variants={itemVariants}>
            <FeatureIcon>🎁</FeatureIcon>
            <FeatureTitle>Expertly Curated</FeatureTitle>
            <p>Each hamper is thoughtfully designed with premium products selected for quality and presentation.</p>
          </FeatureCard>
          <FeatureCard variants={itemVariants}>
            <FeatureIcon>✨</FeatureIcon>
            <FeatureTitle>Fully Customizable</FeatureTitle>
            <p>Personalize your gifts with custom branding, messaging, and product selection to suit your specific needs.</p>
          </FeatureCard>
          <FeatureCard variants={itemVariants}>
            <FeatureIcon>🚚</FeatureIcon>
            <FeatureTitle>Reliable Delivery</FeatureTitle>
            <p>We ensure your gifts arrive on time and in perfect condition, anywhere in the region.</p>
          </FeatureCard>
          <FeatureCard variants={itemVariants}>
            <FeatureIcon>👥</FeatureIcon>
            <FeatureTitle>Corporate Solutions</FeatureTitle>
            <p>Special bulk order options for businesses looking to appreciate clients, partners, or employees.</p>
          </FeatureCard>
          <FeatureCard variants={itemVariants}>
            <FeatureIcon>🎀</FeatureIcon>
            <FeatureTitle>Occasions & Celebrations</FeatureTitle>
            <p>Specialized gift collections for Eid, Diwali, birthdays, weddings, and all major occasions throughout the year.</p>
          </FeatureCard>
        </FeaturesGrid>
      </FeaturesSection>
    </MainLayout>
  );
};

export default HomePage;
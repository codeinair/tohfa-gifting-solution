import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import MainLayout from '../layouts/MainLayout';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
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

// Styled components
const PageHeader = styled.div`
  text-align: center;
  padding: 60px 0;
  background-color: var(--background-alt-color);
`;

const PageTitle = styled.h1`
  margin-bottom: 20px;
`;

const PageDescription = styled.p`
  max-width: 700px;
  margin: 0 auto;
  color: var(--text-light-color);
`;

const AboutContent = styled.div`
  padding: 80px 40px;
`;

const Section = styled.section`
  padding: 60px 0;
  max-width: 1200px;
  margin: 0 auto;
`;

const StorySection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const StoryImage = styled(motion.div)`
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--box-shadow);
  height: 500px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: 992px) {
    height: 350px;
  }
`;

const StoryText = styled(motion.div)`
  h2 {
    margin-bottom: 30px;
  }
  
  p {
    margin-bottom: 20px;
    line-height: 1.8;
    color: var(--text-color);
  }
  
  ul {
    margin: 20px 0;
    padding-left: 20px;
    
    li {
      margin-bottom: 10px;
      line-height: 1.6;
      color: var(--text-color);
    }
  }
`;

const MissionText = styled(motion.div)`
  h2 {
    margin-bottom: 30px;
  }
  
  p {
    margin-bottom: 20px;
    line-height: 1.8;
    color: var(--text-color);
  }
`;

const ValuesSection = styled.section`
  padding: 80px 0;
  background-color: var(--background-alt-color);
`;

const ValuesTitle = styled.h2`
  text-align: center;
  margin-bottom: 50px;
`;

const ValuesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
`;

const ValueCard = styled(motion.div)`
  background-color: white;
  border-radius: var(--border-radius);
  overflow: hidden;
  padding: 30px;
  box-shadow: var(--box-shadow);
  text-align: center;
`;

const ValueIcon = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: var(--secondary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  color: white;
  font-size: 30px;
`;

const ValueTitle = styled.h3`
  margin-bottom: 15px;
`;

const TeamSection = styled.section`
  padding: 80px 0;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
`;

const TeamMember = styled.div`
  text-align: center;
`;

const TeamMemberImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: var(--border-radius);
  margin-bottom: 15px;
`;

const StatSection = styled.section`
  padding: 60px 0;
  background-color: var(--secondary-color);
  color: white;
`;

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px 0;
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 30px 0;
  }
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 10px;
`;

const StatLabel = styled.p`
  font-size: 1.1rem;
  opacity: 0.9;
`;

const CTASection = styled(motion.section)`
  padding: 60px 40px;
  background-color: white;
  text-align: center;
  border-radius: var(--border-radius);
  margin: 60px auto;
  max-width: 900px;
  box-shadow: var(--box-shadow);
`;

const CTATitle = styled.h2`
  margin-bottom: 20px;
  color: var(--text-color);
`;

const CTADescription = styled.p`
  max-width: 600px;
  margin: 0 auto 30px;
  font-size: 18px;
  color: var(--text-light-color);
`;

const CTAButton = styled(motion.a)`
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

const AboutPage: React.FC = () => {
  return (
    <MainLayout>
      <PageHeader>
        <PageTitle>About Us</PageTitle>
        <PageDescription>
          Learn more about Tohfa Gifting Solution, our values, and the team behind our premium gift hampers and customized gifting services.
        </PageDescription>
      </PageHeader>
      
      <AboutContent>
        <Section>
          <StorySection>
            <StoryImage
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img src="/placeholder-about.jpg" alt="Our Company" />
            </StoryImage>
            
            <StoryText
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2>Our Story</h2>
              <p>Tohfa Gifting Solution was founded in 2025 by visionary entrepreneurs Shifa Shahid and Shradhha Kakade. Combining their passion for meaningful gifts and personal touches, they established a company focused on creating memorable gifting experiences.</p>
              <p>What began as a shared dream between two friends has quickly developed into a respected name in personalized and corporate gifting. Their complementary skills and shared vision have been the cornerstone of Tohfa's distinctive approach to gifting.</p>
              <p>Our journey started when our founders recognized a gap in the market for truly thoughtful, high-quality gift hampers that could convey genuine appreciation and celebration in both personal and professional settings.</p>
              <p>Today, we serve clients across the region, delivering premium gift hampers and customized gifting solutions that help individuals and businesses create lasting impressions and strengthen their relationships.</p>
            </StoryText>
          </StorySection>
        </Section>

        <Section>
          <MissionText>
            <h2>Our Mission</h2>
            <p>
              At Tohfa Gifting Solution, our mission is to transform ordinary moments into extraordinary memories through thoughtfully curated gift experiences. We believe that a perfect gift can strengthen relationships, convey genuine emotions, and create lasting impressions.
            </p>
            <p>
              We strive to provide unparalleled gifting solutions that combine premium quality products, artistic presentation, and personalized service to help our clients celebrate special occasions, express gratitude, and foster meaningful connections.
            </p>
            <p>
              Through innovation and attention to detail, we aim to be the UAE's premier destination for distinctive, meaningful gifts that leave a lasting impression on recipients.
            </p>
          </MissionText>
        </Section>
        
        <ValuesSection>
          <ValuesTitle>Our Core Values</ValuesTitle>
          
          <ValuesGrid
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <ValueCard variants={itemVariants}>
              <ValueIcon>🎁</ValueIcon>
              <ValueTitle>Quality</ValueTitle>
              <p>We source only the finest products for our gift hampers, ensuring each item meets our premium quality standards.</p>
            </ValueCard>
            
            <ValueCard variants={itemVariants}>
              <ValueIcon>✨</ValueIcon>
              <ValueTitle>Creativity</ValueTitle>
              <p>We approach each gifting opportunity with fresh perspectives and innovative ideas to create unique and memorable experiences.</p>
            </ValueCard>
            
            <ValueCard variants={itemVariants}>
              <ValueIcon>♥️</ValueIcon>
              <ValueTitle>Thoughtfulness</ValueTitle>
              <p>We believe in the power of personal touches and carefully considered details that make each gift meaningful and impactful.</p>
            </ValueCard>
            
            <ValueCard variants={itemVariants}>
              <ValueIcon>🤝</ValueIcon>
              <ValueTitle>Reliability</ValueTitle>
              <p>We deliver on our promises, ensuring timely, consistent service that our clients can depend on for every occasion.</p>
            </ValueCard>
          </ValuesGrid>
        </ValuesSection>
        
        <TeamSection>
          <h2>Our Team</h2>
          <p>
            The heart of Tohfa Gifting Solution is our passionate team of gifting experts, designers, and customer experience specialists who work tirelessly to create memorable gifting experiences.
          </p>
          <TeamGrid>
            <TeamMember>
              <TeamMemberImage src="/team/founder.jpg" alt="Founder" />
              <h4>Shifa Shahid</h4>
              <p>Co-Founder & Creative Director</p>
            </TeamMember>
            <TeamMember>
              <TeamMemberImage src="/team/founder2.jpg" alt="Co-Founder" />
              <h4>Shradhha Kakade</h4>
              <p>Co-Founder & Business Development</p>
            </TeamMember>
            <TeamMember>
              <TeamMemberImage src="/team/design-specialist.jpg" alt="Design Specialist" />
              <h4>Layla Hashmi</h4>
              <p>Design Specialist</p>
            </TeamMember>
            <TeamMember>
              <TeamMemberImage src="/team/customer-experience.jpg" alt="Customer Experience" />
              <h4>Omar Al Zaabi</h4>
              <p>Customer Experience Manager</p>
            </TeamMember>
          </TeamGrid>
        </TeamSection>
        
        <StatSection>
          <StatGrid>
            <StatItem>
              <StatNumber>1st</StatNumber>
              <StatLabel>Year in Business</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>25+</StatNumber>
              <StatLabel>Gift Hamper Designs</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>200+</StatNumber>
              <StatLabel>Happy Clients</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>8+</StatNumber>
              <StatLabel>Team Members</StatLabel>
            </StatItem>
          </StatGrid>
        </StatSection>
        
        <CTASection
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <CTATitle>Let Us Create Your Perfect Gift</CTATitle>
          <CTADescription>
            Whether you need corporate gift hampers, personal celebration gifts, or custom gifting solutions,
            our team is ready to help you create memorable gifting experiences.
          </CTADescription>
          <CTAButton
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </CTAButton>
        </CTASection>
      </AboutContent>
    </MainLayout>
  );
};

export default AboutPage;
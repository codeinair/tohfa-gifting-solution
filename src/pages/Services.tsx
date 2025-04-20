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

const ServicesContent = styled.div`
  padding: 80px 40px;
`;

const Section = styled.section`
  padding: 60px 0;
  max-width: 1200px;
  margin: 0 auto;
`;

const ServiceGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 40px;
  margin-top: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled(motion.div)`
  background-color: white;
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--box-shadow);
  transition: transform var(--transition-normal);
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const ServiceImage = styled.div`
  height: 220px;
  background-color: var(--background-alt-color);
  position: relative;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform var(--transition-normal);
  }
  
  &:hover img {
    transform: scale(1.05);
  }
`;

const ServiceContent = styled.div`
  padding: 30px;
`;

const ServiceTitle = styled.h3`
  margin-bottom: 15px;
  font-size: 22px;
`;

const PricingSection = styled(motion.div)`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Price = styled.div`
  span {
    font-size: 24px;
    font-weight: 700;
    color: var(--secondary-color);
  }
`;

const CTAButton = styled(motion.a)`
  padding: 10px 20px;
  background-color: var(--secondary-color);
  color: white;
  border: none;
  border-radius: var(--border-radius);
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  transition: background-color var(--transition-normal);
  
  &:hover {
    background-color: var(--accent-color);
  }
`;

const FeaturesSection = styled.section`
  padding: 80px 0;
  background-color: var(--background-alt-color);
`;

const FeatureList = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const FeatureItem = styled(motion.div)`
  display: flex;
  gap: 15px;
`;

const FeatureIcon = styled.div`
  width: 50px;
  height: 50px;
  min-width: 50px;
  background-color: var(--secondary-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const FeatureText = styled.div`
  h4 {
    margin-bottom: 10px;
  }
  
  p {
    color: var(--text-light-color);
  }
`;

const TestimonialsSection = styled.section`
  padding: 80px 0;
  text-align: center;
`;

const TestimonialCard = styled(motion.div)`
  max-width: 800px;
  margin: 40px auto;
  background-color: white;
  border-radius: var(--border-radius);
  padding: 30px;
  box-shadow: var(--box-shadow);
`;

const TestimonialText = styled.blockquote`
  font-size: 20px;
  font-style: italic;
  margin-bottom: 20px;
  line-height: 1.7;
  color: var(--text-color);
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

const AuthorAvatar = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AuthorDetails = styled.div`
  text-align: left;
  
  h4 {
    margin-bottom: 5px;
  }
  
  p {
    color: var(--text-light-color);
  }
`;

const CTASection = styled(motion.section)`
  padding: 60px 40px;
  background-color: var(--secondary-color);
  color: white;
  text-align: center;
  border-radius: var(--border-radius);
  margin: 0 auto 80px;
  max-width: 1200px;
`;

const CTATitle = styled.h2`
  margin-bottom: 20px;
  color: white;
`;

const CTADescription = styled.p`
  max-width: 700px;
  margin: 0 auto 30px;
  font-size: 18px;
`;

const CTAButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const CTAPrimaryButton = styled(CTAButton)`
  background-color: white;
  color: var(--secondary-color);
  
  &:hover {
    background-color: var(--accent-color);
    color: white;
  }
`;

const CTASecondaryButton = styled(CTAButton)`
  background-color: transparent;
  border: 2px solid white;
  
  &:hover {
    background-color: white;
    color: var(--secondary-color);
  }
`;

const ServicesPage: React.FC = () => {
  return (
    <MainLayout>
      <PageHeader>
        <PageTitle>Our Gifting Services</PageTitle>
        <PageDescription>
          We offer a comprehensive range of premium gifting services designed to create memorable moments.
          From personalized gift hampers to corporate gifting solutions and special occasion packages.
        </PageDescription>
      </PageHeader>
      
      <ServicesContent>
        <Section>
          <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Premium Gifting Services</h2>
          
          <ServiceGrid
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <ServiceCard variants={itemVariants}>
              <ServiceImage>
                <img src="/placeholder-service-1.jpg" alt="Corporate Gifting" />
              </ServiceImage>
              <ServiceContent>
                <ServiceTitle>Corporate Gifting Solutions</ServiceTitle>
                <p>Strategic gifting services for businesses of all sizes. We create branded gift hampers for employees, clients, and partners that reflect your company's values and strengthen relationships.</p>
                <PricingSection>
                  <Price>From <span>$75</span></Price>
                  <CTAButton href="/contact">Get Quote</CTAButton>
                </PricingSection>
              </ServiceContent>
            </ServiceCard>
            
            <ServiceCard variants={itemVariants}>
              <ServiceImage>
                <img src="/placeholder-service-2.jpg" alt="Customized Gift Hampers" />
              </ServiceImage>
              <ServiceContent>
                <ServiceTitle>Customized Gift Hampers</ServiceTitle>
                <p>Tailor-made gift hampers created to your specifications. Choose from our premium products or suggest your own items for a truly personalized gifting experience.</p>
                <PricingSection>
                  <Price>From <span>$50</span></Price>
                  <CTAButton href="/contact">Get Quote</CTAButton>
                </PricingSection>
              </ServiceContent>
            </ServiceCard>
            
            <ServiceCard variants={itemVariants}>
              <ServiceImage>
                <img src="/placeholder-service-3.jpg" alt="Special Occasion Gifts" />
              </ServiceImage>
              <ServiceContent>
                <ServiceTitle>Special Occasion Gifts</ServiceTitle>
                <p>Celebrate life's milestones with our specially curated gift collections for birthdays, anniversaries, weddings, housewarmings, and other special moments.</p>
                <PricingSection>
                  <Price>From <span>$65</span></Price>
                  <CTAButton href="/contact">Get Quote</CTAButton>
                </PricingSection>
              </ServiceContent>
            </ServiceCard>
            
            <ServiceCard variants={itemVariants}>
              <ServiceImage>
                <img src="/placeholder-service-4.jpg" alt="Festival & Holiday Hampers" />
              </ServiceImage>
              <ServiceContent>
                <ServiceTitle>Festival & Holiday Hampers</ServiceTitle>
                <p>Elegant and thoughtful gifting solutions for every festival and holiday. Our seasonal collections capture the spirit of celebrations with carefully chosen premium products.</p>
                <PricingSection>
                  <Price>From <span>$85</span></Price>
                  <CTAButton href="/contact">Get Quote</CTAButton>
                </PricingSection>
              </ServiceContent>
            </ServiceCard>
            
            <ServiceCard variants={itemVariants}>
              <ServiceImage>
                <img src="/placeholder-service-5.jpg" alt="Bulk Gifting" />
              </ServiceImage>
              <ServiceContent>
                <ServiceTitle>Bulk Gifting Programs</ServiceTitle>
                <p>Efficient solutions for large-scale gifting needs with consistent quality and dedicated project management. Perfect for corporate events, conferences, and company celebrations.</p>
                <PricingSection>
                  <Price>From <span>$40</span>/unit</Price>
                  <CTAButton href="/contact">Get Quote</CTAButton>
                </PricingSection>
              </ServiceContent>
            </ServiceCard>
            
            <ServiceCard variants={itemVariants}>
              <ServiceImage>
                <img src="/placeholder-service-6.jpg" alt="Gift Consulting" />
              </ServiceImage>
              <ServiceContent>
                <ServiceTitle>Gift Consulting Services</ServiceTitle>
                <p>Expert advice on strategic gifting for your business or personal needs. Our consultants help you select the perfect gifts that align with your budget, recipient preferences, and goals.</p>
                <PricingSection>
                  <Price>From <span>$100</span></Price>
                  <CTAButton href="/contact">Get Quote</CTAButton>
                </PricingSection>
              </ServiceContent>
            </ServiceCard>
          </ServiceGrid>
        </Section>
        
        <FeaturesSection>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Why Choose Tohfa Gifting Solutions</h2>
            <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto', color: 'var(--text-light-color)' }}>
              Our dedicated team is passionate about creating meaningful gifting experiences that leave lasting impressions.
              Here's what makes our gifting services exceptional:
            </p>
            
            <FeatureList
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <FeatureItem variants={itemVariants}>
                <FeatureIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </FeatureIcon>
                <FeatureText>
                  <h4>Quick Delivery</h4>
                  <p>We ensure timely delivery of your gifts, with express options available for those last-minute gifting needs.</p>
                </FeatureText>
              </FeatureItem>
              
              <FeatureItem variants={itemVariants}>
                <FeatureIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </FeatureIcon>
                <FeatureText>
                  <h4>Premium Quality Products</h4>
                  <p>We source only the finest products for our hampers, ensuring each gift reflects sophistication and thoughtfulness.</p>
                </FeatureText>
              </FeatureItem>
              
              <FeatureItem variants={itemVariants}>
                <FeatureIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                    <line x1="7" y1="7" x2="7.01" y2="7"></line>
                  </svg>
                </FeatureIcon>
                <FeatureText>
                  <h4>Personalization Options</h4>
                  <p>Add a personal touch with custom messages, branding options, and tailored product selections to create truly unique gifts.</p>
                </FeatureText>
              </FeatureItem>
              
              <FeatureItem variants={itemVariants}>
                <FeatureIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                    <line x1="4" y1="22" x2="4" y2="15"></line>
                  </svg>
                </FeatureIcon>
                <FeatureText>
                  <h4>Elegant Presentation</h4>
                  <p>Each gift is beautifully packaged with attention to detail, creating a memorable unboxing experience for the recipient.</p>
                </FeatureText>
              </FeatureItem>
              
              <FeatureItem variants={itemVariants}>
                <FeatureIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                </FeatureIcon>
                <FeatureText>
                  <h4>Expert Consultation</h4>
                  <p>Our gift specialists provide personalized advice to help you select the perfect gifts for any occasion or recipient.</p>
                </FeatureText>
              </FeatureItem>
              
              <FeatureItem variants={itemVariants}>
                <FeatureIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 9v-4a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  </svg>
                </FeatureIcon>
                <FeatureText>
                  <h4>Flexible Budgeting</h4>
                  <p>We offer gifting solutions across various price points, ensuring you can create meaningful experiences regardless of your budget.</p>
                </FeatureText>
              </FeatureItem>
            </FeatureList>
          </div>
        </FeaturesSection>
        
        <TestimonialsSection>
          <h2>What Our Clients Say</h2>
          
          <TestimonialCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <TestimonialText>
              "Tohfa Gifting Solution exceeded our expectations for our annual client appreciation event. Their corporate hampers were beautifully presented, thoughtfully curated, and delivered on time. We received numerous compliments from recipients about the quality and presentation of the gifts."
            </TestimonialText>
            <TestimonialAuthor>
              <AuthorAvatar>
                <img src="/placeholder-avatar.jpg" alt="Client" />
              </AuthorAvatar>
              <AuthorDetails>
                <h4>Priya Sharma</h4>
                <p>HR Manager, GlobalTech Solutions</p>
              </AuthorDetails>
            </TestimonialAuthor>
          </TestimonialCard>
          
          <TestimonialCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <TestimonialText>
              "For our wedding favors, we wanted something elegant and memorable. Tohfa's custom gift hampers were perfect - from the personalized packaging to the selection of premium products. Their attention to detail made our special day even more meaningful."
            </TestimonialText>
            <TestimonialAuthor>
              <AuthorAvatar>
                <img src="/placeholder-avatar-2.jpg" alt="Client" />
              </AuthorAvatar>
              <AuthorDetails>
                <h4>Raj & Anita Patel</h4>
                <p>Wedding Clients</p>
              </AuthorDetails>
            </TestimonialAuthor>
          </TestimonialCard>
        </TestimonialsSection>
        
        <CTASection
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <CTATitle>Ready to Create Memorable Gifting Experiences?</CTATitle>
          <CTADescription>
            Let us help you select the perfect gifts for your next special occasion or corporate event. Our gifting specialists are ready to assist you.
          </CTADescription>
          <CTAButtonGroup>
            <CTAPrimaryButton href="/contact">Get a Custom Quote</CTAPrimaryButton>
            <CTASecondaryButton href="/shop">Browse Gift Collections</CTASecondaryButton>
          </CTAButtonGroup>
        </CTASection>
      </ServicesContent>
    </MainLayout>
  );
};

export default ServicesPage;
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import MainLayout from '../layouts/MainLayout';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
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

const ContactContent = styled.div`
  padding: 80px 40px;
  max-width: 1200px;
  margin: 0 auto;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled(motion.div)`
  h2 {
    margin-bottom: 30px;
  }
`;

const InfoBlock = styled(motion.div)`
  margin-bottom: 30px;
  
  h3 {
    font-size: 20px;
    margin-bottom: 10px;
  }
  
  p {
    color: var(--text-light-color);
    line-height: 1.8;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 30px;
`;

const SocialLink = styled(motion.a)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--secondary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: all var(--transition-normal);
  
  &:hover {
    background-color: var(--accent-color);
    transform: translateY(-3px);
  }
`;

const ContactForm = styled(motion.form)`
  background-color: white;
  padding: 40px;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
`;

const FormGroup = styled(motion.div)`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  transition: border-color var(--transition-normal);
  
  &:focus {
    outline: none;
    border-color: var(--secondary-color);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  transition: border-color var(--transition-normal);
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: var(--secondary-color);
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 12px 24px;
  background-color: var(--secondary-color);
  color: white;
  border: none;
  border-radius: var(--border-radius);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-normal);
  
  &:hover {
    background-color: var(--accent-color);
    transform: translateY(-2px);
  }
`;

const Map = styled.div`
  margin-top: 80px;
  height: 400px;
  border-radius: var(--border-radius);
  overflow: hidden;
  
  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally handle the form submission, 
    // such as sending the data to a server
    console.log('Form submitted:', formData);
    alert('Thanks for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };
  
  return (
    <MainLayout>
      <PageHeader>
        <PageTitle>Contact Us</PageTitle>
        <PageDescription>
          Have questions about custom gift hampers or corporate gifting solutions? We're here to help. Reach out to our team and we'll get back to you as soon as possible.
        </PageDescription>
      </PageHeader>
      
      <ContactContent>
        <ContactGrid>
          <ContactInfo
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            <h2>Get in Touch</h2>
            
            <InfoBlock variants={itemVariants}>
              <h3>Our Location</h3>
              <p>123 Gifting Avenue, Suite 4<br />Dubai, United Arab Emirates</p>
            </InfoBlock>
            
            <InfoBlock variants={itemVariants}>
              <h3>Contact Information</h3>
              <p>Email: info@tohfagifting.com<br />Phone: +971 50 123 4567</p>
            </InfoBlock>
            
            <InfoBlock variants={itemVariants}>
              <h3>Working Hours</h3>
              <p>Sunday - Thursday: 9am - 6pm<br />Friday: 10am - 2pm<br />Saturday: Closed</p>
            </InfoBlock>
            
            <SocialLinks>
              <SocialLink href="#" target="_blank" variants={itemVariants}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </SocialLink>
              <SocialLink href="#" target="_blank" variants={itemVariants}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </SocialLink>
              <SocialLink href="#" target="_blank" variants={itemVariants}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </SocialLink>
              <SocialLink href="#" target="_blank" variants={itemVariants}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </SocialLink>
            </SocialLinks>
          </ContactInfo>
          
          <ContactForm 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            onSubmit={handleSubmit}
          >
            <FormGroup variants={itemVariants}>
              <Label htmlFor="name">Full Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup variants={itemVariants}>
              <Label htmlFor="email">Email Address</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup variants={itemVariants}>
              <Label htmlFor="subject">Subject</Label>
              <Input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup variants={itemVariants}>
              <Label htmlFor="message">Your Message</Label>
              <TextArea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <SubmitButton
              type="submit"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </SubmitButton>
          </ContactForm>
        </ContactGrid>
        
        <Map>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.1394988590206!2d55.3002375!3d25.2566595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE1JzI0LjAiTiA1NcKwMTgnMDEuMCJF!5e0!3m2!1sen!2sae!4v1618597460040!5m2!1sen!2sae" 
            allowFullScreen 
            loading="lazy"
            title="Tohfa Gifting Solution Location">
          </iframe>
        </Map>
      </ContactContent>
    </MainLayout>
  );
};

export default ContactPage;
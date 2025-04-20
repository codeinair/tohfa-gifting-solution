import React, { ReactNode, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface MainLayoutProps {
  children: ReactNode;
}

// Animation variants for page transitions
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  in: {
    opacity: 1,
    y: 0
  },
  exit: {
    opacity: 0,
    y: -20
  }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5
};

// Styled components
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 40px;
  background-color: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 100;
  
  @media (max-width: 768px) {
    padding: 10px 20px;
  }
`;

const Logo = styled(Link)`
  text-decoration: none;
  color: #000;
  display: flex;
  align-items: center;
  height: 90px;
  padding: 5px 0;
  
  @media (max-width: 768px) {
    height: 70px;
  }
`;

const LogoImage = styled.img`
  height: 100%;
  width: auto;
  max-height: 90px;
  object-fit: contain;
  
  @media (max-width: 768px) {
    max-height: 70px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 24px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  font-size: 16px;
  text-decoration: none;
  color: #333;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: #333;
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: 100%;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }

  span {
    display: block;
    width: 100%;
    height: 2px;
    background-color: var(--secondary-color);
    border-radius: 1px;
    transition: all 0.3s ease;
  }
`;

const MobileMenuLogo = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  img {
    height: 60px;
    width: auto;
    object-fit: contain;
  }
`;

const MobileNav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  width: 80%;
  max-width: 300px;
  height: 100vh;
  background-color: #ffffff;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  padding: 60px 20px 20px;
  z-index: 200;

  a {
    font-size: 18px;
    text-decoration: none;
    color: #333;
    margin-bottom: 20px;
    padding: 10px 0;
    border-bottom: 1px solid var(--border-color);
  }
`;

const MobileNavCloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: var(--secondary-color);
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 199;
`;

const Main = styled(motion.main)`
  min-height: calc(100vh - 400px);
`;

// Updated Footer Styling to match reference template
const Footer = styled.footer`
  background-color: var(--background-color, #ffffff);
  padding: 0;
  color: var(--text-color, #333333);
`;

const FooterTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  background-color: var(--background-alt-color, #f7f7f7);
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const FooterTopContent = styled.div`
  max-width: 700px;
`;

const FooterHeading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const FooterDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 40px;
  color: var(--text-light-color, #666666);
`;

const FooterCTA = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PrimaryButton = styled(Link)`
  padding: 14px 32px;
  background-color: var(--secondary-color, #4f46e5);
  color: white !important;
  font-weight: 600;
  text-decoration: none;
  border-radius: var(--border-radius, 4px);
  transition: all var(--transition-normal, 0.3s ease);
  display: inline-block;
  
  &:hover {
    background-color: var(--accent-color, #6366f1);
    transform: translateY(-2px);
    box-shadow: var(--box-shadow);
    color: white !important;
  }
`;

const SecondaryButton = styled(Link)`
  padding: 14px 32px;
  background-color: transparent;
  border: 1px solid var(--text-color, #333333);
  color: var(--text-color, #333333) !important;
  font-weight: 600;
  text-decoration: none;
  border-radius: var(--border-radius, 4px);
  transition: all var(--transition-normal, 0.3s ease);
  display: inline-block;
  
  &:hover {
    border-color: var(--secondary-color, #4f46e5);
    color: var(--secondary-color, #4f46e5) !important;
    transform: translateY(-2px);
  }
`;

const FooterMiddle = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 40px;
  border-bottom: 1px solid var(--border-color, #e5e7eb);
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    padding: 60px 20px;
  }
`;

const FooterWidget = styled.div``;

const WidgetTitle = styled.h5`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 25px;
`;

const WidgetContent = styled.div`
  font-size: 15px;
  color: var(--text-light-color, #666666);
  line-height: 1.6;
  
  p {
    margin-bottom: 15px;
  }
`;

const FooterNavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterNavItem = styled.li`
  margin-bottom: 12px;
  
  a {
    color: var(--text-light-color, #666666);
    text-decoration: none;
    transition: color var(--transition-normal, 0.3s ease);
    display: inline-block;
    position: relative;
    
    &:after {
      content: '';
      position: absolute;
      width: 0;
      height: 1px;
      bottom: -3px;
      left: 0;
      background-color: var(--secondary-color, #4f46e5);
      transition: width var(--transition-normal, 0.3s ease);
    }
    
    &:hover {
      color: var(--secondary-color, #4f46e5);
      
      &:after {
        width: 100%;
      }
    }
  }
`;

const BlogPostMini = styled.div`
  display: flex;
  margin-bottom: 25px;
`;

const BlogPostImage = styled.div`
  width: 70px;
  height: 70px;
  border-radius: var(--border-radius, 4px);
  overflow: hidden;
  margin-right: 15px;
  flex-shrink: 0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const BlogPostInfo = styled.div``;

const BlogPostTitle = styled(Link)`
  display: block;
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 5px;
  text-decoration: none;
  color: var(--text-color, #333333);
  transition: color var(--transition-normal, 0.3s ease);
  
  &:hover {
    color: var(--secondary-color, #4f46e5);
  }
`;

const BlogPostDate = styled.div`
  font-size: 13px;
  color: var(--text-light-color, #666666);
`;

const InstagramGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

const InstagramItem = styled.a`
  display: block;
  position: relative;
  padding-bottom: 100%;
  overflow: hidden;
  border-radius: var(--border-radius, 4px);
  
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform var(--transition-normal, 0.3s ease);
  }
  
  &:hover img {
    transform: scale(1.1);
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 40px;
  font-size: 15px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
    text-align: center;
    padding: 30px 20px;
  }
`;

const Copyright = styled.div`
  color: var(--text-light-color, #666666);
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
`;

const SocialLink = styled.a`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--background-alt-color, #f7f7f7);
  color: var(--text-color, #333333);
  transition: all var(--transition-normal, 0.3s ease);
  
  &:hover {
    background-color: var(--secondary-color, #4f46e5);
    color: white;
  }
`;

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <>
      <Header>
        <Logo to="/">
          <LogoImage src={require('../assets/temporary-for-building-website/tohfa logo 1.3.png')} alt="Tohfa Gifting Solution" />
        </Logo>
        <Nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </Nav>
        <Hamburger onClick={toggleMobileNav}>
          <span></span>
          <span></span>
          <span></span>
        </Hamburger>
      </Header>
      <AnimatePresence>
        {isMobileNavOpen && (
          <>
            <Overlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={toggleMobileNav}
            />
            <MobileNav
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <MobileNavCloseButton onClick={toggleMobileNav}>&times;</MobileNavCloseButton>
              <MobileMenuLogo>
                <img src={require('../assets/temporary-for-building-website/tohfa logo 1.3.png')} alt="Tohfa Gifting Solution" />
              </MobileMenuLogo>
              <NavLink to="/" onClick={toggleMobileNav}>Home</NavLink>
              <NavLink to="/shop" onClick={toggleMobileNav}>Shop</NavLink>
              <NavLink to="/services" onClick={toggleMobileNav}>Services</NavLink>
              <NavLink to="/blog" onClick={toggleMobileNav}>Blog</NavLink>
              <NavLink to="/about" onClick={toggleMobileNav}>About</NavLink>
              <NavLink to="/contact" onClick={toggleMobileNav}>Contact</NavLink>
            </MobileNav>
          </>
        )}
      </AnimatePresence>
      <Main
        initial="initial"
        animate="in"
        exit="exit"
        variants={pageVariants}
        transition={pageTransition}
      >
        {children}
      </Main>
      <Footer>
        <FooterTop>
          <FooterTopContent>
            <FooterHeading>Ready to Get Started?</FooterHeading>
            <FooterDescription>
              Contact us today to learn more about our services and how we can help bring your vision to life.
            </FooterDescription>
            <FooterCTA>
              <PrimaryButton to="/contact">Get in Touch</PrimaryButton>
              <SecondaryButton to="/services">Explore Services</SecondaryButton>
            </FooterCTA>
          </FooterTopContent>
        </FooterTop>
        
        <FooterMiddle>
          <FooterWidget>
            <WidgetTitle>About Us</WidgetTitle>
            <WidgetContent>
              <p>
                Tohfa Gifting Solution provides premium gifting services, custom hampers, and corporate gift solutions tailored to your unique needs and occasions.
              </p>
              <p>
                Our mission is to create beautiful, thoughtful gifts that leave lasting impressions and strengthen your personal and professional relationships.
              </p>
            </WidgetContent>
          </FooterWidget>
          
          <FooterWidget>
            <WidgetTitle>Quick Links</WidgetTitle>
            <FooterNavList>
              <FooterNavItem><Link to="/">Home</Link></FooterNavItem>
              <FooterNavItem><Link to="/shop">Shop</Link></FooterNavItem>
              <FooterNavItem><Link to="/services">Services</Link></FooterNavItem>
              <FooterNavItem><Link to="/blog">Blog</Link></FooterNavItem>
              <FooterNavItem><Link to="/about">About</Link></FooterNavItem>
              <FooterNavItem><Link to="/contact">Contact</Link></FooterNavItem>
              <FooterNavItem><Link to="/faq">FAQ</Link></FooterNavItem>
            </FooterNavList>
          </FooterWidget>
          
          <FooterWidget>
            <WidgetTitle>Recent Posts</WidgetTitle>
            <BlogPostMini>
              <BlogPostImage>
                <img src="/placeholder-blog-1.jpg" alt="Blog post thumbnail" />
              </BlogPostImage>
              <BlogPostInfo>
                <BlogPostTitle to="/blog/1">The Power of Personalized Gifting</BlogPostTitle>
                <BlogPostDate>April 15, 2025</BlogPostDate>
              </BlogPostInfo>
            </BlogPostMini>
            <BlogPostMini>
              <BlogPostImage>
                <img src="/placeholder-blog-2.jpg" alt="Blog post thumbnail" />
              </BlogPostImage>
              <BlogPostInfo>
                <BlogPostTitle to="/blog/2">Corporate Gifting Strategies</BlogPostTitle>
                <BlogPostDate>April 10, 2025</BlogPostDate>
              </BlogPostInfo>
            </BlogPostMini>
            <BlogPostMini>
              <BlogPostImage>
                <img src="/placeholder-blog-3.jpg" alt="Blog post thumbnail" />
              </BlogPostImage>
              <BlogPostInfo>
                <BlogPostTitle to="/blog/3">How to Choose the Perfect Gift</BlogPostTitle>
                <BlogPostDate>April 05, 2025</BlogPostDate>
              </BlogPostInfo>
            </BlogPostMini>
          </FooterWidget>
          
          <FooterWidget>
            <WidgetTitle>Instagram</WidgetTitle>
            <InstagramGrid>
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <InstagramItem key={num} href="#" aria-label="View Instagram post">
                  <img src={`/placeholder-insta-${num}.jpg`} alt="Instagram post" />
                </InstagramItem>
              ))}
            </InstagramGrid>
          </FooterWidget>
        </FooterMiddle>
        
        <FooterBottom>
          <Copyright>
            &copy; {new Date().getFullYear()} Tohfa Gifting Solution. All rights reserved.
          </Copyright>
          <SocialLinks>
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
            <SocialLink href="#" aria-label="YouTube">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
            </SocialLink>
          </SocialLinks>
        </FooterBottom>
      </Footer>
    </>
  );
};

export default MainLayout;
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
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
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
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

const FAQContent = styled.div`
  padding: 80px 40px;
  max-width: 900px;
  margin: 0 auto;
`;

const FAQSection = styled.div`
  margin-bottom: 60px;
`;

const SectionTitle = styled.h2`
  margin-bottom: 30px;
`;

const AccordionContainer = styled(motion.div)`
  border-radius: var(--border-radius);
  overflow: hidden;
`;

const AccordionItem = styled(motion.div)`
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  margin-bottom: 15px;
  overflow: hidden;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
`;

const AccordionHeader = styled.div<{ isOpen: boolean }>`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background-color: ${props => props.isOpen ? 'var(--background-alt-color)' : 'white'};
  transition: background-color var(--transition-normal);
  
  &:hover {
    background-color: var(--background-alt-color);
  }
  
  h3 {
    margin: 0;
    font-size: 18px;
  }
`;

const AccordionIcon = styled(motion.div)`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    stroke: var(--secondary-color);
  }
`;

const AccordionContent = styled(motion.div)`
  padding: 0 20px;
  overflow: hidden;
  
  p {
    line-height: 1.8;
    color: var(--text-light-color);
    padding-bottom: 20px;
  }
`;

const SearchSection = styled.div`
  margin-bottom: 40px;
`;

const SearchBar = styled.div`
  position: relative;
  max-width: 500px;
  margin: 0 auto;
  
  input {
    width: 100%;
    padding: 15px 50px 15px 20px;
    border: 1px solid var(--border-color);
    border-radius: 30px;
    font-size: 16px;
    box-shadow: var(--box-shadow);
    
    &:focus {
      outline: none;
      border-color: var(--secondary-color);
    }
  }
  
  svg {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--text-light-color);
  }
`;

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

// Updated FAQ data for gift hampers and corporate gifting
const faqData: FAQItem[] = [
  {
    id: 1,
    question: 'What kinds of items are typically included in your gift hampers?',
    answer: 'Our gift hampers feature a thoughtfully curated selection of premium products that may include gourmet foods, chocolates, nuts, dried fruits, specialty beverages, luxury skincare items, scented candles, and artisanal crafts. The specific contents vary based on the theme and purpose of each hamper, and we can customize the selection to meet your preferences and requirements.',
    category: 'products'
  },
  {
    id: 2,
    question: 'Can I customize the contents of my gift hamper?',
    answer: 'Absolutely! Customization is one of our specialties. You can select specific items, request a particular theme, include or exclude certain products based on preferences or dietary restrictions, and even add personalized items like branded merchandise for corporate gifts. Contact us with your requirements, and we\'ll work with you to create the perfect customized gift hamper.',
    category: 'products'
  },
  {
    id: 3,
    question: 'What is your pricing structure for gift hampers?',
    answer: 'Our gift hampers range from AED 150 for standard options to AED 1,000+ for premium luxury hampers. Corporate bulk orders receive special pricing based on quantity. We strive to accommodate various budgets while maintaining our quality standards. For a detailed quote based on your specific requirements, please contact our team directly.',
    category: 'payment'
  },
  {
    id: 4,
    question: 'How far in advance should I place my order?',
    answer: 'For standard gift hampers, we recommend ordering at least 3-5 business days in advance. For customized hampers or bulk corporate orders, please allow 7-10 business days. During peak seasons like Ramadan, Eid, Diwali or year-end holidays, we suggest placing orders 2-3 weeks in advance to ensure availability and timely delivery.',
    category: 'orders'
  },
  {
    id: 5,
    question: 'Do you offer corporate gifting solutions for businesses?',
    answer: 'Yes, corporate gifting is one of our core services. We offer volume discounts, custom branding opportunities, and personalized messaging for business gifts. Our corporate services include client appreciation gifts, employee recognition rewards, event giveaways, and holiday gifting programs. We can manage your entire corporate gifting strategy, from concept to delivery.',
    category: 'services'
  },
  {
    id: 6,
    question: 'Do you deliver gift hampers across the UAE?',
    answer: 'Yes, we deliver throughout the UAE, including Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain. Delivery times and fees vary by location. For certain high-volume orders or special arrangements, we can also discuss international shipping options to GCC countries.',
    category: 'delivery'
  },
  {
    id: 7,
    question: 'What payment methods do you accept?',
    answer: 'We accept various payment methods including credit/debit cards (Visa, MasterCard, American Express), bank transfers, and cash on delivery (for select areas). For corporate clients, we also offer invoice-based payment terms with approved credit applications. All online payments are processed through secure, encrypted gateways.',
    category: 'payment'
  },
  {
    id: 8,
    question: 'Can I include a personalized message with my gift?',
    answer: 'Yes, all our gift hampers can include a complimentary personalized message card. For corporate orders, we also offer custom printed cards with your company logo. Simply provide your message during the ordering process, and we\'ll ensure it\'s elegantly presented with your gift.',
    category: 'products'
  },
  {
    id: 9,
    question: 'Do you offer gift hampers for specific occasions or holidays?',
    answer: 'Yes, we create specialized gift hampers for various occasions including Eid, Diwali, Christmas, New Year, birthdays, weddings, baby showers, housewarmings, and more. We also develop seasonal collections for major holidays and can create custom-themed hampers for corporate events or personal celebrations.',
    category: 'products'
  },
  {
    id: 10,
    question: 'What is your return or exchange policy?',
    answer: 'As gift hampers contain perishable items and are often customized, we generally don\'t accept returns. However, we stand behind our quality and service. If you receive damaged items or if there\'s an issue with your order, please contact us within 24 hours of delivery, and we\'ll work with you to find an appropriate solution.',
    category: 'payment'
  }
];

const FAQPage: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  const toggleAccordion = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(itemId => itemId !== id)
        : [...prev, id]
    );
  };
  
  const filteredFAQs = faqData.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Group FAQs by category
  const productFAQs = filteredFAQs.filter(faq => faq.category === 'products');
  const paymentFAQs = filteredFAQs.filter(faq => faq.category === 'payment');
  const orderFAQs = filteredFAQs.filter(faq => faq.category === 'orders' || faq.category === 'delivery');
  const serviceFAQs = filteredFAQs.filter(faq => faq.category === 'services');
  
  return (
    <MainLayout>
      <PageHeader>
        <PageTitle>Frequently Asked Questions</PageTitle>
        <PageDescription>
          Find answers to common questions about our gift hampers, ordering process, and corporate gifting services.
          If you need additional information, please don't hesitate to contact us.
        </PageDescription>
      </PageHeader>
      
      <FAQContent>
        <SearchSection>
          <SearchBar>
            <input 
              type="text" 
              placeholder="Search for questions..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </SearchBar>
        </SearchSection>
        
        {productFAQs.length > 0 && (
          <FAQSection>
            <SectionTitle>Our Gift Hampers</SectionTitle>
            <AccordionContainer
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              {productFAQs.map(faq => (
                <AccordionItem key={faq.id} variants={itemVariants}>
                  <AccordionHeader 
                    isOpen={openItems.includes(faq.id)}
                    onClick={() => toggleAccordion(faq.id)}
                  >
                    <h3>{faq.question}</h3>
                    <AccordionIcon
                      initial={false}
                      animate={{ rotate: openItems.includes(faq.id) ? 45 : 0 }}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <line x1="6" y1="0" x2="6" y2="12" strokeWidth="2" />
                        <line x1="0" y1="6" x2="12" y2="6" strokeWidth="2" />
                      </svg>
                    </AccordionIcon>
                  </AccordionHeader>
                  
                  <AnimatePresence>
                    {openItems.includes(faq.id) && (
                      <AccordionContent
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p>{faq.answer}</p>
                      </AccordionContent>
                    )}
                  </AnimatePresence>
                </AccordionItem>
              ))}
            </AccordionContainer>
          </FAQSection>
        )}
        
        {paymentFAQs.length > 0 && (
          <FAQSection>
            <SectionTitle>Payment & Pricing</SectionTitle>
            <AccordionContainer
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              {paymentFAQs.map(faq => (
                <AccordionItem key={faq.id} variants={itemVariants}>
                  <AccordionHeader 
                    isOpen={openItems.includes(faq.id)}
                    onClick={() => toggleAccordion(faq.id)}
                  >
                    <h3>{faq.question}</h3>
                    <AccordionIcon
                      initial={false}
                      animate={{ rotate: openItems.includes(faq.id) ? 45 : 0 }}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <line x1="6" y1="0" x2="6" y2="12" strokeWidth="2" />
                        <line x1="0" y1="6" x2="12" y2="6" strokeWidth="2" />
                      </svg>
                    </AccordionIcon>
                  </AccordionHeader>
                  
                  <AnimatePresence>
                    {openItems.includes(faq.id) && (
                      <AccordionContent
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p>{faq.answer}</p>
                      </AccordionContent>
                    )}
                  </AnimatePresence>
                </AccordionItem>
              ))}
            </AccordionContainer>
          </FAQSection>
        )}
        
        {orderFAQs.length > 0 && (
          <FAQSection>
            <SectionTitle>Orders & Delivery</SectionTitle>
            <AccordionContainer
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              {orderFAQs.map(faq => (
                <AccordionItem key={faq.id} variants={itemVariants}>
                  <AccordionHeader 
                    isOpen={openItems.includes(faq.id)}
                    onClick={() => toggleAccordion(faq.id)}
                  >
                    <h3>{faq.question}</h3>
                    <AccordionIcon
                      initial={false}
                      animate={{ rotate: openItems.includes(faq.id) ? 45 : 0 }}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <line x1="6" y1="0" x2="6" y2="12" strokeWidth="2" />
                        <line x1="0" y1="6" x2="12" y2="6" strokeWidth="2" />
                      </svg>
                    </AccordionIcon>
                  </AccordionHeader>
                  
                  <AnimatePresence>
                    {openItems.includes(faq.id) && (
                      <AccordionContent
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p>{faq.answer}</p>
                      </AccordionContent>
                    )}
                  </AnimatePresence>
                </AccordionItem>
              ))}
            </AccordionContainer>
          </FAQSection>
        )}
        
        {serviceFAQs.length > 0 && (
          <FAQSection>
            <SectionTitle>Corporate Services</SectionTitle>
            <AccordionContainer
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              {serviceFAQs.map(faq => (
                <AccordionItem key={faq.id} variants={itemVariants}>
                  <AccordionHeader 
                    isOpen={openItems.includes(faq.id)}
                    onClick={() => toggleAccordion(faq.id)}
                  >
                    <h3>{faq.question}</h3>
                    <AccordionIcon
                      initial={false}
                      animate={{ rotate: openItems.includes(faq.id) ? 45 : 0 }}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <line x1="6" y1="0" x2="6" y2="12" strokeWidth="2" />
                        <line x1="0" y1="6" x2="12" y2="6" strokeWidth="2" />
                      </svg>
                    </AccordionIcon>
                  </AccordionHeader>
                  
                  <AnimatePresence>
                    {openItems.includes(faq.id) && (
                      <AccordionContent
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p>{faq.answer}</p>
                      </AccordionContent>
                    )}
                  </AnimatePresence>
                </AccordionItem>
              ))}
            </AccordionContainer>
          </FAQSection>
        )}
        
        {filteredFAQs.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            style={{ textAlign: 'center', padding: '40px 0' }}
          >
            <h3>No FAQs found matching your search.</h3>
            <p>Try using different keywords or browse through our categories.</p>
          </motion.div>
        )}
      </FAQContent>
    </MainLayout>
  );
};

export default FAQPage;
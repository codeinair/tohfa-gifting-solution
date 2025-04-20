import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import MainLayout from '../layouts/MainLayout';

// Styled components
const PageHeader = styled.div`
  text-align: center;
  padding: 60px 0;
  background-color: var(--background-alt-color);
`;

const BlogContent = styled.div`
  padding: 80px 40px;
  max-width: 900px;
  margin: 0 auto;
`;

const BlogTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const BlogMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 40px;
  color: var(--text-light-color);
  font-size: 0.9rem;
`;

const BlogCategory = styled.span`
  background-color: var(--secondary-color);
  color: white;
  padding: 5px 15px;
  border-radius: 30px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
`;

const BlogImage = styled.div`
  width: 100%;
  height: 400px;
  border-radius: var(--border-radius);
  overflow: hidden;
  margin-bottom: 40px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: 768px) {
    height: 300px;
  }
`;

const BlogText = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-color);
  
  p {
    margin-bottom: 24px;
  }
  
  h2 {
    font-size: 1.8rem;
    margin: 40px 0 20px;
  }
  
  h3 {
    font-size: 1.4rem;
    margin: 30px 0 15px;
  }
  
  ul, ol {
    margin: 20px 0;
    padding-left: 20px;
    
    li {
      margin-bottom: 10px;
    }
  }
  
  blockquote {
    border-left: 4px solid var(--secondary-color);
    margin: 30px 0;
    padding: 15px 30px;
    background-color: var(--background-alt-color);
    font-style: italic;
  }
`;

const SocialShare = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 40px;
  padding-top: 40px;
  border-top: 1px solid var(--border-color);
  
  span {
    font-weight: 600;
  }
`;

const SocialLink = styled.a`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--background-alt-color);
  color: var(--text-color);
  transition: all var(--transition-normal);
  
  &:hover {
    background-color: var(--secondary-color);
    color: white;
    transform: translateY(-3px);
  }
`;

const RelatedPosts = styled.div`
  margin-top: 80px;
  border-top: 1px solid var(--border-color);
  padding-top: 60px;
  
  h2 {
    margin-bottom: 40px;
    text-align: center;
  }
`;

const RelatedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const RelatedCard = styled.div`
  background-color: white;
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--box-shadow);
  transition: transform var(--transition-normal);
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const RelatedImage = styled.div`
  height: 180px;
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

const RelatedContent = styled.div`
  padding: 20px;
`;

const RelatedTitle = styled(Link)`
  display: block;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
  color: var(--text-color);
  text-decoration: none;
  transition: color var(--transition-normal);
  
  &:hover {
    color: var(--secondary-color);
  }
`;

const RelatedMeta = styled.div`
  font-size: 14px;
  color: var(--text-light-color);
`;

// Mock data for the blog post
const blogPost = {
  id: 1,
  title: 'The Power of Personalized Gifting: Why Customization Matters',
  category: 'Gift Trends',
  date: 'April 15, 2025',
  author: 'Priya Sharma',
  image: '/placeholder-blog-1.jpg',
  content: [
    "In a world of mass-produced items and quick digital exchanges, personalized gifts stand out as meaningful tokens of appreciation that create lasting impressions. Personalization transforms an ordinary gift into a cherished keepsake, showing recipients that you've invested time and thought into selecting something uniquely tailored to them.",
    "This article explores why personalized gifts make such a powerful impact and how they strengthen both personal and professional relationships in meaningful ways.",
    "## The Psychology Behind Personalized Gifts",
    "Research in consumer psychology consistently shows that personalized gifts create stronger emotional connections than generic ones. When you receive something customized specifically for you, it triggers a sense of being valued and understood at a deeper level.",
    "Gift recipients report feeling a stronger connection to the giver when they receive personalized items. This psychological phenomenon, known as the 'endowment effect,' means we value things more when they feel like they already belong to us—and personalization creates that sense of belonging instantly.",
    "Neuroscience studies have even shown that seeing our names or personal details on items activates regions in our brain associated with self-identity and positive emotions. This neurological response explains why personalized gifts often elicit such genuine delight.",
    "## Building Stronger Personal Relationships",
    "In personal relationships, customized gifts demonstrate an intimate knowledge of the recipient's preferences, interests, and personality. This level of attention communicates care and consideration that goes far beyond the monetary value of the gift itself.",
    "A personalized gift serves as a physical reminder of your relationship and the special connection you share. Every time the recipient uses or sees the gift, they're reminded of your thoughtfulness and the occasion it commemorates.",
    "For milestone celebrations like weddings, anniversaries, or significant birthdays, personalized gifts carry particular significance. They help mark these important life events with something as unique as the occasion itself.",
    "## Transforming Professional Relationships",
    "In business contexts, personalized corporate gifts have become powerful relationship-building tools that stand out in today's competitive marketplace. They demonstrate that you view clients, partners, and employees as individuals rather than just business transactions.",
    "Corporate gifting with a personal touch helps establish emotional connections that can increase client loyalty and strengthen business partnerships. Studies show that businesses that engage in thoughtful personalized gifting enjoy higher retention rates and more referrals.",
    "For employee recognition, personalized gifts show genuine appreciation for individual contributions, boosting morale and fostering a culture where team members feel truly valued for their unique skills and efforts.",
    "## The Art of Meaningful Personalization",
    "Effective personalization goes beyond simply adding a name to a standard item. The most impactful personalized gifts reflect the recipient's:",
    "- Personal interests and hobbies",
    "- Significant memories or shared experiences",
    "- Aesthetic preferences and taste",
    "- Cultural background or values",
    "- Current life stage or aspirations",
    "The key is to incorporate details that resonate with the recipient's identity while ensuring the gift remains practical or meaningful to them. This balance between personalization and functionality creates gifts that are both appreciated and utilized.",
    "## Personalized Gift Ideas for Every Relationship",
    "For family members, consider custom photo albums chronicling shared memories, engraved jewelry with meaningful dates or messages, or personalized home decor that celebrates family bonds.",
    "With friends, think about customized items related to shared interests or experiences—perhaps a custom map marking places you've traveled together or personalized items related to a mutual hobby.",
    "In romantic relationships, personalized gifts that commemorate your journey together make powerful statements. Custom artwork featuring significant locations or constellation maps showing the night sky on an important date create meaningful mementos.",
    "For business contacts, elegant personalized stationery, custom leather portfolios, or branded gift hampers featuring premium items selected with their preferences in mind show attention to detail that won't go unnoticed.",
    "## The Impact of Presentation",
    "Even with personalized gifts, presentation matters significantly. Beautiful packaging with thoughtful details elevates the entire gifting experience and builds anticipation before the gift is even opened.",
    "Consider including a handwritten note explaining the personalization or the thought process behind your gift choice. This additional touch adds context and deepens the emotional impact of your gesture.",
    "## Conclusion",
    "In our increasingly digital and impersonal world, personalized gifts serve as tangible expressions of connection and consideration. They stand out because they celebrate what makes each recipient unique and special.",
    "At Tohfa Gifting Solution, we specialize in creating customized gift experiences that help you communicate appreciation, celebrate special moments, and build lasting relationships. Whether for personal celebrations or corporate recognition, our personalized gifting options help you make meaningful impressions that endure long after the occasion has passed."
  ]
};

// Mock data for related posts
const relatedPosts = [
  {
    id: 2,
    title: 'Corporate Gifting: A Strategic Approach to Business Relationships',
    date: 'April 10, 2025',
    image: '/placeholder-blog-2.jpg',
  },
  {
    id: 3,
    title: 'How to Choose the Perfect Gift: A Comprehensive Guide',
    date: 'April 05, 2025',
    image: '/placeholder-blog-3.jpg',
  },
  {
    id: 4,
    title: 'Sustainable Gifting: Eco-Friendly Options That Impress',
    date: 'April 01, 2025',
    image: '/placeholder-blog-4.jpg',
  },
];

const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // In a real app, you would fetch the blog post data based on the ID
  // For now, we're using mock data
  
  return (
    <MainLayout>
      <PageHeader>
        <BlogCategory>{blogPost.category}</BlogCategory>
        <BlogTitle>{blogPost.title}</BlogTitle>
        <BlogMeta>
          <span>By {blogPost.author}</span>
          <span>•</span>
          <span>{blogPost.date}</span>
        </BlogMeta>
      </PageHeader>
      
      <BlogContent>
        <BlogImage>
          <img src={blogPost.image} alt={blogPost.title} />
        </BlogImage>
        
        <BlogText>
          {blogPost.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </BlogText>
        
        <SocialShare>
          <span>Share:</span>
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
          <SocialLink href="#" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </SocialLink>
          <SocialLink href="#" aria-label="Email">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </SocialLink>
        </SocialShare>
        
        <RelatedPosts>
          <h2>Related Articles</h2>
          <RelatedGrid>
            {relatedPosts.map(post => (
              <RelatedCard key={post.id}>
                <RelatedImage>
                  <img src={post.image} alt={post.title} />
                </RelatedImage>
                <RelatedContent>
                  <RelatedTitle to={`/blog/${post.id}`}>{post.title}</RelatedTitle>
                  <RelatedMeta>{post.date}</RelatedMeta>
                </RelatedContent>
              </RelatedCard>
            ))}
          </RelatedGrid>
        </RelatedPosts>
      </BlogContent>
    </MainLayout>
  );
};

export default BlogPostPage;
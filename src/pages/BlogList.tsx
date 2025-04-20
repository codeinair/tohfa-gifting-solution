import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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

const BlogContentWrapper = styled.div`
  padding: 80px 40px;
  max-width: 1200px;
  margin: 0 auto;
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const BlogCard = styled(motion.div)`
  background-color: white;
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--box-shadow);
  transition: transform var(--transition-normal);
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const BlogImage = styled.div`
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

const BlogCategory = styled.span`
  position: absolute;
  top: 15px;
  left: 15px;
  background-color: var(--secondary-color);
  color: white;
  padding: 5px 15px;
  border-radius: 30px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
`;

const BlogCardContent = styled.div`
  padding: 25px;
`;

const BlogDate = styled.div`
  font-size: 14px;
  color: var(--text-light-color);
  margin-bottom: 10px;
`;

const BlogTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 15px;
  transition: color var(--transition-normal);
  
  &:hover {
    color: var(--secondary-color);
  }
`;

const BlogExcerpt = styled.p`
  color: var(--text-light-color);
  margin-bottom: 20px;
  line-height: 1.6;
`;

const ReadMoreLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  font-weight: 600;
  color: var(--secondary-color);
  transition: all var(--transition-normal);
  
  svg {
    margin-left: 5px;
    transition: transform var(--transition-normal);
  }
  
  &:hover {
    color: var(--accent-color);
    
    svg {
      transform: translateX(3px);
    }
  }
`;

const FilterBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  flex-wrap: wrap;
  gap: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const CategoryFilter = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const FilterButton = styled.button<{ isActive: boolean }>`
  padding: 8px 16px;
  border-radius: 30px;
  border: none;
  background-color: ${props => props.isActive ? 'var(--secondary-color)' : 'var(--background-alt-color)'};
  color: ${props => props.isActive ? 'white' : 'var(--text-color)'};
  font-weight: 500;
  cursor: pointer;
  transition: all var(--transition-normal);
  
  &:hover {
    background-color: ${props => props.isActive ? 'var(--secondary-color)' : 'var(--border-color)'};
  }
`;

const SearchBar = styled.div`
  position: relative;
  width: 250px;
  
  input {
    width: 100%;
    padding: 12px 40px 12px 15px;
    border-radius: 30px;
    border: 1px solid var(--border-color);
    font-size: 14px;
    
    &:focus {
      outline: none;
      border-color: var(--secondary-color);
    }
  }
  
  svg {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--text-light-color);
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
  gap: 10px;
`;

const PageNumber = styled.button<{ isActive?: boolean }>`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid var(--border-color);
  background-color: ${props => props.isActive ? 'var(--secondary-color)' : 'transparent'};
  color: ${props => props.isActive ? 'white' : 'var(--text-color)'};
  cursor: pointer;
  transition: all var(--transition-normal);
  
  &:hover {
    background-color: ${props => props.isActive ? 'var(--secondary-color)' : 'var(--background-alt-color)'};
  }
`;

const PageArrow = styled(PageNumber)`
  svg {
    stroke: ${props => props.isActive ? 'white' : 'var(--text-color)'};
  }
`;

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: 'The Power of Personalized Gifting: Why Customization Matters',
    excerpt: 'Learn why personalized gifts create lasting impressions and strengthen relationships in both personal and professional settings.',
    category: 'Gift Trends',
    date: 'April 15, 2025',
    image: '/placeholder-blog-1.jpg'
  },
  {
    id: 2,
    title: 'Corporate Gifting: A Strategic Approach to Building Business Relationships',
    excerpt: 'Discover how thoughtful corporate gifting can strengthen client relationships and boost employee morale and retention.',
    category: 'Corporate',
    date: 'April 10, 2025',
    image: '/placeholder-blog-2.jpg'
  },
  {
    id: 3,
    title: 'How to Choose the Perfect Gift: A Comprehensive Guide',
    excerpt: 'End gift-selection anxiety with our step-by-step approach to choosing meaningful gifts for any occasion or recipient.',
    category: 'Gift Guide',
    date: 'April 05, 2025',
    image: '/placeholder-blog-3.jpg'
  },
  {
    id: 4,
    title: 'Sustainable Gifting: Eco-Friendly Options That Impress',
    excerpt: 'Explore environmentally conscious gifting choices that show you care about both the recipient and the planet.',
    category: 'Sustainability',
    date: 'April 01, 2025',
    image: '/placeholder-blog-4.jpg'
  },
  {
    id: 5,
    title: 'Seasonal Gift Trends: What\'s Hot in 2025',
    excerpt: 'Stay ahead of the curve with our analysis of the latest gifting trends for every season this year.',
    category: 'Gift Trends',
    date: 'March 27, 2025',
    image: '/placeholder-blog-5.jpg'
  },
  {
    id: 6,
    title: 'The Psychology Behind Gift-Giving: Understanding Emotional Connections',
    excerpt: 'Delve into the science of why we give gifts and how they create meaningful emotional bonds between people.',
    category: 'Psychology',
    date: 'March 22, 2025',
    image: '/placeholder-blog-6.jpg'
  },
];

const BlogListPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');
  
  // Get unique categories
  const allCategories = blogPosts.map(post => post.category);
  const uniqueCategories = Array.from(new Set(allCategories));
  const categories = ['All', ...uniqueCategories];
  
  // Filter posts based on category and search term
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  return (
    <MainLayout>
      <PageHeader>
        <PageTitle>Blog</PageTitle>
        <PageDescription>
          Insights, tips, and expert advice on gifting for every occasion.
          Discover the art of thoughtful gifting and stay updated with the latest trends.
        </PageDescription>
      </PageHeader>
      
      <BlogContentWrapper>
        <FilterBar>
          <CategoryFilter>
            {categories.map(category => (
              <FilterButton 
                key={category} 
                isActive={category === activeCategory}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </FilterButton>
            ))}
          </CategoryFilter>
          
          <SearchBar>
            <input 
              type="text" 
              placeholder="Search articles..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </SearchBar>
        </FilterBar>
        
        <BlogGrid>
          {filteredPosts.map(post => (
            <BlogCard
              key={post.id}
              as={motion.div}
              variants={itemVariants}
              initial="hidden"
              animate="show"
            >
              <BlogImage>
                <img src={post.image} alt={post.title} />
                <BlogCategory>{post.category}</BlogCategory>
              </BlogImage>
              <BlogCardContent>
                <BlogDate>{post.date}</BlogDate>
                <BlogTitle as={Link} to={`/blog/${post.id}`}>{post.title}</BlogTitle>
                <BlogExcerpt>{post.excerpt}</BlogExcerpt>
                <ReadMoreLink to={`/blog/${post.id}`}>
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </ReadMoreLink>
              </BlogCardContent>
            </BlogCard>
          ))}
        </BlogGrid>
        
        {filteredPosts.length === 0 && (
          <div style={{ textAlign: 'center', padding: '50px 0' }}>
            <h3>No posts found</h3>
            <p>Try a different search term or category.</p>
          </div>
        )}
        
        <Pagination>
          <PageArrow>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </PageArrow>
          <PageNumber isActive>1</PageNumber>
          <PageNumber>2</PageNumber>
          <PageNumber>3</PageNumber>
          <PageArrow>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </PageArrow>
        </Pagination>
      </BlogContentWrapper>
    </MainLayout>
  );
};

export default BlogListPage;
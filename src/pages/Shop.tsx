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

const ShopContent = styled.div`
  padding: 60px 40px;
`;

const FiltersBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

const Categories = styled.div`
  display: flex;
  gap: 20px;
`;

const CategoryButton = styled.button<{ active: boolean }>`
  background: ${props => props.active ? 'var(--secondary-color)' : 'transparent'};
  color: ${props => props.active ? 'white' : 'var(--text-color)'};
  border: ${props => props.active ? 'none' : '1px solid var(--border-color)'};
  padding: 8px 16px;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: all var(--transition-normal);
  
  &:hover {
    background: ${props => props.active ? 'var(--secondary-color)' : 'var(--background-alt-color)'};
  }
`;

const SearchBar = styled.div`
  position: relative;
  
  input {
    padding: 10px 40px 10px 15px;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    width: 250px;
  }
  
  svg {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--text-light-color);
  }
`;

const ProductGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
`;

const ProductCard = styled(motion.div)`
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--box-shadow);
  transition: transform var(--transition-normal);
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const ProductImage = styled.div`
  height: 200px;
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

const ProductBadge = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: var(--accent-color);
  color: white;
  padding: 5px 10px;
  border-radius: var(--border-radius);
  font-size: 12px;
  font-weight: 600;
`;

const ProductContent = styled.div`
  padding: 20px;
`;

const ProductTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 18px;
`;

const ProductPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  
  .price {
    font-weight: 600;
    color: var(--secondary-color);
    font-size: 18px;
  }
  
  .button {
    padding: 6px 12px;
    background-color: var(--secondary-color);
    color: white;
    border: none;
    border-radius: var(--border-radius);
    cursor: pointer;
    transition: background-color var(--transition-normal);
    
    &:hover {
      background-color: var(--accent-color);
    }
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  gap: 10px;
  
  button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid var(--border-color);
    background-color: transparent;
    cursor: pointer;
    transition: all var(--transition-normal);
    
    &:hover, &.active {
      background-color: var(--secondary-color);
      color: white;
      border-color: var(--secondary-color);
    }
  }
`;

// Mock data for products
const products = [
  {
    id: 1,
    title: 'Luxury Celebration Hamper',
    description: 'Premium assortment of chocolates, nuts, and sparkling beverages for special occasions.',
    price: 199.99,
    badge: 'Popular',
    image: '/placeholder-product-1.jpg',
    category: 'celebration'
  },
  {
    id: 2,
    title: 'Corporate Success Basket',
    description: 'Professional gift basket with gourmet snacks, premium stationery, and branded items.',
    price: 249.99,
    badge: 'New',
    image: '/placeholder-product-2.jpg',
    category: 'corporate'
  },
  {
    id: 3,
    title: 'Wellness & Relaxation Box',
    description: 'Self-care package featuring aromatic candles, bath products, and herbal teas.',
    price: 129.99,
    badge: '',
    image: '/placeholder-product-3.jpg',
    category: 'wellness'
  },
  {
    id: 4,
    title: 'Festive Holiday Hamper',
    description: 'Seasonal treats and festive items perfect for celebrating holidays with loved ones.',
    price: 179.99,
    badge: 'Limited',
    image: '/placeholder-product-4.jpg',
    category: 'seasonal'
  },
  {
    id: 5,
    title: 'Gourmet Food Collection',
    description: 'Artisanal cheeses, premium crackers, imported chocolates, and specialty preserves.',
    price: 159.99,
    badge: '',
    image: '/placeholder-product-5.jpg',
    category: 'gourmet'
  },
  {
    id: 6,
    title: 'Executive Appreciation Bundle',
    description: 'Sophisticated gift set featuring premium coffee, quality notebook, and luxury pen.',
    price: 219.99,
    badge: 'Popular',
    image: '/placeholder-product-6.jpg',
    category: 'corporate'
  },
];

const ShopPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter products based on category and search term
  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  return (
    <MainLayout>
      <PageHeader>
        <PageTitle>Premium Gift Hampers</PageTitle>
        <PageDescription>
          Browse our exquisite collection of thoughtfully curated gift hampers. Whether for corporate clients, 
          special celebrations, or personal milestones, we have the perfect gift basket for every occasion.
        </PageDescription>
      </PageHeader>
      
      <ShopContent>
        <FiltersBar>
          <Categories>
            <CategoryButton 
              active={activeCategory === 'all'} 
              onClick={() => setActiveCategory('all')}
            >
              All Hampers
            </CategoryButton>
            <CategoryButton 
              active={activeCategory === 'corporate'} 
              onClick={() => setActiveCategory('corporate')}
            >
              Corporate
            </CategoryButton>
            <CategoryButton 
              active={activeCategory === 'celebration'} 
              onClick={() => setActiveCategory('celebration')}
            >
              Celebration
            </CategoryButton>
            <CategoryButton 
              active={activeCategory === 'wellness'} 
              onClick={() => setActiveCategory('wellness')}
            >
              Wellness
            </CategoryButton>
            <CategoryButton 
              active={activeCategory === 'seasonal'} 
              onClick={() => setActiveCategory('seasonal')}
            >
              Seasonal
            </CategoryButton>
            <CategoryButton 
              active={activeCategory === 'gourmet'} 
              onClick={() => setActiveCategory('gourmet')}
            >
              Gourmet
            </CategoryButton>
          </Categories>
          
          <SearchBar>
            <input 
              type="text" 
              placeholder="Search gift hampers..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </SearchBar>
        </FiltersBar>
        
        <ProductGrid
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {filteredProducts.map(product => (
            <ProductCard key={product.id} variants={itemVariants}>
              <ProductImage>
                <img src={product.image} alt={product.title} />
                {product.badge && <ProductBadge>{product.badge}</ProductBadge>}
              </ProductImage>
              <ProductContent>
                <ProductTitle>{product.title}</ProductTitle>
                <p>{product.description}</p>
                <ProductPrice>
                  <span className="price">AED {product.price.toFixed(2)}</span>
                  <button className="button">Inquire Now</button>
                </ProductPrice>
              </ProductContent>
            </ProductCard>
          ))}
        </ProductGrid>
        
        <Pagination>
          <button className="active">1</button>
          <button>2</button>
          <button>3</button>
          <button>→</button>
        </Pagination>
      </ShopContent>
    </MainLayout>
  );
};

export default ShopPage;
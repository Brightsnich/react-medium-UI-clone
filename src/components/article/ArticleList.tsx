import React, { useState } from 'react';
import styled from 'styled-components';
import { mockArticles } from '../../data/mockData';
import ArticleCard from './ArticleCard';

const ListContainer = styled.section`
  max-width: 720px; /* Constrain the width of the article list */
  width: 100%;
`;

const TabContainer = styled.div`
  display: flex;
  gap: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  margin-bottom: 1.5rem;
  /* Sticky positioning */
  position: sticky;
  top: 57px; /* Height of the main Header */
  background-color: ${({ theme }) => theme.colors.background};
  z-index: 9; /* Lower than the header's z-index */
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-left: 2rem;
  }
`;

const TabButton = styled.button<{ $isActive: boolean }>`
  background: none;
  border: none;
  padding: 1rem 0rem;
  margin-right: 1.5rem;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme, $isActive }) => ($isActive ? theme.colors.black : theme.colors.grey)};
  font-weight: ${({ $isActive }) => ($isActive ? '600' : '400')};
  cursor: pointer;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 1px;
    background-color: ${({ theme, $isActive }) => ($isActive ? theme.colors.black : 'transparent')};
  }
`;

const ArticlesGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  /* The gap is now handled by the border and padding on ArticleCard */
`;

const ArticleList: React.FC = () => {
  const [activeTab, setActiveTab] = useState('For you');

  return (
    <ListContainer>
      <TabContainer>
        <TabButton $isActive={activeTab === 'For you'} onClick={() => setActiveTab('For you')}>
          For you
        </TabButton>
        <TabButton $isActive={activeTab === 'Following'} onClick={() => setActiveTab('Following')}>
          Featured
        </TabButton>
      </TabContainer>
      <ArticlesGrid>
        {mockArticles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </ArticlesGrid>
    </ListContainer>
  );
};

export default ArticleList;

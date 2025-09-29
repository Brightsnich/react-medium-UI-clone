import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  max-width: 1192px;
  margin: 0 auto;
  padding: 2rem 2rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 2.5rem;
  }
`;

const LayoutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr 295px; /* Give main content flexible space and sidebar a fixed width */
    gap: 3rem; /* Reduce the gap between columns */
  }
`;

interface MainLayoutProps {
  mainContent: React.ReactNode;
  sidebarContent: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ mainContent, sidebarContent }) => {
  return (
    <PageContainer>
      <LayoutGrid>
        {mainContent}
        {sidebarContent}
      </LayoutGrid>
    </PageContainer>
  );
};

export default MainLayout;

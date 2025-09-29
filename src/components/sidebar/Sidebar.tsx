import React from 'react';
import styled from 'styled-components';
import StaffPicks from './StaffPicks';
import WhoToFollow from './WhoToFollow.tsx';
import Tag from '../common/Tag';
import Icon from '../common/Icon';

const SidebarContainer = styled.aside`
  display: none; // Hidden on mobile and tablet

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: block;
    border-left: 1px solid ${({ theme }) => theme.colors.border};
    padding-left: 2rem;
  }
  position: sticky;
  top: 80px; /* Header height + some margin */
`;

const Section = styled.div`
  margin-bottom: 2.5rem;
`;

const SectionTitle = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const TagCloud = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const SeeMoreLink = styled.a`
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSizes.small};
  text-decoration: none;
  margin-top: 1rem;
  display: inline-block;

  &:hover {
    color: ${({ theme }) => theme.colors.black};
  }
`;

const ReadingListSection = styled(Section)`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.grey};
  line-height: 1.4;
`;

const FooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.grey};
`;

const recommendedTopics = [
  'Programming', 'Data Science', 'Technology', 'Self Improvement', 'Writing', 'Relationships', 'Machine Learning'
];

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <Section>
        <SectionTitle>Staff Picks</SectionTitle>
        <StaffPicks />
        <SeeMoreLink href="#">See the full list</SeeMoreLink>
      </Section>

      <Section>
        <SectionTitle>Recommended topics</SectionTitle>
        <TagCloud>
          {recommendedTopics.map(topic => <Tag key={topic}>{topic}</Tag>)}
        </TagCloud>
        <SeeMoreLink href="#">See more topics</SeeMoreLink>
      </Section>

      <Section>
        <SectionTitle>Who to follow</SectionTitle>
        <WhoToFollow />
        <SeeMoreLink href="#">See more suggestions</SeeMoreLink>
      </Section>

      <ReadingListSection>
        <SectionTitle>Reading list</SectionTitle>
        Click the <Icon name="bookmark" size="16px" /> on any story to easily add it to your reading list or a custom list that you can share.
      </ReadingListSection>

      <FooterLinks>
        <a href="#">Help</a>
        <a href="#">Status</a>
        <a href="#">About</a>
        <a href="#">Careers</a>
        <a href="#">Press</a>
        <a href="#">Blog</a>
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Text to speech</a>
      </FooterLinks>
    </SidebarContainer>
  );
};

export default Sidebar;

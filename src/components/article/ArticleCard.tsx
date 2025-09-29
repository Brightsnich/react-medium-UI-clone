import React from 'react';
import styled from 'styled-components';
import Icon from '../common/Icon';
import type { Article } from '../../data/mockData';


const CardContainer = styled.article`
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-left: 2rem;
  }
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const Avatar = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 0.5rem;
  object-fit: cover;
`;

const AuthorName = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 500;
`;

const PublicationName = styled.span`
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSizes.small};
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2rem;
`;

const TextContent = styled.div`
  flex: 1;
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.sans}; /* Use sans-serif font */
  font-size: 1.25rem; /* 20px */
  font-weight: 700;
  margin: 0 0 0.25rem;
  color: ${({ theme }) => theme.colors.black};
`;

const Subtitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.grey};
  display:  -webkit-box; 
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.5rem;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
  width: 65%;
  margin-top: -0.5rem;
  }
`;

const MetaInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: ${({ theme }) => theme.fontSizes.small}; /* Changed to use theme variable */
  color: ${({ theme }) => theme.colors.grey};
  flex-wrap: wrap;
`;

const MetaItem = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
`;

const ActionIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.grey};
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    .display {
      display: none;
    }
  }
`;

const ArticleImage = styled.img`
  width: 70px;
  height: 50px;
  object-fit: cover;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 160px;
    height: 100px;
  }
`;

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <CardContainer>
      <AuthorInfo>
        <Avatar src={article.author.avatarUrl} alt={article.author.name} />
        {article.publication && (
          <>
            <PublicationName>&nbsp;In&nbsp;</PublicationName>
            <AuthorName>{article.publication}</AuthorName>
            <PublicationName>&nbsp;by&nbsp;</PublicationName>
            <AuthorName>{article.author.name}</AuthorName>
          </>
        )}
      </AuthorInfo>
      <ContentWrapper>
        <TextContent>
          <Title>{article.title}</Title>
          <Subtitle>{article.subtitle}</Subtitle>
        </TextContent>
        <ArticleImage src={article.imageUrl} alt={article.title} />
      </ContentWrapper>
      <Footer>
        <MetaInfo>
          <MetaItem>
            <Icon name="star" size="16px" />
            <span>{article.date} ·</span>
          </MetaItem>
          <MetaItem>
            <Icon name="clap" size="18px" />
            {article.claps > 1000 ? `${(article.claps / 1000).toFixed(1)}K` : article.claps}
          </MetaItem>
          <MetaItem>
            <Icon name="comment" size="18px" />
            {article.responses}
          </MetaItem>
        </MetaInfo>
        <ActionIcons>
          <Icon name="show-less" size="20px" />
          <Icon name="bookmark" size="20px" className='display' />
          <Icon name="more-horizontal" size="20px" />
        </ActionIcons>
      </Footer>
    </CardContainer>
  );
};

export default ArticleCard;

import React from 'react';
import styled from 'styled-components';
import { whoToFollow } from '../../data/mockData';
import type { FollowSuggestion } from '../../data/mockData';
import Button from '../common/Button';

const ItemContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  gap: 1rem;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  flex: 1;
`;

const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.h4`
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.grey};
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const WhoToFollow: React.FC = () => {
  return (
    <div>
      {whoToFollow.map((person: FollowSuggestion) => (
        <ItemContainer key={person.id}>
          <UserInfo>
            <Avatar src={person.avatarUrl} alt={person.name} />
            <TextContent>
              <Name>{person.name}</Name>
              <Description>{person.description}</Description>
            </TextContent>
          </UserInfo>
          <Button>Follow</Button>
        </ItemContainer>
      ))}
    </div>
  );
};

export default WhoToFollow;
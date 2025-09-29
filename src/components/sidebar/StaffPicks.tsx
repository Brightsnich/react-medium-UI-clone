import React from "react";
import styled from "styled-components";
import { staffPicks } from "../../data/mockData";
import type { StaffPick } from "../../data/mockData";
import Icon from "../common/Icon";

const StaffPickItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const Avatar = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 0.75rem;
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

const DateText = styled.span`
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSizes.small};
  margin-top: 0.25rem;
  display: flex;
  align-items: center;
  gap: 1rem; /* Increased space */
`;

const Title = styled.h4`
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black};
  margin-left: 28px; /* Align with author name */
  line-height: 1.25;
`;

const StaffPicks: React.FC = () => {
  return (
    <div>
      {staffPicks.map((pick: StaffPick) => (
        <StaffPickItem key={pick.id}>
          <AuthorInfo>
            <Avatar src={pick.author.avatarUrl} alt={pick.author.name} />
            {pick.publication ? (
              <>
                <PublicationName>&nbsp;In&nbsp;</PublicationName>
                <AuthorName>{pick.publication}</AuthorName>
                <PublicationName>&nbsp;by&nbsp;</PublicationName>
                <AuthorName>{pick.author.name}</AuthorName>
              </>
            ): <AuthorName>{pick.author.name}</AuthorName>}
          </AuthorInfo>
          <Title>{pick.title}</Title>
          <DateText style={{ marginLeft: '28px' }}>
            <Icon name="star" size="14px" />
            <span>{pick.date}</span>
          </DateText>
        </StaffPickItem>
      ))}
    </div>
  );
};

export default StaffPicks;

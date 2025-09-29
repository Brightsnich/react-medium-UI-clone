import React from 'react';
import styled from 'styled-components';
import Icon from '../common/icon';


const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid #f2f2f2;
  padding: 0 2rem;
  height: 57px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 10;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 2rem;
  }
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const HamburgerButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
`;

const Logo = styled.div`
  font-family: 'Times New Roman', Times, serif;
  font-size: 1.8rem;
  font-weight: bold;
  letter-spacing: -1px;
`;

const SearchWrapper = styled.div`
  display: none; // Hidden on mobile
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    align-items: left;
    justify-content: left;
    background-color: #fafafa;
    padding: 0.6rem 1.2rem;
    width: 15rem;
    border-radius: 100px;
    color: ${({ theme }) => theme.colors.grey};
    gap: 0.5rem;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const UserAvatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.black};
`;

const WriteLink = styled.a`
  display: none;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme.colors.grey};
    text-decoration: none;
    font-size: ${({ theme }) => theme.fontSizes.small};
    &:hover {
      color: ${({ theme }) => theme.colors.black};
    }
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <LeftSection>
        <HamburgerButton>
          <Icon name="menu" size="24px" />
        </HamburgerButton>
        <Logo>Medium</Logo>
        <SearchWrapper>
          <Icon name="search" size="20px" />
          <span>Search</span>
        </SearchWrapper>
      </LeftSection>
      <RightSection>
        <WriteLink href="#">
          <Icon name="write" size="24px" />
          <span>Write</span>
        </WriteLink>
        <Icon name="notifications" size="24px" />
        <UserAvatar />
      </RightSection>
    </HeaderWrapper>
  );
};

export default Header;

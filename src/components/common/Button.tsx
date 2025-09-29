import styled from 'styled-components';

const Button = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.grey};
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 100px;
  padding: 0.3rem 1rem;
  font-size: ${({ theme }) => theme.fontSizes.small};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.black};
    border-color: ${({ theme }) => theme.colors.black};
  }
`;

export default Button;
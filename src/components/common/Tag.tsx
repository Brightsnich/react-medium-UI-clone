import styled from 'styled-components';

const Tag = styled.span`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  color: ${({ theme }) => theme.colors.grey};
  padding: 0.25rem 0.75rem;
  border-radius: 100px;
  font-size: 0.8125rem;
  white-space: nowrap;
`;

export default Tag;

import React from 'react';
import styled from 'styled-components';

const IconWrapper = styled.span<{ size?: string }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => size || '24px'};
  height: ${({ size }) => size || '24px'};
  color: ${({ theme }) => theme.colors.grey};

  svg {
    width: 100%;
    height: 100%;
    stroke: currentColor;
  }
`;

interface IconProps {
  name: string;
  size?: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, size }) => {
  // This is a simplified version. A real implementation would use an SVG sprite or dynamic imports.
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'menu': return (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      );
      case 'search': return (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      );
      case 'notifications': return (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
        </svg>
      );
      case 'star': return '⭐';
      case 'bookmark': return '🔖';
      case 'clap': return '👏';
      case 'comment': return '💬';
      case 'show-less': return '➖';
      case 'write': return (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
        </svg>
      );
      case 'more-horizontal': return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle>
        </svg>
      );
      default: return '?';
    }
  };

  return <IconWrapper size={size}>{getIcon(name)}</IconWrapper>;
};

export default Icon;

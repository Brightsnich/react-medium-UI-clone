export const theme = {
  colors: {
    primary: '#1A8917',
    black: '#191919',
    grey: '#6B6B6B',
    lightGrey: '#F2F2F2',
    background: '#FFFFFF',
    border: '#F2F2F2',
  },
  fonts: {
    body: '"Source Serif 4", serif',
    sans: '"sohne-var", "Arial", "Helvetica Neue", sans-serif',
  },
  fontSizes: {
    small: '0.8125rem', // 13px
    medium: '1rem',      // 16px
    large: '1.25rem',    // 20px
    xlarge: '1.375rem',  // 22px
  },
  breakpoints: {
    tablet: '768px',
    desktop: '1024px',
  },
} as const;

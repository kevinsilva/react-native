import { Platform } from 'react-native';

const theme = {
  colors: {
    white: '#f5f5f5',
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
    secondary: '#24292e',
    error: '#d73a4a',
    appBarBackground: '#24292e',
    backgroundMain: '#e1e4e8',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      ios: 'Arial',
      android: 'Roboto',
      default: 'System',
    }),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
};

export default theme;

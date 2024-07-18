import { View, StyleSheet } from 'react-native';
import AppBarTab from './AppBarTab';
import Constants from 'expo-constants';

import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 15,
    backgroundColor: theme.colors.appBarBackground,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: Constants.statusBarHeight + 56,
    marginBottom: 10,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab title='Repositories' />
    </View>
  );
};

export default AppBar;

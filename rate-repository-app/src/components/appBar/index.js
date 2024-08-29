import { View, ScrollView, StyleSheet } from 'react-native';
import AppBarTab from './AppBarTab';
import Constants from 'expo-constants';

import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 15,
    backgroundColor: theme.colors.appBarBackground,
    flexDirection: 'row',
    alignItems: 'center',
    height: Constants.statusBarHeight + 56,
    marginBottom: 10,
  },
  scrollView: {
    flexDirection: 'row',
    gap: 10,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
      >
        <AppBarTab title='Repositories' to={'/'} />
        <AppBarTab title='Sign in' to={'/signin'} />
      </ScrollView>
    </View>
  );
};

export default AppBar;

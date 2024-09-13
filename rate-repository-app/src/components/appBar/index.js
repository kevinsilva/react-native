import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useQuery } from '@apollo/client';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import { ME } from '../../graphql/queries';
import useSignOut from '../../hooks/useSignOut';

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
  const [signOut] = useSignOut();
  const { data, loading } = useQuery(ME);
  const isUserLoggedIn = !!data?.me;

  if (loading) return <Text>Loading...</Text>;

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
      >
        <AppBarTab title='Repositories' to={'/'} />
        {isUserLoggedIn ? (
          <AppBarTab title='Sign out' onPress={() => signOut()} />
        ) : (
          <AppBarTab title='Sign in' to={'/signin'} />
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;

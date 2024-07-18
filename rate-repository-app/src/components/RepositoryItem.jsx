import { View, Image, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  avatar: {
    height: 75,
    width: 75,
    borderRadius: 50,
    marginRight: 20,
  },
  card: {
    padding: 10,
    backgroundColor: '#ffffff',
    marginBottom: 10,
    filter:
      'drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06))',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardBody: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
  cardPill: {
    backgroundColor: theme.colors.primary,
    color: 'white',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignSelf: 'flex-start',
    marginTop: 10,
  },
  cardStats: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const formatCount = (number) => {
  if (number >= 1000) return `${(number / 1000).toFixed(1)}k`;
  else return number;
};

const RepositoryItem = ({ repository }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Image
          style={styles.avatar}
          source={{ uri: repository.ownerAvatarUrl }}
        />
        <View>
          <Text style={styles.cardTitle}>{repository.fullName}</Text>
          <Text>{repository.description}</Text>
          <Text style={styles.cardPill}>{repository.language}</Text>
        </View>
      </View>
      <View style={styles.cardBody}>
        <View style={styles.cardStats}>
          <Text fontWeight='bold'>
            {formatCount(repository.stargazersCount)}
          </Text>
          <Text color='textSecondary'>Stars</Text>
        </View>
        <View style={styles.cardStats}>
          <Text fontWeight='bold'>{formatCount(repository.forksCount)}</Text>
          <Text color='textSecondary'>Forks</Text>
        </View>
        <View style={styles.cardStats}>
          <Text fontWeight='bold'>{formatCount(repository.reviewCount)}</Text>
          <Text color='textSecondary'>Reviews</Text>
        </View>
        <View style={styles.cardStats}>
          <Text fontWeight='bold'>{formatCount(repository.ratingAverage)}</Text>
          <Text color='textSecondary'>Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;

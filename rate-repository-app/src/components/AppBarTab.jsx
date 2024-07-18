import { Pressable } from 'react-native';
import Text from './Text';

const AppBarTab = ({ title }) => {
  return (
    <Pressable onPress={() => {}}>
      <Text color='white'>{title}</Text>
    </Pressable>
  );
};

export default AppBarTab;

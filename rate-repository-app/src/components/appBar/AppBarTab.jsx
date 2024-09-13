import { Link } from 'react-router-native';
import Text from '../Text';
import { Pressable } from 'react-native';

const AppBarTab = ({ title, to, onPress }) => {
  const Wrapper = onPress ? Pressable : Link;
  const props = onPress ? { onPress, role: 'button' } : { to, role: 'link' };

  return (
    <Wrapper {...props}>
      <Text color='white'>{title}</Text>
    </Wrapper>
  );
};

export default AppBarTab;

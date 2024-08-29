import { Link } from 'react-router-native';
import Text from '../Text';

const AppBarTab = ({ title, to }) => {
  return (
    <Link to={to}>
      <Text color='white'>{title}</Text>
    </Link>
  );
};

export default AppBarTab;

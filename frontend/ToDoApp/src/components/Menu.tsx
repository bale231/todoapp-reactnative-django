import { useNavigation, NavigationProp } from '@react-navigation/native';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

type RootStackParamList = {
  Home: undefined;
  AllToDos: undefined;
  Profile: undefined;
};

const Menu: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Ionicons name="home" size={28} color="#000" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('AllToDos')}>
        <Ionicons name="list" size={28} color="#000" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Ionicons name="person" size={28} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: '#fff',

    // Layout orizzontale
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',

    // Bordo superiore
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
});

export default Menu;

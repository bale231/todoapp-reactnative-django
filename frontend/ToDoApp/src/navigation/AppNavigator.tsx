import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AllToDosScreen } from '~/screen/AllTodosScreen';
import { HomeScreen } from '~/screen/HomeScreen';

export type RootStackParamList = {
  Home: undefined;
  SignUp: undefined;
  CreateToDoList: undefined;
  Profile: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="AllToDos" component={AllToDosScreen} />
      {/* Aggiungi altre screen qui se necessario */}
    </Stack.Navigator>
  );
};

export default AppNavigator;

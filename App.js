import Styles from './styles';
import { HomeScreen, SearchScreen } from './index.js'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={Styles.container}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}>Home</Stack.Screen>
        <Stack.Screen name="Search" component={SearchScreen}>Pokemon Search</Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

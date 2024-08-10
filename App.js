import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Styles from './styles';
import HomeScreen from './components/HomeScreen/HomeScreen';

export default function App() {
  return (
    <View style={Styles.container}>
      <HomeScreen />
      <StatusBar style="auto" />
    </View>
  );
};

import { View, Text, SafeAreaView } from 'react-native';
import Styles from './Styles';

const HomeScreen = () => { 
    return (
        <SafeAreaView style={Styles.container}>
            <Text style={Styles.homeScreenText}>Home Screen</Text>
        </SafeAreaView>
    )
}

export default HomeScreen;

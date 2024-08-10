import { SafeAreaView, Button } from 'react-native';
import Styles from './Styles';

const HomeScreen = ( {navigation} ) => { 
    return (
        <SafeAreaView style={Styles.container}>
            <Button style={Styles.searchButton} title='Search for a Pokemon' onPress={() => navigation.navigate('Search')}/>
        </SafeAreaView>
    )
}

export default HomeScreen;

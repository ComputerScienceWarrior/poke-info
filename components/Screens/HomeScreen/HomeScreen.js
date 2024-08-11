import { SafeAreaView, Text, Button, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

const HomeScreen = ( {navigation} ) => { 
    return (
        <SafeAreaView style={styles.container}>
            <Image 
                style={styles.mainImage}
                source={{ uri: 'https://static.wikia.nocookie.net/pokemon-fano/images/6/6f/Poke_Ball.png/revision/latest?cb=20140520015336' }}
            />
            <TouchableOpacity style={styles.searchButton} onPress={() => navigation.navigate('Search')}>
                <Text style={styles.buttonText}>Search for a Pokemon</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default HomeScreen;

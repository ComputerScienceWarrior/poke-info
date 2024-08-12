import { SafeAreaView, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

const HomeScreen = ( {navigation} ) => { 
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.headerText}>Welcome to Poke Paradise!</Text>
            <Image
                style={styles.mainImage}
                source={{ uri: 'https://static.wikia.nocookie.net/pokemon-fano/images/6/6f/Poke_Ball.png/revision/latest?cb=20140520015336' }}
            />
            <TouchableOpacity style={styles.searchButton} onPress={() => navigation.navigate('Search')}>
                <Text style={styles.buttonText}>Search</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.battleZoneButton}>
                <Text style={styles.battleZoneText}>Battle Zone</Text>
                <Image style={styles.battleZoneImage} source={{ uri: "https://static.vecteezy.com/system/resources/previews/029/489/760/original/simple-sword-icon-illustration-design-vector.jpg" }}/>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default HomeScreen;

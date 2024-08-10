import { SafeAreaView, Text, TextInput } from 'react-native';
import Styles from './styles';

const SearchScreen = () => {
    return(
        <SafeAreaView>
            <TextInput style={Styles.input} placeholder="Search for a Pokemon..."/>
        </SafeAreaView>
    );
};

export default SearchScreen;

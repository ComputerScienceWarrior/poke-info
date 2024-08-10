import { SafeAreaView, Text, TextInput, Button } from 'react-native';
import Styles from './styles';
import { useState } from 'react';
import axios from 'axios';

const SearchScreen = () => {
    const [result, setResult] = useState('')

    return(
        <SafeAreaView style={Styles.container}>
            <TextInput style={Styles.input} placeholder="Search for a Pokemon..."/>
            <Button style={Styles.searchButton} title="Search" onPress={() => console.log('hi')} />
        </SafeAreaView>
    );
};

export default SearchScreen;

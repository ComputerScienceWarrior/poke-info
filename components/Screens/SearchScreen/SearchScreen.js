import { SafeAreaView, Text, TextInput, Button, View, StyleSheet } from 'react-native';
import { useState } from 'react';
import axios from 'axios';
import Styles from './styles';

const SearchScreen = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [result, setResult] = useState(null);
    const [pokemon, setPokemon] = useState('');

    const handleSearch = async () => {
        setLoading(true);
        setError('');
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`);
            setResult(response.data);
        } catch (err) {
            setError('Error fetching Pokémon');
        } finally {
            setLoading(false);
        }
    };

    return (
        <SafeAreaView style={Styles.container}>
            <TextInput 
                style={Styles.input} 
                placeholder="Search for a Pokemon..." 
                value={pokemon} 
                onChangeText={setPokemon}
            />
            <Button 
                title="Search" 
                onPress={handleSearch} 
                disabled={loading}
            />
            {loading && <Text>Loading...</Text>}
            {error && <Text style={Styles.error}>{error}</Text>}
            {result && (
                <View>
                    <Text>Pokemon Name: {result.name}</Text>
                    <Text>Pokemon Height: {result.height}</Text>
                    <Text>Pokemon Weight: {result.weight}</Text>
                </View>
            )}
        </SafeAreaView>
    );
};

export default SearchScreen;

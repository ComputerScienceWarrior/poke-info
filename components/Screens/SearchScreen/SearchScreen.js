import { SafeAreaView, Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';
import { useState } from 'react';
import axios from 'axios';
import Styles from './styles';
import { Pokemon } from '../../../index'

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
            <TouchableOpacity 
                style={Styles.searchButton}
                onPress={handleSearch} 
                disabled={loading}
            >
                <Text style={Styles.searchText}>Search</Text>
            </TouchableOpacity>
            {loading && <Text>Loading...</Text>}
            {error && <Text style={Styles.error}>{error}</Text>}
            {result && (
                <Pokemon 
                    id={result.id}
                    name={result.name}
                    image={`https://img.pokemondb.net/artwork/${result.name}.jpg`}
                    weight={result.weight} 
                    height={result.height}    
                />
            )}
        </SafeAreaView>
    );
};

export default SearchScreen;

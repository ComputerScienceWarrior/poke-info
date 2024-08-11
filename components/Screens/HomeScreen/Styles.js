import { View, Text, StyleSheet, } from "react-native";

const styles = StyleSheet.create({ 
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        height: '100%',
        width: '100%'
    },
    searchButton: {
        width: 200,
        borderRadius: 10,
        borderColor: 'black',
        padding: 10,
        backgroundColor: 'lightblue',
        margin: 20
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 16,
        fontStyle: 'italic',
        letterSpacing: 1
    },
    mainImage: {
        width: 175,
        height: 175,
        marginBottom: 50
    },
});

export default styles;

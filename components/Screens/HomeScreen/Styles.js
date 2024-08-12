import { StyleSheet } from "react-native";

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
        borderWidth: 3,
        padding: 10,
        backgroundColor: '#f00000',
        margin: 20,
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 20,
        fontStyle: 'italic',
        letterSpacing: 1,
        fontWeight:'bold',
        color: 'white',
    },
    mainImage: {
        width: 175,
        height: 175,
        marginBottom: 50,
    },
    headerText: {
        fontSize: 34,
        textAlign: 'center',
        fontWeight: 'bold',
        letterSpacing: 2,
        fontStyle: 'italic',
        marginBottom: 50,
    },
    battleZoneImage: {
        width: 30,
        height: 30,
    },
    battleZoneButton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        border: 'solid',
        borderWidth: 2,
        padding: 10,
        width: 200,
        borderRadius: 10,
    },
    battleZoneText: {
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: 'bold'
    }
});

export default styles;

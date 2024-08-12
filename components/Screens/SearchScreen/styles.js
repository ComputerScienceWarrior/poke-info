import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 8,
    },
    error: {
        color: 'red',
        marginTop: 16,
    },
    searchButton: {
        display: 'flex',
        width: '100%',
        borderWidth: 2,
        padding: 10,
        borderRadius: 20,
        backgroundColor: 'skyblue',
        marginBottom: 20
    },
    searchText: {
        textAlign: 'center',
        fontSize: 16
    },
});

export default Styles;

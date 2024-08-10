import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        width: '50%',
        paddingHorizontal: 8,
        margin: 10,
    },
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchButton: {
        width: '200'
    }
});

export default Styles;

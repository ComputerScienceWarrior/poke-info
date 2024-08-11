import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 10,
        padding: 20,
        margin: 10,
        backgroundColor: '#fff',
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 'auto',
        width: '100%',
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    detailsText: {
        fontSize: 16,
        color: '#333',
    },
});

export default Styles;

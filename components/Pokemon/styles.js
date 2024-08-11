import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
    },
    innerContainer: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    imagesContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    image: {
        width: 250,
        height: 250,
        resizeMode: 'contain',
    },
    detailsContainer: {
        marginTop: 20,
    },
    detailsText: {
        fontSize: 16,
        color: '#333',
        marginBottom: 5,
    },
});

export default styles;

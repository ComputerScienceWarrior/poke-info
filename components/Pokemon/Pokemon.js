import React from 'react';
import { SafeAreaView, Text, View } from "react-native";
import Styles from "./styles";

const Pokemon = (props) => {
    return (
        <SafeAreaView style={Styles.container}>
            <View style={Styles.cardHeader}>
                <Text style={Styles.headerText}>{props.name}</Text>
                <Text style={Styles.headerText}>ID No.{props.id}</Text>
            </View>
            <View>
                <Text style={Styles.detailsText}>Height: {props.height}</Text>
            </View>
            <View>
                <Text style={Styles.detailsText}>Weight: {props.weight}</Text>
            </View>
        </SafeAreaView>
    );
};

export default Pokemon;

import React from 'react';
import { SafeAreaView, Text, View } from "react-native";
import Styles from "./styles";
import HorizontalLine from '../HorizontalLine/HorizontalLine';

const Pokemon = (props) => {
    return (
        <SafeAreaView style={Styles.container}>
            <View style={Styles.cardHeader}>
                <View>
                    <Text style={Styles.headerText}>{props.name}</Text>
                    <Text style={Styles.headerText}>ID No.{props.id}</Text>
                </View>
            </View>
            <HorizontalLine />
            <View>
                <Text style={Styles.detailsText}>Height: {props.height} ft.</Text>
            </View>
            <View>
                <Text style={Styles.detailsText}>Weight: {props.weight} lbs.</Text>
            </View>
        </SafeAreaView>
    );
};

export default Pokemon;

import React from 'react';
import { SafeAreaView, Text, View, Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet } from "react-native";
import HorizontalLine from '../HorizontalLine/HorizontalLine';
import styles from './styles'

const Pokemon = (props) => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                keyboardShouldPersistTaps="handled"
            >
                <SafeAreaView style={styles.innerContainer}>
                    <View style={styles.cardHeader}>
                        <Text style={styles.headerText}>{props.name}</Text>
                        <Text style={styles.headerText}>ID No.{props.id}</Text>
                    </View>
                    <HorizontalLine />
                    <View style={styles.imagesContainer}>
                        <Image 
                            source={{ uri: props.image }}
                            style={styles.image}
                        />
                    </View>
                    <View style={styles.detailsContainer}>
                        <Text style={styles.detailsText}>Height: {props.height} ft.</Text>
                        <Text style={styles.detailsText}>Weight: {props.weight} lbs.</Text>
                    </View>
                </SafeAreaView>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default Pokemon;

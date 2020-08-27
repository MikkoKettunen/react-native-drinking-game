import React from "react";
import { StyleSheet, View } from "react-native";
import { Dimensions } from "react-native";

export default function Card(props) {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>{props.children}</View>
        </View>
    );
}

export function Card2(props) {
    return (
        <View style={styles.card2}>
            <View style={styles.cardContent2}>{props.children}</View>
        </View>
    );
}

export function Card3(props) {
    return (
        <View style={styles.card3}>
            <View style={styles.cardContent3}>{props.children}</View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 0,
        elevation: 3,
        backgroundColor: "#38B743",
        shadowOffset: { width: 1, height: 1 },
        shadowColor: "#333",
        shadowOpacity: 0,
        shadowRadius: 0,
        marginHorizontal: 0,
        marginVertical: 0,
    },
    cardContent: {
        marginHorizontal: 0,
        marginVertical: 20,
        //marginVertical: Dimensions.get('window').height / 35,
    },
    card2: {
        borderRadius: 8,
        elevation: 3,
        backgroundColor: "white",
        shadowOffset: { width: 1, height: 1 },
        shadowColor: "#333",
        shadowOpacity: 0,
        shadowRadius: 0,
        //marginVertical: 50,
        marginVertical: 0,
        marginHorizontal: 20,
        //marginHorizontal: Dimensions.get('window').height / 35,

        height: Dimensions.get("window").height / 1.49,
        //height: 450
    },
    cardContent2: {
        marginHorizontal: 0,
        //marginVertical: 20,
        marginVertical: Dimensions.get("window").height / 35,
    },
});

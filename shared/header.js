import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  StatusBar,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Dimensions } from "react-native";

export default function Header({ navigation, title }) {
  const openMenu = () => {
    navigation.openDrawer();
  };

  if (StatusBar.currentHeight < 25 || StatusBar.currentHeight == undefined) {
    return (
      <ImageBackground style={styles.header}>
        <MaterialIcons
          name="menu"
          size={Dimensions.get("window").height / 20}
          onPress={openMenu}
          style={styles.icon}
        />
        <View style={styles.headerTitle}>
          <Image />
          <Text style={styles.headerText}>{title} </Text>
        </View>
      </ImageBackground>
    );
  }
  if (StatusBar.currentHeight > 24) {
    return (
      <ImageBackground style={styles.statusHeader}>
        <MaterialIcons
          name="menu"
          size={Dimensions.get("window").height / 20}
          onPress={openMenu}
          style={styles.statusIcon}
        />
        <View style={styles.headerTitle}>
          <Image />
          <Text style={styles.statusHeaderText}>{title} </Text>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    width: Dimensions.get("window").width,
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  headerText: {
    fontFamily: "nunito-bold",
    fontWeight: "bold",
    //fontSize: 35,
    fontSize: Dimensions.get("window").height / 19,
    color: "#38B743",
    letterSpacing: 1,
    textAlign: "center",
    marginBottom: 0,
  },
  statusHeader: {
    width: Dimensions.get("window").width,
    height: "100%",
    flexDirection: "row",
    //alignItems: 'flex-start',
    justifyContent: "center",
    flex: 1,
    marginBottom: 0,
  },
  icon: {
    flex: 1,
    position: "absolute",
    color: "#38B743",
    //left: 10,
    left: Dimensions.get("window").height / 50,
    marginBottom: 0,
  },
  statusHeaderText: {
    fontFamily: "nunito-bold",
    fontWeight: "bold",
    //fontSize: 35,
    fontSize: Dimensions.get("window").height / 19,
    color: "#38B743",
    letterSpacing: 1,
    textAlign: "center",
    marginBottom: StatusBar.currentHeight,
  },
  statusIcon: {
    flex: 1,
    position: "absolute",
    color: "#38B743",
    //left: 10,
    left: Dimensions.get("window").height / 50,
    marginBottom: 0,
  },

  headerTitle: {
    flexDirection: "row",
  },
});

import { createStackNavigator } from "react-navigation-stack";
import Asetukset from "../screens/settings";
import Header from "../shared/header";
import React from "react";

const screens = {
  Asetukset: {
    screen: Asetukset,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="Asetukset" />,
      };
    },
  },
};

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: { backgroundColor: "white", height: 70 },
  },
});

export default AboutStack;

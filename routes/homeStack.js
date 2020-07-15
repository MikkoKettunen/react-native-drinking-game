import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Pelaa from "../shared/game";
import Header from "../shared/header";
import React from "react";

const screens = {
  Pelaa: {
    screen: Pelaa,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="Hitler" />,
      };
    },
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: { backgroundColor: "white", height: 70 },
  },
});

export default HomeStack;

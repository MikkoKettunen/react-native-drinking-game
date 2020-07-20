import React, { useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { globalStyles } from "./styles/global";
import { SafeAreaView, StatusBar } from "react-native";
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Game from "./shared/game";
import Asetukset from "./screens/settings";

const Tab = createBottomTabNavigator();

const cardState = {
  card: 0,
};

function cardReducer(state = cardState, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        card: state.card + 1,
      };
    case "NEWGAME":
      return {
        card: (state.card = 0),
      };
    default:
      return state;
  }
}
const store = createStore(cardReducer);

const getFonts = () =>
  Font.loadAsync({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    if (StatusBar.currentHeight > 24) {
      return (
        <Provider store={store}>
          <SafeAreaView style={globalStyles.AndroidSafeArea}>
          <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Pelaa') {
              return (
                <Ionicons
                  name= 'ios-play'
                  size={30}
                  color={color}
                />
              );
            } else if (route.name === 'Asetukset') {
              return (
                <Ionicons
                  name={focused ? 'ios-list-box' : 'ios-list'}
                  size={30}
                  color={color}
                />
              );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: '#38B743',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Pelaa" component={Game} />
        <Tab.Screen name="Asetukset" component={Asetukset} />
      </Tab.Navigator>
    </NavigationContainer>
          </SafeAreaView>
        </Provider>
      );
    }
    if (StatusBar.currentHeight < 25 || StatusBar.currentHeight == undefined) {
      return (
        <Provider store={store}>
          <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Pelaa') {
              return (
                <Ionicons
                  name= 'ios-play'
                  size={30}
                  color={color}
                />
              );
            } else if (route.name === 'Asetukset') {
              return (
                <Ionicons
                  name={focused ? 'ios-list-box' : 'ios-list'}
                  size={30}
                  color={color}
                />
              );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: '#38B743',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Pelaa" component={Game} />
        <Tab.Screen name="Asetukset" component={Asetukset} />
      </Tab.Navigator>
    </NavigationContainer>
        </Provider>
      );
    }
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
  }
}

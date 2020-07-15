import React, { useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import Navigator from "./routes/drawer";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { globalStyles } from "./styles/global";
import { SafeAreaView, StatusBar } from "react-native";

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
            <Navigator />
          </SafeAreaView>
        </Provider>
      );
    }
    if (StatusBar.currentHeight < 25 || StatusBar.currentHeight == undefined) {
      return (
        <Provider store={store}>
          <Navigator />
        </Provider>
      );
    }
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
  }
}

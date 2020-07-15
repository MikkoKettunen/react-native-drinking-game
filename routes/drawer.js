import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import HomeStack from "./homeStack";
import AboutStack from "./aboutStack";

const RootDrawerNavigator = createDrawerNavigator({
  Pelaa: {
    screen: HomeStack,
  },
  Asetukset: {
    screen: AboutStack,
  },
});

export default createAppContainer(RootDrawerNavigator);

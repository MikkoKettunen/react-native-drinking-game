import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Platform,
  Alert,
} from "react-native";
import cardDeck from "./cardDeck";
import Card from "./card";
import { ScrollView } from "react-native-gesture-handler";
import { globalStyles } from "../styles/global";
import { connect } from "react-redux";
import { Card2 } from "./card";
import { Dimensions } from "react-native";
import { AsyncStorage } from "react-native";
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from "expo-ads-admob";

const deck1 = new cardDeck();
deck1.shuffle();

class Game extends React.Component {
  get cardImage() {
    switch (deck1.deck[this.props.card]) {
      case "AH":
        return require("../assets/images/PNG/AH.png");
      case "2H":
        return require("../assets/images/PNG/2H.png");
      case "3H":
        return require("../assets/images/PNG/3H.png");
      case "4H":
        return require("../assets/images/PNG/4H.png");
      case "5H":
        return require("../assets/images/PNG/5H.png");
      case "6H":
        return require("../assets/images/PNG/6H.png");
      case "7H":
        return require("../assets/images/PNG/7H.png");
      case "8H":
        return require("../assets/images/PNG/8H.png");
      case "9H":
        return require("../assets/images/PNG/9H.png");
      case "10H":
        return require("../assets/images/PNG/10H.png");
      case "JH":
        return require("../assets/images/PNG/JH.png");
      case "QH":
        return require("../assets/images/PNG/QH.png");
      case "KH":
        return require("../assets/images/PNG/KH.png");
      case "AS":
        return require("../assets/images/PNG/AS.png");
      case "2S":
        return require("../assets/images/PNG/2S.png");
      case "3S":
        return require("../assets/images/PNG/3S.png");
      case "4S":
        return require("../assets/images/PNG/4S.png");
      case "5S":
        return require("../assets/images/PNG/5S.png");
      case "6S":
        return require("../assets/images/PNG/6S.png");
      case "7S":
        return require("../assets/images/PNG/7S.png");
      case "8S":
        return require("../assets/images/PNG/8S.png");
      case "9S":
        return require("../assets/images/PNG/9S.png");
      case "10S":
        return require("../assets/images/PNG/10S.png");
      case "JS":
        return require("../assets/images/PNG/JS.png");
      case "QS":
        return require("../assets/images/PNG/QS.png");
      case "KS":
        return require("../assets/images/PNG/KS.png");
      case "AC":
        return require("../assets/images/PNG/AC.png");
      case "2C":
        return require("../assets/images/PNG/2C.png");
      case "3C":
        return require("../assets/images/PNG/3C.png");
      case "4C":
        return require("../assets/images/PNG/4C.png");
      case "5C":
        return require("../assets/images/PNG/5C.png");
      case "6C":
        return require("../assets/images/PNG/6C.png");
      case "7C":
        return require("../assets/images/PNG/7C.png");
      case "8C":
        return require("../assets/images/PNG/8C.png");
      case "9C":
        return require("../assets/images/PNG/9C.png");
      case "10C":
        return require("../assets/images/PNG/100C.png");
      case "JC":
        return require("../assets/images/PNG/JC.png");
      case "QC":
        return require("../assets/images/PNG/QC.png");
      case "KC":
        return require("../assets/images/PNG/KC.png");
      case "AD":
        return require("../assets/images/PNG/AD.png");
      case "2D":
        return require("../assets/images/PNG/2D.png");
      case "3D":
        return require("../assets/images/PNG/3D.png");
      case "4D":
        return require("../assets/images/PNG/4D.png");
      case "5D":
        return require("../assets/images/PNG/5D.png");
      case "6D":
        return require("../assets/images/PNG/6D.png");
      case "7D":
        return require("../assets/images/PNG/7D.png");
      case "8D":
        return require("../assets/images/PNG/8D.png");
      case "9D":
        return require("../assets/images/PNG/9D.png");
      case "10D":
        return require("../assets/images/PNG/10D.png");
      case "JD":
        return require("../assets/images/PNG/JD.png");
      case "QD":
        return require("../assets/images/PNG/QD.png");
      case "KD":
        return require("../assets/images/PNG/KD.png");
      /*'default:
        return require('../assets/images/PNG/H.png');*/
    }
  }

  get rules() {
    switch (deck1.deck[this.props.card]) {
      case "AH":
      case "AS":
      case "AC":
      case "AD":
        return <Text>{this.state.A}</Text>;
      case "2H":
      case "2S":
      case "2C":
      case "2D":
        return <Text>{this.state.two}</Text>;
      case "3H":
      case "3S":
      case "3C":
      case "3D":
        return <Text>{this.state.three}</Text>;
      case "4H":
      case "4S":
      case "4C":
      case "4D":
        return <Text>{this.state.four}</Text>;
      case "5H":
      case "5S":
      case "5C":
      case "5D":
        return <Text>{this.state.five}</Text>;
      case "6H":
      case "6S":
      case "6C":
      case "6D":
        return <Text>{this.state.six}</Text>;
      case "7H":
      case "7S":
      case "7C":
      case "7D":
        return <Text>{this.state.seven}</Text>;
      case "8H":
      case "8S":
      case "8C":
      case "8D":
        return <Text>{this.state.eight}</Text>;
      case "9H":
      case "9S":
      case "9C":
      case "9D":
        return <Text>{this.state.nine}</Text>;
      case "10H":
      case "10S":
      case "10C":
      case "10D":
        return <Text>{this.state.ten}</Text>;
      case "JH":
      case "JS":
      case "JC":
      case "JD":
        return <Text>{this.state.J}</Text>;
      case "QH":
      case "QS":
      case "QC":
      case "QD":
        return <Text>{this.state.Q}</Text>;
      case "KH":
      case "KS":
      case "KC":
      case "KD":
        return <Text>{this.state.K}</Text>;
    }
  }

  handleOnPress = () => {
    if (this.props.card < 51) {
      this.props.dispatch({ type: "INCREMENT" });
    } else {
      this.setState({ startgame: false });
      this.setState({ endgame: true });
      deck1.shuffle();
    }
  };

  // Android sovellustunnus: ca-app-pub-4333506094316913~9687368008
  // Android banner: ca-app-pub-4333506094316913/5545491758
  // Android interstitial: ca-app-pub-4333506094316913/1961469967

  // ioS sovellustunnus: ca-app-pub-4333506094316913~2727756723
  // iOS banner: ca-app-pub-4333506094316913/3849266704
  // iOS interstitial: ca-app-pub-4333506094316913/1031531678

  constructor(props) {
    super(props);
    this.state = {
      overlayVisible: true,
      adTime: false,
      startgame: false,
      endgame: false,
      bannerAdId:
        Platform.OS === "ios"
          ? "ca-app-pub-4333506094316913/3849266704"
          : "ca-app-pub-4333506094316913/5545491758",
      interstitialAdId:
        Platform.OS === "ios"
          ? "ca-app-pub-4333506094316913/1031531678"
          : "	ca-app-pub-3940256099942544/1033173712",
    };
  }

  async componentDidMount() {
    await setTestDeviceIDAsync("EMULATOR");
  }
  /*
  showInterstitial = async () => {
    if (
      this.props.card == 15 ||
      this.props.card == 30 ||
      this.props.card == 51
    ) {
      AdMobInterstitial.setAdUnitID(this.state.interstitialAdId);
      await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: false });
      await AdMobInterstitial.showAdAsync();
    }
  };
*/
  componentDidMount() {
    const { navigation } = this.props;
    this.getData();
    this.showAlert();
    this.focusListener = navigation.addListener("didFocus", () => {
      this.getData();
    });
  }

  start = () => {
    this.setState({ startgame: true });
  };

  startOver = () => {
    this.setState({ startgame: false });
    this.setState({ endgame: false });
    this.props.dispatch({ type: "NEWGAME" });
  };

  getData = async () => {
    try {
      const value = await AsyncStorage.getItem("A");
      const value2 = await AsyncStorage.getItem("two");
      const value3 = await AsyncStorage.getItem("three");
      const value4 = await AsyncStorage.getItem("four");
      const value5 = await AsyncStorage.getItem("five");
      const value6 = await AsyncStorage.getItem("six");
      const value7 = await AsyncStorage.getItem("seven");
      const value8 = await AsyncStorage.getItem("eight");
      const value9 = await AsyncStorage.getItem("nine");
      const value10 = await AsyncStorage.getItem("ten");
      const value11 = await AsyncStorage.getItem("J");
      const value12 = await AsyncStorage.getItem("Q");
      const value13 = await AsyncStorage.getItem("K");
      if (value !== null) {
        this.setState({ A: value });
      }
      if (value2 !== null) {
        this.setState({ two: value2 });
      }
      if (value3 !== null) {
        this.setState({ three: value3 });
      }
      if (value4 !== null) {
        this.setState({ four: value4 });
      }
      if (value5 !== null) {
        this.setState({ five: value5 });
      }
      if (value6 !== null) {
        this.setState({ six: value6 });
      }
      if (value7 !== null) {
        this.setState({ seven: value7 });
      }
      if (value8 !== null) {
        this.setState({ eight: value8 });
      }
      if (value9 !== null) {
        this.setState({ nine: value9 });
      }
      if (value10 !== null) {
        this.setState({ ten: value10 });
      }
      if (value11 !== null) {
        this.setState({ J: value11 });
      }
      if (value12 !== null) {
        this.setState({ Q: value12 });
      }
      if (value13 !== null) {
        this.setState({ K: value13 });
      }
    } catch (e) {
      // error reading code
    }
  };

  hideOverlay = () => {
    this.setState({ overlayVisible: false });
  };

  showAlert2 = () => {
    alert("Muista juoda vastuullisesti");
    //this.setState({ overlayVisible: false });
  };

  showAlert = () => {
    Alert.alert(
      "Huomio",
      "Muista juoda vastuullisesti!",
      [
        {
          text: "OK",
        },
      ],
      { cancelable: false }
    );
  };

  render() {
    this.setDeviceId;
    if (this.state.startgame == false && this.state.endgame == false) {
      return (
        <View style={globalStyles.container}>
          <TouchableOpacity onPress={this.start}>
            <Card2>
              <Text style={globalStyles.blockText2}>
                Aloita peli painamalla
              </Text>
              <Text style={globalStyles.blockText3}>
                Ohjeet ja säännöt löytyvät asetuksista
              </Text>
            </Card2>
          </TouchableOpacity>
        </View>
      );
    }

    if (this.state.startgame == false && this.state.endgame == true) {
      return (
        <View style={globalStyles.container}>
          <TouchableOpacity onPress={this.startOver}>
            <Card2>
              <Text style={globalStyles.blockText4}>Peli loppui</Text>
              <Text style={globalStyles.blockText5}>
                Hurjapäät voivat jatkaa painamalla
              </Text>
            </Card2>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View style={globalStyles.container}>
          <ScrollView>
            <Text style={styles.progressText}>
              {" "}
              {this.props.card - 52} korttia jäljellä{" "}
            </Text>

            <TouchableOpacity
              onPress={this.handleOnPress}
              {...this.rules}
              //{...this.showInterstitial()}
            >
              <Image style={styles.img} source={this.cardImage} />
            </TouchableOpacity>

            <Card>
              <Text style={globalStyles.blockText}> {this.rules} </Text>
            </Card>
          </ScrollView>
        </View>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  card: state.card,
});

const styles = StyleSheet.create({
  img: {
    flex: 1,
    width: Dimensions.get("window").width,
    height:
      Dimensions.get("window").height - Dimensions.get("window").height / 2.6,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: 0,
  },
  progressText: {
    fontFamily: "nunito-regular",
    //fontSize: 20,
    fontSize: Dimensions.get("window").height / 32,
    textAlign: "center",
    color: "white",
  },
});

export default connect(mapStateToProps)(Game);

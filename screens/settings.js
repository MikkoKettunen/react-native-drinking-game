import React, { Fragment } from "react";
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    TextInput,
    Image,
    Alert,
    Modal,
    TouchableOpacity,
    _ScrollView,
} from "react-native";
import { globalStyles } from "../styles/global";
import { Dimensions } from "react-native";
import { AsyncStorage } from "react-native";
import { Divider, Button } from "react-native-elements";
import * as yup from "yup";
import { Formik } from "formik";
import { MaterialIcons } from "@expo/vector-icons";

class Settings extends React.Component {
    state = {
        toolTipVisible: true,
        popupVisible: true,
        showButton: false,
        showButton2: false,
        showButton3: false,
        showButton4: false,
        showButton5: false,
        showButton6: false,
        showButton7: false,
        showButton8: false,
        showButton9: false,
        showButton10: false,
        showButton11: false,
        showButton12: false,
        showButton13: false,
        showModal: false,
        showRealApp: false,
        A: "Kortin nostaja juo 1",
        two: "Kortin nostaja juo 2",
        three: "Kortin nostaja juo 1, seuraava pelaaja 2 ja seuraava 3",
        four: "Huutakaa Hitler! Viimeinen huutaja juo 3",
        five: "Huutakaa Hitler! Viimeinen huutaja juo 3",
        six:
            "Kategoria. Kortin nostaja päättää kategorian ja sanoo siihen kuuluvan asian. Pelaaja joka ei enää keksi tai sanoo jo aiemmin sanotun asian, joutuu juomaan 3. Esimerkkikategoria: automerkit",
        seven:
            "VESIPUTOUS! Kaikki alkavat juomaan samaan aikaan, kun kortin nostanut pelaaja lopettaa juomisen niin seuraava saa lopettaa ja sen jälkeen seuraava jne.",
        eight:
            "Riimi. Kortin nostanut pelaaja sanoo sanan ja se joka ei enää keksi riimiä kyseiselle sanalle, juo 3",
        nine:
            "Sääntö. Kortin nostanut pelaaja saa keksiä säännön, joka pätee loppupelin ajan. Esimerkkisääntö: Pitää juoda aina vasemmalla kädellä",
        ten:
            "Kysymyskortti. Jos kukaan vastaa kortin nostaneen pelaajan kysymykseen pelin aikana, joutuu hän juoda 3. Peliin liittyviin kysymyksiin saa vastata ja kysymysoikeus loppuu kun seuraava pelaaja nostaa saman kortin",
        J:
            "Taukokortti. Kortin nostanut pelaaja on oikeutettu yhteen lyhyeen taukoon pelin aikana",
        Q:
            "Orjakortti. Kortin nostaja saa päättää itselleen henkilön, joka joutuu juomaan aina, kun hän juo.",
        K:
            "Tarina. Kortin nostaja sanoo sanan ja jokainen jatkaa tarinaa uudella sanalla, toistaen ensiksi jo kerrotun tarinan. Epäonnistuja juo 3.",
    };

    initialState = async () => {
        try {
            await AsyncStorage.setItem("A", "Kortin nostaja juo 1");
            await AsyncStorage.setItem("two", "Kortin nostaja juo 2");
            await AsyncStorage.setItem(
                "three",
                "Kortin nostaja juo 1, seuraava pelaaja 2 ja seuraava 3"
            );
            await AsyncStorage.setItem(
                "four",
                "Huutakaa Hitler! Viimeinen huutaja juo 3"
            );
            await AsyncStorage.setItem(
                "five",
                "Huutakaa Hitler! Viimeinen huutaja juo 3"
            );
            await AsyncStorage.setItem(
                "six",
                "Kategoria. Kortin nostaja päättää kategorian ja sanoo siihen kuuluvan asian. Pelaaja joka ei enää keksi tai sanoo jo aiemmin sanotun asian, joutuu juomaan 3. Esimerkkikategoria: automerkit"
            );
            await AsyncStorage.setItem(
                "seven",
                "VESIPUTOUS! Kaikki alkavat juomaan samaan aikaan, kun kortin nostanut pelaaja lopettaa juomisen niin seuraava saa lopettaa ja sen jälkeen seuraava jne."
            );
            await AsyncStorage.setItem(
                "eight",
                "Riimi. Kortin nostanut pelaaja sanoo sanan ja se joka ei enää keksi riimiä kyseiselle sanalle, juo 3"
            );
            await AsyncStorage.setItem(
                "nine",
                "Sääntö. Kortin nostanut pelaaja saa keksiä säännön, joka pätee loppupelin ajan. Esimerkkisääntö: Pitää juoda aina vasemmalla kädellä"
            );
            await AsyncStorage.setItem(
                "ten",
                "Kysymyskortti. Jos kukaan vastaa kortin nostaneen pelaajan kysymykseen pelin aikana, joutuu hän juoda 3. Peliin liittyviin kysymyksiin saa vastata ja kysymysoikeus loppuu kun seuraava pelaaja nostaa saman kortin"
            );
            await AsyncStorage.setItem(
                "J",
                "Taukokortti. Kortin nostanut pelaaja on oikeutettu yhteen lyhyeen taukoon pelin aikana"
            );
            await AsyncStorage.setItem(
                "Q",
                "Orjakortti. Kortin nostaja saa päättää itselleen henkilön, joka joutuu juomaan aina, kun hän juo."
            );
            await AsyncStorage.setItem(
                "K",
                "Tarina. Kortin nostaja sanoo sanan ja jokainen jatkaa tarinaa uudella sanalla, toistaen ensiksi jo kerrotun tarinan. Epäonnistuja juo 3."
            );
            this.setState({ A: "Kortin nostaja juo 1" });
            this.setState({ two: "Kortin nostaja juo 2" });
            this.setState({
                three: "Kortin nostaja juo 1, seuraava pelaaja 2 ja seuraava 3",
            });
            this.setState({ four: "Huutakaa Hitler! Viimeinen huutaja juo 3" });
            this.setState({ five: "Huutakaa Hitler! Viimeinen huutaja juo 3" });
            this.setState({
                six:
                    "Kategoria. Kortin nostaja päättää kategorian ja sanoo siihen kuuluvan asian. Pelaaja joka ei enää keksi tai sanoo jo aiemmin sanotun asian, joutuu juomaan 3. Esimerkkikategoria: automerkit",
            });
            this.setState({
                seven:
                    "VESIPUTOUS! Kaikki alkavat juomaan samaan aikaan, kun kortin nostanut pelaaja lopettaa juomisen niin seuraava saa lopettaa ja sen jälkeen seuraava saa lopettaa ja sen jälkeen seuraava jne.",
            });
            this.setState({
                eight:
                    "Riimi. Kortin nostanut pelaaja sanoo sanan ja se joka ei enää keksi riimiä kyseiselle sanalle, juo 3",
            });
            this.setState({
                nine:
                    "Sääntö. Kortin nostanut pelaaja saa keksiä säännön, joka pätee loppupelin ajan. Esimerkkisääntö: Pitää juoda aina vasemmalla kädellä",
            });
            this.setState({
                ten:
                    "Kysymyskortti. Jos kukaan vastaa kortin nostaneen pelaajan kysymykseen pelin aikana, joutuu hän juoda 3. Peliin liittyviin kysymyksiin saa vastata ja kysymysoikeus loppuu kun seuraava pelaaja nostaa saman kortin",
            });
            this.setState({
                J:
                    "Taukokortti. Kortin nostanut pelaaja on oikeutettu yhteen lyhyeen taukoon pelin aikana",
            });
            this.setState({
                Q:
                    "Orjakortti. Kortin nostaja saa päättää itselleen henkilön, joka joutuu juomaan aina, kun hän juo.",
            });
            this.setState({
                K:
                    "Tarina. Kortin nostaja sanoo sanan ja jokainen jatkaa tarinaa uudella sanalla, toistaen ensiksi jo kerrotun tarinan. Epäonnistuja juo 3.",
            });
        } catch (err) {
            console.log(err);
        }
    };

    constructor(props) {
        super(props);
        this.getData();
        this.popupRef = React.createRef();
        this.myTextInput = React.createRef();
        this.myTextInput2 = React.createRef();
        this.myTextInput3 = React.createRef();
        this.myTextInput4 = React.createRef();
        this.myTextInput5 = React.createRef();
        this.myTextInput6 = React.createRef();
        this.myTextInput7 = React.createRef();
        this.myTextInput8 = React.createRef();
        this.myTextInput9 = React.createRef();
        this.myTextInput10 = React.createRef();
        this.myTextInput11 = React.createRef();
        this.myTextInput12 = React.createRef();
        this.myTextInput13 = React.createRef();
    }

    componentDidMount() {
        this.getData();
        const { navigation } = this.props;
        this.focusListener = navigation.addListener("didFocus", () => {
            this.getData();
            this.hideButton();
        });
    }

    onSubmitA = async () => {
        try {
            await AsyncStorage.setItem("A", this.state.A);
        } catch (err) {
            console.log(err);
        }
    };

    onSubmit2 = async () => {
        try {
            await AsyncStorage.setItem("two", this.state.two);
        } catch (err) {
            console.log(err);
        }
    };

    onSubmit3 = async () => {
        try {
            await AsyncStorage.setItem("three", this.state.three);
        } catch (err) {
            console.log(err);
        }
    };

    onSubmit4 = async () => {
        try {
            await AsyncStorage.setItem("four", this.state.four);
        } catch (err) {
            console.log(err);
        }
    };

    onSubmit5 = async () => {
        try {
            await AsyncStorage.setItem("five", this.state.five);
        } catch (err) {
            console.log(err);
        }
    };

    onSubmit6 = async () => {
        try {
            await AsyncStorage.setItem("six", this.state.six);
        } catch (err) {
            console.log(err);
        }
    };

    onSubmit7 = async () => {
        try {
            await AsyncStorage.setItem("seven", this.state.seven);
        } catch (err) {
            console.log(err);
        }
    };

    onSubmit8 = async () => {
        try {
            await AsyncStorage.setItem("eight", this.state.eight);
        } catch (err) {
            console.log(err);
        }
    };

    onSubmit9 = async () => {
        try {
            await AsyncStorage.setItem("nine", this.state.nine);
        } catch (err) {
            console.log(err);
        }
    };

    onSubmit10 = async () => {
        try {
            await AsyncStorage.setItem("ten", this.state.ten);
        } catch (err) {
            console.log(err);
        }
    };

    onSubmit11 = async () => {
        try {
            await AsyncStorage.setItem("J", this.state.J);
        } catch (err) {
            console.log(err);
        }
    };

    onSubmit12 = async () => {
        try {
            await AsyncStorage.setItem("Q", this.state.Q);
        } catch (err) {
            console.log(err);
        }
    };

    onSubmit13 = async () => {
        try {
            await AsyncStorage.setItem("K", this.state.K);
        } catch (err) {
            console.log(err);
        }
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

    showRule = () => {
        if (this.state.A.length > 0) return this.state.A;
    };
    showRule2 = () => {
        if (this.state.two.length > 0) return this.state.two;
    };
    showRule3 = () => {
        if (this.state.three.length > 0) return this.state.three;
    };
    showRule4 = () => {
        if (this.state.four.length > 0) return this.state.four;
    };
    showRule5 = () => {
        if (this.state.five.length > 0) return this.state.five;
    };
    showRule6 = () => {
        if (this.state.six.length > 0) return this.state.six;
    };
    showRule7 = () => {
        if (this.state.seven.length > 0) return this.state.seven;
    };
    showRule8 = () => {
        if (this.state.eight.length > 0) return this.state.eight;
    };
    showRule9 = () => {
        if (this.state.nine.length > 0) return this.state.nine;
    };
    showRule10 = () => {
        if (this.state.ten.length > 0) return this.state.ten;
    };
    showRule11 = () => {
        if (this.state.J.length > 0) return this.state.J;
    };
    showRule12 = () => {
        if (this.state.Q.length > 0) return this.state.Q;
    };
    showRule13 = () => {
        if (this.state.K.length > 0) return this.state.K;
    };

    returnAlert = () => {
        Alert.alert(
            "Huomio",
            "Haluatko varmasti palauttaa alkuperäiset säännöt?",
            [
                {
                    text: "Peruuta",
                    onPress: () => {
                        this.hideButton();
                    },
                    style: "cancel",
                },
                {
                    text: "OK",
                    onPress: () => {
                        this.initialState();
                        this.returnAlertOk();
                    },
                },
            ],
            { cancelable: false }
        );
    };
    returnAlertOk = () => {
        alert("Alkuperäiset säännöt palautettu!");
        this.hideButton();
    };

    showButton = () => {
        this.setState({ showButton: true });
        this.setState({ toolTipVisible: false });
    };
    showButton2 = () => {
        this.setState({ showButton2: true });
        this.setState({ toolTipVisible: false });
    };
    showButton3 = () => {
        this.setState({ showButton3: true });
        this.setState({ toolTipVisible: false });
    };
    showButton4 = () => {
        this.setState({ showButton4: true });
        this.setState({ toolTipVisible: false });
    };
    showButton5 = () => {
        this.setState({ showButton5: true });
        this.setState({ toolTipVisible: false });
    };
    showButton6 = () => {
        this.setState({ showButton6: true });
        this.setState({ toolTipVisible: false });
    };
    showButton7 = () => {
        this.setState({ showButton7: true });
        this.setState({ toolTipVisible: false });
    };
    showButton8 = () => {
        this.setState({ showButton8: true });
        this.setState({ toolTipVisible: false });
    };
    showButton9 = () => {
        this.setState({ showButton9: true });
        this.setState({ toolTipVisible: false });
    };
    showButton10 = () => {
        this.setState({ showButton10: true });
        this.setState({ toolTipVisible: false });
    };
    showButton11 = () => {
        this.setState({ showButton11: true });
        this.setState({ toolTipVisible: false });
    };
    showButton12 = () => {
        this.setState({ showButton12: true });
        this.setState({ toolTipVisible: false });
    };
    showButton13 = () => {
        this.setState({ showButton13: true });
        this.setState({ toolTipVisible: false });
    };

    hideButton = () => {
        this.setState({
            showButton: false,
            showButton2: false,
            showButton3: false,
            showButton4: false,
            showButton5: false,
            showButton6: false,
            showButton7: false,
            showButton8: false,
            showButton9: false,
            showButton10: false,
            showButton11: false,
            showButton12: false,
            showButton13: false,
        });
    };

    showToolTip = () => {
        this.setState({ toolTipVisible: true });
    };
    hideTooltip = () => {
        this.setState({ toolTipVisible: false });
    };

    showPopup = () => {
        if (this.state.popupVisible == true) {
            this.popupRef.current.toggleTooltip();
        }
    };

    scroll = () => {
        this.refs._scrollView.scrollTo({
            x: 0,
            y: Dimensions.get("window").height / 1.2,
            animated: true,
        });
    };

    render() {
        return (
            <View style={globalStyles.container2}>
                <ScrollView ref="_scrollView" scrollEventThrottle={16}>
                    <View style={styles.cardContainer2}>
                        <Text style={styles.containerHeader}>
                            Kuinka pelata?
                        </Text>
                        <Text style={styles.containerText}>
                            Pelaaja nostaa kortin ja toimii sääntöjen
                            mukaisesti. Tämän jälkeen seuraava pelaaja nostaa
                            kortin jne...
                        </Text>
                    </View>

                    <View style={styles.cardContainer2}>
                        <Text style={styles.containerHeader}>Säännöt</Text>
                        <Text style={styles.containerText}>
                            Jokaisella numerolla on oma sääntönsä, maalla ei ole
                            väliä. Alempana voit tarkastella ja muokata
                            sääntöjä.
                        </Text>
                    </View>

                    <View style={styles.cardContainer2}>
                        <Text style={styles.containerHeader}>Muokkaus</Text>
                        <Text style={styles.containerText}>
                            Paina korttia muokataksesi sääntöä. Alkuperäiset
                            säännöt voi aina palauttaa sivun alareunasta.
                        </Text>
                    </View>

                    <Divider style={styles.divider} />

                    {/* Rule 1 */}
                    <View style={styles.cardContainer}>
                        <TouchableOpacity onPress={this.showButton}>
                            <Image
                                style={styles.containerImage}
                                source={require("../assets/images/PNG/AH.png")}
                            />
                        </TouchableOpacity>
                        <Text style={styles.containerText}>
                            {this.showRule()}
                        </Text>
                    </View>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={this.state.showButton}
                    >
                        <View style={globalStyles.container3}>
                            <MaterialIcons
                                name="close"
                                style={styles.modalClose}
                                size={24}
                                onPress={this.hideButton}
                            />

                            <Formik
                                initialValues={{ rule: "" }}
                                onSubmit={(values) => {
                                    Alert.alert(
                                        "Huomio",
                                        "Haluatko varmasti vaihtaa säännön?",
                                        [
                                            {
                                                text: "Peruuta",
                                                style: "cancel",
                                            },

                                            {
                                                text: "OK",
                                                onPress: () => {
                                                    const value = JSON.stringify(
                                                        values["rule"]
                                                    );

                                                    this.setState({
                                                        A: value.replace(
                                                            /['"]+/g,
                                                            ""
                                                        ),
                                                    });
                                                    this.onSubmitA();
                                                    this.hideButton();
                                                },
                                            },
                                        ],
                                        { cancelable: false }
                                    );
                                }}
                                validationSchema={yup.object().shape({
                                    rule: yup.string().required(),
                                })}
                            >
                                {({
                                    values,
                                    handleChange,
                                    errors,
                                    setFieldTouched,
                                    touched,
                                    isValid,
                                    handleSubmit,
                                }) => (
                                    <Fragment>
                                        <TextInput
                                            maxLength={300}
                                            style={styles.textInput}
                                            returnKeyType={"done"}
                                            ref={this.myTextInput}
                                            value={values.rule}
                                            multiline={true}
                                            onChangeText={handleChange("rule")}
                                            onBlur={() =>
                                                setFieldTouched("rule")
                                            }
                                            placeholder="Kirjoita oma sääntö"
                                            placeholderTextColor="#F8F8FF"
                                        />
                                        {touched.rule && errors.rule && (
                                            <Text style={styles.errorText}>
                                                *Pakollinen kenttä
                                            </Text>
                                        )}

                                        <View style={styles.buttonContainer}>
                                            <Button
                                                title="Vaihda"
                                                disabled={!isValid}
                                                onPress={handleSubmit}
                                            />
                                        </View>
                                    </Fragment>
                                )}
                            </Formik>
                        </View>
                    </Modal>

                    {/* Rule 2 */}
                    <View style={styles.cardContainer}>
                        <TouchableOpacity onPress={this.showButton2}>
                            <Image
                                style={styles.containerImage}
                                source={require("../assets/images/PNG/2H.png")}
                            />
                        </TouchableOpacity>
                        <Text style={styles.containerText}>
                            {this.showRule2()}
                        </Text>
                    </View>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={this.state.showButton2}
                    >
                        <View style={globalStyles.container3}>
                            <MaterialIcons
                                name="close"
                                style={styles.modalClose}
                                size={24}
                                onPress={this.hideButton}
                            />

                            <Formik
                                initialValues={{ rule: "" }}
                                onSubmit={(values) => {
                                    Alert.alert(
                                        "Huomio",
                                        "Haluatko varmasti vaihtaa säännön?",
                                        [
                                            {
                                                text: "Peruuta",
                                                style: "cancel",
                                            },

                                            {
                                                text: "OK",
                                                onPress: () => {
                                                    const value = JSON.stringify(
                                                        values["rule"]
                                                    );

                                                    this.setState({
                                                        two: value.replace(
                                                            /['"]+/g,
                                                            ""
                                                        ),
                                                    });
                                                    this.onSubmit2();
                                                    this.hideButton();
                                                },
                                            },
                                        ],
                                        { cancelable: false }
                                    );
                                }}
                                validationSchema={yup.object().shape({
                                    rule: yup.string().required(),
                                })}
                            >
                                {({
                                    values,
                                    handleChange,
                                    errors,
                                    setFieldTouched,
                                    touched,
                                    isValid,
                                    handleSubmit,
                                }) => (
                                    <Fragment>
                                        <TextInput
                                            maxLength={300}
                                            style={styles.textInput}
                                            returnKeyType={"done"}
                                            ref={this.myTextInput2}
                                            value={values.rule}
                                            multiline={true}
                                            onChangeText={handleChange("rule")}
                                            onBlur={() =>
                                                setFieldTouched("rule")
                                            }
                                            placeholder="Kirjoita oma sääntö"
                                            placeholderTextColor="#F8F8FF"
                                        />
                                        {touched.rule && errors.rule && (
                                            <Text style={styles.errorText}>
                                                *Pakollinen kenttä
                                            </Text>
                                        )}

                                        <View style={styles.buttonContainer}>
                                            <Button
                                                title="Vaihda"
                                                disabled={!isValid}
                                                onPress={handleSubmit}
                                            />
                                        </View>
                                    </Fragment>
                                )}
                            </Formik>
                        </View>
                    </Modal>

                    {/* Rule 3 */}
                    <View style={styles.cardContainer}>
                        <TouchableOpacity onPress={this.showButton3}>
                            <Image
                                style={styles.containerImage}
                                source={require("../assets/images/PNG/3H.png")}
                            />
                        </TouchableOpacity>
                        <Text style={styles.containerText}>
                            {this.showRule3()}
                        </Text>
                    </View>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={this.state.showButton3}
                    >
                        <View style={globalStyles.container3}>
                            <MaterialIcons
                                name="close"
                                style={styles.modalClose}
                                size={24}
                                onPress={this.hideButton}
                            />

                            <Formik
                                initialValues={{ rule: "" }}
                                onSubmit={(values) => {
                                    Alert.alert(
                                        "Huomio",
                                        "Haluatko varmasti vaihtaa säännön?",
                                        [
                                            {
                                                text: "Peruuta",
                                                style: "cancel",
                                            },

                                            {
                                                text: "OK",
                                                onPress: () => {
                                                    const value = JSON.stringify(
                                                        values["rule"]
                                                    );

                                                    this.setState({
                                                        three: value.replace(
                                                            /['"]+/g,
                                                            ""
                                                        ),
                                                    });
                                                    this.onSubmit3();
                                                    this.hideButton();
                                                },
                                            },
                                        ],
                                        { cancelable: false }
                                    );
                                }}
                                validationSchema={yup.object().shape({
                                    rule: yup.string().required(),
                                })}
                            >
                                {({
                                    values,
                                    handleChange,
                                    errors,
                                    setFieldTouched,
                                    touched,
                                    isValid,
                                    handleSubmit,
                                }) => (
                                    <Fragment>
                                        <TextInput
                                            maxLength={300}
                                            style={styles.textInput}
                                            returnKeyType={"done"}
                                            ref={this.myTextInput3}
                                            value={values.rule}
                                            multiline={true}
                                            onChangeText={handleChange("rule")}
                                            onBlur={() =>
                                                setFieldTouched("rule")
                                            }
                                            placeholder="Kirjoita oma sääntö"
                                            placeholderTextColor="#F8F8FF"
                                        />
                                        {touched.rule && errors.rule && (
                                            <Text style={styles.errorText}>
                                                *Pakollinen kenttä
                                            </Text>
                                        )}

                                        <View style={styles.buttonContainer}>
                                            <Button
                                                title="Vaihda"
                                                disabled={!isValid}
                                                onPress={handleSubmit}
                                            />
                                        </View>
                                    </Fragment>
                                )}
                            </Formik>
                        </View>
                    </Modal>

                    {/* Rule 4 */}
                    <View style={styles.cardContainer}>
                        <TouchableOpacity onPress={this.showButton4}>
                            <Image
                                style={styles.containerImage}
                                source={require("../assets/images/PNG/4H.png")}
                            />
                        </TouchableOpacity>
                        <Text style={styles.containerText}>
                            {this.showRule4()}
                        </Text>
                    </View>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={this.state.showButton4}
                    >
                        <View style={globalStyles.container3}>
                            <MaterialIcons
                                name="close"
                                style={styles.modalClose}
                                size={24}
                                onPress={this.hideButton}
                            />

                            <Formik
                                initialValues={{ rule: "" }}
                                onSubmit={(values) => {
                                    Alert.alert(
                                        "Huomio",
                                        "Haluatko varmasti vaihtaa säännön?",
                                        [
                                            {
                                                text: "Peruuta",
                                                style: "cancel",
                                            },

                                            {
                                                text: "OK",
                                                onPress: () => {
                                                    const value = JSON.stringify(
                                                        values["rule"]
                                                    );

                                                    this.setState({
                                                        four: value.replace(
                                                            /['"]+/g,
                                                            ""
                                                        ),
                                                    });
                                                    this.onSubmit4();
                                                    this.hideButton();
                                                },
                                            },
                                        ],
                                        { cancelable: false }
                                    );
                                }}
                                validationSchema={yup.object().shape({
                                    rule: yup.string().required(),
                                })}
                            >
                                {({
                                    values,
                                    handleChange,
                                    errors,
                                    setFieldTouched,
                                    touched,
                                    isValid,
                                    handleSubmit,
                                }) => (
                                    <Fragment>
                                        <TextInput
                                            maxLength={300}
                                            style={styles.textInput}
                                            returnKeyType={"done"}
                                            ref={this.myTextInput4}
                                            value={values.rule}
                                            multiline={true}
                                            onChangeText={handleChange("rule")}
                                            onBlur={() =>
                                                setFieldTouched("rule")
                                            }
                                            placeholder="Kirjoita oma sääntö"
                                            placeholderTextColor="#F8F8FF"
                                        />
                                        {touched.rule && errors.rule && (
                                            <Text style={styles.errorText}>
                                                *Pakollinen kenttä
                                            </Text>
                                        )}

                                        <View style={styles.buttonContainer}>
                                            <Button
                                                title="Vaihda"
                                                disabled={!isValid}
                                                onPress={handleSubmit}
                                            />
                                        </View>
                                    </Fragment>
                                )}
                            </Formik>
                        </View>
                    </Modal>

                    {/* Rule 5 */}
                    <View style={styles.cardContainer}>
                        <TouchableOpacity onPress={this.showButton5}>
                            <Image
                                style={styles.containerImage}
                                source={require("../assets/images/PNG/5H.png")}
                            />
                        </TouchableOpacity>
                        <Text style={styles.containerText}>
                            {this.showRule5()}
                        </Text>
                    </View>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={this.state.showButton5}
                    >
                        <View style={globalStyles.container3}>
                            <MaterialIcons
                                name="close"
                                style={styles.modalClose}
                                size={24}
                                onPress={this.hideButton}
                            />

                            <Formik
                                initialValues={{ rule: "" }}
                                onSubmit={(values) => {
                                    Alert.alert(
                                        "Huomio",
                                        "Haluatko varmasti vaihtaa säännön?",
                                        [
                                            {
                                                text: "Peruuta",
                                                style: "cancel",
                                            },

                                            {
                                                text: "OK",
                                                onPress: () => {
                                                    const value = JSON.stringify(
                                                        values["rule"]
                                                    );

                                                    this.setState({
                                                        five: value.replace(
                                                            /['"]+/g,
                                                            ""
                                                        ),
                                                    });
                                                    this.onSubmit5();
                                                    this.hideButton();
                                                },
                                            },
                                        ],
                                        { cancelable: false }
                                    );
                                }}
                                validationSchema={yup.object().shape({
                                    rule: yup.string().required(),
                                })}
                            >
                                {({
                                    values,
                                    handleChange,
                                    errors,
                                    setFieldTouched,
                                    touched,
                                    isValid,
                                    handleSubmit,
                                }) => (
                                    <Fragment>
                                        <TextInput
                                            maxLength={300}
                                            style={styles.textInput}
                                            returnKeyType={"done"}
                                            ref={this.myTextInput5}
                                            value={values.rule}
                                            multiline={true}
                                            onChangeText={handleChange("rule")}
                                            onBlur={() =>
                                                setFieldTouched("rule")
                                            }
                                            placeholder="Kirjoita oma sääntö"
                                            placeholderTextColor="#F8F8FF"
                                        />
                                        {touched.rule && errors.rule && (
                                            <Text style={styles.errorText}>
                                                *Pakollinen kenttä
                                            </Text>
                                        )}

                                        <View style={styles.buttonContainer}>
                                            <Button
                                                title="Vaihda"
                                                disabled={!isValid}
                                                onPress={handleSubmit}
                                            />
                                        </View>
                                    </Fragment>
                                )}
                            </Formik>
                        </View>
                    </Modal>

                    {/* Rule 6 */}
                    <View style={styles.cardContainer}>
                        <TouchableOpacity onPress={this.showButton6}>
                            <Image
                                style={styles.containerImage}
                                source={require("../assets/images/PNG/6H.png")}
                            />
                        </TouchableOpacity>
                        <Text style={styles.containerText}>
                            {this.showRule6()}
                        </Text>
                    </View>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={this.state.showButton6}
                    >
                        <View style={globalStyles.container3}>
                            <MaterialIcons
                                name="close"
                                style={styles.modalClose}
                                size={24}
                                onPress={this.hideButton}
                            />

                            <Formik
                                initialValues={{ rule: "" }}
                                onSubmit={(values) => {
                                    Alert.alert(
                                        "Huomio",
                                        "Haluatko varmasti vaihtaa säännön?",
                                        [
                                            {
                                                text: "Peruuta",
                                                style: "cancel",
                                            },

                                            {
                                                text: "OK",
                                                onPress: () => {
                                                    const value = JSON.stringify(
                                                        values["rule"]
                                                    );

                                                    this.setState({
                                                        six: value.replace(
                                                            /['"]+/g,
                                                            ""
                                                        ),
                                                    });
                                                    this.onSubmit6();
                                                    this.hideButton();
                                                },
                                            },
                                        ],
                                        { cancelable: false }
                                    );
                                }}
                                validationSchema={yup.object().shape({
                                    rule: yup.string().required(),
                                })}
                            >
                                {({
                                    values,
                                    handleChange,
                                    errors,
                                    setFieldTouched,
                                    touched,
                                    isValid,
                                    handleSubmit,
                                }) => (
                                    <Fragment>
                                        <TextInput
                                            maxLength={300}
                                            style={styles.textInput}
                                            returnKeyType={"done"}
                                            ref={this.myTextInput6}
                                            value={values.rule}
                                            multiline={true}
                                            onChangeText={handleChange("rule")}
                                            onBlur={() =>
                                                setFieldTouched("rule")
                                            }
                                            placeholder="Kirjoita oma sääntö"
                                            placeholderTextColor="#F8F8FF"
                                        />
                                        {touched.rule && errors.rule && (
                                            <Text style={styles.errorText}>
                                                *Pakollinen kenttä
                                            </Text>
                                        )}

                                        <View style={styles.buttonContainer}>
                                            <Button
                                                title="Vaihda"
                                                disabled={!isValid}
                                                onPress={handleSubmit}
                                            />
                                        </View>
                                    </Fragment>
                                )}
                            </Formik>
                        </View>
                    </Modal>

                    {/* Rule 7 */}
                    <View style={styles.cardContainer}>
                        <TouchableOpacity onPress={this.showButton7}>
                            <Image
                                style={styles.containerImage}
                                source={require("../assets/images/PNG/7H.png")}
                            />
                        </TouchableOpacity>
                        <Text style={styles.containerText}>
                            {this.showRule7()}
                        </Text>
                    </View>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={this.state.showButton7}
                    >
                        <View style={globalStyles.container3}>
                            <MaterialIcons
                                name="close"
                                style={styles.modalClose}
                                size={24}
                                onPress={this.hideButton}
                            />

                            <Formik
                                initialValues={{ rule: "" }}
                                onSubmit={(values) => {
                                    Alert.alert(
                                        "Huomio",
                                        "Haluatko varmasti vaihtaa säännön?",
                                        [
                                            {
                                                text: "Peruuta",
                                                style: "cancel",
                                            },

                                            {
                                                text: "OK",
                                                onPress: () => {
                                                    const value = JSON.stringify(
                                                        values["rule"]
                                                    );

                                                    this.setState({
                                                        seven: value.replace(
                                                            /['"]+/g,
                                                            ""
                                                        ),
                                                    });
                                                    this.onSubmit7();
                                                    this.hideButton();
                                                },
                                            },
                                        ],
                                        { cancelable: false }
                                    );
                                }}
                                validationSchema={yup.object().shape({
                                    rule: yup.string().required(),
                                })}
                            >
                                {({
                                    values,
                                    handleChange,
                                    errors,
                                    setFieldTouched,
                                    touched,
                                    isValid,
                                    handleSubmit,
                                }) => (
                                    <Fragment>
                                        <TextInput
                                            maxLength={300}
                                            style={styles.textInput}
                                            returnKeyType={"done"}
                                            ref={this.myTextInput7}
                                            value={values.rule}
                                            multiline={true}
                                            onChangeText={handleChange("rule")}
                                            onBlur={() =>
                                                setFieldTouched("rule")
                                            }
                                            placeholder="Kirjoita oma sääntö"
                                            placeholderTextColor="#F8F8FF"
                                        />
                                        {touched.rule && errors.rule && (
                                            <Text style={styles.errorText}>
                                                *Pakollinen kenttä
                                            </Text>
                                        )}

                                        <View style={styles.buttonContainer}>
                                            <Button
                                                title="Vaihda"
                                                disabled={!isValid}
                                                onPress={handleSubmit}
                                            />
                                        </View>
                                    </Fragment>
                                )}
                            </Formik>
                        </View>
                    </Modal>

                    {/* Rule 8 */}
                    <View style={styles.cardContainer}>
                        <TouchableOpacity onPress={this.showButton8}>
                            <Image
                                style={styles.containerImage}
                                source={require("../assets/images/PNG/8H.png")}
                            />
                        </TouchableOpacity>
                        <Text style={styles.containerText}>
                            {this.showRule8()}
                        </Text>
                    </View>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={this.state.showButton8}
                    >
                        <View style={globalStyles.container3}>
                            <MaterialIcons
                                name="close"
                                style={styles.modalClose}
                                size={24}
                                onPress={this.hideButton}
                            />

                            <Formik
                                initialValues={{ rule: "" }}
                                onSubmit={(values) => {
                                    Alert.alert(
                                        "Huomio",
                                        "Haluatko varmasti vaihtaa säännön?",
                                        [
                                            {
                                                text: "Peruuta",
                                                style: "cancel",
                                            },

                                            {
                                                text: "OK",
                                                onPress: () => {
                                                    const value = JSON.stringify(
                                                        values["rule"]
                                                    );

                                                    this.setState({
                                                        eight: value.replace(
                                                            /['"]+/g,
                                                            ""
                                                        ),
                                                    });
                                                    this.onSubmit8();
                                                    this.hideButton();
                                                },
                                            },
                                        ],
                                        { cancelable: false }
                                    );
                                }}
                                validationSchema={yup.object().shape({
                                    rule: yup.string().required(),
                                })}
                            >
                                {({
                                    values,
                                    handleChange,
                                    errors,
                                    setFieldTouched,
                                    touched,
                                    isValid,
                                    handleSubmit,
                                }) => (
                                    <Fragment>
                                        <TextInput
                                            maxLength={300}
                                            style={styles.textInput}
                                            returnKeyType={"done"}
                                            ref={this.myTextInput8}
                                            value={values.rule}
                                            multiline={true}
                                            onChangeText={handleChange("rule")}
                                            onBlur={() =>
                                                setFieldTouched("rule")
                                            }
                                            placeholder="Kirjoita oma sääntö"
                                            placeholderTextColor="#F8F8FF"
                                        />
                                        {touched.rule && errors.rule && (
                                            <Text style={styles.errorText}>
                                                *Pakollinen kenttä
                                            </Text>
                                        )}

                                        <View style={styles.buttonContainer}>
                                            <Button
                                                title="Vaihda"
                                                disabled={!isValid}
                                                onPress={handleSubmit}
                                            />
                                        </View>
                                    </Fragment>
                                )}
                            </Formik>
                        </View>
                    </Modal>

                    {/* Rule 9 */}
                    <View style={styles.cardContainer}>
                        <TouchableOpacity onPress={this.showButton9}>
                            <Image
                                style={styles.containerImage}
                                source={require("../assets/images/PNG/9H.png")}
                            />
                        </TouchableOpacity>
                        <Text style={styles.containerText}>
                            {this.showRule9()}
                        </Text>
                    </View>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={this.state.showButton9}
                    >
                        <View style={globalStyles.container3}>
                            <MaterialIcons
                                name="close"
                                style={styles.modalClose}
                                size={24}
                                onPress={this.hideButton}
                            />

                            <Formik
                                initialValues={{ rule: "" }}
                                onSubmit={(values) => {
                                    Alert.alert(
                                        "Huomio",
                                        "Haluatko varmasti vaihtaa säännön?",
                                        [
                                            {
                                                text: "Peruuta",
                                                style: "cancel",
                                            },

                                            {
                                                text: "OK",
                                                onPress: () => {
                                                    const value = JSON.stringify(
                                                        values["rule"]
                                                    );

                                                    this.setState({
                                                        nine: value.replace(
                                                            /['"]+/g,
                                                            ""
                                                        ),
                                                    });
                                                    this.onSubmit9();
                                                    this.hideButton();
                                                },
                                            },
                                        ],
                                        { cancelable: false }
                                    );
                                }}
                                validationSchema={yup.object().shape({
                                    rule: yup.string().required(),
                                })}
                            >
                                {({
                                    values,
                                    handleChange,
                                    errors,
                                    setFieldTouched,
                                    touched,
                                    isValid,
                                    handleSubmit,
                                }) => (
                                    <Fragment>
                                        <TextInput
                                            maxLength={300}
                                            style={styles.textInput}
                                            returnKeyType={"done"}
                                            ref={this.myTextInput9}
                                            value={values.rule}
                                            multiline={true}
                                            onChangeText={handleChange("rule")}
                                            onBlur={() =>
                                                setFieldTouched("rule")
                                            }
                                            placeholder="Kirjoita oma sääntö"
                                            placeholderTextColor="#F8F8FF"
                                        />
                                        {touched.rule && errors.rule && (
                                            <Text style={styles.errorText}>
                                                *Pakollinen kenttä
                                            </Text>
                                        )}

                                        <View style={styles.buttonContainer}>
                                            <Button
                                                title="Vaihda"
                                                disabled={!isValid}
                                                onPress={handleSubmit}
                                            />
                                        </View>
                                    </Fragment>
                                )}
                            </Formik>
                        </View>
                    </Modal>

                    {/* Rule 10 */}
                    <View style={styles.cardContainer}>
                        <TouchableOpacity onPress={this.showButton10}>
                            <Image
                                style={styles.containerImage}
                                source={require("../assets/images/PNG/10H.png")}
                            />
                        </TouchableOpacity>
                        <Text style={styles.containerText}>
                            {this.showRule10()}
                        </Text>
                    </View>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={this.state.showButton10}
                    >
                        <View style={globalStyles.container3}>
                            <MaterialIcons
                                name="close"
                                style={styles.modalClose}
                                size={24}
                                onPress={this.hideButton}
                            />

                            <Formik
                                initialValues={{ rule: "" }}
                                onSubmit={(values) => {
                                    Alert.alert(
                                        "Huomio",
                                        "Haluatko varmasti vaihtaa säännön?",
                                        [
                                            {
                                                text: "Peruuta",
                                                style: "cancel",
                                            },

                                            {
                                                text: "OK",
                                                onPress: () => {
                                                    const value = JSON.stringify(
                                                        values["rule"]
                                                    );

                                                    this.setState({
                                                        ten: value.replace(
                                                            /['"]+/g,
                                                            ""
                                                        ),
                                                    });
                                                    this.onSubmit10();
                                                    this.hideButton();
                                                },
                                            },
                                        ],
                                        { cancelable: false }
                                    );
                                }}
                                validationSchema={yup.object().shape({
                                    rule: yup.string().required(),
                                })}
                            >
                                {({
                                    values,
                                    handleChange,
                                    errors,
                                    setFieldTouched,
                                    touched,
                                    isValid,
                                    handleSubmit,
                                }) => (
                                    <Fragment>
                                        <TextInput
                                            maxLength={300}
                                            style={styles.textInput}
                                            returnKeyType={"done"}
                                            ref={this.myTextInput10}
                                            value={values.rule}
                                            multiline={true}
                                            onChangeText={handleChange("rule")}
                                            onBlur={() =>
                                                setFieldTouched("rule")
                                            }
                                            placeholder="Kirjoita oma sääntö"
                                            placeholderTextColor="#F8F8FF"
                                        />
                                        {touched.rule && errors.rule && (
                                            <Text style={styles.errorText}>
                                                *Pakollinen kenttä
                                            </Text>
                                        )}

                                        <View style={styles.buttonContainer}>
                                            <Button
                                                title="Vaihda"
                                                disabled={!isValid}
                                                onPress={handleSubmit}
                                            />
                                        </View>
                                    </Fragment>
                                )}
                            </Formik>
                        </View>
                    </Modal>

                    {/* Rule 11 */}
                    <View style={styles.cardContainer}>
                        <TouchableOpacity onPress={this.showButton11}>
                            <Image
                                style={styles.containerImage}
                                source={require("../assets/images/PNG/JH.png")}
                            />
                        </TouchableOpacity>
                        <Text style={styles.containerText}>
                            {this.showRule11()}
                        </Text>
                    </View>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={this.state.showButton11}
                    >
                        <View style={globalStyles.container3}>
                            <MaterialIcons
                                name="close"
                                style={styles.modalClose}
                                size={24}
                                onPress={this.hideButton}
                            />

                            <Formik
                                initialValues={{ rule: "" }}
                                onSubmit={(values) => {
                                    Alert.alert(
                                        "Huomio",
                                        "Haluatko varmasti vaihtaa säännön?",
                                        [
                                            {
                                                text: "Peruuta",
                                                style: "cancel",
                                            },

                                            {
                                                text: "OK",
                                                onPress: () => {
                                                    const value = JSON.stringify(
                                                        values["rule"]
                                                    );

                                                    this.setState({
                                                        J: value.replace(
                                                            /['"]+/g,
                                                            ""
                                                        ),
                                                    });
                                                    this.onSubmit11();
                                                    this.hideButton();
                                                },
                                            },
                                        ],
                                        { cancelable: false }
                                    );
                                }}
                                validationSchema={yup.object().shape({
                                    rule: yup.string().required(),
                                })}
                            >
                                {({
                                    values,
                                    handleChange,
                                    errors,
                                    setFieldTouched,
                                    touched,
                                    isValid,
                                    handleSubmit,
                                }) => (
                                    <Fragment>
                                        <TextInput
                                            maxLength={300}
                                            style={styles.textInput}
                                            returnKeyType={"done"}
                                            ref={this.myTextInput11}
                                            value={values.rule}
                                            multiline={true}
                                            onChangeText={handleChange("rule")}
                                            onBlur={() =>
                                                setFieldTouched("rule")
                                            }
                                            placeholder="Kirjoita oma sääntö"
                                            placeholderTextColor="#F8F8FF"
                                        />
                                        {touched.rule && errors.rule && (
                                            <Text style={styles.errorText}>
                                                *Pakollinen kenttä
                                            </Text>
                                        )}

                                        <View style={styles.buttonContainer}>
                                            <Button
                                                title="Vaihda"
                                                disabled={!isValid}
                                                onPress={handleSubmit}
                                            />
                                        </View>
                                    </Fragment>
                                )}
                            </Formik>
                        </View>
                    </Modal>

                    {/* Rule 12 */}
                    <View style={styles.cardContainer}>
                        <TouchableOpacity onPress={this.showButton12}>
                            <Image
                                style={styles.containerImage}
                                source={require("../assets/images/PNG/QH.png")}
                            />
                        </TouchableOpacity>
                        <Text style={styles.containerText}>
                            {this.showRule12()}
                        </Text>
                    </View>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={this.state.showButton12}
                    >
                        <View style={globalStyles.container3}>
                            <MaterialIcons
                                name="close"
                                style={styles.modalClose}
                                size={24}
                                onPress={this.hideButton}
                            />

                            <Formik
                                initialValues={{ rule: "" }}
                                onSubmit={(values) => {
                                    Alert.alert(
                                        "Huomio",
                                        "Haluatko varmasti vaihtaa säännön?",
                                        [
                                            {
                                                text: "Peruuta",
                                                style: "cancel",
                                            },

                                            {
                                                text: "OK",
                                                onPress: () => {
                                                    const value = JSON.stringify(
                                                        values["rule"]
                                                    );

                                                    this.setState({
                                                        Q: value.replace(
                                                            /['"]+/g,
                                                            ""
                                                        ),
                                                    });
                                                    this.onSubmit12();
                                                    this.hideButton();
                                                },
                                            },
                                        ],
                                        { cancelable: false }
                                    );
                                }}
                                validationSchema={yup.object().shape({
                                    rule: yup.string().required(),
                                })}
                            >
                                {({
                                    values,
                                    handleChange,
                                    errors,
                                    setFieldTouched,
                                    touched,
                                    isValid,
                                    handleSubmit,
                                }) => (
                                    <Fragment>
                                        <TextInput
                                            maxLength={300}
                                            style={styles.textInput}
                                            returnKeyType={"done"}
                                            ref={this.myTextInput12}
                                            value={values.rule}
                                            multiline={true}
                                            onChangeText={handleChange("rule")}
                                            onBlur={() =>
                                                setFieldTouched("rule")
                                            }
                                            placeholder="Kirjoita oma sääntö"
                                            placeholderTextColor="#F8F8FF"
                                        />
                                        {touched.rule && errors.rule && (
                                            <Text style={styles.errorText}>
                                                *Pakollinen kenttä
                                            </Text>
                                        )}

                                        <View style={styles.buttonContainer}>
                                            <Button
                                                title="Vaihda"
                                                disabled={!isValid}
                                                onPress={handleSubmit}
                                            />
                                        </View>
                                    </Fragment>
                                )}
                            </Formik>
                        </View>
                    </Modal>

                    {/* Rule 13 */}
                    <View style={styles.cardContainer}>
                        <TouchableOpacity onPress={this.showButton13}>
                            <Image
                                style={styles.containerImage}
                                source={require("../assets/images/PNG/KH.png")}
                            />
                        </TouchableOpacity>
                        <Text style={styles.containerText}>
                            {this.showRule13()}
                        </Text>
                    </View>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={this.state.showButton13}
                    >
                        <View style={globalStyles.container3}>
                            <MaterialIcons
                                name="close"
                                style={styles.modalClose}
                                size={24}
                                onPress={this.hideButton}
                            />

                            <Formik
                                initialValues={{ rule: "" }}
                                onSubmit={(values) => {
                                    Alert.alert(
                                        "Huomio",
                                        "Haluatko varmasti vaihtaa säännön?",
                                        [
                                            {
                                                text: "Peruuta",
                                                style: "cancel",
                                            },

                                            {
                                                text: "OK",
                                                onPress: () => {
                                                    const value = JSON.stringify(
                                                        values["rule"]
                                                    );

                                                    this.setState({
                                                        K: value.replace(
                                                            /['"]+/g,
                                                            ""
                                                        ),
                                                    });
                                                    this.onSubmit13();
                                                    this.hideButton();
                                                },
                                            },
                                        ],
                                        { cancelable: false }
                                    );
                                }}
                                validationSchema={yup.object().shape({
                                    rule: yup.string().required(),
                                })}
                            >
                                {({
                                    values,
                                    handleChange,
                                    errors,
                                    setFieldTouched,
                                    touched,
                                    isValid,
                                    handleSubmit,
                                }) => (
                                    <Fragment>
                                        <TextInput
                                            maxLength={300}
                                            style={styles.textInput}
                                            returnKeyType={"done"}
                                            ref={this.myTextInput13}
                                            value={values.rule}
                                            multiline={true}
                                            onChangeText={handleChange("rule")}
                                            onBlur={() =>
                                                setFieldTouched("rule")
                                            }
                                            placeholder="Kirjoita oma sääntö"
                                            placeholderTextColor="#F8F8FF"
                                        />
                                        {touched.rule && errors.rule && (
                                            <Text style={styles.errorText}>
                                                *Pakollinen kenttä
                                            </Text>
                                        )}

                                        <View style={styles.buttonContainer}>
                                            <Button
                                                title="Vaihda"
                                                disabled={!isValid}
                                                onPress={handleSubmit}
                                            />
                                        </View>
                                    </Fragment>
                                )}
                            </Formik>
                        </View>
                    </Modal>

                    <View>
                        <Button
                            title="Palauta alkuperäiset säännöt"
                            onPress={this.returnAlert}
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default Settings;

const styles = StyleSheet.create({
    divider: {
        backgroundColor: "white",
        //height: 5,
        height: Dimensions.get("window").height / 300,
        //marginBottom: 30,
        marginBottom: Dimensions.get("window").height / 20,
        //marginTop: 30,
        marginTop: Dimensions.get("window").height / 20,
    },
    rulesHeader: {
        //fontSize: 20,
        fontSize: Dimensions.get("window").height / 35,
        color: "white",
        fontFamily: "nunito-regular",
        textAlign: "left",
        marginTop: 0,
        //marginBottom: 65,
        marginBottom: Dimensions.get("window").height / 18,
        //marginLeft: Dimensions.get("window").height / 50,
        marginHorizontal: Dimensions.get("window").height / 40,
    },
    rulesHeader4: {
        //fontSize: 20,
        fontSize: Dimensions.get("window").height / 35,
        color: "white",
        fontFamily: "nunito-regular",
        textAlign: "left",
        marginTop: 0,
        marginBottom: 0,
        // marginLeft: Dimensions.get("window").height / 50,
        marginHorizontal: Dimensions.get("window").height / 40,
    },
    settingsHeader: {
        //fontSize: 30,
        fontSize: Dimensions.get("window").height / 18,
        color: "white",
        fontFamily: "nunito-bold",
        textAlign: "left",
        //marginTop: 20,
        marginTop: Dimensions.get("window").height / 15,
        //marginBottom: 20,
        marginBottom: Dimensions.get("window").height / 35,
        textAlign: "center",
    },
    settingsHeader2: {
        //fontSize: 30,
        fontSize: Dimensions.get("window").height / 18,
        color: "white",
        fontFamily: "nunito-bold",
        textAlign: "left",
        //marginTop: 20,
        marginTop: Dimensions.get("window").height / 8,
        //marginBottom: 20,
        marginBottom: Dimensions.get("window").height / 35,
        textAlign: "center",
    },
    title: {
        //fontSize: 30,
        fontSize: Dimensions.get("window").height / 20,
        color: "white",
        fontFamily: "nunito-regular",
        textAlign: "left",
        marginTop: 0,
        marginBottom: Dimensions.get("window").height / 16,
        //marginBottom: 10,
        marginBottom: Dimensions.get("window").height / 50,
        textAlign: "center",
    },
    textInput: {
        fontFamily: "nunito-regular",
        //fontSize: 18,
        fontSize: Dimensions.get("window").height / 37,
        //height: 50,
        height: Dimensions.get("window").height / 4,
        borderColor: "white",
        borderWidth: 2,
        borderRadius: 8,
        marginHorizontal: Dimensions.get("window").width / 23,
        //marginTop: 10,
        //marginTop: Dimensions.get("window").height / 50,
        width: Dimensions.get("window").width / 1.1,
        textAlign: "center",
    },
    buttonContainer: {
        //width: "30%",
        padding: Dimensions.get("window").width / 10,
    },
    modalClose: {
        marginBottom: 150,
        borderWidth: 2,
        borderColor: "#F8F8FF",
        padding: 10,
        borderRadius: 10,
        alignSelf: "center",
    },
    errorText: {
        fontSize: 12,
        color: "red",
        textAlign: "left",
        marginLeft: Dimensions.get("window").height / 35,
    },
    cardContainer: {
        alignItems: "center",
        width: Dimensions.get("window").width - 50,
        justifyContent: "center",
        marginBottom: 50,
        flex: 1,
        alignSelf: "center",
        padding: 20,
        backgroundColor: "rgba(255,255,255, 0.2)",
        borderRadius: 8,
        /* shadowColor: "black",
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10, */
        /* elevation: 3, */
    },
    cardContainer2: {
        alignItems: "center",
        width: Dimensions.get("window").width - 50,
        justifyContent: "center",
        marginTop: 50,
        flex: 1,
        alignSelf: "center",
        padding: 20,
        backgroundColor: "rgba(255,255,255, 0.2)",
        borderRadius: 8,
        /* shadowColor: "black",
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10, */
        /*  elevation: 3, */
    },
    containerImage: {
        width: 200,
        height: 200,
        resizeMode: "contain",
    },
    containerText: {
        marginTop: 20,
        fontSize: Dimensions.get("window").height / 35,
        color: "white",
        fontFamily: "nunito-regular",
    },
    containerHeader: {
        fontSize: Dimensions.get("window").height / 18,
        marginTop: 0,
        color: "white",
        fontFamily: "nunito-bold",
    },
});

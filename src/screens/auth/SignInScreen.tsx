import {View, Text, StyleSheet, Image} from "react-native";
import {sharedPaddingHorizontal} from "../../styles/sharedStyles";
import AppSafeView from "../../components/views/AppSafeView";
import {Images} from "../../constants/images-paths";
import {s, vs} from "react-native-size-matters";
import {useState} from "react";
import AppTextInput from "../../components/inputs/AppTextInput";
import AppText from "../../components/texts/AppText";
import AppButton from "../../components/buttons/AppButton";
import {AppColors} from "../../styles/colors";
import {useNavigation} from "@react-navigation/native";

const SignInScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();
    return (
        <AppSafeView style={styles.container}>
            <Image source={Images.appLogo} style={styles.logo}></Image>

            <AppTextInput placeholder="Email" onChangeText={setEmail} value={email}></AppTextInput>
            <AppTextInput placeholder="Password" onChangeText={setPassword} secureTextEntry={true}
                          value={password}></AppTextInput>
            <AppText style={styles.appName}>Smart E-Commerce App</AppText>
            <AppButton
                onPress={() => navigation.navigate("MainApp")}
                title="Sign In"
            />

            <AppButton
                onPress={() => navigation.navigate("SignUp")}
                title="Sign Up"
                style={styles.registerButton}
                textColor={AppColors.primary}
            />
        </AppSafeView>
    )
}

export default SignInScreen


const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        paddingHorizontal: sharedPaddingHorizontal
    },

    logo: {
        height: s(250),
        width: s(500),
        marginBottom: vs(30)
    },
    appName: {
        fontSize: s(16),
        marginBottom: vs(15),
        fontWeight: "bold",
    },
    registerButton: {
        backgroundColor: AppColors.white,
        borderWidth: 1,
        marginTop: vs(15),
        borderColor: AppColors.primary,

    }
})
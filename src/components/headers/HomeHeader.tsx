import {StyleSheet, View, Text, Image} from "react-native";
import {s, vs} from "react-native-size-matters";
import {Images} from "../../constants/images-paths";

export default function HomeHeader() {
    return (
        <View style={styles.container}>
            <Image source={Images.appLogo} style={styles.logo} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

        alignItems: "center",
        justifyContent: "center",
        paddingBottom: vs(4)
    },
    logo:{
        width:vs(40),
        height:s(50),
    }
})
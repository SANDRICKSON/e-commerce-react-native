import {Image, StyleSheet, TouchableOpacity, View} from "react-native";
import {s, vs} from "react-native-size-matters";
import {AppColors} from "../../styles/colors";
import AppText from "../texts/AppText";
import {AppFonts} from "../../styles/fonts";
import {Ionicons} from "@expo/vector-icons";

export default function ProductCard() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.addToCardButton}>
                <Ionicons name="cart" size={20} color="#FFFFFF" />
            </TouchableOpacity>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{uri: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?w=600"}} />
            </View>

            <View style={styles.detailsContainer}>
                <AppText style={styles.titleText}>iPhone 15</AppText>
                <AppText style={styles.priceText}>1200$</AppText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: s(160),
        // height: s(160), // ❌ წაშალე ეს ხაზი
        backgroundColor: AppColors.white,
        borderRadius: s(10),
        overflow: "hidden",
        // დაამატე shadow (სურვილისამებრ)
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    imageContainer: {
        overflow: "hidden",
        borderTopLeftRadius: s(10),
        borderTopRightRadius: s(10),
        height: vs(130),
        width: "100%",
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover", // "contain" → "cover" (უკეთესია ბარათებისთვის)
    },
    detailsContainer: {
        paddingTop: s(8),
        paddingBottom: vs(12),
        paddingHorizontal: s(10),
        // flex:1 აღარ არის საჭირო
    },
    titleText: {
        fontSize: s(14),
        fontFamily: AppFonts.Bold,
        color: AppColors.black, // შავი უკეთ ჩანს
        marginBottom: vs(2),
    },
    priceText: {
        fontSize: s(14),
        fontFamily: AppFonts.Medium,
        color: AppColors.primary, // ან AppColors.black
    },
    addToCardButton:{
        height: s(28),
        width: s(28),
        position: "absolute",
        left: 5,
        top: 5,
        borderRadius: s(14),
        backgroundColor: AppColors.primary,
        zIndex: 1,
        justifyContent: "center",
        alignItems: "center",
    }

});
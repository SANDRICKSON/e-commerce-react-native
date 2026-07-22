import {StyleSheet, View, Image, TouchableOpacity} from "react-native";
import {s, vs} from "react-native-size-matters";
import AppText from "../texts/AppText";
import {AppColors} from "../../styles/colors";
import {AppFonts} from "../../styles/fonts";
import {AntDesign} from "@expo/vector-icons";

const tempItem = {
    price: 343,
    title: "Apple iPhone 15 Pro",
    imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600",
    id: "1"
}

const CartItem = () => {
    return (
        <View style={styles.container}>

            <View style={styles.imageContainer}>
                <Image source={{uri: tempItem.imageUrl}} style={styles.image} />
            </View>

            {/* დეტალები */}
            <View style={styles.detailsContainer}>
                <AppText style={styles.textTitle} numberOfLines={1}>
                    {tempItem.title}
                </AppText>
                <AppText style={styles.textPrice}>
                    ${tempItem.price}
                </AppText>
            </View>


            <TouchableOpacity style={styles.deleteButton}>
                <AntDesign name="delete" size={s(18)} color={AppColors.redColor} />
                <AppText style={styles.deleteText}>Delete</AppText>
            </TouchableOpacity>
        </View>
    );
};

export default CartItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        paddingVertical: vs(8),
        paddingHorizontal: s(12),
        backgroundColor: AppColors.white,
        borderRadius: s(10),
        marginBottom: vs(8),
        borderWidth: 1,
        borderColor: AppColors.borderColor,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    imageContainer: {
        marginRight: s(12),
    },
    image: {
        height: s(70),
        width: s(70),
        borderRadius: s(8),
        resizeMode: "cover",
    },
    detailsContainer: {
        flex: 1,
        justifyContent: "center",
        paddingRight: s(8),
    },
    textTitle: {
        fontSize: s(15),
        color: AppColors.black,
        fontFamily: AppFonts.Bold,
        marginBottom: vs(2),
    },
    textPrice: {
        fontSize: s(15),
        color: AppColors.primary,
        fontFamily: AppFonts.Medium,
    },
    deleteButton: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: s(10),
        paddingVertical: vs(6),
        borderRadius: s(6),
        backgroundColor: AppColors.lightGrey,
    },
    deleteText: {
        marginLeft: s(4),
        fontFamily: AppFonts.Medium,
        color: AppColors.medGray,
        fontSize: s(12),
    },
});
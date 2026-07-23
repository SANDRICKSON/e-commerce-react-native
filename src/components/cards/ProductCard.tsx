import {Image, StyleSheet, TouchableOpacity, View} from "react-native";
import {s, vs} from "react-native-size-matters";
import {AppColors} from "../../styles/colors";
import AppText from "../texts/AppText";
import {AppFonts} from "../../styles/fonts";
import {Ionicons} from "@expo/vector-icons";
import {commonStyles} from "../../styles/sharedStyles";
import {FC} from "react";

interface IProductCard {
    onAddToCardPress: () => void;
    title: string;
    price: number;
    imageUrl: string;
}

const ProductCard: FC<IProductCard> = ({onAddToCardPress, imageUrl, title, price}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.addToCardButton} onPress={onAddToCardPress}>
                <Ionicons name="cart" size={20} color="#FFFFFF" />
            </TouchableOpacity>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{uri: imageUrl}} />
            </View>

            <View style={styles.detailsContainer}>
                <AppText style={styles.titleText} numberOfLines={1}>{title}</AppText>
                <AppText style={styles.priceText}>${price}</AppText>
            </View>
        </View>
    );
};

export default ProductCard;

const styles = StyleSheet.create({
    container: {
        width: s(160),
        backgroundColor: AppColors.white,
        borderRadius: s(10),
        overflow: "hidden",
        ...commonStyles.shadow,
        marginBottom: vs(10),
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
        resizeMode: "cover",
    },
    detailsContainer: {
        paddingTop: s(8),
        paddingBottom: vs(12),
        paddingHorizontal: s(10),
    },
    titleText: {
        fontSize: s(14),
        fontFamily: AppFonts.Bold,
        color: AppColors.black,
        marginBottom: vs(2),
    },
    priceText: {
        fontSize: s(14),
        fontFamily: AppFonts.Medium,
        color: AppColors.primary,
    },
    addToCardButton: {
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
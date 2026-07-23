import {StyleSheet, View, Image, TouchableOpacity, Pressable} from "react-native";
import {s, vs} from "react-native-size-matters";
import AppText from "../texts/AppText";
import {AppColors} from "../../styles/colors";
import {AppFonts} from "../../styles/fonts";
import {AntDesign, FontAwesome} from "@expo/vector-icons";

interface ICartItem {
    id: string; // დამატებულია id
    title: string;
    price: number;
    imageURL: string;
    qty: number;
    onDeletePress: () => void;
    onIncreasePress: () => void;
    onReducePress: () => void;
}

const CartItem = ({
                      id,
                      title,
                      price,
                      imageURL,
                      qty,
                      onDeletePress,
                      onIncreasePress,
                      onReducePress
                  }: ICartItem) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{uri: imageURL}} style={styles.image}/>
            </View>

            <View style={styles.detailsContainer}>
                <AppText style={styles.textTitle} numberOfLines={1}>
                    {title}
                </AppText>
                <AppText style={styles.textPrice}>
                    {price}$
                </AppText>
            </View>

            <TouchableOpacity style={styles.deleteButton} onPress={onDeletePress}>
                <AntDesign name="delete" size={s(18)} color={AppColors.redColor}/>
                <AppText style={styles.deleteText}>Delete</AppText>
            </TouchableOpacity>

            <View style={styles.qtyContainer}>
                <Pressable style={styles.iconButton} onPress={onIncreasePress}>
                    <FontAwesome name="plus" size={s(10)} color={AppColors.primary}/>
                </Pressable>
                <AppText style={styles.textQty}>{qty}</AppText>
                <Pressable style={styles.iconButton} onPress={onReducePress}>
                    <FontAwesome name="minus" size={s(10)} color={AppColors.primary}/>
                </Pressable>
            </View>
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
        shadowOffset: {width: 0, height: 2},
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
    qtyContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: s(5),
        borderRadius: s(30),
        borderWidth: s(1),
        borderColor: AppColors.blueGrey,
        width: s(80),
        paddingVertical: s(5),
    },
    iconButton: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: AppColors.lightGrey,
        padding: s(5),
        height: s(20),
        width: s(20),
        borderRadius: s(10),
    },
    textQty: {
        flex: 1,
        textAlign: "center",
        color: AppColors.primary,
        fontFamily: AppFonts.Bold,
        fontSize: s(14),
    }
});
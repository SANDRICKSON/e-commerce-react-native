import {View, StyleSheet} from "react-native";
import {s, vs} from "react-native-size-matters";
import AppText from "../texts/AppText";
import {AppColors} from "../../styles/colors";

interface ITotalViews {
    subtotal?: number;
    taxes?: number;
    shippingFee?: number;
}

const TotalViews = ({subtotal = 120, taxes = 10, shippingFee = 10}: ITotalViews) => {
    const total = subtotal + taxes + shippingFee;

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <AppText style={styles.textTitle}>Subtotal: </AppText>
                <AppText style={styles.textPrice}>${subtotal}</AppText>
            </View>
            <View style={styles.row}>
                <AppText style={styles.textTitle}>Taxes: </AppText>
                <AppText style={styles.textPrice}>${taxes}</AppText>
            </View>
            <View style={styles.row}>
                <AppText style={styles.textTitle}>Shipping Fee: </AppText>
                <AppText style={styles.textPrice}>${shippingFee}</AppText>
            </View>

            <View style={styles.separator} />

            <View style={styles.row}>
                <AppText style={[styles.textTitle, styles.textTotal]}>Total: </AppText>
                <AppText style={[styles.textPrice, styles.textTotalPrice]}>${total}</AppText>
            </View>
        </View>
    );
};

export default TotalViews;

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColors.white,
        borderRadius: s(10),
        padding: s(12),
        marginVertical: vs(8),
        borderWidth: 1,
        borderColor: AppColors.borderColor,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: vs(6),
    },
    textTitle: {
        fontSize: s(15),
        flex: 1,
        color: AppColors.black,
    },
    textPrice: {
        fontSize: s(15),
        color: AppColors.primary,
    },
    textTotal: {
        fontSize: s(17),
        fontWeight: 'bold',
        color: AppColors.black,
    },
    textTotalPrice: {
        fontSize: s(17),
        fontWeight: 'bold',
        color: AppColors.primary,
    },
    separator: {
        height: 1,
        width: "100%",
        backgroundColor: AppColors.borderColor,
        marginVertical: vs(8),
    }
});
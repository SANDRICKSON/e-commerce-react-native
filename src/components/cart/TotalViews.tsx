import {View, StyleSheet} from "react-native";
import {s, vs} from "react-native-size-matters";
import AppText from "../texts/AppText";
import {AppColors} from "../../styles/colors";

const TotalViews = () =>{
    return (
        <View>
            <View style={styles.row}>
                <AppText style={styles.textTitle}>Order Total: </AppText>
                <AppText style={styles.textPrice}>120$</AppText>
            </View>
            <View style={styles.row}>
                <AppText style={styles.textTitle}>Taxes: </AppText>
                <AppText style={styles.textPrice}>10$</AppText>
            </View>
            <View style={styles.row}>
                <AppText style={styles.textTitle}>Shipping Fee: </AppText>
                <AppText style={styles.textPrice}>10$</AppText>
            </View>

            <View style={styles.separator} />

            <View style={styles.row}>
                <AppText style={[styles.textTitle, styles.textTotal]}>Total: </AppText>
                <AppText style={[styles.textPrice, styles.textTotalPrice]}>140$</AppText>
            </View>
        </View>
    )
}

export default TotalViews;

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: vs(10)
    },
    textTitle: {
        fontSize: s(16),
        flex: 1,
        color: AppColors.black,
    },
    textPrice: {
        fontSize: s(16),
        color: AppColors.primary,
    },
    textTotal: {
        fontSize: s(18),
        fontWeight: 'bold',
        color: AppColors.black,
    },
    textTotalPrice: {
        fontSize: s(18),
        fontWeight: 'bold',
        color: AppColors.primary,
    },
    separator: {
        height: 1,
        width: "100%",
        backgroundColor: AppColors.borderColor || AppColors.blueGrey,
        marginVertical: vs(8),
    }
});
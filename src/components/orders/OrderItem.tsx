// components/orders/OrderItem.tsx
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { s, vs } from 'react-native-size-matters';
import AppText from "../texts/AppText";
import {AppFonts} from "../../styles/fonts";
import {AppColors} from "../../styles/colors";
import {MaterialIcons} from "@expo/vector-icons";

interface IOrderItem {
    id: string;
    orderNumber: string;
    date: string;
    total: number;
    status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
    items: number;
    onPress?: () => void;
}

const OrderItem = ({orderNumber, date, total, status, items, onPress}: IOrderItem) => {
    const getStatusColor = (status: string) => {
        switch (status) {
            case 'pending':
                return AppColors.warning;
            case 'processing':
                return AppColors.info;
            case 'shipped':
                return AppColors.primary;
            case 'delivered':
                return AppColors.success;
            case 'cancelled':
                return AppColors.error;
            default:
                return AppColors.medGray;
        }
    };

    const getStatusText = (status: string) => {
        switch (status) {
            case 'pending':
                return 'Pending';
            case 'processing':
                return 'Processing';
            case 'shipped':
                return 'Shipped';
            case 'delivered':
                return 'Delivered';
            case 'cancelled':
                return 'Cancelled';
            default:
                return status;
        }
    };

    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View style={styles.header}>
                <View style={styles.orderInfo}>
                    <AppText style={styles.orderNumber}>Order #{orderNumber}</AppText>
                    <AppText style={styles.date}>{date}</AppText>
                </View>
                <View style={[styles.statusBadge, {backgroundColor: getStatusColor(status) + '20'}]}>
                    <AppText style={[styles.statusText, {color: getStatusColor(status)}]}>
                        {getStatusText(status)}
                    </AppText>
                </View>
            </View>

            <View style={styles.divider} />

            <View style={styles.footer}>
                <View style={styles.itemsInfo}>
                    <MaterialIcons name="shopping-bag" size={s(16)} color={AppColors.medGray}/>
                    <AppText style={styles.itemsText}>{items} items</AppText>
                </View>
                <View style={styles.totalContainer}>
                    <AppText style={styles.totalLabel}>Total:</AppText>
                    <AppText style={styles.totalPrice}>${total.toFixed(2)}</AppText>
                </View>
            </View>

            <MaterialIcons
                name="chevron-right"
                size={s(20)}
                color={AppColors.medGray}
                style={styles.arrow}
            />
        </TouchableOpacity>
    );
};

export default OrderItem;

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColors.white,
        borderRadius: s(12),
        padding: s(16),
        marginBottom: vs(12),
        borderWidth: 1,
        borderColor: AppColors.borderColor,
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    orderInfo: {
        flex: 1,
    },
    orderNumber: {
        fontSize: s(16),
        fontFamily: AppFonts.Bold,
        color: AppColors.black,
        marginBottom: vs(4),
    },
    date: {
        fontSize: s(13),
        fontFamily: AppFonts.Regular,
        color: AppColors.medGray,
    },
    statusBadge: {
        paddingHorizontal: s(10),
        paddingVertical: vs(4),
        borderRadius: s(12),
        marginLeft: s(8),
    },
    statusText: {
        fontSize: s(12),
        fontFamily: AppFonts.Medium,
        textTransform: 'capitalize',
    },
    divider: {
        height: 1,
        backgroundColor: AppColors.borderColor,
        marginVertical: vs(10),
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    itemsInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemsText: {
        fontSize: s(14),
        fontFamily: AppFonts.Regular,
        color: AppColors.medGray,
        marginLeft: s(6),
    },
    totalContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    totalLabel: {
        fontSize: s(14),
        fontFamily: AppFonts.Regular,
        color: AppColors.medGray,
        marginRight: s(6),
    },
    totalPrice: {
        fontSize: s(16),
        fontFamily: AppFonts.Bold,
        color: AppColors.primary,
    },
    arrow: {
        position: 'absolute',
        right: s(12),
        top: '50%',
        transform: [{translateY: -s(10)}],
    },
});
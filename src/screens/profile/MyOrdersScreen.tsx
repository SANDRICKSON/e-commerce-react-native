// screens/MyOrderScreen.tsx
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import { s, vs } from 'react-native-size-matters';
import AppSafeView from "../../components/views/AppSafeView";
import AppText from "../../components/texts/AppText";
import {AppColors} from "../../styles/colors";
import {AppFonts} from "../../styles/fonts";
import OrderItem from "../../components/orders/OrderItem";
import {sharedPaddingHorizontal} from "../../styles/sharedStyles";
import {MaterialIcons} from "@expo/vector-icons";

// Dummy Data
const orders = [
    {
        id: '1',
        orderNumber: 'ORD-2024-001',
        date: '2024-01-15',
        total: 299.99,
        status: 'delivered' as const,
        items: 3,
    },
    {
        id: '2',
        orderNumber: 'ORD-2024-002',
        date: '2024-01-20',
        total: 149.50,
        status: 'shipped' as const,
        items: 2,
    },
    {
        id: '3',
        orderNumber: 'ORD-2024-003',
        date: '2024-01-25',
        total: 89.99,
        status: 'processing' as const,
        items: 1,
    },
    {
        id: '4',
        orderNumber: 'ORD-2024-004',
        date: '2024-01-28',
        total: 499.00,
        status: 'pending' as const,
        items: 4,
    },
    {
        id: '5',
        orderNumber: 'ORD-2024-005',
        date: '2024-01-30',
        total: 199.99,
        status: 'cancelled' as const,
        items: 2,
    },
];

const MyOrderScreen = ({navigation}: any) => {
    const handleOrderPress = (orderId: string) => {
        // Navigate to order details
        console.log('Order pressed:', orderId);
        // navigation.navigate('OrderDetail', { orderId });
    };

    return (
        <AppSafeView>
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}
                >
                    <MaterialIcons name="arrow-back" size={s(24)} color={AppColors.black}/>
                </TouchableOpacity>
                <AppText style={styles.headerTitle}>My Orders</AppText>
                <View style={styles.placeholder} />
            </View>

            <FlatList
                data={orders}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <OrderItem
                        id={item.id}
                        orderNumber={item.orderNumber}
                        date={item.date}
                        total={item.total}
                        status={item.status}
                        items={item.items}
                        onPress={() => handleOrderPress(item.id)}
                    />
                )}
                contentContainerStyle={styles.listContent}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={
                    <View style={styles.emptyContainer}>
                        <MaterialIcons name="receipt-long" size={s(60)} color={AppColors.lightGrey}/>
                        <AppText style={styles.emptyText}>No orders yet</AppText>
                        <AppText style={styles.emptySubText}>
                            Your orders will appear here
                        </AppText>
                    </View>
                }
            />
        </AppSafeView>
    );
};

export default MyOrderScreen;

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: sharedPaddingHorizontal,
        paddingVertical: vs(16),
        backgroundColor: AppColors.white,
        borderBottomWidth: 1,
        borderBottomColor: AppColors.borderColor,
        marginBottom: vs(8),
    },
    backButton: {
        padding: s(4),
    },
    headerTitle: {
        fontSize: s(18),
        fontFamily: AppFonts.Bold,
        color: AppColors.black,
    },
    placeholder: {
        width: s(32),
    },
    listContent: {
        paddingHorizontal: sharedPaddingHorizontal,
        paddingBottom: vs(20),
    },
    emptyContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: vs(60),
    },
    emptyText: {
        fontSize: s(18),
        fontFamily: AppFonts.Bold,
        color: AppColors.black,
        marginTop: vs(16),
    },
    emptySubText: {
        fontSize: s(14),
        fontFamily: AppFonts.Regular,
        color: AppColors.medGray,
        marginTop: vs(4),
    },
});
import {View, FlatList, Alert} from "react-native";
import HomeHeader from "../../components/headers/HomeHeader";
import EmptyCart from "./EmptyCart";
import {AppColors} from "../../styles/colors";
import {StyleSheet} from "react-native";
import CartItem from "../../components/cart/CartItem";
import TotalViews from "../../components/cart/TotalViews";
import AppButton from "../../components/buttons/AppButton";
import {useNavigation} from "@react-navigation/native";
import {useSelector, useDispatch} from "react-redux";
import {RootState} from "../../store/store";
import {s, vs} from "react-native-size-matters";
import {removeFromCart, increaseQty, decreaseQty} from "../../store/cartSlice";
import {useForm} from "react-hook-form";

export default function CartScreen() {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const {items} = useSelector((state: RootState) => state.cartSlice);

    // თუ კალათა ცარიელია
    if (items.length === 0) {
        return <EmptyCart />;
    }

    const {control,handleSubmit} = useForm({})

    const handleDeletePress = (id: string) => {
        Alert.alert(
            "Remove Item",
            "Are you sure you want to remove this item from cart?",
            [
                { text: "Cancel", style: "cancel" },
                { text: "Remove", onPress: () => dispatch(removeFromCart(id)) }
            ]
        );
    };

    const handleIncreasePress = (id: string) => {
        dispatch(increaseQty(id));
    };

    const handleReducePress = (id: string) => {
        dispatch(decreaseQty(id));
    };

    return (
        <View style={styles.container}>
            <HomeHeader />
            <FlatList
                data={items}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => (
                    <CartItem
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        imageURL={item.imageUrl}
                        qty={item.qty || 1}
                        onDeletePress={() => handleDeletePress(item.id)}
                        onIncreasePress={() => handleIncreasePress(item.id)}
                        onReducePress={() => handleReducePress(item.id)}
                    />
                )}
                contentContainerStyle={styles.listContent}
                ListFooterComponent={
                    <>
                        <TotalViews />
                        <AppButton
                            onPress={() => navigation.navigate("CheckoutScreen" as never)}
                            title='Continue'
                        />
                    </>
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.white,
    },
    listContent: {
        paddingHorizontal: s(12),
        paddingBottom: vs(20),
    },
});
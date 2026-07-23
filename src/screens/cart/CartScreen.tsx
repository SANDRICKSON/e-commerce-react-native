import {View, FlatList} from "react-native";
import HomeHeader from "../../components/headers/HomeHeader";
import EmptyCart from "./EmptyCart";
import {AppColors} from "../../styles/colors";
import {StyleSheet} from "react-native";
import CartItem from "../../components/cart/CartItem";
import TotalViews from "../../components/cart/TotalViews";
import {products} from "../../data/products";
import AppButton from "../../components/buttons/AppButton";
import {useNavigation} from "@react-navigation/native";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {s, vs} from "react-native-size-matters";

export default function CartScreen() {
    const navigation = useNavigation();
    const {items} = useSelector((state: RootState) => state.cartSlice);

    // თუ კალათა ცარიელია
    if (items.length === 0) {
        return <EmptyCart />;
    }

    return (
        <View style={styles.container}>
            <HomeHeader />
            <FlatList
                data={items}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => (
                    <CartItem
                        title={item.title}
                        price={item.price}
                        imageURL={item.imageUrl} // მნიშვნელოვანია: imageURL (დიდი ასოებით)
                        qty={item.qty || 1}
                        onDeletePress={() => {}}
                        onIncreasePress={() => {}}
                        onReducePress={() => {}}
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
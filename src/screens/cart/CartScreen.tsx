import {View,Text} from "react-native";
import HomeHeader from "../../components/headers/HomeHeader";
import EmptyCart from "./EmptyCart";
import {AppColors} from "../../styles/colors";
import {StyleSheet} from "react-native";
import CartItem from "../../components/cart/CartItem";
import TotalViews from "../../components/cart/TotalViews";
export default function CartScreen() {
    return (
        <View style={styles.container}>
            <HomeHeader/>
            {/*<EmptyCart/>*/}
            <CartItem/>
            <TotalViews/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.white,
    },
});
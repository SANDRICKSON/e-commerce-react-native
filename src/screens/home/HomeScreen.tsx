import {View, Text} from "react-native";
import HomeHeader from "../../components/headers/HomeHeader";
import ProductCard from "../../components/cards/ProductCard";

export default function HomeScreen() {
    return (
        <View>

            <HomeHeader/>
            <ProductCard/>
        </View>
    )
}
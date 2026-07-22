import {View,  FlatList} from "react-native";
import HomeHeader from "../../components/headers/HomeHeader";
import {products} from "../../data/products";
import ProductCard from "../../components/cards/ProductCard";
import {s, vs} from "react-native-size-matters";

export default function HomeScreen() {
    return (
        <View>

            <HomeHeader/>
            <FlatList
                numColumns={2} data={products}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) =>
                    <ProductCard imageUrl={item.imageUrl} title={item.title} price={item.price}
                                 onAddToCardPress={() => {
                                 }}/>
                        }
                 columnWrapperStyle={{
                     justifyContent: "space-between",
                     marginBottom: vs(10)
                 }}
                contentContainerStyle={
                {
                    paddingHorizontal: s(10)
                }
                }

                    ></FlatList>
                    </View>
                    )
                }
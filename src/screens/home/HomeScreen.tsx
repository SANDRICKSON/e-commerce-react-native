import {View, FlatList} from "react-native";
import {s, vs} from "react-native-size-matters";
import HomeHeader from "../../components/headers/HomeHeader";
import {products} from "../../data/products";
import ProductCard from "../../components/cards/ProductCard";
import {AppColors} from "../../styles/colors";
import {StyleSheet} from "react-native";
import {useDispatch} from "react-redux";
import {addToCart} from "../../store/cartSlice";

export default function HomeScreen() {
    const dispatch = useDispatch();

    const handleAddToCart = (product: any) => {
        dispatch(addToCart({
            id: product.id,
            title: product.title,
            price: product.price,
            imageUrl: product.imageUrl,
            qty: 1,
        }));
    };

    return (
        <View style={styles.container}>
            <HomeHeader />
            <FlatList
                numColumns={2}
                data={products}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => (
                    <ProductCard
                        imageUrl={item.imageUrl}
                        title={item.title}
                        price={item.price}
                        onAddToCardPress={() => handleAddToCart(item)}
                    />
                )}
                columnWrapperStyle={styles.columnWrapper}
                contentContainerStyle={styles.contentContainer}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.white,
    },
    columnWrapper: {
        justifyContent: "space-between",
        marginBottom: vs(10),
        paddingHorizontal: s(10),
    },
    contentContainer: {
        paddingBottom: vs(20),
    },
});
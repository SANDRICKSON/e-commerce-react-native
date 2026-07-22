import {StyleSheet, View} from "react-native";

const CartItem = () =>{
    return (
        <View>
            <View style={styles.imageContainer}></View>
            <View style={styles.detailsContainer}></View>
            <View style={styles.deleteButtonContainer}></View>
        </View>
    )
}
export default CartItem;
const styles = StyleSheet.create({
    imageContainer:{
        flex: 1,
        backgroundColor: "red"
    },
    detailsContainer:{
        flex: 1,
        backgroundColor:"blue"
    },
    deleteButtonContainer:{
        flex: 1,
        backgroundColor:"gold"
    }
})
import {View, Text, StyleSheet} from 'react-native';
import {s, vs} from 'react-native-size-matters';
import AppSafeView from "../../components/views/AppSafeView";
import {commonStyles, sharedPaddingHorizontal} from "../../styles/sharedStyles";
import {AppColors} from "../../styles/colors";
import AppTextInput from "../../components/inputs/AppTextInput";
import AppButton from "../../components/buttons/AppButton";

const CheckoutScreen = () => {
    return (
        <AppSafeView>
            <View style={{paddingHorizontal: sharedPaddingHorizontal}}>
                <View style={styles.inputsContainer}>
                    <AppTextInput placeholder="Full Name"/>
                    <AppTextInput placeholder="Phone Number"/>
                    <AppTextInput placeholder="Detailed Address"/>
                </View>
            </View>
            <View style={styles.bottomButtonContainer}>
                <AppButton onPress={()=>{}} title="Confirm"/>
            </View>
        </AppSafeView>
    );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
    inputsContainer: {
        ...commonStyles.shadow,
        padding: s(8),
        borderRadius: s(8),
        backgroundColor: AppColors.white,
        marginTop: vs(16),
    },

    bottomButtonContainer: {
        paddingHorizontal: sharedPaddingHorizontal,
        paddingVertical: vs(16),
        position: 'absolute',
        width: '100%',
        bottom: 0,
        borderTopWidth: 1,
        borderColor: AppColors.lightGrey,
        backgroundColor: AppColors.white,
    }
});
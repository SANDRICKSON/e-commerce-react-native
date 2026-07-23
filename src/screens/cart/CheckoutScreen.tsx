import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {s, vs} from 'react-native-size-matters';
import AppSafeView from "../../components/views/AppSafeView";
import {commonStyles, sharedPaddingHorizontal} from "../../styles/sharedStyles";
import {AppColors} from "../../styles/colors";
import AppTextInput from "../../components/inputs/AppTextInput";
import AppButton from "../../components/buttons/AppButton";
import AppText from "../../components/texts/AppText";
import {useState} from "react";
import {useNavigation} from "@react-navigation/native";

const CheckoutScreen = () => {
    const navigation = useNavigation();

    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');

    const [fullNameError, setFullNameError] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState('');
    const [addressError, setAddressError] = useState('');

    const handleInputChange = (field: string, value: string) => {
        if (field === 'fullName') {
            setFullName(value);
            setFullNameError('');
        } else if (field === 'phoneNumber') {
            setPhoneNumber(value);
            setPhoneNumberError('');
        } else if (field === 'address') {
            setAddress(value);
            setAddressError('');
        }
    };

    const validateForm = () => {
        let isValid = true;

        if (!fullName.trim()) {
            setFullNameError('Full name is required');
            isValid = false;
        }

        if (!phoneNumber.trim()) {
            setPhoneNumberError('Phone number is required');
            isValid = false;
        } else if (!/^\d+$/.test(phoneNumber)) {
            setPhoneNumberError('Please enter a valid phone number');
            isValid = false;
        }

        if (!address.trim()) {
            setAddressError('Address is required');
            isValid = false;
        }

        return isValid;
    };

    const handleConfirm = () => {
        if (validateForm()) {
            // Navigate to order confirmation or success screen
            console.log('Order confirmed!', { fullName, phoneNumber, address });
            // navigation.navigate('OrderSuccess' as never);
        }
    };

    return (
        <AppSafeView style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                <View style={{paddingHorizontal: sharedPaddingHorizontal}}>
                    <AppText style={styles.screenTitle}>Checkout</AppText>

                    <View style={styles.inputsContainer}>
                        <View style={styles.inputWrapper}>
                            <AppTextInput
                                placeholder="Full Name"
                                value={fullName}
                                onChangeText={(text) => handleInputChange('fullName', text)}
                            />
                            {fullNameError ? (
                                <AppText style={styles.errorText}>{fullNameError}</AppText>
                            ) : null}
                        </View>

                        <View style={styles.inputWrapper}>
                            <AppTextInput
                                placeholder="Phone Number"
                                value={phoneNumber}
                                onChangeText={(text) => handleInputChange('phoneNumber', text)}
                                keyboardType="phone-pad"
                            />
                            {phoneNumberError ? (
                                <AppText style={styles.errorText}>{phoneNumberError}</AppText>
                            ) : null}
                        </View>

                        <View style={styles.inputWrapper}>
                            <AppTextInput
                                placeholder="Detailed Address"
                                value={address}
                                onChangeText={(text) => handleInputChange('address', text)}
                                multiline
                                style={styles.addressInput}
                            />
                            {addressError ? (
                                <AppText style={styles.errorText}>{addressError}</AppText>
                            ) : null}
                        </View>
                    </View>

                    {/* დამატებითი ინფორმაცია */}
                    <View style={styles.summaryContainer}>
                        <AppText style={styles.summaryTitle}>Order Summary</AppText>
                        <View style={styles.summaryRow}>
                            <AppText style={styles.summaryLabel}>Subtotal:</AppText>
                            <AppText style={styles.summaryValue}>$120.00</AppText>
                        </View>
                        <View style={styles.summaryRow}>
                            <AppText style={styles.summaryLabel}>Shipping:</AppText>
                            <AppText style={styles.summaryValue}>$10.00</AppText>
                        </View>
                        <View style={styles.summaryRow}>
                            <AppText style={styles.summaryLabel}>Tax:</AppText>
                            <AppText style={styles.summaryValue}>$10.00</AppText>
                        </View>
                        <View style={styles.divider} />
                        <View style={[styles.summaryRow, styles.totalRow]}>
                            <AppText style={styles.totalLabel}>Total:</AppText>
                            <AppText style={styles.totalValue}>$140.00</AppText>
                        </View>
                    </View>
                </View>
            </ScrollView>

            <View style={styles.bottomButtonContainer}>
                <AppButton
                    onPress={handleConfirm}
                    title="Confirm Order"
                />
            </View>
        </AppSafeView>
    );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.background || AppColors.white,
    },
    scrollContent: {
        paddingBottom: vs(100),
    },
    screenTitle: {
        fontSize: s(24),
        fontWeight: 'bold',
        color: AppColors.black,
        marginTop: vs(12),
        marginBottom: vs(16),
    },
    inputsContainer: {
        ...commonStyles.shadow,
        padding: s(12),
        borderRadius: s(12),
        backgroundColor: AppColors.white,
        marginBottom: vs(16),
    },
    inputWrapper: {
        marginBottom: vs(4),
    },
    addressInput: {
        height: vs(80),
        textAlignVertical: 'top',
        paddingTop: vs(12),
    },
    errorText: {
        fontSize: s(12),
        color: AppColors.redColor,
        marginBottom: vs(8),
        marginLeft: s(4),
    },
    summaryContainer: {
        backgroundColor: AppColors.white,
        borderRadius: s(12),
        padding: s(16),
        ...commonStyles.shadow,
    },
    summaryTitle: {
        fontSize: s(18),
        fontWeight: 'bold',
        color: AppColors.black,
        marginBottom: vs(12),
    },
    summaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: vs(6),
    },
    summaryLabel: {
        fontSize: s(14),
        color: AppColors.medGray,
    },
    summaryValue: {
        fontSize: s(14),
        color: AppColors.black,
    },
    divider: {
        height: 1,
        backgroundColor: AppColors.borderColor,
        marginVertical: vs(8),
    },
    totalRow: {
        marginBottom: 0,
    },
    totalLabel: {
        fontSize: s(16),
        fontWeight: 'bold',
        color: AppColors.black,
    },
    totalValue: {
        fontSize: s(18),
        fontWeight: 'bold',
        color: AppColors.primary,
    },
    bottomButtonContainer: {
        paddingHorizontal: sharedPaddingHorizontal,
        paddingVertical: vs(16),
        position: 'absolute',
        width: '100%',
        bottom: 0,
        borderTopWidth: 1,
        borderColor: AppColors.borderColor,
        backgroundColor: AppColors.white,
    },
});
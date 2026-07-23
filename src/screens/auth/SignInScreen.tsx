import {View, StyleSheet, Image, TouchableOpacity, Alert} from "react-native";
import {sharedPaddingHorizontal} from "../../styles/sharedStyles";
import AppSafeView from "../../components/views/AppSafeView";
import {Images} from "../../constants/images-paths";
import {s, vs} from "react-native-size-matters";
import {useState} from "react";
import AppTextInput from "../../components/inputs/AppTextInput";
import AppText from "../../components/texts/AppText";
import AppButton from "../../components/buttons/AppButton";
import {AppColors} from "../../styles/colors";
import {useNavigation} from "@react-navigation/native";
import {useForm, Controller} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {signInSchema, SignInFormData} from "../../schemas/authSchemas";
import {auth, signInWithEmailAndPassword} from "../../config/firebase";

const SignInScreen = () => {
    const navigation = useNavigation();
    const [showPassword, setShowPassword] = useState(false);

    const {
        control,
        handleSubmit,
        formState: {errors, isSubmitting},
    } = useForm<SignInFormData>({
        resolver: yupResolver(signInSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const onSubmit = async (data: SignInFormData) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
            console.log('Sign In Success:', userCredential.user.email);
            // @ts-ignore - navigate to MainApp
            navigation.navigate("MainApp");
        } catch (error: any) {
            console.error('Sign in error:', error);
            let errorMessage = 'Failed to sign in. Please try again.';
            if (error.code === 'auth/user-not-found') {
                errorMessage = 'User not found. Please check your email.';
            } else if (error.code === 'auth/wrong-password') {
                errorMessage = 'Incorrect password. Please try again.';
            } else if (error.code === 'auth/invalid-email') {
                errorMessage = 'Invalid email address.';
            } else if (error.code === 'auth/too-many-requests') {
                errorMessage = 'Too many attempts. Please try again later.';
            }
            Alert.alert('Sign In Failed', errorMessage);
        }
    };

    return (
        <AppSafeView style={styles.container}>
            <Image source={Images.appLogo} style={styles.logo} />

            <Controller
                control={control}
                name="email"
                render={({field: {onChange, onBlur, value}}) => (
                    <AppTextInput
                        placeholder="Email"
                        onChangeText={onChange}
                        onBlur={onBlur}
                        value={value}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                )}
            />
            {errors.email && (
                <AppText style={styles.errorText}>{errors.email.message}</AppText>
            )}

            <Controller
                control={control}
                name="password"
                render={({field: {onChange, onBlur, value}}) => (
                    <AppTextInput
                        placeholder="Password"
                        onChangeText={onChange}
                        onBlur={onBlur}
                        value={value}
                        secureTextEntry={!showPassword}
                    />
                )}
            />
            {errors.password && (
                <AppText style={styles.errorText}>{errors.password.message}</AppText>
            )}

            <TouchableOpacity
                style={styles.forgotPassword}
                onPress={() => console.log('Forgot password')}
            >
                <AppText style={styles.forgotPasswordText}>Forgot Password?</AppText>
            </TouchableOpacity>

            <AppButton
                onPress={handleSubmit(onSubmit)}
                title="Sign In"
                disabled={isSubmitting}
            />

            <View style={styles.divider}>
                <View style={styles.dividerLine} />
                <AppText style={styles.dividerText}>or</AppText>
                <View style={styles.dividerLine} />
            </View>

            <AppButton
                onPress={() => navigation.navigate("SignUp" as never)}
                title="Create New Account"
                style={styles.registerButton}
                textColor={AppColors.primary}
            />
        </AppSafeView>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        paddingHorizontal: sharedPaddingHorizontal,
        paddingTop: vs(20),
    },
    logo: {
        height: s(200),
        width: s(400),
        marginBottom: vs(30),
        resizeMode: 'contain',
    },
    errorText: {
        fontSize: s(12),
        color: AppColors.redColor,
        alignSelf: 'flex-start',
        marginBottom: vs(4),
        marginLeft: s(8),
    },
    forgotPassword: {
        alignSelf: 'flex-end',
        marginBottom: vs(16),
        marginTop: vs(4),
    },
    forgotPasswordText: {
        fontSize: s(14),
        color: AppColors.primary,
    },
    registerButton: {
        backgroundColor: AppColors.white,
        borderWidth: 1,
        marginTop: vs(8),
        borderColor: AppColors.primary,
    },
    divider: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: vs(16),
        width: '100%',
    },
    dividerLine: {
        flex: 1,
        height: 1,
        backgroundColor: AppColors.borderColor,
    },
    dividerText: {
        fontSize: s(14),
        color: AppColors.medGray,
        paddingHorizontal: s(16),
    },
});
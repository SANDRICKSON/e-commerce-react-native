import {View, StyleSheet, Image, Alert} from "react-native";
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
import {signUpSchema, SignUpFormData} from "../../schemas/authSchemas";
import {auth, createUserWithEmailAndPassword} from "../../config/firebase";

const SignUpScreen = () => {
    const navigation = useNavigation();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const {
        control,
        handleSubmit,
        formState: {errors, isSubmitting},
    } = useForm<SignUpFormData>({
        resolver: yupResolver(signUpSchema),
        defaultValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
    });

    const onSubmit = async (data: SignUpFormData) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
            console.log('Sign Up Success:', userCredential.user.email);
            // @ts-ignore - navigate to MainApp
            navigation.navigate("MainApp");
        } catch (error: any) {
            console.error('Sign up error:', error);
            let errorMessage = 'Failed to create account. Please try again.';
            if (error.code === 'auth/email-already-in-use') {
                errorMessage = 'This email is already registered. Please sign in instead.';
            } else if (error.code === 'auth/invalid-email') {
                errorMessage = 'Invalid email address.';
            } else if (error.code === 'auth/weak-password') {
                errorMessage = 'Password is too weak. Please choose a stronger password.';
            }
            Alert.alert('Registration Failed', errorMessage);
        }
    };

    return (
        <AppSafeView style={styles.container}>
            <Image source={Images.appLogo} style={styles.logo} />

            <Controller
                control={control}
                name="username"
                render={({field: {onChange, onBlur, value}}) => (
                    <AppTextInput
                        placeholder="Username"
                        onChangeText={onChange}
                        onBlur={onBlur}
                        value={value}
                        autoCapitalize="none"
                    />
                )}
            />
            {errors.username && (
                <AppText style={styles.errorText}>{errors.username.message}</AppText>
            )}

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

            <Controller
                control={control}
                name="confirmPassword"
                render={({field: {onChange, onBlur, value}}) => (
                    <AppTextInput
                        placeholder="Confirm Password"
                        onChangeText={onChange}
                        onBlur={onBlur}
                        value={value}
                        secureTextEntry={!showConfirmPassword}
                    />
                )}
            />
            {errors.confirmPassword && (
                <AppText style={styles.errorText}>{errors.confirmPassword.message}</AppText>
            )}

            <AppText style={styles.passwordRequirements}>
                Password must contain at least 6 characters, one uppercase letter,
                one lowercase letter, and one number
            </AppText>

            <AppButton
                onPress={handleSubmit(onSubmit)}
                title="Create New Account"
                disabled={isSubmitting}
            />

            <View style={styles.divider}>
                <View style={styles.dividerLine} />
                <AppText style={styles.dividerText}>Already have an account?</AppText>
                <View style={styles.dividerLine} />
            </View>

            <AppButton
                onPress={() => navigation.navigate("SignIn" as never)}
                title="Sign In"
                style={styles.signInButton}
                textColor={AppColors.primary}
            />
        </AppSafeView>
    );
};

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        paddingHorizontal: sharedPaddingHorizontal,
        paddingTop: vs(10),
    },
    logo: {
        height: s(150),
        width: s(300),
        marginBottom: vs(20),
        resizeMode: 'contain',
    },
    errorText: {
        fontSize: s(12),
        color: AppColors.redColor,
        alignSelf: 'flex-start',
        marginBottom: vs(4),
        marginLeft: s(8),
    },
    passwordRequirements: {
        fontSize: s(11),
        color: AppColors.medGray,
        alignSelf: 'flex-start',
        marginBottom: vs(12),
        marginLeft: s(8),
        marginTop: vs(4),
    },
    signInButton: {
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
        fontSize: s(13),
        color: AppColors.medGray,
        paddingHorizontal: s(10),
    },
});
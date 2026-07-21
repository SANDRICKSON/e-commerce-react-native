import React from "react";
import {
    StyleSheet,
    TextInput,
    TextInputProps,
    KeyboardTypeOptions,
    StyleProp,
    TextStyle,
} from "react-native";
import { s, vs } from "react-native-size-matters";
import { AppColors } from "../../styles/colors";

interface AppTextInputProps {
    value: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
    secureTextEntry?: boolean;
    keyboardType?: KeyboardTypeOptions;
    style?: StyleProp<TextStyle>;
}

const AppTextInput: React.FC<AppTextInputProps> = ({
                                                       value,
                                                       onChangeText,
                                                       placeholder,
                                                       secureTextEntry,
                                                       keyboardType,
                                                       style,
                                                   }) => {
    return (
        <TextInput
            value={value}
            placeholder={placeholder}
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry}
            onChangeText={onChangeText}
            style={[styles.input, style]}
        />
    );
};

export default AppTextInput;

const styles = StyleSheet.create({
    input: {
        height: vs(50),
        borderRadius: s(25),
        borderWidth: 1,
        borderColor: AppColors.borderColor,
        paddingHorizontal: s(15),
        fontSize: s(16),
        backgroundColor: AppColors.white,
        width: "100%",
        marginBottom: vs(10),
    },
});
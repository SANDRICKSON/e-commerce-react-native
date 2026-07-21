import {SafeAreaView, StyleSheet, Text, View, ViewStyle} from "react-native";
import {AppColors} from "../../styles/colors";
import {FC, ReactNode} from "react";


interface AppSafeViewProps {
    children: ReactNode,
    style: ViewStyle
}

const AppSafeView: FC<AppSafeViewProps> = ({children, style}) => {
    return (

        <SafeAreaView style={styles.safeArea}>
            <View style={[styles.container, style]}>{children}</View>
        </SafeAreaView>

    );
}

export default AppSafeView;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: AppColors.white,

    },
    container: {
        flex: 1,
    }
});

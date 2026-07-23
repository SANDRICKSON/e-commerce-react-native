import { View, Text, StyleSheet } from 'react-native';
import { s, vs } from 'react-native-size-matters';
import AppSafeView from "../../components/views/AppSafeView";
import ProfileSectionButton from "../../components/buttons/ProfileSectionButton";
import {useNavigation} from "@react-navigation/native";

const ProfileScreen = () => {
    const navigation = useNavigation();

    const handleMyOrdersPress = () => {
        navigation.navigate("MyOrdersScreen" as never);
    };

    return (
        <AppSafeView style={styles.container}>
            <ProfileSectionButton
                title="My Orders"
                onPress={handleMyOrdersPress}
            />
        </AppSafeView>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: s(16),
        paddingVertical: vs(16),
    },
});
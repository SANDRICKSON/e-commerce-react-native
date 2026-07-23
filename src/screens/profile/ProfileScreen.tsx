import { View, Text, StyleSheet } from 'react-native';
import { s, vs } from 'react-native-size-matters';
import AppSafeView from "../../components/views/AppSafeView";
import ProfileSectionButton from "../../components/buttons/ProfileSectionButton";

const ProfileScreen = () => {
    return (
        <AppSafeView style={styles.container}>
            <Text></Text>
            <ProfileSectionButton title="My Orders"/>
        </AppSafeView>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: s(16),
    },
});
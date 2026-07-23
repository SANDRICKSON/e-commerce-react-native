import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { s, vs } from 'react-native-size-matters';
import AppText from "../texts/AppText";
import {AppFonts} from "../../styles/fonts";
import {AppColors} from "../../styles/colors";
import {MaterialIcons} from "@expo/vector-icons";

const ProfileSectionButton = ({onPress, title}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View style={styles.textContainer}>
                <AppText style={styles.textTitle}>{title}</AppText>
            </View>

            <View style={styles.iconContainer}>
                <MaterialIcons name="arrow-forward-ios" size={s(14)} color={AppColors.medGray}/>
            </View>
        </TouchableOpacity>
    );
};

export default ProfileSectionButton;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', // მნიშვნელოვანია - ელემენტები ჰორიზონტალურად
        alignItems: 'center', // ვერტიკალურად ცენტრში
        justifyContent: 'space-between', // ტექსტი მარცხნივ, ისარი მარჯვნივ
        paddingVertical: vs(12),
        paddingHorizontal: s(16),
        backgroundColor: AppColors.white,
        borderRadius: s(8),
        borderBottomWidth: 1,
        borderBottomColor: AppColors.lightGrey,
        width: '100%', // სრული სიგანე
    },
    textTitle: {
        fontSize: s(16),
        fontFamily: AppFonts.Medium,
        color: AppColors.black,
    },
    textContainer: {
        flex: 1, // იკავებს დარჩენილ ადგილს
        justifyContent: 'center',
    },
    iconContainer: {
        paddingLeft: s(8),
        justifyContent: 'center',
        alignItems: 'center',
    }
});
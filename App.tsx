import {ActivityIndicator, StyleSheet} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import MainAppStacks from "./src/navigation/MainAppStacks";
import {useFonts} from "expo-font";
import {Provider} from "react-redux";
import {store} from "./src/store/store";

export default function App() {
    const fontsLoaded = useFonts({
        "Nunito-Bold": require('./src/assets/fonts/Nunito-Bold.ttf'),
        "Nunito-Medium": require('./src/assets/fonts/Nunito-Medium.ttf'),
    })

    if(!fontsLoaded){
        return <ActivityIndicator size="large"/>
    }
    return (

        <Provider store={store}>
            <NavigationContainer>
                <MainAppStacks/>
            </NavigationContainer>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

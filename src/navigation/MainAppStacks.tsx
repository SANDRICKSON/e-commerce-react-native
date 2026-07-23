import {createStackNavigator} from "@react-navigation/stack";
import SignUpScreen from "../screens/auth/SignUpScreen";
import SignInScreen from "../screens/auth/SignInScreen";
import MainAppBottomTabs from "./MainAppBottomTabs";
import CheckoutScreen from "../screens/cart/CheckoutScreen";

const Stack = createStackNavigator();

export default function MainAppStacks() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>

            <Stack.Screen name="SignUp" component={SignUpScreen}/>
            <Stack.Screen name="SignIn" component={SignInScreen}/>


            <Stack.Screen name="MainApp" component={MainAppBottomTabs}/>
            <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} options={{ headerShown: true }} />
        </Stack.Navigator>
    );
}
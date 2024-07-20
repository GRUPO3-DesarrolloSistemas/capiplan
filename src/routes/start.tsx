import { NavigationContainer } from "@react-navigation/native";
import Login from "../screens/login";
import Register from "../screens/register";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function Start() {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator>
                <Stack.Screen
                    name='Login'
                    component={Login}
                    options={{
                        headerShown: false,
                        fullScreenGestureEnabled: true,
                    }}
                />
                <Stack.Screen
                    name="Register"
                    component={Register}
                    options={{
                        headerTransparent: true,
                        headerTitle: '',
                        fullScreenGestureEnabled: true,
                        animation: "ios",
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
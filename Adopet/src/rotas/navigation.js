import { NavigationContainer } from "@react-navigation/native/lib/commonjs";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../paginas/Home";
import Login from "../paginas/Login"

const Stack = createStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{headerTitle: "", headerShown: false}}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Login" component={Login} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}   
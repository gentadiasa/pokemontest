import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import PokemonDetail from '../screens/PokemonDetail';

const Stack = createNativeStackNavigator();

function MainRouter() {
    return (
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
            }}
          >
            <Stack.Screen
                name="Home"
                component={Home}
            />
            <Stack.Screen
                name="PokemonDetail"
                component={PokemonDetail}
            />
          </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainRouter;
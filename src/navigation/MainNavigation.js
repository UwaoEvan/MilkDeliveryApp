import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TabNavigation from './TabNavigation';
import Details from '../screens/Details';
import Delivery from '../screens/Delivery';

const Stack = createStackNavigator();
export default function MainNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode='none'>
                <Stack.Screen name='Home' component={TabNavigation} />
                <Stack.Screen name='Details' component={Details} />
                <Stack.Screen name='Delivery' component={Delivery} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, MaterialIcons, Entypo } from '@expo/vector-icons';

import Home from '../screens/Home';
import { COLORS } from '../constants/Colors';
import CustomBottomButton from '../components/CustomBottomButton';

const Tabs = createBottomTabNavigator();

export default function TabNavigation() {
    return (
        <Tabs.Navigator tabBarOptions={{
            style: {
                position: 'absolute',
                bottom: 0,
                right: 0,
                left: 0,
                borderTopWidth: 0,
                elevation: 0,
                backgroundColor: 'transparent'
            }
        }}>
            <Tabs.Screen name='Home' component={Home} options={{
                tabBarLabel: () => null,
                tabBarIcon: ({ focused }) => (
                    <Entypo
                        name="shop"
                        size={24}
                        color={focused ? COLORS.primary : 'gray'}
                    />
                ),
                tabBarButton: (props) => (
                    <CustomBottomButton
                        {...props}
                    />
                )
            }}
            />
            <Tabs.Screen name='Search' component={Home} options={{
                tabBarLabel: () => null,
                tabBarIcon: ({ focused }) => (
                    <MaterialCommunityIcons
                        name="magnify"
                        size={24}
                        color={focused ? COLORS.primary : 'gray'}
                    />
                ),
                tabBarButton: (props) => (
                    <CustomBottomButton
                        {...props}
                    />
                )
            }} />
            <Tabs.Screen name='Favourite' component={Home} options={{
                tabBarLabel: () => null,
                tabBarIcon: ({ focused }) => (
                    <MaterialCommunityIcons
                        name="cards-heart"
                        size={24}
                        color={focused ? COLORS.primary : 'gray'}
                    />
                ),
                tabBarButton: (props) => (
                    <CustomBottomButton
                        {...props}
                    />
                )
            }} />
            <Tabs.Screen name='User' component={Home} options={{
                tabBarLabel: () => null,
                tabBarIcon: ({ focused }) => (
                    <MaterialIcons
                        name="person"
                        size={24}
                        color={focused ? COLORS.primary : 'gray'}
                    />
                ),
                tabBarButton: (props) => (
                    <CustomBottomButton
                        {...props}
                    />
                )
            }} />
        </Tabs.Navigator>
    )
}
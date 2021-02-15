import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';

import { COLORS } from '../constants/Colors';

export default function CustomButton({ navigation, title, style }) {
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('Delivery')}
            style={{ ...styles.container, ...style }}
        >
            <Text style={{ ...styles.title, ...style }}>{title}</Text>
        </TouchableOpacity>
    )
}
const { width, height } = Dimensions.get('screen');
const mainWidth = width;
const mainHeight = height;
const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.primary,
        width: mainWidth / 1.11,
        height: mainHeight / 15,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: '#fff',
        fontFamily: 'Nunito-Bold',
        fontSize: 18
    }
})
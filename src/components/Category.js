import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';

import { COLORS } from '../constants/Colors';
export default function Category({ item, selected, setSelected, stock }) {

    const onSelectedCategory = (item) => {
        const selectedCat = stock.filter(p => p.name === item.name);
        setSelected(selectedCat[0]);
    }

    return (
        <TouchableOpacity
            style={(selected?.name === item.name) ? styles.containerSelected : styles.container}
            onPress={() => onSelectedCategory(item)}
        >
            <View style={styles.imageHolder}>
                <Image
                    source={item.image}
                    resizeMode='stretch'
                    style={styles.catImage}
                />
            </View>
            <View style={styles.nameHolder}>
                <Text style={(selected?.name === item.name) ? styles.nameSelected : styles.name}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    )
}


const { width, height } = Dimensions.get('screen');
const mainHeight = height;
const mainWidth = width;
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.white,
        width: mainWidth / 5,
        height: mainHeight / 6,
        borderRadius: 40,
        marginRight: 10,
        marginLeft: 1.6,
        elevation: 3,
        shadowColor: '#333',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginVertical: 5
    },
    containerSelected: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.primary,
        width: mainWidth / 5,
        height: mainHeight / 6,
        borderRadius: 40,
        marginRight: 10
    },
    imageHolder: {
        width: mainWidth / 6,
        height: mainWidth / 6,
        borderRadius: 40,
        position: 'absolute',
        top: 8
    },
    nameHolder: {
        marginTop: '70%'
    },
    name: {
        fontFamily: 'Nunito-Bold',
        color: '#000'
    },
    nameSelected: {
        fontFamily: 'Nunito-Bold',
        color: '#fff'
    },
    catImage: {
        width: '100%',
        height: '100%',
        borderRadius: 40
    }
})
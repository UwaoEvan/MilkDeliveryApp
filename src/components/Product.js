import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/Colors';

export default function Product({ item, navigation, cartItems, setCartItems }) {
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('Details', { item: item, cartItems: cartItems, setCartItems: setCartItems })}
        >
            <Image
                source={item.image}
                resizeMode='cover'
                style={styles.container}
            />
            <View style={styles.placeholder}>
                <Text style={styles.duration}>20 - 30 mins</Text>
            </View>
            <View style={styles.ratings}>
                <Text style={styles.ratingText}>{item.name}</Text>
                <Ionicons
                    name="md-star"
                    size={15}
                    color={COLORS.primary}
                />
                <Text style={styles.ratingText}>{item.ratings.toFixed(1)}</Text>
            </View>
        </TouchableOpacity>
    )
}

const { width, height } = Dimensions.get('screen');
const mainWidth = width;
const mainHeight = height;
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: mainWidth / 1.11,
        height: mainHeight / 4,
        marginBottom: 10,
        borderRadius: 10
    },
    placeholder: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        width: mainWidth / 4,
        height: mainHeight / 20,
        backgroundColor: '#fff',
        top: mainHeight / 5,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 10,
        borderTopWidth: 0.3,
        borderRightWidth: 0.3,
        borderColor: '#ccc'
    },
    duration: {
        fontFamily: 'Nunito-Bold',
    },
    ratings: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    ratingText: {
        fontFamily: 'Nunito-Bold',
        paddingHorizontal: 5
    }
})
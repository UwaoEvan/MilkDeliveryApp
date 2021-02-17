import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

import CustomButton from '../components/CustomButton';

export default function Details({ route, navigation }) {
    const [shop, setShop] = useState(null);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const { item } = route.params;
        setShop(item);
    }, []);

    const addItems = (product) => {
        const addedProduct = cartItems.filter(p => p.name === product.name);

        if (addedProduct[0]) {
            let newQty = addedProduct[0].qty + 1;
            addedProduct[0].qty = newQty;
            addedProduct[0].price = product.price;
            addedProduct[0].total = addedProduct[0].qty * product.price;

        } else {
            let newItem = {
                id: product.id,
                name: product.name,
                price: product.price,
                total: product.price,
                qty: 1
            }

            setCartItems([...cartItems, newItem]);
        }

    }

    const getQty = (id) => {
        const selected = cartItems.filter(c => c.id === id);

        if (selected[0]) {
            return selected[0].qty;
        } else {
            return 0
        }
    }

    const getItems = () => {
        if (cartItems.length > 0) {
            return cartItems.length;
        } else {
            return 0
        }
    }

    const getTotal = () => {
        if (cartItems.length > 0) {
            return cartItems[0].total
        } else {
            return 0
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.topBanner}>

                {/* Header Icons */}

                <View style={styles.headerIconsContainer}>
                    <View style={styles.headerIcons}>
                        <Ionicons
                            name="arrow-back"
                            size={24}
                            color="black"
                            onPress={() => navigation.navigate('Home')}
                        />
                        <View style={styles.location}>
                            <Text style={{ fontFamily: 'Nunito-Bold' }}>{shop?.name}</Text>
                        </View>
                        <Ionicons
                            name="list"
                            size={24}
                            color="black"
                        />
                    </View>
                </View>

                {/* Body */}

                <Image
                    source={shop?.image}
                    resizeMode='stretch'
                    style={styles.image}
                />

                <View style={styles.cartContainer}>
                    <View style={styles.cart}>

                        {/* Minus */}

                        <TouchableOpacity
                            style={{ paddingLeft: 10 }}
                        >
                            <Feather
                                name="minus"
                                size={14}
                                color="black"
                            />
                        </TouchableOpacity>

                        {/* Price */}

                        <Text style={{ fontFamily: 'Nunito-Bold', fontSize: 20 }}>{getQty(shop?.id)}</Text>

                        {/* Plus */}

                        <TouchableOpacity
                            style={{ paddingRight: 10 }}
                        >
                            <Feather
                                name="plus"
                                size={14}
                                color="black"
                                onPress={() => addItems(shop)}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Product Title and Price */}

                <Text style={styles.productTitle}>{shop?.name} - Ksh {shop?.price.toFixed(2)}</Text>

                {/* Product Description */}
                <ScrollView>
                    <Text style={styles.description}>{shop?.description}</Text>
                </ScrollView>
            </View>
            <View style={styles.bottomBanner}>
                <View style={{ marginHorizontal: 20 }}>
                    <View style={styles.cartDetails}>
                        <Text style={{ fontFamily: 'Nunito-Bold', fontSize: 16 }}>{getItems()} items in Cart</Text>
                        <Text style={{ fontFamily: 'Nunito-Bold', fontSize: 16 }}>Ksh {getTotal()}</Text>
                    </View>
                    <View
                        style={{
                            borderWidth: 0.5,
                            borderColor: '#ccc'
                        }}
                    />
                    <View style={styles.landmark}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Ionicons
                                name="location-sharp"
                                size={12}
                                color="gray"
                            />
                            <Text style={styles.landmarkText}>Dembwa</Text>
                        </View>
                    </View>
                    <CustomButton
                        navigation={navigation}
                        title='Order'
                    />
                </View>
            </View>
        </View>
    )
}

const { width, height } = Dimensions.get('screen');
const mainWidth = width;
const mainHeight = height;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff'
    },
    topBanner: {
        flex: 2,
        marginLeft: mainWidth / 20,
        marginRight: mainWidth / 20
    },
    headerIconsContainer: {
        paddingTop: mainHeight / 20
    },
    headerIcons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    location: {
        backgroundColor: '#dcdcdc',
        paddingHorizontal: mainWidth / 10,
        paddingVertical: mainHeight * 0.01,
        borderRadius: 20
    },
    image: {
        width: mainWidth / 1.5,
        height: mainWidth / 1.5,
        borderRadius: mainWidth / 1,
        alignSelf: 'center',
        marginVertical: 10
    },
    cartContainer: {
        position: 'absolute',
        top: mainHeight / 2.25,
        left: mainWidth / 3.2
    },
    cart: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 40,
        width: 100,
        backgroundColor: '#fff',
        shadowColor: '#333',
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
    },
    productTitle: {
        fontFamily: 'Nunito-Bold',
        textAlign: 'center',
        fontSize: 25,
        marginTop: 10
    },
    description: {
        fontSize: 14,
        textAlign: 'center',
        marginVertical: 10
    },
    bottomBanner: {
        flex: 0.8,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    cartDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40,
        marginBottom: 20
    },
    landmark: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10
    },
    landmarkText: {
        fontFamily: 'Nunito-Bold',
        marginHorizontal: 10,
        fontSize: 12
    }
})
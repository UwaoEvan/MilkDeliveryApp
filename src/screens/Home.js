import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { categories, products } from '../constants/dummyData';
import Category from '../components/Category';
import Product from '../components/Product';

export default function Home({ navigation }) {
    const [stock, setStock] = useState(products);
    const [selected, setSelected] = useState(null);
    const [cartItems, setCartItems] = useState([]);

    const footer = () => {
        return (
            <View
                style={{
                    marginBottom: 50,
                    marginTop: 20,
                    width: 200,
                    height: 300
                }}
            />
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.inner}>
                <View style={styles.headerContainer}>
                    <View style={styles.headerIcons}>
                        <FontAwesome
                            name="street-view"
                            size={24}
                            color="black"
                        />
                        <View style={styles.location}>

                            <Text style={{ fontFamily: 'Nunito-Bold' }}>Dembwa Market</Text>
                        </View>

                        <FontAwesome
                            name="shopping-basket"
                            size={24}
                            color="black"
                        />
                    </View>
                </View>

                {/* Welcome Text */}

                <View style={{ paddingTop: mainHeight / 25 }}>
                    <Text style={styles.mainTitle}>Main</Text>
                    <Text style={styles.mainTitle}>Categories</Text>
                </View>

                {/* Categories */}
                <View style={{ paddingVertical: 15 }}>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={categories}
                        renderItem={({ item }) => (
                            <Category
                                item={item}
                                selected={selected}
                                setSelected={setSelected}
                                stock={stock}
                            />
                        )}
                    />
                </View>

                {/* Shop */}

                {!selected ? (
                    <FlatList
                        data={products}
                        renderItem={({ item }) => (
                            <Product
                                item={item}
                                navigation={navigation}
                            />
                        )}
                        showsVerticalScrollIndicator={false}
                        ListFooterComponent={footer()}
                    />
                ) : (
                        <Product
                            item={selected}
                            navigation={navigation}
                        />
                    )}


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
        backgroundColor: '#fff'
    },
    inner: {
        marginLeft: mainWidth / 20,
        marginRight: mainWidth / 20,
    },
    headerIcons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    headerContainer: {
        paddingTop: mainHeight / 20
    },
    location: {
        backgroundColor: '#dcdcdc',
        paddingHorizontal: mainWidth / 10,
        paddingVertical: mainHeight * 0.01,
        borderRadius: 20
    },
    mainTitle: {
        fontFamily: 'Nunito-Bold',
        fontSize: 30
    }
})
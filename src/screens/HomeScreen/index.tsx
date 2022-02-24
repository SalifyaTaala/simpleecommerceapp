/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import ProductItem from '../../components/ProductItems';
import products from '../../components/data/products';

const HomeScreen = ({ searchValue }: { searchValue: string }) => {
    console.log(searchValue);
    return (
        <View style={styles.page}>
            {/**Render roduct component */}
            {/* <ProductItem item={products[0]} /> */}
            <FlatList
                data={products}
                renderItem={({ item }) => <ProductItem item={item} />}
                showsVerticalScrollIndicator={false}

            />
            {/* <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem /> */}

        </View>
    );
};
const styles = StyleSheet.create({

    page: {
        padding: 10,

    },

});
export default HomeScreen;

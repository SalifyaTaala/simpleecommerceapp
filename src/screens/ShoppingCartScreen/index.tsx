/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CartProductItem from '../../components/CartProductItems';
import products from '../../components/data/cart';
import Button from '../../components/Button';


const ShoppingCartScreen = () => {
    const navigation = useNavigation();
    const totalPrice = products.reduce(
        (summedPrice, product) =>
            summedPrice + product.item.price * product.quantity, 0
    );
    const onCheckout = () => {
        navigation.navigate('Address');
    };
    return (
        <View style={styles.page}>
            {/**Render roduct component */}

            {/* <ProductItem item={products[0]} /> */}
            <FlatList
                data={products}
                renderItem={({ item }) =>
                    <CartProductItem cartItem={item} />
                    //render quality selector
                }
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={() => (
                    <View>
                        <Text
                            style=
                            // eslint-disable-next-line react-native/no-inline-styles
                            {{
                                fontSize: 18,
                                fontWeight: 'bold',
                            }}>
                            Subtotal({products.length} items) :{' '}
                            <Text
                                style=
                                // eslint-disable-next-line react-native/no-inline-styles
                                {{
                                    color: '#e47911',
                                }}>
                                {totalPrice.toFixed(2)}</Text>
                        </Text>
                        <Button
                            text="Proceed to checkout"
                            onPress={onCheckout}
                            // eslint-disable-next-line react-native/no-inline-styles
                            containerStyles={{ backgroundColor: '#f7e300', borderColor: '#f7e300' }}
                        />
                    </View>

                )}

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
export default ShoppingCartScreen;

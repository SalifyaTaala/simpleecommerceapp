/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useRoute } from '@react-navigation/native';
import styles from './style';

import product from '../../components/data/product';
import Button from '../../components/Button';
import QuantitySelector from '../../components/QuantitySelector';
import ImageCarousel from '../../components/ImageCarosoel';

const ProductScreen = () => {
    const [selectedOption, setSelectedOption] = useState(
        product.options ? product.options[0] : null);
    const [quantity, setQuantity] = useState(1);
    const route = useRoute();
    console.log(route.params);
    return (
        <ScrollView style={styles.root}>
            <Text style={styles.title}>{product.title}</Text>
            {/* Image ccarausel */}
            <ImageCarousel images={product.images} />

            {/* Option selector */}
            <Picker
                selectedValue={selectedOption}
                onValueChange={(itemValue) =>
                    setSelectedOption(itemValue)
                }
            >
                {product.options.map(option => (
                    <Picker.Item label={option} value={option} />))}

            </Picker>
            {/* Price */}
            <Text style={styles.price}>from {product.price}
                {product.oldPrice && <Text style={styles.oldPrice}>{product.oldPrice}</Text>}
            </Text>
            {/* Descrition */}
            <Text style={styles.description}>
                {product.description}
            </Text>
            {/* Quantity sector */}
            <View ><QuantitySelector quantity={quantity} setQuantity={setQuantity} /></View>
            {/* Buttons */}
            <Button
                text={'Add to Cart'}
                onPress={() => {

                }}
                // eslint-disable-next-line react-native/no-inline-styles
                containerStyles={{ backgroundColor: '#e3c905' }}
            />
            <Button text={'Buy Now'} onPress={() => { }} />
        </ScrollView>
    );
};

export default ProductScreen;

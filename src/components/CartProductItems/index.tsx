/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import QuantitySelector from '../QuantitySelector';
import styles from './styles';

interface CartProductItemProps {
    cartItem: {
        id: string;
        quantity: number;
        option?: string;
        item: {
            id: string,
            title: string,
            image: string,
            avgRating: number,
            price: number,
            oldPrice?: number,
        };
    }
}

const CartProductItem = ({ cartItem }: CartProductItemProps) => {
    const { quantity: quantityProp, item } = cartItem;
    const [quantity, setQuantity] = useState(quantityProp);
    // const item = props.item;
    // const { item } = props;
    return (
        <View style={styles.root} >
            <View style={styles.row} >
                <Image
                    style={styles.image}
                    source={{
                        uri: item.image,
                    }}
                />
                <View style={styles.rightContainer}>
                    <Text style={styles.title} numberOfLines={3}>
                        {item.title}
                    </Text>
                    {/**Rating */}
                    {[0, 0, 0, 0, 0].map((el, i) => (
                        <FontAwesome
                            key={`${item.id}-${i}`}
                            style={styles.star}
                            name={i < Math.floor(item.avgRating) ? 'star' : 'star-o'}
                            size={16}
                            color={'#e47911'} />))}
                    {/* <FontAwesome style={styles.star} name="star" size={18} color={'e47911'} />
                <FontAwesome style={styles.star} name="star" size={18} color={'e47911'} />
                <FontAwesome style={styles.star} name="star-half-full" size={18} color={'e47911'} />
                <FontAwesome style={styles.star} name="star-o" size={18} color={'e47911'} /> */}
                    {/* <Text>13,032</Text> */}
                    <View style={styles.ratingsContainer} />
                    <Text style={styles.price}>from {item.price}
                        {item.oldPrice && <Text style={styles.oldPrice}>{item.oldPrice}</Text>}
                    </Text>
                </View>
                <View style={styles.quantityContainer}><QuantitySelector quantity={quantity} setQuantity={setQuantity} /></View>
            </View>
        </View>

    );
};

export default CartProductItem;

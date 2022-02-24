/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

interface ProductItemProps {
    item: {
        id: string,
        title: string,
        image: string,
        avgRating: number,
        price: number,
        oldPrice?: number,
    }
}

const ProductItem = ({ item }: ProductItemProps) => {
    const navigation = useNavigation();
    // const item = props.item;
    // const { item } = props;
    const onPress = () => {
        console.warn('item pressed');
        navigation.navigate('ProductDetails', { id: item.id });
    };
    return (
        < Pressable onPress={onPress} style={styles.root} >
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
        </Pressable >
    );
};

export default ProductItem;

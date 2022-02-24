/* eslint-disable prettier/prettier */
import React, { useState, useCallback } from 'react';
import { FlatList, Image, StyleSheet, View, useWindowDimensions, ScrollView } from 'react-native';


const ImageCarousel = ({ images }: { images: string[] }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const windowWidth = useWindowDimensions().width;
    //Changing of images
    const onFlatListUpdate = useCallback(({ viewableItems }) => {
        if (viewableItems.length > 0) {
            setActiveIndex(viewableItems[0].index || 0);
        }
        console.log(viewableItems);
    }, []);
    // const onViewableItemsChanged = useCallback( ({
    //     viewableItems,
    // }) => {
    //     // Do stuff
    //     if (viewableItems.length > 0) {
    //         setActiveIndex(viewableItems[0].index || 0);
    //     }
    //     console.log(viewableItems);
    // },[]);
    //

    return (
        <ScrollView style={styles.root}>
            <FlatList
                data={images}
                renderItem={({ item }) => (
                    <Image
                        style={[styles.image, { width: windowWidth - 20 }]}
                        source={{ uri: item }} />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={windowWidth - 20}
                snapToAlignment={'center'}
                decelerationRate={'fast'}
                viewabilityConfig={{
                    viewAreaCoveragePercentThreshold: 50,

                }}

                onViewableItemsChanged={onFlatListUpdate}
            />
            <View style={styles.dots}>
                {images.map((image, index) => (
                    <View
                        style={[
                            styles.dot,
                            // eslint-disable-next-line react-native/no-inline-styles
                            {
                                backgroundColor: index === activeIndex ? '#c9c9c9' : '#ededed',
                            },

                        ]} />
                )

                )}
            </View>

        </ScrollView>
    );
};
const styles = StyleSheet.create({
    root: {

    },
    image: {
        margin: 10,
        height: 250,
        width: 250,
        resizeMode: 'contain',

    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 25,
        borderWidth: 1,
        backgroundColor: '#ededed',
        borderColor: '#c9c9c9',
        margin: 5,
    },
    dots: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
});
export default ImageCarousel;

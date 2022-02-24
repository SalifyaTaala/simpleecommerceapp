/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    root: {

        borderWidth: 1,
        borderColor: '#d1d1d1',
        borderRadius: 10,
        backgroundColor: '#fff',
        width: '100%',
        marginVertical:5,
    },
    row: {
          flexDirection: 'row',
    },
    quantityContainer: {
        margin: 10,
    },
    image: {
        flex: 2,
        height: 150,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 18,
    },
    rightContainer: {
        padding: 10,
        flex: 3,
    },
    page: {
        padding: 10,
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    oldPrice: {
        fontSize: 12,
        fontWeight: 'normal',
        textDecorationLine: 'line-through',
    },
    ratingsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,

    },
    star: {
        margin: 2,
    },
});
export default styles;

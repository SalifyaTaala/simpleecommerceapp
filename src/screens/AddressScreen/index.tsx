/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Text, TextInput, View, Alert, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import countryList from 'country-list';
import Button from '../../components/Button';

import styles from './styles';

const countries: Array<any> = countryList.getData();


const AddressScreen = () => {
    // State store
    const [country, setCountry] = useState(countries[0].code);
    const [fullname, setFullname] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [addressError, setAddressError] = useState('Invalid address');
    const onCheckout = () => {
        //Validations
        if (addressError) {
            Alert.alert('Fix all errors before submit');
            return;
        }
        if (!fullname) {
            Alert.alert('Name can not be empty');
            return;
        }
    };
    const validateAddress = () => {
        if (address.length < 3) {
            setAddressError('Address too short');
        }
    };

    return <ScrollView style={styles.root}>
        <View style={styles.row}>
            <Picker selectedValue={country} onValueChange={setCountry}>
                {countries.map(country => (
                    <Picker.Item value={country.code} label={country.name} />
                ))}

            </Picker>
        </View>
        {/* Full Name */}
        <View style={styles.row}>
            <Text>Full name (First and Last Name)</Text>
            <TextInput
                style={styles.input} placeholder="Full Name" value={fullname}
                onChangeText={setFullname}
            />
        </View>
        {/* Phone number */}
        <View style={styles.row}>
            <Text>Phone Number</Text>
            <TextInput
                style={styles.input}
                placeholder="Phone number"
                value={phone}
                onChangeText={setPhone}
                keyboardType={'phone-pad'}
            />
        </View>
        {/* Address */}
        <View style={styles.row}>
            <Text>Address</Text>
            <TextInput
                style={styles.input}
                placeholder="Address"
                value={address}
                onEndEditing={validateAddress}
                onChangeText={(text) => {
                    setAddress(text);
                    setAddressError('');
                }
                }

            />
            {!!addressError && (
                <Text style={styles.errorLabel}>{addressError}</Text>
            )}
        </View>
        {/* City */}
        <View style={styles.row}>
            <Text>City</Text>
            <TextInput
                style={styles.input}
                placeholder="City"
                value={city}
                onChangeText={setCity}
                keyboardType={'phone-pad'}
            />
        </View>
        <Button text="Checkout" onPress={onCheckout} />
    </ScrollView>;



};

export default AddressScreen;

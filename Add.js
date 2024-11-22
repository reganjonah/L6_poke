import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { datasource } from './Data';

const Add = ({ navigation }) => {
    const [name, setName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [type, setType] = useState('Water');

    const handleAdd = () => {
        if (!name.trim() || !cardNumber.trim()) {
            Alert.alert('Error', 'Please fill out all fields.');
            return;
        }

        const sectionIndex = datasource.findIndex((section) => section.title === type);
        if (sectionIndex !== -1) {
            datasource[sectionIndex].data.push({ name, cardNumber });
            Alert.alert('Success', `${name} added to ${type}!`);
            navigation.navigate('Home');
        } else {
            Alert.alert('Error', 'Invalid Pokémon type selected.');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Pokémon Name"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Card Number"
                keyboardType="numeric"
                value={cardNumber}
                onChangeText={setCardNumber}
            />
            <Picker
                selectedValue={type}
                style={styles.picker}
                onValueChange={(itemValue) => setType(itemValue)}
            >
                {datasource.map((section) => (
                    <Picker.Item key={section.title} label={section.title} value={section.title} />
                ))}
            </Picker>
            <Button title="Add Pokémon" onPress={handleAdd} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: 'lightgrey',
        padding: 10,
        marginBottom: 15,
        borderRadius: 5,
        fontSize: 16,
    },
    picker: {
        height: 50,
        marginBottom: 15,
    },
});

export default Add;

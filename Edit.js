import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Image } from 'react-native';
import { datasource } from './Data';

const Edit = ({ route, navigation }) => {
    const { index, section, item } = route.params;
    const [name, setName] = useState(item.name);
    const [cardNumber, setCardNumber] = useState(item.cardNumber);

    const handleSave = () => {
        const sectionIndex = datasource.findIndex((s) => s.title === section);
        if (sectionIndex !== -1) {
            datasource[sectionIndex].data[index] = { ...item, name, cardNumber };
            navigation.navigate('Home');
        }
    };

    const handleDelete = () => {
        Alert.alert('Confirm Delete', 'Are you sure you want to delete this Pokémon?', [
            { text: 'Cancel', style: 'cancel' },
            {
                text: 'Delete',
                style: 'destructive',
                onPress: () => {
                    const sectionIndex = datasource.findIndex((s) => s.title === section);
                    if (sectionIndex !== -1) {
                        datasource[sectionIndex].data.splice(index, 1);
                        navigation.navigate('Home');
                    }
                },
            },
        ]);
    };

    return (
        <View style={styles.container}>
            {item.image && <Image source={item.image} style={styles.image} />}
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
            <Button title="Save" onPress={handleSave} />
            <Button title="Delete" color="red" onPress={handleDelete} />
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
    image: {
        width: 120,
        height: 180,
        alignSelf: 'center',
        marginBottom: 20,
        resizeMode: 'contain',
    },
});

export default Edit;

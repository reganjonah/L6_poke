import React from 'react';
import { View, SectionList, Text, TouchableOpacity, Button, Image, StyleSheet, StatusBar } from 'react-native';
import { datasource } from './Data';

const Home = ({ navigation }) => {
    const renderItem = ({ item, index, section }) => (
        <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('Edit', { index, section: section.title, item })}
        >
            <View style={styles.itemTextContainer}>
                <Text style={styles.itemText}>{item.name}</Text>
                <Text style={styles.cardNumber}>Card #: {item.cardNumber}</Text>
            </View>
            {item.image && <Image source={item.image} style={styles.itemImage} />}
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <View style={styles.buttonContainer}>
                <Button title="Add Pokémon" onPress={() => navigation.navigate('Add')} />
            </View>
            <SectionList
                sections={datasource}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
                renderSectionHeader={({ section: { title } }) => (
                    <View
                        style={[
                            styles.header,
                            title === 'Water'
                                ? styles.waterHeader
                                : title === 'Fire'
                                    ? styles.fireHeader
                                    : styles.electricHeader,
                        ]}
                    >
                        <Text style={styles.headerText}>{title}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 10,
    },
    buttonContainer: {
        marginBottom: 10,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: 'lavender',
        borderBottomWidth: 2,
        borderBottomColor: 'lightgrey',
        borderLeftWidth: 2,
        borderLeftColor: 'lightgrey',
        borderRightWidth: 2,
        borderRightColor: 'lightgrey',
    },
    itemTextContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    itemText: {
        fontSize: 20,
    },
    cardNumber: {
        fontSize: 14,
        color: 'black',
        fontStyle: 'italic',
    },
    itemImage: {
        width: 120,
        height: 180,
        resizeMode: 'contain',
    },
    header: {
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: 'lightgrey',
        borderLeftWidth: 2,
        borderLeftColor: 'lightgrey',
        borderRightWidth: 2,
        borderRightColor: 'lightgrey',
    },
    headerText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        textShadowColor: 'black',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 15,
    },
    waterHeader: {
        backgroundColor: 'skyblue',
    },
    fireHeader: {
        backgroundColor: 'orange',
    },
    electricHeader: {
        backgroundColor: 'gold',
    },
});

export default Home;

import React from 'react';
import { View, Text, Image, SectionList, TouchableOpacity, Button, StyleSheet, StatusBar } from 'react-native';

const datasource = [
  {
    title: 'Water',
    data: [
      {
        name: 'Squirtle',
        cardNumber: '7',
        image: require('./img/squirtle_w.png'),
      },
      {
        name: 'Psyduck',
        cardNumber: '54',
        image: require('./img/psyduck_w.png'),
      },
      {
        name: 'Vaporeon',
        cardNumber: '134',
        image: require('./img/vaporeon_w.png'),
      },
    ],
  },
  {
    title: 'Fire',
    data: [
      {
        name: 'Charmander',
        cardNumber: '4',
        image: require('./img/charmander_f.png'),
      },
      {
        name: 'Flareon',
        cardNumber: '136',
        image: require('./img/flareon_f.png'),
      },
      {
        name: 'Magmar',
        cardNumber: '126',
        image: require('./img/charmander_f.png'),
      },
    ],
  },
  {
    title: 'Electric',
    data: [
      {
        name: 'Pikachu',
        cardNumber: '25',
        image: require('./img/pikachu_e.png'),
      },
      {
        name: 'Magnemite',
        cardNumber: '81',
        image: require('./img/magnemite_e.png'),
      },
      {
        name: 'Jolteon',
        cardNumber: '135',
        image: require('./img/jolteon_e.png'),
      },
    ],
  },
];

const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item}>
      <View style={styles.itemTextContainer}>
        <Text style={styles.itemText}>{item.name}</Text>
        <Text style={styles.cardNumber}>Card #: {item.cardNumber}</Text>
      </View>
      <Image source={item.image} style={styles.itemImage} />
    </TouchableOpacity>
);

const App = () => {
  return (
      <View style={styles.container}>
        <StatusBar hidden={true} />

        <View style={styles.buttonContainer}>
          <Button title="Add Pokémon" onPress={() => {}} />
        </View>

        <SectionList
            sections={datasource}
            keyExtractor={(item) => item.name}
            renderItem={renderItem}
            stickyHeaderIndices={[0]}
            renderSectionHeader={({ section: { title } }) => (
                <View style={[styles.header, title === 'Water' ? styles.waterHeader : title === 'Fire' ? styles.fireHeader : styles.electricHeader]}>
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

export default App;

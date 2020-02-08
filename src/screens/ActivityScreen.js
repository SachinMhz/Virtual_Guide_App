import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';

const CardView = ({navigation}) => {
  const data = [
    {
      id: 1,
      title: 'Lorem ipsum dolor',
      image: 'https://lorempixel.com/400/200/nature/6/',
    },
    {
      id: 2,
      title: 'Sit amet, consectetuer',
      image: 'https://lorempixel.com/400/200/nature/5/',
    },
    {
      id: 3,
      title: 'Dipiscing elit. Aenean ',
      image: 'https://lorempixel.com/400/200/nature/4/',
    },
    {
      id: 4,
      title: 'Commodo ligula eget dolor.',
      image: 'https://lorempixel.com/400/200/nature/6/',
    },
    {
      id: 9,
      title: 'Felis, ultricies nec, pellentesque',
      image: 'https://lorempixel.com/400/200/nature/4/',
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={data}
        keyExtractor={item => {
          return item.id;
        }}
        ItemSeparatorComponent={() => {
          return <View style={styles.separator} />;
        }}
        renderItem={post => {
          const item = post.item;
          return (
            <TouchableOpacity>
              <View style={styles.card}>
                <Image style={styles.cardImage} source={{uri: item.image}} />
                <View style={styles.cardContent}>
                  <View>
                    <Text style={styles.title}>{item.title}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  list: {
    backgroundColor: '#E6E6E6',
  },
  separator: {
    marginTop: 4,
  },
  /******** card **************/
  card: {
    margin: 0,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#DCDCDC',
    backgroundColor: '#DCDCDC',
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
    //overlay efect
    flex: 1,
    height: 200,
    width: null,
    position: 'absolute',
    zIndex: 100,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
  },
  cardImage: {
    flex: 1,
    height: 150,
    width: null,
  },
  /******** card components **************/
  title: {
    fontSize: 22,
    color: '#ffffff',
    marginTop: 10,
    fontWeight: 'bold',
  },
  time: {
    fontSize: 13,
    color: '#ffffff',
    marginTop: 5,
  },
  icon: {
    width: 25,
    height: 25,
  },
});

export default CardView;

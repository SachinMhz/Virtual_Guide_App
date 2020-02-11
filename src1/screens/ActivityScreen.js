import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  CheckBox,
} from 'react-native';
import data from '../data/activityData';

const CardView = ({navigation}) => {
  const [state, setState] = useState(false);

  const onActivityPressed = index => {
    data[index].isSelected = !data[index].isSelected;
    setState(!state); //just to re-render the interface
  };
  return (
    <View style={styles.container}>
      <Text style={{fontSize:25, marginBottom:10}}>Select the activity you would like to do:</Text>
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
            <TouchableOpacity
              style={[
                item.isSelected ? {borderWidth: 5, borderColor: 'green'} : null,
              ]}
              onPress={() => onActivityPressed(item.id)}>
              <View style={styles.card}>
                <Image style={styles.cardImage} source={item.imgSrc} />
                <View style={styles.cardContent}>
                  <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                    <View style={{flex: 9}}>
                      <Text style={styles.title}>{item.title}</Text>
                    </View>
                    <View style={{flex: 1}}>
                      <CheckBox
                        onValueChange={() => {
                          onActivityPressed(item.id);
                        }}
                        value={item.isSelected}
                      />
                    </View>
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
    fontSize: 30 ,
    color: '#ffffff',
    marginTop: 10,
    fontWeight: 'bold',
  },
  desc: {
    fontSize: 18,
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

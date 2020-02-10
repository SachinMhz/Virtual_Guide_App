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
      <FlatList
        style={styles.list}
        data={data}
        keyExtractor={item => {
          return item.id;
        }}
        ItemSeparatorComponent={() => {
          return <View style={styles.separator} />;
        }}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={[
                item.isSelected ? styles.onSelected : null,
              ]}
              onPress={() => onActivityPressed(item.id)}>
              <View style={styles.mainContainer}>
                <View style={styles.imageContainer}>
                  <Image style={styles.image} source={item.imgSrc} />
                </View>
                <View style={styles.descriptionContainer}>
                  <View style={{flex: 9}}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.subTitle}>
                      Description : {item.desc}
                    </Text>
                  </View>
                  <View style={styles.checkBoxContiner}>
                    <CheckBox value={item.isSelected} />
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
  container: {flex: 1, marginHorizontal: 5, marginTop: 20},
  onSelected:{
    borderWidth:4,
    borderTopEndRadius:55,
    borderTopLeftRadius:55,
    borderBottomLeftRadius:55,borderColor:'green'
  },
  separator: {marginVertical: 10},
  mainContainer: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.31,
    shadowRadius: 5.32,

    elevation: 12,
  },
  imageContainer: {flex: 4},
  descriptionContainer: {
    flex: 6,
    flexDirection: 'row',
    paddingLeft: 10,
    justifyContent: 'center',
    backgroundColor: '#fb5b5a',
    borderBottomLeftRadius: 50,
    borderTopEndRadius: 50,shadowColor: "#000",
    shadowOffset: {
        width: 0,
      height: 8,
        },
      shadowOpacity: 0.41,
      shadowRadius: 10.32,

      elevation: 16,
  },
  checkBoxContiner: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  image: {height: 150, width: 150, borderRadius: 75, marginLeft: 5},
  title: {fontSize: 30, fontWeight: 'bold', color: '#ffffff'},
  subTitle: {fontSize: 20, fontWeight: 'bold', color: '#ffffff'},
});

export default CardView;

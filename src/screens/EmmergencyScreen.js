//import liraries
import React from 'react';
import { View, Text, StyleSheet, FlatList, Button, Linking,TouchableOpacity } from 'react-native';
import contactData from '../data/emmergencyContanct';


const EmmergencyScreen = ({navigation}) => {
    const onCallPressed =(phoneNumber) =>{ 
        Linking.openURL(`tel:${phoneNumber}`)
    }
    return (
        <View style={styles.container}>
      <Text style={{fontSize:25, marginBottom:10}}>Select to call:</Text>
      <FlatList
        style={styles.list}
        data={contactData}
        keyExtractor={item => {
          return item.name;
        }}
        ItemSeparatorComponent={() => {
          return <View style={styles.separator} />;
        }}
        renderItem={post => {
          const item = post.item;
          return (
            <TouchableOpacity
              onPress={() => onCallPressed(item.number)}>
              <View style={styles.card}>
                <View style={styles.cardContent}>
                  <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                    <View style={{flex: 9}}>
                      <Text style={styles.title}>{item.name}</Text>
                      <Text style={styles.desc}>{item.number}</Text>
                    </View>
                    <View style={{flex: 2}}>
                      <Button title="Call" onPress={()=>onCallPressed(item.number)} />
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
        backgroundColor:'#003f5c',
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
        height: 125,
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

export default EmmergencyScreen;

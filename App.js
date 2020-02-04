//import liraries
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

// create a component
const Home = () => {
  return (
    <View>
      <MapView
    style={ styles.map}
    Provider={PROVIDER_GOOGLE}
    showsUserLocation
    initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }}
  />
    </View>
  );
};

const styles = StyleSheet.create({
  map:{
    height:"100%"
  }
});

export default Home;

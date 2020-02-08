import React from 'react';
import {View, StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker, Polyline} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

// create a component
const Home = () => {
  const origin = {latitude: 27.6727352, longitude: 85.3231056}; //patan durbar square
  const destination = {latitude: 27.6734764, longitude: 85.321904}; // chip kinne thaum

  const coordinateArray = [
    {latitude: 27.6727352, longitude: 85.3231056},
    {latitude: 27.673452, longitude: 85.325265},
    {latitude: 27.673928, longitude: 85.325143},
    {latitude: 27.674262, longitude: 85.324213},
    {latitude: 27.6734764, longitude: 85.321904},
  ];
  const GOOGLE_MAPS_APIKEY = 'AIzaSyCc9TlKc8dAyo6lP2Ckew2V19QOyOzxt4g';
  return (
    <View>
      <MapView
        style={styles.map}
        Provider={PROVIDER_GOOGLE}
        showsUserLocation
        initialRegion={{
          latitude: origin.latitude, //27.700769,
          longitude: origin.longitude,
          latitudeDelta: 0.003,
          longitudeDelta: 0.003,
        }}>
        <Marker
          coordinate={origin}
          title={'some random spot'}
        />
        <Marker coordinate={origin} title={'some random spot'} />
        <Marker coordinate={destination} title={'some random spot'} />
        <Polyline
          coordinates={coordinateArray}
          strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
          strokeColors={[
            '#7F0000',
            '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
            '#B24112',
            '#E5845C',
            '#238C23',
            '#7F0000',
          ]}
          strokeWidth={6}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    height: '100%',
  },
});

export default Home;

import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker, Polyline} from 'react-native-maps';
import GetLocation from 'react-native-get-location';

// create a component
const Home = () => {
  const origin = {latitude: 27.672902544858847, longitude: 85.32498076558115}; //patan durbar square
  const destination = {
    latitude: 27.675440333532524,
    longitude: 85.32114688307048,
  }; // chip kinne thaum

  const [marker, setMarker] = useState([]);
  const [location, setLocation] = useState(null);

  const coordinateArray = [
    {latitude: 27.672902544858847, longitude: 85.32498076558115},
    {latitude: 27.673925149842983, longitude: 85.32524932175873},
    {latitude: 27.67425562379755, longitude: 85.32424818724395},
    {latitude: 27.67475296591504, longitude: 85.32274916768074},
    {latitude: 27.675440333532524, longitude: 85.32114688307048},
  ];

  useEffect(() => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then(location => {
        console.log(location);
        setLocation(location);
      })
      .catch(error => {
        const {code, message} = error;
        console.warn(code, message);
      });
  }, []);
  return (
    <View>
      <MapView
        style={styles.map}
        Provider={PROVIDER_GOOGLE}
        showsUserLocation
        onPress={e => {
          setMarker([...marker, e.nativeEvent.coordinate]);
          console.log(marker);
        }}
        initialRegion={{
          latitude: origin.latitude, //27.700769,
          longitude: origin.longitude,
          latitudeDelta: 0.003,
          longitudeDelta: 0.003,
        }}>
        {marker.map((marker, i) => (
          <MapView.Marker key={i} coordinate={marker} />
        ))}
        <Marker coordinate={origin} title={'some random spot'} />
        <Marker coordinate={origin} title={'some random spot'} />
        {location ? (
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title={'your current location'}
            pinColor={'#003366'}
          />
        ) : null}
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

//import liraries
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// create a component
const SplashScreen = ({navigation}) => {
    return (
        <View >
             <Text>SplashScreen</Text>
             <Button title="Go to Login" onPress={()=>navigation.navigate('Login')} />
             <Text>email: a  password: a</Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default SplashScreen;

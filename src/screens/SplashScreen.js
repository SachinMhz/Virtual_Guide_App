//import liraries
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Button,Image } from 'react-native';

// create a component
const SplashScreen = ({navigation}) => {
    useEffect(()=>{
        setTimeout(
            () => { navigation.navigate('Home') }, //showing this screen for 3000 ms period
            3000
          )
    })
    return (
        <View >
             <Text>SplashScreen</Text>
             <Button title="Go to Login" onPress={()=>navigation.navigate('Login')} />
             <Text>   </Text>
             <Text>email: a  password: a</Text>
             <Text>   </Text>
             <Button title="Skip login" onPress={()=>navigation.navigate('Home')} />
        </View>
    );
};

const styles = StyleSheet.create({

});

export default SplashScreen;

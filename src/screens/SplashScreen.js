//import liraries
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Button,Image } from 'react-native';

// create a component
const SplashScreen = ({navigation}) => {
    useEffect(()=>{
        setTimeout(
            () => { navigation.navigate('Login') }, //showing this screen for 3000 ms period
            3000
          )
    },[])
    return (
        <View style={styles.container}>
             <Text style={styles.logo}>Virtual Guide</Text>

             <Button title="Go to Login" onPress={()=>navigation.navigate('Login')} />
             <Text>   </Text>
             <Text>email: a  password: a</Text>
             <Text>   </Text>
             <Button title="Skip login" onPress={()=>navigation.navigate('Home')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003f5c',
        alignItems: 'center',
    },logo: {
      fontWeight: 'bold',
      fontSize: 50,
      color: '#fb5b5a',
      marginTop: 100,
    },
});

export default SplashScreen;

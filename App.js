import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen'
import LoginScreen from  './src/screens/LoginScreen'
import SignInScreen from  './src/screens/SignInScreen'

const navigator = createStackNavigator({
  Login : LoginScreen,
  Home: HomeScreen,
  Signin : SignInScreen
}, { headerMode: 'none' });

export default createAppContainer(navigator);


//"react-native-firebase": "^5.6.0",
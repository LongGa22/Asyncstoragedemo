import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

// import HomeScreen from '../screens/HomeScreen';
import Login from '../Login';
import Home from '../Home';


const Stack = createStackNavigator();

function AppStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      {/* <Stack.Screen name="NewLogin" component={NewLogin}/> */}
      <Stack.Screen name='Login' component={Login} />
      {/* <Stack.Screen name='HomeScreen' component={HomeScreen}/> */}
      <Stack.Screen name='Home' component={Home} />
     
    </Stack.Navigator>
  );
}

const AppNavigation = () => {
    return(
       <NavigationContainer>
            <AppStackNavigator/>
       </NavigationContainer>
    );
};

export default AppNavigation;
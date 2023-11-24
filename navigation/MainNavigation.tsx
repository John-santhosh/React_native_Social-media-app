import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './Routes';
import Home from '../screens/HOME/Home';
import Profile from '../screens/PROFILE/Profile';
// import {createDrawerNavigator} from '@react-navigation/drawer';

const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

// const MainMenuNavigation = () => {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name={Routes.Home} component={Home} />
//     </Drawer.Navigator>
//   );
// };

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{header: () => null, headerShown: false}}
      initialRouteName={Routes.Home}>
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen name={Routes.Profile} component={Profile} />
    </Stack.Navigator>
  );
};

export default MainNavigation;

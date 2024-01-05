/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './Routes';
import Home from '../screens/HOME/Home';
import Profile from '../screens/PROFILE/Profile';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {View, Text, ScrollView} from 'react-native';
import ProfileTabTitle from '../components/profileTabtitle/ProfileTabTitle';

// import {createDrawerNavigator} from '@react-navigation/drawer';
// import {createDrawerNavigator} from '@react-navigation/drawer';

// const Drawer = createDrawerNavigator();

// function MyDrawer() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="Feed" component={Home} />
//       <Drawer.Screen name="Article" component={Home} />
//     </Drawer.Navigator>
//   );
// }
const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

// const MainMenuNavigation = () => {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name={Routes.Home} component={Home} />
//     </Drawer.Navigator>
//   );
// };

const profileTabs = createMaterialTopTabNavigator();

export const ProfileTabsNavigation = () => {
  return (
    <profileTabs.Navigator
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarIndicatorStyle: {backgroundColor: 'red'},
      }}>
      <profileTabs.Screen
        options={{
          tabBarLabel: ({focused}) => (
            <ProfileTabTitle isFocused={focused} title="Photos" />
          ),
        }}
        name={'Tab1'}
        component={Tab1}
      />

      <profileTabs.Screen
        options={{
          tabBarLabel: ({focused}) => (
            <ProfileTabTitle isFocused={focused} title="Photos" />
          ),
        }}
        name={'Tab5'}
        component={Tab2}
      />
      <profileTabs.Screen
        options={{
          tabBarLabel: ({focused}) => (
            <ProfileTabTitle isFocused={focused} title="Photos" />
          ),
        }}
        name={'Tab6'}
        component={Tab3}
      />
    </profileTabs.Navigator>
  );
};

const Tab1 = () => {
  return (
    <ScrollView
      style={{minHeight: 400}}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{flexGrow: 1}}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>This is tab 1</Text>
        <View style={{backgroundColor: 'grey'}}>
          <View>
            <Text style={{}}>100</Text>
            <Text style={{}}>Posts</Text>
          </View>
          <View>
            <Text style={{}}>100</Text>
            <Text style={{}}>Posts</Text>
          </View>
          <View>
            <Text style={{}}>100</Text>
            <Text style={{}}>Posts</Text>
          </View>
          <View>
            <Text style={{}}>100</Text>
            <Text style={{}}>Posts</Text>
          </View>
          <View>
            <Text style={{}}>100</Text>
            <Text style={{}}>Posts</Text>
          </View>
          <View>
            <Text style={{}}>100</Text>
            <Text style={{}}>Posts</Text>
          </View>
          <View>
            <Text style={{}}>100</Text>
            <Text style={{}}>Posts</Text>
          </View>
          <View>
            <Text style={{}}>100</Text>
            <Text style={{}}>Posts</Text>
          </View>
          <View>
            <Text style={{}}>100</Text>
            <Text style={{}}>Posts</Text>
          </View>
          <View>
            <Text style={{}}>100</Text>
            <Text style={{}}>Posts</Text>
          </View>
          <View>
            <Text style={{}}>100</Text>
            <Text style={{}}>Posts</Text>
          </View>
          <View>
            <Text style={{}}>100</Text>
            <Text style={{}}>Posts</Text>
          </View>
          <View>
            <Text style={{}}>100</Text>
            <Text style={{}}>Posts</Text>
          </View>
          <View>
            <Text style={{}}>100</Text>
            <Text style={{}}>Posts</Text>
          </View>
          <View>
            <Text style={{}}>100</Text>
            <Text style={{}}>Posts</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const Tab2 = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'red',
        flex: 1,
      }}>
      <Text>This is tab 1</Text>
    </View>
  );
};
const Tab3 = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        flex: 1,
      }}>
      <Text>This is tab 1</Text>
    </View>
  );
};
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

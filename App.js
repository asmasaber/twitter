/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Dimensions } from 'react-native';

import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import LoadingScreen from './src/Screens/Loading';
import DrawerContainer from './src/Screens/DrawerContainer';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

// export default App;

// eslint-disable-next-line no-undef
// export default AppNavigator = SwitchNavigator(
//   {
//     AuthLoading: LoadingScreen,
//     App: App,
//   },
//   {
//     initialRouteName: 'AuthLoading',
//   }
// );

const  AppStack = createDrawerNavigator(
  {
    // Home: () => <View style={{flex:1}}><Text>The Home</Text></View>,
    Home: App,
    Profile: () => <View style={{flex:1}}><Text>Profile Page</Text></View>,
  },
  {
    drawerWidth: Dimensions.get('screen').width - (Dimensions.get('screen').width * 0.25),
    overlayColor: 'rgb(242, 239, 239)',
    contentComponent: ({navigation}) => <DrawerContainer  navigation={navigation}/>,
  }
);

class DummyScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <Entypo name={'twitter'} size={70} style={{color: 'rgb(29, 161, 242)'}} />
      </View>
    );
  }
}
const HomeTabs =  createMaterialTopTabNavigator({
  Home: {
    screen: App,

  },
  Search: {
    screen: DummyScreen,
    navigationOptions: {
      tabBarLabel: 'Search',
    },
  },
  Notification: {
    screen: DummyScreen,
    navigationOptions: {
      tabBarLabel: 'Notification',
    },
  },
  DM: {
    screen: DummyScreen,
    navigationOptions: {
      tabBarLabel: 'DM',
    },
  },

},
{
  tabBarOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;

      switch (routeName){

        case 'Home':
          return <Octicons name={'home'} size={30} color={ focused ? 'rgb(29, 161, 242)' : 'rgb(136, 153, 166)'} />;

        case 'Search':
          return <EvilIcons name={'search'} size={35} color={ focused ?  'rgb(29, 161, 242)' : 'rgb(136, 153, 166)'} />;

        case 'Notification':
          return <Ionicons
                  name={'ios-notifications-outline'}
                  size={30}
                  style={{ color: focused ?  'rgb(29, 161, 242)' : 'rgb(136, 153, 166)' }}
                />;

        case 'DM':
          return <FontAwesome
                  name={'envelope-o'}
                  size={26}
                  style={{ color: focused ? 'rgb(29, 161, 242)' : 'rgb(136, 153, 166)' }}
                />;

      }
    },
  }),


  tabBarPosition: 'bottom',
  //tabBarComponent: (props) => <CustomTabComponent {...props}/>,
  animationEnabled: true,
  tabBarOptions: {
    showIcon: true,
    showLabel:false,
    showIndicator:false,
    titleStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    style: {
        borderWidth: 0,
        position:'absolute',
        bottom:0,
        left:0,
        width:'100%',
        backgroundColor: 'rgb(27, 42, 51)',
        borderColor: 'rgb(27, 42, 51)',
        shadowColor:'red',
        elevation:2,
    },
    activeBackgroundColor: 'rgb(0, 79, 114)',
    inactiveBackgroundColor: 'rgb(27, 42, 51)',
    labelStyle: {
        fontSize: 14,
        color: '#fff',
        position: 'relative',
        alignSelf: 'center',

    },
    iconStyle:{
      marginBottom:5,
      marginTop:5,
    },
    tabStyle: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    indicatorStyle: {
      backgroundColor: 'transparent',
  },
},
});


export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: LoadingScreen,
    App: AppStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));

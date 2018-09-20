import { AppRegistry, Dimensions } from 'react-native';
import {DrawerNavigator, TabNavigator,StackNavigator} from 'react-navigation';
// import App from './App';
//components

import HomeComponent from './app/components/HomeComponent';
import TrendingComponent from './app/components/InfoComponent';
import SportsComponent from './app/components/SettingsComponent';
import VideosComponent from './app/components/CloudComponent';
import AboutComponent from './app/components/AboutComponent';
import ContactComponent from './app/components/ContactComponent';
import MortalityComp from './app/components/mortality';
import BaxterComp from './app/components/Baxter';
import KhuzwayoComp from './app/components/khuzwayo';
import JobComp from './app/components/job';
import FranceComp from './app/components/France';
import SplashComp from './app/components/SplashScreen';


//screen names
import { Home,Trending,Sports,Videos, About,Contact} from './screenNames';
//screen size
var {height,width} = Dimensions.get('window');
let routeConfigs2 = {
    
    Home: {
        screen: HomeComponent,
    },
    Trending: {
        screen: TrendingComponent,
    },
    Sports: {
        screen: SportsComponent,
    },
    Videos: {
        screen: VideosComponent,
    },
};
let tabNavigatorConfig = {    
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
        activeTintColor: 'blue',
        labelStyle: {
            fontSize: 13,
        },
        style: {
            backgroundColor: '#59cbbd',
            padding: -10
        },    
        // showLabel: false    
    },    
    order: [ Home,Trending,Sports, Videos, ],
};
const Stabs = TabNavigator(routeConfigs2, tabNavigatorConfig);

let routeConfigs3 ={
    
    Home: {
        path: '/home',
        screen: Stabs,
    },
    
    mortality:{
        screen: MortalityComp,
        navigationOptions:{
            title:'mortality'
        }
    },
    Baxter:{
        screen: BaxterComp,
        navigationOptions:{
            title:'Baxter'
        }
    },
    khuzwayo:{
        screen: KhuzwayoComp,
        navigationOptions:{
            title:'khuzwayo'
        }
    },
    job:{
        screen: JobComp,
        navigationOptions:{
            title:'job'
        }
    },
    France:{
        screen: FranceComp,
        navigationOptions:{
            title:'France'
        }
    },
    Rugby:{
        screen: FranceComp,
        navigationOptions:{
            title:'Rugby'
        }
    },
    
};
let stackNavigatorConfig = {
    headerMode: 'none'
}
const Stacks = StackNavigator(routeConfigs3, stackNavigatorConfig);
let routeConfigs = {
    
  
    Home: {
        path: '/home',
        screen: Stacks,
    },

    About: {
        path: '/info',
        screen: AboutComponent,
    },
    Contact: {
        path: '/settings',
        screen: ContactComponent,
    },
   

};
let drawerNavigatorConfig ={
    initialRouteName : Home,
    drawerWidth : width / 2,
    drawerPosition: 'left',
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    // drawerBackgroundColor: '#ff8000',
    color:'red',
    contentOptions:{
        activeTintColor: 'red'
        
    },
    order: [Home,About,Contact]

};
const App = DrawerNavigator(routeConfigs,drawerNavigatorConfig);
AppRegistry.registerComponent('sowetoNewz', () => App);

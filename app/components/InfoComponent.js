
import React, {Component} from 'react';
import Button from 'react-native-button';
import {View,Text,TouchableHighlight,Image} from 'react-native';
import {Trending} from '../../screenNames';
import HeaderComponent from './HeaderComponent'
import {TabNavigator} from 'react-navigation';
import News from './News';

const backgroundColor='#fff';
export default class InfoComponent extends Component {
    static _navigationOptions = ({ navigation }) => {
        let drawerLabel = 'Trending';
        let drawerIcon = () => (
            <Image 
            source= {require('../icons/info-icon.png')}
            style={{width:26, height:26, tintColor: backgroundColor}}
            />
        );
        return { drawerLabel,drawerIcon};


    }
    render () {
        return (<View style ={{
            flex: 1,
            flexDirection:'column',
            backgroundColor:'white'

        }}>
        <HeaderComponent {...this.props}/>
        <View >
               {/* <NavTab  {...this.props}/> */}
        <View>
               <TouchableHighlight style ={{ 
                width: 125,
                margin: 6,
                height: 30,
                backgroundColor: '#59cbbd',
                alignSelf: 'center',
            
            }}
            onPress={() =>{
                const{navigate} = this.props.navigation;
                navigate('Info');

            }}>
            <Text style= {{color:'white', fontSize: 22, alignSelf: 'center',  }}> NewsFeed</Text>

            </TouchableHighlight>
            </View>
            <View style={{flexDirection:'row', margin:10}}>
            <TouchableHighlight style ={{ 
                width:125,
                margin: 4,
                height: 30,
                backgroundColor: '#ff8000',
                alignSelf: 'flex-end',
                
            
            }}
            onPress={() =>{
                const{navigate} = this.props.navigation;
                navigate('Home');

            }}>
            <Text style= {{color:'white', fontSize: 14, alignSelf:'center' }}> Go To TopStories</Text>

            </TouchableHighlight>
            <TouchableHighlight style ={{ 
                width:125,
                margin: 4,
                height: 30,
                backgroundColor: '#ff8000',
                alignSelf: 'flex-end',
                
            
            }}
            onPress={() =>{
                const{navigate} = this.props.navigation;
                navigate('Settings');

            }}>
            <Text style= {{color:'white', fontSize: 14, alignSelf:'center' }}>Go To Sports</Text>

            </TouchableHighlight>
            <TouchableHighlight style ={{ 
                width:125,
                margin: 4,
                height: 30,
                backgroundColor: '#ff8000',
                alignSelf: 'flex-end',
                
            
            }}
            onPress={() =>{
                const{navigate} = this.props.navigation;
                navigate('Cloud');

            }}>
            <Text style= {{color:'white', fontSize: 14, alignSelf:'center' }}> Entertainment</Text>

            </TouchableHighlight>
               
        </View>
        <News {...this.props}/>
        </View>
    </View>);
    }
}
import React, {Component} from 'react';
import Button from 'react-native-button';
import {View,Text,TouchableHighlight,Image} from 'react-native';

export default class HeaderComponent extends Component{
    render() {
        return(<View style={{
            height: 90,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            borderBottomColor: '#ff8000',
            borderBottomWidth: 3,

        }}>
        
        
        <TouchableHighlight style={{marginLeft:10, marginTop: 20}}
        onPress={() => {
            const {navigate} = this.props.navigation;
            navigate('DrawerOpen');
        }}>
       
        <Image
        style={{width: 32, height:32,}}
        source={require('../icons/orangemenu-icon.png')}
        />
        </TouchableHighlight>
        <View style={{width: 180,
        height: 180,
        paddingLeft: 90,
        //resizeMode:'contain',
         justifyContent:'center',
        //alignSelf:'center',
        // alignItems:'center',
        
    }}>
        <Image 
        style={{width: 140,
        height: 140,
        resizeMode:'contain',
        // justifyContent:'center',
        //alignSelf:'center',
        // alignItems:'center',
        
    }}
        source={require('../icons/download.png')}/>
        </View>
        </View>);
    }
}
import React, {Component} from 'react';
import{Text,View,Dimensions,Image,ImageBackground} from 'react-native';
import SplashScreen from '../Images/background.png'

export default class Splash extends Component{
    changeScreen(handler){
        handler.navigate('HomeComponent');
    }
    componentDidMount(){
        setTimeout( () => {this.changeScreen(this.props.navigation)}, 5500)
    }
    render(){
        return(

            <ImageBackground
               source={SplashScreen}
               style={{
                   width:'100%',
                   height:'100%',   
                //   width: Dimensions.get('window').width,height: Dimensions.get('window').height
                }} 
            >
            

            </ImageBackground>
        )
    }
};


   

import React, {Component} from 'react';
import {ScrollView,View,Text,TouchableHighlight,Image,Dimensions, TouchableOpacity} from 'react-native';
import {Info} from '../../screenNames';
import { Container, Header, Content,Right, Card, CardItem, Thumbnail,  Button, Icon, Left, Body } from 'native-base';
// import Button from 'react-native-button';
import HeaderComponent from './HeaderComponent';
import SplashScreen from './SplashScreen';
import NavTab from './NavTab';


export default class Topstories extends Component {
    static navigationOptions = ({navigation}) => {
        let drawerLabel ='home';
        let drawerIcon= () => (
            <Image 
            source= {require('../icons/orangehome-icon.png')}
            style={{width:26, height:26}}
            />
        );
        return { drawerLabel,drawerIcon};

    }
    render () {
        return (
          <View style={{backgroundColor:'white'}} >
             <HeaderComponent {...this.props}/>
             <View >
               {/* <NavTab  {...this.props}/> */}
               <View >
               <TouchableHighlight style ={{ 
                width: 125,
                margin: 6,
                height: 30,
                backgroundColor: '#59cbbd',
                alignSelf: 'center',
            
            }}
            onPress={() =>{
                const{navigate} = this.props.navigation;
                navigate('Home');

            }}>
            <Text style= {{color:'white', fontSize: 22, alignSelf: 'center',  }}> Top Stories</Text>

            </TouchableHighlight>
            </View>

            
        <ScrollView>
            
             <View style={{flexDirection:'row',flex:1, width:Dimensions.get('window').width}}>
        <ScrollView horizontal={true}> 
       
        <Card style={{borderBottomColor: '#ff8000',width:Dimensions.get('window').width}}>
            <CardItem>
              <Body>
                <TouchableOpacity onPress={() =>{
                    const{navigate} = this.props.navigation;
                    navigate('mortality');
                }}>
                  <Image source={require('../Images/WhatsApp-Image-2017-04-11-at-11.22.57.jpeg')}
                  style={{height: 250,width:Dimensions.get('window').width,flex:0}}/>
                  <Text style={{fontStyle:'normal',color:'black' , fontSize: 19,fontFamily: "vincHand",}}>
                  Suspected ritual killing cause a stir in Orlando East
                  </Text>
                </TouchableOpacity>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>  12 Likes  </Text>
                
                  <Icon active name="chatbubbles" /> 
                  <Text>  4 Comments </Text>
                  <Right>
                <Text>just now</Text>
              </Right>
                </Button>
                
              </Body>
              
            </CardItem>
            </Card>

            <Card style={{borderBottomColor: '#ff8000',width:Dimensions.get('window').width}}>
            <CardItem>
              <Body>
              <TouchableOpacity onPress={() =>{
                    const{navigate} = this.props.navigation;
                    navigate('Baxter');
              }}>
                <Image source={require('../Images/0ac2a23587844c90bf0e6b286edaf23f.jpg')}
                 style={{height: 250,width:Dimensions.get('window').width,flex:0}}/>
                <Text style={{fontStyle:'normal',color:'black',fontSize: 19,fontFamily: "vincHand",}}>
                Staurt Baxter back to Kaizer Chiefs Again
                </Text>
                </TouchableOpacity>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text> 12 Likes </Text>
                
                  <Icon active name="chatbubbles" />
                  <Text> 4 Comments </Text>
                  <Right>
                <Text>2m ago</Text>
              </Right>
                </Button>
              </Body>
              
            </CardItem>
            </Card>
            <Card style={{borderBottomColor: '#ff8000',width:Dimensions.get('window').width}}>
            <CardItem>
              <Body>
                <Image source={require('../Images/job.jpg')}
                 style={{height: 250,width:Dimensions.get('window').width,flex:0}}/>
                <Text style={{fontStyle:'normal',color:'black',fontSize: 19,fontFamily: "vincHand",}}>
                New premier of the North West Province
                </Text>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text> 12 Likes </Text>
                
                  <Icon active name="chatbubbles" />
                  <Text> 4 Comments </Text>
                  <Right>
                <Text>3m ago</Text>
              </Right>
                </Button>
              </Body>
            </CardItem>
            </Card>
            <Card style={{borderBottomColor: '#ff8000',width:Dimensions.get('window').width}}>
            <CardItem>
              <Body>
                <Image source={require('../Images/unnamed.jpg')}
                 style={{height: 250,width:Dimensions.get('window').width,flex:0}}/>
                <Text style={{fontStyle:'normal', color:'black',fontSize: 19,fontFamily: "vincHand",}}>
                Eskom workers refuses 4.7% salary increase
                </Text>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text> 12 Likes </Text>
                
                  <Icon active name="chatbubbles" />
                  <Text> 4 Comments </Text>
                  <Right>
                <Text>4m ago</Text>
              </Right>
                </Button>
              </Body>
            </CardItem>
            </Card>
            <Card style={{borderBottomColor: '#ff8000',width:Dimensions.get('window').width}}>
            <CardItem>
              <Body>
                <Image source={require('../Images/DgSlrQ3WkAAH9A_.jpg')}
                 style={{height: 250,width:Dimensions.get('window').width,flex:0}}/>
                <Text style={{fontStyle:'normal', color:'black',fontSize: 19,fontFamily: "vincHand",}}>
                Kaizer Chiefs have signed Khama Billiat!
                </Text>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
            </CardItem>
            </Card>

          
        </ScrollView>
        
          </View>

          <CardItem style={{margin:7, borderBottomColor:'#ff8000',borderBottomWidth:1,}}>
              <Left>
              <Image source={require('../Images/default.jpg')}
                 style={{height: 75,width:75}}/>
                <Body> 
                <TouchableOpacity onPress={() =>{
                    const{navigate} = this.props.navigation;
                    navigate('khuzwayo'); 
                }}>            
                  <Text style={{color:'black' ,fontStyle:'italic', fontSize:16,fontFamily: "vincHand", }}>Pirates Wait On Club Management For Khuzwayo? </Text>
                   </TouchableOpacity>
                  </Body>
              </Left>
            </CardItem>
            <CardItem style={{margin:7, borderBottomColor:'#ff8000',borderBottomWidth:1,}}>
              <Left>
              <Image source={require('../Images/3FB1C55A-AF3A-44F7-B401-B33E217EFE2F_w1023_r1_s.jpg')}
                 style={{height: 75,width:75}}/>
                <Body>
                <TouchableOpacity onPress={() =>{
                    const{navigate} = this.props.navigation;
                    navigate('job'); 
                }}>              
                  <Text style={{color:'black' ,fontStyle:'italic', fontSize:16,fontFamily: "vincHand",}}>Injured people are evacuated after an explosion at the stadium in Bulawayo where Zimbabwe President just addressed a rally on 23 June 2018. </Text>
                </TouchableOpacity>
                </Body>
              </Left>
            </CardItem>
            <CardItem style={{alignSelf:'center',borderBottomColor:'#ff8000',borderBottomWidth:1,}}>
              <Image source={require('../Images/soweto.jpg')}
                 style={{alignSelf:'center', height: 230,width:330,}}/>
            </CardItem>
            <CardItem style={{margin:7, borderBottomColor:'#ff8000',borderBottomWidth:1,}}>
              <Left>
              <Image source={require('../Images/AAz8JTf.jpg')}
                 style={{height: 75,width:75}}/>
                <Body>              
                  <Text style={{color:'black' ,fontStyle:'italic',fontFamily: "vincHand",}}>Local entertainer Zodwa Wabantu is looking to donate R10 000 to a mother with a disabled child after seeing a video on Facebook.</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem style={{margin:7, borderBottomColor:'#ff8000',borderBottomWidth:1,}}>
              <Left>
              <Image source={require('../Images/AAzaVgr.jpg')}
                 style={{height: 75,width:75}}/>
                <Body>              
                  <Text style={{color:'black' ,fontStyle:'italic',fontFamily: "vincHand",}}>Banks ‘owe’ assistance to SoEs
                   </Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem style={{margin:7, borderBottomColor:'#ff8000',borderBottomWidth:1,}}>
              <Left>
              <Image source={require('../Images/AAz1Hn2.jpg')}
                 style={{height: 75,width:75}}/>
                <Body>              
                  <Text style={{color:'black' ,fontStyle:'italic',fontFamily: "vincHand",}}>Adorable baby elephant rescued from well in Sri Lanka </Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem style={{margin:7, borderBottomColor:'#ff8000',borderBottomWidth:1,}}>
              <Left>
              <Image source={require('../Images/AAz7POp.jpg')}
                 style={{height: 75,width:75}}/>
                <Body>              
                  <Text style={{color:'black' ,fontStyle:'italic',fontFamily: "vincHand",}}>Newlands, just like Jantjies, is not good enough for Test-match rugby </Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem style={{margin:7, borderBottomColor:'#ff8000',borderBottomWidth:1,}}>
              <Left>
              <Image source={require('../Images/46a00b49a5654833ab0d5954ef19da9d.jpg')}
                 style={{height: 75,width:75}}/>
                <Body>              
                  <Text style={{color:'black' ,fontStyle:'italic',fontFamily: "vincHand",}}>Newlands, just like Jantjies, is not good enough for Test-match rugby </Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem style={{margin:7, borderBottomColor:'#ff8000',borderBottomWidth:1,}}>
              <Left>
              <Image source={require('../Images/ron.jpg')}
                 style={{height: 75,width:75}}/>
                <Body>              
                  <Text style={{color:'black' ,fontStyle:'italic',fontFamily: "vincHand",}}>Uruguay 2-1 Portugal, World Cup 2018: Cristiano Ronaldo follows Lionel Messi out as Edinson Cavani delights</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem style={{margin:7, borderBottomColor:'#ff8000',borderBottomWidth:1,}}>
              <Left>
              <Image source={require('../Images/AAz7POp.jpg')}
                 style={{height: 75,width:75}}/>
                <Body>              
                  <Text style={{color:'black' ,fontStyle:'italic',fontFamily: "vincHand",}}>Newlands, just like Jantjies, is not good enough for Test-match rugby </Text>
                </Body>
              </Left>
            </CardItem>
    </ScrollView>
    </View>
    </View>);
    }
}

import React, {Component} from 'react';
import {ScrollView,View,Text,TouchableHighlight,Image,Dimensions, TouchableOpacity} from 'react-native';
import {Info} from '../../screenNames';
import { Container, Header, Content,Right, Card, CardItem, Thumbnail,  Button, Icon, Left, Body } from 'native-base';
// import Button from 'react-native-button';
import HeaderComponent from './HeaderComponent';
import SplashScreen from './SplashScreen';
import NavTab from './NavTab';


export default class SettingsComponent extends Component {
    static navigationOptions = ({navigation}) => {
        let drawerLabel ='Top Stories';
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
            <Text style= {{color:'white', fontSize: 22, alignSelf: 'center',  }}> Go To Home</Text>

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
                    navigate('Rugby');
                }}>
                  <Image source={require('../Images/france-vs-belgium-live1.jpg')}
                  style={{height: 250,width:Dimensions.get('window').width,flex:0}}/>
                  <Text style={{fontStyle:'normal',color:'black' , fontSize: 19,fontFamily: "vincHand",}}>
                  France beat Belgium 1-0, through to 2018 World Cup final
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
                    navigate('France');
              }}>
                <Image source={require('../Images/TL_1459717-e1531070145456.jpg')}
                 style={{height: 250,width:Dimensions.get('window').width,flex:0}}/>
                <Text style={{fontStyle:'normal',color:'black',fontSize: 19,fontFamily: "vincHand",}}>
                Sharks lament throwing away their Super Rugby destiny
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
                <Image source={require('../Images/desktop-medium.jpg')}
                 style={{height: 250,width:Dimensions.get('window').width,flex:0}}/>
                <Text style={{fontStyle:'normal',color:'black',fontSize: 19,fontFamily: "vincHand",}}>
                Serena Williams defeats Evgeniya Rodina to ease into Wimbledon quarter-finals
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
              <Image source={require('../Images/landscape-1531126406-england-v-croatia.jpg')}
                 style={{height: 75,width:75}}/>
                <Body> 
                <TouchableOpacity onPress={() =>{
                    const{navigate} = this.props.navigation;
                    navigate('khuzwayo'); 
                }}>            
                  <Text style={{color:'black' ,fontStyle:'italic', fontSize:16,fontFamily: "vincHand", }}>England vs Croatia: The key battles in the World Cup semi-final </Text>
                   </TouchableOpacity>
                  </Body>
              </Left>
            </CardItem>
            <CardItem style={{margin:7, borderBottomColor:'#ff8000',borderBottomWidth:1,}}>
              <Left>
              <Image source={require('../Images/unname.jpg')}
                 style={{height: 75,width:75}}/>
                <Body>
                <TouchableOpacity onPress={() =>{
                    const{navigate} = this.props.navigation;
                    navigate('job'); 
                }}>              
                  <Text style={{color:'black' ,fontStyle:'italic', fontSize:16,fontFamily: "vincHand",}}>Springboks captain Siya Kolisi nominated for top award </Text>
                </TouchableOpacity>
                </Body>
              </Left>
            </CardItem>
            <CardItem style={{alignSelf:'center',borderBottomColor:'#ff8000',borderBottomWidth:1,}}>
              <Image source={require('../Images/big-banner-int.jpg')}
                 style={{alignSelf:'center', height: 240,width:360,resizeMode:'stretch'}}/>
            </CardItem>
            <CardItem style={{margin:7, borderBottomColor:'#ff8000',borderBottomWidth:1,}}>
              <Left>
              <Image source={require('../Images/Gerald-Njengele-800-696x522.jpg')}
                 style={{height: 75,width:75}}/>
                <Body>              
                  <Text style={{color:'black' ,fontStyle:'italic',fontFamily: "vincHand",}}>WP Rugby Union vice-president cleared of racism.</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem style={{margin:7, borderBottomColor:'#ff8000',borderBottomWidth:1,}}>
              <Left>
              <Image source={require('../Images/gettyimages-831230982-1525210684.jpg')}
                 style={{height: 75,width:75}}/>
                <Body>              
                  <Text style={{color:'black' ,fontStyle:'italic',fontFamily: "vincHand",}}>Real Madrid confirm departure of Cristiano Ronaldo to Juventus
                   </Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem style={{margin:7, borderBottomColor:'#ff8000',borderBottomWidth:1,}}>
              <Left>
              <Image source={require('../Images/NBA.jpg')}
                 style={{height: 75,width:75}}/>
                <Body>              
                  <Text style={{color:'black' ,fontStyle:'italic',fontFamily: "vincHand",}}>NBA Free Agency Needs to Return to Normal in 2019 </Text>
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
              <Image source={require('../Images/180709-old-course.jpg')}
                 style={{height: 75,width:75}}/>
                <Body>              
                  <Text style={{color:'black' ,fontStyle:'italic',fontFamily: "vincHand",}}>St. Andrews has a pretty tempting job opening if you love golf and working outdoors</Text>
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


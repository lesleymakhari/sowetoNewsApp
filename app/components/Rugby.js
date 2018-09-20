import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableHighlight,Dimensions, Image, StyleSheet, TouchableOpacity, } from 'react-native';
import { Container, Header, Content,Right, Card, CardItem, Thumbnail,  Button,  Left, Body } from 'native-base';
import { Divider, Tile, Icon  } from 'react-native-elements';
import HeaderComponent from './HeaderComponent';



class Rugby extends Component {
    render() {

  return (

<View style={{backgroundColor:'white'}}>
<HeaderComponent {...this.props}/>
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
            <Text style= {{color:'white', fontSize: 22, alignSelf: 'center',  }}>Go To Home</Text>

            </TouchableHighlight>
            </View>
<ScrollView>
 <View >
 
     
<Tile
  
  imageSrc = {{ uri: 'https://citizen.co.za/wp-content/uploads/sites/18/2018/07/TL_1459717-e1531070145456.jpg?x65279' }}
  // title="Tackling child mortality in the Townships"
  
  contentContainerStyle={{ height: 60 }}
  featured
  caption=""
 
>
  

</Tile>

    
    <View
    style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between',  }}
  >
    <Text h1>Author: Jane J</Text>
    <Text h2>just now</Text>
  </View>
<View style={{paddingStart:25, paddingEnd:25, marginBottom:35}}>
    <Text style={{fontFamily: "vincHand", fontSize:17, marginTop:20,color: '#404142',fontWeight:'300' }}>    
    South African Football Association chief executive, Dennis Mumble, has played down rumours linking Bafana Bafana coach Stuart Baxter with Kaizer Chiefs. Baxter is rumoured to be reuniting with the Soweto giants following the resignation of Steve Komphela three months ago.
The Bafana Bafana coach endured a terrific three-year stay at Amakhosi before joining Bafana for a second time, winning two Premier Soccer League titles, the MTN8 and Nedbank Cup.
</Text>
<  Text style={{margin:5, fontFamily: "vincHand",fontSize:17,color: '#404142',fontWeight:'300'}}>
 On the other hand, Komphela went through a barren three-year run before the club’s fans resorted to the hooliganism that left Moses Mabhida Stadium damaged during their 2-0 loss to Free State Stars in the Nedbank Cup semi-final.
Amakhosi are rumoured to have rekindled interest in Baxter as they are looking to challenge for top 
honours next season. But Mumble says that as the federation, they are not moved by the rumours as 
they have not received any offers for the coach..</Text>

<Text style = {{fontFamily: "vincHand",margin:5,fontSize:17,color: '#404142',fontWeight:'300'}}>
This comes after shocking back-to-back defeats to Cape Verde Islands, a nation that has a population of only 532 913. This was a disappointing outing, especially after Bafan's 2-0 away win against Nigeria last year in June in Baxter's first game back in charge in a 2019 Afcon qualifier.
The 64-year-old’s new mandate is to ensure that they make it to the 2019 Africa Nations Cup of Nations and 2022 World Cup. What makes this matter more interesting is how Baxter is not shy to walk away from a club when he’s received better suitors – three seasons being the longest period he’s served at a team.
Despite this, Mumble has ensured that they are still in a happy marriage with the former South Melbourne midfielder. “I think we are fine with the coach,” Mumble insisted. “The coach is on leave right now. So, I don’t see anything that would make people think it’s not a happy affair.”
</Text>

  </View>
  <View  style={{paddingStart:25, paddingEnd:25, marginBottom:20}}>
  <Text style={{color:'#ff8000', borderBottomColor:'#ff8000',fontSize:18,borderBottomWidth:2,fontWeight:'300'}}> See More..</Text>
  </View>
 </View>

<CardItem style={{margin:7, borderBottomColor:'#ff8000',borderBottomWidth:1,}}>
    <Left>
    <Image source={require('../Images/WhatsApp-Image-2017-04-11-at-11.22.57.jpeg')}
       style={{height: 75,width:75}}/>
      <Body>
      <TouchableOpacity onPress={() =>{
                    const{navigate} = this.props.navigation;
                    navigate('mortality');
      }}>              
        <Text style={{color:'black' ,fontStyle:'italic', fontSize:16,fontFamily: "vincHand", }}> Suspected ritual killing cause a stir in Orlando East</Text>
       </TouchableOpacity>
      </Body>
    </Left>
  </CardItem>
  <CardItem style={{margin:7, borderBottomColor:'#ff8000',borderBottomWidth:1,}}>
    <Left>
    <Image source={require('../Images/job.jpg')}
       style={{height: 75,width:75}}/>
      <Body>              
        <Text style={{color:'black' ,fontStyle:'italic', fontSize:16,fontFamily: "vincHand",}}>New premier of the North West Province</Text>
      </Body>
    </Left>
  </CardItem>
  <CardItem style={{margin:7, borderBottomColor:'#ff8000',borderBottomWidth:1,}}>
    <Left>
    <Image source={require('../Images/unnamed.jpg')}
       style={{height: 75,width:75}}/>
      <Body>              
        <Text style={{color:'black' ,fontStyle:'italic',fontFamily: "vincHand",}}>Eskom workers refuses 4.7% salary increase</Text>
      </Body>
    </Left>
  </CardItem>
  <CardItem style={{margin:7, borderBottomColor:'#ff8000',borderBottomWidth:1,}}>
    <Left>
    <Image source={require('../Images/DgSlrQ3WkAAH9A_.jpg')}
       style={{height: 75,width:75}}/>
      <Body>              
        <Text style={{color:'black' ,fontStyle:'italic',fontFamily: "vincHand",}}>Kaizer Chiefs have signed Khama Billiat!
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
  )
}
}


export default Rugby;
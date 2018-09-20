import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableHighlight,Dimensions, Image, StyleSheet, TouchableOpacity, } from 'react-native';
import { Container, Header, Content,Right, Card, CardItem, Thumbnail,  Button,  Left, Body } from 'native-base';
import { Divider, Tile, Icon  } from 'react-native-elements';
import HeaderComponent from './HeaderComponent';



class France extends Component {
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
  
  imageSrc = {{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0GxEfGPwnUXdOgf_qD1Vv-Pp5G8AnZf7u_GS10v_eEC2kRWnP2g' }}
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
    rance is back in the World Cup final for the first time since Zinedine Zidane’s headbutt in 2006.

Twelve years after one of soccer’s most infamous moments, Samuel Umtiti used his head to score from a corner kick in the 51st minute and earn France a 1-0 victory over Belgium on Tuesday in the first of the all-European semifinals.

The French danced on the field after the final whistle and shook the hand of Thierry Henry, who helped Les Bleus win the World Cup in 1998 but had been hoping to eliminate his native country as Belgium’s assistant coach.
</Text>
<  Text style={{margin:5, fontFamily: "vincHand",fontSize:17,color: '#404142',fontWeight:'300'}}>
They certainly hope to keep the party going on Sunday in the final in Moscow. France will face either Croatia or England, who play Wednesday at the Luzhniki Stadium in the Russian capital.

"Vive la France! Vive la Republique!" France forward Antoine Griezmann shouted during the post-match celebrations.

France goalkeeper Hugo Lloris made a great save in each half, denying the potent Belgian attack of Eden Hazard, Kevin De Bruyne and Romelu Lukaku the chance to advance the country to its first major final. Belgium reached the quarterfinals at the 2014 World Cup and the European Championship in 2016 but has yet to fulfil its lofty expectations.</Text>

<Text style = {{fontFamily: "vincHand",margin:5,fontSize:17,color: '#404142',fontWeight:'300'}}>
TThe world now gets to see France’s luxury squad, collectively valued in excess of $1 billion and headlined by teenage sensation Kylian Mbappe, in another major final.

Two years ago at home, the French surprisingly lost to Portugal 1-0 in the Euro 2016 title match. In 2006, they were beaten in a penalty shootout by Italy in a World Cup final that was overshadowed by Zidane headbutting opposing player Marco Materazzi in the chest in extra time. Zidane was sent off in what was his final match.
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


export default France;
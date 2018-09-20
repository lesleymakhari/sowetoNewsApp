import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableHighlight,Dimensions, Image, StyleSheet, TouchableOpacity, } from 'react-native';
import { Container, Header, Content,Right, Card, CardItem, Thumbnail,  Button,  Left, Body } from 'native-base';
import { Divider, Tile, Icon  } from 'react-native-elements';
import HeaderComponent from './HeaderComponent';



class job extends Component {
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
  
  imageSrc = {{ uri: 'https://s.yimg.com/uu/api/res/1.2/VWDk13.ctutLhNAm_NjsXg--~B/aD0yOTc7dz00NTA7c209MTthcHBpZD15dGFjaHlvbg--/http://media.zenfs.com/en_ZA/News/Reuters/2018-06-23T143434Z_1_LYNXMPEE5M0L7-OZATP_RTROPTP_2_OZATP-UK-ZIMBABWE-POLITICS.JPG' }}
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
    The explosion that detonated during a campaign rally by Zimbabwean President Emmerson Mnangagwa over the weekend has now claimed two lives.

State media is reporting that the two people succumbed to their injuries.

It’s not clear when they died but the state-run Chronicle says that they were at Mpilo Hospital.
</Text>
<  Text style={{margin:5, fontFamily: "vincHand",fontSize:17,color: '#404142',fontWeight:'300'}}>
At least 49 people were injured in the blast, which targeted President Mnangagwa as he was leaving a rally at the White City Stadium.

The incident has been described as an act of terror in the country and comes amid the national elections taking place next month.

Zanu PF spokesperson Kennedy Mandaza says that elections will go ahead.

“It’s important that we up our security to make sure that we do not have violence, to make sure that we do not have the recurrence of the same act and ensure free, fair and credible elections.”</Text>
<CardItem style={{alignSelf:'center',borderBottomColor:'#ff8000',borderBottomWidth:1,}}>
        <Image source={require('../icons/images.jpg')}
         style={{alignSelf:'center', height: 230,width:330,}}/>
 </CardItem>
<Text style = {{fontFamily: "vincHand",margin:5,fontSize:17,color: '#404142',fontWeight:'300'}}>
At least 49 people were injured in the blast, which targeted President Mnangagwa as he was leaving a rally at the White City Stadium.

The incident has been described as an act of terror in the country and comes amid the national elections taking place next month.

Zanu PF spokesperson Kennedy Mandaza says that elections will go ahead.

“It’s important that we up our security to make sure that we do not have violence, to make sure that we do not have the recurrence of the same act and ensure free, fair and credible elections.”
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


export default job;
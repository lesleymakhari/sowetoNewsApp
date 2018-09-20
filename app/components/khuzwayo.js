import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableHighlight,Dimensions, Image, StyleSheet, TouchableOpacity, } from 'react-native';
import { Container, Header, Content,Right, Card, CardItem, Thumbnail,  Button,  Left, Body } from 'native-base';
import { Divider, Tile, Icon  } from 'react-native-elements';
import HeaderComponent from './HeaderComponent';



class khuzwayo extends Component {
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
  
  imageSrc = {{ uri: 'https://images.enca.com/encadrupal/styles/600_383/s3/B17HVMN0628.jpg' }}
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
    Premier Soccer League (PSL) sides Cape Town City and Orlando Pirates have been linked with the 28-year-old shot-stopper.

Recent reports have indicated Bucs could sell keeper Wayne Sandilands to Highlands Park and replace him with Khuzwayo.

City previously withdrew their interest in the talented goal-minder after the club failed to agree personal terms with Khuzwayo during the January 2018 transfer window.
</Text>
<  Text style={{margin:5, fontFamily: "vincHand",fontSize:17,color: '#404142',fontWeight:'300'}}>
 OSukazi told The Citizen that his client will not sign a new deal with Amakhosi because he has made up his mind about leaving the Soweto giants.

“His contract at Kaizer Chiefs won’t be renewed, he is leaving Kaizer Chiefs, and we have informed the club formally,” Sukazi said.

“He wants to be at a place where he is going to play," he said about Khuzwayo, who is a former South Africa under-23 international.
they have not received any offers for the coach..</Text>

<Text style = {{fontFamily: "vincHand",margin:5,fontSize:17,color: '#404142',fontWeight:'300'}}>
owever, the experienced business manager stated that Khuzwayo will be committed to Amakhosi in the final months of his contract.

"For now he is focused on finishing the season at Chiefs and thereafter will make the decision," Sukazi continued. 

"It is only fair to the club for him to serve (until the end of the season before looking for a new team)," he concluded.
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
    <Image source={require('../Images/0ac2a23587844c90bf0e6b286edaf23f.jpg')}
       style={{height: 75,width:75}}/>
      <Body>
      <TouchableOpacity onPress={() =>{
                    const{navigate} = this.props.navigation;
                    navigate('Baxter');
      }}>              
        <Text style={{color:'black' ,fontStyle:'italic', fontSize:16,fontFamily: "vincHand", }}>Staurt Baxter back to Kaizer Chiefs Again </Text>
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


export default khuzwayo;
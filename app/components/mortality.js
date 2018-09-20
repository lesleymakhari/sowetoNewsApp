import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableHighlight,Dimensions, Image, StyleSheet, TouchableOpacity, } from 'react-native';
import { Container, Header, Content,Right, Card, CardItem, Thumbnail,  Button,  Left, Body } from 'native-base';
import { Divider, Tile, Icon  } from 'react-native-elements';
import HeaderComponent from './HeaderComponent';



class mortality extends Component {
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
  
  imageSrc = {{ uri: 'https://sowetourban.co.za/wp-content/uploads/sites/112/2017/04/WhatsApp-Image-2017-04-11-at-11.22.57.jpeg' }}
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
    Residents of Orlando East are fuming following the murder of a five-year-old boy in what is suspected to be a ritual killing.
A 21-year-old has been arrested and was due to appear in court today.
A group of angry residents is staging a protest outside the suspect’s house threatening to burn it.</Text>
<View>
<Card>
<CardItem style={{alignSelf:'center',borderBottomColor:'#ff8000',borderBottomWidth:1,}}>
        <Image source={require('../icons/contin.jpeg')}
         style={{alignSelf:'center', height: 230,width:330,}}/>
 </CardItem>
</Card>
</View>
<Text style = {{fontFamily: "vincHand",fontSize:17,color: '#404142',fontWeight:'300'}}>
Community leaders have been called to the scene to calm the situation
Phindile Senye, a member of Ward Committee for Safety, has called for calm and asked residents to allow the law to take its course.
“What is important now is that we should support the family of the boy who lost his life. Burning the house will not help us now especially because the matter has been reported to the police,” Senye told a group of angry residents.
It is alleged that the suspect killed a chicken and drank its blood before going out and did the same to the boy who was playing soccer on the street.
Police confirmed the suspect was due in court today.
</Text>
  </View>
  <View  style={{paddingStart:25, paddingEnd:25, marginBottom:20}}>
  <Text style={{color:'#ff8000', borderBottomColor:'#ff8000',fontSize:18,borderBottomWidth:2,fontWeight:'300'}}> See More..</Text>
  </View>
 </View>

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


export default mortality;
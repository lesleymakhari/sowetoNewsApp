import React, { Component } from 'react';
import {Text , View} from 'react-native';
import {Container , Header , Tabs, Tab, TabHeading , Left , Right , Icon} from 'native-base';
//import {  } from 'react-native-elements';
//import Icon from 'react-native-vector-icons/Ionicons';
import HeaderComponent from './HeaderComponent';

const backgroundColor='#ff8000';
class NavTab extends Component {

  render(){
    return(
    
      <Container style={{flex:0.100 , backgroundColor : '#ff8000'}}>
        
           <Tabs style={{backgroundColor:'#59cbbd'}} >

             <Tab   heading={<TabHeading ><Icon name="home"/><Text style={{color:'#fff'}}>Top stories</Text></TabHeading>}>
            </Tab>
            <Tab  heading={ <TabHeading><Icon name="paper"    /><Text style={{color:'#fff' }}    >News</Text></TabHeading>}>
         
          </Tab>
          <Tab heading={ <TabHeading><Icon name="videocam"  /><Text  style={{color:'#fff'}}>Videos</Text></TabHeading>}>
      
          </Tab>
          
          </Tabs>
          
  </Container>
    );
  }

}

export default NavTab;    
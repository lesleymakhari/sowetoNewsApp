import React, { Component } from 'react';
import { ScrollView, View, Text, Image,Dimensions, StyleSheet, Tile, TouchableOpacity} from 'react-native';
import { Card, Button, Header} from 'react-native-elements';
import {Icon} from 'react-native-elements';






class Entertainment extends Component {
      render() {

        return (
<View>
    <ScrollView>
      
       
  

<Card
        title='Fire claims a mans Life'

        image={{uri:'https://www.youthvillage.co.za/wp-content/uploads/2017/06/IMG-20170620-WA0003.jpg'}}>

        <Text style={{marginBottom: 10}}>
        The idea with React Native Elements is more about component structure than actual design.
        </Text>
        <Button
        onPress={() => { this.props.navigation.navigate('foodies')}}
        icon={<Icon name='code' color='#ffffff' />}
        backgroundColor='#03A9F4'
        fontFamily='Lato'
        buttonStyle={{
                    borderRadius: 0,
                    marginLeft: 0,
                    marginRight: 0,
                    marginBottom: 0,
                    borderColor: "transparent",
                    borderWidth: 5,
                    borderRadius: 15,
                    width: 150,
                    height: 35,
                    alignItems: "center",
                    backgroundColor: "#00BCD4",
            
            
            }}
        title='Read more' />
</Card>

<Card
        title='Tackling child mortality in the Townships'

        image={{uri:'data:image/jpeg;base64,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'}}>

        <Text style={{marginBottom: 10}}>
        The idea with React Native Elements is more about component structure than actual design.
        </Text>
        <Button
        onPress={() => { this.props.navigation.navigate('mortality')}}
        icon={<Icon name='code' color='#ffffff' />}
        backgroundColor='#03A9F4'
        fontFamily='Lato'
        buttonStyle={{
                    borderRadius: 0, 
                    marginLeft: 0,
                    marginRight: 0, 
                    marginBottom: 0,
                    borderColor: "transparent",
                    borderWidth: 5,
                    borderRadius: 15,
                    width: 150,
                    height: 35,
                    alignItems: "center",
                    backgroundColor: "#00BCD4",
                    
            }}
        title='Read more' />
</Card>

<Card
        title='People travilling with "AMANGOBE"'

        image={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVRIKRNkYoAauanRVAarCsLk53DtrmknWE70XLnyQMzmFZOl7m'}}>

        <Text style={{marginBottom: 10}}>
        The idea with React Native Elements is more about component structure than actual design.
        </Text>
        <Button
        onPress={() => { this.props.navigation.navigate('mangobe')}}
        icon={<Icon name='code' color='#ffffff' />}
        backgroundColor='#03A9F4'
        fontFamily='Lato'
        buttonStyle={{
                    borderRadius: 0,
                    marginLeft: 0,
                    marginRight: 0,
                    marginBottom: 0,
                    borderColor: "transparent",
                    borderWidth: 5,
                    borderRadius: 15,
                    width: 150,
                    height: 35,
                    alignItems: "center",
                    backgroundColor: "#00BCD4",
       
            }}
        title='Read more' />
</Card>


            <Card
        title='"Soweto Events"'

        image={{uri:'https://www.youthvillage.co.za/wp-content/uploads/2017/06/IMG-20170620-WA0003.jpg'}}>

        <Text style={{marginBottom: 10}}>
        The idea with React Native Elements is more about component structure than actual design.
        </Text>
        <Button
        onPress={() => { this.props.navigation.navigate('landing')}}
        icon={<Icon name='code' color='#ffffff' />}
        backgroundColor='#03A9F4'
        fontFamily='Lato'
        buttonStyle={{
                    borderRadius: 0,
                    marginLeft: 0,
                    marginRight: 0,
                    marginBottom: 0,
                    borderColor: "transparent",
                    borderWidth: 5,
                    borderRadius: 15,
                    width: 150,
                    height: 35,
                    alignItems: "center",
                    backgroundColor: "#00BCD4",
       
            }}
        title='Read more' />
</Card>

</ScrollView>

</View>
              


        )   
    }
}

export default Entertainment;
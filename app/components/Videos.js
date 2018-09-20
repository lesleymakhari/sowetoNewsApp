import React, {Component} from 'react';
import{StyleSheet,View,Text} from 'react-native';

export default class Videos extends Component {
    render(){
        return(
            <View style={styles.container}>
              <Text style={styles.welcome}>Videos screen</Text>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        flex: 1,
        justifyContent: 'center',
    },
    welcome:{
        fontSize:24,
        textAlign:'center',
    }

});
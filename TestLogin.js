import { Text, StyleSheet, View, TextInput, Button, Alert, Image} from "react-native";
import React, {Component} from "react";
import { useState } from "react";




export default class TestLogin extends Component{
   

 
    render() {
         
        

        return(
        <View style={styles.body}>
           <Image
           style={styles.logo}
           source={require('../../assets/Facebook_icon.jpg')} 
           />
            <Text style={styles.Text}>
               Éo add dc LOGO
            </Text>
            <TextInput 
                    style={styles.input}
                    placeholder='input your name !'
                   
                    >
                    
            </TextInput>

            <View style={styles.button}>
                    <Button title="Login" onPress={this.setData}></Button>
                </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
        body: {
            flex:1,
            alignItems:'center',
            backgroundColor:'#0080ff',
        },
        logo: {
            width:100,
            height:100,
            margin:20,
        },
        text:{
            fontSize:30,
            color:'red',
        },
        input: {
            width:300,
            borderWidth:1,
            borderColor: '#555',
            borderRadius:10,
            backgroundColor:'#ffffff',
            textAlign:'center',
            fontSize:20,
            marginTop:130,
            marginBottom:10,

        },
        button: {
            paddingTop:30,
            fontWeight:'500',
            borderRadius:80,
        },
})
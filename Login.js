import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, TextInput, Button, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login({navigation}){
    
    const [name, setName] = useState('');

    useEffect(()=>{
        getData();
       },[]);
        
   
       const getData =() =>{
           try {
               AsyncStorage .getItem('UserName')
               .then(value=>{
                   if(value != null){
                       navigation.navigate('Home');
                   }
               })
           } catch (error) {
               console.log(error);
           }
       }

    const setData = async()=> {
        if(name.length == 0) {
            Alert.alert('nhập tên vào anh êy')
        }else{
            try {
                await AsyncStorage.setItem('UserName',name);
                navigation.navigate('Home');
            } catch (error) {
                console.log(error);
            }
        }
    }
    
    return(
            <View style={styles.body}>
               {/* <Image
               style={styles.logo}
               source={require('../../assets/Facebook_icon.jpg')} 
               /> */}
                <Text style={styles.text}>
                   Éo add dc LOGO
                </Text>
                <TextInput 
                        style={styles.input}
                        placeholder='input your name !'
                        onChangeText={(value)=>setName(value)}
                        >
                        
                </TextInput>
    
                <View style={styles.button}>
                        <Button title="Login" onPress={setData} ></Button>
                    </View>
            </View>
            );
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
    

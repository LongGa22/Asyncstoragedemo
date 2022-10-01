import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import {
    StyleSheet, View, Text, Pressable, Alert, Button,
}from 'react-native';
import { TextInput } from "react-native-gesture-handler";

export default function Home({ navigation, route}){
    const [name, setName] = useState('');

    useEffect(()=>{
     getData();
    },[]);
     
    const updateData = async()=> {
        if(name.length == 0) {
            Alert.alert('nhập tên vào anh êy')
        }else{
            try {
                await AsyncStorage.setItem('UserName',name);
                Alert.alert('data dc update thanh cong');
            } catch (error) {
                console.log(error);
            }
        }
    }
    const getData =() =>{
        try {
            AsyncStorage .getItem('UserName')
            .then(value=>{
                if(value != null){
                    setName(value);
                }
            })
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <View style={styles.body}>
            <Text style={styles.text}>
            WELCOME {name} !
            </Text>
            <TextInput
            style={styles.input}
            placeholder='nhập tên mới'
            value={name}
            onChangeText={(value)=> setName(value)}>
            </TextInput>
            <View style={styles.button}>
                        <Button title="Update" onPressFunction ={updateData} ></Button>
                    </View>
        </View>
    )
}

const styles=StyleSheet.create({
    body:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        fontSize:40,
        margin:10,
    },
})
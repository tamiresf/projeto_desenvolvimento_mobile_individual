import { View, StyleSheet, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";


export function Inbox() {

    const [ status, setStatus] = useState('');

    const handleChange = ( text ) => {
        setStatus( text )}

    const handlePress = () => {
        console.log('Status:', status);
    };
     return (
        <View style={styles.container} >
            <TextInput 
            value={status}
            onChangeText={handleChange}
            placeholder="Digite"
            style={styles.input}
            />
            <TouchableOpacity onPress={handlePress} style={styles.button}>
                <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
        </View>
    )

}
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },

        input:{
            borderWidth: 1, 
            padding: 10,
            marginBottom: 10,
            width: '80%',
            textAlign: 'center',
        }, 

        button: {
            backgroundColor: '#000',
            padding: 10,
        }, 
        buttonText: {
            color: '#fff'
        }
    })

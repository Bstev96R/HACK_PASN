import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import pasn from '../assets/pasn.png'

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aquí iría la lógica de autenticación
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
       <Image
        source={pasn}


      />
      <Text style={styles.title}>INICIO</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },

  title: {
    fontSize: 34,
    marginBottom: 20,
    textAlign: 'center',
    color: '#328C83',
    fontWeight: 'bold',
  },

  input: {
    height: 40,
    borderColor: '#69BFB8',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
  },

  button: {
    backgroundColor: '#69BFB8',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

});

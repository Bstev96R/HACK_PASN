import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const RegistroForm = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>REGISTRO</Text>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="person-add" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <TextInput style={styles.input} placeholder="Nombres" />
      <TextInput style={styles.input} placeholder="Fecha de Nacimiento" />
      <TextInput style={styles.input} placeholder="Sexo" />
      <TextInput style={styles.input} placeholder="Edad" />
      <TextInput style={styles.input} placeholder="Identificación" />
      <TextInput style={styles.input} placeholder="Estado Civil" />
      <TextInput style={styles.input} placeholder="Lugar de Nacimiento" />
      <TextInput style={styles.input} placeholder="Dirección" />
      <TextInput style={styles.input} placeholder="Contacto de Emergencia" />
      <TextInput style={styles.input} placeholder="Teléfono del Contacto" />
      <TextInput style={styles.input} placeholder="Pin" />
      <TextInput style={styles.input} placeholder="Confirmar Pin" />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>REGISTRARSE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 70,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#328C83',
    marginBottom: 10,
    top: -50,
    backgroundColor: 'black',
    
  },
  iconButton: {
    backgroundColor: '#69BFB8',
    borderRadius: 50,
    padding: 20,
    position: 'absolute',
    center: 10,
    top: 10, 
  },
  input: {
    height: 40,
    borderColor: '#69BFB8',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  button: {
    backgroundColor: '#69BFB8',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default RegistroForm;

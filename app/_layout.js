
import React from 'react';
import { Drawer } from 'expo-router/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';


export default function layout() {
  return <Drawer  screenOptions={{
    drawerLabelStyle: {
        marginLeft: -20,
  
    },
}}>
    <Drawer.Screen 
      name="Home"
      options={{
        drawerLabel: 'Home',
        title: 'PASN+',
        headerTitleAlign: 'center',
        headerStyle:{backgroundColor:'#328C83'},
        headerTitleStyle:{color:'#fff', fontWeight:'bold', fontSize: 40},
        
        
        drawerIcon: ({size, color})=>(
          <Ionicons name="home" size={24} color="#328C83" />
      )

      }}
    />
    <Drawer.Screen
      name="index"
      options={{
        drawerLabel: 'About',
        title: 'Informacion',
        headerTitleAlign: 'center',
        headerTitleAlign: 'center',
        headerStyle:{backgroundColor:'#328C83'},
        headerTitleStyle:{color:'#fff', fontWeight:'bold', fontSize: 20},
        drawerIcon: ({size, color})=>(
          <Ionicons name="information-circle" size={24} color="#328C83" />
      )

      }}
    />
        <Drawer.Screen
      name="Login"
      options={{
        drawerLabel: 'Login',
        title: 'Datos de ingreso',
        headerTitleAlign: 'center',
        headerTitleAlign: 'center',
        headerStyle:{backgroundColor:'#328C83'},
        headerTitleStyle:{color:'#fff', fontWeight:'bold', fontSize: 20},
        drawerIcon: ({size, color})=>(
          <Ionicons name="information-circle" size={24} color="#328C83" />
      )


      }}
    />
    
    <Drawer.Screen
      name="User_Reg"
      options={{
        drawerLabel: 'Registro',
        title: 'Datos de Registro',
        headerTitleAlign: 'center',
        headerTitleAlign: 'center',
        headerStyle:{backgroundColor:'#328C83'},
        headerTitleStyle:{color:'#fff', fontWeight:'bold', fontSize: 20},
        drawerIcon: ({size, color})=>(
          <Ionicons name="information-circle" size={24} color="#328C83" />
      )


      
      }}
    />


  </Drawer>

}
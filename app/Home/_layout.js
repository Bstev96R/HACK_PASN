
import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
export default function _layout() {
  return (
   
    <Tabs screenOptions={{
        headerShown: false
    }}>
        <Tabs.Screen
            name="Ajustes"
            options={{
                tabBarIcon: ({size, color})=>(
                    <Ionicons name="settings" size={24} color="#328C83" />
                )
            }}
        />
        <Tabs.Screen
            name="Notificaciones"
            options={{
                tabBarIcon: ({size, color})=>(
                    <Ionicons name="notifications" size={24} color="#328C83" />
                )
            }}
        />

    </Tabs>
 )
}
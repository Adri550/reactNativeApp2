import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import DetailScreen from '../Screens/DetailScreen';

const Stack = createStackNavigator();

export default function StackNavigator1(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                headerShown:true, 
                title: 'Consultor de clima',
                headerStyle: {
                    flex:1,
                    flexDirection:'column',
                    backgroundColor: '#CC93F5',
                    textAlign: 'rigth', 
                },
                headerTitleStyle: {
                    fontWeight: 'bold',
                    textAlign: 'right',
                    alignContent:'center'
                  },
                }}
            />

            <Stack.Screen name="DetailScreen" component={DetailScreen}
                options={({route})=>({
                    title: route.params.titulo
                })
            }
            />

        </Stack.Navigator>
    )
}
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import StartingScreen from '../screens/StartingScreen';
import UploadScreen from '../screens/UploadScreen';

const Stack = createNativeStackNavigator();
export default function AppStack() {
  return (
    <Stack.Navigator initialRouteName="Loading" options={{headerShown: false}}>
      <Stack.Screen
        name="Upload"
        component={UploadScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Starting"
        component={StartingScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

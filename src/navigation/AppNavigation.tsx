import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useContext } from 'react';
import { StateContext } from '../provider/provider';
import Segues from '../res/constants/segues';
import NewPatient from '../screens/NewPatient/NewPatient';
import Register from '../screens/Register/Register';
import RegisterPatient from '../screens/RegisterPatient/RegisterPatient';
import Test from '../screens/Test/Test';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {

  const { user } = useContext(StateContext);
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={user ? Segues.NEW_PATIENT : Segues.REGISTER}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name={Segues.REGISTER} component={Register} />
        <Stack.Screen name={Segues.NEW_PATIENT} component={NewPatient} />
        <Stack.Screen name={Segues.REGISTER_PATIENT} component={RegisterPatient} />
        <Stack.Screen name={Segues.TEST} component={Test} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;

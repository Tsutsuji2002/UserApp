import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import AddUserScreen from '../screens/AddUserScreen';
import EditUserScreen from '../screens/EditUserScreen';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Danh sách người dùng' }} />
        <Stack.Screen name="AddUser" component={AddUserScreen} options={{ title: 'Thêm người dùng' }} />
        <Stack.Screen name="EditUser" component={EditUserScreen} options={{ title: 'Sửa thông tin người dùng' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Appbar } from 'react-native-paper';
import HomeScreen from '../screens/HomeScreen';
import AddUserScreen from '../screens/AddUserScreen';
import EditUserScreen from '../screens/EditUserScreen';
import UserDetailsScreen from '../screens/UserDetailsScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createStackNavigator();

const Header = ({ navigation, options, back }) => {
  const title =
    options?.headerTitle !== undefined
      ? options.headerTitle
      : options?.title !== undefined
      ? options.title
      : 'Quản lý người dùng';

  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
};

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={({ navigation, route, options, back }) => ({
          header: () => <Header navigation={navigation} options={options} back={back} />,
        })}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Danh sách người dùng' }} />
        <Stack.Screen name="AddUser" component={AddUserScreen} options={{ title: 'Thêm người dùng' }} />
        <Stack.Screen name="EditUser" component={EditUserScreen} options={{ title: 'Sửa thông tin người dùng' }} />
        <Stack.Screen name="UserDetails" component={UserDetailsScreen} options={{ title: 'Chi tiết người dùng' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;

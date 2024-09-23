import React from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { updateUser } from '../redux/actions/userActions';
import UserForm from '../components/UserForm';

const EditUserScreen = ({ route, navigation }) => {
  const { user } = route.params;
  const dispatch = useDispatch();

  const handleSubmit = (userData) => {
    dispatch(updateUser(user.id, userData));
    navigation.goBack();
  };

  return (
    <View>
      <UserForm initialValues={user} onSubmit={handleSubmit} />
    </View>
  );
};

export default EditUserScreen;
import React from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/actions/userActions';
import UserForm from '../components/UserForm';

const AddUserScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleSubmit = (userData) => {
    dispatch(addUser(userData));
    navigation.goBack();
  };

  return (
    <View>
      <UserForm initialValues={{}} onSubmit={handleSubmit} />
    </View>
  );
};

export default AddUserScreen;
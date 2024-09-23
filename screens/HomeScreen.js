import React, { useEffect } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, deleteUser } from '../redux/actions/userActions';
import UserList from '../components/UserList';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector(state => state.user);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <View style={styles.container}>
      <UserList users={users} onDelete={handleDelete} />
      <Button
        title="Thêm người dùng mới"
        onPress={() => navigation.navigate('AddUser')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default HomeScreen;
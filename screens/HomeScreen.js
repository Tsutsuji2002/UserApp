import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, deleteUser } from '../redux/actions/userActions';
import UserList from '../components/UserList';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import { FAB, Snackbar } from 'react-native-paper';

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector(state => state.user);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all');
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleDelete = (id) => {
    Alert.alert(
      'Xóa người dùng',
      'Bạn có chắc chắn muốn xóa người dùng này?',
      [
        {
          text: 'Hủy',
          style: 'cancel',
        },
        {
          text: 'Xóa',
          onPress: () => {
            dispatch(deleteUser(id));
            setSnackbarMessage('Người dùng đã được xóa');
            setSnackbarVisible(true);
          },
        },
      ],
      { cancelable: false }
    );
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase());

    if (filter === 'all') return matchesSearch;
    if (filter === 'age18') return matchesSearch && user.age > 18;
    if (filter === 'hasEmail') return matchesSearch && user.email.includes('@');

    return matchesSearch;
  });

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <View style={styles.container}>
      <UserList
        users={filteredUsers}
        onDelete={handleDelete}
        searchQuery={searchQuery}
        onChangeSearch={setSearchQuery}
        onFilter={setFilter}
      />
      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => navigation.navigate('AddUser')}
      />
      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={3000}
        style={styles.snackbar}
      >
        {snackbarMessage}
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  snackbar: {
    bottom: 70,
  },
});

export default HomeScreen;

import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const UserList = ({ users, onDelete }) => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <View style={styles.userItem}>
      <Text>{item.name}</Text>
      <Text>{item.email}</Text>
      <Text>{item.age}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('EditUser', { user: item })}>
          <Text style={styles.editButton}>Sửa</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDelete(item.id)}>
          <Text style={styles.deleteButton}>Xóa</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <FlatList
      data={users}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  userItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  editButton: {
    color: 'blue',
    marginRight: 10,
  },
  deleteButton: {
    color: 'red',
  },
});

export default UserList;
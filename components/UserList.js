import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { List, Button, Searchbar, Chip, Avatar, TouchableRipple } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const UserList = ({ users, onDelete, searchQuery, onChangeSearch, onFilter }) => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableRipple onPress={() => navigation.navigate('UserDetails', { user: item })}>
      <List.Item
        title={item.name}
        description={`Email: ${item.email} | Age: ${item.age}`}
        left={props => (
          <Avatar.Text
            {...props}
            label={item.name[0]}
            size={48}
            style={styles.avatar}
          />
        )}
        right={() => (
          <View style={styles.buttonContainer}>
            <Button
              icon={() => <Icon name="pencil" size={20} color="#FFFFFF" />}
              mode="contained"
              onPress={() => navigation.navigate('EditUser', { user: item })}
              style={styles.iconButton}
              contentStyle={styles.iconButtonContent} 
            />
            <Button
              icon={() => <Icon name="delete" size={20} color="#FFFFFF" />}
              mode="contained"
              onPress={() => onDelete(item.id)}
              style={[styles.iconButton, styles.deleteButton]}
              contentStyle={styles.iconButtonContent}
            />
        </View>
        )}
      />
    </TouchableRipple>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Searchbar
          placeholder="Tìm kiếm người dùng"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={styles.searchBar}
        />
        <View style={styles.chipContainer}>
        <Chip
          icon="filter"
          onPress={() => onFilter('all')}
          style={[styles.chip, styles.activeChip]}
          textStyle={styles.chipText}
        >
          Tất cả
        </Chip>
        <Chip
          icon="account"
          onPress={() => onFilter('age18')}
          style={[styles.chip, styles.activeChip]}
          textStyle={styles.chipText}
        >
          Trên 18 tuổi
        </Chip>
        <Chip
          icon="email"
          onPress={() => onFilter('hasEmail')}
          style={[styles.chip, styles.activeChip]}
          textStyle={styles.chipText}
        >
          Có email
        </Chip>
        </View>
      </View>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#fff',
    elevation: 4,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  searchBar: {
    backgroundColor: '#f5f5f5',
    elevation: 0,
  },
  chipContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  chip: {
    backgroundColor: '#3A1078',
    elevation: 0,
  },
  activeChip: {
    backgroundColor: '#3A1078',
  },
  chipText: {
    fontSize: 16,
    fontWeight: '8',
    color: '#FFFFFF',
  },
  avatar: {
    backgroundColor: '#4A90E2',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  iconButton: {
    marginHorizontal: 4,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  deleteButton: {
    backgroundColor: '#EB5757',
  },
  iconButtonContent: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    padding: 16,
    marginRight: 16,
  },
});


export default UserList;
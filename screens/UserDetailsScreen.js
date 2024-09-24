import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Title, Paragraph, Card, Button, Avatar } from 'react-native-paper';

const UserDetailsScreen = ({ route, navigation }) => {
  const { user } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Avatar.Text
            label={user.name[0]}
            style={styles.avatar}
          />
          <Title style={styles.title}>Thông tin chi tiết người dùng</Title>
          <Paragraph style={styles.paragraph}>Tên: {user.name}</Paragraph>
          <Paragraph style={styles.paragraph}>Email: {user.email}</Paragraph>
          <Paragraph style={styles.paragraph}>Tuổi: {user.age}</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button
            icon="pencil"
            mode="contained"
            onPress={() => navigation.navigate('EditUser', { user })}
            style={styles.button}
          >
            Chỉnh sửa
          </Button>
        </Card.Actions>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    marginBottom: 10,
  },
  avatar: {
    backgroundColor: '#4A90E2',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 5,
  },
  button: {
    marginTop: 10,
  },
});

export default UserDetailsScreen;

import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const UserForm = ({ initialValues, onSubmit }) => {
  const [name, setName] = useState(initialValues.name || '');
  const [email, setEmail] = useState(initialValues.email || '');
  const [age, setAge] = useState(initialValues.age ? initialValues.age.toString() : '');

  const handleSubmit = () => {
    onSubmit({ name, email, age: parseInt(age) });
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Tên"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Tuổi"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />
      <Button title="Lưu" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default UserForm;
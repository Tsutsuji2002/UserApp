import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, HelperText } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const UserForm = ({ initialValues, onSubmit }) => {
  const [name, setName] = useState(initialValues.name || '');
  const [email, setEmail] = useState(initialValues.email || '');
  const [age, setAge] = useState(initialValues.age ? initialValues.age.toString() : '');
  const [password, setPassword] = useState(initialValues.password || '');
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!name) newErrors.name = 'Tên không được để trống';
    if (!email) newErrors.email = 'Email không được để trống';
    if (email && !/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email không hợp lệ';
    if (!age) newErrors.age = 'Tuổi không được để trống';
    if (age && (isNaN(age) || parseInt(age) <= 0)) newErrors.age = 'Tuổi phải là một số dương';
    if (!password) newErrors.password = 'Mật khẩu không được để trống';
    if (password && password.length < 6) newErrors.password = 'Mật khẩu phải có ít nhất 6 ký tự';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      onSubmit({ name, email, age: parseInt(age), password });
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Tên"
        value={name}
        onChangeText={setName}
        style={styles.input}
        error={!!errors.name}
        left={<TextInput.Icon icon={() => <Icon name="human" size={20} color="#000" />} />}
      />
      <HelperText type="error" visible={!!errors.name}>
        {errors.name}
      </HelperText>
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        style={styles.input}
        error={!!errors.email}
        left={<TextInput.Icon icon={() => <Icon name="mail" size={20} color="#000" />} />}
      />
      <HelperText type="error" visible={!!errors.email}>
        {errors.email}
      </HelperText>
      <TextInput
        label="Tuổi"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
        style={styles.input}
        error={!!errors.age}
        left={<TextInput.Icon icon={() => <Icon name="calendar" size={20} color="#000" />} />}
      />
      <HelperText type="error" visible={!!errors.age}>
        {errors.age}
      </HelperText>
      <TextInput
        label="Mật khẩu"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={!showPassword}
        style={styles.input}
        error={!!errors.password}
        left={<TextInput.Icon icon={() => <Icon name="lock-open" size={20} color="#000" />} />}
        right={
          <TextInput.Icon
            icon={() => <Icon name={showPassword ? "eye-off" : "eye"} size={20} color="#000" />}
            onPress={() => setShowPassword(!showPassword)}
          />
        }
      />
      <HelperText type="error" visible={!!errors.password}>
        {errors.password}
      </HelperText>
      <Button mode="contained" onPress={handleSubmit} style={styles.button} icon={() => <Icon name="content-save" size={20} color="#fff" />}>
        Lưu
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  input: {
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
});

export default UserForm;

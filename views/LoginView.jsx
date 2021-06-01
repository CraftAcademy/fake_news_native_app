import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Keyboard,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import store from '../state/store/configureStore';
import { useSelector } from 'react-redux';
import Authentication from '../modules/Authentication';
import { AntDesign } from '@expo/vector-icons';

const LoginView = ({ navigation, route, fromMenu }) => {
  const { errorMessage } = useSelector((state) => state);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = new Authentication({ host: '' });

  const authenticate = async () => {
    if (fromMenu) {
      try {
        await auth.signIn(email, password);
        navigation.navigate('home');
      } catch (error) {}
    } else {
      try {
        const article = route.params.article;
        await auth.signIn(email, password);
        navigation.navigate('single-article', { article: article });
      } catch (error) {}
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss;
        store.dispatch({ type: 'RESET_ERROR' });
      }}>
      <View style={styles.container}>
        {fromMenu && (
          <TouchableOpacity style={styles.backButton}>
            <AntDesign
              name='arrowleft'
              style={{ color: '#CEC269', paddingLeft: 15 }}
              size={24}
              onPress={() => {
                navigation.navigate('home');
                store.dispatch({ type: 'RESET_ERROR' });
              }}
            />
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>
        )}
        <Text testID='login-header' style={styles.header}>
          Please log in to read this article
        </Text>
        <Text testID='error-message' style={styles.error}>
          {errorMessage}
        </Text>
        <TextInput
          testID='email-input'
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          textContentType='emailAddress'
          placeholder='Email'></TextInput>
        <TextInput
          testID='password-input'
          style={styles.input}
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
          placeholder='Password'></TextInput>
        <TouchableOpacity
          style={styles.button}
          testID='login-submit'
          onPress={() => authenticate()}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.text}>
          Don't have an account yet? Register{' '}
          <a
            style={{ color: '#CEC269' }}
            href='https://fake-news-user.netlify.app/registration'>
            here
          </a>
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111518',
  },
  error: {
    color: 'red',
    marginTop: 25,
    position: 'absolute',
    top: 25,
  },
  header: {
    fontSize: 25,
    color: 'white',
    marginBottom: 50,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    fontSize: 20,
    color: 'white',
  },
  button: {
    padding: 15,
    backgroundColor: '#CEC269',
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 18,
    textTransform: 'uppercase',
  },
  text: {
    color: 'white',
    marginTop: 50,
  },
  backButton: {
    flexDirection: 'row',
    position: 'absolute',
    top: 10,
    left: 0,
    alignItems: 'center',
  },
  backText: {
    color: '#CEC269',
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 30,
  },
});

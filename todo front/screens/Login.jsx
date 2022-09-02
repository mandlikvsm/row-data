import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { login } from '../redux/action'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

const Login = () => {
  const navigate = useNavigation()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const dispatch = useDispatch();
  const { isAuthenticated, loading, error } = useSelector(state => state.auth);

  const loginHandler = () => {
    dispatch(login(email, password))
    console.log('login')
    console.log(isAuthenticated, error);
  }

  useEffect(() => {
    console.log("Inside Login Screen");
  }, []);


  return (
    <View style={style.view}>
      <Text style={style.text}>Welcome</Text>
      <View style={style.view2}>
        <TextInput style={style.input}
          placeholder='Email'
          value={email}
          onChangeText={setEmail}
        />
        <TextInput style={style.input}
          secureTextEntry
          placeholder='Password'
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <Button
        disabled={!email || !password}
        style={style.btn}
        onPress={loginHandler}>
        <Text style={style.logintxt}>
          Login
        </Text>
      </Button>
      <Text style={style.or}>or</Text>
      <TouchableOpacity onPress={() => navigate.navigate('register')}>
        <Text style={style.signuptxt}>
          Sign Up
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login;

const style = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    margin: 20,
  },
  view2: {
    // width: 20,
    width: '70%',
  },
  or: {
    marginTop: 20,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#b5b5b5',
    padding: 10,
    paddingLeft: 15,
    borderRadius: 5,
    marginVertical: 15,
    fontSize: 15,
  },
  logintxt: {
    color: '#fff'
  },
  btn: {
    backgroundColor: '#900',
    padding: 5,
    width: '70%',
  },
  signuptxt: {
    color: '#900',
    height: 30,
    margin: 20,
  }
})
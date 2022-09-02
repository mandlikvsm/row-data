import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Avatar, Button } from 'react-native-paper'
// import { useNavigation } from '@react-navigation/native'

const Register = ({ navigation, route }) => {
  // const navigate = useNavigation()
  const [name, setName] = useState()
  const [avatar, setAvatar] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const registerHandler = () => {
    console.log(route.params.image);
    console.log('register');
  }


  useEffect(() => {
    if (route.params) {
      if (route.params.image) {
        setAvatar(route.params.image);
      }
    }
  }, [route])

  const handlerImage = () => {
    navigation.navigate('click')
  }

  return (
    <View style={style.view}>
      <Avatar.Image
        size={100}
        source={{ uri: avatar ? avatar : null }}
        style={style.avtar}
      />
      <TouchableOpacity onPress={handlerImage}>
        <Text style={{ color: '#900' }}>
          change Photo
        </Text>
      </TouchableOpacity>
      <View style={style.view2}>
        <TextInput
          style={style.input}
          placeholder='Name'
          value={name}
          onChangeText={setName}
        />
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
        onPress={registerHandler} >
        <Text style={style.logintxt}>
          Register
        </Text>
      </Button>
      <TouchableOpacity onPress={() => navigation.navigate('login')}>
        <Text style={style.signuptxt}>
          Have an Account, Login
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Register

const style = StyleSheet.create({

  view: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view2: {
    width: '70%',
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
  },
  avtar: {
    backgroundColor: '#900',
  }
})
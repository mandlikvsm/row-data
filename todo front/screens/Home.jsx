import { View, Text, TextInput, StyleSheet, ScrollView, SafeAreaView, Platform, StatusBar, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Task from '../components/Task'
import Icon from 'react-native-vector-icons/Entypo';
import { Dialog, Button } from 'react-native-paper';

const Home = () => {
  const navigation = useNavigation();
  const [openDialog, setOpenDialog] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const tasks = [{
    title: 'Task1', description: "Sample Task", completed: false, _id: "asasasas"
  }, {
    title: 'Task2', description: "Sample Task 2", completed: true, _id: "adfdfsas"
  },
  ];

  const hideDialog = () => {
    setOpenDialog(!openDialog)
  }

  const addTaskHandler = () => {
    console.log('Task Added');
    console.log(title);
    console.log(description);
  }


  return (
    <>
      <View style={style.header}>
        <ScrollView>
          <SafeAreaView>
            <Text style={style.text}>All Tasks</Text>
            {tasks.map((item, index) => (
              <Task key={item._id} title={item.title} description={item.description} status={item.completed} />
            ))}
            <TouchableOpacity style={style.icon} onPress={hideDialog}>
              <Icon name='add-to-list' size={20} color="#900" />
            </TouchableOpacity>
          </SafeAreaView>
        </ScrollView>
      </View>
      <Dialog visible={openDialog} onDismiss={hideDialog}>
        <Dialog.Title>Add A TASK</Dialog.Title>
        <Dialog.Content>
          <TextInput
            style={style.input}
            placeholder="Title"
            value={title}
            onChangeText={setTitle}
          />
          <TextInput
            style={style.input}
            placeholder="Description"
            value={description}
            onChangeText={setDescription}

          />
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity onPress={hideDialog}>
              <Text>CANCEL</Text>
            </TouchableOpacity >
            <Button onPress={addTaskHandler}
              color='#900'>
              ADD
            </Button>
          </View>
        </Dialog.Content>
      </Dialog>
    </>
  )
}

export default Home


const style = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  text: {
    fontSize: 28,
    textAlign: 'center',
    marginTop: 25,
    marginBottom: 20,
    color: '#fff',
    backgroundColor: '#474747',
  },
  icon: {
    backgroundColor: '#fff',
    width: 150,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    alignSelf: 'center',
    marginVertical: 20,
    elevation: 5,
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
  }
})
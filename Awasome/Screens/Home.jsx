import { View, Text , Image, TextInput, Button, Switch, ToastAndroid, ScrollView} from 'react-native'
import React, { useState } from 'react'

const Home = ({navigation}) => {
const [active, setActive] = useState(false);
console.log(active);

const showToast = () =>{
    ToastAndroid.show('Hello',ToastAndroid.SHORT);
};
  return (
    <View>
        <ScrollView>


     
      <Text>Home</Text>
      <Image source={{uri:'https://source.unsplash.com/user/c_v_r/1900x800'}}
       style = {{ width: 200, height: 200 }}
       />
      <TextInput style={{height:40,backgroundColor:'gray'}}></TextInput>
    <Button color='red' title='submit' onPress={()=> navigation.navigate("Home1")} />
    <Button title='toast' onPress={showToast} />
   <Switch value={active} onChange={() =>setActive((prev) =>!prev)}/>
    
       </ScrollView>
    </View>
  )
}

export default Home
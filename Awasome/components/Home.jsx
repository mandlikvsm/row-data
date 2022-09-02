import { Text, StyleSheet, View } from 'react-native'
import React from 'react'
import SafeAreaViewAndroid from './SafeAreaViewAndroid'
import { Button, Appbar } from 'react-native-paper'

 const Main =({navigation}) => {
  
    return (
      <View>
        <Appbar style={{backgroundColor:'yellow'}}>
          <Appbar.Content title="Welcome"/>
        </Appbar>
        <Text>Home</Text>
        <Button style={styles.btn}
        onPress={()=> navigation.navigate("Screen1")}
                >Go to Screen1 </Button>
      </View>
    )
  }


const styles = StyleSheet.create({})

const Home = ({navigation}) => {
    return(
      <>
      <SafeAreaViewAndroid Component = {Main} navigation = {navigation} />
      
      
      </>
    )
}

export default Home;
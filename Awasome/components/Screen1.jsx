import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

const Screen1 = ({navigation}) => {
  return (
    <View>
      <Text>Screen1</Text>
      <Button style={styles.btn}
                onPress={()=> navigation.navigate("Screen2")}
               
                >Go to Screen2 </Button>
    </View>
  )
}

export default Screen1

const styles = StyleSheet.create({})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

const Screen2 = ({navigation}) => {
  return (
    <View>
      <Text>Screen2</Text>
      <Button style={styles.btn}
                onPress={()=> navigation.navigate("Home")}
               
                >Go to Home </Button>
    </View>
  )
}

export default Screen2

const styles = StyleSheet.create({})
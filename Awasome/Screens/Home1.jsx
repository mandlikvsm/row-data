import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

const Home1 = ({navigation}) => {
    return (
        <View style={styles.parent}>
            <Text>Home1</Text>
         

            <Button style={styles.btn}
                onPress={()=> navigation.navigate("Screen1")}
               
                >click me </Button>
        </View>
    )
}

export default Home1

const styles = StyleSheet.create({
    parent: {
        backgroundColor: 'gray',
        marginTop: 50,
    },
    btn: {
        color: 'white',
        backgroundColor: 'red',
        margin: 30,
    },

})
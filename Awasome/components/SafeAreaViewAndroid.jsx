import { Text, StyleSheet, View , Platform, StatusBar, SafeAreaView} from 'react-native'
import React from 'react'

 const SafeAreaViewAndroid = ({Component, ...rest})=> {
  
    return (
      <View style={styles.main}>
        <SafeAreaView>

        <Component {...rest}/>
        </SafeAreaView >
      </View>
    )
  }


const styles = StyleSheet.create({
main:{
    paddingTop:Platform.OS === "android" ? StatusBar.currentHeight: 0,
    // backgroundColor:'red'
    
}

})

export default SafeAreaViewAndroid;

import React, { Component } from 'react';
import ReactNative, {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import colors from '@/runner/colors'



// A Loading Card
//
// Make use of everything you've learned so far.
//
// Hint: a flexDirection picked wisely can go a long way
// Hint: flex:1 is not just for containers
//


const LoadingCard= (props)=>{
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Icon style={[styles.text]} name='ios-time-outline' size={22} />
        <Text style={[styles.text,styles.center]}>Loading...</Text>
        <Icon style={[styles.text]} name='ios-close-outline' size={22} />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: colors[6],
    alignItems:'center',
    justifyContent:'center',
  },
  box: {
    width:200,
    height: 80,
    backgroundColor:'#CDDC39',
    padding:10,
    paddingTop:5,
    flexDirection:'row',
    justifyContent:'space-between',
  },
  text:{
    color: 'white',
    textAlign:'center'
  },
  center:{
    alignSelf:'center'
  }
});





LoadingCard.displayName = 'LoadingCard'
export default LoadingCard

import React from 'react'
import { StyleSheet, View } from 'react-native';

const Line = ({ width, marginTop, marginLeft }) => {
  return (
    <View style={{
      borderBottomColor: "#b8bece", 
      borderBottomWidth: StyleSheet.hairlineWidth, 
      alignSelf:'stretch',
      width,
      marginTop,
      marginLeft
    }}>

    </View>
  )
}

export default Line


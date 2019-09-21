import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components'


const PaymentCard = (props) => {
  return (
    <View>
      <Container>
        <Image source={props.image} resizeMode="contain" />
        <Text>{props.name}</Text>
      </Container>
    </View>
  )
}

export default PaymentCard

const Container = styled.View`
  flex-direction: row;
  margin-top: 15px;
  align-items: center;
`
const Image = styled.Image`
  width: 22px;
  height: 22px;
`
const Text = styled.Text`
  margin-left: 10px;
`
const Line = styled.View`
  background: black;
  height: 1.5;
  width: 50;
`
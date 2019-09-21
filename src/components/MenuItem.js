import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components'

const MenuItem = (props) => {
  return (
    <Container>
      <Image source={props.image} />
      <Name>{props.name}</Name>
    </Container>
  )
}

export default MenuItem

const Container = styled.View`
  flex-direction: row;
  margin: 5px 0px;
  border-bottom-color: #b8bece;
  border-top-color: #b8bece;
  border-top-width: 1;
  /* border-bottom-width: 1; */
  padding: 15px 0px 20px;
`
const Image = styled.Image`
  width: 22px;
  height: 22px;
`
const Name = styled.Text`
  font-size: 14px;
  padding-left: 20px;
`

import React from 'react'
import { StatusBar } from 'react-native'
import styled from 'styled-components'

import { colors } from '../utils'


const HeadComponent = () => {
  return (
    <HeadContent>
      <StatusBar barStyle="light-content" />
      <HeadText>{'My  '}</HeadText>
      <HeadLogo source={require('../assets/bus.png')} />
      <HeadText>{'  Bus'}</HeadText>
    </HeadContent>
  )
}

export default HeadComponent

const HeadContent = styled.View`
  flex-direction: row;
  height: 120px;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
`
const HeadText = styled.Text`
  color: ${colors.textColor};
  font-size: 20px;
  font-weight: 600;
`
const HeadLogo = styled.Image`
  width: 64px;
  height: 44px;
`